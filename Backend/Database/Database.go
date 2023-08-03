package database

import (
	"context"
	"fmt"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var (
	ctx    context.Context
	client *mongo.Client
)

func init() {
	ctx, _ = context.WithTimeout(context.Background(), 10*time.Second)
	client, _ = mongo.Connect(ctx, options.Client().ApplyURI("mongodb://localhost:27017"))
}

// GetClient returns the MongoDB client instance
func GetClient() *mongo.Client {
	return client
}