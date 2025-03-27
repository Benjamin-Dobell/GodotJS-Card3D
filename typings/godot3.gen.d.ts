// AUTO-GENERATED
/// <reference no-default-lib="true"/>
declare module "godot" {
    /** OpenXR Haptic feedback base class.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_openxrhapticbase.html  
     */
    class OpenXRHapticBase extends Resource {
        constructor(identifier?: any)
    }
    /** Vibration haptic feedback.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_openxrhapticvibration.html  
     */
    class OpenXRHapticVibration extends OpenXRHapticBase {
        constructor(identifier?: any)
        /** The duration of the pulse in nanoseconds. Use `-1` for a minimum duration pulse for the current XR runtime. */
        get duration(): int64
        set duration(value: int64)
        
        /** The frequency of the pulse in Hz. `0.0` will let the XR runtime chose an optimal frequency for the device used. */
        get frequency(): float64
        set frequency(value: float64)
        
        /** The amplitude of the pulse between `0.0` and `1.0`. */
        get amplitude(): float64
        set amplitude(value: float64)
    }
    /** Defines a binding between an [OpenXRAction] and an XR input or output.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_openxripbinding.html  
     */
    class OpenXRIPBinding extends Resource {
        constructor(identifier?: any)
        getBindingModifierCount(): int64
        getBindingModifier(index: int64): OpenXRActionBindingModifier
        getPathCount(): int64
        hasPath(path: string): boolean
        addPath(path: string): void
        removePath(path: string): void
        
        /** [OpenXRAction] that is bound to [member binding_path]. */
        get action(): OpenXRAction
        set action(value: OpenXRAction)
        get bindingPath(): string
        set bindingPath(value: string)
        get bindingModifiers(): OpenXRActionBindingModifier
        set bindingModifiers(value: OpenXRActionBindingModifier)
        
        /** Paths that define the inputs or outputs bound on the device. */
        get paths(): PackedStringArray
        set paths(value: PackedStringArray | string[])
    }
    class OpenXripBindingModifier extends OpenXRBindingModifier {
        constructor(identifier?: any)
    }
    /** Suggested bindings object for OpenXR.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_openxrinteractionprofile.html  
     */
    class OpenXRInteractionProfile extends Resource {
        constructor(identifier?: any)
        getBindingCount(): int64
        getBinding(index: int64): OpenXRIPBinding
        getBindingModifierCount(): int64
        getBindingModifier(index: int64): any /*OpenXRIPBindingModifier*/
        get interactionProfilePath(): string
        set interactionProfilePath(value: string)
        
        /** Action bindings for this interaction profile. */
        get bindings(): OpenXRIPBinding
        set bindings(value: OpenXRIPBinding)
        get bindingModifiers(): any /*OpenXRIPBindingModifier*/
        set bindingModifiers(value: any /*OpenXRIPBindingModifier*/)
    }
    /** Default OpenXR interaction profile editor.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_openxrinteractionprofileeditor.html  
     */
    class OpenXRInteractionProfileEditor<Map extends Record<string, Node> = {}> extends OpenXRInteractionProfileEditorBase<Map> {
        constructor(identifier?: any)
    }
    /** Base class for editing interaction profiles.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_openxrinteractionprofileeditorbase.html  
     */
    class OpenXRInteractionProfileEditorBase<Map extends Record<string, Node> = {}> extends HBoxContainer<Map> {
        constructor(identifier?: any)
        /** Setup this editor for the provided [param action_map] and [param interaction_profile]. */
        setup(actionMap: OpenXRActionMap, interactionProfile: OpenXRInteractionProfile): void
        _addBinding(action: string, path: string): void
        _removeBinding(action: string, path: string): void
    }
    /** Meta class registering supported devices in OpenXR.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_openxrinteractionprofilemetadata.html  
     */
    class OpenXRInteractionProfileMetadata extends GObject {
        constructor(identifier?: any)
        registerProfileRename(oldName: string, newName: string): void
        registerTopLevelPath(displayName: string, openxrPath: string, openxrExtensionName: string): void
        registerInteractionProfile(displayName: string, openxrPath: string, openxrExtensionName: string): void
        registerIOPath(interactionProfile: string, displayName: string, toplevelPath: string, openxrPath: string, openxrExtensionName: string, actionType: OpenXRAction.ActionType): void
    }
    namespace OpenXRInterface {
        enum Hand {
            HandLeft = 0,
            HandRight = 1,
            HandMax = 2,
        }
        enum HandMotionRange {
            HandMotionRangeUnobstructed = 0,
            HandMotionRangeConformToController = 1,
            HandMotionRangeMax = 2,
        }
        enum HandTrackedSource {
            HandTrackedSourceUnknown = 0,
            HandTrackedSourceUnobstructed = 1,
            HandTrackedSourceController = 2,
            HandTrackedSourceMax = 3,
        }
        enum HandJoints {
            HandJointPalm = 0,
            HandJointWrist = 1,
            HandJointThumbMetacarpal = 2,
            HandJointThumbProximal = 3,
            HandJointThumbDistal = 4,
            HandJointThumbTip = 5,
            HandJointIndexMetacarpal = 6,
            HandJointIndexProximal = 7,
            HandJointIndexIntermediate = 8,
            HandJointIndexDistal = 9,
            HandJointIndexTip = 10,
            HandJointMiddleMetacarpal = 11,
            HandJointMiddleProximal = 12,
            HandJointMiddleIntermediate = 13,
            HandJointMiddleDistal = 14,
            HandJointMiddleTip = 15,
            HandJointRingMetacarpal = 16,
            HandJointRingProximal = 17,
            HandJointRingIntermediate = 18,
            HandJointRingDistal = 19,
            HandJointRingTip = 20,
            HandJointLittleMetacarpal = 21,
            HandJointLittleProximal = 22,
            HandJointLittleIntermediate = 23,
            HandJointLittleDistal = 24,
            HandJointLittleTip = 25,
            HandJointMax = 26,
        }
        enum HandJointFlags {
            HandJointNone = 0,
            HandJointOrientationValid = 1,
            HandJointOrientationTracked = 2,
            HandJointPositionValid = 4,
            HandJointPositionTracked = 8,
            HandJointLinearVelocityValid = 16,
            HandJointAngularVelocityValid = 32,
        }
    }
    /** Our OpenXR interface.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_openxrinterface.html  
     */
    class OpenXRInterface extends XRInterface {
        /** Left hand. */
        static readonly HAND_LEFT = 0
        
        /** Right hand. */
        static readonly HAND_RIGHT = 1
        
        /** Maximum value for the hand enum. */
        static readonly HAND_MAX = 2
        
        /** Full hand range, if user closes their hands, we make a full fist. */
        static readonly HAND_MOTION_RANGE_UNOBSTRUCTED = 0
        
        /** Conform to controller, if user closes their hands, the tracked data conforms to the shape of the controller. */
        static readonly HAND_MOTION_RANGE_CONFORM_TO_CONTROLLER = 1
        
        /** Maximum value for the motion range enum. */
        static readonly HAND_MOTION_RANGE_MAX = 2
        
        /** The source of hand tracking data is unknown (the extension is likely unsupported). */
        static readonly HAND_TRACKED_SOURCE_UNKNOWN = 0
        
        /** The source of hand tracking is unobstructed, this means that an accurate method of hand tracking is used, e.g. optical hand tracking, data gloves, etc. */
        static readonly HAND_TRACKED_SOURCE_UNOBSTRUCTED = 1
        
        /** The source of hand tracking is a controller, bone positions are inferred from controller inputs. */
        static readonly HAND_TRACKED_SOURCE_CONTROLLER = 2
        
        /** Maximum value for the hand tracked source enum. */
        static readonly HAND_TRACKED_SOURCE_MAX = 3
        
        /** Palm joint. */
        static readonly HAND_JOINT_PALM = 0
        
        /** Wrist joint. */
        static readonly HAND_JOINT_WRIST = 1
        
        /** Thumb metacarpal joint. */
        static readonly HAND_JOINT_THUMB_METACARPAL = 2
        
        /** Thumb proximal joint. */
        static readonly HAND_JOINT_THUMB_PROXIMAL = 3
        
        /** Thumb distal joint. */
        static readonly HAND_JOINT_THUMB_DISTAL = 4
        
        /** Thumb tip joint. */
        static readonly HAND_JOINT_THUMB_TIP = 5
        
        /** Index metacarpal joint. */
        static readonly HAND_JOINT_INDEX_METACARPAL = 6
        
        /** Index proximal joint. */
        static readonly HAND_JOINT_INDEX_PROXIMAL = 7
        
        /** Index intermediate joint. */
        static readonly HAND_JOINT_INDEX_INTERMEDIATE = 8
        
        /** Index distal joint. */
        static readonly HAND_JOINT_INDEX_DISTAL = 9
        
        /** Index tip joint. */
        static readonly HAND_JOINT_INDEX_TIP = 10
        
        /** Middle metacarpal joint. */
        static readonly HAND_JOINT_MIDDLE_METACARPAL = 11
        
        /** Middle proximal joint. */
        static readonly HAND_JOINT_MIDDLE_PROXIMAL = 12
        
        /** Middle intermediate joint. */
        static readonly HAND_JOINT_MIDDLE_INTERMEDIATE = 13
        
        /** Middle distal joint. */
        static readonly HAND_JOINT_MIDDLE_DISTAL = 14
        
        /** Middle tip joint. */
        static readonly HAND_JOINT_MIDDLE_TIP = 15
        
        /** Ring metacarpal joint. */
        static readonly HAND_JOINT_RING_METACARPAL = 16
        
        /** Ring proximal joint. */
        static readonly HAND_JOINT_RING_PROXIMAL = 17
        
        /** Ring intermediate joint. */
        static readonly HAND_JOINT_RING_INTERMEDIATE = 18
        
        /** Ring distal joint. */
        static readonly HAND_JOINT_RING_DISTAL = 19
        
        /** Ring tip joint. */
        static readonly HAND_JOINT_RING_TIP = 20
        
        /** Little metacarpal joint. */
        static readonly HAND_JOINT_LITTLE_METACARPAL = 21
        
        /** Little proximal joint. */
        static readonly HAND_JOINT_LITTLE_PROXIMAL = 22
        
        /** Little intermediate joint. */
        static readonly HAND_JOINT_LITTLE_INTERMEDIATE = 23
        
        /** Little distal joint. */
        static readonly HAND_JOINT_LITTLE_DISTAL = 24
        
        /** Little tip joint. */
        static readonly HAND_JOINT_LITTLE_TIP = 25
        
        /** Maximum value for the hand joint enum. */
        static readonly HAND_JOINT_MAX = 26
        
        /** No flags are set. */
        static readonly HAND_JOINT_NONE = 0
        
        /** If set, the orientation data is valid, otherwise, the orientation data is unreliable and should not be used. */
        static readonly HAND_JOINT_ORIENTATION_VALID = 1
        
        /** If set, the orientation data comes from tracking data, otherwise, the orientation data contains predicted data. */
        static readonly HAND_JOINT_ORIENTATION_TRACKED = 2
        
        /** If set, the positional data is valid, otherwise, the positional data is unreliable and should not be used. */
        static readonly HAND_JOINT_POSITION_VALID = 4
        
        /** If set, the positional data comes from tracking data, otherwise, the positional data contains predicted data. */
        static readonly HAND_JOINT_POSITION_TRACKED = 8
        
        /** If set, our linear velocity data is valid, otherwise, the linear velocity data is unreliable and should not be used. */
        static readonly HAND_JOINT_LINEAR_VELOCITY_VALID = 16
        
        /** If set, our angular velocity data is valid, otherwise, the angular velocity data is unreliable and should not be used. */
        static readonly HAND_JOINT_ANGULAR_VELOCITY_VALID = 32
        constructor(identifier?: any)
        isFoveationSupported(): boolean
        isActionSetActive(name: string): boolean
        setActionSetActive(name: string, active: boolean): void
        getActionSets(): GArray
        getAvailableDisplayRefreshRates(): GArray
        setMotionRange(hand: OpenXRInterface.Hand, motionRange: OpenXRInterface.HandMotionRange): void
        getMotionRange(hand: OpenXRInterface.Hand): OpenXRInterface.HandMotionRange
        getHandTrackingSource(hand: OpenXRInterface.Hand): OpenXRInterface.HandTrackedSource
        getHandJointFlags(hand: OpenXRInterface.Hand, joint: OpenXRInterface.HandJoints): OpenXRInterface.HandJointFlags
        getHandJointRotation(hand: OpenXRInterface.Hand, joint: OpenXRInterface.HandJoints): Quaternion
        getHandJointPosition(hand: OpenXRInterface.Hand, joint: OpenXRInterface.HandJoints): Vector3
        getHandJointRadius(hand: OpenXRInterface.Hand, joint: OpenXRInterface.HandJoints): float64
        getHandJointLinearVelocity(hand: OpenXRInterface.Hand, joint: OpenXRInterface.HandJoints): Vector3
        getHandJointAngularVelocity(hand: OpenXRInterface.Hand, joint: OpenXRInterface.HandJoints): Vector3
        isHandTrackingSupported(): boolean
        isHandInteractionSupported(): boolean
        isEyeGazeInteractionSupported(): boolean
        get displayRefreshRate(): float64
        set displayRefreshRate(value: float64)
        get renderTargetSizeMultiplier(): float64
        set renderTargetSizeMultiplier(value: float64)
        get foveationLevel(): int64
        set foveationLevel(value: int64)
        get foveationDynamic(): boolean
        set foveationDynamic(value: boolean)
        get vrsMinRadius(): float64
        set vrsMinRadius(value: float64)
        get vrsStrength(): float64
        set vrsStrength(value: float64)
        readonly sessionBegun: Signal<() => void>
        readonly sessionStopping: Signal<() => void>
        readonly sessionFocussed: Signal<() => void>
        readonly sessionVisible: Signal<() => void>
        readonly sessionLossPending: Signal<() => void>
        readonly instanceExiting: Signal<() => void>
        readonly poseRecentered: Signal<() => void>
        readonly refreshRateChanged: Signal<(refreshRate: float64) => void>
    }
    /** Draws a stereo correct visibility mask.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_openxrvisibilitymask.html  
     */
    class OpenXRVisibilityMask<Map extends Record<string, Node> = {}> extends VisualInstance3D<Map> {
        constructor(identifier?: any)
    }
    /** An optimized translation, used by default for CSV Translations.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_optimizedtranslation.html  
     */
    class OptimizedTranslation extends Translation {
        constructor(identifier?: any)
        /** Generates and sets an optimized translation from the given [Translation] resource.  
         *      
         *  **Note:** This method is intended to be used in the editor. It does nothing when called from an exported project.  
         */
        generate(from: Translation): void
    }
    /** A button that brings up a dropdown with selectable options when pressed.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_optionbutton.html  
     */
    class OptionButton<Map extends Record<string, Node> = {}> extends Button<Map> {
        constructor(identifier?: any)
        addItem(label: string, id: int64 = -1): void
        addIconItem(texture: Texture2D, label: string, id: int64 = -1): void
        setItemText(idx: int64, text: string): void
        setItemIcon(idx: int64, texture: Texture2D): void
        setItemDisabled(idx: int64, disabled: boolean): void
        setItemId(idx: int64, id: int64): void
        setItemMetadata(idx: int64, metadata: any): void
        setItemTooltip(idx: int64, tooltip: string): void
        getItemText(idx: int64): string
        getItemIcon(idx: int64): Texture2D
        getItemId(idx: int64): int64
        getItemIndex(id: int64): int64
        getItemMetadata(idx: int64): any
        getItemTooltip(idx: int64): string
        isItemDisabled(idx: int64): boolean
        isItemSeparator(idx: int64): boolean
        addSeparator(text: string = ''): void
        
        /** Clears all the items in the [OptionButton]. */
        clear(): void
        
        /** Selects an item by index and makes it the current item. This will work even if the item is disabled.  
         *  Passing `-1` as the index deselects any currently selected item.  
         */
        select(idx: int64): void
        getSelectedId(): int64
        getSelectedMetadata(): any
        removeItem(idx: int64): void
        getPopup(): PopupMenu
        showPopup(): void
        hasSelectableItems(): boolean
        getSelectableItem(fromLast: boolean = false): int64
        setDisableShortcuts(disabled: boolean): void
        
        /** The index of the currently selected item, or `-1` if no item is selected. */
        get selected(): int64
        set selected(value: int64)
        get fitToLongestItem(): boolean
        set fitToLongestItem(value: boolean)
        get allowReselect(): boolean
        set allowReselect(value: boolean)
        get itemCount(): any /*Items,popup/item_*/
        set itemCount(value: any /*Items,popup/item_*/)
        readonly itemSelected: Signal<(index: int64) => void>
        readonly itemFocused: Signal<(index: int64) => void>
    }
    class PckPacker extends RefCounted {
        constructor(identifier?: any)
        pckStart(pckPath: string, alignment: int64 = 32, key: string = '0000000000000000000000000000000000000000000000000000000000000000', encryptDirectory: boolean = false): GError
        addFile(targetPath: string, sourcePath: string, encrypt: boolean = false): GError
        addFileRemoval(targetPath: string): GError
        flush(verbose: boolean = false): GError
    }
    /** Efficiently packs and serializes [Array] or [Dictionary].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_packeddatacontainer.html  
     */
    class PackedDataContainer extends Resource {
        constructor(identifier?: any)
        _iterInit(_unnamedArg0: GArray): any
        _iterGet(_unnamedArg0: any): any
        _iterNext(_unnamedArg0: GArray): any
        
        /** Packs the given container into a binary representation. The [param value] must be either [Array] or [Dictionary], any other type will result in invalid data error.  
         *      
         *  **Note:** Subsequent calls to this method will overwrite the existing data.  
         */
        pack(value: any): GError
        
        /** Returns the size of the packed container (see [method Array.size] and [method Dictionary.size]). */
        size(): int64
        get __Data___(): PackedByteArray
        set __Data___(value: PackedByteArray | byte[] | ArrayBuffer)
    }
    /** An internal class used by [PackedDataContainer] to pack nested arrays and dictionaries.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_packeddatacontainerref.html  
     */
    class PackedDataContainerRef extends RefCounted {
        constructor(identifier?: any)
        /** Returns the size of the packed container (see [method Array.size] and [method Dictionary.size]). */
        size(): int64
        _iterInit(_unnamedArg0: GArray): any
        _iterGet(_unnamedArg0: any): any
        _iterNext(_unnamedArg0: GArray): any
    }
    namespace PackedScene {
        enum GenEditState {
            GenEditStateDisabled = 0,
            GenEditStateInstance = 1,
            GenEditStateMain = 2,
            GenEditStateMainInherited = 3,
        }
    }
    /** An abstraction of a serialized scene.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_packedscene.html  
     */
    class PackedScene extends Resource {
        /** If passed to [method instantiate], blocks edits to the scene state. */
        static readonly GEN_EDIT_STATE_DISABLED = 0
        
        /** If passed to [method instantiate], provides local scene resources to the local scene.  
         *      
         *  **Note:** Only available in editor builds.  
         */
        static readonly GEN_EDIT_STATE_INSTANCE = 1
        
        /** If passed to [method instantiate], provides local scene resources to the local scene. Only the main scene should receive the main edit state.  
         *      
         *  **Note:** Only available in editor builds.  
         */
        static readonly GEN_EDIT_STATE_MAIN = 2
        
        /** It's similar to [constant GEN_EDIT_STATE_MAIN], but for the case where the scene is being instantiated to be the base of another one.  
         *      
         *  **Note:** Only available in editor builds.  
         */
        static readonly GEN_EDIT_STATE_MAIN_INHERITED = 3
        constructor(identifier?: any)
        
        /** Packs the [param path] node, and all owned sub-nodes, into this [PackedScene]. Any existing data will be cleared. See [member Node.owner]. */
        pack(path: Node): GError
        
        /** Instantiates the scene's node hierarchy. Triggers child scene instantiation(s). Triggers a [constant Node.NOTIFICATION_SCENE_INSTANTIATED] notification on the root node. */
        instantiate(editState: PackedScene.GenEditState = 0): Node
        canInstantiate(): boolean
        getState(): SceneState
        get _bundled(): GDictionary
        set _bundled(value: GDictionary)
    }
    /** Abstraction and base class for packet-based protocols.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_packetpeer.html  
     */
    class PacketPeer extends RefCounted {
        constructor(identifier?: any)
        getVar(allowObjects: boolean = false): any
        putVar(var_: any, fullObjects: boolean = false): GError
        getPacket(): PackedByteArray
        putPacket(buffer: PackedByteArray | byte[] | ArrayBuffer): GError
        getPacketError(): GError
        getAvailablePacketCount(): int64
        get encodeBufferMaxSize(): int64
        set encodeBufferMaxSize(value: int64)
    }
    namespace PacketPeerDtls {
        enum Status {
            StatusDisconnected = 0,
            StatusHandshaking = 1,
            StatusConnected = 2,
            StatusError = 3,
            StatusErrorHostnameMismatch = 4,
        }
    }
    class PacketPeerDtls extends PacketPeer {
        static readonly STATUS_DISCONNECTED = 0
        static readonly STATUS_HANDSHAKING = 1
        static readonly STATUS_CONNECTED = 2
        static readonly STATUS_ERROR = 3
        static readonly STATUS_ERROR_HOSTNAME_MISMATCH = 4
        constructor(identifier?: any)
        poll(): void
        connectToPeer(packetPeer: any /*PacketPeerUDP*/, hostname: string, clientOptions: any /*TLSOptions*/ = undefined): GError
        getStatus(): PacketPeerDtls.Status
        disconnectFromPeer(): void
    }
    /** @link https://docs.godotengine.org/en/latest/classes/class_packetpeerextension.html */
    class PacketPeerExtension extends PacketPeer {
        constructor(identifier?: any)
        /* gdvirtual */ _getPacket(rBuffer: int64, rBufferSize: int64): GError
        /* gdvirtual */ _putPacket(pBuffer: int64, pBufferSize: int64): GError
        /* gdvirtual */ _getAvailablePacketCount(): int64
        /* gdvirtual */ _getMaxPacketSize(): int64
    }
    /** Wrapper to use a PacketPeer over a StreamPeer.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_packetpeerstream.html  
     */
    class PacketPeerStream extends PacketPeer {
        constructor(identifier?: any)
        get inputBufferMaxSize(): int64
        set inputBufferMaxSize(value: int64)
        get outputBufferMaxSize(): int64
        set outputBufferMaxSize(value: int64)
        get streamPeer(): StreamPeer
        set streamPeer(value: StreamPeer)
    }
    class PacketPeerUdp extends PacketPeer {
        constructor(identifier?: any)
        bind(port: int64, bindAddress: string = '*', recvBufSize: int64 = 65536): GError
        close(): void
        wait(): GError
        isBound(): boolean
        connectToHost(host: string, port: int64): GError
        isSocketConnected(): boolean
        getPacketIP(): string
        getPacketPort(): int64
        getLocalPort(): int64
        setDestAddress(host: string, port: int64): GError
        setBroadcastEnabled(enabled: boolean): void
        joinMulticastGroup(multicastAddress: string, interfaceName: string): GError
        leaveMulticastGroup(multicastAddress: string, interfaceName: string): GError
    }
    /** A GUI control that displays a [StyleBox].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_panel.html  
     */
    class Panel<Map extends Record<string, Node> = {}> extends Control<Map> {
        constructor(identifier?: any)
    }
    /** A container that keeps its child controls within the area of a [StyleBox].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_panelcontainer.html  
     */
    class PanelContainer<Map extends Record<string, Node> = {}> extends Container<Map> {
        constructor(identifier?: any)
    }
    /** A material that provides a special texture to a [Sky], usually an HDR panorama.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_panoramaskymaterial.html  
     */
    class PanoramaSkyMaterial extends Material {
        constructor(identifier?: any)
        /** [Texture2D] to be applied to the [PanoramaSkyMaterial]. */
        get panorama(): Texture2D
        set panorama(value: Texture2D)
        
        /** A boolean value to determine if the background texture should be filtered or not. */
        get filter(): boolean
        set filter(value: boolean)
        get energyMultiplier(): float64
        set energyMultiplier(value: float64)
    }
    /** A node used to create a parallax scrolling background.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_parallax2d.html  
     */
    class Parallax2D<Map extends Record<string, Node> = {}> extends Node2D<Map> {
        constructor(identifier?: any)
        _cameraMoved(transform: Transform2D, screenOffset: Vector2, adjScreenOffset: Vector2): void
        get scrollScale(): Vector2
        set scrollScale(value: Vector2)
        get scrollOffset(): Vector2
        set scrollOffset(value: Vector2)
        get repeatSize(): Vector2
        set repeatSize(value: Vector2)
        
        /** Velocity at which the offset scrolls automatically, in pixels per second. */
        get autoscroll(): Vector2
        set autoscroll(value: Vector2)
        get repeatTimes(): int64
        set repeatTimes(value: int64)
        get limitBegin(): Vector2
        set limitBegin(value: Vector2)
        get limitEnd(): Vector2
        set limitEnd(value: Vector2)
        get followViewport(): boolean
        set followViewport(value: boolean)
        get ignoreCameraScroll(): boolean
        set ignoreCameraScroll(value: boolean)
        get screenOffset(): Vector2
        set screenOffset(value: Vector2)
    }
    /** A node used to create a parallax scrolling background.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_parallaxbackground.html  
     */
    class ParallaxBackground<Map extends Record<string, Node> = {}> extends CanvasLayer<Map> {
        constructor(identifier?: any)
        _cameraMoved(_unnamedArg0: Transform2D, _unnamedArg1: Vector2, _unnamedArg2: Vector2): void
        get scrollOffset(): Vector2
        set scrollOffset(value: Vector2)
        get scrollBaseOffset(): Vector2
        set scrollBaseOffset(value: Vector2)
        get scrollBaseScale(): Vector2
        set scrollBaseScale(value: Vector2)
        get scrollLimitBegin(): Vector2
        set scrollLimitBegin(value: Vector2)
        get scrollLimitEnd(): Vector2
        set scrollLimitEnd(value: Vector2)
        get scrollIgnoreCameraZoom(): boolean
        set scrollIgnoreCameraZoom(value: boolean)
    }
    /** A parallax scrolling layer to be used with [ParallaxBackground].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_parallaxlayer.html  
     */
    class ParallaxLayer<Map extends Record<string, Node> = {}> extends Node2D<Map> {
        constructor(identifier?: any)
        get motionScale(): Vector2
        set motionScale(value: Vector2)
        get motionOffset(): Vector2
        set motionOffset(value: Vector2)
        get motionMirroring(): Vector2
        set motionMirroring(value: Vector2)
    }
    namespace ParticleProcessMaterial {
        enum Parameter {
            ParamInitialLinearVelocity = 0,
            ParamAngularVelocity = 1,
            ParamOrbitVelocity = 2,
            ParamLinearAccel = 3,
            ParamRadialAccel = 4,
            ParamTangentialAccel = 5,
            ParamDamping = 6,
            ParamAngle = 7,
            ParamScale = 8,
            ParamHueVariation = 9,
            ParamAnimSpeed = 10,
            ParamAnimOffset = 11,
            ParamRadialVelocity = 15,
            ParamDirectionalVelocity = 16,
            ParamScaleOverVelocity = 17,
            ParamMax = 18,
            ParamTurbVelInfluence = 13,
            ParamTurbInitDisplacement = 14,
            ParamTurbInfluenceOverLife = 12,
        }
        enum ParticleFlags {
            ParticleFlagAlignYToVelocity = 0,
            ParticleFlagRotateY = 1,
            ParticleFlagDisableZ = 2,
            ParticleFlagDampingAsFriction = 3,
            ParticleFlagMax = 4,
        }
        enum EmissionShape {
            EmissionShapePoint = 0,
            EmissionShapeSphere = 1,
            EmissionShapeSphereSurface = 2,
            EmissionShapeBox = 3,
            EmissionShapePoints = 4,
            EmissionShapeDirectedPoints = 5,
            EmissionShapeRing = 6,
            EmissionShapeMax = 7,
        }
        enum SubEmitterMode {
            SubEmitterDisabled = 0,
            SubEmitterConstant = 1,
            SubEmitterAtEnd = 2,
            SubEmitterAtCollision = 3,
            SubEmitterAtStart = 4,
            SubEmitterMax = 5,
        }
        enum CollisionMode {
            CollisionDisabled = 0,
            CollisionRigid = 1,
            CollisionHideOnContact = 2,
            CollisionMax = 3,
        }
    }
    /** Holds a particle configuration for [GPUParticles2D] or [GPUParticles3D] nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_particleprocessmaterial.html  
     */
    class ParticleProcessMaterial extends Material {
        /** Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set initial velocity properties. */
        static readonly PARAM_INITIAL_LINEAR_VELOCITY = 0
        
        /** Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set angular velocity properties. */
        static readonly PARAM_ANGULAR_VELOCITY = 1
        
        /** Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set orbital velocity properties. */
        static readonly PARAM_ORBIT_VELOCITY = 2
        
        /** Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set linear acceleration properties. */
        static readonly PARAM_LINEAR_ACCEL = 3
        
        /** Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set radial acceleration properties. */
        static readonly PARAM_RADIAL_ACCEL = 4
        
        /** Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set tangential acceleration properties. */
        static readonly PARAM_TANGENTIAL_ACCEL = 5
        
        /** Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set damping properties. */
        static readonly PARAM_DAMPING = 6
        
        /** Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set angle properties. */
        static readonly PARAM_ANGLE = 7
        
        /** Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set scale properties. */
        static readonly PARAM_SCALE = 8
        
        /** Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set hue variation properties. */
        static readonly PARAM_HUE_VARIATION = 9
        
        /** Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set animation speed properties. */
        static readonly PARAM_ANIM_SPEED = 10
        
        /** Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set animation offset properties. */
        static readonly PARAM_ANIM_OFFSET = 11
        
        /** Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set radial velocity properties. */
        static readonly PARAM_RADIAL_VELOCITY = 15
        
        /** Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set directional velocity properties. */
        static readonly PARAM_DIRECTIONAL_VELOCITY = 16
        
        /** Use with [method set_param_min], [method set_param_max], and [method set_param_texture] to set scale over velocity properties. */
        static readonly PARAM_SCALE_OVER_VELOCITY = 17
        
        /** Represents the size of the [enum Parameter] enum. */
        static readonly PARAM_MAX = 18
        
        /** Use with [method set_particle_flag] to set [member particle_flag_align_y]. */
        static readonly PARTICLE_FLAG_ALIGN_Y_TO_VELOCITY = 0
        
        /** Use with [method set_particle_flag] to set [member particle_flag_rotate_y]. */
        static readonly PARTICLE_FLAG_ROTATE_Y = 1
        
        /** Use with [method set_particle_flag] to set [member particle_flag_disable_z]. */
        static readonly PARTICLE_FLAG_DISABLE_Z = 2
        static readonly PARTICLE_FLAG_DAMPING_AS_FRICTION = 3
        
        /** Represents the size of the [enum ParticleFlags] enum. */
        static readonly PARTICLE_FLAG_MAX = 4
        
        /** All particles will be emitted from a single point. */
        static readonly EMISSION_SHAPE_POINT = 0
        
        /** Particles will be emitted in the volume of a sphere. */
        static readonly EMISSION_SHAPE_SPHERE = 1
        
        /** Particles will be emitted on the surface of a sphere. */
        static readonly EMISSION_SHAPE_SPHERE_SURFACE = 2
        
        /** Particles will be emitted in the volume of a box. */
        static readonly EMISSION_SHAPE_BOX = 3
        
        /** Particles will be emitted at a position determined by sampling a random point on the [member emission_point_texture]. Particle color will be modulated by [member emission_color_texture]. */
        static readonly EMISSION_SHAPE_POINTS = 4
        
        /** Particles will be emitted at a position determined by sampling a random point on the [member emission_point_texture]. Particle velocity and rotation will be set based on [member emission_normal_texture]. Particle color will be modulated by [member emission_color_texture]. */
        static readonly EMISSION_SHAPE_DIRECTED_POINTS = 5
        
        /** Particles will be emitted in a ring or cylinder. */
        static readonly EMISSION_SHAPE_RING = 6
        
        /** Represents the size of the [enum EmissionShape] enum. */
        static readonly EMISSION_SHAPE_MAX = 7
        
        /** Use with [method set_param_min] and [method set_param_max] to set the turbulence minimum und maximum influence on each particles velocity. */
        static readonly PARAM_TURB_VEL_INFLUENCE = 13
        
        /** Use with [method set_param_min] and [method set_param_max] to set the turbulence minimum and maximum displacement of the particles spawn position. */
        static readonly PARAM_TURB_INIT_DISPLACEMENT = 14
        
        /** Use with [method set_param_texture] to set the turbulence influence over the particles life time. */
        static readonly PARAM_TURB_INFLUENCE_OVER_LIFE = 12
        static readonly SUB_EMITTER_DISABLED = 0
        static readonly SUB_EMITTER_CONSTANT = 1
        static readonly SUB_EMITTER_AT_END = 2
        static readonly SUB_EMITTER_AT_COLLISION = 3
        static readonly SUB_EMITTER_AT_START = 4
        
        /** Represents the size of the [enum SubEmitterMode] enum. */
        static readonly SUB_EMITTER_MAX = 5
        
        /** No collision for particles. Particles will go through [GPUParticlesCollision3D] nodes. */
        static readonly COLLISION_DISABLED = 0
        
        /** [RigidBody3D]-style collision for particles using [GPUParticlesCollision3D] nodes. */
        static readonly COLLISION_RIGID = 1
        
        /** Hide particles instantly when colliding with a [GPUParticlesCollision3D] node. This can be combined with a subemitter that uses the [constant COLLISION_RIGID] collision mode to "replace" the parent particle with the subemitter on impact. */
        static readonly COLLISION_HIDE_ON_CONTACT = 2
        
        /** Represents the size of the [enum CollisionMode] enum. */
        static readonly COLLISION_MAX = 3
        constructor(identifier?: any)
        setParam(param: ParticleProcessMaterial.Parameter, value: Vector2): void
        getParam(param: ParticleProcessMaterial.Parameter): Vector2
        setParamMin(param: ParticleProcessMaterial.Parameter, value: float64): void
        getParamMin(param: ParticleProcessMaterial.Parameter): float64
        setParamMax(param: ParticleProcessMaterial.Parameter, value: float64): void
        getParamMax(param: ParticleProcessMaterial.Parameter): float64
        setParamTexture(param: ParticleProcessMaterial.Parameter, texture: Texture2D): void
        getParamTexture(param: ParticleProcessMaterial.Parameter): Texture2D
        setParticleFlag(particleFlag: ParticleProcessMaterial.ParticleFlags, enable: boolean): void
        getParticleFlag(particleFlag: ParticleProcessMaterial.ParticleFlags): boolean
        get lifetimeRandomness(): float64
        set lifetimeRandomness(value: float64)
        get particleFlagAlignY(): boolean
        set particleFlagAlignY(value: boolean)
        get particleFlagRotateY(): boolean
        set particleFlagRotateY(value: boolean)
        get particleFlagDisableZ(): boolean
        set particleFlagDisableZ(value: boolean)
        get particleFlagDampingAsFriction(): boolean
        set particleFlagDampingAsFriction(value: boolean)
        get emissionShapeOffset(): Vector3
        set emissionShapeOffset(value: Vector3)
        get emissionShapeScale(): Vector3
        set emissionShapeScale(value: Vector3)
        get emissionShape(): int64
        set emissionShape(value: int64)
        get emissionSphereRadius(): float64
        set emissionSphereRadius(value: float64)
        get emissionBoxExtents(): Vector3
        set emissionBoxExtents(value: Vector3)
        get emissionPointTexture(): Texture2D
        set emissionPointTexture(value: Texture2D)
        get emissionNormalTexture(): Texture2D
        set emissionNormalTexture(value: Texture2D)
        get emissionColorTexture(): Texture2D
        set emissionColorTexture(value: Texture2D)
        get emissionPointCount(): int64
        set emissionPointCount(value: int64)
        get emissionRingAxis(): Vector3
        set emissionRingAxis(value: Vector3)
        get emissionRingHeight(): float64
        set emissionRingHeight(value: float64)
        get emissionRingRadius(): float64
        set emissionRingRadius(value: float64)
        get emissionRingInnerRadius(): float64
        set emissionRingInnerRadius(value: float64)
        get emissionRingConeAngle(): float64
        set emissionRingConeAngle(value: float64)
        get angle(): Vector2
        set angle(value: Vector2)
        get angleMin(): float64
        set angleMin(value: float64)
        get angleMax(): float64
        set angleMax(value: float64)
        get angleCurve(): CurveTexture
        set angleCurve(value: CurveTexture)
        get inheritVelocityRatio(): float64
        set inheritVelocityRatio(value: float64)
        get velocityPivot(): Vector3
        set velocityPivot(value: Vector3)
        
        /** Unit vector specifying the particles' emission direction. */
        get direction(): Vector3
        set direction(value: Vector3)
        
        /** Each particle's initial direction range from `+spread` to `-spread` degrees. */
        get spread(): float64
        set spread(value: float64)
        
        /** Amount of [member spread] along the Y axis. */
        get flatness(): float64
        set flatness(value: float64)
        get initialVelocity(): Vector2
        set initialVelocity(value: Vector2)
        get initialVelocityMin(): float64
        set initialVelocityMin(value: float64)
        get initialVelocityMax(): float64
        set initialVelocityMax(value: float64)
        get angularVelocity(): Vector2
        set angularVelocity(value: Vector2)
        get angularVelocityMin(): float64
        set angularVelocityMin(value: float64)
        get angularVelocityMax(): float64
        set angularVelocityMax(value: float64)
        get angularVelocityCurve(): CurveTexture
        set angularVelocityCurve(value: CurveTexture)
        get directionalVelocity(): Vector2
        set directionalVelocity(value: Vector2)
        get directionalVelocityMin(): float64
        set directionalVelocityMin(value: float64)
        get directionalVelocityMax(): float64
        set directionalVelocityMax(value: float64)
        get directionalVelocityCurve(): any /*CurveXYZTexture*/
        set directionalVelocityCurve(value: any /*CurveXYZTexture*/)
        get orbitVelocity(): Vector2
        set orbitVelocity(value: Vector2)
        get orbitVelocityMin(): float64
        set orbitVelocityMin(value: float64)
        get orbitVelocityMax(): float64
        set orbitVelocityMax(value: float64)
        get orbitVelocityCurve(): CurveTexture | any /*CurveXYZTexture*/
        set orbitVelocityCurve(value: CurveTexture | any /*CurveXYZTexture*/)
        get radialVelocity(): Vector2
        set radialVelocity(value: Vector2)
        get radialVelocityMin(): float64
        set radialVelocityMin(value: float64)
        get radialVelocityMax(): float64
        set radialVelocityMax(value: float64)
        get radialVelocityCurve(): CurveTexture
        set radialVelocityCurve(value: CurveTexture)
        get velocityLimitCurve(): CurveTexture
        set velocityLimitCurve(value: CurveTexture)
        
        /** Gravity applied to every particle. */
        get gravity(): Vector3
        set gravity(value: Vector3)
        get linearAccel(): Vector2
        set linearAccel(value: Vector2)
        get linearAccelMin(): float64
        set linearAccelMin(value: float64)
        get linearAccelMax(): float64
        set linearAccelMax(value: float64)
        get linearAccelCurve(): CurveTexture
        set linearAccelCurve(value: CurveTexture)
        get radialAccel(): Vector2
        set radialAccel(value: Vector2)
        get radialAccelMin(): float64
        set radialAccelMin(value: float64)
        get radialAccelMax(): float64
        set radialAccelMax(value: float64)
        get radialAccelCurve(): CurveTexture
        set radialAccelCurve(value: CurveTexture)
        get tangentialAccel(): Vector2
        set tangentialAccel(value: Vector2)
        get tangentialAccelMin(): float64
        set tangentialAccelMin(value: float64)
        get tangentialAccelMax(): float64
        set tangentialAccelMax(value: float64)
        get tangentialAccelCurve(): CurveTexture
        set tangentialAccelCurve(value: CurveTexture)
        get damping(): Vector2
        set damping(value: Vector2)
        get dampingMin(): float64
        set dampingMin(value: float64)
        get dampingMax(): float64
        set dampingMax(value: float64)
        get dampingCurve(): CurveTexture
        set dampingCurve(value: CurveTexture)
        get attractorInteractionEnabled(): boolean
        set attractorInteractionEnabled(value: boolean)
        get scale(): Vector2
        set scale(value: Vector2)
        get scaleMin(): float64
        set scaleMin(value: float64)
        get scaleMax(): float64
        set scaleMax(value: float64)
        get scaleCurve(): CurveTexture | any /*CurveXYZTexture*/
        set scaleCurve(value: CurveTexture | any /*CurveXYZTexture*/)
        get scaleOverVelocity(): Vector2
        set scaleOverVelocity(value: Vector2)
        get scaleOverVelocityMin(): float64
        set scaleOverVelocityMin(value: float64)
        get scaleOverVelocityMax(): float64
        set scaleOverVelocityMax(value: float64)
        get scaleOverVelocityCurve(): CurveTexture | any /*CurveXYZTexture*/
        set scaleOverVelocityCurve(value: CurveTexture | any /*CurveXYZTexture*/)
        
        /** Each particle's initial color. If the [GPUParticles2D]'s `texture` is defined, it will be multiplied by this color.  
         *      
         *  **Note:** [member color] multiplies the particle mesh's vertex colors. To have a visible effect on a [BaseMaterial3D], [member BaseMaterial3D.vertex_color_use_as_albedo]  *must*  be `true`. For a [ShaderMaterial], `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, [member color] will have no visible effect.  
         */
        get color(): Color
        set color(value: Color)
        get colorRamp(): GradientTexture1D
        set colorRamp(value: GradientTexture1D)
        get colorInitialRamp(): GradientTexture1D
        set colorInitialRamp(value: GradientTexture1D)
        get alphaCurve(): CurveTexture
        set alphaCurve(value: CurveTexture)
        get emissionCurve(): CurveTexture
        set emissionCurve(value: CurveTexture)
        get hueVariation(): Vector2
        set hueVariation(value: Vector2)
        get hueVariationMin(): float64
        set hueVariationMin(value: float64)
        get hueVariationMax(): float64
        set hueVariationMax(value: float64)
        get hueVariationCurve(): CurveTexture
        set hueVariationCurve(value: CurveTexture)
        get animSpeed(): Vector2
        set animSpeed(value: Vector2)
        get animSpeedMin(): float64
        set animSpeedMin(value: float64)
        get animSpeedMax(): float64
        set animSpeedMax(value: float64)
        get animSpeedCurve(): CurveTexture
        set animSpeedCurve(value: CurveTexture)
        get animOffset(): Vector2
        set animOffset(value: Vector2)
        get animOffsetMin(): float64
        set animOffsetMin(value: float64)
        get animOffsetMax(): float64
        set animOffsetMax(value: float64)
        get animOffsetCurve(): CurveTexture
        set animOffsetCurve(value: CurveTexture)
        get turbulenceEnabled(): boolean
        set turbulenceEnabled(value: boolean)
        get turbulenceNoiseStrength(): float64
        set turbulenceNoiseStrength(value: float64)
        get turbulenceNoiseScale(): float64
        set turbulenceNoiseScale(value: float64)
        get turbulenceNoiseSpeed(): Vector3
        set turbulenceNoiseSpeed(value: Vector3)
        get turbulenceNoiseSpeedRandom(): float64
        set turbulenceNoiseSpeedRandom(value: float64)
        get turbulenceInfluence(): Vector2
        set turbulenceInfluence(value: Vector2)
        get turbulenceInfluenceMin(): float64
        set turbulenceInfluenceMin(value: float64)
        get turbulenceInfluenceMax(): float64
        set turbulenceInfluenceMax(value: float64)
        get turbulenceInitialDisplacement(): Vector2
        set turbulenceInitialDisplacement(value: Vector2)
        get turbulenceInitialDisplacementMin(): float64
        set turbulenceInitialDisplacementMin(value: float64)
        get turbulenceInitialDisplacementMax(): float64
        set turbulenceInitialDisplacementMax(value: float64)
        get turbulenceInfluenceOverLife(): CurveTexture
        set turbulenceInfluenceOverLife(value: CurveTexture)
        get collisionMode(): int64
        set collisionMode(value: int64)
        get collisionFriction(): float64
        set collisionFriction(value: float64)
        get collisionBounce(): float64
        set collisionBounce(value: float64)
        get collisionUseScale(): boolean
        set collisionUseScale(value: boolean)
        get subEmitterMode(): int64
        set subEmitterMode(value: int64)
        get subEmitterFrequency(): float64
        set subEmitterFrequency(value: float64)
        get subEmitterAmountAtEnd(): int64
        set subEmitterAmountAtEnd(value: int64)
        get subEmitterAmountAtCollision(): int64
        set subEmitterAmountAtCollision(value: int64)
        get subEmitterAmountAtStart(): int64
        set subEmitterAmountAtStart(value: int64)
        get subEmitterKeepVelocity(): boolean
        set subEmitterKeepVelocity(value: boolean)
        readonly emissionShapeChanged: Signal<() => void>
    }
    /** Contains a [Curve2D] path for [PathFollow2D] nodes to follow.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_path2d.html  
     */
    class Path2D<Map extends Record<string, Node> = {}> extends Node2D<Map> {
        constructor(identifier?: any)
        /** A [Curve2D] describing the path. */
        get curve(): Curve2D
        set curve(value: Curve2D)
    }
    /** Contains a [Curve3D] path for [PathFollow3D] nodes to follow.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_path3d.html  
     */
    class Path3D<Map extends Record<string, Node> = {}> extends Node3D<Map> {
        constructor(identifier?: any)
        /** A [Curve3D] describing the path. */
        get curve(): Curve3D
        set curve(value: Curve3D)
        readonly curveChanged: Signal<() => void>
    }
    /** Point sampler for a [Path2D].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_pathfollow2d.html  
     */
    class PathFollow2D<Map extends Record<string, Node> = {}> extends Node2D<Map> {
        constructor(identifier?: any)
        /** The distance along the path, in pixels. Changing this value sets this node's position to a point within the path. */
        get progress(): float64
        set progress(value: float64)
        get progressRatio(): float64
        set progressRatio(value: float64)
        get hOffset(): float64
        set hOffset(value: float64)
        get vOffset(): float64
        set vOffset(value: float64)
        
        /** If `true`, this node rotates to follow the path, with the +X direction facing forward on the path. */
        get rotates(): boolean
        set rotates(value: boolean)
        get cubicInterp(): boolean
        set cubicInterp(value: boolean)
        
        /** If `true`, any offset outside the path's length will wrap around, instead of stopping at the ends. Use it for cyclic paths. */
        get loop(): boolean
        set loop(value: boolean)
    }
    namespace PathFollow3D {
        enum RotationMode {
            RotationNone = 0,
            RotationY = 1,
            RotationXy = 2,
            RotationXyz = 3,
            RotationOriented = 4,
        }
    }
    /** Point sampler for a [Path3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_pathfollow3d.html  
     */
    class PathFollow3D<Map extends Record<string, Node> = {}> extends Node3D<Map> {
        /** Forbids the PathFollow3D to rotate. */
        static readonly ROTATION_NONE = 0
        
        /** Allows the PathFollow3D to rotate in the Y axis only. */
        static readonly ROTATION_Y = 1
        
        /** Allows the PathFollow3D to rotate in both the X, and Y axes. */
        static readonly ROTATION_XY = 2
        
        /** Allows the PathFollow3D to rotate in any axis. */
        static readonly ROTATION_XYZ = 3
        
        /** Uses the up vector information in a [Curve3D] to enforce orientation. This rotation mode requires the [Path3D]'s [member Curve3D.up_vector_enabled] property to be set to `true`. */
        static readonly ROTATION_ORIENTED = 4
        constructor(identifier?: any)
        static correctPosture(transform: Transform3D, rotationMode: PathFollow3D.RotationMode): Transform3D
        
        /** The distance from the first vertex, measured in 3D units along the path. Changing this value sets this node's position to a point within the path. */
        get progress(): float64
        set progress(value: float64)
        get progressRatio(): float64
        set progressRatio(value: float64)
        get hOffset(): float64
        set hOffset(value: float64)
        get vOffset(): float64
        set vOffset(value: float64)
        get rotationMode(): int64
        set rotationMode(value: int64)
        get useModelFront(): boolean
        set useModelFront(value: boolean)
        get cubicInterp(): boolean
        set cubicInterp(value: boolean)
        
        /** If `true`, any offset outside the path's length will wrap around, instead of stopping at the ends. Use it for cyclic paths. */
        get loop(): boolean
        set loop(value: boolean)
        get tiltEnabled(): boolean
        set tiltEnabled(value: boolean)
    }
    /** A [RigidBody2D]-derived node used to make [Bone2D]s in a [Skeleton2D] react to physics.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicalbone2d.html  
     */
    class PhysicalBone2D<Map extends Record<string, Node> = {}> extends RigidBody2D<Map> {
        constructor(identifier?: any)
        getJoint(): Joint2D
        isSimulatingPhysics(): boolean
        get bone2DNodePath(): NodePath
        set bone2DNodePath(value: NodePath | string)
        get bone2DIndex(): int64
        set bone2DIndex(value: int64)
        get autoConfigureJoint(): boolean
        set autoConfigureJoint(value: boolean)
        get simulatePhysics(): boolean
        set simulatePhysics(value: boolean)
        get followBoneWhenSimulating(): boolean
        set followBoneWhenSimulating(value: boolean)
    }
    namespace PhysicalBone3D {
        enum DampMode {
            DampModeCombine = 0,
            DampModeReplace = 1,
        }
        enum JointType {
            JointTypeNone = 0,
            JointTypePin = 1,
            JointTypeCone = 2,
            JointTypeHinge = 3,
            JointTypeSlider = 4,
            JointType6Dof = 5,
        }
    }
    /** A physics body used to make bones in a [Skeleton3D] react to physics.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicalbone3d.html  
     */
    class PhysicalBone3D<Map extends Record<string, Node> = {}> extends PhysicsBody3D<Map> {
        /** In this mode, the body's damping value is added to any value set in areas or the default value. */
        static readonly DAMP_MODE_COMBINE = 0
        
        /** In this mode, the body's damping value replaces any value set in areas or the default value. */
        static readonly DAMP_MODE_REPLACE = 1
        
        /** No joint is applied to the PhysicsBone3D. */
        static readonly JOINT_TYPE_NONE = 0
        
        /** A pin joint is applied to the PhysicsBone3D. */
        static readonly JOINT_TYPE_PIN = 1
        
        /** A cone joint is applied to the PhysicsBone3D. */
        static readonly JOINT_TYPE_CONE = 2
        
        /** A hinge joint is applied to the PhysicsBone3D. */
        static readonly JOINT_TYPE_HINGE = 3
        
        /** A slider joint is applied to the PhysicsBone3D. */
        static readonly JOINT_TYPE_SLIDER = 4
        
        /** A 6 degrees of freedom joint is applied to the PhysicsBone3D. */
        static readonly JOINT_TYPE_6DOF = 5
        constructor(identifier?: any)
        /* gdvirtual */ _integrateForces(state: PhysicsDirectBodyState3D): void
        applyCentralImpulse(impulse: Vector3): void
        applyImpulse(impulse: Vector3, position: Vector3 = new Vector3(0, 0, 0)): void
        getSimulatePhysics(): boolean
        isSimulatingPhysics(): boolean
        getBoneId(): int64
        get jointType(): int64
        set jointType(value: int64)
        get jointOffset(): Transform3D
        set jointOffset(value: Transform3D)
        get jointRotation(): Vector3
        set jointRotation(value: Vector3)
        get bodyOffset(): Transform3D
        set bodyOffset(value: Transform3D)
        
        /** The body's mass. */
        get mass(): float64
        set mass(value: float64)
        
        /** The body's friction, from `0` (frictionless) to `1` (max friction). */
        get friction(): float64
        set friction(value: float64)
        
        /** The body's bounciness. Values range from `0` (no bounce) to `1` (full bounciness).  
         *      
         *  **Note:** Even with [member bounce] set to `1.0`, some energy will be lost over time due to linear and angular damping. To have a [PhysicalBone3D] that preserves all its energy over time, set [member bounce] to `1.0`, [member linear_damp_mode] to [constant DAMP_MODE_REPLACE], [member linear_damp] to `0.0`, [member angular_damp_mode] to [constant DAMP_MODE_REPLACE], and [member angular_damp] to `0.0`.  
         */
        get bounce(): float64
        set bounce(value: float64)
        get gravityScale(): float64
        set gravityScale(value: float64)
        get customIntegrator(): boolean
        set customIntegrator(value: boolean)
        get linearDampMode(): int64
        set linearDampMode(value: int64)
        get linearDamp(): float64
        set linearDamp(value: float64)
        get angularDampMode(): int64
        set angularDampMode(value: int64)
        get angularDamp(): float64
        set angularDamp(value: float64)
        get linearVelocity(): Vector3
        set linearVelocity(value: Vector3)
        get angularVelocity(): Vector3
        set angularVelocity(value: Vector3)
        get canSleep(): boolean
        set canSleep(value: boolean)
    }
    /** Node that can be the parent of [PhysicalBone3D] and can apply the simulation results to [Skeleton3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicalbonesimulator3d.html  
     */
    class PhysicalBoneSimulator3D<Map extends Record<string, Node> = {}> extends SkeletonModifier3D<Map> {
        constructor(identifier?: any)
        isSimulatingPhysics(): boolean
        physicalBonesStopSimulation(): void
        physicalBonesStartSimulation(bones: GArray = []): void
        physicalBonesAddCollisionException(exception: Rid): void
        physicalBonesRemoveCollisionException(exception: Rid): void
    }
    /** A material that defines a sky for a [Sky] resource by a set of physical properties.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicalskymaterial.html  
     */
    class PhysicalSkyMaterial extends Material {
        constructor(identifier?: any)
        get rayleighCoefficient(): float64
        set rayleighCoefficient(value: float64)
        get rayleighColor(): Color
        set rayleighColor(value: Color)
        get mieCoefficient(): float64
        set mieCoefficient(value: float64)
        get mieEccentricity(): float64
        set mieEccentricity(value: float64)
        get mieColor(): Color
        set mieColor(value: Color)
        
        /** Sets the thickness of the atmosphere. High turbidity creates a foggy-looking atmosphere, while a low turbidity results in a clearer atmosphere. */
        get turbidity(): float64
        set turbidity(value: float64)
        get sunDiskScale(): float64
        set sunDiskScale(value: float64)
        get groundColor(): Color
        set groundColor(value: Color)
        get energyMultiplier(): float64
        set energyMultiplier(value: float64)
        get useDebanding(): boolean
        set useDebanding(value: boolean)
        get nightSky(): Texture2D
        set nightSky(value: Texture2D)
    }
    /** Abstract base class for 2D game objects affected by physics.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicsbody2d.html  
     */
    class PhysicsBody2D<Map extends Record<string, Node> = {}> extends CollisionObject2D<Map> {
        constructor(identifier?: any)
        moveAndCollide(motion: Vector2, testOnly: boolean = false, safeMargin: float64 = 0.08, recoveryAsCollision: boolean = false): KinematicCollision2D
        testMove(from: Transform2D, motion: Vector2, collision: KinematicCollision2D = undefined, safeMargin: float64 = 0.08, recoveryAsCollision: boolean = false): boolean
        getGravity(): Vector2
        getCollisionExceptions(): GArray
        addCollisionExceptionWith(body: Node): void
        removeCollisionExceptionWith(body: Node): void
    }
    /** Abstract base class for 3D game objects affected by physics.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicsbody3d.html  
     */
    class PhysicsBody3D<Map extends Record<string, Node> = {}> extends CollisionObject3D<Map> {
        constructor(identifier?: any)
        moveAndCollide(motion: Vector3, testOnly: boolean = false, safeMargin: float64 = 0.001, recoveryAsCollision: boolean = false, maxCollisions: int64 = 1): KinematicCollision3D
        testMove(from: Transform3D, motion: Vector3, collision: KinematicCollision3D = undefined, safeMargin: float64 = 0.001, recoveryAsCollision: boolean = false, maxCollisions: int64 = 1): boolean
        getGravity(): Vector3
        setAxisLock(axis: PhysicsServer3D.BodyAxis, lock: boolean): void
        getAxisLock(axis: PhysicsServer3D.BodyAxis): boolean
        getCollisionExceptions(): GArray
        addCollisionExceptionWith(body: Node): void
        removeCollisionExceptionWith(body: Node): void
        get axisLockLinearX(): boolean
        set axisLockLinearX(value: boolean)
        get axisLockLinearY(): boolean
        set axisLockLinearY(value: boolean)
        get axisLockLinearZ(): boolean
        set axisLockLinearZ(value: boolean)
        get axisLockAngularX(): boolean
        set axisLockAngularX(value: boolean)
        get axisLockAngularY(): boolean
        set axisLockAngularY(value: boolean)
        get axisLockAngularZ(): boolean
        set axisLockAngularZ(value: boolean)
    }
    /** Provides direct access to a physics body in the [PhysicsServer2D].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicsdirectbodystate2d.html  
     */
    class PhysicsDirectBodyState2D extends GObject {
        constructor(identifier?: any)
        getVelocityAtLocalPosition(localPosition: Vector2): Vector2
        applyCentralImpulse(impulse: Vector2): void
        applyTorqueImpulse(impulse: float64): void
        applyImpulse(impulse: Vector2, position: Vector2 = Vector2.ZERO): void
        applyCentralForce(force: Vector2 = Vector2.ZERO): void
        applyForce(force: Vector2, position: Vector2 = Vector2.ZERO): void
        applyTorque(torque: float64): void
        addConstantCentralForce(force: Vector2 = Vector2.ZERO): void
        addConstantForce(force: Vector2, position: Vector2 = Vector2.ZERO): void
        addConstantTorque(torque: float64): void
        setConstantForce(force: Vector2): void
        getConstantForce(): Vector2
        setConstantTorque(torque: float64): void
        getConstantTorque(): float64
        getContactCount(): int64
        getContactLocalPosition(contactIdx: int64): Vector2
        getContactLocalNormal(contactIdx: int64): Vector2
        getContactLocalShape(contactIdx: int64): int64
        getContactLocalVelocityAtPosition(contactIdx: int64): Vector2
        getContactCollider(contactIdx: int64): Rid
        getContactColliderPosition(contactIdx: int64): Vector2
        getContactColliderId(contactIdx: int64): int64
        getContactColliderObject(contactIdx: int64): GObject
        getContactColliderShape(contactIdx: int64): int64
        getContactColliderVelocityAtPosition(contactIdx: int64): Vector2
        getContactImpulse(contactIdx: int64): Vector2
        integrateForces(): void
        getSpaceState(): PhysicsDirectSpaceState2D
        
        /** The timestep (delta) used for the simulation. */
        get step(): float64
        set step(value: float64)
        get inverseMass(): float64
        set inverseMass(value: float64)
        get inverseInertia(): float64
        set inverseInertia(value: float64)
        get totalAngularDamp(): float64
        set totalAngularDamp(value: float64)
        get totalLinearDamp(): float64
        set totalLinearDamp(value: float64)
        get totalGravity(): Vector2
        set totalGravity(value: Vector2)
        get centerOfMass(): Vector2
        set centerOfMass(value: Vector2)
        get centerOfMassLocal(): Vector2
        set centerOfMassLocal(value: Vector2)
        get angularVelocity(): float64
        set angularVelocity(value: float64)
        get linearVelocity(): Vector2
        set linearVelocity(value: Vector2)
        
        /** If `true`, this body is currently sleeping (not active). */
        get sleeping(): boolean
        set sleeping(value: boolean)
        
        /** The body's transformation matrix. */
        get transform(): Transform2D
        set transform(value: Transform2D)
    }
    /** Provides virtual methods that can be overridden to create custom [PhysicsDirectBodyState2D] implementations.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicsdirectbodystate2dextension.html  
     */
    class PhysicsDirectBodyState2DExtension extends PhysicsDirectBodyState2D {
        constructor(identifier?: any)
        /* gdvirtual */ _getTotalGravity(): Vector2
        /* gdvirtual */ _getTotalLinearDamp(): float64
        /* gdvirtual */ _getTotalAngularDamp(): float64
        /* gdvirtual */ _getCenterOfMass(): Vector2
        /* gdvirtual */ _getCenterOfMassLocal(): Vector2
        /* gdvirtual */ _getInverseMass(): float64
        /* gdvirtual */ _getInverseInertia(): float64
        /* gdvirtual */ _setLinearVelocity(velocity: Vector2): void
        /* gdvirtual */ _getLinearVelocity(): Vector2
        /* gdvirtual */ _setAngularVelocity(velocity: float64): void
        /* gdvirtual */ _getAngularVelocity(): float64
        /* gdvirtual */ _setTransform(transform: Transform2D): void
        /* gdvirtual */ _getTransform(): Transform2D
        /* gdvirtual */ _getVelocityAtLocalPosition(localPosition: Vector2): Vector2
        /* gdvirtual */ _applyCentralImpulse(impulse: Vector2): void
        /* gdvirtual */ _applyImpulse(impulse: Vector2, position: Vector2): void
        /* gdvirtual */ _applyTorqueImpulse(impulse: float64): void
        /* gdvirtual */ _applyCentralForce(force: Vector2): void
        /* gdvirtual */ _applyForce(force: Vector2, position: Vector2): void
        /* gdvirtual */ _applyTorque(torque: float64): void
        /* gdvirtual */ _addConstantCentralForce(force: Vector2): void
        /* gdvirtual */ _addConstantForce(force: Vector2, position: Vector2): void
        /* gdvirtual */ _addConstantTorque(torque: float64): void
        /* gdvirtual */ _setConstantForce(force: Vector2): void
        /* gdvirtual */ _getConstantForce(): Vector2
        /* gdvirtual */ _setConstantTorque(torque: float64): void
        /* gdvirtual */ _getConstantTorque(): float64
        /* gdvirtual */ _setSleepState(enabled: boolean): void
        /* gdvirtual */ _isSleeping(): boolean
        /* gdvirtual */ _getContactCount(): int64
        /* gdvirtual */ _getContactLocalPosition(contactIdx: int64): Vector2
        /* gdvirtual */ _getContactLocalNormal(contactIdx: int64): Vector2
        /* gdvirtual */ _getContactLocalShape(contactIdx: int64): int64
        /* gdvirtual */ _getContactLocalVelocityAtPosition(contactIdx: int64): Vector2
        /* gdvirtual */ _getContactCollider(contactIdx: int64): Rid
        /* gdvirtual */ _getContactColliderPosition(contactIdx: int64): Vector2
        /* gdvirtual */ _getContactColliderId(contactIdx: int64): int64
        /* gdvirtual */ _getContactColliderObject(contactIdx: int64): GObject
        /* gdvirtual */ _getContactColliderShape(contactIdx: int64): int64
        /* gdvirtual */ _getContactColliderVelocityAtPosition(contactIdx: int64): Vector2
        /* gdvirtual */ _getContactImpulse(contactIdx: int64): Vector2
        /* gdvirtual */ _getStep(): float64
        /* gdvirtual */ _integrateForces(): void
        /* gdvirtual */ _getSpaceState(): PhysicsDirectSpaceState2D
    }
    /** Provides direct access to a physics body in the [PhysicsServer3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicsdirectbodystate3d.html  
     */
    class PhysicsDirectBodyState3D extends GObject {
        constructor(identifier?: any)
        getVelocityAtLocalPosition(localPosition: Vector3): Vector3
        applyCentralImpulse(impulse: Vector3 = new Vector3(0, 0, 0)): void
        applyImpulse(impulse: Vector3, position: Vector3 = new Vector3(0, 0, 0)): void
        applyTorqueImpulse(impulse: Vector3): void
        applyCentralForce(force: Vector3 = new Vector3(0, 0, 0)): void
        applyForce(force: Vector3, position: Vector3 = new Vector3(0, 0, 0)): void
        applyTorque(torque: Vector3): void
        addConstantCentralForce(force: Vector3 = new Vector3(0, 0, 0)): void
        addConstantForce(force: Vector3, position: Vector3 = new Vector3(0, 0, 0)): void
        addConstantTorque(torque: Vector3): void
        setConstantForce(force: Vector3): void
        getConstantForce(): Vector3
        setConstantTorque(torque: Vector3): void
        getConstantTorque(): Vector3
        getContactCount(): int64
        getContactLocalPosition(contactIdx: int64): Vector3
        getContactLocalNormal(contactIdx: int64): Vector3
        getContactImpulse(contactIdx: int64): Vector3
        getContactLocalShape(contactIdx: int64): int64
        getContactLocalVelocityAtPosition(contactIdx: int64): Vector3
        getContactCollider(contactIdx: int64): Rid
        getContactColliderPosition(contactIdx: int64): Vector3
        getContactColliderId(contactIdx: int64): int64
        getContactColliderObject(contactIdx: int64): GObject
        getContactColliderShape(contactIdx: int64): int64
        getContactColliderVelocityAtPosition(contactIdx: int64): Vector3
        integrateForces(): void
        getSpaceState(): PhysicsDirectSpaceState3D
        
        /** The timestep (delta) used for the simulation. */
        get step(): float64
        set step(value: float64)
        get inverseMass(): float64
        set inverseMass(value: float64)
        get totalAngularDamp(): float64
        set totalAngularDamp(value: float64)
        get totalLinearDamp(): float64
        set totalLinearDamp(value: float64)
        get inverseInertia(): Vector3
        set inverseInertia(value: Vector3)
        get inverseInertiaTensor(): Basis
        set inverseInertiaTensor(value: Basis)
        get totalGravity(): Vector3
        set totalGravity(value: Vector3)
        get centerOfMass(): Vector3
        set centerOfMass(value: Vector3)
        get centerOfMassLocal(): Vector3
        set centerOfMassLocal(value: Vector3)
        get principalInertiaAxes(): Basis
        set principalInertiaAxes(value: Basis)
        get angularVelocity(): Vector3
        set angularVelocity(value: Vector3)
        get linearVelocity(): Vector3
        set linearVelocity(value: Vector3)
        
        /** If `true`, this body is currently sleeping (not active). */
        get sleeping(): boolean
        set sleeping(value: boolean)
        
        /** The body's transformation matrix. */
        get transform(): Transform3D
        set transform(value: Transform3D)
    }
    /** Provides virtual methods that can be overridden to create custom [PhysicsDirectBodyState3D] implementations.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicsdirectbodystate3dextension.html  
     */
    class PhysicsDirectBodyState3DExtension extends PhysicsDirectBodyState3D {
        constructor(identifier?: any)
        /* gdvirtual */ _getTotalGravity(): Vector3
        /* gdvirtual */ _getTotalLinearDamp(): float64
        /* gdvirtual */ _getTotalAngularDamp(): float64
        /* gdvirtual */ _getCenterOfMass(): Vector3
        /* gdvirtual */ _getCenterOfMassLocal(): Vector3
        /* gdvirtual */ _getPrincipalInertiaAxes(): Basis
        /* gdvirtual */ _getInverseMass(): float64
        /* gdvirtual */ _getInverseInertia(): Vector3
        /* gdvirtual */ _getInverseInertiaTensor(): Basis
        /* gdvirtual */ _setLinearVelocity(velocity: Vector3): void
        /* gdvirtual */ _getLinearVelocity(): Vector3
        /* gdvirtual */ _setAngularVelocity(velocity: Vector3): void
        /* gdvirtual */ _getAngularVelocity(): Vector3
        /* gdvirtual */ _setTransform(transform: Transform3D): void
        /* gdvirtual */ _getTransform(): Transform3D
        /* gdvirtual */ _getVelocityAtLocalPosition(localPosition: Vector3): Vector3
        /* gdvirtual */ _applyCentralImpulse(impulse: Vector3): void
        /* gdvirtual */ _applyImpulse(impulse: Vector3, position: Vector3): void
        /* gdvirtual */ _applyTorqueImpulse(impulse: Vector3): void
        /* gdvirtual */ _applyCentralForce(force: Vector3): void
        /* gdvirtual */ _applyForce(force: Vector3, position: Vector3): void
        /* gdvirtual */ _applyTorque(torque: Vector3): void
        /* gdvirtual */ _addConstantCentralForce(force: Vector3): void
        /* gdvirtual */ _addConstantForce(force: Vector3, position: Vector3): void
        /* gdvirtual */ _addConstantTorque(torque: Vector3): void
        /* gdvirtual */ _setConstantForce(force: Vector3): void
        /* gdvirtual */ _getConstantForce(): Vector3
        /* gdvirtual */ _setConstantTorque(torque: Vector3): void
        /* gdvirtual */ _getConstantTorque(): Vector3
        /* gdvirtual */ _setSleepState(enabled: boolean): void
        /* gdvirtual */ _isSleeping(): boolean
        /* gdvirtual */ _getContactCount(): int64
        /* gdvirtual */ _getContactLocalPosition(contactIdx: int64): Vector3
        /* gdvirtual */ _getContactLocalNormal(contactIdx: int64): Vector3
        /* gdvirtual */ _getContactImpulse(contactIdx: int64): Vector3
        /* gdvirtual */ _getContactLocalShape(contactIdx: int64): int64
        /* gdvirtual */ _getContactLocalVelocityAtPosition(contactIdx: int64): Vector3
        /* gdvirtual */ _getContactCollider(contactIdx: int64): Rid
        /* gdvirtual */ _getContactColliderPosition(contactIdx: int64): Vector3
        /* gdvirtual */ _getContactColliderId(contactIdx: int64): int64
        /* gdvirtual */ _getContactColliderObject(contactIdx: int64): GObject
        /* gdvirtual */ _getContactColliderShape(contactIdx: int64): int64
        /* gdvirtual */ _getContactColliderVelocityAtPosition(contactIdx: int64): Vector3
        /* gdvirtual */ _getStep(): float64
        /* gdvirtual */ _integrateForces(): void
        /* gdvirtual */ _getSpaceState(): PhysicsDirectSpaceState3D
    }
    /** Provides direct access to a physics space in the [PhysicsServer2D].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicsdirectspacestate2d.html  
     */
    class PhysicsDirectSpaceState2D extends GObject {
        constructor(identifier?: any)
        intersectPoint(parameters: PhysicsPointQueryParameters2D, maxResults: int64 = 32): GArray
        intersectRay(parameters: PhysicsRayQueryParameters2D): GDictionary
        intersectShape(parameters: PhysicsShapeQueryParameters2D, maxResults: int64 = 32): GArray
        castMotion(parameters: PhysicsShapeQueryParameters2D): PackedFloat32Array
        collideShape(parameters: PhysicsShapeQueryParameters2D, maxResults: int64 = 32): GArray
        getRestInfo(parameters: PhysicsShapeQueryParameters2D): GDictionary
    }
    /** Provides virtual methods that can be overridden to create custom [PhysicsDirectSpaceState2D] implementations.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicsdirectspacestate2dextension.html  
     */
    class PhysicsDirectSpaceState2DExtension extends PhysicsDirectSpaceState2D {
        constructor(identifier?: any)
        /* gdvirtual */ _intersectRay(from: Vector2, to: Vector2, collisionMask: int64, collideWithBodies: boolean, collideWithAreas: boolean, hitFromInside: boolean, result: int64): boolean
        /* gdvirtual */ _intersectPoint(position: Vector2, canvasInstanceId: int64, collisionMask: int64, collideWithBodies: boolean, collideWithAreas: boolean, results: int64, maxResults: int64): int64
        /* gdvirtual */ _intersectShape(shapeRid: Rid, transform: Transform2D, motion: Vector2, margin: float64, collisionMask: int64, collideWithBodies: boolean, collideWithAreas: boolean, result: int64, maxResults: int64): int64
        /* gdvirtual */ _castMotion(shapeRid: Rid, transform: Transform2D, motion: Vector2, margin: float64, collisionMask: int64, collideWithBodies: boolean, collideWithAreas: boolean, closestSafe: int64, closestUnsafe: int64): boolean
        /* gdvirtual */ _collideShape(shapeRid: Rid, transform: Transform2D, motion: Vector2, margin: float64, collisionMask: int64, collideWithBodies: boolean, collideWithAreas: boolean, results: int64, maxResults: int64, resultCount: int64): boolean
        /* gdvirtual */ _restInfo(shapeRid: Rid, transform: Transform2D, motion: Vector2, margin: float64, collisionMask: int64, collideWithBodies: boolean, collideWithAreas: boolean, restInfo: int64): boolean
        isBodyExcludedFromQuery(body: Rid): boolean
    }
    /** Provides direct access to a physics space in the [PhysicsServer3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicsdirectspacestate3d.html  
     */
    class PhysicsDirectSpaceState3D extends GObject {
        constructor(identifier?: any)
        intersectPoint(parameters: PhysicsPointQueryParameters3D, maxResults: int64 = 32): GArray
        intersectRay(parameters: PhysicsRayQueryParameters3D): GDictionary
        intersectShape(parameters: PhysicsShapeQueryParameters3D, maxResults: int64 = 32): GArray
        castMotion(parameters: PhysicsShapeQueryParameters3D): PackedFloat32Array
        collideShape(parameters: PhysicsShapeQueryParameters3D, maxResults: int64 = 32): GArray
        getRestInfo(parameters: PhysicsShapeQueryParameters3D): GDictionary
    }
    /** Provides virtual methods that can be overridden to create custom [PhysicsDirectSpaceState3D] implementations.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicsdirectspacestate3dextension.html  
     */
    class PhysicsDirectSpaceState3DExtension extends PhysicsDirectSpaceState3D {
        constructor(identifier?: any)
        /* gdvirtual */ _intersectRay(from: Vector3, to: Vector3, collisionMask: int64, collideWithBodies: boolean, collideWithAreas: boolean, hitFromInside: boolean, hitBackFaces: boolean, pickRay: boolean, result: int64): boolean
        /* gdvirtual */ _intersectPoint(position: Vector3, collisionMask: int64, collideWithBodies: boolean, collideWithAreas: boolean, results: int64, maxResults: int64): int64
        /* gdvirtual */ _intersectShape(shapeRid: Rid, transform: Transform3D, motion: Vector3, margin: float64, collisionMask: int64, collideWithBodies: boolean, collideWithAreas: boolean, resultCount: int64, maxResults: int64): int64
        /* gdvirtual */ _castMotion(shapeRid: Rid, transform: Transform3D, motion: Vector3, margin: float64, collisionMask: int64, collideWithBodies: boolean, collideWithAreas: boolean, closestSafe: int64, closestUnsafe: int64, info: int64): boolean
        /* gdvirtual */ _collideShape(shapeRid: Rid, transform: Transform3D, motion: Vector3, margin: float64, collisionMask: int64, collideWithBodies: boolean, collideWithAreas: boolean, results: int64, maxResults: int64, resultCount: int64): boolean
        /* gdvirtual */ _restInfo(shapeRid: Rid, transform: Transform3D, motion: Vector3, margin: float64, collisionMask: int64, collideWithBodies: boolean, collideWithAreas: boolean, restInfo: int64): boolean
        /* gdvirtual */ _getClosestPointToObjectVolume(object: Rid, point: Vector3): Vector3
        isBodyExcludedFromQuery(body: Rid): boolean
    }
    /** Holds physics-related properties of a surface, namely its roughness and bounciness.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicsmaterial.html  
     */
    class PhysicsMaterial extends Resource {
        constructor(identifier?: any)
        /** The body's friction. Values range from `0` (frictionless) to `1` (maximum friction). */
        get friction(): float64
        set friction(value: float64)
        
        /** If `true`, the physics engine will use the friction of the object marked as "rough" when two objects collide. If `false`, the physics engine will use the lowest friction of all colliding objects instead. If `true` for both colliding objects, the physics engine will use the highest friction. */
        get rough(): boolean
        set rough(value: boolean)
        
        /** The body's bounciness. Values range from `0` (no bounce) to `1` (full bounciness).  
         *      
         *  **Note:** Even with [member bounce] set to `1.0`, some energy will be lost over time due to linear and angular damping. To have a physics body that preserves all its energy over time, set [member bounce] to `1.0`, the body's linear damp mode to **Replace** (if applicable), its linear damp to `0.0`, its angular damp mode to **Replace** (if applicable), and its angular damp to `0.0`.  
         */
        get bounce(): float64
        set bounce(value: float64)
        
        /** If `true`, subtracts the bounciness from the colliding object's bounciness instead of adding it. */
        get absorbent(): boolean
        set absorbent(value: boolean)
    }
    /** Provides parameters for [method PhysicsDirectSpaceState2D.intersect_point].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicspointqueryparameters2d.html  
     */
    class PhysicsPointQueryParameters2D extends RefCounted {
        constructor(identifier?: any)
        /** The position being queried for, in global coordinates. */
        get position(): Vector2
        set position(value: Vector2)
        get canvasInstanceId(): int64
        set canvasInstanceId(value: int64)
        get collisionMask(): int64
        set collisionMask(value: int64)
        
        /** The list of object [RID]s that will be excluded from collisions. Use [method CollisionObject2D.get_rid] to get the [RID] associated with a [CollisionObject2D]-derived node.  
         *      
         *  **Note:** The returned array is copied and any changes to it will not update the original property value. To update the value you need to modify the returned array, and then assign it to the property again.  
         */
        get exclude(): GArray
        set exclude(value: GArray)
        get collideWithBodies(): boolean
        set collideWithBodies(value: boolean)
        get collideWithAreas(): boolean
        set collideWithAreas(value: boolean)
    }
    /** Provides parameters for [method PhysicsDirectSpaceState3D.intersect_point].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicspointqueryparameters3d.html  
     */
    class PhysicsPointQueryParameters3D extends RefCounted {
        constructor(identifier?: any)
        /** The position being queried for, in global coordinates. */
        get position(): Vector3
        set position(value: Vector3)
        get collisionMask(): int64
        set collisionMask(value: int64)
        
        /** The list of object [RID]s that will be excluded from collisions. Use [method CollisionObject3D.get_rid] to get the [RID] associated with a [CollisionObject3D]-derived node.  
         *      
         *  **Note:** The returned array is copied and any changes to it will not update the original property value. To update the value you need to modify the returned array, and then assign it to the property again.  
         */
        get exclude(): GArray
        set exclude(value: GArray)
        get collideWithBodies(): boolean
        set collideWithBodies(value: boolean)
        get collideWithAreas(): boolean
        set collideWithAreas(value: boolean)
    }
    /** Provides parameters for [method PhysicsDirectSpaceState2D.intersect_ray].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicsrayqueryparameters2d.html  
     */
    class PhysicsRayQueryParameters2D extends RefCounted {
        constructor(identifier?: any)
        /** Returns a new, pre-configured [PhysicsRayQueryParameters2D] object. Use it to quickly create query parameters using the most common options.  
         *    
         */
        static create(from: Vector2, to: Vector2, collisionMask: int64 = 4294967295, exclude: GArray = []): PhysicsRayQueryParameters2D
        
        /** The starting point of the ray being queried for, in global coordinates. */
        get from(): Vector2
        set from(value: Vector2)
        
        /** The ending point of the ray being queried for, in global coordinates. */
        get to(): Vector2
        set to(value: Vector2)
        get collisionMask(): int64
        set collisionMask(value: int64)
        
        /** The list of object [RID]s that will be excluded from collisions. Use [method CollisionObject2D.get_rid] to get the [RID] associated with a [CollisionObject2D]-derived node.  
         *      
         *  **Note:** The returned array is copied and any changes to it will not update the original property value. To update the value you need to modify the returned array, and then assign it to the property again.  
         */
        get exclude(): GArray
        set exclude(value: GArray)
        get collideWithBodies(): boolean
        set collideWithBodies(value: boolean)
        get collideWithAreas(): boolean
        set collideWithAreas(value: boolean)
        get hitFromInside(): boolean
        set hitFromInside(value: boolean)
    }
    /** Provides parameters for [method PhysicsDirectSpaceState3D.intersect_ray].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicsrayqueryparameters3d.html  
     */
    class PhysicsRayQueryParameters3D extends RefCounted {
        constructor(identifier?: any)
        /** Returns a new, pre-configured [PhysicsRayQueryParameters3D] object. Use it to quickly create query parameters using the most common options.  
         *    
         */
        static create(from: Vector3, to: Vector3, collisionMask: int64 = 4294967295, exclude: GArray = []): PhysicsRayQueryParameters3D
        
        /** The starting point of the ray being queried for, in global coordinates. */
        get from(): Vector3
        set from(value: Vector3)
        
        /** The ending point of the ray being queried for, in global coordinates. */
        get to(): Vector3
        set to(value: Vector3)
        get collisionMask(): int64
        set collisionMask(value: int64)
        
        /** The list of object [RID]s that will be excluded from collisions. Use [method CollisionObject3D.get_rid] to get the [RID] associated with a [CollisionObject3D]-derived node.  
         *      
         *  **Note:** The returned array is copied and any changes to it will not update the original property value. To update the value you need to modify the returned array, and then assign it to the property again.  
         */
        get exclude(): GArray
        set exclude(value: GArray)
        get collideWithBodies(): boolean
        set collideWithBodies(value: boolean)
        get collideWithAreas(): boolean
        set collideWithAreas(value: boolean)
        get hitFromInside(): boolean
        set hitFromInside(value: boolean)
        get hitBackFaces(): boolean
        set hitBackFaces(value: boolean)
    }
    /** Provides virtual methods that can be overridden to create custom [PhysicsServer2D] implementations.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicsserver2dextension.html  
     */
    class PhysicsServer2DExtension extends PhysicsServer2D {
        constructor(identifier?: any)
        /* gdvirtual */ _worldBoundaryShapeCreate(): Rid
        /* gdvirtual */ _separationRayShapeCreate(): Rid
        /* gdvirtual */ _segmentShapeCreate(): Rid
        /* gdvirtual */ _circleShapeCreate(): Rid
        /* gdvirtual */ _rectangleShapeCreate(): Rid
        /* gdvirtual */ _capsuleShapeCreate(): Rid
        /* gdvirtual */ _convexPolygonShapeCreate(): Rid
        /* gdvirtual */ _concavePolygonShapeCreate(): Rid
        /* gdvirtual */ _shapeSetData(shape: Rid, data: any): void
        /* gdvirtual */ _shapeSetCustomSolverBias(shape: Rid, bias: float64): void
        /* gdvirtual */ _shapeGetType(shape: Rid): PhysicsServer2D.ShapeType
        /* gdvirtual */ _shapeGetData(shape: Rid): any
        /* gdvirtual */ _shapeGetCustomSolverBias(shape: Rid): float64
        /* gdvirtual */ _shapeCollide(shapeA: Rid, xformA: Transform2D, motionA: Vector2, shapeB: Rid, xformB: Transform2D, motionB: Vector2, results: int64, resultMax: int64, resultCount: int64): boolean
        /* gdvirtual */ _spaceCreate(): Rid
        /* gdvirtual */ _spaceSetActive(space: Rid, active: boolean): void
        /* gdvirtual */ _spaceIsActive(space: Rid): boolean
        /* gdvirtual */ _spaceSetParam(space: Rid, param: PhysicsServer2D.SpaceParameter, value: float64): void
        /* gdvirtual */ _spaceGetParam(space: Rid, param: PhysicsServer2D.SpaceParameter): float64
        /* gdvirtual */ _spaceGetDirectState(space: Rid): PhysicsDirectSpaceState2D
        /* gdvirtual */ _spaceSetDebugContacts(space: Rid, maxContacts: int64): void
        /* gdvirtual */ _spaceGetContacts(space: Rid): PackedVector2Array
        /* gdvirtual */ _spaceGetContactCount(space: Rid): int64
        /* gdvirtual */ _areaCreate(): Rid
        /* gdvirtual */ _areaSetSpace(area: Rid, space: Rid): void
        /* gdvirtual */ _areaGetSpace(area: Rid): Rid
        /* gdvirtual */ _areaAddShape(area: Rid, shape: Rid, transform: Transform2D, disabled: boolean): void
        /* gdvirtual */ _areaSetShape(area: Rid, shapeIdx: int64, shape: Rid): void
        /* gdvirtual */ _areaSetShapeTransform(area: Rid, shapeIdx: int64, transform: Transform2D): void
        /* gdvirtual */ _areaSetShapeDisabled(area: Rid, shapeIdx: int64, disabled: boolean): void
        /* gdvirtual */ _areaGetShapeCount(area: Rid): int64
        /* gdvirtual */ _areaGetShape(area: Rid, shapeIdx: int64): Rid
        /* gdvirtual */ _areaGetShapeTransform(area: Rid, shapeIdx: int64): Transform2D
        /* gdvirtual */ _areaRemoveShape(area: Rid, shapeIdx: int64): void
        /* gdvirtual */ _areaClearShapes(area: Rid): void
        /* gdvirtual */ _areaAttachObjectInstanceId(area: Rid, id: int64): void
        /* gdvirtual */ _areaGetObjectInstanceId(area: Rid): int64
        /* gdvirtual */ _areaAttachCanvasInstanceId(area: Rid, id: int64): void
        /* gdvirtual */ _areaGetCanvasInstanceId(area: Rid): int64
        /* gdvirtual */ _areaSetParam(area: Rid, param: PhysicsServer2D.AreaParameter, value: any): void
        /* gdvirtual */ _areaSetTransform(area: Rid, transform: Transform2D): void
        /* gdvirtual */ _areaGetParam(area: Rid, param: PhysicsServer2D.AreaParameter): any
        /* gdvirtual */ _areaGetTransform(area: Rid): Transform2D
        /* gdvirtual */ _areaSetCollisionLayer(area: Rid, layer: int64): void
        /* gdvirtual */ _areaGetCollisionLayer(area: Rid): int64
        /* gdvirtual */ _areaSetCollisionMask(area: Rid, mask: int64): void
        /* gdvirtual */ _areaGetCollisionMask(area: Rid): int64
        /* gdvirtual */ _areaSetMonitorable(area: Rid, monitorable: boolean): void
        /* gdvirtual */ _areaSetPickable(area: Rid, pickable: boolean): void
        /* gdvirtual */ _areaSetMonitorCallback(area: Rid, callback: Callable): void
        /* gdvirtual */ _areaSetAreaMonitorCallback(area: Rid, callback: Callable): void
        /* gdvirtual */ _bodyCreate(): Rid
        /* gdvirtual */ _bodySetSpace(body: Rid, space: Rid): void
        /* gdvirtual */ _bodyGetSpace(body: Rid): Rid
        /* gdvirtual */ _bodySetMode(body: Rid, mode: PhysicsServer2D.BodyMode): void
        /* gdvirtual */ _bodyGetMode(body: Rid): PhysicsServer2D.BodyMode
        /* gdvirtual */ _bodyAddShape(body: Rid, shape: Rid, transform: Transform2D, disabled: boolean): void
        /* gdvirtual */ _bodySetShape(body: Rid, shapeIdx: int64, shape: Rid): void
        /* gdvirtual */ _bodySetShapeTransform(body: Rid, shapeIdx: int64, transform: Transform2D): void
        /* gdvirtual */ _bodyGetShapeCount(body: Rid): int64
        /* gdvirtual */ _bodyGetShape(body: Rid, shapeIdx: int64): Rid
        /* gdvirtual */ _bodyGetShapeTransform(body: Rid, shapeIdx: int64): Transform2D
        /* gdvirtual */ _bodySetShapeDisabled(body: Rid, shapeIdx: int64, disabled: boolean): void
        /* gdvirtual */ _bodySetShapeAsOneWayCollision(body: Rid, shapeIdx: int64, enable: boolean, margin: float64): void
        /* gdvirtual */ _bodyRemoveShape(body: Rid, shapeIdx: int64): void
        /* gdvirtual */ _bodyClearShapes(body: Rid): void
        /* gdvirtual */ _bodyAttachObjectInstanceId(body: Rid, id: int64): void
        /* gdvirtual */ _bodyGetObjectInstanceId(body: Rid): int64
        /* gdvirtual */ _bodyAttachCanvasInstanceId(body: Rid, id: int64): void
        /* gdvirtual */ _bodyGetCanvasInstanceId(body: Rid): int64
        /* gdvirtual */ _bodySetContinuousCollisionDetectionMode(body: Rid, mode: any /*PhysicsServer2D.ccdMode*/): void
        /* gdvirtual */ _bodyGetContinuousCollisionDetectionMode(body: Rid): any /*PhysicsServer2D.ccdMode*/
        /* gdvirtual */ _bodySetCollisionLayer(body: Rid, layer: int64): void
        /* gdvirtual */ _bodyGetCollisionLayer(body: Rid): int64
        /* gdvirtual */ _bodySetCollisionMask(body: Rid, mask: int64): void
        /* gdvirtual */ _bodyGetCollisionMask(body: Rid): int64
        /* gdvirtual */ _bodySetCollisionPriority(body: Rid, priority: float64): void
        /* gdvirtual */ _bodyGetCollisionPriority(body: Rid): float64
        /* gdvirtual */ _bodySetParam(body: Rid, param: PhysicsServer2D.BodyParameter, value: any): void
        /* gdvirtual */ _bodyGetParam(body: Rid, param: PhysicsServer2D.BodyParameter): any
        /* gdvirtual */ _bodyResetMassProperties(body: Rid): void
        /* gdvirtual */ _bodySetState(body: Rid, state: PhysicsServer2D.BodyState, value: any): void
        /* gdvirtual */ _bodyGetState(body: Rid, state: PhysicsServer2D.BodyState): any
        /* gdvirtual */ _bodyApplyCentralImpulse(body: Rid, impulse: Vector2): void
        /* gdvirtual */ _bodyApplyTorqueImpulse(body: Rid, impulse: float64): void
        /* gdvirtual */ _bodyApplyImpulse(body: Rid, impulse: Vector2, position: Vector2): void
        /* gdvirtual */ _bodyApplyCentralForce(body: Rid, force: Vector2): void
        /* gdvirtual */ _bodyApplyForce(body: Rid, force: Vector2, position: Vector2): void
        /* gdvirtual */ _bodyApplyTorque(body: Rid, torque: float64): void
        /* gdvirtual */ _bodyAddConstantCentralForce(body: Rid, force: Vector2): void
        /* gdvirtual */ _bodyAddConstantForce(body: Rid, force: Vector2, position: Vector2): void
        /* gdvirtual */ _bodyAddConstantTorque(body: Rid, torque: float64): void
        /* gdvirtual */ _bodySetConstantForce(body: Rid, force: Vector2): void
        /* gdvirtual */ _bodyGetConstantForce(body: Rid): Vector2
        /* gdvirtual */ _bodySetConstantTorque(body: Rid, torque: float64): void
        /* gdvirtual */ _bodyGetConstantTorque(body: Rid): float64
        /* gdvirtual */ _bodySetAxisVelocity(body: Rid, axisVelocity: Vector2): void
        /* gdvirtual */ _bodyAddCollisionException(body: Rid, exceptedBody: Rid): void
        /* gdvirtual */ _bodyRemoveCollisionException(body: Rid, exceptedBody: Rid): void
        /* gdvirtual */ _bodyGetCollisionExceptions(body: Rid): GArray
        /* gdvirtual */ _bodySetMaxContactsReported(body: Rid, amount: int64): void
        /* gdvirtual */ _bodyGetMaxContactsReported(body: Rid): int64
        /* gdvirtual */ _bodySetContactsReportedDepthThreshold(body: Rid, threshold: float64): void
        /* gdvirtual */ _bodyGetContactsReportedDepthThreshold(body: Rid): float64
        /* gdvirtual */ _bodySetOmitForceIntegration(body: Rid, enable: boolean): void
        /* gdvirtual */ _bodyIsOmittingForceIntegration(body: Rid): boolean
        /* gdvirtual */ _bodySetStateSyncCallback(body: Rid, callable: Callable): void
        /* gdvirtual */ _bodySetForceIntegrationCallback(body: Rid, callable: Callable, userdata: any): void
        /* gdvirtual */ _bodyCollideShape(body: Rid, bodyShape: int64, shape: Rid, shapeXform: Transform2D, motion: Vector2, results: int64, resultMax: int64, resultCount: int64): boolean
        /* gdvirtual */ _bodySetPickable(body: Rid, pickable: boolean): void
        /* gdvirtual */ _bodyGetDirectState(body: Rid): PhysicsDirectBodyState2D
        /* gdvirtual */ _bodyTestMotion(body: Rid, from: Transform2D, motion: Vector2, margin: float64, collideSeparationRay: boolean, recoveryAsCollision: boolean, result: int64): boolean
        /* gdvirtual */ _jointCreate(): Rid
        /* gdvirtual */ _jointClear(joint: Rid): void
        /* gdvirtual */ _jointSetParam(joint: Rid, param: PhysicsServer2D.JointParam, value: float64): void
        /* gdvirtual */ _jointGetParam(joint: Rid, param: PhysicsServer2D.JointParam): float64
        /* gdvirtual */ _jointDisableCollisionsBetweenBodies(joint: Rid, disable: boolean): void
        /* gdvirtual */ _jointIsDisabledCollisionsBetweenBodies(joint: Rid): boolean
        /* gdvirtual */ _jointMakePin(joint: Rid, anchor: Vector2, bodyA: Rid, bodyB: Rid): void
        /* gdvirtual */ _jointMakeGroove(joint: Rid, aGroove1: Vector2, aGroove2: Vector2, bAnchor: Vector2, bodyA: Rid, bodyB: Rid): void
        /* gdvirtual */ _jointMakeDampedSpring(joint: Rid, anchorA: Vector2, anchorB: Vector2, bodyA: Rid, bodyB: Rid): void
        /* gdvirtual */ _pinJointSetFlag(joint: Rid, flag: PhysicsServer2D.PinJointFlag, enabled: boolean): void
        /* gdvirtual */ _pinJointGetFlag(joint: Rid, flag: PhysicsServer2D.PinJointFlag): boolean
        /* gdvirtual */ _pinJointSetParam(joint: Rid, param: PhysicsServer2D.PinJointParam, value: float64): void
        /* gdvirtual */ _pinJointGetParam(joint: Rid, param: PhysicsServer2D.PinJointParam): float64
        /* gdvirtual */ _dampedSpringJointSetParam(joint: Rid, param: PhysicsServer2D.DampedSpringParam, value: float64): void
        /* gdvirtual */ _dampedSpringJointGetParam(joint: Rid, param: PhysicsServer2D.DampedSpringParam): float64
        /* gdvirtual */ _jointGetType(joint: Rid): PhysicsServer2D.JointType
        /* gdvirtual */ _freeRid(rid: Rid): void
        /* gdvirtual */ _setActive(active: boolean): void
        
        /** Called when the main loop is initialized and creates a new instance of this physics server. See also [method MainLoop._initialize] and [method _finish].  
         *  Overridable version of [PhysicsServer2D]'s internal `init` method.  
         */
        /* gdvirtual */ _init(): void
        
        /** Called every physics step to process the physics simulation. [param step] is the time elapsed since the last physics step, in seconds. It is usually the same as [method Node.get_physics_process_delta_time].  
         *  Overridable version of [PhysicsServer2D]'s internal [code skip-lint]step` method.  
         */
        /* gdvirtual */ _step(step: float64): void
        
        /** Called to indicate that the physics server is synchronizing and cannot access physics states if running on a separate thread. See also [method _end_sync].  
         *  Overridable version of [PhysicsServer2D]'s internal `sync` method.  
         */
        /* gdvirtual */ _sync(): void
        /* gdvirtual */ _flushQueries(): void
        /* gdvirtual */ _endSync(): void
        
        /** Called when the main loop finalizes to shut down the physics server. See also [method MainLoop._finalize] and [method _init].  
         *  Overridable version of [PhysicsServer2D]'s internal `finish` method.  
         */
        /* gdvirtual */ _finish(): void
        /* gdvirtual */ _isFlushingQueries(): boolean
        /* gdvirtual */ _getProcessInfo(processInfo: PhysicsServer2D.ProcessInfo): int64
        bodyTestMotionIsExcludingBody(body: Rid): boolean
        bodyTestMotionIsExcludingObject(object: int64): boolean
    }
    /** Provides virtual methods that can be overridden to create custom [PhysicsServer3D] implementations.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicsserver3dextension.html  
     */
    class PhysicsServer3DExtension extends PhysicsServer3D {
        constructor(identifier?: any)
        /* gdvirtual */ _worldBoundaryShapeCreate(): Rid
        /* gdvirtual */ _separationRayShapeCreate(): Rid
        /* gdvirtual */ _sphereShapeCreate(): Rid
        /* gdvirtual */ _boxShapeCreate(): Rid
        /* gdvirtual */ _capsuleShapeCreate(): Rid
        /* gdvirtual */ _cylinderShapeCreate(): Rid
        /* gdvirtual */ _convexPolygonShapeCreate(): Rid
        /* gdvirtual */ _concavePolygonShapeCreate(): Rid
        /* gdvirtual */ _heightmapShapeCreate(): Rid
        /* gdvirtual */ _customShapeCreate(): Rid
        /* gdvirtual */ _shapeSetData(shape: Rid, data: any): void
        /* gdvirtual */ _shapeSetCustomSolverBias(shape: Rid, bias: float64): void
        /* gdvirtual */ _shapeSetMargin(shape: Rid, margin: float64): void
        /* gdvirtual */ _shapeGetMargin(shape: Rid): float64
        /* gdvirtual */ _shapeGetType(shape: Rid): PhysicsServer3D.ShapeType
        /* gdvirtual */ _shapeGetData(shape: Rid): any
        /* gdvirtual */ _shapeGetCustomSolverBias(shape: Rid): float64
        /* gdvirtual */ _spaceCreate(): Rid
        /* gdvirtual */ _spaceSetActive(space: Rid, active: boolean): void
        /* gdvirtual */ _spaceIsActive(space: Rid): boolean
        /* gdvirtual */ _spaceSetParam(space: Rid, param: PhysicsServer3D.SpaceParameter, value: float64): void
        /* gdvirtual */ _spaceGetParam(space: Rid, param: PhysicsServer3D.SpaceParameter): float64
        /* gdvirtual */ _spaceGetDirectState(space: Rid): PhysicsDirectSpaceState3D
        /* gdvirtual */ _spaceSetDebugContacts(space: Rid, maxContacts: int64): void
        /* gdvirtual */ _spaceGetContacts(space: Rid): PackedVector3Array
        /* gdvirtual */ _spaceGetContactCount(space: Rid): int64
        /* gdvirtual */ _areaCreate(): Rid
        /* gdvirtual */ _areaSetSpace(area: Rid, space: Rid): void
        /* gdvirtual */ _areaGetSpace(area: Rid): Rid
        /* gdvirtual */ _areaAddShape(area: Rid, shape: Rid, transform: Transform3D, disabled: boolean): void
        /* gdvirtual */ _areaSetShape(area: Rid, shapeIdx: int64, shape: Rid): void
        /* gdvirtual */ _areaSetShapeTransform(area: Rid, shapeIdx: int64, transform: Transform3D): void
        /* gdvirtual */ _areaSetShapeDisabled(area: Rid, shapeIdx: int64, disabled: boolean): void
        /* gdvirtual */ _areaGetShapeCount(area: Rid): int64
        /* gdvirtual */ _areaGetShape(area: Rid, shapeIdx: int64): Rid
        /* gdvirtual */ _areaGetShapeTransform(area: Rid, shapeIdx: int64): Transform3D
        /* gdvirtual */ _areaRemoveShape(area: Rid, shapeIdx: int64): void
        /* gdvirtual */ _areaClearShapes(area: Rid): void
        /* gdvirtual */ _areaAttachObjectInstanceId(area: Rid, id: int64): void
        /* gdvirtual */ _areaGetObjectInstanceId(area: Rid): int64
        /* gdvirtual */ _areaSetParam(area: Rid, param: PhysicsServer3D.AreaParameter, value: any): void
        /* gdvirtual */ _areaSetTransform(area: Rid, transform: Transform3D): void
        /* gdvirtual */ _areaGetParam(area: Rid, param: PhysicsServer3D.AreaParameter): any
        /* gdvirtual */ _areaGetTransform(area: Rid): Transform3D
        /* gdvirtual */ _areaSetCollisionLayer(area: Rid, layer: int64): void
        /* gdvirtual */ _areaGetCollisionLayer(area: Rid): int64
        /* gdvirtual */ _areaSetCollisionMask(area: Rid, mask: int64): void
        /* gdvirtual */ _areaGetCollisionMask(area: Rid): int64
        /* gdvirtual */ _areaSetMonitorable(area: Rid, monitorable: boolean): void
        /* gdvirtual */ _areaSetRayPickable(area: Rid, enable: boolean): void
        /* gdvirtual */ _areaSetMonitorCallback(area: Rid, callback: Callable): void
        /* gdvirtual */ _areaSetAreaMonitorCallback(area: Rid, callback: Callable): void
        /* gdvirtual */ _bodyCreate(): Rid
        /* gdvirtual */ _bodySetSpace(body: Rid, space: Rid): void
        /* gdvirtual */ _bodyGetSpace(body: Rid): Rid
        /* gdvirtual */ _bodySetMode(body: Rid, mode: PhysicsServer3D.BodyMode): void
        /* gdvirtual */ _bodyGetMode(body: Rid): PhysicsServer3D.BodyMode
        /* gdvirtual */ _bodyAddShape(body: Rid, shape: Rid, transform: Transform3D, disabled: boolean): void
        /* gdvirtual */ _bodySetShape(body: Rid, shapeIdx: int64, shape: Rid): void
        /* gdvirtual */ _bodySetShapeTransform(body: Rid, shapeIdx: int64, transform: Transform3D): void
        /* gdvirtual */ _bodySetShapeDisabled(body: Rid, shapeIdx: int64, disabled: boolean): void
        /* gdvirtual */ _bodyGetShapeCount(body: Rid): int64
        /* gdvirtual */ _bodyGetShape(body: Rid, shapeIdx: int64): Rid
        /* gdvirtual */ _bodyGetShapeTransform(body: Rid, shapeIdx: int64): Transform3D
        /* gdvirtual */ _bodyRemoveShape(body: Rid, shapeIdx: int64): void
        /* gdvirtual */ _bodyClearShapes(body: Rid): void
        /* gdvirtual */ _bodyAttachObjectInstanceId(body: Rid, id: int64): void
        /* gdvirtual */ _bodyGetObjectInstanceId(body: Rid): int64
        /* gdvirtual */ _bodySetEnableContinuousCollisionDetection(body: Rid, enable: boolean): void
        /* gdvirtual */ _bodyIsContinuousCollisionDetectionEnabled(body: Rid): boolean
        /* gdvirtual */ _bodySetCollisionLayer(body: Rid, layer: int64): void
        /* gdvirtual */ _bodyGetCollisionLayer(body: Rid): int64
        /* gdvirtual */ _bodySetCollisionMask(body: Rid, mask: int64): void
        /* gdvirtual */ _bodyGetCollisionMask(body: Rid): int64
        /* gdvirtual */ _bodySetCollisionPriority(body: Rid, priority: float64): void
        /* gdvirtual */ _bodyGetCollisionPriority(body: Rid): float64
        /* gdvirtual */ _bodySetUserFlags(body: Rid, flags: int64): void
        /* gdvirtual */ _bodyGetUserFlags(body: Rid): int64
        /* gdvirtual */ _bodySetParam(body: Rid, param: PhysicsServer3D.BodyParameter, value: any): void
        /* gdvirtual */ _bodyGetParam(body: Rid, param: PhysicsServer3D.BodyParameter): any
        /* gdvirtual */ _bodyResetMassProperties(body: Rid): void
        /* gdvirtual */ _bodySetState(body: Rid, state: PhysicsServer3D.BodyState, value: any): void
        /* gdvirtual */ _bodyGetState(body: Rid, state: PhysicsServer3D.BodyState): any
        /* gdvirtual */ _bodyApplyCentralImpulse(body: Rid, impulse: Vector3): void
        /* gdvirtual */ _bodyApplyImpulse(body: Rid, impulse: Vector3, position: Vector3): void
        /* gdvirtual */ _bodyApplyTorqueImpulse(body: Rid, impulse: Vector3): void
        /* gdvirtual */ _bodyApplyCentralForce(body: Rid, force: Vector3): void
        /* gdvirtual */ _bodyApplyForce(body: Rid, force: Vector3, position: Vector3): void
        /* gdvirtual */ _bodyApplyTorque(body: Rid, torque: Vector3): void
        /* gdvirtual */ _bodyAddConstantCentralForce(body: Rid, force: Vector3): void
        /* gdvirtual */ _bodyAddConstantForce(body: Rid, force: Vector3, position: Vector3): void
        /* gdvirtual */ _bodyAddConstantTorque(body: Rid, torque: Vector3): void
        /* gdvirtual */ _bodySetConstantForce(body: Rid, force: Vector3): void
        /* gdvirtual */ _bodyGetConstantForce(body: Rid): Vector3
        /* gdvirtual */ _bodySetConstantTorque(body: Rid, torque: Vector3): void
        /* gdvirtual */ _bodyGetConstantTorque(body: Rid): Vector3
        /* gdvirtual */ _bodySetAxisVelocity(body: Rid, axisVelocity: Vector3): void
        /* gdvirtual */ _bodySetAxisLock(body: Rid, axis: PhysicsServer3D.BodyAxis, lock: boolean): void
        /* gdvirtual */ _bodyIsAxisLocked(body: Rid, axis: PhysicsServer3D.BodyAxis): boolean
        /* gdvirtual */ _bodyAddCollisionException(body: Rid, exceptedBody: Rid): void
        /* gdvirtual */ _bodyRemoveCollisionException(body: Rid, exceptedBody: Rid): void
        /* gdvirtual */ _bodyGetCollisionExceptions(body: Rid): GArray
        /* gdvirtual */ _bodySetMaxContactsReported(body: Rid, amount: int64): void
        /* gdvirtual */ _bodyGetMaxContactsReported(body: Rid): int64
        /* gdvirtual */ _bodySetContactsReportedDepthThreshold(body: Rid, threshold: float64): void
        /* gdvirtual */ _bodyGetContactsReportedDepthThreshold(body: Rid): float64
        /* gdvirtual */ _bodySetOmitForceIntegration(body: Rid, enable: boolean): void
        /* gdvirtual */ _bodyIsOmittingForceIntegration(body: Rid): boolean
        /* gdvirtual */ _bodySetStateSyncCallback(body: Rid, callable: Callable): void
        /* gdvirtual */ _bodySetForceIntegrationCallback(body: Rid, callable: Callable, userdata: any): void
        /* gdvirtual */ _bodySetRayPickable(body: Rid, enable: boolean): void
        /* gdvirtual */ _bodyTestMotion(body: Rid, from: Transform3D, motion: Vector3, margin: float64, maxCollisions: int64, collideSeparationRay: boolean, recoveryAsCollision: boolean, result: int64): boolean
        /* gdvirtual */ _bodyGetDirectState(body: Rid): PhysicsDirectBodyState3D
        /* gdvirtual */ _softBodyCreate(): Rid
        /* gdvirtual */ _softBodyUpdateRenderingServer(body: Rid, renderingServerHandler: PhysicsServer3DRenderingServerHandler): void
        /* gdvirtual */ _softBodySetSpace(body: Rid, space: Rid): void
        /* gdvirtual */ _softBodyGetSpace(body: Rid): Rid
        /* gdvirtual */ _softBodySetRayPickable(body: Rid, enable: boolean): void
        /* gdvirtual */ _softBodySetCollisionLayer(body: Rid, layer: int64): void
        /* gdvirtual */ _softBodyGetCollisionLayer(body: Rid): int64
        /* gdvirtual */ _softBodySetCollisionMask(body: Rid, mask: int64): void
        /* gdvirtual */ _softBodyGetCollisionMask(body: Rid): int64
        /* gdvirtual */ _softBodyAddCollisionException(body: Rid, bodyB: Rid): void
        /* gdvirtual */ _softBodyRemoveCollisionException(body: Rid, bodyB: Rid): void
        /* gdvirtual */ _softBodyGetCollisionExceptions(body: Rid): GArray
        /* gdvirtual */ _softBodySetState(body: Rid, state: PhysicsServer3D.BodyState, variant: any): void
        /* gdvirtual */ _softBodyGetState(body: Rid, state: PhysicsServer3D.BodyState): any
        /* gdvirtual */ _softBodySetTransform(body: Rid, transform: Transform3D): void
        /* gdvirtual */ _softBodySetSimulationPrecision(body: Rid, simulationPrecision: int64): void
        /* gdvirtual */ _softBodyGetSimulationPrecision(body: Rid): int64
        /* gdvirtual */ _softBodySetTotalMass(body: Rid, totalMass: float64): void
        /* gdvirtual */ _softBodyGetTotalMass(body: Rid): float64
        /* gdvirtual */ _softBodySetLinearStiffness(body: Rid, linearStiffness: float64): void
        /* gdvirtual */ _softBodyGetLinearStiffness(body: Rid): float64
        /* gdvirtual */ _softBodySetPressureCoefficient(body: Rid, pressureCoefficient: float64): void
        /* gdvirtual */ _softBodyGetPressureCoefficient(body: Rid): float64
        /* gdvirtual */ _softBodySetDampingCoefficient(body: Rid, dampingCoefficient: float64): void
        /* gdvirtual */ _softBodyGetDampingCoefficient(body: Rid): float64
        /* gdvirtual */ _softBodySetDragCoefficient(body: Rid, dragCoefficient: float64): void
        /* gdvirtual */ _softBodyGetDragCoefficient(body: Rid): float64
        /* gdvirtual */ _softBodySetMesh(body: Rid, mesh: Rid): void
        /* gdvirtual */ _softBodyGetBounds(body: Rid): Aabb
        /* gdvirtual */ _softBodyMovePoint(body: Rid, pointIndex: int64, globalPosition: Vector3): void
        /* gdvirtual */ _softBodyGetPointGlobalPosition(body: Rid, pointIndex: int64): Vector3
        /* gdvirtual */ _softBodyRemoveAllPinnedPoints(body: Rid): void
        /* gdvirtual */ _softBodyPinPoint(body: Rid, pointIndex: int64, pin: boolean): void
        /* gdvirtual */ _softBodyIsPointPinned(body: Rid, pointIndex: int64): boolean
        /* gdvirtual */ _jointCreate(): Rid
        /* gdvirtual */ _jointClear(joint: Rid): void
        /* gdvirtual */ _jointMakePin(joint: Rid, bodyA: Rid, localA: Vector3, bodyB: Rid, localB: Vector3): void
        /* gdvirtual */ _pinJointSetParam(joint: Rid, param: PhysicsServer3D.PinJointParam, value: float64): void
        /* gdvirtual */ _pinJointGetParam(joint: Rid, param: PhysicsServer3D.PinJointParam): float64
        /* gdvirtual */ _pinJointSetLocalA(joint: Rid, localA: Vector3): void
        /* gdvirtual */ _pinJointGetLocalA(joint: Rid): Vector3
        /* gdvirtual */ _pinJointSetLocalB(joint: Rid, localB: Vector3): void
        /* gdvirtual */ _pinJointGetLocalB(joint: Rid): Vector3
        /* gdvirtual */ _jointMakeHinge(joint: Rid, bodyA: Rid, hingeA: Transform3D, bodyB: Rid, hingeB: Transform3D): void
        /* gdvirtual */ _jointMakeHingeSimple(joint: Rid, bodyA: Rid, pivotA: Vector3, axisA: Vector3, bodyB: Rid, pivotB: Vector3, axisB: Vector3): void
        /* gdvirtual */ _hingeJointSetParam(joint: Rid, param: PhysicsServer3D.HingeJointParam, value: float64): void
        /* gdvirtual */ _hingeJointGetParam(joint: Rid, param: PhysicsServer3D.HingeJointParam): float64
        /* gdvirtual */ _hingeJointSetFlag(joint: Rid, flag: PhysicsServer3D.HingeJointFlag, enabled: boolean): void
        /* gdvirtual */ _hingeJointGetFlag(joint: Rid, flag: PhysicsServer3D.HingeJointFlag): boolean
        /* gdvirtual */ _jointMakeSlider(joint: Rid, bodyA: Rid, localRefA: Transform3D, bodyB: Rid, localRefB: Transform3D): void
        /* gdvirtual */ _sliderJointSetParam(joint: Rid, param: PhysicsServer3D.SliderJointParam, value: float64): void
        /* gdvirtual */ _sliderJointGetParam(joint: Rid, param: PhysicsServer3D.SliderJointParam): float64
        /* gdvirtual */ _jointMakeConeTwist(joint: Rid, bodyA: Rid, localRefA: Transform3D, bodyB: Rid, localRefB: Transform3D): void
        /* gdvirtual */ _coneTwistJointSetParam(joint: Rid, param: PhysicsServer3D.ConeTwistJointParam, value: float64): void
        /* gdvirtual */ _coneTwistJointGetParam(joint: Rid, param: PhysicsServer3D.ConeTwistJointParam): float64
        /* gdvirtual */ _jointMakeGeneric6Dof(joint: Rid, bodyA: Rid, localRefA: Transform3D, bodyB: Rid, localRefB: Transform3D): void
        /* gdvirtual */ _generic6DofJointSetParam(joint: Rid, axis: Vector3.Axis, param: any /*PhysicsServer3D.g6DofJointAxisParam*/, value: float64): void
        /* gdvirtual */ _generic6DofJointGetParam(joint: Rid, axis: Vector3.Axis, param: any /*PhysicsServer3D.g6DofJointAxisParam*/): float64
        /* gdvirtual */ _generic6DofJointSetFlag(joint: Rid, axis: Vector3.Axis, flag: any /*PhysicsServer3D.g6DofJointAxisFlag*/, enable: boolean): void
        /* gdvirtual */ _generic6DofJointGetFlag(joint: Rid, axis: Vector3.Axis, flag: any /*PhysicsServer3D.g6DofJointAxisFlag*/): boolean
        /* gdvirtual */ _jointGetType(joint: Rid): PhysicsServer3D.JointType
        /* gdvirtual */ _jointSetSolverPriority(joint: Rid, priority: int64): void
        /* gdvirtual */ _jointGetSolverPriority(joint: Rid): int64
        /* gdvirtual */ _jointDisableCollisionsBetweenBodies(joint: Rid, disable: boolean): void
        /* gdvirtual */ _jointIsDisabledCollisionsBetweenBodies(joint: Rid): boolean
        /* gdvirtual */ _freeRid(rid: Rid): void
        /* gdvirtual */ _setActive(active: boolean): void
        /* gdvirtual */ _init(): void
        /* gdvirtual */ _step(step: float64): void
        /* gdvirtual */ _sync(): void
        /* gdvirtual */ _flushQueries(): void
        /* gdvirtual */ _endSync(): void
        /* gdvirtual */ _finish(): void
        /* gdvirtual */ _isFlushingQueries(): boolean
        /* gdvirtual */ _getProcessInfo(processInfo: PhysicsServer3D.ProcessInfo): int64
        bodyTestMotionIsExcludingBody(body: Rid): boolean
        bodyTestMotionIsExcludingObject(object: int64): boolean
    }
    /** A class used to provide [method PhysicsServer3DExtension._soft_body_update_rendering_server] with a rendering handler for soft bodies.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicsserver3drenderingserverhandler.html  
     */
    class PhysicsServer3DRenderingServerHandler extends GObject {
        constructor(identifier?: any)
        /* gdvirtual */ _setVertex(vertexId: int64, vertex: Vector3): void
        /* gdvirtual */ _setNormal(vertexId: int64, normal: Vector3): void
        /* gdvirtual */ _setAabb(aabb: Aabb): void
        setVertex(vertexId: int64, vertex: Vector3): void
        setNormal(vertexId: int64, normal: Vector3): void
        setAabb(aabb: Aabb): void
    }
    /** Provides parameters for [method PhysicsDirectSpaceState2D.intersect_shape].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicsshapequeryparameters2d.html  
     */
    class PhysicsShapeQueryParameters2D extends RefCounted {
        constructor(identifier?: any)
        get collisionMask(): int64
        set collisionMask(value: int64)
        
        /** The list of object [RID]s that will be excluded from collisions. Use [method CollisionObject2D.get_rid] to get the [RID] associated with a [CollisionObject2D]-derived node.  
         *      
         *  **Note:** The returned array is copied and any changes to it will not update the original property value. To update the value you need to modify the returned array, and then assign it to the property again.  
         */
        get exclude(): GArray
        set exclude(value: GArray)
        
        /** The collision margin for the shape. */
        get margin(): float64
        set margin(value: float64)
        
        /** The motion of the shape being queried for. */
        get motion(): Vector2
        set motion(value: Vector2)
        
        /** The [Shape2D] that will be used for collision/intersection queries. This stores the actual reference which avoids the shape to be released while being used for queries, so always prefer using this over [member shape_rid]. */
        get shape(): Shape2D
        set shape(value: Shape2D)
        get shapeRid(): Rid
        set shapeRid(value: Rid)
        
        /** The queried shape's transform matrix. */
        get transform(): Transform2D
        set transform(value: Transform2D)
        get collideWithBodies(): boolean
        set collideWithBodies(value: boolean)
        get collideWithAreas(): boolean
        set collideWithAreas(value: boolean)
    }
    /** Provides parameters for [method PhysicsDirectSpaceState3D.intersect_shape].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicsshapequeryparameters3d.html  
     */
    class PhysicsShapeQueryParameters3D extends RefCounted {
        constructor(identifier?: any)
        get collisionMask(): int64
        set collisionMask(value: int64)
        
        /** The list of object [RID]s that will be excluded from collisions. Use [method CollisionObject3D.get_rid] to get the [RID] associated with a [CollisionObject3D]-derived node.  
         *      
         *  **Note:** The returned array is copied and any changes to it will not update the original property value. To update the value you need to modify the returned array, and then assign it to the property again.  
         */
        get exclude(): GArray
        set exclude(value: GArray)
        
        /** The collision margin for the shape. */
        get margin(): float64
        set margin(value: float64)
        
        /** The motion of the shape being queried for. */
        get motion(): Vector3
        set motion(value: Vector3)
        
        /** The [Shape3D] that will be used for collision/intersection queries. This stores the actual reference which avoids the shape to be released while being used for queries, so always prefer using this over [member shape_rid]. */
        get shape(): Shape3D
        set shape(value: Shape3D)
        get shapeRid(): Rid
        set shapeRid(value: Rid)
        
        /** The queried shape's transform matrix. */
        get transform(): Transform3D
        set transform(value: Transform3D)
        get collideWithBodies(): boolean
        set collideWithBodies(value: boolean)
        get collideWithAreas(): boolean
        set collideWithAreas(value: boolean)
    }
    /** Provides parameters for [method PhysicsServer2D.body_test_motion].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicstestmotionparameters2d.html  
     */
    class PhysicsTestMotionParameters2D extends RefCounted {
        constructor(identifier?: any)
        /** Transform in global space where the motion should start. Usually set to [member Node2D.global_transform] for the current body's transform. */
        get from(): Transform2D
        set from(value: Transform2D)
        
        /** Motion vector to define the length and direction of the motion to test. */
        get motion(): Vector2
        set motion(value: Vector2)
        
        /** Increases the size of the shapes involved in the collision detection. */
        get margin(): float64
        set margin(value: float64)
        get collideSeparationRay(): boolean
        set collideSeparationRay(value: boolean)
        get excludeBodies(): GArray
        set excludeBodies(value: GArray)
        get excludeObjects(): GArray
        set excludeObjects(value: GArray)
        get recoveryAsCollision(): boolean
        set recoveryAsCollision(value: boolean)
    }
    /** Provides parameters for [method PhysicsServer3D.body_test_motion].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicstestmotionparameters3d.html  
     */
    class PhysicsTestMotionParameters3D extends RefCounted {
        constructor(identifier?: any)
        /** Transform in global space where the motion should start. Usually set to [member Node3D.global_transform] for the current body's transform. */
        get from(): Transform3D
        set from(value: Transform3D)
        
        /** Motion vector to define the length and direction of the motion to test. */
        get motion(): Vector3
        set motion(value: Vector3)
        
        /** Increases the size of the shapes involved in the collision detection. */
        get margin(): float64
        set margin(value: float64)
        get maxCollisions(): int64
        set maxCollisions(value: int64)
        get collideSeparationRay(): boolean
        set collideSeparationRay(value: boolean)
        get excludeBodies(): GArray
        set excludeBodies(value: GArray)
        get excludeObjects(): GArray
        set excludeObjects(value: GArray)
        get recoveryAsCollision(): boolean
        set recoveryAsCollision(value: boolean)
    }
    /** Describes the motion and collision result from [method PhysicsServer2D.body_test_motion].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicstestmotionresult2d.html  
     */
    class PhysicsTestMotionResult2D extends RefCounted {
        constructor(identifier?: any)
        getTravel(): Vector2
        getRemainder(): Vector2
        getCollisionPoint(): Vector2
        getCollisionNormal(): Vector2
        getColliderVelocity(): Vector2
        getColliderId(): int64
        getColliderRid(): Rid
        getCollider(): GObject
        getColliderShape(): int64
        getCollisionLocalShape(): int64
        getCollisionDepth(): float64
        getCollisionSafeFraction(): float64
        getCollisionUnsafeFraction(): float64
    }
    /** Describes the motion and collision result from [method PhysicsServer3D.body_test_motion].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicstestmotionresult3d.html  
     */
    class PhysicsTestMotionResult3D extends RefCounted {
        constructor(identifier?: any)
        getTravel(): Vector3
        getRemainder(): Vector3
        getCollisionSafeFraction(): float64
        getCollisionUnsafeFraction(): float64
        getCollisionCount(): int64
        getCollisionPoint(collisionIndex: int64 = 0): Vector3
        getCollisionNormal(collisionIndex: int64 = 0): Vector3
        getColliderVelocity(collisionIndex: int64 = 0): Vector3
        getColliderId(collisionIndex: int64 = 0): int64
        getColliderRid(collisionIndex: int64 = 0): Rid
        getCollider(collisionIndex: int64 = 0): GObject
        getColliderShape(collisionIndex: int64 = 0): int64
        getCollisionLocalShape(collisionIndex: int64 = 0): int64
        getCollisionDepth(collisionIndex: int64 = 0): float64
    }
    /** A physics joint that attaches two 2D physics bodies at a single point, allowing them to freely rotate.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_pinjoint2d.html  
     */
    class PinJoint2D<Map extends Record<string, Node> = {}> extends Joint2D<Map> {
        constructor(identifier?: any)
        /** The higher this value, the more the bond to the pinned partner can flex. */
        get softness(): float64
        set softness(value: float64)
        get angularLimitEnabled(): boolean
        set angularLimitEnabled(value: boolean)
        get angularLimitLower(): float64
        set angularLimitLower(value: float64)
        get angularLimitUpper(): float64
        set angularLimitUpper(value: float64)
        get motorEnabled(): boolean
        set motorEnabled(value: boolean)
        get motorTargetVelocity(): float64
        set motorTargetVelocity(value: float64)
    }
    namespace PinJoint3D {
        enum Param {
            ParamBias = 0,
            ParamDamping = 1,
            ParamImpulseClamp = 2,
        }
    }
    /** A physics joint that attaches two 3D physics bodies at a single point, allowing them to freely rotate.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_pinjoint3d.html  
     */
    class PinJoint3D<Map extends Record<string, Node> = {}> extends Joint3D<Map> {
        /** The force with which the pinned objects stay in positional relation to each other. The higher, the stronger. */
        static readonly PARAM_BIAS = 0
        
        /** The force with which the pinned objects stay in velocity relation to each other. The higher, the stronger. */
        static readonly PARAM_DAMPING = 1
        
        /** If above 0, this value is the maximum value for an impulse that this Joint3D produces. */
        static readonly PARAM_IMPULSE_CLAMP = 2
        constructor(identifier?: any)
        setParam(param: PinJoint3D.Param, value: float64): void
        getParam(param: PinJoint3D.Param): float64
        
        /** The force with which the pinned objects stay in positional relation to each other. The higher, the stronger. */
        get "params/bias"(): float64
        set "params/bias"(value: float64)
        
        /** The force with which the pinned objects stay in velocity relation to each other. The higher, the stronger. */
        get "params/damping"(): float64
        set "params/damping"(value: float64)
        get "params/impulseClamp"(): float64
        set "params/impulseClamp"(value: float64)
    }
    /** A [Cubemap] without image data.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_placeholdercubemap.html  
     */
    class PlaceholderCubemap extends PlaceholderTextureLayered {
        constructor(identifier?: any)
    }
    /** A [CubemapArray] without image data.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_placeholdercubemaparray.html  
     */
    class PlaceholderCubemapArray extends PlaceholderTextureLayered {
        constructor(identifier?: any)
    }
    /** Placeholder class for a material.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_placeholdermaterial.html  
     */
    class PlaceholderMaterial extends Material {
        constructor(identifier?: any)
    }
    /** Placeholder class for a mesh.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_placeholdermesh.html  
     */
    class PlaceholderMesh extends Mesh {
        constructor(identifier?: any)
        /** The smallest [AABB] enclosing this mesh in local space. */
        get aabb(): Aabb
        set aabb(value: Aabb)
    }
    /** Placeholder class for a 2-dimensional texture.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_placeholdertexture2d.html  
     */
    class PlaceholderTexture2D extends Texture2D {
        constructor(identifier?: any)
        /** The texture's size (in pixels). */
        get size(): Vector2
        set size(value: Vector2)
    }
    /** Placeholder class for a 2-dimensional texture array.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_placeholdertexture2darray.html  
     */
    class PlaceholderTexture2DArray extends PlaceholderTextureLayered {
        constructor(identifier?: any)
    }
    /** Placeholder class for a 3-dimensional texture.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_placeholdertexture3d.html  
     */
    class PlaceholderTexture3D extends Texture3D {
        constructor(identifier?: any)
        /** The texture's size (in pixels). */
        get size(): Vector3I
        set size(value: Vector3I)
    }
    /** Placeholder class for a 2-dimensional texture array.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_placeholdertexturelayered.html  
     */
    class PlaceholderTextureLayered extends TextureLayered {
        constructor(identifier?: any)
        /** The size of each texture layer (in pixels). */
        get size(): Vector2I
        set size(value: Vector2I)
        
        /** The number of layers in the texture array. */
        get layers(): int64
        set layers(value: int64)
    }
    namespace PlaneMesh {
        enum Orientation {
            FaceX = 0,
            FaceY = 1,
            FaceZ = 2,
        }
    }
    /** Class representing a planar [PrimitiveMesh].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_planemesh.html  
     */
    class PlaneMesh extends PrimitiveMesh {
        /** [PlaneMesh] will face the positive X-axis. */
        static readonly FACE_X = 0
        
        /** [PlaneMesh] will face the positive Y-axis. This matches the behavior of the [PlaneMesh] in Godot 3.x. */
        static readonly FACE_Y = 1
        
        /** [PlaneMesh] will face the positive Z-axis. This matches the behavior of the QuadMesh in Godot 3.x. */
        static readonly FACE_Z = 2
        constructor(identifier?: any)
        
        /** Size of the generated plane. */
        get size(): Vector2
        set size(value: Vector2)
        get subdivideWidth(): int64
        set subdivideWidth(value: int64)
        get subdivideDepth(): int64
        set subdivideDepth(value: int64)
        get centerOffset(): Vector3
        set centerOffset(value: Vector3)
        
        /** Direction that the [PlaneMesh] is facing. See [enum Orientation] for options. */
        get orientation(): int64
        set orientation(value: int64)
    }
    /** Positional 2D light source.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_pointlight2d.html  
     */
    class PointLight2D<Map extends Record<string, Node> = {}> extends Light2D<Map> {
        constructor(identifier?: any)
        /** [Texture2D] used for the light's appearance. */
        get texture(): Texture2D | any /*-AnimatedTexture*/ | any /*-AtlasTexture*/ | any /*-CameraTexture*/ | any /*-CanvasTexture*/ | any /*-MeshTexture*/ | any /*-Texture2DRD*/ | any /*-ViewportTexture*/
        set texture(value: Texture2D | any /*-AnimatedTexture*/ | any /*-AtlasTexture*/ | any /*-CameraTexture*/ | any /*-CanvasTexture*/ | any /*-MeshTexture*/ | any /*-Texture2DRD*/ | any /*-ViewportTexture*/)
        
        /** The offset of the light's [member texture]. */
        get offset(): Vector2
        set offset(value: Vector2)
        get textureScale(): float64
        set textureScale(value: float64)
        
        /** The height of the light. Used with 2D normal mapping. The units are in pixels, e.g. if the height is 100, then it will illuminate an object 100 pixels away at a 45° angle to the plane. */
        get height(): float64
        set height(value: float64)
    }
    /** Mesh with a single Point primitive.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_pointmesh.html  
     */
    class PointMesh extends PrimitiveMesh {
        constructor(identifier?: any)
    }
    /** A 2D polygon.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_polygon2d.html  
     */
    class Polygon2D<Map extends Record<string, Node> = {}> extends Node2D<Map> {
        constructor(identifier?: any)
        addBone(path: NodePath | string, weights: PackedFloat32Array | float32[]): void
        getBoneCount(): int64
        getBonePath(index: int64): NodePath
        getBoneWeights(index: int64): PackedFloat32Array
        eraseBone(index: int64): void
        clearBones(): void
        setBonePath(index: int64, path: NodePath | string): void
        setBoneWeights(index: int64, weights: PackedFloat32Array | float32[]): void
        
        /** The polygon's fill color. If [member texture] is set, it will be multiplied by this color. It will also be the default color for vertices not set in [member vertex_colors]. */
        get color(): Color
        set color(value: Color)
        
        /** The offset applied to each vertex. */
        get offset(): Vector2
        set offset(value: Vector2)
        
        /** If `true`, polygon edges will be anti-aliased. */
        get antialiased(): boolean
        set antialiased(value: boolean)
        
        /** The polygon's fill texture. Use [member uv] to set texture coordinates. */
        get texture(): Texture2D
        set texture(value: Texture2D)
        get textureOffset(): Vector2
        set textureOffset(value: Vector2)
        get textureScale(): Vector2
        set textureScale(value: Vector2)
        get textureRotation(): float64
        set textureRotation(value: float64)
        
        /** Path to a [Skeleton2D] node used for skeleton-based deformations of this polygon. If empty or invalid, skeletal deformations will not be used. */
        get skeleton(): NodePath
        set skeleton(value: NodePath | string)
        get invertEnabled(): boolean
        set invertEnabled(value: boolean)
        get invertBorder(): float64
        set invertBorder(value: float64)
        
        /** The polygon's list of vertices. The final point will be connected to the first. */
        get polygon(): PackedVector2Array
        set polygon(value: PackedVector2Array | Vector2[])
        get uV(): PackedVector2Array
        set uV(value: PackedVector2Array | Vector2[])
        get vertexColors(): PackedColorArray
        set vertexColors(value: PackedColorArray | Color[])
        
        /** The list of polygons, in case more than one is being represented. Every individual polygon is stored as a [PackedInt32Array] where each [int] is an index to a point in [member polygon]. If empty, this property will be ignored, and the resulting single polygon will be composed of all points in [member polygon], using the order they are stored in. */
        get polygons(): GArray
        set polygons(value: GArray)
        get bones(): GArray
        set bones(value: GArray)
        get internalVertexCount(): int64
        set internalVertexCount(value: int64)
    }
    /** Flat 2D polygon shape for use with occlusion culling in [OccluderInstance3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_polygonoccluder3d.html  
     */
    class PolygonOccluder3D extends Occluder3D {
        constructor(identifier?: any)
        _hasEditable3DPolygonNoDepth(): boolean
        
        /** The polygon to use for occlusion culling. The polygon can be convex or concave, but it should have as few points as possible to maximize performance.  
         *  The polygon must  *not*  have intersecting lines. Otherwise, triangulation will fail (with an error message printed).  
         */
        get polygon(): PackedVector2Array
        set polygon(value: PackedVector2Array | Vector2[])
    }
    /** @link https://docs.godotengine.org/en/latest/classes/class_polygonpathfinder.html */
    class PolygonPathFinder extends Resource {
        constructor(identifier?: any)
        /** Sets up [PolygonPathFinder] with an array of points that define the vertices of the polygon, and an array of indices that determine the edges of the polygon.  
         *  The length of [param connections] must be even, returns an error if odd.  
         *    
         */
        setup(points: PackedVector2Array | Vector2[], connections: PackedInt32Array | int32[]): void
        findPath(from: Vector2, to: Vector2): PackedVector2Array
        getIntersections(from: Vector2, to: Vector2): PackedVector2Array
        getClosestPoint(point: Vector2): Vector2
        isPointInside(point: Vector2): boolean
        setPointPenalty(idx: int64, penalty: float64): void
        getPointPenalty(idx: int64): float64
        getBounds(): Rect2
        get data(): GDictionary
        set data(value: GDictionary)
    }
    /** Base class for contextual windows and panels with fixed position.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_popup.html  
     */
    class Popup<Map extends Record<string, Node> = {}> extends Window<Map> {
        constructor(identifier?: any)
        readonly popupHide: Signal<() => void>
    }
    /** A modal window used to display a list of options.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_popupmenu.html  
     */
    class PopupMenu<Map extends Record<string, Node> = {}> extends Popup<Map> {
        constructor(identifier?: any)
        activateItemByEvent(event: InputEvent, forGlobalOnly: boolean = false): boolean
        isNativeMenu(): boolean
        addItem(label: string, id: int64 = -1, accel: Key = 0): void
        addIconItem(texture: Texture2D, label: string, id: int64 = -1, accel: Key = 0): void
        addCheckItem(label: string, id: int64 = -1, accel: Key = 0): void
        addIconCheckItem(texture: Texture2D, label: string, id: int64 = -1, accel: Key = 0): void
        addRadioCheckItem(label: string, id: int64 = -1, accel: Key = 0): void
        addIconRadioCheckItem(texture: Texture2D, label: string, id: int64 = -1, accel: Key = 0): void
        addMultistateItem(label: string, maxStates: int64, defaultState: int64 = 0, id: int64 = -1, accel: Key = 0): void
        addShortcut(shortcut: Shortcut, id: int64 = -1, global: boolean = false, allowEcho: boolean = false): void
        addIconShortcut(texture: Texture2D, shortcut: Shortcut, id: int64 = -1, global: boolean = false, allowEcho: boolean = false): void
        addCheckShortcut(shortcut: Shortcut, id: int64 = -1, global: boolean = false): void
        addIconCheckShortcut(texture: Texture2D, shortcut: Shortcut, id: int64 = -1, global: boolean = false): void
        addRadioCheckShortcut(shortcut: Shortcut, id: int64 = -1, global: boolean = false): void
        addIconRadioCheckShortcut(texture: Texture2D, shortcut: Shortcut, id: int64 = -1, global: boolean = false): void
        addSubmenuItem(label: string, submenu: string, id: int64 = -1): void
        addSubmenuNodeItem(label: string, submenu: PopupMenu, id: int64 = -1): void
        setItemText(index: int64, text: string): void
        setItemTextDirection(index: int64, direction: Control.TextDirection): void
        setItemLanguage(index: int64, language: string): void
        setItemIcon(index: int64, icon: Texture2D): void
        setItemIconMaxWidth(index: int64, width: int64): void
        setItemIconModulate(index: int64, modulate: Color): void
        setItemChecked(index: int64, checked: boolean): void
        setItemId(index: int64, id: int64): void
        setItemAccelerator(index: int64, accel: Key): void
        setItemMetadata(index: int64, metadata: any): void
        setItemDisabled(index: int64, disabled: boolean): void
        setItemSubmenu(index: int64, submenu: string): void
        setItemSubmenuNode(index: int64, submenu: PopupMenu): void
        setItemAsSeparator(index: int64, enable: boolean): void
        setItemAsCheckable(index: int64, enable: boolean): void
        setItemAsRadioCheckable(index: int64, enable: boolean): void
        setItemTooltip(index: int64, tooltip: string): void
        setItemShortcut(index: int64, shortcut: Shortcut, global: boolean = false): void
        setItemIndent(index: int64, indent: int64): void
        setItemMultistate(index: int64, state: int64): void
        setItemMultistateMax(index: int64, maxStates: int64): void
        setItemShortcutDisabled(index: int64, disabled: boolean): void
        toggleItemChecked(index: int64): void
        toggleItemMultistate(index: int64): void
        getItemText(index: int64): string
        getItemTextDirection(index: int64): Control.TextDirection
        getItemLanguage(index: int64): string
        getItemIcon(index: int64): Texture2D
        getItemIconMaxWidth(index: int64): int64
        getItemIconModulate(index: int64): Color
        isItemChecked(index: int64): boolean
        getItemId(index: int64): int64
        getItemIndex(id: int64): int64
        getItemAccelerator(index: int64): Key
        getItemMetadata(index: int64): any
        isItemDisabled(index: int64): boolean
        getItemSubmenu(index: int64): string
        getItemSubmenuNode(index: int64): PopupMenu
        isItemSeparator(index: int64): boolean
        isItemCheckable(index: int64): boolean
        isItemRadioCheckable(index: int64): boolean
        isItemShortcutDisabled(index: int64): boolean
        getItemTooltip(index: int64): string
        getItemShortcut(index: int64): Shortcut
        getItemIndent(index: int64): int64
        getItemMultistateMax(index: int64): int64
        getItemMultistate(index: int64): int64
        setFocusedItem(index: int64): void
        getFocusedItem(): int64
        scrollToItem(index: int64): void
        removeItem(index: int64): void
        addSeparator(label: string = '', id: int64 = -1): void
        
        /** Removes all items from the [PopupMenu]. If [param free_submenus] is `true`, the submenu nodes are automatically freed. */
        clear(freeSubmenus: boolean = false): void
        isSystemMenu(): boolean
        get hideOnItemSelection(): boolean
        set hideOnItemSelection(value: boolean)
        get hideOnCheckableItemSelection(): boolean
        set hideOnCheckableItemSelection(value: boolean)
        get hideOnStateItemSelection(): boolean
        set hideOnStateItemSelection(value: boolean)
        get submenuPopupDelay(): float64
        set submenuPopupDelay(value: float64)
        get allowSearch(): boolean
        set allowSearch(value: boolean)
        get systemMenuId(): int64
        set systemMenuId(value: int64)
        get preferNativeMenu(): boolean
        set preferNativeMenu(value: boolean)
        get itemCount(): any /*Items,item_*/
        set itemCount(value: any /*Items,item_*/)
        readonly idPressed: Signal<(id: int64) => void>
        readonly idFocused: Signal<(id: int64) => void>
        readonly indexPressed: Signal<(index: int64) => void>
        readonly menuChanged: Signal<() => void>
    }
    /** A popup with a panel background.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_popuppanel.html  
     */
    class PopupPanel<Map extends Record<string, Node> = {}> extends Popup<Map> {
        constructor(identifier?: any)
    }
    namespace PortableCompressedTexture2D {
        enum CompressionMode {
            CompressionModeLossless = 0,
            CompressionModeLossy = 1,
            CompressionModeBasisUniversal = 2,
            CompressionModeS3Tc = 3,
            CompressionModeEtc2 = 4,
            CompressionModeBptc = 5,
        }
    }
    /** Provides a compressed texture for disk and/or VRAM in a way that is portable.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_portablecompressedtexture2d.html  
     */
    class PortableCompressedTexture2D extends Texture2D {
        static readonly COMPRESSION_MODE_LOSSLESS = 0
        static readonly COMPRESSION_MODE_LOSSY = 1
        static readonly COMPRESSION_MODE_BASIS_UNIVERSAL = 2
        static readonly COMPRESSION_MODE_S3TC = 3
        static readonly COMPRESSION_MODE_ETC2 = 4
        static readonly COMPRESSION_MODE_BPTC = 5
        constructor(identifier?: any)
        createFromImage(image: Image, compressionMode: PortableCompressedTexture2D.CompressionMode, normalMap: boolean = false, lossyQuality: float64 = 0.8): void
        getFormat(): Image.Format
        getCompressionMode(): PortableCompressedTexture2D.CompressionMode
        static setKeepAllCompressedBuffers(keep: boolean): void
        static isKeepingAllCompressedBuffers(): boolean
        get _data(): PackedByteArray
        set _data(value: PackedByteArray | byte[] | ArrayBuffer)
        get sizeOverride(): Vector2
        set sizeOverride(value: Vector2)
        get keepCompressedBuffer(): boolean
        set keepCompressedBuffer(value: boolean)
    }
    /** Base class for all primitive meshes. Handles applying a [Material] to a primitive mesh.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_primitivemesh.html  
     */
    class PrimitiveMesh extends Mesh {
        constructor(identifier?: any)
        /* gdvirtual */ _createMeshArray(): GArray
        getMeshArrays(): GArray
        requestUpdate(): void
        
        /** The current [Material] of the primitive mesh. */
        get material(): BaseMaterial3D | ShaderMaterial
        set material(value: BaseMaterial3D | ShaderMaterial)
        get customAabb(): Aabb
        set customAabb(value: Aabb)
        get flipFaces(): boolean
        set flipFaces(value: boolean)
        get addUV2(): boolean
        set addUV2(value: boolean)
        get uV2Padding(): float64
        set uV2Padding(value: float64)
    }
    /** Class representing a prism-shaped [PrimitiveMesh].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_prismmesh.html  
     */
    class PrismMesh extends PrimitiveMesh {
        constructor(identifier?: any)
        get leftToRight(): float64
        set leftToRight(value: float64)
        
        /** Size of the prism. */
        get size(): Vector3
        set size(value: Vector3)
        get subdivideWidth(): int64
        set subdivideWidth(value: int64)
        get subdivideHeight(): int64
        set subdivideHeight(value: int64)
        get subdivideDepth(): int64
        set subdivideDepth(value: int64)
    }
    /** A material that defines a simple sky for a [Sky] resource.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_proceduralskymaterial.html  
     */
    class ProceduralSkyMaterial extends Material {
        constructor(identifier?: any)
        get skyTopColor(): Color
        set skyTopColor(value: Color)
        get skyHorizonColor(): Color
        set skyHorizonColor(value: Color)
        get skyCurve(): float64
        set skyCurve(value: float64)
        get skyEnergyMultiplier(): float64
        set skyEnergyMultiplier(value: float64)
        get skyCover(): Texture2D
        set skyCover(value: Texture2D)
        get skyCoverModulate(): Color
        set skyCoverModulate(value: Color)
        get groundBottomColor(): Color
        set groundBottomColor(value: Color)
        get groundHorizonColor(): Color
        set groundHorizonColor(value: Color)
        get groundCurve(): float64
        set groundCurve(value: float64)
        get groundEnergyMultiplier(): float64
        set groundEnergyMultiplier(value: float64)
        get sunAngleMax(): float64
        set sunAngleMax(value: float64)
        get sunCurve(): float64
        set sunCurve(value: float64)
        get useDebanding(): boolean
        set useDebanding(value: boolean)
        get energyMultiplier(): float64
        set energyMultiplier(value: float64)
    }
    namespace ProgressBar {
        enum FillMode {
            FillBeginToEnd = 0,
            FillEndToBegin = 1,
            FillTopToBottom = 2,
            FillBottomToTop = 3,
        }
    }
    /** A control used for visual representation of a percentage.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_progressbar.html  
     */
    class ProgressBar<Map extends Record<string, Node> = {}> extends Range<Map> {
        /** The progress bar fills from begin to end horizontally, according to the language direction. If [method Control.is_layout_rtl] returns `false`, it fills from left to right, and if it returns `true`, it fills from right to left. */
        static readonly FILL_BEGIN_TO_END = 0
        
        /** The progress bar fills from end to begin horizontally, according to the language direction. If [method Control.is_layout_rtl] returns `false`, it fills from right to left, and if it returns `true`, it fills from left to right. */
        static readonly FILL_END_TO_BEGIN = 1
        
        /** The progress fills from top to bottom. */
        static readonly FILL_TOP_TO_BOTTOM = 2
        
        /** The progress fills from bottom to top. */
        static readonly FILL_BOTTOM_TO_TOP = 3
        constructor(identifier?: any)
        get fillMode(): int64
        set fillMode(value: int64)
        get showPercentage(): boolean
        set showPercentage(value: boolean)
        
        /** When set to `true`, the progress bar indicates that something is happening with an animation, but does not show the fill percentage or value. */
        get indeterminate(): boolean
        set indeterminate(value: boolean)
        get editorPreviewIndeterminate(): boolean
        set editorPreviewIndeterminate(value: boolean)
    }
    /** Interpolates an [Object]'s property over time.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_propertytweener.html  
     */
    class PropertyTweener extends Tweener {
        constructor(identifier?: any)
        /** Sets a custom initial value to the [PropertyTweener].  
         *  **Example:** Move the node from position `(100, 100)` to `(200, 100)`.  
         *    
         */
        from(value: any): PropertyTweener
        fromCurrent(): PropertyTweener
        asRelative(): PropertyTweener
        setTrans(trans: Tween.TransitionType): PropertyTweener
        setEase(ease: Tween.EaseType): PropertyTweener
        setCustomInterpolator(interpolatorMethod: Callable): PropertyTweener
        setDelay(delay: float64): PropertyTweener
    }
    /** Class representing a square mesh facing the camera.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_quadmesh.html  
     */
    class QuadMesh extends PlaneMesh {
        constructor(identifier?: any)
    }
    /** Flat plane shape for use with occlusion culling in [OccluderInstance3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_quadoccluder3d.html  
     */
    class QuadOccluder3D extends Occluder3D {
        constructor(identifier?: any)
        /** The quad's size in 3D units. */
        get size(): Vector2
        set size(value: Vector2)
    }
    /** Attachment format (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_rdattachmentformat.html  
     */
    class RDAttachmentFormat extends RefCounted {
        constructor(identifier?: any)
        /** The attachment's data format. */
        get format(): int64
        set format(value: int64)
        
        /** The number of samples used when sampling the attachment. */
        get samples(): int64
        set samples(value: int64)
        get usageFlags(): int64
        set usageFlags(value: int64)
    }
    /** Framebuffer pass attachment description (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_rdframebufferpass.html  
     */
    class RDFramebufferPass extends RefCounted {
        /** Attachment is unused. */
        static readonly ATTACHMENT_UNUSED = -1
        constructor(identifier?: any)
        get colorAttachments(): PackedInt32Array
        set colorAttachments(value: PackedInt32Array | int32[])
        get inputAttachments(): PackedInt32Array
        set inputAttachments(value: PackedInt32Array | int32[])
        get resolveAttachments(): PackedInt32Array
        set resolveAttachments(value: PackedInt32Array | int32[])
        get preserveAttachments(): PackedInt32Array
        set preserveAttachments(value: PackedInt32Array | int32[])
        get depthAttachment(): int64
        set depthAttachment(value: int64)
    }
    /** Pipeline color blend state (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_rdpipelinecolorblendstate.html  
     */
    class RDPipelineColorBlendState extends RefCounted {
        constructor(identifier?: any)
        get enableLogicOp(): boolean
        set enableLogicOp(value: boolean)
        get logicOp(): int64
        set logicOp(value: int64)
        get blendConstant(): Color
        set blendConstant(value: Color)
        
        /** The attachments that are blended together. */
        get attachments(): GArray
        set attachments(value: GArray)
    }
    /** Pipeline color blend state attachment (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_rdpipelinecolorblendstateattachment.html  
     */
    class RDPipelineColorBlendStateAttachment extends RefCounted {
        constructor(identifier?: any)
        setAsMix(): void
        get enableBlend(): boolean
        set enableBlend(value: boolean)
        get srcColorBlendFactor(): int64
        set srcColorBlendFactor(value: int64)
        get dstColorBlendFactor(): int64
        set dstColorBlendFactor(value: int64)
        get colorBlendOp(): int64
        set colorBlendOp(value: int64)
        get srcAlphaBlendFactor(): int64
        set srcAlphaBlendFactor(value: int64)
        get dstAlphaBlendFactor(): int64
        set dstAlphaBlendFactor(value: int64)
        get alphaBlendOp(): int64
        set alphaBlendOp(value: int64)
        get writeR(): boolean
        set writeR(value: boolean)
        get writeG(): boolean
        set writeG(value: boolean)
        get writeB(): boolean
        set writeB(value: boolean)
        get writeA(): boolean
        set writeA(value: boolean)
    }
    /** Pipeline depth/stencil state (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_rdpipelinedepthstencilstate.html  
     */
    class RDPipelineDepthStencilState extends RefCounted {
        constructor(identifier?: any)
        get enableDepthTest(): boolean
        set enableDepthTest(value: boolean)
        get enableDepthWrite(): boolean
        set enableDepthWrite(value: boolean)
        get depthCompareOperator(): int64
        set depthCompareOperator(value: int64)
        get enableDepthRange(): boolean
        set enableDepthRange(value: boolean)
        get depthRangeMin(): float64
        set depthRangeMin(value: float64)
        get depthRangeMax(): float64
        set depthRangeMax(value: float64)
        get enableStencil(): boolean
        set enableStencil(value: boolean)
        get frontOpFail(): int64
        set frontOpFail(value: int64)
        get frontOpPass(): int64
        set frontOpPass(value: int64)
        get frontOpDepthFail(): int64
        set frontOpDepthFail(value: int64)
        get frontOpCompare(): int64
        set frontOpCompare(value: int64)
        get frontOpCompareMask(): int64
        set frontOpCompareMask(value: int64)
        get frontOpWriteMask(): int64
        set frontOpWriteMask(value: int64)
        get frontOpReference(): int64
        set frontOpReference(value: int64)
        get backOpFail(): int64
        set backOpFail(value: int64)
        get backOpPass(): int64
        set backOpPass(value: int64)
        get backOpDepthFail(): int64
        set backOpDepthFail(value: int64)
        get backOpCompare(): int64
        set backOpCompare(value: int64)
        get backOpCompareMask(): int64
        set backOpCompareMask(value: int64)
        get backOpWriteMask(): int64
        set backOpWriteMask(value: int64)
        get backOpReference(): int64
        set backOpReference(value: int64)
    }
    /** Pipeline multisample state (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_rdpipelinemultisamplestate.html  
     */
    class RDPipelineMultisampleState extends RefCounted {
        constructor(identifier?: any)
        get sampleCount(): int64
        set sampleCount(value: int64)
        get enableSampleShading(): boolean
        set enableSampleShading(value: boolean)
        get minSampleShading(): float64
        set minSampleShading(value: float64)
        get enableAlphaToCoverage(): boolean
        set enableAlphaToCoverage(value: boolean)
        get enableAlphaToOne(): boolean
        set enableAlphaToOne(value: boolean)
        get sampleMasks(): GArray
        set sampleMasks(value: GArray)
    }
    /** Pipeline rasterization state (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_rdpipelinerasterizationstate.html  
     */
    class RDPipelineRasterizationState extends RefCounted {
        constructor(identifier?: any)
        get enableDepthClamp(): boolean
        set enableDepthClamp(value: boolean)
        get discardPrimitives(): boolean
        set discardPrimitives(value: boolean)
        
        /** If `true`, performs wireframe rendering for triangles instead of flat or textured rendering. */
        get wireframe(): boolean
        set wireframe(value: boolean)
        get cullMode(): int64
        set cullMode(value: int64)
        get frontFace(): int64
        set frontFace(value: int64)
        get depthBiasEnabled(): boolean
        set depthBiasEnabled(value: boolean)
        get depthBiasConstantFactor(): float64
        set depthBiasConstantFactor(value: float64)
        get depthBiasClamp(): float64
        set depthBiasClamp(value: float64)
        get depthBiasSlopeFactor(): float64
        set depthBiasSlopeFactor(value: float64)
        get lineWidth(): float64
        set lineWidth(value: float64)
        get patchControlPoints(): int64
        set patchControlPoints(value: int64)
    }
    /** Pipeline specialization constant (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_rdpipelinespecializationconstant.html  
     */
    class RDPipelineSpecializationConstant extends RefCounted {
        constructor(identifier?: any)
        /** The specialization constant's value. Only [bool], [int] and [float] types are valid for specialization constants. */
        get value(): any
        set value(value: any)
        get constantId(): int64
        set constantId(value: int64)
    }
    /** Sampler state (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_rdsamplerstate.html  
     */
    class RDSamplerState extends RefCounted {
        constructor(identifier?: any)
        get magFilter(): int64
        set magFilter(value: int64)
        get minFilter(): int64
        set minFilter(value: int64)
        get mipFilter(): int64
        set mipFilter(value: int64)
        get repeatU(): int64
        set repeatU(value: int64)
        get repeatV(): int64
        set repeatV(value: int64)
        get repeatW(): int64
        set repeatW(value: int64)
        get lodBias(): float64
        set lodBias(value: float64)
        get useAnisotropy(): boolean
        set useAnisotropy(value: boolean)
        get anisotropyMax(): float64
        set anisotropyMax(value: float64)
        get enableCompare(): boolean
        set enableCompare(value: boolean)
        get compareOp(): int64
        set compareOp(value: int64)
        get minLod(): float64
        set minLod(value: float64)
        get maxLod(): float64
        set maxLod(value: float64)
        get borderColor(): int64
        set borderColor(value: int64)
        get unnormalizedUvw(): boolean
        set unnormalizedUvw(value: boolean)
    }
    /** Compiled shader file in SPIR-V form (used by [RenderingDevice]). Not to be confused with Godot's own [Shader].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_rdshaderfile.html  
     */
    class RDShaderFile extends Resource {
        constructor(identifier?: any)
        setBytecode(bytecode: any /*RDShaderSPIRV*/, version: StringName = ''): void
        getSpirV(version: StringName = ''): any /*RDShaderSPIRV*/
        getVersionList(): GArray
        get _versions(): GDictionary
        set _versions(value: GDictionary)
        get baseError(): string
        set baseError(value: string)
    }
    class RDShaderSpirV extends Resource {
        constructor(identifier?: any)
        setStageBytecode(stage: RenderingDevice.ShaderStage, bytecode: PackedByteArray | byte[] | ArrayBuffer): void
        getStageBytecode(stage: RenderingDevice.ShaderStage): PackedByteArray
        setStageCompileError(stage: RenderingDevice.ShaderStage, compileError: string): void
        getStageCompileError(stage: RenderingDevice.ShaderStage): string
        get bytecodeVertex(): PackedByteArray
        set bytecodeVertex(value: PackedByteArray | byte[] | ArrayBuffer)
        get bytecodeFragment(): PackedByteArray
        set bytecodeFragment(value: PackedByteArray | byte[] | ArrayBuffer)
        get bytecodeTesselationControl(): PackedByteArray
        set bytecodeTesselationControl(value: PackedByteArray | byte[] | ArrayBuffer)
        get bytecodeTesselationEvaluation(): PackedByteArray
        set bytecodeTesselationEvaluation(value: PackedByteArray | byte[] | ArrayBuffer)
        get bytecodeCompute(): PackedByteArray
        set bytecodeCompute(value: PackedByteArray | byte[] | ArrayBuffer)
        get compileErrorVertex(): string
        set compileErrorVertex(value: string)
        get compileErrorFragment(): string
        set compileErrorFragment(value: string)
        get compileErrorTesselationControl(): string
        set compileErrorTesselationControl(value: string)
        get compileErrorTesselationEvaluation(): string
        set compileErrorTesselationEvaluation(value: string)
        get compileErrorCompute(): string
        set compileErrorCompute(value: string)
    }
    /** Shader source code (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_rdshadersource.html  
     */
    class RDShaderSource extends RefCounted {
        constructor(identifier?: any)
        setStageSource(stage: RenderingDevice.ShaderStage, source: string): void
        getStageSource(stage: RenderingDevice.ShaderStage): string
        get sourceVertex(): string
        set sourceVertex(value: string)
        get sourceFragment(): string
        set sourceFragment(value: string)
        get sourceTesselationControl(): string
        set sourceTesselationControl(value: string)
        get sourceTesselationEvaluation(): string
        set sourceTesselationEvaluation(value: string)
        get sourceCompute(): string
        set sourceCompute(value: string)
        
        /** The language the shader is written in. */
        get language(): int64
        set language(value: int64)
    }
    /** Texture format (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_rdtextureformat.html  
     */
    class RDTextureFormat extends RefCounted {
        constructor(identifier?: any)
        addShareableFormat(format: RenderingDevice.DataFormat): void
        removeShareableFormat(format: RenderingDevice.DataFormat): void
        
        /** The texture's pixel data format. */
        get format(): int64
        set format(value: int64)
        
        /** The texture's width (in pixels). */
        get width(): int64
        set width(value: int64)
        
        /** The texture's height (in pixels). */
        get height(): int64
        set height(value: int64)
        
        /** The texture's depth (in pixels). This is always `1` for 2D textures. */
        get depth(): int64
        set depth(value: int64)
        get arrayLayers(): int64
        set arrayLayers(value: int64)
        
        /** The number of mipmaps available in the texture. */
        get mipmaps(): int64
        set mipmaps(value: int64)
        get textureType(): int64
        set textureType(value: int64)
        
        /** The number of samples used when sampling the texture. */
        get samples(): int64
        set samples(value: int64)
        get usageBits(): int64
        set usageBits(value: int64)
        get isResolveBuffer(): boolean
        set isResolveBuffer(value: boolean)
        get isDiscardable(): boolean
        set isDiscardable(value: boolean)
    }
    /** Texture view (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_rdtextureview.html  
     */
    class RDTextureView extends RefCounted {
        constructor(identifier?: any)
        get formatOverride(): int64
        set formatOverride(value: int64)
        get swizzleR(): int64
        set swizzleR(value: int64)
        get swizzleG(): int64
        set swizzleG(value: int64)
        get swizzleB(): int64
        set swizzleB(value: int64)
        get swizzleA(): int64
        set swizzleA(value: int64)
    }
    /** Shader uniform (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_rduniform.html  
     */
    class RDUniform extends RefCounted {
        constructor(identifier?: any)
        addId(id: Rid): void
        clearIds(): void
        get uniformType(): int64
        set uniformType(value: int64)
        
        /** The uniform's binding. */
        get binding(): int64
        set binding(value: int64)
        get _ids(): GArray
        set _ids(value: GArray)
    }
    /** Vertex attribute (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_rdvertexattribute.html  
     */
    class RDVertexAttribute extends RefCounted {
        constructor(identifier?: any)
        /** The location in the shader that this attribute is bound to. */
        get location(): int64
        set location(value: int64)
        
        /** The number of bytes between the start of the vertex buffer and the first instance of this attribute. */
        get offset(): int64
        set offset(value: int64)
        
        /** The way that this attribute's data is interpreted when sent to a shader. */
        get format(): int64
        set format(value: int64)
        
        /** The number of bytes between the starts of consecutive instances of this attribute. */
        get stride(): int64
        set stride(value: int64)
        
        /** The rate at which this attribute is pulled from its vertex buffer. */
        get frequency(): int64
        set frequency(value: int64)
    }
    /** Provides methods for generating pseudo-random numbers.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_randomnumbergenerator.html  
     */
    class RandomNumberGenerator extends RefCounted {
        constructor(identifier?: any)
        /** Returns a pseudo-random 32-bit unsigned integer between `0` and `4294967295` (inclusive). */
        randi(): int64
        
        /** Returns a pseudo-random float between `0.0` and `1.0` (inclusive). */
        randf(): float64
        
        /** Returns a [url=https://en.wikipedia.org/wiki/Normal_distribution]normally-distributed[/url], pseudo-random floating-point number from the specified [param mean] and a standard [param deviation]. This is also known as a Gaussian distribution.  
         *      
         *  **Note:** This method uses the [url=https://en.wikipedia.org/wiki/Box%E2%80%93Muller_transform]Box-Muller transform[/url] algorithm.  
         */
        randfn(mean: float64 = 0, deviation: float64 = 1): float64
        randfRange(from: float64, to: float64): float64
        randiRange(from: int64, to: int64): int64
        randWeighted(weights: PackedFloat32Array | float32[]): int64
        
        /** Sets up a time-based seed for this [RandomNumberGenerator] instance. Unlike the [@GlobalScope] random number generation functions, different [RandomNumberGenerator] instances can use different seeds. */
        randomize(): void
        
        /** Initializes the random number generator state based on the given seed value. A given seed will give a reproducible sequence of pseudo-random numbers.  
         *      
         *  **Note:** The RNG does not have an avalanche effect, and can output similar random streams given similar seeds. Consider using a hash function to improve your seed quality if they're sourced externally.  
         *      
         *  **Note:** Setting this property produces a side effect of changing the internal [member state], so make sure to initialize the seed  *before*  modifying the [member state]:  
         *      
         *  **Note:** The default value of this property is pseudo-random, and changes when calling [method randomize]. The `0` value documented here is a placeholder, and not the actual default seed.  
         *    
         */
        get seed(): int64
        set seed(value: int64)
        
        /** The current state of the random number generator. Save and restore this property to restore the generator to a previous state:  
         *    
         *      
         *  **Note:** Do not set state to arbitrary values, since the random number generator requires the state to have certain qualities to behave properly. It should only be set to values that came from the state property itself. To initialize the random number generator with arbitrary input, use [member seed] instead.  
         *      
         *  **Note:** The default value of this property is pseudo-random, and changes when calling [method randomize]. The `0` value documented here is a placeholder, and not the actual default seed.  
         */
        get state(): int64
        set state(value: int64)
    }
    /** Abstract base class for controls that represent a number within a range.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_range.html  
     */
    class Range<Map extends Record<string, Node> = {}> extends Control<Map> {
        constructor(identifier?: any)
        /* gdvirtual */ _valueChanged(newValue: float64): void
        setValueNoSignal(value: float64): void
        
        /** Binds two [Range]s together along with any ranges previously grouped with either of them. When any of range's member variables change, it will share the new value with all other ranges in its group. */
        share(with_: Node): void
        
        /** Stops the [Range] from sharing its member variables with any other. */
        unshare(): void
        get minValue(): float64
        set minValue(value: float64)
        get maxValue(): float64
        set maxValue(value: float64)
        
        /** If greater than 0, [member value] will always be rounded to a multiple of this property's value. If [member rounded] is also `true`, [member value] will first be rounded to a multiple of this property's value, then rounded to the nearest integer. */
        get step(): float64
        set step(value: float64)
        
        /** Page size. Used mainly for [ScrollBar]. A [ScrollBar]'s grabber length is the [ScrollBar]'s size multiplied by [member page] over the difference between [member min_value] and [member max_value]. */
        get page(): float64
        set page(value: float64)
        
        /** Range's current value. Changing this property (even via code) will trigger [signal value_changed] signal. Use [method set_value_no_signal] if you want to avoid it. */
        get value(): float64
        set value(value: float64)
        
        /** The value mapped between 0 and 1. */
        get ratio(): float64
        set ratio(value: float64)
        get expEdit(): boolean
        set expEdit(value: boolean)
        
        /** If `true`, [member value] will always be rounded to the nearest integer. */
        get rounded(): boolean
        set rounded(value: boolean)
        get allowGreater(): boolean
        set allowGreater(value: boolean)
        get allowLesser(): boolean
        set allowLesser(value: boolean)
        readonly valueChanged: Signal<(value: float64) => void>
        
        /** Emitted when [member min_value], [member max_value], [member page], or [member step] change. */
        readonly changed: Signal<() => void>
    }
    /** A ray in 2D space, used to find the first [CollisionObject2D] it intersects.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_raycast2d.html  
     */
    class RayCast2D<Map extends Record<string, Node> = {}> extends Node2D<Map> {
        constructor(identifier?: any)
        isColliding(): boolean
        forceRaycastUpdate(): void
        getCollider(): GObject
        getColliderRid(): Rid
        getColliderShape(): int64
        getCollisionPoint(): Vector2
        getCollisionNormal(): Vector2
        addExceptionRid(rid: Rid): void
        addException(node: CollisionObject2D): void
        removeExceptionRid(rid: Rid): void
        removeException(node: CollisionObject2D): void
        clearExceptions(): void
        setCollisionMaskValue(layerNumber: int64, value: boolean): void
        getCollisionMaskValue(layerNumber: int64): boolean
        
        /** If `true`, collisions will be reported. */
        get enabled(): boolean
        set enabled(value: boolean)
        get excludeParent(): boolean
        set excludeParent(value: boolean)
        get targetPosition(): Vector2
        set targetPosition(value: Vector2)
        get collisionMask(): int64
        set collisionMask(value: int64)
        get hitFromInside(): boolean
        set hitFromInside(value: boolean)
        get collideWithAreas(): boolean
        set collideWithAreas(value: boolean)
        get collideWithBodies(): boolean
        set collideWithBodies(value: boolean)
    }
    /** A ray in 3D space, used to find the first object it intersects.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_raycast3d.html  
     */
    class RayCast3D<Map extends Record<string, Node> = {}> extends Node3D<Map> {
        constructor(identifier?: any)
        isColliding(): boolean
        forceRaycastUpdate(): void
        getCollider(): GObject
        getColliderRid(): Rid
        getColliderShape(): int64
        getCollisionPoint(): Vector3
        getCollisionNormal(): Vector3
        getCollisionFaceIndex(): int64
        addExceptionRid(rid: Rid): void
        addException(node: CollisionObject3D): void
        removeExceptionRid(rid: Rid): void
        removeException(node: CollisionObject3D): void
        clearExceptions(): void
        setCollisionMaskValue(layerNumber: int64, value: boolean): void
        getCollisionMaskValue(layerNumber: int64): boolean
        
        /** If `true`, collisions will be reported. */
        get enabled(): boolean
        set enabled(value: boolean)
        get excludeParent(): boolean
        set excludeParent(value: boolean)
        get targetPosition(): Vector3
        set targetPosition(value: Vector3)
        get collisionMask(): int64
        set collisionMask(value: int64)
        get hitFromInside(): boolean
        set hitFromInside(value: boolean)
        get hitBackFaces(): boolean
        set hitBackFaces(value: boolean)
        get collideWithAreas(): boolean
        set collideWithAreas(value: boolean)
        get collideWithBodies(): boolean
        set collideWithBodies(value: boolean)
        get debugShapeCustomColor(): Color
        set debugShapeCustomColor(value: Color)
        get debugShapeThickness(): int64
        set debugShapeThickness(value: int64)
    }
    /** A 2D rectangle shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_rectangleshape2d.html  
     */
    class RectangleShape2D extends Shape2D {
        constructor(identifier?: any)
        /** The rectangle's width and height. */
        get size(): Vector2
        set size(value: Vector2)
    }
    /** Base class for reference-counted objects.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_refcounted.html  
     */
    class RefCounted extends GObject {
        constructor(identifier?: any)
        initRef(): boolean
        
        /** Increments the internal reference counter. Use this only if you really know what you are doing.  
         *  Returns `true` if the increment was successful, `false` otherwise.  
         */
        reference(): boolean
        
        /** Decrements the internal reference counter. Use this only if you really know what you are doing.  
         *  Returns `true` if the object should be freed after the decrement, `false` otherwise.  
         */
        unreference(): boolean
        getReferenceCount(): int64
    }
    /** A rectangle hint for designing UIs.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_referencerect.html  
     */
    class ReferenceRect<Map extends Record<string, Node> = {}> extends Control<Map> {
        constructor(identifier?: any)
        get borderColor(): Color
        set borderColor(value: Color)
        get borderWidth(): float64
        set borderWidth(value: float64)
        get editorOnly(): boolean
        set editorOnly(value: boolean)
    }
    namespace ReflectionProbe {
        enum UpdateMode {
            UpdateOnce = 0,
            UpdateAlways = 1,
        }
        enum AmbientMode {
            AmbientDisabled = 0,
            AmbientEnvironment = 1,
            AmbientColor = 2,
        }
    }
    /** Captures its surroundings to create fast, accurate reflections from a given point.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_reflectionprobe.html  
     */
    class ReflectionProbe<Map extends Record<string, Node> = {}> extends VisualInstance3D<Map> {
        /** Update the probe once on the next frame (recommended for most objects). The corresponding radiance map will be generated over the following six frames. This takes more time to update than [constant UPDATE_ALWAYS], but it has a lower performance cost and can result in higher-quality reflections. The ReflectionProbe is updated when its transform changes, but not when nearby geometry changes. You can force a [ReflectionProbe] update by moving the [ReflectionProbe] slightly in any direction. */
        static readonly UPDATE_ONCE = 0
        
        /** Update the probe every frame. This provides better results for fast-moving dynamic objects (such as cars). However, it has a significant performance cost. Due to the cost, it's recommended to only use one ReflectionProbe with [constant UPDATE_ALWAYS] at most per scene. For all other use cases, use [constant UPDATE_ONCE]. */
        static readonly UPDATE_ALWAYS = 1
        
        /** Do not apply any ambient lighting inside the [ReflectionProbe]'s box defined by its [member size]. */
        static readonly AMBIENT_DISABLED = 0
        
        /** Apply automatically-sourced environment lighting inside the [ReflectionProbe]'s box defined by its [member size]. */
        static readonly AMBIENT_ENVIRONMENT = 1
        
        /** Apply custom ambient lighting inside the [ReflectionProbe]'s box defined by its [member size]. See [member ambient_color] and [member ambient_color_energy]. */
        static readonly AMBIENT_COLOR = 2
        constructor(identifier?: any)
        get updateMode(): int64
        set updateMode(value: int64)
        
        /** Defines the reflection intensity. Intensity modulates the strength of the reflection. */
        get intensity(): float64
        set intensity(value: float64)
        get blendDistance(): float64
        set blendDistance(value: float64)
        get maxDistance(): float64
        set maxDistance(value: float64)
        
        /** The size of the reflection probe. The larger the size, the more space covered by the probe, which will lower the perceived resolution. It is best to keep the size only as large as you need it.  
         *      
         *  **Note:** To better fit areas that are not aligned to the grid, you can rotate the [ReflectionProbe] node.  
         */
        get size(): Vector3
        set size(value: Vector3)
        get originOffset(): Vector3
        set originOffset(value: Vector3)
        get boxProjection(): boolean
        set boxProjection(value: boolean)
        
        /** If `true`, reflections will ignore sky contribution. */
        get interior(): boolean
        set interior(value: boolean)
        get enableShadows(): boolean
        set enableShadows(value: boolean)
        get cullMask(): int64
        set cullMask(value: int64)
        get reflectionMask(): int64
        set reflectionMask(value: int64)
        get meshLodThreshold(): float64
        set meshLodThreshold(value: float64)
        get ambientMode(): int64
        set ambientMode(value: int64)
        get ambientColor(): Color
        set ambientColor(value: Color)
        get ambientColorEnergy(): float64
        set ambientColorEnergy(value: float64)
    }
    /** Class for searching text for patterns using regular expressions.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_regex.html  
     */
    class RegEx extends RefCounted {
        constructor(identifier?: any)
        static createFromString(pattern: string, showError: boolean = true): RegEx
        
        /** This method resets the state of the object, as if it was freshly created. Namely, it unassigns the regular expression of this object. */
        clear(): void
        
        /** Compiles and assign the search pattern to use. Returns [constant OK] if the compilation is successful. If compilation fails, returns [constant FAILED] and when [param show_error] is `true`, details are printed to standard output. */
        compile(pattern: string, showError: boolean = true): GError
        
        /** Searches the text for the compiled pattern. Returns a [RegExMatch] container of the first matching result if found, otherwise `null`.  
         *  The region to search within can be specified with [param offset] and [param end]. This is useful when searching for another match in the same [param subject] by calling this method again after a previous success. Note that setting these parameters differs from passing over a shortened string. For example, the start anchor `^` is not affected by [param offset], and the character before [param offset] will be checked for the word boundary `\b`.  
         */
        search(subject: string, offset: int64 = 0, end: int64 = -1): RegExMatch
        searchAll(subject: string, offset: int64 = 0, end: int64 = -1): GArray
        
        /** Searches the text for the compiled pattern and replaces it with the specified string. Escapes and backreferences such as `$1` and `$name` are expanded and resolved. By default, only the first instance is replaced, but it can be changed for all instances (global replacement).  
         *  The region to search within can be specified with [param offset] and [param end]. This is useful when searching for another match in the same [param subject] by calling this method again after a previous success. Note that setting these parameters differs from passing over a shortened string. For example, the start anchor `^` is not affected by [param offset], and the character before [param offset] will be checked for the word boundary `\b`.  
         */
        sub(subject: string, replacement: string, all: boolean = false, offset: int64 = 0, end: int64 = -1): string
        isValid(): boolean
        getPattern(): string
        getGroupCount(): int64
        getNames(): PackedStringArray
    }
    /** Contains the results of a [RegEx] search.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_regexmatch.html  
     */
    class RegExMatch extends RefCounted {
        constructor(identifier?: any)
        getGroupCount(): int64
        getString(name: any = <any> {}): string
        getStart(name: any = <any> {}): int64
        getEnd(name: any = <any> {}): int64
        
        /** The source string used with the search pattern to find this matching result. */
        get subject(): string
        set subject(value: string)
        
        /** A dictionary of named groups and its corresponding group number. Only groups that were matched are included. If multiple groups have the same name, that name would refer to the first matching one. */
        get names(): GDictionary
        set names(value: GDictionary)
        
        /** An [Array] of the match and its capturing groups. */
        get strings(): GArray
        set strings(value: GArray)
    }
    /** RemoteTransform2D pushes its own [Transform2D] to another [Node2D] derived node in the scene.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_remotetransform2d.html  
     */
    class RemoteTransform2D<Map extends Record<string, Node> = {}> extends Node2D<Map> {
        constructor(identifier?: any)
        forceUpdateCache(): void
        get remotePath(): NodePath
        set remotePath(value: NodePath | string)
        get useGlobalCoordinates(): boolean
        set useGlobalCoordinates(value: boolean)
        get updatePosition(): boolean
        set updatePosition(value: boolean)
        get updateRotation(): boolean
        set updateRotation(value: boolean)
        get updateScale(): boolean
        set updateScale(value: boolean)
    }
    /** RemoteTransform3D pushes its own [Transform3D] to another [Node3D] derived Node in the scene.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_remotetransform3d.html  
     */
    class RemoteTransform3D<Map extends Record<string, Node> = {}> extends Node3D<Map> {
        constructor(identifier?: any)
        forceUpdateCache(): void
        get remotePath(): NodePath
        set remotePath(value: NodePath | string)
        get useGlobalCoordinates(): boolean
        set useGlobalCoordinates(value: boolean)
        get updatePosition(): boolean
        set updatePosition(value: boolean)
        get updateRotation(): boolean
        set updateRotation(value: boolean)
        get updateScale(): boolean
        set updateScale(value: boolean)
    }
    /** Abstract render data object, holds frame data related to rendering a single frame of a viewport.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_renderdata.html  
     */
    class RenderData extends GObject {
        constructor(identifier?: any)
        getRenderSceneBuffers(): RenderSceneBuffers
        getRenderSceneData(): RenderSceneData
        getEnvironment(): Rid
        getCameraAttributes(): Rid
    }
    /** This class allows for a RenderData implementation to be made in GDExtension.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_renderdataextension.html  
     */
    class RenderDataExtension extends RenderData {
        constructor(identifier?: any)
        /* gdvirtual */ _getRenderSceneBuffers(): RenderSceneBuffers
        /* gdvirtual */ _getRenderSceneData(): RenderSceneData
        /* gdvirtual */ _getEnvironment(): Rid
        /* gdvirtual */ _getCameraAttributes(): Rid
    }
    /** Render data implementation for the RenderingDevice based renderers.  
     *      
     *  **Note:** This is an internal rendering server object, do not instantiate this from script.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_renderdatard.html  
     */
    class RenderDataRD extends RenderData {
        constructor(identifier?: any)
    }
    /** Abstract scene buffers object, created for each viewport for which 3D rendering is done.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_renderscenebuffers.html  
     */
    class RenderSceneBuffers extends RefCounted {
        constructor(identifier?: any)
        /** This method is called by the rendering server when the associated viewports configuration is changed. It will discard the old buffers and recreate the internal buffers used. */
        configure(config: RenderSceneBuffersConfiguration): void
    }
    /** Configuration object used to setup a [RenderSceneBuffers] object.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_renderscenebuffersconfiguration.html  
     */
    class RenderSceneBuffersConfiguration extends RefCounted {
        constructor(identifier?: any)
        get renderTarget(): Rid
        set renderTarget(value: Rid)
        get internalSize(): Vector2I
        set internalSize(value: Vector2I)
        get targetSize(): Vector2I
        set targetSize(value: Vector2I)
        get viewCount(): int64
        set viewCount(value: int64)
        get scaling3DMode(): int64
        set scaling3DMode(value: int64)
        get msaa3D(): int64
        set msaa3D(value: int64)
        get screenSpaceAA(): int64
        set screenSpaceAA(value: int64)
        get fsrSharpness(): boolean
        set fsrSharpness(value: boolean)
        get textureMipmapBias(): boolean
        set textureMipmapBias(value: boolean)
        get anisotropicFilteringLevel(): int64
        set anisotropicFilteringLevel(value: int64)
    }
    /** This class allows for a RenderSceneBuffer implementation to be made in GDExtension.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_renderscenebuffersextension.html  
     */
    class RenderSceneBuffersExtension extends RenderSceneBuffers {
        constructor(identifier?: any)
        /** Implement this in GDExtension to handle the (re)sizing of a viewport. */
        /* gdvirtual */ _configure(config: RenderSceneBuffersConfiguration): void
        /* gdvirtual */ _setFsrSharpness(fsrSharpness: float64): void
        /* gdvirtual */ _setTextureMipmapBias(textureMipmapBias: float64): void
        /* gdvirtual */ _setAnisotropicFilteringLevel(anisotropicFilteringLevel: int64): void
        /* gdvirtual */ _setUseDebanding(useDebanding: boolean): void
    }
    /** Render scene buffer implementation for the RenderingDevice based renderers.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_renderscenebuffersrd.html  
     */
    class RenderSceneBuffersRD extends RenderSceneBuffers {
        constructor(identifier?: any)
        hasTexture(context: StringName, name: StringName): boolean
        createTexture(context: StringName, name: StringName, dataFormat: RenderingDevice.DataFormat, usageBits: int64, textureSamples: RenderingDevice.TextureSamples, size: Vector2I, layers: int64, mipmaps: int64, unique: boolean, discardable: boolean): Rid
        createTextureFromFormat(context: StringName, name: StringName, format: RDTextureFormat, view: RDTextureView, unique: boolean): Rid
        createTextureView(context: StringName, name: StringName, viewName: StringName, view: RDTextureView): Rid
        getTexture(context: StringName, name: StringName): Rid
        getTextureFormat(context: StringName, name: StringName): RDTextureFormat
        getTextureSlice(context: StringName, name: StringName, layer: int64, mipmap: int64, layers: int64, mipmaps: int64): Rid
        getTextureSliceView(context: StringName, name: StringName, layer: int64, mipmap: int64, layers: int64, mipmaps: int64, view: RDTextureView): Rid
        getTextureSliceSize(context: StringName, name: StringName, mipmap: int64): Vector2I
        clearContext(context: StringName): void
        getColorTexture(msaa: boolean = false): Rid
        getColorLayer(layer: int64, msaa: boolean = false): Rid
        getDepthTexture(msaa: boolean = false): Rid
        getDepthLayer(layer: int64, msaa: boolean = false): Rid
        getVelocityTexture(msaa: boolean = false): Rid
        getVelocityLayer(layer: int64, msaa: boolean = false): Rid
        getRenderTarget(): Rid
        getViewCount(): int64
        getInternalSize(): Vector2I
        getTargetSize(): Vector2I
        getScaling3DMode(): RenderingServer.ViewportScaling3DMode
        getFsrSharpness(): float64
        getMsaa3D(): RenderingServer.ViewportMsaa
        getTextureSamples(): RenderingDevice.TextureSamples
        getScreenSpaceAA(): RenderingServer.ViewportScreenSpaceAA
        getUseTaa(): boolean
        getUseDebanding(): boolean
    }
    /** Abstract render data object, holds scene data related to rendering a single frame of a viewport.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_renderscenedata.html  
     */
    class RenderSceneData extends GObject {
        constructor(identifier?: any)
        getCamTransform(): Transform3D
        getCamProjection(): Projection
        getViewCount(): int64
        getViewEyeOffset(view: int64): Vector3
        getViewProjection(view: int64): Projection
        getUniformBuffer(): Rid
    }
    /** This class allows for a RenderSceneData implementation to be made in GDExtension.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_renderscenedataextension.html  
     */
    class RenderSceneDataExtension extends RenderSceneData {
        constructor(identifier?: any)
        /* gdvirtual */ _getCamTransform(): Transform3D
        /* gdvirtual */ _getCamProjection(): Projection
        /* gdvirtual */ _getViewCount(): int64
        /* gdvirtual */ _getViewEyeOffset(view: int64): Vector3
        /* gdvirtual */ _getViewProjection(view: int64): Projection
        /* gdvirtual */ _getUniformBuffer(): Rid
    }
    /** Render scene data implementation for the RenderingDevice based renderers.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_renderscenedatard.html  
     */
    class RenderSceneDataRD extends RenderSceneData {
        constructor(identifier?: any)
    }
    namespace RenderingDevice {
        enum DeviceType {
            DeviceTypeOther = 0,
            DeviceTypeIntegratedGpu = 1,
            DeviceTypeDiscreteGpu = 2,
            DeviceTypeVirtualGpu = 3,
            DeviceTypeCpu = 4,
            DeviceTypeMax = 5,
        }
        enum DriverResource {
            DriverResourceLogicalDevice = 0,
            DriverResourcePhysicalDevice = 1,
            DriverResourceTopmostObject = 2,
            DriverResourceCommandQueue = 3,
            DriverResourceQueueFamily = 4,
            DriverResourceTexture = 5,
            DriverResourceTextureView = 6,
            DriverResourceTextureDataFormat = 7,
            DriverResourceSampler = 8,
            DriverResourceUniformSet = 9,
            DriverResourceBuffer = 10,
            DriverResourceComputePipeline = 11,
            DriverResourceRenderPipeline = 12,
            DriverResourceVulkanDevice = 0,
            DriverResourceVulkanPhysicalDevice = 1,
            DriverResourceVulkanInstance = 2,
            DriverResourceVulkanQueue = 3,
            DriverResourceVulkanQueueFamilyIndex = 4,
            DriverResourceVulkanImage = 5,
            DriverResourceVulkanImageView = 6,
            DriverResourceVulkanImageNativeTextureFormat = 7,
            DriverResourceVulkanSampler = 8,
            DriverResourceVulkanDescriptorSet = 9,
            DriverResourceVulkanBuffer = 10,
            DriverResourceVulkanComputePipeline = 11,
            DriverResourceVulkanRenderPipeline = 12,
        }
        enum DataFormat {
            DataFormatR4G4UnormPack8 = 0,
            DataFormatR4G4B4A4UnormPack16 = 1,
            DataFormatB4G4R4A4UnormPack16 = 2,
            DataFormatR5G6B5UnormPack16 = 3,
            DataFormatB5G6R5UnormPack16 = 4,
            DataFormatR5G5B5A1UnormPack16 = 5,
            DataFormatB5G5R5A1UnormPack16 = 6,
            DataFormatA1R5G5B5UnormPack16 = 7,
            DataFormatR8Unorm = 8,
            DataFormatR8Snorm = 9,
            DataFormatR8Uscaled = 10,
            DataFormatR8Sscaled = 11,
            DataFormatR8Uint = 12,
            DataFormatR8Sint = 13,
            DataFormatR8Srgb = 14,
            DataFormatR8G8Unorm = 15,
            DataFormatR8G8Snorm = 16,
            DataFormatR8G8Uscaled = 17,
            DataFormatR8G8Sscaled = 18,
            DataFormatR8G8Uint = 19,
            DataFormatR8G8Sint = 20,
            DataFormatR8G8Srgb = 21,
            DataFormatR8G8B8Unorm = 22,
            DataFormatR8G8B8Snorm = 23,
            DataFormatR8G8B8Uscaled = 24,
            DataFormatR8G8B8Sscaled = 25,
            DataFormatR8G8B8Uint = 26,
            DataFormatR8G8B8Sint = 27,
            DataFormatR8G8B8Srgb = 28,
            DataFormatB8G8R8Unorm = 29,
            DataFormatB8G8R8Snorm = 30,
            DataFormatB8G8R8Uscaled = 31,
            DataFormatB8G8R8Sscaled = 32,
            DataFormatB8G8R8Uint = 33,
            DataFormatB8G8R8Sint = 34,
            DataFormatB8G8R8Srgb = 35,
            DataFormatR8G8B8A8Unorm = 36,
            DataFormatR8G8B8A8Snorm = 37,
            DataFormatR8G8B8A8Uscaled = 38,
            DataFormatR8G8B8A8Sscaled = 39,
            DataFormatR8G8B8A8Uint = 40,
            DataFormatR8G8B8A8Sint = 41,
            DataFormatR8G8B8A8Srgb = 42,
            DataFormatB8G8R8A8Unorm = 43,
            DataFormatB8G8R8A8Snorm = 44,
            DataFormatB8G8R8A8Uscaled = 45,
            DataFormatB8G8R8A8Sscaled = 46,
            DataFormatB8G8R8A8Uint = 47,
            DataFormatB8G8R8A8Sint = 48,
            DataFormatB8G8R8A8Srgb = 49,
            DataFormatA8B8G8R8UnormPack32 = 50,
            DataFormatA8B8G8R8SnormPack32 = 51,
            DataFormatA8B8G8R8UscaledPack32 = 52,
            DataFormatA8B8G8R8SscaledPack32 = 53,
            DataFormatA8B8G8R8UintPack32 = 54,
            DataFormatA8B8G8R8SintPack32 = 55,
            DataFormatA8B8G8R8SrgbPack32 = 56,
            DataFormatA2R10G10B10UnormPack32 = 57,
            DataFormatA2R10G10B10SnormPack32 = 58,
            DataFormatA2R10G10B10UscaledPack32 = 59,
            DataFormatA2R10G10B10SscaledPack32 = 60,
            DataFormatA2R10G10B10UintPack32 = 61,
            DataFormatA2R10G10B10SintPack32 = 62,
            DataFormatA2B10G10R10UnormPack32 = 63,
            DataFormatA2B10G10R10SnormPack32 = 64,
            DataFormatA2B10G10R10UscaledPack32 = 65,
            DataFormatA2B10G10R10SscaledPack32 = 66,
            DataFormatA2B10G10R10UintPack32 = 67,
            DataFormatA2B10G10R10SintPack32 = 68,
            DataFormatR16Unorm = 69,
            DataFormatR16Snorm = 70,
            DataFormatR16Uscaled = 71,
            DataFormatR16Sscaled = 72,
            DataFormatR16Uint = 73,
            DataFormatR16Sint = 74,
            DataFormatR16Sfloat = 75,
            DataFormatR16G16Unorm = 76,
            DataFormatR16G16Snorm = 77,
            DataFormatR16G16Uscaled = 78,
            DataFormatR16G16Sscaled = 79,
            DataFormatR16G16Uint = 80,
            DataFormatR16G16Sint = 81,
            DataFormatR16G16Sfloat = 82,
            DataFormatR16G16B16Unorm = 83,
            DataFormatR16G16B16Snorm = 84,
            DataFormatR16G16B16Uscaled = 85,
            DataFormatR16G16B16Sscaled = 86,
            DataFormatR16G16B16Uint = 87,
            DataFormatR16G16B16Sint = 88,
            DataFormatR16G16B16Sfloat = 89,
            DataFormatR16G16B16A16Unorm = 90,
            DataFormatR16G16B16A16Snorm = 91,
            DataFormatR16G16B16A16Uscaled = 92,
            DataFormatR16G16B16A16Sscaled = 93,
            DataFormatR16G16B16A16Uint = 94,
            DataFormatR16G16B16A16Sint = 95,
            DataFormatR16G16B16A16Sfloat = 96,
            DataFormatR32Uint = 97,
            DataFormatR32Sint = 98,
            DataFormatR32Sfloat = 99,
            DataFormatR32G32Uint = 100,
            DataFormatR32G32Sint = 101,
            DataFormatR32G32Sfloat = 102,
            DataFormatR32G32B32Uint = 103,
            DataFormatR32G32B32Sint = 104,
            DataFormatR32G32B32Sfloat = 105,
            DataFormatR32G32B32A32Uint = 106,
            DataFormatR32G32B32A32Sint = 107,
            DataFormatR32G32B32A32Sfloat = 108,
            DataFormatR64Uint = 109,
            DataFormatR64Sint = 110,
            DataFormatR64Sfloat = 111,
            DataFormatR64G64Uint = 112,
            DataFormatR64G64Sint = 113,
            DataFormatR64G64Sfloat = 114,
            DataFormatR64G64B64Uint = 115,
            DataFormatR64G64B64Sint = 116,
            DataFormatR64G64B64Sfloat = 117,
            DataFormatR64G64B64A64Uint = 118,
            DataFormatR64G64B64A64Sint = 119,
            DataFormatR64G64B64A64Sfloat = 120,
            DataFormatB10G11R11UfloatPack32 = 121,
            DataFormatE5B9G9R9UfloatPack32 = 122,
            DataFormatD16Unorm = 123,
            DataFormatX8D24UnormPack32 = 124,
            DataFormatD32Sfloat = 125,
            DataFormatS8Uint = 126,
            DataFormatD16UnormS8Uint = 127,
            DataFormatD24UnormS8Uint = 128,
            DataFormatD32SfloatS8Uint = 129,
            DataFormatBc1RgbUnormBlock = 130,
            DataFormatBc1RgbSrgbBlock = 131,
            DataFormatBc1RgbaUnormBlock = 132,
            DataFormatBc1RgbaSrgbBlock = 133,
            DataFormatBc2UnormBlock = 134,
            DataFormatBc2SrgbBlock = 135,
            DataFormatBc3UnormBlock = 136,
            DataFormatBc3SrgbBlock = 137,
            DataFormatBc4UnormBlock = 138,
            DataFormatBc4SnormBlock = 139,
            DataFormatBc5UnormBlock = 140,
            DataFormatBc5SnormBlock = 141,
            DataFormatBc6HUfloatBlock = 142,
            DataFormatBc6HSfloatBlock = 143,
            DataFormatBc7UnormBlock = 144,
            DataFormatBc7SrgbBlock = 145,
            DataFormatEtc2R8G8B8UnormBlock = 146,
            DataFormatEtc2R8G8B8SrgbBlock = 147,
            DataFormatEtc2R8G8B8A1UnormBlock = 148,
            DataFormatEtc2R8G8B8A1SrgbBlock = 149,
            DataFormatEtc2R8G8B8A8UnormBlock = 150,
            DataFormatEtc2R8G8B8A8SrgbBlock = 151,
            DataFormatEacR11UnormBlock = 152,
            DataFormatEacR11SnormBlock = 153,
            DataFormatEacR11G11UnormBlock = 154,
            DataFormatEacR11G11SnormBlock = 155,
            DataFormatAstc4X4UnormBlock = 156,
            DataFormatAstc4X4SrgbBlock = 157,
            DataFormatAstc5X4UnormBlock = 158,
            DataFormatAstc5X4SrgbBlock = 159,
            DataFormatAstc5X5UnormBlock = 160,
            DataFormatAstc5X5SrgbBlock = 161,
            DataFormatAstc6X5UnormBlock = 162,
            DataFormatAstc6X5SrgbBlock = 163,
            DataFormatAstc6X6UnormBlock = 164,
            DataFormatAstc6X6SrgbBlock = 165,
            DataFormatAstc8X5UnormBlock = 166,
            DataFormatAstc8X5SrgbBlock = 167,
            DataFormatAstc8X6UnormBlock = 168,
            DataFormatAstc8X6SrgbBlock = 169,
            DataFormatAstc8X8UnormBlock = 170,
            DataFormatAstc8X8SrgbBlock = 171,
            DataFormatAstc10X5UnormBlock = 172,
            DataFormatAstc10X5SrgbBlock = 173,
            DataFormatAstc10X6UnormBlock = 174,
            DataFormatAstc10X6SrgbBlock = 175,
            DataFormatAstc10X8UnormBlock = 176,
            DataFormatAstc10X8SrgbBlock = 177,
            DataFormatAstc10X10UnormBlock = 178,
            DataFormatAstc10X10SrgbBlock = 179,
            DataFormatAstc12X10UnormBlock = 180,
            DataFormatAstc12X10SrgbBlock = 181,
            DataFormatAstc12X12UnormBlock = 182,
            DataFormatAstc12X12SrgbBlock = 183,
            DataFormatG8B8G8R8422Unorm = 184,
            DataFormatB8G8R8G8422Unorm = 185,
            DataFormatG8B8R83Plane420Unorm = 186,
            DataFormatG8B8R82Plane420Unorm = 187,
            DataFormatG8B8R83Plane422Unorm = 188,
            DataFormatG8B8R82Plane422Unorm = 189,
            DataFormatG8B8R83Plane444Unorm = 190,
            DataFormatR10X6UnormPack16 = 191,
            DataFormatR10X6G10X6Unorm2Pack16 = 192,
            DataFormatR10X6G10X6B10X6A10X6Unorm4Pack16 = 193,
            DataFormatG10X6B10X6G10X6R10X6422Unorm4Pack16 = 194,
            DataFormatB10X6G10X6R10X6G10X6422Unorm4Pack16 = 195,
            DataFormatG10X6B10X6R10X63Plane420Unorm3Pack16 = 196,
            DataFormatG10X6B10X6R10X62Plane420Unorm3Pack16 = 197,
            DataFormatG10X6B10X6R10X63Plane422Unorm3Pack16 = 198,
            DataFormatG10X6B10X6R10X62Plane422Unorm3Pack16 = 199,
            DataFormatG10X6B10X6R10X63Plane444Unorm3Pack16 = 200,
            DataFormatR12X4UnormPack16 = 201,
            DataFormatR12X4G12X4Unorm2Pack16 = 202,
            DataFormatR12X4G12X4B12X4A12X4Unorm4Pack16 = 203,
            DataFormatG12X4B12X4G12X4R12X4422Unorm4Pack16 = 204,
            DataFormatB12X4G12X4R12X4G12X4422Unorm4Pack16 = 205,
            DataFormatG12X4B12X4R12X43Plane420Unorm3Pack16 = 206,
            DataFormatG12X4B12X4R12X42Plane420Unorm3Pack16 = 207,
            DataFormatG12X4B12X4R12X43Plane422Unorm3Pack16 = 208,
            DataFormatG12X4B12X4R12X42Plane422Unorm3Pack16 = 209,
            DataFormatG12X4B12X4R12X43Plane444Unorm3Pack16 = 210,
            DataFormatG16B16G16R16422Unorm = 211,
            DataFormatB16G16R16G16422Unorm = 212,
            DataFormatG16B16R163Plane420Unorm = 213,
            DataFormatG16B16R162Plane420Unorm = 214,
            DataFormatG16B16R163Plane422Unorm = 215,
            DataFormatG16B16R162Plane422Unorm = 216,
            DataFormatG16B16R163Plane444Unorm = 217,
            DataFormatMax = 218,
        }
        enum BarrierMask {
            BarrierMaskVertex = 1,
            BarrierMaskFragment = 8,
            BarrierMaskCompute = 2,
            BarrierMaskTransfer = 4,
            BarrierMaskRaster = 9,
            BarrierMaskAllBarriers = 32767,
            BarrierMaskNoBarrier = 32768,
        }
        enum TextureType {
            TextureType1D = 0,
            TextureType2D = 1,
            TextureType3D = 2,
            TextureTypeCube = 3,
            TextureType1DArray = 4,
            TextureType2DArray = 5,
            TextureTypeCubeArray = 6,
            TextureTypeMax = 7,
        }
        enum TextureSamples {
            TextureSamples1 = 0,
            TextureSamples2 = 1,
            TextureSamples4 = 2,
            TextureSamples8 = 3,
            TextureSamples16 = 4,
            TextureSamples32 = 5,
            TextureSamples64 = 6,
            TextureSamplesMax = 7,
        }
        enum TextureUsageBits {
            TextureUsageSamplingBit = 1,
            TextureUsageColorAttachmentBit = 2,
            TextureUsageDepthStencilAttachmentBit = 4,
            TextureUsageStorageBit = 8,
            TextureUsageStorageAtomicBit = 16,
            TextureUsageCpuReadBit = 32,
            TextureUsageCanUpdateBit = 64,
            TextureUsageCanCopyFromBit = 128,
            TextureUsageCanCopyToBit = 256,
            TextureUsageInputAttachmentBit = 512,
        }
        enum TextureSwizzle {
            TextureSwizzleIdentity = 0,
            TextureSwizzleZero = 1,
            TextureSwizzleOne = 2,
            TextureSwizzleR = 3,
            TextureSwizzleG = 4,
            TextureSwizzleB = 5,
            TextureSwizzleA = 6,
            TextureSwizzleMax = 7,
        }
        enum TextureSliceType {
            TextureSlice2D = 0,
            TextureSliceCubemap = 1,
            TextureSlice3D = 2,
        }
        enum SamplerFilter {
            SamplerFilterNearest = 0,
            SamplerFilterLinear = 1,
        }
        enum SamplerRepeatMode {
            SamplerRepeatModeRepeat = 0,
            SamplerRepeatModeMirroredRepeat = 1,
            SamplerRepeatModeClampToEdge = 2,
            SamplerRepeatModeClampToBorder = 3,
            SamplerRepeatModeMirrorClampToEdge = 4,
            SamplerRepeatModeMax = 5,
        }
        enum SamplerBorderColor {
            SamplerBorderColorFloatTransparentBlack = 0,
            SamplerBorderColorIntTransparentBlack = 1,
            SamplerBorderColorFloatOpaqueBlack = 2,
            SamplerBorderColorIntOpaqueBlack = 3,
            SamplerBorderColorFloatOpaqueWhite = 4,
            SamplerBorderColorIntOpaqueWhite = 5,
            SamplerBorderColorMax = 6,
        }
        enum VertexFrequency {
            VertexFrequencyVertex = 0,
            VertexFrequencyInstance = 1,
        }
        enum IndexBufferFormat {
            IndexBufferFormatUint16 = 0,
            IndexBufferFormatUint32 = 1,
        }
        enum StorageBufferUsage {
            StorageBufferUsageDispatchIndirect = 1,
        }
        enum BufferCreationBits {
            BufferCreationDeviceAddressBit = 1,
            BufferCreationAsStorageBit = 2,
        }
        enum UniformType {
            UniformTypeSampler = 0,
            UniformTypeSamplerWithTexture = 1,
            UniformTypeTexture = 2,
            UniformTypeImage = 3,
            UniformTypeTextureBuffer = 4,
            UniformTypeSamplerWithTextureBuffer = 5,
            UniformTypeImageBuffer = 6,
            UniformTypeUniformBuffer = 7,
            UniformTypeStorageBuffer = 8,
            UniformTypeInputAttachment = 9,
            UniformTypeMax = 10,
        }
        enum RenderPrimitive {
            RenderPrimitivePoints = 0,
            RenderPrimitiveLines = 1,
            RenderPrimitiveLinesWithAdjacency = 2,
            RenderPrimitiveLinestrips = 3,
            RenderPrimitiveLinestripsWithAdjacency = 4,
            RenderPrimitiveTriangles = 5,
            RenderPrimitiveTrianglesWithAdjacency = 6,
            RenderPrimitiveTriangleStrips = 7,
            RenderPrimitiveTriangleStripsWithAjacency = 8,
            RenderPrimitiveTriangleStripsWithRestartIndex = 9,
            RenderPrimitiveTesselationPatch = 10,
            RenderPrimitiveMax = 11,
        }
        enum PolygonCullMode {
            PolygonCullDisabled = 0,
            PolygonCullFront = 1,
            PolygonCullBack = 2,
        }
        enum PolygonFrontFace {
            PolygonFrontFaceClockwise = 0,
            PolygonFrontFaceCounterClockwise = 1,
        }
        enum StencilOperation {
            StencilOpKeep = 0,
            StencilOpZero = 1,
            StencilOpReplace = 2,
            StencilOpIncrementAndClamp = 3,
            StencilOpDecrementAndClamp = 4,
            StencilOpInvert = 5,
            StencilOpIncrementAndWrap = 6,
            StencilOpDecrementAndWrap = 7,
            StencilOpMax = 8,
        }
        enum CompareOperator {
            CompareOpNever = 0,
            CompareOpLess = 1,
            CompareOpEqual = 2,
            CompareOpLessOrEqual = 3,
            CompareOpGreater = 4,
            CompareOpNotEqual = 5,
            CompareOpGreaterOrEqual = 6,
            CompareOpAlways = 7,
            CompareOpMax = 8,
        }
        enum LogicOperation {
            LogicOpClear = 0,
            LogicOpAnd = 1,
            LogicOpAndReverse = 2,
            LogicOpCopy = 3,
            LogicOpAndInverted = 4,
            LogicOpNoOp = 5,
            LogicOpXor = 6,
            LogicOpOr = 7,
            LogicOpNor = 8,
            LogicOpEquivalent = 9,
            LogicOpInvert = 10,
            LogicOpOrReverse = 11,
            LogicOpCopyInverted = 12,
            LogicOpOrInverted = 13,
            LogicOpNand = 14,
            LogicOpSet = 15,
            LogicOpMax = 16,
        }
        enum BlendFactor {
            BlendFactorZero = 0,
            BlendFactorOne = 1,
            BlendFactorSrcColor = 2,
            BlendFactorOneMinusSrcColor = 3,
            BlendFactorDstColor = 4,
            BlendFactorOneMinusDstColor = 5,
            BlendFactorSrcAlpha = 6,
            BlendFactorOneMinusSrcAlpha = 7,
            BlendFactorDstAlpha = 8,
            BlendFactorOneMinusDstAlpha = 9,
            BlendFactorConstantColor = 10,
            BlendFactorOneMinusConstantColor = 11,
            BlendFactorConstantAlpha = 12,
            BlendFactorOneMinusConstantAlpha = 13,
            BlendFactorSrcAlphaSaturate = 14,
            BlendFactorSrc1Color = 15,
            BlendFactorOneMinusSrc1Color = 16,
            BlendFactorSrc1Alpha = 17,
            BlendFactorOneMinusSrc1Alpha = 18,
            BlendFactorMax = 19,
        }
        enum BlendOperation {
            BlendOpAdd = 0,
            BlendOpSubtract = 1,
            BlendOpReverseSubtract = 2,
            BlendOpMinimum = 3,
            BlendOpMaximum = 4,
            BlendOpMax = 5,
        }
        enum PipelineDynamicStateFlags {
            DynamicStateLineWidth = 1,
            DynamicStateDepthBias = 2,
            DynamicStateBlendConstants = 4,
            DynamicStateDepthBounds = 8,
            DynamicStateStencilCompareMask = 16,
            DynamicStateStencilWriteMask = 32,
            DynamicStateStencilReference = 64,
        }
        enum InitialAction {
            InitialActionLoad = 0,
            InitialActionClear = 1,
            InitialActionDiscard = 2,
            InitialActionMax = 3,
            InitialActionClearRegion = 1,
            InitialActionClearRegionContinue = 1,
            InitialActionKeep = 0,
            InitialActionDrop = 2,
            InitialActionContinue = 0,
        }
        enum FinalAction {
            FinalActionStore = 0,
            FinalActionDiscard = 1,
            FinalActionMax = 2,
            FinalActionRead = 0,
            FinalActionContinue = 0,
        }
        enum ShaderStage {
            ShaderStageVertex = 0,
            ShaderStageFragment = 1,
            ShaderStageTesselationControl = 2,
            ShaderStageTesselationEvaluation = 3,
            ShaderStageCompute = 4,
            ShaderStageMax = 5,
            ShaderStageVertexBit = 1,
            ShaderStageFragmentBit = 2,
            ShaderStageTesselationControlBit = 4,
            ShaderStageTesselationEvaluationBit = 8,
            ShaderStageComputeBit = 16,
        }
        enum ShaderLanguage {
            ShaderLanguageGlsl = 0,
            ShaderLanguageHlsl = 1,
        }
        enum PipelineSpecializationConstantType {
            PipelineSpecializationConstantTypeBool = 0,
            PipelineSpecializationConstantTypeInt = 1,
            PipelineSpecializationConstantTypeFloat = 2,
        }
        enum Features {
            SupportsBufferDeviceAddress = 6,
        }
        enum Limit {
            LimitMaxBoundUniformSets = 0,
            LimitMaxFramebufferColorAttachments = 1,
            LimitMaxTexturesPerUniformSet = 2,
            LimitMaxSamplersPerUniformSet = 3,
            LimitMaxStorageBuffersPerUniformSet = 4,
            LimitMaxStorageImagesPerUniformSet = 5,
            LimitMaxUniformBuffersPerUniformSet = 6,
            LimitMaxDrawIndexedIndex = 7,
            LimitMaxFramebufferHeight = 8,
            LimitMaxFramebufferWidth = 9,
            LimitMaxTextureArrayLayers = 10,
            LimitMaxTextureSize1D = 11,
            LimitMaxTextureSize2D = 12,
            LimitMaxTextureSize3D = 13,
            LimitMaxTextureSizeCube = 14,
            LimitMaxTexturesPerShaderStage = 15,
            LimitMaxSamplersPerShaderStage = 16,
            LimitMaxStorageBuffersPerShaderStage = 17,
            LimitMaxStorageImagesPerShaderStage = 18,
            LimitMaxUniformBuffersPerShaderStage = 19,
            LimitMaxPushConstantSize = 20,
            LimitMaxUniformBufferSize = 21,
            LimitMaxVertexInputAttributeOffset = 22,
            LimitMaxVertexInputAttributes = 23,
            LimitMaxVertexInputBindings = 24,
            LimitMaxVertexInputBindingStride = 25,
            LimitMinUniformBufferOffsetAlignment = 26,
            LimitMaxComputeSharedMemorySize = 27,
            LimitMaxComputeWorkgroupCountX = 28,
            LimitMaxComputeWorkgroupCountY = 29,
            LimitMaxComputeWorkgroupCountZ = 30,
            LimitMaxComputeWorkgroupInvocations = 31,
            LimitMaxComputeWorkgroupSizeX = 32,
            LimitMaxComputeWorkgroupSizeY = 33,
            LimitMaxComputeWorkgroupSizeZ = 34,
            LimitMaxViewportDimensionsX = 35,
            LimitMaxViewportDimensionsY = 36,
            LimitMetalfxTemporalScalerMinScale = 46,
            LimitMetalfxTemporalScalerMaxScale = 47,
        }
        enum MemoryType {
            MemoryTextures = 0,
            MemoryBuffers = 1,
            MemoryTotal = 2,
        }
        enum BreadcrumbMarker {
            None = 0,
            ReflectionProbes = 65536,
            SkyPass = 131072,
            LightmapperPass = 196608,
            ShadowPassDirectional = 262144,
            ShadowPassCube = 327680,
            OpaquePass = 393216,
            AlphaPass = 458752,
            TransparentPass = 524288,
            PostProcessingPass = 589824,
            BlitPass = 655360,
            UiPass = 720896,
            DebugPass = 786432,
        }
        enum DrawFlags {
            DrawDefaultAll = 0,
            DrawClearColor0 = 1,
            DrawClearColor1 = 2,
            DrawClearColor2 = 4,
            DrawClearColor3 = 8,
            DrawClearColor4 = 16,
            DrawClearColor5 = 32,
            DrawClearColor6 = 64,
            DrawClearColor7 = 128,
            DrawClearColorMask = 255,
            DrawClearColorAll = 255,
            DrawIgnoreColor0 = 256,
            DrawIgnoreColor1 = 512,
            DrawIgnoreColor2 = 1024,
            DrawIgnoreColor3 = 2048,
            DrawIgnoreColor4 = 4096,
            DrawIgnoreColor5 = 8192,
            DrawIgnoreColor6 = 16384,
            DrawIgnoreColor7 = 32768,
            DrawIgnoreColorMask = 65280,
            DrawIgnoreColorAll = 65280,
            DrawClearDepth = 65536,
            DrawIgnoreDepth = 131072,
            DrawClearStencil = 262144,
            DrawIgnoreStencil = 524288,
            DrawClearAll = 327935,
            DrawIgnoreAll = 720640,
        }
    }
    /** Abstraction for working with modern low-level graphics APIs.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_renderingdevice.html  
     */
    class RenderingDevice extends GObject {
        /** Rendering device type does not match any of the other enum values or is unknown. */
        static readonly DEVICE_TYPE_OTHER = 0
        
        /** Rendering device is an integrated GPU, which is typically  *(but not always)*  slower than dedicated GPUs ([constant DEVICE_TYPE_DISCRETE_GPU]). On Android and iOS, the rendering device type is always considered to be [constant DEVICE_TYPE_INTEGRATED_GPU]. */
        static readonly DEVICE_TYPE_INTEGRATED_GPU = 1
        
        /** Rendering device is a dedicated GPU, which is typically  *(but not always)*  faster than integrated GPUs ([constant DEVICE_TYPE_INTEGRATED_GPU]). */
        static readonly DEVICE_TYPE_DISCRETE_GPU = 2
        
        /** Rendering device is an emulated GPU in a virtual environment. This is typically much slower than the host GPU, which means the expected performance level on a dedicated GPU will be roughly equivalent to [constant DEVICE_TYPE_INTEGRATED_GPU]. Virtual machine GPU passthrough (such as VFIO) will not report the device type as [constant DEVICE_TYPE_VIRTUAL_GPU]. Instead, the host GPU's device type will be reported as if the GPU was not emulated. */
        static readonly DEVICE_TYPE_VIRTUAL_GPU = 3
        
        /** Rendering device is provided by software emulation (such as Lavapipe or [url=https://github.com/google/swiftshader]SwiftShader[/url]). This is the slowest kind of rendering device available; it's typically much slower than [constant DEVICE_TYPE_INTEGRATED_GPU]. */
        static readonly DEVICE_TYPE_CPU = 4
        
        /** Represents the size of the [enum DeviceType] enum. */
        static readonly DEVICE_TYPE_MAX = 5
        
        /** Specific device object based on a physical device.  
         *  - Vulkan: Vulkan device driver resource (`VkDevice`). (`rid` argument doesn't apply.)  
         */
        static readonly DRIVER_RESOURCE_LOGICAL_DEVICE = 0
        
        /** Physical device the specific logical device is based on.  
         *  - Vulkan: `VkDevice`. (`rid` argument doesn't apply.)  
         */
        static readonly DRIVER_RESOURCE_PHYSICAL_DEVICE = 1
        
        /** Top-most graphics API entry object.  
         *  - Vulkan: `VkInstance`. (`rid` argument doesn't apply.)  
         */
        static readonly DRIVER_RESOURCE_TOPMOST_OBJECT = 2
        
        /** The main graphics-compute command queue.  
         *  - Vulkan: `VkQueue`. (`rid` argument doesn't apply.)  
         */
        static readonly DRIVER_RESOURCE_COMMAND_QUEUE = 3
        
        /** The specific family the main queue belongs to.  
         *  - Vulkan: the queue family index, an `uint32_t`. (`rid` argument doesn't apply.)  
         */
        static readonly DRIVER_RESOURCE_QUEUE_FAMILY = 4
        
        /** - Vulkan: `VkImage`. */
        static readonly DRIVER_RESOURCE_TEXTURE = 5
        
        /** The view of an owned or shared texture.  
         *  - Vulkan: `VkImageView`.  
         */
        static readonly DRIVER_RESOURCE_TEXTURE_VIEW = 6
        
        /** The native id of the data format of the texture.  
         *  - Vulkan: `VkFormat`.  
         */
        static readonly DRIVER_RESOURCE_TEXTURE_DATA_FORMAT = 7
        
        /** - Vulkan: `VkSampler`. */
        static readonly DRIVER_RESOURCE_SAMPLER = 8
        
        /** - Vulkan: `VkDescriptorSet`. */
        static readonly DRIVER_RESOURCE_UNIFORM_SET = 9
        
        /** Buffer of any kind of (storage, vertex, etc.).  
         *  - Vulkan: `VkBuffer`.  
         */
        static readonly DRIVER_RESOURCE_BUFFER = 10
        
        /** - Vulkan: `VkPipeline`. */
        static readonly DRIVER_RESOURCE_COMPUTE_PIPELINE = 11
        
        /** - Vulkan: `VkPipeline`. */
        static readonly DRIVER_RESOURCE_RENDER_PIPELINE = 12
        static readonly DRIVER_RESOURCE_VULKAN_DEVICE = 0
        static readonly DRIVER_RESOURCE_VULKAN_PHYSICAL_DEVICE = 1
        static readonly DRIVER_RESOURCE_VULKAN_INSTANCE = 2
        static readonly DRIVER_RESOURCE_VULKAN_QUEUE = 3
        static readonly DRIVER_RESOURCE_VULKAN_QUEUE_FAMILY_INDEX = 4
        static readonly DRIVER_RESOURCE_VULKAN_IMAGE = 5
        static readonly DRIVER_RESOURCE_VULKAN_IMAGE_VIEW = 6
        static readonly DRIVER_RESOURCE_VULKAN_IMAGE_NATIVE_TEXTURE_FORMAT = 7
        static readonly DRIVER_RESOURCE_VULKAN_SAMPLER = 8
        static readonly DRIVER_RESOURCE_VULKAN_DESCRIPTOR_SET = 9
        static readonly DRIVER_RESOURCE_VULKAN_BUFFER = 10
        static readonly DRIVER_RESOURCE_VULKAN_COMPUTE_PIPELINE = 11
        static readonly DRIVER_RESOURCE_VULKAN_RENDER_PIPELINE = 12
        
        /** 4-bit-per-channel red/green channel data format, packed into 8 bits. Values are in the `[0.0, 1.0]` range.  
         *      
         *  **Note:** More information on all data formats can be found on the [url=https://registry.khronos.org/vulkan/specs/1.1/html/vkspec.html#_identification_of_formats]Identification of formats[/url] section of the Vulkan specification, as well as the [url=https://registry.khronos.org/vulkan/specs/1.3-extensions/man/html/VkFormat.html]VkFormat[/url] enum.  
         */
        static readonly DATA_FORMAT_R4G4_UNORM_PACK8 = 0
        
        /** 4-bit-per-channel red/green/blue/alpha channel data format, packed into 16 bits. Values are in the `[0.0, 1.0]` range. */
        static readonly DATA_FORMAT_R4G4B4A4_UNORM_PACK16 = 1
        
        /** 4-bit-per-channel blue/green/red/alpha channel data format, packed into 16 bits. Values are in the `[0.0, 1.0]` range. */
        static readonly DATA_FORMAT_B4G4R4A4_UNORM_PACK16 = 2
        
        /** Red/green/blue channel data format with 5 bits of red, 6 bits of green and 5 bits of blue, packed into 16 bits. Values are in the `[0.0, 1.0]` range. */
        static readonly DATA_FORMAT_R5G6B5_UNORM_PACK16 = 3
        
        /** Blue/green/red channel data format with 5 bits of blue, 6 bits of green and 5 bits of red, packed into 16 bits. Values are in the `[0.0, 1.0]` range. */
        static readonly DATA_FORMAT_B5G6R5_UNORM_PACK16 = 4
        
        /** Red/green/blue/alpha channel data format with 5 bits of red, 6 bits of green, 5 bits of blue and 1 bit of alpha, packed into 16 bits. Values are in the `[0.0, 1.0]` range. */
        static readonly DATA_FORMAT_R5G5B5A1_UNORM_PACK16 = 5
        
        /** Blue/green/red/alpha channel data format with 5 bits of blue, 6 bits of green, 5 bits of red and 1 bit of alpha, packed into 16 bits. Values are in the `[0.0, 1.0]` range. */
        static readonly DATA_FORMAT_B5G5R5A1_UNORM_PACK16 = 6
        
        /** Alpha/red/green/blue channel data format with 1 bit of alpha, 5 bits of red, 6 bits of green and 5 bits of blue, packed into 16 bits. Values are in the `[0.0, 1.0]` range. */
        static readonly DATA_FORMAT_A1R5G5B5_UNORM_PACK16 = 7
        
        /** 8-bit-per-channel unsigned floating-point red channel data format with normalized value. Values are in the `[0.0, 1.0]` range. */
        static readonly DATA_FORMAT_R8_UNORM = 8
        
        /** 8-bit-per-channel signed floating-point red channel data format with normalized value. Values are in the `[-1.0, 1.0]` range. */
        static readonly DATA_FORMAT_R8_SNORM = 9
        
        /** 8-bit-per-channel unsigned floating-point red channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 255.0]` range. */
        static readonly DATA_FORMAT_R8_USCALED = 10
        
        /** 8-bit-per-channel signed floating-point red channel data format with scaled value (value is converted from integer to float). Values are in the `[-127.0, 127.0]` range. */
        static readonly DATA_FORMAT_R8_SSCALED = 11
        
        /** 8-bit-per-channel unsigned integer red channel data format. Values are in the `[0, 255]` range. */
        static readonly DATA_FORMAT_R8_UINT = 12
        
        /** 8-bit-per-channel signed integer red channel data format. Values are in the `[-127, 127]` range. */
        static readonly DATA_FORMAT_R8_SINT = 13
        
        /** 8-bit-per-channel unsigned floating-point red channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. */
        static readonly DATA_FORMAT_R8_SRGB = 14
        
        /** 8-bit-per-channel unsigned floating-point red/green channel data format with normalized value. Values are in the `[0.0, 1.0]` range. */
        static readonly DATA_FORMAT_R8G8_UNORM = 15
        
        /** 8-bit-per-channel signed floating-point red/green channel data format with normalized value. Values are in the `[-1.0, 1.0]` range. */
        static readonly DATA_FORMAT_R8G8_SNORM = 16
        
        /** 8-bit-per-channel unsigned floating-point red/green channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 255.0]` range. */
        static readonly DATA_FORMAT_R8G8_USCALED = 17
        
        /** 8-bit-per-channel signed floating-point red/green channel data format with scaled value (value is converted from integer to float). Values are in the `[-127.0, 127.0]` range. */
        static readonly DATA_FORMAT_R8G8_SSCALED = 18
        
        /** 8-bit-per-channel unsigned integer red/green channel data format. Values are in the `[0, 255]` range. */
        static readonly DATA_FORMAT_R8G8_UINT = 19
        
        /** 8-bit-per-channel signed integer red/green channel data format. Values are in the `[-127, 127]` range. */
        static readonly DATA_FORMAT_R8G8_SINT = 20
        
        /** 8-bit-per-channel unsigned floating-point red/green channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. */
        static readonly DATA_FORMAT_R8G8_SRGB = 21
        
        /** 8-bit-per-channel unsigned floating-point red/green/blue channel data format with normalized value. Values are in the `[0.0, 1.0]` range. */
        static readonly DATA_FORMAT_R8G8B8_UNORM = 22
        
        /** 8-bit-per-channel signed floating-point red/green/blue channel data format with normalized value. Values are in the `[-1.0, 1.0]` range. */
        static readonly DATA_FORMAT_R8G8B8_SNORM = 23
        
        /** 8-bit-per-channel unsigned floating-point red/green/blue channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 255.0]` range. */
        static readonly DATA_FORMAT_R8G8B8_USCALED = 24
        
        /** 8-bit-per-channel signed floating-point red/green/blue channel data format with scaled value (value is converted from integer to float). Values are in the `[-127.0, 127.0]` range. */
        static readonly DATA_FORMAT_R8G8B8_SSCALED = 25
        
        /** 8-bit-per-channel unsigned integer red/green/blue channel data format. Values are in the `[0, 255]` range. */
        static readonly DATA_FORMAT_R8G8B8_UINT = 26
        
        /** 8-bit-per-channel signed integer red/green/blue channel data format. Values are in the `[-127, 127]` range. */
        static readonly DATA_FORMAT_R8G8B8_SINT = 27
        
        /** 8-bit-per-channel unsigned floating-point red/green/blue/blue channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. */
        static readonly DATA_FORMAT_R8G8B8_SRGB = 28
        
        /** 8-bit-per-channel unsigned floating-point blue/green/red channel data format with normalized value. Values are in the `[0.0, 1.0]` range. */
        static readonly DATA_FORMAT_B8G8R8_UNORM = 29
        
        /** 8-bit-per-channel signed floating-point blue/green/red channel data format with normalized value. Values are in the `[-1.0, 1.0]` range. */
        static readonly DATA_FORMAT_B8G8R8_SNORM = 30
        
        /** 8-bit-per-channel unsigned floating-point blue/green/red channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 255.0]` range. */
        static readonly DATA_FORMAT_B8G8R8_USCALED = 31
        
        /** 8-bit-per-channel signed floating-point blue/green/red channel data format with scaled value (value is converted from integer to float). Values are in the `[-127.0, 127.0]` range. */
        static readonly DATA_FORMAT_B8G8R8_SSCALED = 32
        
        /** 8-bit-per-channel unsigned integer blue/green/red channel data format. Values are in the `[0, 255]` range. */
        static readonly DATA_FORMAT_B8G8R8_UINT = 33
        
        /** 8-bit-per-channel signed integer blue/green/red channel data format. Values are in the `[-127, 127]` range. */
        static readonly DATA_FORMAT_B8G8R8_SINT = 34
        
        /** 8-bit-per-channel unsigned floating-point blue/green/red data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. */
        static readonly DATA_FORMAT_B8G8R8_SRGB = 35
        
        /** 8-bit-per-channel unsigned floating-point red/green/blue/alpha channel data format with normalized value. Values are in the `[0.0, 1.0]` range. */
        static readonly DATA_FORMAT_R8G8B8A8_UNORM = 36
        
        /** 8-bit-per-channel signed floating-point red/green/blue/alpha channel data format with normalized value. Values are in the `[-1.0, 1.0]` range. */
        static readonly DATA_FORMAT_R8G8B8A8_SNORM = 37
        
        /** 8-bit-per-channel unsigned floating-point red/green/blue/alpha channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 255.0]` range. */
        static readonly DATA_FORMAT_R8G8B8A8_USCALED = 38
        
        /** 8-bit-per-channel signed floating-point red/green/blue/alpha channel data format with scaled value (value is converted from integer to float). Values are in the `[-127.0, 127.0]` range. */
        static readonly DATA_FORMAT_R8G8B8A8_SSCALED = 39
        
        /** 8-bit-per-channel unsigned integer red/green/blue/alpha channel data format. Values are in the `[0, 255]` range. */
        static readonly DATA_FORMAT_R8G8B8A8_UINT = 40
        
        /** 8-bit-per-channel signed integer red/green/blue/alpha channel data format. Values are in the `[-127, 127]` range. */
        static readonly DATA_FORMAT_R8G8B8A8_SINT = 41
        
        /** 8-bit-per-channel unsigned floating-point red/green/blue/alpha channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. */
        static readonly DATA_FORMAT_R8G8B8A8_SRGB = 42
        
        /** 8-bit-per-channel unsigned floating-point blue/green/red/alpha channel data format with normalized value. Values are in the `[0.0, 1.0]` range. */
        static readonly DATA_FORMAT_B8G8R8A8_UNORM = 43
        
        /** 8-bit-per-channel signed floating-point blue/green/red/alpha channel data format with normalized value. Values are in the `[-1.0, 1.0]` range. */
        static readonly DATA_FORMAT_B8G8R8A8_SNORM = 44
        
        /** 8-bit-per-channel unsigned floating-point blue/green/red/alpha channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 255.0]` range. */
        static readonly DATA_FORMAT_B8G8R8A8_USCALED = 45
        
        /** 8-bit-per-channel signed floating-point blue/green/red/alpha channel data format with scaled value (value is converted from integer to float). Values are in the `[-127.0, 127.0]` range. */
        static readonly DATA_FORMAT_B8G8R8A8_SSCALED = 46
        
        /** 8-bit-per-channel unsigned integer blue/green/red/alpha channel data format. Values are in the `[0, 255]` range. */
        static readonly DATA_FORMAT_B8G8R8A8_UINT = 47
        
        /** 8-bit-per-channel signed integer blue/green/red/alpha channel data format. Values are in the `[-127, 127]` range. */
        static readonly DATA_FORMAT_B8G8R8A8_SINT = 48
        
        /** 8-bit-per-channel unsigned floating-point blue/green/red/alpha channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. */
        static readonly DATA_FORMAT_B8G8R8A8_SRGB = 49
        
        /** 8-bit-per-channel unsigned floating-point alpha/red/green/blue channel data format with normalized value, packed in 32 bits. Values are in the `[0.0, 1.0]` range. */
        static readonly DATA_FORMAT_A8B8G8R8_UNORM_PACK32 = 50
        
        /** 8-bit-per-channel signed floating-point alpha/red/green/blue channel data format with normalized value, packed in 32 bits. Values are in the `[-1.0, 1.0]` range. */
        static readonly DATA_FORMAT_A8B8G8R8_SNORM_PACK32 = 51
        
        /** 8-bit-per-channel unsigned floating-point alpha/red/green/blue channel data format with scaled value (value is converted from integer to float), packed in 32 bits. Values are in the `[0.0, 255.0]` range. */
        static readonly DATA_FORMAT_A8B8G8R8_USCALED_PACK32 = 52
        
        /** 8-bit-per-channel signed floating-point alpha/red/green/blue channel data format with scaled value (value is converted from integer to float), packed in 32 bits. Values are in the `[-127.0, 127.0]` range. */
        static readonly DATA_FORMAT_A8B8G8R8_SSCALED_PACK32 = 53
        
        /** 8-bit-per-channel unsigned integer alpha/red/green/blue channel data format, packed in 32 bits. Values are in the `[0, 255]` range. */
        static readonly DATA_FORMAT_A8B8G8R8_UINT_PACK32 = 54
        
        /** 8-bit-per-channel signed integer alpha/red/green/blue channel data format, packed in 32 bits. Values are in the `[-127, 127]` range. */
        static readonly DATA_FORMAT_A8B8G8R8_SINT_PACK32 = 55
        
        /** 8-bit-per-channel unsigned floating-point alpha/red/green/blue channel data format with normalized value and non-linear sRGB encoding, packed in 32 bits. Values are in the `[0.0, 1.0]` range. */
        static readonly DATA_FORMAT_A8B8G8R8_SRGB_PACK32 = 56
        
        /** Unsigned floating-point alpha/red/green/blue channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of red, 10 bits of green and 10 bits of blue. Values are in the `[0.0, 1.0]` range. */
        static readonly DATA_FORMAT_A2R10G10B10_UNORM_PACK32 = 57
        
        /** Signed floating-point alpha/red/green/blue channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of red, 10 bits of green and 10 bits of blue. Values are in the `[-1.0, 1.0]` range. */
        static readonly DATA_FORMAT_A2R10G10B10_SNORM_PACK32 = 58
        
        /** Unsigned floating-point alpha/red/green/blue channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of red, 10 bits of green and 10 bits of blue. Values are in the `[0.0, 1023.0]` range for red/green/blue and `[0.0, 3.0]` for alpha. */
        static readonly DATA_FORMAT_A2R10G10B10_USCALED_PACK32 = 59
        
        /** Signed floating-point alpha/red/green/blue channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of red, 10 bits of green and 10 bits of blue. Values are in the `[-511.0, 511.0]` range for red/green/blue and `[-1.0, 1.0]` for alpha. */
        static readonly DATA_FORMAT_A2R10G10B10_SSCALED_PACK32 = 60
        
        /** Unsigned integer alpha/red/green/blue channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of red, 10 bits of green and 10 bits of blue. Values are in the `[0, 1023]` range for red/green/blue and `[0, 3]` for alpha. */
        static readonly DATA_FORMAT_A2R10G10B10_UINT_PACK32 = 61
        
        /** Signed integer alpha/red/green/blue channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of red, 10 bits of green and 10 bits of blue. Values are in the `[-511, 511]` range for red/green/blue and `[-1, 1]` for alpha. */
        static readonly DATA_FORMAT_A2R10G10B10_SINT_PACK32 = 62
        
        /** Unsigned floating-point alpha/blue/green/red channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of blue, 10 bits of green and 10 bits of red. Values are in the `[0.0, 1.0]` range. */
        static readonly DATA_FORMAT_A2B10G10R10_UNORM_PACK32 = 63
        
        /** Signed floating-point alpha/blue/green/red channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of blue, 10 bits of green and 10 bits of red. Values are in the `[-1.0, 1.0]` range. */
        static readonly DATA_FORMAT_A2B10G10R10_SNORM_PACK32 = 64
        
        /** Unsigned floating-point alpha/blue/green/red channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of blue, 10 bits of green and 10 bits of red. Values are in the `[0.0, 1023.0]` range for blue/green/red and `[0.0, 3.0]` for alpha. */
        static readonly DATA_FORMAT_A2B10G10R10_USCALED_PACK32 = 65
        
        /** Signed floating-point alpha/blue/green/red channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of blue, 10 bits of green and 10 bits of red. Values are in the `[-511.0, 511.0]` range for blue/green/red and `[-1.0, 1.0]` for alpha. */
        static readonly DATA_FORMAT_A2B10G10R10_SSCALED_PACK32 = 66
        
        /** Unsigned integer alpha/blue/green/red channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of blue, 10 bits of green and 10 bits of red. Values are in the `[0, 1023]` range for blue/green/red and `[0, 3]` for alpha. */
        static readonly DATA_FORMAT_A2B10G10R10_UINT_PACK32 = 67
        
        /** Signed integer alpha/blue/green/red channel data format with normalized value, packed in 32 bits. Format contains 2 bits of alpha, 10 bits of blue, 10 bits of green and 10 bits of red. Values are in the `[-511, 511]` range for blue/green/red and `[-1, 1]` for alpha. */
        static readonly DATA_FORMAT_A2B10G10R10_SINT_PACK32 = 68
        
        /** 16-bit-per-channel unsigned floating-point red channel data format with normalized value. Values are in the `[0.0, 1.0]` range. */
        static readonly DATA_FORMAT_R16_UNORM = 69
        
        /** 16-bit-per-channel signed floating-point red channel data format with normalized value. Values are in the `[-1.0, 1.0]` range. */
        static readonly DATA_FORMAT_R16_SNORM = 70
        
        /** 16-bit-per-channel unsigned floating-point red channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 65535.0]` range. */
        static readonly DATA_FORMAT_R16_USCALED = 71
        
        /** 16-bit-per-channel signed floating-point red channel data format with scaled value (value is converted from integer to float). Values are in the `[-32767.0, 32767.0]` range. */
        static readonly DATA_FORMAT_R16_SSCALED = 72
        
        /** 16-bit-per-channel unsigned integer red channel data format. Values are in the `[0.0, 65535]` range. */
        static readonly DATA_FORMAT_R16_UINT = 73
        
        /** 16-bit-per-channel signed integer red channel data format. Values are in the `[-32767, 32767]` range. */
        static readonly DATA_FORMAT_R16_SINT = 74
        
        /** 16-bit-per-channel signed floating-point red channel data format with the value stored as-is. */
        static readonly DATA_FORMAT_R16_SFLOAT = 75
        
        /** 16-bit-per-channel unsigned floating-point red/green channel data format with normalized value. Values are in the `[0.0, 1.0]` range. */
        static readonly DATA_FORMAT_R16G16_UNORM = 76
        
        /** 16-bit-per-channel signed floating-point red/green channel data format with normalized value. Values are in the `[-1.0, 1.0]` range. */
        static readonly DATA_FORMAT_R16G16_SNORM = 77
        
        /** 16-bit-per-channel unsigned floating-point red/green channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 65535.0]` range. */
        static readonly DATA_FORMAT_R16G16_USCALED = 78
        
        /** 16-bit-per-channel signed floating-point red/green channel data format with scaled value (value is converted from integer to float). Values are in the `[-32767.0, 32767.0]` range. */
        static readonly DATA_FORMAT_R16G16_SSCALED = 79
        
        /** 16-bit-per-channel unsigned integer red/green channel data format. Values are in the `[0.0, 65535]` range. */
        static readonly DATA_FORMAT_R16G16_UINT = 80
        
        /** 16-bit-per-channel signed integer red/green channel data format. Values are in the `[-32767, 32767]` range. */
        static readonly DATA_FORMAT_R16G16_SINT = 81
        
        /** 16-bit-per-channel signed floating-point red/green channel data format with the value stored as-is. */
        static readonly DATA_FORMAT_R16G16_SFLOAT = 82
        
        /** 16-bit-per-channel unsigned floating-point red/green/blue channel data format with normalized value. Values are in the `[0.0, 1.0]` range. */
        static readonly DATA_FORMAT_R16G16B16_UNORM = 83
        
        /** 16-bit-per-channel signed floating-point red/green/blue channel data format with normalized value. Values are in the `[-1.0, 1.0]` range. */
        static readonly DATA_FORMAT_R16G16B16_SNORM = 84
        
        /** 16-bit-per-channel unsigned floating-point red/green/blue channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 65535.0]` range. */
        static readonly DATA_FORMAT_R16G16B16_USCALED = 85
        
        /** 16-bit-per-channel signed floating-point red/green/blue channel data format with scaled value (value is converted from integer to float). Values are in the `[-32767.0, 32767.0]` range. */
        static readonly DATA_FORMAT_R16G16B16_SSCALED = 86
        
        /** 16-bit-per-channel unsigned integer red/green/blue channel data format. Values are in the `[0.0, 65535]` range. */
        static readonly DATA_FORMAT_R16G16B16_UINT = 87
        
        /** 16-bit-per-channel signed integer red/green/blue channel data format. Values are in the `[-32767, 32767]` range. */
        static readonly DATA_FORMAT_R16G16B16_SINT = 88
        
        /** 16-bit-per-channel signed floating-point red/green/blue channel data format with the value stored as-is. */
        static readonly DATA_FORMAT_R16G16B16_SFLOAT = 89
        
        /** 16-bit-per-channel unsigned floating-point red/green/blue/alpha channel data format with normalized value. Values are in the `[0.0, 1.0]` range. */
        static readonly DATA_FORMAT_R16G16B16A16_UNORM = 90
        
        /** 16-bit-per-channel signed floating-point red/green/blue/alpha channel data format with normalized value. Values are in the `[-1.0, 1.0]` range. */
        static readonly DATA_FORMAT_R16G16B16A16_SNORM = 91
        
        /** 16-bit-per-channel unsigned floating-point red/green/blue/alpha channel data format with scaled value (value is converted from integer to float). Values are in the `[0.0, 65535.0]` range. */
        static readonly DATA_FORMAT_R16G16B16A16_USCALED = 92
        
        /** 16-bit-per-channel signed floating-point red/green/blue/alpha channel data format with scaled value (value is converted from integer to float). Values are in the `[-32767.0, 32767.0]` range. */
        static readonly DATA_FORMAT_R16G16B16A16_SSCALED = 93
        
        /** 16-bit-per-channel unsigned integer red/green/blue/alpha channel data format. Values are in the `[0.0, 65535]` range. */
        static readonly DATA_FORMAT_R16G16B16A16_UINT = 94
        
        /** 16-bit-per-channel signed integer red/green/blue/alpha channel data format. Values are in the `[-32767, 32767]` range. */
        static readonly DATA_FORMAT_R16G16B16A16_SINT = 95
        
        /** 16-bit-per-channel signed floating-point red/green/blue/alpha channel data format with the value stored as-is. */
        static readonly DATA_FORMAT_R16G16B16A16_SFLOAT = 96
        
        /** 32-bit-per-channel unsigned integer red channel data format. Values are in the `[0, 2^32 - 1]` range. */
        static readonly DATA_FORMAT_R32_UINT = 97
        
        /** 32-bit-per-channel signed integer red channel data format. Values are in the `[2^31 + 1, 2^31 - 1]` range. */
        static readonly DATA_FORMAT_R32_SINT = 98
        
        /** 32-bit-per-channel signed floating-point red channel data format with the value stored as-is. */
        static readonly DATA_FORMAT_R32_SFLOAT = 99
        
        /** 32-bit-per-channel unsigned integer red/green channel data format. Values are in the `[0, 2^32 - 1]` range. */
        static readonly DATA_FORMAT_R32G32_UINT = 100
        
        /** 32-bit-per-channel signed integer red/green channel data format. Values are in the `[2^31 + 1, 2^31 - 1]` range. */
        static readonly DATA_FORMAT_R32G32_SINT = 101
        
        /** 32-bit-per-channel signed floating-point red/green channel data format with the value stored as-is. */
        static readonly DATA_FORMAT_R32G32_SFLOAT = 102
        
        /** 32-bit-per-channel unsigned integer red/green/blue channel data format. Values are in the `[0, 2^32 - 1]` range. */
        static readonly DATA_FORMAT_R32G32B32_UINT = 103
        
        /** 32-bit-per-channel signed integer red/green/blue channel data format. Values are in the `[2^31 + 1, 2^31 - 1]` range. */
        static readonly DATA_FORMAT_R32G32B32_SINT = 104
        
        /** 32-bit-per-channel signed floating-point red/green/blue channel data format with the value stored as-is. */
        static readonly DATA_FORMAT_R32G32B32_SFLOAT = 105
        
        /** 32-bit-per-channel unsigned integer red/green/blue/alpha channel data format. Values are in the `[0, 2^32 - 1]` range. */
        static readonly DATA_FORMAT_R32G32B32A32_UINT = 106
        
        /** 32-bit-per-channel signed integer red/green/blue/alpha channel data format. Values are in the `[2^31 + 1, 2^31 - 1]` range. */
        static readonly DATA_FORMAT_R32G32B32A32_SINT = 107
        
        /** 32-bit-per-channel signed floating-point red/green/blue/alpha channel data format with the value stored as-is. */
        static readonly DATA_FORMAT_R32G32B32A32_SFLOAT = 108
        
        /** 64-bit-per-channel unsigned integer red channel data format. Values are in the `[0, 2^64 - 1]` range. */
        static readonly DATA_FORMAT_R64_UINT = 109
        
        /** 64-bit-per-channel signed integer red channel data format. Values are in the `[2^63 + 1, 2^63 - 1]` range. */
        static readonly DATA_FORMAT_R64_SINT = 110
        
        /** 64-bit-per-channel signed floating-point red channel data format with the value stored as-is. */
        static readonly DATA_FORMAT_R64_SFLOAT = 111
        
        /** 64-bit-per-channel unsigned integer red/green channel data format. Values are in the `[0, 2^64 - 1]` range. */
        static readonly DATA_FORMAT_R64G64_UINT = 112
        
        /** 64-bit-per-channel signed integer red/green channel data format. Values are in the `[2^63 + 1, 2^63 - 1]` range. */
        static readonly DATA_FORMAT_R64G64_SINT = 113
        
        /** 64-bit-per-channel signed floating-point red/green channel data format with the value stored as-is. */
        static readonly DATA_FORMAT_R64G64_SFLOAT = 114
        
        /** 64-bit-per-channel unsigned integer red/green/blue channel data format. Values are in the `[0, 2^64 - 1]` range. */
        static readonly DATA_FORMAT_R64G64B64_UINT = 115
        
        /** 64-bit-per-channel signed integer red/green/blue channel data format. Values are in the `[2^63 + 1, 2^63 - 1]` range. */
        static readonly DATA_FORMAT_R64G64B64_SINT = 116
        
        /** 64-bit-per-channel signed floating-point red/green/blue channel data format with the value stored as-is. */
        static readonly DATA_FORMAT_R64G64B64_SFLOAT = 117
        
        /** 64-bit-per-channel unsigned integer red/green/blue/alpha channel data format. Values are in the `[0, 2^64 - 1]` range. */
        static readonly DATA_FORMAT_R64G64B64A64_UINT = 118
        
        /** 64-bit-per-channel signed integer red/green/blue/alpha channel data format. Values are in the `[2^63 + 1, 2^63 - 1]` range. */
        static readonly DATA_FORMAT_R64G64B64A64_SINT = 119
        
        /** 64-bit-per-channel signed floating-point red/green/blue/alpha channel data format with the value stored as-is. */
        static readonly DATA_FORMAT_R64G64B64A64_SFLOAT = 120
        
        /** Unsigned floating-point blue/green/red data format with the value stored as-is, packed in 32 bits. The format's precision is 10 bits of blue channel, 11 bits of green channel and 11 bits of red channel. */
        static readonly DATA_FORMAT_B10G11R11_UFLOAT_PACK32 = 121
        
        /** Unsigned floating-point exposure/blue/green/red data format with the value stored as-is, packed in 32 bits. The format's precision is 5 bits of exposure, 9 bits of blue channel, 9 bits of green channel and 9 bits of red channel. */
        static readonly DATA_FORMAT_E5B9G9R9_UFLOAT_PACK32 = 122
        
        /** 16-bit unsigned floating-point depth data format with normalized value. Values are in the `[0.0, 1.0]` range. */
        static readonly DATA_FORMAT_D16_UNORM = 123
        
        /** 24-bit unsigned floating-point depth data format with normalized value, plus 8 unused bits, packed in 32 bits. Values for depth are in the `[0.0, 1.0]` range. */
        static readonly DATA_FORMAT_X8_D24_UNORM_PACK32 = 124
        
        /** 32-bit signed floating-point depth data format with the value stored as-is. */
        static readonly DATA_FORMAT_D32_SFLOAT = 125
        
        /** 8-bit unsigned integer stencil data format. */
        static readonly DATA_FORMAT_S8_UINT = 126
        
        /** 16-bit unsigned floating-point depth data format with normalized value, plus 8 bits of stencil in unsigned integer format. Values for depth are in the `[0.0, 1.0]` range. Values for stencil are in the `[0, 255]` range. */
        static readonly DATA_FORMAT_D16_UNORM_S8_UINT = 127
        
        /** 24-bit unsigned floating-point depth data format with normalized value, plus 8 bits of stencil in unsigned integer format. Values for depth are in the `[0.0, 1.0]` range. Values for stencil are in the `[0, 255]` range. */
        static readonly DATA_FORMAT_D24_UNORM_S8_UINT = 128
        
        /** 32-bit signed floating-point depth data format with the value stored as-is, plus 8 bits of stencil in unsigned integer format. Values for stencil are in the `[0, 255]` range. */
        static readonly DATA_FORMAT_D32_SFLOAT_S8_UINT = 129
        
        /** VRAM-compressed unsigned red/green/blue channel data format with normalized value. Values are in the `[0.0, 1.0]` range. The format's precision is 5 bits of red channel, 6 bits of green channel and 5 bits of blue channel. Using BC1 texture compression (also known as S3TC DXT1). */
        static readonly DATA_FORMAT_BC1_RGB_UNORM_BLOCK = 130
        
        /** VRAM-compressed unsigned red/green/blue channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. The format's precision is 5 bits of red channel, 6 bits of green channel and 5 bits of blue channel. Using BC1 texture compression (also known as S3TC DXT1). */
        static readonly DATA_FORMAT_BC1_RGB_SRGB_BLOCK = 131
        
        /** VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value. Values are in the `[0.0, 1.0]` range. The format's precision is 5 bits of red channel, 6 bits of green channel, 5 bits of blue channel and 1 bit of alpha channel. Using BC1 texture compression (also known as S3TC DXT1). */
        static readonly DATA_FORMAT_BC1_RGBA_UNORM_BLOCK = 132
        
        /** VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. The format's precision is 5 bits of red channel, 6 bits of green channel, 5 bits of blue channel and 1 bit of alpha channel. Using BC1 texture compression (also known as S3TC DXT1). */
        static readonly DATA_FORMAT_BC1_RGBA_SRGB_BLOCK = 133
        
        /** VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value. Values are in the `[0.0, 1.0]` range. The format's precision is 5 bits of red channel, 6 bits of green channel, 5 bits of blue channel and 4 bits of alpha channel. Using BC2 texture compression (also known as S3TC DXT3). */
        static readonly DATA_FORMAT_BC2_UNORM_BLOCK = 134
        
        /** VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. The format's precision is 5 bits of red channel, 6 bits of green channel, 5 bits of blue channel and 4 bits of alpha channel. Using BC2 texture compression (also known as S3TC DXT3). */
        static readonly DATA_FORMAT_BC2_SRGB_BLOCK = 135
        
        /** VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value. Values are in the `[0.0, 1.0]` range. The format's precision is 5 bits of red channel, 6 bits of green channel, 5 bits of blue channel and 8 bits of alpha channel. Using BC3 texture compression (also known as S3TC DXT5). */
        static readonly DATA_FORMAT_BC3_UNORM_BLOCK = 136
        
        /** VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. The format's precision is 5 bits of red channel, 6 bits of green channel, 5 bits of blue channel and 8 bits of alpha channel. Using BC3 texture compression (also known as S3TC DXT5). */
        static readonly DATA_FORMAT_BC3_SRGB_BLOCK = 137
        
        /** VRAM-compressed unsigned red channel data format with normalized value. Values are in the `[0.0, 1.0]` range. The format's precision is 8 bits of red channel. Using BC4 texture compression. */
        static readonly DATA_FORMAT_BC4_UNORM_BLOCK = 138
        
        /** VRAM-compressed signed red channel data format with normalized value. Values are in the `[-1.0, 1.0]` range. The format's precision is 8 bits of red channel. Using BC4 texture compression. */
        static readonly DATA_FORMAT_BC4_SNORM_BLOCK = 139
        
        /** VRAM-compressed unsigned red/green channel data format with normalized value. Values are in the `[0.0, 1.0]` range. The format's precision is 8 bits of red channel and 8 bits of green channel. Using BC5 texture compression (also known as S3TC RGTC). */
        static readonly DATA_FORMAT_BC5_UNORM_BLOCK = 140
        
        /** VRAM-compressed signed red/green channel data format with normalized value. Values are in the `[-1.0, 1.0]` range. The format's precision is 8 bits of red channel and 8 bits of green channel. Using BC5 texture compression (also known as S3TC RGTC). */
        static readonly DATA_FORMAT_BC5_SNORM_BLOCK = 141
        
        /** VRAM-compressed unsigned red/green/blue channel data format with the floating-point value stored as-is. The format's precision is between 10 and 13 bits for the red/green/blue channels. Using BC6H texture compression (also known as BPTC HDR). */
        static readonly DATA_FORMAT_BC6H_UFLOAT_BLOCK = 142
        
        /** VRAM-compressed signed red/green/blue channel data format with the floating-point value stored as-is. The format's precision is between 10 and 13 bits for the red/green/blue channels. Using BC6H texture compression (also known as BPTC HDR). */
        static readonly DATA_FORMAT_BC6H_SFLOAT_BLOCK = 143
        
        /** VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value. Values are in the `[0.0, 1.0]` range. The format's precision is between 4 and 7 bits for the red/green/blue channels and between 0 and 8 bits for the alpha channel. Also known as BPTC LDR. */
        static readonly DATA_FORMAT_BC7_UNORM_BLOCK = 144
        
        /** VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. The format's precision is between 4 and 7 bits for the red/green/blue channels and between 0 and 8 bits for the alpha channel. Also known as BPTC LDR. */
        static readonly DATA_FORMAT_BC7_SRGB_BLOCK = 145
        
        /** VRAM-compressed unsigned red/green/blue channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Using ETC2 texture compression. */
        static readonly DATA_FORMAT_ETC2_R8G8B8_UNORM_BLOCK = 146
        
        /** VRAM-compressed unsigned red/green/blue channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. Using ETC2 texture compression. */
        static readonly DATA_FORMAT_ETC2_R8G8B8_SRGB_BLOCK = 147
        
        /** VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Red/green/blue use 8 bit of precision each, with alpha using 1 bit of precision. Using ETC2 texture compression. */
        static readonly DATA_FORMAT_ETC2_R8G8B8A1_UNORM_BLOCK = 148
        
        /** VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. Red/green/blue use 8 bit of precision each, with alpha using 1 bit of precision. Using ETC2 texture compression. */
        static readonly DATA_FORMAT_ETC2_R8G8B8A1_SRGB_BLOCK = 149
        
        /** VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Red/green/blue use 8 bits of precision each, with alpha using 8 bits of precision. Using ETC2 texture compression. */
        static readonly DATA_FORMAT_ETC2_R8G8B8A8_UNORM_BLOCK = 150
        
        /** VRAM-compressed unsigned red/green/blue/alpha channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. Red/green/blue use 8 bits of precision each, with alpha using 8 bits of precision. Using ETC2 texture compression. */
        static readonly DATA_FORMAT_ETC2_R8G8B8A8_SRGB_BLOCK = 151
        
        /** 11-bit VRAM-compressed unsigned red channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Using ETC2 texture compression. */
        static readonly DATA_FORMAT_EAC_R11_UNORM_BLOCK = 152
        
        /** 11-bit VRAM-compressed signed red channel data format with normalized value. Values are in the `[-1.0, 1.0]` range. Using ETC2 texture compression. */
        static readonly DATA_FORMAT_EAC_R11_SNORM_BLOCK = 153
        
        /** 11-bit VRAM-compressed unsigned red/green channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Using ETC2 texture compression. */
        static readonly DATA_FORMAT_EAC_R11G11_UNORM_BLOCK = 154
        
        /** 11-bit VRAM-compressed signed red/green channel data format with normalized value. Values are in the `[-1.0, 1.0]` range. Using ETC2 texture compression. */
        static readonly DATA_FORMAT_EAC_R11G11_SNORM_BLOCK = 155
        
        /** VRAM-compressed unsigned floating-point data format with normalized value, packed in 4×4 blocks (highest quality). Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
        static readonly DATA_FORMAT_ASTC_4x4_UNORM_BLOCK = 156
        
        /** VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 4×4 blocks (highest quality). Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
        static readonly DATA_FORMAT_ASTC_4x4_SRGB_BLOCK = 157
        
        /** VRAM-compressed unsigned floating-point data format with normalized value, packed in 5×4 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
        static readonly DATA_FORMAT_ASTC_5x4_UNORM_BLOCK = 158
        
        /** VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 5×4 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
        static readonly DATA_FORMAT_ASTC_5x4_SRGB_BLOCK = 159
        
        /** VRAM-compressed unsigned floating-point data format with normalized value, packed in 5×5 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
        static readonly DATA_FORMAT_ASTC_5x5_UNORM_BLOCK = 160
        
        /** VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 5×5 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
        static readonly DATA_FORMAT_ASTC_5x5_SRGB_BLOCK = 161
        
        /** VRAM-compressed unsigned floating-point data format with normalized value, packed in 6×5 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
        static readonly DATA_FORMAT_ASTC_6x5_UNORM_BLOCK = 162
        
        /** VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 6×5 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
        static readonly DATA_FORMAT_ASTC_6x5_SRGB_BLOCK = 163
        
        /** VRAM-compressed unsigned floating-point data format with normalized value, packed in 6×6 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
        static readonly DATA_FORMAT_ASTC_6x6_UNORM_BLOCK = 164
        
        /** VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 6×6 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
        static readonly DATA_FORMAT_ASTC_6x6_SRGB_BLOCK = 165
        
        /** VRAM-compressed unsigned floating-point data format with normalized value, packed in 8×5 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
        static readonly DATA_FORMAT_ASTC_8x5_UNORM_BLOCK = 166
        
        /** VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 8×5 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
        static readonly DATA_FORMAT_ASTC_8x5_SRGB_BLOCK = 167
        
        /** VRAM-compressed unsigned floating-point data format with normalized value, packed in 8×6 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
        static readonly DATA_FORMAT_ASTC_8x6_UNORM_BLOCK = 168
        
        /** VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 8×6 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
        static readonly DATA_FORMAT_ASTC_8x6_SRGB_BLOCK = 169
        
        /** VRAM-compressed unsigned floating-point data format with normalized value, packed in 8×8 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
        static readonly DATA_FORMAT_ASTC_8x8_UNORM_BLOCK = 170
        
        /** VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 8×8 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
        static readonly DATA_FORMAT_ASTC_8x8_SRGB_BLOCK = 171
        
        /** VRAM-compressed unsigned floating-point data format with normalized value, packed in 10×5 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
        static readonly DATA_FORMAT_ASTC_10x5_UNORM_BLOCK = 172
        
        /** VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 10×5 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
        static readonly DATA_FORMAT_ASTC_10x5_SRGB_BLOCK = 173
        
        /** VRAM-compressed unsigned floating-point data format with normalized value, packed in 10×6 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
        static readonly DATA_FORMAT_ASTC_10x6_UNORM_BLOCK = 174
        
        /** VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 10×6 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
        static readonly DATA_FORMAT_ASTC_10x6_SRGB_BLOCK = 175
        
        /** VRAM-compressed unsigned floating-point data format with normalized value, packed in 10×8 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
        static readonly DATA_FORMAT_ASTC_10x8_UNORM_BLOCK = 176
        
        /** VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 10×8 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
        static readonly DATA_FORMAT_ASTC_10x8_SRGB_BLOCK = 177
        
        /** VRAM-compressed unsigned floating-point data format with normalized value, packed in 10×10 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
        static readonly DATA_FORMAT_ASTC_10x10_UNORM_BLOCK = 178
        
        /** VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 10×10 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
        static readonly DATA_FORMAT_ASTC_10x10_SRGB_BLOCK = 179
        
        /** VRAM-compressed unsigned floating-point data format with normalized value, packed in 12×10 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
        static readonly DATA_FORMAT_ASTC_12x10_UNORM_BLOCK = 180
        
        /** VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 12×10 blocks. Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
        static readonly DATA_FORMAT_ASTC_12x10_SRGB_BLOCK = 181
        
        /** VRAM-compressed unsigned floating-point data format with normalized value, packed in 12 blocks (lowest quality). Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
        static readonly DATA_FORMAT_ASTC_12x12_UNORM_BLOCK = 182
        
        /** VRAM-compressed unsigned floating-point data format with normalized value and non-linear sRGB encoding, packed in 12 blocks (lowest quality). Values are in the `[0.0, 1.0]` range. Using ASTC compression. */
        static readonly DATA_FORMAT_ASTC_12x12_SRGB_BLOCK = 183
        
        /** 8-bit-per-channel unsigned floating-point green/blue/red channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel). */
        static readonly DATA_FORMAT_G8B8G8R8_422_UNORM = 184
        
        /** 8-bit-per-channel unsigned floating-point blue/green/red channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel). */
        static readonly DATA_FORMAT_B8G8R8G8_422_UNORM = 185
        
        /** 8-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, stored across 3 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal and vertical resolution (i.e. 2×2 adjacent pixels will share the same value for the blue/red channel). */
        static readonly DATA_FORMAT_G8_B8_R8_3PLANE_420_UNORM = 186
        
        /** 8-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, stored across 2 separate planes (green + blue/red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal and vertical resolution (i.e. 2×2 adjacent pixels will share the same value for the blue/red channel). */
        static readonly DATA_FORMAT_G8_B8R8_2PLANE_420_UNORM = 187
        
        /** 8-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, stored across 2 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel). */
        static readonly DATA_FORMAT_G8_B8_R8_3PLANE_422_UNORM = 188
        
        /** 8-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, stored across 2 separate planes (green + blue/red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel). */
        static readonly DATA_FORMAT_G8_B8R8_2PLANE_422_UNORM = 189
        
        /** 8-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, stored across 3 separate planes. Values are in the `[0.0, 1.0]` range. */
        static readonly DATA_FORMAT_G8_B8_R8_3PLANE_444_UNORM = 190
        
        /** 10-bit-per-channel unsigned floating-point red channel data with normalized value, plus 6 unused bits, packed in 16 bits. Values are in the `[0.0, 1.0]` range. */
        static readonly DATA_FORMAT_R10X6_UNORM_PACK16 = 191
        
        /** 10-bit-per-channel unsigned floating-point red/green channel data with normalized value, plus 6 unused bits after each channel, packed in 2×16 bits. Values are in the `[0.0, 1.0]` range. */
        static readonly DATA_FORMAT_R10X6G10X6_UNORM_2PACK16 = 192
        
        /** 10-bit-per-channel unsigned floating-point red/green/blue/alpha channel data with normalized value, plus 6 unused bits after each channel, packed in 4×16 bits. Values are in the `[0.0, 1.0]` range. */
        static readonly DATA_FORMAT_R10X6G10X6B10X6A10X6_UNORM_4PACK16 = 193
        
        /** 10-bit-per-channel unsigned floating-point green/blue/green/red channel data with normalized value, plus 6 unused bits after each channel, packed in 4×16 bits. Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel). The green channel is listed twice, but contains different values to allow it to be represented at full resolution. */
        static readonly DATA_FORMAT_G10X6B10X6G10X6R10X6_422_UNORM_4PACK16 = 194
        
        /** 10-bit-per-channel unsigned floating-point blue/green/red/green channel data with normalized value, plus 6 unused bits after each channel, packed in 4×16 bits. Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel). The green channel is listed twice, but contains different values to allow it to be represented at full resolution. */
        static readonly DATA_FORMAT_B10X6G10X6R10X6G10X6_422_UNORM_4PACK16 = 195
        
        /** 10-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 2 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal and vertical resolution (i.e. 2×2 adjacent pixels will share the same value for the blue/red channel). */
        static readonly DATA_FORMAT_G10X6_B10X6_R10X6_3PLANE_420_UNORM_3PACK16 = 196
        
        /** 10-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 2 separate planes (green + blue/red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal and vertical resolution (i.e. 2×2 adjacent pixels will share the same value for the blue/red channel). */
        static readonly DATA_FORMAT_G10X6_B10X6R10X6_2PLANE_420_UNORM_3PACK16 = 197
        
        /** 10-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 3 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel). */
        static readonly DATA_FORMAT_G10X6_B10X6_R10X6_3PLANE_422_UNORM_3PACK16 = 198
        
        /** 10-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 3 separate planes (green + blue/red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel). */
        static readonly DATA_FORMAT_G10X6_B10X6R10X6_2PLANE_422_UNORM_3PACK16 = 199
        
        /** 10-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 3 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. */
        static readonly DATA_FORMAT_G10X6_B10X6_R10X6_3PLANE_444_UNORM_3PACK16 = 200
        
        /** 12-bit-per-channel unsigned floating-point red channel data with normalized value, plus 6 unused bits, packed in 16 bits. Values are in the `[0.0, 1.0]` range. */
        static readonly DATA_FORMAT_R12X4_UNORM_PACK16 = 201
        
        /** 12-bit-per-channel unsigned floating-point red/green channel data with normalized value, plus 6 unused bits after each channel, packed in 2×16 bits. Values are in the `[0.0, 1.0]` range. */
        static readonly DATA_FORMAT_R12X4G12X4_UNORM_2PACK16 = 202
        
        /** 12-bit-per-channel unsigned floating-point red/green/blue/alpha channel data with normalized value, plus 6 unused bits after each channel, packed in 4×16 bits. Values are in the `[0.0, 1.0]` range. */
        static readonly DATA_FORMAT_R12X4G12X4B12X4A12X4_UNORM_4PACK16 = 203
        
        /** 12-bit-per-channel unsigned floating-point green/blue/green/red channel data with normalized value, plus 6 unused bits after each channel, packed in 4×16 bits. Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel). The green channel is listed twice, but contains different values to allow it to be represented at full resolution. */
        static readonly DATA_FORMAT_G12X4B12X4G12X4R12X4_422_UNORM_4PACK16 = 204
        
        /** 12-bit-per-channel unsigned floating-point blue/green/red/green channel data with normalized value, plus 6 unused bits after each channel, packed in 4×16 bits. Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel). The green channel is listed twice, but contains different values to allow it to be represented at full resolution. */
        static readonly DATA_FORMAT_B12X4G12X4R12X4G12X4_422_UNORM_4PACK16 = 205
        
        /** 12-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 2 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal and vertical resolution (i.e. 2×2 adjacent pixels will share the same value for the blue/red channel). */
        static readonly DATA_FORMAT_G12X4_B12X4_R12X4_3PLANE_420_UNORM_3PACK16 = 206
        
        /** 12-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 2 separate planes (green + blue/red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal and vertical resolution (i.e. 2×2 adjacent pixels will share the same value for the blue/red channel). */
        static readonly DATA_FORMAT_G12X4_B12X4R12X4_2PLANE_420_UNORM_3PACK16 = 207
        
        /** 12-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 3 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel). */
        static readonly DATA_FORMAT_G12X4_B12X4_R12X4_3PLANE_422_UNORM_3PACK16 = 208
        
        /** 12-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 3 separate planes (green + blue/red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel). */
        static readonly DATA_FORMAT_G12X4_B12X4R12X4_2PLANE_422_UNORM_3PACK16 = 209
        
        /** 12-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Packed in 3×16 bits and stored across 3 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. */
        static readonly DATA_FORMAT_G12X4_B12X4_R12X4_3PLANE_444_UNORM_3PACK16 = 210
        
        /** 16-bit-per-channel unsigned floating-point green/blue/red channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel). */
        static readonly DATA_FORMAT_G16B16G16R16_422_UNORM = 211
        
        /** 16-bit-per-channel unsigned floating-point blue/green/red channel data format with normalized value. Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel). */
        static readonly DATA_FORMAT_B16G16R16G16_422_UNORM = 212
        
        /** 16-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Stored across 2 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal and vertical resolution (i.e. 2×2 adjacent pixels will share the same value for the blue/red channel). */
        static readonly DATA_FORMAT_G16_B16_R16_3PLANE_420_UNORM = 213
        
        /** 16-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Stored across 2 separate planes (green + blue/red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal and vertical resolution (i.e. 2×2 adjacent pixels will share the same value for the blue/red channel). */
        static readonly DATA_FORMAT_G16_B16R16_2PLANE_420_UNORM = 214
        
        /** 16-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Stored across 3 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel). */
        static readonly DATA_FORMAT_G16_B16_R16_3PLANE_422_UNORM = 215
        
        /** 16-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Stored across 3 separate planes (green + blue/red). Values are in the `[0.0, 1.0]` range. Blue and red channel data is stored at halved horizontal resolution (i.e. 2 horizontally adjacent pixels will share the same value for the blue/red channel). */
        static readonly DATA_FORMAT_G16_B16R16_2PLANE_422_UNORM = 216
        
        /** 16-bit-per-channel unsigned floating-point green/blue/red channel data with normalized value, plus 6 unused bits after each channel. Stored across 3 separate planes (green + blue + red). Values are in the `[0.0, 1.0]` range. */
        static readonly DATA_FORMAT_G16_B16_R16_3PLANE_444_UNORM = 217
        
        /** Represents the size of the [enum DataFormat] enum. */
        static readonly DATA_FORMAT_MAX = 218
        
        /** Vertex shader barrier mask. */
        static readonly BARRIER_MASK_VERTEX = 1
        
        /** Fragment shader barrier mask. */
        static readonly BARRIER_MASK_FRAGMENT = 8
        
        /** Compute barrier mask. */
        static readonly BARRIER_MASK_COMPUTE = 2
        
        /** Transfer barrier mask. */
        static readonly BARRIER_MASK_TRANSFER = 4
        
        /** Raster barrier mask (vertex and fragment). Equivalent to `BARRIER_MASK_VERTEX | BARRIER_MASK_FRAGMENT`. */
        static readonly BARRIER_MASK_RASTER = 9
        
        /** Barrier mask for all types (vertex, fragment, compute, transfer). */
        static readonly BARRIER_MASK_ALL_BARRIERS = 32767
        
        /** No barrier for any type. */
        static readonly BARRIER_MASK_NO_BARRIER = 32768
        
        /** 1-dimensional texture. */
        static readonly TEXTURE_TYPE_1D = 0
        
        /** 2-dimensional texture. */
        static readonly TEXTURE_TYPE_2D = 1
        
        /** 3-dimensional texture. */
        static readonly TEXTURE_TYPE_3D = 2
        
        /** [Cubemap] texture. */
        static readonly TEXTURE_TYPE_CUBE = 3
        
        /** Array of 1-dimensional textures. */
        static readonly TEXTURE_TYPE_1D_ARRAY = 4
        
        /** Array of 2-dimensional textures. */
        static readonly TEXTURE_TYPE_2D_ARRAY = 5
        
        /** Array of [Cubemap] textures. */
        static readonly TEXTURE_TYPE_CUBE_ARRAY = 6
        
        /** Represents the size of the [enum TextureType] enum. */
        static readonly TEXTURE_TYPE_MAX = 7
        
        /** Perform 1 texture sample (this is the fastest but lowest-quality for antialiasing). */
        static readonly TEXTURE_SAMPLES_1 = 0
        
        /** Perform 2 texture samples. */
        static readonly TEXTURE_SAMPLES_2 = 1
        
        /** Perform 4 texture samples. */
        static readonly TEXTURE_SAMPLES_4 = 2
        
        /** Perform 8 texture samples. Not supported on mobile GPUs (including Apple Silicon). */
        static readonly TEXTURE_SAMPLES_8 = 3
        
        /** Perform 16 texture samples. Not supported on mobile GPUs and many desktop GPUs. */
        static readonly TEXTURE_SAMPLES_16 = 4
        
        /** Perform 32 texture samples. Not supported on most GPUs. */
        static readonly TEXTURE_SAMPLES_32 = 5
        
        /** Perform 64 texture samples (this is the slowest but highest-quality for antialiasing). Not supported on most GPUs. */
        static readonly TEXTURE_SAMPLES_64 = 6
        
        /** Represents the size of the [enum TextureSamples] enum. */
        static readonly TEXTURE_SAMPLES_MAX = 7
        
        /** Texture can be sampled. */
        static readonly TEXTURE_USAGE_SAMPLING_BIT = 1
        
        /** Texture can be used as a color attachment in a framebuffer. */
        static readonly TEXTURE_USAGE_COLOR_ATTACHMENT_BIT = 2
        
        /** Texture can be used as a depth/stencil attachment in a framebuffer. */
        static readonly TEXTURE_USAGE_DEPTH_STENCIL_ATTACHMENT_BIT = 4
        
        /** Texture can be used as a [url=https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#descriptorsets-storageimage]storage image[/url]. */
        static readonly TEXTURE_USAGE_STORAGE_BIT = 8
        
        /** Texture can be used as a [url=https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#descriptorsets-storageimage]storage image[/url] with support for atomic operations. */
        static readonly TEXTURE_USAGE_STORAGE_ATOMIC_BIT = 16
        
        /** Texture can be read back on the CPU using [method texture_get_data] faster than without this bit, since it is always kept in the system memory. */
        static readonly TEXTURE_USAGE_CPU_READ_BIT = 32
        
        /** Texture can be updated using [method texture_update]. */
        static readonly TEXTURE_USAGE_CAN_UPDATE_BIT = 64
        
        /** Texture can be a source for [method texture_copy]. */
        static readonly TEXTURE_USAGE_CAN_COPY_FROM_BIT = 128
        
        /** Texture can be a destination for [method texture_copy]. */
        static readonly TEXTURE_USAGE_CAN_COPY_TO_BIT = 256
        
        /** Texture can be used as a [url=https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#descriptorsets-inputattachment]input attachment[/url] in a framebuffer. */
        static readonly TEXTURE_USAGE_INPUT_ATTACHMENT_BIT = 512
        
        /** Return the sampled value as-is. */
        static readonly TEXTURE_SWIZZLE_IDENTITY = 0
        
        /** Always return `0.0` when sampling. */
        static readonly TEXTURE_SWIZZLE_ZERO = 1
        
        /** Always return `1.0` when sampling. */
        static readonly TEXTURE_SWIZZLE_ONE = 2
        
        /** Sample the red color channel. */
        static readonly TEXTURE_SWIZZLE_R = 3
        
        /** Sample the green color channel. */
        static readonly TEXTURE_SWIZZLE_G = 4
        
        /** Sample the blue color channel. */
        static readonly TEXTURE_SWIZZLE_B = 5
        
        /** Sample the alpha channel. */
        static readonly TEXTURE_SWIZZLE_A = 6
        
        /** Represents the size of the [enum TextureSwizzle] enum. */
        static readonly TEXTURE_SWIZZLE_MAX = 7
        
        /** 2-dimensional texture slice. */
        static readonly TEXTURE_SLICE_2D = 0
        
        /** Cubemap texture slice. */
        static readonly TEXTURE_SLICE_CUBEMAP = 1
        
        /** 3-dimensional texture slice. */
        static readonly TEXTURE_SLICE_3D = 2
        
        /** Nearest-neighbor sampler filtering. Sampling at higher resolutions than the source will result in a pixelated look. */
        static readonly SAMPLER_FILTER_NEAREST = 0
        
        /** Bilinear sampler filtering. Sampling at higher resolutions than the source will result in a blurry look. */
        static readonly SAMPLER_FILTER_LINEAR = 1
        
        /** Sample with repeating enabled. */
        static readonly SAMPLER_REPEAT_MODE_REPEAT = 0
        
        /** Sample with mirrored repeating enabled. When sampling outside the `[0.0, 1.0]` range, return a mirrored version of the sampler. This mirrored version is mirrored again if sampling further away, with the pattern repeating indefinitely. */
        static readonly SAMPLER_REPEAT_MODE_MIRRORED_REPEAT = 1
        
        /** Sample with repeating disabled. When sampling outside the `[0.0, 1.0]` range, return the color of the last pixel on the edge. */
        static readonly SAMPLER_REPEAT_MODE_CLAMP_TO_EDGE = 2
        
        /** Sample with repeating disabled. When sampling outside the `[0.0, 1.0]` range, return the specified [member RDSamplerState.border_color]. */
        static readonly SAMPLER_REPEAT_MODE_CLAMP_TO_BORDER = 3
        
        /** Sample with mirrored repeating enabled, but only once. When sampling in the `[-1.0, 0.0]` range, return a mirrored version of the sampler. When sampling outside the `[-1.0, 1.0]` range, return the color of the last pixel on the edge. */
        static readonly SAMPLER_REPEAT_MODE_MIRROR_CLAMP_TO_EDGE = 4
        
        /** Represents the size of the [enum SamplerRepeatMode] enum. */
        static readonly SAMPLER_REPEAT_MODE_MAX = 5
        
        /** Return a floating-point transparent black color when sampling outside the `[0.0, 1.0]` range. Only effective if the sampler repeat mode is [constant SAMPLER_REPEAT_MODE_CLAMP_TO_BORDER]. */
        static readonly SAMPLER_BORDER_COLOR_FLOAT_TRANSPARENT_BLACK = 0
        
        /** Return a integer transparent black color when sampling outside the `[0.0, 1.0]` range. Only effective if the sampler repeat mode is [constant SAMPLER_REPEAT_MODE_CLAMP_TO_BORDER]. */
        static readonly SAMPLER_BORDER_COLOR_INT_TRANSPARENT_BLACK = 1
        
        /** Return a floating-point opaque black color when sampling outside the `[0.0, 1.0]` range. Only effective if the sampler repeat mode is [constant SAMPLER_REPEAT_MODE_CLAMP_TO_BORDER]. */
        static readonly SAMPLER_BORDER_COLOR_FLOAT_OPAQUE_BLACK = 2
        
        /** Return a integer opaque black color when sampling outside the `[0.0, 1.0]` range. Only effective if the sampler repeat mode is [constant SAMPLER_REPEAT_MODE_CLAMP_TO_BORDER]. */
        static readonly SAMPLER_BORDER_COLOR_INT_OPAQUE_BLACK = 3
        
        /** Return a floating-point opaque white color when sampling outside the `[0.0, 1.0]` range. Only effective if the sampler repeat mode is [constant SAMPLER_REPEAT_MODE_CLAMP_TO_BORDER]. */
        static readonly SAMPLER_BORDER_COLOR_FLOAT_OPAQUE_WHITE = 4
        
        /** Return a integer opaque white color when sampling outside the `[0.0, 1.0]` range. Only effective if the sampler repeat mode is [constant SAMPLER_REPEAT_MODE_CLAMP_TO_BORDER]. */
        static readonly SAMPLER_BORDER_COLOR_INT_OPAQUE_WHITE = 5
        
        /** Represents the size of the [enum SamplerBorderColor] enum. */
        static readonly SAMPLER_BORDER_COLOR_MAX = 6
        
        /** Vertex attribute addressing is a function of the vertex. This is used to specify the rate at which vertex attributes are pulled from buffers. */
        static readonly VERTEX_FREQUENCY_VERTEX = 0
        
        /** Vertex attribute addressing is a function of the instance index. This is used to specify the rate at which vertex attributes are pulled from buffers. */
        static readonly VERTEX_FREQUENCY_INSTANCE = 1
        
        /** Index buffer in 16-bit unsigned integer format. This limits the maximum index that can be specified to `65535`. */
        static readonly INDEX_BUFFER_FORMAT_UINT16 = 0
        
        /** Index buffer in 32-bit unsigned integer format. This limits the maximum index that can be specified to `4294967295`. */
        static readonly INDEX_BUFFER_FORMAT_UINT32 = 1
        static readonly STORAGE_BUFFER_USAGE_DISPATCH_INDIRECT = 1
        
        /** Optionally, set this flag if you wish to use [method buffer_get_device_address] functionality. You must first check the GPU supports it:  
         *    
         */
        static readonly BUFFER_CREATION_DEVICE_ADDRESS_BIT = 1
        
        /** Set this flag so that it is created as storage. This is useful if Compute Shaders need access (for reading or writing) to the buffer, e.g. skeletal animations are processed in Compute Shaders which need access to vertex buffers, to be later consumed by vertex shaders as part of the regular rasterization pipeline. */
        static readonly BUFFER_CREATION_AS_STORAGE_BIT = 2
        
        /** Sampler uniform. */
        static readonly UNIFORM_TYPE_SAMPLER = 0
        
        /** Sampler uniform with a texture. */
        static readonly UNIFORM_TYPE_SAMPLER_WITH_TEXTURE = 1
        
        /** Texture uniform. */
        static readonly UNIFORM_TYPE_TEXTURE = 2
        
        /** Image uniform. */
        static readonly UNIFORM_TYPE_IMAGE = 3
        
        /** Texture buffer uniform. */
        static readonly UNIFORM_TYPE_TEXTURE_BUFFER = 4
        
        /** Sampler uniform with a texture buffer. */
        static readonly UNIFORM_TYPE_SAMPLER_WITH_TEXTURE_BUFFER = 5
        
        /** Image buffer uniform. */
        static readonly UNIFORM_TYPE_IMAGE_BUFFER = 6
        
        /** Uniform buffer uniform. */
        static readonly UNIFORM_TYPE_UNIFORM_BUFFER = 7
        
        /** [url=https://vkguide.dev/docs/chapter-4/storage_buffers/]Storage buffer[/url] uniform. */
        static readonly UNIFORM_TYPE_STORAGE_BUFFER = 8
        
        /** Input attachment uniform. */
        static readonly UNIFORM_TYPE_INPUT_ATTACHMENT = 9
        
        /** Represents the size of the [enum UniformType] enum. */
        static readonly UNIFORM_TYPE_MAX = 10
        
        /** Point rendering primitive (with constant size, regardless of distance from camera). */
        static readonly RENDER_PRIMITIVE_POINTS = 0
        
        /** Line list rendering primitive. Lines are drawn separated from each other. */
        static readonly RENDER_PRIMITIVE_LINES = 1
        
        /** [url=https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#drawing-line-lists-with-adjacency]Line list rendering primitive with adjacency.[/url]  
         *      
         *  **Note:** Adjacency is only useful with geometry shaders, which Godot does not expose.  
         */
        static readonly RENDER_PRIMITIVE_LINES_WITH_ADJACENCY = 2
        
        /** Line strip rendering primitive. Lines drawn are connected to the previous vertex. */
        static readonly RENDER_PRIMITIVE_LINESTRIPS = 3
        
        /** [url=https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#drawing-line-strips-with-adjacency]Line strip rendering primitive with adjacency.[/url]  
         *      
         *  **Note:** Adjacency is only useful with geometry shaders, which Godot does not expose.  
         */
        static readonly RENDER_PRIMITIVE_LINESTRIPS_WITH_ADJACENCY = 4
        
        /** Triangle list rendering primitive. Triangles are drawn separated from each other. */
        static readonly RENDER_PRIMITIVE_TRIANGLES = 5
        
        /** [url=https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#drawing-triangle-lists-with-adjacency]Triangle list rendering primitive with adjacency.[/url]  
         *       
         *  **Note:** Adjacency is only useful with geometry shaders, which Godot does not expose.  
         */
        static readonly RENDER_PRIMITIVE_TRIANGLES_WITH_ADJACENCY = 6
        
        /** Triangle strip rendering primitive. Triangles drawn are connected to the previous triangle. */
        static readonly RENDER_PRIMITIVE_TRIANGLE_STRIPS = 7
        
        /** [url=https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#drawing-triangle-strips-with-adjacency]Triangle strip rendering primitive with adjacency.[/url]  
         *      
         *  **Note:** Adjacency is only useful with geometry shaders, which Godot does not expose.  
         */
        static readonly RENDER_PRIMITIVE_TRIANGLE_STRIPS_WITH_AJACENCY = 8
        
        /** Triangle strip rendering primitive with  *primitive restart*  enabled. Triangles drawn are connected to the previous triangle, but a primitive restart index can be specified before drawing to create a second triangle strip after the specified index.  
         *      
         *  **Note:** Only compatible with indexed draws.  
         */
        static readonly RENDER_PRIMITIVE_TRIANGLE_STRIPS_WITH_RESTART_INDEX = 9
        
        /** Tessellation patch rendering primitive. Only useful with tessellation shaders, which can be used to deform these patches. */
        static readonly RENDER_PRIMITIVE_TESSELATION_PATCH = 10
        
        /** Represents the size of the [enum RenderPrimitive] enum. */
        static readonly RENDER_PRIMITIVE_MAX = 11
        
        /** Do not use polygon front face or backface culling. */
        static readonly POLYGON_CULL_DISABLED = 0
        
        /** Use polygon frontface culling (faces pointing towards the camera are hidden). */
        static readonly POLYGON_CULL_FRONT = 1
        
        /** Use polygon backface culling (faces pointing away from the camera are hidden). */
        static readonly POLYGON_CULL_BACK = 2
        
        /** Clockwise winding order to determine which face of a polygon is its front face. */
        static readonly POLYGON_FRONT_FACE_CLOCKWISE = 0
        
        /** Counter-clockwise winding order to determine which face of a polygon is its front face. */
        static readonly POLYGON_FRONT_FACE_COUNTER_CLOCKWISE = 1
        
        /** Keep the current stencil value. */
        static readonly STENCIL_OP_KEEP = 0
        
        /** Set the stencil value to `0`. */
        static readonly STENCIL_OP_ZERO = 1
        
        /** Replace the existing stencil value with the new one. */
        static readonly STENCIL_OP_REPLACE = 2
        
        /** Increment the existing stencil value and clamp to the maximum representable unsigned value if reached. Stencil bits are considered as an unsigned integer. */
        static readonly STENCIL_OP_INCREMENT_AND_CLAMP = 3
        
        /** Decrement the existing stencil value and clamp to the minimum value if reached. Stencil bits are considered as an unsigned integer. */
        static readonly STENCIL_OP_DECREMENT_AND_CLAMP = 4
        
        /** Bitwise-invert the existing stencil value. */
        static readonly STENCIL_OP_INVERT = 5
        
        /** Increment the stencil value and wrap around to `0` if reaching the maximum representable unsigned. Stencil bits are considered as an unsigned integer. */
        static readonly STENCIL_OP_INCREMENT_AND_WRAP = 6
        
        /** Decrement the stencil value and wrap around to the maximum representable unsigned if reaching the minimum. Stencil bits are considered as an unsigned integer. */
        static readonly STENCIL_OP_DECREMENT_AND_WRAP = 7
        
        /** Represents the size of the [enum StencilOperation] enum. */
        static readonly STENCIL_OP_MAX = 8
        
        /** "Never" comparison (opposite of [constant COMPARE_OP_ALWAYS]). */
        static readonly COMPARE_OP_NEVER = 0
        
        /** "Less than" comparison. */
        static readonly COMPARE_OP_LESS = 1
        
        /** "Equal" comparison. */
        static readonly COMPARE_OP_EQUAL = 2
        
        /** "Less than or equal" comparison. */
        static readonly COMPARE_OP_LESS_OR_EQUAL = 3
        
        /** "Greater than" comparison. */
        static readonly COMPARE_OP_GREATER = 4
        
        /** "Not equal" comparison. */
        static readonly COMPARE_OP_NOT_EQUAL = 5
        
        /** "Greater than or equal" comparison. */
        static readonly COMPARE_OP_GREATER_OR_EQUAL = 6
        
        /** "Always" comparison (opposite of [constant COMPARE_OP_NEVER]). */
        static readonly COMPARE_OP_ALWAYS = 7
        
        /** Represents the size of the [enum CompareOperator] enum. */
        static readonly COMPARE_OP_MAX = 8
        
        /** Clear logic operation (result is always `0`). See also [constant LOGIC_OP_SET]. */
        static readonly LOGIC_OP_CLEAR = 0
        
        /** AND logic operation. */
        static readonly LOGIC_OP_AND = 1
        
        /** AND logic operation with the  *destination*  operand being inverted. See also [constant LOGIC_OP_AND_INVERTED]. */
        static readonly LOGIC_OP_AND_REVERSE = 2
        
        /** Copy logic operation (keeps the  *source*  value as-is). See also [constant LOGIC_OP_COPY_INVERTED] and [constant LOGIC_OP_NO_OP]. */
        static readonly LOGIC_OP_COPY = 3
        
        /** AND logic operation with the  *source*  operand being inverted. See also [constant LOGIC_OP_AND_REVERSE]. */
        static readonly LOGIC_OP_AND_INVERTED = 4
        
        /** No-op logic operation (keeps the  *destination*  value as-is). See also [constant LOGIC_OP_COPY]. */
        static readonly LOGIC_OP_NO_OP = 5
        
        /** Exclusive or (XOR) logic operation. */
        static readonly LOGIC_OP_XOR = 6
        
        /** OR logic operation. */
        static readonly LOGIC_OP_OR = 7
        
        /** Not-OR (NOR) logic operation. */
        static readonly LOGIC_OP_NOR = 8
        
        /** Not-XOR (XNOR) logic operation. */
        static readonly LOGIC_OP_EQUIVALENT = 9
        
        /** Invert logic operation. */
        static readonly LOGIC_OP_INVERT = 10
        
        /** OR logic operation with the  *destination*  operand being inverted. See also [constant LOGIC_OP_OR_REVERSE]. */
        static readonly LOGIC_OP_OR_REVERSE = 11
        
        /** NOT logic operation (inverts the value). See also [constant LOGIC_OP_COPY]. */
        static readonly LOGIC_OP_COPY_INVERTED = 12
        
        /** OR logic operation with the  *source*  operand being inverted. See also [constant LOGIC_OP_OR_REVERSE]. */
        static readonly LOGIC_OP_OR_INVERTED = 13
        
        /** Not-AND (NAND) logic operation. */
        static readonly LOGIC_OP_NAND = 14
        
        /** SET logic operation (result is always `1`). See also [constant LOGIC_OP_CLEAR]. */
        static readonly LOGIC_OP_SET = 15
        
        /** Represents the size of the [enum LogicOperation] enum. */
        static readonly LOGIC_OP_MAX = 16
        
        /** Constant `0.0` blend factor. */
        static readonly BLEND_FACTOR_ZERO = 0
        
        /** Constant `1.0` blend factor. */
        static readonly BLEND_FACTOR_ONE = 1
        
        /** Color blend factor is `source color`. Alpha blend factor is `source alpha`. */
        static readonly BLEND_FACTOR_SRC_COLOR = 2
        
        /** Color blend factor is `1.0 - source color`. Alpha blend factor is `1.0 - source alpha`. */
        static readonly BLEND_FACTOR_ONE_MINUS_SRC_COLOR = 3
        
        /** Color blend factor is `destination color`. Alpha blend factor is `destination alpha`. */
        static readonly BLEND_FACTOR_DST_COLOR = 4
        
        /** Color blend factor is `1.0 - destination color`. Alpha blend factor is `1.0 - destination alpha`. */
        static readonly BLEND_FACTOR_ONE_MINUS_DST_COLOR = 5
        
        /** Color and alpha blend factor is `source alpha`. */
        static readonly BLEND_FACTOR_SRC_ALPHA = 6
        
        /** Color and alpha blend factor is `1.0 - source alpha`. */
        static readonly BLEND_FACTOR_ONE_MINUS_SRC_ALPHA = 7
        
        /** Color and alpha blend factor is `destination alpha`. */
        static readonly BLEND_FACTOR_DST_ALPHA = 8
        
        /** Color and alpha blend factor is `1.0 - destination alpha`. */
        static readonly BLEND_FACTOR_ONE_MINUS_DST_ALPHA = 9
        
        /** Color blend factor is `blend constant color`. Alpha blend factor is `blend constant alpha` (see [method draw_list_set_blend_constants]). */
        static readonly BLEND_FACTOR_CONSTANT_COLOR = 10
        
        /** Color blend factor is `1.0 - blend constant color`. Alpha blend factor is `1.0 - blend constant alpha` (see [method draw_list_set_blend_constants]). */
        static readonly BLEND_FACTOR_ONE_MINUS_CONSTANT_COLOR = 11
        
        /** Color and alpha blend factor is `blend constant alpha` (see [method draw_list_set_blend_constants]). */
        static readonly BLEND_FACTOR_CONSTANT_ALPHA = 12
        
        /** Color and alpha blend factor is `1.0 - blend constant alpha` (see [method draw_list_set_blend_constants]). */
        static readonly BLEND_FACTOR_ONE_MINUS_CONSTANT_ALPHA = 13
        
        /** Color blend factor is `min(source alpha, 1.0 - destination alpha)`. Alpha blend factor is `1.0`. */
        static readonly BLEND_FACTOR_SRC_ALPHA_SATURATE = 14
        
        /** Color blend factor is `second source color`. Alpha blend factor is `second source alpha`. Only relevant for dual-source blending. */
        static readonly BLEND_FACTOR_SRC1_COLOR = 15
        
        /** Color blend factor is `1.0 - second source color`. Alpha blend factor is `1.0 - second source alpha`. Only relevant for dual-source blending. */
        static readonly BLEND_FACTOR_ONE_MINUS_SRC1_COLOR = 16
        
        /** Color and alpha blend factor is `second source alpha`. Only relevant for dual-source blending. */
        static readonly BLEND_FACTOR_SRC1_ALPHA = 17
        
        /** Color and alpha blend factor is `1.0 - second source alpha`. Only relevant for dual-source blending. */
        static readonly BLEND_FACTOR_ONE_MINUS_SRC1_ALPHA = 18
        
        /** Represents the size of the [enum BlendFactor] enum. */
        static readonly BLEND_FACTOR_MAX = 19
        
        /** Additive blending operation (`source + destination`). */
        static readonly BLEND_OP_ADD = 0
        
        /** Subtractive blending operation (`source - destination`). */
        static readonly BLEND_OP_SUBTRACT = 1
        
        /** Reverse subtractive blending operation (`destination - source`). */
        static readonly BLEND_OP_REVERSE_SUBTRACT = 2
        
        /** Minimum blending operation (keep the lowest value of the two). */
        static readonly BLEND_OP_MINIMUM = 3
        
        /** Maximum blending operation (keep the highest value of the two). */
        static readonly BLEND_OP_MAXIMUM = 4
        
        /** Represents the size of the [enum BlendOperation] enum. */
        static readonly BLEND_OP_MAX = 5
        
        /** Allows dynamically changing the width of rendering lines. */
        static readonly DYNAMIC_STATE_LINE_WIDTH = 1
        
        /** Allows dynamically changing the depth bias. */
        static readonly DYNAMIC_STATE_DEPTH_BIAS = 2
        static readonly DYNAMIC_STATE_BLEND_CONSTANTS = 4
        static readonly DYNAMIC_STATE_DEPTH_BOUNDS = 8
        static readonly DYNAMIC_STATE_STENCIL_COMPARE_MASK = 16
        static readonly DYNAMIC_STATE_STENCIL_WRITE_MASK = 32
        static readonly DYNAMIC_STATE_STENCIL_REFERENCE = 64
        
        /** Load the previous contents of the framebuffer. */
        static readonly INITIAL_ACTION_LOAD = 0
        
        /** Clear the whole framebuffer or its specified region. */
        static readonly INITIAL_ACTION_CLEAR = 1
        
        /** Ignore the previous contents of the framebuffer. This is the fastest option if you'll overwrite all of the pixels and don't need to read any of them. */
        static readonly INITIAL_ACTION_DISCARD = 2
        
        /** Represents the size of the [enum InitialAction] enum. */
        static readonly INITIAL_ACTION_MAX = 3
        static readonly INITIAL_ACTION_CLEAR_REGION = 1
        static readonly INITIAL_ACTION_CLEAR_REGION_CONTINUE = 1
        static readonly INITIAL_ACTION_KEEP = 0
        static readonly INITIAL_ACTION_DROP = 2
        static readonly INITIAL_ACTION_CONTINUE = 0
        
        /** Store the result of the draw list in the framebuffer. This is generally what you want to do. */
        static readonly FINAL_ACTION_STORE = 0
        
        /** Discard the contents of the framebuffer. This is the fastest option if you don't need to use the results of the draw list. */
        static readonly FINAL_ACTION_DISCARD = 1
        
        /** Represents the size of the [enum FinalAction] enum. */
        static readonly FINAL_ACTION_MAX = 2
        static readonly FINAL_ACTION_READ = 0
        static readonly FINAL_ACTION_CONTINUE = 0
        
        /** Vertex shader stage. This can be used to manipulate vertices from a shader (but not create new vertices). */
        static readonly SHADER_STAGE_VERTEX = 0
        
        /** Fragment shader stage (called "pixel shader" in Direct3D). This can be used to manipulate pixels from a shader. */
        static readonly SHADER_STAGE_FRAGMENT = 1
        
        /** Tessellation control shader stage. This can be used to create additional geometry from a shader. */
        static readonly SHADER_STAGE_TESSELATION_CONTROL = 2
        
        /** Tessellation evaluation shader stage. This can be used to create additional geometry from a shader. */
        static readonly SHADER_STAGE_TESSELATION_EVALUATION = 3
        
        /** Compute shader stage. This can be used to run arbitrary computing tasks in a shader, performing them on the GPU instead of the CPU. */
        static readonly SHADER_STAGE_COMPUTE = 4
        
        /** Represents the size of the [enum ShaderStage] enum. */
        static readonly SHADER_STAGE_MAX = 5
        
        /** Vertex shader stage bit (see also [constant SHADER_STAGE_VERTEX]). */
        static readonly SHADER_STAGE_VERTEX_BIT = 1
        
        /** Fragment shader stage bit (see also [constant SHADER_STAGE_FRAGMENT]). */
        static readonly SHADER_STAGE_FRAGMENT_BIT = 2
        
        /** Tessellation control shader stage bit (see also [constant SHADER_STAGE_TESSELATION_CONTROL]). */
        static readonly SHADER_STAGE_TESSELATION_CONTROL_BIT = 4
        
        /** Tessellation evaluation shader stage bit (see also [constant SHADER_STAGE_TESSELATION_EVALUATION]). */
        static readonly SHADER_STAGE_TESSELATION_EVALUATION_BIT = 8
        
        /** Compute shader stage bit (see also [constant SHADER_STAGE_COMPUTE]). */
        static readonly SHADER_STAGE_COMPUTE_BIT = 16
        
        /** Khronos' GLSL shading language (used natively by OpenGL and Vulkan). This is the language used for core Godot shaders. */
        static readonly SHADER_LANGUAGE_GLSL = 0
        
        /** Microsoft's High-Level Shading Language (used natively by Direct3D, but can also be used in Vulkan). */
        static readonly SHADER_LANGUAGE_HLSL = 1
        
        /** Boolean specialization constant. */
        static readonly PIPELINE_SPECIALIZATION_CONSTANT_TYPE_BOOL = 0
        
        /** Integer specialization constant. */
        static readonly PIPELINE_SPECIALIZATION_CONSTANT_TYPE_INT = 1
        
        /** Floating-point specialization constant. */
        static readonly PIPELINE_SPECIALIZATION_CONSTANT_TYPE_FLOAT = 2
        
        /** Features support for buffer device address extension. */
        static readonly SUPPORTS_BUFFER_DEVICE_ADDRESS = 6
        
        /** Maximum number of uniform sets that can be bound at a given time. */
        static readonly LIMIT_MAX_BOUND_UNIFORM_SETS = 0
        
        /** Maximum number of color framebuffer attachments that can be used at a given time. */
        static readonly LIMIT_MAX_FRAMEBUFFER_COLOR_ATTACHMENTS = 1
        
        /** Maximum number of textures that can be used per uniform set. */
        static readonly LIMIT_MAX_TEXTURES_PER_UNIFORM_SET = 2
        
        /** Maximum number of samplers that can be used per uniform set. */
        static readonly LIMIT_MAX_SAMPLERS_PER_UNIFORM_SET = 3
        
        /** Maximum number of [url=https://vkguide.dev/docs/chapter-4/storage_buffers/]storage buffers[/url] per uniform set. */
        static readonly LIMIT_MAX_STORAGE_BUFFERS_PER_UNIFORM_SET = 4
        
        /** Maximum number of storage images per uniform set. */
        static readonly LIMIT_MAX_STORAGE_IMAGES_PER_UNIFORM_SET = 5
        
        /** Maximum number of uniform buffers per uniform set. */
        static readonly LIMIT_MAX_UNIFORM_BUFFERS_PER_UNIFORM_SET = 6
        
        /** Maximum index for an indexed draw command. */
        static readonly LIMIT_MAX_DRAW_INDEXED_INDEX = 7
        
        /** Maximum height of a framebuffer (in pixels). */
        static readonly LIMIT_MAX_FRAMEBUFFER_HEIGHT = 8
        
        /** Maximum width of a framebuffer (in pixels). */
        static readonly LIMIT_MAX_FRAMEBUFFER_WIDTH = 9
        
        /** Maximum number of texture array layers. */
        static readonly LIMIT_MAX_TEXTURE_ARRAY_LAYERS = 10
        
        /** Maximum supported 1-dimensional texture size (in pixels on a single axis). */
        static readonly LIMIT_MAX_TEXTURE_SIZE_1D = 11
        
        /** Maximum supported 2-dimensional texture size (in pixels on a single axis). */
        static readonly LIMIT_MAX_TEXTURE_SIZE_2D = 12
        
        /** Maximum supported 3-dimensional texture size (in pixels on a single axis). */
        static readonly LIMIT_MAX_TEXTURE_SIZE_3D = 13
        
        /** Maximum supported cubemap texture size (in pixels on a single axis of a single face). */
        static readonly LIMIT_MAX_TEXTURE_SIZE_CUBE = 14
        
        /** Maximum number of textures per shader stage. */
        static readonly LIMIT_MAX_TEXTURES_PER_SHADER_STAGE = 15
        
        /** Maximum number of samplers per shader stage. */
        static readonly LIMIT_MAX_SAMPLERS_PER_SHADER_STAGE = 16
        
        /** Maximum number of [url=https://vkguide.dev/docs/chapter-4/storage_buffers/]storage buffers[/url] per shader stage. */
        static readonly LIMIT_MAX_STORAGE_BUFFERS_PER_SHADER_STAGE = 17
        
        /** Maximum number of storage images per shader stage. */
        static readonly LIMIT_MAX_STORAGE_IMAGES_PER_SHADER_STAGE = 18
        
        /** Maximum number of uniform buffers per uniform set. */
        static readonly LIMIT_MAX_UNIFORM_BUFFERS_PER_SHADER_STAGE = 19
        
        /** Maximum size of a push constant. A lot of devices are limited to 128 bytes, so try to avoid exceeding 128 bytes in push constants to ensure compatibility even if your GPU is reporting a higher value. */
        static readonly LIMIT_MAX_PUSH_CONSTANT_SIZE = 20
        
        /** Maximum size of a uniform buffer. */
        static readonly LIMIT_MAX_UNIFORM_BUFFER_SIZE = 21
        
        /** Maximum vertex input attribute offset. */
        static readonly LIMIT_MAX_VERTEX_INPUT_ATTRIBUTE_OFFSET = 22
        
        /** Maximum number of vertex input attributes. */
        static readonly LIMIT_MAX_VERTEX_INPUT_ATTRIBUTES = 23
        
        /** Maximum number of vertex input bindings. */
        static readonly LIMIT_MAX_VERTEX_INPUT_BINDINGS = 24
        
        /** Maximum vertex input binding stride. */
        static readonly LIMIT_MAX_VERTEX_INPUT_BINDING_STRIDE = 25
        
        /** Minimum uniform buffer offset alignment. */
        static readonly LIMIT_MIN_UNIFORM_BUFFER_OFFSET_ALIGNMENT = 26
        
        /** Maximum shared memory size for compute shaders. */
        static readonly LIMIT_MAX_COMPUTE_SHARED_MEMORY_SIZE = 27
        
        /** Maximum number of workgroups for compute shaders on the X axis. */
        static readonly LIMIT_MAX_COMPUTE_WORKGROUP_COUNT_X = 28
        
        /** Maximum number of workgroups for compute shaders on the Y axis. */
        static readonly LIMIT_MAX_COMPUTE_WORKGROUP_COUNT_Y = 29
        
        /** Maximum number of workgroups for compute shaders on the Z axis. */
        static readonly LIMIT_MAX_COMPUTE_WORKGROUP_COUNT_Z = 30
        
        /** Maximum number of workgroup invocations for compute shaders. */
        static readonly LIMIT_MAX_COMPUTE_WORKGROUP_INVOCATIONS = 31
        
        /** Maximum workgroup size for compute shaders on the X axis. */
        static readonly LIMIT_MAX_COMPUTE_WORKGROUP_SIZE_X = 32
        
        /** Maximum workgroup size for compute shaders on the Y axis. */
        static readonly LIMIT_MAX_COMPUTE_WORKGROUP_SIZE_Y = 33
        
        /** Maximum workgroup size for compute shaders on the Z axis. */
        static readonly LIMIT_MAX_COMPUTE_WORKGROUP_SIZE_Z = 34
        
        /** Maximum viewport width (in pixels). */
        static readonly LIMIT_MAX_VIEWPORT_DIMENSIONS_X = 35
        
        /** Maximum viewport height (in pixels). */
        static readonly LIMIT_MAX_VIEWPORT_DIMENSIONS_Y = 36
        
        /** Returns the smallest value for [member ProjectSettings.rendering/scaling_3d/scale] when using the MetalFX temporal upscaler.  
         *      
         *  **Note:** The returned value is multiplied by a factor of `1000000` to preserve 6 digits of precision. It must be divided by `1000000.0` to convert the value to a floating point number.  
         */
        static readonly LIMIT_METALFX_TEMPORAL_SCALER_MIN_SCALE = 46
        
        /** Returns the largest value for [member ProjectSettings.rendering/scaling_3d/scale] when using the MetalFX temporal upscaler.  
         *      
         *  **Note:** The returned value is multiplied by a factor of `1000000` to preserve 6 digits of precision. It must be divided by `1000000.0` to convert the value to a floating point number.  
         */
        static readonly LIMIT_METALFX_TEMPORAL_SCALER_MAX_SCALE = 47
        
        /** Memory taken by textures. */
        static readonly MEMORY_TEXTURES = 0
        
        /** Memory taken by buffers. */
        static readonly MEMORY_BUFFERS = 1
        
        /** Total memory taken. This is greater than the sum of [constant MEMORY_TEXTURES] and [constant MEMORY_BUFFERS], as it also includes miscellaneous memory usage. */
        static readonly MEMORY_TOTAL = 2
        
        /** Returned by functions that return an ID if a value is invalid. */
        static readonly INVALID_ID = -1
        
        /** Returned by functions that return a format ID if a value is invalid. */
        static readonly INVALID_FORMAT_ID = -1
        static readonly NONE = 0
        static readonly REFLECTION_PROBES = 65536
        static readonly SKY_PASS = 131072
        static readonly LIGHTMAPPER_PASS = 196608
        static readonly SHADOW_PASS_DIRECTIONAL = 262144
        static readonly SHADOW_PASS_CUBE = 327680
        static readonly OPAQUE_PASS = 393216
        static readonly ALPHA_PASS = 458752
        static readonly TRANSPARENT_PASS = 524288
        static readonly POST_PROCESSING_PASS = 589824
        static readonly BLIT_PASS = 655360
        static readonly UI_PASS = 720896
        static readonly DEBUG_PASS = 786432
        
        /** Do not clear or ignore any attachments. */
        static readonly DRAW_DEFAULT_ALL = 0
        
        /** Clear the first color attachment. */
        static readonly DRAW_CLEAR_COLOR_0 = 1
        
        /** Clear the second color attachment. */
        static readonly DRAW_CLEAR_COLOR_1 = 2
        
        /** Clear the third color attachment. */
        static readonly DRAW_CLEAR_COLOR_2 = 4
        
        /** Clear the fourth color attachment. */
        static readonly DRAW_CLEAR_COLOR_3 = 8
        
        /** Clear the fifth color attachment. */
        static readonly DRAW_CLEAR_COLOR_4 = 16
        
        /** Clear the sixth color attachment. */
        static readonly DRAW_CLEAR_COLOR_5 = 32
        
        /** Clear the seventh color attachment. */
        static readonly DRAW_CLEAR_COLOR_6 = 64
        
        /** Clear the eighth color attachment. */
        static readonly DRAW_CLEAR_COLOR_7 = 128
        
        /** Mask for clearing all color attachments. */
        static readonly DRAW_CLEAR_COLOR_MASK = 255
        
        /** Clear all color attachments. */
        static readonly DRAW_CLEAR_COLOR_ALL = 255
        
        /** Ignore the previous contents of the first color attachment. */
        static readonly DRAW_IGNORE_COLOR_0 = 256
        
        /** Ignore the previous contents of the second color attachment. */
        static readonly DRAW_IGNORE_COLOR_1 = 512
        
        /** Ignore the previous contents of the third color attachment. */
        static readonly DRAW_IGNORE_COLOR_2 = 1024
        
        /** Ignore the previous contents of the fourth color attachment. */
        static readonly DRAW_IGNORE_COLOR_3 = 2048
        
        /** Ignore the previous contents of the fifth color attachment. */
        static readonly DRAW_IGNORE_COLOR_4 = 4096
        
        /** Ignore the previous contents of the sixth color attachment. */
        static readonly DRAW_IGNORE_COLOR_5 = 8192
        
        /** Ignore the previous contents of the seventh color attachment. */
        static readonly DRAW_IGNORE_COLOR_6 = 16384
        
        /** Ignore the previous contents of the eighth color attachment. */
        static readonly DRAW_IGNORE_COLOR_7 = 32768
        
        /** Mask for ignoring all the previous contents of the color attachments. */
        static readonly DRAW_IGNORE_COLOR_MASK = 65280
        
        /** Ignore the previous contents of all color attachments. */
        static readonly DRAW_IGNORE_COLOR_ALL = 65280
        
        /** Clear the depth attachment. */
        static readonly DRAW_CLEAR_DEPTH = 65536
        
        /** Ignore the previous contents of the depth attachment. */
        static readonly DRAW_IGNORE_DEPTH = 131072
        
        /** Clear the stencil attachment. */
        static readonly DRAW_CLEAR_STENCIL = 262144
        
        /** Ignore the previous contents of the stencil attachment. */
        static readonly DRAW_IGNORE_STENCIL = 524288
        
        /** Clear all attachments. */
        static readonly DRAW_CLEAR_ALL = 327935
        
        /** Ignore the previous contents of all attachments. */
        static readonly DRAW_IGNORE_ALL = 720640
        constructor(identifier?: any)
        textureCreate(format: RDTextureFormat, view: RDTextureView, data: GArray = []): Rid
        textureCreateShared(view: RDTextureView, withTexture: Rid): Rid
        textureCreateSharedFromSlice(view: RDTextureView, withTexture: Rid, layer: int64, mipmap: int64, mipmaps: int64 = 1, sliceType: RenderingDevice.TextureSliceType = 0): Rid
        textureCreateFromExtension(type: RenderingDevice.TextureType, format: RenderingDevice.DataFormat, samples: RenderingDevice.TextureSamples, usageFlags: RenderingDevice.TextureUsageBits, image: int64, width: int64, height: int64, depth: int64, layers: int64): Rid
        textureUpdate(texture: Rid, layer: int64, data: PackedByteArray | byte[] | ArrayBuffer): GError
        textureGetData(texture: Rid, layer: int64): PackedByteArray
        textureGetDataAsync(texture: Rid, layer: int64, callback: Callable): GError
        textureIsFormatSupportedForUsage(format: RenderingDevice.DataFormat, usageFlags: RenderingDevice.TextureUsageBits): boolean
        textureIsShared(texture: Rid): boolean
        textureIsValid(texture: Rid): boolean
        textureSetDiscardable(texture: Rid, discardable: boolean): void
        textureIsDiscardable(texture: Rid): boolean
        textureCopy(fromTexture: Rid, toTexture: Rid, fromPos: Vector3, toPos: Vector3, size: Vector3, srcMipmap: int64, dstMipmap: int64, srcLayer: int64, dstLayer: int64): GError
        textureClear(texture: Rid, color: Color, baseMipmap: int64, mipmapCount: int64, baseLayer: int64, layerCount: int64): GError
        textureResolveMultisample(fromTexture: Rid, toTexture: Rid): GError
        textureGetFormat(texture: Rid): RDTextureFormat
        textureGetNativeHandle(texture: Rid): int64
        framebufferFormatCreate(attachments: GArray, viewCount: int64 = 1): int64
        framebufferFormatCreateMultipass(attachments: GArray, passes: GArray, viewCount: int64 = 1): int64
        framebufferFormatCreateEmpty(samples: RenderingDevice.TextureSamples = 0): int64
        framebufferFormatGetTextureSamples(format: int64, renderPass: int64 = 0): RenderingDevice.TextureSamples
        framebufferCreate(textures: GArray, validateWithFormat: int64 = -1, viewCount: int64 = 1): Rid
        framebufferCreateMultipass(textures: GArray, passes: GArray, validateWithFormat: int64 = -1, viewCount: int64 = 1): Rid
        framebufferCreateEmpty(size: Vector2I, samples: RenderingDevice.TextureSamples = 0, validateWithFormat: int64 = -1): Rid
        framebufferGetFormat(framebuffer: Rid): int64
        framebufferIsValid(framebuffer: Rid): boolean
        samplerCreate(state: RDSamplerState): Rid
        samplerIsFormatSupportedForFilter(format: RenderingDevice.DataFormat, samplerFilter: RenderingDevice.SamplerFilter): boolean
        vertexBufferCreate(sizeBytes: int64, data: PackedByteArray | byte[] | ArrayBuffer = [], creationBits: RenderingDevice.BufferCreationBits = 0): Rid
        vertexFormatCreate(vertexDescriptions: GArray): int64
        vertexArrayCreate(vertexCount: int64, vertexFormat: int64, srcBuffers: GArray, offsets: PackedInt64Array | int64[] = []): Rid
        indexBufferCreate(sizeIndices: int64, format: RenderingDevice.IndexBufferFormat, data: PackedByteArray | byte[] | ArrayBuffer = [], useRestartIndices: boolean = false, creationBits: RenderingDevice.BufferCreationBits = 0): Rid
        indexArrayCreate(indexBuffer: Rid, indexOffset: int64, indexCount: int64): Rid
        shaderCompileSpirVFromSource(shaderSource: RDShaderSource, allowCache: boolean = true): any /*RDShaderSPIRV*/
        shaderCompileBinaryFromSpirV(spirVData: any /*RDShaderSPIRV*/, name: string = ''): PackedByteArray
        shaderCreateFromSpirV(spirVData: any /*RDShaderSPIRV*/, name: string = ''): Rid
        shaderCreateFromBytecode(binaryData: PackedByteArray | byte[] | ArrayBuffer, placeholderRid: Rid = new Rid()): Rid
        shaderCreatePlaceholder(): Rid
        shaderGetVertexInputAttributeMask(shader: Rid): int64
        uniformBufferCreate(sizeBytes: int64, data: PackedByteArray | byte[] | ArrayBuffer = [], creationBits: RenderingDevice.BufferCreationBits = 0): Rid
        storageBufferCreate(sizeBytes: int64, data: PackedByteArray | byte[] | ArrayBuffer = [], usage: RenderingDevice.StorageBufferUsage = 0, creationBits: RenderingDevice.BufferCreationBits = 0): Rid
        textureBufferCreate(sizeBytes: int64, format: RenderingDevice.DataFormat, data: PackedByteArray | byte[] | ArrayBuffer = []): Rid
        uniformSetCreate(uniforms: GArray, shader: Rid, shaderSet: int64): Rid
        uniformSetIsValid(uniformSet: Rid): boolean
        bufferCopy(srcBuffer: Rid, dstBuffer: Rid, srcOffset: int64, dstOffset: int64, size: int64): GError
        bufferUpdate(buffer: Rid, offset: int64, sizeBytes: int64, data: PackedByteArray | byte[] | ArrayBuffer): GError
        bufferClear(buffer: Rid, offset: int64, sizeBytes: int64): GError
        bufferGetData(buffer: Rid, offsetBytes: int64 = 0, sizeBytes: int64 = 0): PackedByteArray
        bufferGetDataAsync(buffer: Rid, callback: Callable, offsetBytes: int64 = 0, sizeBytes: int64 = 0): GError
        bufferGetDeviceAddress(buffer: Rid): int64
        renderPipelineCreate(shader: Rid, framebufferFormat: int64, vertexFormat: int64, primitive: RenderingDevice.RenderPrimitive, rasterizationState: RDPipelineRasterizationState, multisampleState: RDPipelineMultisampleState, stencilState: RDPipelineDepthStencilState, colorBlendState: RDPipelineColorBlendState, dynamicStateFlags: RenderingDevice.PipelineDynamicStateFlags = 0, forRenderPass: int64 = 0, specializationConstants: GArray = []): Rid
        renderPipelineIsValid(renderPipeline: Rid): boolean
        computePipelineCreate(shader: Rid, specializationConstants: GArray = []): Rid
        computePipelineIsValid(computePipeline: Rid): boolean
        screenGetWidth(screen: int64 = 0): int64
        screenGetHeight(screen: int64 = 0): int64
        screenGetFramebufferFormat(screen: int64 = 0): int64
        drawListBeginForScreen(screen: int64 = 0, clearColor: Color = new Color(0, 0, 0, 1)): int64
        drawListBegin(framebuffer: Rid, drawFlags: RenderingDevice.DrawFlags = 0, clearColorValues: PackedColorArray | Color[] = [], clearDepthValue: float64 = 1, clearStencilValue: int64 = 0, region: Rect2 = new Rect2(0, 0, 0, 0), breadcrumb: int64 = 0): int64
        drawListBeginSplit(framebuffer: Rid, splits: int64, initialColorAction: RenderingDevice.InitialAction, finalColorAction: RenderingDevice.FinalAction, initialDepthAction: RenderingDevice.InitialAction, finalDepthAction: RenderingDevice.FinalAction, clearColorValues: PackedColorArray | Color[] = [], clearDepth: float64 = 1, clearStencil: int64 = 0, region: Rect2 = new Rect2(0, 0, 0, 0), storageTextures: GArray = []): PackedInt64Array
        drawListSetBlendConstants(drawList: int64, color: Color): void
        drawListBindRenderPipeline(drawList: int64, renderPipeline: Rid): void
        drawListBindUniformSet(drawList: int64, uniformSet: Rid, setIndex: int64): void
        drawListBindVertexArray(drawList: int64, vertexArray: Rid): void
        drawListBindIndexArray(drawList: int64, indexArray: Rid): void
        drawListSetPushConstant(drawList: int64, buffer: PackedByteArray | byte[] | ArrayBuffer, sizeBytes: int64): void
        drawListDraw(drawList: int64, useIndices: boolean, instances: int64, proceduralVertexCount: int64 = 0): void
        drawListDrawIndirect(drawList: int64, useIndices: boolean, buffer: Rid, offset: int64 = 0, drawCount: int64 = 1, stride: int64 = 0): void
        drawListEnableScissor(drawList: int64, rect: Rect2 = new Rect2(0, 0, 0, 0)): void
        drawListDisableScissor(drawList: int64): void
        drawListSwitchToNextPass(): int64
        drawListSwitchToNextPassSplit(splits: int64): PackedInt64Array
        drawListEnd(): void
        computeListBegin(): int64
        computeListBindComputePipeline(computeList: int64, computePipeline: Rid): void
        computeListSetPushConstant(computeList: int64, buffer: PackedByteArray | byte[] | ArrayBuffer, sizeBytes: int64): void
        computeListBindUniformSet(computeList: int64, uniformSet: Rid, setIndex: int64): void
        computeListDispatch(computeList: int64, xGroups: int64, yGroups: int64, zGroups: int64): void
        computeListDispatchIndirect(computeList: int64, buffer: Rid, offset: int64): void
        computeListAddBarrier(computeList: int64): void
        computeListEnd(): void
        freeRid(rid: Rid): void
        captureTimestamp(name: string): void
        getCapturedTimestampsCount(): int64
        getCapturedTimestampsFrame(): int64
        getCapturedTimestampGpuTime(index: int64): int64
        getCapturedTimestampCpuTime(index: int64): int64
        getCapturedTimestampName(index: int64): string
        hasFeature(feature: RenderingDevice.Features): boolean
        limitGet(limit: RenderingDevice.Limit): int64
        getFrameDelay(): int64
        
        /** Pushes the frame setup and draw command buffers then marks the local device as currently processing (which allows calling [method sync]).  
         *      
         *  **Note:** Only available in local RenderingDevices.  
         */
        submit(): void
        
        /** Forces a synchronization between the CPU and GPU, which may be required in certain cases. Only call this when needed, as CPU-GPU synchronization has a performance cost.  
         *      
         *  **Note:** Only available in local RenderingDevices.  
         *      
         *  **Note:** [method sync] can only be called after a [method submit].  
         */
        sync(): void
        
        /** This method does nothing. */
        barrier(from: RenderingDevice.BarrierMask = 32767, to: RenderingDevice.BarrierMask = 32767): void
        fullBarrier(): void
        createLocalDevice(): RenderingDevice
        setResourceName(id: Rid, name: string): void
        drawCommandBeginLabel(name: string, color: Color): void
        drawCommandInsertLabel(name: string, color: Color): void
        drawCommandEndLabel(): void
        getDeviceVendorName(): string
        getDeviceName(): string
        getDevicePipelineCacheUuid(): string
        getMemoryUsage(type: RenderingDevice.MemoryType): int64
        getDriverResource(resource: RenderingDevice.DriverResource, rid: Rid, index: int64): int64
        getPerfReport(): string
        getDriverAndDeviceMemoryReport(): string
        getTrackedObjectName(typeIndex: int64): string
        getTrackedObjectTypeCount(): int64
        getDriverTotalMemory(): int64
        getDriverAllocationCount(): int64
        getDriverMemoryByObjectType(type: int64): int64
        getDriverAllocsByObjectType(type: int64): int64
        getDeviceTotalMemory(): int64
        getDeviceAllocationCount(): int64
        getDeviceMemoryByObjectType(type: int64): int64
        getDeviceAllocsByObjectType(type: int64): int64
    }
    /** Base class for serializable objects.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_resource.html  
     */
    class Resource extends RefCounted {
        constructor(identifier?: any)
        /* gdvirtual */ _setupLocalToScene(): void
        /* gdvirtual */ _getRid(): Rid
        /* gdvirtual */ _resetState(): void
        /* gdvirtual */ _setPathCache(path: string): void
        takeOverPath(path: string): void
        setPathCache(path: string): void
        getRid(): Rid
        getLocalScene(): Node
        setupLocalToScene(): void
        resetState(): void
        setIdForPath(path: string, id: string): void
        getIdForPath(path: string): string
        isBuiltIn(): boolean
        static generateSceneUniqueId(): string
        emitChanged(): void
        
        /** Duplicates this resource, returning a new resource with its `export`ed or [constant PROPERTY_USAGE_STORAGE] properties copied from the original.  
         *  If [param subresources] is `false`, a shallow copy is returned; nested resources within subresources are not duplicated and are shared with the original resource (with one exception; see below). If [param subresources] is `true`, a deep copy is returned; nested subresources will be duplicated and are not shared (with two exceptions; see below).  
         *  [param subresources] is usually respected, with the following exceptions:  
         *  - Subresource properties with the [constant PROPERTY_USAGE_ALWAYS_DUPLICATE] flag are always duplicated.  
         *  - Subresource properties with the [constant PROPERTY_USAGE_NEVER_DUPLICATE] flag are never duplicated.  
         *  - Subresources inside [Array] and [Dictionary] properties are never duplicated.  
         *      
         *  **Note:** For custom resources, this method will fail if [method Object._init] has been defined with required parameters.  
         */
        duplicate(subresources: boolean = false): Resource
        get resourceLocalToScene(): boolean
        set resourceLocalToScene(value: boolean)
        get resourcePath(): string
        set resourcePath(value: string)
        get resourceName(): string
        set resourceName(value: string)
        get resourceSceneUniqueId(): string
        set resourceSceneUniqueId(value: string)
        
        /** Emitted when the resource changes, usually when one of its properties is modified. See also [method emit_changed].  
         *      
         *  **Note:** This signal is not emitted automatically for properties of custom resources. If necessary, a setter needs to be created to emit the signal.  
         */
        readonly changed: Signal<() => void>
        readonly setupLocalToSceneRequested: Signal<() => void>
    }
    namespace ResourceFormatLoader {
        enum CacheMode {
            CacheModeIgnore = 0,
            CacheModeReuse = 1,
            CacheModeReplace = 2,
            CacheModeIgnoreDeep = 3,
            CacheModeReplaceDeep = 4,
        }
    }
    /** Loads a specific resource type from a file.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_resourceformatloader.html  
     */
    class ResourceFormatLoader extends RefCounted {
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
        constructor(identifier?: any)
        /* gdvirtual */ _getRecognizedExtensions(): PackedStringArray
        /* gdvirtual */ _recognizePath(path: string, type: StringName): boolean
        /* gdvirtual */ _handlesType(type: StringName): boolean
        /* gdvirtual */ _getResourceType(path: string): string
        /* gdvirtual */ _getResourceScriptClass(path: string): string
        /* gdvirtual */ _getResourceUid(path: string): int64
        /* gdvirtual */ _getDependencies(path: string, addTypes: boolean): PackedStringArray
        /* gdvirtual */ _renameDependencies(path: string, renames: GDictionary): GError
        /* gdvirtual */ _exists(path: string): boolean
        /* gdvirtual */ _getClassesUsed(path: string): PackedStringArray
        
        /** Loads a resource when the engine finds this loader to be compatible. If the loaded resource is the result of an import, [param original_path] will target the source file. Returns a [Resource] object on success, or an [enum Error] constant in case of failure.  
         *  The [param cache_mode] property defines whether and how the cache should be used or updated when loading the resource. See [enum CacheMode] for details.  
         */
        /* gdvirtual */ _load(path: string, originalPath: string, useSubThreads: boolean, cacheMode: int64): any
    }
    /** Saves a specific resource type to a file.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_resourceformatsaver.html  
     */
    class ResourceFormatSaver extends RefCounted {
        constructor(identifier?: any)
        /** Saves the given resource object to a file at the target [param path]. [param flags] is a bitmask composed with [enum ResourceSaver.SaverFlags] constants.  
         *  Returns [constant OK] on success, or an [enum Error] constant in case of failure.  
         */
        /* gdvirtual */ _save(resource: Resource, path: string, flags: int64): GError
        /* gdvirtual */ _setUid(path: string, uid: int64): GError
        
        /** Returns whether the given resource object can be saved by this saver. */
        /* gdvirtual */ _recognize(resource: Resource): boolean
        /* gdvirtual */ _getRecognizedExtensions(resource: Resource): PackedStringArray
        /* gdvirtual */ _recognizePath(resource: Resource, path: string): boolean
    }
    namespace ResourceImporter {
        enum ImportOrder {
            ImportOrderDefault = 0,
            ImportOrderScene = 100,
        }
    }
    /** Base class for resource importers.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_resourceimporter.html  
     */
    class ResourceImporter extends RefCounted {
        /** The default import order. */
        static readonly IMPORT_ORDER_DEFAULT = 0
        
        /** The import order for scenes, which ensures scenes are imported  *after*  all other core resources such as textures. Custom importers should generally have an import order lower than `100` to avoid issues when importing scenes that rely on custom resources. */
        static readonly IMPORT_ORDER_SCENE = 100
        constructor(identifier?: any)
    }
    /** Imports a bitmap font in the BMFont (`.fnt`) format.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_resourceimporterbmfont.html  
     */
    class ResourceImporterBMFont extends ResourceImporter {
        constructor(identifier?: any)
    }
    /** Imports a [BitMap] resource (2D array of boolean values).  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_resourceimporterbitmap.html  
     */
    class ResourceImporterBitMap extends ResourceImporter {
        constructor(identifier?: any)
    }
    class ResourceImporterCsvTranslation extends ResourceImporter {
        constructor(identifier?: any)
    }
    /** Imports a TTF, TTC, OTF, OTC, WOFF or WOFF2 font file for font rendering that adapts to any size.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_resourceimporterdynamicfont.html  
     */
    class ResourceImporterDynamicFont extends ResourceImporter {
        constructor(identifier?: any)
    }
    /** Imports a image for use in scripting, with no rendering capabilities.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_resourceimporterimage.html  
     */
    class ResourceImporterImage extends ResourceImporter {
        constructor(identifier?: any)
    }
    /** Imports a bitmap font where all glyphs have the same width and height.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_resourceimporterimagefont.html  
     */
    class ResourceImporterImageFont extends ResourceImporter {
        constructor(identifier?: any)
    }
    /** Imports a 3-dimensional texture ([Texture3D]), a [Texture2DArray], a [Cubemap] or a [CubemapArray].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_resourceimporterlayeredtexture.html  
     */
    class ResourceImporterLayeredTexture extends ResourceImporter {
        constructor(identifier?: any)
    }
    /** Imports an MP3 audio file for playback.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_resourceimportermp3.html  
     */
    class ResourceImporterMP3 extends ResourceImporter {
        constructor(identifier?: any)
    }
    class ResourceImporterObj extends ResourceImporter {
        constructor(identifier?: any)
    }
    /** Imports an Ogg Vorbis audio file for playback.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_resourceimporteroggvorbis.html  
     */
    class ResourceImporterOggVorbis extends ResourceImporter {
        constructor(identifier?: any)
        static loadFromBuffer(streamData: PackedByteArray | byte[] | ArrayBuffer): AudioStreamOggVorbis
        static loadFromFile(path: string): AudioStreamOggVorbis
    }
    /** Imports a glTF, FBX, Collada or Blender 3D scene.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_resourceimporterscene.html  
     */
    class ResourceImporterScene extends ResourceImporter {
        constructor(identifier?: any)
    }
    /** Imports native GLSL shaders (not Godot shaders) as a [RDShaderFile].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_resourceimportershaderfile.html  
     */
    class ResourceImporterShaderFile extends ResourceImporter {
        constructor(identifier?: any)
    }
    /** Imports an image for use in 2D or 3D rendering.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_resourceimportertexture.html  
     */
    class ResourceImporterTexture extends ResourceImporter {
        constructor(identifier?: any)
    }
    /** Imports a collection of textures from a PNG image into an optimized [AtlasTexture] for 2D rendering.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_resourceimportertextureatlas.html  
     */
    class ResourceImporterTextureAtlas extends ResourceImporter {
        constructor(identifier?: any)
    }
    class ResourceImporterWav extends ResourceImporter {
        constructor(identifier?: any)
    }
    /** A node used to preload sub-resources inside a scene.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_resourcepreloader.html  
     */
    class ResourcePreloader<Map extends Record<string, Node> = {}> extends Node<Map> {
        constructor(identifier?: any)
        addResource(name: StringName, resource: Resource): void
        removeResource(name: StringName): void
        renameResource(name: StringName, newname: StringName): void
        hasResource(name: StringName): boolean
        getResource(name: StringName): Resource
        getResourceList(): PackedStringArray
        get resources(): GArray
        set resources(value: GArray)
    }
    namespace RetargetModifier3D {
        enum TransformFlag {
            TransformFlagPosition = 1,
            TransformFlagRotation = 2,
            TransformFlagScale = 4,
            TransformFlagAll = 7,
        }
    }
    /** A modifier to transfer parent skeleton poses (or global poses) to child skeletons in model space with different rests.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_retargetmodifier3d.html  
     */
    class RetargetModifier3D<Map extends Record<string, Node> = {}> extends SkeletonModifier3D<Map> {
        /** If set, allows to retarget the position. */
        static readonly TRANSFORM_FLAG_POSITION = 1
        
        /** If set, allows to retarget the rotation. */
        static readonly TRANSFORM_FLAG_ROTATION = 2
        
        /** If set, allows to retarget the scale. */
        static readonly TRANSFORM_FLAG_SCALE = 4
        
        /** If set, allows to retarget the position/rotation/scale. */
        static readonly TRANSFORM_FLAG_ALL = 7
        constructor(identifier?: any)
        setPositionEnabled(enabled: boolean): void
        isPositionEnabled(): boolean
        setRotationEnabled(enabled: boolean): void
        isRotationEnabled(): boolean
        setScaleEnabled(enabled: boolean): void
        isScaleEnabled(): boolean
        
        /** [SkeletonProfile] for retargeting bones with names matching the bone list. */
        get profile(): SkeletonProfile
        set profile(value: SkeletonProfile)
        get useGlobalPose(): boolean
        set useGlobalPose(value: boolean)
        
        /** Flags to control the process of the transform elements individually when [member use_global_pose] is disabled. */
        get enable(): int64
        set enable(value: int64)
    }
    namespace RibbonTrailMesh {
        enum Shape {
            ShapeFlat = 0,
            ShapeCross = 1,
        }
    }
    /** Represents a straight ribbon-shaped [PrimitiveMesh] with variable width.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_ribbontrailmesh.html  
     */
    class RibbonTrailMesh extends PrimitiveMesh {
        /** Gives the mesh a single flat face. */
        static readonly SHAPE_FLAT = 0
        
        /** Gives the mesh two perpendicular flat faces, making a cross shape. */
        static readonly SHAPE_CROSS = 1
        constructor(identifier?: any)
        
        /** Determines the shape of the ribbon. */
        get shape(): int64
        set shape(value: int64)
        
        /** The baseline size of the ribbon. The size of a particular section segment is obtained by multiplying this size by the value of the [member curve] at the given distance. */
        get size(): float64
        set size(value: float64)
        
        /** The total number of sections on the ribbon. */
        get sections(): int64
        set sections(value: int64)
        get sectionLength(): float64
        set sectionLength(value: float64)
        get sectionSegments(): int64
        set sectionSegments(value: int64)
        
        /** Determines the size of the ribbon along its length. The size of a particular section segment is obtained by multiplying the baseline [member size] by the value of this curve at the given distance. For values smaller than `0`, the faces will be inverted. Should be a unit [Curve]. */
        get curve(): Curve
        set curve(value: Curve)
    }
    /** A custom effect for a [RichTextLabel].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_richtexteffect.html  
     */
    class RichTextEffect extends Resource {
        constructor(identifier?: any)
        /* gdvirtual */ _processCustomFX(charFX: CharFXTransform): boolean
    }
    namespace RichTextLabel {
        enum ListType {
            ListNumbers = 0,
            ListLetters = 1,
            ListRoman = 2,
            ListDots = 3,
        }
        enum MenuItems {
            MenuCopy = 0,
            MenuSelectAll = 1,
            MenuMax = 2,
        }
        enum MetaUnderline {
            MetaUnderlineNever = 0,
            MetaUnderlineAlways = 1,
            MetaUnderlineOnHover = 2,
        }
        enum ImageUpdateMask {
            UpdateTexture = 1,
            UpdateSize = 2,
            UpdateColor = 4,
            UpdateAlignment = 8,
            UpdateRegion = 16,
            UpdatePad = 32,
            UpdateTooltip = 64,
            UpdateWidthInPercent = 128,
        }
    }
    /** A control for displaying text that can contain different font styles, images, and basic formatting.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_richtextlabel.html  
     */
    class RichTextLabel<Map extends Record<string, Node> = {}> extends Control<Map> {
        /** Each list item has a number marker. */
        static readonly LIST_NUMBERS = 0
        
        /** Each list item has a letter marker. */
        static readonly LIST_LETTERS = 1
        
        /** Each list item has a roman number marker. */
        static readonly LIST_ROMAN = 2
        
        /** Each list item has a filled circle marker. */
        static readonly LIST_DOTS = 3
        
        /** Copies the selected text. */
        static readonly MENU_COPY = 0
        
        /** Selects the whole [RichTextLabel] text. */
        static readonly MENU_SELECT_ALL = 1
        
        /** Represents the size of the [enum MenuItems] enum. */
        static readonly MENU_MAX = 2
        
        /** Meta tag does not display an underline, even if [member meta_underlined] is `true`. */
        static readonly META_UNDERLINE_NEVER = 0
        
        /** If [member meta_underlined] is `true`, meta tag always display an underline. */
        static readonly META_UNDERLINE_ALWAYS = 1
        
        /** If [member meta_underlined] is `true`, meta tag display an underline when the mouse cursor is over it. */
        static readonly META_UNDERLINE_ON_HOVER = 2
        
        /** If this bit is set, [method update_image] changes image texture. */
        static readonly UPDATE_TEXTURE = 1
        
        /** If this bit is set, [method update_image] changes image size. */
        static readonly UPDATE_SIZE = 2
        
        /** If this bit is set, [method update_image] changes image color. */
        static readonly UPDATE_COLOR = 4
        
        /** If this bit is set, [method update_image] changes image inline alignment. */
        static readonly UPDATE_ALIGNMENT = 8
        
        /** If this bit is set, [method update_image] changes image texture region. */
        static readonly UPDATE_REGION = 16
        
        /** If this bit is set, [method update_image] changes image padding. */
        static readonly UPDATE_PAD = 32
        
        /** If this bit is set, [method update_image] changes image tooltip. */
        static readonly UPDATE_TOOLTIP = 64
        
        /** If this bit is set, [method update_image] changes image width from/to percents. */
        static readonly UPDATE_WIDTH_IN_PERCENT = 128
        constructor(identifier?: any)
        getParsedText(): string
        addText(text: string): void
        addImage(image: Texture2D, width: int64 = 0, height: int64 = 0, color: Color = new Color(1, 1, 1, 1), inlineAlign: InlineAlignment = 5, region: Rect2 = new Rect2(0, 0, 0, 0), key: any = <any> {}, pad: boolean = false, tooltip: string = '', sizeInPercent: boolean = false): void
        updateImage(key: any, mask: RichTextLabel.ImageUpdateMask, image: Texture2D, width: int64 = 0, height: int64 = 0, color: Color = new Color(1, 1, 1, 1), inlineAlign: InlineAlignment = 5, region: Rect2 = new Rect2(0, 0, 0, 0), pad: boolean = false, tooltip: string = '', sizeInPercent: boolean = false): void
        
        /** Adds a newline tag to the tag stack. */
        newline(): void
        removeParagraph(paragraph: int64, noInvalidate: boolean = false): boolean
        invalidateParagraph(paragraph: int64): boolean
        pushFont(font: Font, fontSize: int64 = 0): void
        pushFontSize(fontSize: int64): void
        pushNormal(): void
        pushBold(): void
        pushBoldItalics(): void
        pushItalics(): void
        pushMono(): void
        pushColor(color: Color): void
        pushOutlineSize(outlineSize: int64): void
        pushOutlineColor(color: Color): void
        pushParagraph(alignment: HorizontalAlignment, baseDirection: Control.TextDirection = 0, language: string = '', stParser: TextServer.StructuredTextParser = 0, justificationFlags: TextServer.JustificationFlag = 163, tabStops: PackedFloat32Array | float32[] = []): void
        pushIndent(level: int64): void
        pushList(level: int64, type: RichTextLabel.ListType, capitalize: boolean, bullet: string = '•'): void
        pushMeta(data: any, underlineMode: RichTextLabel.MetaUnderline = 1, tooltip: string = ''): void
        pushHint(description: string): void
        pushLanguage(language: string): void
        pushUnderline(): void
        pushStrikethrough(): void
        pushTable(columns: int64, inlineAlign: InlineAlignment = 0, alignToRow: int64 = -1): void
        pushDropcap(string_: string, font: Font, size: int64, dropcapMargins: Rect2 = new Rect2(0, 0, 0, 0), color: Color = new Color(1, 1, 1, 1), outlineSize: int64 = 0, outlineColor: Color = new Color(0, 0, 0, 0)): void
        setTableColumnExpand(column: int64, expand: boolean, ratio: int64 = 1, shrink: boolean = true): void
        setCellRowBackgroundColor(oddRowBg: Color, evenRowBg: Color): void
        setCellBorderColor(color: Color): void
        setCellSizeOverride(minSize: Vector2, maxSize: Vector2): void
        setCellPadding(padding: Rect2): void
        pushCell(): void
        pushFgcolor(fgcolor: Color): void
        pushBgcolor(bgcolor: Color): void
        pushCustomfx(effect: RichTextEffect, env: GDictionary): void
        pushContext(): void
        popContext(): void
        
        /** Terminates the current tag. Use after `push_*` methods to close BBCodes manually. Does not need to follow `add_*` methods. */
        pop(): void
        popAll(): void
        
        /** Clears the tag stack, causing the label to display nothing.  
         *      
         *  **Note:** This method does not affect [member text], and its contents will show again if the label is redrawn. However, setting [member text] to an empty [String] also clears the stack.  
         */
        clear(): void
        getVScrollBar(): VScrollBar
        scrollToLine(line: int64): void
        scrollToParagraph(paragraph: int64): void
        scrollToSelection(): void
        getSelectionFrom(): int64
        getSelectionTo(): int64
        getSelectionLineOffset(): float64
        selectAll(): void
        getSelectedText(): string
        
        /** Clears the current selection. */
        deselect(): void
        parseBbcode(bbcode: string): void
        appendText(bbcode: string): void
        isReady(): boolean
        isFinished(): boolean
        getCharacterLine(character: int64): int64
        getCharacterParagraph(character: int64): int64
        getTotalCharacterCount(): int64
        getLineCount(): int64
        getLineRange(line: int64): Vector2I
        getVisibleLineCount(): int64
        getParagraphCount(): int64
        getVisibleParagraphCount(): int64
        getContentHeight(): int64
        getContentWidth(): int64
        getLineOffset(line: int64): float64
        getParagraphOffset(paragraph: int64): float64
        parseExpressionsForValues(expressions: PackedStringArray | string[]): GDictionary
        installEffect(effect: any): void
        getMenu(): PopupMenu
        isMenuVisible(): boolean
        menuOption(option: int64): void
        get bbcodeEnabled(): boolean
        set bbcodeEnabled(value: boolean)
        
        /** The label's text in BBCode format. Is not representative of manual modifications to the internal tag stack. Erases changes made by other methods when edited.  
         *      
         *  **Note:** If [member bbcode_enabled] is `true`, it is unadvised to use the `+=` operator with [member text] (e.g. `text += "some string"`) as it replaces the whole text and can cause slowdowns. It will also erase all BBCode that was added to stack using `push_*` methods. Use [method append_text] for adding text instead, unless you absolutely need to close a tag that was opened in an earlier method call.  
         */
        get text(): string
        set text(value: string)
        get fitContent(): boolean
        set fitContent(value: boolean)
        get scrollActive(): boolean
        set scrollActive(value: boolean)
        get scrollFollowing(): boolean
        set scrollFollowing(value: boolean)
        get autowrapMode(): int64
        set autowrapMode(value: int64)
        get tabSize(): int64
        set tabSize(value: int64)
        get contextMenuEnabled(): boolean
        set contextMenuEnabled(value: boolean)
        get shortcutKeysEnabled(): boolean
        set shortcutKeysEnabled(value: boolean)
        get horizontalAlignment(): int64
        set horizontalAlignment(value: int64)
        get verticalAlignment(): int64
        set verticalAlignment(value: int64)
        get justificationFlags(): int64
        set justificationFlags(value: int64)
        get tabStops(): PackedFloat32Array
        set tabStops(value: PackedFloat32Array | float32[])
        get customEffects(): GArray
        set customEffects(value: GArray)
        get metaUnderlined(): boolean
        set metaUnderlined(value: boolean)
        get hintUnderlined(): boolean
        set hintUnderlined(value: boolean)
        
        /** If `true`, text processing is done in a background thread. */
        get threaded(): boolean
        set threaded(value: boolean)
        get progressBarDelay(): int64
        set progressBarDelay(value: int64)
        get selectionEnabled(): boolean
        set selectionEnabled(value: boolean)
        get deselectOnFocusLossEnabled(): boolean
        set deselectOnFocusLossEnabled(value: boolean)
        get dragAndDropSelectionEnabled(): boolean
        set dragAndDropSelectionEnabled(value: boolean)
        get visibleCharacters(): int64
        set visibleCharacters(value: int64)
        get visibleCharactersBehavior(): int64
        set visibleCharactersBehavior(value: int64)
        get visibleRatio(): float64
        set visibleRatio(value: float64)
        get textDirection(): int64
        set textDirection(value: int64)
        
        /** Language code used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        get language(): string
        set language(value: string)
        get structuredTextBidiOverride(): int64
        set structuredTextBidiOverride(value: int64)
        get structuredTextBidiOverrideOptions(): GArray
        set structuredTextBidiOverrideOptions(value: GArray)
        readonly metaClicked: Signal<(meta: any) => void>
        readonly metaHoverStarted: Signal<(meta: any) => void>
        readonly metaHoverEnded: Signal<(meta: any) => void>
        
        /** Triggered when the document is fully loaded.  
         *      
         *  **Note:** This can happen before the text is processed for drawing. Scrolling values may not be valid until the document is drawn for the first time after this signal.  
         */
        readonly finished: Signal<() => void>
    }
    namespace RigidBody2D {
        enum FreezeMode {
            FreezeModeStatic = 0,
            FreezeModeKinematic = 1,
        }
        enum CenterOfMassMode {
            CenterOfMassModeAuto = 0,
            CenterOfMassModeCustom = 1,
        }
        enum DampMode {
            DampModeCombine = 0,
            DampModeReplace = 1,
        }
        enum CcdMode {
            CcdModeDisabled = 0,
            CcdModeCastRay = 1,
            CcdModeCastShape = 2,
        }
    }
    /** A 2D physics body that is moved by a physics simulation.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_rigidbody2d.html  
     */
    class RigidBody2D<Map extends Record<string, Node> = {}> extends PhysicsBody2D<Map> {
        /** Static body freeze mode (default). The body is not affected by gravity and forces. It can be only moved by user code and doesn't collide with other bodies along its path. */
        static readonly FREEZE_MODE_STATIC = 0
        
        /** Kinematic body freeze mode. Similar to [constant FREEZE_MODE_STATIC], but collides with other bodies along its path when moved. Useful for a frozen body that needs to be animated. */
        static readonly FREEZE_MODE_KINEMATIC = 1
        
        /** In this mode, the body's center of mass is calculated automatically based on its shapes. This assumes that the shapes' origins are also their center of mass. */
        static readonly CENTER_OF_MASS_MODE_AUTO = 0
        
        /** In this mode, the body's center of mass is set through [member center_of_mass]. Defaults to the body's origin position. */
        static readonly CENTER_OF_MASS_MODE_CUSTOM = 1
        
        /** In this mode, the body's damping value is added to any value set in areas or the default value. */
        static readonly DAMP_MODE_COMBINE = 0
        
        /** In this mode, the body's damping value replaces any value set in areas or the default value. */
        static readonly DAMP_MODE_REPLACE = 1
        
        /** Continuous collision detection disabled. This is the fastest way to detect body collisions, but can miss small, fast-moving objects. */
        static readonly CCD_MODE_DISABLED = 0
        
        /** Continuous collision detection enabled using raycasting. This is faster than shapecasting but less precise. */
        static readonly CCD_MODE_CAST_RAY = 1
        
        /** Continuous collision detection enabled using shapecasting. This is the slowest CCD method and the most precise. */
        static readonly CCD_MODE_CAST_SHAPE = 2
        constructor(identifier?: any)
        /* gdvirtual */ _integrateForces(state: PhysicsDirectBodyState2D): void
        getContactCount(): int64
        setAxisVelocity(axisVelocity: Vector2): void
        applyCentralImpulse(impulse: Vector2 = Vector2.ZERO): void
        applyImpulse(impulse: Vector2, position: Vector2 = Vector2.ZERO): void
        applyTorqueImpulse(torque: float64): void
        applyCentralForce(force: Vector2): void
        applyForce(force: Vector2, position: Vector2 = Vector2.ZERO): void
        applyTorque(torque: float64): void
        addConstantCentralForce(force: Vector2): void
        addConstantForce(force: Vector2, position: Vector2 = Vector2.ZERO): void
        addConstantTorque(torque: float64): void
        getCollidingBodies(): GArray
        
        /** The body's mass. */
        get mass(): float64
        set mass(value: float64)
        get physicsMaterialOverride(): PhysicsMaterial
        set physicsMaterialOverride(value: PhysicsMaterial)
        get gravityScale(): float64
        set gravityScale(value: float64)
        get centerOfMassMode(): int64
        set centerOfMassMode(value: int64)
        get centerOfMass(): Vector2
        set centerOfMass(value: Vector2)
        
        /** The body's moment of inertia. This is like mass, but for rotation: it determines how much torque it takes to rotate the body. The moment of inertia is usually computed automatically from the mass and the shapes, but this property allows you to set a custom value.  
         *  If set to `0`, inertia is automatically computed (default value).  
         *      
         *  **Note:** This value does not change when inertia is automatically computed. Use [PhysicsServer2D] to get the computed inertia.  
         *    
         */
        get inertia(): float64
        set inertia(value: float64)
        
        /** If `true`, the body will not move and will not calculate forces until woken up by another body through, for example, a collision, or by using the [method apply_impulse] or [method apply_force] methods. */
        get sleeping(): boolean
        set sleeping(value: boolean)
        get canSleep(): boolean
        set canSleep(value: boolean)
        get lockRotation(): boolean
        set lockRotation(value: boolean)
        
        /** If `true`, the body is frozen. Gravity and forces are not applied anymore.  
         *  See [member freeze_mode] to set the body's behavior when frozen.  
         *  For a body that is always frozen, use [StaticBody2D] or [AnimatableBody2D] instead.  
         */
        get freeze(): boolean
        set freeze(value: boolean)
        get freezeMode(): int64
        set freezeMode(value: int64)
        get customIntegrator(): boolean
        set customIntegrator(value: boolean)
        get continuousCd(): int64
        set continuousCd(value: int64)
        get contactMonitor(): boolean
        set contactMonitor(value: boolean)
        get maxContactsReported(): int64
        set maxContactsReported(value: int64)
        get linearVelocity(): Vector2
        set linearVelocity(value: Vector2)
        get linearDampMode(): int64
        set linearDampMode(value: int64)
        get linearDamp(): float64
        set linearDamp(value: float64)
        get angularVelocity(): float64
        set angularVelocity(value: float64)
        get angularDampMode(): int64
        set angularDampMode(value: int64)
        get angularDamp(): float64
        set angularDamp(value: float64)
        get constantForce(): Vector2
        set constantForce(value: Vector2)
        get constantTorque(): float64
        set constantTorque(value: float64)
        readonly bodyShapeEntered: Signal<(bodyRid: Rid, body: Node, bodyShapeIndex: int64, localShapeIndex: int64) => void>
        readonly bodyShapeExited: Signal<(bodyRid: Rid, body: Node, bodyShapeIndex: int64, localShapeIndex: int64) => void>
        readonly bodyEntered: Signal<(body: Node) => void>
        readonly bodyExited: Signal<(body: Node) => void>
        readonly sleepingStateChanged: Signal<() => void>
    }
    namespace RigidBody3D {
        enum FreezeMode {
            FreezeModeStatic = 0,
            FreezeModeKinematic = 1,
        }
        enum CenterOfMassMode {
            CenterOfMassModeAuto = 0,
            CenterOfMassModeCustom = 1,
        }
        enum DampMode {
            DampModeCombine = 0,
            DampModeReplace = 1,
        }
    }
    /** A 3D physics body that is moved by a physics simulation.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_rigidbody3d.html  
     */
    class RigidBody3D<Map extends Record<string, Node> = {}> extends PhysicsBody3D<Map> {
        /** Static body freeze mode (default). The body is not affected by gravity and forces. It can be only moved by user code and doesn't collide with other bodies along its path. */
        static readonly FREEZE_MODE_STATIC = 0
        
        /** Kinematic body freeze mode. Similar to [constant FREEZE_MODE_STATIC], but collides with other bodies along its path when moved. Useful for a frozen body that needs to be animated. */
        static readonly FREEZE_MODE_KINEMATIC = 1
        
        /** In this mode, the body's center of mass is calculated automatically based on its shapes. This assumes that the shapes' origins are also their center of mass. */
        static readonly CENTER_OF_MASS_MODE_AUTO = 0
        
        /** In this mode, the body's center of mass is set through [member center_of_mass]. Defaults to the body's origin position. */
        static readonly CENTER_OF_MASS_MODE_CUSTOM = 1
        
        /** In this mode, the body's damping value is added to any value set in areas or the default value. */
        static readonly DAMP_MODE_COMBINE = 0
        
        /** In this mode, the body's damping value replaces any value set in areas or the default value. */
        static readonly DAMP_MODE_REPLACE = 1
        constructor(identifier?: any)
        /* gdvirtual */ _integrateForces(state: PhysicsDirectBodyState3D): void
        getInverseInertiaTensor(): Basis
        getContactCount(): int64
        setAxisVelocity(axisVelocity: Vector3): void
        applyCentralImpulse(impulse: Vector3): void
        applyImpulse(impulse: Vector3, position: Vector3 = new Vector3(0, 0, 0)): void
        applyTorqueImpulse(impulse: Vector3): void
        applyCentralForce(force: Vector3): void
        applyForce(force: Vector3, position: Vector3 = new Vector3(0, 0, 0)): void
        applyTorque(torque: Vector3): void
        addConstantCentralForce(force: Vector3): void
        addConstantForce(force: Vector3, position: Vector3 = new Vector3(0, 0, 0)): void
        addConstantTorque(torque: Vector3): void
        getCollidingBodies(): GArray
        
        /** The body's mass. */
        get mass(): float64
        set mass(value: float64)
        get physicsMaterialOverride(): PhysicsMaterial
        set physicsMaterialOverride(value: PhysicsMaterial)
        get gravityScale(): float64
        set gravityScale(value: float64)
        get centerOfMassMode(): int64
        set centerOfMassMode(value: int64)
        get centerOfMass(): Vector3
        set centerOfMass(value: Vector3)
        
        /** The body's moment of inertia. This is like mass, but for rotation: it determines how much torque it takes to rotate the body on each axis. The moment of inertia is usually computed automatically from the mass and the shapes, but this property allows you to set a custom value.  
         *  If set to [constant Vector3.ZERO], inertia is automatically computed (default value).  
         *      
         *  **Note:** This value does not change when inertia is automatically computed. Use [PhysicsServer3D] to get the computed inertia.  
         *    
         */
        get inertia(): Vector3
        set inertia(value: Vector3)
        
        /** If `true`, the body will not move and will not calculate forces until woken up by another body through, for example, a collision, or by using the [method apply_impulse] or [method apply_force] methods. */
        get sleeping(): boolean
        set sleeping(value: boolean)
        get canSleep(): boolean
        set canSleep(value: boolean)
        get lockRotation(): boolean
        set lockRotation(value: boolean)
        
        /** If `true`, the body is frozen. Gravity and forces are not applied anymore.  
         *  See [member freeze_mode] to set the body's behavior when frozen.  
         *  For a body that is always frozen, use [StaticBody3D] or [AnimatableBody3D] instead.  
         */
        get freeze(): boolean
        set freeze(value: boolean)
        get freezeMode(): int64
        set freezeMode(value: int64)
        get customIntegrator(): boolean
        set customIntegrator(value: boolean)
        get continuousCd(): boolean
        set continuousCd(value: boolean)
        get contactMonitor(): boolean
        set contactMonitor(value: boolean)
        get maxContactsReported(): int64
        set maxContactsReported(value: int64)
        get linearVelocity(): Vector3
        set linearVelocity(value: Vector3)
        get linearDampMode(): int64
        set linearDampMode(value: int64)
        get linearDamp(): float64
        set linearDamp(value: float64)
        get angularVelocity(): Vector3
        set angularVelocity(value: Vector3)
        get angularDampMode(): int64
        set angularDampMode(value: int64)
        get angularDamp(): float64
        set angularDamp(value: float64)
        get constantForce(): Vector3
        set constantForce(value: Vector3)
        get constantTorque(): Vector3
        set constantTorque(value: Vector3)
        readonly bodyShapeEntered: Signal<(bodyRid: Rid, body: Node, bodyShapeIndex: int64, localShapeIndex: int64) => void>
        readonly bodyShapeExited: Signal<(bodyRid: Rid, body: Node, bodyShapeIndex: int64, localShapeIndex: int64) => void>
        readonly bodyEntered: Signal<(body: Node) => void>
        readonly bodyExited: Signal<(body: Node) => void>
        readonly sleepingStateChanged: Signal<() => void>
    }
    /** Editor-only helper for setting up root motion in [AnimationMixer].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_rootmotionview.html  
     */
    class RootMotionView<Map extends Record<string, Node> = {}> extends VisualInstance3D<Map> {
        constructor(identifier?: any)
        get animationPath(): NodePath
        set animationPath(value: NodePath | string)
        
        /** The grid's color. */
        get color(): Color
        set color(value: Color)
        get cellSize(): float64
        set cellSize(value: float64)
        
        /** The grid's radius in 3D units. The grid's opacity will fade gradually as the distance from the origin increases until this [member radius] is reached. */
        get radius(): float64
        set radius(value: float64)
        get zeroY(): boolean
        set zeroY(value: boolean)
    }
    /** High-level multiplayer API implementation.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_scenemultiplayer.html  
     */
    class SceneMultiplayer extends MultiplayerApi {
        constructor(identifier?: any)
        /** Clears the current SceneMultiplayer network state (you shouldn't call this unless you know what you are doing). */
        clear(): void
        disconnectPeer(id: int64): void
        getAuthenticatingPeers(): PackedInt32Array
        sendAuth(id: int64, data: PackedByteArray | byte[] | ArrayBuffer): GError
        completeAuth(id: int64): GError
        sendBytes(bytes: PackedByteArray | byte[] | ArrayBuffer, id: int64 = 0, mode: MultiplayerPeer.TransferMode = 2, channel: int64 = 0): GError
        get rootPath(): NodePath
        set rootPath(value: NodePath | string)
        get authCallback(): Callable
        set authCallback(value: Callable)
        get authTimeout(): float64
        set authTimeout(value: float64)
        get allowObjectDecoding(): boolean
        set allowObjectDecoding(value: boolean)
        get refuseNewConnections(): boolean
        set refuseNewConnections(value: boolean)
        get serverRelay(): boolean
        set serverRelay(value: boolean)
        get maxSyncPacketSize(): int64
        set maxSyncPacketSize(value: int64)
        get maxDeltaPacketSize(): int64
        set maxDeltaPacketSize(value: int64)
        readonly peerAuthenticating: Signal<(id: int64) => void>
        readonly peerAuthenticationFailed: Signal<(id: int64) => void>
        readonly peerPacket: Signal<(id: int64, packet: PackedByteArray | byte[] | ArrayBuffer) => void>
    }
    namespace SceneReplicationConfig {
        enum ReplicationMode {
            ReplicationModeNever = 0,
            ReplicationModeAlways = 1,
            ReplicationModeOnChange = 2,
        }
    }
    /** Configuration for properties to synchronize with a [MultiplayerSynchronizer].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_scenereplicationconfig.html  
     */
    class SceneReplicationConfig extends Resource {
        /** Do not keep the given property synchronized. */
        static readonly REPLICATION_MODE_NEVER = 0
        
        /** Replicate the given property on process by constantly sending updates using unreliable transfer mode. */
        static readonly REPLICATION_MODE_ALWAYS = 1
        
        /** Replicate the given property on process by sending updates using reliable transfer mode when its value changes. */
        static readonly REPLICATION_MODE_ON_CHANGE = 2
        constructor(identifier?: any)
        getProperties(): GArray
        addProperty(path: NodePath | string, index: int64 = -1): void
        hasProperty(path: NodePath | string): boolean
        removeProperty(path: NodePath | string): void
        propertyGetIndex(path: NodePath | string): int64
        propertyGetSpawn(path: NodePath | string): boolean
        propertySetSpawn(path: NodePath | string, enabled: boolean): void
        propertyGetReplicationMode(path: NodePath | string): SceneReplicationConfig.ReplicationMode
        propertySetReplicationMode(path: NodePath | string, mode: SceneReplicationConfig.ReplicationMode): void
        propertyGetSync(path: NodePath | string): boolean
        propertySetSync(path: NodePath | string, enabled: boolean): void
        propertyGetWatch(path: NodePath | string): boolean
        propertySetWatch(path: NodePath | string, enabled: boolean): void
    }
    namespace SceneState {
        enum GenEditState {
            GenEditStateDisabled = 0,
            GenEditStateInstance = 1,
            GenEditStateMain = 2,
            GenEditStateMainInherited = 3,
        }
    }
    /** Provides access to a scene file's information.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_scenestate.html  
     */
    class SceneState extends RefCounted {
        /** If passed to [method PackedScene.instantiate], blocks edits to the scene state. */
        static readonly GEN_EDIT_STATE_DISABLED = 0
        
        /** If passed to [method PackedScene.instantiate], provides inherited scene resources to the local scene.  
         *      
         *  **Note:** Only available in editor builds.  
         */
        static readonly GEN_EDIT_STATE_INSTANCE = 1
        
        /** If passed to [method PackedScene.instantiate], provides local scene resources to the local scene. Only the main scene should receive the main edit state.  
         *      
         *  **Note:** Only available in editor builds.  
         */
        static readonly GEN_EDIT_STATE_MAIN = 2
        
        /** If passed to [method PackedScene.instantiate], it's similar to [constant GEN_EDIT_STATE_MAIN], but for the case where the scene is being instantiated to be the base of another one.  
         *      
         *  **Note:** Only available in editor builds.  
         */
        static readonly GEN_EDIT_STATE_MAIN_INHERITED = 3
        constructor(identifier?: any)
        getNodeCount(): int64
        getNodeType(idx: int64): StringName
        getNodeName(idx: int64): StringName
        getNodePath(idx: int64, forParent: boolean = false): NodePath
        getNodeOwnerPath(idx: int64): NodePath
        isNodeInstancePlaceholder(idx: int64): boolean
        getNodeInstancePlaceholder(idx: int64): string
        getNodeInstance(idx: int64): PackedScene
        getNodeGroups(idx: int64): PackedStringArray
        getNodeIndex(idx: int64): int64
        getNodePropertyCount(idx: int64): int64
        getNodePropertyName(idx: int64, propIdx: int64): StringName
        getNodePropertyValue(idx: int64, propIdx: int64): any
        getConnectionCount(): int64
        getConnectionSource(idx: int64): NodePath
        getConnectionSignal(idx: int64): StringName
        getConnectionTarget(idx: int64): NodePath
        getConnectionMethod(idx: int64): StringName
        getConnectionFlags(idx: int64): int64
        getConnectionBinds(idx: int64): GArray
        getConnectionUnbinds(idx: int64): int64
    }
    namespace SceneTree {
        enum GroupCallFlags {
            GroupCallDefault = 0,
            GroupCallReverse = 1,
            GroupCallDeferred = 2,
            GroupCallUnique = 4,
        }
    }
    /** Manages the game loop via a hierarchy of nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_scenetree.html  
     */
    class SceneTree extends MainLoop {
        /** Call nodes within a group with no special behavior (default). */
        static readonly GROUP_CALL_DEFAULT = 0
        
        /** Call nodes within a group in reverse tree hierarchy order (all nested children are called before their respective parent nodes). */
        static readonly GROUP_CALL_REVERSE = 1
        
        /** Call nodes within a group at the end of the current frame (can be either process or physics frame), similar to [method Object.call_deferred]. */
        static readonly GROUP_CALL_DEFERRED = 2
        
        /** Call nodes within a group only once, even if the call is executed many times in the same frame. Must be combined with [constant GROUP_CALL_DEFERRED] to work.  
         *      
         *  **Note:** Different arguments are not taken into account. Therefore, when the same call is executed with different arguments, only the first call will be performed.  
         */
        static readonly GROUP_CALL_UNIQUE = 4
        constructor(identifier?: any)
        hasGroup(name: StringName): boolean
        createTimer(timeSec: float64, processAlways: boolean = true, processInPhysics: boolean = false, ignoreTimeScale: boolean = false): SceneTreeTimer
        createTween(): Tween
        getProcessedTweens(): GArray
        getNodeCount(): int64
        getFrame(): int64
        
        /** Quits the application at the end of the current iteration, with the given [param exit_code].  
         *  By convention, an exit code of `0` indicates success, whereas any other exit code indicates an error. For portability reasons, it should be between `0` and `125` (inclusive).  
         *      
         *  **Note:** On iOS this method doesn't work. Instead, as recommended by the [url=https://developer.apple.com/library/archive/qa/qa1561/_index.html]iOS Human Interface Guidelines[/url], the user is expected to close apps via the Home button.  
         */
        quit(exitCode: int64 = 0): void
        queueDelete(obj: GObject): void
        callGroupFlags(flags: int64, group: StringName, method: StringName, ...varargs: any[]): void
        notifyGroupFlags(callFlags: int64, group: StringName, notification: int64): void
        setGroupFlags(callFlags: int64, group: StringName, property: string, value: any): void
        callGroup(group: StringName, method: StringName, ...varargs: any[]): void
        notifyGroup(group: StringName, notification: int64): void
        setGroup(group: StringName, property: string, value: any): void
        getNodesInGroup(group: StringName): GArray
        getFirstNodeInGroup(group: StringName): Node
        getNodeCountInGroup(group: StringName): int64
        changeSceneToFile(path: string): GError
        changeSceneToPacked(packedScene: PackedScene): GError
        reloadCurrentScene(): GError
        unloadCurrentScene(): void
        setMultiplayer(multiplayer: any /*MultiplayerAPI*/, rootPath: NodePath | string = ''): void
        getMultiplayer(forPath: NodePath | string = ''): any /*MultiplayerAPI*/
        get autoAcceptQuit(): boolean
        set autoAcceptQuit(value: boolean)
        get quitOnGoBack(): boolean
        set quitOnGoBack(value: boolean)
        get debugCollisionsHint(): boolean
        set debugCollisionsHint(value: boolean)
        get debugPathsHint(): boolean
        set debugPathsHint(value: boolean)
        get debugNavigationHint(): boolean
        set debugNavigationHint(value: boolean)
        
        /** If `true`, the scene tree is considered paused. This causes the following behavior:  
         *  - 2D and 3D physics will be stopped, as well as collision detection and related signals.  
         *  - Depending on each node's [member Node.process_mode], their [method Node._process], [method Node._physics_process] and [method Node._input] callback methods may not called anymore.  
         */
        get paused(): boolean
        set paused(value: boolean)
        get editedSceneRoot(): Node
        set editedSceneRoot(value: Node)
        get currentScene(): Node
        set currentScene(value: Node)
        
        /** The tree's root [Window]. This is top-most [Node] of the scene tree, and is always present. An absolute [NodePath] always starts from this node. Children of the root node may include the loaded [member current_scene], as well as any [url=https://docs.godotengine.org/en/latest/tutorials/scripting/singletons_autoload.html]AutoLoad[/url] configured in the Project Settings.  
         *  **Warning:** Do not delete this node. This will result in unstable behavior, followed by a crash.  
         */
        get root(): Node
        set root(value: Node)
        get multiplayerPoll(): boolean
        set multiplayerPoll(value: boolean)
        get physicsInterpolation(): boolean
        set physicsInterpolation(value: boolean)
        readonly treeChanged: Signal<() => void>
        readonly treeProcessModeChanged: Signal<() => void>
        readonly nodeAdded: Signal<(node: Node) => void>
        readonly nodeRemoved: Signal<(node: Node) => void>
        readonly nodeRenamed: Signal<(node: Node) => void>
        readonly nodeConfigurationWarningChanged: Signal<(node: Node) => void>
        readonly processFrame: Signal<() => void>
        readonly physicsFrame: Signal<() => void>
    }
    /** One-shot timer.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_scenetreetimer.html  
     */
    class SceneTreeTimer extends RefCounted {
        constructor(identifier?: any)
        get timeLeft(): float64
        set timeLeft(value: float64)
        
        /** Emitted when the timer reaches 0. */
        readonly timeout: Signal<() => void>
    }
    /** A class stored as a resource.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_script.html  
     */
    class Script extends Resource {
        constructor(identifier?: any)
        canInstantiate(): boolean
        instanceHas(baseObject: GObject): boolean
        hasSourceCode(): boolean
        
        /** Reloads the script's class implementation. Returns an error code. */
        reload(keepState: boolean = false): GError
        getBaseScript(): Script
        getInstanceBaseType(): StringName
        getGlobalName(): StringName
        hasScriptSignal(signalName: StringName): boolean
        getScriptPropertyList(): GArray
        getScriptMethodList(): GArray
        getScriptSignalList(): GArray
        getScriptConstantMap(): GDictionary
        getPropertyDefaultValue(property: StringName): any
        isTool(): boolean
        isAbstract(): boolean
        getRpcConfig(): any
        get sourceCode(): string
        set sourceCode(value: string)
    }
    /** Godot editor's popup dialog for creating new [Script] files.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_scriptcreatedialog.html  
     */
    class ScriptCreateDialog<Map extends Record<string, Node> = {}> extends ConfirmationDialog<Map> {
        constructor(identifier?: any)
        /** Prefills required fields to configure the ScriptCreateDialog for use. */
        config(inherits: string, path: string, builtInEnabled: boolean = true, loadEnabled: boolean = true): void
        readonly scriptCreated: Signal<(script: Script) => void>
    }
    /** Godot editor's script editor.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_scripteditor.html  
     */
    class ScriptEditor<Map extends Record<string, Node> = {}> extends PanelContainer<Map> {
        constructor(identifier?: any)
        _helpTabGoto(_unnamedArg0: string, _unnamedArg1: string): boolean
        getCurrentEditor(): ScriptEditorBase
        getOpenScriptEditors(): GArray
        getBreakpoints(): PackedStringArray
        registerSyntaxHighlighter(syntaxHighlighter: EditorSyntaxHighlighter): void
        unregisterSyntaxHighlighter(syntaxHighlighter: EditorSyntaxHighlighter): void
        gotoLine(lineNumber: int64): void
        getCurrentScript(): Script
        getOpenScripts(): GArray
        openScriptCreateDialog(baseName: string, basePath: string): void
        gotoHelp(topic: string): void
        updateDocsFromScript(script: Script): void
        readonly editorScriptChanged: Signal<(script: Script) => void>
        readonly scriptClose: Signal<(script: Script) => void>
    }
    /** Base editor for editing scripts in the [ScriptEditor].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_scripteditorbase.html  
     */
    class ScriptEditorBase<Map extends Record<string, Node> = {}> extends VBoxContainer<Map> {
        constructor(identifier?: any)
        getBaseEditor(): Control
        addSyntaxHighlighter(highlighter: EditorSyntaxHighlighter): void
        readonly nameChanged: Signal<() => void>
        readonly editedScriptChanged: Signal<() => void>
        readonly requestHelp: Signal<(topic: string) => void>
        readonly requestOpenScriptAtLine: Signal<(script: GObject, line: int64) => void>
        readonly requestSaveHistory: Signal<() => void>
        readonly requestSavePreviousState: Signal<(state: GDictionary) => void>
        readonly goToHelp: Signal<(what: string) => void>
        readonly searchInFilesRequested: Signal<(text: string) => void>
        readonly replaceInFilesRequested: Signal<(text: string) => void>
        readonly goToMethod: Signal<(script: GObject, method: string) => void>
    }
    /** @link https://docs.godotengine.org/en/latest/classes/class_scriptextension.html */
    class ScriptExtension extends Script {
        constructor(identifier?: any)
        /* gdvirtual */ _editorCanReloadFromFile(): boolean
        /* gdvirtual */ _placeholderErased(placeholder: int64): void
        /* gdvirtual */ _canInstantiate(): boolean
        /* gdvirtual */ _getBaseScript(): Script
        /* gdvirtual */ _getGlobalName(): StringName
        /* gdvirtual */ _inheritsScript(script: Script): boolean
        /* gdvirtual */ _getInstanceBaseType(): StringName
        /* gdvirtual */ _instanceCreate(forObject: GObject): int64
        /* gdvirtual */ _placeholderInstanceCreate(forObject: GObject): int64
        /* gdvirtual */ _instanceHas(object: GObject): boolean
        /* gdvirtual */ _hasSourceCode(): boolean
        /* gdvirtual */ _getSourceCode(): string
        /* gdvirtual */ _setSourceCode(code: string): void
        /* gdvirtual */ _reload(keepState: boolean): GError
        /* gdvirtual */ _getDocClassName(): StringName
        /* gdvirtual */ _getDocumentation(): GArray
        /* gdvirtual */ _getClassIconPath(): string
        /* gdvirtual */ _hasMethod(method: StringName): boolean
        /* gdvirtual */ _hasStaticMethod(method: StringName): boolean
        /* gdvirtual */ _getScriptMethodArgumentCount(method: StringName): any
        /* gdvirtual */ _getMethodInfo(method: StringName): GDictionary
        /* gdvirtual */ _isTool(): boolean
        /* gdvirtual */ _isValid(): boolean
        /* gdvirtual */ _isAbstract(): boolean
        /* gdvirtual */ _getLanguage(): ScriptLanguage
        /* gdvirtual */ _hasScriptSignal(signal: StringName): boolean
        /* gdvirtual */ _getScriptSignalList(): GArray
        /* gdvirtual */ _hasPropertyDefaultValue(property: StringName): boolean
        /* gdvirtual */ _getPropertyDefaultValue(property: StringName): any
        /* gdvirtual */ _updateExports(): void
        /* gdvirtual */ _getScriptMethodList(): GArray
        /* gdvirtual */ _getScriptPropertyList(): GArray
        /* gdvirtual */ _getMemberLine(member: StringName): int64
        /* gdvirtual */ _getConstants(): GDictionary
        /* gdvirtual */ _getMembers(): GArray
        /* gdvirtual */ _isPlaceholderFallbackEnabled(): boolean
        /* gdvirtual */ _getRpcConfig(): any
    }
    namespace ScriptLanguage {
        enum ScriptNameCasing {
            ScriptNameCasingAuto = 0,
            ScriptNameCasingPascalCase = 1,
            ScriptNameCasingSnakeCase = 2,
            ScriptNameCasingKebabCase = 3,
        }
    }
    /** @link https://docs.godotengine.org/en/latest/classes/class_scriptlanguage.html */
    class ScriptLanguage extends GObject {
        static readonly SCRIPT_NAME_CASING_AUTO = 0
        static readonly SCRIPT_NAME_CASING_PASCAL_CASE = 1
        static readonly SCRIPT_NAME_CASING_SNAKE_CASE = 2
        static readonly SCRIPT_NAME_CASING_KEBAB_CASE = 3
        constructor(identifier?: any)
    }
    namespace ScriptLanguageExtension {
        enum LookupResultType {
            LookupResultScriptLocation = 0,
            LookupResultClass = 1,
            LookupResultClassConstant = 2,
            LookupResultClassProperty = 3,
            LookupResultClassMethod = 4,
            LookupResultClassSignal = 5,
            LookupResultClassEnum = 6,
            LookupResultClassTbdGlobalscope = 7,
            LookupResultClassAnnotation = 8,
            LookupResultLocalConstant = 9,
            LookupResultLocalVariable = 10,
            LookupResultMax = 11,
        }
        enum CodeCompletionLocation {
            LocationLocal = 0,
            LocationParentMask = 256,
            LocationOtherUserCode = 512,
            LocationOther = 1024,
        }
        enum CodeCompletionKind {
            CodeCompletionKindClass = 0,
            CodeCompletionKindFunction = 1,
            CodeCompletionKindSignal = 2,
            CodeCompletionKindVariable = 3,
            CodeCompletionKindMember = 4,
            CodeCompletionKindEnum = 5,
            CodeCompletionKindConstant = 6,
            CodeCompletionKindNodePath = 7,
            CodeCompletionKindFilePath = 8,
            CodeCompletionKindPlainText = 9,
            CodeCompletionKindMax = 10,
        }
    }
    /** @link https://docs.godotengine.org/en/latest/classes/class_scriptlanguageextension.html */
    class ScriptLanguageExtension extends ScriptLanguage {
        static readonly LOOKUP_RESULT_SCRIPT_LOCATION = 0
        static readonly LOOKUP_RESULT_CLASS = 1
        static readonly LOOKUP_RESULT_CLASS_CONSTANT = 2
        static readonly LOOKUP_RESULT_CLASS_PROPERTY = 3
        static readonly LOOKUP_RESULT_CLASS_METHOD = 4
        static readonly LOOKUP_RESULT_CLASS_SIGNAL = 5
        static readonly LOOKUP_RESULT_CLASS_ENUM = 6
        static readonly LOOKUP_RESULT_CLASS_TBD_GLOBALSCOPE = 7
        static readonly LOOKUP_RESULT_CLASS_ANNOTATION = 8
        static readonly LOOKUP_RESULT_LOCAL_CONSTANT = 9
        static readonly LOOKUP_RESULT_LOCAL_VARIABLE = 10
        static readonly LOOKUP_RESULT_MAX = 11
        
        /** The option is local to the location of the code completion query - e.g. a local variable. Subsequent value of location represent options from the outer class, the exact value represent how far they are (in terms of inner classes). */
        static readonly LOCATION_LOCAL = 0
        
        /** The option is from the containing class or a parent class, relative to the location of the code completion query. Perform a bitwise OR with the class depth (e.g. `0` for the local class, `1` for the parent, `2` for the grandparent, etc.) to store the depth of an option in the class or a parent class. */
        static readonly LOCATION_PARENT_MASK = 256
        
        /** The option is from user code which is not local and not in a derived class (e.g. Autoload Singletons). */
        static readonly LOCATION_OTHER_USER_CODE = 512
        
        /** The option is from other engine code, not covered by the other enum constants - e.g. built-in classes. */
        static readonly LOCATION_OTHER = 1024
        static readonly CODE_COMPLETION_KIND_CLASS = 0
        static readonly CODE_COMPLETION_KIND_FUNCTION = 1
        static readonly CODE_COMPLETION_KIND_SIGNAL = 2
        static readonly CODE_COMPLETION_KIND_VARIABLE = 3
        static readonly CODE_COMPLETION_KIND_MEMBER = 4
        static readonly CODE_COMPLETION_KIND_ENUM = 5
        static readonly CODE_COMPLETION_KIND_CONSTANT = 6
        static readonly CODE_COMPLETION_KIND_NODE_PATH = 7
        static readonly CODE_COMPLETION_KIND_FILE_PATH = 8
        static readonly CODE_COMPLETION_KIND_PLAIN_TEXT = 9
        static readonly CODE_COMPLETION_KIND_MAX = 10
        constructor(identifier?: any)
        /* gdvirtual */ _getName(): string
        /* gdvirtual */ _init(): void
        /* gdvirtual */ _getType(): string
        /* gdvirtual */ _getExtension(): string
        /* gdvirtual */ _finish(): void
        /* gdvirtual */ _getReservedWords(): PackedStringArray
        /* gdvirtual */ _isControlFlowKeyword(keyword: string): boolean
        /* gdvirtual */ _getCommentDelimiters(): PackedStringArray
        /* gdvirtual */ _getDocCommentDelimiters(): PackedStringArray
        /* gdvirtual */ _getStringDelimiters(): PackedStringArray
        /* gdvirtual */ _makeTemplate(template: string, className: string, baseClassName: string): Script
        /* gdvirtual */ _getBuiltInTemplates(object: StringName): GArray
        /* gdvirtual */ _isUsingTemplates(): boolean
        /* gdvirtual */ _validate(script: string, path: string, validateFunctions: boolean, validateErrors: boolean, validateWarnings: boolean, validateSafeLines: boolean): GDictionary
        /* gdvirtual */ _validatePath(path: string): string
        /* gdvirtual */ _createScript(): GObject
        /* gdvirtual */ _hasNamedClasses(): boolean
        /* gdvirtual */ _supportsBuiltinMode(): boolean
        /* gdvirtual */ _supportsDocumentation(): boolean
        /* gdvirtual */ _canInheritFromFile(): boolean
        /* gdvirtual */ _findFunction(function_: string, code: string): int64
        /* gdvirtual */ _makeFunction(className: string, functionName: string, functionArgs: PackedStringArray | string[]): string
        /* gdvirtual */ _canMakeFunction(): boolean
        /* gdvirtual */ _openInExternalEditor(script: Script, line: int64, column: int64): GError
        /* gdvirtual */ _overridesExternalEditor(): boolean
        /* gdvirtual */ _preferredFileNameCasing(): ScriptLanguage.ScriptNameCasing
        /* gdvirtual */ _completeCode(code: string, path: string, owner: GObject): GDictionary
        /* gdvirtual */ _lookupCode(code: string, symbol: string, path: string, owner: GObject): GDictionary
        /* gdvirtual */ _autoIndentCode(code: string, fromLine: int64, toLine: int64): string
        /* gdvirtual */ _addGlobalConstant(name: StringName, value: any): void
        /* gdvirtual */ _addNamedGlobalConstant(name: StringName, value: any): void
        /* gdvirtual */ _removeNamedGlobalConstant(name: StringName): void
        /* gdvirtual */ _threadEnter(): void
        /* gdvirtual */ _threadExit(): void
        /* gdvirtual */ _debugGetError(): string
        /* gdvirtual */ _debugGetStackLevelCount(): int64
        /* gdvirtual */ _debugGetStackLevelLine(level: int64): int64
        /* gdvirtual */ _debugGetStackLevelFunction(level: int64): string
        /* gdvirtual */ _debugGetStackLevelSource(level: int64): string
        /* gdvirtual */ _debugGetStackLevelLocals(level: int64, maxSubitems: int64, maxDepth: int64): GDictionary
        /* gdvirtual */ _debugGetStackLevelMembers(level: int64, maxSubitems: int64, maxDepth: int64): GDictionary
        /* gdvirtual */ _debugGetStackLevelInstance(level: int64): int64
        /* gdvirtual */ _debugGetGlobals(maxSubitems: int64, maxDepth: int64): GDictionary
        /* gdvirtual */ _debugParseStackLevelExpression(level: int64, expression: string, maxSubitems: int64, maxDepth: int64): string
        /* gdvirtual */ _debugGetCurrentStackInfo(): GArray
        /* gdvirtual */ _reloadAllScripts(): void
        /* gdvirtual */ _reloadScripts(scripts: GArray, softReload: boolean): void
        /* gdvirtual */ _reloadToolScript(script: Script, softReload: boolean): void
        /* gdvirtual */ _getRecognizedExtensions(): PackedStringArray
        /* gdvirtual */ _getPublicFunctions(): GArray
        /* gdvirtual */ _getPublicConstants(): GDictionary
        /* gdvirtual */ _getPublicAnnotations(): GArray
        /* gdvirtual */ _profilingStart(): void
        /* gdvirtual */ _profilingStop(): void
        /* gdvirtual */ _profilingSetSaveNativeCalls(enable: boolean): void
        /* gdvirtual */ _profilingGetAccumulatedData(infoArray: int64, infoMax: int64): int64
        /* gdvirtual */ _profilingGetFrameData(infoArray: int64, infoMax: int64): int64
        /* gdvirtual */ _frame(): void
        /* gdvirtual */ _handlesGlobalClassType(type: string): boolean
        /* gdvirtual */ _getGlobalClassName(path: string): GDictionary
    }
    /** Abstract base class for scrollbars.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_scrollbar.html  
     */
    class ScrollBar<Map extends Record<string, Node> = {}> extends Range<Map> {
        constructor(identifier?: any)
        get customStep(): float64
        set customStep(value: float64)
        
        /** Emitted when the scrollbar is being scrolled. */
        readonly scrolling: Signal<() => void>
    }
    namespace ScrollContainer {
        enum ScrollMode {
            ScrollModeDisabled = 0,
            ScrollModeAuto = 1,
            ScrollModeShowAlways = 2,
            ScrollModeShowNever = 3,
            ScrollModeReserve = 4,
        }
    }
    /** A container used to provide scrollbars to a child control when needed.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_scrollcontainer.html  
     */
    class ScrollContainer<Map extends Record<string, Node> = {}> extends Container<Map> {
        /** Scrolling disabled, scrollbar will be invisible. */
        static readonly SCROLL_MODE_DISABLED = 0
        
        /** Scrolling enabled, scrollbar will be visible only if necessary, i.e. container's content is bigger than the container. */
        static readonly SCROLL_MODE_AUTO = 1
        
        /** Scrolling enabled, scrollbar will be always visible. */
        static readonly SCROLL_MODE_SHOW_ALWAYS = 2
        
        /** Scrolling enabled, scrollbar will be hidden. */
        static readonly SCROLL_MODE_SHOW_NEVER = 3
        
        /** Combines [constant SCROLL_MODE_AUTO] and [constant SCROLL_MODE_SHOW_ALWAYS]. The scrollbar is only visible if necessary, but the content size is adjusted as if it was always visible. It's useful for ensuring that content size stays the same regardless if the scrollbar is visible. */
        static readonly SCROLL_MODE_RESERVE = 4
        constructor(identifier?: any)
        getHScrollBar(): HScrollBar
        getVScrollBar(): VScrollBar
        ensureControlVisible(control: Control): void
        get followFocus(): boolean
        set followFocus(value: boolean)
        get drawFocusBorder(): boolean
        set drawFocusBorder(value: boolean)
        get scrollHorizontal(): int64
        set scrollHorizontal(value: int64)
        get scrollVertical(): int64
        set scrollVertical(value: int64)
        get scrollHorizontalCustomStep(): float64
        set scrollHorizontalCustomStep(value: float64)
        get scrollVerticalCustomStep(): float64
        set scrollVerticalCustomStep(value: float64)
        get horizontalScrollMode(): int64
        set horizontalScrollMode(value: int64)
        get verticalScrollMode(): int64
        set verticalScrollMode(value: int64)
        get scrollDeadzone(): int64
        set scrollDeadzone(value: int64)
        readonly scrollStarted: Signal<() => void>
        readonly scrollEnded: Signal<() => void>
    }
    /** A 2D line segment shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_segmentshape2d.html  
     */
    class SegmentShape2D extends Shape2D {
        constructor(identifier?: any)
        /** The segment's first point position. */
        get a(): Vector2
        set a(value: Vector2)
        
        /** The segment's second point position. */
        get b(): Vector2
        set b(value: Vector2)
    }
    /** A 2D ray shape used for physics collision that tries to separate itself from any collider.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_separationrayshape2d.html  
     */
    class SeparationRayShape2D extends Shape2D {
        constructor(identifier?: any)
        /** The ray's length. */
        get length(): float64
        set length(value: float64)
        get slideOnSlope(): boolean
        set slideOnSlope(value: boolean)
    }
    /** A 3D ray shape used for physics collision that tries to separate itself from any collider.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_separationrayshape3d.html  
     */
    class SeparationRayShape3D extends Shape3D {
        constructor(identifier?: any)
        /** The ray's length. */
        get length(): float64
        set length(value: float64)
        get slideOnSlope(): boolean
        set slideOnSlope(value: boolean)
    }
    /** Abstract base class for separators.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_separator.html  
     */
    class Separator<Map extends Record<string, Node> = {}> extends Control<Map> {
        constructor(identifier?: any)
    }
    namespace Shader {
        enum Mode {
            ModeSpatial = 0,
            ModeCanvasItem = 1,
            ModeParticles = 2,
            ModeSky = 3,
            ModeFog = 4,
        }
    }
    /** A shader implemented in the Godot shading language.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_shader.html  
     */
    class Shader extends Resource {
        /** Mode used to draw all 3D objects. */
        static readonly MODE_SPATIAL = 0
        
        /** Mode used to draw all 2D objects. */
        static readonly MODE_CANVAS_ITEM = 1
        
        /** Mode used to calculate particle information on a per-particle basis. Not used for drawing. */
        static readonly MODE_PARTICLES = 2
        
        /** Mode used for drawing skies. Only works with shaders attached to [Sky] objects. */
        static readonly MODE_SKY = 3
        
        /** Mode used for setting the color and density of volumetric fog effect. */
        static readonly MODE_FOG = 4
        constructor(identifier?: any)
        getMode(): Shader.Mode
        setDefaultTextureParameter(name: StringName, texture: Texture, index: int64 = 0): void
        getDefaultTextureParameter(name: StringName, index: int64 = 0): Texture
        getShaderUniformList(getGroups: boolean = false): GArray
        inspectNativeShaderCode(): void
        
        /** Returns the shader's code as the user has written it, not the full generated code used internally. */
        get code(): string
        set code(value: string)
    }
    /** A node used to override global shader parameters' values in a scene.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_shaderglobalsoverride.html  
     */
    class ShaderGlobalsOverride<Map extends Record<string, Node> = {}> extends Node<Map> {
        constructor(identifier?: any)
        _activate(): void
    }
    /** A snippet of shader code to be included in a [Shader] with `#include`.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_shaderinclude.html  
     */
    class ShaderInclude extends Resource {
        constructor(identifier?: any)
        /** Returns the code of the shader include file. The returned text is what the user has written, not the full generated code used internally. */
        get code(): string
        set code(value: string)
    }
    /** Internal database of built in shader include files.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_shaderincludedb.html  
     */
    class ShaderIncludeDB extends GObject {
        constructor(identifier?: any)
        static listBuiltInIncludeFiles(): PackedStringArray
        static hasBuiltInIncludeFile(fileName: string): boolean
        static getBuiltInIncludeFile(fileName: string): string
    }
    /** A material defined by a custom [Shader] program and the values of its shader parameters.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_shadermaterial.html  
     */
    class ShaderMaterial extends Material {
        constructor(identifier?: any)
        setShaderParameter(param: StringName, value: any): void
        getShaderParameter(param: StringName): any
        
        /** The [Shader] program used to render this material. */
        get shader(): Shader
        set shader(value: Shader)
    }
    /** Abstract base class for 2D shapes used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_shape2d.html  
     */
    class Shape2D extends Resource {
        constructor(identifier?: any)
        /** Returns `true` if this shape is colliding with another.  
         *  This method needs the transformation matrix for this shape ([param local_xform]), the shape to check collisions with ([param with_shape]), and the transformation matrix of that shape ([param shape_xform]).  
         */
        collide(localXform: Transform2D, withShape: Shape2D, shapeXform: Transform2D): boolean
        collideWithMotion(localXform: Transform2D, localMotion: Vector2, withShape: Shape2D, shapeXform: Transform2D, shapeMotion: Vector2): boolean
        collideAndGetContacts(localXform: Transform2D, withShape: Shape2D, shapeXform: Transform2D): PackedVector2Array
        collideWithMotionAndGetContacts(localXform: Transform2D, localMotion: Vector2, withShape: Shape2D, shapeXform: Transform2D, shapeMotion: Vector2): PackedVector2Array
        
        /** Draws a solid shape onto a [CanvasItem] with the [RenderingServer] API filled with the specified [param color]. The exact drawing method is specific for each shape and cannot be configured. */
        draw(canvasItem: Rid, color: Color): void
        getRect(): Rect2
        get customSolverBias(): float64
        set customSolverBias(value: float64)
    }
    /** Abstract base class for 3D shapes used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_shape3d.html  
     */
    class Shape3D extends Resource {
        constructor(identifier?: any)
        getDebugMesh(): ArrayMesh
        get customSolverBias(): float64
        set customSolverBias(value: float64)
        
        /** The collision margin for the shape. This is not used in Godot Physics.  
         *  Collision margins allow collision detection to be more efficient by adding an extra shell around shapes. Collision algorithms are more expensive when objects overlap by more than their margin, so a higher value for margins is better for performance, at the cost of accuracy around edges as it makes them less sharp.  
         */
        get margin(): float64
        set margin(value: float64)
    }
    /** A 2D shape that sweeps a region of space to detect [CollisionObject2D]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_shapecast2d.html  
     */
    class ShapeCast2D<Map extends Record<string, Node> = {}> extends Node2D<Map> {
        constructor(identifier?: any)
        isColliding(): boolean
        getCollisionCount(): int64
        forceShapecastUpdate(): void
        getCollider(index: int64): GObject
        getColliderRid(index: int64): Rid
        getColliderShape(index: int64): int64
        getCollisionPoint(index: int64): Vector2
        getCollisionNormal(index: int64): Vector2
        getClosestCollisionSafeFraction(): float64
        getClosestCollisionUnsafeFraction(): float64
        addExceptionRid(rid: Rid): void
        addException(node: CollisionObject2D): void
        removeExceptionRid(rid: Rid): void
        removeException(node: CollisionObject2D): void
        clearExceptions(): void
        setCollisionMaskValue(layerNumber: int64, value: boolean): void
        getCollisionMaskValue(layerNumber: int64): boolean
        
        /** If `true`, collisions will be reported. */
        get enabled(): boolean
        set enabled(value: boolean)
        
        /** The shape to be used for collision queries. */
        get shape(): Shape2D
        set shape(value: Shape2D)
        get excludeParent(): boolean
        set excludeParent(value: boolean)
        get targetPosition(): Vector2
        set targetPosition(value: Vector2)
        
        /** The collision margin for the shape. A larger margin helps detecting collisions more consistently, at the cost of precision. */
        get margin(): float64
        set margin(value: float64)
        get maxResults(): int64
        set maxResults(value: int64)
        get collisionMask(): int64
        set collisionMask(value: int64)
        get collisionResult(): GArray
        set collisionResult(value: GArray)
        get collideWithAreas(): boolean
        set collideWithAreas(value: boolean)
        get collideWithBodies(): boolean
        set collideWithBodies(value: boolean)
    }
    /** A 3D shape that sweeps a region of space to detect [CollisionObject3D]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_shapecast3d.html  
     */
    class ShapeCast3D<Map extends Record<string, Node> = {}> extends Node3D<Map> {
        constructor(identifier?: any)
        resourceChanged(resource: Resource): void
        isColliding(): boolean
        getCollisionCount(): int64
        forceShapecastUpdate(): void
        getCollider(index: int64): GObject
        getColliderRid(index: int64): Rid
        getColliderShape(index: int64): int64
        getCollisionPoint(index: int64): Vector3
        getCollisionNormal(index: int64): Vector3
        getClosestCollisionSafeFraction(): float64
        getClosestCollisionUnsafeFraction(): float64
        addExceptionRid(rid: Rid): void
        addException(node: CollisionObject3D): void
        removeExceptionRid(rid: Rid): void
        removeException(node: CollisionObject3D): void
        clearExceptions(): void
        setCollisionMaskValue(layerNumber: int64, value: boolean): void
        getCollisionMaskValue(layerNumber: int64): boolean
        
        /** If `true`, collisions will be reported. */
        get enabled(): boolean
        set enabled(value: boolean)
        
        /** The shape to be used for collision queries. */
        get shape(): Shape3D
        set shape(value: Shape3D)
        get excludeParent(): boolean
        set excludeParent(value: boolean)
        get targetPosition(): Vector3
        set targetPosition(value: Vector3)
        
        /** The collision margin for the shape. A larger margin helps detecting collisions more consistently, at the cost of precision. */
        get margin(): float64
        set margin(value: float64)
        get maxResults(): int64
        set maxResults(value: int64)
        get collisionMask(): int64
        set collisionMask(value: int64)
        get collisionResult(): GArray
        set collisionResult(value: GArray)
        get collideWithAreas(): boolean
        set collideWithAreas(value: boolean)
        get collideWithBodies(): boolean
        set collideWithBodies(value: boolean)
        get debugShapeCustomColor(): Color
        set debugShapeCustomColor(value: Color)
    }
    /** A shortcut for binding input.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_shortcut.html  
     */
    class Shortcut extends Resource {
        constructor(identifier?: any)
        hasValidEvent(): boolean
        matchesEvent(event: InputEvent): boolean
        getAsText(): string
        
        /** The shortcut's [InputEvent] array.  
         *  Generally the [InputEvent] used is an [InputEventKey], though it can be any [InputEvent], including an [InputEventAction].  
         */
        get events(): GArray
        set events(value: GArray)
    }
    /** The parent of a hierarchy of [Bone2D]s, used to create a 2D skeletal animation.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_skeleton2d.html  
     */
    class Skeleton2D<Map extends Record<string, Node> = {}> extends Node2D<Map> {
        constructor(identifier?: any)
        getBoneCount(): int64
        getBone(idx: int64): Bone2D
        getSkeleton(): Rid
        setModificationStack(modificationStack: SkeletonModificationStack2D): void
        getModificationStack(): SkeletonModificationStack2D
        executeModifications(delta: float64, executionMode: int64): void
        setBoneLocalPoseOverride(boneIdx: int64, overridePose: Transform2D, strength: float64, persistent: boolean): void
        getBoneLocalPoseOverride(boneIdx: int64): Transform2D
        readonly boneSetupChanged: Signal<() => void>
    }
    namespace Skeleton3D {
        enum ModifierCallbackModeProcess {
            ModifierCallbackModeProcessPhysics = 0,
            ModifierCallbackModeProcessIdle = 1,
        }
    }
    /** A node containing a bone hierarchy, used to create a 3D skeletal animation.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_skeleton3d.html  
     */
    class Skeleton3D<Map extends Record<string, Node> = {}> extends Node3D<Map> {
        /** Notification received when this skeleton's pose needs to be updated. In that case, this is called only once per frame in a deferred process. */
        static readonly NOTIFICATION_UPDATE_SKELETON = 50
        
        /** Set a flag to process modification during physics frames (see [constant Node.NOTIFICATION_INTERNAL_PHYSICS_PROCESS]). */
        static readonly MODIFIER_CALLBACK_MODE_PROCESS_PHYSICS = 0
        
        /** Set a flag to process modification during process frames (see [constant Node.NOTIFICATION_INTERNAL_PROCESS]). */
        static readonly MODIFIER_CALLBACK_MODE_PROCESS_IDLE = 1
        constructor(identifier?: any)
        addBone(name: string): int64
        findBone(name: string): int64
        getBoneName(boneIdx: int64): string
        setBoneName(boneIdx: int64, name: string): void
        getBoneMeta(boneIdx: int64, key: StringName): any
        getBoneMetaList(boneIdx: int64): GArray
        hasBoneMeta(boneIdx: int64, key: StringName): boolean
        setBoneMeta(boneIdx: int64, key: StringName, value: any): void
        getConcatenatedBoneNames(): StringName
        getBoneParent(boneIdx: int64): int64
        setBoneParent(boneIdx: int64, parentIdx: int64): void
        getBoneCount(): int64
        getVersion(): int64
        unparentBoneAndRest(boneIdx: int64): void
        getBoneChildren(boneIdx: int64): PackedInt32Array
        getParentlessBones(): PackedInt32Array
        getBoneRest(boneIdx: int64): Transform3D
        setBoneRest(boneIdx: int64, rest: Transform3D): void
        getBoneGlobalRest(boneIdx: int64): Transform3D
        createSkinFromRestTransforms(): Skin
        registerSkin(skin: Skin): SkinReference
        localizeRests(): void
        clearBones(): void
        getBonePose(boneIdx: int64): Transform3D
        setBonePose(boneIdx: int64, pose: Transform3D): void
        setBonePosePosition(boneIdx: int64, position: Vector3): void
        setBonePoseRotation(boneIdx: int64, rotation: Quaternion): void
        setBonePoseScale(boneIdx: int64, scale: Vector3): void
        getBonePosePosition(boneIdx: int64): Vector3
        getBonePoseRotation(boneIdx: int64): Quaternion
        getBonePoseScale(boneIdx: int64): Vector3
        resetBonePose(boneIdx: int64): void
        resetBonePoses(): void
        isBoneEnabled(boneIdx: int64): boolean
        setBoneEnabled(boneIdx: int64, enabled: boolean = true): void
        getBoneGlobalPose(boneIdx: int64): Transform3D
        setBoneGlobalPose(boneIdx: int64, pose: Transform3D): void
        forceUpdateAllBoneTransforms(): void
        forceUpdateBoneChildTransform(boneIdx: int64): void
        clearBonesGlobalPoseOverride(): void
        setBoneGlobalPoseOverride(boneIdx: int64, pose: Transform3D, amount: float64, persistent: boolean = false): void
        getBoneGlobalPoseOverride(boneIdx: int64): Transform3D
        getBoneGlobalPoseNoOverride(boneIdx: int64): Transform3D
        physicalBonesStopSimulation(): void
        physicalBonesStartSimulation(bones: GArray = []): void
        physicalBonesAddCollisionException(exception: Rid): void
        physicalBonesRemoveCollisionException(exception: Rid): void
        get motionScale(): float64
        set motionScale(value: float64)
        get showRestOnly(): boolean
        set showRestOnly(value: boolean)
        get modifierCallbackModeProcess(): int64
        set modifierCallbackModeProcess(value: int64)
        get animatePhysicalBones(): boolean
        set animatePhysicalBones(value: boolean)
        readonly restUpdated: Signal<() => void>
        readonly poseUpdated: Signal<() => void>
        readonly skeletonUpdated: Signal<() => void>
        readonly boneEnabledChanged: Signal<(boneIdx: int64) => void>
        readonly boneListChanged: Signal<() => void>
        readonly showRestOnlyChanged: Signal<() => void>
    }
    /** A node used to rotate all bones of a [Skeleton3D] bone chain a way that places the end bone at a desired 3D position.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_skeletonik3d.html  
     */
    class SkeletonIK3D<Map extends Record<string, Node> = {}> extends SkeletonModifier3D<Map> {
        constructor(identifier?: any)
        getParentSkeleton(): Skeleton3D
        isRunning(): boolean
        
        /** Starts applying IK effects on each frame to the [Skeleton3D] bones but will only take effect starting on the next frame. If [param one_time] is `true`, this will take effect immediately but also reset on the next frame. */
        start(oneTime: boolean = false): void
        
        /** Stops applying IK effects on each frame to the [Skeleton3D] bones and also calls [method Skeleton3D.clear_bones_global_pose_override] to remove existing overrides on all bones. */
        stop(): void
        get rootBone(): StringName
        set rootBone(value: StringName)
        get tipBone(): StringName
        set tipBone(value: StringName)
        
        /** First target of the IK chain where the tip bone is placed and, if [member override_tip_basis] is `true`, how the tip bone is rotated. If a [member target_node] path is available the nodes transform is used instead and this property is ignored. */
        get target(): Transform3D
        set target(value: Transform3D)
        get overrideTipBasis(): boolean
        set overrideTipBasis(value: boolean)
        get useMagnet(): boolean
        set useMagnet(value: boolean)
        
        /** Secondary target position (first is [member target] property or [member target_node]) for the IK chain. Use magnet position (pole target) to control the bending of the IK chain. Only works if the bone chain has more than 2 bones. The middle chain bone position will be linearly interpolated with the magnet position. */
        get magnet(): Vector3
        set magnet(value: Vector3)
        get targetNode(): NodePath
        set targetNode(value: NodePath | string)
        get minDistance(): float64
        set minDistance(value: float64)
        get maxIterations(): int64
        set maxIterations(value: int64)
        
        /** Interpolation value for how much the IK results are applied to the current skeleton bone chain. A value of `1.0` will overwrite all skeleton bone transforms completely while a value of `0.0` will visually disable the SkeletonIK. */
        get interpolation(): float64
        set interpolation(value: float64)
    }
    /** Base class for resources that operate on [Bone2D]s in a [Skeleton2D].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_skeletonmodification2d.html  
     */
    class SkeletonModification2D extends Resource {
        constructor(identifier?: any)
        /** Executes the given modification. This is where the modification performs whatever function it is designed to do. */
        /* gdvirtual */ _execute(delta: float64): void
        /* gdvirtual */ _setupModification(modificationStack: SkeletonModificationStack2D): void
        /* gdvirtual */ _drawEditorGizmo(): void
        getModificationStack(): SkeletonModificationStack2D
        setIsSetup(isSetup: boolean): void
        getIsSetup(): boolean
        clampAngle(angle: float64, min: float64, max: float64, invert: boolean): float64
        setEditorDrawGizmo(drawGizmo: boolean): void
        getEditorDrawGizmo(): boolean
        
        /** If `true`, the modification's [method _execute] function will be called by the [SkeletonModificationStack2D]. */
        get enabled(): boolean
        set enabled(value: boolean)
        get executionMode(): int64
        set executionMode(value: int64)
    }
    class SkeletonModification2DCcdik extends SkeletonModification2D {
        constructor(identifier?: any)
        setCcdikJointBone2DNode(jointIdx: int64, bone2DNodePath: NodePath | string): void
        getCcdikJointBone2DNode(jointIdx: int64): NodePath
        setCcdikJointBoneIndex(jointIdx: int64, boneIdx: int64): void
        getCcdikJointBoneIndex(jointIdx: int64): int64
        setCcdikJointRotateFromJoint(jointIdx: int64, rotateFromJoint: boolean): void
        getCcdikJointRotateFromJoint(jointIdx: int64): boolean
        setCcdikJointEnableConstraint(jointIdx: int64, enableConstraint: boolean): void
        getCcdikJointEnableConstraint(jointIdx: int64): boolean
        setCcdikJointConstraintAngleMin(jointIdx: int64, angleMin: float64): void
        getCcdikJointConstraintAngleMin(jointIdx: int64): float64
        setCcdikJointConstraintAngleMax(jointIdx: int64, angleMax: float64): void
        getCcdikJointConstraintAngleMax(jointIdx: int64): float64
        setCcdikJointConstraintAngleInvert(jointIdx: int64, invert: boolean): void
        getCcdikJointConstraintAngleInvert(jointIdx: int64): boolean
        get targetNodePath(): NodePath
        set targetNodePath(value: NodePath | string)
        get tipNodePath(): NodePath
        set tipNodePath(value: NodePath | string)
        get ccdikDataChainLength(): int64
        set ccdikDataChainLength(value: int64)
    }
    class SkeletonModification2DFabrik extends SkeletonModification2D {
        constructor(identifier?: any)
        setFabrikJointBone2DNode(jointIdx: int64, bone2DNodePath: NodePath | string): void
        getFabrikJointBone2DNode(jointIdx: int64): NodePath
        setFabrikJointBoneIndex(jointIdx: int64, boneIdx: int64): void
        getFabrikJointBoneIndex(jointIdx: int64): int64
        setFabrikJointMagnetPosition(jointIdx: int64, magnetPosition: Vector2): void
        getFabrikJointMagnetPosition(jointIdx: int64): Vector2
        setFabrikJointUseTargetRotation(jointIdx: int64, useTargetRotation: boolean): void
        getFabrikJointUseTargetRotation(jointIdx: int64): boolean
        get targetNodePath(): NodePath
        set targetNodePath(value: NodePath | string)
        get fabrikDataChainLength(): int64
        set fabrikDataChainLength(value: int64)
    }
    /** A modification that jiggles [Bone2D] nodes as they move towards a target.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_skeletonmodification2djiggle.html  
     */
    class SkeletonModification2DJiggle extends SkeletonModification2D {
        constructor(identifier?: any)
        setUseColliders(useColliders: boolean): void
        getUseColliders(): boolean
        setCollisionMask(collisionMask: int64): void
        getCollisionMask(): int64
        setJiggleJointBone2DNode(jointIdx: int64, bone2DNode: NodePath | string): void
        getJiggleJointBone2DNode(jointIdx: int64): NodePath
        setJiggleJointBoneIndex(jointIdx: int64, boneIdx: int64): void
        getJiggleJointBoneIndex(jointIdx: int64): int64
        setJiggleJointOverride(jointIdx: int64, override: boolean): void
        getJiggleJointOverride(jointIdx: int64): boolean
        setJiggleJointStiffness(jointIdx: int64, stiffness: float64): void
        getJiggleJointStiffness(jointIdx: int64): float64
        setJiggleJointMass(jointIdx: int64, mass: float64): void
        getJiggleJointMass(jointIdx: int64): float64
        setJiggleJointDamping(jointIdx: int64, damping: float64): void
        getJiggleJointDamping(jointIdx: int64): float64
        setJiggleJointUseGravity(jointIdx: int64, useGravity: boolean): void
        getJiggleJointUseGravity(jointIdx: int64): boolean
        setJiggleJointGravity(jointIdx: int64, gravity: Vector2): void
        getJiggleJointGravity(jointIdx: int64): Vector2
        get targetNodePath(): NodePath
        set targetNodePath(value: NodePath | string)
        get jiggleDataChainLength(): int64
        set jiggleDataChainLength(value: int64)
        
        /** The default amount of stiffness assigned to the Jiggle joints, if they are not overridden. Higher values act more like springs, quickly moving into the correct position. */
        get stiffness(): float64
        set stiffness(value: float64)
        
        /** The default amount of mass assigned to the Jiggle joints, if they are not overridden. Higher values lead to faster movements and more overshooting. */
        get mass(): float64
        set mass(value: float64)
        
        /** The default amount of damping applied to the Jiggle joints, if they are not overridden. Higher values lead to more of the calculated velocity being applied. */
        get damping(): float64
        set damping(value: float64)
        get useGravity(): boolean
        set useGravity(value: boolean)
        
        /** The default amount of gravity applied to the Jiggle joints, if they are not overridden. */
        get gravity(): Vector2
        set gravity(value: Vector2)
    }
    /** A modification that rotates a [Bone2D] node to look at a target.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_skeletonmodification2dlookat.html  
     */
    class SkeletonModification2DLookAt extends SkeletonModification2D {
        constructor(identifier?: any)
        setAdditionalRotation(rotation: float64): void
        getAdditionalRotation(): float64
        setEnableConstraint(enableConstraint: boolean): void
        getEnableConstraint(): boolean
        setConstraintAngleMin(angleMin: float64): void
        getConstraintAngleMin(): float64
        setConstraintAngleMax(angleMax: float64): void
        getConstraintAngleMax(): float64
        setConstraintAngleInvert(invert: boolean): void
        getConstraintAngleInvert(): boolean
        get boneIndex(): int64
        set boneIndex(value: int64)
        get bone2DNode(): NodePath
        set bone2DNode(value: NodePath | string)
        get targetNodePath(): NodePath
        set targetNodePath(value: NodePath | string)
    }
    /** A modification that applies the transforms of [PhysicalBone2D] nodes to [Bone2D] nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_skeletonmodification2dphysicalbones.html  
     */
    class SkeletonModification2DPhysicalBones extends SkeletonModification2D {
        constructor(identifier?: any)
        setPhysicalBoneNode(jointIdx: int64, physicalbone2DNode: NodePath | string): void
        getPhysicalBoneNode(jointIdx: int64): NodePath
        fetchPhysicalBones(): void
        startSimulation(bones: GArray = []): void
        stopSimulation(bones: GArray = []): void
        get physicalBoneChainLength(): int64
        set physicalBoneChainLength(value: int64)
    }
    /** A modification that holds and executes a [SkeletonModificationStack2D].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_skeletonmodification2dstackholder.html  
     */
    class SkeletonModification2DStackHolder extends SkeletonModification2D {
        constructor(identifier?: any)
        setHeldModificationStack(heldModificationStack: SkeletonModificationStack2D): void
        getHeldModificationStack(): SkeletonModificationStack2D
    }
    /** A modification that rotates two bones using the law of cosines to reach the target.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_skeletonmodification2dtwoboneik.html  
     */
    class SkeletonModification2DTwoBoneIK extends SkeletonModification2D {
        constructor(identifier?: any)
        setJointOneBone2DNode(bone2DNode: NodePath | string): void
        getJointOneBone2DNode(): NodePath
        setJointOneBoneIdx(boneIdx: int64): void
        getJointOneBoneIdx(): int64
        setJointTwoBone2DNode(bone2DNode: NodePath | string): void
        getJointTwoBone2DNode(): NodePath
        setJointTwoBoneIdx(boneIdx: int64): void
        getJointTwoBoneIdx(): int64
        get targetNodePath(): NodePath
        set targetNodePath(value: NodePath | string)
        get targetMinimumDistance(): float64
        set targetMinimumDistance(value: float64)
        get targetMaximumDistance(): float64
        set targetMaximumDistance(value: float64)
        get flipBendDirection(): boolean
        set flipBendDirection(value: boolean)
    }
    /** A resource that holds a stack of [SkeletonModification2D]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_skeletonmodificationstack2d.html  
     */
    class SkeletonModificationStack2D extends Resource {
        constructor(identifier?: any)
        /** Sets up the modification stack so it can execute. This function should be called by [Skeleton2D] and shouldn't be manually called unless you know what you are doing. */
        setup(): void
        
        /** Executes all of the [SkeletonModification2D]s in the stack that use the same execution mode as the passed-in [param execution_mode], starting from index `0` to [member modification_count].  
         *      
         *  **Note:** The order of the modifications can matter depending on the modifications. For example, modifications on a spine should operate before modifications on the arms in order to get proper results.  
         */
        execute(delta: float64, executionMode: int64): void
        enableAllModifications(enabled: boolean): void
        getModification(modIdx: int64): SkeletonModification2D
        addModification(modification: SkeletonModification2D): void
        deleteModification(modIdx: int64): void
        setModification(modIdx: int64, modification: SkeletonModification2D): void
        getIsSetup(): boolean
        getSkeleton(): Skeleton2D
        
        /** If `true`, the modification's in the stack will be called. This is handled automatically through the [Skeleton2D] node. */
        get enabled(): boolean
        set enabled(value: boolean)
        
        /** The interpolation strength of the modifications in stack. A value of `0` will make it where the modifications are not applied, a strength of `0.5` will be half applied, and a strength of `1` will allow the modifications to be fully applied and override the [Skeleton2D] [Bone2D] poses. */
        get strength(): float64
        set strength(value: float64)
        get modificationCount(): any /*Modifications,modifications/*/
        set modificationCount(value: any /*Modifications,modifications/*/)
    }
    namespace SkeletonModifier3D {
        enum BoneAxis {
            BoneAxisPlusX = 0,
            BoneAxisMinusX = 1,
            BoneAxisPlusY = 2,
            BoneAxisMinusY = 3,
            BoneAxisPlusZ = 4,
            BoneAxisMinusZ = 5,
        }
    }
    /** A node that may modify Skeleton3D's bone.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_skeletonmodifier3d.html  
     */
    class SkeletonModifier3D<Map extends Record<string, Node> = {}> extends Node3D<Map> {
        /** Enumerated value for the +X axis. */
        static readonly BONE_AXIS_PLUS_X = 0
        
        /** Enumerated value for the -X axis. */
        static readonly BONE_AXIS_MINUS_X = 1
        
        /** Enumerated value for the +Y axis. */
        static readonly BONE_AXIS_PLUS_Y = 2
        
        /** Enumerated value for the -Y axis. */
        static readonly BONE_AXIS_MINUS_Y = 3
        
        /** Enumerated value for the +Z axis. */
        static readonly BONE_AXIS_PLUS_Z = 4
        
        /** Enumerated value for the -Z axis. */
        static readonly BONE_AXIS_MINUS_Z = 5
        constructor(identifier?: any)
        /* gdvirtual */ _processModification(): void
        getSkeleton(): Skeleton3D
        
        /** If `true`, the [SkeletonModifier3D] will be processing. */
        get active(): boolean
        set active(value: boolean)
        
        /** Sets the influence of the modification.  
         *      
         *  **Note:** This value is used by [Skeleton3D] to blend, so the [SkeletonModifier3D] should always apply only 100% of the result without interpolation.  
         */
        get influence(): float64
        set influence(value: float64)
        readonly modificationProcessed: Signal<() => void>
    }
    namespace SkeletonProfile {
        enum TailDirection {
            TailDirectionAverageChildren = 0,
            TailDirectionSpecificChild = 1,
            TailDirectionEnd = 2,
        }
    }
    /** Base class for a profile of a virtual skeleton used as a target for retargeting.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_skeletonprofile.html  
     */
    class SkeletonProfile extends Resource {
        /** Direction to the average coordinates of bone children. */
        static readonly TAIL_DIRECTION_AVERAGE_CHILDREN = 0
        
        /** Direction to the coordinates of specified bone child. */
        static readonly TAIL_DIRECTION_SPECIFIC_CHILD = 1
        
        /** Direction is not calculated. */
        static readonly TAIL_DIRECTION_END = 2
        constructor(identifier?: any)
        getGroupName(groupIdx: int64): StringName
        setGroupName(groupIdx: int64, groupName: StringName): void
        getTexture(groupIdx: int64): Texture2D
        setTexture(groupIdx: int64, texture: Texture2D): void
        findBone(boneName: StringName): int64
        getBoneName(boneIdx: int64): StringName
        setBoneName(boneIdx: int64, boneName: StringName): void
        getBoneParent(boneIdx: int64): StringName
        setBoneParent(boneIdx: int64, boneParent: StringName): void
        getTailDirection(boneIdx: int64): SkeletonProfile.TailDirection
        setTailDirection(boneIdx: int64, tailDirection: SkeletonProfile.TailDirection): void
        getBoneTail(boneIdx: int64): StringName
        setBoneTail(boneIdx: int64, boneTail: StringName): void
        getReferencePose(boneIdx: int64): Transform3D
        setReferencePose(boneIdx: int64, boneName: Transform3D): void
        getHandleOffset(boneIdx: int64): Vector2
        setHandleOffset(boneIdx: int64, handleOffset: Vector2): void
        getGroup(boneIdx: int64): StringName
        setGroup(boneIdx: int64, group: StringName): void
        isRequired(boneIdx: int64): boolean
        setRequired(boneIdx: int64, required: boolean): void
        get rootBone(): StringName
        set rootBone(value: StringName)
        get scaleBaseBone(): StringName
        set scaleBaseBone(value: StringName)
        get groupSize(): any /*Groups,groups/*/
        set groupSize(value: any /*Groups,groups/*/)
        get boneSize(): any /*Bones,bones/*/
        set boneSize(value: any /*Bones,bones/*/)
        readonly profileUpdated: Signal<() => void>
    }
    /** A humanoid [SkeletonProfile] preset.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_skeletonprofilehumanoid.html  
     */
    class SkeletonProfileHumanoid extends SkeletonProfile {
        constructor(identifier?: any)
    }
    /** @link https://docs.godotengine.org/en/latest/classes/class_skin.html */
    class Skin extends Resource {
        constructor(identifier?: any)
        setBindCount(bindCount: int64): void
        getBindCount(): int64
        addBind(bone: int64, pose: Transform3D): void
        addNamedBind(name: string, pose: Transform3D): void
        setBindPose(bindIndex: int64, pose: Transform3D): void
        getBindPose(bindIndex: int64): Transform3D
        setBindName(bindIndex: int64, name: StringName): void
        getBindName(bindIndex: int64): StringName
        setBindBone(bindIndex: int64, bone: int64): void
        getBindBone(bindIndex: int64): int64
        clearBinds(): void
    }
    /** A reference-counted holder object for a skeleton RID used in the [RenderingServer].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_skinreference.html  
     */
    class SkinReference extends RefCounted {
        constructor(identifier?: any)
        getSkeleton(): Rid
        getSkin(): Skin
    }
    namespace Sky {
        enum RadianceSize {
            RadianceSize32 = 0,
            RadianceSize64 = 1,
            RadianceSize128 = 2,
            RadianceSize256 = 3,
            RadianceSize512 = 4,
            RadianceSize1024 = 5,
            RadianceSize2048 = 6,
            RadianceSizeMax = 7,
        }
        enum ProcessMode {
            ProcessModeAutomatic = 0,
            ProcessModeQuality = 1,
            ProcessModeIncremental = 2,
            ProcessModeRealtime = 3,
        }
    }
    /** Defines a 3D environment's background by using a [Material].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_sky.html  
     */
    class Sky extends Resource {
        /** Radiance texture size is 32×32 pixels. */
        static readonly RADIANCE_SIZE_32 = 0
        
        /** Radiance texture size is 64×64 pixels. */
        static readonly RADIANCE_SIZE_64 = 1
        
        /** Radiance texture size is 128×128 pixels. */
        static readonly RADIANCE_SIZE_128 = 2
        
        /** Radiance texture size is 256×256 pixels. */
        static readonly RADIANCE_SIZE_256 = 3
        
        /** Radiance texture size is 512×512 pixels. */
        static readonly RADIANCE_SIZE_512 = 4
        
        /** Radiance texture size is 1024×1024 pixels. */
        static readonly RADIANCE_SIZE_1024 = 5
        
        /** Radiance texture size is 2048×2048 pixels. */
        static readonly RADIANCE_SIZE_2048 = 6
        
        /** Represents the size of the [enum RadianceSize] enum. */
        static readonly RADIANCE_SIZE_MAX = 7
        
        /** Automatically selects the appropriate process mode based on your sky shader. If your shader uses `TIME` or `POSITION`, this will use [constant PROCESS_MODE_REALTIME]. If your shader uses any of the `LIGHT_*` variables or any custom uniforms, this uses [constant PROCESS_MODE_INCREMENTAL]. Otherwise, this defaults to [constant PROCESS_MODE_QUALITY]. */
        static readonly PROCESS_MODE_AUTOMATIC = 0
        
        /** Uses high quality importance sampling to process the radiance map. In general, this results in much higher quality than [constant PROCESS_MODE_REALTIME] but takes much longer to generate. This should not be used if you plan on changing the sky at runtime. If you are finding that the reflection is not blurry enough and is showing sparkles or fireflies, try increasing [member ProjectSettings.rendering/reflections/sky_reflections/ggx_samples]. */
        static readonly PROCESS_MODE_QUALITY = 1
        
        /** Uses the same high quality importance sampling to process the radiance map as [constant PROCESS_MODE_QUALITY], but updates over several frames. The number of frames is determined by [member ProjectSettings.rendering/reflections/sky_reflections/roughness_layers]. Use this when you need highest quality radiance maps, but have a sky that updates slowly. */
        static readonly PROCESS_MODE_INCREMENTAL = 2
        
        /** Uses the fast filtering algorithm to process the radiance map. In general this results in lower quality, but substantially faster run times. If you need better quality, but still need to update the sky every frame, consider turning on [member ProjectSettings.rendering/reflections/sky_reflections/fast_filter_high_quality].  
         *      
         *  **Note:** The fast filtering algorithm is limited to 256×256 cubemaps, so [member radiance_size] must be set to [constant RADIANCE_SIZE_256]. Otherwise, a warning is printed and the overridden radiance size is ignored.  
         */
        static readonly PROCESS_MODE_REALTIME = 3
        constructor(identifier?: any)
        get skyMaterial(): PanoramaSkyMaterial | ProceduralSkyMaterial | PhysicalSkyMaterial | ShaderMaterial
        set skyMaterial(value: PanoramaSkyMaterial | ProceduralSkyMaterial | PhysicalSkyMaterial | ShaderMaterial)
        get processMode(): int64
        set processMode(value: int64)
        get radianceSize(): int64
        set radianceSize(value: int64)
    }
    /** Abstract base class for sliders.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_slider.html  
     */
    class Slider<Map extends Record<string, Node> = {}> extends Range<Map> {
        constructor(identifier?: any)
        /** If `true`, the slider can be interacted with. If `false`, the value can be changed only by code. */
        get editable(): boolean
        set editable(value: boolean)
        
        /** If `true`, the value can be changed using the mouse wheel. */
        get scrollable(): boolean
        set scrollable(value: boolean)
        get tickCount(): int64
        set tickCount(value: int64)
        get ticksOnBorders(): boolean
        set ticksOnBorders(value: boolean)
        readonly dragStarted: Signal<() => void>
        readonly dragEnded: Signal<(valueChanged: boolean) => void>
    }
    namespace SliderJoint3D {
        enum Param {
            ParamLinearLimitUpper = 0,
            ParamLinearLimitLower = 1,
            ParamLinearLimitSoftness = 2,
            ParamLinearLimitRestitution = 3,
            ParamLinearLimitDamping = 4,
            ParamLinearMotionSoftness = 5,
            ParamLinearMotionRestitution = 6,
            ParamLinearMotionDamping = 7,
            ParamLinearOrthogonalSoftness = 8,
            ParamLinearOrthogonalRestitution = 9,
            ParamLinearOrthogonalDamping = 10,
            ParamAngularLimitUpper = 11,
            ParamAngularLimitLower = 12,
            ParamAngularLimitSoftness = 13,
            ParamAngularLimitRestitution = 14,
            ParamAngularLimitDamping = 15,
            ParamAngularMotionSoftness = 16,
            ParamAngularMotionRestitution = 17,
            ParamAngularMotionDamping = 18,
            ParamAngularOrthogonalSoftness = 19,
            ParamAngularOrthogonalRestitution = 20,
            ParamAngularOrthogonalDamping = 21,
            ParamMax = 22,
        }
    }
    /** A physics joint that restricts the movement of a 3D physics body along an axis relative to another physics body.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_sliderjoint3d.html  
     */
    class SliderJoint3D<Map extends Record<string, Node> = {}> extends Joint3D<Map> {
        /** Constant for accessing [member linear_limit/upper_distance]. The maximum difference between the pivot points on their X axis before damping happens. */
        static readonly PARAM_LINEAR_LIMIT_UPPER = 0
        
        /** Constant for accessing [member linear_limit/lower_distance]. The minimum difference between the pivot points on their X axis before damping happens. */
        static readonly PARAM_LINEAR_LIMIT_LOWER = 1
        
        /** Constant for accessing [member linear_limit/softness]. A factor applied to the movement across the slider axis once the limits get surpassed. The lower, the slower the movement. */
        static readonly PARAM_LINEAR_LIMIT_SOFTNESS = 2
        
        /** Constant for accessing [member linear_limit/restitution]. The amount of restitution once the limits are surpassed. The lower, the more velocity-energy gets lost. */
        static readonly PARAM_LINEAR_LIMIT_RESTITUTION = 3
        
        /** Constant for accessing [member linear_limit/damping]. The amount of damping once the slider limits are surpassed. */
        static readonly PARAM_LINEAR_LIMIT_DAMPING = 4
        
        /** Constant for accessing [member linear_motion/softness]. A factor applied to the movement across the slider axis as long as the slider is in the limits. The lower, the slower the movement. */
        static readonly PARAM_LINEAR_MOTION_SOFTNESS = 5
        
        /** Constant for accessing [member linear_motion/restitution]. The amount of restitution inside the slider limits. */
        static readonly PARAM_LINEAR_MOTION_RESTITUTION = 6
        
        /** Constant for accessing [member linear_motion/damping]. The amount of damping inside the slider limits. */
        static readonly PARAM_LINEAR_MOTION_DAMPING = 7
        
        /** Constant for accessing [member linear_ortho/softness]. A factor applied to the movement across axes orthogonal to the slider. */
        static readonly PARAM_LINEAR_ORTHOGONAL_SOFTNESS = 8
        
        /** Constant for accessing [member linear_motion/restitution]. The amount of restitution when movement is across axes orthogonal to the slider. */
        static readonly PARAM_LINEAR_ORTHOGONAL_RESTITUTION = 9
        
        /** Constant for accessing [member linear_motion/damping]. The amount of damping when movement is across axes orthogonal to the slider. */
        static readonly PARAM_LINEAR_ORTHOGONAL_DAMPING = 10
        
        /** Constant for accessing [member angular_limit/upper_angle]. The upper limit of rotation in the slider. */
        static readonly PARAM_ANGULAR_LIMIT_UPPER = 11
        
        /** Constant for accessing [member angular_limit/lower_angle]. The lower limit of rotation in the slider. */
        static readonly PARAM_ANGULAR_LIMIT_LOWER = 12
        
        /** Constant for accessing [member angular_limit/softness]. A factor applied to the all rotation once the limit is surpassed. */
        static readonly PARAM_ANGULAR_LIMIT_SOFTNESS = 13
        
        /** Constant for accessing [member angular_limit/restitution]. The amount of restitution of the rotation when the limit is surpassed. */
        static readonly PARAM_ANGULAR_LIMIT_RESTITUTION = 14
        
        /** Constant for accessing [member angular_limit/damping]. The amount of damping of the rotation when the limit is surpassed. */
        static readonly PARAM_ANGULAR_LIMIT_DAMPING = 15
        
        /** Constant for accessing [member angular_motion/softness]. A factor applied to the all rotation in the limits. */
        static readonly PARAM_ANGULAR_MOTION_SOFTNESS = 16
        
        /** Constant for accessing [member angular_motion/restitution]. The amount of restitution of the rotation in the limits. */
        static readonly PARAM_ANGULAR_MOTION_RESTITUTION = 17
        
        /** Constant for accessing [member angular_motion/damping]. The amount of damping of the rotation in the limits. */
        static readonly PARAM_ANGULAR_MOTION_DAMPING = 18
        
        /** Constant for accessing [member angular_ortho/softness]. A factor applied to the all rotation across axes orthogonal to the slider. */
        static readonly PARAM_ANGULAR_ORTHOGONAL_SOFTNESS = 19
        
        /** Constant for accessing [member angular_ortho/restitution]. The amount of restitution of the rotation across axes orthogonal to the slider. */
        static readonly PARAM_ANGULAR_ORTHOGONAL_RESTITUTION = 20
        
        /** Constant for accessing [member angular_ortho/damping]. The amount of damping of the rotation across axes orthogonal to the slider. */
        static readonly PARAM_ANGULAR_ORTHOGONAL_DAMPING = 21
        
        /** Represents the size of the [enum Param] enum. */
        static readonly PARAM_MAX = 22
        constructor(identifier?: any)
        setParam(param: SliderJoint3D.Param, value: float64): void
        getParam(param: SliderJoint3D.Param): float64
        get "linearLimit/upperDistance"(): float64
        set "linearLimit/upperDistance"(value: float64)
        get "linearLimit/lowerDistance"(): float64
        set "linearLimit/lowerDistance"(value: float64)
        get "linearLimit/softness"(): float64
        set "linearLimit/softness"(value: float64)
        get "linearLimit/restitution"(): float64
        set "linearLimit/restitution"(value: float64)
        get "linearLimit/damping"(): float64
        set "linearLimit/damping"(value: float64)
        get "linearMotion/softness"(): float64
        set "linearMotion/softness"(value: float64)
        get "linearMotion/restitution"(): float64
        set "linearMotion/restitution"(value: float64)
        get "linearMotion/damping"(): float64
        set "linearMotion/damping"(value: float64)
        get "linearOrtho/softness"(): float64
        set "linearOrtho/softness"(value: float64)
        get "linearOrtho/restitution"(): float64
        set "linearOrtho/restitution"(value: float64)
        get "linearOrtho/damping"(): float64
        set "linearOrtho/damping"(value: float64)
        get "angularLimit/upperAngle"(): float64
        set "angularLimit/upperAngle"(value: float64)
        get "angularLimit/lowerAngle"(): float64
        set "angularLimit/lowerAngle"(value: float64)
        get "angularLimit/softness"(): float64
        set "angularLimit/softness"(value: float64)
        get "angularLimit/restitution"(): float64
        set "angularLimit/restitution"(value: float64)
        get "angularLimit/damping"(): float64
        set "angularLimit/damping"(value: float64)
        get "angularMotion/softness"(): float64
        set "angularMotion/softness"(value: float64)
        get "angularMotion/restitution"(): float64
        set "angularMotion/restitution"(value: float64)
        get "angularMotion/damping"(): float64
        set "angularMotion/damping"(value: float64)
        get "angularOrtho/softness"(): float64
        set "angularOrtho/softness"(value: float64)
        get "angularOrtho/restitution"(): float64
        set "angularOrtho/restitution"(value: float64)
        get "angularOrtho/damping"(): float64
        set "angularOrtho/damping"(value: float64)
    }
    namespace SoftBody3D {
        enum DisableMode {
            DisableModeRemove = 0,
            DisableModeKeepActive = 1,
        }
    }
    /** A deformable 3D physics mesh.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_softbody3d.html  
     */
    class SoftBody3D<Map extends Record<string, Node> = {}> extends MeshInstance3D<Map> {
        /** When [member Node.process_mode] is set to [constant Node.PROCESS_MODE_DISABLED], remove from the physics simulation to stop all physics interactions with this [SoftBody3D].  
         *  Automatically re-added to the physics simulation when the [Node] is processed again.  
         */
        static readonly DISABLE_MODE_REMOVE = 0
        
        /** When [member Node.process_mode] is set to [constant Node.PROCESS_MODE_DISABLED], do not affect the physics simulation. */
        static readonly DISABLE_MODE_KEEP_ACTIVE = 1
        constructor(identifier?: any)
        getPhysicsRid(): Rid
        setCollisionMaskValue(layerNumber: int64, value: boolean): void
        getCollisionMaskValue(layerNumber: int64): boolean
        setCollisionLayerValue(layerNumber: int64, value: boolean): void
        getCollisionLayerValue(layerNumber: int64): boolean
        getCollisionExceptions(): GArray
        addCollisionExceptionWith(body: Node): void
        removeCollisionExceptionWith(body: Node): void
        getPointTransform(pointIndex: int64): Vector3
        setPointPinned(pointIndex: int64, pinned: boolean, attachmentPath: NodePath | string = '', insertAt: int64 = -1): void
        isPointPinned(pointIndex: int64): boolean
        get collisionLayer(): int64
        set collisionLayer(value: int64)
        get collisionMask(): int64
        set collisionMask(value: int64)
        get parentCollisionIgnore(): NodePath
        set parentCollisionIgnore(value: NodePath | string)
        get simulationPrecision(): int64
        set simulationPrecision(value: int64)
        get totalMass(): float64
        set totalMass(value: float64)
        get linearStiffness(): float64
        set linearStiffness(value: float64)
        get pressureCoefficient(): float64
        set pressureCoefficient(value: float64)
        get dampingCoefficient(): float64
        set dampingCoefficient(value: float64)
        get dragCoefficient(): float64
        set dragCoefficient(value: float64)
        get rayPickable(): boolean
        set rayPickable(value: boolean)
        get disableMode(): int64
        set disableMode(value: int64)
    }
    /** Class representing a spherical [PrimitiveMesh].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_spheremesh.html  
     */
    class SphereMesh extends PrimitiveMesh {
        constructor(identifier?: any)
        /** Radius of sphere. */
        get radius(): float64
        set radius(value: float64)
        
        /** Full height of the sphere. */
        get height(): float64
        set height(value: float64)
        get radialSegments(): int64
        set radialSegments(value: int64)
        
        /** Number of segments along the height of the sphere. */
        get rings(): int64
        set rings(value: int64)
        get isHemisphere(): boolean
        set isHemisphere(value: boolean)
    }
    /** Spherical shape for use with occlusion culling in [OccluderInstance3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_sphereoccluder3d.html  
     */
    class SphereOccluder3D extends Occluder3D {
        constructor(identifier?: any)
        /** The sphere's radius in 3D units. */
        get radius(): float64
        set radius(value: float64)
    }
    /** A 3D sphere shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_sphereshape3d.html  
     */
    class SphereShape3D extends Shape3D {
        constructor(identifier?: any)
        /** The sphere's radius. The shape's diameter is double the radius. */
        get radius(): float64
        set radius(value: float64)
    }
    /** An input field for numbers.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_spinbox.html  
     */
    class SpinBox<Map extends Record<string, Node> = {}> extends Range<Map> {
        constructor(identifier?: any)
        /** Applies the current value of this [SpinBox]. */
        apply(): void
        getLineEdit(): LineEdit
        
        /** Changes the alignment of the underlying [LineEdit]. */
        get alignment(): int64
        set alignment(value: int64)
        
        /** If `true`, the [SpinBox] will be editable. Otherwise, it will be read only. */
        get editable(): boolean
        set editable(value: boolean)
        get updateOnTextChanged(): boolean
        set updateOnTextChanged(value: boolean)
        
        /** Adds the specified prefix string before the numerical value of the [SpinBox]. */
        get prefix(): string
        set prefix(value: string)
        
        /** Adds the specified suffix string after the numerical value of the [SpinBox]. */
        get suffix(): string
        set suffix(value: string)
        get customArrowStep(): float64
        set customArrowStep(value: float64)
        get selectAllOnFocus(): boolean
        set selectAllOnFocus(value: boolean)
    }
    namespace SplitContainer {
        enum DraggerVisibility {
            DraggerVisible = 0,
            DraggerHidden = 1,
            DraggerHiddenCollapsed = 2,
        }
    }
    /** A container that splits two child controls horizontally or vertically and provides a grabber for adjusting the split ratio.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_splitcontainer.html  
     */
    class SplitContainer<Map extends Record<string, Node> = {}> extends Container<Map> {
        /** The split dragger icon is always visible when [theme_item autohide] is `false`, otherwise visible only when the cursor hovers it.  
         *  The size of the grabber icon determines the minimum [theme_item separation].  
         *  The dragger icon is automatically hidden if the length of the grabber icon is longer than the split bar.  
         */
        static readonly DRAGGER_VISIBLE = 0
        
        /** The split dragger icon is never visible regardless of the value of [theme_item autohide].  
         *  The size of the grabber icon determines the minimum [theme_item separation].  
         */
        static readonly DRAGGER_HIDDEN = 1
        
        /** The split dragger icon is not visible, and the split bar is collapsed to zero thickness. */
        static readonly DRAGGER_HIDDEN_COLLAPSED = 2
        constructor(identifier?: any)
        clampSplitOffset(): void
        getDragAreaControl(): Control
        get splitOffset(): int64
        set splitOffset(value: int64)
        
        /** If `true`, the dragger will be disabled and the children will be sized as if the [member split_offset] was `0`. */
        get collapsed(): boolean
        set collapsed(value: boolean)
        get draggingEnabled(): boolean
        set draggingEnabled(value: boolean)
        get draggerVisibility(): int64
        set draggerVisibility(value: int64)
        
        /** If `true`, the [SplitContainer] will arrange its children vertically, rather than horizontally.  
         *  Can't be changed when using [HSplitContainer] and [VSplitContainer].  
         */
        get vertical(): boolean
        set vertical(value: boolean)
        get dragAreaMarginBegin(): int64
        set dragAreaMarginBegin(value: int64)
        get dragAreaMarginEnd(): int64
        set dragAreaMarginEnd(value: int64)
        get dragAreaOffset(): int64
        set dragAreaOffset(value: int64)
        get dragAreaHighlightInEditor(): boolean
        set dragAreaHighlightInEditor(value: boolean)
        
        /** Emitted when the dragger is dragged by user. */
        readonly dragged: Signal<(offset: int64) => void>
        readonly dragStarted: Signal<() => void>
        readonly dragEnded: Signal<() => void>
    }
    /** A spotlight, such as a reflector spotlight or a lantern.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_spotlight3d.html  
     */
    class SpotLight3D<Map extends Record<string, Node> = {}> extends Light3D<Map> {
        constructor(identifier?: any)
        get spotRange(): float64
        set spotRange(value: float64)
        get spotAttenuation(): float64
        set spotAttenuation(value: float64)
        get spotAngle(): float64
        set spotAngle(value: float64)
        get spotAngleAttenuation(): float64
        set spotAngleAttenuation(value: float64)
    }
    /** A 3D raycast that dynamically moves its children near the collision point.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_springarm3d.html  
     */
    class SpringArm3D<Map extends Record<string, Node> = {}> extends Node3D<Map> {
        constructor(identifier?: any)
        getHitLength(): float64
        addExcludedObject(rID: Rid): void
        removeExcludedObject(rID: Rid): boolean
        clearExcludedObjects(): void
        get collisionMask(): int64
        set collisionMask(value: int64)
        
        /** The [Shape3D] to use for the SpringArm3D.  
         *  When the shape is set, the SpringArm3D will cast the [Shape3D] on its z axis instead of performing a ray cast.  
         */
        get shape(): Shape3D
        set shape(value: Shape3D)
        get springLength(): float64
        set springLength(value: float64)
        
        /** When the collision check is made, a candidate length for the SpringArm3D is given.  
         *  The margin is then subtracted to this length and the translation is applied to the child objects of the SpringArm3D.  
         *  This margin is useful for when the SpringArm3D has a [Camera3D] as a child node: without the margin, the [Camera3D] would be placed on the exact point of collision, while with the margin the [Camera3D] would be placed close to the point of collision.  
         */
        get margin(): float64
        set margin(value: float64)
    }
    /** A base class of the collision that interacts with [SpringBoneSimulator3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_springbonecollision3d.html  
     */
    class SpringBoneCollision3D<Map extends Record<string, Node> = {}> extends Node3D<Map> {
        constructor(identifier?: any)
        getSkeleton(): Skeleton3D
        get boneName(): StringName
        set boneName(value: StringName)
        
        /** The index of the attached bone. */
        get bone(): int64
        set bone(value: int64)
        get positionOffset(): Vector3
        set positionOffset(value: Vector3)
        get rotationOffset(): Quaternion
        set rotationOffset(value: Quaternion)
    }
    /** A capsule shape collision that interacts with [SpringBoneSimulator3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_springbonecollisioncapsule3d.html  
     */
    class SpringBoneCollisionCapsule3D<Map extends Record<string, Node> = {}> extends SpringBoneCollision3D<Map> {
        constructor(identifier?: any)
        /** The capsule's radius. */
        get radius(): float64
        set radius(value: float64)
        
        /** The capsule's height. */
        get height(): float64
        set height(value: float64)
        
        /** If `true`, the collision acts to trap the joint within the collision. */
        get inside(): boolean
        set inside(value: boolean)
    }
    /** A infinite plane collision that interacts with [SpringBoneSimulator3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_springbonecollisionplane3d.html  
     */
    class SpringBoneCollisionPlane3D<Map extends Record<string, Node> = {}> extends SpringBoneCollision3D<Map> {
        constructor(identifier?: any)
    }
    /** A sphere shape collision that interacts with [SpringBoneSimulator3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_springbonecollisionsphere3d.html  
     */
    class SpringBoneCollisionSphere3D<Map extends Record<string, Node> = {}> extends SpringBoneCollision3D<Map> {
        constructor(identifier?: any)
        /** The sphere's radius. */
        get radius(): float64
        set radius(value: float64)
        
        /** If `true`, the collision acts to trap the joint within the collision. */
        get inside(): boolean
        set inside(value: boolean)
    }
    namespace SpringBoneSimulator3D {
        enum BoneDirection {
            BoneDirectionPlusX = 0,
            BoneDirectionMinusX = 1,
            BoneDirectionPlusY = 2,
            BoneDirectionMinusY = 3,
            BoneDirectionPlusZ = 4,
            BoneDirectionMinusZ = 5,
            BoneDirectionFromParent = 6,
        }
        enum CenterFrom {
            CenterFromWorldOrigin = 0,
            CenterFromNode = 1,
            CenterFromBone = 2,
        }
        enum RotationAxis {
            RotationAxisX = 0,
            RotationAxisY = 1,
            RotationAxisZ = 2,
            RotationAxisAll = 3,
        }
    }
    /** A [SkeletonModifier3D] to apply inertial wavering to bone chains.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_springbonesimulator3d.html  
     */
    class SpringBoneSimulator3D<Map extends Record<string, Node> = {}> extends SkeletonModifier3D<Map> {
        /** Enumerated value for the +X axis. */
        static readonly BONE_DIRECTION_PLUS_X = 0
        
        /** Enumerated value for the -X axis. */
        static readonly BONE_DIRECTION_MINUS_X = 1
        
        /** Enumerated value for the +Y axis. */
        static readonly BONE_DIRECTION_PLUS_Y = 2
        
        /** Enumerated value for the -Y axis. */
        static readonly BONE_DIRECTION_MINUS_Y = 3
        
        /** Enumerated value for the +Z axis. */
        static readonly BONE_DIRECTION_PLUS_Z = 4
        
        /** Enumerated value for the -Z axis. */
        static readonly BONE_DIRECTION_MINUS_Z = 5
        
        /** Enumerated value for the axis from a parent bone to the child bone. */
        static readonly BONE_DIRECTION_FROM_PARENT = 6
        
        /** The world origin is defined as center. */
        static readonly CENTER_FROM_WORLD_ORIGIN = 0
        
        /** The [Node3D] specified by [method set_center_node] is defined as center.  
         *  If [Node3D] is not found, the parent [Skeleton3D] is treated as center.  
         */
        static readonly CENTER_FROM_NODE = 1
        
        /** The bone pose origin of the parent [Skeleton3D] specified by [method set_center_bone] is defined as center.  
         *  If [Node3D] is not found, the parent [Skeleton3D] is treated as center.  
         */
        static readonly CENTER_FROM_BONE = 2
        
        /** Enumerated value for the rotation of the X axis. */
        static readonly ROTATION_AXIS_X = 0
        
        /** Enumerated value for the rotation of the Y axis. */
        static readonly ROTATION_AXIS_Y = 1
        
        /** Enumerated value for the rotation of the Z axis. */
        static readonly ROTATION_AXIS_Z = 2
        
        /** Enumerated value for the unconstrained rotation. */
        static readonly ROTATION_AXIS_ALL = 3
        constructor(identifier?: any)
        setRootBoneName(index: int64, boneName: string): void
        getRootBoneName(index: int64): string
        setRootBone(index: int64, bone: int64): void
        getRootBone(index: int64): int64
        setEndBoneName(index: int64, boneName: string): void
        getEndBoneName(index: int64): string
        setEndBone(index: int64, bone: int64): void
        getEndBone(index: int64): int64
        setExtendEndBone(index: int64, enabled: boolean): void
        isEndBoneExtended(index: int64): boolean
        setEndBoneDirection(index: int64, boneDirection: SpringBoneSimulator3D.BoneDirection): void
        getEndBoneDirection(index: int64): SpringBoneSimulator3D.BoneDirection
        setEndBoneLength(index: int64, length: float64): void
        getEndBoneLength(index: int64): float64
        setCenterFrom(index: int64, centerFrom: SpringBoneSimulator3D.CenterFrom): void
        getCenterFrom(index: int64): SpringBoneSimulator3D.CenterFrom
        setCenterNode(index: int64, nodePath: NodePath | string): void
        getCenterNode(index: int64): NodePath
        setCenterBoneName(index: int64, boneName: string): void
        getCenterBoneName(index: int64): string
        setCenterBone(index: int64, bone: int64): void
        getCenterBone(index: int64): int64
        setRadius(index: int64, radius: float64): void
        getRadius(index: int64): float64
        setRotationAxis(index: int64, axis: SpringBoneSimulator3D.RotationAxis): void
        getRotationAxis(index: int64): SpringBoneSimulator3D.RotationAxis
        setRadiusDampingCurve(index: int64, curve: Curve): void
        getRadiusDampingCurve(index: int64): Curve
        setStiffness(index: int64, stiffness: float64): void
        getStiffness(index: int64): float64
        setStiffnessDampingCurve(index: int64, curve: Curve): void
        getStiffnessDampingCurve(index: int64): Curve
        setDrag(index: int64, drag: float64): void
        getDrag(index: int64): float64
        setDragDampingCurve(index: int64, curve: Curve): void
        getDragDampingCurve(index: int64): Curve
        setGravity(index: int64, gravity: float64): void
        getGravity(index: int64): float64
        setGravityDampingCurve(index: int64, curve: Curve): void
        getGravityDampingCurve(index: int64): Curve
        setGravityDirection(index: int64, gravityDirection: Vector3): void
        getGravityDirection(index: int64): Vector3
        clearSettings(): void
        setIndividualConfig(index: int64, enabled: boolean): void
        isConfigIndividual(index: int64): boolean
        getJointBoneName(index: int64, joint: int64): string
        getJointBone(index: int64, joint: int64): int64
        setJointRotationAxis(index: int64, joint: int64, axis: SpringBoneSimulator3D.RotationAxis): void
        getJointRotationAxis(index: int64, joint: int64): SpringBoneSimulator3D.RotationAxis
        setJointRadius(index: int64, joint: int64, radius: float64): void
        getJointRadius(index: int64, joint: int64): float64
        setJointStiffness(index: int64, joint: int64, stiffness: float64): void
        getJointStiffness(index: int64, joint: int64): float64
        setJointDrag(index: int64, joint: int64, drag: float64): void
        getJointDrag(index: int64, joint: int64): float64
        setJointGravity(index: int64, joint: int64, gravity: float64): void
        getJointGravity(index: int64, joint: int64): float64
        setJointGravityDirection(index: int64, joint: int64, gravityDirection: Vector3): void
        getJointGravityDirection(index: int64, joint: int64): Vector3
        getJointCount(index: int64): int64
        setEnableAllChildCollisions(index: int64, enabled: boolean): void
        areAllChildCollisionsEnabled(index: int64): boolean
        setExcludeCollisionPath(index: int64, collision: int64, nodePath: NodePath | string): void
        getExcludeCollisionPath(index: int64, collision: int64): NodePath
        setExcludeCollisionCount(index: int64, count: int64): void
        getExcludeCollisionCount(index: int64): int64
        clearExcludeCollisions(index: int64): void
        setCollisionPath(index: int64, collision: int64, nodePath: NodePath | string): void
        getCollisionPath(index: int64, collision: int64): NodePath
        setCollisionCount(index: int64, count: int64): void
        getCollisionCount(index: int64): int64
        clearCollisions(index: int64): void
        
        /** Resets a simulating state with respect to the current bone pose.  
         *  It is useful to prevent the simulation result getting violent. For example, calling this immediately after a call to [method AnimationPlayer.play] without a fading, or within the previous [signal SkeletonModifier3D.modification_processed] signal if it's condition changes significantly.  
         */
        reset(): void
        get settingCount(): any /*Settings,settings/*/
        set settingCount(value: any /*Settings,settings/*/)
    }
    /** General-purpose sprite node.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_sprite2d.html  
     */
    class Sprite2D<Map extends Record<string, Node> = {}> extends Node2D<Map> {
        constructor(identifier?: any)
        isPixelOpaque(pos: Vector2): boolean
        getRect(): Rect2
        
        /** [Texture2D] object to draw. */
        get texture(): Texture2D
        set texture(value: Texture2D)
        
        /** If `true`, texture is centered.  
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
        
        /** The number of columns in the sprite sheet. When this property is changed, [member frame] is adjusted so that the same visual frame is maintained (same row and column). If that's impossible, [member frame] is reset to `0`. */
        get hframes(): int64
        set hframes(value: int64)
        
        /** The number of rows in the sprite sheet. When this property is changed, [member frame] is adjusted so that the same visual frame is maintained (same row and column). If that's impossible, [member frame] is reset to `0`. */
        get vframes(): int64
        set vframes(value: int64)
        
        /** Current frame to display from sprite sheet. [member hframes] or [member vframes] must be greater than 1. This property is automatically adjusted when [member hframes] or [member vframes] are changed to keep pointing to the same visual frame (same column and row). If that's impossible, this value is reset to `0`. */
        get frame(): int64
        set frame(value: int64)
        get frameCoords(): Vector2I
        set frameCoords(value: Vector2I)
        get regionEnabled(): boolean
        set regionEnabled(value: boolean)
        get regionRect(): Rect2
        set regionRect(value: Rect2)
        get regionFilterClipEnabled(): boolean
        set regionFilterClipEnabled(value: boolean)
        readonly frameChanged: Signal<() => void>
        readonly textureChanged: Signal<() => void>
    }
    /** 2D sprite node in a 3D world.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_sprite3d.html  
     */
    class Sprite3D<Map extends Record<string, Node> = {}> extends SpriteBase3D<Map> {
        constructor(identifier?: any)
        /** [Texture2D] object to draw. If [member GeometryInstance3D.material_override] is used, this will be overridden. The size information is still used. */
        get texture(): Texture2D
        set texture(value: Texture2D)
        
        /** The number of columns in the sprite sheet. When this property is changed, [member frame] is adjusted so that the same visual frame is maintained (same row and column). If that's impossible, [member frame] is reset to `0`. */
        get hframes(): int64
        set hframes(value: int64)
        
        /** The number of rows in the sprite sheet. When this property is changed, [member frame] is adjusted so that the same visual frame is maintained (same row and column). If that's impossible, [member frame] is reset to `0`. */
        get vframes(): int64
        set vframes(value: int64)
        
        /** Current frame to display from sprite sheet. [member hframes] or [member vframes] must be greater than 1. This property is automatically adjusted when [member hframes] or [member vframes] are changed to keep pointing to the same visual frame (same column and row). If that's impossible, this value is reset to `0`. */
        get frame(): int64
        set frame(value: int64)
        get frameCoords(): Vector2I
        set frameCoords(value: Vector2I)
        get regionEnabled(): boolean
        set regionEnabled(value: boolean)
        get regionRect(): Rect2
        set regionRect(value: Rect2)
        readonly frameChanged: Signal<() => void>
        readonly textureChanged: Signal<() => void>
    }
    namespace SpriteBase3D {
        enum DrawFlags {
            FlagTransparent = 0,
            FlagShaded = 1,
            FlagDoubleSided = 2,
            FlagDisableDepthTest = 3,
            FlagFixedSize = 4,
            FlagMax = 5,
        }
        enum AlphaCutMode {
            AlphaCutDisabled = 0,
            AlphaCutDiscard = 1,
            AlphaCutOpaquePrepass = 2,
            AlphaCutHash = 3,
        }
    }
    /** 2D sprite node in 3D environment.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_spritebase3d.html  
     */
    class SpriteBase3D<Map extends Record<string, Node> = {}> extends GeometryInstance3D<Map> {
        /** If set, the texture's transparency and the opacity are used to make those parts of the sprite invisible. */
        static readonly FLAG_TRANSPARENT = 0
        
        /** If set, lights in the environment affect the sprite. */
        static readonly FLAG_SHADED = 1
        
        /** If set, texture can be seen from the back as well. If not, the texture is invisible when looking at it from behind. */
        static readonly FLAG_DOUBLE_SIDED = 2
        
        /** Disables the depth test, so this object is drawn on top of all others. However, objects drawn after it in the draw order may cover it. */
        static readonly FLAG_DISABLE_DEPTH_TEST = 3
        
        /** Label is scaled by depth so that it always appears the same size on screen. */
        static readonly FLAG_FIXED_SIZE = 4
        
        /** Represents the size of the [enum DrawFlags] enum. */
        static readonly FLAG_MAX = 5
        
        /** This mode performs standard alpha blending. It can display translucent areas, but transparency sorting issues may be visible when multiple transparent materials are overlapping. */
        static readonly ALPHA_CUT_DISABLED = 0
        
        /** This mode only allows fully transparent or fully opaque pixels. Harsh edges will be visible unless some form of screen-space antialiasing is enabled (see [member ProjectSettings.rendering/anti_aliasing/quality/screen_space_aa]). On the bright side, this mode doesn't suffer from transparency sorting issues when multiple transparent materials are overlapping. This mode is also known as  *alpha testing*  or  *1-bit transparency* . */
        static readonly ALPHA_CUT_DISCARD = 1
        
        /** This mode draws fully opaque pixels in the depth prepass. This is slower than [constant ALPHA_CUT_DISABLED] or [constant ALPHA_CUT_DISCARD], but it allows displaying translucent areas and smooth edges while using proper sorting. */
        static readonly ALPHA_CUT_OPAQUE_PREPASS = 2
        
        /** This mode draws cuts off all values below a spatially-deterministic threshold, the rest will remain opaque. */
        static readonly ALPHA_CUT_HASH = 3
        constructor(identifier?: any)
        setDrawFlag(flag: SpriteBase3D.DrawFlags, enabled: boolean): void
        getDrawFlag(flag: SpriteBase3D.DrawFlags): boolean
        getItemRect(): Rect2
        generateTriangleMesh(): TriangleMesh
        
        /** If `true`, texture will be centered. */
        get centered(): boolean
        set centered(value: boolean)
        
        /** The texture's drawing offset. */
        get offset(): Vector2
        set offset(value: Vector2)
        get flipH(): boolean
        set flipH(value: boolean)
        get flipV(): boolean
        set flipV(value: boolean)
        
        /** A color value used to  *multiply*  the texture's colors. Can be used for mood-coloring or to simulate the color of ambient light.  
         *      
         *  **Note:** Unlike [member CanvasItem.modulate] for 2D, colors with values above `1.0` (overbright) are not supported.  
         *      
         *  **Note:** If a [member GeometryInstance3D.material_override] is defined on the [SpriteBase3D], the material override must be configured to take vertex colors into account for albedo. Otherwise, the color defined in [member modulate] will be ignored. For a [BaseMaterial3D], [member BaseMaterial3D.vertex_color_use_as_albedo] must be `true`. For a [ShaderMaterial], `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function.  
         */
        get modulate(): Color
        set modulate(value: Color)
        get pixelSize(): float64
        set pixelSize(value: float64)
        
        /** The direction in which the front of the texture faces. */
        get axis(): int64
        set axis(value: int64)
        
        /** The billboard mode to use for the sprite. See [enum BaseMaterial3D.BillboardMode] for possible values.  
         *      
         *  **Note:** When billboarding is enabled and the material also casts shadows, billboards will face **the** camera in the scene when rendering shadows. In scenes with multiple cameras, the intended shadow cannot be determined and this will result in undefined behavior. See [url=https://github.com/godotengine/godot/pull/72638]GitHub Pull Request #72638[/url] for details.  
         */
        get billboard(): int64
        set billboard(value: int64)
        
        /** If `true`, the texture's transparency and the opacity are used to make those parts of the sprite invisible. */
        get transparent(): boolean
        set transparent(value: boolean)
        
        /** If `true`, the [Light3D] in the [Environment] has effects on the sprite. */
        get shaded(): boolean
        set shaded(value: boolean)
        get doubleSided(): boolean
        set doubleSided(value: boolean)
        get noDepthTest(): boolean
        set noDepthTest(value: boolean)
        get fixedSize(): boolean
        set fixedSize(value: boolean)
        get alphaCut(): int64
        set alphaCut(value: int64)
        get alphaScissorThreshold(): float64
        set alphaScissorThreshold(value: float64)
        get alphaHashScale(): float64
        set alphaHashScale(value: float64)
        get alphaAntialiasingMode(): int64
        set alphaAntialiasingMode(value: int64)
        get alphaAntialiasingEdge(): float64
        set alphaAntialiasingEdge(value: float64)
        get textureFilter(): int64
        set textureFilter(value: int64)
        get renderPriority(): int64
        set renderPriority(value: int64)
    }
    /** Sprite frame library for AnimatedSprite2D and AnimatedSprite3D.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_spriteframes.html  
     */
    class SpriteFrames extends Resource {
        constructor(identifier?: any)
        addAnimation(anim: StringName): void
        hasAnimation(anim: StringName): boolean
        duplicateAnimation(animFrom: StringName, animTo: StringName): void
        removeAnimation(anim: StringName): void
        renameAnimation(anim: StringName, newname: StringName): void
        getAnimationNames(): PackedStringArray
        setAnimationSpeed(anim: StringName, fps: float64): void
        getAnimationSpeed(anim: StringName): float64
        setAnimationLoop(anim: StringName, loop: boolean): void
        getAnimationLoop(anim: StringName): boolean
        addFrame(anim: StringName, texture: Texture2D, duration: float64 = 1, atPosition: int64 = -1): void
        setFrame(anim: StringName, idx: int64, texture: Texture2D, duration: float64 = 1): void
        removeFrame(anim: StringName, idx: int64): void
        getFrameCount(anim: StringName): int64
        getFrameTexture(anim: StringName, idx: int64): Texture2D
        getFrameDuration(anim: StringName, idx: int64): float64
        
        /** Removes all frames from the [param anim] animation. */
        clear(anim: StringName): void
        clearAll(): void
        get animations(): GArray
        set animations(value: GArray)
    }
}
