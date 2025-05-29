import CardNode from "../../../src/card-node";
import CardCollection from "../../../src/card-collection";
declare module "godot" {
    interface ResourceTypes {
        "res://scenes/card_collection_3d.tscn": PackedScene<CardCollection<CardNode>>;
    }
}
