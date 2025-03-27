import StandardCard from "../../../src/example/standard-card";
import CardCollection from "../../../src/card-collection";
import DragController from "../../../src/drag-controller";
declare module "godot" {
    interface SceneNodes {
        "scenes/example/table.tscn": {
            DirectionalLight3D: DirectionalLight3D<{}>;
            Camera3D: Camera3D<{}>;
            Table: Node3D<{
                DragController: DragController<
                    StandardCard, 
                    {
                        TableCards: CardCollection<StandardCard>;
                        Hand: CardCollection<StandardCard>;
                    }
                >;
                TableSurface: MeshInstance3D<{}>;
            }>;
            Deck: Node3D<{
                CardMesh: Node3D<{
                    CardBackMesh: MeshInstance3D<{}>;
                    CardFrontMesh: MeshInstance3D<{}>;
                }>;
                StaticBody3D: StaticBody3D<{
                    CollisionShape3D: CollisionShape3D<{}>;
                }>;
                Node3D: Node3D<{}>;
                MeshInstance3D: MeshInstance3D<{}>;
            }>;
        };
    }
}
