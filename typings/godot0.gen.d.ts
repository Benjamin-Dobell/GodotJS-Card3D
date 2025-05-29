// AUTO-GENERATED
declare module "godot" {
    type byte = number
    type int32 = number
    type int64 = number /* || bigint */
    type float32 = number
    type float64 = number
    type StringName = string
    type unresolved = any
    type GAny = boolean | int64 | float64 | string | Vector2 | Vector2I | Rect2 | Rect2I | Vector3 | Vector3I | Transform2D | Vector4 | Vector4I | Plane | Quaternion | Aabb | Basis | Transform3D | Projection | Color | StringName | NodePath | Rid | GObject | Callable | Signal | GDictionary | GArray | PackedByteArray | PackedInt32Array | PackedInt64Array | PackedFloat32Array | PackedFloat64Array | PackedStringArray | PackedVector2Array | PackedVector3Array | PackedColorArray | PackedVector4Array | undefined
    type InputActionName = 
        | "ui_accept"
        | "ui_select"
        | "ui_cancel"
        | "ui_focus_next"
        | "ui_focus_prev"
        | "ui_left"
        | "ui_right"
        | "ui_up"
        | "ui_down"
        | "ui_page_up"
        | "ui_page_down"
        | "ui_home"
        | "ui_end"
        | "ui_accessibility_drag_and_drop"
        | "ui_cut"
        | "ui_copy"
        | "ui_focus_mode"
        | "ui_paste"
        | "ui_undo"
        | "ui_redo"
        | "ui_text_completion_query"
        | "ui_text_completion_accept"
        | "ui_text_completion_replace"
        | "ui_text_newline"
        | "ui_text_newline_blank"
        | "ui_text_newline_above"
        | "ui_text_indent"
        | "ui_text_dedent"
        | "ui_text_backspace"
        | "ui_text_backspace_word"
        | "ui_text_backspace_word.macos"
        | "ui_text_backspace_all_to_left"
        | "ui_text_backspace_all_to_left.macos"
        | "ui_text_delete"
        | "ui_text_delete_word"
        | "ui_text_delete_word.macos"
        | "ui_text_delete_all_to_right"
        | "ui_text_delete_all_to_right.macos"
        | "ui_text_caret_left"
        | "ui_text_caret_word_left"
        | "ui_text_caret_word_left.macos"
        | "ui_text_caret_right"
        | "ui_text_caret_word_right"
        | "ui_text_caret_word_right.macos"
        | "ui_text_caret_up"
        | "ui_text_caret_down"
        | "ui_text_caret_line_start"
        | "ui_text_caret_line_start.macos"
        | "ui_text_caret_line_end"
        | "ui_text_caret_line_end.macos"
        | "ui_text_caret_page_up"
        | "ui_text_caret_page_down"
        | "ui_text_caret_document_start"
        | "ui_text_caret_document_start.macos"
        | "ui_text_caret_document_end"
        | "ui_text_caret_document_end.macos"
        | "ui_text_caret_add_below"
        | "ui_text_caret_add_below.macos"
        | "ui_text_caret_add_above"
        | "ui_text_caret_add_above.macos"
        | "ui_text_scroll_up"
        | "ui_text_scroll_up.macos"
        | "ui_text_scroll_down"
        | "ui_text_scroll_down.macos"
        | "ui_text_select_all"
        | "ui_text_select_word_under_caret"
        | "ui_text_select_word_under_caret.macos"
        | "ui_text_add_selection_for_next_occurrence"
        | "ui_text_skip_selection_for_next_occurrence"
        | "ui_text_clear_carets_and_selection"
        | "ui_text_toggle_insert_mode"
        | "ui_menu"
        | "ui_text_submit"
        | "ui_unicode_start"
        | "ui_graph_duplicate"
        | "ui_graph_delete"
        | "ui_graph_follow_left"
        | "ui_graph_follow_left.macos"
        | "ui_graph_follow_right"
        | "ui_graph_follow_right.macos"
        | "ui_filedialog_up_one_level"
        | "ui_filedialog_refresh"
        | "ui_filedialog_show_hidden"
        | "ui_swap_input_direction"
        | "ui_colorpicker_delete_preset"
    // _singleton_class_: Performance
    namespace Performance {
        enum Monitor {
            TimeFps = 0,
            TimeProcess = 1,
            TimePhysicsProcess = 2,
            TimeNavigationProcess = 3,
            MemoryStatic = 4,
            MemoryStaticMax = 5,
            MemoryMessageBufferMax = 6,
            ObjectCount = 7,
            ObjectResourceCount = 8,
            ObjectNodeCount = 9,
            ObjectOrphanNodeCount = 10,
            RenderTotalObjectsInFrame = 11,
            RenderTotalPrimitivesInFrame = 12,
            RenderTotalDrawCallsInFrame = 13,
            RenderVideoMemUsed = 14,
            RenderTextureMemUsed = 15,
            RenderBufferMemUsed = 16,
            Physics2DActiveObjects = 17,
            Physics2DCollisionPairs = 18,
            Physics2DIslandCount = 19,
            Physics3DActiveObjects = 20,
            Physics3DCollisionPairs = 21,
            Physics3DIslandCount = 22,
            AudioOutputLatency = 23,
            NavigationActiveMaps = 24,
            NavigationRegionCount = 25,
            NavigationAgentCount = 26,
            NavigationLinkCount = 27,
            NavigationPolygonCount = 28,
            NavigationEdgeCount = 29,
            NavigationEdgeMergeCount = 30,
            NavigationEdgeConnectionCount = 31,
            NavigationEdgeFreeCount = 32,
            NavigationObstacleCount = 33,
            PipelineCompilationsCanvas = 34,
            PipelineCompilationsMesh = 35,
            PipelineCompilationsSurface = 36,
            PipelineCompilationsDraw = 37,
            PipelineCompilationsSpecialization = 38,
            Navigation2DActiveMaps = 39,
            Navigation2DRegionCount = 40,
            Navigation2DAgentCount = 41,
            Navigation2DLinkCount = 42,
            Navigation2DPolygonCount = 43,
            Navigation2DEdgeCount = 44,
            Navigation2DEdgeMergeCount = 45,
            Navigation2DEdgeConnectionCount = 46,
            Navigation2DEdgeFreeCount = 47,
            Navigation2DObstacleCount = 48,
            Navigation3DActiveMaps = 49,
            Navigation3DRegionCount = 50,
            Navigation3DAgentCount = 51,
            Navigation3DLinkCount = 52,
            Navigation3DPolygonCount = 53,
            Navigation3DEdgeCount = 54,
            Navigation3DEdgeMergeCount = 55,
            Navigation3DEdgeConnectionCount = 56,
            Navigation3DEdgeFreeCount = 57,
            Navigation3DObstacleCount = 58,
            MonitorMax = 59,
        }
    }
    /** Exposes performance-related data.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_performance.html  
     */
    class Performance extends GObject {
        /** The number of frames rendered in the last second. This metric is only updated once per second, even if queried more often.  *Higher is better.*  */
        static readonly TIME_FPS = 0
        
        /** Time it took to complete one frame, in seconds.  *Lower is better.*  */
        static readonly TIME_PROCESS = 1
        
        /** Time it took to complete one physics frame, in seconds.  *Lower is better.*  */
        static readonly TIME_PHYSICS_PROCESS = 2
        
        /** Time it took to complete one navigation step, in seconds. This includes navigation map updates as well as agent avoidance calculations.  *Lower is better.*  */
        static readonly TIME_NAVIGATION_PROCESS = 3
        
        /** Static memory currently used, in bytes. Not available in release builds.  *Lower is better.*  */
        static readonly MEMORY_STATIC = 4
        
        /** Available static memory. Not available in release builds.  *Lower is better.*  */
        static readonly MEMORY_STATIC_MAX = 5
        
        /** Largest amount of memory the message queue buffer has used, in bytes. The message queue is used for deferred functions calls and notifications.  *Lower is better.*  */
        static readonly MEMORY_MESSAGE_BUFFER_MAX = 6
        
        /** Number of objects currently instantiated (including nodes).  *Lower is better.*  */
        static readonly OBJECT_COUNT = 7
        
        /** Number of resources currently used.  *Lower is better.*  */
        static readonly OBJECT_RESOURCE_COUNT = 8
        
        /** Number of nodes currently instantiated in the scene tree. This also includes the root node.  *Lower is better.*  */
        static readonly OBJECT_NODE_COUNT = 9
        
        /** Number of orphan nodes, i.e. nodes which are not parented to a node of the scene tree.  *Lower is better.*  */
        static readonly OBJECT_ORPHAN_NODE_COUNT = 10
        
        /** The total number of objects in the last rendered frame. This metric doesn't include culled objects (either via hiding nodes, frustum culling or occlusion culling).  *Lower is better.*  */
        static readonly RENDER_TOTAL_OBJECTS_IN_FRAME = 11
        
        /** The total number of vertices or indices rendered in the last rendered frame. This metric doesn't include primitives from culled objects (either via hiding nodes, frustum culling or occlusion culling). Due to the depth prepass and shadow passes, the number of primitives is always higher than the actual number of vertices in the scene (typically double or triple the original vertex count).  *Lower is better.*  */
        static readonly RENDER_TOTAL_PRIMITIVES_IN_FRAME = 12
        
        /** The total number of draw calls performed in the last rendered frame. This metric doesn't include culled objects (either via hiding nodes, frustum culling or occlusion culling), since they do not result in draw calls.  *Lower is better.*  */
        static readonly RENDER_TOTAL_DRAW_CALLS_IN_FRAME = 13
        
        /** The amount of video memory used (texture and vertex memory combined, in bytes). Since this metric also includes miscellaneous allocations, this value is always greater than the sum of [constant RENDER_TEXTURE_MEM_USED] and [constant RENDER_BUFFER_MEM_USED].  *Lower is better.*  */
        static readonly RENDER_VIDEO_MEM_USED = 14
        
        /** The amount of texture memory used (in bytes).  *Lower is better.*  */
        static readonly RENDER_TEXTURE_MEM_USED = 15
        
        /** The amount of render buffer memory used (in bytes).  *Lower is better.*  */
        static readonly RENDER_BUFFER_MEM_USED = 16
        
        /** Number of active [RigidBody2D] nodes in the game.  *Lower is better.*  */
        static readonly PHYSICS_2D_ACTIVE_OBJECTS = 17
        
        /** Number of collision pairs in the 2D physics engine.  *Lower is better.*  */
        static readonly PHYSICS_2D_COLLISION_PAIRS = 18
        
        /** Number of islands in the 2D physics engine.  *Lower is better.*  */
        static readonly PHYSICS_2D_ISLAND_COUNT = 19
        
        /** Number of active [RigidBody3D] and [VehicleBody3D] nodes in the game.  *Lower is better.*  */
        static readonly PHYSICS_3D_ACTIVE_OBJECTS = 20
        
        /** Number of collision pairs in the 3D physics engine.  *Lower is better.*  */
        static readonly PHYSICS_3D_COLLISION_PAIRS = 21
        
        /** Number of islands in the 3D physics engine.  *Lower is better.*  */
        static readonly PHYSICS_3D_ISLAND_COUNT = 22
        
        /** Output latency of the [AudioServer]. Equivalent to calling [method AudioServer.get_output_latency], it is not recommended to call this every frame. */
        static readonly AUDIO_OUTPUT_LATENCY = 23
        
        /** Number of active navigation maps in [NavigationServer2D] and [NavigationServer3D]. This also includes the two empty default navigation maps created by World2D and World3D. */
        static readonly NAVIGATION_ACTIVE_MAPS = 24
        
        /** Number of active navigation regions in [NavigationServer2D] and [NavigationServer3D]. */
        static readonly NAVIGATION_REGION_COUNT = 25
        
        /** Number of active navigation agents processing avoidance in [NavigationServer2D] and [NavigationServer3D]. */
        static readonly NAVIGATION_AGENT_COUNT = 26
        
        /** Number of active navigation links in [NavigationServer2D] and [NavigationServer3D]. */
        static readonly NAVIGATION_LINK_COUNT = 27
        
        /** Number of navigation mesh polygons in [NavigationServer2D] and [NavigationServer3D]. */
        static readonly NAVIGATION_POLYGON_COUNT = 28
        
        /** Number of navigation mesh polygon edges in [NavigationServer2D] and [NavigationServer3D]. */
        static readonly NAVIGATION_EDGE_COUNT = 29
        
        /** Number of navigation mesh polygon edges that were merged due to edge key overlap in [NavigationServer2D] and [NavigationServer3D]. */
        static readonly NAVIGATION_EDGE_MERGE_COUNT = 30
        
        /** Number of polygon edges that are considered connected by edge proximity [NavigationServer2D] and [NavigationServer3D]. */
        static readonly NAVIGATION_EDGE_CONNECTION_COUNT = 31
        
        /** Number of navigation mesh polygon edges that could not be merged in [NavigationServer2D] and [NavigationServer3D]. The edges still may be connected by edge proximity or with links. */
        static readonly NAVIGATION_EDGE_FREE_COUNT = 32
        
        /** Number of active navigation obstacles in the [NavigationServer2D] and [NavigationServer3D]. */
        static readonly NAVIGATION_OBSTACLE_COUNT = 33
        
        /** Number of pipeline compilations that were triggered by the 2D canvas renderer. */
        static readonly PIPELINE_COMPILATIONS_CANVAS = 34
        
        /** Number of pipeline compilations that were triggered by loading meshes. These compilations will show up as longer loading times the first time a user runs the game and the pipeline is required. */
        static readonly PIPELINE_COMPILATIONS_MESH = 35
        
        /** Number of pipeline compilations that were triggered by building the surface cache before rendering the scene. These compilations will show up as a stutter when loading an scene the first time a user runs the game and the pipeline is required. */
        static readonly PIPELINE_COMPILATIONS_SURFACE = 36
        
        /** Number of pipeline compilations that were triggered while drawing the scene. These compilations will show up as stutters during gameplay the first time a user runs the game and the pipeline is required. */
        static readonly PIPELINE_COMPILATIONS_DRAW = 37
        
        /** Number of pipeline compilations that were triggered to optimize the current scene. These compilations are done in the background and should not cause any stutters whatsoever. */
        static readonly PIPELINE_COMPILATIONS_SPECIALIZATION = 38
        
        /** Number of active navigation maps in the [NavigationServer2D]. This also includes the two empty default navigation maps created by World2D. */
        static readonly NAVIGATION_2D_ACTIVE_MAPS = 39
        
        /** Number of active navigation regions in the [NavigationServer2D]. */
        static readonly NAVIGATION_2D_REGION_COUNT = 40
        
        /** Number of active navigation agents processing avoidance in the [NavigationServer2D]. */
        static readonly NAVIGATION_2D_AGENT_COUNT = 41
        
        /** Number of active navigation links in the [NavigationServer2D]. */
        static readonly NAVIGATION_2D_LINK_COUNT = 42
        
        /** Number of navigation mesh polygons in the [NavigationServer2D]. */
        static readonly NAVIGATION_2D_POLYGON_COUNT = 43
        
        /** Number of navigation mesh polygon edges in the [NavigationServer2D]. */
        static readonly NAVIGATION_2D_EDGE_COUNT = 44
        
        /** Number of navigation mesh polygon edges that were merged due to edge key overlap in the [NavigationServer2D]. */
        static readonly NAVIGATION_2D_EDGE_MERGE_COUNT = 45
        
        /** Number of polygon edges that are considered connected by edge proximity [NavigationServer2D]. */
        static readonly NAVIGATION_2D_EDGE_CONNECTION_COUNT = 46
        
        /** Number of navigation mesh polygon edges that could not be merged in the [NavigationServer2D]. The edges still may be connected by edge proximity or with links. */
        static readonly NAVIGATION_2D_EDGE_FREE_COUNT = 47
        
        /** Number of active navigation obstacles in the [NavigationServer2D]. */
        static readonly NAVIGATION_2D_OBSTACLE_COUNT = 48
        
        /** Number of active navigation maps in the [NavigationServer3D]. This also includes the two empty default navigation maps created by World3D. */
        static readonly NAVIGATION_3D_ACTIVE_MAPS = 49
        
        /** Number of active navigation regions in the [NavigationServer3D]. */
        static readonly NAVIGATION_3D_REGION_COUNT = 50
        
        /** Number of active navigation agents processing avoidance in the [NavigationServer3D]. */
        static readonly NAVIGATION_3D_AGENT_COUNT = 51
        
        /** Number of active navigation links in the [NavigationServer3D]. */
        static readonly NAVIGATION_3D_LINK_COUNT = 52
        
        /** Number of navigation mesh polygons in the [NavigationServer3D]. */
        static readonly NAVIGATION_3D_POLYGON_COUNT = 53
        
        /** Number of navigation mesh polygon edges in the [NavigationServer3D]. */
        static readonly NAVIGATION_3D_EDGE_COUNT = 54
        
        /** Number of navigation mesh polygon edges that were merged due to edge key overlap in the [NavigationServer3D]. */
        static readonly NAVIGATION_3D_EDGE_MERGE_COUNT = 55
        
        /** Number of polygon edges that are considered connected by edge proximity [NavigationServer3D]. */
        static readonly NAVIGATION_3D_EDGE_CONNECTION_COUNT = 56
        
        /** Number of navigation mesh polygon edges that could not be merged in the [NavigationServer3D]. The edges still may be connected by edge proximity or with links. */
        static readonly NAVIGATION_3D_EDGE_FREE_COUNT = 57
        
        /** Number of active navigation obstacles in the [NavigationServer3D]. */
        static readonly NAVIGATION_3D_OBSTACLE_COUNT = 58
        
        /** Represents the size of the [enum Monitor] enum. */
        static readonly MONITOR_MAX = 59
        
        /** Returns the value of one of the available built-in monitors. You should provide one of the [enum Monitor] constants as the argument, like this:  
         *    
         *  See [method get_custom_monitor] to query custom performance monitors' values.  
         */
        static getMonitor(monitor: Performance.Monitor): float64
        
        /** Adds a custom monitor with the name [param id]. You can specify the category of the monitor using slash delimiters in [param id] (for example: `"Game/NumberOfNPCs"`). If there is more than one slash delimiter, then the default category is used. The default category is `"Custom"`. Prints an error if given [param id] is already present.  
         *    
         *  The debugger calls the callable to get the value of custom monitor. The callable must return a zero or positive integer or floating-point number.  
         *  Callables are called with arguments supplied in argument array.  
         */
        static addCustomMonitor(id: StringName, callable: Callable, arguments_?: GArray /* = [] */): void
        
        /** Removes the custom monitor with given [param id]. Prints an error if the given [param id] is already absent. */
        static removeCustomMonitor(id: StringName): void
        
        /** Returns `true` if custom monitor with the given [param id] is present, `false` otherwise. */
        static hasCustomMonitor(id: StringName): boolean
        
        /** Returns the value of custom monitor with given [param id]. The callable is called to get the value of custom monitor. See also [method has_custom_monitor]. Prints an error if the given [param id] is absent. */
        static getCustomMonitor(id: StringName): any
        
        /** Returns the last tick in which custom monitor was added/removed (in microseconds since the engine started). This is set to [method Time.get_ticks_usec] when the monitor is updated. */
        static getMonitorModificationTime(): int64
        
        /** Returns the names of active custom monitors in an [Array]. */
        static getCustomMonitorNames(): GArray
    }
    // _singleton_class_: Engine
    /** Provides access to engine properties.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_engine.html  
     */
    class Engine extends GObject {
        /** Returns the fraction through the current physics tick we are at the time of rendering the frame. This can be used to implement fixed timestep interpolation. */
        static getPhysicsInterpolationFraction(): float64
        
        /** Returns the total number of frames drawn since the engine started.  
         *      
         *  **Note:** On headless platforms, or if rendering is disabled with `--disable-render-loop` via command line, this method always returns `0`. See also [method get_process_frames].  
         */
        static getFramesDrawn(): int64
        
        /** Returns the average frames rendered every second (FPS), also known as the framerate. */
        static getFramesPerSecond(): float64
        
        /** Returns the total number of frames passed since the engine started. This number is increased every **physics frame**. See also [method get_process_frames].  
         *  This method can be used to run expensive logic less often without relying on a [Timer]:  
         *    
         */
        static getPhysicsFrames(): int64
        
        /** Returns the total number of frames passed since the engine started. This number is increased every **process frame**, regardless of whether the render loop is enabled. See also [method get_frames_drawn] and [method get_physics_frames].  
         *  This method can be used to run expensive logic less often without relying on a [Timer]:  
         *    
         */
        static getProcessFrames(): int64
        
        /** Returns the instance of the [MainLoop]. This is usually the main [SceneTree] and is the same as [method Node.get_tree].  
         *      
         *  **Note:** The type instantiated as the main loop can changed with [member ProjectSettings.application/run/main_loop_type].  
         */
        static getMainLoop(): null | MainLoop
        
        /** Returns the current engine version information as a [Dictionary] containing the following entries:  
         *  - `major` - Major version number as an int;  
         *  - `minor` - Minor version number as an int;  
         *  - `patch` - Patch version number as an int;  
         *  - `hex` - Full version encoded as a hexadecimal int with one byte (2 hex digits) per number (see example below);  
         *  - `status` - Status (such as "beta", "rc1", "rc2", "stable", etc.) as a String;  
         *  - `build` - Build name (e.g. "custom_build") as a String;  
         *  - `hash` - Full Git commit hash as a String;  
         *  - `timestamp` - Holds the Git commit date UNIX timestamp in seconds as an int, or `0` if unavailable;  
         *  - `string` - `major`, `minor`, `patch`, `status`, and `build` in a single String.  
         *  The `hex` value is encoded as follows, from left to right: one byte for the major, one byte for the minor, one byte for the patch version. For example, "3.1.12" would be `0x03010C`.  
         *      
         *  **Note:** The `hex` value is still an [int] internally, and printing it will give you its decimal representation, which is not particularly meaningful. Use hexadecimal literals for quick version comparisons from code:  
         *    
         */
        static getVersionInfo(): GDictionary
        
        /** Returns the engine author information as a [Dictionary], where each entry is an [Array] of strings with the names of notable contributors to the Godot Engine: `lead_developers`, `founders`, `project_managers`, and `developers`. */
        static getAuthorInfo(): GDictionary
        
        /** Returns an [Array] of dictionaries with copyright information for every component of Godot's source code.  
         *  Every [Dictionary] contains a `name` identifier, and a `parts` array of dictionaries. It describes the component in detail with the following entries:  
         *  - `files` - [Array] of file paths from the source code affected by this component;  
         *  - `copyright` - [Array] of owners of this component;  
         *  - `license` - The license applied to this component (such as "[url=https://en.wikipedia.org/wiki/MIT_License#Ambiguity_and_variants]Expat[/url]" or "[url=https://creativecommons.org/licenses/by/4.0/]CC-BY-4.0[/url]").  
         */
        static getCopyrightInfo(): GArray
        
        /** Returns a [Dictionary] of categorized donor names. Each entry is an [Array] of strings:  
         *  {`platinum_sponsors`, `gold_sponsors`, `silver_sponsors`, `bronze_sponsors`, `mini_sponsors`, `gold_donors`, `silver_donors`, `bronze_donors`}  
         */
        static getDonorInfo(): GDictionary
        
        /** Returns a [Dictionary] of licenses used by Godot and included third party components. Each entry is a license name (such as "[url=https://en.wikipedia.org/wiki/MIT_License#Ambiguity_and_variants]Expat[/url]") and its associated text. */
        static getLicenseInfo(): GDictionary
        
        /** Returns the full Godot license text. */
        static getLicenseText(): string
        
        /** Returns the name of the CPU architecture the Godot binary was built for. Possible return values include `"x86_64"`, `"x86_32"`, `"arm64"`, `"arm32"`, `"rv64"`, `"riscv"`, `"ppc64"`, `"ppc"`, `"wasm64"`, and `"wasm32"`.  
         *  To detect whether the current build is 64-bit, or the type of architecture, don't use the architecture name. Instead, use [method OS.has_feature] to check for the `"64"` feature tag, or tags such as `"x86"` or `"arm"`. See the [url=https://docs.godotengine.org/en/latest/tutorials/export/feature_tags.html]Feature Tags[/url] documentation for more details.  
         *      
         *  **Note:** This method does  *not*  return the name of the system's CPU architecture (like [method OS.get_processor_name]). For example, when running an `x86_32` Godot binary on an `x86_64` system, the returned value will still be `"x86_32"`.  
         */
        static getArchitectureName(): string
        
        /** Returns `true` if the engine is inside the fixed physics process step of the main loop.  
         *    
         */
        static isInPhysicsFrame(): boolean
        
        /** Returns `true` if a singleton with the given [param name] exists in the global scope. See also [method get_singleton].  
         *    
         *      
         *  **Note:** Global singletons are not the same as autoloaded nodes, which are configurable in the project settings.  
         */
        static hasSingleton(name: StringName): boolean
        
        /** Returns the global singleton with the given [param name], or `null` if it does not exist. Often used for plugins. See also [method has_singleton] and [method get_singleton_list].  
         *      
         *  **Note:** Global singletons are not the same as autoloaded nodes, which are configurable in the project settings.  
         */
        static getSingleton(name: StringName): null | GObject
        
        /** Registers the given [Object] [param instance] as a singleton, available globally under [param name]. Useful for plugins. */
        static registerSingleton(name: StringName, instance: GObject): void
        
        /** Removes the singleton registered under [param name]. The singleton object is  *not*  freed. Only works with user-defined singletons registered with [method register_singleton]. */
        static unregisterSingleton(name: StringName): void
        
        /** Returns a list of names of all available global singletons. See also [method get_singleton]. */
        static getSingletonList(): PackedStringArray
        
        /** Registers a [ScriptLanguage] instance to be available with `ScriptServer`.  
         *  Returns:  
         *  - [constant OK] on success;  
         *  - [constant ERR_UNAVAILABLE] if `ScriptServer` has reached the limit and cannot register any new language;  
         *  - [constant ERR_ALREADY_EXISTS] if `ScriptServer` already contains a language with similar extension/name/type.  
         */
        static registerScriptLanguage(language: ScriptLanguage): GError
        
        /** Unregisters the [ScriptLanguage] instance from `ScriptServer`.  
         *  Returns:  
         *  - [constant OK] on success;  
         *  - [constant ERR_DOES_NOT_EXIST] if the language is not registered in `ScriptServer`.  
         */
        static unregisterScriptLanguage(language: ScriptLanguage): GError
        
        /** Returns the number of available script languages. Use with [method get_script_language]. */
        static getScriptLanguageCount(): int64
        
        /** Returns an instance of a [ScriptLanguage] with the given [param index]. */
        static getScriptLanguage(index: int64): null | ScriptLanguage
        
        /** Captures and returns backtraces from all registered script languages.  
         *  By default, the returned [ScriptBacktrace] will only contain stack frames in editor builds and debug builds. To enable them for release builds as well, you need to enable [member ProjectSettings.debug/settings/gdscript/always_track_call_stacks].  
         *  If [param include_variables] is `true`, the backtrace will also include the names and values of any global variables (e.g. autoload singletons) at the point of the capture, as well as local variables and class member variables at each stack frame. This will however will only be respected when running the game with a debugger attached, like when running the game from the editor. To enable it for export builds as well, you need to enable [member ProjectSettings.debug/settings/gdscript/always_track_local_variables].  
         *  **Warning:** When [param include_variables] is `true`, any captured variables can potentially (e.g. with GDScript backtraces) be their actual values, including any object references. This means that storing such a [ScriptBacktrace] will prevent those objects from being deallocated, so it's generally recommended not to do so.  
         */
        static captureScriptBacktraces(includeVariables?: boolean /* = false */): GArray
        
        /** Returns `true` if the script is currently running inside the editor, otherwise returns `false`. This is useful for `@tool` scripts to conditionally draw editor helpers, or prevent accidentally running "game" code that would affect the scene state while in the editor:  
         *    
         *  See [url=https://docs.godotengine.org/en/latest/tutorials/plugins/running_code_in_the_editor.html]Running code in the editor[/url] in the documentation for more information.  
         *      
         *  **Note:** To detect whether the script is running on an editor  *build*  (such as when pressing [kbd]F5[/kbd]), use [method OS.has_feature] with the `"editor"` argument instead. `OS.has_feature("editor")` evaluate to `true` both when the script is running in the editor and when running the project from the editor, but returns `false` when run from an exported project.  
         */
        static isEditorHint(): boolean
        
        /** Returns `true` if the engine is running embedded in the editor. This is useful to prevent attempting to update window mode or window flags that are not supported when running the project embedded in the editor. */
        static isEmbeddedInEditor(): boolean
        
        /** Returns the path to the [MovieWriter]'s output file, or an empty string if the engine wasn't started in Movie Maker mode. The default path can be changed in [member ProjectSettings.editor/movie_writer/movie_file]. */
        static getWriteMoviePath(): string
        
        /** If `false`, stops printing error and warning messages to the console and editor Output log. This can be used to hide error and warning messages during unit test suite runs. This property is equivalent to the [member ProjectSettings.application/run/disable_stderr] project setting.  
         *      
         *  **Note:** This property does not impact the editor's Errors tab when running a project from the editor.  
         *  **Warning:** If set to `false` anywhere in the project, important error messages may be hidden even if they are emitted from other scripts. In a `@tool` script, this will also impact the editor itself. Do  *not*  report bugs before ensuring error messages are enabled (as they are by default).  
         */
        get printErrorMessages(): boolean
        set printErrorMessages(value: boolean)
        
        /** If `false`, stops printing messages (for example using [method @GlobalScope.print]) to the console, log files, and editor Output log. This property is equivalent to the [member ProjectSettings.application/run/disable_stdout] project setting.  
         *      
         *  **Note:** This does not stop printing errors or warnings produced by scripts to the console or log files, for more details see [member print_error_messages].  
         */
        get printToStdOut(): boolean
        set printToStdOut(value: boolean)
        
        /** The number of fixed iterations per second. This controls how often physics simulation and [method Node._physics_process] methods are run. This value should generally always be set to `60` or above, as Godot doesn't interpolate the physics step. As a result, values lower than `60` will look stuttery. This value can be increased to make input more reactive or work around collision tunneling issues, but keep in mind doing so will increase CPU usage. See also [member max_fps] and [member ProjectSettings.physics/common/physics_ticks_per_second].  
         *      
         *  **Note:** Only [member max_physics_steps_per_frame] physics ticks may be simulated per rendered frame at most. If more physics ticks have to be simulated per rendered frame to keep up with rendering, the project will appear to slow down (even if `delta` is used consistently in physics calculations). Therefore, it is recommended to also increase [member max_physics_steps_per_frame] if increasing [member physics_ticks_per_second] significantly above its default value.  
         */
        get physicsTicksPerSecond(): int64
        set physicsTicksPerSecond(value: int64)
        
        /** The maximum number of physics steps that can be simulated each rendered frame.  
         *      
         *  **Note:** The default value is tuned to prevent expensive physics simulations from triggering even more expensive simulations indefinitely. However, the game will appear to slow down if the rendering FPS is less than `1 / max_physics_steps_per_frame` of [member physics_ticks_per_second]. This occurs even if `delta` is consistently used in physics calculations. To avoid this, increase [member max_physics_steps_per_frame] if you have increased [member physics_ticks_per_second] significantly above its default value.  
         */
        get maxPhysicsStepsPerFrame(): int64
        set maxPhysicsStepsPerFrame(value: int64)
        
        /** The maximum number of frames that can be rendered every second (FPS). A value of `0` means the framerate is uncapped.  
         *  Limiting the FPS can be useful to reduce the host machine's power consumption, which reduces heat, noise emissions, and improves battery life.  
         *  If [member ProjectSettings.display/window/vsync/vsync_mode] is **Enabled** or **Adaptive**, the setting takes precedence and the max FPS number cannot exceed the monitor's refresh rate.  
         *  If [member ProjectSettings.display/window/vsync/vsync_mode] is **Enabled**, on monitors with variable refresh rate enabled (G-Sync/FreeSync), using an FPS limit a few frames lower than the monitor's refresh rate will [url=https://blurbusters.com/howto-low-lag-vsync-on/]reduce input lag while avoiding tearing[/url].  
         *  See also [member physics_ticks_per_second] and [member ProjectSettings.application/run/max_fps].  
         *      
         *  **Note:** The actual number of frames per second may still be below this value if the CPU or GPU cannot keep up with the project's logic and rendering.  
         *      
         *  **Note:** If [member ProjectSettings.display/window/vsync/vsync_mode] is **Disabled**, limiting the FPS to a high value that can be consistently reached on the system can reduce input lag compared to an uncapped framerate. Since this works by ensuring the GPU load is lower than 100%, this latency reduction is only effective in GPU-bottlenecked scenarios, not CPU-bottlenecked scenarios.  
         */
        get maxFps(): int64
        set maxFps(value: int64)
        
        /** The speed multiplier at which the in-game clock updates, compared to real time. For example, if set to `2.0` the game runs twice as fast, and if set to `0.5` the game runs half as fast.  
         *  This value affects [Timer], [SceneTreeTimer], and all other simulations that make use of `delta` time (such as [method Node._process] and [method Node._physics_process]).  
         *      
         *  **Note:** It's recommended to keep this property above `0.0`, as the game may behave unexpectedly otherwise.  
         *      
         *  **Note:** This does not affect audio playback speed. Use [member AudioServer.playback_speed_scale] to adjust audio playback speed independently of [member Engine.time_scale].  
         *      
         *  **Note:** This does not automatically adjust [member physics_ticks_per_second]. With values above `1.0` physics simulation may become less precise, as each physics tick will stretch over a larger period of engine time. If you're modifying [member Engine.time_scale] to speed up simulation by a large factor, consider also increasing [member physics_ticks_per_second] to make the simulation more reliable.  
         */
        get timeScale(): float64
        set timeScale(value: float64)
        
        /** How much physics ticks are synchronized with real time. If `0` or less, the ticks are fully synchronized. Higher values cause the in-game clock to deviate more from the real clock, but they smooth out framerate jitters.  
         *      
         *  **Note:** The default value of `0.5` should be good enough for most cases; values above `2` could cause the game to react to dropped frames with a noticeable delay and are not recommended.  
         *      
         *  **Note:** When using a custom physics interpolation solution, or within a network game, it's recommended to disable the physics jitter fix by setting this property to `0`.  
         */
        get physicsJitterFix(): float64
        set physicsJitterFix(value: float64)
    }
    // _singleton_class_: ProjectSettings
    /** Stores globally-accessible variables.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_projectsettings.html  
     */
    class ProjectSettings extends GObject {
        /** Returns `true` if a configuration value is present. */
        static hasSetting(name: string): boolean
        
        /** Sets the value of a setting.  
         *    
         *  This can also be used to erase custom project settings. To do this change the setting value to `null`.  
         */
        static setSetting(name: string, value: any): void
        
        /** Returns the value of the setting identified by [param name]. If the setting doesn't exist and [param default_value] is specified, the value of [param default_value] is returned. Otherwise, `null` is returned.  
         *    
         *      
         *  **Note:** This method doesn't take potential feature overrides into account automatically. Use [method get_setting_with_override] to handle seamlessly.  
         */
        static getSetting(name: string, defaultValue?: any /* = <any> {} */): any
        
        /** Similar to [method get_setting], but applies feature tag overrides if any exists and is valid.  
         *  **Example:** If the setting override `"application/config/name.windows"` exists, and the following code is executed on a  *Windows*  operating system, the overridden setting is printed instead:  
         *    
         */
        static getSettingWithOverride(name: StringName): any
        
        /** Returns an [Array] of registered global classes. Each global class is represented as a [Dictionary] that contains the following entries:  
         *  - `base` is a name of the base class;  
         *  - `class` is a name of the registered global class;  
         *  - `icon` is a path to a custom icon of the global class, if it has any;  
         *  - `language` is a name of a programming language in which the global class is written;  
         *  - `path` is a path to a file containing the global class.  
         *      
         *  **Note:** Both the script and the icon paths are local to the project filesystem, i.e. they start with `res://`.  
         */
        static getGlobalClassList(): GArray
        
        /** Similar to [method get_setting_with_override], but applies feature tag overrides instead of current OS features. */
        static getSettingWithOverrideAndCustomFeatures(name: StringName, features: PackedStringArray | string[]): any
        
        /** Sets the order of a configuration value (influences when saved to the config file). */
        static setOrder(name: string, position: int64): void
        
        /** Returns the order of a configuration value (influences when saved to the config file). */
        static getOrder(name: string): int64
        
        /** Sets the specified setting's initial value. This is the value the setting reverts to. */
        static setInitialValue(name: string, value: any): void
        
        /** Defines if the specified setting is considered basic or advanced. Basic settings will always be shown in the project settings. Advanced settings will only be shown if the user enables the "Advanced Settings" option. */
        static setAsBasic(name: string, basic: boolean): void
        
        /** Defines if the specified setting is considered internal. An internal setting won't show up in the Project Settings dialog. This is mostly useful for addons that need to store their own internal settings without exposing them directly to the user. */
        static setAsInternal(name: string, internal: boolean): void
        
        /** Adds a custom property info to a property. The dictionary must contain:  
         *  - `"name"`: [String] (the property's name)  
         *  - `"type"`: [int] (see [enum Variant.Type])  
         *  - optionally `"hint"`: [int] (see [enum PropertyHint]) and `"hint_string"`: [String]  
         *    
         *      
         *  **Note:** Setting `"usage"` for the property is not supported. Use [method set_as_basic], [method set_restart_if_changed], and [method set_as_internal] to modify usage flags.  
         */
        static addPropertyInfo(hint: GDictionary): void
        
        /** Sets whether a setting requires restarting the editor to properly take effect.  
         *      
         *  **Note:** This is just a hint to display to the user that the editor must be restarted for changes to take effect. Enabling [method set_restart_if_changed] does  *not*  delay the setting being set when changed.  
         */
        static setRestartIfChanged(name: string, restart: boolean): void
        
        /** Clears the whole configuration (not recommended, may break things). */
        static clear(name: string): void
        
        /** Returns the localized path (starting with `res://`) corresponding to the absolute, native OS [param path]. See also [method globalize_path]. */
        static localizePath(path: string): string
        
        /** Returns the absolute, native OS path corresponding to the localized [param path] (starting with `res://` or `user://`). The returned path will vary depending on the operating system and user preferences. See [url=https://docs.godotengine.org/en/latest/tutorials/io/data_paths.html]File paths in Godot projects[/url] to see what those paths convert to. See also [method localize_path].  
         *      
         *  **Note:** [method globalize_path] with `res://` will not work in an exported project. Instead, prepend the executable's base directory to the path when running from an exported project:  
         *    
         */
        static globalizePath(path: string): string
        
        /** Saves the configuration to the `project.godot` file.  
         *      
         *  **Note:** This method is intended to be used by editor plugins, as modified [ProjectSettings] can't be loaded back in the running app. If you want to change project settings in exported projects, use [method save_custom] to save `override.cfg` file.  
         */
        static save(): GError
        
        /** Loads the contents of the .pck or .zip file specified by [param pack] into the resource filesystem (`res://`). Returns `true` on success.  
         *      
         *  **Note:** If a file from [param pack] shares the same path as a file already in the resource filesystem, any attempts to load that file will use the file from [param pack] unless [param replace_files] is set to `false`.  
         *      
         *  **Note:** The optional [param offset] parameter can be used to specify the offset in bytes to the start of the resource pack. This is only supported for .pck files.  
         *      
         *  **Note:** [DirAccess] will not show changes made to the contents of `res://` after calling this function.  
         */
        static loadResourcePack(pack: string, replaceFiles?: boolean /* = true */, offset?: int64 /* = 0 */): boolean
        
        /** Saves the configuration to a custom file. The file extension must be `.godot` (to save in text-based [ConfigFile] format) or `.binary` (to save in binary format). You can also save `override.cfg` file, which is also text, but can be used in exported projects unlike other formats. */
        static saveCustom(file: string): GError
        
        /** Emitted when any setting is changed, up to once per process frame. */
        static readonly settingsChanged: Signal<() => void>
    }
    // _singleton_class_: OS
    namespace OS {
        enum RenderingDriver {
            RenderingDriverVulkan = 0,
            RenderingDriverOpengl3 = 1,
            RenderingDriverD3D12 = 2,
            RenderingDriverMetal = 3,
        }
        enum SystemDir {
            SystemDirDesktop = 0,
            SystemDirDcim = 1,
            SystemDirDocuments = 2,
            SystemDirDownloads = 3,
            SystemDirMovies = 4,
            SystemDirMusic = 5,
            SystemDirPictures = 6,
            SystemDirRingtones = 7,
        }
        enum StdHandleType {
            StdHandleInvalid = 0,
            StdHandleConsole = 1,
            StdHandleFile = 2,
            StdHandlePipe = 3,
            StdHandleUnknown = 4,
        }
    }
    /** Provides access to common operating system functionalities.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_os.html  
     */
    class OS extends GObject {
        /** The Vulkan rendering driver. It requires Vulkan 1.0 support and automatically uses features from Vulkan 1.1 and 1.2 if available. */
        static readonly RENDERING_DRIVER_VULKAN = 0
        
        /** The OpenGL 3 rendering driver. It uses OpenGL 3.3 Core Profile on desktop platforms, OpenGL ES 3.0 on mobile devices, and WebGL 2.0 on Web. */
        static readonly RENDERING_DRIVER_OPENGL3 = 1
        
        /** The Direct3D 12 rendering driver. */
        static readonly RENDERING_DRIVER_D3D12 = 2
        
        /** The Metal rendering driver. */
        static readonly RENDERING_DRIVER_METAL = 3
        
        /** Refers to the Desktop directory path. */
        static readonly SYSTEM_DIR_DESKTOP = 0
        
        /** Refers to the DCIM (Digital Camera Images) directory path. */
        static readonly SYSTEM_DIR_DCIM = 1
        
        /** Refers to the Documents directory path. */
        static readonly SYSTEM_DIR_DOCUMENTS = 2
        
        /** Refers to the Downloads directory path. */
        static readonly SYSTEM_DIR_DOWNLOADS = 3
        
        /** Refers to the Movies (or Videos) directory path. */
        static readonly SYSTEM_DIR_MOVIES = 4
        
        /** Refers to the Music directory path. */
        static readonly SYSTEM_DIR_MUSIC = 5
        
        /** Refers to the Pictures directory path. */
        static readonly SYSTEM_DIR_PICTURES = 6
        
        /** Refers to the Ringtones directory path. */
        static readonly SYSTEM_DIR_RINGTONES = 7
        
        /** Standard I/O device is invalid. No data can be received from or sent to these standard I/O devices. */
        static readonly STD_HANDLE_INVALID = 0
        
        /** Standard I/O device is a console. This typically occurs when Godot is run from a terminal with no redirection. This is also used for all standard I/O devices when running Godot from the editor, at least on desktop platforms. */
        static readonly STD_HANDLE_CONSOLE = 1
        
        /** Standard I/O device is a regular file. This typically occurs with redirection from a terminal, e.g. `godot > stdout.txt`, `godot < stdin.txt` or `godot > stdout_stderr.txt 2>&1`. */
        static readonly STD_HANDLE_FILE = 2
        
        /** Standard I/O device is a FIFO/pipe. This typically occurs with pipe usage from a terminal, e.g. `echo "Hello" | godot`. */
        static readonly STD_HANDLE_PIPE = 3
        
        /** Standard I/O device type is unknown. */
        static readonly STD_HANDLE_UNKNOWN = 4
        
        /** Generates a [PackedByteArray] of cryptographically secure random bytes with given [param size].  
         *      
         *  **Note:** Generating large quantities of bytes using this method can result in locking and entropy of lower quality on most platforms. Using [method Crypto.generate_random_bytes] is preferred in most cases.  
         */
        static getEntropy(size: int64): PackedByteArray
        
        /** Returns the list of certification authorities trusted by the operating system as a string of concatenated certificates in PEM format. */
        static getSystemCaCertificates(): string
        
        /** Returns an array of connected MIDI device names, if they exist. Returns an empty array if the system MIDI driver has not previously been initialized with [method open_midi_inputs]. See also [method close_midi_inputs].  
         *      
         *  **Note:** This method is implemented on Linux, macOS, Windows, and Web.  
         *      
         *  **Note:** On the Web platform, Web MIDI needs to be supported by the browser. [url=https://caniuse.com/midi]For the time being[/url], it is currently supported by all major browsers, except Safari.  
         *      
         *  **Note:** On the Web platform, using MIDI input requires a browser permission to be granted first. This permission request is performed when calling [method open_midi_inputs]. The browser will refrain from processing MIDI input until the user accepts the permission request.  
         */
        static getConnectedMidiInputs(): PackedStringArray
        
        /** Initializes the singleton for the system MIDI driver, allowing Godot to receive [InputEventMIDI]. See also [method get_connected_midi_inputs] and [method close_midi_inputs].  
         *      
         *  **Note:** This method is implemented on Linux, macOS, Windows, and Web.  
         *      
         *  **Note:** On the Web platform, Web MIDI needs to be supported by the browser. [url=https://caniuse.com/midi]For the time being[/url], it is currently supported by all major browsers, except Safari.  
         *      
         *  **Note:** On the Web platform, using MIDI input requires a browser permission to be granted first. This permission request is performed when calling [method open_midi_inputs]. The browser will refrain from processing MIDI input until the user accepts the permission request.  
         */
        static openMidiInputs(): void
        
        /** Shuts down the system MIDI driver. Godot will no longer receive [InputEventMIDI]. See also [method open_midi_inputs] and [method get_connected_midi_inputs].  
         *      
         *  **Note:** This method is implemented on Linux, macOS, Windows, and Web.  
         */
        static closeMidiInputs(): void
        
        /** Displays a modal dialog box using the host platform's implementation. The engine execution is blocked until the dialog is closed. */
        static alert(text: string, title?: string /* = 'Alert!' */): void
        
        /** Crashes the engine (or the editor if called within a `@tool` script). See also [method kill].  
         *      
         *  **Note:** This method should  *only*  be used for testing the system's crash handler, not for any other purpose. For general error reporting, use (in order of preference) [method @GDScript.assert], [method @GlobalScope.push_error], or [method alert].  
         */
        static crash(message: string): void
        
        /** Returns the number of  *logical*  CPU cores available on the host machine. On CPUs with HyperThreading enabled, this number will be greater than the number of  *physical*  CPU cores. */
        static getProcessorCount(): int64
        
        /** Returns the full name of the CPU model on the host machine (e.g. `"Intel(R) Core(TM) i7-6700K CPU @ 4.00GHz"`).  
         *      
         *  **Note:** This method is only implemented on Windows, macOS, Linux and iOS. On Android and Web, [method get_processor_name] returns an empty string.  
         */
        static getProcessorName(): string
        
        /** Returns the list of font family names available.  
         *      
         *  **Note:** This method is implemented on Android, iOS, Linux, macOS and Windows.  
         */
        static getSystemFonts(): PackedStringArray
        
        /** Returns the path to the system font file with [param font_name] and style. Returns an empty string if no matching fonts found.  
         *  The following aliases can be used to request default fonts: "sans-serif", "serif", "monospace", "cursive", and "fantasy".  
         *      
         *  **Note:** Returned font might have different style if the requested style is not available.  
         *      
         *  **Note:** This method is implemented on Android, iOS, Linux, macOS and Windows.  
         */
        static getSystemFontPath(fontName: string, weight?: int64 /* = 400 */, stretch?: int64 /* = 100 */, italic?: boolean /* = false */): string
        
        /** Returns an array of the system substitute font file paths, which are similar to the font with [param font_name] and style for the specified text, locale, and script. Returns an empty array if no matching fonts found.  
         *  The following aliases can be used to request default fonts: "sans-serif", "serif", "monospace", "cursive", and "fantasy".  
         *      
         *  **Note:** Depending on OS, it's not guaranteed that any of the returned fonts will be suitable for rendering specified text. Fonts should be loaded and checked in the order they are returned, and the first suitable one used.  
         *      
         *  **Note:** Returned fonts might have different style if the requested style is not available or belong to a different font family.  
         *      
         *  **Note:** This method is implemented on Android, iOS, Linux, macOS and Windows.  
         */
        static getSystemFontPathForText(fontName: string, text: string, locale?: string /* = '' */, script?: string /* = '' */, weight?: int64 /* = 400 */, stretch?: int64 /* = 100 */, italic?: boolean /* = false */): PackedStringArray
        
        /** Returns the file path to the current engine executable.  
         *      
         *  **Note:** On macOS, if you want to launch another instance of Godot, always use [method create_instance] instead of relying on the executable path.  
         */
        static getExecutablePath(): string
        
        /** Reads a user input as a UTF-8 encoded string from the standard input. This operation can be  *blocking* , which causes the window to freeze if [method read_string_from_stdin] is called on the main thread.  
         *  - If standard input is console, this method will block until the program receives a line break in standard input (usually by the user pressing [kbd]Enter[/kbd]).  
         *  - If standard input is pipe, this method will block until a specific amount of data is read or pipe is closed.  
         *  - If standard input is a file, this method will read a specific amount of data (or less if end-of-file is reached) and return immediately.  
         *      
         *  **Note:** This method automatically replaces `\r\n` line breaks with `\n` and removes them from the end of the string. Use [method read_buffer_from_stdin] to read the unprocessed data.  
         *      
         *  **Note:** This method is implemented on Linux, macOS, and Windows.  
         *      
         *  **Note:** On exported Windows builds, run the console wrapper executable to access the terminal. If standard input is console, calling this method without console wrapped will freeze permanently. If standard input is pipe or file, it can be used without console wrapper. If you need a single executable with full console support, use a custom build compiled with the `windows_subsystem=console` flag.  
         */
        static readStringFromStdIn(bufferSize?: int64 /* = 1024 */): string
        
        /** Reads a user input as raw data from the standard input. This operation can be  *blocking* , which causes the window to freeze if [method read_buffer_from_stdin] is called on the main thread.  
         *  - If standard input is console, this method will block until the program receives a line break in standard input (usually by the user pressing [kbd]Enter[/kbd]).  
         *  - If standard input is pipe, this method will block until a specific amount of data is read or pipe is closed.  
         *  - If standard input is a file, this method will read a specific amount of data (or less if end-of-file is reached) and return immediately.  
         *      
         *  **Note:** This method is implemented on Linux, macOS, and Windows.  
         *      
         *  **Note:** On exported Windows builds, run the console wrapper executable to access the terminal. If standard input is console, calling this method without console wrapped will freeze permanently. If standard input is pipe or file, it can be used without console wrapper. If you need a single executable with full console support, use a custom build compiled with the `windows_subsystem=console` flag.  
         */
        static readBufferFromStdIn(bufferSize?: int64 /* = 1024 */): PackedByteArray
        
        /** Returns the type of the standard input device.  
         *      
         *  **Note:** This method is implemented on Linux, macOS, and Windows.  
         *      
         *  **Note:** On exported Windows builds, run the console wrapper executable to access the standard input. If you need a single executable with full console support, use a custom build compiled with the `windows_subsystem=console` flag.  
         */
        static getStdInType(): OS.StdHandleType
        
        /** Returns the type of the standard output device.  
         *      
         *  **Note:** This method is implemented on Linux, macOS, and Windows.  
         */
        static getStdOutType(): OS.StdHandleType
        
        /** Returns the type of the standard error device.  
         *      
         *  **Note:** This method is implemented on Linux, macOS, and Windows.  
         */
        static getStderrType(): OS.StdHandleType
        
        /** Executes the given process in a  *blocking*  way. The file specified in [param path] must exist and be executable. The system path resolution will be used. The [param arguments] are used in the given order, separated by spaces, and wrapped in quotes.  
         *  If an [param output] array is provided, the complete shell output of the process is appended to [param output] as a single [String] element. If [param read_stderr] is `true`, the output to the standard error stream is also appended to the array.  
         *  On Windows, if [param open_console] is `true` and the process is a console app, a new terminal window is opened.  
         *  This method returns the exit code of the command, or `-1` if the process fails to execute.  
         *      
         *  **Note:** The main thread will be blocked until the executed command terminates. Use [Thread] to create a separate thread that will not block the main thread, or use [method create_process] to create a completely independent process.  
         *  For example, to retrieve a list of the working directory's contents:  
         *    
         *  If you wish to access a shell built-in or execute a composite command, a platform-specific shell can be invoked. For example:  
         *    
         *      
         *  **Note:** This method is implemented on Android, Linux, macOS, and Windows.  
         *      
         *  **Note:** To execute a Windows command interpreter built-in command, specify `cmd.exe` in [param path], `/c` as the first argument, and the desired command as the second argument.  
         *      
         *  **Note:** To execute a PowerShell built-in command, specify `powershell.exe` in [param path], `-Command` as the first argument, and the desired command as the second argument.  
         *      
         *  **Note:** To execute a Unix shell built-in command, specify shell executable name in [param path], `-c` as the first argument, and the desired command as the second argument.  
         *      
         *  **Note:** On macOS, sandboxed applications are limited to run only embedded helper executables, specified during export.  
         *      
         *  **Note:** On Android, system commands such as `dumpsys` can only be run on a rooted device.  
         */
        static execute(path: string, arguments_: PackedStringArray | string[], output?: GArray /* = [] */, readStderr?: boolean /* = false */, openConsole?: boolean /* = false */): int64
        
        /** Creates a new process that runs independently of Godot with redirected IO. It will not terminate when Godot terminates. The path specified in [param path] must exist and be an executable file or macOS `.app` bundle. The path is resolved based on the current platform. The [param arguments] are used in the given order and separated by a space.  
         *  If [param blocking] is `false`, created pipes work in non-blocking mode, i.e. read and write operations will return immediately. Use [method FileAccess.get_error] to check if the last read/write operation was successful.  
         *  If the process cannot be created, this method returns an empty [Dictionary]. Otherwise, this method returns a [Dictionary] with the following keys:  
         *  - `"stdio"` - [FileAccess] to access the process stdin and stdout pipes (read/write).  
         *  - `"stderr"` - [FileAccess] to access the process stderr pipe (read only).  
         *  - `"pid"` - Process ID as an [int], which you can use to monitor the process (and potentially terminate it with [method kill]).  
         *      
         *  **Note:** This method is implemented on Android, Linux, macOS, and Windows.  
         *      
         *  **Note:** To execute a Windows command interpreter built-in command, specify `cmd.exe` in [param path], `/c` as the first argument, and the desired command as the second argument.  
         *      
         *  **Note:** To execute a PowerShell built-in command, specify `powershell.exe` in [param path], `-Command` as the first argument, and the desired command as the second argument.  
         *      
         *  **Note:** To execute a Unix shell built-in command, specify shell executable name in [param path], `-c` as the first argument, and the desired command as the second argument.  
         *      
         *  **Note:** On macOS, sandboxed applications are limited to run only embedded helper executables, specified during export or system .app bundle, system .app bundles will ignore arguments.  
         */
        static executeWithPipe(path: string, arguments_: PackedStringArray | string[], blocking?: boolean /* = true */): GDictionary
        
        /** Creates a new process that runs independently of Godot. It will not terminate when Godot terminates. The path specified in [param path] must exist and be an executable file or macOS `.app` bundle. The path is resolved based on the current platform. The [param arguments] are used in the given order and separated by a space.  
         *  On Windows, if [param open_console] is `true` and the process is a console app, a new terminal window will be opened.  
         *  If the process is successfully created, this method returns its process ID, which you can use to monitor the process (and potentially terminate it with [method kill]). Otherwise, this method returns `-1`.  
         *  **Example:** Run another instance of the project:  
         *    
         *  See [method execute] if you wish to run an external command and retrieve the results.  
         *      
         *  **Note:** This method is implemented on Android, Linux, macOS, and Windows.  
         *      
         *  **Note:** On macOS, sandboxed applications are limited to run only embedded helper executables, specified during export or system .app bundle, system .app bundles will ignore arguments.  
         */
        static createProcess(path: string, arguments_: PackedStringArray | string[], openConsole?: boolean /* = false */): int64
        
        /** Creates a new instance of Godot that runs independently. The [param arguments] are used in the given order and separated by a space.  
         *  If the process is successfully created, this method returns the new process' ID, which you can use to monitor the process (and potentially terminate it with [method kill]). If the process cannot be created, this method returns `-1`.  
         *  See [method create_process] if you wish to run a different process.  
         *      
         *  **Note:** This method is implemented on Android, Linux, macOS and Windows.  
         */
        static createInstance(arguments_: PackedStringArray | string[]): int64
        
        /** Kill (terminate) the process identified by the given process ID ([param pid]), such as the ID returned by [method execute] in non-blocking mode. See also [method crash].  
         *      
         *  **Note:** This method can also be used to kill processes that were not spawned by the engine.  
         *      
         *  **Note:** This method is implemented on Android, iOS, Linux, macOS and Windows.  
         */
        static kill(pid: int64): GError
        
        /** Requests the OS to open a resource identified by [param uri] with the most appropriate program. For example:  
         *  - `OS.shell_open("C:\\Users\\name\\Downloads")` on Windows opens the file explorer at the user's Downloads folder.  
         *  - `OS.shell_open("C:/Users/name/Downloads")` also works on Windows and opens the file explorer at the user's Downloads folder.  
         *  - `OS.shell_open("https://godotengine.org")` opens the default web browser on the official Godot website.  
         *  - `OS.shell_open("mailto:example@example.com")` opens the default email client with the "To" field set to `example@example.com`. See [url=https://datatracker.ietf.org/doc/html/rfc2368]RFC 2368 - The `mailto` URL scheme[/url] for a list of fields that can be added.  
         *  Use [method ProjectSettings.globalize_path] to convert a `res://` or `user://` project path into a system path for use with this method.  
         *      
         *  **Note:** Use [method String.uri_encode] to encode characters within URLs in a URL-safe, portable way. This is especially required for line breaks. Otherwise, [method shell_open] may not work correctly in a project exported to the Web platform.  
         *      
         *  **Note:** This method is implemented on Android, iOS, Web, Linux, macOS and Windows.  
         */
        static shellOpen(uri: string): GError
        
        /** Requests the OS to open the file manager, navigate to the given [param file_or_dir_path] and select the target file or folder.  
         *  If [param open_folder] is `true` and [param file_or_dir_path] is a valid directory path, the OS will open the file manager and navigate to the target folder without selecting anything.  
         *  Use [method ProjectSettings.globalize_path] to convert a `res://` or `user://` project path into a system path to use with this method.  
         *      
         *  **Note:** This method is currently only implemented on Windows and macOS. On other platforms, it will fallback to [method shell_open] with a directory path of [param file_or_dir_path] prefixed with `file://`.  
         */
        static shellShowInFileManager(fileOrDirPath: string, openFolder?: boolean /* = true */): GError
        
        /** Returns `true` if the child process ID ([param pid]) is still running or `false` if it has terminated. [param pid] must be a valid ID generated from [method create_process].  
         *      
         *  **Note:** This method is implemented on Android, iOS, Linux, macOS, and Windows.  
         */
        static isProcessRunning(pid: int64): boolean
        
        /** Returns the exit code of a spawned process once it has finished running (see [method is_process_running]).  
         *  Returns `-1` if the [param pid] is not a PID of a spawned child process, the process is still running, or the method is not implemented for the current platform.  
         *      
         *  **Note:** Returns `-1` if the [param pid] is a macOS bundled app process.  
         *      
         *  **Note:** This method is implemented on Android, Linux, macOS and Windows.  
         */
        static getProcessExitCode(pid: int64): int64
        
        /** Returns the number used by the host machine to uniquely identify this application.  
         *      
         *  **Note:** On Web, this method always returns `0`.  
         */
        static getProcessId(): int64
        
        /** Returns `true` if the environment variable with the name [param variable] exists.  
         *      
         *  **Note:** Double-check the casing of [param variable]. Environment variable names are case-sensitive on all platforms except Windows.  
         */
        static hasEnvironment(variable: string): boolean
        
        /** Returns the value of the given environment variable, or an empty string if [param variable] doesn't exist.  
         *      
         *  **Note:** Double-check the casing of [param variable]. Environment variable names are case-sensitive on all platforms except Windows.  
         *      
         *  **Note:** On macOS, applications do not have access to shell environment variables.  
         */
        static getEnvironment(variable: string): string
        
        /** Sets the value of the environment variable [param variable] to [param value]. The environment variable will be set for the Godot process and any process executed with [method execute] after running [method set_environment]. The environment variable will  *not*  persist to processes run after the Godot process was terminated.  
         *      
         *  **Note:** Environment variable names are case-sensitive on all platforms except Windows. The [param variable] name cannot be empty or include the `=` character. On Windows, there is a 32767 characters limit for the combined length of [param variable], [param value], and the `=` and null terminator characters that will be registered in the environment block.  
         */
        static setEnvironment(variable: string, value: string): void
        
        /** Removes the given environment variable from the current environment, if it exists. The [param variable] name cannot be empty or include the `=` character. The environment variable will be removed for the Godot process and any process executed with [method execute] after running [method unset_environment]. The removal of the environment variable will  *not*  persist to processes run after the Godot process was terminated.  
         *      
         *  **Note:** Environment variable names are case-sensitive on all platforms except Windows.  
         */
        static unsetEnvironment(variable: string): void
        
        /** Returns the name of the host platform.  
         *  - On Windows, this is `"Windows"`.  
         *  - On macOS, this is `"macOS"`.  
         *  - On Linux-based operating systems, this is `"Linux"`.  
         *  - On BSD-based operating systems, this is `"FreeBSD"`, `"NetBSD"`, `"OpenBSD"`, or `"BSD"` as a fallback.  
         *  - On Android, this is `"Android"`.  
         *  - On iOS, this is `"iOS"`.  
         *  - On Web, this is `"Web"`.  
         *      
         *  **Note:** Custom builds of the engine may support additional platforms, such as consoles, possibly returning other names.  
         *    
         *      
         *  **Note:** On Web platforms, it is still possible to determine the host platform's OS with feature tags. See [method has_feature].  
         */
        static getName(): string
        
        /** Returns the name of the distribution for Linux and BSD platforms (e.g. "Ubuntu", "Manjaro", "OpenBSD", etc.).  
         *  Returns the same value as [method get_name] for stock Android ROMs, but attempts to return the custom ROM name for popular Android derivatives such as "LineageOS".  
         *  Returns the same value as [method get_name] for other platforms.  
         *      
         *  **Note:** This method is not supported on the Web platform. It returns an empty string.  
         */
        static getDistributionName(): string
        
        /** Returns the exact production and build version of the operating system. This is different from the branded version used in marketing. This helps to distinguish between different releases of operating systems, including minor versions, and insider and custom builds.  
         *  - For Windows, the major and minor version are returned, as well as the build number. For example, the returned string may look like `10.0.9926` for a build of Windows 10, and it may look like `6.1.7601` for a build of Windows 7 SP1.  
         *  - For rolling distributions, such as Arch Linux, an empty string is returned.  
         *  - For macOS and iOS, the major and minor version are returned, as well as the patch number.  
         *  - For Android, the SDK version and the incremental build number are returned. If it's a custom ROM, it attempts to return its version instead.  
         *      
         *  **Note:** This method is not supported on the Web platform. It returns an empty string.  
         */
        static getVersion(): string
        
        /** Returns the branded version used in marketing, followed by the build number (on Windows) or the version number (on macOS). Examples include `11 (build 22000)` and `Sequoia (15.0.0)`. This value can then be appended to [method get_name] to get a full, human-readable operating system name and version combination for the operating system. Windows feature updates such as 24H2 are not contained in the resulting string, but Windows Server is recognized as such (e.g. `2025 (build 26100)` for Windows Server 2025).  
         *      
         *  **Note:** This method is only supported on Windows and macOS. On other operating systems, it returns the same value as [method get_version].  
         */
        static getVersionAlias(): string
        
        /** Returns the command-line arguments passed to the engine.  
         *  Command-line arguments can be written in any form, including both `--key value` and `--key=value` forms so they can be properly parsed, as long as custom command-line arguments do not conflict with engine arguments.  
         *  You can also incorporate environment variables using the [method get_environment] method.  
         *  You can set [member ProjectSettings.editor/run/main_run_args] to define command-line arguments to be passed by the editor when running the project.  
         *  **Example:** Parse command-line arguments into a [Dictionary] using the `--key=value` form for arguments:  
         *    
         *      
         *  **Note:** Passing custom user arguments directly is not recommended, as the engine may discard or modify them. Instead, pass the standard UNIX double dash (`--`) and then the custom arguments, which the engine will ignore by design. These can be read via [method get_cmdline_user_args].  
         */
        static getCmdlineArgs(): PackedStringArray
        
        /** Returns the command-line user arguments passed to the engine. User arguments are ignored by the engine and reserved for the user. They are passed after the double dash `--` argument. `++` may be used when `--` is intercepted by another program (such as `startx`).  
         *    
         *  To get all passed arguments, use [method get_cmdline_args].  
         */
        static getCmdlineUserArgs(): PackedStringArray
        
        /** Returns the video adapter driver name and version for the user's currently active graphics card, as a [PackedStringArray]. See also [method RenderingServer.get_video_adapter_api_version].  
         *  The first element holds the driver name, such as `nvidia`, `amdgpu`, etc.  
         *  The second element holds the driver version. For example, on the `nvidia` driver on a Linux/BSD platform, the version is in the format `510.85.02`. For Windows, the driver's format is `31.0.15.1659`.  
         *      
         *  **Note:** This method is only supported on Linux/BSD and Windows when not running in headless mode. On other platforms, it returns an empty array.  
         */
        static getVideoAdapterDriverInfo(): PackedStringArray
        
        /** If [param restart] is `true`, restarts the project automatically when it is exited with [method SceneTree.quit] or [constant Node.NOTIFICATION_WM_CLOSE_REQUEST]. Command-line [param arguments] can be supplied. To restart the project with the same command line arguments as originally used to run the project, pass [method get_cmdline_args] as the value for [param arguments].  
         *  This method can be used to apply setting changes that require a restart. See also [method is_restart_on_exit_set] and [method get_restart_on_exit_arguments].  
         *      
         *  **Note:** This method is only effective on desktop platforms, and only when the project isn't started from the editor. It will have no effect on mobile and Web platforms, or when the project is started from the editor.  
         *      
         *  **Note:** If the project process crashes or is  *killed*  by the user (by sending `SIGKILL` instead of the usual `SIGTERM`), the project won't restart automatically.  
         */
        static setRestartOnExit(restart: boolean, arguments_?: PackedStringArray | string[] /* = [] */): void
        
        /** Returns `true` if the project will automatically restart when it exits for any reason, `false` otherwise. See also [method set_restart_on_exit] and [method get_restart_on_exit_arguments]. */
        static isRestartOnExitSet(): boolean
        
        /** Returns the list of command line arguments that will be used when the project automatically restarts using [method set_restart_on_exit]. See also [method is_restart_on_exit_set]. */
        static getRestartOnExitArguments(): PackedStringArray
        
        /** Delays execution of the current thread by [param usec] microseconds. [param usec] must be greater than or equal to `0`. Otherwise, [method delay_usec] does nothing and prints an error message.  
         *      
         *  **Note:** [method delay_usec] is a  *blocking*  way to delay code execution. To delay code execution in a non-blocking way, you may use [method SceneTree.create_timer]. Awaiting with a [SceneTreeTimer] delays the execution of code placed below the `await` without affecting the rest of the project (or editor, for [EditorPlugin]s and [EditorScript]s).  
         *      
         *  **Note:** When [method delay_usec] is called on the main thread, it will freeze the project and will prevent it from redrawing and registering input until the delay has passed. When using [method delay_usec] as part of an [EditorPlugin] or [EditorScript], it will freeze the editor but won't freeze the project if it is currently running (since the project is an independent child process).  
         */
        static delayUsec(usec: int64): void
        
        /** Delays execution of the current thread by [param msec] milliseconds. [param msec] must be greater than or equal to `0`. Otherwise, [method delay_msec] does nothing and prints an error message.  
         *      
         *  **Note:** [method delay_msec] is a  *blocking*  way to delay code execution. To delay code execution in a non-blocking way, you may use [method SceneTree.create_timer]. Awaiting with [SceneTreeTimer] delays the execution of code placed below the `await` without affecting the rest of the project (or editor, for [EditorPlugin]s and [EditorScript]s).  
         *      
         *  **Note:** When [method delay_msec] is called on the main thread, it will freeze the project and will prevent it from redrawing and registering input until the delay has passed. When using [method delay_msec] as part of an [EditorPlugin] or [EditorScript], it will freeze the editor but won't freeze the project if it is currently running (since the project is an independent child process).  
         */
        static delayMsec(msec: int64): void
        
        /** Returns the host OS locale as a [String] of the form `language_Script_COUNTRY_VARIANT@extra`. Every substring after `language` is optional and may not exist.  
         *  - `language` - 2 or 3-letter [url=https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes]language code[/url], in lower case.  
         *  - [code skip-lint]Script` - 4-letter [url=https://en.wikipedia.org/wiki/ISO_15924]script code[/url], in title case.  
         *  - `COUNTRY` - 2 or 3-letter [url=https://en.wikipedia.org/wiki/ISO_3166-1]country code[/url], in upper case.  
         *  - `VARIANT` - language variant, region and sort order. The variant can have any number of underscored keywords.  
         *  - `extra` - semicolon separated list of additional key words. This may include currency, calendar, sort order and numbering system information.  
         *  If you want only the language code and not the fully specified locale from the OS, you can use [method get_locale_language].  
         */
        static getLocale(): string
        
        /** Returns the host OS locale's 2 or 3-letter [url=https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes]language code[/url] as a string which should be consistent on all platforms. This is equivalent to extracting the `language` part of the [method get_locale] string.  
         *  This can be used to narrow down fully specified locale strings to only the "common" language code, when you don't need the additional information about country code or variants. For example, for a French Canadian user with `fr_CA` locale, this would return `fr`.  
         */
        static getLocaleLanguage(): string
        
        /** Returns the model name of the current device.  
         *      
         *  **Note:** This method is implemented on Android, iOS, macOS, and Windows. Returns `"GenericDevice"` on unsupported platforms.  
         */
        static getModelName(): string
        
        /** Returns `true` if the `user://` file system is persistent, that is, its state is the same after a player quits and starts the game again. Relevant to the Web platform, where this persistence may be unavailable. */
        static isUserfsPersistent(): boolean
        
        /** Returns `true` if the engine was executed with the `--verbose` or `-v` command line argument, or if [member ProjectSettings.debug/settings/stdout/verbose_stdout] is `true`. See also [method @GlobalScope.print_verbose]. */
        static isStdOutVerbose(): boolean
        
        /** Returns `true` if the Godot binary used to run the project is a  *debug*  export template, or when running in the editor.  
         *  Returns `false` if the Godot binary used to run the project is a  *release*  export template.  
         *      
         *  **Note:** To check whether the Godot binary used to run the project is an export template (debug or release), use `OS.has_feature("template")` instead.  
         */
        static isDebugBuild(): boolean
        
        /** Returns the amount of static memory being used by the program in bytes. Only works in debug builds. */
        static getStaticMemoryUsage(): int64
        
        /** Returns the maximum amount of static memory used. Only works in debug builds. */
        static getStaticMemoryPeakUsage(): int64
        
        /** Returns a [Dictionary] containing information about the current memory with the following entries:  
         *  - `"physical"` - total amount of usable physical memory in bytes. This value can be slightly less than the actual physical memory amount, since it does not include memory reserved by the kernel and devices.  
         *  - `"free"` - amount of physical memory, that can be immediately allocated without disk access or other costly operations, in bytes. The process might be able to allocate more physical memory, but this action will require moving inactive pages to disk, which can be expensive.  
         *  - `"available"` - amount of memory that can be allocated without extending the swap file(s), in bytes. This value includes both physical memory and swap.  
         *  - `"stack"` - size of the current thread stack in bytes.  
         *      
         *  **Note:** Each entry's value may be `-1` if it is unknown.  
         */
        static getMemoryInfo(): GDictionary
        
        /** Moves the file or directory at the given [param path] to the system's recycle bin. See also [method DirAccess.remove].  
         *  The method takes only global paths, so you may need to use [method ProjectSettings.globalize_path]. Do not use it for files in `res://` as it will not work in exported projects.  
         *  Returns [constant FAILED] if the file or directory cannot be found, or the system does not support this method.  
         *    
         *      
         *  **Note:** This method is implemented on Android, Linux, macOS and Windows.  
         *      
         *  **Note:** If the user has disabled the recycle bin on their system, the file will be permanently deleted instead.  
         */
        static moveToTrash(path: string): GError
        
        /** Returns the absolute directory path where user data is written (the `user://` directory in Godot). The path depends on the project name and [member ProjectSettings.application/config/use_custom_user_dir].  
         *  - On Windows, this is `%AppData%\Godot\app_userdata\[project_name]`, or `%AppData%\[custom_name]` if `use_custom_user_dir` is set. `%AppData%` expands to `%UserProfile%\AppData\Roaming`.  
         *  - On macOS, this is `~/Library/Application Support/Godot/app_userdata/[project_name]`, or `~/Library/Application Support/[custom_name]` if `use_custom_user_dir` is set.  
         *  - On Linux and BSD, this is `~/.local/share/godot/app_userdata/[project_name]`, or `~/.local/share/[custom_name]` if `use_custom_user_dir` is set.  
         *  - On Android and iOS, this is a sandboxed directory in either internal or external storage, depending on the user's configuration.  
         *  - On Web, this is a virtual directory managed by the browser.  
         *  If the project name is empty, `[project_name]` falls back to `[unnamed project]`.  
         *  Not to be confused with [method get_data_dir], which returns the  *global*  (non-project-specific) user home directory.  
         */
        static getUserDataDir(): string
        
        /** Returns the path to commonly used folders across different platforms, as defined by [param dir]. See the [enum SystemDir] constants for available locations.  
         *      
         *  **Note:** This method is implemented on Android, Linux, macOS and Windows.  
         *      
         *  **Note:** Shared storage is implemented on Android and allows to differentiate between app specific and shared directories, if [param shared_storage] is `true`. Shared directories have additional restrictions on Android.  
         */
        static getSystemDir(dir: OS.SystemDir, sharedStorage?: boolean /* = true */): string
        
        /** Returns the  *global*  user configuration directory according to the operating system's standards.  
         *  On the Linux/BSD platform, this path can be overridden by setting the `XDG_CONFIG_HOME` environment variable before starting the project. See [url=https://docs.godotengine.org/en/latest/tutorials/io/data_paths.html]File paths in Godot projects[/url] in the documentation for more information. See also [method get_cache_dir] and [method get_data_dir].  
         *  Not to be confused with [method get_user_data_dir], which returns the  *project-specific*  user data path.  
         */
        static getConfigDir(): string
        
        /** Returns the  *global*  user data directory according to the operating system's standards.  
         *  On the Linux/BSD platform, this path can be overridden by setting the `XDG_DATA_HOME` environment variable before starting the project. See [url=https://docs.godotengine.org/en/latest/tutorials/io/data_paths.html]File paths in Godot projects[/url] in the documentation for more information. See also [method get_cache_dir] and [method get_config_dir].  
         *  Not to be confused with [method get_user_data_dir], which returns the  *project-specific*  user data path.  
         */
        static getDataDir(): string
        
        /** Returns the  *global*  cache data directory according to the operating system's standards.  
         *  On the Linux/BSD platform, this path can be overridden by setting the `XDG_CACHE_HOME` environment variable before starting the project. See [url=https://docs.godotengine.org/en/latest/tutorials/io/data_paths.html]File paths in Godot projects[/url] in the documentation for more information. See also [method get_config_dir] and [method get_data_dir].  
         *  Not to be confused with [method get_user_data_dir], which returns the  *project-specific*  user data path.  
         */
        static getCacheDir(): string
        
        /** Returns the  *global*  temporary data directory according to the operating system's standards. */
        static getTempDir(): string
        
        /** Returns a string that is unique to the device.  
         *      
         *  **Note:** This string may change without notice if the user reinstalls their operating system, upgrades it, or modifies their hardware. This means it should generally not be used to encrypt persistent data, as the data saved before an unexpected ID change would become inaccessible. The returned string may also be falsified using external programs, so do not rely on the string returned by this method for security purposes.  
         *      
         *  **Note:** On Web, returns an empty string and generates an error, as this method cannot be implemented for security reasons.  
         */
        static getUniqueId(): string
        
        /** Returns the given keycode as a [String].  
         *    
         *  See also [method find_keycode_from_string], [member InputEventKey.keycode], and [method InputEventKey.get_keycode_with_modifiers].  
         */
        static getKeycodeString(code: Key): string
        
        /** Returns `true` if the input keycode corresponds to a Unicode character. For a list of codes, see the [enum Key] constants.  
         *    
         */
        static isKeycodeUnicode(code: int64): boolean
        
        /** Finds the keycode for the given string. The returned values are equivalent to the [enum Key] constants.  
         *    
         *  See also [method get_keycode_string].  
         */
        static findKeycodeFromString(string_: string): Key
        
        /** If [param enabled] is `true`, when opening a file for writing, a temporary file is used in its place. When closed, it is automatically applied to the target file.  
         *  This can useful when files may be opened by other applications, such as antiviruses, text editors, or even the Godot editor itself.  
         */
        static setUseFileAccessSaveAndSwap(enabled: boolean): void
        
        /** Assigns the given name to the current thread. Returns [constant ERR_UNAVAILABLE] if unavailable on the current platform. */
        static setThreadName(name: string): GError
        
        /** Returns the ID of the current thread. This can be used in logs to ease debugging of multi-threaded applications.  
         *      
         *  **Note:** Thread IDs are not deterministic and may be reused across application restarts.  
         */
        static getThreadCallerId(): int64
        
        /** Returns the ID of the main thread. See [method get_thread_caller_id].  
         *      
         *  **Note:** Thread IDs are not deterministic and may be reused across application restarts.  
         */
        static getMainThreadId(): int64
        
        /** Returns `true` if the feature for the given feature tag is supported in the currently running instance, depending on the platform, build, etc. Can be used to check whether you're currently running a debug build, on a certain platform or arch, etc. Refer to the [url=https://docs.godotengine.org/en/latest/tutorials/export/feature_tags.html]Feature Tags[/url] documentation for more details.  
         *      
         *  **Note:** Tag names are case-sensitive.  
         *      
         *  **Note:** On the Web platform, one of the following additional tags is defined to indicate the host platform: `web_android`, `web_ios`, `web_linuxbsd`, `web_macos`, or `web_windows`.  
         */
        static hasFeature(tagName: string): boolean
        
        /** Returns `true` if the application is running in the sandbox.  
         *      
         *  **Note:** This method is only implemented on macOS and Linux.  
         */
        static isSandboxed(): boolean
        
        /** Requests permission from the OS for the given [param name]. Returns `true` if the permission has already been granted. See also [signal MainLoop.on_request_permissions_result].  
         *  The [param name] must be the full permission name. For example:  
         *  - `OS.request_permission("android.permission.READ_EXTERNAL_STORAGE")`  
         *  - `OS.request_permission("android.permission.POST_NOTIFICATIONS")`  
         *  - `OS.request_permission("macos.permission.RECORD_SCREEN")`  
         *      
         *  **Note:** On Android, permission must be checked during export.  
         *      
         *  **Note:** This method is implemented on Android and macOS.  
         */
        static requestPermission(name: string): boolean
        
        /** Requests  *dangerous*  permissions from the OS. Returns `true` if permissions have already been granted. See also [signal MainLoop.on_request_permissions_result].  
         *      
         *  **Note:** Permissions must be checked during export.  
         *      
         *  **Note:** This method is only implemented on Android. Normal permissions are automatically granted at install time in Android applications.  
         */
        static requestPermissions(): boolean
        
        /** On Android devices: Returns the list of dangerous permissions that have been granted.  
         *  On macOS: Returns the list of granted permissions and user selected folders accessible to the application (sandboxed applications only). Use the native file dialog to request folder access permission.  
         */
        static getGrantedPermissions(): PackedStringArray
        
        /** On macOS (sandboxed applications only), this function clears list of user selected folders accessible to the application. */
        static revokeGrantedPermissions(): void
        
        /** Add a custom logger to intercept the internal message stream. */
        static addLogger(logger: Logger): void
        
        /** Remove a custom logger added by [method add_logger]. */
        static removeLogger(logger: Logger): void
        
        /** If `true`, the engine optimizes for low processor usage by only refreshing the screen if needed. Can improve battery consumption on mobile.  
         *      
         *  **Note:** On start-up, this is the same as [member ProjectSettings.application/run/low_processor_mode].  
         */
        get lowProcessorUsageMode(): boolean
        set lowProcessorUsageMode(value: boolean)
        
        /** The amount of sleeping between frames when the low-processor usage mode is enabled, in microseconds. Higher values will result in lower CPU usage. See also [member low_processor_usage_mode].  
         *      
         *  **Note:** On start-up, this is the same as [member ProjectSettings.application/run/low_processor_mode_sleep_usec].  
         */
        get lowProcessorUsageModeSleepUsec(): int64
        set lowProcessorUsageModeSleepUsec(value: int64)
        
        /** If `true`, the engine filters the time delta measured between each frame, and attempts to compensate for random variation. This only works on systems where V-Sync is active.  
         *      
         *  **Note:** On start-up, this is the same as [member ProjectSettings.application/run/delta_smoothing].  
         */
        get deltaSmoothing(): boolean
        set deltaSmoothing(value: boolean)
    }
    // _singleton_class_: Time
    namespace Time {
        enum Month {
            MonthJanuary = 1,
            MonthFebruary = 2,
            MonthMarch = 3,
            MonthApril = 4,
            MonthMay = 5,
            MonthJune = 6,
            MonthJuly = 7,
            MonthAugust = 8,
            MonthSeptember = 9,
            MonthOctober = 10,
            MonthNovember = 11,
            MonthDecember = 12,
        }
        enum Weekday {
            WeekdaySunday = 0,
            WeekdayMonday = 1,
            WeekdayTuesday = 2,
            WeekdayWednesday = 3,
            WeekdayThursday = 4,
            WeekdayFriday = 5,
            WeekdaySaturday = 6,
        }
    }
    /** A singleton for working with time data.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_time.html  
     */
    class Time extends GObject {
        /** The month of January, represented numerically as `01`. */
        static readonly MONTH_JANUARY = 1
        
        /** The month of February, represented numerically as `02`. */
        static readonly MONTH_FEBRUARY = 2
        
        /** The month of March, represented numerically as `03`. */
        static readonly MONTH_MARCH = 3
        
        /** The month of April, represented numerically as `04`. */
        static readonly MONTH_APRIL = 4
        
        /** The month of May, represented numerically as `05`. */
        static readonly MONTH_MAY = 5
        
        /** The month of June, represented numerically as `06`. */
        static readonly MONTH_JUNE = 6
        
        /** The month of July, represented numerically as `07`. */
        static readonly MONTH_JULY = 7
        
        /** The month of August, represented numerically as `08`. */
        static readonly MONTH_AUGUST = 8
        
        /** The month of September, represented numerically as `09`. */
        static readonly MONTH_SEPTEMBER = 9
        
        /** The month of October, represented numerically as `10`. */
        static readonly MONTH_OCTOBER = 10
        
        /** The month of November, represented numerically as `11`. */
        static readonly MONTH_NOVEMBER = 11
        
        /** The month of December, represented numerically as `12`. */
        static readonly MONTH_DECEMBER = 12
        
        /** The day of the week Sunday, represented numerically as `0`. */
        static readonly WEEKDAY_SUNDAY = 0
        
        /** The day of the week Monday, represented numerically as `1`. */
        static readonly WEEKDAY_MONDAY = 1
        
        /** The day of the week Tuesday, represented numerically as `2`. */
        static readonly WEEKDAY_TUESDAY = 2
        
        /** The day of the week Wednesday, represented numerically as `3`. */
        static readonly WEEKDAY_WEDNESDAY = 3
        
        /** The day of the week Thursday, represented numerically as `4`. */
        static readonly WEEKDAY_THURSDAY = 4
        
        /** The day of the week Friday, represented numerically as `5`. */
        static readonly WEEKDAY_FRIDAY = 5
        
        /** The day of the week Saturday, represented numerically as `6`. */
        static readonly WEEKDAY_SATURDAY = 6
        
        /** Converts the given Unix timestamp to a dictionary of keys: `year`, `month`, `day`, `weekday`, `hour`, `minute`, and `second`.  
         *  The returned Dictionary's values will be the same as the [method get_datetime_dict_from_system] if the Unix timestamp is the current time, with the exception of Daylight Savings Time as it cannot be determined from the epoch.  
         */
        static getDatetimeDictFromUnixTime(unixTimeVal: int64): GDictionary
        
        /** Converts the given Unix timestamp to a dictionary of keys: `year`, `month`, `day`, and `weekday`. */
        static getDateDictFromUnixTime(unixTimeVal: int64): GDictionary
        
        /** Converts the given time to a dictionary of keys: `hour`, `minute`, and `second`. */
        static getTimeDictFromUnixTime(unixTimeVal: int64): GDictionary
        
        /** Converts the given Unix timestamp to an ISO 8601 date and time string (YYYY-MM-DDTHH:MM:SS).  
         *  If [param use_space] is `true`, the date and time bits are separated by an empty space character instead of the letter T.  
         */
        static getDatetimeStringFromUnixTime(unixTimeVal: int64, useSpace?: boolean /* = false */): string
        
        /** Converts the given Unix timestamp to an ISO 8601 date string (YYYY-MM-DD). */
        static getDateStringFromUnixTime(unixTimeVal: int64): string
        
        /** Converts the given Unix timestamp to an ISO 8601 time string (HH:MM:SS). */
        static getTimeStringFromUnixTime(unixTimeVal: int64): string
        
        /** Converts the given ISO 8601 date and time string (YYYY-MM-DDTHH:MM:SS) to a dictionary of keys: `year`, `month`, `day`, [code skip-lint]weekday`, `hour`, `minute`, and `second`.  
         *  If [param weekday] is `false`, then the [code skip-lint]weekday` entry is excluded (the calculation is relatively expensive).  
         *      
         *  **Note:** Any decimal fraction in the time string will be ignored silently.  
         */
        static getDatetimeDictFromDatetimeString(datetime: string, weekday: boolean): GDictionary
        
        /** Converts the given dictionary of keys to an ISO 8601 date and time string (YYYY-MM-DDTHH:MM:SS).  
         *  The given dictionary can be populated with the following keys: `year`, `month`, `day`, `hour`, `minute`, and `second`. Any other entries (including `dst`) are ignored.  
         *  If the dictionary is empty, `0` is returned. If some keys are omitted, they default to the equivalent values for the Unix epoch timestamp 0 (1970-01-01 at 00:00:00).  
         *  If [param use_space] is `true`, the date and time bits are separated by an empty space character instead of the letter T.  
         */
        static getDatetimeStringFromDatetimeDict(datetime: GDictionary, useSpace: boolean): string
        
        /** Converts a dictionary of time values to a Unix timestamp.  
         *  The given dictionary can be populated with the following keys: `year`, `month`, `day`, `hour`, `minute`, and `second`. Any other entries (including `dst`) are ignored.  
         *  If the dictionary is empty, `0` is returned. If some keys are omitted, they default to the equivalent values for the Unix epoch timestamp 0 (1970-01-01 at 00:00:00).  
         *  You can pass the output from [method get_datetime_dict_from_unix_time] directly into this function and get the same as what was put in.  
         *      
         *  **Note:** Unix timestamps are often in UTC. This method does not do any timezone conversion, so the timestamp will be in the same timezone as the given datetime dictionary.  
         */
        static getUnixTimeFromDatetimeDict(datetime: GDictionary): int64
        
        /** Converts the given ISO 8601 date and/or time string to a Unix timestamp. The string can contain a date only, a time only, or both.  
         *      
         *  **Note:** Unix timestamps are often in UTC. This method does not do any timezone conversion, so the timestamp will be in the same timezone as the given datetime string.  
         *      
         *  **Note:** Any decimal fraction in the time string will be ignored silently.  
         */
        static getUnixTimeFromDatetimeString(datetime: string): int64
        
        /** Converts the given timezone offset in minutes to a timezone offset string. For example, -480 returns "-08:00", 345 returns "+05:45", and 0 returns "+00:00". */
        static getOffsetStringFromOffsetMinutes(offsetMinutes: int64): string
        
        /** Returns the current date as a dictionary of keys: `year`, `month`, `day`, `weekday`, `hour`, `minute`, `second`, and `dst` (Daylight Savings Time). */
        static getDatetimeDictFromSystem(utc?: boolean /* = false */): GDictionary
        
        /** Returns the current date as a dictionary of keys: `year`, `month`, `day`, and `weekday`.  
         *  The returned values are in the system's local time when [param utc] is `false`, otherwise they are in UTC.  
         */
        static getDateDictFromSystem(utc?: boolean /* = false */): GDictionary
        
        /** Returns the current time as a dictionary of keys: `hour`, `minute`, and `second`.  
         *  The returned values are in the system's local time when [param utc] is `false`, otherwise they are in UTC.  
         */
        static getTimeDictFromSystem(utc?: boolean /* = false */): GDictionary
        
        /** Returns the current date and time as an ISO 8601 date and time string (YYYY-MM-DDTHH:MM:SS).  
         *  The returned values are in the system's local time when [param utc] is `false`, otherwise they are in UTC.  
         *  If [param use_space] is `true`, the date and time bits are separated by an empty space character instead of the letter T.  
         */
        static getDatetimeStringFromSystem(utc?: boolean /* = false */, useSpace?: boolean /* = false */): string
        
        /** Returns the current date as an ISO 8601 date string (YYYY-MM-DD).  
         *  The returned values are in the system's local time when [param utc] is `false`, otherwise they are in UTC.  
         */
        static getDateStringFromSystem(utc?: boolean /* = false */): string
        
        /** Returns the current time as an ISO 8601 time string (HH:MM:SS).  
         *  The returned values are in the system's local time when [param utc] is `false`, otherwise they are in UTC.  
         */
        static getTimeStringFromSystem(utc?: boolean /* = false */): string
        
        /** Returns the current time zone as a dictionary of keys: `bias` and `name`.  
         *  - `bias` is the offset from UTC in minutes, since not all time zones are multiples of an hour from UTC.  
         *  - `name` is the localized name of the time zone, according to the OS locale settings of the current user.  
         */
        static getTimeZoneFromSystem(): GDictionary
        
        /** Returns the current Unix timestamp in seconds based on the system time in UTC. This method is implemented by the operating system and always returns the time in UTC. The Unix timestamp is the number of seconds passed since 1970-01-01 at 00:00:00, the [url=https://en.wikipedia.org/wiki/Unix_time]Unix epoch[/url].  
         *      
         *  **Note:** Unlike other methods that use integer timestamps, this method returns the timestamp as a [float] for sub-second precision.  
         */
        static getUnixTimeFromSystem(): float64
        
        /** Returns the amount of time passed in milliseconds since the engine started.  
         *  Will always be positive or 0 and uses a 64-bit value (it will wrap after roughly 500 million years).  
         */
        static getTicksMsec(): int64
        
        /** Returns the amount of time passed in microseconds since the engine started.  
         *  Will always be positive or 0 and uses a 64-bit value (it will wrap after roughly half a million years).  
         */
        static getTicksUsec(): int64
    }
    // _singleton_class_: TextServerManager
    /** A singleton for managing [TextServer] implementations.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_textservermanager.html  
     */
    class TextServerManager extends GObject {
        /** Registers a [TextServer] interface. */
        static addInterface(interface: TextServer): void
        
        /** Returns the number of interfaces currently registered. */
        static getInterfaceCount(): int64
        
        /** Removes an interface. All fonts and shaped text caches should be freed before removing an interface. */
        static removeInterface(interface: TextServer): void
        
        /** Returns the interface registered at a given index. */
        static getInterface(idx: int64): null | TextServer
        
        /** Returns a list of available interfaces, with the index and name of each interface. */
        static getInterfaces(): GArray
        
        /** Finds an interface by its [param name]. */
        static findInterface(name: string): null | TextServer
        
        /** Sets the primary [TextServer] interface. */
        static setPrimaryInterface(index: TextServer): void
        
        /** Returns the primary [TextServer] interface currently in use. */
        static getPrimaryInterface(): null | TextServer
        
        /** Emitted when a new interface has been added. */
        static readonly interfaceAdded: Signal<(interfaceName: StringName) => void>
        
        /** Emitted when an interface is removed. */
        static readonly interfaceRemoved: Signal<(interfaceName: StringName) => void>
    }
    // _singleton_class_: PhysicsServer2DManager
    /** A singleton for managing [PhysicsServer2D] implementations.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicsserver2dmanager.html  
     */
    class PhysicsServer2DManager extends GObject {
        /** Register a [PhysicsServer2D] implementation by passing a [param name] and a [Callable] that returns a [PhysicsServer2D] object. */
        static registerServer(name: string, createCallback: Callable): void
        
        /** Set the default [PhysicsServer2D] implementation to the one identified by [param name], if [param priority] is greater than the priority of the current default implementation. */
        static setDefaultServer(name: string, priority: int64): void
    }
    // _singleton_class_: PhysicsServer3DManager
    /** A singleton for managing [PhysicsServer3D] implementations.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicsserver3dmanager.html  
     */
    class PhysicsServer3DManager extends GObject {
        /** Register a [PhysicsServer3D] implementation by passing a [param name] and a [Callable] that returns a [PhysicsServer3D] object. */
        static registerServer(name: string, createCallback: Callable): void
        
        /** Set the default [PhysicsServer3D] implementation to the one identified by [param name], if [param priority] is greater than the priority of the current default implementation. */
        static setDefaultServer(name: string, priority: int64): void
    }
    // _singleton_class_: NavigationMeshGenerator
    /** Helper class for creating and clearing navigation meshes.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_navigationmeshgenerator.html  
     */
    class NavigationMeshGenerator extends GObject {
        /** Bakes the [param navigation_mesh] with source geometry collected starting from the [param root_node]. */
        static bake(navigationMesh: NavigationMesh, rootNode: Node): void
        
        /** Removes all polygons and vertices from the provided [param navigation_mesh] resource. */
        static clear(navigationMesh: NavigationMesh): void
        
        /** Parses the [SceneTree] for source geometry according to the properties of [param navigation_mesh]. Updates the provided [param source_geometry_data] resource with the resulting data. The resource can then be used to bake a navigation mesh with [method bake_from_source_geometry_data]. After the process is finished the optional [param callback] will be called.  
         *      
         *  **Note:** This function needs to run on the main thread or with a deferred call as the SceneTree is not thread-safe.  
         *  **Performance:** While convenient, reading data arrays from [Mesh] resources can affect the frame rate negatively. The data needs to be received from the GPU, stalling the [RenderingServer] in the process. For performance prefer the use of e.g. collision shapes or creating the data arrays entirely in code.  
         */
        static parseSourceGeometryData(navigationMesh: NavigationMesh, sourceGeometryData: NavigationMeshSourceGeometryData3D, rootNode: Node, callback?: Callable /* = new Callable() */): void
        
        /** Bakes the provided [param navigation_mesh] with the data from the provided [param source_geometry_data]. After the process is finished the optional [param callback] will be called. */
        static bakeFromSourceGeometryData(navigationMesh: NavigationMesh, sourceGeometryData: NavigationMeshSourceGeometryData3D, callback?: Callable /* = new Callable() */): void
    }
    // _singleton_class_: IP
    namespace IP {
        enum ResolverStatus {
            ResolverStatusNone = 0,
            ResolverStatusWaiting = 1,
            ResolverStatusDone = 2,
            ResolverStatusError = 3,
        }
        enum Type {
            TypeNone = 0,
            TypeIpv4 = 1,
            TypeIpv6 = 2,
            TypeAny = 3,
        }
    }
    /** Internet protocol (IP) support functions such as DNS resolution.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_ip.html  
     */
    class IP extends GObject {
        /** DNS hostname resolver status: No status. */
        static readonly RESOLVER_STATUS_NONE = 0
        
        /** DNS hostname resolver status: Waiting. */
        static readonly RESOLVER_STATUS_WAITING = 1
        
        /** DNS hostname resolver status: Done. */
        static readonly RESOLVER_STATUS_DONE = 2
        
        /** DNS hostname resolver status: Error. */
        static readonly RESOLVER_STATUS_ERROR = 3
        
        /** Maximum number of concurrent DNS resolver queries allowed, [constant RESOLVER_INVALID_ID] is returned if exceeded. */
        static readonly RESOLVER_MAX_QUERIES = 256
        
        /** Invalid ID constant. Returned if [constant RESOLVER_MAX_QUERIES] is exceeded. */
        static readonly RESOLVER_INVALID_ID = -1
        
        /** Address type: None. */
        static readonly TYPE_NONE = 0
        
        /** Address type: Internet protocol version 4 (IPv4). */
        static readonly TYPE_IPV4 = 1
        
        /** Address type: Internet protocol version 6 (IPv6). */
        static readonly TYPE_IPV6 = 2
        
        /** Address type: Any. */
        static readonly TYPE_ANY = 3
        
        /** Returns a given hostname's IPv4 or IPv6 address when resolved (blocking-type method). The address type returned depends on the [enum Type] constant given as [param ip_type]. */
        static resolveHostname(host: string, iPType?: IP.Type /* = 3 */): string
        
        /** Resolves a given hostname in a blocking way. Addresses are returned as an [Array] of IPv4 or IPv6 addresses depending on [param ip_type]. */
        static resolveHostnameAddresses(host: string, iPType?: IP.Type /* = 3 */): PackedStringArray
        
        /** Creates a queue item to resolve a hostname to an IPv4 or IPv6 address depending on the [enum Type] constant given as [param ip_type]. Returns the queue ID if successful, or [constant RESOLVER_INVALID_ID] on error. */
        static resolveHostnameQueueItem(host: string, iPType?: IP.Type /* = 3 */): int64
        
        /** Returns a queued hostname's status as a [enum ResolverStatus] constant, given its queue [param id]. */
        static getResolveItemStatus(id: int64): IP.ResolverStatus
        
        /** Returns a queued hostname's IP address, given its queue [param id]. Returns an empty string on error or if resolution hasn't happened yet (see [method get_resolve_item_status]). */
        static getResolveItemAddress(id: int64): string
        
        /** Returns resolved addresses, or an empty array if an error happened or resolution didn't happen yet (see [method get_resolve_item_status]). */
        static getResolveItemAddresses(id: int64): GArray
        
        /** Removes a given item [param id] from the queue. This should be used to free a queue after it has completed to enable more queries to happen. */
        static eraseResolveItem(id: int64): void
        
        /** Returns all the user's current IPv4 and IPv6 addresses as an array. */
        static getLocalAddresses(): PackedStringArray
        
        /** Returns all network adapters as an array.  
         *  Each adapter is a dictionary of the form:  
         *    
         */
        static getLocalInterfaces(): GArray
        
        /** Removes all of a [param hostname]'s cached references. If no [param hostname] is given, all cached IP addresses are removed. */
        static clearCache(hostname?: string /* = '' */): void
    }
    // _singleton_class_: Geometry2D
    namespace Geometry2D {
        enum PolyBooleanOperation {
            OperationUnion = 0,
            OperationDifference = 1,
            OperationIntersection = 2,
            OperationXor = 3,
        }
        enum PolyJoinType {
            JoinSquare = 0,
            JoinRound = 1,
            JoinMiter = 2,
        }
        enum PolyEndType {
            EndPolygon = 0,
            EndJoined = 1,
            EndButt = 2,
            EndSquare = 3,
            EndRound = 4,
        }
    }
    /** Provides methods for some common 2D geometric operations.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_geometry2d.html  
     */
    class Geometry2D extends GObject {
        /** Create regions where either subject or clip polygons (or both) are filled. */
        static readonly OPERATION_UNION = 0
        
        /** Create regions where subject polygons are filled except where clip polygons are filled. */
        static readonly OPERATION_DIFFERENCE = 1
        
        /** Create regions where both subject and clip polygons are filled. */
        static readonly OPERATION_INTERSECTION = 2
        
        /** Create regions where either subject or clip polygons are filled but not where both are filled. */
        static readonly OPERATION_XOR = 3
        
        /** Squaring is applied uniformally at all convex edge joins at `1 * delta`. */
        static readonly JOIN_SQUARE = 0
        
        /** While flattened paths can never perfectly trace an arc, they are approximated by a series of arc chords. */
        static readonly JOIN_ROUND = 1
        
        /** There's a necessary limit to mitered joins since offsetting edges that join at very acute angles will produce excessively long and narrow "spikes". For any given edge join, when miter offsetting would exceed that maximum distance, "square" joining is applied. */
        static readonly JOIN_MITER = 2
        
        /** Endpoints are joined using the [enum PolyJoinType] value and the path filled as a polygon. */
        static readonly END_POLYGON = 0
        
        /** Endpoints are joined using the [enum PolyJoinType] value and the path filled as a polyline. */
        static readonly END_JOINED = 1
        
        /** Endpoints are squared off with no extension. */
        static readonly END_BUTT = 2
        
        /** Endpoints are squared off and extended by `delta` units. */
        static readonly END_SQUARE = 3
        
        /** Endpoints are rounded off and extended by `delta` units. */
        static readonly END_ROUND = 4
        
        /** Returns `true` if [param point] is inside the circle or if it's located exactly  *on*  the circle's boundary, otherwise returns `false`. */
        static isPointInCircle(point: Vector2, circlePosition: Vector2, circleRadius: float64): boolean
        
        /** Given the 2D segment ([param segment_from], [param segment_to]), returns the position on the segment (as a number between 0 and 1) at which the segment hits the circle that is located at position [param circle_position] and has radius [param circle_radius]. If the segment does not intersect the circle, -1 is returned (this is also the case if the line extending the segment would intersect the circle, but the segment does not). */
        static segmentIntersectsCircle(segmentFrom: Vector2, segmentTo: Vector2, circlePosition: Vector2, circleRadius: float64): float64
        
        /** Checks if the two segments ([param from_a], [param to_a]) and ([param from_b], [param to_b]) intersect. If yes, return the point of intersection as [Vector2]. If no intersection takes place, returns `null`. */
        static segmentIntersectsSegment(fromA: Vector2, toA: Vector2, fromB: Vector2, toB: Vector2): any
        
        /** Returns the point of intersection between the two lines ([param from_a], [param dir_a]) and ([param from_b], [param dir_b]). Returns a [Vector2], or `null` if the lines are parallel.  
         *  `from` and `dir` are  *not*  endpoints of a line segment or ray but the slope (`dir`) and a known point (`from`) on that line.  
         *    
         */
        static lineIntersectsLine(fromA: Vector2, dirA: Vector2, fromB: Vector2, dirB: Vector2): any
        
        /** Given the two 2D segments ([param p1], [param q1]) and ([param p2], [param q2]), finds those two points on the two segments that are closest to each other. Returns a [PackedVector2Array] that contains this point on ([param p1], [param q1]) as well the accompanying point on ([param p2], [param q2]). */
        static getClosestPointsBetweenSegments(p1: Vector2, q1: Vector2, p2: Vector2, q2: Vector2): PackedVector2Array
        
        /** Returns the 2D point on the 2D segment ([param s1], [param s2]) that is closest to [param point]. The returned point will always be inside the specified segment. */
        static getClosestPointToSegment(point: Vector2, s1: Vector2, s2: Vector2): Vector2
        
        /** Returns the 2D point on the 2D line defined by ([param s1], [param s2]) that is closest to [param point]. The returned point can be inside the segment ([param s1], [param s2]) or outside of it, i.e. somewhere on the line extending from the segment. */
        static getClosestPointToSegmentUncapped(point: Vector2, s1: Vector2, s2: Vector2): Vector2
        
        /** Returns if [param point] is inside the triangle specified by [param a], [param b] and [param c]. */
        static pointIsInsideTriangle(point: Vector2, a: Vector2, b: Vector2, c: Vector2): boolean
        
        /** Returns `true` if [param polygon]'s vertices are ordered in clockwise order, otherwise returns `false`.  
         *      
         *  **Note:** Assumes a Cartesian coordinate system where `+x` is right and `+y` is up. If using screen coordinates (`+y` is down), the result will need to be flipped (i.e. a `true` result will indicate counter-clockwise).  
         */
        static isPolygonClockwise(polygon: PackedVector2Array | Vector2[]): boolean
        
        /** Returns `true` if [param point] is inside [param polygon] or if it's located exactly  *on*  polygon's boundary, otherwise returns `false`. */
        static isPointInPolygon(point: Vector2, polygon: PackedVector2Array | Vector2[]): boolean
        
        /** Triangulates the polygon specified by the points in [param polygon]. Returns a [PackedInt32Array] where each triangle consists of three consecutive point indices into [param polygon] (i.e. the returned array will have `n * 3` elements, with `n` being the number of found triangles). Output triangles will always be counter clockwise, and the contour will be flipped if it's clockwise. If the triangulation did not succeed, an empty [PackedInt32Array] is returned. */
        static triangulatePolygon(polygon: PackedVector2Array | Vector2[]): PackedInt32Array
        
        /** Triangulates the area specified by discrete set of [param points] such that no point is inside the circumcircle of any resulting triangle. Returns a [PackedInt32Array] where each triangle consists of three consecutive point indices into [param points] (i.e. the returned array will have `n * 3` elements, with `n` being the number of found triangles). If the triangulation did not succeed, an empty [PackedInt32Array] is returned. */
        static triangulateDelaunay(points: PackedVector2Array | Vector2[]): PackedInt32Array
        
        /** Given an array of [Vector2]s, returns the convex hull as a list of points in counterclockwise order. The last point is the same as the first one. */
        static convexHull(points: PackedVector2Array | Vector2[]): PackedVector2Array
        
        /** Decomposes the [param polygon] into multiple convex hulls and returns an array of [PackedVector2Array]. */
        static decomposePolygonInConvex(polygon: PackedVector2Array | Vector2[]): GArray
        
        /** Merges (combines) [param polygon_a] and [param polygon_b] and returns an array of merged polygons. This performs [constant OPERATION_UNION] between polygons.  
         *  The operation may result in an outer polygon (boundary) and multiple inner polygons (holes) produced which could be distinguished by calling [method is_polygon_clockwise].  
         */
        static mergePolygons(polygonA: PackedVector2Array | Vector2[], polygonB: PackedVector2Array | Vector2[]): GArray
        
        /** Clips [param polygon_a] against [param polygon_b] and returns an array of clipped polygons. This performs [constant OPERATION_DIFFERENCE] between polygons. Returns an empty array if [param polygon_b] completely overlaps [param polygon_a].  
         *  If [param polygon_b] is enclosed by [param polygon_a], returns an outer polygon (boundary) and inner polygon (hole) which could be distinguished by calling [method is_polygon_clockwise].  
         */
        static clipPolygons(polygonA: PackedVector2Array | Vector2[], polygonB: PackedVector2Array | Vector2[]): GArray
        
        /** Intersects [param polygon_a] with [param polygon_b] and returns an array of intersected polygons. This performs [constant OPERATION_INTERSECTION] between polygons. In other words, returns common area shared by polygons. Returns an empty array if no intersection occurs.  
         *  The operation may result in an outer polygon (boundary) and inner polygon (hole) produced which could be distinguished by calling [method is_polygon_clockwise].  
         */
        static intersectPolygons(polygonA: PackedVector2Array | Vector2[], polygonB: PackedVector2Array | Vector2[]): GArray
        
        /** Mutually excludes common area defined by intersection of [param polygon_a] and [param polygon_b] (see [method intersect_polygons]) and returns an array of excluded polygons. This performs [constant OPERATION_XOR] between polygons. In other words, returns all but common area between polygons.  
         *  The operation may result in an outer polygon (boundary) and inner polygon (hole) produced which could be distinguished by calling [method is_polygon_clockwise].  
         */
        static excludePolygons(polygonA: PackedVector2Array | Vector2[], polygonB: PackedVector2Array | Vector2[]): GArray
        
        /** Clips [param polyline] against [param polygon] and returns an array of clipped polylines. This performs [constant OPERATION_DIFFERENCE] between the polyline and the polygon. This operation can be thought of as cutting a line with a closed shape. */
        static clipPolylineWithPolygon(polyline: PackedVector2Array | Vector2[], polygon: PackedVector2Array | Vector2[]): GArray
        
        /** Intersects [param polyline] with [param polygon] and returns an array of intersected polylines. This performs [constant OPERATION_INTERSECTION] between the polyline and the polygon. This operation can be thought of as chopping a line with a closed shape. */
        static intersectPolylineWithPolygon(polyline: PackedVector2Array | Vector2[], polygon: PackedVector2Array | Vector2[]): GArray
        
        /** Inflates or deflates [param polygon] by [param delta] units (pixels). If [param delta] is positive, makes the polygon grow outward. If [param delta] is negative, shrinks the polygon inward. Returns an array of polygons because inflating/deflating may result in multiple discrete polygons. Returns an empty array if [param delta] is negative and the absolute value of it approximately exceeds the minimum bounding rectangle dimensions of the polygon.  
         *  Each polygon's vertices will be rounded as determined by [param join_type], see [enum PolyJoinType].  
         *  The operation may result in an outer polygon (boundary) and inner polygon (hole) produced which could be distinguished by calling [method is_polygon_clockwise].  
         *      
         *  **Note:** To translate the polygon's vertices specifically, multiply them to a [Transform2D]:  
         *    
         */
        static offsetPolygon(polygon: PackedVector2Array | Vector2[], delta: float64, joinType?: Geometry2D.PolyJoinType /* = 0 */): GArray
        
        /** Inflates or deflates [param polyline] by [param delta] units (pixels), producing polygons. If [param delta] is positive, makes the polyline grow outward. Returns an array of polygons because inflating/deflating may result in multiple discrete polygons. If [param delta] is negative, returns an empty array.  
         *  Each polygon's vertices will be rounded as determined by [param join_type], see [enum PolyJoinType].  
         *  Each polygon's endpoints will be rounded as determined by [param end_type], see [enum PolyEndType].  
         *  The operation may result in an outer polygon (boundary) and inner polygon (hole) produced which could be distinguished by calling [method is_polygon_clockwise].  
         */
        static offsetPolyline(polyline: PackedVector2Array | Vector2[], delta: float64, joinType?: Geometry2D.PolyJoinType /* = 0 */, endType?: Geometry2D.PolyEndType /* = 3 */): GArray
        
        /** Given an array of [Vector2]s representing tiles, builds an atlas. The returned dictionary has two keys: `points` is a [PackedVector2Array] that specifies the positions of each tile, `size` contains the overall size of the whole atlas as [Vector2i]. */
        static makeAtlas(sizes: PackedVector2Array | Vector2[]): GDictionary
        
        /** Returns the [url=https://en.wikipedia.org/wiki/Bresenham%27s_line_algorithm]Bresenham line[/url] between the [param from] and [param to] points. A Bresenham line is a series of pixels that draws a line and is always 1-pixel thick on every row and column of the drawing (never more, never less).  
         *  Example code to draw a line between two [Marker2D] nodes using a series of [method CanvasItem.draw_rect] calls:  
         *    
         */
        static bresenhamLine(from: Vector2I, to: Vector2I): GArray
    }
    // _singleton_class_: Geometry3D
    /** Provides methods for some common 3D geometric operations.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_geometry3d.html  
     */
    class Geometry3D extends GObject {
        /** Calculates and returns all the vertex points of a convex shape defined by an array of [param planes]. */
        static computeConvexMeshPoints(planes: GArray): PackedVector3Array
        
        /** Returns an array with 6 [Plane]s that describe the sides of a box centered at the origin. The box size is defined by [param extents], which represents one (positive) corner of the box (i.e. half its actual size). */
        static buildBoxPlanes(extents: Vector3): GArray
        
        /** Returns an array of [Plane]s closely bounding a faceted cylinder centered at the origin with radius [param radius] and height [param height]. The parameter [param sides] defines how many planes will be generated for the round part of the cylinder. The parameter [param axis] describes the axis along which the cylinder is oriented (0 for X, 1 for Y, 2 for Z). */
        static buildCylinderPlanes(radius: float64, height: float64, sides: int64, axis?: Vector3.Axis /* = 2 */): GArray
        
        /** Returns an array of [Plane]s closely bounding a faceted capsule centered at the origin with radius [param radius] and height [param height]. The parameter [param sides] defines how many planes will be generated for the side part of the capsule, whereas [param lats] gives the number of latitudinal steps at the bottom and top of the capsule. The parameter [param axis] describes the axis along which the capsule is oriented (0 for X, 1 for Y, 2 for Z). */
        static buildCapsulePlanes(radius: float64, height: float64, sides: int64, lats: int64, axis?: Vector3.Axis /* = 2 */): GArray
        
        /** Given the two 3D segments ([param p1], [param p2]) and ([param q1], [param q2]), finds those two points on the two segments that are closest to each other. Returns a [PackedVector3Array] that contains this point on ([param p1], [param p2]) as well the accompanying point on ([param q1], [param q2]). */
        static getClosestPointsBetweenSegments(p1: Vector3, p2: Vector3, q1: Vector3, q2: Vector3): PackedVector3Array
        
        /** Returns the 3D point on the 3D segment ([param s1], [param s2]) that is closest to [param point]. The returned point will always be inside the specified segment. */
        static getClosestPointToSegment(point: Vector3, s1: Vector3, s2: Vector3): Vector3
        
        /** Returns the 3D point on the 3D line defined by ([param s1], [param s2]) that is closest to [param point]. The returned point can be inside the segment ([param s1], [param s2]) or outside of it, i.e. somewhere on the line extending from the segment. */
        static getClosestPointToSegmentUncapped(point: Vector3, s1: Vector3, s2: Vector3): Vector3
        
        /** Returns a [Vector3] containing weights based on how close a 3D position ([param point]) is to a triangle's different vertices ([param a], [param b] and [param c]). This is useful for interpolating between the data of different vertices in a triangle. One example use case is using this to smoothly rotate over a mesh instead of relying solely on face normals.  
         *  [url=https://en.wikipedia.org/wiki/Barycentric_coordinate_system]Here is a more detailed explanation of barycentric coordinates.[/url]  
         */
        static getTriangleBarycentricCoords(point: Vector3, a: Vector3, b: Vector3, c: Vector3): Vector3
        
        /** Tests if the 3D ray starting at [param from] with the direction of [param dir] intersects the triangle specified by [param a], [param b] and [param c]. If yes, returns the point of intersection as [Vector3]. If no intersection takes place, returns `null`. */
        static rayIntersectsTriangle(from: Vector3, dir: Vector3, a: Vector3, b: Vector3, c: Vector3): any
        
        /** Tests if the segment ([param from], [param to]) intersects the triangle [param a], [param b], [param c]. If yes, returns the point of intersection as [Vector3]. If no intersection takes place, returns `null`. */
        static segmentIntersectsTriangle(from: Vector3, to: Vector3, a: Vector3, b: Vector3, c: Vector3): any
        
        /** Checks if the segment ([param from], [param to]) intersects the sphere that is located at [param sphere_position] and has radius [param sphere_radius]. If no, returns an empty [PackedVector3Array]. If yes, returns a [PackedVector3Array] containing the point of intersection and the sphere's normal at the point of intersection. */
        static segmentIntersectsSphere(from: Vector3, to: Vector3, spherePosition: Vector3, sphereRadius: float64): PackedVector3Array
        
        /** Checks if the segment ([param from], [param to]) intersects the cylinder with height [param height] that is centered at the origin and has radius [param radius]. If no, returns an empty [PackedVector3Array]. If an intersection takes place, the returned array contains the point of intersection and the cylinder's normal at the point of intersection. */
        static segmentIntersectsCylinder(from: Vector3, to: Vector3, height: float64, radius: float64): PackedVector3Array
        
        /** Given a convex hull defined though the [Plane]s in the array [param planes], tests if the segment ([param from], [param to]) intersects with that hull. If an intersection is found, returns a [PackedVector3Array] containing the point the intersection and the hull's normal. Otherwise, returns an empty array. */
        static segmentIntersectsConvex(from: Vector3, to: Vector3, planes: GArray): PackedVector3Array
        
        /** Clips the polygon defined by the points in [param points] against the [param plane] and returns the points of the clipped polygon. */
        static clipPolygon(points: PackedVector3Array | Vector3[], plane: Plane): PackedVector3Array
        
        /** Tetrahedralizes the volume specified by a discrete set of [param points] in 3D space, ensuring that no point lies within the circumsphere of any resulting tetrahedron. The method returns a [PackedInt32Array] where each tetrahedron consists of four consecutive point indices into the [param points] array (resulting in an array with `n * 4` elements, where `n` is the number of tetrahedra found). If the tetrahedralization is unsuccessful, an empty [PackedInt32Array] is returned. */
        static tetrahedralizeDelaunay(points: PackedVector3Array | Vector3[]): PackedInt32Array
    }
    // _singleton_class_: ResourceLoader
    namespace ResourceLoader {
        enum ThreadLoadStatus {
            ThreadLoadInvalidResource = 0,
            ThreadLoadInProgress = 1,
            ThreadLoadFailed = 2,
            ThreadLoadLoaded = 3,
        }
        enum CacheMode {
            CacheModeIgnore = 0,
            CacheModeReuse = 1,
            CacheModeReplace = 2,
            CacheModeIgnoreDeep = 3,
            CacheModeReplaceDeep = 4,
        }
    }
    /** A singleton for loading resource files.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_resourceloader.html  
     */
    class ResourceLoader extends GObject {
        /** The resource is invalid, or has not been loaded with [method load_threaded_request]. */
        static readonly THREAD_LOAD_INVALID_RESOURCE = 0
        
        /** The resource is still being loaded. */
        static readonly THREAD_LOAD_IN_PROGRESS = 1
        
        /** Some error occurred during loading and it failed. */
        static readonly THREAD_LOAD_FAILED = 2
        
        /** The resource was loaded successfully and can be accessed via [method load_threaded_get]. */
        static readonly THREAD_LOAD_LOADED = 3
        
        /** Neither the main resource (the one requested to be loaded) nor any of its subresources are retrieved from cache nor stored into it. Dependencies (external resources) are loaded with [constant CACHE_MODE_REUSE]. */
        static readonly CACHE_MODE_IGNORE = 0
        
        /** The main resource (the one requested to be loaded), its subresources, and its dependencies (external resources) are retrieved from cache if present, instead of loaded. Those not cached are loaded and then stored into the cache. The same rules are propagated recursively down the tree of dependencies (external resources). */
        static readonly CACHE_MODE_REUSE = 1
        
        /** Like [constant CACHE_MODE_REUSE], but the cache is checked for the main resource (the one requested to be loaded) as well as for each of its subresources. Those already in the cache, as long as the loaded and cached types match, have their data refreshed from storage into the already existing instances. Otherwise, they are recreated as completely new objects. */
        static readonly CACHE_MODE_REPLACE = 2
        
        /** Like [constant CACHE_MODE_IGNORE], but propagated recursively down the tree of dependencies (external resources). */
        static readonly CACHE_MODE_IGNORE_DEEP = 3
        
        /** Like [constant CACHE_MODE_REPLACE], but propagated recursively down the tree of dependencies (external resources). */
        static readonly CACHE_MODE_REPLACE_DEEP = 4
        
        /** Loads the resource using threads. If [param use_sub_threads] is `true`, multiple threads will be used to load the resource, which makes loading faster, but may affect the main thread (and thus cause game slowdowns).  
         *  The [param cache_mode] property defines whether and how the cache should be used or updated when loading the resource. See [enum CacheMode] for details.  
         */
        static loadThreadedRequest(path: string, typeHint?: string /* = '' */, useSubThreads?: boolean /* = false */, cacheMode?: ResourceLoader.CacheMode /* = 1 */): GError
        
        /** Returns the status of a threaded loading operation started with [method load_threaded_request] for the resource at [param path]. See [enum ThreadLoadStatus] for possible return values.  
         *  An array variable can optionally be passed via [param progress], and will return a one-element array containing the ratio of completion of the threaded loading (between `0.0` and `1.0`).  
         *      
         *  **Note:** The recommended way of using this method is to call it during different frames (e.g., in [method Node._process], instead of a loop).  
         */
        static loadThreadedGetStatus(path: string, progress?: GArray /* = [] */): ResourceLoader.ThreadLoadStatus
        
        /** Returns the resource loaded by [method load_threaded_request].  
         *  If this is called before the loading thread is done (i.e. [method load_threaded_get_status] is not [constant THREAD_LOAD_LOADED]), the calling thread will be blocked until the resource has finished loading. However, it's recommended to use [method load_threaded_get_status] to known when the load has actually completed.  
         */
        static loadThreadedGet<Path extends keyof ResourceTypes>(path: Path): ResourceTypes[Path]
        static loadThreadedGet(path: string): Resource
        
        /** Loads a resource at the given [param path], caching the result for further access.  
         *  The registered [ResourceFormatLoader]s are queried sequentially to find the first one which can handle the file's extension, and then attempt loading. If loading fails, the remaining ResourceFormatLoaders are also attempted.  
         *  An optional [param type_hint] can be used to further specify the [Resource] type that should be handled by the [ResourceFormatLoader]. Anything that inherits from [Resource] can be used as a type hint, for example [Image].  
         *  The [param cache_mode] property defines whether and how the cache should be used or updated when loading the resource. See [enum CacheMode] for details.  
         *  Returns an empty resource if no [ResourceFormatLoader] could handle the file, and prints an error if no file is found at the specified path.  
         *  GDScript has a simplified [method @GDScript.load] built-in method which can be used in most situations, leaving the use of [ResourceLoader] for more advanced scenarios.  
         *      
         *  **Note:** If [member ProjectSettings.editor/export/convert_text_resources_to_binary] is `true`, [method @GDScript.load] will not be able to read converted files in an exported project. If you rely on run-time loading of files present within the PCK, set [member ProjectSettings.editor/export/convert_text_resources_to_binary] to `false`.  
         *      
         *  **Note:** Relative paths will be prefixed with `"res://"` before loading, to avoid unexpected results make sure your paths are absolute.  
         */
        static load<Path extends keyof ResourceTypes>(path: Path, typeHint?: string /* = "" */, cacheMode?: ResourceLoader.CacheMode /* = 1 */): ResourceTypes[Path]
        static load(path: string, typeHint?: string /* = "" */, cacheMode?: ResourceLoader.CacheMode /* = 1 */): Resource
        
        /** Returns the list of recognized extensions for a resource type. */
        static getRecognizedExtensionsForType(type: string): PackedStringArray
        
        /** Registers a new [ResourceFormatLoader]. The ResourceLoader will use the ResourceFormatLoader as described in [method load].  
         *  This method is performed implicitly for ResourceFormatLoaders written in GDScript (see [ResourceFormatLoader] for more information).  
         */
        static addResourceFormatLoader(formatLoader: ResourceFormatLoader, atFront?: boolean /* = false */): void
        
        /** Unregisters the given [ResourceFormatLoader]. */
        static removeResourceFormatLoader(formatLoader: ResourceFormatLoader): void
        
        /** Changes the behavior on missing sub-resources. The default behavior is to abort loading. */
        static setAbortOnMissingResources(abort: boolean): void
        
        /** Returns the dependencies for the resource at the given [param path].  
         *      
         *  **Note:** The dependencies are returned with slices separated by `::`. You can use [method String.get_slice] to get their components.  
         *    
         */
        static getDependencies(path: string): PackedStringArray
        
        /** Returns whether a cached resource is available for the given [param path].  
         *  Once a resource has been loaded by the engine, it is cached in memory for faster access, and future calls to the [method load] method will use the cached version. The cached resource can be overridden by using [method Resource.take_over_path] on a new resource for that same path.  
         */
        static hasCached(path: string): boolean
        
        /** Returns the cached resource reference for the given [param path].  
         *      
         *  **Note:** If the resource is not cached, the returned [Resource] will be invalid.  
         */
        static getCachedRef(path: string): null | Resource
        
        /** Returns whether a recognized resource exists for the given [param path].  
         *  An optional [param type_hint] can be used to further specify the [Resource] type that should be handled by the [ResourceFormatLoader]. Anything that inherits from [Resource] can be used as a type hint, for example [Image].  
         *      
         *  **Note:** If you use [method Resource.take_over_path], this method will return `true` for the taken path even if the resource wasn't saved (i.e. exists only in resource cache).  
         */
        static exists(path: string, typeHint?: string /* = '' */): boolean
        
        /** Returns the ID associated with a given resource path, or `-1` when no such ID exists. */
        static getResourceUid(path: string): int64
        
        /** Lists a directory, returning all resources and subdirectories contained within. The resource files have the original file names as visible in the editor before exporting. The directories have `"/"` appended.  
         *    
         *      
         *  **Note:** The order of files and directories returned by this method is not deterministic, and can vary between operating systems.  
         *      
         *  **Note:** To normally traverse the filesystem, see [DirAccess].  
         */
        static listDirectory(directoryPath: string): PackedStringArray
    }
    // _singleton_class_: ResourceSaver
    namespace ResourceSaver {
        enum SaverFlags {
            FlagNone = 0,
            FlagRelativePaths = 1,
            FlagBundleResources = 2,
            FlagChangePath = 4,
            FlagOmitEditorProperties = 8,
            FlagSaveBigEndian = 16,
            FlagCompress = 32,
            FlagReplaceSubresourcePaths = 64,
        }
    }
    /** A singleton for saving [Resource]s to the filesystem.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_resourcesaver.html  
     */
    class ResourceSaver extends GObject {
        /** No resource saving option. */
        static readonly FLAG_NONE = 0
        
        /** Save the resource with a path relative to the scene which uses it. */
        static readonly FLAG_RELATIVE_PATHS = 1
        
        /** Bundles external resources. */
        static readonly FLAG_BUNDLE_RESOURCES = 2
        
        /** Changes the [member Resource.resource_path] of the saved resource to match its new location. */
        static readonly FLAG_CHANGE_PATH = 4
        
        /** Do not save editor-specific metadata (identified by their `__editor` prefix). */
        static readonly FLAG_OMIT_EDITOR_PROPERTIES = 8
        
        /** Save as big endian (see [member FileAccess.big_endian]). */
        static readonly FLAG_SAVE_BIG_ENDIAN = 16
        
        /** Compress the resource on save using [constant FileAccess.COMPRESSION_ZSTD]. Only available for binary resource types. */
        static readonly FLAG_COMPRESS = 32
        
        /** Take over the paths of the saved subresources (see [method Resource.take_over_path]). */
        static readonly FLAG_REPLACE_SUBRESOURCE_PATHS = 64
        
        /** Saves a resource to disk to the given path, using a [ResourceFormatSaver] that recognizes the resource object. If [param path] is empty, [ResourceSaver] will try to use [member Resource.resource_path].  
         *  The [param flags] bitmask can be specified to customize the save behavior using [enum SaverFlags] flags.  
         *  Returns [constant OK] on success.  
         *      
         *  **Note:** When the project is running, any generated UID associated with the resource will not be saved as the required code is only executed in editor mode.  
         */
        static save(resource: Resource, path?: string /* = '' */, flags?: ResourceSaver.SaverFlags /* = 0 */): GError
        
        /** Sets the UID of the given [param resource] path to [param uid]. You can generate a new UID using [method ResourceUID.create_id].  
         *  Since resources will normally get a UID automatically, this method is only useful in very specific cases.  
         */
        static setUid(resource: string, uid: int64): GError
        
        /** Returns the list of extensions available for saving a resource of a given type. */
        static getRecognizedExtensions(type: Resource): PackedStringArray
        
        /** Registers a new [ResourceFormatSaver]. The ResourceSaver will use the ResourceFormatSaver as described in [method save].  
         *  This method is performed implicitly for ResourceFormatSavers written in GDScript (see [ResourceFormatSaver] for more information).  
         */
        static addResourceFormatSaver(formatSaver: ResourceFormatSaver, atFront?: boolean /* = false */): void
        
        /** Unregisters the given [ResourceFormatSaver]. */
        static removeResourceFormatSaver(formatSaver: ResourceFormatSaver): void
        
        /** Returns the resource ID for the given path. If [param generate] is `true`, a new resource ID will be generated if one for the path is not found. If [param generate] is `false` and the path is not found, [constant ResourceUID.INVALID_ID] is returned. */
        static getResourceIdForPath(path: string, generate?: boolean /* = false */): int64
    }
    // _singleton_class_: ClassDB
    namespace ClassDB {
        enum ApiType {
            ApiCore = 0,
            ApiEditor = 1,
            ApiExtension = 2,
            ApiEditorExtension = 3,
            ApiNone = 4,
        }
    }
    /** A class information repository.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_classdb.html  
     */
    class ClassDB extends GObject {
        /** Native Core class type. */
        static readonly API_CORE = 0
        
        /** Native Editor class type. */
        static readonly API_EDITOR = 1
        
        /** GDExtension class type. */
        static readonly API_EXTENSION = 2
        
        /** GDExtension Editor class type. */
        static readonly API_EDITOR_EXTENSION = 3
        
        /** Unknown class type. */
        static readonly API_NONE = 4
        
        /** Returns the names of all the classes available. */
        static getClassList(): PackedStringArray
        
        /** Returns the names of all the classes that directly or indirectly inherit from [param class]. */
        static getInheritersFromClass(class_: StringName): PackedStringArray
        
        /** Returns the parent class of [param class]. */
        static getParentClass(class_: StringName): StringName
        
        /** Returns whether the specified [param class] is available or not. */
        static classExists(class_: StringName): boolean
        
        /** Returns whether [param inherits] is an ancestor of [param class] or not. */
        static isParentClass(class_: StringName, inherits: StringName): boolean
        
        /** Returns `true` if objects can be instantiated from the specified [param class], otherwise returns `false`. */
        static canInstantiate(class_: StringName): boolean
        
        /** Creates an instance of [param class]. */
        static instantiate(class_: StringName): any
        
        /** Returns the API type of [param class]. See [enum APIType]. */
        static classGetApiType(class_: StringName): any /*ClassDb.apiType*/
        
        /** Returns whether [param class] or its ancestry has a signal called [param signal] or not. */
        static classHasSignal(class_: StringName, signal: StringName): boolean
        
        /** Returns the [param signal] data of [param class] or its ancestry. The returned value is a [Dictionary] with the following keys: `args`, `default_args`, `flags`, `id`, `name`, `return: (class_name, hint, hint_string, name, type, usage)`. */
        static classGetSignal(class_: StringName, signal: StringName): GDictionary
        
        /** Returns an array with all the signals of [param class] or its ancestry if [param no_inheritance] is `false`. Every element of the array is a [Dictionary] as described in [method class_get_signal]. */
        static classGetSignalList(class_: StringName, noInheritance?: boolean /* = false */): GArray
        
        /** Returns an array with all the properties of [param class] or its ancestry if [param no_inheritance] is `false`. */
        static classGetPropertyList(class_: StringName, noInheritance?: boolean /* = false */): GArray
        
        /** Returns the getter method name of [param property] of [param class]. */
        static classGetPropertyGetter(class_: StringName, property: StringName): StringName
        
        /** Returns the setter method name of [param property] of [param class]. */
        static classGetPropertySetter(class_: StringName, property: StringName): StringName
        
        /** Returns the value of [param property] of [param object] or its ancestry. */
        static classGetProperty(object: GObject, property: StringName): any
        
        /** Sets [param property] value of [param object] to [param value]. */
        static classSetProperty(object: GObject, property: StringName, value: any): GError
        
        /** Returns the default value of [param property] of [param class] or its ancestor classes. */
        static classGetPropertyDefaultValue(class_: StringName, property: StringName): any
        
        /** Returns whether [param class] (or its ancestry if [param no_inheritance] is `false`) has a method called [param method] or not. */
        static classHasMethod(class_: StringName, method: StringName, noInheritance?: boolean /* = false */): boolean
        
        /** Returns the number of arguments of the method [param method] of [param class] or its ancestry if [param no_inheritance] is `false`. */
        static classGetMethodArgumentCount(class_: StringName, method: StringName, noInheritance?: boolean /* = false */): int64
        
        /** Returns an array with all the methods of [param class] or its ancestry if [param no_inheritance] is `false`. Every element of the array is a [Dictionary] with the following keys: `args`, `default_args`, `flags`, `id`, `name`, `return: (class_name, hint, hint_string, name, type, usage)`.  
         *      
         *  **Note:** In exported release builds the debug info is not available, so the returned dictionaries will contain only method names.  
         */
        static classGetMethodList(class_: StringName, noInheritance?: boolean /* = false */): GArray
        
        /** Calls a static method on a class. */
        static classCallStatic(class_: StringName, method: StringName, ...varargs: any[]): any
        
        /** Returns an array with the names all the integer constants of [param class] or its ancestry. */
        static classGetIntegerConstantList(class_: StringName, noInheritance?: boolean /* = false */): PackedStringArray
        
        /** Returns whether [param class] or its ancestry has an integer constant called [param name] or not. */
        static classHasIntegerConstant(class_: StringName, name: StringName): boolean
        
        /** Returns the value of the integer constant [param name] of [param class] or its ancestry. Always returns 0 when the constant could not be found. */
        static classGetIntegerConstant(class_: StringName, name: StringName): int64
        
        /** Returns whether [param class] or its ancestry has an enum called [param name] or not. */
        static classHasEnum(class_: StringName, name: StringName, noInheritance?: boolean /* = false */): boolean
        
        /** Returns an array with all the enums of [param class] or its ancestry. */
        static classGetEnumList(class_: StringName, noInheritance?: boolean /* = false */): PackedStringArray
        
        /** Returns an array with all the keys in [param enum] of [param class] or its ancestry. */
        static classGetEnumConstants(class_: StringName, enum_: StringName, noInheritance?: boolean /* = false */): PackedStringArray
        
        /** Returns which enum the integer constant [param name] of [param class] or its ancestry belongs to. */
        static classGetIntegerConstantEnum(class_: StringName, name: StringName, noInheritance?: boolean /* = false */): StringName
        
        /** Returns whether [param class] (or its ancestor classes if [param no_inheritance] is `false`) has an enum called [param enum] that is a bitfield. */
        static isClassEnumBitfield(class_: StringName, enum_: StringName, noInheritance?: boolean /* = false */): boolean
        
        /** Returns whether this [param class] is enabled or not. */
        static isClassEnabled(class_: StringName): boolean
    }
    // _singleton_class_: Marshalls
    /** Data transformation (marshaling) and encoding helpers.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_marshalls.html  
     */
    class Marshalls extends GObject {
        /** Returns a Base64-encoded string of the [Variant] [param variant]. If [param full_objects] is `true`, encoding objects is allowed (and can potentially include code).  
         *  Internally, this uses the same encoding mechanism as the [method @GlobalScope.var_to_bytes] method.  
         */
        static variantToBase64(variant: any, fullObjects?: boolean /* = false */): string
        
        /** Returns a decoded [Variant] corresponding to the Base64-encoded string [param base64_str]. If [param allow_objects] is `true`, decoding objects is allowed.  
         *  Internally, this uses the same decoding mechanism as the [method @GlobalScope.bytes_to_var] method.  
         *  **Warning:** Deserialized objects can contain code which gets executed. Do not use this option if the serialized object comes from untrusted sources to avoid potential security threats such as remote code execution.  
         */
        static base64ToVariant(base64Str: string, allowObjects?: boolean /* = false */): any
        
        /** Returns a Base64-encoded string of a given [PackedByteArray]. */
        static rawToBase64(array: PackedByteArray | byte[] | ArrayBuffer): string
        
        /** Returns a decoded [PackedByteArray] corresponding to the Base64-encoded string [param base64_str]. */
        static base64ToRaw(base64Str: string): PackedByteArray
        
        /** Returns a Base64-encoded string of the UTF-8 string [param utf8_str]. */
        static utf8ToBase64(utf8Str: string): string
        
        /** Returns a decoded string corresponding to the Base64-encoded string [param base64_str]. */
        static base64ToUtf8(base64Str: string): string
    }
    // _singleton_class_: TranslationServer
    /** The server responsible for language translations.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_translationserver.html  
     */
    class TranslationServer extends GObject {
        /** Sets the locale of the project. The [param locale] string will be standardized to match known locales (e.g. `en-US` would be matched to `en_US`).  
         *  If translations have been loaded beforehand for the new locale, they will be applied.  
         */
        static setLocale(locale: string): void
        
        /** Returns the current locale of the project.  
         *  See also [method OS.get_locale] and [method OS.get_locale_language] to query the locale of the user system.  
         */
        static getLocale(): string
        
        /** Returns the current locale of the editor.  
         *      
         *  **Note:** When called from an exported project returns the same value as [method get_locale].  
         */
        static getToolLocale(): string
        
        /** Compares two locales and returns a similarity score between `0` (no match) and `10` (full match). */
        static compareLocales(localeA: string, localeB: string): int64
        
        /** Returns a [param locale] string standardized to match known locales (e.g. `en-US` would be matched to `en_US`). If [param add_defaults] is `true`, the locale may have a default script or country added. */
        static standardizeLocale(locale: string, addDefaults?: boolean /* = false */): string
        
        /** Returns array of known language codes. */
        static getAllLanguages(): PackedStringArray
        
        /** Returns a readable language name for the [param language] code. */
        static getLanguageName(language: string): string
        
        /** Returns an array of known script codes. */
        static getAllScripts(): PackedStringArray
        
        /** Returns a readable script name for the [param script] code. */
        static getScriptName(script: string): string
        
        /** Returns an array of known country codes. */
        static getAllCountries(): PackedStringArray
        
        /** Returns a readable country name for the [param country] code. */
        static getCountryName(country: string): string
        
        /** Returns a locale's language and its variant (e.g. `"en_US"` would return `"English (United States)"`). */
        static getLocaleName(locale: string): string
        
        /** Returns the current locale's translation for the given message and context.  
         *      
         *  **Note:** This method always uses the main translation domain.  
         */
        static translate(message: StringName, context?: StringName /* = '' */): StringName
        
        /** Returns the current locale's translation for the given message, plural message and context.  
         *  The number [param n] is the number or quantity of the plural object. It will be used to guide the translation system to fetch the correct plural form for the selected language.  
         *      
         *  **Note:** This method always uses the main translation domain.  
         */
        static translatePlural(message: StringName, pluralMessage: StringName, n: int64, context?: StringName /* = '' */): StringName
        
        /** Adds a translation to the main translation domain. */
        static addTranslation(translation: Translation): void
        
        /** Removes the given translation from the main translation domain. */
        static removeTranslation(translation: Translation): void
        
        /** Returns the [Translation] instance that best matches [param locale] in the main translation domain. Returns `null` if there are no matches. */
        static getTranslationObject(locale: string): null | Translation
        
        /** Returns `true` if a translation domain with the specified name exists. */
        static hasDomain(domain: StringName): boolean
        
        /** Returns the translation domain with the specified name. An empty translation domain will be created and added if it does not exist. */
        static getOrAddDomain(domain: StringName): null | TranslationDomain
        
        /** Removes the translation domain with the specified name.  
         *      
         *  **Note:** Trying to remove the main translation domain is an error.  
         */
        static removeDomain(domain: StringName): void
        
        /** Removes all translations from the main translation domain. */
        static clear(): void
        
        /** Returns an array of all loaded locales of the project. */
        static getLoadedLocales(): PackedStringArray
        
        /** Reparses the pseudolocalization options and reloads the translation for the main translation domain. */
        static reloadPseudolocalization(): void
        
        /** Returns the pseudolocalized string based on the [param message] passed in.  
         *      
         *  **Note:** This method always uses the main translation domain.  
         */
        static pseudolocalize(message: StringName): StringName
        
        /** If `true`, enables the use of pseudolocalization on the main translation domain. See [member ProjectSettings.internationalization/pseudolocalization/use_pseudolocalization] for details. */
        get pseudolocalizationEnabled(): boolean
        set pseudolocalizationEnabled(value: boolean)
    }
    // _singleton_class_: Input
    namespace Input {
        enum MouseMode {
            MouseModeVisible = 0,
            MouseModeHidden = 1,
            MouseModeCaptured = 2,
            MouseModeConfined = 3,
            MouseModeConfinedHidden = 4,
            MouseModeMax = 5,
        }
        enum CursorShape {
            CursorArrow = 0,
            CursorIbeam = 1,
            CursorPointingHand = 2,
            CursorCross = 3,
            CursorWait = 4,
            CursorBusy = 5,
            CursorDrag = 6,
            CursorCanDrop = 7,
            CursorForbidden = 8,
            CursorVsize = 9,
            CursorHsize = 10,
            CursorBdiagsize = 11,
            CursorFdiagsize = 12,
            CursorMove = 13,
            CursorVsplit = 14,
            CursorHsplit = 15,
            CursorHelp = 16,
        }
    }
    /** A singleton for handling inputs.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_input.html  
     */
    class Input extends GObject {
        /** Makes the mouse cursor visible if it is hidden. */
        static readonly MOUSE_MODE_VISIBLE = 0
        
        /** Makes the mouse cursor hidden if it is visible. */
        static readonly MOUSE_MODE_HIDDEN = 1
        
        /** Captures the mouse. The mouse will be hidden and its position locked at the center of the window manager's window.  
         *      
         *  **Note:** If you want to process the mouse's movement in this mode, you need to use [member InputEventMouseMotion.relative].  
         */
        static readonly MOUSE_MODE_CAPTURED = 2
        
        /** Confines the mouse cursor to the game window, and make it visible. */
        static readonly MOUSE_MODE_CONFINED = 3
        
        /** Confines the mouse cursor to the game window, and make it hidden. */
        static readonly MOUSE_MODE_CONFINED_HIDDEN = 4
        
        /** Max value of the [enum MouseMode]. */
        static readonly MOUSE_MODE_MAX = 5
        
        /** Arrow cursor. Standard, default pointing cursor. */
        static readonly CURSOR_ARROW = 0
        
        /** I-beam cursor. Usually used to show where the text cursor will appear when the mouse is clicked. */
        static readonly CURSOR_IBEAM = 1
        
        /** Pointing hand cursor. Usually used to indicate the pointer is over a link or other interactable item. */
        static readonly CURSOR_POINTING_HAND = 2
        
        /** Cross cursor. Typically appears over regions in which a drawing operation can be performed or for selections. */
        static readonly CURSOR_CROSS = 3
        
        /** Wait cursor. Indicates that the application is busy performing an operation, and that it cannot be used during the operation (e.g. something is blocking its main thread). */
        static readonly CURSOR_WAIT = 4
        
        /** Busy cursor. Indicates that the application is busy performing an operation, and that it is still usable during the operation. */
        static readonly CURSOR_BUSY = 5
        
        /** Drag cursor. Usually displayed when dragging something.  
         *      
         *  **Note:** Windows lacks a dragging cursor, so [constant CURSOR_DRAG] is the same as [constant CURSOR_MOVE] for this platform.  
         */
        static readonly CURSOR_DRAG = 6
        
        /** Can drop cursor. Usually displayed when dragging something to indicate that it can be dropped at the current position. */
        static readonly CURSOR_CAN_DROP = 7
        
        /** Forbidden cursor. Indicates that the current action is forbidden (for example, when dragging something) or that the control at a position is disabled. */
        static readonly CURSOR_FORBIDDEN = 8
        
        /** Vertical resize mouse cursor. A double-headed vertical arrow. It tells the user they can resize the window or the panel vertically. */
        static readonly CURSOR_VSIZE = 9
        
        /** Horizontal resize mouse cursor. A double-headed horizontal arrow. It tells the user they can resize the window or the panel horizontally. */
        static readonly CURSOR_HSIZE = 10
        
        /** Window resize mouse cursor. The cursor is a double-headed arrow that goes from the bottom left to the top right. It tells the user they can resize the window or the panel both horizontally and vertically. */
        static readonly CURSOR_BDIAGSIZE = 11
        
        /** Window resize mouse cursor. The cursor is a double-headed arrow that goes from the top left to the bottom right, the opposite of [constant CURSOR_BDIAGSIZE]. It tells the user they can resize the window or the panel both horizontally and vertically. */
        static readonly CURSOR_FDIAGSIZE = 12
        
        /** Move cursor. Indicates that something can be moved. */
        static readonly CURSOR_MOVE = 13
        
        /** Vertical split mouse cursor. On Windows, it's the same as [constant CURSOR_VSIZE]. */
        static readonly CURSOR_VSPLIT = 14
        
        /** Horizontal split mouse cursor. On Windows, it's the same as [constant CURSOR_HSIZE]. */
        static readonly CURSOR_HSPLIT = 15
        
        /** Help cursor. Usually a question mark. */
        static readonly CURSOR_HELP = 16
        
        /** Returns `true` if any action, key, joypad button, or mouse button is being pressed. This will also return `true` if any action is simulated via code by calling [method action_press]. */
        static isAnythingPressed(): boolean
        
        /** Returns `true` if you are pressing the Latin key in the current keyboard layout. You can pass a [enum Key] constant.  
         *  [method is_key_pressed] is only recommended over [method is_physical_key_pressed] in non-game applications. This ensures that shortcut keys behave as expected depending on the user's keyboard layout, as keyboard shortcuts are generally dependent on the keyboard layout in non-game applications. If in doubt, use [method is_physical_key_pressed].  
         *      
         *  **Note:** Due to keyboard ghosting, [method is_key_pressed] may return `false` even if one of the action's keys is pressed. See [url=https://docs.godotengine.org/en/latest/tutorials/inputs/input_examples.html#keyboard-events]Input examples[/url] in the documentation for more information.  
         */
        static isKeyPressed(keycode: Key): boolean
        
        /** Returns `true` if you are pressing the key in the physical location on the 101/102-key US QWERTY keyboard. You can pass a [enum Key] constant.  
         *  [method is_physical_key_pressed] is recommended over [method is_key_pressed] for in-game actions, as it will make [kbd]W[/kbd]/[kbd]A[/kbd]/[kbd]S[/kbd]/[kbd]D[/kbd] layouts work regardless of the user's keyboard layout. [method is_physical_key_pressed] will also ensure that the top row number keys work on any keyboard layout. If in doubt, use [method is_physical_key_pressed].  
         *      
         *  **Note:** Due to keyboard ghosting, [method is_physical_key_pressed] may return `false` even if one of the action's keys is pressed. See [url=https://docs.godotengine.org/en/latest/tutorials/inputs/input_examples.html#keyboard-events]Input examples[/url] in the documentation for more information.  
         */
        static isPhysicalKeyPressed(keycode: Key): boolean
        
        /** Returns `true` if you are pressing the key with the [param keycode] printed on it. You can pass a [enum Key] constant or any Unicode character code. */
        static isKeyLabelPressed(keycode: Key): boolean
        
        /** Returns `true` if you are pressing the mouse button specified with [enum MouseButton]. */
        static isMouseButtonPressed(button: MouseButton): boolean
        
        /** Returns `true` if you are pressing the joypad button (see [enum JoyButton]). */
        static isJoyButtonPressed(device: int64, button: JoyButton): boolean
        
        /** Returns `true` if you are pressing the action event.  
         *  If [param exact_match] is `false`, it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.  
         *      
         *  **Note:** Due to keyboard ghosting, [method is_action_pressed] may return `false` even if one of the action's keys is pressed. See [url=https://docs.godotengine.org/en/latest/tutorials/inputs/input_examples.html#keyboard-events]Input examples[/url] in the documentation for more information.  
         */
        static isActionPressed(action: InputActionName, exactMatch?: boolean /* = false */): boolean
        
        /** Returns `true` when the user has  *started*  pressing the action event in the current frame or physics tick. It will only return `true` on the frame or tick that the user pressed down the button.  
         *  This is useful for code that needs to run only once when an action is pressed, instead of every frame while it's pressed.  
         *  If [param exact_match] is `false`, it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.  
         *      
         *  **Note:** Returning `true` does not imply that the action is  *still*  pressed. An action can be pressed and released again rapidly, and `true` will still be returned so as not to miss input.  
         *      
         *  **Note:** Due to keyboard ghosting, [method is_action_just_pressed] may return `false` even if one of the action's keys is pressed. See [url=https://docs.godotengine.org/en/latest/tutorials/inputs/input_examples.html#keyboard-events]Input examples[/url] in the documentation for more information.  
         *      
         *  **Note:** During input handling (e.g. [method Node._input]), use [method InputEvent.is_action_pressed] instead to query the action state of the current event.  
         */
        static isActionJustPressed(action: InputActionName, exactMatch?: boolean /* = false */): boolean
        
        /** Returns `true` when the user  *stops*  pressing the action event in the current frame or physics tick. It will only return `true` on the frame or tick that the user releases the button.  
         *      
         *  **Note:** Returning `true` does not imply that the action is  *still*  not pressed. An action can be released and pressed again rapidly, and `true` will still be returned so as not to miss input.  
         *  If [param exact_match] is `false`, it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.  
         *      
         *  **Note:** During input handling (e.g. [method Node._input]), use [method InputEvent.is_action_released] instead to query the action state of the current event.  
         */
        static isActionJustReleased(action: InputActionName, exactMatch?: boolean /* = false */): boolean
        
        /** Returns a value between 0 and 1 representing the intensity of the given action. In a joypad, for example, the further away the axis (analog sticks or L2, R2 triggers) is from the dead zone, the closer the value will be to 1. If the action is mapped to a control that has no axis such as the keyboard, the value returned will be 0 or 1.  
         *  If [param exact_match] is `false`, it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.  
         */
        static getActionStrength(action: InputActionName, exactMatch?: boolean /* = false */): float64
        
        /** Returns a value between 0 and 1 representing the raw intensity of the given action, ignoring the action's deadzone. In most cases, you should use [method get_action_strength] instead.  
         *  If [param exact_match] is `false`, it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.  
         */
        static getActionRawStrength(action: InputActionName, exactMatch?: boolean /* = false */): float64
        
        /** Get axis input by specifying two actions, one negative and one positive.  
         *  This is a shorthand for writing `Input.get_action_strength("positive_action") - Input.get_action_strength("negative_action")`.  
         */
        static getAxis(negativeAction: InputActionName, positiveAction: InputActionName): float64
        
        /** Gets an input vector by specifying four actions for the positive and negative X and Y axes.  
         *  This method is useful when getting vector input, such as from a joystick, directional pad, arrows, or WASD. The vector has its length limited to 1 and has a circular deadzone, which is useful for using vector input as movement.  
         *  By default, the deadzone is automatically calculated from the average of the action deadzones. However, you can override the deadzone to be whatever you want (on the range of 0 to 1).  
         */
        static getVector(negativeX: InputActionName, positiveX: InputActionName, negativeY: InputActionName, positiveY: InputActionName, deadzone?: float64 /* = -1 */): Vector2
        
        /** Adds a new mapping entry (in SDL2 format) to the mapping database. Optionally update already connected devices. */
        static addJoyMapping(mapping: string, updateExisting?: boolean /* = false */): void
        
        /** Removes all mappings from the internal database that match the given GUID. All currently connected joypads that use this GUID will become unmapped.  
         *  On Android, Godot will map to an internal fallback mapping.  
         */
        static removeJoyMapping(guid: string): void
        
        /** Returns `true` if the system knows the specified device. This means that it sets all button and axis indices. Unknown joypads are not expected to match these constants, but you can still retrieve events from them. */
        static isJoyKnown(device: int64): boolean
        
        /** Returns the current value of the joypad axis at given index (see [enum JoyAxis]). */
        static getJoyAxis(device: int64, axis: JoyAxis): float64
        
        /** Returns the name of the joypad at the specified device index, e.g. `PS4 Controller`. Godot uses the [url=https://github.com/gabomdq/SDL_GameControllerDB]SDL2 game controller database[/url] to determine gamepad names. */
        static getJoyName(device: int64): string
        
        /** Returns an SDL2-compatible device GUID on platforms that use gamepad remapping, e.g. `030000004c050000c405000000010000`. Returns an empty string if it cannot be found. Godot uses the [url=https://github.com/gabomdq/SDL_GameControllerDB]SDL2 game controller database[/url] to determine gamepad names and mappings based on this GUID.  
         *  On Windows, all XInput joypad GUIDs will be overridden by Godot to `__XINPUT_DEVICE__`, because their mappings are the same.  
         */
        static getJoyGuid(device: int64): string
        
        /** Returns a dictionary with extra platform-specific information about the device, e.g. the raw gamepad name from the OS or the Steam Input index.  
         *  On Windows, the dictionary contains the following fields:  
         *  `xinput_index`: The index of the controller in the XInput system. Undefined for DirectInput devices.  
         *  `vendor_id`: The USB vendor ID of the device.  
         *  `product_id`: The USB product ID of the device.  
         *  On Linux:  
         *  `raw_name`: The name of the controller as it came from the OS, before getting renamed by the godot controller database.  
         *  `vendor_id`: The USB vendor ID of the device.  
         *  `product_id`: The USB product ID of the device.  
         *  `steam_input_index`: The Steam Input gamepad index, if the device is not a Steam Input device this key won't be present.  
         *      
         *  **Note:** The returned dictionary is always empty on Web, iOS, Android, and macOS.  
         */
        static getJoyInfo(device: int64): GDictionary
        
        /** Queries whether an input device should be ignored or not. Devices can be ignored by setting the environment variable `SDL_GAMECONTROLLER_IGNORE_DEVICES`. Read the [url=https://wiki.libsdl.org/SDL2]SDL documentation[/url] for more information.  
         *      
         *  **Note:** Some 3rd party tools can contribute to the list of ignored devices. For example,  *SteamInput*  creates virtual devices from physical devices for remapping purposes. To avoid handling the same input device twice, the original device is added to the ignore list.  
         */
        static shouldIgnoreDevice(vendorId: int64, productId: int64): boolean
        
        /** Returns an [Array] containing the device IDs of all currently connected joypads. */
        static getConnectedJoypads(): GArray
        
        /** Returns the strength of the joypad vibration: x is the strength of the weak motor, and y is the strength of the strong motor. */
        static getJoyVibrationStrength(device: int64): Vector2
        
        /** Returns the duration of the current vibration effect in seconds. */
        static getJoyVibrationDuration(device: int64): float64
        
        /** Starts to vibrate the joypad. Joypads usually come with two rumble motors, a strong and a weak one. [param weak_magnitude] is the strength of the weak motor (between 0 and 1) and [param strong_magnitude] is the strength of the strong motor (between 0 and 1). [param duration] is the duration of the effect in seconds (a duration of 0 will try to play the vibration indefinitely). The vibration can be stopped early by calling [method stop_joy_vibration].  
         *      
         *  **Note:** Not every hardware is compatible with long effect durations; it is recommended to restart an effect if it has to be played for more than a few seconds.  
         *      
         *  **Note:** For macOS, vibration is only supported in macOS 11 and later.  
         */
        static startJoyVibration(device: int64, weakMagnitude: float64, strongMagnitude: float64, duration?: float64 /* = 0 */): void
        
        /** Stops the vibration of the joypad started with [method start_joy_vibration]. */
        static stopJoyVibration(device: int64): void
        
        /** Vibrate the handheld device for the specified duration in milliseconds.  
         *  [param amplitude] is the strength of the vibration, as a value between `0.0` and `1.0`. If set to `-1.0`, the default vibration strength of the device is used.  
         *      
         *  **Note:** This method is implemented on Android, iOS, and Web. It has no effect on other platforms.  
         *      
         *  **Note:** For Android, [method vibrate_handheld] requires enabling the `VIBRATE` permission in the export preset. Otherwise, [method vibrate_handheld] will have no effect.  
         *      
         *  **Note:** For iOS, specifying the duration is only supported in iOS 13 and later.  
         *      
         *  **Note:** For Web, the amplitude cannot be changed.  
         *      
         *  **Note:** Some web browsers such as Safari and Firefox for Android do not support [method vibrate_handheld].  
         */
        static vibrateHandheld(durationMs?: int64 /* = 500 */, amplitude?: float64 /* = -1 */): void
        
        /** Returns the gravity in m/s² of the device's accelerometer sensor, if the device has one. Otherwise, the method returns [constant Vector3.ZERO].  
         *      
         *  **Note:** This method only works on Android and iOS. On other platforms, it always returns [constant Vector3.ZERO].  
         *      
         *  **Note:** For Android, [member ProjectSettings.input_devices/sensors/enable_gravity] must be enabled.  
         */
        static getGravity(): Vector3
        
        /** Returns the acceleration in m/s² of the device's accelerometer sensor, if the device has one. Otherwise, the method returns [constant Vector3.ZERO].  
         *  Note this method returns an empty [Vector3] when running from the editor even when your device has an accelerometer. You must export your project to a supported device to read values from the accelerometer.  
         *      
         *  **Note:** This method only works on Android and iOS. On other platforms, it always returns [constant Vector3.ZERO].  
         *      
         *  **Note:** For Android, [member ProjectSettings.input_devices/sensors/enable_accelerometer] must be enabled.  
         */
        static getAccelerometer(): Vector3
        
        /** Returns the magnetic field strength in micro-Tesla for all axes of the device's magnetometer sensor, if the device has one. Otherwise, the method returns [constant Vector3.ZERO].  
         *      
         *  **Note:** This method only works on Android and iOS. On other platforms, it always returns [constant Vector3.ZERO].  
         *      
         *  **Note:** For Android, [member ProjectSettings.input_devices/sensors/enable_magnetometer] must be enabled.  
         */
        static getMagnetometer(): Vector3
        
        /** Returns the rotation rate in rad/s around a device's X, Y, and Z axes of the gyroscope sensor, if the device has one. Otherwise, the method returns [constant Vector3.ZERO].  
         *      
         *  **Note:** This method only works on Android and iOS. On other platforms, it always returns [constant Vector3.ZERO].  
         *      
         *  **Note:** For Android, [member ProjectSettings.input_devices/sensors/enable_gyroscope] must be enabled.  
         */
        static getGyroscope(): Vector3
        
        /** Sets the gravity value of the accelerometer sensor. Can be used for debugging on devices without a hardware sensor, for example in an editor on a PC.  
         *      
         *  **Note:** This value can be immediately overwritten by the hardware sensor value on Android and iOS.  
         */
        static setGravity(value: Vector3): void
        
        /** Sets the acceleration value of the accelerometer sensor. Can be used for debugging on devices without a hardware sensor, for example in an editor on a PC.  
         *      
         *  **Note:** This value can be immediately overwritten by the hardware sensor value on Android and iOS.  
         */
        static setAccelerometer(value: Vector3): void
        
        /** Sets the value of the magnetic field of the magnetometer sensor. Can be used for debugging on devices without a hardware sensor, for example in an editor on a PC.  
         *      
         *  **Note:** This value can be immediately overwritten by the hardware sensor value on Android and iOS.  
         */
        static setMagnetometer(value: Vector3): void
        
        /** Sets the value of the rotation rate of the gyroscope sensor. Can be used for debugging on devices without a hardware sensor, for example in an editor on a PC.  
         *      
         *  **Note:** This value can be immediately overwritten by the hardware sensor value on Android and iOS.  
         */
        static setGyroscope(value: Vector3): void
        
        /** Returns the last mouse velocity. To provide a precise and jitter-free velocity, mouse velocity is only calculated every 0.1s. Therefore, mouse velocity will lag mouse movements. */
        static getLastMouseVelocity(): Vector2
        
        /** Returns the last mouse velocity in screen coordinates. To provide a precise and jitter-free velocity, mouse velocity is only calculated every 0.1s. Therefore, mouse velocity will lag mouse movements. */
        static getLastMouseScreenVelocity(): Vector2
        
        /** Returns mouse buttons as a bitmask. If multiple mouse buttons are pressed at the same time, the bits are added together. Equivalent to [method DisplayServer.mouse_get_button_state]. */
        static getMouseButtonMask(): MouseButtonMask
        
        /** Sets the mouse position to the specified vector, provided in pixels and relative to an origin at the upper left corner of the currently focused Window Manager game window.  
         *  Mouse position is clipped to the limits of the screen resolution, or to the limits of the game window if [enum MouseMode] is set to [constant MOUSE_MODE_CONFINED] or [constant MOUSE_MODE_CONFINED_HIDDEN].  
         *      
         *  **Note:** [method warp_mouse] is only supported on Windows, macOS and Linux. It has no effect on Android, iOS and Web.  
         */
        static warpMouse(position: Vector2): void
        
        /** This will simulate pressing the specified action.  
         *  The strength can be used for non-boolean actions, it's ranged between 0 and 1 representing the intensity of the given action.  
         *      
         *  **Note:** This method will not cause any [method Node._input] calls. It is intended to be used with [method is_action_pressed] and [method is_action_just_pressed]. If you want to simulate `_input`, use [method parse_input_event] instead.  
         */
        static actionPress(action: InputActionName, strength?: float64 /* = 1 */): void
        
        /** If the specified action is already pressed, this will release it. */
        static actionRelease(action: InputActionName): void
        
        /** Sets the default cursor shape to be used in the viewport instead of [constant CURSOR_ARROW].  
         *      
         *  **Note:** If you want to change the default cursor shape for [Control]'s nodes, use [member Control.mouse_default_cursor_shape] instead.  
         *      
         *  **Note:** This method generates an [InputEventMouseMotion] to update cursor immediately.  
         */
        static setDefaultCursorShape(shape?: Input.CursorShape /* = 0 */): void
        
        /** Returns the currently assigned cursor shape (see [enum CursorShape]). */
        static getCurrentCursorShape(): Input.CursorShape
        
        /** Sets a custom mouse cursor image, which is only visible inside the game window. The hotspot can also be specified. Passing `null` to the image parameter resets to the system cursor. See [enum CursorShape] for the list of shapes.  
         *  [param image] can be either [Texture2D] or [Image] and its size must be lower than or equal to 256×256. To avoid rendering issues, sizes lower than or equal to 128×128 are recommended.  
         *  [param hotspot] must be within [param image]'s size.  
         *      
         *  **Note:** [AnimatedTexture]s aren't supported as custom mouse cursors. If using an [AnimatedTexture], only the first frame will be displayed.  
         *      
         *  **Note:** The **Lossless**, **Lossy** or **Uncompressed** compression modes are recommended. The **Video RAM** compression mode can be used, but it will be decompressed on the CPU, which means loading times are slowed down and no memory is saved compared to lossless modes.  
         *      
         *  **Note:** On the web platform, the maximum allowed cursor image size is 128×128. Cursor images larger than 32×32 will also only be displayed if the mouse cursor image is entirely located within the page for [url=https://chromestatus.com/feature/5825971391299584]security reasons[/url].  
         */
        static setCustomMouseCursor(image: Resource, shape?: Input.CursorShape /* = 0 */, hotspot?: Vector2 /* = Vector2.ZERO */): void
        
        /** Feeds an [InputEvent] to the game. Can be used to artificially trigger input events from code. Also generates [method Node._input] calls.  
         *    
         *      
         *  **Note:** Calling this function has no influence on the operating system. So for example sending an [InputEventMouseMotion] will not move the OS mouse cursor to the specified position (use [method warp_mouse] instead) and sending [kbd]Alt/Cmd + Tab[/kbd] as [InputEventKey] won't toggle between active windows.  
         */
        static parseInputEvent(event: InputEvent): void
        
        /** Sends all input events which are in the current buffer to the game loop. These events may have been buffered as a result of accumulated input ([member use_accumulated_input]) or agile input flushing ([member ProjectSettings.input_devices/buffering/agile_event_flushing]).  
         *  The engine will already do this itself at key execution points (at least once per frame). However, this can be useful in advanced cases where you want precise control over the timing of event handling.  
         */
        static flushBufferedEvents(): void
        
        /** Controls the mouse mode. See [enum MouseMode] for more information. */
        get mouseMode(): int64
        set mouseMode(value: int64)
        
        /** If `true`, similar input events sent by the operating system are accumulated. When input accumulation is enabled, all input events generated during a frame will be merged and emitted when the frame is done rendering. Therefore, this limits the number of input method calls per second to the rendering FPS.  
         *  Input accumulation can be disabled to get slightly more precise/reactive input at the cost of increased CPU usage. In applications where drawing freehand lines is required, input accumulation should generally be disabled while the user is drawing the line to get results that closely follow the actual input.  
         *      
         *  **Note:** Input accumulation is  *enabled*  by default.  
         */
        get useAccumulatedInput(): boolean
        set useAccumulatedInput(value: boolean)
        
        /** If `true`, sends mouse input events when tapping or swiping on the touchscreen. See also [member ProjectSettings.input_devices/pointing/emulate_mouse_from_touch]. */
        get emulateMouseFromTouch(): boolean
        set emulateMouseFromTouch(value: boolean)
        
        /** If `true`, sends touch input events when clicking or dragging the mouse. See also [member ProjectSettings.input_devices/pointing/emulate_touch_from_mouse]. */
        get emulateTouchFromMouse(): boolean
        set emulateTouchFromMouse(value: boolean)
        
        /** Emitted when a joypad device has been connected or disconnected. */
        static readonly joyConnectionChanged: Signal<(device: int64, connected: boolean) => void>
    }
    // _singleton_class_: InputMap
    /** A singleton that manages all [InputEventAction]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_inputmap.html  
     */
    class InputMap extends GObject {
        /** Returns `true` if the [InputMap] has a registered action with the given name. */
        static hasAction(action: StringName): boolean
        
        /** Returns an array of all actions in the [InputMap]. */
        static getActions(): GArray
        
        /** Adds an empty action to the [InputMap] with a configurable [param deadzone].  
         *  An [InputEvent] can then be added to this action with [method action_add_event].  
         */
        static addAction(action: StringName, deadzone?: float64 /* = 0.20000000298023224 */): void
        
        /** Removes an action from the [InputMap]. */
        static eraseAction(action: StringName): void
        
        /** Returns the human-readable description of the given action. */
        static getActionDescription(action: StringName): string
        
        /** Sets a deadzone value for the action. */
        static actionSetDeadzone(action: StringName, deadzone: float64): void
        
        /** Returns a deadzone value for the action. */
        static actionGetDeadzone(action: StringName): float64
        
        /** Adds an [InputEvent] to an action. This [InputEvent] will trigger the action. */
        static actionAddEvent(action: StringName, event: InputEvent): void
        
        /** Returns `true` if the action has the given [InputEvent] associated with it. */
        static actionHasEvent(action: StringName, event: InputEvent): boolean
        
        /** Removes an [InputEvent] from an action. */
        static actionEraseEvent(action: StringName, event: InputEvent): void
        
        /** Removes all events from an action. */
        static actionEraseEvents(action: StringName): void
        
        /** Returns an array of [InputEvent]s associated with a given action.  
         *      
         *  **Note:** When used in the editor (e.g. a tool script or [EditorPlugin]), this method will return events for the editor action. If you want to access your project's input binds from the editor, read the `input/*` settings from [ProjectSettings].  
         */
        static actionGetEvents(action: StringName): GArray
        
        /** Returns `true` if the given event is part of an existing action. This method ignores keyboard modifiers if the given [InputEvent] is not pressed (for proper release detection). See [method action_has_event] if you don't want this behavior.  
         *  If [param exact_match] is `false`, it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.  
         */
        static eventIsAction(event: InputEvent, action: StringName, exactMatch?: boolean /* = false */): boolean
        
        /** Clears all [InputEventAction] in the [InputMap] and load it anew from [ProjectSettings]. */
        static loadFromProjectSettings(): void
    }
    // _singleton_class_: EngineDebugger
    /** Exposes the internal debugger.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_enginedebugger.html  
     */
    class EngineDebugger extends GObject {
        /** Returns `true` if the debugger is active otherwise `false`. */
        static isActive(): boolean
        
        /** Registers a profiler with the given [param name]. See [EngineProfiler] for more information. */
        static registerProfiler(name: StringName, profiler: EngineProfiler): void
        
        /** Unregisters a profiler with given [param name]. */
        static unregisterProfiler(name: StringName): void
        
        /** Returns `true` if a profiler with the given name is present and active otherwise `false`. */
        static isProfiling(name: StringName): boolean
        
        /** Returns `true` if a profiler with the given name is present otherwise `false`. */
        static hasProfiler(name: StringName): boolean
        
        /** Calls the `add` callable of the profiler with given [param name] and [param data]. */
        static profilerAddFrameData(name: StringName, data: GArray): void
        
        /** Calls the `toggle` callable of the profiler with given [param name] and [param arguments]. Enables/Disables the same profiler depending on [param enable] argument. */
        static profilerEnable(name: StringName, enable: boolean, arguments_?: GArray /* = [] */): void
        
        /** Registers a message capture with given [param name]. If [param name] is "my_message" then messages starting with "my_message:" will be called with the given callable.  
         *  The callable must accept a message string and a data array as argument. The callable should return `true` if the message is recognized.  
         *      
         *  **Note:** The callable will receive the message with the prefix stripped, unlike [method EditorDebuggerPlugin._capture]. See the [EditorDebuggerPlugin] description for an example.  
         */
        static registerMessageCapture(name: StringName, callable: Callable): void
        
        /** Unregisters the message capture with given [param name]. */
        static unregisterMessageCapture(name: StringName): void
        
        /** Returns `true` if a capture with the given name is present otherwise `false`. */
        static hasCapture(name: StringName): boolean
        
        /** Forces a processing loop of debugger events. The purpose of this method is just processing events every now and then when the script might get too busy, so that bugs like infinite loops can be caught. */
        static linePoll(): void
        
        /** Sends a message with given [param message] and [param data] array. */
        static sendMessage(message: string, data: GArray): void
        
        /** Starts a debug break in script execution, optionally specifying whether the program can continue based on [param can_continue] and whether the break was due to a breakpoint. */
        static debug(canContinue?: boolean /* = true */, isErrorBreakpoint?: boolean /* = false */): void
        
        /** Starts a debug break in script execution, optionally specifying whether the program can continue based on [param can_continue] and whether the break was due to a breakpoint. */
        static scriptDebug(language: ScriptLanguage, canContinue?: boolean /* = true */, isErrorBreakpoint?: boolean /* = false */): void
        
        /** Sets the current debugging lines that remain. */
        static setLinesLeft(lines: int64): void
        
        /** Returns the number of lines that remain. */
        static getLinesLeft(): int64
        
        /** Sets the current debugging depth. */
        static setDepth(depth: int64): void
        
        /** Returns the current debug depth. */
        static getDepth(): int64
        
        /** Returns `true` if the given [param source] and [param line] represent an existing breakpoint. */
        static isBreakpoint(line: int64, source: StringName): boolean
        
        /** Returns `true` if the debugger is skipping breakpoints otherwise `false`. */
        static isSkippingBreakpoints(): boolean
        
        /** Inserts a new breakpoint with the given [param source] and [param line]. */
        static insertBreakpoint(line: int64, source: StringName): void
        
        /** Removes a breakpoint with the given [param source] and [param line]. */
        static removeBreakpoint(line: int64, source: StringName): void
        
        /** Clears all breakpoints. */
        static clearBreakpoints(): void
    }
    // _singleton_class_: GDExtensionManager
    namespace GDExtensionManager {
        enum LoadStatus {
            LoadStatusOk = 0,
            LoadStatusFailed = 1,
            LoadStatusAlreadyLoaded = 2,
            LoadStatusNotLoaded = 3,
            LoadStatusNeedsRestart = 4,
        }
    }
    /** Provides access to GDExtension functionality.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_gdextensionmanager.html  
     */
    class GDExtensionManager extends GObject {
        /** The extension has loaded successfully. */
        static readonly LOAD_STATUS_OK = 0
        
        /** The extension has failed to load, possibly because it does not exist or has missing dependencies. */
        static readonly LOAD_STATUS_FAILED = 1
        
        /** The extension has already been loaded. */
        static readonly LOAD_STATUS_ALREADY_LOADED = 2
        
        /** The extension has not been loaded. */
        static readonly LOAD_STATUS_NOT_LOADED = 3
        
        /** The extension requires the application to restart to fully load. */
        static readonly LOAD_STATUS_NEEDS_RESTART = 4
        
        /** Loads an extension by absolute file path. The [param path] needs to point to a valid [GDExtension]. Returns [constant LOAD_STATUS_OK] if successful. */
        static loadExtension(path: string): GDExtensionManager.LoadStatus
        
        /** Reloads the extension at the given file path. The [param path] needs to point to a valid [GDExtension], otherwise this method may return either [constant LOAD_STATUS_NOT_LOADED] or [constant LOAD_STATUS_FAILED].  
         *      
         *  **Note:** You can only reload extensions in the editor. In release builds, this method always fails and returns [constant LOAD_STATUS_FAILED].  
         */
        static reloadExtension(path: string): GDExtensionManager.LoadStatus
        
        /** Unloads an extension by file path. The [param path] needs to point to an already loaded [GDExtension], otherwise this method returns [constant LOAD_STATUS_NOT_LOADED]. */
        static unloadExtension(path: string): GDExtensionManager.LoadStatus
        
        /** Returns `true` if the extension at the given file [param path] has already been loaded successfully. See also [method get_loaded_extensions]. */
        static isExtensionLoaded(path: string): boolean
        
        /** Returns the file paths of all currently loaded extensions. */
        static getLoadedExtensions(): PackedStringArray
        
        /** Returns the [GDExtension] at the given file [param path], or `null` if it has not been loaded or does not exist. */
        static getExtension(path: string): null | GDExtension
        
        /** Emitted after the editor has finished reloading one or more extensions. */
        static readonly extensionsReloaded: Signal<() => void>
        
        /** Emitted after the editor has finished loading a new extension.  
         *      
         *  **Note:** This signal is only emitted in editor builds.  
         */
        static readonly extensionLoaded: Signal<(extension: GDExtension) => void>
        
        /** Emitted before the editor starts unloading an extension.  
         *      
         *  **Note:** This signal is only emitted in editor builds.  
         */
        static readonly extensionUnloading: Signal<(extension: GDExtension) => void>
    }
    // _singleton_class_: ResourceUid
    class ResourceUid extends GObject {
        static readonly INVALID_ID = -1
        static idToText(id: int64): string
        static textToId(textId: string): int64
        static createId(): int64
        static createIdForPath(path: string): int64
        static hasId(id: int64): boolean
        static addId(id: int64, path: string): void
        static setId(id: int64, path: string): void
        static getIdPath(id: int64): string
        static removeId(id: int64): void
    }
    // _singleton_class_: WorkerThreadPool
    /** A singleton that allocates some [Thread]s on startup, used to offload tasks to these threads.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_workerthreadpool.html  
     */
    class WorkerThreadPool extends GObject {
        /** Adds [param action] as a task to be executed by a worker thread. [param high_priority] determines if the task has a high priority or a low priority (default). You can optionally provide a [param description] to help with debugging.  
         *  Returns a task ID that can be used by other methods.  
         *  **Warning:** Every task must be waited for completion using [method wait_for_task_completion] or [method wait_for_group_task_completion] at some point so that any allocated resources inside the task can be cleaned up.  
         */
        static addTask(action: Callable, highPriority?: boolean /* = false */, description?: string /* = '' */): int64
        
        /** Returns `true` if the task with the given ID is completed.  
         *      
         *  **Note:** You should only call this method between adding the task and awaiting its completion.  
         */
        static isTaskCompleted(taskId: int64): boolean
        
        /** Pauses the thread that calls this method until the task with the given ID is completed.  
         *  Returns [constant @GlobalScope.OK] if the task could be successfully awaited.  
         *  Returns [constant @GlobalScope.ERR_INVALID_PARAMETER] if a task with the passed ID does not exist (maybe because it was already awaited and disposed of).  
         *  Returns [constant @GlobalScope.ERR_BUSY] if the call is made from another running task and, due to task scheduling, there's potential for deadlocking (e.g., the task to await may be at a lower level in the call stack and therefore can't progress). This is an advanced situation that should only matter when some tasks depend on others (in the current implementation, the tricky case is a task trying to wait on an older one).  
         */
        static waitForTaskCompletion(taskId: int64): GError
        
        /** Adds [param action] as a group task to be executed by the worker threads. The [Callable] will be called a number of times based on [param elements], with the first thread calling it with the value `0` as a parameter, and each consecutive execution incrementing this value by 1 until it reaches `element - 1`.  
         *  The number of threads the task is distributed to is defined by [param tasks_needed], where the default value `-1` means it is distributed to all worker threads. [param high_priority] determines if the task has a high priority or a low priority (default). You can optionally provide a [param description] to help with debugging.  
         *  Returns a group task ID that can be used by other methods.  
         *  **Warning:** Every task must be waited for completion using [method wait_for_task_completion] or [method wait_for_group_task_completion] at some point so that any allocated resources inside the task can be cleaned up.  
         */
        static addGroupTask(action: Callable, elements: int64, tasksNeeded?: int64 /* = -1 */, highPriority?: boolean /* = false */, description?: string /* = '' */): int64
        
        /** Returns `true` if the group task with the given ID is completed.  
         *      
         *  **Note:** You should only call this method between adding the group task and awaiting its completion.  
         */
        static isGroupTaskCompleted(groupId: int64): boolean
        
        /** Returns how many times the [Callable] of the group task with the given ID has already been executed by the worker threads.  
         *      
         *  **Note:** If a thread has started executing the [Callable] but is yet to finish, it won't be counted.  
         */
        static getGroupProcessedElementCount(groupId: int64): int64
        
        /** Pauses the thread that calls this method until the group task with the given ID is completed. */
        static waitForGroupTaskCompletion(groupId: int64): void
    }
    // _singleton_class_: ThemeDB
    /** A singleton that provides access to static information about [Theme] resources used by the engine and by your project.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_themedb.html  
     */
    class ThemeDB extends GObject {
        /** Returns a reference to the default engine [Theme]. This theme resource is responsible for the out-of-the-box look of [Control] nodes and cannot be overridden. */
        static getDefaultTheme(): null | Theme
        
        /** Returns a reference to the custom project [Theme]. This theme resources allows to override the default engine theme for every control node in the project.  
         *  To set the project theme, see [member ProjectSettings.gui/theme/custom].  
         */
        static getProjectTheme(): null | Theme
        
        /** The fallback base scale factor of every [Control] node and [Theme] resource. Used when no other value is available to the control.  
         *  See also [member Theme.default_base_scale].  
         */
        get fallbackBaseScale(): float64
        set fallbackBaseScale(value: float64)
        
        /** The fallback font of every [Control] node and [Theme] resource. Used when no other value is available to the control.  
         *  See also [member Theme.default_font].  
         */
        get fallbackFont(): null | Font
        set fallbackFont(value: null | Font)
        
        /** The fallback font size of every [Control] node and [Theme] resource. Used when no other value is available to the control.  
         *  See also [member Theme.default_font_size].  
         */
        get fallbackFontSize(): int64
        set fallbackFontSize(value: int64)
        
        /** The fallback icon of every [Control] node and [Theme] resource. Used when no other value is available to the control. */
        get fallbackIcon(): null | Texture2D
        set fallbackIcon(value: null | Texture2D)
        
        /** The fallback stylebox of every [Control] node and [Theme] resource. Used when no other value is available to the control. */
        get fallbackStylebox(): null | StyleBox
        set fallbackStylebox(value: null | StyleBox)
        
        /** Emitted when one of the fallback values had been changed. Use it to refresh the look of controls that may rely on the fallback theme items. */
        static readonly fallbackChanged: Signal<() => void>
    }
    // _singleton_class_: EditorInterface
    /** Godot editor's interface.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorinterface.html  
     */
    class EditorInterface extends GObject {
        /** Restarts the editor. This closes the editor and then opens the same project. If [param save] is `true`, the project will be saved before restarting. */
        static restartEditor(save?: boolean /* = true */): void
        
        /** Returns the editor's [EditorCommandPalette] instance.  
         *  **Warning:** Removing and freeing this node will render a part of the editor useless and may cause a crash.  
         */
        static getCommandPalette(): null | EditorCommandPalette
        
        /** Returns the editor's [EditorFileSystem] instance. */
        static getResourceFilesystem(): null | EditorFileSystem
        
        /** Returns the [EditorPaths] singleton. */
        static getEditorPaths(): null | EditorPaths
        
        /** Returns the editor's [EditorResourcePreview] instance. */
        static getResourcePreviewer(): null | EditorResourcePreview
        
        /** Returns the editor's [EditorSelection] instance. */
        static getSelection(): null | EditorSelection
        
        /** Returns the editor's [EditorSettings] instance. */
        static getEditorSettings(): null | EditorSettings
        
        /** Returns the editor's [EditorToaster]. */
        static getEditorToaster(): null | EditorToaster
        
        /** Returns the editor's [EditorUndoRedoManager]. */
        static getEditorUndoRedo(): null | EditorUndoRedoManager
        
        /** Returns mesh previews rendered at the given size as an [Array] of [Texture2D]s. */
        static makeMeshPreviews(meshes: GArray, previewSize: int64): GArray
        
        /** Sets the enabled status of a plugin. The plugin name is the same as its directory name. */
        static setPluginEnabled(plugin: string, enabled: boolean): void
        
        /** Returns `true` if the specified [param plugin] is enabled. The plugin name is the same as its directory name. */
        static isPluginEnabled(plugin: string): boolean
        
        /** Returns the editor's [Theme].  
         *      
         *  **Note:** When creating custom editor UI, prefer accessing theme items directly from your GUI nodes using the `get_theme_*` methods.  
         */
        static getEditorTheme(): null | Theme
        
        /** Returns the main container of Godot editor's window. For example, you can use it to retrieve the size of the container and place your controls accordingly.  
         *  **Warning:** Removing and freeing this node will render the editor useless and may cause a crash.  
         */
        static getBaseControl(): null | Control
        
        /** Returns the editor control responsible for main screen plugins and tools. Use it with plugins that implement [method EditorPlugin._has_main_screen].  
         *      
         *  **Note:** This node is a [VBoxContainer], which means that if you add a [Control] child to it, you need to set the child's [member Control.size_flags_vertical] to [constant Control.SIZE_EXPAND_FILL] to make it use the full available space.  
         *  **Warning:** Removing and freeing this node will render a part of the editor useless and may cause a crash.  
         */
        static getEditorMainScreen(): null | VBoxContainer
        
        /** Returns the editor's [ScriptEditor] instance.  
         *  **Warning:** Removing and freeing this node will render a part of the editor useless and may cause a crash.  
         */
        static getScriptEditor(): null | ScriptEditor
        
        /** Returns the 2D editor [SubViewport]. It does not have a camera. Instead, the view transforms are done directly and can be accessed with [member Viewport.global_canvas_transform]. */
        static getEditorViewport2D(): null | SubViewport
        
        /** Returns the specified 3D editor [SubViewport], from `0` to `3`. The viewport can be used to access the active editor cameras with [method Viewport.get_camera_3d]. */
        static getEditorViewport3D(idx?: int64 /* = 0 */): null | SubViewport
        
        /** Sets the editor's current main screen to the one specified in [param name]. [param name] must match the title of the tab in question exactly (e.g. `2D`, `3D`, [code skip-lint]Script`, `Game`, or `AssetLib` for default tabs). */
        static setMainScreenEditor(name: string): void
        
        /** Returns `true` if multiple window support is enabled in the editor. Multiple window support is enabled if  *all*  of these statements are true:  
         *  - [member EditorSettings.interface/multi_window/enable] is `true`.  
         *  - [member EditorSettings.interface/editor/single_window_mode] is `false`.  
         *  - [member Viewport.gui_embed_subwindows] is `false`. This is forced to `true` on platforms that don't support multiple windows such as Web, or when the `--single-window` [url=https://docs.godotengine.org/en/latest/tutorials/editor/command_line_tutorial.html]command line argument[/url] is used.  
         */
        static isMultiWindowEnabled(): boolean
        
        /** Returns the actual scale of the editor UI (`1.0` being 100% scale). This can be used to adjust position and dimensions of the UI added by plugins.  
         *      
         *  **Note:** This value is set via the [member EditorSettings.interface/editor/display_scale] and [member EditorSettings.interface/editor/custom_display_scale] settings. The editor must be restarted for changes to be properly applied.  
         */
        static getEditorScale(): float64
        
        /** Pops up the [param dialog] in the editor UI with [method Window.popup_exclusive]. The dialog must have no current parent, otherwise the method fails.  
         *  See also [method Window.set_unparent_when_invisible].  
         */
        static popupDialog(dialog: Window, rect?: Rect2I /* = new Rect2I(0, 0, 0, 0) */): void
        
        /** Pops up the [param dialog] in the editor UI with [method Window.popup_exclusive_centered]. The dialog must have no current parent, otherwise the method fails.  
         *  See also [method Window.set_unparent_when_invisible].  
         */
        static popupDialogCentered(dialog: Window, minsize?: Vector2I /* = Vector2I.ZERO */): void
        
        /** Pops up the [param dialog] in the editor UI with [method Window.popup_exclusive_centered_ratio]. The dialog must have no current parent, otherwise the method fails.  
         *  See also [method Window.set_unparent_when_invisible].  
         */
        static popupDialogCenteredRatio(dialog: Window, ratio?: float64 /* = 0.8 */): void
        
        /** Pops up the [param dialog] in the editor UI with [method Window.popup_exclusive_centered_clamped]. The dialog must have no current parent, otherwise the method fails.  
         *  See also [method Window.set_unparent_when_invisible].  
         */
        static popupDialogCenteredClamped(dialog: Window, minsize?: Vector2I /* = Vector2I.ZERO */, fallbackRatio?: float64 /* = 0.75 */): void
        
        /** Returns the name of the currently activated feature profile. If the default profile is currently active, an empty string is returned instead.  
         *  In order to get a reference to the [EditorFeatureProfile], you must load the feature profile using [method EditorFeatureProfile.load_from_file].  
         *      
         *  **Note:** Feature profiles created via the user interface are loaded from the `feature_profiles` directory, as a file with the `.profile` extension. The editor configuration folder can be found by using [method EditorPaths.get_config_dir].  
         */
        static getCurrentFeatureProfile(): string
        
        /** Selects and activates the specified feature profile with the given [param profile_name]. Set [param profile_name] to an empty string to reset to the default feature profile.  
         *  A feature profile can be created programmatically using the [EditorFeatureProfile] class.  
         *      
         *  **Note:** The feature profile that gets activated must be located in the `feature_profiles` directory, as a file with the `.profile` extension. If a profile could not be found, an error occurs. The editor configuration folder can be found by using [method EditorPaths.get_config_dir].  
         */
        static setCurrentFeatureProfile(profileName: string): void
        
        /** Pops up an editor dialog for selecting a [Node] from the edited scene. The [param callback] must take a single argument of type [NodePath]. It is called on the selected [NodePath] or the empty path `^""` if the dialog is canceled. If [param valid_types] is provided, the dialog will only show Nodes that match one of the listed Node types. If [param current_value] is provided, the Node will be automatically selected in the tree, if it exists.  
         *  **Example:** Display the node selection dialog as soon as this node is added to the tree for the first time:  
         *    
         */
        static popupNodeSelector(callback: Callable, validTypes?: GArray /* = [] */, currentValue?: Node /* = undefined */): void
        
        /** Pops up an editor dialog for selecting properties from [param object]. The [param callback] must take a single argument of type [NodePath]. It is called on the selected property path (see [method NodePath.get_as_property_path]) or the empty path `^""` if the dialog is canceled. If [param type_filter] is provided, the dialog will only show properties that match one of the listed [enum Variant.Type] values. If [param current_value] is provided, the property will be selected automatically in the property list, if it exists.  
         *    
         */
        static popupPropertySelector(object: GObject, callback: Callable, typeFilter?: PackedInt32Array | int32[] /* = [] */, currentValue?: string /* = '' */): void
        
        /** Pops up an editor dialog for selecting a method from [param object]. The [param callback] must take a single argument of type [String] which will contain the name of the selected method or be empty if the dialog is canceled. If [param current_value] is provided, the method will be selected automatically in the method list, if it exists. */
        static popupMethodSelector(object: GObject, callback: Callable, currentValue?: string /* = '' */): void
        
        /** Pops up an editor dialog for quick selecting a resource file. The [param callback] must take a single argument of type [String] which will contain the path of the selected resource or be empty if the dialog is canceled. If [param base_types] is provided, the dialog will only show resources that match these types. Only types deriving from [Resource] are supported. */
        static popupQuickOpen(callback: Callable, baseTypes?: GArray /* = [] */): void
        
        /** Pops up an editor dialog for creating an object.  
         *  The [param callback] must take a single argument of type [StringName] which will contain the type name of the selected object or be empty if no item is selected.  
         *  The [param base_type] specifies the base type of objects to display. For example, if you set this to "Resource", all types derived from [Resource] will display in the create dialog.  
         *  The [param current_type] will be passed in the search box of the create dialog, and the specified type can be immediately selected when the dialog pops up. If the [param current_type] is not derived from [param base_type], there will be no result of the type in the dialog.  
         *  The [param dialog_title] allows you to define a custom title for the dialog. This is useful if you want to accurately hint the usage of the dialog. If the [param dialog_title] is an empty string, the dialog will use "Create New 'Base Type'" as the default title.  
         *  The [param type_blocklist] contains a list of type names, and the types in the blocklist will be hidden from the create dialog.  
         *      
         *  **Note:** Trying to list the base type in the [param type_blocklist] will hide all types derived from the base type from the create dialog.  
         */
        static popupCreateDialog(callback: Callable, baseType?: StringName /* = '' */, currentType?: string /* = '' */, dialogTitle?: string /* = '' */, typeBlocklist?: GArray /* = [] */): void
        
        /** Returns the editor's [FileSystemDock] instance.  
         *  **Warning:** Removing and freeing this node will render a part of the editor useless and may cause a crash.  
         */
        static getFileSystemDock(): null | FileSystemDock
        
        /** Selects the file, with the path provided by [param file], in the FileSystem dock. */
        static selectFile(file: string): void
        
        /** Returns an array containing the paths of the currently selected files (and directories) in the [FileSystemDock]. */
        static getSelectedPaths(): PackedStringArray
        
        /** Returns the current path being viewed in the [FileSystemDock]. */
        static getCurrentPath(): string
        
        /** Returns the current directory being viewed in the [FileSystemDock]. If a file is selected, its base directory will be returned using [method String.get_base_dir] instead. */
        static getCurrentDirectory(): string
        
        /** Returns the editor's [EditorInspector] instance.  
         *  **Warning:** Removing and freeing this node will render a part of the editor useless and may cause a crash.  
         */
        static getInspector(): null | EditorInspector
        
        /** Shows the given property on the given [param object] in the editor's Inspector dock. If [param inspector_only] is `true`, plugins will not attempt to edit [param object]. */
        static inspectObject(object: GObject, forProperty?: string /* = '' */, inspectorOnly?: boolean /* = false */): void
        
        /** Edits the given [Resource]. If the resource is a [Script] you can also edit it with [method edit_script] to specify the line and column position. */
        static editResource(resource: Resource): void
        
        /** Edits the given [Node]. The node will be also selected if it's inside the scene tree. */
        static editNode(node: Node): void
        
        /** Edits the given [Script]. The line and column on which to open the script can also be specified. The script will be open with the user-configured editor for the script's language which may be an external editor. */
        static editScript(script: Script, line?: int64 /* = -1 */, column?: int64 /* = 0 */, grabFocus?: boolean /* = true */): void
        
        /** Opens the scene at the given path. If [param set_inherited] is `true`, creates a new inherited scene. */
        static openSceneFromPath(sceneFilepath: string, setInherited?: boolean /* = false */): void
        
        /** Reloads the scene at the given path. */
        static reloadSceneFromPath(sceneFilepath: string): void
        
        /** Returns an array with the file paths of the currently opened scenes. */
        static getOpenScenes(): PackedStringArray
        
        /** Returns an array with references to the root nodes of the currently opened scenes. */
        static getOpenSceneRoots(): GArray
        
        /** Returns the edited (current) scene's root [Node]. */
        static getEditedSceneRoot(): null | Node
        
        /** Saves the currently active scene. Returns either [constant OK] or [constant ERR_CANT_CREATE]. */
        static saveScene(): GError
        
        /** Saves the currently active scene as a file at [param path]. */
        static saveSceneAs(path: string, withPreview?: boolean /* = true */): void
        
        /** Saves all opened scenes in the editor. */
        static saveAllScenes(): void
        
        /** Marks the current scene tab as unsaved. */
        static markSceneAsUnsaved(): void
        
        /** Plays the main scene. */
        static playMainScene(): void
        
        /** Plays the currently active scene. */
        static playCurrentScene(): void
        
        /** Plays the scene specified by its filepath. */
        static playCustomScene(sceneFilepath: string): void
        
        /** Stops the scene that is currently playing. */
        static stopPlayingScene(): void
        
        /** Returns `true` if a scene is currently being played, `false` otherwise. Paused scenes are considered as being played. */
        static isPlayingScene(): boolean
        
        /** Returns the name of the scene that is being played. If no scene is currently being played, returns an empty string. */
        static getPlayingScene(): string
        
        /** If `true`, enables distraction-free mode which hides side docks to increase the space available for the main view. */
        get distractionFreeMode(): boolean
        set distractionFreeMode(value: boolean)
        
        /** If `true`, the Movie Maker mode is enabled in the editor. See [MovieWriter] for more information. */
        get movieMakerEnabled(): boolean
        set movieMakerEnabled(value: boolean)
    }
    // _singleton_class_: JavaClassWrapper
    /** Provides access to the Java Native Interface.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_javaclasswrapper.html  
     */
    class JavaClassWrapper extends GObject {
        /** Wraps a class defined in Java, and returns it as a [JavaClass] [Object] type that Godot can interact with.  
         *  When wrapping inner (nested) classes, use `$` instead of `.` to separate them. For example, `JavaClassWrapper.wrap("android.view.WindowManager$LayoutParams")` wraps the **WindowManager.LayoutParams** class.  
         *      
         *  **Note:** This method only works on Android. On every other platform, this method does nothing and returns an empty [JavaClass].  
         */
        static wrap(name: string): null | JavaClass
        
        /** Returns the Java exception from the last call into a Java class. If there was no exception, it will return `null`.  
         *      
         *  **Note:** This method only works on Android. On every other platform, this method will always return `null`.  
         */
        static getException(): null | JavaObject
    }
    // _singleton_class_: JavaScriptBridge
    /** Singleton that connects the engine with the browser's JavaScript context in Web export.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_javascriptbridge.html  
     */
    class JavaScriptBridge extends GObject {
        /** Execute the string [param code] as JavaScript code within the browser window. This is a call to the actual global JavaScript function [code skip-lint]eval()`.  
         *  If [param use_global_execution_context] is `true`, the code will be evaluated in the global execution context. Otherwise, it is evaluated in the execution context of a function within the engine's runtime environment.  
         */
        static eval(code: string, useGlobalExecutionContext?: boolean /* = false */): any
        
        /** Returns an interface to a JavaScript object that can be used by scripts. The [param interface] must be a valid property of the JavaScript `window`. The callback must accept a single [Array] argument, which will contain the JavaScript `arguments`. See [JavaScriptObject] for usage. */
        static getInterface(interface: string): null | JavaScriptObject
        
        /** Creates a reference to a [Callable] that can be used as a callback by JavaScript. The reference must be kept until the callback happens, or it won't be called at all. See [JavaScriptObject] for usage.  
         *      
         *  **Note:** The callback function must take exactly one [Array] argument, which is going to be the JavaScript [url=https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments]arguments object[/url] converted to an array.  
         */
        static createCallback(callable: Callable): JavaScriptObject
        
        /** Returns `true` if the given [param javascript_object] is of type [url=https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer]`ArrayBuffer`[/url], [url=https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView]`DataView`[/url], or one of the many [url=https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray]typed array objects[/url]. */
        static isJSBuffer(javascriptObject: JavaScriptObject): boolean
        
        /** Returns a copy of [param javascript_buffer]'s contents as a [PackedByteArray]. See also [method is_js_buffer]. */
        static jSBufferToPackedByteArray(javascriptBuffer: JavaScriptObject): PackedByteArray
        
        /** Creates a new JavaScript object using the `new` constructor. The [param object] must a valid property of the JavaScript `window`. See [JavaScriptObject] for usage. */
        static createObject(object: string, ...varargs: any[]): any
        
        /** Prompts the user to download a file containing the specified [param buffer]. The file will have the given [param name] and [param mime] type.  
         *      
         *  **Note:** The browser may override the [url=https://en.wikipedia.org/wiki/Media_type]MIME type[/url] provided based on the file [param name]'s extension.  
         *      
         *  **Note:** Browsers might block the download if [method download_buffer] is not being called from a user interaction (e.g. button click).  
         *      
         *  **Note:** Browsers might ask the user for permission or block the download if multiple download requests are made in a quick succession.  
         */
        static downloadBuffer(buffer: PackedByteArray | byte[] | ArrayBuffer, name: string, mime?: string /* = 'application/octet-stream' */): void
        
        /** Returns `true` if a new version of the progressive web app is waiting to be activated.  
         *      
         *  **Note:** Only relevant when exported as a Progressive Web App.  
         */
        static pwaNeedsUpdate(): boolean
        
        /** Performs the live update of the progressive web app. Forcing the new version to be installed and the page to be reloaded.  
         *      
         *  **Note:** Your application will be **reloaded in all browser tabs**.  
         *      
         *  **Note:** Only relevant when exported as a Progressive Web App and [method pwa_needs_update] returns `true`.  
         */
        static pwaUpdate(): GError
        
        /** Force synchronization of the persistent file system (when enabled).  
         *      
         *  **Note:** This is only useful for modules or extensions that can't use [FileAccess] to write files.  
         */
        static forceFsSync(): void
        
        /** Emitted when an update for this progressive web app has been detected but is waiting to be activated because a previous version is active. See [method pwa_update] to force the update to take place immediately. */
        static readonly pwaUpdateAvailable: Signal<() => void>
    }
    // _singleton_class_: AudioServer
    namespace AudioServer {
        enum SpeakerMode {
            SpeakerModeStereo = 0,
            SpeakerSurround31 = 1,
            SpeakerSurround51 = 2,
            SpeakerSurround71 = 3,
        }
        enum PlaybackType {
            PlaybackTypeDefault = 0,
            PlaybackTypeStream = 1,
            PlaybackTypeSample = 2,
            PlaybackTypeMax = 3,
        }
    }
    /** Server interface for low-level audio access.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audioserver.html  
     */
    class AudioServer extends GObject {
        /** Two or fewer speakers were detected. */
        static readonly SPEAKER_MODE_STEREO = 0
        
        /** A 3.1 channel surround setup was detected. */
        static readonly SPEAKER_SURROUND_31 = 1
        
        /** A 5.1 channel surround setup was detected. */
        static readonly SPEAKER_SURROUND_51 = 2
        
        /** A 7.1 channel surround setup was detected. */
        static readonly SPEAKER_SURROUND_71 = 3
        
        /** The playback will be considered of the type declared at [member ProjectSettings.audio/general/default_playback_type]. */
        static readonly PLAYBACK_TYPE_DEFAULT = 0
        
        /** Force the playback to be considered as a stream. */
        static readonly PLAYBACK_TYPE_STREAM = 1
        
        /** Force the playback to be considered as a sample. This can provide lower latency and more stable playback (with less risk of audio crackling), at the cost of having less flexibility.  
         *      
         *  **Note:** Only currently supported on the web platform.  
         *      
         *  **Note:** [AudioEffect]s are not supported when playback is considered as a sample.  
         */
        static readonly PLAYBACK_TYPE_SAMPLE = 2
        
        /** Represents the size of the [enum PlaybackType] enum. */
        static readonly PLAYBACK_TYPE_MAX = 3
        
        /** Removes the bus at index [param index]. */
        static removeBus(index: int64): void
        
        /** Adds a bus at [param at_position]. */
        static addBus(atPosition?: int64 /* = -1 */): void
        
        /** Moves the bus from index [param index] to index [param to_index]. */
        static moveBus(index: int64, toIndex: int64): void
        
        /** Sets the name of the bus at index [param bus_idx] to [param name]. */
        static setBusName(busIdx: int64, name: string): void
        
        /** Returns the name of the bus with the index [param bus_idx]. */
        static getBusName(busIdx: int64): string
        
        /** Returns the index of the bus with the name [param bus_name]. Returns `-1` if no bus with the specified name exist. */
        static getBusIndex(busName: StringName): int64
        
        /** Returns the number of channels of the bus at index [param bus_idx]. */
        static getBusChannels(busIdx: int64): int64
        
        /** Sets the volume in decibels of the bus at index [param bus_idx] to [param volume_db]. */
        static setBusVolumeDb(busIdx: int64, volumeDb: float64): void
        
        /** Returns the volume of the bus at index [param bus_idx] in dB. */
        static getBusVolumeDb(busIdx: int64): float64
        
        /** Sets the volume as a linear value of the bus at index [param bus_idx] to [param volume_linear].  
         *      
         *  **Note:** Using this method is equivalent to calling [method set_bus_volume_db] with the result of [method @GlobalScope.linear_to_db] on a value.  
         */
        static setBusVolumeLinear(busIdx: int64, volumeLinear: float64): void
        
        /** Returns the volume of the bus at index [param bus_idx] as a linear value.  
         *      
         *  **Note:** The returned value is equivalent to the result of [method @GlobalScope.db_to_linear] on the result of [method get_bus_volume_db].  
         */
        static getBusVolumeLinear(busIdx: int64): float64
        
        /** Connects the output of the bus at [param bus_idx] to the bus named [param send]. */
        static setBusSend(busIdx: int64, send: StringName): void
        
        /** Returns the name of the bus that the bus at index [param bus_idx] sends to. */
        static getBusSend(busIdx: int64): StringName
        
        /** If `true`, the bus at index [param bus_idx] is in solo mode. */
        static setBusSolo(busIdx: int64, enable: boolean): void
        
        /** If `true`, the bus at index [param bus_idx] is in solo mode. */
        static isBusSolo(busIdx: int64): boolean
        
        /** If `true`, the bus at index [param bus_idx] is muted. */
        static setBusMute(busIdx: int64, enable: boolean): void
        
        /** If `true`, the bus at index [param bus_idx] is muted. */
        static isBusMute(busIdx: int64): boolean
        
        /** If `true`, the bus at index [param bus_idx] is bypassing effects. */
        static setBusBypassEffects(busIdx: int64, enable: boolean): void
        
        /** If `true`, the bus at index [param bus_idx] is bypassing effects. */
        static isBusBypassingEffects(busIdx: int64): boolean
        
        /** Adds an [AudioEffect] effect to the bus [param bus_idx] at [param at_position]. */
        static addBusEffect(busIdx: int64, effect: AudioEffect, atPosition?: int64 /* = -1 */): void
        
        /** Removes the effect at index [param effect_idx] from the bus at index [param bus_idx]. */
        static removeBusEffect(busIdx: int64, effectIdx: int64): void
        
        /** Returns the number of effects on the bus at [param bus_idx]. */
        static getBusEffectCount(busIdx: int64): int64
        
        /** Returns the [AudioEffect] at position [param effect_idx] in bus [param bus_idx]. */
        static getBusEffect(busIdx: int64, effectIdx: int64): null | AudioEffect
        
        /** Returns the [AudioEffectInstance] assigned to the given bus and effect indices (and optionally channel). */
        static getBusEffectInstance(busIdx: int64, effectIdx: int64, channel?: int64 /* = 0 */): null | AudioEffectInstance
        
        /** Swaps the position of two effects in bus [param bus_idx]. */
        static swapBusEffects(busIdx: int64, effectIdx: int64, byEffectIdx: int64): void
        
        /** If `true`, the effect at index [param effect_idx] on the bus at index [param bus_idx] is enabled. */
        static setBusEffectEnabled(busIdx: int64, effectIdx: int64, enabled: boolean): void
        
        /** If `true`, the effect at index [param effect_idx] on the bus at index [param bus_idx] is enabled. */
        static isBusEffectEnabled(busIdx: int64, effectIdx: int64): boolean
        
        /** Returns the peak volume of the left speaker at bus index [param bus_idx] and channel index [param channel]. */
        static getBusPeakVolumeLeftDb(busIdx: int64, channel: int64): float64
        
        /** Returns the peak volume of the right speaker at bus index [param bus_idx] and channel index [param channel]. */
        static getBusPeakVolumeRightDb(busIdx: int64, channel: int64): float64
        
        /** Locks the audio driver's main loop.  
         *      
         *  **Note:** Remember to unlock it afterwards.  
         */
        static lock(): void
        
        /** Unlocks the audio driver's main loop. (After locking it, you should always unlock it.) */
        static unlock(): void
        
        /** Returns the speaker configuration. */
        static getSpeakerMode(): AudioServer.SpeakerMode
        
        /** Returns the sample rate at the output of the [AudioServer]. */
        static getMixRate(): float64
        
        /** Returns the sample rate at the input of the [AudioServer]. */
        static getInputMixRate(): float64
        
        /** Returns the name of the current audio driver. The default usually depends on the operating system, but may be overridden via the `--audio-driver` [url=https://docs.godotengine.org/en/latest/tutorials/editor/command_line_tutorial.html]command line argument[/url]. `--headless` also automatically sets the audio driver to `Dummy`. See also [member ProjectSettings.audio/driver/driver]. */
        static getDriverName(): string
        
        /** Returns the names of all audio output devices detected on the system. */
        static getOutputDeviceList(): PackedStringArray
        
        /** Returns the relative time until the next mix occurs. */
        static getTimeToNextMix(): float64
        
        /** Returns the relative time since the last mix occurred. */
        static getTimeSinceLastMix(): float64
        
        /** Returns the audio driver's effective output latency. This is based on [member ProjectSettings.audio/driver/output_latency], but the exact returned value will differ depending on the operating system and audio driver.  
         *      
         *  **Note:** This can be expensive; it is not recommended to call [method get_output_latency] every frame.  
         */
        static getOutputLatency(): float64
        
        /** Returns the names of all audio input devices detected on the system.  
         *      
         *  **Note:** [member ProjectSettings.audio/driver/enable_input] must be `true` for audio input to work. See also that setting's description for caveats related to permissions and operating system privacy settings.  
         */
        static getInputDeviceList(): PackedStringArray
        
        /** Overwrites the currently used [AudioBusLayout]. */
        static setBusLayout(busLayout: AudioBusLayout): void
        
        /** Generates an [AudioBusLayout] using the available buses and effects. */
        static generateBusLayout(): null | AudioBusLayout
        
        /** If set to `true`, all instances of [AudioStreamPlayback] will call [method AudioStreamPlayback._tag_used_streams] every mix step.  
         *      
         *  **Note:** This is enabled by default in the editor, as it is used by editor plugins for the audio stream previews.  
         */
        static setEnableTaggingUsedAudioStreams(enable: boolean): void
        
        /** If `true`, the stream is registered as a sample. The engine will not have to register it before playing the sample.  
         *  If `false`, the stream will have to be registered before playing it. To prevent lag spikes, register the stream as sample with [method register_stream_as_sample].  
         */
        static isStreamRegisteredAsSample(stream: AudioStream): boolean
        
        /** Forces the registration of a stream as a sample.  
         *      
         *  **Note:** Lag spikes may occur when calling this method, especially on single-threaded builds. It is suggested to call this method while loading assets, where the lag spike could be masked, instead of registering the sample right before it needs to be played.  
         */
        static registerStreamAsSample(stream: AudioStream): void
        
        /** Number of available audio buses. */
        get busCount(): int64
        set busCount(value: int64)
        
        /** Name of the current device for audio output (see [method get_output_device_list]). On systems with multiple audio outputs (such as analog, USB and HDMI audio), this can be used to select the audio output device. The value `"Default"` will play audio on the system-wide default audio output. If an invalid device name is set, the value will be reverted back to `"Default"`. */
        get outputDevice(): string
        set outputDevice(value: string)
        
        /** Name of the current device for audio input (see [method get_input_device_list]). On systems with multiple audio inputs (such as analog, USB and HDMI audio), this can be used to select the audio input device. The value `"Default"` will record audio on the system-wide default audio input. If an invalid device name is set, the value will be reverted back to `"Default"`.  
         *      
         *  **Note:** [member ProjectSettings.audio/driver/enable_input] must be `true` for audio input to work. See also that setting's description for caveats related to permissions and operating system privacy settings.  
         */
        get inputDevice(): string
        set inputDevice(value: string)
        
        /** Scales the rate at which audio is played (i.e. setting it to `0.5` will make the audio be played at half its speed). See also [member Engine.time_scale] to affect the general simulation speed, which is independent from [member AudioServer.playback_speed_scale]. */
        get playbackSpeedScale(): float64
        set playbackSpeedScale(value: float64)
        
        /** Emitted when an audio bus is added, deleted, or moved. */
        static readonly busLayoutChanged: Signal<() => void>
        
        /** Emitted when the audio bus at [param bus_index] is renamed from [param old_name] to [param new_name]. */
        static readonly busRenamed: Signal<(busIndex: int64, oldName: StringName, newName: StringName) => void>
    }
    // _singleton_class_: CameraServer
    namespace CameraServer {
        enum FeedImage {
            FeedRgbaImage = 0,
            FeedYcbcrImage = 0,
            FeedYImage = 0,
            FeedCbcrImage = 1,
        }
    }
    /** Server keeping track of different cameras accessible in Godot.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_cameraserver.html  
     */
    class CameraServer extends GObject {
        /** The RGBA camera image. */
        static readonly FEED_RGBA_IMAGE = 0
        
        /** The [url=https://en.wikipedia.org/wiki/YCbCr]YCbCr[/url] camera image. */
        static readonly FEED_YCBCR_IMAGE = 0
        
        /** The Y component camera image. */
        static readonly FEED_Y_IMAGE = 0
        
        /** The CbCr component camera image. */
        static readonly FEED_CBCR_IMAGE = 1
        
        /** Returns the [CameraFeed] corresponding to the camera with the given [param index]. */
        static getFeed(index: int64): null | CameraFeed
        
        /** Returns the number of [CameraFeed]s registered. */
        static getFeedCount(): int64
        
        /** Returns an array of [CameraFeed]s. */
        static feeds(): GArray
        
        /** Adds the camera [param feed] to the camera server. */
        static addFeed(feed: CameraFeed): void
        
        /** Removes the specified camera [param feed]. */
        static removeFeed(feed: CameraFeed): void
        
        /** If `true`, the server is actively monitoring available camera feeds.  
         *  This has a performance cost, so only set it to `true` when you're actively accessing the camera.  
         */
        get monitoringFeeds(): boolean
        set monitoringFeeds(value: boolean)
        
        /** Emitted when a [CameraFeed] is added (e.g. a webcam is plugged in). */
        static readonly cameraFeedAdded: Signal<(id: int64) => void>
        
        /** Emitted when a [CameraFeed] is removed (e.g. a webcam is unplugged). */
        static readonly cameraFeedRemoved: Signal<(id: int64) => void>
    }
    // _singleton_class_: DisplayServer
    namespace DisplayServer {
        enum Feature {
            FeatureGlobalMenu = 0,
            FeatureSubwindows = 1,
            FeatureTouchscreen = 2,
            FeatureMouse = 3,
            FeatureMouseWarp = 4,
            FeatureClipboard = 5,
            FeatureVirtualKeyboard = 6,
            FeatureCursorShape = 7,
            FeatureCustomCursorShape = 8,
            FeatureNativeDialog = 9,
            FeatureIme = 10,
            FeatureWindowTransparency = 11,
            FeatureHidpi = 12,
            FeatureIcon = 13,
            FeatureNativeIcon = 14,
            FeatureOrientation = 15,
            FeatureSwapBuffers = 16,
            FeatureClipboardPrimary = 18,
            FeatureTextToSpeech = 19,
            FeatureExtendToTitle = 20,
            FeatureScreenCapture = 21,
            FeatureStatusIndicator = 22,
            FeatureNativeHelp = 23,
            FeatureNativeDialogInput = 24,
            FeatureNativeDialogFile = 25,
            FeatureNativeDialogFileExtra = 26,
            FeatureWindowDrag = 27,
            FeatureScreenExcludeFromCapture = 28,
            FeatureWindowEmbedding = 29,
            FeatureNativeDialogFileMime = 30,
            FeatureEmojiAndSymbolPicker = 31,
            FeatureNativeColorPicker = 32,
            FeatureSelfFittingWindows = 33,
            FeatureAccessibilityScreenReader = 34,
        }
        enum AccessibilityRole {
            RoleUnknown = 0,
            RoleDefaultButton = 1,
            RoleAudio = 2,
            RoleVideo = 3,
            RoleStaticText = 4,
            RoleContainer = 5,
            RolePanel = 6,
            RoleButton = 7,
            RoleLink = 8,
            RoleCheckBox = 9,
            RoleRadioButton = 10,
            RoleCheckButton = 11,
            RoleScrollBar = 12,
            RoleScrollView = 13,
            RoleSplitter = 14,
            RoleSlider = 15,
            RoleSpinButton = 16,
            RoleProgressIndicator = 17,
            RoleTextField = 18,
            RoleMultilineTextField = 19,
            RoleColorPicker = 20,
            RoleTable = 21,
            RoleCell = 22,
            RoleRow = 23,
            RoleRowGroup = 24,
            RoleRowHeader = 25,
            RoleColumnHeader = 26,
            RoleTree = 27,
            RoleTreeItem = 28,
            RoleList = 29,
            RoleListItem = 30,
            RoleListBox = 31,
            RoleListBoxOption = 32,
            RoleTabBar = 33,
            RoleTab = 34,
            RoleTabPanel = 35,
            RoleMenuBar = 36,
            RoleMenu = 37,
            RoleMenuItem = 38,
            RoleMenuItemCheckBox = 39,
            RoleMenuItemRadio = 40,
            RoleImage = 41,
            RoleWindow = 42,
            RoleTitleBar = 43,
            RoleDialog = 44,
            RoleTooltip = 45,
        }
        enum AccessibilityPopupType {
            PopupUnknown = 0,
            PopupMenu = 1,
            PopupList = 2,
            PopupTree = 3,
            PopupDialog = 4,
        }
        enum AccessibilityFlags {
            FlagHidden = 0,
            FlagLinked = 1,
            FlagMultiselectable = 2,
            FlagRequired = 3,
            FlagVisited = 4,
            FlagBusy = 5,
            FlagModal = 6,
            FlagTouchPassthrough = 7,
            FlagReadonly = 8,
            FlagDisabled = 9,
            FlagClipsChildren = 10,
        }
        enum AccessibilityAction {
            ActionClick = 0,
            ActionFocus = 1,
            ActionBlur = 2,
            ActionCollapse = 3,
            ActionExpand = 4,
            ActionDecrement = 5,
            ActionIncrement = 6,
            ActionHideTooltip = 7,
            ActionShowTooltip = 8,
            ActionSetTextSelection = 9,
            ActionReplaceSelectedText = 10,
            ActionScrollBackward = 11,
            ActionScrollDown = 12,
            ActionScrollForward = 13,
            ActionScrollLeft = 14,
            ActionScrollRight = 15,
            ActionScrollUp = 16,
            ActionScrollIntoView = 17,
            ActionScrollToPoint = 18,
            ActionSetScrollOffset = 19,
            ActionSetValue = 20,
            ActionShowContextMenu = 21,
            ActionCustom = 22,
        }
        enum AccessibilityLiveMode {
            LiveOff = 0,
            LivePolite = 1,
            LiveAssertive = 2,
        }
        enum MouseMode {
            MouseModeVisible = 0,
            MouseModeHidden = 1,
            MouseModeCaptured = 2,
            MouseModeConfined = 3,
            MouseModeConfinedHidden = 4,
            MouseModeMax = 5,
        }
        enum ScreenOrientation {
            ScreenLandscape = 0,
            ScreenPortrait = 1,
            ScreenReverseLandscape = 2,
            ScreenReversePortrait = 3,
            ScreenSensorLandscape = 4,
            ScreenSensorPortrait = 5,
            ScreenSensor = 6,
        }
        enum VirtualKeyboardType {
            KeyboardTypeDefault = 0,
            KeyboardTypeMultiline = 1,
            KeyboardTypeNumber = 2,
            KeyboardTypeNumberDecimal = 3,
            KeyboardTypePhone = 4,
            KeyboardTypeEmailAddress = 5,
            KeyboardTypePassword = 6,
            KeyboardTypeUrl = 7,
        }
        enum CursorShape {
            CursorArrow = 0,
            CursorIbeam = 1,
            CursorPointingHand = 2,
            CursorCross = 3,
            CursorWait = 4,
            CursorBusy = 5,
            CursorDrag = 6,
            CursorCanDrop = 7,
            CursorForbidden = 8,
            CursorVsize = 9,
            CursorHsize = 10,
            CursorBdiagsize = 11,
            CursorFdiagsize = 12,
            CursorMove = 13,
            CursorVsplit = 14,
            CursorHsplit = 15,
            CursorHelp = 16,
            CursorMax = 17,
        }
        enum FileDialogMode {
            FileDialogModeOpenFile = 0,
            FileDialogModeOpenFiles = 1,
            FileDialogModeOpenDir = 2,
            FileDialogModeOpenAny = 3,
            FileDialogModeSaveFile = 4,
        }
        enum WindowMode {
            WindowModeWindowed = 0,
            WindowModeMinimized = 1,
            WindowModeMaximized = 2,
            WindowModeFullscreen = 3,
            WindowModeExclusiveFullscreen = 4,
        }
        enum WindowFlags {
            WindowFlagResizeDisabled = 0,
            WindowFlagBorderless = 1,
            WindowFlagAlwaysOnTop = 2,
            WindowFlagTransparent = 3,
            WindowFlagNoFocus = 4,
            WindowFlagPopup = 5,
            WindowFlagExtendToTitle = 6,
            WindowFlagMousePassthrough = 7,
            WindowFlagSharpCorners = 8,
            WindowFlagExcludeFromCapture = 9,
            WindowFlagPopupWMHint = 10,
            WindowFlagMinimizeDisabled = 11,
            WindowFlagMaximizeDisabled = 12,
            WindowFlagMax = 13,
        }
        enum WindowEvent {
            WindowEventMouseEnter = 0,
            WindowEventMouseExit = 1,
            WindowEventFocusIn = 2,
            WindowEventFocusOut = 3,
            WindowEventCloseRequest = 4,
            WindowEventGoBackRequest = 5,
            WindowEventDpiChange = 6,
            WindowEventTitlebarChange = 7,
            WindowEventForceClose = 8,
        }
        enum WindowResizeEdge {
            WindowEdgeTopLeft = 0,
            WindowEdgeTop = 1,
            WindowEdgeTopRight = 2,
            WindowEdgeLeft = 3,
            WindowEdgeRight = 4,
            WindowEdgeBottomLeft = 5,
            WindowEdgeBottom = 6,
            WindowEdgeBottomRight = 7,
            WindowEdgeMax = 8,
        }
        enum VSyncMode {
            VsyncDisabled = 0,
            VsyncEnabled = 1,
            VsyncAdaptive = 2,
            VsyncMailbox = 3,
        }
        enum HandleType {
            DisplayHandle = 0,
            WindowHandle = 1,
            WindowView = 2,
            OpenglContext = 3,
            EglDisplay = 4,
            EglConfig = 5,
        }
        enum TtsUtteranceEvent {
            TtsUtteranceStarted = 0,
            TtsUtteranceEnded = 1,
            TtsUtteranceCanceled = 2,
            TtsUtteranceBoundary = 3,
        }
    }
    /** A server interface for low-level window management.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_displayserver.html  
     */
    class DisplayServer extends GObject {
        /** Display server supports global menu. This allows the application to display its menu items in the operating system's top bar. **macOS** */
        static readonly FEATURE_GLOBAL_MENU = 0
        
        /** Display server supports multiple windows that can be moved outside of the main window. **Windows, macOS, Linux (X11)** */
        static readonly FEATURE_SUBWINDOWS = 1
        
        /** Display server supports touchscreen input. **Windows, Linux (X11), Android, iOS, Web** */
        static readonly FEATURE_TOUCHSCREEN = 2
        
        /** Display server supports mouse input. **Windows, macOS, Linux (X11/Wayland), Android, Web** */
        static readonly FEATURE_MOUSE = 3
        
        /** Display server supports warping mouse coordinates to keep the mouse cursor constrained within an area, but looping when one of the edges is reached. **Windows, macOS, Linux (X11/Wayland)** */
        static readonly FEATURE_MOUSE_WARP = 4
        
        /** Display server supports setting and getting clipboard data. See also [constant FEATURE_CLIPBOARD_PRIMARY]. **Windows, macOS, Linux (X11/Wayland), Android, iOS, Web** */
        static readonly FEATURE_CLIPBOARD = 5
        
        /** Display server supports popping up a virtual keyboard when requested to input text without a physical keyboard. **Android, iOS, Web** */
        static readonly FEATURE_VIRTUAL_KEYBOARD = 6
        
        /** Display server supports setting the mouse cursor shape to be different from the default. **Windows, macOS, Linux (X11/Wayland), Android, Web** */
        static readonly FEATURE_CURSOR_SHAPE = 7
        
        /** Display server supports setting the mouse cursor shape to a custom image. **Windows, macOS, Linux (X11/Wayland), Web** */
        static readonly FEATURE_CUSTOM_CURSOR_SHAPE = 8
        
        /** Display server supports spawning text dialogs using the operating system's native look-and-feel. See [method dialog_show]. **Windows, macOS** */
        static readonly FEATURE_NATIVE_DIALOG = 9
        
        /** Display server supports [url=https://en.wikipedia.org/wiki/Input_method]Input Method Editor[/url], which is commonly used for inputting Chinese/Japanese/Korean text. This is handled by the operating system, rather than by Godot. **Windows, macOS, Linux (X11)** */
        static readonly FEATURE_IME = 10
        
        /** Display server supports windows can use per-pixel transparency to make windows behind them partially or fully visible. **Windows, macOS, Linux (X11/Wayland)** */
        static readonly FEATURE_WINDOW_TRANSPARENCY = 11
        
        /** Display server supports querying the operating system's display scale factor. This allows automatically detecting the hiDPI display  *reliably* , instead of guessing based on the screen resolution and the display's reported DPI (which might be unreliable due to broken monitor EDID). **Windows, Linux (Wayland), macOS** */
        static readonly FEATURE_HIDPI = 12
        
        /** Display server supports changing the window icon (usually displayed in the top-left corner). **Windows, macOS, Linux (X11)** */
        static readonly FEATURE_ICON = 13
        
        /** Display server supports changing the window icon (usually displayed in the top-left corner). **Windows, macOS** */
        static readonly FEATURE_NATIVE_ICON = 14
        
        /** Display server supports changing the screen orientation. **Android, iOS** */
        static readonly FEATURE_ORIENTATION = 15
        
        /** Display server supports V-Sync status can be changed from the default (which is forced to be enabled platforms not supporting this feature). **Windows, macOS, Linux (X11/Wayland)** */
        static readonly FEATURE_SWAP_BUFFERS = 16
        
        /** Display server supports Primary clipboard can be used. This is a different clipboard from [constant FEATURE_CLIPBOARD]. **Linux (X11/Wayland)** */
        static readonly FEATURE_CLIPBOARD_PRIMARY = 18
        
        /** Display server supports text-to-speech. See `tts_*` methods. **Windows, macOS, Linux (X11/Wayland), Android, iOS, Web** */
        static readonly FEATURE_TEXT_TO_SPEECH = 19
        
        /** Display server supports expanding window content to the title. See [constant WINDOW_FLAG_EXTEND_TO_TITLE]. **macOS** */
        static readonly FEATURE_EXTEND_TO_TITLE = 20
        
        /** Display server supports reading screen pixels. See [method screen_get_pixel]. */
        static readonly FEATURE_SCREEN_CAPTURE = 21
        
        /** Display server supports application status indicators. */
        static readonly FEATURE_STATUS_INDICATOR = 22
        
        /** Display server supports native help system search callbacks. See [method help_set_search_callbacks]. */
        static readonly FEATURE_NATIVE_HELP = 23
        
        /** Display server supports spawning text input dialogs using the operating system's native look-and-feel. See [method dialog_input_text]. **Windows, macOS** */
        static readonly FEATURE_NATIVE_DIALOG_INPUT = 24
        
        /** Display server supports spawning dialogs for selecting files or directories using the operating system's native look-and-feel. See [method file_dialog_show]. **Windows, macOS, Linux (X11/Wayland), Android** */
        static readonly FEATURE_NATIVE_DIALOG_FILE = 25
        
        /** The display server supports all features of [constant FEATURE_NATIVE_DIALOG_FILE], with the added functionality of Options and native dialog file access to `res://` and `user://` paths. See [method file_dialog_show] and [method file_dialog_with_options_show]. **Windows, macOS, Linux (X11/Wayland)** */
        static readonly FEATURE_NATIVE_DIALOG_FILE_EXTRA = 26
        
        /** The display server supports initiating window drag and resize operations on demand. See [method window_start_drag] and [method window_start_resize]. */
        static readonly FEATURE_WINDOW_DRAG = 27
        
        /** Display server supports [constant WINDOW_FLAG_EXCLUDE_FROM_CAPTURE] window flag. */
        static readonly FEATURE_SCREEN_EXCLUDE_FROM_CAPTURE = 28
        
        /** Display server supports embedding a window from another process. **Windows, Linux (X11)** */
        static readonly FEATURE_WINDOW_EMBEDDING = 29
        
        /** Native file selection dialog supports MIME types as filters. */
        static readonly FEATURE_NATIVE_DIALOG_FILE_MIME = 30
        
        /** Display server supports system emoji and symbol picker. **Windows, macOS** */
        static readonly FEATURE_EMOJI_AND_SYMBOL_PICKER = 31
        
        /** Display server supports native color picker. **Linux (X11/Wayland)** */
        static readonly FEATURE_NATIVE_COLOR_PICKER = 32
        
        /** Display server automatically fits popups according to the screen boundaries. Window nodes should not attempt to do that themselves. */
        static readonly FEATURE_SELF_FITTING_WINDOWS = 33
        
        /** Display server supports interaction with screen reader or Braille display. **Linux (X11/Wayland), macOS, Windows** */
        static readonly FEATURE_ACCESSIBILITY_SCREEN_READER = 34
        
        /** Unknown or custom role. */
        static readonly ROLE_UNKNOWN = 0
        
        /** Default dialog button element. */
        static readonly ROLE_DEFAULT_BUTTON = 1
        
        /** Audio player element. */
        static readonly ROLE_AUDIO = 2
        
        /** Video player element. */
        static readonly ROLE_VIDEO = 3
        
        /** Non-editable text label. */
        static readonly ROLE_STATIC_TEXT = 4
        
        /** Container element. Elements with this role are used for internal structure and ignored by screen readers. */
        static readonly ROLE_CONTAINER = 5
        
        /** Panel container element. */
        static readonly ROLE_PANEL = 6
        
        /** Button element. */
        static readonly ROLE_BUTTON = 7
        
        /** Link element. */
        static readonly ROLE_LINK = 8
        
        /** Check box element. */
        static readonly ROLE_CHECK_BOX = 9
        
        /** Radio button element. */
        static readonly ROLE_RADIO_BUTTON = 10
        
        /** Check button element. */
        static readonly ROLE_CHECK_BUTTON = 11
        
        /** Scroll bar element. */
        static readonly ROLE_SCROLL_BAR = 12
        
        /** Scroll container element. */
        static readonly ROLE_SCROLL_VIEW = 13
        
        /** Container splitter handle element. */
        static readonly ROLE_SPLITTER = 14
        
        /** Slider element. */
        static readonly ROLE_SLIDER = 15
        
        /** Spin box element. */
        static readonly ROLE_SPIN_BUTTON = 16
        
        /** Progress indicator element. */
        static readonly ROLE_PROGRESS_INDICATOR = 17
        
        /** Editable text field element. */
        static readonly ROLE_TEXT_FIELD = 18
        
        /** Multiline editable text field element. */
        static readonly ROLE_MULTILINE_TEXT_FIELD = 19
        
        /** Color picker element. */
        static readonly ROLE_COLOR_PICKER = 20
        
        /** Table element. */
        static readonly ROLE_TABLE = 21
        
        /** Table/tree cell element. */
        static readonly ROLE_CELL = 22
        
        /** Table/tree row element. */
        static readonly ROLE_ROW = 23
        
        /** Table/tree row group element. */
        static readonly ROLE_ROW_GROUP = 24
        
        /** Table/tree row header element. */
        static readonly ROLE_ROW_HEADER = 25
        
        /** Table/tree column header element. */
        static readonly ROLE_COLUMN_HEADER = 26
        
        /** Tree view element. */
        static readonly ROLE_TREE = 27
        
        /** Tree view item element. */
        static readonly ROLE_TREE_ITEM = 28
        
        /** List element. */
        static readonly ROLE_LIST = 29
        
        /** List item element. */
        static readonly ROLE_LIST_ITEM = 30
        
        /** List view element. */
        static readonly ROLE_LIST_BOX = 31
        
        /** List view item element. */
        static readonly ROLE_LIST_BOX_OPTION = 32
        
        /** Tab bar element. */
        static readonly ROLE_TAB_BAR = 33
        
        /** Tab bar item element. */
        static readonly ROLE_TAB = 34
        
        /** Tab panel element. */
        static readonly ROLE_TAB_PANEL = 35
        
        /** Menu bar element. */
        static readonly ROLE_MENU_BAR = 36
        
        /** Popup menu element. */
        static readonly ROLE_MENU = 37
        
        /** Popup menu item element. */
        static readonly ROLE_MENU_ITEM = 38
        
        /** Popup menu check button item element. */
        static readonly ROLE_MENU_ITEM_CHECK_BOX = 39
        
        /** Popup menu radio button item element. */
        static readonly ROLE_MENU_ITEM_RADIO = 40
        
        /** Image element. */
        static readonly ROLE_IMAGE = 41
        
        /** Window element. */
        static readonly ROLE_WINDOW = 42
        
        /** Embedded window title bar element. */
        static readonly ROLE_TITLE_BAR = 43
        
        /** Dialog window element. */
        static readonly ROLE_DIALOG = 44
        
        /** Tooltip element. */
        static readonly ROLE_TOOLTIP = 45
        
        /** Other/unknown popup type. */
        static readonly POPUP_UNKNOWN = 0
        
        /** Popup menu. */
        static readonly POPUP_MENU = 1
        
        /** Popup list. */
        static readonly POPUP_LIST = 2
        
        /** Popup tree view. */
        static readonly POPUP_TREE = 3
        
        /** Popup dialog. */
        static readonly POPUP_DIALOG = 4
        
        /** Element is hidden for accessibility tools. */
        static readonly FLAG_HIDDEN = 0
        static readonly FLAG_LINKED = 1
        
        /** Element is support multiple item selection. */
        static readonly FLAG_MULTISELECTABLE = 2
        
        /** Element require user input. */
        static readonly FLAG_REQUIRED = 3
        
        /** Element is a visited link. */
        static readonly FLAG_VISITED = 4
        
        /** Element content is not ready (e.g. loading). */
        static readonly FLAG_BUSY = 5
        
        /** Element is modal window. */
        static readonly FLAG_MODAL = 6
        
        /** Element allows touches to be passed through when a screen reader is in touch exploration mode. */
        static readonly FLAG_TOUCH_PASSTHROUGH = 7
        
        /** Element is text field with selectable but read-only text. */
        static readonly FLAG_READONLY = 8
        
        /** Element is disabled. */
        static readonly FLAG_DISABLED = 9
        
        /** Element clips children. */
        static readonly FLAG_CLIPS_CHILDREN = 10
        
        /** Single click action, callback argument is not set. */
        static readonly ACTION_CLICK = 0
        
        /** Focus action, callback argument is not set. */
        static readonly ACTION_FOCUS = 1
        
        /** Blur action, callback argument is not set. */
        static readonly ACTION_BLUR = 2
        
        /** Collapse action, callback argument is not set. */
        static readonly ACTION_COLLAPSE = 3
        
        /** Expand action, callback argument is not set. */
        static readonly ACTION_EXPAND = 4
        
        /** Decrement action, callback argument is not set. */
        static readonly ACTION_DECREMENT = 5
        
        /** Increment action, callback argument is not set. */
        static readonly ACTION_INCREMENT = 6
        
        /** Hide tooltip action, callback argument is not set. */
        static readonly ACTION_HIDE_TOOLTIP = 7
        
        /** Show tooltip action, callback argument is not set. */
        static readonly ACTION_SHOW_TOOLTIP = 8
        
        /** Set text selection action, callback argument is set to [Dictionary] with the following keys:  
         *  - `"start_element"` accessibility element of the selection start.  
         *  - `"start_char"` character offset relative to the accessibility element of the selection start.  
         *  - `"end_element"` accessibility element of the selection end.  
         *  - `"end_char"` character offset relative to the accessibility element of the selection end.  
         */
        static readonly ACTION_SET_TEXT_SELECTION = 9
        
        /** Replace text action, callback argument is set to [String] with the replacement text. */
        static readonly ACTION_REPLACE_SELECTED_TEXT = 10
        
        /** Scroll backward action, callback argument is not set. */
        static readonly ACTION_SCROLL_BACKWARD = 11
        
        /** Scroll down action, callback argument is not set. */
        static readonly ACTION_SCROLL_DOWN = 12
        
        /** Scroll forward action, callback argument is not set. */
        static readonly ACTION_SCROLL_FORWARD = 13
        
        /** Scroll left action, callback argument is not set. */
        static readonly ACTION_SCROLL_LEFT = 14
        
        /** Scroll right action, callback argument is not set. */
        static readonly ACTION_SCROLL_RIGHT = 15
        
        /** Scroll up action, callback argument is not set. */
        static readonly ACTION_SCROLL_UP = 16
        
        /** Scroll into view action, callback argument is not set. */
        static readonly ACTION_SCROLL_INTO_VIEW = 17
        
        /** Scroll to point action, callback argument is set to [Vector2] with the relative point coordinates. */
        static readonly ACTION_SCROLL_TO_POINT = 18
        
        /** Set scroll offset action, callback argument is set to [Vector2] with the scroll offset. */
        static readonly ACTION_SET_SCROLL_OFFSET = 19
        
        /** Set value action action, callback argument is set to [String] or number with the new value. */
        static readonly ACTION_SET_VALUE = 20
        
        /** Show context menu action, callback argument is not set. */
        static readonly ACTION_SHOW_CONTEXT_MENU = 21
        
        /** Custom action, callback argument is set to the integer action id. */
        static readonly ACTION_CUSTOM = 22
        
        /** Indicates that updates to the live region should not be presented. */
        static readonly LIVE_OFF = 0
        
        /** Indicates that updates to the live region should be presented at the next opportunity (for example at the end of speaking the current sentence). */
        static readonly LIVE_POLITE = 1
        
        /** Indicates that updates to the live region have the highest priority and should be presented immediately. */
        static readonly LIVE_ASSERTIVE = 2
        
        /** Makes the mouse cursor visible if it is hidden. */
        static readonly MOUSE_MODE_VISIBLE = 0
        
        /** Makes the mouse cursor hidden if it is visible. */
        static readonly MOUSE_MODE_HIDDEN = 1
        
        /** Captures the mouse. The mouse will be hidden and its position locked at the center of the window manager's window.  
         *      
         *  **Note:** If you want to process the mouse's movement in this mode, you need to use [member InputEventMouseMotion.relative].  
         */
        static readonly MOUSE_MODE_CAPTURED = 2
        
        /** Confines the mouse cursor to the game window, and make it visible. */
        static readonly MOUSE_MODE_CONFINED = 3
        
        /** Confines the mouse cursor to the game window, and make it hidden. */
        static readonly MOUSE_MODE_CONFINED_HIDDEN = 4
        
        /** Max value of the [enum MouseMode]. */
        static readonly MOUSE_MODE_MAX = 5
        
        /** Represents the screen containing the mouse pointer.  
         *      
         *  **Note:** On Linux (Wayland), this constant always represents the screen at index `0`.  
         */
        static readonly SCREEN_WITH_MOUSE_FOCUS = -4
        
        /** Represents the screen containing the window with the keyboard focus.  
         *      
         *  **Note:** On Linux (Wayland), this constant always represents the screen at index `0`.  
         */
        static readonly SCREEN_WITH_KEYBOARD_FOCUS = -3
        
        /** Represents the primary screen.  
         *      
         *  **Note:** On Linux (Wayland), this constant always represents the screen at index `0`.  
         */
        static readonly SCREEN_PRIMARY = -2
        
        /** Represents the screen where the main window is located. This is usually the default value in functions that allow specifying one of several screens.  
         *      
         *  **Note:** On Linux (Wayland), this constant always represents the screen at index `0`.  
         */
        static readonly SCREEN_OF_MAIN_WINDOW = -1
        
        /** The ID of the main window spawned by the engine, which can be passed to methods expecting a `window_id`. */
        static readonly MAIN_WINDOW_ID = 0
        
        /** The ID that refers to a nonexistent window. This is returned by some [DisplayServer] methods if no window matches the requested result. */
        static readonly INVALID_WINDOW_ID = -1
        
        /** The ID that refers to a nonexistent application status indicator. */
        static readonly INVALID_INDICATOR_ID = -1
        
        /** Default landscape orientation. */
        static readonly SCREEN_LANDSCAPE = 0
        
        /** Default portrait orientation. */
        static readonly SCREEN_PORTRAIT = 1
        
        /** Reverse landscape orientation (upside down). */
        static readonly SCREEN_REVERSE_LANDSCAPE = 2
        
        /** Reverse portrait orientation (upside down). */
        static readonly SCREEN_REVERSE_PORTRAIT = 3
        
        /** Automatic landscape orientation (default or reverse depending on sensor). */
        static readonly SCREEN_SENSOR_LANDSCAPE = 4
        
        /** Automatic portrait orientation (default or reverse depending on sensor). */
        static readonly SCREEN_SENSOR_PORTRAIT = 5
        
        /** Automatic landscape or portrait orientation (default or reverse depending on sensor). */
        static readonly SCREEN_SENSOR = 6
        
        /** Default text virtual keyboard. */
        static readonly KEYBOARD_TYPE_DEFAULT = 0
        
        /** Multiline virtual keyboard. */
        static readonly KEYBOARD_TYPE_MULTILINE = 1
        
        /** Virtual number keypad, useful for PIN entry. */
        static readonly KEYBOARD_TYPE_NUMBER = 2
        
        /** Virtual number keypad, useful for entering fractional numbers. */
        static readonly KEYBOARD_TYPE_NUMBER_DECIMAL = 3
        
        /** Virtual phone number keypad. */
        static readonly KEYBOARD_TYPE_PHONE = 4
        
        /** Virtual keyboard with additional keys to assist with typing email addresses. */
        static readonly KEYBOARD_TYPE_EMAIL_ADDRESS = 5
        
        /** Virtual keyboard for entering a password. On most platforms, this should disable autocomplete and autocapitalization.  
         *      
         *  **Note:** This is not supported on Web. Instead, this behaves identically to [constant KEYBOARD_TYPE_DEFAULT].  
         */
        static readonly KEYBOARD_TYPE_PASSWORD = 6
        
        /** Virtual keyboard with additional keys to assist with typing URLs. */
        static readonly KEYBOARD_TYPE_URL = 7
        
        /** Arrow cursor shape. This is the default when not pointing anything that overrides the mouse cursor, such as a [LineEdit] or [TextEdit]. */
        static readonly CURSOR_ARROW = 0
        
        /** I-beam cursor shape. This is used by default when hovering a control that accepts text input, such as [LineEdit] or [TextEdit]. */
        static readonly CURSOR_IBEAM = 1
        
        /** Pointing hand cursor shape. This is used by default when hovering a [LinkButton] or a URL tag in a [RichTextLabel]. */
        static readonly CURSOR_POINTING_HAND = 2
        
        /** Crosshair cursor. This is intended to be displayed when the user needs precise aim over an element, such as a rectangle selection tool or a color picker. */
        static readonly CURSOR_CROSS = 3
        
        /** Wait cursor. On most cursor themes, this displays a spinning icon  *besides*  the arrow. Intended to be used for non-blocking operations (when the user can do something else at the moment). See also [constant CURSOR_BUSY]. */
        static readonly CURSOR_WAIT = 4
        
        /** Wait cursor. On most cursor themes, this  *replaces*  the arrow with a spinning icon. Intended to be used for blocking operations (when the user can't do anything else at the moment). See also [constant CURSOR_WAIT]. */
        static readonly CURSOR_BUSY = 5
        
        /** Dragging hand cursor. This is displayed during drag-and-drop operations. See also [constant CURSOR_CAN_DROP]. */
        static readonly CURSOR_DRAG = 6
        
        /** "Can drop" cursor. This is displayed during drag-and-drop operations if hovering over a [Control] that can accept the drag-and-drop event. On most cursor themes, this displays a dragging hand with an arrow symbol besides it. See also [constant CURSOR_DRAG]. */
        static readonly CURSOR_CAN_DROP = 7
        
        /** Forbidden cursor. This is displayed during drag-and-drop operations if the hovered [Control] can't accept the drag-and-drop event. */
        static readonly CURSOR_FORBIDDEN = 8
        
        /** Vertical resize cursor. Intended to be displayed when the hovered [Control] can be vertically resized using the mouse. See also [constant CURSOR_VSPLIT]. */
        static readonly CURSOR_VSIZE = 9
        
        /** Horizontal resize cursor. Intended to be displayed when the hovered [Control] can be horizontally resized using the mouse. See also [constant CURSOR_HSPLIT]. */
        static readonly CURSOR_HSIZE = 10
        
        /** Secondary diagonal resize cursor (top-right/bottom-left). Intended to be displayed when the hovered [Control] can be resized on both axes at once using the mouse. */
        static readonly CURSOR_BDIAGSIZE = 11
        
        /** Main diagonal resize cursor (top-left/bottom-right). Intended to be displayed when the hovered [Control] can be resized on both axes at once using the mouse. */
        static readonly CURSOR_FDIAGSIZE = 12
        
        /** Move cursor. Intended to be displayed when the hovered [Control] can be moved using the mouse. */
        static readonly CURSOR_MOVE = 13
        
        /** Vertical split cursor. This is displayed when hovering a [Control] with splits that can be vertically resized using the mouse, such as [VSplitContainer]. On some cursor themes, this cursor may have the same appearance as [constant CURSOR_VSIZE]. */
        static readonly CURSOR_VSPLIT = 14
        
        /** Horizontal split cursor. This is displayed when hovering a [Control] with splits that can be horizontally resized using the mouse, such as [HSplitContainer]. On some cursor themes, this cursor may have the same appearance as [constant CURSOR_HSIZE]. */
        static readonly CURSOR_HSPLIT = 15
        
        /** Help cursor. On most cursor themes, this displays a question mark icon instead of the mouse cursor. Intended to be used when the user has requested help on the next element that will be clicked. */
        static readonly CURSOR_HELP = 16
        
        /** Represents the size of the [enum CursorShape] enum. */
        static readonly CURSOR_MAX = 17
        
        /** The native file dialog allows selecting one, and only one file. */
        static readonly FILE_DIALOG_MODE_OPEN_FILE = 0
        
        /** The native file dialog allows selecting multiple files. */
        static readonly FILE_DIALOG_MODE_OPEN_FILES = 1
        
        /** The native file dialog only allows selecting a directory, disallowing the selection of any file. */
        static readonly FILE_DIALOG_MODE_OPEN_DIR = 2
        
        /** The native file dialog allows selecting one file or directory. */
        static readonly FILE_DIALOG_MODE_OPEN_ANY = 3
        
        /** The native file dialog will warn when a file exists. */
        static readonly FILE_DIALOG_MODE_SAVE_FILE = 4
        
        /** Windowed mode, i.e. [Window] doesn't occupy the whole screen (unless set to the size of the screen). */
        static readonly WINDOW_MODE_WINDOWED = 0
        
        /** Minimized window mode, i.e. [Window] is not visible and available on window manager's window list. Normally happens when the minimize button is pressed. */
        static readonly WINDOW_MODE_MINIMIZED = 1
        
        /** Maximized window mode, i.e. [Window] will occupy whole screen area except task bar and still display its borders. Normally happens when the maximize button is pressed. */
        static readonly WINDOW_MODE_MAXIMIZED = 2
        
        /** Full screen mode with full multi-window support.  
         *  Full screen window covers the entire display area of a screen and has no decorations. The display's video mode is not changed.  
         *  **On Android:** This enables immersive mode.  
         *  **On macOS:** A new desktop is used to display the running project.  
         *      
         *  **Note:** Regardless of the platform, enabling full screen will change the window size to match the monitor's size. Therefore, make sure your project supports [url=https://docs.godotengine.org/en/latest/tutorials/rendering/multiple_resolutions.html]multiple resolutions[/url] when enabling full screen mode.  
         */
        static readonly WINDOW_MODE_FULLSCREEN = 3
        
        /** A single window full screen mode. This mode has less overhead, but only one window can be open on a given screen at a time (opening a child window or application switching will trigger a full screen transition).  
         *  Full screen window covers the entire display area of a screen and has no border or decorations. The display's video mode is not changed.  
         *  **On Android:** This enables immersive mode.  
         *  **On Windows:** Depending on video driver, full screen transition might cause screens to go black for a moment.  
         *  **On macOS:** A new desktop is used to display the running project. Exclusive full screen mode prevents Dock and Menu from showing up when the mouse pointer is hovering the edge of the screen.  
         *  **On Linux (X11):** Exclusive full screen mode bypasses compositor.  
         *  **On Linux (Wayland):** Equivalent to [constant WINDOW_MODE_FULLSCREEN].  
         *      
         *  **Note:** Regardless of the platform, enabling full screen will change the window size to match the monitor's size. Therefore, make sure your project supports [url=https://docs.godotengine.org/en/latest/tutorials/rendering/multiple_resolutions.html]multiple resolutions[/url] when enabling full screen mode.  
         */
        static readonly WINDOW_MODE_EXCLUSIVE_FULLSCREEN = 4
        
        /** The window can't be resized by dragging its resize grip. It's still possible to resize the window using [method window_set_size]. This flag is ignored for full screen windows. */
        static readonly WINDOW_FLAG_RESIZE_DISABLED = 0
        
        /** The window do not have native title bar and other decorations. This flag is ignored for full-screen windows. */
        static readonly WINDOW_FLAG_BORDERLESS = 1
        
        /** The window is floating on top of all other windows. This flag is ignored for full-screen windows. */
        static readonly WINDOW_FLAG_ALWAYS_ON_TOP = 2
        
        /** The window background can be transparent.  
         *      
         *  **Note:** This flag has no effect if [method is_window_transparency_available] returns `false`.  
         *      
         *  **Note:** Transparency support is implemented on Linux (X11/Wayland), macOS, and Windows, but availability might vary depending on GPU driver, display manager, and compositor capabilities.  
         */
        static readonly WINDOW_FLAG_TRANSPARENT = 3
        
        /** The window can't be focused. No-focus window will ignore all input, except mouse clicks. */
        static readonly WINDOW_FLAG_NO_FOCUS = 4
        
        /** Window is part of menu or [OptionButton] dropdown. This flag can't be changed when the window is visible. An active popup window will exclusively receive all input, without stealing focus from its parent. Popup windows are automatically closed when uses click outside it, or when an application is switched. Popup window must have transient parent set (see [method window_set_transient]). */
        static readonly WINDOW_FLAG_POPUP = 5
        
        /** Window content is expanded to the full size of the window. Unlike borderless window, the frame is left intact and can be used to resize the window, title bar is transparent, but have minimize/maximize/close buttons.  
         *  Use [method window_set_window_buttons_offset] to adjust minimize/maximize/close buttons offset.  
         *  Use [method window_get_safe_title_margins] to determine area under the title bar that is not covered by decorations.  
         *      
         *  **Note:** This flag is implemented only on macOS.  
         */
        static readonly WINDOW_FLAG_EXTEND_TO_TITLE = 6
        
        /** All mouse events are passed to the underlying window of the same application. */
        static readonly WINDOW_FLAG_MOUSE_PASSTHROUGH = 7
        
        /** Window style is overridden, forcing sharp corners.  
         *      
         *  **Note:** This flag is implemented only on Windows (11).  
         */
        static readonly WINDOW_FLAG_SHARP_CORNERS = 8
        
        /** Window is excluded from screenshots taken by [method screen_get_image], [method screen_get_image_rect], and [method screen_get_pixel].  
         *      
         *  **Note:** This flag is implemented on macOS and Windows.  
         *      
         *  **Note:** Setting this flag will **NOT** prevent other apps from capturing an image. It should not be used as a security measure.  
         */
        static readonly WINDOW_FLAG_EXCLUDE_FROM_CAPTURE = 9
        
        /** Signals the window manager that this window is supposed to be an implementation-defined "popup" (usually a floating, borderless, untileable and immovable child window). */
        static readonly WINDOW_FLAG_POPUP_WM_HINT = 10
        
        /** Window minimize button is disabled.  
         *      
         *  **Note:** This flag is implemented on macOS and Windows.  
         */
        static readonly WINDOW_FLAG_MINIMIZE_DISABLED = 11
        
        /** Window maximize button is disabled.  
         *      
         *  **Note:** This flag is implemented on macOS and Windows.  
         */
        static readonly WINDOW_FLAG_MAXIMIZE_DISABLED = 12
        
        /** Max value of the [enum WindowFlags]. */
        static readonly WINDOW_FLAG_MAX = 13
        
        /** Sent when the mouse pointer enters the window. */
        static readonly WINDOW_EVENT_MOUSE_ENTER = 0
        
        /** Sent when the mouse pointer exits the window. */
        static readonly WINDOW_EVENT_MOUSE_EXIT = 1
        
        /** Sent when the window grabs focus. */
        static readonly WINDOW_EVENT_FOCUS_IN = 2
        
        /** Sent when the window loses focus. */
        static readonly WINDOW_EVENT_FOCUS_OUT = 3
        
        /** Sent when the user has attempted to close the window (e.g. close button is pressed). */
        static readonly WINDOW_EVENT_CLOSE_REQUEST = 4
        
        /** Sent when the device "Back" button is pressed.  
         *      
         *  **Note:** This event is implemented only on Android.  
         */
        static readonly WINDOW_EVENT_GO_BACK_REQUEST = 5
        
        /** Sent when the window is moved to the display with different DPI, or display DPI is changed.  
         *      
         *  **Note:** This flag is implemented only on macOS and Linux (Wayland).  
         */
        static readonly WINDOW_EVENT_DPI_CHANGE = 6
        
        /** Sent when the window title bar decoration is changed (e.g. [constant WINDOW_FLAG_EXTEND_TO_TITLE] is set or window entered/exited full screen mode).  
         *      
         *  **Note:** This flag is implemented only on macOS.  
         */
        static readonly WINDOW_EVENT_TITLEBAR_CHANGE = 7
        
        /** Sent when the window has been forcibly closed by the Display Server. The window shall immediately hide and clean any internal rendering references.  
         *      
         *  **Note:** This flag is implemented only on Linux (Wayland).  
         */
        static readonly WINDOW_EVENT_FORCE_CLOSE = 8
        
        /** Top-left edge of a window. */
        static readonly WINDOW_EDGE_TOP_LEFT = 0
        
        /** Top edge of a window. */
        static readonly WINDOW_EDGE_TOP = 1
        
        /** Top-right edge of a window. */
        static readonly WINDOW_EDGE_TOP_RIGHT = 2
        
        /** Left edge of a window. */
        static readonly WINDOW_EDGE_LEFT = 3
        
        /** Right edge of a window. */
        static readonly WINDOW_EDGE_RIGHT = 4
        
        /** Bottom-left edge of a window. */
        static readonly WINDOW_EDGE_BOTTOM_LEFT = 5
        
        /** Bottom edge of a window. */
        static readonly WINDOW_EDGE_BOTTOM = 6
        
        /** Bottom-right edge of a window. */
        static readonly WINDOW_EDGE_BOTTOM_RIGHT = 7
        
        /** Represents the size of the [enum WindowResizeEdge] enum. */
        static readonly WINDOW_EDGE_MAX = 8
        
        /** No vertical synchronization, which means the engine will display frames as fast as possible (tearing may be visible). Framerate is unlimited (regardless of [member Engine.max_fps]). */
        static readonly VSYNC_DISABLED = 0
        
        /** Default vertical synchronization mode, the image is displayed only on vertical blanking intervals (no tearing is visible). Framerate is limited by the monitor refresh rate (regardless of [member Engine.max_fps]). */
        static readonly VSYNC_ENABLED = 1
        
        /** Behaves like [constant VSYNC_DISABLED] when the framerate drops below the screen's refresh rate to reduce stuttering (tearing may be visible). Otherwise, vertical synchronization is enabled to avoid tearing. Framerate is limited by the monitor refresh rate (regardless of [member Engine.max_fps]). Behaves like [constant VSYNC_ENABLED] when using the Compatibility rendering method. */
        static readonly VSYNC_ADAPTIVE = 2
        
        /** Displays the most recent image in the queue on vertical blanking intervals, while rendering to the other images (no tearing is visible). Framerate is unlimited (regardless of [member Engine.max_fps]).  
         *  Although not guaranteed, the images can be rendered as fast as possible, which may reduce input lag (also called "Fast" V-Sync mode). [constant VSYNC_MAILBOX] works best when at least twice as many frames as the display refresh rate are rendered. Behaves like [constant VSYNC_ENABLED] when using the Compatibility rendering method.  
         */
        static readonly VSYNC_MAILBOX = 3
        
        /** Display handle:  
         *  - Linux (X11): `X11::Display*` for the display.  
         *  - Linux (Wayland): `wl_display` for the display.  
         *  - Android: `EGLDisplay` for the display.  
         */
        static readonly DISPLAY_HANDLE = 0
        
        /** Window handle:  
         *  - Windows: `HWND` for the window.  
         *  - Linux (X11): `X11::Window*` for the window.  
         *  - Linux (Wayland): `wl_surface` for the window.  
         *  - macOS: `NSWindow*` for the window.  
         *  - iOS: `UIViewController*` for the view controller.  
         *  - Android: `jObject` for the activity.  
         */
        static readonly WINDOW_HANDLE = 1
        
        /** Window view:  
         *  - Windows: `HDC` for the window (only with the Compatibility renderer).  
         *  - macOS: `NSView*` for the window main view.  
         *  - iOS: `UIView*` for the window main view.  
         */
        static readonly WINDOW_VIEW = 2
        
        /** OpenGL context (only with the Compatibility renderer):  
         *  - Windows: `HGLRC` for the window (native GL), or `EGLContext` for the window (ANGLE).  
         *  - Linux (X11): `GLXContext*` for the window.  
         *  - Linux (Wayland): `EGLContext` for the window.  
         *  - macOS: `NSOpenGLContext*` for the window (native GL), or `EGLContext` for the window (ANGLE).  
         *  - Android: `EGLContext` for the window.  
         */
        static readonly OPENGL_CONTEXT = 3
        
        /** - Windows: `EGLDisplay` for the window (ANGLE).  
         *  - macOS: `EGLDisplay` for the window (ANGLE).  
         *  - Linux (Wayland): `EGLDisplay` for the window.  
         */
        static readonly EGL_DISPLAY = 4
        
        /** - Windows: `EGLConfig` for the window (ANGLE).  
         *  - macOS: `EGLConfig` for the window (ANGLE).  
         *  - Linux (Wayland): `EGLConfig` for the window.  
         */
        static readonly EGL_CONFIG = 5
        
        /** Utterance has begun to be spoken. */
        static readonly TTS_UTTERANCE_STARTED = 0
        
        /** Utterance was successfully finished. */
        static readonly TTS_UTTERANCE_ENDED = 1
        
        /** Utterance was canceled, or TTS service was unable to process it. */
        static readonly TTS_UTTERANCE_CANCELED = 2
        
        /** Utterance reached a word or sentence boundary. */
        static readonly TTS_UTTERANCE_BOUNDARY = 3
        
        /** Returns `true` if the specified [param feature] is supported by the current [DisplayServer], `false` otherwise. */
        static hasFeature(feature: DisplayServer.Feature): boolean
        
        /** Returns the name of the [DisplayServer] currently in use. Most operating systems only have a single [DisplayServer], but Linux has access to more than one [DisplayServer] (currently X11 and Wayland).  
         *  The names of built-in display servers are `Windows`, `macOS`, `X11` (Linux), `Wayland` (Linux), `Android`, `iOS`, `web` (HTML5), and `headless` (when started with the `--headless` [url=https://docs.godotengine.org/en/latest/tutorials/editor/command_line_tutorial.html]command line argument[/url]).  
         */
        static getName(): string
        
        /** Sets native help system search callbacks.  
         *  [param search_callback] has the following arguments: `String search_string, int result_limit` and return a [Dictionary] with "key, display name" pairs for the search results. Called when the user enters search terms in the `Help` menu.  
         *  [param action_callback] has the following arguments: `String key`. Called when the user selects a search result in the `Help` menu.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static helpSetSearchCallbacks(searchCallback: Callable, actionCallback: Callable): void
        
        /** Registers callables to emit when the menu is respectively about to show or closed. Callback methods should have zero arguments. */
        static globalMenuSetPopupCallbacks(menuRoot: string, openCallback: Callable, closeCallback: Callable): void
        
        /** Adds an item that will act as a submenu of the global menu [param menu_root]. The [param submenu] argument is the ID of the global menu root that will be shown when the item is clicked.  
         *  Returns index of the inserted item, it's not guaranteed to be the same as [param index] value.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         *  **Supported system menu IDs:**  
         *  [codeblock lang=text]  
         *  "_main" - Main menu (macOS).  
         *  "_dock" - Dock popup menu (macOS).  
         *  "_apple" - Apple menu (macOS, custom items added before "Services").  
         *  "_window" - Window menu (macOS, custom items added after "Bring All to Front").  
         *  "_help" - Help menu (macOS).  
         *  [/codeblock]  
         */
        static globalMenuAddSubmenuItem(menuRoot: string, label: string, submenu: string, index?: int64 /* = -1 */): int64
        
        /** Adds a new item with text [param label] to the global menu with ID [param menu_root].  
         *  Returns index of the inserted item, it's not guaranteed to be the same as [param index] value.  
         *  An [param accelerator] can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The [param accelerator] is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` ([kbd]Ctrl + A[/kbd]).  
         *      
         *  **Note:** The [param callback] and [param key_callback] Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to [param tag].  
         *      
         *  **Note:** This method is implemented only on macOS.  
         *  **Supported system menu IDs:**  
         *  [codeblock lang=text]  
         *  "_main" - Main menu (macOS).  
         *  "_dock" - Dock popup menu (macOS).  
         *  "_apple" - Apple menu (macOS, custom items added before "Services").  
         *  "_window" - Window menu (macOS, custom items added after "Bring All to Front").  
         *  "_help" - Help menu (macOS).  
         *  [/codeblock]  
         */
        static globalMenuAddItem(menuRoot: string, label: string, callback?: Callable /* = new Callable() */, keyCallback?: Callable /* = new Callable() */, tag?: any /* = <any> {} */, accelerator?: Key /* = 0 */, index?: int64 /* = -1 */): int64
        
        /** Adds a new checkable item with text [param label] to the global menu with ID [param menu_root].  
         *  Returns index of the inserted item, it's not guaranteed to be the same as [param index] value.  
         *  An [param accelerator] can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The [param accelerator] is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` ([kbd]Ctrl + A[/kbd]).  
         *      
         *  **Note:** The [param callback] and [param key_callback] Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to [param tag].  
         *      
         *  **Note:** This method is implemented only on macOS.  
         *  **Supported system menu IDs:**  
         *  [codeblock lang=text]  
         *  "_main" - Main menu (macOS).  
         *  "_dock" - Dock popup menu (macOS).  
         *  "_apple" - Apple menu (macOS, custom items added before "Services").  
         *  "_window" - Window menu (macOS, custom items added after "Bring All to Front").  
         *  "_help" - Help menu (macOS).  
         *  [/codeblock]  
         */
        static globalMenuAddCheckItem(menuRoot: string, label: string, callback?: Callable /* = new Callable() */, keyCallback?: Callable /* = new Callable() */, tag?: any /* = <any> {} */, accelerator?: Key /* = 0 */, index?: int64 /* = -1 */): int64
        
        /** Adds a new item with text [param label] and icon [param icon] to the global menu with ID [param menu_root].  
         *  Returns index of the inserted item, it's not guaranteed to be the same as [param index] value.  
         *  An [param accelerator] can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The [param accelerator] is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` ([kbd]Ctrl + A[/kbd]).  
         *      
         *  **Note:** The [param callback] and [param key_callback] Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to [param tag].  
         *      
         *  **Note:** This method is implemented only on macOS.  
         *  **Supported system menu IDs:**  
         *  [codeblock lang=text]  
         *  "_main" - Main menu (macOS).  
         *  "_dock" - Dock popup menu (macOS).  
         *  "_apple" - Apple menu (macOS, custom items added before "Services").  
         *  "_window" - Window menu (macOS, custom items added after "Bring All to Front").  
         *  "_help" - Help menu (macOS).  
         *  [/codeblock]  
         */
        static globalMenuAddIconItem(menuRoot: string, icon: Texture2D, label: string, callback?: Callable /* = new Callable() */, keyCallback?: Callable /* = new Callable() */, tag?: any /* = <any> {} */, accelerator?: Key /* = 0 */, index?: int64 /* = -1 */): int64
        
        /** Adds a new checkable item with text [param label] and icon [param icon] to the global menu with ID [param menu_root].  
         *  Returns index of the inserted item, it's not guaranteed to be the same as [param index] value.  
         *  An [param accelerator] can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The [param accelerator] is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` ([kbd]Ctrl + A[/kbd]).  
         *      
         *  **Note:** The [param callback] and [param key_callback] Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to [param tag].  
         *      
         *  **Note:** This method is implemented only on macOS.  
         *  **Supported system menu IDs:**  
         *  [codeblock lang=text]  
         *  "_main" - Main menu (macOS).  
         *  "_dock" - Dock popup menu (macOS).  
         *  "_apple" - Apple menu (macOS, custom items added before "Services").  
         *  "_window" - Window menu (macOS, custom items added after "Bring All to Front").  
         *  "_help" - Help menu (macOS).  
         *  [/codeblock]  
         */
        static globalMenuAddIconCheckItem(menuRoot: string, icon: Texture2D, label: string, callback?: Callable /* = new Callable() */, keyCallback?: Callable /* = new Callable() */, tag?: any /* = <any> {} */, accelerator?: Key /* = 0 */, index?: int64 /* = -1 */): int64
        
        /** Adds a new radio-checkable item with text [param label] to the global menu with ID [param menu_root].  
         *  Returns index of the inserted item, it's not guaranteed to be the same as [param index] value.  
         *  An [param accelerator] can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The [param accelerator] is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` ([kbd]Ctrl + A[/kbd]).  
         *      
         *  **Note:** Radio-checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method global_menu_set_item_checked] for more info on how to control it.  
         *      
         *  **Note:** The [param callback] and [param key_callback] Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to [param tag].  
         *      
         *  **Note:** This method is implemented only on macOS.  
         *  **Supported system menu IDs:**  
         *  [codeblock lang=text]  
         *  "_main" - Main menu (macOS).  
         *  "_dock" - Dock popup menu (macOS).  
         *  "_apple" - Apple menu (macOS, custom items added before "Services").  
         *  "_window" - Window menu (macOS, custom items added after "Bring All to Front").  
         *  "_help" - Help menu (macOS).  
         *  [/codeblock]  
         */
        static globalMenuAddRadioCheckItem(menuRoot: string, label: string, callback?: Callable /* = new Callable() */, keyCallback?: Callable /* = new Callable() */, tag?: any /* = <any> {} */, accelerator?: Key /* = 0 */, index?: int64 /* = -1 */): int64
        
        /** Adds a new radio-checkable item with text [param label] and icon [param icon] to the global menu with ID [param menu_root].  
         *  Returns index of the inserted item, it's not guaranteed to be the same as [param index] value.  
         *  An [param accelerator] can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The [param accelerator] is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` ([kbd]Ctrl + A[/kbd]).  
         *      
         *  **Note:** Radio-checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method global_menu_set_item_checked] for more info on how to control it.  
         *      
         *  **Note:** The [param callback] and [param key_callback] Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to [param tag].  
         *      
         *  **Note:** This method is implemented only on macOS.  
         *  **Supported system menu IDs:**  
         *  [codeblock lang=text]  
         *  "_main" - Main menu (macOS).  
         *  "_dock" - Dock popup menu (macOS).  
         *  "_apple" - Apple menu (macOS, custom items added before "Services").  
         *  "_window" - Window menu (macOS, custom items added after "Bring All to Front").  
         *  "_help" - Help menu (macOS).  
         *  [/codeblock]  
         */
        static globalMenuAddIconRadioCheckItem(menuRoot: string, icon: Texture2D, label: string, callback?: Callable /* = new Callable() */, keyCallback?: Callable /* = new Callable() */, tag?: any /* = <any> {} */, accelerator?: Key /* = 0 */, index?: int64 /* = -1 */): int64
        
        /** Adds a new item with text [param label] to the global menu with ID [param menu_root].  
         *  Contrarily to normal binary items, multistate items can have more than two states, as defined by [param max_states]. Each press or activate of the item will increase the state by one. The default value is defined by [param default_state].  
         *  Returns index of the inserted item, it's not guaranteed to be the same as [param index] value.  
         *  An [param accelerator] can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The [param accelerator] is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` ([kbd]Ctrl + A[/kbd]).  
         *      
         *  **Note:** By default, there's no indication of the current item state, it should be changed manually.  
         *      
         *  **Note:** The [param callback] and [param key_callback] Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to [param tag].  
         *      
         *  **Note:** This method is implemented only on macOS.  
         *  **Supported system menu IDs:**  
         *  [codeblock lang=text]  
         *  "_main" - Main menu (macOS).  
         *  "_dock" - Dock popup menu (macOS).  
         *  "_apple" - Apple menu (macOS, custom items added before "Services").  
         *  "_window" - Window menu (macOS, custom items added after "Bring All to Front").  
         *  "_help" - Help menu (macOS).  
         *  [/codeblock]  
         */
        static globalMenuAddMultistateItem(menuRoot: string, label: string, maxStates: int64, defaultState: int64, callback?: Callable /* = new Callable() */, keyCallback?: Callable /* = new Callable() */, tag?: any /* = <any> {} */, accelerator?: Key /* = 0 */, index?: int64 /* = -1 */): int64
        
        /** Adds a separator between items to the global menu with ID [param menu_root]. Separators also occupy an index.  
         *  Returns index of the inserted item, it's not guaranteed to be the same as [param index] value.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         *  **Supported system menu IDs:**  
         *  [codeblock lang=text]  
         *  "_main" - Main menu (macOS).  
         *  "_dock" - Dock popup menu (macOS).  
         *  "_apple" - Apple menu (macOS, custom items added before "Services").  
         *  "_window" - Window menu (macOS, custom items added after "Bring All to Front").  
         *  "_help" - Help menu (macOS).  
         *  [/codeblock]  
         */
        static globalMenuAddSeparator(menuRoot: string, index?: int64 /* = -1 */): int64
        
        /** Returns the index of the item with the specified [param text]. Indices are automatically assigned to each item by the engine, and cannot be set manually.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static globalMenuGetItemIndexFromText(menuRoot: string, text: string): int64
        
        /** Returns the index of the item with the specified [param tag]. Indices are automatically assigned to each item by the engine, and cannot be set manually.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static globalMenuGetItemIndexFromTag(menuRoot: string, tag: any): int64
        
        /** Returns `true` if the item at index [param idx] is checked.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static globalMenuIsItemChecked(menuRoot: string, idx: int64): boolean
        
        /** Returns `true` if the item at index [param idx] is checkable in some way, i.e. if it has a checkbox or radio button.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static globalMenuIsItemCheckable(menuRoot: string, idx: int64): boolean
        
        /** Returns `true` if the item at index [param idx] has radio button-style checkability.  
         *      
         *  **Note:** This is purely cosmetic; you must add the logic for checking/unchecking items in radio groups.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static globalMenuIsItemRadioCheckable(menuRoot: string, idx: int64): boolean
        
        /** Returns the callback of the item at index [param idx].  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static globalMenuGetItemCallback(menuRoot: string, idx: int64): Callable
        
        /** Returns the callback of the item accelerator at index [param idx].  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static globalMenuGetItemKeyCallback(menuRoot: string, idx: int64): Callable
        
        /** Returns the metadata of the specified item, which might be of any type. You can set it with [method global_menu_set_item_tag], which provides a simple way of assigning context data to items.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static globalMenuGetItemTag(menuRoot: string, idx: int64): any
        
        /** Returns the text of the item at index [param idx].  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static globalMenuGetItemText(menuRoot: string, idx: int64): string
        
        /** Returns the submenu ID of the item at index [param idx]. See [method global_menu_add_submenu_item] for more info on how to add a submenu.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static globalMenuGetItemSubmenu(menuRoot: string, idx: int64): string
        
        /** Returns the accelerator of the item at index [param idx]. Accelerators are special combinations of keys that activate the item, no matter which control is focused.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static globalMenuGetItemAccelerator(menuRoot: string, idx: int64): Key
        
        /** Returns `true` if the item at index [param idx] is disabled. When it is disabled it can't be selected, or its action invoked.  
         *  See [method global_menu_set_item_disabled] for more info on how to disable an item.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static globalMenuIsItemDisabled(menuRoot: string, idx: int64): boolean
        
        /** Returns `true` if the item at index [param idx] is hidden.  
         *  See [method global_menu_set_item_hidden] for more info on how to hide an item.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static globalMenuIsItemHidden(menuRoot: string, idx: int64): boolean
        
        /** Returns the tooltip associated with the specified index [param idx].  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static globalMenuGetItemTooltip(menuRoot: string, idx: int64): string
        
        /** Returns the state of a multistate item. See [method global_menu_add_multistate_item] for details.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static globalMenuGetItemState(menuRoot: string, idx: int64): int64
        
        /** Returns number of states of a multistate item. See [method global_menu_add_multistate_item] for details.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static globalMenuGetItemMaxStates(menuRoot: string, idx: int64): int64
        
        /** Returns the icon of the item at index [param idx].  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static globalMenuGetItemIcon(menuRoot: string, idx: int64): null | Texture2D
        
        /** Returns the horizontal offset of the item at the given [param idx].  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static globalMenuGetItemIndentationLevel(menuRoot: string, idx: int64): int64
        
        /** Sets the checkstate status of the item at index [param idx].  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static globalMenuSetItemChecked(menuRoot: string, idx: int64, checked: boolean): void
        
        /** Sets whether the item at index [param idx] has a checkbox. If `false`, sets the type of the item to plain text.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static globalMenuSetItemCheckable(menuRoot: string, idx: int64, checkable: boolean): void
        
        /** Sets the type of the item at the specified index [param idx] to radio button. If `false`, sets the type of the item to plain text.  
         *      
         *  **Note:** This is purely cosmetic; you must add the logic for checking/unchecking items in radio groups.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static globalMenuSetItemRadioCheckable(menuRoot: string, idx: int64, checkable: boolean): void
        
        /** Sets the callback of the item at index [param idx]. Callback is emitted when an item is pressed.  
         *      
         *  **Note:** The [param callback] Callable needs to accept exactly one Variant parameter, the parameter passed to the Callable will be the value passed to the `tag` parameter when the menu item was created.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static globalMenuSetItemCallback(menuRoot: string, idx: int64, callback: Callable): void
        
        /** Sets the callback of the item at index [param idx]. The callback is emitted when an item is hovered.  
         *      
         *  **Note:** The [param callback] Callable needs to accept exactly one Variant parameter, the parameter passed to the Callable will be the value passed to the `tag` parameter when the menu item was created.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static globalMenuSetItemHoverCallbacks(menuRoot: string, idx: int64, callback: Callable): void
        
        /** Sets the callback of the item at index [param idx]. Callback is emitted when its accelerator is activated.  
         *      
         *  **Note:** The [param key_callback] Callable needs to accept exactly one Variant parameter, the parameter passed to the Callable will be the value passed to the `tag` parameter when the menu item was created.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static globalMenuSetItemKeyCallback(menuRoot: string, idx: int64, keyCallback: Callable): void
        
        /** Sets the metadata of an item, which may be of any type. You can later get it with [method global_menu_get_item_tag], which provides a simple way of assigning context data to items.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static globalMenuSetItemTag(menuRoot: string, idx: int64, tag: any): void
        
        /** Sets the text of the item at index [param idx].  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static globalMenuSetItemText(menuRoot: string, idx: int64, text: string): void
        
        /** Sets the submenu of the item at index [param idx]. The submenu is the ID of a global menu root that would be shown when the item is clicked.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static globalMenuSetItemSubmenu(menuRoot: string, idx: int64, submenu: string): void
        
        /** Sets the accelerator of the item at index [param idx]. [param keycode] can be a single [enum Key], or a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` ([kbd]Ctrl + A[/kbd]).  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static globalMenuSetItemAccelerator(menuRoot: string, idx: int64, keycode: Key): void
        
        /** Enables/disables the item at index [param idx]. When it is disabled, it can't be selected and its action can't be invoked.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static globalMenuSetItemDisabled(menuRoot: string, idx: int64, disabled: boolean): void
        
        /** Hides/shows the item at index [param idx]. When it is hidden, an item does not appear in a menu and its action cannot be invoked.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static globalMenuSetItemHidden(menuRoot: string, idx: int64, hidden: boolean): void
        
        /** Sets the [String] tooltip of the item at the specified index [param idx].  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static globalMenuSetItemTooltip(menuRoot: string, idx: int64, tooltip: string): void
        
        /** Sets the state of a multistate item. See [method global_menu_add_multistate_item] for details.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static globalMenuSetItemState(menuRoot: string, idx: int64, state: int64): void
        
        /** Sets number of state of a multistate item. See [method global_menu_add_multistate_item] for details.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static globalMenuSetItemMaxStates(menuRoot: string, idx: int64, maxStates: int64): void
        
        /** Replaces the [Texture2D] icon of the specified [param idx].  
         *      
         *  **Note:** This method is implemented only on macOS.  
         *      
         *  **Note:** This method is not supported by macOS "_dock" menu items.  
         */
        static globalMenuSetItemIcon(menuRoot: string, idx: int64, icon: Texture2D): void
        
        /** Sets the horizontal offset of the item at the given [param idx].  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static globalMenuSetItemIndentationLevel(menuRoot: string, idx: int64, level: int64): void
        
        /** Returns number of items in the global menu with ID [param menu_root].  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static globalMenuGetItemCount(menuRoot: string): int64
        
        /** Removes the item at index [param idx] from the global menu [param menu_root].  
         *      
         *  **Note:** The indices of items after the removed item will be shifted by one.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static globalMenuRemoveItem(menuRoot: string, idx: int64): void
        
        /** Removes all items from the global menu with ID [param menu_root].  
         *      
         *  **Note:** This method is implemented only on macOS.  
         *  **Supported system menu IDs:**  
         *  [codeblock lang=text]  
         *  "_main" - Main menu (macOS).  
         *  "_dock" - Dock popup menu (macOS).  
         *  "_apple" - Apple menu (macOS, custom items added before "Services").  
         *  "_window" - Window menu (macOS, custom items added after "Bring All to Front").  
         *  "_help" - Help menu (macOS).  
         *  [/codeblock]  
         */
        static globalMenuClear(menuRoot: string): void
        
        /** Returns Dictionary of supported system menu IDs and names.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static globalMenuGetSystemMenuRoots(): GDictionary
        
        /** Returns `true` if the synthesizer is generating speech, or have utterance waiting in the queue.  
         *      
         *  **Note:** This method is implemented on Android, iOS, Web, Linux (X11/Wayland), macOS, and Windows.  
         */
        static ttsIsSpeaking(): boolean
        
        /** Returns `true` if the synthesizer is in a paused state.  
         *      
         *  **Note:** This method is implemented on Android, iOS, Web, Linux (X11/Wayland), macOS, and Windows.  
         */
        static ttsIsPaused(): boolean
        
        /** Returns an [Array] of voice information dictionaries.  
         *  Each [Dictionary] contains two [String] entries:  
         *  - `name` is voice name.  
         *  - `id` is voice identifier.  
         *  - `language` is language code in `lang_Variant` format. The `lang` part is a 2 or 3-letter code based on the ISO-639 standard, in lowercase. The [code skip-lint]Variant` part is an engine-dependent string describing country, region or/and dialect.  
         *  Note that Godot depends on system libraries for text-to-speech functionality. These libraries are installed by default on Windows and macOS, but not on all Linux distributions. If they are not present, this method will return an empty list. This applies to both Godot users on Linux, as well as end-users on Linux running Godot games that use text-to-speech.  
         *      
         *  **Note:** This method is implemented on Android, iOS, Web, Linux (X11/Wayland), macOS, and Windows.  
         */
        static ttsGetVoices(): GArray
        
        /** Returns an [PackedStringArray] of voice identifiers for the [param language].  
         *      
         *  **Note:** This method is implemented on Android, iOS, Web, Linux (X11/Wayland), macOS, and Windows.  
         */
        static ttsGetVoicesForLanguage(language: string): PackedStringArray
        
        /** Adds an utterance to the queue. If [param interrupt] is `true`, the queue is cleared first.  
         *  - [param voice] identifier is one of the `"id"` values returned by [method tts_get_voices] or one of the values returned by [method tts_get_voices_for_language].  
         *  - [param volume] ranges from `0` (lowest) to `100` (highest).  
         *  - [param pitch] ranges from `0.0` (lowest) to `2.0` (highest), `1.0` is default pitch for the current voice.  
         *  - [param rate] ranges from `0.1` (lowest) to `10.0` (highest), `1.0` is a normal speaking rate. Other values act as a percentage relative.  
         *  - [param utterance_id] is passed as a parameter to the callback functions.  
         *      
         *  **Note:** On Windows and Linux (X11/Wayland), utterance [param text] can use SSML markup. SSML support is engine and voice dependent. If the engine does not support SSML, you should strip out all XML markup before calling [method tts_speak].  
         *      
         *  **Note:** The granularity of pitch, rate, and volume is engine and voice dependent. Values may be truncated.  
         *      
         *  **Note:** This method is implemented on Android, iOS, Web, Linux (X11/Wayland), macOS, and Windows.  
         */
        static ttsSpeak(text: string, voice: string, volume?: int64 /* = 50 */, pitch?: float64 /* = 1 */, rate?: float64 /* = 1 */, utteranceId?: int64 /* = 0 */, interrupt?: boolean /* = false */): void
        
        /** Puts the synthesizer into a paused state.  
         *      
         *  **Note:** This method is implemented on Android, iOS, Web, Linux (X11/Wayland), macOS, and Windows.  
         */
        static ttsPause(): void
        
        /** Resumes the synthesizer if it was paused.  
         *      
         *  **Note:** This method is implemented on Android, iOS, Web, Linux (X11/Wayland), macOS, and Windows.  
         */
        static ttsResume(): void
        
        /** Stops synthesis in progress and removes all utterances from the queue.  
         *      
         *  **Note:** This method is implemented on Android, iOS, Web, Linux (X11/Linux), macOS, and Windows.  
         */
        static ttsStop(): void
        
        /** Adds a callback, which is called when the utterance has started, finished, canceled or reached a text boundary.  
         *  - [constant TTS_UTTERANCE_STARTED], [constant TTS_UTTERANCE_ENDED], and [constant TTS_UTTERANCE_CANCELED] callable's method should take one [int] parameter, the utterance ID.  
         *  - [constant TTS_UTTERANCE_BOUNDARY] callable's method should take two [int] parameters, the index of the character and the utterance ID.  
         *      
         *  **Note:** The granularity of the boundary callbacks is engine dependent.  
         *      
         *  **Note:** This method is implemented on Android, iOS, Web, Linux (X11/Wayland), macOS, and Windows.  
         */
        static ttsSetUtteranceCallback(event: DisplayServer.TtsUtteranceEvent, callable: Callable): void
        static _ttsPostUtteranceEvent(event: DisplayServer.TtsUtteranceEvent, id: int64, charPos: int64): void
        
        /** Returns `true` if OS supports dark mode.  
         *      
         *  **Note:** This method is implemented on Android, iOS, macOS, Windows, and Linux (X11/Wayland).  
         */
        static isDarkModeSupported(): boolean
        
        /** Returns `true` if OS is using dark mode.  
         *      
         *  **Note:** This method is implemented on Android, iOS, macOS, Windows, and Linux (X11/Wayland).  
         */
        static isDarkMode(): boolean
        
        /** Returns OS theme accent color. Returns `Color(0, 0, 0, 0)`, if accent color is unknown.  
         *      
         *  **Note:** This method is implemented on macOS, Windows, Android, and Linux (X11/Wayland).  
         */
        static getAccentColor(): Color
        
        /** Returns the OS theme base color (default control background). Returns `Color(0, 0, 0, 0)` if the base color is unknown.  
         *      
         *  **Note:** This method is implemented on macOS, Windows, and Android.  
         */
        static getBaseColor(): Color
        
        /** Sets the [param callable] that should be called when system theme settings are changed. Callback method should have zero arguments.  
         *      
         *  **Note:** This method is implemented on Android, iOS, macOS, Windows, and Linux (X11/Wayland).  
         */
        static setSystemThemeChangeCallback(callable: Callable): void
        
        /** Sets the current mouse mode. See also [method mouse_get_mode]. */
        static mouseSetMode(mouseMode: DisplayServer.MouseMode): void
        
        /** Returns the current mouse mode. See also [method mouse_set_mode]. */
        static mouseGetMode(): DisplayServer.MouseMode
        
        /** Sets the mouse cursor position to the given [param position] relative to an origin at the upper left corner of the currently focused game Window Manager window.  
         *      
         *  **Note:** [method warp_mouse] is only supported on Windows, macOS, and Linux (X11/Wayland). It has no effect on Android, iOS, and Web.  
         */
        static warpMouse(position: Vector2I): void
        
        /** Returns the mouse cursor's current position in screen coordinates. */
        static mouseGetPosition(): Vector2I
        
        /** Returns the current state of mouse buttons (whether each button is pressed) as a bitmask. If multiple mouse buttons are pressed at the same time, the bits are added together. Equivalent to [method Input.get_mouse_button_mask]. */
        static mouseGetButtonState(): MouseButtonMask
        
        /** Sets the user's clipboard content to the given string. */
        static clipboardSet(clipboard: string): void
        
        /** Returns the user's clipboard as a string if possible. */
        static clipboardGet(): string
        
        /** Returns the user's clipboard as an image if possible.  
         *      
         *  **Note:** This method uses the copied pixel data, e.g. from a image editing software or a web browser, not an image file copied from file explorer.  
         */
        static clipboardGetImage(): null | Image
        
        /** Returns `true` if there is a text content on the user's clipboard. */
        static clipboardHas(): boolean
        
        /** Returns `true` if there is an image content on the user's clipboard. */
        static clipboardHasImage(): boolean
        
        /** Sets the user's [url=https://unix.stackexchange.com/questions/139191/whats-the-difference-between-primary-selection-and-clipboard-buffer]primary[/url] clipboard content to the given string. This is the clipboard that is set when the user selects text in any application, rather than when pressing [kbd]Ctrl + C[/kbd]. The clipboard data can then be pasted by clicking the middle mouse button in any application that supports the primary clipboard mechanism.  
         *      
         *  **Note:** This method is only implemented on Linux (X11/Wayland).  
         */
        static clipboardSetPrimary(clipboardPrimary: string): void
        
        /** Returns the user's [url=https://unix.stackexchange.com/questions/139191/whats-the-difference-between-primary-selection-and-clipboard-buffer]primary[/url] clipboard as a string if possible. This is the clipboard that is set when the user selects text in any application, rather than when pressing [kbd]Ctrl + C[/kbd]. The clipboard data can then be pasted by clicking the middle mouse button in any application that supports the primary clipboard mechanism.  
         *      
         *  **Note:** This method is only implemented on Linux (X11/Wayland).  
         */
        static clipboardGetPrimary(): string
        
        /** Returns an [Array] of [Rect2], each of which is the bounding rectangle for a display cutout or notch. These are non-functional areas on edge-to-edge screens used by cameras and sensors. Returns an empty array if the device does not have cutouts. See also [method get_display_safe_area].  
         *      
         *  **Note:** Currently only implemented on Android. Other platforms will return an empty array even if they do have display cutouts or notches.  
         */
        static getDisplayCutouts(): GArray
        
        /** Returns the unobscured area of the display where interactive controls should be rendered. See also [method get_display_cutouts].  
         *      
         *  **Note:** Currently only implemented on Android and iOS. On other platforms, `screen_get_usable_rect(SCREEN_OF_MAIN_WINDOW)` will be returned as a fallback. See also [method screen_get_usable_rect].  
         */
        static getDisplaySafeArea(): Rect2I
        
        /** Returns the number of displays available. */
        static getScreenCount(): int64
        
        /** Returns index of the primary screen. */
        static getPrimaryScreen(): int64
        
        /** Returns the index of the screen containing the window with the keyboard focus, or the primary screen if there's no focused window. */
        static getKeyboardFocusScreen(): int64
        
        /** Returns the index of the screen that overlaps the most with the given rectangle. Returns `-1` if the rectangle doesn't overlap with any screen or has no area. */
        static getScreenFromRect(rect: Rect2): int64
        
        /** Returns the screen's top-left corner position in pixels. On multi-monitor setups, the screen position is relative to the virtual desktop area. On multi-monitor setups with different screen resolutions or orientations, the origin may be located outside any display like this:  
         *  [codeblock lang=text]  
         *  * (0, 0)        +-------+  
         *                  |       |  
         *  +-------------+ |       |  
         *  |             | |       |  
         *  |             | |       |  
         *  +-------------+ +-------+  
         *  [/codeblock]  
         *  See also [method screen_get_size].  
         *      
         *  **Note:** On Linux (Wayland) this method always returns `(0, 0)`.  
         */
        static screenGetPosition(screen?: int64 /* = -1 */): Vector2I
        
        /** Returns the screen's size in pixels. See also [method screen_get_position] and [method screen_get_usable_rect]. */
        static screenGetSize(screen?: int64 /* = -1 */): Vector2I
        
        /** Returns the portion of the screen that is not obstructed by a status bar in pixels. See also [method screen_get_size]. */
        static screenGetUsableRect(screen?: int64 /* = -1 */): Rect2I
        
        /** Returns the dots per inch density of the specified screen. If [param screen] is [constant SCREEN_OF_MAIN_WINDOW] (the default value), a screen with the main window will be used.  
         *      
         *  **Note:** On macOS, returned value is inaccurate if fractional display scaling mode is used.  
         *      
         *  **Note:** On Android devices, the actual screen densities are grouped into six generalized densities:  
         *  [codeblock lang=text]  
         *     ldpi - 120 dpi  
         *     mdpi - 160 dpi  
         *     hdpi - 240 dpi  
         *    xhdpi - 320 dpi  
         *   xxhdpi - 480 dpi  
         *  xxxhdpi - 640 dpi  
         *  [/codeblock]  
         *      
         *  **Note:** This method is implemented on Android, Linux (X11/Wayland), macOS and Windows. Returns `72` on unsupported platforms.  
         */
        static screenGetDpi(screen?: int64 /* = -1 */): int64
        
        /** Returns the scale factor of the specified screen by index.  
         *      
         *  **Note:** On macOS, the returned value is `2.0` for hiDPI (Retina) screens, and `1.0` for all other cases.  
         *      
         *  **Note:** On Linux (Wayland), the returned value is accurate only when [param screen] is [constant SCREEN_OF_MAIN_WINDOW]. Due to API limitations, passing a direct index will return a rounded-up integer, if the screen has a fractional scale (e.g. `1.25` would get rounded up to `2.0`).  
         *      
         *  **Note:** This method is implemented on Android, iOS, Web, macOS, and Linux (Wayland).  
         */
        static screenGetScale(screen?: int64 /* = -1 */): float64
        
        /** Returns `true` if touch events are available (Android or iOS), the capability is detected on the Web platform or if [member ProjectSettings.input_devices/pointing/emulate_touch_from_mouse] is `true`. */
        static isTouchscreenAvailable(): boolean
        
        /** Returns the greatest scale factor of all screens.  
         *      
         *  **Note:** On macOS returned value is `2.0` if there is at least one hiDPI (Retina) screen in the system, and `1.0` in all other cases.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static screenGetMaxScale(): float64
        
        /** Returns the current refresh rate of the specified screen. If [param screen] is [constant SCREEN_OF_MAIN_WINDOW] (the default value), a screen with the main window will be used.  
         *      
         *  **Note:** Returns `-1.0` if the DisplayServer fails to find the refresh rate for the specified screen. On Web, [method screen_get_refresh_rate] will always return `-1.0` as there is no way to retrieve the refresh rate on that platform.  
         *  To fallback to a default refresh rate if the method fails, try:  
         *    
         */
        static screenGetRefreshRate(screen?: int64 /* = -1 */): float64
        
        /** Returns color of the display pixel at the [param position].  
         *      
         *  **Note:** This method is implemented on Linux (X11), macOS, and Windows.  
         *      
         *  **Note:** On macOS, this method requires "Screen Recording" permission, if permission is not granted it will return desktop wallpaper color.  
         */
        static screenGetPixel(position: Vector2I): Color
        
        /** Returns a screenshot of the [param screen].  
         *      
         *  **Note:** This method is implemented on Linux (X11), macOS, and Windows.  
         *      
         *  **Note:** On macOS, this method requires the "Screen Recording" permission. If permission is not granted, this method returns a screenshot that will not include other application windows or OS elements not related to the application.  
         */
        static screenGetImage(screen?: int64 /* = -1 */): null | Image
        
        /** Returns a screenshot of the screen region defined by [param rect].  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         *      
         *  **Note:** On macOS, this method requires the "Screen Recording" permission. If permission is not granted, this method returns a screenshot that will not include other application windows or OS elements not related to the application.  
         */
        static screenGetImageRect(rect: Rect2I): null | Image
        
        /** Sets the [param screen]'s [param orientation]. See also [method screen_get_orientation].  
         *      
         *  **Note:** On iOS, this method has no effect if [member ProjectSettings.display/window/handheld/orientation] is not set to [constant SCREEN_SENSOR].  
         */
        static screenSetOrientation(orientation: DisplayServer.ScreenOrientation, screen?: int64 /* = -1 */): void
        
        /** Returns the [param screen]'s current orientation. See also [method screen_set_orientation].  
         *      
         *  **Note:** This method is implemented on Android and iOS.  
         */
        static screenGetOrientation(screen?: int64 /* = -1 */): DisplayServer.ScreenOrientation
        
        /** Sets whether the screen should never be turned off by the operating system's power-saving measures. See also [method screen_is_kept_on]. */
        static screenSetKeepOn(enable: boolean): void
        
        /** Returns `true` if the screen should never be turned off by the operating system's power-saving measures. See also [method screen_set_keep_on]. */
        static screenIsKeptOn(): boolean
        
        /** Returns the list of Godot window IDs belonging to this process.  
         *      
         *  **Note:** Native dialogs are not included in this list.  
         */
        static getWindowList(): PackedInt32Array
        
        /** Returns the ID of the window at the specified screen [param position] (in pixels). On multi-monitor setups, the screen position is relative to the virtual desktop area. On multi-monitor setups with different screen resolutions or orientations, the origin may be located outside any display like this:  
         *  [codeblock lang=text]  
         *  * (0, 0)        +-------+  
         *                  |       |  
         *  +-------------+ |       |  
         *  |             | |       |  
         *  |             | |       |  
         *  +-------------+ +-------+  
         *  [/codeblock]  
         */
        static getWindowAtScreenPosition(position: Vector2I): int64
        
        /** Returns internal structure pointers for use in plugins.  
         *      
         *  **Note:** This method is implemented on Android, Linux (X11/Wayland), macOS, and Windows.  
         */
        static windowGetNativeHandle(handleType: DisplayServer.HandleType, windowId?: int64 /* = 0 */): int64
        
        /** Returns ID of the active popup window, or [constant INVALID_WINDOW_ID] if there is none. */
        static windowGetActivePopup(): int64
        
        /** Sets the bounding box of control, or menu item that was used to open the popup window, in the screen coordinate system. Clicking this area will not auto-close this popup. */
        static windowSetPopupSafeRect(window: int64, rect: Rect2I): void
        
        /** Returns the bounding box of control, or menu item that was used to open the popup window, in the screen coordinate system. */
        static windowGetPopupSafeRect(window: int64): Rect2I
        
        /** Sets the title of the given window to [param title].  
         *      
         *  **Note:** It's recommended to change this value using [member Window.title] instead.  
         *      
         *  **Note:** Avoid changing the window title every frame, as this can cause performance issues on certain window managers. Try to change the window title only a few times per second at most.  
         */
        static windowSetTitle(title: string, windowId?: int64 /* = 0 */): void
        
        /** Returns the estimated window title bar size (including text and window buttons) for the window specified by [param window_id] (in pixels). This method does not change the window title.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static windowGetTitleSize(title: string, windowId?: int64 /* = 0 */): Vector2I
        
        /** Sets a polygonal region of the window which accepts mouse events. Mouse events outside the region will be passed through.  
         *  Passing an empty array will disable passthrough support (all mouse events will be intercepted by the window, which is the default behavior).  
         *    
         *      
         *  **Note:** On Windows, the portion of a window that lies outside the region is not drawn, while on Linux (X11) and macOS it is.  
         *      
         *  **Note:** This method is implemented on Linux (X11), macOS and Windows.  
         */
        static windowSetMousePassthrough(region: PackedVector2Array | Vector2[], windowId?: int64 /* = 0 */): void
        
        /** Returns the screen the window specified by [param window_id] is currently positioned on. If the screen overlaps multiple displays, the screen where the window's center is located is returned. See also [method window_set_current_screen]. */
        static windowGetCurrentScreen(windowId?: int64 /* = 0 */): int64
        
        /** Moves the window specified by [param window_id] to the specified [param screen]. See also [method window_get_current_screen]. */
        static windowSetCurrentScreen(screen: int64, windowId?: int64 /* = 0 */): void
        
        /** Returns the position of the client area of the given window on the screen. */
        static windowGetPosition(windowId?: int64 /* = 0 */): Vector2I
        
        /** Returns the position of the given window on the screen including the borders drawn by the operating system. See also [method window_get_position]. */
        static windowGetPositionWithDecorations(windowId?: int64 /* = 0 */): Vector2I
        
        /** Sets the position of the given window to [param position]. On multi-monitor setups, the screen position is relative to the virtual desktop area. On multi-monitor setups with different screen resolutions or orientations, the origin may be located outside any display like this:  
         *  [codeblock lang=text]  
         *  * (0, 0)        +-------+  
         *                  |       |  
         *  +-------------+ |       |  
         *  |             | |       |  
         *  |             | |       |  
         *  +-------------+ +-------+  
         *  [/codeblock]  
         *  See also [method window_get_position] and [method window_set_size].  
         *      
         *  **Note:** It's recommended to change this value using [member Window.position] instead.  
         *      
         *  **Note:** On Linux (Wayland): this method is a no-op.  
         */
        static windowSetPosition(position: Vector2I, windowId?: int64 /* = 0 */): void
        
        /** Returns the size of the window specified by [param window_id] (in pixels), excluding the borders drawn by the operating system. This is also called the "client area". See also [method window_get_size_with_decorations], [method window_set_size] and [method window_get_position]. */
        static windowGetSize(windowId?: int64 /* = 0 */): Vector2I
        
        /** Sets the size of the given window to [param size] (in pixels). See also [method window_get_size] and [method window_get_position].  
         *      
         *  **Note:** It's recommended to change this value using [member Window.size] instead.  
         */
        static windowSetSize(size: Vector2I, windowId?: int64 /* = 0 */): void
        
        /** Sets the [param callback] that will be called when the window specified by [param window_id] is moved or resized.  
         *  **Warning:** Advanced users only! Adding such a callback to a [Window] node will override its default implementation, which can introduce bugs.  
         */
        static windowSetRectChangedCallback(callback: Callable, windowId?: int64 /* = 0 */): void
        
        /** Sets the [param callback] that will be called when an event occurs in the window specified by [param window_id].  
         *  **Warning:** Advanced users only! Adding such a callback to a [Window] node will override its default implementation, which can introduce bugs.  
         */
        static windowSetWindowEventCallback(callback: Callable, windowId?: int64 /* = 0 */): void
        
        /** Sets the [param callback] that should be called when any [InputEvent] is sent to the window specified by [param window_id].  
         *  **Warning:** Advanced users only! Adding such a callback to a [Window] node will override its default implementation, which can introduce bugs.  
         */
        static windowSetInputEventCallback(callback: Callable, windowId?: int64 /* = 0 */): void
        
        /** Sets the [param callback] that should be called when text is entered using the virtual keyboard to the window specified by [param window_id].  
         *  **Warning:** Advanced users only! Adding such a callback to a [Window] node will override its default implementation, which can introduce bugs.  
         */
        static windowSetInputTextCallback(callback: Callable, windowId?: int64 /* = 0 */): void
        
        /** Sets the [param callback] that should be called when files are dropped from the operating system's file manager to the window specified by [param window_id]. [param callback] should take one [PackedStringArray] argument, which is the list of dropped files.  
         *  **Warning:** Advanced users only! Adding such a callback to a [Window] node will override its default implementation, which can introduce bugs.  
         *      
         *  **Note:** This method is implemented on Windows, macOS, Linux (X11/Wayland), and Web.  
         */
        static windowSetDropFilesCallback(callback: Callable, windowId?: int64 /* = 0 */): void
        
        /** Returns the [method Object.get_instance_id] of the [Window] the [param window_id] is attached to. */
        static windowGetAttachedInstanceId(windowId?: int64 /* = 0 */): int64
        
        /** Returns the window's maximum size (in pixels). See also [method window_set_max_size]. */
        static windowGetMaxSize(windowId?: int64 /* = 0 */): Vector2I
        
        /** Sets the maximum size of the window specified by [param window_id] in pixels. Normally, the user will not be able to drag the window to make it larger than the specified size. See also [method window_get_max_size].  
         *      
         *  **Note:** It's recommended to change this value using [member Window.max_size] instead.  
         *      
         *  **Note:** Using third-party tools, it is possible for users to disable window geometry restrictions and therefore bypass this limit.  
         */
        static windowSetMaxSize(maxSize: Vector2I, windowId?: int64 /* = 0 */): void
        
        /** Returns the window's minimum size (in pixels). See also [method window_set_min_size]. */
        static windowGetMinSize(windowId?: int64 /* = 0 */): Vector2I
        
        /** Sets the minimum size for the given window to [param min_size] in pixels. Normally, the user will not be able to drag the window to make it smaller than the specified size. See also [method window_get_min_size].  
         *      
         *  **Note:** It's recommended to change this value using [member Window.min_size] instead.  
         *      
         *  **Note:** By default, the main window has a minimum size of `Vector2i(64, 64)`. This prevents issues that can arise when the window is resized to a near-zero size.  
         *      
         *  **Note:** Using third-party tools, it is possible for users to disable window geometry restrictions and therefore bypass this limit.  
         */
        static windowSetMinSize(minSize: Vector2I, windowId?: int64 /* = 0 */): void
        
        /** Returns the size of the window specified by [param window_id] (in pixels), including the borders drawn by the operating system. See also [method window_get_size]. */
        static windowGetSizeWithDecorations(windowId?: int64 /* = 0 */): Vector2I
        
        /** Returns the mode of the given window. */
        static windowGetMode(windowId?: int64 /* = 0 */): DisplayServer.WindowMode
        
        /** Sets window mode for the given window to [param mode]. See [enum WindowMode] for possible values and how each mode behaves.  
         *      
         *  **Note:** On Android, setting it to [constant WINDOW_MODE_FULLSCREEN] or [constant WINDOW_MODE_EXCLUSIVE_FULLSCREEN] will enable immersive mode.  
         *      
         *  **Note:** Setting the window to full screen forcibly sets the borderless flag to `true`, so make sure to set it back to `false` when not wanted.  
         */
        static windowSetMode(mode: DisplayServer.WindowMode, windowId?: int64 /* = 0 */): void
        
        /** Enables or disables the given window's given [param flag]. See [enum WindowFlags] for possible values and their behavior. */
        static windowSetFlag(flag: DisplayServer.WindowFlags, enabled: boolean, windowId?: int64 /* = 0 */): void
        
        /** Returns the current value of the given window's [param flag]. */
        static windowGetFlag(flag: DisplayServer.WindowFlags, windowId?: int64 /* = 0 */): boolean
        
        /** When [constant WINDOW_FLAG_EXTEND_TO_TITLE] flag is set, set offset to the center of the first titlebar button.  
         *      
         *  **Note:** This flag is implemented only on macOS.  
         */
        static windowSetWindowButtonsOffset(offset: Vector2I, windowId?: int64 /* = 0 */): void
        
        /** Returns left margins (`x`), right margins (`y`) and height (`z`) of the title that are safe to use (contains no buttons or other elements) when [constant WINDOW_FLAG_EXTEND_TO_TITLE] flag is set. */
        static windowGetSafeTitleMargins(windowId?: int64 /* = 0 */): Vector3I
        
        /** Makes the window specified by [param window_id] request attention, which is materialized by the window title and taskbar entry blinking until the window is focused. This usually has no visible effect if the window is currently focused. The exact behavior varies depending on the operating system. */
        static windowRequestAttention(windowId?: int64 /* = 0 */): void
        
        /** Moves the window specified by [param window_id] to the foreground, so that it is visible over other windows. */
        static windowMoveToForeground(windowId?: int64 /* = 0 */): void
        
        /** Returns `true` if the window specified by [param window_id] is focused. */
        static windowIsFocused(windowId?: int64 /* = 0 */): boolean
        
        /** Returns `true` if anything can be drawn in the window specified by [param window_id], `false` otherwise. Using the `--disable-render-loop` command line argument or a headless build will return `false`. */
        static windowCanDraw(windowId?: int64 /* = 0 */): boolean
        
        /** Sets window transient parent. Transient window will be destroyed with its transient parent and will return focus to their parent when closed. The transient window is displayed on top of a non-exclusive full-screen parent window. Transient windows can't enter full-screen mode.  
         *      
         *  **Note:** It's recommended to change this value using [member Window.transient] instead.  
         *      
         *  **Note:** The behavior might be different depending on the platform.  
         */
        static windowSetTransient(windowId: int64, parentWindowId: int64): void
        
        /** If set to `true`, this window will always stay on top of its parent window, parent window will ignore input while this window is opened.  
         *      
         *  **Note:** On macOS, exclusive windows are confined to the same space (virtual desktop or screen) as the parent window.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static windowSetExclusive(windowId: int64, exclusive: boolean): void
        
        /** Sets whether [url=https://en.wikipedia.org/wiki/Input_method]Input Method Editor[/url] should be enabled for the window specified by [param window_id]. See also [method window_set_ime_position]. */
        static windowSetImeActive(active: boolean, windowId?: int64 /* = 0 */): void
        
        /** Sets the position of the [url=https://en.wikipedia.org/wiki/Input_method]Input Method Editor[/url] popup for the specified [param window_id]. Only effective if [method window_set_ime_active] was set to `true` for the specified [param window_id]. */
        static windowSetImePosition(position: Vector2I, windowId?: int64 /* = 0 */): void
        
        /** Sets the V-Sync mode of the given window. See also [member ProjectSettings.display/window/vsync/vsync_mode].  
         *  See [enum DisplayServer.VSyncMode] for possible values and how they affect the behavior of your application.  
         *  Depending on the platform and used renderer, the engine will fall back to [constant VSYNC_ENABLED] if the desired mode is not supported.  
         *      
         *  **Note:** V-Sync modes other than [constant VSYNC_ENABLED] are only supported in the Forward+ and Mobile rendering methods, not Compatibility.  
         */
        static windowSetVsyncMode(vsyncMode: DisplayServer.VSyncMode, windowId?: int64 /* = 0 */): void
        
        /** Returns the V-Sync mode of the given window. */
        static windowGetVsyncMode(windowId?: int64 /* = 0 */): DisplayServer.VSyncMode
        
        /** Returns `true` if the given window can be maximized (the maximize button is enabled). */
        static windowIsMaximizeAllowed(windowId?: int64 /* = 0 */): boolean
        
        /** Returns `true`, if double-click on a window title should maximize it.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static windowMaximizeOnTitleDblClick(): boolean
        
        /** Returns `true`, if double-click on a window title should minimize it.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static windowMinimizeOnTitleDblClick(): boolean
        
        /** Starts an interactive drag operation on the window with the given [param window_id], using the current mouse position. Call this method when handling a mouse button being pressed to simulate a pressed event on the window's title bar. Using this method allows the window to participate in space switching, tiling, and other system features.  
         *      
         *  **Note:** This method is implemented on Linux (X11/Wayland), macOS, and Windows.  
         */
        static windowStartDrag(windowId?: int64 /* = 0 */): void
        
        /** Starts an interactive resize operation on the window with the given [param window_id], using the current mouse position. Call this method when handling a mouse button being pressed to simulate a pressed event on the window's edge.  
         *      
         *  **Note:** This method is implemented on Linux (X11/Wayland), macOS, and Windows.  
         */
        static windowStartResize(edge: DisplayServer.WindowResizeEdge, windowId?: int64 /* = 0 */): void
        
        /** Returns `1` if a high-contrast user interface theme should be used, `0` otherwise. Returns `-1` if status is unknown.  
         *      
         *  **Note:** This method is implemented on Linux (X11/Wayland, GNOME), macOS, and Windows.  
         */
        static accessibilityShouldIncreaseContrast(): int64
        
        /** Returns `1` if flashing, blinking, and other moving content that can cause seizures in users with photosensitive epilepsy should be disabled, `0` otherwise. Returns `-1` if status is unknown.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static accessibilityShouldReduceAnimation(): int64
        
        /** Returns `1` if background images, transparency, and other features that can reduce the contrast between the foreground and background should be disabled, `0` otherwise. Returns `-1` if status is unknown.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static accessibilityShouldReduceTransparency(): int64
        
        /** Returns `1` if a screen reader, Braille display or other assistive app is active, `0` otherwise. Returns `-1` if status is unknown.  
         *      
         *  **Note:** This method is implemented on Linux, macOS, and Windows.  
         *      
         *  **Note:** Accessibility debugging tools, such as Accessibility Insights for Windows, macOS Accessibility Inspector, or AT-SPI Browser do not count as assistive apps and will not affect this value. To test your app with these tools, set [member ProjectSettings.accessibility/general/accessibility_support] to `1`.  
         */
        static accessibilityScreenReaderActive(): int64
        
        /** Creates a new, empty accessibility element resource.  
         *      
         *  **Note:** An accessibility element is created and freed automatically for each [Node]. In general, this function should not be called manually.  
         */
        static accessibilityCreateElement(windowId: int64, role: DisplayServer.AccessibilityRole): Rid
        
        /** Creates a new, empty accessibility sub-element resource. Sub-elements can be used to provide accessibility information for objects which are not [Node]s, such as list items, table cells, or menu items. Sub-elements are freed automatically when the parent element is freed, or can be freed early using the [method accessibility_free_element] method. */
        static accessibilityCreateSubElement(parentRid: Rid, role: DisplayServer.AccessibilityRole, insertPos?: int64 /* = -1 */): Rid
        
        /** Creates a new, empty accessibility sub-element from the shaped text buffer. Sub-elements are freed automatically when the parent element is freed, or can be freed early using the [method accessibility_free_element] method. */
        static accessibilityCreateSubTextEditElements(parentRid: Rid, shapedText: Rid, minHeight: float64, insertPos?: int64 /* = -1 */): Rid
        
        /** Returns `true` if [param id] is a valid accessibility element. */
        static accessibilityHasElement(id: Rid): boolean
        
        /** Frees an object created by [method accessibility_create_element], [method accessibility_create_sub_element], or [method accessibility_create_sub_text_edit_elements]. */
        static accessibilityFreeElement(id: Rid): void
        
        /** Sets the metadata of the accessibility element. */
        static accessibilityElementSetMeta(id: Rid, meta: any): void
        
        /** Returns the metadata of the accessibility element. */
        static accessibilityElementGetMeta(id: Rid): any
        static _accessibilityUpdateIfActive(callback: Callable): void
        
        /** Sets window outer (with decorations) and inner (without decorations) bounds for assistive apps.  
         *      
         *  **Note:** This method is implemented on Linux, macOS, and Windows.  
         *      
         *  **Note:** Advanced users only! [Window] objects call this method automatically.  
         */
        static accessibilitySetWindowRect(windowId: int64, rectOut: Rect2, rectIn: Rect2): void
        
        /** Sets the window focused state for assistive apps.  
         *      
         *  **Note:** This method is implemented on Linux, macOS, and Windows.  
         *      
         *  **Note:** Advanced users only! [Window] objects call this method automatically.  
         */
        static accessibilitySetWindowFocused(windowId: int64, focused: boolean): void
        
        /** Sets currently focused element. */
        static accessibilityUpdateSetFocus(id: Rid): void
        
        /** Returns the main accessibility element of the OS native window. */
        static accessibilityGetWindowRoot(windowId: int64): Rid
        
        /** Sets element accessibility role. */
        static accessibilityUpdateSetRole(id: Rid, role: DisplayServer.AccessibilityRole): void
        
        /** Sets element accessibility name. */
        static accessibilityUpdateSetName(id: Rid, name: string): void
        
        /** Sets element accessibility extra information added to the element name. */
        static accessibilityUpdateSetExtraInfo(id: Rid, name: string): void
        
        /** Sets element accessibility description. */
        static accessibilityUpdateSetDescription(id: Rid, description: string): void
        
        /** Sets element text value. */
        static accessibilityUpdateSetValue(id: Rid, value: string): void
        
        /** Sets tooltip text. */
        static accessibilityUpdateSetTooltip(id: Rid, tooltip: string): void
        
        /** Sets element bounding box, relative to the node position. */
        static accessibilityUpdateSetBounds(id: Rid, pRect: Rect2): void
        
        /** Sets element 2D transform. */
        static accessibilityUpdateSetTransform(id: Rid, transform: Transform2D): void
        
        /** Adds a child accessibility element.  
         *      
         *  **Note:** [Node] children and sub-elements are added to the child list automatically.  
         */
        static accessibilityUpdateAddChild(id: Rid, childId: Rid): void
        
        /** Adds an element that is controlled by this element. */
        static accessibilityUpdateAddRelatedControls(id: Rid, relatedId: Rid): void
        
        /** Adds an element that details this element. */
        static accessibilityUpdateAddRelatedDetails(id: Rid, relatedId: Rid): void
        
        /** Adds an element that describes this element. */
        static accessibilityUpdateAddRelatedDescribedBy(id: Rid, relatedId: Rid): void
        
        /** Adds an element that this element flow into. */
        static accessibilityUpdateAddRelatedFlowTo(id: Rid, relatedId: Rid): void
        
        /** Adds an element that labels this element. */
        static accessibilityUpdateAddRelatedLabeledBy(id: Rid, relatedId: Rid): void
        
        /** Adds an element that is part of the same radio group.  
         *      
         *  **Note:** This method should be called on each element of the group, using all other elements as [param related_id].  
         */
        static accessibilityUpdateAddRelatedRadioGroup(id: Rid, relatedId: Rid): void
        
        /** Adds an element that is an active descendant of this element. */
        static accessibilityUpdateSetActiveDescendant(id: Rid, otherId: Rid): void
        
        /** Sets next element on the line. */
        static accessibilityUpdateSetNextOnLine(id: Rid, otherId: Rid): void
        
        /** Sets previous element on the line. */
        static accessibilityUpdateSetPreviousOnLine(id: Rid, otherId: Rid): void
        
        /** Sets the element to be a member of the group. */
        static accessibilityUpdateSetMemberOf(id: Rid, groupId: Rid): void
        
        /** Sets target element for the link. */
        static accessibilityUpdateSetInPageLinkTarget(id: Rid, otherId: Rid): void
        
        /** Sets an element which contains an error message for this element. */
        static accessibilityUpdateSetErrorMessage(id: Rid, otherId: Rid): void
        
        /** Sets the priority of the live region updates. */
        static accessibilityUpdateSetLive(id: Rid, live: DisplayServer.AccessibilityLiveMode): void
        
        /** Adds a callback for the accessibility action (action which can be performed by using a special screen reader command or buttons on the Braille display), and marks this action as supported. The action callback receives one [Variant] argument, which value depends on action type. */
        static accessibilityUpdateAddAction(id: Rid, action: DisplayServer.AccessibilityAction, callable: Callable): void
        
        /** Adds support for a custom accessibility action. [param action_id] is passed as an argument to the callback of [constant ACTION_CUSTOM] action. */
        static accessibilityUpdateAddCustomAction(id: Rid, actionId: int64, actionDescription: string): void
        
        /** Sets number of rows in the table. */
        static accessibilityUpdateSetTableRowCount(id: Rid, count: int64): void
        
        /** Sets number of columns in the table. */
        static accessibilityUpdateSetTableColumnCount(id: Rid, count: int64): void
        
        /** Sets position of the row in the table. */
        static accessibilityUpdateSetTableRowIndex(id: Rid, index: int64): void
        
        /** Sets position of the column. */
        static accessibilityUpdateSetTableColumnIndex(id: Rid, index: int64): void
        
        /** Sets cell position in the table. */
        static accessibilityUpdateSetTableCellPosition(id: Rid, rowIndex: int64, columnIndex: int64): void
        
        /** Sets cell row/column span. */
        static accessibilityUpdateSetTableCellSpan(id: Rid, rowSpan: int64, columnSpan: int64): void
        
        /** Sets number of items in the list. */
        static accessibilityUpdateSetListItemCount(id: Rid, size: int64): void
        
        /** Sets the position of the element in the list. */
        static accessibilityUpdateSetListItemIndex(id: Rid, index: int64): void
        
        /** Sets the hierarchical level of the element in the list. */
        static accessibilityUpdateSetListItemLevel(id: Rid, level: int64): void
        
        /** Sets list/tree item selected status. */
        static accessibilityUpdateSetListItemSelected(id: Rid, selected: boolean): void
        
        /** Sets list/tree item expanded status. */
        static accessibilityUpdateSetListItemExpanded(id: Rid, expanded: boolean): void
        
        /** Sets popup type for popup buttons. */
        static accessibilityUpdateSetPopupType(id: Rid, popup: DisplayServer.AccessibilityPopupType): void
        
        /** Sets element checked state. */
        static accessibilityUpdateSetChecked(id: Rid, checekd: boolean): void
        
        /** Sets numeric value. */
        static accessibilityUpdateSetNumValue(id: Rid, position: float64): void
        
        /** Sets numeric value range. */
        static accessibilityUpdateSetNumRange(id: Rid, min: float64, max: float64): void
        
        /** Sets numeric value step. */
        static accessibilityUpdateSetNumStep(id: Rid, step: float64): void
        
        /** Sets numeric value jump. */
        static accessibilityUpdateSetNumJump(id: Rid, jump: float64): void
        
        /** Sets scroll bar x position. */
        static accessibilityUpdateSetScrollX(id: Rid, position: float64): void
        
        /** Sets scroll bar x range. */
        static accessibilityUpdateSetScrollXRange(id: Rid, min: float64, max: float64): void
        
        /** Sets scroll bar y position. */
        static accessibilityUpdateSetScrollY(id: Rid, position: float64): void
        
        /** Sets scroll bar y range. */
        static accessibilityUpdateSetScrollYRange(id: Rid, min: float64, max: float64): void
        
        /** Sets text underline/overline/strikethrough. */
        static accessibilityUpdateSetTextDecorations(id: Rid, underline: boolean, strikethrough: boolean, overline: boolean): void
        
        /** Sets element text alignment. */
        static accessibilityUpdateSetTextAlign(id: Rid, align: HorizontalAlignment): void
        
        /** Sets text selection to the text field. [param text_start_id] and [param text_end_id] should be elements created by [method accessibility_create_sub_text_edit_elements]. Character offsets are relative to the corresponding element. */
        static accessibilityUpdateSetTextSelection(id: Rid, textStartId: Rid, startChar: int64, textEndId: Rid, endChar: int64): void
        
        /** Sets element flag, see [enum DisplayServer.AccessibilityFlags]. */
        static accessibilityUpdateSetFlag(id: Rid, flag: DisplayServer.AccessibilityFlags, value: boolean): void
        
        /** Sets element class name. */
        static accessibilityUpdateSetClassname(id: Rid, classname: string): void
        
        /** Sets placeholder text. */
        static accessibilityUpdateSetPlaceholder(id: Rid, placeholder: string): void
        
        /** Sets element text language. */
        static accessibilityUpdateSetLanguage(id: Rid, language: string): void
        
        /** Sets text orientation. */
        static accessibilityUpdateSetTextOrientation(id: Rid, vertical: boolean): void
        
        /** Sets the orientation of the list elements. */
        static accessibilityUpdateSetListOrientation(id: Rid, vertical: boolean): void
        
        /** Sets the list of keyboard shortcuts used by element. */
        static accessibilityUpdateSetShortcut(id: Rid, shortcut: string): void
        
        /** Sets link URL. */
        static accessibilityUpdateSetUrl(id: Rid, url: string): void
        
        /** Sets element accessibility role description text. */
        static accessibilityUpdateSetRoleDescription(id: Rid, description: string): void
        
        /** Sets human-readable description of the current checked state. */
        static accessibilityUpdateSetStateDescription(id: Rid, description: string): void
        
        /** Sets element color value. */
        static accessibilityUpdateSetColorValue(id: Rid, color: Color): void
        
        /** Sets element background color. */
        static accessibilityUpdateSetBackgroundColor(id: Rid, color: Color): void
        
        /** Sets element foreground color. */
        static accessibilityUpdateSetForegroundColor(id: Rid, color: Color): void
        
        /** Returns the text selection in the [url=https://en.wikipedia.org/wiki/Input_method]Input Method Editor[/url] composition string, with the [Vector2i]'s `x` component being the caret position and `y` being the length of the selection.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static imeGetSelection(): Vector2I
        
        /** Returns the composition string contained within the [url=https://en.wikipedia.org/wiki/Input_method]Input Method Editor[/url] window.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static imeGetText(): string
        
        /** Shows the virtual keyboard if the platform has one.  
         *  [param existing_text] parameter is useful for implementing your own [LineEdit] or [TextEdit], as it tells the virtual keyboard what text has already been typed (the virtual keyboard uses it for auto-correct and predictions).  
         *  [param position] parameter is the screen space [Rect2] of the edited text.  
         *  [param type] parameter allows configuring which type of virtual keyboard to show.  
         *  [param max_length] limits the number of characters that can be entered if different from `-1`.  
         *  [param cursor_start] can optionally define the current text cursor position if [param cursor_end] is not set.  
         *  [param cursor_start] and [param cursor_end] can optionally define the current text selection.  
         *      
         *  **Note:** This method is implemented on Android, iOS and Web.  
         */
        static virtualKeyboardShow(existingText: string, position?: Rect2 /* = new Rect2(0, 0, 0, 0) */, type?: DisplayServer.VirtualKeyboardType /* = 0 */, maxLength?: int64 /* = -1 */, cursorStart?: int64 /* = -1 */, cursorEnd?: int64 /* = -1 */): void
        
        /** Hides the virtual keyboard if it is shown, does nothing otherwise. */
        static virtualKeyboardHide(): void
        
        /** Returns the on-screen keyboard's height in pixels. Returns 0 if there is no keyboard or if it is currently hidden. */
        static virtualKeyboardGetHeight(): int64
        
        /** Returns `true` if a hardware keyboard is connected.  
         *      
         *  **Note:** This method is implemented on Android and iOS. On other platforms, this method always returns `true`.  
         */
        static hasHardwareKeyboard(): boolean
        
        /** Sets the [param callable] that should be called when hardware keyboard is connected/disconnected. [param callable] should accept a single [bool] parameter indicating whether the keyboard is connected (true) or disconnected (false).  
         *      
         *  **Note:** This method is only implemented on Android.  
         */
        static setHardwareKeyboardConnectionChangeCallback(callable: Callable): void
        
        /** Sets the default mouse cursor shape. The cursor's appearance will vary depending on the user's operating system and mouse cursor theme. See also [method cursor_get_shape] and [method cursor_set_custom_image]. */
        static cursorSetShape(shape: DisplayServer.CursorShape): void
        
        /** Returns the default mouse cursor shape set by [method cursor_set_shape]. */
        static cursorGetShape(): DisplayServer.CursorShape
        
        /** Sets a custom mouse cursor image for the given [param shape]. This means the user's operating system and mouse cursor theme will no longer influence the mouse cursor's appearance.  
         *  [param cursor] can be either a [Texture2D] or an [Image], and it should not be larger than 256×256 to display correctly. Optionally, [param hotspot] can be set to offset the image's position relative to the click point. By default, [param hotspot] is set to the top-left corner of the image. See also [method cursor_set_shape].  
         */
        static cursorSetCustomImage(cursor: Resource, shape?: DisplayServer.CursorShape /* = 0 */, hotspot?: Vector2 /* = Vector2.ZERO */): void
        
        /** Returns `true` if positions of **OK** and **Cancel** buttons are swapped in dialogs. This is enabled by default on Windows to follow interface conventions, and be toggled by changing [member ProjectSettings.gui/common/swap_cancel_ok].  
         *      
         *  **Note:** This doesn't affect native dialogs such as the ones spawned by [method DisplayServer.dialog_show].  
         */
        static getSwapCancelOk(): boolean
        
        /** Allows the [param process_id] PID to steal focus from this window. In other words, this disables the operating system's focus stealing protection for the specified PID.  
         *      
         *  **Note:** This method is implemented only on Windows.  
         */
        static enableForStealingFocus(processId: int64): void
        
        /** Shows a text dialog which uses the operating system's native look-and-feel. [param callback] should accept a single [int] parameter which corresponds to the index of the pressed button.  
         *      
         *  **Note:** This method is implemented if the display server has the [constant FEATURE_NATIVE_DIALOG] feature. Supported platforms include macOS, Windows, and Android.  
         */
        static dialogShow(title: string, description: string, buttons: PackedStringArray | string[], callback: Callable): GError
        
        /** Shows a text input dialog which uses the operating system's native look-and-feel. [param callback] should accept a single [String] parameter which contains the text field's contents.  
         *      
         *  **Note:** This method is implemented if the display server has the [constant FEATURE_NATIVE_DIALOG_INPUT] feature. Supported platforms include macOS, Windows, and Android.  
         */
        static dialogInputText(title: string, description: string, existingText: string, callback: Callable): GError
        
        /** Displays OS native dialog for selecting files or directories in the file system.  
         *  Each filter string in the [param filters] array should be formatted like this: `*.png,*.jpg,*.jpeg;Image Files;image/png,image/jpeg`. The description text of the filter is optional and can be omitted. It is recommended to set both file extension and MIME type. See also [member FileDialog.filters].  
         *  Callbacks have the following arguments: `status: bool, selected_paths: PackedStringArray, selected_filter_index: int`. **On Android,** the third callback argument (`selected_filter_index`) is always `0`.  
         *      
         *  **Note:** This method is implemented if the display server has the [constant FEATURE_NATIVE_DIALOG_FILE] feature. Supported platforms include Linux (X11/Wayland), Windows, macOS, and Android.  
         *      
         *  **Note:** [param current_directory] might be ignored.  
         *      
         *  **Note:** Embedded file dialog and Windows file dialog support only file extensions, while Android, Linux, and macOS file dialogs also support MIME types.  
         *      
         *  **Note:** On Android and Linux, [param show_hidden] is ignored.  
         *      
         *  **Note:** On Android and macOS, native file dialogs have no title.  
         *      
         *  **Note:** On macOS, sandboxed apps will save security-scoped bookmarks to retain access to the opened folders across multiple sessions. Use [method OS.get_granted_permissions] to get a list of saved bookmarks.  
         */
        static fileDialogShow(title: string, currentDirectory: string, fileName: string, showHidden: boolean, mode: DisplayServer.FileDialogMode, filters: PackedStringArray | string[], callback: Callable, parentWindowId?: int64 /* = 0 */): GError
        
        /** Displays OS native dialog for selecting files or directories in the file system with additional user selectable options.  
         *  Each filter string in the [param filters] array should be formatted like this: `*.png,*.jpg,*.jpeg;Image Files;image/png,image/jpeg`. The description text of the filter is optional and can be omitted. It is recommended to set both file extension and MIME type. See also [member FileDialog.filters].  
         *  [param options] is array of [Dictionary]s with the following keys:  
         *  - `"name"` - option's name [String].  
         *  - `"values"` - [PackedStringArray] of values. If empty, boolean option (check box) is used.  
         *  - `"default"` - default selected option index ([int]) or default boolean value ([bool]).  
         *  Callbacks have the following arguments: `status: bool, selected_paths: PackedStringArray, selected_filter_index: int, selected_option: Dictionary`.  
         *      
         *  **Note:** This method is implemented if the display server has the [constant FEATURE_NATIVE_DIALOG_FILE_EXTRA] feature. Supported platforms include Linux (X11/Wayland), Windows, and macOS.  
         *      
         *  **Note:** [param current_directory] might be ignored.  
         *      
         *  **Note:** Embedded file dialog and Windows file dialog support only file extensions, while Android, Linux, and macOS file dialogs also support MIME types.  
         *      
         *  **Note:** On Linux (X11), [param show_hidden] is ignored.  
         *      
         *  **Note:** On macOS, native file dialogs have no title.  
         *      
         *  **Note:** On macOS, sandboxed apps will save security-scoped bookmarks to retain access to the opened folders across multiple sessions. Use [method OS.get_granted_permissions] to get a list of saved bookmarks.  
         */
        static fileDialogWithOptionsShow(title: string, currentDirectory: string, root: string, fileName: string, showHidden: boolean, mode: DisplayServer.FileDialogMode, filters: PackedStringArray | string[], options: GArray, callback: Callable, parentWindowId?: int64 /* = 0 */): GError
        
        /** Plays the beep sound from the operative system, if possible. Because it comes from the OS, the beep sound will be audible even if the application is muted. It may also be disabled for the entire OS by the user.  
         *      
         *  **Note:** This method is implemented on macOS, Linux (X11/Wayland), and Windows.  
         */
        static beep(): void
        
        /** Returns the number of keyboard layouts.  
         *      
         *  **Note:** This method is implemented on Linux (X11/Wayland), macOS and Windows.  
         */
        static keyboardGetLayoutCount(): int64
        
        /** Returns active keyboard layout index.  
         *      
         *  **Note:** This method is implemented on Linux (X11/Wayland), macOS, and Windows.  
         */
        static keyboardGetCurrentLayout(): int64
        
        /** Sets the active keyboard layout.  
         *      
         *  **Note:** This method is implemented on Linux (X11/Wayland), macOS and Windows.  
         */
        static keyboardSetCurrentLayout(index: int64): void
        
        /** Returns the ISO-639/BCP-47 language code of the keyboard layout at position [param index].  
         *      
         *  **Note:** This method is implemented on Linux (X11/Wayland), macOS and Windows.  
         */
        static keyboardGetLayoutLanguage(index: int64): string
        
        /** Returns the localized name of the keyboard layout at position [param index].  
         *      
         *  **Note:** This method is implemented on Linux (X11/Wayland), macOS and Windows.  
         */
        static keyboardGetLayoutName(index: int64): string
        
        /** Converts a physical (US QWERTY) [param keycode] to one in the active keyboard layout.  
         *      
         *  **Note:** This method is implemented on Linux (X11/Wayland), macOS and Windows.  
         */
        static keyboardGetKeycodeFromPhysical(keycode: Key): Key
        
        /** Converts a physical (US QWERTY) [param keycode] to localized label printed on the key in the active keyboard layout.  
         *      
         *  **Note:** This method is implemented on Linux (X11/Wayland), macOS and Windows.  
         */
        static keyboardGetLabelFromPhysical(keycode: Key): Key
        
        /** Opens system emoji and symbol picker.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static showEmojiAndSymbolPicker(): void
        
        /** Displays OS native color picker.  
         *  Callbacks have the following arguments: `status: bool, color: Color`.  
         *      
         *  **Note:** This method is implemented if the display server has the [constant FEATURE_NATIVE_COLOR_PICKER] feature.  
         *      
         *  **Note:** This method is only implemented on Linux (X11/Wayland).  
         */
        static colorPicker(callback: Callable): boolean
        
        /** Perform window manager processing, including input flushing. See also [method force_process_and_drop_events], [method Input.flush_buffered_events] and [member Input.use_accumulated_input]. */
        static processEvents(): void
        
        /** Forces window manager processing while ignoring all [InputEvent]s. See also [method process_events].  
         *      
         *  **Note:** This method is implemented on Windows and macOS.  
         */
        static forceProcessAndDropEvents(): void
        
        /** Sets the window icon (usually displayed in the top-left corner) in the operating system's  *native*  format. The file at [param filename] must be in `.ico` format on Windows or `.icns` on macOS. By using specially crafted `.ico` or `.icns` icons, [method set_native_icon] allows specifying different icons depending on the size the icon is displayed at. This size is determined by the operating system and user preferences (including the display scale factor). To use icons in other formats, use [method set_icon] instead.  
         *      
         *  **Note:** Requires support for [constant FEATURE_NATIVE_ICON].  
         */
        static setNativeIcon(fileName: string): void
        
        /** Sets the window icon (usually displayed in the top-left corner) with an [Image]. To use icons in the operating system's native format, use [method set_native_icon] instead.  
         *      
         *  **Note:** Requires support for [constant FEATURE_ICON].  
         */
        static setIcon(image: Image): void
        
        /** Creates a new application status indicator with the specified icon, tooltip, and activation callback.  
         *  [param callback] should take two arguments: the pressed mouse button (one of the [enum MouseButton] constants) and the click position in screen coordinates (a [Vector2i]).  
         */
        static createStatusIndicator(icon: Texture2D, tooltip: string, callback: Callable): int64
        
        /** Sets the application status indicator icon.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static statusIndicatorSetIcon(id: int64, icon: Texture2D): void
        
        /** Sets the application status indicator tooltip.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static statusIndicatorSetTooltip(id: int64, tooltip: string): void
        
        /** Sets the application status indicator native popup menu.  
         *      
         *  **Note:** On macOS, the menu is activated by any mouse button. Its activation callback is  *not*  triggered.  
         *      
         *  **Note:** On Windows, the menu is activated by the right mouse button, selecting the status icon and pressing [kbd]Shift + F10[/kbd], or the applications key. The menu's activation callback for the other mouse buttons is still triggered.  
         *      
         *  **Note:** Native popup is only supported if [NativeMenu] supports the [constant NativeMenu.FEATURE_POPUP_MENU] feature.  
         */
        static statusIndicatorSetMenu(id: int64, menuRid: Rid): void
        
        /** Sets the application status indicator activation callback. [param callback] should take two arguments: [int] mouse button index (one of [enum MouseButton] values) and [Vector2i] click position in screen coordinates.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static statusIndicatorSetCallback(id: int64, callback: Callable): void
        
        /** Returns the rectangle for the given status indicator [param id] in screen coordinates. If the status indicator is not visible, returns an empty [Rect2].  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static statusIndicatorGetRect(id: int64): Rect2
        
        /** Removes the application status indicator. */
        static deleteStatusIndicator(id: int64): void
        
        /** Returns the total number of available tablet drivers.  
         *      
         *  **Note:** This method is implemented only on Windows.  
         */
        static tabletGetDriverCount(): int64
        
        /** Returns the tablet driver name for the given index.  
         *      
         *  **Note:** This method is implemented only on Windows.  
         */
        static tabletGetDriverName(idx: int64): string
        
        /** Returns current active tablet driver name.  
         *      
         *  **Note:** This method is implemented only on Windows.  
         */
        static tabletGetCurrentDriver(): string
        
        /** Set active tablet driver name.  
         *  Supported drivers:  
         *  - `winink`: Windows Ink API, default (Windows 8.1+ required).  
         *  - `wintab`: Wacom Wintab API (compatible device driver required).  
         *  - `dummy`: Dummy driver, tablet input is disabled.  
         *      
         *  **Note:** This method is implemented only on Windows.  
         */
        static tabletSetCurrentDriver(name: string): void
        
        /** Returns `true` if the window background can be made transparent. This method returns `false` if [member ProjectSettings.display/window/per_pixel_transparency/allowed] is set to `false`, or if transparency is not supported by the renderer or OS compositor. */
        static isWindowTransparencyAvailable(): boolean
        
        /** Registers an [Object] which represents an additional output that will be rendered too, beyond normal windows. The [Object] is only used as an identifier, which can be later passed to [method unregister_additional_output].  
         *  This can be used to prevent Godot from skipping rendering when no normal windows are visible.  
         */
        static registerAdditionalOutput(object: GObject): void
        
        /** Unregisters an [Object] representing an additional output, that was registered via [method register_additional_output]. */
        static unregisterAdditionalOutput(object: GObject): void
        
        /** Returns `true` if any additional outputs have been registered via [method register_additional_output]. */
        static hasAdditionalOutputs(): boolean
    }
    // _singleton_class_: NativeMenu
    namespace NativeMenu {
        enum Feature {
            FeatureGlobalMenu = 0,
            FeaturePopupMenu = 1,
            FeatureOpenCloseCallback = 2,
            FeatureHoverCallback = 3,
            FeatureKeyCallback = 4,
        }
        enum SystemMenus {
            InvalidMenuId = 0,
            MainMenuId = 1,
            ApplicationMenuId = 2,
            WindowMenuId = 3,
            HelpMenuId = 4,
            DockMenuId = 5,
        }
    }
    /** A server interface for OS native menus.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_nativemenu.html  
     */
    class NativeMenu extends GObject {
        /** [NativeMenu] supports native global main menu. */
        static readonly FEATURE_GLOBAL_MENU = 0
        
        /** [NativeMenu] supports native popup menus. */
        static readonly FEATURE_POPUP_MENU = 1
        
        /** [NativeMenu] supports menu open and close callbacks. */
        static readonly FEATURE_OPEN_CLOSE_CALLBACK = 2
        
        /** [NativeMenu] supports menu item hover callback. */
        static readonly FEATURE_HOVER_CALLBACK = 3
        
        /** [NativeMenu] supports menu item accelerator/key callback. */
        static readonly FEATURE_KEY_CALLBACK = 4
        
        /** Invalid special system menu ID. */
        static readonly INVALID_MENU_ID = 0
        
        /** Global main menu ID. */
        static readonly MAIN_MENU_ID = 1
        
        /** Application (first menu after "Apple" menu on macOS) menu ID. */
        static readonly APPLICATION_MENU_ID = 2
        
        /** "Window" menu ID (on macOS this menu includes standard window control items and a list of open windows). */
        static readonly WINDOW_MENU_ID = 3
        
        /** "Help" menu ID (on macOS this menu includes help search bar). */
        static readonly HELP_MENU_ID = 4
        
        /** Dock icon right-click menu ID (on macOS this menu include standard application control items and a list of open windows). */
        static readonly DOCK_MENU_ID = 5
        
        /** Returns `true` if the specified [param feature] is supported by the current [NativeMenu], `false` otherwise.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static hasFeature(feature: NativeMenu.Feature): boolean
        
        /** Returns `true` if a special system menu is supported.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static hasSystemMenu(menuId: NativeMenu.SystemMenus): boolean
        
        /** Returns RID of a special system menu.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static getSystemMenu(menuId: NativeMenu.SystemMenus): Rid
        
        /** Returns readable name of a special system menu.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static getSystemMenuName(menuId: NativeMenu.SystemMenus): string
        
        /** Creates a new global menu object.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static createMenu(): Rid
        
        /** Returns `true` if [param rid] is valid global menu.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static hasMenu(rid: Rid): boolean
        
        /** Frees a global menu object created by this [NativeMenu].  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static freeMenu(rid: Rid): void
        
        /** Returns global menu size.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static getSize(rid: Rid): Vector2
        
        /** Shows the global menu at [param position] in the screen coordinates.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static popup(rid: Rid, position: Vector2I): void
        
        /** Sets the menu text layout direction from right-to-left if [param is_rtl] is `true`.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static setInterfaceDirection(rid: Rid, isRtl: boolean): void
        
        /** Registers callable to emit after the menu is closed.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static setPopupOpenCallback(rid: Rid, callback: Callable): void
        
        /** Returns global menu open callback.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static getPopupOpenCallback(rid: Rid): Callable
        
        /** Registers callable to emit when the menu is about to show.  
         *      
         *  **Note:** The OS can simulate menu opening to track menu item changes and global shortcuts, in which case the corresponding close callback is not triggered. Use [method is_opened] to check if the menu is currently opened.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static setPopupCloseCallback(rid: Rid, callback: Callable): void
        
        /** Returns global menu close callback.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static getPopupCloseCallback(rid: Rid): Callable
        
        /** Sets the minimum width of the global menu.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static setMinimumWidth(rid: Rid, width: float64): void
        
        /** Returns global menu minimum width.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static getMinimumWidth(rid: Rid): float64
        
        /** Returns `true` if the menu is currently opened.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static isOpened(rid: Rid): boolean
        
        /** Adds an item that will act as a submenu of the global menu [param rid]. The [param submenu_rid] argument is the RID of the global menu that will be shown when the item is clicked.  
         *  Returns index of the inserted item, it's not guaranteed to be the same as [param index] value.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static addSubmenuItem(rid: Rid, label: string, submenuRid: Rid, tag?: any /* = <any> {} */, index?: int64 /* = -1 */): int64
        
        /** Adds a new item with text [param label] to the global menu [param rid].  
         *  Returns index of the inserted item, it's not guaranteed to be the same as [param index] value.  
         *  An [param accelerator] can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The [param accelerator] is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` ([kbd]Ctrl + A[/kbd]).  
         *      
         *  **Note:** The [param callback] and [param key_callback] Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to [param tag].  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         *      
         *  **Note:** On Windows, [param accelerator] and [param key_callback] are ignored.  
         */
        static addItem(rid: Rid, label: string, callback?: Callable /* = new Callable() */, keyCallback?: Callable /* = new Callable() */, tag?: any /* = <any> {} */, accelerator?: Key /* = 0 */, index?: int64 /* = -1 */): int64
        
        /** Adds a new checkable item with text [param label] to the global menu [param rid].  
         *  Returns index of the inserted item, it's not guaranteed to be the same as [param index] value.  
         *  An [param accelerator] can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The [param accelerator] is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` ([kbd]Ctrl + A[/kbd]).  
         *      
         *  **Note:** The [param callback] and [param key_callback] Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to [param tag].  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         *      
         *  **Note:** On Windows, [param accelerator] and [param key_callback] are ignored.  
         */
        static addCheckItem(rid: Rid, label: string, callback?: Callable /* = new Callable() */, keyCallback?: Callable /* = new Callable() */, tag?: any /* = <any> {} */, accelerator?: Key /* = 0 */, index?: int64 /* = -1 */): int64
        
        /** Adds a new item with text [param label] and icon [param icon] to the global menu [param rid].  
         *  Returns index of the inserted item, it's not guaranteed to be the same as [param index] value.  
         *  An [param accelerator] can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The [param accelerator] is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` ([kbd]Ctrl + A[/kbd]).  
         *      
         *  **Note:** The [param callback] and [param key_callback] Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to [param tag].  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         *      
         *  **Note:** On Windows, [param accelerator] and [param key_callback] are ignored.  
         */
        static addIconItem(rid: Rid, icon: Texture2D, label: string, callback?: Callable /* = new Callable() */, keyCallback?: Callable /* = new Callable() */, tag?: any /* = <any> {} */, accelerator?: Key /* = 0 */, index?: int64 /* = -1 */): int64
        
        /** Adds a new checkable item with text [param label] and icon [param icon] to the global menu [param rid].  
         *  Returns index of the inserted item, it's not guaranteed to be the same as [param index] value.  
         *  An [param accelerator] can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The [param accelerator] is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` ([kbd]Ctrl + A[/kbd]).  
         *      
         *  **Note:** The [param callback] and [param key_callback] Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to [param tag].  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         *      
         *  **Note:** On Windows, [param accelerator] and [param key_callback] are ignored.  
         */
        static addIconCheckItem(rid: Rid, icon: Texture2D, label: string, callback?: Callable /* = new Callable() */, keyCallback?: Callable /* = new Callable() */, tag?: any /* = <any> {} */, accelerator?: Key /* = 0 */, index?: int64 /* = -1 */): int64
        
        /** Adds a new radio-checkable item with text [param label] to the global menu [param rid].  
         *  Returns index of the inserted item, it's not guaranteed to be the same as [param index] value.  
         *  An [param accelerator] can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The [param accelerator] is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` ([kbd]Ctrl + A[/kbd]).  
         *      
         *  **Note:** Radio-checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method set_item_checked] for more info on how to control it.  
         *      
         *  **Note:** The [param callback] and [param key_callback] Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to [param tag].  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         *      
         *  **Note:** On Windows, [param accelerator] and [param key_callback] are ignored.  
         */
        static addRadioCheckItem(rid: Rid, label: string, callback?: Callable /* = new Callable() */, keyCallback?: Callable /* = new Callable() */, tag?: any /* = <any> {} */, accelerator?: Key /* = 0 */, index?: int64 /* = -1 */): int64
        
        /** Adds a new radio-checkable item with text [param label] and icon [param icon] to the global menu [param rid].  
         *  Returns index of the inserted item, it's not guaranteed to be the same as [param index] value.  
         *  An [param accelerator] can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The [param accelerator] is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` ([kbd]Ctrl + A[/kbd]).  
         *      
         *  **Note:** Radio-checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method set_item_checked] for more info on how to control it.  
         *      
         *  **Note:** The [param callback] and [param key_callback] Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to [param tag].  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         *      
         *  **Note:** On Windows, [param accelerator] and [param key_callback] are ignored.  
         */
        static addIconRadioCheckItem(rid: Rid, icon: Texture2D, label: string, callback?: Callable /* = new Callable() */, keyCallback?: Callable /* = new Callable() */, tag?: any /* = <any> {} */, accelerator?: Key /* = 0 */, index?: int64 /* = -1 */): int64
        
        /** Adds a new item with text [param label] to the global menu [param rid].  
         *  Contrarily to normal binary items, multistate items can have more than two states, as defined by [param max_states]. Each press or activate of the item will increase the state by one. The default value is defined by [param default_state].  
         *  Returns index of the inserted item, it's not guaranteed to be the same as [param index] value.  
         *  An [param accelerator] can optionally be defined, which is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The [param accelerator] is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` ([kbd]Ctrl + A[/kbd]).  
         *      
         *  **Note:** By default, there's no indication of the current item state, it should be changed manually.  
         *      
         *  **Note:** The [param callback] and [param key_callback] Callables need to accept exactly one Variant parameter, the parameter passed to the Callables will be the value passed to [param tag].  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         *      
         *  **Note:** On Windows, [param accelerator] and [param key_callback] are ignored.  
         */
        static addMultistateItem(rid: Rid, label: string, maxStates: int64, defaultState: int64, callback?: Callable /* = new Callable() */, keyCallback?: Callable /* = new Callable() */, tag?: any /* = <any> {} */, accelerator?: Key /* = 0 */, index?: int64 /* = -1 */): int64
        
        /** Adds a separator between items to the global menu [param rid]. Separators also occupy an index.  
         *  Returns index of the inserted item, it's not guaranteed to be the same as [param index] value.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static addSeparator(rid: Rid, index?: int64 /* = -1 */): int64
        
        /** Returns the index of the item with the specified [param text]. Indices are automatically assigned to each item by the engine, and cannot be set manually.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static findItemIndexWithText(rid: Rid, text: string): int64
        
        /** Returns the index of the item with the specified [param tag]. Indices are automatically assigned to each item by the engine, and cannot be set manually.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static findItemIndexWithTag(rid: Rid, tag: any): int64
        
        /** Returns the index of the item with the submenu specified by [param submenu_rid]. Indices are automatically assigned to each item by the engine, and cannot be set manually.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static findItemIndexWithSubmenu(rid: Rid, submenuRid: Rid): int64
        
        /** Returns `true` if the item at index [param idx] is checked.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static isItemChecked(rid: Rid, idx: int64): boolean
        
        /** Returns `true` if the item at index [param idx] is checkable in some way, i.e. if it has a checkbox or radio button.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static isItemCheckable(rid: Rid, idx: int64): boolean
        
        /** Returns `true` if the item at index [param idx] has radio button-style checkability.  
         *      
         *  **Note:** This is purely cosmetic; you must add the logic for checking/unchecking items in radio groups.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static isItemRadioCheckable(rid: Rid, idx: int64): boolean
        
        /** Returns the callback of the item at index [param idx].  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static getItemCallback(rid: Rid, idx: int64): Callable
        
        /** Returns the callback of the item accelerator at index [param idx].  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static getItemKeyCallback(rid: Rid, idx: int64): Callable
        
        /** Returns the metadata of the specified item, which might be of any type. You can set it with [method set_item_tag], which provides a simple way of assigning context data to items.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static getItemTag(rid: Rid, idx: int64): any
        
        /** Returns the text of the item at index [param idx].  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static getItemText(rid: Rid, idx: int64): string
        
        /** Returns the submenu ID of the item at index [param idx]. See [method add_submenu_item] for more info on how to add a submenu.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static getItemSubmenu(rid: Rid, idx: int64): Rid
        
        /** Returns the accelerator of the item at index [param idx]. Accelerators are special combinations of keys that activate the item, no matter which control is focused.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static getItemAccelerator(rid: Rid, idx: int64): Key
        
        /** Returns `true` if the item at index [param idx] is disabled. When it is disabled it can't be selected, or its action invoked.  
         *  See [method set_item_disabled] for more info on how to disable an item.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static isItemDisabled(rid: Rid, idx: int64): boolean
        
        /** Returns `true` if the item at index [param idx] is hidden.  
         *  See [method set_item_hidden] for more info on how to hide an item.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static isItemHidden(rid: Rid, idx: int64): boolean
        
        /** Returns the tooltip associated with the specified index [param idx].  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static getItemTooltip(rid: Rid, idx: int64): string
        
        /** Returns the state of a multistate item. See [method add_multistate_item] for details.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static getItemState(rid: Rid, idx: int64): int64
        
        /** Returns number of states of a multistate item. See [method add_multistate_item] for details.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static getItemMaxStates(rid: Rid, idx: int64): int64
        
        /** Returns the icon of the item at index [param idx].  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static getItemIcon(rid: Rid, idx: int64): null | Texture2D
        
        /** Returns the horizontal offset of the item at the given [param idx].  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static getItemIndentationLevel(rid: Rid, idx: int64): int64
        
        /** Sets the checkstate status of the item at index [param idx].  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static setItemChecked(rid: Rid, idx: int64, checked: boolean): void
        
        /** Sets whether the item at index [param idx] has a checkbox. If `false`, sets the type of the item to plain text.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static setItemCheckable(rid: Rid, idx: int64, checkable: boolean): void
        
        /** Sets the type of the item at the specified index [param idx] to radio button. If `false`, sets the type of the item to plain text.  
         *      
         *  **Note:** This is purely cosmetic; you must add the logic for checking/unchecking items in radio groups.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static setItemRadioCheckable(rid: Rid, idx: int64, checkable: boolean): void
        
        /** Sets the callback of the item at index [param idx]. Callback is emitted when an item is pressed.  
         *      
         *  **Note:** The [param callback] Callable needs to accept exactly one Variant parameter, the parameter passed to the Callable will be the value passed to the `tag` parameter when the menu item was created.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static setItemCallback(rid: Rid, idx: int64, callback: Callable): void
        
        /** Sets the callback of the item at index [param idx]. The callback is emitted when an item is hovered.  
         *      
         *  **Note:** The [param callback] Callable needs to accept exactly one Variant parameter, the parameter passed to the Callable will be the value passed to the `tag` parameter when the menu item was created.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static setItemHoverCallbacks(rid: Rid, idx: int64, callback: Callable): void
        
        /** Sets the callback of the item at index [param idx]. Callback is emitted when its accelerator is activated.  
         *      
         *  **Note:** The [param key_callback] Callable needs to accept exactly one Variant parameter, the parameter passed to the Callable will be the value passed to the `tag` parameter when the menu item was created.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static setItemKeyCallback(rid: Rid, idx: int64, keyCallback: Callable): void
        
        /** Sets the metadata of an item, which may be of any type. You can later get it with [method get_item_tag], which provides a simple way of assigning context data to items.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static setItemTag(rid: Rid, idx: int64, tag: any): void
        
        /** Sets the text of the item at index [param idx].  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static setItemText(rid: Rid, idx: int64, text: string): void
        
        /** Sets the submenu RID of the item at index [param idx]. The submenu is a global menu that would be shown when the item is clicked.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static setItemSubmenu(rid: Rid, idx: int64, submenuRid: Rid): void
        
        /** Sets the accelerator of the item at index [param idx]. [param keycode] can be a single [enum Key], or a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` ([kbd]Ctrl + A[/kbd]).  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static setItemAccelerator(rid: Rid, idx: int64, keycode: Key): void
        
        /** Enables/disables the item at index [param idx]. When it is disabled, it can't be selected and its action can't be invoked.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static setItemDisabled(rid: Rid, idx: int64, disabled: boolean): void
        
        /** Hides/shows the item at index [param idx]. When it is hidden, an item does not appear in a menu and its action cannot be invoked.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static setItemHidden(rid: Rid, idx: int64, hidden: boolean): void
        
        /** Sets the [String] tooltip of the item at the specified index [param idx].  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static setItemTooltip(rid: Rid, idx: int64, tooltip: string): void
        
        /** Sets the state of a multistate item. See [method add_multistate_item] for details.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static setItemState(rid: Rid, idx: int64, state: int64): void
        
        /** Sets number of state of a multistate item. See [method add_multistate_item] for details.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static setItemMaxStates(rid: Rid, idx: int64, maxStates: int64): void
        
        /** Replaces the [Texture2D] icon of the specified [param idx].  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         *      
         *  **Note:** This method is not supported by macOS Dock menu items.  
         */
        static setItemIcon(rid: Rid, idx: int64, icon: Texture2D): void
        
        /** Sets the horizontal offset of the item at the given [param idx].  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static setItemIndentationLevel(rid: Rid, idx: int64, level: int64): void
        
        /** Returns number of items in the global menu [param rid].  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static getItemCount(rid: Rid): int64
        
        /** Return `true` is global menu is a special system menu.  
         *      
         *  **Note:** This method is implemented only on macOS.  
         */
        static isSystemMenu(rid: Rid): boolean
        
        /** Removes the item at index [param idx] from the global menu [param rid].  
         *      
         *  **Note:** The indices of items after the removed item will be shifted by one.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static removeItem(rid: Rid, idx: int64): void
        
        /** Removes all items from the global menu [param rid].  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static clear(rid: Rid): void
    }
    // _singleton_class_: RenderingServer
    namespace RenderingServer {
        enum TextureType {
            TextureType2D = 0,
            TextureTypeLayered = 1,
            TextureType3D = 2,
        }
        enum TextureLayeredType {
            TextureLayered2DArray = 0,
            TextureLayeredCubemap = 1,
            TextureLayeredCubemapArray = 2,
        }
        enum CubeMapLayer {
            CubemapLayerLeft = 0,
            CubemapLayerRight = 1,
            CubemapLayerBottom = 2,
            CubemapLayerTop = 3,
            CubemapLayerFront = 4,
            CubemapLayerBack = 5,
        }
        enum ShaderMode {
            ShaderSpatial = 0,
            ShaderCanvasItem = 1,
            ShaderParticles = 2,
            ShaderSky = 3,
            ShaderFog = 4,
            ShaderMax = 5,
        }
        enum ArrayType {
            ArrayVertex = 0,
            ArrayNormal = 1,
            ArrayTangent = 2,
            ArrayColor = 3,
            ArrayTexUV = 4,
            ArrayTexUV2 = 5,
            ArrayCustom0 = 6,
            ArrayCustom1 = 7,
            ArrayCustom2 = 8,
            ArrayCustom3 = 9,
            ArrayBones = 10,
            ArrayWeights = 11,
            ArrayIndex = 12,
            ArrayMax = 13,
        }
        enum ArrayCustomFormat {
            ArrayCustomRgba8Unorm = 0,
            ArrayCustomRgba8Snorm = 1,
            ArrayCustomRgHalf = 2,
            ArrayCustomRgbaHalf = 3,
            ArrayCustomRFloat = 4,
            ArrayCustomRgFloat = 5,
            ArrayCustomRgbFloat = 6,
            ArrayCustomRgbaFloat = 7,
            ArrayCustomMax = 8,
        }
        enum ArrayFormat {
            ArrayFormatVertex = 1,
            ArrayFormatNormal = 2,
            ArrayFormatTangent = 4,
            ArrayFormatColor = 8,
            ArrayFormatTexUV = 16,
            ArrayFormatTexUV2 = 32,
            ArrayFormatCustom0 = 64,
            ArrayFormatCustom1 = 128,
            ArrayFormatCustom2 = 256,
            ArrayFormatCustom3 = 512,
            ArrayFormatBones = 1024,
            ArrayFormatWeights = 2048,
            ArrayFormatIndex = 4096,
            ArrayFormatBlendShapeMask = 7,
            ArrayFormatCustomBase = 13,
            ArrayFormatCustomBits = 3,
            ArrayFormatCustom0Shift = 13,
            ArrayFormatCustom1Shift = 16,
            ArrayFormatCustom2Shift = 19,
            ArrayFormatCustom3Shift = 22,
            ArrayFormatCustomMask = 7,
            ArrayCompressFlagsBase = 25,
            ArrayFlagUse2DVertices = 33554432,
            ArrayFlagUseDynamicUpdate = 67108864,
            ArrayFlagUse8BoneWeights = 134217728,
            ArrayFlagUsesEmptyVertexArray = 268435456,
            ArrayFlagCompressAttributes = 536870912,
            ArrayFlagFormatVersionBase = 35,
            ArrayFlagFormatVersionShift = 35,
            ArrayFlagFormatVersion1 = 0,
            ArrayFlagFormatVersion2 = 34359738368,
            ArrayFlagFormatCurrentVersion = 34359738368,
            ArrayFlagFormatVersionMask = 255,
        }
        enum PrimitiveType {
            PrimitivePoints = 0,
            PrimitiveLines = 1,
            PrimitiveLineStrip = 2,
            PrimitiveTriangles = 3,
            PrimitiveTriangleStrip = 4,
            PrimitiveMax = 5,
        }
        enum BlendShapeMode {
            BlendShapeModeNormalized = 0,
            BlendShapeModeRelative = 1,
        }
        enum MultimeshTransformFormat {
            MultimeshTransform2D = 0,
            MultimeshTransform3D = 1,
        }
        enum MultimeshPhysicsInterpolationQuality {
            MultimeshInterpQualityFast = 0,
            MultimeshInterpQualityHigh = 1,
        }
        enum LightProjectorFilter {
            LightProjectorFilterNearest = 0,
            LightProjectorFilterLinear = 1,
            LightProjectorFilterNearestMipmaps = 2,
            LightProjectorFilterLinearMipmaps = 3,
            LightProjectorFilterNearestMipmapsAnisotropic = 4,
            LightProjectorFilterLinearMipmapsAnisotropic = 5,
        }
        enum LightType {
            LightDirectional = 0,
            LightOmni = 1,
            LightSpot = 2,
        }
        enum LightParam {
            LightParamEnergy = 0,
            LightParamIndirectEnergy = 1,
            LightParamVolumetricFogEnergy = 2,
            LightParamSpecular = 3,
            LightParamRange = 4,
            LightParamSize = 5,
            LightParamAttenuation = 6,
            LightParamSpotAngle = 7,
            LightParamSpotAttenuation = 8,
            LightParamShadowMaxDistance = 9,
            LightParamShadowSplit1Offset = 10,
            LightParamShadowSplit2Offset = 11,
            LightParamShadowSplit3Offset = 12,
            LightParamShadowFadeStart = 13,
            LightParamShadowNormalBias = 14,
            LightParamShadowBias = 15,
            LightParamShadowPancakeSize = 16,
            LightParamShadowOpacity = 17,
            LightParamShadowBlur = 18,
            LightParamTransmittanceBias = 19,
            LightParamIntensity = 20,
            LightParamMax = 21,
        }
        enum LightBakeMode {
            LightBakeDisabled = 0,
            LightBakeStatic = 1,
            LightBakeDynamic = 2,
        }
        enum LightOmniShadowMode {
            LightOmniShadowDualParaboloid = 0,
            LightOmniShadowCube = 1,
        }
        enum LightDirectionalShadowMode {
            LightDirectionalShadowOrthogonal = 0,
            LightDirectionalShadowParallel2Splits = 1,
            LightDirectionalShadowParallel4Splits = 2,
        }
        enum LightDirectionalSkyMode {
            LightDirectionalSkyModeLightAndSky = 0,
            LightDirectionalSkyModeLightOnly = 1,
            LightDirectionalSkyModeSkyOnly = 2,
        }
        enum ShadowQuality {
            ShadowQualityHard = 0,
            ShadowQualitySoftVeryLow = 1,
            ShadowQualitySoftLow = 2,
            ShadowQualitySoftMedium = 3,
            ShadowQualitySoftHigh = 4,
            ShadowQualitySoftUltra = 5,
            ShadowQualityMax = 6,
        }
        enum ReflectionProbeUpdateMode {
            ReflectionProbeUpdateOnce = 0,
            ReflectionProbeUpdateAlways = 1,
        }
        enum ReflectionProbeAmbientMode {
            ReflectionProbeAmbientDisabled = 0,
            ReflectionProbeAmbientEnvironment = 1,
            ReflectionProbeAmbientColor = 2,
        }
        enum DecalTexture {
            DecalTextureAlbedo = 0,
            DecalTextureNormal = 1,
            DecalTextureOrm = 2,
            DecalTextureEmission = 3,
            DecalTextureMax = 4,
        }
        enum DecalFilter {
            DecalFilterNearest = 0,
            DecalFilterLinear = 1,
            DecalFilterNearestMipmaps = 2,
            DecalFilterLinearMipmaps = 3,
            DecalFilterNearestMipmapsAnisotropic = 4,
            DecalFilterLinearMipmapsAnisotropic = 5,
        }
        enum VoxelGIQuality {
            VoxelGIQualityLow = 0,
            VoxelGIQualityHigh = 1,
        }
        enum ParticlesMode {
            ParticlesMode2D = 0,
            ParticlesMode3D = 1,
        }
        enum ParticlesTransformAlign {
            ParticlesTransformAlignDisabled = 0,
            ParticlesTransformAlignZBillboard = 1,
            ParticlesTransformAlignYToVelocity = 2,
            ParticlesTransformAlignZBillboardYToVelocity = 3,
        }
        enum ParticlesDrawOrder {
            ParticlesDrawOrderIndex = 0,
            ParticlesDrawOrderLifetime = 1,
            ParticlesDrawOrderReverseLifetime = 2,
            ParticlesDrawOrderViewDepth = 3,
        }
        enum ParticlesCollisionType {
            ParticlesCollisionTypeSphereAttract = 0,
            ParticlesCollisionTypeBoxAttract = 1,
            ParticlesCollisionTypeVectorFieldAttract = 2,
            ParticlesCollisionTypeSphereCollide = 3,
            ParticlesCollisionTypeBoxCollide = 4,
            ParticlesCollisionTypeSdfCollide = 5,
            ParticlesCollisionTypeHeightfieldCollide = 6,
        }
        enum ParticlesCollisionHeightfieldResolution {
            ParticlesCollisionHeightfieldResolution256 = 0,
            ParticlesCollisionHeightfieldResolution512 = 1,
            ParticlesCollisionHeightfieldResolution1024 = 2,
            ParticlesCollisionHeightfieldResolution2048 = 3,
            ParticlesCollisionHeightfieldResolution4096 = 4,
            ParticlesCollisionHeightfieldResolution8192 = 5,
            ParticlesCollisionHeightfieldResolutionMax = 6,
        }
        enum FogVolumeShape {
            FogVolumeShapeEllipsoid = 0,
            FogVolumeShapeCone = 1,
            FogVolumeShapeCylinder = 2,
            FogVolumeShapeBox = 3,
            FogVolumeShapeWorld = 4,
            FogVolumeShapeMax = 5,
        }
        enum ViewportScaling3DMode {
            ViewportScaling3DModeBilinear = 0,
            ViewportScaling3DModeFsr = 1,
            ViewportScaling3DModeFsr2 = 2,
            ViewportScaling3DModeMetalfxSpatial = 3,
            ViewportScaling3DModeMetalfxTemporal = 4,
            ViewportScaling3DModeMax = 5,
        }
        enum ViewportUpdateMode {
            ViewportUpdateDisabled = 0,
            ViewportUpdateOnce = 1,
            ViewportUpdateWhenVisible = 2,
            ViewportUpdateWhenParentVisible = 3,
            ViewportUpdateAlways = 4,
        }
        enum ViewportClearMode {
            ViewportClearAlways = 0,
            ViewportClearNever = 1,
            ViewportClearOnlyNextFrame = 2,
        }
        enum ViewportEnvironmentMode {
            ViewportEnvironmentDisabled = 0,
            ViewportEnvironmentEnabled = 1,
            ViewportEnvironmentInherit = 2,
            ViewportEnvironmentMax = 3,
        }
        enum ViewportSdfOversize {
            ViewportSdfOversize100Percent = 0,
            ViewportSdfOversize120Percent = 1,
            ViewportSdfOversize150Percent = 2,
            ViewportSdfOversize200Percent = 3,
            ViewportSdfOversizeMax = 4,
        }
        enum ViewportSdfScale {
            ViewportSdfScale100Percent = 0,
            ViewportSdfScale50Percent = 1,
            ViewportSdfScale25Percent = 2,
            ViewportSdfScaleMax = 3,
        }
        enum ViewportMsaa {
            ViewportMsaaDisabled = 0,
            ViewportMsaa2X = 1,
            ViewportMsaa4X = 2,
            ViewportMsaa8X = 3,
            ViewportMsaaMax = 4,
        }
        enum ViewportAnisotropicFiltering {
            ViewportAnisotropyDisabled = 0,
            ViewportAnisotropy2X = 1,
            ViewportAnisotropy4X = 2,
            ViewportAnisotropy8X = 3,
            ViewportAnisotropy16X = 4,
            ViewportAnisotropyMax = 5,
        }
        enum ViewportScreenSpaceAA {
            ViewportScreenSpaceAADisabled = 0,
            ViewportScreenSpaceAAFxaa = 1,
            ViewportScreenSpaceAAMax = 2,
        }
        enum ViewportOcclusionCullingBuildQuality {
            ViewportOcclusionBuildQualityLow = 0,
            ViewportOcclusionBuildQualityMedium = 1,
            ViewportOcclusionBuildQualityHigh = 2,
        }
        enum ViewportRenderInfo {
            ViewportRenderInfoObjectsInFrame = 0,
            ViewportRenderInfoPrimitivesInFrame = 1,
            ViewportRenderInfoDrawCallsInFrame = 2,
            ViewportRenderInfoMax = 3,
        }
        enum ViewportRenderInfoType {
            ViewportRenderInfoTypeVisible = 0,
            ViewportRenderInfoTypeShadow = 1,
            ViewportRenderInfoTypeCanvas = 2,
            ViewportRenderInfoTypeMax = 3,
        }
        enum ViewportDebugDraw {
            ViewportDebugDrawDisabled = 0,
            ViewportDebugDrawUnshaded = 1,
            ViewportDebugDrawLighting = 2,
            ViewportDebugDrawOverdraw = 3,
            ViewportDebugDrawWireframe = 4,
            ViewportDebugDrawNormalBuffer = 5,
            ViewportDebugDrawVoxelGIAlbedo = 6,
            ViewportDebugDrawVoxelGILighting = 7,
            ViewportDebugDrawVoxelGIEmission = 8,
            ViewportDebugDrawShadowAtlas = 9,
            ViewportDebugDrawDirectionalShadowAtlas = 10,
            ViewportDebugDrawSceneLuminance = 11,
            ViewportDebugDrawSsao = 12,
            ViewportDebugDrawSsil = 13,
            ViewportDebugDrawPssmSplits = 14,
            ViewportDebugDrawDecalAtlas = 15,
            ViewportDebugDrawSdfgi = 16,
            ViewportDebugDrawSdfgiProbes = 17,
            ViewportDebugDrawGIBuffer = 18,
            ViewportDebugDrawDisableLod = 19,
            ViewportDebugDrawClusterOmniLights = 20,
            ViewportDebugDrawClusterSpotLights = 21,
            ViewportDebugDrawClusterDecals = 22,
            ViewportDebugDrawClusterReflectionProbes = 23,
            ViewportDebugDrawOccluders = 24,
            ViewportDebugDrawMotionVectors = 25,
            ViewportDebugDrawInternalBuffer = 26,
        }
        enum ViewportVrsMode {
            ViewportVrsDisabled = 0,
            ViewportVrsTexture = 1,
            ViewportVrsXR = 2,
            ViewportVrsMax = 3,
        }
        enum ViewportVrsUpdateMode {
            ViewportVrsUpdateDisabled = 0,
            ViewportVrsUpdateOnce = 1,
            ViewportVrsUpdateAlways = 2,
            ViewportVrsUpdateMax = 3,
        }
        enum SkyMode {
            SkyModeAutomatic = 0,
            SkyModeQuality = 1,
            SkyModeIncremental = 2,
            SkyModeRealtime = 3,
        }
        enum CompositorEffectFlags {
            CompositorEffectFlagAccessResolvedColor = 1,
            CompositorEffectFlagAccessResolvedDepth = 2,
            CompositorEffectFlagNeedsMotionVectors = 4,
            CompositorEffectFlagNeedsRoughness = 8,
            CompositorEffectFlagNeedsSeparateSpecular = 16,
        }
        enum CompositorEffectCallbackType {
            CompositorEffectCallbackTypePreOpaque = 0,
            CompositorEffectCallbackTypePostOpaque = 1,
            CompositorEffectCallbackTypePostSky = 2,
            CompositorEffectCallbackTypePreTransparent = 3,
            CompositorEffectCallbackTypePostTransparent = 4,
            CompositorEffectCallbackTypeAny = -1,
        }
        enum EnvironmentBG {
            EnvBgClearColor = 0,
            EnvBgColor = 1,
            EnvBgSky = 2,
            EnvBgCanvas = 3,
            EnvBgKeep = 4,
            EnvBgCameraFeed = 5,
            EnvBgMax = 6,
        }
        enum EnvironmentAmbientSource {
            EnvAmbientSourceBg = 0,
            EnvAmbientSourceDisabled = 1,
            EnvAmbientSourceColor = 2,
            EnvAmbientSourceSky = 3,
        }
        enum EnvironmentReflectionSource {
            EnvReflectionSourceBg = 0,
            EnvReflectionSourceDisabled = 1,
            EnvReflectionSourceSky = 2,
        }
        enum EnvironmentGlowBlendMode {
            EnvGlowBlendModeAdditive = 0,
            EnvGlowBlendModeScreen = 1,
            EnvGlowBlendModeSoftlight = 2,
            EnvGlowBlendModeReplace = 3,
            EnvGlowBlendModeMix = 4,
        }
        enum EnvironmentFogMode {
            EnvFogModeExponential = 0,
            EnvFogModeDepth = 1,
        }
        enum EnvironmentToneMapper {
            EnvToneMapperLinear = 0,
            EnvToneMapperReinhard = 1,
            EnvToneMapperFilmic = 2,
            EnvToneMapperAces = 3,
            EnvToneMapperAgx = 4,
        }
        enum EnvironmentSsrRoughnessQuality {
            EnvSsrRoughnessQualityDisabled = 0,
            EnvSsrRoughnessQualityLow = 1,
            EnvSsrRoughnessQualityMedium = 2,
            EnvSsrRoughnessQualityHigh = 3,
        }
        enum EnvironmentSsaoQuality {
            EnvSsaoQualityVeryLow = 0,
            EnvSsaoQualityLow = 1,
            EnvSsaoQualityMedium = 2,
            EnvSsaoQualityHigh = 3,
            EnvSsaoQualityUltra = 4,
        }
        enum EnvironmentSsilQuality {
            EnvSsilQualityVeryLow = 0,
            EnvSsilQualityLow = 1,
            EnvSsilQualityMedium = 2,
            EnvSsilQualityHigh = 3,
            EnvSsilQualityUltra = 4,
        }
        enum EnvironmentSdfgiyScale {
            EnvSdfgiYScale50Percent = 0,
            EnvSdfgiYScale75Percent = 1,
            EnvSdfgiYScale100Percent = 2,
        }
        enum EnvironmentSdfgiRayCount {
            EnvSdfgiRayCount4 = 0,
            EnvSdfgiRayCount8 = 1,
            EnvSdfgiRayCount16 = 2,
            EnvSdfgiRayCount32 = 3,
            EnvSdfgiRayCount64 = 4,
            EnvSdfgiRayCount96 = 5,
            EnvSdfgiRayCount128 = 6,
            EnvSdfgiRayCountMax = 7,
        }
        enum EnvironmentSdfgiFramesToConverge {
            EnvSdfgiConvergeIn5Frames = 0,
            EnvSdfgiConvergeIn10Frames = 1,
            EnvSdfgiConvergeIn15Frames = 2,
            EnvSdfgiConvergeIn20Frames = 3,
            EnvSdfgiConvergeIn25Frames = 4,
            EnvSdfgiConvergeIn30Frames = 5,
            EnvSdfgiConvergeMax = 6,
        }
        enum EnvironmentSdfgiFramesToUpdateLight {
            EnvSdfgiUpdateLightIn1Frame = 0,
            EnvSdfgiUpdateLightIn2Frames = 1,
            EnvSdfgiUpdateLightIn4Frames = 2,
            EnvSdfgiUpdateLightIn8Frames = 3,
            EnvSdfgiUpdateLightIn16Frames = 4,
            EnvSdfgiUpdateLightMax = 5,
        }
        enum SubSurfaceScatteringQuality {
            SubSurfaceScatteringQualityDisabled = 0,
            SubSurfaceScatteringQualityLow = 1,
            SubSurfaceScatteringQualityMedium = 2,
            SubSurfaceScatteringQualityHigh = 3,
        }
        enum DofBokehShape {
            DofBokehBox = 0,
            DofBokehHexagon = 1,
            DofBokehCircle = 2,
        }
        enum DofBlurQuality {
            DofBlurQualityVeryLow = 0,
            DofBlurQualityLow = 1,
            DofBlurQualityMedium = 2,
            DofBlurQualityHigh = 3,
        }
        enum InstanceType {
            InstanceNone = 0,
            InstanceMesh = 1,
            InstanceMultimesh = 2,
            InstanceParticles = 3,
            InstanceParticlesCollision = 4,
            InstanceLight = 5,
            InstanceReflectionProbe = 6,
            InstanceDecal = 7,
            InstanceVoxelGI = 8,
            InstanceLightmap = 9,
            InstanceOccluder = 10,
            InstanceVisiblityNotifier = 11,
            InstanceFogVolume = 12,
            InstanceMax = 13,
            InstanceGeometryMask = 14,
        }
        enum InstanceFlags {
            InstanceFlagUseBakedLight = 0,
            InstanceFlagUseDynamicGI = 1,
            InstanceFlagDrawNextFrameIfVisible = 2,
            InstanceFlagIgnoreOcclusionCulling = 3,
            InstanceFlagMax = 4,
        }
        enum ShadowCastingSetting {
            ShadowCastingSettingOff = 0,
            ShadowCastingSettingOn = 1,
            ShadowCastingSettingDoubleSided = 2,
            ShadowCastingSettingShadowsOnly = 3,
        }
        enum VisibilityRangeFadeMode {
            VisibilityRangeFadeDisabled = 0,
            VisibilityRangeFadeSelf = 1,
            VisibilityRangeFadeDependencies = 2,
        }
        enum BakeChannels {
            BakeChannelAlbedoAlpha = 0,
            BakeChannelNormal = 1,
            BakeChannelOrm = 2,
            BakeChannelEmission = 3,
        }
        enum CanvasTextureChannel {
            CanvasTextureChannelDiffuse = 0,
            CanvasTextureChannelNormal = 1,
            CanvasTextureChannelSpecular = 2,
        }
        enum NinePatchAxisMode {
            NinePatchStretch = 0,
            NinePatchTile = 1,
            NinePatchTileFit = 2,
        }
        enum CanvasItemTextureFilter {
            CanvasItemTextureFilterDefault = 0,
            CanvasItemTextureFilterNearest = 1,
            CanvasItemTextureFilterLinear = 2,
            CanvasItemTextureFilterNearestWithMipmaps = 3,
            CanvasItemTextureFilterLinearWithMipmaps = 4,
            CanvasItemTextureFilterNearestWithMipmapsAnisotropic = 5,
            CanvasItemTextureFilterLinearWithMipmapsAnisotropic = 6,
            CanvasItemTextureFilterMax = 7,
        }
        enum CanvasItemTextureRepeat {
            CanvasItemTextureRepeatDefault = 0,
            CanvasItemTextureRepeatDisabled = 1,
            CanvasItemTextureRepeatEnabled = 2,
            CanvasItemTextureRepeatMirror = 3,
            CanvasItemTextureRepeatMax = 4,
        }
        enum CanvasGroupMode {
            CanvasGroupModeDisabled = 0,
            CanvasGroupModeClipOnly = 1,
            CanvasGroupModeClipAndDraw = 2,
            CanvasGroupModeTransparent = 3,
        }
        enum CanvasLightMode {
            CanvasLightModePoint = 0,
            CanvasLightModeDirectional = 1,
        }
        enum CanvasLightBlendMode {
            CanvasLightBlendModeAdd = 0,
            CanvasLightBlendModeSub = 1,
            CanvasLightBlendModeMix = 2,
        }
        enum CanvasLightShadowFilter {
            CanvasLightFilterNone = 0,
            CanvasLightFilterPcf5 = 1,
            CanvasLightFilterPcf13 = 2,
            CanvasLightFilterMax = 3,
        }
        enum CanvasOccluderPolygonCullMode {
            CanvasOccluderPolygonCullDisabled = 0,
            CanvasOccluderPolygonCullClockwise = 1,
            CanvasOccluderPolygonCullCounterClockwise = 2,
        }
        enum GlobalShaderParameterType {
            GlobalVarTypeBool = 0,
            GlobalVarTypeBvec2 = 1,
            GlobalVarTypeBvec3 = 2,
            GlobalVarTypeBvec4 = 3,
            GlobalVarTypeInt = 4,
            GlobalVarTypeIvec2 = 5,
            GlobalVarTypeIvec3 = 6,
            GlobalVarTypeIvec4 = 7,
            GlobalVarTypeRect2I = 8,
            GlobalVarTypeUint = 9,
            GlobalVarTypeUvec2 = 10,
            GlobalVarTypeUvec3 = 11,
            GlobalVarTypeUvec4 = 12,
            GlobalVarTypeFloat = 13,
            GlobalVarTypeVec2 = 14,
            GlobalVarTypeVec3 = 15,
            GlobalVarTypeVec4 = 16,
            GlobalVarTypeColor = 17,
            GlobalVarTypeRect2 = 18,
            GlobalVarTypeMat2 = 19,
            GlobalVarTypeMat3 = 20,
            GlobalVarTypeMat4 = 21,
            GlobalVarTypeTransform2D = 22,
            GlobalVarTypeTransform = 23,
            GlobalVarTypeSampler2D = 24,
            GlobalVarTypeSampler2Darray = 25,
            GlobalVarTypeSampler3D = 26,
            GlobalVarTypeSamplercube = 27,
            GlobalVarTypeSamplerext = 28,
            GlobalVarTypeMax = 29,
        }
        enum RenderingInfo {
            RenderingInfoTotalObjectsInFrame = 0,
            RenderingInfoTotalPrimitivesInFrame = 1,
            RenderingInfoTotalDrawCallsInFrame = 2,
            RenderingInfoTextureMemUsed = 3,
            RenderingInfoBufferMemUsed = 4,
            RenderingInfoVideoMemUsed = 5,
            RenderingInfoPipelineCompilationsCanvas = 6,
            RenderingInfoPipelineCompilationsMesh = 7,
            RenderingInfoPipelineCompilationsSurface = 8,
            RenderingInfoPipelineCompilationsDraw = 9,
            RenderingInfoPipelineCompilationsSpecialization = 10,
        }
        enum PipelineSource {
            PipelineSourceCanvas = 0,
            PipelineSourceMesh = 1,
            PipelineSourceSurface = 2,
            PipelineSourceDraw = 3,
            PipelineSourceSpecialization = 4,
            PipelineSourceMax = 5,
        }
        enum Features {
            FeatureShaders = 0,
            FeatureMultithreaded = 1,
        }
    }
    /** Server for anything visible.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_renderingserver.html  
     */
    class RenderingServer extends GObject {
        /** Marks an error that shows that the index array is empty. */
        static readonly NO_INDEX_ARRAY = -1
        
        /** Number of weights/bones per vertex. */
        static readonly ARRAY_WEIGHTS_SIZE = 4
        
        /** The minimum Z-layer for canvas items. */
        static readonly CANVAS_ITEM_Z_MIN = -4096
        
        /** The maximum Z-layer for canvas items. */
        static readonly CANVAS_ITEM_Z_MAX = 4096
        
        /** The maximum number of glow levels that can be used with the glow post-processing effect. */
        static readonly MAX_GLOW_LEVELS = 7
        static readonly MAX_CURSORS = 8
        
        /** The maximum number of directional lights that can be rendered at a given time in 2D. */
        static readonly MAX_2D_DIRECTIONAL_LIGHTS = 8
        
        /** The maximum number of surfaces a mesh can have. */
        static readonly MAX_MESH_SURFACES = 256
        
        /** 2D texture. */
        static readonly TEXTURE_TYPE_2D = 0
        
        /** Layered texture. */
        static readonly TEXTURE_TYPE_LAYERED = 1
        
        /** 3D texture. */
        static readonly TEXTURE_TYPE_3D = 2
        
        /** Array of 2-dimensional textures (see [Texture2DArray]). */
        static readonly TEXTURE_LAYERED_2D_ARRAY = 0
        
        /** Cubemap texture (see [Cubemap]). */
        static readonly TEXTURE_LAYERED_CUBEMAP = 1
        
        /** Array of cubemap textures (see [CubemapArray]). */
        static readonly TEXTURE_LAYERED_CUBEMAP_ARRAY = 2
        
        /** Left face of a [Cubemap]. */
        static readonly CUBEMAP_LAYER_LEFT = 0
        
        /** Right face of a [Cubemap]. */
        static readonly CUBEMAP_LAYER_RIGHT = 1
        
        /** Bottom face of a [Cubemap]. */
        static readonly CUBEMAP_LAYER_BOTTOM = 2
        
        /** Top face of a [Cubemap]. */
        static readonly CUBEMAP_LAYER_TOP = 3
        
        /** Front face of a [Cubemap]. */
        static readonly CUBEMAP_LAYER_FRONT = 4
        
        /** Back face of a [Cubemap]. */
        static readonly CUBEMAP_LAYER_BACK = 5
        
        /** Shader is a 3D shader. */
        static readonly SHADER_SPATIAL = 0
        
        /** Shader is a 2D shader. */
        static readonly SHADER_CANVAS_ITEM = 1
        
        /** Shader is a particle shader (can be used in both 2D and 3D). */
        static readonly SHADER_PARTICLES = 2
        
        /** Shader is a 3D sky shader. */
        static readonly SHADER_SKY = 3
        
        /** Shader is a 3D fog shader. */
        static readonly SHADER_FOG = 4
        
        /** Represents the size of the [enum ShaderMode] enum. */
        static readonly SHADER_MAX = 5
        
        /** The minimum renderpriority of all materials. */
        static readonly MATERIAL_RENDER_PRIORITY_MIN = -128
        
        /** The maximum renderpriority of all materials. */
        static readonly MATERIAL_RENDER_PRIORITY_MAX = 127
        
        /** Array is a vertex position array. */
        static readonly ARRAY_VERTEX = 0
        
        /** Array is a normal array. */
        static readonly ARRAY_NORMAL = 1
        
        /** Array is a tangent array. */
        static readonly ARRAY_TANGENT = 2
        
        /** Array is a vertex color array. */
        static readonly ARRAY_COLOR = 3
        
        /** Array is a UV coordinates array. */
        static readonly ARRAY_TEX_UV = 4
        
        /** Array is a UV coordinates array for the second set of UV coordinates. */
        static readonly ARRAY_TEX_UV2 = 5
        
        /** Array is a custom data array for the first set of custom data. */
        static readonly ARRAY_CUSTOM0 = 6
        
        /** Array is a custom data array for the second set of custom data. */
        static readonly ARRAY_CUSTOM1 = 7
        
        /** Array is a custom data array for the third set of custom data. */
        static readonly ARRAY_CUSTOM2 = 8
        
        /** Array is a custom data array for the fourth set of custom data. */
        static readonly ARRAY_CUSTOM3 = 9
        
        /** Array contains bone information. */
        static readonly ARRAY_BONES = 10
        
        /** Array is weight information. */
        static readonly ARRAY_WEIGHTS = 11
        
        /** Array is an index array. */
        static readonly ARRAY_INDEX = 12
        
        /** Represents the size of the [enum ArrayType] enum. */
        static readonly ARRAY_MAX = 13
        
        /** The number of custom data arrays available ([constant ARRAY_CUSTOM0], [constant ARRAY_CUSTOM1], [constant ARRAY_CUSTOM2], [constant ARRAY_CUSTOM3]). */
        static readonly ARRAY_CUSTOM_COUNT = 4
        
        /** Custom data array contains 8-bit-per-channel red/green/blue/alpha color data. Values are normalized, unsigned floating-point in the `[0.0, 1.0]` range. */
        static readonly ARRAY_CUSTOM_RGBA8_UNORM = 0
        
        /** Custom data array contains 8-bit-per-channel red/green/blue/alpha color data. Values are normalized, signed floating-point in the `[-1.0, 1.0]` range. */
        static readonly ARRAY_CUSTOM_RGBA8_SNORM = 1
        
        /** Custom data array contains 16-bit-per-channel red/green color data. Values are floating-point in half precision. */
        static readonly ARRAY_CUSTOM_RG_HALF = 2
        
        /** Custom data array contains 16-bit-per-channel red/green/blue/alpha color data. Values are floating-point in half precision. */
        static readonly ARRAY_CUSTOM_RGBA_HALF = 3
        
        /** Custom data array contains 32-bit-per-channel red color data. Values are floating-point in single precision. */
        static readonly ARRAY_CUSTOM_R_FLOAT = 4
        
        /** Custom data array contains 32-bit-per-channel red/green color data. Values are floating-point in single precision. */
        static readonly ARRAY_CUSTOM_RG_FLOAT = 5
        
        /** Custom data array contains 32-bit-per-channel red/green/blue color data. Values are floating-point in single precision. */
        static readonly ARRAY_CUSTOM_RGB_FLOAT = 6
        
        /** Custom data array contains 32-bit-per-channel red/green/blue/alpha color data. Values are floating-point in single precision. */
        static readonly ARRAY_CUSTOM_RGBA_FLOAT = 7
        
        /** Represents the size of the [enum ArrayCustomFormat] enum. */
        static readonly ARRAY_CUSTOM_MAX = 8
        
        /** Flag used to mark a vertex position array. */
        static readonly ARRAY_FORMAT_VERTEX = 1
        
        /** Flag used to mark a normal array. */
        static readonly ARRAY_FORMAT_NORMAL = 2
        
        /** Flag used to mark a tangent array. */
        static readonly ARRAY_FORMAT_TANGENT = 4
        
        /** Flag used to mark a vertex color array. */
        static readonly ARRAY_FORMAT_COLOR = 8
        
        /** Flag used to mark a UV coordinates array. */
        static readonly ARRAY_FORMAT_TEX_UV = 16
        
        /** Flag used to mark a UV coordinates array for the second UV coordinates. */
        static readonly ARRAY_FORMAT_TEX_UV2 = 32
        
        /** Flag used to mark an array of custom per-vertex data for the first set of custom data. */
        static readonly ARRAY_FORMAT_CUSTOM0 = 64
        
        /** Flag used to mark an array of custom per-vertex data for the second set of custom data. */
        static readonly ARRAY_FORMAT_CUSTOM1 = 128
        
        /** Flag used to mark an array of custom per-vertex data for the third set of custom data. */
        static readonly ARRAY_FORMAT_CUSTOM2 = 256
        
        /** Flag used to mark an array of custom per-vertex data for the fourth set of custom data. */
        static readonly ARRAY_FORMAT_CUSTOM3 = 512
        
        /** Flag used to mark a bone information array. */
        static readonly ARRAY_FORMAT_BONES = 1024
        
        /** Flag used to mark a weights array. */
        static readonly ARRAY_FORMAT_WEIGHTS = 2048
        
        /** Flag used to mark an index array. */
        static readonly ARRAY_FORMAT_INDEX = 4096
        
        /** Mask of mesh channels permitted in blend shapes. */
        static readonly ARRAY_FORMAT_BLEND_SHAPE_MASK = 7
        
        /** Shift of first custom channel. */
        static readonly ARRAY_FORMAT_CUSTOM_BASE = 13
        
        /** Number of format bits per custom channel. See [enum ArrayCustomFormat]. */
        static readonly ARRAY_FORMAT_CUSTOM_BITS = 3
        
        /** Amount to shift [enum ArrayCustomFormat] for custom channel index 0. */
        static readonly ARRAY_FORMAT_CUSTOM0_SHIFT = 13
        
        /** Amount to shift [enum ArrayCustomFormat] for custom channel index 1. */
        static readonly ARRAY_FORMAT_CUSTOM1_SHIFT = 16
        
        /** Amount to shift [enum ArrayCustomFormat] for custom channel index 2. */
        static readonly ARRAY_FORMAT_CUSTOM2_SHIFT = 19
        
        /** Amount to shift [enum ArrayCustomFormat] for custom channel index 3. */
        static readonly ARRAY_FORMAT_CUSTOM3_SHIFT = 22
        
        /** Mask of custom format bits per custom channel. Must be shifted by one of the SHIFT constants. See [enum ArrayCustomFormat]. */
        static readonly ARRAY_FORMAT_CUSTOM_MASK = 7
        
        /** Shift of first compress flag. Compress flags should be passed to [method ArrayMesh.add_surface_from_arrays] and [method SurfaceTool.commit]. */
        static readonly ARRAY_COMPRESS_FLAGS_BASE = 25
        
        /** Flag used to mark that the array contains 2D vertices. */
        static readonly ARRAY_FLAG_USE_2D_VERTICES = 33554432
        
        /** Flag used to mark that the mesh data will use `GL_DYNAMIC_DRAW` on GLES. Unused on Vulkan. */
        static readonly ARRAY_FLAG_USE_DYNAMIC_UPDATE = 67108864
        
        /** Flag used to mark that the array uses 8 bone weights instead of 4. */
        static readonly ARRAY_FLAG_USE_8_BONE_WEIGHTS = 134217728
        
        /** Flag used to mark that the mesh does not have a vertex array and instead will infer vertex positions in the shader using indices and other information. */
        static readonly ARRAY_FLAG_USES_EMPTY_VERTEX_ARRAY = 268435456
        
        /** Flag used to mark that a mesh is using compressed attributes (vertices, normals, tangents, UVs). When this form of compression is enabled, vertex positions will be packed into an RGBA16UNORM attribute and scaled in the vertex shader. The normal and tangent will be packed into an RG16UNORM representing an axis, and a 16-bit float stored in the A-channel of the vertex. UVs will use 16-bit normalized floats instead of full 32-bit signed floats. When using this compression mode you must use either vertices, normals, and tangents or only vertices. You cannot use normals without tangents. Importers will automatically enable this compression if they can. */
        static readonly ARRAY_FLAG_COMPRESS_ATTRIBUTES = 536870912
        
        /** Flag used to mark the start of the bits used to store the mesh version. */
        static readonly ARRAY_FLAG_FORMAT_VERSION_BASE = 35
        
        /** Flag used to shift a mesh format int to bring the version into the lowest digits. */
        static readonly ARRAY_FLAG_FORMAT_VERSION_SHIFT = 35
        
        /** Flag used to record the format used by prior mesh versions before the introduction of a version. */
        static readonly ARRAY_FLAG_FORMAT_VERSION_1 = 0
        
        /** Flag used to record the second iteration of the mesh version flag. The primary difference between this and [constant ARRAY_FLAG_FORMAT_VERSION_1] is that this version supports [constant ARRAY_FLAG_COMPRESS_ATTRIBUTES] and in this version vertex positions are de-interleaved from normals and tangents. */
        static readonly ARRAY_FLAG_FORMAT_VERSION_2 = 34359738368
        
        /** Flag used to record the current version that the engine expects. Currently this is the same as [constant ARRAY_FLAG_FORMAT_VERSION_2]. */
        static readonly ARRAY_FLAG_FORMAT_CURRENT_VERSION = 34359738368
        
        /** Flag used to isolate the bits used for mesh version after using [constant ARRAY_FLAG_FORMAT_VERSION_SHIFT] to shift them into place. */
        static readonly ARRAY_FLAG_FORMAT_VERSION_MASK = 255
        
        /** Primitive to draw consists of points. */
        static readonly PRIMITIVE_POINTS = 0
        
        /** Primitive to draw consists of lines. */
        static readonly PRIMITIVE_LINES = 1
        
        /** Primitive to draw consists of a line strip from start to end. */
        static readonly PRIMITIVE_LINE_STRIP = 2
        
        /** Primitive to draw consists of triangles. */
        static readonly PRIMITIVE_TRIANGLES = 3
        
        /** Primitive to draw consists of a triangle strip (the last 3 vertices are always combined to make a triangle). */
        static readonly PRIMITIVE_TRIANGLE_STRIP = 4
        
        /** Represents the size of the [enum PrimitiveType] enum. */
        static readonly PRIMITIVE_MAX = 5
        
        /** Blend shapes are normalized. */
        static readonly BLEND_SHAPE_MODE_NORMALIZED = 0
        
        /** Blend shapes are relative to base weight. */
        static readonly BLEND_SHAPE_MODE_RELATIVE = 1
        
        /** Use [Transform2D] to store MultiMesh transform. */
        static readonly MULTIMESH_TRANSFORM_2D = 0
        
        /** Use [Transform3D] to store MultiMesh transform. */
        static readonly MULTIMESH_TRANSFORM_3D = 1
        
        /** MultiMesh physics interpolation favors speed over quality. */
        static readonly MULTIMESH_INTERP_QUALITY_FAST = 0
        
        /** MultiMesh physics interpolation favors quality over speed. */
        static readonly MULTIMESH_INTERP_QUALITY_HIGH = 1
        
        /** Nearest-neighbor filter for light projectors (use for pixel art light projectors). No mipmaps are used for rendering, which means light projectors at a distance will look sharp but grainy. This has roughly the same performance cost as using mipmaps. */
        static readonly LIGHT_PROJECTOR_FILTER_NEAREST = 0
        
        /** Linear filter for light projectors (use for non-pixel art light projectors). No mipmaps are used for rendering, which means light projectors at a distance will look smooth but blurry. This has roughly the same performance cost as using mipmaps. */
        static readonly LIGHT_PROJECTOR_FILTER_LINEAR = 1
        
        /** Nearest-neighbor filter for light projectors (use for pixel art light projectors). Isotropic mipmaps are used for rendering, which means light projectors at a distance will look smooth but blurry. This has roughly the same performance cost as not using mipmaps. */
        static readonly LIGHT_PROJECTOR_FILTER_NEAREST_MIPMAPS = 2
        
        /** Linear filter for light projectors (use for non-pixel art light projectors). Isotropic mipmaps are used for rendering, which means light projectors at a distance will look smooth but blurry. This has roughly the same performance cost as not using mipmaps. */
        static readonly LIGHT_PROJECTOR_FILTER_LINEAR_MIPMAPS = 3
        
        /** Nearest-neighbor filter for light projectors (use for pixel art light projectors). Anisotropic mipmaps are used for rendering, which means light projectors at a distance will look smooth and sharp when viewed from oblique angles. This looks better compared to isotropic mipmaps, but is slower. The level of anisotropic filtering is defined by [member ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level]. */
        static readonly LIGHT_PROJECTOR_FILTER_NEAREST_MIPMAPS_ANISOTROPIC = 4
        
        /** Linear filter for light projectors (use for non-pixel art light projectors). Anisotropic mipmaps are used for rendering, which means light projectors at a distance will look smooth and sharp when viewed from oblique angles. This looks better compared to isotropic mipmaps, but is slower. The level of anisotropic filtering is defined by [member ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level]. */
        static readonly LIGHT_PROJECTOR_FILTER_LINEAR_MIPMAPS_ANISOTROPIC = 5
        
        /** Directional (sun/moon) light (see [DirectionalLight3D]). */
        static readonly LIGHT_DIRECTIONAL = 0
        
        /** Omni light (see [OmniLight3D]). */
        static readonly LIGHT_OMNI = 1
        
        /** Spot light (see [SpotLight3D]). */
        static readonly LIGHT_SPOT = 2
        
        /** The light's energy multiplier. */
        static readonly LIGHT_PARAM_ENERGY = 0
        
        /** The light's indirect energy multiplier (final indirect energy is [constant LIGHT_PARAM_ENERGY] * [constant LIGHT_PARAM_INDIRECT_ENERGY]). */
        static readonly LIGHT_PARAM_INDIRECT_ENERGY = 1
        
        /** The light's volumetric fog energy multiplier (final volumetric fog energy is [constant LIGHT_PARAM_ENERGY] * [constant LIGHT_PARAM_VOLUMETRIC_FOG_ENERGY]). */
        static readonly LIGHT_PARAM_VOLUMETRIC_FOG_ENERGY = 2
        
        /** The light's influence on specularity. */
        static readonly LIGHT_PARAM_SPECULAR = 3
        
        /** The light's range. */
        static readonly LIGHT_PARAM_RANGE = 4
        
        /** The size of the light when using spot light or omni light. The angular size of the light when using directional light. */
        static readonly LIGHT_PARAM_SIZE = 5
        
        /** The light's attenuation. */
        static readonly LIGHT_PARAM_ATTENUATION = 6
        
        /** The spotlight's angle. */
        static readonly LIGHT_PARAM_SPOT_ANGLE = 7
        
        /** The spotlight's attenuation. */
        static readonly LIGHT_PARAM_SPOT_ATTENUATION = 8
        
        /** The maximum distance for shadow splits. Increasing this value will make directional shadows visible from further away, at the cost of lower overall shadow detail and performance (since more objects need to be included in the directional shadow rendering). */
        static readonly LIGHT_PARAM_SHADOW_MAX_DISTANCE = 9
        
        /** Proportion of shadow atlas occupied by the first split. */
        static readonly LIGHT_PARAM_SHADOW_SPLIT_1_OFFSET = 10
        
        /** Proportion of shadow atlas occupied by the second split. */
        static readonly LIGHT_PARAM_SHADOW_SPLIT_2_OFFSET = 11
        
        /** Proportion of shadow atlas occupied by the third split. The fourth split occupies the rest. */
        static readonly LIGHT_PARAM_SHADOW_SPLIT_3_OFFSET = 12
        
        /** Proportion of shadow max distance where the shadow will start to fade out. */
        static readonly LIGHT_PARAM_SHADOW_FADE_START = 13
        
        /** Normal bias used to offset shadow lookup by object normal. Can be used to fix self-shadowing artifacts. */
        static readonly LIGHT_PARAM_SHADOW_NORMAL_BIAS = 14
        
        /** Bias for the shadow lookup to fix self-shadowing artifacts. */
        static readonly LIGHT_PARAM_SHADOW_BIAS = 15
        
        /** Sets the size of the directional shadow pancake. The pancake offsets the start of the shadow's camera frustum to provide a higher effective depth resolution for the shadow. However, a high pancake size can cause artifacts in the shadows of large objects that are close to the edge of the frustum. Reducing the pancake size can help. Setting the size to `0` turns off the pancaking effect. */
        static readonly LIGHT_PARAM_SHADOW_PANCAKE_SIZE = 16
        
        /** The light's shadow opacity. Values lower than `1.0` make the light appear through shadows. This can be used to fake global illumination at a low performance cost. */
        static readonly LIGHT_PARAM_SHADOW_OPACITY = 17
        
        /** Blurs the edges of the shadow. Can be used to hide pixel artifacts in low resolution shadow maps. A high value can make shadows appear grainy and can cause other unwanted artifacts. Try to keep as near default as possible. */
        static readonly LIGHT_PARAM_SHADOW_BLUR = 18
        static readonly LIGHT_PARAM_TRANSMITTANCE_BIAS = 19
        
        /** Constant representing the intensity of the light, measured in Lumens when dealing with a [SpotLight3D] or [OmniLight3D], or measured in Lux with a [DirectionalLight3D]. Only used when [member ProjectSettings.rendering/lights_and_shadows/use_physical_light_units] is `true`. */
        static readonly LIGHT_PARAM_INTENSITY = 20
        
        /** Represents the size of the [enum LightParam] enum. */
        static readonly LIGHT_PARAM_MAX = 21
        
        /** Light is ignored when baking. This is the fastest mode, but the light will be taken into account when baking global illumination. This mode should generally be used for dynamic lights that change quickly, as the effect of global illumination is less noticeable on those lights. */
        static readonly LIGHT_BAKE_DISABLED = 0
        
        /** Light is taken into account in static baking ([VoxelGI], [LightmapGI], SDFGI ([member Environment.sdfgi_enabled])). The light can be moved around or modified, but its global illumination will not update in real-time. This is suitable for subtle changes (such as flickering torches), but generally not large changes such as toggling a light on and off. */
        static readonly LIGHT_BAKE_STATIC = 1
        
        /** Light is taken into account in dynamic baking ([VoxelGI] and SDFGI ([member Environment.sdfgi_enabled]) only). The light can be moved around or modified with global illumination updating in real-time. The light's global illumination appearance will be slightly different compared to [constant LIGHT_BAKE_STATIC]. This has a greater performance cost compared to [constant LIGHT_BAKE_STATIC]. When using SDFGI, the update speed of dynamic lights is affected by [member ProjectSettings.rendering/global_illumination/sdfgi/frames_to_update_lights]. */
        static readonly LIGHT_BAKE_DYNAMIC = 2
        
        /** Use a dual paraboloid shadow map for omni lights. */
        static readonly LIGHT_OMNI_SHADOW_DUAL_PARABOLOID = 0
        
        /** Use a cubemap shadow map for omni lights. Slower but better quality than dual paraboloid. */
        static readonly LIGHT_OMNI_SHADOW_CUBE = 1
        
        /** Use orthogonal shadow projection for directional light. */
        static readonly LIGHT_DIRECTIONAL_SHADOW_ORTHOGONAL = 0
        
        /** Use 2 splits for shadow projection when using directional light. */
        static readonly LIGHT_DIRECTIONAL_SHADOW_PARALLEL_2_SPLITS = 1
        
        /** Use 4 splits for shadow projection when using directional light. */
        static readonly LIGHT_DIRECTIONAL_SHADOW_PARALLEL_4_SPLITS = 2
        
        /** Use DirectionalLight3D in both sky rendering and scene lighting. */
        static readonly LIGHT_DIRECTIONAL_SKY_MODE_LIGHT_AND_SKY = 0
        
        /** Only use DirectionalLight3D in scene lighting. */
        static readonly LIGHT_DIRECTIONAL_SKY_MODE_LIGHT_ONLY = 1
        
        /** Only use DirectionalLight3D in sky rendering. */
        static readonly LIGHT_DIRECTIONAL_SKY_MODE_SKY_ONLY = 2
        
        /** Lowest shadow filtering quality (fastest). Soft shadows are not available with this quality setting, which means the [member Light3D.shadow_blur] property is ignored if [member Light3D.light_size] and [member Light3D.light_angular_distance] is `0.0`.  
         *      
         *  **Note:** The variable shadow blur performed by [member Light3D.light_size] and [member Light3D.light_angular_distance] is still effective when using hard shadow filtering. In this case, [member Light3D.shadow_blur]  *is*  taken into account. However, the results will not be blurred, instead the blur amount is treated as a maximum radius for the penumbra.  
         */
        static readonly SHADOW_QUALITY_HARD = 0
        
        /** Very low shadow filtering quality (faster). When using this quality setting, [member Light3D.shadow_blur] is automatically multiplied by 0.75× to avoid introducing too much noise. This division only applies to lights whose [member Light3D.light_size] or [member Light3D.light_angular_distance] is `0.0`). */
        static readonly SHADOW_QUALITY_SOFT_VERY_LOW = 1
        
        /** Low shadow filtering quality (fast). */
        static readonly SHADOW_QUALITY_SOFT_LOW = 2
        
        /** Medium low shadow filtering quality (average). */
        static readonly SHADOW_QUALITY_SOFT_MEDIUM = 3
        
        /** High low shadow filtering quality (slow). When using this quality setting, [member Light3D.shadow_blur] is automatically multiplied by 1.5× to better make use of the high sample count. This increased blur also improves the stability of dynamic object shadows. This multiplier only applies to lights whose [member Light3D.light_size] or [member Light3D.light_angular_distance] is `0.0`). */
        static readonly SHADOW_QUALITY_SOFT_HIGH = 4
        
        /** Highest low shadow filtering quality (slowest). When using this quality setting, [member Light3D.shadow_blur] is automatically multiplied by 2× to better make use of the high sample count. This increased blur also improves the stability of dynamic object shadows. This multiplier only applies to lights whose [member Light3D.light_size] or [member Light3D.light_angular_distance] is `0.0`). */
        static readonly SHADOW_QUALITY_SOFT_ULTRA = 5
        
        /** Represents the size of the [enum ShadowQuality] enum. */
        static readonly SHADOW_QUALITY_MAX = 6
        
        /** Reflection probe will update reflections once and then stop. */
        static readonly REFLECTION_PROBE_UPDATE_ONCE = 0
        
        /** Reflection probe will update each frame. This mode is necessary to capture moving objects. */
        static readonly REFLECTION_PROBE_UPDATE_ALWAYS = 1
        
        /** Do not apply any ambient lighting inside the reflection probe's box defined by its size. */
        static readonly REFLECTION_PROBE_AMBIENT_DISABLED = 0
        
        /** Apply automatically-sourced environment lighting inside the reflection probe's box defined by its size. */
        static readonly REFLECTION_PROBE_AMBIENT_ENVIRONMENT = 1
        
        /** Apply custom ambient lighting inside the reflection probe's box defined by its size. See [method reflection_probe_set_ambient_color] and [method reflection_probe_set_ambient_energy]. */
        static readonly REFLECTION_PROBE_AMBIENT_COLOR = 2
        
        /** Albedo texture slot in a decal ([member Decal.texture_albedo]). */
        static readonly DECAL_TEXTURE_ALBEDO = 0
        
        /** Normal map texture slot in a decal ([member Decal.texture_normal]). */
        static readonly DECAL_TEXTURE_NORMAL = 1
        
        /** Occlusion/Roughness/Metallic texture slot in a decal ([member Decal.texture_orm]). */
        static readonly DECAL_TEXTURE_ORM = 2
        
        /** Emission texture slot in a decal ([member Decal.texture_emission]). */
        static readonly DECAL_TEXTURE_EMISSION = 3
        
        /** Represents the size of the [enum DecalTexture] enum. */
        static readonly DECAL_TEXTURE_MAX = 4
        
        /** Nearest-neighbor filter for decals (use for pixel art decals). No mipmaps are used for rendering, which means decals at a distance will look sharp but grainy. This has roughly the same performance cost as using mipmaps. */
        static readonly DECAL_FILTER_NEAREST = 0
        
        /** Linear filter for decals (use for non-pixel art decals). No mipmaps are used for rendering, which means decals at a distance will look smooth but blurry. This has roughly the same performance cost as using mipmaps. */
        static readonly DECAL_FILTER_LINEAR = 1
        
        /** Nearest-neighbor filter for decals (use for pixel art decals). Isotropic mipmaps are used for rendering, which means decals at a distance will look smooth but blurry. This has roughly the same performance cost as not using mipmaps. */
        static readonly DECAL_FILTER_NEAREST_MIPMAPS = 2
        
        /** Linear filter for decals (use for non-pixel art decals). Isotropic mipmaps are used for rendering, which means decals at a distance will look smooth but blurry. This has roughly the same performance cost as not using mipmaps. */
        static readonly DECAL_FILTER_LINEAR_MIPMAPS = 3
        
        /** Nearest-neighbor filter for decals (use for pixel art decals). Anisotropic mipmaps are used for rendering, which means decals at a distance will look smooth and sharp when viewed from oblique angles. This looks better compared to isotropic mipmaps, but is slower. The level of anisotropic filtering is defined by [member ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level]. */
        static readonly DECAL_FILTER_NEAREST_MIPMAPS_ANISOTROPIC = 4
        
        /** Linear filter for decals (use for non-pixel art decals). Anisotropic mipmaps are used for rendering, which means decals at a distance will look smooth and sharp when viewed from oblique angles. This looks better compared to isotropic mipmaps, but is slower. The level of anisotropic filtering is defined by [member ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level]. */
        static readonly DECAL_FILTER_LINEAR_MIPMAPS_ANISOTROPIC = 5
        
        /** Low [VoxelGI] rendering quality using 4 cones. */
        static readonly VOXEL_GI_QUALITY_LOW = 0
        
        /** High [VoxelGI] rendering quality using 6 cones. */
        static readonly VOXEL_GI_QUALITY_HIGH = 1
        
        /** 2D particles. */
        static readonly PARTICLES_MODE_2D = 0
        
        /** 3D particles. */
        static readonly PARTICLES_MODE_3D = 1
        static readonly PARTICLES_TRANSFORM_ALIGN_DISABLED = 0
        static readonly PARTICLES_TRANSFORM_ALIGN_Z_BILLBOARD = 1
        static readonly PARTICLES_TRANSFORM_ALIGN_Y_TO_VELOCITY = 2
        static readonly PARTICLES_TRANSFORM_ALIGN_Z_BILLBOARD_Y_TO_VELOCITY = 3
        static readonly PARTICLES_EMIT_FLAG_POSITION = 1
        static readonly PARTICLES_EMIT_FLAG_ROTATION_SCALE = 2
        static readonly PARTICLES_EMIT_FLAG_VELOCITY = 4
        static readonly PARTICLES_EMIT_FLAG_COLOR = 8
        static readonly PARTICLES_EMIT_FLAG_CUSTOM = 16
        
        /** Draw particles in the order that they appear in the particles array. */
        static readonly PARTICLES_DRAW_ORDER_INDEX = 0
        
        /** Sort particles based on their lifetime. In other words, the particle with the highest lifetime is drawn at the front. */
        static readonly PARTICLES_DRAW_ORDER_LIFETIME = 1
        
        /** Sort particles based on the inverse of their lifetime. In other words, the particle with the lowest lifetime is drawn at the front. */
        static readonly PARTICLES_DRAW_ORDER_REVERSE_LIFETIME = 2
        
        /** Sort particles based on their distance to the camera. */
        static readonly PARTICLES_DRAW_ORDER_VIEW_DEPTH = 3
        static readonly PARTICLES_COLLISION_TYPE_SPHERE_ATTRACT = 0
        static readonly PARTICLES_COLLISION_TYPE_BOX_ATTRACT = 1
        static readonly PARTICLES_COLLISION_TYPE_VECTOR_FIELD_ATTRACT = 2
        static readonly PARTICLES_COLLISION_TYPE_SPHERE_COLLIDE = 3
        static readonly PARTICLES_COLLISION_TYPE_BOX_COLLIDE = 4
        static readonly PARTICLES_COLLISION_TYPE_SDF_COLLIDE = 5
        static readonly PARTICLES_COLLISION_TYPE_HEIGHTFIELD_COLLIDE = 6
        static readonly PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_256 = 0
        static readonly PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_512 = 1
        static readonly PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_1024 = 2
        static readonly PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_2048 = 3
        static readonly PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_4096 = 4
        static readonly PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_8192 = 5
        
        /** Represents the size of the [enum ParticlesCollisionHeightfieldResolution] enum. */
        static readonly PARTICLES_COLLISION_HEIGHTFIELD_RESOLUTION_MAX = 6
        
        /** [FogVolume] will be shaped like an ellipsoid (stretched sphere). */
        static readonly FOG_VOLUME_SHAPE_ELLIPSOID = 0
        
        /** [FogVolume] will be shaped like a cone pointing upwards (in local coordinates). The cone's angle is set automatically to fill the size. The cone will be adjusted to fit within the size. Rotate the [FogVolume] node to reorient the cone. Non-uniform scaling via size is not supported (scale the [FogVolume] node instead). */
        static readonly FOG_VOLUME_SHAPE_CONE = 1
        
        /** [FogVolume] will be shaped like an upright cylinder (in local coordinates). Rotate the [FogVolume] node to reorient the cylinder. The cylinder will be adjusted to fit within the size. Non-uniform scaling via size is not supported (scale the [FogVolume] node instead). */
        static readonly FOG_VOLUME_SHAPE_CYLINDER = 2
        
        /** [FogVolume] will be shaped like a box. */
        static readonly FOG_VOLUME_SHAPE_BOX = 3
        
        /** [FogVolume] will have no shape, will cover the whole world and will not be culled. */
        static readonly FOG_VOLUME_SHAPE_WORLD = 4
        
        /** Represents the size of the [enum FogVolumeShape] enum. */
        static readonly FOG_VOLUME_SHAPE_MAX = 5
        
        /** Use bilinear scaling for the viewport's 3D buffer. The amount of scaling can be set using [member Viewport.scaling_3d_scale]. Values less than `1.0` will result in undersampling while values greater than `1.0` will result in supersampling. A value of `1.0` disables scaling. */
        static readonly VIEWPORT_SCALING_3D_MODE_BILINEAR = 0
        
        /** Use AMD FidelityFX Super Resolution 1.0 upscaling for the viewport's 3D buffer. The amount of scaling can be set using [member Viewport.scaling_3d_scale]. Values less than `1.0` will result in the viewport being upscaled using FSR. Values greater than `1.0` are not supported and bilinear downsampling will be used instead. A value of `1.0` disables scaling. */
        static readonly VIEWPORT_SCALING_3D_MODE_FSR = 1
        
        /** Use AMD FidelityFX Super Resolution 2.2 upscaling for the viewport's 3D buffer. The amount of scaling can be set using [member Viewport.scaling_3d_scale]. Values less than `1.0` will result in the viewport being upscaled using FSR2. Values greater than `1.0` are not supported and bilinear downsampling will be used instead. A value of `1.0` will use FSR2 at native resolution as a TAA solution. */
        static readonly VIEWPORT_SCALING_3D_MODE_FSR2 = 2
        
        /** Use MetalFX spatial upscaling for the viewport's 3D buffer. The amount of scaling can be set using [member Viewport.scaling_3d_scale]. Values less than `1.0` will result in the viewport being upscaled using MetalFX. Values greater than `1.0` are not supported and bilinear downsampling will be used instead. A value of `1.0` disables scaling.  
         *      
         *  **Note:** Only supported when the Metal rendering driver is in use, which limits this scaling mode to macOS and iOS.  
         */
        static readonly VIEWPORT_SCALING_3D_MODE_METALFX_SPATIAL = 3
        
        /** Use MetalFX temporal upscaling for the viewport's 3D buffer. The amount of scaling can be set using [member Viewport.scaling_3d_scale]. Values less than `1.0` will result in the viewport being upscaled using MetalFX. Values greater than `1.0` are not supported and bilinear downsampling will be used instead. A value of `1.0` will use MetalFX at native resolution as a TAA solution.  
         *      
         *  **Note:** Only supported when the Metal rendering driver is in use, which limits this scaling mode to macOS and iOS.  
         */
        static readonly VIEWPORT_SCALING_3D_MODE_METALFX_TEMPORAL = 4
        
        /** Represents the size of the [enum ViewportScaling3DMode] enum. */
        static readonly VIEWPORT_SCALING_3D_MODE_MAX = 5
        
        /** Do not update the viewport's render target. */
        static readonly VIEWPORT_UPDATE_DISABLED = 0
        
        /** Update the viewport's render target once, then switch to [constant VIEWPORT_UPDATE_DISABLED]. */
        static readonly VIEWPORT_UPDATE_ONCE = 1
        
        /** Update the viewport's render target only when it is visible. This is the default value. */
        static readonly VIEWPORT_UPDATE_WHEN_VISIBLE = 2
        
        /** Update the viewport's render target only when its parent is visible. */
        static readonly VIEWPORT_UPDATE_WHEN_PARENT_VISIBLE = 3
        
        /** Always update the viewport's render target. */
        static readonly VIEWPORT_UPDATE_ALWAYS = 4
        
        /** Always clear the viewport's render target before drawing. */
        static readonly VIEWPORT_CLEAR_ALWAYS = 0
        
        /** Never clear the viewport's render target. */
        static readonly VIEWPORT_CLEAR_NEVER = 1
        
        /** Clear the viewport's render target on the next frame, then switch to [constant VIEWPORT_CLEAR_NEVER]. */
        static readonly VIEWPORT_CLEAR_ONLY_NEXT_FRAME = 2
        
        /** Disable rendering of 3D environment over 2D canvas. */
        static readonly VIEWPORT_ENVIRONMENT_DISABLED = 0
        
        /** Enable rendering of 3D environment over 2D canvas. */
        static readonly VIEWPORT_ENVIRONMENT_ENABLED = 1
        
        /** Inherit enable/disable value from parent. If the topmost parent is also set to [constant VIEWPORT_ENVIRONMENT_INHERIT], then this has the same behavior as [constant VIEWPORT_ENVIRONMENT_ENABLED]. */
        static readonly VIEWPORT_ENVIRONMENT_INHERIT = 2
        
        /** Represents the size of the [enum ViewportEnvironmentMode] enum. */
        static readonly VIEWPORT_ENVIRONMENT_MAX = 3
        
        /** Do not oversize the 2D signed distance field. Occluders may disappear when touching the viewport's edges, and [GPUParticles3D] collision may stop working earlier than intended. This has the lowest GPU requirements. */
        static readonly VIEWPORT_SDF_OVERSIZE_100_PERCENT = 0
        
        /** 2D signed distance field covers 20% of the viewport's size outside the viewport on each side (top, right, bottom, left). */
        static readonly VIEWPORT_SDF_OVERSIZE_120_PERCENT = 1
        
        /** 2D signed distance field covers 50% of the viewport's size outside the viewport on each side (top, right, bottom, left). */
        static readonly VIEWPORT_SDF_OVERSIZE_150_PERCENT = 2
        
        /** 2D signed distance field covers 100% of the viewport's size outside the viewport on each side (top, right, bottom, left). This has the highest GPU requirements. */
        static readonly VIEWPORT_SDF_OVERSIZE_200_PERCENT = 3
        
        /** Represents the size of the [enum ViewportSDFOversize] enum. */
        static readonly VIEWPORT_SDF_OVERSIZE_MAX = 4
        
        /** Full resolution 2D signed distance field scale. This has the highest GPU requirements. */
        static readonly VIEWPORT_SDF_SCALE_100_PERCENT = 0
        
        /** Half resolution 2D signed distance field scale on each axis (25% of the viewport pixel count). */
        static readonly VIEWPORT_SDF_SCALE_50_PERCENT = 1
        
        /** Quarter resolution 2D signed distance field scale on each axis (6.25% of the viewport pixel count). This has the lowest GPU requirements. */
        static readonly VIEWPORT_SDF_SCALE_25_PERCENT = 2
        
        /** Represents the size of the [enum ViewportSDFScale] enum. */
        static readonly VIEWPORT_SDF_SCALE_MAX = 3
        
        /** Multisample antialiasing for 3D is disabled. This is the default value, and also the fastest setting. */
        static readonly VIEWPORT_MSAA_DISABLED = 0
        
        /** Multisample antialiasing uses 2 samples per pixel for 3D. This has a moderate impact on performance. */
        static readonly VIEWPORT_MSAA_2X = 1
        
        /** Multisample antialiasing uses 4 samples per pixel for 3D. This has a high impact on performance. */
        static readonly VIEWPORT_MSAA_4X = 2
        
        /** Multisample antialiasing uses 8 samples per pixel for 3D. This has a very high impact on performance. Likely unsupported on low-end and older hardware. */
        static readonly VIEWPORT_MSAA_8X = 3
        
        /** Represents the size of the [enum ViewportMSAA] enum. */
        static readonly VIEWPORT_MSAA_MAX = 4
        
        /** Anisotropic filtering is disabled. */
        static readonly VIEWPORT_ANISOTROPY_DISABLED = 0
        
        /** Use 2× anisotropic filtering. */
        static readonly VIEWPORT_ANISOTROPY_2X = 1
        
        /** Use 4× anisotropic filtering. This is the default value. */
        static readonly VIEWPORT_ANISOTROPY_4X = 2
        
        /** Use 8× anisotropic filtering. */
        static readonly VIEWPORT_ANISOTROPY_8X = 3
        
        /** Use 16× anisotropic filtering. */
        static readonly VIEWPORT_ANISOTROPY_16X = 4
        
        /** Represents the size of the [enum ViewportAnisotropicFiltering] enum. */
        static readonly VIEWPORT_ANISOTROPY_MAX = 5
        
        /** Do not perform any antialiasing in the full screen post-process. */
        static readonly VIEWPORT_SCREEN_SPACE_AA_DISABLED = 0
        
        /** Use fast approximate antialiasing. FXAA is a popular screen-space antialiasing method, which is fast but will make the image look blurry, especially at lower resolutions. It can still work relatively well at large resolutions such as 1440p and 4K. */
        static readonly VIEWPORT_SCREEN_SPACE_AA_FXAA = 1
        
        /** Represents the size of the [enum ViewportScreenSpaceAA] enum. */
        static readonly VIEWPORT_SCREEN_SPACE_AA_MAX = 2
        
        /** Low occlusion culling BVH build quality (as defined by Embree). Results in the lowest CPU usage, but least effective culling. */
        static readonly VIEWPORT_OCCLUSION_BUILD_QUALITY_LOW = 0
        
        /** Medium occlusion culling BVH build quality (as defined by Embree). */
        static readonly VIEWPORT_OCCLUSION_BUILD_QUALITY_MEDIUM = 1
        
        /** High occlusion culling BVH build quality (as defined by Embree). Results in the highest CPU usage, but most effective culling. */
        static readonly VIEWPORT_OCCLUSION_BUILD_QUALITY_HIGH = 2
        
        /** Number of objects drawn in a single frame. */
        static readonly VIEWPORT_RENDER_INFO_OBJECTS_IN_FRAME = 0
        
        /** Number of points, lines, or triangles drawn in a single frame. */
        static readonly VIEWPORT_RENDER_INFO_PRIMITIVES_IN_FRAME = 1
        
        /** Number of draw calls during this frame. */
        static readonly VIEWPORT_RENDER_INFO_DRAW_CALLS_IN_FRAME = 2
        
        /** Represents the size of the [enum ViewportRenderInfo] enum. */
        static readonly VIEWPORT_RENDER_INFO_MAX = 3
        
        /** Visible render pass (excluding shadows). */
        static readonly VIEWPORT_RENDER_INFO_TYPE_VISIBLE = 0
        
        /** Shadow render pass. Objects will be rendered several times depending on the number of amounts of lights with shadows and the number of directional shadow splits. */
        static readonly VIEWPORT_RENDER_INFO_TYPE_SHADOW = 1
        
        /** Canvas item rendering. This includes all 2D rendering. */
        static readonly VIEWPORT_RENDER_INFO_TYPE_CANVAS = 2
        
        /** Represents the size of the [enum ViewportRenderInfoType] enum. */
        static readonly VIEWPORT_RENDER_INFO_TYPE_MAX = 3
        
        /** Debug draw is disabled. Default setting. */
        static readonly VIEWPORT_DEBUG_DRAW_DISABLED = 0
        
        /** Objects are displayed without light information. */
        static readonly VIEWPORT_DEBUG_DRAW_UNSHADED = 1
        
        /** Objects are displayed with only light information.  
         *      
         *  **Note:** When using this debug draw mode, custom shaders are ignored since all materials in the scene temporarily use a debug material. This means the result from custom shader functions (such as vertex displacement) won't be visible anymore when using this debug draw mode.  
         */
        static readonly VIEWPORT_DEBUG_DRAW_LIGHTING = 2
        
        /** Objects are displayed semi-transparent with additive blending so you can see where they are drawing over top of one another. A higher overdraw (represented by brighter colors) means you are wasting performance on drawing pixels that are being hidden behind others.  
         *      
         *  **Note:** When using this debug draw mode, custom shaders are ignored since all materials in the scene temporarily use a debug material. This means the result from custom shader functions (such as vertex displacement) won't be visible anymore when using this debug draw mode.  
         */
        static readonly VIEWPORT_DEBUG_DRAW_OVERDRAW = 3
        
        /** Debug draw draws objects in wireframe.  
         *      
         *  **Note:** [method set_debug_generate_wireframes] must be called before loading any meshes for wireframes to be visible when using the Compatibility renderer.  
         */
        static readonly VIEWPORT_DEBUG_DRAW_WIREFRAME = 4
        
        /** Normal buffer is drawn instead of regular scene so you can see the per-pixel normals that will be used by post-processing effects. */
        static readonly VIEWPORT_DEBUG_DRAW_NORMAL_BUFFER = 5
        
        /** Objects are displayed with only the albedo value from [VoxelGI]s. Requires at least one visible [VoxelGI] node that has been baked to have a visible effect.  
         *      
         *  **Note:** Only supported when using the Forward+ rendering method.  
         */
        static readonly VIEWPORT_DEBUG_DRAW_VOXEL_GI_ALBEDO = 6
        
        /** Objects are displayed with only the lighting value from [VoxelGI]s. Requires at least one visible [VoxelGI] node that has been baked to have a visible effect.  
         *      
         *  **Note:** Only supported when using the Forward+ rendering method.  
         */
        static readonly VIEWPORT_DEBUG_DRAW_VOXEL_GI_LIGHTING = 7
        
        /** Objects are displayed with only the emission color from [VoxelGI]s. Requires at least one visible [VoxelGI] node that has been baked to have a visible effect.  
         *      
         *  **Note:** Only supported when using the Forward+ rendering method.  
         */
        static readonly VIEWPORT_DEBUG_DRAW_VOXEL_GI_EMISSION = 8
        
        /** Draws the shadow atlas that stores shadows from [OmniLight3D]s and [SpotLight3D]s in the upper left quadrant of the [Viewport]. */
        static readonly VIEWPORT_DEBUG_DRAW_SHADOW_ATLAS = 9
        
        /** Draws the shadow atlas that stores shadows from [DirectionalLight3D]s in the upper left quadrant of the [Viewport].  
         *  The slice of the camera frustum related to the shadow map cascade is superimposed to visualize coverage. The color of each slice matches the colors used for [constant VIEWPORT_DEBUG_DRAW_PSSM_SPLITS]. When shadow cascades are blended the overlap is taken into account when drawing the frustum slices.  
         *  The last cascade shows all frustum slices to illustrate the coverage of all slices.  
         */
        static readonly VIEWPORT_DEBUG_DRAW_DIRECTIONAL_SHADOW_ATLAS = 10
        
        /** Draws the estimated scene luminance. This is a 1×1 texture that is generated when autoexposure is enabled to control the scene's exposure.  
         *      
         *  **Note:** Only supported when using the Forward+ or Mobile rendering methods.  
         */
        static readonly VIEWPORT_DEBUG_DRAW_SCENE_LUMINANCE = 11
        
        /** Draws the screen space ambient occlusion texture instead of the scene so that you can clearly see how it is affecting objects. In order for this display mode to work, you must have [member Environment.ssao_enabled] set in your [WorldEnvironment].  
         *      
         *  **Note:** Only supported when using the Forward+ rendering method.  
         */
        static readonly VIEWPORT_DEBUG_DRAW_SSAO = 12
        
        /** Draws the screen space indirect lighting texture instead of the scene so that you can clearly see how it is affecting objects. In order for this display mode to work, you must have [member Environment.ssil_enabled] set in your [WorldEnvironment].  
         *      
         *  **Note:** Only supported when using the Forward+ rendering method.  
         */
        static readonly VIEWPORT_DEBUG_DRAW_SSIL = 13
        
        /** Colors each PSSM split for the [DirectionalLight3D]s in the scene a different color so you can see where the splits are. In order (from closest to furthest from the camera), they are colored red, green, blue, and yellow.  
         *      
         *  **Note:** When using this debug draw mode, custom shaders are ignored since all materials in the scene temporarily use a debug material. This means the result from custom shader functions (such as vertex displacement) won't be visible anymore when using this debug draw mode.  
         *      
         *  **Note:** Only supported when using the Forward+ or Mobile rendering methods.  
         */
        static readonly VIEWPORT_DEBUG_DRAW_PSSM_SPLITS = 14
        
        /** Draws the decal atlas that stores decal textures from [Decal]s.  
         *      
         *  **Note:** Only supported when using the Forward+ or Mobile rendering methods.  
         */
        static readonly VIEWPORT_DEBUG_DRAW_DECAL_ATLAS = 15
        
        /** Draws SDFGI cascade data. This is the data structure that is used to bounce lighting against and create reflections.  
         *      
         *  **Note:** Only supported when using the Forward+ rendering method.  
         */
        static readonly VIEWPORT_DEBUG_DRAW_SDFGI = 16
        
        /** Draws SDFGI probe data. This is the data structure that is used to give indirect lighting dynamic objects moving within the scene.  
         *      
         *  **Note:** Only supported when using the Forward+ rendering method.  
         */
        static readonly VIEWPORT_DEBUG_DRAW_SDFGI_PROBES = 17
        
        /** Draws the global illumination buffer from [VoxelGI] or SDFGI. Requires [VoxelGI] (at least one visible baked VoxelGI node) or SDFGI ([member Environment.sdfgi_enabled]) to be enabled to have a visible effect.  
         *      
         *  **Note:** Only supported when using the Forward+ rendering method.  
         */
        static readonly VIEWPORT_DEBUG_DRAW_GI_BUFFER = 18
        
        /** Disable mesh LOD. All meshes are drawn with full detail, which can be used to compare performance. */
        static readonly VIEWPORT_DEBUG_DRAW_DISABLE_LOD = 19
        
        /** Draws the [OmniLight3D] cluster. Clustering determines where lights are positioned in screen-space, which allows the engine to only process these portions of the screen for lighting.  
         *      
         *  **Note:** Only supported when using the Forward+ rendering method.  
         */
        static readonly VIEWPORT_DEBUG_DRAW_CLUSTER_OMNI_LIGHTS = 20
        
        /** Draws the [SpotLight3D] cluster. Clustering determines where lights are positioned in screen-space, which allows the engine to only process these portions of the screen for lighting.  
         *      
         *  **Note:** Only supported when using the Forward+ rendering method.  
         */
        static readonly VIEWPORT_DEBUG_DRAW_CLUSTER_SPOT_LIGHTS = 21
        
        /** Draws the [Decal] cluster. Clustering determines where decals are positioned in screen-space, which allows the engine to only process these portions of the screen for decals.  
         *      
         *  **Note:** Only supported when using the Forward+ rendering method.  
         */
        static readonly VIEWPORT_DEBUG_DRAW_CLUSTER_DECALS = 22
        
        /** Draws the [ReflectionProbe] cluster. Clustering determines where reflection probes are positioned in screen-space, which allows the engine to only process these portions of the screen for reflection probes.  
         *      
         *  **Note:** Only supported when using the Forward+ rendering method.  
         */
        static readonly VIEWPORT_DEBUG_DRAW_CLUSTER_REFLECTION_PROBES = 23
        
        /** Draws the occlusion culling buffer. This low-resolution occlusion culling buffer is rasterized on the CPU and is used to check whether instances are occluded by other objects.  
         *      
         *  **Note:** Only supported when using the Forward+ or Mobile rendering methods.  
         */
        static readonly VIEWPORT_DEBUG_DRAW_OCCLUDERS = 24
        
        /** Draws the motion vectors buffer. This is used by temporal antialiasing to correct for motion that occurs during gameplay.  
         *      
         *  **Note:** Only supported when using the Forward+ rendering method.  
         */
        static readonly VIEWPORT_DEBUG_DRAW_MOTION_VECTORS = 25
        
        /** Internal buffer is drawn instead of regular scene so you can see the per-pixel output that will be used by post-processing effects.  
         *      
         *  **Note:** Only supported when using the Forward+ or Mobile rendering methods.  
         */
        static readonly VIEWPORT_DEBUG_DRAW_INTERNAL_BUFFER = 26
        
        /** Variable rate shading is disabled. */
        static readonly VIEWPORT_VRS_DISABLED = 0
        
        /** Variable rate shading uses a texture. Note, for stereoscopic use a texture atlas with a texture for each view. */
        static readonly VIEWPORT_VRS_TEXTURE = 1
        
        /** Variable rate shading texture is supplied by the primary [XRInterface]. Note that this may override the update mode. */
        static readonly VIEWPORT_VRS_XR = 2
        
        /** Represents the size of the [enum ViewportVRSMode] enum. */
        static readonly VIEWPORT_VRS_MAX = 3
        
        /** The input texture for variable rate shading will not be processed. */
        static readonly VIEWPORT_VRS_UPDATE_DISABLED = 0
        
        /** The input texture for variable rate shading will be processed once. */
        static readonly VIEWPORT_VRS_UPDATE_ONCE = 1
        
        /** The input texture for variable rate shading will be processed each frame. */
        static readonly VIEWPORT_VRS_UPDATE_ALWAYS = 2
        
        /** Represents the size of the [enum ViewportVRSUpdateMode] enum. */
        static readonly VIEWPORT_VRS_UPDATE_MAX = 3
        
        /** Automatically selects the appropriate process mode based on your sky shader. If your shader uses `TIME` or `POSITION`, this will use [constant SKY_MODE_REALTIME]. If your shader uses any of the `LIGHT_*` variables or any custom uniforms, this uses [constant SKY_MODE_INCREMENTAL]. Otherwise, this defaults to [constant SKY_MODE_QUALITY]. */
        static readonly SKY_MODE_AUTOMATIC = 0
        
        /** Uses high quality importance sampling to process the radiance map. In general, this results in much higher quality than [constant SKY_MODE_REALTIME] but takes much longer to generate. This should not be used if you plan on changing the sky at runtime. If you are finding that the reflection is not blurry enough and is showing sparkles or fireflies, try increasing [member ProjectSettings.rendering/reflections/sky_reflections/ggx_samples]. */
        static readonly SKY_MODE_QUALITY = 1
        
        /** Uses the same high quality importance sampling to process the radiance map as [constant SKY_MODE_QUALITY], but updates over several frames. The number of frames is determined by [member ProjectSettings.rendering/reflections/sky_reflections/roughness_layers]. Use this when you need highest quality radiance maps, but have a sky that updates slowly. */
        static readonly SKY_MODE_INCREMENTAL = 2
        
        /** Uses the fast filtering algorithm to process the radiance map. In general this results in lower quality, but substantially faster run times. If you need better quality, but still need to update the sky every frame, consider turning on [member ProjectSettings.rendering/reflections/sky_reflections/fast_filter_high_quality].  
         *      
         *  **Note:** The fast filtering algorithm is limited to 256×256 cubemaps, so [method sky_set_radiance_size] must be set to `256`. Otherwise, a warning is printed and the overridden radiance size is ignored.  
         */
        static readonly SKY_MODE_REALTIME = 3
        
        /** The rendering effect requires the color buffer to be resolved if MSAA is enabled. */
        static readonly COMPOSITOR_EFFECT_FLAG_ACCESS_RESOLVED_COLOR = 1
        
        /** The rendering effect requires the depth buffer to be resolved if MSAA is enabled. */
        static readonly COMPOSITOR_EFFECT_FLAG_ACCESS_RESOLVED_DEPTH = 2
        
        /** The rendering effect requires motion vectors to be produced. */
        static readonly COMPOSITOR_EFFECT_FLAG_NEEDS_MOTION_VECTORS = 4
        
        /** The rendering effect requires normals and roughness g-buffer to be produced (Forward+ only). */
        static readonly COMPOSITOR_EFFECT_FLAG_NEEDS_ROUGHNESS = 8
        
        /** The rendering effect requires specular data to be separated out (Forward+ only). */
        static readonly COMPOSITOR_EFFECT_FLAG_NEEDS_SEPARATE_SPECULAR = 16
        
        /** The callback is called before our opaque rendering pass, but after depth prepass (if applicable). */
        static readonly COMPOSITOR_EFFECT_CALLBACK_TYPE_PRE_OPAQUE = 0
        
        /** The callback is called after our opaque rendering pass, but before our sky is rendered. */
        static readonly COMPOSITOR_EFFECT_CALLBACK_TYPE_POST_OPAQUE = 1
        
        /** The callback is called after our sky is rendered, but before our back buffers are created (and if enabled, before subsurface scattering and/or screen space reflections). */
        static readonly COMPOSITOR_EFFECT_CALLBACK_TYPE_POST_SKY = 2
        
        /** The callback is called before our transparent rendering pass, but after our sky is rendered and we've created our back buffers. */
        static readonly COMPOSITOR_EFFECT_CALLBACK_TYPE_PRE_TRANSPARENT = 3
        
        /** The callback is called after our transparent rendering pass, but before any built-in post-processing effects and output to our render target. */
        static readonly COMPOSITOR_EFFECT_CALLBACK_TYPE_POST_TRANSPARENT = 4
        static readonly COMPOSITOR_EFFECT_CALLBACK_TYPE_ANY = -1
        
        /** Use the clear color as background. */
        static readonly ENV_BG_CLEAR_COLOR = 0
        
        /** Use a specified color as the background. */
        static readonly ENV_BG_COLOR = 1
        
        /** Use a sky resource for the background. */
        static readonly ENV_BG_SKY = 2
        
        /** Use a specified canvas layer as the background. This can be useful for instantiating a 2D scene in a 3D world. */
        static readonly ENV_BG_CANVAS = 3
        
        /** Do not clear the background, use whatever was rendered last frame as the background. */
        static readonly ENV_BG_KEEP = 4
        
        /** Displays a camera feed in the background. */
        static readonly ENV_BG_CAMERA_FEED = 5
        
        /** Represents the size of the [enum EnvironmentBG] enum. */
        static readonly ENV_BG_MAX = 6
        
        /** Gather ambient light from whichever source is specified as the background. */
        static readonly ENV_AMBIENT_SOURCE_BG = 0
        
        /** Disable ambient light. */
        static readonly ENV_AMBIENT_SOURCE_DISABLED = 1
        
        /** Specify a specific [Color] for ambient light. */
        static readonly ENV_AMBIENT_SOURCE_COLOR = 2
        
        /** Gather ambient light from the [Sky] regardless of what the background is. */
        static readonly ENV_AMBIENT_SOURCE_SKY = 3
        
        /** Use the background for reflections. */
        static readonly ENV_REFLECTION_SOURCE_BG = 0
        
        /** Disable reflections. */
        static readonly ENV_REFLECTION_SOURCE_DISABLED = 1
        
        /** Use the [Sky] for reflections regardless of what the background is. */
        static readonly ENV_REFLECTION_SOURCE_SKY = 2
        
        /** Additive glow blending mode. Mostly used for particles, glows (bloom), lens flare, bright sources. */
        static readonly ENV_GLOW_BLEND_MODE_ADDITIVE = 0
        
        /** Screen glow blending mode. Increases brightness, used frequently with bloom. */
        static readonly ENV_GLOW_BLEND_MODE_SCREEN = 1
        
        /** Soft light glow blending mode. Modifies contrast, exposes shadows and highlights (vivid bloom). */
        static readonly ENV_GLOW_BLEND_MODE_SOFTLIGHT = 2
        
        /** Replace glow blending mode. Replaces all pixels' color by the glow value. This can be used to simulate a full-screen blur effect by tweaking the glow parameters to match the original image's brightness. */
        static readonly ENV_GLOW_BLEND_MODE_REPLACE = 3
        
        /** Mixes the glow with the underlying color to avoid increasing brightness as much while still maintaining a glow effect. */
        static readonly ENV_GLOW_BLEND_MODE_MIX = 4
        
        /** Use a physically-based fog model defined primarily by fog density. */
        static readonly ENV_FOG_MODE_EXPONENTIAL = 0
        
        /** Use a simple fog model defined by start and end positions and a custom curve. While not physically accurate, this model can be useful when you need more artistic control. */
        static readonly ENV_FOG_MODE_DEPTH = 1
        
        /** Does not modify color data, resulting in a linear tonemapping curve which unnaturally clips bright values, causing bright lighting to look blown out. The simplest and fastest tonemapper. */
        static readonly ENV_TONE_MAPPER_LINEAR = 0
        
        /** A simple tonemapping curve that rolls off bright values to prevent clipping. This results in an image that can appear dull and low contrast. Slower than [constant ENV_TONE_MAPPER_LINEAR].  
         *      
         *  **Note:** When [member Environment.tonemap_white] is left at the default value of `1.0`, [constant ENV_TONE_MAPPER_REINHARD] produces an identical image to [constant ENV_TONE_MAPPER_LINEAR].  
         */
        static readonly ENV_TONE_MAPPER_REINHARD = 1
        
        /** Uses a film-like tonemapping curve to prevent clipping of bright values and provide better contrast than [constant ENV_TONE_MAPPER_REINHARD]. Slightly slower than [constant ENV_TONE_MAPPER_REINHARD]. */
        static readonly ENV_TONE_MAPPER_FILMIC = 2
        
        /** Uses a high-contrast film-like tonemapping curve and desaturates bright values for a more realistic appearance. Slightly slower than [constant ENV_TONE_MAPPER_FILMIC].  
         *      
         *  **Note:** This tonemapping operator is called "ACES Fitted" in Godot 3.x.  
         */
        static readonly ENV_TONE_MAPPER_ACES = 3
        
        /** Uses a film-like tonemapping curve and desaturates bright values for a more realistic appearance. Better than other tonemappers at maintaining the hue of colors as they become brighter. The slowest tonemapping option.  
         *      
         *  **Note:** [member Environment.tonemap_white] is fixed at a value of `16.29`, which makes [constant ENV_TONE_MAPPER_AGX] unsuitable for use with the Mobile rendering method.  
         */
        static readonly ENV_TONE_MAPPER_AGX = 4
        
        /** Lowest quality of roughness filter for screen-space reflections. Rough materials will not have blurrier screen-space reflections compared to smooth (non-rough) materials. This is the fastest option. */
        static readonly ENV_SSR_ROUGHNESS_QUALITY_DISABLED = 0
        
        /** Low quality of roughness filter for screen-space reflections. */
        static readonly ENV_SSR_ROUGHNESS_QUALITY_LOW = 1
        
        /** Medium quality of roughness filter for screen-space reflections. */
        static readonly ENV_SSR_ROUGHNESS_QUALITY_MEDIUM = 2
        
        /** High quality of roughness filter for screen-space reflections. This is the slowest option. */
        static readonly ENV_SSR_ROUGHNESS_QUALITY_HIGH = 3
        
        /** Lowest quality of screen-space ambient occlusion. */
        static readonly ENV_SSAO_QUALITY_VERY_LOW = 0
        
        /** Low quality screen-space ambient occlusion. */
        static readonly ENV_SSAO_QUALITY_LOW = 1
        
        /** Medium quality screen-space ambient occlusion. */
        static readonly ENV_SSAO_QUALITY_MEDIUM = 2
        
        /** High quality screen-space ambient occlusion. */
        static readonly ENV_SSAO_QUALITY_HIGH = 3
        
        /** Highest quality screen-space ambient occlusion. Uses the adaptive target setting which can be dynamically adjusted to smoothly balance performance and visual quality. */
        static readonly ENV_SSAO_QUALITY_ULTRA = 4
        
        /** Lowest quality of screen-space indirect lighting. */
        static readonly ENV_SSIL_QUALITY_VERY_LOW = 0
        
        /** Low quality screen-space indirect lighting. */
        static readonly ENV_SSIL_QUALITY_LOW = 1
        
        /** High quality screen-space indirect lighting. */
        static readonly ENV_SSIL_QUALITY_MEDIUM = 2
        
        /** High quality screen-space indirect lighting. */
        static readonly ENV_SSIL_QUALITY_HIGH = 3
        
        /** Highest quality screen-space indirect lighting. Uses the adaptive target setting which can be dynamically adjusted to smoothly balance performance and visual quality. */
        static readonly ENV_SSIL_QUALITY_ULTRA = 4
        
        /** Use 50% scale for SDFGI on the Y (vertical) axis. SDFGI cells will be twice as short as they are wide. This allows providing increased GI detail and reduced light leaking with thin floors and ceilings. This is usually the best choice for scenes that don't feature much verticality. */
        static readonly ENV_SDFGI_Y_SCALE_50_PERCENT = 0
        
        /** Use 75% scale for SDFGI on the Y (vertical) axis. This is a balance between the 50% and 100% SDFGI Y scales. */
        static readonly ENV_SDFGI_Y_SCALE_75_PERCENT = 1
        
        /** Use 100% scale for SDFGI on the Y (vertical) axis. SDFGI cells will be as tall as they are wide. This is usually the best choice for highly vertical scenes. The downside is that light leaking may become more noticeable with thin floors and ceilings. */
        static readonly ENV_SDFGI_Y_SCALE_100_PERCENT = 2
        
        /** Throw 4 rays per frame when converging SDFGI. This has the lowest GPU requirements, but creates the most noisy result. */
        static readonly ENV_SDFGI_RAY_COUNT_4 = 0
        
        /** Throw 8 rays per frame when converging SDFGI. */
        static readonly ENV_SDFGI_RAY_COUNT_8 = 1
        
        /** Throw 16 rays per frame when converging SDFGI. */
        static readonly ENV_SDFGI_RAY_COUNT_16 = 2
        
        /** Throw 32 rays per frame when converging SDFGI. */
        static readonly ENV_SDFGI_RAY_COUNT_32 = 3
        
        /** Throw 64 rays per frame when converging SDFGI. */
        static readonly ENV_SDFGI_RAY_COUNT_64 = 4
        
        /** Throw 96 rays per frame when converging SDFGI. This has high GPU requirements. */
        static readonly ENV_SDFGI_RAY_COUNT_96 = 5
        
        /** Throw 128 rays per frame when converging SDFGI. This has very high GPU requirements, but creates the least noisy result. */
        static readonly ENV_SDFGI_RAY_COUNT_128 = 6
        
        /** Represents the size of the [enum EnvironmentSDFGIRayCount] enum. */
        static readonly ENV_SDFGI_RAY_COUNT_MAX = 7
        
        /** Converge SDFGI over 5 frames. This is the most responsive, but creates the most noisy result with a given ray count. */
        static readonly ENV_SDFGI_CONVERGE_IN_5_FRAMES = 0
        
        /** Configure SDFGI to fully converge over 10 frames. */
        static readonly ENV_SDFGI_CONVERGE_IN_10_FRAMES = 1
        
        /** Configure SDFGI to fully converge over 15 frames. */
        static readonly ENV_SDFGI_CONVERGE_IN_15_FRAMES = 2
        
        /** Configure SDFGI to fully converge over 20 frames. */
        static readonly ENV_SDFGI_CONVERGE_IN_20_FRAMES = 3
        
        /** Configure SDFGI to fully converge over 25 frames. */
        static readonly ENV_SDFGI_CONVERGE_IN_25_FRAMES = 4
        
        /** Configure SDFGI to fully converge over 30 frames. This is the least responsive, but creates the least noisy result with a given ray count. */
        static readonly ENV_SDFGI_CONVERGE_IN_30_FRAMES = 5
        
        /** Represents the size of the [enum EnvironmentSDFGIFramesToConverge] enum. */
        static readonly ENV_SDFGI_CONVERGE_MAX = 6
        
        /** Update indirect light from dynamic lights in SDFGI over 1 frame. This is the most responsive, but has the highest GPU requirements. */
        static readonly ENV_SDFGI_UPDATE_LIGHT_IN_1_FRAME = 0
        
        /** Update indirect light from dynamic lights in SDFGI over 2 frames. */
        static readonly ENV_SDFGI_UPDATE_LIGHT_IN_2_FRAMES = 1
        
        /** Update indirect light from dynamic lights in SDFGI over 4 frames. */
        static readonly ENV_SDFGI_UPDATE_LIGHT_IN_4_FRAMES = 2
        
        /** Update indirect light from dynamic lights in SDFGI over 8 frames. */
        static readonly ENV_SDFGI_UPDATE_LIGHT_IN_8_FRAMES = 3
        
        /** Update indirect light from dynamic lights in SDFGI over 16 frames. This is the least responsive, but has the lowest GPU requirements. */
        static readonly ENV_SDFGI_UPDATE_LIGHT_IN_16_FRAMES = 4
        
        /** Represents the size of the [enum EnvironmentSDFGIFramesToUpdateLight] enum. */
        static readonly ENV_SDFGI_UPDATE_LIGHT_MAX = 5
        
        /** Disables subsurface scattering entirely, even on materials that have [member BaseMaterial3D.subsurf_scatter_enabled] set to `true`. This has the lowest GPU requirements. */
        static readonly SUB_SURFACE_SCATTERING_QUALITY_DISABLED = 0
        
        /** Low subsurface scattering quality. */
        static readonly SUB_SURFACE_SCATTERING_QUALITY_LOW = 1
        
        /** Medium subsurface scattering quality. */
        static readonly SUB_SURFACE_SCATTERING_QUALITY_MEDIUM = 2
        
        /** High subsurface scattering quality. This has the highest GPU requirements. */
        static readonly SUB_SURFACE_SCATTERING_QUALITY_HIGH = 3
        
        /** Calculate the DOF blur using a box filter. The fastest option, but results in obvious lines in blur pattern. */
        static readonly DOF_BOKEH_BOX = 0
        
        /** Calculates DOF blur using a hexagon shaped filter. */
        static readonly DOF_BOKEH_HEXAGON = 1
        
        /** Calculates DOF blur using a circle shaped filter. Best quality and most realistic, but slowest. Use only for areas where a lot of performance can be dedicated to post-processing (e.g. cutscenes). */
        static readonly DOF_BOKEH_CIRCLE = 2
        
        /** Lowest quality DOF blur. This is the fastest setting, but you may be able to see filtering artifacts. */
        static readonly DOF_BLUR_QUALITY_VERY_LOW = 0
        
        /** Low quality DOF blur. */
        static readonly DOF_BLUR_QUALITY_LOW = 1
        
        /** Medium quality DOF blur. */
        static readonly DOF_BLUR_QUALITY_MEDIUM = 2
        
        /** Highest quality DOF blur. Results in the smoothest looking blur by taking the most samples, but is also significantly slower. */
        static readonly DOF_BLUR_QUALITY_HIGH = 3
        
        /** The instance does not have a type. */
        static readonly INSTANCE_NONE = 0
        
        /** The instance is a mesh. */
        static readonly INSTANCE_MESH = 1
        
        /** The instance is a multimesh. */
        static readonly INSTANCE_MULTIMESH = 2
        
        /** The instance is a particle emitter. */
        static readonly INSTANCE_PARTICLES = 3
        
        /** The instance is a GPUParticles collision shape. */
        static readonly INSTANCE_PARTICLES_COLLISION = 4
        
        /** The instance is a light. */
        static readonly INSTANCE_LIGHT = 5
        
        /** The instance is a reflection probe. */
        static readonly INSTANCE_REFLECTION_PROBE = 6
        
        /** The instance is a decal. */
        static readonly INSTANCE_DECAL = 7
        
        /** The instance is a VoxelGI. */
        static readonly INSTANCE_VOXEL_GI = 8
        
        /** The instance is a lightmap. */
        static readonly INSTANCE_LIGHTMAP = 9
        
        /** The instance is an occlusion culling occluder. */
        static readonly INSTANCE_OCCLUDER = 10
        
        /** The instance is a visible on-screen notifier. */
        static readonly INSTANCE_VISIBLITY_NOTIFIER = 11
        
        /** The instance is a fog volume. */
        static readonly INSTANCE_FOG_VOLUME = 12
        
        /** Represents the size of the [enum InstanceType] enum. */
        static readonly INSTANCE_MAX = 13
        
        /** A combination of the flags of geometry instances (mesh, multimesh, immediate and particles). */
        static readonly INSTANCE_GEOMETRY_MASK = 14
        
        /** Allows the instance to be used in baked lighting. */
        static readonly INSTANCE_FLAG_USE_BAKED_LIGHT = 0
        
        /** Allows the instance to be used with dynamic global illumination. */
        static readonly INSTANCE_FLAG_USE_DYNAMIC_GI = 1
        
        /** When set, manually requests to draw geometry on next frame. */
        static readonly INSTANCE_FLAG_DRAW_NEXT_FRAME_IF_VISIBLE = 2
        
        /** Always draw, even if the instance would be culled by occlusion culling. Does not affect view frustum culling. */
        static readonly INSTANCE_FLAG_IGNORE_OCCLUSION_CULLING = 3
        
        /** Represents the size of the [enum InstanceFlags] enum. */
        static readonly INSTANCE_FLAG_MAX = 4
        
        /** Disable shadows from this instance. */
        static readonly SHADOW_CASTING_SETTING_OFF = 0
        
        /** Cast shadows from this instance. */
        static readonly SHADOW_CASTING_SETTING_ON = 1
        
        /** Disable backface culling when rendering the shadow of the object. This is slightly slower but may result in more correct shadows. */
        static readonly SHADOW_CASTING_SETTING_DOUBLE_SIDED = 2
        
        /** Only render the shadows from the object. The object itself will not be drawn. */
        static readonly SHADOW_CASTING_SETTING_SHADOWS_ONLY = 3
        
        /** Disable visibility range fading for the given instance. */
        static readonly VISIBILITY_RANGE_FADE_DISABLED = 0
        
        /** Fade-out the given instance when it approaches its visibility range limits. */
        static readonly VISIBILITY_RANGE_FADE_SELF = 1
        
        /** Fade-in the given instance's dependencies when reaching its visibility range limits. */
        static readonly VISIBILITY_RANGE_FADE_DEPENDENCIES = 2
        
        /** Index of [Image] in array of [Image]s returned by [method bake_render_uv2]. Image uses [constant Image.FORMAT_RGBA8] and contains albedo color in the `.rgb` channels and alpha in the `.a` channel. */
        static readonly BAKE_CHANNEL_ALBEDO_ALPHA = 0
        
        /** Index of [Image] in array of [Image]s returned by [method bake_render_uv2]. Image uses [constant Image.FORMAT_RGBA8] and contains the per-pixel normal of the object in the `.rgb` channels and nothing in the `.a` channel. The per-pixel normal is encoded as `normal * 0.5 + 0.5`. */
        static readonly BAKE_CHANNEL_NORMAL = 1
        
        /** Index of [Image] in array of [Image]s returned by [method bake_render_uv2]. Image uses [constant Image.FORMAT_RGBA8] and contains ambient occlusion (from material and decals only) in the `.r` channel, roughness in the `.g` channel, metallic in the `.b` channel and sub surface scattering amount in the `.a` channel. */
        static readonly BAKE_CHANNEL_ORM = 2
        
        /** Index of [Image] in array of [Image]s returned by [method bake_render_uv2]. Image uses [constant Image.FORMAT_RGBAH] and contains emission color in the `.rgb` channels and nothing in the `.a` channel. */
        static readonly BAKE_CHANNEL_EMISSION = 3
        
        /** Diffuse canvas texture ([member CanvasTexture.diffuse_texture]). */
        static readonly CANVAS_TEXTURE_CHANNEL_DIFFUSE = 0
        
        /** Normal map canvas texture ([member CanvasTexture.normal_texture]). */
        static readonly CANVAS_TEXTURE_CHANNEL_NORMAL = 1
        
        /** Specular map canvas texture ([member CanvasTexture.specular_texture]). */
        static readonly CANVAS_TEXTURE_CHANNEL_SPECULAR = 2
        
        /** The nine patch gets stretched where needed. */
        static readonly NINE_PATCH_STRETCH = 0
        
        /** The nine patch gets filled with tiles where needed. */
        static readonly NINE_PATCH_TILE = 1
        
        /** The nine patch gets filled with tiles where needed and stretches them a bit if needed. */
        static readonly NINE_PATCH_TILE_FIT = 2
        
        /** Uses the default filter mode for this [Viewport]. */
        static readonly CANVAS_ITEM_TEXTURE_FILTER_DEFAULT = 0
        
        /** The texture filter reads from the nearest pixel only. This makes the texture look pixelated from up close, and grainy from a distance (due to mipmaps not being sampled). */
        static readonly CANVAS_ITEM_TEXTURE_FILTER_NEAREST = 1
        
        /** The texture filter blends between the nearest 4 pixels. This makes the texture look smooth from up close, and grainy from a distance (due to mipmaps not being sampled). */
        static readonly CANVAS_ITEM_TEXTURE_FILTER_LINEAR = 2
        
        /** The texture filter reads from the nearest pixel and blends between the nearest 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`). This makes the texture look pixelated from up close, and smooth from a distance.  
         *  Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to [Camera2D] zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.  
         */
        static readonly CANVAS_ITEM_TEXTURE_FILTER_NEAREST_WITH_MIPMAPS = 3
        
        /** The texture filter blends between the nearest 4 pixels and between the nearest 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`). This makes the texture look smooth from up close, and smooth from a distance.  
         *  Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to [Camera2D] zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.  
         */
        static readonly CANVAS_ITEM_TEXTURE_FILTER_LINEAR_WITH_MIPMAPS = 4
        
        /** The texture filter reads from the nearest pixel and blends between 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`) based on the angle between the surface and the camera view. This makes the texture look pixelated from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting [member ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level].  
         *      
         *  **Note:** This texture filter is rarely useful in 2D projects. [constant CANVAS_ITEM_TEXTURE_FILTER_NEAREST_WITH_MIPMAPS] is usually more appropriate in this case.  
         */
        static readonly CANVAS_ITEM_TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC = 5
        
        /** The texture filter blends between the nearest 4 pixels and blends between 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`) based on the angle between the surface and the camera view. This makes the texture look smooth from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting [member ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level].  
         *      
         *  **Note:** This texture filter is rarely useful in 2D projects. [constant CANVAS_ITEM_TEXTURE_FILTER_LINEAR_WITH_MIPMAPS] is usually more appropriate in this case.  
         */
        static readonly CANVAS_ITEM_TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC = 6
        
        /** Max value for [enum CanvasItemTextureFilter] enum. */
        static readonly CANVAS_ITEM_TEXTURE_FILTER_MAX = 7
        
        /** Uses the default repeat mode for this [Viewport]. */
        static readonly CANVAS_ITEM_TEXTURE_REPEAT_DEFAULT = 0
        
        /** Disables textures repeating. Instead, when reading UVs outside the 0-1 range, the value will be clamped to the edge of the texture, resulting in a stretched out look at the borders of the texture. */
        static readonly CANVAS_ITEM_TEXTURE_REPEAT_DISABLED = 1
        
        /** Enables the texture to repeat when UV coordinates are outside the 0-1 range. If using one of the linear filtering modes, this can result in artifacts at the edges of a texture when the sampler filters across the edges of the texture. */
        static readonly CANVAS_ITEM_TEXTURE_REPEAT_ENABLED = 2
        
        /** Flip the texture when repeating so that the edge lines up instead of abruptly changing. */
        static readonly CANVAS_ITEM_TEXTURE_REPEAT_MIRROR = 3
        
        /** Max value for [enum CanvasItemTextureRepeat] enum. */
        static readonly CANVAS_ITEM_TEXTURE_REPEAT_MAX = 4
        
        /** Child draws over parent and is not clipped. */
        static readonly CANVAS_GROUP_MODE_DISABLED = 0
        
        /** Parent is used for the purposes of clipping only. Child is clipped to the parent's visible area, parent is not drawn. */
        static readonly CANVAS_GROUP_MODE_CLIP_ONLY = 1
        
        /** Parent is used for clipping child, but parent is also drawn underneath child as normal before clipping child to its visible area. */
        static readonly CANVAS_GROUP_MODE_CLIP_AND_DRAW = 2
        static readonly CANVAS_GROUP_MODE_TRANSPARENT = 3
        
        /** 2D point light (see [PointLight2D]). */
        static readonly CANVAS_LIGHT_MODE_POINT = 0
        
        /** 2D directional (sun/moon) light (see [DirectionalLight2D]). */
        static readonly CANVAS_LIGHT_MODE_DIRECTIONAL = 1
        
        /** Adds light color additive to the canvas. */
        static readonly CANVAS_LIGHT_BLEND_MODE_ADD = 0
        
        /** Adds light color subtractive to the canvas. */
        static readonly CANVAS_LIGHT_BLEND_MODE_SUB = 1
        
        /** The light adds color depending on transparency. */
        static readonly CANVAS_LIGHT_BLEND_MODE_MIX = 2
        
        /** Do not apply a filter to canvas light shadows. */
        static readonly CANVAS_LIGHT_FILTER_NONE = 0
        
        /** Use PCF5 filtering to filter canvas light shadows. */
        static readonly CANVAS_LIGHT_FILTER_PCF5 = 1
        
        /** Use PCF13 filtering to filter canvas light shadows. */
        static readonly CANVAS_LIGHT_FILTER_PCF13 = 2
        
        /** Max value of the [enum CanvasLightShadowFilter] enum. */
        static readonly CANVAS_LIGHT_FILTER_MAX = 3
        
        /** Culling of the canvas occluder is disabled. */
        static readonly CANVAS_OCCLUDER_POLYGON_CULL_DISABLED = 0
        
        /** Culling of the canvas occluder is clockwise. */
        static readonly CANVAS_OCCLUDER_POLYGON_CULL_CLOCKWISE = 1
        
        /** Culling of the canvas occluder is counterclockwise. */
        static readonly CANVAS_OCCLUDER_POLYGON_CULL_COUNTER_CLOCKWISE = 2
        
        /** Boolean global shader parameter (`global uniform bool ...`). */
        static readonly GLOBAL_VAR_TYPE_BOOL = 0
        
        /** 2-dimensional boolean vector global shader parameter (`global uniform bvec2 ...`). */
        static readonly GLOBAL_VAR_TYPE_BVEC2 = 1
        
        /** 3-dimensional boolean vector global shader parameter (`global uniform bvec3 ...`). */
        static readonly GLOBAL_VAR_TYPE_BVEC3 = 2
        
        /** 4-dimensional boolean vector global shader parameter (`global uniform bvec4 ...`). */
        static readonly GLOBAL_VAR_TYPE_BVEC4 = 3
        
        /** Integer global shader parameter (`global uniform int ...`). */
        static readonly GLOBAL_VAR_TYPE_INT = 4
        
        /** 2-dimensional integer vector global shader parameter (`global uniform ivec2 ...`). */
        static readonly GLOBAL_VAR_TYPE_IVEC2 = 5
        
        /** 3-dimensional integer vector global shader parameter (`global uniform ivec3 ...`). */
        static readonly GLOBAL_VAR_TYPE_IVEC3 = 6
        
        /** 4-dimensional integer vector global shader parameter (`global uniform ivec4 ...`). */
        static readonly GLOBAL_VAR_TYPE_IVEC4 = 7
        
        /** 2-dimensional integer rectangle global shader parameter (`global uniform ivec4 ...`). Equivalent to [constant GLOBAL_VAR_TYPE_IVEC4] in shader code, but exposed as a [Rect2i] in the editor UI. */
        static readonly GLOBAL_VAR_TYPE_RECT2I = 8
        
        /** Unsigned integer global shader parameter (`global uniform uint ...`). */
        static readonly GLOBAL_VAR_TYPE_UINT = 9
        
        /** 2-dimensional unsigned integer vector global shader parameter (`global uniform uvec2 ...`). */
        static readonly GLOBAL_VAR_TYPE_UVEC2 = 10
        
        /** 3-dimensional unsigned integer vector global shader parameter (`global uniform uvec3 ...`). */
        static readonly GLOBAL_VAR_TYPE_UVEC3 = 11
        
        /** 4-dimensional unsigned integer vector global shader parameter (`global uniform uvec4 ...`). */
        static readonly GLOBAL_VAR_TYPE_UVEC4 = 12
        
        /** Single-precision floating-point global shader parameter (`global uniform float ...`). */
        static readonly GLOBAL_VAR_TYPE_FLOAT = 13
        
        /** 2-dimensional floating-point vector global shader parameter (`global uniform vec2 ...`). */
        static readonly GLOBAL_VAR_TYPE_VEC2 = 14
        
        /** 3-dimensional floating-point vector global shader parameter (`global uniform vec3 ...`). */
        static readonly GLOBAL_VAR_TYPE_VEC3 = 15
        
        /** 4-dimensional floating-point vector global shader parameter (`global uniform vec4 ...`). */
        static readonly GLOBAL_VAR_TYPE_VEC4 = 16
        
        /** Color global shader parameter (`global uniform vec4 ...`). Equivalent to [constant GLOBAL_VAR_TYPE_VEC4] in shader code, but exposed as a [Color] in the editor UI. */
        static readonly GLOBAL_VAR_TYPE_COLOR = 17
        
        /** 2-dimensional floating-point rectangle global shader parameter (`global uniform vec4 ...`). Equivalent to [constant GLOBAL_VAR_TYPE_VEC4] in shader code, but exposed as a [Rect2] in the editor UI. */
        static readonly GLOBAL_VAR_TYPE_RECT2 = 18
        
        /** 2×2 matrix global shader parameter (`global uniform mat2 ...`). Exposed as a [PackedInt32Array] in the editor UI. */
        static readonly GLOBAL_VAR_TYPE_MAT2 = 19
        
        /** 3×3 matrix global shader parameter (`global uniform mat3 ...`). Exposed as a [Basis] in the editor UI. */
        static readonly GLOBAL_VAR_TYPE_MAT3 = 20
        
        /** 4×4 matrix global shader parameter (`global uniform mat4 ...`). Exposed as a [Projection] in the editor UI. */
        static readonly GLOBAL_VAR_TYPE_MAT4 = 21
        
        /** 2-dimensional transform global shader parameter (`global uniform mat2x3 ...`). Exposed as a [Transform2D] in the editor UI. */
        static readonly GLOBAL_VAR_TYPE_TRANSFORM_2D = 22
        
        /** 3-dimensional transform global shader parameter (`global uniform mat3x4 ...`). Exposed as a [Transform3D] in the editor UI. */
        static readonly GLOBAL_VAR_TYPE_TRANSFORM = 23
        
        /** 2D sampler global shader parameter (`global uniform sampler2D ...`). Exposed as a [Texture2D] in the editor UI. */
        static readonly GLOBAL_VAR_TYPE_SAMPLER2D = 24
        
        /** 2D sampler array global shader parameter (`global uniform sampler2DArray ...`). Exposed as a [Texture2DArray] in the editor UI. */
        static readonly GLOBAL_VAR_TYPE_SAMPLER2DARRAY = 25
        
        /** 3D sampler global shader parameter (`global uniform sampler3D ...`). Exposed as a [Texture3D] in the editor UI. */
        static readonly GLOBAL_VAR_TYPE_SAMPLER3D = 26
        
        /** Cubemap sampler global shader parameter (`global uniform samplerCube ...`). Exposed as a [Cubemap] in the editor UI. */
        static readonly GLOBAL_VAR_TYPE_SAMPLERCUBE = 27
        
        /** External sampler global shader parameter (`global uniform samplerExternalOES ...`). Exposed as a [ExternalTexture] in the editor UI. */
        static readonly GLOBAL_VAR_TYPE_SAMPLEREXT = 28
        
        /** Represents the size of the [enum GlobalShaderParameterType] enum. */
        static readonly GLOBAL_VAR_TYPE_MAX = 29
        
        /** Number of objects rendered in the current 3D scene. This varies depending on camera position and rotation. */
        static readonly RENDERING_INFO_TOTAL_OBJECTS_IN_FRAME = 0
        
        /** Number of points, lines, or triangles rendered in the current 3D scene. This varies depending on camera position and rotation. */
        static readonly RENDERING_INFO_TOTAL_PRIMITIVES_IN_FRAME = 1
        
        /** Number of draw calls performed to render in the current 3D scene. This varies depending on camera position and rotation. */
        static readonly RENDERING_INFO_TOTAL_DRAW_CALLS_IN_FRAME = 2
        
        /** Texture memory used (in bytes). */
        static readonly RENDERING_INFO_TEXTURE_MEM_USED = 3
        
        /** Buffer memory used (in bytes). This includes vertex data, uniform buffers, and many miscellaneous buffer types used internally. */
        static readonly RENDERING_INFO_BUFFER_MEM_USED = 4
        
        /** Video memory used (in bytes). When using the Forward+ or Mobile renderers, this is always greater than the sum of [constant RENDERING_INFO_TEXTURE_MEM_USED] and [constant RENDERING_INFO_BUFFER_MEM_USED], since there is miscellaneous data not accounted for by those two metrics. When using the Compatibility renderer, this is equal to the sum of [constant RENDERING_INFO_TEXTURE_MEM_USED] and [constant RENDERING_INFO_BUFFER_MEM_USED]. */
        static readonly RENDERING_INFO_VIDEO_MEM_USED = 5
        
        /** Number of pipeline compilations that were triggered by the 2D canvas renderer. */
        static readonly RENDERING_INFO_PIPELINE_COMPILATIONS_CANVAS = 6
        
        /** Number of pipeline compilations that were triggered by loading meshes. These compilations will show up as longer loading times the first time a user runs the game and the pipeline is required. */
        static readonly RENDERING_INFO_PIPELINE_COMPILATIONS_MESH = 7
        
        /** Number of pipeline compilations that were triggered by building the surface cache before rendering the scene. These compilations will show up as a stutter when loading an scene the first time a user runs the game and the pipeline is required. */
        static readonly RENDERING_INFO_PIPELINE_COMPILATIONS_SURFACE = 8
        
        /** Number of pipeline compilations that were triggered while drawing the scene. These compilations will show up as stutters during gameplay the first time a user runs the game and the pipeline is required. */
        static readonly RENDERING_INFO_PIPELINE_COMPILATIONS_DRAW = 9
        
        /** Number of pipeline compilations that were triggered to optimize the current scene. These compilations are done in the background and should not cause any stutters whatsoever. */
        static readonly RENDERING_INFO_PIPELINE_COMPILATIONS_SPECIALIZATION = 10
        
        /** Pipeline compilation that was triggered by the 2D canvas renderer. */
        static readonly PIPELINE_SOURCE_CANVAS = 0
        
        /** Pipeline compilation that was triggered by loading a mesh. */
        static readonly PIPELINE_SOURCE_MESH = 1
        
        /** Pipeline compilation that was triggered by building the surface cache before rendering the scene. */
        static readonly PIPELINE_SOURCE_SURFACE = 2
        
        /** Pipeline compilation that was triggered while drawing the scene. */
        static readonly PIPELINE_SOURCE_DRAW = 3
        
        /** Pipeline compilation that was triggered to optimize the current scene. */
        static readonly PIPELINE_SOURCE_SPECIALIZATION = 4
        
        /** Represents the size of the [enum PipelineSource] enum. */
        static readonly PIPELINE_SOURCE_MAX = 5
        static readonly FEATURE_SHADERS = 0
        static readonly FEATURE_MULTITHREADED = 1
        
        /** Creates a 2-dimensional texture and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `texture_2d_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *      
         *  **Note:** The equivalent resource is [Texture2D].  
         *      
         *  **Note:** Not to be confused with [method RenderingDevice.texture_create], which creates the graphics API's own texture type as opposed to the Godot-specific [Texture2D] resource.  
         */
        static texture2DCreate(image: Image): Rid
        
        /** Creates a 2-dimensional layered texture and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `texture_2d_layered_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *      
         *  **Note:** The equivalent resource is [TextureLayered].  
         */
        static texture2DLayeredCreate(layers: GArray, layeredType: RenderingServer.TextureLayeredType): Rid
        
        /**     
         *  **Note:** The equivalent resource is [Texture3D].  
         */
        static texture3DCreate(format: Image.Format, width: int64, height: int64, depth: int64, mipmaps: boolean, data: GArray): Rid
        
        /** This method does nothing and always returns an invalid [RID]. */
        static textureProxyCreate(base: Rid): Rid
        
        /** Creates a texture based on a native handle that was created outside of Godot's renderer.  
         *      
         *  **Note:** If using only the rendering device renderer, it's recommend to use [method RenderingDevice.texture_create_from_extension] together with [method RenderingServer.texture_rd_create], rather than this method. It will give you much more control over the texture's format and usage.  
         */
        static textureCreateFromNativeHandle(type: RenderingServer.TextureType, format: Image.Format, nativeHandle: int64, width: int64, height: int64, depth: int64, layers?: int64 /* = 1 */, layeredType?: RenderingServer.TextureLayeredType /* = 0 */): Rid
        
        /** Updates the texture specified by the [param texture] [RID] with the data in [param image]. A [param layer] must also be specified, which should be `0` when updating a single-layer texture ([Texture2D]).  
         *      
         *  **Note:** The [param image] must have the same width, height and format as the current [param texture] data. Otherwise, an error will be printed and the original texture won't be modified. If you need to use different width, height or format, use [method texture_replace] instead.  
         */
        static texture2DUpdate(texture: Rid, image: Image, layer: int64): void
        
        /** Updates the texture specified by the [param texture] [RID]'s data with the data in [param data]. All the texture's layers must be replaced at once.  
         *      
         *  **Note:** The [param texture] must have the same width, height, depth and format as the current texture data. Otherwise, an error will be printed and the original texture won't be modified. If you need to use different width, height, depth or format, use [method texture_replace] instead.  
         */
        static texture3DUpdate(texture: Rid, data: GArray): void
        
        /** This method does nothing. */
        static textureProxyUpdate(texture: Rid, proxyTo: Rid): void
        
        /** Creates a placeholder for a 2-dimensional layered texture and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `texture_2d_layered_*` RenderingServer functions, although it does nothing when used. See also [method texture_2d_layered_placeholder_create].  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *      
         *  **Note:** The equivalent resource is [PlaceholderTexture2D].  
         */
        static texture2DPlaceholderCreate(): Rid
        
        /** Creates a placeholder for a 2-dimensional layered texture and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `texture_2d_layered_*` RenderingServer functions, although it does nothing when used. See also [method texture_2d_placeholder_create].  
         *      
         *  **Note:** The equivalent resource is [PlaceholderTextureLayered].  
         */
        static texture2DLayeredPlaceholderCreate(layeredType: RenderingServer.TextureLayeredType): Rid
        
        /** Creates a placeholder for a 3-dimensional texture and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `texture_3d_*` RenderingServer functions, although it does nothing when used.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *      
         *  **Note:** The equivalent resource is [PlaceholderTexture3D].  
         */
        static texture3DPlaceholderCreate(): Rid
        
        /** Returns an [Image] instance from the given [param texture] [RID].  
         *  **Example:** Get the test texture from [method get_test_texture] and apply it to a [Sprite2D] node:  
         *    
         */
        static texture2DGet(texture: Rid): null | Image
        
        /** Returns an [Image] instance from the given [param texture] [RID] and [param layer]. */
        static texture2DLayerGet(texture: Rid, layer: int64): null | Image
        
        /** Returns 3D texture data as an array of [Image]s for the specified texture [RID]. */
        static texture3DGet(texture: Rid): GArray
        
        /** Replaces [param texture]'s texture data by the texture specified by the [param by_texture] RID, without changing [param texture]'s RID. */
        static textureReplace(texture: Rid, byTexture: Rid): void
        static textureSetSizeOverride(texture: Rid, width: int64, height: int64): void
        static textureSetPath(texture: Rid, path: string): void
        static textureGetPath(texture: Rid): string
        
        /** Returns the format for the texture. */
        static textureGetFormat(texture: Rid): Image.Format
        static textureSetForceRedrawIfVisible(texture: Rid, enable: boolean): void
        
        /** Creates a new texture object based on a texture created directly on the [RenderingDevice]. If the texture contains layers, [param layer_type] is used to define the layer type. */
        static textureRdCreate(rdTexture: Rid, layerType?: RenderingServer.TextureLayeredType /* = 0 */): Rid
        
        /** Returns a texture [RID] that can be used with [RenderingDevice]. */
        static textureGetRdTexture(texture: Rid, srgb?: boolean /* = false */): Rid
        
        /** Returns the internal graphics handle for this texture object. For use when communicating with third-party APIs mostly with GDExtension.  
         *      
         *  **Note:** This function returns a `uint64_t` which internally maps to a `GLuint` (OpenGL) or `VkImage` (Vulkan).  
         */
        static textureGetNativeHandle(texture: Rid, srgb?: boolean /* = false */): int64
        
        /** Creates an empty shader and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `shader_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *      
         *  **Note:** The equivalent resource is [Shader].  
         */
        static shaderCreate(): Rid
        
        /** Sets the shader's source code (which triggers recompilation after being changed). */
        static shaderSetCode(shader: Rid, code: string): void
        
        /** Sets the path hint for the specified shader. This should generally match the [Shader] resource's [member Resource.resource_path]. */
        static shaderSetPathHint(shader: Rid, path: string): void
        
        /** Returns a shader's source code as a string. */
        static shaderGetCode(shader: Rid): string
        
        /** Returns the parameters of a shader. */
        static getShaderParameterList(shader: Rid): GArray
        
        /** Returns the default value for the specified shader uniform. This is usually the value written in the shader source code. */
        static shaderGetParameterDefault(shader: Rid, name: StringName): any
        
        /** Sets a shader's default texture. Overwrites the texture given by name.  
         *      
         *  **Note:** If the sampler array is used use [param index] to access the specified texture.  
         */
        static shaderSetDefaultTextureParameter(shader: Rid, name: StringName, texture: Rid, index?: int64 /* = 0 */): void
        
        /** Returns a default texture from a shader searched by name.  
         *      
         *  **Note:** If the sampler array is used use [param index] to access the specified texture.  
         */
        static shaderGetDefaultTextureParameter(shader: Rid, name: StringName, index?: int64 /* = 0 */): Rid
        
        /** Creates an empty material and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `material_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *      
         *  **Note:** The equivalent resource is [Material].  
         */
        static materialCreate(): Rid
        
        /** Sets a shader material's shader. */
        static materialSetShader(shaderMaterial: Rid, shader: Rid): void
        
        /** Sets a material's parameter. */
        static materialSetParam(material: Rid, parameter: StringName, value: any): void
        
        /** Returns the value of a certain material's parameter. */
        static materialGetParam(material: Rid, parameter: StringName): any
        
        /** Sets a material's render priority. */
        static materialSetRenderPriority(material: Rid, priority: int64): void
        
        /** Sets an object's next material. */
        static materialSetNextPass(material: Rid, nextMaterial: Rid): void
        static meshCreateFromSurfaces(surfaces: GArray, blendShapeCount?: int64 /* = 0 */): Rid
        
        /** Creates a new mesh and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `mesh_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *  To place in a scene, attach this mesh to an instance using [method instance_set_base] using the returned RID.  
         *      
         *  **Note:** The equivalent resource is [Mesh].  
         */
        static meshCreate(): Rid
        
        /** Returns the offset of a given attribute by [param array_index] in the start of its respective buffer. */
        static meshSurfaceGetFormatOffset(format: RenderingServer.ArrayFormat, vertexCount: int64, arrayIndex: int64): int64
        
        /** Returns the stride of the vertex positions for a mesh with given [param format]. Note importantly that vertex positions are stored consecutively and are not interleaved with the other attributes in the vertex buffer (normals and tangents). */
        static meshSurfaceGetFormatVertexStride(format: RenderingServer.ArrayFormat, vertexCount: int64): int64
        
        /** Returns the stride of the combined normals and tangents for a mesh with given [param format]. Note importantly that, while normals and tangents are in the vertex buffer with vertices, they are only interleaved with each other and so have a different stride than vertex positions. */
        static meshSurfaceGetFormatNormalTangentStride(format: RenderingServer.ArrayFormat, vertexCount: int64): int64
        
        /** Returns the stride of the attribute buffer for a mesh with given [param format]. */
        static meshSurfaceGetFormatAttributeStride(format: RenderingServer.ArrayFormat, vertexCount: int64): int64
        
        /** Returns the stride of the skin buffer for a mesh with given [param format]. */
        static meshSurfaceGetFormatSkinStride(format: RenderingServer.ArrayFormat, vertexCount: int64): int64
        static meshAddSurface(mesh: Rid, surface: GDictionary): void
        static meshAddSurfaceFromArrays(mesh: Rid, primitive: RenderingServer.PrimitiveType, arrays: GArray, blendShapes?: GArray /* = [] */, lods?: GDictionary /* = new GDictionary() */, compressFormat?: RenderingServer.ArrayFormat /* = 0 */): void
        
        /** Returns a mesh's blend shape count. */
        static meshGetBlendShapeCount(mesh: Rid): int64
        
        /** Sets a mesh's blend shape mode. */
        static meshSetBlendShapeMode(mesh: Rid, mode: RenderingServer.BlendShapeMode): void
        
        /** Returns a mesh's blend shape mode. */
        static meshGetBlendShapeMode(mesh: Rid): RenderingServer.BlendShapeMode
        
        /** Sets a mesh's surface's material. */
        static meshSurfaceSetMaterial(mesh: Rid, surface: int64, material: Rid): void
        
        /** Returns a mesh's surface's material. */
        static meshSurfaceGetMaterial(mesh: Rid, surface: int64): Rid
        static meshGetSurface(mesh: Rid, surface: int64): GDictionary
        
        /** Returns a mesh's surface's buffer arrays. */
        static meshSurfaceGetArrays(mesh: Rid, surface: int64): GArray
        
        /** Returns a mesh's surface's arrays for blend shapes. */
        static meshSurfaceGetBlendShapeArrays(mesh: Rid, surface: int64): GArray
        
        /** Returns a mesh's number of surfaces. */
        static meshGetSurfaceCount(mesh: Rid): int64
        
        /** Sets a mesh's custom aabb. */
        static meshSetCustomAabb(mesh: Rid, aabb: Aabb): void
        
        /** Returns a mesh's custom aabb. */
        static meshGetCustomAabb(mesh: Rid): Aabb
        
        /** Removes the surface at the given index from the Mesh, shifting surfaces with higher index down by one. */
        static meshSurfaceRemove(mesh: Rid, surface: int64): void
        
        /** Removes all surfaces from a mesh. */
        static meshClear(mesh: Rid): void
        static meshSurfaceUpdateVertexRegion(mesh: Rid, surface: int64, offset: int64, data: PackedByteArray | byte[] | ArrayBuffer): void
        static meshSurfaceUpdateAttributeRegion(mesh: Rid, surface: int64, offset: int64, data: PackedByteArray | byte[] | ArrayBuffer): void
        static meshSurfaceUpdateSkinRegion(mesh: Rid, surface: int64, offset: int64, data: PackedByteArray | byte[] | ArrayBuffer): void
        static meshSetShadowMesh(mesh: Rid, shadowMesh: Rid): void
        
        /** Creates a new multimesh on the RenderingServer and returns an [RID] handle. This RID will be used in all `multimesh_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *  To place in a scene, attach this multimesh to an instance using [method instance_set_base] using the returned RID.  
         *      
         *  **Note:** The equivalent resource is [MultiMesh].  
         */
        static multimeshCreate(): Rid
        static multimeshAllocateData(multimesh: Rid, instances: int64, transformFormat: RenderingServer.MultimeshTransformFormat, colorFormat?: boolean /* = false */, customDataFormat?: boolean /* = false */, useIndirect?: boolean /* = false */): void
        
        /** Returns the number of instances allocated for this multimesh. */
        static multimeshGetInstanceCount(multimesh: Rid): int64
        
        /** Sets the mesh to be drawn by the multimesh. Equivalent to [member MultiMesh.mesh]. */
        static multimeshSetMesh(multimesh: Rid, mesh: Rid): void
        
        /** Sets the [Transform3D] for this instance. Equivalent to [method MultiMesh.set_instance_transform]. */
        static multimeshInstanceSetTransform(multimesh: Rid, index: int64, transform: Transform3D): void
        
        /** Sets the [Transform2D] for this instance. For use when multimesh is used in 2D. Equivalent to [method MultiMesh.set_instance_transform_2d]. */
        static multimeshInstanceSetTransform2D(multimesh: Rid, index: int64, transform: Transform2D): void
        
        /** Sets the color by which this instance will be modulated. Equivalent to [method MultiMesh.set_instance_color]. */
        static multimeshInstanceSetColor(multimesh: Rid, index: int64, color: Color): void
        
        /** Sets the custom data for this instance. Custom data is passed as a [Color], but is interpreted as a `vec4` in the shader. Equivalent to [method MultiMesh.set_instance_custom_data]. */
        static multimeshInstanceSetCustomData(multimesh: Rid, index: int64, customData: Color): void
        
        /** Returns the RID of the mesh that will be used in drawing this multimesh. */
        static multimeshGetMesh(multimesh: Rid): Rid
        
        /** Calculates and returns the axis-aligned bounding box that encloses all instances within the multimesh. */
        static multimeshGetAabb(multimesh: Rid): Aabb
        
        /** Sets the custom AABB for this MultiMesh resource. */
        static multimeshSetCustomAabb(multimesh: Rid, aabb: Aabb): void
        
        /** Returns the custom AABB defined for this MultiMesh resource. */
        static multimeshGetCustomAabb(multimesh: Rid): Aabb
        
        /** Returns the [Transform3D] of the specified instance. */
        static multimeshInstanceGetTransform(multimesh: Rid, index: int64): Transform3D
        
        /** Returns the [Transform2D] of the specified instance. For use when the multimesh is set to use 2D transforms. */
        static multimeshInstanceGetTransform2D(multimesh: Rid, index: int64): Transform2D
        
        /** Returns the color by which the specified instance will be modulated. */
        static multimeshInstanceGetColor(multimesh: Rid, index: int64): Color
        
        /** Returns the custom data associated with the specified instance. */
        static multimeshInstanceGetCustomData(multimesh: Rid, index: int64): Color
        
        /** Sets the number of instances visible at a given time. If -1, all instances that have been allocated are drawn. Equivalent to [member MultiMesh.visible_instance_count]. */
        static multimeshSetVisibleInstances(multimesh: Rid, visible: int64): void
        
        /** Returns the number of visible instances for this multimesh. */
        static multimeshGetVisibleInstances(multimesh: Rid): int64
        
        /** Set the entire data to use for drawing the [param multimesh] at once to [param buffer] (such as instance transforms and colors). [param buffer]'s size must match the number of instances multiplied by the per-instance data size (which depends on the enabled MultiMesh fields). Otherwise, an error message is printed and nothing is rendered. See also [method multimesh_get_buffer].  
         *  The per-instance data size and expected data order is:  
         *  [codeblock lang=text]  
         *  2D:  
         *    - Position: 8 floats (8 floats for Transform2D)  
         *    - Position + Vertex color: 12 floats (8 floats for Transform2D, 4 floats for Color)  
         *    - Position + Custom data: 12 floats (8 floats for Transform2D, 4 floats of custom data)  
         *    - Position + Vertex color + Custom data: 16 floats (8 floats for Transform2D, 4 floats for Color, 4 floats of custom data)  
         *  3D:  
         *    - Position: 12 floats (12 floats for Transform3D)  
         *    - Position + Vertex color: 16 floats (12 floats for Transform3D, 4 floats for Color)  
         *    - Position + Custom data: 16 floats (12 floats for Transform3D, 4 floats of custom data)  
         *    - Position + Vertex color + Custom data: 20 floats (12 floats for Transform3D, 4 floats for Color, 4 floats of custom data)  
         *  [/codeblock]  
         *  Instance transforms are in row-major order. Specifically:  
         *  - For [Transform2D] the float-order is: `(x.x, y.x, padding_float, origin.x, x.y, y.y, padding_float, origin.y)`.  
         *  - For [Transform3D] the float-order is: `(basis.x.x, basis.y.x, basis.z.x, origin.x, basis.x.y, basis.y.y, basis.z.y, origin.y, basis.x.z, basis.y.z, basis.z.z, origin.z)`.  
         */
        static multimeshSetBuffer(multimesh: Rid, buffer: PackedFloat32Array | float32[]): void
        
        /** Returns the [RenderingDevice] [RID] handle of the [MultiMesh] command buffer. This [RID] is only valid if `use_indirect` is set to `true` when allocating data through [method multimesh_allocate_data]. It can be used to directly modify the instance count via buffer.  
         *  The data structure is dependent on both how many surfaces the mesh contains and whether it is indexed or not, the buffer has 5 integers in it, with the last unused if the mesh is not indexed.  
         *  Each of the values in the buffer correspond to these options:  
         *  [codeblock lang=text]  
         *  Indexed:  
         *    0 - indexCount;  
         *    1 - instanceCount;  
         *    2 - firstIndex;  
         *    3 - vertexOffset;  
         *    4 - firstInstance;  
         *  Non Indexed:  
         *    0 - vertexCount;  
         *    1 - instanceCount;  
         *    2 - firstVertex;  
         *    3 - firstInstance;  
         *    4 - unused;  
         *  [/codeblock]  
         */
        static multimeshGetCommandBufferRdRid(multimesh: Rid): Rid
        
        /** Returns the [RenderingDevice] [RID] handle of the [MultiMesh], which can be used as any other buffer on the Rendering Device. */
        static multimeshGetBufferRdRid(multimesh: Rid): Rid
        
        /** Returns the MultiMesh data (such as instance transforms, colors, etc.). See [method multimesh_set_buffer] for details on the returned data.  
         *      
         *  **Note:** If the buffer is in the engine's internal cache, it will have to be fetched from GPU memory and possibly decompressed. This means [method multimesh_get_buffer] is potentially a slow operation and should be avoided whenever possible.  
         */
        static multimeshGetBuffer(multimesh: Rid): PackedFloat32Array
        
        /** Alternative version of [method multimesh_set_buffer] for use with physics interpolation.  
         *  Takes both an array of current data and an array of data for the previous physics tick.  
         */
        static multimeshSetBufferInterpolated(multimesh: Rid, buffer: PackedFloat32Array | float32[], bufferPrevious: PackedFloat32Array | float32[]): void
        
        /** Turns on and off physics interpolation for this MultiMesh resource. */
        static multimeshSetPhysicsInterpolated(multimesh: Rid, interpolated: boolean): void
        
        /** Sets the physics interpolation quality for the [MultiMesh].  
         *  A value of [constant MULTIMESH_INTERP_QUALITY_FAST] gives fast but low quality interpolation, a value of [constant MULTIMESH_INTERP_QUALITY_HIGH] gives slower but higher quality interpolation.  
         */
        static multimeshSetPhysicsInterpolationQuality(multimesh: Rid, quality: RenderingServer.MultimeshPhysicsInterpolationQuality): void
        
        /** Prevents physics interpolation for the specified instance during the current physics tick.  
         *  This is useful when moving an instance to a new location, to give an instantaneous change rather than interpolation from the previous location.  
         */
        static multimeshInstanceResetPhysicsInterpolation(multimesh: Rid, index: int64): void
        
        /** Creates a skeleton and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `skeleton_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         */
        static skeletonCreate(): Rid
        static skeletonAllocateData(skeleton: Rid, bones: int64, is2DSkeleton?: boolean /* = false */): void
        
        /** Returns the number of bones allocated for this skeleton. */
        static skeletonGetBoneCount(skeleton: Rid): int64
        
        /** Sets the [Transform3D] for a specific bone of this skeleton. */
        static skeletonBoneSetTransform(skeleton: Rid, bone: int64, transform: Transform3D): void
        
        /** Returns the [Transform3D] set for a specific bone of this skeleton. */
        static skeletonBoneGetTransform(skeleton: Rid, bone: int64): Transform3D
        
        /** Sets the [Transform2D] for a specific bone of this skeleton. */
        static skeletonBoneSetTransform2D(skeleton: Rid, bone: int64, transform: Transform2D): void
        
        /** Returns the [Transform2D] set for a specific bone of this skeleton. */
        static skeletonBoneGetTransform2D(skeleton: Rid, bone: int64): Transform2D
        static skeletonSetBaseTransform2D(skeleton: Rid, baseTransform: Transform2D): void
        
        /** Creates a directional light and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID can be used in most `light_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *  To place in a scene, attach this directional light to an instance using [method instance_set_base] using the returned RID.  
         *      
         *  **Note:** The equivalent node is [DirectionalLight3D].  
         */
        static directionalLightCreate(): Rid
        
        /** Creates a new omni light and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID can be used in most `light_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *  To place in a scene, attach this omni light to an instance using [method instance_set_base] using the returned RID.  
         *      
         *  **Note:** The equivalent node is [OmniLight3D].  
         */
        static omniLightCreate(): Rid
        
        /** Creates a spot light and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID can be used in most `light_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *  To place in a scene, attach this spot light to an instance using [method instance_set_base] using the returned RID.  
         */
        static spotLightCreate(): Rid
        
        /** Sets the color of the light. Equivalent to [member Light3D.light_color]. */
        static lightSetColor(light: Rid, color: Color): void
        
        /** Sets the specified 3D light parameter. See [enum LightParam] for options. Equivalent to [method Light3D.set_param]. */
        static lightSetParam(light: Rid, param: RenderingServer.LightParam, value: float64): void
        
        /** If `true`, light will cast shadows. Equivalent to [member Light3D.shadow_enabled]. */
        static lightSetShadow(light: Rid, enabled: boolean): void
        
        /** Sets the projector texture to use for the specified 3D light. Equivalent to [member Light3D.light_projector]. */
        static lightSetProjector(light: Rid, texture: Rid): void
        
        /** If `true`, the 3D light will subtract light instead of adding light. Equivalent to [member Light3D.light_negative]. */
        static lightSetNegative(light: Rid, enable: boolean): void
        
        /** Sets the cull mask for this 3D light. Lights only affect objects in the selected layers. Equivalent to [member Light3D.light_cull_mask]. */
        static lightSetCullMask(light: Rid, mask: int64): void
        
        /** Sets the distance fade for this 3D light. This acts as a form of level of detail (LOD) and can be used to improve performance. Equivalent to [member Light3D.distance_fade_enabled], [member Light3D.distance_fade_begin], [member Light3D.distance_fade_shadow], and [member Light3D.distance_fade_length]. */
        static lightSetDistanceFade(decal: Rid, enabled: boolean, begin: float64, shadow: float64, length: float64): void
        
        /** If `true`, reverses the backface culling of the mesh. This can be useful when you have a flat mesh that has a light behind it. If you need to cast a shadow on both sides of the mesh, set the mesh to use double-sided shadows with [method instance_geometry_set_cast_shadows_setting]. Equivalent to [member Light3D.shadow_reverse_cull_face]. */
        static lightSetReverseCullFaceMode(light: Rid, enabled: boolean): void
        
        /** Sets the shadow caster mask for this 3D light. Shadows will only be cast using objects in the selected layers. Equivalent to [member Light3D.shadow_caster_mask]. */
        static lightSetShadowCasterMask(light: Rid, mask: int64): void
        
        /** Sets the bake mode to use for the specified 3D light. Equivalent to [member Light3D.light_bake_mode]. */
        static lightSetBakeMode(light: Rid, bakeMode: RenderingServer.LightBakeMode): void
        
        /** Sets the maximum SDFGI cascade in which the 3D light's indirect lighting is rendered. Higher values allow the light to be rendered in SDFGI further away from the camera. */
        static lightSetMaxSdfgiCascade(light: Rid, cascade: int64): void
        
        /** Sets whether to use a dual paraboloid or a cubemap for the shadow map. Dual paraboloid is faster but may suffer from artifacts. Equivalent to [member OmniLight3D.omni_shadow_mode]. */
        static lightOmniSetShadowMode(light: Rid, mode: RenderingServer.LightOmniShadowMode): void
        
        /** Sets the shadow mode for this directional light. Equivalent to [member DirectionalLight3D.directional_shadow_mode]. See [enum LightDirectionalShadowMode] for options. */
        static lightDirectionalSetShadowMode(light: Rid, mode: RenderingServer.LightDirectionalShadowMode): void
        
        /** If `true`, this directional light will blend between shadow map splits resulting in a smoother transition between them. Equivalent to [member DirectionalLight3D.directional_shadow_blend_splits]. */
        static lightDirectionalSetBlendSplits(light: Rid, enable: boolean): void
        
        /** If `true`, this light will not be used for anything except sky shaders. Use this for lights that impact your sky shader that you may want to hide from affecting the rest of the scene. For example, you may want to enable this when the sun in your sky shader falls below the horizon. */
        static lightDirectionalSetSkyMode(light: Rid, mode: RenderingServer.LightDirectionalSkyMode): void
        
        /** Sets the texture filter mode to use when rendering light projectors. This parameter is global and cannot be set on a per-light basis. */
        static lightProjectorsSetFilter(filter: RenderingServer.LightProjectorFilter): void
        
        /** Toggles whether a bicubic filter should be used when lightmaps are sampled. This smoothens their appearance at a performance cost. */
        static lightmapsSetBicubicFilter(enable: boolean): void
        
        /** Sets the filter quality for omni and spot light shadows in 3D. See also [member ProjectSettings.rendering/lights_and_shadows/positional_shadow/soft_shadow_filter_quality]. This parameter is global and cannot be set on a per-viewport basis. */
        static positionalSoftShadowFilterSetQuality(quality: RenderingServer.ShadowQuality): void
        
        /** Sets the filter [param quality] for directional light shadows in 3D. See also [member ProjectSettings.rendering/lights_and_shadows/directional_shadow/soft_shadow_filter_quality]. This parameter is global and cannot be set on a per-viewport basis. */
        static directionalSoftShadowFilterSetQuality(quality: RenderingServer.ShadowQuality): void
        
        /** Sets the [param size] of the directional light shadows in 3D. See also [member ProjectSettings.rendering/lights_and_shadows/directional_shadow/size]. This parameter is global and cannot be set on a per-viewport basis. */
        static directionalShadowAtlasSetSize(size: int64, is16Bits: boolean): void
        
        /** Creates a reflection probe and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `reflection_probe_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *  To place in a scene, attach this reflection probe to an instance using [method instance_set_base] using the returned RID.  
         *      
         *  **Note:** The equivalent node is [ReflectionProbe].  
         */
        static reflectionProbeCreate(): Rid
        
        /** Sets how often the reflection probe updates. Can either be once or every frame. See [enum ReflectionProbeUpdateMode] for options. */
        static reflectionProbeSetUpdateMode(probe: Rid, mode: RenderingServer.ReflectionProbeUpdateMode): void
        
        /** Sets the intensity of the reflection probe. Intensity modulates the strength of the reflection. Equivalent to [member ReflectionProbe.intensity]. */
        static reflectionProbeSetIntensity(probe: Rid, intensity: float64): void
        
        /** Sets the distance in meters over which a probe blends into the scene. */
        static reflectionProbeSetBlendDistance(probe: Rid, blendDistance: float64): void
        
        /** Sets the reflection probe's ambient light mode. Equivalent to [member ReflectionProbe.ambient_mode]. */
        static reflectionProbeSetAmbientMode(probe: Rid, mode: RenderingServer.ReflectionProbeAmbientMode): void
        
        /** Sets the reflection probe's custom ambient light color. Equivalent to [member ReflectionProbe.ambient_color]. */
        static reflectionProbeSetAmbientColor(probe: Rid, color: Color): void
        
        /** Sets the reflection probe's custom ambient light energy. Equivalent to [member ReflectionProbe.ambient_color_energy]. */
        static reflectionProbeSetAmbientEnergy(probe: Rid, energy: float64): void
        
        /** Sets the max distance away from the probe an object can be before it is culled. Equivalent to [member ReflectionProbe.max_distance]. */
        static reflectionProbeSetMaxDistance(probe: Rid, distance: float64): void
        
        /** Sets the size of the area that the reflection probe will capture. Equivalent to [member ReflectionProbe.size]. */
        static reflectionProbeSetSize(probe: Rid, size: Vector3): void
        
        /** Sets the origin offset to be used when this reflection probe is in box project mode. Equivalent to [member ReflectionProbe.origin_offset]. */
        static reflectionProbeSetOriginOffset(probe: Rid, offset: Vector3): void
        
        /** If `true`, reflections will ignore sky contribution. Equivalent to [member ReflectionProbe.interior]. */
        static reflectionProbeSetAsInterior(probe: Rid, enable: boolean): void
        
        /** If `true`, uses box projection. This can make reflections look more correct in certain situations. Equivalent to [member ReflectionProbe.box_projection]. */
        static reflectionProbeSetEnableBoxProjection(probe: Rid, enable: boolean): void
        
        /** If `true`, computes shadows in the reflection probe. This makes the reflection much slower to compute. Equivalent to [member ReflectionProbe.enable_shadows]. */
        static reflectionProbeSetEnableShadows(probe: Rid, enable: boolean): void
        
        /** Sets the render cull mask for this reflection probe. Only instances with a matching layer will be reflected by this probe. Equivalent to [member ReflectionProbe.cull_mask]. */
        static reflectionProbeSetCullMask(probe: Rid, layers: int64): void
        
        /** Sets the render reflection mask for this reflection probe. Only instances with a matching layer will have reflections applied from this probe. Equivalent to [member ReflectionProbe.reflection_mask]. */
        static reflectionProbeSetReflectionMask(probe: Rid, layers: int64): void
        
        /** Sets the resolution to use when rendering the specified reflection probe. The [param resolution] is specified for each cubemap face: for instance, specifying `512` will allocate 6 faces of 512×512 each (plus mipmaps for roughness levels). */
        static reflectionProbeSetResolution(probe: Rid, resolution: int64): void
        
        /** Sets the mesh level of detail to use in the reflection probe rendering. Higher values will use less detailed versions of meshes that have LOD variations generated, which can improve performance. Equivalent to [member ReflectionProbe.mesh_lod_threshold]. */
        static reflectionProbeSetMeshLodThreshold(probe: Rid, pixels: float64): void
        
        /** Creates a decal and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `decal_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *  To place in a scene, attach this decal to an instance using [method instance_set_base] using the returned RID.  
         *      
         *  **Note:** The equivalent node is [Decal].  
         */
        static decalCreate(): Rid
        
        /** Sets the [param size] of the decal specified by the [param decal] RID. Equivalent to [member Decal.size]. */
        static decalSetSize(decal: Rid, size: Vector3): void
        
        /** Sets the [param texture] in the given texture [param type] slot for the specified decal. Equivalent to [method Decal.set_texture]. */
        static decalSetTexture(decal: Rid, type: RenderingServer.DecalTexture, texture: Rid): void
        
        /** Sets the emission [param energy] in the decal specified by the [param decal] RID. Equivalent to [member Decal.emission_energy]. */
        static decalSetEmissionEnergy(decal: Rid, energy: float64): void
        
        /** Sets the [param albedo_mix] in the decal specified by the [param decal] RID. Equivalent to [member Decal.albedo_mix]. */
        static decalSetAlbedoMix(decal: Rid, albedoMix: float64): void
        
        /** Sets the color multiplier in the decal specified by the [param decal] RID to [param color]. Equivalent to [member Decal.modulate]. */
        static decalSetModulate(decal: Rid, color: Color): void
        
        /** Sets the cull [param mask] in the decal specified by the [param decal] RID. Equivalent to [member Decal.cull_mask]. */
        static decalSetCullMask(decal: Rid, mask: int64): void
        
        /** Sets the distance fade parameters in the decal specified by the [param decal] RID. Equivalent to [member Decal.distance_fade_enabled], [member Decal.distance_fade_begin] and [member Decal.distance_fade_length]. */
        static decalSetDistanceFade(decal: Rid, enabled: boolean, begin: float64, length: float64): void
        
        /** Sets the upper fade ([param above]) and lower fade ([param below]) in the decal specified by the [param decal] RID. Equivalent to [member Decal.upper_fade] and [member Decal.lower_fade]. */
        static decalSetFade(decal: Rid, above: float64, below: float64): void
        
        /** Sets the normal [param fade] in the decal specified by the [param decal] RID. Equivalent to [member Decal.normal_fade]. */
        static decalSetNormalFade(decal: Rid, fade: float64): void
        
        /** Sets the texture [param filter] mode to use when rendering decals. This parameter is global and cannot be set on a per-decal basis. */
        static decalsSetFilter(filter: RenderingServer.DecalFilter): void
        
        /** If [param half_resolution] is `true`, renders [VoxelGI] and SDFGI ([member Environment.sdfgi_enabled]) buffers at halved resolution on each axis (e.g. 960×540 when the viewport size is 1920×1080). This improves performance significantly when VoxelGI or SDFGI is enabled, at the cost of artifacts that may be visible on polygon edges. The loss in quality becomes less noticeable as the viewport resolution increases. [LightmapGI] rendering is not affected by this setting. Equivalent to [member ProjectSettings.rendering/global_illumination/gi/use_half_resolution]. */
        static gISetUseHalfResolution(halfResolution: boolean): void
        
        /** Creates a new voxel-based global illumination object and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `voxel_gi_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *      
         *  **Note:** The equivalent node is [VoxelGI].  
         */
        static voxelGICreate(): Rid
        static voxelGIAllocateData(voxelGI: Rid, toCellXform: Transform3D, aabb: Aabb, octreeSize: Vector3I, octreeCells: PackedByteArray | byte[] | ArrayBuffer, dataCells: PackedByteArray | byte[] | ArrayBuffer, distanceField: PackedByteArray | byte[] | ArrayBuffer, levelCounts: PackedInt32Array | int32[]): void
        static voxelGIGetOctreeSize(voxelGI: Rid): Vector3I
        static voxelGIGetOctreeCells(voxelGI: Rid): PackedByteArray
        static voxelGIGetDataCells(voxelGI: Rid): PackedByteArray
        static voxelGIGetDistanceField(voxelGI: Rid): PackedByteArray
        static voxelGIGetLevelCounts(voxelGI: Rid): PackedInt32Array
        static voxelGIGetToCellXform(voxelGI: Rid): Transform3D
        
        /** Sets the [member VoxelGIData.dynamic_range] value to use on the specified [param voxel_gi]'s [RID]. */
        static voxelGISetDynamicRange(voxelGI: Rid, range: float64): void
        
        /** Sets the [member VoxelGIData.propagation] value to use on the specified [param voxel_gi]'s [RID]. */
        static voxelGISetPropagation(voxelGI: Rid, amount: float64): void
        
        /** Sets the [member VoxelGIData.energy] value to use on the specified [param voxel_gi]'s [RID]. */
        static voxelGISetEnergy(voxelGI: Rid, energy: float64): void
        
        /** Used to inform the renderer what exposure normalization value was used while baking the voxel gi. This value will be used and modulated at run time to ensure that the voxel gi maintains a consistent level of exposure even if the scene-wide exposure normalization is changed at run time. For more information see [method camera_attributes_set_exposure]. */
        static voxelGISetBakedExposureNormalization(voxelGI: Rid, bakedExposure: float64): void
        
        /** Sets the [member VoxelGIData.bias] value to use on the specified [param voxel_gi]'s [RID]. */
        static voxelGISetBias(voxelGI: Rid, bias: float64): void
        
        /** Sets the [member VoxelGIData.normal_bias] value to use on the specified [param voxel_gi]'s [RID]. */
        static voxelGISetNormalBias(voxelGI: Rid, bias: float64): void
        
        /** Sets the [member VoxelGIData.interior] value to use on the specified [param voxel_gi]'s [RID]. */
        static voxelGISetInterior(voxelGI: Rid, enable: boolean): void
        
        /** Sets the [member VoxelGIData.use_two_bounces] value to use on the specified [param voxel_gi]'s [RID]. */
        static voxelGISetUseTwoBounces(voxelGI: Rid, enable: boolean): void
        
        /** Sets the [member ProjectSettings.rendering/global_illumination/voxel_gi/quality] value to use when rendering. This parameter is global and cannot be set on a per-VoxelGI basis. */
        static voxelGISetQuality(quality: RenderingServer.VoxelGIQuality): void
        
        /** Creates a new lightmap global illumination instance and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `lightmap_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *      
         *  **Note:** The equivalent node is [LightmapGI].  
         */
        static lightmapCreate(): Rid
        
        /** Set the textures on the given [param lightmap] GI instance to the texture array pointed to by the [param light] RID. If the lightmap texture was baked with [member LightmapGI.directional] set to `true`, then [param uses_sh] must also be `true`. */
        static lightmapSetTextures(lightmap: Rid, light: Rid, usesSh: boolean): void
        static lightmapSetProbeBounds(lightmap: Rid, bounds: Aabb): void
        static lightmapSetProbeInterior(lightmap: Rid, interior: boolean): void
        static lightmapSetProbeCaptureData(lightmap: Rid, points: PackedVector3Array | Vector3[], pointSh: PackedColorArray | Color[], tetrahedra: PackedInt32Array | int32[], bspTree: PackedInt32Array | int32[]): void
        static lightmapGetProbeCapturePoints(lightmap: Rid): PackedVector3Array
        static lightmapGetProbeCaptureSh(lightmap: Rid): PackedColorArray
        static lightmapGetProbeCaptureTetrahedra(lightmap: Rid): PackedInt32Array
        static lightmapGetProbeCaptureBspTree(lightmap: Rid): PackedInt32Array
        
        /** Used to inform the renderer what exposure normalization value was used while baking the lightmap. This value will be used and modulated at run time to ensure that the lightmap maintains a consistent level of exposure even if the scene-wide exposure normalization is changed at run time. For more information see [method camera_attributes_set_exposure]. */
        static lightmapSetBakedExposureNormalization(lightmap: Rid, bakedExposure: float64): void
        static lightmapSetProbeCaptureUpdateSpeed(speed: float64): void
        
        /** Creates a GPU-based particle system and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `particles_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *  To place in a scene, attach these particles to an instance using [method instance_set_base] using the returned RID.  
         *      
         *  **Note:** The equivalent nodes are [GPUParticles2D] and [GPUParticles3D].  
         *      
         *  **Note:** All `particles_*` methods only apply to GPU-based particles, not CPU-based particles. [CPUParticles2D] and [CPUParticles3D] do not have equivalent RenderingServer functions available, as these use [MultiMeshInstance2D] and [MultiMeshInstance3D] under the hood (see `multimesh_*` methods).  
         */
        static particlesCreate(): Rid
        
        /** Sets whether the GPU particles specified by the [param particles] RID should be rendered in 2D or 3D according to [param mode]. */
        static particlesSetMode(particles: Rid, mode: RenderingServer.ParticlesMode): void
        
        /** If `true`, particles will emit over time. Setting to `false` does not reset the particles, but only stops their emission. Equivalent to [member GPUParticles3D.emitting]. */
        static particlesSetEmitting(particles: Rid, emitting: boolean): void
        
        /** Returns `true` if particles are currently set to emitting. */
        static particlesGetEmitting(particles: Rid): boolean
        
        /** Sets the number of particles to be drawn and allocates the memory for them. Equivalent to [member GPUParticles3D.amount]. */
        static particlesSetAmount(particles: Rid, amount: int64): void
        
        /** Sets the amount ratio for particles to be emitted. Equivalent to [member GPUParticles3D.amount_ratio]. */
        static particlesSetAmountRatio(particles: Rid, ratio: float64): void
        
        /** Sets the lifetime of each particle in the system. Equivalent to [member GPUParticles3D.lifetime]. */
        static particlesSetLifetime(particles: Rid, lifetime: float64): void
        
        /** If `true`, particles will emit once and then stop. Equivalent to [member GPUParticles3D.one_shot]. */
        static particlesSetOneShot(particles: Rid, oneShot: boolean): void
        
        /** Sets the preprocess time for the particles' animation. This lets you delay starting an animation until after the particles have begun emitting. Equivalent to [member GPUParticles3D.preprocess]. */
        static particlesSetPreProcessTime(particles: Rid, time: float64): void
        
        /** Requests particles to process for extra process time during a single frame. */
        static particlesRequestProcessTime(particles: Rid, time: float64): void
        
        /** Sets the explosiveness ratio. Equivalent to [member GPUParticles3D.explosiveness]. */
        static particlesSetExplosivenessRatio(particles: Rid, ratio: float64): void
        
        /** Sets the emission randomness ratio. This randomizes the emission of particles within their phase. Equivalent to [member GPUParticles3D.randomness]. */
        static particlesSetRandomnessRatio(particles: Rid, ratio: float64): void
        
        /** Sets the value that informs a [ParticleProcessMaterial] to rush all particles towards the end of their lifetime. */
        static particlesSetInterpToEnd(particles: Rid, factor: float64): void
        
        /** Sets the velocity of a particle node, that will be used by [member ParticleProcessMaterial.inherit_velocity_ratio]. */
        static particlesSetEmitterVelocity(particles: Rid, velocity: Vector3): void
        
        /** Sets a custom axis-aligned bounding box for the particle system. Equivalent to [member GPUParticles3D.visibility_aabb]. */
        static particlesSetCustomAabb(particles: Rid, aabb: Aabb): void
        
        /** Sets the speed scale of the particle system. Equivalent to [member GPUParticles3D.speed_scale]. */
        static particlesSetSpeedScale(particles: Rid, scale: float64): void
        
        /** If `true`, particles use local coordinates. If `false` they use global coordinates. Equivalent to [member GPUParticles3D.local_coords]. */
        static particlesSetUseLocalCoordinates(particles: Rid, enable: boolean): void
        
        /** Sets the material for processing the particles.  
         *      
         *  **Note:** This is not the material used to draw the materials. Equivalent to [member GPUParticles3D.process_material].  
         */
        static particlesSetProcessMaterial(particles: Rid, material: Rid): void
        
        /** Sets the frame rate that the particle system rendering will be fixed to. Equivalent to [member GPUParticles3D.fixed_fps]. */
        static particlesSetFixedFps(particles: Rid, fps: int64): void
        static particlesSetInterpolate(particles: Rid, enable: boolean): void
        
        /** If `true`, uses fractional delta which smooths the movement of the particles. Equivalent to [member GPUParticles3D.fract_delta]. */
        static particlesSetFractionalDelta(particles: Rid, enable: boolean): void
        static particlesSetCollisionBaseSize(particles: Rid, size: float64): void
        static particlesSetTransformAlign(particles: Rid, align: RenderingServer.ParticlesTransformAlign): void
        
        /** If [param enable] is `true`, enables trails for the [param particles] with the specified [param length_sec] in seconds. Equivalent to [member GPUParticles3D.trail_enabled] and [member GPUParticles3D.trail_lifetime]. */
        static particlesSetTrails(particles: Rid, enable: boolean, lengthSec: float64): void
        static particlesSetTrailBindPoses(particles: Rid, bindPoses: GArray): void
        
        /** Returns `true` if particles are not emitting and particles are set to inactive. */
        static particlesIsInactive(particles: Rid): boolean
        
        /** Add particle system to list of particle systems that need to be updated. Update will take place on the next frame, or on the next call to [method instances_cull_aabb], [method instances_cull_convex], or [method instances_cull_ray]. */
        static particlesRequestProcess(particles: Rid): void
        
        /** Reset the particles on the next update. Equivalent to [method GPUParticles3D.restart]. */
        static particlesRestart(particles: Rid): void
        static particlesSetSubemitter(particles: Rid, subemitterParticles: Rid): void
        
        /** Manually emits particles from the [param particles] instance. */
        static particlesEmit(particles: Rid, transform: Transform3D, velocity: Vector3, color: Color, custom: Color, emitFlags: int64): void
        
        /** Sets the draw order of the particles to one of the named enums from [enum ParticlesDrawOrder]. See [enum ParticlesDrawOrder] for options. Equivalent to [member GPUParticles3D.draw_order]. */
        static particlesSetDrawOrder(particles: Rid, order: RenderingServer.ParticlesDrawOrder): void
        
        /** Sets the number of draw passes to use. Equivalent to [member GPUParticles3D.draw_passes]. */
        static particlesSetDrawPasses(particles: Rid, count: int64): void
        
        /** Sets the mesh to be used for the specified draw pass. Equivalent to [member GPUParticles3D.draw_pass_1], [member GPUParticles3D.draw_pass_2], [member GPUParticles3D.draw_pass_3], and [member GPUParticles3D.draw_pass_4]. */
        static particlesSetDrawPassMesh(particles: Rid, pass: int64, mesh: Rid): void
        
        /** Calculates and returns the axis-aligned bounding box that contains all the particles. Equivalent to [method GPUParticles3D.capture_aabb]. */
        static particlesGetCurrentAabb(particles: Rid): Aabb
        
        /** Sets the [Transform3D] that will be used by the particles when they first emit. */
        static particlesSetEmissionTransform(particles: Rid, transform: Transform3D): void
        
        /** Creates a new 3D GPU particle collision or attractor and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID can be used in most `particles_collision_*` RenderingServer functions.  
         *      
         *  **Note:** The equivalent nodes are [GPUParticlesCollision3D] and [GPUParticlesAttractor3D].  
         */
        static particlesCollisionCreate(): Rid
        
        /** Sets the collision or attractor shape [param type] for the 3D GPU particles collision or attractor specified by the [param particles_collision] RID. */
        static particlesCollisionSetCollisionType(particlesCollision: Rid, type: RenderingServer.ParticlesCollisionType): void
        
        /** Sets the cull [param mask] for the 3D GPU particles collision or attractor specified by the [param particles_collision] RID. Equivalent to [member GPUParticlesCollision3D.cull_mask] or [member GPUParticlesAttractor3D.cull_mask] depending on the [param particles_collision] type. */
        static particlesCollisionSetCullMask(particlesCollision: Rid, mask: int64): void
        
        /** Sets the [param radius] for the 3D GPU particles sphere collision or attractor specified by the [param particles_collision] RID. Equivalent to [member GPUParticlesCollisionSphere3D.radius] or [member GPUParticlesAttractorSphere3D.radius] depending on the [param particles_collision] type. */
        static particlesCollisionSetSphereRadius(particlesCollision: Rid, radius: float64): void
        
        /** Sets the [param extents] for the 3D GPU particles collision by the [param particles_collision] RID. Equivalent to [member GPUParticlesCollisionBox3D.size], [member GPUParticlesCollisionSDF3D.size], [member GPUParticlesCollisionHeightField3D.size], [member GPUParticlesAttractorBox3D.size] or [member GPUParticlesAttractorVectorField3D.size] depending on the [param particles_collision] type. */
        static particlesCollisionSetBoxExtents(particlesCollision: Rid, extents: Vector3): void
        
        /** Sets the [param strength] for the 3D GPU particles attractor specified by the [param particles_collision] RID. Only used for attractors, not colliders. Equivalent to [member GPUParticlesAttractor3D.strength]. */
        static particlesCollisionSetAttractorStrength(particlesCollision: Rid, strength: float64): void
        
        /** Sets the directionality [param amount] for the 3D GPU particles attractor specified by the [param particles_collision] RID. Only used for attractors, not colliders. Equivalent to [member GPUParticlesAttractor3D.directionality]. */
        static particlesCollisionSetAttractorDirectionality(particlesCollision: Rid, amount: float64): void
        
        /** Sets the attenuation [param curve] for the 3D GPU particles attractor specified by the [param particles_collision] RID. Only used for attractors, not colliders. Equivalent to [member GPUParticlesAttractor3D.attenuation]. */
        static particlesCollisionSetAttractorAttenuation(particlesCollision: Rid, curve: float64): void
        
        /** Sets the signed distance field [param texture] for the 3D GPU particles collision specified by the [param particles_collision] RID. Equivalent to [member GPUParticlesCollisionSDF3D.texture] or [member GPUParticlesAttractorVectorField3D.texture] depending on the [param particles_collision] type. */
        static particlesCollisionSetFieldTexture(particlesCollision: Rid, texture: Rid): void
        
        /** Requests an update for the 3D GPU particle collision heightfield. This may be automatically called by the 3D GPU particle collision heightfield depending on its [member GPUParticlesCollisionHeightField3D.update_mode]. */
        static particlesCollisionHeightFieldUpdate(particlesCollision: Rid): void
        
        /** Sets the heightmap [param resolution] for the 3D GPU particles heightfield collision specified by the [param particles_collision] RID. Equivalent to [member GPUParticlesCollisionHeightField3D.resolution]. */
        static particlesCollisionSetHeightFieldResolution(particlesCollision: Rid, resolution: RenderingServer.ParticlesCollisionHeightfieldResolution): void
        
        /** Sets the heightfield [param mask] for the 3D GPU particles heightfield collision specified by the [param particles_collision] RID. Equivalent to [member GPUParticlesCollisionHeightField3D.heightfield_mask]. */
        static particlesCollisionSetHeightFieldMask(particlesCollision: Rid, mask: int64): void
        
        /** Creates a new fog volume and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `fog_volume_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *      
         *  **Note:** The equivalent node is [FogVolume].  
         */
        static fogVolumeCreate(): Rid
        
        /** Sets the shape of the fog volume to either [constant RenderingServer.FOG_VOLUME_SHAPE_ELLIPSOID], [constant RenderingServer.FOG_VOLUME_SHAPE_CONE], [constant RenderingServer.FOG_VOLUME_SHAPE_CYLINDER], [constant RenderingServer.FOG_VOLUME_SHAPE_BOX] or [constant RenderingServer.FOG_VOLUME_SHAPE_WORLD]. */
        static fogVolumeSetShape(fogVolume: Rid, shape: RenderingServer.FogVolumeShape): void
        
        /** Sets the size of the fog volume when shape is [constant RenderingServer.FOG_VOLUME_SHAPE_ELLIPSOID], [constant RenderingServer.FOG_VOLUME_SHAPE_CONE], [constant RenderingServer.FOG_VOLUME_SHAPE_CYLINDER] or [constant RenderingServer.FOG_VOLUME_SHAPE_BOX]. */
        static fogVolumeSetSize(fogVolume: Rid, size: Vector3): void
        
        /** Sets the [Material] of the fog volume. Can be either a [FogMaterial] or a custom [ShaderMaterial]. */
        static fogVolumeSetMaterial(fogVolume: Rid, material: Rid): void
        
        /** Creates a new 3D visibility notifier object and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `visibility_notifier_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *  To place in a scene, attach this notifier to an instance using [method instance_set_base] using the returned RID.  
         *      
         *  **Note:** The equivalent node is [VisibleOnScreenNotifier3D].  
         */
        static visibilityNotifierCreate(): Rid
        static visibilityNotifierSetAabb(notifier: Rid, aabb: Aabb): void
        static visibilityNotifierSetCallbacks(notifier: Rid, enterCallable: Callable, exitCallable: Callable): void
        
        /** Creates an occluder instance and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `occluder_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *      
         *  **Note:** The equivalent resource is [Occluder3D] (not to be confused with the [OccluderInstance3D] node).  
         */
        static occluderCreate(): Rid
        
        /** Sets the mesh data for the given occluder RID, which controls the shape of the occlusion culling that will be performed. */
        static occluderSetMesh(occluder: Rid, vertices: PackedVector3Array | Vector3[], indices: PackedInt32Array | int32[]): void
        
        /** Creates a 3D camera and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `camera_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *      
         *  **Note:** The equivalent node is [Camera3D].  
         */
        static cameraCreate(): Rid
        
        /** Sets camera to use perspective projection. Objects on the screen becomes smaller when they are far away. */
        static cameraSetPerspective(camera: Rid, fovyDegrees: float64, zNear: float64, zFar: float64): void
        
        /** Sets camera to use orthogonal projection, also known as orthographic projection. Objects remain the same size on the screen no matter how far away they are. */
        static cameraSetOrthogonal(camera: Rid, size: float64, zNear: float64, zFar: float64): void
        
        /** Sets camera to use frustum projection. This mode allows adjusting the [param offset] argument to create "tilted frustum" effects. */
        static cameraSetFrustum(camera: Rid, size: float64, offset: Vector2, zNear: float64, zFar: float64): void
        
        /** Sets [Transform3D] of camera. */
        static cameraSetTransform(camera: Rid, transform: Transform3D): void
        
        /** Sets the cull mask associated with this camera. The cull mask describes which 3D layers are rendered by this camera. Equivalent to [member Camera3D.cull_mask]. */
        static cameraSetCullMask(camera: Rid, layers: int64): void
        
        /** Sets the environment used by this camera. Equivalent to [member Camera3D.environment]. */
        static cameraSetEnvironment(camera: Rid, env: Rid): void
        
        /** Sets the camera_attributes created with [method camera_attributes_create] to the given camera. */
        static cameraSetCameraAttributes(camera: Rid, effects: Rid): void
        
        /** Sets the compositor used by this camera. Equivalent to [member Camera3D.compositor]. */
        static cameraSetCompositor(camera: Rid, compositor: Rid): void
        
        /** If `true`, preserves the horizontal aspect ratio which is equivalent to [constant Camera3D.KEEP_WIDTH]. If `false`, preserves the vertical aspect ratio which is equivalent to [constant Camera3D.KEEP_HEIGHT]. */
        static cameraSetUseVerticalAspect(camera: Rid, enable: boolean): void
        
        /** Creates an empty viewport and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `viewport_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *      
         *  **Note:** The equivalent node is [Viewport].  
         */
        static viewportCreate(): Rid
        
        /** If `true`, the viewport uses augmented or virtual reality technologies. See [XRInterface]. */
        static viewportSetUseXR(viewport: Rid, useXR: boolean): void
        
        /** Sets the viewport's width and height in pixels. */
        static viewportSetSize(viewport: Rid, width: int64, height: int64): void
        
        /** If `true`, sets the viewport active, else sets it inactive. */
        static viewportSetActive(viewport: Rid, active: boolean): void
        
        /** Sets the viewport's parent to the viewport specified by the [param parent_viewport] RID. */
        static viewportSetParentViewport(viewport: Rid, parentViewport: Rid): void
        
        /** Copies the viewport to a region of the screen specified by [param rect]. If [method viewport_set_render_direct_to_screen] is `true`, then the viewport does not use a framebuffer and the contents of the viewport are rendered directly to screen. However, note that the root viewport is drawn last, therefore it will draw over the screen. Accordingly, you must set the root viewport to an area that does not cover the area that you have attached this viewport to.  
         *  For example, you can set the root viewport to not render at all with the following code:  
         *    
         *  Using this can result in significant optimization, especially on lower-end devices. However, it comes at the cost of having to manage your viewports manually. For further optimization, see [method viewport_set_render_direct_to_screen].  
         */
        static viewportAttachToScreen(viewport: Rid, rect?: Rect2 /* = new Rect2(0, 0, 0, 0) */, screen?: int64 /* = 0 */): void
        
        /** If `true`, render the contents of the viewport directly to screen. This allows a low-level optimization where you can skip drawing a viewport to the root viewport. While this optimization can result in a significant increase in speed (especially on older devices), it comes at a cost of usability. When this is enabled, you cannot read from the viewport or from the screen_texture. You also lose the benefit of certain window settings, such as the various stretch modes. Another consequence to be aware of is that in 2D the rendering happens in window coordinates, so if you have a viewport that is double the size of the window, and you set this, then only the portion that fits within the window will be drawn, no automatic scaling is possible, even if your game scene is significantly larger than the window size. */
        static viewportSetRenderDirectToScreen(viewport: Rid, enabled: boolean): void
        
        /** Sets the rendering mask associated with this [Viewport]. Only [CanvasItem] nodes with a matching rendering visibility layer will be rendered by this [Viewport]. */
        static viewportSetCanvasCullMask(viewport: Rid, canvasCullMask: int64): void
        
        /** Sets the 3D resolution scaling mode. Bilinear scaling renders at different resolution to either undersample or supersample the viewport. FidelityFX Super Resolution 1.0, abbreviated to FSR, is an upscaling technology that produces high quality images at fast framerates by using a spatially aware upscaling algorithm. FSR is slightly more expensive than bilinear, but it produces significantly higher image quality. FSR should be used where possible. */
        static viewportSetScaling3DMode(viewport: Rid, scaling3DMode: RenderingServer.ViewportScaling3DMode): void
        
        /** Scales the 3D render buffer based on the viewport size uses an image filter specified in [enum ViewportScaling3DMode] to scale the output image to the full viewport size. Values lower than `1.0` can be used to speed up 3D rendering at the cost of quality (undersampling). Values greater than `1.0` are only valid for bilinear mode and can be used to improve 3D rendering quality at a high performance cost (supersampling). See also [enum ViewportMSAA] for multi-sample antialiasing, which is significantly cheaper but only smoothens the edges of polygons.  
         *  When using FSR upscaling, AMD recommends exposing the following values as preset options to users "Ultra Quality: 0.77", "Quality: 0.67", "Balanced: 0.59", "Performance: 0.5" instead of exposing the entire scale.  
         */
        static viewportSetScaling3DScale(viewport: Rid, scale: float64): void
        
        /** Determines how sharp the upscaled image will be when using the FSR upscaling mode. Sharpness halves with every whole number. Values go from 0.0 (sharpest) to 2.0. Values above 2.0 won't make a visible difference. */
        static viewportSetFsrSharpness(viewport: Rid, sharpness: float64): void
        
        /** Affects the final texture sharpness by reading from a lower or higher mipmap (also called "texture LOD bias"). Negative values make mipmapped textures sharper but grainier when viewed at a distance, while positive values make mipmapped textures blurrier (even when up close). To get sharper textures at a distance without introducing too much graininess, set this between `-0.75` and `0.0`. Enabling temporal antialiasing ([member ProjectSettings.rendering/anti_aliasing/quality/use_taa]) can help reduce the graininess visible when using negative mipmap bias.  
         *      
         *  **Note:** When the 3D scaling mode is set to FSR 1.0, this value is used to adjust the automatic mipmap bias which is calculated internally based on the scale factor. The formula for this is `-log2(1.0 / scale) + mipmap_bias`.  
         */
        static viewportSetTextureMipmapBias(viewport: Rid, mipmapBias: float64): void
        
        /** Sets the maximum number of samples to take when using anisotropic filtering on textures (as a power of two). A higher sample count will result in sharper textures at oblique angles, but is more expensive to compute. A value of `0` forcibly disables anisotropic filtering, even on materials where it is enabled.  
         *  The anisotropic filtering level also affects decals and light projectors if they are configured to use anisotropic filtering. See [member ProjectSettings.rendering/textures/decals/filter] and [member ProjectSettings.rendering/textures/light_projectors/filter].  
         *      
         *  **Note:** In 3D, for this setting to have an effect, set [member BaseMaterial3D.texture_filter] to [constant BaseMaterial3D.TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC] or [constant BaseMaterial3D.TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC] on materials.  
         *      
         *  **Note:** In 2D, for this setting to have an effect, set [member CanvasItem.texture_filter] to [constant CanvasItem.TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC] or [constant CanvasItem.TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC] on the [CanvasItem] node displaying the texture (or in [CanvasTexture]). However, anisotropic filtering is rarely useful in 2D, so only enable it for textures in 2D if it makes a meaningful visual difference.  
         */
        static viewportSetAnisotropicFilteringLevel(viewport: Rid, anisotropicFilteringLevel: RenderingServer.ViewportAnisotropicFiltering): void
        
        /** Sets when the viewport should be updated. See [enum ViewportUpdateMode] constants for options. */
        static viewportSetUpdateMode(viewport: Rid, updateMode: RenderingServer.ViewportUpdateMode): void
        
        /** Returns the viewport's update mode. See [enum ViewportUpdateMode] constants for options.  
         *  **Warning:** Calling this from any thread other than the rendering thread will be detrimental to performance.  
         */
        static viewportGetUpdateMode(viewport: Rid): RenderingServer.ViewportUpdateMode
        
        /** Sets the clear mode of a viewport. See [enum ViewportClearMode] for options. */
        static viewportSetClearMode(viewport: Rid, clearMode: RenderingServer.ViewportClearMode): void
        
        /** Returns the render target for the viewport. */
        static viewportGetRenderTarget(viewport: Rid): Rid
        
        /** Returns the viewport's last rendered frame. */
        static viewportGetTexture(viewport: Rid): Rid
        
        /** If `true`, the viewport's 3D elements are not rendered. */
        static viewportSetDisable3D(viewport: Rid, disable: boolean): void
        
        /** If `true`, the viewport's canvas (i.e. 2D and GUI elements) is not rendered. */
        static viewportSetDisable2D(viewport: Rid, disable: boolean): void
        
        /** Sets the viewport's environment mode which allows enabling or disabling rendering of 3D environment over 2D canvas. When disabled, 2D will not be affected by the environment. When enabled, 2D will be affected by the environment if the environment background mode is [constant ENV_BG_CANVAS]. The default behavior is to inherit the setting from the viewport's parent. If the topmost parent is also set to [constant VIEWPORT_ENVIRONMENT_INHERIT], then the behavior will be the same as if it was set to [constant VIEWPORT_ENVIRONMENT_ENABLED]. */
        static viewportSetEnvironmentMode(viewport: Rid, mode: RenderingServer.ViewportEnvironmentMode): void
        
        /** Sets a viewport's camera. */
        static viewportAttachCamera(viewport: Rid, camera: Rid): void
        
        /** Sets a viewport's scenario. The scenario contains information about environment information, reflection atlas, etc. */
        static viewportSetScenario(viewport: Rid, scenario: Rid): void
        
        /** Sets a viewport's canvas. */
        static viewportAttachCanvas(viewport: Rid, canvas: Rid): void
        
        /** Detaches a viewport from a canvas. */
        static viewportRemoveCanvas(viewport: Rid, canvas: Rid): void
        
        /** If `true`, canvas item transforms (i.e. origin position) are snapped to the nearest pixel when rendering. This can lead to a crisper appearance at the cost of less smooth movement, especially when [Camera2D] smoothing is enabled. Equivalent to [member ProjectSettings.rendering/2d/snap/snap_2d_transforms_to_pixel]. */
        static viewportSetSnap2DTransformsToPixel(viewport: Rid, enabled: boolean): void
        
        /** If `true`, canvas item vertices (i.e. polygon points) are snapped to the nearest pixel when rendering. This can lead to a crisper appearance at the cost of less smooth movement, especially when [Camera2D] smoothing is enabled. Equivalent to [member ProjectSettings.rendering/2d/snap/snap_2d_vertices_to_pixel]. */
        static viewportSetSnap2DVerticesToPixel(viewport: Rid, enabled: boolean): void
        
        /** Sets the default texture filtering mode for the specified [param viewport] RID. See [enum CanvasItemTextureFilter] for options. */
        static viewportSetDefaultCanvasItemTextureFilter(viewport: Rid, filter: RenderingServer.CanvasItemTextureFilter): void
        
        /** Sets the default texture repeat mode for the specified [param viewport] RID. See [enum CanvasItemTextureRepeat] for options. */
        static viewportSetDefaultCanvasItemTextureRepeat(viewport: Rid, repeat: RenderingServer.CanvasItemTextureRepeat): void
        
        /** Sets the transformation of a viewport's canvas. */
        static viewportSetCanvasTransform(viewport: Rid, canvas: Rid, offset: Transform2D): void
        
        /** Sets the stacking order for a viewport's canvas.  
         *  [param layer] is the actual canvas layer, while [param sublayer] specifies the stacking order of the canvas among those in the same layer.  
         */
        static viewportSetCanvasStacking(viewport: Rid, canvas: Rid, layer: int64, sublayer: int64): void
        
        /** If `true`, the viewport renders its background as transparent. */
        static viewportSetTransparentBackground(viewport: Rid, enabled: boolean): void
        
        /** Sets the viewport's global transformation matrix. */
        static viewportSetGlobalCanvasTransform(viewport: Rid, transform: Transform2D): void
        
        /** Sets the viewport's 2D signed distance field [member ProjectSettings.rendering/2d/sdf/oversize] and [member ProjectSettings.rendering/2d/sdf/scale]. This is used when sampling the signed distance field in [CanvasItem] shaders as well as [GPUParticles2D] collision. This is  *not*  used by SDFGI in 3D rendering. */
        static viewportSetSdfOversizeAndScale(viewport: Rid, oversize: RenderingServer.ViewportSdfOversize, scale: RenderingServer.ViewportSdfScale): void
        
        /** Sets the [param size] of the shadow atlas's images (used for omni and spot lights) on the viewport specified by the [param viewport] RID. The value is rounded up to the nearest power of 2. If [param use_16_bits] is `true`, use 16 bits for the omni/spot shadow depth map. Enabling this results in shadows having less precision and may result in shadow acne, but can lead to performance improvements on some devices.  
         *      
         *  **Note:** If this is set to `0`, no positional shadows will be visible at all. This can improve performance significantly on low-end systems by reducing both the CPU and GPU load (as fewer draw calls are needed to draw the scene without shadows).  
         */
        static viewportSetPositionalShadowAtlasSize(viewport: Rid, size: int64, use16Bits?: boolean /* = false */): void
        
        /** Sets the number of subdivisions to use in the specified shadow atlas [param quadrant] for omni and spot shadows. See also [method Viewport.set_positional_shadow_atlas_quadrant_subdiv]. */
        static viewportSetPositionalShadowAtlasQuadrantSubdivision(viewport: Rid, quadrant: int64, subdivision: int64): void
        
        /** Sets the multisample antialiasing mode for 3D on the specified [param viewport] RID. See [enum ViewportMSAA] for options. Equivalent to [member ProjectSettings.rendering/anti_aliasing/quality/msaa_3d] or [member Viewport.msaa_3d]. */
        static viewportSetMsaa3D(viewport: Rid, msaa: RenderingServer.ViewportMsaa): void
        
        /** Sets the multisample antialiasing mode for 2D/Canvas on the specified [param viewport] RID. See [enum ViewportMSAA] for options. Equivalent to [member ProjectSettings.rendering/anti_aliasing/quality/msaa_2d] or [member Viewport.msaa_2d]. */
        static viewportSetMsaa2D(viewport: Rid, msaa: RenderingServer.ViewportMsaa): void
        
        /** If `true`, 2D rendering will use a high dynamic range (HDR) format framebuffer matching the bit depth of the 3D framebuffer. When using the Forward+ renderer this will be an `RGBA16` framebuffer, while when using the Mobile renderer it will be an `RGB10_A2` framebuffer. Additionally, 2D rendering will take place in linear color space and will be converted to sRGB space immediately before blitting to the screen (if the Viewport is attached to the screen). Practically speaking, this means that the end result of the Viewport will not be clamped into the `0-1` range and can be used in 3D rendering without color space adjustments. This allows 2D rendering to take advantage of effects requiring high dynamic range (e.g. 2D glow) as well as substantially improves the appearance of effects requiring highly detailed gradients. This setting has the same effect as [member Viewport.use_hdr_2d].  
         *      
         *  **Note:** This setting will have no effect when using the Compatibility renderer, which always renders in low dynamic range for performance reasons.  
         */
        static viewportSetUseHdr2D(viewport: Rid, enabled: boolean): void
        
        /** Sets the viewport's screen-space antialiasing mode. Equivalent to [member ProjectSettings.rendering/anti_aliasing/quality/screen_space_aa] or [member Viewport.screen_space_aa]. */
        static viewportSetScreenSpaceAA(viewport: Rid, mode: RenderingServer.ViewportScreenSpaceAA): void
        
        /** If `true`, use temporal antialiasing. Equivalent to [member ProjectSettings.rendering/anti_aliasing/quality/use_taa] or [member Viewport.use_taa]. */
        static viewportSetUseTaa(viewport: Rid, enable: boolean): void
        
        /** If `true`, enables debanding on the specified viewport. Equivalent to [member ProjectSettings.rendering/anti_aliasing/quality/use_debanding] or [member Viewport.use_debanding]. */
        static viewportSetUseDebanding(viewport: Rid, enable: boolean): void
        
        /** If `true`, enables occlusion culling on the specified viewport. Equivalent to [member ProjectSettings.rendering/occlusion_culling/use_occlusion_culling]. */
        static viewportSetUseOcclusionCulling(viewport: Rid, enable: boolean): void
        
        /** Sets the [member ProjectSettings.rendering/occlusion_culling/occlusion_rays_per_thread] to use for occlusion culling. This parameter is global and cannot be set on a per-viewport basis. */
        static viewportSetOcclusionRaysPerThread(raysPerThread: int64): void
        
        /** Sets the [member ProjectSettings.rendering/occlusion_culling/bvh_build_quality] to use for occlusion culling. This parameter is global and cannot be set on a per-viewport basis. */
        static viewportSetOcclusionCullingBuildQuality(quality: RenderingServer.ViewportOcclusionCullingBuildQuality): void
        
        /** Returns a statistic about the rendering engine which can be used for performance profiling. This is separated into render pass [param type]s, each of them having the same [param info]s you can query (different passes will return different values). See [enum RenderingServer.ViewportRenderInfoType] for a list of render pass types and [enum RenderingServer.ViewportRenderInfo] for a list of information that can be queried.  
         *  See also [method get_rendering_info], which returns global information across all viewports.  
         *      
         *  **Note:** Viewport rendering information is not available until at least 2 frames have been rendered by the engine. If rendering information is not available, [method viewport_get_render_info] returns `0`. To print rendering information in `_ready()` successfully, use the following:  
         *    
         */
        static viewportGetRenderInfo(viewport: Rid, type: RenderingServer.ViewportRenderInfoType, info: RenderingServer.ViewportRenderInfo): int64
        
        /** Sets the debug draw mode of a viewport. See [enum ViewportDebugDraw] for options. */
        static viewportSetDebugDraw(viewport: Rid, draw: RenderingServer.ViewportDebugDraw): void
        
        /** Sets the measurement for the given [param viewport] RID (obtained using [method Viewport.get_viewport_rid]). Once enabled, [method viewport_get_measured_render_time_cpu] and [method viewport_get_measured_render_time_gpu] will return values greater than `0.0` when queried with the given [param viewport]. */
        static viewportSetMeasureRenderTime(viewport: Rid, enable: boolean): void
        
        /** Returns the CPU time taken to render the last frame in milliseconds. This  *only*  includes time spent in rendering-related operations; scripts' `_process` functions and other engine subsystems are not included in this readout. To get a complete readout of CPU time spent to render the scene, sum the render times of all viewports that are drawn every frame plus [method get_frame_setup_time_cpu]. Unlike [method Engine.get_frames_per_second], this method will accurately reflect CPU utilization even if framerate is capped via V-Sync or [member Engine.max_fps]. See also [method viewport_get_measured_render_time_gpu].  
         *      
         *  **Note:** Requires measurements to be enabled on the specified [param viewport] using [method viewport_set_measure_render_time]. Otherwise, this method returns `0.0`.  
         */
        static viewportGetMeasuredRenderTimeCpu(viewport: Rid): float64
        
        /** Returns the GPU time taken to render the last frame in milliseconds. To get a complete readout of GPU time spent to render the scene, sum the render times of all viewports that are drawn every frame. Unlike [method Engine.get_frames_per_second], this method accurately reflects GPU utilization even if framerate is capped via V-Sync or [member Engine.max_fps]. See also [method viewport_get_measured_render_time_cpu].  
         *      
         *  **Note:** Requires measurements to be enabled on the specified [param viewport] using [method viewport_set_measure_render_time]. Otherwise, this method returns `0.0`.  
         *      
         *  **Note:** When GPU utilization is low enough during a certain period of time, GPUs will decrease their power state (which in turn decreases core and memory clock speeds). This can cause the reported GPU time to increase if GPU utilization is kept low enough by a framerate cap (compared to what it would be at the GPU's highest power state). Keep this in mind when benchmarking using [method viewport_get_measured_render_time_gpu]. This behavior can be overridden in the graphics driver settings at the cost of higher power usage.  
         */
        static viewportGetMeasuredRenderTimeGpu(viewport: Rid): float64
        
        /** Sets the Variable Rate Shading (VRS) mode for the viewport. If the GPU does not support VRS, this property is ignored. Equivalent to [member ProjectSettings.rendering/vrs/mode]. */
        static viewportSetVrsMode(viewport: Rid, mode: RenderingServer.ViewportVrsMode): void
        
        /** Sets the update mode for Variable Rate Shading (VRS) for the viewport. VRS requires the input texture to be converted to the format usable by the VRS method supported by the hardware. The update mode defines how often this happens. If the GPU does not support VRS, or VRS is not enabled, this property is ignored.  
         *  If set to [constant RenderingServer.VIEWPORT_VRS_UPDATE_ONCE], the input texture is copied once and the mode is changed to [constant RenderingServer.VIEWPORT_VRS_UPDATE_DISABLED].  
         */
        static viewportSetVrsUpdateMode(viewport: Rid, mode: RenderingServer.ViewportVrsUpdateMode): void
        
        /** The texture to use when the VRS mode is set to [constant RenderingServer.VIEWPORT_VRS_TEXTURE]. Equivalent to [member ProjectSettings.rendering/vrs/texture]. */
        static viewportSetVrsTexture(viewport: Rid, texture: Rid): void
        
        /** Creates an empty sky and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `sky_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         */
        static skyCreate(): Rid
        
        /** Sets the [param radiance_size] of the sky specified by the [param sky] RID (in pixels). Equivalent to [member Sky.radiance_size]. */
        static skySetRadianceSize(sky: Rid, radianceSize: int64): void
        
        /** Sets the process [param mode] of the sky specified by the [param sky] RID. Equivalent to [member Sky.process_mode]. */
        static skySetMode(sky: Rid, mode: RenderingServer.SkyMode): void
        
        /** Sets the material that the sky uses to render the background, ambient and reflection maps. */
        static skySetMaterial(sky: Rid, material: Rid): void
        
        /** Generates and returns an [Image] containing the radiance map for the specified [param sky] RID. This supports built-in sky material and custom sky shaders. If [param bake_irradiance] is `true`, the irradiance map is saved instead of the radiance map. The radiance map is used to render reflected light, while the irradiance map is used to render ambient light. See also [method environment_bake_panorama].  
         *      
         *  **Note:** The image is saved in linear color space without any tonemapping performed, which means it will look too dark if viewed directly in an image editor. [param energy] values above `1.0` can be used to brighten the resulting image.  
         *      
         *  **Note:** [param size] should be a 2:1 aspect ratio for the generated panorama to have square pixels. For radiance maps, there is no point in using a height greater than [member Sky.radiance_size], as it won't increase detail. Irradiance maps only contain low-frequency data, so there is usually no point in going past a size of 128×64 pixels when saving an irradiance map.  
         */
        static skyBakePanorama(sky: Rid, energy: float64, bakeIrradiance: boolean, size: Vector2I): null | Image
        
        /** Creates a new rendering effect and adds it to the RenderingServer. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         */
        static compositorEffectCreate(): Rid
        
        /** Enables/disables this rendering effect. */
        static compositorEffectSetEnabled(effect: Rid, enabled: boolean): void
        
        /** Sets the callback type ([param callback_type]) and callback method([param callback]) for this rendering effect. */
        static compositorEffectSetCallback(effect: Rid, callbackType: RenderingServer.CompositorEffectCallbackType, callback: Callable): void
        
        /** Sets the flag ([param flag]) for this rendering effect to `true` or `false` ([param set]). */
        static compositorEffectSetFlag(effect: Rid, flag: RenderingServer.CompositorEffectFlags, set: boolean): void
        
        /** Creates a new compositor and adds it to the RenderingServer. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         */
        static compositorCreate(): Rid
        
        /** Sets the compositor effects for the specified compositor RID. [param effects] should be an array containing RIDs created with [method compositor_effect_create]. */
        static compositorSetCompositorEffects(compositor: Rid, effects: GArray): void
        
        /** Creates an environment and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `environment_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *      
         *  **Note:** The equivalent resource is [Environment].  
         */
        static environmentCreate(): Rid
        
        /** Sets the environment's background mode. Equivalent to [member Environment.background_mode]. */
        static environmentSetBackground(env: Rid, bg: RenderingServer.EnvironmentBG): void
        
        /** Sets the camera ID to be used as environment background. */
        static environmentSetCameraId(env: Rid, id: int64): void
        
        /** Sets the [Sky] to be used as the environment's background when using  *BGMode*  sky. Equivalent to [member Environment.sky]. */
        static environmentSetSky(env: Rid, sky: Rid): void
        
        /** Sets a custom field of view for the background [Sky]. Equivalent to [member Environment.sky_custom_fov]. */
        static environmentSetSkyCustomFov(env: Rid, scale: float64): void
        
        /** Sets the rotation of the background [Sky] expressed as a [Basis]. Equivalent to [member Environment.sky_rotation], where the rotation vector is used to construct the [Basis]. */
        static environmentSetSkyOrientation(env: Rid, orientation: Basis): void
        
        /** Color displayed for clear areas of the scene. Only effective if using the [constant ENV_BG_COLOR] background mode. */
        static environmentSetBgColor(env: Rid, color: Color): void
        
        /** Sets the intensity of the background color. */
        static environmentSetBgEnergy(env: Rid, multiplier: float64, exposureValue: float64): void
        
        /** Sets the maximum layer to use if using Canvas background mode. */
        static environmentSetCanvasMaxLayer(env: Rid, maxLayer: int64): void
        
        /** Sets the values to be used for ambient light rendering. See [Environment] for more details. */
        static environmentSetAmbientLight(env: Rid, color: Color, ambient?: RenderingServer.EnvironmentAmbientSource /* = 0 */, energy?: float64 /* = 1 */, skyContribution?: float64 /* = 0 */, reflectionSource?: RenderingServer.EnvironmentReflectionSource /* = 0 */): void
        
        /** Configures glow for the specified environment RID. See `glow_*` properties in [Environment] for more information. */
        static environmentSetGlow(env: Rid, enable: boolean, levels: PackedFloat32Array | float32[], intensity: float64, strength: float64, mix: float64, bloomThreshold: float64, blendMode: RenderingServer.EnvironmentGlowBlendMode, hdrBleedThreshold: float64, hdrBleedScale: float64, hdrLuminanceCap: float64, glowMapStrength: float64, glowMap: Rid): void
        
        /** Sets the variables to be used with the "tonemap" post-process effect. See [Environment] for more details. */
        static environmentSetTonemap(env: Rid, toneMapper: RenderingServer.EnvironmentToneMapper, exposure: float64, white: float64): void
        
        /** Sets the values to be used with the "adjustments" post-process effect. See [Environment] for more details. */
        static environmentSetAdjustment(env: Rid, enable: boolean, brightness: float64, contrast: float64, saturation: float64, use1DColorCorrection: boolean, colorCorrection: Rid): void
        
        /** Sets the variables to be used with the screen-space reflections (SSR) post-process effect. See [Environment] for more details. */
        static environmentSetSsr(env: Rid, enable: boolean, maxSteps: int64, fadeIn: float64, fadeOut: float64, depthTolerance: float64): void
        
        /** Sets the variables to be used with the screen-space ambient occlusion (SSAO) post-process effect. See [Environment] for more details. */
        static environmentSetSsao(env: Rid, enable: boolean, radius: float64, intensity: float64, power: float64, detail: float64, horizon: float64, sharpness: float64, lightAffect: float64, aOChannelAffect: float64): void
        
        /** Configures fog for the specified environment RID. See `fog_*` properties in [Environment] for more information. */
        static environmentSetFog(env: Rid, enable: boolean, lightColor: Color, lightEnergy: float64, sunScatter: float64, density: float64, height: float64, heightDensity: float64, aerialPerspective: float64, skyAffect: float64, fogMode?: RenderingServer.EnvironmentFogMode /* = 0 */): void
        
        /** Configures fog depth for the specified environment RID. Only has an effect when the fog mode of the environment is [constant ENV_FOG_MODE_DEPTH]. See `fog_depth_*` properties in [Environment] for more information. */
        static environmentSetFogDepth(env: Rid, curve: float64, begin: float64, end: float64): void
        
        /** Configures signed distance field global illumination for the specified environment RID. See `sdfgi_*` properties in [Environment] for more information. */
        static environmentSetSdfgi(env: Rid, enable: boolean, cascades: int64, minCellSize: float64, yScale: RenderingServer.EnvironmentSdfgiyScale, useOcclusion: boolean, bounceFeedback: float64, readSky: boolean, energy: float64, normalBias: float64, probeBias: float64): void
        
        /** Sets the variables to be used with the volumetric fog post-process effect. See [Environment] for more details. */
        static environmentSetVolumetricFog(env: Rid, enable: boolean, density: float64, albedo: Color, emission: Color, emissionEnergy: float64, anisotropy: float64, length: float64, pDetailSpread: float64, gIInject: float64, temporalReprojection: boolean, temporalReprojectionAmount: float64, ambientInject: float64, skyAffect: float64): void
        
        /** If [param enable] is `true`, enables bicubic upscaling for glow which improves quality at the cost of performance. Equivalent to [member ProjectSettings.rendering/environment/glow/upscale_mode].  
         *      
         *  **Note:** This setting is only effective when using the Forward+ or Mobile rendering methods, as Compatibility uses a different glow implementation.  
         */
        static environmentGlowSetUseBicubicUpscale(enable: boolean): void
        static environmentSetSsrRoughnessQuality(quality: RenderingServer.EnvironmentSsrRoughnessQuality): void
        
        /** Sets the quality level of the screen-space ambient occlusion (SSAO) post-process effect. See [Environment] for more details. */
        static environmentSetSsaoQuality(quality: RenderingServer.EnvironmentSsaoQuality, halfSize: boolean, adaptiveTarget: float64, blurPasses: int64, fadeOutFrom: float64, fadeOutTo: float64): void
        
        /** Sets the quality level of the screen-space indirect lighting (SSIL) post-process effect. See [Environment] for more details. */
        static environmentSetSsilQuality(quality: RenderingServer.EnvironmentSsilQuality, halfSize: boolean, adaptiveTarget: float64, blurPasses: int64, fadeOutFrom: float64, fadeOutTo: float64): void
        
        /** Sets the number of rays to throw per frame when computing signed distance field global illumination. Equivalent to [member ProjectSettings.rendering/global_illumination/sdfgi/probe_ray_count]. */
        static environmentSetSdfgiRayCount(rayCount: RenderingServer.EnvironmentSdfgiRayCount): void
        
        /** Sets the number of frames to use for converging signed distance field global illumination. Equivalent to [member ProjectSettings.rendering/global_illumination/sdfgi/frames_to_converge]. */
        static environmentSetSdfgiFramesToConverge(frames: RenderingServer.EnvironmentSdfgiFramesToConverge): void
        
        /** Sets the update speed for dynamic lights' indirect lighting when computing signed distance field global illumination. Equivalent to [member ProjectSettings.rendering/global_illumination/sdfgi/frames_to_update_lights]. */
        static environmentSetSdfgiFramesToUpdateLight(frames: RenderingServer.EnvironmentSdfgiFramesToUpdateLight): void
        
        /** Sets the resolution of the volumetric fog's froxel buffer. [param size] is modified by the screen's aspect ratio and then used to set the width and height of the buffer. While [param depth] is directly used to set the depth of the buffer. */
        static environmentSetVolumetricFogVolumeSize(size: int64, depth: int64): void
        
        /** Enables filtering of the volumetric fog scattering buffer. This results in much smoother volumes with very few under-sampling artifacts. */
        static environmentSetVolumetricFogFilterActive(active: boolean): void
        
        /** Generates and returns an [Image] containing the radiance map for the specified [param environment] RID's sky. This supports built-in sky material and custom sky shaders. If [param bake_irradiance] is `true`, the irradiance map is saved instead of the radiance map. The radiance map is used to render reflected light, while the irradiance map is used to render ambient light. See also [method sky_bake_panorama].  
         *      
         *  **Note:** The image is saved in linear color space without any tonemapping performed, which means it will look too dark if viewed directly in an image editor.  
         *      
         *  **Note:** [param size] should be a 2:1 aspect ratio for the generated panorama to have square pixels. For radiance maps, there is no point in using a height greater than [member Sky.radiance_size], as it won't increase detail. Irradiance maps only contain low-frequency data, so there is usually no point in going past a size of 128×64 pixels when saving an irradiance map.  
         */
        static environmentBakePanorama(environment: Rid, bakeIrradiance: boolean, size: Vector2I): null | Image
        
        /** Sets the screen-space roughness limiter parameters, such as whether it should be enabled and its thresholds. Equivalent to [member ProjectSettings.rendering/anti_aliasing/screen_space_roughness_limiter/enabled], [member ProjectSettings.rendering/anti_aliasing/screen_space_roughness_limiter/amount] and [member ProjectSettings.rendering/anti_aliasing/screen_space_roughness_limiter/limit]. */
        static screenSpaceRoughnessLimiterSetActive(enable: boolean, amount: float64, limit: float64): void
        
        /** Sets [member ProjectSettings.rendering/environment/subsurface_scattering/subsurface_scattering_quality] to use when rendering materials that have subsurface scattering enabled. */
        static subSurfaceScatteringSetQuality(quality: RenderingServer.SubSurfaceScatteringQuality): void
        
        /** Sets the [member ProjectSettings.rendering/environment/subsurface_scattering/subsurface_scattering_scale] and [member ProjectSettings.rendering/environment/subsurface_scattering/subsurface_scattering_depth_scale] to use when rendering materials that have subsurface scattering enabled. */
        static subSurfaceScatteringSetScale(scale: float64, depthScale: float64): void
        
        /** Creates a camera attributes object and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `camera_attributes_` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *      
         *  **Note:** The equivalent resource is [CameraAttributes].  
         */
        static cameraAttributesCreate(): Rid
        
        /** Sets the quality level of the DOF blur effect to one of the options in [enum DOFBlurQuality]. [param use_jitter] can be used to jitter samples taken during the blur pass to hide artifacts at the cost of looking more fuzzy. */
        static cameraAttributesSetDofBlurQuality(quality: RenderingServer.DofBlurQuality, useJitter: boolean): void
        
        /** Sets the shape of the DOF bokeh pattern. Different shapes may be used to achieve artistic effect, or to meet performance targets. For more detail on available options see [enum DOFBokehShape]. */
        static cameraAttributesSetDofBlurBokehShape(shape: RenderingServer.DofBokehShape): void
        
        /** Sets the parameters to use with the DOF blur effect. These parameters take on the same meaning as their counterparts in [CameraAttributesPractical]. */
        static cameraAttributesSetDofBlur(cameraAttributes: Rid, farEnable: boolean, farDistance: float64, farTransition: float64, nearEnable: boolean, nearDistance: float64, nearTransition: float64, amount: float64): void
        
        /** Sets the exposure values that will be used by the renderers. The normalization amount is used to bake a given Exposure Value (EV) into rendering calculations to reduce the dynamic range of the scene.  
         *  The normalization factor can be calculated from exposure value (EV100) as follows:  
         *    
         *  The exposure value can be calculated from aperture (in f-stops), shutter speed (in seconds), and sensitivity (in ISO) as follows:  
         *    
         */
        static cameraAttributesSetExposure(cameraAttributes: Rid, multiplier: float64, normalization: float64): void
        
        /** Sets the parameters to use with the auto-exposure effect. These parameters take on the same meaning as their counterparts in [CameraAttributes] and [CameraAttributesPractical]. */
        static cameraAttributesSetAutoExposure(cameraAttributes: Rid, enable: boolean, minSensitivity: float64, maxSensitivity: float64, speed: float64, scale: float64): void
        
        /** Creates a scenario and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `scenario_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *  The scenario is the 3D world that all the visual instances exist in.  
         */
        static scenarioCreate(): Rid
        
        /** Sets the environment that will be used with this scenario. See also [Environment]. */
        static scenarioSetEnvironment(scenario: Rid, environment: Rid): void
        
        /** Sets the fallback environment to be used by this scenario. The fallback environment is used if no environment is set. Internally, this is used by the editor to provide a default environment. */
        static scenarioSetFallbackEnvironment(scenario: Rid, environment: Rid): void
        
        /** Sets the camera attributes ([param effects]) that will be used with this scenario. See also [CameraAttributes]. */
        static scenarioSetCameraAttributes(scenario: Rid, effects: Rid): void
        
        /** Sets the compositor ([param compositor]) that will be used with this scenario. See also [Compositor]. */
        static scenarioSetCompositor(scenario: Rid, compositor: Rid): void
        
        /** Creates a visual instance, adds it to the RenderingServer, and sets both base and scenario. It can be accessed with the RID that is returned. This RID will be used in all `instance_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method. This is a shorthand for using [method instance_create] and setting the base and scenario manually.  
         */
        static instanceCreate2(base: Rid, scenario: Rid): Rid
        
        /** Creates a visual instance and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `instance_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *  An instance is a way of placing a 3D object in the scenario. Objects like particles, meshes, reflection probes and decals need to be associated with an instance to be visible in the scenario using [method instance_set_base].  
         *      
         *  **Note:** The equivalent node is [VisualInstance3D].  
         */
        static instanceCreate(): Rid
        
        /** Sets the base of the instance. A base can be any of the 3D objects that are created in the RenderingServer that can be displayed. For example, any of the light types, mesh, multimesh, particle system, reflection probe, decal, lightmap, voxel GI and visibility notifiers are all types that can be set as the base of an instance in order to be displayed in the scenario. */
        static instanceSetBase(instance: Rid, base: Rid): void
        
        /** Sets the scenario that the instance is in. The scenario is the 3D world that the objects will be displayed in. */
        static instanceSetScenario(instance: Rid, scenario: Rid): void
        
        /** Sets the render layers that this instance will be drawn to. Equivalent to [member VisualInstance3D.layers]. */
        static instanceSetLayerMask(instance: Rid, mask: int64): void
        
        /** Sets the sorting offset and switches between using the bounding box or instance origin for depth sorting. */
        static instanceSetPivotData(instance: Rid, sortingOffset: float64, useAabbCenter: boolean): void
        
        /** Sets the world space transform of the instance. Equivalent to [member Node3D.global_transform]. */
        static instanceSetTransform(instance: Rid, transform: Transform3D): void
        
        /** Attaches a unique Object ID to instance. Object ID must be attached to instance for proper culling with [method instances_cull_aabb], [method instances_cull_convex], and [method instances_cull_ray]. */
        static instanceAttachObjectInstanceId(instance: Rid, id: int64): void
        
        /** Sets the weight for a given blend shape associated with this instance. */
        static instanceSetBlendShapeWeight(instance: Rid, shape: int64, weight: float64): void
        
        /** Sets the override material of a specific surface. Equivalent to [method MeshInstance3D.set_surface_override_material]. */
        static instanceSetSurfaceOverrideMaterial(instance: Rid, surface: int64, material: Rid): void
        
        /** Sets whether an instance is drawn or not. Equivalent to [member Node3D.visible]. */
        static instanceSetVisible(instance: Rid, visible: boolean): void
        
        /** Sets the transparency for the given geometry instance. Equivalent to [member GeometryInstance3D.transparency].  
         *  A transparency of `0.0` is fully opaque, while `1.0` is fully transparent. Values greater than `0.0` (exclusive) will force the geometry's materials to go through the transparent pipeline, which is slower to render and can exhibit rendering issues due to incorrect transparency sorting. However, unlike using a transparent material, setting [param transparency] to a value greater than `0.0` (exclusive) will  *not*  disable shadow rendering.  
         *  In spatial shaders, `1.0 - transparency` is set as the default value of the `ALPHA` built-in.  
         *      
         *  **Note:** [param transparency] is clamped between `0.0` and `1.0`, so this property cannot be used to make transparent materials more opaque than they originally are.  
         */
        static instanceGeometrySetTransparency(instance: Rid, transparency: float64): void
        
        /** Resets motion vectors and other interpolated values. Use this  *after*  teleporting a mesh from one position to another to avoid ghosting artifacts. */
        static instanceTeleport(instance: Rid): void
        
        /** Sets a custom AABB to use when culling objects from the view frustum. Equivalent to setting [member GeometryInstance3D.custom_aabb]. */
        static instanceSetCustomAabb(instance: Rid, aabb: Aabb): void
        
        /** Attaches a skeleton to an instance. Removes the previous skeleton from the instance. */
        static instanceAttachSkeleton(instance: Rid, skeleton: Rid): void
        
        /** Sets a margin to increase the size of the AABB when culling objects from the view frustum. This allows you to avoid culling objects that fall outside the view frustum. Equivalent to [member GeometryInstance3D.extra_cull_margin]. */
        static instanceSetExtraVisibilityMargin(instance: Rid, margin: float64): void
        
        /** Sets the visibility parent for the given instance. Equivalent to [member Node3D.visibility_parent]. */
        static instanceSetVisibilityParent(instance: Rid, parent: Rid): void
        
        /** If `true`, ignores both frustum and occlusion culling on the specified 3D geometry instance. This is not the same as [member GeometryInstance3D.ignore_occlusion_culling], which only ignores occlusion culling and leaves frustum culling intact. */
        static instanceSetIgnoreCulling(instance: Rid, enabled: boolean): void
        
        /** Sets the flag for a given [enum InstanceFlags]. See [enum InstanceFlags] for more details. */
        static instanceGeometrySetFlag(instance: Rid, flag: RenderingServer.InstanceFlags, enabled: boolean): void
        
        /** Sets the shadow casting setting to one of [enum ShadowCastingSetting]. Equivalent to [member GeometryInstance3D.cast_shadow]. */
        static instanceGeometrySetCastShadowsSetting(instance: Rid, shadowCastingSetting: RenderingServer.ShadowCastingSetting): void
        
        /** Sets a material that will override the material for all surfaces on the mesh associated with this instance. Equivalent to [member GeometryInstance3D.material_override]. */
        static instanceGeometrySetMaterialOverride(instance: Rid, material: Rid): void
        
        /** Sets a material that will be rendered for all surfaces on top of active materials for the mesh associated with this instance. Equivalent to [member GeometryInstance3D.material_overlay]. */
        static instanceGeometrySetMaterialOverlay(instance: Rid, material: Rid): void
        
        /** Sets the visibility range values for the given geometry instance. Equivalent to [member GeometryInstance3D.visibility_range_begin] and related properties. */
        static instanceGeometrySetVisibilityRange(instance: Rid, min: float64, max: float64, minMargin: float64, maxMargin: float64, fadeMode: RenderingServer.VisibilityRangeFadeMode): void
        
        /** Sets the lightmap GI instance to use for the specified 3D geometry instance. The lightmap UV scale for the specified instance (equivalent to [member GeometryInstance3D.gi_lightmap_scale]) and lightmap atlas slice must also be specified. */
        static instanceGeometrySetLightmap(instance: Rid, lightmap: Rid, lightmapUVScale: Rect2, lightmapSlice: int64): void
        
        /** Sets the level of detail bias to use when rendering the specified 3D geometry instance. Higher values result in higher detail from further away. Equivalent to [member GeometryInstance3D.lod_bias]. */
        static instanceGeometrySetLodBias(instance: Rid, lodBias: float64): void
        
        /** Sets the per-instance shader uniform on the specified 3D geometry instance. Equivalent to [method GeometryInstance3D.set_instance_shader_parameter]. */
        static instanceGeometrySetShaderParameter(instance: Rid, parameter: StringName, value: any): void
        
        /** Returns the value of the per-instance shader uniform from the specified 3D geometry instance. Equivalent to [method GeometryInstance3D.get_instance_shader_parameter].  
         *      
         *  **Note:** Per-instance shader parameter names are case-sensitive.  
         */
        static instanceGeometryGetShaderParameter(instance: Rid, parameter: StringName): any
        
        /** Returns the default value of the per-instance shader uniform from the specified 3D geometry instance. Equivalent to [method GeometryInstance3D.get_instance_shader_parameter]. */
        static instanceGeometryGetShaderParameterDefaultValue(instance: Rid, parameter: StringName): any
        
        /** Returns a dictionary of per-instance shader uniform names of the per-instance shader uniform from the specified 3D geometry instance. The returned dictionary is in PropertyInfo format, with the keys `name`, `class_name`, `type`, `hint`, `hint_string` and `usage`. Equivalent to [method GeometryInstance3D.get_instance_shader_parameter]. */
        static instanceGeometryGetShaderParameterList(instance: Rid): GArray
        
        /** Returns an array of object IDs intersecting with the provided AABB. Only 3D nodes that inherit from [VisualInstance3D] are considered, such as [MeshInstance3D] or [DirectionalLight3D]. Use [method @GlobalScope.instance_from_id] to obtain the actual nodes. A scenario RID must be provided, which is available in the [World3D] you want to query. This forces an update for all resources queued to update.  
         *  **Warning:** This function is primarily intended for editor usage. For in-game use cases, prefer physics collision.  
         */
        static instancesCullAabb(aabb: Aabb, scenario?: Rid /* = new Rid() */): PackedInt64Array
        
        /** Returns an array of object IDs intersecting with the provided 3D ray. Only 3D nodes that inherit from [VisualInstance3D] are considered, such as [MeshInstance3D] or [DirectionalLight3D]. Use [method @GlobalScope.instance_from_id] to obtain the actual nodes. A scenario RID must be provided, which is available in the [World3D] you want to query. This forces an update for all resources queued to update.  
         *  **Warning:** This function is primarily intended for editor usage. For in-game use cases, prefer physics collision.  
         */
        static instancesCullRay(from: Vector3, to: Vector3, scenario?: Rid /* = new Rid() */): PackedInt64Array
        
        /** Returns an array of object IDs intersecting with the provided convex shape. Only 3D nodes that inherit from [VisualInstance3D] are considered, such as [MeshInstance3D] or [DirectionalLight3D]. Use [method @GlobalScope.instance_from_id] to obtain the actual nodes. A scenario RID must be provided, which is available in the [World3D] you want to query. This forces an update for all resources queued to update.  
         *  **Warning:** This function is primarily intended for editor usage. For in-game use cases, prefer physics collision.  
         */
        static instancesCullConvex(convex: GArray, scenario?: Rid /* = new Rid() */): PackedInt64Array
        
        /** Bakes the material data of the Mesh passed in the [param base] parameter with optional [param material_overrides] to a set of [Image]s of size [param image_size]. Returns an array of [Image]s containing material properties as specified in [enum BakeChannels]. */
        static bakeRenderUV2(base: Rid, materialOverrides: GArray, imageSize: Vector2I): GArray
        
        /** Creates a canvas and returns the assigned [RID]. It can be accessed with the RID that is returned. This RID will be used in all `canvas_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *  Canvas has no [Resource] or [Node] equivalent.  
         */
        static canvasCreate(): Rid
        
        /** A copy of the canvas item will be drawn with a local offset of the [param mirroring].  
         *      
         *  **Note:** This is equivalent to calling [method canvas_set_item_repeat] like `canvas_set_item_repeat(item, mirroring, 1)`, with an additional check ensuring [param canvas] is a parent of [param item].  
         */
        static canvasSetItemMirroring(canvas: Rid, item: Rid, mirroring: Vector2): void
        
        /** A copy of the canvas item will be drawn with a local offset of the [param repeat_size] by the number of times of the [param repeat_times]. As the [param repeat_times] increases, the copies will spread away from the origin texture. */
        static canvasSetItemRepeat(item: Rid, repeatSize: Vector2, repeatTimes: int64): void
        
        /** Modulates all colors in the given canvas. */
        static canvasSetModulate(canvas: Rid, color: Color): void
        static canvasSetDisableScale(disable: boolean): void
        
        /** Creates a canvas texture and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `canvas_texture_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method. See also [method texture_2d_create].  
         *      
         *  **Note:** The equivalent resource is [CanvasTexture] and is only meant to be used in 2D rendering, not 3D.  
         */
        static canvasTextureCreate(): Rid
        
        /** Sets the [param channel]'s [param texture] for the canvas texture specified by the [param canvas_texture] RID. Equivalent to [member CanvasTexture.diffuse_texture], [member CanvasTexture.normal_texture] and [member CanvasTexture.specular_texture]. */
        static canvasTextureSetChannel(canvasTexture: Rid, channel: RenderingServer.CanvasTextureChannel, texture: Rid): void
        
        /** Sets the [param base_color] and [param shininess] to use for the canvas texture specified by the [param canvas_texture] RID. Equivalent to [member CanvasTexture.specular_color] and [member CanvasTexture.specular_shininess]. */
        static canvasTextureSetShadingParameters(canvasTexture: Rid, baseColor: Color, shininess: float64): void
        
        /** Sets the texture [param filter] mode to use for the canvas texture specified by the [param canvas_texture] RID. */
        static canvasTextureSetTextureFilter(canvasTexture: Rid, filter: RenderingServer.CanvasItemTextureFilter): void
        
        /** Sets the texture [param repeat] mode to use for the canvas texture specified by the [param canvas_texture] RID. */
        static canvasTextureSetTextureRepeat(canvasTexture: Rid, repeat: RenderingServer.CanvasItemTextureRepeat): void
        
        /** Creates a new CanvasItem instance and returns its [RID]. It can be accessed with the RID that is returned. This RID will be used in all `canvas_item_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *      
         *  **Note:** The equivalent node is [CanvasItem].  
         */
        static canvasItemCreate(): Rid
        
        /** Sets a parent [CanvasItem] to the [CanvasItem]. The item will inherit transform, modulation and visibility from its parent, like [CanvasItem] nodes in the scene tree. */
        static canvasItemSetParent(item: Rid, parent: Rid): void
        
        /** Sets the default texture filter mode for the canvas item specified by the [param item] RID. Equivalent to [member CanvasItem.texture_filter]. */
        static canvasItemSetDefaultTextureFilter(item: Rid, filter: RenderingServer.CanvasItemTextureFilter): void
        
        /** Sets the default texture repeat mode for the canvas item specified by the [param item] RID. Equivalent to [member CanvasItem.texture_repeat]. */
        static canvasItemSetDefaultTextureRepeat(item: Rid, repeat: RenderingServer.CanvasItemTextureRepeat): void
        
        /** Sets the visibility of the [CanvasItem]. */
        static canvasItemSetVisible(item: Rid, visible: boolean): void
        
        /** Sets the light [param mask] for the canvas item specified by the [param item] RID. Equivalent to [member CanvasItem.light_mask]. */
        static canvasItemSetLightMask(item: Rid, mask: int64): void
        
        /** Sets the rendering visibility layer associated with this [CanvasItem]. Only [Viewport] nodes with a matching rendering mask will render this [CanvasItem]. */
        static canvasItemSetVisibilityLayer(item: Rid, visibilityLayer: int64): void
        
        /** Sets the [param transform] of the canvas item specified by the [param item] RID. This affects where and how the item will be drawn. Child canvas items' transforms are multiplied by their parent's transform. Equivalent to [member Node2D.transform]. */
        static canvasItemSetTransform(item: Rid, transform: Transform2D): void
        
        /** If [param clip] is `true`, makes the canvas item specified by the [param item] RID not draw anything outside of its rect's coordinates. This clipping is fast, but works only with axis-aligned rectangles. This means that rotation is ignored by the clipping rectangle. For more advanced clipping shapes, use [method canvas_item_set_canvas_group_mode] instead.  
         *      
         *  **Note:** The equivalent node functionality is found in [member Label.clip_text], [RichTextLabel] (always enabled) and more.  
         */
        static canvasItemSetClip(item: Rid, clip: boolean): void
        
        /** If [param enabled] is `true`, enables multichannel signed distance field rendering mode for the canvas item specified by the [param item] RID. This is meant to be used for font rendering, or with specially generated images using [url=https://github.com/Chlumsky/msdfgen]msdfgen[/url]. */
        static canvasItemSetDistanceFieldMode(item: Rid, enabled: boolean): void
        
        /** If [param use_custom_rect] is `true`, sets the custom visibility rectangle (used for culling) to [param rect] for the canvas item specified by [param item]. Setting a custom visibility rect can reduce CPU load when drawing lots of 2D instances. If [param use_custom_rect] is `false`, automatically computes a visibility rectangle based on the canvas item's draw commands. */
        static canvasItemSetCustomRect(item: Rid, useCustomRect: boolean, rect?: Rect2 /* = new Rect2(0, 0, 0, 0) */): void
        
        /** Multiplies the color of the canvas item specified by the [param item] RID, while affecting its children. See also [method canvas_item_set_self_modulate]. Equivalent to [member CanvasItem.modulate]. */
        static canvasItemSetModulate(item: Rid, color: Color): void
        
        /** Multiplies the color of the canvas item specified by the [param item] RID, without affecting its children. See also [method canvas_item_set_modulate]. Equivalent to [member CanvasItem.self_modulate]. */
        static canvasItemSetSelfModulate(item: Rid, color: Color): void
        
        /** If [param enabled] is `true`, draws the canvas item specified by the [param item] RID behind its parent. Equivalent to [member CanvasItem.show_behind_parent]. */
        static canvasItemSetDrawBehindParent(item: Rid, enabled: boolean): void
        
        /** If [param interpolated] is `true`, turns on physics interpolation for the canvas item. */
        static canvasItemSetInterpolated(item: Rid, interpolated: boolean): void
        
        /** Prevents physics interpolation for the current physics tick.  
         *  This is useful when moving a canvas item to a new location, to give an instantaneous change rather than interpolation from the previous location.  
         */
        static canvasItemResetPhysicsInterpolation(item: Rid): void
        
        /** Transforms both the current and previous stored transform for a canvas item.  
         *  This allows transforming a canvas item without creating a "glitch" in the interpolation, which is particularly useful for large worlds utilizing a shifting origin.  
         */
        static canvasItemTransformPhysicsInterpolation(item: Rid, transform: Transform2D): void
        
        /** Draws a line on the [CanvasItem] pointed to by the [param item] [RID]. See also [method CanvasItem.draw_line]. */
        static canvasItemAddLine(item: Rid, from: Vector2, to: Vector2, color: Color, width?: float64 /* = -1 */, antialiased?: boolean /* = false */): void
        
        /** Draws a 2D polyline on the [CanvasItem] pointed to by the [param item] [RID]. See also [method CanvasItem.draw_polyline] and [method CanvasItem.draw_polyline_colors]. */
        static canvasItemAddPolyline(item: Rid, points: PackedVector2Array | Vector2[], colors: PackedColorArray | Color[], width?: float64 /* = -1 */, antialiased?: boolean /* = false */): void
        
        /** Draws a 2D multiline on the [CanvasItem] pointed to by the [param item] [RID]. See also [method CanvasItem.draw_multiline] and [method CanvasItem.draw_multiline_colors]. */
        static canvasItemAddMultiline(item: Rid, points: PackedVector2Array | Vector2[], colors: PackedColorArray | Color[], width?: float64 /* = -1 */, antialiased?: boolean /* = false */): void
        
        /** Draws a rectangle on the [CanvasItem] pointed to by the [param item] [RID]. See also [method CanvasItem.draw_rect]. */
        static canvasItemAddRect(item: Rid, rect: Rect2, color: Color, antialiased?: boolean /* = false */): void
        
        /** Draws a circle on the [CanvasItem] pointed to by the [param item] [RID]. See also [method CanvasItem.draw_circle]. */
        static canvasItemAddCircle(item: Rid, pos: Vector2, radius: float64, color: Color, antialiased?: boolean /* = false */): void
        
        /** Draws a 2D textured rectangle on the [CanvasItem] pointed to by the [param item] [RID]. See also [method CanvasItem.draw_texture_rect] and [method Texture2D.draw_rect]. */
        static canvasItemAddTextureRect(item: Rid, rect: Rect2, texture: Rid, tile?: boolean /* = false */, modulate?: Color /* = new Color(1, 1, 1, 1) */, transpose?: boolean /* = false */): void
        
        /** See also [method CanvasItem.draw_msdf_texture_rect_region]. */
        static canvasItemAddMsdfTextureRectRegion(item: Rid, rect: Rect2, texture: Rid, srcRect: Rect2, modulate?: Color /* = new Color(1, 1, 1, 1) */, outlineSize?: int64 /* = 0 */, pxRange?: float64 /* = 1 */, scale?: float64 /* = 1 */): void
        
        /** See also [method CanvasItem.draw_lcd_texture_rect_region]. */
        static canvasItemAddLcdTextureRectRegion(item: Rid, rect: Rect2, texture: Rid, srcRect: Rect2, modulate: Color): void
        
        /** Draws the specified region of a 2D textured rectangle on the [CanvasItem] pointed to by the [param item] [RID]. See also [method CanvasItem.draw_texture_rect_region] and [method Texture2D.draw_rect_region]. */
        static canvasItemAddTextureRectRegion(item: Rid, rect: Rect2, texture: Rid, srcRect: Rect2, modulate?: Color /* = new Color(1, 1, 1, 1) */, transpose?: boolean /* = false */, clipUV?: boolean /* = true */): void
        
        /** Draws a nine-patch rectangle on the [CanvasItem] pointed to by the [param item] [RID]. */
        static canvasItemAddNinePatch(item: Rid, rect: Rect2, source: Rect2, texture: Rid, topleft: Vector2, bottomright: Vector2, xAxisMode?: RenderingServer.NinePatchAxisMode /* = 0 */, yAxisMode?: RenderingServer.NinePatchAxisMode /* = 0 */, drawCenter?: boolean /* = true */, modulate?: Color /* = new Color(1, 1, 1, 1) */): void
        
        /** Draws a 2D primitive on the [CanvasItem] pointed to by the [param item] [RID]. See also [method CanvasItem.draw_primitive]. */
        static canvasItemAddPrimitive(item: Rid, points: PackedVector2Array | Vector2[], colors: PackedColorArray | Color[], uvs: PackedVector2Array | Vector2[], texture: Rid): void
        
        /** Draws a 2D polygon on the [CanvasItem] pointed to by the [param item] [RID]. If you need more flexibility (such as being able to use bones), use [method canvas_item_add_triangle_array] instead. See also [method CanvasItem.draw_polygon].  
         *      
         *  **Note:** If you frequently redraw the same polygon with a large number of vertices, consider pre-calculating the triangulation with [method Geometry2D.triangulate_polygon] and using [method CanvasItem.draw_mesh], [method CanvasItem.draw_multimesh], or [method canvas_item_add_triangle_array].  
         */
        static canvasItemAddPolygon(item: Rid, points: PackedVector2Array | Vector2[], colors: PackedColorArray | Color[], uvs?: PackedVector2Array | Vector2[] /* = [] */, texture?: Rid /* = new Rid() */): void
        
        /** Draws a triangle array on the [CanvasItem] pointed to by the [param item] [RID]. This is internally used by [Line2D] and [StyleBoxFlat] for rendering. [method canvas_item_add_triangle_array] is highly flexible, but more complex to use than [method canvas_item_add_polygon].  
         *      
         *  **Note:** If [param count] is set to a non-negative value, only the first `count * 3` indices (corresponding to [code skip-lint]count` triangles) will be drawn. Otherwise, all indices are drawn.  
         */
        static canvasItemAddTriangleArray(item: Rid, indices: PackedInt32Array | int32[], points: PackedVector2Array | Vector2[], colors: PackedColorArray | Color[], uvs?: PackedVector2Array | Vector2[] /* = [] */, bones?: PackedInt32Array | int32[] /* = [] */, weights?: PackedFloat32Array | float32[] /* = [] */, texture?: Rid /* = new Rid() */, count?: int64 /* = -1 */): void
        
        /** Draws a mesh created with [method mesh_create] with given [param transform], [param modulate] color, and [param texture]. This is used internally by [MeshInstance2D]. */
        static canvasItemAddMesh(item: Rid, mesh: Rid, transform?: Transform2D /* = new Transform2D() */, modulate?: Color /* = new Color(1, 1, 1, 1) */, texture?: Rid /* = new Rid() */): void
        
        /** Draws a 2D [MultiMesh] on the [CanvasItem] pointed to by the [param item] [RID]. See also [method CanvasItem.draw_multimesh]. */
        static canvasItemAddMultimesh(item: Rid, mesh: Rid, texture?: Rid /* = new Rid() */): void
        
        /** Draws particles on the [CanvasItem] pointed to by the [param item] [RID]. */
        static canvasItemAddParticles(item: Rid, particles: Rid, texture: Rid): void
        
        /** Sets a [Transform2D] that will be used to transform subsequent canvas item commands. */
        static canvasItemAddSetTransform(item: Rid, transform: Transform2D): void
        
        /** If [param ignore] is `true`, ignore clipping on items drawn with this canvas item until this is called again with [param ignore] set to `false`. */
        static canvasItemAddClipIgnore(item: Rid, ignore: boolean): void
        
        /** Subsequent drawing commands will be ignored unless they fall within the specified animation slice. This is a faster way to implement animations that loop on background rather than redrawing constantly. */
        static canvasItemAddAnimationSlice(item: Rid, animationLength: float64, sliceBegin: float64, sliceEnd: float64, offset?: float64 /* = 0 */): void
        
        /** If [param enabled] is `true`, child nodes with the lowest Y position are drawn before those with a higher Y position. Y-sorting only affects children that inherit from the canvas item specified by the [param item] RID, not the canvas item itself. Equivalent to [member CanvasItem.y_sort_enabled]. */
        static canvasItemSetSortChildrenByY(item: Rid, enabled: boolean): void
        
        /** Sets the [CanvasItem]'s Z index, i.e. its draw order (lower indexes are drawn first). */
        static canvasItemSetZIndex(item: Rid, zIndex: int64): void
        
        /** If this is enabled, the Z index of the parent will be added to the children's Z index. */
        static canvasItemSetZAsRelativeToParent(item: Rid, enabled: boolean): void
        
        /** Sets the [CanvasItem] to copy a rect to the backbuffer. */
        static canvasItemSetCopyToBackbuffer(item: Rid, enabled: boolean, rect: Rect2): void
        
        /** Attaches a skeleton to the [CanvasItem]. Removes the previous skeleton. */
        static canvasItemAttachSkeleton(item: Rid, skeleton: Rid): void
        
        /** Clears the [CanvasItem] and removes all commands in it. */
        static canvasItemClear(item: Rid): void
        
        /** Sets the index for the [CanvasItem]. */
        static canvasItemSetDrawIndex(item: Rid, index: int64): void
        
        /** Sets a new [param material] to the canvas item specified by the [param item] RID. Equivalent to [member CanvasItem.material]. */
        static canvasItemSetMaterial(item: Rid, material: Rid): void
        
        /** Sets if the [CanvasItem] uses its parent's material. */
        static canvasItemSetUseParentMaterial(item: Rid, enabled: boolean): void
        
        /** Sets the per-instance shader uniform on the specified canvas item instance. Equivalent to [method CanvasItem.set_instance_shader_parameter]. */
        static canvasItemSetInstanceShaderParameter(instance: Rid, parameter: StringName, value: any): void
        
        /** Returns the value of the per-instance shader uniform from the specified canvas item instance. Equivalent to [method CanvasItem.get_instance_shader_parameter]. */
        static canvasItemGetInstanceShaderParameter(instance: Rid, parameter: StringName): any
        
        /** Returns the default value of the per-instance shader uniform from the specified canvas item instance. Equivalent to [method CanvasItem.get_instance_shader_parameter]. */
        static canvasItemGetInstanceShaderParameterDefaultValue(instance: Rid, parameter: StringName): any
        
        /** Returns a dictionary of per-instance shader uniform names of the per-instance shader uniform from the specified canvas item instance.  
         *  The returned dictionary is in PropertyInfo format, with the keys `name`, `class_name`, `type`, `hint`, `hint_string`, and `usage`.  
         */
        static canvasItemGetInstanceShaderParameterList(instance: Rid): GArray
        
        /** Sets the given [CanvasItem] as visibility notifier. [param area] defines the area of detecting visibility. [param enter_callable] is called when the [CanvasItem] enters the screen, [param exit_callable] is called when the [CanvasItem] exits the screen. If [param enable] is `false`, the item will no longer function as notifier.  
         *  This method can be used to manually mimic [VisibleOnScreenNotifier2D].  
         */
        static canvasItemSetVisibilityNotifier(item: Rid, enable: boolean, area: Rect2, enterCallable: Callable, exitCallable: Callable): void
        
        /** Sets the canvas group mode used during 2D rendering for the canvas item specified by the [param item] RID. For faster but more limited clipping, use [method canvas_item_set_clip] instead.  
         *      
         *  **Note:** The equivalent node functionality is found in [CanvasGroup] and [member CanvasItem.clip_children].  
         */
        static canvasItemSetCanvasGroupMode(item: Rid, mode: RenderingServer.CanvasGroupMode, clearMargin?: float64 /* = 5 */, fitEmpty?: boolean /* = false */, fitMargin?: float64 /* = 0 */, blurMipmaps?: boolean /* = false */): void
        
        /** Returns the bounding rectangle for a canvas item in local space, as calculated by the renderer. This bound is used internally for culling.  
         *  **Warning:** This function is intended for debugging in the editor, and will pass through and return a zero [Rect2] in exported projects.  
         */
        static debugCanvasItemGetRect(item: Rid): Rect2
        
        /** Creates a canvas light and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `canvas_light_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *      
         *  **Note:** The equivalent node is [Light2D].  
         */
        static canvasLightCreate(): Rid
        
        /** Attaches the canvas light to the canvas. Removes it from its previous canvas. */
        static canvasLightAttachToCanvas(light: Rid, canvas: Rid): void
        
        /** Enables or disables a canvas light. */
        static canvasLightSetEnabled(light: Rid, enabled: boolean): void
        
        /** Sets the scale factor of a [PointLight2D]'s texture. Equivalent to [member PointLight2D.texture_scale]. */
        static canvasLightSetTextureScale(light: Rid, scale: float64): void
        
        /** Sets the canvas light's [Transform2D]. */
        static canvasLightSetTransform(light: Rid, transform: Transform2D): void
        
        /** Sets the texture to be used by a [PointLight2D]. Equivalent to [member PointLight2D.texture]. */
        static canvasLightSetTexture(light: Rid, texture: Rid): void
        
        /** Sets the offset of a [PointLight2D]'s texture. Equivalent to [member PointLight2D.offset]. */
        static canvasLightSetTextureOffset(light: Rid, offset: Vector2): void
        
        /** Sets the color for a light. */
        static canvasLightSetColor(light: Rid, color: Color): void
        
        /** Sets a canvas light's height. */
        static canvasLightSetHeight(light: Rid, height: float64): void
        
        /** Sets a canvas light's energy. */
        static canvasLightSetEnergy(light: Rid, energy: float64): void
        
        /** Sets the Z range of objects that will be affected by this light. Equivalent to [member Light2D.range_z_min] and [member Light2D.range_z_max]. */
        static canvasLightSetZRange(light: Rid, minZ: int64, maxZ: int64): void
        
        /** The layer range that gets rendered with this light. */
        static canvasLightSetLayerRange(light: Rid, minLayer: int64, maxLayer: int64): void
        
        /** The light mask. See [LightOccluder2D] for more information on light masks. */
        static canvasLightSetItemCullMask(light: Rid, mask: int64): void
        
        /** The binary mask used to determine which layers this canvas light's shadows affects. See [LightOccluder2D] for more information on light masks. */
        static canvasLightSetItemShadowCullMask(light: Rid, mask: int64): void
        
        /** The mode of the light, see [enum CanvasLightMode] constants. */
        static canvasLightSetMode(light: Rid, mode: RenderingServer.CanvasLightMode): void
        
        /** Enables or disables the canvas light's shadow. */
        static canvasLightSetShadowEnabled(light: Rid, enabled: boolean): void
        
        /** Sets the canvas light's shadow's filter, see [enum CanvasLightShadowFilter] constants. */
        static canvasLightSetShadowFilter(light: Rid, filter: RenderingServer.CanvasLightShadowFilter): void
        
        /** Sets the color of the canvas light's shadow. */
        static canvasLightSetShadowColor(light: Rid, color: Color): void
        
        /** Smoothens the shadow. The lower, the smoother. */
        static canvasLightSetShadowSmooth(light: Rid, smooth: float64): void
        
        /** Sets the blend mode for the given canvas light. See [enum CanvasLightBlendMode] for options. Equivalent to [member Light2D.blend_mode]. */
        static canvasLightSetBlendMode(light: Rid, mode: RenderingServer.CanvasLightBlendMode): void
        
        /** If [param interpolated] is `true`, turns on physics interpolation for the canvas light. */
        static canvasLightSetInterpolated(light: Rid, interpolated: boolean): void
        
        /** Prevents physics interpolation for the current physics tick.  
         *  This is useful when moving a canvas item to a new location, to give an instantaneous change rather than interpolation from the previous location.  
         */
        static canvasLightResetPhysicsInterpolation(light: Rid): void
        
        /** Transforms both the current and previous stored transform for a canvas light.  
         *  This allows transforming a light without creating a "glitch" in the interpolation, which is particularly useful for large worlds utilizing a shifting origin.  
         */
        static canvasLightTransformPhysicsInterpolation(light: Rid, transform: Transform2D): void
        
        /** Creates a light occluder and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `canvas_light_occluder_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *      
         *  **Note:** The equivalent node is [LightOccluder2D].  
         */
        static canvasLightOccluderCreate(): Rid
        
        /** Attaches a light occluder to the canvas. Removes it from its previous canvas. */
        static canvasLightOccluderAttachToCanvas(occluder: Rid, canvas: Rid): void
        
        /** Enables or disables light occluder. */
        static canvasLightOccluderSetEnabled(occluder: Rid, enabled: boolean): void
        
        /** Sets a light occluder's polygon. */
        static canvasLightOccluderSetPolygon(occluder: Rid, polygon: Rid): void
        static canvasLightOccluderSetAsSdfCollision(occluder: Rid, enable: boolean): void
        
        /** Sets a light occluder's [Transform2D]. */
        static canvasLightOccluderSetTransform(occluder: Rid, transform: Transform2D): void
        
        /** The light mask. See [LightOccluder2D] for more information on light masks. */
        static canvasLightOccluderSetLightMask(occluder: Rid, mask: int64): void
        
        /** If [param interpolated] is `true`, turns on physics interpolation for the light occluder. */
        static canvasLightOccluderSetInterpolated(occluder: Rid, interpolated: boolean): void
        
        /** Prevents physics interpolation for the current physics tick.  
         *  This is useful when moving an occluder to a new location, to give an instantaneous change rather than interpolation from the previous location.  
         */
        static canvasLightOccluderResetPhysicsInterpolation(occluder: Rid): void
        
        /** Transforms both the current and previous stored transform for a light occluder.  
         *  This allows transforming an occluder without creating a "glitch" in the interpolation, which is particularly useful for large worlds utilizing a shifting origin.  
         */
        static canvasLightOccluderTransformPhysicsInterpolation(occluder: Rid, transform: Transform2D): void
        
        /** Creates a new light occluder polygon and adds it to the RenderingServer. It can be accessed with the RID that is returned. This RID will be used in all `canvas_occluder_polygon_*` RenderingServer functions.  
         *  Once finished with your RID, you will want to free the RID using the RenderingServer's [method free_rid] method.  
         *      
         *  **Note:** The equivalent resource is [OccluderPolygon2D].  
         */
        static canvasOccluderPolygonCreate(): Rid
        
        /** Sets the shape of the occluder polygon. */
        static canvasOccluderPolygonSetShape(occluderPolygon: Rid, shape: PackedVector2Array | Vector2[], closed: boolean): void
        
        /** Sets an occluder polygons cull mode. See [enum CanvasOccluderPolygonCullMode] constants. */
        static canvasOccluderPolygonSetCullMode(occluderPolygon: Rid, mode: RenderingServer.CanvasOccluderPolygonCullMode): void
        
        /** Sets the [member ProjectSettings.rendering/2d/shadow_atlas/size] to use for [Light2D] shadow rendering (in pixels). The value is rounded up to the nearest power of 2. */
        static canvasSetShadowTextureSize(size: int64): void
        
        /** Creates a new global shader uniform.  
         *      
         *  **Note:** Global shader parameter names are case-sensitive.  
         */
        static globalShaderParameterAdd(name: StringName, type: RenderingServer.GlobalShaderParameterType, defaultValue: any): void
        
        /** Removes the global shader uniform specified by [param name]. */
        static globalShaderParameterRemove(name: StringName): void
        
        /** Returns the list of global shader uniform names.  
         *      
         *  **Note:** [method global_shader_parameter_get] has a large performance penalty as the rendering thread needs to synchronize with the calling thread, which is slow. Do not use this method during gameplay to avoid stuttering. If you need to read values in a script after setting them, consider creating an autoload where you store the values you need to query at the same time you're setting them as global parameters.  
         */
        static globalShaderParameterGetList(): GArray
        
        /** Sets the global shader uniform [param name] to [param value]. */
        static globalShaderParameterSet(name: StringName, value: any): void
        
        /** Overrides the global shader uniform [param name] with [param value]. Equivalent to the [ShaderGlobalsOverride] node. */
        static globalShaderParameterSetOverride(name: StringName, value: any): void
        
        /** Returns the value of the global shader uniform specified by [param name].  
         *      
         *  **Note:** [method global_shader_parameter_get] has a large performance penalty as the rendering thread needs to synchronize with the calling thread, which is slow. Do not use this method during gameplay to avoid stuttering. If you need to read values in a script after setting them, consider creating an autoload where you store the values you need to query at the same time you're setting them as global parameters.  
         */
        static globalShaderParameterGet(name: StringName): any
        
        /** Returns the type associated to the global shader uniform specified by [param name].  
         *      
         *  **Note:** [method global_shader_parameter_get] has a large performance penalty as the rendering thread needs to synchronize with the calling thread, which is slow. Do not use this method during gameplay to avoid stuttering. If you need to read values in a script after setting them, consider creating an autoload where you store the values you need to query at the same time you're setting them as global parameters.  
         */
        static globalShaderParameterGetType(name: StringName): RenderingServer.GlobalShaderParameterType
        
        /** Tries to free an object in the RenderingServer. To avoid memory leaks, this should be called after using an object as memory management does not occur automatically when using RenderingServer directly. */
        static freeRid(rid: Rid): void
        
        /** Schedules a callback to the given callable after a frame has been drawn. */
        static requestFrameDrawnCallback(callable: Callable): void
        
        /** Returns `true` if changes have been made to the RenderingServer's data. [method force_draw] is usually called if this happens. */
        static hasChanged(): boolean
        
        /** Returns a statistic about the rendering engine which can be used for performance profiling. See [enum RenderingServer.RenderingInfo] for a list of values that can be queried. See also [method viewport_get_render_info], which returns information specific to a viewport.  
         *      
         *  **Note:** Only 3D rendering is currently taken into account by some of these values, such as the number of draw calls.  
         *      
         *  **Note:** Rendering information is not available until at least 2 frames have been rendered by the engine. If rendering information is not available, [method get_rendering_info] returns `0`. To print rendering information in `_ready()` successfully, use the following:  
         *    
         */
        static getRenderingInfo(info: RenderingServer.RenderingInfo): int64
        
        /** Returns the name of the video adapter (e.g. "GeForce GTX 1080/PCIe/SSE2").  
         *      
         *  **Note:** When running a headless or server binary, this function returns an empty string.  
         *      
         *  **Note:** On the web platform, some browsers such as Firefox may report a different, fixed GPU name such as "GeForce GTX 980" (regardless of the user's actual GPU model). This is done to make fingerprinting more difficult.  
         */
        static getVideoAdapterName(): string
        
        /** Returns the vendor of the video adapter (e.g. "NVIDIA Corporation").  
         *      
         *  **Note:** When running a headless or server binary, this function returns an empty string.  
         */
        static getVideoAdapterVendor(): string
        
        /** Returns the type of the video adapter. Since dedicated graphics cards from a given generation will  *usually*  be significantly faster than integrated graphics made in the same generation, the device type can be used as a basis for automatic graphics settings adjustment. However, this is not always true, so make sure to provide users with a way to manually override graphics settings.  
         *      
         *  **Note:** When using the OpenGL rendering driver or when running in headless mode, this function always returns [constant RenderingDevice.DEVICE_TYPE_OTHER].  
         */
        static getVideoAdapterType(): RenderingDevice.DeviceType
        
        /** Returns the version of the graphics video adapter  *currently in use*  (e.g. "1.2.189" for Vulkan, "3.3.0 NVIDIA 510.60.02" for OpenGL). This version may be different from the actual latest version supported by the hardware, as Godot may not always request the latest version. See also [method OS.get_video_adapter_driver_info].  
         *      
         *  **Note:** When running a headless or server binary, this function returns an empty string.  
         */
        static getVideoAdapterApiVersion(): string
        
        /** Returns the name of the current rendering driver. This can be `vulkan`, `d3d12`, `metal`, `opengl3`, `opengl3_es`, or `opengl3_angle`. See also [method get_current_rendering_method].  
         *  The rendering driver is determined by [member ProjectSettings.rendering/rendering_device/driver], the `--rendering-driver` command line argument that overrides this project setting, or an automatic fallback that is applied depending on the hardware.  
         */
        static getCurrentRenderingDriverName(): string
        
        /** Returns the name of the current rendering method. This can be `forward_plus`, `mobile`, or `gl_compatibility`. See also [method get_current_rendering_driver_name].  
         *  The rendering method is determined by [member ProjectSettings.rendering/renderer/rendering_method], the `--rendering-method` command line argument that overrides this project setting, or an automatic fallback that is applied depending on the hardware.  
         */
        static getCurrentRenderingMethod(): string
        
        /** Returns a mesh of a sphere with the given number of horizontal subdivisions, vertical subdivisions and radius. See also [method get_test_cube]. */
        static makeSphereMesh(latitudes: int64, longitudes: int64, radius: float64): Rid
        
        /** Returns the RID of the test cube. This mesh will be created and returned on the first call to [method get_test_cube], then it will be cached for subsequent calls. See also [method make_sphere_mesh]. */
        static getTestCube(): Rid
        
        /** Returns the RID of a 256×256 texture with a testing pattern on it (in [constant Image.FORMAT_RGB8] format). This texture will be created and returned on the first call to [method get_test_texture], then it will be cached for subsequent calls. See also [method get_white_texture].  
         *  **Example:** Get the test texture and apply it to a [Sprite2D] node:  
         *    
         */
        static getTestTexture(): Rid
        
        /** Returns the ID of a 4×4 white texture (in [constant Image.FORMAT_RGB8] format). This texture will be created and returned on the first call to [method get_white_texture], then it will be cached for subsequent calls. See also [method get_test_texture].  
         *  **Example:** Get the white texture and apply it to a [Sprite2D] node:  
         *    
         */
        static getWhiteTexture(): Rid
        
        /** Sets a boot image. The color defines the background color. If [param scale] is `true`, the image will be scaled to fit the screen size. If [param use_filter] is `true`, the image will be scaled with linear interpolation. If [param use_filter] is `false`, the image will be scaled with nearest-neighbor interpolation. */
        static setBootImage(image: Image, color: Color, scale: boolean, useFilter?: boolean /* = true */): void
        
        /** Returns the default clear color which is used when a specific clear color has not been selected. See also [method set_default_clear_color]. */
        static getDefaultClearColor(): Color
        
        /** Sets the default clear color which is used when a specific clear color has not been selected. See also [method get_default_clear_color]. */
        static setDefaultClearColor(color: Color): void
        
        /** Returns `true` if the OS supports a certain [param feature]. Features might be `s3tc`, `etc`, and `etc2`. */
        static hasOsFeature(feature: string): boolean
        
        /** If [param generate] is `true`, generates debug wireframes for all meshes that are loaded when using the Compatibility renderer. By default, the engine does not generate debug wireframes at runtime, since they slow down loading of assets and take up VRAM.  
         *      
         *  **Note:** You must call this method before loading any meshes when using the Compatibility renderer, otherwise wireframes will not be used.  
         */
        static setDebugGenerateWireframes(generate: boolean): void
        
        /** Returns the time taken to setup rendering on the CPU in milliseconds. This value is shared across all viewports and does  *not*  require [method viewport_set_measure_render_time] to be enabled on a viewport to be queried. See also [method viewport_get_measured_render_time_cpu]. */
        static getFrameSetupTimeCpu(): float64
        
        /** Forces a synchronization between the CPU and GPU, which may be required in certain cases. Only call this when needed, as CPU-GPU synchronization has a performance cost. */
        static forceSync(): void
        
        /** Forces redrawing of all viewports at once. Must be called from the main thread. */
        static forceDraw(swapBuffers?: boolean /* = true */, frameStep?: float64 /* = 0 */): void
        
        /** Returns the global RenderingDevice.  
         *      
         *  **Note:** When using the OpenGL rendering driver or when running in headless mode, this function always returns `null`.  
         */
        static getRenderingDevice(): null | RenderingDevice
        
        /** Creates a RenderingDevice that can be used to do draw and compute operations on a separate thread. Cannot draw to the screen nor share data with the global RenderingDevice.  
         *      
         *  **Note:** When using the OpenGL rendering driver or when running in headless mode, this function always returns `null`.  
         */
        static createLocalRenderingDevice(): RenderingDevice
        
        /** Returns `true` if our code is currently executing on the rendering thread. */
        static isOnRenderThread(): boolean
        
        /** As the RenderingServer actual logic may run on an separate thread, accessing its internals from the main (or any other) thread will result in errors. To make it easier to run code that can safely access the rendering internals (such as [RenderingDevice] and similar RD classes), push a callable via this function so it will be executed on the render thread. */
        static callOnRenderThread(callable: Callable): void
        
        /** This method does nothing and always returns `false`. */
        static hasFeature(feature: RenderingServer.Features): boolean
        
        /** If `false`, disables rendering completely, but the engine logic is still being processed. You can call [method force_draw] to draw a frame even with rendering disabled. */
        get renderLoopEnabled(): boolean
        set renderLoopEnabled(value: boolean)
        
        /** Emitted at the beginning of the frame, before the RenderingServer updates all the Viewports. */
        static readonly framePreDraw: Signal<() => void>
        
        /** Emitted at the end of the frame, after the RenderingServer has finished updating all the Viewports. */
        static readonly framePostDraw: Signal<() => void>
    }
}
