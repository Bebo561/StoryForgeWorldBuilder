package Models

/*import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)
*/

//Request structure for the name generator
type NameRequest struct {
	Race string `json: "text"`
	Queries string `json: "text"`
}

