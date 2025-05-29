// AUTO-GENERATED
declare module "godot" {
    class JniSingleton extends GObject {
        constructor(identifier?: any)
    }
    class Json extends Resource {
        constructor(identifier?: any)
        static stringify(data: any, indent?: string /* = '' */, sortKeys?: boolean /* = true */, fullPrecision?: boolean /* = false */): string
        static parseString(jsonString: string): any
        parse(jsonText: string, keepText?: boolean /* = false */): GError
        getParsedText(): string
        getErrorLine(): int64
        getErrorMessage(): string
        static fromNative(variant: any, fullObjects?: boolean /* = false */): any
        static toNative(json: any, allowObjects?: boolean /* = false */): any
        get data(): any
        set data(value: any)
    }
    namespace JsonRpc {
        enum ErrorCode {
            ParseError = -32700,
            InvalidRequest = -32600,
            MethodNotFound = -32601,
            InvalidParams = -32602,
            InternalError = -32603,
        }
    }
    class JsonRpc extends GObject {
        static readonly PARSE_ERROR = -32700
        static readonly INVALID_REQUEST = -32600
        static readonly METHOD_NOT_FOUND = -32601
        static readonly INVALID_PARAMS = -32602
        static readonly INTERNAL_ERROR = -32603
        constructor(identifier?: any)
        setMethod(name: string, callback: Callable): void
        processAction(action: any, recurse?: boolean /* = false */): any
        processString(action: string): string
        makeRequest(method: string, params: any, id: any): GDictionary
        makeResponse(result: any, id: any): GDictionary
        makeNotification(method: string, params: any): GDictionary
        makeResponseError(code: int64, message: string, id?: any /* = <any> {} */): GDictionary
    }
    /** Represents a class from the Java Native Interface.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_javaclass.html  
     */
    class JavaClass extends RefCounted {
        constructor(identifier?: any)
        /** Returns the Java class name. */
        getJavaClassName(): string
        
        /** Returns the object's Java methods and their signatures as an [Array] of dictionaries, in the same format as [method Object.get_method_list]. */
        getJavaMethodList(): GArray
        
        /** Returns a [JavaClass] representing the Java parent class of this class. */
        getJavaParentClass(): null | JavaClass
    }
    /** Represents an object from the Java Native Interface.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_javaobject.html  
     */
    class JavaObject extends RefCounted {
        constructor(identifier?: any)
        /** Returns the [JavaClass] that this object is an instance of. */
        getJavaClass(): null | JavaClass
    }
    /** A wrapper class for web native JavaScript objects.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_javascriptobject.html  
     */
    class JavaScriptObject extends RefCounted {
        constructor(identifier?: any)
    }
    /** Abstract base class for all 2D physics joints.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_joint2d.html  
     */
    class Joint2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** Returns the joint's internal [RID] from the [PhysicsServer2D]. */
        getRid(): Rid
        
        /** Path to the first body (A) attached to the joint. The node must inherit [PhysicsBody2D]. */
        get nodeA(): NodePath
        set nodeA(value: NodePath | string)
        
        /** Path to the second body (B) attached to the joint. The node must inherit [PhysicsBody2D]. */
        get nodeB(): NodePath
        set nodeB(value: NodePath | string)
        
        /** When [member node_a] and [member node_b] move in different directions the [member bias] controls how fast the joint pulls them back to their original position. The lower the [member bias] the more the two bodies can pull on the joint.  
         *  When set to `0`, the default value from [member ProjectSettings.physics/2d/solver/default_constraint_bias] is used.  
         */
        get bias(): float64
        set bias(value: float64)
        
        /** If `true`, the two bodies bound together do not collide with each other. */
        get disableCollision(): boolean
        set disableCollision(value: boolean)
    }
    /** Abstract base class for all 3D physics joints.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_joint3d.html  
     */
    class Joint3D<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        /** Returns the joint's internal [RID] from the [PhysicsServer3D]. */
        getRid(): Rid
        
        /** Path to the first node (A) attached to the joint. The node must inherit [PhysicsBody3D].  
         *  If left empty and [member node_b] is set, the body is attached to a fixed [StaticBody3D] without collision shapes.  
         */
        get nodeA(): NodePath
        set nodeA(value: NodePath | string)
        
        /** Path to the second node (B) attached to the joint. The node must inherit [PhysicsBody3D].  
         *  If left empty and [member node_a] is set, the body is attached to a fixed [StaticBody3D] without collision shapes.  
         */
        get nodeB(): NodePath
        set nodeB(value: NodePath | string)
        
        /** The priority used to define which solver is executed first for multiple joints. The lower the value, the higher the priority. */
        get solverPriority(): int64
        set solverPriority(value: int64)
        
        /** If `true`, the two bodies bound together do not collide with each other. */
        get excludeNodesFromCollision(): boolean
        set excludeNodesFromCollision(value: boolean)
    }
    /** Holds collision data from the movement of a [PhysicsBody2D].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_kinematiccollision2d.html  
     */
    class KinematicCollision2D extends RefCounted {
        constructor(identifier?: any)
        /** Returns the point of collision in global coordinates. */
        getPosition(): Vector2
        
        /** Returns the colliding body's shape's normal at the point of collision. */
        getNormal(): Vector2
        
        /** Returns the moving object's travel before collision. */
        getTravel(): Vector2
        
        /** Returns the moving object's remaining movement vector. */
        getRemainder(): Vector2
        
        /** Returns the collision angle according to [param up_direction], which is [constant Vector2.UP] by default. This value is always positive. */
        getAngle(upDirection?: Vector2 /* = new Vector2(0, -1) */): float64
        
        /** Returns the colliding body's length of overlap along the collision normal. */
        getDepth(): float64
        
        /** Returns the moving object's colliding shape. */
        getLocalShape(): null | GObject
        
        /** Returns the colliding body's attached [Object]. */
        getCollider(): null | GObject
        
        /** Returns the unique instance ID of the colliding body's attached [Object]. See [method Object.get_instance_id]. */
        getColliderId(): int64
        
        /** Returns the colliding body's [RID] used by the [PhysicsServer2D]. */
        getColliderRid(): Rid
        
        /** Returns the colliding body's shape. */
        getColliderShape(): null | GObject
        
        /** Returns the colliding body's shape index. See [CollisionObject2D]. */
        getColliderShapeIndex(): int64
        
        /** Returns the colliding body's velocity. */
        getColliderVelocity(): Vector2
    }
    /** Holds collision data from the movement of a [PhysicsBody3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_kinematiccollision3d.html  
     */
    class KinematicCollision3D extends RefCounted {
        constructor(identifier?: any)
        /** Returns the moving object's travel before collision. */
        getTravel(): Vector3
        
        /** Returns the moving object's remaining movement vector. */
        getRemainder(): Vector3
        
        /** Returns the colliding body's length of overlap along the collision normal. */
        getDepth(): float64
        
        /** Returns the number of detected collisions. */
        getCollisionCount(): int64
        
        /** Returns the point of collision in global coordinates given a collision index (the deepest collision by default). */
        getPosition(collisionIndex?: int64 /* = 0 */): Vector3
        
        /** Returns the colliding body's shape's normal at the point of collision given a collision index (the deepest collision by default). */
        getNormal(collisionIndex?: int64 /* = 0 */): Vector3
        
        /** Returns the collision angle according to [param up_direction], which is [constant Vector3.UP] by default. This value is always positive. */
        getAngle(collisionIndex?: int64 /* = 0 */, upDirection?: Vector3 /* = Vector3.ZERO */): float64
        
        /** Returns the moving object's colliding shape given a collision index (the deepest collision by default). */
        getLocalShape(collisionIndex?: int64 /* = 0 */): null | GObject
        
        /** Returns the colliding body's attached [Object] given a collision index (the deepest collision by default). */
        getCollider(collisionIndex?: int64 /* = 0 */): null | GObject
        
        /** Returns the unique instance ID of the colliding body's attached [Object] given a collision index (the deepest collision by default). See [method Object.get_instance_id]. */
        getColliderId(collisionIndex?: int64 /* = 0 */): int64
        
        /** Returns the colliding body's [RID] used by the [PhysicsServer3D] given a collision index (the deepest collision by default). */
        getColliderRid(collisionIndex?: int64 /* = 0 */): Rid
        
        /** Returns the colliding body's shape given a collision index (the deepest collision by default). */
        getColliderShape(collisionIndex?: int64 /* = 0 */): null | GObject
        
        /** Returns the colliding body's shape index given a collision index (the deepest collision by default). See [CollisionObject3D]. */
        getColliderShapeIndex(collisionIndex?: int64 /* = 0 */): int64
        
        /** Returns the colliding body's velocity given a collision index (the deepest collision by default). */
        getColliderVelocity(collisionIndex?: int64 /* = 0 */): Vector3
    }
    /** A control for displaying plain text.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_label.html  
     */
    class Label<Map extends NodePathMap = any> extends Control<Map> {
        constructor(identifier?: any)
        /** Returns the height of the line [param line].  
         *  If [param line] is set to `-1`, returns the biggest line height.  
         *  If there are no lines, returns font size in pixels.  
         */
        getLineHeight(line?: int64 /* = -1 */): int64
        
        /** Returns the number of lines of text the Label has. */
        getLineCount(): int64
        
        /** Returns the number of lines shown. Useful if the [Label]'s height cannot currently display all lines. */
        getVisibleLineCount(): int64
        
        /** Returns the total number of printable characters in the text (excluding spaces and newlines). */
        getTotalCharacterCount(): int64
        
        /** Returns the bounding rectangle of the character at position [param pos] in the label's local coordinate system. If the character is a non-visual character or [param pos] is outside the valid range, an empty [Rect2] is returned. If the character is a part of a composite grapheme, the bounding rectangle of the whole grapheme is returned. */
        getCharacterBounds(pos: int64): Rect2
        
        /** The text to display on screen. */
        get text(): string
        set text(value: string)
        
        /** A [LabelSettings] resource that can be shared between multiple [Label] nodes. Takes priority over theme properties. */
        get labelSettings(): null | LabelSettings
        set labelSettings(value: null | LabelSettings)
        
        /** Controls the text's horizontal alignment. Supports left, center, right, and fill, or justify. Set it to one of the [enum HorizontalAlignment] constants. */
        get horizontalAlignment(): int64
        set horizontalAlignment(value: int64)
        
        /** Controls the text's vertical alignment. Supports top, center, bottom, and fill. Set it to one of the [enum VerticalAlignment] constants. */
        get verticalAlignment(): int64
        set verticalAlignment(value: int64)
        
        /** If set to something other than [constant TextServer.AUTOWRAP_OFF], the text gets wrapped inside the node's bounding rectangle. If you resize the node, it will change its height automatically to show all the text. To see how each mode behaves, see [enum TextServer.AutowrapMode]. */
        get autowrapMode(): int64
        set autowrapMode(value: int64)
        
        /** Autowrap space trimming flags. See [constant TextServer.BREAK_TRIM_START_EDGE_SPACES] and [constant TextServer.BREAK_TRIM_END_EDGE_SPACES] for more info. */
        get autowrapTrimFlags(): int64
        set autowrapTrimFlags(value: int64)
        
        /** Line fill alignment rules. See [enum TextServer.JustificationFlag] for more information. */
        get justificationFlags(): int64
        set justificationFlags(value: int64)
        
        /** String used as a paragraph separator. Each paragraph is processed independently, in its own BiDi context. */
        get paragraphSeparator(): string
        set paragraphSeparator(value: string)
        
        /** If `true`, the Label only shows the text that fits inside its bounding rectangle and will clip text horizontally. */
        get clipText(): boolean
        set clipText(value: boolean)
        
        /** Sets the clipping behavior when the text exceeds the node's bounding rectangle. See [enum TextServer.OverrunBehavior] for a description of all modes. */
        get textOverrunBehavior(): int64
        set textOverrunBehavior(value: int64)
        
        /** Ellipsis character used for text clipping. */
        get ellipsisChar(): string
        set ellipsisChar(value: string)
        
        /** If `true`, all the text displays as UPPERCASE. */
        get uppercase(): boolean
        set uppercase(value: boolean)
        
        /** Aligns text to the given tab-stops. */
        get tabStops(): PackedFloat32Array
        set tabStops(value: PackedFloat32Array | float32[])
        
        /** The number of the lines ignored and not displayed from the start of the [member text] value. */
        get linesSkipped(): int64
        set linesSkipped(value: int64)
        
        /** Limits the lines of text the node shows on screen. */
        get maxLinesVisible(): int64
        set maxLinesVisible(value: int64)
        
        /** The number of characters to display. If set to `-1`, all characters are displayed. This can be useful when animating the text appearing in a dialog box.  
         *      
         *  **Note:** Setting this property updates [member visible_ratio] accordingly.  
         */
        get visibleCharacters(): int64
        set visibleCharacters(value: int64)
        
        /** Sets the clipping behavior when [member visible_characters] or [member visible_ratio] is set. See [enum TextServer.VisibleCharactersBehavior] for more info. */
        get visibleCharactersBehavior(): int64
        set visibleCharactersBehavior(value: int64)
        
        /** The fraction of characters to display, relative to the total number of characters (see [method get_total_character_count]). If set to `1.0`, all characters are displayed. If set to `0.5`, only half of the characters will be displayed. This can be useful when animating the text appearing in a dialog box.  
         *      
         *  **Note:** Setting this property updates [member visible_characters] accordingly.  
         */
        get visibleRatio(): float64
        set visibleRatio(value: float64)
        
        /** Base text writing direction. */
        get textDirection(): int64
        set textDirection(value: int64)
        
        /** Language code used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        get language(): string
        set language(value: string)
        
        /** Set BiDi algorithm override for the structured text. */
        get structuredTextBidiOverride(): int64
        set structuredTextBidiOverride(value: int64)
        
        /** Set additional options for BiDi override. */
        get structuredTextBidiOverrideOptions(): GArray
        set structuredTextBidiOverrideOptions(value: GArray)
    }
    namespace Label3D {
        enum DrawFlags {
            FlagShaded = 0,
            FlagDoubleSided = 1,
            FlagDisableDepthTest = 2,
            FlagFixedSize = 3,
            FlagMax = 4,
        }
        enum AlphaCutMode {
            AlphaCutDisabled = 0,
            AlphaCutDiscard = 1,
            AlphaCutOpaquePrepass = 2,
            AlphaCutHash = 3,
        }
    }
    /** A node for displaying plain text in 3D space.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_label3d.html  
     */
    class Label3D<Map extends NodePathMap = any> extends GeometryInstance3D<Map> {
        /** If set, lights in the environment affect the label. */
        static readonly FLAG_SHADED = 0
        
        /** If set, text can be seen from the back as well. If not, the text is invisible when looking at it from behind. */
        static readonly FLAG_DOUBLE_SIDED = 1
        
        /** Disables the depth test, so this object is drawn on top of all others. However, objects drawn after it in the draw order may cover it. */
        static readonly FLAG_DISABLE_DEPTH_TEST = 2
        
        /** Label is scaled by depth so that it always appears the same size on screen. */
        static readonly FLAG_FIXED_SIZE = 3
        
        /** Represents the size of the [enum DrawFlags] enum. */
        static readonly FLAG_MAX = 4
        
        /** This mode performs standard alpha blending. It can display translucent areas, but transparency sorting issues may be visible when multiple transparent materials are overlapping. [member GeometryInstance3D.cast_shadow] has no effect when this transparency mode is used; the [Label3D] will never cast shadows. */
        static readonly ALPHA_CUT_DISABLED = 0
        
        /** This mode only allows fully transparent or fully opaque pixels. Harsh edges will be visible unless some form of screen-space antialiasing is enabled (see [member ProjectSettings.rendering/anti_aliasing/quality/screen_space_aa]). This mode is also known as  *alpha testing*  or  *1-bit transparency* .  
         *      
         *  **Note:** This mode might have issues with anti-aliased fonts and outlines, try adjusting [member alpha_scissor_threshold] or using MSDF font.  
         *      
         *  **Note:** When using text with overlapping glyphs (e.g., cursive scripts), this mode might have transparency sorting issues between the main text and the outline.  
         */
        static readonly ALPHA_CUT_DISCARD = 1
        
        /** This mode draws fully opaque pixels in the depth prepass. This is slower than [constant ALPHA_CUT_DISABLED] or [constant ALPHA_CUT_DISCARD], but it allows displaying translucent areas and smooth edges while using proper sorting.  
         *      
         *  **Note:** When using text with overlapping glyphs (e.g., cursive scripts), this mode might have transparency sorting issues between the main text and the outline.  
         */
        static readonly ALPHA_CUT_OPAQUE_PREPASS = 2
        
        /** This mode draws cuts off all values below a spatially-deterministic threshold, the rest will remain opaque. */
        static readonly ALPHA_CUT_HASH = 3
        constructor(identifier?: any)
        
        /** If `true`, the specified flag will be enabled. See [enum Label3D.DrawFlags] for a list of flags. */
        setDrawFlag(flag: Label3D.DrawFlags, enabled: boolean): void
        
        /** Returns the value of the specified flag. */
        getDrawFlag(flag: Label3D.DrawFlags): boolean
        
        /** Returns a [TriangleMesh] with the label's vertices following its current configuration (such as its [member pixel_size]). */
        generateTriangleMesh(): null | TriangleMesh
        
        /** The size of one pixel's width on the label to scale it in 3D. To make the font look more detailed when up close, increase [member font_size] while decreasing [member pixel_size] at the same time. */
        get pixelSize(): float64
        set pixelSize(value: float64)
        
        /** The text drawing offset (in pixels). */
        get offset(): Vector2
        set offset(value: Vector2)
        
        /** The billboard mode to use for the label. See [enum BaseMaterial3D.BillboardMode] for possible values. */
        get billboard(): int64
        set billboard(value: int64)
        
        /** If `true`, the [Light3D] in the [Environment] has effects on the label. */
        get shaded(): boolean
        set shaded(value: boolean)
        
        /** If `true`, text can be seen from the back as well, if `false`, it is invisible when looking at it from behind. */
        get doubleSided(): boolean
        set doubleSided(value: boolean)
        
        /** If `true`, depth testing is disabled and the object will be drawn in render order. */
        get noDepthTest(): boolean
        set noDepthTest(value: boolean)
        
        /** If `true`, the label is rendered at the same size regardless of distance. The label's size on screen is the same as if the camera was `1.0` units away from the label's origin, regardless of the actual distance from the camera. The [Camera3D]'s field of view (or [member Camera3D.size] when in orthogonal/frustum mode) still affects the size the label is drawn at. */
        get fixedSize(): boolean
        set fixedSize(value: boolean)
        
        /** The alpha cutting mode to use for the sprite. See [enum AlphaCutMode] for possible values. */
        get alphaCut(): int64
        set alphaCut(value: int64)
        
        /** Threshold at which the alpha scissor will discard values. */
        get alphaScissorThreshold(): float64
        set alphaScissorThreshold(value: float64)
        
        /** The hashing scale for Alpha Hash. Recommended values between `0` and `2`. */
        get alphaHashScale(): float64
        set alphaHashScale(value: float64)
        
        /** The type of alpha antialiasing to apply. See [enum BaseMaterial3D.AlphaAntiAliasing]. */
        get alphaAntialiasingMode(): int64
        set alphaAntialiasingMode(value: int64)
        
        /** Threshold at which antialiasing will be applied on the alpha channel. */
        get alphaAntialiasingEdge(): float64
        set alphaAntialiasingEdge(value: float64)
        
        /** Filter flags for the texture. See [enum BaseMaterial3D.TextureFilter] for options. */
        get textureFilter(): int64
        set textureFilter(value: int64)
        
        /** Sets the render priority for the text. Higher priority objects will be sorted in front of lower priority objects.  
         *      
         *  **Note:** This only applies if [member alpha_cut] is set to [constant ALPHA_CUT_DISABLED] (default value).  
         *      
         *  **Note:** This only applies to sorting of transparent objects. This will not impact how transparent objects are sorted relative to opaque objects. This is because opaque objects are not sorted, while transparent objects are sorted from back to front (subject to priority).  
         */
        get renderPriority(): int64
        set renderPriority(value: int64)
        
        /** Sets the render priority for the text outline. Higher priority objects will be sorted in front of lower priority objects.  
         *      
         *  **Note:** This only applies if [member alpha_cut] is set to [constant ALPHA_CUT_DISABLED] (default value).  
         *      
         *  **Note:** This only applies to sorting of transparent objects. This will not impact how transparent objects are sorted relative to opaque objects. This is because opaque objects are not sorted, while transparent objects are sorted from back to front (subject to priority).  
         */
        get outlineRenderPriority(): int64
        set outlineRenderPriority(value: int64)
        
        /** Text [Color] of the [Label3D]. */
        get modulate(): Color
        set modulate(value: Color)
        
        /** The tint of text outline. */
        get outlineModulate(): Color
        set outlineModulate(value: Color)
        
        /** The text to display on screen. */
        get text(): string
        set text(value: string)
        
        /** Font configuration used to display text. */
        get font(): null | Font
        set font(value: null | Font)
        
        /** Font size of the [Label3D]'s text. To make the font look more detailed when up close, increase [member font_size] while decreasing [member pixel_size] at the same time.  
         *  Higher font sizes require more time to render new characters, which can cause stuttering during gameplay.  
         */
        get fontSize(): int64
        set fontSize(value: int64)
        
        /** Text outline size. */
        get outlineSize(): int64
        set outlineSize(value: int64)
        
        /** Controls the text's horizontal alignment. Supports left, center, right, and fill, or justify. Set it to one of the [enum HorizontalAlignment] constants. */
        get horizontalAlignment(): int64
        set horizontalAlignment(value: int64)
        
        /** Controls the text's vertical alignment. Supports top, center, bottom. Set it to one of the [enum VerticalAlignment] constants. */
        get verticalAlignment(): int64
        set verticalAlignment(value: int64)
        
        /** If `true`, all the text displays as UPPERCASE. */
        get uppercase(): boolean
        set uppercase(value: boolean)
        
        /** Additional vertical spacing between lines (in pixels), spacing is added to line descent. This value can be negative. */
        get lineSpacing(): float64
        set lineSpacing(value: float64)
        
        /** If set to something other than [constant TextServer.AUTOWRAP_OFF], the text gets wrapped inside the node's bounding rectangle. If you resize the node, it will change its height automatically to show all the text. To see how each mode behaves, see [enum TextServer.AutowrapMode]. */
        get autowrapMode(): int64
        set autowrapMode(value: int64)
        
        /** Autowrap space trimming flags. See [constant TextServer.BREAK_TRIM_START_EDGE_SPACES] and [constant TextServer.BREAK_TRIM_END_EDGE_SPACES] for more info. */
        get autowrapTrimFlags(): int64
        set autowrapTrimFlags(value: int64)
        
        /** Line fill alignment rules. See [enum TextServer.JustificationFlag] for more information. */
        get justificationFlags(): int64
        set justificationFlags(value: int64)
        
        /** Text width (in pixels), used for autowrap and fill alignment. */
        get width(): float64
        set width(value: float64)
        
        /** Base text writing direction. */
        get textDirection(): int64
        set textDirection(value: int64)
        
        /** Language code used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        get language(): string
        set language(value: string)
        
        /** Set BiDi algorithm override for the structured text. */
        get structuredTextBidiOverride(): int64
        set structuredTextBidiOverride(value: int64)
        
        /** Set additional options for BiDi override. */
        get structuredTextBidiOverrideOptions(): GArray
        set structuredTextBidiOverrideOptions(value: GArray)
    }
    /** Provides common settings to customize the text in a [Label].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_labelsettings.html  
     */
    class LabelSettings extends Resource {
        constructor(identifier?: any)
        /** Adds a new stacked outline to the label at the given [param index]. If [param index] is `-1`, the new stacked outline will be added at the end of the list. */
        addStackedOutline(index?: int64 /* = -1 */): void
        
        /** Moves the stacked outline at index [param from_index] to the given position [param to_position] in the array. */
        moveStackedOutline(fromIndex: int64, toPosition: int64): void
        
        /** Removes the stacked outline at index [param index]. */
        removeStackedOutline(index: int64): void
        
        /** Sets the size of the stacked outline identified by the given [param index] to [param size]. */
        setStackedOutlineSize(index: int64, size: int64): void
        
        /** Returns the size of the stacked outline at [param index]. */
        getStackedOutlineSize(index: int64): int64
        
        /** Sets the color of the stacked outline identified by the given [param index] to [param color]. */
        setStackedOutlineColor(index: int64, color: Color): void
        
        /** Returns the color of the stacked outline at [param index]. */
        getStackedOutlineColor(index: int64): Color
        
        /** Adds a new stacked shadow to the label at the given [param index]. If [param index] is `-1`, the new stacked shadow will be added at the end of the list. */
        addStackedShadow(index?: int64 /* = -1 */): void
        
        /** Moves the stacked shadow at index [param from_index] to the given position [param to_position] in the array. */
        moveStackedShadow(fromIndex: int64, toPosition: int64): void
        
        /** Removes the stacked shadow at index [param index]. */
        removeStackedShadow(index: int64): void
        
        /** Sets the offset of the stacked shadow identified by the given [param index] to [param offset]. */
        setStackedShadowOffset(index: int64, offset: Vector2): void
        
        /** Returns the offset of the stacked shadow at [param index]. */
        getStackedShadowOffset(index: int64): Vector2
        
        /** Sets the color of the stacked shadow identified by the given [param index] to [param color]. */
        setStackedShadowColor(index: int64, color: Color): void
        
        /** Returns the color of the stacked shadow at [param index]. */
        getStackedShadowColor(index: int64): Color
        
        /** Sets the outline size of the stacked shadow identified by the given [param index] to [param size]. */
        setStackedShadowOutlineSize(index: int64, size: int64): void
        
        /** Returns the outline size of the stacked shadow at [param index]. */
        getStackedShadowOutlineSize(index: int64): int64
        
        /** Additional vertical spacing between lines (in pixels), spacing is added to line descent. This value can be negative. */
        get lineSpacing(): float64
        set lineSpacing(value: float64)
        
        /** Vertical space between paragraphs. Added on top of [member line_spacing]. */
        get paragraphSpacing(): float64
        set paragraphSpacing(value: float64)
        
        /** [Font] used for the text. */
        get font(): null | Font
        set font(value: null | Font)
        
        /** Size of the text. */
        get fontSize(): int64
        set fontSize(value: int64)
        
        /** Color of the text. */
        get fontColor(): Color
        set fontColor(value: Color)
        
        /** Text outline size. */
        get outlineSize(): int64
        set outlineSize(value: int64)
        
        /** The color of the outline. */
        get outlineColor(): Color
        set outlineColor(value: Color)
        
        /** Size of the shadow effect. */
        get shadowSize(): int64
        set shadowSize(value: int64)
        
        /** Color of the shadow effect. If alpha is `0`, no shadow will be drawn. */
        get shadowColor(): Color
        set shadowColor(value: Color)
        
        /** Offset of the shadow effect, in pixels. */
        get shadowOffset(): Vector2
        set shadowOffset(value: Vector2)
        
        /** The number of stacked outlines. */
        get stackedOutlineCount(): any /*Stacked Outlines,stacked_outline_*/
        set stackedOutlineCount(value: any /*Stacked Outlines,stacked_outline_*/)
        
        /** Returns the stacked shadow count. */
        get stackedShadowCount(): any /*Stacked Shadows,stacked_shadow_*/
        set stackedShadowCount(value: any /*Stacked Shadows,stacked_shadow_*/)
    }
    namespace Light2D {
        enum ShadowFilter {
            ShadowFilterNone = 0,
            ShadowFilterPcf5 = 1,
            ShadowFilterPcf13 = 2,
        }
        enum BlendMode {
            BlendModeAdd = 0,
            BlendModeSub = 1,
            BlendModeMix = 2,
        }
    }
    /** Casts light in a 2D environment.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_light2d.html  
     */
    class Light2D<Map extends NodePathMap = any> extends Node2D<Map> {
        /** No filter applies to the shadow map. This provides hard shadow edges and is the fastest to render. See [member shadow_filter]. */
        static readonly SHADOW_FILTER_NONE = 0
        
        /** Percentage closer filtering (5 samples) applies to the shadow map. This is slower compared to hard shadow rendering. See [member shadow_filter]. */
        static readonly SHADOW_FILTER_PCF5 = 1
        
        /** Percentage closer filtering (13 samples) applies to the shadow map. This is the slowest shadow filtering mode, and should be used sparingly. See [member shadow_filter]. */
        static readonly SHADOW_FILTER_PCF13 = 2
        
        /** Adds the value of pixels corresponding to the Light2D to the values of pixels under it. This is the common behavior of a light. */
        static readonly BLEND_MODE_ADD = 0
        
        /** Subtracts the value of pixels corresponding to the Light2D to the values of pixels under it, resulting in inversed light effect. */
        static readonly BLEND_MODE_SUB = 1
        
        /** Mix the value of pixels corresponding to the Light2D to the values of pixels under it by linear interpolation. */
        static readonly BLEND_MODE_MIX = 2
        constructor(identifier?: any)
        
        /** Sets the light's height, which is used in 2D normal mapping. See [member PointLight2D.height] and [member DirectionalLight2D.height]. */
        setHeight(height: float64): void
        
        /** Returns the light's height, which is used in 2D normal mapping. See [member PointLight2D.height] and [member DirectionalLight2D.height]. */
        getHeight(): float64
        
        /** If `true`, Light2D will emit light. */
        get enabled(): boolean
        set enabled(value: boolean)
        
        /** If `true`, Light2D will only appear when editing the scene. */
        get editorOnly(): boolean
        set editorOnly(value: boolean)
        
        /** The Light2D's [Color]. */
        get color(): Color
        set color(value: Color)
        
        /** The Light2D's energy value. The larger the value, the stronger the light. */
        get energy(): float64
        set energy(value: float64)
        
        /** The Light2D's blend mode. See [enum BlendMode] constants for values. */
        get blendMode(): int64
        set blendMode(value: int64)
        
        /** Minimum `z` value of objects that are affected by the Light2D. */
        get rangeZMin(): int64
        set rangeZMin(value: int64)
        
        /** Maximum `z` value of objects that are affected by the Light2D. */
        get rangeZMax(): int64
        set rangeZMax(value: int64)
        
        /** Minimum layer value of objects that are affected by the Light2D. */
        get rangeLayerMin(): int64
        set rangeLayerMin(value: int64)
        
        /** Maximum layer value of objects that are affected by the Light2D. */
        get rangeLayerMax(): int64
        set rangeLayerMax(value: int64)
        
        /** The layer mask. Only objects with a matching [member CanvasItem.light_mask] will be affected by the Light2D. See also [member shadow_item_cull_mask], which affects which objects can cast shadows.  
         *      
         *  **Note:** [member range_item_cull_mask] is ignored by [DirectionalLight2D], which will always light a 2D node regardless of the 2D node's [member CanvasItem.light_mask].  
         */
        get rangeItemCullMask(): int64
        set rangeItemCullMask(value: int64)
        
        /** If `true`, the Light2D will cast shadows. */
        get shadowEnabled(): boolean
        set shadowEnabled(value: boolean)
        
        /** [Color] of shadows cast by the Light2D. */
        get shadowColor(): Color
        set shadowColor(value: Color)
        
        /** Shadow filter type. See [enum ShadowFilter] for possible values. */
        get shadowFilter(): int64
        set shadowFilter(value: int64)
        
        /** Smoothing value for shadows. Higher values will result in softer shadows, at the cost of visible streaks that can appear in shadow rendering. [member shadow_filter_smooth] only has an effect if [member shadow_filter] is [constant SHADOW_FILTER_PCF5] or [constant SHADOW_FILTER_PCF13]. */
        get shadowFilterSmooth(): float64
        set shadowFilterSmooth(value: float64)
        
        /** The shadow mask. Used with [LightOccluder2D] to cast shadows. Only occluders with a matching [member CanvasItem.light_mask] will cast shadows. See also [member range_item_cull_mask], which affects which objects can  *receive*  the light. */
        get shadowItemCullMask(): int64
        set shadowItemCullMask(value: int64)
    }
    namespace Light3D {
        enum Param {
            ParamEnergy = 0,
            ParamIndirectEnergy = 1,
            ParamVolumetricFogEnergy = 2,
            ParamSpecular = 3,
            ParamRange = 4,
            ParamSize = 5,
            ParamAttenuation = 6,
            ParamSpotAngle = 7,
            ParamSpotAttenuation = 8,
            ParamShadowMaxDistance = 9,
            ParamShadowSplit1Offset = 10,
            ParamShadowSplit2Offset = 11,
            ParamShadowSplit3Offset = 12,
            ParamShadowFadeStart = 13,
            ParamShadowNormalBias = 14,
            ParamShadowBias = 15,
            ParamShadowPancakeSize = 16,
            ParamShadowOpacity = 17,
            ParamShadowBlur = 18,
            ParamTransmittanceBias = 19,
            ParamIntensity = 20,
            ParamMax = 21,
        }
        enum BakeMode {
            BakeDisabled = 0,
            BakeStatic = 1,
            BakeDynamic = 2,
        }
    }
    /** Provides a base class for different kinds of light nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_light3d.html  
     */
    class Light3D<Map extends NodePathMap = any> extends VisualInstance3D<Map> {
        /** Constant for accessing [member light_energy]. */
        static readonly PARAM_ENERGY = 0
        
        /** Constant for accessing [member light_indirect_energy]. */
        static readonly PARAM_INDIRECT_ENERGY = 1
        
        /** Constant for accessing [member light_volumetric_fog_energy]. */
        static readonly PARAM_VOLUMETRIC_FOG_ENERGY = 2
        
        /** Constant for accessing [member light_specular]. */
        static readonly PARAM_SPECULAR = 3
        
        /** Constant for accessing [member OmniLight3D.omni_range] or [member SpotLight3D.spot_range]. */
        static readonly PARAM_RANGE = 4
        
        /** Constant for accessing [member light_size]. */
        static readonly PARAM_SIZE = 5
        
        /** Constant for accessing [member OmniLight3D.omni_attenuation] or [member SpotLight3D.spot_attenuation]. */
        static readonly PARAM_ATTENUATION = 6
        
        /** Constant for accessing [member SpotLight3D.spot_angle]. */
        static readonly PARAM_SPOT_ANGLE = 7
        
        /** Constant for accessing [member SpotLight3D.spot_angle_attenuation]. */
        static readonly PARAM_SPOT_ATTENUATION = 8
        
        /** Constant for accessing [member DirectionalLight3D.directional_shadow_max_distance]. */
        static readonly PARAM_SHADOW_MAX_DISTANCE = 9
        
        /** Constant for accessing [member DirectionalLight3D.directional_shadow_split_1]. */
        static readonly PARAM_SHADOW_SPLIT_1_OFFSET = 10
        
        /** Constant for accessing [member DirectionalLight3D.directional_shadow_split_2]. */
        static readonly PARAM_SHADOW_SPLIT_2_OFFSET = 11
        
        /** Constant for accessing [member DirectionalLight3D.directional_shadow_split_3]. */
        static readonly PARAM_SHADOW_SPLIT_3_OFFSET = 12
        
        /** Constant for accessing [member DirectionalLight3D.directional_shadow_fade_start]. */
        static readonly PARAM_SHADOW_FADE_START = 13
        
        /** Constant for accessing [member shadow_normal_bias]. */
        static readonly PARAM_SHADOW_NORMAL_BIAS = 14
        
        /** Constant for accessing [member shadow_bias]. */
        static readonly PARAM_SHADOW_BIAS = 15
        
        /** Constant for accessing [member DirectionalLight3D.directional_shadow_pancake_size]. */
        static readonly PARAM_SHADOW_PANCAKE_SIZE = 16
        
        /** Constant for accessing [member shadow_opacity]. */
        static readonly PARAM_SHADOW_OPACITY = 17
        
        /** Constant for accessing [member shadow_blur]. */
        static readonly PARAM_SHADOW_BLUR = 18
        
        /** Constant for accessing [member shadow_transmittance_bias]. */
        static readonly PARAM_TRANSMITTANCE_BIAS = 19
        
        /** Constant for accessing [member light_intensity_lumens] and [member light_intensity_lux]. Only used when [member ProjectSettings.rendering/lights_and_shadows/use_physical_light_units] is `true`. */
        static readonly PARAM_INTENSITY = 20
        
        /** Represents the size of the [enum Param] enum. */
        static readonly PARAM_MAX = 21
        
        /** Light is ignored when baking. This is the fastest mode, but the light will not be taken into account when baking global illumination. This mode should generally be used for dynamic lights that change quickly, as the effect of global illumination is less noticeable on those lights.  
         *      
         *  **Note:** Hiding a light does  *not*  affect baking [LightmapGI]. Hiding a light will still affect baking [VoxelGI] and SDFGI (see [member Environment.sdfgi_enabled]).  
         */
        static readonly BAKE_DISABLED = 0
        
        /** Light is taken into account in static baking ([VoxelGI], [LightmapGI], SDFGI ([member Environment.sdfgi_enabled])). The light can be moved around or modified, but its global illumination will not update in real-time. This is suitable for subtle changes (such as flickering torches), but generally not large changes such as toggling a light on and off.  
         *      
         *  **Note:** The light is not baked in [LightmapGI] if [member editor_only] is `true`.  
         */
        static readonly BAKE_STATIC = 1
        
        /** Light is taken into account in dynamic baking ([VoxelGI] and SDFGI ([member Environment.sdfgi_enabled]) only). The light can be moved around or modified with global illumination updating in real-time. The light's global illumination appearance will be slightly different compared to [constant BAKE_STATIC]. This has a greater performance cost compared to [constant BAKE_STATIC]. When using SDFGI, the update speed of dynamic lights is affected by [member ProjectSettings.rendering/global_illumination/sdfgi/frames_to_update_lights]. */
        static readonly BAKE_DYNAMIC = 2
        constructor(identifier?: any)
        
        /** Sets the value of the specified [enum Light3D.Param] parameter. */
        setParam(param: Light3D.Param, value: float64): void
        
        /** Returns the value of the specified [enum Light3D.Param] parameter. */
        getParam(param: Light3D.Param): float64
        
        /** Returns the [Color] of an idealized blackbody at the given [member light_temperature]. This value is calculated internally based on the [member light_temperature]. This [Color] is multiplied by [member light_color] before being sent to the [RenderingServer]. */
        getCorrelatedColor(): Color
        
        /** Used by positional lights ([OmniLight3D] and [SpotLight3D]) when [member ProjectSettings.rendering/lights_and_shadows/use_physical_light_units] is `true`. Sets the intensity of the light source measured in Lumens. Lumens are a measure of luminous flux, which is the total amount of visible light emitted by a light source per unit of time.  
         *  For [SpotLight3D]s, we assume that the area outside the visible cone is surrounded by a perfect light absorbing material. Accordingly, the apparent brightness of the cone area does not change as the cone increases and decreases in size.  
         *  A typical household lightbulb can range from around 600 lumens to 1,200 lumens, a candle is about 13 lumens, while a streetlight can be approximately 60,000 lumens.  
         */
        get lightIntensityLumens(): float64
        set lightIntensityLumens(value: float64)
        
        /** Used by [DirectionalLight3D]s when [member ProjectSettings.rendering/lights_and_shadows/use_physical_light_units] is `true`. Sets the intensity of the light source measured in Lux. Lux is a measure of luminous flux per unit area, it is equal to one lumen per square meter. Lux is the measure of how much light hits a surface at a given time.  
         *  On a clear sunny day a surface in direct sunlight may be approximately 100,000 lux, a typical room in a home may be approximately 50 lux, while the moonlit ground may be approximately 0.1 lux.  
         */
        get lightIntensityLux(): float64
        set lightIntensityLux(value: float64)
        
        /** Sets the color temperature of the light source, measured in Kelvin. This is used to calculate a correlated color temperature which tints the [member light_color].  
         *  The sun on a cloudy day is approximately 6500 Kelvin, on a clear day it is between 5500 to 6000 Kelvin, and on a clear day at sunrise or sunset it ranges to around 1850 Kelvin.  
         */
        get lightTemperature(): float64
        set lightTemperature(value: float64)
        
        /** The light's color in the nonlinear sRGB color space. An  *overbright*  color can be used to achieve a result equivalent to increasing the light's [member light_energy]. */
        get lightColor(): Color
        set lightColor(value: Color)
        
        /** The light's strength multiplier (this is not a physical unit). For [OmniLight3D] and [SpotLight3D], changing this value will only change the light color's intensity, not the light's radius. */
        get lightEnergy(): float64
        set lightEnergy(value: float64)
        
        /** Secondary multiplier used with indirect light (light bounces). Used with [VoxelGI] and SDFGI (see [member Environment.sdfgi_enabled]).  
         *      
         *  **Note:** This property is ignored if [member light_energy] is equal to `0.0`, as the light won't be present at all in the GI shader.  
         */
        get lightIndirectEnergy(): float64
        set lightIndirectEnergy(value: float64)
        
        /** Secondary multiplier multiplied with [member light_energy] then used with the [Environment]'s volumetric fog (if enabled). If set to `0.0`, computing volumetric fog will be skipped for this light, which can improve performance for large amounts of lights when volumetric fog is enabled.  
         *      
         *  **Note:** To prevent short-lived dynamic light effects from poorly interacting with volumetric fog, lights used in those effects should have [member light_volumetric_fog_energy] set to `0.0` unless [member Environment.volumetric_fog_temporal_reprojection_enabled] is disabled (or unless the reprojection amount is significantly lowered).  
         */
        get lightVolumetricFogEnergy(): float64
        set lightVolumetricFogEnergy(value: float64)
        
        /** [Texture2D] projected by light. [member shadow_enabled] must be on for the projector to work. Light projectors make the light appear as if it is shining through a colored but transparent object, almost like light shining through stained-glass.  
         *      
         *  **Note:** Unlike [BaseMaterial3D] whose filter mode can be adjusted on a per-material basis, the filter mode for light projector textures is set globally with [member ProjectSettings.rendering/textures/light_projectors/filter].  
         *      
         *  **Note:** Light projector textures are only supported in the Forward+ and Mobile rendering methods, not Compatibility.  
         */
        get lightProjector(): null | Texture2D | any /*-AnimatedTexture*/ | any /*-AtlasTexture*/ | any /*-CameraTexture*/ | any /*-CanvasTexture*/ | any /*-MeshTexture*/ | any /*-Texture2Drd*/ | any /*-ViewportTexture*/
        set lightProjector(value: null | Texture2D | any /*-AnimatedTexture*/ | any /*-AtlasTexture*/ | any /*-CameraTexture*/ | any /*-CanvasTexture*/ | any /*-MeshTexture*/ | any /*-Texture2Drd*/ | any /*-ViewportTexture*/)
        
        /** The size of the light in Godot units. Only available for [OmniLight3D]s and [SpotLight3D]s. Increasing this value will make the light fade out slower and shadows appear blurrier (also called percentage-closer soft shadows, or PCSS). This can be used to simulate area lights to an extent. Increasing this value above `0.0` for lights with shadows enabled will have a noticeable performance cost due to PCSS.  
         *      
         *  **Note:** [member light_size] is not affected by [member Node3D.scale] (the light's scale or its parent's scale).  
         *      
         *  **Note:** PCSS for positional lights is only supported in the Forward+ and Mobile rendering methods, not Compatibility.  
         */
        get lightSize(): float64
        set lightSize(value: float64)
        
        /** The light's angular size in degrees. Increasing this will make shadows softer at greater distances (also called percentage-closer soft shadows, or PCSS). Only available for [DirectionalLight3D]s. For reference, the Sun from the Earth is approximately `0.5`. Increasing this value above `0.0` for lights with shadows enabled will have a noticeable performance cost due to PCSS.  
         *      
         *  **Note:** [member light_angular_distance] is not affected by [member Node3D.scale] (the light's scale or its parent's scale).  
         *      
         *  **Note:** PCSS for directional lights is only supported in the Forward+ rendering method, not Mobile or Compatibility.  
         */
        get lightAngularDistance(): float64
        set lightAngularDistance(value: float64)
        
        /** If `true`, the light's effect is reversed, darkening areas and casting bright shadows. */
        get lightNegative(): boolean
        set lightNegative(value: boolean)
        
        /** The intensity of the specular blob in objects affected by the light. At `0`, the light becomes a pure diffuse light. When not baking emission, this can be used to avoid unrealistic reflections when placing lights above an emissive surface. */
        get lightSpecular(): float64
        set lightSpecular(value: float64)
        
        /** The light's bake mode. This will affect the global illumination techniques that have an effect on the light's rendering. See [enum BakeMode].  
         *      
         *  **Note:** Meshes' global illumination mode will also affect the global illumination rendering. See [member GeometryInstance3D.gi_mode].  
         */
        get lightBakeMode(): int64
        set lightBakeMode(value: int64)
        
        /** The light will affect objects in the selected layers. */
        get lightCullMask(): int64
        set lightCullMask(value: int64)
        
        /** If `true`, the light will cast real-time shadows. This has a significant performance cost. Only enable shadow rendering when it makes a noticeable difference in the scene's appearance, and consider using [member distance_fade_enabled] to hide the light when far away from the [Camera3D]. */
        get shadowEnabled(): boolean
        set shadowEnabled(value: boolean)
        
        /** Used to adjust shadow appearance. Too small a value results in self-shadowing ("shadow acne"), while too large a value causes shadows to separate from casters ("peter-panning"). Adjust as needed. */
        get shadowBias(): float64
        set shadowBias(value: float64)
        
        /** Offsets the lookup into the shadow map by the object's normal. This can be used to reduce self-shadowing artifacts without using [member shadow_bias]. In practice, this value should be tweaked along with [member shadow_bias] to reduce artifacts as much as possible. */
        get shadowNormalBias(): float64
        set shadowNormalBias(value: float64)
        
        /** If `true`, reverses the backface culling of the mesh. This can be useful when you have a flat mesh that has a light behind it. If you need to cast a shadow on both sides of the mesh, set the mesh to use double-sided shadows with [constant GeometryInstance3D.SHADOW_CASTING_SETTING_DOUBLE_SIDED]. */
        get shadowReverseCullFace(): boolean
        set shadowReverseCullFace(value: boolean)
        get shadowTransmittanceBias(): float64
        set shadowTransmittanceBias(value: float64)
        
        /** The opacity to use when rendering the light's shadow map. Values lower than `1.0` make the light appear through shadows. This can be used to fake global illumination at a low performance cost. */
        get shadowOpacity(): float64
        set shadowOpacity(value: float64)
        
        /** Blurs the edges of the shadow. Can be used to hide pixel artifacts in low-resolution shadow maps. A high value can impact performance, make shadows appear grainy and can cause other unwanted artifacts. Try to keep as near default as possible. */
        get shadowBlur(): float64
        set shadowBlur(value: float64)
        
        /** The light will only cast shadows using objects in the selected layers. */
        get shadowCasterMask(): int64
        set shadowCasterMask(value: int64)
        
        /** If `true`, the light will smoothly fade away when far from the active [Camera3D] starting at [member distance_fade_begin]. This acts as a form of level of detail (LOD). The light will fade out over [member distance_fade_begin] + [member distance_fade_length], after which it will be culled and not sent to the shader at all. Use this to reduce the number of active lights in a scene and thus improve performance.  
         *      
         *  **Note:** Only effective for [OmniLight3D] and [SpotLight3D].  
         */
        get distanceFadeEnabled(): boolean
        set distanceFadeEnabled(value: boolean)
        
        /** The distance from the camera at which the light begins to fade away (in 3D units).  
         *      
         *  **Note:** Only effective for [OmniLight3D] and [SpotLight3D].  
         */
        get distanceFadeBegin(): float64
        set distanceFadeBegin(value: float64)
        
        /** The distance from the camera at which the light's shadow cuts off (in 3D units). Set this to a value lower than [member distance_fade_begin] + [member distance_fade_length] to further improve performance, as shadow rendering is often more expensive than light rendering itself.  
         *      
         *  **Note:** Only effective for [OmniLight3D] and [SpotLight3D], and only when [member shadow_enabled] is `true`.  
         */
        get distanceFadeShadow(): float64
        set distanceFadeShadow(value: float64)
        
        /** Distance over which the light and its shadow fades. The light's energy and shadow's opacity is progressively reduced over this distance and is completely invisible at the end.  
         *      
         *  **Note:** Only effective for [OmniLight3D] and [SpotLight3D].  
         */
        get distanceFadeLength(): float64
        set distanceFadeLength(value: float64)
        
        /** If `true`, the light only appears in the editor and will not be visible at runtime. If `true`, the light will never be baked in [LightmapGI] regardless of its [member light_bake_mode]. */
        get editorOnly(): boolean
        set editorOnly(value: boolean)
    }
    /** Occludes light cast by a Light2D, casting shadows.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_lightoccluder2d.html  
     */
    class LightOccluder2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** The [OccluderPolygon2D] used to compute the shadow. */
        get occluder(): null | OccluderPolygon2D
        set occluder(value: null | OccluderPolygon2D)
        
        /** If enabled, the occluder will be part of a real-time generated signed distance field that can be used in custom shaders. */
        get sdfCollision(): boolean
        set sdfCollision(value: boolean)
        
        /** The LightOccluder2D's occluder light mask. The LightOccluder2D will cast shadows only from Light2D(s) that have the same light mask(s). */
        get occluderLightMask(): int64
        set occluderLightMask(value: int64)
    }
    namespace LightmapGI {
        enum BakeQuality {
            BakeQualityLow = 0,
            BakeQualityMedium = 1,
            BakeQualityHigh = 2,
            BakeQualityUltra = 3,
        }
        enum GenerateProbes {
            GenerateProbesDisabled = 0,
            GenerateProbesSubdiv4 = 1,
            GenerateProbesSubdiv8 = 2,
            GenerateProbesSubdiv16 = 3,
            GenerateProbesSubdiv32 = 4,
        }
        enum BakeError {
            BakeErrorOk = 0,
            BakeErrorNoSceneRoot = 1,
            BakeErrorForeignData = 2,
            BakeErrorNoLightmapper = 3,
            BakeErrorNoSavePath = 4,
            BakeErrorNoMeshes = 5,
            BakeErrorMeshesInvalid = 6,
            BakeErrorCantCreateImage = 7,
            BakeErrorUserAborted = 8,
            BakeErrorTextureSizeTooSmall = 9,
            BakeErrorLightmapTooSmall = 10,
            BakeErrorAtlasTooSmall = 11,
        }
        enum EnvironmentMode {
            EnvironmentModeDisabled = 0,
            EnvironmentModeScene = 1,
            EnvironmentModeCustomSky = 2,
            EnvironmentModeCustomColor = 3,
        }
    }
    /** Computes and stores baked lightmaps for fast global illumination.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_lightmapgi.html  
     */
    class LightmapGI<Map extends NodePathMap = any> extends VisualInstance3D<Map> {
        /** Low bake quality (fastest bake times). The quality of this preset can be adjusted by changing [member ProjectSettings.rendering/lightmapping/bake_quality/low_quality_ray_count] and [member ProjectSettings.rendering/lightmapping/bake_quality/low_quality_probe_ray_count]. */
        static readonly BAKE_QUALITY_LOW = 0
        
        /** Medium bake quality (fast bake times). The quality of this preset can be adjusted by changing [member ProjectSettings.rendering/lightmapping/bake_quality/medium_quality_ray_count] and [member ProjectSettings.rendering/lightmapping/bake_quality/medium_quality_probe_ray_count]. */
        static readonly BAKE_QUALITY_MEDIUM = 1
        
        /** High bake quality (slow bake times). The quality of this preset can be adjusted by changing [member ProjectSettings.rendering/lightmapping/bake_quality/high_quality_ray_count] and [member ProjectSettings.rendering/lightmapping/bake_quality/high_quality_probe_ray_count]. */
        static readonly BAKE_QUALITY_HIGH = 2
        
        /** Highest bake quality (slowest bake times). The quality of this preset can be adjusted by changing [member ProjectSettings.rendering/lightmapping/bake_quality/ultra_quality_ray_count] and [member ProjectSettings.rendering/lightmapping/bake_quality/ultra_quality_probe_ray_count]. */
        static readonly BAKE_QUALITY_ULTRA = 3
        
        /** Don't generate lightmap probes for lighting dynamic objects. */
        static readonly GENERATE_PROBES_DISABLED = 0
        
        /** Lowest level of subdivision (fastest bake times, smallest file sizes). */
        static readonly GENERATE_PROBES_SUBDIV_4 = 1
        
        /** Low level of subdivision (fast bake times, small file sizes). */
        static readonly GENERATE_PROBES_SUBDIV_8 = 2
        
        /** High level of subdivision (slow bake times, large file sizes). */
        static readonly GENERATE_PROBES_SUBDIV_16 = 3
        
        /** Highest level of subdivision (slowest bake times, largest file sizes). */
        static readonly GENERATE_PROBES_SUBDIV_32 = 4
        
        /** Lightmap baking was successful. */
        static readonly BAKE_ERROR_OK = 0
        
        /** Lightmap baking failed because the root node for the edited scene could not be accessed. */
        static readonly BAKE_ERROR_NO_SCENE_ROOT = 1
        
        /** Lightmap baking failed as the lightmap data resource is embedded in a foreign resource. */
        static readonly BAKE_ERROR_FOREIGN_DATA = 2
        
        /** Lightmap baking failed as there is no lightmapper available in this Godot build. */
        static readonly BAKE_ERROR_NO_LIGHTMAPPER = 3
        
        /** Lightmap baking failed as the [LightmapGIData] save path isn't configured in the resource. */
        static readonly BAKE_ERROR_NO_SAVE_PATH = 4
        
        /** Lightmap baking failed as there are no meshes whose [member GeometryInstance3D.gi_mode] is [constant GeometryInstance3D.GI_MODE_STATIC] and with valid UV2 mapping in the current scene. You may need to select 3D scenes in the Import dock and change their global illumination mode accordingly. */
        static readonly BAKE_ERROR_NO_MESHES = 5
        
        /** Lightmap baking failed as the lightmapper failed to analyze some of the meshes marked as static for baking. */
        static readonly BAKE_ERROR_MESHES_INVALID = 6
        
        /** Lightmap baking failed as the resulting image couldn't be saved or imported by Godot after it was saved. */
        static readonly BAKE_ERROR_CANT_CREATE_IMAGE = 7
        
        /** The user aborted the lightmap baking operation (typically by clicking the **Cancel** button in the progress dialog). */
        static readonly BAKE_ERROR_USER_ABORTED = 8
        
        /** Lightmap baking failed as the maximum texture size is too small to fit some of the meshes marked for baking. */
        static readonly BAKE_ERROR_TEXTURE_SIZE_TOO_SMALL = 9
        
        /** Lightmap baking failed as the lightmap is too small. */
        static readonly BAKE_ERROR_LIGHTMAP_TOO_SMALL = 10
        
        /** Lightmap baking failed as the lightmap was unable to fit into an atlas. */
        static readonly BAKE_ERROR_ATLAS_TOO_SMALL = 11
        
        /** Ignore environment lighting when baking lightmaps. */
        static readonly ENVIRONMENT_MODE_DISABLED = 0
        
        /** Use the scene's environment lighting when baking lightmaps.  
         *      
         *  **Note:** If baking lightmaps in a scene with no [WorldEnvironment] node, this will act like [constant ENVIRONMENT_MODE_DISABLED]. The editor's preview sky and sun is  *not*  taken into account by [LightmapGI] when baking lightmaps.  
         */
        static readonly ENVIRONMENT_MODE_SCENE = 1
        
        /** Use [member environment_custom_sky] as a source of environment lighting when baking lightmaps. */
        static readonly ENVIRONMENT_MODE_CUSTOM_SKY = 2
        
        /** Use [member environment_custom_color] multiplied by [member environment_custom_energy] as a constant source of environment lighting when baking lightmaps. */
        static readonly ENVIRONMENT_MODE_CUSTOM_COLOR = 3
        constructor(identifier?: any)
        
        /** The quality preset to use when baking lightmaps. This affects bake times, but output file sizes remain mostly identical across quality levels.  
         *  To further speed up bake times, decrease [member bounces], disable [member use_denoiser] and/or decrease [member texel_scale].  
         *  To further increase quality, enable [member supersampling] and/or increase [member texel_scale].  
         */
        get quality(): int64
        set quality(value: int64)
        
        /** If `true`, lightmaps are baked with the texel scale multiplied with [member supersampling_factor] and downsampled before saving the lightmap (so the effective texel density is identical to having supersampling disabled).  
         *  Supersampling provides increased lightmap quality with less noise, smoother shadows and better shadowing of small-scale features in objects. However, it may result in significantly increased bake times and memory usage while baking lightmaps. Padding is automatically adjusted to avoid increasing light leaking.  
         */
        get supersampling(): boolean
        set supersampling(value: boolean)
        
        /** The factor by which the texel density is multiplied for supersampling. For best results, use an integer value. While fractional values are allowed, they can result in increased light leaking and a blurry lightmap.  
         *  Higher values may result in better quality, but also increase bake times and memory usage while baking.  
         *  See [member supersampling] for more information.  
         */
        get supersamplingFactor(): float64
        set supersamplingFactor(value: float64)
        
        /** Number of light bounces that are taken into account during baking. Higher values result in brighter, more realistic lighting, at the cost of longer bake times. If set to `0`, only environment lighting, direct light and emissive lighting is baked. */
        get bounces(): int64
        set bounces(value: int64)
        
        /** The energy multiplier for each bounce. Higher values will make indirect lighting brighter. A value of `1.0` represents physically accurate behavior, but higher values can be used to make indirect lighting propagate more visibly when using a low number of bounces. This can be used to speed up bake times by lowering the number of [member bounces] then increasing [member bounce_indirect_energy].  
         *      
         *  **Note:** [member bounce_indirect_energy] only has an effect if [member bounces] is set to a value greater than or equal to `1`.  
         */
        get bounceIndirectEnergy(): float64
        set bounceIndirectEnergy(value: float64)
        
        /** If `true`, bakes lightmaps to contain directional information as spherical harmonics. This results in more realistic lighting appearance, especially with normal mapped materials and for lights that have their direct light baked ([member Light3D.light_bake_mode] set to [constant Light3D.BAKE_STATIC] and with [member Light3D.editor_only] set to `false`). The directional information is also used to provide rough reflections for static and dynamic objects. This has a small run-time performance cost as the shader has to perform more work to interpret the direction information from the lightmap. Directional lightmaps also take longer to bake and result in larger file sizes.  
         *      
         *  **Note:** The property's name has no relationship with [DirectionalLight3D]. [member directional] works with all light types.  
         */
        get directional(): boolean
        set directional(value: boolean)
        
        /** The shadowmasking policy to use for directional shadows on static objects that are baked with this [LightmapGI] instance.  
         *  Shadowmasking allows [DirectionalLight3D] nodes to cast shadows even outside the range defined by their [member DirectionalLight3D.directional_shadow_max_distance] property. This is done by baking a texture that contains a shadowmap for the directional light, then using this texture according to the current shadowmask mode.  
         *      
         *  **Note:** The shadowmask texture is only created if [member shadowmask_mode] is not [constant LightmapGIData.SHADOWMASK_MODE_NONE]. To see a difference, you need to bake lightmaps again after switching from [constant LightmapGIData.SHADOWMASK_MODE_NONE] to any other mode.  
         */
        get shadowmaskMode(): int64
        set shadowmaskMode(value: int64)
        
        /** If `true`, a texture with the lighting information will be generated to speed up the generation of indirect lighting at the cost of some accuracy. The geometry might exhibit extra light leak artifacts when using low resolution lightmaps or UVs that stretch the lightmap significantly across surfaces. Leave [member use_texture_for_bounces] at its default value of `true` if unsure.  
         *      
         *  **Note:** [member use_texture_for_bounces] only has an effect if [member bounces] is set to a value greater than or equal to `1`.  
         */
        get useTextureForBounces(): boolean
        set useTextureForBounces(value: boolean)
        
        /** If `true`, ignore environment lighting when baking lightmaps. */
        get interior(): boolean
        set interior(value: boolean)
        
        /** If `true`, uses a GPU-based denoising algorithm on the generated lightmap. This eliminates most noise within the generated lightmap at the cost of longer bake times. File sizes are generally not impacted significantly by the use of a denoiser, although lossless compression may do a better job at compressing a denoised image. */
        get useDenoiser(): boolean
        set useDenoiser(value: boolean)
        
        /** The strength of denoising step applied to the generated lightmaps. Only effective if [member use_denoiser] is `true` and [member ProjectSettings.rendering/lightmapping/denoising/denoiser] is set to JNLM. */
        get denoiserStrength(): float64
        set denoiserStrength(value: float64)
        
        /** The distance in pixels from which the denoiser samples. Lower values preserve more details, but may give blotchy results if the lightmap quality is not high enough. Only effective if [member use_denoiser] is `true` and [member ProjectSettings.rendering/lightmapping/denoising/denoiser] is set to JNLM. */
        get denoiserRange(): int64
        set denoiserRange(value: int64)
        
        /** The bias to use when computing shadows. Increasing [member bias] can fix shadow acne on the resulting baked lightmap, but can introduce peter-panning (shadows not connecting to their casters). Real-time [Light3D] shadows are not affected by this [member bias] property. */
        get bias(): float64
        set bias(value: float64)
        
        /** Scales the lightmap texel density of all meshes for the current bake. This is a multiplier that builds upon the existing lightmap texel size defined in each imported 3D scene, along with the per-mesh density multiplier (which is designed to be used when the same mesh is used at different scales). Lower values will result in faster bake times.  
         *  For example, doubling [member texel_scale] doubles the lightmap texture resolution for all objects  *on each axis* , so it will  *quadruple*  the texel count.  
         */
        get texelScale(): float64
        set texelScale(value: float64)
        
        /** The maximum texture size for the generated texture atlas. Higher values will result in fewer slices being generated, but may not work on all hardware as a result of hardware limitations on texture sizes. Leave [member max_texture_size] at its default value of `16384` if unsure. */
        get maxTextureSize(): int64
        set maxTextureSize(value: int64)
        
        /** The environment mode to use when baking lightmaps. */
        get environmentMode(): int64
        set environmentMode(value: int64)
        
        /** The sky to use as a source of environment lighting. Only effective if [member environment_mode] is [constant ENVIRONMENT_MODE_CUSTOM_SKY]. */
        get environmentCustomSky(): null | Sky
        set environmentCustomSky(value: null | Sky)
        
        /** The color to use for environment lighting. Only effective if [member environment_mode] is [constant ENVIRONMENT_MODE_CUSTOM_COLOR]. */
        get environmentCustomColor(): Color
        set environmentCustomColor(value: Color)
        
        /** The color multiplier to use for environment lighting. Only effective if [member environment_mode] is [constant ENVIRONMENT_MODE_CUSTOM_COLOR]. */
        get environmentCustomEnergy(): float64
        set environmentCustomEnergy(value: float64)
        
        /** The [CameraAttributes] resource that specifies exposure levels to bake at. Auto-exposure and non exposure properties will be ignored. Exposure settings should be used to reduce the dynamic range present when baking. If exposure is too high, the [LightmapGI] will have banding artifacts or may have over-exposure artifacts. */
        get cameraAttributes(): null | CameraAttributesPractical | CameraAttributesPhysical
        set cameraAttributes(value: null | CameraAttributesPractical | CameraAttributesPhysical)
        
        /** The level of subdivision to use when automatically generating [LightmapProbe]s for dynamic object lighting. Higher values result in more accurate indirect lighting on dynamic objects, at the cost of longer bake times and larger file sizes.  
         *      
         *  **Note:** Automatically generated [LightmapProbe]s are not visible as nodes in the Scene tree dock, and cannot be modified this way after they are generated.  
         *      
         *  **Note:** Regardless of [member generate_probes_subdiv], direct lighting on dynamic objects is always applied using [Light3D] nodes in real-time.  
         */
        get generateProbesSubdiv(): int64
        set generateProbesSubdiv(value: int64)
        
        /** The [LightmapGIData] associated to this [LightmapGI] node. This resource is automatically created after baking, and is not meant to be created manually. */
        get lightData(): null | LightmapGIData
        set lightData(value: null | LightmapGIData)
    }
    namespace LightmapGIData {
        enum ShadowmaskMode {
            ShadowmaskModeNone = 0,
            ShadowmaskModeReplace = 1,
            ShadowmaskModeOverlay = 2,
        }
    }
    /** Contains baked lightmap and dynamic object probe data for [LightmapGI].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_lightmapgidata.html  
     */
    class LightmapGIData extends Resource {
        /** Shadowmasking is disabled. No shadowmask texture will be created when baking lightmaps. Existing shadowmask textures will be removed during baking. */
        static readonly SHADOWMASK_MODE_NONE = 0
        
        /** Shadowmasking is enabled. Directional shadows that are outside the [member DirectionalLight3D.directional_shadow_max_distance] will be rendered using the shadowmask texture. Shadows that are inside the range will be rendered using real-time shadows exclusively. This mode allows for more precise real-time shadows up close, without the potential "smearing" effect that can occur when using lightmaps with a high texel size. The downside is that when the camera moves fast, the transition between the real-time light and shadowmask can be obvious. Also, objects that only have shadows baked in the shadowmask (and no real-time shadows) won't display any shadows up close. */
        static readonly SHADOWMASK_MODE_REPLACE = 1
        
        /** Shadowmasking is enabled. Directional shadows will be rendered with real-time shadows overlaid on top of the shadowmask texture. This mode makes for smoother shadow transitions when the camera moves fast, at the cost of a potential smearing effect for directional shadows that are up close (due to the real-time shadow being mixed with a low-resolution shadowmask). Objects that only have shadows baked in the shadowmask (and no real-time shadows) will keep their shadows up close. */
        static readonly SHADOWMASK_MODE_OVERLAY = 2
        constructor(identifier?: any)
        
        /** Adds an object that is considered baked within this [LightmapGIData]. */
        addUser(path: NodePath | string, uVScale: Rect2, sliceIndex: int64, subInstance: int64): void
        
        /** Returns the number of objects that are considered baked within this [LightmapGIData]. */
        getUserCount(): int64
        
        /** Returns the [NodePath] of the baked object at index [param user_idx]. */
        getUserPath(userIdx: int64): NodePath
        
        /** Clear all objects that are considered baked within this [LightmapGIData]. */
        clearUsers(): void
        
        /** The lightmap atlas textures generated by the lightmapper. */
        get lightmapTextures(): GArray
        set lightmapTextures(value: GArray)
        
        /** The shadowmask atlas textures generated by the lightmapper. */
        get shadowmaskTextures(): GArray
        set shadowmaskTextures(value: GArray)
        get usesSphericalHarmonics(): boolean
        set usesSphericalHarmonics(value: boolean)
        get userData(): GArray
        set userData(value: GArray)
        get probeData(): GDictionary
        set probeData(value: GDictionary)
        get _usesPackedDirectional(): boolean
        set _usesPackedDirectional(value: boolean)
        
        /** The lightmap atlas texture generated by the lightmapper. */
        get lightTexture(): null | TextureLayered
        set lightTexture(value: null | TextureLayered)
        get lightTextures(): GArray
        set lightTextures(value: GArray)
    }
    /** Represents a single manually placed probe for dynamic object lighting with [LightmapGI].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_lightmapprobe.html  
     */
    class LightmapProbe<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
    }
    /** Abstract class extended by lightmappers, for use in [LightmapGI].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_lightmapper.html  
     */
    class Lightmapper extends RefCounted {
        constructor(identifier?: any)
    }
    /** The built-in GPU-based lightmapper for use with [LightmapGI].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_lightmapperrd.html  
     */
    class LightmapperRD extends Lightmapper {
        constructor(identifier?: any)
    }
    namespace Line2D {
        enum LineJointMode {
            LineJointSharp = 0,
            LineJointBevel = 1,
            LineJointRound = 2,
        }
        enum LineCapMode {
            LineCapNone = 0,
            LineCapBox = 1,
            LineCapRound = 2,
        }
        enum LineTextureMode {
            LineTextureNone = 0,
            LineTextureTile = 1,
            LineTextureStretch = 2,
        }
    }
    /** A 2D polyline that can optionally be textured.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_line2d.html  
     */
    class Line2D<Map extends NodePathMap = any> extends Node2D<Map> {
        /** Makes the polyline's joints pointy, connecting the sides of the two segments by extending them until they intersect. If the rotation of a joint is too big (based on [member sharp_limit]), the joint falls back to [constant LINE_JOINT_BEVEL] to prevent very long miters. */
        static readonly LINE_JOINT_SHARP = 0
        
        /** Makes the polyline's joints bevelled/chamfered, connecting the sides of the two segments with a simple line. */
        static readonly LINE_JOINT_BEVEL = 1
        
        /** Makes the polyline's joints rounded, connecting the sides of the two segments with an arc. The detail of this arc depends on [member round_precision]. */
        static readonly LINE_JOINT_ROUND = 2
        
        /** Draws no line cap. */
        static readonly LINE_CAP_NONE = 0
        
        /** Draws the line cap as a box, slightly extending the first/last segment. */
        static readonly LINE_CAP_BOX = 1
        
        /** Draws the line cap as a semicircle attached to the first/last segment. */
        static readonly LINE_CAP_ROUND = 2
        
        /** Takes the left pixels of the texture and renders them over the whole polyline. */
        static readonly LINE_TEXTURE_NONE = 0
        
        /** Tiles the texture over the polyline. [member CanvasItem.texture_repeat] of the [Line2D] node must be [constant CanvasItem.TEXTURE_REPEAT_ENABLED] or [constant CanvasItem.TEXTURE_REPEAT_MIRROR] for it to work properly. */
        static readonly LINE_TEXTURE_TILE = 1
        
        /** Stretches the texture across the polyline. [member CanvasItem.texture_repeat] of the [Line2D] node must be [constant CanvasItem.TEXTURE_REPEAT_DISABLED] for best results. */
        static readonly LINE_TEXTURE_STRETCH = 2
        constructor(identifier?: any)
        
        /** Overwrites the position of the point at the given [param index] with the supplied [param position]. */
        setPointPosition(index: int64, position: Vector2): void
        
        /** Returns the position of the point at index [param index]. */
        getPointPosition(index: int64): Vector2
        
        /** Returns the number of points in the polyline. */
        getPointCount(): int64
        
        /** Adds a point with the specified [param position] relative to the polyline's own position. If no [param index] is provided, the new point will be added to the end of the points array.  
         *  If [param index] is given, the new point is inserted before the existing point identified by index [param index]. The indices of the points after the new point get increased by 1. The provided [param index] must not exceed the number of existing points in the polyline. See [method get_point_count].  
         */
        addPoint(position: Vector2, index?: int64 /* = -1 */): void
        
        /** Removes the point at index [param index] from the polyline. */
        removePoint(index: int64): void
        
        /** Removes all points from the polyline, making it empty. */
        clearPoints(): void
        
        /** The points of the polyline, interpreted in local 2D coordinates. Segments are drawn between the adjacent points in this array. */
        get points(): PackedVector2Array
        set points(value: PackedVector2Array | Vector2[])
        
        /** If `true` and the polyline has more than 2 points, the last point and the first one will be connected by a segment.  
         *      
         *  **Note:** The shape of the closing segment is not guaranteed to be seamless if a [member width_curve] is provided.  
         *      
         *  **Note:** The joint between the closing segment and the first segment is drawn first and it samples the [member gradient] and the [member width_curve] at the beginning. This is an implementation detail that might change in a future version.  
         */
        get closed(): boolean
        set closed(value: boolean)
        
        /** The polyline's width. */
        get width(): float64
        set width(value: float64)
        
        /** The polyline's width curve. The width of the polyline over its length will be equivalent to the value of the width curve over its domain. The width curve should be a unit [Curve]. */
        get widthCurve(): null | Curve
        set widthCurve(value: null | Curve)
        
        /** The color of the polyline. Will not be used if a gradient is set. */
        get defaultColor(): Color
        set defaultColor(value: Color)
        
        /** The gradient is drawn through the whole line from start to finish. The [member default_color] will not be used if this property is set. */
        get gradient(): null | Gradient
        set gradient(value: null | Gradient)
        
        /** The texture used for the polyline. Uses [member texture_mode] for drawing style. */
        get texture(): null | Texture2D
        set texture(value: null | Texture2D)
        
        /** The style to render the [member texture] of the polyline. Use [enum LineTextureMode] constants. */
        get textureMode(): int64
        set textureMode(value: int64)
        
        /** The style of the connections between segments of the polyline. Use [enum LineJointMode] constants. */
        get jointMode(): int64
        set jointMode(value: int64)
        
        /** The style of the beginning of the polyline, if [member closed] is `false`. Use [enum LineCapMode] constants. */
        get beginCapMode(): int64
        set beginCapMode(value: int64)
        
        /** The style of the end of the polyline, if [member closed] is `false`. Use [enum LineCapMode] constants. */
        get endCapMode(): int64
        set endCapMode(value: int64)
        
        /** Determines the miter limit of the polyline. Normally, when [member joint_mode] is set to [constant LINE_JOINT_SHARP], sharp angles fall back to using the logic of [constant LINE_JOINT_BEVEL] joints to prevent very long miters. Higher values of this property mean that the fallback to a bevel joint will happen at sharper angles. */
        get sharpLimit(): float64
        set sharpLimit(value: float64)
        
        /** The smoothness used for rounded joints and caps. Higher values result in smoother corners, but are more demanding to render and update. */
        get roundPrecision(): int64
        set roundPrecision(value: int64)
        
        /** If `true`, the polyline's border will be anti-aliased.  
         *      
         *  **Note:** [Line2D] is not accelerated by batching when being anti-aliased.  
         */
        get antialiased(): boolean
        set antialiased(value: boolean)
    }
    namespace LineEdit {
        enum MenuItems {
            MenuCut = 0,
            MenuCopy = 1,
            MenuPaste = 2,
            MenuClear = 3,
            MenuSelectAll = 4,
            MenuUndo = 5,
            MenuRedo = 6,
            MenuSubmenuTextDir = 7,
            MenuDirInherited = 8,
            MenuDirAuto = 9,
            MenuDirLtr = 10,
            MenuDirRtl = 11,
            MenuDisplayUcc = 12,
            MenuSubmenuInsertUcc = 13,
            MenuInsertLrm = 14,
            MenuInsertRlm = 15,
            MenuInsertLre = 16,
            MenuInsertRle = 17,
            MenuInsertLro = 18,
            MenuInsertRlo = 19,
            MenuInsertPdf = 20,
            MenuInsertAlm = 21,
            MenuInsertLri = 22,
            MenuInsertRli = 23,
            MenuInsertFsi = 24,
            MenuInsertPdi = 25,
            MenuInsertZwj = 26,
            MenuInsertZwnj = 27,
            MenuInsertWj = 28,
            MenuInsertShy = 29,
            MenuEmojiAndSymbol = 30,
            MenuMax = 31,
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
    }
    /** An input field for single-line text.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_lineedit.html  
     */
    class LineEdit<Map extends NodePathMap = any> extends Control<Map> {
        /** Cuts (copies and clears) the selected text. */
        static readonly MENU_CUT = 0
        
        /** Copies the selected text. */
        static readonly MENU_COPY = 1
        
        /** Pastes the clipboard text over the selected text (or at the caret's position).  
         *  Non-printable escape characters are automatically stripped from the OS clipboard via [method String.strip_escapes].  
         */
        static readonly MENU_PASTE = 2
        
        /** Erases the whole [LineEdit] text. */
        static readonly MENU_CLEAR = 3
        
        /** Selects the whole [LineEdit] text. */
        static readonly MENU_SELECT_ALL = 4
        
        /** Undoes the previous action. */
        static readonly MENU_UNDO = 5
        
        /** Reverse the last undo action. */
        static readonly MENU_REDO = 6
        
        /** ID of "Text Writing Direction" submenu. */
        static readonly MENU_SUBMENU_TEXT_DIR = 7
        
        /** Sets text direction to inherited. */
        static readonly MENU_DIR_INHERITED = 8
        
        /** Sets text direction to automatic. */
        static readonly MENU_DIR_AUTO = 9
        
        /** Sets text direction to left-to-right. */
        static readonly MENU_DIR_LTR = 10
        
        /** Sets text direction to right-to-left. */
        static readonly MENU_DIR_RTL = 11
        
        /** Toggles control character display. */
        static readonly MENU_DISPLAY_UCC = 12
        
        /** ID of "Insert Control Character" submenu. */
        static readonly MENU_SUBMENU_INSERT_UCC = 13
        
        /** Inserts left-to-right mark (LRM) character. */
        static readonly MENU_INSERT_LRM = 14
        
        /** Inserts right-to-left mark (RLM) character. */
        static readonly MENU_INSERT_RLM = 15
        
        /** Inserts start of left-to-right embedding (LRE) character. */
        static readonly MENU_INSERT_LRE = 16
        
        /** Inserts start of right-to-left embedding (RLE) character. */
        static readonly MENU_INSERT_RLE = 17
        
        /** Inserts start of left-to-right override (LRO) character. */
        static readonly MENU_INSERT_LRO = 18
        
        /** Inserts start of right-to-left override (RLO) character. */
        static readonly MENU_INSERT_RLO = 19
        
        /** Inserts pop direction formatting (PDF) character. */
        static readonly MENU_INSERT_PDF = 20
        
        /** Inserts Arabic letter mark (ALM) character. */
        static readonly MENU_INSERT_ALM = 21
        
        /** Inserts left-to-right isolate (LRI) character. */
        static readonly MENU_INSERT_LRI = 22
        
        /** Inserts right-to-left isolate (RLI) character. */
        static readonly MENU_INSERT_RLI = 23
        
        /** Inserts first strong isolate (FSI) character. */
        static readonly MENU_INSERT_FSI = 24
        
        /** Inserts pop direction isolate (PDI) character. */
        static readonly MENU_INSERT_PDI = 25
        
        /** Inserts zero width joiner (ZWJ) character. */
        static readonly MENU_INSERT_ZWJ = 26
        
        /** Inserts zero width non-joiner (ZWNJ) character. */
        static readonly MENU_INSERT_ZWNJ = 27
        
        /** Inserts word joiner (WJ) character. */
        static readonly MENU_INSERT_WJ = 28
        
        /** Inserts soft hyphen (SHY) character. */
        static readonly MENU_INSERT_SHY = 29
        
        /** Opens system emoji and symbol picker. */
        static readonly MENU_EMOJI_AND_SYMBOL = 30
        
        /** Represents the size of the [enum MenuItems] enum. */
        static readonly MENU_MAX = 31
        
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
        constructor(identifier?: any)
        
        /** Returns `true` if the user has text in the [url=https://en.wikipedia.org/wiki/Input_method]Input Method Editor[/url] (IME). */
        hasImeText(): boolean
        
        /** Closes the [url=https://en.wikipedia.org/wiki/Input_method]Input Method Editor[/url] (IME) if it is open. Any text in the IME will be lost. */
        cancelIme(): void
        
        /** Applies text from the [url=https://en.wikipedia.org/wiki/Input_method]Input Method Editor[/url] (IME) and closes the IME if it is open. */
        applyIme(): void
        
        /** Allows entering edit mode whether the [LineEdit] is focused or not.  
         *  See also [member keep_editing_on_text_submit].  
         */
        edit(): void
        
        /** Allows exiting edit mode while preserving focus. */
        unedit(): void
        
        /** Returns whether the [LineEdit] is being edited. */
        isEditing(): boolean
        
        /** Erases the [LineEdit]'s [member text]. */
        clear(): void
        
        /** Selects characters inside [LineEdit] between [param from] and [param to]. By default, [param from] is at the beginning and [param to] at the end.  
         *    
         */
        select(from?: int64 /* = 0 */, to?: int64 /* = -1 */): void
        
        /** Selects the whole [String]. */
        selectAll(): void
        
        /** Clears the current selection. */
        deselect(): void
        
        /** Returns `true` if an "undo" action is available. */
        hasUndo(): boolean
        
        /** Returns `true` if a "redo" action is available. */
        hasRedo(): boolean
        
        /** Returns `true` if the user has selected text. */
        hasSelection(): boolean
        
        /** Returns the text inside the selection. */
        getSelectedText(): string
        
        /** Returns the selection begin column. */
        getSelectionFromColumn(): int64
        
        /** Returns the selection end column. */
        getSelectionToColumn(): int64
        
        /** Returns the correct column at the end of a composite character like ❤️‍🩹 (mending heart; Unicode: `U+2764 U+FE0F U+200D U+1FA79`) which is comprised of more than one Unicode code point, if the caret is at the start of the composite character. Also returns the correct column with the caret at mid grapheme and for non-composite characters.  
         *      
         *  **Note:** To check at caret location use `get_next_composite_character_column(get_caret_column())`  
         */
        getNextCompositeCharacterColumn(column: int64): int64
        
        /** Returns the correct column at the start of a composite character like ❤️‍🩹 (mending heart; Unicode: `U+2764 U+FE0F U+200D U+1FA79`) which is comprised of more than one Unicode code point, if the caret is at the end of the composite character. Also returns the correct column with the caret at mid grapheme and for non-composite characters.  
         *      
         *  **Note:** To check at caret location use `get_previous_composite_character_column(get_caret_column())`  
         */
        getPreviousCompositeCharacterColumn(column: int64): int64
        
        /** Returns the scroll offset due to [member caret_column], as a number of characters. */
        getScrollOffset(): float64
        
        /** Inserts [param text] at the caret. If the resulting value is longer than [member max_length], nothing happens. */
        insertTextAtCaret(text: string): void
        
        /** Deletes one character at the caret's current position (equivalent to pressing [kbd]Delete[/kbd]). */
        deleteCharAtCaret(): void
        
        /** Deletes a section of the [member text] going from position [param from_column] to [param to_column]. Both parameters should be within the text's length. */
        deleteText(fromColumn: int64, toColumn: int64): void
        
        /** Executes a given action as defined in the [enum MenuItems] enum. */
        menuOption(option: int64): void
        
        /** Returns the [PopupMenu] of this [LineEdit]. By default, this menu is displayed when right-clicking on the [LineEdit].  
         *  You can add custom menu items or remove standard ones. Make sure your IDs don't conflict with the standard ones (see [enum MenuItems]). For example:  
         *    
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member Window.visible] property.  
         */
        getMenu(): null | PopupMenu
        
        /** Returns whether the menu is visible. Use this instead of `get_menu().visible` to improve performance (so the creation of the menu is avoided). */
        isMenuVisible(): boolean
        
        /** String value of the [LineEdit].  
         *      
         *  **Note:** Changing text using this property won't emit the [signal text_changed] signal.  
         */
        get text(): string
        set text(value: string)
        
        /** Text shown when the [LineEdit] is empty. It is **not** the [LineEdit]'s default value (see [member text]). */
        get placeholderText(): string
        set placeholderText(value: string)
        
        /** Text alignment as defined in the [enum HorizontalAlignment] enum. */
        get alignment(): int64
        set alignment(value: int64)
        
        /** Maximum number of characters that can be entered inside the [LineEdit]. If `0`, there is no limit.  
         *  When a limit is defined, characters that would exceed [member max_length] are truncated. This happens both for existing [member text] contents when setting the max length, or for new text inserted in the [LineEdit], including pasting.  
         *  If any input text is truncated, the [signal text_change_rejected] signal is emitted with the truncated substring as parameter:  
         *    
         */
        get maxLength(): int64
        set maxLength(value: int64)
        
        /** If `false`, existing text cannot be modified and new text cannot be added. */
        get editable(): boolean
        set editable(value: boolean)
        
        /** If `true`, the [LineEdit] will not exit edit mode when text is submitted by pressing `ui_text_submit` action (by default: [kbd]Enter[/kbd] or [kbd]Kp Enter[/kbd]). */
        get keepEditingOnTextSubmit(): boolean
        set keepEditingOnTextSubmit(value: boolean)
        
        /** If `true`, the [LineEdit] width will increase to stay longer than the [member text]. It will **not** compress if the [member text] is shortened. */
        get expandToTextLength(): boolean
        set expandToTextLength(value: boolean)
        
        /** If `true`, the context menu will appear when right-clicked. */
        get contextMenuEnabled(): boolean
        set contextMenuEnabled(value: boolean)
        
        /** If `true`, "Emoji and Symbols" menu is enabled. */
        get emojiMenuEnabled(): boolean
        set emojiMenuEnabled(value: boolean)
        
        /** If `true` and [member caret_mid_grapheme] is `false`, backspace deletes an entire composite character such as ❤️‍🩹, instead of deleting part of the composite character. */
        get backspaceDeletesCompositeCharacterEnabled(): boolean
        set backspaceDeletesCompositeCharacterEnabled(value: boolean)
        
        /** If `true`, the native virtual keyboard is enabled on platforms that support it. */
        get virtualKeyboardEnabled(): boolean
        set virtualKeyboardEnabled(value: boolean)
        
        /** If `true`, the native virtual keyboard is shown on focus events on platforms that support it. */
        get virtualKeyboardShowOnFocus(): boolean
        set virtualKeyboardShowOnFocus(value: boolean)
        
        /** Specifies the type of virtual keyboard to show. */
        get virtualKeyboardType(): int64
        set virtualKeyboardType(value: int64)
        
        /** If `true`, the [LineEdit] will show a clear button if [member text] is not empty, which can be used to clear the text quickly. */
        get clearButtonEnabled(): boolean
        set clearButtonEnabled(value: boolean)
        
        /** If `true`, shortcut keys for context menu items are enabled, even if the context menu is disabled. */
        get shortcutKeysEnabled(): boolean
        set shortcutKeysEnabled(value: boolean)
        
        /** If `false`, using middle mouse button to paste clipboard will be disabled.  
         *      
         *  **Note:** This method is only implemented on Linux.  
         */
        get middleMousePasteEnabled(): boolean
        set middleMousePasteEnabled(value: boolean)
        
        /** If `false`, it's impossible to select the text using mouse nor keyboard. */
        get selectingEnabled(): boolean
        set selectingEnabled(value: boolean)
        
        /** If `true`, the selected text will be deselected when focus is lost. */
        get deselectOnFocusLossEnabled(): boolean
        set deselectOnFocusLossEnabled(value: boolean)
        
        /** If `true`, allow drag and drop of selected text. */
        get dragAndDropSelectionEnabled(): boolean
        set dragAndDropSelectionEnabled(value: boolean)
        
        /** Sets the icon that will appear in the right end of the [LineEdit] if there's no [member text], or always, if [member clear_button_enabled] is set to `false`. */
        get rightIcon(): null | Texture2D
        set rightIcon(value: null | Texture2D)
        
        /** If `true`, the [LineEdit] doesn't display decoration. */
        get flat(): boolean
        set flat(value: boolean)
        
        /** If `true`, control characters are displayed. */
        get drawControlChars(): boolean
        set drawControlChars(value: boolean)
        
        /** If `true`, the [LineEdit] will select the whole text when it gains focus. */
        get selectAllOnFocus(): boolean
        set selectAllOnFocus(value: boolean)
        
        /** If `true`, makes the caret blink. */
        get caretBlink(): boolean
        set caretBlink(value: boolean)
        
        /** The interval at which the caret blinks (in seconds). */
        get caretBlinkInterval(): float64
        set caretBlinkInterval(value: float64)
        
        /** The caret's column position inside the [LineEdit]. When set, the text may scroll to accommodate it. */
        get caretColumn(): int64
        set caretColumn(value: int64)
        
        /** If `true`, the [LineEdit] will always show the caret, even if not editing or focus is lost. */
        get caretForceDisplayed(): boolean
        set caretForceDisplayed(value: boolean)
        
        /** Allow moving caret, selecting and removing the individual composite character components.  
         *      
         *  **Note:** [kbd]Backspace[/kbd] is always removing individual composite character components.  
         */
        get caretMidGrapheme(): boolean
        set caretMidGrapheme(value: boolean)
        
        /** If `true`, every character is replaced with the secret character (see [member secret_character]). */
        get secret(): boolean
        set secret(value: boolean)
        
        /** The character to use to mask secret input. Only a single character can be used as the secret character. If it is longer than one character, only the first one will be used. If it is empty, a space will be used instead. */
        get secretCharacter(): string
        set secretCharacter(value: string)
        
        /** Base text writing direction. */
        get textDirection(): int64
        set textDirection(value: int64)
        
        /** Language code used for line-breaking and text shaping algorithms. If left empty, current locale is used instead. */
        get language(): string
        set language(value: string)
        
        /** Set BiDi algorithm override for the structured text. */
        get structuredTextBidiOverride(): int64
        set structuredTextBidiOverride(value: int64)
        
        /** Set additional options for BiDi override. */
        get structuredTextBidiOverrideOptions(): GArray
        set structuredTextBidiOverrideOptions(value: GArray)
        
        /** Emitted when the text changes. */
        readonly textChanged: Signal<(newText: string) => void>
        
        /** Emitted when appending text that overflows the [member max_length]. The appended text is truncated to fit [member max_length], and the part that couldn't fit is passed as the [param rejected_substring] argument. */
        readonly textChangeRejected: Signal<(rejectedSubstring: string) => void>
        
        /** Emitted when the user presses the `ui_text_submit` action (by default: [kbd]Enter[/kbd] or [kbd]Kp Enter[/kbd]) while the [LineEdit] has focus. */
        readonly textSubmitted: Signal<(newText: string) => void>
        
        /** Emitted when the [LineEdit] switches in or out of edit mode. */
        readonly editingToggled: Signal<(toggledOn: boolean) => void>
    }
    namespace LinkButton {
        enum UnderlineMode {
            UnderlineModeAlways = 0,
            UnderlineModeOnHover = 1,
            UnderlineModeNever = 2,
        }
    }
    /** A button that represents a link.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_linkbutton.html  
     */
    class LinkButton<Map extends NodePathMap = any> extends BaseButton<Map> {
        /** The LinkButton will always show an underline at the bottom of its text. */
        static readonly UNDERLINE_MODE_ALWAYS = 0
        
        /** The LinkButton will show an underline at the bottom of its text when the mouse cursor is over it. */
        static readonly UNDERLINE_MODE_ON_HOVER = 1
        
        /** The LinkButton will never show an underline at the bottom of its text. */
        static readonly UNDERLINE_MODE_NEVER = 2
        constructor(identifier?: any)
        
        /** The button's text that will be displayed inside the button's area. */
        get text(): string
        set text(value: string)
        
        /** The underline mode to use for the text. See [enum LinkButton.UnderlineMode] for the available modes. */
        get underline(): int64
        set underline(value: int64)
        
        /** The [url=https://en.wikipedia.org/wiki/Uniform_Resource_Identifier]URI[/url] for this [LinkButton]. If set to a valid URI, pressing the button opens the URI using the operating system's default program for the protocol (via [method OS.shell_open]). HTTP and HTTPS URLs open the default web browser.  
         *    
         */
        get uri(): string
        set uri(value: string)
        
        /** Base text writing direction. */
        get textDirection(): int64
        set textDirection(value: int64)
        
        /** Language code used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        get language(): string
        set language(value: string)
        
        /** Set BiDi algorithm override for the structured text. */
        get structuredTextBidiOverride(): int64
        set structuredTextBidiOverride(value: int64)
        
        /** Set additional options for BiDi override. */
        get structuredTextBidiOverrideOptions(): GArray
        set structuredTextBidiOverrideOptions(value: GArray)
    }
    namespace Logger {
        enum ErrorType {
            ErrorTypeError = 0,
            ErrorTypeWarning = 1,
            ErrorTypeScript = 2,
            ErrorTypeShader = 3,
        }
    }
    /** Custom logger to receive messages from the internal error/warning stream.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_logger.html  
     */
    class Logger extends RefCounted {
        /** The message received is an error. */
        static readonly ERROR_TYPE_ERROR = 0
        
        /** The message received is a warning. */
        static readonly ERROR_TYPE_WARNING = 1
        
        /** The message received is a script error. */
        static readonly ERROR_TYPE_SCRIPT = 2
        
        /** The message received is a shader error. */
        static readonly ERROR_TYPE_SHADER = 3
        constructor(identifier?: any)
        
        /** Called when an error is logged. The error provides the [param function], [param file], and [param line] that it originated from, as well as either the [param code] that generated the error or a [param rationale].  
         *  The type of error provided by [param error_type] is described in the [enum ErrorType] enumeration.  
         *  Additionally, [param script_backtraces] provides backtraces for each of the script languages. These will only contain stack frames in editor builds and debug builds by default. To enable them for release builds as well, you need to enable [member ProjectSettings.debug/settings/gdscript/always_track_call_stacks].  
         *  **Warning:** This function may be called from multiple different threads, so you may need to do your own locking.  
         *      
         *  **Note:** [param script_backtraces] will not contain any captured variables, due to its prohibitively high cost. To get those you will need to capture the backtraces yourself, from within the [Logger] virtual methods, using [method Engine.capture_script_backtraces].  
         */
        /* gdvirtual */ _logError(function_: string, file: string, line: int64, code: string, rationale: string, editorNotify: boolean, errorType: int64, scriptBacktraces: GArray): void
        
        /** Called when a message is logged. If [param error] is `true`, then this message was meant to be sent to `stderr`.  
         *  **Warning:** This function may be called from multiple different threads, so you may need to do your own locking.  
         */
        /* gdvirtual */ _logMessage(message: string, error: boolean): void
    }
    namespace LookAtModifier3D {
        enum OriginFrom {
            OriginFromSelf = 0,
            OriginFromSpecificBone = 1,
            OriginFromExternalNode = 2,
        }
    }
    /** The [LookAtModifier3D] rotates a bone to look at a target.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_lookatmodifier3d.html  
     */
    class LookAtModifier3D<Map extends NodePathMap = any> extends SkeletonModifier3D<Map> {
        /** The bone rest position of the bone specified in [member bone] is used as origin. */
        static readonly ORIGIN_FROM_SELF = 0
        
        /** The bone global pose position of the bone specified in [member origin_bone] is used as origin.  
         *      
         *  **Note:** It is recommended that you select only the parent bone unless you are familiar with the bone processing process. The specified bone pose at the time the [LookAtModifier3D] is processed is used as a reference. In other words, if you specify a child bone and the [LookAtModifier3D] causes the child bone to move, the rendered result and direction will not match.  
         */
        static readonly ORIGIN_FROM_SPECIFIC_BONE = 1
        
        /** The global position of the [Node3D] specified in [member origin_external_node] is used as origin.  
         *      
         *  **Note:** Same as [constant ORIGIN_FROM_SPECIFIC_BONE], when specifying a [BoneAttachment3D] with a child bone assigned, the rendered result and direction will not match.  
         */
        static readonly ORIGIN_FROM_EXTERNAL_NODE = 2
        constructor(identifier?: any)
        
        /** Returns the remaining seconds of the time-based interpolation. */
        getInterpolationRemaining(): float64
        
        /** Returns `true` if time-based interpolation is running. If `true`, it is equivalent to [method get_interpolation_remaining] returning `0.0`.  
         *  This is useful to determine whether a [LookAtModifier3D] can be removed safely.  
         */
        isInterpolating(): boolean
        
        /** Returns whether the target is within the angle limitations. It is useful for unsetting the [member target_node] when the target is outside of the angle limitations.  
         *      
         *  **Note:** The value is updated after [method SkeletonModifier3D._process_modification]. To retrieve this value correctly, we recommend using the signal [signal SkeletonModifier3D.modification_processed].  
         */
        isTargetWithinLimitation(): boolean
        
        /** The [NodePath] to the node that is the target for the look at modification. This node is what the modification will rotate the bone to. */
        get targetNode(): NodePath
        set targetNode(value: NodePath | string)
        
        /** The bone name of the [Skeleton3D] that the modification will operate on. */
        get boneName(): string
        set boneName(value: string)
        
        /** Index of the [member bone_name] in the parent [Skeleton3D]. */
        get bone(): int64
        set bone(value: int64)
        
        /** The forward axis of the bone. This [SkeletonModifier3D] modifies the bone so that this axis points toward the [member target_node]. */
        get forwardAxis(): int64
        set forwardAxis(value: int64)
        
        /** The axis of the first rotation. This [SkeletonModifier3D] works by compositing the rotation by Euler angles to prevent to rotate the [member forward_axis]. */
        get primaryRotationAxis(): int64
        set primaryRotationAxis(value: int64)
        
        /** If `true`, provides rotation by two axes. */
        get useSecondaryRotation(): boolean
        set useSecondaryRotation(value: boolean)
        
        /** This value determines from what origin is retrieved for use in the calculation of the forward vector. */
        get originFrom(): int64
        set originFrom(value: int64)
        
        /** If [member origin_from] is [constant ORIGIN_FROM_SPECIFIC_BONE], the bone global pose position specified for this is used as origin. */
        get originBoneName(): string
        set originBoneName(value: string)
        
        /** Index of the [member origin_bone_name] in the parent [Skeleton3D]. */
        get originBone(): int64
        set originBone(value: int64)
        
        /** If [member origin_from] is [constant ORIGIN_FROM_EXTERNAL_NODE], the global position of the [Node3D] specified for this is used as origin. */
        get originExternalNode(): NodePath
        set originExternalNode(value: NodePath | string)
        
        /** The offset of the bone pose origin. Matching the origins by offset is useful for cases where multiple bones must always face the same direction, such as the eyes.  
         *      
         *  **Note:** This value indicates the local position of the object set in [member origin_from].  
         */
        get originOffset(): Vector3
        set originOffset(value: Vector3)
        
        /** If the target passes through too close to the origin than this value, time-based interpolation is used even if the target is within the angular limitations, to prevent the angular velocity from becoming too high. */
        get originSafeMargin(): float64
        set originSafeMargin(value: float64)
        
        /** The duration of the time-based interpolation. Interpolation is triggered at the following cases:  
         *  - When the target node is changed  
         *  - When an axis is flipped due to angle limitation  
         *      
         *  **Note:** The flipping occurs when the target is outside the angle limitation and the internally computed secondary rotation axis of the forward vector is flipped. Visually, it occurs when the target is outside the angle limitation and crosses the plane of the [member forward_axis] and [member primary_rotation_axis].  
         */
        get duration(): float64
        set duration(value: float64)
        
        /** The transition type of the time-based interpolation. See also [enum Tween.TransitionType]. */
        get transitionType(): int64
        set transitionType(value: int64)
        
        /** The ease type of the time-based interpolation. See also [enum Tween.EaseType]. */
        get easeType(): int64
        set easeType(value: int64)
        
        /** If `true`, limits the degree of rotation. This helps prevent the character's neck from rotating 360 degrees.  
         *      
         *  **Note:** As with [AnimationTree] blending, interpolation is provided that favors [method Skeleton3D.get_bone_rest]. This means that interpolation does not select the shortest path in some cases.  
         *      
         *  **Note:** Some [member transition_type] may exceed the limitations (e.g. `Back`, `Elastic`, and `Spring`). If interpolation occurs while overshooting the limitations, the result might possibly not respect the bone rest.  
         */
        get useAngleLimitation(): boolean
        set useAngleLimitation(value: boolean)
        
        /** If `true`, the limitations are spread from the bone symmetrically.  
         *  If `false`, the limitation can be specified separately for each side of the bone rest.  
         */
        get symmetryLimitation(): boolean
        set symmetryLimitation(value: boolean)
        
        /** The limit angle of the primary rotation when [member symmetry_limitation] is `true`. */
        get primaryLimitAngle(): float64
        set primaryLimitAngle(value: float64)
        
        /** The threshold to start damping for [member primary_limit_angle]. It provides non-linear (b-spline) interpolation, let it feel more resistance the more it rotate to the edge limit. This is useful for simulating the limits of human motion.  
         *  If `1.0`, no damping is performed. If `0.0`, damping is always performed.  
         */
        get primaryDampThreshold(): float64
        set primaryDampThreshold(value: float64)
        
        /** The limit angle of positive side of the primary rotation when [member symmetry_limitation] is `false`. */
        get primaryPositiveLimitAngle(): float64
        set primaryPositiveLimitAngle(value: float64)
        
        /** The threshold to start damping for [member primary_positive_limit_angle]. */
        get primaryPositiveDampThreshold(): float64
        set primaryPositiveDampThreshold(value: float64)
        
        /** The limit angle of negative side of the primary rotation when [member symmetry_limitation] is `false`. */
        get primaryNegativeLimitAngle(): float64
        set primaryNegativeLimitAngle(value: float64)
        
        /** The threshold to start damping for [member primary_negative_limit_angle]. */
        get primaryNegativeDampThreshold(): float64
        set primaryNegativeDampThreshold(value: float64)
        
        /** The limit angle of the secondary rotation when [member symmetry_limitation] is `true`. */
        get secondaryLimitAngle(): float64
        set secondaryLimitAngle(value: float64)
        
        /** The threshold to start damping for [member secondary_limit_angle]. */
        get secondaryDampThreshold(): float64
        set secondaryDampThreshold(value: float64)
        
        /** The limit angle of positive side of the secondary rotation when [member symmetry_limitation] is `false`. */
        get secondaryPositiveLimitAngle(): float64
        set secondaryPositiveLimitAngle(value: float64)
        
        /** The threshold to start damping for [member secondary_positive_limit_angle]. */
        get secondaryPositiveDampThreshold(): float64
        set secondaryPositiveDampThreshold(value: float64)
        
        /** The limit angle of negative side of the secondary rotation when [member symmetry_limitation] is `false`. */
        get secondaryNegativeLimitAngle(): float64
        set secondaryNegativeLimitAngle(value: float64)
        
        /** The threshold to start damping for [member secondary_negative_limit_angle]. */
        get secondaryNegativeDampThreshold(): float64
        set secondaryNegativeDampThreshold(value: float64)
    }
    /** Abstract base class for the game's main loop.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_mainloop.html  
     */
    class MainLoop extends GObject {
        /** Notification received from the OS when the application is exceeding its allocated memory.  
         *  Specific to the iOS platform.  
         */
        static readonly NOTIFICATION_OS_MEMORY_WARNING = 2009
        
        /** Notification received when translations may have changed. Can be triggered by the user changing the locale. Can be used to respond to language changes, for example to change the UI strings on the fly. Useful when working with the built-in translation support, like [method Object.tr]. */
        static readonly NOTIFICATION_TRANSLATION_CHANGED = 2010
        
        /** Notification received from the OS when a request for "About" information is sent.  
         *  Specific to the macOS platform.  
         */
        static readonly NOTIFICATION_WM_ABOUT = 2011
        
        /** Notification received from Godot's crash handler when the engine is about to crash.  
         *  Implemented on desktop platforms if the crash handler is enabled.  
         */
        static readonly NOTIFICATION_CRASH = 2012
        
        /** Notification received from the OS when an update of the Input Method Engine occurs (e.g. change of IME cursor position or composition string).  
         *  Specific to the macOS platform.  
         */
        static readonly NOTIFICATION_OS_IME_UPDATE = 2013
        
        /** Notification received from the OS when the application is resumed.  
         *  Specific to the Android and iOS platforms.  
         */
        static readonly NOTIFICATION_APPLICATION_RESUMED = 2014
        
        /** Notification received from the OS when the application is paused.  
         *  Specific to the Android and iOS platforms.  
         *      
         *  **Note:** On iOS, you only have approximately 5 seconds to finish a task started by this signal. If you go over this allotment, iOS will kill the app instead of pausing it.  
         */
        static readonly NOTIFICATION_APPLICATION_PAUSED = 2015
        
        /** Notification received from the OS when the application is focused, i.e. when changing the focus from the OS desktop or a thirdparty application to any open window of the Godot instance.  
         *  Implemented on desktop and mobile platforms.  
         */
        static readonly NOTIFICATION_APPLICATION_FOCUS_IN = 2016
        
        /** Notification received from the OS when the application is defocused, i.e. when changing the focus from any open window of the Godot instance to the OS desktop or a thirdparty application.  
         *  Implemented on desktop and mobile platforms.  
         */
        static readonly NOTIFICATION_APPLICATION_FOCUS_OUT = 2017
        
        /** Notification received when text server is changed. */
        static readonly NOTIFICATION_TEXT_SERVER_CHANGED = 2018
        constructor(identifier?: any)
        
        /** Called once during initialization. */
        /* gdvirtual */ _initialize(): void
        
        /** Called each physics frame with the time since the last physics frame as argument ([param delta], in seconds). Equivalent to [method Node._physics_process].  
         *  If implemented, the method must return a boolean value. `true` ends the main loop, while `false` lets it proceed to the next frame.  
         *      
         *  **Note:** [param delta] will be larger than expected if running at a framerate lower than [member Engine.physics_ticks_per_second] / [member Engine.max_physics_steps_per_frame] FPS. This is done to avoid "spiral of death" scenarios where performance would plummet due to an ever-increasing number of physics steps per frame. This behavior affects both [method _process] and [method _physics_process]. As a result, avoid using [param delta] for time measurements in real-world seconds. Use the [Time] singleton's methods for this purpose instead, such as [method Time.get_ticks_usec].  
         */
        /* gdvirtual */ _physicsProcess(delta: float64): boolean
        
        /** Called each process (idle) frame with the time since the last process frame as argument (in seconds). Equivalent to [method Node._process].  
         *  If implemented, the method must return a boolean value. `true` ends the main loop, while `false` lets it proceed to the next frame.  
         *      
         *  **Note:** [param delta] will be larger than expected if running at a framerate lower than [member Engine.physics_ticks_per_second] / [member Engine.max_physics_steps_per_frame] FPS. This is done to avoid "spiral of death" scenarios where performance would plummet due to an ever-increasing number of physics steps per frame. This behavior affects both [method _process] and [method _physics_process]. As a result, avoid using [param delta] for time measurements in real-world seconds. Use the [Time] singleton's methods for this purpose instead, such as [method Time.get_ticks_usec].  
         */
        /* gdvirtual */ _process(delta: float64): boolean
        
        /** Called before the program exits. */
        /* gdvirtual */ _finalize(): void
        
        /** Emitted when a user responds to a permission request. */
        readonly onRequestPermissionsResult: Signal<(permission: string, granted: boolean) => void>
    }
    /** A container that keeps a margin around its child controls.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_margincontainer.html  
     */
    class MarginContainer<Map extends NodePathMap = any> extends Container<Map> {
        constructor(identifier?: any)
    }
    /** Generic 2D position hint for editing.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_marker2d.html  
     */
    class Marker2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** Size of the gizmo cross that appears in the editor. */
        get gizmoExtents(): float64
        set gizmoExtents(value: float64)
    }
    /** Generic 3D position hint for editing.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_marker3d.html  
     */
    class Marker3D<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        /** Size of the gizmo cross that appears in the editor. */
        get gizmoExtents(): float64
        set gizmoExtents(value: float64)
    }
    /** Virtual base class for applying visual properties to an object, such as color and roughness.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_material.html  
     */
    class Material extends Resource {
        /** Maximum value for the [member render_priority] parameter. */
        static readonly RENDER_PRIORITY_MAX = 127
        
        /** Minimum value for the [member render_priority] parameter. */
        static readonly RENDER_PRIORITY_MIN = -128
        constructor(identifier?: any)
        
        /** Only exposed for the purpose of overriding. You cannot call this function directly. Used internally by various editor tools. Used to access the RID of the [Material]'s [Shader]. */
        /* gdvirtual */ _getShaderRid(): Rid
        
        /** Only exposed for the purpose of overriding. You cannot call this function directly. Used internally by various editor tools. */
        /* gdvirtual */ _getShaderMode(): Shader.Mode
        
        /** Only exposed for the purpose of overriding. You cannot call this function directly. Used internally to determine if [member next_pass] should be shown in the editor or not. */
        /* gdvirtual */ _canDoNextPass(): boolean
        
        /** Only exposed for the purpose of overriding. You cannot call this function directly. Used internally to determine if [member render_priority] should be shown in the editor or not. */
        /* gdvirtual */ _canUseRenderPriority(): boolean
        
        /** Only available when running in the editor. Opens a popup that visualizes the generated shader code, including all variants and internal shader code. See also [method Shader.inspect_native_shader_code]. */
        inspectNativeShaderCode(): void
        
        /** Creates a placeholder version of this resource ([PlaceholderMaterial]). */
        createPlaceholder(): Resource
        
        /** Sets the render priority for objects in 3D scenes. Higher priority objects will be sorted in front of lower priority objects. In other words, all objects with [member render_priority] `1` will render on top of all objects with [member render_priority] `0`.  
         *      
         *  **Note:** This only applies to [StandardMaterial3D]s and [ShaderMaterial]s with type "Spatial".  
         *      
         *  **Note:** This will not impact how transparent objects are sorted relative to opaque objects or how dynamic meshes will be sorted relative to other opaque meshes. This is because all transparent objects are drawn after all opaque objects and all dynamic opaque meshes are drawn before other opaque meshes.  
         */
        get renderPriority(): int64
        set renderPriority(value: int64)
        
        /** Sets the [Material] to be used for the next pass. This renders the object again using a different material.  
         *      
         *  **Note:** [member next_pass] materials are not necessarily drawn immediately after the source [Material]. Draw order is determined by material properties, [member render_priority], and distance to camera.  
         *      
         *  **Note:** This only applies to [StandardMaterial3D]s and [ShaderMaterial]s with type "Spatial".  
         */
        get nextPass(): null | Material
        set nextPass(value: null | Material)
    }
    /** A horizontal menu bar that creates a menu for each [PopupMenu] child.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_menubar.html  
     */
    class MenuBar<Map extends NodePathMap = any> extends Control<Map> {
        constructor(identifier?: any)
        /** If `true`, shortcuts are disabled and cannot be used to trigger the button. */
        setDisableShortcuts(disabled: boolean): void
        
        /** Returns `true`, if system global menu is supported and used by this [MenuBar]. */
        isNativeMenu(): boolean
        
        /** Returns number of menu items. */
        getMenuCount(): int64
        
        /** Sets menu item title. */
        setMenuTitle(menu: int64, title: string): void
        
        /** Returns menu item title. */
        getMenuTitle(menu: int64): string
        
        /** Sets menu item tooltip. */
        setMenuTooltip(menu: int64, tooltip: string): void
        
        /** Returns menu item tooltip. */
        getMenuTooltip(menu: int64): string
        
        /** If `true`, menu item is disabled. */
        setMenuDisabled(menu: int64, disabled: boolean): void
        
        /** Returns `true`, if menu item is disabled. */
        isMenuDisabled(menu: int64): boolean
        
        /** If `true`, menu item is hidden. */
        setMenuHidden(menu: int64, hidden: boolean): void
        
        /** Returns `true`, if menu item is hidden. */
        isMenuHidden(menu: int64): boolean
        
        /** Returns [PopupMenu] associated with menu item. */
        getMenuPopup(menu: int64): null | PopupMenu
        
        /** Flat [MenuBar] don't display item decoration. */
        get flat(): boolean
        set flat(value: boolean)
        
        /** Position order in the global menu to insert [MenuBar] items at. All menu items in the [MenuBar] are always inserted as a continuous range. Menus with lower [member start_index] are inserted first. Menus with [member start_index] equal to `-1` are inserted last. */
        get startIndex(): int64
        set startIndex(value: int64)
        
        /** If `true`, when the cursor hovers above menu item, it will close the current [PopupMenu] and open the other one. */
        get switchOnHover(): boolean
        set switchOnHover(value: boolean)
        
        /** If `true`, [MenuBar] will use system global menu when supported.  
         *      
         *  **Note:** If `true` and global menu is supported, this node is not displayed, has zero size, and all its child nodes except [PopupMenu]s are inaccessible.  
         *      
         *  **Note:** This property overrides the value of the [member PopupMenu.prefer_native_menu] property of the child nodes.  
         */
        get preferGlobalMenu(): boolean
        set preferGlobalMenu(value: boolean)
        
        /** Base text writing direction. */
        get textDirection(): int64
        set textDirection(value: int64)
        
        /** Language code used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        get language(): string
        set language(value: string)
    }
    /** A button that brings up a [PopupMenu] when clicked.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_menubutton.html  
     */
    class MenuButton<Map extends NodePathMap = any> extends Button<Map> {
        constructor(identifier?: any)
        /** Returns the [PopupMenu] contained in this button.  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member Window.visible] property.  
         */
        getPopup(): null | PopupMenu
        
        /** Adjusts popup position and sizing for the [MenuButton], then shows the [PopupMenu]. Prefer this over using `get_popup().popup()`. */
        showPopup(): void
        
        /** If `true`, shortcuts are disabled and cannot be used to trigger the button. */
        setDisableShortcuts(disabled: boolean): void
        
        /** If `true`, when the cursor hovers above another [MenuButton] within the same parent which also has [member switch_on_hover] enabled, it will close the current [MenuButton] and open the other one. */
        get switchOnHover(): boolean
        set switchOnHover(value: boolean)
        
        /** The number of items currently in the list. */
        get itemCount(): any /*Items,popup/item_*/
        set itemCount(value: any /*Items,popup/item_*/)
        
        /** Emitted when the [PopupMenu] of this MenuButton is about to show. */
        readonly aboutToPopup: Signal<() => void>
    }
    namespace Mesh {
        enum PrimitiveType {
            PrimitivePoints = 0,
            PrimitiveLines = 1,
            PrimitiveLineStrip = 2,
            PrimitiveTriangles = 3,
            PrimitiveTriangleStrip = 4,
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
        }
        enum BlendShapeMode {
            BlendShapeModeNormalized = 0,
            BlendShapeModeRelative = 1,
        }
    }
    /** A [Resource] that contains vertex array-based geometry.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_mesh.html  
     */
    class Mesh extends Resource {
        /** Render array as points (one vertex equals one point). */
        static readonly PRIMITIVE_POINTS = 0
        
        /** Render array as lines (every two vertices a line is created). */
        static readonly PRIMITIVE_LINES = 1
        
        /** Render array as line strip. */
        static readonly PRIMITIVE_LINE_STRIP = 2
        
        /** Render array as triangles (every three vertices a triangle is created). */
        static readonly PRIMITIVE_TRIANGLES = 3
        
        /** Render array as triangle strips. */
        static readonly PRIMITIVE_TRIANGLE_STRIP = 4
        
        /** [PackedVector3Array], [PackedVector2Array], or [Array] of vertex positions. */
        static readonly ARRAY_VERTEX = 0
        
        /** [PackedVector3Array] of vertex normals.  
         *      
         *  **Note:** The array has to consist of normal vectors, otherwise they will be normalized by the engine, potentially causing visual discrepancies.  
         */
        static readonly ARRAY_NORMAL = 1
        
        /** [PackedFloat32Array] of vertex tangents. Each element in groups of 4 floats, first 3 floats determine the tangent, and the last the binormal direction as -1 or 1. */
        static readonly ARRAY_TANGENT = 2
        
        /** [PackedColorArray] of vertex colors. */
        static readonly ARRAY_COLOR = 3
        
        /** [PackedVector2Array] for UV coordinates. */
        static readonly ARRAY_TEX_UV = 4
        
        /** [PackedVector2Array] for second UV coordinates. */
        static readonly ARRAY_TEX_UV2 = 5
        
        /** Contains custom color channel 0. [PackedByteArray] if `(format >> Mesh.ARRAY_FORMAT_CUSTOM0_SHIFT) & Mesh.ARRAY_FORMAT_CUSTOM_MASK` is [constant ARRAY_CUSTOM_RGBA8_UNORM], [constant ARRAY_CUSTOM_RGBA8_SNORM], [constant ARRAY_CUSTOM_RG_HALF], or [constant ARRAY_CUSTOM_RGBA_HALF]. [PackedFloat32Array] otherwise. */
        static readonly ARRAY_CUSTOM0 = 6
        
        /** Contains custom color channel 1. [PackedByteArray] if `(format >> Mesh.ARRAY_FORMAT_CUSTOM1_SHIFT) & Mesh.ARRAY_FORMAT_CUSTOM_MASK` is [constant ARRAY_CUSTOM_RGBA8_UNORM], [constant ARRAY_CUSTOM_RGBA8_SNORM], [constant ARRAY_CUSTOM_RG_HALF], or [constant ARRAY_CUSTOM_RGBA_HALF]. [PackedFloat32Array] otherwise. */
        static readonly ARRAY_CUSTOM1 = 7
        
        /** Contains custom color channel 2. [PackedByteArray] if `(format >> Mesh.ARRAY_FORMAT_CUSTOM2_SHIFT) & Mesh.ARRAY_FORMAT_CUSTOM_MASK` is [constant ARRAY_CUSTOM_RGBA8_UNORM], [constant ARRAY_CUSTOM_RGBA8_SNORM], [constant ARRAY_CUSTOM_RG_HALF], or [constant ARRAY_CUSTOM_RGBA_HALF]. [PackedFloat32Array] otherwise. */
        static readonly ARRAY_CUSTOM2 = 8
        
        /** Contains custom color channel 3. [PackedByteArray] if `(format >> Mesh.ARRAY_FORMAT_CUSTOM3_SHIFT) & Mesh.ARRAY_FORMAT_CUSTOM_MASK` is [constant ARRAY_CUSTOM_RGBA8_UNORM], [constant ARRAY_CUSTOM_RGBA8_SNORM], [constant ARRAY_CUSTOM_RG_HALF], or [constant ARRAY_CUSTOM_RGBA_HALF]. [PackedFloat32Array] otherwise. */
        static readonly ARRAY_CUSTOM3 = 9
        
        /** [PackedFloat32Array] or [PackedInt32Array] of bone indices. Contains either 4 or 8 numbers per vertex depending on the presence of the [constant ARRAY_FLAG_USE_8_BONE_WEIGHTS] flag. */
        static readonly ARRAY_BONES = 10
        
        /** [PackedFloat32Array] or [PackedFloat64Array] of bone weights in the range `0.0` to `1.0` (inclusive). Contains either 4 or 8 numbers per vertex depending on the presence of the [constant ARRAY_FLAG_USE_8_BONE_WEIGHTS] flag. */
        static readonly ARRAY_WEIGHTS = 11
        
        /** [PackedInt32Array] of integers used as indices referencing vertices, colors, normals, tangents, and textures. All of those arrays must have the same number of elements as the vertex array. No index can be beyond the vertex array size. When this index array is present, it puts the function into "index mode," where the index selects the  *i* 'th vertex, normal, tangent, color, UV, etc. This means if you want to have different normals or colors along an edge, you have to duplicate the vertices.  
         *  For triangles, the index array is interpreted as triples, referring to the vertices of each triangle. For lines, the index array is in pairs indicating the start and end of each line.  
         */
        static readonly ARRAY_INDEX = 12
        
        /** Represents the size of the [enum ArrayType] enum. */
        static readonly ARRAY_MAX = 13
        
        /** Indicates this custom channel contains unsigned normalized byte colors from 0 to 1, encoded as [PackedByteArray]. */
        static readonly ARRAY_CUSTOM_RGBA8_UNORM = 0
        
        /** Indicates this custom channel contains signed normalized byte colors from -1 to 1, encoded as [PackedByteArray]. */
        static readonly ARRAY_CUSTOM_RGBA8_SNORM = 1
        
        /** Indicates this custom channel contains half precision float colors, encoded as [PackedByteArray]. Only red and green channels are used. */
        static readonly ARRAY_CUSTOM_RG_HALF = 2
        
        /** Indicates this custom channel contains half precision float colors, encoded as [PackedByteArray]. */
        static readonly ARRAY_CUSTOM_RGBA_HALF = 3
        
        /** Indicates this custom channel contains full float colors, in a [PackedFloat32Array]. Only the red channel is used. */
        static readonly ARRAY_CUSTOM_R_FLOAT = 4
        
        /** Indicates this custom channel contains full float colors, in a [PackedFloat32Array]. Only red and green channels are used. */
        static readonly ARRAY_CUSTOM_RG_FLOAT = 5
        
        /** Indicates this custom channel contains full float colors, in a [PackedFloat32Array]. Only red, green and blue channels are used. */
        static readonly ARRAY_CUSTOM_RGB_FLOAT = 6
        
        /** Indicates this custom channel contains full float colors, in a [PackedFloat32Array]. */
        static readonly ARRAY_CUSTOM_RGBA_FLOAT = 7
        
        /** Represents the size of the [enum ArrayCustomFormat] enum. */
        static readonly ARRAY_CUSTOM_MAX = 8
        
        /** Mesh array contains vertices. All meshes require a vertex array so this should always be present. */
        static readonly ARRAY_FORMAT_VERTEX = 1
        
        /** Mesh array contains normals. */
        static readonly ARRAY_FORMAT_NORMAL = 2
        
        /** Mesh array contains tangents. */
        static readonly ARRAY_FORMAT_TANGENT = 4
        
        /** Mesh array contains colors. */
        static readonly ARRAY_FORMAT_COLOR = 8
        
        /** Mesh array contains UVs. */
        static readonly ARRAY_FORMAT_TEX_UV = 16
        
        /** Mesh array contains second UV. */
        static readonly ARRAY_FORMAT_TEX_UV2 = 32
        
        /** Mesh array contains custom channel index 0. */
        static readonly ARRAY_FORMAT_CUSTOM0 = 64
        
        /** Mesh array contains custom channel index 1. */
        static readonly ARRAY_FORMAT_CUSTOM1 = 128
        
        /** Mesh array contains custom channel index 2. */
        static readonly ARRAY_FORMAT_CUSTOM2 = 256
        
        /** Mesh array contains custom channel index 3. */
        static readonly ARRAY_FORMAT_CUSTOM3 = 512
        
        /** Mesh array contains bones. */
        static readonly ARRAY_FORMAT_BONES = 1024
        
        /** Mesh array contains bone weights. */
        static readonly ARRAY_FORMAT_WEIGHTS = 2048
        
        /** Mesh array uses indices. */
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
        
        /** Flag used to mark that the mesh contains up to 8 bone influences per vertex. This flag indicates that [constant ARRAY_BONES] and [constant ARRAY_WEIGHTS] elements will have double length. */
        static readonly ARRAY_FLAG_USE_8_BONE_WEIGHTS = 134217728
        
        /** Flag used to mark that the mesh intentionally contains no vertex array. */
        static readonly ARRAY_FLAG_USES_EMPTY_VERTEX_ARRAY = 268435456
        
        /** Flag used to mark that a mesh is using compressed attributes (vertices, normals, tangents, UVs). When this form of compression is enabled, vertex positions will be packed into an RGBA16UNORM attribute and scaled in the vertex shader. The normal and tangent will be packed into an RG16UNORM representing an axis, and a 16-bit float stored in the A-channel of the vertex. UVs will use 16-bit normalized floats instead of full 32-bit signed floats. When using this compression mode you must use either vertices, normals, and tangents or only vertices. You cannot use normals without tangents. Importers will automatically enable this compression if they can. */
        static readonly ARRAY_FLAG_COMPRESS_ATTRIBUTES = 536870912
        
        /** Blend shapes are normalized. */
        static readonly BLEND_SHAPE_MODE_NORMALIZED = 0
        
        /** Blend shapes are relative to base weight. */
        static readonly BLEND_SHAPE_MODE_RELATIVE = 1
        constructor(identifier?: any)
        
        /** Virtual method to override the surface count for a custom class extending [Mesh]. */
        /* gdvirtual */ _getSurfaceCount(): int64
        
        /** Virtual method to override the surface array length for a custom class extending [Mesh]. */
        /* gdvirtual */ _surfaceGetArrayLen(index: int64): int64
        
        /** Virtual method to override the surface array index length for a custom class extending [Mesh]. */
        /* gdvirtual */ _surfaceGetArrayIndexLen(index: int64): int64
        
        /** Virtual method to override the surface arrays for a custom class extending [Mesh]. */
        /* gdvirtual */ _surfaceGetArrays(index: int64): GArray
        
        /** Virtual method to override the blend shape arrays for a custom class extending [Mesh]. */
        /* gdvirtual */ _surfaceGetBlendShapeArrays(index: int64): GArray
        
        /** Virtual method to override the surface LODs for a custom class extending [Mesh]. */
        /* gdvirtual */ _surfaceGetLods(index: int64): GDictionary
        
        /** Virtual method to override the surface format for a custom class extending [Mesh]. */
        /* gdvirtual */ _surfaceGetFormat(index: int64): int64
        
        /** Virtual method to override the surface primitive type for a custom class extending [Mesh]. */
        /* gdvirtual */ _surfaceGetPrimitiveType(index: int64): int64
        
        /** Virtual method to override the setting of a [param material] at the given [param index] for a custom class extending [Mesh]. */
        /* gdvirtual */ _surfaceSetMaterial(index: int64, material: Material): void
        
        /** Virtual method to override the surface material for a custom class extending [Mesh]. */
        /* gdvirtual */ _surfaceGetMaterial(index: int64): null | Material
        
        /** Virtual method to override the number of blend shapes for a custom class extending [Mesh]. */
        /* gdvirtual */ _getBlendShapeCount(): int64
        
        /** Virtual method to override the retrieval of blend shape names for a custom class extending [Mesh]. */
        /* gdvirtual */ _getBlendShapeName(index: int64): StringName
        
        /** Virtual method to override the names of blend shapes for a custom class extending [Mesh]. */
        /* gdvirtual */ _setBlendShapeName(index: int64, name: StringName): void
        
        /** Virtual method to override the [AABB] for a custom class extending [Mesh]. */
        /* gdvirtual */ _getAabb(): Aabb
        
        /** Returns the smallest [AABB] enclosing this mesh in local space. Not affected by `custom_aabb`.  
         *      
         *  **Note:** This is only implemented for [ArrayMesh] and [PrimitiveMesh].  
         */
        getAabb(): Aabb
        
        /** Returns all the vertices that make up the faces of the mesh. Each three vertices represent one triangle. */
        getFaces(): PackedVector3Array
        
        /** Returns the number of surfaces that the [Mesh] holds. This is equivalent to [method MeshInstance3D.get_surface_override_material_count]. */
        getSurfaceCount(): int64
        
        /** Returns the arrays for the vertices, normals, UVs, etc. that make up the requested surface (see [method ArrayMesh.add_surface_from_arrays]). */
        surfaceGetArrays(surfIdx: int64): GArray
        
        /** Returns the blend shape arrays for the requested surface. */
        surfaceGetBlendShapeArrays(surfIdx: int64): GArray
        
        /** Sets a [Material] for a given surface. Surface will be rendered using this material.  
         *      
         *  **Note:** This assigns the material within the [Mesh] resource, not the [Material] associated to the [MeshInstance3D]'s Surface Material Override properties. To set the [Material] associated to the [MeshInstance3D]'s Surface Material Override properties, use [method MeshInstance3D.set_surface_override_material] instead.  
         */
        surfaceSetMaterial(surfIdx: int64, material: Material): void
        
        /** Returns a [Material] in a given surface. Surface is rendered using this material.  
         *      
         *  **Note:** This returns the material within the [Mesh] resource, not the [Material] associated to the [MeshInstance3D]'s Surface Material Override properties. To get the [Material] associated to the [MeshInstance3D]'s Surface Material Override properties, use [method MeshInstance3D.get_surface_override_material] instead.  
         */
        surfaceGetMaterial(surfIdx: int64): null | Material
        
        /** Creates a placeholder version of this resource ([PlaceholderMesh]). */
        createPlaceholder(): Resource
        
        /** Calculate a [ConcavePolygonShape3D] from the mesh. */
        createTrimeshShape(): ConcavePolygonShape3D
        
        /** Calculate a [ConvexPolygonShape3D] from the mesh.  
         *  If [param clean] is `true` (default), duplicate and interior vertices are removed automatically. You can set it to `false` to make the process faster if not needed.  
         *  If [param simplify] is `true`, the geometry can be further simplified to reduce the number of vertices. Disabled by default.  
         */
        createConvexShape(clean?: boolean /* = true */, simplify?: boolean /* = false */): ConvexPolygonShape3D
        
        /** Calculate an outline mesh at a defined offset (margin) from the original mesh.  
         *      
         *  **Note:** This method typically returns the vertices in reverse order (e.g. clockwise to counterclockwise).  
         */
        createOutline(margin: float64): Mesh
        
        /** Generate a [TriangleMesh] from the mesh. Considers only surfaces using one of these primitive types: [constant PRIMITIVE_TRIANGLES], [constant PRIMITIVE_TRIANGLE_STRIP]. */
        generateTriangleMesh(): null | TriangleMesh
        
        /** Sets a hint to be used for lightmap resolution. */
        get lightmapSizeHint(): Vector2I
        set lightmapSizeHint(value: Vector2I)
    }
    namespace MeshConvexDecompositionSettings {
        enum Mode {
            ConvexDecompositionModeVoxel = 0,
            ConvexDecompositionModeTetrahedron = 1,
        }
    }
    /** Parameters to be used with a [Mesh] convex decomposition operation.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_meshconvexdecompositionsettings.html  
     */
    class MeshConvexDecompositionSettings extends RefCounted {
        /** Constant for voxel-based approximate convex decomposition. */
        static readonly CONVEX_DECOMPOSITION_MODE_VOXEL = 0
        
        /** Constant for tetrahedron-based approximate convex decomposition. */
        static readonly CONVEX_DECOMPOSITION_MODE_TETRAHEDRON = 1
        constructor(identifier?: any)
        
        /** Maximum concavity. Ranges from `0.0` to `1.0`. */
        get maxConcavity(): float64
        set maxConcavity(value: float64)
        
        /** Controls the bias toward clipping along symmetry planes. Ranges from `0.0` to `1.0`. */
        get symmetryPlanesClippingBias(): float64
        set symmetryPlanesClippingBias(value: float64)
        
        /** Controls the bias toward clipping along revolution axes. Ranges from `0.0` to `1.0`. */
        get revolutionAxesClippingBias(): float64
        set revolutionAxesClippingBias(value: float64)
        
        /** Controls the adaptive sampling of the generated convex-hulls. Ranges from `0.0` to `0.01`. */
        get minVolumePerConvexHull(): float64
        set minVolumePerConvexHull(value: float64)
        
        /** Maximum number of voxels generated during the voxelization stage. */
        get resolution(): int64
        set resolution(value: int64)
        
        /** Controls the maximum number of triangles per convex-hull. Ranges from `4` to `1024`. */
        get maxNumVerticesPerConvexHull(): int64
        set maxNumVerticesPerConvexHull(value: int64)
        
        /** Controls the granularity of the search for the "best" clipping plane. Ranges from `1` to `16`. */
        get planeDownsampling(): int64
        set planeDownsampling(value: int64)
        
        /** Controls the precision of the convex-hull generation process during the clipping plane selection stage. Ranges from `1` to `16`. */
        get convexHullDownsampling(): int64
        set convexHullDownsampling(value: int64)
        
        /** If `true`, normalizes the mesh before applying the convex decomposition. */
        get normalizeMesh(): boolean
        set normalizeMesh(value: boolean)
        
        /** Mode for the approximate convex decomposition. */
        get mode(): int64
        set mode(value: int64)
        
        /** If `true`, uses approximation for computing convex hulls. */
        get convexHullApproximation(): boolean
        set convexHullApproximation(value: boolean)
        
        /** The maximum number of convex hulls to produce from the merge operation. */
        get maxConvexHulls(): int64
        set maxConvexHulls(value: int64)
        
        /** If `true`, projects output convex hull vertices onto the original source mesh to increase floating-point accuracy of the results. */
        get projectHullVertices(): boolean
        set projectHullVertices(value: boolean)
    }
    /** Helper tool to access and edit [Mesh] data.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_meshdatatool.html  
     */
    class MeshDataTool extends RefCounted {
        constructor(identifier?: any)
        /** Clears all data currently in MeshDataTool. */
        clear(): void
        
        /** Uses specified surface of given [Mesh] to populate data for MeshDataTool.  
         *  Requires [Mesh] with primitive type [constant Mesh.PRIMITIVE_TRIANGLES].  
         */
        createFromSurface(mesh: ArrayMesh, surface: int64): GError
        
        /** Adds a new surface to specified [Mesh] with edited data. */
        commitToSurface(mesh: ArrayMesh, compressionFlags?: int64 /* = 0 */): GError
        
        /** Returns the [Mesh]'s format as a combination of the [enum Mesh.ArrayFormat] flags. For example, a mesh containing both vertices and normals would return a format of `3` because [constant Mesh.ARRAY_FORMAT_VERTEX] is `1` and [constant Mesh.ARRAY_FORMAT_NORMAL] is `2`. */
        getFormat(): int64
        
        /** Returns the total number of vertices in [Mesh]. */
        getVertexCount(): int64
        
        /** Returns the number of edges in this [Mesh]. */
        getEdgeCount(): int64
        
        /** Returns the number of faces in this [Mesh]. */
        getFaceCount(): int64
        
        /** Sets the position of the given vertex. */
        setVertex(idx: int64, vertex: Vector3): void
        
        /** Returns the position of the given vertex. */
        getVertex(idx: int64): Vector3
        
        /** Sets the normal of the given vertex. */
        setVertexNormal(idx: int64, normal: Vector3): void
        
        /** Returns the normal of the given vertex. */
        getVertexNormal(idx: int64): Vector3
        
        /** Sets the tangent of the given vertex. */
        setVertexTangent(idx: int64, tangent: Plane): void
        
        /** Returns the tangent of the given vertex. */
        getVertexTangent(idx: int64): Plane
        
        /** Sets the UV of the given vertex. */
        setVertexUV(idx: int64, uV: Vector2): void
        
        /** Returns the UV of the given vertex. */
        getVertexUV(idx: int64): Vector2
        
        /** Sets the UV2 of the given vertex. */
        setVertexUV2(idx: int64, uV2: Vector2): void
        
        /** Returns the UV2 of the given vertex. */
        getVertexUV2(idx: int64): Vector2
        
        /** Sets the color of the given vertex. */
        setVertexColor(idx: int64, color: Color): void
        
        /** Returns the color of the given vertex. */
        getVertexColor(idx: int64): Color
        
        /** Sets the bones of the given vertex. */
        setVertexBones(idx: int64, bones: PackedInt32Array | int32[]): void
        
        /** Returns the bones of the given vertex. */
        getVertexBones(idx: int64): PackedInt32Array
        
        /** Sets the bone weights of the given vertex. */
        setVertexWeights(idx: int64, weights: PackedFloat32Array | float32[]): void
        
        /** Returns bone weights of the given vertex. */
        getVertexWeights(idx: int64): PackedFloat32Array
        
        /** Sets the metadata associated with the given vertex. */
        setVertexMeta(idx: int64, meta: any): void
        
        /** Returns the metadata associated with the given vertex. */
        getVertexMeta(idx: int64): any
        
        /** Returns an array of edges that share the given vertex. */
        getVertexEdges(idx: int64): PackedInt32Array
        
        /** Returns an array of faces that share the given vertex. */
        getVertexFaces(idx: int64): PackedInt32Array
        
        /** Returns index of specified vertex connected to given edge.  
         *  Vertex argument can only be 0 or 1 because edges are comprised of two vertices.  
         */
        getEdgeVertex(idx: int64, vertex: int64): int64
        
        /** Returns array of faces that touch given edge. */
        getEdgeFaces(idx: int64): PackedInt32Array
        
        /** Sets the metadata of the given edge. */
        setEdgeMeta(idx: int64, meta: any): void
        
        /** Returns meta information assigned to given edge. */
        getEdgeMeta(idx: int64): any
        
        /** Returns the specified vertex index of the given face.  
         *  [param vertex] must be either `0`, `1`, or `2` because faces contain three vertices.  
         *    
         */
        getFaceVertex(idx: int64, vertex: int64): int64
        
        /** Returns specified edge associated with given face.  
         *  Edge argument must be either 0, 1, or 2 because a face only has three edges.  
         */
        getFaceEdge(idx: int64, edge: int64): int64
        
        /** Sets the metadata of the given face. */
        setFaceMeta(idx: int64, meta: any): void
        
        /** Returns the metadata associated with the given face. */
        getFaceMeta(idx: int64): any
        
        /** Calculates and returns the face normal of the given face. */
        getFaceNormal(idx: int64): Vector3
        
        /** Sets the material to be used by newly-constructed [Mesh]. */
        setMaterial(material: Material): void
        
        /** Returns the material assigned to the [Mesh]. */
        getMaterial(): null | Material
    }
    /** Node used for displaying a [Mesh] in 2D.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_meshinstance2d.html  
     */
    class MeshInstance2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** The [Mesh] that will be drawn by the [MeshInstance2D]. */
        get mesh(): null | Mesh
        set mesh(value: null | Mesh)
        
        /** The [Texture2D] that will be used if using the default [CanvasItemMaterial]. Can be accessed as `TEXTURE` in CanvasItem shader. */
        get texture(): null | Texture2D
        set texture(value: null | Texture2D)
        
        /** Emitted when the [member texture] is changed. */
        readonly textureChanged: Signal<() => void>
    }
    /** Node that instances meshes into a scenario.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_meshinstance3d.html  
     */
    class MeshInstance3D<Map extends NodePathMap = any> extends GeometryInstance3D<Map> {
        constructor(identifier?: any)
        /** Returns the internal [SkinReference] containing the skeleton's [RID] attached to this RID. See also [method Resource.get_rid], [method SkinReference.get_skeleton], and [method RenderingServer.instance_attach_skeleton]. */
        getSkinReference(): null | SkinReference
        
        /** Returns the number of surface override materials. This is equivalent to [method Mesh.get_surface_count]. See also [method get_surface_override_material]. */
        getSurfaceOverrideMaterialCount(): int64
        
        /** Sets the override [param material] for the specified [param surface] of the [Mesh] resource. This material is associated with this [MeshInstance3D] rather than with [member mesh].  
         *      
         *  **Note:** This assigns the [Material] associated to the [MeshInstance3D]'s Surface Material Override properties, not the material within the [Mesh] resource. To set the material within the [Mesh] resource, use [method Mesh.surface_set_material] instead.  
         */
        setSurfaceOverrideMaterial(surface: int64, material: Material): void
        
        /** Returns the override [Material] for the specified [param surface] of the [Mesh] resource. See also [method get_surface_override_material_count].  
         *      
         *  **Note:** This returns the [Material] associated to the [MeshInstance3D]'s Surface Material Override properties, not the material within the [Mesh] resource. To get the material within the [Mesh] resource, use [method Mesh.surface_get_material] instead.  
         */
        getSurfaceOverrideMaterial(surface: int64): null | Material
        
        /** Returns the [Material] that will be used by the [Mesh] when drawing. This can return the [member GeometryInstance3D.material_override], the surface override [Material] defined in this [MeshInstance3D], or the surface [Material] defined in the [member mesh]. For example, if [member GeometryInstance3D.material_override] is used, all surfaces will return the override material.  
         *  Returns `null` if no material is active, including when [member mesh] is `null`.  
         */
        getActiveMaterial(surface: int64): null | Material
        
        /** This helper creates a [StaticBody3D] child node with a [ConcavePolygonShape3D] collision shape calculated from the mesh geometry. It's mainly used for testing. */
        createTrimeshCollision(): void
        
        /** This helper creates a [StaticBody3D] child node with a [ConvexPolygonShape3D] collision shape calculated from the mesh geometry. It's mainly used for testing.  
         *  If [param clean] is `true` (default), duplicate and interior vertices are removed automatically. You can set it to `false` to make the process faster if not needed.  
         *  If [param simplify] is `true`, the geometry can be further simplified to reduce the number of vertices. Disabled by default.  
         */
        createConvexCollision(clean?: boolean /* = true */, simplify?: boolean /* = false */): void
        
        /** This helper creates a [StaticBody3D] child node with multiple [ConvexPolygonShape3D] collision shapes calculated from the mesh geometry via convex decomposition. The convex decomposition operation can be controlled with parameters from the optional [param settings]. */
        createMultipleConvexCollisions(settings?: MeshConvexDecompositionSettings /* = undefined */): void
        
        /** Returns the number of blend shapes available. Produces an error if [member mesh] is `null`. */
        getBlendShapeCount(): int64
        
        /** Returns the index of the blend shape with the given [param name]. Returns `-1` if no blend shape with this name exists, including when [member mesh] is `null`. */
        findBlendShapeByName(name: StringName): int64
        
        /** Returns the value of the blend shape at the given [param blend_shape_idx]. Returns `0.0` and produces an error if [member mesh] is `null` or doesn't have a blend shape at that index. */
        getBlendShapeValue(blendShapeIdx: int64): float64
        
        /** Sets the value of the blend shape at [param blend_shape_idx] to [param value]. Produces an error if [member mesh] is `null` or doesn't have a blend shape at that index. */
        setBlendShapeValue(blendShapeIdx: int64, value: float64): void
        
        /** This helper creates a [MeshInstance3D] child node with gizmos at every vertex calculated from the mesh geometry. It's mainly used for testing. */
        createDebugTangents(): void
        
        /** Takes a snapshot from the current [ArrayMesh] with all blend shapes applied according to their current weights and bakes it to the provided [param existing] mesh. If no [param existing] mesh is provided a new [ArrayMesh] is created, baked and returned. Mesh surface materials are not copied.  
         *  **Performance:** [Mesh] data needs to be received from the GPU, stalling the [RenderingServer] in the process.  
         */
        bakeMeshFromCurrentBlendShapeMix(existing?: ArrayMesh /* = undefined */): null | ArrayMesh
        
        /** Takes a snapshot of the current animated skeleton pose of the skinned mesh and bakes it to the provided [param existing] mesh. If no [param existing] mesh is provided a new [ArrayMesh] is created, baked, and returned. Requires a skeleton with a registered skin to work. Blendshapes are ignored. Mesh surface materials are not copied.  
         *  **Performance:** [Mesh] data needs to be retrieved from the GPU, stalling the [RenderingServer] in the process.  
         */
        bakeMeshFromCurrentSkeletonPose(existing?: ArrayMesh /* = undefined */): null | ArrayMesh
        
        /** The [Mesh] resource for the instance. */
        get mesh(): null | Mesh
        set mesh(value: null | Mesh)
        
        /** The [Skin] to be used by this instance. */
        get skin(): null | Skin
        set skin(value: null | Skin)
        
        /** [NodePath] to the [Skeleton3D] associated with the instance. */
        get skeleton(): NodePath
        set skeleton(value: NodePath | string)
    }
    /** Library of meshes.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_meshlibrary.html  
     */
    class MeshLibrary extends Resource {
        constructor(identifier?: any)
        /** Creates a new item in the library with the given ID.  
         *  You can get an unused ID from [method get_last_unused_item_id].  
         */
        createItem(id: int64): void
        
        /** Sets the item's name.  
         *  This name is shown in the editor. It can also be used to look up the item later using [method find_item_by_name].  
         */
        setItemName(id: int64, name: string): void
        
        /** Sets the item's mesh. */
        setItemMesh(id: int64, mesh: Mesh): void
        
        /** Sets the transform to apply to the item's mesh. */
        setItemMeshTransform(id: int64, meshTransform: Transform3D): void
        
        /** Sets the item's shadow casting mode. See [enum RenderingServer.ShadowCastingSetting] for possible values. */
        setItemMeshCastShadow(id: int64, shadowCastingSetting: RenderingServer.ShadowCastingSetting): void
        
        /** Sets the item's navigation mesh. */
        setItemNavigationMesh(id: int64, navigationMesh: NavigationMesh): void
        
        /** Sets the transform to apply to the item's navigation mesh. */
        setItemNavigationMeshTransform(id: int64, navigationMesh: Transform3D): void
        
        /** Sets the item's navigation layers bitmask. */
        setItemNavigationLayers(id: int64, navigationLayers: int64): void
        
        /** Sets an item's collision shapes.  
         *  The array should consist of [Shape3D] objects, each followed by a [Transform3D] that will be applied to it. For shapes that should not have a transform, use [constant Transform3D.IDENTITY].  
         */
        setItemShapes(id: int64, shapes: GArray): void
        
        /** Sets a texture to use as the item's preview icon in the editor. */
        setItemPreview(id: int64, texture: Texture2D): void
        
        /** Returns the item's name. */
        getItemName(id: int64): string
        
        /** Returns the item's mesh. */
        getItemMesh(id: int64): null | Mesh
        
        /** Returns the transform applied to the item's mesh. */
        getItemMeshTransform(id: int64): Transform3D
        
        /** Returns the item's shadow casting mode. See [enum RenderingServer.ShadowCastingSetting] for possible values. */
        getItemMeshCastShadow(id: int64): RenderingServer.ShadowCastingSetting
        
        /** Returns the item's navigation mesh. */
        getItemNavigationMesh(id: int64): null | NavigationMesh
        
        /** Returns the transform applied to the item's navigation mesh. */
        getItemNavigationMeshTransform(id: int64): Transform3D
        
        /** Returns the item's navigation layers bitmask. */
        getItemNavigationLayers(id: int64): int64
        
        /** Returns an item's collision shapes.  
         *  The array consists of each [Shape3D] followed by its [Transform3D].  
         */
        getItemShapes(id: int64): GArray
        
        /** When running in the editor, returns a generated item preview (a 3D rendering in isometric perspective). When used in a running project, returns the manually-defined item preview which can be set using [method set_item_preview]. Returns an empty [Texture2D] if no preview was manually set in a running project. */
        getItemPreview(id: int64): null | Texture2D
        
        /** Removes the item. */
        removeItem(id: int64): void
        
        /** Returns the first item with the given name, or `-1` if no item is found. */
        findItemByName(name: string): int64
        
        /** Clears the library. */
        clear(): void
        
        /** Returns the list of item IDs in use. */
        getItemList(): PackedInt32Array
        
        /** Gets an unused ID for a new item. */
        getLastUnusedItemId(): int64
    }
    /** Simple texture that uses a mesh to draw itself.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_meshtexture.html  
     */
    class MeshTexture extends Texture2D {
        constructor(identifier?: any)
        /** Sets the mesh used to draw. It must be a mesh using 2D vertices. */
        get mesh(): null | Mesh
        set mesh(value: null | Mesh)
        
        /** Sets the base texture that the Mesh will use to draw. */
        get baseTexture(): null | Texture2D
        set baseTexture(value: null | Texture2D)
        
        /** Sets the size of the image, needed for reference. */
        get imageSize(): Vector2
        set imageSize(value: Vector2)
    }
    /** Interpolates an abstract value and supplies it to a method called over time.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_methodtweener.html  
     */
    class MethodTweener extends Tweener {
        constructor(identifier?: any)
        /** Sets the time in seconds after which the [MethodTweener] will start interpolating. By default there's no delay. */
        setDelay(delay: float64): null | MethodTweener
        
        /** Sets the type of used transition from [enum Tween.TransitionType]. If not set, the default transition is used from the [Tween] that contains this Tweener. */
        setTrans(trans: Tween.TransitionType): null | MethodTweener
        
        /** Sets the type of used easing from [enum Tween.EaseType]. If not set, the default easing is used from the [Tween] that contains this Tweener. */
        setEase(ease: Tween.EaseType): null | MethodTweener
    }
    /** An internal editor class intended for keeping the data of unrecognized nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_missingnode.html  
     */
    class MissingNode<Map extends NodePathMap = any> extends Node<Map> {
        constructor(identifier?: any)
        /** The name of the class this node was supposed to be (see [method Object.get_class]). */
        get originalClass(): string
        set originalClass(value: string)
        
        /** Returns the path of the scene this node was instance of originally. */
        get originalScene(): string
        set originalScene(value: string)
        
        /** If `true`, allows new properties to be set along with existing ones. If `false`, only existing properties' values can be set, and new properties cannot be added. */
        get recordingProperties(): boolean
        set recordingProperties(value: boolean)
    }
    /** An internal editor class intended for keeping the data of unrecognized resources.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_missingresource.html  
     */
    class MissingResource extends Resource {
        constructor(identifier?: any)
        /** The name of the class this resource was supposed to be (see [method Object.get_class]). */
        get originalClass(): string
        set originalClass(value: string)
        
        /** If set to `true`, allows new properties to be added on top of the existing ones with [method Object.set]. */
        get recordingProperties(): boolean
        set recordingProperties(value: boolean)
    }
    /** Generic mobile VR implementation.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_mobilevrinterface.html  
     */
    class MobileVRInterface extends XRInterface {
        constructor(identifier?: any)
        /** The height at which the camera is placed in relation to the ground (i.e. [XROrigin3D] node). */
        get eyeHeight(): float64
        set eyeHeight(value: float64)
        
        /** The interocular distance, also known as the interpupillary distance. The distance between the pupils of the left and right eye. */
        get iod(): float64
        set iod(value: float64)
        
        /** The width of the display in centimeters. */
        get displayWidth(): float64
        set displayWidth(value: float64)
        
        /** The distance between the display and the lenses inside of the device in centimeters. */
        get displayToLens(): float64
        set displayToLens(value: float64)
        
        /** Set the offset rect relative to the area being rendered. A length of 1 represents the whole rendering area on that axis. */
        get offsetRect(): Rect2
        set offsetRect(value: Rect2)
        
        /** The oversample setting. Because of the lens distortion we have to render our buffers at a higher resolution then the screen can natively handle. A value between 1.5 and 2.0 often provides good results but at the cost of performance. */
        get oversample(): float64
        set oversample(value: float64)
        
        /** The k1 lens factor is one of the two constants that define the strength of the lens used and directly influences the lens distortion effect. */
        get k1(): float64
        set k1(value: float64)
        
        /** The k2 lens factor, see k1. */
        get k2(): float64
        set k2(value: float64)
        
        /** The minimum radius around the focal point where full quality is guaranteed if VRS is used as a percentage of screen size.  
         *      
         *  **Note:** Mobile and Forward+ renderers only. Requires [member Viewport.vrs_mode] to be set to [constant Viewport.VRS_XR].  
         */
        get vrsMinRadius(): float64
        set vrsMinRadius(value: float64)
        
        /** The strength used to calculate the VRS density map. The greater this value, the more noticeable VRS is. This improves performance at the cost of quality.  
         *      
         *  **Note:** Mobile and Forward+ renderers only. Requires [member Viewport.vrs_mode] to be set to [constant Viewport.VRS_XR].  
         */
        get vrsStrength(): float64
        set vrsStrength(value: float64)
    }
    /** Abstract class for non-real-time video recording encoders.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_moviewriter.html  
     */
    class MovieWriter extends GObject {
        constructor(identifier?: any)
        /** Called when the audio sample rate used for recording the audio is requested by the engine. The value returned must be specified in Hz. Defaults to 48000 Hz if [method _get_audio_mix_rate] is not overridden. */
        /* gdvirtual */ _getAudioMixRate(): int64
        
        /** Called when the audio speaker mode used for recording the audio is requested by the engine. This can affect the number of output channels in the resulting audio file/stream. Defaults to [constant AudioServer.SPEAKER_MODE_STEREO] if [method _get_audio_speaker_mode] is not overridden. */
        /* gdvirtual */ _getAudioSpeakerMode(): AudioServer.SpeakerMode
        
        /** Called when the engine determines whether this [MovieWriter] is able to handle the file at [param path]. Must return `true` if this [MovieWriter] is able to handle the given file path, `false` otherwise. Typically, [method _handles_file] is overridden as follows to allow the user to record a file at any path with a given file extension:  
         *    
         */
        /* gdvirtual */ _handlesFile(path: string): boolean
        
        /** Called once before the engine starts writing video and audio data. [param movie_size] is the width and height of the video to save. [param fps] is the number of frames per second specified in the project settings or using the `--fixed-fps <fps>` [url=https://docs.godotengine.org/en/latest/tutorials/editor/command_line_tutorial.html]command line argument[/url]. */
        /* gdvirtual */ _writeBegin(movieSize: Vector2I, fps: int64, basePath: string): GError
        
        /** Called at the end of every rendered frame. The [param frame_image] and [param audio_frame_block] function arguments should be written to. */
        /* gdvirtual */ _writeFrame(frameImage: Image, audioFrameBlock: int64): GError
        
        /** Called when the engine finishes writing. This occurs when the engine quits by pressing the window manager's close button, or when [method SceneTree.quit] is called.  
         *      
         *  **Note:** Pressing [kbd]Ctrl + C[/kbd] on the terminal running the editor/project does  *not*  result in [method _write_end] being called.  
         */
        /* gdvirtual */ _writeEnd(): void
        
        /** Adds a writer to be usable by the engine. The supported file extensions can be set by overriding [method _handles_file].  
         *      
         *  **Note:** [method add_writer] must be called early enough in the engine initialization to work, as movie writing is designed to start at the same time as the rest of the engine.  
         */
        static addWriter(writer: MovieWriter): void
    }
    namespace MultiMesh {
        enum TransformFormat {
            Transform2D = 0,
            Transform3D = 1,
        }
        enum PhysicsInterpolationQuality {
            InterpQualityFast = 0,
            InterpQualityHigh = 1,
        }
    }
    /** Provides high-performance drawing of a mesh multiple times using GPU instancing.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_multimesh.html  
     */
    class MultiMesh extends Resource {
        /** Use this when using 2D transforms. */
        static readonly TRANSFORM_2D = 0
        
        /** Use this when using 3D transforms. */
        static readonly TRANSFORM_3D = 1
        
        /** Always interpolate using Basis lerping, which can produce warping artifacts in some situations. */
        static readonly INTERP_QUALITY_FAST = 0
        
        /** Attempt to interpolate using Basis slerping (spherical linear interpolation) where possible, otherwise fall back to lerping. */
        static readonly INTERP_QUALITY_HIGH = 1
        constructor(identifier?: any)
        
        /** Sets the [Transform3D] for a specific instance. */
        setInstanceTransform(instance: int64, transform: Transform3D): void
        
        /** Sets the [Transform2D] for a specific instance. */
        setInstanceTransform2D(instance: int64, transform: Transform2D): void
        
        /** Returns the [Transform3D] of a specific instance. */
        getInstanceTransform(instance: int64): Transform3D
        
        /** Returns the [Transform2D] of a specific instance. */
        getInstanceTransform2D(instance: int64): Transform2D
        
        /** Sets the color of a specific instance by  *multiplying*  the mesh's existing vertex colors. This allows for different color tinting per instance.  
         *      
         *  **Note:** Each component is stored in 32 bits in the Forward+ and Mobile rendering methods, but is packed into 16 bits in the Compatibility rendering method.  
         *  For the color to take effect, ensure that [member use_colors] is `true` on the [MultiMesh] and [member BaseMaterial3D.vertex_color_use_as_albedo] is `true` on the material. If you intend to set an absolute color instead of tinting, make sure the material's albedo color is set to pure white (`Color(1, 1, 1)`).  
         */
        setInstanceColor(instance: int64, color: Color): void
        
        /** Gets a specific instance's color multiplier. */
        getInstanceColor(instance: int64): Color
        
        /** Sets custom data for a specific instance. [param custom_data] is a [Color] type only to contain 4 floating-point numbers.  
         *      
         *  **Note:** Each number is stored in 32 bits in the Forward+ and Mobile rendering methods, but is packed into 16 bits in the Compatibility rendering method.  
         *  For the custom data to be used, ensure that [member use_custom_data] is `true`.  
         *  This custom instance data has to be manually accessed in your custom shader using `INSTANCE_CUSTOM`.  
         */
        setInstanceCustomData(instance: int64, customData: Color): void
        
        /** Returns the custom data that has been set for a specific instance. */
        getInstanceCustomData(instance: int64): Color
        
        /** When using  *physics interpolation* , this function allows you to prevent interpolation on an instance in the current physics tick.  
         *  This allows you to move instances instantaneously, and should usually be used when initially placing an instance such as a bullet to prevent graphical glitches.  
         */
        resetInstancePhysicsInterpolation(instance: int64): void
        
        /** Returns the visibility axis-aligned bounding box in local space. */
        getAabb(): Aabb
        
        /** An alternative to setting the [member buffer] property, which can be used with  *physics interpolation* . This method takes two arrays, and can set the data for the current and previous tick in one go. The renderer will automatically interpolate the data at each frame.  
         *  This is useful for situations where the order of instances may change from physics tick to tick, such as particle systems.  
         *  When the order of instances is coherent, the simpler alternative of setting [member buffer] can still be used with interpolation.  
         */
        setBufferInterpolated(bufferCurr: PackedFloat32Array | float32[], bufferPrev: PackedFloat32Array | float32[]): void
        
        /** Format of transform used to transform mesh, either 2D or 3D. */
        get transformFormat(): int64
        set transformFormat(value: int64)
        
        /** If `true`, the [MultiMesh] will use color data (see [method set_instance_color]). Can only be set when [member instance_count] is `0` or less. This means that you need to call this method before setting the instance count, or temporarily reset it to `0`. */
        get useColors(): boolean
        set useColors(value: boolean)
        
        /** If `true`, the [MultiMesh] will use custom data (see [method set_instance_custom_data]). Can only be set when [member instance_count] is `0` or less. This means that you need to call this method before setting the instance count, or temporarily reset it to `0`. */
        get useCustomData(): boolean
        set useCustomData(value: boolean)
        
        /** Custom AABB for this MultiMesh resource. Setting this manually prevents costly runtime AABB recalculations. */
        get customAabb(): Aabb
        set customAabb(value: Aabb)
        
        /** Number of instances that will get drawn. This clears and (re)sizes the buffers. Setting data format or flags afterwards will have no effect.  
         *  By default, all instances are drawn but you can limit this with [member visible_instance_count].  
         */
        get instanceCount(): int64
        set instanceCount(value: int64)
        
        /** Limits the number of instances drawn, -1 draws all instances. Changing this does not change the sizes of the buffers. */
        get visibleInstanceCount(): int64
        set visibleInstanceCount(value: int64)
        
        /** [Mesh] resource to be instanced.  
         *  The looks of the individual instances can be modified using [method set_instance_color] and [method set_instance_custom_data].  
         */
        get mesh(): null | Mesh
        set mesh(value: null | Mesh)
        get buffer(): PackedFloat32Array
        set buffer(value: PackedFloat32Array | float32[])
        
        /** Array containing each [Transform3D] value used by all instances of this mesh, as a [PackedVector3Array]. Each transform is divided into 4 [Vector3] values corresponding to the transforms' `x`, `y`, `z`, and `origin`. */
        get transformArray(): PackedVector3Array
        set transformArray(value: PackedVector3Array | Vector3[])
        
        /** Array containing each [Transform2D] value used by all instances of this mesh, as a [PackedVector2Array]. Each transform is divided into 3 [Vector2] values corresponding to the transforms' `x`, `y`, and `origin`. */
        get transform2DArray(): PackedVector2Array
        set transform2DArray(value: PackedVector2Array | Vector2[])
        
        /** Array containing each [Color] used by all instances of this mesh. */
        get colorArray(): PackedColorArray
        set colorArray(value: PackedColorArray | Color[])
        
        /** Array containing each custom data value used by all instances of this mesh, as a [PackedColorArray]. */
        get customDataArray(): PackedColorArray
        set customDataArray(value: PackedColorArray | Color[])
        
        /** Choose whether to use an interpolation method that favors speed or quality.  
         *  When using low physics tick rates (typically below 20) or high rates of object rotation, you may get better results from the high quality setting.  
         *      
         *  **Note:** Fast quality does not equate to low quality. Except in the special cases mentioned above, the quality should be comparable to high quality.  
         */
        get physicsInterpolationQuality(): int64
        set physicsInterpolationQuality(value: int64)
    }
    /** Node that instances a [MultiMesh] in 2D.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_multimeshinstance2d.html  
     */
    class MultiMeshInstance2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** The [MultiMesh] that will be drawn by the [MultiMeshInstance2D]. */
        get multimesh(): null | MultiMesh
        set multimesh(value: null | MultiMesh)
        
        /** The [Texture2D] that will be used if using the default [CanvasItemMaterial]. Can be accessed as `TEXTURE` in CanvasItem shader. */
        get texture(): null | Texture2D
        set texture(value: null | Texture2D)
        
        /** Emitted when the [member texture] is changed. */
        readonly textureChanged: Signal<() => void>
    }
    /** Node that instances a [MultiMesh].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_multimeshinstance3d.html  
     */
    class MultiMeshInstance3D<Map extends NodePathMap = any> extends GeometryInstance3D<Map> {
        constructor(identifier?: any)
        /** The [MultiMesh] resource that will be used and shared among all instances of the [MultiMeshInstance3D]. */
        get multimesh(): null | MultiMesh
        set multimesh(value: null | MultiMesh)
    }
    namespace MultiplayerApi {
        enum RpcMode {
            RpcModeDisabled = 0,
            RpcModeAnyPeer = 1,
            RpcModeAuthority = 2,
        }
    }
    class MultiplayerApi extends RefCounted {
        static readonly RPC_MODE_DISABLED = 0
        static readonly RPC_MODE_ANY_PEER = 1
        static readonly RPC_MODE_AUTHORITY = 2
        constructor(identifier?: any)
        hasMultiplayerPeer(): boolean
        getUniqueId(): int64
        isServer(): boolean
        getRemoteSenderId(): int64
        poll(): GError
        rpc(peer: int64, object: GObject, method: StringName, arguments_?: GArray /* = [] */): GError
        objectConfigurationAdd(object: GObject, configuration: any): GError
        objectConfigurationRemove(object: GObject, configuration: any): GError
        getPeers(): PackedInt32Array
        static setDefaultInterface(interfaceName: StringName): void
        static getDefaultInterface(): StringName
        static createDefaultInterface(): MultiplayerApi
        get multiplayerPeer(): null | MultiplayerPeer
        set multiplayerPeer(value: null | MultiplayerPeer)
        readonly peerConnected: Signal<(id: int64) => void>
        readonly peerDisconnected: Signal<(id: int64) => void>
        readonly connectedToServer: Signal<() => void>
        readonly connectionFailed: Signal<() => void>
        readonly serverDisconnected: Signal<() => void>
    }
    class MultiplayerApiExtension extends MultiplayerApi {
        constructor(identifier?: any)
        /* gdvirtual */ _poll(): GError
        /* gdvirtual */ _setMultiplayerPeer(multiplayerPeer: MultiplayerPeer): void
        /* gdvirtual */ _getMultiplayerPeer(): null | MultiplayerPeer
        /* gdvirtual */ _getUniqueId(): int64
        /* gdvirtual */ _getPeerIds(): PackedInt32Array
        /* gdvirtual */ _rpc(peer: int64, object: GObject, method: StringName, args: GArray): GError
        /* gdvirtual */ _getRemoteSenderId(): int64
        /* gdvirtual */ _objectConfigurationAdd(object: GObject, configuration: any): GError
        /* gdvirtual */ _objectConfigurationRemove(object: GObject, configuration: any): GError
    }
    namespace MultiplayerPeer {
        enum ConnectionStatus {
            ConnectionDisconnected = 0,
            ConnectionConnecting = 1,
            ConnectionConnected = 2,
        }
        enum TransferMode {
            TransferModeUnreliable = 0,
            TransferModeUnreliableOrdered = 1,
            TransferModeReliable = 2,
        }
    }
    /** Abstract class for specialized [PacketPeer]s used by the [MultiplayerAPI].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_multiplayerpeer.html  
     */
    class MultiplayerPeer extends PacketPeer {
        /** The MultiplayerPeer is disconnected. */
        static readonly CONNECTION_DISCONNECTED = 0
        
        /** The MultiplayerPeer is currently connecting to a server. */
        static readonly CONNECTION_CONNECTING = 1
        
        /** This MultiplayerPeer is connected. */
        static readonly CONNECTION_CONNECTED = 2
        
        /** Packets are sent to all connected peers. */
        static readonly TARGET_PEER_BROADCAST = 0
        
        /** Packets are sent to the remote peer acting as server. */
        static readonly TARGET_PEER_SERVER = 1
        
        /** Packets are not acknowledged, no resend attempts are made for lost packets. Packets may arrive in any order. Potentially faster than [constant TRANSFER_MODE_UNRELIABLE_ORDERED]. Use for non-critical data, and always consider whether the order matters. */
        static readonly TRANSFER_MODE_UNRELIABLE = 0
        
        /** Packets are not acknowledged, no resend attempts are made for lost packets. Packets are received in the order they were sent in. Potentially faster than [constant TRANSFER_MODE_RELIABLE]. Use for non-critical data or data that would be outdated if received late due to resend attempt(s) anyway, for example movement and positional data. */
        static readonly TRANSFER_MODE_UNRELIABLE_ORDERED = 1
        
        /** Packets must be received and resend attempts should be made until the packets are acknowledged. Packets must be received in the order they were sent in. Most reliable transfer mode, but potentially the slowest due to the overhead. Use for critical data that must be transmitted and arrive in order, for example an ability being triggered or a chat message. Consider carefully if the information really is critical, and use sparingly. */
        static readonly TRANSFER_MODE_RELIABLE = 2
        constructor(identifier?: any)
        
        /** Sets the peer to which packets will be sent.  
         *  The [param id] can be one of: [constant TARGET_PEER_BROADCAST] to send to all connected peers, [constant TARGET_PEER_SERVER] to send to the peer acting as server, a valid peer ID to send to that specific peer, a negative peer ID to send to all peers except that one. By default, the target peer is [constant TARGET_PEER_BROADCAST].  
         */
        setTargetPeer(id: int64): void
        
        /** Returns the ID of the [MultiplayerPeer] who sent the next available packet. See [method PacketPeer.get_available_packet_count]. */
        getPacketPeer(): int64
        
        /** Returns the channel over which the next available packet was received. See [method PacketPeer.get_available_packet_count]. */
        getPacketChannel(): int64
        
        /** Returns the transfer mode the remote peer used to send the next available packet. See [method PacketPeer.get_available_packet_count]. */
        getPacketMode(): MultiplayerPeer.TransferMode
        
        /** Waits up to 1 second to receive a new network event. */
        poll(): void
        
        /** Immediately close the multiplayer peer returning to the state [constant CONNECTION_DISCONNECTED]. Connected peers will be dropped without emitting [signal peer_disconnected]. */
        close(): void
        
        /** Disconnects the given [param peer] from this host. If [param force] is `true` the [signal peer_disconnected] signal will not be emitted for this peer. */
        disconnectPeer(peer: int64, force?: boolean /* = false */): void
        
        /** Returns the current state of the connection. See [enum ConnectionStatus]. */
        getConnectionStatus(): MultiplayerPeer.ConnectionStatus
        
        /** Returns the ID of this [MultiplayerPeer]. */
        getUniqueId(): int64
        
        /** Returns a randomly generated integer that can be used as a network unique ID. */
        generateUniqueId(): int64
        
        /** Returns `true` if the server can act as a relay in the current configuration. That is, if the higher level [MultiplayerAPI] should notify connected clients of other peers, and implement a relay protocol to allow communication between them. */
        isServerRelaySupported(): boolean
        
        /** If `true`, this [MultiplayerPeer] refuses new connections. */
        get refuseNewConnections(): boolean
        set refuseNewConnections(value: boolean)
        
        /** The manner in which to send packets to the target peer. See [enum TransferMode], and the [method set_target_peer] method. */
        get transferMode(): int64
        set transferMode(value: int64)
        
        /** The channel to use to send packets. Many network APIs such as ENet and WebRTC allow the creation of multiple independent channels which behaves, in a way, like separate connections. This means that reliable data will only block delivery of other packets on that channel, and ordering will only be in respect to the channel the packet is being sent on. Using different channels to send **different and independent** state updates is a common way to optimize network usage and decrease latency in fast-paced games.  
         *      
         *  **Note:** The default channel (`0`) actually works as 3 separate channels (one for each [enum TransferMode]) so that [constant TRANSFER_MODE_RELIABLE] and [constant TRANSFER_MODE_UNRELIABLE_ORDERED] does not interact with each other by default. Refer to the specific network API documentation (e.g. ENet or WebRTC) to learn how to set up channels correctly.  
         */
        get transferChannel(): int64
        set transferChannel(value: int64)
        
        /** Emitted when a remote peer connects. */
        readonly peerConnected: Signal<(id: int64) => void>
        
        /** Emitted when a remote peer has disconnected. */
        readonly peerDisconnected: Signal<(id: int64) => void>
    }
    /** Class that can be inherited to implement custom multiplayer API networking layers via GDExtension.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_multiplayerpeerextension.html  
     */
    class MultiplayerPeerExtension extends MultiplayerPeer {
        constructor(identifier?: any)
        /** Called when a packet needs to be received by the [MultiplayerAPI], with [param r_buffer_size] being the size of the binary [param r_buffer] in bytes. */
        /* gdvirtual */ _getPacket(rBuffer: int64, rBufferSize: int64): GError
        
        /** Called when a packet needs to be sent by the [MultiplayerAPI], with [param p_buffer_size] being the size of the binary [param p_buffer] in bytes. */
        /* gdvirtual */ _putPacket(pBuffer: int64, pBufferSize: int64): GError
        
        /** Called when the available packet count is internally requested by the [MultiplayerAPI]. */
        /* gdvirtual */ _getAvailablePacketCount(): int64
        
        /** Called when the maximum allowed packet size (in bytes) is requested by the [MultiplayerAPI]. */
        /* gdvirtual */ _getMaxPacketSize(): int64
        
        /** Called when a packet needs to be received by the [MultiplayerAPI], if [method _get_packet] isn't implemented. Use this when extending this class via GDScript. */
        /* gdvirtual */ _getPacketScript(): PackedByteArray
        
        /** Called when a packet needs to be sent by the [MultiplayerAPI], if [method _put_packet] isn't implemented. Use this when extending this class via GDScript. */
        /* gdvirtual */ _putPacketScript(pBuffer: PackedByteArray | byte[] | ArrayBuffer): GError
        
        /** Called to get the channel over which the next available packet was received. See [method MultiplayerPeer.get_packet_channel]. */
        /* gdvirtual */ _getPacketChannel(): int64
        
        /** Called to get the transfer mode the remote peer used to send the next available packet. See [method MultiplayerPeer.get_packet_mode]. */
        /* gdvirtual */ _getPacketMode(): MultiplayerPeer.TransferMode
        
        /** Called when the channel to use is set for this [MultiplayerPeer] (see [member MultiplayerPeer.transfer_channel]). */
        /* gdvirtual */ _setTransferChannel(pChannel: int64): void
        
        /** Called when the transfer channel to use is read on this [MultiplayerPeer] (see [member MultiplayerPeer.transfer_channel]). */
        /* gdvirtual */ _getTransferChannel(): int64
        
        /** Called when the transfer mode is set on this [MultiplayerPeer] (see [member MultiplayerPeer.transfer_mode]). */
        /* gdvirtual */ _setTransferMode(pMode: MultiplayerPeer.TransferMode): void
        
        /** Called when the transfer mode to use is read on this [MultiplayerPeer] (see [member MultiplayerPeer.transfer_mode]). */
        /* gdvirtual */ _getTransferMode(): MultiplayerPeer.TransferMode
        
        /** Called when the target peer to use is set for this [MultiplayerPeer] (see [method MultiplayerPeer.set_target_peer]). */
        /* gdvirtual */ _setTargetPeer(pPeer: int64): void
        
        /** Called when the ID of the [MultiplayerPeer] who sent the most recent packet is requested (see [method MultiplayerPeer.get_packet_peer]). */
        /* gdvirtual */ _getPacketPeer(): int64
        
        /** Called when the "is server" status is requested on the [MultiplayerAPI]. See [method MultiplayerAPI.is_server]. */
        /* gdvirtual */ _isServer(): boolean
        
        /** Called when the [MultiplayerAPI] is polled. See [method MultiplayerAPI.poll]. */
        /* gdvirtual */ _poll(): void
        
        /** Called when the multiplayer peer should be immediately closed (see [method MultiplayerPeer.close]). */
        /* gdvirtual */ _close(): void
        
        /** Called when the connected [param p_peer] should be forcibly disconnected (see [method MultiplayerPeer.disconnect_peer]). */
        /* gdvirtual */ _disconnectPeer(pPeer: int64, pForce: boolean): void
        
        /** Called when the unique ID of this [MultiplayerPeer] is requested (see [method MultiplayerPeer.get_unique_id]). The value must be between `1` and `2147483647`. */
        /* gdvirtual */ _getUniqueId(): int64
        
        /** Called when the "refuse new connections" status is set on this [MultiplayerPeer] (see [member MultiplayerPeer.refuse_new_connections]). */
        /* gdvirtual */ _setRefuseNewConnections(pEnable: boolean): void
        
        /** Called when the "refuse new connections" status is requested on this [MultiplayerPeer] (see [member MultiplayerPeer.refuse_new_connections]). */
        /* gdvirtual */ _isRefusingNewConnections(): boolean
        
        /** Called to check if the server can act as a relay in the current configuration. See [method MultiplayerPeer.is_server_relay_supported]. */
        /* gdvirtual */ _isServerRelaySupported(): boolean
        
        /** Called when the connection status is requested on the [MultiplayerPeer] (see [method MultiplayerPeer.get_connection_status]). */
        /* gdvirtual */ _getConnectionStatus(): MultiplayerPeer.ConnectionStatus
    }
    /** Automatically replicates spawnable nodes from the authority to other multiplayer peers.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_multiplayerspawner.html  
     */
    class MultiplayerSpawner<Map extends NodePathMap = any> extends Node<Map> {
        constructor(identifier?: any)
        /** Adds a scene path to spawnable scenes, making it automatically replicated from the multiplayer authority to other peers when added as children of the node pointed by [member spawn_path]. */
        addSpawnableScene(path: string): void
        
        /** Returns the count of spawnable scene paths. */
        getSpawnableSceneCount(): int64
        
        /** Returns the spawnable scene path by index. */
        getSpawnableScene(index: int64): string
        
        /** Clears all spawnable scenes. Does not despawn existing instances on remote peers. */
        clearSpawnableScenes(): void
        
        /** Requests a custom spawn, with [param data] passed to [member spawn_function] on all peers. Returns the locally spawned node instance already inside the scene tree, and added as a child of the node pointed by [member spawn_path].  
         *      
         *  **Note:** Spawnable scenes are spawned automatically. [method spawn] is only needed for custom spawns.  
         */
        spawn(data?: any /* = <any> {} */): null | Node
        get _spawnableScenes(): PackedStringArray
        set _spawnableScenes(value: PackedStringArray | string[])
        
        /** Path to the spawn root. Spawnable scenes that are added as direct children are replicated to other peers. */
        get spawnPath(): NodePath
        set spawnPath(value: NodePath | string)
        
        /** Maximum number of nodes allowed to be spawned by this spawner. Includes both spawnable scenes and custom spawns.  
         *  When set to `0` (the default), there is no limit.  
         */
        get spawnLimit(): int64
        set spawnLimit(value: int64)
        
        /** Method called on all peers when a custom [method spawn] is requested by the authority. Will receive the `data` parameter, and should return a [Node] that is not in the scene tree.  
         *      
         *  **Note:** The returned node should **not** be added to the scene with [method Node.add_child]. This is done automatically.  
         */
        get spawnFunction(): Callable
        set spawnFunction(value: Callable)
        
        /** Emitted when a spawnable scene or custom spawn was despawned by the multiplayer authority. Only called on remote peers. */
        readonly despawned: Signal<(node: Node) => void>
        
        /** Emitted when a spawnable scene or custom spawn was spawned by the multiplayer authority. Only called on remote peers. */
        readonly spawned: Signal<(node: Node) => void>
    }
    namespace MultiplayerSynchronizer {
        enum VisibilityUpdateMode {
            VisibilityProcessIdle = 0,
            VisibilityProcessPhysics = 1,
            VisibilityProcessNone = 2,
        }
    }
    /** Synchronizes properties from the multiplayer authority to the remote peers.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_multiplayersynchronizer.html  
     */
    class MultiplayerSynchronizer<Map extends NodePathMap = any> extends Node<Map> {
        /** Visibility filters are updated during process frames (see [constant Node.NOTIFICATION_INTERNAL_PROCESS]). */
        static readonly VISIBILITY_PROCESS_IDLE = 0
        
        /** Visibility filters are updated during physics frames (see [constant Node.NOTIFICATION_INTERNAL_PHYSICS_PROCESS]). */
        static readonly VISIBILITY_PROCESS_PHYSICS = 1
        
        /** Visibility filters are not updated automatically, and must be updated manually by calling [method update_visibility]. */
        static readonly VISIBILITY_PROCESS_NONE = 2
        constructor(identifier?: any)
        
        /** Updates the visibility of [param for_peer] according to visibility filters. If [param for_peer] is `0` (the default), all peers' visibilties are updated. */
        updateVisibility(forPeer?: int64 /* = 0 */): void
        
        /** Adds a peer visibility filter for this synchronizer.  
         *  [param filter] should take a peer ID [int] and return a [bool].  
         */
        addVisibilityFilter(filter: Callable): void
        
        /** Removes a peer visibility filter from this synchronizer. */
        removeVisibilityFilter(filter: Callable): void
        
        /** Sets the visibility of [param peer] to [param visible]. If [param peer] is `0`, the value of [member public_visibility] will be updated instead. */
        setVisibilityFor(peer: int64, visible: boolean): void
        
        /** Queries the current visibility for peer [param peer]. */
        getVisibilityFor(peer: int64): boolean
        
        /** Node path that replicated properties are relative to.  
         *  If [member root_path] was spawned by a [MultiplayerSpawner], the node will be also be spawned and despawned based on this synchronizer visibility options.  
         */
        get rootPath(): NodePath
        set rootPath(value: NodePath | string)
        
        /** Time interval between synchronizations. Used when the replication is set to [constant SceneReplicationConfig.REPLICATION_MODE_ALWAYS]. If set to `0.0` (the default), synchronizations happen every network process frame. */
        get replicationInterval(): float64
        set replicationInterval(value: float64)
        
        /** Time interval between delta synchronizations. Used when the replication is set to [constant SceneReplicationConfig.REPLICATION_MODE_ON_CHANGE]. If set to `0.0` (the default), delta synchronizations happen every network process frame. */
        get deltaInterval(): float64
        set deltaInterval(value: float64)
        
        /** Resource containing which properties to synchronize. */
        get replicationConfig(): null | SceneReplicationConfig
        set replicationConfig(value: null | SceneReplicationConfig)
        
        /** Specifies when visibility filters are updated (see [enum VisibilityUpdateMode] for options). */
        get visibilityUpdateMode(): int64
        set visibilityUpdateMode(value: int64)
        
        /** Whether synchronization should be visible to all peers by default. See [method set_visibility_for] and [method add_visibility_filter] for ways of configuring fine-grained visibility options. */
        get publicVisibility(): boolean
        set publicVisibility(value: boolean)
        
        /** Emitted when a new synchronization state is received by this synchronizer after the properties have been updated. */
        readonly synchronized: Signal<() => void>
        
        /** Emitted when a new delta synchronization state is received by this synchronizer after the properties have been updated. */
        readonly deltaSynchronized: Signal<() => void>
        
        /** Emitted when visibility of [param for_peer] is updated. See [method update_visibility]. */
        readonly visibilityChanged: Signal<(forPeer: int64) => void>
    }
    /** A binary [Semaphore] for synchronization of multiple [Thread]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_mutex.html  
     */
    class Mutex extends RefCounted {
        constructor(identifier?: any)
        /** Locks this [Mutex], blocks until it is unlocked by the current owner.  
         *      
         *  **Note:** This function returns without blocking if the thread already has ownership of the mutex.  
         */
        lock(): void
        
        /** Tries locking this [Mutex], but does not block. Returns `true` on success, `false` otherwise.  
         *      
         *  **Note:** This function returns `true` if the thread already has ownership of the mutex.  
         */
        tryLock(): boolean
        
        /** Unlocks this [Mutex], leaving it to other threads.  
         *      
         *  **Note:** If a thread called [method lock] or [method try_lock] multiple times while already having ownership of the mutex, it must also call [method unlock] the same number of times in order to unlock it correctly.  
         *  **Warning:** Calling [method unlock] more times that [method lock] on a given thread, thus ending up trying to unlock a non-locked mutex, is wrong and may causes crashes or deadlocks.  
         */
        unlock(): void
    }
    /** A 2D agent used to pathfind to a position while avoiding obstacles.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_navigationagent2d.html  
     */
    class NavigationAgent2D<Map extends NodePathMap = any> extends Node<Map> {
        constructor(identifier?: any)
        /** Returns the [RID] of this agent on the [NavigationServer2D]. */
        getRid(): Rid
        
        /** Based on [param value], enables or disables the specified layer in the [member navigation_layers] bitmask, given a [param layer_number] between 1 and 32. */
        setNavigationLayerValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member navigation_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        getNavigationLayerValue(layerNumber: int64): boolean
        
        /** Sets the [RID] of the navigation map this NavigationAgent node should use and also updates the `agent` on the NavigationServer. */
        setNavigationMap(navigationMap: Rid): void
        
        /** Returns the [RID] of the navigation map for this NavigationAgent node. This function returns always the map set on the NavigationAgent node and not the map of the abstract agent on the NavigationServer. If the agent map is changed directly with the NavigationServer API the NavigationAgent node will not be aware of the map change. Use [method set_navigation_map] to change the navigation map for the NavigationAgent and also update the agent on the NavigationServer. */
        getNavigationMap(): Rid
        
        /** Returns the next position in global coordinates that can be moved to, making sure that there are no static objects in the way. If the agent does not have a navigation path, it will return the position of the agent's parent. The use of this function once every physics frame is required to update the internal path logic of the NavigationAgent. */
        getNextPathPosition(): Vector2
        
        /** Replaces the internal velocity in the collision avoidance simulation with [param velocity]. When an agent is teleported to a new position this function should be used in the same frame. If called frequently this function can get agents stuck. */
        setVelocityForced(velocity: Vector2): void
        
        /** Returns the distance to the target position, using the agent's global position. The user must set [member target_position] in order for this to be accurate. */
        distanceToTarget(): float64
        
        /** Returns the path query result for the path the agent is currently following. */
        getCurrentNavigationResult(): null | NavigationPathQueryResult2D
        
        /** Returns this agent's current path from start to finish in global coordinates. The path only updates when the target position is changed or the agent requires a repath. The path array is not intended to be used in direct path movement as the agent has its own internal path logic that would get corrupted by changing the path array manually. Use the intended [method get_next_path_position] once every physics frame to receive the next path point for the agents movement as this function also updates the internal path logic. */
        getCurrentNavigationPath(): PackedVector2Array
        
        /** Returns which index the agent is currently on in the navigation path's [PackedVector2Array]. */
        getCurrentNavigationPathIndex(): int64
        
        /** Returns `true` if the agent reached the target, i.e. the agent moved within [member target_desired_distance] of the [member target_position]. It may not always be possible to reach the target but it should always be possible to reach the final position. See [method get_final_position]. */
        isTargetReached(): boolean
        
        /** Returns `true` if [method get_final_position] is within [member target_desired_distance] of the [member target_position]. */
        isTargetReachable(): boolean
        
        /** Returns `true` if the agent's navigation has finished. If the target is reachable, navigation ends when the target is reached. If the target is unreachable, navigation ends when the last waypoint of the path is reached.  
         *      
         *  **Note:** While `true` prefer to stop calling update functions like [method get_next_path_position]. This avoids jittering the standing agent due to calling repeated path updates.  
         */
        isNavigationFinished(): boolean
        
        /** Returns the reachable final position of the current navigation path in global coordinates. This position can change if the agent needs to update the navigation path which makes the agent emit the [signal path_changed] signal. */
        getFinalPosition(): Vector2
        _avoidanceDone(newVelocity: Vector3): void
        
        /** Based on [param value], enables or disables the specified layer in the [member avoidance_layers] bitmask, given a [param layer_number] between 1 and 32. */
        setAvoidanceLayerValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member avoidance_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        getAvoidanceLayerValue(layerNumber: int64): boolean
        
        /** Based on [param value], enables or disables the specified mask in the [member avoidance_mask] bitmask, given a [param mask_number] between 1 and 32. */
        setAvoidanceMaskValue(maskNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified mask of the [member avoidance_mask] bitmask is enabled, given a [param mask_number] between 1 and 32. */
        getAvoidanceMaskValue(maskNumber: int64): boolean
        
        /** If set, a new navigation path from the current agent position to the [member target_position] is requested from the NavigationServer. */
        get targetPosition(): Vector2
        set targetPosition(value: Vector2)
        
        /** The distance threshold before a path point is considered to be reached. This allows agents to not have to hit a path point on the path exactly, but only to reach its general area. If this value is set too high, the NavigationAgent will skip points on the path, which can lead to it leaving the navigation mesh. If this value is set too low, the NavigationAgent will be stuck in a repath loop because it will constantly overshoot the distance to the next point on each physics frame update. */
        get pathDesiredDistance(): float64
        set pathDesiredDistance(value: float64)
        
        /** The distance threshold before the target is considered to be reached. On reaching the target, [signal target_reached] is emitted and navigation ends (see [method is_navigation_finished] and [signal navigation_finished]).  
         *  You can make navigation end early by setting this property to a value greater than [member path_desired_distance] (navigation will end before reaching the last waypoint).  
         *  You can also make navigation end closer to the target than each individual path position by setting this property to a value lower than [member path_desired_distance] (navigation won't immediately end when reaching the last waypoint). However, if the value set is too low, the agent will be stuck in a repath loop because it will constantly overshoot the distance to the target on each physics frame update.  
         */
        get targetDesiredDistance(): float64
        set targetDesiredDistance(value: float64)
        
        /** The maximum distance the agent is allowed away from the ideal path to the final position. This can happen due to trying to avoid collisions. When the maximum distance is exceeded, it recalculates the ideal path. */
        get pathMaxDistance(): float64
        set pathMaxDistance(value: float64)
        
        /** A bitfield determining which navigation layers of navigation regions this agent will use to calculate a path. Changing it during runtime will clear the current navigation path and generate a new one, according to the new navigation layers. */
        get navigationLayers(): int64
        set navigationLayers(value: int64)
        
        /** The pathfinding algorithm used in the path query. */
        get pathfindingAlgorithm(): int64
        set pathfindingAlgorithm(value: int64)
        
        /** The path postprocessing applied to the raw path corridor found by the [member pathfinding_algorithm]. */
        get pathPostprocessing(): int64
        set pathPostprocessing(value: int64)
        
        /** Additional information to return with the navigation path. */
        get pathMetadataFlags(): int64
        set pathMetadataFlags(value: int64)
        
        /** If `true` a simplified version of the path will be returned with less critical path points removed. The simplification amount is controlled by [member simplify_epsilon]. The simplification uses a variant of Ramer-Douglas-Peucker algorithm for curve point decimation.  
         *  Path simplification can be helpful to mitigate various path following issues that can arise with certain agent types and script behaviors. E.g. "steering" agents or avoidance in "open fields".  
         */
        get simplifyPath(): boolean
        set simplifyPath(value: boolean)
        
        /** The path simplification amount in worlds units. */
        get simplifyEpsilon(): float64
        set simplifyEpsilon(value: float64)
        
        /** If `true` the agent is registered for an RVO avoidance callback on the [NavigationServer2D]. When [member velocity] is used and the processing is completed a `safe_velocity` Vector2 is received with a signal connection to [signal velocity_computed]. Avoidance processing with many registered agents has a significant performance cost and should only be enabled on agents that currently require it. */
        get avoidanceEnabled(): boolean
        set avoidanceEnabled(value: boolean)
        
        /** Sets the new wanted velocity for the agent. The avoidance simulation will try to fulfill this velocity if possible but will modify it to avoid collision with other agents and obstacles. When an agent is teleported to a new position, use [method set_velocity_forced] as well to reset the internal simulation velocity. */
        get velocity(): Vector2
        set velocity(value: Vector2)
        
        /** The radius of the avoidance agent. This is the "body" of the avoidance agent and not the avoidance maneuver starting radius (which is controlled by [member neighbor_distance]).  
         *  Does not affect normal pathfinding. To change an actor's pathfinding radius bake [NavigationPolygon] resources with a different [member NavigationPolygon.agent_radius] property and use different navigation maps for each actor size.  
         */
        get radius(): float64
        set radius(value: float64)
        
        /** The distance to search for other agents. */
        get neighborDistance(): float64
        set neighborDistance(value: float64)
        
        /** The maximum number of neighbors for the agent to consider. */
        get maxNeighbors(): int64
        set maxNeighbors(value: int64)
        
        /** The minimal amount of time for which this agent's velocities, that are computed with the collision avoidance algorithm, are safe with respect to other agents. The larger the number, the sooner the agent will respond to other agents, but less freedom in choosing its velocities. A too high value will slow down agents movement considerably. Must be positive. */
        get timeHorizonAgents(): float64
        set timeHorizonAgents(value: float64)
        
        /** The minimal amount of time for which this agent's velocities, that are computed with the collision avoidance algorithm, are safe with respect to static avoidance obstacles. The larger the number, the sooner the agent will respond to static avoidance obstacles, but less freedom in choosing its velocities. A too high value will slow down agents movement considerably. Must be positive. */
        get timeHorizonObstacles(): float64
        set timeHorizonObstacles(value: float64)
        
        /** The maximum speed that an agent can move. */
        get maxSpeed(): float64
        set maxSpeed(value: float64)
        
        /** A bitfield determining the avoidance layers for this NavigationAgent. Other agents with a matching bit on the [member avoidance_mask] will avoid this agent. */
        get avoidanceLayers(): int64
        set avoidanceLayers(value: int64)
        
        /** A bitfield determining what other avoidance agents and obstacles this NavigationAgent will avoid when a bit matches at least one of their [member avoidance_layers]. */
        get avoidanceMask(): int64
        set avoidanceMask(value: int64)
        
        /** The agent does not adjust the velocity for other agents that would match the [member avoidance_mask] but have a lower [member avoidance_priority]. This in turn makes the other agents with lower priority adjust their velocities even more to avoid collision with this agent. */
        get avoidancePriority(): float64
        set avoidancePriority(value: float64)
        
        /** If `true` shows debug visuals for this agent. */
        get debugEnabled(): boolean
        set debugEnabled(value: boolean)
        
        /** If `true` uses the defined [member debug_path_custom_color] for this agent instead of global color. */
        get debugUseCustom(): boolean
        set debugUseCustom(value: boolean)
        
        /** If [member debug_use_custom] is `true` uses this color for this agent instead of global color. */
        get debugPathCustomColor(): Color
        set debugPathCustomColor(value: Color)
        
        /** If [member debug_use_custom] is `true` uses this rasterized point size for rendering path points for this agent instead of global point size. */
        get debugPathCustomPointSize(): float64
        set debugPathCustomPointSize(value: float64)
        
        /** If [member debug_use_custom] is `true` uses this line width for rendering paths for this agent instead of global line width. */
        get debugPathCustomLineWidth(): float64
        set debugPathCustomLineWidth(value: float64)
        
        /** Emitted when the agent had to update the loaded path:  
         *  - because path was previously empty.  
         *  - because navigation map has changed.  
         *  - because agent pushed further away from the current path segment than the [member path_max_distance].  
         */
        readonly pathChanged: Signal<() => void>
        
        /** Signals that the agent reached the target, i.e. the agent moved within [member target_desired_distance] of the [member target_position]. This signal is emitted only once per loaded path.  
         *  This signal will be emitted just before [signal navigation_finished] when the target is reachable.  
         *  It may not always be possible to reach the target but it should always be possible to reach the final position. See [method get_final_position].  
         */
        readonly targetReached: Signal<() => void>
        
        /** Signals that the agent reached a waypoint. Emitted when the agent moves within [member path_desired_distance] of the next position of the path.  
         *  The details dictionary may contain the following keys depending on the value of [member path_metadata_flags]:  
         *  - `position`: The position of the waypoint that was reached.  
         *  - `type`: The type of navigation primitive (region or link) that contains this waypoint.  
         *  - `rid`: The [RID] of the containing navigation primitive (region or link).  
         *  - `owner`: The object which manages the containing navigation primitive (region or link).  
         */
        readonly waypointReached: Signal<(details: GDictionary) => void>
        
        /** Signals that the agent reached a navigation link. Emitted when the agent moves within [member path_desired_distance] of the next position of the path when that position is a navigation link.  
         *  The details dictionary may contain the following keys depending on the value of [member path_metadata_flags]:  
         *  - `position`: The start position of the link that was reached.  
         *  - `type`: Always [constant NavigationPathQueryResult2D.PATH_SEGMENT_TYPE_LINK].  
         *  - `rid`: The [RID] of the link.  
         *  - `owner`: The object which manages the link (usually [NavigationLink2D]).  
         *  - `link_entry_position`: If `owner` is available and the owner is a [NavigationLink2D], it will contain the global position of the link's point the agent is entering.  
         *  - `link_exit_position`: If `owner` is available and the owner is a [NavigationLink2D], it will contain the global position of the link's point which the agent is exiting.  
         */
        readonly linkReached: Signal<(details: GDictionary) => void>
        
        /** Signals that the agent's navigation has finished. If the target is reachable, navigation ends when the target is reached. If the target is unreachable, navigation ends when the last waypoint of the path is reached. This signal is emitted only once per loaded path.  
         *  This signal will be emitted just after [signal target_reached] when the target is reachable.  
         */
        readonly navigationFinished: Signal<() => void>
        
        /** Notifies when the collision avoidance velocity is calculated. Emitted every update as long as [member avoidance_enabled] is `true` and the agent has a navigation map. */
        readonly velocityComputed: Signal<(safeVelocity: Vector2) => void>
    }
    /** A 3D agent used to pathfind to a position while avoiding obstacles.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_navigationagent3d.html  
     */
    class NavigationAgent3D<Map extends NodePathMap = any> extends Node<Map> {
        constructor(identifier?: any)
        /** Returns the [RID] of this agent on the [NavigationServer3D]. */
        getRid(): Rid
        
        /** Based on [param value], enables or disables the specified layer in the [member navigation_layers] bitmask, given a [param layer_number] between 1 and 32. */
        setNavigationLayerValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member navigation_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        getNavigationLayerValue(layerNumber: int64): boolean
        
        /** Sets the [RID] of the navigation map this NavigationAgent node should use and also updates the `agent` on the NavigationServer. */
        setNavigationMap(navigationMap: Rid): void
        
        /** Returns the [RID] of the navigation map for this NavigationAgent node. This function returns always the map set on the NavigationAgent node and not the map of the abstract agent on the NavigationServer. If the agent map is changed directly with the NavigationServer API the NavigationAgent node will not be aware of the map change. Use [method set_navigation_map] to change the navigation map for the NavigationAgent and also update the agent on the NavigationServer. */
        getNavigationMap(): Rid
        
        /** Returns the next position in global coordinates that can be moved to, making sure that there are no static objects in the way. If the agent does not have a navigation path, it will return the position of the agent's parent. The use of this function once every physics frame is required to update the internal path logic of the NavigationAgent. */
        getNextPathPosition(): Vector3
        
        /** Replaces the internal velocity in the collision avoidance simulation with [param velocity]. When an agent is teleported to a new position this function should be used in the same frame. If called frequently this function can get agents stuck. */
        setVelocityForced(velocity: Vector3): void
        
        /** Returns the distance to the target position, using the agent's global position. The user must set [member target_position] in order for this to be accurate. */
        distanceToTarget(): float64
        
        /** Returns the path query result for the path the agent is currently following. */
        getCurrentNavigationResult(): null | NavigationPathQueryResult3D
        
        /** Returns this agent's current path from start to finish in global coordinates. The path only updates when the target position is changed or the agent requires a repath. The path array is not intended to be used in direct path movement as the agent has its own internal path logic that would get corrupted by changing the path array manually. Use the intended [method get_next_path_position] once every physics frame to receive the next path point for the agents movement as this function also updates the internal path logic. */
        getCurrentNavigationPath(): PackedVector3Array
        
        /** Returns which index the agent is currently on in the navigation path's [PackedVector3Array]. */
        getCurrentNavigationPathIndex(): int64
        
        /** Returns `true` if the agent reached the target, i.e. the agent moved within [member target_desired_distance] of the [member target_position]. It may not always be possible to reach the target but it should always be possible to reach the final position. See [method get_final_position]. */
        isTargetReached(): boolean
        
        /** Returns `true` if [method get_final_position] is within [member target_desired_distance] of the [member target_position]. */
        isTargetReachable(): boolean
        
        /** Returns `true` if the agent's navigation has finished. If the target is reachable, navigation ends when the target is reached. If the target is unreachable, navigation ends when the last waypoint of the path is reached.  
         *      
         *  **Note:** While `true` prefer to stop calling update functions like [method get_next_path_position]. This avoids jittering the standing agent due to calling repeated path updates.  
         */
        isNavigationFinished(): boolean
        
        /** Returns the reachable final position of the current navigation path in global coordinates. This position can change if the agent needs to update the navigation path which makes the agent emit the [signal path_changed] signal. */
        getFinalPosition(): Vector3
        _avoidanceDone(newVelocity: Vector3): void
        
        /** Based on [param value], enables or disables the specified layer in the [member avoidance_layers] bitmask, given a [param layer_number] between 1 and 32. */
        setAvoidanceLayerValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member avoidance_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        getAvoidanceLayerValue(layerNumber: int64): boolean
        
        /** Based on [param value], enables or disables the specified mask in the [member avoidance_mask] bitmask, given a [param mask_number] between 1 and 32. */
        setAvoidanceMaskValue(maskNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified mask of the [member avoidance_mask] bitmask is enabled, given a [param mask_number] between 1 and 32. */
        getAvoidanceMaskValue(maskNumber: int64): boolean
        
        /** If set, a new navigation path from the current agent position to the [member target_position] is requested from the NavigationServer. */
        get targetPosition(): Vector3
        set targetPosition(value: Vector3)
        
        /** The distance threshold before a path point is considered to be reached. This allows agents to not have to hit a path point on the path exactly, but only to reach its general area. If this value is set too high, the NavigationAgent will skip points on the path, which can lead to it leaving the navigation mesh. If this value is set too low, the NavigationAgent will be stuck in a repath loop because it will constantly overshoot the distance to the next point on each physics frame update. */
        get pathDesiredDistance(): float64
        set pathDesiredDistance(value: float64)
        
        /** The distance threshold before the target is considered to be reached. On reaching the target, [signal target_reached] is emitted and navigation ends (see [method is_navigation_finished] and [signal navigation_finished]).  
         *  You can make navigation end early by setting this property to a value greater than [member path_desired_distance] (navigation will end before reaching the last waypoint).  
         *  You can also make navigation end closer to the target than each individual path position by setting this property to a value lower than [member path_desired_distance] (navigation won't immediately end when reaching the last waypoint). However, if the value set is too low, the agent will be stuck in a repath loop because it will constantly overshoot the distance to the target on each physics frame update.  
         */
        get targetDesiredDistance(): float64
        set targetDesiredDistance(value: float64)
        
        /** The height offset is subtracted from the y-axis value of any vector path position for this NavigationAgent. The NavigationAgent height offset does not change or influence the navigation mesh or pathfinding query result. Additional navigation maps that use regions with navigation meshes that the developer baked with appropriate agent radius or height values are required to support different-sized agents. */
        get pathHeightOffset(): float64
        set pathHeightOffset(value: float64)
        
        /** The maximum distance the agent is allowed away from the ideal path to the final position. This can happen due to trying to avoid collisions. When the maximum distance is exceeded, it recalculates the ideal path. */
        get pathMaxDistance(): float64
        set pathMaxDistance(value: float64)
        
        /** A bitfield determining which navigation layers of navigation regions this agent will use to calculate a path. Changing it during runtime will clear the current navigation path and generate a new one, according to the new navigation layers. */
        get navigationLayers(): int64
        set navigationLayers(value: int64)
        
        /** The pathfinding algorithm used in the path query. */
        get pathfindingAlgorithm(): int64
        set pathfindingAlgorithm(value: int64)
        
        /** The path postprocessing applied to the raw path corridor found by the [member pathfinding_algorithm]. */
        get pathPostprocessing(): int64
        set pathPostprocessing(value: int64)
        
        /** Additional information to return with the navigation path. */
        get pathMetadataFlags(): int64
        set pathMetadataFlags(value: int64)
        
        /** If `true` a simplified version of the path will be returned with less critical path points removed. The simplification amount is controlled by [member simplify_epsilon]. The simplification uses a variant of Ramer-Douglas-Peucker algorithm for curve point decimation.  
         *  Path simplification can be helpful to mitigate various path following issues that can arise with certain agent types and script behaviors. E.g. "steering" agents or avoidance in "open fields".  
         */
        get simplifyPath(): boolean
        set simplifyPath(value: boolean)
        
        /** The path simplification amount in worlds units. */
        get simplifyEpsilon(): float64
        set simplifyEpsilon(value: float64)
        
        /** If `true` the agent is registered for an RVO avoidance callback on the [NavigationServer3D]. When [member velocity] is set and the processing is completed a `safe_velocity` Vector3 is received with a signal connection to [signal velocity_computed]. Avoidance processing with many registered agents has a significant performance cost and should only be enabled on agents that currently require it. */
        get avoidanceEnabled(): boolean
        set avoidanceEnabled(value: boolean)
        
        /** Sets the new wanted velocity for the agent. The avoidance simulation will try to fulfill this velocity if possible but will modify it to avoid collision with other agents and obstacles. When an agent is teleported to a new position, use [method set_velocity_forced] as well to reset the internal simulation velocity. */
        get velocity(): Vector3
        set velocity(value: Vector3)
        
        /** The height of the avoidance agent. Agents will ignore other agents or obstacles that are above or below their current position + height in 2D avoidance. Does nothing in 3D avoidance which uses radius spheres alone. */
        get height(): float64
        set height(value: float64)
        
        /** The radius of the avoidance agent. This is the "body" of the avoidance agent and not the avoidance maneuver starting radius (which is controlled by [member neighbor_distance]).  
         *  Does not affect normal pathfinding. To change an actor's pathfinding radius bake [NavigationMesh] resources with a different [member NavigationMesh.agent_radius] property and use different navigation maps for each actor size.  
         */
        get radius(): float64
        set radius(value: float64)
        
        /** The distance to search for other agents. */
        get neighborDistance(): float64
        set neighborDistance(value: float64)
        
        /** The maximum number of neighbors for the agent to consider. */
        get maxNeighbors(): int64
        set maxNeighbors(value: int64)
        
        /** The minimal amount of time for which this agent's velocities, that are computed with the collision avoidance algorithm, are safe with respect to other agents. The larger the number, the sooner the agent will respond to other agents, but less freedom in choosing its velocities. A too high value will slow down agents movement considerably. Must be positive. */
        get timeHorizonAgents(): float64
        set timeHorizonAgents(value: float64)
        
        /** The minimal amount of time for which this agent's velocities, that are computed with the collision avoidance algorithm, are safe with respect to static avoidance obstacles. The larger the number, the sooner the agent will respond to static avoidance obstacles, but less freedom in choosing its velocities. A too high value will slow down agents movement considerably. Must be positive. */
        get timeHorizonObstacles(): float64
        set timeHorizonObstacles(value: float64)
        
        /** The maximum speed that an agent can move. */
        get maxSpeed(): float64
        set maxSpeed(value: float64)
        
        /** If `true`, the agent calculates avoidance velocities in 3D omnidirectionally, e.g. for games that take place in air, underwater or space. Agents using 3D avoidance only avoid other agents using 3D avoidance, and react to radius-based avoidance obstacles. They ignore any vertex-based obstacles.  
         *  If `false`, the agent calculates avoidance velocities in 2D along the x and z-axes, ignoring the y-axis. Agents using 2D avoidance only avoid other agents using 2D avoidance, and react to radius-based avoidance obstacles or vertex-based avoidance obstacles. Other agents using 2D avoidance that are below or above their current position including [member height] are ignored.  
         */
        get use3DAvoidance(): boolean
        set use3DAvoidance(value: boolean)
        
        /** If `true`, and the agent uses 2D avoidance, it will remember the set y-axis velocity and reapply it after the avoidance step. While 2D avoidance has no y-axis and simulates on a flat plane this setting can help to soften the most obvious clipping on uneven 3D geometry. */
        get keepYVelocity(): boolean
        set keepYVelocity(value: boolean)
        
        /** A bitfield determining the avoidance layers for this NavigationAgent. Other agents with a matching bit on the [member avoidance_mask] will avoid this agent. */
        get avoidanceLayers(): int64
        set avoidanceLayers(value: int64)
        
        /** A bitfield determining what other avoidance agents and obstacles this NavigationAgent will avoid when a bit matches at least one of their [member avoidance_layers]. */
        get avoidanceMask(): int64
        set avoidanceMask(value: int64)
        
        /** The agent does not adjust the velocity for other agents that would match the [member avoidance_mask] but have a lower [member avoidance_priority]. This in turn makes the other agents with lower priority adjust their velocities even more to avoid collision with this agent. */
        get avoidancePriority(): float64
        set avoidancePriority(value: float64)
        
        /** If `true` shows debug visuals for this agent. */
        get debugEnabled(): boolean
        set debugEnabled(value: boolean)
        
        /** If `true` uses the defined [member debug_path_custom_color] for this agent instead of global color. */
        get debugUseCustom(): boolean
        set debugUseCustom(value: boolean)
        
        /** If [member debug_use_custom] is `true` uses this color for this agent instead of global color. */
        get debugPathCustomColor(): Color
        set debugPathCustomColor(value: Color)
        
        /** If [member debug_use_custom] is `true` uses this rasterized point size for rendering path points for this agent instead of global point size. */
        get debugPathCustomPointSize(): float64
        set debugPathCustomPointSize(value: float64)
        
        /** Emitted when the agent had to update the loaded path:  
         *  - because path was previously empty.  
         *  - because navigation map has changed.  
         *  - because agent pushed further away from the current path segment than the [member path_max_distance].  
         */
        readonly pathChanged: Signal<() => void>
        
        /** Signals that the agent reached the target, i.e. the agent moved within [member target_desired_distance] of the [member target_position]. This signal is emitted only once per loaded path.  
         *  This signal will be emitted just before [signal navigation_finished] when the target is reachable.  
         *  It may not always be possible to reach the target but it should always be possible to reach the final position. See [method get_final_position].  
         */
        readonly targetReached: Signal<() => void>
        
        /** Signals that the agent reached a waypoint. Emitted when the agent moves within [member path_desired_distance] of the next position of the path.  
         *  The details dictionary may contain the following keys depending on the value of [member path_metadata_flags]:  
         *  - `position`: The position of the waypoint that was reached.  
         *  - `type`: The type of navigation primitive (region or link) that contains this waypoint.  
         *  - `rid`: The [RID] of the containing navigation primitive (region or link).  
         *  - `owner`: The object which manages the containing navigation primitive (region or link).  
         */
        readonly waypointReached: Signal<(details: GDictionary) => void>
        
        /** Signals that the agent reached a navigation link. Emitted when the agent moves within [member path_desired_distance] of the next position of the path when that position is a navigation link.  
         *  The details dictionary may contain the following keys depending on the value of [member path_metadata_flags]:  
         *  - `position`: The start position of the link that was reached.  
         *  - `type`: Always [constant NavigationPathQueryResult3D.PATH_SEGMENT_TYPE_LINK].  
         *  - `rid`: The [RID] of the link.  
         *  - `owner`: The object which manages the link (usually [NavigationLink3D]).  
         *  - `link_entry_position`: If `owner` is available and the owner is a [NavigationLink3D], it will contain the global position of the link's point the agent is entering.  
         *  - `link_exit_position`: If `owner` is available and the owner is a [NavigationLink3D], it will contain the global position of the link's point which the agent is exiting.  
         */
        readonly linkReached: Signal<(details: GDictionary) => void>
        
        /** Signals that the agent's navigation has finished. If the target is reachable, navigation ends when the target is reached. If the target is unreachable, navigation ends when the last waypoint of the path is reached. This signal is emitted only once per loaded path.  
         *  This signal will be emitted just after [signal target_reached] when the target is reachable.  
         */
        readonly navigationFinished: Signal<() => void>
        
        /** Notifies when the collision avoidance velocity is calculated. Emitted every update as long as [member avoidance_enabled] is `true` and the agent has a navigation map. */
        readonly velocityComputed: Signal<(safeVelocity: Vector3) => void>
    }
    /** A link between two positions on [NavigationRegion2D]s that agents can be routed through.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_navigationlink2d.html  
     */
    class NavigationLink2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** Returns the [RID] of this link on the [NavigationServer2D]. */
        getRid(): Rid
        
        /** Sets the [RID] of the navigation map this link should use. By default the link will automatically join the [World2D] default navigation map so this function is only required to override the default map. */
        setNavigationMap(navigationMap: Rid): void
        
        /** Returns the current navigation map [RID] used by this link. */
        getNavigationMap(): Rid
        
        /** Based on [param value], enables or disables the specified layer in the [member navigation_layers] bitmask, given a [param layer_number] between 1 and 32. */
        setNavigationLayerValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member navigation_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        getNavigationLayerValue(layerNumber: int64): boolean
        
        /** Sets the [member start_position] that is relative to the link from a global [param position]. */
        setGlobalStartPosition(position: Vector2): void
        
        /** Returns the [member start_position] that is relative to the link as a global position. */
        getGlobalStartPosition(): Vector2
        
        /** Sets the [member end_position] that is relative to the link from a global [param position]. */
        setGlobalEndPosition(position: Vector2): void
        
        /** Returns the [member end_position] that is relative to the link as a global position. */
        getGlobalEndPosition(): Vector2
        
        /** Whether this link is currently active. If `false`, [method NavigationServer2D.map_get_path] will ignore this link. */
        get enabled(): boolean
        set enabled(value: boolean)
        
        /** Whether this link can be traveled in both directions or only from [member start_position] to [member end_position]. */
        get bidirectional(): boolean
        set bidirectional(value: boolean)
        
        /** A bitfield determining all navigation layers the link belongs to. These navigation layers will be checked when requesting a path with [method NavigationServer2D.map_get_path]. */
        get navigationLayers(): int64
        set navigationLayers(value: int64)
        
        /** Starting position of the link.  
         *  This position will search out the nearest polygon in the navigation mesh to attach to.  
         *  The distance the link will search is controlled by [method NavigationServer2D.map_set_link_connection_radius].  
         */
        get startPosition(): Vector2
        set startPosition(value: Vector2)
        
        /** Ending position of the link.  
         *  This position will search out the nearest polygon in the navigation mesh to attach to.  
         *  The distance the link will search is controlled by [method NavigationServer2D.map_set_link_connection_radius].  
         */
        get endPosition(): Vector2
        set endPosition(value: Vector2)
        
        /** When pathfinding enters this link from another regions navigation mesh the [member enter_cost] value is added to the path distance for determining the shortest path. */
        get enterCost(): float64
        set enterCost(value: float64)
        
        /** When pathfinding moves along the link the traveled distance is multiplied with [member travel_cost] for determining the shortest path. */
        get travelCost(): float64
        set travelCost(value: float64)
    }
    /** A link between two positions on [NavigationRegion3D]s that agents can be routed through.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_navigationlink3d.html  
     */
    class NavigationLink3D<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        /** Returns the [RID] of this link on the [NavigationServer3D]. */
        getRid(): Rid
        
        /** Sets the [RID] of the navigation map this link should use. By default the link will automatically join the [World3D] default navigation map so this function is only required to override the default map. */
        setNavigationMap(navigationMap: Rid): void
        
        /** Returns the current navigation map [RID] used by this link. */
        getNavigationMap(): Rid
        
        /** Based on [param value], enables or disables the specified layer in the [member navigation_layers] bitmask, given a [param layer_number] between 1 and 32. */
        setNavigationLayerValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member navigation_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        getNavigationLayerValue(layerNumber: int64): boolean
        
        /** Sets the [member start_position] that is relative to the link from a global [param position]. */
        setGlobalStartPosition(position: Vector3): void
        
        /** Returns the [member start_position] that is relative to the link as a global position. */
        getGlobalStartPosition(): Vector3
        
        /** Sets the [member end_position] that is relative to the link from a global [param position]. */
        setGlobalEndPosition(position: Vector3): void
        
        /** Returns the [member end_position] that is relative to the link as a global position. */
        getGlobalEndPosition(): Vector3
        
        /** Whether this link is currently active. If `false`, [method NavigationServer3D.map_get_path] will ignore this link. */
        get enabled(): boolean
        set enabled(value: boolean)
        
        /** Whether this link can be traveled in both directions or only from [member start_position] to [member end_position]. */
        get bidirectional(): boolean
        set bidirectional(value: boolean)
        
        /** A bitfield determining all navigation layers the link belongs to. These navigation layers will be checked when requesting a path with [method NavigationServer3D.map_get_path]. */
        get navigationLayers(): int64
        set navigationLayers(value: int64)
        
        /** Starting position of the link.  
         *  This position will search out the nearest polygon in the navigation mesh to attach to.  
         *  The distance the link will search is controlled by [method NavigationServer3D.map_set_link_connection_radius].  
         */
        get startPosition(): Vector3
        set startPosition(value: Vector3)
        
        /** Ending position of the link.  
         *  This position will search out the nearest polygon in the navigation mesh to attach to.  
         *  The distance the link will search is controlled by [method NavigationServer3D.map_set_link_connection_radius].  
         */
        get endPosition(): Vector3
        set endPosition(value: Vector3)
        
        /** When pathfinding enters this link from another regions navigation mesh the [member enter_cost] value is added to the path distance for determining the shortest path. */
        get enterCost(): float64
        set enterCost(value: float64)
        
        /** When pathfinding moves along the link the traveled distance is multiplied with [member travel_cost] for determining the shortest path. */
        get travelCost(): float64
        set travelCost(value: float64)
    }
    namespace NavigationMesh {
        enum SamplePartitionType {
            SamplePartitionWatershed = 0,
            SamplePartitionMonotone = 1,
            SamplePartitionLayers = 2,
            SamplePartitionMax = 3,
        }
        enum ParsedGeometryType {
            ParsedGeometryMeshInstances = 0,
            ParsedGeometryStaticColliders = 1,
            ParsedGeometryBoth = 2,
            ParsedGeometryMax = 3,
        }
        enum SourceGeometryMode {
            SourceGeometryRootNodeChildren = 0,
            SourceGeometryGroupsWithChildren = 1,
            SourceGeometryGroupsExplicit = 2,
            SourceGeometryMax = 3,
        }
    }
    /** A navigation mesh that defines traversable areas and obstacles.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_navigationmesh.html  
     */
    class NavigationMesh extends Resource {
        /** Watershed partitioning. Generally the best choice if you precompute the navigation mesh, use this if you have large open areas. */
        static readonly SAMPLE_PARTITION_WATERSHED = 0
        
        /** Monotone partitioning. Use this if you want fast navigation mesh generation. */
        static readonly SAMPLE_PARTITION_MONOTONE = 1
        
        /** Layer partitioning. Good choice to use for tiled navigation mesh with medium and small sized tiles. */
        static readonly SAMPLE_PARTITION_LAYERS = 2
        
        /** Represents the size of the [enum SamplePartitionType] enum. */
        static readonly SAMPLE_PARTITION_MAX = 3
        
        /** Parses mesh instances as geometry. This includes [MeshInstance3D], [CSGShape3D], and [GridMap] nodes. */
        static readonly PARSED_GEOMETRY_MESH_INSTANCES = 0
        
        /** Parses [StaticBody3D] colliders as geometry. The collider should be in any of the layers specified by [member geometry_collision_mask]. */
        static readonly PARSED_GEOMETRY_STATIC_COLLIDERS = 1
        
        /** Both [constant PARSED_GEOMETRY_MESH_INSTANCES] and [constant PARSED_GEOMETRY_STATIC_COLLIDERS]. */
        static readonly PARSED_GEOMETRY_BOTH = 2
        
        /** Represents the size of the [enum ParsedGeometryType] enum. */
        static readonly PARSED_GEOMETRY_MAX = 3
        
        /** Scans the child nodes of the root node recursively for geometry. */
        static readonly SOURCE_GEOMETRY_ROOT_NODE_CHILDREN = 0
        
        /** Scans nodes in a group and their child nodes recursively for geometry. The group is specified by [member geometry_source_group_name]. */
        static readonly SOURCE_GEOMETRY_GROUPS_WITH_CHILDREN = 1
        
        /** Uses nodes in a group for geometry. The group is specified by [member geometry_source_group_name]. */
        static readonly SOURCE_GEOMETRY_GROUPS_EXPLICIT = 2
        
        /** Represents the size of the [enum SourceGeometryMode] enum. */
        static readonly SOURCE_GEOMETRY_MAX = 3
        constructor(identifier?: any)
        
        /** Based on [param value], enables or disables the specified layer in the [member geometry_collision_mask], given a [param layer_number] between 1 and 32. */
        setCollisionMaskValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member geometry_collision_mask] is enabled, given a [param layer_number] between 1 and 32. */
        getCollisionMaskValue(layerNumber: int64): boolean
        
        /** Adds a polygon using the indices of the vertices you get when calling [method get_vertices]. */
        addPolygon(polygon: PackedInt32Array | int32[]): void
        
        /** Returns the number of polygons in the navigation mesh. */
        getPolygonCount(): int64
        
        /** Returns a [PackedInt32Array] containing the indices of the vertices of a created polygon. */
        getPolygon(idx: int64): PackedInt32Array
        
        /** Clears the array of polygons, but it doesn't clear the array of vertices. */
        clearPolygons(): void
        
        /** Initializes the navigation mesh by setting the vertices and indices according to a [Mesh].  
         *      
         *  **Note:** The given [param mesh] must be of type [constant Mesh.PRIMITIVE_TRIANGLES] and have an index array.  
         */
        createFromMesh(mesh: Mesh): void
        
        /** Clears the internal arrays for vertices and polygon indices. */
        clear(): void
        get vertices(): PackedVector3Array
        set vertices(value: PackedVector3Array | Vector3[])
        get polygons(): GArray
        set polygons(value: GArray)
        
        /** Partitioning algorithm for creating the navigation mesh polys. See [enum SamplePartitionType] for possible values. */
        get samplePartitionType(): int64
        set samplePartitionType(value: int64)
        
        /** Determines which type of nodes will be parsed as geometry. See [enum ParsedGeometryType] for possible values. */
        get geometryParsedGeometryType(): int64
        set geometryParsedGeometryType(value: int64)
        
        /** The physics layers to scan for static colliders.  
         *  Only used when [member geometry_parsed_geometry_type] is [constant PARSED_GEOMETRY_STATIC_COLLIDERS] or [constant PARSED_GEOMETRY_BOTH].  
         */
        get geometryCollisionMask(): int64
        set geometryCollisionMask(value: int64)
        
        /** The source of the geometry used when baking. See [enum SourceGeometryMode] for possible values. */
        get geometrySourceGeometryMode(): int64
        set geometrySourceGeometryMode(value: int64)
        
        /** The name of the group to scan for geometry.  
         *  Only used when [member geometry_source_geometry_mode] is [constant SOURCE_GEOMETRY_GROUPS_WITH_CHILDREN] or [constant SOURCE_GEOMETRY_GROUPS_EXPLICIT].  
         */
        get geometrySourceGroupName(): string
        set geometrySourceGroupName(value: string)
        
        /** The cell size used to rasterize the navigation mesh vertices on the XZ plane. Must match with the cell size on the navigation map. */
        get cellSize(): float64
        set cellSize(value: float64)
        
        /** The cell height used to rasterize the navigation mesh vertices on the Y axis. Must match with the cell height on the navigation map. */
        get cellHeight(): float64
        set cellHeight(value: float64)
        
        /** The size of the non-navigable border around the bake bounding area.  
         *  In conjunction with the [member filter_baking_aabb] and a [member edge_max_error] value at `1.0` or below the border size can be used to bake tile aligned navigation meshes without the tile edges being shrunk by [member agent_radius].  
         *      
         *  **Note:** While baking and not zero, this value will be rounded up to the nearest multiple of [member cell_size].  
         */
        get borderSize(): float64
        set borderSize(value: float64)
        
        /** The minimum floor to ceiling height that will still allow the floor area to be considered walkable.  
         *      
         *  **Note:** While baking, this value will be rounded up to the nearest multiple of [member cell_height].  
         */
        get agentHeight(): float64
        set agentHeight(value: float64)
        
        /** The distance to erode/shrink the walkable area of the heightfield away from obstructions.  
         *      
         *  **Note:** While baking, this value will be rounded up to the nearest multiple of [member cell_size].  
         */
        get agentRadius(): float64
        set agentRadius(value: float64)
        
        /** The minimum ledge height that is considered to still be traversable.  
         *      
         *  **Note:** While baking, this value will be rounded down to the nearest multiple of [member cell_height].  
         */
        get agentMaxClimb(): float64
        set agentMaxClimb(value: float64)
        
        /** The maximum slope that is considered walkable, in degrees. */
        get agentMaxSlope(): float64
        set agentMaxSlope(value: float64)
        
        /** The minimum size of a region for it to be created.  
         *      
         *  **Note:** This value will be squared to calculate the minimum number of cells allowed to form isolated island areas. For example, a value of 8 will set the number of cells to 64.  
         */
        get regionMinSize(): float64
        set regionMinSize(value: float64)
        
        /** Any regions with a size smaller than this will be merged with larger regions if possible.  
         *      
         *  **Note:** This value will be squared to calculate the number of cells. For example, a value of 20 will set the number of cells to 400.  
         */
        get regionMergeSize(): float64
        set regionMergeSize(value: float64)
        
        /** The maximum allowed length for contour edges along the border of the mesh. A value of `0.0` disables this feature.  
         *      
         *  **Note:** While baking, this value will be rounded up to the nearest multiple of [member cell_size].  
         */
        get edgeMaxLength(): float64
        set edgeMaxLength(value: float64)
        
        /** The maximum distance a simplified contour's border edges should deviate the original raw contour. */
        get edgeMaxError(): float64
        set edgeMaxError(value: float64)
        
        /** The maximum number of vertices allowed for polygons generated during the contour to polygon conversion process. */
        get verticesPerPolygon(): float64
        set verticesPerPolygon(value: float64)
        
        /** The sampling distance to use when generating the detail mesh, in cell unit. */
        get detailSampleDistance(): float64
        set detailSampleDistance(value: float64)
        
        /** The maximum distance the detail mesh surface should deviate from heightfield, in cell unit. */
        get detailSampleMaxError(): float64
        set detailSampleMaxError(value: float64)
        
        /** If `true`, marks non-walkable spans as walkable if their maximum is within [member agent_max_climb] of a walkable neighbor. */
        get filterLowHangingObstacles(): boolean
        set filterLowHangingObstacles(value: boolean)
        
        /** If `true`, marks spans that are ledges as non-walkable. */
        get filterLedgeSpans(): boolean
        set filterLedgeSpans(value: boolean)
        
        /** If `true`, marks walkable spans as not walkable if the clearance above the span is less than [member agent_height]. */
        get filterWalkableLowHeightSpans(): boolean
        set filterWalkableLowHeightSpans(value: boolean)
        
        /** If the baking [AABB] has a volume the navigation mesh baking will be restricted to its enclosing area. */
        get filterBakingAabb(): Aabb
        set filterBakingAabb(value: Aabb)
        
        /** The position offset applied to the [member filter_baking_aabb] [AABB]. */
        get filterBakingAabbOffset(): Vector3
        set filterBakingAabbOffset(value: Vector3)
    }
    /** Container for parsed source geometry data used in navigation mesh baking.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_navigationmeshsourcegeometrydata2d.html  
     */
    class NavigationMeshSourceGeometryData2D extends Resource {
        constructor(identifier?: any)
        /** Clears the internal data. */
        clear(): void
        
        /** Returns `true` when parsed source geometry data exists. */
        hasData(): boolean
        
        /** Appends another array of [param traversable_outlines] at the end of the existing traversable outlines array. */
        appendTraversableOutlines(traversableOutlines: GArray): void
        
        /** Appends another array of [param obstruction_outlines] at the end of the existing obstruction outlines array. */
        appendObstructionOutlines(obstructionOutlines: GArray): void
        
        /** Adds the outline points of a shape as traversable area. */
        addTraversableOutline(shapeOutline: PackedVector2Array | Vector2[]): void
        
        /** Adds the outline points of a shape as obstructed area. */
        addObstructionOutline(shapeOutline: PackedVector2Array | Vector2[]): void
        
        /** Adds the geometry data of another [NavigationMeshSourceGeometryData2D] to the navigation mesh baking data. */
        merge(otherGeometry: NavigationMeshSourceGeometryData2D): void
        
        /** Adds a projected obstruction shape to the source geometry. If [param carve] is `true` the carved shape will not be affected by additional offsets (e.g. agent radius) of the navigation mesh baking process. */
        addProjectedObstruction(vertices: PackedVector2Array | Vector2[], carve: boolean): void
        
        /** Clears all projected obstructions. */
        clearProjectedObstructions(): void
        
        /** Returns an axis-aligned bounding box that covers all the stored geometry data. The bounds are calculated when calling this function with the result cached until further geometry changes are made. */
        getBounds(): Rect2
        get traversableOutlines(): GArray
        set traversableOutlines(value: GArray)
        get obstructionOutlines(): GArray
        set obstructionOutlines(value: GArray)
        get projectedObstructions(): GArray
        set projectedObstructions(value: GArray)
    }
    /** Container for parsed source geometry data used in navigation mesh baking.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_navigationmeshsourcegeometrydata3d.html  
     */
    class NavigationMeshSourceGeometryData3D extends Resource {
        constructor(identifier?: any)
        /** Appends arrays of [param vertices] and [param indices] at the end of the existing arrays. Adds the existing index as an offset to the appended indices. */
        appendArrays(vertices: PackedFloat32Array | float32[], indices: PackedInt32Array | int32[]): void
        
        /** Clears the internal data. */
        clear(): void
        
        /** Returns `true` when parsed source geometry data exists. */
        hasData(): boolean
        
        /** Adds the geometry data of a [Mesh] resource to the navigation mesh baking data. The mesh must have valid triangulated mesh data to be considered. Since [NavigationMesh] resources have no transform, all vertex positions need to be offset by the node's transform using [param xform]. */
        addMesh(mesh: Mesh, xform: Transform3D): void
        
        /** Adds an [Array] the size of [constant Mesh.ARRAY_MAX] and with vertices at index [constant Mesh.ARRAY_VERTEX] and indices at index [constant Mesh.ARRAY_INDEX] to the navigation mesh baking data. The array must have valid triangulated mesh data to be considered. Since [NavigationMesh] resources have no transform, all vertex positions need to be offset by the node's transform using [param xform]. */
        addMeshArray(meshArray: GArray, xform: Transform3D): void
        
        /** Adds an array of vertex positions to the geometry data for navigation mesh baking to form triangulated faces. For each face the array must have three vertex positions in clockwise winding order. Since [NavigationMesh] resources have no transform, all vertex positions need to be offset by the node's transform using [param xform]. */
        addFaces(faces: PackedVector3Array | Vector3[], xform: Transform3D): void
        
        /** Adds the geometry data of another [NavigationMeshSourceGeometryData3D] to the navigation mesh baking data. */
        merge(otherGeometry: NavigationMeshSourceGeometryData3D): void
        
        /** Adds a projected obstruction shape to the source geometry. The [param vertices] are considered projected on a xz-axes plane, placed at the global y-axis [param elevation] and extruded by [param height]. If [param carve] is `true` the carved shape will not be affected by additional offsets (e.g. agent radius) of the navigation mesh baking process. */
        addProjectedObstruction(vertices: PackedVector3Array | Vector3[], elevation: float64, height: float64, carve: boolean): void
        
        /** Clears all projected obstructions. */
        clearProjectedObstructions(): void
        
        /** Returns an axis-aligned bounding box that covers all the stored geometry data. The bounds are calculated when calling this function with the result cached until further geometry changes are made. */
        getBounds(): Aabb
        get vertices(): PackedVector3Array
        set vertices(value: PackedVector3Array | Vector3[])
        get indices(): PackedInt32Array
        set indices(value: PackedInt32Array | int32[])
        get projectedObstructions(): GArray
        set projectedObstructions(value: GArray)
    }
    /** 2D obstacle used to affect navigation mesh baking or constrain velocities of avoidance controlled agents.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_navigationobstacle2d.html  
     */
    class NavigationObstacle2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** Returns the [RID] of this obstacle on the [NavigationServer2D]. */
        getRid(): Rid
        
        /** Sets the [RID] of the navigation map this NavigationObstacle node should use and also updates the `obstacle` on the NavigationServer. */
        setNavigationMap(navigationMap: Rid): void
        
        /** Returns the [RID] of the navigation map for this NavigationObstacle node. This function returns always the map set on the NavigationObstacle node and not the map of the abstract obstacle on the NavigationServer. If the obstacle map is changed directly with the NavigationServer API the NavigationObstacle node will not be aware of the map change. Use [method set_navigation_map] to change the navigation map for the NavigationObstacle and also update the obstacle on the NavigationServer. */
        getNavigationMap(): Rid
        
        /** Based on [param value], enables or disables the specified layer in the [member avoidance_layers] bitmask, given a [param layer_number] between 1 and 32. */
        setAvoidanceLayerValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member avoidance_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        getAvoidanceLayerValue(layerNumber: int64): boolean
        
        /** Sets the avoidance radius for the obstacle. */
        get radius(): float64
        set radius(value: float64)
        
        /** The outline vertices of the obstacle. If the vertices are winded in clockwise order agents will be pushed in by the obstacle, else they will be pushed out. Outlines can not be crossed or overlap. Should the vertices using obstacle be warped to a new position agent's can not predict this movement and may get trapped inside the obstacle. */
        get vertices(): PackedVector2Array
        set vertices(value: PackedVector2Array | Vector2[])
        
        /** If enabled and parsed in a navigation mesh baking process the obstacle will discard source geometry inside its [member vertices] defined shape. */
        get affectNavigationMesh(): boolean
        set affectNavigationMesh(value: boolean)
        
        /** If enabled the obstacle vertices will carve into the baked navigation mesh with the shape unaffected by additional offsets (e.g. agent radius).  
         *  It will still be affected by further postprocessing of the baking process, like edge and polygon simplification.  
         *  Requires [member affect_navigation_mesh] to be enabled.  
         */
        get carveNavigationMesh(): boolean
        set carveNavigationMesh(value: boolean)
        
        /** If `true` the obstacle affects avoidance using agents. */
        get avoidanceEnabled(): boolean
        set avoidanceEnabled(value: boolean)
        
        /** Sets the wanted velocity for the obstacle so other agent's can better predict the obstacle if it is moved with a velocity regularly (every frame) instead of warped to a new position. Does only affect avoidance for the obstacles [member radius]. Does nothing for the obstacles static vertices. */
        get velocity(): Vector2
        set velocity(value: Vector2)
        
        /** A bitfield determining the avoidance layers for this obstacle. Agents with a matching bit on the their avoidance mask will avoid this obstacle. */
        get avoidanceLayers(): int64
        set avoidanceLayers(value: int64)
    }
    /** 3D obstacle used to affect navigation mesh baking or constrain velocities of avoidance controlled agents.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_navigationobstacle3d.html  
     */
    class NavigationObstacle3D<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        /** Returns the [RID] of this obstacle on the [NavigationServer3D]. */
        getRid(): Rid
        
        /** Sets the [RID] of the navigation map this NavigationObstacle node should use and also updates the `obstacle` on the NavigationServer. */
        setNavigationMap(navigationMap: Rid): void
        
        /** Returns the [RID] of the navigation map for this NavigationObstacle node. This function returns always the map set on the NavigationObstacle node and not the map of the abstract obstacle on the NavigationServer. If the obstacle map is changed directly with the NavigationServer API the NavigationObstacle node will not be aware of the map change. Use [method set_navigation_map] to change the navigation map for the NavigationObstacle and also update the obstacle on the NavigationServer. */
        getNavigationMap(): Rid
        
        /** Based on [param value], enables or disables the specified layer in the [member avoidance_layers] bitmask, given a [param layer_number] between 1 and 32. */
        setAvoidanceLayerValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member avoidance_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        getAvoidanceLayerValue(layerNumber: int64): boolean
        
        /** Sets the avoidance radius for the obstacle. */
        get radius(): float64
        set radius(value: float64)
        
        /** Sets the obstacle height used in 2D avoidance. 2D avoidance using agent's ignore obstacles that are below or above them. */
        get height(): float64
        set height(value: float64)
        
        /** The outline vertices of the obstacle. If the vertices are winded in clockwise order agents will be pushed in by the obstacle, else they will be pushed out. Outlines can not be crossed or overlap. Should the vertices using obstacle be warped to a new position agent's can not predict this movement and may get trapped inside the obstacle. */
        get vertices(): PackedVector3Array
        set vertices(value: PackedVector3Array | Vector3[])
        
        /** If enabled and parsed in a navigation mesh baking process the obstacle will discard source geometry inside its [member vertices] and [member height] defined shape. */
        get affectNavigationMesh(): boolean
        set affectNavigationMesh(value: boolean)
        
        /** If enabled the obstacle vertices will carve into the baked navigation mesh with the shape unaffected by additional offsets (e.g. agent radius).  
         *  It will still be affected by further postprocessing of the baking process, like edge and polygon simplification.  
         *  Requires [member affect_navigation_mesh] to be enabled.  
         */
        get carveNavigationMesh(): boolean
        set carveNavigationMesh(value: boolean)
        
        /** If `true` the obstacle affects avoidance using agents. */
        get avoidanceEnabled(): boolean
        set avoidanceEnabled(value: boolean)
        
        /** Sets the wanted velocity for the obstacle so other agent's can better predict the obstacle if it is moved with a velocity regularly (every frame) instead of warped to a new position. Does only affect avoidance for the obstacles [member radius]. Does nothing for the obstacles static vertices. */
        get velocity(): Vector3
        set velocity(value: Vector3)
        
        /** A bitfield determining the avoidance layers for this obstacle. Agents with a matching bit on the their avoidance mask will avoid this obstacle. */
        get avoidanceLayers(): int64
        set avoidanceLayers(value: int64)
        
        /** If `true` the obstacle affects 3D avoidance using agent's with obstacle [member radius].  
         *  If `false` the obstacle affects 2D avoidance using agent's with both obstacle [member vertices] as well as obstacle [member radius].  
         */
        get use3DAvoidance(): boolean
        set use3DAvoidance(value: boolean)
    }
    namespace NavigationPathQueryParameters2D {
        enum PathfindingAlgorithm {
            PathfindingAlgorithmAstar = 0,
        }
        enum PathPostProcessing {
            PathPostprocessingCorridorfunnel = 0,
            PathPostprocessingEdgecentered = 1,
            PathPostprocessingNone = 2,
        }
        enum PathMetadataFlags {
            PathMetadataIncludeNone = 0,
            PathMetadataIncludeTypes = 1,
            PathMetadataIncludeRids = 2,
            PathMetadataIncludeOwners = 4,
            PathMetadataIncludeAll = 7,
        }
    }
    /** Provides parameters for 2D navigation path queries.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_navigationpathqueryparameters2d.html  
     */
    class NavigationPathQueryParameters2D extends RefCounted {
        /** The path query uses the default A* pathfinding algorithm. */
        static readonly PATHFINDING_ALGORITHM_ASTAR = 0
        
        /** Applies a funnel algorithm to the raw path corridor found by the pathfinding algorithm. This will result in the shortest path possible inside the path corridor. This postprocessing very much depends on the navigation mesh polygon layout and the created corridor. Especially tile- or gridbased layouts can face artificial corners with diagonal movement due to a jagged path corridor imposed by the cell shapes. */
        static readonly PATH_POSTPROCESSING_CORRIDORFUNNEL = 0
        
        /** Centers every path position in the middle of the traveled navigation mesh polygon edge. This creates better paths for tile- or gridbased layouts that restrict the movement to the cells center. */
        static readonly PATH_POSTPROCESSING_EDGECENTERED = 1
        
        /** Applies no postprocessing and returns the raw path corridor as found by the pathfinding algorithm. */
        static readonly PATH_POSTPROCESSING_NONE = 2
        
        /** Don't include any additional metadata about the returned path. */
        static readonly PATH_METADATA_INCLUDE_NONE = 0
        
        /** Include the type of navigation primitive (region or link) that each point of the path goes through. */
        static readonly PATH_METADATA_INCLUDE_TYPES = 1
        
        /** Include the [RID]s of the regions and links that each point of the path goes through. */
        static readonly PATH_METADATA_INCLUDE_RIDS = 2
        
        /** Include the `ObjectID`s of the [Object]s which manage the regions and links each point of the path goes through. */
        static readonly PATH_METADATA_INCLUDE_OWNERS = 4
        
        /** Include all available metadata about the returned path. */
        static readonly PATH_METADATA_INCLUDE_ALL = 7
        constructor(identifier?: any)
        
        /** The navigation map [RID] used in the path query. */
        get map(): Rid
        set map(value: Rid)
        
        /** The pathfinding start position in global coordinates. */
        get startPosition(): Vector2
        set startPosition(value: Vector2)
        
        /** The pathfinding target position in global coordinates. */
        get targetPosition(): Vector2
        set targetPosition(value: Vector2)
        
        /** The navigation layers the query will use (as a bitmask). */
        get navigationLayers(): int64
        set navigationLayers(value: int64)
        
        /** The pathfinding algorithm used in the path query. */
        get pathfindingAlgorithm(): int64
        set pathfindingAlgorithm(value: int64)
        
        /** The path postprocessing applied to the raw path corridor found by the [member pathfinding_algorithm]. */
        get pathPostprocessing(): int64
        set pathPostprocessing(value: int64)
        
        /** Additional information to include with the navigation path. */
        get metadataFlags(): int64
        set metadataFlags(value: int64)
        
        /** If `true` a simplified version of the path will be returned with less critical path points removed. The simplification amount is controlled by [member simplify_epsilon]. The simplification uses a variant of Ramer-Douglas-Peucker algorithm for curve point decimation.  
         *  Path simplification can be helpful to mitigate various path following issues that can arise with certain agent types and script behaviors. E.g. "steering" agents or avoidance in "open fields".  
         */
        get simplifyPath(): boolean
        set simplifyPath(value: boolean)
        
        /** The path simplification amount in worlds units. */
        get simplifyEpsilon(): float64
        set simplifyEpsilon(value: float64)
        
        /** The list of region [RID]s that will be excluded from the path query. Use [method NavigationRegion2D.get_rid] to get the [RID] associated with a [NavigationRegion2D] node.  
         *      
         *  **Note:** The returned array is copied and any changes to it will not update the original property value. To update the value you need to modify the returned array, and then set it to the property again.  
         */
        get excludedRegions(): GArray
        set excludedRegions(value: GArray)
        
        /** The list of region [RID]s that will be included by the path query. Use [method NavigationRegion2D.get_rid] to get the [RID] associated with a [NavigationRegion2D] node. If left empty all regions are included. If a region ends up being both included and excluded at the same time it will be excluded.  
         *      
         *  **Note:** The returned array is copied and any changes to it will not update the original property value. To update the value you need to modify the returned array, and then set it to the property again.  
         */
        get includedRegions(): GArray
        set includedRegions(value: GArray)
    }
    namespace NavigationPathQueryParameters3D {
        enum PathfindingAlgorithm {
            PathfindingAlgorithmAstar = 0,
        }
        enum PathPostProcessing {
            PathPostprocessingCorridorfunnel = 0,
            PathPostprocessingEdgecentered = 1,
            PathPostprocessingNone = 2,
        }
        enum PathMetadataFlags {
            PathMetadataIncludeNone = 0,
            PathMetadataIncludeTypes = 1,
            PathMetadataIncludeRids = 2,
            PathMetadataIncludeOwners = 4,
            PathMetadataIncludeAll = 7,
        }
    }
    /** Provides parameters for 3D navigation path queries.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_navigationpathqueryparameters3d.html  
     */
    class NavigationPathQueryParameters3D extends RefCounted {
        /** The path query uses the default A* pathfinding algorithm. */
        static readonly PATHFINDING_ALGORITHM_ASTAR = 0
        
        /** Applies a funnel algorithm to the raw path corridor found by the pathfinding algorithm. This will result in the shortest path possible inside the path corridor. This postprocessing very much depends on the navigation mesh polygon layout and the created corridor. Especially tile- or gridbased layouts can face artificial corners with diagonal movement due to a jagged path corridor imposed by the cell shapes. */
        static readonly PATH_POSTPROCESSING_CORRIDORFUNNEL = 0
        
        /** Centers every path position in the middle of the traveled navigation mesh polygon edge. This creates better paths for tile- or gridbased layouts that restrict the movement to the cells center. */
        static readonly PATH_POSTPROCESSING_EDGECENTERED = 1
        
        /** Applies no postprocessing and returns the raw path corridor as found by the pathfinding algorithm. */
        static readonly PATH_POSTPROCESSING_NONE = 2
        
        /** Don't include any additional metadata about the returned path. */
        static readonly PATH_METADATA_INCLUDE_NONE = 0
        
        /** Include the type of navigation primitive (region or link) that each point of the path goes through. */
        static readonly PATH_METADATA_INCLUDE_TYPES = 1
        
        /** Include the [RID]s of the regions and links that each point of the path goes through. */
        static readonly PATH_METADATA_INCLUDE_RIDS = 2
        
        /** Include the `ObjectID`s of the [Object]s which manage the regions and links each point of the path goes through. */
        static readonly PATH_METADATA_INCLUDE_OWNERS = 4
        
        /** Include all available metadata about the returned path. */
        static readonly PATH_METADATA_INCLUDE_ALL = 7
        constructor(identifier?: any)
        
        /** The navigation map [RID] used in the path query. */
        get map(): Rid
        set map(value: Rid)
        
        /** The pathfinding start position in global coordinates. */
        get startPosition(): Vector3
        set startPosition(value: Vector3)
        
        /** The pathfinding target position in global coordinates. */
        get targetPosition(): Vector3
        set targetPosition(value: Vector3)
        
        /** The navigation layers the query will use (as a bitmask). */
        get navigationLayers(): int64
        set navigationLayers(value: int64)
        
        /** The pathfinding algorithm used in the path query. */
        get pathfindingAlgorithm(): int64
        set pathfindingAlgorithm(value: int64)
        
        /** The path postprocessing applied to the raw path corridor found by the [member pathfinding_algorithm]. */
        get pathPostprocessing(): int64
        set pathPostprocessing(value: int64)
        
        /** Additional information to include with the navigation path. */
        get metadataFlags(): int64
        set metadataFlags(value: int64)
        
        /** If `true` a simplified version of the path will be returned with less critical path points removed. The simplification amount is controlled by [member simplify_epsilon]. The simplification uses a variant of Ramer-Douglas-Peucker algorithm for curve point decimation.  
         *  Path simplification can be helpful to mitigate various path following issues that can arise with certain agent types and script behaviors. E.g. "steering" agents or avoidance in "open fields".  
         */
        get simplifyPath(): boolean
        set simplifyPath(value: boolean)
        
        /** The path simplification amount in worlds units. */
        get simplifyEpsilon(): float64
        set simplifyEpsilon(value: float64)
        
        /** The list of region [RID]s that will be excluded from the path query. Use [method NavigationRegion3D.get_rid] to get the [RID] associated with a [NavigationRegion3D] node.  
         *      
         *  **Note:** The returned array is copied and any changes to it will not update the original property value. To update the value you need to modify the returned array, and then set it to the property again.  
         */
        get excludedRegions(): GArray
        set excludedRegions(value: GArray)
        
        /** The list of region [RID]s that will be included by the path query. Use [method NavigationRegion3D.get_rid] to get the [RID] associated with a [NavigationRegion3D] node. If left empty all regions are included. If a region ends up being both included and excluded at the same time it will be excluded.  
         *      
         *  **Note:** The returned array is copied and any changes to it will not update the original property value. To update the value you need to modify the returned array, and then set it to the property again.  
         */
        get includedRegions(): GArray
        set includedRegions(value: GArray)
    }
    namespace NavigationPathQueryResult2D {
        enum PathSegmentType {
            PathSegmentTypeRegion = 0,
            PathSegmentTypeLink = 1,
        }
    }
    /** Represents the result of a 2D pathfinding query.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_navigationpathqueryresult2d.html  
     */
    class NavigationPathQueryResult2D extends RefCounted {
        /** This segment of the path goes through a region. */
        static readonly PATH_SEGMENT_TYPE_REGION = 0
        
        /** This segment of the path goes through a link. */
        static readonly PATH_SEGMENT_TYPE_LINK = 1
        constructor(identifier?: any)
        
        /** Reset the result object to its initial state. This is useful to reuse the object across multiple queries. */
        reset(): void
        
        /** The resulting path array from the navigation query. All path array positions are in global coordinates. Without customized query parameters this is the same path as returned by [method NavigationServer2D.map_get_path]. */
        get path(): PackedVector2Array
        set path(value: PackedVector2Array | Vector2[])
        
        /** The type of navigation primitive (region or link) that each point of the path goes through. */
        get pathTypes(): PackedInt32Array
        set pathTypes(value: PackedInt32Array | int32[])
        
        /** The [RID]s of the regions and links that each point of the path goes through. */
        get pathRids(): GArray
        set pathRids(value: GArray)
        
        /** The `ObjectID`s of the [Object]s which manage the regions and links each point of the path goes through. */
        get pathOwnerIds(): PackedInt64Array
        set pathOwnerIds(value: PackedInt64Array | int64[])
    }
    namespace NavigationPathQueryResult3D {
        enum PathSegmentType {
            PathSegmentTypeRegion = 0,
            PathSegmentTypeLink = 1,
        }
    }
    /** Represents the result of a 3D pathfinding query.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_navigationpathqueryresult3d.html  
     */
    class NavigationPathQueryResult3D extends RefCounted {
        /** This segment of the path goes through a region. */
        static readonly PATH_SEGMENT_TYPE_REGION = 0
        
        /** This segment of the path goes through a link. */
        static readonly PATH_SEGMENT_TYPE_LINK = 1
        constructor(identifier?: any)
        
        /** Reset the result object to its initial state. This is useful to reuse the object across multiple queries. */
        reset(): void
        
        /** The resulting path array from the navigation query. All path array positions are in global coordinates. Without customized query parameters this is the same path as returned by [method NavigationServer3D.map_get_path]. */
        get path(): PackedVector3Array
        set path(value: PackedVector3Array | Vector3[])
        
        /** The type of navigation primitive (region or link) that each point of the path goes through. */
        get pathTypes(): PackedInt32Array
        set pathTypes(value: PackedInt32Array | int32[])
        
        /** The [RID]s of the regions and links that each point of the path goes through. */
        get pathRids(): GArray
        set pathRids(value: GArray)
        
        /** The `ObjectID`s of the [Object]s which manage the regions and links each point of the path goes through. */
        get pathOwnerIds(): PackedInt64Array
        set pathOwnerIds(value: PackedInt64Array | int64[])
    }
    namespace NavigationPolygon {
        enum SamplePartitionType {
            SamplePartitionConvexPartition = 0,
            SamplePartitionTriangulate = 1,
            SamplePartitionMax = 2,
        }
        enum ParsedGeometryType {
            ParsedGeometryMeshInstances = 0,
            ParsedGeometryStaticColliders = 1,
            ParsedGeometryBoth = 2,
            ParsedGeometryMax = 3,
        }
        enum SourceGeometryMode {
            SourceGeometryRootNodeChildren = 0,
            SourceGeometryGroupsWithChildren = 1,
            SourceGeometryGroupsExplicit = 2,
            SourceGeometryMax = 3,
        }
    }
    /** A 2D navigation mesh that describes a traversable surface for pathfinding.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_navigationpolygon.html  
     */
    class NavigationPolygon extends Resource {
        /** Convex partitioning that yields navigation mesh with convex polygons. */
        static readonly SAMPLE_PARTITION_CONVEX_PARTITION = 0
        
        /** Triangulation partitioning that yields navigation mesh with triangle polygons. */
        static readonly SAMPLE_PARTITION_TRIANGULATE = 1
        
        /** Represents the size of the [enum SamplePartitionType] enum. */
        static readonly SAMPLE_PARTITION_MAX = 2
        
        /** Parses mesh instances as obstruction geometry. This includes [Polygon2D], [MeshInstance2D], [MultiMeshInstance2D], and [TileMap] nodes.  
         *  Meshes are only parsed when they use a 2D vertices surface format.  
         */
        static readonly PARSED_GEOMETRY_MESH_INSTANCES = 0
        
        /** Parses [StaticBody2D] and [TileMap] colliders as obstruction geometry. The collider should be in any of the layers specified by [member parsed_collision_mask]. */
        static readonly PARSED_GEOMETRY_STATIC_COLLIDERS = 1
        
        /** Both [constant PARSED_GEOMETRY_MESH_INSTANCES] and [constant PARSED_GEOMETRY_STATIC_COLLIDERS]. */
        static readonly PARSED_GEOMETRY_BOTH = 2
        
        /** Represents the size of the [enum ParsedGeometryType] enum. */
        static readonly PARSED_GEOMETRY_MAX = 3
        
        /** Scans the child nodes of the root node recursively for geometry. */
        static readonly SOURCE_GEOMETRY_ROOT_NODE_CHILDREN = 0
        
        /** Scans nodes in a group and their child nodes recursively for geometry. The group is specified by [member source_geometry_group_name]. */
        static readonly SOURCE_GEOMETRY_GROUPS_WITH_CHILDREN = 1
        
        /** Uses nodes in a group for geometry. The group is specified by [member source_geometry_group_name]. */
        static readonly SOURCE_GEOMETRY_GROUPS_EXPLICIT = 2
        
        /** Represents the size of the [enum SourceGeometryMode] enum. */
        static readonly SOURCE_GEOMETRY_MAX = 3
        constructor(identifier?: any)
        
        /** Adds a polygon using the indices of the vertices you get when calling [method get_vertices]. */
        addPolygon(polygon: PackedInt32Array | int32[]): void
        
        /** Returns the count of all polygons. */
        getPolygonCount(): int64
        
        /** Returns a [PackedInt32Array] containing the indices of the vertices of a created polygon. */
        getPolygon(idx: int64): PackedInt32Array
        
        /** Clears the array of polygons, but it doesn't clear the array of outlines and vertices. */
        clearPolygons(): void
        
        /** Returns the [NavigationMesh] resulting from this navigation polygon. This navigation mesh can be used to update the navigation mesh of a region with the [method NavigationServer3D.region_set_navigation_mesh] API directly (as 2D uses the 3D server behind the scene). */
        getNavigationMesh(): null | NavigationMesh
        
        /** Appends a [PackedVector2Array] that contains the vertices of an outline to the internal array that contains all the outlines. */
        addOutline(outline: PackedVector2Array | Vector2[]): void
        
        /** Adds a [PackedVector2Array] that contains the vertices of an outline to the internal array that contains all the outlines at a fixed position. */
        addOutlineAtIndex(outline: PackedVector2Array | Vector2[], index: int64): void
        
        /** Returns the number of outlines that were created in the editor or by script. */
        getOutlineCount(): int64
        
        /** Changes an outline created in the editor or by script. You have to call [method make_polygons_from_outlines] for the polygons to update. */
        setOutline(idx: int64, outline: PackedVector2Array | Vector2[]): void
        
        /** Returns a [PackedVector2Array] containing the vertices of an outline that was created in the editor or by script. */
        getOutline(idx: int64): PackedVector2Array
        
        /** Removes an outline created in the editor or by script. You have to call [method make_polygons_from_outlines] for the polygons to update. */
        removeOutline(idx: int64): void
        
        /** Clears the array of the outlines, but it doesn't clear the vertices and the polygons that were created by them. */
        clearOutlines(): void
        
        /** Creates polygons from the outlines added in the editor or by script. */
        makePolygonsFromOutlines(): void
        
        /** Based on [param value], enables or disables the specified layer in the [member parsed_collision_mask], given a [param layer_number] between 1 and 32. */
        setParsedCollisionMaskValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member parsed_collision_mask] is enabled, given a [param layer_number] between 1 and 32. */
        getParsedCollisionMaskValue(layerNumber: int64): boolean
        
        /** Clears the internal arrays for vertices and polygon indices. */
        clear(): void
        get vertices(): PackedVector2Array
        set vertices(value: PackedVector2Array | Vector2[])
        get polygons(): GArray
        set polygons(value: GArray)
        get outlines(): GArray
        set outlines(value: GArray)
        
        /** Partitioning algorithm for creating the navigation mesh polys. See [enum SamplePartitionType] for possible values. */
        get samplePartitionType(): int64
        set samplePartitionType(value: int64)
        
        /** Determines which type of nodes will be parsed as geometry. See [enum ParsedGeometryType] for possible values. */
        get parsedGeometryType(): int64
        set parsedGeometryType(value: int64)
        
        /** The physics layers to scan for static colliders.  
         *  Only used when [member parsed_geometry_type] is [constant PARSED_GEOMETRY_STATIC_COLLIDERS] or [constant PARSED_GEOMETRY_BOTH].  
         */
        get parsedCollisionMask(): int64
        set parsedCollisionMask(value: int64)
        
        /** The source of the geometry used when baking. See [enum SourceGeometryMode] for possible values. */
        get sourceGeometryMode(): int64
        set sourceGeometryMode(value: int64)
        
        /** The group name of nodes that should be parsed for baking source geometry.  
         *  Only used when [member source_geometry_mode] is [constant SOURCE_GEOMETRY_GROUPS_WITH_CHILDREN] or [constant SOURCE_GEOMETRY_GROUPS_EXPLICIT].  
         */
        get sourceGeometryGroupName(): string
        set sourceGeometryGroupName(value: string)
        
        /** The cell size used to rasterize the navigation mesh vertices. Must match with the cell size on the navigation map. */
        get cellSize(): float64
        set cellSize(value: float64)
        
        /** The size of the non-navigable border around the bake bounding area defined by the [member baking_rect] [Rect2].  
         *  In conjunction with the [member baking_rect] the border size can be used to bake tile aligned navigation meshes without the tile edges being shrunk by [member agent_radius].  
         */
        get borderSize(): float64
        set borderSize(value: float64)
        
        /** The distance to erode/shrink the walkable surface when baking the navigation mesh. */
        get agentRadius(): float64
        set agentRadius(value: float64)
        
        /** If the baking [Rect2] has an area the navigation mesh baking will be restricted to its enclosing area. */
        get bakingRect(): Rect2
        set bakingRect(value: Rect2)
        
        /** The position offset applied to the [member baking_rect] [Rect2]. */
        get bakingRectOffset(): Vector2
        set bakingRectOffset(value: Vector2)
    }
    /** A traversable 2D region that [NavigationAgent2D]s can use for pathfinding.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_navigationregion2d.html  
     */
    class NavigationRegion2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** Returns the [RID] of this region on the [NavigationServer2D]. Combined with [method NavigationServer2D.map_get_closest_point_owner] can be used to identify the [NavigationRegion2D] closest to a point on the merged navigation map. */
        getRid(): Rid
        
        /** Sets the [RID] of the navigation map this region should use. By default the region will automatically join the [World2D] default navigation map so this function is only required to override the default map. */
        setNavigationMap(navigationMap: Rid): void
        
        /** Returns the current navigation map [RID] used by this region. */
        getNavigationMap(): Rid
        
        /** Based on [param value], enables or disables the specified layer in the [member navigation_layers] bitmask, given a [param layer_number] between 1 and 32. */
        setNavigationLayerValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member navigation_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        getNavigationLayerValue(layerNumber: int64): boolean
        
        /** Returns the [RID] of this region on the [NavigationServer2D]. */
        getRegionRid(): Rid
        
        /** Bakes the [NavigationPolygon]. If [param on_thread] is set to `true` (default), the baking is done on a separate thread. */
        bakeNavigationPolygon(onThread?: boolean /* = true */): void
        
        /** Returns `true` when the [NavigationPolygon] is being baked on a background thread. */
        isBaking(): boolean
        _navigationPolygonChanged(): void
        
        /** Returns the axis-aligned rectangle for the region's transformed navigation mesh. */
        getBounds(): Rect2
        
        /** The [NavigationPolygon] resource to use. */
        get navigationPolygon(): null | NavigationPolygon
        set navigationPolygon(value: null | NavigationPolygon)
        
        /** Determines if the [NavigationRegion2D] is enabled or disabled. */
        get enabled(): boolean
        set enabled(value: boolean)
        
        /** If enabled the navigation region will use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin. */
        get useEdgeConnections(): boolean
        set useEdgeConnections(value: boolean)
        
        /** A bitfield determining all navigation layers the region belongs to. These navigation layers can be checked upon when requesting a path with [method NavigationServer2D.map_get_path]. */
        get navigationLayers(): int64
        set navigationLayers(value: int64)
        
        /** When pathfinding enters this region's navigation mesh from another regions navigation mesh the [member enter_cost] value is added to the path distance for determining the shortest path. */
        get enterCost(): float64
        set enterCost(value: float64)
        
        /** When pathfinding moves inside this region's navigation mesh the traveled distances are multiplied with [member travel_cost] for determining the shortest path. */
        get travelCost(): float64
        set travelCost(value: float64)
        
        /** Emitted when the used navigation polygon is replaced or changes to the internals of the current navigation polygon are committed. */
        readonly navigationPolygonChanged: Signal<() => void>
        
        /** Emitted when a navigation polygon bake operation is completed. */
        readonly bakeFinished: Signal<() => void>
    }
    /** A traversable 3D region that [NavigationAgent3D]s can use for pathfinding.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_navigationregion3d.html  
     */
    class NavigationRegion3D<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        /** Returns the [RID] of this region on the [NavigationServer3D]. Combined with [method NavigationServer3D.map_get_closest_point_owner] can be used to identify the [NavigationRegion3D] closest to a point on the merged navigation map. */
        getRid(): Rid
        
        /** Sets the [RID] of the navigation map this region should use. By default the region will automatically join the [World3D] default navigation map so this function is only required to override the default map. */
        setNavigationMap(navigationMap: Rid): void
        
        /** Returns the current navigation map [RID] used by this region. */
        getNavigationMap(): Rid
        
        /** Based on [param value], enables or disables the specified layer in the [member navigation_layers] bitmask, given a [param layer_number] between 1 and 32. */
        setNavigationLayerValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member navigation_layers] bitmask is enabled, given a [param layer_number] between 1 and 32. */
        getNavigationLayerValue(layerNumber: int64): boolean
        
        /** Returns the [RID] of this region on the [NavigationServer3D]. */
        getRegionRid(): Rid
        
        /** Bakes the [NavigationMesh]. If [param on_thread] is set to `true` (default), the baking is done on a separate thread. Baking on separate thread is useful because navigation baking is not a cheap operation. When it is completed, it automatically sets the new [NavigationMesh]. Please note that baking on separate thread may be very slow if geometry is parsed from meshes as async access to each mesh involves heavy synchronization. Also, please note that baking on a separate thread is automatically disabled on operating systems that cannot use threads (such as Web with threads disabled). */
        bakeNavigationMesh(onThread?: boolean /* = true */): void
        
        /** Returns `true` when the [NavigationMesh] is being baked on a background thread. */
        isBaking(): boolean
        
        /** Returns the axis-aligned bounding box for the region's transformed navigation mesh. */
        getBounds(): Aabb
        
        /** The [NavigationMesh] resource to use. */
        get navigationMesh(): null | NavigationMesh
        set navigationMesh(value: null | NavigationMesh)
        
        /** Determines if the [NavigationRegion3D] is enabled or disabled. */
        get enabled(): boolean
        set enabled(value: boolean)
        
        /** If enabled the navigation region will use edge connections to connect with other navigation regions within proximity of the navigation map edge connection margin. */
        get useEdgeConnections(): boolean
        set useEdgeConnections(value: boolean)
        
        /** A bitfield determining all navigation layers the region belongs to. These navigation layers can be checked upon when requesting a path with [method NavigationServer3D.map_get_path]. */
        get navigationLayers(): int64
        set navigationLayers(value: int64)
        
        /** When pathfinding enters this region's navigation mesh from another regions navigation mesh the [member enter_cost] value is added to the path distance for determining the shortest path. */
        get enterCost(): float64
        set enterCost(value: float64)
        
        /** When pathfinding moves inside this region's navigation mesh the traveled distances are multiplied with [member travel_cost] for determining the shortest path. */
        get travelCost(): float64
        set travelCost(value: float64)
        
        /** Notifies when the [NavigationMesh] has changed. */
        readonly navigationMeshChanged: Signal<() => void>
        
        /** Notifies when the navigation mesh bake operation is completed. */
        readonly bakeFinished: Signal<() => void>
    }
    namespace NinePatchRect {
        enum AxisStretchMode {
            AxisStretchModeStretch = 0,
            AxisStretchModeTile = 1,
            AxisStretchModeTileFit = 2,
        }
    }
    /** A control that displays a texture by keeping its corners intact, but tiling its edges and center.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_ninepatchrect.html  
     */
    class NinePatchRect<Map extends NodePathMap = any> extends Control<Map> {
        /** Stretches the center texture across the NinePatchRect. This may cause the texture to be distorted. */
        static readonly AXIS_STRETCH_MODE_STRETCH = 0
        
        /** Repeats the center texture across the NinePatchRect. This won't cause any visible distortion. The texture must be seamless for this to work without displaying artifacts between edges. */
        static readonly AXIS_STRETCH_MODE_TILE = 1
        
        /** Repeats the center texture across the NinePatchRect, but will also stretch the texture to make sure each tile is visible in full. This may cause the texture to be distorted, but less than [constant AXIS_STRETCH_MODE_STRETCH]. The texture must be seamless for this to work without displaying artifacts between edges. */
        static readonly AXIS_STRETCH_MODE_TILE_FIT = 2
        constructor(identifier?: any)
        
        /** Sets the size of the margin on the specified [enum Side] to [param value] pixels. */
        setPatchMargin(margin: Side, value: int64): void
        
        /** Returns the size of the margin on the specified [enum Side]. */
        getPatchMargin(margin: Side): int64
        
        /** The node's texture resource. */
        get texture(): null | Texture2D
        set texture(value: null | Texture2D)
        
        /** If `true`, draw the panel's center. Else, only draw the 9-slice's borders. */
        get drawCenter(): boolean
        set drawCenter(value: boolean)
        
        /** Rectangular region of the texture to sample from. If you're working with an atlas, use this property to define the area the 9-slice should use. All other properties are relative to this one. If the rect is empty, NinePatchRect will use the whole texture. */
        get regionRect(): Rect2
        set regionRect(value: Rect2)
        
        /** The width of the 9-slice's left column. A margin of 16 means the 9-slice's left corners and side will have a width of 16 pixels. You can set all 4 margin values individually to create panels with non-uniform borders. */
        get patchMarginLeft(): int64
        set patchMarginLeft(value: int64)
        
        /** The height of the 9-slice's top row. A margin of 16 means the 9-slice's top corners and side will have a height of 16 pixels. You can set all 4 margin values individually to create panels with non-uniform borders. */
        get patchMarginTop(): int64
        set patchMarginTop(value: int64)
        
        /** The width of the 9-slice's right column. A margin of 16 means the 9-slice's right corners and side will have a width of 16 pixels. You can set all 4 margin values individually to create panels with non-uniform borders. */
        get patchMarginRight(): int64
        set patchMarginRight(value: int64)
        
        /** The height of the 9-slice's bottom row. A margin of 16 means the 9-slice's bottom corners and side will have a height of 16 pixels. You can set all 4 margin values individually to create panels with non-uniform borders. */
        get patchMarginBottom(): int64
        set patchMarginBottom(value: int64)
        
        /** The stretch mode to use for horizontal stretching/tiling. See [enum NinePatchRect.AxisStretchMode] for possible values. */
        get axisStretchHorizontal(): int64
        set axisStretchHorizontal(value: int64)
        
        /** The stretch mode to use for vertical stretching/tiling. See [enum NinePatchRect.AxisStretchMode] for possible values. */
        get axisStretchVertical(): int64
        set axisStretchVertical(value: int64)
        
        /** Emitted when the node's texture changes. */
        readonly textureChanged: Signal<() => void>
    }
    namespace Node {
        enum ProcessMode {
            ProcessModeInherit = 0,
            ProcessModePausable = 1,
            ProcessModeWhenPaused = 2,
            ProcessModeAlways = 3,
            ProcessModeDisabled = 4,
        }
        enum ProcessThreadGroup {
            ProcessThreadGroupInherit = 0,
            ProcessThreadGroupMainThread = 1,
            ProcessThreadGroupSubThread = 2,
        }
        enum ProcessThreadMessages {
            FlagProcessThreadMessages = 1,
            FlagProcessThreadMessagesPhysics = 2,
            FlagProcessThreadMessagesAll = 3,
        }
        enum PhysicsInterpolationMode {
            PhysicsInterpolationModeInherit = 0,
            PhysicsInterpolationModeOn = 1,
            PhysicsInterpolationModeOff = 2,
        }
        enum DuplicateFlags {
            DuplicateSignals = 1,
            DuplicateGroups = 2,
            DuplicateScripts = 4,
            DuplicateUseInstantiation = 8,
        }
        enum InternalMode {
            InternalModeDisabled = 0,
            InternalModeFront = 1,
            InternalModeBack = 2,
        }
        enum AutoTranslateMode {
            AutoTranslateModeInherit = 0,
            AutoTranslateModeAlways = 1,
            AutoTranslateModeDisabled = 2,
        }
    }
    namespace __PathMappableDummyKeys { const Node: unique symbol }
    /** Base class for all scene objects.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_node.html  
     */
    class Node<Map extends NodePathMap = any> extends GObject implements PathMappable<typeof __PathMappableDummyKeys.Node, Map> {
        [__PathMappableDummyKeys.Node]: Map
        /** Notification received when the node enters a [SceneTree]. See [method _enter_tree].  
         *  This notification is received  *before*  the related [signal tree_entered] signal.  
         */
        static readonly NOTIFICATION_ENTER_TREE = 10
        
        /** Notification received when the node is about to exit a [SceneTree]. See [method _exit_tree].  
         *  This notification is received  *after*  the related [signal tree_exiting] signal.  
         */
        static readonly NOTIFICATION_EXIT_TREE = 11
        static readonly NOTIFICATION_MOVED_IN_PARENT = 12
        
        /** Notification received when the node is ready. See [method _ready]. */
        static readonly NOTIFICATION_READY = 13
        
        /** Notification received when the node is paused. See [member process_mode]. */
        static readonly NOTIFICATION_PAUSED = 14
        
        /** Notification received when the node is unpaused. See [member process_mode]. */
        static readonly NOTIFICATION_UNPAUSED = 15
        
        /** Notification received from the tree every physics frame when [method is_physics_processing] returns `true`. See [method _physics_process]. */
        static readonly NOTIFICATION_PHYSICS_PROCESS = 16
        
        /** Notification received from the tree every rendered frame when [method is_processing] returns `true`. See [method _process]. */
        static readonly NOTIFICATION_PROCESS = 17
        
        /** Notification received when the node is set as a child of another node (see [method add_child] and [method add_sibling]).  
         *      
         *  **Note:** This does  *not*  mean that the node entered the [SceneTree].  
         */
        static readonly NOTIFICATION_PARENTED = 18
        
        /** Notification received when the parent node calls [method remove_child] on this node.  
         *      
         *  **Note:** This does  *not*  mean that the node exited the [SceneTree].  
         */
        static readonly NOTIFICATION_UNPARENTED = 19
        
        /** Notification received  *only*  by the newly instantiated scene root node, when [method PackedScene.instantiate] is completed. */
        static readonly NOTIFICATION_SCENE_INSTANTIATED = 20
        
        /** Notification received when a drag operation begins. All nodes receive this notification, not only the dragged one.  
         *  Can be triggered either by dragging a [Control] that provides drag data (see [method Control._get_drag_data]) or using [method Control.force_drag].  
         *  Use [method Viewport.gui_get_drag_data] to get the dragged data.  
         */
        static readonly NOTIFICATION_DRAG_BEGIN = 21
        
        /** Notification received when a drag operation ends.  
         *  Use [method Viewport.gui_is_drag_successful] to check if the drag succeeded.  
         */
        static readonly NOTIFICATION_DRAG_END = 22
        
        /** Notification received when the node's [member name] or one of its ancestors' [member name] is changed. This notification is  *not*  received when the node is removed from the [SceneTree]. */
        static readonly NOTIFICATION_PATH_RENAMED = 23
        
        /** Notification received when the list of children is changed. This happens when child nodes are added, moved or removed. */
        static readonly NOTIFICATION_CHILD_ORDER_CHANGED = 24
        
        /** Notification received from the tree every rendered frame when [method is_processing_internal] returns `true`. */
        static readonly NOTIFICATION_INTERNAL_PROCESS = 25
        
        /** Notification received from the tree every physics frame when [method is_physics_processing_internal] returns `true`. */
        static readonly NOTIFICATION_INTERNAL_PHYSICS_PROCESS = 26
        
        /** Notification received when the node enters the tree, just before [constant NOTIFICATION_READY] may be received. Unlike the latter, it is sent every time the node enters tree, not just once. */
        static readonly NOTIFICATION_POST_ENTER_TREE = 27
        
        /** Notification received when the node is disabled. See [constant PROCESS_MODE_DISABLED]. */
        static readonly NOTIFICATION_DISABLED = 28
        
        /** Notification received when the node is enabled again after being disabled. See [constant PROCESS_MODE_DISABLED]. */
        static readonly NOTIFICATION_ENABLED = 29
        
        /** Notification received when [method reset_physics_interpolation] is called on the node or its ancestors. */
        static readonly NOTIFICATION_RESET_PHYSICS_INTERPOLATION = 2001
        
        /** Notification received right before the scene with the node is saved in the editor. This notification is only sent in the Godot editor and will not occur in exported projects. */
        static readonly NOTIFICATION_EDITOR_PRE_SAVE = 9001
        
        /** Notification received right after the scene with the node is saved in the editor. This notification is only sent in the Godot editor and will not occur in exported projects. */
        static readonly NOTIFICATION_EDITOR_POST_SAVE = 9002
        
        /** Notification received when the mouse enters the window.  
         *  Implemented for embedded windows and on desktop and web platforms.  
         */
        static readonly NOTIFICATION_WM_MOUSE_ENTER = 1002
        
        /** Notification received when the mouse leaves the window.  
         *  Implemented for embedded windows and on desktop and web platforms.  
         */
        static readonly NOTIFICATION_WM_MOUSE_EXIT = 1003
        
        /** Notification received from the OS when the node's [Window] ancestor is focused. This may be a change of focus between two windows of the same engine instance, or from the OS desktop or a third-party application to a window of the game (in which case [constant NOTIFICATION_APPLICATION_FOCUS_IN] is also received).  
         *  A [Window] node receives this notification when it is focused.  
         */
        static readonly NOTIFICATION_WM_WINDOW_FOCUS_IN = 1004
        
        /** Notification received from the OS when the node's [Window] ancestor is defocused. This may be a change of focus between two windows of the same engine instance, or from a window of the game to the OS desktop or a third-party application (in which case [constant NOTIFICATION_APPLICATION_FOCUS_OUT] is also received).  
         *  A [Window] node receives this notification when it is defocused.  
         */
        static readonly NOTIFICATION_WM_WINDOW_FOCUS_OUT = 1005
        
        /** Notification received from the OS when a close request is sent (e.g. closing the window with a "Close" button or [kbd]Alt + F4[/kbd]).  
         *  Implemented on desktop platforms.  
         */
        static readonly NOTIFICATION_WM_CLOSE_REQUEST = 1006
        
        /** Notification received from the OS when a go back request is sent (e.g. pressing the "Back" button on Android).  
         *  Implemented only on Android.  
         */
        static readonly NOTIFICATION_WM_GO_BACK_REQUEST = 1007
        
        /** Notification received when the window is resized.  
         *      
         *  **Note:** Only the resized [Window] node receives this notification, and it's not propagated to the child nodes.  
         */
        static readonly NOTIFICATION_WM_SIZE_CHANGED = 1008
        
        /** Notification received from the OS when the screen's dots per inch (DPI) scale is changed. Only implemented on macOS. */
        static readonly NOTIFICATION_WM_DPI_CHANGE = 1009
        
        /** Notification received when the mouse cursor enters the [Viewport]'s visible area, that is not occluded behind other [Control]s or [Window]s, provided its [member Viewport.gui_disable_input] is `false` and regardless if it's currently focused or not. */
        static readonly NOTIFICATION_VP_MOUSE_ENTER = 1010
        
        /** Notification received when the mouse cursor leaves the [Viewport]'s visible area, that is not occluded behind other [Control]s or [Window]s, provided its [member Viewport.gui_disable_input] is `false` and regardless if it's currently focused or not. */
        static readonly NOTIFICATION_VP_MOUSE_EXIT = 1011
        
        /** Notification received when the window is moved. */
        static readonly NOTIFICATION_WM_POSITION_CHANGED = 1012
        
        /** Notification received from the OS when the application is exceeding its allocated memory.  
         *  Implemented only on iOS.  
         */
        static readonly NOTIFICATION_OS_MEMORY_WARNING = 2009
        
        /** Notification received when translations may have changed. Can be triggered by the user changing the locale, changing [member auto_translate_mode] or when the node enters the scene tree. Can be used to respond to language changes, for example to change the UI strings on the fly. Useful when working with the built-in translation support, like [method Object.tr].  
         *      
         *  **Note:** This notification is received alongside [constant NOTIFICATION_ENTER_TREE], so if you are instantiating a scene, the child nodes will not be initialized yet. You can use it to setup translations for this node, child nodes created from script, or if you want to access child nodes added in the editor, make sure the node is ready using [method is_node_ready].  
         *    
         */
        static readonly NOTIFICATION_TRANSLATION_CHANGED = 2010
        
        /** Notification received from the OS when a request for "About" information is sent.  
         *  Implemented only on macOS.  
         */
        static readonly NOTIFICATION_WM_ABOUT = 2011
        
        /** Notification received from Godot's crash handler when the engine is about to crash.  
         *  Implemented on desktop platforms, if the crash handler is enabled.  
         */
        static readonly NOTIFICATION_CRASH = 2012
        
        /** Notification received from the OS when an update of the Input Method Engine occurs (e.g. change of IME cursor position or composition string).  
         *  Implemented only on macOS.  
         */
        static readonly NOTIFICATION_OS_IME_UPDATE = 2013
        
        /** Notification received from the OS when the application is resumed.  
         *  Specific to the Android and iOS platforms.  
         */
        static readonly NOTIFICATION_APPLICATION_RESUMED = 2014
        
        /** Notification received from the OS when the application is paused.  
         *  Specific to the Android and iOS platforms.  
         *      
         *  **Note:** On iOS, you only have approximately 5 seconds to finish a task started by this signal. If you go over this allotment, iOS will kill the app instead of pausing it.  
         */
        static readonly NOTIFICATION_APPLICATION_PAUSED = 2015
        
        /** Notification received from the OS when the application is focused, i.e. when changing the focus from the OS desktop or a thirdparty application to any open window of the Godot instance.  
         *  Implemented on desktop and mobile platforms.  
         */
        static readonly NOTIFICATION_APPLICATION_FOCUS_IN = 2016
        
        /** Notification received from the OS when the application is defocused, i.e. when changing the focus from any open window of the Godot instance to the OS desktop or a thirdparty application.  
         *  Implemented on desktop and mobile platforms.  
         */
        static readonly NOTIFICATION_APPLICATION_FOCUS_OUT = 2017
        
        /** Notification received when the [TextServer] is changed. */
        static readonly NOTIFICATION_TEXT_SERVER_CHANGED = 2018
        
        /** Notification received when an accessibility information update is required. */
        static readonly NOTIFICATION_ACCESSIBILITY_UPDATE = 3000
        
        /** Notification received when accessibility elements are invalidated. All node accessibility elements are automatically deleted after receiving this message, therefore all existing references to such elements should be discarded. */
        static readonly NOTIFICATION_ACCESSIBILITY_INVALIDATE = 3001
        
        /** Inherits [member process_mode] from the node's parent. This is the default for any newly created node. */
        static readonly PROCESS_MODE_INHERIT = 0
        
        /** Stops processing when [member SceneTree.paused] is `true`. This is the inverse of [constant PROCESS_MODE_WHEN_PAUSED], and the default for the root node. */
        static readonly PROCESS_MODE_PAUSABLE = 1
        
        /** Process **only** when [member SceneTree.paused] is `true`. This is the inverse of [constant PROCESS_MODE_PAUSABLE]. */
        static readonly PROCESS_MODE_WHEN_PAUSED = 2
        
        /** Always process. Keeps processing, ignoring [member SceneTree.paused]. This is the inverse of [constant PROCESS_MODE_DISABLED]. */
        static readonly PROCESS_MODE_ALWAYS = 3
        
        /** Never process. Completely disables processing, ignoring [member SceneTree.paused]. This is the inverse of [constant PROCESS_MODE_ALWAYS]. */
        static readonly PROCESS_MODE_DISABLED = 4
        
        /** Process this node based on the thread group mode of the first parent (or grandparent) node that has a thread group mode that is not inherit. See [member process_thread_group] for more information. */
        static readonly PROCESS_THREAD_GROUP_INHERIT = 0
        
        /** Process this node (and child nodes set to inherit) on the main thread. See [member process_thread_group] for more information. */
        static readonly PROCESS_THREAD_GROUP_MAIN_THREAD = 1
        
        /** Process this node (and child nodes set to inherit) on a sub-thread. See [member process_thread_group] for more information. */
        static readonly PROCESS_THREAD_GROUP_SUB_THREAD = 2
        
        /** Allows this node to process threaded messages created with [method call_deferred_thread_group] right before [method _process] is called. */
        static readonly FLAG_PROCESS_THREAD_MESSAGES = 1
        
        /** Allows this node to process threaded messages created with [method call_deferred_thread_group] right before [method _physics_process] is called. */
        static readonly FLAG_PROCESS_THREAD_MESSAGES_PHYSICS = 2
        
        /** Allows this node to process threaded messages created with [method call_deferred_thread_group] right before either [method _process] or [method _physics_process] are called. */
        static readonly FLAG_PROCESS_THREAD_MESSAGES_ALL = 3
        
        /** Inherits [member physics_interpolation_mode] from the node's parent. This is the default for any newly created node. */
        static readonly PHYSICS_INTERPOLATION_MODE_INHERIT = 0
        
        /** Enables physics interpolation for this node and for children set to [constant PHYSICS_INTERPOLATION_MODE_INHERIT]. This is the default for the root node. */
        static readonly PHYSICS_INTERPOLATION_MODE_ON = 1
        
        /** Disables physics interpolation for this node and for children set to [constant PHYSICS_INTERPOLATION_MODE_INHERIT]. */
        static readonly PHYSICS_INTERPOLATION_MODE_OFF = 2
        
        /** Duplicate the node's signal connections that are connected with the [constant Object.CONNECT_PERSIST] flag. */
        static readonly DUPLICATE_SIGNALS = 1
        
        /** Duplicate the node's groups. */
        static readonly DUPLICATE_GROUPS = 2
        
        /** Duplicate the node's script (also overriding the duplicated children's scripts, if combined with [constant DUPLICATE_USE_INSTANTIATION]). */
        static readonly DUPLICATE_SCRIPTS = 4
        
        /** Duplicate using [method PackedScene.instantiate]. If the node comes from a scene saved on disk, reuses [method PackedScene.instantiate] as the base for the duplicated node and its children. */
        static readonly DUPLICATE_USE_INSTANTIATION = 8
        
        /** The node will not be internal. */
        static readonly INTERNAL_MODE_DISABLED = 0
        
        /** The node will be placed at the beginning of the parent's children, before any non-internal sibling. */
        static readonly INTERNAL_MODE_FRONT = 1
        
        /** The node will be placed at the end of the parent's children, after any non-internal sibling. */
        static readonly INTERNAL_MODE_BACK = 2
        
        /** Inherits [member auto_translate_mode] from the node's parent. This is the default for any newly created node. */
        static readonly AUTO_TRANSLATE_MODE_INHERIT = 0
        
        /** Always automatically translate. This is the inverse of [constant AUTO_TRANSLATE_MODE_DISABLED], and the default for the root node. */
        static readonly AUTO_TRANSLATE_MODE_ALWAYS = 1
        
        /** Never automatically translate. This is the inverse of [constant AUTO_TRANSLATE_MODE_ALWAYS].  
         *  String parsing for POT generation will be skipped for this node and children that are set to [constant AUTO_TRANSLATE_MODE_INHERIT].  
         */
        static readonly AUTO_TRANSLATE_MODE_DISABLED = 2
        constructor(identifier?: any)
        
        /** Called during the processing step of the main loop. Processing happens at every frame and as fast as possible, so the [param delta] time since the previous frame is not constant. [param delta] is in seconds.  
         *  It is only called if processing is enabled, which is done automatically if this method is overridden, and can be toggled with [method set_process].  
         *  Processing happens in order of [member process_priority], lower priority values are called first. Nodes with the same priority are processed in tree order, or top to bottom as seen in the editor (also known as pre-order traversal).  
         *  Corresponds to the [constant NOTIFICATION_PROCESS] notification in [method Object._notification].  
         *      
         *  **Note:** This method is only called if the node is present in the scene tree (i.e. if it's not an orphan).  
         *      
         *  **Note:** [param delta] will be larger than expected if running at a framerate lower than [member Engine.physics_ticks_per_second] / [member Engine.max_physics_steps_per_frame] FPS. This is done to avoid "spiral of death" scenarios where performance would plummet due to an ever-increasing number of physics steps per frame. This behavior affects both [method _process] and [method _physics_process]. As a result, avoid using [param delta] for time measurements in real-world seconds. Use the [Time] singleton's methods for this purpose instead, such as [method Time.get_ticks_usec].  
         */
        /* gdvirtual */ _process(delta: float64): void
        
        /** Called during the physics processing step of the main loop. Physics processing means that the frame rate is synced to the physics, i.e. the [param delta] parameter will  *generally*  be constant (see exceptions below). [param delta] is in seconds.  
         *  It is only called if physics processing is enabled, which is done automatically if this method is overridden, and can be toggled with [method set_physics_process].  
         *  Processing happens in order of [member process_physics_priority], lower priority values are called first. Nodes with the same priority are processed in tree order, or top to bottom as seen in the editor (also known as pre-order traversal).  
         *  Corresponds to the [constant NOTIFICATION_PHYSICS_PROCESS] notification in [method Object._notification].  
         *      
         *  **Note:** This method is only called if the node is present in the scene tree (i.e. if it's not an orphan).  
         *      
         *  **Note:** [param delta] will be larger than expected if running at a framerate lower than [member Engine.physics_ticks_per_second] / [member Engine.max_physics_steps_per_frame] FPS. This is done to avoid "spiral of death" scenarios where performance would plummet due to an ever-increasing number of physics steps per frame. This behavior affects both [method _process] and [method _physics_process]. As a result, avoid using [param delta] for time measurements in real-world seconds. Use the [Time] singleton's methods for this purpose instead, such as [method Time.get_ticks_usec].  
         */
        /* gdvirtual */ _physicsProcess(delta: float64): void
        
        /** Called when the node enters the [SceneTree] (e.g. upon instantiating, scene changing, or after calling [method add_child] in a script). If the node has children, its [method _enter_tree] callback will be called first, and then that of the children.  
         *  Corresponds to the [constant NOTIFICATION_ENTER_TREE] notification in [method Object._notification].  
         */
        /* gdvirtual */ _enterTree(): void
        
        /** Called when the node is about to leave the [SceneTree] (e.g. upon freeing, scene changing, or after calling [method remove_child] in a script). If the node has children, its [method _exit_tree] callback will be called last, after all its children have left the tree.  
         *  Corresponds to the [constant NOTIFICATION_EXIT_TREE] notification in [method Object._notification] and signal [signal tree_exiting]. To get notified when the node has already left the active tree, connect to the [signal tree_exited].  
         */
        /* gdvirtual */ _exitTree(): void
        
        /** Called when the node is "ready", i.e. when both the node and its children have entered the scene tree. If the node has children, their [method _ready] callbacks get triggered first, and the parent node will receive the ready notification afterwards.  
         *  Corresponds to the [constant NOTIFICATION_READY] notification in [method Object._notification]. See also the `@onready` annotation for variables.  
         *  Usually used for initialization. For even earlier initialization, [method Object._init] may be used. See also [method _enter_tree].  
         *      
         *  **Note:** This method may be called only once for each node. After removing a node from the scene tree and adding it again, [method _ready] will **not** be called a second time. This can be bypassed by requesting another call with [method request_ready], which may be called anywhere before adding the node again.  
         */
        /* gdvirtual */ _ready(): void
        
        /** The elements in the array returned from this method are displayed as warnings in the Scene dock if the script that overrides it is a `tool` script.  
         *  Returning an empty array produces no warnings.  
         *  Call [method update_configuration_warnings] when the warnings need to be updated for this node.  
         *    
         */
        /* gdvirtual */ _getConfigurationWarnings(): PackedStringArray
        
        /** The elements in the array returned from this method are displayed as warnings in the Scene dock if the script that overrides it is a `tool` script, and accessibility warnings are enabled in the editor settings.  
         *  Returning an empty array produces no warnings.  
         */
        /* gdvirtual */ _getAccessibilityConfigurationWarnings(): PackedStringArray
        
        /** Called when there is an input event. The input event propagates up through the node tree until a node consumes it.  
         *  It is only called if input processing is enabled, which is done automatically if this method is overridden, and can be toggled with [method set_process_input].  
         *  To consume the input event and stop it propagating further to other nodes, [method Viewport.set_input_as_handled] can be called.  
         *  For gameplay input, [method _unhandled_input] and [method _unhandled_key_input] are usually a better fit as they allow the GUI to intercept the events first.  
         *      
         *  **Note:** This method is only called if the node is present in the scene tree (i.e. if it's not an orphan).  
         */
        /* gdvirtual */ _input(event: InputEvent): void
        
        /** Called when an [InputEventKey], [InputEventShortcut], or [InputEventJoypadButton] hasn't been consumed by [method _input] or any GUI [Control] item. It is called before [method _unhandled_key_input] and [method _unhandled_input]. The input event propagates up through the node tree until a node consumes it.  
         *  It is only called if shortcut processing is enabled, which is done automatically if this method is overridden, and can be toggled with [method set_process_shortcut_input].  
         *  To consume the input event and stop it propagating further to other nodes, [method Viewport.set_input_as_handled] can be called.  
         *  This method can be used to handle shortcuts. For generic GUI events, use [method _input] instead. Gameplay events should usually be handled with either [method _unhandled_input] or [method _unhandled_key_input].  
         *      
         *  **Note:** This method is only called if the node is present in the scene tree (i.e. if it's not orphan).  
         */
        /* gdvirtual */ _shortcutInput(event: InputEvent): void
        
        /** Called when an [InputEvent] hasn't been consumed by [method _input] or any GUI [Control] item. It is called after [method _shortcut_input] and after [method _unhandled_key_input]. The input event propagates up through the node tree until a node consumes it.  
         *  It is only called if unhandled input processing is enabled, which is done automatically if this method is overridden, and can be toggled with [method set_process_unhandled_input].  
         *  To consume the input event and stop it propagating further to other nodes, [method Viewport.set_input_as_handled] can be called.  
         *  For gameplay input, this method is usually a better fit than [method _input], as GUI events need a higher priority. For keyboard shortcuts, consider using [method _shortcut_input] instead, as it is called before this method. Finally, to handle keyboard events, consider using [method _unhandled_key_input] for performance reasons.  
         *      
         *  **Note:** This method is only called if the node is present in the scene tree (i.e. if it's not an orphan).  
         */
        /* gdvirtual */ _unhandledInput(event: InputEvent): void
        
        /** Called when an [InputEventKey] hasn't been consumed by [method _input] or any GUI [Control] item. It is called after [method _shortcut_input] but before [method _unhandled_input]. The input event propagates up through the node tree until a node consumes it.  
         *  It is only called if unhandled key input processing is enabled, which is done automatically if this method is overridden, and can be toggled with [method set_process_unhandled_key_input].  
         *  To consume the input event and stop it propagating further to other nodes, [method Viewport.set_input_as_handled] can be called.  
         *  This method can be used to handle Unicode character input with [kbd]Alt[/kbd], [kbd]Alt + Ctrl[/kbd], and [kbd]Alt + Shift[/kbd] modifiers, after shortcuts were handled.  
         *  For gameplay input, this and [method _unhandled_input] are usually a better fit than [method _input], as GUI events should be handled first. This method also performs better than [method _unhandled_input], since unrelated events such as [InputEventMouseMotion] are automatically filtered. For shortcuts, consider using [method _shortcut_input] instead.  
         *      
         *  **Note:** This method is only called if the node is present in the scene tree (i.e. if it's not an orphan).  
         */
        /* gdvirtual */ _unhandledKeyInput(event: InputEvent): void
        
        /** Called during accessibility information updates to determine the currently focused sub-element, should return a sub-element RID or the value returned by [method get_accessibility_element]. */
        /* gdvirtual */ _getFocusedAccessibilityElement(): Rid
        
        /** Return a human-readable description of the position of [param node] child in the custom container, added to the node name. */
        /* gdvirtual */ _getAccessibilityContainerName(node: Node): string
        
        /** Prints all orphan nodes (nodes outside the [SceneTree]). Useful for debugging.  
         *      
         *  **Note:** This method only works in debug builds. Does nothing in a project exported in release mode.  
         */
        static printOrphanNodes(): void
        
        /** Returns object IDs of all orphan nodes (nodes outside the [SceneTree]). Used for debugging.  
         *      
         *  **Note:** [method get_orphan_node_ids] only works in debug builds. When called in a project exported in release mode, [method get_orphan_node_ids] will return an empty array.  
         */
        static getOrphanNodeIds(): GArray
        
        /** Adds a [param sibling] node to this node's parent, and moves the added sibling right below this node.  
         *  If [param force_readable_name] is `true`, improves the readability of the added [param sibling]. If not named, the [param sibling] is renamed to its type, and if it shares [member name] with a sibling, a number is suffixed more appropriately. This operation is very slow. As such, it is recommended leaving this to `false`, which assigns a dummy name featuring `@` in both situations.  
         *  Use [method add_child] instead of this method if you don't need the child node to be added below a specific node in the list of children.  
         *      
         *  **Note:** If this node is internal, the added sibling will be internal too (see [method add_child]'s `internal` parameter).  
         */
        addSibling(sibling: Node, forceReadableName?: boolean /* = false */): void
        setName(name: StringName): void
        getName(): StringName
        
        /** Adds a child [param node]. Nodes can have any number of children, but every child must have a unique name. Child nodes are automatically deleted when the parent node is deleted, so an entire scene can be removed by deleting its topmost node.  
         *  If [param force_readable_name] is `true`, improves the readability of the added [param node]. If not named, the [param node] is renamed to its type, and if it shares [member name] with a sibling, a number is suffixed more appropriately. This operation is very slow. As such, it is recommended leaving this to `false`, which assigns a dummy name featuring `@` in both situations.  
         *  If [param internal] is different than [constant INTERNAL_MODE_DISABLED], the child will be added as internal node. These nodes are ignored by methods like [method get_children], unless their parameter `include_internal` is `true`. It also prevents these nodes being duplicated with their parent. The intended usage is to hide the internal nodes from the user, so the user won't accidentally delete or modify them. Used by some GUI nodes, e.g. [ColorPicker]. See [enum InternalMode] for available modes.  
         *      
         *  **Note:** If [param node] already has a parent, this method will fail. Use [method remove_child] first to remove [param node] from its current parent. For example:  
         *    
         *  If you need the child node to be added below a specific node in the list of children, use [method add_sibling] instead of this method.  
         *      
         *  **Note:** If you want a child to be persisted to a [PackedScene], you must set [member owner] in addition to calling [method add_child]. This is typically relevant for [url=https://docs.godotengine.org/en/latest/tutorials/plugins/running_code_in_the_editor.html]tool scripts[/url] and [url=https://docs.godotengine.org/en/latest/tutorials/plugins/editor/index.html]editor plugins[/url]. If [method add_child] is called without setting [member owner], the newly added [Node] will not be visible in the scene tree, though it will be visible in the 2D/3D view.  
         */
        addChild(node: Node, forceReadableName?: boolean /* = false */, internal?: Node.InternalMode /* = 0 */): void
        
        /** Removes a child [param node]. The [param node], along with its children, are **not** deleted. To delete a node, see [method queue_free].  
         *      
         *  **Note:** When this node is inside the tree, this method sets the [member owner] of the removed [param node] (or its descendants) to `null`, if their [member owner] is no longer an ancestor (see [method is_ancestor_of]).  
         */
        removeChild(node: Node): void
        
        /** Changes the parent of this [Node] to the [param new_parent]. The node needs to already have a parent. The node's [member owner] is preserved if its owner is still reachable from the new location (i.e., the node is still a descendant of the new parent after the operation).  
         *  If [param keep_global_transform] is `true`, the node's global transform will be preserved if supported. [Node2D], [Node3D] and [Control] support this argument (but [Control] keeps only position).  
         */
        reparent(newParent: Node, keepGlobalTransform?: boolean /* = true */): void
        
        /** Returns the number of children of this node.  
         *  If [param include_internal] is `false`, internal children are not counted (see [method add_child]'s `internal` parameter).  
         */
        getChildCount(includeInternal?: boolean /* = false */): int64
        
        /** Returns all children of this node inside an [Array].  
         *  If [param include_internal] is `false`, excludes internal children from the returned array (see [method add_child]'s `internal` parameter).  
         */
        getChildren(includeInternal?: boolean /* = false */): GArray
        
        /** Fetches a child node by its index. Each child node has an index relative to its siblings (see [method get_index]). The first child is at index 0. Negative values can also be used to start from the end of the list. This method can be used in combination with [method get_child_count] to iterate over this node's children. If no child exists at the given index, this method returns `null` and an error is generated.  
         *  If [param include_internal] is `false`, internal children are ignored (see [method add_child]'s `internal` parameter).  
         *    
         *      
         *  **Note:** To fetch a node by [NodePath], use [method get_node].  
         */
        getChild(idx: int64, includeInternal?: boolean /* = false */): null | Node
        
        /** Returns `true` if the [param path] points to a valid node. See also [method get_node]. */
        hasNode(path: NodePath | string): boolean
        
        /** Fetches a node. The [NodePath] can either be a relative path (from this node), or an absolute path (from the [member SceneTree.root]) to a node. If [param path] does not point to a valid node, generates an error and returns `null`. Attempts to access methods on the return value will result in an  *"Attempt to call <method> on a null instance."*  error.  
         *      
         *  **Note:** Fetching by absolute path only works when the node is inside the scene tree (see [method is_inside_tree]).  
         *  **Example:** Assume this method is called from the Character node, inside the following tree:  
         *  [codeblock lang=text]  
         *   ┖╴root  
         *      ┠╴Character (you are here!)  
         *      ┃  ┠╴Sword  
         *      ┃  ┖╴Backpack  
         *      ┃     ┖╴Dagger  
         *      ┠╴MyGame  
         *      ┖╴Swamp  
         *         ┠╴Alligator  
         *         ┠╴Mosquito  
         *         ┖╴Goblin  
         *  [/codeblock]  
         *  The following calls will return a valid node:  
         *    
         */
        getNode<Path extends StaticNodePath<Map>, Default = never>(path: Path): ResolveNodePath<Map, Path, Default>
        
        /** Fetches a node by [NodePath]. Similar to [method get_node], but does not generate an error if [param path] does not point to a valid node. */
        getNodeOrNull<Path extends StaticNodePath<Map>, Default = never>(path: Path): null | ResolveNodePath<Map, Path, Default>
        getNodeOrNull(path: NodePath | string): null | Node
        
        /** Returns this node's parent node, or `null` if the node doesn't have a parent. */
        getParent(): null | Node
        
        /** Finds the first descendant of this node whose [member name] matches [param pattern], returning `null` if no match is found. The matching is done against node names,  *not*  their paths, through [method String.match]. As such, it is case-sensitive, `"*"` matches zero or more characters, and `"?"` matches any single character.  
         *  If [param recursive] is `false`, only this node's direct children are checked. Nodes are checked in tree order, so this node's first direct child is checked first, then its own direct children, etc., before moving to the second direct child, and so on. Internal children are also included in the search (see `internal` parameter in [method add_child]).  
         *  If [param owned] is `true`, only descendants with a valid [member owner] node are checked.  
         *      
         *  **Note:** This method can be very slow. Consider storing a reference to the found node in a variable. Alternatively, use [method get_node] with unique names (see [member unique_name_in_owner]).  
         *      
         *  **Note:** To find all descendant nodes matching a pattern or a class type, see [method find_children].  
         */
        findChild(pattern: string, recursive?: boolean /* = true */, owned?: boolean /* = true */): null | Node
        
        /** Finds all descendants of this node whose names match [param pattern], returning an empty [Array] if no match is found. The matching is done against node names,  *not*  their paths, through [method String.match]. As such, it is case-sensitive, `"*"` matches zero or more characters, and `"?"` matches any single character.  
         *  If [param type] is not empty, only ancestors inheriting from [param type] are included (see [method Object.is_class]).  
         *  If [param recursive] is `false`, only this node's direct children are checked. Nodes are checked in tree order, so this node's first direct child is checked first, then its own direct children, etc., before moving to the second direct child, and so on. Internal children are also included in the search (see `internal` parameter in [method add_child]).  
         *  If [param owned] is `true`, only descendants with a valid [member owner] node are checked.  
         *      
         *  **Note:** This method can be very slow. Consider storing references to the found nodes in a variable.  
         *      
         *  **Note:** To find a single descendant node matching a pattern, see [method find_child].  
         */
        findChildren(pattern: string, type?: string /* = '' */, recursive?: boolean /* = true */, owned?: boolean /* = true */): GArray
        
        /** Finds the first ancestor of this node whose [member name] matches [param pattern], returning `null` if no match is found. The matching is done through [method String.match]. As such, it is case-sensitive, `"*"` matches zero or more characters, and `"?"` matches any single character. See also [method find_child] and [method find_children].  
         *      
         *  **Note:** As this method walks upwards in the scene tree, it can be slow in large, deeply nested nodes. Consider storing a reference to the found node in a variable. Alternatively, use [method get_node] with unique names (see [member unique_name_in_owner]).  
         */
        findParent(pattern: string): null | Node
        
        /** Returns `true` if [param path] points to a valid node and its subnames point to a valid [Resource], e.g. `Area2D/CollisionShape2D:shape`. Properties that are not [Resource] types (such as nodes or other [Variant] types) are not considered. See also [method get_node_and_resource]. */
        hasNodeAndResource(path: NodePath | string): boolean
        
        /** Fetches a node and its most nested resource as specified by the [NodePath]'s subname. Returns an [Array] of size `3` where:  
         *  - Element `0` is the [Node], or `null` if not found;  
         *  - Element `1` is the subname's last nested [Resource], or `null` if not found;  
         *  - Element `2` is the remaining [NodePath], referring to an existing, non-[Resource] property (see [method Object.get_indexed]).  
         *  **Example:** Assume that the child's [member Sprite2D.texture] has been assigned a [AtlasTexture]:  
         *    
         */
        getNodeAndResource(path: NodePath | string): GArray
        
        /** Returns `true` if this node is currently inside a [SceneTree]. See also [method get_tree]. */
        isInsideTree(): boolean
        
        /** Returns `true` if the node is part of the scene currently opened in the editor. */
        isPartOfEditedScene(): boolean
        
        /** Returns `true` if the given [param node] is a direct or indirect child of this node. */
        isAncestorOf(node: Node): boolean
        
        /** Returns `true` if the given [param node] occurs later in the scene hierarchy than this node. A node occurring later is usually processed last. */
        isGreaterThan(node: Node): boolean
        
        /** Returns the node's absolute path, relative to the [member SceneTree.root]. If the node is not inside the scene tree, this method fails and returns an empty [NodePath]. */
        getPath(): NodePath
        
        /** Returns the relative [NodePath] from this node to the specified [param node]. Both nodes must be in the same [SceneTree] or scene hierarchy, otherwise this method fails and returns an empty [NodePath].  
         *  If [param use_unique_path] is `true`, returns the shortest path accounting for this node's unique name (see [member unique_name_in_owner]).  
         *      
         *  **Note:** If you get a relative path which starts from a unique node, the path may be longer than a normal relative path, due to the addition of the unique node's name.  
         */
        getPathTo(node: Node, useUniquePath?: boolean /* = false */): NodePath
        
        /** Adds the node to the [param group]. Groups can be helpful to organize a subset of nodes, for example `"enemies"` or `"collectables"`. See notes in the description, and the group methods in [SceneTree].  
         *  If [param persistent] is `true`, the group will be stored when saved inside a [PackedScene]. All groups created and displayed in the Node dock are persistent.  
         *      
         *  **Note:** To improve performance, the order of group names is  *not*  guaranteed and may vary between project runs. Therefore, do not rely on the group order.  
         *      
         *  **Note:** [SceneTree]'s group methods will  *not*  work on this node if not inside the tree (see [method is_inside_tree]).  
         */
        addToGroup(group: StringName, persistent?: boolean /* = false */): void
        
        /** Removes the node from the given [param group]. Does nothing if the node is not in the [param group]. See also notes in the description, and the [SceneTree]'s group methods. */
        removeFromGroup(group: StringName): void
        
        /** Returns `true` if this node has been added to the given [param group]. See [method add_to_group] and [method remove_from_group]. See also notes in the description, and the [SceneTree]'s group methods. */
        isInGroup(group: StringName): boolean
        
        /** Moves [param child_node] to the given index. A node's index is the order among its siblings. If [param to_index] is negative, the index is counted from the end of the list. See also [method get_child] and [method get_index].  
         *      
         *  **Note:** The processing order of several engine callbacks ([method _ready], [method _process], etc.) and notifications sent through [method propagate_notification] is affected by tree order. [CanvasItem] nodes are also rendered in tree order. See also [member process_priority].  
         */
        moveChild(childNode: Node, toIndex: int64): void
        
        /** Returns an [Array] of group names that the node has been added to.  
         *      
         *  **Note:** To improve performance, the order of group names is  *not*  guaranteed and may vary between project runs. Therefore, do not rely on the group order.  
         *      
         *  **Note:** This method may also return some group names starting with an underscore (`_`). These are internally used by the engine. To avoid conflicts, do not use custom groups starting with underscores. To exclude internal groups, see the following code snippet:  
         *    
         */
        getGroups(): GArray
        
        /** Returns this node's order among its siblings. The first node's index is `0`. See also [method get_child].  
         *  If [param include_internal] is `false`, returns the index ignoring internal children. The first, non-internal child will have an index of `0` (see [method add_child]'s `internal` parameter).  
         */
        getIndex(includeInternal?: boolean /* = false */): int64
        
        /** Prints the node and its children to the console, recursively. The node does not have to be inside the tree. This method outputs [NodePath]s relative to this node, and is good for copy/pasting into [method get_node]. See also [method print_tree_pretty].  
         *  May print, for example:  
         *  [codeblock lang=text]  
         *  .  
         *  Menu  
         *  Menu/Label  
         *  Menu/Camera2D  
         *  SplashScreen  
         *  SplashScreen/Camera2D  
         *  [/codeblock]  
         */
        printTree(): void
        
        /** Prints the node and its children to the console, recursively. The node does not have to be inside the tree. Similar to [method print_tree], but the graphical representation looks like what is displayed in the editor's Scene dock. It is useful for inspecting larger trees.  
         *  May print, for example:  
         *  [codeblock lang=text]  
         *   ┖╴TheGame  
         *      ┠╴Menu  
         *      ┃  ┠╴Label  
         *      ┃  ┖╴Camera2D  
         *      ┖╴SplashScreen  
         *         ┖╴Camera2D  
         *  [/codeblock]  
         */
        printTreePretty(): void
        
        /** Returns the tree as a [String]. Used mainly for debugging purposes. This version displays the path relative to the current node, and is good for copy/pasting into the [method get_node] function. It also can be used in game UI/UX.  
         *  May print, for example:  
         *  [codeblock lang=text]  
         *  TheGame  
         *  TheGame/Menu  
         *  TheGame/Menu/Label  
         *  TheGame/Menu/Camera2D  
         *  TheGame/SplashScreen  
         *  TheGame/SplashScreen/Camera2D  
         *  [/codeblock]  
         */
        getTreeString(): string
        
        /** Similar to [method get_tree_string], this returns the tree as a [String]. This version displays a more graphical representation similar to what is displayed in the Scene Dock. It is useful for inspecting larger trees.  
         *  May print, for example:  
         *  [codeblock lang=text]  
         *   ┖╴TheGame  
         *      ┠╴Menu  
         *      ┃  ┠╴Label  
         *      ┃  ┖╴Camera2D  
         *      ┖╴SplashScreen  
         *         ┖╴Camera2D  
         *  [/codeblock]  
         */
        getTreeStringPretty(): string
        
        /** Calls [method Object.notification] with [param what] on this node and all of its children, recursively. */
        propagateNotification(what: int64): void
        
        /** Calls the given [param method] name, passing [param args] as arguments, on this node and all of its children, recursively.  
         *  If [param parent_first] is `true`, the method is called on this node first, then on all of its children. If `false`, the children's methods are called first.  
         */
        propagateCall(method: StringName, args?: GArray /* = [] */, parentFirst?: boolean /* = false */): void
        
        /** If set to `true`, enables physics (fixed framerate) processing. When a node is being processed, it will receive a [constant NOTIFICATION_PHYSICS_PROCESS] at a fixed (usually 60 FPS, see [member Engine.physics_ticks_per_second] to change) interval (and the [method _physics_process] callback will be called if it exists).  
         *      
         *  **Note:** If [method _physics_process] is overridden, this will be automatically enabled before [method _ready] is called.  
         */
        setPhysicsProcess(enable: boolean): void
        
        /** Returns the time elapsed (in seconds) since the last physics callback. This value is identical to [method _physics_process]'s `delta` parameter, and is often consistent at run-time, unless [member Engine.physics_ticks_per_second] is changed. See also [constant NOTIFICATION_PHYSICS_PROCESS].  
         *      
         *  **Note:** The returned value will be larger than expected if running at a framerate lower than [member Engine.physics_ticks_per_second] / [member Engine.max_physics_steps_per_frame] FPS. This is done to avoid "spiral of death" scenarios where performance would plummet due to an ever-increasing number of physics steps per frame. This behavior affects both [method _process] and [method _physics_process]. As a result, avoid using `delta` for time measurements in real-world seconds. Use the [Time] singleton's methods for this purpose instead, such as [method Time.get_ticks_usec].  
         */
        getPhysicsProcessDeltaTime(): float64
        
        /** Returns `true` if physics processing is enabled (see [method set_physics_process]). */
        isPhysicsProcessing(): boolean
        
        /** Returns the time elapsed (in seconds) since the last process callback. This value is identical to [method _process]'s `delta` parameter, and may vary from frame to frame. See also [constant NOTIFICATION_PROCESS].  
         *      
         *  **Note:** The returned value will be larger than expected if running at a framerate lower than [member Engine.physics_ticks_per_second] / [member Engine.max_physics_steps_per_frame] FPS. This is done to avoid "spiral of death" scenarios where performance would plummet due to an ever-increasing number of physics steps per frame. This behavior affects both [method _process] and [method _physics_process]. As a result, avoid using `delta` for time measurements in real-world seconds. Use the [Time] singleton's methods for this purpose instead, such as [method Time.get_ticks_usec].  
         */
        getProcessDeltaTime(): float64
        
        /** If set to `true`, enables processing. When a node is being processed, it will receive a [constant NOTIFICATION_PROCESS] on every drawn frame (and the [method _process] callback will be called if it exists).  
         *      
         *  **Note:** If [method _process] is overridden, this will be automatically enabled before [method _ready] is called.  
         *      
         *  **Note:** This method only affects the [method _process] callback, i.e. it has no effect on other callbacks like [method _physics_process]. If you want to disable all processing for the node, set [member process_mode] to [constant PROCESS_MODE_DISABLED].  
         */
        setProcess(enable: boolean): void
        
        /** Returns `true` if processing is enabled (see [method set_process]). */
        isProcessing(): boolean
        
        /** If set to `true`, enables input processing.  
         *      
         *  **Note:** If [method _input] is overridden, this will be automatically enabled before [method _ready] is called. Input processing is also already enabled for GUI controls, such as [Button] and [TextEdit].  
         */
        setProcessInput(enable: boolean): void
        
        /** Returns `true` if the node is processing input (see [method set_process_input]). */
        isProcessingInput(): boolean
        
        /** If set to `true`, enables shortcut processing for this node.  
         *      
         *  **Note:** If [method _shortcut_input] is overridden, this will be automatically enabled before [method _ready] is called.  
         */
        setProcessShortcutInput(enable: boolean): void
        
        /** Returns `true` if the node is processing shortcuts (see [method set_process_shortcut_input]). */
        isProcessingShortcutInput(): boolean
        
        /** If set to `true`, enables unhandled input processing. It enables the node to receive all input that was not previously handled (usually by a [Control]).  
         *      
         *  **Note:** If [method _unhandled_input] is overridden, this will be automatically enabled before [method _ready] is called. Unhandled input processing is also already enabled for GUI controls, such as [Button] and [TextEdit].  
         */
        setProcessUnhandledInput(enable: boolean): void
        
        /** Returns `true` if the node is processing unhandled input (see [method set_process_unhandled_input]). */
        isProcessingUnhandledInput(): boolean
        
        /** If set to `true`, enables unhandled key input processing.  
         *      
         *  **Note:** If [method _unhandled_key_input] is overridden, this will be automatically enabled before [method _ready] is called.  
         */
        setProcessUnhandledKeyInput(enable: boolean): void
        
        /** Returns `true` if the node is processing unhandled key input (see [method set_process_unhandled_key_input]). */
        isProcessingUnhandledKeyInput(): boolean
        
        /** Returns `true` if the node can receive processing notifications and input callbacks ([constant NOTIFICATION_PROCESS], [method _input], etc.) from the [SceneTree] and [Viewport]. The returned value depends on [member process_mode]:  
         *  - If set to [constant PROCESS_MODE_PAUSABLE], returns `true` when the game is processing, i.e. [member SceneTree.paused] is `false`;  
         *  - If set to [constant PROCESS_MODE_WHEN_PAUSED], returns `true` when the game is paused, i.e. [member SceneTree.paused] is `true`;  
         *  - If set to [constant PROCESS_MODE_ALWAYS], always returns `true`;  
         *  - If set to [constant PROCESS_MODE_DISABLED], always returns `false`;  
         *  - If set to [constant PROCESS_MODE_INHERIT], use the parent node's [member process_mode] to determine the result.  
         *  If the node is not inside the tree, returns `false` no matter the value of [member process_mode].  
         */
        canProcess(): boolean
        
        /** Queues an accessibility information update for this node. */
        queueAccessibilityUpdate(): void
        
        /** Returns main accessibility element RID.  
         *      
         *  **Note:** This method should be called only during accessibility information updates ([constant NOTIFICATION_ACCESSIBILITY_UPDATE]).  
         */
        getAccessibilityElement(): Rid
        
        /** If set to `true`, the node appears folded in the Scene dock. As a result, all of its children are hidden. This method is intended to be used in editor plugins and tools, but it also works in release builds. See also [method is_displayed_folded]. */
        setDisplayFolded(fold: boolean): void
        
        /** Returns `true` if the node is folded (collapsed) in the Scene dock. This method is intended to be used in editor plugins and tools. See also [method set_display_folded]. */
        isDisplayedFolded(): boolean
        
        /** If set to `true`, enables internal processing for this node. Internal processing happens in isolation from the normal [method _process] calls and is used by some nodes internally to guarantee proper functioning even if the node is paused or processing is disabled for scripting ([method set_process]).  
         *  **Warning:** Built-in nodes rely on internal processing for their internal logic. Disabling it is unsafe and may lead to unexpected behavior. Use this method if you know what you are doing.  
         */
        setProcessInternal(enable: boolean): void
        
        /** Returns `true` if internal processing is enabled (see [method set_process_internal]). */
        isProcessingInternal(): boolean
        
        /** If set to `true`, enables internal physics for this node. Internal physics processing happens in isolation from the normal [method _physics_process] calls and is used by some nodes internally to guarantee proper functioning even if the node is paused or physics processing is disabled for scripting ([method set_physics_process]).  
         *  **Warning:** Built-in nodes rely on internal processing for their internal logic. Disabling it is unsafe and may lead to unexpected behavior. Use this method if you know what you are doing.  
         */
        setPhysicsProcessInternal(enable: boolean): void
        
        /** Returns `true` if internal physics processing is enabled (see [method set_physics_process_internal]). */
        isPhysicsProcessingInternal(): boolean
        
        /** Returns `true` if physics interpolation is enabled for this node (see [member physics_interpolation_mode]).  
         *      
         *  **Note:** Interpolation will only be active if both the flag is set **and** physics interpolation is enabled within the [SceneTree]. This can be tested using [method is_physics_interpolated_and_enabled].  
         */
        isPhysicsInterpolated(): boolean
        
        /** Returns `true` if physics interpolation is enabled (see [member physics_interpolation_mode]) **and** enabled in the [SceneTree].  
         *  This is a convenience version of [method is_physics_interpolated] that also checks whether physics interpolation is enabled globally.  
         *  See [member SceneTree.physics_interpolation] and [member ProjectSettings.physics/common/physics_interpolation].  
         */
        isPhysicsInterpolatedAndEnabled(): boolean
        
        /** When physics interpolation is active, moving a node to a radically different transform (such as placement within a level) can result in a visible glitch as the object is rendered moving from the old to new position over the physics tick.  
         *  That glitch can be prevented by calling this method, which temporarily disables interpolation until the physics tick is complete.  
         *  The notification [constant NOTIFICATION_RESET_PHYSICS_INTERPOLATION] will be received by the node and all children recursively.  
         *      
         *  **Note:** This function should be called **after** moving the node, rather than before.  
         */
        resetPhysicsInterpolation(): void
        
        /** Makes this node inherit the translation domain from its parent node. If this node has no parent, the main translation domain will be used.  
         *  This is the default behavior for all nodes. Calling [method Object.set_translation_domain] disables this behavior.  
         */
        setTranslationDomainInherited(): void
        
        /** Returns the [Window] that contains this node. If the node is in the main window, this is equivalent to getting the root node (`get_tree().get_root()`). */
        getWindow(): null | Window
        
        /** Returns the [Window] that contains this node, or the last exclusive child in a chain of windows starting with the one that contains this node. */
        getLastExclusiveWindow(): null | Window
        
        /** Returns the [SceneTree] that contains this node. If this node is not inside the tree, generates an error and returns `null`. See also [method is_inside_tree]. */
        getTree(): null | SceneTree
        
        /** Creates a new [Tween] and binds it to this node.  
         *  This is the equivalent of doing:  
         *    
         *  The Tween will start automatically on the next process frame or physics frame (depending on [enum Tween.TweenProcessMode]). See [method Tween.bind_node] for more info on Tweens bound to nodes.  
         *      
         *  **Note:** The method can still be used when the node is not inside [SceneTree]. It can fail in an unlikely case of using a custom [MainLoop].  
         */
        createTween(): Tween
        
        /** Duplicates the node, returning a new node with all of its properties, signals, groups, and children copied from the original. The behavior can be tweaked through the [param flags] (see [enum DuplicateFlags]). Internal nodes are not duplicated.  
         *      
         *  **Note:** For nodes with a [Script] attached, if [method Object._init] has been defined with required parameters, the duplicated node will not have a [Script].  
         */
        duplicate(flags?: int64 /* = 15 */): null | Node
        
        /** Replaces this node by the given [param node]. All children of this node are moved to [param node].  
         *  If [param keep_groups] is `true`, the [param node] is added to the same groups that the replaced node is in (see [method add_to_group]).  
         *  **Warning:** The replaced node is removed from the tree, but it is **not** deleted. To prevent memory leaks, store a reference to the node in a variable, or use [method Object.free].  
         */
        replaceBy(node: Node, keepGroups?: boolean /* = false */): void
        
        /** If set to `true`, the node becomes a [InstancePlaceholder] when packed and instantiated from a [PackedScene]. See also [method get_scene_instance_load_placeholder]. */
        setSceneInstanceLoadPlaceholder(loadPlaceholder: boolean): void
        
        /** Returns `true` if this node is an instance load placeholder. See [InstancePlaceholder] and [method set_scene_instance_load_placeholder]. */
        getSceneInstanceLoadPlaceholder(): boolean
        
        /** Set to `true` to allow all nodes owned by [param node] to be available, and editable, in the Scene dock, even if their [member owner] is not the scene root. This method is intended to be used in editor plugins and tools, but it also works in release builds. See also [method is_editable_instance]. */
        setEditableInstance(node: Node, isEditable: boolean): void
        
        /** Returns `true` if [param node] has editable children enabled relative to this node. This method is intended to be used in editor plugins and tools. See also [method set_editable_instance]. */
        isEditableInstance(node: Node): boolean
        
        /** Returns the node's closest [Viewport] ancestor, if the node is inside the tree. Otherwise, returns `null`. */
        getViewport(): null | Viewport
        
        /** Queues this node to be deleted at the end of the current frame. When deleted, all of its children are deleted as well, and all references to the node and its children become invalid.  
         *  Unlike with [method Object.free], the node is not deleted instantly, and it can still be accessed before deletion. It is also safe to call [method queue_free] multiple times. Use [method Object.is_queued_for_deletion] to check if the node will be deleted at the end of the frame.  
         *      
         *  **Note:** The node will only be freed after all other deferred calls are finished. Using this method is not always the same as calling [method Object.free] through [method Object.call_deferred].  
         */
        queueFree(): void
        
        /** Requests [method _ready] to be called again the next time the node enters the tree. Does **not** immediately call [method _ready].  
         *      
         *  **Note:** This method only affects the current node. If the node's children also need to request ready, this method needs to be called for each one of them. When the node and its children enter the tree again, the order of [method _ready] callbacks will be the same as normal.  
         */
        requestReady(): void
        
        /** Returns `true` if the node is ready, i.e. it's inside scene tree and all its children are initialized.  
         *  [method request_ready] resets it back to `false`.  
         */
        isNodeReady(): boolean
        
        /** Sets the node's multiplayer authority to the peer with the given peer [param id]. The multiplayer authority is the peer that has authority over the node on the network. Defaults to peer ID 1 (the server). Useful in conjunction with [method rpc_config] and the [MultiplayerAPI].  
         *  If [param recursive] is `true`, the given peer is recursively set as the authority for all children of this node.  
         *  **Warning:** This does **not** automatically replicate the new authority to other peers. It is the developer's responsibility to do so. You may replicate the new authority's information using [member MultiplayerSpawner.spawn_function], an RPC, or a [MultiplayerSynchronizer]. Furthermore, the parent's authority does **not** propagate to newly added children.  
         */
        setMultiplayerAuthority(id: int64, recursive?: boolean /* = true */): void
        
        /** Returns the peer ID of the multiplayer authority for this node. See [method set_multiplayer_authority]. */
        getMultiplayerAuthority(): int64
        
        /** Returns `true` if the local system is the multiplayer authority of this node. */
        isMultiplayerAuthority(): boolean
        
        /** Changes the RPC configuration for the given [param method]. [param config] should either be `null` to disable the feature (as by default), or a [Dictionary] containing the following entries:  
         *  - `rpc_mode`: see [enum MultiplayerAPI.RPCMode];  
         *  - `transfer_mode`: see [enum MultiplayerPeer.TransferMode];  
         *  - `call_local`: if `true`, the method will also be called locally;  
         *  - `channel`: an [int] representing the channel to send the RPC on.  
         *      
         *  **Note:** In GDScript, this method corresponds to the [annotation @GDScript.@rpc] annotation, with various parameters passed (`@rpc(any)`, `@rpc(authority)`...). See also the [url=https://docs.godotengine.org/en/latest/tutorials/networking/high_level_multiplayer.html]high-level multiplayer[/url] tutorial.  
         */
        rpcConfig(method: StringName, config: any): void
        
        /** Returns a [Dictionary] mapping method names to their RPC configuration defined for this node using [method rpc_config]. */
        getRpcConfig(): any
        
        /** Translates a [param message], using the translation catalogs configured in the Project Settings. Further [param context] can be specified to help with the translation. Note that most [Control] nodes automatically translate their strings, so this method is mostly useful for formatted strings or custom drawn text.  
         *  This method works the same as [method Object.tr], with the addition of respecting the [member auto_translate_mode] state.  
         *  If [method Object.can_translate_messages] is `false`, or no translation is available, this method returns the [param message] without changes. See [method Object.set_message_translation].  
         *  For detailed examples, see [url=https://docs.godotengine.org/en/latest/tutorials/i18n/internationalizing_games.html]Internationalizing games[/url].  
         */
        atr(message: string, context?: StringName /* = '' */): string
        
        /** Translates a [param message] or [param plural_message], using the translation catalogs configured in the Project Settings. Further [param context] can be specified to help with the translation.  
         *  This method works the same as [method Object.tr_n], with the addition of respecting the [member auto_translate_mode] state.  
         *  If [method Object.can_translate_messages] is `false`, or no translation is available, this method returns [param message] or [param plural_message], without changes. See [method Object.set_message_translation].  
         *  The [param n] is the number, or amount, of the message's subject. It is used by the translation system to fetch the correct plural form for the current language.  
         *  For detailed examples, see [url=https://docs.godotengine.org/en/latest/tutorials/i18n/localization_using_gettext.html]Localization using gettext[/url].  
         *      
         *  **Note:** Negative and [float] numbers may not properly apply to some countable subjects. It's recommended to handle these cases with [method atr].  
         */
        atrN(message: string, pluralMessage: StringName, n: int64, context?: StringName /* = '' */): string
        _setPropertyPinned(property: string, pinned: boolean): void
        
        /** Sends a remote procedure call request for the given [param method] to peers on the network (and locally), sending additional arguments to the method called by the RPC. The call request will only be received by nodes with the same [NodePath], including the exact same [member name]. Behavior depends on the RPC configuration for the given [param method] (see [method rpc_config] and [annotation @GDScript.@rpc]). By default, methods are not exposed to RPCs.  
         *  May return [constant OK] if the call is successful, [constant ERR_INVALID_PARAMETER] if the arguments passed in the [param method] do not match, [constant ERR_UNCONFIGURED] if the node's [member multiplayer] cannot be fetched (such as when the node is not inside the tree), [constant ERR_CONNECTION_ERROR] if [member multiplayer]'s connection is not available.  
         *      
         *  **Note:** You can only safely use RPCs on clients after you received the [signal MultiplayerAPI.connected_to_server] signal from the [MultiplayerAPI]. You also need to keep track of the connection state, either by the [MultiplayerAPI] signals like [signal MultiplayerAPI.server_disconnected] or by checking (`get_multiplayer().peer.get_connection_status() == CONNECTION_CONNECTED`).  
         */
        rpc(method: StringName, ...varargs: any[]): GError
        
        /** Sends a [method rpc] to a specific peer identified by [param peer_id] (see [method MultiplayerPeer.set_target_peer]).  
         *  May return [constant OK] if the call is successful, [constant ERR_INVALID_PARAMETER] if the arguments passed in the [param method] do not match, [constant ERR_UNCONFIGURED] if the node's [member multiplayer] cannot be fetched (such as when the node is not inside the tree), [constant ERR_CONNECTION_ERROR] if [member multiplayer]'s connection is not available.  
         */
        rpcId(peerId: int64, method: StringName, ...varargs: any[]): GError
        
        /** Refreshes the warnings displayed for this node in the Scene dock. Use [method _get_configuration_warnings] to customize the warning messages to display. */
        updateConfigurationWarnings(): void
        
        /** This function is similar to [method Object.call_deferred] except that the call will take place when the node thread group is processed. If the node thread group processes in sub-threads, then the call will be done on that thread, right before [constant NOTIFICATION_PROCESS] or [constant NOTIFICATION_PHYSICS_PROCESS], the [method _process] or [method _physics_process] or their internal versions are called. */
        callDeferredThreadGroup(method: StringName, ...varargs: any[]): any
        
        /** Similar to [method call_deferred_thread_group], but for setting properties. */
        setDeferredThreadGroup(property: StringName, value: any): void
        
        /** Similar to [method call_deferred_thread_group], but for notifications. */
        notifyDeferredThreadGroup(what: int64): void
        
        /** This function ensures that the calling of this function will succeed, no matter whether it's being done from a thread or not. If called from a thread that is not allowed to call the function, the call will become deferred. Otherwise, the call will go through directly. */
        callThreadSafe(method: StringName, ...varargs: any[]): any
        
        /** Similar to [method call_thread_safe], but for setting properties. */
        setThreadSafe(property: StringName, value: any): void
        
        /** Similar to [method call_thread_safe], but for notifications. */
        notifyThreadSafe(what: int64): void
        get _importPath(): NodePath
        set _importPath(value: NodePath | string)
        
        /** If `true`, the node can be accessed from any node sharing the same [member owner] or from the [member owner] itself, with special `%Name` syntax in [method get_node].  
         *      
         *  **Note:** If another node with the same [member owner] shares the same [member name] as this node, the other node will no longer be accessible as unique.  
         */
        get uniqueNameInOwner(): boolean
        set uniqueNameInOwner(value: boolean)
        
        /** The original scene's file path, if the node has been instantiated from a [PackedScene] file. Only scene root nodes contains this. */
        get sceneFilePath(): string
        set sceneFilePath(value: string)
        
        /** The owner of this node. The owner must be an ancestor of this node. When packing the owner node in a [PackedScene], all the nodes it owns are also saved with it. See also [member unique_name_in_owner].  
         *      
         *  **Note:** In the editor, nodes not owned by the scene root are usually not displayed in the Scene dock, and will **not** be saved. To prevent this, remember to set the owner after calling [method add_child].  
         */
        get owner(): null | Node
        set owner(value: null | Node)
        
        /** The [MultiplayerAPI] instance associated with this node. See [method SceneTree.get_multiplayer].  
         *      
         *  **Note:** Renaming the node, or moving it in the tree, will not move the [MultiplayerAPI] to the new path, you will have to update this manually.  
         */
        get multiplayer(): null | MultiplayerApi
        set multiplayer(value: null | MultiplayerApi)
        
        /** The node's processing behavior (see [enum ProcessMode]). To check if the node can process in its current mode, use [method can_process]. */
        get processMode(): int64
        set processMode(value: int64)
        
        /** The node's execution order of the process callbacks ([method _process], [constant NOTIFICATION_PROCESS], and [constant NOTIFICATION_INTERNAL_PROCESS]). Nodes whose priority value is  *lower*  call their process callbacks first, regardless of tree order. */
        get processPriority(): int64
        set processPriority(value: int64)
        
        /** Similar to [member process_priority] but for [constant NOTIFICATION_PHYSICS_PROCESS], [method _physics_process], or [constant NOTIFICATION_INTERNAL_PHYSICS_PROCESS]. */
        get processPhysicsPriority(): int64
        set processPhysicsPriority(value: int64)
        
        /** Set the process thread group for this node (basically, whether it receives [constant NOTIFICATION_PROCESS], [constant NOTIFICATION_PHYSICS_PROCESS], [method _process] or [method _physics_process] (and the internal versions) on the main thread or in a sub-thread.  
         *  By default, the thread group is [constant PROCESS_THREAD_GROUP_INHERIT], which means that this node belongs to the same thread group as the parent node. The thread groups means that nodes in a specific thread group will process together, separate to other thread groups (depending on [member process_thread_group_order]). If the value is set is [constant PROCESS_THREAD_GROUP_SUB_THREAD], this thread group will occur on a sub thread (not the main thread), otherwise if set to [constant PROCESS_THREAD_GROUP_MAIN_THREAD] it will process on the main thread. If there is not a parent or grandparent node set to something other than inherit, the node will belong to the  *default thread group* . This default group will process on the main thread and its group order is 0.  
         *  During processing in a sub-thread, accessing most functions in nodes outside the thread group is forbidden (and it will result in an error in debug mode). Use [method Object.call_deferred], [method call_thread_safe], [method call_deferred_thread_group] and the likes in order to communicate from the thread groups to the main thread (or to other thread groups).  
         *  To better understand process thread groups, the idea is that any node set to any other value than [constant PROCESS_THREAD_GROUP_INHERIT] will include any child (and grandchild) nodes set to inherit into its process thread group. This means that the processing of all the nodes in the group will happen together, at the same time as the node including them.  
         */
        get processThreadGroup(): int64
        set processThreadGroup(value: int64)
        
        /** Change the process thread group order. Groups with a lesser order will process before groups with a greater order. This is useful when a large amount of nodes process in sub thread and, afterwards, another group wants to collect their result in the main thread, as an example. */
        get processThreadGroupOrder(): int64
        set processThreadGroupOrder(value: int64)
        
        /** Set whether the current thread group will process messages (calls to [method call_deferred_thread_group] on threads), and whether it wants to receive them during regular process or physics process callbacks. */
        get processThreadMessages(): int64
        set processThreadMessages(value: int64)
        
        /** Allows enabling or disabling physics interpolation per node, offering a finer grain of control than turning physics interpolation on and off globally. See [member ProjectSettings.physics/common/physics_interpolation] and [member SceneTree.physics_interpolation] for the global setting.  
         *      
         *  **Note:** When teleporting a node to a distant position you should temporarily disable interpolation with [method Node.reset_physics_interpolation].  
         */
        get physicsInterpolationMode(): int64
        set physicsInterpolationMode(value: int64)
        
        /** Defines if any text should automatically change to its translated version depending on the current locale (for nodes such as [Label], [RichTextLabel], [Window], etc.). Also decides if the node's strings should be parsed for POT generation.  
         *      
         *  **Note:** For the root node, auto translate mode can also be set via [member ProjectSettings.internationalization/rendering/root_node_auto_translate].  
         */
        get autoTranslateMode(): int64
        set autoTranslateMode(value: int64)
        
        /** An optional description to the node. It will be displayed as a tooltip when hovering over the node in the editor's Scene dock. */
        get editorDescription(): string
        set editorDescription(value: string)
        
        /** The human-readable node name that is reported to assistive apps. */
        get accessibilityName(): string
        set accessibilityName(value: string)
        
        /** The human-readable node description that is reported to assistive apps. */
        get accessibilityDescription(): string
        set accessibilityDescription(value: string)
        
        /** Live region update mode, a live region is [Node] that is updated as a result of an external event when user focus may be elsewhere. */
        get accessibilityLive(): int64
        set accessibilityLive(value: int64)
        
        /** The list of nodes which are controlled by this node. */
        get accessibilityControlsNodes(): GArray
        set accessibilityControlsNodes(value: GArray)
        
        /** The list of nodes which are describing this node. */
        get accessibilityDescribedByNodes(): GArray
        set accessibilityDescribedByNodes(value: GArray)
        
        /** The list of nodes which label this node. */
        get accessibilityLabeledByNodes(): GArray
        set accessibilityLabeledByNodes(value: GArray)
        
        /** The list of nodes which this node flows into. */
        get accessibilityFlowToNodes(): GArray
        set accessibilityFlowToNodes(value: GArray)
        
        /** Emitted when the node is considered ready, after [method _ready] is called. */
        readonly ready: Signal<() => void>
        
        /** Emitted when the node's [member name] is changed, if the node is inside the tree. */
        readonly renamed: Signal<() => void>
        
        /** Emitted when the node enters the tree.  
         *  This signal is emitted  *after*  the related [constant NOTIFICATION_ENTER_TREE] notification.  
         */
        readonly treeEntered: Signal<() => void>
        
        /** Emitted when the node is just about to exit the tree. The node is still valid. As such, this is the right place for de-initialization (or a "destructor", if you will).  
         *  This signal is emitted  *after*  the node's [method _exit_tree], and  *before*  the related [constant NOTIFICATION_EXIT_TREE].  
         */
        readonly treeExiting: Signal<() => void>
        
        /** Emitted after the node exits the tree and is no longer active.  
         *  This signal is emitted  *after*  the related [constant NOTIFICATION_EXIT_TREE] notification.  
         */
        readonly treeExited: Signal<() => void>
        
        /** Emitted when the child [param node] enters the [SceneTree], usually because this node entered the tree (see [signal tree_entered]), or [method add_child] has been called.  
         *  This signal is emitted  *after*  the child node's own [constant NOTIFICATION_ENTER_TREE] and [signal tree_entered].  
         */
        readonly childEnteredTree: Signal<(node: Node) => void>
        
        /** Emitted when the child [param node] is about to exit the [SceneTree], usually because this node is exiting the tree (see [signal tree_exiting]), or because the child [param node] is being removed or freed.  
         *  When this signal is received, the child [param node] is still accessible inside the tree. This signal is emitted  *after*  the child node's own [signal tree_exiting] and [constant NOTIFICATION_EXIT_TREE].  
         */
        readonly childExitingTree: Signal<(node: Node) => void>
        
        /** Emitted when the list of children is changed. This happens when child nodes are added, moved or removed. */
        readonly childOrderChanged: Signal<() => void>
        
        /** Emitted when this node is being replaced by the [param node], see [method replace_by].  
         *  This signal is emitted  *after*  [param node] has been added as a child of the original parent node, but  *before*  all original child nodes have been reparented to [param node].  
         */
        readonly replacingBy: Signal<(node: Node) => void>
        
        /** Emitted when the node's editor description field changed. */
        readonly editorDescriptionChanged: Signal<(node: Node) => void>
        
        /** Emitted when an attribute of the node that is relevant to the editor is changed. Only emitted in the editor. */
        readonly editorStateChanged: Signal<() => void>
    }
    /** A 2D game object, inherited by all 2D-related nodes. Has a position, rotation, scale, and skew.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_node2d.html  
     */
    class Node2D<Map extends NodePathMap = any> extends CanvasItem<Map> {
        constructor(identifier?: any)
        /** Applies a rotation to the node, in radians, starting from its current rotation. */
        rotate(radians: float64): void
        
        /** Applies a local translation on the node's X axis based on the [method Node._process]'s [param delta]. If [param scaled] is `false`, normalizes the movement. */
        moveLocalX(delta: float64, scaled?: boolean /* = false */): void
        
        /** Applies a local translation on the node's Y axis based on the [method Node._process]'s [param delta]. If [param scaled] is `false`, normalizes the movement. */
        moveLocalY(delta: float64, scaled?: boolean /* = false */): void
        
        /** Translates the node by the given [param offset] in local coordinates. */
        translate(offset: Vector2): void
        
        /** Adds the [param offset] vector to the node's global position. */
        globalTranslate(offset: Vector2): void
        
        /** Multiplies the current scale by the [param ratio] vector. */
        applyScale(ratio: Vector2): void
        
        /** Rotates the node so that its local +X axis points towards the [param point], which is expected to use global coordinates.  
         *  [param point] should not be the same as the node's position, otherwise the node always looks to the right.  
         */
        lookAt(point: Vector2): void
        
        /** Returns the angle between the node and the [param point] in radians.  
         *  [url=https://raw.githubusercontent.com/godotengine/godot-docs/master/img/node2d_get_angle_to.png]Illustration of the returned angle.[/url]  
         */
        getAngleTo(point: Vector2): float64
        
        /** Transforms the provided global position into a position in local coordinate space. The output will be local relative to the [Node2D] it is called on. e.g. It is appropriate for determining the positions of child nodes, but it is not appropriate for determining its own position relative to its parent. */
        toLocal(globalPoint: Vector2): Vector2
        
        /** Transforms the provided local position into a position in global coordinate space. The input is expected to be local relative to the [Node2D] it is called on. e.g. Applying this method to the positions of child nodes will correctly transform their positions into the global coordinate space, but applying it to a node's own position will give an incorrect result, as it will incorporate the node's own transformation into its global position. */
        toGlobal(localPoint: Vector2): Vector2
        
        /** Returns the [Transform2D] relative to this node's parent. */
        getRelativeTransformToParent(parent: Node): Transform2D
        
        /** Position, relative to the node's parent. See also [member global_position]. */
        get position(): Vector2
        set position(value: Vector2)
        
        /** Rotation in radians, relative to the node's parent. See also [member global_rotation].  
         *      
         *  **Note:** This property is edited in the inspector in degrees. If you want to use degrees in a script, use [member rotation_degrees].  
         */
        get rotation(): float64
        set rotation(value: float64)
        
        /** Helper property to access [member rotation] in degrees instead of radians. See also [member global_rotation_degrees]. */
        get rotationDegrees(): float64
        set rotationDegrees(value: float64)
        
        /** The node's scale, relative to the node's parent. Unscaled value: `(1, 1)`. See also [member global_scale].  
         *      
         *  **Note:** Negative X scales in 2D are not decomposable from the transformation matrix. Due to the way scale is represented with transformation matrices in Godot, negative scales on the X axis will be changed to negative scales on the Y axis and a rotation of 180 degrees when decomposed.  
         */
        get scale(): Vector2
        set scale(value: Vector2)
        
        /** If set to a non-zero value, slants the node in one direction or another. This can be used for pseudo-3D effects. See also [member global_skew].  
         *      
         *  **Note:** Skew is performed on the X axis only, and  *between*  rotation and scaling.  
         *      
         *  **Note:** This property is edited in the inspector in degrees. If you want to use degrees in a script, use `skew = deg_to_rad(value_in_degrees)`.  
         */
        get skew(): float64
        set skew(value: float64)
        
        /** The node's [Transform2D], relative to the node's parent. See also [member global_transform]. */
        get transform(): Transform2D
        set transform(value: Transform2D)
        
        /** Global position. See also [member position]. */
        get globalPosition(): Vector2
        set globalPosition(value: Vector2)
        
        /** Global rotation in radians. See also [member rotation]. */
        get globalRotation(): float64
        set globalRotation(value: float64)
        
        /** Helper property to access [member global_rotation] in degrees instead of radians. See also [member rotation_degrees]. */
        get globalRotationDegrees(): float64
        set globalRotationDegrees(value: float64)
        
        /** Global scale. See also [member scale]. */
        get globalScale(): Vector2
        set globalScale(value: Vector2)
        
        /** Global skew in radians. See also [member skew]. */
        get globalSkew(): float64
        set globalSkew(value: float64)
        
        /** Global [Transform2D]. See also [member transform]. */
        get globalTransform(): Transform2D
        set globalTransform(value: Transform2D)
    }
    namespace Node3D {
        enum RotationEditMode {
            RotationEditModeEuler = 0,
            RotationEditModeQuaternion = 1,
            RotationEditModeBasis = 2,
        }
    }
    /** Base object in 3D space, inherited by all 3D nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_node3d.html  
     */
    class Node3D<Map extends NodePathMap = any> extends Node<Map> {
        /** Notification received when this node's [member global_transform] changes, if [method is_transform_notification_enabled] is `true`. See also [method set_notify_transform].  
         *      
         *  **Note:** Most 3D nodes such as [VisualInstance3D] or [CollisionObject3D] automatically enable this to function correctly.  
         *      
         *  **Note:** In the editor, nodes will propagate this notification to their children if a gizmo is attached (see [method add_gizmo]).  
         */
        static readonly NOTIFICATION_TRANSFORM_CHANGED = 2000
        
        /** Notification received when this node is registered to a new [World3D] (see [method get_world_3d]). */
        static readonly NOTIFICATION_ENTER_WORLD = 41
        
        /** Notification received when this node is unregistered from the current [World3D] (see [method get_world_3d]). */
        static readonly NOTIFICATION_EXIT_WORLD = 42
        
        /** Notification received when this node's visibility changes (see [member visible] and [method is_visible_in_tree]).  
         *  This notification is received  *before*  the related [signal visibility_changed] signal.  
         */
        static readonly NOTIFICATION_VISIBILITY_CHANGED = 43
        
        /** Notification received when this node's [member transform] changes, if [method is_local_transform_notification_enabled] is `true`. This is not received when a parent [Node3D]'s [member transform] changes. See also [method set_notify_local_transform].  
         *      
         *  **Note:** Some 3D nodes such as [CSGShape3D] or [CollisionShape3D] automatically enable this to function correctly.  
         */
        static readonly NOTIFICATION_LOCAL_TRANSFORM_CHANGED = 44
        
        /** The rotation is edited using a [Vector3] in [url=https://en.wikipedia.org/wiki/Euler_angles]Euler angles[/url]. */
        static readonly ROTATION_EDIT_MODE_EULER = 0
        
        /** The rotation is edited using a [Quaternion]. */
        static readonly ROTATION_EDIT_MODE_QUATERNION = 1
        
        /** The rotation is edited using a [Basis]. In this mode, the raw [member basis]'s axes can be freely modified, but the [member scale] property is not available. */
        static readonly ROTATION_EDIT_MODE_BASIS = 2
        constructor(identifier?: any)
        
        /** When using physics interpolation, there will be circumstances in which you want to know the interpolated (displayed) transform of a node rather than the standard transform (which may only be accurate to the most recent physics tick).  
         *  This is particularly important for frame-based operations that take place in [method Node._process], rather than [method Node._physics_process]. Examples include [Camera3D]s focusing on a node, or finding where to fire lasers from on a frame rather than physics tick.  
         *      
         *  **Note:** This function creates an interpolation pump on the [Node3D] the first time it is called, which can respond to physics interpolation resets. If you get problems with "streaking" when initially following a [Node3D], be sure to call [method get_global_transform_interpolated] at least once  *before*  resetting the [Node3D] physics interpolation.  
         */
        getGlobalTransformInterpolated(): Transform3D
        
        /** Returns the parent [Node3D] that directly affects this node's [member global_transform]. Returns `null` if no parent exists, the parent is not a [Node3D], or [member top_level] is `true`.  
         *      
         *  **Note:** This method is not always equivalent to [method Node.get_parent], which does not take [member top_level] into account.  
         */
        getParentNode3D(): null | Node3D
        
        /** If `true`, the node will not receive [constant NOTIFICATION_TRANSFORM_CHANGED] or [constant NOTIFICATION_LOCAL_TRANSFORM_CHANGED].  
         *  It may useful to call this method when handling these notifications to prevent infinite recursion.  
         */
        setIgnoreTransformNotification(enabled: boolean): void
        
        /** If `true`, this node's [member global_transform] is automatically orthonormalized. This results in this node not appearing distorted, as if its global scale were set to [constant Vector3.ONE] (or its negative counterpart). See also [method is_scale_disabled] and [method orthonormalize].  
         *      
         *  **Note:** [member transform] is not affected by this setting.  
         */
        setDisableScale(disable: boolean): void
        
        /** Returns `true` if this node's [member global_transform] is automatically orthonormalized. This results in this node not appearing distorted, as if its global scale were set to [constant Vector3.ONE] (or its negative counterpart). See also [method set_disable_scale] and [method orthonormalize].  
         *      
         *  **Note:** [member transform] is not affected by this setting.  
         */
        isScaleDisabled(): boolean
        
        /** Returns the [World3D] this node is registered to.  
         *  Usually, this is the same as the world used by this node's viewport (see [method Node.get_viewport] and [method Viewport.find_world_3d]).  
         */
        getWorld3D(): null | World3D
        
        /** Forces the node's [member global_transform] to update, by sending [constant NOTIFICATION_TRANSFORM_CHANGED]. Fails if the node is not inside the tree.  
         *      
         *  **Note:** For performance reasons, transform changes are usually accumulated and applied  *once*  at the end of the frame. The update propagates through [Node3D] children, as well. Therefore, use this method only when you need an up-to-date transform (such as during physics operations).  
         */
        forceUpdateTransform(): void
        
        /** Updates all the [EditorNode3DGizmo] objects attached to this node. Only works in the editor. */
        updateGizmos(): void
        
        /** Attaches the given [param gizmo] to this node. Only works in the editor.  
         *      
         *  **Note:** [param gizmo] should be an [EditorNode3DGizmo]. The argument type is [Node3DGizmo] to avoid depending on editor classes in [Node3D].  
         */
        addGizmo(gizmo: Node3DGizmo): void
        
        /** Returns all the [EditorNode3DGizmo] objects attached to this node. Only works in the editor. */
        getGizmos(): GArray
        
        /** Clears all [EditorNode3DGizmo] objects attached to this node. Only works in the editor. */
        clearGizmos(): void
        
        /** Selects the [param gizmo]'s subgizmo with the given [param id] and sets its transform. Only works in the editor.  
         *      
         *  **Note:** The gizmo object would typically be an instance of [EditorNode3DGizmo], but the argument type is kept generic to avoid creating a dependency on editor classes in [Node3D].  
         */
        setSubgizmoSelection(gizmo: Node3DGizmo, id: int64, transform: Transform3D): void
        
        /** Deselects all subgizmos for this node. Useful to call when the selected subgizmo may no longer exist after a property change. Only works in the editor. */
        clearSubgizmoSelection(): void
        
        /** Returns `true` if this node is inside the scene tree and the [member visible] property is `true` for this node and all of its [Node3D] ancestors  *in sequence* . An ancestor of any other type (such as [Node] or [Node2D]) breaks the sequence. See also [method Node.get_parent].  
         *      
         *  **Note:** This method cannot take [member VisualInstance3D.layers] into account, so even if this method returns `true`, the node may not be rendered.  
         */
        isVisibleInTree(): boolean
        
        /** Allows this node to be rendered. Equivalent to setting [member visible] to `true`. This is the opposite of [method hide]. */
        show(): void
        
        /** Prevents this node from being rendered. Equivalent to setting [member visible] to `false`. This is the opposite of [method show]. */
        hide(): void
        
        /** If `true`, the node will receive [constant NOTIFICATION_LOCAL_TRANSFORM_CHANGED] whenever [member transform] changes.  
         *      
         *  **Note:** Some 3D nodes such as [CSGShape3D] or [CollisionShape3D] automatically enable this to function correctly.  
         */
        setNotifyLocalTransform(enable: boolean): void
        
        /** Returns `true` if the node receives [constant NOTIFICATION_LOCAL_TRANSFORM_CHANGED] whenever [member transform] changes. This is enabled with [method set_notify_local_transform]. */
        isLocalTransformNotificationEnabled(): boolean
        
        /** If `true`, the node will receive [constant NOTIFICATION_TRANSFORM_CHANGED] whenever [member global_transform] changes.  
         *      
         *  **Note:** Most 3D nodes such as [VisualInstance3D] or [CollisionObject3D] automatically enable this to function correctly.  
         *      
         *  **Note:** In the editor, nodes will propagate this notification to their children if a gizmo is attached (see [method add_gizmo]).  
         */
        setNotifyTransform(enable: boolean): void
        
        /** Returns `true` if the node receives [constant NOTIFICATION_TRANSFORM_CHANGED] whenever [member global_transform] changes. This is enabled with [method set_notify_transform]. */
        isTransformNotificationEnabled(): boolean
        
        /** Rotates this node's [member basis] around the [param axis] by the given [param angle], in radians. This operation is calculated in parent space (relative to the parent) and preserves the [member position]. */
        rotate(axis: Vector3, angle: float64): void
        
        /** Rotates this node's [member global_basis] around the global [param axis] by the given [param angle], in radians. This operation is calculated in global space (relative to the world) and preserves the [member global_position]. */
        globalRotate(axis: Vector3, angle: float64): void
        
        /** Scales this node's [member global_basis] by the given [param scale] factor. This operation is calculated in global space (relative to the world) and preserves the [member global_position].  
         *      
         *  **Note:** This method is not to be confused with the [member scale] property.  
         */
        globalScale(scale: Vector3): void
        
        /** Adds the given translation [param offset] to the node's [member global_position] in global space (relative to the world). */
        globalTranslate(offset: Vector3): void
        
        /** Rotates this node's [member basis] around the [param axis] by the given [param angle], in radians. This operation is calculated in local space (relative to this node) and preserves the [member position]. */
        rotateObjectLocal(axis: Vector3, angle: float64): void
        
        /** Scales this node's [member basis] by the given [param scale] factor. This operation is calculated in local space (relative to this node) and preserves the [member position]. */
        scaleObjectLocal(scale: Vector3): void
        
        /** Adds the given translation [param offset] to the node's position, in local space (relative to this node). */
        translateObjectLocal(offset: Vector3): void
        
        /** Rotates this node's [member basis] around the X axis by the given [param angle], in radians. This operation is calculated in parent space (relative to the parent) and preserves the [member position]. */
        rotateX(angle: float64): void
        
        /** Rotates this node's [member basis] around the Y axis by the given [param angle], in radians. This operation is calculated in parent space (relative to the parent) and preserves the [member position]. */
        rotateY(angle: float64): void
        
        /** Rotates this node's [member basis] around the Z axis by the given [param angle], in radians. This operation is calculated in parent space (relative to the parent) and preserves the [member position]. */
        rotateZ(angle: float64): void
        
        /** Adds the given translation [param offset] to the node's position, in local space (relative to this node).  
         *      
         *  **Note:** Prefer using [method translate_object_local], instead, as this method may be changed in a future release.  
         *      
         *  **Note:** Despite the naming convention, this operation is **not** calculated in parent space for compatibility reasons. To translate in parent space, add [param offset] to the [member position] (`node_3d.position += offset`).  
         */
        translate(offset: Vector3): void
        
        /** Orthonormalizes this node's [member basis]. This method sets this node's [member scale] to [constant Vector3.ONE] (or its negative counterpart), but preserves the [member position] and [member rotation]. See also [method Transform3D.orthonormalized]. */
        orthonormalize(): void
        
        /** Sets this node's [member transform] to [constant Transform3D.IDENTITY], which resets all transformations in parent space ([member position], [member rotation], and [member scale]). */
        setIdentity(): void
        
        /** Rotates the node so that the local forward axis (-Z, [constant Vector3.FORWARD]) points toward the [param target] position. This operation is calculated in global space (relative to the world).  
         *  The local up axis (+Y) points as close to the [param up] vector as possible while staying perpendicular to the local forward axis. The resulting transform is orthogonal, and the scale is preserved. Non-uniform scaling may not work correctly.  
         *  The [param target] position cannot be the same as the node's position, the [param up] vector cannot be [constant Vector3.ZERO]. Furthermore, the direction from the node's position to the [param target] position cannot be parallel to the [param up] vector, to avoid an unintended rotation around the local Z axis.  
         *  If [param use_model_front] is `true`, the +Z axis (asset front) is treated as forward (implies +X is left) and points toward the [param target] position. By default, the -Z axis (camera forward) is treated as forward (implies +X is right).  
         *      
         *  **Note:** This method fails if the node is not in the scene tree. If necessary, use [method look_at_from_position] instead.  
         */
        lookAt(target: Vector3, up?: Vector3 /* = Vector3.ZERO */, useModelFront?: boolean /* = false */): void
        
        /** Moves the node to the specified [param position], then rotates the node to point toward the [param target] position, similar to [method look_at]. This operation is calculated in global space (relative to the world). */
        lookAtFromPosition(position: Vector3, target: Vector3, up?: Vector3 /* = Vector3.ZERO */, useModelFront?: boolean /* = false */): void
        
        /** Returns the [param global_point] converted from global space to this node's local space. This is the opposite of [method to_global]. */
        toLocal(globalPoint: Vector3): Vector3
        
        /** Returns the [param local_point] converted from this node's local space to global space. This is the opposite of [method to_local]. */
        toGlobal(localPoint: Vector3): Vector3
        
        /** The local transformation of this node, in parent space (relative to the parent node). Contains and represents this node's [member position], [member rotation], and [member scale]. */
        get transform(): Transform3D
        set transform(value: Transform3D)
        
        /** The transformation of this node, in global space (relative to the world). Contains and represents this node's [member global_position], [member global_rotation], and global scale.  
         *      
         *  **Note:** If the node is not inside the tree, getting this property fails and returns [constant Transform3D.IDENTITY].  
         */
        get globalTransform(): Transform3D
        set globalTransform(value: Transform3D)
        
        /** Position (translation) of this node in parent space (relative to the parent node). This is equivalent to the [member transform]'s [member Transform3D.origin]. */
        get position(): Vector3
        set position(value: Vector3)
        
        /** Rotation of this node as [url=https://en.wikipedia.org/wiki/Euler_angles]Euler angles[/url], in radians and in parent space (relative to the parent node). This value is obtained from [member basis]'s rotation.  
         *  - The [member Vector3.x] is the angle around the local X axis (pitch);  
         *  - The [member Vector3.y] is the angle around the local Y axis (yaw);  
         *  - The [member Vector3.z] is the angle around the local Z axis (roll).  
         *  The order of each consecutive rotation can be changed with [member rotation_order] (see [enum EulerOrder] constants). By default, the YXZ convention is used ([constant EULER_ORDER_YXZ]).  
         *      
         *  **Note:** This property is edited in degrees in the inspector. If you want to use degrees in a script, use [member rotation_degrees].  
         */
        get rotation(): Vector3
        set rotation(value: Vector3)
        
        /** The [member rotation] of this node, in degrees instead of radians.  
         *      
         *  **Note:** This is **not** the property available in the Inspector dock.  
         */
        get rotationDegrees(): Vector3
        set rotationDegrees(value: Vector3)
        
        /** Rotation of this node represented as a [Quaternion] in parent space (relative to the parent node). This value is obtained from [member basis]'s rotation.  
         *      
         *  **Note:** Quaternions are much more suitable for 3D math but are less intuitive. Setting this property can be useful for interpolation (see [method Quaternion.slerp]).  
         */
        get quaternion(): Quaternion
        set quaternion(value: Quaternion)
        
        /** Basis of the [member transform] property. Represents the rotation, scale, and shear of this node in parent space (relative to the parent node). */
        get basis(): Basis
        set basis(value: Basis)
        
        /** Scale of this node in local space (relative to this node). This value is obtained from [member basis]'s scale.  
         *      
         *  **Note:** The behavior of some 3D node types is not affected by this property. These include [Light3D], [Camera3D], [AudioStreamPlayer3D], and more.  
         *  **Warning:** The scale's components must either be all positive or all negative, and **not** exactly `0.0`. Otherwise, it won't be possible to obtain the scale from the [member basis]. This may cause the intended scale to be lost when reloaded from disk, and potentially other unstable behavior.  
         */
        get scale(): Vector3
        set scale(value: Vector3)
        
        /** How this node's rotation and scale are displayed in the Inspector dock. */
        get rotationEditMode(): int64
        set rotationEditMode(value: int64)
        
        /** The axis rotation order of the [member rotation] property. The final orientation is calculated by rotating around the local X, Y, and Z axis in this order. */
        get rotationOrder(): int64
        set rotationOrder(value: int64)
        
        /** If `true`, the node does not inherit its transformations from its parent. As such, node transformations will only be in global space, which also means that [member global_transform] and [member transform] will be identical. */
        get topLevel(): boolean
        set topLevel(value: boolean)
        
        /** Global position (translation) of this node in global space (relative to the world). This is equivalent to the [member global_transform]'s [member Transform3D.origin].  
         *      
         *  **Note:** If the node is not inside the tree, getting this property fails and returns [constant Vector3.ZERO].  
         */
        get globalPosition(): Vector3
        set globalPosition(value: Vector3)
        
        /** Basis of the [member global_transform] property. Represents the rotation, scale, and shear of this node in global space (relative to the world).  
         *      
         *  **Note:** If the node is not inside the tree, getting this property fails and returns [constant Basis.IDENTITY].  
         */
        get globalBasis(): Basis
        set globalBasis(value: Basis)
        
        /** Global rotation of this node as [url=https://en.wikipedia.org/wiki/Euler_angles]Euler angles[/url], in radians and in global space (relative to the world). This value is obtained from [member global_basis]'s rotation.  
         *  - The [member Vector3.x] is the angle around the global X axis (pitch);  
         *  - The [member Vector3.y] is the angle around the global Y axis (yaw);  
         *  - The [member Vector3.z] is the angle around the global Z axis (roll).  
         *      
         *  **Note:** Unlike [member rotation], this property always follows the YXZ convention ([constant EULER_ORDER_YXZ]).  
         *      
         *  **Note:** If the node is not inside the tree, getting this property fails and returns [constant Vector3.ZERO].  
         */
        get globalRotation(): Vector3
        set globalRotation(value: Vector3)
        
        /** The [member global_rotation] of this node, in degrees instead of radians.  
         *      
         *  **Note:** If the node is not inside the tree, getting this property fails and returns [constant Vector3.ZERO].  
         */
        get globalRotationDegrees(): Vector3
        set globalRotationDegrees(value: Vector3)
        
        /** If `true`, this node can be visible. The node is only rendered when all of its ancestors are visible, as well. That means [method is_visible_in_tree] must return `true`. */
        get visible(): boolean
        set visible(value: boolean)
        
        /** Path to the visibility range parent for this node and its descendants. The visibility parent must be a [GeometryInstance3D].  
         *  Any visual instance will only be visible if the visibility parent (and all of its visibility ancestors) is hidden by being closer to the camera than its own [member GeometryInstance3D.visibility_range_begin]. Nodes hidden via the [member Node3D.visible] property are essentially removed from the visibility dependency tree, so dependent instances will not take the hidden node or its descendants into account.  
         */
        get visibilityParent(): NodePath
        set visibilityParent(value: NodePath | string)
        
        /** Emitted when this node's visibility changes (see [member visible] and [method is_visible_in_tree]).  
         *  This signal is emitted  *after*  the related [constant NOTIFICATION_VISIBILITY_CHANGED] notification.  
         */
        readonly visibilityChanged: Signal<() => void>
    }
    /** Abstract class to expose editor gizmos for [Node3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_node3dgizmo.html  
     */
    class Node3DGizmo extends RefCounted {
        constructor(identifier?: any)
    }
    /** Abstract base class for noise generators.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_noise.html  
     */
    class Noise extends Resource {
        constructor(identifier?: any)
        /** Returns the 1D noise value at the given (x) coordinate. */
        getNoise1D(x: float64): float64
        
        /** Returns the 2D noise value at the given position. */
        getNoise2D(x: float64, y: float64): float64
        
        /** Returns the 2D noise value at the given position. */
        getNoise2Dv(v: Vector2): float64
        
        /** Returns the 3D noise value at the given position. */
        getNoise3D(x: float64, y: float64, z: float64): float64
        
        /** Returns the 3D noise value at the given position. */
        getNoise3Dv(v: Vector3): float64
        
        /** Returns an [Image] containing 2D noise values.  
         *      
         *  **Note:** With [param normalize] set to `false`, the default implementation expects the noise generator to return values in the range `-1.0` to `1.0`.  
         */
        getImage(width: int64, height: int64, invert?: boolean /* = false */, in3DSpace?: boolean /* = false */, normalize?: boolean /* = true */): null | Image
        
        /** Returns an [Image] containing seamless 2D noise values.  
         *      
         *  **Note:** With [param normalize] set to `false`, the default implementation expects the noise generator to return values in the range `-1.0` to `1.0`.  
         */
        getSeamlessImage(width: int64, height: int64, invert?: boolean /* = false */, in3DSpace?: boolean /* = false */, skirt?: float64 /* = 0.1 */, normalize?: boolean /* = true */): null | Image
        
        /** Returns an [Array] of [Image]s containing 3D noise values for use with [method ImageTexture3D.create].  
         *      
         *  **Note:** With [param normalize] set to `false`, the default implementation expects the noise generator to return values in the range `-1.0` to `1.0`.  
         */
        getImage3D(width: int64, height: int64, depth: int64, invert?: boolean /* = false */, normalize?: boolean /* = true */): GArray
        
        /** Returns an [Array] of [Image]s containing seamless 3D noise values for use with [method ImageTexture3D.create].  
         *      
         *  **Note:** With [param normalize] set to `false`, the default implementation expects the noise generator to return values in the range `-1.0` to `1.0`.  
         */
        getSeamlessImage3D(width: int64, height: int64, depth: int64, invert?: boolean /* = false */, skirt?: float64 /* = 0.1 */, normalize?: boolean /* = true */): GArray
    }
    /** A 2D texture filled with noise generated by a [Noise] object.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_noisetexture2d.html  
     */
    class NoiseTexture2D extends Texture2D {
        constructor(identifier?: any)
        /** Width of the generated texture (in pixels). */
        get width(): int64
        set width(value: int64)
        
        /** Height of the generated texture (in pixels). */
        get height(): int64
        set height(value: int64)
        
        /** If `true`, inverts the noise texture. White becomes black, black becomes white. */
        get invert(): boolean
        set invert(value: boolean)
        
        /** Determines whether the noise image is calculated in 3D space. May result in reduced contrast. */
        get in3DSpace(): boolean
        set in3DSpace(value: boolean)
        
        /** Determines whether mipmaps are generated for this texture. Enabling this results in less texture aliasing in the distance, at the cost of increasing memory usage by roughly 33% and making the noise texture generation take longer.  
         *      
         *  **Note:** [member generate_mipmaps] requires mipmap filtering to be enabled on the material using the [NoiseTexture2D] to have an effect.  
         */
        get generateMipmaps(): boolean
        set generateMipmaps(value: boolean)
        
        /** If `true`, a seamless texture is requested from the [Noise] resource.  
         *      
         *  **Note:** Seamless noise textures may take longer to generate and/or can have a lower contrast compared to non-seamless noise depending on the used [Noise] resource. This is because some implementations use higher dimensions for generating seamless noise.  
         *      
         *  **Note:** The default [FastNoiseLite] implementation uses the fallback path for seamless generation. If using a [member width] or [member height] lower than the default, you may need to increase [member seamless_blend_skirt] to make seamless blending more effective.  
         */
        get seamless(): boolean
        set seamless(value: boolean)
        
        /** Used for the default/fallback implementation of the seamless texture generation. It determines the distance over which the seams are blended. High values may result in less details and contrast. See [Noise] for further details.  
         *      
         *  **Note:** If using a [member width] or [member height] lower than the default, you may need to increase [member seamless_blend_skirt] to make seamless blending more effective.  
         */
        get seamlessBlendSkirt(): float64
        set seamlessBlendSkirt(value: float64)
        
        /** If `true`, the resulting texture contains a normal map created from the original noise interpreted as a bump map. */
        get asNormalMap(): boolean
        set asNormalMap(value: boolean)
        
        /** Strength of the bump maps used in this texture. A higher value will make the bump maps appear larger while a lower value will make them appear softer. */
        get bumpStrength(): float64
        set bumpStrength(value: float64)
        
        /** If `true`, the noise image coming from the noise generator is normalized to the range `0.0` to `1.0`.  
         *  Turning normalization off can affect the contrast and allows you to generate non repeating tileable noise textures.  
         */
        get normalize(): boolean
        set normalize(value: boolean)
        
        /** A [Gradient] which is used to map the luminance of each pixel to a color value. */
        get colorRamp(): null | Gradient
        set colorRamp(value: null | Gradient)
        
        /** The instance of the [Noise] object. */
        get noise(): null | Noise
        set noise(value: null | Noise)
    }
    /** A 3D texture filled with noise generated by a [Noise] object.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_noisetexture3d.html  
     */
    class NoiseTexture3D extends Texture3D {
        constructor(identifier?: any)
        /** Width of the generated texture (in pixels). */
        get width(): int64
        set width(value: int64)
        
        /** Height of the generated texture (in pixels). */
        get height(): int64
        set height(value: int64)
        
        /** Depth of the generated texture (in pixels). */
        get depth(): int64
        set depth(value: int64)
        
        /** If `true`, inverts the noise texture. White becomes black, black becomes white. */
        get invert(): boolean
        set invert(value: boolean)
        
        /** If `true`, a seamless texture is requested from the [Noise] resource.  
         *      
         *  **Note:** Seamless noise textures may take longer to generate and/or can have a lower contrast compared to non-seamless noise depending on the used [Noise] resource. This is because some implementations use higher dimensions for generating seamless noise.  
         *      
         *  **Note:** The default [FastNoiseLite] implementation uses the fallback path for seamless generation. If using a [member width], [member height] or [member depth] lower than the default, you may need to increase [member seamless_blend_skirt] to make seamless blending more effective.  
         */
        get seamless(): boolean
        set seamless(value: boolean)
        
        /** Used for the default/fallback implementation of the seamless texture generation. It determines the distance over which the seams are blended. High values may result in less details and contrast. See [Noise] for further details.  
         *      
         *  **Note:** If using a [member width], [member height] or [member depth] lower than the default, you may need to increase [member seamless_blend_skirt] to make seamless blending more effective.  
         */
        get seamlessBlendSkirt(): float64
        set seamlessBlendSkirt(value: float64)
        
        /** If `true`, the noise image coming from the noise generator is normalized to the range `0.0` to `1.0`.  
         *  Turning normalization off can affect the contrast and allows you to generate non repeating tileable noise textures.  
         */
        get normalize(): boolean
        set normalize(value: boolean)
        
        /** A [Gradient] which is used to map the luminance of each pixel to a color value. */
        get colorRamp(): null | Gradient
        set colorRamp(value: null | Gradient)
        
        /** The instance of the [Noise] object. */
        get noise(): null | Noise
        set noise(value: null | Noise)
    }
    class OrmMaterial3D extends BaseMaterial3D {
        constructor(identifier?: any)
    }
    namespace GObject {
        enum ConnectFlags {
            ConnectDeferred = 1,
            ConnectPersist = 2,
            ConnectOneShot = 4,
            ConnectReferenceCounted = 8,
        }
    }
    class GObject {
        static readonly NOTIFICATION_POSTINITIALIZE = 0
        static readonly NOTIFICATION_PREDELETE = 1
        static readonly NOTIFICATION_EXTENSION_RELOADED = 2
        static readonly CONNECT_DEFERRED = 1
        static readonly CONNECT_PERSIST = 2
        static readonly CONNECT_ONE_SHOT = 4
        static readonly CONNECT_REFERENCE_COUNTED = 8
        constructor(identifier?: any)
        /* gdvirtual */ free(): void
        /* gdvirtual */ _init(): void
        /* gdvirtual */ _toString(): string
        /* gdvirtual */ _notification(what: int64): void
        /* gdvirtual */ _set(property: StringName, value: any): boolean
        /* gdvirtual */ _get(property: StringName): any
        /* gdvirtual */ _getPropertyList(): GArray
        /* gdvirtual */ _validateProperty(property: GDictionary): void
        /* gdvirtual */ _propertyCanRevert(property: StringName): boolean
        /* gdvirtual */ _propertyGetRevert(property: StringName): any
        /* gdvirtual */ _iterInit(iter: GArray): boolean
        /* gdvirtual */ _iterNext(iter: GArray): boolean
        /* gdvirtual */ _iterGet(iter: any): any
        getClass(): string
        isClass(class_: string): boolean
        set(property: StringName, value: any): void
        get(property: StringName): any
        setIndexed(propertyPath: NodePath | string, value: any): void
        getIndexed(propertyPath: NodePath | string): any
        getPropertyList(): GArray
        getMethodList(): GArray
        propertyCanRevert(property: StringName): boolean
        propertyGetRevert(property: StringName): any
        notification(what: int64, reversed?: boolean /* = false */): void
        ["toString"]: () => string
        getInstanceId(): int64
        setScript(script: any): void
        getScript(): any
        setMeta(name: StringName, value: any): void
        removeMeta(name: StringName): void
        getMeta(name: StringName, default_?: any /* = <any> {} */): any
        hasMeta(name: StringName): boolean
        getMetaList(): GArray
        addUserSignal(signal: string, arguments_?: GArray /* = [] */): void
        hasUserSignal(signal: StringName): boolean
        removeUserSignal(signal: StringName): void
        emitSignal(signal: StringName, ...varargs: any[]): GError
        call(method: StringName, ...varargs: any[]): any
        callDeferred(method: StringName, ...varargs: any[]): any
        setDeferred(property: StringName, value: any): void
        callv(method: StringName, argArray: GArray): any
        hasMethod(method: StringName): boolean
        getMethodArgumentCount(method: StringName): int64
        hasSignal(signal: StringName): boolean
        getSignalList(): GArray
        getSignalConnectionList(signal: StringName): GArray
        getIncomingConnections(): GArray
        connect(signal: StringName, callable: Callable, flags?: int64 /* = 0 */): GError
        disconnect(signal: StringName, callable: Callable): void
        isConnected(signal: StringName, callable: Callable): boolean
        hasConnections(signal: StringName): boolean
        setBlockSignals(enable: boolean): void
        isBlockingSignals(): boolean
        notifyPropertyListChanged(): void
        setMessageTranslation(enable: boolean): void
        canTranslateMessages(): boolean
        tr(message: StringName, context?: StringName /* = '' */): string
        trN(message: StringName, pluralMessage: StringName, n: int64, context?: StringName /* = '' */): string
        getTranslationDomain(): StringName
        setTranslationDomain(domain: StringName): void
        isQueuedForDeletion(): boolean
        cancelFree(): void
        readonly scriptChanged: Signal<() => void>
        readonly propertyListChanged: Signal<() => void>
    }
    /** Occluder shape resource for use with occlusion culling in [OccluderInstance3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_occluder3d.html  
     */
    class Occluder3D extends Resource {
        constructor(identifier?: any)
        /** Returns the occluder shape's vertex positions. */
        getVertices(): PackedVector3Array
        
        /** Returns the occluder shape's vertex indices. */
        getIndices(): PackedInt32Array
    }
    /** Provides occlusion culling for 3D nodes, which improves performance in closed areas.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_occluderinstance3d.html  
     */
    class OccluderInstance3D<Map extends NodePathMap = any> extends VisualInstance3D<Map> {
        constructor(identifier?: any)
        /** Based on [param value], enables or disables the specified layer in the [member bake_mask], given a [param layer_number] between 1 and 32. */
        setBakeMaskValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member bake_mask] is enabled, given a [param layer_number] between 1 and 32. */
        getBakeMaskValue(layerNumber: int64): boolean
        _isEditable3DPolygon(): boolean
        _getEditable3DPolygonResource(): null | Resource
        
        /** The occluder resource for this [OccluderInstance3D]. You can generate an occluder resource by selecting an [OccluderInstance3D] node then using the **Bake Occluders** button at the top of the editor.  
         *  You can also draw your own 2D occluder polygon by adding a new [PolygonOccluder3D] resource to the [member occluder] property in the Inspector.  
         *  Alternatively, you can select a primitive occluder to use: [QuadOccluder3D], [BoxOccluder3D] or [SphereOccluder3D].  
         */
        get occluder(): null | Occluder3D
        set occluder(value: null | Occluder3D)
        
        /** The visual layers to account for when baking for occluders. Only [MeshInstance3D]s whose [member VisualInstance3D.layers] match with this [member bake_mask] will be included in the generated occluder mesh. By default, all objects with  *opaque*  materials are taken into account for the occluder baking.  
         *  To improve performance and avoid artifacts, it is recommended to exclude dynamic objects, small objects and fixtures from the baking process by moving them to a separate visual layer and excluding this layer in [member bake_mask].  
         */
        get bakeMask(): int64
        set bakeMask(value: int64)
        
        /** The simplification distance to use for simplifying the generated occluder polygon (in 3D units). Higher values result in a less detailed occluder mesh, which improves performance but reduces culling accuracy.  
         *  The occluder geometry is rendered on the CPU, so it is important to keep its geometry as simple as possible. Since the buffer is rendered at a low resolution, less detailed occluder meshes generally still work well. The default value is fairly aggressive, so you may have to decrease it if you run into false negatives (objects being occluded even though they are visible by the camera). A value of `0.01` will act conservatively, and will keep geometry  *perceptually*  unaffected in the occlusion culling buffer. Depending on the scene, a value of `0.01` may still simplify the mesh noticeably compared to disabling simplification entirely.  
         *  Setting this to `0.0` disables simplification entirely, but vertices in the exact same position will still be merged. The mesh will also be re-indexed to reduce both the number of vertices and indices.  
         *      
         *  **Note:** This uses the [url=https://meshoptimizer.org/]meshoptimizer[/url] library under the hood, similar to LOD generation.  
         */
        get bakeSimplificationDistance(): float64
        set bakeSimplificationDistance(value: float64)
    }
    namespace OccluderPolygon2D {
        enum CullMode {
            CullDisabled = 0,
            CullClockwise = 1,
            CullCounterClockwise = 2,
        }
    }
    /** Defines a 2D polygon for LightOccluder2D.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_occluderpolygon2d.html  
     */
    class OccluderPolygon2D extends Resource {
        /** Culling is disabled. See [member cull_mode]. */
        static readonly CULL_DISABLED = 0
        
        /** Culling is performed in the clockwise direction. See [member cull_mode]. */
        static readonly CULL_CLOCKWISE = 1
        
        /** Culling is performed in the counterclockwise direction. See [member cull_mode]. */
        static readonly CULL_COUNTER_CLOCKWISE = 2
        constructor(identifier?: any)
        
        /** If `true`, closes the polygon. A closed OccluderPolygon2D occludes the light coming from any direction. An opened OccluderPolygon2D occludes the light only at its outline's direction. */
        get closed(): boolean
        set closed(value: boolean)
        
        /** The culling mode to use. */
        get cullMode(): int64
        set cullMode(value: int64)
        
        /** A [Vector2] array with the index for polygon's vertices positions. */
        get polygon(): PackedVector2Array
        set polygon(value: PackedVector2Array | Vector2[])
    }
    /** A [MultiplayerPeer] which is always connected and acts as a server.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_offlinemultiplayerpeer.html  
     */
    class OfflineMultiplayerPeer extends MultiplayerPeer {
        constructor(identifier?: any)
    }
    /** A sequence of Ogg packets.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_oggpacketsequence.html  
     */
    class OggPacketSequence extends Resource {
        constructor(identifier?: any)
        /** The length of this stream, in seconds. */
        getLength(): float64
        
        /** Contains the raw packets that make up this OggPacketSequence. */
        get packetData(): GArray
        set packetData(value: GArray)
        
        /** Contains the granule positions for each page in this packet sequence. */
        get granulePositions(): PackedInt64Array
        set granulePositions(value: PackedInt64Array | int64[])
        
        /** Holds sample rate information about this sequence. Must be set by another class that actually understands the codec. */
        get samplingRate(): float64
        set samplingRate(value: float64)
    }
    /** @link https://docs.godotengine.org/en/latest/classes/class_oggpacketsequenceplayback.html */
    class OggPacketSequencePlayback extends RefCounted {
        constructor(identifier?: any)
    }
    namespace OmniLight3D {
        enum ShadowMode {
            ShadowDualParaboloid = 0,
            ShadowCube = 1,
        }
    }
    /** Omnidirectional light, such as a light bulb or a candle.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_omnilight3d.html  
     */
    class OmniLight3D<Map extends NodePathMap = any> extends Light3D<Map> {
        /** Shadows are rendered to a dual-paraboloid texture. Faster than [constant SHADOW_CUBE], but lower-quality. */
        static readonly SHADOW_DUAL_PARABOLOID = 0
        
        /** Shadows are rendered to a cubemap. Slower than [constant SHADOW_DUAL_PARABOLOID], but higher-quality. */
        static readonly SHADOW_CUBE = 1
        constructor(identifier?: any)
        
        /** The light's radius. Note that the effectively lit area may appear to be smaller depending on the [member omni_attenuation] in use. No matter the [member omni_attenuation] in use, the light will never reach anything outside this radius.  
         *      
         *  **Note:** [member omni_range] is not affected by [member Node3D.scale] (the light's scale or its parent's scale).  
         */
        get omniRange(): float64
        set omniRange(value: float64)
        
        /** Controls the distance attenuation function for omnilights.  
         *  A value of `0.0` will maintain a constant brightness through most of the range, but smoothly attenuate the light at the edge of the range. Use a value of `2.0` for physically accurate lights as it results in the proper inverse square attenutation.  
         *      
         *  **Note:** Setting attenuation to `2.0` or higher may result in distant objects receiving minimal light, even within range. For example, with a range of `4096`, an object at `100` units is attenuated by a factor of `0.0001`. With a default brightness of `1`, the light would not be visible at that distance.  
         *      
         *  **Note:** Using negative or values higher than `10.0` may lead to unexpected results.  
         */
        get omniAttenuation(): float64
        set omniAttenuation(value: float64)
        
        /** See [enum ShadowMode]. */
        get omniShadowMode(): int64
        set omniShadowMode(value: int64)
    }
    namespace OpenXRApiExtension {
        enum OpenXRAlphaBlendModeSupport {
            OpenxrAlphaBlendModeSupportNone = 0,
            OpenxrAlphaBlendModeSupportReal = 1,
            OpenxrAlphaBlendModeSupportEmulating = 2,
        }
    }
    class OpenXRApiExtension extends RefCounted {
        static readonly OPENXR_ALPHA_BLEND_MODE_SUPPORT_NONE = 0
        static readonly OPENXR_ALPHA_BLEND_MODE_SUPPORT_REAL = 1
        static readonly OPENXR_ALPHA_BLEND_MODE_SUPPORT_EMULATING = 2
        constructor(identifier?: any)
        getInstance(): int64
        getSystemId(): int64
        getSession(): int64
        transformFromPose(pose: int64): Transform3D
        xRResult(result: int64, format: string, args: GArray): boolean
        static openxrIsEnabled(checkRunInEditor: boolean): boolean
        getInstanceProcAddr(name: string): int64
        getErrorString(result: int64): string
        getSwapchainFormatName(swapchainFormat: int64): string
        setObjectName(objectType: int64, objectHandle: int64, objectName: string): void
        beginDebugLabelRegion(labelName: string): void
        endDebugLabelRegion(): void
        insertDebugLabel(labelName: string): void
        isInitialized(): boolean
        isRunning(): boolean
        setCustomPlaySpace(space: int64): void
        getPlaySpace(): int64
        getPredictedDisplayTime(): int64
        getNextFrameTime(): int64
        canRender(): boolean
        findAction(name: string, actionSet: Rid): Rid
        actionGetHandle(action: Rid): int64
        getHandTracker(handIndex: int64): int64
        registerCompositionLayerProvider(extension: OpenXRExtensionWrapper): void
        unregisterCompositionLayerProvider(extension: OpenXRExtensionWrapper): void
        registerProjectionViewsExtension(extension: OpenXRExtensionWrapper): void
        unregisterProjectionViewsExtension(extension: OpenXRExtensionWrapper): void
        registerFrameInfoExtension(extension: OpenXRExtensionWrapper): void
        unregisterFrameInfoExtension(extension: OpenXRExtensionWrapper): void
        getRenderStateZNear(): float64
        getRenderStateZFar(): float64
        setVelocityTexture(renderTarget: Rid): void
        setVelocityDepthTexture(renderTarget: Rid): void
        setVelocityTargetSize(targetSize: Vector2I): void
        getSupportedSwapchainFormats(): PackedInt64Array
        openxrSwapchainCreate(createFlags: int64, usageFlags: int64, swapchainFormat: int64, width: int64, height: int64, sampleCount: int64, arraySize: int64): int64
        openxrSwapchainFree(swapchain: int64): void
        openxrSwapchainGetSwapchain(swapchain: int64): int64
        openxrSwapchainAcquire(swapchain: int64): void
        openxrSwapchainGetImage(swapchain: int64): Rid
        openxrSwapchainRelease(swapchain: int64): void
        getProjectionLayer(): int64
        setRenderRegion(renderRegion: Rect2I): void
        setEmulateEnvironmentBlendModeAlphaBlend(enabled: boolean): void
        isEnvironmentBlendModeAlphaSupported(): OpenXRApiExtension.OpenXRAlphaBlendModeSupport
    }
    namespace OpenXRAction {
        enum ActionType {
            OpenxrActionBool = 0,
            OpenxrActionFloat = 1,
            OpenxrActionVector2 = 2,
            OpenxrActionPose = 3,
        }
    }
    /** An OpenXR action.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_openxraction.html  
     */
    class OpenXRAction extends Resource {
        /** This action provides a boolean value. */
        static readonly OPENXR_ACTION_BOOL = 0
        
        /** This action provides a float value between `0.0` and `1.0` for any analog input such as triggers. */
        static readonly OPENXR_ACTION_FLOAT = 1
        
        /** This action provides a [Vector2] value and can be bound to embedded trackpads and joysticks. */
        static readonly OPENXR_ACTION_VECTOR2 = 2
        static readonly OPENXR_ACTION_POSE = 3
        constructor(identifier?: any)
        
        /** The localized description of this action. */
        get localizedName(): string
        set localizedName(value: string)
        
        /** The type of action. */
        get actionType(): int64
        set actionType(value: int64)
        
        /** A collections of toplevel paths to which this action can be bound. */
        get toplevelPaths(): PackedStringArray
        set toplevelPaths(value: PackedStringArray | string[])
    }
    /** Binding modifier that applies on individual actions related to an interaction profile.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_openxractionbindingmodifier.html  
     */
    class OpenXRActionBindingModifier extends OpenXRBindingModifier {
        constructor(identifier?: any)
    }
    /** Collection of [OpenXRActionSet] and [OpenXRInteractionProfile] resources for the OpenXR module.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_openxractionmap.html  
     */
    class OpenXRActionMap extends Resource {
        constructor(identifier?: any)
        /** Retrieve the number of actions sets in our action map. */
        getActionSetCount(): int64
        
        /** Retrieve an action set by name. */
        findActionSet(name: string): null | OpenXRActionSet
        
        /** Retrieve the action set at this index. */
        getActionSet(idx: int64): null | OpenXRActionSet
        
        /** Add an action set. */
        addActionSet(actionSet: OpenXRActionSet): void
        
        /** Remove an action set. */
        removeActionSet(actionSet: OpenXRActionSet): void
        
        /** Retrieve the number of interaction profiles in our action map. */
        getInteractionProfileCount(): int64
        
        /** Find an interaction profile by its name (path). */
        findInteractionProfile(name: string): null | OpenXRInteractionProfile
        
        /** Get the interaction profile at this index. */
        getInteractionProfile(idx: int64): null | OpenXRInteractionProfile
        
        /** Add an interaction profile. */
        addInteractionProfile(interactionProfile: OpenXRInteractionProfile): void
        
        /** Remove an interaction profile. */
        removeInteractionProfile(interactionProfile: OpenXRInteractionProfile): void
        
        /** Setup this action set with our default actions. */
        createDefaultActionSets(): void
        
        /** Collection of [OpenXRActionSet]s that are part of this action map. */
        get actionSets(): OpenXRActionSet
        set actionSets(value: OpenXRActionSet)
        
        /** Collection of [OpenXRInteractionProfile]s that are part of this action map. */
        get interactionProfiles(): OpenXRInteractionProfile
        set interactionProfiles(value: OpenXRInteractionProfile)
    }
    /** Collection of [OpenXRAction] resources that make up an action set.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_openxractionset.html  
     */
    class OpenXRActionSet extends Resource {
        constructor(identifier?: any)
        /** Retrieve the number of actions in our action set. */
        getActionCount(): int64
        
        /** Add an action to this action set. */
        addAction(action: OpenXRAction): void
        
        /** Remove an action from this action set. */
        removeAction(action: OpenXRAction): void
        
        /** The localized name of this action set. */
        get localizedName(): string
        set localizedName(value: string)
        
        /** The priority for this action set. */
        get priority(): int64
        set priority(value: int64)
        
        /** Collection of actions for this action set. */
        get actions(): OpenXRAction
        set actions(value: OpenXRAction)
    }
    /** The analog threshold binding modifier can modify a float input to a boolean input with specified thresholds.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_openxranalogthresholdmodifier.html  
     */
    class OpenXRAnalogThresholdModifier extends OpenXRActionBindingModifier {
        constructor(identifier?: any)
        /** When our input value is equal or larger than this value, our output becomes `true`. It stays `true` until it falls under the [member off_threshold] value. */
        get onThreshold(): float64
        set onThreshold(value: float64)
        
        /** When our input value falls below this, our output becomes `false`. */
        get offThreshold(): float64
        set offThreshold(value: float64)
        
        /** Haptic pulse to emit when the user presses the input. */
        get onHaptic(): null | OpenXRHapticBase
        set onHaptic(value: null | OpenXRHapticBase)
        
        /** Haptic pulse to emit when the user releases the input. */
        get offHaptic(): null | OpenXRHapticBase
        set offHaptic(value: null | OpenXRHapticBase)
    }
    /** Binding modifier base class.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_openxrbindingmodifier.html  
     */
    class OpenXRBindingModifier extends Resource {
        constructor(identifier?: any)
        /** Return the description of this class that is used for the title bar of the binding modifier editor. */
        /* gdvirtual */ _getDescription(): string
        
        /** Returns the data that is sent to OpenXR when submitting the suggested interacting bindings this modifier is a part of.  
         *      
         *  **Note:** This must be data compatible with a `XrBindingModificationBaseHeaderKHR` structure.  
         */
        /* gdvirtual */ _getIPModification(): PackedByteArray
    }
    /** Binding modifier editor.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_openxrbindingmodifiereditor.html  
     */
    class OpenXRBindingModifierEditor<Map extends NodePathMap = any> extends PanelContainer<Map> {
        constructor(identifier?: any)
        /** Returns the [OpenXRBindingModifier] currently being edited. */
        getBindingModifier(): null | OpenXRBindingModifier
        
        /** Setup this editor for the provided [param action_map] and [param binding_modifier]. */
        setup(actionMap: OpenXRActionMap, bindingModifier: OpenXRBindingModifier): void
        
        /** Signal emitted when the user presses the delete binding modifier button for this modifier. */
        readonly bindingModifierRemoved: Signal<(bindingModifierEditor: GObject) => void>
    }
    namespace OpenXRCompositionLayer {
        enum Filter {
            FilterNearest = 0,
            FilterLinear = 1,
            FilterCubic = 2,
        }
        enum MipmapMode {
            MipmapModeDisabled = 0,
            MipmapModeNearest = 1,
            MipmapModeLinear = 2,
        }
        enum Wrap {
            WrapClampToBorder = 0,
            WrapClampToEdge = 1,
            WrapRepeat = 2,
            WrapMirroredRepeat = 3,
            WrapMirrorClampToEdge = 4,
        }
        enum Swizzle {
            SwizzleRed = 0,
            SwizzleGreen = 1,
            SwizzleBlue = 2,
            SwizzleAlpha = 3,
            SwizzleZero = 4,
            SwizzleOne = 5,
        }
    }
    /** The parent class of all OpenXR composition layer nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_openxrcompositionlayer.html  
     */
    class OpenXRCompositionLayer<Map extends NodePathMap = any> extends Node3D<Map> {
        /** Perform nearest-neighbor filtering when sampling the texture. */
        static readonly FILTER_NEAREST = 0
        
        /** Perform linear filtering when sampling the texture. */
        static readonly FILTER_LINEAR = 1
        
        /** Perform cubic filtering when sampling the texture. */
        static readonly FILTER_CUBIC = 2
        
        /** Disable mipmapping.  
         *      
         *  **Note:** Mipmapping can only be disabled in the compatibility renderer.  
         */
        static readonly MIPMAP_MODE_DISABLED = 0
        
        /** Use the mipmap of the nearest resolution. */
        static readonly MIPMAP_MODE_NEAREST = 1
        
        /** Use linear interpolation of the two mipmaps of the nearest resolution. */
        static readonly MIPMAP_MODE_LINEAR = 2
        
        /** Clamp the texture to its specified border color. */
        static readonly WRAP_CLAMP_TO_BORDER = 0
        
        /** Clamp the texture to its edge color. */
        static readonly WRAP_CLAMP_TO_EDGE = 1
        
        /** Repeat the texture infinitely. */
        static readonly WRAP_REPEAT = 2
        
        /** Repeat the texture infinitely, mirroring it on each repeat. */
        static readonly WRAP_MIRRORED_REPEAT = 3
        
        /** Mirror the texture once and then clamp the texture to its edge color.  
         *      
         *  **Note:** This wrap mode is not available in the compatibility renderer.  
         */
        static readonly WRAP_MIRROR_CLAMP_TO_EDGE = 4
        
        /** Maps a color channel to the value of the red channel. */
        static readonly SWIZZLE_RED = 0
        
        /** Maps a color channel to the value of the green channel. */
        static readonly SWIZZLE_GREEN = 1
        
        /** Maps a color channel to the value of the blue channel. */
        static readonly SWIZZLE_BLUE = 2
        
        /** Maps a color channel to the value of the alpha channel. */
        static readonly SWIZZLE_ALPHA = 3
        
        /** Maps a color channel to the value of zero. */
        static readonly SWIZZLE_ZERO = 4
        
        /** Maps a color channel to the value of one. */
        static readonly SWIZZLE_ONE = 5
        constructor(identifier?: any)
        
        /** Returns a [JavaObject] representing an `android.view.Surface` if [member use_android_surface] is enabled and OpenXR has created the surface. Otherwise, this will return `null`.  
         *      
         *  **Note:** The surface can only be created during an active OpenXR session. So, if [member use_android_surface] is enabled outside of an OpenXR session, it won't be created until a new session fully starts.  
         */
        getAndroidSurface(): null | JavaObject
        
        /** Returns `true` if the OpenXR runtime natively supports this composition layer type.  
         *      
         *  **Note:** This will only return an accurate result after the OpenXR session has started.  
         */
        isNativelySupported(): boolean
        
        /** Returns UV coordinates where the given ray intersects with the composition layer. [param origin] and [param direction] must be in global space.  
         *  Returns `Vector2(-1.0, -1.0)` if the ray doesn't intersect.  
         */
        intersectsRay(origin: Vector3, direction: Vector3): Vector2
        
        /** The [SubViewport] to render on the composition layer. */
        get layerViewport(): null | GObject
        set layerViewport(value: null | GObject)
        
        /** If enabled, an Android surface will be created (with the dimensions from [member android_surface_size]) which will provide the 2D content for the composition layer, rather than using [member layer_viewport].  
         *  See [method get_android_surface] for information about how to get the surface so that your application can draw to it.  
         *      
         *  **Note:** This will only work in Android builds.  
         */
        get useAndroidSurface(): boolean
        set useAndroidSurface(value: boolean)
        
        /** The size of the Android surface to create if [member use_android_surface] is enabled. */
        get androidSurfaceSize(): Vector2I
        set androidSurfaceSize(value: Vector2I)
        
        /** The sort order for this composition layer. Higher numbers will be shown in front of lower numbers.  
         *      
         *  **Note:** This will have no effect if a fallback mesh is being used.  
         */
        get sortOrder(): int64
        set sortOrder(value: int64)
        
        /** Enables the blending the layer using its alpha channel.  
         *  Can be combined with [member Viewport.transparent_bg] to give the layer a transparent background.  
         */
        get alphaBlend(): boolean
        set alphaBlend(value: boolean)
        
        /** Enables a technique called "hole punching", which allows putting the composition layer behind the main projection layer (i.e. setting [member sort_order] to a negative value) while "punching a hole" through everything rendered by Godot so that the layer is still visible.  
         *  This can be used to create the illusion that the composition layer exists in the same 3D space as everything rendered by Godot, allowing objects to appear to pass both behind or in front of the composition layer.  
         */
        get enableHolePunch(): boolean
        set enableHolePunch(value: boolean)
        
        /** The minification filter of the swapchain state.  
         *      
         *  **Note:** This property only has an effect on devices that support the OpenXR XR_FB_swapchain_update_state OpenGLES/Vulkan extensions.  
         */
        get swapchainStateMinFilter(): int64
        set swapchainStateMinFilter(value: int64)
        
        /** The magnification filter of the swapchain state.  
         *      
         *  **Note:** This property only has an effect on devices that support the OpenXR XR_FB_swapchain_update_state OpenGLES/Vulkan extensions.  
         */
        get swapchainStateMagFilter(): int64
        set swapchainStateMagFilter(value: int64)
        
        /** The mipmap mode of the swapchain state.  
         *      
         *  **Note:** This property only has an effect on devices that support the OpenXR XR_FB_swapchain_update_state OpenGLES/Vulkan extensions.  
         */
        get swapchainStateMipmapMode(): int64
        set swapchainStateMipmapMode(value: int64)
        
        /** The horizontal wrap mode of the swapchain state.  
         *      
         *  **Note:** This property only has an effect on devices that support the OpenXR XR_FB_swapchain_update_state OpenGLES/Vulkan extensions.  
         */
        get swapchainStateHorizontalWrap(): int64
        set swapchainStateHorizontalWrap(value: int64)
        
        /** The vertical wrap mode of the swapchain state.  
         *      
         *  **Note:** This property only has an effect on devices that support the OpenXR XR_FB_swapchain_update_state OpenGLES/Vulkan extensions.  
         */
        get swapchainStateVerticalWrap(): int64
        set swapchainStateVerticalWrap(value: int64)
        
        /** The swizzle value for the red channel of the swapchain state.  
         *      
         *  **Note:** This property only has an effect on devices that support the OpenXR XR_FB_swapchain_update_state OpenGLES/Vulkan extensions.  
         */
        get swapchainStateRedSwizzle(): int64
        set swapchainStateRedSwizzle(value: int64)
        
        /** The swizzle value for the green channel of the swapchain state.  
         *      
         *  **Note:** This property only has an effect on devices that support the OpenXR XR_FB_swapchain_update_state OpenGLES/Vulkan extensions.  
         */
        get swapchainStateGreenSwizzle(): int64
        set swapchainStateGreenSwizzle(value: int64)
        
        /** The swizzle value for the blue channel of the swapchain state.  
         *      
         *  **Note:** This property only has an effect on devices that support the OpenXR XR_FB_swapchain_update_state OpenGLES/Vulkan extensions.  
         */
        get swapchainStateBlueSwizzle(): int64
        set swapchainStateBlueSwizzle(value: int64)
        
        /** The swizzle value for the alpha channel of the swapchain state.  
         *      
         *  **Note:** This property only has an effect on devices that support the OpenXR XR_FB_swapchain_update_state OpenGLES/Vulkan extensions.  
         */
        get swapchainStateAlphaSwizzle(): int64
        set swapchainStateAlphaSwizzle(value: int64)
        
        /** The max anisotropy of the swapchain state.  
         *      
         *  **Note:** This property only has an effect on devices that support the OpenXR XR_FB_swapchain_update_state OpenGLES/Vulkan extensions.  
         */
        get swapchainStateMaxAnisotropy(): float64
        set swapchainStateMaxAnisotropy(value: float64)
        
        /** The border color of the swapchain state that is used when the wrap mode clamps to the border.  
         *      
         *  **Note:** This property only has an effect on devices that support the OpenXR XR_FB_swapchain_update_state OpenGLES/Vulkan extensions.  
         */
        get swapchainStateBorderColor(): Color
        set swapchainStateBorderColor(value: Color)
    }
    /** An OpenXR composition layer that is rendered as an internal slice of a cylinder.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_openxrcompositionlayercylinder.html  
     */
    class OpenXRCompositionLayerCylinder<Map extends NodePathMap = any> extends OpenXRCompositionLayer<Map> {
        constructor(identifier?: any)
        /** The radius of the cylinder. */
        get radius(): float64
        set radius(value: float64)
        
        /** The aspect ratio of the slice. Used to set the height relative to the width. */
        get aspectRatio(): float64
        set aspectRatio(value: float64)
        
        /** The central angle of the cylinder. Used to set the width. */
        get centralAngle(): float64
        set centralAngle(value: float64)
        
        /** The number of segments to use in the fallback mesh. */
        get fallbackSegments(): int64
        set fallbackSegments(value: int64)
    }
    /** An OpenXR composition layer that is rendered as an internal slice of a sphere.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_openxrcompositionlayerequirect.html  
     */
    class OpenXRCompositionLayerEquirect<Map extends NodePathMap = any> extends OpenXRCompositionLayer<Map> {
        constructor(identifier?: any)
        /** The radius of the sphere. */
        get radius(): float64
        set radius(value: float64)
        
        /** The central horizontal angle of the sphere. Used to set the width. */
        get centralHorizontalAngle(): float64
        set centralHorizontalAngle(value: float64)
        
        /** The upper vertical angle of the sphere. Used (together with [member lower_vertical_angle]) to set the height. */
        get upperVerticalAngle(): float64
        set upperVerticalAngle(value: float64)
        
        /** The lower vertical angle of the sphere. Used (together with [member upper_vertical_angle]) to set the height. */
        get lowerVerticalAngle(): float64
        set lowerVerticalAngle(value: float64)
        
        /** The number of segments to use in the fallback mesh. */
        get fallbackSegments(): int64
        set fallbackSegments(value: int64)
    }
    /** An OpenXR composition layer that is rendered as a quad.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_openxrcompositionlayerquad.html  
     */
    class OpenXRCompositionLayerQuad<Map extends NodePathMap = any> extends OpenXRCompositionLayer<Map> {
        constructor(identifier?: any)
        /** The dimensions of the quad. */
        get quadSize(): Vector2
        set quadSize(value: Vector2)
    }
    /** The DPad binding modifier converts an axis input to a dpad output.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_openxrdpadbindingmodifier.html  
     */
    class OpenXRDpadBindingModifier extends OpenXRIPBindingModifier {
        constructor(identifier?: any)
        /** Action set for which this dpad binding modifier is active. */
        get actionSet(): null | OpenXRActionSet
        set actionSet(value: null | OpenXRActionSet)
        
        /** Input path for this dpad binding modifier. */
        get inputPath(): string
        set inputPath(value: string)
        
        /** When our input value is equal or larger than this value, our dpad in that direction becomes `true`. It stays `true` until it falls under the [member threshold_released] value. */
        get threshold(): float64
        set threshold(value: float64)
        
        /** When our input value falls below this, our output becomes `false`. */
        get thresholdReleased(): float64
        set thresholdReleased(value: float64)
        
        /** Center region in which our center position of our dpad return `true`. */
        get centerRegion(): float64
        set centerRegion(value: float64)
        
        /** The angle of each wedge that identifies the 4 directions of the emulated dpad. */
        get wedgeAngle(): float64
        set wedgeAngle(value: float64)
        
        /** If `false`, when the joystick enters a new dpad zone this becomes `true`.  
         *  If `true`, when the joystick remains in active dpad zone, this remains `true` even if we overlap with another zone.  
         */
        get isSticky(): boolean
        set isSticky(value: boolean)
        
        /** Haptic pulse to emit when the user presses the input. */
        get onHaptic(): null | OpenXRHapticBase
        set onHaptic(value: null | OpenXRHapticBase)
        
        /** Haptic pulse to emit when the user releases the input. */
        get offHaptic(): null | OpenXRHapticBase
        set offHaptic(value: null | OpenXRHapticBase)
    }
    /** Allows implementing OpenXR extensions with GDExtension.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_openxrextensionwrapper.html  
     */
    class OpenXRExtensionWrapper extends GObject {
        constructor(identifier?: any)
        /** Returns a [Dictionary] of OpenXR extensions related to this extension. The [Dictionary] should contain the name of the extension, mapped to a `bool *` cast to an integer:  
         *  - If the `bool *` is a `nullptr` this extension is mandatory.  
         *  - If the `bool *` points to a boolean, the boolean will be updated to `true` if the extension is enabled.  
         */
        /* gdvirtual */ _getRequestedExtensions(): GDictionary
        
        /** Adds additional data structures when querying OpenXR system abilities. */
        /* gdvirtual */ _setSystemPropertiesAndGetNextPointer(nextPointer: int64): int64
        
        /** Adds additional data structures when the OpenXR instance is created. */
        /* gdvirtual */ _setInstanceCreateInfoAndGetNextPointer(nextPointer: int64): int64
        
        /** Adds additional data structures when the OpenXR session is created. */
        /* gdvirtual */ _setSessionCreateAndGetNextPointer(nextPointer: int64): int64
        
        /** Adds additional data structures when creating OpenXR swapchains. */
        /* gdvirtual */ _setSwapchainCreateInfoAndGetNextPointer(nextPointer: int64): int64
        
        /** Adds additional data structures when each hand tracker is created. */
        /* gdvirtual */ _setHandJointLocationsAndGetNextPointer(handIndex: int64, nextPointer: int64): int64
        
        /** Adds additional data structures to the projection view of the given [param view_index]. */
        /* gdvirtual */ _setProjectionViewsAndGetNextPointer(viewIndex: int64, nextPointer: int64): int64
        
        /** Adds additional data structures to `XrFrameWaitInfo`.  
         *  This will only be called if the extension previously registered itself with [method OpenXRAPIExtension.register_frame_info_extension].  
         */
        /* gdvirtual */ _setFrameWaitInfoAndGetNextPointer(nextPointer: int64): int64
        
        /** Adds additional data structures to `XrFrameEndInfo`.  
         *  This will only be called if the extension previously registered itself with [method OpenXRAPIExtension.register_frame_info_extension].  
         */
        /* gdvirtual */ _setFrameEndInfoAndGetNextPointer(nextPointer: int64): int64
        
        /** Adds additional data structures to `XrViewLocateInfo`.  
         *  This will only be called if the extension previously registered itself with [method OpenXRAPIExtension.register_frame_info_extension].  
         */
        /* gdvirtual */ _setViewLocateInfoAndGetNextPointer(nextPointer: int64): int64
        
        /** Adds additional data structures to `XrReferenceSpaceCreateInfo`. */
        /* gdvirtual */ _setReferenceSpaceCreateInfoAndGetNextPointer(referenceSpaceType: int64, nextPointer: int64): int64
        
        /** Returns the number of composition layers this extension wrapper provides via [method _get_composition_layer].  
         *  This will only be called if the extension previously registered itself with [method OpenXRAPIExtension.register_composition_layer_provider].  
         */
        /* gdvirtual */ _getCompositionLayerCount(): int64
        
        /** Returns a pointer to an `XrCompositionLayerBaseHeader` struct to provide the given composition layer.  
         *  This will only be called if the extension previously registered itself with [method OpenXRAPIExtension.register_composition_layer_provider].  
         */
        /* gdvirtual */ _getCompositionLayer(index: int64): int64
        
        /** Returns an integer that will be used to sort the given composition layer provided via [method _get_composition_layer]. Lower numbers will move the layer to the front of the list, and higher numbers to the end. The default projection layer has an order of `0`, so layers provided by this method should probably be above or below (but not exactly) `0`.  
         *  This will only be called if the extension previously registered itself with [method OpenXRAPIExtension.register_composition_layer_provider].  
         */
        /* gdvirtual */ _getCompositionLayerOrder(index: int64): int64
        
        /** Returns a [PackedStringArray] of positional tracker names that are used within the extension wrapper. */
        /* gdvirtual */ _getSuggestedTrackerNames(): PackedStringArray
        
        /** Allows extensions to register additional controller metadata. This function is called even when the OpenXR API is not constructed as the metadata needs to be available to the editor.  
         *  Extensions should also provide metadata regardless of whether they are supported on the host system. The controller data is used to setup action maps for users who may have access to the relevant hardware.  
         */
        /* gdvirtual */ _onRegisterMetadata(): void
        
        /** Called before the OpenXR instance is created. */
        /* gdvirtual */ _onBeforeInstanceCreated(): void
        
        /** Called right after the OpenXR instance is created. */
        /* gdvirtual */ _onInstanceCreated(instance: int64): void
        
        /** Called right before the OpenXR instance is destroyed. */
        /* gdvirtual */ _onInstanceDestroyed(): void
        
        /** Called right after the OpenXR session is created. */
        /* gdvirtual */ _onSessionCreated(session: int64): void
        
        /** Called as part of the OpenXR process handling. This happens right before general and physics processing steps of the main loop. During this step controller data is queried and made available to game logic. */
        /* gdvirtual */ _onProcess(): void
        
        /** Called right before the XR viewports begin their rendering step. */
        /* gdvirtual */ _onPreRender(): void
        
        /** Called right after the main swapchains are (re)created. */
        /* gdvirtual */ _onMainSwapchainsCreated(): void
        
        /** Called right before the given viewport is rendered. */
        /* gdvirtual */ _onPreDrawViewport(viewport: Rid): void
        
        /** Called right after the given viewport is rendered.  
         *      
         *  **Note:** The draw commands might only be queued at this point, not executed.  
         */
        /* gdvirtual */ _onPostDrawViewport(viewport: Rid): void
        
        /** Called right before the OpenXR session is destroyed. */
        /* gdvirtual */ _onSessionDestroyed(): void
        
        /** Called when the OpenXR session state is changed to idle. */
        /* gdvirtual */ _onStateIdle(): void
        
        /** Called when the OpenXR session state is changed to ready. This means OpenXR is ready to set up the session. */
        /* gdvirtual */ _onStateReady(): void
        
        /** Called when the OpenXR session state is changed to synchronized. OpenXR also returns to this state when the application loses focus. */
        /* gdvirtual */ _onStateSynchronized(): void
        
        /** Called when the OpenXR session state is changed to visible. This means OpenXR is now ready to receive frames. */
        /* gdvirtual */ _onStateVisible(): void
        
        /** Called when the OpenXR session state is changed to focused. This state is the active state when the game runs. */
        /* gdvirtual */ _onStateFocused(): void
        
        /** Called when the OpenXR session state is changed to stopping. */
        /* gdvirtual */ _onStateStopping(): void
        
        /** Called when the OpenXR session state is changed to loss pending. */
        /* gdvirtual */ _onStateLossPending(): void
        
        /** Called when the OpenXR session state is changed to exiting. */
        /* gdvirtual */ _onStateExiting(): void
        
        /** Called when there is an OpenXR event to process. When implementing, return `true` if the event was handled, return `false` otherwise. */
        /* gdvirtual */ _onEventPolled(event: int64): boolean
        
        /** Adds additional data structures to composition layers created by [OpenXRCompositionLayer].  
         *  [param property_values] contains the values of the properties returned by [method _get_viewport_composition_layer_extension_properties].  
         *  [param layer] is a pointer to an `XrCompositionLayerBaseHeader` struct.  
         */
        /* gdvirtual */ _setViewportCompositionLayerAndGetNextPointer(layer: int64, propertyValues: GDictionary, nextPointer: int64): int64
        
        /** Gets an array of [Dictionary]s that represent properties, just like [method Object._get_property_list], that will be added to [OpenXRCompositionLayer] nodes. */
        /* gdvirtual */ _getViewportCompositionLayerExtensionProperties(): GArray
        
        /** Gets a [Dictionary] containing the default values for the properties returned by [method _get_viewport_composition_layer_extension_properties]. */
        /* gdvirtual */ _getViewportCompositionLayerExtensionPropertyDefaults(): GDictionary
        
        /** Called when a composition layer created via [OpenXRCompositionLayer] is destroyed.  
         *  [param layer] is a pointer to an `XrCompositionLayerBaseHeader` struct.  
         */
        /* gdvirtual */ _onViewportCompositionLayerDestroyed(layer: int64): void
        
        /** Adds additional data structures to Android surface swapchains created by [OpenXRCompositionLayer].  
         *  [param property_values] contains the values of the properties returned by [method _get_viewport_composition_layer_extension_properties].  
         */
        /* gdvirtual */ _setAndroidSurfaceSwapchainCreateInfoAndGetNextPointer(propertyValues: GDictionary, nextPointer: int64): int64
        
        /** Returns the created [OpenXRAPIExtension], which can be used to access the OpenXR API. */
        getOpenxrApi(): null | OpenXRApiExtension
        
        /** Registers the extension. This should happen at core module initialization level. */
        registerExtensionWrapper(): void
    }
    /** Allows implementing OpenXR extensions with GDExtension.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_openxrextensionwrapperextension.html  
     */
    class OpenXRExtensionWrapperExtension extends OpenXRExtensionWrapper {
        constructor(identifier?: any)
    }
    /** The OpenXR Future extension allows for asynchronous APIs to be used.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_openxrfutureextension.html  
     */
    class OpenXRFutureExtension extends OpenXRExtensionWrapper {
        constructor(identifier?: any)
        /** Returns `true` if futures are available in the OpenXR runtime used. This function will only return a usable result after OpenXR has been initialized. */
        isActive(): boolean
        
        /** Register an OpenXR Future object so we monitor for completion. [param future] must be an `XrFutureEXT` value previously returned by an API that started an asynchronous function.  
         *  You can optionally specify [param on_success], it will be invoked on successful completion of the future.  
         *  Or you can use the returned [OpenXRFutureResult] object to `await` its [signal OpenXRFutureResult.completed] signal.  
         *    
         */
        registerFuture(future: int64, onSuccess?: Callable /* = new Callable() */): null | OpenXRFutureResult
        
        /** Cancels an in-progress future. [param future] must be an `XrFutureEXT` value previously returned by an API that started an asynchronous function. */
        cancelFuture(future: int64): void
    }
    namespace OpenXRFutureResult {
        enum ResultStatus {
            ResultRunning = 0,
            ResultFinished = 1,
            ResultCancelled = 2,
        }
    }
    /** Result object tracking the asynchronous result of an OpenXR Future object.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_openxrfutureresult.html  
     */
    class OpenXRFutureResult extends RefCounted {
        /** The asynchronous function is running. */
        static readonly RESULT_RUNNING = 0
        
        /** The asynchronous function has finished. */
        static readonly RESULT_FINISHED = 1
        
        /** The asynchronous function has been cancelled. */
        static readonly RESULT_CANCELLED = 2
        constructor(identifier?: any)
        
        /** Returns the status of this result. */
        getStatus(): OpenXRFutureResult.ResultStatus
        
        /** Return the `XrFutureEXT` value this result relates to. */
        getFuture(): int64
        
        /** Cancel this future, this will interrupt and stop the asynchronous function. */
        cancelFuture(): void
        
        /** Emitted when the asynchronous function is finished or has been cancelled. */
        readonly completed: Signal<(result: OpenXRFutureResult) => void>
    }
    namespace OpenXRHand {
        enum Hands {
            HandLeft = 0,
            HandRight = 1,
            HandMax = 2,
        }
        enum MotionRange {
            MotionRangeUnobstructed = 0,
            MotionRangeConformToController = 1,
            MotionRangeMax = 2,
        }
        enum SkeletonRig {
            SkeletonRigOpenxr = 0,
            SkeletonRigHumanoid = 1,
            SkeletonRigMax = 2,
        }
        enum BoneUpdate {
            BoneUpdateFull = 0,
            BoneUpdateRotationOnly = 1,
            BoneUpdateMax = 2,
        }
    }
    /** Node supporting hand and finger tracking in OpenXR.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_openxrhand.html  
     */
    class OpenXRHand<Map extends NodePathMap = any> extends Node3D<Map> {
        /** Tracking the player's left hand. */
        static readonly HAND_LEFT = 0
        
        /** Tracking the player's right hand. */
        static readonly HAND_RIGHT = 1
        
        /** Maximum supported hands. */
        static readonly HAND_MAX = 2
        
        /** When player grips, hand skeleton will form a full fist. */
        static readonly MOTION_RANGE_UNOBSTRUCTED = 0
        
        /** When player grips, hand skeleton conforms to the controller the player is holding. */
        static readonly MOTION_RANGE_CONFORM_TO_CONTROLLER = 1
        
        /** Maximum supported motion ranges. */
        static readonly MOTION_RANGE_MAX = 2
        
        /** An OpenXR compliant skeleton. */
        static readonly SKELETON_RIG_OPENXR = 0
        
        /** A [SkeletonProfileHumanoid] compliant skeleton. */
        static readonly SKELETON_RIG_HUMANOID = 1
        
        /** Maximum supported hands. */
        static readonly SKELETON_RIG_MAX = 2
        
        /** The skeletons bones are fully updated (both position and rotation) to match the tracked bones. */
        static readonly BONE_UPDATE_FULL = 0
        
        /** The skeletons bones are only rotated to align with the tracked bones, preserving bone length. */
        static readonly BONE_UPDATE_ROTATION_ONLY = 1
        
        /** Maximum supported bone update mode. */
        static readonly BONE_UPDATE_MAX = 2
        constructor(identifier?: any)
        
        /** Specifies whether this node tracks the left or right hand of the player. */
        get hand(): int64
        set hand(value: int64)
        
        /** Set the motion range (if supported) limiting the hand motion. */
        get motionRange(): int64
        set motionRange(value: int64)
        
        /** Set a [Skeleton3D] node for which the pose positions will be updated. */
        get handSkeleton(): NodePath
        set handSkeleton(value: NodePath | string)
        
        /** Set the type of skeleton rig the [member hand_skeleton] is compliant with. */
        get skeletonRig(): int64
        set skeletonRig(value: int64)
        
        /** Specify the type of updates to perform on the bone. */
        get boneUpdate(): int64
        set boneUpdate(value: int64)
    }
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
        /** Get the number of binding modifiers for this binding. */
        getBindingModifierCount(): int64
        
        /** Get the [OpenXRBindingModifier] at this index. */
        getBindingModifier(index: int64): null | OpenXRActionBindingModifier
        
        /** Get the number of input/output paths in this binding. */
        getPathCount(): int64
        
        /** Returns `true` if this input/output path is part of this binding. */
        hasPath(path: string): boolean
        
        /** Add an input/output path to this binding. */
        addPath(path: string): void
        
        /** Removes this input/output path from this binding. */
        removePath(path: string): void
        
        /** [OpenXRAction] that is bound to [member binding_path]. */
        get action(): null | OpenXRAction
        set action(value: null | OpenXRAction)
        
        /** Binding path that defines the input or output bound to [member action].  
         *      
         *  **Note:** Binding paths are suggestions, an XR runtime may choose to bind the action to a different input or output emulating this input or output.  
         */
        get bindingPath(): string
        set bindingPath(value: string)
        
        /** Binding modifiers for this binding. */
        get bindingModifiers(): OpenXRActionBindingModifier
        set bindingModifiers(value: OpenXRActionBindingModifier)
        
        /** Paths that define the inputs or outputs bound on the device. */
        get paths(): PackedStringArray
        set paths(value: PackedStringArray | string[])
    }
    /** Binding modifier that applies directly on an interaction profile.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_openxripbindingmodifier.html  
     */
    class OpenXRIPBindingModifier extends OpenXRBindingModifier {
        constructor(identifier?: any)
    }
    /** Suggested bindings object for OpenXR.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_openxrinteractionprofile.html  
     */
    class OpenXRInteractionProfile extends Resource {
        constructor(identifier?: any)
        /** Get the number of bindings in this interaction profile. */
        getBindingCount(): int64
        
        /** Retrieve the binding at this index. */
        getBinding(index: int64): null | OpenXRIPBinding
        
        /** Get the number of binding modifiers in this interaction profile. */
        getBindingModifierCount(): int64
        
        /** Get the [OpenXRBindingModifier] at this index. */
        getBindingModifier(index: int64): null | OpenXRIPBindingModifier
        
        /** The interaction profile path identifying the XR device. */
        get interactionProfilePath(): string
        set interactionProfilePath(value: string)
        
        /** Action bindings for this interaction profile. */
        get bindings(): OpenXRIPBinding
        set bindings(value: OpenXRIPBinding)
        
        /** Binding modifiers for this interaction profile. */
        get bindingModifiers(): OpenXRIPBindingModifier
        set bindingModifiers(value: OpenXRIPBindingModifier)
    }
    /** Default OpenXR interaction profile editor.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_openxrinteractionprofileeditor.html  
     */
    class OpenXRInteractionProfileEditor<Map extends NodePathMap = any> extends OpenXRInteractionProfileEditorBase<Map> {
        constructor(identifier?: any)
    }
    /** Base class for editing interaction profiles.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_openxrinteractionprofileeditorbase.html  
     */
    class OpenXRInteractionProfileEditorBase<Map extends NodePathMap = any> extends HBoxContainer<Map> {
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
        /** Allows for renaming old interaction profile paths to new paths to maintain backwards compatibility with older action maps. */
        registerProfileRename(oldName: string, newName: string): void
        
        /** Registers a top level path to which profiles can be bound. For instance `/user/hand/left` refers to the bind point for the player's left hand. Extensions can register additional top level paths, for instance a haptic vest extension might register `/user/body/vest`.  
         *  [param display_name] is the name shown to the user. [param openxr_path] is the top level path being registered. [param openxr_extension_name] is optional and ensures the top level path is only used if the specified extension is available/enabled.  
         *  When a top level path ends up being bound by OpenXR, a [XRPositionalTracker] is instantiated to manage the state of the device.  
         */
        registerTopLevelPath(displayName: string, openxrPath: string, openxrExtensionName: string): void
        
        /** Registers an interaction profile using its OpenXR designation (e.g. `/interaction_profiles/khr/simple_controller` is the profile for OpenXR's simple controller profile).  
         *  [param display_name] is the description shown to the user. [param openxr_path] is the interaction profile path being registered. [param openxr_extension_name] optionally restricts this profile to the given extension being enabled/available. If the extension is not available, the profile and all related entries used in an action map are filtered out.  
         */
        registerInteractionProfile(displayName: string, openxrPath: string, openxrExtensionName: string): void
        
        /** Registers an input/output path for the given [param interaction_profile]. The profile should previously have been registered using [method register_interaction_profile]. [param display_name] is the description shown to the user. [param toplevel_path] specifies the bind path this input/output can be bound to (e.g. `/user/hand/left` or `/user/hand/right`). [param openxr_path] is the action input/output being registered (e.g. `/user/hand/left/input/aim/pose`). [param openxr_extension_name] restricts this input/output to an enabled/available extension, this doesn't need to repeat the extension on the profile but relates to overlapping extension (e.g. `XR_EXT_palm_pose` that introduces `…/input/palm_ext/pose` input paths). [param action_type] defines the type of input or output provided by OpenXR. */
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
        enum PerfSettingsLevel {
            PerfSettingsLevelPowerSavings = 0,
            PerfSettingsLevelSustainedLow = 1,
            PerfSettingsLevelSustainedHigh = 2,
            PerfSettingsLevelBoost = 3,
        }
        enum PerfSettingsSubDomain {
            PerfSettingsSubDomainCompositing = 0,
            PerfSettingsSubDomainRendering = 1,
            PerfSettingsSubDomainThermal = 2,
        }
        enum PerfSettingsNotificationLevel {
            PerfSettingsNotifLevelNormal = 0,
            PerfSettingsNotifLevelWarning = 1,
            PerfSettingsNotifLevelImpaired = 2,
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
        
        /** Represents the size of the [enum HandTrackedSource] enum. */
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
        
        /** Index finger metacarpal joint. */
        static readonly HAND_JOINT_INDEX_METACARPAL = 6
        
        /** Index finger phalanx proximal joint. */
        static readonly HAND_JOINT_INDEX_PROXIMAL = 7
        
        /** Index finger phalanx intermediate joint. */
        static readonly HAND_JOINT_INDEX_INTERMEDIATE = 8
        
        /** Index finger phalanx distal joint. */
        static readonly HAND_JOINT_INDEX_DISTAL = 9
        
        /** Index finger tip joint. */
        static readonly HAND_JOINT_INDEX_TIP = 10
        
        /** Middle finger metacarpal joint. */
        static readonly HAND_JOINT_MIDDLE_METACARPAL = 11
        
        /** Middle finger phalanx proximal joint. */
        static readonly HAND_JOINT_MIDDLE_PROXIMAL = 12
        
        /** Middle finger phalanx intermediate joint. */
        static readonly HAND_JOINT_MIDDLE_INTERMEDIATE = 13
        
        /** Middle finger phalanx distal joint. */
        static readonly HAND_JOINT_MIDDLE_DISTAL = 14
        
        /** Middle finger tip joint. */
        static readonly HAND_JOINT_MIDDLE_TIP = 15
        
        /** Ring finger metacarpal joint. */
        static readonly HAND_JOINT_RING_METACARPAL = 16
        
        /** Ring finger phalanx proximal joint. */
        static readonly HAND_JOINT_RING_PROXIMAL = 17
        
        /** Ring finger phalanx intermediate joint. */
        static readonly HAND_JOINT_RING_INTERMEDIATE = 18
        
        /** Ring finger phalanx distal joint. */
        static readonly HAND_JOINT_RING_DISTAL = 19
        
        /** Ring finger tip joint. */
        static readonly HAND_JOINT_RING_TIP = 20
        
        /** Pinky finger metacarpal joint. */
        static readonly HAND_JOINT_LITTLE_METACARPAL = 21
        
        /** Pinky finger phalanx proximal joint. */
        static readonly HAND_JOINT_LITTLE_PROXIMAL = 22
        
        /** Pinky finger phalanx intermediate joint. */
        static readonly HAND_JOINT_LITTLE_INTERMEDIATE = 23
        
        /** Pinky finger phalanx distal joint. */
        static readonly HAND_JOINT_LITTLE_DISTAL = 24
        
        /** Pinky finger tip joint. */
        static readonly HAND_JOINT_LITTLE_TIP = 25
        
        /** Represents the size of the [enum HandJoints] enum. */
        static readonly HAND_JOINT_MAX = 26
        
        /** The application has entered a non-XR section (head-locked / static screen), during which power savings are to be prioritized. */
        static readonly PERF_SETTINGS_LEVEL_POWER_SAVINGS = 0
        
        /** The application has entered a low and stable complexity section, during which reducing power is more important than occasional late rendering frames. */
        static readonly PERF_SETTINGS_LEVEL_SUSTAINED_LOW = 1
        
        /** The application has entered a high or dynamic complexity section, during which the XR Runtime strives for consistent XR compositing and frame rendering within a thermally sustainable range. */
        static readonly PERF_SETTINGS_LEVEL_SUSTAINED_HIGH = 2
        
        /** The application has entered a section with very high complexity, during which the XR Runtime is allowed to step up beyond the thermally sustainable range. */
        static readonly PERF_SETTINGS_LEVEL_BOOST = 3
        
        /** The compositing performance within the runtime has reached a new level. */
        static readonly PERF_SETTINGS_SUB_DOMAIN_COMPOSITING = 0
        
        /** The application rendering performance has reached a new level. */
        static readonly PERF_SETTINGS_SUB_DOMAIN_RENDERING = 1
        
        /** The temperature of the device has reached a new level. */
        static readonly PERF_SETTINGS_SUB_DOMAIN_THERMAL = 2
        
        /** The sub-domain has reached a level where no further actions other than currently applied are necessary. */
        static readonly PERF_SETTINGS_NOTIF_LEVEL_NORMAL = 0
        
        /** The sub-domain has reached an early warning level where the application should start proactive mitigation actions. */
        static readonly PERF_SETTINGS_NOTIF_LEVEL_WARNING = 1
        
        /** The sub-domain has reached a critical level where the application should start drastic mitigation actions. */
        static readonly PERF_SETTINGS_NOTIF_LEVEL_IMPAIRED = 2
        
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
        
        /** Returns `true` if OpenXR's foveation extension is supported, the interface must be initialized before this returns a valid value.  
         *      
         *  **Note:** This feature is only available on the compatibility renderer and currently only available on some stand alone headsets. For Vulkan set [member Viewport.vrs_mode] to `VRS_XR` on desktop.  
         */
        isFoveationSupported(): boolean
        
        /** Returns `true` if the given action set is active. */
        isActionSetActive(name: string): boolean
        
        /** Sets the given action set as active or inactive. */
        setActionSetActive(name: string, active: boolean): void
        
        /** Returns a list of action sets registered with Godot (loaded from the action map at runtime). */
        getActionSets(): GArray
        
        /** Returns display refresh rates supported by the current HMD. Only returned if this feature is supported by the OpenXR runtime and after the interface has been initialized. */
        getAvailableDisplayRefreshRates(): GArray
        
        /** If handtracking is enabled and motion range is supported, sets the currently configured motion range for [param hand] to [param motion_range]. */
        setMotionRange(hand: OpenXRInterface.Hand, motionRange: OpenXRInterface.HandMotionRange): void
        
        /** If handtracking is enabled and motion range is supported, gets the currently configured motion range for [param hand]. */
        getMotionRange(hand: OpenXRInterface.Hand): OpenXRInterface.HandMotionRange
        
        /** If handtracking is enabled and hand tracking source is supported, gets the source of the hand tracking data for [param hand]. */
        getHandTrackingSource(hand: OpenXRInterface.Hand): OpenXRInterface.HandTrackedSource
        
        /** If handtracking is enabled, returns flags that inform us of the validity of the tracking data. */
        getHandJointFlags(hand: OpenXRInterface.Hand, joint: OpenXRInterface.HandJoints): OpenXRInterface.HandJointFlags
        
        /** If handtracking is enabled, returns the rotation of a joint ([param joint]) of a hand ([param hand]) as provided by OpenXR. */
        getHandJointRotation(hand: OpenXRInterface.Hand, joint: OpenXRInterface.HandJoints): Quaternion
        
        /** If handtracking is enabled, returns the position of a joint ([param joint]) of a hand ([param hand]) as provided by OpenXR. This is relative to [XROrigin3D] without worldscale applied! */
        getHandJointPosition(hand: OpenXRInterface.Hand, joint: OpenXRInterface.HandJoints): Vector3
        
        /** If handtracking is enabled, returns the radius of a joint ([param joint]) of a hand ([param hand]) as provided by OpenXR. This is without worldscale applied! */
        getHandJointRadius(hand: OpenXRInterface.Hand, joint: OpenXRInterface.HandJoints): float64
        
        /** If handtracking is enabled, returns the linear velocity of a joint ([param joint]) of a hand ([param hand]) as provided by OpenXR. This is relative to [XROrigin3D] without worldscale applied! */
        getHandJointLinearVelocity(hand: OpenXRInterface.Hand, joint: OpenXRInterface.HandJoints): Vector3
        
        /** If handtracking is enabled, returns the angular velocity of a joint ([param joint]) of a hand ([param hand]) as provided by OpenXR. This is relative to [XROrigin3D]! */
        getHandJointAngularVelocity(hand: OpenXRInterface.Hand, joint: OpenXRInterface.HandJoints): Vector3
        
        /** Returns `true` if OpenXR's hand tracking is supported and enabled.  
         *      
         *  **Note:** This only returns a valid value after OpenXR has been initialized.  
         */
        isHandTrackingSupported(): boolean
        
        /** Returns `true` if OpenXR's hand interaction profile is supported and enabled.  
         *      
         *  **Note:** This only returns a valid value after OpenXR has been initialized.  
         */
        isHandInteractionSupported(): boolean
        
        /** Returns the capabilities of the eye gaze interaction extension.  
         *      
         *  **Note:** This only returns a valid value after OpenXR has been initialized.  
         */
        isEyeGazeInteractionSupported(): boolean
        
        /** Sets the CPU performance level of the OpenXR device. */
        setCpuLevel(level: OpenXRInterface.PerfSettingsLevel): void
        
        /** Sets the GPU performance level of the OpenXR device. */
        setGpuLevel(level: OpenXRInterface.PerfSettingsLevel): void
        
        /** The display refresh rate for the current HMD. Only functional if this feature is supported by the OpenXR runtime and after the interface has been initialized. */
        get displayRefreshRate(): float64
        set displayRefreshRate(value: float64)
        
        /** The render size multiplier for the current HMD. Must be set before the interface has been initialized. */
        get renderTargetSizeMultiplier(): float64
        set renderTargetSizeMultiplier(value: float64)
        
        /** Set foveation level from 0 (off) to 3 (high), the interface must be initialized before this is accessible.  
         *      
         *  **Note:** Only works on compatibility renderer.  
         */
        get foveationLevel(): int64
        set foveationLevel(value: int64)
        
        /** Enable dynamic foveation adjustment, the interface must be initialized before this is accessible. If enabled foveation will automatically adjusted between low and [member foveation_level].  
         *      
         *  **Note:** Only works on compatibility renderer.  
         */
        get foveationDynamic(): boolean
        set foveationDynamic(value: boolean)
        
        /** The minimum radius around the focal point where full quality is guaranteed if VRS is used as a percentage of screen size.  
         *      
         *  **Note:** Mobile and Forward+ renderers only. Requires [member Viewport.vrs_mode] to be set to [constant Viewport.VRS_XR].  
         */
        get vrsMinRadius(): float64
        set vrsMinRadius(value: float64)
        
        /** The strength used to calculate the VRS density map. The greater this value, the more noticeable VRS is. This improves performance at the cost of quality.  
         *      
         *  **Note:** Mobile and Forward+ renderers only. Requires [member Viewport.vrs_mode] to be set to [constant Viewport.VRS_XR].  
         */
        get vrsStrength(): float64
        set vrsStrength(value: float64)
        
        /** Informs our OpenXR session has been started. */
        readonly sessionBegun: Signal<() => void>
        
        /** Informs our OpenXR session is stopping. */
        readonly sessionStopping: Signal<() => void>
        
        /** Informs our OpenXR session now has focus. */
        readonly sessionFocussed: Signal<() => void>
        
        /** Informs our OpenXR session is now visible (output is being sent to the HMD). */
        readonly sessionVisible: Signal<() => void>
        
        /** Informs our OpenXR session is in the process of being lost. */
        readonly sessionLossPending: Signal<() => void>
        
        /** Informs our OpenXR instance is exiting. */
        readonly instanceExiting: Signal<() => void>
        
        /** Informs the user queued a recenter of the player position. */
        readonly poseRecentered: Signal<() => void>
        
        /** Informs the user the HMD refresh rate has changed.  
         *      
         *  **Note:** Only emitted if XR runtime supports the refresh rate extension.  
         */
        readonly refreshRateChanged: Signal<(refreshRate: float64) => void>
        
        /** Informs the device CPU performance level has changed in the specified subdomain. */
        readonly cpuLevelChanged: Signal<(subDomain: int64, fromLevel: int64, toLevel: int64) => void>
        
        /** Informs the device GPU performance level has changed in the specified subdomain. */
        readonly gpuLevelChanged: Signal<(subDomain: int64, fromLevel: int64, toLevel: int64) => void>
    }
    /** Draws a stereo correct visibility mask.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_openxrvisibilitymask.html  
     */
    class OpenXRVisibilityMask<Map extends NodePathMap = any> extends VisualInstance3D<Map> {
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
    class OptionButton<Map extends NodePathMap = any> extends Button<Map> {
        constructor(identifier?: any)
        /** Adds an item, with text [param label] and (optionally) [param id]. If no [param id] is passed, the item index will be used as the item's ID. New items are appended at the end. */
        addItem(label: string, id?: int64 /* = -1 */): void
        
        /** Adds an item, with a [param texture] icon, text [param label] and (optionally) [param id]. If no [param id] is passed, the item index will be used as the item's ID. New items are appended at the end. */
        addIconItem(texture: Texture2D, label: string, id?: int64 /* = -1 */): void
        
        /** Sets the text of the item at index [param idx]. */
        setItemText(idx: int64, text: string): void
        
        /** Sets the icon of the item at index [param idx]. */
        setItemIcon(idx: int64, texture: Texture2D): void
        
        /** Sets whether the item at index [param idx] is disabled.  
         *  Disabled items are drawn differently in the dropdown and are not selectable by the user. If the current selected item is set as disabled, it will remain selected.  
         */
        setItemDisabled(idx: int64, disabled: boolean): void
        
        /** Sets the ID of the item at index [param idx]. */
        setItemId(idx: int64, id: int64): void
        
        /** Sets the metadata of an item. Metadata may be of any type and can be used to store extra information about an item, such as an external string ID. */
        setItemMetadata(idx: int64, metadata: any): void
        
        /** Sets the tooltip of the item at index [param idx]. */
        setItemTooltip(idx: int64, tooltip: string): void
        
        /** Sets the auto translate mode of the item at index [param idx].  
         *  Items use [constant Node.AUTO_TRANSLATE_MODE_INHERIT] by default, which uses the same auto translate mode as the [OptionButton] itself.  
         */
        setItemAutoTranslateMode(idx: int64, mode: Node.AutoTranslateMode): void
        
        /** Returns the text of the item at index [param idx]. */
        getItemText(idx: int64): string
        
        /** Returns the icon of the item at index [param idx]. */
        getItemIcon(idx: int64): null | Texture2D
        
        /** Returns the ID of the item at index [param idx]. */
        getItemId(idx: int64): int64
        
        /** Returns the index of the item with the given [param id]. */
        getItemIndex(id: int64): int64
        
        /** Retrieves the metadata of an item. Metadata may be any type and can be used to store extra information about an item, such as an external string ID. */
        getItemMetadata(idx: int64): any
        
        /** Returns the tooltip of the item at index [param idx]. */
        getItemTooltip(idx: int64): string
        
        /** Returns the auto translate mode of the item at index [param idx]. */
        getItemAutoTranslateMode(idx: int64): Node.AutoTranslateMode
        
        /** Returns `true` if the item at index [param idx] is disabled. */
        isItemDisabled(idx: int64): boolean
        
        /** Returns `true` if the item at index [param idx] is marked as a separator. */
        isItemSeparator(idx: int64): boolean
        
        /** Adds a separator to the list of items. Separators help to group items, and can optionally be given a [param text] header. A separator also gets an index assigned, and is appended at the end of the item list. */
        addSeparator(text?: string /* = '' */): void
        
        /** Clears all the items in the [OptionButton]. */
        clear(): void
        
        /** Selects an item by index and makes it the current item. This will work even if the item is disabled.  
         *  Passing `-1` as the index deselects any currently selected item.  
         */
        select(idx: int64): void
        
        /** Returns the ID of the selected item, or `-1` if no item is selected. */
        getSelectedId(): int64
        
        /** Gets the metadata of the selected item. Metadata for items can be set using [method set_item_metadata]. */
        getSelectedMetadata(): any
        
        /** Removes the item at index [param idx]. */
        removeItem(idx: int64): void
        
        /** Returns the [PopupMenu] contained in this button.  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member Window.visible] property.  
         */
        getPopup(): null | PopupMenu
        
        /** Adjusts popup position and sizing for the [OptionButton], then shows the [PopupMenu]. Prefer this over using `get_popup().popup()`. */
        showPopup(): void
        
        /** Returns `true` if this button contains at least one item which is not disabled, or marked as a separator. */
        hasSelectableItems(): boolean
        
        /** Returns the index of the first item which is not disabled, or marked as a separator. If [param from_last] is `true`, the items will be searched in reverse order.  
         *  Returns `-1` if no item is found.  
         */
        getSelectableItem(fromLast?: boolean /* = false */): int64
        
        /** If `true`, shortcuts are disabled and cannot be used to trigger the button. */
        setDisableShortcuts(disabled: boolean): void
        
        /** The index of the currently selected item, or `-1` if no item is selected. */
        get selected(): int64
        set selected(value: int64)
        
        /** If `true`, minimum size will be determined by the longest item's text, instead of the currently selected one's.  
         *      
         *  **Note:** For performance reasons, the minimum size doesn't update immediately when adding, removing or modifying items.  
         */
        get fitToLongestItem(): boolean
        set fitToLongestItem(value: boolean)
        
        /** If `true`, the currently selected item can be selected again. */
        get allowReselect(): boolean
        set allowReselect(value: boolean)
        
        /** The number of items to select from. */
        get itemCount(): any /*Items,popup/item_*/
        set itemCount(value: any /*Items,popup/item_*/)
        
        /** Emitted when the current item has been changed by the user. The index of the item selected is passed as argument.  
         *  [member allow_reselect] must be enabled to reselect an item.  
         */
        readonly itemSelected: Signal<(index: int64) => void>
        
        /** Emitted when the user navigates to an item using the [member ProjectSettings.input/ui_up] or [member ProjectSettings.input/ui_down] input actions. The index of the item selected is passed as argument. */
        readonly itemFocused: Signal<(index: int64) => void>
    }
    class PckPacker extends RefCounted {
        constructor(identifier?: any)
        pckStart(pckPath: string, alignment?: int64 /* = 32 */, key?: string /* = '0000000000000000000000000000000000000000000000000000000000000000' */, encryptDirectory?: boolean /* = false */): GError
        addFile(targetPath: string, sourcePath: string, encrypt?: boolean /* = false */): GError
        addFileRemoval(targetPath: string): GError
        flush(verbose?: boolean /* = false */): GError
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
    class PackedScene<T extends Node = Node> extends Resource {
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
        pack(path: T): GError
        
        /** Instantiates the scene's node hierarchy. Triggers child scene instantiation(s). Triggers a [constant Node.NOTIFICATION_SCENE_INSTANTIATED] notification on the root node. */
        instantiate(editState?: PackedScene.GenEditState /* = 0 */): T
        
        /** Returns `true` if the scene file has nodes. */
        canInstantiate(): boolean
        
        /** Returns the [SceneState] representing the scene file contents. */
        getState(): null | SceneState
        get _bundled(): GDictionary
        set _bundled(value: GDictionary)
    }
    /** Abstraction and base class for packet-based protocols.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_packetpeer.html  
     */
    class PacketPeer extends RefCounted {
        constructor(identifier?: any)
        /** Gets a Variant. If [param allow_objects] is `true`, decoding objects is allowed.  
         *  Internally, this uses the same decoding mechanism as the [method @GlobalScope.bytes_to_var] method.  
         *  **Warning:** Deserialized objects can contain code which gets executed. Do not use this option if the serialized object comes from untrusted sources to avoid potential security threats such as remote code execution.  
         */
        getVar(allowObjects?: boolean /* = false */): any
        
        /** Sends a [Variant] as a packet. If [param full_objects] is `true`, encoding objects is allowed (and can potentially include code).  
         *  Internally, this uses the same encoding mechanism as the [method @GlobalScope.var_to_bytes] method.  
         */
        putVar(var_: any, fullObjects?: boolean /* = false */): GError
        
        /** Gets a raw packet. */
        getPacket(): PackedByteArray
        
        /** Sends a raw packet. */
        putPacket(buffer: PackedByteArray | byte[] | ArrayBuffer): GError
        
        /** Returns the error state of the last packet received (via [method get_packet] and [method get_var]). */
        getPacketError(): GError
        
        /** Returns the number of packets currently available in the ring-buffer. */
        getAvailablePacketCount(): int64
        
        /** Maximum buffer size allowed when encoding [Variant]s. Raise this value to support heavier memory allocations.  
         *  The [method put_var] method allocates memory on the stack, and the buffer used will grow automatically to the closest power of two to match the size of the [Variant]. If the [Variant] is bigger than [member encode_buffer_max_size], the method will error out with [constant ERR_OUT_OF_MEMORY].  
         */
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
        connectToPeer(packetPeer: PacketPeerUdp, hostname: string, clientOptions?: TlsOptions /* = undefined */): GError
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
        
        /** The wrapped [StreamPeer] object. */
        get streamPeer(): null | StreamPeer
        set streamPeer(value: null | StreamPeer)
    }
    class PacketPeerUdp extends PacketPeer {
        constructor(identifier?: any)
        bind(port: int64, bindAddress?: string /* = '*' */, recvBufSize?: int64 /* = 65536 */): GError
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
    class Panel<Map extends NodePathMap = any> extends Control<Map> {
        constructor(identifier?: any)
    }
    /** A container that keeps its child controls within the area of a [StyleBox].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_panelcontainer.html  
     */
    class PanelContainer<Map extends NodePathMap = any> extends Container<Map> {
        constructor(identifier?: any)
    }
    /** A material that provides a special texture to a [Sky], usually an HDR panorama.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_panoramaskymaterial.html  
     */
    class PanoramaSkyMaterial extends Material {
        constructor(identifier?: any)
        /** [Texture2D] to be applied to the [PanoramaSkyMaterial]. */
        get panorama(): null | Texture2D
        set panorama(value: null | Texture2D)
        
        /** A boolean value to determine if the background texture should be filtered or not. */
        get filter(): boolean
        set filter(value: boolean)
        
        /** The sky's overall brightness multiplier. Higher values result in a brighter sky. */
        get energyMultiplier(): float64
        set energyMultiplier(value: float64)
    }
    /** A node used to create a parallax scrolling background.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_parallax2d.html  
     */
    class Parallax2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        _cameraMoved(transform: Transform2D, screenOffset: Vector2, adjScreenOffset: Vector2): void
        
        /** Multiplier to the final [Parallax2D]'s offset. Can be used to simulate distance from the camera.  
         *  For example, a value of `1` scrolls at the same speed as the camera. A value greater than `1` scrolls faster, making objects appear closer. Less than `1` scrolls slower, making objects appear further, and a value of `0` stops the objects completely.  
         */
        get scrollScale(): Vector2
        set scrollScale(value: Vector2)
        
        /** The [Parallax2D]'s offset. Similar to [member screen_offset] and [member Node2D.position], but will not be overridden.  
         *      
         *  **Note:** Values will loop if [member repeat_size] is set higher than `0`.  
         */
        get scrollOffset(): Vector2
        set scrollOffset(value: Vector2)
        
        /** Repeats the [Texture2D] of each of this node's children and offsets them by this value. When scrolling, the node's position loops, giving the illusion of an infinite scrolling background if the values are larger than the screen size. If an axis is set to `0`, the [Texture2D] will not be repeated. */
        get repeatSize(): Vector2
        set repeatSize(value: Vector2)
        
        /** Velocity at which the offset scrolls automatically, in pixels per second. */
        get autoscroll(): Vector2
        set autoscroll(value: Vector2)
        
        /** Overrides the amount of times the texture repeats. Each texture copy spreads evenly from the original by [member repeat_size]. Useful for when zooming out with a camera. */
        get repeatTimes(): int64
        set repeatTimes(value: int64)
        
        /** Top-left limits for scrolling to begin. If the camera is outside of this limit, the [Parallax2D] stops scrolling. Must be lower than [member limit_end] minus the viewport size to work. */
        get limitBegin(): Vector2
        set limitBegin(value: Vector2)
        
        /** Bottom-right limits for scrolling to end. If the camera is outside of this limit, the [Parallax2D] will stop scrolling. Must be higher than [member limit_begin] and the viewport size combined to work. */
        get limitEnd(): Vector2
        set limitEnd(value: Vector2)
        
        /** If `true`, this [Parallax2D] is offset by the current camera's position. If the [Parallax2D] is in a [CanvasLayer] separate from the current camera, it may be desired to match the value with [member CanvasLayer.follow_viewport_enabled]. */
        get followViewport(): boolean
        set followViewport(value: boolean)
        
        /** If `true`, [Parallax2D]'s position is not affected by the position of the camera. */
        get ignoreCameraScroll(): boolean
        set ignoreCameraScroll(value: boolean)
        
        /** Offset used to scroll this [Parallax2D]. This value is updated automatically unless [member ignore_camera_scroll] is `true`. */
        get screenOffset(): Vector2
        set screenOffset(value: Vector2)
    }
    /** A node used to create a parallax scrolling background.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_parallaxbackground.html  
     */
    class ParallaxBackground<Map extends NodePathMap = any> extends CanvasLayer<Map> {
        constructor(identifier?: any)
        _cameraMoved(_unnamedArg0: Transform2D, _unnamedArg1: Vector2, _unnamedArg2: Vector2): void
        
        /** The ParallaxBackground's scroll value. Calculated automatically when using a [Camera2D], but can be used to manually manage scrolling when no camera is present. */
        get scrollOffset(): Vector2
        set scrollOffset(value: Vector2)
        
        /** The base position offset for all [ParallaxLayer] children. */
        get scrollBaseOffset(): Vector2
        set scrollBaseOffset(value: Vector2)
        
        /** The base motion scale for all [ParallaxLayer] children. */
        get scrollBaseScale(): Vector2
        set scrollBaseScale(value: Vector2)
        
        /** Top-left limits for scrolling to begin. If the camera is outside of this limit, the background will stop scrolling. Must be lower than [member scroll_limit_end] to work. */
        get scrollLimitBegin(): Vector2
        set scrollLimitBegin(value: Vector2)
        
        /** Bottom-right limits for scrolling to end. If the camera is outside of this limit, the background will stop scrolling. Must be higher than [member scroll_limit_begin] to work. */
        get scrollLimitEnd(): Vector2
        set scrollLimitEnd(value: Vector2)
        
        /** If `true`, elements in [ParallaxLayer] child aren't affected by the zoom level of the camera. */
        get scrollIgnoreCameraZoom(): boolean
        set scrollIgnoreCameraZoom(value: boolean)
    }
}
