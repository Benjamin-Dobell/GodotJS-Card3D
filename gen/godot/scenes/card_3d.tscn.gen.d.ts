import CardNode from "../../../src/card-node";
declare module "godot" {
    interface ResourceTypes {
        "res://scenes/card_3d.tscn": PackedScene<CardNode>;
    }
}
