// AUTO-GENERATED
/// <reference no-default-lib="true"/>
declare module "godot" {
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
        addNode(name: StringName, node: AnimationNode, position: Vector2 = Vector2.ZERO): void
        getNode(name: StringName): AnimationNode
        removeNode(name: StringName): void
        renameNode(name: StringName, newName: StringName): void
        hasNode(name: StringName): boolean
        connectNode(inputNode: StringName, inputIndex: int64, outputNode: StringName): void
        disconnectNode(inputNode: StringName, inputIndex: int64): void
        setNodePosition(name: StringName, position: Vector2): void
        getNodePosition(name: StringName): Vector2
        get graphOffset(): Vector2
        set graphOffset(value: Vector2)
        readonly nodeChanged: Signal<(nodeName: StringName) => void>
    }
    /** Base class for extending [AnimationRootNode]s from GDScript, C#, or C++.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_animationnodeextension.html  
     */
    class AnimationNodeExtension extends AnimationNode {
        constructor(identifier?: any)
        /* gdvirtual */ _processAnimationNode(playbackInfo: PackedFloat64Array | float64[], testOnly: boolean): PackedFloat32Array
        static isLooping(nodeInfo: PackedFloat32Array | float32[]): boolean
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
        get mixMode(): int64
        set mixMode(value: int64)
        get fadeInTime(): float64
        set fadeInTime(value: float64)
        get fadeInCurve(): Curve
        set fadeInCurve(value: Curve)
        get fadeOutTime(): float64
        set fadeOutTime(value: float64)
        get fadeOutCurve(): Curve
        set fadeOutCurve(value: Curve)
        get breakLoopAtEnd(): boolean
        set breakLoopAtEnd(value: boolean)
        
        /** If `true`, the sub-animation will restart automatically after finishing.  
         *  In other words, to start auto restarting, the animation must be played once with the [constant ONE_SHOT_REQUEST_FIRE] request. The [constant ONE_SHOT_REQUEST_ABORT] request stops the auto restarting, but it does not disable the [member autorestart] itself. So, the [constant ONE_SHOT_REQUEST_FIRE] request will start auto restarting again.  
         */
        get autorestart(): boolean
        set autorestart(value: boolean)
        get autorestartDelay(): float64
        set autorestartDelay(value: float64)
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
        addNode(name: StringName, node: AnimationNode, position: Vector2 = Vector2.ZERO): void
        replaceNode(name: StringName, node: AnimationNode): void
        getNode(name: StringName): AnimationNode
        removeNode(name: StringName): void
        renameNode(name: StringName, newName: StringName): void
        hasNode(name: StringName): boolean
        getNodeName(node: AnimationNode): StringName
        setNodePosition(name: StringName, position: Vector2): void
        getNodePosition(name: StringName): Vector2
        hasTransition(from: StringName, to: StringName): boolean
        addTransition(from: StringName, to: StringName, transition: AnimationNodeStateMachineTransition): void
        getTransition(idx: int64): AnimationNodeStateMachineTransition
        getTransitionFrom(idx: int64): StringName
        getTransitionTo(idx: int64): StringName
        getTransitionCount(): int64
        removeTransitionByIndex(idx: int64): void
        removeTransition(from: StringName, to: StringName): void
        setGraphOffset(offset: Vector2): void
        getGraphOffset(): Vector2
        get stateMachineType(): int64
        set stateMachineType(value: int64)
        get allowTransitionToSelf(): boolean
        set allowTransitionToSelf(value: boolean)
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
        travel(toNode: StringName, resetOnTeleport: boolean = true): void
        
        /** Starts playing the given animation.  
         *  If [param reset] is `true`, the animation is played from the beginning.  
         */
        start(node: StringName, reset: boolean = true): void
        
        /** If there is a next path by travel or auto advance, immediately transitions from the current state to the next state. */
        next(): void
        
        /** Stops the currently playing animation. */
        stop(): void
        isPlaying(): boolean
        getCurrentNode(): StringName
        getCurrentPlayPosition(): float64
        getCurrentLength(): float64
        getFadingFromNode(): StringName
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
        get xfadeTime(): float64
        set xfadeTime(value: float64)
        get xfadeCurve(): Curve
        set xfadeCurve(value: Curve)
        get breakLoopAtEnd(): boolean
        set breakLoopAtEnd(value: boolean)
        
        /** If `true`, the destination animation is played back from the beginning when switched. */
        get reset(): boolean
        set reset(value: boolean)
        
        /** Lower priority transitions are preferred when travelling through the tree via [method AnimationNodeStateMachinePlayback.travel] or [member advance_mode] is set to [constant ADVANCE_MODE_AUTO]. */
        get priority(): int64
        set priority(value: int64)
        get switchMode(): int64
        set switchMode(value: int64)
        get advanceMode(): int64
        set advanceMode(value: int64)
        get advanceCondition(): StringName
        set advanceCondition(value: StringName)
        get advanceExpression(): string
        set advanceExpression(value: string)
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
        get explicitElapse(): boolean
        set explicitElapse(value: boolean)
    }
    /** A transition within an [AnimationTree] connecting two [AnimationNode]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_animationnodetransition.html  
     */
    class AnimationNodeTransition extends AnimationNodeSync {
        constructor(identifier?: any)
        setInputAsAutoAdvance(input: int64, enable: boolean): void
        isInputSetAsAutoAdvance(input: int64): boolean
        setInputBreakLoopAtEnd(input: int64, enable: boolean): void
        isInputLoopBrokenAtEnd(input: int64): boolean
        setInputReset(input: int64, enable: boolean): void
        isInputReset(input: int64): boolean
        get xfadeTime(): float64
        set xfadeTime(value: float64)
        get xfadeCurve(): Curve
        set xfadeCurve(value: Curve)
        get allowTransitionToSelf(): boolean
        set allowTransitionToSelf(value: boolean)
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
    class AnimationPlayer<Map extends Record<string, Node> = {}> extends AnimationMixer<Map> {
        static readonly ANIMATION_PROCESS_PHYSICS = 0
        static readonly ANIMATION_PROCESS_IDLE = 1
        static readonly ANIMATION_PROCESS_MANUAL = 2
        static readonly ANIMATION_METHOD_CALL_DEFERRED = 0
        static readonly ANIMATION_METHOD_CALL_IMMEDIATE = 1
        constructor(identifier?: any)
        animationSetNext(animationFrom: StringName, animationTo: StringName): void
        animationGetNext(animationFrom: StringName): StringName
        setBlendTime(animationFrom: StringName, animationTo: StringName, sec: float64): void
        getBlendTime(animationFrom: StringName, animationTo: StringName): float64
        
        /** Plays the animation with key [param name]. Custom blend times and speed can be set.  
         *  The [param from_end] option only affects when switching to a new animation track, or if the same track but at the start or end. It does not affect resuming playback that was paused in the middle of an animation. If [param custom_speed] is negative and [param from_end] is `true`, the animation will play backwards (which is equivalent to calling [method play_backwards]).  
         *  The [AnimationPlayer] keeps track of its current or last played animation with [member assigned_animation]. If this method is called with that same animation [param name], or with no [param name] parameter, the assigned animation will resume playing if it was paused.  
         *      
         *  **Note:** The animation will be updated the next time the [AnimationPlayer] is processed. If other variables are updated at the same time this is called, they may be updated too early. To perform the update immediately, call `advance(0)`.  
         */
        play(name: StringName = '', customBlend: float64 = -1, customSpeed: float64 = 1, fromEnd: boolean = false): void
        playSectionWithMarkers(name: StringName = '', startMarker: StringName = '', endMarker: StringName = '', customBlend: float64 = -1, customSpeed: float64 = 1, fromEnd: boolean = false): void
        playSection(name: StringName = '', startTime: float64 = -1, endTime: float64 = -1, customBlend: float64 = -1, customSpeed: float64 = 1, fromEnd: boolean = false): void
        playBackwards(name: StringName = '', customBlend: float64 = -1): void
        playSectionWithMarkersBackwards(name: StringName = '', startMarker: StringName = '', endMarker: StringName = '', customBlend: float64 = -1): void
        playSectionBackwards(name: StringName = '', startTime: float64 = -1, endTime: float64 = -1, customBlend: float64 = -1): void
        playWithCapture(name: StringName = '', duration: float64 = -1, customBlend: float64 = -1, customSpeed: float64 = 1, fromEnd: boolean = false, transType: Tween.TransitionType = 0, easeType: Tween.EaseType = 0): void
        
        /** Pauses the currently playing animation. The [member current_animation_position] will be kept and calling [method play] or [method play_backwards] without arguments or with the same animation name as [member assigned_animation] will resume the animation.  
         *  See also [method stop].  
         */
        pause(): void
        
        /** Stops the currently playing animation. The animation position is reset to `0` and the `custom_speed` is reset to `1.0`. See also [method pause].  
         *  If [param keep_state] is `true`, the animation state is not updated visually.  
         *      
         *  **Note:** The method / audio / animation playback tracks will not be processed by this method.  
         */
        stop(keepState: boolean = false): void
        isPlaying(): boolean
        
        /** Queues an animation for playback once the current animation and all previously queued animations are done.  
         *      
         *  **Note:** If a looped animation is currently playing, the queued animation will never play unless the looped animation is stopped somehow.  
         */
        queue(name: StringName): void
        getQueue(): PackedStringArray
        clearQueue(): void
        getPlayingSpeed(): float64
        setSectionWithMarkers(startMarker: StringName = '', endMarker: StringName = ''): void
        setSection(startTime: float64 = -1, endTime: float64 = -1): void
        resetSection(): void
        getSectionStartTime(): float64
        getSectionEndTime(): float64
        hasSection(): boolean
        
        /** Seeks the animation to the [param seconds] point in time (in seconds). If [param update] is `true`, the animation updates too, otherwise it updates at process time. Events between the current frame and [param seconds] are skipped.  
         *  If [param update_only] is `true`, the method / audio / animation playback tracks will not be processed.  
         *      
         *  **Note:** Seeking to the end of the animation doesn't emit [signal AnimationMixer.animation_finished]. If you want to skip animation and emit the signal, use [method AnimationMixer.advance].  
         */
        seek(seconds: float64, update: boolean = false, updateOnly: boolean = false): void
        setProcessCallback(mode: AnimationPlayer.AnimationProcessCallback): void
        getProcessCallback(): AnimationPlayer.AnimationProcessCallback
        setMethodCallMode(mode: AnimationPlayer.AnimationMethodCallMode): void
        getMethodCallMode(): AnimationPlayer.AnimationMethodCallMode
        setRoot(path: NodePath | string): void
        getRoot(): NodePath
        get currentAnimation(): StringName
        set currentAnimation(value: StringName)
        get assignedAnimation(): StringName
        set assignedAnimation(value: StringName)
        
        /** The key of the animation to play when the scene loads. */
        get autoplay(): StringName
        set autoplay(value: StringName)
        get currentAnimationLength(): float64
        set currentAnimationLength(value: float64)
        get currentAnimationPosition(): float64
        set currentAnimationPosition(value: float64)
        get playbackAutoCapture(): boolean
        set playbackAutoCapture(value: boolean)
        get playbackAutoCaptureDuration(): float64
        set playbackAutoCaptureDuration(value: float64)
        get playbackAutoCaptureTransitionType(): int64
        set playbackAutoCaptureTransitionType(value: int64)
        get playbackAutoCaptureEaseType(): int64
        set playbackAutoCaptureEaseType(value: int64)
        get playbackDefaultBlendTime(): float64
        set playbackDefaultBlendTime(value: float64)
        get speedScale(): float64
        set speedScale(value: float64)
        get movieQuitOnFinish(): boolean
        set movieQuitOnFinish(value: boolean)
        readonly currentAnimationChanged: Signal<(name: string) => void>
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
    class AnimationTree<Map extends Record<string, Node> = {}> extends AnimationMixer<Map> {
        static readonly ANIMATION_PROCESS_PHYSICS = 0
        static readonly ANIMATION_PROCESS_IDLE = 1
        static readonly ANIMATION_PROCESS_MANUAL = 2
        constructor(identifier?: any)
        setProcessCallback(mode: AnimationTree.AnimationProcessCallback): void
        getProcessCallback(): AnimationTree.AnimationProcessCallback
        get treeRoot(): AnimationRootNode
        set treeRoot(value: AnimationRootNode)
        get advanceExpressionBaseNode(): NodePath
        set advanceExpressionBaseNode(value: NodePath | string)
        get animPlayer(): NodePath
        set animPlayer(value: NodePath | string)
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
    class Area2D<Map extends Record<string, Node> = {}> extends CollisionObject2D<Map> {
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
        getOverlappingBodies(): GArray
        getOverlappingAreas(): GArray
        hasOverlappingBodies(): boolean
        hasOverlappingAreas(): boolean
        overlapsBody(body: Node): boolean
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
        get gravitySpaceOverride(): int64
        set gravitySpaceOverride(value: int64)
        get gravityPoint(): boolean
        set gravityPoint(value: boolean)
        get gravityPointUnitDistance(): float64
        set gravityPointUnitDistance(value: float64)
        get gravityPointCenter(): Vector2
        set gravityPointCenter(value: Vector2)
        get gravityDirection(): Vector2
        set gravityDirection(value: Vector2)
        
        /** The area's gravity intensity (in pixels per second squared). This value multiplies the gravity direction. This is useful to alter the force of gravity without altering its direction. */
        get gravity(): float64
        set gravity(value: float64)
        get linearDampSpaceOverride(): int64
        set linearDampSpaceOverride(value: int64)
        get linearDamp(): float64
        set linearDamp(value: float64)
        get angularDampSpaceOverride(): int64
        set angularDampSpaceOverride(value: int64)
        get angularDamp(): float64
        set angularDamp(value: float64)
        get audioBusOverride(): boolean
        set audioBusOverride(value: boolean)
        get audioBusName(): StringName
        set audioBusName(value: StringName)
        readonly bodyShapeEntered: Signal<(bodyRid: Rid, body: Node2D, bodyShapeIndex: int64, localShapeIndex: int64) => void>
        readonly bodyShapeExited: Signal<(bodyRid: Rid, body: Node2D, bodyShapeIndex: int64, localShapeIndex: int64) => void>
        readonly bodyEntered: Signal<(body: Node2D) => void>
        readonly bodyExited: Signal<(body: Node2D) => void>
        readonly areaShapeEntered: Signal<(areaRid: Rid, area: Area2D, areaShapeIndex: int64, localShapeIndex: int64) => void>
        readonly areaShapeExited: Signal<(areaRid: Rid, area: Area2D, areaShapeIndex: int64, localShapeIndex: int64) => void>
        readonly areaEntered: Signal<(area: Area2D) => void>
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
    class Area3D<Map extends Record<string, Node> = {}> extends CollisionObject3D<Map> {
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
        getOverlappingBodies(): GArray
        getOverlappingAreas(): GArray
        hasOverlappingBodies(): boolean
        hasOverlappingAreas(): boolean
        overlapsBody(body: Node): boolean
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
        get gravitySpaceOverride(): int64
        set gravitySpaceOverride(value: int64)
        get gravityPoint(): boolean
        set gravityPoint(value: boolean)
        get gravityPointUnitDistance(): float64
        set gravityPointUnitDistance(value: float64)
        get gravityPointCenter(): Vector3
        set gravityPointCenter(value: Vector3)
        get gravityDirection(): Vector3
        set gravityDirection(value: Vector3)
        
        /** The area's gravity intensity (in meters per second squared). This value multiplies the gravity direction. This is useful to alter the force of gravity without altering its direction. */
        get gravity(): float64
        set gravity(value: float64)
        get linearDampSpaceOverride(): int64
        set linearDampSpaceOverride(value: int64)
        get linearDamp(): float64
        set linearDamp(value: float64)
        get angularDampSpaceOverride(): int64
        set angularDampSpaceOverride(value: int64)
        get angularDamp(): float64
        set angularDamp(value: float64)
        get windForceMagnitude(): float64
        set windForceMagnitude(value: float64)
        get windAttenuationFactor(): float64
        set windAttenuationFactor(value: float64)
        get windSourcePath(): NodePath
        set windSourcePath(value: NodePath | string)
        get audioBusOverride(): boolean
        set audioBusOverride(value: boolean)
        get audioBusName(): StringName
        set audioBusName(value: StringName)
        get reverbBusEnabled(): boolean
        set reverbBusEnabled(value: boolean)
        get reverbBusName(): StringName
        set reverbBusName(value: StringName)
        get reverbBusAmount(): float64
        set reverbBusAmount(value: float64)
        get reverbBusUniformity(): float64
        set reverbBusUniformity(value: float64)
        readonly bodyShapeEntered: Signal<(bodyRid: Rid, body: Node3D, bodyShapeIndex: int64, localShapeIndex: int64) => void>
        readonly bodyShapeExited: Signal<(bodyRid: Rid, body: Node3D, bodyShapeIndex: int64, localShapeIndex: int64) => void>
        readonly bodyEntered: Signal<(body: Node3D) => void>
        readonly bodyExited: Signal<(body: Node3D) => void>
        readonly areaShapeEntered: Signal<(areaRid: Rid, area: Area3D, areaShapeIndex: int64, localShapeIndex: int64) => void>
        readonly areaShapeExited: Signal<(areaRid: Rid, area: Area3D, areaShapeIndex: int64, localShapeIndex: int64) => void>
        readonly areaEntered: Signal<(area: Area3D) => void>
        readonly areaExited: Signal<(area: Area3D) => void>
    }
    /** [Mesh] type that provides utility for constructing a surface from arrays.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_arraymesh.html  
     */
    class ArrayMesh extends Mesh {
        constructor(identifier?: any)
        addBlendShape(name: StringName): void
        getBlendShapeCount(): int64
        getBlendShapeName(index: int64): StringName
        setBlendShapeName(index: int64, name: StringName): void
        clearBlendShapes(): void
        addSurfaceFromArrays(primitive: Mesh.PrimitiveType, arrays: GArray, blendShapes: GArray = [], lods: GDictionary = new GDictionary(), flags: Mesh.ArrayFormat = 0): void
        clearSurfaces(): void
        surfaceRemove(surfIdx: int64): void
        surfaceUpdateVertexRegion(surfIdx: int64, offset: int64, data: PackedByteArray | byte[] | ArrayBuffer): void
        surfaceUpdateAttributeRegion(surfIdx: int64, offset: int64, data: PackedByteArray | byte[] | ArrayBuffer): void
        surfaceUpdateSkinRegion(surfIdx: int64, offset: int64, data: PackedByteArray | byte[] | ArrayBuffer): void
        surfaceGetArrayLen(surfIdx: int64): int64
        surfaceGetArrayIndexLen(surfIdx: int64): int64
        surfaceGetFormat(surfIdx: int64): Mesh.ArrayFormat
        surfaceGetPrimitiveType(surfIdx: int64): Mesh.PrimitiveType
        surfaceFindByName(name: string): int64
        surfaceSetName(surfIdx: int64, name: string): void
        surfaceGetName(surfIdx: int64): string
        regenNormalMaps(): void
        lightmapUnwrap(transform: Transform3D, texelSize: float64): GError
        get _blendShapeNames(): PackedStringArray
        set _blendShapeNames(value: PackedStringArray | string[])
        get _surfaces(): GArray
        set _surfaces(value: GArray)
        get blendShapeMode(): int64
        set blendShapeMode(value: int64)
        get customAabb(): Aabb
        set customAabb(value: Aabb)
        get shadowMesh(): ArrayMesh
        set shadowMesh(value: ArrayMesh)
    }
    /** 3D polygon shape for use with occlusion culling in [OccluderInstance3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_arrayoccluder3d.html  
     */
    class ArrayOccluder3D extends Occluder3D {
        constructor(identifier?: any)
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
    class AspectRatioContainer<Map extends Record<string, Node> = {}> extends Container<Map> {
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
        get stretchMode(): int64
        set stretchMode(value: int64)
        get alignmentHorizontal(): int64
        set alignmentHorizontal(value: int64)
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
        get atlas(): Texture2D
        set atlas(value: Texture2D)
        
        /** The region used to draw the [member atlas]. If either dimension of the region's size is `0`, the value from [member atlas] size will be used for that axis instead. */
        get region(): Rect2
        set region(value: Rect2)
        
        /** The margin around the [member region]. Useful for small adjustments. If the [member Rect2.size] of this property ("w" and "h" in the editor) is set, the drawn texture is resized to fit within the margin. */
        get margin(): Rect2
        set margin(value: Rect2)
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
        /* gdvirtual */ _instantiate(): AudioEffectInstance
    }
    /** Adds an amplifying audio effect to an audio bus.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audioeffectamplify.html  
     */
    class AudioEffectAmplify extends AudioEffect {
        constructor(identifier?: any)
        get volumeDb(): float64
        set volumeDb(value: float64)
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
        canGetBuffer(frames: int64): boolean
        getBuffer(frames: int64): PackedVector2Array
        clearBuffer(): void
        getFramesAvailable(): int64
        getDiscardedFrames(): int64
        getBufferLengthFrames(): int64
        getPushedFrames(): int64
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
        get voiceCount(): int64
        set voiceCount(value: int64)
        
        /** The effect's raw signal. */
        get dry(): float64
        set dry(value: float64)
        
        /** The effect's processed signal. */
        get wet(): float64
        set wet(value: float64)
        get "voice/1/delayMs"(): float64
        set "voice/1/delayMs"(value: float64)
        get "voice/1/rateHz"(): float64
        set "voice/1/rateHz"(value: float64)
        get "voice/1/depthMs"(): float64
        set "voice/1/depthMs"(value: float64)
        get "voice/1/levelDb"(): float64
        set "voice/1/levelDb"(value: float64)
        get "voice/1/cutoffHz"(): float64
        set "voice/1/cutoffHz"(value: float64)
        
        /** The voice's pan level. */
        get "voice/1/pan"(): float64
        set "voice/1/pan"(value: float64)
        get "voice/2/delayMs"(): float64
        set "voice/2/delayMs"(value: float64)
        get "voice/2/rateHz"(): float64
        set "voice/2/rateHz"(value: float64)
        get "voice/2/depthMs"(): float64
        set "voice/2/depthMs"(value: float64)
        get "voice/2/levelDb"(): float64
        set "voice/2/levelDb"(value: float64)
        get "voice/2/cutoffHz"(): float64
        set "voice/2/cutoffHz"(value: float64)
        
        /** The voice's pan level. */
        get "voice/2/pan"(): float64
        set "voice/2/pan"(value: float64)
        get "voice/3/delayMs"(): float64
        set "voice/3/delayMs"(value: float64)
        get "voice/3/rateHz"(): float64
        set "voice/3/rateHz"(value: float64)
        get "voice/3/depthMs"(): float64
        set "voice/3/depthMs"(value: float64)
        get "voice/3/levelDb"(): float64
        set "voice/3/levelDb"(value: float64)
        get "voice/3/cutoffHz"(): float64
        set "voice/3/cutoffHz"(value: float64)
        
        /** The voice's pan level. */
        get "voice/3/pan"(): float64
        set "voice/3/pan"(value: float64)
        get "voice/4/delayMs"(): float64
        set "voice/4/delayMs"(value: float64)
        get "voice/4/rateHz"(): float64
        set "voice/4/rateHz"(value: float64)
        get "voice/4/depthMs"(): float64
        set "voice/4/depthMs"(value: float64)
        get "voice/4/levelDb"(): float64
        set "voice/4/levelDb"(value: float64)
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
        get attackUs(): float64
        set attackUs(value: float64)
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
        get tap1Active(): boolean
        set tap1Active(value: boolean)
        get tap1DelayMs(): float64
        set tap1DelayMs(value: float64)
        get tap1LevelDb(): float64
        set tap1LevelDb(value: float64)
        get tap1Pan(): float64
        set tap1Pan(value: float64)
        get tap2Active(): boolean
        set tap2Active(value: boolean)
        get tap2DelayMs(): float64
        set tap2DelayMs(value: float64)
        get tap2LevelDb(): float64
        set tap2LevelDb(value: float64)
        get tap2Pan(): float64
        set tap2Pan(value: float64)
        get feedbackActive(): boolean
        set feedbackActive(value: boolean)
        get feedbackDelayMs(): float64
        set feedbackDelayMs(value: float64)
        get feedbackLevelDb(): float64
        set feedbackLevelDb(value: float64)
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
        get preGain(): float64
        set preGain(value: float64)
        get keepHfHz(): float64
        set keepHfHz(value: float64)
        
        /** Distortion power. Value can range from 0 to 1. */
        get drive(): float64
        set drive(value: float64)
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
        setBandGainDb(bandIdx: int64, volumeDb: float64): void
        getBandGainDb(bandIdx: int64): float64
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
        get preGainDb(): float64
        set preGainDb(value: float64)
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
        /* gdvirtual */ _processSilence(): boolean
    }
    /** Adds a soft-clip limiter audio effect to an Audio bus.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audioeffectlimiter.html  
     */
    class AudioEffectLimiter extends AudioEffect {
        constructor(identifier?: any)
        get ceilingDb(): float64
        set ceilingDb(value: float64)
        get thresholdDb(): float64
        set thresholdDb(value: float64)
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
        get rangeMinHz(): float64
        set rangeMinHz(value: float64)
        get rangeMaxHz(): float64
        set rangeMaxHz(value: float64)
        get rateHz(): float64
        set rateHz(value: float64)
        
        /** Output percent of modified sound. Value can range from 0.1 to 0.9. */
        get feedback(): float64
        set feedback(value: float64)
        
        /** Governs how high the filter frequencies sweep. Low value will primarily affect bass frequencies. High value can sweep high into the treble. Value can range from 0.1 to 4. */
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
        get pitchScale(): float64
        set pitchScale(value: float64)
        
        /** The oversampling factor to use. Higher values result in better quality, but are more demanding on the CPU and may cause audio cracking if the CPU can't keep up. */
        get oversampling(): float64
        set oversampling(value: float64)
        get fftSize(): int64
        set fftSize(value: int64)
    }
    /** Audio effect used for recording the sound from an audio bus.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audioeffectrecord.html  
     */
    class AudioEffectRecord extends AudioEffect {
        constructor(identifier?: any)
        setRecordingActive(record: boolean): void
        isRecordingActive(): boolean
        getRecording(): any /*AudioStreamWAV*/
        
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
        get predelayMsec(): float64
        set predelayMsec(value: float64)
        get predelayFeedback(): float64
        set predelayFeedback(value: float64)
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
        get bufferLength(): float64
        set bufferLength(value: float64)
        get tapBackPos(): float64
        set tapBackPos(value: float64)
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
        getMagnitudeForFrequencyRange(fromHz: float64, toHz: float64, mode: AudioEffectSpectrumAnalyzerInstance.MagnitudeMode = 1): Vector2
    }
    /** An audio effect that can be used to adjust the intensity of stereo panning.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audioeffectstereoenhance.html  
     */
    class AudioEffectStereoEnhance extends AudioEffect {
        constructor(identifier?: any)
        get panPullout(): float64
        set panPullout(value: float64)
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
    class AudioListener2D<Map extends Record<string, Node> = {}> extends Node2D<Map> {
        constructor(identifier?: any)
        makeCurrent(): void
        clearCurrent(): void
        isCurrent(): boolean
    }
    /** Overrides the location sounds are heard from.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audiolistener3d.html  
     */
    class AudioListener3D<Map extends Record<string, Node> = {}> extends Node3D<Map> {
        constructor(identifier?: any)
        makeCurrent(): void
        clearCurrent(): void
        isCurrent(): boolean
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
        /* gdvirtual */ _instantiatePlayback(): AudioStreamPlayback
        /* gdvirtual */ _getStreamName(): string
        /* gdvirtual */ _getLength(): float64
        /* gdvirtual */ _isMonophonic(): boolean
        /* gdvirtual */ _getBpm(): float64
        /* gdvirtual */ _getBeatCount(): int64
        /* gdvirtual */ _getParameterList(): GArray
        /* gdvirtual */ _hasLoop(): boolean
        /* gdvirtual */ _getBarBeats(): int64
        getLength(): float64
        isMonophonic(): boolean
        instantiatePlayback(): AudioStreamPlayback
        canBeSampled(): boolean
        generateSample(): AudioSample
        isMetaStream(): boolean
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
        get mixRateMode(): int64
        set mixRateMode(value: int64)
        get mixRate(): float64
        set mixRate(value: float64)
        get bufferLength(): float64
        set bufferLength(value: float64)
    }
    /** Plays back audio generated using [AudioStreamGenerator].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audiostreamgeneratorplayback.html  
     */
    class AudioStreamGeneratorPlayback extends AudioStreamPlaybackResampled {
        constructor(identifier?: any)
        pushFrame(frame: Vector2): boolean
        canPushBuffer(amount: int64): boolean
        pushBuffer(frames: PackedVector2Array | Vector2[]): boolean
        getFramesAvailable(): int64
        getSkips(): int64
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
        setClipName(clipIndex: int64, name: StringName): void
        getClipName(clipIndex: int64): StringName
        setClipStream(clipIndex: int64, stream: AudioStream): void
        getClipStream(clipIndex: int64): AudioStream
        setClipAutoAdvance(clipIndex: int64, mode: AudioStreamInteractive.AutoAdvanceMode): void
        getClipAutoAdvance(clipIndex: int64): AudioStreamInteractive.AutoAdvanceMode
        setClipAutoAdvanceNextClip(clipIndex: int64, autoAdvanceNextClip: int64): void
        getClipAutoAdvanceNextClip(clipIndex: int64): int64
        addTransition(fromClip: int64, toClip: int64, fromTime: AudioStreamInteractive.TransitionFromTime, toTime: AudioStreamInteractive.TransitionToTime, fadeMode: AudioStreamInteractive.FadeMode, fadeBeats: float64, useFillerClip: boolean = false, fillerClip: int64 = -1, holdPrevious: boolean = false): void
        hasTransition(fromClip: int64, toClip: int64): boolean
        eraseTransition(fromClip: int64, toClip: int64): void
        getTransitionList(): PackedInt32Array
        getTransitionFromTime(fromClip: int64, toClip: int64): AudioStreamInteractive.TransitionFromTime
        getTransitionToTime(fromClip: int64, toClip: int64): AudioStreamInteractive.TransitionToTime
        getTransitionFadeMode(fromClip: int64, toClip: int64): AudioStreamInteractive.FadeMode
        getTransitionFadeBeats(fromClip: int64, toClip: int64): float64
        isTransitionUsingFillerClip(fromClip: int64, toClip: int64): boolean
        getTransitionFillerClip(fromClip: int64, toClip: int64): int64
        isTransitionHoldingPrevious(fromClip: int64, toClip: int64): boolean
        get clipCount(): any /*Clips,clip_,page_size=999,unfoldable,numbered,swap_method=_inspector_array_swap_clip,add_button_text=Add Clip*/
        set clipCount(value: any /*Clips,clip_,page_size=999,unfoldable,numbered,swap_method=_inspector_array_swap_clip,add_button_text=Add Clip*/)
        get "clip0/name"(): StringName
        set "clip0/name"(value: StringName)
        get "clip0/stream"(): AudioStream
        set "clip0/stream"(value: AudioStream)
        get "clip0/autoAdvance"(): int64
        set "clip0/autoAdvance"(value: int64)
        get "clip0/nextClip"(): int64
        set "clip0/nextClip"(value: int64)
        get "clip1/name"(): StringName
        set "clip1/name"(value: StringName)
        get "clip1/stream"(): AudioStream
        set "clip1/stream"(value: AudioStream)
        get "clip1/autoAdvance"(): int64
        set "clip1/autoAdvance"(value: int64)
        get "clip1/nextClip"(): int64
        set "clip1/nextClip"(value: int64)
        get "clip2/name"(): StringName
        set "clip2/name"(value: StringName)
        get "clip2/stream"(): AudioStream
        set "clip2/stream"(value: AudioStream)
        get "clip2/autoAdvance"(): int64
        set "clip2/autoAdvance"(value: int64)
        get "clip2/nextClip"(): int64
        set "clip2/nextClip"(value: int64)
        get "clip3/name"(): StringName
        set "clip3/name"(value: StringName)
        get "clip3/stream"(): AudioStream
        set "clip3/stream"(value: AudioStream)
        get "clip3/autoAdvance"(): int64
        set "clip3/autoAdvance"(value: int64)
        get "clip3/nextClip"(): int64
        set "clip3/nextClip"(value: int64)
        get "clip4/name"(): StringName
        set "clip4/name"(value: StringName)
        get "clip4/stream"(): AudioStream
        set "clip4/stream"(value: AudioStream)
        get "clip4/autoAdvance"(): int64
        set "clip4/autoAdvance"(value: int64)
        get "clip4/nextClip"(): int64
        set "clip4/nextClip"(value: int64)
        get "clip5/name"(): StringName
        set "clip5/name"(value: StringName)
        get "clip5/stream"(): AudioStream
        set "clip5/stream"(value: AudioStream)
        get "clip5/autoAdvance"(): int64
        set "clip5/autoAdvance"(value: int64)
        get "clip5/nextClip"(): int64
        set "clip5/nextClip"(value: int64)
        get "clip6/name"(): StringName
        set "clip6/name"(value: StringName)
        get "clip6/stream"(): AudioStream
        set "clip6/stream"(value: AudioStream)
        get "clip6/autoAdvance"(): int64
        set "clip6/autoAdvance"(value: int64)
        get "clip6/nextClip"(): int64
        set "clip6/nextClip"(value: int64)
        get "clip7/name"(): StringName
        set "clip7/name"(value: StringName)
        get "clip7/stream"(): AudioStream
        set "clip7/stream"(value: AudioStream)
        get "clip7/autoAdvance"(): int64
        set "clip7/autoAdvance"(value: int64)
        get "clip7/nextClip"(): int64
        set "clip7/nextClip"(value: int64)
        get "clip8/name"(): StringName
        set "clip8/name"(value: StringName)
        get "clip8/stream"(): AudioStream
        set "clip8/stream"(value: AudioStream)
        get "clip8/autoAdvance"(): int64
        set "clip8/autoAdvance"(value: int64)
        get "clip8/nextClip"(): int64
        set "clip8/nextClip"(value: int64)
        get "clip9/name"(): StringName
        set "clip9/name"(value: StringName)
        get "clip9/stream"(): AudioStream
        set "clip9/stream"(value: AudioStream)
        get "clip9/autoAdvance"(): int64
        set "clip9/autoAdvance"(value: int64)
        get "clip9/nextClip"(): int64
        set "clip9/nextClip"(value: int64)
        get "clip10/name"(): StringName
        set "clip10/name"(value: StringName)
        get "clip10/stream"(): AudioStream
        set "clip10/stream"(value: AudioStream)
        get "clip10/autoAdvance"(): int64
        set "clip10/autoAdvance"(value: int64)
        get "clip10/nextClip"(): int64
        set "clip10/nextClip"(value: int64)
        get "clip11/name"(): StringName
        set "clip11/name"(value: StringName)
        get "clip11/stream"(): AudioStream
        set "clip11/stream"(value: AudioStream)
        get "clip11/autoAdvance"(): int64
        set "clip11/autoAdvance"(value: int64)
        get "clip11/nextClip"(): int64
        set "clip11/nextClip"(value: int64)
        get "clip12/name"(): StringName
        set "clip12/name"(value: StringName)
        get "clip12/stream"(): AudioStream
        set "clip12/stream"(value: AudioStream)
        get "clip12/autoAdvance"(): int64
        set "clip12/autoAdvance"(value: int64)
        get "clip12/nextClip"(): int64
        set "clip12/nextClip"(value: int64)
        get "clip13/name"(): StringName
        set "clip13/name"(value: StringName)
        get "clip13/stream"(): AudioStream
        set "clip13/stream"(value: AudioStream)
        get "clip13/autoAdvance"(): int64
        set "clip13/autoAdvance"(value: int64)
        get "clip13/nextClip"(): int64
        set "clip13/nextClip"(value: int64)
        get "clip14/name"(): StringName
        set "clip14/name"(value: StringName)
        get "clip14/stream"(): AudioStream
        set "clip14/stream"(value: AudioStream)
        get "clip14/autoAdvance"(): int64
        set "clip14/autoAdvance"(value: int64)
        get "clip14/nextClip"(): int64
        set "clip14/nextClip"(value: int64)
        get "clip15/name"(): StringName
        set "clip15/name"(value: StringName)
        get "clip15/stream"(): AudioStream
        set "clip15/stream"(value: AudioStream)
        get "clip15/autoAdvance"(): int64
        set "clip15/autoAdvance"(value: int64)
        get "clip15/nextClip"(): int64
        set "clip15/nextClip"(value: int64)
        get "clip16/name"(): StringName
        set "clip16/name"(value: StringName)
        get "clip16/stream"(): AudioStream
        set "clip16/stream"(value: AudioStream)
        get "clip16/autoAdvance"(): int64
        set "clip16/autoAdvance"(value: int64)
        get "clip16/nextClip"(): int64
        set "clip16/nextClip"(value: int64)
        get "clip17/name"(): StringName
        set "clip17/name"(value: StringName)
        get "clip17/stream"(): AudioStream
        set "clip17/stream"(value: AudioStream)
        get "clip17/autoAdvance"(): int64
        set "clip17/autoAdvance"(value: int64)
        get "clip17/nextClip"(): int64
        set "clip17/nextClip"(value: int64)
        get "clip18/name"(): StringName
        set "clip18/name"(value: StringName)
        get "clip18/stream"(): AudioStream
        set "clip18/stream"(value: AudioStream)
        get "clip18/autoAdvance"(): int64
        set "clip18/autoAdvance"(value: int64)
        get "clip18/nextClip"(): int64
        set "clip18/nextClip"(value: int64)
        get "clip19/name"(): StringName
        set "clip19/name"(value: StringName)
        get "clip19/stream"(): AudioStream
        set "clip19/stream"(value: AudioStream)
        get "clip19/autoAdvance"(): int64
        set "clip19/autoAdvance"(value: int64)
        get "clip19/nextClip"(): int64
        set "clip19/nextClip"(value: int64)
        get "clip20/name"(): StringName
        set "clip20/name"(value: StringName)
        get "clip20/stream"(): AudioStream
        set "clip20/stream"(value: AudioStream)
        get "clip20/autoAdvance"(): int64
        set "clip20/autoAdvance"(value: int64)
        get "clip20/nextClip"(): int64
        set "clip20/nextClip"(value: int64)
        get "clip21/name"(): StringName
        set "clip21/name"(value: StringName)
        get "clip21/stream"(): AudioStream
        set "clip21/stream"(value: AudioStream)
        get "clip21/autoAdvance"(): int64
        set "clip21/autoAdvance"(value: int64)
        get "clip21/nextClip"(): int64
        set "clip21/nextClip"(value: int64)
        get "clip22/name"(): StringName
        set "clip22/name"(value: StringName)
        get "clip22/stream"(): AudioStream
        set "clip22/stream"(value: AudioStream)
        get "clip22/autoAdvance"(): int64
        set "clip22/autoAdvance"(value: int64)
        get "clip22/nextClip"(): int64
        set "clip22/nextClip"(value: int64)
        get "clip23/name"(): StringName
        set "clip23/name"(value: StringName)
        get "clip23/stream"(): AudioStream
        set "clip23/stream"(value: AudioStream)
        get "clip23/autoAdvance"(): int64
        set "clip23/autoAdvance"(value: int64)
        get "clip23/nextClip"(): int64
        set "clip23/nextClip"(value: int64)
        get "clip24/name"(): StringName
        set "clip24/name"(value: StringName)
        get "clip24/stream"(): AudioStream
        set "clip24/stream"(value: AudioStream)
        get "clip24/autoAdvance"(): int64
        set "clip24/autoAdvance"(value: int64)
        get "clip24/nextClip"(): int64
        set "clip24/nextClip"(value: int64)
        get "clip25/name"(): StringName
        set "clip25/name"(value: StringName)
        get "clip25/stream"(): AudioStream
        set "clip25/stream"(value: AudioStream)
        get "clip25/autoAdvance"(): int64
        set "clip25/autoAdvance"(value: int64)
        get "clip25/nextClip"(): int64
        set "clip25/nextClip"(value: int64)
        get "clip26/name"(): StringName
        set "clip26/name"(value: StringName)
        get "clip26/stream"(): AudioStream
        set "clip26/stream"(value: AudioStream)
        get "clip26/autoAdvance"(): int64
        set "clip26/autoAdvance"(value: int64)
        get "clip26/nextClip"(): int64
        set "clip26/nextClip"(value: int64)
        get "clip27/name"(): StringName
        set "clip27/name"(value: StringName)
        get "clip27/stream"(): AudioStream
        set "clip27/stream"(value: AudioStream)
        get "clip27/autoAdvance"(): int64
        set "clip27/autoAdvance"(value: int64)
        get "clip27/nextClip"(): int64
        set "clip27/nextClip"(value: int64)
        get "clip28/name"(): StringName
        set "clip28/name"(value: StringName)
        get "clip28/stream"(): AudioStream
        set "clip28/stream"(value: AudioStream)
        get "clip28/autoAdvance"(): int64
        set "clip28/autoAdvance"(value: int64)
        get "clip28/nextClip"(): int64
        set "clip28/nextClip"(value: int64)
        get "clip29/name"(): StringName
        set "clip29/name"(value: StringName)
        get "clip29/stream"(): AudioStream
        set "clip29/stream"(value: AudioStream)
        get "clip29/autoAdvance"(): int64
        set "clip29/autoAdvance"(value: int64)
        get "clip29/nextClip"(): int64
        set "clip29/nextClip"(value: int64)
        get "clip30/name"(): StringName
        set "clip30/name"(value: StringName)
        get "clip30/stream"(): AudioStream
        set "clip30/stream"(value: AudioStream)
        get "clip30/autoAdvance"(): int64
        set "clip30/autoAdvance"(value: int64)
        get "clip30/nextClip"(): int64
        set "clip30/nextClip"(value: int64)
        get "clip31/name"(): StringName
        set "clip31/name"(value: StringName)
        get "clip31/stream"(): AudioStream
        set "clip31/stream"(value: AudioStream)
        get "clip31/autoAdvance"(): int64
        set "clip31/autoAdvance"(value: int64)
        get "clip31/nextClip"(): int64
        set "clip31/nextClip"(value: int64)
        get "clip32/name"(): StringName
        set "clip32/name"(value: StringName)
        get "clip32/stream"(): AudioStream
        set "clip32/stream"(value: AudioStream)
        get "clip32/autoAdvance"(): int64
        set "clip32/autoAdvance"(value: int64)
        get "clip32/nextClip"(): int64
        set "clip32/nextClip"(value: int64)
        get "clip33/name"(): StringName
        set "clip33/name"(value: StringName)
        get "clip33/stream"(): AudioStream
        set "clip33/stream"(value: AudioStream)
        get "clip33/autoAdvance"(): int64
        set "clip33/autoAdvance"(value: int64)
        get "clip33/nextClip"(): int64
        set "clip33/nextClip"(value: int64)
        get "clip34/name"(): StringName
        set "clip34/name"(value: StringName)
        get "clip34/stream"(): AudioStream
        set "clip34/stream"(value: AudioStream)
        get "clip34/autoAdvance"(): int64
        set "clip34/autoAdvance"(value: int64)
        get "clip34/nextClip"(): int64
        set "clip34/nextClip"(value: int64)
        get "clip35/name"(): StringName
        set "clip35/name"(value: StringName)
        get "clip35/stream"(): AudioStream
        set "clip35/stream"(value: AudioStream)
        get "clip35/autoAdvance"(): int64
        set "clip35/autoAdvance"(value: int64)
        get "clip35/nextClip"(): int64
        set "clip35/nextClip"(value: int64)
        get "clip36/name"(): StringName
        set "clip36/name"(value: StringName)
        get "clip36/stream"(): AudioStream
        set "clip36/stream"(value: AudioStream)
        get "clip36/autoAdvance"(): int64
        set "clip36/autoAdvance"(value: int64)
        get "clip36/nextClip"(): int64
        set "clip36/nextClip"(value: int64)
        get "clip37/name"(): StringName
        set "clip37/name"(value: StringName)
        get "clip37/stream"(): AudioStream
        set "clip37/stream"(value: AudioStream)
        get "clip37/autoAdvance"(): int64
        set "clip37/autoAdvance"(value: int64)
        get "clip37/nextClip"(): int64
        set "clip37/nextClip"(value: int64)
        get "clip38/name"(): StringName
        set "clip38/name"(value: StringName)
        get "clip38/stream"(): AudioStream
        set "clip38/stream"(value: AudioStream)
        get "clip38/autoAdvance"(): int64
        set "clip38/autoAdvance"(value: int64)
        get "clip38/nextClip"(): int64
        set "clip38/nextClip"(value: int64)
        get "clip39/name"(): StringName
        set "clip39/name"(value: StringName)
        get "clip39/stream"(): AudioStream
        set "clip39/stream"(value: AudioStream)
        get "clip39/autoAdvance"(): int64
        set "clip39/autoAdvance"(value: int64)
        get "clip39/nextClip"(): int64
        set "clip39/nextClip"(value: int64)
        get "clip40/name"(): StringName
        set "clip40/name"(value: StringName)
        get "clip40/stream"(): AudioStream
        set "clip40/stream"(value: AudioStream)
        get "clip40/autoAdvance"(): int64
        set "clip40/autoAdvance"(value: int64)
        get "clip40/nextClip"(): int64
        set "clip40/nextClip"(value: int64)
        get "clip41/name"(): StringName
        set "clip41/name"(value: StringName)
        get "clip41/stream"(): AudioStream
        set "clip41/stream"(value: AudioStream)
        get "clip41/autoAdvance"(): int64
        set "clip41/autoAdvance"(value: int64)
        get "clip41/nextClip"(): int64
        set "clip41/nextClip"(value: int64)
        get "clip42/name"(): StringName
        set "clip42/name"(value: StringName)
        get "clip42/stream"(): AudioStream
        set "clip42/stream"(value: AudioStream)
        get "clip42/autoAdvance"(): int64
        set "clip42/autoAdvance"(value: int64)
        get "clip42/nextClip"(): int64
        set "clip42/nextClip"(value: int64)
        get "clip43/name"(): StringName
        set "clip43/name"(value: StringName)
        get "clip43/stream"(): AudioStream
        set "clip43/stream"(value: AudioStream)
        get "clip43/autoAdvance"(): int64
        set "clip43/autoAdvance"(value: int64)
        get "clip43/nextClip"(): int64
        set "clip43/nextClip"(value: int64)
        get "clip44/name"(): StringName
        set "clip44/name"(value: StringName)
        get "clip44/stream"(): AudioStream
        set "clip44/stream"(value: AudioStream)
        get "clip44/autoAdvance"(): int64
        set "clip44/autoAdvance"(value: int64)
        get "clip44/nextClip"(): int64
        set "clip44/nextClip"(value: int64)
        get "clip45/name"(): StringName
        set "clip45/name"(value: StringName)
        get "clip45/stream"(): AudioStream
        set "clip45/stream"(value: AudioStream)
        get "clip45/autoAdvance"(): int64
        set "clip45/autoAdvance"(value: int64)
        get "clip45/nextClip"(): int64
        set "clip45/nextClip"(value: int64)
        get "clip46/name"(): StringName
        set "clip46/name"(value: StringName)
        get "clip46/stream"(): AudioStream
        set "clip46/stream"(value: AudioStream)
        get "clip46/autoAdvance"(): int64
        set "clip46/autoAdvance"(value: int64)
        get "clip46/nextClip"(): int64
        set "clip46/nextClip"(value: int64)
        get "clip47/name"(): StringName
        set "clip47/name"(value: StringName)
        get "clip47/stream"(): AudioStream
        set "clip47/stream"(value: AudioStream)
        get "clip47/autoAdvance"(): int64
        set "clip47/autoAdvance"(value: int64)
        get "clip47/nextClip"(): int64
        set "clip47/nextClip"(value: int64)
        get "clip48/name"(): StringName
        set "clip48/name"(value: StringName)
        get "clip48/stream"(): AudioStream
        set "clip48/stream"(value: AudioStream)
        get "clip48/autoAdvance"(): int64
        set "clip48/autoAdvance"(value: int64)
        get "clip48/nextClip"(): int64
        set "clip48/nextClip"(value: int64)
        get "clip49/name"(): StringName
        set "clip49/name"(value: StringName)
        get "clip49/stream"(): AudioStream
        set "clip49/stream"(value: AudioStream)
        get "clip49/autoAdvance"(): int64
        set "clip49/autoAdvance"(value: int64)
        get "clip49/nextClip"(): int64
        set "clip49/nextClip"(value: int64)
        get "clip50/name"(): StringName
        set "clip50/name"(value: StringName)
        get "clip50/stream"(): AudioStream
        set "clip50/stream"(value: AudioStream)
        get "clip50/autoAdvance"(): int64
        set "clip50/autoAdvance"(value: int64)
        get "clip50/nextClip"(): int64
        set "clip50/nextClip"(value: int64)
        get "clip51/name"(): StringName
        set "clip51/name"(value: StringName)
        get "clip51/stream"(): AudioStream
        set "clip51/stream"(value: AudioStream)
        get "clip51/autoAdvance"(): int64
        set "clip51/autoAdvance"(value: int64)
        get "clip51/nextClip"(): int64
        set "clip51/nextClip"(value: int64)
        get "clip52/name"(): StringName
        set "clip52/name"(value: StringName)
        get "clip52/stream"(): AudioStream
        set "clip52/stream"(value: AudioStream)
        get "clip52/autoAdvance"(): int64
        set "clip52/autoAdvance"(value: int64)
        get "clip52/nextClip"(): int64
        set "clip52/nextClip"(value: int64)
        get "clip53/name"(): StringName
        set "clip53/name"(value: StringName)
        get "clip53/stream"(): AudioStream
        set "clip53/stream"(value: AudioStream)
        get "clip53/autoAdvance"(): int64
        set "clip53/autoAdvance"(value: int64)
        get "clip53/nextClip"(): int64
        set "clip53/nextClip"(value: int64)
        get "clip54/name"(): StringName
        set "clip54/name"(value: StringName)
        get "clip54/stream"(): AudioStream
        set "clip54/stream"(value: AudioStream)
        get "clip54/autoAdvance"(): int64
        set "clip54/autoAdvance"(value: int64)
        get "clip54/nextClip"(): int64
        set "clip54/nextClip"(value: int64)
        get "clip55/name"(): StringName
        set "clip55/name"(value: StringName)
        get "clip55/stream"(): AudioStream
        set "clip55/stream"(value: AudioStream)
        get "clip55/autoAdvance"(): int64
        set "clip55/autoAdvance"(value: int64)
        get "clip55/nextClip"(): int64
        set "clip55/nextClip"(value: int64)
        get "clip56/name"(): StringName
        set "clip56/name"(value: StringName)
        get "clip56/stream"(): AudioStream
        set "clip56/stream"(value: AudioStream)
        get "clip56/autoAdvance"(): int64
        set "clip56/autoAdvance"(value: int64)
        get "clip56/nextClip"(): int64
        set "clip56/nextClip"(value: int64)
        get "clip57/name"(): StringName
        set "clip57/name"(value: StringName)
        get "clip57/stream"(): AudioStream
        set "clip57/stream"(value: AudioStream)
        get "clip57/autoAdvance"(): int64
        set "clip57/autoAdvance"(value: int64)
        get "clip57/nextClip"(): int64
        set "clip57/nextClip"(value: int64)
        get "clip58/name"(): StringName
        set "clip58/name"(value: StringName)
        get "clip58/stream"(): AudioStream
        set "clip58/stream"(value: AudioStream)
        get "clip58/autoAdvance"(): int64
        set "clip58/autoAdvance"(value: int64)
        get "clip58/nextClip"(): int64
        set "clip58/nextClip"(value: int64)
        get "clip59/name"(): StringName
        set "clip59/name"(value: StringName)
        get "clip59/stream"(): AudioStream
        set "clip59/stream"(value: AudioStream)
        get "clip59/autoAdvance"(): int64
        set "clip59/autoAdvance"(value: int64)
        get "clip59/nextClip"(): int64
        set "clip59/nextClip"(value: int64)
        get "clip60/name"(): StringName
        set "clip60/name"(value: StringName)
        get "clip60/stream"(): AudioStream
        set "clip60/stream"(value: AudioStream)
        get "clip60/autoAdvance"(): int64
        set "clip60/autoAdvance"(value: int64)
        get "clip60/nextClip"(): int64
        set "clip60/nextClip"(value: int64)
        get "clip61/name"(): StringName
        set "clip61/name"(value: StringName)
        get "clip61/stream"(): AudioStream
        set "clip61/stream"(value: AudioStream)
        get "clip61/autoAdvance"(): int64
        set "clip61/autoAdvance"(value: int64)
        get "clip61/nextClip"(): int64
        set "clip61/nextClip"(value: int64)
        get "clip62/name"(): StringName
        set "clip62/name"(value: StringName)
        get "clip62/stream"(): AudioStream
        set "clip62/stream"(value: AudioStream)
        get "clip62/autoAdvance"(): int64
        set "clip62/autoAdvance"(value: int64)
        get "clip62/nextClip"(): int64
        set "clip62/nextClip"(value: int64)
        get initialClip(): int64
        set initialClip(value: int64)
        get _transitions(): GDictionary
        set _transitions(value: GDictionary)
    }
    /** MP3 audio stream driver.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audiostreammp3.html  
     */
    class AudioStreamMP3 extends AudioStream {
        constructor(identifier?: any)
        static loadFromBuffer(streamData: PackedByteArray | byte[] | ArrayBuffer): AudioStreamMP3
        static loadFromFile(path: string): AudioStreamMP3
        
        /** Contains the audio data in bytes.  
         *  You can load a file without having to import it beforehand using the code snippet below. Keep in mind that this snippet loads the whole file into memory and may not be ideal for huge files (hundreds of megabytes or more).  
         *    
         */
        get data(): PackedByteArray
        set data(value: PackedByteArray | byte[] | ArrayBuffer)
        get bpm(): float64
        set bpm(value: float64)
        get beatCount(): int64
        set beatCount(value: int64)
        get barBeats(): int64
        set barBeats(value: int64)
        
        /** If `true`, the stream will automatically loop when it reaches the end. */
        get loop(): boolean
        set loop(value: boolean)
        get loopOffset(): float64
        set loopOffset(value: float64)
    }
    /** Plays real-time audio input data.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audiostreammicrophone.html  
     */
    class AudioStreamMicrophone extends AudioStream {
        constructor(identifier?: any)
    }
    /** A class representing an Ogg Vorbis audio stream.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audiostreamoggvorbis.html  
     */
    class AudioStreamOggVorbis extends AudioStream {
        constructor(identifier?: any)
        static loadFromBuffer(streamData: PackedByteArray | byte[] | ArrayBuffer): AudioStreamOggVorbis
        static loadFromFile(path: string): AudioStreamOggVorbis
        get packetSequence(): GObject
        set packetSequence(value: GObject)
        get bpm(): float64
        set bpm(value: float64)
        get beatCount(): int64
        set beatCount(value: int64)
        get barBeats(): int64
        set barBeats(value: int64)
        
        /** If `true`, the audio will play again from the specified [member loop_offset] once it is done playing. Useful for ambient sounds and background music. */
        get loop(): boolean
        set loop(value: boolean)
        get loopOffset(): float64
        set loopOffset(value: float64)
    }
    /** Meta class for playing back audio.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audiostreamplayback.html  
     */
    class AudioStreamPlayback extends RefCounted {
        constructor(identifier?: any)
        /** Override this method to customize what happens when the playback starts at the given position, such as by calling [method AudioStreamPlayer.play]. */
        /* gdvirtual */ _start(fromPos: float64): void
        
        /** Override this method to customize what happens when the playback is stopped, such as by calling [method AudioStreamPlayer.stop]. */
        /* gdvirtual */ _stop(): void
        /* gdvirtual */ _isPlaying(): boolean
        /* gdvirtual */ _getLoopCount(): int64
        /* gdvirtual */ _getPlaybackPosition(): float64
        
        /** Override this method to customize what happens when seeking this audio stream at the given [param position], such as by calling [method AudioStreamPlayer.seek]. */
        /* gdvirtual */ _seek(position: float64): void
        
        /** Override this method to customize how the audio stream is mixed. This method is called even if the playback is not active.  
         *      
         *  **Note:** It is not useful to override this method in GDScript or C#. Only GDExtension can take advantage of it.  
         */
        /* gdvirtual */ _mix(buffer: int64, rateScale: float64, frames: int64): int64
        /* gdvirtual */ _tagUsedStreams(): void
        /* gdvirtual */ _setParameter(name: StringName, value: any): void
        /* gdvirtual */ _getParameter(name: StringName): any
        setSamplePlayback(playbackSample: AudioSamplePlayback): void
        getSamplePlayback(): AudioSamplePlayback
        mixAudio(rateScale: float64, frames: int64): PackedVector2Array
        
        /** Starts the stream from the given [param from_pos], in seconds. */
        start(fromPos: float64 = 0): void
        
        /** Seeks the stream at the given [param time], in seconds. */
        seek(time: float64 = 0): void
        
        /** Stops the stream. */
        stop(): void
        getLoopCount(): int64
        getPlaybackPosition(): float64
        isPlaying(): boolean
    }
    /** Playback component of [AudioStreamInteractive].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audiostreamplaybackinteractive.html  
     */
    class AudioStreamPlaybackInteractive extends AudioStreamPlayback {
        constructor(identifier?: any)
        switchToClipByName(clipName: StringName): void
        switchToClip(clipIndex: int64): void
        getCurrentClipIndex(): int64
    }
    /** @link https://docs.godotengine.org/en/latest/classes/class_audiostreamplaybackoggvorbis.html */
    class AudioStreamPlaybackOggVorbis extends AudioStreamPlaybackResampled {
        constructor(identifier?: any)
    }
    /** Playback class used for [AudioStreamPlaylist].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audiostreamplaybackplaylist.html  
     */
    class AudioStreamPlaybackPlaylist extends AudioStreamPlayback {
        constructor(identifier?: any)
    }
    /** Playback instance for [AudioStreamPolyphonic].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audiostreamplaybackpolyphonic.html  
     */
    class AudioStreamPlaybackPolyphonic extends AudioStreamPlayback {
        /** Returned by [method play_stream] in case it could not allocate a stream for playback. */
        static readonly INVALID_ID = -1
        constructor(identifier?: any)
        playStream(stream: AudioStream, fromOffset: float64 = 0, volumeDb: float64 = 0, pitchScale: float64 = 1, playbackType: AudioServer.PlaybackType = 0, bus: StringName = 'Master'): int64
        setStreamVolume(stream: int64, volumeDb: float64): void
        setStreamPitchScale(stream: int64, pitchScale: float64): void
        isStreamPlaying(stream: int64): boolean
        stopStream(stream: int64): void
    }
    /** @link https://docs.godotengine.org/en/latest/classes/class_audiostreamplaybackresampled.html */
    class AudioStreamPlaybackResampled extends AudioStreamPlayback {
        constructor(identifier?: any)
        /* gdvirtual */ _mixResampled(dstBuffer: int64, frameCount: int64): int64
        /* gdvirtual */ _getStreamSamplingRate(): float64
        beginResample(): void
    }
    /** @link https://docs.godotengine.org/en/latest/classes/class_audiostreamplaybacksynchronized.html */
    class AudioStreamPlaybackSynchronized extends AudioStreamPlayback {
        constructor(identifier?: any)
    }
    namespace AudioStreamPlayer {
        enum MixTarget {
            MixTargetStereo = 0,
            MixTargetSurround = 1,
            MixTargetCenter = 2,
        }
    }
    /** A node for audio playback.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audiostreamplayer.html  
     */
    class AudioStreamPlayer<Map extends Record<string, Node> = {}> extends Node<Map> {
        /** The audio will be played only on the first channel. This is the default. */
        static readonly MIX_TARGET_STEREO = 0
        
        /** The audio will be played on all surround channels. */
        static readonly MIX_TARGET_SURROUND = 1
        
        /** The audio will be played on the second channel, which is usually the center. */
        static readonly MIX_TARGET_CENTER = 2
        constructor(identifier?: any)
        
        /** Plays a sound from the beginning, or the given [param from_position] in seconds. */
        play(fromPosition: float64 = 0): void
        
        /** Restarts all sounds to be played from the given [param to_position], in seconds. Does nothing if no sounds are playing. */
        seek(toPosition: float64): void
        
        /** Stops all sounds from this node. */
        stop(): void
        getPlaybackPosition(): float64
        hasStreamPlayback(): boolean
        getStreamPlayback(): AudioStreamPlayback
        
        /** The [AudioStream] resource to be played. Setting this property stops all currently playing sounds. If left empty, the [AudioStreamPlayer] does not work. */
        get stream(): AudioStream
        set stream(value: AudioStream)
        get volumeDb(): float64
        set volumeDb(value: float64)
        get volumeLinear(): float64
        set volumeLinear(value: float64)
        get pitchScale(): float64
        set pitchScale(value: float64)
        
        /** If `true`, this node is playing sounds. Setting this property has the same effect as [method play] and [method stop]. */
        get playing(): boolean
        set playing(value: boolean)
        
        /** If `true`, this node calls [method play] when entering the tree. */
        get autoplay(): boolean
        set autoplay(value: boolean)
        get streamPaused(): boolean
        set streamPaused(value: boolean)
        get mixTarget(): int64
        set mixTarget(value: int64)
        get maxPolyphony(): int64
        set maxPolyphony(value: int64)
        
        /** The target bus name. All sounds from this node will be playing on this bus.  
         *      
         *  **Note:** At runtime, if no bus with the given name exists, all sounds will fall back on `"Master"`. See also [method AudioServer.get_bus_name].  
         */
        get bus(): StringName
        set bus(value: StringName)
        get playbackType(): int64
        set playbackType(value: int64)
        
        /** Emitted when a sound finishes playing without interruptions. This signal is  *not*  emitted when calling [method stop], or when exiting the tree while sounds are playing. */
        readonly finished: Signal<() => void>
    }
    /** Plays positional sound in 2D space.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audiostreamplayer2d.html  
     */
    class AudioStreamPlayer2D<Map extends Record<string, Node> = {}> extends Node2D<Map> {
        constructor(identifier?: any)
        /** Queues the audio to play on the next physics frame, from the given position [param from_position], in seconds. */
        play(fromPosition: float64 = 0): void
        
        /** Sets the position from which audio will be played, in seconds. */
        seek(toPosition: float64): void
        
        /** Stops the audio. */
        stop(): void
        getPlaybackPosition(): float64
        hasStreamPlayback(): boolean
        getStreamPlayback(): AudioStreamPlayback
        
        /** The [AudioStream] object to be played. */
        get stream(): AudioStream
        set stream(value: AudioStream)
        get volumeDb(): float64
        set volumeDb(value: float64)
        get volumeLinear(): float64
        set volumeLinear(value: float64)
        get pitchScale(): float64
        set pitchScale(value: float64)
        
        /** If `true`, audio is playing or is queued to be played (see [method play]). */
        get playing(): boolean
        set playing(value: boolean)
        
        /** If `true`, audio plays when added to scene tree. */
        get autoplay(): boolean
        set autoplay(value: boolean)
        get streamPaused(): boolean
        set streamPaused(value: boolean)
        get maxDistance(): float64
        set maxDistance(value: float64)
        
        /** The volume is attenuated over distance with this as an exponent. */
        get attenuation(): float64
        set attenuation(value: float64)
        get maxPolyphony(): int64
        set maxPolyphony(value: int64)
        get panningStrength(): float64
        set panningStrength(value: float64)
        
        /** Bus on which this audio is playing.  
         *      
         *  **Note:** When setting this property, keep in mind that no validation is performed to see if the given name matches an existing bus. This is because audio bus layouts might be loaded after this property is set. If this given name can't be resolved at runtime, it will fall back to `"Master"`.  
         */
        get bus(): StringName
        set bus(value: StringName)
        get areaMask(): int64
        set areaMask(value: int64)
        get playbackType(): int64
        set playbackType(value: int64)
        
        /** Emitted when the audio stops playing. */
        readonly finished: Signal<() => void>
    }
    namespace AudioStreamPlayer3D {
        enum AttenuationModel {
            AttenuationInverseDistance = 0,
            AttenuationInverseSquareDistance = 1,
            AttenuationLogarithmic = 2,
            AttenuationDisabled = 3,
        }
        enum DopplerTracking {
            DopplerTrackingDisabled = 0,
            DopplerTrackingIdleStep = 1,
            DopplerTrackingPhysicsStep = 2,
        }
    }
    /** Plays positional sound in 3D space.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audiostreamplayer3d.html  
     */
    class AudioStreamPlayer3D<Map extends Record<string, Node> = {}> extends Node3D<Map> {
        /** Attenuation of loudness according to linear distance. */
        static readonly ATTENUATION_INVERSE_DISTANCE = 0
        
        /** Attenuation of loudness according to squared distance. */
        static readonly ATTENUATION_INVERSE_SQUARE_DISTANCE = 1
        
        /** Attenuation of loudness according to logarithmic distance. */
        static readonly ATTENUATION_LOGARITHMIC = 2
        
        /** No attenuation of loudness according to distance. The sound will still be heard positionally, unlike an [AudioStreamPlayer]. [constant ATTENUATION_DISABLED] can be combined with a [member max_distance] value greater than `0.0` to achieve linear attenuation clamped to a sphere of a defined size. */
        static readonly ATTENUATION_DISABLED = 3
        
        /** Disables doppler tracking. */
        static readonly DOPPLER_TRACKING_DISABLED = 0
        
        /** Executes doppler tracking during process frames (see [constant Node.NOTIFICATION_INTERNAL_PROCESS]). */
        static readonly DOPPLER_TRACKING_IDLE_STEP = 1
        
        /** Executes doppler tracking during physics frames (see [constant Node.NOTIFICATION_INTERNAL_PHYSICS_PROCESS]). */
        static readonly DOPPLER_TRACKING_PHYSICS_STEP = 2
        constructor(identifier?: any)
        
        /** Queues the audio to play on the next physics frame, from the given position [param from_position], in seconds. */
        play(fromPosition: float64 = 0): void
        
        /** Sets the position from which audio will be played, in seconds. */
        seek(toPosition: float64): void
        
        /** Stops the audio. */
        stop(): void
        getPlaybackPosition(): float64
        hasStreamPlayback(): boolean
        getStreamPlayback(): AudioStreamPlayback
        
        /** The [AudioStream] resource to be played. */
        get stream(): AudioStream
        set stream(value: AudioStream)
        get attenuationModel(): int64
        set attenuationModel(value: int64)
        get volumeDb(): float64
        set volumeDb(value: float64)
        get volumeLinear(): float64
        set volumeLinear(value: float64)
        get unitSize(): float64
        set unitSize(value: float64)
        get maxDb(): float64
        set maxDb(value: float64)
        get pitchScale(): float64
        set pitchScale(value: float64)
        
        /** If `true`, audio is playing or is queued to be played (see [method play]). */
        get playing(): boolean
        set playing(value: boolean)
        
        /** If `true`, audio plays when the AudioStreamPlayer3D node is added to scene tree. */
        get autoplay(): boolean
        set autoplay(value: boolean)
        get streamPaused(): boolean
        set streamPaused(value: boolean)
        get maxDistance(): float64
        set maxDistance(value: float64)
        get maxPolyphony(): int64
        set maxPolyphony(value: int64)
        get panningStrength(): float64
        set panningStrength(value: float64)
        
        /** The bus on which this audio is playing.  
         *      
         *  **Note:** When setting this property, keep in mind that no validation is performed to see if the given name matches an existing bus. This is because audio bus layouts might be loaded after this property is set. If this given name can't be resolved at runtime, it will fall back to `"Master"`.  
         */
        get bus(): StringName
        set bus(value: StringName)
        get areaMask(): int64
        set areaMask(value: int64)
        get playbackType(): int64
        set playbackType(value: int64)
        get emissionAngleEnabled(): boolean
        set emissionAngleEnabled(value: boolean)
        get emissionAngleDegrees(): float64
        set emissionAngleDegrees(value: float64)
        get emissionAngleFilterAttenuationDb(): float64
        set emissionAngleFilterAttenuationDb(value: float64)
        get attenuationFilterCutoffHz(): float64
        set attenuationFilterCutoffHz(value: float64)
        get attenuationFilterDb(): float64
        set attenuationFilterDb(value: float64)
        get dopplerTracking(): int64
        set dopplerTracking(value: int64)
        
        /** Emitted when the audio stops playing. */
        readonly finished: Signal<() => void>
    }
    /** [AudioStream] that includes sub-streams and plays them back like a playlist.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audiostreamplaylist.html  
     */
    class AudioStreamPlaylist extends AudioStream {
        /** Maximum amount of streams supported in the playlist. */
        static readonly MAX_STREAMS = 64
        constructor(identifier?: any)
        getBpm(): float64
        setListStream(streamIndex: int64, audioStream: AudioStream): void
        getListStream(streamIndex: int64): AudioStream
        
        /** If `true`, the playlist will shuffle each time playback starts and each time it loops. */
        get shuffle(): boolean
        set shuffle(value: boolean)
        
        /** If `true`, the playlist will loop, otherwise the playlist will end when the last stream is finished. */
        get loop(): boolean
        set loop(value: boolean)
        get fadeTime(): float64
        set fadeTime(value: float64)
        get streamCount(): any /*Streams,stream_,unfoldable,page_size=999,add_button_text=Add Stream*/
        set streamCount(value: any /*Streams,stream_,unfoldable,page_size=999,add_button_text=Add Stream*/)
        get stream0(): AudioStream
        set stream0(value: AudioStream)
        get stream1(): AudioStream
        set stream1(value: AudioStream)
        get stream2(): AudioStream
        set stream2(value: AudioStream)
        get stream3(): AudioStream
        set stream3(value: AudioStream)
        get stream4(): AudioStream
        set stream4(value: AudioStream)
        get stream5(): AudioStream
        set stream5(value: AudioStream)
        get stream6(): AudioStream
        set stream6(value: AudioStream)
        get stream7(): AudioStream
        set stream7(value: AudioStream)
        get stream8(): AudioStream
        set stream8(value: AudioStream)
        get stream9(): AudioStream
        set stream9(value: AudioStream)
        get stream10(): AudioStream
        set stream10(value: AudioStream)
        get stream11(): AudioStream
        set stream11(value: AudioStream)
        get stream12(): AudioStream
        set stream12(value: AudioStream)
        get stream13(): AudioStream
        set stream13(value: AudioStream)
        get stream14(): AudioStream
        set stream14(value: AudioStream)
        get stream15(): AudioStream
        set stream15(value: AudioStream)
        get stream16(): AudioStream
        set stream16(value: AudioStream)
        get stream17(): AudioStream
        set stream17(value: AudioStream)
        get stream18(): AudioStream
        set stream18(value: AudioStream)
        get stream19(): AudioStream
        set stream19(value: AudioStream)
        get stream20(): AudioStream
        set stream20(value: AudioStream)
        get stream21(): AudioStream
        set stream21(value: AudioStream)
        get stream22(): AudioStream
        set stream22(value: AudioStream)
        get stream23(): AudioStream
        set stream23(value: AudioStream)
        get stream24(): AudioStream
        set stream24(value: AudioStream)
        get stream25(): AudioStream
        set stream25(value: AudioStream)
        get stream26(): AudioStream
        set stream26(value: AudioStream)
        get stream27(): AudioStream
        set stream27(value: AudioStream)
        get stream28(): AudioStream
        set stream28(value: AudioStream)
        get stream29(): AudioStream
        set stream29(value: AudioStream)
        get stream30(): AudioStream
        set stream30(value: AudioStream)
        get stream31(): AudioStream
        set stream31(value: AudioStream)
        get stream32(): AudioStream
        set stream32(value: AudioStream)
        get stream33(): AudioStream
        set stream33(value: AudioStream)
        get stream34(): AudioStream
        set stream34(value: AudioStream)
        get stream35(): AudioStream
        set stream35(value: AudioStream)
        get stream36(): AudioStream
        set stream36(value: AudioStream)
        get stream37(): AudioStream
        set stream37(value: AudioStream)
        get stream38(): AudioStream
        set stream38(value: AudioStream)
        get stream39(): AudioStream
        set stream39(value: AudioStream)
        get stream40(): AudioStream
        set stream40(value: AudioStream)
        get stream41(): AudioStream
        set stream41(value: AudioStream)
        get stream42(): AudioStream
        set stream42(value: AudioStream)
        get stream43(): AudioStream
        set stream43(value: AudioStream)
        get stream44(): AudioStream
        set stream44(value: AudioStream)
        get stream45(): AudioStream
        set stream45(value: AudioStream)
        get stream46(): AudioStream
        set stream46(value: AudioStream)
        get stream47(): AudioStream
        set stream47(value: AudioStream)
        get stream48(): AudioStream
        set stream48(value: AudioStream)
        get stream49(): AudioStream
        set stream49(value: AudioStream)
        get stream50(): AudioStream
        set stream50(value: AudioStream)
        get stream51(): AudioStream
        set stream51(value: AudioStream)
        get stream52(): AudioStream
        set stream52(value: AudioStream)
        get stream53(): AudioStream
        set stream53(value: AudioStream)
        get stream54(): AudioStream
        set stream54(value: AudioStream)
        get stream55(): AudioStream
        set stream55(value: AudioStream)
        get stream56(): AudioStream
        set stream56(value: AudioStream)
        get stream57(): AudioStream
        set stream57(value: AudioStream)
        get stream58(): AudioStream
        set stream58(value: AudioStream)
        get stream59(): AudioStream
        set stream59(value: AudioStream)
        get stream60(): AudioStream
        set stream60(value: AudioStream)
        get stream61(): AudioStream
        set stream61(value: AudioStream)
        get stream62(): AudioStream
        set stream62(value: AudioStream)
        get stream63(): AudioStream
        set stream63(value: AudioStream)
    }
    /** AudioStream that lets the user play custom streams at any time from code, simultaneously using a single player.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audiostreampolyphonic.html  
     */
    class AudioStreamPolyphonic extends AudioStream {
        constructor(identifier?: any)
        /** Maximum amount of simultaneous streams that can be played. */
        get polyphony(): int64
        set polyphony(value: int64)
    }
    namespace AudioStreamRandomizer {
        enum PlaybackMode {
            PlaybackRandomNoRepeats = 0,
            PlaybackRandom = 1,
            PlaybackSequential = 2,
        }
    }
    /** Wraps a pool of audio streams with pitch and volume shifting.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audiostreamrandomizer.html  
     */
    class AudioStreamRandomizer extends AudioStream {
        /** Pick a stream at random according to the probability weights chosen for each stream, but avoid playing the same stream twice in a row whenever possible. If only 1 sound is present in the pool, the same sound will always play, effectively allowing repeats to occur. */
        static readonly PLAYBACK_RANDOM_NO_REPEATS = 0
        
        /** Pick a stream at random according to the probability weights chosen for each stream. If only 1 sound is present in the pool, the same sound will always play. */
        static readonly PLAYBACK_RANDOM = 1
        
        /** Play streams in the order they appear in the stream pool. If only 1 sound is present in the pool, the same sound will always play. */
        static readonly PLAYBACK_SEQUENTIAL = 2
        constructor(identifier?: any)
        addStream(index: int64, stream: AudioStream, weight: float64 = 1): void
        moveStream(indexFrom: int64, indexTo: int64): void
        removeStream(index: int64): void
        setStream(index: int64, stream: AudioStream): void
        getStream(index: int64): AudioStream
        setStreamProbabilityWeight(index: int64, weight: float64): void
        getStreamProbabilityWeight(index: int64): float64
        get playbackMode(): int64
        set playbackMode(value: int64)
        get randomPitch(): float64
        set randomPitch(value: float64)
        get randomVolumeOffsetDb(): float64
        set randomVolumeOffsetDb(value: float64)
        get streamsCount(): int64
        set streamsCount(value: int64)
    }
    /** Stream that can be fitted with sub-streams, which will be played in-sync.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_audiostreamsynchronized.html  
     */
    class AudioStreamSynchronized extends AudioStream {
        /** Maximum amount of streams that can be synchronized. */
        static readonly MAX_STREAMS = 32
        constructor(identifier?: any)
        setSyncStream(streamIndex: int64, audioStream: AudioStream): void
        getSyncStream(streamIndex: int64): AudioStream
        setSyncStreamVolume(streamIndex: int64, volumeDb: float64): void
        getSyncStreamVolume(streamIndex: int64): float64
        get streamCount(): any /*Streams,stream_,unfoldable,page_size=999,add_button_text=Add Stream*/
        set streamCount(value: any /*Streams,stream_,unfoldable,page_size=999,add_button_text=Add Stream*/)
        get "stream0/stream"(): AudioStream
        set "stream0/stream"(value: AudioStream)
        get "stream0/volume"(): float64
        set "stream0/volume"(value: float64)
        get "stream1/stream"(): AudioStream
        set "stream1/stream"(value: AudioStream)
        get "stream1/volume"(): float64
        set "stream1/volume"(value: float64)
        get "stream2/stream"(): AudioStream
        set "stream2/stream"(value: AudioStream)
        get "stream2/volume"(): float64
        set "stream2/volume"(value: float64)
        get "stream3/stream"(): AudioStream
        set "stream3/stream"(value: AudioStream)
        get "stream3/volume"(): float64
        set "stream3/volume"(value: float64)
        get "stream4/stream"(): AudioStream
        set "stream4/stream"(value: AudioStream)
        get "stream4/volume"(): float64
        set "stream4/volume"(value: float64)
        get "stream5/stream"(): AudioStream
        set "stream5/stream"(value: AudioStream)
        get "stream5/volume"(): float64
        set "stream5/volume"(value: float64)
        get "stream6/stream"(): AudioStream
        set "stream6/stream"(value: AudioStream)
        get "stream6/volume"(): float64
        set "stream6/volume"(value: float64)
        get "stream7/stream"(): AudioStream
        set "stream7/stream"(value: AudioStream)
        get "stream7/volume"(): float64
        set "stream7/volume"(value: float64)
        get "stream8/stream"(): AudioStream
        set "stream8/stream"(value: AudioStream)
        get "stream8/volume"(): float64
        set "stream8/volume"(value: float64)
        get "stream9/stream"(): AudioStream
        set "stream9/stream"(value: AudioStream)
        get "stream9/volume"(): float64
        set "stream9/volume"(value: float64)
        get "stream10/stream"(): AudioStream
        set "stream10/stream"(value: AudioStream)
        get "stream10/volume"(): float64
        set "stream10/volume"(value: float64)
        get "stream11/stream"(): AudioStream
        set "stream11/stream"(value: AudioStream)
        get "stream11/volume"(): float64
        set "stream11/volume"(value: float64)
        get "stream12/stream"(): AudioStream
        set "stream12/stream"(value: AudioStream)
        get "stream12/volume"(): float64
        set "stream12/volume"(value: float64)
        get "stream13/stream"(): AudioStream
        set "stream13/stream"(value: AudioStream)
        get "stream13/volume"(): float64
        set "stream13/volume"(value: float64)
        get "stream14/stream"(): AudioStream
        set "stream14/stream"(value: AudioStream)
        get "stream14/volume"(): float64
        set "stream14/volume"(value: float64)
        get "stream15/stream"(): AudioStream
        set "stream15/stream"(value: AudioStream)
        get "stream15/volume"(): float64
        set "stream15/volume"(value: float64)
        get "stream16/stream"(): AudioStream
        set "stream16/stream"(value: AudioStream)
        get "stream16/volume"(): float64
        set "stream16/volume"(value: float64)
        get "stream17/stream"(): AudioStream
        set "stream17/stream"(value: AudioStream)
        get "stream17/volume"(): float64
        set "stream17/volume"(value: float64)
        get "stream18/stream"(): AudioStream
        set "stream18/stream"(value: AudioStream)
        get "stream18/volume"(): float64
        set "stream18/volume"(value: float64)
        get "stream19/stream"(): AudioStream
        set "stream19/stream"(value: AudioStream)
        get "stream19/volume"(): float64
        set "stream19/volume"(value: float64)
        get "stream20/stream"(): AudioStream
        set "stream20/stream"(value: AudioStream)
        get "stream20/volume"(): float64
        set "stream20/volume"(value: float64)
        get "stream21/stream"(): AudioStream
        set "stream21/stream"(value: AudioStream)
        get "stream21/volume"(): float64
        set "stream21/volume"(value: float64)
        get "stream22/stream"(): AudioStream
        set "stream22/stream"(value: AudioStream)
        get "stream22/volume"(): float64
        set "stream22/volume"(value: float64)
        get "stream23/stream"(): AudioStream
        set "stream23/stream"(value: AudioStream)
        get "stream23/volume"(): float64
        set "stream23/volume"(value: float64)
        get "stream24/stream"(): AudioStream
        set "stream24/stream"(value: AudioStream)
        get "stream24/volume"(): float64
        set "stream24/volume"(value: float64)
        get "stream25/stream"(): AudioStream
        set "stream25/stream"(value: AudioStream)
        get "stream25/volume"(): float64
        set "stream25/volume"(value: float64)
        get "stream26/stream"(): AudioStream
        set "stream26/stream"(value: AudioStream)
        get "stream26/volume"(): float64
        set "stream26/volume"(value: float64)
        get "stream27/stream"(): AudioStream
        set "stream27/stream"(value: AudioStream)
        get "stream27/volume"(): float64
        set "stream27/volume"(value: float64)
        get "stream28/stream"(): AudioStream
        set "stream28/stream"(value: AudioStream)
        get "stream28/volume"(): float64
        set "stream28/volume"(value: float64)
        get "stream29/stream"(): AudioStream
        set "stream29/stream"(value: AudioStream)
        get "stream29/volume"(): float64
        set "stream29/volume"(value: float64)
        get "stream30/stream"(): AudioStream
        set "stream30/stream"(value: AudioStream)
        get "stream30/volume"(): float64
        set "stream30/volume"(value: float64)
        get "stream31/stream"(): AudioStream
        set "stream31/stream"(value: AudioStream)
        get "stream31/volume"(): float64
        set "stream31/volume"(value: float64)
    }
    namespace AudioStreamWav {
        enum Format {
            Format8Bits = 0,
            Format16Bits = 1,
            FormatImaAdpcm = 2,
            FormatQoa = 3,
        }
        enum LoopMode {
            LoopDisabled = 0,
            LoopForward = 1,
            LoopPingpong = 2,
            LoopBackward = 3,
        }
    }
    class AudioStreamWav extends AudioStream {
        static readonly FORMAT_8_BITS = 0
        static readonly FORMAT_16_BITS = 1
        static readonly FORMAT_IMA_ADPCM = 2
        static readonly FORMAT_QOA = 3
        static readonly LOOP_DISABLED = 0
        static readonly LOOP_FORWARD = 1
        static readonly LOOP_PINGPONG = 2
        static readonly LOOP_BACKWARD = 3
        constructor(identifier?: any)
        static loadFromBuffer(streamData: PackedByteArray | byte[] | ArrayBuffer, options: GDictionary = new GDictionary()): any /*AudioStreamWAV*/
        static loadFromFile(path: string, options: GDictionary = new GDictionary()): any /*AudioStreamWAV*/
        saveToWav(path: string): GError
        get data(): PackedByteArray
        set data(value: PackedByteArray | byte[] | ArrayBuffer)
        get format(): int64
        set format(value: int64)
        get loopMode(): int64
        set loopMode(value: int64)
        get loopBegin(): int64
        set loopBegin(value: int64)
        get loopEnd(): int64
        set loopEnd(value: int64)
        get mixRate(): int64
        set mixRate(value: int64)
        get stereo(): boolean
        set stereo(value: boolean)
    }
    namespace BackBufferCopy {
        enum CopyMode {
            CopyModeDisabled = 0,
            CopyModeRect = 1,
            CopyModeViewport = 2,
        }
    }
    /** A node that copies a region of the screen to a buffer for access in shader code.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_backbuffercopy.html  
     */
    class BackBufferCopy<Map extends Record<string, Node> = {}> extends Node2D<Map> {
        /** Disables the buffering mode. This means the [BackBufferCopy] node will directly use the portion of screen it covers. */
        static readonly COPY_MODE_DISABLED = 0
        
        /** [BackBufferCopy] buffers a rectangular region. */
        static readonly COPY_MODE_RECT = 1
        
        /** [BackBufferCopy] buffers the entire screen. */
        static readonly COPY_MODE_VIEWPORT = 2
        constructor(identifier?: any)
        get copyMode(): int64
        set copyMode(value: int64)
        
        /** The area covered by the [BackBufferCopy]. Only used if [member copy_mode] is [constant COPY_MODE_RECT]. */
        get rect(): Rect2
        set rect(value: Rect2)
    }
    namespace BaseButton {
        enum DrawMode {
            DrawNormal = 0,
            DrawPressed = 1,
            DrawHover = 2,
            DrawDisabled = 3,
            DrawHoverPressed = 4,
        }
        enum ActionMode {
            ActionModeButtonPress = 0,
            ActionModeButtonRelease = 1,
        }
    }
    /** Abstract base class for GUI buttons.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_basebutton.html  
     */
    class BaseButton<Map extends Record<string, Node> = {}> extends Control<Map> {
        /** The normal state (i.e. not pressed, not hovered, not toggled and enabled) of buttons. */
        static readonly DRAW_NORMAL = 0
        
        /** The state of buttons are pressed. */
        static readonly DRAW_PRESSED = 1
        
        /** The state of buttons are hovered. */
        static readonly DRAW_HOVER = 2
        
        /** The state of buttons are disabled. */
        static readonly DRAW_DISABLED = 3
        
        /** The state of buttons are both hovered and pressed. */
        static readonly DRAW_HOVER_PRESSED = 4
        
        /** Require just a press to consider the button clicked. */
        static readonly ACTION_MODE_BUTTON_PRESS = 0
        
        /** Require a press and a subsequent release before considering the button clicked. */
        static readonly ACTION_MODE_BUTTON_RELEASE = 1
        constructor(identifier?: any)
        
        /** Called when the button is pressed. If you need to know the button's pressed state (and [member toggle_mode] is active), use [method _toggled] instead. */
        /* gdvirtual */ _pressed(): void
        
        /** Called when the button is toggled (only if [member toggle_mode] is active). */
        /* gdvirtual */ _toggled(toggledOn: boolean): void
        setPressedNoSignal(pressed: boolean): void
        isHovered(): boolean
        getDrawMode(): BaseButton.DrawMode
        
        /** If `true`, the button is in disabled state and can't be clicked or toggled. */
        get disabled(): boolean
        set disabled(value: boolean)
        get toggleMode(): boolean
        set toggleMode(value: boolean)
        get buttonPressed(): boolean
        set buttonPressed(value: boolean)
        get actionMode(): int64
        set actionMode(value: int64)
        get buttonMask(): int64
        set buttonMask(value: int64)
        get keepPressedOutside(): boolean
        set keepPressedOutside(value: boolean)
        get buttonGroup(): ButtonGroup
        set buttonGroup(value: ButtonGroup)
        
        /** [Shortcut] associated to the button. */
        get shortcut(): Shortcut
        set shortcut(value: Shortcut)
        get shortcutFeedback(): boolean
        set shortcutFeedback(value: boolean)
        get shortcutInTooltip(): boolean
        set shortcutInTooltip(value: boolean)
        
        /** Emitted when the button is toggled or pressed. This is on [signal button_down] if [member action_mode] is [constant ACTION_MODE_BUTTON_PRESS] and on [signal button_up] otherwise.  
         *  If you need to know the button's pressed state (and [member toggle_mode] is active), use [signal toggled] instead.  
         */
        readonly pressed: Signal<() => void>
        readonly buttonUp: Signal<() => void>
        readonly buttonDown: Signal<() => void>
        
        /** Emitted when the button was just toggled between pressed and normal states (only if [member toggle_mode] is active). The new state is contained in the [param toggled_on] argument. */
        readonly toggled: Signal<(toggledOn: boolean) => void>
    }
    namespace BaseMaterial3D {
        enum TextureParam {
            TextureAlbedo = 0,
            TextureMetallic = 1,
            TextureRoughness = 2,
            TextureEmission = 3,
            TextureNormal = 4,
            TextureRim = 5,
            TextureClearcoat = 6,
            TextureFlowmap = 7,
            TextureAmbientOcclusion = 8,
            TextureHeightmap = 9,
            TextureSubsurfaceScattering = 10,
            TextureSubsurfaceTransmittance = 11,
            TextureBacklight = 12,
            TextureRefraction = 13,
            TextureDetailMask = 14,
            TextureDetailAlbedo = 15,
            TextureDetailNormal = 16,
            TextureOrm = 17,
            TextureMax = 18,
        }
        enum TextureFilter {
            TextureFilterNearest = 0,
            TextureFilterLinear = 1,
            TextureFilterNearestWithMipmaps = 2,
            TextureFilterLinearWithMipmaps = 3,
            TextureFilterNearestWithMipmapsAnisotropic = 4,
            TextureFilterLinearWithMipmapsAnisotropic = 5,
            TextureFilterMax = 6,
        }
        enum DetailUV {
            DetailUV1 = 0,
            DetailUV2 = 1,
        }
        enum Transparency {
            TransparencyDisabled = 0,
            TransparencyAlpha = 1,
            TransparencyAlphaScissor = 2,
            TransparencyAlphaHash = 3,
            TransparencyAlphaDepthPrePass = 4,
            TransparencyMax = 5,
        }
        enum ShadingMode {
            ShadingModeUnshaded = 0,
            ShadingModePerPixel = 1,
            ShadingModePerVertex = 2,
            ShadingModeMax = 3,
        }
        enum Feature {
            FeatureEmission = 0,
            FeatureNormalMapping = 1,
            FeatureRim = 2,
            FeatureClearcoat = 3,
            FeatureAnisotropy = 4,
            FeatureAmbientOcclusion = 5,
            FeatureHeightMapping = 6,
            FeatureSubsurfaceScattering = 7,
            FeatureSubsurfaceTransmittance = 8,
            FeatureBacklight = 9,
            FeatureRefraction = 10,
            FeatureDetail = 11,
            FeatureMax = 12,
        }
        enum BlendMode {
            BlendModeMix = 0,
            BlendModeAdd = 1,
            BlendModeSub = 2,
            BlendModeMul = 3,
            BlendModePremultAlpha = 4,
        }
        enum AlphaAntiAliasing {
            AlphaAntialiasingOff = 0,
            AlphaAntialiasingAlphaToCoverage = 1,
            AlphaAntialiasingAlphaToCoverageAndToOne = 2,
        }
        enum DepthDrawMode {
            DepthDrawOpaqueOnly = 0,
            DepthDrawAlways = 1,
            DepthDrawDisabled = 2,
        }
        enum CullMode {
            CullBack = 0,
            CullFront = 1,
            CullDisabled = 2,
        }
        enum Flags {
            FlagDisableDepthTest = 0,
            FlagAlbedoFromVertexColor = 1,
            FlagSrgbVertexColor = 2,
            FlagUsePointSize = 3,
            FlagFixedSize = 4,
            FlagBillboardKeepScale = 5,
            FlagUv1UseTriplanar = 6,
            FlagUV2UseTriplanar = 7,
            FlagUv1UseWorldTriplanar = 8,
            FlagUV2UseWorldTriplanar = 9,
            FlagAOOnUV2 = 10,
            FlagEmissionOnUV2 = 11,
            FlagAlbedoTextureForceSrgb = 12,
            FlagDontReceiveShadows = 13,
            FlagDisableAmbientLight = 14,
            FlagUseShadowToOpacity = 15,
            FlagUseTextureRepeat = 16,
            FlagInvertHeightmap = 17,
            FlagSubsurfaceModeSkin = 18,
            FlagParticleTrailsMode = 19,
            FlagAlbedoTextureMsdf = 20,
            FlagDisableFog = 21,
            FlagMax = 22,
        }
        enum DiffuseMode {
            DiffuseBurley = 0,
            DiffuseLambert = 1,
            DiffuseLambertWrap = 2,
            DiffuseToon = 3,
        }
        enum SpecularMode {
            SpecularSchlickGgx = 0,
            SpecularToon = 1,
            SpecularDisabled = 2,
        }
        enum BillboardMode {
            BillboardDisabled = 0,
            BillboardEnabled = 1,
            BillboardFixedY = 2,
            BillboardParticles = 3,
        }
        enum TextureChannel {
            TextureChannelRed = 0,
            TextureChannelGreen = 1,
            TextureChannelBlue = 2,
            TextureChannelAlpha = 3,
            TextureChannelGrayscale = 4,
        }
        enum EmissionOperator {
            EmissionOpAdd = 0,
            EmissionOpMultiply = 1,
        }
        enum DistanceFadeMode {
            DistanceFadeDisabled = 0,
            DistanceFadePixelAlpha = 1,
            DistanceFadePixelDither = 2,
            DistanceFadeObjectDither = 3,
        }
    }
    /** Abstract base class for defining the 3D rendering properties of meshes.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_basematerial3d.html  
     */
    class BaseMaterial3D extends Material {
        /** Texture specifying per-pixel color. */
        static readonly TEXTURE_ALBEDO = 0
        
        /** Texture specifying per-pixel metallic value. */
        static readonly TEXTURE_METALLIC = 1
        
        /** Texture specifying per-pixel roughness value. */
        static readonly TEXTURE_ROUGHNESS = 2
        
        /** Texture specifying per-pixel emission color. */
        static readonly TEXTURE_EMISSION = 3
        
        /** Texture specifying per-pixel normal vector. */
        static readonly TEXTURE_NORMAL = 4
        
        /** Texture specifying per-pixel rim value. */
        static readonly TEXTURE_RIM = 5
        
        /** Texture specifying per-pixel clearcoat value. */
        static readonly TEXTURE_CLEARCOAT = 6
        
        /** Texture specifying per-pixel flowmap direction for use with [member anisotropy]. */
        static readonly TEXTURE_FLOWMAP = 7
        
        /** Texture specifying per-pixel ambient occlusion value. */
        static readonly TEXTURE_AMBIENT_OCCLUSION = 8
        
        /** Texture specifying per-pixel height. */
        static readonly TEXTURE_HEIGHTMAP = 9
        
        /** Texture specifying per-pixel subsurface scattering. */
        static readonly TEXTURE_SUBSURFACE_SCATTERING = 10
        
        /** Texture specifying per-pixel transmittance for subsurface scattering. */
        static readonly TEXTURE_SUBSURFACE_TRANSMITTANCE = 11
        
        /** Texture specifying per-pixel backlight color. */
        static readonly TEXTURE_BACKLIGHT = 12
        
        /** Texture specifying per-pixel refraction strength. */
        static readonly TEXTURE_REFRACTION = 13
        
        /** Texture specifying per-pixel detail mask blending value. */
        static readonly TEXTURE_DETAIL_MASK = 14
        
        /** Texture specifying per-pixel detail color. */
        static readonly TEXTURE_DETAIL_ALBEDO = 15
        
        /** Texture specifying per-pixel detail normal. */
        static readonly TEXTURE_DETAIL_NORMAL = 16
        
        /** Texture holding ambient occlusion, roughness, and metallic. */
        static readonly TEXTURE_ORM = 17
        
        /** Represents the size of the [enum TextureParam] enum. */
        static readonly TEXTURE_MAX = 18
        
        /** The texture filter reads from the nearest pixel only. This makes the texture look pixelated from up close, and grainy from a distance (due to mipmaps not being sampled). */
        static readonly TEXTURE_FILTER_NEAREST = 0
        
        /** The texture filter blends between the nearest 4 pixels. This makes the texture look smooth from up close, and grainy from a distance (due to mipmaps not being sampled). */
        static readonly TEXTURE_FILTER_LINEAR = 1
        
        /** The texture filter reads from the nearest pixel and blends between the nearest 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`). This makes the texture look pixelated from up close, and smooth from a distance. */
        static readonly TEXTURE_FILTER_NEAREST_WITH_MIPMAPS = 2
        
        /** The texture filter blends between the nearest 4 pixels and between the nearest 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`). This makes the texture look smooth from up close, and smooth from a distance. */
        static readonly TEXTURE_FILTER_LINEAR_WITH_MIPMAPS = 3
        
        /** The texture filter reads from the nearest pixel and blends between 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`) based on the angle between the surface and the camera view. This makes the texture look pixelated from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting [member ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level]. */
        static readonly TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC = 4
        
        /** The texture filter blends between the nearest 4 pixels and blends between 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`) based on the angle between the surface and the camera view. This makes the texture look smooth from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting [member ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level]. */
        static readonly TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC = 5
        
        /** Represents the size of the [enum TextureFilter] enum. */
        static readonly TEXTURE_FILTER_MAX = 6
        
        /** Use `UV` with the detail texture. */
        static readonly DETAIL_UV_1 = 0
        
        /** Use `UV2` with the detail texture. */
        static readonly DETAIL_UV_2 = 1
        
        /** The material will not use transparency. This is the fastest to render. */
        static readonly TRANSPARENCY_DISABLED = 0
        
        /** The material will use the texture's alpha values for transparency. This is the slowest to render, and disables shadow casting. */
        static readonly TRANSPARENCY_ALPHA = 1
        
        /** The material will cut off all values below a threshold, the rest will remain opaque. The opaque portions will be rendered in the depth prepass. This is faster to render than alpha blending, but slower than opaque rendering. This also supports casting shadows. */
        static readonly TRANSPARENCY_ALPHA_SCISSOR = 2
        
        /** The material will cut off all values below a spatially-deterministic threshold, the rest will remain opaque. This is faster to render than alpha blending, but slower than opaque rendering. This also supports casting shadows. Alpha hashing is suited for hair rendering. */
        static readonly TRANSPARENCY_ALPHA_HASH = 3
        
        /** The material will use the texture's alpha value for transparency, but will discard fragments with an alpha of less than 0.99 during the depth prepass and fragments with an alpha less than 0.1 during the shadow pass. This also supports casting shadows. */
        static readonly TRANSPARENCY_ALPHA_DEPTH_PRE_PASS = 4
        
        /** Represents the size of the [enum Transparency] enum. */
        static readonly TRANSPARENCY_MAX = 5
        
        /** The object will not receive shadows. This is the fastest to render, but it disables all interactions with lights. */
        static readonly SHADING_MODE_UNSHADED = 0
        
        /** The object will be shaded per pixel. Useful for realistic shading effects. */
        static readonly SHADING_MODE_PER_PIXEL = 1
        
        /** The object will be shaded per vertex. Useful when you want cheaper shaders and do not care about visual quality. */
        static readonly SHADING_MODE_PER_VERTEX = 2
        
        /** Represents the size of the [enum ShadingMode] enum. */
        static readonly SHADING_MODE_MAX = 3
        
        /** Constant for setting [member emission_enabled]. */
        static readonly FEATURE_EMISSION = 0
        
        /** Constant for setting [member normal_enabled]. */
        static readonly FEATURE_NORMAL_MAPPING = 1
        
        /** Constant for setting [member rim_enabled]. */
        static readonly FEATURE_RIM = 2
        
        /** Constant for setting [member clearcoat_enabled]. */
        static readonly FEATURE_CLEARCOAT = 3
        
        /** Constant for setting [member anisotropy_enabled]. */
        static readonly FEATURE_ANISOTROPY = 4
        
        /** Constant for setting [member ao_enabled]. */
        static readonly FEATURE_AMBIENT_OCCLUSION = 5
        
        /** Constant for setting [member heightmap_enabled]. */
        static readonly FEATURE_HEIGHT_MAPPING = 6
        
        /** Constant for setting [member subsurf_scatter_enabled]. */
        static readonly FEATURE_SUBSURFACE_SCATTERING = 7
        
        /** Constant for setting [member subsurf_scatter_transmittance_enabled]. */
        static readonly FEATURE_SUBSURFACE_TRANSMITTANCE = 8
        
        /** Constant for setting [member backlight_enabled]. */
        static readonly FEATURE_BACKLIGHT = 9
        
        /** Constant for setting [member refraction_enabled]. */
        static readonly FEATURE_REFRACTION = 10
        
        /** Constant for setting [member detail_enabled]. */
        static readonly FEATURE_DETAIL = 11
        
        /** Represents the size of the [enum Feature] enum. */
        static readonly FEATURE_MAX = 12
        
        /** Default blend mode. The color of the object is blended over the background based on the object's alpha value. */
        static readonly BLEND_MODE_MIX = 0
        
        /** The color of the object is added to the background. */
        static readonly BLEND_MODE_ADD = 1
        
        /** The color of the object is subtracted from the background. */
        static readonly BLEND_MODE_SUB = 2
        
        /** The color of the object is multiplied by the background. */
        static readonly BLEND_MODE_MUL = 3
        
        /** The color of the object is added to the background and the alpha channel is used to mask out the background. This is effectively a hybrid of the blend mix and add modes, useful for effects like fire where you want the flame to add but the smoke to mix. By default, this works with unshaded materials using premultiplied textures. For shaded materials, use the `PREMUL_ALPHA_FACTOR` built-in so that lighting can be modulated as well. */
        static readonly BLEND_MODE_PREMULT_ALPHA = 4
        
        /** Disables Alpha AntiAliasing for the material. */
        static readonly ALPHA_ANTIALIASING_OFF = 0
        
        /** Enables AlphaToCoverage. Alpha values in the material are passed to the AntiAliasing sample mask. */
        static readonly ALPHA_ANTIALIASING_ALPHA_TO_COVERAGE = 1
        
        /** Enables AlphaToCoverage and forces all non-zero alpha values to `1`. Alpha values in the material are passed to the AntiAliasing sample mask. */
        static readonly ALPHA_ANTIALIASING_ALPHA_TO_COVERAGE_AND_TO_ONE = 2
        
        /** Default depth draw mode. Depth is drawn only for opaque objects during the opaque prepass (if any) and during the opaque pass. */
        static readonly DEPTH_DRAW_OPAQUE_ONLY = 0
        
        /** Objects will write to depth during the opaque and the transparent passes. Transparent objects that are close to the camera may obscure other transparent objects behind them.  
         *      
         *  **Note:** This does not influence whether transparent objects are included in the depth prepass or not. For that, see [enum Transparency].  
         */
        static readonly DEPTH_DRAW_ALWAYS = 1
        
        /** Objects will not write their depth to the depth buffer, even during the depth prepass (if enabled). */
        static readonly DEPTH_DRAW_DISABLED = 2
        
        /** Default cull mode. The back of the object is culled when not visible. Back face triangles will be culled when facing the camera. This results in only the front side of triangles being drawn. For closed-surface meshes, this means that only the exterior of the mesh will be visible. */
        static readonly CULL_BACK = 0
        
        /** Front face triangles will be culled when facing the camera. This results in only the back side of triangles being drawn. For closed-surface meshes, this means that the interior of the mesh will be drawn instead of the exterior. */
        static readonly CULL_FRONT = 1
        
        /** No face culling is performed; both the front face and back face will be visible. */
        static readonly CULL_DISABLED = 2
        
        /** Disables the depth test, so this object is drawn on top of all others drawn before it. This puts the object in the transparent draw pass where it is sorted based on distance to camera. Objects drawn after it in the draw order may cover it. This also disables writing to depth. */
        static readonly FLAG_DISABLE_DEPTH_TEST = 0
        
        /** Set `ALBEDO` to the per-vertex color specified in the mesh. */
        static readonly FLAG_ALBEDO_FROM_VERTEX_COLOR = 1
        
        /** Vertex colors are considered to be stored in sRGB color space and are converted to linear color space during rendering. See also [member vertex_color_is_srgb].  
         *      
         *  **Note:** Only effective when using the Forward+ and Mobile rendering methods.  
         */
        static readonly FLAG_SRGB_VERTEX_COLOR = 2
        
        /** Uses point size to alter the size of primitive points. Also changes the albedo texture lookup to use `POINT_COORD` instead of `UV`. */
        static readonly FLAG_USE_POINT_SIZE = 3
        
        /** Object is scaled by depth so that it always appears the same size on screen. */
        static readonly FLAG_FIXED_SIZE = 4
        
        /** Shader will keep the scale set for the mesh. Otherwise the scale is lost when billboarding. Only applies when [member billboard_mode] is [constant BILLBOARD_ENABLED]. */
        static readonly FLAG_BILLBOARD_KEEP_SCALE = 5
        
        /** Use triplanar texture lookup for all texture lookups that would normally use `UV`. */
        static readonly FLAG_UV1_USE_TRIPLANAR = 6
        
        /** Use triplanar texture lookup for all texture lookups that would normally use `UV2`. */
        static readonly FLAG_UV2_USE_TRIPLANAR = 7
        
        /** Use triplanar texture lookup for all texture lookups that would normally use `UV`. */
        static readonly FLAG_UV1_USE_WORLD_TRIPLANAR = 8
        
        /** Use triplanar texture lookup for all texture lookups that would normally use `UV2`. */
        static readonly FLAG_UV2_USE_WORLD_TRIPLANAR = 9
        
        /** Use `UV2` coordinates to look up from the [member ao_texture]. */
        static readonly FLAG_AO_ON_UV2 = 10
        
        /** Use `UV2` coordinates to look up from the [member emission_texture]. */
        static readonly FLAG_EMISSION_ON_UV2 = 11
        
        /** Forces the shader to convert albedo from sRGB space to linear space. See also [member albedo_texture_force_srgb]. */
        static readonly FLAG_ALBEDO_TEXTURE_FORCE_SRGB = 12
        
        /** Disables receiving shadows from other objects. */
        static readonly FLAG_DONT_RECEIVE_SHADOWS = 13
        
        /** Disables receiving ambient light. */
        static readonly FLAG_DISABLE_AMBIENT_LIGHT = 14
        
        /** Enables the shadow to opacity feature. */
        static readonly FLAG_USE_SHADOW_TO_OPACITY = 15
        
        /** Enables the texture to repeat when UV coordinates are outside the 0-1 range. If using one of the linear filtering modes, this can result in artifacts at the edges of a texture when the sampler filters across the edges of the texture. */
        static readonly FLAG_USE_TEXTURE_REPEAT = 16
        
        /** Invert values read from a depth texture to convert them to height values (heightmap). */
        static readonly FLAG_INVERT_HEIGHTMAP = 17
        
        /** Enables the skin mode for subsurface scattering which is used to improve the look of subsurface scattering when used for human skin. */
        static readonly FLAG_SUBSURFACE_MODE_SKIN = 18
        
        /** Enables parts of the shader required for [GPUParticles3D] trails to function. This also requires using a mesh with appropriate skinning, such as [RibbonTrailMesh] or [TubeTrailMesh]. Enabling this feature outside of materials used in [GPUParticles3D] meshes will break material rendering. */
        static readonly FLAG_PARTICLE_TRAILS_MODE = 19
        
        /** Enables multichannel signed distance field rendering shader. */
        static readonly FLAG_ALBEDO_TEXTURE_MSDF = 20
        
        /** Disables receiving depth-based or volumetric fog. */
        static readonly FLAG_DISABLE_FOG = 21
        
        /** Represents the size of the [enum Flags] enum. */
        static readonly FLAG_MAX = 22
        
        /** Default diffuse scattering algorithm. */
        static readonly DIFFUSE_BURLEY = 0
        
        /** Diffuse scattering ignores roughness. */
        static readonly DIFFUSE_LAMBERT = 1
        
        /** Extends Lambert to cover more than 90 degrees when roughness increases. */
        static readonly DIFFUSE_LAMBERT_WRAP = 2
        
        /** Uses a hard cut for lighting, with smoothing affected by roughness. */
        static readonly DIFFUSE_TOON = 3
        
        /** Default specular blob. */
        static readonly SPECULAR_SCHLICK_GGX = 0
        
        /** Toon blob which changes size based on roughness. */
        static readonly SPECULAR_TOON = 1
        
        /** No specular blob. This is slightly faster to render than other specular modes. */
        static readonly SPECULAR_DISABLED = 2
        
        /** Billboard mode is disabled. */
        static readonly BILLBOARD_DISABLED = 0
        
        /** The object's Z axis will always face the camera. */
        static readonly BILLBOARD_ENABLED = 1
        
        /** The object's X axis will always face the camera. */
        static readonly BILLBOARD_FIXED_Y = 2
        
        /** Used for particle systems when assigned to [GPUParticles3D] and [CPUParticles3D] nodes (flipbook animation). Enables `particles_anim_*` properties.  
         *  The [member ParticleProcessMaterial.anim_speed_min] or [member CPUParticles3D.anim_speed_min] should also be set to a value bigger than zero for the animation to play.  
         */
        static readonly BILLBOARD_PARTICLES = 3
        
        /** Used to read from the red channel of a texture. */
        static readonly TEXTURE_CHANNEL_RED = 0
        
        /** Used to read from the green channel of a texture. */
        static readonly TEXTURE_CHANNEL_GREEN = 1
        
        /** Used to read from the blue channel of a texture. */
        static readonly TEXTURE_CHANNEL_BLUE = 2
        
        /** Used to read from the alpha channel of a texture. */
        static readonly TEXTURE_CHANNEL_ALPHA = 3
        
        /** Used to read from the linear (non-perceptual) average of the red, green and blue channels of a texture. */
        static readonly TEXTURE_CHANNEL_GRAYSCALE = 4
        
        /** Adds the emission color to the color from the emission texture. */
        static readonly EMISSION_OP_ADD = 0
        
        /** Multiplies the emission color by the color from the emission texture. */
        static readonly EMISSION_OP_MULTIPLY = 1
        
        /** Do not use distance fade. */
        static readonly DISTANCE_FADE_DISABLED = 0
        
        /** Smoothly fades the object out based on each pixel's distance from the camera using the alpha channel. */
        static readonly DISTANCE_FADE_PIXEL_ALPHA = 1
        
        /** Smoothly fades the object out based on each pixel's distance from the camera using a dithering approach. Dithering discards pixels based on a set pattern to smoothly fade without enabling transparency. On certain hardware, this can be faster than [constant DISTANCE_FADE_PIXEL_ALPHA]. */
        static readonly DISTANCE_FADE_PIXEL_DITHER = 2
        
        /** Smoothly fades the object out based on the object's distance from the camera using a dithering approach. Dithering discards pixels based on a set pattern to smoothly fade without enabling transparency. On certain hardware, this can be faster than [constant DISTANCE_FADE_PIXEL_ALPHA] and [constant DISTANCE_FADE_PIXEL_DITHER]. */
        static readonly DISTANCE_FADE_OBJECT_DITHER = 3
        constructor(identifier?: any)
        setFlag(flag: BaseMaterial3D.Flags, enable: boolean): void
        getFlag(flag: BaseMaterial3D.Flags): boolean
        setFeature(feature: BaseMaterial3D.Feature, enable: boolean): void
        getFeature(feature: BaseMaterial3D.Feature): boolean
        setTexture(param: BaseMaterial3D.TextureParam, texture: Texture2D): void
        getTexture(param: BaseMaterial3D.TextureParam): Texture2D
        
        /** The material's transparency mode. Some transparency modes will disable shadow casting. Any transparency mode other than [constant TRANSPARENCY_DISABLED] has a greater performance impact compared to opaque rendering. See also [member blend_mode]. */
        get transparency(): int64
        set transparency(value: int64)
        get alphaScissorThreshold(): float64
        set alphaScissorThreshold(value: float64)
        get alphaHashScale(): float64
        set alphaHashScale(value: float64)
        get alphaAntialiasingMode(): int64
        set alphaAntialiasingMode(value: int64)
        get alphaAntialiasingEdge(): float64
        set alphaAntialiasingEdge(value: float64)
        get blendMode(): int64
        set blendMode(value: int64)
        get cullMode(): int64
        set cullMode(value: int64)
        get depthDrawMode(): int64
        set depthDrawMode(value: int64)
        get noDepthTest(): boolean
        set noDepthTest(value: boolean)
        get shadingMode(): int64
        set shadingMode(value: int64)
        get diffuseMode(): int64
        set diffuseMode(value: int64)
        get specularMode(): int64
        set specularMode(value: int64)
        get disableAmbientLight(): boolean
        set disableAmbientLight(value: boolean)
        get disableFog(): boolean
        set disableFog(value: boolean)
        get vertexColorUseAsAlbedo(): boolean
        set vertexColorUseAsAlbedo(value: boolean)
        get vertexColorIsSrgb(): boolean
        set vertexColorIsSrgb(value: boolean)
        get albedoColor(): Color
        set albedoColor(value: Color)
        get albedoTexture(): Texture2D
        set albedoTexture(value: Texture2D)
        get albedoTextureForceSrgb(): boolean
        set albedoTextureForceSrgb(value: boolean)
        get albedoTextureMsdf(): boolean
        set albedoTextureMsdf(value: boolean)
        get ormTexture(): Texture2D
        set ormTexture(value: Texture2D)
        
        /** A high value makes the material appear more like a metal. Non-metals use their albedo as the diffuse color and add diffuse to the specular reflection. With non-metals, the reflection appears on top of the albedo color. Metals use their albedo as a multiplier to the specular reflection and set the diffuse color to black resulting in a tinted reflection. Materials work better when fully metal or fully non-metal, values between `0` and `1` should only be used for blending between metal and non-metal sections. To alter the amount of reflection use [member roughness]. */
        get metallic(): float64
        set metallic(value: float64)
        get metallicSpecular(): float64
        set metallicSpecular(value: float64)
        get metallicTexture(): Texture2D
        set metallicTexture(value: Texture2D)
        get metallicTextureChannel(): int64
        set metallicTextureChannel(value: int64)
        
        /** Surface reflection. A value of `0` represents a perfect mirror while a value of `1` completely blurs the reflection. See also [member metallic]. */
        get roughness(): float64
        set roughness(value: float64)
        get roughnessTexture(): Texture2D
        set roughnessTexture(value: Texture2D)
        get roughnessTextureChannel(): int64
        set roughnessTextureChannel(value: int64)
        get emissionEnabled(): boolean
        set emissionEnabled(value: boolean)
        
        /** The emitted light's color. See [member emission_enabled]. */
        get emission(): Color
        set emission(value: Color)
        get emissionEnergyMultiplier(): float64
        set emissionEnergyMultiplier(value: float64)
        get emissionIntensity(): float64
        set emissionIntensity(value: float64)
        get emissionOperator(): int64
        set emissionOperator(value: int64)
        get emissionOnUV2(): boolean
        set emissionOnUV2(value: boolean)
        get emissionTexture(): Texture2D
        set emissionTexture(value: Texture2D)
        get normalEnabled(): boolean
        set normalEnabled(value: boolean)
        get normalScale(): float64
        set normalScale(value: float64)
        get normalTexture(): Texture2D
        set normalTexture(value: Texture2D)
        get rimEnabled(): boolean
        set rimEnabled(value: boolean)
        
        /** Sets the strength of the rim lighting effect. */
        get rim(): float64
        set rim(value: float64)
        get rimTint(): float64
        set rimTint(value: float64)
        get rimTexture(): Texture2D
        set rimTexture(value: Texture2D)
        get clearcoatEnabled(): boolean
        set clearcoatEnabled(value: boolean)
        
        /** Sets the strength of the clearcoat effect. Setting to `0` looks the same as disabling the clearcoat effect. */
        get clearcoat(): float64
        set clearcoat(value: float64)
        get clearcoatRoughness(): float64
        set clearcoatRoughness(value: float64)
        get clearcoatTexture(): Texture2D
        set clearcoatTexture(value: Texture2D)
        get anisotropyEnabled(): boolean
        set anisotropyEnabled(value: boolean)
        
        /** The strength of the anisotropy effect. This is multiplied by [member anisotropy_flowmap]'s alpha channel if a texture is defined there and the texture contains an alpha channel. */
        get anisotropy(): float64
        set anisotropy(value: float64)
        get anisotropyFlowmap(): Texture2D
        set anisotropyFlowmap(value: Texture2D)
        get aOEnabled(): boolean
        set aOEnabled(value: boolean)
        get aOLightAffect(): float64
        set aOLightAffect(value: float64)
        get aOTexture(): Texture2D
        set aOTexture(value: Texture2D)
        get aOOnUV2(): boolean
        set aOOnUV2(value: boolean)
        get aOTextureChannel(): int64
        set aOTextureChannel(value: int64)
        get heightmapEnabled(): boolean
        set heightmapEnabled(value: boolean)
        get heightmapScale(): float64
        set heightmapScale(value: float64)
        get heightmapDeepParallax(): boolean
        set heightmapDeepParallax(value: boolean)
        get heightmapMinLayers(): int64
        set heightmapMinLayers(value: int64)
        get heightmapMaxLayers(): int64
        set heightmapMaxLayers(value: int64)
        get heightmapFlipTangent(): boolean
        set heightmapFlipTangent(value: boolean)
        get heightmapFlipBinormal(): boolean
        set heightmapFlipBinormal(value: boolean)
        get heightmapTexture(): Texture2D
        set heightmapTexture(value: Texture2D)
        get heightmapFlipTexture(): boolean
        set heightmapFlipTexture(value: boolean)
        get subsurfScatterEnabled(): boolean
        set subsurfScatterEnabled(value: boolean)
        get subsurfScatterStrength(): float64
        set subsurfScatterStrength(value: float64)
        get subsurfScatterSkinMode(): boolean
        set subsurfScatterSkinMode(value: boolean)
        get subsurfScatterTexture(): Texture2D
        set subsurfScatterTexture(value: Texture2D)
        get subsurfScatterTransmittanceEnabled(): boolean
        set subsurfScatterTransmittanceEnabled(value: boolean)
        get subsurfScatterTransmittanceColor(): Color
        set subsurfScatterTransmittanceColor(value: Color)
        get subsurfScatterTransmittanceTexture(): Texture2D
        set subsurfScatterTransmittanceTexture(value: Texture2D)
        get subsurfScatterTransmittanceDepth(): float64
        set subsurfScatterTransmittanceDepth(value: float64)
        get subsurfScatterTransmittanceBoost(): float64
        set subsurfScatterTransmittanceBoost(value: float64)
        get backlightEnabled(): boolean
        set backlightEnabled(value: boolean)
        
        /** The color used by the backlight effect. Represents the light passing through an object. */
        get backlight(): Color
        set backlight(value: Color)
        get backlightTexture(): Texture2D
        set backlightTexture(value: Texture2D)
        get refractionEnabled(): boolean
        set refractionEnabled(value: boolean)
        get refractionScale(): float64
        set refractionScale(value: float64)
        get refractionTexture(): Texture2D
        set refractionTexture(value: Texture2D)
        get refractionTextureChannel(): int64
        set refractionTextureChannel(value: int64)
        get detailEnabled(): boolean
        set detailEnabled(value: boolean)
        get detailMask(): Texture2D
        set detailMask(value: Texture2D)
        get detailBlendMode(): int64
        set detailBlendMode(value: int64)
        get detailUVLayer(): int64
        set detailUVLayer(value: int64)
        get detailAlbedo(): Texture2D
        set detailAlbedo(value: Texture2D)
        get detailNormal(): Texture2D
        set detailNormal(value: Texture2D)
        get uv1Scale(): Vector3
        set uv1Scale(value: Vector3)
        get uv1Offset(): Vector3
        set uv1Offset(value: Vector3)
        get uv1Triplanar(): boolean
        set uv1Triplanar(value: boolean)
        get uv1TriplanarSharpness(): float64
        set uv1TriplanarSharpness(value: float64)
        get uv1WorldTriplanar(): boolean
        set uv1WorldTriplanar(value: boolean)
        get uV2Scale(): Vector3
        set uV2Scale(value: Vector3)
        get uV2Offset(): Vector3
        set uV2Offset(value: Vector3)
        get uV2Triplanar(): boolean
        set uV2Triplanar(value: boolean)
        get uV2TriplanarSharpness(): float64
        set uV2TriplanarSharpness(value: float64)
        get uV2WorldTriplanar(): boolean
        set uV2WorldTriplanar(value: boolean)
        get textureFilter(): int64
        set textureFilter(value: int64)
        get textureRepeat(): boolean
        set textureRepeat(value: boolean)
        get disableReceiveShadows(): boolean
        set disableReceiveShadows(value: boolean)
        get shadowToOpacity(): boolean
        set shadowToOpacity(value: boolean)
        get billboardMode(): int64
        set billboardMode(value: int64)
        get billboardKeepScale(): boolean
        set billboardKeepScale(value: boolean)
        get particlesAnimHFrames(): int64
        set particlesAnimHFrames(value: int64)
        get particlesAnimVFrames(): int64
        set particlesAnimVFrames(value: int64)
        get particlesAnimLoop(): boolean
        set particlesAnimLoop(value: boolean)
        
        /** If `true`, enables the vertex grow setting. This can be used to create mesh-based outlines using a second material pass and its [member cull_mode] set to [constant CULL_FRONT]. See also [member grow_amount].  
         *      
         *  **Note:** Vertex growth cannot create new vertices, which means that visible gaps may occur in sharp corners. This can be alleviated by designing the mesh to use smooth normals exclusively using [url=http://wiki.polycount.com/wiki/Face_weighted_normals]face weighted normals[/url] in the 3D authoring software. In this case, grow will be able to join every outline together, just like in the original mesh.  
         */
        get grow(): boolean
        set grow(value: boolean)
        get growAmount(): float64
        set growAmount(value: float64)
        get fixedSize(): boolean
        set fixedSize(value: boolean)
        get usePointSize(): boolean
        set usePointSize(value: boolean)
        get pointSize(): float64
        set pointSize(value: float64)
        get useParticleTrails(): boolean
        set useParticleTrails(value: boolean)
        get proximityFadeEnabled(): boolean
        set proximityFadeEnabled(value: boolean)
        get proximityFadeDistance(): float64
        set proximityFadeDistance(value: float64)
        get msdfPixelRange(): float64
        set msdfPixelRange(value: float64)
        get msdfOutlineSize(): float64
        set msdfOutlineSize(value: float64)
        get distanceFadeMode(): int64
        set distanceFadeMode(value: int64)
        get distanceFadeMinDistance(): float64
        set distanceFadeMinDistance(value: float64)
        get distanceFadeMaxDistance(): float64
        set distanceFadeMaxDistance(value: float64)
    }
    class Bitmap extends Resource {
        constructor(identifier?: any)
        create(size: Vector2I): void
        createFromImageAlpha(image: Image, threshold: float64 = 0.1): void
        setBitv(position: Vector2I, bit: boolean): void
        setBit(x: int64, y: int64, bit: boolean): void
        getBitv(position: Vector2I): boolean
        getBit(x: int64, y: int64): boolean
        setBitRect(rect: Rect2I, bit: boolean): void
        getTrueBitCount(): int64
        getSize(): Vector2I
        resize(newSize: Vector2I): void
        growMask(pixels: int64, rect: Rect2I): void
        convertToImage(): Image
        opaqueToPolygons(rect: Rect2I, epsilon: float64 = 2): GArray
        get data(): GDictionary
        set data(value: GDictionary)
    }
    /** A joint used with [Skeleton2D] to control and animate other nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_bone2d.html  
     */
    class Bone2D<Map extends Record<string, Node> = {}> extends Node2D<Map> {
        constructor(identifier?: any)
        applyRest(): void
        getSkeletonRest(): Transform2D
        getIndexInSkeleton(): int64
        setAutocalculateLengthAndAngle(autoCalculate: boolean): void
        getAutocalculateLengthAndAngle(): boolean
        setLength(length: float64): void
        getLength(): float64
        setBoneAngle(angle: float64): void
        getBoneAngle(): float64
        
        /** Rest transform of the bone. You can reset the node's transforms to this value using [method apply_rest]. */
        get rest(): Transform2D
        set rest(value: Transform2D)
    }
    /** А node that dynamically copies or overrides the 3D transform of a bone in its parent [Skeleton3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_boneattachment3d.html  
     */
    class BoneAttachment3D<Map extends Record<string, Node> = {}> extends Node3D<Map> {
        constructor(identifier?: any)
        getSkeleton(): Skeleton3D
        onSkeletonUpdate(): void
        setUseExternalSkeleton(useExternalSkeleton: boolean): void
        getUseExternalSkeleton(): boolean
        setExternalSkeleton(externalSkeleton: NodePath | string): void
        getExternalSkeleton(): NodePath
        get boneName(): StringName
        set boneName(value: StringName)
        get boneIdx(): int64
        set boneIdx(value: int64)
        get overridePose(): boolean
        set overridePose(value: boolean)
    }
    /** Describes a mapping of bone names for retargeting [Skeleton3D] into common names defined by a [SkeletonProfile].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_bonemap.html  
     */
    class BoneMap extends Resource {
        constructor(identifier?: any)
        getSkeletonBoneName(profileBoneName: StringName): StringName
        setSkeletonBoneName(profileBoneName: StringName, skeletonBoneName: StringName): void
        findProfileBoneName(skeletonBoneName: StringName): StringName
        
        /** A [SkeletonProfile] of the mapping target. Key names in the [BoneMap] are synchronized with it. */
        get profile(): SkeletonProfile
        set profile(value: SkeletonProfile)
        readonly boneMapUpdated: Signal<() => void>
        readonly profileUpdated: Signal<() => void>
    }
    namespace BoxContainer {
        enum AlignmentMode {
            AlignmentBegin = 0,
            AlignmentCenter = 1,
            AlignmentEnd = 2,
        }
    }
    /** A container that arranges its child controls horizontally or vertically.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_boxcontainer.html  
     */
    class BoxContainer<Map extends Record<string, Node> = {}> extends Container<Map> {
        /** The child controls will be arranged at the beginning of the container, i.e. top if orientation is vertical, left if orientation is horizontal (right for RTL layout). */
        static readonly ALIGNMENT_BEGIN = 0
        
        /** The child controls will be centered in the container. */
        static readonly ALIGNMENT_CENTER = 1
        
        /** The child controls will be arranged at the end of the container, i.e. bottom if orientation is vertical, right if orientation is horizontal (left for RTL layout). */
        static readonly ALIGNMENT_END = 2
        constructor(identifier?: any)
        addSpacer(begin: boolean): Control
        
        /** The alignment of the container's children (must be one of [constant ALIGNMENT_BEGIN], [constant ALIGNMENT_CENTER], or [constant ALIGNMENT_END]). */
        get alignment(): int64
        set alignment(value: int64)
        
        /** If `true`, the [BoxContainer] will arrange its children vertically, rather than horizontally.  
         *  Can't be changed when using [HBoxContainer] and [VBoxContainer].  
         */
        get vertical(): boolean
        set vertical(value: boolean)
    }
    /** Generate an axis-aligned box [PrimitiveMesh].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_boxmesh.html  
     */
    class BoxMesh extends PrimitiveMesh {
        constructor(identifier?: any)
        /** The box's width, height and depth. */
        get size(): Vector3
        set size(value: Vector3)
        get subdivideWidth(): int64
        set subdivideWidth(value: int64)
        get subdivideHeight(): int64
        set subdivideHeight(value: int64)
        get subdivideDepth(): int64
        set subdivideDepth(value: int64)
    }
    /** Cuboid shape for use with occlusion culling in [OccluderInstance3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_boxoccluder3d.html  
     */
    class BoxOccluder3D extends Occluder3D {
        constructor(identifier?: any)
        /** The box's size in 3D units. */
        get size(): Vector3
        set size(value: Vector3)
    }
    /** A 3D box shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_boxshape3d.html  
     */
    class BoxShape3D extends Shape3D {
        constructor(identifier?: any)
        /** The box's width, height and depth. */
        get size(): Vector3
        set size(value: Vector3)
    }
    /** A themed button that can contain text and an icon.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_button.html  
     */
    class Button<Map extends Record<string, Node> = {}> extends BaseButton<Map> {
        constructor(identifier?: any)
        /** The button's text that will be displayed inside the button's area. */
        get text(): string
        set text(value: string)
        
        /** Button's icon, if text is present the icon will be placed before the text.  
         *  To edit margin and spacing of the icon, use [theme_item h_separation] theme property and `content_margin_*` properties of the used [StyleBox]es.  
         */
        get icon(): Texture2D
        set icon(value: Texture2D)
        
        /** Flat buttons don't display decoration. */
        get flat(): boolean
        set flat(value: boolean)
        
        /** Text alignment policy for the button's text, use one of the [enum HorizontalAlignment] constants. */
        get alignment(): int64
        set alignment(value: int64)
        get textOverrunBehavior(): int64
        set textOverrunBehavior(value: int64)
        get autowrapMode(): int64
        set autowrapMode(value: int64)
        get clipText(): boolean
        set clipText(value: boolean)
        get iconAlignment(): int64
        set iconAlignment(value: int64)
        get verticalIconAlignment(): int64
        set verticalIconAlignment(value: int64)
        get expandIcon(): boolean
        set expandIcon(value: boolean)
        get textDirection(): int64
        set textDirection(value: int64)
        
        /** Language code used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        get language(): string
        set language(value: string)
    }
    /** A group of buttons that doesn't allow more than one button to be pressed at a time.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_buttongroup.html  
     */
    class ButtonGroup extends Resource {
        constructor(identifier?: any)
        getPressedButton(): BaseButton
        getButtons(): GArray
        get allowUnpress(): boolean
        set allowUnpress(value: boolean)
        
        /** Emitted when one of the buttons of the group is pressed. */
        readonly pressed: Signal<(button: BaseButton) => void>
    }
    namespace CpuParticles2D {
        enum DrawOrder {
            DrawOrderIndex = 0,
            DrawOrderLifetime = 1,
        }
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
            ParamMax = 12,
        }
        enum ParticleFlags {
            ParticleFlagAlignYToVelocity = 0,
            ParticleFlagRotateY = 1,
            ParticleFlagDisableZ = 2,
            ParticleFlagMax = 3,
        }
        enum EmissionShape {
            EmissionShapePoint = 0,
            EmissionShapeSphere = 1,
            EmissionShapeSphereSurface = 2,
            EmissionShapeRectangle = 3,
            EmissionShapePoints = 4,
            EmissionShapeDirectedPoints = 5,
            EmissionShapeMax = 6,
        }
    }
    class CpuParticles2D<Map extends Record<string, Node> = {}> extends Node2D<Map> {
        static readonly DRAW_ORDER_INDEX = 0
        static readonly DRAW_ORDER_LIFETIME = 1
        static readonly PARAM_INITIAL_LINEAR_VELOCITY = 0
        static readonly PARAM_ANGULAR_VELOCITY = 1
        static readonly PARAM_ORBIT_VELOCITY = 2
        static readonly PARAM_LINEAR_ACCEL = 3
        static readonly PARAM_RADIAL_ACCEL = 4
        static readonly PARAM_TANGENTIAL_ACCEL = 5
        static readonly PARAM_DAMPING = 6
        static readonly PARAM_ANGLE = 7
        static readonly PARAM_SCALE = 8
        static readonly PARAM_HUE_VARIATION = 9
        static readonly PARAM_ANIM_SPEED = 10
        static readonly PARAM_ANIM_OFFSET = 11
        static readonly PARAM_MAX = 12
        static readonly PARTICLE_FLAG_ALIGN_Y_TO_VELOCITY = 0
        static readonly PARTICLE_FLAG_ROTATE_Y = 1
        static readonly PARTICLE_FLAG_DISABLE_Z = 2
        static readonly PARTICLE_FLAG_MAX = 3
        static readonly EMISSION_SHAPE_POINT = 0
        static readonly EMISSION_SHAPE_SPHERE = 1
        static readonly EMISSION_SHAPE_SPHERE_SURFACE = 2
        static readonly EMISSION_SHAPE_RECTANGLE = 3
        static readonly EMISSION_SHAPE_POINTS = 4
        static readonly EMISSION_SHAPE_DIRECTED_POINTS = 5
        static readonly EMISSION_SHAPE_MAX = 6
        constructor(identifier?: any)
        requestParticlesProcess(processTime: float64): void
        restart(keepSeed: boolean = false): void
        setParamMin(param: CpuParticles2D.Parameter, value: float64): void
        getParamMin(param: CpuParticles2D.Parameter): float64
        setParamMax(param: CpuParticles2D.Parameter, value: float64): void
        getParamMax(param: CpuParticles2D.Parameter): float64
        setParamCurve(param: CpuParticles2D.Parameter, curve: Curve): void
        getParamCurve(param: CpuParticles2D.Parameter): Curve
        setParticleFlag(particleFlag: CpuParticles2D.ParticleFlags, enable: boolean): void
        getParticleFlag(particleFlag: CpuParticles2D.ParticleFlags): boolean
        convertFromParticles(particles: Node): void
        get emitting(): boolean
        set emitting(value: boolean)
        get amount(): int64
        set amount(value: int64)
        get texture(): Texture2D
        set texture(value: Texture2D)
        get lifetime(): float64
        set lifetime(value: float64)
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
        get lifetimeRandomness(): float64
        set lifetimeRandomness(value: float64)
        get fixedFps(): int64
        set fixedFps(value: int64)
        get fractDelta(): boolean
        set fractDelta(value: boolean)
        get localCoords(): boolean
        set localCoords(value: boolean)
        get drawOrder(): int64
        set drawOrder(value: int64)
        get emissionShape(): int64
        set emissionShape(value: int64)
        get emissionSphereRadius(): float64
        set emissionSphereRadius(value: float64)
        get emissionRectExtents(): Vector2
        set emissionRectExtents(value: Vector2)
        get emissionPoints(): PackedVector2Array
        set emissionPoints(value: PackedVector2Array | Vector2[])
        get emissionNormals(): PackedVector2Array
        set emissionNormals(value: PackedVector2Array | Vector2[])
        get emissionColors(): PackedColorArray
        set emissionColors(value: PackedColorArray | Color[])
        get particleFlagAlignY(): boolean
        set particleFlagAlignY(value: boolean)
        get direction(): Vector2
        set direction(value: Vector2)
        get spread(): float64
        set spread(value: float64)
        get gravity(): Vector2
        set gravity(value: Vector2)
        get initialVelocityMin(): float64
        set initialVelocityMin(value: float64)
        get initialVelocityMax(): float64
        set initialVelocityMax(value: float64)
        get angularVelocityMin(): float64
        set angularVelocityMin(value: float64)
        get angularVelocityMax(): float64
        set angularVelocityMax(value: float64)
        get angularVelocityCurve(): Curve
        set angularVelocityCurve(value: Curve)
        get orbitVelocityMin(): float64
        set orbitVelocityMin(value: float64)
        get orbitVelocityMax(): float64
        set orbitVelocityMax(value: float64)
        get orbitVelocityCurve(): Curve
        set orbitVelocityCurve(value: Curve)
        get linearAccelMin(): float64
        set linearAccelMin(value: float64)
        get linearAccelMax(): float64
        set linearAccelMax(value: float64)
        get linearAccelCurve(): Curve
        set linearAccelCurve(value: Curve)
        get radialAccelMin(): float64
        set radialAccelMin(value: float64)
        get radialAccelMax(): float64
        set radialAccelMax(value: float64)
        get radialAccelCurve(): Curve
        set radialAccelCurve(value: Curve)
        get tangentialAccelMin(): float64
        set tangentialAccelMin(value: float64)
        get tangentialAccelMax(): float64
        set tangentialAccelMax(value: float64)
        get tangentialAccelCurve(): Curve
        set tangentialAccelCurve(value: Curve)
        get dampingMin(): float64
        set dampingMin(value: float64)
        get dampingMax(): float64
        set dampingMax(value: float64)
        get dampingCurve(): Curve
        set dampingCurve(value: Curve)
        get angleMin(): float64
        set angleMin(value: float64)
        get angleMax(): float64
        set angleMax(value: float64)
        get angleCurve(): Curve
        set angleCurve(value: Curve)
        get scaleAmountMin(): float64
        set scaleAmountMin(value: float64)
        get scaleAmountMax(): float64
        set scaleAmountMax(value: float64)
        get scaleAmountCurve(): Curve
        set scaleAmountCurve(value: Curve)
        get splitScale(): boolean
        set splitScale(value: boolean)
        get scaleCurveX(): Curve
        set scaleCurveX(value: Curve)
        get scaleCurveY(): Curve
        set scaleCurveY(value: Curve)
        get color(): Color
        set color(value: Color)
        get colorRamp(): Gradient
        set colorRamp(value: Gradient)
        get colorInitialRamp(): Gradient
        set colorInitialRamp(value: Gradient)
        get hueVariationMin(): float64
        set hueVariationMin(value: float64)
        get hueVariationMax(): float64
        set hueVariationMax(value: float64)
        get hueVariationCurve(): Curve
        set hueVariationCurve(value: Curve)
        get animSpeedMin(): float64
        set animSpeedMin(value: float64)
        get animSpeedMax(): float64
        set animSpeedMax(value: float64)
        get animSpeedCurve(): Curve
        set animSpeedCurve(value: Curve)
        get animOffsetMin(): float64
        set animOffsetMin(value: float64)
        get animOffsetMax(): float64
        set animOffsetMax(value: float64)
        get animOffsetCurve(): Curve
        set animOffsetCurve(value: Curve)
        readonly finished: Signal<() => void>
    }
    namespace CpuParticles3D {
        enum DrawOrder {
            DrawOrderIndex = 0,
            DrawOrderLifetime = 1,
            DrawOrderViewDepth = 2,
        }
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
            ParamMax = 12,
        }
        enum ParticleFlags {
            ParticleFlagAlignYToVelocity = 0,
            ParticleFlagRotateY = 1,
            ParticleFlagDisableZ = 2,
            ParticleFlagMax = 3,
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
    }
    class CpuParticles3D<Map extends Record<string, Node> = {}> extends GeometryInstance3D<Map> {
        static readonly DRAW_ORDER_INDEX = 0
        static readonly DRAW_ORDER_LIFETIME = 1
        static readonly DRAW_ORDER_VIEW_DEPTH = 2
        static readonly PARAM_INITIAL_LINEAR_VELOCITY = 0
        static readonly PARAM_ANGULAR_VELOCITY = 1
        static readonly PARAM_ORBIT_VELOCITY = 2
        static readonly PARAM_LINEAR_ACCEL = 3
        static readonly PARAM_RADIAL_ACCEL = 4
        static readonly PARAM_TANGENTIAL_ACCEL = 5
        static readonly PARAM_DAMPING = 6
        static readonly PARAM_ANGLE = 7
        static readonly PARAM_SCALE = 8
        static readonly PARAM_HUE_VARIATION = 9
        static readonly PARAM_ANIM_SPEED = 10
        static readonly PARAM_ANIM_OFFSET = 11
        static readonly PARAM_MAX = 12
        static readonly PARTICLE_FLAG_ALIGN_Y_TO_VELOCITY = 0
        static readonly PARTICLE_FLAG_ROTATE_Y = 1
        static readonly PARTICLE_FLAG_DISABLE_Z = 2
        static readonly PARTICLE_FLAG_MAX = 3
        static readonly EMISSION_SHAPE_POINT = 0
        static readonly EMISSION_SHAPE_SPHERE = 1
        static readonly EMISSION_SHAPE_SPHERE_SURFACE = 2
        static readonly EMISSION_SHAPE_BOX = 3
        static readonly EMISSION_SHAPE_POINTS = 4
        static readonly EMISSION_SHAPE_DIRECTED_POINTS = 5
        static readonly EMISSION_SHAPE_RING = 6
        static readonly EMISSION_SHAPE_MAX = 7
        constructor(identifier?: any)
        restart(keepSeed: boolean = false): void
        requestParticlesProcess(processTime: float64): void
        captureAabb(): Aabb
        setParamMin(param: CpuParticles3D.Parameter, value: float64): void
        getParamMin(param: CpuParticles3D.Parameter): float64
        setParamMax(param: CpuParticles3D.Parameter, value: float64): void
        getParamMax(param: CpuParticles3D.Parameter): float64
        setParamCurve(param: CpuParticles3D.Parameter, curve: Curve): void
        getParamCurve(param: CpuParticles3D.Parameter): Curve
        setParticleFlag(particleFlag: CpuParticles3D.ParticleFlags, enable: boolean): void
        getParticleFlag(particleFlag: CpuParticles3D.ParticleFlags): boolean
        convertFromParticles(particles: Node): void
        get emitting(): boolean
        set emitting(value: boolean)
        get amount(): int64
        set amount(value: int64)
        get lifetime(): float64
        set lifetime(value: float64)
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
        get lifetimeRandomness(): float64
        set lifetimeRandomness(value: float64)
        get fixedFps(): int64
        set fixedFps(value: int64)
        get fractDelta(): boolean
        set fractDelta(value: boolean)
        get visibilityAabb(): Aabb
        set visibilityAabb(value: Aabb)
        get localCoords(): boolean
        set localCoords(value: boolean)
        get drawOrder(): int64
        set drawOrder(value: int64)
        get mesh(): Mesh
        set mesh(value: Mesh)
        get emissionShape(): int64
        set emissionShape(value: int64)
        get emissionSphereRadius(): float64
        set emissionSphereRadius(value: float64)
        get emissionBoxExtents(): Vector3
        set emissionBoxExtents(value: Vector3)
        get emissionPoints(): PackedVector3Array
        set emissionPoints(value: PackedVector3Array | Vector3[])
        get emissionNormals(): PackedVector3Array
        set emissionNormals(value: PackedVector3Array | Vector3[])
        get emissionColors(): PackedColorArray
        set emissionColors(value: PackedColorArray | Color[])
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
        get particleFlagAlignY(): boolean
        set particleFlagAlignY(value: boolean)
        get particleFlagRotateY(): boolean
        set particleFlagRotateY(value: boolean)
        get particleFlagDisableZ(): boolean
        set particleFlagDisableZ(value: boolean)
        get direction(): Vector3
        set direction(value: Vector3)
        get spread(): float64
        set spread(value: float64)
        get flatness(): float64
        set flatness(value: float64)
        get gravity(): Vector3
        set gravity(value: Vector3)
        get initialVelocityMin(): float64
        set initialVelocityMin(value: float64)
        get initialVelocityMax(): float64
        set initialVelocityMax(value: float64)
        get angularVelocityMin(): float64
        set angularVelocityMin(value: float64)
        get angularVelocityMax(): float64
        set angularVelocityMax(value: float64)
        get angularVelocityCurve(): Curve
        set angularVelocityCurve(value: Curve)
        get orbitVelocityMin(): float64
        set orbitVelocityMin(value: float64)
        get orbitVelocityMax(): float64
        set orbitVelocityMax(value: float64)
        get orbitVelocityCurve(): Curve
        set orbitVelocityCurve(value: Curve)
        get linearAccelMin(): float64
        set linearAccelMin(value: float64)
        get linearAccelMax(): float64
        set linearAccelMax(value: float64)
        get linearAccelCurve(): Curve
        set linearAccelCurve(value: Curve)
        get radialAccelMin(): float64
        set radialAccelMin(value: float64)
        get radialAccelMax(): float64
        set radialAccelMax(value: float64)
        get radialAccelCurve(): Curve
        set radialAccelCurve(value: Curve)
        get tangentialAccelMin(): float64
        set tangentialAccelMin(value: float64)
        get tangentialAccelMax(): float64
        set tangentialAccelMax(value: float64)
        get tangentialAccelCurve(): Curve
        set tangentialAccelCurve(value: Curve)
        get dampingMin(): float64
        set dampingMin(value: float64)
        get dampingMax(): float64
        set dampingMax(value: float64)
        get dampingCurve(): Curve
        set dampingCurve(value: Curve)
        get angleMin(): float64
        set angleMin(value: float64)
        get angleMax(): float64
        set angleMax(value: float64)
        get angleCurve(): Curve
        set angleCurve(value: Curve)
        get scaleAmountMin(): float64
        set scaleAmountMin(value: float64)
        get scaleAmountMax(): float64
        set scaleAmountMax(value: float64)
        get scaleAmountCurve(): Curve
        set scaleAmountCurve(value: Curve)
        get splitScale(): boolean
        set splitScale(value: boolean)
        get scaleCurveX(): Curve
        set scaleCurveX(value: Curve)
        get scaleCurveY(): Curve
        set scaleCurveY(value: Curve)
        get scaleCurveZ(): Curve
        set scaleCurveZ(value: Curve)
        get color(): Color
        set color(value: Color)
        get colorRamp(): Gradient
        set colorRamp(value: Gradient)
        get colorInitialRamp(): Gradient
        set colorInitialRamp(value: Gradient)
        get hueVariationMin(): float64
        set hueVariationMin(value: float64)
        get hueVariationMax(): float64
        set hueVariationMax(value: float64)
        get hueVariationCurve(): Curve
        set hueVariationCurve(value: Curve)
        get animSpeedMin(): float64
        set animSpeedMin(value: float64)
        get animSpeedMax(): float64
        set animSpeedMax(value: float64)
        get animSpeedCurve(): Curve
        set animSpeedCurve(value: Curve)
        get animOffsetMin(): float64
        set animOffsetMin(value: float64)
        get animOffsetMax(): float64
        set animOffsetMax(value: float64)
        get animOffsetCurve(): Curve
        set animOffsetCurve(value: Curve)
        readonly finished: Signal<() => void>
    }
    class CsgBox3D<Map extends Record<string, Node> = {}> extends CsgPrimitive3D<Map> {
        constructor(identifier?: any)
        get size(): Vector3
        set size(value: Vector3)
        get material(): BaseMaterial3D | ShaderMaterial
        set material(value: BaseMaterial3D | ShaderMaterial)
    }
    class CsgCombiner3D<Map extends Record<string, Node> = {}> extends CsgShape3D<Map> {
        constructor(identifier?: any)
    }
    class CsgCylinder3D<Map extends Record<string, Node> = {}> extends CsgPrimitive3D<Map> {
        constructor(identifier?: any)
        get radius(): float64
        set radius(value: float64)
        get height(): float64
        set height(value: float64)
        get sides(): int64
        set sides(value: int64)
        get cone(): boolean
        set cone(value: boolean)
        get smoothFaces(): boolean
        set smoothFaces(value: boolean)
        get material(): BaseMaterial3D | ShaderMaterial
        set material(value: BaseMaterial3D | ShaderMaterial)
    }
    class CsgMesh3D<Map extends Record<string, Node> = {}> extends CsgPrimitive3D<Map> {
        constructor(identifier?: any)
        get mesh(): Mesh | any /*-PlaneMesh*/ | any /*-PointMesh*/ | any /*-QuadMesh*/ | any /*-RibbonTrailMesh*/
        set mesh(value: Mesh | any /*-PlaneMesh*/ | any /*-PointMesh*/ | any /*-QuadMesh*/ | any /*-RibbonTrailMesh*/)
        get material(): BaseMaterial3D | ShaderMaterial
        set material(value: BaseMaterial3D | ShaderMaterial)
    }
    namespace CsgPolygon3D {
        enum Mode {
            ModeDepth = 0,
            ModeSpin = 1,
            ModePath = 2,
        }
        enum PathRotation {
            PathRotationPolygon = 0,
            PathRotationPath = 1,
            PathRotationPathFollow = 2,
        }
        enum PathIntervalType {
            PathIntervalDistance = 0,
            PathIntervalSubdivide = 1,
        }
    }
    class CsgPolygon3D<Map extends Record<string, Node> = {}> extends CsgPrimitive3D<Map> {
        static readonly MODE_DEPTH = 0
        static readonly MODE_SPIN = 1
        static readonly MODE_PATH = 2
        static readonly PATH_ROTATION_POLYGON = 0
        static readonly PATH_ROTATION_PATH = 1
        static readonly PATH_ROTATION_PATH_FOLLOW = 2
        static readonly PATH_INTERVAL_DISTANCE = 0
        static readonly PATH_INTERVAL_SUBDIVIDE = 1
        constructor(identifier?: any)
        _isEditable3DPolygon(): boolean
        _hasEditable3DPolygonNoDepth(): boolean
        get polygon(): PackedVector2Array
        set polygon(value: PackedVector2Array | Vector2[])
        get mode(): int64
        set mode(value: int64)
        get depth(): float64
        set depth(value: float64)
        get spinDegrees(): float64
        set spinDegrees(value: float64)
        get spinSides(): int64
        set spinSides(value: int64)
        get pathNode(): NodePath
        set pathNode(value: NodePath | string)
        get pathIntervalType(): int64
        set pathIntervalType(value: int64)
        get pathInterval(): float64
        set pathInterval(value: float64)
        get pathSimplifyAngle(): float64
        set pathSimplifyAngle(value: float64)
        get pathRotation(): int64
        set pathRotation(value: int64)
        get pathRotationAccurate(): boolean
        set pathRotationAccurate(value: boolean)
        get pathLocal(): boolean
        set pathLocal(value: boolean)
        get pathContinuousU(): boolean
        set pathContinuousU(value: boolean)
        get pathUDistance(): float64
        set pathUDistance(value: float64)
        get pathJoined(): boolean
        set pathJoined(value: boolean)
        get smoothFaces(): boolean
        set smoothFaces(value: boolean)
        get material(): BaseMaterial3D | ShaderMaterial
        set material(value: BaseMaterial3D | ShaderMaterial)
    }
    class CsgPrimitive3D<Map extends Record<string, Node> = {}> extends CsgShape3D<Map> {
        constructor(identifier?: any)
        get flipFaces(): boolean
        set flipFaces(value: boolean)
    }
    namespace CsgShape3D {
        enum Operation {
            OperationUnion = 0,
            OperationIntersection = 1,
            OperationSubtraction = 2,
        }
    }
    class CsgShape3D<Map extends Record<string, Node> = {}> extends GeometryInstance3D<Map> {
        static readonly OPERATION_UNION = 0
        static readonly OPERATION_INTERSECTION = 1
        static readonly OPERATION_SUBTRACTION = 2
        constructor(identifier?: any)
        _updateShape(): void
        isRootShape(): boolean
        setCollisionMaskValue(layerNumber: int64, value: boolean): void
        getCollisionMaskValue(layerNumber: int64): boolean
        _getRootCollisionInstance(): Rid
        setCollisionLayerValue(layerNumber: int64, value: boolean): void
        getCollisionLayerValue(layerNumber: int64): boolean
        getMeshes(): GArray
        bakeStaticMesh(): ArrayMesh
        bakeCollisionShape(): ConcavePolygonShape3D
        get operation(): int64
        set operation(value: int64)
        get snap(): float64
        set snap(value: float64)
        get calculateTangents(): boolean
        set calculateTangents(value: boolean)
        get useCollision(): boolean
        set useCollision(value: boolean)
        get collisionLayer(): int64
        set collisionLayer(value: int64)
        get collisionMask(): int64
        set collisionMask(value: int64)
        get collisionPriority(): float64
        set collisionPriority(value: float64)
    }
    class CsgSphere3D<Map extends Record<string, Node> = {}> extends CsgPrimitive3D<Map> {
        constructor(identifier?: any)
        get radius(): float64
        set radius(value: float64)
        get radialSegments(): int64
        set radialSegments(value: int64)
        get rings(): int64
        set rings(value: int64)
        get smoothFaces(): boolean
        set smoothFaces(value: boolean)
        get material(): BaseMaterial3D | ShaderMaterial
        set material(value: BaseMaterial3D | ShaderMaterial)
    }
    class CsgTorus3D<Map extends Record<string, Node> = {}> extends CsgPrimitive3D<Map> {
        constructor(identifier?: any)
        get innerRadius(): float64
        set innerRadius(value: float64)
        get outerRadius(): float64
        set outerRadius(value: float64)
        get sides(): int64
        set sides(value: int64)
        get ringSides(): int64
        set ringSides(value: int64)
        get smoothFaces(): boolean
        set smoothFaces(value: boolean)
        get material(): BaseMaterial3D | ShaderMaterial
        set material(value: BaseMaterial3D | ShaderMaterial)
    }
    /** Calls the specified method after optional delay.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_callbacktweener.html  
     */
    class CallbackTweener extends Tweener {
        constructor(identifier?: any)
        setDelay(delay: float64): CallbackTweener
    }
    namespace Camera2D {
        enum AnchorMode {
            AnchorModeFixedTopLeft = 0,
            AnchorModeDragCenter = 1,
        }
        enum Camera2DProcessCallback {
            Camera2DProcessPhysics = 0,
            Camera2DProcessIdle = 1,
        }
    }
    /** Camera node for 2D scenes.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_camera2d.html  
     */
    class Camera2D<Map extends Record<string, Node> = {}> extends Node2D<Map> {
        /** The camera's position is fixed so that the top-left corner is always at the origin. */
        static readonly ANCHOR_MODE_FIXED_TOP_LEFT = 0
        
        /** The camera's position takes into account vertical/horizontal offsets and the screen size. */
        static readonly ANCHOR_MODE_DRAG_CENTER = 1
        
        /** The camera updates during physics frames (see [constant Node.NOTIFICATION_INTERNAL_PHYSICS_PROCESS]). */
        static readonly CAMERA2D_PROCESS_PHYSICS = 0
        
        /** The camera updates during process frames (see [constant Node.NOTIFICATION_INTERNAL_PROCESS]). */
        static readonly CAMERA2D_PROCESS_IDLE = 1
        constructor(identifier?: any)
        _updateScroll(): void
        makeCurrent(): void
        isCurrent(): boolean
        _makeCurrent(_unnamedArg0: GObject): void
        setLimit(margin: Side, limit: int64): void
        getLimit(margin: Side): int64
        setDragMargin(margin: Side, dragMargin: float64): void
        getDragMargin(margin: Side): float64
        getTargetPosition(): Vector2
        getScreenCenterPosition(): Vector2
        forceUpdateScroll(): void
        resetSmoothing(): void
        
        /** Aligns the camera to the tracked node. */
        align(): void
        _setOldSmoothing(followSmoothing: float64): void
        
        /** The camera's relative offset. Useful for looking around or camera shake animations. The offsetted camera can go past the limits defined in [member limit_top], [member limit_bottom], [member limit_left] and [member limit_right]. */
        get offset(): Vector2
        set offset(value: Vector2)
        get anchorMode(): int64
        set anchorMode(value: int64)
        get ignoreRotation(): boolean
        set ignoreRotation(value: boolean)
        
        /** Controls whether the camera can be active or not. If `true`, the [Camera2D] will become the main camera when it enters the scene tree and there is no active camera currently (see [method Viewport.get_camera_2d]).  
         *  When the camera is currently active and [member enabled] is set to `false`, the next enabled [Camera2D] in the scene tree will become active.  
         */
        get enabled(): boolean
        set enabled(value: boolean)
        
        /** The camera's zoom. A zoom of `Vector(2, 2)` doubles the size seen in the viewport. A zoom of `Vector(0.5, 0.5)` halves the size seen in the viewport.  
         *      
         *  **Note:** [member FontFile.oversampling] does  *not*  take [Camera2D] zoom into account. This means that zooming in/out will cause bitmap fonts and rasterized (non-MSDF) dynamic fonts to appear blurry or pixelated unless the font is part of a [CanvasLayer] that makes it ignore camera zoom. To ensure text remains crisp regardless of zoom, you can enable MSDF font rendering by enabling [member ProjectSettings.gui/theme/default_font_multichannel_signed_distance_field] (applies to the default project font only), or enabling **Multichannel Signed Distance Field** in the import options of a DynamicFont for custom fonts. On system fonts, [member SystemFont.multichannel_signed_distance_field] can be enabled in the inspector.  
         */
        get zoom(): Vector2
        set zoom(value: Vector2)
        get customViewport(): Viewport
        set customViewport(value: Viewport)
        get processCallback(): int64
        set processCallback(value: int64)
        get limitLeft(): int64
        set limitLeft(value: int64)
        get limitTop(): int64
        set limitTop(value: int64)
        get limitRight(): int64
        set limitRight(value: int64)
        get limitBottom(): int64
        set limitBottom(value: int64)
        get limitSmoothed(): boolean
        set limitSmoothed(value: boolean)
        get positionSmoothingEnabled(): boolean
        set positionSmoothingEnabled(value: boolean)
        get positionSmoothingSpeed(): float64
        set positionSmoothingSpeed(value: float64)
        get rotationSmoothingEnabled(): boolean
        set rotationSmoothingEnabled(value: boolean)
        get rotationSmoothingSpeed(): float64
        set rotationSmoothingSpeed(value: float64)
        get dragHorizontalEnabled(): boolean
        set dragHorizontalEnabled(value: boolean)
        get dragVerticalEnabled(): boolean
        set dragVerticalEnabled(value: boolean)
        get dragHorizontalOffset(): float64
        set dragHorizontalOffset(value: float64)
        get dragVerticalOffset(): float64
        set dragVerticalOffset(value: float64)
        get dragLeftMargin(): float64
        set dragLeftMargin(value: float64)
        get dragTopMargin(): float64
        set dragTopMargin(value: float64)
        get dragRightMargin(): float64
        set dragRightMargin(value: float64)
        get dragBottomMargin(): float64
        set dragBottomMargin(value: float64)
        get editorDrawScreen(): boolean
        set editorDrawScreen(value: boolean)
        get editorDrawLimits(): boolean
        set editorDrawLimits(value: boolean)
        get editorDrawDragMargin(): boolean
        set editorDrawDragMargin(value: boolean)
    }
    namespace Camera3D {
        enum ProjectionType {
            ProjectionPerspective = 0,
            ProjectionOrthogonal = 1,
            ProjectionFrustum = 2,
        }
        enum KeepAspect {
            KeepWidth = 0,
            KeepHeight = 1,
        }
        enum DopplerTracking {
            DopplerTrackingDisabled = 0,
            DopplerTrackingIdleStep = 1,
            DopplerTrackingPhysicsStep = 2,
        }
    }
    /** Camera node, displays from a point of view.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_camera3d.html  
     */
    class Camera3D<Map extends Record<string, Node> = {}> extends Node3D<Map> {
        /** Perspective projection. Objects on the screen becomes smaller when they are far away. */
        static readonly PROJECTION_PERSPECTIVE = 0
        
        /** Orthogonal projection, also known as orthographic projection. Objects remain the same size on the screen no matter how far away they are. */
        static readonly PROJECTION_ORTHOGONAL = 1
        
        /** Frustum projection. This mode allows adjusting [member frustum_offset] to create "tilted frustum" effects. */
        static readonly PROJECTION_FRUSTUM = 2
        
        /** Preserves the horizontal aspect ratio; also known as Vert- scaling. This is usually the best option for projects running in portrait mode, as taller aspect ratios will benefit from a wider vertical FOV. */
        static readonly KEEP_WIDTH = 0
        
        /** Preserves the vertical aspect ratio; also known as Hor+ scaling. This is usually the best option for projects running in landscape mode, as wider aspect ratios will automatically benefit from a wider horizontal FOV. */
        static readonly KEEP_HEIGHT = 1
        
        /** Disables [url=https://en.wikipedia.org/wiki/Doppler_effect]Doppler effect[/url] simulation (default). */
        static readonly DOPPLER_TRACKING_DISABLED = 0
        
        /** Simulate [url=https://en.wikipedia.org/wiki/Doppler_effect]Doppler effect[/url] by tracking positions of objects that are changed in `_process`. Changes in the relative velocity of this camera compared to those objects affect how audio is perceived (changing the audio's [member AudioStreamPlayer3D.pitch_scale]). */
        static readonly DOPPLER_TRACKING_IDLE_STEP = 1
        
        /** Simulate [url=https://en.wikipedia.org/wiki/Doppler_effect]Doppler effect[/url] by tracking positions of objects that are changed in `_physics_process`. Changes in the relative velocity of this camera compared to those objects affect how audio is perceived (changing the audio's [member AudioStreamPlayer3D.pitch_scale]). */
        static readonly DOPPLER_TRACKING_PHYSICS_STEP = 2
        constructor(identifier?: any)
        projectRayNormal(screenPoint: Vector2): Vector3
        projectLocalRayNormal(screenPoint: Vector2): Vector3
        projectRayOrigin(screenPoint: Vector2): Vector3
        unprojectPosition(worldPoint: Vector3): Vector2
        isPositionBehind(worldPoint: Vector3): boolean
        projectPosition(screenPoint: Vector2, zDepth: float64): Vector3
        setPerspective(fov: float64, zNear: float64, zFar: float64): void
        setOrthogonal(size: float64, zNear: float64, zFar: float64): void
        setFrustum(size: float64, offset: Vector2, zNear: float64, zFar: float64): void
        makeCurrent(): void
        clearCurrent(enableNext: boolean = true): void
        getCameraTransform(): Transform3D
        getCameraProjection(): Projection
        getFrustum(): GArray
        isPositionInFrustum(worldPoint: Vector3): boolean
        getCameraRid(): Rid
        getPyramidShapeRid(): Rid
        setCullMaskValue(layerNumber: int64, value: boolean): void
        getCullMaskValue(layerNumber: int64): boolean
        get keepAspect(): int64
        set keepAspect(value: int64)
        get cullMask(): int64
        set cullMask(value: int64)
        
        /** The [Environment] to use for this camera. */
        get environment(): Environment
        set environment(value: Environment)
        
        /** The [CameraAttributes] to use for this camera. */
        get attributes(): CameraAttributesPractical | CameraAttributesPhysical
        set attributes(value: CameraAttributesPractical | CameraAttributesPhysical)
        
        /** The [Compositor] to use for this camera. */
        get compositor(): Compositor
        set compositor(value: Compositor)
        get hOffset(): float64
        set hOffset(value: float64)
        get vOffset(): float64
        set vOffset(value: float64)
        get dopplerTracking(): int64
        set dopplerTracking(value: int64)
        
        /** The camera's projection mode. In [constant PROJECTION_PERSPECTIVE] mode, objects' Z distance from the camera's local space scales their perceived size. */
        get projection(): int64
        set projection(value: int64)
        
        /** If `true`, the ancestor [Viewport] is currently using this camera.  
         *  If multiple cameras are in the scene, one will always be made current. For example, if two [Camera3D] nodes are present in the scene and only one is current, setting one camera's [member current] to `false` will cause the other camera to be made current.  
         */
        get current(): boolean
        set current(value: boolean)
        
        /** The camera's field of view angle (in degrees). Only applicable in perspective mode. Since [member keep_aspect] locks one axis, [member fov] sets the other axis' field of view angle.  
         *  For reference, the default vertical field of view value (`75.0`) is equivalent to a horizontal FOV of:  
         *  - ~91.31 degrees in a 4:3 viewport  
         *  - ~101.67 degrees in a 16:10 viewport  
         *  - ~107.51 degrees in a 16:9 viewport  
         *  - ~121.63 degrees in a 21:9 viewport  
         */
        get fov(): float64
        set fov(value: float64)
        
        /** The camera's size in meters measured as the diameter of the width or height, depending on [member keep_aspect]. Only applicable in orthogonal and frustum modes. */
        get size(): float64
        set size(value: float64)
        get frustumOffset(): Vector2
        set frustumOffset(value: Vector2)
        
        /** The distance to the near culling boundary for this camera relative to its local Z axis. Lower values allow the camera to see objects more up close to its origin, at the cost of lower precision across the  *entire*  range. Values lower than the default can lead to increased Z-fighting. */
        get near(): float64
        set near(value: float64)
        
        /** The distance to the far culling boundary for this camera relative to its local Z axis. Higher values allow the camera to see further away, while decreasing [member far] can improve performance if it results in objects being partially or fully culled. */
        get far(): float64
        set far(value: float64)
    }
    /** Parent class for camera settings.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_cameraattributes.html  
     */
    class CameraAttributes extends Resource {
        constructor(identifier?: any)
        get exposureSensitivity(): float64
        set exposureSensitivity(value: float64)
        get exposureMultiplier(): float64
        set exposureMultiplier(value: float64)
        get autoExposureEnabled(): boolean
        set autoExposureEnabled(value: boolean)
        get autoExposureScale(): float64
        set autoExposureScale(value: float64)
        get autoExposureSpeed(): float64
        set autoExposureSpeed(value: float64)
    }
    /** Physically-based camera settings.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_cameraattributesphysical.html  
     */
    class CameraAttributesPhysical extends CameraAttributes {
        constructor(identifier?: any)
        getFov(): float64
        get frustumFocusDistance(): float64
        set frustumFocusDistance(value: float64)
        get frustumFocalLength(): float64
        set frustumFocalLength(value: float64)
        get frustumNear(): float64
        set frustumNear(value: float64)
        get frustumFar(): float64
        set frustumFar(value: float64)
        get exposureAperture(): float64
        set exposureAperture(value: float64)
        get exposureShutterSpeed(): float64
        set exposureShutterSpeed(value: float64)
        get autoExposureMinExposureValue(): float64
        set autoExposureMinExposureValue(value: float64)
        get autoExposureMaxExposureValue(): float64
        set autoExposureMaxExposureValue(value: float64)
    }
    /** Camera settings in an easy to use format.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_cameraattributespractical.html  
     */
    class CameraAttributesPractical extends CameraAttributes {
        constructor(identifier?: any)
        get dofBlurFarEnabled(): boolean
        set dofBlurFarEnabled(value: boolean)
        get dofBlurFarDistance(): float64
        set dofBlurFarDistance(value: float64)
        get dofBlurFarTransition(): float64
        set dofBlurFarTransition(value: float64)
        get dofBlurNearEnabled(): boolean
        set dofBlurNearEnabled(value: boolean)
        get dofBlurNearDistance(): float64
        set dofBlurNearDistance(value: float64)
        get dofBlurNearTransition(): float64
        set dofBlurNearTransition(value: float64)
        get dofBlurAmount(): float64
        set dofBlurAmount(value: float64)
        get autoExposureMinSensitivity(): float64
        set autoExposureMinSensitivity(value: float64)
        get autoExposureMaxSensitivity(): float64
        set autoExposureMaxSensitivity(value: float64)
    }
    namespace CameraFeed {
        enum FeedDataType {
            FeedNoimage = 0,
            FeedRgb = 1,
            FeedYcbcr = 2,
            FeedYcbcrSep = 3,
            FeedExternal = 4,
        }
        enum FeedPosition {
            FeedUnspecified = 0,
            FeedFront = 1,
            FeedBack = 2,
        }
    }
    /** A camera feed gives you access to a single physical camera attached to your device.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_camerafeed.html  
     */
    class CameraFeed extends RefCounted {
        /** No image set for the feed. */
        static readonly FEED_NOIMAGE = 0
        
        /** Feed supplies RGB images. */
        static readonly FEED_RGB = 1
        
        /** Feed supplies YCbCr images that need to be converted to RGB. */
        static readonly FEED_YCBCR = 2
        
        /** Feed supplies separate Y and CbCr images that need to be combined and converted to RGB. */
        static readonly FEED_YCBCR_SEP = 3
        
        /** Feed supplies external image. */
        static readonly FEED_EXTERNAL = 4
        
        /** Unspecified position. */
        static readonly FEED_UNSPECIFIED = 0
        
        /** Camera is mounted at the front of the device. */
        static readonly FEED_FRONT = 1
        
        /** Camera is mounted at the back of the device. */
        static readonly FEED_BACK = 2
        constructor(identifier?: any)
        /* gdvirtual */ _activateFeed(): boolean
        /* gdvirtual */ _deactivateFeed(): void
        getId(): int64
        getName(): string
        setName(name: string): void
        getPosition(): CameraFeed.FeedPosition
        setPosition(position: CameraFeed.FeedPosition): void
        setRgbImage(rgbImage: Image): void
        setYcbcrImage(ycbcrImage: Image): void
        setExternal(width: int64, height: int64): void
        getTextureTexId(feedImageType: CameraServer.FeedImage): int64
        getDatatype(): CameraFeed.FeedDataType
        setFormat(index: int64, parameters: GDictionary): boolean
        get feedIsActive(): boolean
        set feedIsActive(value: boolean)
        get feedTransform(): Transform2D
        set feedTransform(value: Transform2D)
        
        /** Formats supported by the feed. Each entry is a [Dictionary] describing format parameters. */
        get formats(): GArray
        set formats(value: GArray)
        readonly frameChanged: Signal<() => void>
        readonly formatChanged: Signal<() => void>
    }
    /** Texture provided by a [CameraFeed].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_cameratexture.html  
     */
    class CameraTexture extends Texture2D {
        constructor(identifier?: any)
        get cameraFeedId(): int64
        set cameraFeedId(value: int64)
        get whichFeed(): int64
        set whichFeed(value: int64)
        get cameraIsActive(): boolean
        set cameraIsActive(value: boolean)
    }
    /** Merges several 2D nodes into a single draw operation.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_canvasgroup.html  
     */
    class CanvasGroup<Map extends Record<string, Node> = {}> extends Node2D<Map> {
        constructor(identifier?: any)
        get fitMargin(): float64
        set fitMargin(value: float64)
        get clearMargin(): float64
        set clearMargin(value: float64)
        get useMipmaps(): boolean
        set useMipmaps(value: boolean)
    }
    namespace CanvasItem {
        enum TextureFilter {
            TextureFilterParentNode = 0,
            TextureFilterNearest = 1,
            TextureFilterLinear = 2,
            TextureFilterNearestWithMipmaps = 3,
            TextureFilterLinearWithMipmaps = 4,
            TextureFilterNearestWithMipmapsAnisotropic = 5,
            TextureFilterLinearWithMipmapsAnisotropic = 6,
            TextureFilterMax = 7,
        }
        enum TextureRepeat {
            TextureRepeatParentNode = 0,
            TextureRepeatDisabled = 1,
            TextureRepeatEnabled = 2,
            TextureRepeatMirror = 3,
            TextureRepeatMax = 4,
        }
        enum ClipChildrenMode {
            ClipChildrenDisabled = 0,
            ClipChildrenOnly = 1,
            ClipChildrenAndDraw = 2,
            ClipChildrenMax = 3,
        }
    }
    /** Abstract base class for everything in 2D space.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_canvasitem.html  
     */
    class CanvasItem<Map extends Record<string, Node> = {}> extends Node<Map> {
        /** The [CanvasItem]'s global transform has changed. This notification is only received if enabled by [method set_notify_transform]. */
        static readonly NOTIFICATION_TRANSFORM_CHANGED = 2000
        
        /** The [CanvasItem]'s local transform has changed. This notification is only received if enabled by [method set_notify_local_transform]. */
        static readonly NOTIFICATION_LOCAL_TRANSFORM_CHANGED = 35
        
        /** The [CanvasItem] is requested to draw (see [method _draw]). */
        static readonly NOTIFICATION_DRAW = 30
        
        /** The [CanvasItem]'s visibility has changed. */
        static readonly NOTIFICATION_VISIBILITY_CHANGED = 31
        
        /** The [CanvasItem] has entered the canvas. */
        static readonly NOTIFICATION_ENTER_CANVAS = 32
        
        /** The [CanvasItem] has exited the canvas. */
        static readonly NOTIFICATION_EXIT_CANVAS = 33
        
        /** The [CanvasItem]'s active [World2D] changed. */
        static readonly NOTIFICATION_WORLD_2D_CHANGED = 36
        
        /** The [CanvasItem] will inherit the filter from its parent. */
        static readonly TEXTURE_FILTER_PARENT_NODE = 0
        
        /** The texture filter reads from the nearest pixel only. This makes the texture look pixelated from up close, and grainy from a distance (due to mipmaps not being sampled). */
        static readonly TEXTURE_FILTER_NEAREST = 1
        
        /** The texture filter blends between the nearest 4 pixels. This makes the texture look smooth from up close, and grainy from a distance (due to mipmaps not being sampled). */
        static readonly TEXTURE_FILTER_LINEAR = 2
        
        /** The texture filter reads from the nearest pixel and blends between the nearest 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`). This makes the texture look pixelated from up close, and smooth from a distance.  
         *  Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to [Camera2D] zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.  
         */
        static readonly TEXTURE_FILTER_NEAREST_WITH_MIPMAPS = 3
        
        /** The texture filter blends between the nearest 4 pixels and between the nearest 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`). This makes the texture look smooth from up close, and smooth from a distance.  
         *  Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to [Camera2D] zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.  
         */
        static readonly TEXTURE_FILTER_LINEAR_WITH_MIPMAPS = 4
        
        /** The texture filter reads from the nearest pixel and blends between 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`) based on the angle between the surface and the camera view. This makes the texture look pixelated from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting [member ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level].  
         *      
         *  **Note:** This texture filter is rarely useful in 2D projects. [constant TEXTURE_FILTER_NEAREST_WITH_MIPMAPS] is usually more appropriate in this case.  
         */
        static readonly TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC = 5
        
        /** The texture filter blends between the nearest 4 pixels and blends between 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`) based on the angle between the surface and the camera view. This makes the texture look smooth from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting [member ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level].  
         *      
         *  **Note:** This texture filter is rarely useful in 2D projects. [constant TEXTURE_FILTER_LINEAR_WITH_MIPMAPS] is usually more appropriate in this case.  
         */
        static readonly TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC = 6
        
        /** Represents the size of the [enum TextureFilter] enum. */
        static readonly TEXTURE_FILTER_MAX = 7
        
        /** The [CanvasItem] will inherit the filter from its parent. */
        static readonly TEXTURE_REPEAT_PARENT_NODE = 0
        
        /** Texture will not repeat. */
        static readonly TEXTURE_REPEAT_DISABLED = 1
        
        /** Texture will repeat normally. */
        static readonly TEXTURE_REPEAT_ENABLED = 2
        
        /** Texture will repeat in a 2×2 tiled mode, where elements at even positions are mirrored. */
        static readonly TEXTURE_REPEAT_MIRROR = 3
        
        /** Represents the size of the [enum TextureRepeat] enum. */
        static readonly TEXTURE_REPEAT_MAX = 4
        
        /** Child draws over parent and is not clipped. */
        static readonly CLIP_CHILDREN_DISABLED = 0
        
        /** Parent is used for the purposes of clipping only. Child is clipped to the parent's visible area, parent is not drawn. */
        static readonly CLIP_CHILDREN_ONLY = 1
        
        /** Parent is used for clipping child, but parent is also drawn underneath child as normal before clipping child to its visible area. */
        static readonly CLIP_CHILDREN_AND_DRAW = 2
        
        /** Represents the size of the [enum ClipChildrenMode] enum. */
        static readonly CLIP_CHILDREN_MAX = 3
        constructor(identifier?: any)
        
        /** Called when [CanvasItem] has been requested to redraw (after [method queue_redraw] is called, either manually or by the engine).  
         *  Corresponds to the [constant NOTIFICATION_DRAW] notification in [method Object._notification].  
         */
        /* gdvirtual */ _draw(): void
        _topLevelRaiseSelf(): void
        _editSetState(state: GDictionary): void
        _editGetState(): GDictionary
        _editSetPosition(position: Vector2): void
        _editGetPosition(): Vector2
        _editSetScale(scale: Vector2): void
        _editGetScale(): Vector2
        _editSetRect(rect: Rect2): void
        _editGetRect(): Rect2
        _editUseRect(): boolean
        _editSetRotation(degrees: float64): void
        _editGetRotation(): float64
        _editUseRotation(): boolean
        _editSetPivot(pivot: Vector2): void
        _editGetPivot(): Vector2
        _editUsePivot(): boolean
        _editGetTransform(): Transform2D
        getCanvasItem(): Rid
        isVisibleInTree(): boolean
        
        /** Show the [CanvasItem] if it's currently hidden. This is equivalent to setting [member visible] to `true`. For controls that inherit [Popup], the correct way to make them visible is to call one of the multiple `popup*()` functions instead. */
        show(): void
        
        /** Hide the [CanvasItem] if it's currently visible. This is equivalent to setting [member visible] to `false`. */
        hide(): void
        queueRedraw(): void
        moveToFront(): void
        drawLine(from: Vector2, to: Vector2, color: Color, width: float64 = -1, antialiased: boolean = false): void
        drawDashedLine(from: Vector2, to: Vector2, color: Color, width: float64 = -1, dash: float64 = 2, aligned: boolean = true, antialiased: boolean = false): void
        drawPolyline(points: PackedVector2Array | Vector2[], color: Color, width: float64 = -1, antialiased: boolean = false): void
        drawPolylineColors(points: PackedVector2Array | Vector2[], colors: PackedColorArray | Color[], width: float64 = -1, antialiased: boolean = false): void
        drawArc(center: Vector2, radius: float64, startAngle: float64, endAngle: float64, pointCount: int64, color: Color, width: float64 = -1, antialiased: boolean = false): void
        drawMultiline(points: PackedVector2Array | Vector2[], color: Color, width: float64 = -1, antialiased: boolean = false): void
        drawMultilineColors(points: PackedVector2Array | Vector2[], colors: PackedColorArray | Color[], width: float64 = -1, antialiased: boolean = false): void
        drawRect(rect: Rect2, color: Color, filled: boolean = true, width: float64 = -1, antialiased: boolean = false): void
        drawCircle(position: Vector2, radius: float64, color: Color, filled: boolean = true, width: float64 = -1, antialiased: boolean = false): void
        drawTexture(texture: Texture2D, position: Vector2, modulate: Color = new Color(1, 1, 1, 1)): void
        drawTextureRect(texture: Texture2D, rect: Rect2, tile: boolean, modulate: Color = new Color(1, 1, 1, 1), transpose: boolean = false): void
        drawTextureRectRegion(texture: Texture2D, rect: Rect2, srcRect: Rect2, modulate: Color = new Color(1, 1, 1, 1), transpose: boolean = false, clipUV: boolean = true): void
        drawMsdfTextureRectRegion(texture: Texture2D, rect: Rect2, srcRect: Rect2, modulate: Color = new Color(1, 1, 1, 1), outline: float64 = 0, pixelRange: float64 = 4, scale: float64 = 1): void
        drawLcdTextureRectRegion(texture: Texture2D, rect: Rect2, srcRect: Rect2, modulate: Color = new Color(1, 1, 1, 1)): void
        drawStyleBox(styleBox: StyleBox, rect: Rect2): void
        drawPrimitive(points: PackedVector2Array | Vector2[], colors: PackedColorArray | Color[], uvs: PackedVector2Array | Vector2[], texture: Texture2D = undefined): void
        drawPolygon(points: PackedVector2Array | Vector2[], colors: PackedColorArray | Color[], uvs: PackedVector2Array | Vector2[] = [], texture: Texture2D = undefined): void
        drawColoredPolygon(points: PackedVector2Array | Vector2[], color: Color, uvs: PackedVector2Array | Vector2[] = [], texture: Texture2D = undefined): void
        drawString(font: Font, pos: Vector2, text: string, alignment: HorizontalAlignment = 0, width: float64 = -1, fontSize: int64 = 16, modulate: Color = new Color(1, 1, 1, 1), justificationFlags: TextServer.JustificationFlag = 3, direction: TextServer.Direction = 0, orientation: TextServer.Orientation = 0): void
        drawMultilineString(font: Font, pos: Vector2, text: string, alignment: HorizontalAlignment = 0, width: float64 = -1, fontSize: int64 = 16, maxLines: int64 = -1, modulate: Color = new Color(1, 1, 1, 1), brkFlags: TextServer.LineBreakFlag = 3, justificationFlags: TextServer.JustificationFlag = 3, direction: TextServer.Direction = 0, orientation: TextServer.Orientation = 0): void
        drawStringOutline(font: Font, pos: Vector2, text: string, alignment: HorizontalAlignment = 0, width: float64 = -1, fontSize: int64 = 16, size: int64 = 1, modulate: Color = new Color(1, 1, 1, 1), justificationFlags: TextServer.JustificationFlag = 3, direction: TextServer.Direction = 0, orientation: TextServer.Orientation = 0): void
        drawMultilineStringOutline(font: Font, pos: Vector2, text: string, alignment: HorizontalAlignment = 0, width: float64 = -1, fontSize: int64 = 16, maxLines: int64 = -1, size: int64 = 1, modulate: Color = new Color(1, 1, 1, 1), brkFlags: TextServer.LineBreakFlag = 3, justificationFlags: TextServer.JustificationFlag = 3, direction: TextServer.Direction = 0, orientation: TextServer.Orientation = 0): void
        drawChar(font: Font, pos: Vector2, char: string, fontSize: int64 = 16, modulate: Color = new Color(1, 1, 1, 1)): void
        drawCharOutline(font: Font, pos: Vector2, char: string, fontSize: int64 = 16, size: int64 = -1, modulate: Color = new Color(1, 1, 1, 1)): void
        drawMesh(mesh: Mesh, texture: Texture2D, transform: Transform2D = <any> {} /*compound.type from TypeTransform2D ([object Object])*/, modulate: Color = new Color(1, 1, 1, 1)): void
        drawMultimesh(multimesh: MultiMesh, texture: Texture2D): void
        drawSetTransform(position: Vector2, rotation: float64 = 0, scale: Vector2 = Vector2.ONE): void
        drawSetTransformMatrix(xform: Transform2D): void
        drawAnimationSlice(animationLength: float64, sliceBegin: float64, sliceEnd: float64, offset: float64 = 0): void
        drawEndAnimation(): void
        getTransform(): Transform2D
        getGlobalTransform(): Transform2D
        getGlobalTransformWithCanvas(): Transform2D
        getViewportTransform(): Transform2D
        getViewportRect(): Rect2
        getCanvasTransform(): Transform2D
        getScreenTransform(): Transform2D
        getLocalMousePosition(): Vector2
        getGlobalMousePosition(): Vector2
        getCanvas(): Rid
        getCanvasLayerNode(): CanvasLayer
        getWorld2D(): World2D
        setInstanceShaderParameter(name: StringName, value: any): void
        getInstanceShaderParameter(name: StringName): any
        setNotifyLocalTransform(enable: boolean): void
        isLocalTransformNotificationEnabled(): boolean
        setNotifyTransform(enable: boolean): void
        isTransformNotificationEnabled(): boolean
        forceUpdateTransform(): void
        makeCanvasPositionLocal(viewportPoint: Vector2): Vector2
        makeInputLocal(event: InputEvent): InputEvent
        setVisibilityLayerBit(layer: int64, enabled: boolean): void
        getVisibilityLayerBit(layer: int64): boolean
        
        /** If `true`, this [CanvasItem] may be drawn. Whether this [CanvasItem] is actually drawn depends on the visibility of all of its [CanvasItem] ancestors. In other words: this [CanvasItem] will be drawn when [method is_visible_in_tree] returns `true` and all [CanvasItem] ancestors share at least one [member visibility_layer] with this [CanvasItem].  
         *      
         *  **Note:** For controls that inherit [Popup], the correct way to make them visible is to call one of the multiple `popup*()` functions instead.  
         */
        get visible(): boolean
        set visible(value: boolean)
        
        /** The color applied to this [CanvasItem]. This property does affect child [CanvasItem]s, unlike [member self_modulate] which only affects the node itself. */
        get modulate(): Color
        set modulate(value: Color)
        get selfModulate(): Color
        set selfModulate(value: Color)
        get showBehindParent(): boolean
        set showBehindParent(value: boolean)
        get topLevel(): boolean
        set topLevel(value: boolean)
        get clipChildren(): int64
        set clipChildren(value: int64)
        get lightMask(): int64
        set lightMask(value: int64)
        get visibilityLayer(): int64
        set visibilityLayer(value: int64)
        get zIndex(): int64
        set zIndex(value: int64)
        get zAsRelative(): boolean
        set zAsRelative(value: boolean)
        get ySortEnabled(): boolean
        set ySortEnabled(value: boolean)
        get textureFilter(): int64
        set textureFilter(value: int64)
        get textureRepeat(): int64
        set textureRepeat(value: int64)
        
        /** The material applied to this [CanvasItem]. */
        get material(): CanvasItemMaterial | ShaderMaterial
        set material(value: CanvasItemMaterial | ShaderMaterial)
        get useParentMaterial(): boolean
        set useParentMaterial(value: boolean)
        
        /** Emitted when the [CanvasItem] must redraw,  *after*  the related [constant NOTIFICATION_DRAW] notification, and  *before*  [method _draw] is called.  
         *      
         *  **Note:** Deferred connections do not allow drawing through the `draw_*` methods.  
         */
        readonly draw: Signal<() => void>
        readonly visibilityChanged: Signal<() => void>
        
        /** Emitted when the [CanvasItem] is hidden, i.e. it's no longer visible in the tree (see [method is_visible_in_tree]). */
        readonly hidden: Signal<() => void>
        readonly itemRectChanged: Signal<() => void>
    }
    namespace CanvasItemMaterial {
        enum BlendMode {
            BlendModeMix = 0,
            BlendModeAdd = 1,
            BlendModeSub = 2,
            BlendModeMul = 3,
            BlendModePremultAlpha = 4,
        }
        enum LightMode {
            LightModeNormal = 0,
            LightModeUnshaded = 1,
            LightModeLightOnly = 2,
        }
    }
    /** A material for [CanvasItem]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_canvasitemmaterial.html  
     */
    class CanvasItemMaterial extends Material {
        /** Mix blending mode. Colors are assumed to be independent of the alpha (opacity) value. */
        static readonly BLEND_MODE_MIX = 0
        
        /** Additive blending mode. */
        static readonly BLEND_MODE_ADD = 1
        
        /** Subtractive blending mode. */
        static readonly BLEND_MODE_SUB = 2
        
        /** Multiplicative blending mode. */
        static readonly BLEND_MODE_MUL = 3
        
        /** Mix blending mode. Colors are assumed to be premultiplied by the alpha (opacity) value. */
        static readonly BLEND_MODE_PREMULT_ALPHA = 4
        
        /** Render the material using both light and non-light sensitive material properties. */
        static readonly LIGHT_MODE_NORMAL = 0
        
        /** Render the material as if there were no light. */
        static readonly LIGHT_MODE_UNSHADED = 1
        
        /** Render the material as if there were only light. */
        static readonly LIGHT_MODE_LIGHT_ONLY = 2
        constructor(identifier?: any)
        get blendMode(): int64
        set blendMode(value: int64)
        get lightMode(): int64
        set lightMode(value: int64)
        get particlesAnimation(): boolean
        set particlesAnimation(value: boolean)
        get particlesAnimHFrames(): int64
        set particlesAnimHFrames(value: int64)
        get particlesAnimVFrames(): int64
        set particlesAnimVFrames(value: int64)
        get particlesAnimLoop(): boolean
        set particlesAnimLoop(value: boolean)
    }
    /** A node used for independent rendering of objects within a 2D scene.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_canvaslayer.html  
     */
    class CanvasLayer<Map extends Record<string, Node> = {}> extends Node<Map> {
        constructor(identifier?: any)
        /** Shows any [CanvasItem] under this [CanvasLayer]. This is equivalent to setting [member visible] to `true`. */
        show(): void
        
        /** Hides any [CanvasItem] under this [CanvasLayer]. This is equivalent to setting [member visible] to `false`. */
        hide(): void
        getFinalTransform(): Transform2D
        getCanvas(): Rid
        
        /** Layer index for draw order. Lower values are drawn behind higher values.  
         *      
         *  **Note:** If multiple CanvasLayers have the same layer index, [CanvasItem] children of one CanvasLayer are drawn behind the [CanvasItem] children of the other CanvasLayer. Which CanvasLayer is drawn in front is non-deterministic.  
         */
        get layer(): int64
        set layer(value: int64)
        
        /** If `false`, any [CanvasItem] under this [CanvasLayer] will be hidden.  
         *  Unlike [member CanvasItem.visible], visibility of a [CanvasLayer] isn't propagated to underlying layers.  
         */
        get visible(): boolean
        set visible(value: boolean)
        
        /** The layer's base offset. */
        get offset(): Vector2
        set offset(value: Vector2)
        
        /** The layer's rotation in radians. */
        get rotation(): float64
        set rotation(value: float64)
        
        /** The layer's scale. */
        get scale(): Vector2
        set scale(value: Vector2)
        
        /** The layer's transform. */
        get transform(): Transform2D
        set transform(value: Transform2D)
        get customViewport(): Viewport
        set customViewport(value: Viewport)
        get followViewportEnabled(): boolean
        set followViewportEnabled(value: boolean)
        get followViewportScale(): float64
        set followViewportScale(value: float64)
        readonly visibilityChanged: Signal<() => void>
    }
    /** A node that applies a color tint to a canvas.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_canvasmodulate.html  
     */
    class CanvasModulate<Map extends Record<string, Node> = {}> extends Node2D<Map> {
        constructor(identifier?: any)
        /** The tint color to apply. */
        get color(): Color
        set color(value: Color)
    }
    /** Texture with optional normal and specular maps for use in 2D rendering.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_canvastexture.html  
     */
    class CanvasTexture extends Texture2D {
        constructor(identifier?: any)
        get diffuseTexture(): Texture2D
        set diffuseTexture(value: Texture2D)
        get normalTexture(): Texture2D
        set normalTexture(value: Texture2D)
        get specularTexture(): Texture2D
        set specularTexture(value: Texture2D)
        get specularColor(): Color
        set specularColor(value: Color)
        get specularShininess(): float64
        set specularShininess(value: float64)
        get textureFilter(): int64
        set textureFilter(value: int64)
        get textureRepeat(): int64
        set textureRepeat(value: int64)
    }
    /** Class representing a capsule-shaped [PrimitiveMesh].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_capsulemesh.html  
     */
    class CapsuleMesh extends PrimitiveMesh {
        constructor(identifier?: any)
        /** Radius of the capsule mesh. */
        get radius(): float64
        set radius(value: float64)
        
        /** Total height of the capsule mesh (including the hemispherical ends). */
        get height(): float64
        set height(value: float64)
        get radialSegments(): int64
        set radialSegments(value: int64)
        
        /** Number of rings along the height of the capsule. */
        get rings(): int64
        set rings(value: int64)
    }
    /** A 2D capsule shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_capsuleshape2d.html  
     */
    class CapsuleShape2D extends Shape2D {
        constructor(identifier?: any)
        /** The capsule's radius. */
        get radius(): float64
        set radius(value: float64)
        
        /** The capsule's height. */
        get height(): float64
        set height(value: float64)
    }
    /** A 3D capsule shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_capsuleshape3d.html  
     */
    class CapsuleShape3D extends Shape3D {
        constructor(identifier?: any)
        /** The capsule's radius. */
        get radius(): float64
        set radius(value: float64)
        
        /** The capsule's height. */
        get height(): float64
        set height(value: float64)
    }
    /** A container that keeps child controls in its center.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_centercontainer.html  
     */
    class CenterContainer<Map extends Record<string, Node> = {}> extends Container<Map> {
        constructor(identifier?: any)
        get useTopLeft(): boolean
        set useTopLeft(value: boolean)
    }
    /** Controls how an individual character will be displayed in a [RichTextEffect].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_charfxtransform.html  
     */
    class CharFXTransform extends RefCounted {
        constructor(identifier?: any)
        /** The current transform of the current glyph. It can be overridden (for example, by driving the position and rotation from a curve). You can also alter the existing value to apply transforms on top of other effects. */
        get transform(): Transform2D
        set transform(value: Transform2D)
        
        /** Absolute character range in the string, corresponding to the glyph.  
         *      
         *  **Note:** Read-only. Setting this property won't affect drawing.  
         */
        get range(): Vector2I
        set range(value: Vector2I)
        get elapsedTime(): float64
        set elapsedTime(value: float64)
        
        /** If `true`, the character will be drawn. If `false`, the character will be hidden. Characters around hidden characters will reflow to take the space of hidden characters. If this is not desired, set their [member color] to `Color(1, 1, 1, 0)` instead. */
        get visible(): boolean
        set visible(value: boolean)
        
        /** If `true`, FX transform is called for outline drawing.  
         *      
         *  **Note:** Read-only. Setting this property won't affect drawing.  
         */
        get outline(): boolean
        set outline(value: boolean)
        
        /** The position offset the character will be drawn with (in pixels). */
        get offset(): Vector2
        set offset(value: Vector2)
        
        /** The color the character will be drawn with. */
        get color(): Color
        set color(value: Color)
        
        /** Contains the arguments passed in the opening BBCode tag. By default, arguments are strings; if their contents match a type such as [bool], [int] or [float], they will be converted automatically. Color codes in the form `#rrggbb` or `#rgb` will be converted to an opaque [Color]. String arguments may not contain spaces, even if they're quoted. If present, quotes will also be present in the final string.  
         *  For example, the opening BBCode tag `[example foo=hello bar=true baz=42 color=#ffffff]` will map to the following [Dictionary]:  
         *    
         */
        get env(): GDictionary
        set env(value: GDictionary)
        get glyphIndex(): int64
        set glyphIndex(value: int64)
        get glyphCount(): int64
        set glyphCount(value: int64)
        get glyphFlags(): int64
        set glyphFlags(value: int64)
        get relativeIndex(): int64
        set relativeIndex(value: int64)
        
        /** [TextServer] RID of the font used to render glyph, this value can be used with `TextServer.font_*` methods to retrieve font information.  
         *      
         *  **Note:** Read-only. Setting this property won't affect drawing.  
         */
        get font(): Rid
        set font(value: Rid)
    }
    namespace CharacterBody2D {
        enum MotionMode {
            MotionModeGrounded = 0,
            MotionModeFloating = 1,
        }
        enum PlatformOnLeave {
            PlatformOnLeaveAddVelocity = 0,
            PlatformOnLeaveAddUpwardVelocity = 1,
            PlatformOnLeaveDoNothing = 2,
        }
    }
    /** A 2D physics body specialized for characters moved by script.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_characterbody2d.html  
     */
    class CharacterBody2D<Map extends Record<string, Node> = {}> extends PhysicsBody2D<Map> {
        /** Apply when notions of walls, ceiling and floor are relevant. In this mode the body motion will react to slopes (acceleration/slowdown). This mode is suitable for sided games like platformers. */
        static readonly MOTION_MODE_GROUNDED = 0
        
        /** Apply when there is no notion of floor or ceiling. All collisions will be reported as `on_wall`. In this mode, when you slide, the speed will always be constant. This mode is suitable for top-down games. */
        static readonly MOTION_MODE_FLOATING = 1
        
        /** Add the last platform velocity to the [member velocity] when you leave a moving platform. */
        static readonly PLATFORM_ON_LEAVE_ADD_VELOCITY = 0
        
        /** Add the last platform velocity to the [member velocity] when you leave a moving platform, but any downward motion is ignored. It's useful to keep full jump height even when the platform is moving down. */
        static readonly PLATFORM_ON_LEAVE_ADD_UPWARD_VELOCITY = 1
        
        /** Do nothing when leaving a platform. */
        static readonly PLATFORM_ON_LEAVE_DO_NOTHING = 2
        constructor(identifier?: any)
        moveAndSlide(): boolean
        applyFloorSnap(): void
        isOnFloor(): boolean
        isOnFloorOnly(): boolean
        isOnCeiling(): boolean
        isOnCeilingOnly(): boolean
        isOnWall(): boolean
        isOnWallOnly(): boolean
        getFloorNormal(): Vector2
        getWallNormal(): Vector2
        getLastMotion(): Vector2
        getPositionDelta(): Vector2
        getRealVelocity(): Vector2
        getFloorAngle(upDirection: Vector2 = new Vector2(0, -1)): float64
        getPlatformVelocity(): Vector2
        getSlideCollisionCount(): int64
        getSlideCollision(slideIdx: int64): KinematicCollision2D
        getLastSlideCollision(): KinematicCollision2D
        get motionMode(): int64
        set motionMode(value: int64)
        get upDirection(): Vector2
        set upDirection(value: Vector2)
        
        /** Current velocity vector in pixels per second, used and modified during calls to [method move_and_slide]. */
        get velocity(): Vector2
        set velocity(value: Vector2)
        get slideOnCeiling(): boolean
        set slideOnCeiling(value: boolean)
        get maxSlides(): int64
        set maxSlides(value: int64)
        get wallMinSlideAngle(): float64
        set wallMinSlideAngle(value: float64)
        get floorStopOnSlope(): boolean
        set floorStopOnSlope(value: boolean)
        get floorConstantSpeed(): boolean
        set floorConstantSpeed(value: boolean)
        get floorBlockOnWall(): boolean
        set floorBlockOnWall(value: boolean)
        get floorMaxAngle(): float64
        set floorMaxAngle(value: float64)
        get floorSnapLength(): float64
        set floorSnapLength(value: float64)
        get platformOnLeave(): int64
        set platformOnLeave(value: int64)
        get platformFloorLayers(): int64
        set platformFloorLayers(value: int64)
        get platformWallLayers(): int64
        set platformWallLayers(value: int64)
        get safeMargin(): float64
        set safeMargin(value: float64)
    }
    namespace CharacterBody3D {
        enum MotionMode {
            MotionModeGrounded = 0,
            MotionModeFloating = 1,
        }
        enum PlatformOnLeave {
            PlatformOnLeaveAddVelocity = 0,
            PlatformOnLeaveAddUpwardVelocity = 1,
            PlatformOnLeaveDoNothing = 2,
        }
    }
    /** A 3D physics body specialized for characters moved by script.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_characterbody3d.html  
     */
    class CharacterBody3D<Map extends Record<string, Node> = {}> extends PhysicsBody3D<Map> {
        /** Apply when notions of walls, ceiling and floor are relevant. In this mode the body motion will react to slopes (acceleration/slowdown). This mode is suitable for grounded games like platformers. */
        static readonly MOTION_MODE_GROUNDED = 0
        
        /** Apply when there is no notion of floor or ceiling. All collisions will be reported as `on_wall`. In this mode, when you slide, the speed will always be constant. This mode is suitable for games without ground like space games. */
        static readonly MOTION_MODE_FLOATING = 1
        
        /** Add the last platform velocity to the [member velocity] when you leave a moving platform. */
        static readonly PLATFORM_ON_LEAVE_ADD_VELOCITY = 0
        
        /** Add the last platform velocity to the [member velocity] when you leave a moving platform, but any downward motion is ignored. It's useful to keep full jump height even when the platform is moving down. */
        static readonly PLATFORM_ON_LEAVE_ADD_UPWARD_VELOCITY = 1
        
        /** Do nothing when leaving a platform. */
        static readonly PLATFORM_ON_LEAVE_DO_NOTHING = 2
        constructor(identifier?: any)
        moveAndSlide(): boolean
        applyFloorSnap(): void
        isOnFloor(): boolean
        isOnFloorOnly(): boolean
        isOnCeiling(): boolean
        isOnCeilingOnly(): boolean
        isOnWall(): boolean
        isOnWallOnly(): boolean
        getFloorNormal(): Vector3
        getWallNormal(): Vector3
        getLastMotion(): Vector3
        getPositionDelta(): Vector3
        getRealVelocity(): Vector3
        getFloorAngle(upDirection: Vector3 = Vector3.ZERO): float64
        getPlatformVelocity(): Vector3
        getPlatformAngularVelocity(): Vector3
        getSlideCollisionCount(): int64
        getSlideCollision(slideIdx: int64): KinematicCollision3D
        getLastSlideCollision(): KinematicCollision3D
        get motionMode(): int64
        set motionMode(value: int64)
        get upDirection(): Vector3
        set upDirection(value: Vector3)
        get slideOnCeiling(): boolean
        set slideOnCeiling(value: boolean)
        
        /** Current velocity vector (typically meters per second), used and modified during calls to [method move_and_slide]. */
        get velocity(): Vector3
        set velocity(value: Vector3)
        get maxSlides(): int64
        set maxSlides(value: int64)
        get wallMinSlideAngle(): float64
        set wallMinSlideAngle(value: float64)
        get floorStopOnSlope(): boolean
        set floorStopOnSlope(value: boolean)
        get floorConstantSpeed(): boolean
        set floorConstantSpeed(value: boolean)
        get floorBlockOnWall(): boolean
        set floorBlockOnWall(value: boolean)
        get floorMaxAngle(): float64
        set floorMaxAngle(value: float64)
        get floorSnapLength(): float64
        set floorSnapLength(value: float64)
        get platformOnLeave(): int64
        set platformOnLeave(value: int64)
        get platformFloorLayers(): int64
        set platformFloorLayers(value: int64)
        get platformWallLayers(): int64
        set platformWallLayers(value: int64)
        get safeMargin(): float64
        set safeMargin(value: float64)
    }
    /** A button that represents a binary choice.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_checkbox.html  
     */
    class CheckBox<Map extends Record<string, Node> = {}> extends Button<Map> {
        constructor(identifier?: any)
    }
    /** A button that represents a binary choice.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_checkbutton.html  
     */
    class CheckButton<Map extends Record<string, Node> = {}> extends Button<Map> {
        constructor(identifier?: any)
    }
    /** A 2D circle shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_circleshape2d.html  
     */
    class CircleShape2D extends Shape2D {
        constructor(identifier?: any)
        /** The circle's radius. */
        get radius(): float64
        set radius(value: float64)
    }
    namespace CodeEdit {
        enum CodeCompletionKind {
            KindClass = 0,
            KindFunction = 1,
            KindSignal = 2,
            KindVariable = 3,
            KindMember = 4,
            KindEnum = 5,
            KindConstant = 6,
            KindNodePath = 7,
            KindFilePath = 8,
            KindPlainText = 9,
        }
        enum CodeCompletionLocation {
            LocationLocal = 0,
            LocationParentMask = 256,
            LocationOtherUserCode = 512,
            LocationOther = 1024,
        }
    }
    /** A multiline text editor designed for editing code.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_codeedit.html  
     */
    class CodeEdit<Map extends Record<string, Node> = {}> extends TextEdit<Map> {
        /** Marks the option as a class. */
        static readonly KIND_CLASS = 0
        
        /** Marks the option as a function. */
        static readonly KIND_FUNCTION = 1
        
        /** Marks the option as a Godot signal. */
        static readonly KIND_SIGNAL = 2
        
        /** Marks the option as a variable. */
        static readonly KIND_VARIABLE = 3
        
        /** Marks the option as a member. */
        static readonly KIND_MEMBER = 4
        
        /** Marks the option as an enum entry. */
        static readonly KIND_ENUM = 5
        
        /** Marks the option as a constant. */
        static readonly KIND_CONSTANT = 6
        
        /** Marks the option as a Godot node path. */
        static readonly KIND_NODE_PATH = 7
        
        /** Marks the option as a file path. */
        static readonly KIND_FILE_PATH = 8
        
        /** Marks the option as unclassified or plain text. */
        static readonly KIND_PLAIN_TEXT = 9
        
        /** The option is local to the location of the code completion query - e.g. a local variable. Subsequent value of location represent options from the outer class, the exact value represent how far they are (in terms of inner classes). */
        static readonly LOCATION_LOCAL = 0
        
        /** The option is from the containing class or a parent class, relative to the location of the code completion query. Perform a bitwise OR with the class depth (e.g. `0` for the local class, `1` for the parent, `2` for the grandparent, etc.) to store the depth of an option in the class or a parent class. */
        static readonly LOCATION_PARENT_MASK = 256
        
        /** The option is from user code which is not local and not in a derived class (e.g. Autoload Singletons). */
        static readonly LOCATION_OTHER_USER_CODE = 512
        
        /** The option is from other engine code, not covered by the other enum constants - e.g. built-in classes. */
        static readonly LOCATION_OTHER = 1024
        constructor(identifier?: any)
        /* gdvirtual */ _confirmCodeCompletion(replace: boolean): void
        /* gdvirtual */ _requestCodeCompletion(force: boolean): void
        /* gdvirtual */ _filterCodeCompletionCandidates(candidates: GArray): GArray
        doIndent(): void
        indentLines(): void
        unindentLines(): void
        convertIndent(fromLine: int64 = -1, toLine: int64 = -1): void
        addAutoBraceCompletionPair(startKey: string, endKey: string): void
        hasAutoBraceCompletionOpenKey(openKey: string): boolean
        hasAutoBraceCompletionCloseKey(closeKey: string): boolean
        getAutoBraceCompletionCloseKey(openKey: string): string
        setLineAsBreakpoint(line: int64, breakpointed: boolean): void
        isLineBreakpointed(line: int64): boolean
        clearBreakpointedLines(): void
        getBreakpointedLines(): PackedInt32Array
        setLineAsBookmarked(line: int64, bookmarked: boolean): void
        isLineBookmarked(line: int64): boolean
        clearBookmarkedLines(): void
        getBookmarkedLines(): PackedInt32Array
        setLineAsExecuting(line: int64, executing: boolean): void
        isLineExecuting(line: int64): boolean
        clearExecutingLines(): void
        getExecutingLines(): PackedInt32Array
        canFoldLine(line: int64): boolean
        foldLine(line: int64): void
        unfoldLine(line: int64): void
        foldAllLines(): void
        unfoldAllLines(): void
        toggleFoldableLine(line: int64): void
        toggleFoldableLinesAtCarets(): void
        isLineFolded(line: int64): boolean
        getFoldedLines(): GArray
        createCodeRegion(): void
        getCodeRegionStartTag(): string
        getCodeRegionEndTag(): string
        setCodeRegionTags(start: string = 'region', end: string = 'endregion'): void
        isLineCodeRegionStart(line: int64): boolean
        isLineCodeRegionEnd(line: int64): boolean
        addStringDelimiter(startKey: string, endKey: string, lineOnly: boolean = false): void
        removeStringDelimiter(startKey: string): void
        hasStringDelimiter(startKey: string): boolean
        clearStringDelimiters(): void
        isInString(line: int64, column: int64 = -1): int64
        addCommentDelimiter(startKey: string, endKey: string, lineOnly: boolean = false): void
        removeCommentDelimiter(startKey: string): void
        hasCommentDelimiter(startKey: string): boolean
        clearCommentDelimiters(): void
        isInComment(line: int64, column: int64 = -1): int64
        getDelimiterStartKey(delimiterIndex: int64): string
        getDelimiterEndKey(delimiterIndex: int64): string
        getDelimiterStartPosition(line: int64, column: int64): Vector2
        getDelimiterEndPosition(line: int64, column: int64): Vector2
        setCodeHint(codeHint: string): void
        setCodeHintDrawBelow(drawBelow: boolean): void
        getTextForCodeCompletion(): string
        requestCodeCompletion(force: boolean = false): void
        addCodeCompletionOption(type: CodeEdit.CodeCompletionKind, displayText: string, insertText: string, textColor: Color = new Color(1, 1, 1, 1), icon: Resource = undefined, value: any = <any> {}, location: int64 = 1024): void
        updateCodeCompletionOptions(force: boolean): void
        getCodeCompletionOptions(): GArray
        getCodeCompletionOption(index: int64): GDictionary
        getCodeCompletionSelectedIndex(): int64
        setCodeCompletionSelectedIndex(index: int64): void
        confirmCodeCompletion(replace: boolean = false): void
        cancelCodeCompletion(): void
        getTextForSymbolLookup(): string
        getTextWithCursorChar(line: int64, column: int64): string
        setSymbolLookupWordAsValid(valid: boolean): void
        moveLinesUp(): void
        moveLinesDown(): void
        deleteLines(): void
        duplicateSelection(): void
        duplicateLines(): void
        get symbolLookupOnClick(): boolean
        set symbolLookupOnClick(value: boolean)
        get symbolTooltipOnHover(): boolean
        set symbolTooltipOnHover(value: boolean)
        get lineFolding(): boolean
        set lineFolding(value: boolean)
        get lineLengthGuidelines(): PackedInt32Array
        set lineLengthGuidelines(value: PackedInt32Array | int32[])
        get guttersDrawBreakpointsGutter(): boolean
        set guttersDrawBreakpointsGutter(value: boolean)
        get guttersDrawBookmarks(): boolean
        set guttersDrawBookmarks(value: boolean)
        get guttersDrawExecutingLines(): boolean
        set guttersDrawExecutingLines(value: boolean)
        get guttersDrawLineNumbers(): boolean
        set guttersDrawLineNumbers(value: boolean)
        get guttersZeroPadLineNumbers(): boolean
        set guttersZeroPadLineNumbers(value: boolean)
        get guttersDrawFoldGutter(): boolean
        set guttersDrawFoldGutter(value: boolean)
        get delimiterStrings(): PackedStringArray
        set delimiterStrings(value: PackedStringArray | string[])
        get delimiterComments(): PackedStringArray
        set delimiterComments(value: PackedStringArray | string[])
        get codeCompletionEnabled(): boolean
        set codeCompletionEnabled(value: boolean)
        get codeCompletionPrefixes(): PackedStringArray
        set codeCompletionPrefixes(value: PackedStringArray | string[])
        get indentSize(): int64
        set indentSize(value: int64)
        get indentUseSpaces(): boolean
        set indentUseSpaces(value: boolean)
        get indentAutomatic(): boolean
        set indentAutomatic(value: boolean)
        get indentAutomaticPrefixes(): PackedStringArray
        set indentAutomaticPrefixes(value: PackedStringArray | string[])
        get autoBraceCompletionEnabled(): boolean
        set autoBraceCompletionEnabled(value: boolean)
        get autoBraceCompletionHighlightMatching(): boolean
        set autoBraceCompletionHighlightMatching(value: boolean)
        get autoBraceCompletionPairs(): GDictionary
        set autoBraceCompletionPairs(value: GDictionary)
        readonly breakpointToggled: Signal<(line: int64) => void>
        readonly codeCompletionRequested: Signal<() => void>
        readonly symbolLookup: Signal<(symbol: string, line: int64, column: int64) => void>
        readonly symbolValidate: Signal<(symbol: string) => void>
        readonly symbolHovered: Signal<(symbol: string, line: int64, column: int64) => void>
    }
    /** A syntax highlighter intended for code.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_codehighlighter.html  
     */
    class CodeHighlighter extends SyntaxHighlighter {
        constructor(identifier?: any)
        addKeywordColor(keyword: string, color: Color): void
        removeKeywordColor(keyword: string): void
        hasKeywordColor(keyword: string): boolean
        getKeywordColor(keyword: string): Color
        clearKeywordColors(): void
        addMemberKeywordColor(memberKeyword: string, color: Color): void
        removeMemberKeywordColor(memberKeyword: string): void
        hasMemberKeywordColor(memberKeyword: string): boolean
        getMemberKeywordColor(memberKeyword: string): Color
        clearMemberKeywordColors(): void
        addColorRegion(startKey: string, endKey: string, color: Color, lineOnly: boolean = false): void
        removeColorRegion(startKey: string): void
        hasColorRegion(startKey: string): boolean
        clearColorRegions(): void
        get numberColor(): Color
        set numberColor(value: Color)
        get symbolColor(): Color
        set symbolColor(value: Color)
        get functionColor(): Color
        set functionColor(value: Color)
        get memberVariableColor(): Color
        set memberVariableColor(value: Color)
        get keywordColors(): GDictionary
        set keywordColors(value: GDictionary)
        get memberKeywordColors(): GDictionary
        set memberKeywordColors(value: GDictionary)
        get colorRegions(): GDictionary
        set colorRegions(value: GDictionary)
    }
    namespace CollisionObject2D {
        enum DisableMode {
            DisableModeRemove = 0,
            DisableModeMakeStatic = 1,
            DisableModeKeepActive = 2,
        }
    }
    /** Abstract base class for 2D physics objects.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_collisionobject2d.html  
     */
    class CollisionObject2D<Map extends Record<string, Node> = {}> extends Node2D<Map> {
        /** When [member Node.process_mode] is set to [constant Node.PROCESS_MODE_DISABLED], remove from the physics simulation to stop all physics interactions with this [CollisionObject2D].  
         *  Automatically re-added to the physics simulation when the [Node] is processed again.  
         */
        static readonly DISABLE_MODE_REMOVE = 0
        
        /** When [member Node.process_mode] is set to [constant Node.PROCESS_MODE_DISABLED], make the body static. Doesn't affect [Area2D]. [PhysicsBody2D] can't be affected by forces or other bodies while static.  
         *  Automatically set [PhysicsBody2D] back to its original mode when the [Node] is processed again.  
         */
        static readonly DISABLE_MODE_MAKE_STATIC = 1
        
        /** When [member Node.process_mode] is set to [constant Node.PROCESS_MODE_DISABLED], do not affect the physics simulation. */
        static readonly DISABLE_MODE_KEEP_ACTIVE = 2
        constructor(identifier?: any)
        /* gdvirtual */ _inputEvent(viewport: Viewport, event: InputEvent, shapeIdx: int64): void
        /* gdvirtual */ _mouseEnter(): void
        /* gdvirtual */ _mouseExit(): void
        /* gdvirtual */ _mouseShapeEnter(shapeIdx: int64): void
        /* gdvirtual */ _mouseShapeExit(shapeIdx: int64): void
        getRid(): Rid
        setCollisionLayerValue(layerNumber: int64, value: boolean): void
        getCollisionLayerValue(layerNumber: int64): boolean
        setCollisionMaskValue(layerNumber: int64, value: boolean): void
        getCollisionMaskValue(layerNumber: int64): boolean
        createShapeOwner(owner: GObject): int64
        removeShapeOwner(ownerId: int64): void
        getShapeOwners(): PackedInt32Array
        shapeOwnerSetTransform(ownerId: int64, transform: Transform2D): void
        shapeOwnerGetTransform(ownerId: int64): Transform2D
        shapeOwnerGetOwner(ownerId: int64): GObject
        shapeOwnerSetDisabled(ownerId: int64, disabled: boolean): void
        isShapeOwnerDisabled(ownerId: int64): boolean
        shapeOwnerSetOneWayCollision(ownerId: int64, enable: boolean): void
        isShapeOwnerOneWayCollisionEnabled(ownerId: int64): boolean
        shapeOwnerSetOneWayCollisionMargin(ownerId: int64, margin: float64): void
        getShapeOwnerOneWayCollisionMargin(ownerId: int64): float64
        shapeOwnerAddShape(ownerId: int64, shape: Shape2D): void
        shapeOwnerGetShapeCount(ownerId: int64): int64
        shapeOwnerGetShape(ownerId: int64, shapeId: int64): Shape2D
        shapeOwnerGetShapeIndex(ownerId: int64, shapeId: int64): int64
        shapeOwnerRemoveShape(ownerId: int64, shapeId: int64): void
        shapeOwnerClearShapes(ownerId: int64): void
        shapeFindOwner(shapeIndex: int64): int64
        get disableMode(): int64
        set disableMode(value: int64)
        get collisionLayer(): int64
        set collisionLayer(value: int64)
        get collisionMask(): int64
        set collisionMask(value: int64)
        get collisionPriority(): float64
        set collisionPriority(value: float64)
        get inputPickable(): boolean
        set inputPickable(value: boolean)
        readonly inputEvent: Signal<(viewport: Node, event: InputEvent, shapeIdx: int64) => void>
        readonly mouseEntered: Signal<() => void>
        readonly mouseExited: Signal<() => void>
        readonly mouseShapeEntered: Signal<(shapeIdx: int64) => void>
        readonly mouseShapeExited: Signal<(shapeIdx: int64) => void>
    }
    namespace CollisionObject3D {
        enum DisableMode {
            DisableModeRemove = 0,
            DisableModeMakeStatic = 1,
            DisableModeKeepActive = 2,
        }
    }
    /** Abstract base class for 3D physics objects.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_collisionobject3d.html  
     */
    class CollisionObject3D<Map extends Record<string, Node> = {}> extends Node3D<Map> {
        /** When [member Node.process_mode] is set to [constant Node.PROCESS_MODE_DISABLED], remove from the physics simulation to stop all physics interactions with this [CollisionObject3D].  
         *  Automatically re-added to the physics simulation when the [Node] is processed again.  
         */
        static readonly DISABLE_MODE_REMOVE = 0
        
        /** When [member Node.process_mode] is set to [constant Node.PROCESS_MODE_DISABLED], make the body static. Doesn't affect [Area3D]. [PhysicsBody3D] can't be affected by forces or other bodies while static.  
         *  Automatically set [PhysicsBody3D] back to its original mode when the [Node] is processed again.  
         */
        static readonly DISABLE_MODE_MAKE_STATIC = 1
        
        /** When [member Node.process_mode] is set to [constant Node.PROCESS_MODE_DISABLED], do not affect the physics simulation. */
        static readonly DISABLE_MODE_KEEP_ACTIVE = 2
        constructor(identifier?: any)
        /* gdvirtual */ _inputEvent(camera: Camera3D, event: InputEvent, eventPosition: Vector3, normal: Vector3, shapeIdx: int64): void
        /* gdvirtual */ _mouseEnter(): void
        /* gdvirtual */ _mouseExit(): void
        setCollisionLayerValue(layerNumber: int64, value: boolean): void
        getCollisionLayerValue(layerNumber: int64): boolean
        setCollisionMaskValue(layerNumber: int64, value: boolean): void
        getCollisionMaskValue(layerNumber: int64): boolean
        getRid(): Rid
        createShapeOwner(owner: GObject): int64
        removeShapeOwner(ownerId: int64): void
        getShapeOwners(): PackedInt32Array
        shapeOwnerSetTransform(ownerId: int64, transform: Transform3D): void
        shapeOwnerGetTransform(ownerId: int64): Transform3D
        shapeOwnerGetOwner(ownerId: int64): GObject
        shapeOwnerSetDisabled(ownerId: int64, disabled: boolean): void
        isShapeOwnerDisabled(ownerId: int64): boolean
        shapeOwnerAddShape(ownerId: int64, shape: Shape3D): void
        shapeOwnerGetShapeCount(ownerId: int64): int64
        shapeOwnerGetShape(ownerId: int64, shapeId: int64): Shape3D
        shapeOwnerGetShapeIndex(ownerId: int64, shapeId: int64): int64
        shapeOwnerRemoveShape(ownerId: int64, shapeId: int64): void
        shapeOwnerClearShapes(ownerId: int64): void
        shapeFindOwner(shapeIndex: int64): int64
        get disableMode(): int64
        set disableMode(value: int64)
        get collisionLayer(): int64
        set collisionLayer(value: int64)
        get collisionMask(): int64
        set collisionMask(value: int64)
        get collisionPriority(): float64
        set collisionPriority(value: float64)
        get inputRayPickable(): boolean
        set inputRayPickable(value: boolean)
        get inputCaptureOnDrag(): boolean
        set inputCaptureOnDrag(value: boolean)
        readonly inputEvent: Signal<(camera: Node, event: InputEvent, eventPosition: Vector3, normal: Vector3, shapeIdx: int64) => void>
        readonly mouseEntered: Signal<() => void>
        readonly mouseExited: Signal<() => void>
    }
    namespace CollisionPolygon2D {
        enum BuildMode {
            BuildSolids = 0,
            BuildSegments = 1,
        }
    }
    /** A node that provides a polygon shape to a [CollisionObject2D] parent.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_collisionpolygon2d.html  
     */
    class CollisionPolygon2D<Map extends Record<string, Node> = {}> extends Node2D<Map> {
        /** Collisions will include the polygon and its contained area. In this mode the node has the same effect as several [ConvexPolygonShape2D] nodes, one for each convex shape in the convex decomposition of the polygon (but without the overhead of multiple nodes). */
        static readonly BUILD_SOLIDS = 0
        
        /** Collisions will only include the polygon edges. In this mode the node has the same effect as a single [ConcavePolygonShape2D] made of segments, with the restriction that each segment (after the first one) starts where the previous one ends, and the last one ends where the first one starts (forming a closed but hollow polygon). */
        static readonly BUILD_SEGMENTS = 1
        constructor(identifier?: any)
        get buildMode(): int64
        set buildMode(value: int64)
        
        /** The polygon's list of vertices. Each point will be connected to the next, and the final point will be connected to the first.  
         *      
         *  **Note:** The returned vertices are in the local coordinate space of the given [CollisionPolygon2D].  
         */
        get polygon(): PackedVector2Array
        set polygon(value: PackedVector2Array | Vector2[])
        
        /** If `true`, no collisions will be detected. */
        get disabled(): boolean
        set disabled(value: boolean)
        get oneWayCollision(): boolean
        set oneWayCollision(value: boolean)
        get oneWayCollisionMargin(): float64
        set oneWayCollisionMargin(value: float64)
    }
    /** A node that provides a thickened polygon shape (a prism) to a [CollisionObject3D] parent.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_collisionpolygon3d.html  
     */
    class CollisionPolygon3D<Map extends Record<string, Node> = {}> extends Node3D<Map> {
        constructor(identifier?: any)
        _isEditable3DPolygon(): boolean
        
        /** Length that the resulting collision extends in either direction perpendicular to its 2D polygon. */
        get depth(): float64
        set depth(value: float64)
        
        /** If `true`, no collision will be produced. */
        get disabled(): boolean
        set disabled(value: boolean)
        
        /** Array of vertices which define the 2D polygon in the local XY plane. */
        get polygon(): PackedVector2Array
        set polygon(value: PackedVector2Array | Vector2[])
        
        /** The collision margin for the generated [Shape3D]. See [member Shape3D.margin] for more details. */
        get margin(): float64
        set margin(value: float64)
        get debugColor(): Color
        set debugColor(value: Color)
        get debugFill(): boolean
        set debugFill(value: boolean)
    }
    /** A node that provides a [Shape2D] to a [CollisionObject2D] parent.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_collisionshape2d.html  
     */
    class CollisionShape2D<Map extends Record<string, Node> = {}> extends Node2D<Map> {
        constructor(identifier?: any)
        /** The actual shape owned by this collision shape. */
        get shape(): Shape2D
        set shape(value: Shape2D)
        
        /** A disabled collision shape has no effect in the world. This property should be changed with [method Object.set_deferred]. */
        get disabled(): boolean
        set disabled(value: boolean)
        get oneWayCollision(): boolean
        set oneWayCollision(value: boolean)
        get oneWayCollisionMargin(): float64
        set oneWayCollisionMargin(value: float64)
        get debugColor(): Color
        set debugColor(value: Color)
    }
    /** A node that provides a [Shape3D] to a [CollisionObject3D] parent.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_collisionshape3d.html  
     */
    class CollisionShape3D<Map extends Record<string, Node> = {}> extends Node3D<Map> {
        constructor(identifier?: any)
        resourceChanged(resource: Resource): void
        makeConvexFromSiblings(): void
        
        /** The actual shape owned by this collision shape. */
        get shape(): Shape3D
        set shape(value: Shape3D)
        
        /** A disabled collision shape has no effect in the world. */
        get disabled(): boolean
        set disabled(value: boolean)
        get debugColor(): Color
        set debugColor(value: Color)
        get debugFill(): boolean
        set debugFill(value: boolean)
    }
    /** A resource class for managing a palette of colors, which can be loaded and saved using [ColorPicker].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_colorpalette.html  
     */
    class ColorPalette extends Resource {
        constructor(identifier?: any)
        /** A [PackedColorArray] containing the colors in the palette. */
        get colors(): PackedColorArray
        set colors(value: PackedColorArray | Color[])
    }
    namespace ColorPicker {
        enum ColorModeType {
            ModeRgb = 0,
            ModeHsv = 1,
            ModeRaw = 2,
            ModeOkhsl = 3,
        }
        enum PickerShapeType {
            ShapeHsvRectangle = 0,
            ShapeHsvWheel = 1,
            ShapeVhsCircle = 2,
            ShapeOkhslCircle = 3,
            ShapeNone = 4,
        }
    }
    /** A widget that provides an interface for selecting or modifying a color.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_colorpicker.html  
     */
    class ColorPicker<Map extends Record<string, Node> = {}> extends VBoxContainer<Map> {
        /** Allows editing the color with Red/Green/Blue sliders. */
        static readonly MODE_RGB = 0
        
        /** Allows editing the color with Hue/Saturation/Value sliders. */
        static readonly MODE_HSV = 1
        
        /** Allows the color R, G, B component values to go beyond 1.0, which can be used for certain special operations that require it (like tinting without darkening or rendering sprites in HDR). */
        static readonly MODE_RAW = 2
        
        /** Allows editing the color with Hue/Saturation/Lightness sliders.  
         *  OKHSL is a new color space similar to HSL but that better match perception by leveraging the Oklab color space which is designed to be simple to use, while doing a good job at predicting perceived lightness, chroma and hue.  
         *  [url=https://bottosson.github.io/posts/colorpicker/]Okhsv and Okhsl color spaces[/url]  
         */
        static readonly MODE_OKHSL = 3
        
        /** HSV Color Model rectangle color space. */
        static readonly SHAPE_HSV_RECTANGLE = 0
        
        /** HSV Color Model rectangle color space with a wheel. */
        static readonly SHAPE_HSV_WHEEL = 1
        
        /** HSV Color Model circle color space. Use Saturation as a radius. */
        static readonly SHAPE_VHS_CIRCLE = 2
        
        /** HSL OK Color Model circle color space. */
        static readonly SHAPE_OKHSL_CIRCLE = 3
        
        /** The color space shape and the shape select button are hidden. Can't be selected from the shapes popup. */
        static readonly SHAPE_NONE = 4
        constructor(identifier?: any)
        addPreset(color: Color): void
        erasePreset(color: Color): void
        getPresets(): PackedColorArray
        addRecentPreset(color: Color): void
        eraseRecentPreset(color: Color): void
        getRecentPresets(): PackedColorArray
        
        /** The currently selected color. */
        get color(): Color
        set color(value: Color)
        get editAlpha(): boolean
        set editAlpha(value: boolean)
        get colorMode(): int64
        set colorMode(value: int64)
        get deferredMode(): boolean
        set deferredMode(value: boolean)
        get pickerShape(): int64
        set pickerShape(value: int64)
        get canAddSwatches(): boolean
        set canAddSwatches(value: boolean)
        get samplerVisible(): boolean
        set samplerVisible(value: boolean)
        get colorModesVisible(): boolean
        set colorModesVisible(value: boolean)
        get slidersVisible(): boolean
        set slidersVisible(value: boolean)
        get hexVisible(): boolean
        set hexVisible(value: boolean)
        get presetsVisible(): boolean
        set presetsVisible(value: boolean)
        readonly colorChanged: Signal<(color: Color) => void>
        readonly presetAdded: Signal<(color: Color) => void>
        readonly presetRemoved: Signal<(color: Color) => void>
    }
    /** A button that brings up a [ColorPicker] when pressed.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_colorpickerbutton.html  
     */
    class ColorPickerButton<Map extends Record<string, Node> = {}> extends Button<Map> {
        constructor(identifier?: any)
        getPicker(): ColorPicker
        getPopup(): PopupPanel
        _aboutToPopup(): void
        
        /** The currently selected color. */
        get color(): Color
        set color(value: Color)
        get editAlpha(): boolean
        set editAlpha(value: boolean)
        readonly colorChanged: Signal<(color: Color) => void>
        readonly popupClosed: Signal<() => void>
        readonly pickerCreated: Signal<() => void>
    }
    /** A control that displays a solid color rectangle.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_colorrect.html  
     */
    class ColorRect<Map extends Record<string, Node> = {}> extends Control<Map> {
        constructor(identifier?: any)
        /** The fill color of the rectangle. */
        get color(): Color
        set color(value: Color)
    }
    /** Stores attributes used to customize how a Viewport is rendered.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_compositor.html  
     */
    class Compositor extends Resource {
        constructor(identifier?: any)
        get compositorEffects(): GArray
        set compositorEffects(value: GArray)
    }
    namespace CompositorEffect {
        enum EffectCallbackType {
            EffectCallbackTypePreOpaque = 0,
            EffectCallbackTypePostOpaque = 1,
            EffectCallbackTypePostSky = 2,
            EffectCallbackTypePreTransparent = 3,
            EffectCallbackTypePostTransparent = 4,
            EffectCallbackTypeMax = 5,
        }
    }
    /** This resource allows for creating a custom rendering effect.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_compositoreffect.html  
     */
    class CompositorEffect extends Resource {
        /** The callback is called before our opaque rendering pass, but after depth prepass (if applicable). */
        static readonly EFFECT_CALLBACK_TYPE_PRE_OPAQUE = 0
        
        /** The callback is called after our opaque rendering pass, but before our sky is rendered. */
        static readonly EFFECT_CALLBACK_TYPE_POST_OPAQUE = 1
        
        /** The callback is called after our sky is rendered, but before our back buffers are created (and if enabled, before subsurface scattering and/or screen space reflections). */
        static readonly EFFECT_CALLBACK_TYPE_POST_SKY = 2
        
        /** The callback is called before our transparent rendering pass, but after our sky is rendered and we've created our back buffers. */
        static readonly EFFECT_CALLBACK_TYPE_PRE_TRANSPARENT = 3
        
        /** The callback is called after our transparent rendering pass, but before any built-in post-processing effects and output to our render target. */
        static readonly EFFECT_CALLBACK_TYPE_POST_TRANSPARENT = 4
        
        /** Represents the size of the [enum EffectCallbackType] enum. */
        static readonly EFFECT_CALLBACK_TYPE_MAX = 5
        constructor(identifier?: any)
        /* gdvirtual */ _renderCallback(effectCallbackType: int64, renderData: RenderData): void
        
        /** If `true` this rendering effect is applied to any viewport it is added to. */
        get enabled(): boolean
        set enabled(value: boolean)
        get effectCallbackType(): int64
        set effectCallbackType(value: int64)
        get accessResolvedColor(): boolean
        set accessResolvedColor(value: boolean)
        get accessResolvedDepth(): boolean
        set accessResolvedDepth(value: boolean)
        get needsMotionVectors(): boolean
        set needsMotionVectors(value: boolean)
        get needsNormalRoughness(): boolean
        set needsNormalRoughness(value: boolean)
        get needsSeparateSpecular(): boolean
        set needsSeparateSpecular(value: boolean)
    }
    /** An optionally compressed [Cubemap].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_compressedcubemap.html  
     */
    class CompressedCubemap extends CompressedTextureLayered {
        constructor(identifier?: any)
    }
    /** An optionally compressed [CubemapArray].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_compressedcubemaparray.html  
     */
    class CompressedCubemapArray extends CompressedTextureLayered {
        constructor(identifier?: any)
    }
    /** Texture with 2 dimensions, optionally compressed.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_compressedtexture2d.html  
     */
    class CompressedTexture2D extends Texture2D {
        constructor(identifier?: any)
        get loadPath(): string
        set loadPath(value: string)
    }
    /** Array of 2-dimensional textures, optionally compressed.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_compressedtexture2darray.html  
     */
    class CompressedTexture2DArray extends CompressedTextureLayered {
        constructor(identifier?: any)
    }
    /** Texture with 3 dimensions, optionally compressed.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_compressedtexture3d.html  
     */
    class CompressedTexture3D extends Texture3D {
        constructor(identifier?: any)
        get loadPath(): string
        set loadPath(value: string)
    }
    /** Base class for texture arrays that can optionally be compressed.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_compressedtexturelayered.html  
     */
    class CompressedTextureLayered extends TextureLayered {
        constructor(identifier?: any)
        get loadPath(): string
        set loadPath(value: string)
    }
    /** A 2D polyline shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_concavepolygonshape2d.html  
     */
    class ConcavePolygonShape2D extends Shape2D {
        constructor(identifier?: any)
        /** The array of points that make up the [ConcavePolygonShape2D]'s line segments. The array (of length divisible by two) is naturally divided into pairs (one pair for each segment); each pair consists of the starting point of a segment and the endpoint of a segment. */
        get segments(): PackedVector2Array
        set segments(value: PackedVector2Array | Vector2[])
    }
    /** A 3D trimesh shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_concavepolygonshape3d.html  
     */
    class ConcavePolygonShape3D extends Shape3D {
        constructor(identifier?: any)
        get data(): PackedVector3Array
        set data(value: PackedVector3Array | Vector3[])
        get backfaceCollision(): boolean
        set backfaceCollision(value: boolean)
    }
    namespace ConeTwistJoint3D {
        enum Param {
            ParamSwingSpan = 0,
            ParamTwistSpan = 1,
            ParamBias = 2,
            ParamSoftness = 3,
            ParamRelaxation = 4,
            ParamMax = 5,
        }
    }
    /** A physics joint that connects two 3D physics bodies in a way that simulates a ball-and-socket joint.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_conetwistjoint3d.html  
     */
    class ConeTwistJoint3D<Map extends Record<string, Node> = {}> extends Joint3D<Map> {
        /** Swing is rotation from side to side, around the axis perpendicular to the twist axis.  
         *  The swing span defines, how much rotation will not get corrected along the swing axis.  
         *  Could be defined as looseness in the [ConeTwistJoint3D].  
         *  If below 0.05, this behavior is locked.  
         */
        static readonly PARAM_SWING_SPAN = 0
        
        /** Twist is the rotation around the twist axis, this value defined how far the joint can twist.  
         *  Twist is locked if below 0.05.  
         */
        static readonly PARAM_TWIST_SPAN = 1
        
        /** The speed with which the swing or twist will take place.  
         *  The higher, the faster.  
         */
        static readonly PARAM_BIAS = 2
        
        /** The ease with which the joint starts to twist. If it's too low, it takes more force to start twisting the joint. */
        static readonly PARAM_SOFTNESS = 3
        
        /** Defines, how fast the swing- and twist-speed-difference on both sides gets synced. */
        static readonly PARAM_RELAXATION = 4
        
        /** Represents the size of the [enum Param] enum. */
        static readonly PARAM_MAX = 5
        constructor(identifier?: any)
        setParam(param: ConeTwistJoint3D.Param, value: float64): void
        getParam(param: ConeTwistJoint3D.Param): float64
        get swingSpan(): float64
        set swingSpan(value: float64)
        get twistSpan(): float64
        set twistSpan(value: float64)
        
        /** The speed with which the swing or twist will take place.  
         *  The higher, the faster.  
         */
        get bias(): float64
        set bias(value: float64)
        
        /** The ease with which the joint starts to twist. If it's too low, it takes more force to start twisting the joint. */
        get softness(): float64
        set softness(value: float64)
        
        /** Defines, how fast the swing- and twist-speed-difference on both sides gets synced. */
        get relaxation(): float64
        set relaxation(value: float64)
    }
    /** Helper class to handle INI-style files.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_configfile.html  
     */
    class ConfigFile extends RefCounted {
        constructor(identifier?: any)
        setValue(section: string, key: string, value: any): void
        getValue(section: string, key: string, default_: any = <any> {}): any
        hasSection(section: string): boolean
        hasSectionKey(section: string, key: string): boolean
        getSections(): PackedStringArray
        getSectionKeys(section: string): PackedStringArray
        eraseSection(section: string): void
        eraseSectionKey(section: string, key: string): void
        
        /** Loads the config file specified as a parameter. The file's contents are parsed and loaded in the [ConfigFile] object which the method was called on.  
         *  Returns [constant OK] on success, or one of the other [enum Error] values if the operation failed.  
         */
        load(path: string): GError
        
        /** Parses the passed string as the contents of a config file. The string is parsed and loaded in the ConfigFile object which the method was called on.  
         *  Returns [constant OK] on success, or one of the other [enum Error] values if the operation failed.  
         */
        parse(data: string): GError
        
        /** Saves the contents of the [ConfigFile] object to the file specified as a parameter. The output file uses an INI-style structure.  
         *  Returns [constant OK] on success, or one of the other [enum Error] values if the operation failed.  
         */
        save(path: string): GError
        encodeToText(): string
        loadEncrypted(path: string, key: PackedByteArray | byte[] | ArrayBuffer): GError
        loadEncryptedPass(path: string, password: string): GError
        saveEncrypted(path: string, key: PackedByteArray | byte[] | ArrayBuffer): GError
        saveEncryptedPass(path: string, password: string): GError
        
        /** Removes the entire contents of the config. */
        clear(): void
    }
    /** A dialog used for confirmation of actions.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_confirmationdialog.html  
     */
    class ConfirmationDialog<Map extends Record<string, Node> = {}> extends AcceptDialog<Map> {
        constructor(identifier?: any)
        getCancelButton(): Button
        get cancelButtonText(): string
        set cancelButtonText(value: string)
    }
    /** Base class for all GUI containers.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_container.html  
     */
    class Container<Map extends Record<string, Node> = {}> extends Control<Map> {
        /** Notification just before children are going to be sorted, in case there's something to process beforehand. */
        static readonly NOTIFICATION_PRE_SORT_CHILDREN = 50
        
        /** Notification for when sorting the children, it must be obeyed immediately. */
        static readonly NOTIFICATION_SORT_CHILDREN = 51
        constructor(identifier?: any)
        /* gdvirtual */ _getAllowedSizeFlagsHorizontal(): PackedInt32Array
        /* gdvirtual */ _getAllowedSizeFlagsVertical(): PackedInt32Array
        queueSort(): void
        fitChildInRect(child: Control, rect: Rect2): void
        readonly preSortChildren: Signal<() => void>
        readonly sortChildren: Signal<() => void>
    }
    namespace Control {
        enum FocusMode {
            FocusNone = 0,
            FocusClick = 1,
            FocusAll = 2,
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
        enum LayoutPreset {
            PresetTopLeft = 0,
            PresetTopRight = 1,
            PresetBottomLeft = 2,
            PresetBottomRight = 3,
            PresetCenterLeft = 4,
            PresetCenterTop = 5,
            PresetCenterRight = 6,
            PresetCenterBottom = 7,
            PresetCenter = 8,
            PresetLeftWide = 9,
            PresetTopWide = 10,
            PresetRightWide = 11,
            PresetBottomWide = 12,
            PresetVcenterWide = 13,
            PresetHcenterWide = 14,
            PresetFullRect = 15,
        }
        enum LayoutPresetMode {
            PresetModeMinsize = 0,
            PresetModeKeepWidth = 1,
            PresetModeKeepHeight = 2,
            PresetModeKeepSize = 3,
        }
        enum SizeFlags {
            SizeShrinkBegin = 0,
            SizeFill = 1,
            SizeExpand = 2,
            SizeExpandFill = 3,
            SizeShrinkCenter = 4,
            SizeShrinkEnd = 8,
        }
        enum MouseFilter {
            MouseFilterStop = 0,
            MouseFilterPass = 1,
            MouseFilterIgnore = 2,
        }
        enum GrowDirection {
            GrowDirectionBegin = 0,
            GrowDirectionEnd = 1,
            GrowDirectionBoth = 2,
        }
        enum Anchor {
            AnchorBegin = 0,
            AnchorEnd = 1,
        }
        enum LayoutDirection {
            LayoutDirectionInherited = 0,
            LayoutDirectionApplicationLocale = 1,
            LayoutDirectionLtr = 2,
            LayoutDirectionRtl = 3,
            LayoutDirectionSystemLocale = 4,
            LayoutDirectionMax = 5,
            LayoutDirectionLocale = 1,
        }
        enum TextDirection {
            TextDirectionInherited = 3,
            TextDirectionAuto = 0,
            TextDirectionLtr = 1,
            TextDirectionRtl = 2,
        }
    }
    /** Base class for all GUI controls. Adapts its position and size based on its parent control.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_control.html  
     */
    class Control<Map extends Record<string, Node> = {}> extends CanvasItem<Map> {
        /** The node cannot grab focus. Use with [member focus_mode]. */
        static readonly FOCUS_NONE = 0
        
        /** The node can only grab focus on mouse clicks. Use with [member focus_mode]. */
        static readonly FOCUS_CLICK = 1
        
        /** The node can grab focus on mouse click, using the arrows and the Tab keys on the keyboard, or using the D-pad buttons on a gamepad. Use with [member focus_mode]. */
        static readonly FOCUS_ALL = 2
        
        /** Sent when the node changes size. Use [member size] to get the new size. */
        static readonly NOTIFICATION_RESIZED = 40
        
        /** Sent when the mouse cursor enters the control's (or any child control's) visible area, that is not occluded behind other Controls or Windows, provided its [member mouse_filter] lets the event reach it and regardless if it's currently focused or not.  
         *      
         *  **Note:** [member CanvasItem.z_index] doesn't affect which Control receives the notification.  
         *  See also [constant NOTIFICATION_MOUSE_ENTER_SELF].  
         */
        static readonly NOTIFICATION_MOUSE_ENTER = 41
        
        /** Sent when the mouse cursor leaves the control's (and all child control's) visible area, that is not occluded behind other Controls or Windows, provided its [member mouse_filter] lets the event reach it and regardless if it's currently focused or not.  
         *      
         *  **Note:** [member CanvasItem.z_index] doesn't affect which Control receives the notification.  
         *  See also [constant NOTIFICATION_MOUSE_EXIT_SELF].  
         */
        static readonly NOTIFICATION_MOUSE_EXIT = 42
        
        /** Sent when the mouse cursor enters the control's visible area, that is not occluded behind other Controls or Windows, provided its [member mouse_filter] lets the event reach it and regardless if it's currently focused or not.  
         *      
         *  **Note:** [member CanvasItem.z_index] doesn't affect which Control receives the notification.  
         *  See also [constant NOTIFICATION_MOUSE_ENTER].  
         */
        static readonly NOTIFICATION_MOUSE_ENTER_SELF = 60
        
        /** Sent when the mouse cursor leaves the control's visible area, that is not occluded behind other Controls or Windows, provided its [member mouse_filter] lets the event reach it and regardless if it's currently focused or not.  
         *      
         *  **Note:** [member CanvasItem.z_index] doesn't affect which Control receives the notification.  
         *  See also [constant NOTIFICATION_MOUSE_EXIT].  
         */
        static readonly NOTIFICATION_MOUSE_EXIT_SELF = 61
        
        /** Sent when the node grabs focus. */
        static readonly NOTIFICATION_FOCUS_ENTER = 43
        
        /** Sent when the node loses focus. */
        static readonly NOTIFICATION_FOCUS_EXIT = 44
        
        /** Sent when the node needs to refresh its theme items. This happens in one of the following cases:  
         *  - The [member theme] property is changed on this node or any of its ancestors.  
         *  - The [member theme_type_variation] property is changed on this node.  
         *  - One of the node's theme property overrides is changed.  
         *  - The node enters the scene tree.  
         *      
         *  **Note:** As an optimization, this notification won't be sent from changes that occur while this node is outside of the scene tree. Instead, all of the theme item updates can be applied at once when the node enters the scene tree.  
         *      
         *  **Note:** This notification is received alongside [constant Node.NOTIFICATION_ENTER_TREE], so if you are instantiating a scene, the child nodes will not be initialized yet. You can use it to setup theming for this node, child nodes created from script, or if you want to access child nodes added in the editor, make sure the node is ready using [method Node.is_node_ready].  
         *    
         */
        static readonly NOTIFICATION_THEME_CHANGED = 45
        
        /** Sent when this node is inside a [ScrollContainer] which has begun being scrolled when dragging the scrollable area  *with a touch event* . This notification is  *not*  sent when scrolling by dragging the scrollbar, scrolling with the mouse wheel or scrolling with keyboard/gamepad events.  
         *      
         *  **Note:** This signal is only emitted on Android or iOS, or on desktop/web platforms when [member ProjectSettings.input_devices/pointing/emulate_touch_from_mouse] is enabled.  
         */
        static readonly NOTIFICATION_SCROLL_BEGIN = 47
        
        /** Sent when this node is inside a [ScrollContainer] which has stopped being scrolled when dragging the scrollable area  *with a touch event* . This notification is  *not*  sent when scrolling by dragging the scrollbar, scrolling with the mouse wheel or scrolling with keyboard/gamepad events.  
         *      
         *  **Note:** This signal is only emitted on Android or iOS, or on desktop/web platforms when [member ProjectSettings.input_devices/pointing/emulate_touch_from_mouse] is enabled.  
         */
        static readonly NOTIFICATION_SCROLL_END = 48
        
        /** Sent when the control layout direction is changed from LTR or RTL or vice versa. This notification is propagated to child Control nodes as result of a change to [member layout_direction]. */
        static readonly NOTIFICATION_LAYOUT_DIRECTION_CHANGED = 49
        
        /** Show the system's arrow mouse cursor when the user hovers the node. Use with [member mouse_default_cursor_shape]. */
        static readonly CURSOR_ARROW = 0
        
        /** Show the system's I-beam mouse cursor when the user hovers the node. The I-beam pointer has a shape similar to "I". It tells the user they can highlight or insert text. */
        static readonly CURSOR_IBEAM = 1
        
        /** Show the system's pointing hand mouse cursor when the user hovers the node. */
        static readonly CURSOR_POINTING_HAND = 2
        
        /** Show the system's cross mouse cursor when the user hovers the node. */
        static readonly CURSOR_CROSS = 3
        
        /** Show the system's wait mouse cursor when the user hovers the node. Often an hourglass. */
        static readonly CURSOR_WAIT = 4
        
        /** Show the system's busy mouse cursor when the user hovers the node. Often an arrow with a small hourglass. */
        static readonly CURSOR_BUSY = 5
        
        /** Show the system's drag mouse cursor, often a closed fist or a cross symbol, when the user hovers the node. It tells the user they're currently dragging an item, like a node in the Scene dock. */
        static readonly CURSOR_DRAG = 6
        
        /** Show the system's drop mouse cursor when the user hovers the node. It can be an open hand. It tells the user they can drop an item they're currently grabbing, like a node in the Scene dock. */
        static readonly CURSOR_CAN_DROP = 7
        
        /** Show the system's forbidden mouse cursor when the user hovers the node. Often a crossed circle. */
        static readonly CURSOR_FORBIDDEN = 8
        
        /** Show the system's vertical resize mouse cursor when the user hovers the node. A double-headed vertical arrow. It tells the user they can resize the window or the panel vertically. */
        static readonly CURSOR_VSIZE = 9
        
        /** Show the system's horizontal resize mouse cursor when the user hovers the node. A double-headed horizontal arrow. It tells the user they can resize the window or the panel horizontally. */
        static readonly CURSOR_HSIZE = 10
        
        /** Show the system's window resize mouse cursor when the user hovers the node. The cursor is a double-headed arrow that goes from the bottom left to the top right. It tells the user they can resize the window or the panel both horizontally and vertically. */
        static readonly CURSOR_BDIAGSIZE = 11
        
        /** Show the system's window resize mouse cursor when the user hovers the node. The cursor is a double-headed arrow that goes from the top left to the bottom right, the opposite of [constant CURSOR_BDIAGSIZE]. It tells the user they can resize the window or the panel both horizontally and vertically. */
        static readonly CURSOR_FDIAGSIZE = 12
        
        /** Show the system's move mouse cursor when the user hovers the node. It shows 2 double-headed arrows at a 90 degree angle. It tells the user they can move a UI element freely. */
        static readonly CURSOR_MOVE = 13
        
        /** Show the system's vertical split mouse cursor when the user hovers the node. On Windows, it's the same as [constant CURSOR_VSIZE]. */
        static readonly CURSOR_VSPLIT = 14
        
        /** Show the system's horizontal split mouse cursor when the user hovers the node. On Windows, it's the same as [constant CURSOR_HSIZE]. */
        static readonly CURSOR_HSPLIT = 15
        
        /** Show the system's help mouse cursor when the user hovers the node, a question mark. */
        static readonly CURSOR_HELP = 16
        
        /** Snap all 4 anchors to the top-left of the parent control's bounds. Use with [method set_anchors_preset]. */
        static readonly PRESET_TOP_LEFT = 0
        
        /** Snap all 4 anchors to the top-right of the parent control's bounds. Use with [method set_anchors_preset]. */
        static readonly PRESET_TOP_RIGHT = 1
        
        /** Snap all 4 anchors to the bottom-left of the parent control's bounds. Use with [method set_anchors_preset]. */
        static readonly PRESET_BOTTOM_LEFT = 2
        
        /** Snap all 4 anchors to the bottom-right of the parent control's bounds. Use with [method set_anchors_preset]. */
        static readonly PRESET_BOTTOM_RIGHT = 3
        
        /** Snap all 4 anchors to the center of the left edge of the parent control's bounds. Use with [method set_anchors_preset]. */
        static readonly PRESET_CENTER_LEFT = 4
        
        /** Snap all 4 anchors to the center of the top edge of the parent control's bounds. Use with [method set_anchors_preset]. */
        static readonly PRESET_CENTER_TOP = 5
        
        /** Snap all 4 anchors to the center of the right edge of the parent control's bounds. Use with [method set_anchors_preset]. */
        static readonly PRESET_CENTER_RIGHT = 6
        
        /** Snap all 4 anchors to the center of the bottom edge of the parent control's bounds. Use with [method set_anchors_preset]. */
        static readonly PRESET_CENTER_BOTTOM = 7
        
        /** Snap all 4 anchors to the center of the parent control's bounds. Use with [method set_anchors_preset]. */
        static readonly PRESET_CENTER = 8
        
        /** Snap all 4 anchors to the left edge of the parent control. The left offset becomes relative to the left edge and the top offset relative to the top left corner of the node's parent. Use with [method set_anchors_preset]. */
        static readonly PRESET_LEFT_WIDE = 9
        
        /** Snap all 4 anchors to the top edge of the parent control. The left offset becomes relative to the top left corner, the top offset relative to the top edge, and the right offset relative to the top right corner of the node's parent. Use with [method set_anchors_preset]. */
        static readonly PRESET_TOP_WIDE = 10
        
        /** Snap all 4 anchors to the right edge of the parent control. The right offset becomes relative to the right edge and the top offset relative to the top right corner of the node's parent. Use with [method set_anchors_preset]. */
        static readonly PRESET_RIGHT_WIDE = 11
        
        /** Snap all 4 anchors to the bottom edge of the parent control. The left offset becomes relative to the bottom left corner, the bottom offset relative to the bottom edge, and the right offset relative to the bottom right corner of the node's parent. Use with [method set_anchors_preset]. */
        static readonly PRESET_BOTTOM_WIDE = 12
        
        /** Snap all 4 anchors to a vertical line that cuts the parent control in half. Use with [method set_anchors_preset]. */
        static readonly PRESET_VCENTER_WIDE = 13
        
        /** Snap all 4 anchors to a horizontal line that cuts the parent control in half. Use with [method set_anchors_preset]. */
        static readonly PRESET_HCENTER_WIDE = 14
        
        /** Snap all 4 anchors to the respective corners of the parent control. Set all 4 offsets to 0 after you applied this preset and the [Control] will fit its parent control. Use with [method set_anchors_preset]. */
        static readonly PRESET_FULL_RECT = 15
        
        /** The control will be resized to its minimum size. */
        static readonly PRESET_MODE_MINSIZE = 0
        
        /** The control's width will not change. */
        static readonly PRESET_MODE_KEEP_WIDTH = 1
        
        /** The control's height will not change. */
        static readonly PRESET_MODE_KEEP_HEIGHT = 2
        
        /** The control's size will not change. */
        static readonly PRESET_MODE_KEEP_SIZE = 3
        
        /** Tells the parent [Container] to align the node with its start, either the top or the left edge. It is mutually exclusive with [constant SIZE_FILL] and other shrink size flags, but can be used with [constant SIZE_EXPAND] in some containers. Use with [member size_flags_horizontal] and [member size_flags_vertical].  
         *      
         *  **Note:** Setting this flag is equal to not having any size flags.  
         */
        static readonly SIZE_SHRINK_BEGIN = 0
        
        /** Tells the parent [Container] to expand the bounds of this node to fill all the available space without pushing any other node. It is mutually exclusive with shrink size flags. Use with [member size_flags_horizontal] and [member size_flags_vertical]. */
        static readonly SIZE_FILL = 1
        
        /** Tells the parent [Container] to let this node take all the available space on the axis you flag. If multiple neighboring nodes are set to expand, they'll share the space based on their stretch ratio. See [member size_flags_stretch_ratio]. Use with [member size_flags_horizontal] and [member size_flags_vertical]. */
        static readonly SIZE_EXPAND = 2
        
        /** Sets the node's size flags to both fill and expand. See [constant SIZE_FILL] and [constant SIZE_EXPAND] for more information. */
        static readonly SIZE_EXPAND_FILL = 3
        
        /** Tells the parent [Container] to center the node in the available space. It is mutually exclusive with [constant SIZE_FILL] and other shrink size flags, but can be used with [constant SIZE_EXPAND] in some containers. Use with [member size_flags_horizontal] and [member size_flags_vertical]. */
        static readonly SIZE_SHRINK_CENTER = 4
        
        /** Tells the parent [Container] to align the node with its end, either the bottom or the right edge. It is mutually exclusive with [constant SIZE_FILL] and other shrink size flags, but can be used with [constant SIZE_EXPAND] in some containers. Use with [member size_flags_horizontal] and [member size_flags_vertical]. */
        static readonly SIZE_SHRINK_END = 8
        
        /** The control will receive mouse movement input events and mouse button input events if clicked on through [method _gui_input]. The control will also receive the [signal mouse_entered] and [signal mouse_exited] signals. These events are automatically marked as handled, and they will not propagate further to other controls. This also results in blocking signals in other controls. */
        static readonly MOUSE_FILTER_STOP = 0
        
        /** The control will receive mouse movement input events and mouse button input events if clicked on through [method _gui_input]. The control will also receive the [signal mouse_entered] and [signal mouse_exited] signals.  
         *  If this control does not handle the event, the event will propagate up to its parent control if it has one. The event is bubbled up the node hierarchy until it reaches a non-[CanvasItem], a control with [constant MOUSE_FILTER_STOP], or a [CanvasItem] with [member CanvasItem.top_level] enabled. This will allow signals to fire in all controls it reaches. If no control handled it, the event will be passed to [method Node._shortcut_input] for further processing.  
         */
        static readonly MOUSE_FILTER_PASS = 1
        
        /** The control will not receive any mouse movement input events nor mouse button input events through [method _gui_input]. The control will also not receive the [signal mouse_entered] nor [signal mouse_exited] signals. This will not block other controls from receiving these events or firing the signals. Ignored events will not be handled automatically. If a child has [constant MOUSE_FILTER_PASS] and an event was passed to this control, the event will further propagate up to the control's parent.  
         *      
         *  **Note:** If the control has received [signal mouse_entered] but not [signal mouse_exited], changing the [member mouse_filter] to [constant MOUSE_FILTER_IGNORE] will cause [signal mouse_exited] to be emitted.  
         */
        static readonly MOUSE_FILTER_IGNORE = 2
        
        /** The control will grow to the left or top to make up if its minimum size is changed to be greater than its current size on the respective axis. */
        static readonly GROW_DIRECTION_BEGIN = 0
        
        /** The control will grow to the right or bottom to make up if its minimum size is changed to be greater than its current size on the respective axis. */
        static readonly GROW_DIRECTION_END = 1
        
        /** The control will grow in both directions equally to make up if its minimum size is changed to be greater than its current size. */
        static readonly GROW_DIRECTION_BOTH = 2
        
        /** Snaps one of the 4 anchor's sides to the origin of the node's `Rect`, in the top left. Use it with one of the `anchor_*` member variables, like [member anchor_left]. To change all 4 anchors at once, use [method set_anchors_preset]. */
        static readonly ANCHOR_BEGIN = 0
        
        /** Snaps one of the 4 anchor's sides to the end of the node's `Rect`, in the bottom right. Use it with one of the `anchor_*` member variables, like [member anchor_left]. To change all 4 anchors at once, use [method set_anchors_preset]. */
        static readonly ANCHOR_END = 1
        
        /** Automatic layout direction, determined from the parent control layout direction. */
        static readonly LAYOUT_DIRECTION_INHERITED = 0
        
        /** Automatic layout direction, determined from the current locale. Right-to-left layout direction is automatically used for languages that require it such as Arabic and Hebrew, but only if a valid translation file is loaded for the given language (unless said language is configured as a fallback in [member ProjectSettings.internationalization/locale/fallback]). For all other languages (or if no valid translation file is found by Godot), left-to-right layout direction is used. If using [TextServerFallback] ([member ProjectSettings.internationalization/rendering/text_driver]), left-to-right layout direction is always used regardless of the language. Right-to-left layout direction can also be forced using [member ProjectSettings.internationalization/rendering/force_right_to_left_layout_direction]. */
        static readonly LAYOUT_DIRECTION_APPLICATION_LOCALE = 1
        
        /** Left-to-right layout direction. */
        static readonly LAYOUT_DIRECTION_LTR = 2
        
        /** Right-to-left layout direction. */
        static readonly LAYOUT_DIRECTION_RTL = 3
        
        /** Automatic layout direction, determined from the system locale. Right-to-left layout direction is automatically used for languages that require it such as Arabic and Hebrew, but only if a valid translation file is loaded for the given language.. For all other languages (or if no valid translation file is found by Godot), left-to-right layout direction is used. If using [TextServerFallback] ([member ProjectSettings.internationalization/rendering/text_driver]), left-to-right layout direction is always used regardless of the language. */
        static readonly LAYOUT_DIRECTION_SYSTEM_LOCALE = 4
        
        /** Represents the size of the [enum LayoutDirection] enum. */
        static readonly LAYOUT_DIRECTION_MAX = 5
        static readonly LAYOUT_DIRECTION_LOCALE = 1
        
        /** Text writing direction is the same as layout direction. */
        static readonly TEXT_DIRECTION_INHERITED = 3
        
        /** Automatic text writing direction, determined from the current locale and text content. */
        static readonly TEXT_DIRECTION_AUTO = 0
        
        /** Left-to-right text writing direction. */
        static readonly TEXT_DIRECTION_LTR = 1
        
        /** Right-to-left text writing direction. */
        static readonly TEXT_DIRECTION_RTL = 2
        constructor(identifier?: any)
        /* gdvirtual */ _hasPoint(point: Vector2): boolean
        /* gdvirtual */ _structuredTextParser(args: GArray, text: string): GArray
        /* gdvirtual */ _getMinimumSize(): Vector2
        /* gdvirtual */ _getTooltip(atPosition: Vector2): string
        /* gdvirtual */ _getDragData(atPosition: Vector2): any
        /* gdvirtual */ _canDropData(atPosition: Vector2, data: any): boolean
        /* gdvirtual */ _dropData(atPosition: Vector2, data: any): void
        /* gdvirtual */ _makeCustomTooltip(forText: string): GObject
        /* gdvirtual */ _guiInput(event: InputEvent): void
        acceptEvent(): void
        getMinimumSize(): Vector2
        getCombinedMinimumSize(): Vector2
        setAnchorsPreset(preset: Control.LayoutPreset, keepOffsets: boolean = false): void
        setOffsetsPreset(preset: Control.LayoutPreset, resizeMode: Control.LayoutPresetMode = 0, margin: int64 = 0): void
        setAnchorsAndOffsetsPreset(preset: Control.LayoutPreset, resizeMode: Control.LayoutPresetMode = 0, margin: int64 = 0): void
        _setAnchor(side: Side, anchor: float64): void
        setAnchor(side: Side, anchor: float64, keepOffset: boolean = false, pushOppositeAnchor: boolean = true): void
        getAnchor(side: Side): float64
        setOffset(side: Side, offset: float64): void
        getOffset(offset: Side): float64
        setAnchorAndOffset(side: Side, anchor: float64, offset: float64, pushOppositeAnchor: boolean = false): void
        setBegin(position: Vector2): void
        setEnd(position: Vector2): void
        setPosition(position: Vector2, keepOffsets: boolean = false): void
        setSize(size: Vector2, keepOffsets: boolean = false): void
        resetSize(): void
        setGlobalPosition(position: Vector2, keepOffsets: boolean = false): void
        getBegin(): Vector2
        getEnd(): Vector2
        getParentAreaSize(): Vector2
        getScreenPosition(): Vector2
        getRect(): Rect2
        getGlobalRect(): Rect2
        hasFocus(): boolean
        grabFocus(): void
        releaseFocus(): void
        findPrevValidFocus(): Control
        findNextValidFocus(): Control
        findValidFocusNeighbor(side: Side): Control
        beginBulkThemeOverride(): void
        endBulkThemeOverride(): void
        addThemeIconOverride(name: StringName, texture: Texture2D): void
        addThemeStyleboxOverride(name: StringName, stylebox: StyleBox): void
        addThemeFontOverride(name: StringName, font: Font): void
        addThemeFontSizeOverride(name: StringName, fontSize: int64): void
        addThemeColorOverride(name: StringName, color: Color): void
        addThemeConstantOverride(name: StringName, constant: int64): void
        removeThemeIconOverride(name: StringName): void
        removeThemeStyleboxOverride(name: StringName): void
        removeThemeFontOverride(name: StringName): void
        removeThemeFontSizeOverride(name: StringName): void
        removeThemeColorOverride(name: StringName): void
        removeThemeConstantOverride(name: StringName): void
        getThemeIcon(name: StringName, themeType: StringName = ''): Texture2D
        getThemeStylebox(name: StringName, themeType: StringName = ''): StyleBox
        getThemeFont(name: StringName, themeType: StringName = ''): Font
        getThemeFontSize(name: StringName, themeType: StringName = ''): int64
        getThemeColor(name: StringName, themeType: StringName = ''): Color
        getThemeConstant(name: StringName, themeType: StringName = ''): int64
        hasThemeIconOverride(name: StringName): boolean
        hasThemeStyleboxOverride(name: StringName): boolean
        hasThemeFontOverride(name: StringName): boolean
        hasThemeFontSizeOverride(name: StringName): boolean
        hasThemeColorOverride(name: StringName): boolean
        hasThemeConstantOverride(name: StringName): boolean
        hasThemeIcon(name: StringName, themeType: StringName = ''): boolean
        hasThemeStylebox(name: StringName, themeType: StringName = ''): boolean
        hasThemeFont(name: StringName, themeType: StringName = ''): boolean
        hasThemeFontSize(name: StringName, themeType: StringName = ''): boolean
        hasThemeColor(name: StringName, themeType: StringName = ''): boolean
        hasThemeConstant(name: StringName, themeType: StringName = ''): boolean
        getThemeDefaultBaseScale(): float64
        getThemeDefaultFont(): Font
        getThemeDefaultFontSize(): int64
        getParentControl(): Control
        getTooltip(atPosition: Vector2 = Vector2.ZERO): string
        getCursorShape(position: Vector2 = Vector2.ZERO): Control.CursorShape
        setFocusNeighbor(side: Side, neighbor: NodePath | string): void
        getFocusNeighbor(side: Side): NodePath
        forceDrag(data: any, preview: Control): void
        grabClickFocus(): void
        setDragForwarding(dragFunc: Callable, canDropFunc: Callable, dropFunc: Callable): void
        setDragPreview(control: Control): void
        isDragSuccessful(): boolean
        warpMouse(position: Vector2): void
        updateMinimumSize(): void
        isLayoutRtl(): boolean
        get clipContents(): boolean
        set clipContents(value: boolean)
        get customMinimumSize(): Vector2
        set customMinimumSize(value: Vector2)
        get layoutDirection(): int64
        set layoutDirection(value: int64)
        get layoutMode(): int64
        set layoutMode(value: int64)
        get anchorsPreset(): int64
        set anchorsPreset(value: int64)
        get anchorLeft(): float64
        set anchorLeft(value: float64)
        get anchorTop(): float64
        set anchorTop(value: float64)
        get anchorRight(): float64
        set anchorRight(value: float64)
        get anchorBottom(): float64
        set anchorBottom(value: float64)
        get offsetLeft(): float64
        set offsetLeft(value: float64)
        get offsetTop(): float64
        set offsetTop(value: float64)
        get offsetRight(): float64
        set offsetRight(value: float64)
        get offsetBottom(): float64
        set offsetBottom(value: float64)
        get growHorizontal(): int64
        set growHorizontal(value: int64)
        get growVertical(): int64
        set growVertical(value: int64)
        
        /** The size of the node's bounding rectangle, in the node's coordinate system. [Container] nodes update this property automatically. */
        get size(): Vector2
        set size(value: Vector2)
        
        /** The node's position, relative to its containing node. It corresponds to the rectangle's top-left corner. The property is not affected by [member pivot_offset]. */
        get position(): Vector2
        set position(value: Vector2)
        get globalPosition(): Vector2
        set globalPosition(value: Vector2)
        
        /** The node's rotation around its pivot, in radians. See [member pivot_offset] to change the pivot's position.  
         *      
         *  **Note:** This property is edited in the inspector in degrees. If you want to use degrees in a script, use [member rotation_degrees].  
         */
        get rotation(): float64
        set rotation(value: float64)
        get rotationDegrees(): float64
        set rotationDegrees(value: float64)
        
        /** The node's scale, relative to its [member size]. Change this property to scale the node around its [member pivot_offset]. The Control's [member tooltip_text] will also scale according to this value.  
         *      
         *  **Note:** This property is mainly intended to be used for animation purposes. To support multiple resolutions in your project, use an appropriate viewport stretch mode as described in the [url=https://docs.godotengine.org/en/latest/tutorials/rendering/multiple_resolutions.html]documentation[/url] instead of scaling Controls individually.  
         *      
         *  **Note:** [member FontFile.oversampling] does  *not*  take [Control] [member scale] into account. This means that scaling up/down will cause bitmap fonts and rasterized (non-MSDF) dynamic fonts to appear blurry or pixelated. To ensure text remains crisp regardless of scale, you can enable MSDF font rendering by enabling [member ProjectSettings.gui/theme/default_font_multichannel_signed_distance_field] (applies to the default project font only), or enabling **Multichannel Signed Distance Field** in the import options of a DynamicFont for custom fonts. On system fonts, [member SystemFont.multichannel_signed_distance_field] can be enabled in the inspector.  
         *      
         *  **Note:** If the Control node is a child of a [Container] node, the scale will be reset to `Vector2(1, 1)` when the scene is instantiated. To set the Control's scale when it's instantiated, wait for one frame using `await get_tree().process_frame` then set its [member scale] property.  
         */
        get scale(): Vector2
        set scale(value: Vector2)
        get pivotOffset(): Vector2
        set pivotOffset(value: Vector2)
        get sizeFlagsHorizontal(): int64
        set sizeFlagsHorizontal(value: int64)
        get sizeFlagsVertical(): int64
        set sizeFlagsVertical(value: int64)
        get sizeFlagsStretchRatio(): float64
        set sizeFlagsStretchRatio(value: float64)
        get localizeNumeralSystem(): boolean
        set localizeNumeralSystem(value: boolean)
        get autoTranslate(): boolean
        set autoTranslate(value: boolean)
        get tooltipText(): string
        set tooltipText(value: string)
        get tooltipAutoTranslateMode(): int64
        set tooltipAutoTranslateMode(value: int64)
        get focusNeighborLeft(): NodePath
        set focusNeighborLeft(value: NodePath | string)
        get focusNeighborTop(): NodePath
        set focusNeighborTop(value: NodePath | string)
        get focusNeighborRight(): NodePath
        set focusNeighborRight(value: NodePath | string)
        get focusNeighborBottom(): NodePath
        set focusNeighborBottom(value: NodePath | string)
        get focusNext(): NodePath
        set focusNext(value: NodePath | string)
        get focusPrevious(): NodePath
        set focusPrevious(value: NodePath | string)
        get focusMode(): int64
        set focusMode(value: int64)
        get mouseFilter(): int64
        set mouseFilter(value: int64)
        get mouseForcePassScrollEvents(): boolean
        set mouseForcePassScrollEvents(value: boolean)
        get mouseDefaultCursorShape(): int64
        set mouseDefaultCursorShape(value: int64)
        get shortcutContext(): GObject
        set shortcutContext(value: GObject)
        
        /** The [Theme] resource this node and all its [Control] and [Window] children use. If a child node has its own [Theme] resource set, theme items are merged with child's definitions having higher priority.  
         *      
         *  **Note:** [Window] styles will have no effect unless the window is embedded.  
         */
        get theme(): Theme
        set theme(value: Theme)
        get themeTypeVariation(): string
        set themeTypeVariation(value: string)
        
        /** Emitted when the control changes size. */
        readonly resized: Signal<() => void>
        readonly guiInput: Signal<(event: InputEvent) => void>
        readonly mouseEntered: Signal<() => void>
        readonly mouseExited: Signal<() => void>
        readonly focusEntered: Signal<() => void>
        readonly focusExited: Signal<() => void>
        readonly sizeFlagsChanged: Signal<() => void>
        readonly minimumSizeChanged: Signal<() => void>
        readonly themeChanged: Signal<() => void>
    }
    /** A 2D convex polygon shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_convexpolygonshape2d.html  
     */
    class ConvexPolygonShape2D extends Shape2D {
        constructor(identifier?: any)
        setPointCloud(pointCloud: PackedVector2Array | Vector2[]): void
        
        /** The polygon's list of vertices that form a convex hull. Can be in either clockwise or counterclockwise order.  
         *  **Warning:** Only set this property to a list of points that actually form a convex hull. Use [method set_point_cloud] to generate the convex hull of an arbitrary set of points.  
         */
        get points(): PackedVector2Array
        set points(value: PackedVector2Array | Vector2[])
    }
    /** A 3D convex polyhedron shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_convexpolygonshape3d.html  
     */
    class ConvexPolygonShape3D extends Shape3D {
        constructor(identifier?: any)
        /** The list of 3D points forming the convex polygon shape. */
        get points(): GArray
        set points(value: GArray)
    }
    /** Provides access to advanced cryptographic functionalities.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_crypto.html  
     */
    class Crypto extends RefCounted {
        constructor(identifier?: any)
        generateRandomBytes(size: int64): PackedByteArray
        generateRsa(size: int64): CryptoKey
        generateSelfSignedCertificate(key: CryptoKey, issuerName: string = 'CN=myserver,O=myorganisation,C=IT', notBefore: string = '20140101000000', notAfter: string = '20340101000000'): X509Certificate
        
        /** Sign a given [param hash] of type [param hash_type] with the provided private [param key]. */
        sign(hashType: HashingContext.HashType, hash: PackedByteArray | byte[] | ArrayBuffer, key: CryptoKey): PackedByteArray
        
        /** Verify that a given [param signature] for [param hash] of type [param hash_type] against the provided public [param key]. */
        verify(hashType: HashingContext.HashType, hash: PackedByteArray | byte[] | ArrayBuffer, signature: PackedByteArray | byte[] | ArrayBuffer, key: CryptoKey): boolean
        
        /** Encrypt the given [param plaintext] with the provided public [param key].  
         *      
         *  **Note:** The maximum size of accepted plaintext is limited by the key size.  
         */
        encrypt(key: CryptoKey, plaintext: PackedByteArray | byte[] | ArrayBuffer): PackedByteArray
        
        /** Decrypt the given [param ciphertext] with the provided private [param key].  
         *      
         *  **Note:** The maximum size of accepted ciphertext is limited by the key size.  
         */
        decrypt(key: CryptoKey, ciphertext: PackedByteArray | byte[] | ArrayBuffer): PackedByteArray
        hmacDigest(hashType: HashingContext.HashType, key: PackedByteArray | byte[] | ArrayBuffer, msg: PackedByteArray | byte[] | ArrayBuffer): PackedByteArray
        constantTimeCompare(trusted: PackedByteArray | byte[] | ArrayBuffer, received: PackedByteArray | byte[] | ArrayBuffer): boolean
    }
    /** A cryptographic key (RSA or elliptic-curve).  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_cryptokey.html  
     */
    class CryptoKey extends Resource {
        constructor(identifier?: any)
        /** Saves a key to the given [param path]. If [param public_only] is `true`, only the public key will be saved.  
         *      
         *  **Note:** [param path] should be a "*.pub" file if [param public_only] is `true`, a "*.key" file otherwise.  
         */
        save(path: string, publicOnly: boolean = false): GError
        
        /** Loads a key from [param path]. If [param public_only] is `true`, only the public key will be loaded.  
         *      
         *  **Note:** [param path] should be a "*.pub" file if [param public_only] is `true`, a "*.key" file otherwise.  
         */
        load(path: string, publicOnly: boolean = false): GError
        isPublicOnly(): boolean
        saveToString(publicOnly: boolean = false): string
        loadFromString(stringKey: string, publicOnly: boolean = false): GError
    }
    /** Six square textures representing the faces of a cube. Commonly used as a skybox.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_cubemap.html  
     */
    class Cubemap extends ImageTextureLayered {
        constructor(identifier?: any)
        createPlaceholder(): Resource
    }
    /** An array of [Cubemap]s, stored together and with a single reference.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_cubemaparray.html  
     */
    class CubemapArray extends ImageTextureLayered {
        constructor(identifier?: any)
        createPlaceholder(): Resource
    }
    namespace Curve {
        enum TangentMode {
            TangentFree = 0,
            TangentLinear = 1,
            TangentModeCount = 2,
        }
    }
    /** A mathematical curve.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_curve.html  
     */
    class Curve extends Resource {
        /** The tangent on this side of the point is user-defined. */
        static readonly TANGENT_FREE = 0
        
        /** The curve calculates the tangent on this side of the point as the slope halfway towards the adjacent point. */
        static readonly TANGENT_LINEAR = 1
        
        /** The total number of available tangent modes. */
        static readonly TANGENT_MODE_COUNT = 2
        constructor(identifier?: any)
        addPoint(position: Vector2, leftTangent: float64 = 0, rightTangent: float64 = 0, leftMode: Curve.TangentMode = 0, rightMode: Curve.TangentMode = 0): int64
        removePoint(index: int64): void
        clearPoints(): void
        getPointPosition(index: int64): Vector2
        setPointValue(index: int64, y: float64): void
        setPointOffset(index: int64, offset: float64): int64
        
        /** Returns the Y value for the point that would exist at the X position [param offset] along the curve. */
        sample(offset: float64): float64
        sampleBaked(offset: float64): float64
        getPointLeftTangent(index: int64): float64
        getPointRightTangent(index: int64): float64
        getPointLeftMode(index: int64): Curve.TangentMode
        getPointRightMode(index: int64): Curve.TangentMode
        setPointLeftTangent(index: int64, tangent: float64): void
        setPointRightTangent(index: int64, tangent: float64): void
        setPointLeftMode(index: int64, mode: Curve.TangentMode): void
        setPointRightMode(index: int64, mode: Curve.TangentMode): void
        getValueRange(): float64
        getDomainRange(): float64
        cleanDupes(): void
        
        /** Recomputes the baked cache of points for the curve. */
        bake(): void
        get minDomain(): float64
        set minDomain(value: float64)
        get maxDomain(): float64
        set maxDomain(value: float64)
        get minValue(): float64
        set minValue(value: float64)
        get maxValue(): float64
        set maxValue(value: float64)
        get _limits(): any
        set _limits(value: any)
        get bakeResolution(): int64
        set bakeResolution(value: int64)
        get _data(): int64
        set _data(value: int64)
        get pointCount(): any /*Points,point_*/
        set pointCount(value: any /*Points,point_*/)
        readonly rangeChanged: Signal<() => void>
        readonly domainChanged: Signal<() => void>
    }
    /** Describes a Bézier curve in 2D space.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_curve2d.html  
     */
    class Curve2D extends Resource {
        constructor(identifier?: any)
        addPoint(position: Vector2, in_: Vector2 = Vector2.ZERO, out_: Vector2 = Vector2.ZERO, index: int64 = -1): void
        setPointPosition(idx: int64, position: Vector2): void
        getPointPosition(idx: int64): Vector2
        setPointIn(idx: int64, position: Vector2): void
        getPointIn(idx: int64): Vector2
        setPointOut(idx: int64, position: Vector2): void
        getPointOut(idx: int64): Vector2
        removePoint(idx: int64): void
        clearPoints(): void
        
        /** Returns the position between the vertex [param idx] and the vertex `idx + 1`, where [param t] controls if the point is the first vertex (`t = 0.0`), the last vertex (`t = 1.0`), or in between. Values of [param t] outside the range (`0.0 <= t <= 1.0`) give strange, but predictable results.  
         *  If [param idx] is out of bounds it is truncated to the first or last vertex, and [param t] is ignored. If the curve has no points, the function sends an error to the console, and returns `(0, 0)`.  
         */
        sample(idx: int64, t: float64): Vector2
        
        /** Returns the position at the vertex [param fofs]. It calls [method sample] using the integer part of [param fofs] as `idx`, and its fractional part as `t`. */
        samplef(fofs: float64): Vector2
        getBakedLength(): float64
        sampleBaked(offset: float64 = 0, cubic: boolean = false): Vector2
        sampleBakedWithRotation(offset: float64 = 0, cubic: boolean = false): Transform2D
        getBakedPoints(): PackedVector2Array
        getClosestPoint(toPoint: Vector2): Vector2
        getClosestOffset(toPoint: Vector2): float64
        
        /** Returns a list of points along the curve, with a curvature controlled point density. That is, the curvier parts will have more points than the straighter parts.  
         *  This approximation makes straight segments between each point, then subdivides those segments until the resulting shape is similar enough.  
         *  [param max_stages] controls how many subdivisions a curve segment may face before it is considered approximate enough. Each subdivision splits the segment in half, so the default 5 stages may mean up to 32 subdivisions per curve segment. Increase with care!  
         *  [param tolerance_degrees] controls how many degrees the midpoint of a segment may deviate from the real curve, before the segment has to be subdivided.  
         */
        tessellate(maxStages: int64 = 5, toleranceDegrees: float64 = 4): PackedVector2Array
        tessellateEvenLength(maxStages: int64 = 5, toleranceLength: float64 = 20): PackedVector2Array
        get bakeInterval(): float64
        set bakeInterval(value: float64)
        get _data(): int64
        set _data(value: int64)
        get pointCount(): any /*Points,point_*/
        set pointCount(value: any /*Points,point_*/)
    }
    /** Describes a Bézier curve in 3D space.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_curve3d.html  
     */
    class Curve3D extends Resource {
        constructor(identifier?: any)
        addPoint(position: Vector3, in_: Vector3 = new Vector3(0, 0, 0), out_: Vector3 = new Vector3(0, 0, 0), index: int64 = -1): void
        setPointPosition(idx: int64, position: Vector3): void
        getPointPosition(idx: int64): Vector3
        setPointTilt(idx: int64, tilt: float64): void
        getPointTilt(idx: int64): float64
        setPointIn(idx: int64, position: Vector3): void
        getPointIn(idx: int64): Vector3
        setPointOut(idx: int64, position: Vector3): void
        getPointOut(idx: int64): Vector3
        removePoint(idx: int64): void
        clearPoints(): void
        
        /** Returns the position between the vertex [param idx] and the vertex `idx + 1`, where [param t] controls if the point is the first vertex (`t = 0.0`), the last vertex (`t = 1.0`), or in between. Values of [param t] outside the range (`0.0 >= t <=1`) give strange, but predictable results.  
         *  If [param idx] is out of bounds it is truncated to the first or last vertex, and [param t] is ignored. If the curve has no points, the function sends an error to the console, and returns `(0, 0, 0)`.  
         */
        sample(idx: int64, t: float64): Vector3
        
        /** Returns the position at the vertex [param fofs]. It calls [method sample] using the integer part of [param fofs] as `idx`, and its fractional part as `t`. */
        samplef(fofs: float64): Vector3
        getBakedLength(): float64
        sampleBaked(offset: float64 = 0, cubic: boolean = false): Vector3
        sampleBakedWithRotation(offset: float64 = 0, cubic: boolean = false, applyTilt: boolean = false): Transform3D
        sampleBakedUpVector(offset: float64, applyTilt: boolean = false): Vector3
        getBakedPoints(): PackedVector3Array
        getBakedTilts(): PackedFloat32Array
        getBakedUpVectors(): PackedVector3Array
        getClosestPoint(toPoint: Vector3): Vector3
        getClosestOffset(toPoint: Vector3): float64
        
        /** Returns a list of points along the curve, with a curvature controlled point density. That is, the curvier parts will have more points than the straighter parts.  
         *  This approximation makes straight segments between each point, then subdivides those segments until the resulting shape is similar enough.  
         *  [param max_stages] controls how many subdivisions a curve segment may face before it is considered approximate enough. Each subdivision splits the segment in half, so the default 5 stages may mean up to 32 subdivisions per curve segment. Increase with care!  
         *  [param tolerance_degrees] controls how many degrees the midpoint of a segment may deviate from the real curve, before the segment has to be subdivided.  
         */
        tessellate(maxStages: int64 = 5, toleranceDegrees: float64 = 4): PackedVector3Array
        tessellateEvenLength(maxStages: int64 = 5, toleranceLength: float64 = 0.2): PackedVector3Array
        
        /** If `true`, and the curve has more than 2 control points, the last point and the first one will be connected in a loop. */
        get closed(): boolean
        set closed(value: boolean)
        get bakeInterval(): float64
        set bakeInterval(value: float64)
        get _data(): int64
        set _data(value: int64)
        get pointCount(): any /*Points,point_*/
        set pointCount(value: any /*Points,point_*/)
        get upVectorEnabled(): boolean
        set upVectorEnabled(value: boolean)
    }
    namespace CurveTexture {
        enum TextureMode {
            TextureModeRgb = 0,
            TextureModeRed = 1,
        }
    }
    /** A 1D texture where pixel brightness corresponds to points on a curve.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_curvetexture.html  
     */
    class CurveTexture extends Texture2D {
        /** Store the curve equally across the red, green and blue channels. This uses more video memory, but is more compatible with shaders that only read the green and blue values. */
        static readonly TEXTURE_MODE_RGB = 0
        
        /** Store the curve only in the red channel. This saves video memory, but some custom shaders may not be able to work with this. */
        static readonly TEXTURE_MODE_RED = 1
        constructor(identifier?: any)
        
        /** The width of the texture (in pixels). Higher values make it possible to represent high-frequency data better (such as sudden direction changes), at the cost of increased generation time and memory usage. */
        get width(): int64
        set width(value: int64)
        get textureMode(): int64
        set textureMode(value: int64)
        
        /** The [Curve] that is rendered onto the texture. Should be a unit [Curve]. */
        get curve(): Curve
        set curve(value: Curve)
    }
    class CurveXyzTexture extends Texture2D {
        constructor(identifier?: any)
        get width(): int64
        set width(value: int64)
        get curveX(): Curve
        set curveX(value: Curve)
        get curveY(): Curve
        set curveY(value: Curve)
        get curveZ(): Curve
        set curveZ(value: Curve)
    }
    /** Class representing a cylindrical [PrimitiveMesh].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_cylindermesh.html  
     */
    class CylinderMesh extends PrimitiveMesh {
        constructor(identifier?: any)
        get topRadius(): float64
        set topRadius(value: float64)
        get bottomRadius(): float64
        set bottomRadius(value: float64)
        
        /** Full height of the cylinder. */
        get height(): float64
        set height(value: float64)
        get radialSegments(): int64
        set radialSegments(value: int64)
        
        /** Number of edge rings along the height of the cylinder. Changing [member rings] does not have any visual impact unless a shader or procedural mesh tool is used to alter the vertex data. Higher values result in more subdivisions, which can be used to create smoother-looking effects with shaders or procedural mesh tools (at the cost of performance). When not altering the vertex data using a shader or procedural mesh tool, [member rings] should be kept to its default value. */
        get rings(): int64
        set rings(value: int64)
        get capTop(): boolean
        set capTop(value: boolean)
        get capBottom(): boolean
        set capBottom(value: boolean)
    }
    /** A 3D cylinder shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_cylindershape3d.html  
     */
    class CylinderShape3D extends Shape3D {
        constructor(identifier?: any)
        /** The cylinder's height. */
        get height(): float64
        set height(value: float64)
        
        /** The cylinder's radius. */
        get radius(): float64
        set radius(value: float64)
    }
    class DtlsServer extends RefCounted {
        constructor(identifier?: any)
        setup(serverOptions: any /*TLSOptions*/): GError
        takeConnection(udpPeer: any /*PacketPeerUDP*/): any /*PacketPeerDTLS*/
    }
    /** A physics joint that connects two 2D physics bodies with a spring-like force.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_dampedspringjoint2d.html  
     */
    class DampedSpringJoint2D<Map extends Record<string, Node> = {}> extends Joint2D<Map> {
        constructor(identifier?: any)
        /** The spring joint's maximum length. The two attached bodies cannot stretch it past this value. */
        get length(): float64
        set length(value: float64)
        get restLength(): float64
        set restLength(value: float64)
        
        /** The higher the value, the less the bodies attached to the joint will deform it. The joint applies an opposing force to the bodies, the product of the stiffness multiplied by the size difference from its resting length. */
        get stiffness(): float64
        set stiffness(value: float64)
        
        /** The spring joint's damping ratio. A value between `0` and `1`. When the two bodies move into different directions the system tries to align them to the spring axis again. A high [member damping] value forces the attached bodies to align faster. */
        get damping(): float64
        set damping(value: float64)
    }
    namespace Decal {
        enum DecalTexture {
            TextureAlbedo = 0,
            TextureNormal = 1,
            TextureOrm = 2,
            TextureEmission = 3,
            TextureMax = 4,
        }
    }
    /** Node that projects a texture onto a [MeshInstance3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_decal.html  
     */
    class Decal<Map extends Record<string, Node> = {}> extends VisualInstance3D<Map> {
        /** [Texture2D] corresponding to [member texture_albedo]. */
        static readonly TEXTURE_ALBEDO = 0
        
        /** [Texture2D] corresponding to [member texture_normal]. */
        static readonly TEXTURE_NORMAL = 1
        
        /** [Texture2D] corresponding to [member texture_orm]. */
        static readonly TEXTURE_ORM = 2
        
        /** [Texture2D] corresponding to [member texture_emission]. */
        static readonly TEXTURE_EMISSION = 3
        
        /** Max size of [enum DecalTexture] enum. */
        static readonly TEXTURE_MAX = 4
        constructor(identifier?: any)
        setTexture(type: Decal.DecalTexture, texture: Texture2D): void
        getTexture(type: Decal.DecalTexture): Texture2D
        
        /** Sets the size of the [AABB] used by the decal. All dimensions must be set to a value greater than zero (they will be clamped to `0.001` if this is not the case). The AABB goes from `-size/2` to `size/2`.  
         *      
         *  **Note:** To improve culling efficiency of "hard surface" decals, set their [member upper_fade] and [member lower_fade] to `0.0` and set the Y component of the [member size] as low as possible. This will reduce the decals' AABB size without affecting their appearance.  
         */
        get size(): Vector3
        set size(value: Vector3)
        get textureAlbedo(): Texture2D | any /*-AnimatedTexture*/ | any /*-AtlasTexture*/ | any /*-CameraTexture*/ | any /*-CanvasTexture*/ | any /*-MeshTexture*/ | any /*-Texture2DRD*/ | any /*-ViewportTexture*/
        set textureAlbedo(value: Texture2D | any /*-AnimatedTexture*/ | any /*-AtlasTexture*/ | any /*-CameraTexture*/ | any /*-CanvasTexture*/ | any /*-MeshTexture*/ | any /*-Texture2DRD*/ | any /*-ViewportTexture*/)
        get textureNormal(): Texture2D | any /*-AnimatedTexture*/ | any /*-AtlasTexture*/ | any /*-CameraTexture*/ | any /*-CanvasTexture*/ | any /*-MeshTexture*/ | any /*-Texture2DRD*/ | any /*-ViewportTexture*/
        set textureNormal(value: Texture2D | any /*-AnimatedTexture*/ | any /*-AtlasTexture*/ | any /*-CameraTexture*/ | any /*-CanvasTexture*/ | any /*-MeshTexture*/ | any /*-Texture2DRD*/ | any /*-ViewportTexture*/)
        get textureOrm(): Texture2D | any /*-AnimatedTexture*/ | any /*-AtlasTexture*/ | any /*-CameraTexture*/ | any /*-CanvasTexture*/ | any /*-MeshTexture*/ | any /*-Texture2DRD*/ | any /*-ViewportTexture*/
        set textureOrm(value: Texture2D | any /*-AnimatedTexture*/ | any /*-AtlasTexture*/ | any /*-CameraTexture*/ | any /*-CanvasTexture*/ | any /*-MeshTexture*/ | any /*-Texture2DRD*/ | any /*-ViewportTexture*/)
        get textureEmission(): Texture2D | any /*-AnimatedTexture*/ | any /*-AtlasTexture*/ | any /*-CameraTexture*/ | any /*-CanvasTexture*/ | any /*-MeshTexture*/ | any /*-Texture2DRD*/ | any /*-ViewportTexture*/
        set textureEmission(value: Texture2D | any /*-AnimatedTexture*/ | any /*-AtlasTexture*/ | any /*-CameraTexture*/ | any /*-CanvasTexture*/ | any /*-MeshTexture*/ | any /*-Texture2DRD*/ | any /*-ViewportTexture*/)
        get emissionEnergy(): float64
        set emissionEnergy(value: float64)
        
        /** Changes the [Color] of the Decal by multiplying the albedo and emission colors with this value. The alpha component is only taken into account when multiplying the albedo color, not the emission color. See also [member emission_energy] and [member albedo_mix] to change the emission and albedo intensity independently of each other. */
        get modulate(): Color
        set modulate(value: Color)
        get albedoMix(): float64
        set albedoMix(value: float64)
        get normalFade(): float64
        set normalFade(value: float64)
        get upperFade(): float64
        set upperFade(value: float64)
        get lowerFade(): float64
        set lowerFade(value: float64)
        get distanceFadeEnabled(): boolean
        set distanceFadeEnabled(value: boolean)
        get distanceFadeBegin(): float64
        set distanceFadeBegin(value: float64)
        get distanceFadeLength(): float64
        set distanceFadeLength(value: float64)
        get cullMask(): int64
        set cullMask(value: int64)
    }
    /** Provides methods for managing directories and their content.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_diraccess.html  
     */
    class DirAccess extends RefCounted {
        constructor(identifier?: any)
        /** Creates a new [DirAccess] object and opens an existing directory of the filesystem. The [param path] argument can be within the project tree (`res://folder`), the user directory (`user://folder`) or an absolute path of the user filesystem (e.g. `/tmp/folder` or `C:\tmp\folder`).  
         *  Returns `null` if opening the directory failed. You can use [method get_open_error] to check the error that occurred.  
         */
        static open(path: string): DirAccess
        static getOpenError(): GError
        static createTemp(prefix: string = '', keep: boolean = false): DirAccess
        listDirBegin(): GError
        getNext(): string
        currentIsDir(): boolean
        listDirEnd(): void
        getFiles(): PackedStringArray
        static getFilesAt(path: string): PackedStringArray
        getDirectories(): PackedStringArray
        static getDirectoriesAt(path: string): PackedStringArray
        static getDriveCount(): int64
        static getDriveName(idx: int64): string
        getCurrentDrive(): int64
        changeDir(toDir: string): GError
        getCurrentDir(includeDrive: boolean = true): string
        makeDir(path: string): GError
        static makeDirAbsolute(path: string): GError
        makeDirRecursive(path: string): GError
        static makeDirRecursiveAbsolute(path: string): GError
        fileExists(path: string): boolean
        dirExists(path: string): boolean
        static dirExistsAbsolute(path: string): boolean
        getSpaceLeft(): int64
        
        /** Copies the [param from] file to the [param to] destination. Both arguments should be paths to files, either relative or absolute. If the destination file exists and is not access-protected, it will be overwritten.  
         *  If [param chmod_flags] is different than `-1`, the Unix permissions for the destination path will be set to the provided value, if available on the current operating system.  
         *  Returns one of the [enum Error] code constants ([constant OK] on success).  
         */
        copy(from: string, to: string, chmodFlags: int64 = -1): GError
        static copyAbsolute(from: string, to: string, chmodFlags: int64 = -1): GError
        
        /** Renames (move) the [param from] file or directory to the [param to] destination. Both arguments should be paths to files or directories, either relative or absolute. If the destination file or directory exists and is not access-protected, it will be overwritten.  
         *  Returns one of the [enum Error] code constants ([constant OK] on success).  
         */
        rename(from: string, to: string): GError
        static renameAbsolute(from: string, to: string): GError
        
        /** Permanently deletes the target file or an empty directory. The argument can be relative to the current directory, or an absolute path. If the target directory is not empty, the operation will fail.  
         *  If you don't want to delete the file/directory permanently, use [method OS.move_to_trash] instead.  
         *  Returns one of the [enum Error] code constants ([constant OK] on success).  
         */
        remove(path: string): GError
        static removeAbsolute(path: string): GError
        isLink(path: string): boolean
        readLink(path: string): string
        createLink(source: string, target: string): GError
        isBundle(path: string): boolean
        isCaseSensitive(path: string): boolean
        get includeNavigational(): boolean
        set includeNavigational(value: boolean)
        get includeHidden(): boolean
        set includeHidden(value: boolean)
    }
    /** Directional 2D light from a distance.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_directionallight2d.html  
     */
    class DirectionalLight2D<Map extends Record<string, Node> = {}> extends Light2D<Map> {
        constructor(identifier?: any)
        /** The height of the light. Used with 2D normal mapping. Ranges from 0 (parallel to the plane) to 1 (perpendicular to the plane). */
        get height(): float64
        set height(value: float64)
        get maxDistance(): float64
        set maxDistance(value: float64)
    }
    namespace DirectionalLight3D {
        enum ShadowMode {
            ShadowOrthogonal = 0,
            ShadowParallel2Splits = 1,
            ShadowParallel4Splits = 2,
        }
        enum SkyMode {
            SkyModeLightAndSky = 0,
            SkyModeLightOnly = 1,
            SkyModeSkyOnly = 2,
        }
    }
    /** Directional light from a distance, as from the Sun.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_directionallight3d.html  
     */
    class DirectionalLight3D<Map extends Record<string, Node> = {}> extends Light3D<Map> {
        /** Renders the entire scene's shadow map from an orthogonal point of view. This is the fastest directional shadow mode. May result in blurrier shadows on close objects. */
        static readonly SHADOW_ORTHOGONAL = 0
        
        /** Splits the view frustum in 2 areas, each with its own shadow map. This shadow mode is a compromise between [constant SHADOW_ORTHOGONAL] and [constant SHADOW_PARALLEL_4_SPLITS] in terms of performance. */
        static readonly SHADOW_PARALLEL_2_SPLITS = 1
        
        /** Splits the view frustum in 4 areas, each with its own shadow map. This is the slowest directional shadow mode. */
        static readonly SHADOW_PARALLEL_4_SPLITS = 2
        
        /** Makes the light visible in both scene lighting and sky rendering. */
        static readonly SKY_MODE_LIGHT_AND_SKY = 0
        
        /** Makes the light visible in scene lighting only (including direct lighting and global illumination). When using this mode, the light will not be visible from sky shaders. */
        static readonly SKY_MODE_LIGHT_ONLY = 1
        
        /** Makes the light visible to sky shaders only. When using this mode the light will not cast light into the scene (either through direct lighting or through global illumination), but can be accessed through sky shaders. This can be useful, for example, when you want to control sky effects without illuminating the scene (during a night cycle, for example). */
        static readonly SKY_MODE_SKY_ONLY = 2
        constructor(identifier?: any)
        get directionalShadowMode(): int64
        set directionalShadowMode(value: int64)
        get directionalShadowSplit1(): float64
        set directionalShadowSplit1(value: float64)
        get directionalShadowSplit2(): float64
        set directionalShadowSplit2(value: float64)
        get directionalShadowSplit3(): float64
        set directionalShadowSplit3(value: float64)
        get directionalShadowBlendSplits(): boolean
        set directionalShadowBlendSplits(value: boolean)
        get directionalShadowFadeStart(): float64
        set directionalShadowFadeStart(value: float64)
        get directionalShadowMaxDistance(): float64
        set directionalShadowMaxDistance(value: float64)
        get directionalShadowPancakeSize(): float64
        set directionalShadowPancakeSize(value: float64)
        get skyMode(): int64
        set skyMode(value: int64)
    }
    namespace ENetConnection {
        enum CompressionMode {
            CompressNone = 0,
            CompressRangeCoder = 1,
            CompressFastlz = 2,
            CompressZlib = 3,
            CompressZstd = 4,
        }
        enum EventType {
            EventError = -1,
            EventNone = 0,
            EventConnect = 1,
            EventDisconnect = 2,
            EventReceive = 3,
        }
        enum HostStatistic {
            HostTotalSentData = 0,
            HostTotalSentPackets = 1,
            HostTotalReceivedData = 2,
            HostTotalReceivedPackets = 3,
        }
    }
    /** A wrapper class for an [url=http://enet.bespin.org/group__host.html]ENetHost[/url].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_enetconnection.html  
     */
    class ENetConnection extends RefCounted {
        /** No compression. This uses the most bandwidth, but has the upside of requiring the fewest CPU resources. This option may also be used to make network debugging using tools like Wireshark easier. */
        static readonly COMPRESS_NONE = 0
        
        /** ENet's built-in range encoding. Works well on small packets, but is not the most efficient algorithm on packets larger than 4 KB. */
        static readonly COMPRESS_RANGE_CODER = 1
        
        /** [url=https://fastlz.org/]FastLZ[/url] compression. This option uses less CPU resources compared to [constant COMPRESS_ZLIB], at the expense of using more bandwidth. */
        static readonly COMPRESS_FASTLZ = 2
        
        /** [url=https://www.zlib.net/]Zlib[/url] compression. This option uses less bandwidth compared to [constant COMPRESS_FASTLZ], at the expense of using more CPU resources. */
        static readonly COMPRESS_ZLIB = 3
        
        /** [url=https://facebook.github.io/zstd/]Zstandard[/url] compression. Note that this algorithm is not very efficient on packets smaller than 4 KB. Therefore, it's recommended to use other compression algorithms in most cases. */
        static readonly COMPRESS_ZSTD = 4
        
        /** An error occurred during [method service]. You will likely need to [method destroy] the host and recreate it. */
        static readonly EVENT_ERROR = -1
        
        /** No event occurred within the specified time limit. */
        static readonly EVENT_NONE = 0
        
        /** A connection request initiated by enet_host_connect has completed. The array will contain the peer which successfully connected. */
        static readonly EVENT_CONNECT = 1
        
        /** A peer has disconnected. This event is generated on a successful completion of a disconnect initiated by [method ENetPacketPeer.peer_disconnect], if a peer has timed out, or if a connection request initialized by [method connect_to_host] has timed out. The array will contain the peer which disconnected. The data field contains user supplied data describing the disconnection, or 0, if none is available. */
        static readonly EVENT_DISCONNECT = 2
        
        /** A packet has been received from a peer. The array will contain the peer which sent the packet and the channel number upon which the packet was received. The received packet will be queued to the associated [ENetPacketPeer]. */
        static readonly EVENT_RECEIVE = 3
        
        /** Total data sent. */
        static readonly HOST_TOTAL_SENT_DATA = 0
        
        /** Total UDP packets sent. */
        static readonly HOST_TOTAL_SENT_PACKETS = 1
        
        /** Total data received. */
        static readonly HOST_TOTAL_RECEIVED_DATA = 2
        
        /** Total UDP packets received. */
        static readonly HOST_TOTAL_RECEIVED_PACKETS = 3
        constructor(identifier?: any)
        createHostBound(bindAddress: string, bindPort: int64, maxPeers: int64 = 32, maxChannels: int64 = 0, inBandwidth: int64 = 0, outBandwidth: int64 = 0): GError
        createHost(maxPeers: int64 = 32, maxChannels: int64 = 0, inBandwidth: int64 = 0, outBandwidth: int64 = 0): GError
        
        /** Destroys the host and all resources associated with it. */
        destroy(): void
        connectToHost(address: string, port: int64, channels: int64 = 0, data: int64 = 0): ENetPacketPeer
        
        /** Waits for events on this connection and shuttles packets between the host and its peers, with the given [param timeout] (in milliseconds). The returned [Array] will have 4 elements. An [enum EventType], the [ENetPacketPeer] which generated the event, the event associated data (if any), the event associated channel (if any). If the generated event is [constant EVENT_RECEIVE], the received packet will be queued to the associated [ENetPacketPeer].  
         *  Call this function regularly to handle connections, disconnections, and to receive new packets.  
         *      
         *  **Note:** This method must be called on both ends involved in the event (sending and receiving hosts).  
         */
        service(timeout: int64 = 0): GArray
        
        /** Sends any queued packets on the host specified to its designated peers. */
        flush(): void
        bandwidthLimit(inBandwidth: int64 = 0, outBandwidth: int64 = 0): void
        channelLimit(limit: int64): void
        
        /** Queues a [param packet] to be sent to all peers associated with the host over the specified [param channel]. See [ENetPacketPeer] `FLAG_*` constants for available packet flags. */
        broadcast(channel: int64, packet: PackedByteArray | byte[] | ArrayBuffer, flags: int64): void
        
        /** Sets the compression method used for network packets. These have different tradeoffs of compression speed versus bandwidth, you may need to test which one works best for your use case if you use compression at all.  
         *      
         *  **Note:** Most games' network design involve sending many small packets frequently (smaller than 4 KB each). If in doubt, it is recommended to keep the default compression algorithm as it works best on these small packets.  
         *      
         *  **Note:** The compression mode must be set to the same value on both the server and all its clients. Clients will fail to connect if the compression mode set on the client differs from the one set on the server.  
         */
        compress(mode: ENetConnection.CompressionMode): void
        dtlsServerSetup(serverOptions: any /*TLSOptions*/): GError
        dtlsClientSetup(hostname: string, clientOptions: any /*TLSOptions*/ = undefined): GError
        refuseNewConnections(refuse: boolean): void
        popStatistic(statistic: ENetConnection.HostStatistic): float64
        getMaxChannels(): int64
        getLocalPort(): int64
        getPeers(): GArray
        socketSend(destinationAddress: string, destinationPort: int64, packet: PackedByteArray | byte[] | ArrayBuffer): void
    }
    /** A MultiplayerPeer implementation using the [url=http://enet.bespin.org/index.html]ENet[/url] library.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_enetmultiplayerpeer.html  
     */
    class ENetMultiplayerPeer extends MultiplayerPeer {
        constructor(identifier?: any)
        createServer(port: int64, maxClients: int64 = 32, maxChannels: int64 = 0, inBandwidth: int64 = 0, outBandwidth: int64 = 0): GError
        createClient(address: string, port: int64, channelCount: int64 = 0, inBandwidth: int64 = 0, outBandwidth: int64 = 0, localPort: int64 = 0): GError
        createMesh(uniqueId: int64): GError
        addMeshPeer(peerId: int64, host: ENetConnection): GError
        setBindIP(iP: string): void
        getPeer(id: int64): ENetPacketPeer
        
        /** The underlying [ENetConnection] created after [method create_client] and [method create_server]. */
        get host(): ENetConnection
        set host(value: ENetConnection)
    }
    namespace ENetPacketPeer {
        enum PeerState {
            StateDisconnected = 0,
            StateConnecting = 1,
            StateAcknowledgingConnect = 2,
            StateConnectionPending = 3,
            StateConnectionSucceeded = 4,
            StateConnected = 5,
            StateDisconnectLater = 6,
            StateDisconnecting = 7,
            StateAcknowledgingDisconnect = 8,
            StateZombie = 9,
        }
        enum PeerStatistic {
            PeerPacketLoss = 0,
            PeerPacketLossVariance = 1,
            PeerPacketLossEpoch = 2,
            PeerRoundTripTime = 3,
            PeerRoundTripTimeVariance = 4,
            PeerLastRoundTripTime = 5,
            PeerLastRoundTripTimeVariance = 6,
            PeerPacketThrottle = 7,
            PeerPacketThrottleLimit = 8,
            PeerPacketThrottleCounter = 9,
            PeerPacketThrottleEpoch = 10,
            PeerPacketThrottleAcceleration = 11,
            PeerPacketThrottleDeceleration = 12,
            PeerPacketThrottleInterval = 13,
        }
    }
    /** A wrapper class for an [url=http://enet.bespin.org/group__peer.html]ENetPeer[/url].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_enetpacketpeer.html  
     */
    class ENetPacketPeer extends PacketPeer {
        /** The peer is disconnected. */
        static readonly STATE_DISCONNECTED = 0
        
        /** The peer is currently attempting to connect. */
        static readonly STATE_CONNECTING = 1
        
        /** The peer has acknowledged the connection request. */
        static readonly STATE_ACKNOWLEDGING_CONNECT = 2
        
        /** The peer is currently connecting. */
        static readonly STATE_CONNECTION_PENDING = 3
        
        /** The peer has successfully connected, but is not ready to communicate with yet ([constant STATE_CONNECTED]). */
        static readonly STATE_CONNECTION_SUCCEEDED = 4
        
        /** The peer is currently connected and ready to communicate with. */
        static readonly STATE_CONNECTED = 5
        
        /** The peer is slated to disconnect after it has no more outgoing packets to send. */
        static readonly STATE_DISCONNECT_LATER = 6
        
        /** The peer is currently disconnecting. */
        static readonly STATE_DISCONNECTING = 7
        
        /** The peer has acknowledged the disconnection request. */
        static readonly STATE_ACKNOWLEDGING_DISCONNECT = 8
        
        /** The peer has lost connection, but is not considered truly disconnected (as the peer didn't acknowledge the disconnection request). */
        static readonly STATE_ZOMBIE = 9
        
        /** Mean packet loss of reliable packets as a ratio with respect to the [constant PACKET_LOSS_SCALE]. */
        static readonly PEER_PACKET_LOSS = 0
        
        /** Packet loss variance. */
        static readonly PEER_PACKET_LOSS_VARIANCE = 1
        
        /** The time at which packet loss statistics were last updated (in milliseconds since the connection started). The interval for packet loss statistics updates is 10 seconds, and at least one packet must have been sent since the last statistics update. */
        static readonly PEER_PACKET_LOSS_EPOCH = 2
        
        /** Mean packet round trip time for reliable packets. */
        static readonly PEER_ROUND_TRIP_TIME = 3
        
        /** Variance of the mean round trip time. */
        static readonly PEER_ROUND_TRIP_TIME_VARIANCE = 4
        
        /** Last recorded round trip time for a reliable packet. */
        static readonly PEER_LAST_ROUND_TRIP_TIME = 5
        
        /** Variance of the last trip time recorded. */
        static readonly PEER_LAST_ROUND_TRIP_TIME_VARIANCE = 6
        
        /** The peer's current throttle status. */
        static readonly PEER_PACKET_THROTTLE = 7
        
        /** The maximum number of unreliable packets that should not be dropped. This value is always greater than or equal to `1`. The initial value is equal to [constant PACKET_THROTTLE_SCALE]. */
        static readonly PEER_PACKET_THROTTLE_LIMIT = 8
        
        /** Internal value used to increment the packet throttle counter. The value is hardcoded to `7` and cannot be changed. You probably want to look at [constant PEER_PACKET_THROTTLE_ACCELERATION] instead. */
        static readonly PEER_PACKET_THROTTLE_COUNTER = 9
        
        /** The time at which throttle statistics were last updated (in milliseconds since the connection started). The interval for throttle statistics updates is [constant PEER_PACKET_THROTTLE_INTERVAL]. */
        static readonly PEER_PACKET_THROTTLE_EPOCH = 10
        
        /** The throttle's acceleration factor. Higher values will make ENet adapt to fluctuating network conditions faster, causing unrelaible packets to be sent  *more*  often. The default value is `2`. */
        static readonly PEER_PACKET_THROTTLE_ACCELERATION = 11
        
        /** The throttle's deceleration factor. Higher values will make ENet adapt to fluctuating network conditions faster, causing unrelaible packets to be sent  *less*  often. The default value is `2`. */
        static readonly PEER_PACKET_THROTTLE_DECELERATION = 12
        
        /** The interval over which the lowest mean round trip time should be measured for use by the throttle mechanism (in milliseconds). The default value is `5000`. */
        static readonly PEER_PACKET_THROTTLE_INTERVAL = 13
        
        /** The reference scale for packet loss. See [method get_statistic] and [constant PEER_PACKET_LOSS]. */
        static readonly PACKET_LOSS_SCALE = 65536
        
        /** The reference value for throttle configuration. The default value is `32`. See [method throttle_configure]. */
        static readonly PACKET_THROTTLE_SCALE = 32
        
        /** Mark the packet to be sent as reliable. */
        static readonly FLAG_RELIABLE = 1
        
        /** Mark the packet to be sent unsequenced (unreliable). */
        static readonly FLAG_UNSEQUENCED = 2
        
        /** Mark the packet to be sent unreliable even if the packet is too big and needs fragmentation (increasing the chance of it being dropped). */
        static readonly FLAG_UNRELIABLE_FRAGMENT = 8
        constructor(identifier?: any)
        peerDisconnect(data: int64 = 0): void
        peerDisconnectLater(data: int64 = 0): void
        peerDisconnectNow(data: int64 = 0): void
        
        /** Sends a ping request to a peer. ENet automatically pings all connected peers at regular intervals, however, this function may be called to ensure more frequent ping requests. */
        ping(): void
        pingInterval(pingInterval: int64): void
        
        /** Forcefully disconnects a peer. The foreign host represented by the peer is not notified of the disconnection and will timeout on its connection to the local host. */
        reset(): void
        
        /** Queues a [param packet] to be sent over the specified [param channel]. See `FLAG_*` constants for available packet flags. */
        send(channel: int64, packet: PackedByteArray | byte[] | ArrayBuffer, flags: int64): GError
        throttleConfigure(interval: int64, acceleration: int64, deceleration: int64): void
        setTimeout(timeout: int64, timeoutMin: int64, timeoutMax: int64): void
        getPacketFlags(): int64
        getRemoteAddress(): string
        getRemotePort(): int64
        getStatistic(statistic: ENetPacketPeer.PeerStatistic): float64
        getState(): ENetPacketPeer.PeerState
        getChannels(): int64
        isActive(): boolean
    }
    /** Godot editor's command palette.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorcommandpalette.html  
     */
    class EditorCommandPalette<Map extends Record<string, Node> = {}> extends ConfirmationDialog<Map> {
        constructor(identifier?: any)
        addCommand(commandName: string, keyName: string, bindedCallable: Callable, shortcutText: string = 'None'): void
        removeCommand(keyName: string): void
    }
    namespace EditorContextMenuPlugin {
        enum ContextMenuSlot {
            ContextSlotSceneTree = 0,
            ContextSlotFilesystem = 1,
            ContextSlotScriptEditor = 2,
            ContextSlotFilesystemCreate = 3,
            ContextSlotScriptEditorCode = 4,
            ContextSlotSceneTabs = 5,
            ContextSlot2DEditor = 6,
        }
    }
    /** Plugin for adding custom context menus in the editor.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorcontextmenuplugin.html  
     */
    class EditorContextMenuPlugin extends RefCounted {
        /** Context menu of Scene dock. [method _popup_menu] will be called with a list of paths to currently selected nodes, while option callback will receive the list of currently selected nodes. */
        static readonly CONTEXT_SLOT_SCENE_TREE = 0
        
        /** Context menu of FileSystem dock. [method _popup_menu] and option callback will be called with list of paths of the currently selected files. */
        static readonly CONTEXT_SLOT_FILESYSTEM = 1
        
        /** Context menu of Script editor's script tabs. [method _popup_menu] will be called with the path to the currently edited script, while option callback will receive reference to that script. */
        static readonly CONTEXT_SLOT_SCRIPT_EDITOR = 2
        
        /** The "Create..." submenu of FileSystem dock's context menu. [method _popup_menu] and option callback will be called with list of paths of the currently selected files. */
        static readonly CONTEXT_SLOT_FILESYSTEM_CREATE = 3
        
        /** Context menu of Script editor's code editor. [method _popup_menu] will be called with the path to the [CodeEdit] node. You can fetch it using this code:  
         *    
         *  The option callback will receive reference to that node. You can use [CodeEdit] methods to perform symbol lookups etc.  
         */
        static readonly CONTEXT_SLOT_SCRIPT_EDITOR_CODE = 4
        
        /** Context menu of scene tabs. [method _popup_menu] will be called with the path of the clicked scene, or empty [PackedStringArray] if the menu was opened on empty space. The option callback will receive the path of the clicked scene, or empty [String] if none was clicked. */
        static readonly CONTEXT_SLOT_SCENE_TABS = 5
        
        /** Context menu of 2D editor's basic right-click menu. [method _popup_menu] will be called with paths to all [CanvasItem] nodes under the cursor. You can fetch them using this code:  
         *    
         *  The paths array is empty if there weren't any nodes under cursor. The option callback will receive a typed array of [CanvasItem] nodes.  
         */
        static readonly CONTEXT_SLOT_2D_EDITOR = 6
        constructor(identifier?: any)
        /* gdvirtual */ _popupMenu(paths: PackedStringArray | string[]): void
        addMenuShortcut(shortcut: Shortcut, callback: Callable): void
        addContextMenuItem(name: string, callback: Callable, icon: Texture2D = undefined): void
        addContextMenuItemFromShortcut(name: string, shortcut: Shortcut, icon: Texture2D = undefined): void
        addContextSubmenuItem(name: string, menu: PopupMenu, icon: Texture2D = undefined): void
    }
    /** A base class to implement debugger plugins.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editordebuggerplugin.html  
     */
    class EditorDebuggerPlugin extends RefCounted {
        constructor(identifier?: any)
        /* gdvirtual */ _setupSession(sessionId: int64): void
        /* gdvirtual */ _hasCapture(capture: string): boolean
        
        /** Override this method to process incoming messages. The [param session_id] is the ID of the [EditorDebuggerSession] that received the [param message]. Use [method get_session] to retrieve the session. This method should return `true` if the message is recognized. */
        /* gdvirtual */ _capture(message: string, data: GArray, sessionId: int64): boolean
        /* gdvirtual */ _gotoScriptLine(script: Script, line: int64): void
        /* gdvirtual */ _breakpointsClearedInTree(): void
        /* gdvirtual */ _breakpointSetInTree(script: Script, line: int64, enabled: boolean): void
        getSession(id: int64): EditorDebuggerSession
        getSessions(): GArray
    }
    /** A class to interact with the editor debugger.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editordebuggersession.html  
     */
    class EditorDebuggerSession extends RefCounted {
        constructor(identifier?: any)
        sendMessage(message: string, data: GArray = []): void
        toggleProfiler(profiler: string, enable: boolean, data: GArray = []): void
        isBreaked(): boolean
        isDebuggable(): boolean
        isActive(): boolean
        addSessionTab(control: Control): void
        removeSessionTab(control: Control): void
        setBreakpoint(path: string, line: int64, enabled: boolean): void
        
        /** Emitted when a remote instance is attached to this session (i.e. the session becomes active). */
        readonly started: Signal<() => void>
        
        /** Emitted when a remote instance is detached from this session (i.e. the session becomes inactive). */
        readonly stopped: Signal<() => void>
        
        /** Emitted when the attached remote instance enters a break state. If [param can_debug] is `true`, the remote instance will enter the debug loop. */
        readonly breaked: Signal<(canDebug: boolean) => void>
        
        /** Emitted when the attached remote instance exits a break state. */
        readonly continued: Signal<() => void>
    }
    namespace EditorExportPlatform {
        enum ExportMessageType {
            ExportMessageNone = 0,
            ExportMessageInfo = 1,
            ExportMessageWarning = 2,
            ExportMessageError = 3,
        }
        enum DebugFlags {
            DebugFlagDumbClient = 1,
            DebugFlagRemoteDebug = 2,
            DebugFlagRemoteDebugLocalhost = 4,
            DebugFlagViewCollisions = 8,
            DebugFlagViewNavigation = 16,
        }
    }
    /** Identifies a supported export platform, and internally provides the functionality of exporting to that platform.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorexportplatform.html  
     */
    class EditorExportPlatform extends RefCounted {
        /** Invalid message type used as the default value when no type is specified. */
        static readonly EXPORT_MESSAGE_NONE = 0
        
        /** Message type for informational messages that have no effect on the export. */
        static readonly EXPORT_MESSAGE_INFO = 1
        
        /** Message type for warning messages that should be addressed but still allow to complete the export. */
        static readonly EXPORT_MESSAGE_WARNING = 2
        
        /** Message type for error messages that must be addressed and fail the export. */
        static readonly EXPORT_MESSAGE_ERROR = 3
        
        /** Flag is set if remotely debugged project is expected to use remote file system. If set, [method gen_export_flags] will add `--remove-fs` and `--remote-fs-password` (if password is set in the editor settings) command line arguments to the list. */
        static readonly DEBUG_FLAG_DUMB_CLIENT = 1
        
        /** Flag is set if remote debug is enabled. If set, [method gen_export_flags] will add `--remote-debug` and `--breakpoints` (if breakpoints are selected in the script editor or added by the plugin) command line arguments to the list. */
        static readonly DEBUG_FLAG_REMOTE_DEBUG = 2
        
        /** Flag is set if remotely debugged project is running on the localhost. If set, [method gen_export_flags] will use `localhost` instead of [member EditorSettings.network/debug/remote_host] as remote debugger host. */
        static readonly DEBUG_FLAG_REMOTE_DEBUG_LOCALHOST = 4
        
        /** Flag is set if "Visible Collision Shapes" remote debug option is enabled. If set, [method gen_export_flags] will add `--debug-collisions` command line arguments to the list. */
        static readonly DEBUG_FLAG_VIEW_COLLISIONS = 8
        
        /** Flag is set if Visible Navigation" remote debug option is enabled. If set, [method gen_export_flags] will add `--debug-navigation` command line arguments to the list. */
        static readonly DEBUG_FLAG_VIEW_NAVIGATION = 16
        constructor(identifier?: any)
        getOsName(): string
        createPreset(): EditorExportPreset
        findExportTemplate(templateFileName: string): GDictionary
        getCurrentPresets(): GArray
        savePack(preset: EditorExportPreset, debug: boolean, path: string, embed: boolean = false): GDictionary
        saveZip(preset: EditorExportPreset, debug: boolean, path: string): GDictionary
        savePackPatch(preset: EditorExportPreset, debug: boolean, path: string): GDictionary
        saveZipPatch(preset: EditorExportPreset, debug: boolean, path: string): GDictionary
        genExportFlags(flags: EditorExportPlatform.DebugFlags): PackedStringArray
        exportProjectFiles(preset: EditorExportPreset, debug: boolean, saveCb: Callable, sharedCb: Callable = new Callable()): GError
        exportProject(preset: EditorExportPreset, debug: boolean, path: string, flags: EditorExportPlatform.DebugFlags = 0): GError
        exportPack(preset: EditorExportPreset, debug: boolean, path: string, flags: EditorExportPlatform.DebugFlags = 0): GError
        exportZip(preset: EditorExportPreset, debug: boolean, path: string, flags: EditorExportPlatform.DebugFlags = 0): GError
        exportPackPatch(preset: EditorExportPreset, debug: boolean, path: string, patches: PackedStringArray | string[] = [], flags: EditorExportPlatform.DebugFlags = 0): GError
        exportZipPatch(preset: EditorExportPreset, debug: boolean, path: string, patches: PackedStringArray | string[] = [], flags: EditorExportPlatform.DebugFlags = 0): GError
        clearMessages(): void
        addMessage(type: EditorExportPlatform.ExportMessageType, category: string, message: string): void
        getMessageCount(): int64
        getMessageType(index: int64): EditorExportPlatform.ExportMessageType
        getMessageCategory(index: int64): string
        getMessageText(index: int64): string
        getWorstMessageType(): EditorExportPlatform.ExportMessageType
        sshRunOnRemote(host: string, port: string, sshArg: PackedStringArray | string[], cmdArgs: string, output: GArray = [], portFwd: int64 = -1): GError
        sshRunOnRemoteNoWait(host: string, port: string, sshArgs: PackedStringArray | string[], cmdArgs: string, portFwd: int64 = -1): int64
        sshPushToRemote(host: string, port: string, scpArgs: PackedStringArray | string[], srcFile: string, dstFile: string): GError
        getInternalExportFiles(preset: EditorExportPreset, debug: boolean): GDictionary
        static getForcedExportFiles(): PackedStringArray
    }
    /** Exporter for Android.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorexportplatformandroid.html  
     */
    class EditorExportPlatformAndroid extends EditorExportPlatform {
        constructor(identifier?: any)
    }
    /** Base class for custom [EditorExportPlatform] implementations (plugins).  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorexportplatformextension.html  
     */
    class EditorExportPlatformExtension extends EditorExportPlatform {
        constructor(identifier?: any)
        /* gdvirtual */ _getPresetFeatures(preset: EditorExportPreset): PackedStringArray
        /* gdvirtual */ _isExecutable(path: string): boolean
        /* gdvirtual */ _getExportOptions(): GArray
        /* gdvirtual */ _shouldUpdateExportOptions(): boolean
        /* gdvirtual */ _getExportOptionVisibility(preset: EditorExportPreset, option: string): boolean
        /* gdvirtual */ _getExportOptionWarning(preset: EditorExportPreset, option: StringName): string
        /* gdvirtual */ _getOsName(): string
        /* gdvirtual */ _getName(): string
        /* gdvirtual */ _getLogo(): Texture2D
        /* gdvirtual */ _pollExport(): boolean
        /* gdvirtual */ _getOptionsCount(): int64
        /* gdvirtual */ _getOptionsTooltip(): string
        /* gdvirtual */ _getOptionIcon(device: int64): ImageTexture
        /* gdvirtual */ _getOptionLabel(device: int64): string
        /* gdvirtual */ _getOptionTooltip(device: int64): string
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
        /* gdvirtual */ _getRunIcon(): Texture2D
        /* gdvirtual */ _canExport(preset: EditorExportPreset, debug: boolean): boolean
        /* gdvirtual */ _hasValidExportConfiguration(preset: EditorExportPreset, debug: boolean): boolean
        /* gdvirtual */ _hasValidProjectConfiguration(preset: EditorExportPreset): boolean
        /* gdvirtual */ _getBinaryExtensions(preset: EditorExportPreset): PackedStringArray
        /* gdvirtual */ _exportProject(preset: EditorExportPreset, debug: boolean, path: string, flags: EditorExportPlatform.DebugFlags): GError
        /* gdvirtual */ _exportPack(preset: EditorExportPreset, debug: boolean, path: string, flags: EditorExportPlatform.DebugFlags): GError
        /* gdvirtual */ _exportZip(preset: EditorExportPreset, debug: boolean, path: string, flags: EditorExportPlatform.DebugFlags): GError
        /* gdvirtual */ _exportPackPatch(preset: EditorExportPreset, debug: boolean, path: string, patches: PackedStringArray | string[], flags: EditorExportPlatform.DebugFlags): GError
        /* gdvirtual */ _exportZipPatch(preset: EditorExportPreset, debug: boolean, path: string, patches: PackedStringArray | string[], flags: EditorExportPlatform.DebugFlags): GError
        /* gdvirtual */ _getPlatformFeatures(): PackedStringArray
        /* gdvirtual */ _getDebugProtocol(): string
        setConfigError(errorText: string): void
        getConfigError(): string
        setConfigMissingTemplates(missingTemplates: boolean): void
        getConfigMissingTemplates(): boolean
    }
    class EditorExportPlatformIos extends EditorExportPlatform {
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
        /* gdvirtual */ _exportFile(path: string, type: string, features: PackedStringArray | string[]): void
        /* gdvirtual */ _exportBegin(features: PackedStringArray | string[], isDebug: boolean, path: string, flags: int64): void
        /* gdvirtual */ _exportEnd(): void
        /* gdvirtual */ _beginCustomizeResources(platform: EditorExportPlatform, features: PackedStringArray | string[]): boolean
        /* gdvirtual */ _customizeResource(resource: Resource, path: string): Resource
        /* gdvirtual */ _beginCustomizeScenes(platform: EditorExportPlatform, features: PackedStringArray | string[]): boolean
        /* gdvirtual */ _customizeScene(scene: Node, path: string): Node
        /* gdvirtual */ _getCustomizationConfigurationHash(): int64
        /* gdvirtual */ _endCustomizeScenes(): void
        /* gdvirtual */ _endCustomizeResources(): void
        /* gdvirtual */ _getExportOptions(platform: EditorExportPlatform): GArray
        /* gdvirtual */ _getExportOptionsOverrides(platform: EditorExportPlatform): GDictionary
        /* gdvirtual */ _shouldUpdateExportOptions(platform: EditorExportPlatform): boolean
        /* gdvirtual */ _getExportOptionVisibility(platform: EditorExportPlatform, option: string): boolean
        /* gdvirtual */ _getExportOptionWarning(platform: EditorExportPlatform, option: string): string
        /* gdvirtual */ _getExportFeatures(platform: EditorExportPlatform, debug: boolean): PackedStringArray
        /* gdvirtual */ _getName(): string
        /* gdvirtual */ _supportsPlatform(platform: EditorExportPlatform): boolean
        /* gdvirtual */ _getAndroidDependencies(platform: EditorExportPlatform, debug: boolean): PackedStringArray
        /* gdvirtual */ _getAndroidDependenciesMavenRepos(platform: EditorExportPlatform, debug: boolean): PackedStringArray
        /* gdvirtual */ _getAndroidLibraries(platform: EditorExportPlatform, debug: boolean): PackedStringArray
        /* gdvirtual */ _getAndroidManifestActivityElementContents(platform: EditorExportPlatform, debug: boolean): string
        /* gdvirtual */ _getAndroidManifestApplicationElementContents(platform: EditorExportPlatform, debug: boolean): string
        /* gdvirtual */ _getAndroidManifestElementContents(platform: EditorExportPlatform, debug: boolean): string
        addSharedObject(path: string, tags: PackedStringArray | string[], target: string): void
        addIosProjectStaticLib(path: string): void
        addFile(path: string, file: PackedByteArray | byte[] | ArrayBuffer, remap: boolean): void
        addIosFramework(path: string): void
        addIosEmbeddedFramework(path: string): void
        addIosPlistContent(plistContent: string): void
        addIosLinkerFlags(flags: string): void
        addIosBundleFile(path: string): void
        addIosCppCode(code: string): void
        addMacOSPluginFile(path: string): void
        
        /** To be called inside [method _export_file]. Skips the current file, so it's not included in the export. */
        skip(): void
        getOption(name: StringName): any
        getExportPreset(): EditorExportPreset
        getExportPlatform(): EditorExportPlatform
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
        
        /** Returns `true` if preset has specified property. */
        has(property: StringName): boolean
        getFilesToExport(): PackedStringArray
        getCustomizedFiles(): GDictionary
        getCustomizedFilesCount(): int64
        hasExportFile(path: string): boolean
        getFileExportMode(path: string, default_: EditorExportPreset.FileExportMode = 0): EditorExportPreset.FileExportMode
        getPresetName(): string
        isRunnable(): boolean
        areAdvancedOptionsEnabled(): boolean
        isDedicatedServer(): boolean
        getExportFilter(): EditorExportPreset.ExportFilter
        getIncludeFilter(): string
        getExcludeFilter(): string
        getCustomFeatures(): string
        getPatches(): PackedStringArray
        getExportPath(): string
        getEncryptionInFilter(): string
        getEncryptionExFilter(): string
        getEncryptPck(): boolean
        getEncryptDirectory(): boolean
        getEncryptionKey(): string
        getScriptExportMode(): int64
        getOrEnv(name: StringName, envVar: string): any
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
        setDisableClass(className: StringName, disable: boolean): void
        isClassDisabled(className: StringName): boolean
        setDisableClassEditor(className: StringName, disable: boolean): void
        isClassEditorDisabled(className: StringName): boolean
        setDisableClassProperty(className: StringName, property: StringName, disable: boolean): void
        isClassPropertyDisabled(className: StringName, property: StringName): boolean
        setDisableFeature(feature: EditorFeatureProfile.Feature, disable: boolean): void
        isFeatureDisabled(feature: EditorFeatureProfile.Feature): boolean
        getFeatureName(feature: EditorFeatureProfile.Feature): string
        saveToFile(path: string): GError
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
    class EditorFileDialog<Map extends Record<string, Node> = {}> extends ConfirmationDialog<Map> {
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
        clearFilters(): void
        addFilter(filter: string, description: string = ''): void
        getOptionName(option: int64): string
        getOptionValues(option: int64): PackedStringArray
        getOptionDefault(option: int64): int64
        setOptionName(option: int64, name: string): void
        setOptionValues(option: int64, values: PackedStringArray | string[]): void
        setOptionDefault(option: int64, defaultValueIndex: int64): void
        addOption(name: string, values: PackedStringArray | string[], defaultValueIndex: int64): void
        getSelectedOptions(): GDictionary
        clearFileNameFilter(): void
        setFileNameFilter(filter: string): void
        getFileNameFilter(): string
        getVBox(): VBoxContainer
        getLineEdit(): LineEdit
        _thumbnailDone(_unnamedArg0: string, _unnamedArg1: Texture2D, _unnamedArg2: Texture2D, _unnamedArg3: any): void
        _thumbnailResult(_unnamedArg0: string, _unnamedArg1: Texture2D, _unnamedArg2: Texture2D, _unnamedArg3: any): void
        addSideMenu(menu: Control, title: string = ''): void
        popupFileDialog(): void
        
        /** Notify the [EditorFileDialog] that its view of the data is no longer accurate. Updates the view contents on next view update. */
        invalidate(): void
        
        /** The location from which the user may select a file, including `res://`, `user://`, and the local file system. */
        get access(): int64
        set access(value: int64)
        get displayMode(): int64
        set displayMode(value: int64)
        get fileMode(): int64
        set fileMode(value: int64)
        get currentDir(): string
        set currentDir(value: string)
        get currentFile(): string
        set currentFile(value: string)
        get currentPath(): string
        set currentPath(value: string)
        
        /** The available file type filters. For example, this shows only `.png` and `.gd` files: `set_filters(PackedStringArray(["*.png ; PNG Images","*.gd ; GDScript Files"]))`. Multiple file types can also be specified in a single filter. `"*.png, *.jpg, *.jpeg ; Supported Images"` will show both PNG and JPEG files when selected. */
        get filters(): PackedStringArray
        set filters(value: PackedStringArray | string[])
        get optionCount(): any /*Options,option_*/
        set optionCount(value: any /*Options,option_*/)
        get showHiddenFiles(): boolean
        set showHiddenFiles(value: boolean)
        get disableOverwriteWarning(): boolean
        set disableOverwriteWarning(value: boolean)
        readonly fileSelected: Signal<(path: string) => void>
        readonly filesSelected: Signal<(paths: PackedStringArray | string[]) => void>
        readonly dirSelected: Signal<(dir: string) => void>
        readonly fileNameFilterChanged: Signal<(filter: string) => void>
    }
    /** Resource filesystem, as the editor sees it.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorfilesystem.html  
     */
    class EditorFileSystem<Map extends Record<string, Node> = {}> extends Node<Map> {
        constructor(identifier?: any)
        getFilesystem(): EditorFileSystemDirectory
        isScanning(): boolean
        getScanningProgress(): float64
        
        /** Scan the filesystem for changes. */
        scan(): void
        scanSources(): void
        updateFile(path: string): void
        getFilesystemPath(path: string): EditorFileSystemDirectory
        getFileType(path: string): string
        reimportFiles(files: PackedStringArray | string[]): void
        readonly filesystemChanged: Signal<() => void>
        readonly scriptClassesUpdated: Signal<() => void>
        readonly sourcesChanged: Signal<(exist: boolean) => void>
        readonly resourcesReimporting: Signal<(resources: PackedStringArray | string[]) => void>
        readonly resourcesReimported: Signal<(resources: PackedStringArray | string[]) => void>
        readonly resourcesReload: Signal<(resources: PackedStringArray | string[]) => void>
    }
    /** A directory for the resource filesystem.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorfilesystemdirectory.html  
     */
    class EditorFileSystemDirectory extends GObject {
        constructor(identifier?: any)
        getSubdirCount(): int64
        getSubdir(idx: int64): EditorFileSystemDirectory
        getFileCount(): int64
        getFile(idx: int64): string
        getFilePath(idx: int64): string
        getFileType(idx: int64): StringName
        getFileScriptClassName(idx: int64): string
        getFileScriptClassExtends(idx: int64): string
        getFileImportIsValid(idx: int64): boolean
        getName(): string
        getPath(): string
        getParent(): EditorFileSystemDirectory
        findFileIndex(name: string): int64
        findDirIndex(name: string): int64
    }
    /** Used to query and configure import format support.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorfilesystemimportformatsupportquery.html  
     */
    class EditorFileSystemImportFormatSupportQuery extends RefCounted {
        constructor(identifier?: any)
        /* gdvirtual */ _isActive(): boolean
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
        /* gdvirtual */ _getImporterName(): string
        /* gdvirtual */ _getVisibleName(): string
        /* gdvirtual */ _getPresetCount(): int64
        /* gdvirtual */ _getPresetName(presetIndex: int64): string
        /* gdvirtual */ _getRecognizedExtensions(): PackedStringArray
        /* gdvirtual */ _getImportOptions(path: string, presetIndex: int64): GArray
        /* gdvirtual */ _getSaveExtension(): string
        /* gdvirtual */ _getResourceType(): string
        /* gdvirtual */ _getPriority(): float64
        /* gdvirtual */ _getImportOrder(): int64
        /* gdvirtual */ _getFormatVersion(): int64
        /* gdvirtual */ _getOptionVisibility(path: string, optionName: StringName, options: GDictionary): boolean
        
        /** Imports [param source_file] into [param save_path] with the import [param options] specified. The [param platform_variants] and [param gen_files] arrays will be modified by this function.  
         *  This method must be overridden to do the actual importing work. See this class' description for an example of overriding this method.  
         */
        /* gdvirtual */ _import(sourceFile: string, savePath: string, options: GDictionary, platformVariants: GArray, genFiles: GArray): GError
        /* gdvirtual */ _canImportThreaded(): boolean
        appendImportExternalResource(path: string, customOptions: GDictionary = new GDictionary(), customImporter: string = '', generatorParameters: any = <any> {}): GError
    }
    /** A control used to edit properties of an object.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorinspector.html  
     */
    class EditorInspector<Map extends Record<string, Node> = {}> extends ScrollContainer<Map> {
        constructor(identifier?: any)
        /** Shows the properties of the given [param object] in this inspector for editing. To clear the inspector, call this method with `null`.  
         *      
         *  **Note:** If you want to edit an object in the editor's main inspector, use the `edit_*` methods in [EditorInterface] instead.  
         */
        edit(object: GObject): void
        _editRequestChange(_unnamedArg0: GObject, _unnamedArg1: string): void
        getSelectedPath(): string
        getEditedObject(): GObject
        static instantiatePropertyEditor(object: GObject, type: Variant.Type, path: string, hint: PropertyHint, hintText: string, usage: int64, wide: boolean = false): EditorProperty
        readonly propertySelected: Signal<(property: string) => void>
        readonly propertyKeyed: Signal<(property: string, value: any, advance: boolean) => void>
        readonly propertyDeleted: Signal<(property: string) => void>
        readonly resourceSelected: Signal<(resource: Resource, path: string) => void>
        readonly objectIdSelected: Signal<(id: int64) => void>
        readonly propertyEdited: Signal<(property: string) => void>
        readonly propertyToggled: Signal<(property: string, checked: boolean) => void>
        readonly editedObjectChanged: Signal<() => void>
        readonly restartRequested: Signal<() => void>
    }
    /** Plugin for adding custom property editors on the inspector.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorinspectorplugin.html  
     */
    class EditorInspectorPlugin extends RefCounted {
        constructor(identifier?: any)
        /* gdvirtual */ _canHandle(object: GObject): boolean
        /* gdvirtual */ _parseBegin(object: GObject): void
        /* gdvirtual */ _parseCategory(object: GObject, category: string): void
        /* gdvirtual */ _parseGroup(object: GObject, group: string): void
        /* gdvirtual */ _parseProperty(object: GObject, type: Variant.Type, name: string, hintType: PropertyHint, hintString: string, usageFlags: PropertyUsageFlags, wide: boolean): boolean
        /* gdvirtual */ _parseEnd(object: GObject): void
        addCustomControl(control: Control): void
        addPropertyEditor(property: string, editor: Control, addToEnd: boolean = false, label: string = ''): void
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
        /* gdvirtual */ _getHandleName(id: int64, secondary: boolean): string
        /* gdvirtual */ _isHandleHighlighted(id: int64, secondary: boolean): boolean
        /* gdvirtual */ _getHandleValue(id: int64, secondary: boolean): any
        /* gdvirtual */ _beginHandleAction(id: int64, secondary: boolean): void
        /* gdvirtual */ _setHandle(id: int64, secondary: boolean, camera: Camera3D, point: Vector2): void
        /* gdvirtual */ _commitHandle(id: int64, secondary: boolean, restore: any, cancel: boolean): void
        /* gdvirtual */ _subgizmosIntersectRay(camera: Camera3D, point: Vector2): int64
        /* gdvirtual */ _subgizmosIntersectFrustum(camera: Camera3D, frustum: GArray): PackedInt32Array
        /* gdvirtual */ _setSubgizmoTransform(id: int64, transform: Transform3D): void
        /* gdvirtual */ _getSubgizmoTransform(id: int64): Transform3D
        /* gdvirtual */ _commitSubgizmos(ids: PackedInt32Array | int32[], restores: GArray, cancel: boolean): void
        addLines(lines: PackedVector3Array | Vector3[], material: Material, billboard: boolean = false, modulate: Color = new Color(1, 1, 1, 1)): void
        addMesh(mesh: Mesh, material: Material = undefined, transform: Transform3D = <any> {} /*compound.type from TypeTransform3D ([object Object])*/, skeleton: SkinReference = undefined): void
        addCollisionSegments(segments: PackedVector3Array | Vector3[]): void
        addCollisionTriangles(triangles: TriangleMesh): void
        addUnscaledBillboard(material: Material, defaultScale: float64 = 1, modulate: Color = new Color(1, 1, 1, 1)): void
        addHandles(handles: PackedVector3Array | Vector3[], material: Material, ids: PackedInt32Array | int32[], billboard: boolean = false, secondary: boolean = false): void
        setNode3D(node: Node): void
        getNode3D(): Node3D
        getPlugin(): EditorNode3DGizmoPlugin
        
        /** Removes everything in the gizmo including meshes, collisions and handles. */
        clear(): void
        setHidden(hidden: boolean): void
        isSubgizmoSelected(id: int64): boolean
        getSubgizmoSelection(): PackedInt32Array
    }
    /** A class used by the editor to define Node3D gizmo types.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editornode3dgizmoplugin.html  
     */
    class EditorNode3DGizmoPlugin extends Resource {
        constructor(identifier?: any)
        /* gdvirtual */ _hasGizmo(forNode3D: Node3D): boolean
        /* gdvirtual */ _createGizmo(forNode3D: Node3D): EditorNode3DGizmo
        /* gdvirtual */ _getGizmoName(): string
        /* gdvirtual */ _getPriority(): int64
        /* gdvirtual */ _canBeHidden(): boolean
        /* gdvirtual */ _isSelectableWhenHidden(): boolean
        
        /** Override this method to add all the gizmo elements whenever a gizmo update is requested. It's common to call [method EditorNode3DGizmo.clear] at the beginning of this method and then add visual elements depending on the node's properties. */
        /* gdvirtual */ _redraw(gizmo: EditorNode3DGizmo): void
        /* gdvirtual */ _getHandleName(gizmo: EditorNode3DGizmo, handleId: int64, secondary: boolean): string
        /* gdvirtual */ _isHandleHighlighted(gizmo: EditorNode3DGizmo, handleId: int64, secondary: boolean): boolean
        /* gdvirtual */ _getHandleValue(gizmo: EditorNode3DGizmo, handleId: int64, secondary: boolean): any
        /* gdvirtual */ _beginHandleAction(gizmo: EditorNode3DGizmo, handleId: int64, secondary: boolean): void
        /* gdvirtual */ _setHandle(gizmo: EditorNode3DGizmo, handleId: int64, secondary: boolean, camera: Camera3D, screenPos: Vector2): void
        /* gdvirtual */ _commitHandle(gizmo: EditorNode3DGizmo, handleId: int64, secondary: boolean, restore: any, cancel: boolean): void
        /* gdvirtual */ _subgizmosIntersectRay(gizmo: EditorNode3DGizmo, camera: Camera3D, screenPos: Vector2): int64
        /* gdvirtual */ _subgizmosIntersectFrustum(gizmo: EditorNode3DGizmo, camera: Camera3D, frustumPlanes: GArray): PackedInt32Array
        /* gdvirtual */ _getSubgizmoTransform(gizmo: EditorNode3DGizmo, subgizmoId: int64): Transform3D
        /* gdvirtual */ _setSubgizmoTransform(gizmo: EditorNode3DGizmo, subgizmoId: int64, transform: Transform3D): void
        /* gdvirtual */ _commitSubgizmos(gizmo: EditorNode3DGizmo, ids: PackedInt32Array | int32[], restores: GArray, cancel: boolean): void
        createMaterial(name: string, color: Color, billboard: boolean = false, onTop: boolean = false, useVertexColor: boolean = false): void
        createIconMaterial(name: string, texture: Texture2D, onTop: boolean = false, color: Color = new Color(1, 1, 1, 1)): void
        createHandleMaterial(name: string, billboard: boolean = false, texture: Texture2D = undefined): void
        addMaterial(name: string, material: StandardMaterial3D): void
        getMaterial(name: string, gizmo: EditorNode3DGizmo = undefined): StandardMaterial3D
    }
    /** Editor-only singleton that returns paths to various OS-specific data folders and files.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorpaths.html  
     */
    class EditorPaths extends GObject {
        constructor(identifier?: any)
        getDataDir(): string
        getConfigDir(): string
        getCacheDir(): string
        isSelfContained(): boolean
        getSelfContainedFile(): string
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
    class EditorPlugin<Map extends Record<string, Node> = {}> extends Node<Map> {
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
        /* gdvirtual */ _forwardCanvasGuiInput(event: InputEvent): boolean
        /* gdvirtual */ _forwardCanvasDrawOverViewport(viewportControl: Control): void
        /* gdvirtual */ _forwardCanvasForceDrawOverViewport(viewportControl: Control): void
        /* gdvirtual */ _forward3DGuiInput(viewportCamera: Camera3D, event: InputEvent): int64
        /* gdvirtual */ _forward3DDrawOverViewport(viewportControl: Control): void
        /* gdvirtual */ _forward3DForceDrawOverViewport(viewportControl: Control): void
        /* gdvirtual */ _getPluginName(): string
        /* gdvirtual */ _getPluginIcon(): Texture2D
        /* gdvirtual */ _hasMainScreen(): boolean
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
        /* gdvirtual */ _getState(): GDictionary
        /* gdvirtual */ _setState(state: GDictionary): void
        
        /** Clear all the state and reset the object being edited to zero. This ensures your plugin does not keep editing a currently existing node, or a node from the wrong scene. */
        /* gdvirtual */ _clear(): void
        /* gdvirtual */ _getUnsavedStatus(forScene: string): string
        /* gdvirtual */ _saveExternalData(): void
        /* gdvirtual */ _applyChanges(): void
        /* gdvirtual */ _getBreakpoints(): PackedStringArray
        /* gdvirtual */ _setWindowLayout(configuration: ConfigFile): void
        /* gdvirtual */ _getWindowLayout(configuration: ConfigFile): void
        
        /** This method is called when the editor is about to run the project. The plugin can then perform required operations before the project runs.  
         *  This method must return a boolean. If this method returns `false`, the project will not run. The run is aborted immediately, so this also prevents all other plugins' [method _build] methods from running.  
         */
        /* gdvirtual */ _build(): boolean
        /* gdvirtual */ _enablePlugin(): void
        /* gdvirtual */ _disablePlugin(): void
        addControlToContainer(container: EditorPlugin.CustomControlContainer, control: Control): void
        addControlToBottomPanel(control: Control, title: string, shortcut: Shortcut = undefined): Button
        addControlToDock(slot: EditorPlugin.DockSlot, control: Control, shortcut: Shortcut = undefined): void
        removeControlFromDocks(control: Control): void
        removeControlFromBottomPanel(control: Control): void
        removeControlFromContainer(container: EditorPlugin.CustomControlContainer, control: Control): void
        setDockTabIcon(control: Control, icon: Texture2D): void
        addToolMenuItem(name: string, callable: Callable): void
        addToolSubmenuItem(name: string, submenu: PopupMenu): void
        removeToolMenuItem(name: string): void
        getExportAsMenu(): PopupMenu
        addCustomType(type: string, base: string, script: Script, icon: Texture2D): void
        removeCustomType(type: string): void
        addAutoloadSingleton(name: string, path: string): void
        removeAutoloadSingleton(name: string): void
        updateOverlays(): int64
        makeBottomPanelItemVisible(item: Control): void
        hideBottomPanel(): void
        getUndoRedo(): EditorUndoRedoManager
        addUndoRedoInspectorHookCallback(callable: Callable): void
        removeUndoRedoInspectorHookCallback(callable: Callable): void
        queueSaveLayout(): void
        addTranslationParserPlugin(parser: EditorTranslationParserPlugin): void
        removeTranslationParserPlugin(parser: EditorTranslationParserPlugin): void
        addImportPlugin(importer: EditorImportPlugin, firstPriority: boolean = false): void
        removeImportPlugin(importer: EditorImportPlugin): void
        addSceneFormatImporterPlugin(sceneFormatImporter: EditorSceneFormatImporter, firstPriority: boolean = false): void
        removeSceneFormatImporterPlugin(sceneFormatImporter: EditorSceneFormatImporter): void
        addScenePostImportPlugin(sceneImportPlugin: EditorScenePostImportPlugin, firstPriority: boolean = false): void
        removeScenePostImportPlugin(sceneImportPlugin: EditorScenePostImportPlugin): void
        addExportPlugin(plugin: EditorExportPlugin): void
        removeExportPlugin(plugin: EditorExportPlugin): void
        addExportPlatform(platform: EditorExportPlatform): void
        removeExportPlatform(platform: EditorExportPlatform): void
        addNode3DGizmoPlugin(plugin: EditorNode3DGizmoPlugin): void
        removeNode3DGizmoPlugin(plugin: EditorNode3DGizmoPlugin): void
        addInspectorPlugin(plugin: EditorInspectorPlugin): void
        removeInspectorPlugin(plugin: EditorInspectorPlugin): void
        addResourceConversionPlugin(plugin: EditorResourceConversionPlugin): void
        removeResourceConversionPlugin(plugin: EditorResourceConversionPlugin): void
        setInputEventForwardingAlwaysEnabled(): void
        setForceDrawOverForwardingEnabled(): void
        addContextMenuPlugin(slot: EditorContextMenuPlugin.ContextMenuSlot, plugin: EditorContextMenuPlugin): void
        removeContextMenuPlugin(plugin: EditorContextMenuPlugin): void
        getEditorInterface(): EditorInterface
        getScriptCreateDialog(): ScriptCreateDialog
        addDebuggerPlugin(script: EditorDebuggerPlugin): void
        removeDebuggerPlugin(script: EditorDebuggerPlugin): void
        getPluginVersion(): string
        readonly sceneChanged: Signal<(sceneRoot: Node) => void>
        readonly sceneClosed: Signal<(filepath: string) => void>
        readonly mainScreenChanged: Signal<(screenName: string) => void>
        readonly resourceSaved: Signal<(resource: Resource) => void>
        readonly sceneSaved: Signal<(filepath: string) => void>
        readonly projectSettingsChanged: Signal<() => void>
    }
    /** Custom control for editing properties that can be added to the [EditorInspector].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorproperty.html  
     */
    class EditorProperty<Map extends Record<string, Node> = {}> extends Container<Map> {
        constructor(identifier?: any)
        /* gdvirtual */ _updateProperty(): void
        /* gdvirtual */ _setReadOnly(readOnly: boolean): void
        getEditedProperty(): StringName
        getEditedObject(): GObject
        updateProperty(): void
        addFocusable(control: Control): void
        setBottomEditor(editor: Control): void
        
        /** Draw property as not selected. Used by the inspector. */
        deselect(): void
        isSelected(): boolean
        
        /** Draw property as selected. Used by the inspector. */
        select(focusable: int64 = -1): void
        setObjectAndProperty(object: GObject, property: StringName): void
        setLabelReference(control: Control): void
        emitChanged(property: StringName, value: any, field: StringName = '', changing: boolean = false): void
        _updateEditorPropertyStatus(): void
        
        /** Set this property to change the label (if you want to show one). */
        get label(): string
        set label(value: string)
        get readOnly(): boolean
        set readOnly(value: boolean)
        get drawLabel(): boolean
        set drawLabel(value: boolean)
        get drawBackground(): boolean
        set drawBackground(value: boolean)
        
        /** Used by the inspector, set to `true` when the property is checkable. */
        get checkable(): boolean
        set checkable(value: boolean)
        
        /** Used by the inspector, set to `true` when the property is checked. */
        get checked(): boolean
        set checked(value: boolean)
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
        get useFolding(): boolean
        set useFolding(value: boolean)
        get nameSplitRatio(): float64
        set nameSplitRatio(value: float64)
        readonly propertyChanged: Signal<(property: StringName, value: any, field: StringName, changing: boolean) => void>
        readonly multiplePropertiesChanged: Signal<(properties: PackedStringArray | string[], value: GArray) => void>
        readonly propertyKeyed: Signal<(property: StringName) => void>
        readonly propertyDeleted: Signal<(property: StringName) => void>
        readonly propertyKeyedWithValue: Signal<(property: StringName, value: any) => void>
        readonly propertyChecked: Signal<(property: StringName, checked: boolean) => void>
        readonly propertyFavorited: Signal<(property: StringName, favorited: boolean) => void>
        readonly propertyPinned: Signal<(property: StringName, pinned: boolean) => void>
        readonly propertyCanRevertChanged: Signal<(property: StringName, canRevert: boolean) => void>
        readonly resourceSelected: Signal<(path: string, resource: Resource) => void>
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
        /* gdvirtual */ _convertsTo(): string
        
        /** Called to determine whether a particular [Resource] can be converted to the target resource type by this plugin. */
        /* gdvirtual */ _handles(resource: Resource): boolean
        
        /** Takes an input [Resource] and converts it to the type given in [method _converts_to]. The returned [Resource] is the result of the conversion, and the input [Resource] remains unchanged. */
        /* gdvirtual */ _convert(resource: Resource): Resource
    }
    /** Godot editor's control for selecting [Resource] type properties.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorresourcepicker.html  
     */
    class EditorResourcePicker<Map extends Record<string, Node> = {}> extends HBoxContainer<Map> {
        constructor(identifier?: any)
        /* gdvirtual */ _setCreateOptions(menuNode: GObject): void
        /* gdvirtual */ _handleMenuSelected(id: int64): boolean
        _updateResourcePreview(_unnamedArg0: string, _unnamedArg1: Texture2D, _unnamedArg2: Texture2D, _unnamedArg3: int64): void
        getAllowedTypes(): PackedStringArray
        setTogglePressed(pressed: boolean): void
        get baseType(): string
        set baseType(value: string)
        get editedResource(): Resource
        set editedResource(value: Resource)
        
        /** If `true`, the value can be selected and edited. */
        get editable(): boolean
        set editable(value: boolean)
        get toggleMode(): boolean
        set toggleMode(value: boolean)
        readonly resourceSelected: Signal<(resource: Resource, inspect: boolean) => void>
        readonly resourceChanged: Signal<(resource: Resource) => void>
    }
    /** A node used to generate previews of resources or files.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorresourcepreview.html  
     */
    class EditorResourcePreview<Map extends Record<string, Node> = {}> extends Node<Map> {
        constructor(identifier?: any)
        queueResourcePreview(path: string, receiver: GObject, receiverFunc: StringName, userdata: any): void
        queueEditedResourcePreview(resource: Resource, receiver: GObject, receiverFunc: StringName, userdata: any): void
        addPreviewGenerator(generator: EditorResourcePreviewGenerator): void
        removePreviewGenerator(generator: EditorResourcePreviewGenerator): void
        checkForInvalidation(path: string): void
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
        /* gdvirtual */ _generate(resource: Resource, size: Vector2I, metadata: GDictionary): Texture2D
        /* gdvirtual */ _generateFromPath(path: string, size: Vector2I, metadata: GDictionary): Texture2D
        /* gdvirtual */ _generateSmallPreviewAutomatically(): boolean
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
        /* gdvirtual */ _makeTooltipForPath(path: string, metadata: GDictionary, base: Control): Control
        _thumbnailReady(_unnamedArg0: string, _unnamedArg1: Texture2D, _unnamedArg2: Texture2D, _unnamedArg3: any): void
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
        /* gdvirtual */ _getExtensions(): PackedStringArray
        /* gdvirtual */ _importScene(path: string, flags: int64, options: GDictionary): GObject
        /* gdvirtual */ _getImportOptions(path: string): void
        /* gdvirtual */ _getOptionVisibility(path: string, forAnimation: boolean, option: string): any
        addImportOption(name: string, value: any): void
        addImportOptionAdvanced(type: Variant.Type, name: string, defaultValue: any, hint: PropertyHint = 0, hintString: string = '', usageFlags: int64 = 6): void
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
        /* gdvirtual */ _postImport(scene: Node): GObject
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
        /* gdvirtual */ _getInternalImportOptions(category: int64): void
        /* gdvirtual */ _getInternalOptionVisibility(category: int64, forAnimation: boolean, option: string): any
        /* gdvirtual */ _getInternalOptionUpdateViewRequired(category: int64, option: string): any
        /* gdvirtual */ _internalProcess(category: int64, baseNode: Node, node: Node, resource: Resource): void
        /* gdvirtual */ _getImportOptions(path: string): void
        /* gdvirtual */ _getOptionVisibility(path: string, forAnimation: boolean, option: string): any
        /* gdvirtual */ _preProcess(scene: Node): void
        /* gdvirtual */ _postProcess(scene: Node): void
        getOptionValue(name: StringName): any
        addImportOption(name: string, value: any): void
        addImportOptionAdvanced(type: Variant.Type, name: string, defaultValue: any, hint: PropertyHint = 0, hintString: string = '', usageFlags: int64 = 6): void
    }
    /** Base script that can be used to add extension functions to the editor.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorscript.html  
     */
    class EditorScript extends RefCounted {
        constructor(identifier?: any)
        /** This method is executed by the Editor when **File > Run** is used. */
        /* gdvirtual */ _run(): void
        addRootNode(node: Node): void
        getScene(): Node
        getEditorInterface(): EditorInterface
    }
    /** Godot editor's control for selecting the `script` property of a [Node].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorscriptpicker.html  
     */
    class EditorScriptPicker<Map extends Record<string, Node> = {}> extends EditorResourcePicker<Map> {
        constructor(identifier?: any)
        get scriptOwner(): Node
        set scriptOwner(value: Node)
    }
    /** Manages the SceneTree selection in the editor.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorselection.html  
     */
    class EditorSelection extends GObject {
        constructor(identifier?: any)
        /** Clear the selection. */
        clear(): void
        addNode(node: Node): void
        removeNode(node: Node): void
        getSelectedNodes(): GArray
        getTransformableSelectedNodes(): GArray
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
        hasSetting(name: string): boolean
        setSetting(name: string, value: any): void
        getSetting(name: string): any
        
        /** Erases the setting whose name is specified by [param property]. */
        erase(property: string): void
        setInitialValue(name: StringName, value: any, updateCurrent: boolean): void
        addPropertyInfo(info: GDictionary): void
        setProjectMetadata(section: string, key: string, data: any): void
        getProjectMetadata(section: string, key: string, default_: any = <any> {}): any
        setFavorites(dirs: PackedStringArray | string[]): void
        getFavorites(): PackedStringArray
        setRecentDirs(dirs: PackedStringArray | string[]): void
        getRecentDirs(): PackedStringArray
        setBuiltinActionOverride(name: string, actionsList: GArray): void
        checkChangedSettingsInGroup(settingPrefix: string): boolean
        getChangedSettings(): PackedStringArray
        markSettingChanged(setting: string): void
        readonly settingsChanged: Signal<() => void>
    }
    /** Godot editor's control for editing numeric values.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorspinslider.html  
     */
    class EditorSpinSlider<Map extends Record<string, Node> = {}> extends Range<Map> {
        constructor(identifier?: any)
        /** The text that displays to the left of the value. */
        get label(): string
        set label(value: string)
        
        /** The suffix to display after the value (in a faded color). This should generally be a plural word. You may have to use an abbreviation if the suffix is too long to be displayed. */
        get suffix(): string
        set suffix(value: string)
        get readOnly(): boolean
        set readOnly(value: boolean)
        
        /** If `true`, the slider will not draw background. */
        get flat(): boolean
        set flat(value: boolean)
        get hideSlider(): boolean
        set hideSlider(value: boolean)
        get editingInteger(): boolean
        set editingInteger(value: boolean)
        
        /** Emitted when the spinner/slider is grabbed. */
        readonly grabbed: Signal<() => void>
        
        /** Emitted when the spinner/slider is ungrabbed. */
        readonly ungrabbed: Signal<() => void>
        readonly updownPressed: Signal<() => void>
        readonly valueFocusEntered: Signal<() => void>
        readonly valueFocusExited: Signal<() => void>
    }
    /** Base class for [SyntaxHighlighter] used by the [ScriptEditor].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editorsyntaxhighlighter.html  
     */
    class EditorSyntaxHighlighter extends SyntaxHighlighter {
        constructor(identifier?: any)
        /* gdvirtual */ _getName(): string
        /* gdvirtual */ _getSupportedLanguages(): PackedStringArray
        _getEditedResource(): RefCounted
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
    class EditorToaster<Map extends Record<string, Node> = {}> extends HBoxContainer<Map> {
        /** Toast will display with an INFO severity. */
        static readonly SEVERITY_INFO = 0
        
        /** Toast will display with a WARNING severity and have a corresponding color. */
        static readonly SEVERITY_WARNING = 1
        
        /** Toast will display with an ERROR severity and have a corresponding color. */
        static readonly SEVERITY_ERROR = 2
        constructor(identifier?: any)
        pushToast(message: string, severity: EditorToaster.Severity = 0, tooltip: string = ''): void
    }
    /** Plugin for adding custom parsers to extract strings that are to be translated from custom files (.csv, .json etc.).  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_editortranslationparserplugin.html  
     */
    class EditorTranslationParserPlugin extends RefCounted {
        constructor(identifier?: any)
        /* gdvirtual */ _parseFile(path: string, msgids: GArray, msgidsContextPlural: GArray): void
        /* gdvirtual */ _getComments(msgidsComment: GArray, msgidsContextPluralComment: GArray): void
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
        createAction(name: string, mergeMode: UndoRedo.MergeMode = 0, customContext: GObject = undefined, backwardUndoOps: boolean = false): void
        commitAction(execute: boolean = true): void
        isCommittingAction(): boolean
        forceFixedHistory(): void
        addDoMethod(object: GObject, method: StringName, ...varargs: any[]): void
        addUndoMethod(object: GObject, method: StringName, ...varargs: any[]): void
        addDoProperty(object: GObject, property: StringName, value: any): void
        addUndoProperty(object: GObject, property: StringName, value: any): void
        addDoReference(object: GObject): void
        addUndoReference(object: GObject): void
        getObjectHistoryId(object: GObject): int64
        getHistoryUndoRedo(id: int64): UndoRedo
        clearHistory(id: int64 = -99, increaseVersion: boolean = true): void
        readonly historyChanged: Signal<() => void>
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
}
