package main

import (
	"net/http"
	"fmt"
	"os"
	"log"
	"context"
	"github.com/franciscoescher/goopenai"
	"github.com/joho/godotenv"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	
	"Backend/Models"
)

func main() {
	e := echo.New()

	e.Use(middleware.Logger())
	e.Use(middleware.Recover())
	e.Use(middleware.CORS())

	e.POST("/NameGenerator", handleNameGeneration)

	e.Logger.Fatal(e.Start(":5000"))
}

func handleNameGeneration(c echo.Context) error {
	// Parse the incoming JSON request
	var nameRequest Models.NameRequest
	if err := c.Bind(&nameRequest); err != nil {
		return err
	}
	fmt.Println(nameRequest)

	//Create prompt for ChatGPT
	prompt := fmt.Sprintf("Please generate a name for a dungeon and dragons character who is of the race: %s, and the additional queries of: %s", nameRequest.Race, nameRequest.Queries)

	// Call the ChatGPT API to generate a response
	gptResponse, err := generateResponseFromChatGPT(prompt)
	if err != nil {
		return err
	}

	// Create a response to send back to the client
	chatResponse := Models.ChatResponse{
		Response: gptResponse,
	}

	return c.JSON(http.StatusOK, chatResponse)
}

func generateResponseFromChatGPT(prompt string) (string, error) {
	// Load environment variables from the .env file
    if err := godotenv.Load(); err != nil {
        log.Fatal("Error loading .env file")
    }
	apiKey := os.Getenv("API_KEY")
	org := os.Getenv("ORG_KEY")

	//Initializes connection to OpenAI API
	client := goopenai.NewClient(apiKey, org)
	ctx := context.Background()

	//Calls ChatGPT with Prompt Given
	r := goopenai.CreateCompletionsRequest{
		Model: "gpt-3.5-turbo",
		Messages: []goopenai.Message{
			{
				Role:    "system",
				Content: "You are tasked with generating a name based upon the details I give you, only return to me the name generated and nothing else.",
			},
		 	{
		  	Role:    "user",
		  	Content: prompt,
		 	},
		},
		Temperature: 0.7,
	}
	  
	//Generates response data strucutre from ChatGPT API
	completions, err := client.CreateCompletions(ctx, r)
	   if err != nil {
		panic(err)
	}

	//Parse Response message, and return to frontend
	generatedResponse := completions.Choices[0].Message.Content
	return generatedResponse, nil
}


