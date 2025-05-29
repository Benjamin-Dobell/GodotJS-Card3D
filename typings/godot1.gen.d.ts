// AUTO-GENERATED
declare module "godot" {
    // _singleton_class_: NavigationServer2D
    namespace NavigationServer2D {
        enum ProcessInfo {
            InfoActiveMaps = 0,
            InfoRegionCount = 1,
            InfoAgentCount = 2,
            InfoLinkCount = 3,
            InfoPolygonCount = 4,
            InfoEdgeCount = 5,
            InfoEdgeMergeCount = 6,
            InfoEdgeConnectionCount = 7,
            InfoEdgeFreeCount = 8,
            InfoObstacleCount = 9,
        }
    }
    /** A server interface for low-level 2D navigation access.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_navigationserver2d.html  
     */
    class NavigationServer2D extends GObject {
        /** Constant to get the number of active navigation maps. */
        static readonly INFO_ACTIVE_MAPS = 0
        
        /** Constant to get the number of active navigation regions. */
        static readonly INFO_REGION_COUNT = 1
        
        /** Constant to get the number of active navigation agents processing avoidance. */
        static readonly INFO_AGENT_COUNT = 2
        
        /** Constant to get the number of active navigation links. */
        static readonly INFO_LINK_COUNT = 3
        
        /** Constant to get the number of navigation mesh polygons. */
        static readonly INFO_POLYGON_COUNT = 4
        
        /** Constant to get the number of navigation mesh polygon edges. */
        static readonly INFO_EDGE_COUNT = 5
        
        /** Constant to get the number of navigation mesh polygon edges that were merged due to edge key overlap. */
        static readonly INFO_EDGE_MERGE_COUNT = 6
        
        /** Constant to get the number of navigation mesh polygon edges that are considered connected by edge proximity. */
        static readonly INFO_EDGE_CONNECTION_COUNT = 7
        
        /** Constant to get the number of navigation mesh polygon edges that could not be merged but may be still connected by edge proximity or with links. */
        static readonly INFO_EDGE_FREE_COUNT = 8
        
        /** Constant to get the number of active navigation obstacles. */
        static readonly INFO_OBSTACLE_COUNT = 9
        
        /** Returns all created navigation map [RID]s on the NavigationServer. This returns both 2D and 3D created navigation maps as there is technically no distinction between them. */
        static getMaps(): GArray
        
        /** Create a new map. */
        static mapCreate(): Rid
        
        /** Sets the map active. */
        static mapSetActive(map: Rid, active: boolean): void
        
        /** Returns `true` if the map is active. */
        static mapIsActive(map: Rid): boolean
        
        /** Sets the map cell size used to rasterize the navigation mesh vertices. Must match with the cell size of the used navigation meshes. */
        static mapSetCellSize(map: Rid, cellSize: float64): void
        
        /** Returns the map cell size used to rasterize the navigation mesh vertices. */
        static mapGetCellSize(map: Rid): float64
        
        /** Set the navigation [param map] edge connection use. If [param enabled] is `true`, the navigation map allows navigation regions to use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin. */
        static mapSetUseEdgeConnections(map: Rid, enabled: boolean): void
        
        /** Returns whether the navigation [param map] allows navigation regions to use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin. */
        static mapGetUseEdgeConnections(map: Rid): boolean
        
        /** Set the map edge connection margin used to weld the compatible region edges. */
        static mapSetEdgeConnectionMargin(map: Rid, margin: float64): void
        
        /** Returns the edge connection margin of the map. The edge connection margin is a distance used to connect two regions. */
        static mapGetEdgeConnectionMargin(map: Rid): float64
        
        /** Set the map's link connection radius used to connect links to navigation polygons. */
        static mapSetLinkConnectionRadius(map: Rid, radius: float64): void
        
        /** Returns the link connection radius of the map. This distance is the maximum range any link will search for navigation mesh polygons to connect to. */
        static mapGetLinkConnectionRadius(map: Rid): float64
        
        /** Returns the navigation path to reach the destination from the origin. [param navigation_layers] is a bitmask of all region navigation layers that are allowed to be in the path. */
        static mapGetPath(map: Rid, origin: Vector2, destination: Vector2, optimize: boolean, navigationLayers?: int64 /* = 1 */): PackedVector2Array
        
        /** Returns the navigation mesh surface point closest to the provided [param to_point] on the navigation [param map]. */
        static mapGetClosestPoint(map: Rid, toPoint: Vector2): Vector2
        
        /** Returns the owner region RID for the navigation mesh surface point closest to the provided [param to_point] on the navigation [param map]. */
        static mapGetClosestPointOwner(map: Rid, toPoint: Vector2): Rid
        
        /** Returns all navigation link [RID]s that are currently assigned to the requested navigation [param map]. */
        static mapGetLinks(map: Rid): GArray
        
        /** Returns all navigation regions [RID]s that are currently assigned to the requested navigation [param map]. */
        static mapGetRegions(map: Rid): GArray
        
        /** Returns all navigation agents [RID]s that are currently assigned to the requested navigation [param map]. */
        static mapGetAgents(map: Rid): GArray
        
        /** Returns all navigation obstacle [RID]s that are currently assigned to the requested navigation [param map]. */
        static mapGetObstacles(map: Rid): GArray
        
        /** This function immediately forces synchronization of the specified navigation [param map] [RID]. By default navigation maps are only synchronized at the end of each physics frame. This function can be used to immediately (re)calculate all the navigation meshes and region connections of the navigation map. This makes it possible to query a navigation path for a changed map immediately and in the same frame (multiple times if needed).  
         *  Due to technical restrictions the current NavigationServer command queue will be flushed. This means all already queued update commands for this physics frame will be executed, even those intended for other maps, regions and agents not part of the specified map. The expensive computation of the navigation meshes and region connections of a map will only be done for the specified map. Other maps will receive the normal synchronization at the end of the physics frame. Should the specified map receive changes after the forced update it will update again as well when the other maps receive their update.  
         *  Avoidance processing and dispatch of the `safe_velocity` signals is unaffected by this function and continues to happen for all maps and agents at the end of the physics frame.  
         *      
         *  **Note:** With great power comes great responsibility. This function should only be used by users that really know what they are doing and have a good reason for it. Forcing an immediate update of a navigation map requires locking the NavigationServer and flushing the entire NavigationServer command queue. Not only can this severely impact the performance of a game but it can also introduce bugs if used inappropriately without much foresight.  
         */
        static mapForceUpdate(map: Rid): void
        
        /** Returns the current iteration id of the navigation map. Every time the navigation map changes and synchronizes the iteration id increases. An iteration id of 0 means the navigation map has never synchronized.  
         *      
         *  **Note:** The iteration id will wrap back to 1 after reaching its range limit.  
         */
        static mapGetIterationId(map: Rid): int64
        
        /** If [param enabled] is `true` the [param map] synchronization uses an async process that runs on a background thread. */
        static mapSetUseAsyncIterations(map: Rid, enabled: boolean): void
        
        /** Returns `true` if the [param map] synchronization uses an async process that runs on a background thread. */
        static mapGetUseAsyncIterations(map: Rid): boolean
        
        /** Returns a random position picked from all map region polygons with matching [param navigation_layers].  
         *  If [param uniformly] is `true`, all map regions, polygons, and faces are weighted by their surface area (slower).  
         *  If [param uniformly] is `false`, just a random region and a random polygon are picked (faster).  
         */
        static mapGetRandomPoint(map: Rid, navigationLayers: int64, uniformly: boolean): Vector2
        
        /** Queries a path in a given navigation map. Start and target position and other parameters are defined through [NavigationPathQueryParameters2D]. Updates the provided [NavigationPathQueryResult2D] result object with the path among other results requested by the query. After the process is finished the optional [param callback] will be called. */
        static queryPath(parameters: NavigationPathQueryParameters2D, result: NavigationPathQueryResult2D, callback?: Callable /* = new Callable() */): void
        
        /** Creates a new region. */
        static regionCreate(): Rid
        
        /** Returns the current iteration ID of the navigation region. Every time the navigation region changes and synchronizes, the iteration ID increases. An iteration ID of `0` means the navigation region has never synchronized.  
         *      
         *  **Note:** The iteration ID will wrap around to `1` after reaching its range limit.  
         */
        static regionGetIterationId(region: Rid): int64
        
        /** If [param enabled] is `true` the specified [param region] will contribute to its current navigation map. */
        static regionSetEnabled(region: Rid, enabled: boolean): void
        
        /** Returns `true` if the specified [param region] is enabled. */
        static regionGetEnabled(region: Rid): boolean
        
        /** If [param enabled] is `true`, the navigation [param region] will use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin. */
        static regionSetUseEdgeConnections(region: Rid, enabled: boolean): void
        
        /** Returns whether the navigation [param region] is set to use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin. */
        static regionGetUseEdgeConnections(region: Rid): boolean
        
        /** Sets the [param enter_cost] for this [param region]. */
        static regionSetEnterCost(region: Rid, enterCost: float64): void
        
        /** Returns the enter cost of this [param region]. */
        static regionGetEnterCost(region: Rid): float64
        
        /** Sets the [param travel_cost] for this [param region]. */
        static regionSetTravelCost(region: Rid, travelCost: float64): void
        
        /** Returns the travel cost of this [param region]. */
        static regionGetTravelCost(region: Rid): float64
        
        /** Set the `ObjectID` of the object which manages this region. */
        static regionSetOwnerId(region: Rid, ownerId: int64): void
        
        /** Returns the `ObjectID` of the object which manages this region. */
        static regionGetOwnerId(region: Rid): int64
        
        /** Returns `true` if the provided [param point] in world space is currently owned by the provided navigation [param region]. Owned in this context means that one of the region's navigation mesh polygon faces has a possible position at the closest distance to this point compared to all other navigation meshes from other navigation regions that are also registered on the navigation map of the provided region.  
         *  If multiple navigation meshes have positions at equal distance the navigation region whose polygons are processed first wins the ownership. Polygons are processed in the same order that navigation regions were registered on the NavigationServer.  
         *      
         *  **Note:** If navigation meshes from different navigation regions overlap (which should be avoided in general) the result might not be what is expected.  
         */
        static regionOwnsPoint(region: Rid, point: Vector2): boolean
        
        /** Sets the map for the region. */
        static regionSetMap(region: Rid, map: Rid): void
        
        /** Returns the navigation map [RID] the requested [param region] is currently assigned to. */
        static regionGetMap(region: Rid): Rid
        
        /** Set the region's navigation layers. This allows selecting regions from a path request (when using [method NavigationServer2D.map_get_path]). */
        static regionSetNavigationLayers(region: Rid, navigationLayers: int64): void
        
        /** Returns the region's navigation layers. */
        static regionGetNavigationLayers(region: Rid): int64
        
        /** Sets the global transformation for the region. */
        static regionSetTransform(region: Rid, transform: Transform2D): void
        
        /** Returns the global transformation of this [param region]. */
        static regionGetTransform(region: Rid): Transform2D
        
        /** Sets the [param navigation_polygon] for the region. */
        static regionSetNavigationPolygon(region: Rid, navigationPolygon: NavigationPolygon): void
        
        /** Returns how many connections this [param region] has with other regions in the map. */
        static regionGetConnectionsCount(region: Rid): int64
        
        /** Returns the starting point of a connection door. [param connection] is an index between 0 and the return value of [method region_get_connections_count]. */
        static regionGetConnectionPathwayStart(region: Rid, connection: int64): Vector2
        
        /** Returns the ending point of a connection door. [param connection] is an index between 0 and the return value of [method region_get_connections_count]. */
        static regionGetConnectionPathwayEnd(region: Rid, connection: int64): Vector2
        
        /** Returns the navigation mesh surface point closest to the provided [param to_point] on the navigation [param region]. */
        static regionGetClosestPoint(region: Rid, toPoint: Vector2): Vector2
        
        /** Returns a random position picked from all region polygons with matching [param navigation_layers].  
         *  If [param uniformly] is `true`, all region polygons and faces are weighted by their surface area (slower).  
         *  If [param uniformly] is `false`, just a random polygon and face is picked (faster).  
         */
        static regionGetRandomPoint(region: Rid, navigationLayers: int64, uniformly: boolean): Vector2
        
        /** Returns the axis-aligned rectangle for the [param region]'s transformed navigation mesh. */
        static regionGetBounds(region: Rid): Rect2
        
        /** Create a new link between two positions on a map. */
        static linkCreate(): Rid
        
        /** Returns the current iteration ID of the navigation link. Every time the navigation link changes and synchronizes, the iteration ID increases. An iteration ID of `0` means the navigation link has never synchronized.  
         *      
         *  **Note:** The iteration ID will wrap around to `1` after reaching its range limit.  
         */
        static linkGetIterationId(link: Rid): int64
        
        /** Sets the navigation map [RID] for the link. */
        static linkSetMap(link: Rid, map: Rid): void
        
        /** Returns the navigation map [RID] the requested [param link] is currently assigned to. */
        static linkGetMap(link: Rid): Rid
        
        /** If [param enabled] is `true`, the specified [param link] will contribute to its current navigation map. */
        static linkSetEnabled(link: Rid, enabled: boolean): void
        
        /** Returns `true` if the specified [param link] is enabled. */
        static linkGetEnabled(link: Rid): boolean
        
        /** Sets whether this [param link] can be travelled in both directions. */
        static linkSetBidirectional(link: Rid, bidirectional: boolean): void
        
        /** Returns whether this [param link] can be travelled in both directions. */
        static linkIsBidirectional(link: Rid): boolean
        
        /** Set the links's navigation layers. This allows selecting links from a path request (when using [method NavigationServer2D.map_get_path]). */
        static linkSetNavigationLayers(link: Rid, navigationLayers: int64): void
        
        /** Returns the navigation layers for this [param link]. */
        static linkGetNavigationLayers(link: Rid): int64
        
        /** Sets the entry position for this [param link]. */
        static linkSetStartPosition(link: Rid, position: Vector2): void
        
        /** Returns the starting position of this [param link]. */
        static linkGetStartPosition(link: Rid): Vector2
        
        /** Sets the exit position for the [param link]. */
        static linkSetEndPosition(link: Rid, position: Vector2): void
        
        /** Returns the ending position of this [param link]. */
        static linkGetEndPosition(link: Rid): Vector2
        
        /** Sets the [param enter_cost] for this [param link]. */
        static linkSetEnterCost(link: Rid, enterCost: float64): void
        
        /** Returns the enter cost of this [param link]. */
        static linkGetEnterCost(link: Rid): float64
        
        /** Sets the [param travel_cost] for this [param link]. */
        static linkSetTravelCost(link: Rid, travelCost: float64): void
        
        /** Returns the travel cost of this [param link]. */
        static linkGetTravelCost(link: Rid): float64
        
        /** Set the `ObjectID` of the object which manages this link. */
        static linkSetOwnerId(link: Rid, ownerId: int64): void
        
        /** Returns the `ObjectID` of the object which manages this link. */
        static linkGetOwnerId(link: Rid): int64
        
        /** Creates the agent. */
        static agentCreate(): Rid
        
        /** If [param enabled] is `true`, the specified [param agent] uses avoidance. */
        static agentSetAvoidanceEnabled(agent: Rid, enabled: boolean): void
        
        /** Return `true` if the specified [param agent] uses avoidance. */
        static agentGetAvoidanceEnabled(agent: Rid): boolean
        
        /** Puts the agent in the map. */
        static agentSetMap(agent: Rid, map: Rid): void
        
        /** Returns the navigation map [RID] the requested [param agent] is currently assigned to. */
        static agentGetMap(agent: Rid): Rid
        
        /** If [param paused] is `true` the specified [param agent] will not be processed, e.g. calculate avoidance velocities or receive avoidance callbacks. */
        static agentSetPaused(agent: Rid, paused: boolean): void
        
        /** Returns `true` if the specified [param agent] is paused. */
        static agentGetPaused(agent: Rid): boolean
        
        /** Sets the maximum distance to other agents this agent takes into account in the navigation. The larger this number, the longer the running time of the simulation. If the number is too low, the simulation will not be safe. */
        static agentSetNeighborDistance(agent: Rid, distance: float64): void
        
        /** Returns the maximum distance to other agents the specified [param agent] takes into account in the navigation. */
        static agentGetNeighborDistance(agent: Rid): float64
        
        /** Sets the maximum number of other agents the agent takes into account in the navigation. The larger this number, the longer the running time of the simulation. If the number is too low, the simulation will not be safe. */
        static agentSetMaxNeighbors(agent: Rid, count: int64): void
        
        /** Returns the maximum number of other agents the specified [param agent] takes into account in the navigation. */
        static agentGetMaxNeighbors(agent: Rid): int64
        
        /** The minimal amount of time for which the agent's velocities that are computed by the simulation are safe with respect to other agents. The larger this number, the sooner this agent will respond to the presence of other agents, but the less freedom this agent has in choosing its velocities. A too high value will slow down agents movement considerably. Must be positive. */
        static agentSetTimeHorizonAgents(agent: Rid, timeHorizon: float64): void
        
        /** Returns the minimal amount of time for which the specified [param agent]'s velocities that are computed by the simulation are safe with respect to other agents. */
        static agentGetTimeHorizonAgents(agent: Rid): float64
        
        /** The minimal amount of time for which the agent's velocities that are computed by the simulation are safe with respect to static avoidance obstacles. The larger this number, the sooner this agent will respond to the presence of static avoidance obstacles, but the less freedom this agent has in choosing its velocities. A too high value will slow down agents movement considerably. Must be positive. */
        static agentSetTimeHorizonObstacles(agent: Rid, timeHorizon: float64): void
        
        /** Returns the minimal amount of time for which the specified [param agent]'s velocities that are computed by the simulation are safe with respect to static avoidance obstacles. */
        static agentGetTimeHorizonObstacles(agent: Rid): float64
        
        /** Sets the radius of the agent. */
        static agentSetRadius(agent: Rid, radius: float64): void
        
        /** Returns the radius of the specified [param agent]. */
        static agentGetRadius(agent: Rid): float64
        
        /** Sets the maximum speed of the agent. Must be positive. */
        static agentSetMaxSpeed(agent: Rid, maxSpeed: float64): void
        
        /** Returns the maximum speed of the specified [param agent]. */
        static agentGetMaxSpeed(agent: Rid): float64
        
        /** Replaces the internal velocity in the collision avoidance simulation with [param velocity] for the specified [param agent]. When an agent is teleported to a new position far away this function should be used in the same frame. If called frequently this function can get agents stuck. */
        static agentSetVelocityForced(agent: Rid, velocity: Vector2): void
        
        /** Sets [param velocity] as the new wanted velocity for the specified [param agent]. The avoidance simulation will try to fulfill this velocity if possible but will modify it to avoid collision with other agent's and obstacles. When an agent is teleported to a new position far away use [method agent_set_velocity_forced] instead to reset the internal velocity state. */
        static agentSetVelocity(agent: Rid, velocity: Vector2): void
        
        /** Returns the velocity of the specified [param agent]. */
        static agentGetVelocity(agent: Rid): Vector2
        
        /** Sets the position of the agent in world space. */
        static agentSetPosition(agent: Rid, position: Vector2): void
        
        /** Returns the position of the specified [param agent] in world space. */
        static agentGetPosition(agent: Rid): Vector2
        
        /** Returns `true` if the map got changed the previous frame. */
        static agentIsMapChanged(agent: Rid): boolean
        
        /** Sets the callback [Callable] that gets called after each avoidance processing step for the [param agent]. The calculated `safe_velocity` will be dispatched with a signal to the object just before the physics calculations.  
         *      
         *  **Note:** Created callbacks are always processed independently of the SceneTree state as long as the agent is on a navigation map and not freed. To disable the dispatch of a callback from an agent use [method agent_set_avoidance_callback] again with an empty [Callable].  
         */
        static agentSetAvoidanceCallback(agent: Rid, callback: Callable): void
        
        /** Return `true` if the specified [param agent] has an avoidance callback. */
        static agentHasAvoidanceCallback(agent: Rid): boolean
        
        /** Set the agent's `avoidance_layers` bitmask. */
        static agentSetAvoidanceLayers(agent: Rid, layers: int64): void
        
        /** Returns the `avoidance_layers` bitmask of the specified [param agent]. */
        static agentGetAvoidanceLayers(agent: Rid): int64
        
        /** Set the agent's `avoidance_mask` bitmask. */
        static agentSetAvoidanceMask(agent: Rid, mask: int64): void
        
        /** Returns the `avoidance_mask` bitmask of the specified [param agent]. */
        static agentGetAvoidanceMask(agent: Rid): int64
        
        /** Set the agent's `avoidance_priority` with a [param priority] between 0.0 (lowest priority) to 1.0 (highest priority).  
         *  The specified [param agent] does not adjust the velocity for other agents that would match the `avoidance_mask` but have a lower `avoidance_priority`. This in turn makes the other agents with lower priority adjust their velocities even more to avoid collision with this agent.  
         */
        static agentSetAvoidancePriority(agent: Rid, priority: float64): void
        
        /** Returns the `avoidance_priority` of the specified [param agent]. */
        static agentGetAvoidancePriority(agent: Rid): float64
        
        /** Creates a new navigation obstacle. */
        static obstacleCreate(): Rid
        
        /** If [param enabled] is `true`, the provided [param obstacle] affects avoidance using agents. */
        static obstacleSetAvoidanceEnabled(obstacle: Rid, enabled: boolean): void
        
        /** Returns `true` if the provided [param obstacle] has avoidance enabled. */
        static obstacleGetAvoidanceEnabled(obstacle: Rid): boolean
        
        /** Sets the navigation map [RID] for the obstacle. */
        static obstacleSetMap(obstacle: Rid, map: Rid): void
        
        /** Returns the navigation map [RID] the requested [param obstacle] is currently assigned to. */
        static obstacleGetMap(obstacle: Rid): Rid
        
        /** If [param paused] is `true` the specified [param obstacle] will not be processed, e.g. affect avoidance velocities. */
        static obstacleSetPaused(obstacle: Rid, paused: boolean): void
        
        /** Returns `true` if the specified [param obstacle] is paused. */
        static obstacleGetPaused(obstacle: Rid): boolean
        
        /** Sets the radius of the dynamic obstacle. */
        static obstacleSetRadius(obstacle: Rid, radius: float64): void
        
        /** Returns the radius of the specified dynamic [param obstacle]. */
        static obstacleGetRadius(obstacle: Rid): float64
        
        /** Sets [param velocity] of the dynamic [param obstacle]. Allows other agents to better predict the movement of the dynamic obstacle. Only works in combination with the radius of the obstacle. */
        static obstacleSetVelocity(obstacle: Rid, velocity: Vector2): void
        
        /** Returns the velocity of the specified dynamic [param obstacle]. */
        static obstacleGetVelocity(obstacle: Rid): Vector2
        
        /** Sets the position of the obstacle in world space. */
        static obstacleSetPosition(obstacle: Rid, position: Vector2): void
        
        /** Returns the position of the specified [param obstacle] in world space. */
        static obstacleGetPosition(obstacle: Rid): Vector2
        
        /** Sets the outline vertices for the obstacle. If the vertices are winded in clockwise order agents will be pushed in by the obstacle, else they will be pushed out. */
        static obstacleSetVertices(obstacle: Rid, vertices: PackedVector2Array | Vector2[]): void
        
        /** Returns the outline vertices for the specified [param obstacle]. */
        static obstacleGetVertices(obstacle: Rid): PackedVector2Array
        
        /** Set the obstacles's `avoidance_layers` bitmask. */
        static obstacleSetAvoidanceLayers(obstacle: Rid, layers: int64): void
        
        /** Returns the `avoidance_layers` bitmask of the specified [param obstacle]. */
        static obstacleGetAvoidanceLayers(obstacle: Rid): int64
        
        /** Parses the [SceneTree] for source geometry according to the properties of [param navigation_polygon]. Updates the provided [param source_geometry_data] resource with the resulting data. The resource can then be used to bake a navigation mesh with [method bake_from_source_geometry_data]. After the process is finished the optional [param callback] will be called.  
         *      
         *  **Note:** This function needs to run on the main thread or with a deferred call as the SceneTree is not thread-safe.  
         *  **Performance:** While convenient, reading data arrays from [Mesh] resources can affect the frame rate negatively. The data needs to be received from the GPU, stalling the [RenderingServer] in the process. For performance prefer the use of e.g. collision shapes or creating the data arrays entirely in code.  
         */
        static parseSourceGeometryData(navigationPolygon: NavigationPolygon, sourceGeometryData: NavigationMeshSourceGeometryData2D, rootNode: Node, callback?: Callable /* = new Callable() */): void
        
        /** Bakes the provided [param navigation_polygon] with the data from the provided [param source_geometry_data]. After the process is finished the optional [param callback] will be called. */
        static bakeFromSourceGeometryData(navigationPolygon: NavigationPolygon, sourceGeometryData: NavigationMeshSourceGeometryData2D, callback?: Callable /* = new Callable() */): void
        
        /** Bakes the provided [param navigation_polygon] with the data from the provided [param source_geometry_data] as an async task running on a background thread. After the process is finished the optional [param callback] will be called. */
        static bakeFromSourceGeometryDataAsync(navigationPolygon: NavigationPolygon, sourceGeometryData: NavigationMeshSourceGeometryData2D, callback?: Callable /* = new Callable() */): void
        
        /** Returns `true` when the provided navigation polygon is being baked on a background thread. */
        static isBakingNavigationPolygon(navigationPolygon: NavigationPolygon): boolean
        
        /** Creates a new source geometry parser. If a [Callable] is set for the parser with [method source_geometry_parser_set_callback] the callback will be called for every single node that gets parsed whenever [method parse_source_geometry_data] is used. */
        static sourceGeometryParserCreate(): Rid
        
        /** Sets the [param callback] [Callable] for the specific source geometry [param parser]. The [Callable] will receive a call with the following parameters:  
         *  - `navigation_mesh` - The [NavigationPolygon] reference used to define the parse settings. Do NOT edit or add directly to the navigation mesh.  
         *  - `source_geometry_data` - The [NavigationMeshSourceGeometryData2D] reference. Add custom source geometry for navigation mesh baking to this object.  
         *  - `node` - The [Node] that is parsed.  
         */
        static sourceGeometryParserSetCallback(parser: Rid, callback: Callable): void
        
        /** Returns a simplified version of [param path] with less critical path points removed. The simplification amount is in worlds units and controlled by [param epsilon]. The simplification uses a variant of Ramer-Douglas-Peucker algorithm for curve point decimation.  
         *  Path simplification can be helpful to mitigate various path following issues that can arise with certain agent types and script behaviors. E.g. "steering" agents or avoidance in "open fields".  
         */
        static simplifyPath(path: PackedVector2Array | Vector2[], epsilon: float64): PackedVector2Array
        
        /** Destroys the given RID. */
        static freeRid(rid: Rid): void
        
        /** Control activation of this server. */
        static setActive(active: boolean): void
        
        /** If `true` enables debug mode on the NavigationServer. */
        static setDebugEnabled(enabled: boolean): void
        
        /** Returns `true` when the NavigationServer has debug enabled. */
        static getDebugEnabled(): boolean
        
        /** Returns information about the current state of the NavigationServer. See [enum ProcessInfo] for a list of available states. */
        static getProcessInfo(processInfo: NavigationServer2D.ProcessInfo): int64
        
        /** Emitted when a navigation map is updated, when a region moves or is modified. */
        static readonly mapChanged: Signal<(map: Rid) => void>
        
        /** Emitted when navigation debug settings are changed. Only available in debug builds. */
        static readonly navigationDebugChanged: Signal<() => void>
        
        /** Emitted when avoidance debug settings are changed. Only available in debug builds. */
        static readonly avoidanceDebugChanged: Signal<() => void>
    }
    // _singleton_class_: NavigationServer3D
    namespace NavigationServer3D {
        enum ProcessInfo {
            InfoActiveMaps = 0,
            InfoRegionCount = 1,
            InfoAgentCount = 2,
            InfoLinkCount = 3,
            InfoPolygonCount = 4,
            InfoEdgeCount = 5,
            InfoEdgeMergeCount = 6,
            InfoEdgeConnectionCount = 7,
            InfoEdgeFreeCount = 8,
            InfoObstacleCount = 9,
        }
    }
    /** A server interface for low-level 3D navigation access.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_navigationserver3d.html  
     */
    class NavigationServer3D extends GObject {
        /** Constant to get the number of active navigation maps. */
        static readonly INFO_ACTIVE_MAPS = 0
        
        /** Constant to get the number of active navigation regions. */
        static readonly INFO_REGION_COUNT = 1
        
        /** Constant to get the number of active navigation agents processing avoidance. */
        static readonly INFO_AGENT_COUNT = 2
        
        /** Constant to get the number of active navigation links. */
        static readonly INFO_LINK_COUNT = 3
        
        /** Constant to get the number of navigation mesh polygons. */
        static readonly INFO_POLYGON_COUNT = 4
        
        /** Constant to get the number of navigation mesh polygon edges. */
        static readonly INFO_EDGE_COUNT = 5
        
        /** Constant to get the number of navigation mesh polygon edges that were merged due to edge key overlap. */
        static readonly INFO_EDGE_MERGE_COUNT = 6
        
        /** Constant to get the number of navigation mesh polygon edges that are considered connected by edge proximity. */
        static readonly INFO_EDGE_CONNECTION_COUNT = 7
        
        /** Constant to get the number of navigation mesh polygon edges that could not be merged but may be still connected by edge proximity or with links. */
        static readonly INFO_EDGE_FREE_COUNT = 8
        
        /** Constant to get the number of active navigation obstacles. */
        static readonly INFO_OBSTACLE_COUNT = 9
        
        /** Returns all created navigation map [RID]s on the NavigationServer. This returns both 2D and 3D created navigation maps as there is technically no distinction between them. */
        static getMaps(): GArray
        
        /** Create a new map. */
        static mapCreate(): Rid
        
        /** Sets the map active. */
        static mapSetActive(map: Rid, active: boolean): void
        
        /** Returns `true` if the map is active. */
        static mapIsActive(map: Rid): boolean
        
        /** Sets the map up direction. */
        static mapSetUp(map: Rid, up: Vector3): void
        
        /** Returns the map's up direction. */
        static mapGetUp(map: Rid): Vector3
        
        /** Sets the map cell size used to rasterize the navigation mesh vertices on the XZ plane. Must match with the cell size of the used navigation meshes. */
        static mapSetCellSize(map: Rid, cellSize: float64): void
        
        /** Returns the map cell size used to rasterize the navigation mesh vertices on the XZ plane. */
        static mapGetCellSize(map: Rid): float64
        
        /** Sets the map cell height used to rasterize the navigation mesh vertices on the Y axis. Must match with the cell height of the used navigation meshes. */
        static mapSetCellHeight(map: Rid, cellHeight: float64): void
        
        /** Returns the map cell height used to rasterize the navigation mesh vertices on the Y axis. */
        static mapGetCellHeight(map: Rid): float64
        
        /** Set the map's internal merge rasterizer cell scale used to control merging sensitivity. */
        static mapSetMergeRasterizerCellScale(map: Rid, scale: float64): void
        
        /** Returns map's internal merge rasterizer cell scale. */
        static mapGetMergeRasterizerCellScale(map: Rid): float64
        
        /** Set the navigation [param map] edge connection use. If [param enabled] is `true`, the navigation map allows navigation regions to use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin. */
        static mapSetUseEdgeConnections(map: Rid, enabled: boolean): void
        
        /** Returns `true` if the navigation [param map] allows navigation regions to use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin. */
        static mapGetUseEdgeConnections(map: Rid): boolean
        
        /** Set the map edge connection margin used to weld the compatible region edges. */
        static mapSetEdgeConnectionMargin(map: Rid, margin: float64): void
        
        /** Returns the edge connection margin of the map. This distance is the minimum vertex distance needed to connect two edges from different regions. */
        static mapGetEdgeConnectionMargin(map: Rid): float64
        
        /** Set the map's link connection radius used to connect links to navigation polygons. */
        static mapSetLinkConnectionRadius(map: Rid, radius: float64): void
        
        /** Returns the link connection radius of the map. This distance is the maximum range any link will search for navigation mesh polygons to connect to. */
        static mapGetLinkConnectionRadius(map: Rid): float64
        
        /** Returns the navigation path to reach the destination from the origin. [param navigation_layers] is a bitmask of all region navigation layers that are allowed to be in the path. */
        static mapGetPath(map: Rid, origin: Vector3, destination: Vector3, optimize: boolean, navigationLayers?: int64 /* = 1 */): PackedVector3Array
        
        /** Returns the navigation mesh surface point closest to the provided [param start] and [param end] segment on the navigation [param map].  
         *  If [param use_collision] is `true`, a closest point test is only done when the segment intersects with the navigation mesh surface.  
         */
        static mapGetClosestPointToSegment(map: Rid, start: Vector3, end: Vector3, useCollision?: boolean /* = false */): Vector3
        
        /** Returns the navigation mesh surface point closest to the provided [param to_point] on the navigation [param map]. */
        static mapGetClosestPoint(map: Rid, toPoint: Vector3): Vector3
        
        /** Returns the navigation mesh surface normal closest to the provided [param to_point] on the navigation [param map]. */
        static mapGetClosestPointNormal(map: Rid, toPoint: Vector3): Vector3
        
        /** Returns the owner region RID for the navigation mesh surface point closest to the provided [param to_point] on the navigation [param map]. */
        static mapGetClosestPointOwner(map: Rid, toPoint: Vector3): Rid
        
        /** Returns all navigation link [RID]s that are currently assigned to the requested navigation [param map]. */
        static mapGetLinks(map: Rid): GArray
        
        /** Returns all navigation regions [RID]s that are currently assigned to the requested navigation [param map]. */
        static mapGetRegions(map: Rid): GArray
        
        /** Returns all navigation agents [RID]s that are currently assigned to the requested navigation [param map]. */
        static mapGetAgents(map: Rid): GArray
        
        /** Returns all navigation obstacle [RID]s that are currently assigned to the requested navigation [param map]. */
        static mapGetObstacles(map: Rid): GArray
        
        /** This function immediately forces synchronization of the specified navigation [param map] [RID]. By default navigation maps are only synchronized at the end of each physics frame. This function can be used to immediately (re)calculate all the navigation meshes and region connections of the navigation map. This makes it possible to query a navigation path for a changed map immediately and in the same frame (multiple times if needed).  
         *  Due to technical restrictions the current NavigationServer command queue will be flushed. This means all already queued update commands for this physics frame will be executed, even those intended for other maps, regions and agents not part of the specified map. The expensive computation of the navigation meshes and region connections of a map will only be done for the specified map. Other maps will receive the normal synchronization at the end of the physics frame. Should the specified map receive changes after the forced update it will update again as well when the other maps receive their update.  
         *  Avoidance processing and dispatch of the `safe_velocity` signals is unaffected by this function and continues to happen for all maps and agents at the end of the physics frame.  
         *      
         *  **Note:** With great power comes great responsibility. This function should only be used by users that really know what they are doing and have a good reason for it. Forcing an immediate update of a navigation map requires locking the NavigationServer and flushing the entire NavigationServer command queue. Not only can this severely impact the performance of a game but it can also introduce bugs if used inappropriately without much foresight.  
         */
        static mapForceUpdate(map: Rid): void
        
        /** Returns the current iteration id of the navigation map. Every time the navigation map changes and synchronizes the iteration id increases. An iteration id of 0 means the navigation map has never synchronized.  
         *      
         *  **Note:** The iteration id will wrap back to 1 after reaching its range limit.  
         */
        static mapGetIterationId(map: Rid): int64
        
        /** If [param enabled] is `true` the [param map] synchronization uses an async process that runs on a background thread. */
        static mapSetUseAsyncIterations(map: Rid, enabled: boolean): void
        
        /** Returns `true` if the [param map] synchronization uses an async process that runs on a background thread. */
        static mapGetUseAsyncIterations(map: Rid): boolean
        
        /** Returns a random position picked from all map region polygons with matching [param navigation_layers].  
         *  If [param uniformly] is `true`, all map regions, polygons, and faces are weighted by their surface area (slower).  
         *  If [param uniformly] is `false`, just a random region and a random polygon are picked (faster).  
         */
        static mapGetRandomPoint(map: Rid, navigationLayers: int64, uniformly: boolean): Vector3
        
        /** Queries a path in a given navigation map. Start and target position and other parameters are defined through [NavigationPathQueryParameters3D]. Updates the provided [NavigationPathQueryResult3D] result object with the path among other results requested by the query. After the process is finished the optional [param callback] will be called. */
        static queryPath(parameters: NavigationPathQueryParameters3D, result: NavigationPathQueryResult3D, callback?: Callable /* = new Callable() */): void
        
        /** Creates a new region. */
        static regionCreate(): Rid
        
        /** Returns the current iteration ID of the navigation region. Every time the navigation region changes and synchronizes, the iteration ID increases. An iteration ID of `0` means the navigation region has never synchronized.  
         *      
         *  **Note:** The iteration ID will wrap around to `1` after reaching its range limit.  
         */
        static regionGetIterationId(region: Rid): int64
        
        /** If [param enabled] is `true`, the specified [param region] will contribute to its current navigation map. */
        static regionSetEnabled(region: Rid, enabled: boolean): void
        
        /** Returns `true` if the specified [param region] is enabled. */
        static regionGetEnabled(region: Rid): boolean
        
        /** If [param enabled] is `true`, the navigation [param region] will use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin. */
        static regionSetUseEdgeConnections(region: Rid, enabled: boolean): void
        
        /** Returns `true` if the navigation [param region] is set to use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin. */
        static regionGetUseEdgeConnections(region: Rid): boolean
        
        /** Sets the [param enter_cost] for this [param region]. */
        static regionSetEnterCost(region: Rid, enterCost: float64): void
        
        /** Returns the enter cost of this [param region]. */
        static regionGetEnterCost(region: Rid): float64
        
        /** Sets the [param travel_cost] for this [param region]. */
        static regionSetTravelCost(region: Rid, travelCost: float64): void
        
        /** Returns the travel cost of this [param region]. */
        static regionGetTravelCost(region: Rid): float64
        
        /** Set the `ObjectID` of the object which manages this region. */
        static regionSetOwnerId(region: Rid, ownerId: int64): void
        
        /** Returns the `ObjectID` of the object which manages this region. */
        static regionGetOwnerId(region: Rid): int64
        
        /** Returns `true` if the provided [param point] in world space is currently owned by the provided navigation [param region]. Owned in this context means that one of the region's navigation mesh polygon faces has a possible position at the closest distance to this point compared to all other navigation meshes from other navigation regions that are also registered on the navigation map of the provided region.  
         *  If multiple navigation meshes have positions at equal distance the navigation region whose polygons are processed first wins the ownership. Polygons are processed in the same order that navigation regions were registered on the NavigationServer.  
         *      
         *  **Note:** If navigation meshes from different navigation regions overlap (which should be avoided in general) the result might not be what is expected.  
         */
        static regionOwnsPoint(region: Rid, point: Vector3): boolean
        
        /** Sets the map for the region. */
        static regionSetMap(region: Rid, map: Rid): void
        
        /** Returns the navigation map [RID] the requested [param region] is currently assigned to. */
        static regionGetMap(region: Rid): Rid
        
        /** Set the region's navigation layers. This allows selecting regions from a path request (when using [method NavigationServer3D.map_get_path]). */
        static regionSetNavigationLayers(region: Rid, navigationLayers: int64): void
        
        /** Returns the region's navigation layers. */
        static regionGetNavigationLayers(region: Rid): int64
        
        /** Sets the global transformation for the region. */
        static regionSetTransform(region: Rid, transform: Transform3D): void
        
        /** Returns the global transformation of this [param region]. */
        static regionGetTransform(region: Rid): Transform3D
        
        /** Sets the navigation mesh for the region. */
        static regionSetNavigationMesh(region: Rid, navigationMesh: NavigationMesh): void
        
        /** Bakes the [param navigation_mesh] with bake source geometry collected starting from the [param root_node]. */
        static regionBakeNavigationMesh(navigationMesh: NavigationMesh, rootNode: Node): void
        
        /** Returns how many connections this [param region] has with other regions in the map. */
        static regionGetConnectionsCount(region: Rid): int64
        
        /** Returns the starting point of a connection door. [param connection] is an index between 0 and the return value of [method region_get_connections_count]. */
        static regionGetConnectionPathwayStart(region: Rid, connection: int64): Vector3
        
        /** Returns the ending point of a connection door. [param connection] is an index between 0 and the return value of [method region_get_connections_count]. */
        static regionGetConnectionPathwayEnd(region: Rid, connection: int64): Vector3
        
        /** Returns the navigation mesh surface point closest to the provided [param start] and [param end] segment on the navigation [param region].  
         *  If [param use_collision] is `true`, a closest point test is only done when the segment intersects with the navigation mesh surface.  
         */
        static regionGetClosestPointToSegment(region: Rid, start: Vector3, end: Vector3, useCollision?: boolean /* = false */): Vector3
        
        /** Returns the navigation mesh surface point closest to the provided [param to_point] on the navigation [param region]. */
        static regionGetClosestPoint(region: Rid, toPoint: Vector3): Vector3
        
        /** Returns the navigation mesh surface normal closest to the provided [param to_point] on the navigation [param region]. */
        static regionGetClosestPointNormal(region: Rid, toPoint: Vector3): Vector3
        
        /** Returns a random position picked from all region polygons with matching [param navigation_layers].  
         *  If [param uniformly] is `true`, all region polygons and faces are weighted by their surface area (slower).  
         *  If [param uniformly] is `false`, just a random polygon and face is picked (faster).  
         */
        static regionGetRandomPoint(region: Rid, navigationLayers: int64, uniformly: boolean): Vector3
        
        /** Returns the axis-aligned bounding box for the [param region]'s transformed navigation mesh. */
        static regionGetBounds(region: Rid): Aabb
        
        /** Create a new link between two positions on a map. */
        static linkCreate(): Rid
        
        /** Returns the current iteration ID of the navigation link. Every time the navigation link changes and synchronizes, the iteration ID increases. An iteration ID of `0` means the navigation link has never synchronized.  
         *      
         *  **Note:** The iteration ID will wrap around to `1` after reaching its range limit.  
         */
        static linkGetIterationId(link: Rid): int64
        
        /** Sets the navigation map [RID] for the link. */
        static linkSetMap(link: Rid, map: Rid): void
        
        /** Returns the navigation map [RID] the requested [param link] is currently assigned to. */
        static linkGetMap(link: Rid): Rid
        
        /** If [param enabled] is `true`, the specified [param link] will contribute to its current navigation map. */
        static linkSetEnabled(link: Rid, enabled: boolean): void
        
        /** Returns `true` if the specified [param link] is enabled. */
        static linkGetEnabled(link: Rid): boolean
        
        /** Sets whether this [param link] can be travelled in both directions. */
        static linkSetBidirectional(link: Rid, bidirectional: boolean): void
        
        /** Returns whether this [param link] can be travelled in both directions. */
        static linkIsBidirectional(link: Rid): boolean
        
        /** Set the links's navigation layers. This allows selecting links from a path request (when using [method NavigationServer3D.map_get_path]). */
        static linkSetNavigationLayers(link: Rid, navigationLayers: int64): void
        
        /** Returns the navigation layers for this [param link]. */
        static linkGetNavigationLayers(link: Rid): int64
        
        /** Sets the entry position for this [param link]. */
        static linkSetStartPosition(link: Rid, position: Vector3): void
        
        /** Returns the starting position of this [param link]. */
        static linkGetStartPosition(link: Rid): Vector3
        
        /** Sets the exit position for the [param link]. */
        static linkSetEndPosition(link: Rid, position: Vector3): void
        
        /** Returns the ending position of this [param link]. */
        static linkGetEndPosition(link: Rid): Vector3
        
        /** Sets the [param enter_cost] for this [param link]. */
        static linkSetEnterCost(link: Rid, enterCost: float64): void
        
        /** Returns the enter cost of this [param link]. */
        static linkGetEnterCost(link: Rid): float64
        
        /** Sets the [param travel_cost] for this [param link]. */
        static linkSetTravelCost(link: Rid, travelCost: float64): void
        
        /** Returns the travel cost of this [param link]. */
        static linkGetTravelCost(link: Rid): float64
        
        /** Set the `ObjectID` of the object which manages this link. */
        static linkSetOwnerId(link: Rid, ownerId: int64): void
        
        /** Returns the `ObjectID` of the object which manages this link. */
        static linkGetOwnerId(link: Rid): int64
        
        /** Creates the agent. */
        static agentCreate(): Rid
        
        /** If [param enabled] is `true`, the provided [param agent] calculates avoidance. */
        static agentSetAvoidanceEnabled(agent: Rid, enabled: boolean): void
        
        /** Returns `true` if the provided [param agent] has avoidance enabled. */
        static agentGetAvoidanceEnabled(agent: Rid): boolean
        
        /** Sets if the agent uses the 2D avoidance or the 3D avoidance while avoidance is enabled.  
         *  If `true` the agent calculates avoidance velocities in 3D for the xyz-axis, e.g. for games that take place in air, underwater or space. The 3D using agent only avoids other 3D avoidance using agent's. The 3D using agent only reacts to radius based avoidance obstacles. The 3D using agent ignores any vertices based obstacles. The 3D using agent only avoids other 3D using agent's.  
         *  If `false` the agent calculates avoidance velocities in 2D along the xz-axis ignoring the y-axis. The 2D using agent only avoids other 2D avoidance using agent's. The 2D using agent reacts to radius avoidance obstacles. The 2D using agent reacts to vertices based avoidance obstacles. The 2D using agent only avoids other 2D using agent's. 2D using agents will ignore other 2D using agents or obstacles that are below their current position or above their current position including the agents height in 2D avoidance.  
         */
        static agentSetUse3DAvoidance(agent: Rid, enabled: boolean): void
        
        /** Returns `true` if the provided [param agent] uses avoidance in 3D space Vector3(x,y,z) instead of horizontal 2D Vector2(x,y) / Vector3(x,0.0,z). */
        static agentGetUse3DAvoidance(agent: Rid): boolean
        
        /** Puts the agent in the map. */
        static agentSetMap(agent: Rid, map: Rid): void
        
        /** Returns the navigation map [RID] the requested [param agent] is currently assigned to. */
        static agentGetMap(agent: Rid): Rid
        
        /** If [param paused] is `true` the specified [param agent] will not be processed, e.g. calculate avoidance velocities or receive avoidance callbacks. */
        static agentSetPaused(agent: Rid, paused: boolean): void
        
        /** Returns `true` if the specified [param agent] is paused. */
        static agentGetPaused(agent: Rid): boolean
        
        /** Sets the maximum distance to other agents this agent takes into account in the navigation. The larger this number, the longer the running time of the simulation. If the number is too low, the simulation will not be safe. */
        static agentSetNeighborDistance(agent: Rid, distance: float64): void
        
        /** Returns the maximum distance to other agents the specified [param agent] takes into account in the navigation. */
        static agentGetNeighborDistance(agent: Rid): float64
        
        /** Sets the maximum number of other agents the agent takes into account in the navigation. The larger this number, the longer the running time of the simulation. If the number is too low, the simulation will not be safe. */
        static agentSetMaxNeighbors(agent: Rid, count: int64): void
        
        /** Returns the maximum number of other agents the specified [param agent] takes into account in the navigation. */
        static agentGetMaxNeighbors(agent: Rid): int64
        
        /** The minimal amount of time for which the agent's velocities that are computed by the simulation are safe with respect to other agents. The larger this number, the sooner this agent will respond to the presence of other agents, but the less freedom this agent has in choosing its velocities. A too high value will slow down agents movement considerably. Must be positive. */
        static agentSetTimeHorizonAgents(agent: Rid, timeHorizon: float64): void
        
        /** Returns the minimal amount of time for which the specified [param agent]'s velocities that are computed by the simulation are safe with respect to other agents. */
        static agentGetTimeHorizonAgents(agent: Rid): float64
        
        /** The minimal amount of time for which the agent's velocities that are computed by the simulation are safe with respect to static avoidance obstacles. The larger this number, the sooner this agent will respond to the presence of static avoidance obstacles, but the less freedom this agent has in choosing its velocities. A too high value will slow down agents movement considerably. Must be positive. */
        static agentSetTimeHorizonObstacles(agent: Rid, timeHorizon: float64): void
        
        /** Returns the minimal amount of time for which the specified [param agent]'s velocities that are computed by the simulation are safe with respect to static avoidance obstacles. */
        static agentGetTimeHorizonObstacles(agent: Rid): float64
        
        /** Sets the radius of the agent. */
        static agentSetRadius(agent: Rid, radius: float64): void
        
        /** Returns the radius of the specified [param agent]. */
        static agentGetRadius(agent: Rid): float64
        
        /** Updates the provided [param agent] [param height]. */
        static agentSetHeight(agent: Rid, height: float64): void
        
        /** Returns the `height` of the specified [param agent]. */
        static agentGetHeight(agent: Rid): float64
        
        /** Sets the maximum speed of the agent. Must be positive. */
        static agentSetMaxSpeed(agent: Rid, maxSpeed: float64): void
        
        /** Returns the maximum speed of the specified [param agent]. */
        static agentGetMaxSpeed(agent: Rid): float64
        
        /** Replaces the internal velocity in the collision avoidance simulation with [param velocity] for the specified [param agent]. When an agent is teleported to a new position this function should be used in the same frame. If called frequently this function can get agents stuck. */
        static agentSetVelocityForced(agent: Rid, velocity: Vector3): void
        
        /** Sets [param velocity] as the new wanted velocity for the specified [param agent]. The avoidance simulation will try to fulfill this velocity if possible but will modify it to avoid collision with other agent's and obstacles. When an agent is teleported to a new position use [method agent_set_velocity_forced] as well to reset the internal simulation velocity. */
        static agentSetVelocity(agent: Rid, velocity: Vector3): void
        
        /** Returns the velocity of the specified [param agent]. */
        static agentGetVelocity(agent: Rid): Vector3
        
        /** Sets the position of the agent in world space. */
        static agentSetPosition(agent: Rid, position: Vector3): void
        
        /** Returns the position of the specified [param agent] in world space. */
        static agentGetPosition(agent: Rid): Vector3
        
        /** Returns `true` if the map got changed the previous frame. */
        static agentIsMapChanged(agent: Rid): boolean
        
        /** Sets the callback [Callable] that gets called after each avoidance processing step for the [param agent]. The calculated `safe_velocity` will be dispatched with a signal to the object just before the physics calculations.  
         *      
         *  **Note:** Created callbacks are always processed independently of the SceneTree state as long as the agent is on a navigation map and not freed. To disable the dispatch of a callback from an agent use [method agent_set_avoidance_callback] again with an empty [Callable].  
         */
        static agentSetAvoidanceCallback(agent: Rid, callback: Callable): void
        
        /** Return `true` if the specified [param agent] has an avoidance callback. */
        static agentHasAvoidanceCallback(agent: Rid): boolean
        
        /** Set the agent's `avoidance_layers` bitmask. */
        static agentSetAvoidanceLayers(agent: Rid, layers: int64): void
        
        /** Returns the `avoidance_layers` bitmask of the specified [param agent]. */
        static agentGetAvoidanceLayers(agent: Rid): int64
        
        /** Set the agent's `avoidance_mask` bitmask. */
        static agentSetAvoidanceMask(agent: Rid, mask: int64): void
        
        /** Returns the `avoidance_mask` bitmask of the specified [param agent]. */
        static agentGetAvoidanceMask(agent: Rid): int64
        
        /** Set the agent's `avoidance_priority` with a [param priority] between 0.0 (lowest priority) to 1.0 (highest priority).  
         *  The specified [param agent] does not adjust the velocity for other agents that would match the `avoidance_mask` but have a lower `avoidance_priority`. This in turn makes the other agents with lower priority adjust their velocities even more to avoid collision with this agent.  
         */
        static agentSetAvoidancePriority(agent: Rid, priority: float64): void
        
        /** Returns the `avoidance_priority` of the specified [param agent]. */
        static agentGetAvoidancePriority(agent: Rid): float64
        
        /** Creates a new obstacle. */
        static obstacleCreate(): Rid
        
        /** If [param enabled] is `true`, the provided [param obstacle] affects avoidance using agents. */
        static obstacleSetAvoidanceEnabled(obstacle: Rid, enabled: boolean): void
        
        /** Returns `true` if the provided [param obstacle] has avoidance enabled. */
        static obstacleGetAvoidanceEnabled(obstacle: Rid): boolean
        
        /** Sets if the [param obstacle] uses the 2D avoidance or the 3D avoidance while avoidance is enabled. */
        static obstacleSetUse3DAvoidance(obstacle: Rid, enabled: boolean): void
        
        /** Returns `true` if the provided [param obstacle] uses avoidance in 3D space Vector3(x,y,z) instead of horizontal 2D Vector2(x,y) / Vector3(x,0.0,z). */
        static obstacleGetUse3DAvoidance(obstacle: Rid): boolean
        
        /** Assigns the [param obstacle] to a navigation map. */
        static obstacleSetMap(obstacle: Rid, map: Rid): void
        
        /** Returns the navigation map [RID] the requested [param obstacle] is currently assigned to. */
        static obstacleGetMap(obstacle: Rid): Rid
        
        /** If [param paused] is `true` the specified [param obstacle] will not be processed, e.g. affect avoidance velocities. */
        static obstacleSetPaused(obstacle: Rid, paused: boolean): void
        
        /** Returns `true` if the specified [param obstacle] is paused. */
        static obstacleGetPaused(obstacle: Rid): boolean
        
        /** Sets the radius of the dynamic obstacle. */
        static obstacleSetRadius(obstacle: Rid, radius: float64): void
        
        /** Returns the radius of the specified dynamic [param obstacle]. */
        static obstacleGetRadius(obstacle: Rid): float64
        
        /** Sets the [param height] for the [param obstacle]. In 3D agents will ignore obstacles that are above or below them while using 2D avoidance. */
        static obstacleSetHeight(obstacle: Rid, height: float64): void
        
        /** Returns the `height` of the specified [param obstacle]. */
        static obstacleGetHeight(obstacle: Rid): float64
        
        /** Sets [param velocity] of the dynamic [param obstacle]. Allows other agents to better predict the movement of the dynamic obstacle. Only works in combination with the radius of the obstacle. */
        static obstacleSetVelocity(obstacle: Rid, velocity: Vector3): void
        
        /** Returns the velocity of the specified dynamic [param obstacle]. */
        static obstacleGetVelocity(obstacle: Rid): Vector3
        
        /** Updates the [param position] in world space for the [param obstacle]. */
        static obstacleSetPosition(obstacle: Rid, position: Vector3): void
        
        /** Returns the position of the specified [param obstacle] in world space. */
        static obstacleGetPosition(obstacle: Rid): Vector3
        
        /** Sets the outline vertices for the obstacle. If the vertices are winded in clockwise order agents will be pushed in by the obstacle, else they will be pushed out. */
        static obstacleSetVertices(obstacle: Rid, vertices: PackedVector3Array | Vector3[]): void
        
        /** Returns the outline vertices for the specified [param obstacle]. */
        static obstacleGetVertices(obstacle: Rid): PackedVector3Array
        
        /** Set the obstacles's `avoidance_layers` bitmask. */
        static obstacleSetAvoidanceLayers(obstacle: Rid, layers: int64): void
        
        /** Returns the `avoidance_layers` bitmask of the specified [param obstacle]. */
        static obstacleGetAvoidanceLayers(obstacle: Rid): int64
        
        /** Parses the [SceneTree] for source geometry according to the properties of [param navigation_mesh]. Updates the provided [param source_geometry_data] resource with the resulting data. The resource can then be used to bake a navigation mesh with [method bake_from_source_geometry_data]. After the process is finished the optional [param callback] will be called.  
         *      
         *  **Note:** This function needs to run on the main thread or with a deferred call as the SceneTree is not thread-safe.  
         *  **Performance:** While convenient, reading data arrays from [Mesh] resources can affect the frame rate negatively. The data needs to be received from the GPU, stalling the [RenderingServer] in the process. For performance prefer the use of e.g. collision shapes or creating the data arrays entirely in code.  
         */
        static parseSourceGeometryData(navigationMesh: NavigationMesh, sourceGeometryData: NavigationMeshSourceGeometryData3D, rootNode: Node, callback?: Callable /* = new Callable() */): void
        
        /** Bakes the provided [param navigation_mesh] with the data from the provided [param source_geometry_data]. After the process is finished the optional [param callback] will be called. */
        static bakeFromSourceGeometryData(navigationMesh: NavigationMesh, sourceGeometryData: NavigationMeshSourceGeometryData3D, callback?: Callable /* = new Callable() */): void
        
        /** Bakes the provided [param navigation_mesh] with the data from the provided [param source_geometry_data] as an async task running on a background thread. After the process is finished the optional [param callback] will be called. */
        static bakeFromSourceGeometryDataAsync(navigationMesh: NavigationMesh, sourceGeometryData: NavigationMeshSourceGeometryData3D, callback?: Callable /* = new Callable() */): void
        
        /** Returns `true` when the provided navigation mesh is being baked on a background thread. */
        static isBakingNavigationMesh(navigationMesh: NavigationMesh): boolean
        
        /** Creates a new source geometry parser. If a [Callable] is set for the parser with [method source_geometry_parser_set_callback] the callback will be called for every single node that gets parsed whenever [method parse_source_geometry_data] is used. */
        static sourceGeometryParserCreate(): Rid
        
        /** Sets the [param callback] [Callable] for the specific source geometry [param parser]. The [Callable] will receive a call with the following parameters:  
         *  - `navigation_mesh` - The [NavigationMesh] reference used to define the parse settings. Do NOT edit or add directly to the navigation mesh.  
         *  - `source_geometry_data` - The [NavigationMeshSourceGeometryData3D] reference. Add custom source geometry for navigation mesh baking to this object.  
         *  - `node` - The [Node] that is parsed.  
         */
        static sourceGeometryParserSetCallback(parser: Rid, callback: Callable): void
        
        /** Returns a simplified version of [param path] with less critical path points removed. The simplification amount is in worlds units and controlled by [param epsilon]. The simplification uses a variant of Ramer-Douglas-Peucker algorithm for curve point decimation.  
         *  Path simplification can be helpful to mitigate various path following issues that can arise with certain agent types and script behaviors. E.g. "steering" agents or avoidance in "open fields".  
         */
        static simplifyPath(path: PackedVector3Array | Vector3[], epsilon: float64): PackedVector3Array
        
        /** Destroys the given RID. */
        static freeRid(rid: Rid): void
        
        /** Control activation of this server. */
        static setActive(active: boolean): void
        
        /** If `true` enables debug mode on the NavigationServer. */
        static setDebugEnabled(enabled: boolean): void
        
        /** Returns `true` when the NavigationServer has debug enabled. */
        static getDebugEnabled(): boolean
        
        /** Returns information about the current state of the NavigationServer. See [enum ProcessInfo] for a list of available states. */
        static getProcessInfo(processInfo: NavigationServer3D.ProcessInfo): int64
        
        /** Emitted when a navigation map is updated, when a region moves or is modified. */
        static readonly mapChanged: Signal<(map: Rid) => void>
        
        /** Emitted when navigation debug settings are changed. Only available in debug builds. */
        static readonly navigationDebugChanged: Signal<() => void>
        
        /** Emitted when avoidance debug settings are changed. Only available in debug builds. */
        static readonly avoidanceDebugChanged: Signal<() => void>
    }
    // _singleton_class_: PhysicsServer2D
    namespace PhysicsServer2D {
        enum SpaceParameter {
            SpaceParamContactRecycleRadius = 0,
            SpaceParamContactMaxSeparation = 1,
            SpaceParamContactMaxAllowedPenetration = 2,
            SpaceParamContactDefaultBias = 3,
            SpaceParamBodyLinearVelocitySleepThreshold = 4,
            SpaceParamBodyAngularVelocitySleepThreshold = 5,
            SpaceParamBodyTimeToSleep = 6,
            SpaceParamConstraintDefaultBias = 7,
            SpaceParamSolverIterations = 8,
        }
        enum ShapeType {
            ShapeWorldBoundary = 0,
            ShapeSeparationRay = 1,
            ShapeSegment = 2,
            ShapeCircle = 3,
            ShapeRectangle = 4,
            ShapeCapsule = 5,
            ShapeConvexPolygon = 6,
            ShapeConcavePolygon = 7,
            ShapeCustom = 8,
        }
        enum AreaParameter {
            AreaParamGravityOverrideMode = 0,
            AreaParamGravity = 1,
            AreaParamGravityVector = 2,
            AreaParamGravityIsPoint = 3,
            AreaParamGravityPointUnitDistance = 4,
            AreaParamLinearDampOverrideMode = 5,
            AreaParamLinearDamp = 6,
            AreaParamAngularDampOverrideMode = 7,
            AreaParamAngularDamp = 8,
            AreaParamPriority = 9,
        }
        enum AreaSpaceOverrideMode {
            AreaSpaceOverrideDisabled = 0,
            AreaSpaceOverrideCombine = 1,
            AreaSpaceOverrideCombineReplace = 2,
            AreaSpaceOverrideReplace = 3,
            AreaSpaceOverrideReplaceCombine = 4,
        }
        enum BodyMode {
            BodyModeStatic = 0,
            BodyModeKinematic = 1,
            BodyModeRigid = 2,
            BodyModeRigidLinear = 3,
        }
        enum BodyParameter {
            BodyParamBounce = 0,
            BodyParamFriction = 1,
            BodyParamMass = 2,
            BodyParamInertia = 3,
            BodyParamCenterOfMass = 4,
            BodyParamGravityScale = 5,
            BodyParamLinearDampMode = 6,
            BodyParamAngularDampMode = 7,
            BodyParamLinearDamp = 8,
            BodyParamAngularDamp = 9,
            BodyParamMax = 10,
        }
        enum BodyDampMode {
            BodyDampModeCombine = 0,
            BodyDampModeReplace = 1,
        }
        enum BodyState {
            BodyStateTransform = 0,
            BodyStateLinearVelocity = 1,
            BodyStateAngularVelocity = 2,
            BodyStateSleeping = 3,
            BodyStateCanSleep = 4,
        }
        enum JointType {
            JointTypePin = 0,
            JointTypeGroove = 1,
            JointTypeDampedSpring = 2,
            JointTypeMax = 3,
        }
        enum JointParam {
            JointParamBias = 0,
            JointParamMaxBias = 1,
            JointParamMaxForce = 2,
        }
        enum PinJointParam {
            PinJointSoftness = 0,
            PinJointLimitUpper = 1,
            PinJointLimitLower = 2,
            PinJointMotorTargetVelocity = 3,
        }
        enum PinJointFlag {
            PinJointFlagAngularLimitEnabled = 0,
            PinJointFlagMotorEnabled = 1,
        }
        enum DampedSpringParam {
            DampedSpringRestLength = 0,
            DampedSpringStiffness = 1,
            DampedSpringDamping = 2,
        }
        enum CcdMode {
            CcdModeDisabled = 0,
            CcdModeCastRay = 1,
            CcdModeCastShape = 2,
        }
        enum AreaBodyStatus {
            AreaBodyAdded = 0,
            AreaBodyRemoved = 1,
        }
        enum ProcessInfo {
            InfoActiveObjects = 0,
            InfoCollisionPairs = 1,
            InfoIslandCount = 2,
        }
    }
    /** A server interface for low-level 2D physics access.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicsserver2d.html  
     */
    class PhysicsServer2D extends GObject {
        /** Constant to set/get the maximum distance a pair of bodies has to move before their collision status has to be recalculated. The default value of this parameter is [member ProjectSettings.physics/2d/solver/contact_recycle_radius]. */
        static readonly SPACE_PARAM_CONTACT_RECYCLE_RADIUS = 0
        
        /** Constant to set/get the maximum distance a shape can be from another before they are considered separated and the contact is discarded. The default value of this parameter is [member ProjectSettings.physics/2d/solver/contact_max_separation]. */
        static readonly SPACE_PARAM_CONTACT_MAX_SEPARATION = 1
        
        /** Constant to set/get the maximum distance a shape can penetrate another shape before it is considered a collision. The default value of this parameter is [member ProjectSettings.physics/2d/solver/contact_max_allowed_penetration]. */
        static readonly SPACE_PARAM_CONTACT_MAX_ALLOWED_PENETRATION = 2
        
        /** Constant to set/get the default solver bias for all physics contacts. A solver bias is a factor controlling how much two objects "rebound", after overlapping, to avoid leaving them in that state because of numerical imprecision. The default value of this parameter is [member ProjectSettings.physics/2d/solver/default_contact_bias]. */
        static readonly SPACE_PARAM_CONTACT_DEFAULT_BIAS = 3
        
        /** Constant to set/get the threshold linear velocity of activity. A body marked as potentially inactive for both linear and angular velocity will be put to sleep after the time given. The default value of this parameter is [member ProjectSettings.physics/2d/sleep_threshold_linear]. */
        static readonly SPACE_PARAM_BODY_LINEAR_VELOCITY_SLEEP_THRESHOLD = 4
        
        /** Constant to set/get the threshold angular velocity of activity. A body marked as potentially inactive for both linear and angular velocity will be put to sleep after the time given. The default value of this parameter is [member ProjectSettings.physics/2d/sleep_threshold_angular]. */
        static readonly SPACE_PARAM_BODY_ANGULAR_VELOCITY_SLEEP_THRESHOLD = 5
        
        /** Constant to set/get the maximum time of activity. A body marked as potentially inactive for both linear and angular velocity will be put to sleep after this time. The default value of this parameter is [member ProjectSettings.physics/2d/time_before_sleep]. */
        static readonly SPACE_PARAM_BODY_TIME_TO_SLEEP = 6
        
        /** Constant to set/get the default solver bias for all physics constraints. A solver bias is a factor controlling how much two objects "rebound", after violating a constraint, to avoid leaving them in that state because of numerical imprecision. The default value of this parameter is [member ProjectSettings.physics/2d/solver/default_constraint_bias]. */
        static readonly SPACE_PARAM_CONSTRAINT_DEFAULT_BIAS = 7
        
        /** Constant to set/get the number of solver iterations for all contacts and constraints. The greater the number of iterations, the more accurate the collisions will be. However, a greater number of iterations requires more CPU power, which can decrease performance. The default value of this parameter is [member ProjectSettings.physics/2d/solver/solver_iterations]. */
        static readonly SPACE_PARAM_SOLVER_ITERATIONS = 8
        
        /** This is the constant for creating world boundary shapes. A world boundary shape is an  *infinite*  line with an origin point, and a normal. Thus, it can be used for front/behind checks. */
        static readonly SHAPE_WORLD_BOUNDARY = 0
        
        /** This is the constant for creating separation ray shapes. A separation ray is defined by a length and separates itself from what is touching its far endpoint. Useful for character controllers. */
        static readonly SHAPE_SEPARATION_RAY = 1
        
        /** This is the constant for creating segment shapes. A segment shape is a  *finite*  line from a point A to a point B. It can be checked for intersections. */
        static readonly SHAPE_SEGMENT = 2
        
        /** This is the constant for creating circle shapes. A circle shape only has a radius. It can be used for intersections and inside/outside checks. */
        static readonly SHAPE_CIRCLE = 3
        
        /** This is the constant for creating rectangle shapes. A rectangle shape is defined by a width and a height. It can be used for intersections and inside/outside checks. */
        static readonly SHAPE_RECTANGLE = 4
        
        /** This is the constant for creating capsule shapes. A capsule shape is defined by a radius and a length. It can be used for intersections and inside/outside checks. */
        static readonly SHAPE_CAPSULE = 5
        
        /** This is the constant for creating convex polygon shapes. A polygon is defined by a list of points. It can be used for intersections and inside/outside checks. */
        static readonly SHAPE_CONVEX_POLYGON = 6
        
        /** This is the constant for creating concave polygon shapes. A polygon is defined by a list of points. It can be used for intersections checks, but not for inside/outside checks. */
        static readonly SHAPE_CONCAVE_POLYGON = 7
        
        /** This constant is used internally by the engine. Any attempt to create this kind of shape results in an error. */
        static readonly SHAPE_CUSTOM = 8
        
        /** Constant to set/get gravity override mode in an area. See [enum AreaSpaceOverrideMode] for possible values. The default value of this parameter is [constant AREA_SPACE_OVERRIDE_DISABLED]. */
        static readonly AREA_PARAM_GRAVITY_OVERRIDE_MODE = 0
        
        /** Constant to set/get gravity strength in an area. The default value of this parameter is `9.80665`. */
        static readonly AREA_PARAM_GRAVITY = 1
        
        /** Constant to set/get gravity vector/center in an area. The default value of this parameter is `Vector2(0, -1)`. */
        static readonly AREA_PARAM_GRAVITY_VECTOR = 2
        
        /** Constant to set/get whether the gravity vector of an area is a direction, or a center point. The default value of this parameter is `false`. */
        static readonly AREA_PARAM_GRAVITY_IS_POINT = 3
        
        /** Constant to set/get the distance at which the gravity strength is equal to the gravity controlled by [constant AREA_PARAM_GRAVITY]. For example, on a planet 100 pixels in radius with a surface gravity of 4.0 px/s², set the gravity to 4.0 and the unit distance to 100.0. The gravity will have falloff according to the inverse square law, so in the example, at 200 pixels from the center the gravity will be 1.0 px/s² (twice the distance, 1/4th the gravity), at 50 pixels it will be 16.0 px/s² (half the distance, 4x the gravity), and so on.  
         *  The above is true only when the unit distance is a positive number. When the unit distance is set to 0.0, the gravity will be constant regardless of distance. The default value of this parameter is `0.0`.  
         */
        static readonly AREA_PARAM_GRAVITY_POINT_UNIT_DISTANCE = 4
        
        /** Constant to set/get linear damping override mode in an area. See [enum AreaSpaceOverrideMode] for possible values. The default value of this parameter is [constant AREA_SPACE_OVERRIDE_DISABLED]. */
        static readonly AREA_PARAM_LINEAR_DAMP_OVERRIDE_MODE = 5
        
        /** Constant to set/get the linear damping factor of an area. The default value of this parameter is `0.1`. */
        static readonly AREA_PARAM_LINEAR_DAMP = 6
        
        /** Constant to set/get angular damping override mode in an area. See [enum AreaSpaceOverrideMode] for possible values. The default value of this parameter is [constant AREA_SPACE_OVERRIDE_DISABLED]. */
        static readonly AREA_PARAM_ANGULAR_DAMP_OVERRIDE_MODE = 7
        
        /** Constant to set/get the angular damping factor of an area. The default value of this parameter is `1.0`. */
        static readonly AREA_PARAM_ANGULAR_DAMP = 8
        
        /** Constant to set/get the priority (order of processing) of an area. The default value of this parameter is `0`. */
        static readonly AREA_PARAM_PRIORITY = 9
        
        /** This area does not affect gravity/damp. These are generally areas that exist only to detect collisions, and objects entering or exiting them. */
        static readonly AREA_SPACE_OVERRIDE_DISABLED = 0
        
        /** This area adds its gravity/damp values to whatever has been calculated so far. This way, many overlapping areas can combine their physics to make interesting effects. */
        static readonly AREA_SPACE_OVERRIDE_COMBINE = 1
        
        /** This area adds its gravity/damp values to whatever has been calculated so far. Then stops taking into account the rest of the areas, even the default one. */
        static readonly AREA_SPACE_OVERRIDE_COMBINE_REPLACE = 2
        
        /** This area replaces any gravity/damp, even the default one, and stops taking into account the rest of the areas. */
        static readonly AREA_SPACE_OVERRIDE_REPLACE = 3
        
        /** This area replaces any gravity/damp calculated so far, but keeps calculating the rest of the areas, down to the default one. */
        static readonly AREA_SPACE_OVERRIDE_REPLACE_COMBINE = 4
        
        /** Constant for static bodies. In this mode, a body can be only moved by user code and doesn't collide with other bodies along its path when moved. */
        static readonly BODY_MODE_STATIC = 0
        
        /** Constant for kinematic bodies. In this mode, a body can be only moved by user code and collides with other bodies along its path. */
        static readonly BODY_MODE_KINEMATIC = 1
        
        /** Constant for rigid bodies. In this mode, a body can be pushed by other bodies and has forces applied. */
        static readonly BODY_MODE_RIGID = 2
        
        /** Constant for linear rigid bodies. In this mode, a body can not rotate, and only its linear velocity is affected by external forces. */
        static readonly BODY_MODE_RIGID_LINEAR = 3
        
        /** Constant to set/get a body's bounce factor. The default value of this parameter is `0.0`. */
        static readonly BODY_PARAM_BOUNCE = 0
        
        /** Constant to set/get a body's friction. The default value of this parameter is `1.0`. */
        static readonly BODY_PARAM_FRICTION = 1
        
        /** Constant to set/get a body's mass. The default value of this parameter is `1.0`. If the body's mode is set to [constant BODY_MODE_RIGID], then setting this parameter will have the following additional effects:  
         *  - If the parameter [constant BODY_PARAM_CENTER_OF_MASS] has never been set explicitly, then the value of that parameter will be recalculated based on the body's shapes.  
         *  - If the parameter [constant BODY_PARAM_INERTIA] is set to a value `<= 0.0`, then the value of that parameter will be recalculated based on the body's shapes, mass, and center of mass.  
         */
        static readonly BODY_PARAM_MASS = 2
        
        /** Constant to set/get a body's inertia. The default value of this parameter is `0.0`. If the body's inertia is set to a value `<= 0.0`, then the inertia will be recalculated based on the body's shapes, mass, and center of mass. */
        static readonly BODY_PARAM_INERTIA = 3
        
        /** Constant to set/get a body's center of mass position in the body's local coordinate system. The default value of this parameter is `Vector2(0,0)`. If this parameter is never set explicitly, then it is recalculated based on the body's shapes when setting the parameter [constant BODY_PARAM_MASS] or when calling [method body_set_space]. */
        static readonly BODY_PARAM_CENTER_OF_MASS = 4
        
        /** Constant to set/get a body's gravity multiplier. The default value of this parameter is `1.0`. */
        static readonly BODY_PARAM_GRAVITY_SCALE = 5
        
        /** Constant to set/get a body's linear damping mode. See [enum BodyDampMode] for possible values. The default value of this parameter is [constant BODY_DAMP_MODE_COMBINE]. */
        static readonly BODY_PARAM_LINEAR_DAMP_MODE = 6
        
        /** Constant to set/get a body's angular damping mode. See [enum BodyDampMode] for possible values. The default value of this parameter is [constant BODY_DAMP_MODE_COMBINE]. */
        static readonly BODY_PARAM_ANGULAR_DAMP_MODE = 7
        
        /** Constant to set/get a body's linear damping factor. The default value of this parameter is `0.0`. */
        static readonly BODY_PARAM_LINEAR_DAMP = 8
        
        /** Constant to set/get a body's angular damping factor. The default value of this parameter is `0.0`. */
        static readonly BODY_PARAM_ANGULAR_DAMP = 9
        
        /** Represents the size of the [enum BodyParameter] enum. */
        static readonly BODY_PARAM_MAX = 10
        
        /** The body's damping value is added to any value set in areas or the default value. */
        static readonly BODY_DAMP_MODE_COMBINE = 0
        
        /** The body's damping value replaces any value set in areas or the default value. */
        static readonly BODY_DAMP_MODE_REPLACE = 1
        
        /** Constant to set/get the current transform matrix of the body. */
        static readonly BODY_STATE_TRANSFORM = 0
        
        /** Constant to set/get the current linear velocity of the body. */
        static readonly BODY_STATE_LINEAR_VELOCITY = 1
        
        /** Constant to set/get the current angular velocity of the body. */
        static readonly BODY_STATE_ANGULAR_VELOCITY = 2
        
        /** Constant to sleep/wake up a body, or to get whether it is sleeping. */
        static readonly BODY_STATE_SLEEPING = 3
        
        /** Constant to set/get whether the body can sleep. */
        static readonly BODY_STATE_CAN_SLEEP = 4
        
        /** Constant to create pin joints. */
        static readonly JOINT_TYPE_PIN = 0
        
        /** Constant to create groove joints. */
        static readonly JOINT_TYPE_GROOVE = 1
        
        /** Constant to create damped spring joints. */
        static readonly JOINT_TYPE_DAMPED_SPRING = 2
        
        /** Represents the size of the [enum JointType] enum. */
        static readonly JOINT_TYPE_MAX = 3
        
        /** Constant to set/get how fast the joint pulls the bodies back to satisfy the joint constraint. The lower the value, the more the two bodies can pull on the joint. The default value of this parameter is `0.0`.  
         *      
         *  **Note:** In Godot Physics, this parameter is only used for pin joints and groove joints.  
         */
        static readonly JOINT_PARAM_BIAS = 0
        
        /** Constant to set/get the maximum speed with which the joint can apply corrections. The default value of this parameter is `3.40282e+38`.  
         *      
         *  **Note:** In Godot Physics, this parameter is only used for groove joints.  
         */
        static readonly JOINT_PARAM_MAX_BIAS = 1
        
        /** Constant to set/get the maximum force that the joint can use to act on the two bodies. The default value of this parameter is `3.40282e+38`.  
         *      
         *  **Note:** In Godot Physics, this parameter is only used for groove joints.  
         */
        static readonly JOINT_PARAM_MAX_FORCE = 2
        
        /** Constant to set/get a how much the bond of the pin joint can flex. The default value of this parameter is `0.0`. */
        static readonly PIN_JOINT_SOFTNESS = 0
        
        /** The maximum rotation around the pin. */
        static readonly PIN_JOINT_LIMIT_UPPER = 1
        
        /** The minimum rotation around the pin. */
        static readonly PIN_JOINT_LIMIT_LOWER = 2
        
        /** Target speed for the motor. In radians per second. */
        static readonly PIN_JOINT_MOTOR_TARGET_VELOCITY = 3
        
        /** If `true`, the pin has a maximum and a minimum rotation. */
        static readonly PIN_JOINT_FLAG_ANGULAR_LIMIT_ENABLED = 0
        
        /** If `true`, a motor turns the pin. */
        static readonly PIN_JOINT_FLAG_MOTOR_ENABLED = 1
        
        /** Sets the resting length of the spring joint. The joint will always try to go to back this length when pulled apart. The default value of this parameter is the distance between the joint's anchor points. */
        static readonly DAMPED_SPRING_REST_LENGTH = 0
        
        /** Sets the stiffness of the spring joint. The joint applies a force equal to the stiffness times the distance from its resting length. The default value of this parameter is `20.0`. */
        static readonly DAMPED_SPRING_STIFFNESS = 1
        
        /** Sets the damping ratio of the spring joint. A value of 0 indicates an undamped spring, while 1 causes the system to reach equilibrium as fast as possible (critical damping). The default value of this parameter is `1.5`. */
        static readonly DAMPED_SPRING_DAMPING = 2
        
        /** Disables continuous collision detection. This is the fastest way to detect body collisions, but it can miss small and/or fast-moving objects. */
        static readonly CCD_MODE_DISABLED = 0
        
        /** Enables continuous collision detection by raycasting. It is faster than shapecasting, but less precise. */
        static readonly CCD_MODE_CAST_RAY = 1
        
        /** Enables continuous collision detection by shapecasting. It is the slowest CCD method, and the most precise. */
        static readonly CCD_MODE_CAST_SHAPE = 2
        
        /** The value of the first parameter and area callback function receives, when an object enters one of its shapes. */
        static readonly AREA_BODY_ADDED = 0
        
        /** The value of the first parameter and area callback function receives, when an object exits one of its shapes. */
        static readonly AREA_BODY_REMOVED = 1
        
        /** Constant to get the number of objects that are not sleeping. */
        static readonly INFO_ACTIVE_OBJECTS = 0
        
        /** Constant to get the number of possible collisions. */
        static readonly INFO_COLLISION_PAIRS = 1
        
        /** Constant to get the number of space regions where a collision could occur. */
        static readonly INFO_ISLAND_COUNT = 2
        
        /** Creates a 2D world boundary shape in the physics server, and returns the [RID] that identifies it. Use [method shape_set_data] to set the shape's normal direction and distance properties. */
        static worldBoundaryShapeCreate(): Rid
        
        /** Creates a 2D separation ray shape in the physics server, and returns the [RID] that identifies it. Use [method shape_set_data] to set the shape's `length` and `slide_on_slope` properties. */
        static separationRayShapeCreate(): Rid
        
        /** Creates a 2D segment shape in the physics server, and returns the [RID] that identifies it. Use [method shape_set_data] to set the segment's start and end points. */
        static segmentShapeCreate(): Rid
        
        /** Creates a 2D circle shape in the physics server, and returns the [RID] that identifies it. Use [method shape_set_data] to set the circle's radius. */
        static circleShapeCreate(): Rid
        
        /** Creates a 2D rectangle shape in the physics server, and returns the [RID] that identifies it. Use [method shape_set_data] to set the rectangle's half-extents. */
        static rectangleShapeCreate(): Rid
        
        /** Creates a 2D capsule shape in the physics server, and returns the [RID] that identifies it. Use [method shape_set_data] to set the capsule's height and radius. */
        static capsuleShapeCreate(): Rid
        
        /** Creates a 2D convex polygon shape in the physics server, and returns the [RID] that identifies it. Use [method shape_set_data] to set the convex polygon's points. */
        static convexPolygonShapeCreate(): Rid
        
        /** Creates a 2D concave polygon shape in the physics server, and returns the [RID] that identifies it. Use [method shape_set_data] to set the concave polygon's segments. */
        static concavePolygonShapeCreate(): Rid
        
        /** Sets the shape data that defines the configuration of the shape. The [param data] to be passed depends on the shape's type (see [method shape_get_type]):  
         *  - [constant SHAPE_WORLD_BOUNDARY]: an array of length two containing a [Vector2] `normal` direction and a [float] distance `d`,  
         *  - [constant SHAPE_SEPARATION_RAY]: a dictionary containing the key `length` with a [float] value and the key `slide_on_slope` with a [bool] value,  
         *  - [constant SHAPE_SEGMENT]: a [Rect2] `rect` containing the first point of the segment in `rect.position` and the second point of the segment in `rect.size`,  
         *  - [constant SHAPE_CIRCLE]: a [float] `radius`,  
         *  - [constant SHAPE_RECTANGLE]: a [Vector2] `half_extents`,  
         *  - [constant SHAPE_CAPSULE]: an array of length two (or a [Vector2]) containing a [float] `height` and a [float] `radius`,  
         *  - [constant SHAPE_CONVEX_POLYGON]: either a [PackedVector2Array] of points defining a convex polygon in counterclockwise order (the clockwise outward normal of each segment formed by consecutive points is calculated internally), or a [PackedFloat32Array] of length divisible by four so that every 4-tuple of [float]s contains the coordinates of a point followed by the coordinates of the clockwise outward normal vector to the segment between the current point and the next point,  
         *  - [constant SHAPE_CONCAVE_POLYGON]: a [PackedVector2Array] of length divisible by two (each pair of points forms one segment).  
         *  **Warning:** In the case of [constant SHAPE_CONVEX_POLYGON], this method does not check if the points supplied actually form a convex polygon (unlike the [member CollisionPolygon2D.polygon] property).  
         */
        static shapeSetData(shape: Rid, data: any): void
        
        /** Returns the shape's type (see [enum ShapeType]). */
        static shapeGetType(shape: Rid): PhysicsServer2D.ShapeType
        
        /** Returns the shape data that defines the configuration of the shape, such as the half-extents of a rectangle or the segments of a concave shape. See [method shape_set_data] for the precise format of this data in each case. */
        static shapeGetData(shape: Rid): any
        
        /** Creates a 2D space in the physics server, and returns the [RID] that identifies it. A space contains bodies and areas, and controls the stepping of the physics simulation of the objects in it. */
        static spaceCreate(): Rid
        
        /** Activates or deactivates the space. If [param active] is `false`, then the physics server will not do anything with this space in its physics step. */
        static spaceSetActive(space: Rid, active: boolean): void
        
        /** Returns `true` if the space is active. */
        static spaceIsActive(space: Rid): boolean
        
        /** Sets the value of the given space parameter. See [enum SpaceParameter] for the list of available parameters. */
        static spaceSetParam(space: Rid, param: PhysicsServer2D.SpaceParameter, value: float64): void
        
        /** Returns the value of the given space parameter. See [enum SpaceParameter] for the list of available parameters. */
        static spaceGetParam(space: Rid, param: PhysicsServer2D.SpaceParameter): float64
        
        /** Returns the state of a space, a [PhysicsDirectSpaceState2D]. This object can be used for collision/intersection queries. */
        static spaceGetDirectState(space: Rid): null | PhysicsDirectSpaceState2D
        
        /** Creates a 2D area object in the physics server, and returns the [RID] that identifies it. The default settings for the created area include a collision layer and mask set to `1`, and `monitorable` set to `false`.  
         *  Use [method area_add_shape] to add shapes to it, use [method area_set_transform] to set its transform, and use [method area_set_space] to add the area to a space. If you want the area to be detectable use [method area_set_monitorable].  
         */
        static areaCreate(): Rid
        
        /** Adds the area to the given space, after removing the area from the previously assigned space (if any).  
         *      
         *  **Note:** To remove an area from a space without immediately adding it back elsewhere, use `PhysicsServer2D.area_set_space(area, RID())`.  
         */
        static areaSetSpace(area: Rid, space: Rid): void
        
        /** Returns the [RID] of the space assigned to the area. Returns an empty [RID] if no space is assigned. */
        static areaGetSpace(area: Rid): Rid
        
        /** Adds a shape to the area, with the given local transform. The shape (together with its [param transform] and [param disabled] properties) is added to an array of shapes, and the shapes of an area are usually referenced by their index in this array. */
        static areaAddShape(area: Rid, shape: Rid, transform?: Transform2D /* = new Transform2D() */, disabled?: boolean /* = false */): void
        
        /** Replaces the area's shape at the given index by another shape, while not affecting the `transform` and `disabled` properties at the same index. */
        static areaSetShape(area: Rid, shapeIdx: int64, shape: Rid): void
        
        /** Sets the local transform matrix of the area's shape with the given index. */
        static areaSetShapeTransform(area: Rid, shapeIdx: int64, transform: Transform2D): void
        
        /** Sets the disabled property of the area's shape with the given index. If [param disabled] is `true`, then the shape will not detect any other shapes entering or exiting it. */
        static areaSetShapeDisabled(area: Rid, shapeIdx: int64, disabled: boolean): void
        
        /** Returns the number of shapes added to the area. */
        static areaGetShapeCount(area: Rid): int64
        
        /** Returns the [RID] of the shape with the given index in the area's array of shapes. */
        static areaGetShape(area: Rid, shapeIdx: int64): Rid
        
        /** Returns the local transform matrix of the shape with the given index in the area's array of shapes. */
        static areaGetShapeTransform(area: Rid, shapeIdx: int64): Transform2D
        
        /** Removes the shape with the given index from the area's array of shapes. The shape itself is not deleted, so it can continue to be used elsewhere or added back later. As a result of this operation, the area's shapes which used to have indices higher than [param shape_idx] will have their index decreased by one. */
        static areaRemoveShape(area: Rid, shapeIdx: int64): void
        
        /** Removes all shapes from the area. This does not delete the shapes themselves, so they can continue to be used elsewhere or added back later. */
        static areaClearShapes(area: Rid): void
        
        /** Assigns the area to one or many physics layers, via a bitmask. */
        static areaSetCollisionLayer(area: Rid, layer: int64): void
        
        /** Returns the physics layer or layers the area belongs to, as a bitmask. */
        static areaGetCollisionLayer(area: Rid): int64
        
        /** Sets which physics layers the area will monitor, via a bitmask. */
        static areaSetCollisionMask(area: Rid, mask: int64): void
        
        /** Returns the physics layer or layers the area can contact with, as a bitmask. */
        static areaGetCollisionMask(area: Rid): int64
        
        /** Sets the value of the given area parameter. See [enum AreaParameter] for the list of available parameters. */
        static areaSetParam(area: Rid, param: PhysicsServer2D.AreaParameter, value: any): void
        
        /** Sets the transform matrix of the area. */
        static areaSetTransform(area: Rid, transform: Transform2D): void
        
        /** Returns the value of the given area parameter. See [enum AreaParameter] for the list of available parameters. */
        static areaGetParam(area: Rid, param: PhysicsServer2D.AreaParameter): any
        
        /** Returns the transform matrix of the area. */
        static areaGetTransform(area: Rid): Transform2D
        
        /** Attaches the `ObjectID` of an [Object] to the area. Use [method Object.get_instance_id] to get the `ObjectID` of a [CollisionObject2D]. */
        static areaAttachObjectInstanceId(area: Rid, id: int64): void
        
        /** Returns the `ObjectID` attached to the area. Use [method @GlobalScope.instance_from_id] to retrieve an [Object] from a nonzero `ObjectID`. */
        static areaGetObjectInstanceId(area: Rid): int64
        
        /** Attaches the `ObjectID` of a canvas to the area. Use [method Object.get_instance_id] to get the `ObjectID` of a [CanvasLayer]. */
        static areaAttachCanvasInstanceId(area: Rid, id: int64): void
        
        /** Returns the `ObjectID` of the canvas attached to the area. Use [method @GlobalScope.instance_from_id] to retrieve a [CanvasLayer] from a nonzero `ObjectID`. */
        static areaGetCanvasInstanceId(area: Rid): int64
        
        /** Sets the area's body monitor callback. This callback will be called when any other (shape of a) body enters or exits (a shape of) the given area, and must take the following five parameters:  
         *  1. an integer `status`: either [constant AREA_BODY_ADDED] or [constant AREA_BODY_REMOVED] depending on whether the other body shape entered or exited the area,  
         *  2. an [RID] `body_rid`: the [RID] of the body that entered or exited the area,  
         *  3. an integer `instance_id`: the `ObjectID` attached to the body,  
         *  4. an integer `body_shape_idx`: the index of the shape of the body that entered or exited the area,  
         *  5. an integer `self_shape_idx`: the index of the shape of the area where the body entered or exited.  
         *  By counting (or keeping track of) the shapes that enter and exit, it can be determined if a body (with all its shapes) is entering for the first time or exiting for the last time.  
         */
        static areaSetMonitorCallback(area: Rid, callback: Callable): void
        
        /** Sets the area's area monitor callback. This callback will be called when any other (shape of an) area enters or exits (a shape of) the given area, and must take the following five parameters:  
         *  1. an integer `status`: either [constant AREA_BODY_ADDED] or [constant AREA_BODY_REMOVED] depending on whether the other area's shape entered or exited the area,  
         *  2. an [RID] `area_rid`: the [RID] of the other area that entered or exited the area,  
         *  3. an integer `instance_id`: the `ObjectID` attached to the other area,  
         *  4. an integer `area_shape_idx`: the index of the shape of the other area that entered or exited the area,  
         *  5. an integer `self_shape_idx`: the index of the shape of the area where the other area entered or exited.  
         *  By counting (or keeping track of) the shapes that enter and exit, it can be determined if an area (with all its shapes) is entering for the first time or exiting for the last time.  
         */
        static areaSetAreaMonitorCallback(area: Rid, callback: Callable): void
        
        /** Sets whether the area is monitorable or not. If [param monitorable] is `true`, the area monitoring callback of other areas will be called when this area enters or exits them. */
        static areaSetMonitorable(area: Rid, monitorable: boolean): void
        
        /** Creates a 2D body object in the physics server, and returns the [RID] that identifies it. The default settings for the created area include a collision layer and mask set to `1`, and body mode set to [constant BODY_MODE_RIGID].  
         *  Use [method body_add_shape] to add shapes to it, use [method body_set_state] to set its transform, and use [method body_set_space] to add the body to a space.  
         */
        static bodyCreate(): Rid
        
        /** Adds the body to the given space, after removing the body from the previously assigned space (if any). If the body's mode is set to [constant BODY_MODE_RIGID], then adding the body to a space will have the following additional effects:  
         *  - If the parameter [constant BODY_PARAM_CENTER_OF_MASS] has never been set explicitly, then the value of that parameter will be recalculated based on the body's shapes.  
         *  - If the parameter [constant BODY_PARAM_INERTIA] is set to a value `<= 0.0`, then the value of that parameter will be recalculated based on the body's shapes, mass, and center of mass.  
         *      
         *  **Note:** To remove a body from a space without immediately adding it back elsewhere, use `PhysicsServer2D.body_set_space(body, RID())`.  
         */
        static bodySetSpace(body: Rid, space: Rid): void
        
        /** Returns the [RID] of the space assigned to the body. Returns an empty [RID] if no space is assigned. */
        static bodyGetSpace(body: Rid): Rid
        
        /** Sets the body's mode. See [enum BodyMode] for the list of available modes. */
        static bodySetMode(body: Rid, mode: PhysicsServer2D.BodyMode): void
        
        /** Returns the body's mode (see [enum BodyMode]). */
        static bodyGetMode(body: Rid): PhysicsServer2D.BodyMode
        
        /** Adds a shape to the area, with the given local transform. The shape (together with its [param transform] and [param disabled] properties) is added to an array of shapes, and the shapes of a body are usually referenced by their index in this array. */
        static bodyAddShape(body: Rid, shape: Rid, transform?: Transform2D /* = new Transform2D() */, disabled?: boolean /* = false */): void
        
        /** Replaces the body's shape at the given index by another shape, while not affecting the `transform`, `disabled`, and one-way collision properties at the same index. */
        static bodySetShape(body: Rid, shapeIdx: int64, shape: Rid): void
        
        /** Sets the local transform matrix of the body's shape with the given index. */
        static bodySetShapeTransform(body: Rid, shapeIdx: int64, transform: Transform2D): void
        
        /** Returns the number of shapes added to the body. */
        static bodyGetShapeCount(body: Rid): int64
        
        /** Returns the [RID] of the shape with the given index in the body's array of shapes. */
        static bodyGetShape(body: Rid, shapeIdx: int64): Rid
        
        /** Returns the local transform matrix of the shape with the given index in the area's array of shapes. */
        static bodyGetShapeTransform(body: Rid, shapeIdx: int64): Transform2D
        
        /** Removes the shape with the given index from the body's array of shapes. The shape itself is not deleted, so it can continue to be used elsewhere or added back later. As a result of this operation, the body's shapes which used to have indices higher than [param shape_idx] will have their index decreased by one. */
        static bodyRemoveShape(body: Rid, shapeIdx: int64): void
        
        /** Removes all shapes from the body. This does not delete the shapes themselves, so they can continue to be used elsewhere or added back later. */
        static bodyClearShapes(body: Rid): void
        
        /** Sets the disabled property of the body's shape with the given index. If [param disabled] is `true`, then the shape will be ignored in all collision detection. */
        static bodySetShapeDisabled(body: Rid, shapeIdx: int64, disabled: boolean): void
        
        /** Sets the one-way collision properties of the body's shape with the given index. If [param enable] is `true`, the one-way collision direction given by the shape's local upward axis `body_get_shape_transform(body, shape_idx).y` will be used to ignore collisions with the shape in the opposite direction, and to ensure depenetration of kinematic bodies happens in this direction. */
        static bodySetShapeAsOneWayCollision(body: Rid, shapeIdx: int64, enable: boolean, margin: float64): void
        
        /** Attaches the `ObjectID` of an [Object] to the body. Use [method Object.get_instance_id] to get the `ObjectID` of a [CollisionObject2D]. */
        static bodyAttachObjectInstanceId(body: Rid, id: int64): void
        
        /** Returns the `ObjectID` attached to the body. Use [method @GlobalScope.instance_from_id] to retrieve an [Object] from a nonzero `ObjectID`. */
        static bodyGetObjectInstanceId(body: Rid): int64
        
        /** Attaches the `ObjectID` of a canvas to the body. Use [method Object.get_instance_id] to get the `ObjectID` of a [CanvasLayer]. */
        static bodyAttachCanvasInstanceId(body: Rid, id: int64): void
        
        /** Returns the `ObjectID` of the canvas attached to the body. Use [method @GlobalScope.instance_from_id] to retrieve a [CanvasLayer] from a nonzero `ObjectID`. */
        static bodyGetCanvasInstanceId(body: Rid): int64
        
        /** Sets the continuous collision detection mode using one of the [enum CCDMode] constants.  
         *  Continuous collision detection tries to predict where a moving body would collide in between physics updates, instead of moving it and correcting its movement if it collided.  
         */
        static bodySetContinuousCollisionDetectionMode(body: Rid, mode: PhysicsServer2D.CcdMode): void
        
        /** Returns the body's continuous collision detection mode (see [enum CCDMode]). */
        static bodyGetContinuousCollisionDetectionMode(body: Rid): PhysicsServer2D.CcdMode
        
        /** Sets the physics layer or layers the body belongs to, via a bitmask. */
        static bodySetCollisionLayer(body: Rid, layer: int64): void
        
        /** Returns the physics layer or layers the body belongs to, as a bitmask. */
        static bodyGetCollisionLayer(body: Rid): int64
        
        /** Sets the physics layer or layers the body can collide with, via a bitmask. */
        static bodySetCollisionMask(body: Rid, mask: int64): void
        
        /** Returns the physics layer or layers the body can collide with, as a bitmask. */
        static bodyGetCollisionMask(body: Rid): int64
        
        /** Sets the body's collision priority. This is used in the depenetration phase of [method body_test_motion]. The higher the priority is, the lower the penetration into the body will be. */
        static bodySetCollisionPriority(body: Rid, priority: float64): void
        
        /** Returns the body's collision priority. This is used in the depenetration phase of [method body_test_motion]. The higher the priority is, the lower the penetration into the body will be. */
        static bodyGetCollisionPriority(body: Rid): float64
        
        /** Sets the value of the given body parameter. See [enum BodyParameter] for the list of available parameters. */
        static bodySetParam(body: Rid, param: PhysicsServer2D.BodyParameter, value: any): void
        
        /** Returns the value of the given body parameter. See [enum BodyParameter] for the list of available parameters. */
        static bodyGetParam(body: Rid, param: PhysicsServer2D.BodyParameter): any
        
        /** Restores the default inertia and center of mass of the body based on its shapes. This undoes any custom values previously set using [method body_set_param]. */
        static bodyResetMassProperties(body: Rid): void
        
        /** Sets the value of a body's state. See [enum BodyState] for the list of available states.  
         *      
         *  **Note:** The state change doesn't take effect immediately. The state will change on the next physics frame.  
         */
        static bodySetState(body: Rid, state: PhysicsServer2D.BodyState, value: any): void
        
        /** Returns the value of the given state of the body. See [enum BodyState] for the list of available states. */
        static bodyGetState(body: Rid, state: PhysicsServer2D.BodyState): any
        
        /** Applies a directional impulse to the body, at the body's center of mass. The impulse does not affect rotation.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         *  This is equivalent to using [method body_apply_impulse] at the body's center of mass.  
         */
        static bodyApplyCentralImpulse(body: Rid, impulse: Vector2): void
        
        /** Applies a rotational impulse to the body. The impulse does not affect position.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         */
        static bodyApplyTorqueImpulse(body: Rid, impulse: float64): void
        
        /** Applies a positioned impulse to the body. The impulse can affect rotation if [param position] is different from the body's center of mass.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        static bodyApplyImpulse(body: Rid, impulse: Vector2, position?: Vector2 /* = Vector2.ZERO */): void
        
        /** Applies a directional force to the body, at the body's center of mass. The force does not affect rotation. A force is time dependent and meant to be applied every physics update.  
         *  This is equivalent to using [method body_apply_force] at the body's center of mass.  
         */
        static bodyApplyCentralForce(body: Rid, force: Vector2): void
        
        /** Applies a positioned force to the body. The force can affect rotation if [param position] is different from the body's center of mass. A force is time dependent and meant to be applied every physics update.  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        static bodyApplyForce(body: Rid, force: Vector2, position?: Vector2 /* = Vector2.ZERO */): void
        
        /** Applies a rotational force to the body. The force does not affect position. A force is time dependent and meant to be applied every physics update. */
        static bodyApplyTorque(body: Rid, torque: float64): void
        
        /** Adds a constant directional force to the body. The force does not affect rotation. The force remains applied over time until cleared with `PhysicsServer2D.body_set_constant_force(body, Vector2(0, 0))`.  
         *  This is equivalent to using [method body_add_constant_force] at the body's center of mass.  
         */
        static bodyAddConstantCentralForce(body: Rid, force: Vector2): void
        
        /** Adds a constant positioned force to the body. The force can affect rotation if [param position] is different from the body's center of mass. The force remains applied over time until cleared with `PhysicsServer2D.body_set_constant_force(body, Vector2(0, 0))`.  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        static bodyAddConstantForce(body: Rid, force: Vector2, position?: Vector2 /* = Vector2.ZERO */): void
        
        /** Adds a constant rotational force to the body. The force does not affect position. The force remains applied over time until cleared with `PhysicsServer2D.body_set_constant_torque(body, 0)`. */
        static bodyAddConstantTorque(body: Rid, torque: float64): void
        
        /** Sets the body's total constant positional force applied during each physics update.  
         *  See [method body_add_constant_force] and [method body_add_constant_central_force].  
         */
        static bodySetConstantForce(body: Rid, force: Vector2): void
        
        /** Returns the body's total constant positional force applied during each physics update.  
         *  See [method body_add_constant_force] and [method body_add_constant_central_force].  
         */
        static bodyGetConstantForce(body: Rid): Vector2
        
        /** Sets the body's total constant rotational force applied during each physics update.  
         *  See [method body_add_constant_torque].  
         */
        static bodySetConstantTorque(body: Rid, torque: float64): void
        
        /** Returns the body's total constant rotational force applied during each physics update.  
         *  See [method body_add_constant_torque].  
         */
        static bodyGetConstantTorque(body: Rid): float64
        
        /** Modifies the body's linear velocity so that its projection to the axis `axis_velocity.normalized()` is exactly `axis_velocity.length()`. This is useful for jumping behavior. */
        static bodySetAxisVelocity(body: Rid, axisVelocity: Vector2): void
        
        /** Adds [param excepted_body] to the body's list of collision exceptions, so that collisions with it are ignored. */
        static bodyAddCollisionException(body: Rid, exceptedBody: Rid): void
        
        /** Removes [param excepted_body] from the body's list of collision exceptions, so that collisions with it are no longer ignored. */
        static bodyRemoveCollisionException(body: Rid, exceptedBody: Rid): void
        
        /** Sets the maximum number of contacts that the body can report. If [param amount] is greater than zero, then the body will keep track of at most this many contacts with other bodies. */
        static bodySetMaxContactsReported(body: Rid, amount: int64): void
        
        /** Returns the maximum number of contacts that the body can report. See [method body_set_max_contacts_reported]. */
        static bodyGetMaxContactsReported(body: Rid): int64
        
        /** Sets whether the body omits the standard force integration. If [param enable] is `true`, the body will not automatically use applied forces, torques, and damping to update the body's linear and angular velocity. In this case, [method body_set_force_integration_callback] can be used to manually update the linear and angular velocity instead.  
         *  This method is called when the property [member RigidBody2D.custom_integrator] is set.  
         */
        static bodySetOmitForceIntegration(body: Rid, enable: boolean): void
        
        /** Returns `true` if the body is omitting the standard force integration. See [method body_set_omit_force_integration]. */
        static bodyIsOmittingForceIntegration(body: Rid): boolean
        
        /** Sets the body's state synchronization callback function to [param callable]. Use an empty [Callable] ([code skip-lint]Callable()`) to clear the callback.  
         *  The function [param callable] will be called every physics frame, assuming that the body was active during the previous physics tick, and can be used to fetch the latest state from the physics server.  
         *  The function [param callable] must take the following parameters:  
         *  1. `state`: a [PhysicsDirectBodyState2D], used to retrieve the body's state.  
         */
        static bodySetStateSyncCallback(body: Rid, callable: Callable): void
        
        /** Sets the body's custom force integration callback function to [param callable]. Use an empty [Callable] ([code skip-lint]Callable()`) to clear the custom callback.  
         *  The function [param callable] will be called every physics tick, before the standard force integration (see [method body_set_omit_force_integration]). It can be used for example to update the body's linear and angular velocity based on contact with other bodies.  
         *  If [param userdata] is not `null`, the function [param callable] must take the following two parameters:  
         *  1. `state`: a [PhysicsDirectBodyState2D] used to retrieve and modify the body's state,  
         *  2. [code skip-lint]userdata`: a [Variant]; its value will be the [param userdata] passed into this method.  
         *  If [param userdata] is `null`, then [param callable] must take only the `state` parameter.  
         */
        static bodySetForceIntegrationCallback(body: Rid, callable: Callable, userdata?: any /* = <any> {} */): void
        
        /** Returns `true` if a collision would result from moving the body along a motion vector from a given point in space. See [PhysicsTestMotionParameters2D] for the available motion parameters. Optionally a [PhysicsTestMotionResult2D] object can be passed, which will be used to store the information about the resulting collision. */
        static bodyTestMotion(body: Rid, parameters: PhysicsTestMotionParameters2D, result?: PhysicsTestMotionResult2D /* = undefined */): boolean
        
        /** Returns the [PhysicsDirectBodyState2D] of the body. Returns `null` if the body is destroyed or not assigned to a space. */
        static bodyGetDirectState(body: Rid): null | PhysicsDirectBodyState2D
        
        /** Creates a 2D joint in the physics server, and returns the [RID] that identifies it. To set the joint type, use [method joint_make_damped_spring], [method joint_make_groove] or [method joint_make_pin]. Use [method joint_set_param] to set generic joint parameters. */
        static jointCreate(): Rid
        
        /** Destroys the joint with the given [RID], creates a new uninitialized joint, and makes the [RID] refer to this new joint. */
        static jointClear(joint: Rid): void
        
        /** Sets the value of the given joint parameter. See [enum JointParam] for the list of available parameters. */
        static jointSetParam(joint: Rid, param: PhysicsServer2D.JointParam, value: float64): void
        
        /** Returns the value of the given joint parameter. See [enum JointParam] for the list of available parameters. */
        static jointGetParam(joint: Rid, param: PhysicsServer2D.JointParam): float64
        
        /** Sets whether the bodies attached to the [Joint2D] will collide with each other. */
        static jointDisableCollisionsBetweenBodies(joint: Rid, disable: boolean): void
        
        /** Returns whether the bodies attached to the [Joint2D] will collide with each other. */
        static jointIsDisabledCollisionsBetweenBodies(joint: Rid): boolean
        
        /** Makes the joint a pin joint. If [param body_b] is an empty [RID], then [param body_a] is pinned to the point [param anchor] (given in global coordinates); otherwise, [param body_a] is pinned to [param body_b] at the point [param anchor] (given in global coordinates). To set the parameters which are specific to the pin joint, see [method pin_joint_set_param]. */
        static jointMakePin(joint: Rid, anchor: Vector2, bodyA: Rid, bodyB?: Rid /* = new Rid() */): void
        
        /** Makes the joint a groove joint. */
        static jointMakeGroove(joint: Rid, groove1A: Vector2, groove2A: Vector2, anchorB: Vector2, bodyA?: Rid /* = new Rid() */, bodyB?: Rid /* = new Rid() */): void
        
        /** Makes the joint a damped spring joint, attached at the point [param anchor_a] (given in global coordinates) on the body [param body_a] and at the point [param anchor_b] (given in global coordinates) on the body [param body_b]. To set the parameters which are specific to the damped spring, see [method damped_spring_joint_set_param]. */
        static jointMakeDampedSpring(joint: Rid, anchorA: Vector2, anchorB: Vector2, bodyA: Rid, bodyB?: Rid /* = new Rid() */): void
        
        /** Sets a pin joint flag (see [enum PinJointFlag] constants). */
        static pinJointSetFlag(joint: Rid, flag: PhysicsServer2D.PinJointFlag, enabled: boolean): void
        
        /** Gets a pin joint flag (see [enum PinJointFlag] constants). */
        static pinJointGetFlag(joint: Rid, flag: PhysicsServer2D.PinJointFlag): boolean
        
        /** Sets a pin joint parameter. See [enum PinJointParam] for a list of available parameters. */
        static pinJointSetParam(joint: Rid, param: PhysicsServer2D.PinJointParam, value: float64): void
        
        /** Returns the value of a pin joint parameter. See [enum PinJointParam] for a list of available parameters. */
        static pinJointGetParam(joint: Rid, param: PhysicsServer2D.PinJointParam): float64
        
        /** Sets the value of the given damped spring joint parameter. See [enum DampedSpringParam] for the list of available parameters. */
        static dampedSpringJointSetParam(joint: Rid, param: PhysicsServer2D.DampedSpringParam, value: float64): void
        
        /** Returns the value of the given damped spring joint parameter. See [enum DampedSpringParam] for the list of available parameters. */
        static dampedSpringJointGetParam(joint: Rid, param: PhysicsServer2D.DampedSpringParam): float64
        
        /** Returns the joint's type (see [enum JointType]). */
        static jointGetType(joint: Rid): PhysicsServer2D.JointType
        
        /** Destroys any of the objects created by PhysicsServer2D. If the [RID] passed is not one of the objects that can be created by PhysicsServer2D, an error will be printed to the console. */
        static freeRid(rid: Rid): void
        
        /** Activates or deactivates the 2D physics server. If [param active] is `false`, then the physics server will not do anything in its physics step. */
        static setActive(active: boolean): void
        
        /** Returns information about the current state of the 2D physics engine. See [enum ProcessInfo] for the list of available states. */
        static getProcessInfo(processInfo: PhysicsServer2D.ProcessInfo): int64
    }
    // _singleton_class_: PhysicsServer3D
    namespace PhysicsServer3D {
        enum JointType {
            JointTypePin = 0,
            JointTypeHinge = 1,
            JointTypeSlider = 2,
            JointTypeConeTwist = 3,
            JointType6Dof = 4,
            JointTypeMax = 5,
        }
        enum PinJointParam {
            PinJointBias = 0,
            PinJointDamping = 1,
            PinJointImpulseClamp = 2,
        }
        enum HingeJointParam {
            HingeJointBias = 0,
            HingeJointLimitUpper = 1,
            HingeJointLimitLower = 2,
            HingeJointLimitBias = 3,
            HingeJointLimitSoftness = 4,
            HingeJointLimitRelaxation = 5,
            HingeJointMotorTargetVelocity = 6,
            HingeJointMotorMaxImpulse = 7,
        }
        enum HingeJointFlag {
            HingeJointFlagUseLimit = 0,
            HingeJointFlagEnableMotor = 1,
        }
        enum SliderJointParam {
            SliderJointLinearLimitUpper = 0,
            SliderJointLinearLimitLower = 1,
            SliderJointLinearLimitSoftness = 2,
            SliderJointLinearLimitRestitution = 3,
            SliderJointLinearLimitDamping = 4,
            SliderJointLinearMotionSoftness = 5,
            SliderJointLinearMotionRestitution = 6,
            SliderJointLinearMotionDamping = 7,
            SliderJointLinearOrthogonalSoftness = 8,
            SliderJointLinearOrthogonalRestitution = 9,
            SliderJointLinearOrthogonalDamping = 10,
            SliderJointAngularLimitUpper = 11,
            SliderJointAngularLimitLower = 12,
            SliderJointAngularLimitSoftness = 13,
            SliderJointAngularLimitRestitution = 14,
            SliderJointAngularLimitDamping = 15,
            SliderJointAngularMotionSoftness = 16,
            SliderJointAngularMotionRestitution = 17,
            SliderJointAngularMotionDamping = 18,
            SliderJointAngularOrthogonalSoftness = 19,
            SliderJointAngularOrthogonalRestitution = 20,
            SliderJointAngularOrthogonalDamping = 21,
            SliderJointMax = 22,
        }
        enum ConeTwistJointParam {
            ConeTwistJointSwingSpan = 0,
            ConeTwistJointTwistSpan = 1,
            ConeTwistJointBias = 2,
            ConeTwistJointSoftness = 3,
            ConeTwistJointRelaxation = 4,
        }
        enum G6DofJointAxisParam {
            G6DofJointLinearLowerLimit = 0,
            G6DofJointLinearUpperLimit = 1,
            G6DofJointLinearLimitSoftness = 2,
            G6DofJointLinearRestitution = 3,
            G6DofJointLinearDamping = 4,
            G6DofJointLinearMotorTargetVelocity = 5,
            G6DofJointLinearMotorForceLimit = 6,
            G6DofJointLinearSpringStiffness = 7,
            G6DofJointLinearSpringDamping = 8,
            G6DofJointLinearSpringEquilibriumPoint = 9,
            G6DofJointAngularLowerLimit = 10,
            G6DofJointAngularUpperLimit = 11,
            G6DofJointAngularLimitSoftness = 12,
            G6DofJointAngularDamping = 13,
            G6DofJointAngularRestitution = 14,
            G6DofJointAngularForceLimit = 15,
            G6DofJointAngularErp = 16,
            G6DofJointAngularMotorTargetVelocity = 17,
            G6DofJointAngularMotorForceLimit = 18,
            G6DofJointAngularSpringStiffness = 19,
            G6DofJointAngularSpringDamping = 20,
            G6DofJointAngularSpringEquilibriumPoint = 21,
            G6DofJointMax = 22,
        }
        enum G6DofJointAxisFlag {
            G6DofJointFlagEnableLinearLimit = 0,
            G6DofJointFlagEnableAngularLimit = 1,
            G6DofJointFlagEnableAngularSpring = 2,
            G6DofJointFlagEnableLinearSpring = 3,
            G6DofJointFlagEnableMotor = 4,
            G6DofJointFlagEnableLinearMotor = 5,
            G6DofJointFlagMax = 6,
        }
        enum ShapeType {
            ShapeWorldBoundary = 0,
            ShapeSeparationRay = 1,
            ShapeSphere = 2,
            ShapeBox = 3,
            ShapeCapsule = 4,
            ShapeCylinder = 5,
            ShapeConvexPolygon = 6,
            ShapeConcavePolygon = 7,
            ShapeHeightmap = 8,
            ShapeSoftBody = 9,
            ShapeCustom = 10,
        }
        enum AreaParameter {
            AreaParamGravityOverrideMode = 0,
            AreaParamGravity = 1,
            AreaParamGravityVector = 2,
            AreaParamGravityIsPoint = 3,
            AreaParamGravityPointUnitDistance = 4,
            AreaParamLinearDampOverrideMode = 5,
            AreaParamLinearDamp = 6,
            AreaParamAngularDampOverrideMode = 7,
            AreaParamAngularDamp = 8,
            AreaParamPriority = 9,
            AreaParamWindForceMagnitude = 10,
            AreaParamWindSource = 11,
            AreaParamWindDirection = 12,
            AreaParamWindAttenuationFactor = 13,
        }
        enum AreaSpaceOverrideMode {
            AreaSpaceOverrideDisabled = 0,
            AreaSpaceOverrideCombine = 1,
            AreaSpaceOverrideCombineReplace = 2,
            AreaSpaceOverrideReplace = 3,
            AreaSpaceOverrideReplaceCombine = 4,
        }
        enum BodyMode {
            BodyModeStatic = 0,
            BodyModeKinematic = 1,
            BodyModeRigid = 2,
            BodyModeRigidLinear = 3,
        }
        enum BodyParameter {
            BodyParamBounce = 0,
            BodyParamFriction = 1,
            BodyParamMass = 2,
            BodyParamInertia = 3,
            BodyParamCenterOfMass = 4,
            BodyParamGravityScale = 5,
            BodyParamLinearDampMode = 6,
            BodyParamAngularDampMode = 7,
            BodyParamLinearDamp = 8,
            BodyParamAngularDamp = 9,
            BodyParamMax = 10,
        }
        enum BodyDampMode {
            BodyDampModeCombine = 0,
            BodyDampModeReplace = 1,
        }
        enum BodyState {
            BodyStateTransform = 0,
            BodyStateLinearVelocity = 1,
            BodyStateAngularVelocity = 2,
            BodyStateSleeping = 3,
            BodyStateCanSleep = 4,
        }
        enum AreaBodyStatus {
            AreaBodyAdded = 0,
            AreaBodyRemoved = 1,
        }
        enum ProcessInfo {
            InfoActiveObjects = 0,
            InfoCollisionPairs = 1,
            InfoIslandCount = 2,
        }
        enum SpaceParameter {
            SpaceParamContactRecycleRadius = 0,
            SpaceParamContactMaxSeparation = 1,
            SpaceParamContactMaxAllowedPenetration = 2,
            SpaceParamContactDefaultBias = 3,
            SpaceParamBodyLinearVelocitySleepThreshold = 4,
            SpaceParamBodyAngularVelocitySleepThreshold = 5,
            SpaceParamBodyTimeToSleep = 6,
            SpaceParamSolverIterations = 7,
        }
        enum BodyAxis {
            BodyAxisLinearX = 1,
            BodyAxisLinearY = 2,
            BodyAxisLinearZ = 4,
            BodyAxisAngularX = 8,
            BodyAxisAngularY = 16,
            BodyAxisAngularZ = 32,
        }
    }
    /** A server interface for low-level 3D physics access.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicsserver3d.html  
     */
    class PhysicsServer3D extends GObject {
        /** The [Joint3D] is a [PinJoint3D]. */
        static readonly JOINT_TYPE_PIN = 0
        
        /** The [Joint3D] is a [HingeJoint3D]. */
        static readonly JOINT_TYPE_HINGE = 1
        
        /** The [Joint3D] is a [SliderJoint3D]. */
        static readonly JOINT_TYPE_SLIDER = 2
        
        /** The [Joint3D] is a [ConeTwistJoint3D]. */
        static readonly JOINT_TYPE_CONE_TWIST = 3
        
        /** The [Joint3D] is a [Generic6DOFJoint3D]. */
        static readonly JOINT_TYPE_6DOF = 4
        
        /** Represents the size of the [enum JointType] enum. */
        static readonly JOINT_TYPE_MAX = 5
        
        /** The strength with which the pinned objects try to stay in positional relation to each other.  
         *  The higher, the stronger.  
         */
        static readonly PIN_JOINT_BIAS = 0
        
        /** The strength with which the pinned objects try to stay in velocity relation to each other.  
         *  The higher, the stronger.  
         */
        static readonly PIN_JOINT_DAMPING = 1
        
        /** If above 0, this value is the maximum value for an impulse that this Joint3D puts on its ends. */
        static readonly PIN_JOINT_IMPULSE_CLAMP = 2
        
        /** The speed with which the two bodies get pulled together when they move in different directions. */
        static readonly HINGE_JOINT_BIAS = 0
        
        /** The maximum rotation across the Hinge. */
        static readonly HINGE_JOINT_LIMIT_UPPER = 1
        
        /** The minimum rotation across the Hinge. */
        static readonly HINGE_JOINT_LIMIT_LOWER = 2
        
        /** The speed with which the rotation across the axis perpendicular to the hinge gets corrected. */
        static readonly HINGE_JOINT_LIMIT_BIAS = 3
        static readonly HINGE_JOINT_LIMIT_SOFTNESS = 4
        
        /** The lower this value, the more the rotation gets slowed down. */
        static readonly HINGE_JOINT_LIMIT_RELAXATION = 5
        
        /** Target speed for the motor. */
        static readonly HINGE_JOINT_MOTOR_TARGET_VELOCITY = 6
        
        /** Maximum acceleration for the motor. */
        static readonly HINGE_JOINT_MOTOR_MAX_IMPULSE = 7
        
        /** If `true`, the Hinge has a maximum and a minimum rotation. */
        static readonly HINGE_JOINT_FLAG_USE_LIMIT = 0
        
        /** If `true`, a motor turns the Hinge. */
        static readonly HINGE_JOINT_FLAG_ENABLE_MOTOR = 1
        
        /** The maximum difference between the pivot points on their X axis before damping happens. */
        static readonly SLIDER_JOINT_LINEAR_LIMIT_UPPER = 0
        
        /** The minimum difference between the pivot points on their X axis before damping happens. */
        static readonly SLIDER_JOINT_LINEAR_LIMIT_LOWER = 1
        
        /** A factor applied to the movement across the slider axis once the limits get surpassed. The lower, the slower the movement. */
        static readonly SLIDER_JOINT_LINEAR_LIMIT_SOFTNESS = 2
        
        /** The amount of restitution once the limits are surpassed. The lower, the more velocity-energy gets lost. */
        static readonly SLIDER_JOINT_LINEAR_LIMIT_RESTITUTION = 3
        
        /** The amount of damping once the slider limits are surpassed. */
        static readonly SLIDER_JOINT_LINEAR_LIMIT_DAMPING = 4
        
        /** A factor applied to the movement across the slider axis as long as the slider is in the limits. The lower, the slower the movement. */
        static readonly SLIDER_JOINT_LINEAR_MOTION_SOFTNESS = 5
        
        /** The amount of restitution inside the slider limits. */
        static readonly SLIDER_JOINT_LINEAR_MOTION_RESTITUTION = 6
        
        /** The amount of damping inside the slider limits. */
        static readonly SLIDER_JOINT_LINEAR_MOTION_DAMPING = 7
        
        /** A factor applied to the movement across axes orthogonal to the slider. */
        static readonly SLIDER_JOINT_LINEAR_ORTHOGONAL_SOFTNESS = 8
        
        /** The amount of restitution when movement is across axes orthogonal to the slider. */
        static readonly SLIDER_JOINT_LINEAR_ORTHOGONAL_RESTITUTION = 9
        
        /** The amount of damping when movement is across axes orthogonal to the slider. */
        static readonly SLIDER_JOINT_LINEAR_ORTHOGONAL_DAMPING = 10
        
        /** The upper limit of rotation in the slider. */
        static readonly SLIDER_JOINT_ANGULAR_LIMIT_UPPER = 11
        
        /** The lower limit of rotation in the slider. */
        static readonly SLIDER_JOINT_ANGULAR_LIMIT_LOWER = 12
        
        /** A factor applied to the all rotation once the limit is surpassed. */
        static readonly SLIDER_JOINT_ANGULAR_LIMIT_SOFTNESS = 13
        
        /** The amount of restitution of the rotation when the limit is surpassed. */
        static readonly SLIDER_JOINT_ANGULAR_LIMIT_RESTITUTION = 14
        
        /** The amount of damping of the rotation when the limit is surpassed. */
        static readonly SLIDER_JOINT_ANGULAR_LIMIT_DAMPING = 15
        
        /** A factor that gets applied to the all rotation in the limits. */
        static readonly SLIDER_JOINT_ANGULAR_MOTION_SOFTNESS = 16
        
        /** The amount of restitution of the rotation in the limits. */
        static readonly SLIDER_JOINT_ANGULAR_MOTION_RESTITUTION = 17
        
        /** The amount of damping of the rotation in the limits. */
        static readonly SLIDER_JOINT_ANGULAR_MOTION_DAMPING = 18
        
        /** A factor that gets applied to the all rotation across axes orthogonal to the slider. */
        static readonly SLIDER_JOINT_ANGULAR_ORTHOGONAL_SOFTNESS = 19
        
        /** The amount of restitution of the rotation across axes orthogonal to the slider. */
        static readonly SLIDER_JOINT_ANGULAR_ORTHOGONAL_RESTITUTION = 20
        
        /** The amount of damping of the rotation across axes orthogonal to the slider. */
        static readonly SLIDER_JOINT_ANGULAR_ORTHOGONAL_DAMPING = 21
        
        /** Represents the size of the [enum SliderJointParam] enum. */
        static readonly SLIDER_JOINT_MAX = 22
        
        /** Swing is rotation from side to side, around the axis perpendicular to the twist axis.  
         *  The swing span defines, how much rotation will not get corrected along the swing axis.  
         *  Could be defined as looseness in the [ConeTwistJoint3D].  
         *  If below 0.05, this behavior is locked.  
         */
        static readonly CONE_TWIST_JOINT_SWING_SPAN = 0
        
        /** Twist is the rotation around the twist axis, this value defined how far the joint can twist.  
         *  Twist is locked if below 0.05.  
         */
        static readonly CONE_TWIST_JOINT_TWIST_SPAN = 1
        
        /** The speed with which the swing or twist will take place.  
         *  The higher, the faster.  
         */
        static readonly CONE_TWIST_JOINT_BIAS = 2
        
        /** The ease with which the Joint3D twists, if it's too low, it takes more force to twist the joint. */
        static readonly CONE_TWIST_JOINT_SOFTNESS = 3
        
        /** Defines, how fast the swing- and twist-speed-difference on both sides gets synced. */
        static readonly CONE_TWIST_JOINT_RELAXATION = 4
        
        /** The minimum difference between the pivot points' axes. */
        static readonly G6DOF_JOINT_LINEAR_LOWER_LIMIT = 0
        
        /** The maximum difference between the pivot points' axes. */
        static readonly G6DOF_JOINT_LINEAR_UPPER_LIMIT = 1
        
        /** A factor that gets applied to the movement across the axes. The lower, the slower the movement. */
        static readonly G6DOF_JOINT_LINEAR_LIMIT_SOFTNESS = 2
        
        /** The amount of restitution on the axes movement. The lower, the more velocity-energy gets lost. */
        static readonly G6DOF_JOINT_LINEAR_RESTITUTION = 3
        
        /** The amount of damping that happens at the linear motion across the axes. */
        static readonly G6DOF_JOINT_LINEAR_DAMPING = 4
        
        /** The velocity that the joint's linear motor will attempt to reach. */
        static readonly G6DOF_JOINT_LINEAR_MOTOR_TARGET_VELOCITY = 5
        
        /** The maximum force that the linear motor can apply while trying to reach the target velocity. */
        static readonly G6DOF_JOINT_LINEAR_MOTOR_FORCE_LIMIT = 6
        static readonly G6DOF_JOINT_LINEAR_SPRING_STIFFNESS = 7
        static readonly G6DOF_JOINT_LINEAR_SPRING_DAMPING = 8
        static readonly G6DOF_JOINT_LINEAR_SPRING_EQUILIBRIUM_POINT = 9
        
        /** The minimum rotation in negative direction to break loose and rotate around the axes. */
        static readonly G6DOF_JOINT_ANGULAR_LOWER_LIMIT = 10
        
        /** The minimum rotation in positive direction to break loose and rotate around the axes. */
        static readonly G6DOF_JOINT_ANGULAR_UPPER_LIMIT = 11
        
        /** A factor that gets multiplied onto all rotations across the axes. */
        static readonly G6DOF_JOINT_ANGULAR_LIMIT_SOFTNESS = 12
        
        /** The amount of rotational damping across the axes. The lower, the more damping occurs. */
        static readonly G6DOF_JOINT_ANGULAR_DAMPING = 13
        
        /** The amount of rotational restitution across the axes. The lower, the more restitution occurs. */
        static readonly G6DOF_JOINT_ANGULAR_RESTITUTION = 14
        
        /** The maximum amount of force that can occur, when rotating around the axes. */
        static readonly G6DOF_JOINT_ANGULAR_FORCE_LIMIT = 15
        
        /** When correcting the crossing of limits in rotation across the axes, this error tolerance factor defines how much the correction gets slowed down. The lower, the slower. */
        static readonly G6DOF_JOINT_ANGULAR_ERP = 16
        
        /** Target speed for the motor at the axes. */
        static readonly G6DOF_JOINT_ANGULAR_MOTOR_TARGET_VELOCITY = 17
        
        /** Maximum acceleration for the motor at the axes. */
        static readonly G6DOF_JOINT_ANGULAR_MOTOR_FORCE_LIMIT = 18
        static readonly G6DOF_JOINT_ANGULAR_SPRING_STIFFNESS = 19
        static readonly G6DOF_JOINT_ANGULAR_SPRING_DAMPING = 20
        static readonly G6DOF_JOINT_ANGULAR_SPRING_EQUILIBRIUM_POINT = 21
        
        /** Represents the size of the [enum G6DOFJointAxisParam] enum. */
        static readonly G6DOF_JOINT_MAX = 22
        
        /** If set, linear motion is possible within the given limits. */
        static readonly G6DOF_JOINT_FLAG_ENABLE_LINEAR_LIMIT = 0
        
        /** If set, rotational motion is possible. */
        static readonly G6DOF_JOINT_FLAG_ENABLE_ANGULAR_LIMIT = 1
        static readonly G6DOF_JOINT_FLAG_ENABLE_ANGULAR_SPRING = 2
        static readonly G6DOF_JOINT_FLAG_ENABLE_LINEAR_SPRING = 3
        
        /** If set, there is a rotational motor across these axes. */
        static readonly G6DOF_JOINT_FLAG_ENABLE_MOTOR = 4
        
        /** If set, there is a linear motor on this axis that targets a specific velocity. */
        static readonly G6DOF_JOINT_FLAG_ENABLE_LINEAR_MOTOR = 5
        
        /** Represents the size of the [enum G6DOFJointAxisFlag] enum. */
        static readonly G6DOF_JOINT_FLAG_MAX = 6
        
        /** The [Shape3D] is a [WorldBoundaryShape3D]. */
        static readonly SHAPE_WORLD_BOUNDARY = 0
        
        /** The [Shape3D] is a [SeparationRayShape3D]. */
        static readonly SHAPE_SEPARATION_RAY = 1
        
        /** The [Shape3D] is a [SphereShape3D]. */
        static readonly SHAPE_SPHERE = 2
        
        /** The [Shape3D] is a [BoxShape3D]. */
        static readonly SHAPE_BOX = 3
        
        /** The [Shape3D] is a [CapsuleShape3D]. */
        static readonly SHAPE_CAPSULE = 4
        
        /** The [Shape3D] is a [CylinderShape3D]. */
        static readonly SHAPE_CYLINDER = 5
        
        /** The [Shape3D] is a [ConvexPolygonShape3D]. */
        static readonly SHAPE_CONVEX_POLYGON = 6
        
        /** The [Shape3D] is a [ConcavePolygonShape3D]. */
        static readonly SHAPE_CONCAVE_POLYGON = 7
        
        /** The [Shape3D] is a [HeightMapShape3D]. */
        static readonly SHAPE_HEIGHTMAP = 8
        
        /** The [Shape3D] is used internally for a soft body. Any attempt to create this kind of shape results in an error. */
        static readonly SHAPE_SOFT_BODY = 9
        
        /** This constant is used internally by the engine. Any attempt to create this kind of shape results in an error. */
        static readonly SHAPE_CUSTOM = 10
        
        /** Constant to set/get gravity override mode in an area. See [enum AreaSpaceOverrideMode] for possible values. */
        static readonly AREA_PARAM_GRAVITY_OVERRIDE_MODE = 0
        
        /** Constant to set/get gravity strength in an area. */
        static readonly AREA_PARAM_GRAVITY = 1
        
        /** Constant to set/get gravity vector/center in an area. */
        static readonly AREA_PARAM_GRAVITY_VECTOR = 2
        
        /** Constant to set/get whether the gravity vector of an area is a direction, or a center point. */
        static readonly AREA_PARAM_GRAVITY_IS_POINT = 3
        
        /** Constant to set/get the distance at which the gravity strength is equal to the gravity controlled by [constant AREA_PARAM_GRAVITY]. For example, on a planet 100 meters in radius with a surface gravity of 4.0 m/s², set the gravity to 4.0 and the unit distance to 100.0. The gravity will have falloff according to the inverse square law, so in the example, at 200 meters from the center the gravity will be 1.0 m/s² (twice the distance, 1/4th the gravity), at 50 meters it will be 16.0 m/s² (half the distance, 4x the gravity), and so on.  
         *  The above is true only when the unit distance is a positive number. When this is set to 0.0, the gravity will be constant regardless of distance.  
         */
        static readonly AREA_PARAM_GRAVITY_POINT_UNIT_DISTANCE = 4
        
        /** Constant to set/get linear damping override mode in an area. See [enum AreaSpaceOverrideMode] for possible values. */
        static readonly AREA_PARAM_LINEAR_DAMP_OVERRIDE_MODE = 5
        
        /** Constant to set/get the linear damping factor of an area. */
        static readonly AREA_PARAM_LINEAR_DAMP = 6
        
        /** Constant to set/get angular damping override mode in an area. See [enum AreaSpaceOverrideMode] for possible values. */
        static readonly AREA_PARAM_ANGULAR_DAMP_OVERRIDE_MODE = 7
        
        /** Constant to set/get the angular damping factor of an area. */
        static readonly AREA_PARAM_ANGULAR_DAMP = 8
        
        /** Constant to set/get the priority (order of processing) of an area. */
        static readonly AREA_PARAM_PRIORITY = 9
        
        /** Constant to set/get the magnitude of area-specific wind force. This wind force only applies to [SoftBody3D] nodes. Other physics bodies are currently not affected by wind. */
        static readonly AREA_PARAM_WIND_FORCE_MAGNITUDE = 10
        
        /** Constant to set/get the 3D vector that specifies the origin from which an area-specific wind blows. */
        static readonly AREA_PARAM_WIND_SOURCE = 11
        
        /** Constant to set/get the 3D vector that specifies the direction in which an area-specific wind blows. */
        static readonly AREA_PARAM_WIND_DIRECTION = 12
        
        /** Constant to set/get the exponential rate at which wind force decreases with distance from its origin. */
        static readonly AREA_PARAM_WIND_ATTENUATION_FACTOR = 13
        
        /** This area does not affect gravity/damp. These are generally areas that exist only to detect collisions, and objects entering or exiting them. */
        static readonly AREA_SPACE_OVERRIDE_DISABLED = 0
        
        /** This area adds its gravity/damp values to whatever has been calculated so far. This way, many overlapping areas can combine their physics to make interesting effects. */
        static readonly AREA_SPACE_OVERRIDE_COMBINE = 1
        
        /** This area adds its gravity/damp values to whatever has been calculated so far. Then stops taking into account the rest of the areas, even the default one. */
        static readonly AREA_SPACE_OVERRIDE_COMBINE_REPLACE = 2
        
        /** This area replaces any gravity/damp, even the default one, and stops taking into account the rest of the areas. */
        static readonly AREA_SPACE_OVERRIDE_REPLACE = 3
        
        /** This area replaces any gravity/damp calculated so far, but keeps calculating the rest of the areas, down to the default one. */
        static readonly AREA_SPACE_OVERRIDE_REPLACE_COMBINE = 4
        
        /** Constant for static bodies. In this mode, a body can be only moved by user code and doesn't collide with other bodies along its path when moved. */
        static readonly BODY_MODE_STATIC = 0
        
        /** Constant for kinematic bodies. In this mode, a body can be only moved by user code and collides with other bodies along its path. */
        static readonly BODY_MODE_KINEMATIC = 1
        
        /** Constant for rigid bodies. In this mode, a body can be pushed by other bodies and has forces applied. */
        static readonly BODY_MODE_RIGID = 2
        
        /** Constant for linear rigid bodies. In this mode, a body can not rotate, and only its linear velocity is affected by external forces. */
        static readonly BODY_MODE_RIGID_LINEAR = 3
        
        /** Constant to set/get a body's bounce factor. */
        static readonly BODY_PARAM_BOUNCE = 0
        
        /** Constant to set/get a body's friction. */
        static readonly BODY_PARAM_FRICTION = 1
        
        /** Constant to set/get a body's mass. */
        static readonly BODY_PARAM_MASS = 2
        
        /** Constant to set/get a body's inertia. */
        static readonly BODY_PARAM_INERTIA = 3
        
        /** Constant to set/get a body's center of mass position in the body's local coordinate system. */
        static readonly BODY_PARAM_CENTER_OF_MASS = 4
        
        /** Constant to set/get a body's gravity multiplier. */
        static readonly BODY_PARAM_GRAVITY_SCALE = 5
        
        /** Constant to set/get a body's linear damping mode. See [enum BodyDampMode] for possible values. */
        static readonly BODY_PARAM_LINEAR_DAMP_MODE = 6
        
        /** Constant to set/get a body's angular damping mode. See [enum BodyDampMode] for possible values. */
        static readonly BODY_PARAM_ANGULAR_DAMP_MODE = 7
        
        /** Constant to set/get a body's linear damping factor. */
        static readonly BODY_PARAM_LINEAR_DAMP = 8
        
        /** Constant to set/get a body's angular damping factor. */
        static readonly BODY_PARAM_ANGULAR_DAMP = 9
        
        /** Represents the size of the [enum BodyParameter] enum. */
        static readonly BODY_PARAM_MAX = 10
        
        /** The body's damping value is added to any value set in areas or the default value. */
        static readonly BODY_DAMP_MODE_COMBINE = 0
        
        /** The body's damping value replaces any value set in areas or the default value. */
        static readonly BODY_DAMP_MODE_REPLACE = 1
        
        /** Constant to set/get the current transform matrix of the body. */
        static readonly BODY_STATE_TRANSFORM = 0
        
        /** Constant to set/get the current linear velocity of the body. */
        static readonly BODY_STATE_LINEAR_VELOCITY = 1
        
        /** Constant to set/get the current angular velocity of the body. */
        static readonly BODY_STATE_ANGULAR_VELOCITY = 2
        
        /** Constant to sleep/wake up a body, or to get whether it is sleeping. */
        static readonly BODY_STATE_SLEEPING = 3
        
        /** Constant to set/get whether the body can sleep. */
        static readonly BODY_STATE_CAN_SLEEP = 4
        
        /** The value of the first parameter and area callback function receives, when an object enters one of its shapes. */
        static readonly AREA_BODY_ADDED = 0
        
        /** The value of the first parameter and area callback function receives, when an object exits one of its shapes. */
        static readonly AREA_BODY_REMOVED = 1
        
        /** Constant to get the number of objects that are not sleeping. */
        static readonly INFO_ACTIVE_OBJECTS = 0
        
        /** Constant to get the number of possible collisions. */
        static readonly INFO_COLLISION_PAIRS = 1
        
        /** Constant to get the number of space regions where a collision could occur. */
        static readonly INFO_ISLAND_COUNT = 2
        
        /** Constant to set/get the maximum distance a pair of bodies has to move before their collision status has to be recalculated. */
        static readonly SPACE_PARAM_CONTACT_RECYCLE_RADIUS = 0
        
        /** Constant to set/get the maximum distance a shape can be from another before they are considered separated and the contact is discarded. */
        static readonly SPACE_PARAM_CONTACT_MAX_SEPARATION = 1
        
        /** Constant to set/get the maximum distance a shape can penetrate another shape before it is considered a collision. */
        static readonly SPACE_PARAM_CONTACT_MAX_ALLOWED_PENETRATION = 2
        
        /** Constant to set/get the default solver bias for all physics contacts. A solver bias is a factor controlling how much two objects "rebound", after overlapping, to avoid leaving them in that state because of numerical imprecision. */
        static readonly SPACE_PARAM_CONTACT_DEFAULT_BIAS = 3
        
        /** Constant to set/get the threshold linear velocity of activity. A body marked as potentially inactive for both linear and angular velocity will be put to sleep after the time given. */
        static readonly SPACE_PARAM_BODY_LINEAR_VELOCITY_SLEEP_THRESHOLD = 4
        
        /** Constant to set/get the threshold angular velocity of activity. A body marked as potentially inactive for both linear and angular velocity will be put to sleep after the time given. */
        static readonly SPACE_PARAM_BODY_ANGULAR_VELOCITY_SLEEP_THRESHOLD = 5
        
        /** Constant to set/get the maximum time of activity. A body marked as potentially inactive for both linear and angular velocity will be put to sleep after this time. */
        static readonly SPACE_PARAM_BODY_TIME_TO_SLEEP = 6
        
        /** Constant to set/get the number of solver iterations for contacts and constraints. The greater the number of iterations, the more accurate the collisions and constraints will be. However, a greater number of iterations requires more CPU power, which can decrease performance. */
        static readonly SPACE_PARAM_SOLVER_ITERATIONS = 7
        static readonly BODY_AXIS_LINEAR_X = 1
        static readonly BODY_AXIS_LINEAR_Y = 2
        static readonly BODY_AXIS_LINEAR_Z = 4
        static readonly BODY_AXIS_ANGULAR_X = 8
        static readonly BODY_AXIS_ANGULAR_Y = 16
        static readonly BODY_AXIS_ANGULAR_Z = 32
        static worldBoundaryShapeCreate(): Rid
        static separationRayShapeCreate(): Rid
        static sphereShapeCreate(): Rid
        static boxShapeCreate(): Rid
        static capsuleShapeCreate(): Rid
        static cylinderShapeCreate(): Rid
        static convexPolygonShapeCreate(): Rid
        static concavePolygonShapeCreate(): Rid
        static heightmapShapeCreate(): Rid
        static customShapeCreate(): Rid
        
        /** Sets the shape data that defines its shape and size. The data to be passed depends on the kind of shape created [method shape_get_type]. */
        static shapeSetData(shape: Rid, data: any): void
        
        /** Sets the collision margin for the shape.  
         *      
         *  **Note:** This is not used in Godot Physics.  
         */
        static shapeSetMargin(shape: Rid, margin: float64): void
        
        /** Returns the type of shape (see [enum ShapeType] constants). */
        static shapeGetType(shape: Rid): PhysicsServer3D.ShapeType
        
        /** Returns the shape data. */
        static shapeGetData(shape: Rid): any
        
        /** Returns the collision margin for the shape.  
         *      
         *  **Note:** This is not used in Godot Physics, so will always return `0`.  
         */
        static shapeGetMargin(shape: Rid): float64
        
        /** Creates a space. A space is a collection of parameters for the physics engine that can be assigned to an area or a body. It can be assigned to an area with [method area_set_space], or to a body with [method body_set_space]. */
        static spaceCreate(): Rid
        
        /** Marks a space as active. It will not have an effect, unless it is assigned to an area or body. */
        static spaceSetActive(space: Rid, active: boolean): void
        
        /** Returns whether the space is active. */
        static spaceIsActive(space: Rid): boolean
        
        /** Sets the value for a space parameter. A list of available parameters is on the [enum SpaceParameter] constants. */
        static spaceSetParam(space: Rid, param: PhysicsServer3D.SpaceParameter, value: float64): void
        
        /** Returns the value of a space parameter. */
        static spaceGetParam(space: Rid, param: PhysicsServer3D.SpaceParameter): float64
        
        /** Returns the state of a space, a [PhysicsDirectSpaceState3D]. This object can be used to make collision/intersection queries. */
        static spaceGetDirectState(space: Rid): null | PhysicsDirectSpaceState3D
        
        /** Creates a 3D area object in the physics server, and returns the [RID] that identifies it. The default settings for the created area include a collision layer and mask set to `1`, and `monitorable` set to `false`.  
         *  Use [method area_add_shape] to add shapes to it, use [method area_set_transform] to set its transform, and use [method area_set_space] to add the area to a space. If you want the area to be detectable use [method area_set_monitorable].  
         */
        static areaCreate(): Rid
        
        /** Assigns a space to the area. */
        static areaSetSpace(area: Rid, space: Rid): void
        
        /** Returns the space assigned to the area. */
        static areaGetSpace(area: Rid): Rid
        
        /** Adds a shape to the area, along with a transform matrix. Shapes are usually referenced by their index, so you should track which shape has a given index. */
        static areaAddShape(area: Rid, shape: Rid, transform?: Transform3D /* = new Transform3D() */, disabled?: boolean /* = false */): void
        
        /** Substitutes a given area shape by another. The old shape is selected by its index, the new one by its [RID]. */
        static areaSetShape(area: Rid, shapeIdx: int64, shape: Rid): void
        
        /** Sets the transform matrix for an area shape. */
        static areaSetShapeTransform(area: Rid, shapeIdx: int64, transform: Transform3D): void
        static areaSetShapeDisabled(area: Rid, shapeIdx: int64, disabled: boolean): void
        
        /** Returns the number of shapes assigned to an area. */
        static areaGetShapeCount(area: Rid): int64
        
        /** Returns the [RID] of the nth shape of an area. */
        static areaGetShape(area: Rid, shapeIdx: int64): Rid
        
        /** Returns the transform matrix of a shape within an area. */
        static areaGetShapeTransform(area: Rid, shapeIdx: int64): Transform3D
        
        /** Removes a shape from an area. It does not delete the shape, so it can be reassigned later. */
        static areaRemoveShape(area: Rid, shapeIdx: int64): void
        
        /** Removes all shapes from an area. It does not delete the shapes, so they can be reassigned later. */
        static areaClearShapes(area: Rid): void
        
        /** Assigns the area to one or many physics layers. */
        static areaSetCollisionLayer(area: Rid, layer: int64): void
        
        /** Returns the physics layer or layers an area belongs to. */
        static areaGetCollisionLayer(area: Rid): int64
        
        /** Sets which physics layers the area will monitor. */
        static areaSetCollisionMask(area: Rid, mask: int64): void
        
        /** Returns the physics layer or layers an area can contact with. */
        static areaGetCollisionMask(area: Rid): int64
        
        /** Sets the value for an area parameter. A list of available parameters is on the [enum AreaParameter] constants. */
        static areaSetParam(area: Rid, param: PhysicsServer3D.AreaParameter, value: any): void
        
        /** Sets the transform matrix for an area. */
        static areaSetTransform(area: Rid, transform: Transform3D): void
        
        /** Returns an area parameter value. A list of available parameters is on the [enum AreaParameter] constants. */
        static areaGetParam(area: Rid, param: PhysicsServer3D.AreaParameter): any
        
        /** Returns the transform matrix for an area. */
        static areaGetTransform(area: Rid): Transform3D
        
        /** Assigns the area to a descendant of [Object], so it can exist in the node tree. */
        static areaAttachObjectInstanceId(area: Rid, id: int64): void
        
        /** Gets the instance ID of the object the area is assigned to. */
        static areaGetObjectInstanceId(area: Rid): int64
        
        /** Sets the area's body monitor callback. This callback will be called when any other (shape of a) body enters or exits (a shape of) the given area, and must take the following five parameters:  
         *  1. an integer `status`: either [constant AREA_BODY_ADDED] or [constant AREA_BODY_REMOVED] depending on whether the other body shape entered or exited the area,  
         *  2. an [RID] `body_rid`: the [RID] of the body that entered or exited the area,  
         *  3. an integer `instance_id`: the `ObjectID` attached to the body,  
         *  4. an integer `body_shape_idx`: the index of the shape of the body that entered or exited the area,  
         *  5. an integer `self_shape_idx`: the index of the shape of the area where the body entered or exited.  
         *  By counting (or keeping track of) the shapes that enter and exit, it can be determined if a body (with all its shapes) is entering for the first time or exiting for the last time.  
         */
        static areaSetMonitorCallback(area: Rid, callback: Callable): void
        
        /** Sets the area's area monitor callback. This callback will be called when any other (shape of an) area enters or exits (a shape of) the given area, and must take the following five parameters:  
         *  1. an integer `status`: either [constant AREA_BODY_ADDED] or [constant AREA_BODY_REMOVED] depending on whether the other area's shape entered or exited the area,  
         *  2. an [RID] `area_rid`: the [RID] of the other area that entered or exited the area,  
         *  3. an integer `instance_id`: the `ObjectID` attached to the other area,  
         *  4. an integer `area_shape_idx`: the index of the shape of the other area that entered or exited the area,  
         *  5. an integer `self_shape_idx`: the index of the shape of the area where the other area entered or exited.  
         *  By counting (or keeping track of) the shapes that enter and exit, it can be determined if an area (with all its shapes) is entering for the first time or exiting for the last time.  
         */
        static areaSetAreaMonitorCallback(area: Rid, callback: Callable): void
        static areaSetMonitorable(area: Rid, monitorable: boolean): void
        
        /** Sets object pickable with rays. */
        static areaSetRayPickable(area: Rid, enable: boolean): void
        
        /** Creates a 3D body object in the physics server, and returns the [RID] that identifies it. The default settings for the created area include a collision layer and mask set to `1`, and body mode set to [constant BODY_MODE_RIGID].  
         *  Use [method body_add_shape] to add shapes to it, use [method body_set_state] to set its transform, and use [method body_set_space] to add the body to a space.  
         */
        static bodyCreate(): Rid
        
        /** Assigns a space to the body (see [method space_create]). */
        static bodySetSpace(body: Rid, space: Rid): void
        
        /** Returns the [RID] of the space assigned to a body. */
        static bodyGetSpace(body: Rid): Rid
        
        /** Sets the body mode, from one of the [enum BodyMode] constants. */
        static bodySetMode(body: Rid, mode: PhysicsServer3D.BodyMode): void
        
        /** Returns the body mode. */
        static bodyGetMode(body: Rid): PhysicsServer3D.BodyMode
        
        /** Sets the physics layer or layers a body belongs to. */
        static bodySetCollisionLayer(body: Rid, layer: int64): void
        
        /** Returns the physics layer or layers a body belongs to. */
        static bodyGetCollisionLayer(body: Rid): int64
        
        /** Sets the physics layer or layers a body can collide with. */
        static bodySetCollisionMask(body: Rid, mask: int64): void
        
        /** Returns the physics layer or layers a body can collide with. */
        static bodyGetCollisionMask(body: Rid): int64
        
        /** Sets the body's collision priority. */
        static bodySetCollisionPriority(body: Rid, priority: float64): void
        
        /** Returns the body's collision priority. */
        static bodyGetCollisionPriority(body: Rid): float64
        
        /** Adds a shape to the body, along with a transform matrix. Shapes are usually referenced by their index, so you should track which shape has a given index. */
        static bodyAddShape(body: Rid, shape: Rid, transform?: Transform3D /* = new Transform3D() */, disabled?: boolean /* = false */): void
        
        /** Substitutes a given body shape by another. The old shape is selected by its index, the new one by its [RID]. */
        static bodySetShape(body: Rid, shapeIdx: int64, shape: Rid): void
        
        /** Sets the transform matrix for a body shape. */
        static bodySetShapeTransform(body: Rid, shapeIdx: int64, transform: Transform3D): void
        static bodySetShapeDisabled(body: Rid, shapeIdx: int64, disabled: boolean): void
        
        /** Returns the number of shapes assigned to a body. */
        static bodyGetShapeCount(body: Rid): int64
        
        /** Returns the [RID] of the nth shape of a body. */
        static bodyGetShape(body: Rid, shapeIdx: int64): Rid
        
        /** Returns the transform matrix of a body shape. */
        static bodyGetShapeTransform(body: Rid, shapeIdx: int64): Transform3D
        
        /** Removes a shape from a body. The shape is not deleted, so it can be reused afterwards. */
        static bodyRemoveShape(body: Rid, shapeIdx: int64): void
        
        /** Removes all shapes from a body. */
        static bodyClearShapes(body: Rid): void
        
        /** Assigns the area to a descendant of [Object], so it can exist in the node tree. */
        static bodyAttachObjectInstanceId(body: Rid, id: int64): void
        
        /** Gets the instance ID of the object the area is assigned to. */
        static bodyGetObjectInstanceId(body: Rid): int64
        
        /** If `true`, the continuous collision detection mode is enabled.  
         *  Continuous collision detection tries to predict where a moving body will collide, instead of moving it and correcting its movement if it collided.  
         */
        static bodySetEnableContinuousCollisionDetection(body: Rid, enable: boolean): void
        
        /** If `true`, the continuous collision detection mode is enabled. */
        static bodyIsContinuousCollisionDetectionEnabled(body: Rid): boolean
        
        /** Sets a body parameter. A list of available parameters is on the [enum BodyParameter] constants. */
        static bodySetParam(body: Rid, param: PhysicsServer3D.BodyParameter, value: any): void
        
        /** Returns the value of a body parameter. A list of available parameters is on the [enum BodyParameter] constants. */
        static bodyGetParam(body: Rid, param: PhysicsServer3D.BodyParameter): any
        
        /** Restores the default inertia and center of mass based on shapes to cancel any custom values previously set using [method body_set_param]. */
        static bodyResetMassProperties(body: Rid): void
        
        /** Sets a body state (see [enum BodyState] constants). */
        static bodySetState(body: Rid, state: PhysicsServer3D.BodyState, value: any): void
        
        /** Returns a body state. */
        static bodyGetState(body: Rid, state: PhysicsServer3D.BodyState): any
        
        /** Applies a directional impulse without affecting rotation.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         *  This is equivalent to using [method body_apply_impulse] at the body's center of mass.  
         */
        static bodyApplyCentralImpulse(body: Rid, impulse: Vector3): void
        
        /** Applies a positioned impulse to the body.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        static bodyApplyImpulse(body: Rid, impulse: Vector3, position?: Vector3 /* = new Vector3(0, 0, 0) */): void
        
        /** Applies a rotational impulse to the body without affecting the position.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         */
        static bodyApplyTorqueImpulse(body: Rid, impulse: Vector3): void
        
        /** Applies a directional force without affecting rotation. A force is time dependent and meant to be applied every physics update.  
         *  This is equivalent to using [method body_apply_force] at the body's center of mass.  
         */
        static bodyApplyCentralForce(body: Rid, force: Vector3): void
        
        /** Applies a positioned force to the body. A force is time dependent and meant to be applied every physics update.  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        static bodyApplyForce(body: Rid, force: Vector3, position?: Vector3 /* = new Vector3(0, 0, 0) */): void
        
        /** Applies a rotational force without affecting position. A force is time dependent and meant to be applied every physics update. */
        static bodyApplyTorque(body: Rid, torque: Vector3): void
        
        /** Adds a constant directional force without affecting rotation that keeps being applied over time until cleared with `body_set_constant_force(body, Vector3(0, 0, 0))`.  
         *  This is equivalent to using [method body_add_constant_force] at the body's center of mass.  
         */
        static bodyAddConstantCentralForce(body: Rid, force: Vector3): void
        
        /** Adds a constant positioned force to the body that keeps being applied over time until cleared with `body_set_constant_force(body, Vector3(0, 0, 0))`.  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        static bodyAddConstantForce(body: Rid, force: Vector3, position?: Vector3 /* = new Vector3(0, 0, 0) */): void
        
        /** Adds a constant rotational force without affecting position that keeps being applied over time until cleared with `body_set_constant_torque(body, Vector3(0, 0, 0))`. */
        static bodyAddConstantTorque(body: Rid, torque: Vector3): void
        
        /** Sets the body's total constant positional forces applied during each physics update.  
         *  See [method body_add_constant_force] and [method body_add_constant_central_force].  
         */
        static bodySetConstantForce(body: Rid, force: Vector3): void
        
        /** Returns the body's total constant positional forces applied during each physics update.  
         *  See [method body_add_constant_force] and [method body_add_constant_central_force].  
         */
        static bodyGetConstantForce(body: Rid): Vector3
        
        /** Sets the body's total constant rotational forces applied during each physics update.  
         *  See [method body_add_constant_torque].  
         */
        static bodySetConstantTorque(body: Rid, torque: Vector3): void
        
        /** Returns the body's total constant rotational forces applied during each physics update.  
         *  See [method body_add_constant_torque].  
         */
        static bodyGetConstantTorque(body: Rid): Vector3
        
        /** Sets an axis velocity. The velocity in the given vector axis will be set as the given vector length. This is useful for jumping behavior. */
        static bodySetAxisVelocity(body: Rid, axisVelocity: Vector3): void
        static bodySetAxisLock(body: Rid, axis: PhysicsServer3D.BodyAxis, lock: boolean): void
        static bodyIsAxisLocked(body: Rid, axis: PhysicsServer3D.BodyAxis): boolean
        
        /** Adds a body to the list of bodies exempt from collisions. */
        static bodyAddCollisionException(body: Rid, exceptedBody: Rid): void
        
        /** Removes a body from the list of bodies exempt from collisions.  
         *  Continuous collision detection tries to predict where a moving body will collide, instead of moving it and correcting its movement if it collided.  
         */
        static bodyRemoveCollisionException(body: Rid, exceptedBody: Rid): void
        
        /** Sets the maximum contacts to report. Bodies can keep a log of the contacts with other bodies. This is enabled by setting the maximum number of contacts reported to a number greater than 0. */
        static bodySetMaxContactsReported(body: Rid, amount: int64): void
        
        /** Returns the maximum contacts that can be reported. See [method body_set_max_contacts_reported]. */
        static bodyGetMaxContactsReported(body: Rid): int64
        
        /** Sets whether the body omits the standard force integration. If [param enable] is `true`, the body will not automatically use applied forces, torques, and damping to update the body's linear and angular velocity. In this case, [method body_set_force_integration_callback] can be used to manually update the linear and angular velocity instead.  
         *  This method is called when the property [member RigidBody3D.custom_integrator] is set.  
         */
        static bodySetOmitForceIntegration(body: Rid, enable: boolean): void
        
        /** Returns `true` if the body is omitting the standard force integration. See [method body_set_omit_force_integration]. */
        static bodyIsOmittingForceIntegration(body: Rid): boolean
        
        /** Sets the body's state synchronization callback function to [param callable]. Use an empty [Callable] ([code skip-lint]Callable()`) to clear the callback.  
         *  The function [param callable] will be called every physics frame, assuming that the body was active during the previous physics tick, and can be used to fetch the latest state from the physics server.  
         *  The function [param callable] must take the following parameters:  
         *  1. `state`: a [PhysicsDirectBodyState3D], used to retrieve the body's state.  
         */
        static bodySetStateSyncCallback(body: Rid, callable: Callable): void
        
        /** Sets the body's custom force integration callback function to [param callable]. Use an empty [Callable] ([code skip-lint]Callable()`) to clear the custom callback.  
         *  The function [param callable] will be called every physics tick, before the standard force integration (see [method body_set_omit_force_integration]). It can be used for example to update the body's linear and angular velocity based on contact with other bodies.  
         *  If [param userdata] is not `null`, the function [param callable] must take the following two parameters:  
         *  1. `state`: a [PhysicsDirectBodyState3D], used to retrieve and modify the body's state,  
         *  2. [code skip-lint]userdata`: a [Variant]; its value will be the [param userdata] passed into this method.  
         *  If [param userdata] is `null`, then [param callable] must take only the `state` parameter.  
         */
        static bodySetForceIntegrationCallback(body: Rid, callable: Callable, userdata?: any /* = <any> {} */): void
        
        /** Sets the body pickable with rays if [param enable] is set. */
        static bodySetRayPickable(body: Rid, enable: boolean): void
        
        /** Returns `true` if a collision would result from moving along a motion vector from a given point in space. [PhysicsTestMotionParameters3D] is passed to set motion parameters. [PhysicsTestMotionResult3D] can be passed to return additional information. */
        static bodyTestMotion(body: Rid, parameters: PhysicsTestMotionParameters3D, result?: PhysicsTestMotionResult3D /* = undefined */): boolean
        
        /** Returns the [PhysicsDirectBodyState3D] of the body. Returns `null` if the body is destroyed or removed from the physics space. */
        static bodyGetDirectState(body: Rid): null | PhysicsDirectBodyState3D
        
        /** Creates a new soft body and returns its internal [RID]. */
        static softBodyCreate(): Rid
        
        /** Requests that the physics server updates the rendering server with the latest positions of the given soft body's points through the [param rendering_server_handler] interface. */
        static softBodyUpdateRenderingServer(body: Rid, renderingServerHandler: PhysicsServer3DRenderingServerHandler): void
        
        /** Assigns a space to the given soft body (see [method space_create]). */
        static softBodySetSpace(body: Rid, space: Rid): void
        
        /** Returns the [RID] of the space assigned to the given soft body. */
        static softBodyGetSpace(body: Rid): Rid
        
        /** Sets the mesh of the given soft body. */
        static softBodySetMesh(body: Rid, mesh: Rid): void
        
        /** Returns the bounds of the given soft body in global coordinates. */
        static softBodyGetBounds(body: Rid): Aabb
        
        /** Sets the physics layer or layers the given soft body belongs to. */
        static softBodySetCollisionLayer(body: Rid, layer: int64): void
        
        /** Returns the physics layer or layers that the given soft body belongs to. */
        static softBodyGetCollisionLayer(body: Rid): int64
        
        /** Sets the physics layer or layers the given soft body can collide with. */
        static softBodySetCollisionMask(body: Rid, mask: int64): void
        
        /** Returns the physics layer or layers that the given soft body can collide with. */
        static softBodyGetCollisionMask(body: Rid): int64
        
        /** Adds the given body to the list of bodies exempt from collisions. */
        static softBodyAddCollisionException(body: Rid, bodyB: Rid): void
        
        /** Removes the given body from the list of bodies exempt from collisions. */
        static softBodyRemoveCollisionException(body: Rid, bodyB: Rid): void
        
        /** Sets the given body state for the given body (see [enum BodyState] constants).  
         *      
         *  **Note:** Godot's default physics implementation does not support [constant BODY_STATE_LINEAR_VELOCITY], [constant BODY_STATE_ANGULAR_VELOCITY], [constant BODY_STATE_SLEEPING], or [constant BODY_STATE_CAN_SLEEP].  
         */
        static softBodySetState(body: Rid, state: PhysicsServer3D.BodyState, variant: any): void
        
        /** Returns the given soft body state (see [enum BodyState] constants).  
         *      
         *  **Note:** Godot's default physics implementation does not support [constant BODY_STATE_LINEAR_VELOCITY], [constant BODY_STATE_ANGULAR_VELOCITY], [constant BODY_STATE_SLEEPING], or [constant BODY_STATE_CAN_SLEEP].  
         */
        static softBodyGetState(body: Rid, state: PhysicsServer3D.BodyState): any
        
        /** Sets the global transform of the given soft body. */
        static softBodySetTransform(body: Rid, transform: Transform3D): void
        
        /** Sets whether the given soft body will be pickable when using object picking. */
        static softBodySetRayPickable(body: Rid, enable: boolean): void
        
        /** Sets the simulation precision of the given soft body. Increasing this value will improve the resulting simulation, but can affect performance. Use with care. */
        static softBodySetSimulationPrecision(body: Rid, simulationPrecision: int64): void
        
        /** Returns the simulation precision of the given soft body. */
        static softBodyGetSimulationPrecision(body: Rid): int64
        
        /** Sets the total mass for the given soft body. */
        static softBodySetTotalMass(body: Rid, totalMass: float64): void
        
        /** Returns the total mass assigned to the given soft body. */
        static softBodyGetTotalMass(body: Rid): float64
        
        /** Sets the linear stiffness of the given soft body. Higher values will result in a stiffer body, while lower values will increase the body's ability to bend. The value can be between `0.0` and `1.0` (inclusive). */
        static softBodySetLinearStiffness(body: Rid, stiffness: float64): void
        
        /** Returns the linear stiffness of the given soft body. */
        static softBodyGetLinearStiffness(body: Rid): float64
        
        /** Sets the pressure coefficient of the given soft body. Simulates pressure build-up from inside this body. Higher values increase the strength of this effect. */
        static softBodySetPressureCoefficient(body: Rid, pressureCoefficient: float64): void
        
        /** Returns the pressure coefficient of the given soft body. */
        static softBodyGetPressureCoefficient(body: Rid): float64
        
        /** Sets the damping coefficient of the given soft body. Higher values will slow down the body more noticeably when forces are applied. */
        static softBodySetDampingCoefficient(body: Rid, dampingCoefficient: float64): void
        
        /** Returns the damping coefficient of the given soft body. */
        static softBodyGetDampingCoefficient(body: Rid): float64
        
        /** Sets the drag coefficient of the given soft body. Higher values increase this body's air resistance.  
         *      
         *  **Note:** This value is currently unused by Godot's default physics implementation.  
         */
        static softBodySetDragCoefficient(body: Rid, dragCoefficient: float64): void
        
        /** Returns the drag coefficient of the given soft body. */
        static softBodyGetDragCoefficient(body: Rid): float64
        
        /** Moves the given soft body point to a position in global coordinates. */
        static softBodyMovePoint(body: Rid, pointIndex: int64, globalPosition: Vector3): void
        
        /** Returns the current position of the given soft body point in global coordinates. */
        static softBodyGetPointGlobalPosition(body: Rid, pointIndex: int64): Vector3
        
        /** Unpins all points of the given soft body. */
        static softBodyRemoveAllPinnedPoints(body: Rid): void
        
        /** Pins or unpins the given soft body point based on the value of [param pin].  
         *      
         *  **Note:** Pinning a point effectively makes it kinematic, preventing it from being affected by forces, but you can still move it using [method soft_body_move_point].  
         */
        static softBodyPinPoint(body: Rid, pointIndex: int64, pin: boolean): void
        
        /** Returns whether the given soft body point is pinned. */
        static softBodyIsPointPinned(body: Rid, pointIndex: int64): boolean
        static jointCreate(): Rid
        static jointClear(joint: Rid): void
        static jointMakePin(joint: Rid, bodyA: Rid, localA: Vector3, bodyB: Rid, localB: Vector3): void
        
        /** Sets a pin_joint parameter (see [enum PinJointParam] constants). */
        static pinJointSetParam(joint: Rid, param: PhysicsServer3D.PinJointParam, value: float64): void
        
        /** Gets a pin_joint parameter (see [enum PinJointParam] constants). */
        static pinJointGetParam(joint: Rid, param: PhysicsServer3D.PinJointParam): float64
        
        /** Sets position of the joint in the local space of body a of the joint. */
        static pinJointSetLocalA(joint: Rid, localA: Vector3): void
        
        /** Returns position of the joint in the local space of body a of the joint. */
        static pinJointGetLocalA(joint: Rid): Vector3
        
        /** Sets position of the joint in the local space of body b of the joint. */
        static pinJointSetLocalB(joint: Rid, localB: Vector3): void
        
        /** Returns position of the joint in the local space of body b of the joint. */
        static pinJointGetLocalB(joint: Rid): Vector3
        static jointMakeHinge(joint: Rid, bodyA: Rid, hingeA: Transform3D, bodyB: Rid, hingeB: Transform3D): void
        
        /** Sets a hinge_joint parameter (see [enum HingeJointParam] constants). */
        static hingeJointSetParam(joint: Rid, param: PhysicsServer3D.HingeJointParam, value: float64): void
        
        /** Gets a hinge_joint parameter (see [enum HingeJointParam]). */
        static hingeJointGetParam(joint: Rid, param: PhysicsServer3D.HingeJointParam): float64
        
        /** Sets a hinge_joint flag (see [enum HingeJointFlag] constants). */
        static hingeJointSetFlag(joint: Rid, flag: PhysicsServer3D.HingeJointFlag, enabled: boolean): void
        
        /** Gets a hinge_joint flag (see [enum HingeJointFlag] constants). */
        static hingeJointGetFlag(joint: Rid, flag: PhysicsServer3D.HingeJointFlag): boolean
        static jointMakeSlider(joint: Rid, bodyA: Rid, localRefA: Transform3D, bodyB: Rid, localRefB: Transform3D): void
        
        /** Gets a slider_joint parameter (see [enum SliderJointParam] constants). */
        static sliderJointSetParam(joint: Rid, param: PhysicsServer3D.SliderJointParam, value: float64): void
        
        /** Gets a slider_joint parameter (see [enum SliderJointParam] constants). */
        static sliderJointGetParam(joint: Rid, param: PhysicsServer3D.SliderJointParam): float64
        static jointMakeConeTwist(joint: Rid, bodyA: Rid, localRefA: Transform3D, bodyB: Rid, localRefB: Transform3D): void
        
        /** Sets a cone_twist_joint parameter (see [enum ConeTwistJointParam] constants). */
        static coneTwistJointSetParam(joint: Rid, param: PhysicsServer3D.ConeTwistJointParam, value: float64): void
        
        /** Gets a cone_twist_joint parameter (see [enum ConeTwistJointParam] constants). */
        static coneTwistJointGetParam(joint: Rid, param: PhysicsServer3D.ConeTwistJointParam): float64
        
        /** Returns the type of the Joint3D. */
        static jointGetType(joint: Rid): PhysicsServer3D.JointType
        
        /** Sets the priority value of the Joint3D. */
        static jointSetSolverPriority(joint: Rid, priority: int64): void
        
        /** Gets the priority value of the Joint3D. */
        static jointGetSolverPriority(joint: Rid): int64
        
        /** Sets whether the bodies attached to the [Joint3D] will collide with each other. */
        static jointDisableCollisionsBetweenBodies(joint: Rid, disable: boolean): void
        
        /** Returns whether the bodies attached to the [Joint3D] will collide with each other. */
        static jointIsDisabledCollisionsBetweenBodies(joint: Rid): boolean
        
        /** Make the joint a generic six degrees of freedom (6DOF) joint. Use [method generic_6dof_joint_set_flag] and [method generic_6dof_joint_set_param] to set the joint's flags and parameters respectively. */
        static jointMakeGeneric6Dof(joint: Rid, bodyA: Rid, localRefA: Transform3D, bodyB: Rid, localRefB: Transform3D): void
        
        /** Sets the value of a given generic 6DOF joint parameter. See [enum G6DOFJointAxisParam] for the list of available parameters. */
        static generic6DofJointSetParam(joint: Rid, axis: Vector3.Axis, param: PhysicsServer3D.G6DofJointAxisParam, value: float64): void
        
        /** Returns the value of a generic 6DOF joint parameter. See [enum G6DOFJointAxisParam] for the list of available parameters. */
        static generic6DofJointGetParam(joint: Rid, axis: Vector3.Axis, param: PhysicsServer3D.G6DofJointAxisParam): float64
        
        /** Sets the value of a given generic 6DOF joint flag. See [enum G6DOFJointAxisFlag] for the list of available flags. */
        static generic6DofJointSetFlag(joint: Rid, axis: Vector3.Axis, flag: PhysicsServer3D.G6DofJointAxisFlag, enable: boolean): void
        
        /** Returns the value of a generic 6DOF joint flag. See [enum G6DOFJointAxisFlag] for the list of available flags. */
        static generic6DofJointGetFlag(joint: Rid, axis: Vector3.Axis, flag: PhysicsServer3D.G6DofJointAxisFlag): boolean
        
        /** Destroys any of the objects created by PhysicsServer3D. If the [RID] passed is not one of the objects that can be created by PhysicsServer3D, an error will be sent to the console. */
        static freeRid(rid: Rid): void
        
        /** Activates or deactivates the 3D physics engine. */
        static setActive(active: boolean): void
        
        /** Returns information about the current state of the 3D physics engine. See [enum ProcessInfo] for a list of available states. */
        static getProcessInfo(processInfo: PhysicsServer3D.ProcessInfo): int64
    }
    // _singleton_class_: XRServer
    namespace XRServer {
        enum TrackerType {
            TrackerHead = 1,
            TrackerController = 2,
            TrackerBasestation = 4,
            TrackerAnchor = 8,
            TrackerHand = 16,
            TrackerBody = 32,
            TrackerFace = 64,
            TrackerAnyKnown = 127,
            TrackerUnknown = 128,
            TrackerAny = 255,
        }
        enum RotationMode {
            ResetFullRotation = 0,
            ResetButKeepTilt = 1,
            DontResetRotation = 2,
        }
    }
    /** Server for AR and VR features.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_xrserver.html  
     */
    class XRServer extends GObject {
        /** The tracker tracks the location of the players head. This is usually a location centered between the players eyes. Note that for handheld AR devices this can be the current location of the device. */
        static readonly TRACKER_HEAD = 1
        
        /** The tracker tracks the location of a controller. */
        static readonly TRACKER_CONTROLLER = 2
        
        /** The tracker tracks the location of a base station. */
        static readonly TRACKER_BASESTATION = 4
        
        /** The tracker tracks the location and size of an AR anchor. */
        static readonly TRACKER_ANCHOR = 8
        
        /** The tracker tracks the location and joints of a hand. */
        static readonly TRACKER_HAND = 16
        
        /** The tracker tracks the location and joints of a body. */
        static readonly TRACKER_BODY = 32
        
        /** The tracker tracks the expressions of a face. */
        static readonly TRACKER_FACE = 64
        
        /** Used internally to filter trackers of any known type. */
        static readonly TRACKER_ANY_KNOWN = 127
        
        /** Used internally if we haven't set the tracker type yet. */
        static readonly TRACKER_UNKNOWN = 128
        
        /** Used internally to select all trackers. */
        static readonly TRACKER_ANY = 255
        
        /** Fully reset the orientation of the HMD. Regardless of what direction the user is looking to in the real world. The user will look dead ahead in the virtual world. */
        static readonly RESET_FULL_ROTATION = 0
        
        /** Resets the orientation but keeps the tilt of the device. So if we're looking down, we keep looking down but heading will be reset. */
        static readonly RESET_BUT_KEEP_TILT = 1
        
        /** Does not reset the orientation of the HMD, only the position of the player gets centered. */
        static readonly DONT_RESET_ROTATION = 2
        
        /** Returns the reference frame transform. Mostly used internally and exposed for GDExtension build interfaces. */
        static getReferenceFrame(): Transform3D
        
        /** Clears the reference frame that was set by previous calls to [method center_on_hmd]. */
        static clearReferenceFrame(): void
        
        /** This is an important function to understand correctly. AR and VR platforms all handle positioning slightly differently.  
         *  For platforms that do not offer spatial tracking, our origin point (0, 0, 0) is the location of our HMD, but you have little control over the direction the player is facing in the real world.  
         *  For platforms that do offer spatial tracking, our origin point depends very much on the system. For OpenVR, our origin point is usually the center of the tracking space, on the ground. For other platforms, it's often the location of the tracking camera.  
         *  This method allows you to center your tracker on the location of the HMD. It will take the current location of the HMD and use that to adjust all your tracking data; in essence, realigning the real world to your player's current position in the game world.  
         *  For this method to produce usable results, tracking information must be available. This often takes a few frames after starting your game.  
         *  You should call this method after a few seconds have passed. For example, when the user requests a realignment of the display holding a designated button on a controller for a short period of time, or when implementing a teleport mechanism.  
         */
        static centerOnHmd(rotationMode: XRServer.RotationMode, keepHeight: boolean): void
        
        /** Returns the primary interface's transformation. */
        static getHmdTransform(): Transform3D
        
        /** Registers an [XRInterface] object. */
        static addInterface(interface: XRInterface): void
        
        /** Returns the number of interfaces currently registered with the AR/VR server. If your project supports multiple AR/VR platforms, you can look through the available interface, and either present the user with a selection or simply try to initialize each interface and use the first one that returns `true`. */
        static getInterfaceCount(): int64
        
        /** Removes this [param interface]. */
        static removeInterface(interface: XRInterface): void
        
        /** Returns the interface registered at the given [param idx] index in the list of interfaces. */
        static getInterface(idx: int64): null | XRInterface
        
        /** Returns a list of available interfaces the ID and name of each interface. */
        static getInterfaces(): GArray
        
        /** Finds an interface by its [param name]. For example, if your project uses capabilities of an AR/VR platform, you can find the interface for that platform by name and initialize it. */
        static findInterface(name: string): null | XRInterface
        
        /** Registers a new [XRTracker] that tracks a physical object. */
        static addTracker(tracker: XRTracker): void
        
        /** Removes this [param tracker]. */
        static removeTracker(tracker: XRTracker): void
        
        /** Returns a dictionary of trackers for [param tracker_types]. */
        static getTrackers(trackerTypes: int64): GDictionary
        
        /** Returns the positional tracker with the given [param tracker_name]. */
        static getTracker(trackerName: StringName): null | XRTracker
        
        /** The scale of the game world compared to the real world. By default, most AR/VR platforms assume that 1 game unit corresponds to 1 real world meter. */
        get worldScale(): float64
        set worldScale(value: float64)
        
        /** The current origin of our tracking space in the virtual world. This is used by the renderer to properly position the camera with new tracking data.  
         *      
         *  **Note:** This property is managed by the current [XROrigin3D] node. It is exposed for access from GDExtensions.  
         */
        get worldOrigin(): Vector3
        set worldOrigin(value: Vector3)
        
        /** If set to `true`, the scene will be rendered as if the camera is locked to the [XROrigin3D].  
         *      
         *  **Note:** This doesn't provide a very comfortable experience for users. This setting exists for doing benchmarking or automated testing, where you want to control what is rendered via code.  
         */
        get cameraLockedToOrigin(): boolean
        set cameraLockedToOrigin(value: boolean)
        
        /** The primary [XRInterface] currently bound to the [XRServer]. */
        get primaryInterface(): null | GObject
        set primaryInterface(value: null | GObject)
        
        /** Emitted when the reference frame transform changes. */
        static readonly referenceFrameChanged: Signal<() => void>
        
        /** Emitted when a new interface has been added. */
        static readonly interfaceAdded: Signal<(interfaceName: StringName) => void>
        
        /** Emitted when an interface is removed. */
        static readonly interfaceRemoved: Signal<(interfaceName: StringName) => void>
        
        /** Emitted when a new tracker has been added. If you don't use a fixed number of controllers or if you're using [XRAnchor3D]s for an AR solution, it is important to react to this signal to add the appropriate [XRController3D] or [XRAnchor3D] nodes related to this new tracker. */
        static readonly trackerAdded: Signal<(trackerName: StringName, type: int64) => void>
        
        /** Emitted when an existing tracker has been updated. This can happen if the user switches controllers. */
        static readonly trackerUpdated: Signal<(trackerName: StringName, type: int64) => void>
        
        /** Emitted when a tracker is removed. You should remove any [XRController3D] or [XRAnchor3D] points if applicable. This is not mandatory, the nodes simply become inactive and will be made active again when a new tracker becomes available (i.e. a new controller is switched on that takes the place of the previous one). */
        static readonly trackerRemoved: Signal<(trackerName: StringName, type: int64) => void>
    }
    // ERROR: singleton GDScriptLanguageProtocol without class info GDScriptLanguageProtocol
    namespace AesContext {
        enum Mode {
            ModeEcbEncrypt = 0,
            ModeEcbDecrypt = 1,
            ModeCbcEncrypt = 2,
            ModeCbcDecrypt = 3,
            ModeMax = 4,
        }
    }
    class AesContext extends RefCounted {
        static readonly MODE_ECB_ENCRYPT = 0
        static readonly MODE_ECB_DECRYPT = 1
        static readonly MODE_CBC_ENCRYPT = 2
        static readonly MODE_CBC_DECRYPT = 3
        static readonly MODE_MAX = 4
        constructor(identifier?: any)
        start(mode: AesContext.Mode, key: PackedByteArray | byte[] | ArrayBuffer, iV?: PackedByteArray | byte[] | ArrayBuffer /* = [] */): GError
        update(src: PackedByteArray | byte[] | ArrayBuffer): PackedByteArray
        getIVState(): PackedByteArray
        finish(): void
    }
    /** An implementation of A* for finding the shortest path between two vertices on a connected graph in 2D space.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_astar2d.html  
     */
    class AStar2D extends RefCounted {
        constructor(identifier?: any)
        /** Called when estimating the cost between a point and the path's ending point.  
         *  Note that this function is hidden in the default [AStar2D] class.  
         */
        /* gdvirtual */ _estimateCost(fromId: int64, endId: int64): float64
        
        /** Called when computing the cost between two connected points.  
         *  Note that this function is hidden in the default [AStar2D] class.  
         */
        /* gdvirtual */ _computeCost(fromId: int64, toId: int64): float64
        
        /** Returns the next available point ID with no point associated to it. */
        getAvailablePointId(): int64
        
        /** Adds a new point at the given position with the given identifier. The [param id] must be 0 or larger, and the [param weight_scale] must be 0.0 or greater.  
         *  The [param weight_scale] is multiplied by the result of [method _compute_cost] when determining the overall cost of traveling across a segment from a neighboring point to this point. Thus, all else being equal, the algorithm prefers points with lower [param weight_scale]s to form a path.  
         *    
         *  If there already exists a point for the given [param id], its position and weight scale are updated to the given values.  
         */
        addPoint(id: int64, position: Vector2, weightScale?: float64 /* = 1 */): void
        
        /** Returns the position of the point associated with the given [param id]. */
        getPointPosition(id: int64): Vector2
        
        /** Sets the [param position] for the point with the given [param id]. */
        setPointPosition(id: int64, position: Vector2): void
        
        /** Returns the weight scale of the point associated with the given [param id]. */
        getPointWeightScale(id: int64): float64
        
        /** Sets the [param weight_scale] for the point with the given [param id]. The [param weight_scale] is multiplied by the result of [method _compute_cost] when determining the overall cost of traveling across a segment from a neighboring point to this point. */
        setPointWeightScale(id: int64, weightScale: float64): void
        
        /** Removes the point associated with the given [param id] from the points pool. */
        removePoint(id: int64): void
        
        /** Returns whether a point associated with the given [param id] exists. */
        hasPoint(id: int64): boolean
        
        /** Returns an array with the IDs of the points that form the connection with the given point.  
         *    
         */
        getPointConnections(id: int64): PackedInt64Array
        
        /** Returns an array of all point IDs. */
        getPointIds(): PackedInt64Array
        
        /** Disables or enables the specified point for pathfinding. Useful for making a temporary obstacle. */
        setPointDisabled(id: int64, disabled?: boolean /* = true */): void
        
        /** Returns whether a point is disabled or not for pathfinding. By default, all points are enabled. */
        isPointDisabled(id: int64): boolean
        
        /** Creates a segment between the given points. If [param bidirectional] is `false`, only movement from [param id] to [param to_id] is allowed, not the reverse direction.  
         *    
         */
        connectPoints(id: int64, toId: int64, bidirectional?: boolean /* = true */): void
        
        /** Deletes the segment between the given points. If [param bidirectional] is `false`, only movement from [param id] to [param to_id] is prevented, and a unidirectional segment possibly remains. */
        disconnectPoints(id: int64, toId: int64, bidirectional?: boolean /* = true */): void
        
        /** Returns whether there is a connection/segment between the given points. If [param bidirectional] is `false`, returns whether movement from [param id] to [param to_id] is possible through this segment. */
        arePointsConnected(id: int64, toId: int64, bidirectional?: boolean /* = true */): boolean
        
        /** Returns the number of points currently in the points pool. */
        getPointCount(): int64
        
        /** Returns the capacity of the structure backing the points, useful in conjunction with [method reserve_space]. */
        getPointCapacity(): int64
        
        /** Reserves space internally for [param num_nodes] points. Useful if you're adding a known large number of points at once, such as points on a grid. */
        reserveSpace(numNodes: int64): void
        
        /** Clears all the points and segments. */
        clear(): void
        
        /** Returns the ID of the closest point to [param to_position], optionally taking disabled points into account. Returns `-1` if there are no points in the points pool.  
         *      
         *  **Note:** If several points are the closest to [param to_position], the one with the smallest ID will be returned, ensuring a deterministic result.  
         */
        getClosestPoint(toPosition: Vector2, includeDisabled?: boolean /* = false */): int64
        
        /** Returns the closest position to [param to_position] that resides inside a segment between two connected points.  
         *    
         *  The result is in the segment that goes from `y = 0` to `y = 5`. It's the closest position in the segment to the given point.  
         */
        getClosestPositionInSegment(toPosition: Vector2): Vector2
        
        /** Returns an array with the points that are in the path found by AStar2D between the given points. The array is ordered from the starting point to the ending point of the path.  
         *  If there is no valid path to the target, and [param allow_partial_path] is `true`, returns a path to the point closest to the target that can be reached.  
         *      
         *  **Note:** This method is not thread-safe. If called from a [Thread], it will return an empty array and will print an error message.  
         *  Additionally, when [param allow_partial_path] is `true` and [param to_id] is disabled the search may take an unusually long time to finish.  
         */
        getPointPath(fromId: int64, toId: int64, allowPartialPath?: boolean /* = false */): PackedVector2Array
        
        /** Returns an array with the IDs of the points that form the path found by AStar2D between the given points. The array is ordered from the starting point to the ending point of the path.  
         *  If there is no valid path to the target, and [param allow_partial_path] is `true`, returns a path to the point closest to the target that can be reached.  
         *      
         *  **Note:** When [param allow_partial_path] is `true` and [param to_id] is disabled the search may take an unusually long time to finish.  
         *    
         *  If you change the 2nd point's weight to 3, then the result will be `[1, 4, 3]` instead, because now even though the distance is longer, it's "easier" to get through point 4 than through point 2.  
         */
        getIdPath(fromId: int64, toId: int64, allowPartialPath?: boolean /* = false */): PackedInt64Array
    }
    /** An implementation of A* for finding the shortest path between two vertices on a connected graph in 3D space.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_astar3d.html  
     */
    class AStar3D extends RefCounted {
        constructor(identifier?: any)
        /** Called when estimating the cost between a point and the path's ending point.  
         *  Note that this function is hidden in the default [AStar3D] class.  
         */
        /* gdvirtual */ _estimateCost(fromId: int64, endId: int64): float64
        
        /** Called when computing the cost between two connected points.  
         *  Note that this function is hidden in the default [AStar3D] class.  
         */
        /* gdvirtual */ _computeCost(fromId: int64, toId: int64): float64
        
        /** Returns the next available point ID with no point associated to it. */
        getAvailablePointId(): int64
        
        /** Adds a new point at the given position with the given identifier. The [param id] must be 0 or larger, and the [param weight_scale] must be 0.0 or greater.  
         *  The [param weight_scale] is multiplied by the result of [method _compute_cost] when determining the overall cost of traveling across a segment from a neighboring point to this point. Thus, all else being equal, the algorithm prefers points with lower [param weight_scale]s to form a path.  
         *    
         *  If there already exists a point for the given [param id], its position and weight scale are updated to the given values.  
         */
        addPoint(id: int64, position: Vector3, weightScale?: float64 /* = 1 */): void
        
        /** Returns the position of the point associated with the given [param id]. */
        getPointPosition(id: int64): Vector3
        
        /** Sets the [param position] for the point with the given [param id]. */
        setPointPosition(id: int64, position: Vector3): void
        
        /** Returns the weight scale of the point associated with the given [param id]. */
        getPointWeightScale(id: int64): float64
        
        /** Sets the [param weight_scale] for the point with the given [param id]. The [param weight_scale] is multiplied by the result of [method _compute_cost] when determining the overall cost of traveling across a segment from a neighboring point to this point. */
        setPointWeightScale(id: int64, weightScale: float64): void
        
        /** Removes the point associated with the given [param id] from the points pool. */
        removePoint(id: int64): void
        
        /** Returns whether a point associated with the given [param id] exists. */
        hasPoint(id: int64): boolean
        
        /** Returns an array with the IDs of the points that form the connection with the given point.  
         *    
         */
        getPointConnections(id: int64): PackedInt64Array
        
        /** Returns an array of all point IDs. */
        getPointIds(): PackedInt64Array
        
        /** Disables or enables the specified point for pathfinding. Useful for making a temporary obstacle. */
        setPointDisabled(id: int64, disabled?: boolean /* = true */): void
        
        /** Returns whether a point is disabled or not for pathfinding. By default, all points are enabled. */
        isPointDisabled(id: int64): boolean
        
        /** Creates a segment between the given points. If [param bidirectional] is `false`, only movement from [param id] to [param to_id] is allowed, not the reverse direction.  
         *    
         */
        connectPoints(id: int64, toId: int64, bidirectional?: boolean /* = true */): void
        
        /** Deletes the segment between the given points. If [param bidirectional] is `false`, only movement from [param id] to [param to_id] is prevented, and a unidirectional segment possibly remains. */
        disconnectPoints(id: int64, toId: int64, bidirectional?: boolean /* = true */): void
        
        /** Returns whether the two given points are directly connected by a segment. If [param bidirectional] is `false`, returns whether movement from [param id] to [param to_id] is possible through this segment. */
        arePointsConnected(id: int64, toId: int64, bidirectional?: boolean /* = true */): boolean
        
        /** Returns the number of points currently in the points pool. */
        getPointCount(): int64
        
        /** Returns the capacity of the structure backing the points, useful in conjunction with [method reserve_space]. */
        getPointCapacity(): int64
        
        /** Reserves space internally for [param num_nodes] points. Useful if you're adding a known large number of points at once, such as points on a grid. */
        reserveSpace(numNodes: int64): void
        
        /** Clears all the points and segments. */
        clear(): void
        
        /** Returns the ID of the closest point to [param to_position], optionally taking disabled points into account. Returns `-1` if there are no points in the points pool.  
         *      
         *  **Note:** If several points are the closest to [param to_position], the one with the smallest ID will be returned, ensuring a deterministic result.  
         */
        getClosestPoint(toPosition: Vector3, includeDisabled?: boolean /* = false */): int64
        
        /** Returns the closest position to [param to_position] that resides inside a segment between two connected points.  
         *    
         *  The result is in the segment that goes from `y = 0` to `y = 5`. It's the closest position in the segment to the given point.  
         */
        getClosestPositionInSegment(toPosition: Vector3): Vector3
        
        /** Returns an array with the points that are in the path found by AStar3D between the given points. The array is ordered from the starting point to the ending point of the path.  
         *  If there is no valid path to the target, and [param allow_partial_path] is `true`, returns a path to the point closest to the target that can be reached.  
         *      
         *  **Note:** This method is not thread-safe. If called from a [Thread], it will return an empty array and will print an error message.  
         *  Additionally, when [param allow_partial_path] is `true` and [param to_id] is disabled the search may take an unusually long time to finish.  
         */
        getPointPath(fromId: int64, toId: int64, allowPartialPath?: boolean /* = false */): PackedVector3Array
        
        /** Returns an array with the IDs of the points that form the path found by AStar3D between the given points. The array is ordered from the starting point to the ending point of the path.  
         *  If there is no valid path to the target, and [param allow_partial_path] is `true`, returns a path to the point closest to the target that can be reached.  
         *      
         *  **Note:** When [param allow_partial_path] is `true` and [param to_id] is disabled the search may take an unusually long time to finish.  
         *    
         *  If you change the 2nd point's weight to 3, then the result will be `[1, 4, 3]` instead, because now even though the distance is longer, it's "easier" to get through point 4 than through point 2.  
         */
        getIdPath(fromId: int64, toId: int64, allowPartialPath?: boolean /* = false */): PackedInt64Array
    }
    namespace AStarGrid2D {
        enum Heuristic {
            HeuristicEuclidean = 0,
            HeuristicManhattan = 1,
            HeuristicOctile = 2,
            HeuristicChebyshev = 3,
            HeuristicMax = 4,
        }
        enum DiagonalMode {
            DiagonalModeAlways = 0,
            DiagonalModeNever = 1,
            DiagonalModeAtLeastOneWalkable = 2,
            DiagonalModeOnlyIfNoObstacles = 3,
            DiagonalModeMax = 4,
        }
        enum CellShape {
            CellShapeSquare = 0,
            CellShapeIsometricRight = 1,
            CellShapeIsometricDown = 2,
            CellShapeMax = 3,
        }
    }
    /** An implementation of A* for finding the shortest path between two points on a partial 2D grid.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_astargrid2d.html  
     */
    class AStarGrid2D extends RefCounted {
        /** The [url=https://en.wikipedia.org/wiki/Euclidean_distance]Euclidean heuristic[/url] to be used for the pathfinding using the following formula:  
         *    
         *      
         *  **Note:** This is also the internal heuristic used in [AStar3D] and [AStar2D] by default (with the inclusion of possible z-axis coordinate).  
         */
        static readonly HEURISTIC_EUCLIDEAN = 0
        
        /** The [url=https://en.wikipedia.org/wiki/Taxicab_geometry]Manhattan heuristic[/url] to be used for the pathfinding using the following formula:  
         *    
         *      
         *  **Note:** This heuristic is intended to be used with 4-side orthogonal movements, provided by setting the [member diagonal_mode] to [constant DIAGONAL_MODE_NEVER].  
         */
        static readonly HEURISTIC_MANHATTAN = 1
        
        /** The Octile heuristic to be used for the pathfinding using the following formula:  
         *    
         */
        static readonly HEURISTIC_OCTILE = 2
        
        /** The [url=https://en.wikipedia.org/wiki/Chebyshev_distance]Chebyshev heuristic[/url] to be used for the pathfinding using the following formula:  
         *    
         */
        static readonly HEURISTIC_CHEBYSHEV = 3
        
        /** Represents the size of the [enum Heuristic] enum. */
        static readonly HEURISTIC_MAX = 4
        
        /** The pathfinding algorithm will ignore solid neighbors around the target cell and allow passing using diagonals. */
        static readonly DIAGONAL_MODE_ALWAYS = 0
        
        /** The pathfinding algorithm will ignore all diagonals and the way will be always orthogonal. */
        static readonly DIAGONAL_MODE_NEVER = 1
        
        /** The pathfinding algorithm will avoid using diagonals if at least two obstacles have been placed around the neighboring cells of the specific path segment. */
        static readonly DIAGONAL_MODE_AT_LEAST_ONE_WALKABLE = 2
        
        /** The pathfinding algorithm will avoid using diagonals if any obstacle has been placed around the neighboring cells of the specific path segment. */
        static readonly DIAGONAL_MODE_ONLY_IF_NO_OBSTACLES = 3
        
        /** Represents the size of the [enum DiagonalMode] enum. */
        static readonly DIAGONAL_MODE_MAX = 4
        
        /** Rectangular cell shape. */
        static readonly CELL_SHAPE_SQUARE = 0
        
        /** Diamond cell shape (for isometric look). Cell coordinates layout where the horizontal axis goes up-right, and the vertical one goes down-right. */
        static readonly CELL_SHAPE_ISOMETRIC_RIGHT = 1
        
        /** Diamond cell shape (for isometric look). Cell coordinates layout where the horizontal axis goes down-right, and the vertical one goes down-left. */
        static readonly CELL_SHAPE_ISOMETRIC_DOWN = 2
        
        /** Represents the size of the [enum CellShape] enum. */
        static readonly CELL_SHAPE_MAX = 3
        constructor(identifier?: any)
        
        /** Called when estimating the cost between a point and the path's ending point.  
         *  Note that this function is hidden in the default [AStarGrid2D] class.  
         */
        /* gdvirtual */ _estimateCost(fromId: Vector2I, endId: Vector2I): float64
        
        /** Called when computing the cost between two connected points.  
         *  Note that this function is hidden in the default [AStarGrid2D] class.  
         */
        /* gdvirtual */ _computeCost(fromId: Vector2I, toId: Vector2I): float64
        
        /** Returns `true` if the [param x] and [param y] is a valid grid coordinate (id), i.e. if it is inside [member region]. Equivalent to `region.has_point(Vector2i(x, y))`. */
        isInBounds(x: int64, y: int64): boolean
        
        /** Returns `true` if the [param id] vector is a valid grid coordinate, i.e. if it is inside [member region]. Equivalent to `region.has_point(id)`. */
        isInBoundsv(id: Vector2I): boolean
        
        /** Indicates that the grid parameters were changed and [method update] needs to be called. */
        isDirty(): boolean
        
        /** Updates the internal state of the grid according to the parameters to prepare it to search the path. Needs to be called if parameters like [member region], [member cell_size] or [member offset] are changed. [method is_dirty] will return `true` if this is the case and this needs to be called.  
         *      
         *  **Note:** All point data (solidity and weight scale) will be cleared.  
         */
        update(): void
        
        /** Disables or enables the specified point for pathfinding. Useful for making an obstacle. By default, all points are enabled.  
         *      
         *  **Note:** Calling [method update] is not needed after the call of this function.  
         */
        setPointSolid(id: Vector2I, solid?: boolean /* = true */): void
        
        /** Returns `true` if a point is disabled for pathfinding. By default, all points are enabled. */
        isPointSolid(id: Vector2I): boolean
        
        /** Sets the [param weight_scale] for the point with the given [param id]. The [param weight_scale] is multiplied by the result of [method _compute_cost] when determining the overall cost of traveling across a segment from a neighboring point to this point.  
         *      
         *  **Note:** Calling [method update] is not needed after the call of this function.  
         */
        setPointWeightScale(id: Vector2I, weightScale: float64): void
        
        /** Returns the weight scale of the point associated with the given [param id]. */
        getPointWeightScale(id: Vector2I): float64
        
        /** Fills the given [param region] on the grid with the specified value for the solid flag.  
         *      
         *  **Note:** Calling [method update] is not needed after the call of this function.  
         */
        fillSolidRegion(region: Rect2I, solid?: boolean /* = true */): void
        
        /** Fills the given [param region] on the grid with the specified value for the weight scale.  
         *      
         *  **Note:** Calling [method update] is not needed after the call of this function.  
         */
        fillWeightScaleRegion(region: Rect2I, weightScale: float64): void
        
        /** Clears the grid and sets the [member region] to `Rect2i(0, 0, 0, 0)`. */
        clear(): void
        
        /** Returns the position of the point associated with the given [param id]. */
        getPointPosition(id: Vector2I): Vector2
        
        /** Returns an array of dictionaries with point data (`id`: [Vector2i], `position`: [Vector2], `solid`: [bool], `weight_scale`: [float]) within a [param region]. */
        getPointDataInRegion(region: Rect2I): GArray
        
        /** Returns an array with the points that are in the path found by [AStarGrid2D] between the given points. The array is ordered from the starting point to the ending point of the path.  
         *  If there is no valid path to the target, and [param allow_partial_path] is `true`, returns a path to the point closest to the target that can be reached.  
         *      
         *  **Note:** This method is not thread-safe. If called from a [Thread], it will return an empty array and will print an error message.  
         *  Additionally, when [param allow_partial_path] is `true` and [param to_id] is solid the search may take an unusually long time to finish.  
         */
        getPointPath(fromId: Vector2I, toId: Vector2I, allowPartialPath?: boolean /* = false */): PackedVector2Array
        
        /** Returns an array with the IDs of the points that form the path found by AStar2D between the given points. The array is ordered from the starting point to the ending point of the path.  
         *  If there is no valid path to the target, and [param allow_partial_path] is `true`, returns a path to the point closest to the target that can be reached.  
         *      
         *  **Note:** When [param allow_partial_path] is `true` and [param to_id] is solid the search may take an unusually long time to finish.  
         */
        getIdPath(fromId: Vector2I, toId: Vector2I, allowPartialPath?: boolean /* = false */): GArray
        
        /** The region of grid cells available for pathfinding. If changed, [method update] needs to be called before finding the next path. */
        get region(): Rect2I
        set region(value: Rect2I)
        
        /** The size of the grid (number of cells of size [member cell_size] on each axis). If changed, [method update] needs to be called before finding the next path. */
        get size(): Vector2I
        set size(value: Vector2I)
        
        /** The offset of the grid which will be applied to calculate the resulting point position returned by [method get_point_path]. If changed, [method update] needs to be called before finding the next path. */
        get offset(): Vector2
        set offset(value: Vector2)
        
        /** The size of the point cell which will be applied to calculate the resulting point position returned by [method get_point_path]. If changed, [method update] needs to be called before finding the next path. */
        get cellSize(): Vector2
        set cellSize(value: Vector2)
        
        /** The cell shape. Affects how the positions are placed in the grid. If changed, [method update] needs to be called before finding the next path. */
        get cellShape(): int64
        set cellShape(value: int64)
        
        /** Enables or disables jumping to skip up the intermediate points and speeds up the searching algorithm.  
         *      
         *  **Note:** Currently, toggling it on disables the consideration of weight scaling in pathfinding.  
         */
        get jumpingEnabled(): boolean
        set jumpingEnabled(value: boolean)
        
        /** The default [enum Heuristic] which will be used to calculate the cost between two points if [method _compute_cost] was not overridden. */
        get defaultComputeHeuristic(): int64
        set defaultComputeHeuristic(value: int64)
        
        /** The default [enum Heuristic] which will be used to calculate the cost between the point and the end point if [method _estimate_cost] was not overridden. */
        get defaultEstimateHeuristic(): int64
        set defaultEstimateHeuristic(value: int64)
        
        /** A specific [enum DiagonalMode] mode which will force the path to avoid or accept the specified diagonals. */
        get diagonalMode(): int64
        set diagonalMode(value: int64)
    }
    /** A base dialog used for user notification.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_acceptdialog.html  
     */
    class AcceptDialog<Map extends NodePathMap = any> extends Window<Map> {
        constructor(identifier?: any)
        /** Returns the OK [Button] instance.  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.  
         */
        getOkButton(): null | Button
        
        /** Returns the label used for built-in text.  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.  
         */
        getLabel(): null | Label
        
        /** Adds a button with label [param text] and a custom [param action] to the dialog and returns the created button. [param action] will be passed to the [signal custom_action] signal when pressed.  
         *  If `true`, [param right] will place the button to the right of any sibling buttons.  
         *  You can use [method remove_button] method to remove a button created with this method from the dialog.  
         */
        addButton(text: string, right?: boolean /* = false */, action?: string /* = '' */): null | Button
        
        /** Adds a button with label [param name] and a cancel action to the dialog and returns the created button.  
         *  You can use [method remove_button] method to remove a button created with this method from the dialog.  
         */
        addCancelButton(name: string): null | Button
        
        /** Removes the [param button] from the dialog. Does NOT free the [param button]. The [param button] must be a [Button] added with [method add_button] or [method add_cancel_button] method. After removal, pressing the [param button] will no longer emit this dialog's [signal custom_action] or [signal canceled] signals. */
        removeButton(button: Button): void
        
        /** Registers a [LineEdit] in the dialog. When the enter key is pressed, the dialog will be accepted. */
        registerTextEnter(lineEdit: LineEdit): void
        
        /** The text displayed by the OK button (see [method get_ok_button]). If empty, a default text will be used. */
        get okButtonText(): string
        set okButtonText(value: string)
        
        /** The text displayed by the dialog. */
        get dialogText(): string
        set dialogText(value: string)
        
        /** If `true`, the dialog is hidden when the OK button is pressed. You can set it to `false` if you want to do e.g. input validation when receiving the [signal confirmed] signal, and handle hiding the dialog in your own logic.  
         *      
         *  **Note:** Some nodes derived from this class can have a different default value, and potentially their own built-in logic overriding this setting. For example [FileDialog] defaults to `false`, and has its own input validation code that is called when you press OK, which eventually hides the dialog if the input is valid. As such, this property can't be used in [FileDialog] to disable hiding the dialog when pressing OK.  
         */
        get dialogHideOnOk(): boolean
        set dialogHideOnOk(value: boolean)
        
        /** If `true`, the dialog will be hidden when the escape key ([constant KEY_ESCAPE]) is pressed. */
        get dialogCloseOnEscape(): boolean
        set dialogCloseOnEscape(value: boolean)
        
        /** Sets autowrapping for the text in the dialog. */
        get dialogAutowrap(): boolean
        set dialogAutowrap(value: boolean)
        
        /** Emitted when the dialog is accepted, i.e. the OK button is pressed. */
        readonly confirmed: Signal<() => void>
        
        /** Emitted when the dialog is closed or the button created with [method add_cancel_button] is pressed. */
        readonly canceled: Signal<() => void>
        
        /** Emitted when a custom button is pressed. See [method add_button]. */
        readonly customAction: Signal<(action: StringName) => void>
    }
    /** A 2D physics body that can't be moved by external forces. When moved manually, it affects other bodies in its path.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_animatablebody2d.html  
     */
    class AnimatableBody2D<Map extends NodePathMap = any> extends StaticBody2D<Map> {
        constructor(identifier?: any)
        /** If `true`, the body's movement will be synchronized to the physics frame. This is useful when animating movement via [AnimationPlayer], for example on moving platforms. Do **not** use together with [method PhysicsBody2D.move_and_collide]. */
        get syncToPhysics(): boolean
        set syncToPhysics(value: boolean)
    }
    /** A 3D physics body that can't be moved by external forces. When moved manually, it affects other bodies in its path.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_animatablebody3d.html  
     */
    class AnimatableBody3D<Map extends NodePathMap = any> extends StaticBody3D<Map> {
        constructor(identifier?: any)
        /** If `true`, the body's movement will be synchronized to the physics frame. This is useful when animating movement via [AnimationPlayer], for example on moving platforms. Do **not** use together with [method PhysicsBody3D.move_and_collide]. */
        get syncToPhysics(): boolean
        set syncToPhysics(value: boolean)
    }
    /** Sprite node that contains multiple textures as frames to play for animation.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_animatedsprite2d.html  
     */
    class AnimatedSprite2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** Returns `true` if an animation is currently playing (even if [member speed_scale] and/or `custom_speed` are `0`). */
        isPlaying(): boolean
        
        /** Plays the animation with key [param name]. If [param custom_speed] is negative and [param from_end] is `true`, the animation will play backwards (which is equivalent to calling [method play_backwards]).  
         *  If this method is called with that same animation [param name], or with no [param name] parameter, the assigned animation will resume playing if it was paused.  
         */
        play(name?: StringName /* = '' */, customSpeed?: float64 /* = 1 */, fromEnd?: boolean /* = false */): void
        
        /** Plays the animation with key [param name] in reverse.  
         *  This method is a shorthand for [method play] with `custom_speed = -1.0` and `from_end = true`, so see its description for more information.  
         */
        playBackwards(name?: StringName /* = '' */): void
        
        /** Pauses the currently playing animation. The [member frame] and [member frame_progress] will be kept and calling [method play] or [method play_backwards] without arguments will resume the animation from the current playback position.  
         *  See also [method stop].  
         */
        pause(): void
        
        /** Stops the currently playing animation. The animation position is reset to `0` and the `custom_speed` is reset to `1.0`. See also [method pause]. */
        stop(): void
        
        /** Sets [member frame] and [member frame_progress] to the given values. Unlike setting [member frame], this method does not reset the [member frame_progress] to `0.0` implicitly.  
         *  **Example:** Change the animation while keeping the same [member frame] and [member frame_progress]:  
         *    
         */
        setFrameAndProgress(frame: int64, progress: float64): void
        
        /** Returns the actual playing speed of current animation or `0` if not playing. This speed is the [member speed_scale] property multiplied by `custom_speed` argument specified when calling the [method play] method.  
         *  Returns a negative value if the current animation is playing backwards.  
         */
        getPlayingSpeed(): float64
        
        /** The [SpriteFrames] resource containing the animation(s). Allows you the option to load, edit, clear, make unique and save the states of the [SpriteFrames] resource. */
        get spriteFrames(): null | SpriteFrames
        set spriteFrames(value: null | SpriteFrames)
        
        /** The current animation from the [member sprite_frames] resource. If this value is changed, the [member frame] counter and the [member frame_progress] are reset. */
        get animation(): StringName
        set animation(value: StringName)
        
        /** The key of the animation to play when the scene loads. */
        get autoplay(): StringName
        set autoplay(value: StringName)
        
        /** The displayed animation frame's index. Setting this property also resets [member frame_progress]. If this is not desired, use [method set_frame_and_progress]. */
        get frame(): int64
        set frame(value: int64)
        
        /** The progress value between `0.0` and `1.0` until the current frame transitions to the next frame. If the animation is playing backwards, the value transitions from `1.0` to `0.0`. */
        get frameProgress(): float64
        set frameProgress(value: float64)
        
        /** The speed scaling ratio. For example, if this value is `1`, then the animation plays at normal speed. If it's `0.5`, then it plays at half speed. If it's `2`, then it plays at double speed.  
         *  If set to a negative value, the animation is played in reverse. If set to `0`, the animation will not advance.  
         */
        get speedScale(): float64
        set speedScale(value: float64)
        
        /** If `true`, texture will be centered.  
         *      
         *  **Note:** For games with a pixel art aesthetic, textures may appear deformed when centered. This is caused by their position being between pixels. To prevent this, set this property to `false`, or consider enabling [member ProjectSettings.rendering/2d/snap/snap_2d_vertices_to_pixel] and [member ProjectSettings.rendering/2d/snap/snap_2d_transforms_to_pixel].  
         */
        get centered(): boolean
        set centered(value: boolean)
        
        /** The texture's drawing offset. */
        get offset(): Vector2
        set offset(value: Vector2)
        
        /** If `true`, texture is flipped horizontally. */
        get flipH(): boolean
        set flipH(value: boolean)
        
        /** If `true`, texture is flipped vertically. */
        get flipV(): boolean
        set flipV(value: boolean)
        
        /** Emitted when [member sprite_frames] changes. */
        readonly spriteFramesChanged: Signal<() => void>
        
        /** Emitted when [member animation] changes. */
        readonly animationChanged: Signal<() => void>
        
        /** Emitted when [member frame] changes. */
        readonly frameChanged: Signal<() => void>
        
        /** Emitted when the animation loops. */
        readonly animationLooped: Signal<() => void>
        
        /** Emitted when the animation reaches the end, or the start if it is played in reverse. When the animation finishes, it pauses the playback.  
         *      
         *  **Note:** This signal is not emitted if an animation is looping.  
         */
        readonly animationFinished: Signal<() => void>
    }
    /** 2D sprite node in 3D world, that can use multiple 2D textures for animation.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_animatedsprite3d.html  
     */
    class AnimatedSprite3D<Map extends NodePathMap = any> extends SpriteBase3D<Map> {
        constructor(identifier?: any)
        /** Returns `true` if an animation is currently playing (even if [member speed_scale] and/or `custom_speed` are `0`). */
        isPlaying(): boolean
        
        /** Plays the animation with key [param name]. If [param custom_speed] is negative and [param from_end] is `true`, the animation will play backwards (which is equivalent to calling [method play_backwards]).  
         *  If this method is called with that same animation [param name], or with no [param name] parameter, the assigned animation will resume playing if it was paused.  
         */
        play(name?: StringName /* = '' */, customSpeed?: float64 /* = 1 */, fromEnd?: boolean /* = false */): void
        
        /** Plays the animation with key [param name] in reverse.  
         *  This method is a shorthand for [method play] with `custom_speed = -1.0` and `from_end = true`, so see its description for more information.  
         */
        playBackwards(name?: StringName /* = '' */): void
        
        /** Pauses the currently playing animation. The [member frame] and [member frame_progress] will be kept and calling [method play] or [method play_backwards] without arguments will resume the animation from the current playback position.  
         *  See also [method stop].  
         */
        pause(): void
        
        /** Stops the currently playing animation. The animation position is reset to `0` and the `custom_speed` is reset to `1.0`. See also [method pause]. */
        stop(): void
        
        /** Sets [member frame] and [member frame_progress] to the given values. Unlike setting [member frame], this method does not reset the [member frame_progress] to `0.0` implicitly.  
         *  **Example:** Change the animation while keeping the same [member frame] and [member frame_progress]:  
         *    
         */
        setFrameAndProgress(frame: int64, progress: float64): void
        
        /** Returns the actual playing speed of current animation or `0` if not playing. This speed is the [member speed_scale] property multiplied by `custom_speed` argument specified when calling the [method play] method.  
         *  Returns a negative value if the current animation is playing backwards.  
         */
        getPlayingSpeed(): float64
        _resChanged(): void
        
        /** The [SpriteFrames] resource containing the animation(s). Allows you the option to load, edit, clear, make unique and save the states of the [SpriteFrames] resource. */
        get spriteFrames(): null | SpriteFrames
        set spriteFrames(value: null | SpriteFrames)
        
        /** The current animation from the [member sprite_frames] resource. If this value is changed, the [member frame] counter and the [member frame_progress] are reset. */
        get animation(): StringName
        set animation(value: StringName)
        
        /** The key of the animation to play when the scene loads. */
        get autoplay(): StringName
        set autoplay(value: StringName)
        
        /** The displayed animation frame's index. Setting this property also resets [member frame_progress]. If this is not desired, use [method set_frame_and_progress]. */
        get frame(): int64
        set frame(value: int64)
        
        /** The progress value between `0.0` and `1.0` until the current frame transitions to the next frame. If the animation is playing backwards, the value transitions from `1.0` to `0.0`. */
        get frameProgress(): float64
        set frameProgress(value: float64)
        
        /** The speed scaling ratio. For example, if this value is `1`, then the animation plays at normal speed. If it's `0.5`, then it plays at half speed. If it's `2`, then it plays at double speed.  
         *  If set to a negative value, the animation is played in reverse. If set to `0`, the animation will not advance.  
         */
        get speedScale(): float64
        set speedScale(value: float64)
        
        /** Emitted when [member sprite_frames] changes. */
        readonly spriteFramesChanged: Signal<() => void>
        
        /** Emitted when [member animation] changes. */
        readonly animationChanged: Signal<() => void>
        
        /** Emitted when [member frame] changes. */
        readonly frameChanged: Signal<() => void>
        
        /** Emitted when the animation loops. */
        readonly animationLooped: Signal<() => void>
        
        /** Emitted when the animation reaches the end, or the start if it is played in reverse. When the animation finishes, it pauses the playback.  
         *      
         *  **Note:** This signal is not emitted if an animation is looping.  
         */
        readonly animationFinished: Signal<() => void>
    }
    /** Proxy texture for simple frame-based animations.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_animatedtexture.html  
     */
    class AnimatedTexture extends Texture2D {
        /** The maximum number of frames supported by [AnimatedTexture]. If you need more frames in your animation, use [AnimationPlayer] or [AnimatedSprite2D]. */
        static readonly MAX_FRAMES = 256
        constructor(identifier?: any)
        
        /** Assigns a [Texture2D] to the given frame. Frame IDs start at 0, so the first frame has ID 0, and the last frame of the animation has ID [member frames] - 1.  
         *  You can define any number of textures up to [constant MAX_FRAMES], but keep in mind that only frames from 0 to [member frames] - 1 will be part of the animation.  
         */
        setFrameTexture(frame: int64, texture: Texture2D): void
        
        /** Returns the given frame's [Texture2D]. */
        getFrameTexture(frame: int64): null | Texture2D
        
        /** Sets the duration of any given [param frame]. The final duration is affected by the [member speed_scale]. If set to `0`, the frame is skipped during playback. */
        setFrameDuration(frame: int64, duration: float64): void
        
        /** Returns the given [param frame]'s duration, in seconds. */
        getFrameDuration(frame: int64): float64
        
        /** Number of frames to use in the animation. While you can create the frames independently with [method set_frame_texture], you need to set this value for the animation to take new frames into account. The maximum number of frames is [constant MAX_FRAMES]. */
        get frames(): int64
        set frames(value: int64)
        
        /** Sets the currently visible frame of the texture. Setting this frame while playing resets the current frame time, so the newly selected frame plays for its whole configured frame duration. */
        get currentFrame(): int64
        set currentFrame(value: int64)
        
        /** If `true`, the animation will pause where it currently is (i.e. at [member current_frame]). The animation will continue from where it was paused when changing this property to `false`. */
        get pause(): boolean
        set pause(value: boolean)
        
        /** If `true`, the animation will only play once and will not loop back to the first frame after reaching the end. Note that reaching the end will not set [member pause] to `true`. */
        get oneShot(): boolean
        set oneShot(value: boolean)
        
        /** The animation speed is multiplied by this value. If set to a negative value, the animation is played in reverse. */
        get speedScale(): float64
        set speedScale(value: float64)
        get "frame0/texture"(): null | Texture2D
        set "frame0/texture"(value: null | Texture2D)
        get "frame0/duration"(): float64
        set "frame0/duration"(value: float64)
        get "frame1/texture"(): null | Texture2D
        set "frame1/texture"(value: null | Texture2D)
        get "frame1/duration"(): float64
        set "frame1/duration"(value: float64)
        get "frame2/texture"(): null | Texture2D
        set "frame2/texture"(value: null | Texture2D)
        get "frame2/duration"(): float64
        set "frame2/duration"(value: float64)
        get "frame3/texture"(): null | Texture2D
        set "frame3/texture"(value: null | Texture2D)
        get "frame3/duration"(): float64
        set "frame3/duration"(value: float64)
        get "frame4/texture"(): null | Texture2D
        set "frame4/texture"(value: null | Texture2D)
        get "frame4/duration"(): float64
        set "frame4/duration"(value: float64)
        get "frame5/texture"(): null | Texture2D
        set "frame5/texture"(value: null | Texture2D)
        get "frame5/duration"(): float64
        set "frame5/duration"(value: float64)
        get "frame6/texture"(): null | Texture2D
        set "frame6/texture"(value: null | Texture2D)
        get "frame6/duration"(): float64
        set "frame6/duration"(value: float64)
        get "frame7/texture"(): null | Texture2D
        set "frame7/texture"(value: null | Texture2D)
        get "frame7/duration"(): float64
        set "frame7/duration"(value: float64)
        get "frame8/texture"(): null | Texture2D
        set "frame8/texture"(value: null | Texture2D)
        get "frame8/duration"(): float64
        set "frame8/duration"(value: float64)
        get "frame9/texture"(): null | Texture2D
        set "frame9/texture"(value: null | Texture2D)
        get "frame9/duration"(): float64
        set "frame9/duration"(value: float64)
        get "frame10/texture"(): null | Texture2D
        set "frame10/texture"(value: null | Texture2D)
        get "frame10/duration"(): float64
        set "frame10/duration"(value: float64)
        get "frame11/texture"(): null | Texture2D
        set "frame11/texture"(value: null | Texture2D)
        get "frame11/duration"(): float64
        set "frame11/duration"(value: float64)
        get "frame12/texture"(): null | Texture2D
        set "frame12/texture"(value: null | Texture2D)
        get "frame12/duration"(): float64
        set "frame12/duration"(value: float64)
        get "frame13/texture"(): null | Texture2D
        set "frame13/texture"(value: null | Texture2D)
        get "frame13/duration"(): float64
        set "frame13/duration"(value: float64)
        get "frame14/texture"(): null | Texture2D
        set "frame14/texture"(value: null | Texture2D)
        get "frame14/duration"(): float64
        set "frame14/duration"(value: float64)
        get "frame15/texture"(): null | Texture2D
        set "frame15/texture"(value: null | Texture2D)
        get "frame15/duration"(): float64
        set "frame15/duration"(value: float64)
        get "frame16/texture"(): null | Texture2D
        set "frame16/texture"(value: null | Texture2D)
        get "frame16/duration"(): float64
        set "frame16/duration"(value: float64)
        get "frame17/texture"(): null | Texture2D
        set "frame17/texture"(value: null | Texture2D)
        get "frame17/duration"(): float64
        set "frame17/duration"(value: float64)
        get "frame18/texture"(): null | Texture2D
        set "frame18/texture"(value: null | Texture2D)
        get "frame18/duration"(): float64
        set "frame18/duration"(value: float64)
        get "frame19/texture"(): null | Texture2D
        set "frame19/texture"(value: null | Texture2D)
        get "frame19/duration"(): float64
        set "frame19/duration"(value: float64)
        get "frame20/texture"(): null | Texture2D
        set "frame20/texture"(value: null | Texture2D)
        get "frame20/duration"(): float64
        set "frame20/duration"(value: float64)
        get "frame21/texture"(): null | Texture2D
        set "frame21/texture"(value: null | Texture2D)
        get "frame21/duration"(): float64
        set "frame21/duration"(value: float64)
        get "frame22/texture"(): null | Texture2D
        set "frame22/texture"(value: null | Texture2D)
        get "frame22/duration"(): float64
        set "frame22/duration"(value: float64)
        get "frame23/texture"(): null | Texture2D
        set "frame23/texture"(value: null | Texture2D)
        get "frame23/duration"(): float64
        set "frame23/duration"(value: float64)
        get "frame24/texture"(): null | Texture2D
        set "frame24/texture"(value: null | Texture2D)
        get "frame24/duration"(): float64
        set "frame24/duration"(value: float64)
        get "frame25/texture"(): null | Texture2D
        set "frame25/texture"(value: null | Texture2D)
        get "frame25/duration"(): float64
        set "frame25/duration"(value: float64)
        get "frame26/texture"(): null | Texture2D
        set "frame26/texture"(value: null | Texture2D)
        get "frame26/duration"(): float64
        set "frame26/duration"(value: float64)
        get "frame27/texture"(): null | Texture2D
        set "frame27/texture"(value: null | Texture2D)
        get "frame27/duration"(): float64
        set "frame27/duration"(value: float64)
        get "frame28/texture"(): null | Texture2D
        set "frame28/texture"(value: null | Texture2D)
        get "frame28/duration"(): float64
        set "frame28/duration"(value: float64)
        get "frame29/texture"(): null | Texture2D
        set "frame29/texture"(value: null | Texture2D)
        get "frame29/duration"(): float64
        set "frame29/duration"(value: float64)
        get "frame30/texture"(): null | Texture2D
        set "frame30/texture"(value: null | Texture2D)
        get "frame30/duration"(): float64
        set "frame30/duration"(value: float64)
        get "frame31/texture"(): null | Texture2D
        set "frame31/texture"(value: null | Texture2D)
        get "frame31/duration"(): float64
        set "frame31/duration"(value: float64)
        get "frame32/texture"(): null | Texture2D
        set "frame32/texture"(value: null | Texture2D)
        get "frame32/duration"(): float64
        set "frame32/duration"(value: float64)
        get "frame33/texture"(): null | Texture2D
        set "frame33/texture"(value: null | Texture2D)
        get "frame33/duration"(): float64
        set "frame33/duration"(value: float64)
        get "frame34/texture"(): null | Texture2D
        set "frame34/texture"(value: null | Texture2D)
        get "frame34/duration"(): float64
        set "frame34/duration"(value: float64)
        get "frame35/texture"(): null | Texture2D
        set "frame35/texture"(value: null | Texture2D)
        get "frame35/duration"(): float64
        set "frame35/duration"(value: float64)
        get "frame36/texture"(): null | Texture2D
        set "frame36/texture"(value: null | Texture2D)
        get "frame36/duration"(): float64
        set "frame36/duration"(value: float64)
        get "frame37/texture"(): null | Texture2D
        set "frame37/texture"(value: null | Texture2D)
        get "frame37/duration"(): float64
        set "frame37/duration"(value: float64)
        get "frame38/texture"(): null | Texture2D
        set "frame38/texture"(value: null | Texture2D)
        get "frame38/duration"(): float64
        set "frame38/duration"(value: float64)
        get "frame39/texture"(): null | Texture2D
        set "frame39/texture"(value: null | Texture2D)
        get "frame39/duration"(): float64
        set "frame39/duration"(value: float64)
        get "frame40/texture"(): null | Texture2D
        set "frame40/texture"(value: null | Texture2D)
        get "frame40/duration"(): float64
        set "frame40/duration"(value: float64)
        get "frame41/texture"(): null | Texture2D
        set "frame41/texture"(value: null | Texture2D)
        get "frame41/duration"(): float64
        set "frame41/duration"(value: float64)
        get "frame42/texture"(): null | Texture2D
        set "frame42/texture"(value: null | Texture2D)
        get "frame42/duration"(): float64
        set "frame42/duration"(value: float64)
        get "frame43/texture"(): null | Texture2D
        set "frame43/texture"(value: null | Texture2D)
        get "frame43/duration"(): float64
        set "frame43/duration"(value: float64)
        get "frame44/texture"(): null | Texture2D
        set "frame44/texture"(value: null | Texture2D)
        get "frame44/duration"(): float64
        set "frame44/duration"(value: float64)
        get "frame45/texture"(): null | Texture2D
        set "frame45/texture"(value: null | Texture2D)
        get "frame45/duration"(): float64
        set "frame45/duration"(value: float64)
        get "frame46/texture"(): null | Texture2D
        set "frame46/texture"(value: null | Texture2D)
        get "frame46/duration"(): float64
        set "frame46/duration"(value: float64)
        get "frame47/texture"(): null | Texture2D
        set "frame47/texture"(value: null | Texture2D)
        get "frame47/duration"(): float64
        set "frame47/duration"(value: float64)
        get "frame48/texture"(): null | Texture2D
        set "frame48/texture"(value: null | Texture2D)
        get "frame48/duration"(): float64
        set "frame48/duration"(value: float64)
        get "frame49/texture"(): null | Texture2D
        set "frame49/texture"(value: null | Texture2D)
        get "frame49/duration"(): float64
        set "frame49/duration"(value: float64)
        get "frame50/texture"(): null | Texture2D
        set "frame50/texture"(value: null | Texture2D)
        get "frame50/duration"(): float64
        set "frame50/duration"(value: float64)
        get "frame51/texture"(): null | Texture2D
        set "frame51/texture"(value: null | Texture2D)
        get "frame51/duration"(): float64
        set "frame51/duration"(value: float64)
        get "frame52/texture"(): null | Texture2D
        set "frame52/texture"(value: null | Texture2D)
        get "frame52/duration"(): float64
        set "frame52/duration"(value: float64)
        get "frame53/texture"(): null | Texture2D
        set "frame53/texture"(value: null | Texture2D)
        get "frame53/duration"(): float64
        set "frame53/duration"(value: float64)
        get "frame54/texture"(): null | Texture2D
        set "frame54/texture"(value: null | Texture2D)
        get "frame54/duration"(): float64
        set "frame54/duration"(value: float64)
        get "frame55/texture"(): null | Texture2D
        set "frame55/texture"(value: null | Texture2D)
        get "frame55/duration"(): float64
        set "frame55/duration"(value: float64)
        get "frame56/texture"(): null | Texture2D
        set "frame56/texture"(value: null | Texture2D)
        get "frame56/duration"(): float64
        set "frame56/duration"(value: float64)
        get "frame57/texture"(): null | Texture2D
        set "frame57/texture"(value: null | Texture2D)
        get "frame57/duration"(): float64
        set "frame57/duration"(value: float64)
        get "frame58/texture"(): null | Texture2D
        set "frame58/texture"(value: null | Texture2D)
        get "frame58/duration"(): float64
        set "frame58/duration"(value: float64)
        get "frame59/texture"(): null | Texture2D
        set "frame59/texture"(value: null | Texture2D)
        get "frame59/duration"(): float64
        set "frame59/duration"(value: float64)
        get "frame60/texture"(): null | Texture2D
        set "frame60/texture"(value: null | Texture2D)
        get "frame60/duration"(): float64
        set "frame60/duration"(value: float64)
        get "frame61/texture"(): null | Texture2D
        set "frame61/texture"(value: null | Texture2D)
        get "frame61/duration"(): float64
        set "frame61/duration"(value: float64)
        get "frame62/texture"(): null | Texture2D
        set "frame62/texture"(value: null | Texture2D)
        get "frame62/duration"(): float64
        set "frame62/duration"(value: float64)
        get "frame63/texture"(): null | Texture2D
        set "frame63/texture"(value: null | Texture2D)
        get "frame63/duration"(): float64
        set "frame63/duration"(value: float64)
        get "frame64/texture"(): null | Texture2D
        set "frame64/texture"(value: null | Texture2D)
        get "frame64/duration"(): float64
        set "frame64/duration"(value: float64)
        get "frame65/texture"(): null | Texture2D
        set "frame65/texture"(value: null | Texture2D)
        get "frame65/duration"(): float64
        set "frame65/duration"(value: float64)
        get "frame66/texture"(): null | Texture2D
        set "frame66/texture"(value: null | Texture2D)
        get "frame66/duration"(): float64
        set "frame66/duration"(value: float64)
        get "frame67/texture"(): null | Texture2D
        set "frame67/texture"(value: null | Texture2D)
        get "frame67/duration"(): float64
        set "frame67/duration"(value: float64)
        get "frame68/texture"(): null | Texture2D
        set "frame68/texture"(value: null | Texture2D)
        get "frame68/duration"(): float64
        set "frame68/duration"(value: float64)
        get "frame69/texture"(): null | Texture2D
        set "frame69/texture"(value: null | Texture2D)
        get "frame69/duration"(): float64
        set "frame69/duration"(value: float64)
        get "frame70/texture"(): null | Texture2D
        set "frame70/texture"(value: null | Texture2D)
        get "frame70/duration"(): float64
        set "frame70/duration"(value: float64)
        get "frame71/texture"(): null | Texture2D
        set "frame71/texture"(value: null | Texture2D)
        get "frame71/duration"(): float64
        set "frame71/duration"(value: float64)
        get "frame72/texture"(): null | Texture2D
        set "frame72/texture"(value: null | Texture2D)
        get "frame72/duration"(): float64
        set "frame72/duration"(value: float64)
        get "frame73/texture"(): null | Texture2D
        set "frame73/texture"(value: null | Texture2D)
        get "frame73/duration"(): float64
        set "frame73/duration"(value: float64)
        get "frame74/texture"(): null | Texture2D
        set "frame74/texture"(value: null | Texture2D)
        get "frame74/duration"(): float64
        set "frame74/duration"(value: float64)
        get "frame75/texture"(): null | Texture2D
        set "frame75/texture"(value: null | Texture2D)
        get "frame75/duration"(): float64
        set "frame75/duration"(value: float64)
        get "frame76/texture"(): null | Texture2D
        set "frame76/texture"(value: null | Texture2D)
        get "frame76/duration"(): float64
        set "frame76/duration"(value: float64)
        get "frame77/texture"(): null | Texture2D
        set "frame77/texture"(value: null | Texture2D)
        get "frame77/duration"(): float64
        set "frame77/duration"(value: float64)
        get "frame78/texture"(): null | Texture2D
        set "frame78/texture"(value: null | Texture2D)
        get "frame78/duration"(): float64
        set "frame78/duration"(value: float64)
        get "frame79/texture"(): null | Texture2D
        set "frame79/texture"(value: null | Texture2D)
        get "frame79/duration"(): float64
        set "frame79/duration"(value: float64)
        get "frame80/texture"(): null | Texture2D
        set "frame80/texture"(value: null | Texture2D)
        get "frame80/duration"(): float64
        set "frame80/duration"(value: float64)
        get "frame81/texture"(): null | Texture2D
        set "frame81/texture"(value: null | Texture2D)
        get "frame81/duration"(): float64
        set "frame81/duration"(value: float64)
        get "frame82/texture"(): null | Texture2D
        set "frame82/texture"(value: null | Texture2D)
        get "frame82/duration"(): float64
        set "frame82/duration"(value: float64)
        get "frame83/texture"(): null | Texture2D
        set "frame83/texture"(value: null | Texture2D)
        get "frame83/duration"(): float64
        set "frame83/duration"(value: float64)
        get "frame84/texture"(): null | Texture2D
        set "frame84/texture"(value: null | Texture2D)
        get "frame84/duration"(): float64
        set "frame84/duration"(value: float64)
        get "frame85/texture"(): null | Texture2D
        set "frame85/texture"(value: null | Texture2D)
        get "frame85/duration"(): float64
        set "frame85/duration"(value: float64)
        get "frame86/texture"(): null | Texture2D
        set "frame86/texture"(value: null | Texture2D)
        get "frame86/duration"(): float64
        set "frame86/duration"(value: float64)
        get "frame87/texture"(): null | Texture2D
        set "frame87/texture"(value: null | Texture2D)
        get "frame87/duration"(): float64
        set "frame87/duration"(value: float64)
        get "frame88/texture"(): null | Texture2D
        set "frame88/texture"(value: null | Texture2D)
        get "frame88/duration"(): float64
        set "frame88/duration"(value: float64)
        get "frame89/texture"(): null | Texture2D
        set "frame89/texture"(value: null | Texture2D)
        get "frame89/duration"(): float64
        set "frame89/duration"(value: float64)
        get "frame90/texture"(): null | Texture2D
        set "frame90/texture"(value: null | Texture2D)
        get "frame90/duration"(): float64
        set "frame90/duration"(value: float64)
        get "frame91/texture"(): null | Texture2D
        set "frame91/texture"(value: null | Texture2D)
        get "frame91/duration"(): float64
        set "frame91/duration"(value: float64)
        get "frame92/texture"(): null | Texture2D
        set "frame92/texture"(value: null | Texture2D)
        get "frame92/duration"(): float64
        set "frame92/duration"(value: float64)
        get "frame93/texture"(): null | Texture2D
        set "frame93/texture"(value: null | Texture2D)
        get "frame93/duration"(): float64
        set "frame93/duration"(value: float64)
        get "frame94/texture"(): null | Texture2D
        set "frame94/texture"(value: null | Texture2D)
        get "frame94/duration"(): float64
        set "frame94/duration"(value: float64)
        get "frame95/texture"(): null | Texture2D
        set "frame95/texture"(value: null | Texture2D)
        get "frame95/duration"(): float64
        set "frame95/duration"(value: float64)
        get "frame96/texture"(): null | Texture2D
        set "frame96/texture"(value: null | Texture2D)
        get "frame96/duration"(): float64
        set "frame96/duration"(value: float64)
        get "frame97/texture"(): null | Texture2D
        set "frame97/texture"(value: null | Texture2D)
        get "frame97/duration"(): float64
        set "frame97/duration"(value: float64)
        get "frame98/texture"(): null | Texture2D
        set "frame98/texture"(value: null | Texture2D)
        get "frame98/duration"(): float64
        set "frame98/duration"(value: float64)
        get "frame99/texture"(): null | Texture2D
        set "frame99/texture"(value: null | Texture2D)
        get "frame99/duration"(): float64
        set "frame99/duration"(value: float64)
        get "frame100/texture"(): null | Texture2D
        set "frame100/texture"(value: null | Texture2D)
        get "frame100/duration"(): float64
        set "frame100/duration"(value: float64)
        get "frame101/texture"(): null | Texture2D
        set "frame101/texture"(value: null | Texture2D)
        get "frame101/duration"(): float64
        set "frame101/duration"(value: float64)
        get "frame102/texture"(): null | Texture2D
        set "frame102/texture"(value: null | Texture2D)
        get "frame102/duration"(): float64
        set "frame102/duration"(value: float64)
        get "frame103/texture"(): null | Texture2D
        set "frame103/texture"(value: null | Texture2D)
        get "frame103/duration"(): float64
        set "frame103/duration"(value: float64)
        get "frame104/texture"(): null | Texture2D
        set "frame104/texture"(value: null | Texture2D)
        get "frame104/duration"(): float64
        set "frame104/duration"(value: float64)
        get "frame105/texture"(): null | Texture2D
        set "frame105/texture"(value: null | Texture2D)
        get "frame105/duration"(): float64
        set "frame105/duration"(value: float64)
        get "frame106/texture"(): null | Texture2D
        set "frame106/texture"(value: null | Texture2D)
        get "frame106/duration"(): float64
        set "frame106/duration"(value: float64)
        get "frame107/texture"(): null | Texture2D
        set "frame107/texture"(value: null | Texture2D)
        get "frame107/duration"(): float64
        set "frame107/duration"(value: float64)
        get "frame108/texture"(): null | Texture2D
        set "frame108/texture"(value: null | Texture2D)
        get "frame108/duration"(): float64
        set "frame108/duration"(value: float64)
        get "frame109/texture"(): null | Texture2D
        set "frame109/texture"(value: null | Texture2D)
        get "frame109/duration"(): float64
        set "frame109/duration"(value: float64)
        get "frame110/texture"(): null | Texture2D
        set "frame110/texture"(value: null | Texture2D)
        get "frame110/duration"(): float64
        set "frame110/duration"(value: float64)
        get "frame111/texture"(): null | Texture2D
        set "frame111/texture"(value: null | Texture2D)
        get "frame111/duration"(): float64
        set "frame111/duration"(value: float64)
        get "frame112/texture"(): null | Texture2D
        set "frame112/texture"(value: null | Texture2D)
        get "frame112/duration"(): float64
        set "frame112/duration"(value: float64)
        get "frame113/texture"(): null | Texture2D
        set "frame113/texture"(value: null | Texture2D)
        get "frame113/duration"(): float64
        set "frame113/duration"(value: float64)
        get "frame114/texture"(): null | Texture2D
        set "frame114/texture"(value: null | Texture2D)
        get "frame114/duration"(): float64
        set "frame114/duration"(value: float64)
        get "frame115/texture"(): null | Texture2D
        set "frame115/texture"(value: null | Texture2D)
        get "frame115/duration"(): float64
        set "frame115/duration"(value: float64)
        get "frame116/texture"(): null | Texture2D
        set "frame116/texture"(value: null | Texture2D)
        get "frame116/duration"(): float64
        set "frame116/duration"(value: float64)
        get "frame117/texture"(): null | Texture2D
        set "frame117/texture"(value: null | Texture2D)
        get "frame117/duration"(): float64
        set "frame117/duration"(value: float64)
        get "frame118/texture"(): null | Texture2D
        set "frame118/texture"(value: null | Texture2D)
        get "frame118/duration"(): float64
        set "frame118/duration"(value: float64)
        get "frame119/texture"(): null | Texture2D
        set "frame119/texture"(value: null | Texture2D)
        get "frame119/duration"(): float64
        set "frame119/duration"(value: float64)
        get "frame120/texture"(): null | Texture2D
        set "frame120/texture"(value: null | Texture2D)
        get "frame120/duration"(): float64
        set "frame120/duration"(value: float64)
        get "frame121/texture"(): null | Texture2D
        set "frame121/texture"(value: null | Texture2D)
        get "frame121/duration"(): float64
        set "frame121/duration"(value: float64)
        get "frame122/texture"(): null | Texture2D
        set "frame122/texture"(value: null | Texture2D)
        get "frame122/duration"(): float64
        set "frame122/duration"(value: float64)
        get "frame123/texture"(): null | Texture2D
        set "frame123/texture"(value: null | Texture2D)
        get "frame123/duration"(): float64
        set "frame123/duration"(value: float64)
        get "frame124/texture"(): null | Texture2D
        set "frame124/texture"(value: null | Texture2D)
        get "frame124/duration"(): float64
        set "frame124/duration"(value: float64)
        get "frame125/texture"(): null | Texture2D
        set "frame125/texture"(value: null | Texture2D)
        get "frame125/duration"(): float64
        set "frame125/duration"(value: float64)
        get "frame126/texture"(): null | Texture2D
        set "frame126/texture"(value: null | Texture2D)
        get "frame126/duration"(): float64
        set "frame126/duration"(value: float64)
        get "frame127/texture"(): null | Texture2D
        set "frame127/texture"(value: null | Texture2D)
        get "frame127/duration"(): float64
        set "frame127/duration"(value: float64)
        get "frame128/texture"(): null | Texture2D
        set "frame128/texture"(value: null | Texture2D)
        get "frame128/duration"(): float64
        set "frame128/duration"(value: float64)
        get "frame129/texture"(): null | Texture2D
        set "frame129/texture"(value: null | Texture2D)
        get "frame129/duration"(): float64
        set "frame129/duration"(value: float64)
        get "frame130/texture"(): null | Texture2D
        set "frame130/texture"(value: null | Texture2D)
        get "frame130/duration"(): float64
        set "frame130/duration"(value: float64)
        get "frame131/texture"(): null | Texture2D
        set "frame131/texture"(value: null | Texture2D)
        get "frame131/duration"(): float64
        set "frame131/duration"(value: float64)
        get "frame132/texture"(): null | Texture2D
        set "frame132/texture"(value: null | Texture2D)
        get "frame132/duration"(): float64
        set "frame132/duration"(value: float64)
        get "frame133/texture"(): null | Texture2D
        set "frame133/texture"(value: null | Texture2D)
        get "frame133/duration"(): float64
        set "frame133/duration"(value: float64)
        get "frame134/texture"(): null | Texture2D
        set "frame134/texture"(value: null | Texture2D)
        get "frame134/duration"(): float64
        set "frame134/duration"(value: float64)
        get "frame135/texture"(): null | Texture2D
        set "frame135/texture"(value: null | Texture2D)
        get "frame135/duration"(): float64
        set "frame135/duration"(value: float64)
        get "frame136/texture"(): null | Texture2D
        set "frame136/texture"(value: null | Texture2D)
        get "frame136/duration"(): float64
        set "frame136/duration"(value: float64)
        get "frame137/texture"(): null | Texture2D
        set "frame137/texture"(value: null | Texture2D)
        get "frame137/duration"(): float64
        set "frame137/duration"(value: float64)
        get "frame138/texture"(): null | Texture2D
        set "frame138/texture"(value: null | Texture2D)
        get "frame138/duration"(): float64
        set "frame138/duration"(value: float64)
        get "frame139/texture"(): null | Texture2D
        set "frame139/texture"(value: null | Texture2D)
        get "frame139/duration"(): float64
        set "frame139/duration"(value: float64)
        get "frame140/texture"(): null | Texture2D
        set "frame140/texture"(value: null | Texture2D)
        get "frame140/duration"(): float64
        set "frame140/duration"(value: float64)
        get "frame141/texture"(): null | Texture2D
        set "frame141/texture"(value: null | Texture2D)
        get "frame141/duration"(): float64
        set "frame141/duration"(value: float64)
        get "frame142/texture"(): null | Texture2D
        set "frame142/texture"(value: null | Texture2D)
        get "frame142/duration"(): float64
        set "frame142/duration"(value: float64)
        get "frame143/texture"(): null | Texture2D
        set "frame143/texture"(value: null | Texture2D)
        get "frame143/duration"(): float64
        set "frame143/duration"(value: float64)
        get "frame144/texture"(): null | Texture2D
        set "frame144/texture"(value: null | Texture2D)
        get "frame144/duration"(): float64
        set "frame144/duration"(value: float64)
        get "frame145/texture"(): null | Texture2D
        set "frame145/texture"(value: null | Texture2D)
        get "frame145/duration"(): float64
        set "frame145/duration"(value: float64)
        get "frame146/texture"(): null | Texture2D
        set "frame146/texture"(value: null | Texture2D)
        get "frame146/duration"(): float64
        set "frame146/duration"(value: float64)
        get "frame147/texture"(): null | Texture2D
        set "frame147/texture"(value: null | Texture2D)
        get "frame147/duration"(): float64
        set "frame147/duration"(value: float64)
        get "frame148/texture"(): null | Texture2D
        set "frame148/texture"(value: null | Texture2D)
        get "frame148/duration"(): float64
        set "frame148/duration"(value: float64)
        get "frame149/texture"(): null | Texture2D
        set "frame149/texture"(value: null | Texture2D)
        get "frame149/duration"(): float64
        set "frame149/duration"(value: float64)
        get "frame150/texture"(): null | Texture2D
        set "frame150/texture"(value: null | Texture2D)
        get "frame150/duration"(): float64
        set "frame150/duration"(value: float64)
        get "frame151/texture"(): null | Texture2D
        set "frame151/texture"(value: null | Texture2D)
        get "frame151/duration"(): float64
        set "frame151/duration"(value: float64)
        get "frame152/texture"(): null | Texture2D
        set "frame152/texture"(value: null | Texture2D)
        get "frame152/duration"(): float64
        set "frame152/duration"(value: float64)
        get "frame153/texture"(): null | Texture2D
        set "frame153/texture"(value: null | Texture2D)
        get "frame153/duration"(): float64
        set "frame153/duration"(value: float64)
        get "frame154/texture"(): null | Texture2D
        set "frame154/texture"(value: null | Texture2D)
        get "frame154/duration"(): float64
        set "frame154/duration"(value: float64)
        get "frame155/texture"(): null | Texture2D
        set "frame155/texture"(value: null | Texture2D)
        get "frame155/duration"(): float64
        set "frame155/duration"(value: float64)
        get "frame156/texture"(): null | Texture2D
        set "frame156/texture"(value: null | Texture2D)
        get "frame156/duration"(): float64
        set "frame156/duration"(value: float64)
        get "frame157/texture"(): null | Texture2D
        set "frame157/texture"(value: null | Texture2D)
        get "frame157/duration"(): float64
        set "frame157/duration"(value: float64)
        get "frame158/texture"(): null | Texture2D
        set "frame158/texture"(value: null | Texture2D)
        get "frame158/duration"(): float64
        set "frame158/duration"(value: float64)
        get "frame159/texture"(): null | Texture2D
        set "frame159/texture"(value: null | Texture2D)
        get "frame159/duration"(): float64
        set "frame159/duration"(value: float64)
        get "frame160/texture"(): null | Texture2D
        set "frame160/texture"(value: null | Texture2D)
        get "frame160/duration"(): float64
        set "frame160/duration"(value: float64)
        get "frame161/texture"(): null | Texture2D
        set "frame161/texture"(value: null | Texture2D)
        get "frame161/duration"(): float64
        set "frame161/duration"(value: float64)
        get "frame162/texture"(): null | Texture2D
        set "frame162/texture"(value: null | Texture2D)
        get "frame162/duration"(): float64
        set "frame162/duration"(value: float64)
        get "frame163/texture"(): null | Texture2D
        set "frame163/texture"(value: null | Texture2D)
        get "frame163/duration"(): float64
        set "frame163/duration"(value: float64)
        get "frame164/texture"(): null | Texture2D
        set "frame164/texture"(value: null | Texture2D)
        get "frame164/duration"(): float64
        set "frame164/duration"(value: float64)
        get "frame165/texture"(): null | Texture2D
        set "frame165/texture"(value: null | Texture2D)
        get "frame165/duration"(): float64
        set "frame165/duration"(value: float64)
        get "frame166/texture"(): null | Texture2D
        set "frame166/texture"(value: null | Texture2D)
        get "frame166/duration"(): float64
        set "frame166/duration"(value: float64)
        get "frame167/texture"(): null | Texture2D
        set "frame167/texture"(value: null | Texture2D)
        get "frame167/duration"(): float64
        set "frame167/duration"(value: float64)
        get "frame168/texture"(): null | Texture2D
        set "frame168/texture"(value: null | Texture2D)
        get "frame168/duration"(): float64
        set "frame168/duration"(value: float64)
        get "frame169/texture"(): null | Texture2D
        set "frame169/texture"(value: null | Texture2D)
        get "frame169/duration"(): float64
        set "frame169/duration"(value: float64)
        get "frame170/texture"(): null | Texture2D
        set "frame170/texture"(value: null | Texture2D)
        get "frame170/duration"(): float64
        set "frame170/duration"(value: float64)
        get "frame171/texture"(): null | Texture2D
        set "frame171/texture"(value: null | Texture2D)
        get "frame171/duration"(): float64
        set "frame171/duration"(value: float64)
        get "frame172/texture"(): null | Texture2D
        set "frame172/texture"(value: null | Texture2D)
        get "frame172/duration"(): float64
        set "frame172/duration"(value: float64)
        get "frame173/texture"(): null | Texture2D
        set "frame173/texture"(value: null | Texture2D)
        get "frame173/duration"(): float64
        set "frame173/duration"(value: float64)
        get "frame174/texture"(): null | Texture2D
        set "frame174/texture"(value: null | Texture2D)
        get "frame174/duration"(): float64
        set "frame174/duration"(value: float64)
        get "frame175/texture"(): null | Texture2D
        set "frame175/texture"(value: null | Texture2D)
        get "frame175/duration"(): float64
        set "frame175/duration"(value: float64)
        get "frame176/texture"(): null | Texture2D
        set "frame176/texture"(value: null | Texture2D)
        get "frame176/duration"(): float64
        set "frame176/duration"(value: float64)
        get "frame177/texture"(): null | Texture2D
        set "frame177/texture"(value: null | Texture2D)
        get "frame177/duration"(): float64
        set "frame177/duration"(value: float64)
        get "frame178/texture"(): null | Texture2D
        set "frame178/texture"(value: null | Texture2D)
        get "frame178/duration"(): float64
        set "frame178/duration"(value: float64)
        get "frame179/texture"(): null | Texture2D
        set "frame179/texture"(value: null | Texture2D)
        get "frame179/duration"(): float64
        set "frame179/duration"(value: float64)
        get "frame180/texture"(): null | Texture2D
        set "frame180/texture"(value: null | Texture2D)
        get "frame180/duration"(): float64
        set "frame180/duration"(value: float64)
        get "frame181/texture"(): null | Texture2D
        set "frame181/texture"(value: null | Texture2D)
        get "frame181/duration"(): float64
        set "frame181/duration"(value: float64)
        get "frame182/texture"(): null | Texture2D
        set "frame182/texture"(value: null | Texture2D)
        get "frame182/duration"(): float64
        set "frame182/duration"(value: float64)
        get "frame183/texture"(): null | Texture2D
        set "frame183/texture"(value: null | Texture2D)
        get "frame183/duration"(): float64
        set "frame183/duration"(value: float64)
        get "frame184/texture"(): null | Texture2D
        set "frame184/texture"(value: null | Texture2D)
        get "frame184/duration"(): float64
        set "frame184/duration"(value: float64)
        get "frame185/texture"(): null | Texture2D
        set "frame185/texture"(value: null | Texture2D)
        get "frame185/duration"(): float64
        set "frame185/duration"(value: float64)
        get "frame186/texture"(): null | Texture2D
        set "frame186/texture"(value: null | Texture2D)
        get "frame186/duration"(): float64
        set "frame186/duration"(value: float64)
        get "frame187/texture"(): null | Texture2D
        set "frame187/texture"(value: null | Texture2D)
        get "frame187/duration"(): float64
        set "frame187/duration"(value: float64)
        get "frame188/texture"(): null | Texture2D
        set "frame188/texture"(value: null | Texture2D)
        get "frame188/duration"(): float64
        set "frame188/duration"(value: float64)
        get "frame189/texture"(): null | Texture2D
        set "frame189/texture"(value: null | Texture2D)
        get "frame189/duration"(): float64
        set "frame189/duration"(value: float64)
        get "frame190/texture"(): null | Texture2D
        set "frame190/texture"(value: null | Texture2D)
        get "frame190/duration"(): float64
        set "frame190/duration"(value: float64)
        get "frame191/texture"(): null | Texture2D
        set "frame191/texture"(value: null | Texture2D)
        get "frame191/duration"(): float64
        set "frame191/duration"(value: float64)
        get "frame192/texture"(): null | Texture2D
        set "frame192/texture"(value: null | Texture2D)
        get "frame192/duration"(): float64
        set "frame192/duration"(value: float64)
        get "frame193/texture"(): null | Texture2D
        set "frame193/texture"(value: null | Texture2D)
        get "frame193/duration"(): float64
        set "frame193/duration"(value: float64)
        get "frame194/texture"(): null | Texture2D
        set "frame194/texture"(value: null | Texture2D)
        get "frame194/duration"(): float64
        set "frame194/duration"(value: float64)
        get "frame195/texture"(): null | Texture2D
        set "frame195/texture"(value: null | Texture2D)
        get "frame195/duration"(): float64
        set "frame195/duration"(value: float64)
        get "frame196/texture"(): null | Texture2D
        set "frame196/texture"(value: null | Texture2D)
        get "frame196/duration"(): float64
        set "frame196/duration"(value: float64)
        get "frame197/texture"(): null | Texture2D
        set "frame197/texture"(value: null | Texture2D)
        get "frame197/duration"(): float64
        set "frame197/duration"(value: float64)
        get "frame198/texture"(): null | Texture2D
        set "frame198/texture"(value: null | Texture2D)
        get "frame198/duration"(): float64
        set "frame198/duration"(value: float64)
        get "frame199/texture"(): null | Texture2D
        set "frame199/texture"(value: null | Texture2D)
        get "frame199/duration"(): float64
        set "frame199/duration"(value: float64)
        get "frame200/texture"(): null | Texture2D
        set "frame200/texture"(value: null | Texture2D)
        get "frame200/duration"(): float64
        set "frame200/duration"(value: float64)
        get "frame201/texture"(): null | Texture2D
        set "frame201/texture"(value: null | Texture2D)
        get "frame201/duration"(): float64
        set "frame201/duration"(value: float64)
        get "frame202/texture"(): null | Texture2D
        set "frame202/texture"(value: null | Texture2D)
        get "frame202/duration"(): float64
        set "frame202/duration"(value: float64)
        get "frame203/texture"(): null | Texture2D
        set "frame203/texture"(value: null | Texture2D)
        get "frame203/duration"(): float64
        set "frame203/duration"(value: float64)
        get "frame204/texture"(): null | Texture2D
        set "frame204/texture"(value: null | Texture2D)
        get "frame204/duration"(): float64
        set "frame204/duration"(value: float64)
        get "frame205/texture"(): null | Texture2D
        set "frame205/texture"(value: null | Texture2D)
        get "frame205/duration"(): float64
        set "frame205/duration"(value: float64)
        get "frame206/texture"(): null | Texture2D
        set "frame206/texture"(value: null | Texture2D)
        get "frame206/duration"(): float64
        set "frame206/duration"(value: float64)
        get "frame207/texture"(): null | Texture2D
        set "frame207/texture"(value: null | Texture2D)
        get "frame207/duration"(): float64
        set "frame207/duration"(value: float64)
        get "frame208/texture"(): null | Texture2D
        set "frame208/texture"(value: null | Texture2D)
        get "frame208/duration"(): float64
        set "frame208/duration"(value: float64)
        get "frame209/texture"(): null | Texture2D
        set "frame209/texture"(value: null | Texture2D)
        get "frame209/duration"(): float64
        set "frame209/duration"(value: float64)
        get "frame210/texture"(): null | Texture2D
        set "frame210/texture"(value: null | Texture2D)
        get "frame210/duration"(): float64
        set "frame210/duration"(value: float64)
        get "frame211/texture"(): null | Texture2D
        set "frame211/texture"(value: null | Texture2D)
        get "frame211/duration"(): float64
        set "frame211/duration"(value: float64)
        get "frame212/texture"(): null | Texture2D
        set "frame212/texture"(value: null | Texture2D)
        get "frame212/duration"(): float64
        set "frame212/duration"(value: float64)
        get "frame213/texture"(): null | Texture2D
        set "frame213/texture"(value: null | Texture2D)
        get "frame213/duration"(): float64
        set "frame213/duration"(value: float64)
        get "frame214/texture"(): null | Texture2D
        set "frame214/texture"(value: null | Texture2D)
        get "frame214/duration"(): float64
        set "frame214/duration"(value: float64)
        get "frame215/texture"(): null | Texture2D
        set "frame215/texture"(value: null | Texture2D)
        get "frame215/duration"(): float64
        set "frame215/duration"(value: float64)
        get "frame216/texture"(): null | Texture2D
        set "frame216/texture"(value: null | Texture2D)
        get "frame216/duration"(): float64
        set "frame216/duration"(value: float64)
        get "frame217/texture"(): null | Texture2D
        set "frame217/texture"(value: null | Texture2D)
        get "frame217/duration"(): float64
        set "frame217/duration"(value: float64)
        get "frame218/texture"(): null | Texture2D
        set "frame218/texture"(value: null | Texture2D)
        get "frame218/duration"(): float64
        set "frame218/duration"(value: float64)
        get "frame219/texture"(): null | Texture2D
        set "frame219/texture"(value: null | Texture2D)
        get "frame219/duration"(): float64
        set "frame219/duration"(value: float64)
        get "frame220/texture"(): null | Texture2D
        set "frame220/texture"(value: null | Texture2D)
        get "frame220/duration"(): float64
        set "frame220/duration"(value: float64)
        get "frame221/texture"(): null | Texture2D
        set "frame221/texture"(value: null | Texture2D)
        get "frame221/duration"(): float64
        set "frame221/duration"(value: float64)
        get "frame222/texture"(): null | Texture2D
        set "frame222/texture"(value: null | Texture2D)
        get "frame222/duration"(): float64
        set "frame222/duration"(value: float64)
        get "frame223/texture"(): null | Texture2D
        set "frame223/texture"(value: null | Texture2D)
        get "frame223/duration"(): float64
        set "frame223/duration"(value: float64)
        get "frame224/texture"(): null | Texture2D
        set "frame224/texture"(value: null | Texture2D)
        get "frame224/duration"(): float64
        set "frame224/duration"(value: float64)
        get "frame225/texture"(): null | Texture2D
        set "frame225/texture"(value: null | Texture2D)
        get "frame225/duration"(): float64
        set "frame225/duration"(value: float64)
        get "frame226/texture"(): null | Texture2D
        set "frame226/texture"(value: null | Texture2D)
        get "frame226/duration"(): float64
        set "frame226/duration"(value: float64)
        get "frame227/texture"(): null | Texture2D
        set "frame227/texture"(value: null | Texture2D)
        get "frame227/duration"(): float64
        set "frame227/duration"(value: float64)
        get "frame228/texture"(): null | Texture2D
        set "frame228/texture"(value: null | Texture2D)
        get "frame228/duration"(): float64
        set "frame228/duration"(value: float64)
        get "frame229/texture"(): null | Texture2D
        set "frame229/texture"(value: null | Texture2D)
        get "frame229/duration"(): float64
        set "frame229/duration"(value: float64)
        get "frame230/texture"(): null | Texture2D
        set "frame230/texture"(value: null | Texture2D)
        get "frame230/duration"(): float64
        set "frame230/duration"(value: float64)
        get "frame231/texture"(): null | Texture2D
        set "frame231/texture"(value: null | Texture2D)
        get "frame231/duration"(): float64
        set "frame231/duration"(value: float64)
        get "frame232/texture"(): null | Texture2D
        set "frame232/texture"(value: null | Texture2D)
        get "frame232/duration"(): float64
        set "frame232/duration"(value: float64)
        get "frame233/texture"(): null | Texture2D
        set "frame233/texture"(value: null | Texture2D)
        get "frame233/duration"(): float64
        set "frame233/duration"(value: float64)
        get "frame234/texture"(): null | Texture2D
        set "frame234/texture"(value: null | Texture2D)
        get "frame234/duration"(): float64
        set "frame234/duration"(value: float64)
        get "frame235/texture"(): null | Texture2D
        set "frame235/texture"(value: null | Texture2D)
        get "frame235/duration"(): float64
        set "frame235/duration"(value: float64)
        get "frame236/texture"(): null | Texture2D
        set "frame236/texture"(value: null | Texture2D)
        get "frame236/duration"(): float64
        set "frame236/duration"(value: float64)
        get "frame237/texture"(): null | Texture2D
        set "frame237/texture"(value: null | Texture2D)
        get "frame237/duration"(): float64
        set "frame237/duration"(value: float64)
        get "frame238/texture"(): null | Texture2D
        set "frame238/texture"(value: null | Texture2D)
        get "frame238/duration"(): float64
        set "frame238/duration"(value: float64)
        get "frame239/texture"(): null | Texture2D
        set "frame239/texture"(value: null | Texture2D)
        get "frame239/duration"(): float64
        set "frame239/duration"(value: float64)
        get "frame240/texture"(): null | Texture2D
        set "frame240/texture"(value: null | Texture2D)
        get "frame240/duration"(): float64
        set "frame240/duration"(value: float64)
        get "frame241/texture"(): null | Texture2D
        set "frame241/texture"(value: null | Texture2D)
        get "frame241/duration"(): float64
        set "frame241/duration"(value: float64)
        get "frame242/texture"(): null | Texture2D
        set "frame242/texture"(value: null | Texture2D)
        get "frame242/duration"(): float64
        set "frame242/duration"(value: float64)
        get "frame243/texture"(): null | Texture2D
        set "frame243/texture"(value: null | Texture2D)
        get "frame243/duration"(): float64
        set "frame243/duration"(value: float64)
        get "frame244/texture"(): null | Texture2D
        set "frame244/texture"(value: null | Texture2D)
        get "frame244/duration"(): float64
        set "frame244/duration"(value: float64)
        get "frame245/texture"(): null | Texture2D
        set "frame245/texture"(value: null | Texture2D)
        get "frame245/duration"(): float64
        set "frame245/duration"(value: float64)
        get "frame246/texture"(): null | Texture2D
        set "frame246/texture"(value: null | Texture2D)
        get "frame246/duration"(): float64
        set "frame246/duration"(value: float64)
        get "frame247/texture"(): null | Texture2D
        set "frame247/texture"(value: null | Texture2D)
        get "frame247/duration"(): float64
        set "frame247/duration"(value: float64)
        get "frame248/texture"(): null | Texture2D
        set "frame248/texture"(value: null | Texture2D)
        get "frame248/duration"(): float64
        set "frame248/duration"(value: float64)
        get "frame249/texture"(): null | Texture2D
        set "frame249/texture"(value: null | Texture2D)
        get "frame249/duration"(): float64
        set "frame249/duration"(value: float64)
        get "frame250/texture"(): null | Texture2D
        set "frame250/texture"(value: null | Texture2D)
        get "frame250/duration"(): float64
        set "frame250/duration"(value: float64)
        get "frame251/texture"(): null | Texture2D
        set "frame251/texture"(value: null | Texture2D)
        get "frame251/duration"(): float64
        set "frame251/duration"(value: float64)
        get "frame252/texture"(): null | Texture2D
        set "frame252/texture"(value: null | Texture2D)
        get "frame252/duration"(): float64
        set "frame252/duration"(value: float64)
        get "frame253/texture"(): null | Texture2D
        set "frame253/texture"(value: null | Texture2D)
        get "frame253/duration"(): float64
        set "frame253/duration"(value: float64)
        get "frame254/texture"(): null | Texture2D
        set "frame254/texture"(value: null | Texture2D)
        get "frame254/duration"(): float64
        set "frame254/duration"(value: float64)
        get "frame255/texture"(): null | Texture2D
        set "frame255/texture"(value: null | Texture2D)
        get "frame255/duration"(): float64
        set "frame255/duration"(value: float64)
    }
    namespace Animation {
        enum TrackType {
            TypeValue = 0,
            TypePosition3D = 1,
            TypeRotation3D = 2,
            TypeScale3D = 3,
            TypeBlendShape = 4,
            TypeMethod = 5,
            TypeBezier = 6,
            TypeAudio = 7,
            TypeAnimation = 8,
        }
        enum InterpolationType {
            InterpolationNearest = 0,
            InterpolationLinear = 1,
            InterpolationCubic = 2,
            InterpolationLinearAngle = 3,
            InterpolationCubicAngle = 4,
        }
        enum UpdateMode {
            UpdateContinuous = 0,
            UpdateDiscrete = 1,
            UpdateCapture = 2,
        }
        enum LoopMode {
            LoopNone = 0,
            LoopLinear = 1,
            LoopPingpong = 2,
        }
        enum LoopedFlag {
            LoopedFlagNone = 0,
            LoopedFlagEnd = 1,
            LoopedFlagStart = 2,
        }
        enum FindMode {
            FindModeNearest = 0,
            FindModeApprox = 1,
            FindModeExact = 2,
        }
    }
    /** Holds data that can be used to animate anything in the engine.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_animation.html  
     */
    class Animation extends Resource {
        /** Value tracks set values in node properties, but only those which can be interpolated. For 3D position/rotation/scale, using the dedicated [constant TYPE_POSITION_3D], [constant TYPE_ROTATION_3D] and [constant TYPE_SCALE_3D] track types instead of [constant TYPE_VALUE] is recommended for performance reasons. */
        static readonly TYPE_VALUE = 0
        
        /** 3D position track (values are stored in [Vector3]s). */
        static readonly TYPE_POSITION_3D = 1
        
        /** 3D rotation track (values are stored in [Quaternion]s). */
        static readonly TYPE_ROTATION_3D = 2
        
        /** 3D scale track (values are stored in [Vector3]s). */
        static readonly TYPE_SCALE_3D = 3
        
        /** Blend shape track. */
        static readonly TYPE_BLEND_SHAPE = 4
        
        /** Method tracks call functions with given arguments per key. */
        static readonly TYPE_METHOD = 5
        
        /** Bezier tracks are used to interpolate a value using custom curves. They can also be used to animate sub-properties of vectors and colors (e.g. alpha value of a [Color]). */
        static readonly TYPE_BEZIER = 6
        
        /** Audio tracks are used to play an audio stream with either type of [AudioStreamPlayer]. The stream can be trimmed and previewed in the animation. */
        static readonly TYPE_AUDIO = 7
        
        /** Animation tracks play animations in other [AnimationPlayer] nodes. */
        static readonly TYPE_ANIMATION = 8
        
        /** No interpolation (nearest value). */
        static readonly INTERPOLATION_NEAREST = 0
        
        /** Linear interpolation. */
        static readonly INTERPOLATION_LINEAR = 1
        
        /** Cubic interpolation. This looks smoother than linear interpolation, but is more expensive to interpolate. Stick to [constant INTERPOLATION_LINEAR] for complex 3D animations imported from external software, even if it requires using a higher animation framerate in return. */
        static readonly INTERPOLATION_CUBIC = 2
        
        /** Linear interpolation with shortest path rotation.  
         *      
         *  **Note:** The result value is always normalized and may not match the key value.  
         */
        static readonly INTERPOLATION_LINEAR_ANGLE = 3
        
        /** Cubic interpolation with shortest path rotation.  
         *      
         *  **Note:** The result value is always normalized and may not match the key value.  
         */
        static readonly INTERPOLATION_CUBIC_ANGLE = 4
        
        /** Update between keyframes and hold the value. */
        static readonly UPDATE_CONTINUOUS = 0
        
        /** Update at the keyframes. */
        static readonly UPDATE_DISCRETE = 1
        
        /** Same as [constant UPDATE_CONTINUOUS] but works as a flag to capture the value of the current object and perform interpolation in some methods. See also [method AnimationMixer.capture], [member AnimationPlayer.playback_auto_capture], and [method AnimationPlayer.play_with_capture]. */
        static readonly UPDATE_CAPTURE = 2
        
        /** At both ends of the animation, the animation will stop playing. */
        static readonly LOOP_NONE = 0
        
        /** At both ends of the animation, the animation will be repeated without changing the playback direction. */
        static readonly LOOP_LINEAR = 1
        
        /** Repeats playback and reverse playback at both ends of the animation. */
        static readonly LOOP_PINGPONG = 2
        
        /** This flag indicates that the animation proceeds without any looping. */
        static readonly LOOPED_FLAG_NONE = 0
        
        /** This flag indicates that the animation has reached the end of the animation and just after loop processed. */
        static readonly LOOPED_FLAG_END = 1
        
        /** This flag indicates that the animation has reached the start of the animation and just after loop processed. */
        static readonly LOOPED_FLAG_START = 2
        
        /** Finds the nearest time key. */
        static readonly FIND_MODE_NEAREST = 0
        
        /** Finds only the key with approximating the time. */
        static readonly FIND_MODE_APPROX = 1
        
        /** Finds only the key with matching the time. */
        static readonly FIND_MODE_EXACT = 2
        constructor(identifier?: any)
        
        /** Adds a track to the Animation. */
        addTrack(type: Animation.TrackType, atPosition?: int64 /* = -1 */): int64
        
        /** Removes a track by specifying the track index. */
        removeTrack(trackIdx: int64): void
        
        /** Returns the amount of tracks in the animation. */
        getTrackCount(): int64
        
        /** Gets the type of a track. */
        trackGetType(trackIdx: int64): Animation.TrackType
        
        /** Gets the path of a track. For more information on the path format, see [method track_set_path]. */
        trackGetPath(trackIdx: int64): NodePath
        
        /** Sets the path of a track. Paths must be valid scene-tree paths to a node and must be specified starting from the [member AnimationMixer.root_node] that will reproduce the animation. Tracks that control properties or bones must append their name after the path, separated by `":"`.  
         *  For example, `"character/skeleton:ankle"` or `"character/mesh:transform/local"`.  
         */
        trackSetPath(trackIdx: int64, path: NodePath | string): void
        
        /** Returns the index of the specified track. If the track is not found, return -1. */
        findTrack(path: NodePath | string, type: Animation.TrackType): int64
        
        /** Moves a track up. */
        trackMoveUp(trackIdx: int64): void
        
        /** Moves a track down. */
        trackMoveDown(trackIdx: int64): void
        
        /** Changes the index position of track [param track_idx] to the one defined in [param to_idx]. */
        trackMoveTo(trackIdx: int64, toIdx: int64): void
        
        /** Swaps the track [param track_idx]'s index position with the track [param with_idx]. */
        trackSwap(trackIdx: int64, withIdx: int64): void
        
        /** Sets the given track as imported or not. */
        trackSetImported(trackIdx: int64, imported: boolean): void
        
        /** Returns `true` if the given track is imported. Else, return `false`. */
        trackIsImported(trackIdx: int64): boolean
        
        /** Enables/disables the given track. Tracks are enabled by default. */
        trackSetEnabled(trackIdx: int64, enabled: boolean): void
        
        /** Returns `true` if the track at index [param track_idx] is enabled. */
        trackIsEnabled(trackIdx: int64): boolean
        
        /** Inserts a key in a given 3D position track. Returns the key index. */
        positionTrackInsertKey(trackIdx: int64, time: float64, position: Vector3): int64
        
        /** Inserts a key in a given 3D rotation track. Returns the key index. */
        rotationTrackInsertKey(trackIdx: int64, time: float64, rotation: Quaternion): int64
        
        /** Inserts a key in a given 3D scale track. Returns the key index. */
        scaleTrackInsertKey(trackIdx: int64, time: float64, scale: Vector3): int64
        
        /** Inserts a key in a given blend shape track. Returns the key index. */
        blendShapeTrackInsertKey(trackIdx: int64, time: float64, amount: float64): int64
        
        /** Returns the interpolated position value at the given time (in seconds). The [param track_idx] must be the index of a 3D position track. */
        positionTrackInterpolate(trackIdx: int64, timeSec: float64, backward?: boolean /* = false */): Vector3
        
        /** Returns the interpolated rotation value at the given time (in seconds). The [param track_idx] must be the index of a 3D rotation track. */
        rotationTrackInterpolate(trackIdx: int64, timeSec: float64, backward?: boolean /* = false */): Quaternion
        
        /** Returns the interpolated scale value at the given time (in seconds). The [param track_idx] must be the index of a 3D scale track. */
        scaleTrackInterpolate(trackIdx: int64, timeSec: float64, backward?: boolean /* = false */): Vector3
        
        /** Returns the interpolated blend shape value at the given time (in seconds). The [param track_idx] must be the index of a blend shape track. */
        blendShapeTrackInterpolate(trackIdx: int64, timeSec: float64, backward?: boolean /* = false */): float64
        
        /** Inserts a generic key in a given track. Returns the key index. */
        trackInsertKey(trackIdx: int64, time: float64, key: any, transition?: float64 /* = 1 */): int64
        
        /** Removes a key by index in a given track. */
        trackRemoveKey(trackIdx: int64, keyIdx: int64): void
        
        /** Removes a key at [param time] in a given track. */
        trackRemoveKeyAtTime(trackIdx: int64, time: float64): void
        
        /** Sets the value of an existing key. */
        trackSetKeyValue(trackIdx: int64, key: int64, value: any): void
        
        /** Sets the transition curve (easing) for a specific key (see the built-in math function [method @GlobalScope.ease]). */
        trackSetKeyTransition(trackIdx: int64, keyIdx: int64, transition: float64): void
        
        /** Sets the time of an existing key. */
        trackSetKeyTime(trackIdx: int64, keyIdx: int64, time: float64): void
        
        /** Returns the transition curve (easing) for a specific key (see the built-in math function [method @GlobalScope.ease]). */
        trackGetKeyTransition(trackIdx: int64, keyIdx: int64): float64
        
        /** Returns the number of keys in a given track. */
        trackGetKeyCount(trackIdx: int64): int64
        
        /** Returns the value of a given key in a given track. */
        trackGetKeyValue(trackIdx: int64, keyIdx: int64): any
        
        /** Returns the time at which the key is located. */
        trackGetKeyTime(trackIdx: int64, keyIdx: int64): float64
        
        /** Finds the key index by time in a given track. Optionally, only find it if the approx/exact time is given.  
         *  If [param limit] is `true`, it does not return keys outside the animation range.  
         *  If [param backward] is `true`, the direction is reversed in methods that rely on one directional processing.  
         *  For example, in case [param find_mode] is [constant FIND_MODE_NEAREST], if there is no key in the current position just after seeked, the first key found is retrieved by searching before the position, but if [param backward] is `true`, the first key found is retrieved after the position.  
         */
        trackFindKey(trackIdx: int64, time: float64, findMode?: Animation.FindMode /* = 0 */, limit?: boolean /* = false */, backward?: boolean /* = false */): int64
        
        /** Sets the interpolation type of a given track. */
        trackSetInterpolationType(trackIdx: int64, interpolation: Animation.InterpolationType): void
        
        /** Returns the interpolation type of a given track. */
        trackGetInterpolationType(trackIdx: int64): Animation.InterpolationType
        
        /** If `true`, the track at [param track_idx] wraps the interpolation loop. */
        trackSetInterpolationLoopWrap(trackIdx: int64, interpolation: boolean): void
        
        /** Returns `true` if the track at [param track_idx] wraps the interpolation loop. New tracks wrap the interpolation loop by default. */
        trackGetInterpolationLoopWrap(trackIdx: int64): boolean
        
        /** Returns `true` if the track is compressed, `false` otherwise. See also [method compress]. */
        trackIsCompressed(trackIdx: int64): boolean
        
        /** Sets the update mode (see [enum UpdateMode]) of a value track. */
        valueTrackSetUpdateMode(trackIdx: int64, mode: Animation.UpdateMode): void
        
        /** Returns the update mode of a value track. */
        valueTrackGetUpdateMode(trackIdx: int64): Animation.UpdateMode
        
        /** Returns the interpolated value at the given time (in seconds). The [param track_idx] must be the index of a value track.  
         *  A [param backward] mainly affects the direction of key retrieval of the track with [constant UPDATE_DISCRETE] converted by [constant AnimationMixer.ANIMATION_CALLBACK_MODE_DISCRETE_FORCE_CONTINUOUS] to match the result with [method track_find_key].  
         */
        valueTrackInterpolate(trackIdx: int64, timeSec: float64, backward?: boolean /* = false */): any
        
        /** Returns the method name of a method track. */
        methodTrackGetName(trackIdx: int64, keyIdx: int64): StringName
        
        /** Returns the arguments values to be called on a method track for a given key in a given track. */
        methodTrackGetParams(trackIdx: int64, keyIdx: int64): GArray
        
        /** Inserts a Bezier Track key at the given [param time] in seconds. The [param track_idx] must be the index of a Bezier Track.  
         *  [param in_handle] is the left-side weight of the added Bezier curve point, [param out_handle] is the right-side one, while [param value] is the actual value at this point.  
         */
        bezierTrackInsertKey(trackIdx: int64, time: float64, value: float64, inHandle?: Vector2 /* = Vector2.ZERO */, outHandle?: Vector2 /* = Vector2.ZERO */): int64
        
        /** Sets the value of the key identified by [param key_idx] to the given value. The [param track_idx] must be the index of a Bezier Track. */
        bezierTrackSetKeyValue(trackIdx: int64, keyIdx: int64, value: float64): void
        
        /** Sets the in handle of the key identified by [param key_idx] to value [param in_handle]. The [param track_idx] must be the index of a Bezier Track. */
        bezierTrackSetKeyInHandle(trackIdx: int64, keyIdx: int64, inHandle: Vector2, balancedValueTimeRatio?: float64 /* = 1 */): void
        
        /** Sets the out handle of the key identified by [param key_idx] to value [param out_handle]. The [param track_idx] must be the index of a Bezier Track. */
        bezierTrackSetKeyOutHandle(trackIdx: int64, keyIdx: int64, outHandle: Vector2, balancedValueTimeRatio?: float64 /* = 1 */): void
        
        /** Returns the value of the key identified by [param key_idx]. The [param track_idx] must be the index of a Bezier Track. */
        bezierTrackGetKeyValue(trackIdx: int64, keyIdx: int64): float64
        
        /** Returns the in handle of the key identified by [param key_idx]. The [param track_idx] must be the index of a Bezier Track. */
        bezierTrackGetKeyInHandle(trackIdx: int64, keyIdx: int64): Vector2
        
        /** Returns the out handle of the key identified by [param key_idx]. The [param track_idx] must be the index of a Bezier Track. */
        bezierTrackGetKeyOutHandle(trackIdx: int64, keyIdx: int64): Vector2
        
        /** Returns the interpolated value at the given [param time] (in seconds). The [param track_idx] must be the index of a Bezier Track. */
        bezierTrackInterpolate(trackIdx: int64, time: float64): float64
        
        /** Inserts an Audio Track key at the given [param time] in seconds. The [param track_idx] must be the index of an Audio Track.  
         *  [param stream] is the [AudioStream] resource to play. [param start_offset] is the number of seconds cut off at the beginning of the audio stream, while [param end_offset] is at the ending.  
         */
        audioTrackInsertKey(trackIdx: int64, time: float64, stream: Resource, startOffset?: float64 /* = 0 */, endOffset?: float64 /* = 0 */): int64
        
        /** Sets the stream of the key identified by [param key_idx] to value [param stream]. The [param track_idx] must be the index of an Audio Track. */
        audioTrackSetKeyStream(trackIdx: int64, keyIdx: int64, stream: Resource): void
        
        /** Sets the start offset of the key identified by [param key_idx] to value [param offset]. The [param track_idx] must be the index of an Audio Track. */
        audioTrackSetKeyStartOffset(trackIdx: int64, keyIdx: int64, offset: float64): void
        
        /** Sets the end offset of the key identified by [param key_idx] to value [param offset]. The [param track_idx] must be the index of an Audio Track. */
        audioTrackSetKeyEndOffset(trackIdx: int64, keyIdx: int64, offset: float64): void
        
        /** Returns the audio stream of the key identified by [param key_idx]. The [param track_idx] must be the index of an Audio Track. */
        audioTrackGetKeyStream(trackIdx: int64, keyIdx: int64): null | Resource
        
        /** Returns the start offset of the key identified by [param key_idx]. The [param track_idx] must be the index of an Audio Track.  
         *  Start offset is the number of seconds cut off at the beginning of the audio stream.  
         */
        audioTrackGetKeyStartOffset(trackIdx: int64, keyIdx: int64): float64
        
        /** Returns the end offset of the key identified by [param key_idx]. The [param track_idx] must be the index of an Audio Track.  
         *  End offset is the number of seconds cut off at the ending of the audio stream.  
         */
        audioTrackGetKeyEndOffset(trackIdx: int64, keyIdx: int64): float64
        
        /** Sets whether the track will be blended with other animations. If `true`, the audio playback volume changes depending on the blend value. */
        audioTrackSetUseBlend(trackIdx: int64, enable: boolean): void
        
        /** Returns `true` if the track at [param track_idx] will be blended with other animations. */
        audioTrackIsUseBlend(trackIdx: int64): boolean
        
        /** Inserts a key with value [param animation] at the given [param time] (in seconds). The [param track_idx] must be the index of an Animation Track. */
        animationTrackInsertKey(trackIdx: int64, time: float64, animation: StringName): int64
        
        /** Sets the key identified by [param key_idx] to value [param animation]. The [param track_idx] must be the index of an Animation Track. */
        animationTrackSetKeyAnimation(trackIdx: int64, keyIdx: int64, animation: StringName): void
        
        /** Returns the animation name at the key identified by [param key_idx]. The [param track_idx] must be the index of an Animation Track. */
        animationTrackGetKeyAnimation(trackIdx: int64, keyIdx: int64): StringName
        
        /** Adds a marker to this Animation. */
        addMarker(name: StringName, time: float64): void
        
        /** Removes the marker with the given name from this Animation. */
        removeMarker(name: StringName): void
        
        /** Returns `true` if this Animation contains a marker with the given name. */
        hasMarker(name: StringName): boolean
        
        /** Returns the name of the marker located at the given time. */
        getMarkerAtTime(time: float64): StringName
        
        /** Returns the closest marker that comes after the given time. If no such marker exists, an empty string is returned. */
        getNextMarker(time: float64): StringName
        
        /** Returns the closest marker that comes before the given time. If no such marker exists, an empty string is returned. */
        getPrevMarker(time: float64): StringName
        
        /** Returns the given marker's time. */
        getMarkerTime(name: StringName): float64
        
        /** Returns every marker in this Animation, sorted ascending by time. */
        getMarkerNames(): PackedStringArray
        
        /** Returns the given marker's color. */
        getMarkerColor(name: StringName): Color
        
        /** Sets the given marker's color. */
        setMarkerColor(name: StringName, color: Color): void
        
        /** Clear the animation (clear all tracks and reset all). */
        clear(): void
        
        /** Adds a new track to [param to_animation] that is a copy of the given track from this animation. */
        copyTrack(trackIdx: int64, toAnimation: Animation): void
        
        /** Optimize the animation and all its tracks in-place. This will preserve only as many keys as are necessary to keep the animation within the specified bounds. */
        optimize(allowedVelocityErr?: float64 /* = 0.01 */, allowedAngularErr?: float64 /* = 0.01 */, precision?: int64 /* = 3 */): void
        
        /** Compress the animation and all its tracks in-place. This will make [method track_is_compressed] return `true` once called on this [Animation]. Compressed tracks require less memory to be played, and are designed to be used for complex 3D animations (such as cutscenes) imported from external 3D software. Compression is lossy, but the difference is usually not noticeable in real world conditions.  
         *      
         *  **Note:** Compressed tracks have various limitations (such as not being editable from the editor), so only use compressed animations if you actually need them.  
         */
        compress(pageSize?: int64 /* = 8192 */, fps?: int64 /* = 120 */, splitTolerance?: float64 /* = 4 */): void
        
        /** The total length of the animation (in seconds).  
         *      
         *  **Note:** Length is not delimited by the last key, as this one may be before or after the end to ensure correct interpolation and looping.  
         */
        get length(): float64
        set length(value: float64)
        
        /** Determines the behavior of both ends of the animation timeline during animation playback. This is used for correct interpolation of animation cycles, and for hinting the player that it must restart the animation. */
        get loopMode(): int64
        set loopMode(value: int64)
        
        /** The animation step value. */
        get step(): float64
        set step(value: float64)
        
        /** Returns `true` if the capture track is included. This is a cached readonly value for performance. */
        get captureIncluded(): boolean
        set captureIncluded(value: boolean)
    }
    namespace __PathMappableDummyKeys { const AnimationLibrary: unique symbol }
    /** Container for [Animation] resources.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_animationlibrary.html  
     */
    class AnimationLibrary<AnimationName extends string = string> extends Resource implements PathMappable<typeof __PathMappableDummyKeys.AnimationLibrary, Record<AnimationName, Animation>> {
        [__PathMappableDummyKeys.AnimationLibrary]: Record<AnimationName, Animation>
        constructor(identifier?: any)
        /** Adds the [param animation] to the library, accessible by the key [param name]. */
        addAnimation(name: AnimationName, animation: Animation): GError
        
        /** Removes the [Animation] with the key [param name]. */
        removeAnimation(name: AnimationName): void
        
        /** Changes the key of the [Animation] associated with the key [param name] to [param newname]. */
        renameAnimation(name: AnimationName, newname: AnimationName): void
        
        /** Returns `true` if the library stores an [Animation] with [param name] as the key. */
        hasAnimation(name: AnimationName): boolean
        
        /** Returns the [Animation] with the key [param name]. If the animation does not exist, `null` is returned and an error is logged. */
        getAnimation(name: AnimationName): null | Animation
        
        /** Returns the keys for the [Animation]s stored in the library. */
        getAnimationList(): GArray<AnimationName>
        
        /** Returns the key count for the [Animation]s stored in the library. */
        getAnimationListSize(): int64
        get _data(): GDictionary
        set _data(value: GDictionary)
        
        /** Emitted when an [Animation] is added, under the key [param name]. */
        readonly animationAdded: Signal<(name: StringName) => void>
        
        /** Emitted when an [Animation] stored with the key [param name] is removed. */
        readonly animationRemoved: Signal<(name: StringName) => void>
        
        /** Emitted when the key for an [Animation] is changed, from [param name] to [param to_name]. */
        readonly animationRenamed: Signal<(name: StringName, toName: StringName) => void>
        
        /** Emitted when there's a change in one of the animations, e.g. tracks are added, moved or have changed paths. [param name] is the key of the animation that was changed.  
         *  See also [signal Resource.changed], which this acts as a relay for.  
         */
        readonly animationChanged: Signal<(name: StringName) => void>
    }
    namespace AnimationMixer {
        enum AnimationCallbackModeProcess {
            AnimationCallbackModeProcessPhysics = 0,
            AnimationCallbackModeProcessIdle = 1,
            AnimationCallbackModeProcessManual = 2,
        }
        enum AnimationCallbackModeMethod {
            AnimationCallbackModeMethodDeferred = 0,
            AnimationCallbackModeMethodImmediate = 1,
        }
        enum AnimationCallbackModeDiscrete {
            AnimationCallbackModeDiscreteDominant = 0,
            AnimationCallbackModeDiscreteRecessive = 1,
            AnimationCallbackModeDiscreteForceContinuous = 2,
        }
    }
    namespace __PathMappableDummyKeys { const AnimationMixer: unique symbol }
    /** Base class for [AnimationPlayer] and [AnimationTree].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_animationmixer.html  
     */
    class AnimationMixer<NodeMap extends NodePathMap = any, LibraryMap extends AnimationMixerPathMap = any> extends Node<NodeMap> implements PathMappable<typeof __PathMappableDummyKeys.AnimationMixer, LibraryMap> {
        [__PathMappableDummyKeys.AnimationMixer]: LibraryMap
        /** Process animation during physics frames (see [constant Node.NOTIFICATION_INTERNAL_PHYSICS_PROCESS]). This is especially useful when animating physics bodies. */
        static readonly ANIMATION_CALLBACK_MODE_PROCESS_PHYSICS = 0
        
        /** Process animation during process frames (see [constant Node.NOTIFICATION_INTERNAL_PROCESS]). */
        static readonly ANIMATION_CALLBACK_MODE_PROCESS_IDLE = 1
        
        /** Do not process animation. Use [method advance] to process the animation manually. */
        static readonly ANIMATION_CALLBACK_MODE_PROCESS_MANUAL = 2
        
        /** Batch method calls during the animation process, then do the calls after events are processed. This avoids bugs involving deleting nodes or modifying the AnimationPlayer while playing. */
        static readonly ANIMATION_CALLBACK_MODE_METHOD_DEFERRED = 0
        
        /** Make method calls immediately when reached in the animation. */
        static readonly ANIMATION_CALLBACK_MODE_METHOD_IMMEDIATE = 1
        
        /** An [constant Animation.UPDATE_DISCRETE] track value takes precedence when blending [constant Animation.UPDATE_CONTINUOUS] or [constant Animation.UPDATE_CAPTURE] track values and [constant Animation.UPDATE_DISCRETE] track values. */
        static readonly ANIMATION_CALLBACK_MODE_DISCRETE_DOMINANT = 0
        
        /** An [constant Animation.UPDATE_CONTINUOUS] or [constant Animation.UPDATE_CAPTURE] track value takes precedence when blending the [constant Animation.UPDATE_CONTINUOUS] or [constant Animation.UPDATE_CAPTURE] track values and the [constant Animation.UPDATE_DISCRETE] track values. This is the default behavior for [AnimationPlayer]. */
        static readonly ANIMATION_CALLBACK_MODE_DISCRETE_RECESSIVE = 1
        
        /** Always treat the [constant Animation.UPDATE_DISCRETE] track value as [constant Animation.UPDATE_CONTINUOUS] with [constant Animation.INTERPOLATION_NEAREST]. This is the default behavior for [AnimationTree].  
         *  If a value track has un-interpolatable type key values, it is internally converted to use [constant ANIMATION_CALLBACK_MODE_DISCRETE_RECESSIVE] with [constant Animation.UPDATE_DISCRETE].  
         *  Un-interpolatable type list:  
         *  - [constant @GlobalScope.TYPE_NIL]  
         *  - [constant @GlobalScope.TYPE_NODE_PATH]  
         *  - [constant @GlobalScope.TYPE_RID]  
         *  - [constant @GlobalScope.TYPE_OBJECT]  
         *  - [constant @GlobalScope.TYPE_CALLABLE]  
         *  - [constant @GlobalScope.TYPE_SIGNAL]  
         *  - [constant @GlobalScope.TYPE_DICTIONARY]  
         *  - [constant @GlobalScope.TYPE_PACKED_BYTE_ARRAY]  
         *  [constant @GlobalScope.TYPE_BOOL] and [constant @GlobalScope.TYPE_INT] are treated as [constant @GlobalScope.TYPE_FLOAT] during blending and rounded when the result is retrieved.  
         *  It is same for arrays and vectors with them such as [constant @GlobalScope.TYPE_PACKED_INT32_ARRAY] or [constant @GlobalScope.TYPE_VECTOR2I], they are treated as [constant @GlobalScope.TYPE_PACKED_FLOAT32_ARRAY] or [constant @GlobalScope.TYPE_VECTOR2]. Also note that for arrays, the size is also interpolated.  
         *  [constant @GlobalScope.TYPE_STRING] and [constant @GlobalScope.TYPE_STRING_NAME] are interpolated between character codes and lengths, but note that there is a difference in algorithm between interpolation between keys and interpolation by blending.  
         */
        static readonly ANIMATION_CALLBACK_MODE_DISCRETE_FORCE_CONTINUOUS = 2
        constructor(identifier?: any)
        
        /** A virtual function for processing after getting a key during playback. */
        /* gdvirtual */ _postProcessKeyValue(animation: Animation, track: int64, value: any, objectId: int64, objectSubIdx: int64): any
        
        /** Adds [param library] to the animation player, under the key [param name].  
         *  AnimationMixer has a global library by default with an empty string as key. For adding an animation to the global library:  
         *    
         */
        addAnimationLibrary<Name extends keyof LibraryMap>(name: Name, library: LibraryMap[Name]): GError
        
        /** Removes the [AnimationLibrary] associated with the key [param name]. */
        removeAnimationLibrary<Name extends keyof LibraryMap>(name: Name): void
        
        /** Moves the [AnimationLibrary] associated with the key [param name] to the key [param newname]. */
        renameAnimationLibrary<FromName extends keyof LibraryMap, ToName extends ExtractValueKeys<LibraryMap, LibraryMap[FromName]>>(name: FromName, newname: ToName): void
        
        /** Returns `true` if the [AnimationMixer] stores an [AnimationLibrary] with key [param name]. */
        hasAnimationLibrary<Name extends keyof LibraryMap>(name: Name): boolean
        
        /** Returns the first [AnimationLibrary] with key [param name] or `null` if not found.  
         *  To get the [AnimationMixer]'s global animation library, use `get_animation_library("")`.  
         */
        getAnimationLibrary<Name extends keyof LibraryMap>(name: Name): LibraryMap[Name]
        
        /** Returns the list of stored library keys. */
        getAnimationLibraryList(): GArray<keyof LibraryMap>
        
        /** Returns `true` if the [AnimationMixer] stores an [Animation] with key [param name]. */
        hasAnimation<Name extends StaticAnimationMixerPath<LibraryMap>>(name: Name): boolean
        
        /** Returns the [Animation] with the key [param name]. If the animation does not exist, `null` is returned and an error is logged. */
        getAnimation<Name extends StaticAnimationMixerPath<LibraryMap>>(name: Name): ResolveAnimationMixerPath<LibraryMap, Name>
        
        /** Returns the list of stored animation keys. */
        getAnimationList(): PackedStringArray
        
        /** Retrieve the motion delta of position with the [member root_motion_track] as a [Vector3] that can be used elsewhere.  
         *  If [member root_motion_track] is not a path to a track of type [constant Animation.TYPE_POSITION_3D], returns `Vector3(0, 0, 0)`.  
         *  See also [member root_motion_track] and [RootMotionView].  
         *  The most basic example is applying position to [CharacterBody3D]:  
         *    
         *  By using this in combination with [method get_root_motion_rotation_accumulator], you can apply the root motion position more correctly to account for the rotation of the node.  
         *    
         *  If [member root_motion_local] is `true`, returns the pre-multiplied translation value with the inverted rotation.  
         *  In this case, the code can be written as follows:  
         *    
         */
        getRootMotionPosition(): Vector3
        
        /** Retrieve the motion delta of rotation with the [member root_motion_track] as a [Quaternion] that can be used elsewhere.  
         *  If [member root_motion_track] is not a path to a track of type [constant Animation.TYPE_ROTATION_3D], returns `Quaternion(0, 0, 0, 1)`.  
         *  See also [member root_motion_track] and [RootMotionView].  
         *  The most basic example is applying rotation to [CharacterBody3D]:  
         *    
         */
        getRootMotionRotation(): Quaternion
        
        /** Retrieve the motion delta of scale with the [member root_motion_track] as a [Vector3] that can be used elsewhere.  
         *  If [member root_motion_track] is not a path to a track of type [constant Animation.TYPE_SCALE_3D], returns `Vector3(0, 0, 0)`.  
         *  See also [member root_motion_track] and [RootMotionView].  
         *  The most basic example is applying scale to [CharacterBody3D]:  
         *    
         */
        getRootMotionScale(): Vector3
        
        /** Retrieve the blended value of the position tracks with the [member root_motion_track] as a [Vector3] that can be used elsewhere.  
         *  This is useful in cases where you want to respect the initial key values of the animation.  
         *  For example, if an animation with only one key `Vector3(0, 0, 0)` is played in the previous frame and then an animation with only one key `Vector3(1, 0, 1)` is played in the next frame, the difference can be calculated as follows:  
         *    
         *  However, if the animation loops, an unintended discrete change may occur, so this is only useful for some simple use cases.  
         */
        getRootMotionPositionAccumulator(): Vector3
        
        /** Retrieve the blended value of the rotation tracks with the [member root_motion_track] as a [Quaternion] that can be used elsewhere.  
         *  This is necessary to apply the root motion position correctly, taking rotation into account. See also [method get_root_motion_position].  
         *  Also, this is useful in cases where you want to respect the initial key values of the animation.  
         *  For example, if an animation with only one key `Quaternion(0, 0, 0, 1)` is played in the previous frame and then an animation with only one key `Quaternion(0, 0.707, 0, 0.707)` is played in the next frame, the difference can be calculated as follows:  
         *    
         *  However, if the animation loops, an unintended discrete change may occur, so this is only useful for some simple use cases.  
         */
        getRootMotionRotationAccumulator(): Quaternion
        
        /** Retrieve the blended value of the scale tracks with the [member root_motion_track] as a [Vector3] that can be used elsewhere.  
         *  For example, if an animation with only one key `Vector3(1, 1, 1)` is played in the previous frame and then an animation with only one key `Vector3(2, 2, 2)` is played in the next frame, the difference can be calculated as follows:  
         *    
         *  However, if the animation loops, an unintended discrete change may occur, so this is only useful for some simple use cases.  
         */
        getRootMotionScaleAccumulator(): Vector3
        
        /** [AnimationMixer] caches animated nodes. It may not notice if a node disappears; [method clear_caches] forces it to update the cache again. */
        clearCaches(): void
        
        /** Manually advance the animations by the specified time (in seconds). */
        advance(delta: float64): void
        
        /** If the animation track specified by [param name] has an option [constant Animation.UPDATE_CAPTURE], stores current values of the objects indicated by the track path as a cache. If there is already a captured cache, the old cache is discarded.  
         *  After this it will interpolate with current animation blending result during the playback process for the time specified by [param duration], working like a crossfade.  
         *  You can specify [param trans_type] as the curve for the interpolation. For better results, it may be appropriate to specify [constant Tween.TRANS_LINEAR] for cases where the first key of the track begins with a non-zero value or where the key value does not change, and [constant Tween.TRANS_QUAD] for cases where the key value changes linearly.  
         */
        capture(name: StringName, duration: float64, transType?: Tween.TransitionType /* = 0 */, easeType?: Tween.EaseType /* = 0 */): void
        _reset(): void
        _restore(backup: any /*AnimatedValuesBackup*/): void
        
        /** Returns the key of [param animation] or an empty [StringName] if not found. */
        findAnimation(animation: Animation): StringName
        
        /** Returns the key for the [AnimationLibrary] that contains [param animation] or an empty [StringName] if not found. */
        findAnimationLibrary(animation: Animation): StringName
        
        /** If `true`, the [AnimationMixer] will be processing. */
        get active(): boolean
        set active(value: boolean)
        
        /** If `true`, the blending uses the deterministic algorithm. The total weight is not normalized and the result is accumulated with an initial value (`0` or a `"RESET"` animation if present).  
         *  This means that if the total amount of blending is `0.0`, the result is equal to the `"RESET"` animation.  
         *  If the number of tracks between the blended animations is different, the animation with the missing track is treated as if it had the initial value.  
         *  If `false`, The blend does not use the deterministic algorithm. The total weight is normalized and always `1.0`. If the number of tracks between the blended animations is different, nothing is done about the animation that is missing a track.  
         *      
         *  **Note:** In [AnimationTree], the blending with [AnimationNodeAdd2], [AnimationNodeAdd3], [AnimationNodeSub2] or the weight greater than `1.0` may produce unexpected results.  
         *  For example, if [AnimationNodeAdd2] blends two nodes with the amount `1.0`, then total weight is `2.0` but it will be normalized to make the total amount `1.0` and the result will be equal to [AnimationNodeBlend2] with the amount `0.5`.  
         */
        get deterministic(): boolean
        set deterministic(value: boolean)
        
        /** This is used by the editor. If set to `true`, the scene will be saved with the effects of the reset animation (the animation with the key `"RESET"`) applied as if it had been seeked to time 0, with the editor keeping the values that the scene had before saving.  
         *  This makes it more convenient to preview and edit animations in the editor, as changes to the scene will not be saved as long as they are set in the reset animation.  
         */
        get resetOnSave(): boolean
        set resetOnSave(value: boolean)
        
        /** The node which node path references will travel from. */
        get rootNode(): NodePath
        set rootNode(value: NodePath | string)
        
        /** The path to the Animation track used for root motion. Paths must be valid scene-tree paths to a node, and must be specified starting from the parent node of the node that will reproduce the animation. The [member root_motion_track] uses the same format as [method Animation.track_set_path], but note that a bone must be specified.  
         *  If the track has type [constant Animation.TYPE_POSITION_3D], [constant Animation.TYPE_ROTATION_3D], or [constant Animation.TYPE_SCALE_3D] the transformation will be canceled visually, and the animation will appear to stay in place. See also [method get_root_motion_position], [method get_root_motion_rotation], [method get_root_motion_scale], and [RootMotionView].  
         */
        get rootMotionTrack(): NodePath
        set rootMotionTrack(value: NodePath | string)
        
        /** If `true`, [method get_root_motion_position] value is extracted as a local translation value before blending. In other words, it is treated like the translation is done after the rotation. */
        get rootMotionLocal(): boolean
        set rootMotionLocal(value: boolean)
        
        /** The number of possible simultaneous sounds for each of the assigned AudioStreamPlayers.  
         *  For example, if this value is `32` and the animation has two audio tracks, the two [AudioStreamPlayer]s assigned can play simultaneously up to `32` voices each.  
         */
        get audioMaxPolyphony(): int64
        set audioMaxPolyphony(value: int64)
        
        /** The process notification in which to update animations. */
        get callbackModeProcess(): int64
        set callbackModeProcess(value: int64)
        
        /** The call mode used for "Call Method" tracks. */
        get callbackModeMethod(): int64
        set callbackModeMethod(value: int64)
        
        /** Ordinarily, tracks can be set to [constant Animation.UPDATE_DISCRETE] to update infrequently, usually when using nearest interpolation.  
         *  However, when blending with [constant Animation.UPDATE_CONTINUOUS] several results are considered. The [member callback_mode_discrete] specify it explicitly. See also [enum AnimationCallbackModeDiscrete].  
         *  To make the blended results look good, it is recommended to set this to [constant ANIMATION_CALLBACK_MODE_DISCRETE_FORCE_CONTINUOUS] to update every frame during blending. Other values exist for compatibility and they are fine if there is no blending, but not so, may produce artifacts.  
         */
        get callbackModeDiscrete(): int64
        set callbackModeDiscrete(value: int64)
        
        /** Notifies when an animation list is changed. */
        readonly animationListChanged: Signal<() => void>
        
        /** Notifies when the animation libraries have changed. */
        readonly animationLibrariesUpdated: Signal<() => void>
        
        /** Notifies when an animation finished playing.  
         *      
         *  **Note:** This signal is not emitted if an animation is looping.  
         */
        readonly animationFinished: Signal<(animName: StringName) => void>
        
        /** Notifies when an animation starts playing. */
        readonly animationStarted: Signal<(animName: StringName) => void>
        
        /** Notifies when the caches have been cleared, either automatically, or manually via [method clear_caches]. */
        readonly cachesCleared: Signal<() => void>
        
        /** Notifies when the blending result related have been applied to the target objects. */
        readonly mixerApplied: Signal<() => void>
        
        /** Notifies when the property related process have been updated. */
        readonly mixerUpdated: Signal<() => void>
    }
    namespace AnimationNode {
        enum FilterAction {
            FilterIgnore = 0,
            FilterPass = 1,
            FilterStop = 2,
            FilterBlend = 3,
        }
    }
    /** Base class for [AnimationTree] nodes. Not related to scene nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_animationnode.html  
     */
    class AnimationNode extends Resource {
        /** Do not use filtering. */
        static readonly FILTER_IGNORE = 0
        
        /** Paths matching the filter will be allowed to pass. */
        static readonly FILTER_PASS = 1
        
        /** Paths matching the filter will be discarded. */
        static readonly FILTER_STOP = 2
        
        /** Paths matching the filter will be blended (by the blend value). */
        static readonly FILTER_BLEND = 3
        constructor(identifier?: any)
        
        /** When inheriting from [AnimationRootNode], implement this virtual method to return all child animation nodes in order as a `name: node` dictionary. */
        /* gdvirtual */ _getChildNodes(): GDictionary
        
        /** When inheriting from [AnimationRootNode], implement this virtual method to return a list of the properties on this animation node. Parameters are custom local memory used for your animation nodes, given a resource can be reused in multiple trees. Format is similar to [method Object.get_property_list]. */
        /* gdvirtual */ _getParameterList(): GArray
        
        /** When inheriting from [AnimationRootNode], implement this virtual method to return a child animation node by its [param name]. */
        /* gdvirtual */ _getChildByName(name: StringName): null | AnimationNode
        
        /** When inheriting from [AnimationRootNode], implement this virtual method to return the default value of a [param parameter]. Parameters are custom local memory used for your animation nodes, given a resource can be reused in multiple trees. */
        /* gdvirtual */ _getParameterDefaultValue(parameter: StringName): any
        
        /** When inheriting from [AnimationRootNode], implement this virtual method to return whether the [param parameter] is read-only. Parameters are custom local memory used for your animation nodes, given a resource can be reused in multiple trees. */
        /* gdvirtual */ _isParameterReadOnly(parameter: StringName): boolean
        
        /** When inheriting from [AnimationRootNode], implement this virtual method to run some code when this animation node is processed. The [param time] parameter is a relative delta, unless [param seek] is `true`, in which case it is absolute.  
         *  Here, call the [method blend_input], [method blend_node] or [method blend_animation] functions. You can also use [method get_parameter] and [method set_parameter] to modify local memory.  
         *  This function should return the delta.  
         */
        /* gdvirtual */ _process(time: float64, seek: boolean, isExternalSeeking: boolean, testOnly: boolean): float64
        
        /** When inheriting from [AnimationRootNode], implement this virtual method to override the text caption for this animation node. */
        /* gdvirtual */ _getCaption(): string
        
        /** When inheriting from [AnimationRootNode], implement this virtual method to return whether the blend tree editor should display filter editing on this animation node. */
        /* gdvirtual */ _hasFilter(): boolean
        
        /** Adds an input to the animation node. This is only useful for animation nodes created for use in an [AnimationNodeBlendTree]. If the addition fails, returns `false`. */
        addInput(name: string): boolean
        
        /** Removes an input, call this only when inactive. */
        removeInput(index: int64): void
        
        /** Sets the name of the input at the given [param input] index. If the setting fails, returns `false`. */
        setInputName(input: int64, name: string): boolean
        
        /** Gets the name of an input by index. */
        getInputName(input: int64): string
        
        /** Amount of inputs in this animation node, only useful for animation nodes that go into [AnimationNodeBlendTree]. */
        getInputCount(): int64
        
        /** Returns the input index which corresponds to [param name]. If not found, returns `-1`. */
        findInput(name: string): int64
        
        /** Adds or removes a path for the filter. */
        setFilterPath(path: NodePath | string, enable: boolean): void
        
        /** Returns `true` if the given path is filtered. */
        isPathFiltered(path: NodePath | string): boolean
        
        /** Returns the object id of the [AnimationTree] that owns this node.  
         *      
         *  **Note:** This method should only be called from within the [method AnimationNodeExtension._process_animation_node] method, and will return an invalid id otherwise.  
         */
        getProcessingAnimationTreeInstanceId(): int64
        
        /** Returns `true` if this animation node is being processed in test-only mode. */
        isProcessTesting(): boolean
        
        /** Blend an animation by [param blend] amount (name must be valid in the linked [AnimationPlayer]). A [param time] and [param delta] may be passed, as well as whether [param seeked] happened.  
         *  A [param looped_flag] is used by internal processing immediately after the loop. See also [enum Animation.LoopedFlag].  
         */
        blendAnimation(animation: StringName, time: float64, delta: float64, seeked: boolean, isExternalSeeking: boolean, blend: float64, loopedFlag?: Animation.LoopedFlag /* = 0 */): void
        
        /** Blend another animation node (in case this animation node contains child animation nodes). This function is only useful if you inherit from [AnimationRootNode] instead, otherwise editors will not display your animation node for addition. */
        blendNode(name: StringName, node: AnimationNode, time: float64, seek: boolean, isExternalSeeking: boolean, blend: float64, filter?: AnimationNode.FilterAction /* = 0 */, sync?: boolean /* = true */, testOnly?: boolean /* = false */): float64
        
        /** Blend an input. This is only useful for animation nodes created for an [AnimationNodeBlendTree]. The [param time] parameter is a relative delta, unless [param seek] is `true`, in which case it is absolute. A filter mode may be optionally passed (see [enum FilterAction] for options). */
        blendInput(inputIndex: int64, time: float64, seek: boolean, isExternalSeeking: boolean, blend: float64, filter?: AnimationNode.FilterAction /* = 0 */, sync?: boolean /* = true */, testOnly?: boolean /* = false */): float64
        
        /** Sets a custom parameter. These are used as local memory, because resources can be reused across the tree or scenes. */
        setParameter(name: StringName, value: any): void
        
        /** Gets the value of a parameter. Parameters are custom local memory used for your animation nodes, given a resource can be reused in multiple trees. */
        getParameter(name: StringName): any
        
        /** If `true`, filtering is enabled. */
        get filterEnabled(): boolean
        set filterEnabled(value: boolean)
        get filters(): GArray
        set filters(value: GArray)
        
        /** Emitted by nodes that inherit from this class and that have an internal tree when one of their animation nodes changes. The animation nodes that emit this signal are [AnimationNodeBlendSpace1D], [AnimationNodeBlendSpace2D], [AnimationNodeStateMachine], [AnimationNodeBlendTree] and [AnimationNodeTransition]. */
        readonly treeChanged: Signal<() => void>
        
        /** Emitted by nodes that inherit from this class and that have an internal tree when one of their animation node names changes. The animation nodes that emit this signal are [AnimationNodeBlendSpace1D], [AnimationNodeBlendSpace2D], [AnimationNodeStateMachine], and [AnimationNodeBlendTree]. */
        readonly animationNodeRenamed: Signal<(objectId: int64, oldName: string, newName: string) => void>
        
        /** Emitted by nodes that inherit from this class and that have an internal tree when one of their animation nodes removes. The animation nodes that emit this signal are [AnimationNodeBlendSpace1D], [AnimationNodeBlendSpace2D], [AnimationNodeStateMachine], and [AnimationNodeBlendTree]. */
        readonly animationNodeRemoved: Signal<(objectId: int64, name: string) => void>
    }
    /** Blends two animations additively inside of an [AnimationNodeBlendTree].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_animationnodeadd2.html  
     */
    class AnimationNodeAdd2 extends AnimationNodeSync {
        constructor(identifier?: any)
    }
    /** Blends two of three animations additively inside of an [AnimationNodeBlendTree].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_animationnodeadd3.html  
     */
    class AnimationNodeAdd3 extends AnimationNodeSync {
        constructor(identifier?: any)
    }
    namespace AnimationNodeAnimation {
        enum PlayMode {
            PlayModeForward = 0,
            PlayModeBackward = 1,
        }
    }
    /** An input animation for an [AnimationNodeBlendTree].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_animationnodeanimation.html  
     */
    class AnimationNodeAnimation extends AnimationRootNode {
        /** Plays animation in forward direction. */
        static readonly PLAY_MODE_FORWARD = 0
        
        /** Plays animation in backward direction. */
        static readonly PLAY_MODE_BACKWARD = 1
        constructor(identifier?: any)
        
        /** Animation to use as an output. It is one of the animations provided by [member AnimationTree.anim_player]. */
        get animation(): StringName
        set animation(value: StringName)
        
        /** Determines the playback direction of the animation. */
        get playMode(): int64
        set playMode(value: int64)
        
        /** If `true`, on receiving a request to play an animation from the start, the first frame is not drawn, but only processed, and playback starts from the next frame.  
         *  See also the notes of [method AnimationPlayer.play].  
         */
        get advanceOnStart(): boolean
        set advanceOnStart(value: boolean)
        
        /** If `true`, [AnimationNode] provides an animation based on the [Animation] resource with some parameters adjusted. */
        get useCustomTimeline(): boolean
        set useCustomTimeline(value: boolean)
        
        /** If [member use_custom_timeline] is `true`, offset the start position of the animation. */
        get timelineLength(): float64
        set timelineLength(value: float64)
        
        /** If `true`, scales the time so that the length specified in [member timeline_length] is one cycle.  
         *  This is useful for matching the periods of walking and running animations.  
         *  If `false`, the original animation length is respected. If you set the loop to [member loop_mode], the animation will loop in [member timeline_length].  
         */
        get stretchTimeScale(): boolean
        set stretchTimeScale(value: boolean)
        
        /** If [member use_custom_timeline] is `true`, offset the start position of the animation.  
         *  This is useful for adjusting which foot steps first in 3D walking animations.  
         */
        get startOffset(): float64
        set startOffset(value: float64)
        
        /** If [member use_custom_timeline] is `true`, override the loop settings of the original [Animation] resource with the value.  
         *      
         *  **Note:** If the [member Animation.loop_mode] isn't set to looping, the [method Animation.track_set_interpolation_loop_wrap] option will not be respected. If you cannot get the expected behavior, consider duplicating the [Animation] resource and changing the loop settings.  
         */
        get loopMode(): int64
        set loopMode(value: int64)
    }
    /** Blends two animations linearly inside of an [AnimationNodeBlendTree].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_animationnodeblend2.html  
     */
    class AnimationNodeBlend2 extends AnimationNodeSync {
        constructor(identifier?: any)
    }
    /** Blends two of three animations linearly inside of an [AnimationNodeBlendTree].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_animationnodeblend3.html  
     */
    class AnimationNodeBlend3 extends AnimationNodeSync {
        constructor(identifier?: any)
    }
    namespace AnimationNodeBlendSpace1D {
        enum BlendMode {
            BlendModeInterpolated = 0,
            BlendModeDiscrete = 1,
            BlendModeDiscreteCarry = 2,
        }
    }
    /** A set of [AnimationRootNode]s placed on a virtual axis, crossfading between the two adjacent ones. Used by [AnimationTree].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_animationnodeblendspace1d.html  
     */
    class AnimationNodeBlendSpace1D extends AnimationRootNode {
        /** The interpolation between animations is linear. */
        static readonly BLEND_MODE_INTERPOLATED = 0
        
        /** The blend space plays the animation of the animation node which blending position is closest to. Useful for frame-by-frame 2D animations. */
        static readonly BLEND_MODE_DISCRETE = 1
        
        /** Similar to [constant BLEND_MODE_DISCRETE], but starts the new animation at the last animation's playback position. */
        static readonly BLEND_MODE_DISCRETE_CARRY = 2
        constructor(identifier?: any)
        
        /** Adds a new point that represents a [param node] on the virtual axis at a given position set by [param pos]. You can insert it at a specific index using the [param at_index] argument. If you use the default value for [param at_index], the point is inserted at the end of the blend points array. */
        addBlendPoint(node: AnimationRootNode, pos: float64, atIndex?: int64 /* = -1 */): void
        
        /** Updates the position of the point at index [param point] on the blend axis. */
        setBlendPointPosition(point: int64, pos: float64): void
        
        /** Returns the position of the point at index [param point]. */
        getBlendPointPosition(point: int64): float64
        
        /** Changes the [AnimationNode] referenced by the point at index [param point]. */
        setBlendPointNode(point: int64, node: AnimationRootNode): void
        
        /** Returns the [AnimationNode] referenced by the point at index [param point]. */
        getBlendPointNode(point: int64): null | AnimationRootNode
        
        /** Removes the point at index [param point] from the blend axis. */
        removeBlendPoint(point: int64): void
        
        /** Returns the number of points on the blend axis. */
        getBlendPointCount(): int64
        _addBlendPoint(index: int64, node: AnimationRootNode): void
        get "blendPoint0/node"(): null | AnimationRootNode
        set "blendPoint0/node"(value: null | AnimationRootNode)
        get "blendPoint0/pos"(): float64
        set "blendPoint0/pos"(value: float64)
        get "blendPoint1/node"(): null | AnimationRootNode
        set "blendPoint1/node"(value: null | AnimationRootNode)
        get "blendPoint1/pos"(): float64
        set "blendPoint1/pos"(value: float64)
        get "blendPoint2/node"(): null | AnimationRootNode
        set "blendPoint2/node"(value: null | AnimationRootNode)
        get "blendPoint2/pos"(): float64
        set "blendPoint2/pos"(value: float64)
        get "blendPoint3/node"(): null | AnimationRootNode
        set "blendPoint3/node"(value: null | AnimationRootNode)
        get "blendPoint3/pos"(): float64
        set "blendPoint3/pos"(value: float64)
        get "blendPoint4/node"(): null | AnimationRootNode
        set "blendPoint4/node"(value: null | AnimationRootNode)
        get "blendPoint4/pos"(): float64
        set "blendPoint4/pos"(value: float64)
        get "blendPoint5/node"(): null | AnimationRootNode
        set "blendPoint5/node"(value: null | AnimationRootNode)
        get "blendPoint5/pos"(): float64
        set "blendPoint5/pos"(value: float64)
        get "blendPoint6/node"(): null | AnimationRootNode
        set "blendPoint6/node"(value: null | AnimationRootNode)
        get "blendPoint6/pos"(): float64
        set "blendPoint6/pos"(value: float64)
        get "blendPoint7/node"(): null | AnimationRootNode
        set "blendPoint7/node"(value: null | AnimationRootNode)
        get "blendPoint7/pos"(): float64
        set "blendPoint7/pos"(value: float64)
        get "blendPoint8/node"(): null | AnimationRootNode
        set "blendPoint8/node"(value: null | AnimationRootNode)
        get "blendPoint8/pos"(): float64
        set "blendPoint8/pos"(value: float64)
        get "blendPoint9/node"(): null | AnimationRootNode
        set "blendPoint9/node"(value: null | AnimationRootNode)
        get "blendPoint9/pos"(): float64
        set "blendPoint9/pos"(value: float64)
        get "blendPoint10/node"(): null | AnimationRootNode
        set "blendPoint10/node"(value: null | AnimationRootNode)
        get "blendPoint10/pos"(): float64
        set "blendPoint10/pos"(value: float64)
        get "blendPoint11/node"(): null | AnimationRootNode
        set "blendPoint11/node"(value: null | AnimationRootNode)
        get "blendPoint11/pos"(): float64
        set "blendPoint11/pos"(value: float64)
        get "blendPoint12/node"(): null | AnimationRootNode
        set "blendPoint12/node"(value: null | AnimationRootNode)
        get "blendPoint12/pos"(): float64
        set "blendPoint12/pos"(value: float64)
        get "blendPoint13/node"(): null | AnimationRootNode
        set "blendPoint13/node"(value: null | AnimationRootNode)
        get "blendPoint13/pos"(): float64
        set "blendPoint13/pos"(value: float64)
        get "blendPoint14/node"(): null | AnimationRootNode
        set "blendPoint14/node"(value: null | AnimationRootNode)
        get "blendPoint14/pos"(): float64
        set "blendPoint14/pos"(value: float64)
        get "blendPoint15/node"(): null | AnimationRootNode
        set "blendPoint15/node"(value: null | AnimationRootNode)
        get "blendPoint15/pos"(): float64
        set "blendPoint15/pos"(value: float64)
        get "blendPoint16/node"(): null | AnimationRootNode
        set "blendPoint16/node"(value: null | AnimationRootNode)
        get "blendPoint16/pos"(): float64
        set "blendPoint16/pos"(value: float64)
        get "blendPoint17/node"(): null | AnimationRootNode
        set "blendPoint17/node"(value: null | AnimationRootNode)
        get "blendPoint17/pos"(): float64
        set "blendPoint17/pos"(value: float64)
        get "blendPoint18/node"(): null | AnimationRootNode
        set "blendPoint18/node"(value: null | AnimationRootNode)
        get "blendPoint18/pos"(): float64
        set "blendPoint18/pos"(value: float64)
        get "blendPoint19/node"(): null | AnimationRootNode
        set "blendPoint19/node"(value: null | AnimationRootNode)
        get "blendPoint19/pos"(): float64
        set "blendPoint19/pos"(value: float64)
        get "blendPoint20/node"(): null | AnimationRootNode
        set "blendPoint20/node"(value: null | AnimationRootNode)
        get "blendPoint20/pos"(): float64
        set "blendPoint20/pos"(value: float64)
        get "blendPoint21/node"(): null | AnimationRootNode
        set "blendPoint21/node"(value: null | AnimationRootNode)
        get "blendPoint21/pos"(): float64
        set "blendPoint21/pos"(value: float64)
        get "blendPoint22/node"(): null | AnimationRootNode
        set "blendPoint22/node"(value: null | AnimationRootNode)
        get "blendPoint22/pos"(): float64
        set "blendPoint22/pos"(value: float64)
        get "blendPoint23/node"(): null | AnimationRootNode
        set "blendPoint23/node"(value: null | AnimationRootNode)
        get "blendPoint23/pos"(): float64
        set "blendPoint23/pos"(value: float64)
        get "blendPoint24/node"(): null | AnimationRootNode
        set "blendPoint24/node"(value: null | AnimationRootNode)
        get "blendPoint24/pos"(): float64
        set "blendPoint24/pos"(value: float64)
        get "blendPoint25/node"(): null | AnimationRootNode
        set "blendPoint25/node"(value: null | AnimationRootNode)
        get "blendPoint25/pos"(): float64
        set "blendPoint25/pos"(value: float64)
        get "blendPoint26/node"(): null | AnimationRootNode
        set "blendPoint26/node"(value: null | AnimationRootNode)
        get "blendPoint26/pos"(): float64
        set "blendPoint26/pos"(value: float64)
        get "blendPoint27/node"(): null | AnimationRootNode
        set "blendPoint27/node"(value: null | AnimationRootNode)
        get "blendPoint27/pos"(): float64
        set "blendPoint27/pos"(value: float64)
        get "blendPoint28/node"(): null | AnimationRootNode
        set "blendPoint28/node"(value: null | AnimationRootNode)
        get "blendPoint28/pos"(): float64
        set "blendPoint28/pos"(value: float64)
        get "blendPoint29/node"(): null | AnimationRootNode
        set "blendPoint29/node"(value: null | AnimationRootNode)
        get "blendPoint29/pos"(): float64
        set "blendPoint29/pos"(value: float64)
        get "blendPoint30/node"(): null | AnimationRootNode
        set "blendPoint30/node"(value: null | AnimationRootNode)
        get "blendPoint30/pos"(): float64
        set "blendPoint30/pos"(value: float64)
        get "blendPoint31/node"(): null | AnimationRootNode
        set "blendPoint31/node"(value: null | AnimationRootNode)
        get "blendPoint31/pos"(): float64
        set "blendPoint31/pos"(value: float64)
        get "blendPoint32/node"(): null | AnimationRootNode
        set "blendPoint32/node"(value: null | AnimationRootNode)
        get "blendPoint32/pos"(): float64
        set "blendPoint32/pos"(value: float64)
        get "blendPoint33/node"(): null | AnimationRootNode
        set "blendPoint33/node"(value: null | AnimationRootNode)
        get "blendPoint33/pos"(): float64
        set "blendPoint33/pos"(value: float64)
        get "blendPoint34/node"(): null | AnimationRootNode
        set "blendPoint34/node"(value: null | AnimationRootNode)
        get "blendPoint34/pos"(): float64
        set "blendPoint34/pos"(value: float64)
        get "blendPoint35/node"(): null | AnimationRootNode
        set "blendPoint35/node"(value: null | AnimationRootNode)
        get "blendPoint35/pos"(): float64
        set "blendPoint35/pos"(value: float64)
        get "blendPoint36/node"(): null | AnimationRootNode
        set "blendPoint36/node"(value: null | AnimationRootNode)
        get "blendPoint36/pos"(): float64
        set "blendPoint36/pos"(value: float64)
        get "blendPoint37/node"(): null | AnimationRootNode
        set "blendPoint37/node"(value: null | AnimationRootNode)
        get "blendPoint37/pos"(): float64
        set "blendPoint37/pos"(value: float64)
        get "blendPoint38/node"(): null | AnimationRootNode
        set "blendPoint38/node"(value: null | AnimationRootNode)
        get "blendPoint38/pos"(): float64
        set "blendPoint38/pos"(value: float64)
        get "blendPoint39/node"(): null | AnimationRootNode
        set "blendPoint39/node"(value: null | AnimationRootNode)
        get "blendPoint39/pos"(): float64
        set "blendPoint39/pos"(value: float64)
        get "blendPoint40/node"(): null | AnimationRootNode
        set "blendPoint40/node"(value: null | AnimationRootNode)
        get "blendPoint40/pos"(): float64
        set "blendPoint40/pos"(value: float64)
        get "blendPoint41/node"(): null | AnimationRootNode
        set "blendPoint41/node"(value: null | AnimationRootNode)
        get "blendPoint41/pos"(): float64
        set "blendPoint41/pos"(value: float64)
        get "blendPoint42/node"(): null | AnimationRootNode
        set "blendPoint42/node"(value: null | AnimationRootNode)
        get "blendPoint42/pos"(): float64
        set "blendPoint42/pos"(value: float64)
        get "blendPoint43/node"(): null | AnimationRootNode
        set "blendPoint43/node"(value: null | AnimationRootNode)
        get "blendPoint43/pos"(): float64
        set "blendPoint43/pos"(value: float64)
        get "blendPoint44/node"(): null | AnimationRootNode
        set "blendPoint44/node"(value: null | AnimationRootNode)
        get "blendPoint44/pos"(): float64
        set "blendPoint44/pos"(value: float64)
        get "blendPoint45/node"(): null | AnimationRootNode
        set "blendPoint45/node"(value: null | AnimationRootNode)
        get "blendPoint45/pos"(): float64
        set "blendPoint45/pos"(value: float64)
        get "blendPoint46/node"(): null | AnimationRootNode
        set "blendPoint46/node"(value: null | AnimationRootNode)
        get "blendPoint46/pos"(): float64
        set "blendPoint46/pos"(value: float64)
        get "blendPoint47/node"(): null | AnimationRootNode
        set "blendPoint47/node"(value: null | AnimationRootNode)
        get "blendPoint47/pos"(): float64
        set "blendPoint47/pos"(value: float64)
        get "blendPoint48/node"(): null | AnimationRootNode
        set "blendPoint48/node"(value: null | AnimationRootNode)
        get "blendPoint48/pos"(): float64
        set "blendPoint48/pos"(value: float64)
        get "blendPoint49/node"(): null | AnimationRootNode
        set "blendPoint49/node"(value: null | AnimationRootNode)
        get "blendPoint49/pos"(): float64
        set "blendPoint49/pos"(value: float64)
        get "blendPoint50/node"(): null | AnimationRootNode
        set "blendPoint50/node"(value: null | AnimationRootNode)
        get "blendPoint50/pos"(): float64
        set "blendPoint50/pos"(value: float64)
        get "blendPoint51/node"(): null | AnimationRootNode
        set "blendPoint51/node"(value: null | AnimationRootNode)
        get "blendPoint51/pos"(): float64
        set "blendPoint51/pos"(value: float64)
        get "blendPoint52/node"(): null | AnimationRootNode
        set "blendPoint52/node"(value: null | AnimationRootNode)
        get "blendPoint52/pos"(): float64
        set "blendPoint52/pos"(value: float64)
        get "blendPoint53/node"(): null | AnimationRootNode
        set "blendPoint53/node"(value: null | AnimationRootNode)
        get "blendPoint53/pos"(): float64
        set "blendPoint53/pos"(value: float64)
        get "blendPoint54/node"(): null | AnimationRootNode
        set "blendPoint54/node"(value: null | AnimationRootNode)
        get "blendPoint54/pos"(): float64
        set "blendPoint54/pos"(value: float64)
        get "blendPoint55/node"(): null | AnimationRootNode
        set "blendPoint55/node"(value: null | AnimationRootNode)
        get "blendPoint55/pos"(): float64
        set "blendPoint55/pos"(value: float64)
        get "blendPoint56/node"(): null | AnimationRootNode
        set "blendPoint56/node"(value: null | AnimationRootNode)
        get "blendPoint56/pos"(): float64
        set "blendPoint56/pos"(value: float64)
        get "blendPoint57/node"(): null | AnimationRootNode
        set "blendPoint57/node"(value: null | AnimationRootNode)
        get "blendPoint57/pos"(): float64
        set "blendPoint57/pos"(value: float64)
        get "blendPoint58/node"(): null | AnimationRootNode
        set "blendPoint58/node"(value: null | AnimationRootNode)
        get "blendPoint58/pos"(): float64
        set "blendPoint58/pos"(value: float64)
        get "blendPoint59/node"(): null | AnimationRootNode
        set "blendPoint59/node"(value: null | AnimationRootNode)
        get "blendPoint59/pos"(): float64
        set "blendPoint59/pos"(value: float64)
        get "blendPoint60/node"(): null | AnimationRootNode
        set "blendPoint60/node"(value: null | AnimationRootNode)
        get "blendPoint60/pos"(): float64
        set "blendPoint60/pos"(value: float64)
        get "blendPoint61/node"(): null | AnimationRootNode
        set "blendPoint61/node"(value: null | AnimationRootNode)
        get "blendPoint61/pos"(): float64
        set "blendPoint61/pos"(value: float64)
        get "blendPoint62/node"(): null | AnimationRootNode
        set "blendPoint62/node"(value: null | AnimationRootNode)
        get "blendPoint62/pos"(): float64
        set "blendPoint62/pos"(value: float64)
        get "blendPoint63/node"(): null | AnimationRootNode
        set "blendPoint63/node"(value: null | AnimationRootNode)
        get "blendPoint63/pos"(): float64
        set "blendPoint63/pos"(value: float64)
        
        /** The blend space's axis's lower limit for the points' position. See [method add_blend_point]. */
        get minSpace(): float64
        set minSpace(value: float64)
        
        /** The blend space's axis's upper limit for the points' position. See [method add_blend_point]. */
        get maxSpace(): float64
        set maxSpace(value: float64)
        
        /** Position increment to snap to when moving a point on the axis. */
        get snap(): float64
        set snap(value: float64)
        
        /** Label of the virtual axis of the blend space. */
        get valueLabel(): string
        set valueLabel(value: string)
        
        /** Controls the interpolation between animations. See [enum BlendMode] constants. */
        get blendMode(): int64
        set blendMode(value: int64)
        
        /** If `false`, the blended animations' frame are stopped when the blend value is `0`.  
         *  If `true`, forcing the blended animations to advance frame.  
         */
        get sync(): boolean
        set sync(value: boolean)
    }
    namespace AnimationNodeBlendSpace2D {
        enum BlendMode {
            BlendModeInterpolated = 0,
            BlendModeDiscrete = 1,
            BlendModeDiscreteCarry = 2,
        }
    }
    /** A set of [AnimationRootNode]s placed on 2D coordinates, crossfading between the three adjacent ones. Used by [AnimationTree].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_animationnodeblendspace2d.html  
     */
    class AnimationNodeBlendSpace2D extends AnimationRootNode {
        /** The interpolation between animations is linear. */
        static readonly BLEND_MODE_INTERPOLATED = 0
        
        /** The blend space plays the animation of the animation node which blending position is closest to. Useful for frame-by-frame 2D animations. */
        static readonly BLEND_MODE_DISCRETE = 1
        
        /** Similar to [constant BLEND_MODE_DISCRETE], but starts the new animation at the last animation's playback position. */
        static readonly BLEND_MODE_DISCRETE_CARRY = 2
        constructor(identifier?: any)
        
        /** Adds a new point that represents a [param node] at the position set by [param pos]. You can insert it at a specific index using the [param at_index] argument. If you use the default value for [param at_index], the point is inserted at the end of the blend points array. */
        addBlendPoint(node: AnimationRootNode, pos: Vector2, atIndex?: int64 /* = -1 */): void
        
        /** Updates the position of the point at index [param point] in the blend space. */
        setBlendPointPosition(point: int64, pos: Vector2): void
        
        /** Returns the position of the point at index [param point]. */
        getBlendPointPosition(point: int64): Vector2
        
        /** Changes the [AnimationNode] referenced by the point at index [param point]. */
        setBlendPointNode(point: int64, node: AnimationRootNode): void
        
        /** Returns the [AnimationRootNode] referenced by the point at index [param point]. */
        getBlendPointNode(point: int64): null | AnimationRootNode
        
        /** Removes the point at index [param point] from the blend space. */
        removeBlendPoint(point: int64): void
        
        /** Returns the number of points in the blend space. */
        getBlendPointCount(): int64
        
        /** Creates a new triangle using three points [param x], [param y], and [param z]. Triangles can overlap. You can insert the triangle at a specific index using the [param at_index] argument. If you use the default value for [param at_index], the point is inserted at the end of the blend points array. */
        addTriangle(x: int64, y: int64, z: int64, atIndex?: int64 /* = -1 */): void
        
        /** Returns the position of the point at index [param point] in the triangle of index [param triangle]. */
        getTrianglePoint(triangle: int64, point: int64): int64
        
        /** Removes the triangle at index [param triangle] from the blend space. */
        removeTriangle(triangle: int64): void
        
        /** Returns the number of triangles in the blend space. */
        getTriangleCount(): int64
        _addBlendPoint(index: int64, node: AnimationRootNode): void
        
        /** If `true`, the blend space is triangulated automatically. The mesh updates every time you add or remove points with [method add_blend_point] and [method remove_blend_point]. */
        get autoTriangles(): boolean
        set autoTriangles(value: boolean)
        get "blendPoint0/node"(): null | AnimationRootNode
        set "blendPoint0/node"(value: null | AnimationRootNode)
        get "blendPoint0/pos"(): Vector2
        set "blendPoint0/pos"(value: Vector2)
        get "blendPoint1/node"(): null | AnimationRootNode
        set "blendPoint1/node"(value: null | AnimationRootNode)
        get "blendPoint1/pos"(): Vector2
        set "blendPoint1/pos"(value: Vector2)
        get "blendPoint2/node"(): null | AnimationRootNode
        set "blendPoint2/node"(value: null | AnimationRootNode)
        get "blendPoint2/pos"(): Vector2
        set "blendPoint2/pos"(value: Vector2)
        get "blendPoint3/node"(): null | AnimationRootNode
        set "blendPoint3/node"(value: null | AnimationRootNode)
        get "blendPoint3/pos"(): Vector2
        set "blendPoint3/pos"(value: Vector2)
        get "blendPoint4/node"(): null | AnimationRootNode
        set "blendPoint4/node"(value: null | AnimationRootNode)
        get "blendPoint4/pos"(): Vector2
        set "blendPoint4/pos"(value: Vector2)
        get "blendPoint5/node"(): null | AnimationRootNode
        set "blendPoint5/node"(value: null | AnimationRootNode)
        get "blendPoint5/pos"(): Vector2
        set "blendPoint5/pos"(value: Vector2)
        get "blendPoint6/node"(): null | AnimationRootNode
        set "blendPoint6/node"(value: null | AnimationRootNode)
        get "blendPoint6/pos"(): Vector2
        set "blendPoint6/pos"(value: Vector2)
        get "blendPoint7/node"(): null | AnimationRootNode
        set "blendPoint7/node"(value: null | AnimationRootNode)
        get "blendPoint7/pos"(): Vector2
        set "blendPoint7/pos"(value: Vector2)
        get "blendPoint8/node"(): null | AnimationRootNode
        set "blendPoint8/node"(value: null | AnimationRootNode)
        get "blendPoint8/pos"(): Vector2
        set "blendPoint8/pos"(value: Vector2)
        get "blendPoint9/node"(): null | AnimationRootNode
        set "blendPoint9/node"(value: null | AnimationRootNode)
        get "blendPoint9/pos"(): Vector2
        set "blendPoint9/pos"(value: Vector2)
        get "blendPoint10/node"(): null | AnimationRootNode
        set "blendPoint10/node"(value: null | AnimationRootNode)
        get "blendPoint10/pos"(): Vector2
        set "blendPoint10/pos"(value: Vector2)
        get "blendPoint11/node"(): null | AnimationRootNode
        set "blendPoint11/node"(value: null | AnimationRootNode)
        get "blendPoint11/pos"(): Vector2
        set "blendPoint11/pos"(value: Vector2)
        get "blendPoint12/node"(): null | AnimationRootNode
        set "blendPoint12/node"(value: null | AnimationRootNode)
        get "blendPoint12/pos"(): Vector2
        set "blendPoint12/pos"(value: Vector2)
        get "blendPoint13/node"(): null | AnimationRootNode
        set "blendPoint13/node"(value: null | AnimationRootNode)
        get "blendPoint13/pos"(): Vector2
        set "blendPoint13/pos"(value: Vector2)
        get "blendPoint14/node"(): null | AnimationRootNode
        set "blendPoint14/node"(value: null | AnimationRootNode)
        get "blendPoint14/pos"(): Vector2
        set "blendPoint14/pos"(value: Vector2)
        get "blendPoint15/node"(): null | AnimationRootNode
        set "blendPoint15/node"(value: null | AnimationRootNode)
        get "blendPoint15/pos"(): Vector2
        set "blendPoint15/pos"(value: Vector2)
        get "blendPoint16/node"(): null | AnimationRootNode
        set "blendPoint16/node"(value: null | AnimationRootNode)
        get "blendPoint16/pos"(): Vector2
        set "blendPoint16/pos"(value: Vector2)
        get "blendPoint17/node"(): null | AnimationRootNode
        set "blendPoint17/node"(value: null | AnimationRootNode)
        get "blendPoint17/pos"(): Vector2
        set "blendPoint17/pos"(value: Vector2)
        get "blendPoint18/node"(): null | AnimationRootNode
        set "blendPoint18/node"(value: null | AnimationRootNode)
        get "blendPoint18/pos"(): Vector2
        set "blendPoint18/pos"(value: Vector2)
        get "blendPoint19/node"(): null | AnimationRootNode
        set "blendPoint19/node"(value: null | AnimationRootNode)
        get "blendPoint19/pos"(): Vector2
        set "blendPoint19/pos"(value: Vector2)
        get "blendPoint20/node"(): null | AnimationRootNode
        set "blendPoint20/node"(value: null | AnimationRootNode)
        get "blendPoint20/pos"(): Vector2
        set "blendPoint20/pos"(value: Vector2)
        get "blendPoint21/node"(): null | AnimationRootNode
        set "blendPoint21/node"(value: null | AnimationRootNode)
        get "blendPoint21/pos"(): Vector2
        set "blendPoint21/pos"(value: Vector2)
        get "blendPoint22/node"(): null | AnimationRootNode
        set "blendPoint22/node"(value: null | AnimationRootNode)
        get "blendPoint22/pos"(): Vector2
        set "blendPoint22/pos"(value: Vector2)
        get "blendPoint23/node"(): null | AnimationRootNode
        set "blendPoint23/node"(value: null | AnimationRootNode)
        get "blendPoint23/pos"(): Vector2
        set "blendPoint23/pos"(value: Vector2)
        get "blendPoint24/node"(): null | AnimationRootNode
        set "blendPoint24/node"(value: null | AnimationRootNode)
        get "blendPoint24/pos"(): Vector2
        set "blendPoint24/pos"(value: Vector2)
        get "blendPoint25/node"(): null | AnimationRootNode
        set "blendPoint25/node"(value: null | AnimationRootNode)
        get "blendPoint25/pos"(): Vector2
        set "blendPoint25/pos"(value: Vector2)
        get "blendPoint26/node"(): null | AnimationRootNode
        set "blendPoint26/node"(value: null | AnimationRootNode)
        get "blendPoint26/pos"(): Vector2
        set "blendPoint26/pos"(value: Vector2)
        get "blendPoint27/node"(): null | AnimationRootNode
        set "blendPoint27/node"(value: null | AnimationRootNode)
        get "blendPoint27/pos"(): Vector2
        set "blendPoint27/pos"(value: Vector2)
        get "blendPoint28/node"(): null | AnimationRootNode
        set "blendPoint28/node"(value: null | AnimationRootNode)
        get "blendPoint28/pos"(): Vector2
        set "blendPoint28/pos"(value: Vector2)
        get "blendPoint29/node"(): null | AnimationRootNode
        set "blendPoint29/node"(value: null | AnimationRootNode)
        get "blendPoint29/pos"(): Vector2
        set "blendPoint29/pos"(value: Vector2)
        get "blendPoint30/node"(): null | AnimationRootNode
        set "blendPoint30/node"(value: null | AnimationRootNode)
        get "blendPoint30/pos"(): Vector2
        set "blendPoint30/pos"(value: Vector2)
        get "blendPoint31/node"(): null | AnimationRootNode
        set "blendPoint31/node"(value: null | AnimationRootNode)
        get "blendPoint31/pos"(): Vector2
        set "blendPoint31/pos"(value: Vector2)
        get "blendPoint32/node"(): null | AnimationRootNode
        set "blendPoint32/node"(value: null | AnimationRootNode)
        get "blendPoint32/pos"(): Vector2
        set "blendPoint32/pos"(value: Vector2)
        get "blendPoint33/node"(): null | AnimationRootNode
        set "blendPoint33/node"(value: null | AnimationRootNode)
        get "blendPoint33/pos"(): Vector2
        set "blendPoint33/pos"(value: Vector2)
        get "blendPoint34/node"(): null | AnimationRootNode
        set "blendPoint34/node"(value: null | AnimationRootNode)
        get "blendPoint34/pos"(): Vector2
        set "blendPoint34/pos"(value: Vector2)
        get "blendPoint35/node"(): null | AnimationRootNode
        set "blendPoint35/node"(value: null | AnimationRootNode)
        get "blendPoint35/pos"(): Vector2
        set "blendPoint35/pos"(value: Vector2)
        get "blendPoint36/node"(): null | AnimationRootNode
        set "blendPoint36/node"(value: null | AnimationRootNode)
        get "blendPoint36/pos"(): Vector2
        set "blendPoint36/pos"(value: Vector2)
        get "blendPoint37/node"(): null | AnimationRootNode
        set "blendPoint37/node"(value: null | AnimationRootNode)
        get "blendPoint37/pos"(): Vector2
        set "blendPoint37/pos"(value: Vector2)
        get "blendPoint38/node"(): null | AnimationRootNode
        set "blendPoint38/node"(value: null | AnimationRootNode)
        get "blendPoint38/pos"(): Vector2
        set "blendPoint38/pos"(value: Vector2)
        get "blendPoint39/node"(): null | AnimationRootNode
        set "blendPoint39/node"(value: null | AnimationRootNode)
        get "blendPoint39/pos"(): Vector2
        set "blendPoint39/pos"(value: Vector2)
        get "blendPoint40/node"(): null | AnimationRootNode
        set "blendPoint40/node"(value: null | AnimationRootNode)
        get "blendPoint40/pos"(): Vector2
        set "blendPoint40/pos"(value: Vector2)
        get "blendPoint41/node"(): null | AnimationRootNode
        set "blendPoint41/node"(value: null | AnimationRootNode)
        get "blendPoint41/pos"(): Vector2
        set "blendPoint41/pos"(value: Vector2)
        get "blendPoint42/node"(): null | AnimationRootNode
        set "blendPoint42/node"(value: null | AnimationRootNode)
        get "blendPoint42/pos"(): Vector2
        set "blendPoint42/pos"(value: Vector2)
        get "blendPoint43/node"(): null | AnimationRootNode
        set "blendPoint43/node"(value: null | AnimationRootNode)
        get "blendPoint43/pos"(): Vector2
        set "blendPoint43/pos"(value: Vector2)
        get "blendPoint44/node"(): null | AnimationRootNode
        set "blendPoint44/node"(value: null | AnimationRootNode)
        get "blendPoint44/pos"(): Vector2
        set "blendPoint44/pos"(value: Vector2)
        get "blendPoint45/node"(): null | AnimationRootNode
        set "blendPoint45/node"(value: null | AnimationRootNode)
        get "blendPoint45/pos"(): Vector2
        set "blendPoint45/pos"(value: Vector2)
        get "blendPoint46/node"(): null | AnimationRootNode
        set "blendPoint46/node"(value: null | AnimationRootNode)
        get "blendPoint46/pos"(): Vector2
        set "blendPoint46/pos"(value: Vector2)
        get "blendPoint47/node"(): null | AnimationRootNode
        set "blendPoint47/node"(value: null | AnimationRootNode)
        get "blendPoint47/pos"(): Vector2
        set "blendPoint47/pos"(value: Vector2)
        get "blendPoint48/node"(): null | AnimationRootNode
        set "blendPoint48/node"(value: null | AnimationRootNode)
        get "blendPoint48/pos"(): Vector2
        set "blendPoint48/pos"(value: Vector2)
        get "blendPoint49/node"(): null | AnimationRootNode
        set "blendPoint49/node"(value: null | AnimationRootNode)
        get "blendPoint49/pos"(): Vector2
        set "blendPoint49/pos"(value: Vector2)
        get "blendPoint50/node"(): null | AnimationRootNode
        set "blendPoint50/node"(value: null | AnimationRootNode)
        get "blendPoint50/pos"(): Vector2
        set "blendPoint50/pos"(value: Vector2)
        get "blendPoint51/node"(): null | AnimationRootNode
        set "blendPoint51/node"(value: null | AnimationRootNode)
        get "blendPoint51/pos"(): Vector2
        set "blendPoint51/pos"(value: Vector2)
        get "blendPoint52/node"(): null | AnimationRootNode
        set "blendPoint52/node"(value: null | AnimationRootNode)
        get "blendPoint52/pos"(): Vector2
        set "blendPoint52/pos"(value: Vector2)
        get "blendPoint53/node"(): null | AnimationRootNode
        set "blendPoint53/node"(value: null | AnimationRootNode)
        get "blendPoint53/pos"(): Vector2
        set "blendPoint53/pos"(value: Vector2)
        get "blendPoint54/node"(): null | AnimationRootNode
        set "blendPoint54/node"(value: null | AnimationRootNode)
        get "blendPoint54/pos"(): Vector2
        set "blendPoint54/pos"(value: Vector2)
        get "blendPoint55/node"(): null | AnimationRootNode
        set "blendPoint55/node"(value: null | AnimationRootNode)
        get "blendPoint55/pos"(): Vector2
        set "blendPoint55/pos"(value: Vector2)
        get "blendPoint56/node"(): null | AnimationRootNode
        set "blendPoint56/node"(value: null | AnimationRootNode)
        get "blendPoint56/pos"(): Vector2
        set "blendPoint56/pos"(value: Vector2)
        get "blendPoint57/node"(): null | AnimationRootNode
        set "blendPoint57/node"(value: null | AnimationRootNode)
        get "blendPoint57/pos"(): Vector2
        set "blendPoint57/pos"(value: Vector2)
        get "blendPoint58/node"(): null | AnimationRootNode
        set "blendPoint58/node"(value: null | AnimationRootNode)
        get "blendPoint58/pos"(): Vector2
        set "blendPoint58/pos"(value: Vector2)
        get "blendPoint59/node"(): null | AnimationRootNode
        set "blendPoint59/node"(value: null | AnimationRootNode)
        get "blendPoint59/pos"(): Vector2
        set "blendPoint59/pos"(value: Vector2)
        get "blendPoint60/node"(): null | AnimationRootNode
        set "blendPoint60/node"(value: null | AnimationRootNode)
        get "blendPoint60/pos"(): Vector2
        set "blendPoint60/pos"(value: Vector2)
        get "blendPoint61/node"(): null | AnimationRootNode
        set "blendPoint61/node"(value: null | AnimationRootNode)
        get "blendPoint61/pos"(): Vector2
        set "blendPoint61/pos"(value: Vector2)
        get "blendPoint62/node"(): null | AnimationRootNode
        set "blendPoint62/node"(value: null | AnimationRootNode)
        get "blendPoint62/pos"(): Vector2
        set "blendPoint62/pos"(value: Vector2)
        get "blendPoint63/node"(): null | AnimationRootNode
        set "blendPoint63/node"(value: null | AnimationRootNode)
        get "blendPoint63/pos"(): Vector2
        set "blendPoint63/pos"(value: Vector2)
        get triangles(): PackedInt32Array
        set triangles(value: PackedInt32Array | int32[])
        
        /** The blend space's X and Y axes' lower limit for the points' position. See [method add_blend_point]. */
        get minSpace(): Vector2
        set minSpace(value: Vector2)
        
        /** The blend space's X and Y axes' upper limit for the points' position. See [method add_blend_point]. */
        get maxSpace(): Vector2
        set maxSpace(value: Vector2)
        
        /** Position increment to snap to when moving a point. */
        get snap(): Vector2
        set snap(value: Vector2)
        
        /** Name of the blend space's X axis. */
        get xLabel(): string
        set xLabel(value: string)
        
        /** Name of the blend space's Y axis. */
        get yLabel(): string
        set yLabel(value: string)
        
        /** Controls the interpolation between animations. See [enum BlendMode] constants. */
        get blendMode(): int64
        set blendMode(value: int64)
        
        /** If `false`, the blended animations' frame are stopped when the blend value is `0`.  
         *  If `true`, forcing the blended animations to advance frame.  
         */
        get sync(): boolean
        set sync(value: boolean)
        
        /** Emitted every time the blend space's triangles are created, removed, or when one of their vertices changes position. */
        readonly trianglesUpdated: Signal<() => void>
    }
    /** A sub-tree of many type [AnimationNode]s used for complex animations. Used by [AnimationTree].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_animationnodeblendtree.html  
     */
    class AnimationNodeBlendTree extends AnimationRootNode {
        /** The connection was successful. */
        static readonly CONNECTION_OK = 0
        
        /** The input node is `null`. */
        static readonly CONNECTION_ERROR_NO_INPUT = 1
        
        /** The specified input port is out of range. */
        static readonly CONNECTION_ERROR_NO_INPUT_INDEX = 2
        
        /** The output node is `null`. */
        static readonly CONNECTION_ERROR_NO_OUTPUT = 3
        
        /** Input and output nodes are the same. */
        static readonly CONNECTION_ERROR_SAME_NODE = 4
        
        /** The specified connection already exists. */
        static readonly CONNECTION_ERROR_CONNECTION_EXISTS = 5
        constructor(identifier?: any)
        
        /** Adds an [AnimationNode] at the given [param position]. The [param name] is used to identify the created sub animation node later. */
        addNode(name: StringName, node: AnimationNode, position?: Vector2 /* = Vector2.ZERO */): void
        
        /** Returns the sub animation node with the specified [param name]. */
        getNode(name: StringName): null | AnimationNode
        
        /** Removes a sub animation node. */
        removeNode(name: StringName): void
        
        /** Changes the name of a sub animation node. */
        renameNode(name: StringName, newName: StringName): void
        
        /** Returns `true` if a sub animation node with specified [param name] exists. */
        hasNode(name: StringName): boolean
        
        /** Connects the output of an [AnimationNode] as input for another [AnimationNode], at the input port specified by [param input_index]. */
        connectNode(inputNode: StringName, inputIndex: int64, outputNode: StringName): void
        
        /** Disconnects the animation node connected to the specified input. */
        disconnectNode(inputNode: StringName, inputIndex: int64): void
        
        /** Returns a list containing the names of all sub animation nodes in this blend tree. */
        getNodeList(): GArray
        
        /** Modifies the position of a sub animation node. */
        setNodePosition(name: StringName, position: Vector2): void
        
        /** Returns the position of the sub animation node with the specified [param name]. */
        getNodePosition(name: StringName): Vector2
        
        /** The global offset of all sub animation nodes. */
        get graphOffset(): Vector2
        set graphOffset(value: Vector2)
        
        /** Emitted when the input port information is changed. */
        readonly nodeChanged: Signal<(nodeName: StringName) => void>
    }
    /** Base class for extending [AnimationRootNode]s from GDScript, C#, or C++.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_animationnodeextension.html  
     */
    class AnimationNodeExtension extends AnimationNode {
        constructor(identifier?: any)
        /** A version of the [method AnimationNode._process] method that is meant to be overridden by custom nodes. It returns a [PackedFloat32Array] with the processed animation data.  
         *  The [PackedFloat64Array] parameter contains the playback information, containing the following values encoded as floating point numbers (in order): playback time and delta, start and end times, whether a seek was requested (encoded as a float greater than `0`), whether the seek request was externally requested (encoded as a float greater than `0`), the current [enum Animation.LoopedFlag] (encoded as a float), and the current blend weight.  
         *  The function must return a [PackedFloat32Array] of the node's time info, containing the following values (in order): animation length, time position, delta, [enum Animation.LoopMode] (encoded as a float), whether the animation is about to end (encoded as a float greater than `0`) and whether the animation is infinite (encoded as a float greater than `0`). All values must be included in the returned array.  
         */
        /* gdvirtual */ _processAnimationNode(playbackInfo: PackedFloat64Array | float64[], testOnly: boolean): PackedFloat32Array
        
        /** Returns `true` if the animation for the given [param node_info] is looping. */
        static isLooping(nodeInfo: PackedFloat32Array | float32[]): boolean
        
        /** Returns the animation's remaining time for the given node info. For looping animations, it will only return the remaining time if [param break_loop] is `true`, a large integer value will be returned otherwise. */
        static getRemainingTime(nodeInfo: PackedFloat32Array | float32[], breakLoop: boolean): float64
    }
    namespace AnimationNodeOneShot {
        enum OneShotRequest {
            OneShotRequestNone = 0,
            OneShotRequestFire = 1,
            OneShotRequestAbort = 2,
            OneShotRequestFadeOut = 3,
        }
        enum MixMode {
            MixModeBlend = 0,
            MixModeAdd = 1,
        }
    }
    /** Plays an animation once in an [AnimationNodeBlendTree].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_animationnodeoneshot.html  
     */
    class AnimationNodeOneShot extends AnimationNodeSync {
        /** The default state of the request. Nothing is done. */
        static readonly ONE_SHOT_REQUEST_NONE = 0
        
        /** The request to play the animation connected to "shot" port. */
        static readonly ONE_SHOT_REQUEST_FIRE = 1
        
        /** The request to stop the animation connected to "shot" port. */
        static readonly ONE_SHOT_REQUEST_ABORT = 2
        
        /** The request to fade out the animation connected to "shot" port. */
        static readonly ONE_SHOT_REQUEST_FADE_OUT = 3
        
        /** Blends two animations. See also [AnimationNodeBlend2]. */
        static readonly MIX_MODE_BLEND = 0
        
        /** Blends two animations additively. See also [AnimationNodeAdd2]. */
        static readonly MIX_MODE_ADD = 1
        constructor(identifier?: any)
        
        /** The blend type. */
        get mixMode(): int64
        set mixMode(value: int64)
        
        /** The fade-in duration. For example, setting this to `1.0` for a 5 second length animation will produce a cross-fade that starts at 0 second and ends at 1 second during the animation.  
         *      
         *  **Note:** [AnimationNodeOneShot] transitions the current state after the fading has finished.  
         */
        get fadeInTime(): float64
        set fadeInTime(value: float64)
        
        /** Determines how cross-fading between animations is eased. If empty, the transition will be linear. Should be a unit [Curve]. */
        get fadeInCurve(): null | Curve
        set fadeInCurve(value: null | Curve)
        
        /** The fade-out duration. For example, setting this to `1.0` for a 5 second length animation will produce a cross-fade that starts at 4 second and ends at 5 second during the animation.  
         *      
         *  **Note:** [AnimationNodeOneShot] transitions the current state after the fading has finished.  
         */
        get fadeOutTime(): float64
        set fadeOutTime(value: float64)
        
        /** Determines how cross-fading between animations is eased. If empty, the transition will be linear. Should be a unit [Curve]. */
        get fadeOutCurve(): null | Curve
        set fadeOutCurve(value: null | Curve)
        
        /** If `true`, breaks the loop at the end of the loop cycle for transition, even if the animation is looping. */
        get breakLoopAtEnd(): boolean
        set breakLoopAtEnd(value: boolean)
        
        /** If `true`, the sub-animation will restart automatically after finishing.  
         *  In other words, to start auto restarting, the animation must be played once with the [constant ONE_SHOT_REQUEST_FIRE] request. The [constant ONE_SHOT_REQUEST_ABORT] request stops the auto restarting, but it does not disable the [member autorestart] itself. So, the [constant ONE_SHOT_REQUEST_FIRE] request will start auto restarting again.  
         */
        get autorestart(): boolean
        set autorestart(value: boolean)
        
        /** The delay after which the automatic restart is triggered, in seconds. */
        get autorestartDelay(): float64
        set autorestartDelay(value: float64)
        
        /** If [member autorestart] is `true`, a random additional delay (in seconds) between 0 and this value will be added to [member autorestart_delay]. */
        get autorestartRandomDelay(): float64
        set autorestartRandomDelay(value: float64)
    }
    /** The animation output node of an [AnimationNodeBlendTree].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_animationnodeoutput.html  
     */
    class AnimationNodeOutput extends AnimationNode {
        constructor(identifier?: any)
    }
    namespace AnimationNodeStateMachine {
        enum StateMachineType {
            StateMachineTypeRoot = 0,
            StateMachineTypeNested = 1,
            StateMachineTypeGrouped = 2,
        }
    }
    /** A state machine with multiple [AnimationRootNode]s, used by [AnimationTree].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_animationnodestatemachine.html  
     */
    class AnimationNodeStateMachine extends AnimationRootNode {
        /** Seeking to the beginning is treated as playing from the start state. Transition to the end state is treated as exiting the state machine. */
        static readonly STATE_MACHINE_TYPE_ROOT = 0
        
        /** Seeking to the beginning is treated as seeking to the beginning of the animation in the current state. Transition to the end state, or the absence of transitions in each state, is treated as exiting the state machine. */
        static readonly STATE_MACHINE_TYPE_NESTED = 1
        
        /** This is a grouped state machine that can be controlled from a parent state machine. It does not work independently. There must be a state machine with [member state_machine_type] of [constant STATE_MACHINE_TYPE_ROOT] or [constant STATE_MACHINE_TYPE_NESTED] in the parent or ancestor. */
        static readonly STATE_MACHINE_TYPE_GROUPED = 2
        constructor(identifier?: any)
        
        /** Adds a new animation node to the graph. The [param position] is used for display in the editor. */
        addNode(name: StringName, node: AnimationNode, position?: Vector2 /* = Vector2.ZERO */): void
        
        /** Replaces the given animation node with a new animation node. */
        replaceNode(name: StringName, node: AnimationNode): void
        
        /** Returns the animation node with the given name. */
        getNode(name: StringName): null | AnimationNode
        
        /** Deletes the given animation node from the graph. */
        removeNode(name: StringName): void
        
        /** Renames the given animation node. */
        renameNode(name: StringName, newName: StringName): void
        
        /** Returns `true` if the graph contains the given animation node. */
        hasNode(name: StringName): boolean
        
        /** Returns the given animation node's name. */
        getNodeName(node: AnimationNode): StringName
        
        /** Returns a list containing the names of all animation nodes in this state machine. */
        getNodeList(): GArray
        
        /** Sets the animation node's coordinates. Used for display in the editor. */
        setNodePosition(name: StringName, position: Vector2): void
        
        /** Returns the given animation node's coordinates. Used for display in the editor. */
        getNodePosition(name: StringName): Vector2
        
        /** Returns `true` if there is a transition between the given animation nodes. */
        hasTransition(from: StringName, to: StringName): boolean
        
        /** Adds a transition between the given animation nodes. */
        addTransition(from: StringName, to: StringName, transition: AnimationNodeStateMachineTransition): void
        
        /** Returns the given transition. */
        getTransition(idx: int64): null | AnimationNodeStateMachineTransition
        
        /** Returns the given transition's start node. */
        getTransitionFrom(idx: int64): StringName
        
        /** Returns the given transition's end node. */
        getTransitionTo(idx: int64): StringName
        
        /** Returns the number of connections in the graph. */
        getTransitionCount(): int64
        
        /** Deletes the given transition by index. */
        removeTransitionByIndex(idx: int64): void
        
        /** Deletes the transition between the two specified animation nodes. */
        removeTransition(from: StringName, to: StringName): void
        
        /** Sets the draw offset of the graph. Used for display in the editor. */
        setGraphOffset(offset: Vector2): void
        
        /** Returns the draw offset of the graph. Used for display in the editor. */
        getGraphOffset(): Vector2
        
        /** This property can define the process of transitions for different use cases. See also [enum AnimationNodeStateMachine.StateMachineType]. */
        get stateMachineType(): int64
        set stateMachineType(value: int64)
        
        /** If `true`, allows teleport to the self state with [method AnimationNodeStateMachinePlayback.travel]. When the reset option is enabled in [method AnimationNodeStateMachinePlayback.travel], the animation is restarted. If `false`, nothing happens on the teleportation to the self state. */
        get allowTransitionToSelf(): boolean
        set allowTransitionToSelf(value: boolean)
        
        /** If `true`, treat the cross-fade to the start and end nodes as a blend with the RESET animation.  
         *  In most cases, when additional cross-fades are performed in the parent [AnimationNode] of the state machine, setting this property to `false` and matching the cross-fade time of the parent [AnimationNode] and the state machine's start node and end node gives good results.  
         */
        get resetEnds(): boolean
        set resetEnds(value: boolean)
    }
    /** Provides playback control for an [AnimationNodeStateMachine].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_animationnodestatemachineplayback.html  
     */
    class AnimationNodeStateMachinePlayback extends Resource {
        constructor(identifier?: any)
        /** Transitions from the current state to another one, following the shortest path.  
         *  If the path does not connect from the current state, the animation will play after the state teleports.  
         *  If [param reset_on_teleport] is `true`, the animation is played from the beginning when the travel cause a teleportation.  
         */
        travel(toNode: StringName, resetOnTeleport?: boolean /* = true */): void
        
        /** Starts playing the given animation.  
         *  If [param reset] is `true`, the animation is played from the beginning.  
         */
        start(node: StringName, reset?: boolean /* = true */): void
        
        /** If there is a next path by travel or auto advance, immediately transitions from the current state to the next state. */
        next(): void
        
        /** Stops the currently playing animation. */
        stop(): void
        
        /** Returns `true` if an animation is playing. */
        isPlaying(): boolean
        
        /** Returns the currently playing animation state.  
         *      
         *  **Note:** When using a cross-fade, the current state changes to the next state immediately after the cross-fade begins.  
         */
        getCurrentNode(): StringName
        
        /** Returns the playback position within the current animation state. */
        getCurrentPlayPosition(): float64
        
        /** Returns the current state length.  
         *      
         *  **Note:** It is possible that any [AnimationRootNode] can be nodes as well as animations. This means that there can be multiple animations within a single state. Which animation length has priority depends on the nodes connected inside it. Also, if a transition does not reset, the remaining length at that point will be returned.  
         */
        getCurrentLength(): float64
        
        /** Returns the starting state of currently fading animation. */
        getFadingFromNode(): StringName
        
        /** Returns the current travel path as computed internally by the A* algorithm. */
        getTravelPath(): GArray
    }
    namespace AnimationNodeStateMachineTransition {
        enum SwitchMode {
            SwitchModeImmediate = 0,
            SwitchModeSync = 1,
            SwitchModeAtEnd = 2,
        }
        enum AdvanceMode {
            AdvanceModeDisabled = 0,
            AdvanceModeEnabled = 1,
            AdvanceModeAuto = 2,
        }
    }
    /** A transition within an [AnimationNodeStateMachine] connecting two [AnimationRootNode]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_animationnodestatemachinetransition.html  
     */
    class AnimationNodeStateMachineTransition extends Resource {
        /** Switch to the next state immediately. The current state will end and blend into the beginning of the new one. */
        static readonly SWITCH_MODE_IMMEDIATE = 0
        
        /** Switch to the next state immediately, but will seek the new state to the playback position of the old state. */
        static readonly SWITCH_MODE_SYNC = 1
        
        /** Wait for the current state playback to end, then switch to the beginning of the next state animation. */
        static readonly SWITCH_MODE_AT_END = 2
        
        /** Don't use this transition. */
        static readonly ADVANCE_MODE_DISABLED = 0
        
        /** Only use this transition during [method AnimationNodeStateMachinePlayback.travel]. */
        static readonly ADVANCE_MODE_ENABLED = 1
        
        /** Automatically use this transition if the [member advance_condition] and [member advance_expression] checks are `true` (if assigned). */
        static readonly ADVANCE_MODE_AUTO = 2
        constructor(identifier?: any)
        
        /** The time to cross-fade between this state and the next.  
         *      
         *  **Note:** [AnimationNodeStateMachine] transitions the current state immediately after the start of the fading. The precise remaining time can only be inferred from the main animation. When [AnimationNodeOutput] is considered as the most upstream, so the [member xfade_time] is not scaled depending on the downstream delta. See also [member AnimationNodeOneShot.fadeout_time].  
         */
        get xfadeTime(): float64
        set xfadeTime(value: float64)
        
        /** Ease curve for better control over cross-fade between this state and the next. Should be a unit [Curve]. */
        get xfadeCurve(): null | Curve
        set xfadeCurve(value: null | Curve)
        
        /** If `true`, breaks the loop at the end of the loop cycle for transition, even if the animation is looping. */
        get breakLoopAtEnd(): boolean
        set breakLoopAtEnd(value: boolean)
        
        /** If `true`, the destination animation is played back from the beginning when switched. */
        get reset(): boolean
        set reset(value: boolean)
        
        /** Lower priority transitions are preferred when travelling through the tree via [method AnimationNodeStateMachinePlayback.travel] or [member advance_mode] is set to [constant ADVANCE_MODE_AUTO]. */
        get priority(): int64
        set priority(value: int64)
        
        /** The transition type. */
        get switchMode(): int64
        set switchMode(value: int64)
        
        /** Determines whether the transition should be disabled, enabled when using [method AnimationNodeStateMachinePlayback.travel], or traversed automatically if the [member advance_condition] and [member advance_expression] checks are `true` (if assigned). */
        get advanceMode(): int64
        set advanceMode(value: int64)
        
        /** Turn on auto advance when this condition is set. The provided name will become a boolean parameter on the [AnimationTree] that can be controlled from code (see [url=https://docs.godotengine.org/en/latest/tutorials/animation/animation_tree.html#controlling-from-code]Using AnimationTree[/url]). For example, if [member AnimationTree.tree_root] is an [AnimationNodeStateMachine] and [member advance_condition] is set to `"idle"`:  
         *    
         */
        get advanceCondition(): StringName
        set advanceCondition(value: StringName)
        
        /** Use an expression as a condition for state machine transitions. It is possible to create complex animation advance conditions for switching between states and gives much greater flexibility for creating complex state machines by directly interfacing with the script code. */
        get advanceExpression(): string
        set advanceExpression(value: string)
        
        /** Emitted when [member advance_condition] is changed. */
        readonly advanceConditionChanged: Signal<() => void>
    }
    /** Blends two animations subtractively inside of an [AnimationNodeBlendTree].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_animationnodesub2.html  
     */
    class AnimationNodeSub2 extends AnimationNodeSync {
        constructor(identifier?: any)
    }
    /** Base class for [AnimationNode]s with multiple input ports that must be synchronized.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_animationnodesync.html  
     */
    class AnimationNodeSync extends AnimationNode {
        constructor(identifier?: any)
        /** If `false`, the blended animations' frame are stopped when the blend value is `0`.  
         *  If `true`, forcing the blended animations to advance frame.  
         */
        get sync(): boolean
        set sync(value: boolean)
    }
    /** A time-scaling animation node used in [AnimationTree].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_animationnodetimescale.html  
     */
    class AnimationNodeTimeScale extends AnimationNode {
        constructor(identifier?: any)
    }
    /** A time-seeking animation node used in [AnimationTree].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_animationnodetimeseek.html  
     */
    class AnimationNodeTimeSeek extends AnimationNode {
        constructor(identifier?: any)
        /** If `true`, some processes are executed to handle keys between seeks, such as calculating root motion and finding the nearest discrete key. */
        get explicitElapse(): boolean
        set explicitElapse(value: boolean)
    }
    /** A transition within an [AnimationTree] connecting two [AnimationNode]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_animationnodetransition.html  
     */
    class AnimationNodeTransition extends AnimationNodeSync {
        constructor(identifier?: any)
        /** Enables or disables auto-advance for the given [param input] index. If enabled, state changes to the next input after playing the animation once. If enabled for the last input state, it loops to the first. */
        setInputAsAutoAdvance(input: int64, enable: boolean): void
        
        /** Returns `true` if auto-advance is enabled for the given [param input] index. */
        isInputSetAsAutoAdvance(input: int64): boolean
        
        /** If `true`, breaks the loop at the end of the loop cycle for transition, even if the animation is looping. */
        setInputBreakLoopAtEnd(input: int64, enable: boolean): void
        
        /** Returns whether the animation breaks the loop at the end of the loop cycle for transition. */
        isInputLoopBrokenAtEnd(input: int64): boolean
        
        /** If `true`, the destination animation is restarted when the animation transitions. */
        setInputReset(input: int64, enable: boolean): void
        
        /** Returns whether the animation restarts when the animation transitions from the other animation. */
        isInputReset(input: int64): boolean
        
        /** Cross-fading time (in seconds) between each animation connected to the inputs.  
         *      
         *  **Note:** [AnimationNodeTransition] transitions the current state immediately after the start of the fading. The precise remaining time can only be inferred from the main animation. When [AnimationNodeOutput] is considered as the most upstream, so the [member xfade_time] is not scaled depending on the downstream delta. See also [member AnimationNodeOneShot.fadeout_time].  
         */
        get xfadeTime(): float64
        set xfadeTime(value: float64)
        
        /** Determines how cross-fading between animations is eased. If empty, the transition will be linear. Should be a unit [Curve]. */
        get xfadeCurve(): null | Curve
        set xfadeCurve(value: null | Curve)
        
        /** If `true`, allows transition to the self state. When the reset option is enabled in input, the animation is restarted. If `false`, nothing happens on the transition to the self state. */
        get allowTransitionToSelf(): boolean
        set allowTransitionToSelf(value: boolean)
        
        /** The number of enabled input ports for this animation node. */
        get inputCount(): any /*Inputs,input_*/
        set inputCount(value: any /*Inputs,input_*/)
    }
    namespace AnimationPlayer {
        enum AnimationProcessCallback {
            AnimationProcessPhysics = 0,
            AnimationProcessIdle = 1,
            AnimationProcessManual = 2,
        }
        enum AnimationMethodCallMode {
            AnimationMethodCallDeferred = 0,
            AnimationMethodCallImmediate = 1,
        }
    }
    /** A node used for animation playback.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_animationplayer.html  
     */
    class AnimationPlayer<NodeMap extends NodePathMap = any, LibraryMap extends AnimationMixerPathMap = any> extends AnimationMixer<NodeMap, LibraryMap> {
        static readonly ANIMATION_PROCESS_PHYSICS = 0
        static readonly ANIMATION_PROCESS_IDLE = 1
        static readonly ANIMATION_PROCESS_MANUAL = 2
        static readonly ANIMATION_METHOD_CALL_DEFERRED = 0
        static readonly ANIMATION_METHOD_CALL_IMMEDIATE = 1
        constructor(identifier?: any)
        
        /** Triggers the [param animation_to] animation when the [param animation_from] animation completes. */
        animationSetNext(animationFrom: StaticAnimationMixerPath<LibraryMap>, animationTo: StaticAnimationMixerPath<LibraryMap>): void
        
        /** Returns the key of the animation which is queued to play after the [param animation_from] animation. */
        animationGetNext(animationFrom: StaticAnimationMixerPath<LibraryMap>): StaticAnimationMixerPath<LibraryMap>
        
        /** Specifies a blend time (in seconds) between two animations, referenced by their keys. */
        setBlendTime(animationFrom: StaticAnimationMixerPath<LibraryMap>, animationTo: StaticAnimationMixerPath<LibraryMap>, sec: float64): void
        
        /** Returns the blend time (in seconds) between two animations, referenced by their keys. */
        getBlendTime(animationFrom: StaticAnimationMixerPath<LibraryMap>, animationTo: StaticAnimationMixerPath<LibraryMap>): float64
        
        /** Plays the animation with key [param name]. Custom blend times and speed can be set.  
         *  The [param from_end] option only affects when switching to a new animation track, or if the same track but at the start or end. It does not affect resuming playback that was paused in the middle of an animation. If [param custom_speed] is negative and [param from_end] is `true`, the animation will play backwards (which is equivalent to calling [method play_backwards]).  
         *  The [AnimationPlayer] keeps track of its current or last played animation with [member assigned_animation]. If this method is called with that same animation [param name], or with no [param name] parameter, the assigned animation will resume playing if it was paused.  
         *      
         *  **Note:** The animation will be updated the next time the [AnimationPlayer] is processed. If other variables are updated at the same time this is called, they may be updated too early. To perform the update immediately, call `advance(0)`.  
         */
        play(name: StaticAnimationMixerPath<LibraryMap> /* = '' */, customBlend?: float64 /* = -1 */, customSpeed?: float64 /* = 1 */, fromEnd?: boolean /* = false */): void
        
        /** Plays the animation with key [param name] and the section starting from [param start_marker] and ending on [param end_marker].  
         *  If the start marker is empty, the section starts from the beginning of the animation. If the end marker is empty, the section ends on the end of the animation. See also [method play].  
         */
        playSectionWithMarkers(name?: StringName /* = '' */, startMarker?: StringName /* = '' */, endMarker?: StringName /* = '' */, customBlend?: float64 /* = -1 */, customSpeed?: float64 /* = 1 */, fromEnd?: boolean /* = false */): void
        
        /** Plays the animation with key [param name] and the section starting from [param start_time] and ending on [param end_time]. See also [method play].  
         *  Setting [param start_time] to a value outside the range of the animation means the start of the animation will be used instead, and setting [param end_time] to a value outside the range of the animation means the end of the animation will be used instead. [param start_time] cannot be equal to [param end_time].  
         */
        playSection(name: StaticAnimationMixerPath<LibraryMap> /* = '' */, startTime?: float64 /* = -1 */, endTime?: float64 /* = -1 */, customBlend?: float64 /* = -1 */, customSpeed?: float64 /* = 1 */, fromEnd?: boolean /* = false */): void
        
        /** Plays the animation with key [param name] in reverse.  
         *  This method is a shorthand for [method play] with `custom_speed = -1.0` and `from_end = true`, so see its description for more information.  
         */
        playBackwards(name: StaticAnimationMixerPath<LibraryMap> /* = '' */, customBlend?: float64 /* = -1 */): void
        
        /** Plays the animation with key [param name] and the section starting from [param start_marker] and ending on [param end_marker] in reverse.  
         *  This method is a shorthand for [method play_section_with_markers] with `custom_speed = -1.0` and `from_end = true`, see its description for more information.  
         */
        playSectionWithMarkersBackwards(name: StaticAnimationMixerPath<LibraryMap> /* = '' */, startMarker?: StringName /* = '' */, endMarker?: StringName /* = '' */, customBlend?: float64 /* = -1 */): void
        
        /** Plays the animation with key [param name] and the section starting from [param start_time] and ending on [param end_time] in reverse.  
         *  This method is a shorthand for [method play_section] with `custom_speed = -1.0` and `from_end = true`, see its description for more information.  
         */
        playSectionBackwards(name: StaticAnimationMixerPath<LibraryMap> /* = '' */, startTime?: float64 /* = -1 */, endTime?: float64 /* = -1 */, customBlend?: float64 /* = -1 */): void
        
        /** See also [method AnimationMixer.capture].  
         *  You can use this method to use more detailed options for capture than those performed by [member playback_auto_capture]. When [member playback_auto_capture] is `false`, this method is almost the same as the following:  
         *    
         *  If [param name] is blank, it specifies [member assigned_animation].  
         *  If [param duration] is a negative value, the duration is set to the interval between the current position and the first key, when [param from_end] is `true`, uses the interval between the current position and the last key instead.  
         *      
         *  **Note:** The [param duration] takes [member speed_scale] into account, but [param custom_speed] does not, because the capture cache is interpolated with the blend result and the result may contain multiple animations.  
         */
        playWithCapture(name: StaticAnimationMixerPath<LibraryMap> /* = '' */, duration?: float64 /* = -1 */, customBlend?: float64 /* = -1 */, customSpeed?: float64 /* = 1 */, fromEnd?: boolean /* = false */, transType?: Tween.TransitionType /* = 0 */, easeType?: Tween.EaseType /* = 0 */): void
        
        /** Pauses the currently playing animation. The [member current_animation_position] will be kept and calling [method play] or [method play_backwards] without arguments or with the same animation name as [member assigned_animation] will resume the animation.  
         *  See also [method stop].  
         */
        pause(): void
        
        /** Stops the currently playing animation. The animation position is reset to `0` and the `custom_speed` is reset to `1.0`. See also [method pause].  
         *  If [param keep_state] is `true`, the animation state is not updated visually.  
         *      
         *  **Note:** The method / audio / animation playback tracks will not be processed by this method.  
         */
        stop(keepState?: boolean /* = false */): void
        
        /** Returns `true` if an animation is currently playing (even if [member speed_scale] and/or `custom_speed` are `0`). */
        isPlaying(): boolean
        
        /** Queues an animation for playback once the current animation and all previously queued animations are done.  
         *      
         *  **Note:** If a looped animation is currently playing, the queued animation will never play unless the looped animation is stopped somehow.  
         */
        queue(name: StaticAnimationMixerPath<LibraryMap>): void
        
        /** Returns a list of the animation keys that are currently queued to play. */
        getQueue(): PackedStringArray
        
        /** Clears all queued, unplayed animations. */
        clearQueue(): void
        
        /** Returns the actual playing speed of current animation or `0` if not playing. This speed is the [member speed_scale] property multiplied by `custom_speed` argument specified when calling the [method play] method.  
         *  Returns a negative value if the current animation is playing backwards.  
         */
        getPlayingSpeed(): float64
        
        /** Changes the start and end markers of the section being played. The current playback position will be clamped within the new section. See also [method play_section_with_markers].  
         *  If the argument is empty, the section uses the beginning or end of the animation. If both are empty, it means that the section is not set.  
         */
        setSectionWithMarkers(startMarker?: StringName /* = '' */, endMarker?: StringName /* = '' */): void
        
        /** Changes the start and end times of the section being played. The current playback position will be clamped within the new section. See also [method play_section]. */
        setSection(startTime?: float64 /* = -1 */, endTime?: float64 /* = -1 */): void
        
        /** Resets the current section. Does nothing if a section has not been set. */
        resetSection(): void
        
        /** Returns the start time of the section currently being played. */
        getSectionStartTime(): float64
        
        /** Returns the end time of the section currently being played. */
        getSectionEndTime(): float64
        
        /** Returns `true` if an animation is currently playing with a section. */
        hasSection(): boolean
        
        /** Seeks the animation to the [param seconds] point in time (in seconds). If [param update] is `true`, the animation updates too, otherwise it updates at process time. Events between the current frame and [param seconds] are skipped.  
         *  If [param update_only] is `true`, the method / audio / animation playback tracks will not be processed.  
         *      
         *  **Note:** Seeking to the end of the animation doesn't emit [signal AnimationMixer.animation_finished]. If you want to skip animation and emit the signal, use [method AnimationMixer.advance].  
         */
        seek(seconds: float64, update?: boolean /* = false */, updateOnly?: boolean /* = false */): void
        
        /** Sets the process notification in which to update animations. */
        setProcessCallback(mode: AnimationPlayer.AnimationProcessCallback): void
        
        /** Returns the process notification in which to update animations. */
        getProcessCallback(): AnimationPlayer.AnimationProcessCallback
        
        /** Sets the call mode used for "Call Method" tracks. */
        setMethodCallMode(mode: AnimationPlayer.AnimationMethodCallMode): void
        
        /** Returns the call mode used for "Call Method" tracks. */
        getMethodCallMode(): AnimationPlayer.AnimationMethodCallMode
        
        /** Sets the node which node path references will travel from. */
        setRoot(path: NodePath | string): void
        
        /** Returns the node which node path references will travel from. */
        getRoot(): NodePath
        
        /** The key of the currently playing animation. If no animation is playing, the property's value is an empty string. Changing this value does not restart the animation. See [method play] for more information on playing animations.  
         *      
         *  **Note:** While this property appears in the Inspector, it's not meant to be edited, and it's not saved in the scene. This property is mainly used to get the currently playing animation, and internally for animation playback tracks. For more information, see [Animation].  
         */
        get currentAnimation(): StaticAnimationMixerPath<LibraryMap>
        set currentAnimation(value: StaticAnimationMixerPath<LibraryMap>)
        
        /** If playing, the current animation's key, otherwise, the animation last played. When set, this changes the animation, but will not play it unless already playing. See also [member current_animation]. */
        get assignedAnimation(): StaticAnimationMixerPath<LibraryMap>
        set assignedAnimation(value: StaticAnimationMixerPath<LibraryMap>)
        
        /** The key of the animation to play when the scene loads. */
        get autoplay(): StaticAnimationMixerPath<LibraryMap>
        set autoplay(value: StaticAnimationMixerPath<LibraryMap>)
        
        /** The length (in seconds) of the currently playing animation. */
        get currentAnimationLength(): float64
        set currentAnimationLength(value: float64)
        
        /** The position (in seconds) of the currently playing animation. */
        get currentAnimationPosition(): float64
        set currentAnimationPosition(value: float64)
        
        /** If `true`, performs [method AnimationMixer.capture] before playback automatically. This means just [method play_with_capture] is executed with default arguments instead of [method play].  
         *      
         *  **Note:** Capture interpolation is only performed if the animation contains a capture track. See also [constant Animation.UPDATE_CAPTURE].  
         */
        get playbackAutoCapture(): boolean
        set playbackAutoCapture(value: boolean)
        
        /** See also [method play_with_capture] and [method AnimationMixer.capture].  
         *  If [member playback_auto_capture_duration] is negative value, the duration is set to the interval between the current position and the first key.  
         */
        get playbackAutoCaptureDuration(): float64
        set playbackAutoCaptureDuration(value: float64)
        
        /** The transition type of the capture interpolation. See also [enum Tween.TransitionType]. */
        get playbackAutoCaptureTransitionType(): int64
        set playbackAutoCaptureTransitionType(value: int64)
        
        /** The ease type of the capture interpolation. See also [enum Tween.EaseType]. */
        get playbackAutoCaptureEaseType(): int64
        set playbackAutoCaptureEaseType(value: int64)
        
        /** The default time in which to blend animations. Ranges from 0 to 4096 with 0.01 precision. */
        get playbackDefaultBlendTime(): float64
        set playbackDefaultBlendTime(value: float64)
        
        /** The speed scaling ratio. For example, if this value is `1`, then the animation plays at normal speed. If it's `0.5`, then it plays at half speed. If it's `2`, then it plays at double speed.  
         *  If set to a negative value, the animation is played in reverse. If set to `0`, the animation will not advance.  
         */
        get speedScale(): float64
        set speedScale(value: float64)
        
        /** If `true` and the engine is running in Movie Maker mode (see [MovieWriter]), exits the engine with [method SceneTree.quit] as soon as an animation is done playing in this [AnimationPlayer]. A message is printed when the engine quits for this reason.  
         *      
         *  **Note:** This obeys the same logic as the [signal AnimationMixer.animation_finished] signal, so it will not quit the engine if the animation is set to be looping.  
         */
        get movieQuitOnFinish(): boolean
        set movieQuitOnFinish(value: boolean)
        
        /** Emitted when [member current_animation] changes. */
        readonly currentAnimationChanged: Signal<(name: string) => void>
        
        /** Emitted when a queued animation plays after the previous animation finished. See also [method AnimationPlayer.queue].  
         *      
         *  **Note:** The signal is not emitted when the animation is changed via [method AnimationPlayer.play] or by an [AnimationTree].  
         */
        readonly animationChanged: Signal<(oldName: StringName, newName: StringName) => void>
    }
    /** Base class for [AnimationNode]s that hold one or multiple composite animations. Usually used for [member AnimationTree.tree_root].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_animationrootnode.html  
     */
    class AnimationRootNode extends AnimationNode {
        constructor(identifier?: any)
    }
    namespace AnimationTree {
        enum AnimationProcessCallback {
            AnimationProcessPhysics = 0,
            AnimationProcessIdle = 1,
            AnimationProcessManual = 2,
        }
    }
    /** A node used for advanced animation transitions in an [AnimationPlayer].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_animationtree.html  
     */
    class AnimationTree<NodeMap extends NodePathMap = any, LibraryMap extends AnimationMixerPathMap = any> extends AnimationMixer<NodeMap, LibraryMap> {
        static readonly ANIMATION_PROCESS_PHYSICS = 0
        static readonly ANIMATION_PROCESS_IDLE = 1
        static readonly ANIMATION_PROCESS_MANUAL = 2
        constructor(identifier?: any)
        
        /** Sets the process notification in which to update animations. */
        setProcessCallback(mode: AnimationTree.AnimationProcessCallback): void
        
        /** Returns the process notification in which to update animations. */
        getProcessCallback(): AnimationTree.AnimationProcessCallback
        
        /** The root animation node of this [AnimationTree]. See [AnimationRootNode]. */
        get treeRoot(): null | AnimationRootNode
        set treeRoot(value: null | AnimationRootNode)
        
        /** The path to the [Node] used to evaluate the [AnimationNode] [Expression] if one is not explicitly specified internally. */
        get advanceExpressionBaseNode(): NodePath
        set advanceExpressionBaseNode(value: NodePath | string)
        
        /** The path to the [AnimationPlayer] used for animating. */
        get animPlayer(): NodePath
        set animPlayer(value: NodePath | string)
        
        /** Emitted when the [member anim_player] is changed. */
        readonly animationPlayerChanged: Signal<() => void>
    }
    namespace Area2D {
        enum SpaceOverride {
            SpaceOverrideDisabled = 0,
            SpaceOverrideCombine = 1,
            SpaceOverrideCombineReplace = 2,
            SpaceOverrideReplace = 3,
            SpaceOverrideReplaceCombine = 4,
        }
    }
    /** A region of 2D space that detects other [CollisionObject2D]s entering or exiting it.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_area2d.html  
     */
    class Area2D<Map extends NodePathMap = any> extends CollisionObject2D<Map> {
        /** This area does not affect gravity/damping. */
        static readonly SPACE_OVERRIDE_DISABLED = 0
        
        /** This area adds its gravity/damping values to whatever has been calculated so far (in [member priority] order). */
        static readonly SPACE_OVERRIDE_COMBINE = 1
        
        /** This area adds its gravity/damping values to whatever has been calculated so far (in [member priority] order), ignoring any lower priority areas. */
        static readonly SPACE_OVERRIDE_COMBINE_REPLACE = 2
        
        /** This area replaces any gravity/damping, even the defaults, ignoring any lower priority areas. */
        static readonly SPACE_OVERRIDE_REPLACE = 3
        
        /** This area replaces any gravity/damping calculated so far (in [member priority] order), but keeps calculating the rest of the areas. */
        static readonly SPACE_OVERRIDE_REPLACE_COMBINE = 4
        constructor(identifier?: any)
        
        /** Returns a list of intersecting [PhysicsBody2D]s and [TileMap]s. The overlapping body's [member CollisionObject2D.collision_layer] must be part of this area's [member CollisionObject2D.collision_mask] in order to be detected.  
         *  For performance reasons (collisions are all processed at the same time) this list is modified once during the physics step, not immediately after objects are moved. Consider using signals instead.  
         */
        getOverlappingBodies(): GArray
        
        /** Returns a list of intersecting [Area2D]s. The overlapping area's [member CollisionObject2D.collision_layer] must be part of this area's [member CollisionObject2D.collision_mask] in order to be detected.  
         *  For performance reasons (collisions are all processed at the same time) this list is modified once during the physics step, not immediately after objects are moved. Consider using signals instead.  
         */
        getOverlappingAreas(): GArray
        
        /** Returns `true` if intersecting any [PhysicsBody2D]s or [TileMap]s, otherwise returns `false`. The overlapping body's [member CollisionObject2D.collision_layer] must be part of this area's [member CollisionObject2D.collision_mask] in order to be detected.  
         *  For performance reasons (collisions are all processed at the same time) the list of overlapping bodies is modified once during the physics step, not immediately after objects are moved. Consider using signals instead.  
         */
        hasOverlappingBodies(): boolean
        
        /** Returns `true` if intersecting any [Area2D]s, otherwise returns `false`. The overlapping area's [member CollisionObject2D.collision_layer] must be part of this area's [member CollisionObject2D.collision_mask] in order to be detected.  
         *  For performance reasons (collisions are all processed at the same time) the list of overlapping areas is modified once during the physics step, not immediately after objects are moved. Consider using signals instead.  
         */
        hasOverlappingAreas(): boolean
        
        /** Returns `true` if the given physics body intersects or overlaps this [Area2D], `false` otherwise.  
         *      
         *  **Note:** The result of this test is not immediate after moving objects. For performance, list of overlaps is updated once per frame and before the physics step. Consider using signals instead.  
         *  The [param body] argument can either be a [PhysicsBody2D] or a [TileMap] instance. While TileMaps are not physics bodies themselves, they register their tiles with collision shapes as a virtual physics body.  
         */
        overlapsBody(body: Node): boolean
        
        /** Returns `true` if the given [Area2D] intersects or overlaps this [Area2D], `false` otherwise.  
         *      
         *  **Note:** The result of this test is not immediate after moving objects. For performance, the list of overlaps is updated once per frame and before the physics step. Consider using signals instead.  
         */
        overlapsArea(area: Node): boolean
        
        /** If `true`, the area detects bodies or areas entering and exiting it. */
        get monitoring(): boolean
        set monitoring(value: boolean)
        
        /** If `true`, other monitoring areas can detect this area. */
        get monitorable(): boolean
        set monitorable(value: boolean)
        
        /** The area's priority. Higher priority areas are processed first. The [World2D]'s physics is always processed last, after all areas. */
        get priority(): int64
        set priority(value: int64)
        
        /** Override mode for gravity calculations within this area. See [enum SpaceOverride] for possible values. */
        get gravitySpaceOverride(): int64
        set gravitySpaceOverride(value: int64)
        
        /** If `true`, gravity is calculated from a point (set via [member gravity_point_center]). See also [member gravity_space_override]. */
        get gravityPoint(): boolean
        set gravityPoint(value: boolean)
        
        /** The distance at which the gravity strength is equal to [member gravity]. For example, on a planet 100 pixels in radius with a surface gravity of 4.0 px/s², set the [member gravity] to 4.0 and the unit distance to 100.0. The gravity will have falloff according to the inverse square law, so in the example, at 200 pixels from the center the gravity will be 1.0 px/s² (twice the distance, 1/4th the gravity), at 50 pixels it will be 16.0 px/s² (half the distance, 4x the gravity), and so on.  
         *  The above is true only when the unit distance is a positive number. When this is set to 0.0, the gravity will be constant regardless of distance.  
         */
        get gravityPointUnitDistance(): float64
        set gravityPointUnitDistance(value: float64)
        
        /** If gravity is a point (see [member gravity_point]), this will be the point of attraction. */
        get gravityPointCenter(): Vector2
        set gravityPointCenter(value: Vector2)
        
        /** The area's gravity vector (not normalized). */
        get gravityDirection(): Vector2
        set gravityDirection(value: Vector2)
        
        /** The area's gravity intensity (in pixels per second squared). This value multiplies the gravity direction. This is useful to alter the force of gravity without altering its direction. */
        get gravity(): float64
        set gravity(value: float64)
        
        /** Override mode for linear damping calculations within this area. See [enum SpaceOverride] for possible values. */
        get linearDampSpaceOverride(): int64
        set linearDampSpaceOverride(value: int64)
        
        /** The rate at which objects stop moving in this area. Represents the linear velocity lost per second.  
         *  See [member ProjectSettings.physics/2d/default_linear_damp] for more details about damping.  
         */
        get linearDamp(): float64
        set linearDamp(value: float64)
        
        /** Override mode for angular damping calculations within this area. See [enum SpaceOverride] for possible values. */
        get angularDampSpaceOverride(): int64
        set angularDampSpaceOverride(value: int64)
        
        /** The rate at which objects stop spinning in this area. Represents the angular velocity lost per second.  
         *  See [member ProjectSettings.physics/2d/default_angular_damp] for more details about damping.  
         */
        get angularDamp(): float64
        set angularDamp(value: float64)
        
        /** If `true`, the area's audio bus overrides the default audio bus. */
        get audioBusOverride(): boolean
        set audioBusOverride(value: boolean)
        
        /** The name of the area's audio bus. */
        get audioBusName(): StringName
        set audioBusName(value: StringName)
        
        /** Emitted when a [Shape2D] of the received [param body] enters a shape of this area. [param body] can be a [PhysicsBody2D] or a [TileMap]. [TileMap]s are detected if their [TileSet] has collision shapes configured. Requires [member monitoring] to be set to `true`.  
         *  [param local_shape_index] and [param body_shape_index] contain indices of the interacting shapes from this area and the interacting body, respectively. [param body_rid] contains the [RID] of the body. These values can be used with the [PhysicsServer2D].  
         *  **Example:** Get the [CollisionShape2D] node from the shape index:  
         *    
         */
        readonly bodyShapeEntered: Signal<(bodyRid: Rid, body: Node2D, bodyShapeIndex: int64, localShapeIndex: int64) => void>
        
        /** Emitted when a [Shape2D] of the received [param body] exits a shape of this area. [param body] can be a [PhysicsBody2D] or a [TileMap]. [TileMap]s are detected if their [TileSet] has collision shapes configured. Requires [member monitoring] to be set to `true`.  
         *  See also [signal body_shape_entered].  
         */
        readonly bodyShapeExited: Signal<(bodyRid: Rid, body: Node2D, bodyShapeIndex: int64, localShapeIndex: int64) => void>
        
        /** Emitted when the received [param body] enters this area. [param body] can be a [PhysicsBody2D] or a [TileMap]. [TileMap]s are detected if their [TileSet] has collision shapes configured. Requires [member monitoring] to be set to `true`. */
        readonly bodyEntered: Signal<(body: Node2D) => void>
        
        /** Emitted when the received [param body] exits this area. [param body] can be a [PhysicsBody2D] or a [TileMap]. [TileMap]s are detected if their [TileSet] has collision shapes configured. Requires [member monitoring] to be set to `true`. */
        readonly bodyExited: Signal<(body: Node2D) => void>
        
        /** Emitted when a [Shape2D] of the received [param area] enters a shape of this area. Requires [member monitoring] to be set to `true`.  
         *  [param local_shape_index] and [param area_shape_index] contain indices of the interacting shapes from this area and the other area, respectively. [param area_rid] contains the [RID] of the other area. These values can be used with the [PhysicsServer2D].  
         *  **Example:** Get the [CollisionShape2D] node from the shape index:  
         *    
         */
        readonly areaShapeEntered: Signal<(areaRid: Rid, area: Area2D, areaShapeIndex: int64, localShapeIndex: int64) => void>
        
        /** Emitted when a [Shape2D] of the received [param area] exits a shape of this area. Requires [member monitoring] to be set to `true`.  
         *  See also [signal area_shape_entered].  
         */
        readonly areaShapeExited: Signal<(areaRid: Rid, area: Area2D, areaShapeIndex: int64, localShapeIndex: int64) => void>
        
        /** Emitted when the received [param area] enters this area. Requires [member monitoring] to be set to `true`. */
        readonly areaEntered: Signal<(area: Area2D) => void>
        
        /** Emitted when the received [param area] exits this area. Requires [member monitoring] to be set to `true`. */
        readonly areaExited: Signal<(area: Area2D) => void>
    }
    namespace Area3D {
        enum SpaceOverride {
            SpaceOverrideDisabled = 0,
            SpaceOverrideCombine = 1,
            SpaceOverrideCombineReplace = 2,
            SpaceOverrideReplace = 3,
            SpaceOverrideReplaceCombine = 4,
        }
    }
    /** A region of 3D space that detects other [CollisionObject3D]s entering or exiting it.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_area3d.html  
     */
    class Area3D<Map extends NodePathMap = any> extends CollisionObject3D<Map> {
        /** This area does not affect gravity/damping. */
        static readonly SPACE_OVERRIDE_DISABLED = 0
        
        /** This area adds its gravity/damping values to whatever has been calculated so far (in [member priority] order). */
        static readonly SPACE_OVERRIDE_COMBINE = 1
        
        /** This area adds its gravity/damping values to whatever has been calculated so far (in [member priority] order), ignoring any lower priority areas. */
        static readonly SPACE_OVERRIDE_COMBINE_REPLACE = 2
        
        /** This area replaces any gravity/damping, even the defaults, ignoring any lower priority areas. */
        static readonly SPACE_OVERRIDE_REPLACE = 3
        
        /** This area replaces any gravity/damping calculated so far (in [member priority] order), but keeps calculating the rest of the areas. */
        static readonly SPACE_OVERRIDE_REPLACE_COMBINE = 4
        constructor(identifier?: any)
        
        /** Returns a list of intersecting [PhysicsBody3D]s and [GridMap]s. The overlapping body's [member CollisionObject3D.collision_layer] must be part of this area's [member CollisionObject3D.collision_mask] in order to be detected.  
         *  For performance reasons (collisions are all processed at the same time) this list is modified once during the physics step, not immediately after objects are moved. Consider using signals instead.  
         */
        getOverlappingBodies(): GArray
        
        /** Returns a list of intersecting [Area3D]s. The overlapping area's [member CollisionObject3D.collision_layer] must be part of this area's [member CollisionObject3D.collision_mask] in order to be detected.  
         *  For performance reasons (collisions are all processed at the same time) this list is modified once during the physics step, not immediately after objects are moved. Consider using signals instead.  
         */
        getOverlappingAreas(): GArray
        
        /** Returns `true` if intersecting any [PhysicsBody3D]s or [GridMap]s, otherwise returns `false`. The overlapping body's [member CollisionObject3D.collision_layer] must be part of this area's [member CollisionObject3D.collision_mask] in order to be detected.  
         *  For performance reasons (collisions are all processed at the same time) the list of overlapping bodies is modified once during the physics step, not immediately after objects are moved. Consider using signals instead.  
         */
        hasOverlappingBodies(): boolean
        
        /** Returns `true` if intersecting any [Area3D]s, otherwise returns `false`. The overlapping area's [member CollisionObject3D.collision_layer] must be part of this area's [member CollisionObject3D.collision_mask] in order to be detected.  
         *  For performance reasons (collisions are all processed at the same time) the list of overlapping areas is modified once during the physics step, not immediately after objects are moved. Consider using signals instead.  
         */
        hasOverlappingAreas(): boolean
        
        /** Returns `true` if the given physics body intersects or overlaps this [Area3D], `false` otherwise.  
         *      
         *  **Note:** The result of this test is not immediate after moving objects. For performance, list of overlaps is updated once per frame and before the physics step. Consider using signals instead.  
         *  The [param body] argument can either be a [PhysicsBody3D] or a [GridMap] instance. While GridMaps are not physics body themselves, they register their tiles with collision shapes as a virtual physics body.  
         */
        overlapsBody(body: Node): boolean
        
        /** Returns `true` if the given [Area3D] intersects or overlaps this [Area3D], `false` otherwise.  
         *      
         *  **Note:** The result of this test is not immediate after moving objects. For performance, list of overlaps is updated once per frame and before the physics step. Consider using signals instead.  
         */
        overlapsArea(area: Node): boolean
        
        /** If `true`, the area detects bodies or areas entering and exiting it. */
        get monitoring(): boolean
        set monitoring(value: boolean)
        
        /** If `true`, other monitoring areas can detect this area. */
        get monitorable(): boolean
        set monitorable(value: boolean)
        
        /** The area's priority. Higher priority areas are processed first. The [World3D]'s physics is always processed last, after all areas. */
        get priority(): int64
        set priority(value: int64)
        
        /** Override mode for gravity calculations within this area. See [enum SpaceOverride] for possible values. */
        get gravitySpaceOverride(): int64
        set gravitySpaceOverride(value: int64)
        
        /** If `true`, gravity is calculated from a point (set via [member gravity_point_center]). See also [member gravity_space_override]. */
        get gravityPoint(): boolean
        set gravityPoint(value: boolean)
        
        /** The distance at which the gravity strength is equal to [member gravity]. For example, on a planet 100 meters in radius with a surface gravity of 4.0 m/s², set the [member gravity] to 4.0 and the unit distance to 100.0. The gravity will have falloff according to the inverse square law, so in the example, at 200 meters from the center the gravity will be 1.0 m/s² (twice the distance, 1/4th the gravity), at 50 meters it will be 16.0 m/s² (half the distance, 4x the gravity), and so on.  
         *  The above is true only when the unit distance is a positive number. When this is set to 0.0, the gravity will be constant regardless of distance.  
         */
        get gravityPointUnitDistance(): float64
        set gravityPointUnitDistance(value: float64)
        
        /** If gravity is a point (see [member gravity_point]), this will be the point of attraction. */
        get gravityPointCenter(): Vector3
        set gravityPointCenter(value: Vector3)
        
        /** The area's gravity vector (not normalized). */
        get gravityDirection(): Vector3
        set gravityDirection(value: Vector3)
        
        /** The area's gravity intensity (in meters per second squared). This value multiplies the gravity direction. This is useful to alter the force of gravity without altering its direction. */
        get gravity(): float64
        set gravity(value: float64)
        
        /** Override mode for linear damping calculations within this area. See [enum SpaceOverride] for possible values. */
        get linearDampSpaceOverride(): int64
        set linearDampSpaceOverride(value: int64)
        
        /** The rate at which objects stop moving in this area. Represents the linear velocity lost per second.  
         *  See [member ProjectSettings.physics/3d/default_linear_damp] for more details about damping.  
         */
        get linearDamp(): float64
        set linearDamp(value: float64)
        
        /** Override mode for angular damping calculations within this area. See [enum SpaceOverride] for possible values. */
        get angularDampSpaceOverride(): int64
        set angularDampSpaceOverride(value: int64)
        
        /** The rate at which objects stop spinning in this area. Represents the angular velocity lost per second.  
         *  See [member ProjectSettings.physics/3d/default_angular_damp] for more details about damping.  
         */
        get angularDamp(): float64
        set angularDamp(value: float64)
        
        /** The magnitude of area-specific wind force.  
         *      
         *  **Note:** This wind force only applies to [SoftBody3D] nodes. Other physics bodies are currently not affected by wind.  
         */
        get windForceMagnitude(): float64
        set windForceMagnitude(value: float64)
        
        /** The exponential rate at which wind force decreases with distance from its origin.  
         *      
         *  **Note:** This wind force only applies to [SoftBody3D] nodes. Other physics bodies are currently not affected by wind.  
         */
        get windAttenuationFactor(): float64
        set windAttenuationFactor(value: float64)
        
        /** The [Node3D] which is used to specify the direction and origin of an area-specific wind force. The direction is opposite to the z-axis of the [Node3D]'s local transform, and its origin is the origin of the [Node3D]'s local transform.  
         *      
         *  **Note:** This wind force only applies to [SoftBody3D] nodes. Other physics bodies are currently not affected by wind.  
         */
        get windSourcePath(): NodePath
        set windSourcePath(value: NodePath | string)
        
        /** If `true`, the area's audio bus overrides the default audio bus. */
        get audioBusOverride(): boolean
        set audioBusOverride(value: boolean)
        
        /** The name of the area's audio bus. */
        get audioBusName(): StringName
        set audioBusName(value: StringName)
        
        /** If `true`, the area applies reverb to its associated audio. */
        get reverbBusEnabled(): boolean
        set reverbBusEnabled(value: boolean)
        
        /** The name of the reverb bus to use for this area's associated audio. */
        get reverbBusName(): StringName
        set reverbBusName(value: StringName)
        
        /** The degree to which this area applies reverb to its associated audio. Ranges from `0` to `1` with `0.1` precision. */
        get reverbBusAmount(): float64
        set reverbBusAmount(value: float64)
        
        /** The degree to which this area's reverb is a uniform effect. Ranges from `0` to `1` with `0.1` precision. */
        get reverbBusUniformity(): float64
        set reverbBusUniformity(value: float64)
        
        /** Emitted when a [Shape3D] of the received [param body] enters a shape of this area. [param body] can be a [PhysicsBody3D] or a [GridMap]. [GridMap]s are detected if their [MeshLibrary] has collision shapes configured. Requires [member monitoring] to be set to `true`.  
         *  [param local_shape_index] and [param body_shape_index] contain indices of the interacting shapes from this area and the interacting body, respectively. [param body_rid] contains the [RID] of the body. These values can be used with the [PhysicsServer3D].  
         *  **Example:** Get the [CollisionShape3D] node from the shape index:  
         *    
         */
        readonly bodyShapeEntered: Signal<(bodyRid: Rid, body: Node3D, bodyShapeIndex: int64, localShapeIndex: int64) => void>
        
        /** Emitted when a [Shape3D] of the received [param body] exits a shape of this area. [param body] can be a [PhysicsBody3D] or a [GridMap]. [GridMap]s are detected if their [MeshLibrary] has collision shapes configured. Requires [member monitoring] to be set to `true`.  
         *  See also [signal body_shape_entered].  
         */
        readonly bodyShapeExited: Signal<(bodyRid: Rid, body: Node3D, bodyShapeIndex: int64, localShapeIndex: int64) => void>
        
        /** Emitted when the received [param body] enters this area. [param body] can be a [PhysicsBody3D] or a [GridMap]. [GridMap]s are detected if their [MeshLibrary] has collision shapes configured. Requires [member monitoring] to be set to `true`. */
        readonly bodyEntered: Signal<(body: Node3D) => void>
        
        /** Emitted when the received [param body] exits this area. [param body] can be a [PhysicsBody3D] or a [GridMap]. [GridMap]s are detected if their [MeshLibrary] has collision shapes configured. Requires [member monitoring] to be set to `true`. */
        readonly bodyExited: Signal<(body: Node3D) => void>
        
        /** Emitted when a [Shape3D] of the received [param area] enters a shape of this area. Requires [member monitoring] to be set to `true`.  
         *  [param local_shape_index] and [param area_shape_index] contain indices of the interacting shapes from this area and the other area, respectively. [param area_rid] contains the [RID] of the other area. These values can be used with the [PhysicsServer3D].  
         *  **Example:** Get the [CollisionShape3D] node from the shape index:  
         *    
         */
        readonly areaShapeEntered: Signal<(areaRid: Rid, area: Area3D, areaShapeIndex: int64, localShapeIndex: int64) => void>
        
        /** Emitted when a [Shape3D] of the received [param area] exits a shape of this area. Requires [member monitoring] to be set to `true`.  
         *  See also [signal area_shape_entered].  
         */
        readonly areaShapeExited: Signal<(areaRid: Rid, area: Area3D, areaShapeIndex: int64, localShapeIndex: int64) => void>
        
        /** Emitted when the received [param area] enters this area. Requires [member monitoring] to be set to `true`. */
        readonly areaEntered: Signal<(area: Area3D) => void>
        
        /** Emitted when the received [param area] exits this area. Requires [member monitoring] to be set to `true`. */
        readonly areaExited: Signal<(area: Area3D) => void>
    }
    /** [Mesh] type that provides utility for constructing a surface from arrays.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_arraymesh.html  
     */
    class ArrayMesh extends Mesh {
        constructor(identifier?: any)
        /** Adds name for a blend shape that will be added with [method add_surface_from_arrays]. Must be called before surface is added. */
        addBlendShape(name: StringName): void
        
        /** Returns the number of blend shapes that the [ArrayMesh] holds. */
        getBlendShapeCount(): int64
        
        /** Returns the name of the blend shape at this index. */
        getBlendShapeName(index: int64): StringName
        
        /** Sets the name of the blend shape at this index. */
        setBlendShapeName(index: int64, name: StringName): void
        
        /** Removes all blend shapes from this [ArrayMesh]. */
        clearBlendShapes(): void
        
        /** Creates a new surface. [method Mesh.get_surface_count] will become the `surf_idx` for this new surface.  
         *  Surfaces are created to be rendered using a [param primitive], which may be any of the values defined in [enum Mesh.PrimitiveType].  
         *  The [param arrays] argument is an array of arrays. Each of the [constant Mesh.ARRAY_MAX] elements contains an array with some of the mesh data for this surface as described by the corresponding member of [enum Mesh.ArrayType] or `null` if it is not used by the surface. For example, `arrays[0]` is the array of vertices. That first vertex sub-array is always required; the others are optional. Adding an index array puts this surface into "index mode" where the vertex and other arrays become the sources of data and the index array defines the vertex order. All sub-arrays must have the same length as the vertex array (or be an exact multiple of the vertex array's length, when multiple elements of a sub-array correspond to a single vertex) or be empty, except for [constant Mesh.ARRAY_INDEX] if it is used.  
         *  The [param blend_shapes] argument is an array of vertex data for each blend shape. Each element is an array of the same structure as [param arrays], but [constant Mesh.ARRAY_VERTEX], [constant Mesh.ARRAY_NORMAL], and [constant Mesh.ARRAY_TANGENT] are set if and only if they are set in [param arrays] and all other entries are `null`.  
         *  The [param lods] argument is a dictionary with [float] keys and [PackedInt32Array] values. Each entry in the dictionary represents an LOD level of the surface, where the value is the [constant Mesh.ARRAY_INDEX] array to use for the LOD level and the key is roughly proportional to the distance at which the LOD stats being used. I.e., increasing the key of an LOD also increases the distance that the objects has to be from the camera before the LOD is used.  
         *  The [param flags] argument is the bitwise OR of, as required: One value of [enum Mesh.ArrayCustomFormat] left shifted by `ARRAY_FORMAT_CUSTOMn_SHIFT` for each custom channel in use, [constant Mesh.ARRAY_FLAG_USE_DYNAMIC_UPDATE], [constant Mesh.ARRAY_FLAG_USE_8_BONE_WEIGHTS], or [constant Mesh.ARRAY_FLAG_USES_EMPTY_VERTEX_ARRAY].  
         *      
         *  **Note:** When using indices, it is recommended to only use points, lines, or triangles.  
         */
        addSurfaceFromArrays(primitive: Mesh.PrimitiveType, arrays: GArray, blendShapes?: GArray /* = [] */, lods?: GDictionary /* = new GDictionary() */, flags?: Mesh.ArrayFormat /* = 0 */): void
        
        /** Removes all surfaces from this [ArrayMesh]. */
        clearSurfaces(): void
        
        /** Removes the surface at the given index from the Mesh, shifting surfaces with higher index down by one. */
        surfaceRemove(surfIdx: int64): void
        surfaceUpdateVertexRegion(surfIdx: int64, offset: int64, data: PackedByteArray | byte[] | ArrayBuffer): void
        surfaceUpdateAttributeRegion(surfIdx: int64, offset: int64, data: PackedByteArray | byte[] | ArrayBuffer): void
        surfaceUpdateSkinRegion(surfIdx: int64, offset: int64, data: PackedByteArray | byte[] | ArrayBuffer): void
        
        /** Returns the length in vertices of the vertex array in the requested surface (see [method add_surface_from_arrays]). */
        surfaceGetArrayLen(surfIdx: int64): int64
        
        /** Returns the length in indices of the index array in the requested surface (see [method add_surface_from_arrays]). */
        surfaceGetArrayIndexLen(surfIdx: int64): int64
        
        /** Returns the format mask of the requested surface (see [method add_surface_from_arrays]). */
        surfaceGetFormat(surfIdx: int64): Mesh.ArrayFormat
        
        /** Returns the primitive type of the requested surface (see [method add_surface_from_arrays]). */
        surfaceGetPrimitiveType(surfIdx: int64): Mesh.PrimitiveType
        
        /** Returns the index of the first surface with this name held within this [ArrayMesh]. If none are found, -1 is returned. */
        surfaceFindByName(name: string): int64
        
        /** Sets a name for a given surface. */
        surfaceSetName(surfIdx: int64, name: string): void
        
        /** Gets the name assigned to this surface. */
        surfaceGetName(surfIdx: int64): string
        
        /** Regenerates tangents for each of the [ArrayMesh]'s surfaces. */
        regenNormalMaps(): void
        
        /** Performs a UV unwrap on the [ArrayMesh] to prepare the mesh for lightmapping. */
        lightmapUnwrap(transform: Transform3D, texelSize: float64): GError
        get _blendShapeNames(): PackedStringArray
        set _blendShapeNames(value: PackedStringArray | string[])
        get _surfaces(): GArray
        set _surfaces(value: GArray)
        
        /** Sets the blend shape mode to one of [enum Mesh.BlendShapeMode]. */
        get blendShapeMode(): int64
        set blendShapeMode(value: int64)
        
        /** Overrides the [AABB] with one defined by user for use with frustum culling. Especially useful to avoid unexpected culling when using a shader to offset vertices. */
        get customAabb(): Aabb
        set customAabb(value: Aabb)
        
        /** An optional mesh which can be used for rendering shadows and the depth prepass. Can be used to increase performance by supplying a mesh with fused vertices and only vertex position data (without normals, UVs, colors, etc.).  
         *      
         *  **Note:** This mesh must have exactly the same vertex positions as the source mesh (including the source mesh's LODs, if present). If vertex positions differ, then the mesh will not draw correctly.  
         */
        get shadowMesh(): null | ArrayMesh
        set shadowMesh(value: null | ArrayMesh)
    }
    /** 3D polygon shape for use with occlusion culling in [OccluderInstance3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_arrayoccluder3d.html  
     */
    class ArrayOccluder3D extends Occluder3D {
        constructor(identifier?: any)
        /** Sets [member indices] and [member vertices], while updating the final occluder only once after both values are set. */
        setArrays(vertices: PackedVector3Array | Vector3[], indices: PackedInt32Array | int32[]): void
        
        /** The occluder's vertex positions in local 3D coordinates.  
         *      
         *  **Note:** The occluder is always updated after setting this value. If creating occluders procedurally, consider using [method set_arrays] instead to avoid updating the occluder twice when it's created.  
         */
        get vertices(): PackedVector3Array
        set vertices(value: PackedVector3Array | Vector3[])
        
        /** The occluder's index position. Indices determine which points from the [member vertices] array should be drawn, and in which order.  
         *      
         *  **Note:** The occluder is always updated after setting this value. If creating occluders procedurally, consider using [method set_arrays] instead to avoid updating the occluder twice when it's created.  
         */
        get indices(): PackedInt32Array
        set indices(value: PackedInt32Array | int32[])
    }
    namespace AspectRatioContainer {
        enum StretchMode {
            StretchWidthControlsHeight = 0,
            StretchHeightControlsWidth = 1,
            StretchFit = 2,
            StretchCover = 3,
        }
        enum AlignmentMode {
            AlignmentBegin = 0,
            AlignmentCenter = 1,
            AlignmentEnd = 2,
        }
    }
    /** A container that preserves the proportions of its child controls.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_aspectratiocontainer.html  
     */
    class AspectRatioContainer<Map extends NodePathMap = any> extends Container<Map> {
        /** The height of child controls is automatically adjusted based on the width of the container. */
        static readonly STRETCH_WIDTH_CONTROLS_HEIGHT = 0
        
        /** The width of child controls is automatically adjusted based on the height of the container. */
        static readonly STRETCH_HEIGHT_CONTROLS_WIDTH = 1
        
        /** The bounding rectangle of child controls is automatically adjusted to fit inside the container while keeping the aspect ratio. */
        static readonly STRETCH_FIT = 2
        
        /** The width and height of child controls is automatically adjusted to make their bounding rectangle cover the entire area of the container while keeping the aspect ratio.  
         *  When the bounding rectangle of child controls exceed the container's size and [member Control.clip_contents] is enabled, this allows to show only the container's area restricted by its own bounding rectangle.  
         */
        static readonly STRETCH_COVER = 3
        
        /** Aligns child controls with the beginning (left or top) of the container. */
        static readonly ALIGNMENT_BEGIN = 0
        
        /** Aligns child controls with the center of the container. */
        static readonly ALIGNMENT_CENTER = 1
        
        /** Aligns child controls with the end (right or bottom) of the container. */
        static readonly ALIGNMENT_END = 2
        constructor(identifier?: any)
        
        /** The aspect ratio to enforce on child controls. This is the width divided by the height. The ratio depends on the [member stretch_mode]. */
        get ratio(): float64
        set ratio(value: float64)
        
        /** The stretch mode used to align child controls. */
        get stretchMode(): int64
        set stretchMode(value: int64)
        
        /** Specifies the horizontal relative position of child controls. */
        get alignmentHorizontal(): int64
        set alignmentHorizontal(value: int64)
        
        /** Specifies the vertical relative position of child controls. */
        get alignmentVertical(): int64
        set alignmentVertical(value: int64)
    }
    /** A texture that crops out part of another Texture2D.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_atlastexture.html  
     */
    class AtlasTexture extends Texture2D {
        constructor(identifier?: any)
        /** The texture that contains the atlas. Can be any type inheriting from [Texture2D], including another [AtlasTexture]. */
        get atlas(): null | Texture2D
        set atlas(value: null | Texture2D)
        
        /** The region used to draw the [member atlas]. If either dimension of the region's size is `0`, the value from [member atlas] size will be used for that axis instead. */
        get region(): Rect2
        set region(value: Rect2)
        
        /** The margin around the [member region]. Useful for small adjustments. If the [member Rect2.size] of this property ("w" and "h" in the editor) is set, the drawn texture is resized to fit within the margin. */
        get margin(): Rect2
        set margin(value: Rect2)
        
        /** If `true`, the area outside of the [member region] is clipped to avoid bleeding of the surrounding texture pixels. */
        get filterClip(): boolean
        set filterClip(value: boolean)
    }
    /** Stores information about the audio buses.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audiobuslayout.html  
     */
    class AudioBusLayout extends Resource {
        constructor(identifier?: any)
    }
    /** Base class for audio effect resources.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audioeffect.html  
     */
    class AudioEffect extends Resource {
        constructor(identifier?: any)
        /** Override this method to customize the [AudioEffectInstance] created when this effect is applied on a bus in the editor's Audio panel, or through [method AudioServer.add_bus_effect].  
         *    
         *      
         *  **Note:** It is recommended to keep a reference to the original [AudioEffect] in the new instance. Depending on the implementation this allows the effect instance to listen for changes at run-time and be modified accordingly.  
         */
        /* gdvirtual */ _instantiate(): null | AudioEffectInstance
    }
    /** Adds an amplifying audio effect to an audio bus.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audioeffectamplify.html  
     */
    class AudioEffectAmplify extends AudioEffect {
        constructor(identifier?: any)
        /** Amount of amplification in decibels. Positive values make the sound louder, negative values make it quieter. Value can range from -80 to 24. */
        get volumeDb(): float64
        set volumeDb(value: float64)
        
        /** Amount of amplification as a linear value.  
         *      
         *  **Note:** This member modifies [member volume_db] for convenience. The returned value is equivalent to the result of [method @GlobalScope.db_to_linear] on [member volume_db]. Setting this member is equivalent to setting [member volume_db] to the result of [method @GlobalScope.linear_to_db] on a value.  
         */
        get volumeLinear(): float64
        set volumeLinear(value: float64)
    }
    /** Adds a band limit filter to the audio bus.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audioeffectbandlimitfilter.html  
     */
    class AudioEffectBandLimitFilter extends AudioEffectFilter {
        constructor(identifier?: any)
    }
    /** Adds a band pass filter to the audio bus.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audioeffectbandpassfilter.html  
     */
    class AudioEffectBandPassFilter extends AudioEffectFilter {
        constructor(identifier?: any)
    }
    /** Captures audio from an audio bus in real-time.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audioeffectcapture.html  
     */
    class AudioEffectCapture extends AudioEffect {
        constructor(identifier?: any)
        /** Returns `true` if at least [param frames] audio frames are available to read in the internal ring buffer. */
        canGetBuffer(frames: int64): boolean
        
        /** Gets the next [param frames] audio samples from the internal ring buffer.  
         *  Returns a [PackedVector2Array] containing exactly [param frames] audio samples if available, or an empty [PackedVector2Array] if insufficient data was available.  
         *  The samples are signed floating-point PCM between `-1` and `1`. You will have to scale them if you want to use them as 8 or 16-bit integer samples. (`v = 0x7fff * samples[0].x`)  
         */
        getBuffer(frames: int64): PackedVector2Array
        
        /** Clears the internal ring buffer.  
         *      
         *  **Note:** Calling this during a capture can cause the loss of samples which causes popping in the playback.  
         */
        clearBuffer(): void
        
        /** Returns the number of frames available to read using [method get_buffer]. */
        getFramesAvailable(): int64
        
        /** Returns the number of audio frames discarded from the audio bus due to full buffer. */
        getDiscardedFrames(): int64
        
        /** Returns the total size of the internal ring buffer in frames. */
        getBufferLengthFrames(): int64
        
        /** Returns the number of audio frames inserted from the audio bus. */
        getPushedFrames(): int64
        
        /** Length of the internal ring buffer, in seconds. Setting the buffer length will have no effect if already initialized. */
        get bufferLength(): float64
        set bufferLength(value: float64)
    }
    /** Adds a chorus audio effect.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audioeffectchorus.html  
     */
    class AudioEffectChorus extends AudioEffect {
        constructor(identifier?: any)
        setVoiceDelayMs(voiceIdx: int64, delayMs: float64): void
        getVoiceDelayMs(voiceIdx: int64): float64
        setVoiceRateHz(voiceIdx: int64, rateHz: float64): void
        getVoiceRateHz(voiceIdx: int64): float64
        setVoiceDepthMs(voiceIdx: int64, depthMs: float64): void
        getVoiceDepthMs(voiceIdx: int64): float64
        setVoiceLevelDb(voiceIdx: int64, levelDb: float64): void
        getVoiceLevelDb(voiceIdx: int64): float64
        setVoiceCutoffHz(voiceIdx: int64, cutoffHz: float64): void
        getVoiceCutoffHz(voiceIdx: int64): float64
        setVoicePan(voiceIdx: int64, pan: float64): void
        getVoicePan(voiceIdx: int64): float64
        
        /** The number of voices in the effect. */
        get voiceCount(): int64
        set voiceCount(value: int64)
        
        /** The effect's raw signal. */
        get dry(): float64
        set dry(value: float64)
        
        /** The effect's processed signal. */
        get wet(): float64
        set wet(value: float64)
        
        /** The voice's signal delay. */
        get "voice/1/delayMs"(): float64
        set "voice/1/delayMs"(value: float64)
        
        /** The voice's filter rate. */
        get "voice/1/rateHz"(): float64
        set "voice/1/rateHz"(value: float64)
        
        /** The voice filter's depth. */
        get "voice/1/depthMs"(): float64
        set "voice/1/depthMs"(value: float64)
        
        /** The voice's volume. */
        get "voice/1/levelDb"(): float64
        set "voice/1/levelDb"(value: float64)
        
        /** The voice's cutoff frequency. */
        get "voice/1/cutoffHz"(): float64
        set "voice/1/cutoffHz"(value: float64)
        
        /** The voice's pan level. */
        get "voice/1/pan"(): float64
        set "voice/1/pan"(value: float64)
        
        /** The voice's signal delay. */
        get "voice/2/delayMs"(): float64
        set "voice/2/delayMs"(value: float64)
        
        /** The voice's filter rate. */
        get "voice/2/rateHz"(): float64
        set "voice/2/rateHz"(value: float64)
        
        /** The voice filter's depth. */
        get "voice/2/depthMs"(): float64
        set "voice/2/depthMs"(value: float64)
        
        /** The voice's volume. */
        get "voice/2/levelDb"(): float64
        set "voice/2/levelDb"(value: float64)
        
        /** The voice's cutoff frequency. */
        get "voice/2/cutoffHz"(): float64
        set "voice/2/cutoffHz"(value: float64)
        
        /** The voice's pan level. */
        get "voice/2/pan"(): float64
        set "voice/2/pan"(value: float64)
        
        /** The voice's signal delay. */
        get "voice/3/delayMs"(): float64
        set "voice/3/delayMs"(value: float64)
        
        /** The voice's filter rate. */
        get "voice/3/rateHz"(): float64
        set "voice/3/rateHz"(value: float64)
        
        /** The voice filter's depth. */
        get "voice/3/depthMs"(): float64
        set "voice/3/depthMs"(value: float64)
        
        /** The voice's volume. */
        get "voice/3/levelDb"(): float64
        set "voice/3/levelDb"(value: float64)
        
        /** The voice's cutoff frequency. */
        get "voice/3/cutoffHz"(): float64
        set "voice/3/cutoffHz"(value: float64)
        
        /** The voice's pan level. */
        get "voice/3/pan"(): float64
        set "voice/3/pan"(value: float64)
        
        /** The voice's signal delay. */
        get "voice/4/delayMs"(): float64
        set "voice/4/delayMs"(value: float64)
        
        /** The voice's filter rate. */
        get "voice/4/rateHz"(): float64
        set "voice/4/rateHz"(value: float64)
        
        /** The voice filter's depth. */
        get "voice/4/depthMs"(): float64
        set "voice/4/depthMs"(value: float64)
        
        /** The voice's volume. */
        get "voice/4/levelDb"(): float64
        set "voice/4/levelDb"(value: float64)
        
        /** The voice's cutoff frequency. */
        get "voice/4/cutoffHz"(): float64
        set "voice/4/cutoffHz"(value: float64)
        
        /** The voice's pan level. */
        get "voice/4/pan"(): float64
        set "voice/4/pan"(value: float64)
    }
    /** Adds a compressor audio effect to an audio bus.  
     *  Reduces sounds that exceed a certain threshold level, smooths out the dynamics and increases the overall volume.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audioeffectcompressor.html  
     */
    class AudioEffectCompressor extends AudioEffect {
        constructor(identifier?: any)
        /** The level above which compression is applied to the audio. Value can range from -60 to 0. */
        get threshold(): float64
        set threshold(value: float64)
        
        /** Amount of compression applied to the audio once it passes the threshold level. The higher the ratio, the more the loud parts of the audio will be compressed. Value can range from 1 to 48. */
        get ratio(): float64
        set ratio(value: float64)
        
        /** Gain applied to the output signal. */
        get gain(): float64
        set gain(value: float64)
        
        /** Compressor's reaction time when the signal exceeds the threshold, in microseconds. Value can range from 20 to 2000. */
        get attackUs(): float64
        set attackUs(value: float64)
        
        /** Compressor's delay time to stop reducing the signal after the signal level falls below the threshold, in milliseconds. Value can range from 20 to 2000. */
        get releaseMs(): float64
        set releaseMs(value: float64)
        
        /** Balance between original signal and effect signal. Value can range from 0 (totally dry) to 1 (totally wet). */
        get mix(): float64
        set mix(value: float64)
        
        /** Reduce the sound level using another audio bus for threshold detection. */
        get sidechain(): StringName
        set sidechain(value: StringName)
    }
    /** Adds a delay audio effect to an audio bus. Plays input signal back after a period of time.  
     *  Two tap delay and feedback options.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audioeffectdelay.html  
     */
    class AudioEffectDelay extends AudioEffect {
        constructor(identifier?: any)
        /** Output percent of original sound. At 0, only delayed sounds are output. Value can range from 0 to 1. */
        get dry(): float64
        set dry(value: float64)
        
        /** If `true`, the first tap will be enabled. */
        get tap1Active(): boolean
        set tap1Active(value: boolean)
        
        /** First tap delay time in milliseconds. */
        get tap1DelayMs(): float64
        set tap1DelayMs(value: float64)
        
        /** Sound level for the first tap. */
        get tap1LevelDb(): float64
        set tap1LevelDb(value: float64)
        
        /** Pan position for the first tap. Value can range from -1 (fully left) to 1 (fully right). */
        get tap1Pan(): float64
        set tap1Pan(value: float64)
        
        /** If `true`, the second tap will be enabled. */
        get tap2Active(): boolean
        set tap2Active(value: boolean)
        
        /** Second tap delay time in milliseconds. */
        get tap2DelayMs(): float64
        set tap2DelayMs(value: float64)
        
        /** Sound level for the second tap. */
        get tap2LevelDb(): float64
        set tap2LevelDb(value: float64)
        
        /** Pan position for the second tap. Value can range from -1 (fully left) to 1 (fully right). */
        get tap2Pan(): float64
        set tap2Pan(value: float64)
        
        /** If `true`, feedback is enabled. */
        get feedbackActive(): boolean
        set feedbackActive(value: boolean)
        
        /** Feedback delay time in milliseconds. */
        get feedbackDelayMs(): float64
        set feedbackDelayMs(value: float64)
        
        /** Sound level for feedback. */
        get feedbackLevelDb(): float64
        set feedbackLevelDb(value: float64)
        
        /** Low-pass filter for feedback, in Hz. Frequencies below this value are filtered out of the source signal. */
        get feedbackLowpass(): float64
        set feedbackLowpass(value: float64)
    }
    namespace AudioEffectDistortion {
        enum Mode {
            ModeClip = 0,
            ModeAtan = 1,
            ModeLofi = 2,
            ModeOverdrive = 3,
            ModeWaveshape = 4,
        }
    }
    /** Adds a distortion audio effect to an Audio bus.  
     *  Modifies the sound to make it distorted.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audioeffectdistortion.html  
     */
    class AudioEffectDistortion extends AudioEffect {
        /** Digital distortion effect which cuts off peaks at the top and bottom of the waveform. */
        static readonly MODE_CLIP = 0
        static readonly MODE_ATAN = 1
        
        /** Low-resolution digital distortion effect (bit depth reduction). You can use it to emulate the sound of early digital audio devices. */
        static readonly MODE_LOFI = 2
        
        /** Emulates the warm distortion produced by a field effect transistor, which is commonly used in solid-state musical instrument amplifiers. The [member drive] property has no effect in this mode. */
        static readonly MODE_OVERDRIVE = 3
        
        /** Waveshaper distortions are used mainly by electronic musicians to achieve an extra-abrasive sound. */
        static readonly MODE_WAVESHAPE = 4
        constructor(identifier?: any)
        
        /** Distortion type. */
        get mode(): int64
        set mode(value: int64)
        
        /** Increases or decreases the volume before the effect, in decibels. Value can range from -60 to 60. */
        get preGain(): float64
        set preGain(value: float64)
        
        /** High-pass filter, in Hz. Frequencies higher than this value will not be affected by the distortion. Value can range from 1 to 20000. */
        get keepHfHz(): float64
        set keepHfHz(value: float64)
        
        /** Distortion power. Value can range from 0 to 1. */
        get drive(): float64
        set drive(value: float64)
        
        /** Increases or decreases the volume after the effect, in decibels. Value can range from -80 to 24. */
        get postGain(): float64
        set postGain(value: float64)
    }
    /** Base class for audio equalizers. Gives you control over frequencies.  
     *  Use it to create a custom equalizer if [AudioEffectEQ6], [AudioEffectEQ10] or [AudioEffectEQ21] don't fit your needs.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audioeffecteq.html  
     */
    class AudioEffectEQ extends AudioEffect {
        constructor(identifier?: any)
        /** Sets band's gain at the specified index, in dB. */
        setBandGainDb(bandIdx: int64, volumeDb: float64): void
        
        /** Returns the band's gain at the specified index, in dB. */
        getBandGainDb(bandIdx: int64): float64
        
        /** Returns the number of bands of the equalizer. */
        getBandCount(): int64
    }
    /** Adds a 10-band equalizer audio effect to an Audio bus. Gives you control over frequencies from 31 Hz to 16000 Hz.  
     *  Each frequency can be modulated between -60/+24 dB.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audioeffecteq10.html  
     */
    class AudioEffectEQ10 extends AudioEffectEQ {
        constructor(identifier?: any)
    }
    /** Adds a 21-band equalizer audio effect to an Audio bus. Gives you control over frequencies from 22 Hz to 22000 Hz.  
     *  Each frequency can be modulated between -60/+24 dB.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audioeffecteq21.html  
     */
    class AudioEffectEQ21 extends AudioEffectEQ {
        constructor(identifier?: any)
    }
    /** Adds a 6-band equalizer audio effect to an audio bus. Gives you control over frequencies from 32 Hz to 10000 Hz.  
     *  Each frequency can be modulated between -60/+24 dB.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audioeffecteq6.html  
     */
    class AudioEffectEQ6 extends AudioEffectEQ {
        constructor(identifier?: any)
    }
    namespace AudioEffectFilter {
        enum FilterDB {
            Filter6Db = 0,
            Filter12Db = 1,
            Filter18Db = 2,
            Filter24Db = 3,
        }
    }
    /** Adds a filter to the audio bus.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audioeffectfilter.html  
     */
    class AudioEffectFilter extends AudioEffect {
        /** Cutting off at 6dB per octave. */
        static readonly FILTER_6DB = 0
        
        /** Cutting off at 12dB per octave. */
        static readonly FILTER_12DB = 1
        
        /** Cutting off at 18dB per octave. */
        static readonly FILTER_18DB = 2
        
        /** Cutting off at 24dB per octave. */
        static readonly FILTER_24DB = 3
        constructor(identifier?: any)
        
        /** Threshold frequency for the filter, in Hz. */
        get cutoffHz(): float64
        set cutoffHz(value: float64)
        
        /** Amount of boost in the frequency range near the cutoff frequency. */
        get resonance(): float64
        set resonance(value: float64)
        
        /** Gain amount of the frequencies after the filter. */
        get gain(): float64
        set gain(value: float64)
        
        /** Steepness of the cutoff curve in dB per octave, also known as the order of the filter. Higher orders have a more aggressive cutoff. */
        get db(): int64
        set db(value: int64)
    }
    /** Adds a hard limiter audio effect to an Audio bus.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audioeffecthardlimiter.html  
     */
    class AudioEffectHardLimiter extends AudioEffect {
        constructor(identifier?: any)
        /** Gain to apply before limiting, in decibels. */
        get preGainDb(): float64
        set preGainDb(value: float64)
        
        /** The waveform's maximum allowed value, in decibels. This value can range from `-24.0` to `0.0`.  
         *  The default value of `-0.3` prevents potential inter-sample peaks (ISP) from crossing over 0 dB, which can cause slight distortion on some older hardware.  
         */
        get ceilingDb(): float64
        set ceilingDb(value: float64)
        
        /** Time it takes in seconds for the gain reduction to fully release. */
        get release(): float64
        set release(value: float64)
    }
    /** Adds a high-pass filter to the audio bus.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audioeffecthighpassfilter.html  
     */
    class AudioEffectHighPassFilter extends AudioEffectFilter {
        constructor(identifier?: any)
    }
    /** Adds a high-shelf filter to the audio bus.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audioeffecthighshelffilter.html  
     */
    class AudioEffectHighShelfFilter extends AudioEffectFilter {
        constructor(identifier?: any)
    }
    /** Manipulates the audio it receives for a given effect.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audioeffectinstance.html  
     */
    class AudioEffectInstance extends RefCounted {
        constructor(identifier?: any)
        /** Called by the [AudioServer] to process this effect. When [method _process_silence] is not overridden or it returns `false`, this method is called only when the bus is active.  
         *      
         *  **Note:** It is not useful to override this method in GDScript or C#. Only GDExtension can take advantage of it.  
         */
        /* gdvirtual */ _process(srcBuffer: int64, dstBuffer: int64, frameCount: int64): void
        
        /** Override this method to customize the processing behavior of this effect instance.  
         *  Should return `true` to force the [AudioServer] to always call [method _process], even if the bus has been muted or cannot otherwise be heard.  
         */
        /* gdvirtual */ _processSilence(): boolean
    }
    /** Adds a soft-clip limiter audio effect to an Audio bus.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audioeffectlimiter.html  
     */
    class AudioEffectLimiter extends AudioEffect {
        constructor(identifier?: any)
        /** The waveform's maximum allowed value, in decibels. Value can range from -20 to -0.1. */
        get ceilingDb(): float64
        set ceilingDb(value: float64)
        
        /** Threshold from which the limiter begins to be active, in decibels. Value can range from -30 to 0. */
        get thresholdDb(): float64
        set thresholdDb(value: float64)
        
        /** Applies a gain to the limited waves, in decibels. Value can range from 0 to 6. */
        get softClipDb(): float64
        set softClipDb(value: float64)
        get softClipRatio(): float64
        set softClipRatio(value: float64)
    }
    /** Adds a low-pass filter to the audio bus.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audioeffectlowpassfilter.html  
     */
    class AudioEffectLowPassFilter extends AudioEffectFilter {
        constructor(identifier?: any)
    }
    /** Adds a low-shelf filter to the audio bus.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audioeffectlowshelffilter.html  
     */
    class AudioEffectLowShelfFilter extends AudioEffectFilter {
        constructor(identifier?: any)
    }
    /** Adds a notch filter to the Audio bus.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audioeffectnotchfilter.html  
     */
    class AudioEffectNotchFilter extends AudioEffectFilter {
        constructor(identifier?: any)
    }
    /** Adds a panner audio effect to an audio bus. Pans sound left or right.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audioeffectpanner.html  
     */
    class AudioEffectPanner extends AudioEffect {
        constructor(identifier?: any)
        /** Pan position. Value can range from -1 (fully left) to 1 (fully right). */
        get pan(): float64
        set pan(value: float64)
    }
    /** Adds a phaser audio effect to an audio bus.  
     *  Combines the original signal with a copy that is slightly out of phase with the original.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audioeffectphaser.html  
     */
    class AudioEffectPhaser extends AudioEffect {
        constructor(identifier?: any)
        /** Determines the minimum frequency affected by the LFO modulations, in Hz. Value can range from 10 to 10000. */
        get rangeMinHz(): float64
        set rangeMinHz(value: float64)
        
        /** Determines the maximum frequency affected by the LFO modulations, in Hz. Value can range from 10 to 10000. */
        get rangeMaxHz(): float64
        set rangeMaxHz(value: float64)
        
        /** Adjusts the rate in Hz at which the effect sweeps up and down across the frequency range. */
        get rateHz(): float64
        set rateHz(value: float64)
        
        /** Output percent of modified sound. Value can range from 0.1 to 0.9. */
        get feedback(): float64
        set feedback(value: float64)
        
        /** Determines how high the filter frequencies sweep. Low value will primarily affect bass frequencies. High value can sweep high into the treble. Value can range from `0.1` to `4.0`. */
        get depth(): float64
        set depth(value: float64)
    }
    namespace AudioEffectPitchShift {
        enum FftSize {
            FftSize256 = 0,
            FftSize512 = 1,
            FftSize1024 = 2,
            FftSize2048 = 3,
            FftSize4096 = 4,
            FftSizeMax = 5,
        }
    }
    /** Adds a pitch-shifting audio effect to an audio bus.  
     *  Raises or lowers the pitch of original sound.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audioeffectpitchshift.html  
     */
    class AudioEffectPitchShift extends AudioEffect {
        /** Use a buffer of 256 samples for the Fast Fourier transform. Lowest latency, but least stable over time. */
        static readonly FFT_SIZE_256 = 0
        
        /** Use a buffer of 512 samples for the Fast Fourier transform. Low latency, but less stable over time. */
        static readonly FFT_SIZE_512 = 1
        
        /** Use a buffer of 1024 samples for the Fast Fourier transform. This is a compromise between latency and stability over time. */
        static readonly FFT_SIZE_1024 = 2
        
        /** Use a buffer of 2048 samples for the Fast Fourier transform. High latency, but stable over time. */
        static readonly FFT_SIZE_2048 = 3
        
        /** Use a buffer of 4096 samples for the Fast Fourier transform. Highest latency, but most stable over time. */
        static readonly FFT_SIZE_4096 = 4
        
        /** Represents the size of the [enum FFTSize] enum. */
        static readonly FFT_SIZE_MAX = 5
        constructor(identifier?: any)
        
        /** The pitch scale to use. `1.0` is the default pitch and plays sounds unaffected. [member pitch_scale] can range from `0.0` (infinitely low pitch, inaudible) to `16` (16 times higher than the initial pitch). */
        get pitchScale(): float64
        set pitchScale(value: float64)
        
        /** The oversampling factor to use. Higher values result in better quality, but are more demanding on the CPU and may cause audio cracking if the CPU can't keep up. */
        get oversampling(): float64
        set oversampling(value: float64)
        
        /** The size of the [url=https://en.wikipedia.org/wiki/Fast_Fourier_transform]Fast Fourier transform[/url] buffer. Higher values smooth out the effect over time, but have greater latency. The effects of this higher latency are especially noticeable on sounds that have sudden amplitude changes. */
        get fftSize(): int64
        set fftSize(value: int64)
    }
    /** Audio effect used for recording the sound from an audio bus.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audioeffectrecord.html  
     */
    class AudioEffectRecord extends AudioEffect {
        constructor(identifier?: any)
        /** If `true`, the sound will be recorded. Note that restarting the recording will remove the previously recorded sample. */
        setRecordingActive(record: boolean): void
        
        /** Returns whether the recording is active or not. */
        isRecordingActive(): boolean
        
        /** Returns the recorded sample. */
        getRecording(): null | AudioStreamWav
        
        /** Specifies the format in which the sample will be recorded. See [enum AudioStreamWAV.Format] for available formats. */
        get format(): int64
        set format(value: int64)
    }
    /** Adds a reverberation audio effect to an Audio bus.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audioeffectreverb.html  
     */
    class AudioEffectReverb extends AudioEffect {
        constructor(identifier?: any)
        /** Time between the original signal and the early reflections of the reverb signal, in milliseconds. */
        get predelayMsec(): float64
        set predelayMsec(value: float64)
        
        /** Output percent of predelay. Value can range from 0 to 1. */
        get predelayFeedback(): float64
        set predelayFeedback(value: float64)
        
        /** Dimensions of simulated room. Bigger means more echoes. Value can range from 0 to 1. */
        get roomSize(): float64
        set roomSize(value: float64)
        
        /** Defines how reflective the imaginary room's walls are. Value can range from 0 to 1. */
        get damping(): float64
        set damping(value: float64)
        
        /** Widens or narrows the stereo image of the reverb tail. 1 means fully widens. Value can range from 0 to 1. */
        get spread(): float64
        set spread(value: float64)
        
        /** High-pass filter passes signals with a frequency higher than a certain cutoff frequency and attenuates signals with frequencies lower than the cutoff frequency. Value can range from 0 to 1. */
        get hipass(): float64
        set hipass(value: float64)
        
        /** Output percent of original sound. At 0, only modified sound is outputted. Value can range from 0 to 1. */
        get dry(): float64
        set dry(value: float64)
        
        /** Output percent of modified sound. At 0, only original sound is outputted. Value can range from 0 to 1. */
        get wet(): float64
        set wet(value: float64)
    }
    namespace AudioEffectSpectrumAnalyzer {
        enum FftSize {
            FftSize256 = 0,
            FftSize512 = 1,
            FftSize1024 = 2,
            FftSize2048 = 3,
            FftSize4096 = 4,
            FftSizeMax = 5,
        }
    }
    /** Audio effect that can be used for real-time audio visualizations.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audioeffectspectrumanalyzer.html  
     */
    class AudioEffectSpectrumAnalyzer extends AudioEffect {
        /** Use a buffer of 256 samples for the Fast Fourier transform. Lowest latency, but least stable over time. */
        static readonly FFT_SIZE_256 = 0
        
        /** Use a buffer of 512 samples for the Fast Fourier transform. Low latency, but less stable over time. */
        static readonly FFT_SIZE_512 = 1
        
        /** Use a buffer of 1024 samples for the Fast Fourier transform. This is a compromise between latency and stability over time. */
        static readonly FFT_SIZE_1024 = 2
        
        /** Use a buffer of 2048 samples for the Fast Fourier transform. High latency, but stable over time. */
        static readonly FFT_SIZE_2048 = 3
        
        /** Use a buffer of 4096 samples for the Fast Fourier transform. Highest latency, but most stable over time. */
        static readonly FFT_SIZE_4096 = 4
        
        /** Represents the size of the [enum FFTSize] enum. */
        static readonly FFT_SIZE_MAX = 5
        constructor(identifier?: any)
        
        /** The length of the buffer to keep (in seconds). Higher values keep data around for longer, but require more memory. */
        get bufferLength(): float64
        set bufferLength(value: float64)
        get tapBackPos(): float64
        set tapBackPos(value: float64)
        
        /** The size of the [url=https://en.wikipedia.org/wiki/Fast_Fourier_transform]Fast Fourier transform[/url] buffer. Higher values smooth out the spectrum analysis over time, but have greater latency. The effects of this higher latency are especially noticeable with sudden amplitude changes. */
        get fftSize(): int64
        set fftSize(value: int64)
    }
    namespace AudioEffectSpectrumAnalyzerInstance {
        enum MagnitudeMode {
            MagnitudeAverage = 0,
            MagnitudeMax = 1,
        }
    }
    /** Queryable instance of an [AudioEffectSpectrumAnalyzer].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audioeffectspectrumanalyzerinstance.html  
     */
    class AudioEffectSpectrumAnalyzerInstance extends AudioEffectInstance {
        /** Use the average value across the frequency range as magnitude. */
        static readonly MAGNITUDE_AVERAGE = 0
        
        /** Use the maximum value of the frequency range as magnitude. */
        static readonly MAGNITUDE_MAX = 1
        constructor(identifier?: any)
        
        /** Returns the magnitude of the frequencies from [param from_hz] to [param to_hz] in linear energy as a Vector2. The `x` component of the return value represents the left stereo channel, and `y` represents the right channel.  
         *  [param mode] determines how the frequency range will be processed. See [enum MagnitudeMode].  
         */
        getMagnitudeForFrequencyRange(fromHz: float64, toHz: float64, mode?: AudioEffectSpectrumAnalyzerInstance.MagnitudeMode /* = 1 */): Vector2
    }
    /** An audio effect that can be used to adjust the intensity of stereo panning.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audioeffectstereoenhance.html  
     */
    class AudioEffectStereoEnhance extends AudioEffect {
        constructor(identifier?: any)
        /** Amplifies the difference between stereo channels, increasing or decreasing existing panning. A value of 0.0 will downmix stereo to mono. Does not affect a mono signal. */
        get panPullout(): float64
        set panPullout(value: float64)
        
        /** Widens sound stage through phase shifting in conjunction with [member surround]. Just delays the right channel if [member surround] is 0. */
        get timePulloutMs(): float64
        set timePulloutMs(value: float64)
        
        /** Widens sound stage through phase shifting in conjunction with [member time_pullout_ms]. Just pans sound to the left channel if [member time_pullout_ms] is 0. */
        get surround(): float64
        set surround(value: float64)
    }
    /** Overrides the location sounds are heard from.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audiolistener2d.html  
     */
    class AudioListener2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** Makes the [AudioListener2D] active, setting it as the hearing point for the sounds. If there is already another active [AudioListener2D], it will be disabled.  
         *  This method will have no effect if the [AudioListener2D] is not added to [SceneTree].  
         */
        makeCurrent(): void
        
        /** Disables the [AudioListener2D]. If it's not set as current, this method will have no effect. */
        clearCurrent(): void
        
        /** Returns `true` if this [AudioListener2D] is currently active. */
        isCurrent(): boolean
    }
    /** Overrides the location sounds are heard from.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audiolistener3d.html  
     */
    class AudioListener3D<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        /** Enables the listener. This will override the current camera's listener. */
        makeCurrent(): void
        
        /** Disables the listener to use the current camera's listener instead. */
        clearCurrent(): void
        
        /** Returns `true` if the listener was made current using [method make_current], `false` otherwise.  
         *      
         *  **Note:** There may be more than one AudioListener3D marked as "current" in the scene tree, but only the one that was made current last will be used.  
         */
        isCurrent(): boolean
        
        /** Returns the listener's global orthonormalized [Transform3D]. */
        getListenerTransform(): Transform3D
    }
    /** Base class for audio samples.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audiosample.html  
     */
    class AudioSample extends RefCounted {
        constructor(identifier?: any)
    }
    /** Meta class for playing back audio samples.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audiosampleplayback.html  
     */
    class AudioSamplePlayback extends RefCounted {
        constructor(identifier?: any)
    }
    /** Base class for audio streams.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audiostream.html  
     */
    class AudioStream extends Resource {
        constructor(identifier?: any)
        /** Override this method to customize the returned value of [method instantiate_playback]. Should return a new [AudioStreamPlayback] created when the stream is played (such as by an [AudioStreamPlayer]). */
        /* gdvirtual */ _instantiatePlayback(): null | AudioStreamPlayback
        
        /** Override this method to customize the name assigned to this audio stream. Unused by the engine. */
        /* gdvirtual */ _getStreamName(): string
        
        /** Override this method to customize the returned value of [method get_length]. Should return the length of this audio stream, in seconds. */
        /* gdvirtual */ _getLength(): float64
        
        /** Override this method to customize the returned value of [method is_monophonic]. Should return `true` if this audio stream only supports one channel. */
        /* gdvirtual */ _isMonophonic(): boolean
        
        /** Overridable method. Should return the tempo of this audio stream, in beats per minute (BPM). Used by the engine to determine the position of every beat.  
         *  Ideally, the returned value should be based off the stream's sample rate ([member AudioStreamWAV.mix_rate], for example).  
         */
        /* gdvirtual */ _getBpm(): float64
        
        /** Overridable method. Should return the total number of beats of this audio stream. Used by the engine to determine the position of every beat.  
         *  Ideally, the returned value should be based off the stream's sample rate ([member AudioStreamWAV.mix_rate], for example).  
         */
        /* gdvirtual */ _getBeatCount(): int64
        
        /** Return the controllable parameters of this stream. This array contains dictionaries with a property info description format (see [method Object.get_property_list]). Additionally, the default value for this parameter must be added tho each dictionary in "default_value" field. */
        /* gdvirtual */ _getParameterList(): GArray
        
        /** Override this method to return `true` if this stream has a loop. */
        /* gdvirtual */ _hasLoop(): boolean
        
        /** Override this method to return the bar beats of this stream. */
        /* gdvirtual */ _getBarBeats(): int64
        
        /** Returns the length of the audio stream in seconds. */
        getLength(): float64
        
        /** Returns `true` if this audio stream only supports one channel ( *monophony* ), or `false` if the audio stream supports two or more channels ( *polyphony* ). */
        isMonophonic(): boolean
        
        /** Returns a newly created [AudioStreamPlayback] intended to play this audio stream. Useful for when you want to extend [method _instantiate_playback] but call [method instantiate_playback] from an internally held AudioStream subresource. An example of this can be found in the source code for `AudioStreamRandomPitch::instantiate_playback`. */
        instantiatePlayback(): null | AudioStreamPlayback
        
        /** Returns if the current [AudioStream] can be used as a sample. Only static streams can be sampled. */
        canBeSampled(): boolean
        
        /** Generates an [AudioSample] based on the current stream. */
        generateSample(): null | AudioSample
        
        /** Returns `true` if the stream is a collection of other streams, `false` otherwise. */
        isMetaStream(): boolean
        
        /** Signal to be emitted to notify when the parameter list changed. */
        readonly parameterListChanged: Signal<() => void>
    }
    namespace AudioStreamGenerator {
        enum AudioStreamGeneratorMixRate {
            MixRateOutput = 0,
            MixRateInput = 1,
            MixRateCustom = 2,
            MixRateMax = 3,
        }
    }
    /** An audio stream with utilities for procedural sound generation.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audiostreamgenerator.html  
     */
    class AudioStreamGenerator extends AudioStream {
        /** Current [AudioServer] output mixing rate. */
        static readonly MIX_RATE_OUTPUT = 0
        
        /** Current [AudioServer] input mixing rate. */
        static readonly MIX_RATE_INPUT = 1
        
        /** Custom mixing rate, specified by [member mix_rate]. */
        static readonly MIX_RATE_CUSTOM = 2
        
        /** Maximum value for the mixing rate mode enum. */
        static readonly MIX_RATE_MAX = 3
        constructor(identifier?: any)
        
        /** Mixing rate mode. If set to [constant MIX_RATE_CUSTOM], [member mix_rate] is used, otherwise current [AudioServer] mixing rate is used. */
        get mixRateMode(): int64
        set mixRateMode(value: int64)
        
        /** The sample rate to use (in Hz). Higher values are more demanding for the CPU to generate, but result in better quality.  
         *  In games, common sample rates in use are `11025`, `16000`, `22050`, `32000`, `44100`, and `48000`.  
         *  According to the [url=https://en.wikipedia.org/wiki/Nyquist%E2%80%93Shannon_sampling_theorem]Nyquist-Shannon sampling theorem[/url], there is no quality difference to human hearing when going past 40,000 Hz (since most humans can only hear up to ~20,000 Hz, often less). If you are generating lower-pitched sounds such as voices, lower sample rates such as `32000` or `22050` may be usable with no loss in quality.  
         *      
         *  **Note:** [AudioStreamGenerator] is not automatically resampling input data, to produce expected result [member mix_rate_mode] should match the sampling rate of input data.  
         *      
         *  **Note:** If you are using [AudioEffectCapture] as the source of your data, set [member mix_rate_mode] to [constant MIX_RATE_INPUT] or [constant MIX_RATE_OUTPUT] to automatically match current [AudioServer] mixing rate.  
         */
        get mixRate(): float64
        set mixRate(value: float64)
        
        /** The length of the buffer to generate (in seconds). Lower values result in less latency, but require the script to generate audio data faster, resulting in increased CPU usage and more risk for audio cracking if the CPU can't keep up. */
        get bufferLength(): float64
        set bufferLength(value: float64)
    }
    /** Plays back audio generated using [AudioStreamGenerator].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audiostreamgeneratorplayback.html  
     */
    class AudioStreamGeneratorPlayback extends AudioStreamPlaybackResampled {
        constructor(identifier?: any)
        /** Pushes a single audio data frame to the buffer. This is usually less efficient than [method push_buffer] in C# and compiled languages via GDExtension, but [method push_frame] may be  *more*  efficient in GDScript. */
        pushFrame(frame: Vector2): boolean
        
        /** Returns `true` if a buffer of the size [param amount] can be pushed to the audio sample data buffer without overflowing it, `false` otherwise. */
        canPushBuffer(amount: int64): boolean
        
        /** Pushes several audio data frames to the buffer. This is usually more efficient than [method push_frame] in C# and compiled languages via GDExtension, but [method push_buffer] may be  *less*  efficient in GDScript. */
        pushBuffer(frames: PackedVector2Array | Vector2[]): boolean
        
        /** Returns the number of frames that can be pushed to the audio sample data buffer without overflowing it. If the result is `0`, the buffer is full. */
        getFramesAvailable(): int64
        
        /** Returns the number of times the playback skipped due to a buffer underrun in the audio sample data. This value is reset at the start of the playback. */
        getSkips(): int64
        
        /** Clears the audio sample data buffer. */
        clearBuffer(): void
    }
    namespace AudioStreamInteractive {
        enum TransitionFromTime {
            TransitionFromTimeImmediate = 0,
            TransitionFromTimeNextBeat = 1,
            TransitionFromTimeNextBar = 2,
            TransitionFromTimeEnd = 3,
        }
        enum TransitionToTime {
            TransitionToTimeSamePosition = 0,
            TransitionToTimeStart = 1,
        }
        enum FadeMode {
            FadeDisabled = 0,
            FadeIn = 1,
            FadeOut = 2,
            FadeCross = 3,
            FadeAutomatic = 4,
        }
        enum AutoAdvanceMode {
            AutoAdvanceDisabled = 0,
            AutoAdvanceEnabled = 1,
            AutoAdvanceReturnToHold = 2,
        }
    }
    /** Audio stream that can playback music interactively, combining clips and a transition table.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audiostreaminteractive.html  
     */
    class AudioStreamInteractive extends AudioStream {
        /** Start transition as soon as possible, don't wait for any specific time position. */
        static readonly TRANSITION_FROM_TIME_IMMEDIATE = 0
        
        /** Transition when the clip playback position reaches the next beat. */
        static readonly TRANSITION_FROM_TIME_NEXT_BEAT = 1
        
        /** Transition when the clip playback position reaches the next bar. */
        static readonly TRANSITION_FROM_TIME_NEXT_BAR = 2
        
        /** Transition when the current clip finished playing. */
        static readonly TRANSITION_FROM_TIME_END = 3
        
        /** Transition to the same position in the destination clip. This is useful when both clips have exactly the same length and the music should fade between them. */
        static readonly TRANSITION_TO_TIME_SAME_POSITION = 0
        
        /** Transition to the start of the destination clip. */
        static readonly TRANSITION_TO_TIME_START = 1
        
        /** Do not use fade for the transition. This is useful when transitioning from a clip-end to clip-beginning, and each clip has their begin/end. */
        static readonly FADE_DISABLED = 0
        
        /** Use a fade-in in the next clip, let the current clip finish. */
        static readonly FADE_IN = 1
        
        /** Use a fade-out in the current clip, the next clip will start by itself. */
        static readonly FADE_OUT = 2
        
        /** Use a cross-fade between clips. */
        static readonly FADE_CROSS = 3
        
        /** Use automatic fade logic depending on the transition from/to. It is recommended to use this by default. */
        static readonly FADE_AUTOMATIC = 4
        
        /** Disable auto-advance (default). */
        static readonly AUTO_ADVANCE_DISABLED = 0
        
        /** Enable auto-advance, a clip must be specified. */
        static readonly AUTO_ADVANCE_ENABLED = 1
        
        /** Enable auto-advance, but instead of specifying a clip, the playback will return to hold (see [method add_transition]). */
        static readonly AUTO_ADVANCE_RETURN_TO_HOLD = 2
        
        /** This constant describes that any clip is valid for a specific transition as either source or destination. */
        static readonly CLIP_ANY = -1
        constructor(identifier?: any)
        _getLinkedUndoProperties(forProperty: string, forValue: any): PackedStringArray
        _inspectorArraySwapClip(a: int64, b: int64): void
        
        /** Set the name of the current clip (for easier identification). */
        setClipName(clipIndex: int64, name: StringName): void
        
        /** Return the name of a clip. */
        getClipName(clipIndex: int64): StringName
        
        /** Set the [AudioStream] associated with the current clip. */
        setClipStream(clipIndex: int64, stream: AudioStream): void
        
        /** Return the [AudioStream] associated with a clip. */
        getClipStream(clipIndex: int64): null | AudioStream
        
        /** Set whether a clip will auto-advance by changing the auto-advance mode. */
        setClipAutoAdvance(clipIndex: int64, mode: AudioStreamInteractive.AutoAdvanceMode): void
        
        /** Return whether a clip has auto-advance enabled. See [method set_clip_auto_advance]. */
        getClipAutoAdvance(clipIndex: int64): AudioStreamInteractive.AutoAdvanceMode
        
        /** Set the index of the next clip towards which this clip will auto advance to when finished. If the clip being played loops, then auto-advance will be ignored. */
        setClipAutoAdvanceNextClip(clipIndex: int64, autoAdvanceNextClip: int64): void
        
        /** Return the clip towards which the clip referenced by [param clip_index] will auto-advance to. */
        getClipAutoAdvanceNextClip(clipIndex: int64): int64
        
        /** Add a transition between two clips. Provide the indices of the source and destination clips, or use the [constant CLIP_ANY] constant to indicate that transition happens to/from any clip to this one.  
         *  * [param from_time] indicates the moment in the current clip the transition will begin after triggered.  
         *  * [param to_time] indicates the time in the next clip that the playback will start from.  
         *  * [param fade_mode] indicates how the fade will happen between clips. If unsure, just use [constant FADE_AUTOMATIC] which uses the most common type of fade for each situation.  
         *  * [param fade_beats] indicates how many beats the fade will take. Using decimals is allowed.  
         *  * [param use_filler_clip] indicates that there will be a filler clip used between the source and destination clips.  
         *  * [param filler_clip] the index of the filler clip.  
         *  * If [param hold_previous] is used, then this clip will be remembered. This can be used together with [constant AUTO_ADVANCE_RETURN_TO_HOLD] to return to this clip after another is done playing.  
         */
        addTransition(fromClip: int64, toClip: int64, fromTime: AudioStreamInteractive.TransitionFromTime, toTime: AudioStreamInteractive.TransitionToTime, fadeMode: AudioStreamInteractive.FadeMode, fadeBeats: float64, useFillerClip?: boolean /* = false */, fillerClip?: int64 /* = -1 */, holdPrevious?: boolean /* = false */): void
        
        /** Returns `true` if a given transition exists (was added via [method add_transition]). */
        hasTransition(fromClip: int64, toClip: int64): boolean
        
        /** Erase a transition by providing [param from_clip] and [param to_clip] clip indices. [constant CLIP_ANY] can be used for either argument or both. */
        eraseTransition(fromClip: int64, toClip: int64): void
        
        /** Return the list of transitions (from, to interleaved). */
        getTransitionList(): PackedInt32Array
        
        /** Return the source time position for a transition (see [method add_transition]). */
        getTransitionFromTime(fromClip: int64, toClip: int64): AudioStreamInteractive.TransitionFromTime
        
        /** Return the destination time position for a transition (see [method add_transition]). */
        getTransitionToTime(fromClip: int64, toClip: int64): AudioStreamInteractive.TransitionToTime
        
        /** Return the mode for a transition (see [method add_transition]). */
        getTransitionFadeMode(fromClip: int64, toClip: int64): AudioStreamInteractive.FadeMode
        
        /** Return the time (in beats) for a transition (see [method add_transition]). */
        getTransitionFadeBeats(fromClip: int64, toClip: int64): float64
        
        /** Return whether a transition uses the  *filler clip*  functionality (see [method add_transition]). */
        isTransitionUsingFillerClip(fromClip: int64, toClip: int64): boolean
        
        /** Return the filler clip for a transition (see [method add_transition]). */
        getTransitionFillerClip(fromClip: int64, toClip: int64): int64
        
        /** Return whether a transition uses the  *hold previous*  functionality (see [method add_transition]). */
        isTransitionHoldingPrevious(fromClip: int64, toClip: int64): boolean
        
        /** Amount of clips contained in this interactive player. */
        get clipCount(): any /*Clips,clip_,page_size=999,unfoldable,numbered,swap_method=_inspector_array_swap_clip,add_button_text=Add Clip*/
        set clipCount(value: any /*Clips,clip_,page_size=999,unfoldable,numbered,swap_method=_inspector_array_swap_clip,add_button_text=Add Clip*/)
        get "clip0/name"(): StringName
        set "clip0/name"(value: StringName)
        get "clip0/stream"(): null | AudioStream
        set "clip0/stream"(value: null | AudioStream)
        get "clip0/autoAdvance"(): int64
        set "clip0/autoAdvance"(value: int64)
        get "clip0/nextClip"(): int64
        set "clip0/nextClip"(value: int64)
        get "clip1/name"(): StringName
        set "clip1/name"(value: StringName)
        get "clip1/stream"(): null | AudioStream
        set "clip1/stream"(value: null | AudioStream)
        get "clip1/autoAdvance"(): int64
        set "clip1/autoAdvance"(value: int64)
        get "clip1/nextClip"(): int64
        set "clip1/nextClip"(value: int64)
        get "clip2/name"(): StringName
        set "clip2/name"(value: StringName)
        get "clip2/stream"(): null | AudioStream
        set "clip2/stream"(value: null | AudioStream)
        get "clip2/autoAdvance"(): int64
        set "clip2/autoAdvance"(value: int64)
        get "clip2/nextClip"(): int64
        set "clip2/nextClip"(value: int64)
        get "clip3/name"(): StringName
        set "clip3/name"(value: StringName)
        get "clip3/stream"(): null | AudioStream
        set "clip3/stream"(value: null | AudioStream)
        get "clip3/autoAdvance"(): int64
        set "clip3/autoAdvance"(value: int64)
        get "clip3/nextClip"(): int64
        set "clip3/nextClip"(value: int64)
        get "clip4/name"(): StringName
        set "clip4/name"(value: StringName)
        get "clip4/stream"(): null | AudioStream
        set "clip4/stream"(value: null | AudioStream)
        get "clip4/autoAdvance"(): int64
        set "clip4/autoAdvance"(value: int64)
        get "clip4/nextClip"(): int64
        set "clip4/nextClip"(value: int64)
        get "clip5/name"(): StringName
        set "clip5/name"(value: StringName)
        get "clip5/stream"(): null | AudioStream
        set "clip5/stream"(value: null | AudioStream)
        get "clip5/autoAdvance"(): int64
        set "clip5/autoAdvance"(value: int64)
        get "clip5/nextClip"(): int64
        set "clip5/nextClip"(value: int64)
        get "clip6/name"(): StringName
        set "clip6/name"(value: StringName)
        get "clip6/stream"(): null | AudioStream
        set "clip6/stream"(value: null | AudioStream)
        get "clip6/autoAdvance"(): int64
        set "clip6/autoAdvance"(value: int64)
        get "clip6/nextClip"(): int64
        set "clip6/nextClip"(value: int64)
        get "clip7/name"(): StringName
        set "clip7/name"(value: StringName)
        get "clip7/stream"(): null | AudioStream
        set "clip7/stream"(value: null | AudioStream)
        get "clip7/autoAdvance"(): int64
        set "clip7/autoAdvance"(value: int64)
        get "clip7/nextClip"(): int64
        set "clip7/nextClip"(value: int64)
        get "clip8/name"(): StringName
        set "clip8/name"(value: StringName)
        get "clip8/stream"(): null | AudioStream
        set "clip8/stream"(value: null | AudioStream)
        get "clip8/autoAdvance"(): int64
        set "clip8/autoAdvance"(value: int64)
        get "clip8/nextClip"(): int64
        set "clip8/nextClip"(value: int64)
        get "clip9/name"(): StringName
        set "clip9/name"(value: StringName)
        get "clip9/stream"(): null | AudioStream
        set "clip9/stream"(value: null | AudioStream)
        get "clip9/autoAdvance"(): int64
        set "clip9/autoAdvance"(value: int64)
        get "clip9/nextClip"(): int64
        set "clip9/nextClip"(value: int64)
        get "clip10/name"(): StringName
        set "clip10/name"(value: StringName)
        get "clip10/stream"(): null | AudioStream
        set "clip10/stream"(value: null | AudioStream)
        get "clip10/autoAdvance"(): int64
        set "clip10/autoAdvance"(value: int64)
        get "clip10/nextClip"(): int64
        set "clip10/nextClip"(value: int64)
        get "clip11/name"(): StringName
        set "clip11/name"(value: StringName)
        get "clip11/stream"(): null | AudioStream
        set "clip11/stream"(value: null | AudioStream)
        get "clip11/autoAdvance"(): int64
        set "clip11/autoAdvance"(value: int64)
        get "clip11/nextClip"(): int64
        set "clip11/nextClip"(value: int64)
        get "clip12/name"(): StringName
        set "clip12/name"(value: StringName)
        get "clip12/stream"(): null | AudioStream
        set "clip12/stream"(value: null | AudioStream)
        get "clip12/autoAdvance"(): int64
        set "clip12/autoAdvance"(value: int64)
        get "clip12/nextClip"(): int64
        set "clip12/nextClip"(value: int64)
        get "clip13/name"(): StringName
        set "clip13/name"(value: StringName)
        get "clip13/stream"(): null | AudioStream
        set "clip13/stream"(value: null | AudioStream)
        get "clip13/autoAdvance"(): int64
        set "clip13/autoAdvance"(value: int64)
        get "clip13/nextClip"(): int64
        set "clip13/nextClip"(value: int64)
        get "clip14/name"(): StringName
        set "clip14/name"(value: StringName)
        get "clip14/stream"(): null | AudioStream
        set "clip14/stream"(value: null | AudioStream)
        get "clip14/autoAdvance"(): int64
        set "clip14/autoAdvance"(value: int64)
        get "clip14/nextClip"(): int64
        set "clip14/nextClip"(value: int64)
        get "clip15/name"(): StringName
        set "clip15/name"(value: StringName)
        get "clip15/stream"(): null | AudioStream
        set "clip15/stream"(value: null | AudioStream)
        get "clip15/autoAdvance"(): int64
        set "clip15/autoAdvance"(value: int64)
        get "clip15/nextClip"(): int64
        set "clip15/nextClip"(value: int64)
        get "clip16/name"(): StringName
        set "clip16/name"(value: StringName)
        get "clip16/stream"(): null | AudioStream
        set "clip16/stream"(value: null | AudioStream)
        get "clip16/autoAdvance"(): int64
        set "clip16/autoAdvance"(value: int64)
        get "clip16/nextClip"(): int64
        set "clip16/nextClip"(value: int64)
        get "clip17/name"(): StringName
        set "clip17/name"(value: StringName)
        get "clip17/stream"(): null | AudioStream
        set "clip17/stream"(value: null | AudioStream)
        get "clip17/autoAdvance"(): int64
        set "clip17/autoAdvance"(value: int64)
        get "clip17/nextClip"(): int64
        set "clip17/nextClip"(value: int64)
        get "clip18/name"(): StringName
        set "clip18/name"(value: StringName)
        get "clip18/stream"(): null | AudioStream
        set "clip18/stream"(value: null | AudioStream)
        get "clip18/autoAdvance"(): int64
        set "clip18/autoAdvance"(value: int64)
        get "clip18/nextClip"(): int64
        set "clip18/nextClip"(value: int64)
        get "clip19/name"(): StringName
        set "clip19/name"(value: StringName)
        get "clip19/stream"(): null | AudioStream
        set "clip19/stream"(value: null | AudioStream)
        get "clip19/autoAdvance"(): int64
        set "clip19/autoAdvance"(value: int64)
        get "clip19/nextClip"(): int64
        set "clip19/nextClip"(value: int64)
        get "clip20/name"(): StringName
        set "clip20/name"(value: StringName)
        get "clip20/stream"(): null | AudioStream
        set "clip20/stream"(value: null | AudioStream)
        get "clip20/autoAdvance"(): int64
        set "clip20/autoAdvance"(value: int64)
        get "clip20/nextClip"(): int64
        set "clip20/nextClip"(value: int64)
        get "clip21/name"(): StringName
        set "clip21/name"(value: StringName)
        get "clip21/stream"(): null | AudioStream
        set "clip21/stream"(value: null | AudioStream)
        get "clip21/autoAdvance"(): int64
        set "clip21/autoAdvance"(value: int64)
        get "clip21/nextClip"(): int64
        set "clip21/nextClip"(value: int64)
        get "clip22/name"(): StringName
        set "clip22/name"(value: StringName)
        get "clip22/stream"(): null | AudioStream
        set "clip22/stream"(value: null | AudioStream)
        get "clip22/autoAdvance"(): int64
        set "clip22/autoAdvance"(value: int64)
        get "clip22/nextClip"(): int64
        set "clip22/nextClip"(value: int64)
        get "clip23/name"(): StringName
        set "clip23/name"(value: StringName)
        get "clip23/stream"(): null | AudioStream
        set "clip23/stream"(value: null | AudioStream)
        get "clip23/autoAdvance"(): int64
        set "clip23/autoAdvance"(value: int64)
        get "clip23/nextClip"(): int64
        set "clip23/nextClip"(value: int64)
        get "clip24/name"(): StringName
        set "clip24/name"(value: StringName)
        get "clip24/stream"(): null | AudioStream
        set "clip24/stream"(value: null | AudioStream)
        get "clip24/autoAdvance"(): int64
        set "clip24/autoAdvance"(value: int64)
        get "clip24/nextClip"(): int64
        set "clip24/nextClip"(value: int64)
        get "clip25/name"(): StringName
        set "clip25/name"(value: StringName)
        get "clip25/stream"(): null | AudioStream
        set "clip25/stream"(value: null | AudioStream)
        get "clip25/autoAdvance"(): int64
        set "clip25/autoAdvance"(value: int64)
        get "clip25/nextClip"(): int64
        set "clip25/nextClip"(value: int64)
        get "clip26/name"(): StringName
        set "clip26/name"(value: StringName)
        get "clip26/stream"(): null | AudioStream
        set "clip26/stream"(value: null | AudioStream)
        get "clip26/autoAdvance"(): int64
        set "clip26/autoAdvance"(value: int64)
        get "clip26/nextClip"(): int64
        set "clip26/nextClip"(value: int64)
        get "clip27/name"(): StringName
        set "clip27/name"(value: StringName)
        get "clip27/stream"(): null | AudioStream
        set "clip27/stream"(value: null | AudioStream)
        get "clip27/autoAdvance"(): int64
        set "clip27/autoAdvance"(value: int64)
        get "clip27/nextClip"(): int64
        set "clip27/nextClip"(value: int64)
        get "clip28/name"(): StringName
        set "clip28/name"(value: StringName)
        get "clip28/stream"(): null | AudioStream
        set "clip28/stream"(value: null | AudioStream)
        get "clip28/autoAdvance"(): int64
        set "clip28/autoAdvance"(value: int64)
        get "clip28/nextClip"(): int64
        set "clip28/nextClip"(value: int64)
        get "clip29/name"(): StringName
        set "clip29/name"(value: StringName)
        get "clip29/stream"(): null | AudioStream
        set "clip29/stream"(value: null | AudioStream)
        get "clip29/autoAdvance"(): int64
        set "clip29/autoAdvance"(value: int64)
        get "clip29/nextClip"(): int64
        set "clip29/nextClip"(value: int64)
        get "clip30/name"(): StringName
        set "clip30/name"(value: StringName)
        get "clip30/stream"(): null | AudioStream
        set "clip30/stream"(value: null | AudioStream)
        get "clip30/autoAdvance"(): int64
        set "clip30/autoAdvance"(value: int64)
        get "clip30/nextClip"(): int64
        set "clip30/nextClip"(value: int64)
        get "clip31/name"(): StringName
        set "clip31/name"(value: StringName)
        get "clip31/stream"(): null | AudioStream
        set "clip31/stream"(value: null | AudioStream)
        get "clip31/autoAdvance"(): int64
        set "clip31/autoAdvance"(value: int64)
        get "clip31/nextClip"(): int64
        set "clip31/nextClip"(value: int64)
        get "clip32/name"(): StringName
        set "clip32/name"(value: StringName)
        get "clip32/stream"(): null | AudioStream
        set "clip32/stream"(value: null | AudioStream)
        get "clip32/autoAdvance"(): int64
        set "clip32/autoAdvance"(value: int64)
        get "clip32/nextClip"(): int64
        set "clip32/nextClip"(value: int64)
        get "clip33/name"(): StringName
        set "clip33/name"(value: StringName)
        get "clip33/stream"(): null | AudioStream
        set "clip33/stream"(value: null | AudioStream)
        get "clip33/autoAdvance"(): int64
        set "clip33/autoAdvance"(value: int64)
        get "clip33/nextClip"(): int64
        set "clip33/nextClip"(value: int64)
        get "clip34/name"(): StringName
        set "clip34/name"(value: StringName)
        get "clip34/stream"(): null | AudioStream
        set "clip34/stream"(value: null | AudioStream)
        get "clip34/autoAdvance"(): int64
        set "clip34/autoAdvance"(value: int64)
        get "clip34/nextClip"(): int64
        set "clip34/nextClip"(value: int64)
        get "clip35/name"(): StringName
        set "clip35/name"(value: StringName)
        get "clip35/stream"(): null | AudioStream
        set "clip35/stream"(value: null | AudioStream)
        get "clip35/autoAdvance"(): int64
        set "clip35/autoAdvance"(value: int64)
        get "clip35/nextClip"(): int64
        set "clip35/nextClip"(value: int64)
        get "clip36/name"(): StringName
        set "clip36/name"(value: StringName)
        get "clip36/stream"(): null | AudioStream
        set "clip36/stream"(value: null | AudioStream)
        get "clip36/autoAdvance"(): int64
        set "clip36/autoAdvance"(value: int64)
        get "clip36/nextClip"(): int64
        set "clip36/nextClip"(value: int64)
        get "clip37/name"(): StringName
        set "clip37/name"(value: StringName)
        get "clip37/stream"(): null | AudioStream
        set "clip37/stream"(value: null | AudioStream)
        get "clip37/autoAdvance"(): int64
        set "clip37/autoAdvance"(value: int64)
        get "clip37/nextClip"(): int64
        set "clip37/nextClip"(value: int64)
        get "clip38/name"(): StringName
        set "clip38/name"(value: StringName)
        get "clip38/stream"(): null | AudioStream
        set "clip38/stream"(value: null | AudioStream)
        get "clip38/autoAdvance"(): int64
        set "clip38/autoAdvance"(value: int64)
        get "clip38/nextClip"(): int64
        set "clip38/nextClip"(value: int64)
        get "clip39/name"(): StringName
        set "clip39/name"(value: StringName)
        get "clip39/stream"(): null | AudioStream
        set "clip39/stream"(value: null | AudioStream)
        get "clip39/autoAdvance"(): int64
        set "clip39/autoAdvance"(value: int64)
        get "clip39/nextClip"(): int64
        set "clip39/nextClip"(value: int64)
        get "clip40/name"(): StringName
        set "clip40/name"(value: StringName)
        get "clip40/stream"(): null | AudioStream
        set "clip40/stream"(value: null | AudioStream)
        get "clip40/autoAdvance"(): int64
        set "clip40/autoAdvance"(value: int64)
        get "clip40/nextClip"(): int64
        set "clip40/nextClip"(value: int64)
        get "clip41/name"(): StringName
        set "clip41/name"(value: StringName)
        get "clip41/stream"(): null | AudioStream
        set "clip41/stream"(value: null | AudioStream)
        get "clip41/autoAdvance"(): int64
        set "clip41/autoAdvance"(value: int64)
        get "clip41/nextClip"(): int64
        set "clip41/nextClip"(value: int64)
        get "clip42/name"(): StringName
        set "clip42/name"(value: StringName)
        get "clip42/stream"(): null | AudioStream
        set "clip42/stream"(value: null | AudioStream)
        get "clip42/autoAdvance"(): int64
        set "clip42/autoAdvance"(value: int64)
        get "clip42/nextClip"(): int64
        set "clip42/nextClip"(value: int64)
        get "clip43/name"(): StringName
        set "clip43/name"(value: StringName)
        get "clip43/stream"(): null | AudioStream
        set "clip43/stream"(value: null | AudioStream)
        get "clip43/autoAdvance"(): int64
        set "clip43/autoAdvance"(value: int64)
        get "clip43/nextClip"(): int64
        set "clip43/nextClip"(value: int64)
        get "clip44/name"(): StringName
        set "clip44/name"(value: StringName)
        get "clip44/stream"(): null | AudioStream
        set "clip44/stream"(value: null | AudioStream)
        get "clip44/autoAdvance"(): int64
        set "clip44/autoAdvance"(value: int64)
        get "clip44/nextClip"(): int64
        set "clip44/nextClip"(value: int64)
        get "clip45/name"(): StringName
        set "clip45/name"(value: StringName)
        get "clip45/stream"(): null | AudioStream
        set "clip45/stream"(value: null | AudioStream)
        get "clip45/autoAdvance"(): int64
        set "clip45/autoAdvance"(value: int64)
        get "clip45/nextClip"(): int64
        set "clip45/nextClip"(value: int64)
        get "clip46/name"(): StringName
        set "clip46/name"(value: StringName)
        get "clip46/stream"(): null | AudioStream
        set "clip46/stream"(value: null | AudioStream)
        get "clip46/autoAdvance"(): int64
        set "clip46/autoAdvance"(value: int64)
        get "clip46/nextClip"(): int64
        set "clip46/nextClip"(value: int64)
        get "clip47/name"(): StringName
        set "clip47/name"(value: StringName)
        get "clip47/stream"(): null | AudioStream
        set "clip47/stream"(value: null | AudioStream)
        get "clip47/autoAdvance"(): int64
        set "clip47/autoAdvance"(value: int64)
        get "clip47/nextClip"(): int64
        set "clip47/nextClip"(value: int64)
        get "clip48/name"(): StringName
        set "clip48/name"(value: StringName)
        get "clip48/stream"(): null | AudioStream
        set "clip48/stream"(value: null | AudioStream)
        get "clip48/autoAdvance"(): int64
        set "clip48/autoAdvance"(value: int64)
        get "clip48/nextClip"(): int64
        set "clip48/nextClip"(value: int64)
        get "clip49/name"(): StringName
        set "clip49/name"(value: StringName)
        get "clip49/stream"(): null | AudioStream
        set "clip49/stream"(value: null | AudioStream)
        get "clip49/autoAdvance"(): int64
        set "clip49/autoAdvance"(value: int64)
        get "clip49/nextClip"(): int64
        set "clip49/nextClip"(value: int64)
        get "clip50/name"(): StringName
        set "clip50/name"(value: StringName)
        get "clip50/stream"(): null | AudioStream
        set "clip50/stream"(value: null | AudioStream)
        get "clip50/autoAdvance"(): int64
        set "clip50/autoAdvance"(value: int64)
        get "clip50/nextClip"(): int64
        set "clip50/nextClip"(value: int64)
        get "clip51/name"(): StringName
        set "clip51/name"(value: StringName)
        get "clip51/stream"(): null | AudioStream
        set "clip51/stream"(value: null | AudioStream)
        get "clip51/autoAdvance"(): int64
        set "clip51/autoAdvance"(value: int64)
        get "clip51/nextClip"(): int64
        set "clip51/nextClip"(value: int64)
        get "clip52/name"(): StringName
        set "clip52/name"(value: StringName)
        get "clip52/stream"(): null | AudioStream
        set "clip52/stream"(value: null | AudioStream)
        get "clip52/autoAdvance"(): int64
        set "clip52/autoAdvance"(value: int64)
        get "clip52/nextClip"(): int64
        set "clip52/nextClip"(value: int64)
        get "clip53/name"(): StringName
        set "clip53/name"(value: StringName)
        get "clip53/stream"(): null | AudioStream
        set "clip53/stream"(value: null | AudioStream)
        get "clip53/autoAdvance"(): int64
        set "clip53/autoAdvance"(value: int64)
        get "clip53/nextClip"(): int64
        set "clip53/nextClip"(value: int64)
        get "clip54/name"(): StringName
        set "clip54/name"(value: StringName)
        get "clip54/stream"(): null | AudioStream
        set "clip54/stream"(value: null | AudioStream)
        get "clip54/autoAdvance"(): int64
        set "clip54/autoAdvance"(value: int64)
        get "clip54/nextClip"(): int64
        set "clip54/nextClip"(value: int64)
        get "clip55/name"(): StringName
        set "clip55/name"(value: StringName)
        get "clip55/stream"(): null | AudioStream
        set "clip55/stream"(value: null | AudioStream)
        get "clip55/autoAdvance"(): int64
        set "clip55/autoAdvance"(value: int64)
        get "clip55/nextClip"(): int64
        set "clip55/nextClip"(value: int64)
        get "clip56/name"(): StringName
        set "clip56/name"(value: StringName)
        get "clip56/stream"(): null | AudioStream
        set "clip56/stream"(value: null | AudioStream)
        get "clip56/autoAdvance"(): int64
        set "clip56/autoAdvance"(value: int64)
        get "clip56/nextClip"(): int64
        set "clip56/nextClip"(value: int64)
        get "clip57/name"(): StringName
        set "clip57/name"(value: StringName)
        get "clip57/stream"(): null | AudioStream
        set "clip57/stream"(value: null | AudioStream)
        get "clip57/autoAdvance"(): int64
        set "clip57/autoAdvance"(value: int64)
        get "clip57/nextClip"(): int64
        set "clip57/nextClip"(value: int64)
        get "clip58/name"(): StringName
        set "clip58/name"(value: StringName)
        get "clip58/stream"(): null | AudioStream
        set "clip58/stream"(value: null | AudioStream)
        get "clip58/autoAdvance"(): int64
        set "clip58/autoAdvance"(value: int64)
        get "clip58/nextClip"(): int64
        set "clip58/nextClip"(value: int64)
        get "clip59/name"(): StringName
        set "clip59/name"(value: StringName)
        get "clip59/stream"(): null | AudioStream
        set "clip59/stream"(value: null | AudioStream)
        get "clip59/autoAdvance"(): int64
        set "clip59/autoAdvance"(value: int64)
        get "clip59/nextClip"(): int64
        set "clip59/nextClip"(value: int64)
        get "clip60/name"(): StringName
        set "clip60/name"(value: StringName)
        get "clip60/stream"(): null | AudioStream
        set "clip60/stream"(value: null | AudioStream)
        get "clip60/autoAdvance"(): int64
        set "clip60/autoAdvance"(value: int64)
        get "clip60/nextClip"(): int64
        set "clip60/nextClip"(value: int64)
        get "clip61/name"(): StringName
        set "clip61/name"(value: StringName)
        get "clip61/stream"(): null | AudioStream
        set "clip61/stream"(value: null | AudioStream)
        get "clip61/autoAdvance"(): int64
        set "clip61/autoAdvance"(value: int64)
        get "clip61/nextClip"(): int64
        set "clip61/nextClip"(value: int64)
        get "clip62/name"(): StringName
        set "clip62/name"(value: StringName)
        get "clip62/stream"(): null | AudioStream
        set "clip62/stream"(value: null | AudioStream)
        get "clip62/autoAdvance"(): int64
        set "clip62/autoAdvance"(value: int64)
        get "clip62/nextClip"(): int64
        set "clip62/nextClip"(value: int64)
        
        /** Index of the initial clip, which will be played first when this stream is played. */
        get initialClip(): int64
        set initialClip(value: int64)
        get _transitions(): GDictionary
        set _transitions(value: GDictionary)
    }
}
