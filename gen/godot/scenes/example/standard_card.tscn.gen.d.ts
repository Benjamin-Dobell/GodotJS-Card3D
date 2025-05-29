import StandardCard from "../../../../src/example/standard-card";
declare module "godot" {
    interface ResourceTypes {
        "res://scenes/example/standard_card.tscn": PackedScene<StandardCard>;
    }
}
