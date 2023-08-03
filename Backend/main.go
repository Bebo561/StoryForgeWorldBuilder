package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"Backend/Database"
	"Backend/Models"
)

func main() {
	e := echo.New()

	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	//e.GET("/users", getUsers)

	e.Logger.Fatal(e.Start(":8080"))
}


