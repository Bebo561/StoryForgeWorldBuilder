package Models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)

type User struct {
	Email string `json:"email" bson:"email"`

}