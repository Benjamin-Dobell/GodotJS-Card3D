// AUTO-GENERATED
declare module "godot" {
    /** Exporter for Android.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorexportplatformandroid.html  
     */
    class EditorExportPlatformAndroid extends EditorExportPlatform {
        constructor(identifier?: any)
    }
    /** Base class for the Apple embedded platform exporters (iOS and visionOS).  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorexportplatformappleembedded.html  
     */
    class EditorExportPlatformAppleEmbedded extends EditorExportPlatform {
        constructor(identifier?: any)
    }
    /** Base class for custom [EditorExportPlatform] implementations (plugins).  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorexportplatformextension.html  
     */
    class EditorExportPlatformExtension extends EditorExportPlatform {
        constructor(identifier?: any)
        /** **Required.**  
         *  Returns array of platform specific features for the specified [param preset].  
         */
        /* gdvirtual */ _getPresetFeatures(preset: EditorExportPreset): PackedStringArray
        
        /** **Optional.**  
         *  Returns `true` if specified file is a valid executable (native executable or script) for the target platform.  
         */
        /* gdvirtual */ _isExecutable(path: string): boolean
        
        /** **Optional.**  
         *  Returns a property list, as an [Array] of dictionaries. Each [Dictionary] must at least contain the `name: StringName` and `type: Variant.Type` entries.  
         *  Additionally, the following keys are supported:  
         *  - `hint: PropertyHint`  
         *  - `hint_string: String`  
         *  - `usage: PropertyUsageFlags`  
         *  - `class_name: StringName`  
         *  - `default_value: Variant`, default value of the property.  
         *  - `update_visibility: bool`, if set to `true`, [method _get_export_option_visibility] is called for each property when this property is changed.  
         *  - `required: bool`, if set to `true`, this property warnings are critical, and should be resolved to make export possible. This value is a hint for the [method _has_valid_export_configuration] implementation, and not used by the engine directly.  
         *  See also [method Object._get_property_list].  
         */
        /* gdvirtual */ _getExportOptions(): GArray
        
        /** **Optional.**  
         *  Returns `true` if export options list is changed and presets should be updated.  
         */
        /* gdvirtual */ _shouldUpdateExportOptions(): boolean
        
        /** **Optional.**  
         *  Validates [param option] and returns visibility for the specified [param preset]. Default implementation return `true` for all options.  
         */
        /* gdvirtual */ _getExportOptionVisibility(preset: EditorExportPreset, option: string): boolean
        
        /** **Optional.**  
         *  Validates [param option] and returns warning message for the specified [param preset]. Default implementation return empty string for all options.  
         */
        /* gdvirtual */ _getExportOptionWarning(preset: EditorExportPreset, option: StringName): string
        
        /** **Required.**  
         *  Returns target OS name.  
         */
        /* gdvirtual */ _getOsName(): string
        
        /** **Required.**  
         *  Returns export platform name.  
         */
        /* gdvirtual */ _getName(): string
        
        /** **Required.**  
         *  Returns platform logo displayed in the export dialog, logo should be 32x32 adjusted to the current editor scale, see [method EditorInterface.get_editor_scale].  
         */
        /* gdvirtual */ _getLogo(): null | Texture2D
        
        /** **Optional.**  
         *  Returns `true` if one-click deploy options are changed and editor interface should be updated.  
         */
        /* gdvirtual */ _pollExport(): boolean
        
        /** **Optional.**  
         *  Returns number one-click deploy devices (or other one-click option displayed in the menu).  
         */
        /* gdvirtual */ _getOptionsCount(): int64
        
        /** **Optional.**  
         *  Returns tooltip of the one-click deploy menu button.  
         */
        /* gdvirtual */ _getOptionsTooltip(): string
        
        /** **Optional.**  
         *  Returns one-click deploy menu item icon for the specified [param device], icon should be 16x16 adjusted to the current editor scale, see [method EditorInterface.get_editor_scale].  
         */
        /* gdvirtual */ _getOptionIcon(device: int64): null | ImageTexture
        
        /** **Optional.**  
         *  Returns one-click deploy menu item label for the specified [param device].  
         */
        /* gdvirtual */ _getOptionLabel(device: int64): string
        
        /** **Optional.**  
         *  Returns one-click deploy menu item tooltip for the specified [param device].  
         */
        /* gdvirtual */ _getOptionTooltip(device: int64): string
        
        /** **Optional.**  
         *  Returns device architecture for one-click deploy.  
         */
        /* gdvirtual */ _getDeviceArchitecture(device: int64): string
        
        /** **Optional.**  
         *  Called by the editor before platform is unregistered.  
         */
        /* gdvirtual */ _cleanup(): void
        
        /** **Optional.**  
         *  This method is called when [param device] one-click deploy menu option is selected.  
         *  Implementation should export project to a temporary location, upload and run it on the specific [param device], or perform another action associated with the menu item.  
         */
        /* gdvirtual */ _run(preset: EditorExportPreset, device: int64, debugFlags: EditorExportPlatform.DebugFlags): GError
        
        /** **Optional.**  
         *  Returns icon of the one-click deploy menu button, icon should be 16x16 adjusted to the current editor scale, see [method EditorInterface.get_editor_scale].  
         */
        /* gdvirtual */ _getRunIcon(): null | Texture2D
        
        /** **Optional.**  
         *  Returns `true`, if specified [param preset] is valid and can be exported. Use [method set_config_error] and [method set_config_missing_templates] to set error details.  
         *  Usual implementation can call [method _has_valid_export_configuration] and [method _has_valid_project_configuration] to determine if export is possible.  
         */
        /* gdvirtual */ _canExport(preset: EditorExportPreset, debug: boolean): boolean
        
        /** **Required.**  
         *  Returns `true` if export configuration is valid.  
         */
        /* gdvirtual */ _hasValidExportConfiguration(preset: EditorExportPreset, debug: boolean): boolean
        
        /** **Required.**  
         *  Returns `true` if project configuration is valid.  
         */
        /* gdvirtual */ _hasValidProjectConfiguration(preset: EditorExportPreset): boolean
        
        /** **Required.**  
         *  Returns array of supported binary extensions for the full project export.  
         */
        /* gdvirtual */ _getBinaryExtensions(preset: EditorExportPreset): PackedStringArray
        
        /** **Required.**  
         *  Creates a full project at [param path] for the specified [param preset].  
         *  This method is called when "Export" button is pressed in the export dialog.  
         *  This method implementation can call [method EditorExportPlatform.save_pack] or [method EditorExportPlatform.save_zip] to use default PCK/ZIP export process, or calls [method EditorExportPlatform.export_project_files] and implement custom callback for processing each exported file.  
         */
        /* gdvirtual */ _exportProject(preset: EditorExportPreset, debug: boolean, path: string, flags: EditorExportPlatform.DebugFlags): GError
        
        /** **Optional.**  
         *  Creates a PCK archive at [param path] for the specified [param preset].  
         *  This method is called when "Export PCK/ZIP" button is pressed in the export dialog, with "Export as Patch" disabled, and PCK is selected as a file type.  
         */
        /* gdvirtual */ _exportPack(preset: EditorExportPreset, debug: boolean, path: string, flags: EditorExportPlatform.DebugFlags): GError
        
        /** **Optional.**  
         *  Create a ZIP archive at [param path] for the specified [param preset].  
         *  This method is called when "Export PCK/ZIP" button is pressed in the export dialog, with "Export as Patch" disabled, and ZIP is selected as a file type.  
         */
        /* gdvirtual */ _exportZip(preset: EditorExportPreset, debug: boolean, path: string, flags: EditorExportPlatform.DebugFlags): GError
        
        /** **Optional.**  
         *  Creates a patch PCK archive at [param path] for the specified [param preset], containing only the files that have changed since the last patch.  
         *  This method is called when "Export PCK/ZIP" button is pressed in the export dialog, with "Export as Patch" enabled, and PCK is selected as a file type.  
         *      
         *  **Note:** The patches provided in [param patches] have already been loaded when this method is called and are merely provided as context. When empty the patches defined in the export preset have been loaded instead.  
         */
        /* gdvirtual */ _exportPackPatch(preset: EditorExportPreset, debug: boolean, path: string, patches: PackedStringArray | string[], flags: EditorExportPlatform.DebugFlags): GError
        
        /** **Optional.**  
         *  Create a ZIP archive at [param path] for the specified [param preset], containing only the files that have changed since the last patch.  
         *  This method is called when "Export PCK/ZIP" button is pressed in the export dialog, with "Export as Patch" enabled, and ZIP is selected as a file type.  
         *      
         *  **Note:** The patches provided in [param patches] have already been loaded when this method is called and are merely provided as context. When empty the patches defined in the export preset have been loaded instead.  
         */
        /* gdvirtual */ _exportZipPatch(preset: EditorExportPreset, debug: boolean, path: string, patches: PackedStringArray | string[], flags: EditorExportPlatform.DebugFlags): GError
        
        /** **Required.**  
         *  Returns array of platform specific features.  
         */
        /* gdvirtual */ _getPlatformFeatures(): PackedStringArray
        
        /** **Optional.**  
         *  Returns protocol used for remote debugging. Default implementation return `tcp://`.  
         */
        /* gdvirtual */ _getDebugProtocol(): string
        
        /** Sets current configuration error message text. This method should be called only from the [method _can_export], [method _has_valid_export_configuration], or [method _has_valid_project_configuration] implementations. */
        setConfigError(errorText: string): void
        
        /** Returns current configuration error message text. This method should be called only from the [method _can_export], [method _has_valid_export_configuration], or [method _has_valid_project_configuration] implementations. */
        getConfigError(): string
        
        /** Set to `true` is export templates are missing from the current configuration. This method should be called only from the [method _can_export], [method _has_valid_export_configuration], or [method _has_valid_project_configuration] implementations. */
        setConfigMissingTemplates(missingTemplates: boolean): void
        
        /** Returns `true` is export templates are missing from the current configuration. This method should be called only from the [method _can_export], [method _has_valid_export_configuration], or [method _has_valid_project_configuration] implementations. */
        getConfigMissingTemplates(): boolean
    }
    class EditorExportPlatformIos extends EditorExportPlatformAppleEmbedded {
        constructor(identifier?: any)
    }
    class EditorExportPlatformLinuxBsd extends EditorExportPlatformPC {
        constructor(identifier?: any)
    }
    /** Exporter for macOS.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorexportplatformmacos.html  
     */
    class EditorExportPlatformMacOS extends EditorExportPlatform {
        constructor(identifier?: any)
    }
    /** Base class for the desktop platform exporter (Windows and Linux/BSD).  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorexportplatformpc.html  
     */
    class EditorExportPlatformPC extends EditorExportPlatform {
        constructor(identifier?: any)
    }
    /** Exporter for visionOS.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorexportplatformvisionos.html  
     */
    class EditorExportPlatformVisionOS extends EditorExportPlatformAppleEmbedded {
        constructor(identifier?: any)
    }
    /** Exporter for the Web.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorexportplatformweb.html  
     */
    class EditorExportPlatformWeb extends EditorExportPlatform {
        constructor(identifier?: any)
    }
    /** Exporter for Windows.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorexportplatformwindows.html  
     */
    class EditorExportPlatformWindows extends EditorExportPlatformPC {
        constructor(identifier?: any)
    }
    /** A script that is executed when exporting the project.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorexportplugin.html  
     */
    class EditorExportPlugin extends RefCounted {
        constructor(identifier?: any)
        /** Virtual method to be overridden by the user. Called for each exported file before [method _customize_resource] and [method _customize_scene]. The arguments can be used to identify the file. [param path] is the path of the file, [param type] is the [Resource] represented by the file (e.g. [PackedScene]), and [param features] is the list of features for the export.  
         *  Calling [method skip] inside this callback will make the file not included in the export.  
         */
        /* gdvirtual */ _exportFile(path: string, type: string, features: PackedStringArray | string[]): void
        
        /** Virtual method to be overridden by the user. It is called when the export starts and provides all information about the export. [param features] is the list of features for the export, [param is_debug] is `true` for debug builds, [param path] is the target path for the exported project. [param flags] is only used when running a runnable profile, e.g. when using native run on Android. */
        /* gdvirtual */ _exportBegin(features: PackedStringArray | string[], isDebug: boolean, path: string, flags: int64): void
        
        /** Virtual method to be overridden by the user. Called when the export is finished. */
        /* gdvirtual */ _exportEnd(): void
        
        /** Return `true` if this plugin will customize resources based on the platform and features used.  
         *  When enabled, [method _get_customization_configuration_hash] and [method _customize_resource] will be called and must be implemented.  
         */
        /* gdvirtual */ _beginCustomizeResources(platform: EditorExportPlatform, features: PackedStringArray | string[]): boolean
        
        /** Customize a resource. If changes are made to it, return the same or a new resource. Otherwise, return `null`. When a new resource is returned, [param resource] will be replaced by a copy of the new resource.  
         *  The [param path] argument is only used when customizing an actual file, otherwise this means that this resource is part of another one and it will be empty.  
         *  Implementing this method is required if [method _begin_customize_resources] returns `true`.  
         *      
         *  **Note:** When customizing any of the following types and returning another resource, the other resource should not be skipped using [method skip] in [method _export_file]:  
         *  - [AtlasTexture]  
         *  - [CompressedCubemap]  
         *  - [CompressedCubemapArray]  
         *  - [CompressedTexture2D]  
         *  - [CompressedTexture2DArray]  
         *  - [CompressedTexture3D]  
         */
        /* gdvirtual */ _customizeResource(resource: Resource, path: string): null | Resource
        
        /** Return `true` if this plugin will customize scenes based on the platform and features used.  
         *  When enabled, [method _get_customization_configuration_hash] and [method _customize_scene] will be called and must be implemented.  
         *      
         *  **Note:** [method _customize_scene] will only be called for scenes that have been modified since the last export.  
         */
        /* gdvirtual */ _beginCustomizeScenes(platform: EditorExportPlatform, features: PackedStringArray | string[]): boolean
        
        /** Customize a scene. If changes are made to it, return the same or a new scene. Otherwise, return `null`. If a new scene is returned, it is up to you to dispose of the old one.  
         *  Implementing this method is required if [method _begin_customize_scenes] returns `true`.  
         */
        /* gdvirtual */ _customizeScene(scene: Node, path: string): null | Node
        
        /** Return a hash based on the configuration passed (for both scenes and resources). This helps keep separate caches for separate export configurations.  
         *  Implementing this method is required if [method _begin_customize_resources] returns `true`.  
         */
        /* gdvirtual */ _getCustomizationConfigurationHash(): int64
        
        /** This is called when the customization process for scenes ends. */
        /* gdvirtual */ _endCustomizeScenes(): void
        
        /** This is called when the customization process for resources ends. */
        /* gdvirtual */ _endCustomizeResources(): void
        
        /** Return a list of export options that can be configured for this export plugin.  
         *  Each element in the return value is a [Dictionary] with the following keys:  
         *  - `option`: A dictionary with the structure documented by [method Object.get_property_list], but all keys are optional.  
         *  - `default_value`: The default value for this option.  
         *  - `update_visibility`: An optional boolean value. If set to `true`, the preset will emit [signal Object.property_list_changed] when the option is changed.  
         */
        /* gdvirtual */ _getExportOptions(platform: EditorExportPlatform): GArray
        
        /** Return a [Dictionary] of override values for export options, that will be used instead of user-provided values. Overridden options will be hidden from the user interface.  
         *    
         */
        /* gdvirtual */ _getExportOptionsOverrides(platform: EditorExportPlatform): GDictionary
        
        /** Return `true`, if the result of [method _get_export_options] has changed and the export options of preset corresponding to [param platform] should be updated. */
        /* gdvirtual */ _shouldUpdateExportOptions(platform: EditorExportPlatform): boolean
        
        /** **Optional.**  
         *  Validates [param option] and returns the visibility for the specified [param platform]. The default implementation returns `true` for all options.  
         */
        /* gdvirtual */ _getExportOptionVisibility(platform: EditorExportPlatform, option: string): boolean
        
        /** Check the requirements for the given [param option] and return a non-empty warning string if they are not met.  
         *      
         *  **Note:** Use [method get_option] to check the value of the export options.  
         */
        /* gdvirtual */ _getExportOptionWarning(platform: EditorExportPlatform, option: string): string
        
        /** Return a [PackedStringArray] of additional features this preset, for the given [param platform], should have. */
        /* gdvirtual */ _getExportFeatures(platform: EditorExportPlatform, debug: boolean): PackedStringArray
        
        /** Return the name identifier of this plugin (for future identification by the exporter). The plugins are sorted by name before exporting.  
         *  Implementing this method is required.  
         */
        /* gdvirtual */ _getName(): string
        
        /** Return `true` if the plugin supports the given [param platform]. */
        /* gdvirtual */ _supportsPlatform(platform: EditorExportPlatform): boolean
        
        /** Virtual method to be overridden by the user. This is called to retrieve the set of Android dependencies provided by this plugin. Each returned Android dependency should have the format of an Android remote binary dependency: `org.godot.example:my-plugin:0.0.0`  
         *  For more information see [url=https://developer.android.com/build/dependencies?agpversion=4.1#dependency-types]Android documentation on dependencies[/url].  
         *      
         *  **Note:** Only supported on Android and requires [member EditorExportPlatformAndroid.gradle_build/use_gradle_build] to be enabled.  
         */
        /* gdvirtual */ _getAndroidDependencies(platform: EditorExportPlatform, debug: boolean): PackedStringArray
        
        /** Virtual method to be overridden by the user. This is called to retrieve the URLs of Maven repositories for the set of Android dependencies provided by this plugin.  
         *  For more information see [url=https://docs.gradle.org/current/userguide/dependency_management.html#sec:maven_repo]Gradle documentation on dependency management[/url].  
         *      
         *  **Note:** Google's Maven repo and the Maven Central repo are already included by default.  
         *      
         *  **Note:** Only supported on Android and requires [member EditorExportPlatformAndroid.gradle_build/use_gradle_build] to be enabled.  
         */
        /* gdvirtual */ _getAndroidDependenciesMavenRepos(platform: EditorExportPlatform, debug: boolean): PackedStringArray
        
        /** Virtual method to be overridden by the user. This is called to retrieve the local paths of the Android libraries archive (AAR) files provided by this plugin.  
         *      
         *  **Note:** Relative paths **must** be relative to Godot's `res://addons/` directory. For example, an AAR file located under `res://addons/hello_world_plugin/HelloWorld.release.aar` can be returned as an absolute path using `res://addons/hello_world_plugin/HelloWorld.release.aar` or a relative path using `hello_world_plugin/HelloWorld.release.aar`.  
         *      
         *  **Note:** Only supported on Android and requires [member EditorExportPlatformAndroid.gradle_build/use_gradle_build] to be enabled.  
         */
        /* gdvirtual */ _getAndroidLibraries(platform: EditorExportPlatform, debug: boolean): PackedStringArray
        
        /** Virtual method to be overridden by the user. This is used at export time to update the contents of the `activity` element in the generated Android manifest.  
         *      
         *  **Note:** Only supported on Android and requires [member EditorExportPlatformAndroid.gradle_build/use_gradle_build] to be enabled.  
         */
        /* gdvirtual */ _getAndroidManifestActivityElementContents(platform: EditorExportPlatform, debug: boolean): string
        
        /** Virtual method to be overridden by the user. This is used at export time to update the contents of the `application` element in the generated Android manifest.  
         *      
         *  **Note:** Only supported on Android and requires [member EditorExportPlatformAndroid.gradle_build/use_gradle_build] to be enabled.  
         */
        /* gdvirtual */ _getAndroidManifestApplicationElementContents(platform: EditorExportPlatform, debug: boolean): string
        
        /** Virtual method to be overridden by the user. This is used at export time to update the contents of the `manifest` element in the generated Android manifest.  
         *      
         *  **Note:** Only supported on Android and requires [member EditorExportPlatformAndroid.gradle_build/use_gradle_build] to be enabled.  
         */
        /* gdvirtual */ _getAndroidManifestElementContents(platform: EditorExportPlatform, debug: boolean): string
        
        /** Provide access to the Android prebuilt manifest and allows the plugin to modify it if needed.  
         *  Implementers of this virtual method should take the binary manifest data from [param manifest_data], copy it, modify it, and then return it with the modifications.  
         *  If no modifications are needed, then an empty [PackedByteArray] should be returned.  
         */
        /* gdvirtual */ _updateAndroidPrebuiltManifest(platform: EditorExportPlatform, manifestData: PackedByteArray | byte[] | ArrayBuffer): PackedByteArray
        
        /** Adds a shared object or a directory containing only shared objects with the given [param tags] and destination [param path].  
         *      
         *  **Note:** In case of macOS exports, those shared objects will be added to `Frameworks` directory of app bundle.  
         *  In case of a directory code-sign will error if you place non code object in directory.  
         */
        addSharedObject(path: string, tags: PackedStringArray | string[], target: string): void
        
        /** Adds a custom file to be exported. [param path] is the virtual path that can be used to load the file, [param file] is the binary data of the file.  
         *  When called inside [method _export_file] and [param remap] is `true`, the current file will not be exported, but instead remapped to this custom file. [param remap] is ignored when called in other places.  
         *  [param file] will not be imported, so consider using [method _customize_resource] to remap imported resources.  
         */
        addFile(path: string, file: PackedByteArray | byte[] | ArrayBuffer, remap: boolean): void
        
        /** Adds a static library from the given [param path] to the Apple embedded platform project. */
        addAppleEmbeddedPlatformProjectStaticLib(path: string): void
        
        /** Adds a static library (*.a) or a dynamic library (*.dylib, *.framework) to the Linking Phase to the Apple embedded platform's Xcode project. */
        addAppleEmbeddedPlatformFramework(path: string): void
        
        /** Adds a dynamic library (*.dylib, *.framework) to the Linking Phase in the Apple embedded platform's Xcode project and embeds it into the resulting binary.  
         *      
         *  **Note:** For static libraries (*.a), this works in the same way as [method add_apple_embedded_platform_framework].  
         *      
         *  **Note:** This method should not be used for System libraries as they are already present on the device.  
         */
        addAppleEmbeddedPlatformEmbeddedFramework(path: string): void
        
        /** Adds additional fields to the Apple embedded platform's project Info.plist file. */
        addAppleEmbeddedPlatformPlistContent(plistContent: string): void
        
        /** Adds linker flags for the Apple embedded platform export. */
        addAppleEmbeddedPlatformLinkerFlags(flags: string): void
        
        /** Adds an Apple embedded platform bundle file from the given [param path] to the exported project. */
        addAppleEmbeddedPlatformBundleFile(path: string): void
        
        /** Adds C++ code to the Apple embedded platform export. The final code is created from the code appended by each active export plugin. */
        addAppleEmbeddedPlatformCppCode(code: string): void
        
        /** Adds a static library from the given [param path] to the iOS project. */
        addIosProjectStaticLib(path: string): void
        
        /** Adds a static library (*.a) or a dynamic library (*.dylib, *.framework) to the Linking Phase to the iOS Xcode project. */
        addIosFramework(path: string): void
        
        /** Adds a dynamic library (*.dylib, *.framework) to Linking Phase in iOS's Xcode project and embeds it into resulting binary.  
         *      
         *  **Note:** For static libraries (*.a), this works the in same way as [method add_apple_embedded_platform_framework].  
         *      
         *  **Note:** This method should not be used for System libraries as they are already present on the device.  
         */
        addIosEmbeddedFramework(path: string): void
        
        /** Adds additional fields to the iOS project Info.plist file. */
        addIosPlistContent(plistContent: string): void
        
        /** Adds linker flags for the iOS export. */
        addIosLinkerFlags(flags: string): void
        
        /** Adds an iOS bundle file from the given [param path] to the exported project. */
        addIosBundleFile(path: string): void
        
        /** Adds C++ code to the iOS export. The final code is created from the code appended by each active export plugin. */
        addIosCppCode(code: string): void
        
        /** Adds file or directory matching [param path] to `PlugIns` directory of macOS app bundle.  
         *      
         *  **Note:** This is useful only for macOS exports.  
         */
        addMacOSPluginFile(path: string): void
        
        /** To be called inside [method _export_file]. Skips the current file, so it's not included in the export. */
        skip(): void
        
        /** Returns the current value of an export option supplied by [method _get_export_options]. */
        getOption(name: StringName): any
        
        /** Returns currently used export preset. */
        getExportPreset(): null | EditorExportPreset
        
        /** Returns currently used export platform. */
        getExportPlatform(): null | EditorExportPlatform
    }
    namespace EditorExportPreset {
        enum ExportFilter {
            ExportAllResources = 0,
            ExportSelectedScenes = 1,
            ExportSelectedResources = 2,
            ExcludeSelectedResources = 3,
            ExportCustomized = 4,
        }
        enum FileExportMode {
            ModeFileNotCustomized = 0,
            ModeFileStrip = 1,
            ModeFileKeep = 2,
            ModeFileRemove = 3,
        }
        enum ScriptExportMode {
            ModeScriptText = 0,
            ModeScriptBinaryTokens = 1,
            ModeScriptBinaryTokensCompressed = 2,
        }
    }
    /** Export preset configuration.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorexportpreset.html  
     */
    class EditorExportPreset extends RefCounted {
        static readonly EXPORT_ALL_RESOURCES = 0
        static readonly EXPORT_SELECTED_SCENES = 1
        static readonly EXPORT_SELECTED_RESOURCES = 2
        static readonly EXCLUDE_SELECTED_RESOURCES = 3
        static readonly EXPORT_CUSTOMIZED = 4
        static readonly MODE_FILE_NOT_CUSTOMIZED = 0
        static readonly MODE_FILE_STRIP = 1
        static readonly MODE_FILE_KEEP = 2
        static readonly MODE_FILE_REMOVE = 3
        static readonly MODE_SCRIPT_TEXT = 0
        static readonly MODE_SCRIPT_BINARY_TOKENS = 1
        static readonly MODE_SCRIPT_BINARY_TOKENS_COMPRESSED = 2
        constructor(identifier?: any)
        _getPropertyWarning(name: StringName): string
        
        /** Returns `true` if the preset has the property named [param property]. */
        has(property: StringName): boolean
        
        /** Returns array of files to export. */
        getFilesToExport(): PackedStringArray
        
        /** Returns [Dictionary] of files selected in the "Resources" tab of the export dialog. Dictionary keys are file names and values are export mode - `"strip"`, `"keep"`, or `"remove"`. See also [method get_file_export_mode]. */
        getCustomizedFiles(): GDictionary
        
        /** Returns number of files selected in the "Resources" tab of the export dialog. */
        getCustomizedFilesCount(): int64
        
        /** Returns `true` if specified file is exported. */
        hasExportFile(path: string): boolean
        
        /** Returns file export mode for the specified file. */
        getFileExportMode(path: string, default_?: EditorExportPreset.FileExportMode /* = 0 */): EditorExportPreset.FileExportMode
        
        /** Returns the value of the setting identified by [param name] using export preset feature tag overrides instead of current OS features. */
        getProjectSetting(name: StringName): any
        
        /** Returns export preset name. */
        getPresetName(): string
        
        /** Returns `true` if "Runnable" toggle is enabled in the export dialog. */
        isRunnable(): boolean
        
        /** Returns `true` if "Advanced" toggle is enabled in the export dialog. */
        areAdvancedOptionsEnabled(): boolean
        
        /** Returns `true` if dedicated server export mode is selected in the export dialog. */
        isDedicatedServer(): boolean
        
        /** Returns export file filter mode selected in the "Resources" tab of the export dialog. */
        getExportFilter(): EditorExportPreset.ExportFilter
        
        /** Returns file filters to include during export. */
        getIncludeFilter(): string
        
        /** Returns file filters to exclude during export. */
        getExcludeFilter(): string
        
        /** Returns string with a comma separated list of custom features. */
        getCustomFeatures(): string
        
        /** Returns the list of packs on which to base a patch export on. */
        getPatches(): PackedStringArray
        
        /** Returns export target path. */
        getExportPath(): string
        
        /** Returns file filters to include during PCK encryption. */
        getEncryptionInFilter(): string
        
        /** Returns file filters to exclude during PCK encryption. */
        getEncryptionExFilter(): string
        
        /** Returns `true` if PCK encryption is enabled in the export dialog. */
        getEncryptPck(): boolean
        
        /** Returns `true` if PCK directory encryption is enabled in the export dialog. */
        getEncryptDirectory(): boolean
        
        /** Returns PCK encryption key. */
        getEncryptionKey(): string
        
        /** Returns script export mode. */
        getScriptExportMode(): int64
        
        /** Returns export option value or value of environment variable if it is set. */
        getOrEnv(name: StringName, envVar: string): any
        
        /** Returns the preset's version number, or fall back to the [member ProjectSettings.application/config/version] project setting if set to an empty string.  
         *  If [param windows_version] is `true`, formats the returned version number to be compatible with Windows executable metadata.  
         */
        getVersion(name: StringName, windowsVersion: boolean): string
    }
    namespace EditorFeatureProfile {
        enum Feature {
            Feature3D = 0,
            FeatureScript = 1,
            FeatureAssetLib = 2,
            FeatureSceneTree = 3,
            FeatureNodeDock = 4,
            FeatureFilesystemDock = 5,
            FeatureImportDock = 6,
            FeatureHistoryDock = 7,
            FeatureGame = 8,
            FeatureMax = 9,
        }
    }
    /** An editor feature profile which can be used to disable specific features.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorfeatureprofile.html  
     */
    class EditorFeatureProfile extends RefCounted {
        /** The 3D editor. If this feature is disabled, the 3D editor won't display but 3D nodes will still display in the Create New Node dialog. */
        static readonly FEATURE_3D = 0
        
        /** The Script tab, which contains the script editor and class reference browser. If this feature is disabled, the Script tab won't display. */
        static readonly FEATURE_SCRIPT = 1
        
        /** The AssetLib tab. If this feature is disabled, the AssetLib tab won't display. */
        static readonly FEATURE_ASSET_LIB = 2
        
        /** Scene tree editing. If this feature is disabled, the Scene tree dock will still be visible but will be read-only. */
        static readonly FEATURE_SCENE_TREE = 3
        
        /** The Node dock. If this feature is disabled, signals and groups won't be visible and modifiable from the editor. */
        static readonly FEATURE_NODE_DOCK = 4
        
        /** The FileSystem dock. If this feature is disabled, the FileSystem dock won't be visible. */
        static readonly FEATURE_FILESYSTEM_DOCK = 5
        
        /** The Import dock. If this feature is disabled, the Import dock won't be visible. */
        static readonly FEATURE_IMPORT_DOCK = 6
        
        /** The History dock. If this feature is disabled, the History dock won't be visible. */
        static readonly FEATURE_HISTORY_DOCK = 7
        
        /** The Game tab, which allows embedding the game window and selecting nodes by clicking inside of it. If this feature is disabled, the Game tab won't display. */
        static readonly FEATURE_GAME = 8
        
        /** Represents the size of the [enum Feature] enum. */
        static readonly FEATURE_MAX = 9
        constructor(identifier?: any)
        
        /** If [param disable] is `true`, disables the class specified by [param class_name]. When disabled, the class won't appear in the Create New Node dialog. */
        setDisableClass(className: StringName, disable: boolean): void
        
        /** Returns `true` if the class specified by [param class_name] is disabled. When disabled, the class won't appear in the Create New Node dialog. */
        isClassDisabled(className: StringName): boolean
        
        /** If [param disable] is `true`, disables editing for the class specified by [param class_name]. When disabled, the class will still appear in the Create New Node dialog but the Inspector will be read-only when selecting a node that extends the class. */
        setDisableClassEditor(className: StringName, disable: boolean): void
        
        /** Returns `true` if editing for the class specified by [param class_name] is disabled. When disabled, the class will still appear in the Create New Node dialog but the Inspector will be read-only when selecting a node that extends the class. */
        isClassEditorDisabled(className: StringName): boolean
        
        /** If [param disable] is `true`, disables editing for [param property] in the class specified by [param class_name]. When a property is disabled, it won't appear in the Inspector when selecting a node that extends the class specified by [param class_name]. */
        setDisableClassProperty(className: StringName, property: StringName, disable: boolean): void
        
        /** Returns `true` if [param property] is disabled in the class specified by [param class_name]. When a property is disabled, it won't appear in the Inspector when selecting a node that extends the class specified by [param class_name]. */
        isClassPropertyDisabled(className: StringName, property: StringName): boolean
        
        /** If [param disable] is `true`, disables the editor feature specified in [param feature]. When a feature is disabled, it will disappear from the editor entirely. */
        setDisableFeature(feature: EditorFeatureProfile.Feature, disable: boolean): void
        
        /** Returns `true` if the [param feature] is disabled. When a feature is disabled, it will disappear from the editor entirely. */
        isFeatureDisabled(feature: EditorFeatureProfile.Feature): boolean
        
        /** Returns the specified [param feature]'s human-readable name. */
        getFeatureName(feature: EditorFeatureProfile.Feature): string
        
        /** Saves the editor feature profile to a file in JSON format. It can then be imported using the feature profile manager's **Import** button or the [method load_from_file] method.  
         *      
         *  **Note:** Feature profiles created via the user interface are saved in the `feature_profiles` directory, as a file with the `.profile` extension. The editor configuration folder can be found by using [method EditorPaths.get_config_dir].  
         */
        saveToFile(path: string): GError
        
        /** Loads an editor feature profile from a file. The file must follow the JSON format obtained by using the feature profile manager's **Export** button or the [method save_to_file] method.  
         *      
         *  **Note:** Feature profiles created via the user interface are loaded from the `feature_profiles` directory, as a file with the `.profile` extension. The editor configuration folder can be found by using [method EditorPaths.get_config_dir].  
         */
        loadFromFile(path: string): GError
    }
    namespace EditorFileDialog {
        enum FileMode {
            FileModeOpenFile = 0,
            FileModeOpenFiles = 1,
            FileModeOpenDir = 2,
            FileModeOpenAny = 3,
            FileModeSaveFile = 4,
        }
        enum Access {
            AccessResources = 0,
            AccessUserdata = 1,
            AccessFilesystem = 2,
        }
        enum DisplayMode {
            DisplayThumbnails = 0,
            DisplayList = 1,
        }
    }
    /** A modified version of [FileDialog] used by the editor.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorfiledialog.html  
     */
    class EditorFileDialog<Map extends NodePathMap = any> extends ConfirmationDialog<Map> {
        /** The [EditorFileDialog] can select only one file. Accepting the window will open the file. */
        static readonly FILE_MODE_OPEN_FILE = 0
        
        /** The [EditorFileDialog] can select multiple files. Accepting the window will open all files. */
        static readonly FILE_MODE_OPEN_FILES = 1
        
        /** The [EditorFileDialog] can select only one directory. Accepting the window will open the directory. */
        static readonly FILE_MODE_OPEN_DIR = 2
        
        /** The [EditorFileDialog] can select a file or directory. Accepting the window will open it. */
        static readonly FILE_MODE_OPEN_ANY = 3
        
        /** The [EditorFileDialog] can select only one file. Accepting the window will save the file. */
        static readonly FILE_MODE_SAVE_FILE = 4
        
        /** The [EditorFileDialog] can only view `res://` directory contents. */
        static readonly ACCESS_RESOURCES = 0
        
        /** The [EditorFileDialog] can only view `user://` directory contents. */
        static readonly ACCESS_USERDATA = 1
        
        /** The [EditorFileDialog] can view the entire local file system. */
        static readonly ACCESS_FILESYSTEM = 2
        
        /** The [EditorFileDialog] displays resources as thumbnails. */
        static readonly DISPLAY_THUMBNAILS = 0
        
        /** The [EditorFileDialog] displays resources as a list of filenames. */
        static readonly DISPLAY_LIST = 1
        constructor(identifier?: any)
        _cancelPressed(): void
        
        /** Removes all filters except for "All Files (*.*)". */
        clearFilters(): void
        
        /** Adds a comma-delimited file name [param filter] option to the [EditorFileDialog] with an optional [param description], which restricts what files can be picked.  
         *  A [param filter] should be of the form `"filename.extension"`, where filename and extension can be `*` to match any string. Filters starting with `.` (i.e. empty filenames) are not allowed.  
         *  For example, a [param filter] of `"*.tscn, *.scn"` and a [param description] of `"Scenes"` results in filter text "Scenes (*.tscn, *.scn)".  
         */
        addFilter(filter: string, description?: string /* = '' */): void
        
        /** Returns the name of the [OptionButton] or [CheckBox] with index [param option]. */
        getOptionName(option: int64): string
        
        /** Returns an array of values of the [OptionButton] with index [param option]. */
        getOptionValues(option: int64): PackedStringArray
        
        /** Returns the default value index of the [OptionButton] or [CheckBox] with index [param option]. */
        getOptionDefault(option: int64): int64
        
        /** Sets the name of the [OptionButton] or [CheckBox] with index [param option]. */
        setOptionName(option: int64, name: string): void
        
        /** Sets the option values of the [OptionButton] with index [param option]. */
        setOptionValues(option: int64, values: PackedStringArray | string[]): void
        
        /** Sets the default value index of the [OptionButton] or [CheckBox] with index [param option]. */
        setOptionDefault(option: int64, defaultValueIndex: int64): void
        
        /** Adds an additional [OptionButton] to the file dialog. If [param values] is empty, a [CheckBox] is added instead.  
         *  [param default_value_index] should be an index of the value in the [param values]. If [param values] is empty it should be either `1` (checked), or `0` (unchecked).  
         */
        addOption(name: string, values: PackedStringArray | string[], defaultValueIndex: int64): void
        
        /** Returns a [Dictionary] with the selected values of the additional [OptionButton]s and/or [CheckBox]es. [Dictionary] keys are names and values are selected value indices. */
        getSelectedOptions(): GDictionary
        
        /** Clear the filter for file names. */
        clearFileNameFilter(): void
        
        /** Sets the value of the filter for file names. */
        setFileNameFilter(filter: string): void
        
        /** Returns the value of the filter for file names. */
        getFileNameFilter(): string
        
        /** Returns the [VBoxContainer] used to display the file system.  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.  
         */
        getVBox(): null | VBoxContainer
        
        /** Returns the LineEdit for the selected file.  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.  
         */
        getLineEdit(): null | LineEdit
        _thumbnailDone(_unnamedArg0: string, _unnamedArg1: Texture2D, _unnamedArg2: Texture2D, _unnamedArg3: any): void
        _thumbnailResult(_unnamedArg0: string, _unnamedArg1: Texture2D, _unnamedArg2: Texture2D, _unnamedArg3: any): void
        
        /** Adds the given [param menu] to the side of the file dialog with the given [param title] text on top. Only one side menu is allowed. */
        addSideMenu(menu: Control, title?: string /* = '' */): void
        
        /** Shows the [EditorFileDialog] at the default size and position for file dialogs in the editor, and selects the file name if there is a current file. */
        popupFileDialog(): void
        
        /** Notify the [EditorFileDialog] that its view of the data is no longer accurate. Updates the view contents on next view update. */
        invalidate(): void
        
        /** The location from which the user may select a file, including `res://`, `user://`, and the local file system. */
        get access(): int64
        set access(value: int64)
        
        /** The view format in which the [EditorFileDialog] displays resources to the user. */
        get displayMode(): int64
        set displayMode(value: int64)
        
        /** The dialog's open or save mode, which affects the selection behavior. See [enum FileMode]. */
        get fileMode(): int64
        set fileMode(value: int64)
        
        /** The currently occupied directory. */
        get currentDir(): string
        set currentDir(value: string)
        
        /** The currently selected file. */
        get currentFile(): string
        set currentFile(value: string)
        
        /** The file system path in the address bar. */
        get currentPath(): string
        set currentPath(value: string)
        
        /** The available file type filters. For example, this shows only `.png` and `.gd` files: `set_filters(PackedStringArray(["*.png ; PNG Images","*.gd ; GDScript Files"]))`. Multiple file types can also be specified in a single filter. `"*.png, *.jpg, *.jpeg ; Supported Images"` will show both PNG and JPEG files when selected. */
        get filters(): PackedStringArray
        set filters(value: PackedStringArray | string[])
        
        /** The number of additional [OptionButton]s and [CheckBox]es in the dialog. */
        get optionCount(): any /*Options,option_*/
        set optionCount(value: any /*Options,option_*/)
        
        /** If `true`, hidden files and directories will be visible in the [EditorFileDialog]. This property is synchronized with [member EditorSettings.filesystem/file_dialog/show_hidden_files]. */
        get showHiddenFiles(): boolean
        set showHiddenFiles(value: boolean)
        
        /** If `true`, the [EditorFileDialog] will not warn the user before overwriting files. */
        get disableOverwriteWarning(): boolean
        set disableOverwriteWarning(value: boolean)
        
        /** Emitted when a file is selected. */
        readonly fileSelected: Signal<(path: string) => void>
        
        /** Emitted when multiple files are selected. */
        readonly filesSelected: Signal<(paths: PackedStringArray) => void>
        
        /** Emitted when a directory is selected. */
        readonly dirSelected: Signal<(dir: string) => void>
        
        /** Emitted when the filter for file names changes. */
        readonly fileNameFilterChanged: Signal<(filter: string) => void>
    }
    /** Resource filesystem, as the editor sees it.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorfilesystem.html  
     */
    class EditorFileSystem<Map extends NodePathMap = any> extends Node<Map> {
        constructor(identifier?: any)
        /** Gets the root directory object. */
        getFilesystem(): null | EditorFileSystemDirectory
        
        /** Returns `true` if the filesystem is being scanned. */
        isScanning(): boolean
        
        /** Returns the scan progress for 0 to 1 if the FS is being scanned. */
        getScanningProgress(): float64
        
        /** Scan the filesystem for changes. */
        scan(): void
        
        /** Check if the source of any imported resource changed. */
        scanSources(): void
        
        /** Add a file in an existing directory, or schedule file information to be updated on editor restart. Can be used to update text files saved by an external program.  
         *  This will not import the file. To reimport, call [method reimport_files] or [method scan] methods.  
         */
        updateFile(path: string): void
        
        /** Returns a view into the filesystem at [param path]. */
        getFilesystemPath(path: string): null | EditorFileSystemDirectory
        
        /** Returns the resource type of the file, given the full path. This returns a string such as `"Resource"` or `"GDScript"`,  *not*  a file extension such as `".gd"`. */
        getFileType(path: string): string
        
        /** Reimports a set of files. Call this if these files or their `.import` files were directly edited by script or an external program.  
         *  If the file type changed or the file was newly created, use [method update_file] or [method scan].  
         *      
         *  **Note:** This function blocks until the import is finished. However, the main loop iteration, including timers and [method Node._process], will occur during the import process due to progress bar updates. Avoid calls to [method reimport_files] or [method scan] while an import is in progress.  
         */
        reimportFiles(files: PackedStringArray | string[]): void
        
        /** Emitted if the filesystem changed. */
        readonly filesystemChanged: Signal<() => void>
        
        /** Emitted when the list of global script classes gets updated. */
        readonly scriptClassesUpdated: Signal<() => void>
        
        /** Emitted if the source of any imported file changed. */
        readonly sourcesChanged: Signal<(exist: boolean) => void>
        
        /** Emitted before a resource is reimported. */
        readonly resourcesReimporting: Signal<(resources: PackedStringArray) => void>
        
        /** Emitted if a resource is reimported. */
        readonly resourcesReimported: Signal<(resources: PackedStringArray) => void>
        
        /** Emitted if at least one resource is reloaded when the filesystem is scanned. */
        readonly resourcesReload: Signal<(resources: PackedStringArray) => void>
    }
    /** A directory for the resource filesystem.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorfilesystemdirectory.html  
     */
    class EditorFileSystemDirectory extends GObject {
        constructor(identifier?: any)
        /** Returns the number of subdirectories in this directory. */
        getSubdirCount(): int64
        
        /** Returns the subdirectory at index [param idx]. */
        getSubdir(idx: int64): null | EditorFileSystemDirectory
        
        /** Returns the number of files in this directory. */
        getFileCount(): int64
        
        /** Returns the name of the file at index [param idx]. */
        getFile(idx: int64): string
        
        /** Returns the path to the file at index [param idx]. */
        getFilePath(idx: int64): string
        
        /** Returns the resource type of the file at index [param idx]. This returns a string such as `"Resource"` or `"GDScript"`,  *not*  a file extension such as `".gd"`. */
        getFileType(idx: int64): StringName
        
        /** Returns the name of the script class defined in the file at index [param idx]. If the file doesn't define a script class using the `class_name` syntax, this will return an empty string. */
        getFileScriptClassName(idx: int64): string
        
        /** Returns the base class of the script class defined in the file at index [param idx]. If the file doesn't define a script class using the `class_name` syntax, this will return an empty string. */
        getFileScriptClassExtends(idx: int64): string
        
        /** Returns `true` if the file at index [param idx] imported properly. */
        getFileImportIsValid(idx: int64): boolean
        
        /** Returns the name of this directory. */
        getName(): string
        
        /** Returns the path to this directory. */
        getPath(): string
        
        /** Returns the parent directory for this directory or `null` if called on a directory at `res://` or `user://`. */
        getParent(): null | EditorFileSystemDirectory
        
        /** Returns the index of the file with name [param name] or `-1` if not found. */
        findFileIndex(name: string): int64
        
        /** Returns the index of the directory with name [param name] or `-1` if not found. */
        findDirIndex(name: string): int64
    }
    /** Used to query and configure import format support.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorfilesystemimportformatsupportquery.html  
     */
    class EditorFileSystemImportFormatSupportQuery extends RefCounted {
        constructor(identifier?: any)
        /** Return whether this importer is active. */
        /* gdvirtual */ _isActive(): boolean
        
        /** Return the file extensions supported. */
        /* gdvirtual */ _getFileExtensions(): PackedStringArray
        
        /** Query support. Return `false` if import must not continue. */
        /* gdvirtual */ _query(): boolean
    }
    /** Registers a custom resource importer in the editor. Use the class to parse any file and import it as a new resource type.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorimportplugin.html  
     */
    class EditorImportPlugin extends ResourceImporter {
        constructor(identifier?: any)
        /** Gets the unique name of the importer. */
        /* gdvirtual */ _getImporterName(): string
        
        /** Gets the name to display in the import window. You should choose this name as a continuation to "Import as", e.g. "Import as Special Mesh". */
        /* gdvirtual */ _getVisibleName(): string
        
        /** Gets the number of initial presets defined by the plugin. Use [method _get_import_options] to get the default options for the preset and [method _get_preset_name] to get the name of the preset. */
        /* gdvirtual */ _getPresetCount(): int64
        
        /** Gets the name of the options preset at this index. */
        /* gdvirtual */ _getPresetName(presetIndex: int64): string
        
        /** Gets the list of file extensions to associate with this loader (case-insensitive). e.g. `["obj"]`. */
        /* gdvirtual */ _getRecognizedExtensions(): PackedStringArray
        
        /** Gets the options and default values for the preset at this index. Returns an Array of Dictionaries with the following keys: `name`, `default_value`, `property_hint` (optional), `hint_string` (optional), `usage` (optional). */
        /* gdvirtual */ _getImportOptions(path: string, presetIndex: int64): GArray
        
        /** Gets the extension used to save this resource in the `.godot/imported` directory (see [member ProjectSettings.application/config/use_hidden_project_data_directory]). */
        /* gdvirtual */ _getSaveExtension(): string
        
        /** Gets the Godot resource type associated with this loader. e.g. `"Mesh"` or `"Animation"`. */
        /* gdvirtual */ _getResourceType(): string
        
        /** Gets the priority of this plugin for the recognized extension. Higher priority plugins will be preferred. The default priority is `1.0`. */
        /* gdvirtual */ _getPriority(): float64
        
        /** Gets the order of this importer to be run when importing resources. Importers with  *lower*  import orders will be called first, and higher values will be called later. Use this to ensure the importer runs after the dependencies are already imported. The default import order is `0` unless overridden by a specific importer. See [enum ResourceImporter.ImportOrder] for some predefined values. */
        /* gdvirtual */ _getImportOrder(): int64
        
        /** Gets the format version of this importer. Increment this version when making incompatible changes to the format of the imported resources. */
        /* gdvirtual */ _getFormatVersion(): int64
        
        /** Gets whether the import option specified by [param option_name] should be visible in the Import dock. The default implementation always returns `true`, making all options visible. This is mainly useful for hiding options that depend on others if one of them is disabled.  
         *    
         */
        /* gdvirtual */ _getOptionVisibility(path: string, optionName: StringName, options: GDictionary): boolean
        
        /** Imports [param source_file] with the import [param options] specified. Should return [constant @GlobalScope.OK] if the import is successful, other values indicate failure.  
         *  The imported resource is expected to be saved to `save_path + "." + _get_save_extension()`. If a different variant is preferred for a [url=https://docs.godotengine.org/en/latest/tutorials/export/feature_tags.html]feature tag[/url], save the variant to `save_path + "." + tag + "." + _get_save_extension()` and add the feature tag to [param platform_variants].  
         *  If additional resource files are generated in the resource filesystem (`res://`), add their full path to [param gen_files] so that the editor knows they depend on [param source_file].  
         *  This method must be overridden to do the actual importing work. See this class' description for an example of overriding this method.  
         */
        /* gdvirtual */ _import(sourceFile: string, savePath: string, options: GDictionary, platformVariants: GArray, genFiles: GArray): GError
        
        /** Tells whether this importer can be run in parallel on threads, or, on the contrary, it's only safe for the editor to call it from the main thread, for one file at a time.  
         *  If this method is not overridden, it will return `false` by default.  
         *  If this importer's implementation is thread-safe and can be run in parallel, override this with `true` to optimize for concurrency.  
         */
        /* gdvirtual */ _canImportThreaded(): boolean
        
        /** This function can only be called during the [method _import] callback and it allows manually importing resources from it. This is useful when the imported file generates external resources that require importing (as example, images). Custom parameters for the ".import" file can be passed via the [param custom_options]. Additionally, in cases where multiple importers can handle a file, the [param custom_importer] can be specified to force a specific one. This function performs a resource import and returns immediately with a success or error code. [param generator_parameters] defines optional extra metadata which will be stored as [code skip-lint]generator_parameters` in the `remap` section of the `.import` file, for example to store a md5 hash of the source data. */
        appendImportExternalResource(path: string, customOptions?: GDictionary /* = new GDictionary() */, customImporter?: string /* = '' */, generatorParameters?: any /* = <any> {} */): GError
    }
    /** A control used to edit properties of an object.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorinspector.html  
     */
    class EditorInspector<Map extends NodePathMap = any> extends ScrollContainer<Map> {
        constructor(identifier?: any)
        /** Shows the properties of the given [param object] in this inspector for editing. To clear the inspector, call this method with `null`.  
         *      
         *  **Note:** If you want to edit an object in the editor's main inspector, use the `edit_*` methods in [EditorInterface] instead.  
         */
        edit(object: GObject): void
        _editRequestChange(_unnamedArg0: GObject, _unnamedArg1: string): void
        
        /** Gets the path of the currently selected property. */
        getSelectedPath(): string
        
        /** Returns the object currently selected in this inspector. */
        getEditedObject(): null | GObject
        
        /** Creates a property editor that can be used by plugin UI to edit the specified property of an [param object]. */
        static instantiatePropertyEditor(object: GObject, type: Variant.Type, path: string, hint: PropertyHint, hintText: string, usage: int64, wide?: boolean /* = false */): null | EditorProperty
        
        /** Emitted when a property is selected in the inspector. */
        readonly propertySelected: Signal<(property: string) => void>
        
        /** Emitted when a property is keyed in the inspector. Properties can be keyed by clicking the "key" icon next to a property when the Animation panel is toggled. */
        readonly propertyKeyed: Signal<(property: string, value: any, advance: boolean) => void>
        
        /** Emitted when a property is removed from the inspector. */
        readonly propertyDeleted: Signal<(property: string) => void>
        
        /** Emitted when a resource is selected in the inspector. */
        readonly resourceSelected: Signal<(resource: Resource, path: string) => void>
        
        /** Emitted when the Edit button of an [Object] has been pressed in the inspector. This is mainly used in the remote scene tree Inspector. */
        readonly objectIdSelected: Signal<(id: int64) => void>
        
        /** Emitted when a property is edited in the inspector. */
        readonly propertyEdited: Signal<(property: string) => void>
        
        /** Emitted when a boolean property is toggled in the inspector.  
         *      
         *  **Note:** This signal is never emitted if the internal `autoclear` property enabled. Since this property is always enabled in the editor inspector, this signal is never emitted by the editor itself.  
         */
        readonly propertyToggled: Signal<(property: string, checked: boolean) => void>
        
        /** Emitted when the object being edited by the inspector has changed. */
        readonly editedObjectChanged: Signal<() => void>
        
        /** Emitted when a property that requires a restart to be applied is edited in the inspector. This is only used in the Project Settings and Editor Settings. */
        readonly restartRequested: Signal<() => void>
    }
    /** Plugin for adding custom property editors on the inspector.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorinspectorplugin.html  
     */
    class EditorInspectorPlugin extends RefCounted {
        constructor(identifier?: any)
        /** Returns `true` if this object can be handled by this plugin. */
        /* gdvirtual */ _canHandle(object: GObject): boolean
        
        /** Called to allow adding controls at the beginning of the property list for [param object]. */
        /* gdvirtual */ _parseBegin(object: GObject): void
        
        /** Called to allow adding controls at the beginning of a category in the property list for [param object]. */
        /* gdvirtual */ _parseCategory(object: GObject, category: string): void
        
        /** Called to allow adding controls at the beginning of a group or a sub-group in the property list for [param object]. */
        /* gdvirtual */ _parseGroup(object: GObject, group: string): void
        
        /** Called to allow adding property-specific editors to the property list for [param object]. The added editor control must extend [EditorProperty]. Returning `true` removes the built-in editor for this property, otherwise allows to insert a custom editor before the built-in one. */
        /* gdvirtual */ _parseProperty(object: GObject, type: Variant.Type, name: string, hintType: PropertyHint, hintString: string, usageFlags: PropertyUsageFlags, wide: boolean): boolean
        
        /** Called to allow adding controls at the end of the property list for [param object]. */
        /* gdvirtual */ _parseEnd(object: GObject): void
        
        /** Adds a custom control, which is not necessarily a property editor. */
        addCustomControl(control: Control): void
        
        /** Adds a property editor for an individual property. The [param editor] control must extend [EditorProperty].  
         *  There can be multiple property editors for a property. If [param add_to_end] is `true`, this newly added editor will be displayed after all the other editors of the property whose [param add_to_end] is `false`. For example, the editor uses this parameter to add an "Edit Region" button for [member Sprite2D.region_rect] below the regular [Rect2] editor.  
         *  [param label] can be used to choose a custom label for the property editor in the inspector. If left empty, the label is computed from the name of the property instead.  
         */
        addPropertyEditor(property: string, editor: Control, addToEnd?: boolean /* = false */, label?: string /* = '' */): void
        
        /** Adds an editor that allows modifying multiple properties. The [param editor] control must extend [EditorProperty]. */
        addPropertyEditorForMultipleProperties(label: string, properties: PackedStringArray | string[], editor: Control): void
    }
    /** Gizmo for editing [Node3D] objects.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editornode3dgizmo.html  
     */
    class EditorNode3DGizmo extends Node3DGizmo {
        constructor(identifier?: any)
        /** Override this method to add all the gizmo elements whenever a gizmo update is requested. It's common to call [method clear] at the beginning of this method and then add visual elements depending on the node's properties. */
        /* gdvirtual */ _redraw(): void
        
        /** Override this method to return the name of an edited handle (handles must have been previously added by [method add_handles]). Handles can be named for reference to the user when editing.  
         *  The [param secondary] argument is `true` when the requested handle is secondary (see [method add_handles] for more information).  
         */
        /* gdvirtual */ _getHandleName(id: int64, secondary: boolean): string
        
        /** Override this method to return `true` whenever the given handle should be highlighted in the editor.  
         *  The [param secondary] argument is `true` when the requested handle is secondary (see [method add_handles] for more information).  
         */
        /* gdvirtual */ _isHandleHighlighted(id: int64, secondary: boolean): boolean
        
        /** Override this method to return the current value of a handle. This value will be requested at the start of an edit and used as the `restore` argument in [method _commit_handle].  
         *  The [param secondary] argument is `true` when the requested handle is secondary (see [method add_handles] for more information).  
         */
        /* gdvirtual */ _getHandleValue(id: int64, secondary: boolean): any
        /* gdvirtual */ _beginHandleAction(id: int64, secondary: boolean): void
        
        /** Override this method to update the node properties when the user drags a gizmo handle (previously added with [method add_handles]). The provided [param point] is the mouse position in screen coordinates and the [param camera] can be used to convert it to raycasts.  
         *  The [param secondary] argument is `true` when the edited handle is secondary (see [method add_handles] for more information).  
         */
        /* gdvirtual */ _setHandle(id: int64, secondary: boolean, camera: Camera3D, point: Vector2): void
        
        /** Override this method to commit a handle being edited (handles must have been previously added by [method add_handles]). This usually means creating an [UndoRedo] action for the change, using the current handle value as "do" and the [param restore] argument as "undo".  
         *  If the [param cancel] argument is `true`, the [param restore] value should be directly set, without any [UndoRedo] action.  
         *  The [param secondary] argument is `true` when the committed handle is secondary (see [method add_handles] for more information).  
         */
        /* gdvirtual */ _commitHandle(id: int64, secondary: boolean, restore: any, cancel: boolean): void
        
        /** Override this method to allow selecting subgizmos using mouse clicks. Given a [param camera] and a [param point] in screen coordinates, this method should return which subgizmo should be selected. The returned value should be a unique subgizmo identifier, which can have any non-negative value and will be used in other virtual methods like [method _get_subgizmo_transform] or [method _commit_subgizmos]. */
        /* gdvirtual */ _subgizmosIntersectRay(camera: Camera3D, point: Vector2): int64
        
        /** Override this method to allow selecting subgizmos using mouse drag box selection. Given a [param camera] and a [param frustum], this method should return which subgizmos are contained within the frustum. The [param frustum] argument consists of an array with all the [Plane]s that make up the selection frustum. The returned value should contain a list of unique subgizmo identifiers, which can have any non-negative value and will be used in other virtual methods like [method _get_subgizmo_transform] or [method _commit_subgizmos]. */
        /* gdvirtual */ _subgizmosIntersectFrustum(camera: Camera3D, frustum: GArray): PackedInt32Array
        
        /** Override this method to update the node properties during subgizmo editing (see [method _subgizmos_intersect_ray] and [method _subgizmos_intersect_frustum]). The [param transform] is given in the [Node3D]'s local coordinate system. */
        /* gdvirtual */ _setSubgizmoTransform(id: int64, transform: Transform3D): void
        
        /** Override this method to return the current transform of a subgizmo. This transform will be requested at the start of an edit and used as the `restore` argument in [method _commit_subgizmos]. */
        /* gdvirtual */ _getSubgizmoTransform(id: int64): Transform3D
        
        /** Override this method to commit a group of subgizmos being edited (see [method _subgizmos_intersect_ray] and [method _subgizmos_intersect_frustum]). This usually means creating an [UndoRedo] action for the change, using the current transforms as "do" and the [param restores] transforms as "undo".  
         *  If the [param cancel] argument is `true`, the [param restores] transforms should be directly set, without any [UndoRedo] action.  
         */
        /* gdvirtual */ _commitSubgizmos(ids: PackedInt32Array | int32[], restores: GArray, cancel: boolean): void
        
        /** Adds lines to the gizmo (as sets of 2 points), with a given material. The lines are used for visualizing the gizmo. Call this method during [method _redraw]. */
        addLines(lines: PackedVector3Array | Vector3[], material: Material, billboard?: boolean /* = false */, modulate?: Color /* = new Color(1, 1, 1, 1) */): void
        
        /** Adds a mesh to the gizmo with the specified [param material], local [param transform] and [param skeleton]. Call this method during [method _redraw]. */
        addMesh(mesh: Mesh, material?: Material /* = undefined */, transform?: Transform3D /* = new Transform3D() */, skeleton?: SkinReference /* = undefined */): void
        
        /** Adds the specified [param segments] to the gizmo's collision shape for picking. Call this method during [method _redraw]. */
        addCollisionSegments(segments: PackedVector3Array | Vector3[]): void
        
        /** Adds collision triangles to the gizmo for picking. A [TriangleMesh] can be generated from a regular [Mesh] too. Call this method during [method _redraw]. */
        addCollisionTriangles(triangles: TriangleMesh): void
        
        /** Adds an unscaled billboard for visualization and selection. Call this method during [method _redraw]. */
        addUnscaledBillboard(material: Material, defaultScale?: float64 /* = 1 */, modulate?: Color /* = new Color(1, 1, 1, 1) */): void
        
        /** Adds a list of handles (points) which can be used to edit the properties of the gizmo's [Node3D]. The [param ids] argument can be used to specify a custom identifier for each handle, if an empty array is passed, the ids will be assigned automatically from the [param handles] argument order.  
         *  The [param secondary] argument marks the added handles as secondary, meaning they will normally have lower selection priority than regular handles. When the user is holding the shift key secondary handles will switch to have higher priority than regular handles. This change in priority can be used to place multiple handles at the same point while still giving the user control on their selection.  
         *  There are virtual methods which will be called upon editing of these handles. Call this method during [method _redraw].  
         */
        addHandles(handles: PackedVector3Array | Vector3[], material: Material, ids: PackedInt32Array | int32[], billboard?: boolean /* = false */, secondary?: boolean /* = false */): void
        
        /** Sets the reference [Node3D] node for the gizmo. [param node] must inherit from [Node3D]. */
        setNode3D(node: Node): void
        
        /** Returns the [Node3D] node associated with this gizmo. */
        getNode3D(): null | Node3D
        
        /** Returns the [EditorNode3DGizmoPlugin] that owns this gizmo. It's useful to retrieve materials using [method EditorNode3DGizmoPlugin.get_material]. */
        getPlugin(): null | EditorNode3DGizmoPlugin
        
        /** Removes everything in the gizmo including meshes, collisions and handles. */
        clear(): void
        
        /** Sets the gizmo's hidden state. If `true`, the gizmo will be hidden. If `false`, it will be shown. */
        setHidden(hidden: boolean): void
        
        /** Returns `true` if the given subgizmo is currently selected. Can be used to highlight selected elements during [method _redraw]. */
        isSubgizmoSelected(id: int64): boolean
        
        /** Returns a list of the currently selected subgizmos. Can be used to highlight selected elements during [method _redraw]. */
        getSubgizmoSelection(): PackedInt32Array
    }
    /** A class used by the editor to define Node3D gizmo types.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editornode3dgizmoplugin.html  
     */
    class EditorNode3DGizmoPlugin extends Resource {
        constructor(identifier?: any)
        /** Override this method to define which Node3D nodes have a gizmo from this plugin. Whenever a [Node3D] node is added to a scene this method is called, if it returns `true` the node gets a generic [EditorNode3DGizmo] assigned and is added to this plugin's list of active gizmos. */
        /* gdvirtual */ _hasGizmo(forNode3D: Node3D): boolean
        
        /** Override this method to return a custom [EditorNode3DGizmo] for the 3D nodes of your choice, return `null` for the rest of nodes. See also [method _has_gizmo]. */
        /* gdvirtual */ _createGizmo(forNode3D: Node3D): null | EditorNode3DGizmo
        
        /** Override this method to provide the name that will appear in the gizmo visibility menu. */
        /* gdvirtual */ _getGizmoName(): string
        
        /** Override this method to set the gizmo's priority. Gizmos with higher priority will have precedence when processing inputs like handles or subgizmos selection.  
         *  All built-in editor gizmos return a priority of `-1`. If not overridden, this method will return `0`, which means custom gizmos will automatically get higher priority than built-in gizmos.  
         */
        /* gdvirtual */ _getPriority(): int64
        
        /** Override this method to define whether the gizmos handled by this plugin can be hidden or not. Returns `true` if not overridden. */
        /* gdvirtual */ _canBeHidden(): boolean
        
        /** Override this method to define whether Node3D with this gizmo should be selectable even when the gizmo is hidden. */
        /* gdvirtual */ _isSelectableWhenHidden(): boolean
        
        /** Override this method to add all the gizmo elements whenever a gizmo update is requested. It's common to call [method EditorNode3DGizmo.clear] at the beginning of this method and then add visual elements depending on the node's properties. */
        /* gdvirtual */ _redraw(gizmo: EditorNode3DGizmo): void
        
        /** Override this method to provide gizmo's handle names. The [param secondary] argument is `true` when the requested handle is secondary (see [method EditorNode3DGizmo.add_handles] for more information). Called for this plugin's active gizmos. */
        /* gdvirtual */ _getHandleName(gizmo: EditorNode3DGizmo, handleId: int64, secondary: boolean): string
        
        /** Override this method to return `true` whenever to given handle should be highlighted in the editor. The [param secondary] argument is `true` when the requested handle is secondary (see [method EditorNode3DGizmo.add_handles] for more information). Called for this plugin's active gizmos. */
        /* gdvirtual */ _isHandleHighlighted(gizmo: EditorNode3DGizmo, handleId: int64, secondary: boolean): boolean
        
        /** Override this method to return the current value of a handle. This value will be requested at the start of an edit and used as the `restore` argument in [method _commit_handle].  
         *  The [param secondary] argument is `true` when the requested handle is secondary (see [method EditorNode3DGizmo.add_handles] for more information).  
         *  Called for this plugin's active gizmos.  
         */
        /* gdvirtual */ _getHandleValue(gizmo: EditorNode3DGizmo, handleId: int64, secondary: boolean): any
        /* gdvirtual */ _beginHandleAction(gizmo: EditorNode3DGizmo, handleId: int64, secondary: boolean): void
        
        /** Override this method to update the node's properties when the user drags a gizmo handle (previously added with [method EditorNode3DGizmo.add_handles]). The provided [param screen_pos] is the mouse position in screen coordinates and the [param camera] can be used to convert it to raycasts.  
         *  The [param secondary] argument is `true` when the edited handle is secondary (see [method EditorNode3DGizmo.add_handles] for more information).  
         *  Called for this plugin's active gizmos.  
         */
        /* gdvirtual */ _setHandle(gizmo: EditorNode3DGizmo, handleId: int64, secondary: boolean, camera: Camera3D, screenPos: Vector2): void
        
        /** Override this method to commit a handle being edited (handles must have been previously added by [method EditorNode3DGizmo.add_handles] during [method _redraw]). This usually means creating an [UndoRedo] action for the change, using the current handle value as "do" and the [param restore] argument as "undo".  
         *  If the [param cancel] argument is `true`, the [param restore] value should be directly set, without any [UndoRedo] action.  
         *  The [param secondary] argument is `true` when the committed handle is secondary (see [method EditorNode3DGizmo.add_handles] for more information).  
         *  Called for this plugin's active gizmos.  
         */
        /* gdvirtual */ _commitHandle(gizmo: EditorNode3DGizmo, handleId: int64, secondary: boolean, restore: any, cancel: boolean): void
        
        /** Override this method to allow selecting subgizmos using mouse clicks. Given a [param camera] and a [param screen_pos] in screen coordinates, this method should return which subgizmo should be selected. The returned value should be a unique subgizmo identifier, which can have any non-negative value and will be used in other virtual methods like [method _get_subgizmo_transform] or [method _commit_subgizmos]. Called for this plugin's active gizmos. */
        /* gdvirtual */ _subgizmosIntersectRay(gizmo: EditorNode3DGizmo, camera: Camera3D, screenPos: Vector2): int64
        
        /** Override this method to allow selecting subgizmos using mouse drag box selection. Given a [param camera] and [param frustum_planes], this method should return which subgizmos are contained within the frustums. The [param frustum_planes] argument consists of an array with all the [Plane]s that make up the selection frustum. The returned value should contain a list of unique subgizmo identifiers, these identifiers can have any non-negative value and will be used in other virtual methods like [method _get_subgizmo_transform] or [method _commit_subgizmos]. Called for this plugin's active gizmos. */
        /* gdvirtual */ _subgizmosIntersectFrustum(gizmo: EditorNode3DGizmo, camera: Camera3D, frustumPlanes: GArray): PackedInt32Array
        
        /** Override this method to return the current transform of a subgizmo. As with all subgizmo methods, the transform should be in local space respect to the gizmo's Node3D. This transform will be requested at the start of an edit and used in the `restore` argument in [method _commit_subgizmos]. Called for this plugin's active gizmos. */
        /* gdvirtual */ _getSubgizmoTransform(gizmo: EditorNode3DGizmo, subgizmoId: int64): Transform3D
        
        /** Override this method to update the node properties during subgizmo editing (see [method _subgizmos_intersect_ray] and [method _subgizmos_intersect_frustum]). The [param transform] is given in the Node3D's local coordinate system. Called for this plugin's active gizmos. */
        /* gdvirtual */ _setSubgizmoTransform(gizmo: EditorNode3DGizmo, subgizmoId: int64, transform: Transform3D): void
        
        /** Override this method to commit a group of subgizmos being edited (see [method _subgizmos_intersect_ray] and [method _subgizmos_intersect_frustum]). This usually means creating an [UndoRedo] action for the change, using the current transforms as "do" and the [param restores] transforms as "undo".  
         *  If the [param cancel] argument is `true`, the [param restores] transforms should be directly set, without any [UndoRedo] action. As with all subgizmo methods, transforms are given in local space respect to the gizmo's Node3D. Called for this plugin's active gizmos.  
         */
        /* gdvirtual */ _commitSubgizmos(gizmo: EditorNode3DGizmo, ids: PackedInt32Array | int32[], restores: GArray, cancel: boolean): void
        
        /** Creates an unshaded material with its variants (selected and/or editable) and adds them to the internal material list. They can then be accessed with [method get_material] and used in [method EditorNode3DGizmo.add_mesh] and [method EditorNode3DGizmo.add_lines]. Should not be overridden. */
        createMaterial(name: string, color: Color, billboard?: boolean /* = false */, onTop?: boolean /* = false */, useVertexColor?: boolean /* = false */): void
        
        /** Creates an icon material with its variants (selected and/or editable) and adds them to the internal material list. They can then be accessed with [method get_material] and used in [method EditorNode3DGizmo.add_unscaled_billboard]. Should not be overridden. */
        createIconMaterial(name: string, texture: Texture2D, onTop?: boolean /* = false */, color?: Color /* = new Color(1, 1, 1, 1) */): void
        
        /** Creates a handle material with its variants (selected and/or editable) and adds them to the internal material list. They can then be accessed with [method get_material] and used in [method EditorNode3DGizmo.add_handles]. Should not be overridden.  
         *  You can optionally provide a texture to use instead of the default icon.  
         */
        createHandleMaterial(name: string, billboard?: boolean /* = false */, texture?: Texture2D /* = undefined */): void
        
        /** Adds a new material to the internal material list for the plugin. It can then be accessed with [method get_material]. Should not be overridden. */
        addMaterial(name: string, material: StandardMaterial3D): void
        
        /** Gets material from the internal list of materials. If an [EditorNode3DGizmo] is provided, it will try to get the corresponding variant (selected and/or editable). */
        getMaterial(name: string, gizmo?: EditorNode3DGizmo /* = undefined */): null | StandardMaterial3D
    }
    /** Editor-only singleton that returns paths to various OS-specific data folders and files.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorpaths.html  
     */
    class EditorPaths extends GObject {
        constructor(identifier?: any)
        /** Returns the absolute path to the user's data folder. This folder should be used for  *persistent*  user data files such as installed export templates.  
         *  **Default paths per platform:**  
         *  [codeblock lang=text]  
         *  - Windows: %APPDATA%\Godot\                    (same as `get_config_dir()`)  
         *  - macOS: ~/Library/Application Support/Godot/  (same as `get_config_dir()`)  
         *  - Linux: ~/.local/share/godot/  
         *  [/codeblock]  
         */
        getDataDir(): string
        
        /** Returns the absolute path to the user's configuration folder. This folder should be used for  *persistent*  user configuration files.  
         *  **Default paths per platform:**  
         *  [codeblock lang=text]  
         *  - Windows: %APPDATA%\Godot\                    (same as `get_data_dir()`)  
         *  - macOS: ~/Library/Application Support/Godot/  (same as `get_data_dir()`)  
         *  - Linux: ~/.config/godot/  
         *  [/codeblock]  
         */
        getConfigDir(): string
        
        /** Returns the absolute path to the user's cache folder. This folder should be used for temporary data that can be removed safely whenever the editor is closed (such as generated resource thumbnails).  
         *  **Default paths per platform:**  
         *  [codeblock lang=text]  
         *  - Windows: %LOCALAPPDATA%\Godot\  
         *  - macOS: ~/Library/Caches/Godot/  
         *  - Linux: ~/.cache/godot/  
         *  [/codeblock]  
         */
        getCacheDir(): string
        
        /** Returns `true` if the editor is marked as self-contained, `false` otherwise. When self-contained mode is enabled, user configuration, data and cache files are saved in an `editor_data/` folder next to the editor binary. This makes portable usage easier and ensures the Godot editor minimizes file writes outside its own folder. Self-contained mode is not available for exported projects.  
         *  Self-contained mode can be enabled by creating a file named `._sc_` or `_sc_` in the same folder as the editor binary or macOS .app bundle while the editor is not running. See also [method get_self_contained_file].  
         *      
         *  **Note:** On macOS, quarantine flag should be manually removed before using self-contained mode, see [url=https://docs.godotengine.org/en/stable/tutorials/export/running_on_macos.html]Running on macOS[/url].  
         *      
         *  **Note:** On macOS, placing `_sc_` or any other file inside .app bundle will break digital signature and make it non-portable, consider placing it in the same folder as the .app bundle instead.  
         *      
         *  **Note:** The Steam release of Godot uses self-contained mode by default.  
         */
        isSelfContained(): boolean
        
        /** Returns the absolute path to the self-contained file that makes the current Godot editor instance be considered as self-contained. Returns an empty string if the current Godot editor instance isn't self-contained. See also [method is_self_contained]. */
        getSelfContainedFile(): string
        
        /** Returns the project-specific editor settings path. Projects all have a unique subdirectory inside the settings path where project-specific editor settings are saved. */
        getProjectSettingsDir(): string
    }
    namespace EditorPlugin {
        enum CustomControlContainer {
            ContainerToolbar = 0,
            ContainerSpatialEditorMenu = 1,
            ContainerSpatialEditorSideLeft = 2,
            ContainerSpatialEditorSideRight = 3,
            ContainerSpatialEditorBottom = 4,
            ContainerCanvasEditorMenu = 5,
            ContainerCanvasEditorSideLeft = 6,
            ContainerCanvasEditorSideRight = 7,
            ContainerCanvasEditorBottom = 8,
            ContainerInspectorBottom = 9,
            ContainerProjectSettingTabLeft = 10,
            ContainerProjectSettingTabRight = 11,
        }
        enum DockSlot {
            DockSlotLeftUl = 0,
            DockSlotLeftBl = 1,
            DockSlotLeftUr = 2,
            DockSlotLeftBr = 3,
            DockSlotRightUl = 4,
            DockSlotRightBl = 5,
            DockSlotRightUr = 6,
            DockSlotRightBr = 7,
            DockSlotMax = 8,
        }
        enum AfterGuiInput {
            AfterGuiInputPass = 0,
            AfterGuiInputStop = 1,
            AfterGuiInputCustom = 2,
        }
    }
    /** Used by the editor to extend its functionality.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorplugin.html  
     */
    class EditorPlugin<Map extends NodePathMap = any> extends Node<Map> {
        /** Main editor toolbar, next to play buttons. */
        static readonly CONTAINER_TOOLBAR = 0
        
        /** The toolbar that appears when 3D editor is active. */
        static readonly CONTAINER_SPATIAL_EDITOR_MENU = 1
        
        /** Left sidebar of the 3D editor. */
        static readonly CONTAINER_SPATIAL_EDITOR_SIDE_LEFT = 2
        
        /** Right sidebar of the 3D editor. */
        static readonly CONTAINER_SPATIAL_EDITOR_SIDE_RIGHT = 3
        
        /** Bottom panel of the 3D editor. */
        static readonly CONTAINER_SPATIAL_EDITOR_BOTTOM = 4
        
        /** The toolbar that appears when 2D editor is active. */
        static readonly CONTAINER_CANVAS_EDITOR_MENU = 5
        
        /** Left sidebar of the 2D editor. */
        static readonly CONTAINER_CANVAS_EDITOR_SIDE_LEFT = 6
        
        /** Right sidebar of the 2D editor. */
        static readonly CONTAINER_CANVAS_EDITOR_SIDE_RIGHT = 7
        
        /** Bottom panel of the 2D editor. */
        static readonly CONTAINER_CANVAS_EDITOR_BOTTOM = 8
        
        /** Bottom section of the inspector. */
        static readonly CONTAINER_INSPECTOR_BOTTOM = 9
        
        /** Tab of Project Settings dialog, to the left of other tabs. */
        static readonly CONTAINER_PROJECT_SETTING_TAB_LEFT = 10
        
        /** Tab of Project Settings dialog, to the right of other tabs. */
        static readonly CONTAINER_PROJECT_SETTING_TAB_RIGHT = 11
        
        /** Dock slot, left side, upper-left (empty in default layout). */
        static readonly DOCK_SLOT_LEFT_UL = 0
        
        /** Dock slot, left side, bottom-left (empty in default layout). */
        static readonly DOCK_SLOT_LEFT_BL = 1
        
        /** Dock slot, left side, upper-right (in default layout includes Scene and Import docks). */
        static readonly DOCK_SLOT_LEFT_UR = 2
        
        /** Dock slot, left side, bottom-right (in default layout includes FileSystem dock). */
        static readonly DOCK_SLOT_LEFT_BR = 3
        
        /** Dock slot, right side, upper-left (in default layout includes Inspector, Node, and History docks). */
        static readonly DOCK_SLOT_RIGHT_UL = 4
        
        /** Dock slot, right side, bottom-left (empty in default layout). */
        static readonly DOCK_SLOT_RIGHT_BL = 5
        
        /** Dock slot, right side, upper-right (empty in default layout). */
        static readonly DOCK_SLOT_RIGHT_UR = 6
        
        /** Dock slot, right side, bottom-right (empty in default layout). */
        static readonly DOCK_SLOT_RIGHT_BR = 7
        
        /** Represents the size of the [enum DockSlot] enum. */
        static readonly DOCK_SLOT_MAX = 8
        
        /** Forwards the [InputEvent] to other EditorPlugins. */
        static readonly AFTER_GUI_INPUT_PASS = 0
        
        /** Prevents the [InputEvent] from reaching other Editor classes. */
        static readonly AFTER_GUI_INPUT_STOP = 1
        
        /** Pass the [InputEvent] to other editor plugins except the main [Node3D] one. This can be used to prevent node selection changes and work with sub-gizmos instead. */
        static readonly AFTER_GUI_INPUT_CUSTOM = 2
        constructor(identifier?: any)
        
        /** Called when there is a root node in the current edited scene, [method _handles] is implemented, and an [InputEvent] happens in the 2D viewport. If this method returns `true`, [param event] is intercepted by this [EditorPlugin], otherwise [param event] is forwarded to other Editor classes.  
         *    
         *  This method must return `false` in order to forward the [InputEvent] to other Editor classes.  
         *    
         */
        /* gdvirtual */ _forwardCanvasGuiInput(event: InputEvent): boolean
        
        /** Called by the engine when the 2D editor's viewport is updated. [param viewport_control] is an overlay on top of the viewport and it can be used for drawing. You can update the viewport manually by calling [method update_overlays].  
         *    
         */
        /* gdvirtual */ _forwardCanvasDrawOverViewport(viewportControl: Control): void
        
        /** This method is the same as [method _forward_canvas_draw_over_viewport], except it draws on top of everything. Useful when you need an extra layer that shows over anything else.  
         *  You need to enable calling of this method by using [method set_force_draw_over_forwarding_enabled].  
         */
        /* gdvirtual */ _forwardCanvasForceDrawOverViewport(viewportControl: Control): void
        
        /** Called when there is a root node in the current edited scene, [method _handles] is implemented, and an [InputEvent] happens in the 3D viewport. The return value decides whether the [InputEvent] is consumed or forwarded to other [EditorPlugin]s. See [enum AfterGUIInput] for options.  
         *    
         *  This method must return [constant AFTER_GUI_INPUT_PASS] in order to forward the [InputEvent] to other Editor classes.  
         *    
         */
        /* gdvirtual */ _forward3DGuiInput(viewportCamera: Camera3D, event: InputEvent): int64
        
        /** Called by the engine when the 3D editor's viewport is updated. [param viewport_control] is an overlay on top of the viewport and it can be used for drawing. You can update the viewport manually by calling [method update_overlays].  
         *    
         */
        /* gdvirtual */ _forward3DDrawOverViewport(viewportControl: Control): void
        
        /** This method is the same as [method _forward_3d_draw_over_viewport], except it draws on top of everything. Useful when you need an extra layer that shows over anything else.  
         *  You need to enable calling of this method by using [method set_force_draw_over_forwarding_enabled].  
         */
        /* gdvirtual */ _forward3DForceDrawOverViewport(viewportControl: Control): void
        
        /** Override this method in your plugin to provide the name of the plugin when displayed in the Godot editor.  
         *  For main screen plugins, this appears at the top of the screen, to the right of the "2D", "3D", "Script", "Game", and "AssetLib" buttons.  
         */
        /* gdvirtual */ _getPluginName(): string
        
        /** Override this method in your plugin to return a [Texture2D] in order to give it an icon.  
         *  For main screen plugins, this appears at the top of the screen, to the right of the "2D", "3D", "Script", "Game", and "AssetLib" buttons.  
         *  Ideally, the plugin icon should be white with a transparent background and 16×16 pixels in size.  
         *    
         */
        /* gdvirtual */ _getPluginIcon(): null | Texture2D
        
        /** Returns `true` if this is a main screen editor plugin (it goes in the workspace selector together with **2D**, **3D**, **Script**, **Game**, and **AssetLib**).  
         *  When the plugin's workspace is selected, other main screen plugins will be hidden, but your plugin will not appear automatically. It needs to be added as a child of [method EditorInterface.get_editor_main_screen] and made visible inside [method _make_visible].  
         *  Use [method _get_plugin_name] and [method _get_plugin_icon] to customize the plugin button's appearance.  
         *    
         */
        /* gdvirtual */ _hasMainScreen(): boolean
        
        /** This function will be called when the editor is requested to become visible. It is used for plugins that edit a specific object type.  
         *  Remember that you have to manage the visibility of all your editor controls manually.  
         */
        /* gdvirtual */ _makeVisible(visible: boolean): void
        
        /** This function is used for plugins that edit specific object types (nodes or resources). It requests the editor to edit the given object.  
         *  [param object] can be `null` if the plugin was editing an object, but there is no longer any selected object handled by this plugin. It can be used to cleanup editing state.  
         */
        /* gdvirtual */ _edit(object: GObject): void
        
        /** Implement this function if your plugin edits a specific type of object (Resource or Node). If you return `true`, then you will get the functions [method _edit] and [method _make_visible] called when the editor requests them. If you have declared the methods [method _forward_canvas_gui_input] and [method _forward_3d_gui_input] these will be called too.  
         *      
         *  **Note:** Each plugin should handle only one type of objects at a time. If a plugin handles more types of objects and they are edited at the same time, it will result in errors.  
         */
        /* gdvirtual */ _handles(object: GObject): boolean
        
        /** Override this method to provide a state data you want to be saved, like view position, grid settings, folding, etc. This is used when saving the scene (so state is kept when opening it again) and for switching tabs (so state can be restored when the tab returns). This data is automatically saved for each scene in an `editstate` file in the editor metadata folder. If you want to store global (scene-independent) editor data for your plugin, you can use [method _get_window_layout] instead.  
         *  Use [method _set_state] to restore your saved state.  
         *      
         *  **Note:** This method should not be used to save important settings that should persist with the project.  
         *      
         *  **Note:** You must implement [method _get_plugin_name] for the state to be stored and restored correctly.  
         *    
         */
        /* gdvirtual */ _getState(): GDictionary
        
        /** Restore the state saved by [method _get_state]. This method is called when the current scene tab is changed in the editor.  
         *      
         *  **Note:** Your plugin must implement [method _get_plugin_name], otherwise it will not be recognized and this method will not be called.  
         *    
         */
        /* gdvirtual */ _setState(state: GDictionary): void
        
        /** Clear all the state and reset the object being edited to zero. This ensures your plugin does not keep editing a currently existing node, or a node from the wrong scene. */
        /* gdvirtual */ _clear(): void
        
        /** Override this method to provide a custom message that lists unsaved changes. The editor will call this method when exiting or when closing a scene, and display the returned string in a confirmation dialog. Return empty string if the plugin has no unsaved changes.  
         *  When closing a scene, [param for_scene] is the path to the scene being closed. You can use it to handle built-in resources in that scene.  
         *  If the user confirms saving, [method _save_external_data] will be called, before closing the editor.  
         *    
         *  If the plugin has no scene-specific changes, you can ignore the calls when closing scenes:  
         *    
         */
        /* gdvirtual */ _getUnsavedStatus(forScene: string): string
        
        /** This method is called after the editor saves the project or when it's closed. It asks the plugin to save edited external scenes/resources. */
        /* gdvirtual */ _saveExternalData(): void
        
        /** This method is called when the editor is about to save the project, switch to another tab, etc. It asks the plugin to apply any pending state changes to ensure consistency.  
         *  This is used, for example, in shader editors to let the plugin know that it must apply the shader code being written by the user to the object.  
         */
        /* gdvirtual */ _applyChanges(): void
        
        /** This is for editors that edit script-based objects. You can return a list of breakpoints in the format (`script:line`), for example: `res://path_to_script.gd:25`. */
        /* gdvirtual */ _getBreakpoints(): PackedStringArray
        
        /** Restore the plugin GUI layout and data saved by [method _get_window_layout]. This method is called for every plugin on editor startup. Use the provided [param configuration] file to read your saved data.  
         *    
         */
        /* gdvirtual */ _setWindowLayout(configuration: ConfigFile): void
        
        /** Override this method to provide the GUI layout of the plugin or any other data you want to be stored. This is used to save the project's editor layout when [method queue_save_layout] is called or the editor layout was changed (for example changing the position of a dock). The data is stored in the `editor_layout.cfg` file in the editor metadata directory.  
         *  Use [method _set_window_layout] to restore your saved layout.  
         *    
         */
        /* gdvirtual */ _getWindowLayout(configuration: ConfigFile): void
        
        /** This method is called when the editor is about to run the project. The plugin can then perform required operations before the project runs.  
         *  This method must return a boolean. If this method returns `false`, the project will not run. The run is aborted immediately, so this also prevents all other plugins' [method _build] methods from running.  
         */
        /* gdvirtual */ _build(): boolean
        
        /** Called by the engine when the user enables the [EditorPlugin] in the Plugin tab of the project settings window. */
        /* gdvirtual */ _enablePlugin(): void
        
        /** Called by the engine when the user disables the [EditorPlugin] in the Plugin tab of the project settings window. */
        /* gdvirtual */ _disablePlugin(): void
        
        /** Adds a custom control to a container (see [enum CustomControlContainer]). There are many locations where custom controls can be added in the editor UI.  
         *  Please remember that you have to manage the visibility of your custom controls yourself (and likely hide it after adding it).  
         *  When your plugin is deactivated, make sure to remove your custom control with [method remove_control_from_container] and free it with [method Node.queue_free].  
         */
        addControlToContainer(container: EditorPlugin.CustomControlContainer, control: Control): void
        
        /** Adds a control to the bottom panel (together with Output, Debug, Animation, etc.). Returns a reference to the button added. It's up to you to hide/show the button when needed. When your plugin is deactivated, make sure to remove your custom control with [method remove_control_from_bottom_panel] and free it with [method Node.queue_free].  
         *  Optionally, you can specify a shortcut parameter. When pressed, this shortcut will toggle the bottom panel's visibility. See the default editor bottom panel shortcuts in the Editor Settings for inspiration. Per convention, they all use [kbd]Alt[/kbd] modifier.  
         */
        addControlToBottomPanel(control: Control, title: string, shortcut?: Shortcut /* = undefined */): null | Button
        
        /** Adds the control to a specific dock slot (see [enum DockSlot] for options).  
         *  If the dock is repositioned and as long as the plugin is active, the editor will save the dock position on further sessions.  
         *  When your plugin is deactivated, make sure to remove your custom control with [method remove_control_from_docks] and free it with [method Node.queue_free].  
         *  Optionally, you can specify a shortcut parameter. When pressed, this shortcut will open and focus the dock.  
         */
        addControlToDock(slot: EditorPlugin.DockSlot, control: Control, shortcut?: Shortcut /* = undefined */): void
        
        /** Removes the control from the dock. You have to manually [method Node.queue_free] the control. */
        removeControlFromDocks(control: Control): void
        
        /** Removes the control from the bottom panel. You have to manually [method Node.queue_free] the control. */
        removeControlFromBottomPanel(control: Control): void
        
        /** Removes the control from the specified container. You have to manually [method Node.queue_free] the control. */
        removeControlFromContainer(container: EditorPlugin.CustomControlContainer, control: Control): void
        
        /** Sets the tab icon for the given control in a dock slot. Setting to `null` removes the icon. */
        setDockTabIcon(control: Control, icon: Texture2D): void
        
        /** Adds a custom menu item to **Project > Tools** named [param name]. When clicked, the provided [param callable] will be called. */
        addToolMenuItem(name: string, callable: Callable): void
        
        /** Adds a custom [PopupMenu] submenu under **Project > Tools >** [param name]. Use [method remove_tool_menu_item] on plugin clean up to remove the menu. */
        addToolSubmenuItem(name: string, submenu: PopupMenu): void
        
        /** Removes a menu [param name] from **Project > Tools**. */
        removeToolMenuItem(name: string): void
        
        /** Returns the [PopupMenu] under **Scene > Export As...**. */
        getExportAsMenu(): null | PopupMenu
        
        /** Adds a custom type, which will appear in the list of nodes or resources.  
         *  When a given node or resource is selected, the base type will be instantiated (e.g. "Node3D", "Control", "Resource"), then the script will be loaded and set to this object.  
         *      
         *  **Note:** The base type is the base engine class which this type's class hierarchy inherits, not any custom type parent classes.  
         *  You can use the virtual method [method _handles] to check if your custom object is being edited by checking the script or using the `is` keyword.  
         *  During run-time, this will be a simple object with a script so this function does not need to be called then.  
         *      
         *  **Note:** Custom types added this way are not true classes. They are just a helper to create a node with specific script.  
         */
        addCustomType(type: string, base: string, script: Script, icon: Texture2D): void
        
        /** Removes a custom type added by [method add_custom_type]. */
        removeCustomType(type: string): void
        
        /** Adds a script at [param path] to the Autoload list as [param name]. */
        addAutoloadSingleton(name: string, path: string): void
        
        /** Removes an Autoload [param name] from the list. */
        removeAutoloadSingleton(name: string): void
        
        /** Updates the overlays of the 2D and 3D editor viewport. Causes methods [method _forward_canvas_draw_over_viewport], [method _forward_canvas_force_draw_over_viewport], [method _forward_3d_draw_over_viewport] and [method _forward_3d_force_draw_over_viewport] to be called. */
        updateOverlays(): int64
        
        /** Makes a specific item in the bottom panel visible. */
        makeBottomPanelItemVisible(item: Control): void
        
        /** Minimizes the bottom panel. */
        hideBottomPanel(): void
        
        /** Gets the undo/redo object. Most actions in the editor can be undoable, so use this object to make sure this happens when it's worth it. */
        getUndoRedo(): null | EditorUndoRedoManager
        
        /** Hooks a callback into the undo/redo action creation when a property is modified in the inspector. This allows, for example, to save other properties that may be lost when a given property is modified.  
         *  The callback should have 4 arguments: [Object] `undo_redo`, [Object] `modified_object`, [String] `property` and [Variant] `new_value`. They are, respectively, the [UndoRedo] object used by the inspector, the currently modified object, the name of the modified property and the new value the property is about to take.  
         */
        addUndoRedoInspectorHookCallback(callable: Callable): void
        
        /** Removes a callback previously added by [method add_undo_redo_inspector_hook_callback]. */
        removeUndoRedoInspectorHookCallback(callable: Callable): void
        
        /** Queue save the project's editor layout. */
        queueSaveLayout(): void
        
        /** Registers a custom translation parser plugin for extracting translatable strings from custom files. */
        addTranslationParserPlugin(parser: EditorTranslationParserPlugin): void
        
        /** Removes a custom translation parser plugin registered by [method add_translation_parser_plugin]. */
        removeTranslationParserPlugin(parser: EditorTranslationParserPlugin): void
        
        /** Registers a new [EditorImportPlugin]. Import plugins are used to import custom and unsupported assets as a custom [Resource] type.  
         *  If [param first_priority] is `true`, the new import plugin is inserted first in the list and takes precedence over pre-existing plugins.  
         *      
         *  **Note:** If you want to import custom 3D asset formats use [method add_scene_format_importer_plugin] instead.  
         *  See [method add_inspector_plugin] for an example of how to register a plugin.  
         */
        addImportPlugin(importer: EditorImportPlugin, firstPriority?: boolean /* = false */): void
        
        /** Removes an import plugin registered by [method add_import_plugin]. */
        removeImportPlugin(importer: EditorImportPlugin): void
        
        /** Registers a new [EditorSceneFormatImporter]. Scene importers are used to import custom 3D asset formats as scenes.  
         *  If [param first_priority] is `true`, the new import plugin is inserted first in the list and takes precedence over pre-existing plugins.  
         */
        addSceneFormatImporterPlugin(sceneFormatImporter: EditorSceneFormatImporter, firstPriority?: boolean /* = false */): void
        
        /** Removes a scene format importer registered by [method add_scene_format_importer_plugin]. */
        removeSceneFormatImporterPlugin(sceneFormatImporter: EditorSceneFormatImporter): void
        
        /** Add a [EditorScenePostImportPlugin]. These plugins allow customizing the import process of 3D assets by adding new options to the import dialogs.  
         *  If [param first_priority] is `true`, the new import plugin is inserted first in the list and takes precedence over pre-existing plugins.  
         */
        addScenePostImportPlugin(sceneImportPlugin: EditorScenePostImportPlugin, firstPriority?: boolean /* = false */): void
        
        /** Remove the [EditorScenePostImportPlugin], added with [method add_scene_post_import_plugin]. */
        removeScenePostImportPlugin(sceneImportPlugin: EditorScenePostImportPlugin): void
        
        /** Registers a new [EditorExportPlugin]. Export plugins are used to perform tasks when the project is being exported.  
         *  See [method add_inspector_plugin] for an example of how to register a plugin.  
         */
        addExportPlugin(plugin: EditorExportPlugin): void
        
        /** Removes an export plugin registered by [method add_export_plugin]. */
        removeExportPlugin(plugin: EditorExportPlugin): void
        
        /** Registers a new [EditorExportPlatform]. Export platforms provides functionality of exporting to the specific platform. */
        addExportPlatform(platform: EditorExportPlatform): void
        
        /** Removes an export platform registered by [method add_export_platform]. */
        removeExportPlatform(platform: EditorExportPlatform): void
        
        /** Registers a new [EditorNode3DGizmoPlugin]. Gizmo plugins are used to add custom gizmos to the 3D preview viewport for a [Node3D].  
         *  See [method add_inspector_plugin] for an example of how to register a plugin.  
         */
        addNode3DGizmoPlugin(plugin: EditorNode3DGizmoPlugin): void
        
        /** Removes a gizmo plugin registered by [method add_node_3d_gizmo_plugin]. */
        removeNode3DGizmoPlugin(plugin: EditorNode3DGizmoPlugin): void
        
        /** Registers a new [EditorInspectorPlugin]. Inspector plugins are used to extend [EditorInspector] and provide custom configuration tools for your object's properties.  
         *      
         *  **Note:** Always use [method remove_inspector_plugin] to remove the registered [EditorInspectorPlugin] when your [EditorPlugin] is disabled to prevent leaks and an unexpected behavior.  
         *    
         */
        addInspectorPlugin(plugin: EditorInspectorPlugin): void
        
        /** Removes an inspector plugin registered by [method add_inspector_plugin]. */
        removeInspectorPlugin(plugin: EditorInspectorPlugin): void
        
        /** Registers a new [EditorResourceConversionPlugin]. Resource conversion plugins are used to add custom resource converters to the editor inspector.  
         *  See [EditorResourceConversionPlugin] for an example of how to create a resource conversion plugin.  
         */
        addResourceConversionPlugin(plugin: EditorResourceConversionPlugin): void
        
        /** Removes a resource conversion plugin registered by [method add_resource_conversion_plugin]. */
        removeResourceConversionPlugin(plugin: EditorResourceConversionPlugin): void
        
        /** Use this method if you always want to receive inputs from 3D view screen inside [method _forward_3d_gui_input]. It might be especially usable if your plugin will want to use raycast in the scene. */
        setInputEventForwardingAlwaysEnabled(): void
        
        /** Enables calling of [method _forward_canvas_force_draw_over_viewport] for the 2D editor and [method _forward_3d_force_draw_over_viewport] for the 3D editor when their viewports are updated. You need to call this method only once and it will work permanently for this plugin. */
        setForceDrawOverForwardingEnabled(): void
        
        /** Adds a plugin to the context menu. [param slot] is the context menu where the plugin will be added.  
         *  See [enum EditorContextMenuPlugin.ContextMenuSlot] for available context menus. A plugin instance can belong only to a single context menu slot.  
         */
        addContextMenuPlugin(slot: EditorContextMenuPlugin.ContextMenuSlot, plugin: EditorContextMenuPlugin): void
        
        /** Removes the specified context menu plugin. */
        removeContextMenuPlugin(plugin: EditorContextMenuPlugin): void
        
        /** Returns the [EditorInterface] singleton instance. */
        getEditorInterface(): null | EditorInterface
        
        /** Gets the Editor's dialog used for making scripts.  
         *      
         *  **Note:** Users can configure it before use.  
         *  **Warning:** Removing and freeing this node will render a part of the editor useless and may cause a crash.  
         */
        getScriptCreateDialog(): null | ScriptCreateDialog
        
        /** Adds a [Script] as debugger plugin to the Debugger. The script must extend [EditorDebuggerPlugin]. */
        addDebuggerPlugin(script: EditorDebuggerPlugin): void
        
        /** Removes the debugger plugin with given script from the Debugger. */
        removeDebuggerPlugin(script: EditorDebuggerPlugin): void
        
        /** Provide the version of the plugin declared in the `plugin.cfg` config file. */
        getPluginVersion(): string
        
        /** Emitted when the scene is changed in the editor. The argument will return the root node of the scene that has just become active. If this scene is new and empty, the argument will be `null`. */
        readonly sceneChanged: Signal<(sceneRoot: Node) => void>
        
        /** Emitted when user closes a scene. The argument is a file path to the closed scene. */
        readonly sceneClosed: Signal<(filepath: string) => void>
        
        /** Emitted when user changes the workspace (**2D**, **3D**, **Script**, **Game**, **AssetLib**). Also works with custom screens defined by plugins. */
        readonly mainScreenChanged: Signal<(screenName: string) => void>
        
        /** Emitted when the given [param resource] was saved on disc. See also [signal scene_saved]. */
        readonly resourceSaved: Signal<(resource: Resource) => void>
        
        /** Emitted when a scene was saved on disc. The argument is a file path to the saved scene. See also [signal resource_saved]. */
        readonly sceneSaved: Signal<(filepath: string) => void>
        
        /** Emitted when any project setting has changed. */
        readonly projectSettingsChanged: Signal<() => void>
    }
    /** Custom control for editing properties that can be added to the [EditorInspector].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorproperty.html  
     */
    class EditorProperty<Map extends NodePathMap = any> extends Container<Map> {
        constructor(identifier?: any)
        /** When this virtual function is called, you must update your editor. */
        /* gdvirtual */ _updateProperty(): void
        
        /** Called when the read-only status of the property is changed. It may be used to change custom controls into a read-only or modifiable state. */
        /* gdvirtual */ _setReadOnly(readOnly: boolean): void
        
        /** Gets the edited property. If your editor is for a single property (added via [method EditorInspectorPlugin._parse_property]), then this will return the property. */
        getEditedProperty(): StringName
        
        /** Gets the edited object. */
        getEditedObject(): null | GObject
        
        /** Forces refresh of the property display. */
        updateProperty(): void
        
        /** If any of the controls added can gain keyboard focus, add it here. This ensures that focus will be restored if the inspector is refreshed. */
        addFocusable(control: Control): void
        
        /** Puts the [param editor] control below the property label. The control must be previously added using [method Node.add_child]. */
        setBottomEditor(editor: Control): void
        
        /** Draw property as not selected. Used by the inspector. */
        deselect(): void
        
        /** Returns `true` if property is drawn as selected. Used by the inspector. */
        isSelected(): boolean
        
        /** Draw property as selected. Used by the inspector. */
        select(focusable?: int64 /* = -1 */): void
        
        /** Assigns object and property to edit. */
        setObjectAndProperty(object: GObject, property: StringName): void
        
        /** Used by the inspector, set to a control that will be used as a reference to calculate the size of the label. */
        setLabelReference(control: Control): void
        
        /** If one or several properties have changed, this must be called. [param field] is used in case your editor can modify fields separately (as an example, Vector3.x). The [param changing] argument avoids the editor requesting this property to be refreshed (leave as `false` if unsure). */
        emitChanged(property: StringName, value: any, field?: StringName /* = '' */, changing?: boolean /* = false */): void
        _updateEditorPropertyStatus(): void
        
        /** Set this property to change the label (if you want to show one). */
        get label(): string
        set label(value: string)
        
        /** Used by the inspector, set to `true` when the property is read-only. */
        get readOnly(): boolean
        set readOnly(value: boolean)
        
        /** Used by the inspector, set to `true` when the property label is drawn. */
        get drawLabel(): boolean
        set drawLabel(value: boolean)
        
        /** Used by the inspector, set to `true` when the property background is drawn. */
        get drawBackground(): boolean
        set drawBackground(value: boolean)
        
        /** Used by the inspector, set to `true` when the property is checkable. */
        get checkable(): boolean
        set checkable(value: boolean)
        
        /** Used by the inspector, set to `true` when the property is checked. */
        get checked(): boolean
        set checked(value: boolean)
        
        /** Used by the inspector, set to `true` when the property is drawn with the editor theme's warning color. This is used for editable children's properties. */
        get drawWarning(): boolean
        set drawWarning(value: boolean)
        
        /** Used by the inspector, set to `true` when the property can add keys for animation. */
        get keying(): boolean
        set keying(value: boolean)
        
        /** Used by the inspector, set to `true` when the property can be deleted by the user. */
        get deletable(): boolean
        set deletable(value: boolean)
        
        /** Used by the inspector, set to `true` when the property is selectable. */
        get selectable(): boolean
        set selectable(value: boolean)
        
        /** Used by the inspector, set to `true` when the property is using folding. */
        get useFolding(): boolean
        set useFolding(value: boolean)
        
        /** Space distribution ratio between the label and the editing field. */
        get nameSplitRatio(): float64
        set nameSplitRatio(value: float64)
        
        /** Do not emit this manually, use the [method emit_changed] method instead. */
        readonly propertyChanged: Signal<(property: StringName, value: any, field: StringName, changing: boolean) => void>
        
        /** Emit it if you want multiple properties modified at the same time. Do not use if added via [method EditorInspectorPlugin._parse_property]. */
        readonly multiplePropertiesChanged: Signal<(properties: PackedStringArray, value: GArray) => void>
        
        /** Emit it if you want to add this value as an animation key (check for keying being enabled first). */
        readonly propertyKeyed: Signal<(property: StringName) => void>
        
        /** Emitted when a property was deleted. Used internally. */
        readonly propertyDeleted: Signal<(property: StringName) => void>
        
        /** Emit it if you want to key a property with a single value. */
        readonly propertyKeyedWithValue: Signal<(property: StringName, value: any) => void>
        
        /** Emitted when a property was checked. Used internally. */
        readonly propertyChecked: Signal<(property: StringName, checked: boolean) => void>
        
        /** Emit it if you want to mark a property as favorited, making it appear at the top of the inspector. */
        readonly propertyFavorited: Signal<(property: StringName, favorited: boolean) => void>
        
        /** Emit it if you want to mark (or unmark) the value of a property for being saved regardless of being equal to the default value.  
         *  The default value is the one the property will get when the node is just instantiated and can come from an ancestor scene in the inheritance/instantiation chain, a script or a builtin class.  
         */
        readonly propertyPinned: Signal<(property: StringName, pinned: boolean) => void>
        
        /** Emitted when the revertability (i.e., whether it has a non-default value and thus is displayed with a revert icon) of a property has changed. */
        readonly propertyCanRevertChanged: Signal<(property: StringName, canRevert: boolean) => void>
        
        /** If you want a sub-resource to be edited, emit this signal with the resource. */
        readonly resourceSelected: Signal<(path: string, resource: Resource) => void>
        
        /** Used by sub-inspectors. Emit it if what was selected was an Object ID. */
        readonly objectIdSelected: Signal<(property: StringName, id: int64) => void>
        
        /** Emitted when selected. Used internally. */
        readonly selected: Signal<(path: string, focusableIdx: int64) => void>
    }
    /** Plugin for adding custom converters from one resource format to another in the editor resource picker context menu; for example, converting a [StandardMaterial3D] to a [ShaderMaterial].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorresourceconversionplugin.html  
     */
    class EditorResourceConversionPlugin extends RefCounted {
        constructor(identifier?: any)
        /** Returns the class name of the target type of [Resource] that this plugin converts source resources to. */
        /* gdvirtual */ _convertsTo(): string
        
        /** Called to determine whether a particular [Resource] can be converted to the target resource type by this plugin. */
        /* gdvirtual */ _handles(resource: Resource): boolean
        
        /** Takes an input [Resource] and converts it to the type given in [method _converts_to]. The returned [Resource] is the result of the conversion, and the input [Resource] remains unchanged. */
        /* gdvirtual */ _convert(resource: Resource): null | Resource
    }
    /** Godot editor's control for selecting [Resource] type properties.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorresourcepicker.html  
     */
    class EditorResourcePicker<Map extends NodePathMap = any> extends HBoxContainer<Map> {
        constructor(identifier?: any)
        /** This virtual method is called when updating the context menu of [EditorResourcePicker]. Implement this method to override the "New ..." items with your own options. [param menu_node] is a reference to the [PopupMenu] node.  
         *      
         *  **Note:** Implement [method _handle_menu_selected] to handle these custom items.  
         */
        /* gdvirtual */ _setCreateOptions(menuNode: GObject): void
        
        /** This virtual method can be implemented to handle context menu items not handled by default. See [method _set_create_options]. */
        /* gdvirtual */ _handleMenuSelected(id: int64): boolean
        _updateResourcePreview(_unnamedArg0: string, _unnamedArg1: Texture2D, _unnamedArg2: Texture2D, _unnamedArg3: int64): void
        
        /** Returns a list of all allowed types and subtypes corresponding to the [member base_type]. If the [member base_type] is empty, an empty list is returned. */
        getAllowedTypes(): PackedStringArray
        
        /** Sets the toggle mode state for the main button. Works only if [member toggle_mode] is set to `true`. */
        setTogglePressed(pressed: boolean): void
        
        /** The base type of allowed resource types. Can be a comma-separated list of several options. */
        get baseType(): string
        set baseType(value: string)
        
        /** The edited resource value. */
        get editedResource(): null | Resource
        set editedResource(value: null | Resource)
        
        /** If `true`, the value can be selected and edited. */
        get editable(): boolean
        set editable(value: boolean)
        
        /** If `true`, the main button with the resource preview works in the toggle mode. Use [method set_toggle_pressed] to manually set the state. */
        get toggleMode(): boolean
        set toggleMode(value: boolean)
        
        /** Emitted when the resource value was set and user clicked to edit it. When [param inspect] is `true`, the signal was caused by the context menu "Edit" or "Inspect" option. */
        readonly resourceSelected: Signal<(resource: Resource, inspect: boolean) => void>
        
        /** Emitted when the value of the edited resource was changed. */
        readonly resourceChanged: Signal<(resource: Resource) => void>
    }
    /** A node used to generate previews of resources or files.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorresourcepreview.html  
     */
    class EditorResourcePreview<Map extends NodePathMap = any> extends Node<Map> {
        constructor(identifier?: any)
        /** Queue a resource file located at [param path] for preview. Once the preview is ready, the [param receiver]'s [param receiver_func] will be called. The [param receiver_func] must take the following four arguments: [String] path, [Texture2D] preview, [Texture2D] thumbnail_preview, [Variant] userdata. [param userdata] can be anything, and will be returned when [param receiver_func] is called.  
         *      
         *  **Note:** If it was not possible to create the preview the [param receiver_func] will still be called, but the preview will be `null`.  
         */
        queueResourcePreview(path: string, receiver: GObject, receiverFunc: StringName, userdata: any): void
        
        /** Queue the [param resource] being edited for preview. Once the preview is ready, the [param receiver]'s [param receiver_func] will be called. The [param receiver_func] must take the following four arguments: [String] path, [Texture2D] preview, [Texture2D] thumbnail_preview, [Variant] userdata. [param userdata] can be anything, and will be returned when [param receiver_func] is called.  
         *      
         *  **Note:** If it was not possible to create the preview the [param receiver_func] will still be called, but the preview will be `null`.  
         */
        queueEditedResourcePreview(resource: Resource, receiver: GObject, receiverFunc: StringName, userdata: any): void
        
        /** Create an own, custom preview generator. */
        addPreviewGenerator(generator: EditorResourcePreviewGenerator): void
        
        /** Removes a custom preview generator. */
        removePreviewGenerator(generator: EditorResourcePreviewGenerator): void
        
        /** Check if the resource changed, if so, it will be invalidated and the corresponding signal emitted. */
        checkForInvalidation(path: string): void
        
        /** Emitted if a preview was invalidated (changed). [param path] corresponds to the path of the preview. */
        readonly previewInvalidated: Signal<(path: string) => void>
    }
    /** Custom generator of previews.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorresourcepreviewgenerator.html  
     */
    class EditorResourcePreviewGenerator extends RefCounted {
        constructor(identifier?: any)
        /** Returns `true` if your generator supports the resource of type [param type]. */
        /* gdvirtual */ _handles(type: string): boolean
        
        /** Generate a preview from a given resource with the specified size. This must always be implemented.  
         *  Returning `null` is an OK way to fail and let another generator take care.  
         *  Care must be taken because this function is always called from a thread (not the main thread).  
         *  [param metadata] dictionary can be modified to store file-specific metadata that can be used in [method EditorResourceTooltipPlugin._make_tooltip_for_path] (like image size, sample length etc.).  
         */
        /* gdvirtual */ _generate(resource: Resource, size: Vector2I, metadata: GDictionary): null | Texture2D
        
        /** Generate a preview directly from a path with the specified size. Implementing this is optional, as default code will load and call [method _generate].  
         *  Returning `null` is an OK way to fail and let another generator take care.  
         *  Care must be taken because this function is always called from a thread (not the main thread).  
         *  [param metadata] dictionary can be modified to store file-specific metadata that can be used in [method EditorResourceTooltipPlugin._make_tooltip_for_path] (like image size, sample length etc.).  
         */
        /* gdvirtual */ _generateFromPath(path: string, size: Vector2I, metadata: GDictionary): null | Texture2D
        
        /** If this function returns `true`, the generator will automatically generate the small previews from the normal preview texture generated by the methods [method _generate] or [method _generate_from_path].  
         *  By default, it returns `false`.  
         */
        /* gdvirtual */ _generateSmallPreviewAutomatically(): boolean
        
        /** If this function returns `true`, the generator will call [method _generate] or [method _generate_from_path] for small previews as well.  
         *  By default, it returns `false`.  
         */
        /* gdvirtual */ _canGenerateSmallPreview(): boolean
    }
    /** A plugin that advanced tooltip for its handled resource type.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorresourcetooltipplugin.html  
     */
    class EditorResourceTooltipPlugin extends RefCounted {
        constructor(identifier?: any)
        /** Return `true` if the plugin is going to handle the given [Resource] [param type]. */
        /* gdvirtual */ _handles(type: string): boolean
        
        /** Create and return a tooltip that will be displayed when the user hovers a resource under the given [param path] in filesystem dock.  
         *  The [param metadata] dictionary is provided by preview generator (see [method EditorResourcePreviewGenerator._generate]).  
         *  [param base] is the base default tooltip, which is a [VBoxContainer] with a file name, type and size labels. If another plugin handled the same file type, [param base] will be output from the previous plugin. For best result, make sure the base tooltip is part of the returned [Control].  
         *      
         *  **Note:** It's unadvised to use [method ResourceLoader.load], especially with heavy resources like models or textures, because it will make the editor unresponsive when creating the tooltip. You can use [method request_thumbnail] if you want to display a preview in your tooltip.  
         *      
         *  **Note:** If you decide to discard the [param base], make sure to call [method Node.queue_free], because it's not freed automatically.  
         *    
         */
        /* gdvirtual */ _makeTooltipForPath(path: string, metadata: GDictionary, base: Control): null | Control
        _thumbnailReady(_unnamedArg0: string, _unnamedArg1: Texture2D, _unnamedArg2: Texture2D, _unnamedArg3: any): void
        
        /** Requests a thumbnail for the given [TextureRect]. The thumbnail is created asynchronously by [EditorResourcePreview] and automatically set when available. */
        requestThumbnail(path: string, control: TextureRect): void
    }
    /** Imports scenes from third-parties' 3D files.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorsceneformatimporter.html  
     */
    class EditorSceneFormatImporter extends RefCounted {
        static readonly IMPORT_SCENE = 1
        static readonly IMPORT_ANIMATION = 2
        static readonly IMPORT_FAIL_ON_MISSING_DEPENDENCIES = 4
        static readonly IMPORT_GENERATE_TANGENT_ARRAYS = 8
        static readonly IMPORT_USE_NAMED_SKIN_BINDS = 16
        static readonly IMPORT_DISCARD_MESHES_AND_MATERIALS = 32
        static readonly IMPORT_FORCE_DISABLE_MESH_COMPRESSION = 64
        constructor(identifier?: any)
        
        /** Return supported file extensions for this scene importer. */
        /* gdvirtual */ _getExtensions(): PackedStringArray
        
        /** Perform the bulk of the scene import logic here, for example using [GLTFDocument] or [FBXDocument]. */
        /* gdvirtual */ _importScene(path: string, flags: int64, options: GDictionary): null | GObject
        
        /** Override to add general import options. These will appear in the main import dock on the editor. Add options via [method add_import_option] and [method add_import_option_advanced].  
         *      
         *  **Note:** All [EditorSceneFormatImporter] and [EditorScenePostImportPlugin] instances will add options for all files. It is good practice to check the file extension when [param path] is non-empty.  
         *  When the user is editing project settings, [param path] will be empty. It is recommended to add all options when [param path] is empty to allow the user to customize Import Defaults.  
         */
        /* gdvirtual */ _getImportOptions(path: string): void
        
        /** Should return `true` to show the given option, `false` to hide the given option, or `null` to ignore. */
        /* gdvirtual */ _getOptionVisibility(path: string, forAnimation: boolean, option: string): any
        
        /** Add a specific import option (name and default value only). This function can only be called from [method _get_import_options]. */
        addImportOption(name: string, value: any): void
        
        /** Add a specific import option. This function can only be called from [method _get_import_options]. */
        addImportOptionAdvanced(type: Variant.Type, name: string, defaultValue: any, hint?: PropertyHint /* = 0 */, hintString?: string /* = '' */, usageFlags?: int64 /* = 6 */): void
    }
    /** Importer for Blender's `.blend` scene file format.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorsceneformatimporterblend.html  
     */
    class EditorSceneFormatImporterBlend extends EditorSceneFormatImporter {
        constructor(identifier?: any)
    }
    class EditorSceneFormatImporterFbx2Gltf extends EditorSceneFormatImporter {
        constructor(identifier?: any)
    }
    class EditorSceneFormatImporterGltf extends EditorSceneFormatImporter {
        constructor(identifier?: any)
    }
    class EditorSceneFormatImporterUfbx extends EditorSceneFormatImporter {
        constructor(identifier?: any)
    }
    /** Post-processes scenes after import.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorscenepostimport.html  
     */
    class EditorScenePostImport extends RefCounted {
        constructor(identifier?: any)
        /** Called after the scene was imported. This method must return the modified version of the scene. */
        /* gdvirtual */ _postImport(scene: Node): null | GObject
        
        /** Returns the source file path which got imported (e.g. `res://scene.dae`). */
        getSourceFile(): string
    }
    namespace EditorScenePostImportPlugin {
        enum InternalImportCategory {
            InternalImportCategoryNode = 0,
            InternalImportCategoryMesh3DNode = 1,
            InternalImportCategoryMesh = 2,
            InternalImportCategoryMaterial = 3,
            InternalImportCategoryAnimation = 4,
            InternalImportCategoryAnimationNode = 5,
            InternalImportCategorySkeleton3DNode = 6,
            InternalImportCategoryMax = 7,
        }
    }
    /** Plugin to control and modifying the process of importing a scene.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorscenepostimportplugin.html  
     */
    class EditorScenePostImportPlugin extends RefCounted {
        static readonly INTERNAL_IMPORT_CATEGORY_NODE = 0
        static readonly INTERNAL_IMPORT_CATEGORY_MESH_3D_NODE = 1
        static readonly INTERNAL_IMPORT_CATEGORY_MESH = 2
        static readonly INTERNAL_IMPORT_CATEGORY_MATERIAL = 3
        static readonly INTERNAL_IMPORT_CATEGORY_ANIMATION = 4
        static readonly INTERNAL_IMPORT_CATEGORY_ANIMATION_NODE = 5
        static readonly INTERNAL_IMPORT_CATEGORY_SKELETON_3D_NODE = 6
        static readonly INTERNAL_IMPORT_CATEGORY_MAX = 7
        constructor(identifier?: any)
        
        /** Override to add internal import options. These will appear in the 3D scene import dialog. Add options via [method add_import_option] and [method add_import_option_advanced]. */
        /* gdvirtual */ _getInternalImportOptions(category: int64): void
        
        /** Should return `true` to show the given option, `false` to hide the given option, or `null` to ignore. */
        /* gdvirtual */ _getInternalOptionVisibility(category: int64, forAnimation: boolean, option: string): any
        
        /** Should return `true` if the 3D view of the import dialog needs to update when changing the given option. */
        /* gdvirtual */ _getInternalOptionUpdateViewRequired(category: int64, option: string): any
        
        /** Process a specific node or resource for a given category. */
        /* gdvirtual */ _internalProcess(category: int64, baseNode: Node, node: Node, resource: Resource): void
        
        /** Override to add general import options. These will appear in the main import dock on the editor. Add options via [method add_import_option] and [method add_import_option_advanced]. */
        /* gdvirtual */ _getImportOptions(path: string): void
        
        /** Should return `true` to show the given option, `false` to hide the given option, or `null` to ignore. */
        /* gdvirtual */ _getOptionVisibility(path: string, forAnimation: boolean, option: string): any
        
        /** Pre Process the scene. This function is called right after the scene format loader loaded the scene and no changes have been made.  
         *  Pre process may be used to adjust internal import options in the `"nodes"`, `"meshes"`, `"animations"` or `"materials"` keys inside `get_option_value("_subresources")`.  
         */
        /* gdvirtual */ _preProcess(scene: Node): void
        
        /** Post process the scene. This function is called after the final scene has been configured. */
        /* gdvirtual */ _postProcess(scene: Node): void
        
        /** Query the value of an option. This function can only be called from those querying visibility, or processing. */
        getOptionValue(name: StringName): any
        
        /** Add a specific import option (name and default value only). This function can only be called from [method _get_import_options] and [method _get_internal_import_options]. */
        addImportOption(name: string, value: any): void
        
        /** Add a specific import option. This function can only be called from [method _get_import_options] and [method _get_internal_import_options]. */
        addImportOptionAdvanced(type: Variant.Type, name: string, defaultValue: any, hint?: PropertyHint /* = 0 */, hintString?: string /* = '' */, usageFlags?: int64 /* = 6 */): void
    }
    /** Base script that can be used to add extension functions to the editor.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorscript.html  
     */
    class EditorScript extends RefCounted {
        constructor(identifier?: any)
        /** This method is executed by the Editor when **File > Run** is used. */
        /* gdvirtual */ _run(): void
        
        /** Makes [param node] root of the currently opened scene. Only works if the scene is empty. If the [param node] is a scene instance, an inheriting scene will be created. */
        addRootNode(node: Node): void
        
        /** Returns the edited (current) scene's root [Node]. Equivalent of [method EditorInterface.get_edited_scene_root]. */
        getScene(): null | Node
        
        /** Returns the [EditorInterface] singleton instance. */
        getEditorInterface(): null | EditorInterface
    }
    /** Godot editor's control for selecting the `script` property of a [Node].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorscriptpicker.html  
     */
    class EditorScriptPicker<Map extends NodePathMap = any> extends EditorResourcePicker<Map> {
        constructor(identifier?: any)
        /** The owner [Node] of the script property that holds the edited resource. */
        get scriptOwner(): null | Node
        set scriptOwner(value: null | Node)
    }
    /** Manages the SceneTree selection in the editor.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorselection.html  
     */
    class EditorSelection extends GObject {
        constructor(identifier?: any)
        /** Clear the selection. */
        clear(): void
        
        /** Adds a node to the selection.  
         *      
         *  **Note:** The newly selected node will not be automatically edited in the inspector. If you want to edit a node, use [method EditorInterface.edit_node].  
         */
        addNode(node: Node): void
        
        /** Removes a node from the selection. */
        removeNode(node: Node): void
        
        /** Returns the list of selected nodes. */
        getSelectedNodes(): GArray
        
        /** Returns the list of top selected nodes only, excluding any children. This is useful for performing transform operations (moving them, rotating, etc.).  
         *  For example, if there is a node A with a child B and a sibling C, then selecting all three will cause this method to return only A and C. Changing the global transform of A will affect the global transform of B, so there is no need to change B separately.  
         */
        getTopSelectedNodes(): GArray
        
        /** Returns the list of top selected nodes only, excluding any children. This is useful for performing transform operations (moving them, rotating, etc.). See [method get_top_selected_nodes]. */
        getTransformableSelectedNodes(): GArray
        
        /** Emitted when the selection changes. */
        readonly selectionChanged: Signal<() => void>
    }
    /** Object that holds the project-independent editor settings.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorsettings.html  
     */
    class EditorSettings extends Resource {
        /** Emitted after any editor setting has changed. It's used by various editor plugins to update their visuals on theme changes or logic on configuration changes. */
        static readonly NOTIFICATION_EDITOR_SETTINGS_CHANGED = 10000
        constructor(identifier?: any)
        
        /** Returns `true` if the setting specified by [param name] exists, `false` otherwise. */
        hasSetting(name: string): boolean
        
        /** Sets the [param value] of the setting specified by [param name]. This is equivalent to using [method Object.set] on the EditorSettings instance. */
        setSetting(name: string, value: any): void
        
        /** Returns the value of the setting specified by [param name]. This is equivalent to using [method Object.get] on the EditorSettings instance. */
        getSetting(name: string): any
        
        /** Erases the setting whose name is specified by [param property]. */
        erase(property: string): void
        
        /** Sets the initial value of the setting specified by [param name] to [param value]. This is used to provide a value for the Revert button in the Editor Settings. If [param update_current] is `true`, the setting is reset to [param value] as well. */
        setInitialValue(name: StringName, value: any, updateCurrent: boolean): void
        
        /** Adds a custom property info to a property. The dictionary must contain:  
         *  - `name`: [String] (the name of the property)  
         *  - `type`: [int] (see [enum Variant.Type])  
         *  - optionally `hint`: [int] (see [enum PropertyHint]) and `hint_string`: [String]  
         *    
         */
        addPropertyInfo(info: GDictionary): void
        
        /** Sets project-specific metadata with the [param section], [param key] and [param data] specified. This metadata is stored outside the project folder and therefore won't be checked into version control. See also [method get_project_metadata]. */
        setProjectMetadata(section: string, key: string, data: any): void
        
        /** Returns project-specific metadata for the [param section] and [param key] specified. If the metadata doesn't exist, [param default] will be returned instead. See also [method set_project_metadata]. */
        getProjectMetadata(section: string, key: string, default_?: any /* = <any> {} */): any
        
        /** Sets the list of favorite files and directories for this project. */
        setFavorites(dirs: PackedStringArray | string[]): void
        
        /** Returns the list of favorite files and directories for this project. */
        getFavorites(): PackedStringArray
        
        /** Sets the list of recently visited folders in the file dialog for this project. */
        setRecentDirs(dirs: PackedStringArray | string[]): void
        
        /** Returns the list of recently visited folders in the file dialog for this project. */
        getRecentDirs(): PackedStringArray
        
        /** Overrides the built-in editor action [param name] with the input actions defined in [param actions_list]. */
        setBuiltinActionOverride(name: string, actionsList: GArray): void
        
        /** Checks if any settings with the prefix [param setting_prefix] exist in the set of changed settings. See also [method get_changed_settings]. */
        checkChangedSettingsInGroup(settingPrefix: string): boolean
        
        /** Gets an array of the settings which have been changed since the last save. Note that internally `changed_settings` is cleared after a successful save, so generally the most appropriate place to use this method is when processing [constant NOTIFICATION_EDITOR_SETTINGS_CHANGED]. */
        getChangedSettings(): PackedStringArray
        
        /** Marks the passed editor setting as being changed, see [method get_changed_settings]. Only settings which exist (see [method has_setting]) will be accepted. */
        markSettingChanged(setting: string): void
        
        /** Emitted after any editor setting has changed. */
        readonly settingsChanged: Signal<() => void>
    }
    /** Godot editor's control for editing numeric values.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorspinslider.html  
     */
    class EditorSpinSlider<Map extends NodePathMap = any> extends Range<Map> {
        constructor(identifier?: any)
        /** The text that displays to the left of the value. */
        get label(): string
        set label(value: string)
        
        /** The suffix to display after the value (in a faded color). This should generally be a plural word. You may have to use an abbreviation if the suffix is too long to be displayed. */
        get suffix(): string
        set suffix(value: string)
        
        /** If `true`, the slider can't be interacted with. */
        get readOnly(): boolean
        set readOnly(value: boolean)
        
        /** If `true`, the slider will not draw background. */
        get flat(): boolean
        set flat(value: boolean)
        
        /** If `true`, the slider and up/down arrows are hidden. */
        get hideSlider(): boolean
        set hideSlider(value: boolean)
        
        /** If `true`, the [EditorSpinSlider] is considered to be editing an integer value. If `false`, the [EditorSpinSlider] is considered to be editing a floating-point value. This is used to determine whether a slider should be drawn. The slider is only drawn for floats; integers use up-down arrows similar to [SpinBox] instead. */
        get editingInteger(): boolean
        set editingInteger(value: boolean)
        
        /** Emitted when the spinner/slider is grabbed. */
        readonly grabbed: Signal<() => void>
        
        /** Emitted when the spinner/slider is ungrabbed. */
        readonly ungrabbed: Signal<() => void>
        
        /** Emitted when the updown button is pressed. */
        readonly updownPressed: Signal<() => void>
        
        /** Emitted when the value form gains focus. */
        readonly valueFocusEntered: Signal<() => void>
        
        /** Emitted when the value form loses focus. */
        readonly valueFocusExited: Signal<() => void>
    }
    /** Base class for [SyntaxHighlighter] used by the [ScriptEditor].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorsyntaxhighlighter.html  
     */
    class EditorSyntaxHighlighter extends SyntaxHighlighter {
        constructor(identifier?: any)
        /** Virtual method which can be overridden to return the syntax highlighter name. */
        /* gdvirtual */ _getName(): string
        
        /** Virtual method which can be overridden to return the supported language names. */
        /* gdvirtual */ _getSupportedLanguages(): PackedStringArray
        _getEditedResource(): null | RefCounted
    }
    namespace EditorToaster {
        enum Severity {
            SeverityInfo = 0,
            SeverityWarning = 1,
            SeverityError = 2,
        }
    }
    /** Manages toast notifications within the editor.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editortoaster.html  
     */
    class EditorToaster<Map extends NodePathMap = any> extends HBoxContainer<Map> {
        /** Toast will display with an INFO severity. */
        static readonly SEVERITY_INFO = 0
        
        /** Toast will display with a WARNING severity and have a corresponding color. */
        static readonly SEVERITY_WARNING = 1
        
        /** Toast will display with an ERROR severity and have a corresponding color. */
        static readonly SEVERITY_ERROR = 2
        constructor(identifier?: any)
        
        /** Pushes a toast notification to the editor for display. */
        pushToast(message: string, severity?: EditorToaster.Severity /* = 0 */, tooltip?: string /* = '' */): void
    }
    /** Plugin for adding custom parsers to extract strings that are to be translated from custom files (.csv, .json etc.).  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editortranslationparserplugin.html  
     */
    class EditorTranslationParserPlugin extends RefCounted {
        constructor(identifier?: any)
        /** Override this method to define a custom parsing logic to extract the translatable strings. */
        /* gdvirtual */ _parseFile(path: string): GArray
        
        /** Gets the list of file extensions to associate with this parser, e.g. `["csv"]`. */
        /* gdvirtual */ _getRecognizedExtensions(): PackedStringArray
    }
    namespace EditorUndoRedoManager {
        enum SpecialHistory {
            GlobalHistory = 0,
            RemoteHistory = -9,
            InvalidHistory = -99,
        }
    }
    /** Manages undo history of scenes opened in the editor.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorundoredomanager.html  
     */
    class EditorUndoRedoManager extends GObject {
        /** Global history not associated with any scene, but with external resources etc. */
        static readonly GLOBAL_HISTORY = 0
        
        /** History associated with remote inspector. Used when live editing a running project. */
        static readonly REMOTE_HISTORY = -9
        
        /** Invalid "null" history. It's a special value, not associated with any object. */
        static readonly INVALID_HISTORY = -99
        constructor(identifier?: any)
        
        /** Create a new action. After this is called, do all your calls to [method add_do_method], [method add_undo_method], [method add_do_property], and [method add_undo_property], then commit the action with [method commit_action].  
         *  The way actions are merged is dictated by the [param merge_mode] argument. See [enum UndoRedo.MergeMode] for details.  
         *  If [param custom_context] object is provided, it will be used for deducing target history (instead of using the first operation).  
         *  The way undo operation are ordered in actions is dictated by [param backward_undo_ops]. When [param backward_undo_ops] is `false` undo option are ordered in the same order they were added. Which means the first operation to be added will be the first to be undone.  
         *  If [param mark_unsaved] is `false`, the action will not mark the history as unsaved. This is useful for example for actions that change a selection, or a setting that will be saved automatically. Otherwise, this should be left to `true` if the action requires saving by the user or if it can cause data loss when left unsaved.  
         */
        createAction(name: string, mergeMode?: UndoRedo.MergeMode /* = 0 */, customContext?: GObject /* = undefined */, backwardUndoOps?: boolean /* = false */, markUnsaved?: boolean /* = true */): void
        
        /** Commits the action. If [param execute] is `true` (default), all "do" methods/properties are called/set when this function is called. */
        commitAction(execute?: boolean /* = true */): void
        
        /** Returns `true` if the [EditorUndoRedoManager] is currently committing the action, i.e. running its "do" method or property change (see [method commit_action]). */
        isCommittingAction(): boolean
        
        /** Forces the next operation (e.g. [method add_do_method]) to use the action's history rather than guessing it from the object. This is sometimes needed when a history can't be correctly determined, like for a nested resource that doesn't have a path yet.  
         *  This method should only be used when absolutely necessary, otherwise it might cause invalid history state. For most of complex cases, the `custom_context` parameter of [method create_action] is sufficient.  
         */
        forceFixedHistory(): void
        
        /** Register a method that will be called when the action is committed (i.e. the "do" action).  
         *  If this is the first operation, the [param object] will be used to deduce target undo history.  
         */
        addDoMethod(object: GObject, method: StringName, ...varargs: any[]): void
        
        /** Register a method that will be called when the action is undone (i.e. the "undo" action).  
         *  If this is the first operation, the [param object] will be used to deduce target undo history.  
         */
        addUndoMethod(object: GObject, method: StringName, ...varargs: any[]): void
        
        /** Register a property value change for "do".  
         *  If this is the first operation, the [param object] will be used to deduce target undo history.  
         */
        addDoProperty(object: GObject, property: StringName, value: any): void
        
        /** Register a property value change for "undo".  
         *  If this is the first operation, the [param object] will be used to deduce target undo history.  
         */
        addUndoProperty(object: GObject, property: StringName, value: any): void
        
        /** Register a reference for "do" that will be erased if the "do" history is lost. This is useful mostly for new nodes created for the "do" call. Do not use for resources. */
        addDoReference(object: GObject): void
        
        /** Register a reference for "undo" that will be erased if the "undo" history is lost. This is useful mostly for nodes removed with the "do" call (not the "undo" call!). */
        addUndoReference(object: GObject): void
        
        /** Returns the history ID deduced from the given [param object]. It can be used with [method get_history_undo_redo]. */
        getObjectHistoryId(object: GObject): int64
        
        /** Returns the [UndoRedo] object associated with the given history [param id].  
         *  [param id] above `0` are mapped to the opened scene tabs (but it doesn't match their order). [param id] of `0` or lower have special meaning (see [enum SpecialHistory]).  
         *  Best used with [method get_object_history_id]. This method is only provided in case you need some more advanced methods of [UndoRedo] (but keep in mind that directly operating on the [UndoRedo] object might affect editor's stability).  
         */
        getHistoryUndoRedo(id: int64): null | UndoRedo
        
        /** Clears the given undo history. You can clear history for a specific scene, global history, or for all scenes at once if [param id] is [constant INVALID_HISTORY].  
         *  If [param increase_version] is `true`, the undo history version will be increased, marking it as unsaved. Useful for operations that modify the scene, but don't support undo.  
         *    
         *      
         *  **Note:** If you want to mark an edited scene as unsaved without clearing its history, use [method EditorInterface.mark_scene_as_unsaved] instead.  
         */
        clearHistory(id?: int64 /* = -99 */, increaseVersion?: boolean /* = true */): void
        
        /** Emitted when the list of actions in any history has changed, either when an action is committed or a history is cleared. */
        readonly historyChanged: Signal<() => void>
        
        /** Emitted when the version of any history has changed as a result of undo or redo call. */
        readonly versionChanged: Signal<() => void>
    }
    namespace EditorVcsInterface {
        enum ChangeType {
            ChangeTypeNew = 0,
            ChangeTypeModified = 1,
            ChangeTypeRenamed = 2,
            ChangeTypeDeleted = 3,
            ChangeTypeTypechange = 4,
            ChangeTypeUnmerged = 5,
        }
        enum TreeArea {
            TreeAreaCommit = 0,
            TreeAreaStaged = 1,
            TreeAreaUnstaged = 2,
        }
    }
    class EditorVcsInterface extends GObject {
        static readonly CHANGE_TYPE_NEW = 0
        static readonly CHANGE_TYPE_MODIFIED = 1
        static readonly CHANGE_TYPE_RENAMED = 2
        static readonly CHANGE_TYPE_DELETED = 3
        static readonly CHANGE_TYPE_TYPECHANGE = 4
        static readonly CHANGE_TYPE_UNMERGED = 5
        static readonly TREE_AREA_COMMIT = 0
        static readonly TREE_AREA_STAGED = 1
        static readonly TREE_AREA_UNSTAGED = 2
        constructor(identifier?: any)
        /* gdvirtual */ _initialize(projectPath: string): boolean
        /* gdvirtual */ _setCredentials(userName: string, password: string, sshPublicKeyPath: string, sshPrivateKeyPath: string, sshPassphrase: string): void
        /* gdvirtual */ _getModifiedFilesData(): GArray
        /* gdvirtual */ _stageFile(filePath: string): void
        /* gdvirtual */ _unstageFile(filePath: string): void
        /* gdvirtual */ _discardFile(filePath: string): void
        /* gdvirtual */ _commit(msg: string): void
        /* gdvirtual */ _getDiff(identifier: string, area: int64): GArray
        /* gdvirtual */ _shutDown(): boolean
        /* gdvirtual */ _getVcsName(): string
        /* gdvirtual */ _getPreviousCommits(maxCommits: int64): GArray
        /* gdvirtual */ _getBranchList(): GArray
        /* gdvirtual */ _getRemotes(): GArray
        /* gdvirtual */ _createBranch(branchName: string): void
        /* gdvirtual */ _removeBranch(branchName: string): void
        /* gdvirtual */ _createRemote(remoteName: string, remoteUrl: string): void
        /* gdvirtual */ _removeRemote(remoteName: string): void
        /* gdvirtual */ _getCurrentBranchName(): string
        /* gdvirtual */ _checkoutBranch(branchName: string): boolean
        /* gdvirtual */ _pull(remote: string): void
        /* gdvirtual */ _push(remote: string, force: boolean): void
        /* gdvirtual */ _fetch(remote: string): void
        /* gdvirtual */ _getLineDiff(filePath: string, text: string): GArray
        createDiffLine(newLineNo: int64, oldLineNo: int64, content: string, status: string): GDictionary
        createDiffHunk(oldStart: int64, newStart: int64, oldLines: int64, newLines: int64): GDictionary
        createDiffFile(newFile: string, oldFile: string): GDictionary
        createCommit(msg: string, author: string, id: string, unixTimestamp: int64, offsetMinutes: int64): GDictionary
        createStatusFile(filePath: string, changeType: EditorVcsInterface.ChangeType, area: EditorVcsInterface.TreeArea): GDictionary
        addDiffHunksIntoDiffFile(diffFile: GDictionary, diffHunks: GArray): GDictionary
        addLineDiffsIntoDiffHunk(diffHunk: GDictionary, lineDiffs: GArray): GDictionary
        popupError(msg: string): void
    }
    class EncodedObjectAsId extends RefCounted {
        constructor(identifier?: any)
        get objectId(): int64
        set objectId(value: int64)
    }
    /** Base class for creating custom profilers.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_engineprofiler.html  
     */
    class EngineProfiler extends RefCounted {
        constructor(identifier?: any)
        /** Called when the profiler is enabled/disabled, along with a set of [param options]. */
        /* gdvirtual */ _toggle(enable: boolean, options: GArray): void
        
        /** Called when data is added to profiler using [method EngineDebugger.profiler_add_frame_data]. */
        /* gdvirtual */ _addFrame(data: GArray): void
        
        /** Called once every engine iteration when the profiler is active with information about the current frame. All time values are in seconds. Lower values represent faster processing times and are therefore considered better. */
        /* gdvirtual */ _tick(frameTime: float64, processTime: float64, physicsTime: float64, physicsFrameTime: float64): void
    }
    namespace Environment {
        enum BGMode {
            BgClearColor = 0,
            BgColor = 1,
            BgSky = 2,
            BgCanvas = 3,
            BgKeep = 4,
            BgCameraFeed = 5,
            BgMax = 6,
        }
        enum AmbientSource {
            AmbientSourceBg = 0,
            AmbientSourceDisabled = 1,
            AmbientSourceColor = 2,
            AmbientSourceSky = 3,
        }
        enum ReflectionSource {
            ReflectionSourceBg = 0,
            ReflectionSourceDisabled = 1,
            ReflectionSourceSky = 2,
        }
        enum ToneMapper {
            ToneMapperLinear = 0,
            ToneMapperReinhardt = 1,
            ToneMapperFilmic = 2,
            ToneMapperAces = 3,
            ToneMapperAgx = 4,
        }
        enum GlowBlendMode {
            GlowBlendModeAdditive = 0,
            GlowBlendModeScreen = 1,
            GlowBlendModeSoftlight = 2,
            GlowBlendModeReplace = 3,
            GlowBlendModeMix = 4,
        }
        enum FogMode {
            FogModeExponential = 0,
            FogModeDepth = 1,
        }
        enum SdfgiyScale {
            SdfgiYScale50Percent = 0,
            SdfgiYScale75Percent = 1,
            SdfgiYScale100Percent = 2,
        }
    }
    /** Resource for environment nodes (like [WorldEnvironment]) that define multiple rendering options.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_environment.html  
     */
    class Environment extends Resource {
        /** Clears the background using the clear color defined in [member ProjectSettings.rendering/environment/defaults/default_clear_color]. */
        static readonly BG_CLEAR_COLOR = 0
        
        /** Clears the background using a custom clear color. */
        static readonly BG_COLOR = 1
        
        /** Displays a user-defined sky in the background. */
        static readonly BG_SKY = 2
        
        /** Displays a [CanvasLayer] in the background. */
        static readonly BG_CANVAS = 3
        
        /** Keeps on screen every pixel drawn in the background. This is the fastest background mode, but it can only be safely used in fully-interior scenes (no visible sky or sky reflections). If enabled in a scene where the background is visible, "ghost trail" artifacts will be visible when moving the camera. */
        static readonly BG_KEEP = 4
        
        /** Displays a camera feed in the background. */
        static readonly BG_CAMERA_FEED = 5
        
        /** Represents the size of the [enum BGMode] enum. */
        static readonly BG_MAX = 6
        
        /** Gather ambient light from whichever source is specified as the background. */
        static readonly AMBIENT_SOURCE_BG = 0
        
        /** Disable ambient light. This provides a slight performance boost over [constant AMBIENT_SOURCE_SKY]. */
        static readonly AMBIENT_SOURCE_DISABLED = 1
        
        /** Specify a specific [Color] for ambient light. This provides a slight performance boost over [constant AMBIENT_SOURCE_SKY]. */
        static readonly AMBIENT_SOURCE_COLOR = 2
        
        /** Gather ambient light from the [Sky] regardless of what the background is. */
        static readonly AMBIENT_SOURCE_SKY = 3
        
        /** Use the background for reflections. */
        static readonly REFLECTION_SOURCE_BG = 0
        
        /** Disable reflections. This provides a slight performance boost over other options. */
        static readonly REFLECTION_SOURCE_DISABLED = 1
        
        /** Use the [Sky] for reflections regardless of what the background is. */
        static readonly REFLECTION_SOURCE_SKY = 2
        
        /** Does not modify color data, resulting in a linear tonemapping curve which unnaturally clips bright values, causing bright lighting to look blown out. The simplest and fastest tonemapper. */
        static readonly TONE_MAPPER_LINEAR = 0
        
        /** A simple tonemapping curve that rolls off bright values to prevent clipping. This results in an image that can appear dull and low contrast. Slower than [constant TONE_MAPPER_LINEAR].  
         *      
         *  **Note:** When [member tonemap_white] is left at the default value of `1.0`, [constant TONE_MAPPER_REINHARDT] produces an identical image to [constant TONE_MAPPER_LINEAR].  
         */
        static readonly TONE_MAPPER_REINHARDT = 1
        
        /** Uses a film-like tonemapping curve to prevent clipping of bright values and provide better contrast than [constant TONE_MAPPER_REINHARDT]. Slightly slower than [constant TONE_MAPPER_REINHARDT]. */
        static readonly TONE_MAPPER_FILMIC = 2
        
        /** Uses a high-contrast film-like tonemapping curve and desaturates bright values for a more realistic appearance. Slightly slower than [constant TONE_MAPPER_FILMIC].  
         *      
         *  **Note:** This tonemapping operator is called "ACES Fitted" in Godot 3.x.  
         */
        static readonly TONE_MAPPER_ACES = 3
        
        /** Uses a film-like tonemapping curve and desaturates bright values for a more realistic appearance. Better than other tonemappers at maintaining the hue of colors as they become brighter. The slowest tonemapping option.  
         *      
         *  **Note:** [member tonemap_white] is fixed at a value of `16.29`, which makes [constant TONE_MAPPER_AGX] unsuitable for use with the Mobile rendering method.  
         */
        static readonly TONE_MAPPER_AGX = 4
        
        /** Additive glow blending mode. Mostly used for particles, glows (bloom), lens flare, bright sources. */
        static readonly GLOW_BLEND_MODE_ADDITIVE = 0
        
        /** Screen glow blending mode. Increases brightness, used frequently with bloom. */
        static readonly GLOW_BLEND_MODE_SCREEN = 1
        
        /** Soft light glow blending mode. Modifies contrast, exposes shadows and highlights (vivid bloom). */
        static readonly GLOW_BLEND_MODE_SOFTLIGHT = 2
        
        /** Replace glow blending mode. Replaces all pixels' color by the glow value. This can be used to simulate a full-screen blur effect by tweaking the glow parameters to match the original image's brightness. */
        static readonly GLOW_BLEND_MODE_REPLACE = 3
        
        /** Mixes the glow with the underlying color to avoid increasing brightness as much while still maintaining a glow effect. */
        static readonly GLOW_BLEND_MODE_MIX = 4
        
        /** Use a physically-based fog model defined primarily by fog density. */
        static readonly FOG_MODE_EXPONENTIAL = 0
        
        /** Use a simple fog model defined by start and end positions and a custom curve. While not physically accurate, this model can be useful when you need more artistic control. */
        static readonly FOG_MODE_DEPTH = 1
        
        /** Use 50% scale for SDFGI on the Y (vertical) axis. SDFGI cells will be twice as short as they are wide. This allows providing increased GI detail and reduced light leaking with thin floors and ceilings. This is usually the best choice for scenes that don't feature much verticality. */
        static readonly SDFGI_Y_SCALE_50_PERCENT = 0
        
        /** Use 75% scale for SDFGI on the Y (vertical) axis. This is a balance between the 50% and 100% SDFGI Y scales. */
        static readonly SDFGI_Y_SCALE_75_PERCENT = 1
        
        /** Use 100% scale for SDFGI on the Y (vertical) axis. SDFGI cells will be as tall as they are wide. This is usually the best choice for highly vertical scenes. The downside is that light leaking may become more noticeable with thin floors and ceilings. */
        static readonly SDFGI_Y_SCALE_100_PERCENT = 2
        constructor(identifier?: any)
        
        /** Sets the intensity of the glow level [param idx]. A value above `0.0` enables the level. Each level relies on the previous level. This means that enabling higher glow levels will slow down the glow effect rendering, even if previous levels aren't enabled. */
        setGlowLevel(idx: int64, intensity: float64): void
        
        /** Returns the intensity of the glow level [param idx]. */
        getGlowLevel(idx: int64): float64
        
        /** The background mode. See [enum BGMode] for possible values. */
        get backgroundMode(): int64
        set backgroundMode(value: int64)
        
        /** The [Color] displayed for clear areas of the scene. Only effective when using the [constant BG_COLOR] background mode. */
        get backgroundColor(): Color
        set backgroundColor(value: Color)
        
        /** Multiplier for background energy. Increase to make background brighter, decrease to make background dimmer. */
        get backgroundEnergyMultiplier(): float64
        set backgroundEnergyMultiplier(value: float64)
        
        /** Luminance of background measured in nits (candela per square meter). Only used when [member ProjectSettings.rendering/lights_and_shadows/use_physical_light_units] is enabled. The default value is roughly equivalent to the sky at midday. */
        get backgroundIntensity(): float64
        set backgroundIntensity(value: float64)
        
        /** The maximum layer ID to display. Only effective when using the [constant BG_CANVAS] background mode. */
        get backgroundCanvasMaxLayer(): int64
        set backgroundCanvasMaxLayer(value: int64)
        
        /** The ID of the camera feed to show in the background. */
        get backgroundCameraFeedId(): int64
        set backgroundCameraFeedId(value: int64)
        
        /** The [Sky] resource used for this [Environment]. */
        get sky(): null | Sky
        set sky(value: null | Sky)
        
        /** If set to a value greater than `0.0`, overrides the field of view to use for sky rendering. If set to `0.0`, the same FOV as the current [Camera3D] is used for sky rendering. */
        get skyCustomFov(): float64
        set skyCustomFov(value: float64)
        
        /** The rotation to use for sky rendering. */
        get skyRotation(): Vector3
        set skyRotation(value: Vector3)
        
        /** The ambient light source to use for rendering materials and global illumination. */
        get ambientLightSource(): int64
        set ambientLightSource(value: int64)
        
        /** The ambient light's [Color]. Only effective if [member ambient_light_sky_contribution] is lower than `1.0` (exclusive). */
        get ambientLightColor(): Color
        set ambientLightColor(value: Color)
        
        /** Defines the amount of light that the sky brings on the scene. A value of `0.0` means that the sky's light emission has no effect on the scene illumination, thus all ambient illumination is provided by the ambient light. On the contrary, a value of `1.0` means that  *all*  the light that affects the scene is provided by the sky, thus the ambient light parameter has no effect on the scene.  
         *      
         *  **Note:** [member ambient_light_sky_contribution] is internally clamped between `0.0` and `1.0` (inclusive).  
         */
        get ambientLightSkyContribution(): float64
        set ambientLightSkyContribution(value: float64)
        
        /** The ambient light's energy. The higher the value, the stronger the light. Only effective if [member ambient_light_sky_contribution] is lower than `1.0` (exclusive). */
        get ambientLightEnergy(): float64
        set ambientLightEnergy(value: float64)
        
        /** The reflected (specular) light source. */
        get reflectedLightSource(): int64
        set reflectedLightSource(value: int64)
        
        /** The tonemapping mode to use. Tonemapping is the process that "converts" HDR values to be suitable for rendering on an LDR display. (Godot doesn't support rendering on HDR displays yet.) */
        get tonemapMode(): int64
        set tonemapMode(value: int64)
        
        /** Adjusts the brightness of values before they are provided to the tonemapper. Higher [member tonemap_exposure] values result in a brighter image. See also [member tonemap_white].  
         *      
         *  **Note:** Values provided to the tonemapper will also be multiplied by `2.0` and `1.8` for [constant TONE_MAPPER_FILMIC] and [constant TONE_MAPPER_ACES] respectively to produce a similar apparent brightness as [constant TONE_MAPPER_LINEAR].  
         */
        get tonemapExposure(): float64
        set tonemapExposure(value: float64)
        
        /** The white reference value for tonemapping, which indicates where bright white is located in the scale of values provided to the tonemapper. For photorealistic lighting, recommended values are between `6.0` and `8.0`. Higher values result in less blown out highlights, but may make the scene appear lower contrast. See also [member tonemap_exposure].  
         *      
         *  **Note:** [member tonemap_white] is ignored when using [constant TONE_MAPPER_LINEAR] or [constant TONE_MAPPER_AGX].  
         */
        get tonemapWhite(): float64
        set tonemapWhite(value: float64)
        
        /** If `true`, screen-space reflections are enabled. Screen-space reflections are more accurate than reflections from [VoxelGI]s or [ReflectionProbe]s, but are slower and can't reflect surfaces occluded by others.  
         *      
         *  **Note:** SSR is only supported in the Forward+ rendering method, not Mobile or Compatibility.  
         */
        get ssrEnabled(): boolean
        set ssrEnabled(value: boolean)
        
        /** The maximum number of steps for screen-space reflections. Higher values are slower. */
        get ssrMaxSteps(): int64
        set ssrMaxSteps(value: int64)
        
        /** The fade-in distance for screen-space reflections. Affects the area from the reflected material to the screen-space reflection. Only positive values are valid (negative values will be clamped to `0.0`). */
        get ssrFadeIn(): float64
        set ssrFadeIn(value: float64)
        
        /** The fade-out distance for screen-space reflections. Affects the area from the screen-space reflection to the "global" reflection. Only positive values are valid (negative values will be clamped to `0.0`). */
        get ssrFadeOut(): float64
        set ssrFadeOut(value: float64)
        
        /** The depth tolerance for screen-space reflections. */
        get ssrDepthTolerance(): float64
        set ssrDepthTolerance(value: float64)
        
        /** If `true`, the screen-space ambient occlusion effect is enabled. This darkens objects' corners and cavities to simulate ambient light not reaching the entire object as in real life. This works well for small, dynamic objects, but baked lighting or ambient occlusion textures will do a better job at displaying ambient occlusion on large static objects. Godot uses a form of SSAO called Adaptive Screen Space Ambient Occlusion which is itself a form of Horizon Based Ambient Occlusion.  
         *      
         *  **Note:** SSAO is only supported in the Forward+ rendering method, not Mobile or Compatibility.  
         */
        get ssaoEnabled(): boolean
        set ssaoEnabled(value: boolean)
        
        /** The distance at which objects can occlude each other when calculating screen-space ambient occlusion. Higher values will result in occlusion over a greater distance at the cost of performance and quality. */
        get ssaoRadius(): float64
        set ssaoRadius(value: float64)
        
        /** The primary screen-space ambient occlusion intensity. Acts as a multiplier for the screen-space ambient occlusion effect. A higher value results in darker occlusion. */
        get ssaoIntensity(): float64
        set ssaoIntensity(value: float64)
        
        /** The distribution of occlusion. A higher value results in darker occlusion, similar to [member ssao_intensity], but with a sharper falloff. */
        get ssaoPower(): float64
        set ssaoPower(value: float64)
        
        /** Sets the strength of the additional level of detail for the screen-space ambient occlusion effect. A high value makes the detail pass more prominent, but it may contribute to aliasing in your final image. */
        get ssaoDetail(): float64
        set ssaoDetail(value: float64)
        
        /** The threshold for considering whether a given point on a surface is occluded or not represented as an angle from the horizon mapped into the `0.0-1.0` range. A value of `1.0` results in no occlusion. */
        get ssaoHorizon(): float64
        set ssaoHorizon(value: float64)
        
        /** The amount that the screen-space ambient occlusion effect is allowed to blur over the edges of objects. Setting too high will result in aliasing around the edges of objects. Setting too low will make object edges appear blurry. */
        get ssaoSharpness(): float64
        set ssaoSharpness(value: float64)
        
        /** The screen-space ambient occlusion intensity in direct light. In real life, ambient occlusion only applies to indirect light, which means its effects can't be seen in direct light. Values higher than `0` will make the SSAO effect visible in direct light. */
        get ssaoLightAffect(): float64
        set ssaoLightAffect(value: float64)
        
        /** The screen-space ambient occlusion intensity on materials that have an AO texture defined. Values higher than `0` will make the SSAO effect visible in areas darkened by AO textures. */
        get ssaoAOChannelAffect(): float64
        set ssaoAOChannelAffect(value: float64)
        
        /** If `true`, the screen-space indirect lighting effect is enabled. Screen space indirect lighting is a form of indirect lighting that allows diffuse light to bounce between nearby objects. Screen-space indirect lighting works very similarly to screen-space ambient occlusion, in that it only affects a limited range. It is intended to be used along with a form of proper global illumination like SDFGI or [VoxelGI]. Screen-space indirect lighting is not affected by individual light's [member Light3D.light_indirect_energy].  
         *      
         *  **Note:** SSIL is only supported in the Forward+ rendering method, not Mobile or Compatibility.  
         */
        get ssilEnabled(): boolean
        set ssilEnabled(value: boolean)
        
        /** The distance that bounced lighting can travel when using the screen space indirect lighting effect. A larger value will result in light bouncing further in a scene, but may result in under-sampling artifacts which look like long spikes surrounding light sources. */
        get ssilRadius(): float64
        set ssilRadius(value: float64)
        
        /** The brightness multiplier for the screen-space indirect lighting effect. A higher value will result in brighter light. */
        get ssilIntensity(): float64
        set ssilIntensity(value: float64)
        
        /** The amount that the screen-space indirect lighting effect is allowed to blur over the edges of objects. Setting too high will result in aliasing around the edges of objects. Setting too low will make object edges appear blurry. */
        get ssilSharpness(): float64
        set ssilSharpness(value: float64)
        
        /** Amount of normal rejection used when calculating screen-space indirect lighting. Normal rejection uses the normal of a given sample point to reject samples that are facing away from the current pixel. Normal rejection is necessary to avoid light leaking when only one side of an object is illuminated. However, normal rejection can be disabled if light leaking is desirable, such as when the scene mostly contains emissive objects that emit light from faces that cannot be seen from the camera. */
        get ssilNormalRejection(): float64
        set ssilNormalRejection(value: float64)
        
        /** If `true`, enables signed distance field global illumination for meshes that have their [member GeometryInstance3D.gi_mode] set to [constant GeometryInstance3D.GI_MODE_STATIC]. SDFGI is a real-time global illumination technique that works well with procedurally generated and user-built levels, including in situations where geometry is created during gameplay. The signed distance field is automatically generated around the camera as it moves. Dynamic lights are supported, but dynamic occluders and emissive surfaces are not.  
         *      
         *  **Note:** SDFGI is only supported in the Forward+ rendering method, not Mobile or Compatibility.  
         *  **Performance:** SDFGI is relatively demanding on the GPU and is not suited to low-end hardware such as integrated graphics (consider [LightmapGI] instead). To improve SDFGI performance, enable [member ProjectSettings.rendering/global_illumination/gi/use_half_resolution] in the Project Settings.  
         *      
         *  **Note:** Meshes should have sufficiently thick walls to avoid light leaks (avoid one-sided walls). For interior levels, enclose your level geometry in a sufficiently large box and bridge the loops to close the mesh.  
         */
        get sdfgiEnabled(): boolean
        set sdfgiEnabled(value: boolean)
        
        /** If `true`, SDFGI uses an occlusion detection approach to reduce light leaking. Occlusion may however introduce dark blotches in certain spots, which may be undesired in mostly outdoor scenes. [member sdfgi_use_occlusion] has a performance impact and should only be enabled when needed. */
        get sdfgiUseOcclusion(): boolean
        set sdfgiUseOcclusion(value: boolean)
        
        /** If `true`, SDFGI takes the environment lighting into account. This should be set to `false` for interior scenes. */
        get sdfgiReadSkyLight(): boolean
        set sdfgiReadSkyLight(value: boolean)
        
        /** The energy multiplier applied to light every time it bounces from a surface when using SDFGI. Values greater than `0.0` will simulate multiple bounces, resulting in a more realistic appearance. Increasing [member sdfgi_bounce_feedback] generally has no performance impact. See also [member sdfgi_energy].  
         *      
         *  **Note:** Values greater than `0.5` can cause infinite feedback loops and should be avoided in scenes with bright materials.  
         *      
         *  **Note:** If [member sdfgi_bounce_feedback] is `0.0`, indirect lighting will not be represented in reflections as light will only bounce one time.  
         */
        get sdfgiBounceFeedback(): float64
        set sdfgiBounceFeedback(value: float64)
        
        /** The number of cascades to use for SDFGI (between 1 and 8). A higher number of cascades allows displaying SDFGI further away while preserving detail up close, at the cost of performance. When using SDFGI on small-scale levels, [member sdfgi_cascades] can often be decreased between `1` and `4` to improve performance. */
        get sdfgiCascades(): int64
        set sdfgiCascades(value: int64)
        
        /** The cell size to use for the closest SDFGI cascade (in 3D units). Lower values allow SDFGI to be more precise up close, at the cost of making SDFGI updates more demanding. This can cause stuttering when the camera moves fast. Higher values allow SDFGI to cover more ground, while also reducing the performance impact of SDFGI updates.  
         *      
         *  **Note:** This property is linked to [member sdfgi_max_distance] and [member sdfgi_cascade0_distance]. Changing its value will automatically change those properties as well.  
         */
        get sdfgiMinCellSize(): float64
        set sdfgiMinCellSize(value: float64)
        
        /**     
         *  **Note:** This property is linked to [member sdfgi_min_cell_size] and [member sdfgi_max_distance]. Changing its value will automatically change those properties as well.  
         */
        get sdfgiCascade0Distance(): float64
        set sdfgiCascade0Distance(value: float64)
        
        /** The maximum distance at which SDFGI is visible. Beyond this distance, environment lighting or other sources of GI such as [ReflectionProbe] will be used as a fallback.  
         *      
         *  **Note:** This property is linked to [member sdfgi_min_cell_size] and [member sdfgi_cascade0_distance]. Changing its value will automatically change those properties as well.  
         */
        get sdfgiMaxDistance(): float64
        set sdfgiMaxDistance(value: float64)
        
        /** The Y scale to use for SDFGI cells. Lower values will result in SDFGI cells being packed together more closely on the Y axis. This is used to balance between quality and covering a lot of vertical ground. [member sdfgi_y_scale] should be set depending on how vertical your scene is (and how fast your camera may move on the Y axis). */
        get sdfgiYScale(): int64
        set sdfgiYScale(value: int64)
        
        /** The energy multiplier to use for SDFGI. Higher values will result in brighter indirect lighting and reflections. See also [member sdfgi_bounce_feedback]. */
        get sdfgiEnergy(): float64
        set sdfgiEnergy(value: float64)
        
        /** The normal bias to use for SDFGI probes. Increasing this value can reduce visible streaking artifacts on sloped surfaces, at the cost of increased light leaking. */
        get sdfgiNormalBias(): float64
        set sdfgiNormalBias(value: float64)
        
        /** The constant bias to use for SDFGI probes. Increasing this value can reduce visible streaking artifacts on sloped surfaces, at the cost of increased light leaking. */
        get sdfgiProbeBias(): float64
        set sdfgiProbeBias(value: float64)
        
        /** If `true`, the glow effect is enabled. This simulates real world eye/camera behavior where bright pixels bleed onto surrounding pixels.  
         *      
         *  **Note:** When using the Mobile rendering method, glow looks different due to the lower dynamic range available in the Mobile rendering method.  
         *      
         *  **Note:** When using the Compatibility rendering method, glow uses a different implementation with some properties being unavailable and hidden from the inspector: `glow_levels/*`, [member glow_normalized], [member glow_strength], [member glow_blend_mode], [member glow_mix], [member glow_map], and [member glow_map_strength]. This implementation is optimized to run on low-end devices and is less flexible as a result.  
         */
        get glowEnabled(): boolean
        set glowEnabled(value: boolean)
        
        /** The intensity of the 1st level of glow. This is the most "local" level (least blurry).  
         *      
         *  **Note:** [member glow_levels/1] has no effect when using the Compatibility rendering method, due to this rendering method using a simpler glow implementation optimized for low-end devices.  
         */
        get "glowLevels/1"(): float64
        set "glowLevels/1"(value: float64)
        
        /** The intensity of the 2nd level of glow.  
         *      
         *  **Note:** [member glow_levels/2] has no effect when using the Compatibility rendering method, due to this rendering method using a simpler glow implementation optimized for low-end devices.  
         */
        get "glowLevels/2"(): float64
        set "glowLevels/2"(value: float64)
        
        /** The intensity of the 3rd level of glow.  
         *      
         *  **Note:** [member glow_levels/3] has no effect when using the Compatibility rendering method, due to this rendering method using a simpler glow implementation optimized for low-end devices.  
         */
        get "glowLevels/3"(): float64
        set "glowLevels/3"(value: float64)
        
        /** The intensity of the 4th level of glow.  
         *      
         *  **Note:** [member glow_levels/4] has no effect when using the Compatibility rendering method, due to this rendering method using a simpler glow implementation optimized for low-end devices.  
         */
        get "glowLevels/4"(): float64
        set "glowLevels/4"(value: float64)
        
        /** The intensity of the 5th level of glow.  
         *      
         *  **Note:** [member glow_levels/5] has no effect when using the Compatibility rendering method, due to this rendering method using a simpler glow implementation optimized for low-end devices.  
         */
        get "glowLevels/5"(): float64
        set "glowLevels/5"(value: float64)
        
        /** The intensity of the 6th level of glow.  
         *      
         *  **Note:** [member glow_levels/6] has no effect when using the Compatibility rendering method, due to this rendering method using a simpler glow implementation optimized for low-end devices.  
         */
        get "glowLevels/6"(): float64
        set "glowLevels/6"(value: float64)
        
        /** The intensity of the 7th level of glow. This is the most "global" level (blurriest).  
         *      
         *  **Note:** [member glow_levels/7] has no effect when using the Compatibility rendering method, due to this rendering method using a simpler glow implementation optimized for low-end devices.  
         */
        get "glowLevels/7"(): float64
        set "glowLevels/7"(value: float64)
        
        /** If `true`, glow levels will be normalized so that summed together their intensities equal `1.0`.  
         *      
         *  **Note:** [member glow_normalized] has no effect when using the Compatibility rendering method, due to this rendering method using a simpler glow implementation optimized for low-end devices.  
         */
        get glowNormalized(): boolean
        set glowNormalized(value: boolean)
        
        /** The overall brightness multiplier of the glow effect. When using the Mobile rendering method (which only supports a lower dynamic range up to `2.0`), this should be increased to `1.5` to compensate. */
        get glowIntensity(): float64
        set glowIntensity(value: float64)
        
        /** The strength of the glow effect. This applies as the glow is blurred across the screen and increases the distance and intensity of the blur. When using the Mobile rendering method, this should be increased to compensate for the lower dynamic range.  
         *      
         *  **Note:** [member glow_strength] has no effect when using the Compatibility rendering method, due to this rendering method using a simpler glow implementation optimized for low-end devices.  
         */
        get glowStrength(): float64
        set glowStrength(value: float64)
        
        /** When using the [constant GLOW_BLEND_MODE_MIX] [member glow_blend_mode], this controls how much the source image is blended with the glow layer. A value of `0.0` makes the glow rendering invisible, while a value of `1.0` is equivalent to [constant GLOW_BLEND_MODE_REPLACE].  
         *      
         *  **Note:** [member glow_mix] has no effect when using the Compatibility rendering method, due to this rendering method using a simpler glow implementation optimized for low-end devices.  
         */
        get glowMix(): float64
        set glowMix(value: float64)
        
        /** The bloom's intensity. If set to a value higher than `0`, this will make glow visible in areas darker than the [member glow_hdr_threshold]. */
        get glowBloom(): float64
        set glowBloom(value: float64)
        
        /** The glow blending mode.  
         *      
         *  **Note:** [member glow_blend_mode] has no effect when using the Compatibility rendering method, due to this rendering method using a simpler glow implementation optimized for low-end devices.  
         */
        get glowBlendMode(): int64
        set glowBlendMode(value: int64)
        
        /** The lower threshold of the HDR glow. When using the Mobile rendering method (which only supports a lower dynamic range up to `2.0`), this may need to be below `1.0` for glow to be visible. A value of `0.9` works well in this case. This value also needs to be decreased below `1.0` when using glow in 2D, as 2D rendering is performed in SDR. */
        get glowHdrThreshold(): float64
        set glowHdrThreshold(value: float64)
        
        /** The bleed scale of the HDR glow. */
        get glowHdrScale(): float64
        set glowHdrScale(value: float64)
        
        /** The higher threshold of the HDR glow. Areas brighter than this threshold will be clamped for the purposes of the glow effect. */
        get glowHdrLuminanceCap(): float64
        set glowHdrLuminanceCap(value: float64)
        
        /** How strong of an influence the [member glow_map] should have on the overall glow effect. A strength of `0.0` means the glow map has no influence, while a strength of `1.0` means the glow map has full influence.  
         *      
         *  **Note:** If the glow map has black areas, a value of `1.0` can also turn off the glow effect entirely in specific areas of the screen.  
         *      
         *  **Note:** [member glow_map_strength] has no effect when using the Compatibility rendering method, due to this rendering method using a simpler glow implementation optimized for low-end devices.  
         */
        get glowMapStrength(): float64
        set glowMapStrength(value: float64)
        
        /** The texture that should be used as a glow map to  *multiply*  the resulting glow color according to [member glow_map_strength]. This can be used to create a "lens dirt" effect. The texture's RGB color channels are used for modulation, but the alpha channel is ignored.  
         *      
         *  **Note:** The texture will be stretched to fit the screen. Therefore, it's recommended to use a texture with an aspect ratio that matches your project's base aspect ratio (typically 16:9).  
         *      
         *  **Note:** [member glow_map] has no effect when using the Compatibility rendering method, due to this rendering method using a simpler glow implementation optimized for low-end devices.  
         */
        get glowMap(): null | Texture2D
        set glowMap(value: null | Texture2D)
        
        /** If `true`, fog effects are enabled. */
        get fogEnabled(): boolean
        set fogEnabled(value: boolean)
        
        /** The fog mode. See [enum FogMode] for possible values. */
        get fogMode(): int64
        set fogMode(value: int64)
        
        /** The fog's color. */
        get fogLightColor(): Color
        set fogLightColor(value: Color)
        
        /** The fog's brightness. Higher values result in brighter fog. */
        get fogLightEnergy(): float64
        set fogLightEnergy(value: float64)
        
        /** If set above `0.0`, renders the scene's directional light(s) in the fog color depending on the view angle. This can be used to give the impression that the sun is "piercing" through the fog. */
        get fogSunScatter(): float64
        set fogSunScatter(value: float64)
        
        /** The fog density to be used. This is demonstrated in different ways depending on the [member fog_mode] mode chosen:  
         *  **Exponential Fog Mode:** Higher values result in denser fog. The fog rendering is exponential like in real life.  
         *  **Depth Fog mode:** The maximum intensity of the deep fog, effect will appear in the distance (relative to the camera). At `1.0` the fog will fully obscure the scene, at `0.0` the fog will not be visible.  
         */
        get fogDensity(): float64
        set fogDensity(value: float64)
        
        /** If set above `0.0` (exclusive), blends between the fog's color and the color of the background [Sky], as read from the radiance cubemap. This has a small performance cost when set above `0.0`. Must have [member background_mode] set to [constant BG_SKY].  
         *  This is useful to simulate [url=https://en.wikipedia.org/wiki/Aerial_perspective]aerial perspective[/url] in large scenes with low density fog. However, it is not very useful for high-density fog, as the sky will shine through. When set to `1.0`, the fog color comes completely from the [Sky]. If set to `0.0`, aerial perspective is disabled.  
         *  Notice that this does not sample the [Sky] directly, but rather the radiance cubemap. The cubemap is sampled at a mipmap level depending on the depth of the rendered pixel; the farther away, the higher the resolution of the sampled mipmap. This results in the actual color being a blurred version of the sky, with more blur closer to the camera. The highest mipmap resolution is used at a depth of [member Camera3D.far].  
         */
        get fogAerialPerspective(): float64
        set fogAerialPerspective(value: float64)
        
        /** The factor to use when affecting the sky with non-volumetric fog. `1.0` means that fog can fully obscure the sky. Lower values reduce the impact of fog on sky rendering, with `0.0` not affecting sky rendering at all.  
         *      
         *  **Note:** [member fog_sky_affect] has no visual effect if [member fog_aerial_perspective] is `1.0`.  
         */
        get fogSkyAffect(): float64
        set fogSkyAffect(value: float64)
        
        /** The height at which the height fog effect begins. */
        get fogHeight(): float64
        set fogHeight(value: float64)
        
        /** The density used to increase fog as height decreases. To make fog increase as height increases, use a negative value. */
        get fogHeightDensity(): float64
        set fogHeightDensity(value: float64)
        
        /** The fog depth's intensity curve. A number of presets are available in the Inspector by right-clicking the curve. Only available when [member fog_mode] is set to [constant FOG_MODE_DEPTH]. */
        get fogDepthCurve(): float64
        set fogDepthCurve(value: float64)
        
        /** The fog's depth starting distance from the camera. Only available when [member fog_mode] is set to [constant FOG_MODE_DEPTH]. */
        get fogDepthBegin(): float64
        set fogDepthBegin(value: float64)
        
        /** The fog's depth end distance from the camera. If this value is set to `0`, it will be equal to the current camera's [member Camera3D.far] value. Only available when [member fog_mode] is set to [constant FOG_MODE_DEPTH]. */
        get fogDepthEnd(): float64
        set fogDepthEnd(value: float64)
        
        /** Enables the volumetric fog effect. Volumetric fog uses a screen-aligned froxel buffer to calculate accurate volumetric scattering in the short to medium range. Volumetric fog interacts with [FogVolume]s and lights to calculate localized and global fog. Volumetric fog uses a PBR single-scattering model based on extinction, scattering, and emission which it exposes to users as density, albedo, and emission.  
         *      
         *  **Note:** Volumetric fog is only supported in the Forward+ rendering method, not Mobile or Compatibility.  
         */
        get volumetricFogEnabled(): boolean
        set volumetricFogEnabled(value: boolean)
        
        /** The base  *exponential*  density of the volumetric fog. Set this to the lowest density you want to have globally. [FogVolume]s can be used to add to or subtract from this density in specific areas. Fog rendering is exponential as in real life.  
         *  A value of `0.0` disables global volumetric fog while allowing [FogVolume]s to display volumetric fog in specific areas.  
         *  To make volumetric fog work as a volumetric  *lighting*  solution, set [member volumetric_fog_density] to the lowest non-zero value (`0.0001`) then increase lights' [member Light3D.light_volumetric_fog_energy] to values between `10000` and `100000` to compensate for the very low density.  
         */
        get volumetricFogDensity(): float64
        set volumetricFogDensity(value: float64)
        
        /** The [Color] of the volumetric fog when interacting with lights. Mist and fog have an albedo close to `Color(1, 1, 1, 1)` while smoke has a darker albedo. */
        get volumetricFogAlbedo(): Color
        set volumetricFogAlbedo(value: Color)
        
        /** The emitted light from the volumetric fog. Even with emission, volumetric fog will not cast light onto other surfaces. Emission is useful to establish an ambient color. As the volumetric fog effect uses single-scattering only, fog tends to need a little bit of emission to soften the harsh shadows. */
        get volumetricFogEmission(): Color
        set volumetricFogEmission(value: Color)
        
        /** The brightness of the emitted light from the volumetric fog. */
        get volumetricFogEmissionEnergy(): float64
        set volumetricFogEmissionEnergy(value: float64)
        
        /** Scales the strength of Global Illumination used in the volumetric fog's albedo color. A value of `0.0` means that Global Illumination will not impact the volumetric fog. [member volumetric_fog_gi_inject] has a small performance cost when set above `0.0`.  
         *      
         *  **Note:** This has no visible effect if [member volumetric_fog_density] is `0.0` or if [member volumetric_fog_albedo] is a fully black color.  
         *      
         *  **Note:** Only [VoxelGI] and SDFGI ([member Environment.sdfgi_enabled]) are taken into account when using [member volumetric_fog_gi_inject]. Global illumination from [LightmapGI], [ReflectionProbe] and SSIL (see [member ssil_enabled]) will be ignored by volumetric fog.  
         */
        get volumetricFogGIInject(): float64
        set volumetricFogGIInject(value: float64)
        
        /** The direction of scattered light as it goes through the volumetric fog. A value close to `1.0` means almost all light is scattered forward. A value close to `0.0` means light is scattered equally in all directions. A value close to `-1.0` means light is scattered mostly backward. Fog and mist scatter light slightly forward, while smoke scatters light equally in all directions. */
        get volumetricFogAnisotropy(): float64
        set volumetricFogAnisotropy(value: float64)
        
        /** The distance over which the volumetric fog is computed. Increase to compute fog over a greater range, decrease to add more detail when a long range is not needed. For best quality fog, keep this as low as possible. See also [member ProjectSettings.rendering/environment/volumetric_fog/volume_depth]. */
        get volumetricFogLength(): float64
        set volumetricFogLength(value: float64)
        
        /** The distribution of size down the length of the froxel buffer. A higher value compresses the froxels closer to the camera and places more detail closer to the camera. */
        get volumetricFogDetailSpread(): float64
        set volumetricFogDetailSpread(value: float64)
        
        /** Scales the strength of ambient light used in the volumetric fog. A value of `0.0` means that ambient light will not impact the volumetric fog. [member volumetric_fog_ambient_inject] has a small performance cost when set above `0.0`.  
         *      
         *  **Note:** This has no visible effect if [member volumetric_fog_density] is `0.0` or if [member volumetric_fog_albedo] is a fully black color.  
         */
        get volumetricFogAmbientInject(): float64
        set volumetricFogAmbientInject(value: float64)
        
        /** The factor to use when affecting the sky with volumetric fog. `1.0` means that volumetric fog can fully obscure the sky. Lower values reduce the impact of volumetric fog on sky rendering, with `0.0` not affecting sky rendering at all.  
         *      
         *  **Note:** [member volumetric_fog_sky_affect] also affects [FogVolume]s, even if [member volumetric_fog_density] is `0.0`. If you notice [FogVolume]s are disappearing when looking towards the sky, set [member volumetric_fog_sky_affect] to `1.0`.  
         */
        get volumetricFogSkyAffect(): float64
        set volumetricFogSkyAffect(value: float64)
        
        /** Enables temporal reprojection in the volumetric fog. Temporal reprojection blends the current frame's volumetric fog with the last frame's volumetric fog to smooth out jagged edges. The performance cost is minimal; however, it leads to moving [FogVolume]s and [Light3D]s "ghosting" and leaving a trail behind them. When temporal reprojection is enabled, try to avoid moving [FogVolume]s or [Light3D]s too fast. Short-lived dynamic lighting effects should have [member Light3D.light_volumetric_fog_energy] set to `0.0` to avoid ghosting. */
        get volumetricFogTemporalReprojectionEnabled(): boolean
        set volumetricFogTemporalReprojectionEnabled(value: boolean)
        
        /** The amount by which to blend the last frame with the current frame. A higher number results in smoother volumetric fog, but makes "ghosting" much worse. A lower value reduces ghosting but can result in the per-frame temporal jitter becoming visible. */
        get volumetricFogTemporalReprojectionAmount(): float64
        set volumetricFogTemporalReprojectionAmount(value: float64)
        
        /** If `true`, enables the `adjustment_*` properties provided by this resource. If `false`, modifications to the `adjustment_*` properties will have no effect on the rendered scene. */
        get adjustmentEnabled(): boolean
        set adjustmentEnabled(value: boolean)
        
        /** The global brightness value of the rendered scene. Effective only if [member adjustment_enabled] is `true`. */
        get adjustmentBrightness(): float64
        set adjustmentBrightness(value: float64)
        
        /** The global contrast value of the rendered scene (default value is 1). Effective only if [member adjustment_enabled] is `true`. */
        get adjustmentContrast(): float64
        set adjustmentContrast(value: float64)
        
        /** The global color saturation value of the rendered scene (default value is 1). Effective only if [member adjustment_enabled] is `true`. */
        get adjustmentSaturation(): float64
        set adjustmentSaturation(value: float64)
        
        /** The [Texture2D] or [Texture3D] lookup table (LUT) to use for the built-in post-process color grading. Can use a [GradientTexture1D] for a 1-dimensional LUT, or a [Texture3D] for a more complex LUT. Effective only if [member adjustment_enabled] is `true`. */
        get adjustmentColorCorrection(): null | Texture2D | Texture3D
        set adjustmentColorCorrection(value: null | Texture2D | Texture3D)
    }
    /** A class that stores an expression you can execute.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_expression.html  
     */
    class Expression extends RefCounted {
        constructor(identifier?: any)
        /** Parses the expression and returns an [enum Error] code.  
         *  You can optionally specify names of variables that may appear in the expression with [param input_names], so that you can bind them when it gets executed.  
         */
        parse(expression: string, inputNames?: PackedStringArray | string[] /* = [] */): GError
        
        /** Executes the expression that was previously parsed by [method parse] and returns the result. Before you use the returned object, you should check if the method failed by calling [method has_execute_failed].  
         *  If you defined input variables in [method parse], you can specify their values in the inputs array, in the same order.  
         */
        execute(inputs?: GArray /* = [] */, baseInstance?: GObject /* = undefined */, showError?: boolean /* = true */, constCallsOnly?: boolean /* = false */): any
        
        /** Returns `true` if [method execute] has failed. */
        hasExecuteFailed(): boolean
        
        /** Returns the error text if [method parse] or [method execute] has failed. */
        getErrorText(): string
    }
    /** Texture which displays the content of an external buffer.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_externaltexture.html  
     */
    class ExternalTexture extends Texture2D {
        constructor(identifier?: any)
        /** Returns the external texture ID.  
         *  Depending on your use case, you may need to pass this to platform APIs, for example, when creating an `android.graphics.SurfaceTexture` on Android.  
         */
        getExternalTextureId(): int64
        
        /** Sets the external buffer ID.  
         *  Depending on your use case, you may need to call this with data received from a platform API, for example, `SurfaceTexture.getHardwareBuffer()` on Android.  
         */
        setExternalBufferId(externalBufferId: int64): void
        
        /** External texture size. */
        get size(): Vector2
        set size(value: Vector2)
    }
    class FbxDocument extends GltfDocument {
        constructor(identifier?: any)
    }
    class FbxState extends GltfState {
        constructor(identifier?: any)
        get allowGeometryHelperNodes(): boolean
        set allowGeometryHelperNodes(value: boolean)
    }
    namespace FastNoiseLite {
        enum NoiseType {
            TypeValue = 5,
            TypeValueCubic = 4,
            TypePerlin = 3,
            TypeCellular = 2,
            TypeSimplex = 0,
            TypeSimplexSmooth = 1,
        }
        enum FractalType {
            FractalNone = 0,
            FractalFbm = 1,
            FractalRidged = 2,
            FractalPingPong = 3,
        }
        enum CellularDistanceFunction {
            DistanceEuclidean = 0,
            DistanceEuclideanSquared = 1,
            DistanceManhattan = 2,
            DistanceHybrid = 3,
        }
        enum CellularReturnType {
            ReturnCellValue = 0,
            ReturnDistance = 1,
            ReturnDistance2 = 2,
            ReturnDistance2Add = 3,
            ReturnDistance2Sub = 4,
            ReturnDistance2Mul = 5,
            ReturnDistance2Div = 6,
        }
        enum DomainWarpType {
            DomainWarpSimplex = 0,
            DomainWarpSimplexReduced = 1,
            DomainWarpBasicGrid = 2,
        }
        enum DomainWarpFractalType {
            DomainWarpFractalNone = 0,
            DomainWarpFractalProgressive = 1,
            DomainWarpFractalIndependent = 2,
        }
    }
    /** Generates noise using the FastNoiseLite library.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_fastnoiselite.html  
     */
    class FastNoiseLite extends Noise {
        /** A lattice of points are assigned random values then interpolated based on neighboring values. */
        static readonly TYPE_VALUE = 5
        
        /** Similar to Value noise, but slower. Has more variance in peaks and valleys.  
         *  Cubic noise can be used to avoid certain artifacts when using value noise to create a bumpmap. In general, you should always use this mode if the value noise is being used for a heightmap or bumpmap.  
         */
        static readonly TYPE_VALUE_CUBIC = 4
        
        /** A lattice of random gradients. Their dot products are interpolated to obtain values in between the lattices. */
        static readonly TYPE_PERLIN = 3
        
        /** Cellular includes both Worley noise and Voronoi diagrams which creates various regions of the same value. */
        static readonly TYPE_CELLULAR = 2
        
        /** As opposed to [constant TYPE_PERLIN], gradients exist in a simplex lattice rather than a grid lattice, avoiding directional artifacts. Internally uses FastNoiseLite's OpenSimplex2 noise type. */
        static readonly TYPE_SIMPLEX = 0
        
        /** Modified, higher quality version of [constant TYPE_SIMPLEX], but slower. Internally uses FastNoiseLite's OpenSimplex2S noise type. */
        static readonly TYPE_SIMPLEX_SMOOTH = 1
        
        /** No fractal noise. */
        static readonly FRACTAL_NONE = 0
        
        /** Method using Fractional Brownian Motion to combine octaves into a fractal. */
        static readonly FRACTAL_FBM = 1
        
        /** Method of combining octaves into a fractal resulting in a "ridged" look. */
        static readonly FRACTAL_RIDGED = 2
        
        /** Method of combining octaves into a fractal with a ping pong effect. */
        static readonly FRACTAL_PING_PONG = 3
        
        /** Euclidean distance to the nearest point. */
        static readonly DISTANCE_EUCLIDEAN = 0
        
        /** Squared Euclidean distance to the nearest point. */
        static readonly DISTANCE_EUCLIDEAN_SQUARED = 1
        
        /** Manhattan distance (taxicab metric) to the nearest point. */
        static readonly DISTANCE_MANHATTAN = 2
        
        /** Blend of [constant DISTANCE_EUCLIDEAN] and [constant DISTANCE_MANHATTAN] to give curved cell boundaries. */
        static readonly DISTANCE_HYBRID = 3
        
        /** The cellular distance function will return the same value for all points within a cell. */
        static readonly RETURN_CELL_VALUE = 0
        
        /** The cellular distance function will return a value determined by the distance to the nearest point. */
        static readonly RETURN_DISTANCE = 1
        
        /** The cellular distance function returns the distance to the second-nearest point. */
        static readonly RETURN_DISTANCE2 = 2
        
        /** The distance to the nearest point is added to the distance to the second-nearest point. */
        static readonly RETURN_DISTANCE2_ADD = 3
        
        /** The distance to the nearest point is subtracted from the distance to the second-nearest point. */
        static readonly RETURN_DISTANCE2_SUB = 4
        
        /** The distance to the nearest point is multiplied with the distance to the second-nearest point. */
        static readonly RETURN_DISTANCE2_MUL = 5
        
        /** The distance to the nearest point is divided by the distance to the second-nearest point. */
        static readonly RETURN_DISTANCE2_DIV = 6
        
        /** The domain is warped using the simplex noise algorithm. */
        static readonly DOMAIN_WARP_SIMPLEX = 0
        
        /** The domain is warped using a simplified version of the simplex noise algorithm. */
        static readonly DOMAIN_WARP_SIMPLEX_REDUCED = 1
        
        /** The domain is warped using a simple noise grid (not as smooth as the other methods, but more performant). */
        static readonly DOMAIN_WARP_BASIC_GRID = 2
        
        /** No fractal noise for warping the space. */
        static readonly DOMAIN_WARP_FRACTAL_NONE = 0
        
        /** Warping the space progressively, octave for octave, resulting in a more "liquified" distortion. */
        static readonly DOMAIN_WARP_FRACTAL_PROGRESSIVE = 1
        
        /** Warping the space independently for each octave, resulting in a more chaotic distortion. */
        static readonly DOMAIN_WARP_FRACTAL_INDEPENDENT = 2
        constructor(identifier?: any)
        _changed(): void
        
        /** The noise algorithm used. See [enum NoiseType]. */
        get noiseType(): int64
        set noiseType(value: int64)
        
        /** The random number seed for all noise types. */
        get seed(): int64
        set seed(value: int64)
        
        /** The frequency for all noise types. Low frequency results in smooth noise while high frequency results in rougher, more granular noise. */
        get frequency(): float64
        set frequency(value: float64)
        
        /** Translate the noise input coordinates by the given [Vector3]. */
        get offset(): Vector3
        set offset(value: Vector3)
        
        /** The method for combining octaves into a fractal. See [enum FractalType]. */
        get fractalType(): int64
        set fractalType(value: int64)
        
        /** The number of noise layers that are sampled to get the final value for fractal noise types. */
        get fractalOctaves(): int64
        set fractalOctaves(value: int64)
        
        /** Frequency multiplier between subsequent octaves. Increasing this value results in higher octaves producing noise with finer details and a rougher appearance. */
        get fractalLacunarity(): float64
        set fractalLacunarity(value: float64)
        
        /** Determines the strength of each subsequent layer of noise in fractal noise.  
         *  A low value places more emphasis on the lower frequency base layers, while a high value puts more emphasis on the higher frequency layers.  
         */
        get fractalGain(): float64
        set fractalGain(value: float64)
        
        /** Higher weighting means higher octaves have less impact if lower octaves have a large impact. */
        get fractalWeightedStrength(): float64
        set fractalWeightedStrength(value: float64)
        
        /** Sets the strength of the fractal ping pong type. */
        get fractalPingPongStrength(): float64
        set fractalPingPongStrength(value: float64)
        
        /** Determines how the distance to the nearest/second-nearest point is computed. See [enum CellularDistanceFunction] for options. */
        get cellularDistanceFunction(): int64
        set cellularDistanceFunction(value: int64)
        
        /** Maximum distance a point can move off of its grid position. Set to `0` for an even grid. */
        get cellularJitter(): float64
        set cellularJitter(value: float64)
        
        /** Return type from cellular noise calculations. See [enum CellularReturnType]. */
        get cellularReturnType(): int64
        set cellularReturnType(value: int64)
        
        /** If enabled, another FastNoiseLite instance is used to warp the space, resulting in a distortion of the noise. */
        get domainWarpEnabled(): boolean
        set domainWarpEnabled(value: boolean)
        
        /** Sets the warp algorithm. See [enum DomainWarpType]. */
        get domainWarpType(): int64
        set domainWarpType(value: int64)
        
        /** Sets the maximum warp distance from the origin. */
        get domainWarpAmplitude(): float64
        set domainWarpAmplitude(value: float64)
        
        /** Frequency of the noise which warps the space. Low frequency results in smooth noise while high frequency results in rougher, more granular noise. */
        get domainWarpFrequency(): float64
        set domainWarpFrequency(value: float64)
        
        /** The method for combining octaves into a fractal which is used to warp the space. See [enum DomainWarpFractalType]. */
        get domainWarpFractalType(): int64
        set domainWarpFractalType(value: int64)
        
        /** The number of noise layers that are sampled to get the final value for the fractal noise which warps the space. */
        get domainWarpFractalOctaves(): int64
        set domainWarpFractalOctaves(value: int64)
        
        /** Octave lacunarity of the fractal noise which warps the space. Increasing this value results in higher octaves producing noise with finer details and a rougher appearance. */
        get domainWarpFractalLacunarity(): float64
        set domainWarpFractalLacunarity(value: float64)
        
        /** Determines the strength of each subsequent layer of the noise which is used to warp the space.  
         *  A low value places more emphasis on the lower frequency base layers, while a high value puts more emphasis on the higher frequency layers.  
         */
        get domainWarpFractalGain(): float64
        set domainWarpFractalGain(value: float64)
    }
    namespace FileAccess {
        enum ModeFlags {
            Read = 1,
            Write = 2,
            ReadWrite = 3,
            WriteRead = 7,
        }
        enum CompressionMode {
            CompressionFastlz = 0,
            CompressionDeflate = 1,
            CompressionZstd = 2,
            CompressionGZip = 3,
            CompressionBrotli = 4,
        }
        enum UnixPermissionFlags {
            UnixReadOwner = 256,
            UnixWriteOwner = 128,
            UnixExecuteOwner = 64,
            UnixReadGroup = 32,
            UnixWriteGroup = 16,
            UnixExecuteGroup = 8,
            UnixReadOther = 4,
            UnixWriteOther = 2,
            UnixExecuteOther = 1,
            UnixSetUserId = 2048,
            UnixSetGroupId = 1024,
            UnixRestrictedDelete = 512,
        }
    }
    /** Provides methods for file reading and writing operations.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_fileaccess.html  
     */
    class FileAccess extends RefCounted {
        /** Opens the file for read operations. The cursor is positioned at the beginning of the file. */
        static readonly READ = 1
        
        /** Opens the file for write operations. The file is created if it does not exist, and truncated if it does.  
         *      
         *  **Note:** When creating a file it must be in an already existing directory. To recursively create directories for a file path, see [method DirAccess.make_dir_recursive].  
         */
        static readonly WRITE = 2
        
        /** Opens the file for read and write operations. Does not truncate the file. The cursor is positioned at the beginning of the file. */
        static readonly READ_WRITE = 3
        
        /** Opens the file for read and write operations. The file is created if it does not exist, and truncated if it does. The cursor is positioned at the beginning of the file.  
         *      
         *  **Note:** When creating a file it must be in an already existing directory. To recursively create directories for a file path, see [method DirAccess.make_dir_recursive].  
         */
        static readonly WRITE_READ = 7
        
        /** Uses the [url=https://fastlz.org/]FastLZ[/url] compression method. */
        static readonly COMPRESSION_FASTLZ = 0
        
        /** Uses the [url=https://en.wikipedia.org/wiki/DEFLATE]DEFLATE[/url] compression method. */
        static readonly COMPRESSION_DEFLATE = 1
        
        /** Uses the [url=https://facebook.github.io/zstd/]Zstandard[/url] compression method. */
        static readonly COMPRESSION_ZSTD = 2
        
        /** Uses the [url=https://www.gzip.org/]gzip[/url] compression method. */
        static readonly COMPRESSION_GZIP = 3
        
        /** Uses the [url=https://github.com/google/brotli]brotli[/url] compression method (only decompression is supported). */
        static readonly COMPRESSION_BROTLI = 4
        
        /** Read for owner bit. */
        static readonly UNIX_READ_OWNER = 256
        
        /** Write for owner bit. */
        static readonly UNIX_WRITE_OWNER = 128
        
        /** Execute for owner bit. */
        static readonly UNIX_EXECUTE_OWNER = 64
        
        /** Read for group bit. */
        static readonly UNIX_READ_GROUP = 32
        
        /** Write for group bit. */
        static readonly UNIX_WRITE_GROUP = 16
        
        /** Execute for group bit. */
        static readonly UNIX_EXECUTE_GROUP = 8
        
        /** Read for other bit. */
        static readonly UNIX_READ_OTHER = 4
        
        /** Write for other bit. */
        static readonly UNIX_WRITE_OTHER = 2
        
        /** Execute for other bit. */
        static readonly UNIX_EXECUTE_OTHER = 1
        
        /** Set user id on execution bit. */
        static readonly UNIX_SET_USER_ID = 2048
        
        /** Set group id on execution bit. */
        static readonly UNIX_SET_GROUP_ID = 1024
        
        /** Restricted deletion (sticky) bit. */
        static readonly UNIX_RESTRICTED_DELETE = 512
        constructor(identifier?: any)
        
        /** Creates a new [FileAccess] object and opens the file for writing or reading, depending on the flags.  
         *  Returns `null` if opening the file failed. You can use [method get_open_error] to check the error that occurred.  
         */
        static open(path: string, flags: FileAccess.ModeFlags): null | FileAccess
        
        /** Creates a new [FileAccess] object and opens an encrypted file in write or read mode. You need to pass a binary key to encrypt/decrypt it.  
         *      
         *  **Note:** The provided key must be 32 bytes long.  
         *  Returns `null` if opening the file failed. You can use [method get_open_error] to check the error that occurred.  
         */
        static openEncrypted(path: string, modeFlags: FileAccess.ModeFlags, key: PackedByteArray | byte[] | ArrayBuffer, iV?: PackedByteArray | byte[] | ArrayBuffer /* = [] */): null | FileAccess
        
        /** Creates a new [FileAccess] object and opens an encrypted file in write or read mode. You need to pass a password to encrypt/decrypt it.  
         *  Returns `null` if opening the file failed. You can use [method get_open_error] to check the error that occurred.  
         */
        static openEncryptedWithPass(path: string, modeFlags: FileAccess.ModeFlags, pass: string): null | FileAccess
        
        /** Creates a new [FileAccess] object and opens a compressed file for reading or writing.  
         *      
         *  **Note:** [method open_compressed] can only read files that were saved by Godot, not third-party compression formats. See [url=https://github.com/godotengine/godot/issues/28999]GitHub issue #28999[/url] for a workaround.  
         *  Returns `null` if opening the file failed. You can use [method get_open_error] to check the error that occurred.  
         */
        static openCompressed(path: string, modeFlags: FileAccess.ModeFlags, compressionMode?: FileAccess.CompressionMode /* = 0 */): null | FileAccess
        
        /** Returns the result of the last [method open] call in the current thread. */
        static getOpenError(): GError
        
        /** Creates a temporary file. This file will be freed when the returned [FileAccess] is freed.  
         *  If [param prefix] is not empty, it will be prefixed to the file name, separated by a `-`.  
         *  If [param extension] is not empty, it will be appended to the temporary file name.  
         *  If [param keep] is `true`, the file is not deleted when the returned [FileAccess] is freed.  
         *  Returns `null` if opening the file failed. You can use [method get_open_error] to check the error that occurred.  
         */
        static createTemp(modeFlags: int64, prefix?: string /* = '' */, extension?: string /* = '' */, keep?: boolean /* = false */): FileAccess
        
        /** Returns the whole [param path] file contents as a [PackedByteArray] without any decoding.  
         *  Returns an empty [PackedByteArray] if an error occurred while opening the file. You can use [method get_open_error] to check the error that occurred.  
         */
        static getFileAsBytes(path: string): PackedByteArray
        
        /** Returns the whole [param path] file contents as a [String]. Text is interpreted as being UTF-8 encoded.  
         *  Returns an empty [String] if an error occurred while opening the file. You can use [method get_open_error] to check the error that occurred.  
         */
        static getFileAsString(path: string): string
        
        /** Resizes the file to a specified length. The file must be open in a mode that permits writing. If the file is extended, NUL characters are appended. If the file is truncated, all data from the end file to the original length of the file is lost. */
        resize(length: int64): GError
        
        /** Writes the file's buffer to disk. Flushing is automatically performed when the file is closed. This means you don't need to call [method flush] manually before closing a file. Still, calling [method flush] can be used to ensure the data is safe even if the project crashes instead of being closed gracefully.  
         *      
         *  **Note:** Only call [method flush] when you actually need it. Otherwise, it will decrease performance due to constant disk writes.  
         */
        flush(): void
        
        /** Returns the path as a [String] for the current open file. */
        getPath(): string
        
        /** Returns the absolute path as a [String] for the current open file. */
        getPathAbsolute(): string
        
        /** Returns `true` if the file is currently opened. */
        isOpen(): boolean
        
        /** Changes the file reading/writing cursor to the specified position (in bytes from the beginning of the file). */
        seek(position: int64): void
        
        /** Changes the file reading/writing cursor to the specified position (in bytes from the end of the file).  
         *      
         *  **Note:** This is an offset, so you should use negative numbers or the cursor will be at the end of the file.  
         */
        seekEnd(position?: int64 /* = 0 */): void
        
        /** Returns the file cursor's position. */
        getPosition(): int64
        
        /** Returns the size of the file in bytes. For a pipe, returns the number of bytes available for reading from the pipe. */
        getLength(): int64
        
        /** Returns `true` if the file cursor has already read past the end of the file.  
         *      
         *  **Note:** `eof_reached() == false` cannot be used to check whether there is more data available. To loop while there is more data available, use:  
         *    
         */
        eofReached(): boolean
        
        /** Returns the next 8 bits from the file as an integer. See [method store_8] for details on what values can be stored and retrieved this way. */
        get8(): int64
        
        /** Returns the next 16 bits from the file as an integer. See [method store_16] for details on what values can be stored and retrieved this way. */
        get16(): int64
        
        /** Returns the next 32 bits from the file as an integer. See [method store_32] for details on what values can be stored and retrieved this way. */
        get32(): int64
        
        /** Returns the next 64 bits from the file as an integer. See [method store_64] for details on what values can be stored and retrieved this way. */
        get64(): int64
        
        /** Returns the next 16 bits from the file as a half-precision floating-point number. */
        getHalf(): float64
        
        /** Returns the next 32 bits from the file as a floating-point number. */
        getFloat(): float64
        
        /** Returns the next 64 bits from the file as a floating-point number. */
        getDouble(): float64
        
        /** Returns the next bits from the file as a floating-point number. */
        getReal(): float64
        
        /** Returns next [param length] bytes of the file as a [PackedByteArray]. */
        getBuffer(length: int64): PackedByteArray
        
        /** Returns the next line of the file as a [String]. The returned string doesn't include newline (`\n`) or carriage return (`\r`) characters, but does include any other leading or trailing whitespace.  
         *  Text is interpreted as being UTF-8 encoded.  
         */
        getLine(): string
        
        /** Returns the next value of the file in CSV (Comma-Separated Values) format. You can pass a different delimiter [param delim] to use other than the default `","` (comma). This delimiter must be one-character long, and cannot be a double quotation mark.  
         *  Text is interpreted as being UTF-8 encoded. Text values must be enclosed in double quotes if they include the delimiter character. Double quotes within a text value can be escaped by doubling their occurrence.  
         *  For example, the following CSV lines are valid and will be properly parsed as two strings each:  
         *  [codeblock lang=text]  
         *  Alice,"Hello, Bob!"  
         *  Bob,Alice! What a surprise!  
         *  Alice,"I thought you'd reply with ""Hello, world""."  
         *  [/codeblock]  
         *  Note how the second line can omit the enclosing quotes as it does not include the delimiter. However it  *could*  very well use quotes, it was only written without for demonstration purposes. The third line must use `""` for each quotation mark that needs to be interpreted as such instead of the end of a text value.  
         */
        getCsvLine(delim?: string /* = ',' */): PackedStringArray
        
        /** Returns the whole file as a [String]. Text is interpreted as being UTF-8 encoded.  
         *  If [param skip_cr] is `true`, carriage return characters (`\r`, CR) will be ignored when parsing the UTF-8, so that only line feed characters (`\n`, LF) represent a new line (Unix convention).  
         */
        getAsText(skipCr?: boolean /* = false */): string
        
        /** Returns an MD5 String representing the file at the given path or an empty [String] on failure. */
        static getMd5(path: string): string
        
        /** Returns an SHA-256 [String] representing the file at the given path or an empty [String] on failure. */
        static getSha256(path: string): string
        
        /** Returns the last error that happened when trying to perform operations. Compare with the `ERR_FILE_*` constants from [enum Error]. */
        getError(): GError
        
        /** Returns the next [Variant] value from the file. If [param allow_objects] is `true`, decoding objects is allowed.  
         *  Internally, this uses the same decoding mechanism as the [method @GlobalScope.bytes_to_var] method.  
         *  **Warning:** Deserialized objects can contain code which gets executed. Do not use this option if the serialized object comes from untrusted sources to avoid potential security threats such as remote code execution.  
         */
        getVar(allowObjects?: boolean /* = false */): any
        
        /** Stores an integer as 8 bits in the file.  
         *      
         *  **Note:** The [param value] should lie in the interval `[0, 255]`. Any other value will overflow and wrap around.  
         *      
         *  **Note:** If an error occurs, the resulting value of the file position indicator is indeterminate.  
         *  To store a signed integer, use [method store_64], or convert it manually (see [method store_16] for an example).  
         */
        store8(value: int64): boolean
        
        /** Stores an integer as 16 bits in the file.  
         *      
         *  **Note:** The [param value] should lie in the interval `[0, 2^16 - 1]`. Any other value will overflow and wrap around.  
         *      
         *  **Note:** If an error occurs, the resulting value of the file position indicator is indeterminate.  
         *  To store a signed integer, use [method store_64] or store a signed integer from the interval `[-2^15, 2^15 - 1]` (i.e. keeping one bit for the signedness) and compute its sign manually when reading. For example:  
         *    
         */
        store16(value: int64): boolean
        
        /** Stores an integer as 32 bits in the file.  
         *      
         *  **Note:** The [param value] should lie in the interval `[0, 2^32 - 1]`. Any other value will overflow and wrap around.  
         *      
         *  **Note:** If an error occurs, the resulting value of the file position indicator is indeterminate.  
         *  To store a signed integer, use [method store_64], or convert it manually (see [method store_16] for an example).  
         */
        store32(value: int64): boolean
        
        /** Stores an integer as 64 bits in the file.  
         *      
         *  **Note:** The [param value] must lie in the interval `[-2^63, 2^63 - 1]` (i.e. be a valid [int] value).  
         *      
         *  **Note:** If an error occurs, the resulting value of the file position indicator is indeterminate.  
         */
        store64(value: int64): boolean
        
        /** Stores a half-precision floating-point number as 16 bits in the file.  
         *      
         *  **Note:** If an error occurs, the resulting value of the file position indicator is indeterminate.  
         */
        storeHalf(value: float64): boolean
        
        /** Stores a floating-point number as 32 bits in the file.  
         *      
         *  **Note:** If an error occurs, the resulting value of the file position indicator is indeterminate.  
         */
        storeFloat(value: float64): boolean
        
        /** Stores a floating-point number as 64 bits in the file.  
         *      
         *  **Note:** If an error occurs, the resulting value of the file position indicator is indeterminate.  
         */
        storeDouble(value: float64): boolean
        
        /** Stores a floating-point number in the file.  
         *      
         *  **Note:** If an error occurs, the resulting value of the file position indicator is indeterminate.  
         */
        storeReal(value: float64): boolean
        
        /** Stores the given array of bytes in the file.  
         *      
         *  **Note:** If an error occurs, the resulting value of the file position indicator is indeterminate.  
         */
        storeBuffer(buffer: PackedByteArray | byte[] | ArrayBuffer): boolean
        
        /** Stores [param line] in the file followed by a newline character (`\n`), encoding the text as UTF-8.  
         *      
         *  **Note:** If an error occurs, the resulting value of the file position indicator is indeterminate.  
         */
        storeLine(line: string): boolean
        
        /** Store the given [PackedStringArray] in the file as a line formatted in the CSV (Comma-Separated Values) format. You can pass a different delimiter [param delim] to use other than the default `","` (comma). This delimiter must be one-character long.  
         *  Text will be encoded as UTF-8.  
         *      
         *  **Note:** If an error occurs, the resulting value of the file position indicator is indeterminate.  
         */
        storeCsvLine(values: PackedStringArray | string[], delim?: string /* = ',' */): boolean
        
        /** Stores [param string] in the file without a newline character (`\n`), encoding the text as UTF-8.  
         *      
         *  **Note:** This method is intended to be used to write text files. The string is stored as a UTF-8 encoded buffer without string length or terminating zero, which means that it can't be loaded back easily. If you want to store a retrievable string in a binary file, consider using [method store_pascal_string] instead. For retrieving strings from a text file, you can use `get_buffer(length).get_string_from_utf8()` (if you know the length) or [method get_as_text].  
         *      
         *  **Note:** If an error occurs, the resulting value of the file position indicator is indeterminate.  
         */
        storeString(string_: string): boolean
        
        /** Stores any Variant value in the file. If [param full_objects] is `true`, encoding objects is allowed (and can potentially include code).  
         *  Internally, this uses the same encoding mechanism as the [method @GlobalScope.var_to_bytes] method.  
         *      
         *  **Note:** Not all properties are included. Only properties that are configured with the [constant PROPERTY_USAGE_STORAGE] flag set will be serialized. You can add a new usage flag to a property by overriding the [method Object._get_property_list] method in your class. You can also check how property usage is configured by calling [method Object._get_property_list]. See [enum PropertyUsageFlags] for the possible usage flags.  
         *      
         *  **Note:** If an error occurs, the resulting value of the file position indicator is indeterminate.  
         */
        storeVar(value: any, fullObjects?: boolean /* = false */): boolean
        
        /** Stores the given [String] as a line in the file in Pascal format (i.e. also store the length of the string).  
         *  Text will be encoded as UTF-8.  
         *      
         *  **Note:** If an error occurs, the resulting value of the file position indicator is indeterminate.  
         */
        storePascalString(string_: string): boolean
        
        /** Returns a [String] saved in Pascal format from the file.  
         *  Text is interpreted as being UTF-8 encoded.  
         */
        getPascalString(): string
        
        /** Closes the currently opened file and prevents subsequent read/write operations. Use [method flush] to persist the data to disk without closing the file.  
         *      
         *  **Note:** [FileAccess] will automatically close when it's freed, which happens when it goes out of scope or when it gets assigned with `null`. In C# the reference must be disposed after we are done using it, this can be done with the `using` statement or calling the `Dispose` method directly.  
         */
        close(): void
        
        /** Returns `true` if the file exists in the given path.  
         *      
         *  **Note:** Many resources types are imported (e.g. textures or sound files), and their source asset will not be included in the exported game, as only the imported version is used. See [method ResourceLoader.exists] for an alternative approach that takes resource remapping into account.  
         *  For a non-static, relative equivalent, use [method DirAccess.file_exists].  
         */
        static fileExists(path: string): boolean
        
        /** Returns the last time the [param file] was modified in Unix timestamp format, or `0` on error. This Unix timestamp can be converted to another format using the [Time] singleton. */
        static getModifiedTime(file: string): int64
        
        /** Returns the last time the [param file] was accessed in Unix timestamp format, or `0` on error. This Unix timestamp can be converted to another format using the [Time] singleton. */
        static getAccessTime(file: string): int64
        
        /** Returns file size in bytes, or `-1` on error. */
        static getSize(file: string): int64
        
        /** Returns file UNIX permissions.  
         *      
         *  **Note:** This method is implemented on iOS, Linux/BSD, and macOS.  
         */
        static getUnixPermissions(file: string): FileAccess.UnixPermissionFlags
        
        /** Sets file UNIX permissions.  
         *      
         *  **Note:** This method is implemented on iOS, Linux/BSD, and macOS.  
         */
        static setUnixPermissions(file: string, permissions: FileAccess.UnixPermissionFlags): GError
        
        /** Returns `true`, if file `hidden` attribute is set.  
         *      
         *  **Note:** This method is implemented on iOS, BSD, macOS, and Windows.  
         */
        static getHiddenAttribute(file: string): boolean
        
        /** Sets file **hidden** attribute.  
         *      
         *  **Note:** This method is implemented on iOS, BSD, macOS, and Windows.  
         */
        static setHiddenAttribute(file: string, hidden: boolean): GError
        
        /** Sets file **read only** attribute.  
         *      
         *  **Note:** This method is implemented on iOS, BSD, macOS, and Windows.  
         */
        static setReadOnlyAttribute(file: string, ro: boolean): GError
        
        /** Returns `true`, if file `read only` attribute is set.  
         *      
         *  **Note:** This method is implemented on iOS, BSD, macOS, and Windows.  
         */
        static getReadOnlyAttribute(file: string): boolean
        
        /** If `true`, the file is read with big-endian [url=https://en.wikipedia.org/wiki/Endianness]endianness[/url]. If `false`, the file is read with little-endian endianness. If in doubt, leave this to `false` as most files are written with little-endian endianness.  
         *      
         *  **Note:** This is always reset to system endianness, which is little-endian on all supported platforms, whenever you open the file. Therefore, you must set [member big_endian]  *after*  opening the file, not before.  
         */
        get bigEndian(): boolean
        set bigEndian(value: boolean)
    }
    namespace FileDialog {
        enum FileMode {
            FileModeOpenFile = 0,
            FileModeOpenFiles = 1,
            FileModeOpenDir = 2,
            FileModeOpenAny = 3,
            FileModeSaveFile = 4,
        }
        enum Access {
            AccessResources = 0,
            AccessUserdata = 1,
            AccessFilesystem = 2,
        }
    }
    /** A dialog for selecting files or directories in the filesystem.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_filedialog.html  
     */
    class FileDialog<Map extends NodePathMap = any> extends ConfirmationDialog<Map> {
        /** The dialog allows selecting one, and only one file. */
        static readonly FILE_MODE_OPEN_FILE = 0
        
        /** The dialog allows selecting multiple files. */
        static readonly FILE_MODE_OPEN_FILES = 1
        
        /** The dialog only allows selecting a directory, disallowing the selection of any file. */
        static readonly FILE_MODE_OPEN_DIR = 2
        
        /** The dialog allows selecting one file or directory. */
        static readonly FILE_MODE_OPEN_ANY = 3
        
        /** The dialog will warn when a file exists. */
        static readonly FILE_MODE_SAVE_FILE = 4
        
        /** The dialog only allows accessing files under the [Resource] path (`res://`). */
        static readonly ACCESS_RESOURCES = 0
        
        /** The dialog only allows accessing files under user data path (`user://`). */
        static readonly ACCESS_USERDATA = 1
        
        /** The dialog allows accessing files on the whole file system. */
        static readonly ACCESS_FILESYSTEM = 2
        constructor(identifier?: any)
        _cancelPressed(): void
        
        /** Clear all the added filters in the dialog. */
        clearFilters(): void
        
        /** Adds a comma-delimited file name [param filter] option to the [FileDialog] with an optional [param description], which restricts what files can be picked.  
         *  A [param filter] should be of the form `"filename.extension"`, where filename and extension can be `*` to match any string. Filters starting with `.` (i.e. empty filenames) are not allowed.  
         *  For example, a [param filter] of `"*.png, *.jpg"` and a [param description] of `"Images"` results in filter text "Images (*.png, *.jpg)".  
         */
        addFilter(filter: string, description?: string /* = '' */): void
        
        /** Clear the filter for file names. */
        clearFileNameFilter(): void
        
        /** Returns the name of the [OptionButton] or [CheckBox] with index [param option]. */
        getOptionName(option: int64): string
        
        /** Returns an array of values of the [OptionButton] with index [param option]. */
        getOptionValues(option: int64): PackedStringArray
        
        /** Returns the default value index of the [OptionButton] or [CheckBox] with index [param option]. */
        getOptionDefault(option: int64): int64
        
        /** Sets the name of the [OptionButton] or [CheckBox] with index [param option]. */
        setOptionName(option: int64, name: string): void
        
        /** Sets the option values of the [OptionButton] with index [param option]. */
        setOptionValues(option: int64, values: PackedStringArray | string[]): void
        
        /** Sets the default value index of the [OptionButton] or [CheckBox] with index [param option]. */
        setOptionDefault(option: int64, defaultValueIndex: int64): void
        
        /** Adds an additional [OptionButton] to the file dialog. If [param values] is empty, a [CheckBox] is added instead.  
         *  [param default_value_index] should be an index of the value in the [param values]. If [param values] is empty it should be either `1` (checked), or `0` (unchecked).  
         */
        addOption(name: string, values: PackedStringArray | string[], defaultValueIndex: int64): void
        
        /** Returns a [Dictionary] with the selected values of the additional [OptionButton]s and/or [CheckBox]es. [Dictionary] keys are names and values are selected value indices. */
        getSelectedOptions(): GDictionary
        
        /** Returns the vertical box container of the dialog, custom controls can be added to it.  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.  
         *      
         *  **Note:** Changes to this node are ignored by native file dialogs, use [method add_option] to add custom elements to the dialog instead.  
         */
        getVBox(): null | VBoxContainer
        
        /** Returns the LineEdit for the selected file.  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.  
         */
        getLineEdit(): null | LineEdit
        
        /** Clear all currently selected items in the dialog. */
        deselectAll(): void
        
        /** Invalidate and update the current dialog content list.  
         *      
         *  **Note:** This method does nothing on native file dialogs.  
         */
        invalidate(): void
        
        /** If `true`, changing the [member file_mode] property will set the window title accordingly (e.g. setting [member file_mode] to [constant FILE_MODE_OPEN_FILE] will change the window title to "Open a File"). */
        get modeOverridesTitle(): boolean
        set modeOverridesTitle(value: boolean)
        
        /** The dialog's open or save mode, which affects the selection behavior. See [enum FileMode]. */
        get fileMode(): int64
        set fileMode(value: int64)
        
        /** The file system access scope. See [enum Access] constants.  
         *  **Warning:** In Web builds, FileDialog cannot access the host file system. In sandboxed Linux and macOS environments, [member use_native_dialog] is automatically used to allow limited access to host file system.  
         */
        get access(): int64
        set access(value: int64)
        
        /** If non-empty, the given sub-folder will be "root" of this [FileDialog], i.e. user won't be able to go to its parent directory.  
         *      
         *  **Note:** This property is ignored by native file dialogs.  
         */
        get rootSubfolder(): string
        set rootSubfolder(value: string)
        
        /** The available file type filters. Each filter string in the array should be formatted like this: `*.png,*.jpg,*.jpeg;Image Files;image/png,image/jpeg`. The description text of the filter is optional and can be omitted. Both file extensions and MIME type should be always set.  
         *      
         *  **Note:** Embedded file dialog and Windows file dialog support only file extensions, while Android, Linux, and macOS file dialogs also support MIME types.  
         */
        get filters(): PackedStringArray
        set filters(value: PackedStringArray | string[])
        
        /** The filter for file names (case-insensitive). When set to a non-empty string, only files that contains the substring will be shown. [member filename_filter] can be edited by the user with the filter button at the top of the file dialog.  
         *  See also [member filters], which should be used to restrict the file types that can be selected instead of [member filename_filter] which is meant to be set by the user.  
         */
        get fileNameFilter(): string
        set fileNameFilter(value: string)
        
        /** The number of additional [OptionButton]s and [CheckBox]es in the dialog. */
        get optionCount(): any /*Options,option_*/
        set optionCount(value: any /*Options,option_*/)
        
        /** If `true`, the dialog will show hidden files.  
         *      
         *  **Note:** This property is ignored by native file dialogs on Android and Linux.  
         */
        get showHiddenFiles(): boolean
        set showHiddenFiles(value: boolean)
        
        /** If `true`, and if supported by the current [DisplayServer], OS native dialog will be used instead of custom one.  
         *      
         *  **Note:** On Android, it is only supported when using [constant ACCESS_FILESYSTEM]. For access mode [constant ACCESS_RESOURCES] and [constant ACCESS_USERDATA], the system will fall back to custom FileDialog.  
         *      
         *  **Note:** On Linux and macOS, sandboxed apps always use native dialogs to access the host file system.  
         *      
         *  **Note:** On macOS, sandboxed apps will save security-scoped bookmarks to retain access to the opened folders across multiple sessions. Use [method OS.get_granted_permissions] to get a list of saved bookmarks.  
         *      
         *  **Note:** Native dialogs are isolated from the base process, file dialog properties can't be modified once the dialog is shown.  
         */
        get useNativeDialog(): boolean
        set useNativeDialog(value: boolean)
        
        /** The current working directory of the file dialog.  
         *      
         *  **Note:** For native file dialogs, this property is only treated as a hint and may not be respected by specific OS implementations.  
         */
        get currentDir(): string
        set currentDir(value: string)
        
        /** The currently selected file of the file dialog. */
        get currentFile(): string
        set currentFile(value: string)
        
        /** The currently selected file path of the file dialog. */
        get currentPath(): string
        set currentPath(value: string)
        
        /** Emitted when the user selects a file by double-clicking it or pressing the **OK** button. */
        readonly fileSelected: Signal<(path: string) => void>
        
        /** Emitted when the user selects multiple files. */
        readonly filesSelected: Signal<(paths: PackedStringArray) => void>
        
        /** Emitted when the user selects a directory. */
        readonly dirSelected: Signal<(dir: string) => void>
        
        /** Emitted when the filter for file names changes. */
        readonly fileNameFilterChanged: Signal<(filter: string) => void>
    }
    /** Godot editor's dock for managing files in the project.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_filesystemdock.html  
     */
    class FileSystemDock<Map extends NodePathMap = any> extends VBoxContainer<Map> {
        constructor(identifier?: any)
        _fileListThumbnailDone(_unnamedArg0: string, _unnamedArg1: Texture2D, _unnamedArg2: Texture2D, _unnamedArg3: any): void
        _treeThumbnailDone(_unnamedArg0: string, _unnamedArg1: Texture2D, _unnamedArg2: Texture2D, _unnamedArg3: any): void
        
        /** Sets the given [param path] as currently selected, ensuring that the selected file/directory is visible. */
        navigateToPath(path: string): void
        
        /** Registers a new [EditorResourceTooltipPlugin]. */
        addResourceTooltipPlugin(plugin: EditorResourceTooltipPlugin): void
        
        /** Removes an [EditorResourceTooltipPlugin]. Fails if the plugin wasn't previously added. */
        removeResourceTooltipPlugin(plugin: EditorResourceTooltipPlugin): void
        _setDockHorizontal(enable: boolean): void
        _canDockHorizontal(): boolean
        _saveLayoutToConfig(_unnamedArg0: ConfigFile, _unnamedArg1: string): void
        _loadLayoutFromConfig(_unnamedArg0: ConfigFile, _unnamedArg1: string): void
        
        /** Emitted when a new scene is created that inherits the scene at [param file] path. */
        readonly inherit: Signal<(file: string) => void>
        
        /** Emitted when the given scenes are being instantiated in the editor. */
        readonly instantiate: Signal<(files: PackedStringArray) => void>
        
        /** Emitted when an external [param resource] had its file removed. */
        readonly resourceRemoved: Signal<(resource: Resource) => void>
        
        /** Emitted when the given [param file] was removed. */
        readonly fileRemoved: Signal<(file: string) => void>
        
        /** Emitted when the given [param folder] was removed. */
        readonly folderRemoved: Signal<(folder: string) => void>
        
        /** Emitted when a file is moved from [param old_file] path to [param new_file] path. */
        readonly filesMoved: Signal<(oldFile: string, newFile: string) => void>
        
        /** Emitted when a folder is moved from [param old_folder] path to [param new_folder] path. */
        readonly folderMoved: Signal<(oldFolder: string, newFolder: string) => void>
        
        /** Emitted when folders change color. */
        readonly folderColorChanged: Signal<() => void>
        
        /** Emitted when the user switches file display mode or split mode. */
        readonly displayModeChanged: Signal<() => void>
    }
    namespace FlowContainer {
        enum AlignmentMode {
            AlignmentBegin = 0,
            AlignmentCenter = 1,
            AlignmentEnd = 2,
        }
        enum LastWrapAlignmentMode {
            LastWrapAlignmentInherit = 0,
            LastWrapAlignmentBegin = 1,
            LastWrapAlignmentCenter = 2,
            LastWrapAlignmentEnd = 3,
        }
    }
    /** A container that arranges its child controls horizontally or vertically and wraps them around at the borders.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_flowcontainer.html  
     */
    class FlowContainer<Map extends NodePathMap = any> extends Container<Map> {
        /** The child controls will be arranged at the beginning of the container, i.e. top if orientation is vertical, left if orientation is horizontal (right for RTL layout). */
        static readonly ALIGNMENT_BEGIN = 0
        
        /** The child controls will be centered in the container. */
        static readonly ALIGNMENT_CENTER = 1
        
        /** The child controls will be arranged at the end of the container, i.e. bottom if orientation is vertical, right if orientation is horizontal (left for RTL layout). */
        static readonly ALIGNMENT_END = 2
        
        /** The last partially filled row or column will wrap aligned to the previous row or column in accordance with [member alignment]. */
        static readonly LAST_WRAP_ALIGNMENT_INHERIT = 0
        
        /** The last partially filled row or column will wrap aligned to the beginning of the previous row or column. */
        static readonly LAST_WRAP_ALIGNMENT_BEGIN = 1
        
        /** The last partially filled row or column will wrap aligned to the center of the previous row or column. */
        static readonly LAST_WRAP_ALIGNMENT_CENTER = 2
        
        /** The last partially filled row or column will wrap aligned to the end of the previous row or column. */
        static readonly LAST_WRAP_ALIGNMENT_END = 3
        constructor(identifier?: any)
        
        /** Returns the current line count. */
        getLineCount(): int64
        
        /** The alignment of the container's children (must be one of [constant ALIGNMENT_BEGIN], [constant ALIGNMENT_CENTER], or [constant ALIGNMENT_END]). */
        get alignment(): int64
        set alignment(value: int64)
        
        /** The wrap behavior of the last, partially filled row or column (must be one of [constant LAST_WRAP_ALIGNMENT_INHERIT], [constant LAST_WRAP_ALIGNMENT_BEGIN], [constant LAST_WRAP_ALIGNMENT_CENTER], or [constant LAST_WRAP_ALIGNMENT_END]). */
        get lastWrapAlignment(): int64
        set lastWrapAlignment(value: int64)
        
        /** If `true`, the [FlowContainer] will arrange its children vertically, rather than horizontally.  
         *  Can't be changed when using [HFlowContainer] and [VFlowContainer].  
         */
        get vertical(): boolean
        set vertical(value: boolean)
        
        /** If `true`, reverses fill direction. Horizontal [FlowContainer]s will fill rows bottom to top, vertical [FlowContainer]s will fill columns right to left.  
         *  When using a vertical [FlowContainer] with a right to left [member Control.layout_direction], columns will fill left to right instead.  
         */
        get reverseFill(): boolean
        set reverseFill(value: boolean)
    }
    /** A material that controls how volumetric fog is rendered, to be assigned to a [FogVolume].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_fogmaterial.html  
     */
    class FogMaterial extends Material {
        constructor(identifier?: any)
        /** The density of the [FogVolume]. Denser objects are more opaque, but may suffer from under-sampling artifacts that look like stripes. Negative values can be used to subtract fog from other [FogVolume]s or global volumetric fog.  
         *      
         *  **Note:** Due to limited precision, [member density] values between `-0.001` and `0.001` (exclusive) act like `0.0`. This does not apply to [member Environment.volumetric_fog_density].  
         */
        get density(): float64
        set density(value: float64)
        
        /** The single-scattering [Color] of the [FogVolume]. Internally, [member albedo] is converted into single-scattering, which is additively blended with other [FogVolume]s and the [member Environment.volumetric_fog_albedo]. */
        get albedo(): Color
        set albedo(value: Color)
        
        /** The [Color] of the light emitted by the [FogVolume]. Emitted light will not cast light or shadows on other objects, but can be useful for modulating the [Color] of the [FogVolume] independently from light sources. */
        get emission(): Color
        set emission(value: Color)
        
        /** The rate by which the height-based fog decreases in density as height increases in world space. A high falloff will result in a sharp transition, while a low falloff will result in a smoother transition. A value of `0.0` results in uniform-density fog. The height threshold is determined by the height of the associated [FogVolume]. */
        get heightFalloff(): float64
        set heightFalloff(value: float64)
        
        /** The hardness of the edges of the [FogVolume]. A higher value will result in softer edges, while a lower value will result in harder edges. */
        get edgeFade(): float64
        set edgeFade(value: float64)
        
        /** The 3D texture that is used to scale the [member density] of the [FogVolume]. This can be used to vary fog density within the [FogVolume] with any kind of static pattern. For animated effects, consider using a custom [url=https://docs.godotengine.org/en/latest/tutorials/shaders/shader_reference/fog_shader.html]fog shader[/url]. */
        get densityTexture(): null | Texture3D
        set densityTexture(value: null | Texture3D)
    }
    /** A region that contributes to the default volumetric fog from the world environment.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_fogvolume.html  
     */
    class FogVolume<Map extends NodePathMap = any> extends VisualInstance3D<Map> {
        constructor(identifier?: any)
        /** The size of the [FogVolume] when [member shape] is [constant RenderingServer.FOG_VOLUME_SHAPE_ELLIPSOID], [constant RenderingServer.FOG_VOLUME_SHAPE_CONE], [constant RenderingServer.FOG_VOLUME_SHAPE_CYLINDER] or [constant RenderingServer.FOG_VOLUME_SHAPE_BOX].  
         *      
         *  **Note:** Thin fog volumes may appear to flicker when the camera moves or rotates. This can be alleviated by increasing [member ProjectSettings.rendering/environment/volumetric_fog/volume_depth] (at a performance cost) or by decreasing [member Environment.volumetric_fog_length] (at no performance cost, but at the cost of lower fog range). Alternatively, the [FogVolume] can be made thicker and use a lower density in the [member material].  
         *      
         *  **Note:** If [member shape] is [constant RenderingServer.FOG_VOLUME_SHAPE_CONE] or [constant RenderingServer.FOG_VOLUME_SHAPE_CYLINDER], the cone/cylinder will be adjusted to fit within the size. Non-uniform scaling of cone/cylinder shapes via the [member size] property is not supported, but you can scale the [FogVolume] node instead.  
         */
        get size(): Vector3
        set size(value: Vector3)
        
        /** The shape of the [FogVolume]. This can be set to either [constant RenderingServer.FOG_VOLUME_SHAPE_ELLIPSOID], [constant RenderingServer.FOG_VOLUME_SHAPE_CONE], [constant RenderingServer.FOG_VOLUME_SHAPE_CYLINDER], [constant RenderingServer.FOG_VOLUME_SHAPE_BOX] or [constant RenderingServer.FOG_VOLUME_SHAPE_WORLD]. */
        get shape(): int64
        set shape(value: int64)
        
        /** The [Material] used by the [FogVolume]. Can be either a built-in [FogMaterial] or a custom [ShaderMaterial]. */
        get material(): null | FogMaterial | ShaderMaterial
        set material(value: null | FogMaterial | ShaderMaterial)
    }
    namespace FoldableContainer {
        enum TitlePosition {
            PositionTop = 0,
            PositionBottom = 1,
        }
    }
    /** A container that can be expanded/collapsed.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_foldablecontainer.html  
     */
    class FoldableContainer<Map extends NodePathMap = any> extends Container<Map> {
        /** Makes the title appear at the top of the container. */
        static readonly POSITION_TOP = 0
        
        /** Makes the title appear at the bottom of the container. Also makes all StyleBoxes flipped vertically. */
        static readonly POSITION_BOTTOM = 1
        constructor(identifier?: any)
        
        /** Folds the container and emits [signal folding_changed]. */
        fold(): void
        
        /** Expands the container and emits [signal folding_changed]. */
        expand(): void
        
        /** Adds a [Control] that will be placed next to the container's title, obscuring the clickable area. Prime usage is adding [Button] nodes, but it can be any [Control].  
         *  The control will be added as a child of this container and removed from previous parent if necessary. The controls will be placed aligned to the right, with the first added control being the leftmost one.  
         */
        addTitleBarControl(control: Control): void
        
        /** Removes a [Control] added with [method add_title_bar_control]. The node is not freed automatically, you need to use [method Node.queue_free]. */
        removeTitleBarControl(control: Control): void
        
        /** If `true`, the container will becomes folded and will hide all its children. */
        get folded(): boolean
        set folded(value: boolean)
        
        /** The container's title text. */
        get title(): string
        set title(value: string)
        
        /** Title's horizontal text alignment as defined in the [enum HorizontalAlignment] enum. */
        get titleAlignment(): int64
        set titleAlignment(value: int64)
        
        /** Title's position as defined in the [enum TitlePosition] enum. */
        get titlePosition(): int64
        set titlePosition(value: int64)
        
        /** Defines the behavior of the title when the text is longer than the available space. */
        get titleTextOverrunBehavior(): int64
        set titleTextOverrunBehavior(value: int64)
        
        /** The [FoldableGroup] associated with the container. When multiple [FoldableContainer] nodes share the same group, only one of them is allowed to be unfolded. */
        get foldableGroup(): null | FoldableGroup
        set foldableGroup(value: null | FoldableGroup)
        
        /** Title text writing direction. */
        get titleTextDirection(): int64
        set titleTextDirection(value: int64)
        
        /** Language code used for text shaping algorithms. If left empty, current locale is used instead. */
        get language(): string
        set language(value: string)
        
        /** Emitted when the container is folded/expanded. */
        readonly foldingChanged: Signal<(isFolded: boolean) => void>
    }
    /** A group of foldable containers that doesn't allow more than one container to be expanded at a time.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_foldablegroup.html  
     */
    class FoldableGroup extends Resource {
        constructor(identifier?: any)
        /** Returns the current expanded container. */
        getExpandedContainer(): null | FoldableContainer
        
        /** Returns an [Array] of [FoldableContainer]s that have this as their FoldableGroup (see [member FoldableContainer.foldable_group]). This is equivalent to [ButtonGroup] but for FoldableContainers. */
        getContainers(): GArray
        
        /** If `true`, it is possible to fold all containers in this FoldableGroup. */
        get allowFoldingAll(): boolean
        set allowFoldingAll(value: boolean)
        
        /** Emitted when one of the containers of the group is expanded. */
        readonly expanded: Signal<(container: FoldableContainer) => void>
    }
    /** Abstract base class for fonts and font variations.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_font.html  
     */
    class Font extends Resource {
        constructor(identifier?: any)
        /** Returns [TextServer] RID of the font cache for specific variation. */
        findVariation(variationCoordinates: GDictionary, faceIndex?: int64 /* = 0 */, strength?: float64 /* = 0 */, transform?: Transform2D /* = new Transform2D() */, spacingTop?: int64 /* = 0 */, spacingBottom?: int64 /* = 0 */, spacingSpace?: int64 /* = 0 */, spacingGlyph?: int64 /* = 0 */, baselineOffset?: float64 /* = 0 */): Rid
        
        /** Returns [Array] of valid [Font] [RID]s, which can be passed to the [TextServer] methods. */
        getRids(): GArray
        
        /** Returns the total average font height (ascent plus descent) in pixels.  
         *      
         *  **Note:** Real height of the string is context-dependent and can be significantly different from the value returned by this function. Use it only as rough estimate (e.g. as the height of empty line).  
         */
        getHeight(fontSize?: int64 /* = 16 */): float64
        
        /** Returns the average font ascent (number of pixels above the baseline).  
         *      
         *  **Note:** Real ascent of the string is context-dependent and can be significantly different from the value returned by this function. Use it only as rough estimate (e.g. as the ascent of empty line).  
         */
        getAscent(fontSize?: int64 /* = 16 */): float64
        
        /** Returns the average font descent (number of pixels below the baseline).  
         *      
         *  **Note:** Real descent of the string is context-dependent and can be significantly different from the value returned by this function. Use it only as rough estimate (e.g. as the descent of empty line).  
         */
        getDescent(fontSize?: int64 /* = 16 */): float64
        
        /** Returns average pixel offset of the underline below the baseline.  
         *      
         *  **Note:** Real underline position of the string is context-dependent and can be significantly different from the value returned by this function. Use it only as rough estimate.  
         */
        getUnderlinePosition(fontSize?: int64 /* = 16 */): float64
        
        /** Returns average thickness of the underline.  
         *      
         *  **Note:** Real underline thickness of the string is context-dependent and can be significantly different from the value returned by this function. Use it only as rough estimate.  
         */
        getUnderlineThickness(fontSize?: int64 /* = 16 */): float64
        
        /** Returns font family name. */
        getFontName(): string
        
        /** Returns font style name. */
        getFontStyleName(): string
        
        /** Returns [Dictionary] with OpenType font name strings (localized font names, version, description, license information, sample text, etc.). */
        getOtNameStrings(): GDictionary
        
        /** Returns font style flags, see [enum TextServer.FontStyle]. */
        getFontStyle(): TextServer.FontStyle
        
        /** Returns weight (boldness) of the font. A value in the `100...999` range, normal font weight is `400`, bold font weight is `700`. */
        getFontWeight(): int64
        
        /** Returns font stretch amount, compared to a normal width. A percentage value between `50%` and `200%`. */
        getFontStretch(): int64
        
        /** Returns the spacing for the given `type` (see [enum TextServer.SpacingType]). */
        getSpacing(spacing: TextServer.SpacingType): int64
        
        /** Returns a set of OpenType feature tags. More info: [url=https://docs.microsoft.com/en-us/typography/opentype/spec/featuretags]OpenType feature tags[/url]. */
        getOpentypeFeatures(): GDictionary
        
        /** Sets LRU cache capacity for `draw_*` methods. */
        setCacheCapacity(singleLine: int64, multiLine: int64): void
        
        /** Returns the size of a bounding box of a single-line string, taking kerning, advance and subpixel positioning into account. See also [method get_multiline_string_size] and [method draw_string].  
         *  For example, to get the string size as displayed by a single-line Label, use:  
         *    
         *      
         *  **Note:** Since kerning, advance and subpixel positioning are taken into account by [method get_string_size], using separate [method get_string_size] calls on substrings of a string then adding the results together will return a different result compared to using a single [method get_string_size] call on the full string.  
         *      
         *  **Note:** Real height of the string is context-dependent and can be significantly different from the value returned by [method get_height].  
         */
        getStringSize(text: string, alignment?: HorizontalAlignment /* = 0 */, width?: float64 /* = -1 */, fontSize?: int64 /* = 16 */, justificationFlags?: TextServer.JustificationFlag /* = 3 */, direction?: TextServer.Direction /* = 0 */, orientation?: TextServer.Orientation /* = 0 */): Vector2
        
        /** Returns the size of a bounding box of a string broken into the lines, taking kerning and advance into account.  
         *  See also [method draw_multiline_string].  
         */
        getMultilineStringSize(text: string, alignment?: HorizontalAlignment /* = 0 */, width?: float64 /* = -1 */, fontSize?: int64 /* = 16 */, maxLines?: int64 /* = -1 */, brkFlags?: TextServer.LineBreakFlag /* = 3 */, justificationFlags?: TextServer.JustificationFlag /* = 3 */, direction?: TextServer.Direction /* = 0 */, orientation?: TextServer.Orientation /* = 0 */): Vector2
        
        /** Draw [param text] into a canvas item using the font, at a given position, with [param modulate] color, optionally clipping the width and aligning horizontally. [param pos] specifies the baseline, not the top. To draw from the top,  *ascent*  must be added to the Y axis. If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used.  
         *  See also [method CanvasItem.draw_string].  
         */
        drawString(canvasItem: Rid, pos: Vector2, text: string, alignment?: HorizontalAlignment /* = 0 */, width?: float64 /* = -1 */, fontSize?: int64 /* = 16 */, modulate?: Color /* = new Color(1, 1, 1, 1) */, justificationFlags?: TextServer.JustificationFlag /* = 3 */, direction?: TextServer.Direction /* = 0 */, orientation?: TextServer.Orientation /* = 0 */, oversampling?: float64 /* = 0 */): void
        
        /** Breaks [param text] into lines using rules specified by [param brk_flags] and draws it into a canvas item using the font, at a given position, with [param modulate] color, optionally clipping the width and aligning horizontally. [param pos] specifies the baseline of the first line, not the top. To draw from the top,  *ascent*  must be added to the Y axis. If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used.  
         *  See also [method CanvasItem.draw_multiline_string].  
         */
        drawMultilineString(canvasItem: Rid, pos: Vector2, text: string, alignment?: HorizontalAlignment /* = 0 */, width?: float64 /* = -1 */, fontSize?: int64 /* = 16 */, maxLines?: int64 /* = -1 */, modulate?: Color /* = new Color(1, 1, 1, 1) */, brkFlags?: TextServer.LineBreakFlag /* = 3 */, justificationFlags?: TextServer.JustificationFlag /* = 3 */, direction?: TextServer.Direction /* = 0 */, orientation?: TextServer.Orientation /* = 0 */, oversampling?: float64 /* = 0 */): void
        
        /** Draw [param text] outline into a canvas item using the font, at a given position, with [param modulate] color and [param size] outline size, optionally clipping the width and aligning horizontally. [param pos] specifies the baseline, not the top. To draw from the top,  *ascent*  must be added to the Y axis. If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used.  
         *  See also [method CanvasItem.draw_string_outline].  
         */
        drawStringOutline(canvasItem: Rid, pos: Vector2, text: string, alignment?: HorizontalAlignment /* = 0 */, width?: float64 /* = -1 */, fontSize?: int64 /* = 16 */, size?: int64 /* = 1 */, modulate?: Color /* = new Color(1, 1, 1, 1) */, justificationFlags?: TextServer.JustificationFlag /* = 3 */, direction?: TextServer.Direction /* = 0 */, orientation?: TextServer.Orientation /* = 0 */, oversampling?: float64 /* = 0 */): void
        
        /** Breaks [param text] to the lines using rules specified by [param brk_flags] and draws text outline into a canvas item using the font, at a given position, with [param modulate] color and [param size] outline size, optionally clipping the width and aligning horizontally. [param pos] specifies the baseline of the first line, not the top. To draw from the top,  *ascent*  must be added to the Y axis. If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used.  
         *  See also [method CanvasItem.draw_multiline_string_outline].  
         */
        drawMultilineStringOutline(canvasItem: Rid, pos: Vector2, text: string, alignment?: HorizontalAlignment /* = 0 */, width?: float64 /* = -1 */, fontSize?: int64 /* = 16 */, maxLines?: int64 /* = -1 */, size?: int64 /* = 1 */, modulate?: Color /* = new Color(1, 1, 1, 1) */, brkFlags?: TextServer.LineBreakFlag /* = 3 */, justificationFlags?: TextServer.JustificationFlag /* = 3 */, direction?: TextServer.Direction /* = 0 */, orientation?: TextServer.Orientation /* = 0 */, oversampling?: float64 /* = 0 */): void
        
        /** Returns the size of a character. Does not take kerning into account.  
         *      
         *  **Note:** Do not use this function to calculate width of the string character by character, use [method get_string_size] or [TextLine] instead. The height returned is the font height (see also [method get_height]) and has no relation to the glyph height.  
         */
        getCharSize(char: int64, fontSize: int64): Vector2
        
        /** Draw a single Unicode character [param char] into a canvas item using the font, at a given position, with [param modulate] color. [param pos] specifies the baseline, not the top. To draw from the top,  *ascent*  must be added to the Y axis. If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used.  
         *      
         *  **Note:** Do not use this function to draw strings character by character, use [method draw_string] or [TextLine] instead.  
         */
        drawChar(canvasItem: Rid, pos: Vector2, char: int64, fontSize: int64, modulate?: Color /* = new Color(1, 1, 1, 1) */, oversampling?: float64 /* = 0 */): float64
        
        /** Draw a single Unicode character [param char] outline into a canvas item using the font, at a given position, with [param modulate] color and [param size] outline size. [param pos] specifies the baseline, not the top. To draw from the top,  *ascent*  must be added to the Y axis. If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used.  
         *      
         *  **Note:** Do not use this function to draw strings character by character, use [method draw_string] or [TextLine] instead.  
         */
        drawCharOutline(canvasItem: Rid, pos: Vector2, char: int64, fontSize: int64, size?: int64 /* = -1 */, modulate?: Color /* = new Color(1, 1, 1, 1) */, oversampling?: float64 /* = 0 */): float64
        
        /** Returns `true` if a Unicode [param char] is available in the font. */
        hasChar(char: int64): boolean
        
        /** Returns a string containing all the characters available in the font.  
         *  If a given character is included in more than one font data source, it appears only once in the returned string.  
         */
        getSupportedChars(): string
        
        /** Returns `true`, if font supports given language ([url=https://en.wikipedia.org/wiki/ISO_639-1]ISO 639[/url] code). */
        isLanguageSupported(language: string): boolean
        
        /** Returns `true`, if font supports given script ([url=https://en.wikipedia.org/wiki/ISO_15924]ISO 15924[/url] code). */
        isScriptSupported(script: string): boolean
        
        /** Returns list of OpenType features supported by font. */
        getSupportedFeatureList(): GDictionary
        
        /** Returns list of supported [url=https://docs.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg]variation coordinates[/url], each coordinate is returned as `tag: Vector3i(min_value,max_value,default_value)`.  
         *  Font variations allow for continuous change of glyph characteristics along some given design axis, such as weight, width or slant.  
         *  To print available variation axes of a variable font:  
         *    
         *      
         *  **Note:** To set and get variation coordinates of a [FontVariation], use [member FontVariation.variation_opentype].  
         */
        getSupportedVariationList(): GDictionary
        
        /** Returns number of faces in the TrueType / OpenType collection. */
        getFaceCount(): int64
        
        /** Array of fallback [Font]s to use as a substitute if a glyph is not found in this current [Font].  
         *  If this array is empty in a [FontVariation], the [member FontVariation.base_font]'s fallbacks are used instead.  
         */
        get fallbacks(): GArray
        set fallbacks(value: GArray)
    }
    /** Holds font source data and prerendered glyph cache, imported from a dynamic or a bitmap font.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_fontfile.html  
     */
    class FontFile extends Font {
        constructor(identifier?: any)
        /** Loads an AngelCode BMFont (.fnt, .font) bitmap font from file [param path].  
         *  **Warning:** This method should only be used in the editor or in cases when you need to load external fonts at run-time, such as fonts located at the `user://` directory.  
         */
        loadBitmapFont(path: string): GError
        
        /** Loads a TrueType (.ttf), OpenType (.otf), WOFF (.woff), WOFF2 (.woff2) or Type 1 (.pfb, .pfm) dynamic font from file [param path].  
         *  **Warning:** This method should only be used in the editor or in cases when you need to load external fonts at run-time, such as fonts located at the `user://` directory.  
         */
        loadDynamicFont(path: string): GError
        
        /** Returns number of the font cache entries. */
        getCacheCount(): int64
        
        /** Removes all font cache entries. */
        clearCache(): void
        
        /** Removes specified font cache entry. */
        removeCache(cacheIndex: int64): void
        
        /** Returns list of the font sizes in the cache. Each size is [Vector2i] with font size and outline size. */
        getSizeCacheList(cacheIndex: int64): GArray
        
        /** Removes all font sizes from the cache entry. */
        clearSizeCache(cacheIndex: int64): void
        
        /** Removes specified font size from the cache entry. */
        removeSizeCache(cacheIndex: int64, size: Vector2I): void
        
        /** Sets variation coordinates for the specified font cache entry. See [method Font.get_supported_variation_list] for more info. */
        setVariationCoordinates(cacheIndex: int64, variationCoordinates: GDictionary): void
        
        /** Returns variation coordinates for the specified font cache entry. See [method Font.get_supported_variation_list] for more info. */
        getVariationCoordinates(cacheIndex: int64): GDictionary
        
        /** Sets embolden strength, if is not equal to zero, emboldens the font outlines. Negative values reduce the outline thickness. */
        setEmbolden(cacheIndex: int64, strength: float64): void
        
        /** Returns embolden strength, if is not equal to zero, emboldens the font outlines. Negative values reduce the outline thickness. */
        getEmbolden(cacheIndex: int64): float64
        
        /** Sets 2D transform, applied to the font outlines, can be used for slanting, flipping, and rotating glyphs. */
        setTransform(cacheIndex: int64, transform: Transform2D): void
        
        /** Returns 2D transform, applied to the font outlines, can be used for slanting, flipping and rotating glyphs. */
        getTransform(cacheIndex: int64): Transform2D
        
        /** Sets the spacing for [param spacing] (see [enum TextServer.SpacingType]) to [param value] in pixels (not relative to the font size). */
        setExtraSpacing(cacheIndex: int64, spacing: TextServer.SpacingType, value: int64): void
        
        /** Returns spacing for [param spacing] (see [enum TextServer.SpacingType]) in pixels (not relative to the font size). */
        getExtraSpacing(cacheIndex: int64, spacing: TextServer.SpacingType): int64
        
        /** Sets extra baseline offset (as a fraction of font height). */
        setExtraBaselineOffset(cacheIndex: int64, baselineOffset: float64): void
        
        /** Returns extra baseline offset (as a fraction of font height). */
        getExtraBaselineOffset(cacheIndex: int64): float64
        
        /** Sets an active face index in the TrueType / OpenType collection. */
        setFaceIndex(cacheIndex: int64, faceIndex: int64): void
        
        /** Returns an active face index in the TrueType / OpenType collection. */
        getFaceIndex(cacheIndex: int64): int64
        
        /** Sets the font ascent (number of pixels above the baseline). */
        setCacheAscent(cacheIndex: int64, size: int64, ascent: float64): void
        
        /** Returns the font ascent (number of pixels above the baseline). */
        getCacheAscent(cacheIndex: int64, size: int64): float64
        
        /** Sets the font descent (number of pixels below the baseline). */
        setCacheDescent(cacheIndex: int64, size: int64, descent: float64): void
        
        /** Returns the font descent (number of pixels below the baseline). */
        getCacheDescent(cacheIndex: int64, size: int64): float64
        
        /** Sets pixel offset of the underline below the baseline. */
        setCacheUnderlinePosition(cacheIndex: int64, size: int64, underlinePosition: float64): void
        
        /** Returns pixel offset of the underline below the baseline. */
        getCacheUnderlinePosition(cacheIndex: int64, size: int64): float64
        
        /** Sets thickness of the underline in pixels. */
        setCacheUnderlineThickness(cacheIndex: int64, size: int64, underlineThickness: float64): void
        
        /** Returns thickness of the underline in pixels. */
        getCacheUnderlineThickness(cacheIndex: int64, size: int64): float64
        
        /** Sets scaling factor of the color bitmap font. */
        setCacheScale(cacheIndex: int64, size: int64, scale: float64): void
        
        /** Returns scaling factor of the color bitmap font. */
        getCacheScale(cacheIndex: int64, size: int64): float64
        
        /** Returns number of textures used by font cache entry. */
        getTextureCount(cacheIndex: int64, size: Vector2I): int64
        
        /** Removes all textures from font cache entry.  
         *      
         *  **Note:** This function will not remove glyphs associated with the texture, use [method remove_glyph] to remove them manually.  
         */
        clearTextures(cacheIndex: int64, size: Vector2I): void
        
        /** Removes specified texture from the cache entry.  
         *      
         *  **Note:** This function will not remove glyphs associated with the texture. Remove them manually using [method remove_glyph].  
         */
        removeTexture(cacheIndex: int64, size: Vector2I, textureIndex: int64): void
        
        /** Sets font cache texture image. */
        setTextureImage(cacheIndex: int64, size: Vector2I, textureIndex: int64, image: Image): void
        
        /** Returns a copy of the font cache texture image. */
        getTextureImage(cacheIndex: int64, size: Vector2I, textureIndex: int64): null | Image
        
        /** Sets array containing glyph packing data. */
        setTextureOffsets(cacheIndex: int64, size: Vector2I, textureIndex: int64, offset: PackedInt32Array | int32[]): void
        
        /** Returns a copy of the array containing glyph packing data. */
        getTextureOffsets(cacheIndex: int64, size: Vector2I, textureIndex: int64): PackedInt32Array
        
        /** Returns list of rendered glyphs in the cache entry. */
        getGlyphList(cacheIndex: int64, size: Vector2I): PackedInt32Array
        
        /** Removes all rendered glyph information from the cache entry.  
         *      
         *  **Note:** This function will not remove textures associated with the glyphs, use [method remove_texture] to remove them manually.  
         */
        clearGlyphs(cacheIndex: int64, size: Vector2I): void
        
        /** Removes specified rendered glyph information from the cache entry.  
         *      
         *  **Note:** This function will not remove textures associated with the glyphs, use [method remove_texture] to remove them manually.  
         */
        removeGlyph(cacheIndex: int64, size: Vector2I, glyph: int64): void
        
        /** Sets glyph advance (offset of the next glyph).  
         *      
         *  **Note:** Advance for glyphs outlines is the same as the base glyph advance and is not saved.  
         */
        setGlyphAdvance(cacheIndex: int64, size: int64, glyph: int64, advance: Vector2): void
        
        /** Returns glyph advance (offset of the next glyph).  
         *      
         *  **Note:** Advance for glyphs outlines is the same as the base glyph advance and is not saved.  
         */
        getGlyphAdvance(cacheIndex: int64, size: int64, glyph: int64): Vector2
        
        /** Sets glyph offset from the baseline. */
        setGlyphOffset(cacheIndex: int64, size: Vector2I, glyph: int64, offset: Vector2): void
        
        /** Returns glyph offset from the baseline. */
        getGlyphOffset(cacheIndex: int64, size: Vector2I, glyph: int64): Vector2
        
        /** Sets glyph size. */
        setGlyphSize(cacheIndex: int64, size: Vector2I, glyph: int64, glSize: Vector2): void
        
        /** Returns glyph size. */
        getGlyphSize(cacheIndex: int64, size: Vector2I, glyph: int64): Vector2
        
        /** Sets rectangle in the cache texture containing the glyph. */
        setGlyphUVRect(cacheIndex: int64, size: Vector2I, glyph: int64, uVRect: Rect2): void
        
        /** Returns rectangle in the cache texture containing the glyph. */
        getGlyphUVRect(cacheIndex: int64, size: Vector2I, glyph: int64): Rect2
        
        /** Sets index of the cache texture containing the glyph. */
        setGlyphTextureIdx(cacheIndex: int64, size: Vector2I, glyph: int64, textureIdx: int64): void
        
        /** Returns index of the cache texture containing the glyph. */
        getGlyphTextureIdx(cacheIndex: int64, size: Vector2I, glyph: int64): int64
        
        /** Returns list of the kerning overrides. */
        getKerningList(cacheIndex: int64, size: int64): GArray
        
        /** Removes all kerning overrides. */
        clearKerningMap(cacheIndex: int64, size: int64): void
        
        /** Removes kerning override for the pair of glyphs. */
        removeKerning(cacheIndex: int64, size: int64, glyphPair: Vector2I): void
        
        /** Sets kerning for the pair of glyphs. */
        setKerning(cacheIndex: int64, size: int64, glyphPair: Vector2I, kerning: Vector2): void
        
        /** Returns kerning for the pair of glyphs. */
        getKerning(cacheIndex: int64, size: int64, glyphPair: Vector2I): Vector2
        
        /** Renders the range of characters to the font cache texture. */
        renderRange(cacheIndex: int64, size: Vector2I, start: int64, end: int64): void
        
        /** Renders specified glyph to the font cache texture. */
        renderGlyph(cacheIndex: int64, size: Vector2I, index: int64): void
        
        /** Adds override for [method Font.is_language_supported]. */
        setLanguageSupportOverride(language: string, supported: boolean): void
        
        /** Returns `true` if support override is enabled for the [param language]. */
        getLanguageSupportOverride(language: string): boolean
        
        /** Remove language support override. */
        removeLanguageSupportOverride(language: string): void
        
        /** Returns list of language support overrides. */
        getLanguageSupportOverrides(): PackedStringArray
        
        /** Adds override for [method Font.is_script_supported]. */
        setScriptSupportOverride(script: string, supported: boolean): void
        
        /** Returns `true` if support override is enabled for the [param script]. */
        getScriptSupportOverride(script: string): boolean
        
        /** Removes script support override. */
        removeScriptSupportOverride(script: string): void
        
        /** Returns list of script support overrides. */
        getScriptSupportOverrides(): PackedStringArray
        
        /** Returns the glyph index of a [param char], optionally modified by the [param variation_selector]. */
        getGlyphIndex(size: int64, char: int64, variationSelector: int64): int64
        
        /** Returns character code associated with [param glyph_index], or `0` if [param glyph_index] is invalid. See [method get_glyph_index]. */
        getCharFromGlyphIndex(size: int64, glyphIndex: int64): int64
        
        /** Deprecated. This property does nothing. */
        get oversampling(): float64
        set oversampling(value: float64)
        
        /** Contents of the dynamic font source file. */
        get data(): PackedByteArray
        set data(value: PackedByteArray | byte[] | ArrayBuffer)
        
        /** If set to `true`, generate mipmaps for the font textures. */
        get generateMipmaps(): boolean
        set generateMipmaps(value: boolean)
        
        /** If set to `true`, embedded font bitmap loading is disabled (bitmap-only and color fonts ignore this property). */
        get disableEmbeddedBitmaps(): boolean
        set disableEmbeddedBitmaps(value: boolean)
        
        /** Font anti-aliasing mode. */
        get antialiasing(): int64
        set antialiasing(value: int64)
        
        /** Font family name. */
        get fontName(): string
        set fontName(value: string)
        
        /** Font style name. */
        get styleName(): string
        set styleName(value: string)
        
        /** Font style flags, see [enum TextServer.FontStyle]. */
        get fontStyle(): int64
        set fontStyle(value: int64)
        
        /** Weight (boldness) of the font. A value in the `100...999` range, normal font weight is `400`, bold font weight is `700`. */
        get fontWeight(): int64
        set fontWeight(value: int64)
        
        /** Font stretch amount, compared to a normal width. A percentage value between `50%` and `200%`. */
        get fontStretch(): int64
        set fontStretch(value: int64)
        
        /** Font glyph subpixel positioning mode. Subpixel positioning provides shaper text and better kerning for smaller font sizes, at the cost of higher memory usage and lower font rasterization speed. Use [constant TextServer.SUBPIXEL_POSITIONING_AUTO] to automatically enable it based on the font size. */
        get subpixelPositioning(): int64
        set subpixelPositioning(value: int64)
        
        /** If set to `true`, when aligning glyphs to the pixel boundaries rounding remainders are accumulated to ensure more uniform glyph distribution. This setting has no effect if subpixel positioning is enabled. */
        get keepRoundingRemainders(): boolean
        set keepRoundingRemainders(value: boolean)
        
        /** If set to `true`, glyphs of all sizes are rendered using single multichannel signed distance field (MSDF) generated from the dynamic font vector data. Since this approach does not rely on rasterizing the font every time its size changes, this allows for resizing the font in real-time without any performance penalty. Text will also not look grainy for [Control]s that are scaled down (or for [Label3D]s viewed from a long distance). As a downside, font hinting is not available with MSDF. The lack of font hinting may result in less crisp and less readable fonts at small sizes.  
         *      
         *  **Note:** If using font outlines, [member msdf_pixel_range] must be set to at least  *twice*  the size of the largest font outline.  
         *      
         *  **Note:** MSDF font rendering does not render glyphs with overlapping shapes correctly. Overlapping shapes are not valid per the OpenType standard, but are still commonly found in many font files, especially those converted by Google Fonts. To avoid issues with overlapping glyphs, consider downloading the font file directly from the type foundry instead of relying on Google Fonts.  
         */
        get multichannelSignedDistanceField(): boolean
        set multichannelSignedDistanceField(value: boolean)
        
        /** The width of the range around the shape between the minimum and maximum representable signed distance. If using font outlines, [member msdf_pixel_range] must be set to at least  *twice*  the size of the largest font outline. The default [member msdf_pixel_range] value of `16` allows outline sizes up to `8` to look correct. */
        get msdfPixelRange(): int64
        set msdfPixelRange(value: int64)
        
        /** Source font size used to generate MSDF textures. Higher values allow for more precision, but are slower to render and require more memory. Only increase this value if you notice a visible lack of precision in glyph rendering. */
        get msdfSize(): int64
        set msdfSize(value: int64)
        
        /** If set to `true`, system fonts can be automatically used as fallbacks. */
        get allowSystemFallback(): boolean
        set allowSystemFallback(value: boolean)
        
        /** If set to `true`, auto-hinting is supported and preferred over font built-in hinting. Used by dynamic fonts only (MSDF fonts don't support hinting). */
        get forceAutohinter(): boolean
        set forceAutohinter(value: boolean)
        
        /** If set to `true`, color modulation is applied when drawing colored glyphs, otherwise it's applied to the monochrome glyphs only. */
        get modulateColorGlyphs(): boolean
        set modulateColorGlyphs(value: boolean)
        
        /** Font hinting mode. Used by dynamic fonts only. */
        get hinting(): int64
        set hinting(value: int64)
        
        /** Font size, used only for the bitmap fonts. */
        get fixedSize(): int64
        set fixedSize(value: int64)
        
        /** Scaling mode, used only for the bitmap fonts with [member fixed_size] greater than zero. */
        get fixedSizeScaleMode(): int64
        set fixedSizeScaleMode(value: int64)
        
        /** Font OpenType feature set override. */
        get opentypeFeatureOverrides(): GDictionary
        set opentypeFeatureOverrides(value: GDictionary)
    }
    /** A variation of a font with additional settings.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_fontvariation.html  
     */
    class FontVariation extends Font {
        constructor(identifier?: any)
        /** Sets the spacing for [param spacing] (see [enum TextServer.SpacingType]) to [param value] in pixels (not relative to the font size). */
        setSpacing(spacing: TextServer.SpacingType, value: int64): void
        
        /** Base font used to create a variation. If not set, default [Theme] font is used. */
        get baseFont(): null | Font
        set baseFont(value: null | Font)
        
        /** Font OpenType variation coordinates. More info: [url=https://docs.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg]OpenType variation tags[/url].  
         *      
         *  **Note:** This [Dictionary] uses OpenType tags as keys. Variation axes can be identified both by tags ([int], e.g. `0x77678674`) and names ([String], e.g. `wght`). Some axes might be accessible by multiple names. For example, `wght` refers to the same axis as `weight`. Tags on the other hand are unique. To convert between names and tags, use [method TextServer.name_to_tag] and [method TextServer.tag_to_name].  
         *      
         *  **Note:** To get available variation axes of a font, use [method Font.get_supported_variation_list].  
         */
        get variationOpentype(): GDictionary
        set variationOpentype(value: GDictionary)
        
        /** Active face index in the TrueType / OpenType collection file. */
        get variationFaceIndex(): int64
        set variationFaceIndex(value: int64)
        
        /** If is not equal to zero, emboldens the font outlines. Negative values reduce the outline thickness.  
         *      
         *  **Note:** Emboldened fonts might have self-intersecting outlines, which will prevent MSDF fonts and [TextMesh] from working correctly.  
         */
        get variationEmbolden(): float64
        set variationEmbolden(value: float64)
        
        /** 2D transform, applied to the font outlines, can be used for slanting, flipping and rotating glyphs.  
         *  For example, to simulate italic typeface by slanting, apply the following transform `Transform2D(1.0, slant, 0.0, 1.0, 0.0, 0.0)`.  
         */
        get variationTransform(): Transform2D
        set variationTransform(value: Transform2D)
        
        /** A set of OpenType feature tags. More info: [url=https://docs.microsoft.com/en-us/typography/opentype/spec/featuretags]OpenType feature tags[/url]. */
        get opentypeFeatures(): GDictionary
        set opentypeFeatures(value: GDictionary)
        
        /** Extra spacing between graphical glyphs. */
        get spacingGlyph(): int64
        set spacingGlyph(value: int64)
        
        /** Extra width of the space glyphs. */
        get spacingSpace(): int64
        set spacingSpace(value: int64)
        
        /** Extra spacing at the top of the line in pixels. */
        get spacingTop(): int64
        set spacingTop(value: int64)
        
        /** Extra spacing at the bottom of the line in pixels. */
        get spacingBottom(): int64
        set spacingBottom(value: int64)
        
        /** Extra baseline offset (as a fraction of font height). */
        get baselineOffset(): float64
        set baselineOffset(value: float64)
    }
    /** Framebuffer cache manager for Rendering Device based renderers.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_framebuffercacherd.html  
     */
    class FramebufferCacheRD extends GObject {
        constructor(identifier?: any)
        /** Creates, or obtains a cached, framebuffer. [param textures] lists textures accessed. [param passes] defines the subpasses and texture allocation, if left empty a single pass is created and textures are allocated depending on their usage flags. [param views] defines the number of views used when rendering. */
        static getCacheMultipass(textures: GArray, passes: GArray, views: int64): Rid
    }
    namespace GDExtension {
        enum InitializationLevel {
            InitializationLevelCore = 0,
            InitializationLevelServers = 1,
            InitializationLevelScene = 2,
            InitializationLevelEditor = 3,
        }
    }
    /** A native library for GDExtension.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_gdextension.html  
     */
    class GDExtension extends Resource {
        /** The library is initialized at the same time as the core features of the engine. */
        static readonly INITIALIZATION_LEVEL_CORE = 0
        
        /** The library is initialized at the same time as the engine's servers (such as [RenderingServer] or [PhysicsServer3D]). */
        static readonly INITIALIZATION_LEVEL_SERVERS = 1
        
        /** The library is initialized at the same time as the engine's scene-related classes. */
        static readonly INITIALIZATION_LEVEL_SCENE = 2
        
        /** The library is initialized at the same time as the engine's editor classes. Only happens when loading the GDExtension in the editor. */
        static readonly INITIALIZATION_LEVEL_EDITOR = 3
        constructor(identifier?: any)
        
        /** Returns `true` if this extension's library has been opened. */
        isLibraryOpen(): boolean
        
        /** Returns the lowest level required for this extension to be properly initialized (see the [enum InitializationLevel] enum). */
        getMinimumLibraryInitializationLevel(): GDExtension.InitializationLevel
    }
    namespace GltfAccessor {
        enum GltfAccessorType {
            TypeScalar = 0,
            TypeVec2 = 1,
            TypeVec3 = 2,
            TypeVec4 = 3,
            TypeMat2 = 4,
            TypeMat3 = 5,
            TypeMat4 = 6,
        }
        enum GltfComponentType {
            ComponentTypeNone = 0,
            ComponentTypeSignedByte = 5120,
            ComponentTypeUnsignedByte = 5121,
            ComponentTypeSignedShort = 5122,
            ComponentTypeUnsignedShort = 5123,
            ComponentTypeSignedInt = 5124,
            ComponentTypeUnsignedInt = 5125,
            ComponentTypeSingleFloat = 5126,
            ComponentTypeDoubleFloat = 5130,
            ComponentTypeHalfFloat = 5131,
            ComponentTypeSignedLong = 5134,
            ComponentTypeUnsignedLong = 5135,
        }
    }
    class GltfAccessor extends Resource {
        static readonly TYPE_SCALAR = 0
        static readonly TYPE_VEC2 = 1
        static readonly TYPE_VEC3 = 2
        static readonly TYPE_VEC4 = 3
        static readonly TYPE_MAT2 = 4
        static readonly TYPE_MAT3 = 5
        static readonly TYPE_MAT4 = 6
        static readonly COMPONENT_TYPE_NONE = 0
        static readonly COMPONENT_TYPE_SIGNED_BYTE = 5120
        static readonly COMPONENT_TYPE_UNSIGNED_BYTE = 5121
        static readonly COMPONENT_TYPE_SIGNED_SHORT = 5122
        static readonly COMPONENT_TYPE_UNSIGNED_SHORT = 5123
        static readonly COMPONENT_TYPE_SIGNED_INT = 5124
        static readonly COMPONENT_TYPE_UNSIGNED_INT = 5125
        static readonly COMPONENT_TYPE_SINGLE_FLOAT = 5126
        static readonly COMPONENT_TYPE_DOUBLE_FLOAT = 5130
        static readonly COMPONENT_TYPE_HALF_FLOAT = 5131
        static readonly COMPONENT_TYPE_SIGNED_LONG = 5134
        static readonly COMPONENT_TYPE_UNSIGNED_LONG = 5135
        constructor(identifier?: any)
        get bufferView(): int64
        set bufferView(value: int64)
        get byteOffset(): int64
        set byteOffset(value: int64)
        get componentType(): int64
        set componentType(value: int64)
        get normalized(): boolean
        set normalized(value: boolean)
        get count(): int64
        set count(value: int64)
        get accessorType(): int64
        set accessorType(value: int64)
        get type(): int64
        set type(value: int64)
        get min(): PackedFloat64Array
        set min(value: PackedFloat64Array | float64[])
        get max(): PackedFloat64Array
        set max(value: PackedFloat64Array | float64[])
        get sparseCount(): int64
        set sparseCount(value: int64)
        get sparseIndicesBufferView(): int64
        set sparseIndicesBufferView(value: int64)
        get sparseIndicesByteOffset(): int64
        set sparseIndicesByteOffset(value: int64)
        get sparseIndicesComponentType(): int64
        set sparseIndicesComponentType(value: int64)
        get sparseValuesBufferView(): int64
        set sparseValuesBufferView(value: int64)
        get sparseValuesByteOffset(): int64
        set sparseValuesByteOffset(value: int64)
    }
    class GltfAnimation extends Resource {
        constructor(identifier?: any)
        getAdditionalData(extensionName: StringName): any
        setAdditionalData(extensionName: StringName, additionalData: any): void
        get originalName(): string
        set originalName(value: string)
        get loop(): boolean
        set loop(value: boolean)
    }
    class GltfBufferView extends Resource {
        constructor(identifier?: any)
        loadBufferViewData(state: GltfState): PackedByteArray
        get buffer(): int64
        set buffer(value: int64)
        get byteOffset(): int64
        set byteOffset(value: int64)
        get byteLength(): int64
        set byteLength(value: int64)
        get byteStride(): int64
        set byteStride(value: int64)
        get indices(): boolean
        set indices(value: boolean)
        get vertexAttributes(): boolean
        set vertexAttributes(value: boolean)
    }
    class GltfCamera extends Resource {
        constructor(identifier?: any)
        static fromNode(cameraNode: Camera3D): null | GltfCamera
        toNode(): null | Camera3D
        static fromDictionary(dictionary: GDictionary): null | GltfCamera
        toDictionary(): GDictionary
        get perspective(): boolean
        set perspective(value: boolean)
        get fov(): float64
        set fov(value: float64)
        get sizeMag(): float64
        set sizeMag(value: float64)
        get depthFar(): float64
        set depthFar(value: float64)
        get depthNear(): float64
        set depthNear(value: float64)
    }
    namespace GltfDocument {
        enum RootNodeMode {
            RootNodeModeSingleRoot = 0,
            RootNodeModeKeepRoot = 1,
            RootNodeModeMultiRoot = 2,
        }
        enum VisibilityMode {
            VisibilityModeIncludeRequired = 0,
            VisibilityModeIncludeOptional = 1,
            VisibilityModeExclude = 2,
        }
    }
    class GltfDocument extends Resource {
        static readonly ROOT_NODE_MODE_SINGLE_ROOT = 0
        static readonly ROOT_NODE_MODE_KEEP_ROOT = 1
        static readonly ROOT_NODE_MODE_MULTI_ROOT = 2
        static readonly VISIBILITY_MODE_INCLUDE_REQUIRED = 0
        static readonly VISIBILITY_MODE_INCLUDE_OPTIONAL = 1
        static readonly VISIBILITY_MODE_EXCLUDE = 2
        constructor(identifier?: any)
        appendFromFile(path: string, state: GltfState, flags?: int64 /* = 0 */, basePath?: string /* = '' */): GError
        appendFromBuffer(bytes: PackedByteArray | byte[] | ArrayBuffer, basePath: string, state: GltfState, flags?: int64 /* = 0 */): GError
        appendFromScene(node: Node, state: GltfState, flags?: int64 /* = 0 */): GError
        generateScene(state: GltfState, bakeFps?: float64 /* = 30 */, trimming?: boolean /* = false */, removeImmutableTracks?: boolean /* = true */): null | Node
        generateBuffer(state: GltfState): PackedByteArray
        writeToFilesystem(state: GltfState, path: string): GError
        static importObjectModelProperty(state: GltfState, jsonPointer: string): null | GltfObjectModelProperty
        static exportObjectModelProperty(state: GltfState, nodePath: NodePath | string, godotNode: Node, gltfNodeIndex: int64): null | GltfObjectModelProperty
        static registerGltfDocumentExtension(extension: GltfDocumentExtension, firstPriority?: boolean /* = false */): void
        static unregisterGltfDocumentExtension(extension: GltfDocumentExtension): void
        static getSupportedGltfExtensions(): PackedStringArray
        get imageFormat(): string
        set imageFormat(value: string)
        get lossyQuality(): float64
        set lossyQuality(value: float64)
        get fallbackImageFormat(): string
        set fallbackImageFormat(value: string)
        get fallbackImageQuality(): float64
        set fallbackImageQuality(value: float64)
        get rootNodeMode(): int64
        set rootNodeMode(value: int64)
        get visibilityMode(): int64
        set visibilityMode(value: int64)
    }
    class GltfDocumentExtension extends Resource {
        constructor(identifier?: any)
        /* gdvirtual */ _importPreflight(state: GltfState, extensions: PackedStringArray | string[]): GError
        /* gdvirtual */ _getSupportedExtensions(): PackedStringArray
        /* gdvirtual */ _parseNodeExtensions(state: GltfState, gltfNode: GltfNode, extensions: GDictionary): GError
        /* gdvirtual */ _parseImageData(state: GltfState, imageData: PackedByteArray | byte[] | ArrayBuffer, mimeType: string, retImage: Image): GError
        /* gdvirtual */ _getImageFileExtension(): string
        /* gdvirtual */ _parseTextureJson(state: GltfState, textureJson: GDictionary, retGltfTexture: GltfTexture): GError
        /* gdvirtual */ _importObjectModelProperty(state: GltfState, splitJsonPointer: PackedStringArray | string[], partialPaths: GArray): null | GltfObjectModelProperty
        /* gdvirtual */ _importPostParse(state: GltfState): GError
        /* gdvirtual */ _importPreGenerate(state: GltfState): GError
        /* gdvirtual */ _generateSceneNode(state: GltfState, gltfNode: GltfNode, sceneParent: Node): null | Node3D
        /* gdvirtual */ _importNode(state: GltfState, gltfNode: GltfNode, json: GDictionary, node: Node): GError
        /* gdvirtual */ _importPost(state: GltfState, root: Node): GError
        /* gdvirtual */ _exportPreflight(state: GltfState, root: Node): GError
        /* gdvirtual */ _convertSceneNode(state: GltfState, gltfNode: GltfNode, sceneNode: Node): void
        /* gdvirtual */ _exportPostConvert(state: GltfState, root: Node): GError
        /* gdvirtual */ _exportPreserialize(state: GltfState): GError
        /* gdvirtual */ _exportObjectModelProperty(state: GltfState, nodePath: NodePath | string, godotNode: Node, gltfNodeIndex: int64, targetObject: GObject, targetDepth: int64): null | GltfObjectModelProperty
        /* gdvirtual */ _getSaveableImageFormats(): PackedStringArray
        /* gdvirtual */ _serializeImageToBytes(state: GltfState, image: Image, imageDict: GDictionary, imageFormat: string, lossyQuality: float64): PackedByteArray
        /* gdvirtual */ _saveImageAtPath(state: GltfState, image: Image, filePath: string, imageFormat: string, lossyQuality: float64): GError
        /* gdvirtual */ _serializeTextureJson(state: GltfState, textureJson: GDictionary, gltfTexture: GltfTexture, imageFormat: string): GError
        /* gdvirtual */ _exportNode(state: GltfState, gltfNode: GltfNode, json: GDictionary, node: Node): GError
        /* gdvirtual */ _exportPost(state: GltfState): GError
    }
    class GltfDocumentExtensionConvertImporterMesh extends GltfDocumentExtension {
        constructor(identifier?: any)
    }
    class GltfLight extends Resource {
        constructor(identifier?: any)
        static fromNode(lightNode: Light3D): null | GltfLight
        toNode(): null | Light3D
        static fromDictionary(dictionary: GDictionary): null | GltfLight
        toDictionary(): GDictionary
        getAdditionalData(extensionName: StringName): any
        setAdditionalData(extensionName: StringName, additionalData: any): void
        get color(): Color
        set color(value: Color)
        get intensity(): float64
        set intensity(value: float64)
        get lightType(): string
        set lightType(value: string)
        get range(): float64
        set range(value: float64)
        get innerConeAngle(): float64
        set innerConeAngle(value: float64)
        get outerConeAngle(): float64
        set outerConeAngle(value: float64)
    }
    class GltfMesh extends Resource {
        constructor(identifier?: any)
        getAdditionalData(extensionName: StringName): any
        setAdditionalData(extensionName: StringName, additionalData: any): void
        get originalName(): string
        set originalName(value: string)
        get mesh(): null | GObject
        set mesh(value: null | GObject)
        get blendWeights(): PackedFloat32Array
        set blendWeights(value: PackedFloat32Array | float32[])
        get instanceMaterials(): GArray
        set instanceMaterials(value: GArray)
    }
    class GltfNode extends Resource {
        constructor(identifier?: any)
        appendChildIndex(childIndex: int64): void
        getAdditionalData(extensionName: StringName): any
        setAdditionalData(extensionName: StringName, additionalData: any): void
        getSceneNodePath(gltfState: GltfState, handleSkeletons?: boolean /* = true */): NodePath
        get originalName(): string
        set originalName(value: string)
        get parent(): int64
        set parent(value: int64)
        get height(): int64
        set height(value: int64)
        get xform(): Transform3D
        set xform(value: Transform3D)
        get mesh(): int64
        set mesh(value: int64)
        get camera(): int64
        set camera(value: int64)
        get skin(): int64
        set skin(value: int64)
        get skeleton(): int64
        set skeleton(value: int64)
        get position(): Vector3
        set position(value: Vector3)
        get rotation(): Quaternion
        set rotation(value: Quaternion)
        get scale(): Vector3
        set scale(value: Vector3)
        get children(): PackedInt32Array
        set children(value: PackedInt32Array | int32[])
        get light(): int64
        set light(value: int64)
        get visible(): boolean
        set visible(value: boolean)
    }
    namespace GltfObjectModelProperty {
        enum GltfObjectModelType {
            GltfObjectModelTypeUnknown = 0,
            GltfObjectModelTypeBool = 1,
            GltfObjectModelTypeFloat = 2,
            GltfObjectModelTypeFloatArray = 3,
            GltfObjectModelTypeFloat2 = 4,
            GltfObjectModelTypeFloat3 = 5,
            GltfObjectModelTypeFloat4 = 6,
            GltfObjectModelTypeFloat2X2 = 7,
            GltfObjectModelTypeFloat3X3 = 8,
            GltfObjectModelTypeFloat4X4 = 9,
            GltfObjectModelTypeInt = 10,
        }
    }
    class GltfObjectModelProperty extends RefCounted {
        static readonly GLTF_OBJECT_MODEL_TYPE_UNKNOWN = 0
        static readonly GLTF_OBJECT_MODEL_TYPE_BOOL = 1
        static readonly GLTF_OBJECT_MODEL_TYPE_FLOAT = 2
        static readonly GLTF_OBJECT_MODEL_TYPE_FLOAT_ARRAY = 3
        static readonly GLTF_OBJECT_MODEL_TYPE_FLOAT2 = 4
        static readonly GLTF_OBJECT_MODEL_TYPE_FLOAT3 = 5
        static readonly GLTF_OBJECT_MODEL_TYPE_FLOAT4 = 6
        static readonly GLTF_OBJECT_MODEL_TYPE_FLOAT2X2 = 7
        static readonly GLTF_OBJECT_MODEL_TYPE_FLOAT3X3 = 8
        static readonly GLTF_OBJECT_MODEL_TYPE_FLOAT4X4 = 9
        static readonly GLTF_OBJECT_MODEL_TYPE_INT = 10
        constructor(identifier?: any)
        appendNodePath(nodePath: NodePath | string): void
        appendPathToProperty(nodePath: NodePath | string, propName: StringName): void
        getAccessorType(): GltfAccessor.GltfAccessorType
        hasNodePaths(): boolean
        hasJsonPointers(): boolean
        setTypes(variantType: Variant.Type, objModelType: GltfObjectModelProperty.GltfObjectModelType): void
        get gltfToGodotExpression(): null | Expression
        set gltfToGodotExpression(value: null | Expression)
        get godotToGltfExpression(): null | Expression
        set godotToGltfExpression(value: null | Expression)
        get nodePaths(): GArray
        set nodePaths(value: GArray)
        get objectModelType(): int64
        set objectModelType(value: int64)
        get jsonPointers(): PackedStringArray
        set jsonPointers(value: PackedStringArray | string[])
        get variantType(): int64
        set variantType(value: int64)
    }
    class GltfPhysicsBody extends Resource {
        constructor(identifier?: any)
        static fromNode(bodyNode: CollisionObject3D): null | GltfPhysicsBody
        toNode(): null | CollisionObject3D
        static fromDictionary(dictionary: GDictionary): null | GltfPhysicsBody
        toDictionary(): GDictionary
        get bodyType(): string
        set bodyType(value: string)
        get mass(): float64
        set mass(value: float64)
        get linearVelocity(): Vector3
        set linearVelocity(value: Vector3)
        get angularVelocity(): Vector3
        set angularVelocity(value: Vector3)
        get centerOfMass(): Vector3
        set centerOfMass(value: Vector3)
        get inertiaDiagonal(): Vector3
        set inertiaDiagonal(value: Vector3)
        get inertiaOrientation(): Quaternion
        set inertiaOrientation(value: Quaternion)
        get inertiaTensor(): Basis
        set inertiaTensor(value: Basis)
    }
    class GltfPhysicsShape extends Resource {
        constructor(identifier?: any)
        static fromNode(shapeNode: CollisionShape3D): null | GltfPhysicsShape
        toNode(cacheShapes?: boolean /* = false */): null | CollisionShape3D
        static fromResource(shapeResource: Shape3D): null | GltfPhysicsShape
        toResource(cacheShapes?: boolean /* = false */): null | Shape3D
        static fromDictionary(dictionary: GDictionary): null | GltfPhysicsShape
        toDictionary(): GDictionary
        get shapeType(): string
        set shapeType(value: string)
        get size(): Vector3
        set size(value: Vector3)
        get radius(): float64
        set radius(value: float64)
        get height(): float64
        set height(value: float64)
        get isTrigger(): boolean
        set isTrigger(value: boolean)
        get meshIndex(): int64
        set meshIndex(value: int64)
        get importerMesh(): null | ImporterMesh
        set importerMesh(value: null | ImporterMesh)
    }
    class GltfSkeleton extends Resource {
        constructor(identifier?: any)
        getGodotSkeleton(): null | Skeleton3D
        getBoneAttachmentCount(): int64
        getBoneAttachment(idx: int64): null | BoneAttachment3D
        get joints(): PackedInt32Array
        set joints(value: PackedInt32Array | int32[])
        get roots(): PackedInt32Array
        set roots(value: PackedInt32Array | int32[])
        get uniqueNames(): GArray
        set uniqueNames(value: GArray)
        get godotBoneNode(): GDictionary
        set godotBoneNode(value: GDictionary)
    }
    class GltfSkin extends Resource {
        constructor(identifier?: any)
        get skinRoot(): int64
        set skinRoot(value: int64)
        get jointsOriginal(): PackedInt32Array
        set jointsOriginal(value: PackedInt32Array | int32[])
        get inverseBinds(): GArray
        set inverseBinds(value: GArray)
        get joints(): PackedInt32Array
        set joints(value: PackedInt32Array | int32[])
        get nonJoints(): PackedInt32Array
        set nonJoints(value: PackedInt32Array | int32[])
        get roots(): PackedInt32Array
        set roots(value: PackedInt32Array | int32[])
        get skeleton(): int64
        set skeleton(value: int64)
        get jointIToBoneI(): GDictionary
        set jointIToBoneI(value: GDictionary)
        get jointIToName(): GDictionary
        set jointIToName(value: GDictionary)
        get godotSkin(): null | Skin
        set godotSkin(value: null | Skin)
    }
    class GltfSpecGloss extends Resource {
        constructor(identifier?: any)
        get diffuseImg(): null | GObject
        set diffuseImg(value: null | GObject)
        get diffuseFactor(): Color
        set diffuseFactor(value: Color)
        get glossFactor(): float64
        set glossFactor(value: float64)
        get specularFactor(): Color
        set specularFactor(value: Color)
        get specGlossImg(): null | GObject
        set specGlossImg(value: null | GObject)
    }
    class GltfState extends Resource {
        static readonly HANDLE_BINARY_DISCARD_TEXTURES = 0
        static readonly HANDLE_BINARY_EXTRACT_TEXTURES = 1
        static readonly HANDLE_BINARY_EMBED_AS_BASISU = 2
        static readonly HANDLE_BINARY_EMBED_AS_UNCOMPRESSED = 3
        constructor(identifier?: any)
        addUsedExtension(extensionName: string, required: boolean): void
        appendDataToBuffers(data: PackedByteArray | byte[] | ArrayBuffer, deduplication: boolean): int64
        appendGltfNode(gltfNode: GltfNode, godotSceneNode: Node, parentNodeIndex: int64): int64
        getAnimationPlayersCount(idx: int64): int64
        getAnimationPlayer(idx: int64): null | AnimationPlayer
        getSceneNode(idx: int64): null | Node
        getNodeIndex(sceneNode: Node): int64
        getAdditionalData(extensionName: StringName): any
        setAdditionalData(extensionName: StringName, additionalData: any): void
        get json(): GDictionary
        set json(value: GDictionary)
        get majorVersion(): int64
        set majorVersion(value: int64)
        get minorVersion(): int64
        set minorVersion(value: int64)
        get copyright(): string
        set copyright(value: string)
        get glbData(): PackedByteArray
        set glbData(value: PackedByteArray | byte[] | ArrayBuffer)
        get useNamedSkinBinds(): boolean
        set useNamedSkinBinds(value: boolean)
        get nodes(): GArray
        set nodes(value: GArray)
        get buffers(): GArray
        set buffers(value: GArray)
        get bufferViews(): GArray
        set bufferViews(value: GArray)
        get accessors(): GArray
        set accessors(value: GArray)
        get meshes(): GArray
        set meshes(value: GArray)
        get materials(): GArray
        set materials(value: GArray)
        get sceneName(): string
        set sceneName(value: string)
        get basePath(): string
        set basePath(value: string)
        get fileName(): string
        set fileName(value: string)
        get rootNodes(): PackedInt32Array
        set rootNodes(value: PackedInt32Array | int32[])
        get textures(): GArray
        set textures(value: GArray)
        get textureSamplers(): GArray
        set textureSamplers(value: GArray)
        get images(): GArray
        set images(value: GArray)
        get skins(): GArray
        set skins(value: GArray)
        get cameras(): GArray
        set cameras(value: GArray)
        get lights(): GArray
        set lights(value: GArray)
        get uniqueNames(): GArray
        set uniqueNames(value: GArray)
        get uniqueAnimationNames(): GArray
        set uniqueAnimationNames(value: GArray)
        get skeletons(): GArray
        set skeletons(value: GArray)
        get createAnimations(): boolean
        set createAnimations(value: boolean)
        get importAsSkeletonBones(): boolean
        set importAsSkeletonBones(value: boolean)
        get animations(): GArray
        set animations(value: GArray)
        get handleBinaryImage(): int64
        set handleBinaryImage(value: int64)
        get bakeFps(): float64
        set bakeFps(value: float64)
    }
    class GltfTexture extends Resource {
        constructor(identifier?: any)
        get srcImage(): int64
        set srcImage(value: int64)
        get sampler(): int64
        set sampler(value: int64)
    }
    class GltfTextureSampler extends Resource {
        constructor(identifier?: any)
        get magFilter(): int64
        set magFilter(value: int64)
        get minFilter(): int64
        set minFilter(value: int64)
        get wrapS(): int64
        set wrapS(value: int64)
        get wrapT(): int64
        set wrapT(value: int64)
    }
    namespace GpuParticles2D {
        enum DrawOrder {
            DrawOrderIndex = 0,
            DrawOrderLifetime = 1,
            DrawOrderReverseLifetime = 2,
        }
        enum EmitFlags {
            EmitFlagPosition = 1,
            EmitFlagRotationScale = 2,
            EmitFlagVelocity = 4,
            EmitFlagColor = 8,
            EmitFlagCustom = 16,
        }
    }
    class GpuParticles2D<Map extends NodePathMap = any> extends Node2D<Map> {
        static readonly DRAW_ORDER_INDEX = 0
        static readonly DRAW_ORDER_LIFETIME = 1
        static readonly DRAW_ORDER_REVERSE_LIFETIME = 2
        static readonly EMIT_FLAG_POSITION = 1
        static readonly EMIT_FLAG_ROTATION_SCALE = 2
        static readonly EMIT_FLAG_VELOCITY = 4
        static readonly EMIT_FLAG_COLOR = 8
        static readonly EMIT_FLAG_CUSTOM = 16
        constructor(identifier?: any)
        requestParticlesProcess(processTime: float64): void
        captureRect(): Rect2
        restart(keepSeed?: boolean /* = false */): void
        emitParticle(xform: Transform2D, velocity: Vector2, color: Color, custom: Color, flags: int64): void
        convertFromParticles(particles: Node): void
        get emitting(): boolean
        set emitting(value: boolean)
        get amount(): int64
        set amount(value: int64)
        get amountRatio(): float64
        set amountRatio(value: float64)
        get subEmitter(): NodePath
        set subEmitter(value: NodePath | string)
        get texture(): null | Texture2D
        set texture(value: null | Texture2D)
        get lifetime(): float64
        set lifetime(value: float64)
        get interpToEnd(): float64
        set interpToEnd(value: float64)
        get oneShot(): boolean
        set oneShot(value: boolean)
        get preprocess(): float64
        set preprocess(value: float64)
        get speedScale(): float64
        set speedScale(value: float64)
        get explosiveness(): float64
        set explosiveness(value: float64)
        get randomness(): float64
        set randomness(value: float64)
        get useFixedSeed(): boolean
        set useFixedSeed(value: boolean)
        get seed(): int64
        set seed(value: int64)
        get fixedFps(): int64
        set fixedFps(value: int64)
        get interpolate(): boolean
        set interpolate(value: boolean)
        get fractDelta(): boolean
        set fractDelta(value: boolean)
        get collisionBaseSize(): float64
        set collisionBaseSize(value: float64)
        get visibilityRect(): Rect2
        set visibilityRect(value: Rect2)
        get localCoords(): boolean
        set localCoords(value: boolean)
        get drawOrder(): int64
        set drawOrder(value: int64)
        get trailEnabled(): boolean
        set trailEnabled(value: boolean)
        get trailLifetime(): float64
        set trailLifetime(value: float64)
        get trailSections(): int64
        set trailSections(value: int64)
        get trailSectionSubdivisions(): int64
        set trailSectionSubdivisions(value: int64)
        get processMaterial(): null | ParticleProcessMaterial | ShaderMaterial
        set processMaterial(value: null | ParticleProcessMaterial | ShaderMaterial)
        readonly finished: Signal<() => void>
    }
    namespace GpuParticles3D {
        enum DrawOrder {
            DrawOrderIndex = 0,
            DrawOrderLifetime = 1,
            DrawOrderReverseLifetime = 2,
            DrawOrderViewDepth = 3,
        }
        enum EmitFlags {
            EmitFlagPosition = 1,
            EmitFlagRotationScale = 2,
            EmitFlagVelocity = 4,
            EmitFlagColor = 8,
            EmitFlagCustom = 16,
        }
        enum TransformAlign {
            TransformAlignDisabled = 0,
            TransformAlignZBillboard = 1,
            TransformAlignYToVelocity = 2,
            TransformAlignZBillboardYToVelocity = 3,
        }
    }
    class GpuParticles3D<Map extends NodePathMap = any> extends GeometryInstance3D<Map> {
        static readonly DRAW_ORDER_INDEX = 0
        static readonly DRAW_ORDER_LIFETIME = 1
        static readonly DRAW_ORDER_REVERSE_LIFETIME = 2
        static readonly DRAW_ORDER_VIEW_DEPTH = 3
        static readonly EMIT_FLAG_POSITION = 1
        static readonly EMIT_FLAG_ROTATION_SCALE = 2
        static readonly EMIT_FLAG_VELOCITY = 4
        static readonly EMIT_FLAG_COLOR = 8
        static readonly EMIT_FLAG_CUSTOM = 16
        static readonly MAX_DRAW_PASSES = 4
        static readonly TRANSFORM_ALIGN_DISABLED = 0
        static readonly TRANSFORM_ALIGN_Z_BILLBOARD = 1
        static readonly TRANSFORM_ALIGN_Y_TO_VELOCITY = 2
        static readonly TRANSFORM_ALIGN_Z_BILLBOARD_Y_TO_VELOCITY = 3
        constructor(identifier?: any)
        setDrawPassMesh(pass: int64, mesh: Mesh): void
        getDrawPassMesh(pass: int64): null | Mesh
        restart(keepSeed?: boolean /* = false */): void
        captureAabb(): Aabb
        emitParticle(xform: Transform3D, velocity: Vector3, color: Color, custom: Color, flags: int64): void
        convertFromParticles(particles: Node): void
        requestParticlesProcess(processTime: float64): void
        get emitting(): boolean
        set emitting(value: boolean)
        get amount(): int64
        set amount(value: int64)
        get amountRatio(): float64
        set amountRatio(value: float64)
        get subEmitter(): NodePath
        set subEmitter(value: NodePath | string)
        get lifetime(): float64
        set lifetime(value: float64)
        get interpToEnd(): float64
        set interpToEnd(value: float64)
        get oneShot(): boolean
        set oneShot(value: boolean)
        get preprocess(): float64
        set preprocess(value: float64)
        get speedScale(): float64
        set speedScale(value: float64)
        get explosiveness(): float64
        set explosiveness(value: float64)
        get randomness(): float64
        set randomness(value: float64)
        get useFixedSeed(): boolean
        set useFixedSeed(value: boolean)
        get seed(): int64
        set seed(value: int64)
        get fixedFps(): int64
        set fixedFps(value: int64)
        get interpolate(): boolean
        set interpolate(value: boolean)
        get fractDelta(): boolean
        set fractDelta(value: boolean)
        get collisionBaseSize(): float64
        set collisionBaseSize(value: float64)
        get visibilityAabb(): Aabb
        set visibilityAabb(value: Aabb)
        get localCoords(): boolean
        set localCoords(value: boolean)
        get drawOrder(): int64
        set drawOrder(value: int64)
        get transformAlign(): int64
        set transformAlign(value: int64)
        get trailEnabled(): boolean
        set trailEnabled(value: boolean)
        get trailLifetime(): float64
        set trailLifetime(value: float64)
        get processMaterial(): null | ParticleProcessMaterial | ShaderMaterial
        set processMaterial(value: null | ParticleProcessMaterial | ShaderMaterial)
        get drawPasses(): int64
        set drawPasses(value: int64)
        get drawPass1(): null | Mesh
        set drawPass1(value: null | Mesh)
        get drawPass2(): null | Mesh
        set drawPass2(value: null | Mesh)
        get drawPass3(): null | Mesh
        set drawPass3(value: null | Mesh)
        get drawPass4(): null | Mesh
        set drawPass4(value: null | Mesh)
        get drawSkin(): null | Skin
        set drawSkin(value: null | Skin)
        readonly finished: Signal<() => void>
    }
    class GpuParticlesAttractor3D<Map extends NodePathMap = any> extends VisualInstance3D<Map> {
        constructor(identifier?: any)
        get strength(): float64
        set strength(value: float64)
        get attenuation(): float64
        set attenuation(value: float64)
        get directionality(): float64
        set directionality(value: float64)
        get cullMask(): int64
        set cullMask(value: int64)
    }
    class GpuParticlesAttractorBox3D<Map extends NodePathMap = any> extends GpuParticlesAttractor3D<Map> {
        constructor(identifier?: any)
        get size(): Vector3
        set size(value: Vector3)
    }
    class GpuParticlesAttractorSphere3D<Map extends NodePathMap = any> extends GpuParticlesAttractor3D<Map> {
        constructor(identifier?: any)
        get radius(): float64
        set radius(value: float64)
    }
    class GpuParticlesAttractorVectorField3D<Map extends NodePathMap = any> extends GpuParticlesAttractor3D<Map> {
        constructor(identifier?: any)
        get size(): Vector3
        set size(value: Vector3)
        get texture(): null | Texture3D
        set texture(value: null | Texture3D)
    }
    class GpuParticlesCollision3D<Map extends NodePathMap = any> extends VisualInstance3D<Map> {
        constructor(identifier?: any)
        get cullMask(): int64
        set cullMask(value: int64)
    }
    class GpuParticlesCollisionBox3D<Map extends NodePathMap = any> extends GpuParticlesCollision3D<Map> {
        constructor(identifier?: any)
        get size(): Vector3
        set size(value: Vector3)
    }
    namespace GpuParticlesCollisionHeightField3D {
        enum Resolution {
            Resolution256 = 0,
            Resolution512 = 1,
            Resolution1024 = 2,
            Resolution2048 = 3,
            Resolution4096 = 4,
            Resolution8192 = 5,
            ResolutionMax = 6,
        }
        enum UpdateMode {
            UpdateModeWhenMoved = 0,
            UpdateModeAlways = 1,
        }
    }
    class GpuParticlesCollisionHeightField3D<Map extends NodePathMap = any> extends GpuParticlesCollision3D<Map> {
        static readonly RESOLUTION_256 = 0
        static readonly RESOLUTION_512 = 1
        static readonly RESOLUTION_1024 = 2
        static readonly RESOLUTION_2048 = 3
        static readonly RESOLUTION_4096 = 4
        static readonly RESOLUTION_8192 = 5
        static readonly RESOLUTION_MAX = 6
        static readonly UPDATE_MODE_WHEN_MOVED = 0
        static readonly UPDATE_MODE_ALWAYS = 1
        constructor(identifier?: any)
        setHeightfieldMaskValue(layerNumber: int64, value: boolean): void
        getHeightfieldMaskValue(layerNumber: int64): boolean
        get size(): Vector3
        set size(value: Vector3)
        get resolution(): int64
        set resolution(value: int64)
        get updateMode(): int64
        set updateMode(value: int64)
        get followCameraEnabled(): boolean
        set followCameraEnabled(value: boolean)
        get heightfieldMask(): int64
        set heightfieldMask(value: int64)
    }
    namespace GpuParticlesCollisionSdf3D {
        enum Resolution {
            Resolution16 = 0,
            Resolution32 = 1,
            Resolution64 = 2,
            Resolution128 = 3,
            Resolution256 = 4,
            Resolution512 = 5,
            ResolutionMax = 6,
        }
    }
    class GpuParticlesCollisionSdf3D<Map extends NodePathMap = any> extends GpuParticlesCollision3D<Map> {
        static readonly RESOLUTION_16 = 0
        static readonly RESOLUTION_32 = 1
        static readonly RESOLUTION_64 = 2
        static readonly RESOLUTION_128 = 3
        static readonly RESOLUTION_256 = 4
        static readonly RESOLUTION_512 = 5
        static readonly RESOLUTION_MAX = 6
        constructor(identifier?: any)
        setBakeMaskValue(layerNumber: int64, value: boolean): void
        getBakeMaskValue(layerNumber: int64): boolean
        get size(): Vector3
        set size(value: Vector3)
        get resolution(): int64
        set resolution(value: int64)
        get thickness(): float64
        set thickness(value: float64)
        get bakeMask(): int64
        set bakeMask(value: int64)
        get texture(): null | Texture3D
        set texture(value: null | Texture3D)
    }
    class GpuParticlesCollisionSphere3D<Map extends NodePathMap = any> extends GpuParticlesCollision3D<Map> {
        constructor(identifier?: any)
        get radius(): float64
        set radius(value: float64)
    }
    namespace Generic6DofJoint3D {
        enum Param {
            ParamLinearLowerLimit = 0,
            ParamLinearUpperLimit = 1,
            ParamLinearLimitSoftness = 2,
            ParamLinearRestitution = 3,
            ParamLinearDamping = 4,
            ParamLinearMotorTargetVelocity = 5,
            ParamLinearMotorForceLimit = 6,
            ParamLinearSpringStiffness = 7,
            ParamLinearSpringDamping = 8,
            ParamLinearSpringEquilibriumPoint = 9,
            ParamAngularLowerLimit = 10,
            ParamAngularUpperLimit = 11,
            ParamAngularLimitSoftness = 12,
            ParamAngularDamping = 13,
            ParamAngularRestitution = 14,
            ParamAngularForceLimit = 15,
            ParamAngularErp = 16,
            ParamAngularMotorTargetVelocity = 17,
            ParamAngularMotorForceLimit = 18,
            ParamAngularSpringStiffness = 19,
            ParamAngularSpringDamping = 20,
            ParamAngularSpringEquilibriumPoint = 21,
            ParamMax = 22,
        }
        enum Flag {
            FlagEnableLinearLimit = 0,
            FlagEnableAngularLimit = 1,
            FlagEnableLinearSpring = 3,
            FlagEnableAngularSpring = 2,
            FlagEnableMotor = 4,
            FlagEnableLinearMotor = 5,
            FlagMax = 6,
        }
    }
    class Generic6DofJoint3D<Map extends NodePathMap = any> extends Joint3D<Map> {
        static readonly PARAM_LINEAR_LOWER_LIMIT = 0
        static readonly PARAM_LINEAR_UPPER_LIMIT = 1
        static readonly PARAM_LINEAR_LIMIT_SOFTNESS = 2
        static readonly PARAM_LINEAR_RESTITUTION = 3
        static readonly PARAM_LINEAR_DAMPING = 4
        static readonly PARAM_LINEAR_MOTOR_TARGET_VELOCITY = 5
        static readonly PARAM_LINEAR_MOTOR_FORCE_LIMIT = 6
        static readonly PARAM_LINEAR_SPRING_STIFFNESS = 7
        static readonly PARAM_LINEAR_SPRING_DAMPING = 8
        static readonly PARAM_LINEAR_SPRING_EQUILIBRIUM_POINT = 9
        static readonly PARAM_ANGULAR_LOWER_LIMIT = 10
        static readonly PARAM_ANGULAR_UPPER_LIMIT = 11
        static readonly PARAM_ANGULAR_LIMIT_SOFTNESS = 12
        static readonly PARAM_ANGULAR_DAMPING = 13
        static readonly PARAM_ANGULAR_RESTITUTION = 14
        static readonly PARAM_ANGULAR_FORCE_LIMIT = 15
        static readonly PARAM_ANGULAR_ERP = 16
        static readonly PARAM_ANGULAR_MOTOR_TARGET_VELOCITY = 17
        static readonly PARAM_ANGULAR_MOTOR_FORCE_LIMIT = 18
        static readonly PARAM_ANGULAR_SPRING_STIFFNESS = 19
        static readonly PARAM_ANGULAR_SPRING_DAMPING = 20
        static readonly PARAM_ANGULAR_SPRING_EQUILIBRIUM_POINT = 21
        static readonly PARAM_MAX = 22
        static readonly FLAG_ENABLE_LINEAR_LIMIT = 0
        static readonly FLAG_ENABLE_ANGULAR_LIMIT = 1
        static readonly FLAG_ENABLE_LINEAR_SPRING = 3
        static readonly FLAG_ENABLE_ANGULAR_SPRING = 2
        static readonly FLAG_ENABLE_MOTOR = 4
        static readonly FLAG_ENABLE_LINEAR_MOTOR = 5
        static readonly FLAG_MAX = 6
        constructor(identifier?: any)
        setParamX(param: Generic6DofJoint3D.Param, value: float64): void
        getParamX(param: Generic6DofJoint3D.Param): float64
        setParamY(param: Generic6DofJoint3D.Param, value: float64): void
        getParamY(param: Generic6DofJoint3D.Param): float64
        setParamZ(param: Generic6DofJoint3D.Param, value: float64): void
        getParamZ(param: Generic6DofJoint3D.Param): float64
        setFlagX(flag: Generic6DofJoint3D.Flag, value: boolean): void
        getFlagX(flag: Generic6DofJoint3D.Flag): boolean
        setFlagY(flag: Generic6DofJoint3D.Flag, value: boolean): void
        getFlagY(flag: Generic6DofJoint3D.Flag): boolean
        setFlagZ(flag: Generic6DofJoint3D.Flag, value: boolean): void
        getFlagZ(flag: Generic6DofJoint3D.Flag): boolean
        get "linearLimitX/enabled"(): boolean
        set "linearLimitX/enabled"(value: boolean)
        get "linearLimitX/upperDistance"(): float64
        set "linearLimitX/upperDistance"(value: float64)
        get "linearLimitX/lowerDistance"(): float64
        set "linearLimitX/lowerDistance"(value: float64)
        get "linearLimitX/softness"(): float64
        set "linearLimitX/softness"(value: float64)
        get "linearLimitX/restitution"(): float64
        set "linearLimitX/restitution"(value: float64)
        get "linearLimitX/damping"(): float64
        set "linearLimitX/damping"(value: float64)
        get "linearLimitY/enabled"(): boolean
        set "linearLimitY/enabled"(value: boolean)
        get "linearLimitY/upperDistance"(): float64
        set "linearLimitY/upperDistance"(value: float64)
        get "linearLimitY/lowerDistance"(): float64
        set "linearLimitY/lowerDistance"(value: float64)
        get "linearLimitY/softness"(): float64
        set "linearLimitY/softness"(value: float64)
        get "linearLimitY/restitution"(): float64
        set "linearLimitY/restitution"(value: float64)
        get "linearLimitY/damping"(): float64
        set "linearLimitY/damping"(value: float64)
        get "linearLimitZ/enabled"(): boolean
        set "linearLimitZ/enabled"(value: boolean)
        get "linearLimitZ/upperDistance"(): float64
        set "linearLimitZ/upperDistance"(value: float64)
        get "linearLimitZ/lowerDistance"(): float64
        set "linearLimitZ/lowerDistance"(value: float64)
        get "linearLimitZ/softness"(): float64
        set "linearLimitZ/softness"(value: float64)
        get "linearLimitZ/restitution"(): float64
        set "linearLimitZ/restitution"(value: float64)
        get "linearLimitZ/damping"(): float64
        set "linearLimitZ/damping"(value: float64)
        get "linearMotorX/enabled"(): boolean
        set "linearMotorX/enabled"(value: boolean)
        get "linearMotorX/targetVelocity"(): float64
        set "linearMotorX/targetVelocity"(value: float64)
        get "linearMotorX/forceLimit"(): float64
        set "linearMotorX/forceLimit"(value: float64)
        get "linearMotorY/enabled"(): boolean
        set "linearMotorY/enabled"(value: boolean)
        get "linearMotorY/targetVelocity"(): float64
        set "linearMotorY/targetVelocity"(value: float64)
        get "linearMotorY/forceLimit"(): float64
        set "linearMotorY/forceLimit"(value: float64)
        get "linearMotorZ/enabled"(): boolean
        set "linearMotorZ/enabled"(value: boolean)
        get "linearMotorZ/targetVelocity"(): float64
        set "linearMotorZ/targetVelocity"(value: float64)
        get "linearMotorZ/forceLimit"(): float64
        set "linearMotorZ/forceLimit"(value: float64)
        get "linearSpringX/enabled"(): boolean
        set "linearSpringX/enabled"(value: boolean)
        get "linearSpringX/stiffness"(): float64
        set "linearSpringX/stiffness"(value: float64)
        get "linearSpringX/damping"(): float64
        set "linearSpringX/damping"(value: float64)
        get "linearSpringX/equilibriumPoint"(): float64
        set "linearSpringX/equilibriumPoint"(value: float64)
        get "linearSpringY/enabled"(): boolean
        set "linearSpringY/enabled"(value: boolean)
        get "linearSpringY/stiffness"(): float64
        set "linearSpringY/stiffness"(value: float64)
        get "linearSpringY/damping"(): float64
        set "linearSpringY/damping"(value: float64)
        get "linearSpringY/equilibriumPoint"(): float64
        set "linearSpringY/equilibriumPoint"(value: float64)
        get "linearSpringZ/enabled"(): boolean
        set "linearSpringZ/enabled"(value: boolean)
        get "linearSpringZ/stiffness"(): float64
        set "linearSpringZ/stiffness"(value: float64)
        get "linearSpringZ/damping"(): float64
        set "linearSpringZ/damping"(value: float64)
        get "linearSpringZ/equilibriumPoint"(): float64
        set "linearSpringZ/equilibriumPoint"(value: float64)
        get "angularLimitX/enabled"(): boolean
        set "angularLimitX/enabled"(value: boolean)
        get "angularLimitX/upperAngle"(): float64
        set "angularLimitX/upperAngle"(value: float64)
        get "angularLimitX/lowerAngle"(): float64
        set "angularLimitX/lowerAngle"(value: float64)
        get "angularLimitX/softness"(): float64
        set "angularLimitX/softness"(value: float64)
        get "angularLimitX/restitution"(): float64
        set "angularLimitX/restitution"(value: float64)
        get "angularLimitX/damping"(): float64
        set "angularLimitX/damping"(value: float64)
        get "angularLimitX/forceLimit"(): float64
        set "angularLimitX/forceLimit"(value: float64)
        get "angularLimitX/erp"(): float64
        set "angularLimitX/erp"(value: float64)
        get "angularLimitY/enabled"(): boolean
        set "angularLimitY/enabled"(value: boolean)
        get "angularLimitY/upperAngle"(): float64
        set "angularLimitY/upperAngle"(value: float64)
        get "angularLimitY/lowerAngle"(): float64
        set "angularLimitY/lowerAngle"(value: float64)
        get "angularLimitY/softness"(): float64
        set "angularLimitY/softness"(value: float64)
        get "angularLimitY/restitution"(): float64
        set "angularLimitY/restitution"(value: float64)
        get "angularLimitY/damping"(): float64
        set "angularLimitY/damping"(value: float64)
        get "angularLimitY/forceLimit"(): float64
        set "angularLimitY/forceLimit"(value: float64)
        get "angularLimitY/erp"(): float64
        set "angularLimitY/erp"(value: float64)
        get "angularLimitZ/enabled"(): boolean
        set "angularLimitZ/enabled"(value: boolean)
        get "angularLimitZ/upperAngle"(): float64
        set "angularLimitZ/upperAngle"(value: float64)
        get "angularLimitZ/lowerAngle"(): float64
        set "angularLimitZ/lowerAngle"(value: float64)
        get "angularLimitZ/softness"(): float64
        set "angularLimitZ/softness"(value: float64)
        get "angularLimitZ/restitution"(): float64
        set "angularLimitZ/restitution"(value: float64)
        get "angularLimitZ/damping"(): float64
        set "angularLimitZ/damping"(value: float64)
        get "angularLimitZ/forceLimit"(): float64
        set "angularLimitZ/forceLimit"(value: float64)
        get "angularLimitZ/erp"(): float64
        set "angularLimitZ/erp"(value: float64)
        get "angularMotorX/enabled"(): boolean
        set "angularMotorX/enabled"(value: boolean)
        get "angularMotorX/targetVelocity"(): float64
        set "angularMotorX/targetVelocity"(value: float64)
        get "angularMotorX/forceLimit"(): float64
        set "angularMotorX/forceLimit"(value: float64)
        get "angularMotorY/enabled"(): boolean
        set "angularMotorY/enabled"(value: boolean)
        get "angularMotorY/targetVelocity"(): float64
        set "angularMotorY/targetVelocity"(value: float64)
        get "angularMotorY/forceLimit"(): float64
        set "angularMotorY/forceLimit"(value: float64)
        get "angularMotorZ/enabled"(): boolean
        set "angularMotorZ/enabled"(value: boolean)
        get "angularMotorZ/targetVelocity"(): float64
        set "angularMotorZ/targetVelocity"(value: float64)
        get "angularMotorZ/forceLimit"(): float64
        set "angularMotorZ/forceLimit"(value: float64)
        get "angularSpringX/enabled"(): boolean
        set "angularSpringX/enabled"(value: boolean)
        get "angularSpringX/stiffness"(): float64
        set "angularSpringX/stiffness"(value: float64)
        get "angularSpringX/damping"(): float64
        set "angularSpringX/damping"(value: float64)
        get "angularSpringX/equilibriumPoint"(): float64
        set "angularSpringX/equilibriumPoint"(value: float64)
        get "angularSpringY/enabled"(): boolean
        set "angularSpringY/enabled"(value: boolean)
        get "angularSpringY/stiffness"(): float64
        set "angularSpringY/stiffness"(value: float64)
        get "angularSpringY/damping"(): float64
        set "angularSpringY/damping"(value: float64)
        get "angularSpringY/equilibriumPoint"(): float64
        set "angularSpringY/equilibriumPoint"(value: float64)
        get "angularSpringZ/enabled"(): boolean
        set "angularSpringZ/enabled"(value: boolean)
        get "angularSpringZ/stiffness"(): float64
        set "angularSpringZ/stiffness"(value: float64)
        get "angularSpringZ/damping"(): float64
        set "angularSpringZ/damping"(value: float64)
        get "angularSpringZ/equilibriumPoint"(): float64
        set "angularSpringZ/equilibriumPoint"(value: float64)
    }
    namespace GeometryInstance3D {
        enum ShadowCastingSetting {
            ShadowCastingSettingOff = 0,
            ShadowCastingSettingOn = 1,
            ShadowCastingSettingDoubleSided = 2,
            ShadowCastingSettingShadowsOnly = 3,
        }
        enum GIMode {
            GIModeDisabled = 0,
            GIModeStatic = 1,
            GIModeDynamic = 2,
        }
        enum LightmapScale {
            LightmapScale1X = 0,
            LightmapScale2X = 1,
            LightmapScale4X = 2,
            LightmapScale8X = 3,
            LightmapScaleMax = 4,
        }
        enum VisibilityRangeFadeMode {
            VisibilityRangeFadeDisabled = 0,
            VisibilityRangeFadeSelf = 1,
            VisibilityRangeFadeDependencies = 2,
        }
    }
    /** Base node for geometry-based visual instances.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_geometryinstance3d.html  
     */
    class GeometryInstance3D<Map extends NodePathMap = any> extends VisualInstance3D<Map> {
        /** Will not cast any shadows. Use this to improve performance for small geometry that is unlikely to cast noticeable shadows (such as debris). */
        static readonly SHADOW_CASTING_SETTING_OFF = 0
        
        /** Will cast shadows from all visible faces in the GeometryInstance3D.  
         *  Will take culling into account, so faces not being rendered will not be taken into account when shadow casting.  
         */
        static readonly SHADOW_CASTING_SETTING_ON = 1
        
        /** Will cast shadows from all visible faces in the GeometryInstance3D.  
         *  Will not take culling into account, so all faces will be taken into account when shadow casting.  
         */
        static readonly SHADOW_CASTING_SETTING_DOUBLE_SIDED = 2
        
        /** Will only show the shadows casted from this object.  
         *  In other words, the actual mesh will not be visible, only the shadows casted from the mesh will be.  
         */
        static readonly SHADOW_CASTING_SETTING_SHADOWS_ONLY = 3
        
        /** Disabled global illumination mode. Use for dynamic objects that do not contribute to global illumination (such as characters). When using [VoxelGI] and SDFGI, the geometry will  *receive*  indirect lighting and reflections but the geometry will not be considered in GI baking. */
        static readonly GI_MODE_DISABLED = 0
        
        /** Baked global illumination mode. Use for static objects that contribute to global illumination (such as level geometry). This GI mode is effective when using [VoxelGI], SDFGI and [LightmapGI]. */
        static readonly GI_MODE_STATIC = 1
        
        /** Dynamic global illumination mode. Use for dynamic objects that contribute to global illumination. This GI mode is only effective when using [VoxelGI], but it has a higher performance impact than [constant GI_MODE_STATIC]. When using other GI methods, this will act the same as [constant GI_MODE_DISABLED]. When using [LightmapGI], the object will receive indirect lighting using lightmap probes instead of using the baked lightmap texture. */
        static readonly GI_MODE_DYNAMIC = 2
        
        /** The standard texel density for lightmapping with [LightmapGI]. */
        static readonly LIGHTMAP_SCALE_1X = 0
        
        /** Multiplies texel density by 2× for lightmapping with [LightmapGI]. To ensure consistency in texel density, use this when scaling a mesh by a factor between 1.5 and 3.0. */
        static readonly LIGHTMAP_SCALE_2X = 1
        
        /** Multiplies texel density by 4× for lightmapping with [LightmapGI]. To ensure consistency in texel density, use this when scaling a mesh by a factor between 3.0 and 6.0. */
        static readonly LIGHTMAP_SCALE_4X = 2
        
        /** Multiplies texel density by 8× for lightmapping with [LightmapGI]. To ensure consistency in texel density, use this when scaling a mesh by a factor greater than 6.0. */
        static readonly LIGHTMAP_SCALE_8X = 3
        
        /** Represents the size of the [enum LightmapScale] enum. */
        static readonly LIGHTMAP_SCALE_MAX = 4
        
        /** Will not fade itself nor its visibility dependencies, hysteresis will be used instead. This is the fastest approach to manual LOD, but it can result in noticeable LOD transitions depending on how the LOD meshes are authored. See [member visibility_range_begin] and [member Node3D.visibility_parent] for more information. */
        static readonly VISIBILITY_RANGE_FADE_DISABLED = 0
        
        /** Will fade-out itself when reaching the limits of its own visibility range. This is slower than [constant VISIBILITY_RANGE_FADE_DISABLED], but it can provide smoother transitions. The fading range is determined by [member visibility_range_begin_margin] and [member visibility_range_end_margin].  
         *      
         *  **Note:** Only supported when using the Forward+ rendering method. When using the Mobile or Compatibility rendering method, this mode acts like [constant VISIBILITY_RANGE_FADE_DISABLED] but with hysteresis disabled.  
         */
        static readonly VISIBILITY_RANGE_FADE_SELF = 1
        
        /** Will fade-in its visibility dependencies (see [member Node3D.visibility_parent]) when reaching the limits of its own visibility range. This is slower than [constant VISIBILITY_RANGE_FADE_DISABLED], but it can provide smoother transitions. The fading range is determined by [member visibility_range_begin_margin] and [member visibility_range_end_margin].  
         *      
         *  **Note:** Only supported when using the Forward+ rendering method. When using the Mobile or Compatibility rendering method, this mode acts like [constant VISIBILITY_RANGE_FADE_DISABLED] but with hysteresis disabled.  
         */
        static readonly VISIBILITY_RANGE_FADE_DEPENDENCIES = 2
        constructor(identifier?: any)
        
        /** Set the value of a shader uniform for this instance only ([url=https://docs.godotengine.org/en/latest/tutorials/shaders/shader_reference/shading_language.html#per-instance-uniforms]per-instance uniform[/url]). See also [method ShaderMaterial.set_shader_parameter] to assign a uniform on all instances using the same [ShaderMaterial].  
         *      
         *  **Note:** For a shader uniform to be assignable on a per-instance basis, it  *must*  be defined with `instance uniform ...` rather than `uniform ...` in the shader code.  
         *      
         *  **Note:** [param name] is case-sensitive and must match the name of the uniform in the code exactly (not the capitalized name in the inspector).  
         *      
         *  **Note:** Per-instance shader uniforms are only available in Spatial and CanvasItem shaders, but not for Fog, Sky, or Particles shaders.  
         */
        setInstanceShaderParameter(name: StringName, value: any): void
        
        /** Get the value of a shader parameter as set on this instance. */
        getInstanceShaderParameter(name: StringName): any
        
        /** The material override for the whole geometry.  
         *  If a material is assigned to this property, it will be used instead of any material set in any material slot of the mesh.  
         */
        get materialOverride(): null | BaseMaterial3D | ShaderMaterial
        set materialOverride(value: null | BaseMaterial3D | ShaderMaterial)
        
        /** The material overlay for the whole geometry.  
         *  If a material is assigned to this property, it will be rendered on top of any other active material for all the surfaces.  
         */
        get materialOverlay(): null | BaseMaterial3D | ShaderMaterial
        set materialOverlay(value: null | BaseMaterial3D | ShaderMaterial)
        
        /** The transparency applied to the whole geometry (as a multiplier of the materials' existing transparency). `0.0` is fully opaque, while `1.0` is fully transparent. Values greater than `0.0` (exclusive) will force the geometry's materials to go through the transparent pipeline, which is slower to render and can exhibit rendering issues due to incorrect transparency sorting. However, unlike using a transparent material, setting [member transparency] to a value greater than `0.0` (exclusive) will  *not*  disable shadow rendering.  
         *  In spatial shaders, `1.0 - transparency` is set as the default value of the `ALPHA` built-in.  
         *      
         *  **Note:** [member transparency] is clamped between `0.0` and `1.0`, so this property cannot be used to make transparent materials more opaque than they originally are.  
         *      
         *  **Note:** Only supported when using the Forward+ rendering method. When using the Mobile or Compatibility rendering method, [member transparency] is ignored and is considered as always being `0.0`.  
         */
        get transparency(): float64
        set transparency(value: float64)
        
        /** The selected shadow casting flag. See [enum ShadowCastingSetting] for possible values. */
        get castShadow(): int64
        set castShadow(value: int64)
        
        /** The extra distance added to the GeometryInstance3D's bounding box ([AABB]) to increase its cull box. */
        get extraCullMargin(): float64
        set extraCullMargin(value: float64)
        
        /** Overrides the bounding box of this node with a custom one. This can be used to avoid the expensive [AABB] recalculation that happens when a skeleton is used with a [MeshInstance3D] or to have precise control over the [MeshInstance3D]'s bounding box. To use the default AABB, set value to an [AABB] with all fields set to `0.0`. To avoid frustum culling, set [member custom_aabb] to a very large AABB that covers your entire game world such as `AABB(-10000, -10000, -10000, 20000, 20000, 20000)`. To disable all forms of culling (including occlusion culling), call [method RenderingServer.instance_set_ignore_culling] on the [GeometryInstance3D]'s [RID]. */
        get customAabb(): Aabb
        set customAabb(value: Aabb)
        
        /** Changes how quickly the mesh transitions to a lower level of detail. A value of 0 will force the mesh to its lowest level of detail, a value of 1 will use the default settings, and larger values will keep the mesh in a higher level of detail at farther distances.  
         *  Useful for testing level of detail transitions in the editor.  
         */
        get lodBias(): float64
        set lodBias(value: float64)
        
        /** If `true`, disables occlusion culling for this instance. Useful for gizmos that must be rendered even when occlusion culling is in use.  
         *      
         *  **Note:** [member ignore_occlusion_culling] does not affect frustum culling (which is what happens when an object is not visible given the camera's angle). To avoid frustum culling, set [member custom_aabb] to a very large AABB that covers your entire game world such as `AABB(-10000, -10000, -10000, 20000, 20000, 20000)`.  
         */
        get ignoreOcclusionCulling(): boolean
        set ignoreOcclusionCulling(value: boolean)
        
        /** The global illumination mode to use for the whole geometry. To avoid inconsistent results, use a mode that matches the purpose of the mesh during gameplay (static/dynamic).  
         *      
         *  **Note:** Lights' bake mode will also affect the global illumination rendering. See [member Light3D.light_bake_mode].  
         */
        get gIMode(): int64
        set gIMode(value: int64)
        
        /** The texel density to use for lightmapping in [LightmapGI]. Greater scale values provide higher resolution in the lightmap, which can result in sharper shadows for lights that have both direct and indirect light baked. However, greater scale values will also increase the space taken by the mesh in the lightmap texture, which increases the memory, storage, and bake time requirements. When using a single mesh at different scales, consider adjusting this value to keep the lightmap texel density consistent across meshes.  
         *  For example, doubling [member gi_lightmap_texel_scale] doubles the lightmap texture resolution for this object  *on each axis* , so it will  *quadruple*  the texel count.  
         */
        get gILightmapTexelScale(): float64
        set gILightmapTexelScale(value: float64)
        
        /** The texel density to use for lightmapping in [LightmapGI]. */
        get gILightmapScale(): int64
        set gILightmapScale(value: int64)
        
        /** Starting distance from which the GeometryInstance3D will be visible, taking [member visibility_range_begin_margin] into account as well. The default value of 0 is used to disable the range check. */
        get visibilityRangeBegin(): float64
        set visibilityRangeBegin(value: float64)
        
        /** Margin for the [member visibility_range_begin] threshold. The GeometryInstance3D will only change its visibility state when it goes over or under the [member visibility_range_begin] threshold by this amount.  
         *  If [member visibility_range_fade_mode] is [constant VISIBILITY_RANGE_FADE_DISABLED], this acts as a hysteresis distance. If [member visibility_range_fade_mode] is [constant VISIBILITY_RANGE_FADE_SELF] or [constant VISIBILITY_RANGE_FADE_DEPENDENCIES], this acts as a fade transition distance and must be set to a value greater than `0.0` for the effect to be noticeable.  
         */
        get visibilityRangeBeginMargin(): float64
        set visibilityRangeBeginMargin(value: float64)
        
        /** Distance from which the GeometryInstance3D will be hidden, taking [member visibility_range_end_margin] into account as well. The default value of 0 is used to disable the range check. */
        get visibilityRangeEnd(): float64
        set visibilityRangeEnd(value: float64)
        
        /** Margin for the [member visibility_range_end] threshold. The GeometryInstance3D will only change its visibility state when it goes over or under the [member visibility_range_end] threshold by this amount.  
         *  If [member visibility_range_fade_mode] is [constant VISIBILITY_RANGE_FADE_DISABLED], this acts as a hysteresis distance. If [member visibility_range_fade_mode] is [constant VISIBILITY_RANGE_FADE_SELF] or [constant VISIBILITY_RANGE_FADE_DEPENDENCIES], this acts as a fade transition distance and must be set to a value greater than `0.0` for the effect to be noticeable.  
         */
        get visibilityRangeEndMargin(): float64
        set visibilityRangeEndMargin(value: float64)
        
        /** Controls which instances will be faded when approaching the limits of the visibility range. See [enum VisibilityRangeFadeMode] for possible values. */
        get visibilityRangeFadeMode(): int64
        set visibilityRangeFadeMode(value: int64)
    }
    namespace Gradient {
        enum InterpolationMode {
            GradientInterpolateLinear = 0,
            GradientInterpolateConstant = 1,
            GradientInterpolateCubic = 2,
        }
        enum ColorSpace {
            GradientColorSpaceSrgb = 0,
            GradientColorSpaceLinearSrgb = 1,
            GradientColorSpaceOklab = 2,
        }
    }
    /** A color transition.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_gradient.html  
     */
    class Gradient extends Resource {
        /** Linear interpolation. */
        static readonly GRADIENT_INTERPOLATE_LINEAR = 0
        
        /** Constant interpolation, color changes abruptly at each point and stays uniform between. This might cause visible aliasing when used for a gradient texture in some cases. */
        static readonly GRADIENT_INTERPOLATE_CONSTANT = 1
        
        /** Cubic interpolation. */
        static readonly GRADIENT_INTERPOLATE_CUBIC = 2
        
        /** sRGB color space. */
        static readonly GRADIENT_COLOR_SPACE_SRGB = 0
        
        /** Linear sRGB color space. */
        static readonly GRADIENT_COLOR_SPACE_LINEAR_SRGB = 1
        
        /** [url=https://bottosson.github.io/posts/oklab/]Oklab[/url] color space. This color space provides a smooth and uniform-looking transition between colors. */
        static readonly GRADIENT_COLOR_SPACE_OKLAB = 2
        constructor(identifier?: any)
        
        /** Adds the specified color to the gradient, with the specified offset. */
        addPoint(offset: float64, color: Color): void
        
        /** Removes the color at index [param point]. */
        removePoint(point: int64): void
        
        /** Sets the offset for the gradient color at index [param point]. */
        setOffset(point: int64, offset: float64): void
        
        /** Returns the offset of the gradient color at index [param point]. */
        getOffset(point: int64): float64
        
        /** Reverses/mirrors the gradient.  
         *      
         *  **Note:** This method mirrors all points around the middle of the gradient, which may produce unexpected results when [member interpolation_mode] is set to [constant GRADIENT_INTERPOLATE_CONSTANT].  
         */
        reverse(): void
        
        /** Sets the color of the gradient color at index [param point]. */
        setColor(point: int64, color: Color): void
        
        /** Returns the color of the gradient color at index [param point]. */
        getColor(point: int64): Color
        
        /** Returns the interpolated color specified by [param offset]. */
        sample(offset: float64): Color
        
        /** Returns the number of colors in the gradient. */
        getPointCount(): int64
        
        /** The algorithm used to interpolate between points of the gradient. See [enum InterpolationMode] for available modes. */
        get interpolationMode(): int64
        set interpolationMode(value: int64)
        
        /** The color space used to interpolate between points of the gradient. It does not affect the returned colors, which will always be in sRGB space. See [enum ColorSpace] for available modes.  
         *      
         *  **Note:** This setting has no effect when [member interpolation_mode] is set to [constant GRADIENT_INTERPOLATE_CONSTANT].  
         */
        get interpolationColorSpace(): int64
        set interpolationColorSpace(value: int64)
        
        /** Gradient's offsets as a [PackedFloat32Array].  
         *      
         *  **Note:** Setting this property updates all offsets at once. To update any offset individually use [method set_offset].  
         */
        get offsets(): PackedFloat32Array
        set offsets(value: PackedFloat32Array | float32[])
        
        /** Gradient's colors as a [PackedColorArray].  
         *      
         *  **Note:** Setting this property updates all colors at once. To update any color individually use [method set_color].  
         */
        get colors(): PackedColorArray
        set colors(value: PackedColorArray | Color[])
    }
    /** A 1D texture that uses colors obtained from a [Gradient].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_gradienttexture1d.html  
     */
    class GradientTexture1D extends Texture2D {
        constructor(identifier?: any)
        /** The [Gradient] used to fill the texture. */
        get gradient(): null | Gradient
        set gradient(value: null | Gradient)
        
        /** The number of color samples that will be obtained from the [Gradient]. */
        get width(): int64
        set width(value: int64)
        
        /** If `true`, the generated texture will support high dynamic range ([constant Image.FORMAT_RGBAF] format). This allows for glow effects to work if [member Environment.glow_enabled] is `true`. If `false`, the generated texture will use low dynamic range; overbright colors will be clamped ([constant Image.FORMAT_RGBA8] format). */
        get useHdr(): boolean
        set useHdr(value: boolean)
    }
    namespace GradientTexture2D {
        enum Fill {
            FillLinear = 0,
            FillRadial = 1,
            FillSquare = 2,
        }
        enum Repeat {
            RepeatNone = 0,
            Repeat = 1,
            RepeatMirror = 2,
        }
    }
    /** A 2D texture that creates a pattern with colors obtained from a [Gradient].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_gradienttexture2d.html  
     */
    class GradientTexture2D extends Texture2D {
        /** The colors are linearly interpolated in a straight line. */
        static readonly FILL_LINEAR = 0
        
        /** The colors are linearly interpolated in a circular pattern. */
        static readonly FILL_RADIAL = 1
        
        /** The colors are linearly interpolated in a square pattern. */
        static readonly FILL_SQUARE = 2
        
        /** The gradient fill is restricted to the range defined by [member fill_from] to [member fill_to] offsets. */
        static readonly REPEAT_NONE = 0
        
        /** The texture is filled starting from [member fill_from] to [member fill_to] offsets, repeating the same pattern in both directions. */
        static readonly REPEAT = 1
        
        /** The texture is filled starting from [member fill_from] to [member fill_to] offsets, mirroring the pattern in both directions. */
        static readonly REPEAT_MIRROR = 2
        constructor(identifier?: any)
        
        /** The [Gradient] used to fill the texture. */
        get gradient(): null | Gradient
        set gradient(value: null | Gradient)
        
        /** The number of horizontal color samples that will be obtained from the [Gradient], which also represents the texture's width. */
        get width(): int64
        set width(value: int64)
        
        /** The number of vertical color samples that will be obtained from the [Gradient], which also represents the texture's height. */
        get height(): int64
        set height(value: int64)
        
        /** If `true`, the generated texture will support high dynamic range ([constant Image.FORMAT_RGBAF] format). This allows for glow effects to work if [member Environment.glow_enabled] is `true`. If `false`, the generated texture will use low dynamic range; overbright colors will be clamped ([constant Image.FORMAT_RGBA8] format). */
        get useHdr(): boolean
        set useHdr(value: boolean)
        
        /** The gradient fill type, one of the [enum Fill] values. The texture is filled by interpolating colors starting from [member fill_from] to [member fill_to] offsets. */
        get fill(): int64
        set fill(value: int64)
        
        /** The initial offset used to fill the texture specified in UV coordinates. */
        get fillFrom(): Vector2
        set fillFrom(value: Vector2)
        
        /** The final offset used to fill the texture specified in UV coordinates. */
        get fillTo(): Vector2
        set fillTo(value: Vector2)
        
        /** The gradient repeat type, one of the [enum Repeat] values. The texture is filled starting from [member fill_from] to [member fill_to] offsets by default, but the gradient fill can be repeated to cover the entire texture. */
        get repeat(): int64
        set repeat(value: int64)
    }
    namespace GraphEdit {
        enum PanningScheme {
            ScrollZooms = 0,
            ScrollPans = 1,
        }
        enum GridPattern {
            GridPatternLines = 0,
            GridPatternDots = 1,
        }
    }
    /** An editor for graph-like structures, using [GraphNode]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_graphedit.html  
     */
    class GraphEdit<Map extends NodePathMap = any> extends Control<Map> {
        /** [kbd]Mouse Wheel[/kbd] will zoom, [kbd]Ctrl + Mouse Wheel[/kbd] will move the view. */
        static readonly SCROLL_ZOOMS = 0
        
        /** [kbd]Mouse Wheel[/kbd] will move the view, [kbd]Ctrl + Mouse Wheel[/kbd] will zoom. */
        static readonly SCROLL_PANS = 1
        
        /** Draw the grid using solid lines. */
        static readonly GRID_PATTERN_LINES = 0
        
        /** Draw the grid using dots. */
        static readonly GRID_PATTERN_DOTS = 1
        constructor(identifier?: any)
        
        /** Returns whether the [param mouse_position] is in the input hot zone.  
         *  By default, a hot zone is a [Rect2] positioned such that its center is at [param in_node].[method GraphNode.get_input_port_position]([param in_port]) (For output's case, call [method GraphNode.get_output_port_position] instead). The hot zone's width is twice the Theme Property `port_grab_distance_horizontal`, and its height is twice the `port_grab_distance_vertical`.  
         *  Below is a sample code to help get started:  
         *    
         */
        /* gdvirtual */ _isInInputHotzone(inNode: GObject, inPort: int64, mousePosition: Vector2): boolean
        
        /** Returns whether the [param mouse_position] is in the output hot zone. For more information on hot zones, see [method _is_in_input_hotzone].  
         *  Below is a sample code to help get started:  
         *    
         */
        /* gdvirtual */ _isInOutputHotzone(inNode: GObject, inPort: int64, mousePosition: Vector2): boolean
        
        /** Virtual method which can be overridden to customize how connections are drawn. */
        /* gdvirtual */ _getConnectionLine(fromPosition: Vector2, toPosition: Vector2): PackedVector2Array
        
        /** This virtual method can be used to insert additional error detection while the user is dragging a connection over a valid port.  
         *  Return `true` if the connection is indeed valid or return `false` if the connection is impossible. If the connection is impossible, no snapping to the port and thus no connection request to that port will happen.  
         *  In this example a connection to same node is suppressed:  
         *    
         */
        /* gdvirtual */ _isNodeHoverValid(fromNode: StringName, fromPort: int64, toNode: StringName, toPort: int64): boolean
        
        /** Create a connection between the [param from_port] of the [param from_node] [GraphNode] and the [param to_port] of the [param to_node] [GraphNode]. If the connection already exists, no connection is created.  
         *  Connections with [param keep_alive] set to `false` may be deleted automatically if invalid during a redraw.  
         */
        connectNode(fromNode: StringName, fromPort: int64, toNode: StringName, toPort: int64, keepAlive?: boolean /* = false */): GError
        
        /** Returns `true` if the [param from_port] of the [param from_node] [GraphNode] is connected to the [param to_port] of the [param to_node] [GraphNode]. */
        isNodeConnected(fromNode: StringName, fromPort: int64, toNode: StringName, toPort: int64): boolean
        
        /** Removes the connection between the [param from_port] of the [param from_node] [GraphNode] and the [param to_port] of the [param to_node] [GraphNode]. If the connection does not exist, no connection is removed. */
        disconnectNode(fromNode: StringName, fromPort: int64, toNode: StringName, toPort: int64): void
        
        /** Sets the coloration of the connection between [param from_node]'s [param from_port] and [param to_node]'s [param to_port] with the color provided in the [theme_item activity] theme property. The color is linearly interpolated between the connection color and the activity color using [param amount] as weight. */
        setConnectionActivity(fromNode: StringName, fromPort: int64, toNode: StringName, toPort: int64, amount: float64): void
        
        /** Returns the number of connections from [param from_port] of [param from_node]. */
        getConnectionCount(fromNode: StringName, fromPort: int64): int64
        
        /** Returns the closest connection to the given point in screen space. If no connection is found within [param max_distance] pixels, an empty [Dictionary] is returned.  
         *  A connection is represented as a [Dictionary] in the form of:  
         *    
         *  For example, getting a connection at a given mouse position can be achieved like this:  
         *    
         */
        getClosestConnectionAtPoint(point: Vector2, maxDistance?: float64 /* = 4 */): GDictionary
        
        /** Returns an [Array] containing a list of all connections for [param node].  
         *  A connection is represented as a [Dictionary] in the form of:  
         *    
         */
        getConnectionListFromNode(node: StringName): GArray
        
        /** Returns an [Array] containing the list of connections that intersect with the given [Rect2].  
         *  A connection is represented as a [Dictionary] in the form of:  
         *    
         */
        getConnectionsIntersectingWithRect(rect: Rect2): GArray
        
        /** Removes all connections between nodes. */
        clearConnections(): void
        
        /** Ends the creation of the current connection. In other words, if you are dragging a connection you can use this method to abort the process and remove the line that followed your cursor.  
         *  This is best used together with [signal connection_drag_started] and [signal connection_drag_ended] to add custom behavior like node addition through shortcuts.  
         *      
         *  **Note:** This method suppresses any other connection request signals apart from [signal connection_drag_ended].  
         */
        forceConnectionDragEnd(): void
        
        /** Allows to disconnect nodes when dragging from the right port of the [GraphNode]'s slot if it has the specified type. See also [method remove_valid_right_disconnect_type]. */
        addValidRightDisconnectType(type: int64): void
        
        /** Disallows to disconnect nodes when dragging from the right port of the [GraphNode]'s slot if it has the specified type. Use this to disable disconnection previously allowed with [method add_valid_right_disconnect_type]. */
        removeValidRightDisconnectType(type: int64): void
        
        /** Allows to disconnect nodes when dragging from the left port of the [GraphNode]'s slot if it has the specified type. See also [method remove_valid_left_disconnect_type]. */
        addValidLeftDisconnectType(type: int64): void
        
        /** Disallows to disconnect nodes when dragging from the left port of the [GraphNode]'s slot if it has the specified type. Use this to disable disconnection previously allowed with [method add_valid_left_disconnect_type]. */
        removeValidLeftDisconnectType(type: int64): void
        
        /** Allows the connection between two different port types. The port type is defined individually for the left and the right port of each slot with the [method GraphNode.set_slot] method.  
         *  See also [method is_valid_connection_type] and [method remove_valid_connection_type].  
         */
        addValidConnectionType(fromType: int64, toType: int64): void
        
        /** Disallows the connection between two different port types previously allowed by [method add_valid_connection_type]. The port type is defined individually for the left and the right port of each slot with the [method GraphNode.set_slot] method.  
         *  See also [method is_valid_connection_type].  
         */
        removeValidConnectionType(fromType: int64, toType: int64): void
        
        /** Returns whether it's possible to make a connection between two different port types. The port type is defined individually for the left and the right port of each slot with the [method GraphNode.set_slot] method.  
         *  See also [method add_valid_connection_type] and [method remove_valid_connection_type].  
         */
        isValidConnectionType(fromType: int64, toType: int64): boolean
        
        /** Returns the points which would make up a connection between [param from_node] and [param to_node]. */
        getConnectionLine(fromNode: Vector2, toNode: Vector2): PackedVector2Array
        
        /** Attaches the [param element] [GraphElement] to the [param frame] [GraphFrame]. */
        attachGraphElementToFrame(element: StringName, frame: StringName): void
        
        /** Detaches the [param element] [GraphElement] from the [GraphFrame] it is currently attached to. */
        detachGraphElementFromFrame(element: StringName): void
        
        /** Returns the [GraphFrame] that contains the [GraphElement] with the given name. */
        getElementFrame(element: StringName): null | GraphFrame
        
        /** Returns an array of node names that are attached to the [GraphFrame] with the given name. */
        getAttachedNodesOfFrame(frame: StringName): GArray
        
        /** Gets the [HBoxContainer] that contains the zooming and grid snap controls in the top left of the graph. You can use this method to reposition the toolbar or to add your own custom controls to it.  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.  
         */
        getMenuHBox(): null | HBoxContainer
        
        /** Rearranges selected nodes in a layout with minimum crossings between connections and uniform horizontal and vertical gap between nodes. */
        arrangeNodes(): void
        
        /** Sets the specified [param node] as the one selected. */
        setSelected(node: Node): void
        
        /** The scroll offset. */
        get scrollOffset(): Vector2
        set scrollOffset(value: Vector2)
        
        /** If `true`, the grid is visible. */
        get showGrid(): boolean
        set showGrid(value: boolean)
        
        /** The pattern used for drawing the grid. */
        get gridPattern(): int64
        set gridPattern(value: int64)
        
        /** If `true`, enables snapping. */
        get snappingEnabled(): boolean
        set snappingEnabled(value: boolean)
        
        /** The snapping distance in pixels, also determines the grid line distance. */
        get snappingDistance(): int64
        set snappingDistance(value: int64)
        
        /** Defines the control scheme for panning with mouse wheel. */
        get panningScheme(): int64
        set panningScheme(value: int64)
        
        /** If `true`, enables disconnection of existing connections in the GraphEdit by dragging the right end. */
        get rightDisconnects(): boolean
        set rightDisconnects(value: boolean)
        
        /** [Dictionary] of human readable port type names. */
        get typeNames(): GDictionary
        set typeNames(value: GDictionary)
        
        /** The curvature of the lines between the nodes. 0 results in straight lines. */
        get connectionLinesCurvature(): float64
        set connectionLinesCurvature(value: float64)
        
        /** The thickness of the lines between the nodes. */
        get connectionLinesThickness(): float64
        set connectionLinesThickness(value: float64)
        
        /** If `true`, the lines between nodes will use antialiasing. */
        get connectionLinesAntialiased(): boolean
        set connectionLinesAntialiased(value: boolean)
        
        /** The connections between [GraphNode]s.  
         *  A connection is represented as a [Dictionary] in the form of:  
         *    
         *  Connections with `keep_alive` set to `false` may be deleted automatically if invalid during a redraw.  
         */
        get connections(): GArray
        set connections(value: GArray)
        
        /** The current zoom value. */
        get zoom(): float64
        set zoom(value: float64)
        
        /** The lower zoom limit. */
        get zoomMin(): float64
        set zoomMin(value: float64)
        
        /** The upper zoom limit. */
        get zoomMax(): float64
        set zoomMax(value: float64)
        
        /** The step of each zoom level. */
        get zoomStep(): float64
        set zoomStep(value: float64)
        
        /** If `true`, the minimap is visible. */
        get minimapEnabled(): boolean
        set minimapEnabled(value: boolean)
        
        /** The size of the minimap rectangle. The map itself is based on the size of the grid area and is scaled to fit this rectangle. */
        get minimapSize(): Vector2
        set minimapSize(value: Vector2)
        
        /** The opacity of the minimap rectangle. */
        get minimapOpacity(): float64
        set minimapOpacity(value: float64)
        
        /** If `true`, the menu toolbar is visible. */
        get showMenu(): boolean
        set showMenu(value: boolean)
        
        /** If `true`, the label with the current zoom level is visible. The zoom level is displayed in percents. */
        get showZoomLabel(): boolean
        set showZoomLabel(value: boolean)
        
        /** If `true`, buttons that allow to change and reset the zoom level are visible. */
        get showZoomButtons(): boolean
        set showZoomButtons(value: boolean)
        
        /** If `true`, buttons that allow to configure grid and snapping options are visible. */
        get showGridButtons(): boolean
        set showGridButtons(value: boolean)
        
        /** If `true`, the button to toggle the minimap is visible. */
        get showMinimapButton(): boolean
        set showMinimapButton(value: boolean)
        
        /** If `true`, the button to automatically arrange graph nodes is visible. */
        get showArrangeButton(): boolean
        set showArrangeButton(value: boolean)
        
        /** Emitted to the GraphEdit when the connection between the [param from_port] of the [param from_node] [GraphNode] and the [param to_port] of the [param to_node] [GraphNode] is attempted to be created. */
        readonly connectionRequest: Signal<(fromNode: StringName, fromPort: int64, toNode: StringName, toPort: int64) => void>
        
        /** Emitted to the GraphEdit when the connection between [param from_port] of [param from_node] [GraphNode] and [param to_port] of [param to_node] [GraphNode] is attempted to be removed. */
        readonly disconnectionRequest: Signal<(fromNode: StringName, fromPort: int64, toNode: StringName, toPort: int64) => void>
        
        /** Emitted when user drags a connection from an output port into the empty space of the graph. */
        readonly connectionToEmpty: Signal<(fromNode: StringName, fromPort: int64, releasePosition: Vector2) => void>
        
        /** Emitted when user drags a connection from an input port into the empty space of the graph. */
        readonly connectionFromEmpty: Signal<(toNode: StringName, toPort: int64, releasePosition: Vector2) => void>
        
        /** Emitted at the beginning of a connection drag. */
        readonly connectionDragStarted: Signal<(fromNode: StringName, fromPort: int64, isOutput: boolean) => void>
        
        /** Emitted at the end of a connection drag. */
        readonly connectionDragEnded: Signal<() => void>
        
        /** Emitted when this [GraphEdit] captures a `ui_copy` action ([kbd]Ctrl + C[/kbd] by default). In general, this signal indicates that the selected [GraphElement]s should be copied. */
        readonly copyNodesRequest: Signal<() => void>
        
        /** Emitted when this [GraphEdit] captures a `ui_cut` action ([kbd]Ctrl + X[/kbd] by default). In general, this signal indicates that the selected [GraphElement]s should be cut. */
        readonly cutNodesRequest: Signal<() => void>
        
        /** Emitted when this [GraphEdit] captures a `ui_paste` action ([kbd]Ctrl + V[/kbd] by default). In general, this signal indicates that previously copied [GraphElement]s should be pasted. */
        readonly pasteNodesRequest: Signal<() => void>
        
        /** Emitted when this [GraphEdit] captures a `ui_graph_duplicate` action ([kbd]Ctrl + D[/kbd] by default). In general, this signal indicates that the selected [GraphElement]s should be duplicated. */
        readonly duplicateNodesRequest: Signal<() => void>
        
        /** Emitted when this [GraphEdit] captures a `ui_graph_delete` action ([kbd]Delete[/kbd] by default).  
         *  [param nodes] is an array of node names that should be removed. These usually include all selected nodes.  
         */
        readonly deleteNodesRequest: Signal<(nodes: GArray) => void>
        
        /** Emitted when the given [GraphElement] node is selected. */
        readonly nodeSelected: Signal<(node: Node) => void>
        
        /** Emitted when the given [GraphElement] node is deselected. */
        readonly nodeDeselected: Signal<(node: Node) => void>
        
        /** Emitted when the [GraphFrame] [param frame] is resized to [param new_rect]. */
        readonly frameRectChanged: Signal<(frame: GraphFrame, newRect: Rect2) => void>
        
        /** Emitted when a popup is requested. Happens on right-clicking in the GraphEdit. [param at_position] is the position of the mouse pointer when the signal is sent. */
        readonly popupRequest: Signal<(atPosition: Vector2) => void>
        
        /** Emitted at the beginning of a [GraphElement]'s movement. */
        readonly beginNodeMove: Signal<() => void>
        
        /** Emitted at the end of a [GraphElement]'s movement. */
        readonly endNodeMove: Signal<() => void>
        
        /** Emitted when one or more [GraphElement]s are dropped onto the [GraphFrame] named [param frame], when they were not previously attached to any other one.  
         *  [param elements] is an array of [GraphElement]s to be attached.  
         */
        readonly graphElementsLinkedToFrameRequest: Signal<(elements: GArray, frame: StringName) => void>
        
        /** Emitted when the scroll offset is changed by the user. It will not be emitted when changed in code. */
        readonly scrollOffsetChanged: Signal<(offset: Vector2) => void>
    }
    /** A container that represents a basic element that can be placed inside a [GraphEdit] control.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_graphelement.html  
     */
    class GraphElement<Map extends NodePathMap = any> extends Container<Map> {
        constructor(identifier?: any)
        /** The offset of the GraphElement, relative to the scroll offset of the [GraphEdit]. */
        get positionOffset(): Vector2
        set positionOffset(value: Vector2)
        
        /** If `true`, the user can resize the GraphElement.  
         *      
         *  **Note:** Dragging the handle will only emit the [signal resize_request] and [signal resize_end] signals, the GraphElement needs to be resized manually.  
         */
        get resizable(): boolean
        set resizable(value: boolean)
        
        /** If `true`, the user can drag the GraphElement. */
        get draggable(): boolean
        set draggable(value: boolean)
        
        /** If `true`, the user can select the GraphElement. */
        get selectable(): boolean
        set selectable(value: boolean)
        
        /** If `true`, the GraphElement is selected. */
        get selected(): boolean
        set selected(value: boolean)
        
        /** Emitted when the GraphElement is selected. */
        readonly nodeSelected: Signal<() => void>
        
        /** Emitted when the GraphElement is deselected. */
        readonly nodeDeselected: Signal<() => void>
        
        /** Emitted when displaying the GraphElement over other ones is requested. Happens on focusing (clicking into) the GraphElement. */
        readonly raiseRequest: Signal<() => void>
        
        /** Emitted when removing the GraphElement is requested. */
        readonly deleteRequest: Signal<() => void>
        
        /** Emitted when resizing the GraphElement is requested. Happens on dragging the resizer handle (see [member resizable]). */
        readonly resizeRequest: Signal<(newSize: Vector2) => void>
        
        /** Emitted when releasing the mouse button after dragging the resizer handle (see [member resizable]). */
        readonly resizeEnd: Signal<(newSize: Vector2) => void>
        
        /** Emitted when the GraphElement is dragged. */
        readonly dragged: Signal<(from: Vector2, to: Vector2) => void>
        
        /** Emitted when the GraphElement is moved. */
        readonly positionOffsetChanged: Signal<() => void>
    }
    /** GraphFrame is a special [GraphElement] that can be used to organize other [GraphElement]s inside a [GraphEdit].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_graphframe.html  
     */
    class GraphFrame<Map extends NodePathMap = any> extends GraphElement<Map> {
        constructor(identifier?: any)
        /** Returns the [HBoxContainer] used for the title bar, only containing a [Label] for displaying the title by default.  
         *  This can be used to add custom controls to the title bar such as option or close buttons.  
         */
        getTitlebarHBox(): null | HBoxContainer
        
        /** Title of the frame. */
        get title(): string
        set title(value: string)
        
        /** If `true`, the frame's rect will be adjusted automatically to enclose all attached [GraphElement]s. */
        get autoshrinkEnabled(): boolean
        set autoshrinkEnabled(value: boolean)
        
        /** The margin around the attached nodes that is used to calculate the size of the frame when [member autoshrink_enabled] is `true`. */
        get autoshrinkMargin(): int64
        set autoshrinkMargin(value: int64)
        
        /** The margin inside the frame that can be used to drag the frame. */
        get dragMargin(): int64
        set dragMargin(value: int64)
        
        /** If `true`, the tint color will be used to tint the frame. */
        get tintColorEnabled(): boolean
        set tintColorEnabled(value: boolean)
        
        /** The color of the frame when [member tint_color_enabled] is `true`. */
        get tintColor(): Color
        set tintColor(value: Color)
        
        /** Emitted when [member autoshrink_enabled] or [member autoshrink_margin] changes. */
        readonly autoshrinkChanged: Signal<() => void>
    }
    /** A container with connection ports, representing a node in a [GraphEdit].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_graphnode.html  
     */
    class GraphNode<Map extends NodePathMap = any> extends GraphElement<Map> {
        constructor(identifier?: any)
        /* gdvirtual */ _drawPort(slotIndex: int64, position: Vector2I, left: boolean, color: Color): void
        
        /** Returns the [HBoxContainer] used for the title bar, only containing a [Label] for displaying the title by default. This can be used to add custom controls to the title bar such as option or close buttons. */
        getTitlebarHBox(): null | HBoxContainer
        
        /** Sets properties of the slot with the given [param slot_index].  
         *  If [param enable_left_port]/[param enable_right_port] is `true`, a port will appear and the slot will be able to be connected from this side.  
         *  With [param type_left]/[param type_right] an arbitrary type can be assigned to each port. Two ports can be connected if they share the same type, or if the connection between their types is allowed in the parent [GraphEdit] (see [method GraphEdit.add_valid_connection_type]). Keep in mind that the [GraphEdit] has the final say in accepting the connection. Type compatibility simply allows the [signal GraphEdit.connection_request] signal to be emitted.  
         *  Ports can be further customized using [param color_left]/[param color_right] and [param custom_icon_left]/[param custom_icon_right]. The color parameter adds a tint to the icon. The custom icon can be used to override the default port dot.  
         *  Additionally, [param draw_stylebox] can be used to enable or disable drawing of the background stylebox for each slot. See [theme_item slot].  
         *  Individual properties can also be set using one of the `set_slot_*` methods.  
         *      
         *  **Note:** This method only sets properties of the slot. To create the slot itself, add a [Control]-derived child to the GraphNode.  
         */
        setSlot(slotIndex: int64, enableLeftPort: boolean, typeLeft: int64, colorLeft: Color, enableRightPort: boolean, typeRight: int64, colorRight: Color, customIconLeft?: Texture2D /* = undefined */, customIconRight?: Texture2D /* = undefined */, drawStylebox?: boolean /* = true */): void
        
        /** Disables the slot with the given [param slot_index]. This will remove the corresponding input and output port from the GraphNode. */
        clearSlot(slotIndex: int64): void
        
        /** Disables all slots of the GraphNode. This will remove all input/output ports from the GraphNode. */
        clearAllSlots(): void
        
        /** Returns `true` if left (input) side of the slot with the given [param slot_index] is enabled. */
        isSlotEnabledLeft(slotIndex: int64): boolean
        
        /** Toggles the left (input) side of the slot with the given [param slot_index]. If [param enable] is `true`, a port will appear on the left side and the slot will be able to be connected from this side. */
        setSlotEnabledLeft(slotIndex: int64, enable: boolean): void
        
        /** Sets the left (input) type of the slot with the given [param slot_index] to [param type]. If the value is negative, all connections will be disallowed to be created via user inputs. */
        setSlotTypeLeft(slotIndex: int64, type: int64): void
        
        /** Returns the left (input) type of the slot with the given [param slot_index]. */
        getSlotTypeLeft(slotIndex: int64): int64
        
        /** Sets the [Color] of the left (input) side of the slot with the given [param slot_index] to [param color]. */
        setSlotColorLeft(slotIndex: int64, color: Color): void
        
        /** Returns the left (input) [Color] of the slot with the given [param slot_index]. */
        getSlotColorLeft(slotIndex: int64): Color
        
        /** Sets the custom [Texture2D] of the left (input) side of the slot with the given [param slot_index] to [param custom_icon]. */
        setSlotCustomIconLeft(slotIndex: int64, customIcon: Texture2D): void
        
        /** Returns the left (input) custom [Texture2D] of the slot with the given [param slot_index]. */
        getSlotCustomIconLeft(slotIndex: int64): null | Texture2D
        
        /** Returns `true` if right (output) side of the slot with the given [param slot_index] is enabled. */
        isSlotEnabledRight(slotIndex: int64): boolean
        
        /** Toggles the right (output) side of the slot with the given [param slot_index]. If [param enable] is `true`, a port will appear on the right side and the slot will be able to be connected from this side. */
        setSlotEnabledRight(slotIndex: int64, enable: boolean): void
        
        /** Sets the right (output) type of the slot with the given [param slot_index] to [param type]. If the value is negative, all connections will be disallowed to be created via user inputs. */
        setSlotTypeRight(slotIndex: int64, type: int64): void
        
        /** Returns the right (output) type of the slot with the given [param slot_index]. */
        getSlotTypeRight(slotIndex: int64): int64
        
        /** Sets the [Color] of the right (output) side of the slot with the given [param slot_index] to [param color]. */
        setSlotColorRight(slotIndex: int64, color: Color): void
        
        /** Returns the right (output) [Color] of the slot with the given [param slot_index]. */
        getSlotColorRight(slotIndex: int64): Color
        
        /** Sets the custom [Texture2D] of the right (output) side of the slot with the given [param slot_index] to [param custom_icon]. */
        setSlotCustomIconRight(slotIndex: int64, customIcon: Texture2D): void
        
        /** Returns the right (output) custom [Texture2D] of the slot with the given [param slot_index]. */
        getSlotCustomIconRight(slotIndex: int64): null | Texture2D
        
        /** Returns `true` if the background [StyleBox] of the slot with the given [param slot_index] is drawn. */
        isSlotDrawStylebox(slotIndex: int64): boolean
        
        /** Toggles the background [StyleBox] of the slot with the given [param slot_index]. */
        setSlotDrawStylebox(slotIndex: int64, enable: boolean): void
        
        /** Returns the number of slots with an enabled input port. */
        getInputPortCount(): int64
        
        /** Returns the position of the input port with the given [param port_idx]. */
        getInputPortPosition(portIdx: int64): Vector2
        
        /** Returns the type of the input port with the given [param port_idx]. */
        getInputPortType(portIdx: int64): int64
        
        /** Returns the [Color] of the input port with the given [param port_idx]. */
        getInputPortColor(portIdx: int64): Color
        
        /** Returns the corresponding slot index of the input port with the given [param port_idx]. */
        getInputPortSlot(portIdx: int64): int64
        
        /** Returns the number of slots with an enabled output port. */
        getOutputPortCount(): int64
        
        /** Returns the position of the output port with the given [param port_idx]. */
        getOutputPortPosition(portIdx: int64): Vector2
        
        /** Returns the type of the output port with the given [param port_idx]. */
        getOutputPortType(portIdx: int64): int64
        
        /** Returns the [Color] of the output port with the given [param port_idx]. */
        getOutputPortColor(portIdx: int64): Color
        
        /** Returns the corresponding slot index of the output port with the given [param port_idx]. */
        getOutputPortSlot(portIdx: int64): int64
        
        /** The text displayed in the GraphNode's title bar. */
        get title(): string
        set title(value: string)
        
        /** If `true`, you can connect ports with different types, even if the connection was not explicitly allowed in the parent [GraphEdit]. */
        get ignoreInvalidConnectionType(): boolean
        set ignoreInvalidConnectionType(value: boolean)
        
        /** Emitted when any GraphNode's slot is updated. */
        readonly slotUpdated: Signal<(slotIndex: int64) => void>
        
        /** Emitted when any slot's size might have changed. */
        readonly slotSizesChanged: Signal<() => void>
    }
    /** A container that arranges its child controls in a grid layout.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_gridcontainer.html  
     */
    class GridContainer<Map extends NodePathMap = any> extends Container<Map> {
        constructor(identifier?: any)
        /** The number of columns in the [GridContainer]. If modified, [GridContainer] reorders its Control-derived children to accommodate the new layout. */
        get columns(): int64
        set columns(value: int64)
    }
    /** Node for 3D tile-based maps.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_gridmap.html  
     */
    class GridMap<Map extends NodePathMap = any> extends Node3D<Map> {
        /** Invalid cell item that can be used in [method set_cell_item] to clear cells (or represent an empty cell in [method get_cell_item]). */
        static readonly INVALID_CELL_ITEM = -1
        constructor(identifier?: any)
        
        /** Based on [param value], enables or disables the specified layer in the [member collision_mask], given a [param layer_number] between 1 and 32. */
        setCollisionMaskValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member collision_mask] is enabled, given a [param layer_number] between 1 and 32. */
        getCollisionMaskValue(layerNumber: int64): boolean
        
        /** Based on [param value], enables or disables the specified layer in the [member collision_layer], given a [param layer_number] between 1 and 32. */
        setCollisionLayerValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member collision_layer] is enabled, given a [param layer_number] between 1 and 32. */
        getCollisionLayerValue(layerNumber: int64): boolean
        
        /** Sets the [RID] of the navigation map this GridMap node should use for its cell baked navigation meshes. */
        setNavigationMap(navigationMap: Rid): void
        
        /** Returns the [RID] of the navigation map this GridMap node uses for its cell baked navigation meshes.  
         *  This function returns always the map set on the GridMap node and not the map on the NavigationServer. If the map is changed directly with the NavigationServer API the GridMap node will not be aware of the map change.  
         */
        getNavigationMap(): Rid
        
        /** Sets the mesh index for the cell referenced by its grid coordinates.  
         *  A negative item index such as [constant INVALID_CELL_ITEM] will clear the cell.  
         *  Optionally, the item's orientation can be passed. For valid orientation values, see [method get_orthogonal_index_from_basis].  
         */
        setCellItem(position: Vector3I, item: int64, orientation?: int64 /* = 0 */): void
        
        /** The [MeshLibrary] item index located at the given grid coordinates. If the cell is empty, [constant INVALID_CELL_ITEM] will be returned. */
        getCellItem(position: Vector3I): int64
        
        /** The orientation of the cell at the given grid coordinates. `-1` is returned if the cell is empty. */
        getCellItemOrientation(position: Vector3I): int64
        
        /** Returns the basis that gives the specified cell its orientation. */
        getCellItemBasis(position: Vector3I): Basis
        
        /** Returns one of 24 possible rotations that lie along the vectors (x,y,z) with each component being either -1, 0, or 1. For further details, refer to the Godot source code. */
        getBasisWithOrthogonalIndex(index: int64): Basis
        
        /** This function considers a discretization of rotations into 24 points on unit sphere, lying along the vectors (x,y,z) with each component being either -1, 0, or 1, and returns the index (in the range from 0 to 23) of the point best representing the orientation of the object. For further details, refer to the Godot source code. */
        getOrthogonalIndexFromBasis(basis: Basis): int64
        
        /** Returns the map coordinates of the cell containing the given [param local_position]. If [param local_position] is in global coordinates, consider using [method Node3D.to_local] before passing it to this method. See also [method map_to_local]. */
        localToMap(localPosition: Vector3): Vector3I
        
        /** Returns the position of a grid cell in the GridMap's local coordinate space. To convert the returned value into global coordinates, use [method Node3D.to_global]. See also [method local_to_map]. */
        mapToLocal(mapPosition: Vector3I): Vector3
        
        /** This method does nothing. */
        resourceChanged(resource: Resource): void
        
        /** Clear all cells. */
        clear(): void
        
        /** Returns an array of [Vector3] with the non-empty cell coordinates in the grid map. */
        getUsedCells(): GArray
        
        /** Returns an array of all cells with the given item index specified in [param item]. */
        getUsedCellsByItem(item: int64): GArray
        
        /** Returns an array of [Transform3D] and [Mesh] references corresponding to the non-empty cells in the grid. The transforms are specified in local space. */
        getMeshes(): GArray
        
        /** Returns an array of [ArrayMesh]es and [Transform3D] references of all bake meshes that exist within the current GridMap. */
        getBakeMeshes(): GArray
        
        /** Returns [RID] of a baked mesh with the given [param idx]. */
        getBakeMeshInstance(idx: int64): Rid
        
        /** Clears all baked meshes. See [method make_baked_meshes]. */
        clearBakedMeshes(): void
        
        /** Bakes lightmap data for all meshes in the assigned [MeshLibrary]. */
        makeBakedMeshes(genLightmapUV?: boolean /* = false */, lightmapUVTexelSize?: float64 /* = 0.1 */): void
        
        /** The assigned [MeshLibrary]. */
        get meshLibrary(): null | MeshLibrary
        set meshLibrary(value: null | MeshLibrary)
        
        /** Overrides the default friction and bounce physics properties for the whole [GridMap]. */
        get physicsMaterial(): null | PhysicsMaterial
        set physicsMaterial(value: null | PhysicsMaterial)
        
        /** The dimensions of the grid's cells.  
         *  This does not affect the size of the meshes. See [member cell_scale].  
         */
        get cellSize(): Vector3
        set cellSize(value: Vector3)
        
        /** The size of each octant measured in number of cells. This applies to all three axis. */
        get cellOctantSize(): int64
        set cellOctantSize(value: int64)
        
        /** If `true`, grid items are centered on the X axis. */
        get cellCenterX(): boolean
        set cellCenterX(value: boolean)
        
        /** If `true`, grid items are centered on the Y axis. */
        get cellCenterY(): boolean
        set cellCenterY(value: boolean)
        
        /** If `true`, grid items are centered on the Z axis. */
        get cellCenterZ(): boolean
        set cellCenterZ(value: boolean)
        
        /** The scale of the cell items.  
         *  This does not affect the size of the grid cells themselves, only the items in them. This can be used to make cell items overlap their neighbors.  
         */
        get cellScale(): float64
        set cellScale(value: float64)
        
        /** The physics layers this GridMap is in.  
         *  GridMaps act as static bodies, meaning they aren't affected by gravity or other forces. They only affect other physics bodies that collide with them.  
         */
        get collisionLayer(): int64
        set collisionLayer(value: int64)
        
        /** The physics layers this GridMap detects collisions in. See [url=https://docs.godotengine.org/en/latest/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        get collisionMask(): int64
        set collisionMask(value: int64)
        
        /** The priority used to solve colliding when occurring penetration. The higher the priority is, the lower the penetration into the object will be. This can for example be used to prevent the player from breaking through the boundaries of a level. */
        get collisionPriority(): float64
        set collisionPriority(value: float64)
        
        /** If `true`, this GridMap creates a navigation region for each cell that uses a [member mesh_library] item with a navigation mesh. The created navigation region will use the navigation layers bitmask assigned to the [MeshLibrary]'s item. */
        get bakeNavigation(): boolean
        set bakeNavigation(value: boolean)
        
        /** Emitted when [member cell_size] changes. */
        readonly cellSizeChanged: Signal<(cellSize: Vector3) => void>
        
        /** Emitted when the [MeshLibrary] of this GridMap changes. */
        readonly changed: Signal<() => void>
    }
    /** Editor for [GridMap] nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_gridmapeditorplugin.html  
     */
    class GridMapEditorPlugin<Map extends NodePathMap = any> extends EditorPlugin<Map> {
        constructor(identifier?: any)
        /** Returns the [GridMap] node currently edited by the grid map editor. */
        getCurrentGridMap(): null | GridMap
        
        /** Selects the cells inside the given bounds from [param begin] to [param end]. */
        setSelection(begin: Vector3I, end: Vector3I): void
        
        /** Deselects any currently selected cells. */
        clearSelection(): void
        
        /** Returns the cell coordinate bounds of the current selection. Use [method has_selection] to check if there is an active selection. */
        getSelection(): Aabb
        
        /** Returns `true` if there are selected cells. */
        hasSelection(): boolean
        
        /** Returns an array of [Vector3i]s with the selected cells' coordinates. */
        getSelectedCells(): GArray
        
        /** Selects the [MeshLibrary] item with the given index in the grid map editor's palette. If a negative index is given, no item will be selected. If a value greater than the last index is given, the last item will be selected.  
         *      
         *  **Note:** The indices might not be in the same order as they appear in the editor's interface.  
         */
        setSelectedPaletteItem(item: int64): void
        
        /** Returns the index of the selected [MeshLibrary] item in the grid map editor's palette or `-1` if no item is selected.  
         *      
         *  **Note:** The indices might not be in the same order as they appear in the editor's interface.  
         */
        getSelectedPaletteItem(): int64
    }
    /** A physics joint that restricts the movement of two 2D physics bodies to a fixed axis.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_groovejoint2d.html  
     */
    class GrooveJoint2D<Map extends NodePathMap = any> extends Joint2D<Map> {
        constructor(identifier?: any)
        /** The groove's length. The groove is from the joint's origin towards [member length] along the joint's local Y axis. */
        get length(): float64
        set length(value: float64)
        
        /** The body B's initial anchor position defined by the joint's origin and a local offset [member initial_offset] along the joint's Y axis (along the groove). */
        get initialOffset(): float64
        set initialOffset(value: float64)
    }
    /** A container that arranges its child controls horizontally.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_hboxcontainer.html  
     */
    class HBoxContainer<Map extends NodePathMap = any> extends BoxContainer<Map> {
        constructor(identifier?: any)
    }
    /** A container that arranges its child controls horizontally and wraps them around at the borders.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_hflowcontainer.html  
     */
    class HFlowContainer<Map extends NodePathMap = any> extends FlowContainer<Map> {
        constructor(identifier?: any)
    }
    class HmacContext extends RefCounted {
        constructor(identifier?: any)
        start(hashType: HashingContext.HashType, key: PackedByteArray | byte[] | ArrayBuffer): GError
        update(data: PackedByteArray | byte[] | ArrayBuffer): GError
        finish(): PackedByteArray
    }
    /** A horizontal scrollbar that goes from left (min) to right (max).  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_hscrollbar.html  
     */
    class HScrollBar<Map extends NodePathMap = any> extends ScrollBar<Map> {
        constructor(identifier?: any)
    }
    /** A horizontal line used for separating other controls.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_hseparator.html  
     */
    class HSeparator<Map extends NodePathMap = any> extends Separator<Map> {
        constructor(identifier?: any)
    }
    /** A horizontal slider that goes from left (min) to right (max).  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_hslider.html  
     */
    class HSlider<Map extends NodePathMap = any> extends Slider<Map> {
        constructor(identifier?: any)
    }
    /** A container that splits two child controls horizontally and provides a grabber for adjusting the split ratio.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_hsplitcontainer.html  
     */
    class HSplitContainer<Map extends NodePathMap = any> extends SplitContainer<Map> {
        constructor(identifier?: any)
    }
    namespace HttpClient {
        enum Method {
            MethodGet = 0,
            MethodHead = 1,
            MethodPost = 2,
            MethodPut = 3,
            MethodDelete = 4,
            MethodOptions = 5,
            MethodTrace = 6,
            MethodConnect = 7,
            MethodPatch = 8,
            MethodMax = 9,
        }
        enum Status {
            StatusDisconnected = 0,
            StatusResolving = 1,
            StatusCantResolve = 2,
            StatusConnecting = 3,
            StatusCantConnect = 4,
            StatusConnected = 5,
            StatusRequesting = 6,
            StatusBody = 7,
            StatusConnectionError = 8,
            StatusTlsHandshakeError = 9,
        }
        enum ResponseCode {
            ResponseContinue = 100,
            ResponseSwitchingProtocols = 101,
            ResponseProcessing = 102,
            ResponseOk = 200,
            ResponseCreated = 201,
            ResponseAccepted = 202,
            ResponseNonAuthoritativeInformation = 203,
            ResponseNoContent = 204,
            ResponseResetContent = 205,
            ResponsePartialContent = 206,
            ResponseMultiStatus = 207,
            ResponseAlreadyReported = 208,
            ResponseImUsed = 226,
            ResponseMultipleChoices = 300,
            ResponseMovedPermanently = 301,
            ResponseFound = 302,
            ResponseSeeOther = 303,
            ResponseNotModified = 304,
            ResponseUseProxy = 305,
            ResponseSwitchProxy = 306,
            ResponseTemporaryRedirect = 307,
            ResponsePermanentRedirect = 308,
            ResponseBadRequest = 400,
            ResponseUnauthorized = 401,
            ResponsePaymentRequired = 402,
            ResponseForbidden = 403,
            ResponseNotFound = 404,
            ResponseMethodNotAllowed = 405,
            ResponseNotAcceptable = 406,
            ResponseProxyAuthenticationRequired = 407,
            ResponseRequestTimeout = 408,
            ResponseConflict = 409,
            ResponseGone = 410,
            ResponseLengthRequired = 411,
            ResponsePreconditionFailed = 412,
            ResponseRequestEntityTooLarge = 413,
            ResponseRequestUriTooLong = 414,
            ResponseUnsupportedMediaType = 415,
            ResponseRequestedRangeNotSatisfiable = 416,
            ResponseExpectationFailed = 417,
            ResponseImATeapot = 418,
            ResponseMisdirectedRequest = 421,
            ResponseUnprocessableEntity = 422,
            ResponseLocked = 423,
            ResponseFailedDependency = 424,
            ResponseUpgradeRequired = 426,
            ResponsePreconditionRequired = 428,
            ResponseTooManyRequests = 429,
            ResponseRequestHeaderFieldsTooLarge = 431,
            ResponseUnavailableForLegalReasons = 451,
            ResponseInternalServerError = 500,
            ResponseNotImplemented = 501,
            ResponseBadGateway = 502,
            ResponseServiceUnavailable = 503,
            ResponseGatewayTimeout = 504,
            ResponseHttpVersionNotSupported = 505,
            ResponseVariantAlsoNegotiates = 506,
            ResponseInsufficientStorage = 507,
            ResponseLoopDetected = 508,
            ResponseNotExtended = 510,
            ResponseNetworkAuthRequired = 511,
        }
    }
    class HttpClient extends RefCounted {
        static readonly METHOD_GET = 0
        static readonly METHOD_HEAD = 1
        static readonly METHOD_POST = 2
        static readonly METHOD_PUT = 3
        static readonly METHOD_DELETE = 4
        static readonly METHOD_OPTIONS = 5
        static readonly METHOD_TRACE = 6
        static readonly METHOD_CONNECT = 7
        static readonly METHOD_PATCH = 8
        static readonly METHOD_MAX = 9
        static readonly STATUS_DISCONNECTED = 0
        static readonly STATUS_RESOLVING = 1
        static readonly STATUS_CANT_RESOLVE = 2
        static readonly STATUS_CONNECTING = 3
        static readonly STATUS_CANT_CONNECT = 4
        static readonly STATUS_CONNECTED = 5
        static readonly STATUS_REQUESTING = 6
        static readonly STATUS_BODY = 7
        static readonly STATUS_CONNECTION_ERROR = 8
        static readonly STATUS_TLS_HANDSHAKE_ERROR = 9
        static readonly RESPONSE_CONTINUE = 100
        static readonly RESPONSE_SWITCHING_PROTOCOLS = 101
        static readonly RESPONSE_PROCESSING = 102
        static readonly RESPONSE_OK = 200
        static readonly RESPONSE_CREATED = 201
        static readonly RESPONSE_ACCEPTED = 202
        static readonly RESPONSE_NON_AUTHORITATIVE_INFORMATION = 203
        static readonly RESPONSE_NO_CONTENT = 204
        static readonly RESPONSE_RESET_CONTENT = 205
        static readonly RESPONSE_PARTIAL_CONTENT = 206
        static readonly RESPONSE_MULTI_STATUS = 207
        static readonly RESPONSE_ALREADY_REPORTED = 208
        static readonly RESPONSE_IM_USED = 226
        static readonly RESPONSE_MULTIPLE_CHOICES = 300
        static readonly RESPONSE_MOVED_PERMANENTLY = 301
        static readonly RESPONSE_FOUND = 302
        static readonly RESPONSE_SEE_OTHER = 303
        static readonly RESPONSE_NOT_MODIFIED = 304
        static readonly RESPONSE_USE_PROXY = 305
        static readonly RESPONSE_SWITCH_PROXY = 306
        static readonly RESPONSE_TEMPORARY_REDIRECT = 307
        static readonly RESPONSE_PERMANENT_REDIRECT = 308
        static readonly RESPONSE_BAD_REQUEST = 400
        static readonly RESPONSE_UNAUTHORIZED = 401
        static readonly RESPONSE_PAYMENT_REQUIRED = 402
        static readonly RESPONSE_FORBIDDEN = 403
        static readonly RESPONSE_NOT_FOUND = 404
        static readonly RESPONSE_METHOD_NOT_ALLOWED = 405
        static readonly RESPONSE_NOT_ACCEPTABLE = 406
        static readonly RESPONSE_PROXY_AUTHENTICATION_REQUIRED = 407
        static readonly RESPONSE_REQUEST_TIMEOUT = 408
        static readonly RESPONSE_CONFLICT = 409
        static readonly RESPONSE_GONE = 410
        static readonly RESPONSE_LENGTH_REQUIRED = 411
        static readonly RESPONSE_PRECONDITION_FAILED = 412
        static readonly RESPONSE_REQUEST_ENTITY_TOO_LARGE = 413
        static readonly RESPONSE_REQUEST_URI_TOO_LONG = 414
        static readonly RESPONSE_UNSUPPORTED_MEDIA_TYPE = 415
        static readonly RESPONSE_REQUESTED_RANGE_NOT_SATISFIABLE = 416
        static readonly RESPONSE_EXPECTATION_FAILED = 417
        static readonly RESPONSE_IM_A_TEAPOT = 418
        static readonly RESPONSE_MISDIRECTED_REQUEST = 421
        static readonly RESPONSE_UNPROCESSABLE_ENTITY = 422
        static readonly RESPONSE_LOCKED = 423
        static readonly RESPONSE_FAILED_DEPENDENCY = 424
        static readonly RESPONSE_UPGRADE_REQUIRED = 426
        static readonly RESPONSE_PRECONDITION_REQUIRED = 428
        static readonly RESPONSE_TOO_MANY_REQUESTS = 429
        static readonly RESPONSE_REQUEST_HEADER_FIELDS_TOO_LARGE = 431
        static readonly RESPONSE_UNAVAILABLE_FOR_LEGAL_REASONS = 451
        static readonly RESPONSE_INTERNAL_SERVER_ERROR = 500
        static readonly RESPONSE_NOT_IMPLEMENTED = 501
        static readonly RESPONSE_BAD_GATEWAY = 502
        static readonly RESPONSE_SERVICE_UNAVAILABLE = 503
        static readonly RESPONSE_GATEWAY_TIMEOUT = 504
        static readonly RESPONSE_HTTP_VERSION_NOT_SUPPORTED = 505
        static readonly RESPONSE_VARIANT_ALSO_NEGOTIATES = 506
        static readonly RESPONSE_INSUFFICIENT_STORAGE = 507
        static readonly RESPONSE_LOOP_DETECTED = 508
        static readonly RESPONSE_NOT_EXTENDED = 510
        static readonly RESPONSE_NETWORK_AUTH_REQUIRED = 511
        constructor(identifier?: any)
        connectToHost(host: string, port?: int64 /* = -1 */, tlsOptions?: TlsOptions /* = undefined */): GError
        requestRaw(method: HttpClient.Method, url: string, headers: PackedStringArray | string[], body: PackedByteArray | byte[] | ArrayBuffer): GError
        request(method: HttpClient.Method, url: string, headers: PackedStringArray | string[], body?: string /* = '' */): GError
        close(): void
        hasResponse(): boolean
        isResponseChunked(): boolean
        getResponseCode(): int64
        getResponseHeaders(): PackedStringArray
        getResponseHeadersAsDictionary(): GDictionary
        getResponseBodyLength(): int64
        readResponseBodyChunk(): PackedByteArray
        getStatus(): HttpClient.Status
        poll(): GError
        setHttpProxy(host: string, port: int64): void
        setHttpsProxy(host: string, port: int64): void
        queryStringFromDict(fields: GDictionary): string
        get blockingModeEnabled(): boolean
        set blockingModeEnabled(value: boolean)
        get connection(): null | StreamPeer
        set connection(value: null | StreamPeer)
        get readChunkSize(): int64
        set readChunkSize(value: int64)
    }
    namespace HttpRequest {
        enum Result {
            ResultSuccess = 0,
            ResultChunkedBodySizeMismatch = 1,
            ResultCantConnect = 2,
            ResultCantResolve = 3,
            ResultConnectionError = 4,
            ResultTlsHandshakeError = 5,
            ResultNoResponse = 6,
            ResultBodySizeLimitExceeded = 7,
            ResultBodyDecompressFailed = 8,
            ResultRequestFailed = 9,
            ResultDownloadFileCantOpen = 10,
            ResultDownloadFileWriteError = 11,
            ResultRedirectLimitReached = 12,
            ResultTimeout = 13,
        }
    }
    class HttpRequest<Map extends NodePathMap = any> extends Node<Map> {
        static readonly RESULT_SUCCESS = 0
        static readonly RESULT_CHUNKED_BODY_SIZE_MISMATCH = 1
        static readonly RESULT_CANT_CONNECT = 2
        static readonly RESULT_CANT_RESOLVE = 3
        static readonly RESULT_CONNECTION_ERROR = 4
        static readonly RESULT_TLS_HANDSHAKE_ERROR = 5
        static readonly RESULT_NO_RESPONSE = 6
        static readonly RESULT_BODY_SIZE_LIMIT_EXCEEDED = 7
        static readonly RESULT_BODY_DECOMPRESS_FAILED = 8
        static readonly RESULT_REQUEST_FAILED = 9
        static readonly RESULT_DOWNLOAD_FILE_CANT_OPEN = 10
        static readonly RESULT_DOWNLOAD_FILE_WRITE_ERROR = 11
        static readonly RESULT_REDIRECT_LIMIT_REACHED = 12
        static readonly RESULT_TIMEOUT = 13
        constructor(identifier?: any)
        request(url: string, customHeaders?: PackedStringArray | string[] /* = [] */, method?: HttpClient.Method /* = 0 */, requestData?: string /* = '' */): GError
        requestRaw(url: string, customHeaders?: PackedStringArray | string[] /* = [] */, method?: HttpClient.Method /* = 0 */, requestDataRaw?: PackedByteArray | byte[] | ArrayBuffer /* = [] */): GError
        cancelRequest(): void
        setTlsOptions(clientOptions: TlsOptions): void
        getHttpClientStatus(): HttpClient.Status
        getDownloadedBytes(): int64
        getBodySize(): int64
        setHttpProxy(host: string, port: int64): void
        setHttpsProxy(host: string, port: int64): void
        get downloadFile(): string
        set downloadFile(value: string)
        get downloadChunkSize(): int64
        set downloadChunkSize(value: int64)
        get useThreads(): boolean
        set useThreads(value: boolean)
        get acceptGZip(): boolean
        set acceptGZip(value: boolean)
        get bodySizeLimit(): int64
        set bodySizeLimit(value: int64)
        get maxRedirects(): int64
        set maxRedirects(value: int64)
        get timeout(): float64
        set timeout(value: float64)
        readonly requestCompleted: Signal<(result: int64, responseCode: int64, headers: PackedStringArray, body: PackedByteArray) => void>
    }
    namespace HashingContext {
        enum HashType {
            HashMd5 = 0,
            HashSha1 = 1,
            HashSha256 = 2,
        }
    }
    /** Provides functionality for computing cryptographic hashes chunk by chunk.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_hashingcontext.html  
     */
    class HashingContext extends RefCounted {
        /** Hashing algorithm: MD5. */
        static readonly HASH_MD5 = 0
        
        /** Hashing algorithm: SHA-1. */
        static readonly HASH_SHA1 = 1
        
        /** Hashing algorithm: SHA-256. */
        static readonly HASH_SHA256 = 2
        constructor(identifier?: any)
        
        /** Starts a new hash computation of the given [param type] (e.g. [constant HASH_SHA256] to start computation of an SHA-256). */
        start(type: HashingContext.HashType): GError
        
        /** Updates the computation with the given [param chunk] of data. */
        update(chunk: PackedByteArray | byte[] | ArrayBuffer): GError
        
        /** Closes the current context, and return the computed hash. */
        finish(): PackedByteArray
    }
    /** A 3D height map shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_heightmapshape3d.html  
     */
    class HeightMapShape3D extends Shape3D {
        constructor(identifier?: any)
        /** Returns the smallest height value found in [member map_data]. Recalculates only when [member map_data] changes. */
        getMinHeight(): float64
        
        /** Returns the largest height value found in [member map_data]. Recalculates only when [member map_data] changes. */
        getMaxHeight(): float64
        
        /** Updates [member map_data] with data read from an [Image] reference. Automatically resizes heightmap [member map_width] and [member map_depth] to fit the full image width and height.  
         *  The image needs to be in either [constant Image.FORMAT_RF] (32 bit), [constant Image.FORMAT_RH] (16 bit), or [constant Image.FORMAT_R8] (8 bit).  
         *  Each image pixel is read in as a float on the range from `0.0` (black pixel) to `1.0` (white pixel). This range value gets remapped to [param height_min] and [param height_max] to form the final height value.  
         */
        updateMapDataFromImage(image: Image, heightMin: float64, heightMax: float64): void
        
        /** Number of vertices in the width of the height map. Changing this will resize the [member map_data]. */
        get mapWidth(): int64
        set mapWidth(value: int64)
        
        /** Number of vertices in the depth of the height map. Changing this will resize the [member map_data]. */
        get mapDepth(): int64
        set mapDepth(value: int64)
        
        /** Height map data. The array's size must be equal to [member map_width] multiplied by [member map_depth]. */
        get mapData(): PackedFloat32Array
        set mapData(value: PackedFloat32Array | float32[])
    }
    namespace HingeJoint3D {
        enum Param {
            ParamBias = 0,
            ParamLimitUpper = 1,
            ParamLimitLower = 2,
            ParamLimitBias = 3,
            ParamLimitSoftness = 4,
            ParamLimitRelaxation = 5,
            ParamMotorTargetVelocity = 6,
            ParamMotorMaxImpulse = 7,
            ParamMax = 8,
        }
        enum Flag {
            FlagUseLimit = 0,
            FlagEnableMotor = 1,
            FlagMax = 2,
        }
    }
    /** A physics joint that restricts the rotation of a 3D physics body around an axis relative to another physics body.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_hingejoint3d.html  
     */
    class HingeJoint3D<Map extends NodePathMap = any> extends Joint3D<Map> {
        /** The speed with which the two bodies get pulled together when they move in different directions. */
        static readonly PARAM_BIAS = 0
        
        /** The maximum rotation. Only active if [member angular_limit/enable] is `true`. */
        static readonly PARAM_LIMIT_UPPER = 1
        
        /** The minimum rotation. Only active if [member angular_limit/enable] is `true`. */
        static readonly PARAM_LIMIT_LOWER = 2
        
        /** The speed with which the rotation across the axis perpendicular to the hinge gets corrected. */
        static readonly PARAM_LIMIT_BIAS = 3
        static readonly PARAM_LIMIT_SOFTNESS = 4
        
        /** The lower this value, the more the rotation gets slowed down. */
        static readonly PARAM_LIMIT_RELAXATION = 5
        
        /** Target speed for the motor. */
        static readonly PARAM_MOTOR_TARGET_VELOCITY = 6
        
        /** Maximum acceleration for the motor. */
        static readonly PARAM_MOTOR_MAX_IMPULSE = 7
        
        /** Represents the size of the [enum Param] enum. */
        static readonly PARAM_MAX = 8
        
        /** If `true`, the hinges maximum and minimum rotation, defined by [member angular_limit/lower] and [member angular_limit/upper] has effects. */
        static readonly FLAG_USE_LIMIT = 0
        
        /** When activated, a motor turns the hinge. */
        static readonly FLAG_ENABLE_MOTOR = 1
        
        /** Represents the size of the [enum Flag] enum. */
        static readonly FLAG_MAX = 2
        constructor(identifier?: any)
        
        /** Sets the value of the specified parameter. */
        setParam(param: HingeJoint3D.Param, value: float64): void
        
        /** Returns the value of the specified parameter. */
        getParam(param: HingeJoint3D.Param): float64
        
        /** If `true`, enables the specified flag. */
        setFlag(flag: HingeJoint3D.Flag, enabled: boolean): void
        
        /** Returns the value of the specified flag. */
        getFlag(flag: HingeJoint3D.Flag): boolean
        
        /** The speed with which the two bodies get pulled together when they move in different directions. */
        get "params/bias"(): float64
        set "params/bias"(value: float64)
        
        /** If `true`, the hinges maximum and minimum rotation, defined by [member angular_limit/lower] and [member angular_limit/upper] has effects. */
        get "angularLimit/enable"(): boolean
        set "angularLimit/enable"(value: boolean)
        
        /** The maximum rotation. Only active if [member angular_limit/enable] is `true`. */
        get "angularLimit/upper"(): float64
        set "angularLimit/upper"(value: float64)
        
        /** The minimum rotation. Only active if [member angular_limit/enable] is `true`. */
        get "angularLimit/lower"(): float64
        set "angularLimit/lower"(value: float64)
        
        /** The speed with which the rotation across the axis perpendicular to the hinge gets corrected. */
        get "angularLimit/bias"(): float64
        set "angularLimit/bias"(value: float64)
        get "angularLimit/softness"(): float64
        set "angularLimit/softness"(value: float64)
        
        /** The lower this value, the more the rotation gets slowed down. */
        get "angularLimit/relaxation"(): float64
        set "angularLimit/relaxation"(value: float64)
        
        /** When activated, a motor turns the hinge. */
        get "motor/enable"(): boolean
        set "motor/enable"(value: boolean)
        
        /** Target speed for the motor. */
        get "motor/targetVelocity"(): float64
        set "motor/targetVelocity"(value: float64)
        
        /** Maximum acceleration for the motor. */
        get "motor/maxImpulse"(): float64
        set "motor/maxImpulse"(value: float64)
    }
    namespace Image {
        enum Format {
            FormatL8 = 0,
            FormatLa8 = 1,
            FormatR8 = 2,
            FormatRg8 = 3,
            FormatRgb8 = 4,
            FormatRgba8 = 5,
            FormatRgba4444 = 6,
            FormatRgb565 = 7,
            FormatRf = 8,
            FormatRgf = 9,
            FormatRgbf = 10,
            FormatRgbaf = 11,
            FormatRh = 12,
            FormatRgh = 13,
            FormatRgbh = 14,
            FormatRgbah = 15,
            FormatRgbe9995 = 16,
            FormatDxt1 = 17,
            FormatDxt3 = 18,
            FormatDxt5 = 19,
            FormatRgtcR = 20,
            FormatRgtcRg = 21,
            FormatBptcRgba = 22,
            FormatBptcRgbf = 23,
            FormatBptcRgbfu = 24,
            FormatEtc = 25,
            FormatEtc2R11 = 26,
            FormatEtc2R11S = 27,
            FormatEtc2Rg11 = 28,
            FormatEtc2Rg11S = 29,
            FormatEtc2Rgb8 = 30,
            FormatEtc2Rgba8 = 31,
            FormatEtc2Rgb8A1 = 32,
            FormatEtc2RaAsRg = 33,
            FormatDxt5RaAsRg = 34,
            FormatAstc4X4 = 35,
            FormatAstc4X4Hdr = 36,
            FormatAstc8X8 = 37,
            FormatAstc8X8Hdr = 38,
            FormatMax = 39,
        }
        enum Interpolation {
            InterpolateNearest = 0,
            InterpolateBilinear = 1,
            InterpolateCubic = 2,
            InterpolateTrilinear = 3,
            InterpolateLanczos = 4,
        }
        enum AlphaMode {
            AlphaNone = 0,
            AlphaBit = 1,
            AlphaBlend = 2,
        }
        enum CompressMode {
            CompressS3Tc = 0,
            CompressEtc = 1,
            CompressEtc2 = 2,
            CompressBptc = 3,
            CompressAstc = 4,
            CompressMax = 5,
        }
        enum UsedChannels {
            UsedChannelsL = 0,
            UsedChannelsLa = 1,
            UsedChannelsR = 2,
            UsedChannelsRg = 3,
            UsedChannelsRgb = 4,
            UsedChannelsRgba = 5,
        }
        enum CompressSource {
            CompressSourceGeneric = 0,
            CompressSourceSrgb = 1,
            CompressSourceNormal = 2,
        }
        enum AstcFormat {
            AstcFormat4X4 = 0,
            AstcFormat8X8 = 1,
        }
    }
    /** Image datatype.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_image.html  
     */
    class Image extends Resource {
        /** The maximal width allowed for [Image] resources. */
        static readonly MAX_WIDTH = 16777216
        
        /** The maximal height allowed for [Image] resources. */
        static readonly MAX_HEIGHT = 16777216
        
        /** Texture format with a single 8-bit depth representing luminance. */
        static readonly FORMAT_L8 = 0
        
        /** OpenGL texture format with two values, luminance and alpha each stored with 8 bits. */
        static readonly FORMAT_LA8 = 1
        
        /** OpenGL texture format `RED` with a single component and a bitdepth of 8. */
        static readonly FORMAT_R8 = 2
        
        /** OpenGL texture format `RG` with two components and a bitdepth of 8 for each. */
        static readonly FORMAT_RG8 = 3
        
        /** OpenGL texture format `RGB` with three components, each with a bitdepth of 8.  
         *      
         *  **Note:** When creating an [ImageTexture], an sRGB to linear color space conversion is performed.  
         */
        static readonly FORMAT_RGB8 = 4
        
        /** OpenGL texture format `RGBA` with four components, each with a bitdepth of 8.  
         *      
         *  **Note:** When creating an [ImageTexture], an sRGB to linear color space conversion is performed.  
         */
        static readonly FORMAT_RGBA8 = 5
        
        /** OpenGL texture format `RGBA` with four components, each with a bitdepth of 4. */
        static readonly FORMAT_RGBA4444 = 6
        
        /** OpenGL texture format `RGB` with three components. Red and blue have a bitdepth of 5, and green has a bitdepth of 6. */
        static readonly FORMAT_RGB565 = 7
        
        /** OpenGL texture format `GL_R32F` where there's one component, a 32-bit floating-point value. */
        static readonly FORMAT_RF = 8
        
        /** OpenGL texture format `GL_RG32F` where there are two components, each a 32-bit floating-point values. */
        static readonly FORMAT_RGF = 9
        
        /** OpenGL texture format `GL_RGB32F` where there are three components, each a 32-bit floating-point values. */
        static readonly FORMAT_RGBF = 10
        
        /** OpenGL texture format `GL_RGBA32F` where there are four components, each a 32-bit floating-point values. */
        static readonly FORMAT_RGBAF = 11
        
        /** OpenGL texture format `GL_R16F` where there's one component, a 16-bit "half-precision" floating-point value. */
        static readonly FORMAT_RH = 12
        
        /** OpenGL texture format `GL_RG16F` where there are two components, each a 16-bit "half-precision" floating-point value. */
        static readonly FORMAT_RGH = 13
        
        /** OpenGL texture format `GL_RGB16F` where there are three components, each a 16-bit "half-precision" floating-point value. */
        static readonly FORMAT_RGBH = 14
        
        /** OpenGL texture format `GL_RGBA16F` where there are four components, each a 16-bit "half-precision" floating-point value. */
        static readonly FORMAT_RGBAH = 15
        
        /** A special OpenGL texture format where the three color components have 9 bits of precision and all three share a single 5-bit exponent. */
        static readonly FORMAT_RGBE9995 = 16
        
        /** The [url=https://en.wikipedia.org/wiki/S3_Texture_Compression]S3TC[/url] texture format that uses Block Compression 1, and is the smallest variation of S3TC, only providing 1 bit of alpha and color data being premultiplied with alpha.  
         *      
         *  **Note:** When creating an [ImageTexture], an sRGB to linear color space conversion is performed.  
         */
        static readonly FORMAT_DXT1 = 17
        
        /** The [url=https://en.wikipedia.org/wiki/S3_Texture_Compression]S3TC[/url] texture format that uses Block Compression 2, and color data is interpreted as not having been premultiplied by alpha. Well suited for images with sharp alpha transitions between translucent and opaque areas.  
         *      
         *  **Note:** When creating an [ImageTexture], an sRGB to linear color space conversion is performed.  
         */
        static readonly FORMAT_DXT3 = 18
        
        /** The [url=https://en.wikipedia.org/wiki/S3_Texture_Compression]S3TC[/url] texture format also known as Block Compression 3 or BC3 that contains 64 bits of alpha channel data followed by 64 bits of DXT1-encoded color data. Color data is not premultiplied by alpha, same as DXT3. DXT5 generally produces superior results for transparent gradients compared to DXT3.  
         *      
         *  **Note:** When creating an [ImageTexture], an sRGB to linear color space conversion is performed.  
         */
        static readonly FORMAT_DXT5 = 19
        
        /** Texture format that uses [url=https://www.khronos.org/opengl/wiki/Red_Green_Texture_Compression]Red Green Texture Compression[/url], normalizing the red channel data using the same compression algorithm that DXT5 uses for the alpha channel. */
        static readonly FORMAT_RGTC_R = 20
        
        /** Texture format that uses [url=https://www.khronos.org/opengl/wiki/Red_Green_Texture_Compression]Red Green Texture Compression[/url], normalizing the red and green channel data using the same compression algorithm that DXT5 uses for the alpha channel. */
        static readonly FORMAT_RGTC_RG = 21
        
        /** Texture format that uses [url=https://www.khronos.org/opengl/wiki/BPTC_Texture_Compression]BPTC[/url] compression with unsigned normalized RGBA components.  
         *      
         *  **Note:** When creating an [ImageTexture], an sRGB to linear color space conversion is performed.  
         */
        static readonly FORMAT_BPTC_RGBA = 22
        
        /** Texture format that uses [url=https://www.khronos.org/opengl/wiki/BPTC_Texture_Compression]BPTC[/url] compression with signed floating-point RGB components. */
        static readonly FORMAT_BPTC_RGBF = 23
        
        /** Texture format that uses [url=https://www.khronos.org/opengl/wiki/BPTC_Texture_Compression]BPTC[/url] compression with unsigned floating-point RGB components. */
        static readonly FORMAT_BPTC_RGBFU = 24
        
        /** [url=https://en.wikipedia.org/wiki/Ericsson_Texture_Compression#ETC1]Ericsson Texture Compression format 1[/url], also referred to as "ETC1", and is part of the OpenGL ES graphics standard. This format cannot store an alpha channel. */
        static readonly FORMAT_ETC = 25
        
        /** [url=https://en.wikipedia.org/wiki/Ericsson_Texture_Compression#ETC2_and_EAC]Ericsson Texture Compression format 2[/url] (`R11_EAC` variant), which provides one channel of unsigned data. */
        static readonly FORMAT_ETC2_R11 = 26
        
        /** [url=https://en.wikipedia.org/wiki/Ericsson_Texture_Compression#ETC2_and_EAC]Ericsson Texture Compression format 2[/url] (`SIGNED_R11_EAC` variant), which provides one channel of signed data. */
        static readonly FORMAT_ETC2_R11S = 27
        
        /** [url=https://en.wikipedia.org/wiki/Ericsson_Texture_Compression#ETC2_and_EAC]Ericsson Texture Compression format 2[/url] (`RG11_EAC` variant), which provides two channels of unsigned data. */
        static readonly FORMAT_ETC2_RG11 = 28
        
        /** [url=https://en.wikipedia.org/wiki/Ericsson_Texture_Compression#ETC2_and_EAC]Ericsson Texture Compression format 2[/url] (`SIGNED_RG11_EAC` variant), which provides two channels of signed data. */
        static readonly FORMAT_ETC2_RG11S = 29
        
        /** [url=https://en.wikipedia.org/wiki/Ericsson_Texture_Compression#ETC2_and_EAC]Ericsson Texture Compression format 2[/url] (`RGB8` variant), which is a follow-up of ETC1 and compresses RGB888 data.  
         *      
         *  **Note:** When creating an [ImageTexture], an sRGB to linear color space conversion is performed.  
         */
        static readonly FORMAT_ETC2_RGB8 = 30
        
        /** [url=https://en.wikipedia.org/wiki/Ericsson_Texture_Compression#ETC2_and_EAC]Ericsson Texture Compression format 2[/url] (`RGBA8`variant), which compresses RGBA8888 data with full alpha support.  
         *      
         *  **Note:** When creating an [ImageTexture], an sRGB to linear color space conversion is performed.  
         */
        static readonly FORMAT_ETC2_RGBA8 = 31
        
        /** [url=https://en.wikipedia.org/wiki/Ericsson_Texture_Compression#ETC2_and_EAC]Ericsson Texture Compression format 2[/url] (`RGB8_PUNCHTHROUGH_ALPHA1` variant), which compresses RGBA data to make alpha either fully transparent or fully opaque.  
         *      
         *  **Note:** When creating an [ImageTexture], an sRGB to linear color space conversion is performed.  
         */
        static readonly FORMAT_ETC2_RGB8A1 = 32
        
        /** [url=https://en.wikipedia.org/wiki/Ericsson_Texture_Compression#ETC2_and_EAC]Ericsson Texture Compression format 2[/url] (`RGBA8` variant), which compresses RA data and interprets it as two channels (red and green). See also [constant FORMAT_ETC2_RGBA8]. */
        static readonly FORMAT_ETC2_RA_AS_RG = 33
        
        /** The [url=https://en.wikipedia.org/wiki/S3_Texture_Compression]S3TC[/url] texture format also known as Block Compression 3 or BC3, which compresses RA data and interprets it as two channels (red and green). See also [constant FORMAT_DXT5]. */
        static readonly FORMAT_DXT5_RA_AS_RG = 34
        
        /** [url=https://en.wikipedia.org/wiki/Adaptive_scalable_texture_compression]Adaptive Scalable Texture Compression[/url]. This implements the 4×4 (high quality) mode. */
        static readonly FORMAT_ASTC_4x4 = 35
        
        /** Same format as [constant FORMAT_ASTC_4x4], but with the hint to let the GPU know it is used for HDR. */
        static readonly FORMAT_ASTC_4x4_HDR = 36
        
        /** [url=https://en.wikipedia.org/wiki/Adaptive_scalable_texture_compression]Adaptive Scalable Texture Compression[/url]. This implements the 8×8 (low quality) mode. */
        static readonly FORMAT_ASTC_8x8 = 37
        
        /** Same format as [constant FORMAT_ASTC_8x8], but with the hint to let the GPU know it is used for HDR. */
        static readonly FORMAT_ASTC_8x8_HDR = 38
        
        /** Represents the size of the [enum Format] enum. */
        static readonly FORMAT_MAX = 39
        
        /** Performs nearest-neighbor interpolation. If the image is resized, it will be pixelated. */
        static readonly INTERPOLATE_NEAREST = 0
        
        /** Performs bilinear interpolation. If the image is resized, it will be blurry. This mode is faster than [constant INTERPOLATE_CUBIC], but it results in lower quality. */
        static readonly INTERPOLATE_BILINEAR = 1
        
        /** Performs cubic interpolation. If the image is resized, it will be blurry. This mode often gives better results compared to [constant INTERPOLATE_BILINEAR], at the cost of being slower. */
        static readonly INTERPOLATE_CUBIC = 2
        
        /** Performs bilinear separately on the two most-suited mipmap levels, then linearly interpolates between them.  
         *  It's slower than [constant INTERPOLATE_BILINEAR], but produces higher-quality results with far fewer aliasing artifacts.  
         *  If the image does not have mipmaps, they will be generated and used internally, but no mipmaps will be generated on the resulting image.  
         *      
         *  **Note:** If you intend to scale multiple copies of the original image, it's better to call [method generate_mipmaps]] on it in advance, to avoid wasting processing power in generating them again and again.  
         *  On the other hand, if the image already has mipmaps, they will be used, and a new set will be generated for the resulting image.  
         */
        static readonly INTERPOLATE_TRILINEAR = 3
        
        /** Performs Lanczos interpolation. This is the slowest image resizing mode, but it typically gives the best results, especially when downscaling images. */
        static readonly INTERPOLATE_LANCZOS = 4
        
        /** Image does not have alpha. */
        static readonly ALPHA_NONE = 0
        
        /** Image stores alpha in a single bit. */
        static readonly ALPHA_BIT = 1
        
        /** Image uses alpha. */
        static readonly ALPHA_BLEND = 2
        
        /** Use S3TC compression. */
        static readonly COMPRESS_S3TC = 0
        
        /** Use ETC compression. */
        static readonly COMPRESS_ETC = 1
        
        /** Use ETC2 compression. */
        static readonly COMPRESS_ETC2 = 2
        
        /** Use BPTC compression. */
        static readonly COMPRESS_BPTC = 3
        
        /** Use ASTC compression. */
        static readonly COMPRESS_ASTC = 4
        
        /** Represents the size of the [enum CompressMode] enum. */
        static readonly COMPRESS_MAX = 5
        
        /** The image only uses one channel for luminance (grayscale). */
        static readonly USED_CHANNELS_L = 0
        
        /** The image uses two channels for luminance and alpha, respectively. */
        static readonly USED_CHANNELS_LA = 1
        
        /** The image only uses the red channel. */
        static readonly USED_CHANNELS_R = 2
        
        /** The image uses two channels for red and green. */
        static readonly USED_CHANNELS_RG = 3
        
        /** The image uses three channels for red, green, and blue. */
        static readonly USED_CHANNELS_RGB = 4
        
        /** The image uses four channels for red, green, blue, and alpha. */
        static readonly USED_CHANNELS_RGBA = 5
        
        /** Source texture (before compression) is a regular texture. Default for all textures. */
        static readonly COMPRESS_SOURCE_GENERIC = 0
        
        /** Source texture (before compression) is in sRGB space. */
        static readonly COMPRESS_SOURCE_SRGB = 1
        
        /** Source texture (before compression) is a normal texture (e.g. it can be compressed into two channels). */
        static readonly COMPRESS_SOURCE_NORMAL = 2
        
        /** Hint to indicate that the high quality 4×4 ASTC compression format should be used. */
        static readonly ASTC_FORMAT_4x4 = 0
        
        /** Hint to indicate that the low quality 8×8 ASTC compression format should be used. */
        static readonly ASTC_FORMAT_8x8 = 1
        constructor(identifier?: any)
        
        /** Returns the image's width. */
        getWidth(): int64
        
        /** Returns the image's height. */
        getHeight(): int64
        
        /** Returns the image's size (width and height). */
        getSize(): Vector2I
        
        /** Returns `true` if the image has generated mipmaps. */
        hasMipmaps(): boolean
        
        /** Returns the image's format. See [enum Format] constants. */
        getFormat(): Image.Format
        
        /** Returns a copy of the image's raw data. */
        getData(): PackedByteArray
        
        /** Returns size (in bytes) of the image's raw data. */
        getDataSize(): int64
        
        /** Converts the image's format. See [enum Format] constants. */
        convert(format: Image.Format): void
        
        /** Returns the number of mipmap levels or 0 if the image has no mipmaps. The largest main level image is not counted as a mipmap level by this method, so if you want to include it you can add 1 to this count. */
        getMipmapCount(): int64
        
        /** Returns the offset where the image's mipmap with index [param mipmap] is stored in the [member data] dictionary. */
        getMipmapOffset(mipmap: int64): int64
        
        /** Resizes the image to the nearest power of 2 for the width and height. If [param square] is `true`, sets width and height to be the same. New pixels are calculated using the [param interpolation] mode defined via [enum Interpolation] constants. */
        resizeToPo2(square?: boolean /* = false */, interpolation?: Image.Interpolation /* = 1 */): void
        
        /** Resizes the image to the given [param width] and [param height]. New pixels are calculated using the [param interpolation] mode defined via [enum Interpolation] constants. */
        resize(width: int64, height: int64, interpolation?: Image.Interpolation /* = 1 */): void
        
        /** Shrinks the image by a factor of 2 on each axis (this divides the pixel count by 4). */
        shrinkX2(): void
        
        /** Crops the image to the given [param width] and [param height]. If the specified size is larger than the current size, the extra area is filled with black pixels. */
        crop(width: int64, height: int64): void
        
        /** Flips the image horizontally. */
        flipX(): void
        
        /** Flips the image vertically. */
        flipY(): void
        
        /** Generates mipmaps for the image. Mipmaps are precalculated lower-resolution copies of the image that are automatically used if the image needs to be scaled down when rendered. They help improve image quality and performance when rendering. This method returns an error if the image is compressed, in a custom format, or if the image's width/height is `0`. Enabling [param renormalize] when generating mipmaps for normal map textures will make sure all resulting vector values are normalized.  
         *  It is possible to check if the image has mipmaps by calling [method has_mipmaps] or [method get_mipmap_count]. Calling [method generate_mipmaps] on an image that already has mipmaps will replace existing mipmaps in the image.  
         */
        generateMipmaps(renormalize?: boolean /* = false */): GError
        
        /** Removes the image's mipmaps. */
        clearMipmaps(): void
        
        /** Creates an empty image of given size and format. See [enum Format] constants. If [param use_mipmaps] is `true`, then generate mipmaps for this image. See the [method generate_mipmaps]. */
        static create(width: int64, height: int64, useMipmaps: boolean, format: Image.Format): Image
        
        /** Creates an empty image of given size and format. See [enum Format] constants. If [param use_mipmaps] is `true`, then generate mipmaps for this image. See the [method generate_mipmaps]. */
        static createEmpty(width: int64, height: int64, useMipmaps: boolean, format: Image.Format): Image
        
        /** Creates a new image of given size and format. See [enum Format] constants. Fills the image with the given raw data. If [param use_mipmaps] is `true` then loads mipmaps for this image from [param data]. See [method generate_mipmaps]. */
        static createFromData(width: int64, height: int64, useMipmaps: boolean, format: Image.Format, data: PackedByteArray | byte[] | ArrayBuffer): Image
        
        /** Overwrites data of an existing [Image]. Non-static equivalent of [method create_from_data]. */
        setData(width: int64, height: int64, useMipmaps: boolean, format: Image.Format, data: PackedByteArray | byte[] | ArrayBuffer): void
        
        /** Returns `true` if the image has no data. */
        isEmpty(): boolean
        
        /** Loads an image from file [param path]. See [url=https://docs.godotengine.org/en/latest/tutorials/assets_pipeline/importing_images.html#supported-image-formats]Supported image formats[/url] for a list of supported image formats and limitations.  
         *  **Warning:** This method should only be used in the editor or in cases when you need to load external images at run-time, such as images located at the `user://` directory, and may not work in exported projects.  
         *  See also [ImageTexture] description for usage examples.  
         */
        load(path: string): GError
        
        /** Creates a new [Image] and loads data from the specified file. */
        static loadFromFile(path: string): null | Image
        
        /** Saves the image as a PNG file to the file at [param path]. */
        savePng(path: string): GError
        
        /** Saves the image as a PNG file to a byte array. */
        savePngToBuffer(): PackedByteArray
        
        /** Saves the image as a JPEG file to [param path] with the specified [param quality] between `0.01` and `1.0` (inclusive). Higher [param quality] values result in better-looking output at the cost of larger file sizes. Recommended [param quality] values are between `0.75` and `0.90`. Even at quality `1.00`, JPEG compression remains lossy.  
         *      
         *  **Note:** JPEG does not save an alpha channel. If the [Image] contains an alpha channel, the image will still be saved, but the resulting JPEG file won't contain the alpha channel.  
         */
        saveJpg(path: string, quality?: float64 /* = 0.75 */): GError
        
        /** Saves the image as a JPEG file to a byte array with the specified [param quality] between `0.01` and `1.0` (inclusive). Higher [param quality] values result in better-looking output at the cost of larger byte array sizes (and therefore memory usage). Recommended [param quality] values are between `0.75` and `0.90`. Even at quality `1.00`, JPEG compression remains lossy.  
         *      
         *  **Note:** JPEG does not save an alpha channel. If the [Image] contains an alpha channel, the image will still be saved, but the resulting byte array won't contain the alpha channel.  
         */
        saveJpgToBuffer(quality?: float64 /* = 0.75 */): PackedByteArray
        
        /** Saves the image as an EXR file to [param path]. If [param grayscale] is `true` and the image has only one channel, it will be saved explicitly as monochrome rather than one red channel. This function will return [constant ERR_UNAVAILABLE] if Godot was compiled without the TinyEXR module.  
         *      
         *  **Note:** The TinyEXR module is disabled in non-editor builds, which means [method save_exr] will return [constant ERR_UNAVAILABLE] when it is called from an exported project.  
         */
        saveExr(path: string, grayscale?: boolean /* = false */): GError
        
        /** Saves the image as an EXR file to a byte array. If [param grayscale] is `true` and the image has only one channel, it will be saved explicitly as monochrome rather than one red channel. This function will return an empty byte array if Godot was compiled without the TinyEXR module.  
         *      
         *  **Note:** The TinyEXR module is disabled in non-editor builds, which means [method save_exr_to_buffer] will return an empty byte array when it is called from an exported project.  
         */
        saveExrToBuffer(grayscale?: boolean /* = false */): PackedByteArray
        
        /** Saves the image as a DDS (DirectDraw Surface) file to [param path]. DDS is a container format that can store textures in various compression formats, such as DXT1, DXT5, or BC7. This function will return [constant ERR_UNAVAILABLE] if Godot was compiled without the DDS module.  
         *      
         *  **Note:** The DDS module may be disabled in certain builds, which means [method save_dds] will return [constant ERR_UNAVAILABLE] when it is called from an exported project.  
         */
        saveDds(path: string): GError
        
        /** Saves the image as a DDS (DirectDraw Surface) file to a byte array. DDS is a container format that can store textures in various compression formats, such as DXT1, DXT5, or BC7. This function will return an empty byte array if Godot was compiled without the DDS module.  
         *      
         *  **Note:** The DDS module may be disabled in certain builds, which means [method save_dds_to_buffer] will return an empty byte array when it is called from an exported project.  
         */
        saveDdsToBuffer(): PackedByteArray
        
        /** Saves the image as a WebP (Web Picture) file to the file at [param path]. By default it will save lossless. If [param lossy] is `true`, the image will be saved lossy, using the [param quality] setting between `0.0` and `1.0` (inclusive). Lossless WebP offers more efficient compression than PNG.  
         *      
         *  **Note:** The WebP format is limited to a size of 16383×16383 pixels, while PNG can save larger images.  
         */
        saveWebp(path: string, lossy?: boolean /* = false */, quality?: float64 /* = 0.75 */): GError
        
        /** Saves the image as a WebP (Web Picture) file to a byte array. By default it will save lossless. If [param lossy] is `true`, the image will be saved lossy, using the [param quality] setting between `0.0` and `1.0` (inclusive). Lossless WebP offers more efficient compression than PNG.  
         *      
         *  **Note:** The WebP format is limited to a size of 16383×16383 pixels, while PNG can save larger images.  
         */
        saveWebpToBuffer(lossy?: boolean /* = false */, quality?: float64 /* = 0.75 */): PackedByteArray
        
        /** Returns [constant ALPHA_BLEND] if the image has data for alpha values. Returns [constant ALPHA_BIT] if all the alpha values are stored in a single bit. Returns [constant ALPHA_NONE] if no data for alpha values is found. */
        detectAlpha(): Image.AlphaMode
        
        /** Returns `true` if all the image's pixels have an alpha value of 0. Returns `false` if any pixel has an alpha value higher than 0. */
        isInvisible(): boolean
        
        /** Returns the color channels used by this image, as one of the [enum UsedChannels] constants. If the image is compressed, the original [param source] must be specified. */
        detectUsedChannels(source?: Image.CompressSource /* = 0 */): Image.UsedChannels
        
        /** Compresses the image to use less memory. Can not directly access pixel data while the image is compressed. Returns error if the chosen compression mode is not available.  
         *  The [param source] parameter helps to pick the best compression method for DXT and ETC2 formats. It is ignored for ASTC compression.  
         *  For ASTC compression, the [param astc_format] parameter must be supplied.  
         */
        compress(mode: Image.CompressMode, source?: Image.CompressSource /* = 0 */, astcFormat?: Image.AstcFormat /* = 0 */): GError
        
        /** Compresses the image to use less memory. Can not directly access pixel data while the image is compressed. Returns error if the chosen compression mode is not available.  
         *  This is an alternative to [method compress] that lets the user supply the channels used in order for the compressor to pick the best DXT and ETC2 formats. For other formats (non DXT or ETC2), this argument is ignored.  
         *  For ASTC compression, the [param astc_format] parameter must be supplied.  
         */
        compressFromChannels(mode: Image.CompressMode, channels: Image.UsedChannels, astcFormat?: Image.AstcFormat /* = 0 */): GError
        
        /** Decompresses the image if it is VRAM compressed in a supported format. Returns [constant OK] if the format is supported, otherwise [constant ERR_UNAVAILABLE].  
         *      
         *  **Note:** The following formats can be decompressed: DXT, RGTC, BPTC. The formats ETC1 and ETC2 are not supported.  
         */
        decompress(): GError
        
        /** Returns `true` if the image is compressed. */
        isCompressed(): boolean
        
        /** Rotates the image in the specified [param direction] by `90` degrees. The width and height of the image must be greater than `1`. If the width and height are not equal, the image will be resized. */
        rotate90(direction: ClockDirection): void
        
        /** Rotates the image by `180` degrees. The width and height of the image must be greater than `1`. */
        rotate180(): void
        
        /** Blends low-alpha pixels with nearby pixels. */
        fixAlphaEdges(): void
        
        /** Multiplies color values with alpha values. Resulting color values for a pixel are `(color * alpha)/256`. See also [member CanvasItemMaterial.blend_mode]. */
        premultiplyAlpha(): void
        
        /** Converts the raw data from the sRGB colorspace to a linear scale. Only works on images with [constant FORMAT_RGB8] or [constant FORMAT_RGBA8] formats. */
        srgbToLinear(): void
        
        /** Converts the entire image from the linear colorspace to the sRGB colorspace. Only works on images with [constant FORMAT_RGB8] or [constant FORMAT_RGBA8] formats. */
        linearToSrgb(): void
        
        /** Converts the image's data to represent coordinates on a 3D plane. This is used when the image represents a normal map. A normal map can add lots of detail to a 3D surface without increasing the polygon count. */
        normalMapToXy(): void
        
        /** Converts a standard RGBE (Red Green Blue Exponent) image to an sRGB image. */
        rgbeToSrgb(): null | Image
        
        /** Converts a bump map to a normal map. A bump map provides a height offset per-pixel, while a normal map provides a normal direction per pixel. */
        bumpMapToNormalMap(bumpScale?: float64 /* = 1 */): void
        
        /** Compute image metrics on the current image and the compared image.  
         *  The dictionary contains `max`, `mean`, `mean_squared`, `root_mean_squared` and `peak_snr`.  
         */
        computeImageMetrics(comparedImage: Image, useLuma: boolean): GDictionary
        
        /** Copies [param src_rect] from [param src] image to this image at coordinates [param dst], clipped accordingly to both image bounds. This image and [param src] image **must** have the same format. [param src_rect] with non-positive size is treated as empty.  
         *      
         *  **Note:** The alpha channel data in [param src] will overwrite the corresponding data in this image at the target position. To blend alpha channels, use [method blend_rect] instead.  
         */
        blitRect(src: Image, srcRect: Rect2I, dst: Vector2I): void
        
        /** Blits [param src_rect] area from [param src] image to this image at the coordinates given by [param dst], clipped accordingly to both image bounds. [param src] pixel is copied onto [param dst] if the corresponding [param mask] pixel's alpha value is not 0. This image and [param src] image **must** have the same format. [param src] image and [param mask] image **must** have the same size (width and height) but they can have different formats. [param src_rect] with non-positive size is treated as empty. */
        blitRectMask(src: Image, mask: Image, srcRect: Rect2I, dst: Vector2I): void
        
        /** Alpha-blends [param src_rect] from [param src] image to this image at coordinates [param dst], clipped accordingly to both image bounds. This image and [param src] image **must** have the same format. [param src_rect] with non-positive size is treated as empty. */
        blendRect(src: Image, srcRect: Rect2I, dst: Vector2I): void
        
        /** Alpha-blends [param src_rect] from [param src] image to this image using [param mask] image at coordinates [param dst], clipped accordingly to both image bounds. Alpha channels are required for both [param src] and [param mask]. [param dst] pixels and [param src] pixels will blend if the corresponding mask pixel's alpha value is not 0. This image and [param src] image **must** have the same format. [param src] image and [param mask] image **must** have the same size (width and height) but they can have different formats. [param src_rect] with non-positive size is treated as empty. */
        blendRectMask(src: Image, mask: Image, srcRect: Rect2I, dst: Vector2I): void
        
        /** Fills the image with [param color]. */
        fill(color: Color): void
        
        /** Fills [param rect] with [param color]. */
        fillRect(rect: Rect2I, color: Color): void
        
        /** Returns a [Rect2i] enclosing the visible portion of the image, considering each pixel with a non-zero alpha channel as visible. */
        getUsedRect(): Rect2I
        
        /** Returns a new [Image] that is a copy of this [Image]'s area specified with [param region]. */
        getRegion(region: Rect2I): null | Image
        
        /** Copies [param src] image to this image. */
        copyFrom(src: Image): void
        
        /** Returns the color of the pixel at [param point].  
         *  This is the same as [method get_pixel], but with a [Vector2i] argument instead of two integer arguments.  
         */
        getPixelv(point: Vector2I): Color
        
        /** Returns the color of the pixel at `(x, y)`.  
         *  This is the same as [method get_pixelv], but with two integer arguments instead of a [Vector2i] argument.  
         */
        getPixel(x: int64, y: int64): Color
        
        /** Sets the [Color] of the pixel at [param point] to [param color].  
         *    
         *  This is the same as [method set_pixel], but with a [Vector2i] argument instead of two integer arguments.  
         */
        setPixelv(point: Vector2I, color: Color): void
        
        /** Sets the [Color] of the pixel at `(x, y)` to [param color].  
         *    
         *  This is the same as [method set_pixelv], but with a two integer arguments instead of a [Vector2i] argument.  
         */
        setPixel(x: int64, y: int64, color: Color): void
        
        /** Adjusts this image's [param brightness], [param contrast], and [param saturation] by the given values. Does not work if the image is compressed (see [method is_compressed]). */
        adjustBcs(brightness: float64, contrast: float64, saturation: float64): void
        
        /** Loads an image from the binary contents of a PNG file. */
        loadPngFromBuffer(buffer: PackedByteArray | byte[] | ArrayBuffer): GError
        
        /** Loads an image from the binary contents of a JPEG file. */
        loadJpgFromBuffer(buffer: PackedByteArray | byte[] | ArrayBuffer): GError
        
        /** Loads an image from the binary contents of a WebP file. */
        loadWebpFromBuffer(buffer: PackedByteArray | byte[] | ArrayBuffer): GError
        
        /** Loads an image from the binary contents of a TGA file.  
         *      
         *  **Note:** This method is only available in engine builds with the TGA module enabled. By default, the TGA module is enabled, but it can be disabled at build-time using the `module_tga_enabled=no` SCons option.  
         */
        loadTgaFromBuffer(buffer: PackedByteArray | byte[] | ArrayBuffer): GError
        
        /** Loads an image from the binary contents of a BMP file.  
         *      
         *  **Note:** Godot's BMP module doesn't support 16-bit per pixel images. Only 1-bit, 4-bit, 8-bit, 24-bit, and 32-bit per pixel images are supported.  
         *      
         *  **Note:** This method is only available in engine builds with the BMP module enabled. By default, the BMP module is enabled, but it can be disabled at build-time using the `module_bmp_enabled=no` SCons option.  
         */
        loadBmpFromBuffer(buffer: PackedByteArray | byte[] | ArrayBuffer): GError
        
        /** Loads an image from the binary contents of a [url=https://github.com/KhronosGroup/KTX-Software]KTX[/url] file. Unlike most image formats, KTX can store VRAM-compressed data and embed mipmaps.  
         *      
         *  **Note:** Godot's libktx implementation only supports 2D images. Cubemaps, texture arrays, and de-padding are not supported.  
         *      
         *  **Note:** This method is only available in engine builds with the KTX module enabled. By default, the KTX module is enabled, but it can be disabled at build-time using the `module_ktx_enabled=no` SCons option.  
         */
        loadKtxFromBuffer(buffer: PackedByteArray | byte[] | ArrayBuffer): GError
        
        /** Loads an image from the binary contents of a DDS file.  
         *      
         *  **Note:** This method is only available in engine builds with the DDS module enabled. By default, the DDS module is enabled, but it can be disabled at build-time using the `module_dds_enabled=no` SCons option.  
         */
        loadDdsFromBuffer(buffer: PackedByteArray | byte[] | ArrayBuffer): GError
        
        /** Loads an image from the UTF-8 binary contents of an **uncompressed** SVG file (**.svg**).  
         *      
         *  **Note:** Beware when using compressed SVG files (like **.svgz**), they need to be `decompressed` before loading.  
         *      
         *  **Note:** This method is only available in engine builds with the SVG module enabled. By default, the SVG module is enabled, but it can be disabled at build-time using the `module_svg_enabled=no` SCons option.  
         */
        loadSvgFromBuffer(buffer: PackedByteArray | byte[] | ArrayBuffer, scale?: float64 /* = 1 */): GError
        
        /** Loads an image from the string contents of an SVG file (**.svg**).  
         *      
         *  **Note:** This method is only available in engine builds with the SVG module enabled. By default, the SVG module is enabled, but it can be disabled at build-time using the `module_svg_enabled=no` SCons option.  
         */
        loadSvgFromString(svgStr: string, scale?: float64 /* = 1 */): GError
        
        /** Holds all the image's color data in a given format. See [enum Format] constants. */
        get data(): GDictionary
        set data(value: GDictionary)
    }
    namespace ImageFormatLoader {
        enum LoaderFlags {
            FlagNone = 0,
            FlagForceLinear = 1,
            FlagConvertColors = 2,
        }
    }
    /** Base class to add support for specific image formats.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_imageformatloader.html  
     */
    class ImageFormatLoader extends RefCounted {
        static readonly FLAG_NONE = 0
        static readonly FLAG_FORCE_LINEAR = 1
        static readonly FLAG_CONVERT_COLORS = 2
        constructor(identifier?: any)
    }
    /** Base class for creating [ImageFormatLoader] extensions (adding support for extra image formats).  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_imageformatloaderextension.html  
     */
    class ImageFormatLoaderExtension extends ImageFormatLoader {
        constructor(identifier?: any)
        /** Returns the list of file extensions for this image format. Files with the given extensions will be treated as image file and loaded using this class. */
        /* gdvirtual */ _getRecognizedExtensions(): PackedStringArray
        
        /** Loads the content of [param fileaccess] into the provided [param image]. */
        /* gdvirtual */ _loadImage(image: Image, fileaccess: FileAccess, flags: ImageFormatLoader.LoaderFlags, scale: float64): GError
        
        /** Add this format loader to the engine, allowing it to recognize the file extensions returned by [method _get_recognized_extensions]. */
        addFormatLoader(): void
        
        /** Remove this format loader from the engine. */
        removeFormatLoader(): void
    }
    /** A [Texture2D] based on an [Image].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_imagetexture.html  
     */
    class ImageTexture extends Texture2D {
        constructor(identifier?: any)
        /** Creates a new [ImageTexture] and initializes it by allocating and setting the data from an [Image]. */
        static createFromImage(image: Image): ImageTexture
        
        /** Returns the format of the texture, one of [enum Image.Format]. */
        getFormat(): Image.Format
        
        /** Replaces the texture's data with a new [Image]. This will re-allocate new memory for the texture.  
         *  If you want to update the image, but don't need to change its parameters (format, size), use [method update] instead for better performance.  
         */
        setImage(image: Image): void
        
        /** Replaces the texture's data with a new [Image].  
         *      
         *  **Note:** The texture has to be created using [method create_from_image] or initialized first with the [method set_image] method before it can be updated. The new image dimensions, format, and mipmaps configuration should match the existing texture's image configuration.  
         *  Use this method over [method set_image] if you need to update the texture frequently, which is faster than allocating additional memory for a new texture each time.  
         */
        update(image: Image): void
        
        /** Resizes the texture to the specified dimensions. */
        setSizeOverride(size: Vector2I): void
    }
    /** Texture with 3 dimensions.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_imagetexture3d.html  
     */
    class ImageTexture3D extends Texture3D {
        constructor(identifier?: any)
        /** Creates the [ImageTexture3D] with specified [param width], [param height], and [param depth]. See [enum Image.Format] for [param format] options. If [param use_mipmaps] is `true`, then generate mipmaps for the [ImageTexture3D]. */
        create(format: Image.Format, width: int64, height: int64, depth: int64, useMipmaps: boolean, data: GArray): GError
        
        /** Replaces the texture's existing data with the layers specified in [param data]. The size of [param data] must match the parameters that were used for [method create]. In other words, the texture cannot be resized or have its format changed by calling [method update]. */
        update(data: GArray): void
        get _images(): GArray
        set _images(value: GArray)
    }
    /** Base class for texture types which contain the data of multiple [ImageTexture]s. Each image is of the same size and format.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_imagetexturelayered.html  
     */
    class ImageTextureLayered extends TextureLayered {
        constructor(identifier?: any)
        /** Creates an [ImageTextureLayered] from an array of [Image]s. See [method Image.create] for the expected data format. The first image decides the width, height, image format and mipmapping setting. The other images  *must*  have the same width, height, image format and mipmapping setting.  
         *  Each [Image] represents one `layer`.  
         *    
         */
        createFromImages(images: GArray): GError
        
        /** Replaces the existing [Image] data at the given [param layer] with this new image.  
         *  The given [Image] must have the same width, height, image format, and mipmapping flag as the rest of the referenced images.  
         *  If the image format is unsupported, it will be decompressed and converted to a similar and supported [enum Image.Format].  
         *  The update is immediate: it's synchronized with drawing.  
         */
        updateLayer(image: Image, layer: int64): void
        get _images(): GArray
        set _images(value: GArray)
    }
    /** Mesh optimized for creating geometry manually.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_immediatemesh.html  
     */
    class ImmediateMesh extends Mesh {
        constructor(identifier?: any)
        /** Begin a new surface. */
        surfaceBegin(primitive: Mesh.PrimitiveType, material?: Material /* = undefined */): void
        
        /** Set the color attribute that will be pushed with the next vertex. */
        surfaceSetColor(color: Color): void
        
        /** Set the normal attribute that will be pushed with the next vertex. */
        surfaceSetNormal(normal: Vector3): void
        
        /** Set the tangent attribute that will be pushed with the next vertex. */
        surfaceSetTangent(tangent: Plane): void
        
        /** Set the UV attribute that will be pushed with the next vertex. */
        surfaceSetUV(uV: Vector2): void
        
        /** Set the UV2 attribute that will be pushed with the next vertex. */
        surfaceSetUV2(uV2: Vector2): void
        
        /** Add a 3D vertex using the current attributes previously set. */
        surfaceAddVertex(vertex: Vector3): void
        
        /** Add a 2D vertex using the current attributes previously set. */
        surfaceAddVertex2D(vertex: Vector2): void
        
        /** End and commit current surface. Note that surface being created will not be visible until this function is called. */
        surfaceEnd(): void
        
        /** Clear all surfaces. */
        clearSurfaces(): void
    }
    /** A [Resource] that contains vertex array-based geometry during the import process.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_importermesh.html  
     */
    class ImporterMesh extends Resource {
        constructor(identifier?: any)
        /** Adds name for a blend shape that will be added with [method add_surface]. Must be called before surface is added. */
        addBlendShape(name: string): void
        
        /** Returns the number of blend shapes that the mesh holds. */
        getBlendShapeCount(): int64
        
        /** Returns the name of the blend shape at this index. */
        getBlendShapeName(blendShapeIdx: int64): string
        
        /** Sets the blend shape mode to one of [enum Mesh.BlendShapeMode]. */
        setBlendShapeMode(mode: Mesh.BlendShapeMode): void
        
        /** Returns the blend shape mode for this Mesh. */
        getBlendShapeMode(): Mesh.BlendShapeMode
        
        /** Creates a new surface. [method Mesh.get_surface_count] will become the `surf_idx` for this new surface.  
         *  Surfaces are created to be rendered using a [param primitive], which may be any of the values defined in [enum Mesh.PrimitiveType].  
         *  The [param arrays] argument is an array of arrays. Each of the [constant Mesh.ARRAY_MAX] elements contains an array with some of the mesh data for this surface as described by the corresponding member of [enum Mesh.ArrayType] or `null` if it is not used by the surface. For example, `arrays[0]` is the array of vertices. That first vertex sub-array is always required; the others are optional. Adding an index array puts this surface into "index mode" where the vertex and other arrays become the sources of data and the index array defines the vertex order. All sub-arrays must have the same length as the vertex array (or be an exact multiple of the vertex array's length, when multiple elements of a sub-array correspond to a single vertex) or be empty, except for [constant Mesh.ARRAY_INDEX] if it is used.  
         *  The [param blend_shapes] argument is an array of vertex data for each blend shape. Each element is an array of the same structure as [param arrays], but [constant Mesh.ARRAY_VERTEX], [constant Mesh.ARRAY_NORMAL], and [constant Mesh.ARRAY_TANGENT] are set if and only if they are set in [param arrays] and all other entries are `null`.  
         *  The [param lods] argument is a dictionary with [float] keys and [PackedInt32Array] values. Each entry in the dictionary represents an LOD level of the surface, where the value is the [constant Mesh.ARRAY_INDEX] array to use for the LOD level and the key is roughly proportional to the distance at which the LOD stats being used. I.e., increasing the key of an LOD also increases the distance that the objects has to be from the camera before the LOD is used.  
         *  The [param flags] argument is the bitwise OR of, as required: One value of [enum Mesh.ArrayCustomFormat] left shifted by `ARRAY_FORMAT_CUSTOMn_SHIFT` for each custom channel in use, [constant Mesh.ARRAY_FLAG_USE_DYNAMIC_UPDATE], [constant Mesh.ARRAY_FLAG_USE_8_BONE_WEIGHTS], or [constant Mesh.ARRAY_FLAG_USES_EMPTY_VERTEX_ARRAY].  
         *      
         *  **Note:** When using indices, it is recommended to only use points, lines, or triangles.  
         */
        addSurface(primitive: Mesh.PrimitiveType, arrays: GArray, blendShapes?: GArray /* = [] */, lods?: GDictionary /* = new GDictionary() */, material?: Material /* = undefined */, name?: string /* = '' */, flags?: int64 /* = 0 */): void
        
        /** Returns the number of surfaces that the mesh holds. */
        getSurfaceCount(): int64
        
        /** Returns the primitive type of the requested surface (see [method add_surface]). */
        getSurfacePrimitiveType(surfaceIdx: int64): Mesh.PrimitiveType
        
        /** Gets the name assigned to this surface. */
        getSurfaceName(surfaceIdx: int64): string
        
        /** Returns the arrays for the vertices, normals, UVs, etc. that make up the requested surface. See [method add_surface]. */
        getSurfaceArrays(surfaceIdx: int64): GArray
        
        /** Returns a single set of blend shape arrays for the requested blend shape index for a surface. */
        getSurfaceBlendShapeArrays(surfaceIdx: int64, blendShapeIdx: int64): GArray
        
        /** Returns the number of lods that the mesh holds on a given surface. */
        getSurfaceLodCount(surfaceIdx: int64): int64
        
        /** Returns the screen ratio which activates a lod for a surface. */
        getSurfaceLodSize(surfaceIdx: int64, lodIdx: int64): float64
        
        /** Returns the index buffer of a lod for a surface. */
        getSurfaceLodIndices(surfaceIdx: int64, lodIdx: int64): PackedInt32Array
        
        /** Returns a [Material] in a given surface. Surface is rendered using this material. */
        getSurfaceMaterial(surfaceIdx: int64): null | Material
        
        /** Returns the format of the surface that the mesh holds. */
        getSurfaceFormat(surfaceIdx: int64): int64
        
        /** Sets a name for a given surface. */
        setSurfaceName(surfaceIdx: int64, name: string): void
        
        /** Sets a [Material] for a given surface. Surface will be rendered using this material. */
        setSurfaceMaterial(surfaceIdx: int64, material: Material): void
        
        /** Generates all lods for this ImporterMesh.  
         *  [param normal_merge_angle] is in degrees and used in the same way as the importer settings in `lods`.  
         *  [param normal_split_angle] is not used and only remains for compatibility with older versions of the API.  
         *  The number of generated lods can be accessed using [method get_surface_lod_count], and each LOD is available in [method get_surface_lod_size] and [method get_surface_lod_indices].  
         *  [param bone_transform_array] is an [Array] which can be either empty or contain [Transform3D]s which, for each of the mesh's bone IDs, will apply mesh skinning when generating the LOD mesh variations. This is usually used to account for discrepancies in scale between the mesh itself and its skinning data.  
         */
        generateLods(normalMergeAngle: float64, normalSplitAngle: float64, boneTransformArray: GArray): void
        
        /** Returns the mesh data represented by this [ImporterMesh] as a usable [ArrayMesh].  
         *  This method caches the returned mesh, and subsequent calls will return the cached data until [method clear] is called.  
         *  If not yet cached and [param base_mesh] is provided, [param base_mesh] will be used and mutated.  
         */
        getMesh(baseMesh?: ArrayMesh /* = undefined */): null | ArrayMesh
        
        /** Removes all surfaces and blend shapes from this [ImporterMesh]. */
        clear(): void
        
        /** Sets the size hint of this mesh for lightmap-unwrapping in UV-space. */
        setLightmapSizeHint(size: Vector2I): void
        
        /** Returns the size hint of this mesh for lightmap-unwrapping in UV-space. */
        getLightmapSizeHint(): Vector2I
        get _data(): GDictionary
        set _data(value: GDictionary)
    }
    /** @link https://docs.godotengine.org/en/latest/classes/class_importermeshinstance3d.html */
    class ImporterMeshInstance3D<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        get mesh(): null | ImporterMesh
        set mesh(value: null | ImporterMesh)
        get skin(): null | Skin
        set skin(value: null | Skin)
        get skeletonPath(): NodePath
        set skeletonPath(value: NodePath | string)
        get layerMask(): int64
        set layerMask(value: int64)
        get castShadow(): int64
        set castShadow(value: int64)
        get visibilityRangeBegin(): float64
        set visibilityRangeBegin(value: float64)
        get visibilityRangeBeginMargin(): float64
        set visibilityRangeBeginMargin(value: float64)
        get visibilityRangeEnd(): float64
        set visibilityRangeEnd(value: float64)
        get visibilityRangeEndMargin(): float64
        set visibilityRangeEndMargin(value: float64)
        get visibilityRangeFadeMode(): int64
        set visibilityRangeFadeMode(value: int64)
    }
    /** Abstract base class for input events.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_inputevent.html  
     */
    class InputEvent extends Resource {
        /** Device ID used for emulated mouse input from a touchscreen, or for emulated touch input from a mouse. This can be used to distinguish emulated mouse input from physical mouse input, or emulated touch input from physical touch input. */
        static readonly DEVICE_ID_EMULATION = -1
        constructor(identifier?: any)
        
        /** Returns `true` if this input event matches a pre-defined action of any type.  
         *  If [param exact_match] is `false`, it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.  
         */
        isAction(action: InputActionName, exactMatch?: boolean /* = false */): boolean
        
        /** Returns `true` if the given action is being pressed (and is not an echo event for [InputEventKey] events, unless [param allow_echo] is `true`). Not relevant for events of type [InputEventMouseMotion] or [InputEventScreenDrag].  
         *  If [param exact_match] is `false`, it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.  
         *      
         *  **Note:** Due to keyboard ghosting, [method is_action_pressed] may return `false` even if one of the action's keys is pressed. See [url=https://docs.godotengine.org/en/latest/tutorials/inputs/input_examples.html#keyboard-events]Input examples[/url] in the documentation for more information.  
         */
        isActionPressed(action: InputActionName, allowEcho?: boolean /* = false */, exactMatch?: boolean /* = false */): boolean
        
        /** Returns `true` if the given action is released (i.e. not pressed). Not relevant for events of type [InputEventMouseMotion] or [InputEventScreenDrag].  
         *  If [param exact_match] is `false`, it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.  
         */
        isActionReleased(action: InputActionName, exactMatch?: boolean /* = false */): boolean
        
        /** Returns a value between 0.0 and 1.0 depending on the given actions' state. Useful for getting the value of events of type [InputEventJoypadMotion].  
         *  If [param exact_match] is `false`, it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.  
         */
        getActionStrength(action: InputActionName, exactMatch?: boolean /* = false */): float64
        
        /** Returns `true` if this input event has been canceled. */
        isCanceled(): boolean
        
        /** Returns `true` if this input event is pressed. Not relevant for events of type [InputEventMouseMotion] or [InputEventScreenDrag].  
         *      
         *  **Note:** Due to keyboard ghosting, [method is_pressed] may return `false` even if one of the action's keys is pressed. See [url=https://docs.godotengine.org/en/latest/tutorials/inputs/input_examples.html#keyboard-events]Input examples[/url] in the documentation for more information.  
         */
        isPressed(): boolean
        
        /** Returns `true` if this input event is released. Not relevant for events of type [InputEventMouseMotion] or [InputEventScreenDrag]. */
        isReleased(): boolean
        
        /** Returns `true` if this input event is an echo event (only for events of type [InputEventKey]). An echo event is a repeated key event sent when the user is holding down the key. Any other event type returns `false`.  
         *      
         *  **Note:** The rate at which echo events are sent is typically around 20 events per second (after holding down the key for roughly half a second). However, the key repeat delay/speed can be changed by the user or disabled entirely in the operating system settings. To ensure your project works correctly on all configurations, do not assume the user has a specific key repeat configuration in your project's behavior.  
         */
        isEcho(): boolean
        
        /** Returns a [String] representation of the event. */
        asText(): string
        
        /** Returns `true` if the specified [param event] matches this event. Only valid for action events i.e key ([InputEventKey]), button ([InputEventMouseButton] or [InputEventJoypadButton]), axis [InputEventJoypadMotion] or action ([InputEventAction]) events.  
         *  If [param exact_match] is `false`, it ignores additional input modifiers for [InputEventKey] and [InputEventMouseButton] events, and the direction for [InputEventJoypadMotion] events.  
         *      
         *  **Note:** Only considers the event configuration (such as the keyboard key or joypad axis), not state information like [method is_pressed], [method is_released], [method is_echo], or [method is_canceled].  
         */
        isMatch(event: InputEvent, exactMatch?: boolean /* = true */): boolean
        
        /** Returns `true` if this input event's type is one that can be assigned to an input action. */
        isActionType(): boolean
        
        /** Returns `true` if the given input event and this input event can be added together (only for events of type [InputEventMouseMotion]).  
         *  The given input event's position, global position and speed will be copied. The resulting `relative` is a sum of both events. Both events' modifiers have to be identical.  
         */
        accumulate(withEvent: InputEvent): boolean
        
        /** Returns a copy of the given input event which has been offset by [param local_ofs] and transformed by [param xform]. Relevant for events of type [InputEventMouseButton], [InputEventMouseMotion], [InputEventScreenTouch], [InputEventScreenDrag], [InputEventMagnifyGesture] and [InputEventPanGesture]. */
        xformedBy(xform: Transform2D, localOfs?: Vector2 /* = Vector2.ZERO */): null | InputEvent
        
        /** The event's device ID.  
         *      
         *  **Note:** [member device] can be negative for special use cases that don't refer to devices physically present on the system. See [constant DEVICE_ID_EMULATION].  
         */
        get device(): int64
        set device(value: int64)
    }
    /** An input event type for actions.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_inputeventaction.html  
     */
    class InputEventAction extends InputEvent {
        constructor(identifier?: any)
        /** The action's name. This is usually the name of an existing action in the [InputMap] which you want this custom event to match. */
        get action(): StringName
        set action(value: StringName)
        
        /** If `true`, the action's state is pressed. If `false`, the action's state is released. */
        get pressed(): boolean
        set pressed(value: boolean)
        
        /** The action's strength between 0 and 1. This value is considered as equal to 0 if pressed is `false`. The event strength allows faking analog joypad motion events, by specifying how strongly the joypad axis is bent or pressed. */
        get strength(): float64
        set strength(value: float64)
        
        /** The real event index in action this event corresponds to (from events defined for this action in the [InputMap]). If `-1`, a unique ID will be used and actions pressed with this ID will need to be released with another [InputEventAction]. */
        get eventIndex(): int64
        set eventIndex(value: int64)
    }
    /** Abstract base class for [Viewport]-based input events.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_inputeventfromwindow.html  
     */
    class InputEventFromWindow extends InputEvent {
        constructor(identifier?: any)
        /** The ID of a [Window] that received this event. */
        get windowId(): int64
        set windowId(value: int64)
    }
    /** Abstract base class for touch gestures.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_inputeventgesture.html  
     */
    class InputEventGesture extends InputEventWithModifiers {
        constructor(identifier?: any)
        /** The local gesture position relative to the [Viewport]. If used in [method Control._gui_input], the position is relative to the current [Control] that received this gesture. */
        get position(): Vector2
        set position(value: Vector2)
    }
    /** Represents a gamepad button being pressed or released.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_inputeventjoypadbutton.html  
     */
    class InputEventJoypadButton extends InputEvent {
        constructor(identifier?: any)
        /** Button identifier. One of the [enum JoyButton] button constants. */
        get buttonIndex(): int64
        set buttonIndex(value: int64)
        get pressure(): float64
        set pressure(value: float64)
        
        /** If `true`, the button's state is pressed. If `false`, the button's state is released. */
        get pressed(): boolean
        set pressed(value: boolean)
    }
    /** Represents axis motions (such as joystick or analog triggers) from a gamepad.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_inputeventjoypadmotion.html  
     */
    class InputEventJoypadMotion extends InputEvent {
        constructor(identifier?: any)
        /** Axis identifier. Use one of the [enum JoyAxis] axis constants. */
        get axis(): int64
        set axis(value: int64)
        
        /** Current position of the joystick on the given axis. The value ranges from `-1.0` to `1.0`. A value of `0` means the axis is in its resting position. */
        get axisValue(): float64
        set axisValue(value: float64)
    }
    /** Represents a key on a keyboard being pressed or released.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_inputeventkey.html  
     */
    class InputEventKey extends InputEventWithModifiers {
        constructor(identifier?: any)
        /** Returns the Latin keycode combined with modifier keys such as [kbd]Shift[/kbd] or [kbd]Alt[/kbd]. See also [InputEventWithModifiers].  
         *  To get a human-readable representation of the [InputEventKey] with modifiers, use `OS.get_keycode_string(event.get_keycode_with_modifiers())` where `event` is the [InputEventKey].  
         */
        getKeycodeWithModifiers(): Key
        
        /** Returns the physical keycode combined with modifier keys such as [kbd]Shift[/kbd] or [kbd]Alt[/kbd]. See also [InputEventWithModifiers].  
         *  To get a human-readable representation of the [InputEventKey] with modifiers, use `OS.get_keycode_string(event.get_physical_keycode_with_modifiers())` where `event` is the [InputEventKey].  
         */
        getPhysicalKeycodeWithModifiers(): Key
        
        /** Returns the localized key label combined with modifier keys such as [kbd]Shift[/kbd] or [kbd]Alt[/kbd]. See also [InputEventWithModifiers].  
         *  To get a human-readable representation of the [InputEventKey] with modifiers, use `OS.get_keycode_string(event.get_key_label_with_modifiers())` where `event` is the [InputEventKey].  
         */
        getKeyLabelWithModifiers(): Key
        
        /** Returns a [String] representation of the event's [member keycode] and modifiers. */
        asTextKeycode(): string
        
        /** Returns a [String] representation of the event's [member physical_keycode] and modifiers. */
        asTextPhysicalKeycode(): string
        
        /** Returns a [String] representation of the event's [member key_label] and modifiers. */
        asTextKeyLabel(): string
        
        /** Returns a [String] representation of the event's [member location]. This will be a blank string if the event is not specific to a location. */
        asTextLocation(): string
        
        /** If `true`, the key's state is pressed. If `false`, the key's state is released. */
        get pressed(): boolean
        set pressed(value: boolean)
        
        /** Latin label printed on the key in the current keyboard layout, which corresponds to one of the [enum Key] constants.  
         *  To get a human-readable representation of the [InputEventKey], use `OS.get_keycode_string(event.keycode)` where `event` is the [InputEventKey].  
         *  [codeblock lang=text]  
         *      +-----+ +-----+  
         *      | Q   | | Q   | - "Q" - keycode  
         *      |   Й | |  ض | - "Й" and "ض" - key_label  
         *      +-----+ +-----+  
         *  [/codeblock]  
         */
        get keycode(): int64
        set keycode(value: int64)
        
        /** Represents the physical location of a key on the 101/102-key US QWERTY keyboard, which corresponds to one of the [enum Key] constants.  
         *  To get a human-readable representation of the [InputEventKey], use [method OS.get_keycode_string] in combination with [method DisplayServer.keyboard_get_keycode_from_physical]:  
         *    
         */
        get physicalKeycode(): int64
        set physicalKeycode(value: int64)
        
        /** Represents the localized label printed on the key in the current keyboard layout, which corresponds to one of the [enum Key] constants or any valid Unicode character.  
         *  For keyboard layouts with a single label on the key, it is equivalent to [member keycode].  
         *  To get a human-readable representation of the [InputEventKey], use `OS.get_keycode_string(event.key_label)` where `event` is the [InputEventKey].  
         *  [codeblock lang=text]  
         *      +-----+ +-----+  
         *      | Q   | | Q   | - "Q" - keycode  
         *      |   Й | |  ض | - "Й" and "ض" - key_label  
         *      +-----+ +-----+  
         *  [/codeblock]  
         */
        get keyLabel(): int64
        set keyLabel(value: int64)
        
        /** The key Unicode character code (when relevant), shifted by modifier keys. Unicode character codes for composite characters and complex scripts may not be available unless IME input mode is active. See [method Window.set_ime_active] for more information. */
        get unicode(): int64
        set unicode(value: int64)
        
        /** Represents the location of a key which has both left and right versions, such as [kbd]Shift[/kbd] or [kbd]Alt[/kbd]. */
        get location(): int64
        set location(value: int64)
        
        /** If `true`, the key was already pressed before this event. An echo event is a repeated key event sent when the user is holding down the key.  
         *      
         *  **Note:** The rate at which echo events are sent is typically around 20 events per second (after holding down the key for roughly half a second). However, the key repeat delay/speed can be changed by the user or disabled entirely in the operating system settings. To ensure your project works correctly on all configurations, do not assume the user has a specific key repeat configuration in your project's behavior.  
         */
        get echo(): boolean
        set echo(value: boolean)
    }
    class InputEventMidi extends InputEvent {
        constructor(identifier?: any)
        get channel(): int64
        set channel(value: int64)
        get message(): int64
        set message(value: int64)
        get pitch(): int64
        set pitch(value: int64)
        get velocity(): int64
        set velocity(value: int64)
        get instrument(): int64
        set instrument(value: int64)
        get pressure(): int64
        set pressure(value: int64)
        get controllerNumber(): int64
        set controllerNumber(value: int64)
        get controllerValue(): int64
        set controllerValue(value: int64)
    }
    /** Represents a magnifying touch gesture.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_inputeventmagnifygesture.html  
     */
    class InputEventMagnifyGesture extends InputEventGesture {
        constructor(identifier?: any)
        /** The amount (or delta) of the event. This value is closer to `1.0` the slower the gesture is performed. */
        get factor(): float64
        set factor(value: float64)
    }
    /** Base input event type for mouse events.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_inputeventmouse.html  
     */
    class InputEventMouse extends InputEventWithModifiers {
        constructor(identifier?: any)
        /** The mouse button mask identifier, one of or a bitwise combination of the [enum MouseButton] button masks. */
        get buttonMask(): int64
        set buttonMask(value: int64)
        
        /** When received in [method Node._input] or [method Node._unhandled_input], returns the mouse's position in the [Viewport] this [Node] is in using the coordinate system of this [Viewport].  
         *  When received in [method Control._gui_input], returns the mouse's position in the [Control] using the local coordinate system of the [Control].  
         */
        get position(): Vector2
        set position(value: Vector2)
        
        /** When received in [method Node._input] or [method Node._unhandled_input], returns the mouse's position in the root [Viewport] using the coordinate system of the root [Viewport].  
         *  When received in [method Control._gui_input], returns the mouse's position in the [CanvasLayer] that the [Control] is in using the coordinate system of the [CanvasLayer].  
         */
        get globalPosition(): Vector2
        set globalPosition(value: Vector2)
    }
    /** Represents a mouse button being pressed or released.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_inputeventmousebutton.html  
     */
    class InputEventMouseButton extends InputEventMouse {
        constructor(identifier?: any)
        /** The amount (or delta) of the event. When used for high-precision scroll events, this indicates the scroll amount (vertical or horizontal). This is only supported on some platforms; the reported sensitivity varies depending on the platform. May be `0` if not supported. */
        get factor(): float64
        set factor(value: float64)
        
        /** The mouse button identifier, one of the [enum MouseButton] button or button wheel constants. */
        get buttonIndex(): int64
        set buttonIndex(value: int64)
        
        /** If `true`, the mouse button event has been canceled. */
        get canceled(): boolean
        set canceled(value: boolean)
        
        /** If `true`, the mouse button's state is pressed. If `false`, the mouse button's state is released. */
        get pressed(): boolean
        set pressed(value: boolean)
        
        /** If `true`, the mouse button's state is a double-click. */
        get doubleClick(): boolean
        set doubleClick(value: boolean)
    }
    /** Represents a mouse or a pen movement.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_inputeventmousemotion.html  
     */
    class InputEventMouseMotion extends InputEventMouse {
        constructor(identifier?: any)
        /** Represents the angles of tilt of the pen. Positive X-coordinate value indicates a tilt to the right. Positive Y-coordinate value indicates a tilt toward the user. Ranges from `-1.0` to `1.0` for both axes. */
        get tilt(): Vector2
        set tilt(value: Vector2)
        
        /** Represents the pressure the user puts on the pen. Ranges from `0.0` to `1.0`. */
        get pressure(): float64
        set pressure(value: float64)
        
        /** Returns `true` when using the eraser end of a stylus pen.  
         *      
         *  **Note:** This property is implemented on Linux, macOS and Windows.  
         */
        get penInverted(): boolean
        set penInverted(value: boolean)
        
        /** The mouse position relative to the previous position (position at the last frame).  
         *      
         *  **Note:** Since [InputEventMouseMotion] may only be emitted when the mouse moves, it is not possible to reliably detect when the mouse has stopped moving by checking this property. A separate, short timer may be necessary.  
         *      
         *  **Note:** [member relative] is automatically scaled according to the content scale factor, which is defined by the project's stretch mode settings. This means mouse sensitivity will appear different depending on resolution when using [member relative] in a script that handles mouse aiming with the [constant Input.MOUSE_MODE_CAPTURED] mouse mode. To avoid this, use [member screen_relative] instead.  
         */
        get relative(): Vector2
        set relative(value: Vector2)
        
        /** The unscaled mouse position relative to the previous position in the coordinate system of the screen (position at the last frame).  
         *      
         *  **Note:** Since [InputEventMouseMotion] may only be emitted when the mouse moves, it is not possible to reliably detect when the mouse has stopped moving by checking this property. A separate, short timer may be necessary.  
         *      
         *  **Note:** This coordinate is  *not*  scaled according to the content scale factor or calls to [method InputEvent.xformed_by]. This should be preferred over [member relative] for mouse aiming when using the [constant Input.MOUSE_MODE_CAPTURED] mouse mode, regardless of the project's stretch mode.  
         */
        get screenRelative(): Vector2
        set screenRelative(value: Vector2)
        
        /** The mouse velocity in pixels per second.  
         *      
         *  **Note:** [member velocity] is automatically scaled according to the content scale factor, which is defined by the project's stretch mode settings. That means mouse sensitivity may appear different depending on resolution.  
         *      
         *  **Note:** Use [member screen_relative] for mouse aiming using the [constant Input.MOUSE_MODE_CAPTURED] mouse mode.  
         */
        get velocity(): Vector2
        set velocity(value: Vector2)
        
        /** The unscaled mouse velocity in pixels per second in screen coordinates. This velocity is  *not*  scaled according to the content scale factor or calls to [method InputEvent.xformed_by].  
         *      
         *  **Note:** Use [member screen_relative] for mouse aiming using the [constant Input.MOUSE_MODE_CAPTURED] mouse mode.  
         */
        get screenVelocity(): Vector2
        set screenVelocity(value: Vector2)
    }
    /** Represents a panning touch gesture.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_inputeventpangesture.html  
     */
    class InputEventPanGesture extends InputEventGesture {
        constructor(identifier?: any)
        /** Panning amount since last pan event. */
        get delta(): Vector2
        set delta(value: Vector2)
    }
    /** Represents a screen drag event.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_inputeventscreendrag.html  
     */
    class InputEventScreenDrag extends InputEventFromWindow {
        constructor(identifier?: any)
        /** The drag event index in the case of a multi-drag event. */
        get index(): int64
        set index(value: int64)
        
        /** Represents the angles of tilt of the pen. Positive X-coordinate value indicates a tilt to the right. Positive Y-coordinate value indicates a tilt toward the user. Ranges from `-1.0` to `1.0` for both axes. */
        get tilt(): Vector2
        set tilt(value: Vector2)
        
        /** Represents the pressure the user puts on the pen. Ranges from `0.0` to `1.0`. */
        get pressure(): float64
        set pressure(value: float64)
        
        /** Returns `true` when using the eraser end of a stylus pen. */
        get penInverted(): boolean
        set penInverted(value: boolean)
        
        /** The drag position in the viewport the node is in, using the coordinate system of this viewport. */
        get position(): Vector2
        set position(value: Vector2)
        
        /** The drag position relative to the previous position (position at the last frame).  
         *      
         *  **Note:** [member relative] is automatically scaled according to the content scale factor, which is defined by the project's stretch mode settings. This means touch sensitivity will appear different depending on resolution when using [member relative] in a script that handles touch aiming. To avoid this, use [member screen_relative] instead.  
         */
        get relative(): Vector2
        set relative(value: Vector2)
        
        /** The unscaled drag position relative to the previous position in screen coordinates (position at the last frame). This position is  *not*  scaled according to the content scale factor or calls to [method InputEvent.xformed_by]. This should be preferred over [member relative] for touch aiming regardless of the project's stretch mode. */
        get screenRelative(): Vector2
        set screenRelative(value: Vector2)
        
        /** The drag velocity.  
         *      
         *  **Note:** [member velocity] is automatically scaled according to the content scale factor, which is defined by the project's stretch mode settings. This means touch sensitivity will appear different depending on resolution when using [member velocity] in a script that handles touch aiming. To avoid this, use [member screen_velocity] instead.  
         */
        get velocity(): Vector2
        set velocity(value: Vector2)
        
        /** The unscaled drag velocity in pixels per second in screen coordinates. This velocity is  *not*  scaled according to the content scale factor or calls to [method InputEvent.xformed_by]. This should be preferred over [member velocity] for touch aiming regardless of the project's stretch mode. */
        get screenVelocity(): Vector2
        set screenVelocity(value: Vector2)
    }
    /** Represents a screen touch event.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_inputeventscreentouch.html  
     */
    class InputEventScreenTouch extends InputEventFromWindow {
        constructor(identifier?: any)
        /** The touch index in the case of a multi-touch event. One index = one finger. */
        get index(): int64
        set index(value: int64)
        
        /** The touch position in the viewport the node is in, using the coordinate system of this viewport. */
        get position(): Vector2
        set position(value: Vector2)
        
        /** If `true`, the touch event has been canceled. */
        get canceled(): boolean
        set canceled(value: boolean)
        
        /** If `true`, the touch's state is pressed. If `false`, the touch's state is released. */
        get pressed(): boolean
        set pressed(value: boolean)
        
        /** If `true`, the touch's state is a double tap. */
        get doubleTap(): boolean
        set doubleTap(value: boolean)
    }
    /** Represents a triggered keyboard [Shortcut].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_inputeventshortcut.html  
     */
    class InputEventShortcut extends InputEvent {
        constructor(identifier?: any)
        /** The [Shortcut] represented by this event. Its [method Shortcut.matches_event] method will always return `true` for this event. */
        get shortcut(): null | Shortcut
        set shortcut(value: null | Shortcut)
    }
    /** Abstract base class for input events affected by modifier keys like [kbd]Shift[/kbd] and [kbd]Alt[/kbd].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_inputeventwithmodifiers.html  
     */
    class InputEventWithModifiers extends InputEventFromWindow {
        constructor(identifier?: any)
        /** On macOS, returns `true` if [kbd]Meta[/kbd] ([kbd]Cmd[/kbd]) is pressed.  
         *  On other platforms, returns `true` if [kbd]Ctrl[/kbd] is pressed.  
         */
        isCommandOrControlPressed(): boolean
        
        /** Returns the keycode combination of modifier keys. */
        getModifiersMask(): KeyModifierMask
        
        /** Automatically use [kbd]Meta[/kbd] ([kbd]Cmd[/kbd]) on macOS and [kbd]Ctrl[/kbd] on other platforms. If `true`, [member ctrl_pressed] and [member meta_pressed] cannot be set. */
        get commandOrControlAutoremap(): boolean
        set commandOrControlAutoremap(value: boolean)
        
        /** State of the [kbd]Alt[/kbd] modifier. */
        get altPressed(): boolean
        set altPressed(value: boolean)
        
        /** State of the [kbd]Shift[/kbd] modifier. */
        get shiftPressed(): boolean
        set shiftPressed(value: boolean)
        
        /** State of the [kbd]Ctrl[/kbd] modifier. */
        get ctrlPressed(): boolean
        set ctrlPressed(value: boolean)
        
        /** State of the [kbd]Meta[/kbd] modifier. On Windows and Linux, this represents the Windows key (sometimes called "meta" or "super" on Linux). On macOS, this represents the Command key. */
        get metaPressed(): boolean
        set metaPressed(value: boolean)
    }
    /** Placeholder for the root [Node] of a [PackedScene].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_instanceplaceholder.html  
     */
    class InstancePlaceholder<Map extends NodePathMap = any> extends Node<Map> {
        constructor(identifier?: any)
        /** Returns the list of properties that will be applied to the node when [method create_instance] is called.  
         *  If [param with_order] is `true`, a key named `.order` (note the leading period) is added to the dictionary. This `.order` key is an [Array] of [String] property names specifying the order in which properties will be applied (with index 0 being the first).  
         */
        getStoredValues(withOrder?: boolean /* = false */): GDictionary
        
        /** Call this method to actually load in the node. The created node will be placed as a sibling  *above*  the [InstancePlaceholder] in the scene tree. The [Node]'s reference is also returned for convenience.  
         *      
         *  **Note:** [method create_instance] is not thread-safe. Use [method Object.call_deferred] if calling from a thread.  
         */
        createInstance(replace?: boolean /* = false */, customScene?: PackedScene /* = undefined */): Node
        
        /** Gets the path to the [PackedScene] resource file that is loaded by default when calling [method create_instance]. Not thread-safe. Use [method Object.call_deferred] if calling from a thread. */
        getInstancePath(): string
    }
    /** Creates an idle interval in a [Tween] animation.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_intervaltweener.html  
     */
    class IntervalTweener extends Tweener {
        constructor(identifier?: any)
    }
    namespace ItemList {
        enum IconMode {
            IconModeTop = 0,
            IconModeLeft = 1,
        }
        enum SelectMode {
            SelectSingle = 0,
            SelectMulti = 1,
            SelectToggle = 2,
        }
    }
    /** A vertical list of selectable items with one or multiple columns.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_itemlist.html  
     */
    class ItemList<Map extends NodePathMap = any> extends Control<Map> {
        /** Icon is drawn above the text. */
        static readonly ICON_MODE_TOP = 0
        
        /** Icon is drawn to the left of the text. */
        static readonly ICON_MODE_LEFT = 1
        
        /** Only allow selecting a single item. */
        static readonly SELECT_SINGLE = 0
        
        /** Allows selecting multiple items by holding [kbd]Ctrl[/kbd] or [kbd]Shift[/kbd]. */
        static readonly SELECT_MULTI = 1
        
        /** Allows selecting multiple items by toggling them on and off. */
        static readonly SELECT_TOGGLE = 2
        constructor(identifier?: any)
        
        /** Adds an item to the item list with specified text. Returns the index of an added item.  
         *  Specify an [param icon], or use `null` as the [param icon] for a list item with no icon.  
         *  If [param selectable] is `true`, the list item will be selectable.  
         */
        addItem(text: string, icon?: Texture2D /* = undefined */, selectable?: boolean /* = true */): int64
        
        /** Adds an item to the item list with no text, only an icon. Returns the index of an added item. */
        addIconItem(icon: Texture2D, selectable?: boolean /* = true */): int64
        
        /** Sets text of the item associated with the specified index. */
        setItemText(idx: int64, text: string): void
        
        /** Returns the text associated with the specified index. */
        getItemText(idx: int64): string
        
        /** Sets (or replaces) the icon's [Texture2D] associated with the specified index. */
        setItemIcon(idx: int64, icon: Texture2D): void
        
        /** Returns the icon associated with the specified index. */
        getItemIcon(idx: int64): null | Texture2D
        
        /** Sets item's text base writing direction. */
        setItemTextDirection(idx: int64, direction: Control.TextDirection): void
        
        /** Returns item's text base writing direction. */
        getItemTextDirection(idx: int64): Control.TextDirection
        
        /** Sets language code of item's text used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        setItemLanguage(idx: int64, language: string): void
        
        /** Returns item's text language code. */
        getItemLanguage(idx: int64): string
        
        /** Sets the auto translate mode of the item associated with the specified index.  
         *  Items use [constant Node.AUTO_TRANSLATE_MODE_INHERIT] by default, which uses the same auto translate mode as the [ItemList] itself.  
         */
        setItemAutoTranslateMode(idx: int64, mode: Node.AutoTranslateMode): void
        
        /** Returns item's auto translate mode. */
        getItemAutoTranslateMode(idx: int64): Node.AutoTranslateMode
        
        /** Sets whether the item icon will be drawn transposed. */
        setItemIconTransposed(idx: int64, transposed: boolean): void
        
        /** Returns `true` if the item icon will be drawn transposed, i.e. the X and Y axes are swapped. */
        isItemIconTransposed(idx: int64): boolean
        
        /** Sets the region of item's icon used. The whole icon will be used if the region has no area. */
        setItemIconRegion(idx: int64, rect: Rect2): void
        
        /** Returns the region of item's icon used. The whole icon will be used if the region has no area. */
        getItemIconRegion(idx: int64): Rect2
        
        /** Sets a modulating [Color] of the item associated with the specified index. */
        setItemIconModulate(idx: int64, modulate: Color): void
        
        /** Returns a [Color] modulating item's icon at the specified index. */
        getItemIconModulate(idx: int64): Color
        
        /** Allows or disallows selection of the item associated with the specified index. */
        setItemSelectable(idx: int64, selectable: boolean): void
        
        /** Returns `true` if the item at the specified index is selectable. */
        isItemSelectable(idx: int64): boolean
        
        /** Disables (or enables) the item at the specified index.  
         *  Disabled items cannot be selected and do not trigger activation signals (when double-clicking or pressing [kbd]Enter[/kbd]).  
         */
        setItemDisabled(idx: int64, disabled: boolean): void
        
        /** Returns `true` if the item at the specified index is disabled. */
        isItemDisabled(idx: int64): boolean
        
        /** Sets a value (of any type) to be stored with the item associated with the specified index. */
        setItemMetadata(idx: int64, metadata: any): void
        
        /** Returns the metadata value of the specified index. */
        getItemMetadata(idx: int64): any
        
        /** Sets the background color of the item specified by [param idx] index to the specified [Color]. */
        setItemCustomBgColor(idx: int64, customBgColor: Color): void
        
        /** Returns the custom background color of the item specified by [param idx] index. */
        getItemCustomBgColor(idx: int64): Color
        
        /** Sets the foreground color of the item specified by [param idx] index to the specified [Color]. */
        setItemCustomFgColor(idx: int64, customFgColor: Color): void
        
        /** Returns the custom foreground color of the item specified by [param idx] index. */
        getItemCustomFgColor(idx: int64): Color
        
        /** Returns the position and size of the item with the specified index, in the coordinate system of the [ItemList] node. If [param expand] is `true` the last column expands to fill the rest of the row.  
         *      
         *  **Note:** The returned value is unreliable if called right after modifying the [ItemList], before it redraws in the next frame.  
         */
        getItemRect(idx: int64, expand?: boolean /* = true */): Rect2
        
        /** Sets whether the tooltip hint is enabled for specified item index. */
        setItemTooltipEnabled(idx: int64, enable: boolean): void
        
        /** Returns `true` if the tooltip is enabled for specified item index. */
        isItemTooltipEnabled(idx: int64): boolean
        
        /** Sets the tooltip hint for the item associated with the specified index. */
        setItemTooltip(idx: int64, tooltip: string): void
        
        /** Returns the tooltip hint associated with the specified index. */
        getItemTooltip(idx: int64): string
        
        /** Select the item at the specified index.  
         *      
         *  **Note:** This method does not trigger the item selection signal.  
         */
        select(idx: int64, single?: boolean /* = true */): void
        
        /** Ensures the item associated with the specified index is not selected. */
        deselect(idx: int64): void
        
        /** Ensures there are no items selected. */
        deselectAll(): void
        
        /** Returns `true` if the item at the specified index is currently selected. */
        isSelected(idx: int64): boolean
        
        /** Returns an array with the indexes of the selected items. */
        getSelectedItems(): PackedInt32Array
        
        /** Moves item from index [param from_idx] to [param to_idx]. */
        moveItem(fromIdx: int64, toIdx: int64): void
        
        /** Removes the item specified by [param idx] index from the list. */
        removeItem(idx: int64): void
        
        /** Removes all items from the list. */
        clear(): void
        
        /** Sorts items in the list by their text. */
        sortItemsByText(): void
        
        /** Returns `true` if one or more items are selected. */
        isAnythingSelected(): boolean
        
        /** Returns the item index at the given [param position].  
         *  When there is no item at that point, -1 will be returned if [param exact] is `true`, and the closest item index will be returned otherwise.  
         *      
         *  **Note:** The returned value is unreliable if called right after modifying the [ItemList], before it redraws in the next frame.  
         */
        getItemAtPosition(position: Vector2, exact?: boolean /* = false */): int64
        
        /** Ensure current selection is visible, adjusting the scroll position as necessary. */
        ensureCurrentIsVisible(): void
        
        /** Returns the vertical scrollbar.  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.  
         */
        getVScrollBar(): null | VScrollBar
        
        /** Returns the horizontal scrollbar.  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.  
         */
        getHScrollBar(): null | HScrollBar
        
        /** Forces an update to the list size based on its items. This happens automatically whenever size of the items, or other relevant settings like [member auto_height], change. The method can be used to trigger the update ahead of next drawing pass. */
        forceUpdateListSize(): void
        
        /** Allows single or multiple item selection. See the [enum SelectMode] constants. */
        get selectMode(): int64
        set selectMode(value: int64)
        
        /** If `true`, the currently selected item can be selected again. */
        get allowReselect(): boolean
        set allowReselect(value: boolean)
        
        /** If `true`, right mouse button click can select items. */
        get allowRmbSelect(): boolean
        set allowRmbSelect(value: boolean)
        
        /** If `true`, allows navigating the [ItemList] with letter keys through incremental search. */
        get allowSearch(): boolean
        set allowSearch(value: boolean)
        
        /** Maximum lines of text allowed in each item. Space will be reserved even when there is not enough lines of text to display.  
         *      
         *  **Note:** This property takes effect only when [member icon_mode] is [constant ICON_MODE_TOP]. To make the text wrap, [member fixed_column_width] should be greater than zero.  
         */
        get maxTextLines(): int64
        set maxTextLines(value: int64)
        
        /** If `true`, the control will automatically resize the width to fit its content. */
        get autoWidth(): boolean
        set autoWidth(value: boolean)
        
        /** If `true`, the control will automatically resize the height to fit its content. */
        get autoHeight(): boolean
        set autoHeight(value: boolean)
        
        /** Sets the clipping behavior when the text exceeds an item's bounding rectangle. See [enum TextServer.OverrunBehavior] for a description of all modes. */
        get textOverrunBehavior(): int64
        set textOverrunBehavior(value: int64)
        
        /** If `true`, the control will automatically move items into a new row to fit its content. See also [HFlowContainer] for this behavior.  
         *  If `false`, the control will add a horizontal scrollbar to make all items visible.  
         */
        get wraparoundItems(): boolean
        set wraparoundItems(value: boolean)
        
        /** The number of items currently in the list. */
        get itemCount(): any /*Items,item_*/
        set itemCount(value: any /*Items,item_*/)
        
        /** Maximum columns the list will have.  
         *  If greater than zero, the content will be split among the specified columns.  
         *  A value of zero means unlimited columns, i.e. all items will be put in the same row.  
         */
        get maxColumns(): int64
        set maxColumns(value: int64)
        
        /** Whether all columns will have the same width.  
         *  If `true`, the width is equal to the largest column width of all columns.  
         */
        get sameColumnWidth(): boolean
        set sameColumnWidth(value: boolean)
        
        /** The width all columns will be adjusted to.  
         *  A value of zero disables the adjustment, each item will have a width equal to the width of its content and the columns will have an uneven width.  
         */
        get fixedColumnWidth(): int64
        set fixedColumnWidth(value: int64)
        
        /** The icon position, whether above or to the left of the text. See the [enum IconMode] constants. */
        get iconMode(): int64
        set iconMode(value: int64)
        
        /** The scale of icon applied after [member fixed_icon_size] and transposing takes effect. */
        get iconScale(): float64
        set iconScale(value: float64)
        
        /** The size all icons will be adjusted to.  
         *  If either X or Y component is not greater than zero, icon size won't be affected.  
         */
        get fixedIconSize(): Vector2I
        set fixedIconSize(value: Vector2I)
        
        /** Emitted when specified item has been selected. Only applicable in single selection mode.  
         *  [member allow_reselect] must be enabled to reselect an item.  
         */
        readonly itemSelected: Signal<(index: int64) => void>
        
        /** Emitted when any mouse click is issued within the rect of the list but on empty space.  
         *  [param at_position] is the click position in this control's local coordinate system.  
         */
        readonly emptyClicked: Signal<(atPosition: Vector2, mouseButtonIndex: int64) => void>
        
        /** Emitted when specified list item has been clicked with any mouse button.  
         *  [param at_position] is the click position in this control's local coordinate system.  
         */
        readonly itemClicked: Signal<(index: int64, atPosition: Vector2, mouseButtonIndex: int64) => void>
        
        /** Emitted when a multiple selection is altered on a list allowing multiple selection. */
        readonly multiSelected: Signal<(index: int64, selected: boolean) => void>
        
        /** Emitted when specified list item is activated via double-clicking or by pressing [kbd]Enter[/kbd]. */
        readonly itemActivated: Signal<(index: int64) => void>
    }
}
