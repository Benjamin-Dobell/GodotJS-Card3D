declare module "godot" {
    interface SceneNodes {
        "scenes/card_3d.tscn": {
            CardMesh: Node3D<{
                CardBackMesh: MeshInstance3D<{}>;
                CardFrontMesh: MeshInstance3D<{}>;
            }>;
            StaticBody3D: StaticBody3D<{
                CollisionShape3D: CollisionShape3D<{}>;
            }>;
            Node3D: Node3D<{}>;
        };
    }
}
