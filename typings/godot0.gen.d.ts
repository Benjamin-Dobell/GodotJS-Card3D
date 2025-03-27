// AUTO-GENERATED
/// <reference no-default-lib="true"/>
declare module "godot" {
    type byte = number
    type int32 = number
    type int64 = number /* || bigint */
    type float32 = number
    type float64 = number
    type StringName = string
    type unresolved = any
    type GAny = boolean | int64 | float64 | string | Vector2 | Vector2I | Rect2 | Rect2I | Vector3 | Vector3I | Transform2D | Vector4 | Vector4I | Plane | Quaternion | Aabb | Basis | Transform3D | Projection | Color | StringName | NodePath | Rid | GObject | Callable | Signal | GDictionary | GArray | PackedByteArray | PackedInt32Array | PackedInt64Array | PackedFloat32Array | PackedFloat64Array | PackedStringArray | PackedVector2Array | PackedVector3Array | PackedColorArray | PackedVector4Array | undefined
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
            MonitorMax = 39,
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
        
        /** Number of active navigation maps in the [NavigationServer3D]. This also includes the two empty default navigation maps created by World2D and World3D. */
        static readonly NAVIGATION_ACTIVE_MAPS = 24
        
        /** Number of active navigation regions in the [NavigationServer3D]. */
        static readonly NAVIGATION_REGION_COUNT = 25
        
        /** Number of active navigation agents processing avoidance in the [NavigationServer3D]. */
        static readonly NAVIGATION_AGENT_COUNT = 26
        
        /** Number of active navigation links in the [NavigationServer3D]. */
        static readonly NAVIGATION_LINK_COUNT = 27
        
        /** Number of navigation mesh polygons in the [NavigationServer3D]. */
        static readonly NAVIGATION_POLYGON_COUNT = 28
        
        /** Number of navigation mesh polygon edges in the [NavigationServer3D]. */
        static readonly NAVIGATION_EDGE_COUNT = 29
        
        /** Number of navigation mesh polygon edges that were merged due to edge key overlap in the [NavigationServer3D]. */
        static readonly NAVIGATION_EDGE_MERGE_COUNT = 30
        
        /** Number of polygon edges that are considered connected by edge proximity [NavigationServer3D]. */
        static readonly NAVIGATION_EDGE_CONNECTION_COUNT = 31
        
        /** Number of navigation mesh polygon edges that could not be merged in the [NavigationServer3D]. The edges still may be connected by edge proximity or with links. */
        static readonly NAVIGATION_EDGE_FREE_COUNT = 32
        
        /** Number of active navigation obstacles in the [NavigationServer3D]. */
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
        
        /** Represents the size of the [enum Monitor] enum. */
        static readonly MONITOR_MAX = 39
        static getMonitor(monitor: Performance.Monitor): float64
        static addCustomMonitor(id: StringName, callable: Callable, arguments_: GArray = []): void
        static removeCustomMonitor(id: StringName): void
        static hasCustomMonitor(id: StringName): boolean
        static getCustomMonitor(id: StringName): any
        static getMonitorModificationTime(): int64
        static getCustomMonitorNames(): GArray
    }
    // _singleton_class_: Engine
    /** Provides access to engine properties.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_engine.html  
     */
    class Engine extends GObject {
        static getPhysicsInterpolationFraction(): float64
        static getFramesDrawn(): int64
        static getFramesPerSecond(): float64
        static getPhysicsFrames(): int64
        static getProcessFrames(): int64
        static getMainLoop(): MainLoop
        static getVersionInfo(): GDictionary
        static getAuthorInfo(): GDictionary
        static getCopyrightInfo(): GArray
        static getDonorInfo(): GDictionary
        static getLicenseInfo(): GDictionary
        static getLicenseText(): string
        static getArchitectureName(): string
        static isInPhysicsFrame(): boolean
        static hasSingleton(name: StringName): boolean
        static getSingleton(name: StringName): GObject
        static registerSingleton(name: StringName, instance: GObject): void
        static unregisterSingleton(name: StringName): void
        static getSingletonList(): PackedStringArray
        static registerScriptLanguage(language: ScriptLanguage): GError
        static unregisterScriptLanguage(language: ScriptLanguage): GError
        static getScriptLanguageCount(): int64
        static getScriptLanguage(index: int64): ScriptLanguage
        static isEditorHint(): boolean
        static isEmbeddedInEditor(): boolean
        static getWriteMoviePath(): string
        get printErrorMessages(): boolean
        set printErrorMessages(value: boolean)
        get printToStdOut(): boolean
        set printToStdOut(value: boolean)
        get physicsTicksPerSecond(): int64
        set physicsTicksPerSecond(value: int64)
        get maxPhysicsStepsPerFrame(): int64
        set maxPhysicsStepsPerFrame(value: int64)
        get maxFps(): int64
        set maxFps(value: int64)
        get timeScale(): float64
        set timeScale(value: float64)
        get physicsJitterFix(): float64
        set physicsJitterFix(value: float64)
    }
    // _singleton_class_: ProjectSettings
    /** Stores globally-accessible variables.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_projectsettings.html  
     */
    class ProjectSettings extends GObject {
        static hasSetting(name: string): boolean
        static setSetting(name: string, value: any): void
        static getSetting(name: string, defaultValue: any = <any> {}): any
        static getSettingWithOverride(name: StringName): any
        static getGlobalClassList(): GArray
        static setOrder(name: string, position: int64): void
        static getOrder(name: string): int64
        static setInitialValue(name: string, value: any): void
        static setAsBasic(name: string, basic: boolean): void
        static setAsInternal(name: string, internal: boolean): void
        static addPropertyInfo(hint: GDictionary): void
        static setRestartIfChanged(name: string, restart: boolean): void
        
        /** Clears the whole configuration (not recommended, may break things). */
        static clear(name: string): void
        static localizePath(path: string): string
        static globalizePath(path: string): string
        
        /** Saves the configuration to the `project.godot` file.  
         *      
         *  **Note:** This method is intended to be used by editor plugins, as modified [ProjectSettings] can't be loaded back in the running app. If you want to change project settings in exported projects, use [method save_custom] to save `override.cfg` file.  
         */
        static save(): GError
        static loadResourcePack(pack: string, replaceFiles: boolean = true, offset: int64 = 0): boolean
        static saveCustom(file: string): GError
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
        static getEntropy(size: int64): PackedByteArray
        static getSystemCaCertificates(): string
        static getConnectedMidiInputs(): PackedStringArray
        static openMidiInputs(): void
        static closeMidiInputs(): void
        
        /** Displays a modal dialog box using the host platform's implementation. The engine execution is blocked until the dialog is closed. */
        static alert(text: string, title: string = 'Alert!'): void
        
        /** Crashes the engine (or the editor if called within a `@tool` script). See also [method kill].  
         *      
         *  **Note:** This method should  *only*  be used for testing the system's crash handler, not for any other purpose. For general error reporting, use (in order of preference) [method @GDScript.assert], [method @GlobalScope.push_error], or [method alert].  
         */
        static crash(message: string): void
        static getProcessorCount(): int64
        static getProcessorName(): string
        static getSystemFonts(): PackedStringArray
        static getSystemFontPath(fontName: string, weight: int64 = 400, stretch: int64 = 100, italic: boolean = false): string
        static getSystemFontPathForText(fontName: string, text: string, locale: string = '', script: string = '', weight: int64 = 400, stretch: int64 = 100, italic: boolean = false): PackedStringArray
        static getExecutablePath(): string
        static readStringFromStdIn(bufferSize: int64): string
        static readBufferFromStdIn(bufferSize: int64): PackedByteArray
        static getStdInType(): any /*Os.StdHandleType*/
        static getStdOutType(): any /*Os.StdHandleType*/
        static getStderrType(): any /*Os.StdHandleType*/
        
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
        static execute(path: string, arguments_: PackedStringArray | string[], output: GArray = [], readStderr: boolean = false, openConsole: boolean = false): int64
        static executeWithPipe(path: string, arguments_: PackedStringArray | string[], blocking: boolean = true): GDictionary
        static createProcess(path: string, arguments_: PackedStringArray | string[], openConsole: boolean = false): int64
        static createInstance(arguments_: PackedStringArray | string[]): int64
        
        /** Kill (terminate) the process identified by the given process ID ([param pid]), such as the ID returned by [method execute] in non-blocking mode. See also [method crash].  
         *      
         *  **Note:** This method can also be used to kill processes that were not spawned by the engine.  
         *      
         *  **Note:** This method is implemented on Android, iOS, Linux, macOS and Windows.  
         */
        static kill(pid: int64): GError
        static shellOpen(uri: string): GError
        static shellShowInFileManager(fileOrDirPath: string, openFolder: boolean = true): GError
        static isProcessRunning(pid: int64): boolean
        static getProcessExitCode(pid: int64): int64
        static getProcessId(): int64
        static hasEnvironment(variable: string): boolean
        static getEnvironment(variable: string): string
        static setEnvironment(variable: string, value: string): void
        static unsetEnvironment(variable: string): void
        static getName(): string
        static getDistributionName(): string
        static getVersion(): string
        static getVersionAlias(): string
        static getCmdlineArgs(): PackedStringArray
        static getCmdlineUserArgs(): PackedStringArray
        static getVideoAdapterDriverInfo(): PackedStringArray
        static setRestartOnExit(restart: boolean, arguments_: PackedStringArray | string[] = []): void
        static isRestartOnExitSet(): boolean
        static getRestartOnExitArguments(): PackedStringArray
        static delayUsec(usec: int64): void
        static delayMsec(msec: int64): void
        static getLocale(): string
        static getLocaleLanguage(): string
        static getModelName(): string
        static isUserfsPersistent(): boolean
        static isStdOutVerbose(): boolean
        static isDebugBuild(): boolean
        static getStaticMemoryUsage(): int64
        static getStaticMemoryPeakUsage(): int64
        static getMemoryInfo(): GDictionary
        static moveToTrash(path: string): GError
        static getUserDataDir(): string
        static getSystemDir(dir: any /*Os.SystemDir*/, sharedStorage: boolean = true): string
        static getConfigDir(): string
        static getDataDir(): string
        static getCacheDir(): string
        static getTempDir(): string
        static getUniqueId(): string
        static getKeycodeString(code: Key): string
        static isKeycodeUnicode(code: int64): boolean
        static findKeycodeFromString(string_: string): Key
        static setUseFileAccessSaveAndSwap(enabled: boolean): void
        static setThreadName(name: string): GError
        static getThreadCallerId(): int64
        static getMainThreadId(): int64
        static hasFeature(tagName: string): boolean
        static isSandboxed(): boolean
        static requestPermission(name: string): boolean
        static requestPermissions(): boolean
        static getGrantedPermissions(): PackedStringArray
        static revokeGrantedPermissions(): void
        get lowProcessorUsageMode(): boolean
        set lowProcessorUsageMode(value: boolean)
        get lowProcessorUsageModeSleepUsec(): int64
        set lowProcessorUsageModeSleepUsec(value: int64)
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
        static getDatetimeDictFromUnixTime(unixTimeVal: int64): GDictionary
        static getDateDictFromUnixTime(unixTimeVal: int64): GDictionary
        static getTimeDictFromUnixTime(unixTimeVal: int64): GDictionary
        static getDatetimeStringFromUnixTime(unixTimeVal: int64, useSpace: boolean = false): string
        static getDateStringFromUnixTime(unixTimeVal: int64): string
        static getTimeStringFromUnixTime(unixTimeVal: int64): string
        static getDatetimeDictFromDatetimeString(datetime: string, weekday: boolean): GDictionary
        static getDatetimeStringFromDatetimeDict(datetime: GDictionary, useSpace: boolean): string
        static getUnixTimeFromDatetimeDict(datetime: GDictionary): int64
        static getUnixTimeFromDatetimeString(datetime: string): int64
        static getOffsetStringFromOffsetMinutes(offsetMinutes: int64): string
        static getDatetimeDictFromSystem(utc: boolean = false): GDictionary
        static getDateDictFromSystem(utc: boolean = false): GDictionary
        static getTimeDictFromSystem(utc: boolean = false): GDictionary
        static getDatetimeStringFromSystem(utc: boolean = false, useSpace: boolean = false): string
        static getDateStringFromSystem(utc: boolean = false): string
        static getTimeStringFromSystem(utc: boolean = false): string
        static getTimeZoneFromSystem(): GDictionary
        static getUnixTimeFromSystem(): float64
        static getTicksMsec(): int64
        static getTicksUsec(): int64
    }
    // _singleton_class_: TextServerManager
    /** A singleton for managing [TextServer] implementations.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_textservermanager.html  
     */
    class TextServerManager extends GObject {
        static addInterface(interface: TextServer): void
        static getInterfaceCount(): int64
        static removeInterface(interface: TextServer): void
        static getInterface(idx: int64): TextServer
        static getInterfaces(): GArray
        static findInterface(name: string): TextServer
        static setPrimaryInterface(index: TextServer): void
        static getPrimaryInterface(): TextServer
        static readonly interfaceAdded: Signal<(interfaceName: StringName) => void>
        static readonly interfaceRemoved: Signal<(interfaceName: StringName) => void>
    }
    // _singleton_class_: PhysicsServer2DManager
    /** A singleton for managing [PhysicsServer2D] implementations.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicsserver2dmanager.html  
     */
    class PhysicsServer2DManager extends GObject {
        static registerServer(name: string, createCallback: Callable): void
        static setDefaultServer(name: string, priority: int64): void
    }
    // _singleton_class_: PhysicsServer3DManager
    /** A singleton for managing [PhysicsServer3D] implementations.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicsserver3dmanager.html  
     */
    class PhysicsServer3DManager extends GObject {
        static registerServer(name: string, createCallback: Callable): void
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
        static parseSourceGeometryData(navigationMesh: NavigationMesh, sourceGeometryData: NavigationMeshSourceGeometryData3D, rootNode: Node, callback: Callable = new Callable()): void
        static bakeFromSourceGeometryData(navigationMesh: NavigationMesh, sourceGeometryData: NavigationMeshSourceGeometryData3D, callback: Callable = new Callable()): void
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
        static resolveHostname(host: string, iPType: any /*Ip.Type*/ = 3): string
        static resolveHostnameAddresses(host: string, iPType: any /*Ip.Type*/ = 3): PackedStringArray
        static resolveHostnameQueueItem(host: string, iPType: any /*Ip.Type*/ = 3): int64
        static getResolveItemStatus(id: int64): any /*Ip.ResolverStatus*/
        static getResolveItemAddress(id: int64): string
        static getResolveItemAddresses(id: int64): GArray
        static eraseResolveItem(id: int64): void
        static getLocalAddresses(): PackedStringArray
        static getLocalInterfaces(): GArray
        static clearCache(hostname: string = ''): void
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
        static isPointInCircle(point: Vector2, circlePosition: Vector2, circleRadius: float64): boolean
        static segmentIntersectsCircle(segmentFrom: Vector2, segmentTo: Vector2, circlePosition: Vector2, circleRadius: float64): float64
        static segmentIntersectsSegment(fromA: Vector2, toA: Vector2, fromB: Vector2, toB: Vector2): any
        static lineIntersectsLine(fromA: Vector2, dirA: Vector2, fromB: Vector2, dirB: Vector2): any
        static getClosestPointsBetweenSegments(p1: Vector2, q1: Vector2, p2: Vector2, q2: Vector2): PackedVector2Array
        static getClosestPointToSegment(point: Vector2, s1: Vector2, s2: Vector2): Vector2
        static getClosestPointToSegmentUncapped(point: Vector2, s1: Vector2, s2: Vector2): Vector2
        static pointIsInsideTriangle(point: Vector2, a: Vector2, b: Vector2, c: Vector2): boolean
        static isPolygonClockwise(polygon: PackedVector2Array | Vector2[]): boolean
        static isPointInPolygon(point: Vector2, polygon: PackedVector2Array | Vector2[]): boolean
        static triangulatePolygon(polygon: PackedVector2Array | Vector2[]): PackedInt32Array
        static triangulateDelaunay(points: PackedVector2Array | Vector2[]): PackedInt32Array
        static convexHull(points: PackedVector2Array | Vector2[]): PackedVector2Array
        static decomposePolygonInConvex(polygon: PackedVector2Array | Vector2[]): GArray
        static mergePolygons(polygonA: PackedVector2Array | Vector2[], polygonB: PackedVector2Array | Vector2[]): GArray
        static clipPolygons(polygonA: PackedVector2Array | Vector2[], polygonB: PackedVector2Array | Vector2[]): GArray
        static intersectPolygons(polygonA: PackedVector2Array | Vector2[], polygonB: PackedVector2Array | Vector2[]): GArray
        static excludePolygons(polygonA: PackedVector2Array | Vector2[], polygonB: PackedVector2Array | Vector2[]): GArray
        static clipPolylineWithPolygon(polyline: PackedVector2Array | Vector2[], polygon: PackedVector2Array | Vector2[]): GArray
        static intersectPolylineWithPolygon(polyline: PackedVector2Array | Vector2[], polygon: PackedVector2Array | Vector2[]): GArray
        static offsetPolygon(polygon: PackedVector2Array | Vector2[], delta: float64, joinType: Geometry2D.PolyJoinType = 0): GArray
        static offsetPolyline(polyline: PackedVector2Array | Vector2[], delta: float64, joinType: Geometry2D.PolyJoinType = 0, endType: Geometry2D.PolyEndType = 3): GArray
        static makeAtlas(sizes: PackedVector2Array | Vector2[]): GDictionary
        static bresenhamLine(from: Vector2I, to: Vector2I): GArray
    }
    // _singleton_class_: Geometry3D
    /** Provides methods for some common 3D geometric operations.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_geometry3d.html  
     */
    class Geometry3D extends GObject {
        static computeConvexMeshPoints(planes: GArray): PackedVector3Array
        static buildBoxPlanes(extents: Vector3): GArray
        static buildCylinderPlanes(radius: float64, height: float64, sides: int64, axis: Vector3.Axis = 2): GArray
        static buildCapsulePlanes(radius: float64, height: float64, sides: int64, lats: int64, axis: Vector3.Axis = 2): GArray
        static getClosestPointsBetweenSegments(p1: Vector3, p2: Vector3, q1: Vector3, q2: Vector3): PackedVector3Array
        static getClosestPointToSegment(point: Vector3, s1: Vector3, s2: Vector3): Vector3
        static getClosestPointToSegmentUncapped(point: Vector3, s1: Vector3, s2: Vector3): Vector3
        static getTriangleBarycentricCoords(point: Vector3, a: Vector3, b: Vector3, c: Vector3): Vector3
        static rayIntersectsTriangle(from: Vector3, dir: Vector3, a: Vector3, b: Vector3, c: Vector3): any
        static segmentIntersectsTriangle(from: Vector3, to: Vector3, a: Vector3, b: Vector3, c: Vector3): any
        static segmentIntersectsSphere(from: Vector3, to: Vector3, spherePosition: Vector3, sphereRadius: float64): PackedVector3Array
        static segmentIntersectsCylinder(from: Vector3, to: Vector3, height: float64, radius: float64): PackedVector3Array
        static segmentIntersectsConvex(from: Vector3, to: Vector3, planes: GArray): PackedVector3Array
        static clipPolygon(points: PackedVector3Array | Vector3[], plane: Plane): PackedVector3Array
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
        static loadThreadedRequest(path: string, typeHint: string = '', useSubThreads: boolean = false, cacheMode: ResourceLoader.CacheMode = 1): GError
        static loadThreadedGetStatus(path: string, progress: GArray = []): ResourceLoader.ThreadLoadStatus
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
        static load(path: string, typeHint: string = '', cacheMode: ResourceLoader.CacheMode = 1): Resource
        static getRecognizedExtensionsForType(type: string): PackedStringArray
        static addResourceFormatLoader(formatLoader: ResourceFormatLoader, atFront: boolean = false): void
        static removeResourceFormatLoader(formatLoader: ResourceFormatLoader): void
        static setAbortOnMissingResources(abort: boolean): void
        static getDependencies(path: string): PackedStringArray
        static hasCached(path: string): boolean
        static getCachedRef(path: string): Resource
        
        /** Returns whether a recognized resource exists for the given [param path].  
         *  An optional [param type_hint] can be used to further specify the [Resource] type that should be handled by the [ResourceFormatLoader]. Anything that inherits from [Resource] can be used as a type hint, for example [Image].  
         *      
         *  **Note:** If you use [method Resource.take_over_path], this method will return `true` for the taken path even if the resource wasn't saved (i.e. exists only in resource cache).  
         */
        static exists(path: string, typeHint: string = ''): boolean
        static getResourceUid(path: string): int64
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
        static save(resource: Resource, path: string = '', flags: ResourceSaver.SaverFlags = 0): GError
        static getRecognizedExtensions(type: Resource): PackedStringArray
        static addResourceFormatSaver(formatSaver: ResourceFormatSaver, atFront: boolean = false): void
        static removeResourceFormatSaver(formatSaver: ResourceFormatSaver): void
        static getResourceIdForPath(path: string, generate: boolean = false): int64
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
        static getClassList(): PackedStringArray
        static getInheritersFromClass(class_: StringName): PackedStringArray
        static getParentClass(class_: StringName): StringName
        static classExists(class_: StringName): boolean
        static isParentClass(class_: StringName, inherits: StringName): boolean
        static canInstantiate(class_: StringName): boolean
        
        /** Creates an instance of [param class]. */
        static instantiate(class_: StringName): any
        static classGetApiType(class_: StringName): any /*ClassDb.apiType*/
        static classHasSignal(class_: StringName, signal: StringName): boolean
        static classGetSignal(class_: StringName, signal: StringName): GDictionary
        static classGetSignalList(class_: StringName, noInheritance: boolean = false): GArray
        static classGetPropertyList(class_: StringName, noInheritance: boolean = false): GArray
        static classGetPropertyGetter(class_: StringName, property: StringName): StringName
        static classGetPropertySetter(class_: StringName, property: StringName): StringName
        static classGetProperty(object: GObject, property: StringName): any
        static classSetProperty(object: GObject, property: StringName, value: any): GError
        static classGetPropertyDefaultValue(class_: StringName, property: StringName): any
        static classHasMethod(class_: StringName, method: StringName, noInheritance: boolean = false): boolean
        static classGetMethodArgumentCount(class_: StringName, method: StringName, noInheritance: boolean = false): int64
        static classGetMethodList(class_: StringName, noInheritance: boolean = false): GArray
        static classCallStatic(class_: StringName, method: StringName, ...varargs: any[]): any
        static classGetIntegerConstantList(class_: StringName, noInheritance: boolean = false): PackedStringArray
        static classHasIntegerConstant(class_: StringName, name: StringName): boolean
        static classGetIntegerConstant(class_: StringName, name: StringName): int64
        static classHasEnum(class_: StringName, name: StringName, noInheritance: boolean = false): boolean
        static classGetEnumList(class_: StringName, noInheritance: boolean = false): PackedStringArray
        static classGetEnumConstants(class_: StringName, enum_: StringName, noInheritance: boolean = false): PackedStringArray
        static classGetIntegerConstantEnum(class_: StringName, name: StringName, noInheritance: boolean = false): StringName
        static isClassEnumBitfield(class_: StringName, enum_: StringName, noInheritance: boolean = false): boolean
        static isClassEnabled(class_: StringName): boolean
    }
    // _singleton_class_: Marshalls
    /** Data transformation (marshaling) and encoding helpers.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_marshalls.html  
     */
    class Marshalls extends GObject {
        static variantToBase64(variant: any, fullObjects: boolean = false): string
        static base64ToVariant(base64Str: string, allowObjects: boolean = false): any
        static rawToBase64(array: PackedByteArray | byte[] | ArrayBuffer): string
        static base64ToRaw(base64Str: string): PackedByteArray
        static utf8ToBase64(utf8Str: string): string
        static base64ToUtf8(base64Str: string): string
    }
    // _singleton_class_: TranslationServer
    /** The server responsible for language translations.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_translationserver.html  
     */
    class TranslationServer extends GObject {
        static setLocale(locale: string): void
        static getLocale(): string
        static getToolLocale(): string
        static compareLocales(localeA: string, localeB: string): int64
        static standardizeLocale(locale: string, addDefaults: boolean = false): string
        static getAllLanguages(): PackedStringArray
        static getLanguageName(language: string): string
        static getAllScripts(): PackedStringArray
        static getScriptName(script: string): string
        static getAllCountries(): PackedStringArray
        static getCountryName(country: string): string
        static getLocaleName(locale: string): string
        
        /** Returns the current locale's translation for the given message and context.  
         *      
         *  **Note:** This method always uses the main translation domain.  
         */
        static translate(message: StringName, context: StringName = ''): StringName
        static translatePlural(message: StringName, pluralMessage: StringName, n: int64, context: StringName = ''): StringName
        static addTranslation(translation: Translation): void
        static removeTranslation(translation: Translation): void
        static getTranslationObject(locale: string): Translation
        static hasDomain(domain: StringName): boolean
        static getOrAddDomain(domain: StringName): TranslationDomain
        static removeDomain(domain: StringName): void
        
        /** Removes all translations from the main translation domain. */
        static clear(): void
        static getLoadedLocales(): PackedStringArray
        static reloadPseudolocalization(): void
        
        /** Returns the pseudolocalized string based on the [param message] passed in.  
         *      
         *  **Note:** This method always uses the main translation domain.  
         */
        static pseudolocalize(message: StringName): StringName
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
        static isAnythingPressed(): boolean
        static isKeyPressed(keycode: Key): boolean
        static isPhysicalKeyPressed(keycode: Key): boolean
        static isKeyLabelPressed(keycode: Key): boolean
        static isMouseButtonPressed(button: MouseButton): boolean
        static isJoyButtonPressed(device: int64, button: JoyButton): boolean
        static isActionPressed(action: StringName, exactMatch: boolean = false): boolean
        static isActionJustPressed(action: StringName, exactMatch: boolean = false): boolean
        static isActionJustReleased(action: StringName, exactMatch: boolean = false): boolean
        static getActionStrength(action: StringName, exactMatch: boolean = false): float64
        static getActionRawStrength(action: StringName, exactMatch: boolean = false): float64
        static getAxis(negativeAction: StringName, positiveAction: StringName): float64
        static getVector(negativeX: StringName, positiveX: StringName, negativeY: StringName, positiveY: StringName, deadzone: float64 = -1): Vector2
        static addJoyMapping(mapping: string, updateExisting: boolean = false): void
        static removeJoyMapping(guid: string): void
        static isJoyKnown(device: int64): boolean
        static getJoyAxis(device: int64, axis: JoyAxis): float64
        static getJoyName(device: int64): string
        static getJoyGuid(device: int64): string
        static getJoyInfo(device: int64): GDictionary
        static shouldIgnoreDevice(vendorId: int64, productId: int64): boolean
        static getConnectedJoypads(): GArray
        static getJoyVibrationStrength(device: int64): Vector2
        static getJoyVibrationDuration(device: int64): float64
        static startJoyVibration(device: int64, weakMagnitude: float64, strongMagnitude: float64, duration: float64 = 0): void
        static stopJoyVibration(device: int64): void
        static vibrateHandheld(durationMs: int64 = 500, amplitude: float64 = -1): void
        static getGravity(): Vector3
        static getAccelerometer(): Vector3
        static getMagnetometer(): Vector3
        static getGyroscope(): Vector3
        static setGravity(value: Vector3): void
        static setAccelerometer(value: Vector3): void
        static setMagnetometer(value: Vector3): void
        static setGyroscope(value: Vector3): void
        static getLastMouseVelocity(): Vector2
        static getLastMouseScreenVelocity(): Vector2
        static getMouseButtonMask(): MouseButtonMask
        static warpMouse(position: Vector2): void
        static actionPress(action: StringName, strength: float64 = 1): void
        static actionRelease(action: StringName): void
        static setDefaultCursorShape(shape: Input.CursorShape = 0): void
        static getCurrentCursorShape(): Input.CursorShape
        static setCustomMouseCursor(image: Resource, shape: Input.CursorShape = 0, hotspot: Vector2 = Vector2.ZERO): void
        static parseInputEvent(event: InputEvent): void
        static flushBufferedEvents(): void
        get mouseMode(): int64
        set mouseMode(value: int64)
        get useAccumulatedInput(): boolean
        set useAccumulatedInput(value: boolean)
        get emulateMouseFromTouch(): boolean
        set emulateMouseFromTouch(value: boolean)
        get emulateTouchFromMouse(): boolean
        set emulateTouchFromMouse(value: boolean)
        static readonly joyConnectionChanged: Signal<(device: int64, connected: boolean) => void>
    }
    // _singleton_class_: InputMap
    /** A singleton that manages all [InputEventAction]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_inputmap.html  
     */
    class InputMap extends GObject {
        static hasAction(action: StringName): boolean
        static getActions(): GArray
        static addAction(action: StringName, deadzone: float64 = 0.20000000298023224): void
        static eraseAction(action: StringName): void
        static actionSetDeadzone(action: StringName, deadzone: float64): void
        static actionGetDeadzone(action: StringName): float64
        static actionAddEvent(action: StringName, event: InputEvent): void
        static actionHasEvent(action: StringName, event: InputEvent): boolean
        static actionEraseEvent(action: StringName, event: InputEvent): void
        static actionEraseEvents(action: StringName): void
        static actionGetEvents(action: StringName): GArray
        static eventIsAction(event: InputEvent, action: StringName, exactMatch: boolean = false): boolean
        static loadFromProjectSettings(): void
    }
    // _singleton_class_: EngineDebugger
    /** Exposes the internal debugger.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_enginedebugger.html  
     */
    class EngineDebugger extends GObject {
        static isActive(): boolean
        static registerProfiler(name: StringName, profiler: EngineProfiler): void
        static unregisterProfiler(name: StringName): void
        static isProfiling(name: StringName): boolean
        static hasProfiler(name: StringName): boolean
        static profilerAddFrameData(name: StringName, data: GArray): void
        static profilerEnable(name: StringName, enable: boolean, arguments_: GArray = []): void
        static registerMessageCapture(name: StringName, callable: Callable): void
        static unregisterMessageCapture(name: StringName): void
        static hasCapture(name: StringName): boolean
        static linePoll(): void
        static sendMessage(message: string, data: GArray): void
        
        /** Starts a debug break in script execution, optionally specifying whether the program can continue based on [param can_continue] and whether the break was due to a breakpoint. */
        static debug(canContinue: boolean = true, isErrorBreakpoint: boolean = false): void
        static scriptDebug(language: ScriptLanguage, canContinue: boolean = true, isErrorBreakpoint: boolean = false): void
        static setLinesLeft(lines: int64): void
        static getLinesLeft(): int64
        static setDepth(depth: int64): void
        static getDepth(): int64
        static isBreakpoint(line: int64, source: StringName): boolean
        static isSkippingBreakpoints(): boolean
        static insertBreakpoint(line: int64, source: StringName): void
        static removeBreakpoint(line: int64, source: StringName): void
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
        static loadExtension(path: string): GDExtensionManager.LoadStatus
        static reloadExtension(path: string): GDExtensionManager.LoadStatus
        static unloadExtension(path: string): GDExtensionManager.LoadStatus
        static isExtensionLoaded(path: string): boolean
        static getLoadedExtensions(): PackedStringArray
        static getExtension(path: string): GDExtension
        static readonly extensionsReloaded: Signal<() => void>
        static readonly extensionLoaded: Signal<(extension: GDExtension) => void>
        static readonly extensionUnloading: Signal<(extension: GDExtension) => void>
    }
    // _singleton_class_: ResourceUid
    class ResourceUid extends GObject {
        static readonly INVALID_ID = -1
        static idToText(id: int64): string
        static textToId(textId: string): int64
        static createId(): int64
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
        static addTask(action: Callable, highPriority: boolean = false, description: string = ''): int64
        static isTaskCompleted(taskId: int64): boolean
        static waitForTaskCompletion(taskId: int64): GError
        static addGroupTask(action: Callable, elements: int64, tasksNeeded: int64 = -1, highPriority: boolean = false, description: string = ''): int64
        static isGroupTaskCompleted(groupId: int64): boolean
        static getGroupProcessedElementCount(groupId: int64): int64
        static waitForGroupTaskCompletion(groupId: int64): void
    }
    // _singleton_class_: ThemeDB
    /** A singleton that provides access to static information about [Theme] resources used by the engine and by your project.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_themedb.html  
     */
    class ThemeDB extends GObject {
        static getDefaultTheme(): Theme
        static getProjectTheme(): Theme
        get fallbackBaseScale(): float64
        set fallbackBaseScale(value: float64)
        get fallbackFont(): Font
        set fallbackFont(value: Font)
        get fallbackFontSize(): int64
        set fallbackFontSize(value: int64)
        get fallbackIcon(): Texture2D
        set fallbackIcon(value: Texture2D)
        get fallbackStylebox(): StyleBox
        set fallbackStylebox(value: StyleBox)
        static readonly fallbackChanged: Signal<() => void>
    }
    // _singleton_class_: EditorInterface
    /** Godot editor's interface.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorinterface.html  
     */
    class EditorInterface extends GObject {
        static restartEditor(save: boolean = true): void
        static getCommandPalette(): EditorCommandPalette
        static getResourceFilesystem(): EditorFileSystem
        static getEditorPaths(): EditorPaths
        static getResourcePreviewer(): EditorResourcePreview
        static getSelection(): EditorSelection
        static getEditorSettings(): EditorSettings
        static getEditorToaster(): EditorToaster
        static getEditorUndoRedo(): EditorUndoRedoManager
        static makeMeshPreviews(meshes: GArray, previewSize: int64): GArray
        static setPluginEnabled(plugin: string, enabled: boolean): void
        static isPluginEnabled(plugin: string): boolean
        static getEditorTheme(): Theme
        static getBaseControl(): Control
        static getEditorMainScreen(): VBoxContainer
        static getScriptEditor(): ScriptEditor
        static getEditorViewport2D(): SubViewport
        static getEditorViewport3D(idx: int64 = 0): SubViewport
        static setMainScreenEditor(name: string): void
        static isMultiWindowEnabled(): boolean
        static getEditorScale(): float64
        static popupDialog(dialog: Window, rect: Rect2I = <any> {} /*compound.type from TypeRect2I ([object Object])*/): void
        static popupDialogCentered(dialog: Window, minsize: Vector2I = <any> {} /*compound.type from TypeVector2I ([object Object])*/): void
        static popupDialogCenteredRatio(dialog: Window, ratio: float64 = 0.8): void
        static popupDialogCenteredClamped(dialog: Window, minsize: Vector2I = <any> {} /*compound.type from TypeVector2I ([object Object])*/, fallbackRatio: float64 = 0.75): void
        static getCurrentFeatureProfile(): string
        static setCurrentFeatureProfile(profileName: string): void
        static popupNodeSelector(callback: Callable, validTypes: GArray = [], currentValue: Node = undefined): void
        static popupPropertySelector(object: GObject, callback: Callable, typeFilter: PackedInt32Array | int32[] = [], currentValue: string = ''): void
        static popupMethodSelector(object: GObject, callback: Callable, currentValue: string = ''): void
        static popupQuickOpen(callback: Callable, baseTypes: GArray = []): void
        static popupCreateDialog(callback: Callable, baseType: StringName = '', currentType: string = '', dialogTitle: string = '', typeBlocklist: GArray = []): void
        static getFileSystemDock(): FileSystemDock
        static selectFile(file: string): void
        static getSelectedPaths(): PackedStringArray
        static getCurrentPath(): string
        static getCurrentDirectory(): string
        static getInspector(): EditorInspector
        static inspectObject(object: GObject, forProperty: string = '', inspectorOnly: boolean = false): void
        static editResource(resource: Resource): void
        static editNode(node: Node): void
        static editScript(script: Script, line: int64 = -1, column: int64 = 0, grabFocus: boolean = true): void
        static openSceneFromPath(sceneFilepath: string, setInherited: boolean = false): void
        static reloadSceneFromPath(sceneFilepath: string): void
        static getOpenScenes(): PackedStringArray
        static getEditedSceneRoot(): Node
        static saveScene(): GError
        static saveSceneAs(path: string, withPreview: boolean = true): void
        static saveAllScenes(): void
        static markSceneAsUnsaved(): void
        static playMainScene(): void
        static playCurrentScene(): void
        static playCustomScene(sceneFilepath: string): void
        static stopPlayingScene(): void
        static isPlayingScene(): boolean
        static getPlayingScene(): string
        get distractionFreeMode(): boolean
        set distractionFreeMode(value: boolean)
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
         *      
         *  **Note:** This method only works on Android. On every other platform, this method does nothing and returns an empty [JavaClass].  
         */
        static wrap(name: string): JavaClass
        static getException(): JavaObject
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
        static eval(code: string, useGlobalExecutionContext: boolean = false): any
        static getInterface(interface: string): JavaScriptObject
        static createCallback(callable: Callable): JavaScriptObject
        static isJsBuffer(javascriptObject: JavaScriptObject): boolean
        static jsBufferToPackedByteArray(javascriptBuffer: JavaScriptObject): PackedByteArray
        static createObject(object: string, ...varargs: any[]): any
        static downloadBuffer(buffer: PackedByteArray | byte[] | ArrayBuffer, name: string, mime: string = 'application/octet-stream'): void
        static pwaNeedsUpdate(): boolean
        static pwaUpdate(): GError
        static forceFsSync(): void
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
        static removeBus(index: int64): void
        static addBus(atPosition: int64 = -1): void
        static moveBus(index: int64, toIndex: int64): void
        static setBusName(busIdx: int64, name: string): void
        static getBusName(busIdx: int64): string
        static getBusIndex(busName: StringName): int64
        static getBusChannels(busIdx: int64): int64
        static setBusVolumeDb(busIdx: int64, volumeDb: float64): void
        static getBusVolumeDb(busIdx: int64): float64
        static setBusVolumeLinear(busIdx: int64, volumeLinear: float64): void
        static getBusVolumeLinear(busIdx: int64): float64
        static setBusSend(busIdx: int64, send: StringName): void
        static getBusSend(busIdx: int64): StringName
        static setBusSolo(busIdx: int64, enable: boolean): void
        static isBusSolo(busIdx: int64): boolean
        static setBusMute(busIdx: int64, enable: boolean): void
        static isBusMute(busIdx: int64): boolean
        static setBusBypassEffects(busIdx: int64, enable: boolean): void
        static isBusBypassingEffects(busIdx: int64): boolean
        static addBusEffect(busIdx: int64, effect: AudioEffect, atPosition: int64 = -1): void
        static removeBusEffect(busIdx: int64, effectIdx: int64): void
        static getBusEffectCount(busIdx: int64): int64
        static getBusEffect(busIdx: int64, effectIdx: int64): AudioEffect
        static getBusEffectInstance(busIdx: int64, effectIdx: int64, channel: int64 = 0): AudioEffectInstance
        static swapBusEffects(busIdx: int64, effectIdx: int64, byEffectIdx: int64): void
        static setBusEffectEnabled(busIdx: int64, effectIdx: int64, enabled: boolean): void
        static isBusEffectEnabled(busIdx: int64, effectIdx: int64): boolean
        static getBusPeakVolumeLeftDb(busIdx: int64, channel: int64): float64
        static getBusPeakVolumeRightDb(busIdx: int64, channel: int64): float64
        
        /** Locks the audio driver's main loop.  
         *      
         *  **Note:** Remember to unlock it afterwards.  
         */
        static lock(): void
        
        /** Unlocks the audio driver's main loop. (After locking it, you should always unlock it.) */
        static unlock(): void
        static getSpeakerMode(): AudioServer.SpeakerMode
        static getMixRate(): float64
        static getInputMixRate(): float64
        static getDriverName(): string
        static getOutputDeviceList(): PackedStringArray
        static getTimeToNextMix(): float64
        static getTimeSinceLastMix(): float64
        static getOutputLatency(): float64
        static getInputDeviceList(): PackedStringArray
        static setBusLayout(busLayout: AudioBusLayout): void
        static generateBusLayout(): AudioBusLayout
        static setEnableTaggingUsedAudioStreams(enable: boolean): void
        static isStreamRegisteredAsSample(stream: AudioStream): boolean
        static registerStreamAsSample(stream: AudioStream): void
        get busCount(): int64
        set busCount(value: int64)
        get outputDevice(): string
        set outputDevice(value: string)
        get inputDevice(): string
        set inputDevice(value: string)
        get playbackSpeedScale(): float64
        set playbackSpeedScale(value: float64)
        static readonly busLayoutChanged: Signal<() => void>
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
        static getFeed(index: int64): CameraFeed
        static getFeedCount(): int64
        
        /** Returns an array of [CameraFeed]s. */
        static feeds(): GArray
        static addFeed(feed: CameraFeed): void
        static removeFeed(feed: CameraFeed): void
        static readonly cameraFeedAdded: Signal<(id: int64) => void>
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
            WindowFlagMax = 10,
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
        
        /** Display server supports querying the operating system's display scale factor. This allows for  *reliable*  automatic hiDPI display detection, as opposed to guessing based on the screen resolution and reported display DPI (which can be unreliable due to broken monitor EDID). **Windows, Linux (Wayland), macOS** */
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
         *  **On Windows:** Multi-window full-screen mode has a 1px border of the [member ProjectSettings.rendering/environment/defaults/default_clear_color] color.  
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
        
        /** Windows is excluded from screenshots taken by [method screen_get_image], [method screen_get_image_rect], and [method screen_get_pixel].  
         *      
         *  **Note:** This flag is implemented on macOS and Windows.  
         *      
         *  **Note:** Setting this flag will **NOT** prevent other apps from capturing an image, it should not be used as a security measure.  
         */
        static readonly WINDOW_FLAG_EXCLUDE_FROM_CAPTURE = 9
        
        /** Max value of the [enum WindowFlags]. */
        static readonly WINDOW_FLAG_MAX = 10
        
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
         *  **Note:** This flag is implemented only on macOS.  
         */
        static readonly WINDOW_EVENT_DPI_CHANGE = 6
        
        /** Sent when the window title bar decoration is changed (e.g. [constant WINDOW_FLAG_EXTEND_TO_TITLE] is set or window entered/exited full screen mode).  
         *      
         *  **Note:** This flag is implemented only on macOS.  
         */
        static readonly WINDOW_EVENT_TITLEBAR_CHANGE = 7
        
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
        static hasFeature(feature: DisplayServer.Feature): boolean
        static getName(): string
        static helpSetSearchCallbacks(searchCallback: Callable, actionCallback: Callable): void
        static globalMenuSetPopupCallbacks(menuRoot: string, openCallback: Callable, closeCallback: Callable): void
        static globalMenuAddSubmenuItem(menuRoot: string, label: string, submenu: string, index: int64 = -1): int64
        static globalMenuAddItem(menuRoot: string, label: string, callback: Callable = new Callable(), keyCallback: Callable = new Callable(), tag: any = <any> {}, accelerator: Key = 0, index: int64 = -1): int64
        static globalMenuAddCheckItem(menuRoot: string, label: string, callback: Callable = new Callable(), keyCallback: Callable = new Callable(), tag: any = <any> {}, accelerator: Key = 0, index: int64 = -1): int64
        static globalMenuAddIconItem(menuRoot: string, icon: Texture2D, label: string, callback: Callable = new Callable(), keyCallback: Callable = new Callable(), tag: any = <any> {}, accelerator: Key = 0, index: int64 = -1): int64
        static globalMenuAddIconCheckItem(menuRoot: string, icon: Texture2D, label: string, callback: Callable = new Callable(), keyCallback: Callable = new Callable(), tag: any = <any> {}, accelerator: Key = 0, index: int64 = -1): int64
        static globalMenuAddRadioCheckItem(menuRoot: string, label: string, callback: Callable = new Callable(), keyCallback: Callable = new Callable(), tag: any = <any> {}, accelerator: Key = 0, index: int64 = -1): int64
        static globalMenuAddIconRadioCheckItem(menuRoot: string, icon: Texture2D, label: string, callback: Callable = new Callable(), keyCallback: Callable = new Callable(), tag: any = <any> {}, accelerator: Key = 0, index: int64 = -1): int64
        static globalMenuAddMultistateItem(menuRoot: string, label: string, maxStates: int64, defaultState: int64, callback: Callable = new Callable(), keyCallback: Callable = new Callable(), tag: any = <any> {}, accelerator: Key = 0, index: int64 = -1): int64
        static globalMenuAddSeparator(menuRoot: string, index: int64 = -1): int64
        static globalMenuGetItemIndexFromText(menuRoot: string, text: string): int64
        static globalMenuGetItemIndexFromTag(menuRoot: string, tag: any): int64
        static globalMenuIsItemChecked(menuRoot: string, idx: int64): boolean
        static globalMenuIsItemCheckable(menuRoot: string, idx: int64): boolean
        static globalMenuIsItemRadioCheckable(menuRoot: string, idx: int64): boolean
        static globalMenuGetItemCallback(menuRoot: string, idx: int64): Callable
        static globalMenuGetItemKeyCallback(menuRoot: string, idx: int64): Callable
        static globalMenuGetItemTag(menuRoot: string, idx: int64): any
        static globalMenuGetItemText(menuRoot: string, idx: int64): string
        static globalMenuGetItemSubmenu(menuRoot: string, idx: int64): string
        static globalMenuGetItemAccelerator(menuRoot: string, idx: int64): Key
        static globalMenuIsItemDisabled(menuRoot: string, idx: int64): boolean
        static globalMenuIsItemHidden(menuRoot: string, idx: int64): boolean
        static globalMenuGetItemTooltip(menuRoot: string, idx: int64): string
        static globalMenuGetItemState(menuRoot: string, idx: int64): int64
        static globalMenuGetItemMaxStates(menuRoot: string, idx: int64): int64
        static globalMenuGetItemIcon(menuRoot: string, idx: int64): Texture2D
        static globalMenuGetItemIndentationLevel(menuRoot: string, idx: int64): int64
        static globalMenuSetItemChecked(menuRoot: string, idx: int64, checked: boolean): void
        static globalMenuSetItemCheckable(menuRoot: string, idx: int64, checkable: boolean): void
        static globalMenuSetItemRadioCheckable(menuRoot: string, idx: int64, checkable: boolean): void
        static globalMenuSetItemCallback(menuRoot: string, idx: int64, callback: Callable): void
        static globalMenuSetItemHoverCallbacks(menuRoot: string, idx: int64, callback: Callable): void
        static globalMenuSetItemKeyCallback(menuRoot: string, idx: int64, keyCallback: Callable): void
        static globalMenuSetItemTag(menuRoot: string, idx: int64, tag: any): void
        static globalMenuSetItemText(menuRoot: string, idx: int64, text: string): void
        static globalMenuSetItemSubmenu(menuRoot: string, idx: int64, submenu: string): void
        static globalMenuSetItemAccelerator(menuRoot: string, idx: int64, keycode: Key): void
        static globalMenuSetItemDisabled(menuRoot: string, idx: int64, disabled: boolean): void
        static globalMenuSetItemHidden(menuRoot: string, idx: int64, hidden: boolean): void
        static globalMenuSetItemTooltip(menuRoot: string, idx: int64, tooltip: string): void
        static globalMenuSetItemState(menuRoot: string, idx: int64, state: int64): void
        static globalMenuSetItemMaxStates(menuRoot: string, idx: int64, maxStates: int64): void
        static globalMenuSetItemIcon(menuRoot: string, idx: int64, icon: Texture2D): void
        static globalMenuSetItemIndentationLevel(menuRoot: string, idx: int64, level: int64): void
        static globalMenuGetItemCount(menuRoot: string): int64
        static globalMenuRemoveItem(menuRoot: string, idx: int64): void
        static globalMenuClear(menuRoot: string): void
        static globalMenuGetSystemMenuRoots(): GDictionary
        static ttsIsSpeaking(): boolean
        static ttsIsPaused(): boolean
        static ttsGetVoices(): GArray
        static ttsGetVoicesForLanguage(language: string): PackedStringArray
        static ttsSpeak(text: string, voice: string, volume: int64 = 50, pitch: float64 = 1, rate: float64 = 1, utteranceId: int64 = 0, interrupt: boolean = false): void
        static ttsPause(): void
        static ttsResume(): void
        static ttsStop(): void
        static ttsSetUtteranceCallback(event: DisplayServer.TtsUtteranceEvent, callable: Callable): void
        static _ttsPostUtteranceEvent(event: DisplayServer.TtsUtteranceEvent, id: int64, charPos: int64): void
        static isDarkModeSupported(): boolean
        static isDarkMode(): boolean
        static getAccentColor(): Color
        static getBaseColor(): Color
        static setSystemThemeChangeCallback(callable: Callable): void
        static mouseSetMode(mouseMode: DisplayServer.MouseMode): void
        static mouseGetMode(): DisplayServer.MouseMode
        static warpMouse(position: Vector2I): void
        static mouseGetPosition(): Vector2I
        static mouseGetButtonState(): MouseButtonMask
        static clipboardSet(clipboard: string): void
        static clipboardGet(): string
        static clipboardGetImage(): Image
        static clipboardHas(): boolean
        static clipboardHasImage(): boolean
        static clipboardSetPrimary(clipboardPrimary: string): void
        static clipboardGetPrimary(): string
        static getDisplayCutouts(): GArray
        static getDisplaySafeArea(): Rect2I
        static getScreenCount(): int64
        static getPrimaryScreen(): int64
        static getKeyboardFocusScreen(): int64
        static getScreenFromRect(rect: Rect2): int64
        static screenGetPosition(screen: int64 = -1): Vector2I
        static screenGetSize(screen: int64 = -1): Vector2I
        static screenGetUsableRect(screen: int64 = -1): Rect2I
        static screenGetDpi(screen: int64 = -1): int64
        static screenGetScale(screen: int64 = -1): float64
        static isTouchscreenAvailable(): boolean
        static screenGetMaxScale(): float64
        static screenGetRefreshRate(screen: int64 = -1): float64
        static screenGetPixel(position: Vector2I): Color
        static screenGetImage(screen: int64 = -1): Image
        static screenGetImageRect(rect: Rect2I): Image
        static screenSetOrientation(orientation: DisplayServer.ScreenOrientation, screen: int64 = -1): void
        static screenGetOrientation(screen: int64 = -1): DisplayServer.ScreenOrientation
        static screenSetKeepOn(enable: boolean): void
        static screenIsKeptOn(): boolean
        static getWindowList(): PackedInt32Array
        static getWindowAtScreenPosition(position: Vector2I): int64
        static windowGetNativeHandle(handleType: DisplayServer.HandleType, windowId: int64 = 0): int64
        static windowGetActivePopup(): int64
        static windowSetPopupSafeRect(window: int64, rect: Rect2I): void
        static windowGetPopupSafeRect(window: int64): Rect2I
        static windowSetTitle(title: string, windowId: int64 = 0): void
        static windowGetTitleSize(title: string, windowId: int64 = 0): Vector2I
        static windowSetMousePassthrough(region: PackedVector2Array | Vector2[], windowId: int64 = 0): void
        static windowGetCurrentScreen(windowId: int64 = 0): int64
        static windowSetCurrentScreen(screen: int64, windowId: int64 = 0): void
        static windowGetPosition(windowId: int64 = 0): Vector2I
        static windowGetPositionWithDecorations(windowId: int64 = 0): Vector2I
        static windowSetPosition(position: Vector2I, windowId: int64 = 0): void
        static windowGetSize(windowId: int64 = 0): Vector2I
        static windowSetSize(size: Vector2I, windowId: int64 = 0): void
        static windowSetRectChangedCallback(callback: Callable, windowId: int64 = 0): void
        static windowSetWindowEventCallback(callback: Callable, windowId: int64 = 0): void
        static windowSetInputEventCallback(callback: Callable, windowId: int64 = 0): void
        static windowSetInputTextCallback(callback: Callable, windowId: int64 = 0): void
        static windowSetDropFilesCallback(callback: Callable, windowId: int64 = 0): void
        static windowGetAttachedInstanceId(windowId: int64 = 0): int64
        static windowGetMaxSize(windowId: int64 = 0): Vector2I
        static windowSetMaxSize(maxSize: Vector2I, windowId: int64 = 0): void
        static windowGetMinSize(windowId: int64 = 0): Vector2I
        static windowSetMinSize(minSize: Vector2I, windowId: int64 = 0): void
        static windowGetSizeWithDecorations(windowId: int64 = 0): Vector2I
        static windowGetMode(windowId: int64 = 0): DisplayServer.WindowMode
        static windowSetMode(mode: DisplayServer.WindowMode, windowId: int64 = 0): void
        static windowSetFlag(flag: DisplayServer.WindowFlags, enabled: boolean, windowId: int64 = 0): void
        static windowGetFlag(flag: DisplayServer.WindowFlags, windowId: int64 = 0): boolean
        static windowSetWindowButtonsOffset(offset: Vector2I, windowId: int64 = 0): void
        static windowGetSafeTitleMargins(windowId: int64 = 0): Vector3I
        static windowRequestAttention(windowId: int64 = 0): void
        static windowMoveToForeground(windowId: int64 = 0): void
        static windowIsFocused(windowId: int64 = 0): boolean
        static windowCanDraw(windowId: int64 = 0): boolean
        static windowSetTransient(windowId: int64, parentWindowId: int64): void
        static windowSetExclusive(windowId: int64, exclusive: boolean): void
        static windowSetImeActive(active: boolean, windowId: int64 = 0): void
        static windowSetImePosition(position: Vector2I, windowId: int64 = 0): void
        static windowSetVsyncMode(vsyncMode: DisplayServer.VSyncMode, windowId: int64 = 0): void
        static windowGetVsyncMode(windowId: int64 = 0): DisplayServer.VSyncMode
        static windowIsMaximizeAllowed(windowId: int64 = 0): boolean
        static windowMaximizeOnTitleDblClick(): boolean
        static windowMinimizeOnTitleDblClick(): boolean
        static windowStartDrag(windowId: int64 = 0): void
        static windowStartResize(edge: DisplayServer.WindowResizeEdge, windowId: int64 = 0): void
        static imeGetSelection(): Vector2I
        static imeGetText(): string
        static virtualKeyboardShow(existingText: string, position: Rect2 = new Rect2(0, 0, 0, 0), type: DisplayServer.VirtualKeyboardType = 0, maxLength: int64 = -1, cursorStart: int64 = -1, cursorEnd: int64 = -1): void
        static virtualKeyboardHide(): void
        static virtualKeyboardGetHeight(): int64
        static hasHardwareKeyboard(): boolean
        static cursorSetShape(shape: DisplayServer.CursorShape): void
        static cursorGetShape(): DisplayServer.CursorShape
        static cursorSetCustomImage(cursor: Resource, shape: DisplayServer.CursorShape = 0, hotspot: Vector2 = Vector2.ZERO): void
        static getSwapCancelOk(): boolean
        static enableForStealingFocus(processId: int64): void
        static dialogShow(title: string, description: string, buttons: PackedStringArray | string[], callback: Callable): GError
        static dialogInputText(title: string, description: string, existingText: string, callback: Callable): GError
        static fileDialogShow(title: string, currentDirectory: string, fileName: string, showHidden: boolean, mode: DisplayServer.FileDialogMode, filters: PackedStringArray | string[], callback: Callable): GError
        static fileDialogWithOptionsShow(title: string, currentDirectory: string, root: string, fileName: string, showHidden: boolean, mode: DisplayServer.FileDialogMode, filters: PackedStringArray | string[], options: GArray, callback: Callable): GError
        
        /** Plays the beep sound from the operative system, if possible. Because it comes from the OS, the beep sound will be audible even if the application is muted. It may also be disabled for the entire OS by the user.  
         *      
         *  **Note:** This method is implemented on macOS, Linux (X11/Wayland), and Windows.  
         */
        static beep(): void
        static keyboardGetLayoutCount(): int64
        static keyboardGetCurrentLayout(): int64
        static keyboardSetCurrentLayout(index: int64): void
        static keyboardGetLayoutLanguage(index: int64): string
        static keyboardGetLayoutName(index: int64): string
        static keyboardGetKeycodeFromPhysical(keycode: Key): Key
        static keyboardGetLabelFromPhysical(keycode: Key): Key
        static showEmojiAndSymbolPicker(): void
        static processEvents(): void
        static forceProcessAndDropEvents(): void
        static setNativeIcon(fileName: string): void
        static setIcon(image: Image): void
        static createStatusIndicator(icon: Texture2D, tooltip: string, callback: Callable): int64
        static statusIndicatorSetIcon(id: int64, icon: Texture2D): void
        static statusIndicatorSetTooltip(id: int64, tooltip: string): void
        static statusIndicatorSetMenu(id: int64, menuRid: Rid): void
        static statusIndicatorSetCallback(id: int64, callback: Callable): void
        static statusIndicatorGetRect(id: int64): Rect2
        static deleteStatusIndicator(id: int64): void
        static tabletGetDriverCount(): int64
        static tabletGetDriverName(idx: int64): string
        static tabletGetCurrentDriver(): string
        static tabletSetCurrentDriver(name: string): void
        static isWindowTransparencyAvailable(): boolean
        static registerAdditionalOutput(object: GObject): void
        static unregisterAdditionalOutput(object: GObject): void
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
        static hasFeature(feature: NativeMenu.Feature): boolean
        static hasSystemMenu(menuId: NativeMenu.SystemMenus): boolean
        static getSystemMenu(menuId: NativeMenu.SystemMenus): Rid
        static getSystemMenuName(menuId: NativeMenu.SystemMenus): string
        static createMenu(): Rid
        static hasMenu(rid: Rid): boolean
        static freeMenu(rid: Rid): void
        static getSize(rid: Rid): Vector2
        
        /** Shows the global menu at [param position] in the screen coordinates.  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static popup(rid: Rid, position: Vector2I): void
        static setInterfaceDirection(rid: Rid, isRtl: boolean): void
        static setPopupOpenCallback(rid: Rid, callback: Callable): void
        static getPopupOpenCallback(rid: Rid): Callable
        static setPopupCloseCallback(rid: Rid, callback: Callable): void
        static getPopupCloseCallback(rid: Rid): Callable
        static setMinimumWidth(rid: Rid, width: float64): void
        static getMinimumWidth(rid: Rid): float64
        static isOpened(rid: Rid): boolean
        static addSubmenuItem(rid: Rid, label: string, submenuRid: Rid, tag: any = <any> {}, index: int64 = -1): int64
        static addItem(rid: Rid, label: string, callback: Callable = new Callable(), keyCallback: Callable = new Callable(), tag: any = <any> {}, accelerator: Key = 0, index: int64 = -1): int64
        static addCheckItem(rid: Rid, label: string, callback: Callable = new Callable(), keyCallback: Callable = new Callable(), tag: any = <any> {}, accelerator: Key = 0, index: int64 = -1): int64
        static addIconItem(rid: Rid, icon: Texture2D, label: string, callback: Callable = new Callable(), keyCallback: Callable = new Callable(), tag: any = <any> {}, accelerator: Key = 0, index: int64 = -1): int64
        static addIconCheckItem(rid: Rid, icon: Texture2D, label: string, callback: Callable = new Callable(), keyCallback: Callable = new Callable(), tag: any = <any> {}, accelerator: Key = 0, index: int64 = -1): int64
        static addRadioCheckItem(rid: Rid, label: string, callback: Callable = new Callable(), keyCallback: Callable = new Callable(), tag: any = <any> {}, accelerator: Key = 0, index: int64 = -1): int64
        static addIconRadioCheckItem(rid: Rid, icon: Texture2D, label: string, callback: Callable = new Callable(), keyCallback: Callable = new Callable(), tag: any = <any> {}, accelerator: Key = 0, index: int64 = -1): int64
        static addMultistateItem(rid: Rid, label: string, maxStates: int64, defaultState: int64, callback: Callable = new Callable(), keyCallback: Callable = new Callable(), tag: any = <any> {}, accelerator: Key = 0, index: int64 = -1): int64
        static addSeparator(rid: Rid, index: int64 = -1): int64
        static findItemIndexWithText(rid: Rid, text: string): int64
        static findItemIndexWithTag(rid: Rid, tag: any): int64
        static findItemIndexWithSubmenu(rid: Rid, submenuRid: Rid): int64
        static isItemChecked(rid: Rid, idx: int64): boolean
        static isItemCheckable(rid: Rid, idx: int64): boolean
        static isItemRadioCheckable(rid: Rid, idx: int64): boolean
        static getItemCallback(rid: Rid, idx: int64): Callable
        static getItemKeyCallback(rid: Rid, idx: int64): Callable
        static getItemTag(rid: Rid, idx: int64): any
        static getItemText(rid: Rid, idx: int64): string
        static getItemSubmenu(rid: Rid, idx: int64): Rid
        static getItemAccelerator(rid: Rid, idx: int64): Key
        static isItemDisabled(rid: Rid, idx: int64): boolean
        static isItemHidden(rid: Rid, idx: int64): boolean
        static getItemTooltip(rid: Rid, idx: int64): string
        static getItemState(rid: Rid, idx: int64): int64
        static getItemMaxStates(rid: Rid, idx: int64): int64
        static getItemIcon(rid: Rid, idx: int64): Texture2D
        static getItemIndentationLevel(rid: Rid, idx: int64): int64
        static setItemChecked(rid: Rid, idx: int64, checked: boolean): void
        static setItemCheckable(rid: Rid, idx: int64, checkable: boolean): void
        static setItemRadioCheckable(rid: Rid, idx: int64, checkable: boolean): void
        static setItemCallback(rid: Rid, idx: int64, callback: Callable): void
        static setItemHoverCallbacks(rid: Rid, idx: int64, callback: Callable): void
        static setItemKeyCallback(rid: Rid, idx: int64, keyCallback: Callable): void
        static setItemTag(rid: Rid, idx: int64, tag: any): void
        static setItemText(rid: Rid, idx: int64, text: string): void
        static setItemSubmenu(rid: Rid, idx: int64, submenuRid: Rid): void
        static setItemAccelerator(rid: Rid, idx: int64, keycode: Key): void
        static setItemDisabled(rid: Rid, idx: int64, disabled: boolean): void
        static setItemHidden(rid: Rid, idx: int64, hidden: boolean): void
        static setItemTooltip(rid: Rid, idx: int64, tooltip: string): void
        static setItemState(rid: Rid, idx: int64, state: int64): void
        static setItemMaxStates(rid: Rid, idx: int64, maxStates: int64): void
        static setItemIcon(rid: Rid, idx: int64, icon: Texture2D): void
        static setItemIndentationLevel(rid: Rid, idx: int64, level: int64): void
        static getItemCount(rid: Rid): int64
        static isSystemMenu(rid: Rid): boolean
        static removeItem(rid: Rid, idx: int64): void
        
        /** Removes all items from the global menu [param rid].  
         *      
         *  **Note:** This method is implemented on macOS and Windows.  
         */
        static clear(rid: Rid): void
    }
    // _singleton_class_: NavigationServer2D
    /** A server interface for low-level 2D navigation access.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_navigationserver2d.html  
     */
    class NavigationServer2D extends GObject {
        static getMaps(): GArray
        static mapCreate(): Rid
        static mapSetActive(map: Rid, active: boolean): void
        static mapIsActive(map: Rid): boolean
        static mapSetCellSize(map: Rid, cellSize: float64): void
        static mapGetCellSize(map: Rid): float64
        static mapSetUseEdgeConnections(map: Rid, enabled: boolean): void
        static mapGetUseEdgeConnections(map: Rid): boolean
        static mapSetEdgeConnectionMargin(map: Rid, margin: float64): void
        static mapGetEdgeConnectionMargin(map: Rid): float64
        static mapSetLinkConnectionRadius(map: Rid, radius: float64): void
        static mapGetLinkConnectionRadius(map: Rid): float64
        static mapGetPath(map: Rid, origin: Vector2, destination: Vector2, optimize: boolean, navigationLayers: int64 = 1): PackedVector2Array
        static mapGetClosestPoint(map: Rid, toPoint: Vector2): Vector2
        static mapGetClosestPointOwner(map: Rid, toPoint: Vector2): Rid
        static mapGetLinks(map: Rid): GArray
        static mapGetRegions(map: Rid): GArray
        static mapGetAgents(map: Rid): GArray
        static mapGetObstacles(map: Rid): GArray
        static mapForceUpdate(map: Rid): void
        static mapGetIterationId(map: Rid): int64
        static mapSetUseAsyncIterations(map: Rid, enabled: boolean): void
        static mapGetUseAsyncIterations(map: Rid): boolean
        static mapGetRandomPoint(map: Rid, navigationLayers: int64, uniformly: boolean): Vector2
        static queryPath(parameters: NavigationPathQueryParameters2D, result: NavigationPathQueryResult2D, callback: Callable = new Callable()): void
        static regionCreate(): Rid
        static regionSetEnabled(region: Rid, enabled: boolean): void
        static regionGetEnabled(region: Rid): boolean
        static regionSetUseEdgeConnections(region: Rid, enabled: boolean): void
        static regionGetUseEdgeConnections(region: Rid): boolean
        static regionSetEnterCost(region: Rid, enterCost: float64): void
        static regionGetEnterCost(region: Rid): float64
        static regionSetTravelCost(region: Rid, travelCost: float64): void
        static regionGetTravelCost(region: Rid): float64
        static regionSetOwnerId(region: Rid, ownerId: int64): void
        static regionGetOwnerId(region: Rid): int64
        static regionOwnsPoint(region: Rid, point: Vector2): boolean
        static regionSetMap(region: Rid, map: Rid): void
        static regionGetMap(region: Rid): Rid
        static regionSetNavigationLayers(region: Rid, navigationLayers: int64): void
        static regionGetNavigationLayers(region: Rid): int64
        static regionSetTransform(region: Rid, transform: Transform2D): void
        static regionGetTransform(region: Rid): Transform2D
        static regionSetNavigationPolygon(region: Rid, navigationPolygon: NavigationPolygon): void
        static regionGetConnectionsCount(region: Rid): int64
        static regionGetConnectionPathwayStart(region: Rid, connection: int64): Vector2
        static regionGetConnectionPathwayEnd(region: Rid, connection: int64): Vector2
        static regionGetClosestPoint(region: Rid, toPoint: Vector2): Vector2
        static regionGetRandomPoint(region: Rid, navigationLayers: int64, uniformly: boolean): Vector2
        static regionGetBounds(region: Rid): Rect2
        static linkCreate(): Rid
        static linkSetMap(link: Rid, map: Rid): void
        static linkGetMap(link: Rid): Rid
        static linkSetEnabled(link: Rid, enabled: boolean): void
        static linkGetEnabled(link: Rid): boolean
        static linkSetBidirectional(link: Rid, bidirectional: boolean): void
        static linkIsBidirectional(link: Rid): boolean
        static linkSetNavigationLayers(link: Rid, navigationLayers: int64): void
        static linkGetNavigationLayers(link: Rid): int64
        static linkSetStartPosition(link: Rid, position: Vector2): void
        static linkGetStartPosition(link: Rid): Vector2
        static linkSetEndPosition(link: Rid, position: Vector2): void
        static linkGetEndPosition(link: Rid): Vector2
        static linkSetEnterCost(link: Rid, enterCost: float64): void
        static linkGetEnterCost(link: Rid): float64
        static linkSetTravelCost(link: Rid, travelCost: float64): void
        static linkGetTravelCost(link: Rid): float64
        static linkSetOwnerId(link: Rid, ownerId: int64): void
        static linkGetOwnerId(link: Rid): int64
        static agentCreate(): Rid
        static agentSetAvoidanceEnabled(agent: Rid, enabled: boolean): void
        static agentGetAvoidanceEnabled(agent: Rid): boolean
        static agentSetMap(agent: Rid, map: Rid): void
        static agentGetMap(agent: Rid): Rid
        static agentSetPaused(agent: Rid, paused: boolean): void
        static agentGetPaused(agent: Rid): boolean
        static agentSetNeighborDistance(agent: Rid, distance: float64): void
        static agentGetNeighborDistance(agent: Rid): float64
        static agentSetMaxNeighbors(agent: Rid, count: int64): void
        static agentGetMaxNeighbors(agent: Rid): int64
        static agentSetTimeHorizonAgents(agent: Rid, timeHorizon: float64): void
        static agentGetTimeHorizonAgents(agent: Rid): float64
        static agentSetTimeHorizonObstacles(agent: Rid, timeHorizon: float64): void
        static agentGetTimeHorizonObstacles(agent: Rid): float64
        static agentSetRadius(agent: Rid, radius: float64): void
        static agentGetRadius(agent: Rid): float64
        static agentSetMaxSpeed(agent: Rid, maxSpeed: float64): void
        static agentGetMaxSpeed(agent: Rid): float64
        static agentSetVelocityForced(agent: Rid, velocity: Vector2): void
        static agentSetVelocity(agent: Rid, velocity: Vector2): void
        static agentGetVelocity(agent: Rid): Vector2
        static agentSetPosition(agent: Rid, position: Vector2): void
        static agentGetPosition(agent: Rid): Vector2
        static agentIsMapChanged(agent: Rid): boolean
        static agentSetAvoidanceCallback(agent: Rid, callback: Callable): void
        static agentHasAvoidanceCallback(agent: Rid): boolean
        static agentSetAvoidanceLayers(agent: Rid, layers: int64): void
        static agentGetAvoidanceLayers(agent: Rid): int64
        static agentSetAvoidanceMask(agent: Rid, mask: int64): void
        static agentGetAvoidanceMask(agent: Rid): int64
        static agentSetAvoidancePriority(agent: Rid, priority: float64): void
        static agentGetAvoidancePriority(agent: Rid): float64
        static obstacleCreate(): Rid
        static obstacleSetAvoidanceEnabled(obstacle: Rid, enabled: boolean): void
        static obstacleGetAvoidanceEnabled(obstacle: Rid): boolean
        static obstacleSetMap(obstacle: Rid, map: Rid): void
        static obstacleGetMap(obstacle: Rid): Rid
        static obstacleSetPaused(obstacle: Rid, paused: boolean): void
        static obstacleGetPaused(obstacle: Rid): boolean
        static obstacleSetRadius(obstacle: Rid, radius: float64): void
        static obstacleGetRadius(obstacle: Rid): float64
        static obstacleSetVelocity(obstacle: Rid, velocity: Vector2): void
        static obstacleGetVelocity(obstacle: Rid): Vector2
        static obstacleSetPosition(obstacle: Rid, position: Vector2): void
        static obstacleGetPosition(obstacle: Rid): Vector2
        static obstacleSetVertices(obstacle: Rid, vertices: PackedVector2Array | Vector2[]): void
        static obstacleGetVertices(obstacle: Rid): PackedVector2Array
        static obstacleSetAvoidanceLayers(obstacle: Rid, layers: int64): void
        static obstacleGetAvoidanceLayers(obstacle: Rid): int64
        static parseSourceGeometryData(navigationPolygon: NavigationPolygon, sourceGeometryData: NavigationMeshSourceGeometryData2D, rootNode: Node, callback: Callable = new Callable()): void
        static bakeFromSourceGeometryData(navigationPolygon: NavigationPolygon, sourceGeometryData: NavigationMeshSourceGeometryData2D, callback: Callable = new Callable()): void
        static bakeFromSourceGeometryDataAsync(navigationPolygon: NavigationPolygon, sourceGeometryData: NavigationMeshSourceGeometryData2D, callback: Callable = new Callable()): void
        static isBakingNavigationPolygon(navigationPolygon: NavigationPolygon): boolean
        static sourceGeometryParserCreate(): Rid
        static sourceGeometryParserSetCallback(parser: Rid, callback: Callable): void
        static simplifyPath(path: PackedVector2Array | Vector2[], epsilon: float64): PackedVector2Array
        static freeRid(rid: Rid): void
        static setDebugEnabled(enabled: boolean): void
        static getDebugEnabled(): boolean
        static readonly mapChanged: Signal<(map: Rid) => void>
        static readonly navigationDebugChanged: Signal<() => void>
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
        static getMaps(): GArray
        static mapCreate(): Rid
        static mapSetActive(map: Rid, active: boolean): void
        static mapIsActive(map: Rid): boolean
        static mapSetUp(map: Rid, up: Vector3): void
        static mapGetUp(map: Rid): Vector3
        static mapSetCellSize(map: Rid, cellSize: float64): void
        static mapGetCellSize(map: Rid): float64
        static mapSetCellHeight(map: Rid, cellHeight: float64): void
        static mapGetCellHeight(map: Rid): float64
        static mapSetMergeRasterizerCellScale(map: Rid, scale: float64): void
        static mapGetMergeRasterizerCellScale(map: Rid): float64
        static mapSetUseEdgeConnections(map: Rid, enabled: boolean): void
        static mapGetUseEdgeConnections(map: Rid): boolean
        static mapSetEdgeConnectionMargin(map: Rid, margin: float64): void
        static mapGetEdgeConnectionMargin(map: Rid): float64
        static mapSetLinkConnectionRadius(map: Rid, radius: float64): void
        static mapGetLinkConnectionRadius(map: Rid): float64
        static mapGetPath(map: Rid, origin: Vector3, destination: Vector3, optimize: boolean, navigationLayers: int64 = 1): PackedVector3Array
        static mapGetClosestPointToSegment(map: Rid, start: Vector3, end: Vector3, useCollision: boolean = false): Vector3
        static mapGetClosestPoint(map: Rid, toPoint: Vector3): Vector3
        static mapGetClosestPointNormal(map: Rid, toPoint: Vector3): Vector3
        static mapGetClosestPointOwner(map: Rid, toPoint: Vector3): Rid
        static mapGetLinks(map: Rid): GArray
        static mapGetRegions(map: Rid): GArray
        static mapGetAgents(map: Rid): GArray
        static mapGetObstacles(map: Rid): GArray
        static mapForceUpdate(map: Rid): void
        static mapGetIterationId(map: Rid): int64
        static mapSetUseAsyncIterations(map: Rid, enabled: boolean): void
        static mapGetUseAsyncIterations(map: Rid): boolean
        static mapGetRandomPoint(map: Rid, navigationLayers: int64, uniformly: boolean): Vector3
        static queryPath(parameters: NavigationPathQueryParameters3D, result: NavigationPathQueryResult3D, callback: Callable = new Callable()): void
        static regionCreate(): Rid
        static regionSetEnabled(region: Rid, enabled: boolean): void
        static regionGetEnabled(region: Rid): boolean
        static regionSetUseEdgeConnections(region: Rid, enabled: boolean): void
        static regionGetUseEdgeConnections(region: Rid): boolean
        static regionSetEnterCost(region: Rid, enterCost: float64): void
        static regionGetEnterCost(region: Rid): float64
        static regionSetTravelCost(region: Rid, travelCost: float64): void
        static regionGetTravelCost(region: Rid): float64
        static regionSetOwnerId(region: Rid, ownerId: int64): void
        static regionGetOwnerId(region: Rid): int64
        static regionOwnsPoint(region: Rid, point: Vector3): boolean
        static regionSetMap(region: Rid, map: Rid): void
        static regionGetMap(region: Rid): Rid
        static regionSetNavigationLayers(region: Rid, navigationLayers: int64): void
        static regionGetNavigationLayers(region: Rid): int64
        static regionSetTransform(region: Rid, transform: Transform3D): void
        static regionGetTransform(region: Rid): Transform3D
        static regionSetNavigationMesh(region: Rid, navigationMesh: NavigationMesh): void
        static regionBakeNavigationMesh(navigationMesh: NavigationMesh, rootNode: Node): void
        static regionGetConnectionsCount(region: Rid): int64
        static regionGetConnectionPathwayStart(region: Rid, connection: int64): Vector3
        static regionGetConnectionPathwayEnd(region: Rid, connection: int64): Vector3
        static regionGetClosestPointToSegment(region: Rid, start: Vector3, end: Vector3, useCollision: boolean = false): Vector3
        static regionGetClosestPoint(region: Rid, toPoint: Vector3): Vector3
        static regionGetClosestPointNormal(region: Rid, toPoint: Vector3): Vector3
        static regionGetRandomPoint(region: Rid, navigationLayers: int64, uniformly: boolean): Vector3
        static regionGetBounds(region: Rid): Aabb
        static linkCreate(): Rid
        static linkSetMap(link: Rid, map: Rid): void
        static linkGetMap(link: Rid): Rid
        static linkSetEnabled(link: Rid, enabled: boolean): void
        static linkGetEnabled(link: Rid): boolean
        static linkSetBidirectional(link: Rid, bidirectional: boolean): void
        static linkIsBidirectional(link: Rid): boolean
        static linkSetNavigationLayers(link: Rid, navigationLayers: int64): void
        static linkGetNavigationLayers(link: Rid): int64
        static linkSetStartPosition(link: Rid, position: Vector3): void
        static linkGetStartPosition(link: Rid): Vector3
        static linkSetEndPosition(link: Rid, position: Vector3): void
        static linkGetEndPosition(link: Rid): Vector3
        static linkSetEnterCost(link: Rid, enterCost: float64): void
        static linkGetEnterCost(link: Rid): float64
        static linkSetTravelCost(link: Rid, travelCost: float64): void
        static linkGetTravelCost(link: Rid): float64
        static linkSetOwnerId(link: Rid, ownerId: int64): void
        static linkGetOwnerId(link: Rid): int64
        static agentCreate(): Rid
        static agentSetAvoidanceEnabled(agent: Rid, enabled: boolean): void
        static agentGetAvoidanceEnabled(agent: Rid): boolean
        static agentSetUse3DAvoidance(agent: Rid, enabled: boolean): void
        static agentGetUse3DAvoidance(agent: Rid): boolean
        static agentSetMap(agent: Rid, map: Rid): void
        static agentGetMap(agent: Rid): Rid
        static agentSetPaused(agent: Rid, paused: boolean): void
        static agentGetPaused(agent: Rid): boolean
        static agentSetNeighborDistance(agent: Rid, distance: float64): void
        static agentGetNeighborDistance(agent: Rid): float64
        static agentSetMaxNeighbors(agent: Rid, count: int64): void
        static agentGetMaxNeighbors(agent: Rid): int64
        static agentSetTimeHorizonAgents(agent: Rid, timeHorizon: float64): void
        static agentGetTimeHorizonAgents(agent: Rid): float64
        static agentSetTimeHorizonObstacles(agent: Rid, timeHorizon: float64): void
        static agentGetTimeHorizonObstacles(agent: Rid): float64
        static agentSetRadius(agent: Rid, radius: float64): void
        static agentGetRadius(agent: Rid): float64
        static agentSetHeight(agent: Rid, height: float64): void
        static agentGetHeight(agent: Rid): float64
        static agentSetMaxSpeed(agent: Rid, maxSpeed: float64): void
        static agentGetMaxSpeed(agent: Rid): float64
        static agentSetVelocityForced(agent: Rid, velocity: Vector3): void
        static agentSetVelocity(agent: Rid, velocity: Vector3): void
        static agentGetVelocity(agent: Rid): Vector3
        static agentSetPosition(agent: Rid, position: Vector3): void
        static agentGetPosition(agent: Rid): Vector3
        static agentIsMapChanged(agent: Rid): boolean
        static agentSetAvoidanceCallback(agent: Rid, callback: Callable): void
        static agentHasAvoidanceCallback(agent: Rid): boolean
        static agentSetAvoidanceLayers(agent: Rid, layers: int64): void
        static agentGetAvoidanceLayers(agent: Rid): int64
        static agentSetAvoidanceMask(agent: Rid, mask: int64): void
        static agentGetAvoidanceMask(agent: Rid): int64
        static agentSetAvoidancePriority(agent: Rid, priority: float64): void
        static agentGetAvoidancePriority(agent: Rid): float64
        static obstacleCreate(): Rid
        static obstacleSetAvoidanceEnabled(obstacle: Rid, enabled: boolean): void
        static obstacleGetAvoidanceEnabled(obstacle: Rid): boolean
        static obstacleSetUse3DAvoidance(obstacle: Rid, enabled: boolean): void
        static obstacleGetUse3DAvoidance(obstacle: Rid): boolean
        static obstacleSetMap(obstacle: Rid, map: Rid): void
        static obstacleGetMap(obstacle: Rid): Rid
        static obstacleSetPaused(obstacle: Rid, paused: boolean): void
        static obstacleGetPaused(obstacle: Rid): boolean
        static obstacleSetRadius(obstacle: Rid, radius: float64): void
        static obstacleGetRadius(obstacle: Rid): float64
        static obstacleSetHeight(obstacle: Rid, height: float64): void
        static obstacleGetHeight(obstacle: Rid): float64
        static obstacleSetVelocity(obstacle: Rid, velocity: Vector3): void
        static obstacleGetVelocity(obstacle: Rid): Vector3
        static obstacleSetPosition(obstacle: Rid, position: Vector3): void
        static obstacleGetPosition(obstacle: Rid): Vector3
        static obstacleSetVertices(obstacle: Rid, vertices: PackedVector3Array | Vector3[]): void
        static obstacleGetVertices(obstacle: Rid): PackedVector3Array
        static obstacleSetAvoidanceLayers(obstacle: Rid, layers: int64): void
        static obstacleGetAvoidanceLayers(obstacle: Rid): int64
        static parseSourceGeometryData(navigationMesh: NavigationMesh, sourceGeometryData: NavigationMeshSourceGeometryData3D, rootNode: Node, callback: Callable = new Callable()): void
        static bakeFromSourceGeometryData(navigationMesh: NavigationMesh, sourceGeometryData: NavigationMeshSourceGeometryData3D, callback: Callable = new Callable()): void
        static bakeFromSourceGeometryDataAsync(navigationMesh: NavigationMesh, sourceGeometryData: NavigationMeshSourceGeometryData3D, callback: Callable = new Callable()): void
        static isBakingNavigationMesh(navigationMesh: NavigationMesh): boolean
        static sourceGeometryParserCreate(): Rid
        static sourceGeometryParserSetCallback(parser: Rid, callback: Callable): void
        static simplifyPath(path: PackedVector3Array | Vector3[], epsilon: float64): PackedVector3Array
        static freeRid(rid: Rid): void
        static setActive(active: boolean): void
        static setDebugEnabled(enabled: boolean): void
        static getDebugEnabled(): boolean
        static getProcessInfo(processInfo: NavigationServer3D.ProcessInfo): int64
        static readonly mapChanged: Signal<(map: Rid) => void>
        static readonly navigationDebugChanged: Signal<() => void>
        static readonly avoidanceDebugChanged: Signal<() => void>
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
        
        /** Flag indices that the mesh data will use `GL_DYNAMIC_DRAW` on GLES. Unused on Vulkan. */
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
        
        /** Bias the shadow lookup to fix self-shadowing artifacts. */
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
        
        /** Use AMD FidelityFX Super Resolution 1.0 upscaling for the viewport's 3D buffer. The amount of scaling can be set using [member Viewport.scaling_3d_scale]. Values less than `1.0` will be result in the viewport being upscaled using FSR. Values greater than `1.0` are not supported and bilinear downsampling will be used instead. A value of `1.0` disables scaling. */
        static readonly VIEWPORT_SCALING_3D_MODE_FSR = 1
        
        /** Use AMD FidelityFX Super Resolution 2.2 upscaling for the viewport's 3D buffer. The amount of scaling can be set using [member Viewport.scaling_3d_scale]. Values less than `1.0` will be result in the viewport being upscaled using FSR2. Values greater than `1.0` are not supported and bilinear downsampling will be used instead. A value of `1.0` will use FSR2 at native resolution as a TAA solution. */
        static readonly VIEWPORT_SCALING_3D_MODE_FSR2 = 2
        
        /** Use MetalFX spatial upscaling for the viewport's 3D buffer. The amount of scaling can be set using [member Viewport.scaling_3d_scale]. Values less than `1.0` will be result in the viewport being upscaled using MetalFX. Values greater than `1.0` are not supported and bilinear downsampling will be used instead. A value of `1.0` disables scaling.  
         *      
         *  **Note:** Only supported when the Metal rendering driver is in use, which limits this scaling mode to macOS and iOS.  
         */
        static readonly VIEWPORT_SCALING_3D_MODE_METALFX_SPATIAL = 3
        
        /** Use MetalFX temporal upscaling for the viewport's 3D buffer. The amount of scaling can be set using [member Viewport.scaling_3d_scale]. Values less than `1.0` will be result in the viewport being upscaled using MetalFX. Values greater than `1.0` are not supported and bilinear downsampling will be used instead. A value of `1.0` will use MetalFX at native resolution as a TAA solution.  
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
        
        /** Objects are displayed with only light information. */
        static readonly VIEWPORT_DEBUG_DRAW_LIGHTING = 2
        
        /** Objects are displayed semi-transparent with additive blending so you can see where they are drawing over top of one another. A higher overdraw (represented by brighter colors) means you are wasting performance on drawing pixels that are being hidden behind others.  
         *      
         *  **Note:** When using this debug draw mode, custom shaders will be ignored. This means vertex displacement won't be visible anymore.  
         */
        static readonly VIEWPORT_DEBUG_DRAW_OVERDRAW = 3
        
        /** Debug draw draws objects in wireframe.  
         *      
         *  **Note:** [method set_debug_generate_wireframes] must be called before loading any meshes for wireframes to be visible when using the Compatibility renderer.  
         */
        static readonly VIEWPORT_DEBUG_DRAW_WIREFRAME = 4
        
        /** Normal buffer is drawn instead of regular scene so you can see the per-pixel normals that will be used by post-processing effects. */
        static readonly VIEWPORT_DEBUG_DRAW_NORMAL_BUFFER = 5
        
        /** Objects are displayed with only the albedo value from [VoxelGI]s. */
        static readonly VIEWPORT_DEBUG_DRAW_VOXEL_GI_ALBEDO = 6
        
        /** Objects are displayed with only the lighting value from [VoxelGI]s. */
        static readonly VIEWPORT_DEBUG_DRAW_VOXEL_GI_LIGHTING = 7
        
        /** Objects are displayed with only the emission color from [VoxelGI]s. */
        static readonly VIEWPORT_DEBUG_DRAW_VOXEL_GI_EMISSION = 8
        
        /** Draws the shadow atlas that stores shadows from [OmniLight3D]s and [SpotLight3D]s in the upper left quadrant of the [Viewport]. */
        static readonly VIEWPORT_DEBUG_DRAW_SHADOW_ATLAS = 9
        
        /** Draws the shadow atlas that stores shadows from [DirectionalLight3D]s in the upper left quadrant of the [Viewport].  
         *  The slice of the camera frustum related to the shadow map cascade is superimposed to visualize coverage. The color of each slice matches the colors used for [constant VIEWPORT_DEBUG_DRAW_PSSM_SPLITS]. When shadow cascades are blended the overlap is taken into account when drawing the frustum slices.  
         *  The last cascade shows all frustum slices to illustrate the coverage of all slices.  
         */
        static readonly VIEWPORT_DEBUG_DRAW_DIRECTIONAL_SHADOW_ATLAS = 10
        
        /** Draws the estimated scene luminance. This is a 1×1 texture that is generated when autoexposure is enabled to control the scene's exposure. */
        static readonly VIEWPORT_DEBUG_DRAW_SCENE_LUMINANCE = 11
        
        /** Draws the screen space ambient occlusion texture instead of the scene so that you can clearly see how it is affecting objects. In order for this display mode to work, you must have [member Environment.ssao_enabled] set in your [WorldEnvironment]. */
        static readonly VIEWPORT_DEBUG_DRAW_SSAO = 12
        
        /** Draws the screen space indirect lighting texture instead of the scene so that you can clearly see how it is affecting objects. In order for this display mode to work, you must have [member Environment.ssil_enabled] set in your [WorldEnvironment]. */
        static readonly VIEWPORT_DEBUG_DRAW_SSIL = 13
        
        /** Colors each PSSM split for the [DirectionalLight3D]s in the scene a different color so you can see where the splits are. In order they will be colored red, green, blue, yellow. */
        static readonly VIEWPORT_DEBUG_DRAW_PSSM_SPLITS = 14
        
        /** Draws the decal atlas that stores decal textures from [Decal]s. */
        static readonly VIEWPORT_DEBUG_DRAW_DECAL_ATLAS = 15
        
        /** Draws SDFGI cascade data. This is the data structure that is used to bounce lighting against and create reflections. */
        static readonly VIEWPORT_DEBUG_DRAW_SDFGI = 16
        
        /** Draws SDFGI probe data. This is the data structure that is used to give indirect lighting dynamic objects moving within the scene. */
        static readonly VIEWPORT_DEBUG_DRAW_SDFGI_PROBES = 17
        
        /** Draws the global illumination buffer ([VoxelGI] or SDFGI). */
        static readonly VIEWPORT_DEBUG_DRAW_GI_BUFFER = 18
        
        /** Disable mesh LOD. All meshes are drawn with full detail, which can be used to compare performance. */
        static readonly VIEWPORT_DEBUG_DRAW_DISABLE_LOD = 19
        
        /** Draws the [OmniLight3D] cluster. Clustering determines where lights are positioned in screen-space, which allows the engine to only process these portions of the screen for lighting. */
        static readonly VIEWPORT_DEBUG_DRAW_CLUSTER_OMNI_LIGHTS = 20
        
        /** Draws the [SpotLight3D] cluster. Clustering determines where lights are positioned in screen-space, which allows the engine to only process these portions of the screen for lighting. */
        static readonly VIEWPORT_DEBUG_DRAW_CLUSTER_SPOT_LIGHTS = 21
        
        /** Draws the [Decal] cluster. Clustering determines where decals are positioned in screen-space, which allows the engine to only process these portions of the screen for decals. */
        static readonly VIEWPORT_DEBUG_DRAW_CLUSTER_DECALS = 22
        
        /** Draws the [ReflectionProbe] cluster. Clustering determines where reflection probes are positioned in screen-space, which allows the engine to only process these portions of the screen for reflection probes. */
        static readonly VIEWPORT_DEBUG_DRAW_CLUSTER_REFLECTION_PROBES = 23
        
        /** Draws the occlusion culling buffer. This low-resolution occlusion culling buffer is rasterized on the CPU and is used to check whether instances are occluded by other objects. */
        static readonly VIEWPORT_DEBUG_DRAW_OCCLUDERS = 24
        
        /** Draws the motion vectors buffer. This is used by temporal antialiasing to correct for motion that occurs during gameplay. */
        static readonly VIEWPORT_DEBUG_DRAW_MOTION_VECTORS = 25
        
        /** Internal buffer is drawn instead of regular scene so you can see the per-pixel output that will be used by post-processing effects. */
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
        static texture2DCreate(image: Image): Rid
        static texture2DLayeredCreate(layers: GArray, layeredType: RenderingServer.TextureLayeredType): Rid
        static texture3DCreate(format: Image.Format, width: int64, height: int64, depth: int64, mipmaps: boolean, data: GArray): Rid
        static textureProxyCreate(base: Rid): Rid
        static textureCreateFromNativeHandle(type: RenderingServer.TextureType, format: Image.Format, nativeHandle: int64, width: int64, height: int64, depth: int64, layers: int64 = 1, layeredType: RenderingServer.TextureLayeredType = 0): Rid
        static texture2DUpdate(texture: Rid, image: Image, layer: int64): void
        static texture3DUpdate(texture: Rid, data: GArray): void
        static textureProxyUpdate(texture: Rid, proxyTo: Rid): void
        static texture2DPlaceholderCreate(): Rid
        static texture2DLayeredPlaceholderCreate(layeredType: RenderingServer.TextureLayeredType): Rid
        static texture3DPlaceholderCreate(): Rid
        static texture2DGet(texture: Rid): Image
        static texture2DLayerGet(texture: Rid, layer: int64): Image
        static texture3DGet(texture: Rid): GArray
        static textureReplace(texture: Rid, byTexture: Rid): void
        static textureSetSizeOverride(texture: Rid, width: int64, height: int64): void
        static textureSetPath(texture: Rid, path: string): void
        static textureGetPath(texture: Rid): string
        static textureGetFormat(texture: Rid): Image.Format
        static textureSetForceRedrawIfVisible(texture: Rid, enable: boolean): void
        static textureRdCreate(rdTexture: Rid, layerType: RenderingServer.TextureLayeredType = 0): Rid
        static textureGetRdTexture(texture: Rid, srgb: boolean = false): Rid
        static textureGetNativeHandle(texture: Rid, srgb: boolean = false): int64
        static shaderCreate(): Rid
        static shaderSetCode(shader: Rid, code: string): void
        static shaderSetPathHint(shader: Rid, path: string): void
        static shaderGetCode(shader: Rid): string
        static getShaderParameterList(shader: Rid): GArray
        static shaderGetParameterDefault(shader: Rid, name: StringName): any
        static shaderSetDefaultTextureParameter(shader: Rid, name: StringName, texture: Rid, index: int64 = 0): void
        static shaderGetDefaultTextureParameter(shader: Rid, name: StringName, index: int64 = 0): Rid
        static materialCreate(): Rid
        static materialSetShader(shaderMaterial: Rid, shader: Rid): void
        static materialSetParam(material: Rid, parameter: StringName, value: any): void
        static materialGetParam(material: Rid, parameter: StringName): any
        static materialSetRenderPriority(material: Rid, priority: int64): void
        static materialSetNextPass(material: Rid, nextMaterial: Rid): void
        static meshCreateFromSurfaces(surfaces: GArray, blendShapeCount: int64 = 0): Rid
        static meshCreate(): Rid
        static meshSurfaceGetFormatOffset(format: RenderingServer.ArrayFormat, vertexCount: int64, arrayIndex: int64): int64
        static meshSurfaceGetFormatVertexStride(format: RenderingServer.ArrayFormat, vertexCount: int64): int64
        static meshSurfaceGetFormatNormalTangentStride(format: RenderingServer.ArrayFormat, vertexCount: int64): int64
        static meshSurfaceGetFormatAttributeStride(format: RenderingServer.ArrayFormat, vertexCount: int64): int64
        static meshSurfaceGetFormatSkinStride(format: RenderingServer.ArrayFormat, vertexCount: int64): int64
        static meshAddSurface(mesh: Rid, surface: GDictionary): void
        static meshAddSurfaceFromArrays(mesh: Rid, primitive: RenderingServer.PrimitiveType, arrays: GArray, blendShapes: GArray = [], lods: GDictionary = new GDictionary(), compressFormat: RenderingServer.ArrayFormat = 0): void
        static meshGetBlendShapeCount(mesh: Rid): int64
        static meshSetBlendShapeMode(mesh: Rid, mode: RenderingServer.BlendShapeMode): void
        static meshGetBlendShapeMode(mesh: Rid): RenderingServer.BlendShapeMode
        static meshSurfaceSetMaterial(mesh: Rid, surface: int64, material: Rid): void
        static meshSurfaceGetMaterial(mesh: Rid, surface: int64): Rid
        static meshGetSurface(mesh: Rid, surface: int64): GDictionary
        static meshSurfaceGetArrays(mesh: Rid, surface: int64): GArray
        static meshSurfaceGetBlendShapeArrays(mesh: Rid, surface: int64): GArray
        static meshGetSurfaceCount(mesh: Rid): int64
        static meshSetCustomAabb(mesh: Rid, aabb: Aabb): void
        static meshGetCustomAabb(mesh: Rid): Aabb
        static meshSurfaceRemove(mesh: Rid, surface: int64): void
        static meshClear(mesh: Rid): void
        static meshSurfaceUpdateVertexRegion(mesh: Rid, surface: int64, offset: int64, data: PackedByteArray | byte[] | ArrayBuffer): void
        static meshSurfaceUpdateAttributeRegion(mesh: Rid, surface: int64, offset: int64, data: PackedByteArray | byte[] | ArrayBuffer): void
        static meshSurfaceUpdateSkinRegion(mesh: Rid, surface: int64, offset: int64, data: PackedByteArray | byte[] | ArrayBuffer): void
        static meshSetShadowMesh(mesh: Rid, shadowMesh: Rid): void
        static multimeshCreate(): Rid
        static multimeshAllocateData(multimesh: Rid, instances: int64, transformFormat: RenderingServer.MultimeshTransformFormat, colorFormat: boolean = false, customDataFormat: boolean = false, useIndirect: boolean = false): void
        static multimeshGetInstanceCount(multimesh: Rid): int64
        static multimeshSetMesh(multimesh: Rid, mesh: Rid): void
        static multimeshInstanceSetTransform(multimesh: Rid, index: int64, transform: Transform3D): void
        static multimeshInstanceSetTransform2D(multimesh: Rid, index: int64, transform: Transform2D): void
        static multimeshInstanceSetColor(multimesh: Rid, index: int64, color: Color): void
        static multimeshInstanceSetCustomData(multimesh: Rid, index: int64, customData: Color): void
        static multimeshGetMesh(multimesh: Rid): Rid
        static multimeshGetAabb(multimesh: Rid): Aabb
        static multimeshSetCustomAabb(multimesh: Rid, aabb: Aabb): void
        static multimeshGetCustomAabb(multimesh: Rid): Aabb
        static multimeshInstanceGetTransform(multimesh: Rid, index: int64): Transform3D
        static multimeshInstanceGetTransform2D(multimesh: Rid, index: int64): Transform2D
        static multimeshInstanceGetColor(multimesh: Rid, index: int64): Color
        static multimeshInstanceGetCustomData(multimesh: Rid, index: int64): Color
        static multimeshSetVisibleInstances(multimesh: Rid, visible: int64): void
        static multimeshGetVisibleInstances(multimesh: Rid): int64
        static multimeshSetBuffer(multimesh: Rid, buffer: PackedFloat32Array | float32[]): void
        static multimeshGetCommandBufferRdRid(multimesh: Rid): Rid
        static multimeshGetBufferRdRid(multimesh: Rid): Rid
        static multimeshGetBuffer(multimesh: Rid): PackedFloat32Array
        static multimeshSetBufferInterpolated(multimesh: Rid, buffer: PackedFloat32Array | float32[], bufferPrevious: PackedFloat32Array | float32[]): void
        static multimeshSetPhysicsInterpolated(multimesh: Rid, interpolated: boolean): void
        static multimeshSetPhysicsInterpolationQuality(multimesh: Rid, quality: RenderingServer.MultimeshPhysicsInterpolationQuality): void
        static multimeshInstanceResetPhysicsInterpolation(multimesh: Rid, index: int64): void
        static skeletonCreate(): Rid
        static skeletonAllocateData(skeleton: Rid, bones: int64, is2DSkeleton: boolean = false): void
        static skeletonGetBoneCount(skeleton: Rid): int64
        static skeletonBoneSetTransform(skeleton: Rid, bone: int64, transform: Transform3D): void
        static skeletonBoneGetTransform(skeleton: Rid, bone: int64): Transform3D
        static skeletonBoneSetTransform2D(skeleton: Rid, bone: int64, transform: Transform2D): void
        static skeletonBoneGetTransform2D(skeleton: Rid, bone: int64): Transform2D
        static skeletonSetBaseTransform2D(skeleton: Rid, baseTransform: Transform2D): void
        static directionalLightCreate(): Rid
        static omniLightCreate(): Rid
        static spotLightCreate(): Rid
        static lightSetColor(light: Rid, color: Color): void
        static lightSetParam(light: Rid, param: RenderingServer.LightParam, value: float64): void
        static lightSetShadow(light: Rid, enabled: boolean): void
        static lightSetProjector(light: Rid, texture: Rid): void
        static lightSetNegative(light: Rid, enable: boolean): void
        static lightSetCullMask(light: Rid, mask: int64): void
        static lightSetDistanceFade(decal: Rid, enabled: boolean, begin: float64, shadow: float64, length: float64): void
        static lightSetReverseCullFaceMode(light: Rid, enabled: boolean): void
        static lightSetShadowCasterMask(light: Rid, mask: int64): void
        static lightSetBakeMode(light: Rid, bakeMode: RenderingServer.LightBakeMode): void
        static lightSetMaxSdfgiCascade(light: Rid, cascade: int64): void
        static lightOmniSetShadowMode(light: Rid, mode: RenderingServer.LightOmniShadowMode): void
        static lightDirectionalSetShadowMode(light: Rid, mode: RenderingServer.LightDirectionalShadowMode): void
        static lightDirectionalSetBlendSplits(light: Rid, enable: boolean): void
        static lightDirectionalSetSkyMode(light: Rid, mode: RenderingServer.LightDirectionalSkyMode): void
        static lightProjectorsSetFilter(filter: RenderingServer.LightProjectorFilter): void
        static lightmapsSetBicubicFilter(enable: boolean): void
        static positionalSoftShadowFilterSetQuality(quality: RenderingServer.ShadowQuality): void
        static directionalSoftShadowFilterSetQuality(quality: RenderingServer.ShadowQuality): void
        static directionalShadowAtlasSetSize(size: int64, is16Bits: boolean): void
        static reflectionProbeCreate(): Rid
        static reflectionProbeSetUpdateMode(probe: Rid, mode: RenderingServer.ReflectionProbeUpdateMode): void
        static reflectionProbeSetIntensity(probe: Rid, intensity: float64): void
        static reflectionProbeSetBlendDistance(probe: Rid, blendDistance: float64): void
        static reflectionProbeSetAmbientMode(probe: Rid, mode: RenderingServer.ReflectionProbeAmbientMode): void
        static reflectionProbeSetAmbientColor(probe: Rid, color: Color): void
        static reflectionProbeSetAmbientEnergy(probe: Rid, energy: float64): void
        static reflectionProbeSetMaxDistance(probe: Rid, distance: float64): void
        static reflectionProbeSetSize(probe: Rid, size: Vector3): void
        static reflectionProbeSetOriginOffset(probe: Rid, offset: Vector3): void
        static reflectionProbeSetAsInterior(probe: Rid, enable: boolean): void
        static reflectionProbeSetEnableBoxProjection(probe: Rid, enable: boolean): void
        static reflectionProbeSetEnableShadows(probe: Rid, enable: boolean): void
        static reflectionProbeSetCullMask(probe: Rid, layers: int64): void
        static reflectionProbeSetReflectionMask(probe: Rid, layers: int64): void
        static reflectionProbeSetResolution(probe: Rid, resolution: int64): void
        static reflectionProbeSetMeshLodThreshold(probe: Rid, pixels: float64): void
        static decalCreate(): Rid
        static decalSetSize(decal: Rid, size: Vector3): void
        static decalSetTexture(decal: Rid, type: RenderingServer.DecalTexture, texture: Rid): void
        static decalSetEmissionEnergy(decal: Rid, energy: float64): void
        static decalSetAlbedoMix(decal: Rid, albedoMix: float64): void
        static decalSetModulate(decal: Rid, color: Color): void
        static decalSetCullMask(decal: Rid, mask: int64): void
        static decalSetDistanceFade(decal: Rid, enabled: boolean, begin: float64, length: float64): void
        static decalSetFade(decal: Rid, above: float64, below: float64): void
        static decalSetNormalFade(decal: Rid, fade: float64): void
        static decalsSetFilter(filter: RenderingServer.DecalFilter): void
        static gISetUseHalfResolution(halfResolution: boolean): void
        static voxelGICreate(): Rid
        static voxelGIAllocateData(voxelGI: Rid, toCellXform: Transform3D, aabb: Aabb, octreeSize: Vector3I, octreeCells: PackedByteArray | byte[] | ArrayBuffer, dataCells: PackedByteArray | byte[] | ArrayBuffer, distanceField: PackedByteArray | byte[] | ArrayBuffer, levelCounts: PackedInt32Array | int32[]): void
        static voxelGIGetOctreeSize(voxelGI: Rid): Vector3I
        static voxelGIGetOctreeCells(voxelGI: Rid): PackedByteArray
        static voxelGIGetDataCells(voxelGI: Rid): PackedByteArray
        static voxelGIGetDistanceField(voxelGI: Rid): PackedByteArray
        static voxelGIGetLevelCounts(voxelGI: Rid): PackedInt32Array
        static voxelGIGetToCellXform(voxelGI: Rid): Transform3D
        static voxelGISetDynamicRange(voxelGI: Rid, range: float64): void
        static voxelGISetPropagation(voxelGI: Rid, amount: float64): void
        static voxelGISetEnergy(voxelGI: Rid, energy: float64): void
        static voxelGISetBakedExposureNormalization(voxelGI: Rid, bakedExposure: float64): void
        static voxelGISetBias(voxelGI: Rid, bias: float64): void
        static voxelGISetNormalBias(voxelGI: Rid, bias: float64): void
        static voxelGISetInterior(voxelGI: Rid, enable: boolean): void
        static voxelGISetUseTwoBounces(voxelGI: Rid, enable: boolean): void
        static voxelGISetQuality(quality: RenderingServer.VoxelGIQuality): void
        static lightmapCreate(): Rid
        static lightmapSetTextures(lightmap: Rid, light: Rid, usesSh: boolean): void
        static lightmapSetProbeBounds(lightmap: Rid, bounds: Aabb): void
        static lightmapSetProbeInterior(lightmap: Rid, interior: boolean): void
        static lightmapSetProbeCaptureData(lightmap: Rid, points: PackedVector3Array | Vector3[], pointSh: PackedColorArray | Color[], tetrahedra: PackedInt32Array | int32[], bspTree: PackedInt32Array | int32[]): void
        static lightmapGetProbeCapturePoints(lightmap: Rid): PackedVector3Array
        static lightmapGetProbeCaptureSh(lightmap: Rid): PackedColorArray
        static lightmapGetProbeCaptureTetrahedra(lightmap: Rid): PackedInt32Array
        static lightmapGetProbeCaptureBspTree(lightmap: Rid): PackedInt32Array
        static lightmapSetBakedExposureNormalization(lightmap: Rid, bakedExposure: float64): void
        static lightmapSetProbeCaptureUpdateSpeed(speed: float64): void
        static particlesCreate(): Rid
        static particlesSetMode(particles: Rid, mode: RenderingServer.ParticlesMode): void
        static particlesSetEmitting(particles: Rid, emitting: boolean): void
        static particlesGetEmitting(particles: Rid): boolean
        static particlesSetAmount(particles: Rid, amount: int64): void
        static particlesSetAmountRatio(particles: Rid, ratio: float64): void
        static particlesSetLifetime(particles: Rid, lifetime: float64): void
        static particlesSetOneShot(particles: Rid, oneShot: boolean): void
        static particlesSetPreProcessTime(particles: Rid, time: float64): void
        static particlesRequestProcessTime(particles: Rid, time: float64): void
        static particlesSetExplosivenessRatio(particles: Rid, ratio: float64): void
        static particlesSetRandomnessRatio(particles: Rid, ratio: float64): void
        static particlesSetInterpToEnd(particles: Rid, factor: float64): void
        static particlesSetEmitterVelocity(particles: Rid, velocity: Vector3): void
        static particlesSetCustomAabb(particles: Rid, aabb: Aabb): void
        static particlesSetSpeedScale(particles: Rid, scale: float64): void
        static particlesSetUseLocalCoordinates(particles: Rid, enable: boolean): void
        static particlesSetProcessMaterial(particles: Rid, material: Rid): void
        static particlesSetFixedFps(particles: Rid, fps: int64): void
        static particlesSetInterpolate(particles: Rid, enable: boolean): void
        static particlesSetFractionalDelta(particles: Rid, enable: boolean): void
        static particlesSetCollisionBaseSize(particles: Rid, size: float64): void
        static particlesSetTransformAlign(particles: Rid, align: RenderingServer.ParticlesTransformAlign): void
        static particlesSetTrails(particles: Rid, enable: boolean, lengthSec: float64): void
        static particlesSetTrailBindPoses(particles: Rid, bindPoses: GArray): void
        static particlesIsInactive(particles: Rid): boolean
        static particlesRequestProcess(particles: Rid): void
        static particlesRestart(particles: Rid): void
        static particlesSetSubemitter(particles: Rid, subemitterParticles: Rid): void
        static particlesEmit(particles: Rid, transform: Transform3D, velocity: Vector3, color: Color, custom: Color, emitFlags: int64): void
        static particlesSetDrawOrder(particles: Rid, order: RenderingServer.ParticlesDrawOrder): void
        static particlesSetDrawPasses(particles: Rid, count: int64): void
        static particlesSetDrawPassMesh(particles: Rid, pass: int64, mesh: Rid): void
        static particlesGetCurrentAabb(particles: Rid): Aabb
        static particlesSetEmissionTransform(particles: Rid, transform: Transform3D): void
        static particlesCollisionCreate(): Rid
        static particlesCollisionSetCollisionType(particlesCollision: Rid, type: RenderingServer.ParticlesCollisionType): void
        static particlesCollisionSetCullMask(particlesCollision: Rid, mask: int64): void
        static particlesCollisionSetSphereRadius(particlesCollision: Rid, radius: float64): void
        static particlesCollisionSetBoxExtents(particlesCollision: Rid, extents: Vector3): void
        static particlesCollisionSetAttractorStrength(particlesCollision: Rid, strength: float64): void
        static particlesCollisionSetAttractorDirectionality(particlesCollision: Rid, amount: float64): void
        static particlesCollisionSetAttractorAttenuation(particlesCollision: Rid, curve: float64): void
        static particlesCollisionSetFieldTexture(particlesCollision: Rid, texture: Rid): void
        static particlesCollisionHeightFieldUpdate(particlesCollision: Rid): void
        static particlesCollisionSetHeightFieldResolution(particlesCollision: Rid, resolution: RenderingServer.ParticlesCollisionHeightfieldResolution): void
        static particlesCollisionSetHeightFieldMask(particlesCollision: Rid, mask: int64): void
        static fogVolumeCreate(): Rid
        static fogVolumeSetShape(fogVolume: Rid, shape: RenderingServer.FogVolumeShape): void
        static fogVolumeSetSize(fogVolume: Rid, size: Vector3): void
        static fogVolumeSetMaterial(fogVolume: Rid, material: Rid): void
        static visibilityNotifierCreate(): Rid
        static visibilityNotifierSetAabb(notifier: Rid, aabb: Aabb): void
        static visibilityNotifierSetCallbacks(notifier: Rid, enterCallable: Callable, exitCallable: Callable): void
        static occluderCreate(): Rid
        static occluderSetMesh(occluder: Rid, vertices: PackedVector3Array | Vector3[], indices: PackedInt32Array | int32[]): void
        static cameraCreate(): Rid
        static cameraSetPerspective(camera: Rid, fovyDegrees: float64, zNear: float64, zFar: float64): void
        static cameraSetOrthogonal(camera: Rid, size: float64, zNear: float64, zFar: float64): void
        static cameraSetFrustum(camera: Rid, size: float64, offset: Vector2, zNear: float64, zFar: float64): void
        static cameraSetTransform(camera: Rid, transform: Transform3D): void
        static cameraSetCullMask(camera: Rid, layers: int64): void
        static cameraSetEnvironment(camera: Rid, env: Rid): void
        static cameraSetCameraAttributes(camera: Rid, effects: Rid): void
        static cameraSetCompositor(camera: Rid, compositor: Rid): void
        static cameraSetUseVerticalAspect(camera: Rid, enable: boolean): void
        static viewportCreate(): Rid
        static viewportSetUseXR(viewport: Rid, useXR: boolean): void
        static viewportSetSize(viewport: Rid, width: int64, height: int64): void
        static viewportSetActive(viewport: Rid, active: boolean): void
        static viewportSetParentViewport(viewport: Rid, parentViewport: Rid): void
        static viewportAttachToScreen(viewport: Rid, rect: Rect2 = new Rect2(0, 0, 0, 0), screen: int64 = 0): void
        static viewportSetRenderDirectToScreen(viewport: Rid, enabled: boolean): void
        static viewportSetCanvasCullMask(viewport: Rid, canvasCullMask: int64): void
        static viewportSetScaling3DMode(viewport: Rid, scaling3DMode: RenderingServer.ViewportScaling3DMode): void
        static viewportSetScaling3DScale(viewport: Rid, scale: float64): void
        static viewportSetFsrSharpness(viewport: Rid, sharpness: float64): void
        static viewportSetTextureMipmapBias(viewport: Rid, mipmapBias: float64): void
        static viewportSetAnisotropicFilteringLevel(viewport: Rid, anisotropicFilteringLevel: RenderingServer.ViewportAnisotropicFiltering): void
        static viewportSetUpdateMode(viewport: Rid, updateMode: RenderingServer.ViewportUpdateMode): void
        static viewportGetUpdateMode(viewport: Rid): RenderingServer.ViewportUpdateMode
        static viewportSetClearMode(viewport: Rid, clearMode: RenderingServer.ViewportClearMode): void
        static viewportGetRenderTarget(viewport: Rid): Rid
        static viewportGetTexture(viewport: Rid): Rid
        static viewportSetDisable3D(viewport: Rid, disable: boolean): void
        static viewportSetDisable2D(viewport: Rid, disable: boolean): void
        static viewportSetEnvironmentMode(viewport: Rid, mode: RenderingServer.ViewportEnvironmentMode): void
        static viewportAttachCamera(viewport: Rid, camera: Rid): void
        static viewportSetScenario(viewport: Rid, scenario: Rid): void
        static viewportAttachCanvas(viewport: Rid, canvas: Rid): void
        static viewportRemoveCanvas(viewport: Rid, canvas: Rid): void
        static viewportSetSnap2DTransformsToPixel(viewport: Rid, enabled: boolean): void
        static viewportSetSnap2DVerticesToPixel(viewport: Rid, enabled: boolean): void
        static viewportSetDefaultCanvasItemTextureFilter(viewport: Rid, filter: RenderingServer.CanvasItemTextureFilter): void
        static viewportSetDefaultCanvasItemTextureRepeat(viewport: Rid, repeat: RenderingServer.CanvasItemTextureRepeat): void
        static viewportSetCanvasTransform(viewport: Rid, canvas: Rid, offset: Transform2D): void
        static viewportSetCanvasStacking(viewport: Rid, canvas: Rid, layer: int64, sublayer: int64): void
        static viewportSetTransparentBackground(viewport: Rid, enabled: boolean): void
        static viewportSetGlobalCanvasTransform(viewport: Rid, transform: Transform2D): void
        static viewportSetSdfOversizeAndScale(viewport: Rid, oversize: RenderingServer.ViewportSdfOversize, scale: RenderingServer.ViewportSdfScale): void
        static viewportSetPositionalShadowAtlasSize(viewport: Rid, size: int64, use16Bits: boolean = false): void
        static viewportSetPositionalShadowAtlasQuadrantSubdivision(viewport: Rid, quadrant: int64, subdivision: int64): void
        static viewportSetMsaa3D(viewport: Rid, msaa: RenderingServer.ViewportMsaa): void
        static viewportSetMsaa2D(viewport: Rid, msaa: RenderingServer.ViewportMsaa): void
        static viewportSetUseHdr2D(viewport: Rid, enabled: boolean): void
        static viewportSetScreenSpaceAA(viewport: Rid, mode: RenderingServer.ViewportScreenSpaceAA): void
        static viewportSetUseTaa(viewport: Rid, enable: boolean): void
        static viewportSetUseDebanding(viewport: Rid, enable: boolean): void
        static viewportSetUseOcclusionCulling(viewport: Rid, enable: boolean): void
        static viewportSetOcclusionRaysPerThread(raysPerThread: int64): void
        static viewportSetOcclusionCullingBuildQuality(quality: RenderingServer.ViewportOcclusionCullingBuildQuality): void
        static viewportGetRenderInfo(viewport: Rid, type: RenderingServer.ViewportRenderInfoType, info: RenderingServer.ViewportRenderInfo): int64
        static viewportSetDebugDraw(viewport: Rid, draw: RenderingServer.ViewportDebugDraw): void
        static viewportSetMeasureRenderTime(viewport: Rid, enable: boolean): void
        static viewportGetMeasuredRenderTimeCpu(viewport: Rid): float64
        static viewportGetMeasuredRenderTimeGpu(viewport: Rid): float64
        static viewportSetVrsMode(viewport: Rid, mode: RenderingServer.ViewportVrsMode): void
        static viewportSetVrsUpdateMode(viewport: Rid, mode: RenderingServer.ViewportVrsUpdateMode): void
        static viewportSetVrsTexture(viewport: Rid, texture: Rid): void
        static skyCreate(): Rid
        static skySetRadianceSize(sky: Rid, radianceSize: int64): void
        static skySetMode(sky: Rid, mode: RenderingServer.SkyMode): void
        static skySetMaterial(sky: Rid, material: Rid): void
        static skyBakePanorama(sky: Rid, energy: float64, bakeIrradiance: boolean, size: Vector2I): Image
        static compositorEffectCreate(): Rid
        static compositorEffectSetEnabled(effect: Rid, enabled: boolean): void
        static compositorEffectSetCallback(effect: Rid, callbackType: RenderingServer.CompositorEffectCallbackType, callback: Callable): void
        static compositorEffectSetFlag(effect: Rid, flag: RenderingServer.CompositorEffectFlags, set: boolean): void
        static compositorCreate(): Rid
        static compositorSetCompositorEffects(compositor: Rid, effects: GArray): void
        static environmentCreate(): Rid
        static environmentSetBackground(env: Rid, bg: RenderingServer.EnvironmentBG): void
        static environmentSetCameraId(env: Rid, id: int64): void
        static environmentSetSky(env: Rid, sky: Rid): void
        static environmentSetSkyCustomFov(env: Rid, scale: float64): void
        static environmentSetSkyOrientation(env: Rid, orientation: Basis): void
        static environmentSetBgColor(env: Rid, color: Color): void
        static environmentSetBgEnergy(env: Rid, multiplier: float64, exposureValue: float64): void
        static environmentSetCanvasMaxLayer(env: Rid, maxLayer: int64): void
        static environmentSetAmbientLight(env: Rid, color: Color, ambient: RenderingServer.EnvironmentAmbientSource = 0, energy: float64 = 1, skyContribution: float64 = 0, reflectionSource: RenderingServer.EnvironmentReflectionSource = 0): void
        static environmentSetGlow(env: Rid, enable: boolean, levels: PackedFloat32Array | float32[], intensity: float64, strength: float64, mix: float64, bloomThreshold: float64, blendMode: RenderingServer.EnvironmentGlowBlendMode, hdrBleedThreshold: float64, hdrBleedScale: float64, hdrLuminanceCap: float64, glowMapStrength: float64, glowMap: Rid): void
        static environmentSetTonemap(env: Rid, toneMapper: RenderingServer.EnvironmentToneMapper, exposure: float64, white: float64): void
        static environmentSetAdjustment(env: Rid, enable: boolean, brightness: float64, contrast: float64, saturation: float64, use1DColorCorrection: boolean, colorCorrection: Rid): void
        static environmentSetSsr(env: Rid, enable: boolean, maxSteps: int64, fadeIn: float64, fadeOut: float64, depthTolerance: float64): void
        static environmentSetSsao(env: Rid, enable: boolean, radius: float64, intensity: float64, power: float64, detail: float64, horizon: float64, sharpness: float64, lightAffect: float64, aOChannelAffect: float64): void
        static environmentSetFog(env: Rid, enable: boolean, lightColor: Color, lightEnergy: float64, sunScatter: float64, density: float64, height: float64, heightDensity: float64, aerialPerspective: float64, skyAffect: float64, fogMode: RenderingServer.EnvironmentFogMode = 0): void
        static environmentSetSdfgi(env: Rid, enable: boolean, cascades: int64, minCellSize: float64, yScale: RenderingServer.EnvironmentSdfgiyScale, useOcclusion: boolean, bounceFeedback: float64, readSky: boolean, energy: float64, normalBias: float64, probeBias: float64): void
        static environmentSetVolumetricFog(env: Rid, enable: boolean, density: float64, albedo: Color, emission: Color, emissionEnergy: float64, anisotropy: float64, length: float64, pDetailSpread: float64, gIInject: float64, temporalReprojection: boolean, temporalReprojectionAmount: float64, ambientInject: float64, skyAffect: float64): void
        static environmentGlowSetUseBicubicUpscale(enable: boolean): void
        static environmentSetSsrRoughnessQuality(quality: RenderingServer.EnvironmentSsrRoughnessQuality): void
        static environmentSetSsaoQuality(quality: RenderingServer.EnvironmentSsaoQuality, halfSize: boolean, adaptiveTarget: float64, blurPasses: int64, fadeOutFrom: float64, fadeOutTo: float64): void
        static environmentSetSsilQuality(quality: RenderingServer.EnvironmentSsilQuality, halfSize: boolean, adaptiveTarget: float64, blurPasses: int64, fadeOutFrom: float64, fadeOutTo: float64): void
        static environmentSetSdfgiRayCount(rayCount: RenderingServer.EnvironmentSdfgiRayCount): void
        static environmentSetSdfgiFramesToConverge(frames: RenderingServer.EnvironmentSdfgiFramesToConverge): void
        static environmentSetSdfgiFramesToUpdateLight(frames: RenderingServer.EnvironmentSdfgiFramesToUpdateLight): void
        static environmentSetVolumetricFogVolumeSize(size: int64, depth: int64): void
        static environmentSetVolumetricFogFilterActive(active: boolean): void
        static environmentBakePanorama(environment: Rid, bakeIrradiance: boolean, size: Vector2I): Image
        static screenSpaceRoughnessLimiterSetActive(enable: boolean, amount: float64, limit: float64): void
        static subSurfaceScatteringSetQuality(quality: RenderingServer.SubSurfaceScatteringQuality): void
        static subSurfaceScatteringSetScale(scale: float64, depthScale: float64): void
        static cameraAttributesCreate(): Rid
        static cameraAttributesSetDofBlurQuality(quality: RenderingServer.DofBlurQuality, useJitter: boolean): void
        static cameraAttributesSetDofBlurBokehShape(shape: RenderingServer.DofBokehShape): void
        static cameraAttributesSetDofBlur(cameraAttributes: Rid, farEnable: boolean, farDistance: float64, farTransition: float64, nearEnable: boolean, nearDistance: float64, nearTransition: float64, amount: float64): void
        static cameraAttributesSetExposure(cameraAttributes: Rid, multiplier: float64, normalization: float64): void
        static cameraAttributesSetAutoExposure(cameraAttributes: Rid, enable: boolean, minSensitivity: float64, maxSensitivity: float64, speed: float64, scale: float64): void
        static scenarioCreate(): Rid
        static scenarioSetEnvironment(scenario: Rid, environment: Rid): void
        static scenarioSetFallbackEnvironment(scenario: Rid, environment: Rid): void
        static scenarioSetCameraAttributes(scenario: Rid, effects: Rid): void
        static scenarioSetCompositor(scenario: Rid, compositor: Rid): void
        static instanceCreate2(base: Rid, scenario: Rid): Rid
        static instanceCreate(): Rid
        static instanceSetBase(instance: Rid, base: Rid): void
        static instanceSetScenario(instance: Rid, scenario: Rid): void
        static instanceSetLayerMask(instance: Rid, mask: int64): void
        static instanceSetPivotData(instance: Rid, sortingOffset: float64, useAabbCenter: boolean): void
        static instanceSetTransform(instance: Rid, transform: Transform3D): void
        static instanceSetInterpolated(instance: Rid, interpolated: boolean): void
        static instanceResetPhysicsInterpolation(instance: Rid): void
        static instanceAttachObjectInstanceId(instance: Rid, id: int64): void
        static instanceSetBlendShapeWeight(instance: Rid, shape: int64, weight: float64): void
        static instanceSetSurfaceOverrideMaterial(instance: Rid, surface: int64, material: Rid): void
        static instanceSetVisible(instance: Rid, visible: boolean): void
        static instanceGeometrySetTransparency(instance: Rid, transparency: float64): void
        static instanceSetCustomAabb(instance: Rid, aabb: Aabb): void
        static instanceAttachSkeleton(instance: Rid, skeleton: Rid): void
        static instanceSetExtraVisibilityMargin(instance: Rid, margin: float64): void
        static instanceSetVisibilityParent(instance: Rid, parent: Rid): void
        static instanceSetIgnoreCulling(instance: Rid, enabled: boolean): void
        static instanceGeometrySetFlag(instance: Rid, flag: RenderingServer.InstanceFlags, enabled: boolean): void
        static instanceGeometrySetCastShadowsSetting(instance: Rid, shadowCastingSetting: RenderingServer.ShadowCastingSetting): void
        static instanceGeometrySetMaterialOverride(instance: Rid, material: Rid): void
        static instanceGeometrySetMaterialOverlay(instance: Rid, material: Rid): void
        static instanceGeometrySetVisibilityRange(instance: Rid, min: float64, max: float64, minMargin: float64, maxMargin: float64, fadeMode: RenderingServer.VisibilityRangeFadeMode): void
        static instanceGeometrySetLightmap(instance: Rid, lightmap: Rid, lightmapUVScale: Rect2, lightmapSlice: int64): void
        static instanceGeometrySetLodBias(instance: Rid, lodBias: float64): void
        static instanceGeometrySetShaderParameter(instance: Rid, parameter: StringName, value: any): void
        static instanceGeometryGetShaderParameter(instance: Rid, parameter: StringName): any
        static instanceGeometryGetShaderParameterDefaultValue(instance: Rid, parameter: StringName): any
        static instanceGeometryGetShaderParameterList(instance: Rid): GArray
        static instancesCullAabb(aabb: Aabb, scenario: Rid = new Rid()): PackedInt64Array
        static instancesCullRay(from: Vector3, to: Vector3, scenario: Rid = new Rid()): PackedInt64Array
        static instancesCullConvex(convex: GArray, scenario: Rid = new Rid()): PackedInt64Array
        static bakeRenderUV2(base: Rid, materialOverrides: GArray, imageSize: Vector2I): GArray
        static canvasCreate(): Rid
        static canvasSetItemMirroring(canvas: Rid, item: Rid, mirroring: Vector2): void
        static canvasSetItemRepeat(item: Rid, repeatSize: Vector2, repeatTimes: int64): void
        static canvasSetModulate(canvas: Rid, color: Color): void
        static canvasSetDisableScale(disable: boolean): void
        static canvasTextureCreate(): Rid
        static canvasTextureSetChannel(canvasTexture: Rid, channel: RenderingServer.CanvasTextureChannel, texture: Rid): void
        static canvasTextureSetShadingParameters(canvasTexture: Rid, baseColor: Color, shininess: float64): void
        static canvasTextureSetTextureFilter(canvasTexture: Rid, filter: RenderingServer.CanvasItemTextureFilter): void
        static canvasTextureSetTextureRepeat(canvasTexture: Rid, repeat: RenderingServer.CanvasItemTextureRepeat): void
        static canvasItemCreate(): Rid
        static canvasItemSetParent(item: Rid, parent: Rid): void
        static canvasItemSetDefaultTextureFilter(item: Rid, filter: RenderingServer.CanvasItemTextureFilter): void
        static canvasItemSetDefaultTextureRepeat(item: Rid, repeat: RenderingServer.CanvasItemTextureRepeat): void
        static canvasItemSetVisible(item: Rid, visible: boolean): void
        static canvasItemSetLightMask(item: Rid, mask: int64): void
        static canvasItemSetVisibilityLayer(item: Rid, visibilityLayer: int64): void
        static canvasItemSetTransform(item: Rid, transform: Transform2D): void
        static canvasItemSetClip(item: Rid, clip: boolean): void
        static canvasItemSetDistanceFieldMode(item: Rid, enabled: boolean): void
        static canvasItemSetCustomRect(item: Rid, useCustomRect: boolean, rect: Rect2 = new Rect2(0, 0, 0, 0)): void
        static canvasItemSetModulate(item: Rid, color: Color): void
        static canvasItemSetSelfModulate(item: Rid, color: Color): void
        static canvasItemSetDrawBehindParent(item: Rid, enabled: boolean): void
        static canvasItemSetInterpolated(item: Rid, interpolated: boolean): void
        static canvasItemResetPhysicsInterpolation(item: Rid): void
        static canvasItemTransformPhysicsInterpolation(item: Rid, transform: Transform2D): void
        static canvasItemAddLine(item: Rid, from: Vector2, to: Vector2, color: Color, width: float64 = -1, antialiased: boolean = false): void
        static canvasItemAddPolyline(item: Rid, points: PackedVector2Array | Vector2[], colors: PackedColorArray | Color[], width: float64 = -1, antialiased: boolean = false): void
        static canvasItemAddMultiline(item: Rid, points: PackedVector2Array | Vector2[], colors: PackedColorArray | Color[], width: float64 = -1, antialiased: boolean = false): void
        static canvasItemAddRect(item: Rid, rect: Rect2, color: Color, antialiased: boolean = false): void
        static canvasItemAddCircle(item: Rid, pos: Vector2, radius: float64, color: Color, antialiased: boolean = false): void
        static canvasItemAddTextureRect(item: Rid, rect: Rect2, texture: Rid, tile: boolean = false, modulate: Color = new Color(1, 1, 1, 1), transpose: boolean = false): void
        static canvasItemAddMsdfTextureRectRegion(item: Rid, rect: Rect2, texture: Rid, srcRect: Rect2, modulate: Color = new Color(1, 1, 1, 1), outlineSize: int64 = 0, pxRange: float64 = 1, scale: float64 = 1): void
        static canvasItemAddLcdTextureRectRegion(item: Rid, rect: Rect2, texture: Rid, srcRect: Rect2, modulate: Color): void
        static canvasItemAddTextureRectRegion(item: Rid, rect: Rect2, texture: Rid, srcRect: Rect2, modulate: Color = new Color(1, 1, 1, 1), transpose: boolean = false, clipUV: boolean = true): void
        static canvasItemAddNinePatch(item: Rid, rect: Rect2, source: Rect2, texture: Rid, topleft: Vector2, bottomright: Vector2, xAxisMode: RenderingServer.NinePatchAxisMode = 0, yAxisMode: RenderingServer.NinePatchAxisMode = 0, drawCenter: boolean = true, modulate: Color = new Color(1, 1, 1, 1)): void
        static canvasItemAddPrimitive(item: Rid, points: PackedVector2Array | Vector2[], colors: PackedColorArray | Color[], uvs: PackedVector2Array | Vector2[], texture: Rid): void
        static canvasItemAddPolygon(item: Rid, points: PackedVector2Array | Vector2[], colors: PackedColorArray | Color[], uvs: PackedVector2Array | Vector2[] = [], texture: Rid = new Rid()): void
        static canvasItemAddTriangleArray(item: Rid, indices: PackedInt32Array | int32[], points: PackedVector2Array | Vector2[], colors: PackedColorArray | Color[], uvs: PackedVector2Array | Vector2[] = [], bones: PackedInt32Array | int32[] = [], weights: PackedFloat32Array | float32[] = [], texture: Rid = new Rid(), count: int64 = -1): void
        static canvasItemAddMesh(item: Rid, mesh: Rid, transform: Transform2D = <any> {} /*compound.type from TypeTransform2D ([object Object])*/, modulate: Color = new Color(1, 1, 1, 1), texture: Rid = new Rid()): void
        static canvasItemAddMultimesh(item: Rid, mesh: Rid, texture: Rid = new Rid()): void
        static canvasItemAddParticles(item: Rid, particles: Rid, texture: Rid): void
        static canvasItemAddSetTransform(item: Rid, transform: Transform2D): void
        static canvasItemAddClipIgnore(item: Rid, ignore: boolean): void
        static canvasItemAddAnimationSlice(item: Rid, animationLength: float64, sliceBegin: float64, sliceEnd: float64, offset: float64 = 0): void
        static canvasItemSetSortChildrenByY(item: Rid, enabled: boolean): void
        static canvasItemSetZIndex(item: Rid, zIndex: int64): void
        static canvasItemSetZAsRelativeToParent(item: Rid, enabled: boolean): void
        static canvasItemSetCopyToBackbuffer(item: Rid, enabled: boolean, rect: Rect2): void
        static canvasItemAttachSkeleton(item: Rid, skeleton: Rid): void
        static canvasItemClear(item: Rid): void
        static canvasItemSetDrawIndex(item: Rid, index: int64): void
        static canvasItemSetMaterial(item: Rid, material: Rid): void
        static canvasItemSetUseParentMaterial(item: Rid, enabled: boolean): void
        static canvasItemSetInstanceShaderParameter(instance: Rid, parameter: StringName, value: any): void
        static canvasItemGetInstanceShaderParameter(instance: Rid, parameter: StringName): any
        static canvasItemGetInstanceShaderParameterDefaultValue(instance: Rid, parameter: StringName): any
        static canvasItemGetInstanceShaderParameterList(instance: Rid): GArray
        static canvasItemSetVisibilityNotifier(item: Rid, enable: boolean, area: Rect2, enterCallable: Callable, exitCallable: Callable): void
        static canvasItemSetCanvasGroupMode(item: Rid, mode: RenderingServer.CanvasGroupMode, clearMargin: float64 = 5, fitEmpty: boolean = false, fitMargin: float64 = 0, blurMipmaps: boolean = false): void
        static debugCanvasItemGetRect(item: Rid): Rect2
        static canvasLightCreate(): Rid
        static canvasLightAttachToCanvas(light: Rid, canvas: Rid): void
        static canvasLightSetEnabled(light: Rid, enabled: boolean): void
        static canvasLightSetTextureScale(light: Rid, scale: float64): void
        static canvasLightSetTransform(light: Rid, transform: Transform2D): void
        static canvasLightSetTexture(light: Rid, texture: Rid): void
        static canvasLightSetTextureOffset(light: Rid, offset: Vector2): void
        static canvasLightSetColor(light: Rid, color: Color): void
        static canvasLightSetHeight(light: Rid, height: float64): void
        static canvasLightSetEnergy(light: Rid, energy: float64): void
        static canvasLightSetZRange(light: Rid, minZ: int64, maxZ: int64): void
        static canvasLightSetLayerRange(light: Rid, minLayer: int64, maxLayer: int64): void
        static canvasLightSetItemCullMask(light: Rid, mask: int64): void
        static canvasLightSetItemShadowCullMask(light: Rid, mask: int64): void
        static canvasLightSetMode(light: Rid, mode: RenderingServer.CanvasLightMode): void
        static canvasLightSetShadowEnabled(light: Rid, enabled: boolean): void
        static canvasLightSetShadowFilter(light: Rid, filter: RenderingServer.CanvasLightShadowFilter): void
        static canvasLightSetShadowColor(light: Rid, color: Color): void
        static canvasLightSetShadowSmooth(light: Rid, smooth: float64): void
        static canvasLightSetBlendMode(light: Rid, mode: RenderingServer.CanvasLightBlendMode): void
        static canvasLightSetInterpolated(light: Rid, interpolated: boolean): void
        static canvasLightResetPhysicsInterpolation(light: Rid): void
        static canvasLightTransformPhysicsInterpolation(light: Rid, transform: Transform2D): void
        static canvasLightOccluderCreate(): Rid
        static canvasLightOccluderAttachToCanvas(occluder: Rid, canvas: Rid): void
        static canvasLightOccluderSetEnabled(occluder: Rid, enabled: boolean): void
        static canvasLightOccluderSetPolygon(occluder: Rid, polygon: Rid): void
        static canvasLightOccluderSetAsSdfCollision(occluder: Rid, enable: boolean): void
        static canvasLightOccluderSetTransform(occluder: Rid, transform: Transform2D): void
        static canvasLightOccluderSetLightMask(occluder: Rid, mask: int64): void
        static canvasLightOccluderSetInterpolated(occluder: Rid, interpolated: boolean): void
        static canvasLightOccluderResetPhysicsInterpolation(occluder: Rid): void
        static canvasLightOccluderTransformPhysicsInterpolation(occluder: Rid, transform: Transform2D): void
        static canvasOccluderPolygonCreate(): Rid
        static canvasOccluderPolygonSetShape(occluderPolygon: Rid, shape: PackedVector2Array | Vector2[], closed: boolean): void
        static canvasOccluderPolygonSetCullMode(occluderPolygon: Rid, mode: RenderingServer.CanvasOccluderPolygonCullMode): void
        static canvasSetShadowTextureSize(size: int64): void
        static globalShaderParameterAdd(name: StringName, type: RenderingServer.GlobalShaderParameterType, defaultValue: any): void
        static globalShaderParameterRemove(name: StringName): void
        static globalShaderParameterGetList(): GArray
        static globalShaderParameterSet(name: StringName, value: any): void
        static globalShaderParameterSetOverride(name: StringName, value: any): void
        static globalShaderParameterGet(name: StringName): any
        static globalShaderParameterGetType(name: StringName): RenderingServer.GlobalShaderParameterType
        static freeRid(rid: Rid): void
        static requestFrameDrawnCallback(callable: Callable): void
        static hasChanged(): boolean
        static getRenderingInfo(info: RenderingServer.RenderingInfo): int64
        static getVideoAdapterName(): string
        static getVideoAdapterVendor(): string
        static getVideoAdapterType(): RenderingDevice.DeviceType
        static getVideoAdapterApiVersion(): string
        static getCurrentRenderingDriverName(): string
        static getCurrentRenderingMethod(): string
        static makeSphereMesh(latitudes: int64, longitudes: int64, radius: float64): Rid
        static getTestCube(): Rid
        static getTestTexture(): Rid
        static getWhiteTexture(): Rid
        static setBootImage(image: Image, color: Color, scale: boolean, useFilter: boolean = true): void
        static getDefaultClearColor(): Color
        static setDefaultClearColor(color: Color): void
        static hasOsFeature(feature: string): boolean
        static setDebugGenerateWireframes(generate: boolean): void
        static getFrameSetupTimeCpu(): float64
        static forceSync(): void
        static forceDraw(swapBuffers: boolean = true, frameStep: float64 = 0): void
        static getRenderingDevice(): RenderingDevice
        static createLocalRenderingDevice(): RenderingDevice
        static isOnRenderThread(): boolean
        static callOnRenderThread(callable: Callable): void
        static hasFeature(feature: RenderingServer.Features): boolean
        get renderLoopEnabled(): boolean
        set renderLoopEnabled(value: boolean)
        static readonly framePreDraw: Signal<() => void>
        static readonly framePostDraw: Signal<() => void>
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
        static worldBoundaryShapeCreate(): Rid
        static separationRayShapeCreate(): Rid
        static segmentShapeCreate(): Rid
        static circleShapeCreate(): Rid
        static rectangleShapeCreate(): Rid
        static capsuleShapeCreate(): Rid
        static convexPolygonShapeCreate(): Rid
        static concavePolygonShapeCreate(): Rid
        static shapeSetData(shape: Rid, data: any): void
        static shapeGetType(shape: Rid): PhysicsServer2D.ShapeType
        static shapeGetData(shape: Rid): any
        static spaceCreate(): Rid
        static spaceSetActive(space: Rid, active: boolean): void
        static spaceIsActive(space: Rid): boolean
        static spaceSetParam(space: Rid, param: PhysicsServer2D.SpaceParameter, value: float64): void
        static spaceGetParam(space: Rid, param: PhysicsServer2D.SpaceParameter): float64
        static spaceGetDirectState(space: Rid): PhysicsDirectSpaceState2D
        static areaCreate(): Rid
        static areaSetSpace(area: Rid, space: Rid): void
        static areaGetSpace(area: Rid): Rid
        static areaAddShape(area: Rid, shape: Rid, transform: Transform2D = <any> {} /*compound.type from TypeTransform2D ([object Object])*/, disabled: boolean = false): void
        static areaSetShape(area: Rid, shapeIdx: int64, shape: Rid): void
        static areaSetShapeTransform(area: Rid, shapeIdx: int64, transform: Transform2D): void
        static areaSetShapeDisabled(area: Rid, shapeIdx: int64, disabled: boolean): void
        static areaGetShapeCount(area: Rid): int64
        static areaGetShape(area: Rid, shapeIdx: int64): Rid
        static areaGetShapeTransform(area: Rid, shapeIdx: int64): Transform2D
        static areaRemoveShape(area: Rid, shapeIdx: int64): void
        static areaClearShapes(area: Rid): void
        static areaSetCollisionLayer(area: Rid, layer: int64): void
        static areaGetCollisionLayer(area: Rid): int64
        static areaSetCollisionMask(area: Rid, mask: int64): void
        static areaGetCollisionMask(area: Rid): int64
        static areaSetParam(area: Rid, param: PhysicsServer2D.AreaParameter, value: any): void
        static areaSetTransform(area: Rid, transform: Transform2D): void
        static areaGetParam(area: Rid, param: PhysicsServer2D.AreaParameter): any
        static areaGetTransform(area: Rid): Transform2D
        static areaAttachObjectInstanceId(area: Rid, id: int64): void
        static areaGetObjectInstanceId(area: Rid): int64
        static areaAttachCanvasInstanceId(area: Rid, id: int64): void
        static areaGetCanvasInstanceId(area: Rid): int64
        static areaSetMonitorCallback(area: Rid, callback: Callable): void
        static areaSetAreaMonitorCallback(area: Rid, callback: Callable): void
        static areaSetMonitorable(area: Rid, monitorable: boolean): void
        static bodyCreate(): Rid
        static bodySetSpace(body: Rid, space: Rid): void
        static bodyGetSpace(body: Rid): Rid
        static bodySetMode(body: Rid, mode: PhysicsServer2D.BodyMode): void
        static bodyGetMode(body: Rid): PhysicsServer2D.BodyMode
        static bodyAddShape(body: Rid, shape: Rid, transform: Transform2D = <any> {} /*compound.type from TypeTransform2D ([object Object])*/, disabled: boolean = false): void
        static bodySetShape(body: Rid, shapeIdx: int64, shape: Rid): void
        static bodySetShapeTransform(body: Rid, shapeIdx: int64, transform: Transform2D): void
        static bodyGetShapeCount(body: Rid): int64
        static bodyGetShape(body: Rid, shapeIdx: int64): Rid
        static bodyGetShapeTransform(body: Rid, shapeIdx: int64): Transform2D
        static bodyRemoveShape(body: Rid, shapeIdx: int64): void
        static bodyClearShapes(body: Rid): void
        static bodySetShapeDisabled(body: Rid, shapeIdx: int64, disabled: boolean): void
        static bodySetShapeAsOneWayCollision(body: Rid, shapeIdx: int64, enable: boolean, margin: float64): void
        static bodyAttachObjectInstanceId(body: Rid, id: int64): void
        static bodyGetObjectInstanceId(body: Rid): int64
        static bodyAttachCanvasInstanceId(body: Rid, id: int64): void
        static bodyGetCanvasInstanceId(body: Rid): int64
        static bodySetContinuousCollisionDetectionMode(body: Rid, mode: any /*PhysicsServer2D.ccdMode*/): void
        static bodyGetContinuousCollisionDetectionMode(body: Rid): any /*PhysicsServer2D.ccdMode*/
        static bodySetCollisionLayer(body: Rid, layer: int64): void
        static bodyGetCollisionLayer(body: Rid): int64
        static bodySetCollisionMask(body: Rid, mask: int64): void
        static bodyGetCollisionMask(body: Rid): int64
        static bodySetCollisionPriority(body: Rid, priority: float64): void
        static bodyGetCollisionPriority(body: Rid): float64
        static bodySetParam(body: Rid, param: PhysicsServer2D.BodyParameter, value: any): void
        static bodyGetParam(body: Rid, param: PhysicsServer2D.BodyParameter): any
        static bodyResetMassProperties(body: Rid): void
        static bodySetState(body: Rid, state: PhysicsServer2D.BodyState, value: any): void
        static bodyGetState(body: Rid, state: PhysicsServer2D.BodyState): any
        static bodyApplyCentralImpulse(body: Rid, impulse: Vector2): void
        static bodyApplyTorqueImpulse(body: Rid, impulse: float64): void
        static bodyApplyImpulse(body: Rid, impulse: Vector2, position: Vector2 = Vector2.ZERO): void
        static bodyApplyCentralForce(body: Rid, force: Vector2): void
        static bodyApplyForce(body: Rid, force: Vector2, position: Vector2 = Vector2.ZERO): void
        static bodyApplyTorque(body: Rid, torque: float64): void
        static bodyAddConstantCentralForce(body: Rid, force: Vector2): void
        static bodyAddConstantForce(body: Rid, force: Vector2, position: Vector2 = Vector2.ZERO): void
        static bodyAddConstantTorque(body: Rid, torque: float64): void
        static bodySetConstantForce(body: Rid, force: Vector2): void
        static bodyGetConstantForce(body: Rid): Vector2
        static bodySetConstantTorque(body: Rid, torque: float64): void
        static bodyGetConstantTorque(body: Rid): float64
        static bodySetAxisVelocity(body: Rid, axisVelocity: Vector2): void
        static bodyAddCollisionException(body: Rid, exceptedBody: Rid): void
        static bodyRemoveCollisionException(body: Rid, exceptedBody: Rid): void
        static bodySetMaxContactsReported(body: Rid, amount: int64): void
        static bodyGetMaxContactsReported(body: Rid): int64
        static bodySetOmitForceIntegration(body: Rid, enable: boolean): void
        static bodyIsOmittingForceIntegration(body: Rid): boolean
        static bodySetStateSyncCallback(body: Rid, callable: Callable): void
        static bodySetForceIntegrationCallback(body: Rid, callable: Callable, userdata: any = <any> {}): void
        static bodyTestMotion(body: Rid, parameters: PhysicsTestMotionParameters2D, result: PhysicsTestMotionResult2D = undefined): boolean
        static bodyGetDirectState(body: Rid): PhysicsDirectBodyState2D
        static jointCreate(): Rid
        static jointClear(joint: Rid): void
        static jointSetParam(joint: Rid, param: PhysicsServer2D.JointParam, value: float64): void
        static jointGetParam(joint: Rid, param: PhysicsServer2D.JointParam): float64
        static jointDisableCollisionsBetweenBodies(joint: Rid, disable: boolean): void
        static jointIsDisabledCollisionsBetweenBodies(joint: Rid): boolean
        static jointMakePin(joint: Rid, anchor: Vector2, bodyA: Rid, bodyB: Rid = new Rid()): void
        static jointMakeGroove(joint: Rid, groove1A: Vector2, groove2A: Vector2, anchorB: Vector2, bodyA: Rid = new Rid(), bodyB: Rid = new Rid()): void
        static jointMakeDampedSpring(joint: Rid, anchorA: Vector2, anchorB: Vector2, bodyA: Rid, bodyB: Rid = new Rid()): void
        static pinJointSetFlag(joint: Rid, flag: PhysicsServer2D.PinJointFlag, enabled: boolean): void
        static pinJointGetFlag(joint: Rid, flag: PhysicsServer2D.PinJointFlag): boolean
        static pinJointSetParam(joint: Rid, param: PhysicsServer2D.PinJointParam, value: float64): void
        static pinJointGetParam(joint: Rid, param: PhysicsServer2D.PinJointParam): float64
        static dampedSpringJointSetParam(joint: Rid, param: PhysicsServer2D.DampedSpringParam, value: float64): void
        static dampedSpringJointGetParam(joint: Rid, param: PhysicsServer2D.DampedSpringParam): float64
        static jointGetType(joint: Rid): PhysicsServer2D.JointType
        static freeRid(rid: Rid): void
        static setActive(active: boolean): void
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
        static shapeSetData(shape: Rid, data: any): void
        static shapeSetMargin(shape: Rid, margin: float64): void
        static shapeGetType(shape: Rid): PhysicsServer3D.ShapeType
        static shapeGetData(shape: Rid): any
        static shapeGetMargin(shape: Rid): float64
        static spaceCreate(): Rid
        static spaceSetActive(space: Rid, active: boolean): void
        static spaceIsActive(space: Rid): boolean
        static spaceSetParam(space: Rid, param: PhysicsServer3D.SpaceParameter, value: float64): void
        static spaceGetParam(space: Rid, param: PhysicsServer3D.SpaceParameter): float64
        static spaceGetDirectState(space: Rid): PhysicsDirectSpaceState3D
        static areaCreate(): Rid
        static areaSetSpace(area: Rid, space: Rid): void
        static areaGetSpace(area: Rid): Rid
        static areaAddShape(area: Rid, shape: Rid, transform: Transform3D = <any> {} /*compound.type from TypeTransform3D ([object Object])*/, disabled: boolean = false): void
        static areaSetShape(area: Rid, shapeIdx: int64, shape: Rid): void
        static areaSetShapeTransform(area: Rid, shapeIdx: int64, transform: Transform3D): void
        static areaSetShapeDisabled(area: Rid, shapeIdx: int64, disabled: boolean): void
        static areaGetShapeCount(area: Rid): int64
        static areaGetShape(area: Rid, shapeIdx: int64): Rid
        static areaGetShapeTransform(area: Rid, shapeIdx: int64): Transform3D
        static areaRemoveShape(area: Rid, shapeIdx: int64): void
        static areaClearShapes(area: Rid): void
        static areaSetCollisionLayer(area: Rid, layer: int64): void
        static areaGetCollisionLayer(area: Rid): int64
        static areaSetCollisionMask(area: Rid, mask: int64): void
        static areaGetCollisionMask(area: Rid): int64
        static areaSetParam(area: Rid, param: PhysicsServer3D.AreaParameter, value: any): void
        static areaSetTransform(area: Rid, transform: Transform3D): void
        static areaGetParam(area: Rid, param: PhysicsServer3D.AreaParameter): any
        static areaGetTransform(area: Rid): Transform3D
        static areaAttachObjectInstanceId(area: Rid, id: int64): void
        static areaGetObjectInstanceId(area: Rid): int64
        static areaSetMonitorCallback(area: Rid, callback: Callable): void
        static areaSetAreaMonitorCallback(area: Rid, callback: Callable): void
        static areaSetMonitorable(area: Rid, monitorable: boolean): void
        static areaSetRayPickable(area: Rid, enable: boolean): void
        static bodyCreate(): Rid
        static bodySetSpace(body: Rid, space: Rid): void
        static bodyGetSpace(body: Rid): Rid
        static bodySetMode(body: Rid, mode: PhysicsServer3D.BodyMode): void
        static bodyGetMode(body: Rid): PhysicsServer3D.BodyMode
        static bodySetCollisionLayer(body: Rid, layer: int64): void
        static bodyGetCollisionLayer(body: Rid): int64
        static bodySetCollisionMask(body: Rid, mask: int64): void
        static bodyGetCollisionMask(body: Rid): int64
        static bodySetCollisionPriority(body: Rid, priority: float64): void
        static bodyGetCollisionPriority(body: Rid): float64
        static bodyAddShape(body: Rid, shape: Rid, transform: Transform3D = <any> {} /*compound.type from TypeTransform3D ([object Object])*/, disabled: boolean = false): void
        static bodySetShape(body: Rid, shapeIdx: int64, shape: Rid): void
        static bodySetShapeTransform(body: Rid, shapeIdx: int64, transform: Transform3D): void
        static bodySetShapeDisabled(body: Rid, shapeIdx: int64, disabled: boolean): void
        static bodyGetShapeCount(body: Rid): int64
        static bodyGetShape(body: Rid, shapeIdx: int64): Rid
        static bodyGetShapeTransform(body: Rid, shapeIdx: int64): Transform3D
        static bodyRemoveShape(body: Rid, shapeIdx: int64): void
        static bodyClearShapes(body: Rid): void
        static bodyAttachObjectInstanceId(body: Rid, id: int64): void
        static bodyGetObjectInstanceId(body: Rid): int64
        static bodySetEnableContinuousCollisionDetection(body: Rid, enable: boolean): void
        static bodyIsContinuousCollisionDetectionEnabled(body: Rid): boolean
        static bodySetParam(body: Rid, param: PhysicsServer3D.BodyParameter, value: any): void
        static bodyGetParam(body: Rid, param: PhysicsServer3D.BodyParameter): any
        static bodyResetMassProperties(body: Rid): void
        static bodySetState(body: Rid, state: PhysicsServer3D.BodyState, value: any): void
        static bodyGetState(body: Rid, state: PhysicsServer3D.BodyState): any
        static bodyApplyCentralImpulse(body: Rid, impulse: Vector3): void
        static bodyApplyImpulse(body: Rid, impulse: Vector3, position: Vector3 = new Vector3(0, 0, 0)): void
        static bodyApplyTorqueImpulse(body: Rid, impulse: Vector3): void
        static bodyApplyCentralForce(body: Rid, force: Vector3): void
        static bodyApplyForce(body: Rid, force: Vector3, position: Vector3 = new Vector3(0, 0, 0)): void
        static bodyApplyTorque(body: Rid, torque: Vector3): void
        static bodyAddConstantCentralForce(body: Rid, force: Vector3): void
        static bodyAddConstantForce(body: Rid, force: Vector3, position: Vector3 = new Vector3(0, 0, 0)): void
        static bodyAddConstantTorque(body: Rid, torque: Vector3): void
        static bodySetConstantForce(body: Rid, force: Vector3): void
        static bodyGetConstantForce(body: Rid): Vector3
        static bodySetConstantTorque(body: Rid, torque: Vector3): void
        static bodyGetConstantTorque(body: Rid): Vector3
        static bodySetAxisVelocity(body: Rid, axisVelocity: Vector3): void
        static bodySetAxisLock(body: Rid, axis: PhysicsServer3D.BodyAxis, lock: boolean): void
        static bodyIsAxisLocked(body: Rid, axis: PhysicsServer3D.BodyAxis): boolean
        static bodyAddCollisionException(body: Rid, exceptedBody: Rid): void
        static bodyRemoveCollisionException(body: Rid, exceptedBody: Rid): void
        static bodySetMaxContactsReported(body: Rid, amount: int64): void
        static bodyGetMaxContactsReported(body: Rid): int64
        static bodySetOmitForceIntegration(body: Rid, enable: boolean): void
        static bodyIsOmittingForceIntegration(body: Rid): boolean
        static bodySetStateSyncCallback(body: Rid, callable: Callable): void
        static bodySetForceIntegrationCallback(body: Rid, callable: Callable, userdata: any = <any> {}): void
        static bodySetRayPickable(body: Rid, enable: boolean): void
        static bodyTestMotion(body: Rid, parameters: PhysicsTestMotionParameters3D, result: PhysicsTestMotionResult3D = undefined): boolean
        static bodyGetDirectState(body: Rid): PhysicsDirectBodyState3D
        static softBodyCreate(): Rid
        static softBodyUpdateRenderingServer(body: Rid, renderingServerHandler: PhysicsServer3DRenderingServerHandler): void
        static softBodySetSpace(body: Rid, space: Rid): void
        static softBodyGetSpace(body: Rid): Rid
        static softBodySetMesh(body: Rid, mesh: Rid): void
        static softBodyGetBounds(body: Rid): Aabb
        static softBodySetCollisionLayer(body: Rid, layer: int64): void
        static softBodyGetCollisionLayer(body: Rid): int64
        static softBodySetCollisionMask(body: Rid, mask: int64): void
        static softBodyGetCollisionMask(body: Rid): int64
        static softBodyAddCollisionException(body: Rid, bodyB: Rid): void
        static softBodyRemoveCollisionException(body: Rid, bodyB: Rid): void
        static softBodySetState(body: Rid, state: PhysicsServer3D.BodyState, variant: any): void
        static softBodyGetState(body: Rid, state: PhysicsServer3D.BodyState): any
        static softBodySetTransform(body: Rid, transform: Transform3D): void
        static softBodySetRayPickable(body: Rid, enable: boolean): void
        static softBodySetSimulationPrecision(body: Rid, simulationPrecision: int64): void
        static softBodyGetSimulationPrecision(body: Rid): int64
        static softBodySetTotalMass(body: Rid, totalMass: float64): void
        static softBodyGetTotalMass(body: Rid): float64
        static softBodySetLinearStiffness(body: Rid, stiffness: float64): void
        static softBodyGetLinearStiffness(body: Rid): float64
        static softBodySetPressureCoefficient(body: Rid, pressureCoefficient: float64): void
        static softBodyGetPressureCoefficient(body: Rid): float64
        static softBodySetDampingCoefficient(body: Rid, dampingCoefficient: float64): void
        static softBodyGetDampingCoefficient(body: Rid): float64
        static softBodySetDragCoefficient(body: Rid, dragCoefficient: float64): void
        static softBodyGetDragCoefficient(body: Rid): float64
        static softBodyMovePoint(body: Rid, pointIndex: int64, globalPosition: Vector3): void
        static softBodyGetPointGlobalPosition(body: Rid, pointIndex: int64): Vector3
        static softBodyRemoveAllPinnedPoints(body: Rid): void
        static softBodyPinPoint(body: Rid, pointIndex: int64, pin: boolean): void
        static softBodyIsPointPinned(body: Rid, pointIndex: int64): boolean
        static jointCreate(): Rid
        static jointClear(joint: Rid): void
        static jointMakePin(joint: Rid, bodyA: Rid, localA: Vector3, bodyB: Rid, localB: Vector3): void
        static pinJointSetParam(joint: Rid, param: PhysicsServer3D.PinJointParam, value: float64): void
        static pinJointGetParam(joint: Rid, param: PhysicsServer3D.PinJointParam): float64
        static pinJointSetLocalA(joint: Rid, localA: Vector3): void
        static pinJointGetLocalA(joint: Rid): Vector3
        static pinJointSetLocalB(joint: Rid, localB: Vector3): void
        static pinJointGetLocalB(joint: Rid): Vector3
        static jointMakeHinge(joint: Rid, bodyA: Rid, hingeA: Transform3D, bodyB: Rid, hingeB: Transform3D): void
        static hingeJointSetParam(joint: Rid, param: PhysicsServer3D.HingeJointParam, value: float64): void
        static hingeJointGetParam(joint: Rid, param: PhysicsServer3D.HingeJointParam): float64
        static hingeJointSetFlag(joint: Rid, flag: PhysicsServer3D.HingeJointFlag, enabled: boolean): void
        static hingeJointGetFlag(joint: Rid, flag: PhysicsServer3D.HingeJointFlag): boolean
        static jointMakeSlider(joint: Rid, bodyA: Rid, localRefA: Transform3D, bodyB: Rid, localRefB: Transform3D): void
        static sliderJointSetParam(joint: Rid, param: PhysicsServer3D.SliderJointParam, value: float64): void
        static sliderJointGetParam(joint: Rid, param: PhysicsServer3D.SliderJointParam): float64
        static jointMakeConeTwist(joint: Rid, bodyA: Rid, localRefA: Transform3D, bodyB: Rid, localRefB: Transform3D): void
        static coneTwistJointSetParam(joint: Rid, param: PhysicsServer3D.ConeTwistJointParam, value: float64): void
        static coneTwistJointGetParam(joint: Rid, param: PhysicsServer3D.ConeTwistJointParam): float64
        static jointGetType(joint: Rid): PhysicsServer3D.JointType
        static jointSetSolverPriority(joint: Rid, priority: int64): void
        static jointGetSolverPriority(joint: Rid): int64
        static jointDisableCollisionsBetweenBodies(joint: Rid, disable: boolean): void
        static jointIsDisabledCollisionsBetweenBodies(joint: Rid): boolean
        static jointMakeGeneric6Dof(joint: Rid, bodyA: Rid, localRefA: Transform3D, bodyB: Rid, localRefB: Transform3D): void
        static generic6DofJointSetParam(joint: Rid, axis: Vector3.Axis, param: any /*PhysicsServer3D.g6DofJointAxisParam*/, value: float64): void
        static generic6DofJointGetParam(joint: Rid, axis: Vector3.Axis, param: any /*PhysicsServer3D.g6DofJointAxisParam*/): float64
        static generic6DofJointSetFlag(joint: Rid, axis: Vector3.Axis, flag: any /*PhysicsServer3D.g6DofJointAxisFlag*/, enable: boolean): void
        static generic6DofJointGetFlag(joint: Rid, axis: Vector3.Axis, flag: any /*PhysicsServer3D.g6DofJointAxisFlag*/): boolean
        static freeRid(rid: Rid): void
        static setActive(active: boolean): void
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
        static getReferenceFrame(): Transform3D
        static clearReferenceFrame(): void
        static centerOnHmd(rotationMode: XRServer.RotationMode, keepHeight: boolean): void
        static getHmdTransform(): Transform3D
        static addInterface(interface: XRInterface): void
        static getInterfaceCount(): int64
        static removeInterface(interface: XRInterface): void
        static getInterface(idx: int64): XRInterface
        static getInterfaces(): GArray
        static findInterface(name: string): XRInterface
        static addTracker(tracker: XRTracker): void
        static removeTracker(tracker: XRTracker): void
        static getTrackers(trackerTypes: int64): GDictionary
        static getTracker(trackerName: StringName): XRTracker
        get worldScale(): float64
        set worldScale(value: float64)
        get worldOrigin(): Vector3
        set worldOrigin(value: Vector3)
        get cameraLockedToOrigin(): boolean
        set cameraLockedToOrigin(value: boolean)
        get primaryInterface(): GObject
        set primaryInterface(value: GObject)
        static readonly referenceFrameChanged: Signal<() => void>
        static readonly interfaceAdded: Signal<(interfaceName: StringName) => void>
        static readonly interfaceRemoved: Signal<(interfaceName: StringName) => void>
        static readonly trackerAdded: Signal<(trackerName: StringName, type: int64) => void>
        static readonly trackerUpdated: Signal<(trackerName: StringName, type: int64) => void>
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
        start(mode: AesContext.Mode, key: PackedByteArray | byte[] | ArrayBuffer, iV: PackedByteArray | byte[] | ArrayBuffer = []): GError
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
        /* gdvirtual */ _estimateCost(fromId: int64, endId: int64): float64
        /* gdvirtual */ _computeCost(fromId: int64, toId: int64): float64
        getAvailablePointId(): int64
        addPoint(id: int64, position: Vector2, weightScale: float64 = 1): void
        getPointPosition(id: int64): Vector2
        setPointPosition(id: int64, position: Vector2): void
        getPointWeightScale(id: int64): float64
        setPointWeightScale(id: int64, weightScale: float64): void
        removePoint(id: int64): void
        hasPoint(id: int64): boolean
        getPointConnections(id: int64): PackedInt64Array
        getPointIds(): PackedInt64Array
        setPointDisabled(id: int64, disabled: boolean = true): void
        isPointDisabled(id: int64): boolean
        connectPoints(id: int64, toId: int64, bidirectional: boolean = true): void
        disconnectPoints(id: int64, toId: int64, bidirectional: boolean = true): void
        arePointsConnected(id: int64, toId: int64, bidirectional: boolean = true): boolean
        getPointCount(): int64
        getPointCapacity(): int64
        reserveSpace(numNodes: int64): void
        
        /** Clears all the points and segments. */
        clear(): void
        getClosestPoint(toPosition: Vector2, includeDisabled: boolean = false): int64
        getClosestPositionInSegment(toPosition: Vector2): Vector2
        getPointPath(fromId: int64, toId: int64, allowPartialPath: boolean = false): PackedVector2Array
        getIdPath(fromId: int64, toId: int64, allowPartialPath: boolean = false): PackedInt64Array
    }
    /** An implementation of A* for finding the shortest path between two vertices on a connected graph in 3D space.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_astar3d.html  
     */
    class AStar3D extends RefCounted {
        constructor(identifier?: any)
        /* gdvirtual */ _estimateCost(fromId: int64, endId: int64): float64
        /* gdvirtual */ _computeCost(fromId: int64, toId: int64): float64
        getAvailablePointId(): int64
        addPoint(id: int64, position: Vector3, weightScale: float64 = 1): void
        getPointPosition(id: int64): Vector3
        setPointPosition(id: int64, position: Vector3): void
        getPointWeightScale(id: int64): float64
        setPointWeightScale(id: int64, weightScale: float64): void
        removePoint(id: int64): void
        hasPoint(id: int64): boolean
        getPointConnections(id: int64): PackedInt64Array
        getPointIds(): PackedInt64Array
        setPointDisabled(id: int64, disabled: boolean = true): void
        isPointDisabled(id: int64): boolean
        connectPoints(id: int64, toId: int64, bidirectional: boolean = true): void
        disconnectPoints(id: int64, toId: int64, bidirectional: boolean = true): void
        arePointsConnected(id: int64, toId: int64, bidirectional: boolean = true): boolean
        getPointCount(): int64
        getPointCapacity(): int64
        reserveSpace(numNodes: int64): void
        
        /** Clears all the points and segments. */
        clear(): void
        getClosestPoint(toPosition: Vector3, includeDisabled: boolean = false): int64
        getClosestPositionInSegment(toPosition: Vector3): Vector3
        getPointPath(fromId: int64, toId: int64, allowPartialPath: boolean = false): PackedVector3Array
        getIdPath(fromId: int64, toId: int64, allowPartialPath: boolean = false): PackedInt64Array
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
        /* gdvirtual */ _estimateCost(fromId: Vector2I, endId: Vector2I): float64
        /* gdvirtual */ _computeCost(fromId: Vector2I, toId: Vector2I): float64
        isInBounds(x: int64, y: int64): boolean
        isInBoundsv(id: Vector2I): boolean
        isDirty(): boolean
        
        /** Updates the internal state of the grid according to the parameters to prepare it to search the path. Needs to be called if parameters like [member region], [member cell_size] or [member offset] are changed. [method is_dirty] will return `true` if this is the case and this needs to be called.  
         *      
         *  **Note:** All point data (solidity and weight scale) will be cleared.  
         */
        update(): void
        setPointSolid(id: Vector2I, solid: boolean = true): void
        isPointSolid(id: Vector2I): boolean
        setPointWeightScale(id: Vector2I, weightScale: float64): void
        getPointWeightScale(id: Vector2I): float64
        fillSolidRegion(region: Rect2I, solid: boolean = true): void
        fillWeightScaleRegion(region: Rect2I, weightScale: float64): void
        
        /** Clears the grid and sets the [member region] to `Rect2i(0, 0, 0, 0)`. */
        clear(): void
        getPointPosition(id: Vector2I): Vector2
        getPointDataInRegion(region: Rect2I): GArray
        getPointPath(fromId: Vector2I, toId: Vector2I, allowPartialPath: boolean = false): PackedVector2Array
        getIdPath(fromId: Vector2I, toId: Vector2I, allowPartialPath: boolean = false): GArray
        
        /** The region of grid cells available for pathfinding. If changed, [method update] needs to be called before finding the next path. */
        get region(): Rect2I
        set region(value: Rect2I)
        
        /** The size of the grid (number of cells of size [member cell_size] on each axis). If changed, [method update] needs to be called before finding the next path. */
        get size(): Vector2I
        set size(value: Vector2I)
        
        /** The offset of the grid which will be applied to calculate the resulting point position returned by [method get_point_path]. If changed, [method update] needs to be called before finding the next path. */
        get offset(): Vector2
        set offset(value: Vector2)
        get cellSize(): Vector2
        set cellSize(value: Vector2)
        get cellShape(): int64
        set cellShape(value: int64)
        get jumpingEnabled(): boolean
        set jumpingEnabled(value: boolean)
        get defaultComputeHeuristic(): int64
        set defaultComputeHeuristic(value: int64)
        get defaultEstimateHeuristic(): int64
        set defaultEstimateHeuristic(value: int64)
        get diagonalMode(): int64
        set diagonalMode(value: int64)
    }
    /** A base dialog used for user notification.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_acceptdialog.html  
     */
    class AcceptDialog<Map extends Record<string, Node> = {}> extends Window<Map> {
        constructor(identifier?: any)
        getOkButton(): Button
        getLabel(): Label
        addButton(text: string, right: boolean = false, action: string = ''): Button
        addCancelButton(name: string): Button
        removeButton(button: Button): void
        registerTextEnter(lineEdit: LineEdit): void
        get okButtonText(): string
        set okButtonText(value: string)
        get dialogText(): string
        set dialogText(value: string)
        get dialogHideOnOk(): boolean
        set dialogHideOnOk(value: boolean)
        get dialogCloseOnEscape(): boolean
        set dialogCloseOnEscape(value: boolean)
        get dialogAutowrap(): boolean
        set dialogAutowrap(value: boolean)
        
        /** Emitted when the dialog is accepted, i.e. the OK button is pressed. */
        readonly confirmed: Signal<() => void>
        
        /** Emitted when the dialog is closed or the button created with [method add_cancel_button] is pressed. */
        readonly canceled: Signal<() => void>
        readonly customAction: Signal<(action: StringName) => void>
    }
    /** A 2D physics body that can't be moved by external forces. When moved manually, it affects other bodies in its path.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_animatablebody2d.html  
     */
    class AnimatableBody2D<Map extends Record<string, Node> = {}> extends StaticBody2D<Map> {
        constructor(identifier?: any)
        get syncToPhysics(): boolean
        set syncToPhysics(value: boolean)
    }
    /** A 3D physics body that can't be moved by external forces. When moved manually, it affects other bodies in its path.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_animatablebody3d.html  
     */
    class AnimatableBody3D<Map extends Record<string, Node> = {}> extends StaticBody3D<Map> {
        constructor(identifier?: any)
        get syncToPhysics(): boolean
        set syncToPhysics(value: boolean)
    }
    /** Sprite node that contains multiple textures as frames to play for animation.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_animatedsprite2d.html  
     */
    class AnimatedSprite2D<Map extends Record<string, Node> = {}> extends Node2D<Map> {
        constructor(identifier?: any)
        isPlaying(): boolean
        
        /** Plays the animation with key [param name]. If [param custom_speed] is negative and [param from_end] is `true`, the animation will play backwards (which is equivalent to calling [method play_backwards]).  
         *  If this method is called with that same animation [param name], or with no [param name] parameter, the assigned animation will resume playing if it was paused.  
         */
        play(name: StringName = '', customSpeed: float64 = 1, fromEnd: boolean = false): void
        playBackwards(name: StringName = ''): void
        
        /** Pauses the currently playing animation. The [member frame] and [member frame_progress] will be kept and calling [method play] or [method play_backwards] without arguments will resume the animation from the current playback position.  
         *  See also [method stop].  
         */
        pause(): void
        
        /** Stops the currently playing animation. The animation position is reset to `0` and the `custom_speed` is reset to `1.0`. See also [method pause]. */
        stop(): void
        setFrameAndProgress(frame: int64, progress: float64): void
        getPlayingSpeed(): float64
        get spriteFrames(): SpriteFrames
        set spriteFrames(value: SpriteFrames)
        
        /** The current animation from the [member sprite_frames] resource. If this value is changed, the [member frame] counter and the [member frame_progress] are reset. */
        get animation(): StringName
        set animation(value: StringName)
        
        /** The key of the animation to play when the scene loads. */
        get autoplay(): StringName
        set autoplay(value: StringName)
        
        /** The displayed animation frame's index. Setting this property also resets [member frame_progress]. If this is not desired, use [method set_frame_and_progress]. */
        get frame(): int64
        set frame(value: int64)
        get frameProgress(): float64
        set frameProgress(value: float64)
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
        get flipH(): boolean
        set flipH(value: boolean)
        get flipV(): boolean
        set flipV(value: boolean)
        readonly spriteFramesChanged: Signal<() => void>
        readonly animationChanged: Signal<() => void>
        readonly frameChanged: Signal<() => void>
        readonly animationLooped: Signal<() => void>
        readonly animationFinished: Signal<() => void>
    }
    /** 2D sprite node in 3D world, that can use multiple 2D textures for animation.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_animatedsprite3d.html  
     */
    class AnimatedSprite3D<Map extends Record<string, Node> = {}> extends SpriteBase3D<Map> {
        constructor(identifier?: any)
        isPlaying(): boolean
        
        /** Plays the animation with key [param name]. If [param custom_speed] is negative and [param from_end] is `true`, the animation will play backwards (which is equivalent to calling [method play_backwards]).  
         *  If this method is called with that same animation [param name], or with no [param name] parameter, the assigned animation will resume playing if it was paused.  
         */
        play(name: StringName = '', customSpeed: float64 = 1, fromEnd: boolean = false): void
        playBackwards(name: StringName = ''): void
        
        /** Pauses the currently playing animation. The [member frame] and [member frame_progress] will be kept and calling [method play] or [method play_backwards] without arguments will resume the animation from the current playback position.  
         *  See also [method stop].  
         */
        pause(): void
        
        /** Stops the currently playing animation. The animation position is reset to `0` and the `custom_speed` is reset to `1.0`. See also [method pause]. */
        stop(): void
        setFrameAndProgress(frame: int64, progress: float64): void
        getPlayingSpeed(): float64
        _resChanged(): void
        get spriteFrames(): SpriteFrames
        set spriteFrames(value: SpriteFrames)
        
        /** The current animation from the [member sprite_frames] resource. If this value is changed, the [member frame] counter and the [member frame_progress] are reset. */
        get animation(): StringName
        set animation(value: StringName)
        
        /** The key of the animation to play when the scene loads. */
        get autoplay(): StringName
        set autoplay(value: StringName)
        
        /** The displayed animation frame's index. Setting this property also resets [member frame_progress]. If this is not desired, use [method set_frame_and_progress]. */
        get frame(): int64
        set frame(value: int64)
        get frameProgress(): float64
        set frameProgress(value: float64)
        get speedScale(): float64
        set speedScale(value: float64)
        readonly spriteFramesChanged: Signal<() => void>
        readonly animationChanged: Signal<() => void>
        readonly frameChanged: Signal<() => void>
        readonly animationLooped: Signal<() => void>
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
        setFrameTexture(frame: int64, texture: Texture2D): void
        getFrameTexture(frame: int64): Texture2D
        setFrameDuration(frame: int64, duration: float64): void
        getFrameDuration(frame: int64): float64
        
        /** Number of frames to use in the animation. While you can create the frames independently with [method set_frame_texture], you need to set this value for the animation to take new frames into account. The maximum number of frames is [constant MAX_FRAMES]. */
        get frames(): int64
        set frames(value: int64)
        get currentFrame(): int64
        set currentFrame(value: int64)
        
        /** If `true`, the animation will pause where it currently is (i.e. at [member current_frame]). The animation will continue from where it was paused when changing this property to `false`. */
        get pause(): boolean
        set pause(value: boolean)
        get oneShot(): boolean
        set oneShot(value: boolean)
        get speedScale(): float64
        set speedScale(value: float64)
        get "frame0/texture"(): Texture2D
        set "frame0/texture"(value: Texture2D)
        get "frame0/duration"(): float64
        set "frame0/duration"(value: float64)
        get "frame1/texture"(): Texture2D
        set "frame1/texture"(value: Texture2D)
        get "frame1/duration"(): float64
        set "frame1/duration"(value: float64)
        get "frame2/texture"(): Texture2D
        set "frame2/texture"(value: Texture2D)
        get "frame2/duration"(): float64
        set "frame2/duration"(value: float64)
        get "frame3/texture"(): Texture2D
        set "frame3/texture"(value: Texture2D)
        get "frame3/duration"(): float64
        set "frame3/duration"(value: float64)
        get "frame4/texture"(): Texture2D
        set "frame4/texture"(value: Texture2D)
        get "frame4/duration"(): float64
        set "frame4/duration"(value: float64)
        get "frame5/texture"(): Texture2D
        set "frame5/texture"(value: Texture2D)
        get "frame5/duration"(): float64
        set "frame5/duration"(value: float64)
        get "frame6/texture"(): Texture2D
        set "frame6/texture"(value: Texture2D)
        get "frame6/duration"(): float64
        set "frame6/duration"(value: float64)
        get "frame7/texture"(): Texture2D
        set "frame7/texture"(value: Texture2D)
        get "frame7/duration"(): float64
        set "frame7/duration"(value: float64)
        get "frame8/texture"(): Texture2D
        set "frame8/texture"(value: Texture2D)
        get "frame8/duration"(): float64
        set "frame8/duration"(value: float64)
        get "frame9/texture"(): Texture2D
        set "frame9/texture"(value: Texture2D)
        get "frame9/duration"(): float64
        set "frame9/duration"(value: float64)
        get "frame10/texture"(): Texture2D
        set "frame10/texture"(value: Texture2D)
        get "frame10/duration"(): float64
        set "frame10/duration"(value: float64)
        get "frame11/texture"(): Texture2D
        set "frame11/texture"(value: Texture2D)
        get "frame11/duration"(): float64
        set "frame11/duration"(value: float64)
        get "frame12/texture"(): Texture2D
        set "frame12/texture"(value: Texture2D)
        get "frame12/duration"(): float64
        set "frame12/duration"(value: float64)
        get "frame13/texture"(): Texture2D
        set "frame13/texture"(value: Texture2D)
        get "frame13/duration"(): float64
        set "frame13/duration"(value: float64)
        get "frame14/texture"(): Texture2D
        set "frame14/texture"(value: Texture2D)
        get "frame14/duration"(): float64
        set "frame14/duration"(value: float64)
        get "frame15/texture"(): Texture2D
        set "frame15/texture"(value: Texture2D)
        get "frame15/duration"(): float64
        set "frame15/duration"(value: float64)
        get "frame16/texture"(): Texture2D
        set "frame16/texture"(value: Texture2D)
        get "frame16/duration"(): float64
        set "frame16/duration"(value: float64)
        get "frame17/texture"(): Texture2D
        set "frame17/texture"(value: Texture2D)
        get "frame17/duration"(): float64
        set "frame17/duration"(value: float64)
        get "frame18/texture"(): Texture2D
        set "frame18/texture"(value: Texture2D)
        get "frame18/duration"(): float64
        set "frame18/duration"(value: float64)
        get "frame19/texture"(): Texture2D
        set "frame19/texture"(value: Texture2D)
        get "frame19/duration"(): float64
        set "frame19/duration"(value: float64)
        get "frame20/texture"(): Texture2D
        set "frame20/texture"(value: Texture2D)
        get "frame20/duration"(): float64
        set "frame20/duration"(value: float64)
        get "frame21/texture"(): Texture2D
        set "frame21/texture"(value: Texture2D)
        get "frame21/duration"(): float64
        set "frame21/duration"(value: float64)
        get "frame22/texture"(): Texture2D
        set "frame22/texture"(value: Texture2D)
        get "frame22/duration"(): float64
        set "frame22/duration"(value: float64)
        get "frame23/texture"(): Texture2D
        set "frame23/texture"(value: Texture2D)
        get "frame23/duration"(): float64
        set "frame23/duration"(value: float64)
        get "frame24/texture"(): Texture2D
        set "frame24/texture"(value: Texture2D)
        get "frame24/duration"(): float64
        set "frame24/duration"(value: float64)
        get "frame25/texture"(): Texture2D
        set "frame25/texture"(value: Texture2D)
        get "frame25/duration"(): float64
        set "frame25/duration"(value: float64)
        get "frame26/texture"(): Texture2D
        set "frame26/texture"(value: Texture2D)
        get "frame26/duration"(): float64
        set "frame26/duration"(value: float64)
        get "frame27/texture"(): Texture2D
        set "frame27/texture"(value: Texture2D)
        get "frame27/duration"(): float64
        set "frame27/duration"(value: float64)
        get "frame28/texture"(): Texture2D
        set "frame28/texture"(value: Texture2D)
        get "frame28/duration"(): float64
        set "frame28/duration"(value: float64)
        get "frame29/texture"(): Texture2D
        set "frame29/texture"(value: Texture2D)
        get "frame29/duration"(): float64
        set "frame29/duration"(value: float64)
        get "frame30/texture"(): Texture2D
        set "frame30/texture"(value: Texture2D)
        get "frame30/duration"(): float64
        set "frame30/duration"(value: float64)
        get "frame31/texture"(): Texture2D
        set "frame31/texture"(value: Texture2D)
        get "frame31/duration"(): float64
        set "frame31/duration"(value: float64)
        get "frame32/texture"(): Texture2D
        set "frame32/texture"(value: Texture2D)
        get "frame32/duration"(): float64
        set "frame32/duration"(value: float64)
        get "frame33/texture"(): Texture2D
        set "frame33/texture"(value: Texture2D)
        get "frame33/duration"(): float64
        set "frame33/duration"(value: float64)
        get "frame34/texture"(): Texture2D
        set "frame34/texture"(value: Texture2D)
        get "frame34/duration"(): float64
        set "frame34/duration"(value: float64)
        get "frame35/texture"(): Texture2D
        set "frame35/texture"(value: Texture2D)
        get "frame35/duration"(): float64
        set "frame35/duration"(value: float64)
        get "frame36/texture"(): Texture2D
        set "frame36/texture"(value: Texture2D)
        get "frame36/duration"(): float64
        set "frame36/duration"(value: float64)
        get "frame37/texture"(): Texture2D
        set "frame37/texture"(value: Texture2D)
        get "frame37/duration"(): float64
        set "frame37/duration"(value: float64)
        get "frame38/texture"(): Texture2D
        set "frame38/texture"(value: Texture2D)
        get "frame38/duration"(): float64
        set "frame38/duration"(value: float64)
        get "frame39/texture"(): Texture2D
        set "frame39/texture"(value: Texture2D)
        get "frame39/duration"(): float64
        set "frame39/duration"(value: float64)
        get "frame40/texture"(): Texture2D
        set "frame40/texture"(value: Texture2D)
        get "frame40/duration"(): float64
        set "frame40/duration"(value: float64)
        get "frame41/texture"(): Texture2D
        set "frame41/texture"(value: Texture2D)
        get "frame41/duration"(): float64
        set "frame41/duration"(value: float64)
        get "frame42/texture"(): Texture2D
        set "frame42/texture"(value: Texture2D)
        get "frame42/duration"(): float64
        set "frame42/duration"(value: float64)
        get "frame43/texture"(): Texture2D
        set "frame43/texture"(value: Texture2D)
        get "frame43/duration"(): float64
        set "frame43/duration"(value: float64)
        get "frame44/texture"(): Texture2D
        set "frame44/texture"(value: Texture2D)
        get "frame44/duration"(): float64
        set "frame44/duration"(value: float64)
        get "frame45/texture"(): Texture2D
        set "frame45/texture"(value: Texture2D)
        get "frame45/duration"(): float64
        set "frame45/duration"(value: float64)
        get "frame46/texture"(): Texture2D
        set "frame46/texture"(value: Texture2D)
        get "frame46/duration"(): float64
        set "frame46/duration"(value: float64)
        get "frame47/texture"(): Texture2D
        set "frame47/texture"(value: Texture2D)
        get "frame47/duration"(): float64
        set "frame47/duration"(value: float64)
        get "frame48/texture"(): Texture2D
        set "frame48/texture"(value: Texture2D)
        get "frame48/duration"(): float64
        set "frame48/duration"(value: float64)
        get "frame49/texture"(): Texture2D
        set "frame49/texture"(value: Texture2D)
        get "frame49/duration"(): float64
        set "frame49/duration"(value: float64)
        get "frame50/texture"(): Texture2D
        set "frame50/texture"(value: Texture2D)
        get "frame50/duration"(): float64
        set "frame50/duration"(value: float64)
        get "frame51/texture"(): Texture2D
        set "frame51/texture"(value: Texture2D)
        get "frame51/duration"(): float64
        set "frame51/duration"(value: float64)
        get "frame52/texture"(): Texture2D
        set "frame52/texture"(value: Texture2D)
        get "frame52/duration"(): float64
        set "frame52/duration"(value: float64)
        get "frame53/texture"(): Texture2D
        set "frame53/texture"(value: Texture2D)
        get "frame53/duration"(): float64
        set "frame53/duration"(value: float64)
        get "frame54/texture"(): Texture2D
        set "frame54/texture"(value: Texture2D)
        get "frame54/duration"(): float64
        set "frame54/duration"(value: float64)
        get "frame55/texture"(): Texture2D
        set "frame55/texture"(value: Texture2D)
        get "frame55/duration"(): float64
        set "frame55/duration"(value: float64)
        get "frame56/texture"(): Texture2D
        set "frame56/texture"(value: Texture2D)
        get "frame56/duration"(): float64
        set "frame56/duration"(value: float64)
        get "frame57/texture"(): Texture2D
        set "frame57/texture"(value: Texture2D)
        get "frame57/duration"(): float64
        set "frame57/duration"(value: float64)
        get "frame58/texture"(): Texture2D
        set "frame58/texture"(value: Texture2D)
        get "frame58/duration"(): float64
        set "frame58/duration"(value: float64)
        get "frame59/texture"(): Texture2D
        set "frame59/texture"(value: Texture2D)
        get "frame59/duration"(): float64
        set "frame59/duration"(value: float64)
        get "frame60/texture"(): Texture2D
        set "frame60/texture"(value: Texture2D)
        get "frame60/duration"(): float64
        set "frame60/duration"(value: float64)
        get "frame61/texture"(): Texture2D
        set "frame61/texture"(value: Texture2D)
        get "frame61/duration"(): float64
        set "frame61/duration"(value: float64)
        get "frame62/texture"(): Texture2D
        set "frame62/texture"(value: Texture2D)
        get "frame62/duration"(): float64
        set "frame62/duration"(value: float64)
        get "frame63/texture"(): Texture2D
        set "frame63/texture"(value: Texture2D)
        get "frame63/duration"(): float64
        set "frame63/duration"(value: float64)
        get "frame64/texture"(): Texture2D
        set "frame64/texture"(value: Texture2D)
        get "frame64/duration"(): float64
        set "frame64/duration"(value: float64)
        get "frame65/texture"(): Texture2D
        set "frame65/texture"(value: Texture2D)
        get "frame65/duration"(): float64
        set "frame65/duration"(value: float64)
        get "frame66/texture"(): Texture2D
        set "frame66/texture"(value: Texture2D)
        get "frame66/duration"(): float64
        set "frame66/duration"(value: float64)
        get "frame67/texture"(): Texture2D
        set "frame67/texture"(value: Texture2D)
        get "frame67/duration"(): float64
        set "frame67/duration"(value: float64)
        get "frame68/texture"(): Texture2D
        set "frame68/texture"(value: Texture2D)
        get "frame68/duration"(): float64
        set "frame68/duration"(value: float64)
        get "frame69/texture"(): Texture2D
        set "frame69/texture"(value: Texture2D)
        get "frame69/duration"(): float64
        set "frame69/duration"(value: float64)
        get "frame70/texture"(): Texture2D
        set "frame70/texture"(value: Texture2D)
        get "frame70/duration"(): float64
        set "frame70/duration"(value: float64)
        get "frame71/texture"(): Texture2D
        set "frame71/texture"(value: Texture2D)
        get "frame71/duration"(): float64
        set "frame71/duration"(value: float64)
        get "frame72/texture"(): Texture2D
        set "frame72/texture"(value: Texture2D)
        get "frame72/duration"(): float64
        set "frame72/duration"(value: float64)
        get "frame73/texture"(): Texture2D
        set "frame73/texture"(value: Texture2D)
        get "frame73/duration"(): float64
        set "frame73/duration"(value: float64)
        get "frame74/texture"(): Texture2D
        set "frame74/texture"(value: Texture2D)
        get "frame74/duration"(): float64
        set "frame74/duration"(value: float64)
        get "frame75/texture"(): Texture2D
        set "frame75/texture"(value: Texture2D)
        get "frame75/duration"(): float64
        set "frame75/duration"(value: float64)
        get "frame76/texture"(): Texture2D
        set "frame76/texture"(value: Texture2D)
        get "frame76/duration"(): float64
        set "frame76/duration"(value: float64)
        get "frame77/texture"(): Texture2D
        set "frame77/texture"(value: Texture2D)
        get "frame77/duration"(): float64
        set "frame77/duration"(value: float64)
        get "frame78/texture"(): Texture2D
        set "frame78/texture"(value: Texture2D)
        get "frame78/duration"(): float64
        set "frame78/duration"(value: float64)
        get "frame79/texture"(): Texture2D
        set "frame79/texture"(value: Texture2D)
        get "frame79/duration"(): float64
        set "frame79/duration"(value: float64)
        get "frame80/texture"(): Texture2D
        set "frame80/texture"(value: Texture2D)
        get "frame80/duration"(): float64
        set "frame80/duration"(value: float64)
        get "frame81/texture"(): Texture2D
        set "frame81/texture"(value: Texture2D)
        get "frame81/duration"(): float64
        set "frame81/duration"(value: float64)
        get "frame82/texture"(): Texture2D
        set "frame82/texture"(value: Texture2D)
        get "frame82/duration"(): float64
        set "frame82/duration"(value: float64)
        get "frame83/texture"(): Texture2D
        set "frame83/texture"(value: Texture2D)
        get "frame83/duration"(): float64
        set "frame83/duration"(value: float64)
        get "frame84/texture"(): Texture2D
        set "frame84/texture"(value: Texture2D)
        get "frame84/duration"(): float64
        set "frame84/duration"(value: float64)
        get "frame85/texture"(): Texture2D
        set "frame85/texture"(value: Texture2D)
        get "frame85/duration"(): float64
        set "frame85/duration"(value: float64)
        get "frame86/texture"(): Texture2D
        set "frame86/texture"(value: Texture2D)
        get "frame86/duration"(): float64
        set "frame86/duration"(value: float64)
        get "frame87/texture"(): Texture2D
        set "frame87/texture"(value: Texture2D)
        get "frame87/duration"(): float64
        set "frame87/duration"(value: float64)
        get "frame88/texture"(): Texture2D
        set "frame88/texture"(value: Texture2D)
        get "frame88/duration"(): float64
        set "frame88/duration"(value: float64)
        get "frame89/texture"(): Texture2D
        set "frame89/texture"(value: Texture2D)
        get "frame89/duration"(): float64
        set "frame89/duration"(value: float64)
        get "frame90/texture"(): Texture2D
        set "frame90/texture"(value: Texture2D)
        get "frame90/duration"(): float64
        set "frame90/duration"(value: float64)
        get "frame91/texture"(): Texture2D
        set "frame91/texture"(value: Texture2D)
        get "frame91/duration"(): float64
        set "frame91/duration"(value: float64)
        get "frame92/texture"(): Texture2D
        set "frame92/texture"(value: Texture2D)
        get "frame92/duration"(): float64
        set "frame92/duration"(value: float64)
        get "frame93/texture"(): Texture2D
        set "frame93/texture"(value: Texture2D)
        get "frame93/duration"(): float64
        set "frame93/duration"(value: float64)
        get "frame94/texture"(): Texture2D
        set "frame94/texture"(value: Texture2D)
        get "frame94/duration"(): float64
        set "frame94/duration"(value: float64)
        get "frame95/texture"(): Texture2D
        set "frame95/texture"(value: Texture2D)
        get "frame95/duration"(): float64
        set "frame95/duration"(value: float64)
        get "frame96/texture"(): Texture2D
        set "frame96/texture"(value: Texture2D)
        get "frame96/duration"(): float64
        set "frame96/duration"(value: float64)
        get "frame97/texture"(): Texture2D
        set "frame97/texture"(value: Texture2D)
        get "frame97/duration"(): float64
        set "frame97/duration"(value: float64)
        get "frame98/texture"(): Texture2D
        set "frame98/texture"(value: Texture2D)
        get "frame98/duration"(): float64
        set "frame98/duration"(value: float64)
        get "frame99/texture"(): Texture2D
        set "frame99/texture"(value: Texture2D)
        get "frame99/duration"(): float64
        set "frame99/duration"(value: float64)
        get "frame100/texture"(): Texture2D
        set "frame100/texture"(value: Texture2D)
        get "frame100/duration"(): float64
        set "frame100/duration"(value: float64)
        get "frame101/texture"(): Texture2D
        set "frame101/texture"(value: Texture2D)
        get "frame101/duration"(): float64
        set "frame101/duration"(value: float64)
        get "frame102/texture"(): Texture2D
        set "frame102/texture"(value: Texture2D)
        get "frame102/duration"(): float64
        set "frame102/duration"(value: float64)
        get "frame103/texture"(): Texture2D
        set "frame103/texture"(value: Texture2D)
        get "frame103/duration"(): float64
        set "frame103/duration"(value: float64)
        get "frame104/texture"(): Texture2D
        set "frame104/texture"(value: Texture2D)
        get "frame104/duration"(): float64
        set "frame104/duration"(value: float64)
        get "frame105/texture"(): Texture2D
        set "frame105/texture"(value: Texture2D)
        get "frame105/duration"(): float64
        set "frame105/duration"(value: float64)
        get "frame106/texture"(): Texture2D
        set "frame106/texture"(value: Texture2D)
        get "frame106/duration"(): float64
        set "frame106/duration"(value: float64)
        get "frame107/texture"(): Texture2D
        set "frame107/texture"(value: Texture2D)
        get "frame107/duration"(): float64
        set "frame107/duration"(value: float64)
        get "frame108/texture"(): Texture2D
        set "frame108/texture"(value: Texture2D)
        get "frame108/duration"(): float64
        set "frame108/duration"(value: float64)
        get "frame109/texture"(): Texture2D
        set "frame109/texture"(value: Texture2D)
        get "frame109/duration"(): float64
        set "frame109/duration"(value: float64)
        get "frame110/texture"(): Texture2D
        set "frame110/texture"(value: Texture2D)
        get "frame110/duration"(): float64
        set "frame110/duration"(value: float64)
        get "frame111/texture"(): Texture2D
        set "frame111/texture"(value: Texture2D)
        get "frame111/duration"(): float64
        set "frame111/duration"(value: float64)
        get "frame112/texture"(): Texture2D
        set "frame112/texture"(value: Texture2D)
        get "frame112/duration"(): float64
        set "frame112/duration"(value: float64)
        get "frame113/texture"(): Texture2D
        set "frame113/texture"(value: Texture2D)
        get "frame113/duration"(): float64
        set "frame113/duration"(value: float64)
        get "frame114/texture"(): Texture2D
        set "frame114/texture"(value: Texture2D)
        get "frame114/duration"(): float64
        set "frame114/duration"(value: float64)
        get "frame115/texture"(): Texture2D
        set "frame115/texture"(value: Texture2D)
        get "frame115/duration"(): float64
        set "frame115/duration"(value: float64)
        get "frame116/texture"(): Texture2D
        set "frame116/texture"(value: Texture2D)
        get "frame116/duration"(): float64
        set "frame116/duration"(value: float64)
        get "frame117/texture"(): Texture2D
        set "frame117/texture"(value: Texture2D)
        get "frame117/duration"(): float64
        set "frame117/duration"(value: float64)
        get "frame118/texture"(): Texture2D
        set "frame118/texture"(value: Texture2D)
        get "frame118/duration"(): float64
        set "frame118/duration"(value: float64)
        get "frame119/texture"(): Texture2D
        set "frame119/texture"(value: Texture2D)
        get "frame119/duration"(): float64
        set "frame119/duration"(value: float64)
        get "frame120/texture"(): Texture2D
        set "frame120/texture"(value: Texture2D)
        get "frame120/duration"(): float64
        set "frame120/duration"(value: float64)
        get "frame121/texture"(): Texture2D
        set "frame121/texture"(value: Texture2D)
        get "frame121/duration"(): float64
        set "frame121/duration"(value: float64)
        get "frame122/texture"(): Texture2D
        set "frame122/texture"(value: Texture2D)
        get "frame122/duration"(): float64
        set "frame122/duration"(value: float64)
        get "frame123/texture"(): Texture2D
        set "frame123/texture"(value: Texture2D)
        get "frame123/duration"(): float64
        set "frame123/duration"(value: float64)
        get "frame124/texture"(): Texture2D
        set "frame124/texture"(value: Texture2D)
        get "frame124/duration"(): float64
        set "frame124/duration"(value: float64)
        get "frame125/texture"(): Texture2D
        set "frame125/texture"(value: Texture2D)
        get "frame125/duration"(): float64
        set "frame125/duration"(value: float64)
        get "frame126/texture"(): Texture2D
        set "frame126/texture"(value: Texture2D)
        get "frame126/duration"(): float64
        set "frame126/duration"(value: float64)
        get "frame127/texture"(): Texture2D
        set "frame127/texture"(value: Texture2D)
        get "frame127/duration"(): float64
        set "frame127/duration"(value: float64)
        get "frame128/texture"(): Texture2D
        set "frame128/texture"(value: Texture2D)
        get "frame128/duration"(): float64
        set "frame128/duration"(value: float64)
        get "frame129/texture"(): Texture2D
        set "frame129/texture"(value: Texture2D)
        get "frame129/duration"(): float64
        set "frame129/duration"(value: float64)
        get "frame130/texture"(): Texture2D
        set "frame130/texture"(value: Texture2D)
        get "frame130/duration"(): float64
        set "frame130/duration"(value: float64)
        get "frame131/texture"(): Texture2D
        set "frame131/texture"(value: Texture2D)
        get "frame131/duration"(): float64
        set "frame131/duration"(value: float64)
        get "frame132/texture"(): Texture2D
        set "frame132/texture"(value: Texture2D)
        get "frame132/duration"(): float64
        set "frame132/duration"(value: float64)
        get "frame133/texture"(): Texture2D
        set "frame133/texture"(value: Texture2D)
        get "frame133/duration"(): float64
        set "frame133/duration"(value: float64)
        get "frame134/texture"(): Texture2D
        set "frame134/texture"(value: Texture2D)
        get "frame134/duration"(): float64
        set "frame134/duration"(value: float64)
        get "frame135/texture"(): Texture2D
        set "frame135/texture"(value: Texture2D)
        get "frame135/duration"(): float64
        set "frame135/duration"(value: float64)
        get "frame136/texture"(): Texture2D
        set "frame136/texture"(value: Texture2D)
        get "frame136/duration"(): float64
        set "frame136/duration"(value: float64)
        get "frame137/texture"(): Texture2D
        set "frame137/texture"(value: Texture2D)
        get "frame137/duration"(): float64
        set "frame137/duration"(value: float64)
        get "frame138/texture"(): Texture2D
        set "frame138/texture"(value: Texture2D)
        get "frame138/duration"(): float64
        set "frame138/duration"(value: float64)
        get "frame139/texture"(): Texture2D
        set "frame139/texture"(value: Texture2D)
        get "frame139/duration"(): float64
        set "frame139/duration"(value: float64)
        get "frame140/texture"(): Texture2D
        set "frame140/texture"(value: Texture2D)
        get "frame140/duration"(): float64
        set "frame140/duration"(value: float64)
        get "frame141/texture"(): Texture2D
        set "frame141/texture"(value: Texture2D)
        get "frame141/duration"(): float64
        set "frame141/duration"(value: float64)
        get "frame142/texture"(): Texture2D
        set "frame142/texture"(value: Texture2D)
        get "frame142/duration"(): float64
        set "frame142/duration"(value: float64)
        get "frame143/texture"(): Texture2D
        set "frame143/texture"(value: Texture2D)
        get "frame143/duration"(): float64
        set "frame143/duration"(value: float64)
        get "frame144/texture"(): Texture2D
        set "frame144/texture"(value: Texture2D)
        get "frame144/duration"(): float64
        set "frame144/duration"(value: float64)
        get "frame145/texture"(): Texture2D
        set "frame145/texture"(value: Texture2D)
        get "frame145/duration"(): float64
        set "frame145/duration"(value: float64)
        get "frame146/texture"(): Texture2D
        set "frame146/texture"(value: Texture2D)
        get "frame146/duration"(): float64
        set "frame146/duration"(value: float64)
        get "frame147/texture"(): Texture2D
        set "frame147/texture"(value: Texture2D)
        get "frame147/duration"(): float64
        set "frame147/duration"(value: float64)
        get "frame148/texture"(): Texture2D
        set "frame148/texture"(value: Texture2D)
        get "frame148/duration"(): float64
        set "frame148/duration"(value: float64)
        get "frame149/texture"(): Texture2D
        set "frame149/texture"(value: Texture2D)
        get "frame149/duration"(): float64
        set "frame149/duration"(value: float64)
        get "frame150/texture"(): Texture2D
        set "frame150/texture"(value: Texture2D)
        get "frame150/duration"(): float64
        set "frame150/duration"(value: float64)
        get "frame151/texture"(): Texture2D
        set "frame151/texture"(value: Texture2D)
        get "frame151/duration"(): float64
        set "frame151/duration"(value: float64)
        get "frame152/texture"(): Texture2D
        set "frame152/texture"(value: Texture2D)
        get "frame152/duration"(): float64
        set "frame152/duration"(value: float64)
        get "frame153/texture"(): Texture2D
        set "frame153/texture"(value: Texture2D)
        get "frame153/duration"(): float64
        set "frame153/duration"(value: float64)
        get "frame154/texture"(): Texture2D
        set "frame154/texture"(value: Texture2D)
        get "frame154/duration"(): float64
        set "frame154/duration"(value: float64)
        get "frame155/texture"(): Texture2D
        set "frame155/texture"(value: Texture2D)
        get "frame155/duration"(): float64
        set "frame155/duration"(value: float64)
        get "frame156/texture"(): Texture2D
        set "frame156/texture"(value: Texture2D)
        get "frame156/duration"(): float64
        set "frame156/duration"(value: float64)
        get "frame157/texture"(): Texture2D
        set "frame157/texture"(value: Texture2D)
        get "frame157/duration"(): float64
        set "frame157/duration"(value: float64)
        get "frame158/texture"(): Texture2D
        set "frame158/texture"(value: Texture2D)
        get "frame158/duration"(): float64
        set "frame158/duration"(value: float64)
        get "frame159/texture"(): Texture2D
        set "frame159/texture"(value: Texture2D)
        get "frame159/duration"(): float64
        set "frame159/duration"(value: float64)
        get "frame160/texture"(): Texture2D
        set "frame160/texture"(value: Texture2D)
        get "frame160/duration"(): float64
        set "frame160/duration"(value: float64)
        get "frame161/texture"(): Texture2D
        set "frame161/texture"(value: Texture2D)
        get "frame161/duration"(): float64
        set "frame161/duration"(value: float64)
        get "frame162/texture"(): Texture2D
        set "frame162/texture"(value: Texture2D)
        get "frame162/duration"(): float64
        set "frame162/duration"(value: float64)
        get "frame163/texture"(): Texture2D
        set "frame163/texture"(value: Texture2D)
        get "frame163/duration"(): float64
        set "frame163/duration"(value: float64)
        get "frame164/texture"(): Texture2D
        set "frame164/texture"(value: Texture2D)
        get "frame164/duration"(): float64
        set "frame164/duration"(value: float64)
        get "frame165/texture"(): Texture2D
        set "frame165/texture"(value: Texture2D)
        get "frame165/duration"(): float64
        set "frame165/duration"(value: float64)
        get "frame166/texture"(): Texture2D
        set "frame166/texture"(value: Texture2D)
        get "frame166/duration"(): float64
        set "frame166/duration"(value: float64)
        get "frame167/texture"(): Texture2D
        set "frame167/texture"(value: Texture2D)
        get "frame167/duration"(): float64
        set "frame167/duration"(value: float64)
        get "frame168/texture"(): Texture2D
        set "frame168/texture"(value: Texture2D)
        get "frame168/duration"(): float64
        set "frame168/duration"(value: float64)
        get "frame169/texture"(): Texture2D
        set "frame169/texture"(value: Texture2D)
        get "frame169/duration"(): float64
        set "frame169/duration"(value: float64)
        get "frame170/texture"(): Texture2D
        set "frame170/texture"(value: Texture2D)
        get "frame170/duration"(): float64
        set "frame170/duration"(value: float64)
        get "frame171/texture"(): Texture2D
        set "frame171/texture"(value: Texture2D)
        get "frame171/duration"(): float64
        set "frame171/duration"(value: float64)
        get "frame172/texture"(): Texture2D
        set "frame172/texture"(value: Texture2D)
        get "frame172/duration"(): float64
        set "frame172/duration"(value: float64)
        get "frame173/texture"(): Texture2D
        set "frame173/texture"(value: Texture2D)
        get "frame173/duration"(): float64
        set "frame173/duration"(value: float64)
        get "frame174/texture"(): Texture2D
        set "frame174/texture"(value: Texture2D)
        get "frame174/duration"(): float64
        set "frame174/duration"(value: float64)
        get "frame175/texture"(): Texture2D
        set "frame175/texture"(value: Texture2D)
        get "frame175/duration"(): float64
        set "frame175/duration"(value: float64)
        get "frame176/texture"(): Texture2D
        set "frame176/texture"(value: Texture2D)
        get "frame176/duration"(): float64
        set "frame176/duration"(value: float64)
        get "frame177/texture"(): Texture2D
        set "frame177/texture"(value: Texture2D)
        get "frame177/duration"(): float64
        set "frame177/duration"(value: float64)
        get "frame178/texture"(): Texture2D
        set "frame178/texture"(value: Texture2D)
        get "frame178/duration"(): float64
        set "frame178/duration"(value: float64)
        get "frame179/texture"(): Texture2D
        set "frame179/texture"(value: Texture2D)
        get "frame179/duration"(): float64
        set "frame179/duration"(value: float64)
        get "frame180/texture"(): Texture2D
        set "frame180/texture"(value: Texture2D)
        get "frame180/duration"(): float64
        set "frame180/duration"(value: float64)
        get "frame181/texture"(): Texture2D
        set "frame181/texture"(value: Texture2D)
        get "frame181/duration"(): float64
        set "frame181/duration"(value: float64)
        get "frame182/texture"(): Texture2D
        set "frame182/texture"(value: Texture2D)
        get "frame182/duration"(): float64
        set "frame182/duration"(value: float64)
        get "frame183/texture"(): Texture2D
        set "frame183/texture"(value: Texture2D)
        get "frame183/duration"(): float64
        set "frame183/duration"(value: float64)
        get "frame184/texture"(): Texture2D
        set "frame184/texture"(value: Texture2D)
        get "frame184/duration"(): float64
        set "frame184/duration"(value: float64)
        get "frame185/texture"(): Texture2D
        set "frame185/texture"(value: Texture2D)
        get "frame185/duration"(): float64
        set "frame185/duration"(value: float64)
        get "frame186/texture"(): Texture2D
        set "frame186/texture"(value: Texture2D)
        get "frame186/duration"(): float64
        set "frame186/duration"(value: float64)
        get "frame187/texture"(): Texture2D
        set "frame187/texture"(value: Texture2D)
        get "frame187/duration"(): float64
        set "frame187/duration"(value: float64)
        get "frame188/texture"(): Texture2D
        set "frame188/texture"(value: Texture2D)
        get "frame188/duration"(): float64
        set "frame188/duration"(value: float64)
        get "frame189/texture"(): Texture2D
        set "frame189/texture"(value: Texture2D)
        get "frame189/duration"(): float64
        set "frame189/duration"(value: float64)
        get "frame190/texture"(): Texture2D
        set "frame190/texture"(value: Texture2D)
        get "frame190/duration"(): float64
        set "frame190/duration"(value: float64)
        get "frame191/texture"(): Texture2D
        set "frame191/texture"(value: Texture2D)
        get "frame191/duration"(): float64
        set "frame191/duration"(value: float64)
        get "frame192/texture"(): Texture2D
        set "frame192/texture"(value: Texture2D)
        get "frame192/duration"(): float64
        set "frame192/duration"(value: float64)
        get "frame193/texture"(): Texture2D
        set "frame193/texture"(value: Texture2D)
        get "frame193/duration"(): float64
        set "frame193/duration"(value: float64)
        get "frame194/texture"(): Texture2D
        set "frame194/texture"(value: Texture2D)
        get "frame194/duration"(): float64
        set "frame194/duration"(value: float64)
        get "frame195/texture"(): Texture2D
        set "frame195/texture"(value: Texture2D)
        get "frame195/duration"(): float64
        set "frame195/duration"(value: float64)
        get "frame196/texture"(): Texture2D
        set "frame196/texture"(value: Texture2D)
        get "frame196/duration"(): float64
        set "frame196/duration"(value: float64)
        get "frame197/texture"(): Texture2D
        set "frame197/texture"(value: Texture2D)
        get "frame197/duration"(): float64
        set "frame197/duration"(value: float64)
        get "frame198/texture"(): Texture2D
        set "frame198/texture"(value: Texture2D)
        get "frame198/duration"(): float64
        set "frame198/duration"(value: float64)
        get "frame199/texture"(): Texture2D
        set "frame199/texture"(value: Texture2D)
        get "frame199/duration"(): float64
        set "frame199/duration"(value: float64)
        get "frame200/texture"(): Texture2D
        set "frame200/texture"(value: Texture2D)
        get "frame200/duration"(): float64
        set "frame200/duration"(value: float64)
        get "frame201/texture"(): Texture2D
        set "frame201/texture"(value: Texture2D)
        get "frame201/duration"(): float64
        set "frame201/duration"(value: float64)
        get "frame202/texture"(): Texture2D
        set "frame202/texture"(value: Texture2D)
        get "frame202/duration"(): float64
        set "frame202/duration"(value: float64)
        get "frame203/texture"(): Texture2D
        set "frame203/texture"(value: Texture2D)
        get "frame203/duration"(): float64
        set "frame203/duration"(value: float64)
        get "frame204/texture"(): Texture2D
        set "frame204/texture"(value: Texture2D)
        get "frame204/duration"(): float64
        set "frame204/duration"(value: float64)
        get "frame205/texture"(): Texture2D
        set "frame205/texture"(value: Texture2D)
        get "frame205/duration"(): float64
        set "frame205/duration"(value: float64)
        get "frame206/texture"(): Texture2D
        set "frame206/texture"(value: Texture2D)
        get "frame206/duration"(): float64
        set "frame206/duration"(value: float64)
        get "frame207/texture"(): Texture2D
        set "frame207/texture"(value: Texture2D)
        get "frame207/duration"(): float64
        set "frame207/duration"(value: float64)
        get "frame208/texture"(): Texture2D
        set "frame208/texture"(value: Texture2D)
        get "frame208/duration"(): float64
        set "frame208/duration"(value: float64)
        get "frame209/texture"(): Texture2D
        set "frame209/texture"(value: Texture2D)
        get "frame209/duration"(): float64
        set "frame209/duration"(value: float64)
        get "frame210/texture"(): Texture2D
        set "frame210/texture"(value: Texture2D)
        get "frame210/duration"(): float64
        set "frame210/duration"(value: float64)
        get "frame211/texture"(): Texture2D
        set "frame211/texture"(value: Texture2D)
        get "frame211/duration"(): float64
        set "frame211/duration"(value: float64)
        get "frame212/texture"(): Texture2D
        set "frame212/texture"(value: Texture2D)
        get "frame212/duration"(): float64
        set "frame212/duration"(value: float64)
        get "frame213/texture"(): Texture2D
        set "frame213/texture"(value: Texture2D)
        get "frame213/duration"(): float64
        set "frame213/duration"(value: float64)
        get "frame214/texture"(): Texture2D
        set "frame214/texture"(value: Texture2D)
        get "frame214/duration"(): float64
        set "frame214/duration"(value: float64)
        get "frame215/texture"(): Texture2D
        set "frame215/texture"(value: Texture2D)
        get "frame215/duration"(): float64
        set "frame215/duration"(value: float64)
        get "frame216/texture"(): Texture2D
        set "frame216/texture"(value: Texture2D)
        get "frame216/duration"(): float64
        set "frame216/duration"(value: float64)
        get "frame217/texture"(): Texture2D
        set "frame217/texture"(value: Texture2D)
        get "frame217/duration"(): float64
        set "frame217/duration"(value: float64)
        get "frame218/texture"(): Texture2D
        set "frame218/texture"(value: Texture2D)
        get "frame218/duration"(): float64
        set "frame218/duration"(value: float64)
        get "frame219/texture"(): Texture2D
        set "frame219/texture"(value: Texture2D)
        get "frame219/duration"(): float64
        set "frame219/duration"(value: float64)
        get "frame220/texture"(): Texture2D
        set "frame220/texture"(value: Texture2D)
        get "frame220/duration"(): float64
        set "frame220/duration"(value: float64)
        get "frame221/texture"(): Texture2D
        set "frame221/texture"(value: Texture2D)
        get "frame221/duration"(): float64
        set "frame221/duration"(value: float64)
        get "frame222/texture"(): Texture2D
        set "frame222/texture"(value: Texture2D)
        get "frame222/duration"(): float64
        set "frame222/duration"(value: float64)
        get "frame223/texture"(): Texture2D
        set "frame223/texture"(value: Texture2D)
        get "frame223/duration"(): float64
        set "frame223/duration"(value: float64)
        get "frame224/texture"(): Texture2D
        set "frame224/texture"(value: Texture2D)
        get "frame224/duration"(): float64
        set "frame224/duration"(value: float64)
        get "frame225/texture"(): Texture2D
        set "frame225/texture"(value: Texture2D)
        get "frame225/duration"(): float64
        set "frame225/duration"(value: float64)
        get "frame226/texture"(): Texture2D
        set "frame226/texture"(value: Texture2D)
        get "frame226/duration"(): float64
        set "frame226/duration"(value: float64)
        get "frame227/texture"(): Texture2D
        set "frame227/texture"(value: Texture2D)
        get "frame227/duration"(): float64
        set "frame227/duration"(value: float64)
        get "frame228/texture"(): Texture2D
        set "frame228/texture"(value: Texture2D)
        get "frame228/duration"(): float64
        set "frame228/duration"(value: float64)
        get "frame229/texture"(): Texture2D
        set "frame229/texture"(value: Texture2D)
        get "frame229/duration"(): float64
        set "frame229/duration"(value: float64)
        get "frame230/texture"(): Texture2D
        set "frame230/texture"(value: Texture2D)
        get "frame230/duration"(): float64
        set "frame230/duration"(value: float64)
        get "frame231/texture"(): Texture2D
        set "frame231/texture"(value: Texture2D)
        get "frame231/duration"(): float64
        set "frame231/duration"(value: float64)
        get "frame232/texture"(): Texture2D
        set "frame232/texture"(value: Texture2D)
        get "frame232/duration"(): float64
        set "frame232/duration"(value: float64)
        get "frame233/texture"(): Texture2D
        set "frame233/texture"(value: Texture2D)
        get "frame233/duration"(): float64
        set "frame233/duration"(value: float64)
        get "frame234/texture"(): Texture2D
        set "frame234/texture"(value: Texture2D)
        get "frame234/duration"(): float64
        set "frame234/duration"(value: float64)
        get "frame235/texture"(): Texture2D
        set "frame235/texture"(value: Texture2D)
        get "frame235/duration"(): float64
        set "frame235/duration"(value: float64)
        get "frame236/texture"(): Texture2D
        set "frame236/texture"(value: Texture2D)
        get "frame236/duration"(): float64
        set "frame236/duration"(value: float64)
        get "frame237/texture"(): Texture2D
        set "frame237/texture"(value: Texture2D)
        get "frame237/duration"(): float64
        set "frame237/duration"(value: float64)
        get "frame238/texture"(): Texture2D
        set "frame238/texture"(value: Texture2D)
        get "frame238/duration"(): float64
        set "frame238/duration"(value: float64)
        get "frame239/texture"(): Texture2D
        set "frame239/texture"(value: Texture2D)
        get "frame239/duration"(): float64
        set "frame239/duration"(value: float64)
        get "frame240/texture"(): Texture2D
        set "frame240/texture"(value: Texture2D)
        get "frame240/duration"(): float64
        set "frame240/duration"(value: float64)
        get "frame241/texture"(): Texture2D
        set "frame241/texture"(value: Texture2D)
        get "frame241/duration"(): float64
        set "frame241/duration"(value: float64)
        get "frame242/texture"(): Texture2D
        set "frame242/texture"(value: Texture2D)
        get "frame242/duration"(): float64
        set "frame242/duration"(value: float64)
        get "frame243/texture"(): Texture2D
        set "frame243/texture"(value: Texture2D)
        get "frame243/duration"(): float64
        set "frame243/duration"(value: float64)
        get "frame244/texture"(): Texture2D
        set "frame244/texture"(value: Texture2D)
        get "frame244/duration"(): float64
        set "frame244/duration"(value: float64)
        get "frame245/texture"(): Texture2D
        set "frame245/texture"(value: Texture2D)
        get "frame245/duration"(): float64
        set "frame245/duration"(value: float64)
        get "frame246/texture"(): Texture2D
        set "frame246/texture"(value: Texture2D)
        get "frame246/duration"(): float64
        set "frame246/duration"(value: float64)
        get "frame247/texture"(): Texture2D
        set "frame247/texture"(value: Texture2D)
        get "frame247/duration"(): float64
        set "frame247/duration"(value: float64)
        get "frame248/texture"(): Texture2D
        set "frame248/texture"(value: Texture2D)
        get "frame248/duration"(): float64
        set "frame248/duration"(value: float64)
        get "frame249/texture"(): Texture2D
        set "frame249/texture"(value: Texture2D)
        get "frame249/duration"(): float64
        set "frame249/duration"(value: float64)
        get "frame250/texture"(): Texture2D
        set "frame250/texture"(value: Texture2D)
        get "frame250/duration"(): float64
        set "frame250/duration"(value: float64)
        get "frame251/texture"(): Texture2D
        set "frame251/texture"(value: Texture2D)
        get "frame251/duration"(): float64
        set "frame251/duration"(value: float64)
        get "frame252/texture"(): Texture2D
        set "frame252/texture"(value: Texture2D)
        get "frame252/duration"(): float64
        set "frame252/duration"(value: float64)
        get "frame253/texture"(): Texture2D
        set "frame253/texture"(value: Texture2D)
        get "frame253/duration"(): float64
        set "frame253/duration"(value: float64)
        get "frame254/texture"(): Texture2D
        set "frame254/texture"(value: Texture2D)
        get "frame254/duration"(): float64
        set "frame254/duration"(value: float64)
        get "frame255/texture"(): Texture2D
        set "frame255/texture"(value: Texture2D)
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
        addTrack(type: Animation.TrackType, atPosition: int64 = -1): int64
        removeTrack(trackIdx: int64): void
        getTrackCount(): int64
        trackGetType(trackIdx: int64): Animation.TrackType
        trackGetPath(trackIdx: int64): NodePath
        trackSetPath(trackIdx: int64, path: NodePath | string): void
        findTrack(path: NodePath | string, type: Animation.TrackType): int64
        trackMoveUp(trackIdx: int64): void
        trackMoveDown(trackIdx: int64): void
        trackMoveTo(trackIdx: int64, toIdx: int64): void
        trackSwap(trackIdx: int64, withIdx: int64): void
        trackSetImported(trackIdx: int64, imported: boolean): void
        trackIsImported(trackIdx: int64): boolean
        trackSetEnabled(trackIdx: int64, enabled: boolean): void
        trackIsEnabled(trackIdx: int64): boolean
        positionTrackInsertKey(trackIdx: int64, time: float64, position: Vector3): int64
        rotationTrackInsertKey(trackIdx: int64, time: float64, rotation: Quaternion): int64
        scaleTrackInsertKey(trackIdx: int64, time: float64, scale: Vector3): int64
        blendShapeTrackInsertKey(trackIdx: int64, time: float64, amount: float64): int64
        positionTrackInterpolate(trackIdx: int64, timeSec: float64, backward: boolean = false): Vector3
        rotationTrackInterpolate(trackIdx: int64, timeSec: float64, backward: boolean = false): Quaternion
        scaleTrackInterpolate(trackIdx: int64, timeSec: float64, backward: boolean = false): Vector3
        blendShapeTrackInterpolate(trackIdx: int64, timeSec: float64, backward: boolean = false): float64
        trackInsertKey(trackIdx: int64, time: float64, key: any, transition: float64 = 1): int64
        trackRemoveKey(trackIdx: int64, keyIdx: int64): void
        trackRemoveKeyAtTime(trackIdx: int64, time: float64): void
        trackSetKeyValue(trackIdx: int64, key: int64, value: any): void
        trackSetKeyTransition(trackIdx: int64, keyIdx: int64, transition: float64): void
        trackSetKeyTime(trackIdx: int64, keyIdx: int64, time: float64): void
        trackGetKeyTransition(trackIdx: int64, keyIdx: int64): float64
        trackGetKeyCount(trackIdx: int64): int64
        trackGetKeyValue(trackIdx: int64, keyIdx: int64): any
        trackGetKeyTime(trackIdx: int64, keyIdx: int64): float64
        trackFindKey(trackIdx: int64, time: float64, findMode: Animation.FindMode = 0, limit: boolean = false, backward: boolean = false): int64
        trackSetInterpolationType(trackIdx: int64, interpolation: Animation.InterpolationType): void
        trackGetInterpolationType(trackIdx: int64): Animation.InterpolationType
        trackSetInterpolationLoopWrap(trackIdx: int64, interpolation: boolean): void
        trackGetInterpolationLoopWrap(trackIdx: int64): boolean
        trackIsCompressed(trackIdx: int64): boolean
        valueTrackSetUpdateMode(trackIdx: int64, mode: Animation.UpdateMode): void
        valueTrackGetUpdateMode(trackIdx: int64): Animation.UpdateMode
        valueTrackInterpolate(trackIdx: int64, timeSec: float64, backward: boolean = false): any
        methodTrackGetName(trackIdx: int64, keyIdx: int64): StringName
        methodTrackGetParams(trackIdx: int64, keyIdx: int64): GArray
        bezierTrackInsertKey(trackIdx: int64, time: float64, value: float64, inHandle: Vector2 = Vector2.ZERO, outHandle: Vector2 = Vector2.ZERO): int64
        bezierTrackSetKeyValue(trackIdx: int64, keyIdx: int64, value: float64): void
        bezierTrackSetKeyInHandle(trackIdx: int64, keyIdx: int64, inHandle: Vector2, balancedValueTimeRatio: float64 = 1): void
        bezierTrackSetKeyOutHandle(trackIdx: int64, keyIdx: int64, outHandle: Vector2, balancedValueTimeRatio: float64 = 1): void
        bezierTrackGetKeyValue(trackIdx: int64, keyIdx: int64): float64
        bezierTrackGetKeyInHandle(trackIdx: int64, keyIdx: int64): Vector2
        bezierTrackGetKeyOutHandle(trackIdx: int64, keyIdx: int64): Vector2
        bezierTrackInterpolate(trackIdx: int64, time: float64): float64
        audioTrackInsertKey(trackIdx: int64, time: float64, stream: Resource, startOffset: float64 = 0, endOffset: float64 = 0): int64
        audioTrackSetKeyStream(trackIdx: int64, keyIdx: int64, stream: Resource): void
        audioTrackSetKeyStartOffset(trackIdx: int64, keyIdx: int64, offset: float64): void
        audioTrackSetKeyEndOffset(trackIdx: int64, keyIdx: int64, offset: float64): void
        audioTrackGetKeyStream(trackIdx: int64, keyIdx: int64): Resource
        audioTrackGetKeyStartOffset(trackIdx: int64, keyIdx: int64): float64
        audioTrackGetKeyEndOffset(trackIdx: int64, keyIdx: int64): float64
        audioTrackSetUseBlend(trackIdx: int64, enable: boolean): void
        audioTrackIsUseBlend(trackIdx: int64): boolean
        animationTrackInsertKey(trackIdx: int64, time: float64, animation: StringName): int64
        animationTrackSetKeyAnimation(trackIdx: int64, keyIdx: int64, animation: StringName): void
        animationTrackGetKeyAnimation(trackIdx: int64, keyIdx: int64): StringName
        addMarker(name: StringName, time: float64): void
        removeMarker(name: StringName): void
        hasMarker(name: StringName): boolean
        getMarkerAtTime(time: float64): StringName
        getNextMarker(time: float64): StringName
        getPrevMarker(time: float64): StringName
        getMarkerTime(name: StringName): float64
        getMarkerNames(): PackedStringArray
        getMarkerColor(name: StringName): Color
        setMarkerColor(name: StringName, color: Color): void
        
        /** Clear the animation (clear all tracks and reset all). */
        clear(): void
        copyTrack(trackIdx: int64, toAnimation: Animation): void
        
        /** Optimize the animation and all its tracks in-place. This will preserve only as many keys as are necessary to keep the animation within the specified bounds. */
        optimize(allowedVelocityErr: float64 = 0.01, allowedAngularErr: float64 = 0.01, precision: int64 = 3): void
        
        /** Compress the animation and all its tracks in-place. This will make [method track_is_compressed] return `true` once called on this [Animation]. Compressed tracks require less memory to be played, and are designed to be used for complex 3D animations (such as cutscenes) imported from external 3D software. Compression is lossy, but the difference is usually not noticeable in real world conditions.  
         *      
         *  **Note:** Compressed tracks have various limitations (such as not being editable from the editor), so only use compressed animations if you actually need them.  
         */
        compress(pageSize: int64 = 8192, fps: int64 = 120, splitTolerance: float64 = 4): void
        
        /** The total length of the animation (in seconds).  
         *      
         *  **Note:** Length is not delimited by the last key, as this one may be before or after the end to ensure correct interpolation and looping.  
         */
        get length(): float64
        set length(value: float64)
        get loopMode(): int64
        set loopMode(value: int64)
        
        /** The animation step value. */
        get step(): float64
        set step(value: float64)
        get captureIncluded(): boolean
        set captureIncluded(value: boolean)
    }
    /** Container for [Animation] resources.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_animationlibrary.html  
     */
    class AnimationLibrary extends Resource {
        constructor(identifier?: any)
        addAnimation(name: StringName, animation: Animation): GError
        removeAnimation(name: StringName): void
        renameAnimation(name: StringName, newname: StringName): void
        hasAnimation(name: StringName): boolean
        getAnimation(name: StringName): Animation
        getAnimationList(): GArray
        getAnimationListSize(): int64
        get _data(): GDictionary
        set _data(value: GDictionary)
        readonly animationAdded: Signal<(name: StringName) => void>
        readonly animationRemoved: Signal<(name: StringName) => void>
        readonly animationRenamed: Signal<(name: StringName, toName: StringName) => void>
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
    /** Base class for [AnimationPlayer] and [AnimationTree].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_animationmixer.html  
     */
    class AnimationMixer<Map extends Record<string, Node> = {}> extends Node<Map> {
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
        /* gdvirtual */ _postProcessKeyValue(animation: Animation, track: int64, value: any, objectId: int64, objectSubIdx: int64): any
        addAnimationLibrary(name: StringName, library: AnimationLibrary): GError
        removeAnimationLibrary(name: StringName): void
        renameAnimationLibrary(name: StringName, newname: StringName): void
        hasAnimationLibrary(name: StringName): boolean
        getAnimationLibrary(name: StringName): AnimationLibrary
        getAnimationLibraryList(): GArray
        hasAnimation(name: StringName): boolean
        getAnimation(name: StringName): Animation
        getAnimationList(): PackedStringArray
        getRootMotionPosition(): Vector3
        getRootMotionRotation(): Quaternion
        getRootMotionScale(): Vector3
        getRootMotionPositionAccumulator(): Vector3
        getRootMotionRotationAccumulator(): Quaternion
        getRootMotionScaleAccumulator(): Vector3
        clearCaches(): void
        
        /** Manually advance the animations by the specified time (in seconds). */
        advance(delta: float64): void
        
        /** If the animation track specified by [param name] has an option [constant Animation.UPDATE_CAPTURE], stores current values of the objects indicated by the track path as a cache. If there is already a captured cache, the old cache is discarded.  
         *  After this it will interpolate with current animation blending result during the playback process for the time specified by [param duration], working like a crossfade.  
         *  You can specify [param trans_type] as the curve for the interpolation. For better results, it may be appropriate to specify [constant Tween.TRANS_LINEAR] for cases where the first key of the track begins with a non-zero value or where the key value does not change, and [constant Tween.TRANS_QUAD] for cases where the key value changes linearly.  
         */
        capture(name: StringName, duration: float64, transType: Tween.TransitionType = 0, easeType: Tween.EaseType = 0): void
        _reset(): void
        _restore(backup: any /*AnimatedValuesBackup*/): void
        findAnimation(animation: Animation): StringName
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
        get resetOnSave(): boolean
        set resetOnSave(value: boolean)
        get rootNode(): NodePath
        set rootNode(value: NodePath | string)
        get rootMotionTrack(): NodePath
        set rootMotionTrack(value: NodePath | string)
        get rootMotionLocal(): boolean
        set rootMotionLocal(value: boolean)
        get audioMaxPolyphony(): int64
        set audioMaxPolyphony(value: int64)
        get callbackModeProcess(): int64
        set callbackModeProcess(value: int64)
        get callbackModeMethod(): int64
        set callbackModeMethod(value: int64)
        get callbackModeDiscrete(): int64
        set callbackModeDiscrete(value: int64)
        readonly animationListChanged: Signal<() => void>
        readonly animationLibrariesUpdated: Signal<() => void>
        readonly animationFinished: Signal<(animName: StringName) => void>
        readonly animationStarted: Signal<(animName: StringName) => void>
        readonly cachesCleared: Signal<() => void>
        readonly mixerApplied: Signal<() => void>
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
        /* gdvirtual */ _getChildNodes(): GDictionary
        /* gdvirtual */ _getParameterList(): GArray
        /* gdvirtual */ _getChildByName(name: StringName): AnimationNode
        /* gdvirtual */ _getParameterDefaultValue(parameter: StringName): any
        /* gdvirtual */ _isParameterReadOnly(parameter: StringName): boolean
        
        /** When inheriting from [AnimationRootNode], implement this virtual method to run some code when this animation node is processed. The [param time] parameter is a relative delta, unless [param seek] is `true`, in which case it is absolute.  
         *  Here, call the [method blend_input], [method blend_node] or [method blend_animation] functions. You can also use [method get_parameter] and [method set_parameter] to modify local memory.  
         *  This function should return the delta.  
         */
        /* gdvirtual */ _process(time: float64, seek: boolean, isExternalSeeking: boolean, testOnly: boolean): float64
        /* gdvirtual */ _getCaption(): string
        /* gdvirtual */ _hasFilter(): boolean
        addInput(name: string): boolean
        removeInput(index: int64): void
        setInputName(input: int64, name: string): boolean
        getInputName(input: int64): string
        getInputCount(): int64
        findInput(name: string): int64
        setFilterPath(path: NodePath | string, enable: boolean): void
        isPathFiltered(path: NodePath | string): boolean
        getProcessingAnimationTreeInstanceId(): int64
        isProcessTesting(): boolean
        blendAnimation(animation: StringName, time: float64, delta: float64, seeked: boolean, isExternalSeeking: boolean, blend: float64, loopedFlag: Animation.LoopedFlag = 0): void
        blendNode(name: StringName, node: AnimationNode, time: float64, seek: boolean, isExternalSeeking: boolean, blend: float64, filter: AnimationNode.FilterAction = 0, sync: boolean = true, testOnly: boolean = false): float64
        blendInput(inputIndex: int64, time: float64, seek: boolean, isExternalSeeking: boolean, blend: float64, filter: AnimationNode.FilterAction = 0, sync: boolean = true, testOnly: boolean = false): float64
        setParameter(name: StringName, value: any): void
        getParameter(name: StringName): any
        get filterEnabled(): boolean
        set filterEnabled(value: boolean)
        get filters(): GArray
        set filters(value: GArray)
        readonly treeChanged: Signal<() => void>
        readonly animationNodeRenamed: Signal<(objectId: int64, oldName: string, newName: string) => void>
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
        get playMode(): int64
        set playMode(value: int64)
        get advanceOnStart(): boolean
        set advanceOnStart(value: boolean)
        get useCustomTimeline(): boolean
        set useCustomTimeline(value: boolean)
        get timelineLength(): float64
        set timelineLength(value: float64)
        get stretchTimeScale(): boolean
        set stretchTimeScale(value: boolean)
        get startOffset(): float64
        set startOffset(value: float64)
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
        addBlendPoint(node: AnimationRootNode, pos: float64, atIndex: int64 = -1): void
        setBlendPointPosition(point: int64, pos: float64): void
        getBlendPointPosition(point: int64): float64
        setBlendPointNode(point: int64, node: AnimationRootNode): void
        getBlendPointNode(point: int64): AnimationRootNode
        removeBlendPoint(point: int64): void
        getBlendPointCount(): int64
        _addBlendPoint(index: int64, node: AnimationRootNode): void
        get "blendPoint0/node"(): AnimationRootNode
        set "blendPoint0/node"(value: AnimationRootNode)
        get "blendPoint0/pos"(): float64
        set "blendPoint0/pos"(value: float64)
        get "blendPoint1/node"(): AnimationRootNode
        set "blendPoint1/node"(value: AnimationRootNode)
        get "blendPoint1/pos"(): float64
        set "blendPoint1/pos"(value: float64)
        get "blendPoint2/node"(): AnimationRootNode
        set "blendPoint2/node"(value: AnimationRootNode)
        get "blendPoint2/pos"(): float64
        set "blendPoint2/pos"(value: float64)
        get "blendPoint3/node"(): AnimationRootNode
        set "blendPoint3/node"(value: AnimationRootNode)
        get "blendPoint3/pos"(): float64
        set "blendPoint3/pos"(value: float64)
        get "blendPoint4/node"(): AnimationRootNode
        set "blendPoint4/node"(value: AnimationRootNode)
        get "blendPoint4/pos"(): float64
        set "blendPoint4/pos"(value: float64)
        get "blendPoint5/node"(): AnimationRootNode
        set "blendPoint5/node"(value: AnimationRootNode)
        get "blendPoint5/pos"(): float64
        set "blendPoint5/pos"(value: float64)
        get "blendPoint6/node"(): AnimationRootNode
        set "blendPoint6/node"(value: AnimationRootNode)
        get "blendPoint6/pos"(): float64
        set "blendPoint6/pos"(value: float64)
        get "blendPoint7/node"(): AnimationRootNode
        set "blendPoint7/node"(value: AnimationRootNode)
        get "blendPoint7/pos"(): float64
        set "blendPoint7/pos"(value: float64)
        get "blendPoint8/node"(): AnimationRootNode
        set "blendPoint8/node"(value: AnimationRootNode)
        get "blendPoint8/pos"(): float64
        set "blendPoint8/pos"(value: float64)
        get "blendPoint9/node"(): AnimationRootNode
        set "blendPoint9/node"(value: AnimationRootNode)
        get "blendPoint9/pos"(): float64
        set "blendPoint9/pos"(value: float64)
        get "blendPoint10/node"(): AnimationRootNode
        set "blendPoint10/node"(value: AnimationRootNode)
        get "blendPoint10/pos"(): float64
        set "blendPoint10/pos"(value: float64)
        get "blendPoint11/node"(): AnimationRootNode
        set "blendPoint11/node"(value: AnimationRootNode)
        get "blendPoint11/pos"(): float64
        set "blendPoint11/pos"(value: float64)
        get "blendPoint12/node"(): AnimationRootNode
        set "blendPoint12/node"(value: AnimationRootNode)
        get "blendPoint12/pos"(): float64
        set "blendPoint12/pos"(value: float64)
        get "blendPoint13/node"(): AnimationRootNode
        set "blendPoint13/node"(value: AnimationRootNode)
        get "blendPoint13/pos"(): float64
        set "blendPoint13/pos"(value: float64)
        get "blendPoint14/node"(): AnimationRootNode
        set "blendPoint14/node"(value: AnimationRootNode)
        get "blendPoint14/pos"(): float64
        set "blendPoint14/pos"(value: float64)
        get "blendPoint15/node"(): AnimationRootNode
        set "blendPoint15/node"(value: AnimationRootNode)
        get "blendPoint15/pos"(): float64
        set "blendPoint15/pos"(value: float64)
        get "blendPoint16/node"(): AnimationRootNode
        set "blendPoint16/node"(value: AnimationRootNode)
        get "blendPoint16/pos"(): float64
        set "blendPoint16/pos"(value: float64)
        get "blendPoint17/node"(): AnimationRootNode
        set "blendPoint17/node"(value: AnimationRootNode)
        get "blendPoint17/pos"(): float64
        set "blendPoint17/pos"(value: float64)
        get "blendPoint18/node"(): AnimationRootNode
        set "blendPoint18/node"(value: AnimationRootNode)
        get "blendPoint18/pos"(): float64
        set "blendPoint18/pos"(value: float64)
        get "blendPoint19/node"(): AnimationRootNode
        set "blendPoint19/node"(value: AnimationRootNode)
        get "blendPoint19/pos"(): float64
        set "blendPoint19/pos"(value: float64)
        get "blendPoint20/node"(): AnimationRootNode
        set "blendPoint20/node"(value: AnimationRootNode)
        get "blendPoint20/pos"(): float64
        set "blendPoint20/pos"(value: float64)
        get "blendPoint21/node"(): AnimationRootNode
        set "blendPoint21/node"(value: AnimationRootNode)
        get "blendPoint21/pos"(): float64
        set "blendPoint21/pos"(value: float64)
        get "blendPoint22/node"(): AnimationRootNode
        set "blendPoint22/node"(value: AnimationRootNode)
        get "blendPoint22/pos"(): float64
        set "blendPoint22/pos"(value: float64)
        get "blendPoint23/node"(): AnimationRootNode
        set "blendPoint23/node"(value: AnimationRootNode)
        get "blendPoint23/pos"(): float64
        set "blendPoint23/pos"(value: float64)
        get "blendPoint24/node"(): AnimationRootNode
        set "blendPoint24/node"(value: AnimationRootNode)
        get "blendPoint24/pos"(): float64
        set "blendPoint24/pos"(value: float64)
        get "blendPoint25/node"(): AnimationRootNode
        set "blendPoint25/node"(value: AnimationRootNode)
        get "blendPoint25/pos"(): float64
        set "blendPoint25/pos"(value: float64)
        get "blendPoint26/node"(): AnimationRootNode
        set "blendPoint26/node"(value: AnimationRootNode)
        get "blendPoint26/pos"(): float64
        set "blendPoint26/pos"(value: float64)
        get "blendPoint27/node"(): AnimationRootNode
        set "blendPoint27/node"(value: AnimationRootNode)
        get "blendPoint27/pos"(): float64
        set "blendPoint27/pos"(value: float64)
        get "blendPoint28/node"(): AnimationRootNode
        set "blendPoint28/node"(value: AnimationRootNode)
        get "blendPoint28/pos"(): float64
        set "blendPoint28/pos"(value: float64)
        get "blendPoint29/node"(): AnimationRootNode
        set "blendPoint29/node"(value: AnimationRootNode)
        get "blendPoint29/pos"(): float64
        set "blendPoint29/pos"(value: float64)
        get "blendPoint30/node"(): AnimationRootNode
        set "blendPoint30/node"(value: AnimationRootNode)
        get "blendPoint30/pos"(): float64
        set "blendPoint30/pos"(value: float64)
        get "blendPoint31/node"(): AnimationRootNode
        set "blendPoint31/node"(value: AnimationRootNode)
        get "blendPoint31/pos"(): float64
        set "blendPoint31/pos"(value: float64)
        get "blendPoint32/node"(): AnimationRootNode
        set "blendPoint32/node"(value: AnimationRootNode)
        get "blendPoint32/pos"(): float64
        set "blendPoint32/pos"(value: float64)
        get "blendPoint33/node"(): AnimationRootNode
        set "blendPoint33/node"(value: AnimationRootNode)
        get "blendPoint33/pos"(): float64
        set "blendPoint33/pos"(value: float64)
        get "blendPoint34/node"(): AnimationRootNode
        set "blendPoint34/node"(value: AnimationRootNode)
        get "blendPoint34/pos"(): float64
        set "blendPoint34/pos"(value: float64)
        get "blendPoint35/node"(): AnimationRootNode
        set "blendPoint35/node"(value: AnimationRootNode)
        get "blendPoint35/pos"(): float64
        set "blendPoint35/pos"(value: float64)
        get "blendPoint36/node"(): AnimationRootNode
        set "blendPoint36/node"(value: AnimationRootNode)
        get "blendPoint36/pos"(): float64
        set "blendPoint36/pos"(value: float64)
        get "blendPoint37/node"(): AnimationRootNode
        set "blendPoint37/node"(value: AnimationRootNode)
        get "blendPoint37/pos"(): float64
        set "blendPoint37/pos"(value: float64)
        get "blendPoint38/node"(): AnimationRootNode
        set "blendPoint38/node"(value: AnimationRootNode)
        get "blendPoint38/pos"(): float64
        set "blendPoint38/pos"(value: float64)
        get "blendPoint39/node"(): AnimationRootNode
        set "blendPoint39/node"(value: AnimationRootNode)
        get "blendPoint39/pos"(): float64
        set "blendPoint39/pos"(value: float64)
        get "blendPoint40/node"(): AnimationRootNode
        set "blendPoint40/node"(value: AnimationRootNode)
        get "blendPoint40/pos"(): float64
        set "blendPoint40/pos"(value: float64)
        get "blendPoint41/node"(): AnimationRootNode
        set "blendPoint41/node"(value: AnimationRootNode)
        get "blendPoint41/pos"(): float64
        set "blendPoint41/pos"(value: float64)
        get "blendPoint42/node"(): AnimationRootNode
        set "blendPoint42/node"(value: AnimationRootNode)
        get "blendPoint42/pos"(): float64
        set "blendPoint42/pos"(value: float64)
        get "blendPoint43/node"(): AnimationRootNode
        set "blendPoint43/node"(value: AnimationRootNode)
        get "blendPoint43/pos"(): float64
        set "blendPoint43/pos"(value: float64)
        get "blendPoint44/node"(): AnimationRootNode
        set "blendPoint44/node"(value: AnimationRootNode)
        get "blendPoint44/pos"(): float64
        set "blendPoint44/pos"(value: float64)
        get "blendPoint45/node"(): AnimationRootNode
        set "blendPoint45/node"(value: AnimationRootNode)
        get "blendPoint45/pos"(): float64
        set "blendPoint45/pos"(value: float64)
        get "blendPoint46/node"(): AnimationRootNode
        set "blendPoint46/node"(value: AnimationRootNode)
        get "blendPoint46/pos"(): float64
        set "blendPoint46/pos"(value: float64)
        get "blendPoint47/node"(): AnimationRootNode
        set "blendPoint47/node"(value: AnimationRootNode)
        get "blendPoint47/pos"(): float64
        set "blendPoint47/pos"(value: float64)
        get "blendPoint48/node"(): AnimationRootNode
        set "blendPoint48/node"(value: AnimationRootNode)
        get "blendPoint48/pos"(): float64
        set "blendPoint48/pos"(value: float64)
        get "blendPoint49/node"(): AnimationRootNode
        set "blendPoint49/node"(value: AnimationRootNode)
        get "blendPoint49/pos"(): float64
        set "blendPoint49/pos"(value: float64)
        get "blendPoint50/node"(): AnimationRootNode
        set "blendPoint50/node"(value: AnimationRootNode)
        get "blendPoint50/pos"(): float64
        set "blendPoint50/pos"(value: float64)
        get "blendPoint51/node"(): AnimationRootNode
        set "blendPoint51/node"(value: AnimationRootNode)
        get "blendPoint51/pos"(): float64
        set "blendPoint51/pos"(value: float64)
        get "blendPoint52/node"(): AnimationRootNode
        set "blendPoint52/node"(value: AnimationRootNode)
        get "blendPoint52/pos"(): float64
        set "blendPoint52/pos"(value: float64)
        get "blendPoint53/node"(): AnimationRootNode
        set "blendPoint53/node"(value: AnimationRootNode)
        get "blendPoint53/pos"(): float64
        set "blendPoint53/pos"(value: float64)
        get "blendPoint54/node"(): AnimationRootNode
        set "blendPoint54/node"(value: AnimationRootNode)
        get "blendPoint54/pos"(): float64
        set "blendPoint54/pos"(value: float64)
        get "blendPoint55/node"(): AnimationRootNode
        set "blendPoint55/node"(value: AnimationRootNode)
        get "blendPoint55/pos"(): float64
        set "blendPoint55/pos"(value: float64)
        get "blendPoint56/node"(): AnimationRootNode
        set "blendPoint56/node"(value: AnimationRootNode)
        get "blendPoint56/pos"(): float64
        set "blendPoint56/pos"(value: float64)
        get "blendPoint57/node"(): AnimationRootNode
        set "blendPoint57/node"(value: AnimationRootNode)
        get "blendPoint57/pos"(): float64
        set "blendPoint57/pos"(value: float64)
        get "blendPoint58/node"(): AnimationRootNode
        set "blendPoint58/node"(value: AnimationRootNode)
        get "blendPoint58/pos"(): float64
        set "blendPoint58/pos"(value: float64)
        get "blendPoint59/node"(): AnimationRootNode
        set "blendPoint59/node"(value: AnimationRootNode)
        get "blendPoint59/pos"(): float64
        set "blendPoint59/pos"(value: float64)
        get "blendPoint60/node"(): AnimationRootNode
        set "blendPoint60/node"(value: AnimationRootNode)
        get "blendPoint60/pos"(): float64
        set "blendPoint60/pos"(value: float64)
        get "blendPoint61/node"(): AnimationRootNode
        set "blendPoint61/node"(value: AnimationRootNode)
        get "blendPoint61/pos"(): float64
        set "blendPoint61/pos"(value: float64)
        get "blendPoint62/node"(): AnimationRootNode
        set "blendPoint62/node"(value: AnimationRootNode)
        get "blendPoint62/pos"(): float64
        set "blendPoint62/pos"(value: float64)
        get "blendPoint63/node"(): AnimationRootNode
        set "blendPoint63/node"(value: AnimationRootNode)
        get "blendPoint63/pos"(): float64
        set "blendPoint63/pos"(value: float64)
        get minSpace(): float64
        set minSpace(value: float64)
        get maxSpace(): float64
        set maxSpace(value: float64)
        
        /** Position increment to snap to when moving a point on the axis. */
        get snap(): float64
        set snap(value: float64)
        get valueLabel(): string
        set valueLabel(value: string)
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
        addBlendPoint(node: AnimationRootNode, pos: Vector2, atIndex: int64 = -1): void
        setBlendPointPosition(point: int64, pos: Vector2): void
        getBlendPointPosition(point: int64): Vector2
        setBlendPointNode(point: int64, node: AnimationRootNode): void
        getBlendPointNode(point: int64): AnimationRootNode
        removeBlendPoint(point: int64): void
        getBlendPointCount(): int64
        addTriangle(x: int64, y: int64, z: int64, atIndex: int64 = -1): void
        getTrianglePoint(triangle: int64, point: int64): int64
        removeTriangle(triangle: int64): void
        getTriangleCount(): int64
        _addBlendPoint(index: int64, node: AnimationRootNode): void
        get autoTriangles(): boolean
        set autoTriangles(value: boolean)
        get "blendPoint0/node"(): AnimationRootNode
        set "blendPoint0/node"(value: AnimationRootNode)
        get "blendPoint0/pos"(): Vector2
        set "blendPoint0/pos"(value: Vector2)
        get "blendPoint1/node"(): AnimationRootNode
        set "blendPoint1/node"(value: AnimationRootNode)
        get "blendPoint1/pos"(): Vector2
        set "blendPoint1/pos"(value: Vector2)
        get "blendPoint2/node"(): AnimationRootNode
        set "blendPoint2/node"(value: AnimationRootNode)
        get "blendPoint2/pos"(): Vector2
        set "blendPoint2/pos"(value: Vector2)
        get "blendPoint3/node"(): AnimationRootNode
        set "blendPoint3/node"(value: AnimationRootNode)
        get "blendPoint3/pos"(): Vector2
        set "blendPoint3/pos"(value: Vector2)
        get "blendPoint4/node"(): AnimationRootNode
        set "blendPoint4/node"(value: AnimationRootNode)
        get "blendPoint4/pos"(): Vector2
        set "blendPoint4/pos"(value: Vector2)
        get "blendPoint5/node"(): AnimationRootNode
        set "blendPoint5/node"(value: AnimationRootNode)
        get "blendPoint5/pos"(): Vector2
        set "blendPoint5/pos"(value: Vector2)
        get "blendPoint6/node"(): AnimationRootNode
        set "blendPoint6/node"(value: AnimationRootNode)
        get "blendPoint6/pos"(): Vector2
        set "blendPoint6/pos"(value: Vector2)
        get "blendPoint7/node"(): AnimationRootNode
        set "blendPoint7/node"(value: AnimationRootNode)
        get "blendPoint7/pos"(): Vector2
        set "blendPoint7/pos"(value: Vector2)
        get "blendPoint8/node"(): AnimationRootNode
        set "blendPoint8/node"(value: AnimationRootNode)
        get "blendPoint8/pos"(): Vector2
        set "blendPoint8/pos"(value: Vector2)
        get "blendPoint9/node"(): AnimationRootNode
        set "blendPoint9/node"(value: AnimationRootNode)
        get "blendPoint9/pos"(): Vector2
        set "blendPoint9/pos"(value: Vector2)
        get "blendPoint10/node"(): AnimationRootNode
        set "blendPoint10/node"(value: AnimationRootNode)
        get "blendPoint10/pos"(): Vector2
        set "blendPoint10/pos"(value: Vector2)
        get "blendPoint11/node"(): AnimationRootNode
        set "blendPoint11/node"(value: AnimationRootNode)
        get "blendPoint11/pos"(): Vector2
        set "blendPoint11/pos"(value: Vector2)
        get "blendPoint12/node"(): AnimationRootNode
        set "blendPoint12/node"(value: AnimationRootNode)
        get "blendPoint12/pos"(): Vector2
        set "blendPoint12/pos"(value: Vector2)
        get "blendPoint13/node"(): AnimationRootNode
        set "blendPoint13/node"(value: AnimationRootNode)
        get "blendPoint13/pos"(): Vector2
        set "blendPoint13/pos"(value: Vector2)
        get "blendPoint14/node"(): AnimationRootNode
        set "blendPoint14/node"(value: AnimationRootNode)
        get "blendPoint14/pos"(): Vector2
        set "blendPoint14/pos"(value: Vector2)
        get "blendPoint15/node"(): AnimationRootNode
        set "blendPoint15/node"(value: AnimationRootNode)
        get "blendPoint15/pos"(): Vector2
        set "blendPoint15/pos"(value: Vector2)
        get "blendPoint16/node"(): AnimationRootNode
        set "blendPoint16/node"(value: AnimationRootNode)
        get "blendPoint16/pos"(): Vector2
        set "blendPoint16/pos"(value: Vector2)
        get "blendPoint17/node"(): AnimationRootNode
        set "blendPoint17/node"(value: AnimationRootNode)
        get "blendPoint17/pos"(): Vector2
        set "blendPoint17/pos"(value: Vector2)
        get "blendPoint18/node"(): AnimationRootNode
        set "blendPoint18/node"(value: AnimationRootNode)
        get "blendPoint18/pos"(): Vector2
        set "blendPoint18/pos"(value: Vector2)
        get "blendPoint19/node"(): AnimationRootNode
        set "blendPoint19/node"(value: AnimationRootNode)
        get "blendPoint19/pos"(): Vector2
        set "blendPoint19/pos"(value: Vector2)
        get "blendPoint20/node"(): AnimationRootNode
        set "blendPoint20/node"(value: AnimationRootNode)
        get "blendPoint20/pos"(): Vector2
        set "blendPoint20/pos"(value: Vector2)
        get "blendPoint21/node"(): AnimationRootNode
        set "blendPoint21/node"(value: AnimationRootNode)
        get "blendPoint21/pos"(): Vector2
        set "blendPoint21/pos"(value: Vector2)
        get "blendPoint22/node"(): AnimationRootNode
        set "blendPoint22/node"(value: AnimationRootNode)
        get "blendPoint22/pos"(): Vector2
        set "blendPoint22/pos"(value: Vector2)
        get "blendPoint23/node"(): AnimationRootNode
        set "blendPoint23/node"(value: AnimationRootNode)
        get "blendPoint23/pos"(): Vector2
        set "blendPoint23/pos"(value: Vector2)
        get "blendPoint24/node"(): AnimationRootNode
        set "blendPoint24/node"(value: AnimationRootNode)
        get "blendPoint24/pos"(): Vector2
        set "blendPoint24/pos"(value: Vector2)
        get "blendPoint25/node"(): AnimationRootNode
        set "blendPoint25/node"(value: AnimationRootNode)
        get "blendPoint25/pos"(): Vector2
        set "blendPoint25/pos"(value: Vector2)
        get "blendPoint26/node"(): AnimationRootNode
        set "blendPoint26/node"(value: AnimationRootNode)
        get "blendPoint26/pos"(): Vector2
        set "blendPoint26/pos"(value: Vector2)
        get "blendPoint27/node"(): AnimationRootNode
        set "blendPoint27/node"(value: AnimationRootNode)
        get "blendPoint27/pos"(): Vector2
        set "blendPoint27/pos"(value: Vector2)
        get "blendPoint28/node"(): AnimationRootNode
        set "blendPoint28/node"(value: AnimationRootNode)
        get "blendPoint28/pos"(): Vector2
        set "blendPoint28/pos"(value: Vector2)
        get "blendPoint29/node"(): AnimationRootNode
        set "blendPoint29/node"(value: AnimationRootNode)
        get "blendPoint29/pos"(): Vector2
        set "blendPoint29/pos"(value: Vector2)
        get "blendPoint30/node"(): AnimationRootNode
        set "blendPoint30/node"(value: AnimationRootNode)
        get "blendPoint30/pos"(): Vector2
        set "blendPoint30/pos"(value: Vector2)
        get "blendPoint31/node"(): AnimationRootNode
        set "blendPoint31/node"(value: AnimationRootNode)
        get "blendPoint31/pos"(): Vector2
        set "blendPoint31/pos"(value: Vector2)
        get "blendPoint32/node"(): AnimationRootNode
        set "blendPoint32/node"(value: AnimationRootNode)
        get "blendPoint32/pos"(): Vector2
        set "blendPoint32/pos"(value: Vector2)
        get "blendPoint33/node"(): AnimationRootNode
        set "blendPoint33/node"(value: AnimationRootNode)
        get "blendPoint33/pos"(): Vector2
        set "blendPoint33/pos"(value: Vector2)
        get "blendPoint34/node"(): AnimationRootNode
        set "blendPoint34/node"(value: AnimationRootNode)
        get "blendPoint34/pos"(): Vector2
        set "blendPoint34/pos"(value: Vector2)
        get "blendPoint35/node"(): AnimationRootNode
        set "blendPoint35/node"(value: AnimationRootNode)
        get "blendPoint35/pos"(): Vector2
        set "blendPoint35/pos"(value: Vector2)
        get "blendPoint36/node"(): AnimationRootNode
        set "blendPoint36/node"(value: AnimationRootNode)
        get "blendPoint36/pos"(): Vector2
        set "blendPoint36/pos"(value: Vector2)
        get "blendPoint37/node"(): AnimationRootNode
        set "blendPoint37/node"(value: AnimationRootNode)
        get "blendPoint37/pos"(): Vector2
        set "blendPoint37/pos"(value: Vector2)
        get "blendPoint38/node"(): AnimationRootNode
        set "blendPoint38/node"(value: AnimationRootNode)
        get "blendPoint38/pos"(): Vector2
        set "blendPoint38/pos"(value: Vector2)
        get "blendPoint39/node"(): AnimationRootNode
        set "blendPoint39/node"(value: AnimationRootNode)
        get "blendPoint39/pos"(): Vector2
        set "blendPoint39/pos"(value: Vector2)
        get "blendPoint40/node"(): AnimationRootNode
        set "blendPoint40/node"(value: AnimationRootNode)
        get "blendPoint40/pos"(): Vector2
        set "blendPoint40/pos"(value: Vector2)
        get "blendPoint41/node"(): AnimationRootNode
        set "blendPoint41/node"(value: AnimationRootNode)
        get "blendPoint41/pos"(): Vector2
        set "blendPoint41/pos"(value: Vector2)
        get "blendPoint42/node"(): AnimationRootNode
        set "blendPoint42/node"(value: AnimationRootNode)
        get "blendPoint42/pos"(): Vector2
        set "blendPoint42/pos"(value: Vector2)
        get "blendPoint43/node"(): AnimationRootNode
        set "blendPoint43/node"(value: AnimationRootNode)
        get "blendPoint43/pos"(): Vector2
        set "blendPoint43/pos"(value: Vector2)
        get "blendPoint44/node"(): AnimationRootNode
        set "blendPoint44/node"(value: AnimationRootNode)
        get "blendPoint44/pos"(): Vector2
        set "blendPoint44/pos"(value: Vector2)
        get "blendPoint45/node"(): AnimationRootNode
        set "blendPoint45/node"(value: AnimationRootNode)
        get "blendPoint45/pos"(): Vector2
        set "blendPoint45/pos"(value: Vector2)
        get "blendPoint46/node"(): AnimationRootNode
        set "blendPoint46/node"(value: AnimationRootNode)
        get "blendPoint46/pos"(): Vector2
        set "blendPoint46/pos"(value: Vector2)
        get "blendPoint47/node"(): AnimationRootNode
        set "blendPoint47/node"(value: AnimationRootNode)
        get "blendPoint47/pos"(): Vector2
        set "blendPoint47/pos"(value: Vector2)
        get "blendPoint48/node"(): AnimationRootNode
        set "blendPoint48/node"(value: AnimationRootNode)
        get "blendPoint48/pos"(): Vector2
        set "blendPoint48/pos"(value: Vector2)
        get "blendPoint49/node"(): AnimationRootNode
        set "blendPoint49/node"(value: AnimationRootNode)
        get "blendPoint49/pos"(): Vector2
        set "blendPoint49/pos"(value: Vector2)
        get "blendPoint50/node"(): AnimationRootNode
        set "blendPoint50/node"(value: AnimationRootNode)
        get "blendPoint50/pos"(): Vector2
        set "blendPoint50/pos"(value: Vector2)
        get "blendPoint51/node"(): AnimationRootNode
        set "blendPoint51/node"(value: AnimationRootNode)
        get "blendPoint51/pos"(): Vector2
        set "blendPoint51/pos"(value: Vector2)
        get "blendPoint52/node"(): AnimationRootNode
        set "blendPoint52/node"(value: AnimationRootNode)
        get "blendPoint52/pos"(): Vector2
        set "blendPoint52/pos"(value: Vector2)
        get "blendPoint53/node"(): AnimationRootNode
        set "blendPoint53/node"(value: AnimationRootNode)
        get "blendPoint53/pos"(): Vector2
        set "blendPoint53/pos"(value: Vector2)
        get "blendPoint54/node"(): AnimationRootNode
        set "blendPoint54/node"(value: AnimationRootNode)
        get "blendPoint54/pos"(): Vector2
        set "blendPoint54/pos"(value: Vector2)
        get "blendPoint55/node"(): AnimationRootNode
        set "blendPoint55/node"(value: AnimationRootNode)
        get "blendPoint55/pos"(): Vector2
        set "blendPoint55/pos"(value: Vector2)
        get "blendPoint56/node"(): AnimationRootNode
        set "blendPoint56/node"(value: AnimationRootNode)
        get "blendPoint56/pos"(): Vector2
        set "blendPoint56/pos"(value: Vector2)
        get "blendPoint57/node"(): AnimationRootNode
        set "blendPoint57/node"(value: AnimationRootNode)
        get "blendPoint57/pos"(): Vector2
        set "blendPoint57/pos"(value: Vector2)
        get "blendPoint58/node"(): AnimationRootNode
        set "blendPoint58/node"(value: AnimationRootNode)
        get "blendPoint58/pos"(): Vector2
        set "blendPoint58/pos"(value: Vector2)
        get "blendPoint59/node"(): AnimationRootNode
        set "blendPoint59/node"(value: AnimationRootNode)
        get "blendPoint59/pos"(): Vector2
        set "blendPoint59/pos"(value: Vector2)
        get "blendPoint60/node"(): AnimationRootNode
        set "blendPoint60/node"(value: AnimationRootNode)
        get "blendPoint60/pos"(): Vector2
        set "blendPoint60/pos"(value: Vector2)
        get "blendPoint61/node"(): AnimationRootNode
        set "blendPoint61/node"(value: AnimationRootNode)
        get "blendPoint61/pos"(): Vector2
        set "blendPoint61/pos"(value: Vector2)
        get "blendPoint62/node"(): AnimationRootNode
        set "blendPoint62/node"(value: AnimationRootNode)
        get "blendPoint62/pos"(): Vector2
        set "blendPoint62/pos"(value: Vector2)
        get "blendPoint63/node"(): AnimationRootNode
        set "blendPoint63/node"(value: AnimationRootNode)
        get "blendPoint63/pos"(): Vector2
        set "blendPoint63/pos"(value: Vector2)
        get triangles(): PackedInt32Array
        set triangles(value: PackedInt32Array | int32[])
        get minSpace(): Vector2
        set minSpace(value: Vector2)
        get maxSpace(): Vector2
        set maxSpace(value: Vector2)
        
        /** Position increment to snap to when moving a point. */
        get snap(): Vector2
        set snap(value: Vector2)
        get xLabel(): string
        set xLabel(value: string)
        get yLabel(): string
        set yLabel(value: string)
        get blendMode(): int64
        set blendMode(value: int64)
        
        /** If `false`, the blended animations' frame are stopped when the blend value is `0`.  
         *  If `true`, forcing the blended animations to advance frame.  
         */
        get sync(): boolean
        set sync(value: boolean)
        readonly trianglesUpdated: Signal<() => void>
    }
}
