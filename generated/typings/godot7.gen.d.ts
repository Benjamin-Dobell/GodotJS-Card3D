// AUTO-GENERATED
declare module "godot" {
    /** Base class for all texture types.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_texture.html  
     */
    class Texture extends Resource {
        constructor(identifier?: any)
    }
    /** Texture for 2D and 3D.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_texture2d.html  
     */
    class Texture2D extends Texture {
        constructor(identifier?: any)
        /** Called when the [Texture2D]'s width is queried. */
        /* gdvirtual */ _getWidth(): int64
        
        /** Called when the [Texture2D]'s height is queried. */
        /* gdvirtual */ _getHeight(): int64
        
        /** Called when a pixel's opaque state in the [Texture2D] is queried at the specified `(x, y)` position. */
        /* gdvirtual */ _isPixelOpaque(x: int64, y: int64): boolean
        
        /** Called when the presence of an alpha channel in the [Texture2D] is queried. */
        /* gdvirtual */ _hasAlpha(): boolean
        
        /** Called when the entire [Texture2D] is requested to be drawn over a [CanvasItem], with the top-left offset specified in [param pos]. [param modulate] specifies a multiplier for the colors being drawn, while [param transpose] specifies whether drawing should be performed in column-major order instead of row-major order (resulting in 90-degree clockwise rotation).  
         *      
         *  **Note:** This is only used in 2D rendering, not 3D.  
         */
        /* gdvirtual */ _draw(toCanvasItem: Rid, pos: Vector2, modulate: Color, transpose: boolean): void
        
        /** Called when the [Texture2D] is requested to be drawn onto [CanvasItem]'s specified [param rect]. [param modulate] specifies a multiplier for the colors being drawn, while [param transpose] specifies whether drawing should be performed in column-major order instead of row-major order (resulting in 90-degree clockwise rotation).  
         *      
         *  **Note:** This is only used in 2D rendering, not 3D.  
         */
        /* gdvirtual */ _drawRect(toCanvasItem: Rid, rect: Rect2, tile: boolean, modulate: Color, transpose: boolean): void
        
        /** Called when a part of the [Texture2D] specified by [param src_rect]'s coordinates is requested to be drawn onto [CanvasItem]'s specified [param rect]. [param modulate] specifies a multiplier for the colors being drawn, while [param transpose] specifies whether drawing should be performed in column-major order instead of row-major order (resulting in 90-degree clockwise rotation).  
         *      
         *  **Note:** This is only used in 2D rendering, not 3D.  
         */
        /* gdvirtual */ _drawRectRegion(toCanvasItem: Rid, rect: Rect2, srcRect: Rect2, modulate: Color, transpose: boolean, clipUV: boolean): void
        
        /** Returns the texture width in pixels. */
        getWidth(): int64
        
        /** Returns the texture height in pixels. */
        getHeight(): int64
        
        /** Returns the texture size in pixels. */
        getSize(): Vector2
        
        /** Returns `true` if this [Texture2D] has an alpha channel. */
        hasAlpha(): boolean
        
        /** Draws the texture using a [CanvasItem] with the [RenderingServer] API at the specified [param position]. */
        draw(canvasItem: Rid, position: Vector2, modulate?: Color /* = new Color(1, 1, 1, 1) */, transpose?: boolean /* = false */): void
        
        /** Draws the texture using a [CanvasItem] with the [RenderingServer] API. */
        drawRect(canvasItem: Rid, rect: Rect2, tile: boolean, modulate?: Color /* = new Color(1, 1, 1, 1) */, transpose?: boolean /* = false */): void
        
        /** Draws a part of the texture using a [CanvasItem] with the [RenderingServer] API. */
        drawRectRegion(canvasItem: Rid, rect: Rect2, srcRect: Rect2, modulate?: Color /* = new Color(1, 1, 1, 1) */, transpose?: boolean /* = false */, clipUV?: boolean /* = true */): void
        
        /** Returns an [Image] that is a copy of data from this [Texture2D] (a new [Image] is created each time). [Image]s can be accessed and manipulated directly.  
         *      
         *  **Note:** This will return `null` if this [Texture2D] is invalid.  
         *      
         *  **Note:** This will fetch the texture data from the GPU, which might cause performance problems when overused. Avoid calling [method get_image] every frame, especially on large textures.  
         */
        getImage(): null | Image
        
        /** Creates a placeholder version of this resource ([PlaceholderTexture2D]). */
        createPlaceholder(): Resource
    }
    /** A single texture resource which consists of multiple, separate images. Each image has the same dimensions and number of mipmap levels.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_texture2darray.html  
     */
    class Texture2DArray extends ImageTextureLayered {
        constructor(identifier?: any)
        /** Creates a placeholder version of this resource ([PlaceholderTexture2DArray]). */
        createPlaceholder(): Resource
    }
    /** Texture Array for 2D that is bound to a texture created on the [RenderingDevice].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_texture2darrayrd.html  
     */
    class Texture2DArrayRD extends TextureLayeredRD {
        constructor(identifier?: any)
    }
    class Texture2Drd extends Texture2D {
        constructor(identifier?: any)
        get textureRdRid(): Rid
        set textureRdRid(value: Rid)
    }
    /** Base class for 3-dimensional textures.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_texture3d.html  
     */
    class Texture3D extends Texture {
        constructor(identifier?: any)
        /** Called when the [Texture3D]'s format is queried. */
        /* gdvirtual */ _getFormat(): Image.Format
        
        /** Called when the [Texture3D]'s width is queried. */
        /* gdvirtual */ _getWidth(): int64
        
        /** Called when the [Texture3D]'s height is queried. */
        /* gdvirtual */ _getHeight(): int64
        
        /** Called when the [Texture3D]'s depth is queried. */
        /* gdvirtual */ _getDepth(): int64
        
        /** Called when the presence of mipmaps in the [Texture3D] is queried. */
        /* gdvirtual */ _hasMipmaps(): boolean
        
        /** Called when the [Texture3D]'s data is queried. */
        /* gdvirtual */ _getData(): GArray
        
        /** Returns the current format being used by this texture. See [enum Image.Format] for details. */
        getFormat(): Image.Format
        
        /** Returns the [Texture3D]'s width in pixels. Width is typically represented by the X axis. */
        getWidth(): int64
        
        /** Returns the [Texture3D]'s height in pixels. Width is typically represented by the Y axis. */
        getHeight(): int64
        
        /** Returns the [Texture3D]'s depth in pixels. Depth is typically represented by the Z axis (a dimension not present in [Texture2D]). */
        getDepth(): int64
        
        /** Returns `true` if the [Texture3D] has generated mipmaps. */
        hasMipmaps(): boolean
        
        /** Returns the [Texture3D]'s data as an array of [Image]s. Each [Image] represents a  *slice*  of the [Texture3D], with different slices mapping to different depth (Z axis) levels. */
        getData(): GArray
        
        /** Creates a placeholder version of this resource ([PlaceholderTexture3D]). */
        createPlaceholder(): Resource
    }
    class Texture3Drd extends Texture3D {
        constructor(identifier?: any)
        get textureRdRid(): Rid
        set textureRdRid(value: Rid)
    }
    namespace TextureButton {
        enum StretchMode {
            StretchScale = 0,
            StretchTile = 1,
            StretchKeep = 2,
            StretchKeepCentered = 3,
            StretchKeepAspect = 4,
            StretchKeepAspectCentered = 5,
            StretchKeepAspectCovered = 6,
        }
    }
    /** Texture-based button. Supports Pressed, Hover, Disabled and Focused states.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_texturebutton.html  
     */
    class TextureButton<Map extends NodePathMap = any> extends BaseButton<Map> {
        /** Scale to fit the node's bounding rectangle. */
        static readonly STRETCH_SCALE = 0
        
        /** Tile inside the node's bounding rectangle. */
        static readonly STRETCH_TILE = 1
        
        /** The texture keeps its original size and stays in the bounding rectangle's top-left corner. */
        static readonly STRETCH_KEEP = 2
        
        /** The texture keeps its original size and stays centered in the node's bounding rectangle. */
        static readonly STRETCH_KEEP_CENTERED = 3
        
        /** Scale the texture to fit the node's bounding rectangle, but maintain the texture's aspect ratio. */
        static readonly STRETCH_KEEP_ASPECT = 4
        
        /** Scale the texture to fit the node's bounding rectangle, center it, and maintain its aspect ratio. */
        static readonly STRETCH_KEEP_ASPECT_CENTERED = 5
        
        /** Scale the texture so that the shorter side fits the bounding rectangle. The other side clips to the node's limits. */
        static readonly STRETCH_KEEP_ASPECT_COVERED = 6
        constructor(identifier?: any)
        
        /** Texture to display by default, when the node is **not** in the disabled, hover or pressed state. This texture is still displayed in the focused state, with [member texture_focused] drawn on top. */
        get textureNormal(): null | Texture2D
        set textureNormal(value: null | Texture2D)
        
        /** Texture to display on mouse down over the node, if the node has keyboard focus and the player presses the Enter key or if the player presses the [member BaseButton.shortcut] key. If not assigned, the [TextureButton] displays [member texture_hover] instead when pressed. */
        get texturePressed(): null | Texture2D
        set texturePressed(value: null | Texture2D)
        
        /** Texture to display when the mouse hovers over the node. If not assigned, the [TextureButton] displays [member texture_normal] instead when hovered over. */
        get textureHover(): null | Texture2D
        set textureHover(value: null | Texture2D)
        
        /** Texture to display when the node is disabled. See [member BaseButton.disabled]. If not assigned, the [TextureButton] displays [member texture_normal] instead. */
        get textureDisabled(): null | Texture2D
        set textureDisabled(value: null | Texture2D)
        
        /** Texture to  *overlay on the base texture*  when the node has mouse or keyboard focus. Because [member texture_focused] is displayed on top of the base texture, a partially transparent texture should be used to ensure the base texture remains visible. A texture that represents an outline or an underline works well for this purpose. To disable the focus visual effect, assign a fully transparent texture of any size. Note that disabling the focus visual effect will harm keyboard/controller navigation usability, so this is not recommended for accessibility reasons. */
        get textureFocused(): null | Texture2D
        set textureFocused(value: null | Texture2D)
        
        /** Pure black and white [BitMap] image to use for click detection. On the mask, white pixels represent the button's clickable area. Use it to create buttons with curved shapes. */
        get textureClickMask(): null | Bitmap
        set textureClickMask(value: null | Bitmap)
        
        /** If `true`, the size of the texture won't be considered for minimum size calculation, so the [TextureButton] can be shrunk down past the texture size. */
        get ignoreTextureSize(): boolean
        set ignoreTextureSize(value: boolean)
        
        /** Controls the texture's behavior when you resize the node's bounding rectangle. See the [enum StretchMode] constants for available options. */
        get stretchMode(): int64
        set stretchMode(value: int64)
        
        /** If `true`, texture is flipped horizontally. */
        get flipH(): boolean
        set flipH(value: boolean)
        
        /** If `true`, texture is flipped vertically. */
        get flipV(): boolean
        set flipV(value: boolean)
    }
    /** Texture Array for Cubemaps that is bound to a texture created on the [RenderingDevice].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_texturecubemaparrayrd.html  
     */
    class TextureCubemapArrayRD extends TextureLayeredRD {
        constructor(identifier?: any)
    }
    /** Texture for Cubemap that is bound to a texture created on the [RenderingDevice].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_texturecubemaprd.html  
     */
    class TextureCubemapRD extends TextureLayeredRD {
        constructor(identifier?: any)
    }
    namespace TextureLayered {
        enum LayeredType {
            LayeredType2DArray = 0,
            LayeredTypeCubemap = 1,
            LayeredTypeCubemapArray = 2,
        }
    }
    /** Base class for texture types which contain the data of multiple [Image]s. Each image is of the same size and format.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_texturelayered.html  
     */
    class TextureLayered extends Texture {
        /** Texture is a generic [Texture2DArray]. */
        static readonly LAYERED_TYPE_2D_ARRAY = 0
        
        /** Texture is a [Cubemap], with each side in its own layer (6 in total). */
        static readonly LAYERED_TYPE_CUBEMAP = 1
        
        /** Texture is a [CubemapArray], with each cubemap being made of 6 layers. */
        static readonly LAYERED_TYPE_CUBEMAP_ARRAY = 2
        constructor(identifier?: any)
        
        /** Called when the [TextureLayered]'s format is queried. */
        /* gdvirtual */ _getFormat(): Image.Format
        
        /** Called when the layers' type in the [TextureLayered] is queried. */
        /* gdvirtual */ _getLayeredType(): int64
        
        /** Called when the [TextureLayered]'s width queried. */
        /* gdvirtual */ _getWidth(): int64
        
        /** Called when the [TextureLayered]'s height is queried. */
        /* gdvirtual */ _getHeight(): int64
        
        /** Called when the number of layers in the [TextureLayered] is queried. */
        /* gdvirtual */ _getLayers(): int64
        
        /** Called when the presence of mipmaps in the [TextureLayered] is queried. */
        /* gdvirtual */ _hasMipmaps(): boolean
        
        /** Called when the data for a layer in the [TextureLayered] is queried. */
        /* gdvirtual */ _getLayerData(layerIndex: int64): null | Image
        
        /** Returns the current format being used by this texture. See [enum Image.Format] for details. */
        getFormat(): Image.Format
        
        /** Returns the [TextureLayered]'s type. The type determines how the data is accessed, with cubemaps having special types. */
        getLayeredType(): TextureLayered.LayeredType
        
        /** Returns the width of the texture in pixels. Width is typically represented by the X axis. */
        getWidth(): int64
        
        /** Returns the height of the texture in pixels. Height is typically represented by the Y axis. */
        getHeight(): int64
        
        /** Returns the number of referenced [Image]s. */
        getLayers(): int64
        
        /** Returns `true` if the layers have generated mipmaps. */
        hasMipmaps(): boolean
        
        /** Returns an [Image] resource with the data from specified [param layer]. */
        getLayerData(layer: int64): null | Image
    }
    /** Abstract base class for layered texture RD types.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_texturelayeredrd.html  
     */
    class TextureLayeredRD extends TextureLayered {
        constructor(identifier?: any)
        /** The RID of the texture object created on the [RenderingDevice]. */
        get textureRdRid(): Rid
        set textureRdRid(value: Rid)
    }
    namespace TextureProgressBar {
        enum FillMode {
            FillLeftToRight = 0,
            FillRightToLeft = 1,
            FillTopToBottom = 2,
            FillBottomToTop = 3,
            FillClockwise = 4,
            FillCounterClockwise = 5,
            FillBilinearLeftAndRight = 6,
            FillBilinearTopAndBottom = 7,
            FillClockwiseAndCounterClockwise = 8,
        }
    }
    /** Texture-based progress bar. Useful for loading screens and life or stamina bars.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_textureprogressbar.html  
     */
    class TextureProgressBar<Map extends NodePathMap = any> extends Range<Map> {
        /** The [member texture_progress] fills from left to right. */
        static readonly FILL_LEFT_TO_RIGHT = 0
        
        /** The [member texture_progress] fills from right to left. */
        static readonly FILL_RIGHT_TO_LEFT = 1
        
        /** The [member texture_progress] fills from top to bottom. */
        static readonly FILL_TOP_TO_BOTTOM = 2
        
        /** The [member texture_progress] fills from bottom to top. */
        static readonly FILL_BOTTOM_TO_TOP = 3
        
        /** Turns the node into a radial bar. The [member texture_progress] fills clockwise. See [member radial_center_offset], [member radial_initial_angle] and [member radial_fill_degrees] to control the way the bar fills up. */
        static readonly FILL_CLOCKWISE = 4
        
        /** Turns the node into a radial bar. The [member texture_progress] fills counterclockwise. See [member radial_center_offset], [member radial_initial_angle] and [member radial_fill_degrees] to control the way the bar fills up. */
        static readonly FILL_COUNTER_CLOCKWISE = 5
        
        /** The [member texture_progress] fills from the center, expanding both towards the left and the right. */
        static readonly FILL_BILINEAR_LEFT_AND_RIGHT = 6
        
        /** The [member texture_progress] fills from the center, expanding both towards the top and the bottom. */
        static readonly FILL_BILINEAR_TOP_AND_BOTTOM = 7
        
        /** Turns the node into a radial bar. The [member texture_progress] fills radially from the center, expanding both clockwise and counterclockwise. See [member radial_center_offset], [member radial_initial_angle] and [member radial_fill_degrees] to control the way the bar fills up. */
        static readonly FILL_CLOCKWISE_AND_COUNTER_CLOCKWISE = 8
        constructor(identifier?: any)
        
        /** Sets the stretch margin with the specified index. See [member stretch_margin_bottom] and related properties. */
        setStretchMargin(margin: Side, value: int64): void
        
        /** Returns the stretch margin with the specified index. See [member stretch_margin_bottom] and related properties. */
        getStretchMargin(margin: Side): int64
        
        /** The fill direction. See [enum FillMode] for possible values. */
        get fillMode(): int64
        set fillMode(value: int64)
        
        /** Starting angle for the fill of [member texture_progress] if [member fill_mode] is [constant FILL_CLOCKWISE], [constant FILL_COUNTER_CLOCKWISE], or [constant FILL_CLOCKWISE_AND_COUNTER_CLOCKWISE]. When the node's `value` is equal to its `min_value`, the texture doesn't show up at all. When the `value` increases, the texture fills and tends towards [member radial_fill_degrees].  
         *      
         *  **Note:** [member radial_initial_angle] is wrapped between `0` and `360` degrees (inclusive).  
         */
        get radialInitialAngle(): float64
        set radialInitialAngle(value: float64)
        
        /** Upper limit for the fill of [member texture_progress] if [member fill_mode] is [constant FILL_CLOCKWISE], [constant FILL_COUNTER_CLOCKWISE], or [constant FILL_CLOCKWISE_AND_COUNTER_CLOCKWISE]. When the node's `value` is equal to its `max_value`, the texture fills up to this angle.  
         *  See [member Range.value], [member Range.max_value].  
         */
        get radialFillDegrees(): float64
        set radialFillDegrees(value: float64)
        
        /** Offsets [member texture_progress] if [member fill_mode] is [constant FILL_CLOCKWISE], [constant FILL_COUNTER_CLOCKWISE], or [constant FILL_CLOCKWISE_AND_COUNTER_CLOCKWISE].  
         *      
         *  **Note:** The effective radial center always stays within the [member texture_progress] bounds. If you need to move it outside the texture's bounds, modify the [member texture_progress] to contain additional empty space where needed.  
         */
        get radialCenterOffset(): Vector2
        set radialCenterOffset(value: Vector2)
        
        /** If `true`, Godot treats the bar's textures like in [NinePatchRect]. Use the `stretch_margin_*` properties like [member stretch_margin_bottom] to set up the nine patch's 3×3 grid. When using a radial [member fill_mode], this setting will only enable stretching for [member texture_progress], while [member texture_under] and [member texture_over] will be treated like in [NinePatchRect]. */
        get ninePatchStretch(): boolean
        set ninePatchStretch(value: boolean)
        
        /** The width of the 9-patch's left column. Only effective if [member nine_patch_stretch] is `true`. */
        get stretchMarginLeft(): int64
        set stretchMarginLeft(value: int64)
        
        /** The height of the 9-patch's top row. Only effective if [member nine_patch_stretch] is `true`. */
        get stretchMarginTop(): int64
        set stretchMarginTop(value: int64)
        
        /** The width of the 9-patch's right column. Only effective if [member nine_patch_stretch] is `true`. */
        get stretchMarginRight(): int64
        set stretchMarginRight(value: int64)
        
        /** The height of the 9-patch's bottom row. A margin of 16 means the 9-slice's bottom corners and side will have a height of 16 pixels. You can set all 4 margin values individually to create panels with non-uniform borders. Only effective if [member nine_patch_stretch] is `true`. */
        get stretchMarginBottom(): int64
        set stretchMarginBottom(value: int64)
        
        /** [Texture2D] that draws under the progress bar. The bar's background. */
        get textureUnder(): null | Texture2D
        set textureUnder(value: null | Texture2D)
        
        /** [Texture2D] that draws over the progress bar. Use it to add highlights or an upper-frame that hides part of [member texture_progress]. */
        get textureOver(): null | Texture2D
        set textureOver(value: null | Texture2D)
        
        /** [Texture2D] that clips based on the node's `value` and [member fill_mode]. As `value` increased, the texture fills up. It shows entirely when `value` reaches `max_value`. It doesn't show at all if `value` is equal to `min_value`.  
         *  The `value` property comes from [Range]. See [member Range.value], [member Range.min_value], [member Range.max_value].  
         */
        get textureProgress(): null | Texture2D
        set textureProgress(value: null | Texture2D)
        
        /** The offset of [member texture_progress]. Useful for [member texture_over] and [member texture_under] with fancy borders, to avoid transparent margins in your progress texture. */
        get textureProgressOffset(): Vector2
        set textureProgressOffset(value: Vector2)
        
        /** Multiplies the color of the bar's [member texture_under] texture. */
        get tintUnder(): Color
        set tintUnder(value: Color)
        
        /** Multiplies the color of the bar's [member texture_over] texture. The effect is similar to [member CanvasItem.modulate], except it only affects this specific texture instead of the entire node. */
        get tintOver(): Color
        set tintOver(value: Color)
        
        /** Multiplies the color of the bar's [member texture_progress] texture. */
        get tintProgress(): Color
        set tintProgress(value: Color)
    }
    namespace TextureRect {
        enum ExpandMode {
            ExpandKeepSize = 0,
            ExpandIgnoreSize = 1,
            ExpandFitWidth = 2,
            ExpandFitWidthProportional = 3,
            ExpandFitHeight = 4,
            ExpandFitHeightProportional = 5,
        }
        enum StretchMode {
            StretchScale = 0,
            StretchTile = 1,
            StretchKeep = 2,
            StretchKeepCentered = 3,
            StretchKeepAspect = 4,
            StretchKeepAspectCentered = 5,
            StretchKeepAspectCovered = 6,
        }
    }
    /** A control that displays a texture.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_texturerect.html  
     */
    class TextureRect<Map extends NodePathMap = any> extends Control<Map> {
        /** The minimum size will be equal to texture size, i.e. [TextureRect] can't be smaller than the texture. */
        static readonly EXPAND_KEEP_SIZE = 0
        
        /** The size of the texture won't be considered for minimum size calculation, so the [TextureRect] can be shrunk down past the texture size. */
        static readonly EXPAND_IGNORE_SIZE = 1
        
        /** The height of the texture will be ignored. Minimum width will be equal to the current height. Useful for horizontal layouts, e.g. inside [HBoxContainer]. */
        static readonly EXPAND_FIT_WIDTH = 2
        
        /** Same as [constant EXPAND_FIT_WIDTH], but keeps texture's aspect ratio. */
        static readonly EXPAND_FIT_WIDTH_PROPORTIONAL = 3
        
        /** The width of the texture will be ignored. Minimum height will be equal to the current width. Useful for vertical layouts, e.g. inside [VBoxContainer]. */
        static readonly EXPAND_FIT_HEIGHT = 4
        
        /** Same as [constant EXPAND_FIT_HEIGHT], but keeps texture's aspect ratio. */
        static readonly EXPAND_FIT_HEIGHT_PROPORTIONAL = 5
        
        /** Scale to fit the node's bounding rectangle. */
        static readonly STRETCH_SCALE = 0
        
        /** Tile inside the node's bounding rectangle. */
        static readonly STRETCH_TILE = 1
        
        /** The texture keeps its original size and stays in the bounding rectangle's top-left corner. */
        static readonly STRETCH_KEEP = 2
        
        /** The texture keeps its original size and stays centered in the node's bounding rectangle. */
        static readonly STRETCH_KEEP_CENTERED = 3
        
        /** Scale the texture to fit the node's bounding rectangle, but maintain the texture's aspect ratio. */
        static readonly STRETCH_KEEP_ASPECT = 4
        
        /** Scale the texture to fit the node's bounding rectangle, center it and maintain its aspect ratio. */
        static readonly STRETCH_KEEP_ASPECT_CENTERED = 5
        
        /** Scale the texture so that the shorter side fits the bounding rectangle. The other side clips to the node's limits. */
        static readonly STRETCH_KEEP_ASPECT_COVERED = 6
        constructor(identifier?: any)
        
        /** The node's [Texture2D] resource. */
        get texture(): null | Texture2D
        set texture(value: null | Texture2D)
        
        /** Defines how minimum size is determined based on the texture's size. See [enum ExpandMode] for options. */
        get expandMode(): int64
        set expandMode(value: int64)
        
        /** Controls the texture's behavior when resizing the node's bounding rectangle. See [enum StretchMode]. */
        get stretchMode(): int64
        set stretchMode(value: int64)
        
        /** If `true`, texture is flipped horizontally. */
        get flipH(): boolean
        set flipH(value: boolean)
        
        /** If `true`, texture is flipped vertically. */
        get flipV(): boolean
        set flipV(value: boolean)
    }
    namespace Theme {
        enum DataType {
            DataTypeColor = 0,
            DataTypeConstant = 1,
            DataTypeFont = 2,
            DataTypeFontSize = 3,
            DataTypeIcon = 4,
            DataTypeStylebox = 5,
            DataTypeMax = 6,
        }
    }
    /** A resource used for styling/skinning [Control]s and [Window]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_theme.html  
     */
    class Theme extends Resource {
        /** Theme's [Color] item type. */
        static readonly DATA_TYPE_COLOR = 0
        
        /** Theme's constant item type. */
        static readonly DATA_TYPE_CONSTANT = 1
        
        /** Theme's [Font] item type. */
        static readonly DATA_TYPE_FONT = 2
        
        /** Theme's font size item type. */
        static readonly DATA_TYPE_FONT_SIZE = 3
        
        /** Theme's icon [Texture2D] item type. */
        static readonly DATA_TYPE_ICON = 4
        
        /** Theme's [StyleBox] item type. */
        static readonly DATA_TYPE_STYLEBOX = 5
        
        /** Maximum value for the DataType enum. */
        static readonly DATA_TYPE_MAX = 6
        constructor(identifier?: any)
        
        /** Creates or changes the value of the icon property defined by [param name] and [param theme_type]. Use [method clear_icon] to remove the property. */
        setIcon(name: StringName, themeType: StringName, texture: Texture2D): void
        
        /** Returns the icon property defined by [param name] and [param theme_type], if it exists.  
         *  Returns the engine fallback icon value if the property doesn't exist (see [member ThemeDB.fallback_icon]). Use [method has_icon] to check for existence.  
         */
        getIcon(name: StringName, themeType: StringName): null | Texture2D
        
        /** Returns `true` if the icon property defined by [param name] and [param theme_type] exists.  
         *  Returns `false` if it doesn't exist. Use [method set_icon] to define it.  
         */
        hasIcon(name: StringName, themeType: StringName): boolean
        
        /** Renames the icon property defined by [param old_name] and [param theme_type] to [param name], if it exists.  
         *  Fails if it doesn't exist, or if a similar property with the new name already exists. Use [method has_icon] to check for existence, and [method clear_icon] to remove the existing property.  
         */
        renameIcon(oldName: StringName, name: StringName, themeType: StringName): void
        
        /** Removes the icon property defined by [param name] and [param theme_type], if it exists.  
         *  Fails if it doesn't exist. Use [method has_icon] to check for existence.  
         */
        clearIcon(name: StringName, themeType: StringName): void
        
        /** Returns a list of names for icon properties defined with [param theme_type]. Use [method get_icon_type_list] to get a list of possible theme type names. */
        getIconList(themeType: string): PackedStringArray
        
        /** Returns a list of all unique theme type names for icon properties. Use [method get_type_list] to get a list of all unique theme types. */
        getIconTypeList(): PackedStringArray
        
        /** Creates or changes the value of the [StyleBox] property defined by [param name] and [param theme_type]. Use [method clear_stylebox] to remove the property. */
        setStylebox(name: StringName, themeType: StringName, texture: StyleBox): void
        
        /** Returns the [StyleBox] property defined by [param name] and [param theme_type], if it exists.  
         *  Returns the engine fallback stylebox value if the property doesn't exist (see [member ThemeDB.fallback_stylebox]). Use [method has_stylebox] to check for existence.  
         */
        getStylebox(name: StringName, themeType: StringName): null | StyleBox
        
        /** Returns `true` if the [StyleBox] property defined by [param name] and [param theme_type] exists.  
         *  Returns `false` if it doesn't exist. Use [method set_stylebox] to define it.  
         */
        hasStylebox(name: StringName, themeType: StringName): boolean
        
        /** Renames the [StyleBox] property defined by [param old_name] and [param theme_type] to [param name], if it exists.  
         *  Fails if it doesn't exist, or if a similar property with the new name already exists. Use [method has_stylebox] to check for existence, and [method clear_stylebox] to remove the existing property.  
         */
        renameStylebox(oldName: StringName, name: StringName, themeType: StringName): void
        
        /** Removes the [StyleBox] property defined by [param name] and [param theme_type], if it exists.  
         *  Fails if it doesn't exist. Use [method has_stylebox] to check for existence.  
         */
        clearStylebox(name: StringName, themeType: StringName): void
        
        /** Returns a list of names for [StyleBox] properties defined with [param theme_type]. Use [method get_stylebox_type_list] to get a list of possible theme type names. */
        getStyleboxList(themeType: string): PackedStringArray
        
        /** Returns a list of all unique theme type names for [StyleBox] properties. Use [method get_type_list] to get a list of all unique theme types. */
        getStyleboxTypeList(): PackedStringArray
        
        /** Creates or changes the value of the [Font] property defined by [param name] and [param theme_type]. Use [method clear_font] to remove the property. */
        setFont(name: StringName, themeType: StringName, font: Font): void
        
        /** Returns the [Font] property defined by [param name] and [param theme_type], if it exists.  
         *  Returns the default theme font if the property doesn't exist and the default theme font is set up (see [member default_font]). Use [method has_font] to check for existence of the property and [method has_default_font] to check for existence of the default theme font.  
         *  Returns the engine fallback font value, if neither exist (see [member ThemeDB.fallback_font]).  
         */
        getFont(name: StringName, themeType: StringName): null | Font
        
        /** Returns `true` if the [Font] property defined by [param name] and [param theme_type] exists, or if the default theme font is set up (see [method has_default_font]).  
         *  Returns `false` if neither exist. Use [method set_font] to define the property.  
         */
        hasFont(name: StringName, themeType: StringName): boolean
        
        /** Renames the [Font] property defined by [param old_name] and [param theme_type] to [param name], if it exists.  
         *  Fails if it doesn't exist, or if a similar property with the new name already exists. Use [method has_font] to check for existence, and [method clear_font] to remove the existing property.  
         */
        renameFont(oldName: StringName, name: StringName, themeType: StringName): void
        
        /** Removes the [Font] property defined by [param name] and [param theme_type], if it exists.  
         *  Fails if it doesn't exist. Use [method has_font] to check for existence.  
         */
        clearFont(name: StringName, themeType: StringName): void
        
        /** Returns a list of names for [Font] properties defined with [param theme_type]. Use [method get_font_type_list] to get a list of possible theme type names. */
        getFontList(themeType: string): PackedStringArray
        
        /** Returns a list of all unique theme type names for [Font] properties. Use [method get_type_list] to get a list of all unique theme types. */
        getFontTypeList(): PackedStringArray
        
        /** Creates or changes the value of the font size property defined by [param name] and [param theme_type]. Use [method clear_font_size] to remove the property. */
        setFontSize(name: StringName, themeType: StringName, fontSize: int64): void
        
        /** Returns the font size property defined by [param name] and [param theme_type], if it exists.  
         *  Returns the default theme font size if the property doesn't exist and the default theme font size is set up (see [member default_font_size]). Use [method has_font_size] to check for existence of the property and [method has_default_font_size] to check for existence of the default theme font.  
         *  Returns the engine fallback font size value, if neither exist (see [member ThemeDB.fallback_font_size]).  
         */
        getFontSize(name: StringName, themeType: StringName): int64
        
        /** Returns `true` if the font size property defined by [param name] and [param theme_type] exists, or if the default theme font size is set up (see [method has_default_font_size]).  
         *  Returns `false` if neither exist. Use [method set_font_size] to define the property.  
         */
        hasFontSize(name: StringName, themeType: StringName): boolean
        
        /** Renames the font size property defined by [param old_name] and [param theme_type] to [param name], if it exists.  
         *  Fails if it doesn't exist, or if a similar property with the new name already exists. Use [method has_font_size] to check for existence, and [method clear_font_size] to remove the existing property.  
         */
        renameFontSize(oldName: StringName, name: StringName, themeType: StringName): void
        
        /** Removes the font size property defined by [param name] and [param theme_type], if it exists.  
         *  Fails if it doesn't exist. Use [method has_font_size] to check for existence.  
         */
        clearFontSize(name: StringName, themeType: StringName): void
        
        /** Returns a list of names for font size properties defined with [param theme_type]. Use [method get_font_size_type_list] to get a list of possible theme type names. */
        getFontSizeList(themeType: string): PackedStringArray
        
        /** Returns a list of all unique theme type names for font size properties. Use [method get_type_list] to get a list of all unique theme types. */
        getFontSizeTypeList(): PackedStringArray
        
        /** Creates or changes the value of the [Color] property defined by [param name] and [param theme_type]. Use [method clear_color] to remove the property. */
        setColor(name: StringName, themeType: StringName, color: Color): void
        
        /** Returns the [Color] property defined by [param name] and [param theme_type], if it exists.  
         *  Returns the default color value if the property doesn't exist. Use [method has_color] to check for existence.  
         */
        getColor(name: StringName, themeType: StringName): Color
        
        /** Returns `true` if the [Color] property defined by [param name] and [param theme_type] exists.  
         *  Returns `false` if it doesn't exist. Use [method set_color] to define it.  
         */
        hasColor(name: StringName, themeType: StringName): boolean
        
        /** Renames the [Color] property defined by [param old_name] and [param theme_type] to [param name], if it exists.  
         *  Fails if it doesn't exist, or if a similar property with the new name already exists. Use [method has_color] to check for existence, and [method clear_color] to remove the existing property.  
         */
        renameColor(oldName: StringName, name: StringName, themeType: StringName): void
        
        /** Removes the [Color] property defined by [param name] and [param theme_type], if it exists.  
         *  Fails if it doesn't exist. Use [method has_color] to check for existence.  
         */
        clearColor(name: StringName, themeType: StringName): void
        
        /** Returns a list of names for [Color] properties defined with [param theme_type]. Use [method get_color_type_list] to get a list of possible theme type names. */
        getColorList(themeType: string): PackedStringArray
        
        /** Returns a list of all unique theme type names for [Color] properties. Use [method get_type_list] to get a list of all unique theme types. */
        getColorTypeList(): PackedStringArray
        
        /** Creates or changes the value of the constant property defined by [param name] and [param theme_type]. Use [method clear_constant] to remove the property. */
        setConstant(name: StringName, themeType: StringName, constant: int64): void
        
        /** Returns the constant property defined by [param name] and [param theme_type], if it exists.  
         *  Returns `0` if the property doesn't exist. Use [method has_constant] to check for existence.  
         */
        getConstant(name: StringName, themeType: StringName): int64
        
        /** Returns `true` if the constant property defined by [param name] and [param theme_type] exists.  
         *  Returns `false` if it doesn't exist. Use [method set_constant] to define it.  
         */
        hasConstant(name: StringName, themeType: StringName): boolean
        
        /** Renames the constant property defined by [param old_name] and [param theme_type] to [param name], if it exists.  
         *  Fails if it doesn't exist, or if a similar property with the new name already exists. Use [method has_constant] to check for existence, and [method clear_constant] to remove the existing property.  
         */
        renameConstant(oldName: StringName, name: StringName, themeType: StringName): void
        
        /** Removes the constant property defined by [param name] and [param theme_type], if it exists.  
         *  Fails if it doesn't exist. Use [method has_constant] to check for existence.  
         */
        clearConstant(name: StringName, themeType: StringName): void
        
        /** Returns a list of names for constant properties defined with [param theme_type]. Use [method get_constant_type_list] to get a list of possible theme type names. */
        getConstantList(themeType: string): PackedStringArray
        
        /** Returns a list of all unique theme type names for constant properties. Use [method get_type_list] to get a list of all unique theme types. */
        getConstantTypeList(): PackedStringArray
        
        /** Returns `true` if [member default_base_scale] has a valid value.  
         *  Returns `false` if it doesn't. The value must be greater than `0.0` to be considered valid.  
         */
        hasDefaultBaseScale(): boolean
        
        /** Returns `true` if [member default_font] has a valid value.  
         *  Returns `false` if it doesn't.  
         */
        hasDefaultFont(): boolean
        
        /** Returns `true` if [member default_font_size] has a valid value.  
         *  Returns `false` if it doesn't. The value must be greater than `0` to be considered valid.  
         */
        hasDefaultFontSize(): boolean
        
        /** Creates or changes the value of the theme property of [param data_type] defined by [param name] and [param theme_type]. Use [method clear_theme_item] to remove the property.  
         *  Fails if the [param value] type is not accepted by [param data_type].  
         *      
         *  **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.  
         */
        setThemeItem(dataType: Theme.DataType, name: StringName, themeType: StringName, value: any): void
        
        /** Returns the theme property of [param data_type] defined by [param name] and [param theme_type], if it exists.  
         *  Returns the engine fallback value if the property doesn't exist (see [ThemeDB]). Use [method has_theme_item] to check for existence.  
         *      
         *  **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.  
         */
        getThemeItem(dataType: Theme.DataType, name: StringName, themeType: StringName): any
        
        /** Returns `true` if the theme property of [param data_type] defined by [param name] and [param theme_type] exists.  
         *  Returns `false` if it doesn't exist. Use [method set_theme_item] to define it.  
         *      
         *  **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.  
         */
        hasThemeItem(dataType: Theme.DataType, name: StringName, themeType: StringName): boolean
        
        /** Renames the theme property of [param data_type] defined by [param old_name] and [param theme_type] to [param name], if it exists.  
         *  Fails if it doesn't exist, or if a similar property with the new name already exists. Use [method has_theme_item] to check for existence, and [method clear_theme_item] to remove the existing property.  
         *      
         *  **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.  
         */
        renameThemeItem(dataType: Theme.DataType, oldName: StringName, name: StringName, themeType: StringName): void
        
        /** Removes the theme property of [param data_type] defined by [param name] and [param theme_type], if it exists.  
         *  Fails if it doesn't exist. Use [method has_theme_item] to check for existence.  
         *      
         *  **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.  
         */
        clearThemeItem(dataType: Theme.DataType, name: StringName, themeType: StringName): void
        
        /** Returns a list of names for properties of [param data_type] defined with [param theme_type]. Use [method get_theme_item_type_list] to get a list of possible theme type names.  
         *      
         *  **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.  
         */
        getThemeItemList(dataType: Theme.DataType, themeType: string): PackedStringArray
        
        /** Returns a list of all unique theme type names for [param data_type] properties. Use [method get_type_list] to get a list of all unique theme types.  
         *      
         *  **Note:** This method is analogous to calling the corresponding data type specific method, but can be used for more generalized logic.  
         */
        getThemeItemTypeList(dataType: Theme.DataType): PackedStringArray
        
        /** Marks [param theme_type] as a variation of [param base_type].  
         *  This adds [param theme_type] as a suggested option for [member Control.theme_type_variation] on a [Control] that is of the [param base_type] class.  
         *  Variations can also be nested, i.e. [param base_type] can be another variation. If a chain of variations ends with a [param base_type] matching the class of the [Control], the whole chain is going to be suggested as options.  
         *      
         *  **Note:** Suggestions only show up if this theme resource is set as the project default theme. See [member ProjectSettings.gui/theme/custom].  
         */
        setTypeVariation(themeType: StringName, baseType: StringName): void
        
        /** Returns `true` if [param theme_type] is marked as a variation of [param base_type]. */
        isTypeVariation(themeType: StringName, baseType: StringName): boolean
        
        /** Unmarks [param theme_type] as being a variation of another theme type. See [method set_type_variation]. */
        clearTypeVariation(themeType: StringName): void
        
        /** Returns the name of the base theme type if [param theme_type] is a valid variation type. Returns an empty string otherwise. */
        getTypeVariationBase(themeType: StringName): StringName
        
        /** Returns a list of all type variations for the given [param base_type]. */
        getTypeVariationList(baseType: StringName): PackedStringArray
        
        /** Adds an empty theme type for every valid data type.  
         *      
         *  **Note:** Empty types are not saved with the theme. This method only exists to perform in-memory changes to the resource. Use available `set_*` methods to add theme items.  
         */
        addType(themeType: StringName): void
        
        /** Removes the theme type, gracefully discarding defined theme items. If the type is a variation, this information is also erased. If the type is a base for type variations, those variations lose their base. */
        removeType(themeType: StringName): void
        
        /** Returns a list of all unique theme type names. Use the appropriate `get_*_type_list` method to get a list of unique theme types for a single data type. */
        getTypeList(): PackedStringArray
        
        /** Adds missing and overrides existing definitions with values from the [param other] theme resource.  
         *      
         *  **Note:** This modifies the current theme. If you want to merge two themes together without modifying either one, create a new empty theme and merge the other two into it one after another.  
         */
        mergeWith(other: Theme): void
        
        /** Removes all the theme properties defined on the theme resource. */
        clear(): void
        
        /** The default base scale factor of this theme resource. Used by some controls to scale their visual properties based on the global scale factor. If this value is set to `0.0`, the global scale factor is used (see [member ThemeDB.fallback_base_scale]).  
         *  Use [method has_default_base_scale] to check if this value is valid.  
         */
        get defaultBaseScale(): float64
        set defaultBaseScale(value: float64)
        
        /** The default font of this theme resource. Used as the default value when trying to fetch a font resource that doesn't exist in this theme or is in invalid state. If the default font is also missing or invalid, the engine fallback value is used (see [member ThemeDB.fallback_font]).  
         *  Use [method has_default_font] to check if this value is valid.  
         */
        get defaultFont(): null | Font
        set defaultFont(value: null | Font)
        
        /** The default font size of this theme resource. Used as the default value when trying to fetch a font size value that doesn't exist in this theme or is in invalid state. If the default font size is also missing or invalid, the engine fallback value is used (see [member ThemeDB.fallback_font_size]).  
         *  Values below `1` are invalid and can be used to unset the property. Use [method has_default_font_size] to check if this value is valid.  
         */
        get defaultFontSize(): int64
        set defaultFontSize(value: int64)
    }
    /** Settings for a single tile in a [TileSet].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_tiledata.html  
     */
    class TileData extends GObject {
        constructor(identifier?: any)
        /** Sets the occluder polygon count in the TileSet occlusion layer with index [param layer_id]. */
        setOccluderPolygonsCount(layerId: int64, polygonsCount: int64): void
        
        /** Returns the number of occluder polygons of the tile in the TileSet occlusion layer with index [param layer_id]. */
        getOccluderPolygonsCount(layerId: int64): int64
        
        /** Adds an occlusion polygon to the tile on the TileSet occlusion layer with index [param layer_id]. */
        addOccluderPolygon(layerId: int64): void
        
        /** Removes the polygon at index [param polygon_index] for TileSet occlusion layer with index [param layer_id]. */
        removeOccluderPolygon(layerId: int64, polygonIndex: int64): void
        
        /** Sets the occluder for polygon with index [param polygon_index] in the TileSet occlusion layer with index [param layer_id]. */
        setOccluderPolygon(layerId: int64, polygonIndex: int64, polygon: OccluderPolygon2D): void
        
        /** Returns the occluder polygon at index [param polygon_index] from the TileSet occlusion layer with index [param layer_id].  
         *  The [param flip_h], [param flip_v], and [param transpose] parameters can be `true` to transform the returned polygon.  
         */
        getOccluderPolygon(layerId: int64, polygonIndex: int64, flipH?: boolean /* = false */, flipV?: boolean /* = false */, transpose?: boolean /* = false */): null | OccluderPolygon2D
        
        /** Sets the occluder for the TileSet occlusion layer with index [param layer_id]. */
        setOccluder(layerId: int64, occluderPolygon: OccluderPolygon2D): void
        
        /** Returns the occluder polygon of the tile for the TileSet occlusion layer with index [param layer_id].  
         *  [param flip_h], [param flip_v], and [param transpose] allow transforming the returned polygon.  
         */
        getOccluder(layerId: int64, flipH?: boolean /* = false */, flipV?: boolean /* = false */, transpose?: boolean /* = false */): null | OccluderPolygon2D
        
        /** Sets the constant linear velocity. This does not move the tile. This linear velocity is applied to objects colliding with this tile. This is useful to create conveyor belts. */
        setConstantLinearVelocity(layerId: int64, velocity: Vector2): void
        
        /** Returns the constant linear velocity applied to objects colliding with this tile. */
        getConstantLinearVelocity(layerId: int64): Vector2
        
        /** Sets the constant angular velocity. This does not rotate the tile. This angular velocity is applied to objects colliding with this tile. */
        setConstantAngularVelocity(layerId: int64, velocity: float64): void
        
        /** Returns the constant angular velocity applied to objects colliding with this tile. */
        getConstantAngularVelocity(layerId: int64): float64
        
        /** Sets the polygons count for TileSet physics layer with index [param layer_id]. */
        setCollisionPolygonsCount(layerId: int64, polygonsCount: int64): void
        
        /** Returns how many polygons the tile has for TileSet physics layer with index [param layer_id]. */
        getCollisionPolygonsCount(layerId: int64): int64
        
        /** Adds a collision polygon to the tile on the given TileSet physics layer. */
        addCollisionPolygon(layerId: int64): void
        
        /** Removes the polygon at index [param polygon_index] for TileSet physics layer with index [param layer_id]. */
        removeCollisionPolygon(layerId: int64, polygonIndex: int64): void
        
        /** Sets the points of the polygon at index [param polygon_index] for TileSet physics layer with index [param layer_id]. */
        setCollisionPolygonPoints(layerId: int64, polygonIndex: int64, polygon: PackedVector2Array | Vector2[]): void
        
        /** Returns the points of the polygon at index [param polygon_index] for TileSet physics layer with index [param layer_id]. */
        getCollisionPolygonPoints(layerId: int64, polygonIndex: int64): PackedVector2Array
        
        /** Enables/disables one-way collisions on the polygon at index [param polygon_index] for TileSet physics layer with index [param layer_id]. */
        setCollisionPolygonOneWay(layerId: int64, polygonIndex: int64, oneWay: boolean): void
        
        /** Returns whether one-way collisions are enabled for the polygon at index [param polygon_index] for TileSet physics layer with index [param layer_id]. */
        isCollisionPolygonOneWay(layerId: int64, polygonIndex: int64): boolean
        
        /** Sets the one-way margin (for one-way platforms) of the polygon at index [param polygon_index] for TileSet physics layer with index [param layer_id]. */
        setCollisionPolygonOneWayMargin(layerId: int64, polygonIndex: int64, oneWayMargin: float64): void
        
        /** Returns the one-way margin (for one-way platforms) of the polygon at index [param polygon_index] for TileSet physics layer with index [param layer_id]. */
        getCollisionPolygonOneWayMargin(layerId: int64, polygonIndex: int64): float64
        
        /** Sets the tile's terrain bit for the given [param peering_bit] direction. To check that a direction is valid, use [method is_valid_terrain_peering_bit]. */
        setTerrainPeeringBit(peeringBit: TileSet.CellNeighbor, terrain: int64): void
        
        /** Returns the tile's terrain bit for the given [param peering_bit] direction. To check that a direction is valid, use [method is_valid_terrain_peering_bit]. */
        getTerrainPeeringBit(peeringBit: TileSet.CellNeighbor): int64
        
        /** Returns whether the given [param peering_bit] direction is valid for this tile. */
        isValidTerrainPeeringBit(peeringBit: TileSet.CellNeighbor): boolean
        
        /** Sets the navigation polygon for the TileSet navigation layer with index [param layer_id]. */
        setNavigationPolygon(layerId: int64, navigationPolygon: NavigationPolygon): void
        
        /** Returns the navigation polygon of the tile for the TileSet navigation layer with index [param layer_id].  
         *  [param flip_h], [param flip_v], and [param transpose] allow transforming the returned polygon.  
         */
        getNavigationPolygon(layerId: int64, flipH?: boolean /* = false */, flipV?: boolean /* = false */, transpose?: boolean /* = false */): null | NavigationPolygon
        
        /** Sets the tile's custom data value for the TileSet custom data layer with name [param layer_name]. */
        setCustomData(layerName: string, value: any): void
        
        /** Returns the custom data value for custom data layer named [param layer_name]. To check if a custom data layer exists, use [method has_custom_data]. */
        getCustomData(layerName: string): any
        
        /** Returns whether there exists a custom data layer named [param layer_name]. */
        hasCustomData(layerName: string): boolean
        
        /** Sets the tile's custom data value for the TileSet custom data layer with index [param layer_id]. */
        setCustomDataByLayerId(layerId: int64, value: any): void
        
        /** Returns the custom data value for custom data layer with index [param layer_id]. */
        getCustomDataByLayerId(layerId: int64): any
        
        /** If `true`, the tile will have its texture flipped horizontally. */
        get flipH(): boolean
        set flipH(value: boolean)
        
        /** If `true`, the tile will have its texture flipped vertically. */
        get flipV(): boolean
        set flipV(value: boolean)
        
        /** If `true`, the tile will display transposed, i.e. with horizontal and vertical texture UVs swapped. */
        get transpose(): boolean
        set transpose(value: boolean)
        
        /** Offsets the position of where the tile is drawn. */
        get textureOrigin(): Vector2I
        set textureOrigin(value: Vector2I)
        
        /** Color modulation of the tile. */
        get modulate(): Color
        set modulate(value: Color)
        
        /** The [Material] to use for this [TileData]. This can be a [CanvasItemMaterial] to use the default shader, or a [ShaderMaterial] to use a custom shader. */
        get material(): null | CanvasItemMaterial | ShaderMaterial
        set material(value: null | CanvasItemMaterial | ShaderMaterial)
        
        /** Ordering index of this tile, relative to [TileMapLayer]. */
        get zIndex(): int64
        set zIndex(value: int64)
        
        /** Vertical point of the tile used for determining y-sorted order. */
        get ySortOrigin(): int64
        set ySortOrigin(value: int64)
        
        /** ID of the terrain set that the tile uses. */
        get terrainSet(): int64
        set terrainSet(value: int64)
        
        /** ID of the terrain from the terrain set that the tile uses. */
        get terrain(): int64
        set terrain(value: int64)
        
        /** Relative probability of this tile being selected when drawing a pattern of random tiles. */
        get probability(): float64
        set probability(value: float64)
        
        /** Emitted when any of the properties are changed. */
        readonly changed: Signal<() => void>
    }
    namespace TileMap {
        enum VisibilityMode {
            VisibilityModeDefault = 0,
            VisibilityModeForceHide = 2,
            VisibilityModeForceShow = 1,
        }
    }
    /** Node for 2D tile-based maps.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_tilemap.html  
     */
    class TileMap<Map extends NodePathMap = any> extends Node2D<Map> {
        /** Use the debug settings to determine visibility. */
        static readonly VISIBILITY_MODE_DEFAULT = 0
        
        /** Always hide. */
        static readonly VISIBILITY_MODE_FORCE_HIDE = 2
        
        /** Always show. */
        static readonly VISIBILITY_MODE_FORCE_SHOW = 1
        constructor(identifier?: any)
        
        /** Should return `true` if the tile at coordinates [param coords] on layer [param layer] requires a runtime update.  
         *  **Warning:** Make sure this function only return `true` when needed. Any tile processed at runtime without a need for it will imply a significant performance penalty.  
         *      
         *  **Note:** If the result of this function should changed, use [method notify_runtime_tile_data_update] to notify the TileMap it needs an update.  
         */
        /* gdvirtual */ _useTileDataRuntimeUpdate(layer: int64, coords: Vector2I): boolean
        
        /** Called with a TileData object about to be used internally by the TileMap, allowing its modification at runtime.  
         *  This method is only called if [method _use_tile_data_runtime_update] is implemented and returns `true` for the given tile [param coords] and [param layer].  
         *  **Warning:** The [param tile_data] object's sub-resources are the same as the one in the TileSet. Modifying them might impact the whole TileSet. Instead, make sure to duplicate those resources.  
         *      
         *  **Note:** If the properties of [param tile_data] object should change over time, use [method notify_runtime_tile_data_update] to notify the TileMap it needs an update.  
         */
        /* gdvirtual */ _tileDataRuntimeUpdate(layer: int64, coords: Vector2I, tileData: TileData): void
        
        /** Assigns [param map] as a [NavigationServer2D] navigation map for the specified TileMap layer [param layer]. */
        setNavigationMap(layer: int64, map: Rid): void
        
        /** Returns the [RID] of the [NavigationServer2D] navigation map assigned to the specified TileMap layer [param layer]. */
        getNavigationMap(layer: int64): Rid
        
        /** Forces the TileMap and the layer [param layer] to update. */
        forceUpdate(layer?: int64 /* = -1 */): void
        
        /** Returns the number of layers in the TileMap. */
        getLayersCount(): int64
        
        /** Adds a layer at the given position [param to_position] in the array. If [param to_position] is negative, the position is counted from the end, with `-1` adding the layer at the end of the array. */
        addLayer(toPosition: int64): void
        
        /** Moves the layer at index [param layer] to the given position [param to_position] in the array. */
        moveLayer(layer: int64, toPosition: int64): void
        
        /** Removes the layer at index [param layer]. */
        removeLayer(layer: int64): void
        
        /** Sets a layer's name. This is mostly useful in the editor.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        setLayerName(layer: int64, name: string): void
        
        /** Returns a TileMap layer's name.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        getLayerName(layer: int64): string
        
        /** Enables or disables the layer [param layer]. A disabled layer is not processed at all (no rendering, no physics, etc.).  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        setLayerEnabled(layer: int64, enabled: boolean): void
        
        /** Returns if a layer is enabled.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        isLayerEnabled(layer: int64): boolean
        
        /** Sets a layer's color. It will be multiplied by tile's color and TileMap's modulate.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        setLayerModulate(layer: int64, modulate: Color): void
        
        /** Returns a TileMap layer's modulate.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        getLayerModulate(layer: int64): Color
        
        /** Enables or disables a layer's Y-sorting. If a layer is Y-sorted, the layer will behave as a CanvasItem node where each of its tile gets Y-sorted.  
         *  Y-sorted layers should usually be on different Z-index values than not Y-sorted layers, otherwise, each of those layer will be Y-sorted as whole with the Y-sorted one. This is usually an undesired behavior.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        setLayerYSortEnabled(layer: int64, ySortEnabled: boolean): void
        
        /** Returns if a layer Y-sorts its tiles.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        isLayerYSortEnabled(layer: int64): boolean
        
        /** Sets a layer's Y-sort origin value. This Y-sort origin value is added to each tile's Y-sort origin value.  
         *  This allows, for example, to fake a different height level on each layer. This can be useful for top-down view games.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        setLayerYSortOrigin(layer: int64, ySortOrigin: int64): void
        
        /** Returns a TileMap layer's Y sort origin.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        getLayerYSortOrigin(layer: int64): int64
        
        /** Sets a layers Z-index value. This Z-index is added to each tile's Z-index value.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        setLayerZIndex(layer: int64, zIndex: int64): void
        
        /** Returns a TileMap layer's Z-index value.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        getLayerZIndex(layer: int64): int64
        
        /** Enables or disables a layer's built-in navigation regions generation. Disable this if you need to bake navigation regions from a TileMap using a [NavigationRegion2D] node. */
        setLayerNavigationEnabled(layer: int64, enabled: boolean): void
        
        /** Returns if a layer's built-in navigation regions generation is enabled. */
        isLayerNavigationEnabled(layer: int64): boolean
        
        /** Assigns [param map] as a [NavigationServer2D] navigation map for the specified TileMap layer [param layer].  
         *  By default the TileMap uses the default [World2D] navigation map for the first TileMap layer. For each additional TileMap layer a new navigation map is created for the additional layer.  
         *  In order to make [NavigationAgent2D] switch between TileMap layer navigation maps use [method NavigationAgent2D.set_navigation_map] with the navigation map received from [method get_layer_navigation_map].  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        setLayerNavigationMap(layer: int64, map: Rid): void
        
        /** Returns the [RID] of the [NavigationServer2D] navigation map assigned to the specified TileMap layer [param layer].  
         *  By default the TileMap uses the default [World2D] navigation map for the first TileMap layer. For each additional TileMap layer a new navigation map is created for the additional layer.  
         *  In order to make [NavigationAgent2D] switch between TileMap layer navigation maps use [method NavigationAgent2D.set_navigation_map] with the navigation map received from [method get_layer_navigation_map].  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        getLayerNavigationMap(layer: int64): Rid
        
        /** Sets the tile identifiers for the cell on layer [param layer] at coordinates [param coords]. Each tile of the [TileSet] is identified using three parts:  
         *  - The source identifier [param source_id] identifies a [TileSetSource] identifier. See [method TileSet.set_source_id],  
         *  - The atlas coordinates identifier [param atlas_coords] identifies a tile coordinates in the atlas (if the source is a [TileSetAtlasSource]). For [TileSetScenesCollectionSource] it should always be `Vector2i(0, 0)`),  
         *  - The alternative tile identifier [param alternative_tile] identifies a tile alternative in the atlas (if the source is a [TileSetAtlasSource]), and the scene for a [TileSetScenesCollectionSource].  
         *  If [param source_id] is set to `-1`, [param atlas_coords] to `Vector2i(-1, -1)` or [param alternative_tile] to `-1`, the cell will be erased. An erased cell gets **all** its identifiers automatically set to their respective invalid values, namely `-1`, `Vector2i(-1, -1)` and `-1`.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        setCell(layer: int64, coords: Vector2I, sourceId?: int64 /* = -1 */, atlasCoords?: Vector2I /* = new Vector2I(-1, -1) */, alternativeTile?: int64 /* = 0 */): void
        
        /** Erases the cell on layer [param layer] at coordinates [param coords].  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        eraseCell(layer: int64, coords: Vector2I): void
        
        /** Returns the tile source ID of the cell on layer [param layer] at coordinates [param coords]. Returns `-1` if the cell does not exist.  
         *  If [param use_proxies] is `false`, ignores the [TileSet]'s tile proxies, returning the raw source identifier. See [method TileSet.map_tile_proxy].  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        getCellSourceId(layer: int64, coords: Vector2I, useProxies?: boolean /* = false */): int64
        
        /** Returns the tile atlas coordinates ID of the cell on layer [param layer] at coordinates [param coords]. Returns `Vector2i(-1, -1)` if the cell does not exist.  
         *  If [param use_proxies] is `false`, ignores the [TileSet]'s tile proxies, returning the raw atlas coordinate identifier. See [method TileSet.map_tile_proxy].  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        getCellAtlasCoords(layer: int64, coords: Vector2I, useProxies?: boolean /* = false */): Vector2I
        
        /** Returns the tile alternative ID of the cell on layer [param layer] at [param coords].  
         *  If [param use_proxies] is `false`, ignores the [TileSet]'s tile proxies, returning the raw alternative identifier. See [method TileSet.map_tile_proxy].  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        getCellAlternativeTile(layer: int64, coords: Vector2I, useProxies?: boolean /* = false */): int64
        
        /** Returns the [TileData] object associated with the given cell, or `null` if the cell does not exist or is not a [TileSetAtlasSource].  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         *    
         *  If [param use_proxies] is `false`, ignores the [TileSet]'s tile proxies. See [method TileSet.map_tile_proxy].  
         */
        getCellTileData(layer: int64, coords: Vector2I, useProxies?: boolean /* = false */): null | TileData
        
        /** Returns `true` if the cell on layer [param layer] at coordinates [param coords] is flipped horizontally. The result is valid only for atlas sources. */
        isCellFlippedH(layer: int64, coords: Vector2I, useProxies?: boolean /* = false */): boolean
        
        /** Returns `true` if the cell on layer [param layer] at coordinates [param coords] is flipped vertically. The result is valid only for atlas sources. */
        isCellFlippedV(layer: int64, coords: Vector2I, useProxies?: boolean /* = false */): boolean
        
        /** Returns `true` if the cell on layer [param layer] at coordinates [param coords] is transposed. The result is valid only for atlas sources. */
        isCellTransposed(layer: int64, coords: Vector2I, useProxies?: boolean /* = false */): boolean
        
        /** Returns the coordinates of the tile for given physics body RID. Such RID can be retrieved from [method KinematicCollision2D.get_collider_rid], when colliding with a tile. */
        getCoordsForBodyRid(body: Rid): Vector2I
        
        /** Returns the tilemap layer of the tile for given physics body RID. Such RID can be retrieved from [method KinematicCollision2D.get_collider_rid], when colliding with a tile. */
        getLayerForBodyRid(body: Rid): int64
        
        /** Creates a new [TileMapPattern] from the given layer and set of cells.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        getPattern(layer: int64, coordsArray: GArray): null | TileMapPattern
        
        /** Returns for the given coordinate [param coords_in_pattern] in a [TileMapPattern] the corresponding cell coordinates if the pattern was pasted at the [param position_in_tilemap] coordinates (see [method set_pattern]). This mapping is required as in half-offset tile shapes, the mapping might not work by calculating `position_in_tile_map + coords_in_pattern`. */
        mapPattern(positionInTilemap: Vector2I, coordsInPattern: Vector2I, pattern: TileMapPattern): Vector2I
        
        /** Paste the given [TileMapPattern] at the given [param position] and [param layer] in the tile map.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        setPattern(layer: int64, position: Vector2I, pattern: TileMapPattern): void
        
        /** Update all the cells in the [param cells] coordinates array so that they use the given [param terrain] for the given [param terrain_set]. If an updated cell has the same terrain as one of its neighboring cells, this function tries to join the two. This function might update neighboring tiles if needed to create correct terrain transitions.  
         *  If [param ignore_empty_terrains] is `true`, empty terrains will be ignored when trying to find the best fitting tile for the given terrain constraints.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         *      
         *  **Note:** To work correctly, this method requires the TileMap's TileSet to have terrains set up with all required terrain combinations. Otherwise, it may produce unexpected results.  
         */
        setCellsTerrainConnect(layer: int64, cells: GArray, terrainSet: int64, terrain: int64, ignoreEmptyTerrains?: boolean /* = true */): void
        
        /** Update all the cells in the [param path] coordinates array so that they use the given [param terrain] for the given [param terrain_set]. The function will also connect two successive cell in the path with the same terrain. This function might update neighboring tiles if needed to create correct terrain transitions.  
         *  If [param ignore_empty_terrains] is `true`, empty terrains will be ignored when trying to find the best fitting tile for the given terrain constraints.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         *      
         *  **Note:** To work correctly, this method requires the TileMap's TileSet to have terrains set up with all required terrain combinations. Otherwise, it may produce unexpected results.  
         */
        setCellsTerrainPath(layer: int64, path: GArray, terrainSet: int64, terrain: int64, ignoreEmptyTerrains?: boolean /* = true */): void
        
        /** Clears cells that do not exist in the tileset. */
        fixInvalidTiles(): void
        
        /** Clears all cells on the given layer.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        clearLayer(layer: int64): void
        
        /** Clears all cells. */
        clear(): void
        
        /** Triggers a direct update of the TileMap. Usually, calling this function is not needed, as TileMap node updates automatically when one of its properties or cells is modified.  
         *  However, for performance reasons, those updates are batched and delayed to the end of the frame. Calling this function will force the TileMap to update right away instead.  
         *  **Warning:** Updating the TileMap is computationally expensive and may impact performance. Try to limit the number of updates and how many tiles they impact.  
         */
        updateInternals(): void
        
        /** Notifies the TileMap node that calls to [method _use_tile_data_runtime_update] or [method _tile_data_runtime_update] will lead to different results. This will thus trigger a TileMap update.  
         *  If [param layer] is provided, only notifies changes for the given layer. Providing the [param layer] argument (when applicable) is usually preferred for performance reasons.  
         *  **Warning:** Updating the TileMap is computationally expensive and may impact performance. Try to limit the number of calls to this function to avoid unnecessary update.  
         *      
         *  **Note:** This does not trigger a direct update of the TileMap, the update will be done at the end of the frame as usual (unless you call [method update_internals]).  
         */
        notifyRuntimeTileDataUpdate(layer?: int64 /* = -1 */): void
        
        /** Returns the list of all neighbourings cells to the one at [param coords]. */
        getSurroundingCells(coords: Vector2I): GArray
        
        /** Returns a [Vector2i] array with the positions of all cells containing a tile in the given layer. A cell is considered empty if its source identifier equals -1, its atlas coordinates identifiers is `Vector2(-1, -1)` and its alternative identifier is -1.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        getUsedCells(layer: int64): GArray
        
        /** Returns a [Vector2i] array with the positions of all cells containing a tile in the given layer. Tiles may be filtered according to their source ([param source_id]), their atlas coordinates ([param atlas_coords]) or alternative id ([param alternative_tile]).  
         *  If a parameter has its value set to the default one, this parameter is not used to filter a cell. Thus, if all parameters have their respective default value, this method returns the same result as [method get_used_cells].  
         *  A cell is considered empty if its source identifier equals -1, its atlas coordinates identifiers is `Vector2(-1, -1)` and its alternative identifier is -1.  
         *  If [param layer] is negative, the layers are accessed from the last one.  
         */
        getUsedCellsById(layer: int64, sourceId?: int64 /* = -1 */, atlasCoords?: Vector2I /* = new Vector2I(-1, -1) */, alternativeTile?: int64 /* = -1 */): GArray
        
        /** Returns a rectangle enclosing the used (non-empty) tiles of the map, including all layers. */
        getUsedRect(): Rect2I
        
        /** Returns the centered position of a cell in the TileMap's local coordinate space. To convert the returned value into global coordinates, use [method Node2D.to_global]. See also [method local_to_map].  
         *      
         *  **Note:** This may not correspond to the visual position of the tile, i.e. it ignores the [member TileData.texture_origin] property of individual tiles.  
         */
        mapToLocal(mapPosition: Vector2I): Vector2
        
        /** Returns the map coordinates of the cell containing the given [param local_position]. If [param local_position] is in global coordinates, consider using [method Node2D.to_local] before passing it to this method. See also [method map_to_local]. */
        localToMap(localPosition: Vector2): Vector2I
        
        /** Returns the neighboring cell to the one at coordinates [param coords], identified by the [param neighbor] direction. This method takes into account the different layouts a TileMap can take. */
        getNeighborCell(coords: Vector2I, neighbor: TileSet.CellNeighbor): Vector2I
        
        /** The [TileSet] used by this [TileMap]. The textures, collisions, and additional behavior of all available tiles are stored here. */
        get tileSet(): null | TileSet
        set tileSet(value: null | TileSet)
        
        /** The TileMap's quadrant size. A quadrant is a group of tiles to be drawn together on a single canvas item, for optimization purposes. [member rendering_quadrant_size] defines the length of a square's side, in the map's coordinate system, that forms the quadrant. Thus, the default quadrant size groups together `16 * 16 = 256` tiles.  
         *  The quadrant size does not apply on Y-sorted layers, as tiles are grouped by Y position instead in that case.  
         *      
         *  **Note:** As quadrants are created according to the map's coordinate system, the quadrant's "square shape" might not look like square in the TileMap's local coordinate system.  
         */
        get renderingQuadrantSize(): int64
        set renderingQuadrantSize(value: int64)
        
        /** If enabled, the TileMap will see its collisions synced to the physics tick and change its collision type from static to kinematic. This is required to create TileMap-based moving platform.  
         *      
         *  **Note:** Enabling [member collision_animatable] may have a small performance impact, only do it if the TileMap is moving and has colliding tiles.  
         */
        get collisionAnimatable(): boolean
        set collisionAnimatable(value: boolean)
        
        /** Show or hide the TileMap's collision shapes. If set to [constant VISIBILITY_MODE_DEFAULT], this depends on the show collision debug settings. */
        get collisionVisibilityMode(): int64
        set collisionVisibilityMode(value: int64)
        
        /** Show or hide the TileMap's navigation meshes. If set to [constant VISIBILITY_MODE_DEFAULT], this depends on the show navigation debug settings. */
        get navigationVisibilityMode(): int64
        set navigationVisibilityMode(value: int64)
        
        /** Emitted when the [TileSet] of this TileMap changes. */
        readonly changed: Signal<() => void>
    }
    namespace TileMapLayer {
        enum DebugVisibilityMode {
            DebugVisibilityModeDefault = 0,
            DebugVisibilityModeForceHide = 2,
            DebugVisibilityModeForceShow = 1,
        }
    }
    /** Node for 2D tile-based maps.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_tilemaplayer.html  
     */
    class TileMapLayer<Map extends NodePathMap = any> extends Node2D<Map> {
        /** Hide the collisions or navigation debug shapes in the editor, and use the debug settings to determine their visibility in game (i.e. [member SceneTree.debug_collisions_hint] or [member SceneTree.debug_navigation_hint]). */
        static readonly DEBUG_VISIBILITY_MODE_DEFAULT = 0
        
        /** Always hide the collisions or navigation debug shapes. */
        static readonly DEBUG_VISIBILITY_MODE_FORCE_HIDE = 2
        
        /** Always show the collisions or navigation debug shapes. */
        static readonly DEBUG_VISIBILITY_MODE_FORCE_SHOW = 1
        constructor(identifier?: any)
        
        /** Should return `true` if the tile at coordinates [param coords] requires a runtime update.  
         *  **Warning:** Make sure this function only returns `true` when needed. Any tile processed at runtime without a need for it will imply a significant performance penalty.  
         *      
         *  **Note:** If the result of this function should change, use [method notify_runtime_tile_data_update] to notify the [TileMapLayer] it needs an update.  
         */
        /* gdvirtual */ _useTileDataRuntimeUpdate(coords: Vector2I): boolean
        
        /** Called with a [TileData] object about to be used internally by the [TileMapLayer], allowing its modification at runtime.  
         *  This method is only called if [method _use_tile_data_runtime_update] is implemented and returns `true` for the given tile [param coords].  
         *  **Warning:** The [param tile_data] object's sub-resources are the same as the one in the TileSet. Modifying them might impact the whole TileSet. Instead, make sure to duplicate those resources.  
         *      
         *  **Note:** If the properties of [param tile_data] object should change over time, use [method notify_runtime_tile_data_update] to notify the [TileMapLayer] it needs an update.  
         */
        /* gdvirtual */ _tileDataRuntimeUpdate(coords: Vector2I, tileData: TileData): void
        
        /** Called when this [TileMapLayer]'s cells need an internal update. This update may be caused from individual cells being modified or by a change in the [member tile_set] (causing all cells to be queued for an update). The first call to this function is always for initializing all the [TileMapLayer]'s cells. [param coords] contains the coordinates of all modified cells, roughly in the order they were modified. [param forced_cleanup] is `true` when the [TileMapLayer]'s internals should be fully cleaned up. This is the case when:  
         *  - The layer is disabled;  
         *  - The layer is not visible;  
         *  - [member tile_set] is set to `null`;  
         *  - The node is removed from the tree;  
         *  - The node is freed.  
         *  Note that any internal update happening while one of these conditions is verified is considered to be a "cleanup". See also [method update_internals].  
         *  **Warning:** Implementing this method may degrade the [TileMapLayer]'s performance.  
         */
        /* gdvirtual */ _updateCells(coords: GArray, forcedCleanup: boolean): void
        
        /** Sets the tile identifiers for the cell at coordinates [param coords]. Each tile of the [TileSet] is identified using three parts:  
         *  - The source identifier [param source_id] identifies a [TileSetSource] identifier. See [method TileSet.set_source_id],  
         *  - The atlas coordinate identifier [param atlas_coords] identifies a tile coordinates in the atlas (if the source is a [TileSetAtlasSource]). For [TileSetScenesCollectionSource] it should always be `Vector2i(0, 0)`,  
         *  - The alternative tile identifier [param alternative_tile] identifies a tile alternative in the atlas (if the source is a [TileSetAtlasSource]), and the scene for a [TileSetScenesCollectionSource].  
         *  If [param source_id] is set to `-1`, [param atlas_coords] to `Vector2i(-1, -1)`, or [param alternative_tile] to `-1`, the cell will be erased. An erased cell gets **all** its identifiers automatically set to their respective invalid values, namely `-1`, `Vector2i(-1, -1)` and `-1`.  
         */
        setCell(coords: Vector2I, sourceId?: int64 /* = -1 */, atlasCoords?: Vector2I /* = new Vector2I(-1, -1) */, alternativeTile?: int64 /* = 0 */): void
        
        /** Erases the cell at coordinates [param coords]. */
        eraseCell(coords: Vector2I): void
        
        /** Clears cells containing tiles that do not exist in the [member tile_set]. */
        fixInvalidTiles(): void
        
        /** Clears all cells. */
        clear(): void
        
        /** Returns the tile source ID of the cell at coordinates [param coords]. Returns `-1` if the cell does not exist. */
        getCellSourceId(coords: Vector2I): int64
        
        /** Returns the tile atlas coordinates ID of the cell at coordinates [param coords]. Returns `Vector2i(-1, -1)` if the cell does not exist. */
        getCellAtlasCoords(coords: Vector2I): Vector2I
        
        /** Returns the tile alternative ID of the cell at coordinates [param coords]. */
        getCellAlternativeTile(coords: Vector2I): int64
        
        /** Returns the [TileData] object associated with the given cell, or `null` if the cell does not exist or is not a [TileSetAtlasSource].  
         *    
         */
        getCellTileData(coords: Vector2I): null | TileData
        
        /** Returns `true` if the cell at coordinates [param coords] is flipped horizontally. The result is valid only for atlas sources. */
        isCellFlippedH(coords: Vector2I): boolean
        
        /** Returns `true` if the cell at coordinates [param coords] is flipped vertically. The result is valid only for atlas sources. */
        isCellFlippedV(coords: Vector2I): boolean
        
        /** Returns `true` if the cell at coordinates [param coords] is transposed. The result is valid only for atlas sources. */
        isCellTransposed(coords: Vector2I): boolean
        
        /** Returns a [Vector2i] array with the positions of all cells containing a tile. A cell is considered empty if its source identifier equals `-1`, its atlas coordinate identifier is `Vector2(-1, -1)` and its alternative identifier is `-1`. */
        getUsedCells(): GArray
        
        /** Returns a [Vector2i] array with the positions of all cells containing a tile. Tiles may be filtered according to their source ([param source_id]), their atlas coordinates ([param atlas_coords]), or alternative id ([param alternative_tile]).  
         *  If a parameter has its value set to the default one, this parameter is not used to filter a cell. Thus, if all parameters have their respective default values, this method returns the same result as [method get_used_cells].  
         *  A cell is considered empty if its source identifier equals `-1`, its atlas coordinate identifier is `Vector2(-1, -1)` and its alternative identifier is `-1`.  
         */
        getUsedCellsById(sourceId?: int64 /* = -1 */, atlasCoords?: Vector2I /* = new Vector2I(-1, -1) */, alternativeTile?: int64 /* = -1 */): GArray
        
        /** Returns a rectangle enclosing the used (non-empty) tiles of the map. */
        getUsedRect(): Rect2I
        
        /** Creates and returns a new [TileMapPattern] from the given array of cells. See also [method set_pattern]. */
        getPattern(coordsArray: GArray): null | TileMapPattern
        
        /** Pastes the [TileMapPattern] at the given [param position] in the tile map. See also [method get_pattern]. */
        setPattern(position: Vector2I, pattern: TileMapPattern): void
        
        /** Update all the cells in the [param cells] coordinates array so that they use the given [param terrain] for the given [param terrain_set]. If an updated cell has the same terrain as one of its neighboring cells, this function tries to join the two. This function might update neighboring tiles if needed to create correct terrain transitions.  
         *  If [param ignore_empty_terrains] is `true`, empty terrains will be ignored when trying to find the best fitting tile for the given terrain constraints.  
         *      
         *  **Note:** To work correctly, this method requires the [TileMapLayer]'s TileSet to have terrains set up with all required terrain combinations. Otherwise, it may produce unexpected results.  
         */
        setCellsTerrainConnect(cells: GArray, terrainSet: int64, terrain: int64, ignoreEmptyTerrains?: boolean /* = true */): void
        
        /** Update all the cells in the [param path] coordinates array so that they use the given [param terrain] for the given [param terrain_set]. The function will also connect two successive cell in the path with the same terrain. This function might update neighboring tiles if needed to create correct terrain transitions.  
         *  If [param ignore_empty_terrains] is `true`, empty terrains will be ignored when trying to find the best fitting tile for the given terrain constraints.  
         *      
         *  **Note:** To work correctly, this method requires the [TileMapLayer]'s TileSet to have terrains set up with all required terrain combinations. Otherwise, it may produce unexpected results.  
         */
        setCellsTerrainPath(path: GArray, terrainSet: int64, terrain: int64, ignoreEmptyTerrains?: boolean /* = true */): void
        
        /** Returns whether the provided [param body] [RID] belongs to one of this [TileMapLayer]'s cells. */
        hasBodyRid(body: Rid): boolean
        
        /** Returns the coordinates of the physics quadrant (see [member physics_quadrant_size]) for given physics body [RID]. Such an [RID] can be retrieved from [method KinematicCollision2D.get_collider_rid], when colliding with a tile. */
        getCoordsForBodyRid(body: Rid): Vector2I
        
        /** Triggers a direct update of the [TileMapLayer]. Usually, calling this function is not needed, as [TileMapLayer] node updates automatically when one of its properties or cells is modified.  
         *  However, for performance reasons, those updates are batched and delayed to the end of the frame. Calling this function will force the [TileMapLayer] to update right away instead.  
         *  **Warning:** Updating the [TileMapLayer] is computationally expensive and may impact performance. Try to limit the number of updates and how many tiles they impact.  
         */
        updateInternals(): void
        
        /** Notifies the [TileMapLayer] node that calls to [method _use_tile_data_runtime_update] or [method _tile_data_runtime_update] will lead to different results. This will thus trigger a [TileMapLayer] update.  
         *  **Warning:** Updating the [TileMapLayer] is computationally expensive and may impact performance. Try to limit the number of calls to this function to avoid unnecessary update.  
         *      
         *  **Note:** This does not trigger a direct update of the [TileMapLayer], the update will be done at the end of the frame as usual (unless you call [method update_internals]).  
         */
        notifyRuntimeTileDataUpdate(): void
        
        /** Returns for the given coordinates [param coords_in_pattern] in a [TileMapPattern] the corresponding cell coordinates if the pattern was pasted at the [param position_in_tilemap] coordinates (see [method set_pattern]). This mapping is required as in half-offset tile shapes, the mapping might not work by calculating `position_in_tile_map + coords_in_pattern`. */
        mapPattern(positionInTilemap: Vector2I, coordsInPattern: Vector2I, pattern: TileMapPattern): Vector2I
        
        /** Returns the list of all neighboring cells to the one at [param coords]. Any neighboring cell is one that is touching edges, so for a square cell 4 cells would be returned, for a hexagon 6 cells are returned. */
        getSurroundingCells(coords: Vector2I): GArray
        
        /** Returns the neighboring cell to the one at coordinates [param coords], identified by the [param neighbor] direction. This method takes into account the different layouts a TileMap can take. */
        getNeighborCell(coords: Vector2I, neighbor: TileSet.CellNeighbor): Vector2I
        
        /** Returns the centered position of a cell in the [TileMapLayer]'s local coordinate space. To convert the returned value into global coordinates, use [method Node2D.to_global]. See also [method local_to_map].  
         *      
         *  **Note:** This may not correspond to the visual position of the tile, i.e. it ignores the [member TileData.texture_origin] property of individual tiles.  
         */
        mapToLocal(mapPosition: Vector2I): Vector2
        
        /** Returns the map coordinates of the cell containing the given [param local_position]. If [param local_position] is in global coordinates, consider using [method Node2D.to_local] before passing it to this method. See also [method map_to_local]. */
        localToMap(localPosition: Vector2): Vector2I
        
        /** Sets a custom [param map] as a [NavigationServer2D] navigation map. If not set, uses the default [World2D] navigation map instead. */
        setNavigationMap(map: Rid): void
        
        /** Returns the [RID] of the [NavigationServer2D] navigation used by this [TileMapLayer].  
         *  By default this returns the default [World2D] navigation map, unless a custom map was provided using [method set_navigation_map].  
         */
        getNavigationMap(): Rid
        
        /** The raw tile map data as a byte array. */
        get tileMapData(): PackedByteArray
        set tileMapData(value: PackedByteArray | byte[] | ArrayBuffer)
        
        /** If `false`, disables this [TileMapLayer] completely (rendering, collision, navigation, scene tiles, etc.) */
        get enabled(): boolean
        set enabled(value: boolean)
        
        /** The [TileSet] used by this layer. The textures, collisions, and additional behavior of all available tiles are stored here. */
        get tileSet(): null | TileSet
        set tileSet(value: null | TileSet)
        
        /** Enable or disable light occlusion. */
        get occlusionEnabled(): boolean
        set occlusionEnabled(value: boolean)
        
        /** This Y-sort origin value is added to each tile's Y-sort origin value. This allows, for example, to fake a different height level. This can be useful for top-down view games. */
        get ySortOrigin(): int64
        set ySortOrigin(value: int64)
        
        /** If [member CanvasItem.y_sort_enabled] is enabled, setting this to `true` will reverse the order the tiles are drawn on the X-axis. */
        get xDrawOrderReversed(): boolean
        set xDrawOrderReversed(value: boolean)
        
        /** The [TileMapLayer]'s rendering quadrant size. A quadrant is a group of tiles to be drawn together on a single canvas item, for optimization purposes. [member rendering_quadrant_size] defines the length of a square's side, in the map's coordinate system, that forms the quadrant. Thus, the default quadrant size groups together `16 * 16 = 256` tiles.  
         *  The quadrant size does not apply on a Y-sorted [TileMapLayer], as tiles are grouped by Y position instead in that case.  
         *      
         *  **Note:** As quadrants are created according to the map's coordinate system, the quadrant's "square shape" might not look like square in the [TileMapLayer]'s local coordinate system.  
         */
        get renderingQuadrantSize(): int64
        set renderingQuadrantSize(value: int64)
        
        /** Enable or disable collisions. */
        get collisionEnabled(): boolean
        set collisionEnabled(value: boolean)
        
        /** If `true`, this [TileMapLayer] collision shapes will be instantiated as kinematic bodies. This can be needed for moving [TileMapLayer] nodes (i.e. moving platforms). */
        get useKinematicBodies(): boolean
        set useKinematicBodies(value: boolean)
        
        /** Show or hide the [TileMapLayer]'s collision shapes. If set to [constant DEBUG_VISIBILITY_MODE_DEFAULT], this depends on the show collision debug settings. */
        get collisionVisibilityMode(): int64
        set collisionVisibilityMode(value: int64)
        
        /** The [TileMapLayer]'s physics quadrant size. Within a physics quadrant, cells with similar physics properties are grouped together and their collision shapes get merged. [member physics_quadrant_size] defines the length of a square's side, in the map's coordinate system, that forms the quadrant. Thus, the default quadrant size groups together `16 * 16 = 256` tiles.  
         *      
         *  **Note:** As quadrants are created according to the map's coordinate system, the quadrant's "square shape" might not look like square in the [TileMapLayer]'s local coordinate system.  
         *      
         *  **Note:** This impacts the value returned by [method get_coords_for_body_rid].  
         */
        get physicsQuadrantSize(): int64
        set physicsQuadrantSize(value: int64)
        
        /** If `true`, navigation regions are enabled. */
        get navigationEnabled(): boolean
        set navigationEnabled(value: boolean)
        
        /** Show or hide the [TileMapLayer]'s navigation meshes. If set to [constant DEBUG_VISIBILITY_MODE_DEFAULT], this depends on the show navigation debug settings. */
        get navigationVisibilityMode(): int64
        set navigationVisibilityMode(value: int64)
        
        /** Emitted when this [TileMapLayer]'s properties changes. This includes modified cells, properties, or changes made to its assigned [TileSet].  
         *      
         *  **Note:** This signal may be emitted very often when batch-modifying a [TileMapLayer]. Avoid executing complex processing in a connected function, and consider delaying it to the end of the frame instead (i.e. calling [method Object.call_deferred]).  
         */
        readonly changed: Signal<() => void>
    }
    /** Holds a pattern to be copied from or pasted into [TileMap]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_tilemappattern.html  
     */
    class TileMapPattern extends Resource {
        constructor(identifier?: any)
        /** Sets the tile identifiers for the cell at coordinates [param coords]. See [method TileMap.set_cell]. */
        setCell(coords: Vector2I, sourceId?: int64 /* = -1 */, atlasCoords?: Vector2I /* = new Vector2I(-1, -1) */, alternativeTile?: int64 /* = -1 */): void
        
        /** Returns whether the pattern has a tile at the given coordinates. */
        hasCell(coords: Vector2I): boolean
        
        /** Remove the cell at the given coordinates. */
        removeCell(coords: Vector2I, updateSize: boolean): void
        
        /** Returns the tile source ID of the cell at [param coords]. */
        getCellSourceId(coords: Vector2I): int64
        
        /** Returns the tile atlas coordinates ID of the cell at [param coords]. */
        getCellAtlasCoords(coords: Vector2I): Vector2I
        
        /** Returns the tile alternative ID of the cell at [param coords]. */
        getCellAlternativeTile(coords: Vector2I): int64
        
        /** Returns the list of used cell coordinates in the pattern. */
        getUsedCells(): GArray
        
        /** Returns the size, in cells, of the pattern. */
        getSize(): Vector2I
        
        /** Sets the size of the pattern. */
        setSize(size: Vector2I): void
        
        /** Returns whether the pattern is empty or not. */
        isEmpty(): boolean
    }
    namespace TileSet {
        enum TileShape {
            TileShapeSquare = 0,
            TileShapeIsometric = 1,
            TileShapeHalfOffsetSquare = 2,
            TileShapeHexagon = 3,
        }
        enum TileLayout {
            TileLayoutStacked = 0,
            TileLayoutStackedOffset = 1,
            TileLayoutStairsRight = 2,
            TileLayoutStairsDown = 3,
            TileLayoutDiamondRight = 4,
            TileLayoutDiamondDown = 5,
        }
        enum TileOffsetAxis {
            TileOffsetAxisHorizontal = 0,
            TileOffsetAxisVertical = 1,
        }
        enum CellNeighbor {
            CellNeighborRightSide = 0,
            CellNeighborRightCorner = 1,
            CellNeighborBottomRightSide = 2,
            CellNeighborBottomRightCorner = 3,
            CellNeighborBottomSide = 4,
            CellNeighborBottomCorner = 5,
            CellNeighborBottomLeftSide = 6,
            CellNeighborBottomLeftCorner = 7,
            CellNeighborLeftSide = 8,
            CellNeighborLeftCorner = 9,
            CellNeighborTopLeftSide = 10,
            CellNeighborTopLeftCorner = 11,
            CellNeighborTopSide = 12,
            CellNeighborTopCorner = 13,
            CellNeighborTopRightSide = 14,
            CellNeighborTopRightCorner = 15,
        }
        enum TerrainMode {
            TerrainModeMatchCornersAndSides = 0,
            TerrainModeMatchCorners = 1,
            TerrainModeMatchSides = 2,
        }
    }
    /** Tile library for tilemaps.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_tileset.html  
     */
    class TileSet extends Resource {
        /** Rectangular tile shape. */
        static readonly TILE_SHAPE_SQUARE = 0
        
        /** Diamond tile shape (for isometric look).  
         *      
         *  **Note:** Isometric [TileSet] works best if all sibling [TileMapLayer]s and their parent inheriting from [Node2D] have Y-sort enabled.  
         */
        static readonly TILE_SHAPE_ISOMETRIC = 1
        
        /** Rectangular tile shape with one row/column out of two offset by half a tile. */
        static readonly TILE_SHAPE_HALF_OFFSET_SQUARE = 2
        
        /** Hexagonal tile shape. */
        static readonly TILE_SHAPE_HEXAGON = 3
        
        /** Tile coordinates layout where both axis stay consistent with their respective local horizontal and vertical axis. */
        static readonly TILE_LAYOUT_STACKED = 0
        
        /** Same as [constant TILE_LAYOUT_STACKED], but the first half-offset is negative instead of positive. */
        static readonly TILE_LAYOUT_STACKED_OFFSET = 1
        
        /** Tile coordinates layout where the horizontal axis stay horizontal, and the vertical one goes down-right. */
        static readonly TILE_LAYOUT_STAIRS_RIGHT = 2
        
        /** Tile coordinates layout where the vertical axis stay vertical, and the horizontal one goes down-right. */
        static readonly TILE_LAYOUT_STAIRS_DOWN = 3
        
        /** Tile coordinates layout where the horizontal axis goes up-right, and the vertical one goes down-right. */
        static readonly TILE_LAYOUT_DIAMOND_RIGHT = 4
        
        /** Tile coordinates layout where the horizontal axis goes down-right, and the vertical one goes down-left. */
        static readonly TILE_LAYOUT_DIAMOND_DOWN = 5
        
        /** Horizontal half-offset. */
        static readonly TILE_OFFSET_AXIS_HORIZONTAL = 0
        
        /** Vertical half-offset. */
        static readonly TILE_OFFSET_AXIS_VERTICAL = 1
        
        /** Neighbor on the right side. */
        static readonly CELL_NEIGHBOR_RIGHT_SIDE = 0
        
        /** Neighbor in the right corner. */
        static readonly CELL_NEIGHBOR_RIGHT_CORNER = 1
        
        /** Neighbor on the bottom right side. */
        static readonly CELL_NEIGHBOR_BOTTOM_RIGHT_SIDE = 2
        
        /** Neighbor in the bottom right corner. */
        static readonly CELL_NEIGHBOR_BOTTOM_RIGHT_CORNER = 3
        
        /** Neighbor on the bottom side. */
        static readonly CELL_NEIGHBOR_BOTTOM_SIDE = 4
        
        /** Neighbor in the bottom corner. */
        static readonly CELL_NEIGHBOR_BOTTOM_CORNER = 5
        
        /** Neighbor on the bottom left side. */
        static readonly CELL_NEIGHBOR_BOTTOM_LEFT_SIDE = 6
        
        /** Neighbor in the bottom left corner. */
        static readonly CELL_NEIGHBOR_BOTTOM_LEFT_CORNER = 7
        
        /** Neighbor on the left side. */
        static readonly CELL_NEIGHBOR_LEFT_SIDE = 8
        
        /** Neighbor in the left corner. */
        static readonly CELL_NEIGHBOR_LEFT_CORNER = 9
        
        /** Neighbor on the top left side. */
        static readonly CELL_NEIGHBOR_TOP_LEFT_SIDE = 10
        
        /** Neighbor in the top left corner. */
        static readonly CELL_NEIGHBOR_TOP_LEFT_CORNER = 11
        
        /** Neighbor on the top side. */
        static readonly CELL_NEIGHBOR_TOP_SIDE = 12
        
        /** Neighbor in the top corner. */
        static readonly CELL_NEIGHBOR_TOP_CORNER = 13
        
        /** Neighbor on the top right side. */
        static readonly CELL_NEIGHBOR_TOP_RIGHT_SIDE = 14
        
        /** Neighbor in the top right corner. */
        static readonly CELL_NEIGHBOR_TOP_RIGHT_CORNER = 15
        
        /** Requires both corners and side to match with neighboring tiles' terrains. */
        static readonly TERRAIN_MODE_MATCH_CORNERS_AND_SIDES = 0
        
        /** Requires corners to match with neighboring tiles' terrains. */
        static readonly TERRAIN_MODE_MATCH_CORNERS = 1
        
        /** Requires sides to match with neighboring tiles' terrains. */
        static readonly TERRAIN_MODE_MATCH_SIDES = 2
        constructor(identifier?: any)
        
        /** Returns a new unused source ID. This generated ID is the same that a call to [method add_source] would return. */
        getNextSourceId(): int64
        
        /** Adds a [TileSetSource] to the TileSet. If [param atlas_source_id_override] is not -1, also set its source ID. Otherwise, a unique identifier is automatically generated.  
         *  The function returns the added source ID or -1 if the source could not be added.  
         *  **Warning:** A source cannot belong to two TileSets at the same time. If the added source was attached to another [TileSet], it will be removed from that one.  
         */
        addSource(source: TileSetSource, atlasSourceIdOverride?: int64 /* = -1 */): int64
        
        /** Removes the source with the given source ID. */
        removeSource(sourceId: int64): void
        
        /** Changes a source's ID. */
        setSourceId(sourceId: int64, newSourceId: int64): void
        
        /** Returns the number of [TileSetSource] in this TileSet. */
        getSourceCount(): int64
        
        /** Returns the source ID for source with index [param index]. */
        getSourceId(index: int64): int64
        
        /** Returns if this TileSet has a source for the given source ID. */
        hasSource(sourceId: int64): boolean
        
        /** Returns the [TileSetSource] with ID [param source_id]. */
        getSource(sourceId: int64): null | TileSetSource
        
        /** Returns the occlusion layers count. */
        getOcclusionLayersCount(): int64
        
        /** Adds an occlusion layer to the TileSet at the given position [param to_position] in the array. If [param to_position] is -1, adds it at the end of the array.  
         *  Occlusion layers allow assigning occlusion polygons to atlas tiles.  
         */
        addOcclusionLayer(toPosition?: int64 /* = -1 */): void
        
        /** Moves the occlusion layer at index [param layer_index] to the given position [param to_position] in the array. Also updates the atlas tiles accordingly. */
        moveOcclusionLayer(layerIndex: int64, toPosition: int64): void
        
        /** Removes the occlusion layer at index [param layer_index]. Also updates the atlas tiles accordingly. */
        removeOcclusionLayer(layerIndex: int64): void
        
        /** Sets the occlusion layer (as in the rendering server) for occluders in the given TileSet occlusion layer. */
        setOcclusionLayerLightMask(layerIndex: int64, lightMask: int64): void
        
        /** Returns the light mask of the occlusion layer. */
        getOcclusionLayerLightMask(layerIndex: int64): int64
        
        /** Enables or disables SDF collision for occluders in the given TileSet occlusion layer. */
        setOcclusionLayerSdfCollision(layerIndex: int64, sdfCollision: boolean): void
        
        /** Returns if the occluders from this layer use `sdf_collision`. */
        getOcclusionLayerSdfCollision(layerIndex: int64): boolean
        
        /** Returns the physics layers count. */
        getPhysicsLayersCount(): int64
        
        /** Adds a physics layer to the TileSet at the given position [param to_position] in the array. If [param to_position] is -1, adds it at the end of the array.  
         *  Physics layers allow assigning collision polygons to atlas tiles.  
         */
        addPhysicsLayer(toPosition?: int64 /* = -1 */): void
        
        /** Moves the physics layer at index [param layer_index] to the given position [param to_position] in the array. Also updates the atlas tiles accordingly. */
        movePhysicsLayer(layerIndex: int64, toPosition: int64): void
        
        /** Removes the physics layer at index [param layer_index]. Also updates the atlas tiles accordingly. */
        removePhysicsLayer(layerIndex: int64): void
        
        /** Sets the collision layer (as in the physics server) for bodies in the given TileSet physics layer. */
        setPhysicsLayerCollisionLayer(layerIndex: int64, layer: int64): void
        
        /** Returns the collision layer (as in the physics server) bodies on the given TileSet's physics layer are in. */
        getPhysicsLayerCollisionLayer(layerIndex: int64): int64
        
        /** Sets the collision mask for bodies in the given TileSet physics layer. */
        setPhysicsLayerCollisionMask(layerIndex: int64, mask: int64): void
        
        /** Returns the collision mask of bodies on the given TileSet's physics layer. */
        getPhysicsLayerCollisionMask(layerIndex: int64): int64
        
        /** Sets the collision priority for bodies in the given TileSet physics layer. */
        setPhysicsLayerCollisionPriority(layerIndex: int64, priority: float64): void
        
        /** Returns the collision priority of bodies on the given TileSet's physics layer. */
        getPhysicsLayerCollisionPriority(layerIndex: int64): float64
        
        /** Sets the physics material for bodies in the given TileSet physics layer. */
        setPhysicsLayerPhysicsMaterial(layerIndex: int64, physicsMaterial: PhysicsMaterial): void
        
        /** Returns the physics material of bodies on the given TileSet's physics layer. */
        getPhysicsLayerPhysicsMaterial(layerIndex: int64): null | PhysicsMaterial
        
        /** Returns the terrain sets count. */
        getTerrainSetsCount(): int64
        
        /** Adds a new terrain set at the given position [param to_position] in the array. If [param to_position] is -1, adds it at the end of the array. */
        addTerrainSet(toPosition?: int64 /* = -1 */): void
        
        /** Moves the terrain set at index [param terrain_set] to the given position [param to_position] in the array. Also updates the atlas tiles accordingly. */
        moveTerrainSet(terrainSet: int64, toPosition: int64): void
        
        /** Removes the terrain set at index [param terrain_set]. Also updates the atlas tiles accordingly. */
        removeTerrainSet(terrainSet: int64): void
        
        /** Sets a terrain mode. Each mode determines which bits of a tile shape is used to match the neighboring tiles' terrains. */
        setTerrainSetMode(terrainSet: int64, mode: TileSet.TerrainMode): void
        
        /** Returns a terrain set mode. */
        getTerrainSetMode(terrainSet: int64): TileSet.TerrainMode
        
        /** Returns the number of terrains in the given terrain set. */
        getTerrainsCount(terrainSet: int64): int64
        
        /** Adds a new terrain to the given terrain set [param terrain_set] at the given position [param to_position] in the array. If [param to_position] is -1, adds it at the end of the array. */
        addTerrain(terrainSet: int64, toPosition?: int64 /* = -1 */): void
        
        /** Moves the terrain at index [param terrain_index] for terrain set [param terrain_set] to the given position [param to_position] in the array. Also updates the atlas tiles accordingly. */
        moveTerrain(terrainSet: int64, terrainIndex: int64, toPosition: int64): void
        
        /** Removes the terrain at index [param terrain_index] in the given terrain set [param terrain_set]. Also updates the atlas tiles accordingly. */
        removeTerrain(terrainSet: int64, terrainIndex: int64): void
        
        /** Sets a terrain's name. */
        setTerrainName(terrainSet: int64, terrainIndex: int64, name: string): void
        
        /** Returns a terrain's name. */
        getTerrainName(terrainSet: int64, terrainIndex: int64): string
        
        /** Sets a terrain's color. This color is used for identifying the different terrains in the TileSet editor. */
        setTerrainColor(terrainSet: int64, terrainIndex: int64, color: Color): void
        
        /** Returns a terrain's color. */
        getTerrainColor(terrainSet: int64, terrainIndex: int64): Color
        
        /** Returns the navigation layers count. */
        getNavigationLayersCount(): int64
        
        /** Adds a navigation layer to the TileSet at the given position [param to_position] in the array. If [param to_position] is -1, adds it at the end of the array.  
         *  Navigation layers allow assigning a navigable area to atlas tiles.  
         */
        addNavigationLayer(toPosition?: int64 /* = -1 */): void
        
        /** Moves the navigation layer at index [param layer_index] to the given position [param to_position] in the array. Also updates the atlas tiles accordingly. */
        moveNavigationLayer(layerIndex: int64, toPosition: int64): void
        
        /** Removes the navigation layer at index [param layer_index]. Also updates the atlas tiles accordingly. */
        removeNavigationLayer(layerIndex: int64): void
        
        /** Sets the navigation layers (as in the navigation server) for navigation regions in the given TileSet navigation layer. */
        setNavigationLayerLayers(layerIndex: int64, layers: int64): void
        
        /** Returns the navigation layers (as in the Navigation server) of the given TileSet navigation layer. */
        getNavigationLayerLayers(layerIndex: int64): int64
        
        /** Based on [param value], enables or disables the specified navigation layer of the TileSet navigation data layer identified by the given [param layer_index], given a navigation_layers [param layer_number] between 1 and 32. */
        setNavigationLayerLayerValue(layerIndex: int64, layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified navigation layer of the TileSet navigation data layer identified by the given [param layer_index] is enabled, given a navigation_layers [param layer_number] between 1 and 32. */
        getNavigationLayerLayerValue(layerIndex: int64, layerNumber: int64): boolean
        
        /** Returns the custom data layers count. */
        getCustomDataLayersCount(): int64
        
        /** Adds a custom data layer to the TileSet at the given position [param to_position] in the array. If [param to_position] is -1, adds it at the end of the array.  
         *  Custom data layers allow assigning custom properties to atlas tiles.  
         */
        addCustomDataLayer(toPosition?: int64 /* = -1 */): void
        
        /** Moves the custom data layer at index [param layer_index] to the given position [param to_position] in the array. Also updates the atlas tiles accordingly. */
        moveCustomDataLayer(layerIndex: int64, toPosition: int64): void
        
        /** Removes the custom data layer at index [param layer_index]. Also updates the atlas tiles accordingly. */
        removeCustomDataLayer(layerIndex: int64): void
        
        /** Returns the index of the custom data layer identified by the given name. */
        getCustomDataLayerByName(layerName: string): int64
        
        /** Sets the name of the custom data layer identified by the given index. Names are identifiers of the layer therefore if the name is already taken it will fail and raise an error. */
        setCustomDataLayerName(layerIndex: int64, layerName: string): void
        
        /** Returns if there is a custom data layer named [param layer_name]. */
        hasCustomDataLayerByName(layerName: string): boolean
        
        /** Returns the name of the custom data layer identified by the given index. */
        getCustomDataLayerName(layerIndex: int64): string
        
        /** Sets the type of the custom data layer identified by the given index. */
        setCustomDataLayerType(layerIndex: int64, layerType: Variant.Type): void
        
        /** Returns the type of the custom data layer identified by the given index. */
        getCustomDataLayerType(layerIndex: int64): Variant.Type
        
        /** Creates a source-level proxy for the given source ID. A proxy will map set of tile identifiers to another set of identifiers. Both the atlas coordinates ID and the alternative tile ID are kept the same when using source-level proxies.  
         *  Proxied tiles can be automatically replaced in TileMapLayer nodes using the editor.  
         */
        setSourceLevelTileProxy(sourceFrom: int64, sourceTo: int64): void
        
        /** Returns the source-level proxy for the given source identifier.  
         *  If the TileSet has no proxy for the given identifier, returns -1.  
         */
        getSourceLevelTileProxy(sourceFrom: int64): int64
        
        /** Returns if there is a source-level proxy for the given source ID. */
        hasSourceLevelTileProxy(sourceFrom: int64): boolean
        
        /** Removes a source-level tile proxy. */
        removeSourceLevelTileProxy(sourceFrom: int64): void
        
        /** Creates a coordinates-level proxy for the given identifiers. A proxy will map set of tile identifiers to another set of identifiers. The alternative tile ID is kept the same when using coordinates-level proxies.  
         *  Proxied tiles can be automatically replaced in TileMapLayer nodes using the editor.  
         */
        setCoordsLevelTileProxy(pSourceFrom: int64, coordsFrom: Vector2I, sourceTo: int64, coordsTo: Vector2I): void
        
        /** Returns the coordinate-level proxy for the given identifiers. The returned array contains the two target identifiers of the proxy (source ID and atlas coordinates ID).  
         *  If the TileSet has no proxy for the given identifiers, returns an empty Array.  
         */
        getCoordsLevelTileProxy(sourceFrom: int64, coordsFrom: Vector2I): GArray
        
        /** Returns if there is a coodinates-level proxy for the given identifiers. */
        hasCoordsLevelTileProxy(sourceFrom: int64, coordsFrom: Vector2I): boolean
        
        /** Removes a coordinates-level proxy for the given identifiers. */
        removeCoordsLevelTileProxy(sourceFrom: int64, coordsFrom: Vector2I): void
        
        /** Create an alternative-level proxy for the given identifiers. A proxy will map set of tile identifiers to another set of identifiers.  
         *  Proxied tiles can be automatically replaced in TileMapLayer nodes using the editor.  
         */
        setAlternativeLevelTileProxy(sourceFrom: int64, coordsFrom: Vector2I, alternativeFrom: int64, sourceTo: int64, coordsTo: Vector2I, alternativeTo: int64): void
        
        /** Returns the alternative-level proxy for the given identifiers. The returned array contains the three proxie's target identifiers (source ID, atlas coords ID and alternative tile ID).  
         *  If the TileSet has no proxy for the given identifiers, returns an empty Array.  
         */
        getAlternativeLevelTileProxy(sourceFrom: int64, coordsFrom: Vector2I, alternativeFrom: int64): GArray
        
        /** Returns if there is an alternative-level proxy for the given identifiers. */
        hasAlternativeLevelTileProxy(sourceFrom: int64, coordsFrom: Vector2I, alternativeFrom: int64): boolean
        
        /** Removes an alternative-level proxy for the given identifiers. */
        removeAlternativeLevelTileProxy(sourceFrom: int64, coordsFrom: Vector2I, alternativeFrom: int64): void
        
        /** According to the configured proxies, maps the provided identifiers to a new set of identifiers. The source ID, atlas coordinates ID and alternative tile ID are returned as a 3 elements Array.  
         *  This function first look for matching alternative-level proxies, then coordinates-level proxies, then source-level proxies.  
         *  If no proxy corresponding to provided identifiers are found, returns the same values the ones used as arguments.  
         */
        mapTileProxy(sourceFrom: int64, coordsFrom: Vector2I, alternativeFrom: int64): GArray
        
        /** Clears tile proxies pointing to invalid tiles. */
        cleanupInvalidTileProxies(): void
        
        /** Clears all tile proxies. */
        clearTileProxies(): void
        
        /** Adds a [TileMapPattern] to be stored in the TileSet resource. If provided, insert it at the given [param index]. */
        addPattern(pattern: TileMapPattern, index?: int64 /* = -1 */): int64
        
        /** Returns the [TileMapPattern] at the given [param index]. */
        getPattern(index?: int64 /* = -1 */): null | TileMapPattern
        
        /** Remove the [TileMapPattern] at the given index. */
        removePattern(index: int64): void
        
        /** Returns the number of [TileMapPattern] this tile set handles. */
        getPatternsCount(): int64
        
        /** The tile shape. */
        get tileShape(): int64
        set tileShape(value: int64)
        
        /** For all half-offset shapes (Isometric, Hexagonal and Half-Offset square), changes the way tiles are indexed in the [TileMapLayer] grid. */
        get tileLayout(): int64
        set tileLayout(value: int64)
        
        /** For all half-offset shapes (Isometric, Hexagonal and Half-Offset square), determines the offset axis. */
        get tileOffsetAxis(): int64
        set tileOffsetAxis(value: int64)
        
        /** The tile size, in pixels. For all tile shapes, this size corresponds to the encompassing rectangle of the tile shape. This is thus the minimal cell size required in an atlas. */
        get tileSize(): Vector2I
        set tileSize(value: Vector2I)
        
        /** Enables/Disable uv clipping when rendering the tiles. */
        get uVClipping(): boolean
        set uVClipping(value: boolean)
    }
    namespace TileSetAtlasSource {
        enum TileAnimationMode {
            TileAnimationModeDefault = 0,
            TileAnimationModeRandomStartTimes = 1,
            TileAnimationModeMax = 2,
        }
    }
    /** Exposes a 2D atlas texture as a set of tiles for a [TileSet] resource.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_tilesetatlassource.html  
     */
    class TileSetAtlasSource extends TileSetSource {
        /** Tile animations start at same time, looking identical. */
        static readonly TILE_ANIMATION_MODE_DEFAULT = 0
        
        /** Tile animations start at random times, looking varied. */
        static readonly TILE_ANIMATION_MODE_RANDOM_START_TIMES = 1
        
        /** Represents the size of the [enum TileAnimationMode] enum. */
        static readonly TILE_ANIMATION_MODE_MAX = 2
        
        /** Represents cell's horizontal flip flag. Should be used directly with [TileMapLayer] to flip placed tiles by altering their alternative IDs.  
         *    
         *      
         *  **Note:** These transformations can be combined to do the equivalent of 0, 90, 180, and 270 degree rotations, as shown below:  
         *    
         */
        static readonly TRANSFORM_FLIP_H = 4096
        
        /** Represents cell's vertical flip flag. See [constant TRANSFORM_FLIP_H] for usage. */
        static readonly TRANSFORM_FLIP_V = 8192
        
        /** Represents cell's transposed flag. See [constant TRANSFORM_FLIP_H] for usage. */
        static readonly TRANSFORM_TRANSPOSE = 16384
        constructor(identifier?: any)
        
        /** Creates a new tile at coordinates [param atlas_coords] with the given [param size]. */
        createTile(atlasCoords: Vector2I, size?: Vector2I /* = Vector2I.ONE */): void
        
        /** Remove a tile and its alternative at coordinates [param atlas_coords]. */
        removeTile(atlasCoords: Vector2I): void
        
        /** Move the tile and its alternatives at the [param atlas_coords] coordinates to the [param new_atlas_coords] coordinates with the [param new_size] size. This functions will fail if a tile is already present in the given area.  
         *  If [param new_atlas_coords] is `Vector2i(-1, -1)`, keeps the tile's coordinates. If [param new_size] is `Vector2i(-1, -1)`, keeps the tile's size.  
         *  To avoid an error, first check if a move is possible using [method has_room_for_tile].  
         */
        moveTileInAtlas(atlasCoords: Vector2I, newAtlasCoords?: Vector2I /* = new Vector2I(-1, -1) */, newSize?: Vector2I /* = new Vector2I(-1, -1) */): void
        
        /** Returns the size of the tile (in the grid coordinates system) at coordinates [param atlas_coords]. */
        getTileSizeInAtlas(atlasCoords: Vector2I): Vector2I
        
        /** Returns whether there is enough room in an atlas to create/modify a tile with the given properties. If [param ignored_tile] is provided, act as is the given tile was not present in the atlas. This may be used when you want to modify a tile's properties. */
        hasRoomForTile(atlasCoords: Vector2I, size: Vector2I, animationColumns: int64, animationSeparation: Vector2I, framesCount: int64, ignoredTile?: Vector2I /* = new Vector2I(-1, -1) */): boolean
        
        /** Returns an array of tiles coordinates ID that will be automatically removed when modifying one or several of those properties: [param texture], [param margins], [param separation] or [param texture_region_size]. This can be used to undo changes that would have caused tiles data loss. */
        getTilesToBeRemovedOnChange(texture: Texture2D, margins: Vector2I, separation: Vector2I, textureRegionSize: Vector2I): PackedVector2Array
        
        /** If there is a tile covering the [param atlas_coords] coordinates, returns the top-left coordinates of the tile (thus its coordinate ID). Returns `Vector2i(-1, -1)` otherwise. */
        getTileAtCoords(atlasCoords: Vector2I): Vector2I
        
        /** Checks if the source has any tiles that don't fit the texture area (either partially or completely). */
        hasTilesOutsideTexture(): boolean
        
        /** Removes all tiles that don't fit the available texture area. This method iterates over all the source's tiles, so it's advised to use [method has_tiles_outside_texture] beforehand. */
        clearTilesOutsideTexture(): void
        
        /** Sets the number of columns in the animation layout of the tile at coordinates [param atlas_coords]. If set to 0, then the different frames of the animation are laid out as a single horizontal line in the atlas. */
        setTileAnimationColumns(atlasCoords: Vector2I, frameColumns: int64): void
        
        /** Returns how many columns the tile at [param atlas_coords] has in its animation layout. */
        getTileAnimationColumns(atlasCoords: Vector2I): int64
        
        /** Sets the margin (in grid tiles) between each tile in the animation layout of the tile at coordinates [param atlas_coords] has. */
        setTileAnimationSeparation(atlasCoords: Vector2I, separation: Vector2I): void
        
        /** Returns the separation (as in the atlas grid) between each frame of an animated tile at coordinates [param atlas_coords]. */
        getTileAnimationSeparation(atlasCoords: Vector2I): Vector2I
        
        /** Sets the animation speed of the tile at coordinates [param atlas_coords] has. */
        setTileAnimationSpeed(atlasCoords: Vector2I, speed: float64): void
        
        /** Returns the animation speed of the tile at coordinates [param atlas_coords]. */
        getTileAnimationSpeed(atlasCoords: Vector2I): float64
        
        /** Sets the tile animation mode of the tile at [param atlas_coords] to [param mode]. See also [method get_tile_animation_mode]. */
        setTileAnimationMode(atlasCoords: Vector2I, mode: TileSetAtlasSource.TileAnimationMode): void
        
        /** Returns the tile animation mode of the tile at [param atlas_coords]. See also [method set_tile_animation_mode]. */
        getTileAnimationMode(atlasCoords: Vector2I): TileSetAtlasSource.TileAnimationMode
        
        /** Sets how many animation frames the tile at coordinates [param atlas_coords] has. */
        setTileAnimationFramesCount(atlasCoords: Vector2I, framesCount: int64): void
        
        /** Returns how many animation frames has the tile at coordinates [param atlas_coords]. */
        getTileAnimationFramesCount(atlasCoords: Vector2I): int64
        
        /** Sets the animation frame [param duration] of frame [param frame_index] for the tile at coordinates [param atlas_coords]. */
        setTileAnimationFrameDuration(atlasCoords: Vector2I, frameIndex: int64, duration: float64): void
        
        /** Returns the animation frame duration of frame [param frame_index] for the tile at coordinates [param atlas_coords]. */
        getTileAnimationFrameDuration(atlasCoords: Vector2I, frameIndex: int64): float64
        
        /** Returns the sum of the sum of the frame durations of the tile at coordinates [param atlas_coords]. This value needs to be divided by the animation speed to get the actual animation loop duration. */
        getTileAnimationTotalDuration(atlasCoords: Vector2I): float64
        
        /** Creates an alternative tile for the tile at coordinates [param atlas_coords]. If [param alternative_id_override] is -1, give it an automatically generated unique ID, or assigns it the given ID otherwise.  
         *  Returns the new alternative identifier, or -1 if the alternative could not be created with a provided [param alternative_id_override].  
         */
        createAlternativeTile(atlasCoords: Vector2I, alternativeIdOverride?: int64 /* = -1 */): int64
        
        /** Remove a tile's alternative with alternative ID [param alternative_tile].  
         *  Calling this function with [param alternative_tile] equals to 0 will fail, as the base tile alternative cannot be removed.  
         */
        removeAlternativeTile(atlasCoords: Vector2I, alternativeTile: int64): void
        
        /** Change a tile's alternative ID from [param alternative_tile] to [param new_id].  
         *  Calling this function with [param new_id] of 0 will fail, as the base tile alternative cannot be moved.  
         */
        setAlternativeTileId(atlasCoords: Vector2I, alternativeTile: int64, newId: int64): void
        
        /** Returns the alternative ID a following call to [method create_alternative_tile] would return. */
        getNextAlternativeTileId(atlasCoords: Vector2I): int64
        
        /** Returns the [TileData] object for the given atlas coordinates and alternative ID. */
        getTileData(atlasCoords: Vector2I, alternativeTile: int64): null | TileData
        
        /** Returns the atlas grid size, which depends on how many tiles can fit in the texture. It thus depends on the [member texture]'s size, the atlas [member margins], and the tiles' [member texture_region_size]. */
        getAtlasGridSize(): Vector2I
        
        /** Returns a tile's texture region in the atlas texture. For animated tiles, a [param frame] argument might be provided for the different frames of the animation. */
        getTileTextureRegion(atlasCoords: Vector2I, frame?: int64 /* = 0 */): Rect2I
        
        /** If [member use_texture_padding] is `false`, returns [member texture]. Otherwise, returns and internal [ImageTexture] created that includes the padding. */
        getRuntimeTexture(): null | Texture2D
        
        /** Returns the region of the tile at coordinates [param atlas_coords] for the given [param frame] inside the texture returned by [method get_runtime_texture].  
         *      
         *  **Note:** If [member use_texture_padding] is `false`, returns the same as [method get_tile_texture_region].  
         */
        getRuntimeTileTextureRegion(atlasCoords: Vector2I, frame: int64): Rect2I
        
        /** The atlas texture. */
        get texture(): null | Texture2D
        set texture(value: null | Texture2D)
        
        /** Margins, in pixels, to offset the origin of the grid in the texture. */
        get margins(): Vector2I
        set margins(value: Vector2I)
        
        /** Separation, in pixels, between each tile texture region of the grid. */
        get separation(): Vector2I
        set separation(value: Vector2I)
        
        /** The base tile size in the texture (in pixel). This size must be bigger than or equal to the TileSet's `tile_size` value. */
        get textureRegionSize(): Vector2I
        set textureRegionSize(value: Vector2I)
        
        /** If `true`, generates an internal texture with an additional one pixel padding around each tile. Texture padding avoids a common artifact where lines appear between tiles.  
         *  Disabling this setting might lead a small performance improvement, as generating the internal texture requires both memory and processing time when the TileSetAtlasSource resource is modified.  
         */
        get useTexturePadding(): boolean
        set useTexturePadding(value: boolean)
    }
    /** Exposes a set of scenes as tiles for a [TileSet] resource.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_tilesetscenescollectionsource.html  
     */
    class TileSetScenesCollectionSource extends TileSetSource {
        constructor(identifier?: any)
        /** Returns the number or scene tiles this TileSet source has. */
        getSceneTilesCount(): int64
        
        /** Returns the scene tile ID of the scene tile at [param index]. */
        getSceneTileId(index: int64): int64
        
        /** Returns whether this TileSet source has a scene tile with [param id]. */
        hasSceneTileId(id: int64): boolean
        
        /** Creates a scene-based tile out of the given scene.  
         *  Returns a newly generated unique ID.  
         */
        createSceneTile(packedScene: PackedScene, idOverride?: int64 /* = -1 */): int64
        
        /** Changes a scene tile's ID from [param id] to [param new_id]. This will fail if there is already a tile with an ID equal to [param new_id]. */
        setSceneTileId(id: int64, newId: int64): void
        
        /** Assigns a [PackedScene] resource to the scene tile with [param id]. This will fail if the scene does not extend [CanvasItem], as positioning properties are needed to place the scene on the [TileMapLayer]. */
        setSceneTileScene(id: int64, packedScene: PackedScene): void
        
        /** Returns the [PackedScene] resource of scene tile with [param id]. */
        getSceneTileScene(id: int64): null | PackedScene
        
        /** Sets whether or not the scene tile with [param id] should display a placeholder in the editor. This might be useful for scenes that are not visible. */
        setSceneTileDisplayPlaceholder(id: int64, displayPlaceholder: boolean): void
        
        /** Returns whether the scene tile with [param id] displays a placeholder in the editor. */
        getSceneTileDisplayPlaceholder(id: int64): boolean
        
        /** Remove the scene tile with [param id]. */
        removeSceneTile(id: int64): void
        
        /** Returns the scene ID a following call to [method create_scene_tile] would return. */
        getNextSceneTileId(): int64
    }
    /** Exposes a set of tiles for a [TileSet] resource.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_tilesetsource.html  
     */
    class TileSetSource extends Resource {
        constructor(identifier?: any)
        /** Returns how many tiles this atlas source defines (not including alternative tiles). */
        getTilesCount(): int64
        
        /** Returns the tile coordinates ID of the tile with index [param index]. */
        getTileId(index: int64): Vector2I
        
        /** Returns if this atlas has a tile with coordinates ID [param atlas_coords]. */
        hasTile(atlasCoords: Vector2I): boolean
        
        /** Returns the number of alternatives tiles for the coordinates ID [param atlas_coords].  
         *  For [TileSetAtlasSource], this always return at least 1, as the base tile with ID 0 is always part of the alternatives list.  
         *  Returns -1 if there is not tile at the given coords.  
         */
        getAlternativeTilesCount(atlasCoords: Vector2I): int64
        
        /** Returns the alternative ID for the tile with coordinates ID [param atlas_coords] at index [param index]. */
        getAlternativeTileId(atlasCoords: Vector2I, index: int64): int64
        
        /** Returns if the base tile at coordinates [param atlas_coords] has an alternative with ID [param alternative_tile]. */
        hasAlternativeTile(atlasCoords: Vector2I, alternativeTile: int64): boolean
    }
    namespace Timer {
        enum TimerProcessCallback {
            TimerProcessPhysics = 0,
            TimerProcessIdle = 1,
        }
    }
    /** A countdown timer.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_timer.html  
     */
    class Timer<Map extends NodePathMap = any> extends Node<Map> {
        /** Update the timer every physics process frame (see [constant Node.NOTIFICATION_INTERNAL_PHYSICS_PROCESS]). */
        static readonly TIMER_PROCESS_PHYSICS = 0
        
        /** Update the timer every process (rendered) frame (see [constant Node.NOTIFICATION_INTERNAL_PROCESS]). */
        static readonly TIMER_PROCESS_IDLE = 1
        constructor(identifier?: any)
        
        /** Starts the timer, or resets the timer if it was started already. Fails if the timer is not inside the tree. If [param time_sec] is greater than `0`, this value is used for the [member wait_time].  
         *      
         *  **Note:** This method does not resume a paused timer. See [member paused].  
         */
        start(timeSec?: float64 /* = -1 */): void
        
        /** Stops the timer. */
        stop(): void
        
        /** Returns `true` if the timer is stopped or has not started. */
        isStopped(): boolean
        
        /** Specifies when the timer is updated during the main loop (see [enum TimerProcessCallback]). */
        get processCallback(): int64
        set processCallback(value: int64)
        
        /** The time required for the timer to end, in seconds. This property can also be set every time [method start] is called.  
         *      
         *  **Note:** Timers can only process once per physics or process frame (depending on the [member process_callback]). An unstable framerate may cause the timer to end inconsistently, which is especially noticeable if the wait time is lower than roughly `0.05` seconds. For very short timers, it is recommended to write your own code instead of using a [Timer] node. Timers are also affected by [member Engine.time_scale].  
         */
        get waitTime(): float64
        set waitTime(value: float64)
        
        /** If `true`, the timer will stop after reaching the end. Otherwise, as by default, the timer will automatically restart. */
        get oneShot(): boolean
        set oneShot(value: boolean)
        
        /** If `true`, the timer will start immediately when it enters the scene tree.  
         *      
         *  **Note:** After the timer enters the tree, this property is automatically set to `false`.  
         *      
         *  **Note:** This property does nothing when the timer is running in the editor.  
         */
        get autostart(): boolean
        set autostart(value: boolean)
        
        /** If `true`, the timer is paused. A paused timer does not process until this property is set back to `false`, even when [method start] is called. */
        get paused(): boolean
        set paused(value: boolean)
        
        /** If `true`, the timer will ignore [member Engine.time_scale] and update with the real, elapsed time. */
        get ignoreTimeScale(): boolean
        set ignoreTimeScale(value: boolean)
        
        /** The timer's remaining time in seconds. This is always `0` if the timer is stopped.  
         *      
         *  **Note:** This property is read-only and cannot be modified. It is based on [member wait_time].  
         */
        get timeLeft(): float64
        set timeLeft(value: float64)
        
        /** Emitted when the timer reaches the end. */
        readonly timeout: Signal<() => void>
    }
    /** Class representing a torus [PrimitiveMesh].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_torusmesh.html  
     */
    class TorusMesh extends PrimitiveMesh {
        constructor(identifier?: any)
        /** The inner radius of the torus. */
        get innerRadius(): float64
        set innerRadius(value: float64)
        
        /** The outer radius of the torus. */
        get outerRadius(): float64
        set outerRadius(value: float64)
        
        /** The number of slices the torus is constructed of. */
        get rings(): int64
        set rings(value: int64)
        
        /** The number of edges each ring of the torus is constructed of. */
        get ringSegments(): int64
        set ringSegments(value: int64)
    }
    namespace TouchScreenButton {
        enum VisibilityMode {
            VisibilityAlways = 0,
            VisibilityTouchscreenOnly = 1,
        }
    }
    /** Button for touch screen devices for gameplay use.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_touchscreenbutton.html  
     */
    class TouchScreenButton<Map extends NodePathMap = any> extends Node2D<Map> {
        /** Always visible. */
        static readonly VISIBILITY_ALWAYS = 0
        
        /** Visible on touch screens only. */
        static readonly VISIBILITY_TOUCHSCREEN_ONLY = 1
        constructor(identifier?: any)
        
        /** Returns `true` if this button is currently pressed. */
        isPressed(): boolean
        
        /** The button's texture for the normal state. */
        get textureNormal(): null | Texture2D
        set textureNormal(value: null | Texture2D)
        
        /** The button's texture for the pressed state. */
        get texturePressed(): null | Texture2D
        set texturePressed(value: null | Texture2D)
        
        /** The button's bitmask. */
        get bitmask(): null | Bitmap
        set bitmask(value: null | Bitmap)
        
        /** The button's shape. */
        get shape(): null | Shape2D
        set shape(value: null | Shape2D)
        
        /** If `true`, the button's shape is centered in the provided texture. If no texture is used, this property has no effect. */
        get shapeCentered(): boolean
        set shapeCentered(value: boolean)
        
        /** If `true`, the button's shape is visible in the editor. */
        get shapeVisible(): boolean
        set shapeVisible(value: boolean)
        
        /** If `true`, the [signal pressed] and [signal released] signals are emitted whenever a pressed finger goes in and out of the button, even if the pressure started outside the active area of the button.  
         *      
         *  **Note:** This is a "pass-by" (not "bypass") press mode.  
         */
        get passbyPress(): boolean
        set passbyPress(value: boolean)
        
        /** The button's action. Actions can be handled with [InputEventAction]. */
        get action(): StringName
        set action(value: StringName)
        
        /** The button's visibility mode. See [enum VisibilityMode] for possible values. */
        get visibilityMode(): int64
        set visibilityMode(value: int64)
        
        /** Emitted when the button is pressed (down). */
        readonly pressed: Signal<() => void>
        
        /** Emitted when the button is released (up). */
        readonly released: Signal<() => void>
    }
    /** A language translation that maps a collection of strings to their individual translations.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_translation.html  
     */
    class Translation extends Resource {
        constructor(identifier?: any)
        /** Virtual method to override [method get_plural_message]. */
        /* gdvirtual */ _getPluralMessage(srcMessage: StringName, srcPluralMessage: StringName, n: int64, context: StringName): StringName
        
        /** Virtual method to override [method get_message]. */
        /* gdvirtual */ _getMessage(srcMessage: StringName, context: StringName): StringName
        
        /** Adds a message if nonexistent, followed by its translation.  
         *  An additional context could be used to specify the translation context or differentiate polysemic words.  
         */
        addMessage(srcMessage: StringName, xlatedMessage: StringName, context?: StringName /* = '' */): void
        
        /** Adds a message involving plural translation if nonexistent, followed by its translation.  
         *  An additional context could be used to specify the translation context or differentiate polysemic words.  
         */
        addPluralMessage(srcMessage: StringName, xlatedMessages: PackedStringArray | string[], context?: StringName /* = '' */): void
        
        /** Returns a message's translation. */
        getMessage(srcMessage: StringName, context?: StringName /* = '' */): StringName
        
        /** Returns a message's translation involving plurals.  
         *  The number [param n] is the number or quantity of the plural object. It will be used to guide the translation system to fetch the correct plural form for the selected language.  
         */
        getPluralMessage(srcMessage: StringName, srcPluralMessage: StringName, n: int64, context?: StringName /* = '' */): StringName
        
        /** Erases a message. */
        eraseMessage(srcMessage: StringName, context?: StringName /* = '' */): void
        
        /** Returns all the messages (keys). */
        getMessageList(): PackedStringArray
        
        /** Returns all the messages (translated text). */
        getTranslatedMessageList(): PackedStringArray
        
        /** Returns the number of existing messages. */
        getMessageCount(): int64
        get messages(): GDictionary
        set messages(value: GDictionary)
        
        /** The locale of the translation. */
        get locale(): string
        set locale(value: string)
    }
    /** A self-contained collection of [Translation] resources.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_translationdomain.html  
     */
    class TranslationDomain extends RefCounted {
        constructor(identifier?: any)
        /** Returns the [Translation] instance that best matches [param locale]. Returns `null` if there are no matches. */
        getTranslationObject(locale: string): null | Translation
        
        /** Adds a translation. */
        addTranslation(translation: Translation): void
        
        /** Removes the given translation. */
        removeTranslation(translation: Translation): void
        
        /** Removes all translations. */
        clear(): void
        
        /** Returns the current locale's translation for the given message and context. */
        translate(message: StringName, context?: StringName /* = '' */): StringName
        
        /** Returns the current locale's translation for the given message, plural message and context.  
         *  The number [param n] is the number or quantity of the plural object. It will be used to guide the translation system to fetch the correct plural form for the selected language.  
         */
        translatePlural(message: StringName, messagePlural: StringName, n: int64, context?: StringName /* = '' */): StringName
        
        /** Returns the pseudolocalized string based on the [param message] passed in. */
        pseudolocalize(message: StringName): StringName
        
        /** If `true`, enables pseudolocalization for the project. This can be used to spot untranslatable strings or layout issues that may occur once the project is localized to languages that have longer strings than the source language.  
         *      
         *  **Note:** Updating this property does not automatically update texts in the scene tree. Please propagate the [constant MainLoop.NOTIFICATION_TRANSLATION_CHANGED] notification manually after you have finished modifying pseudolocalization related options.  
         */
        get pseudolocalizationEnabled(): boolean
        set pseudolocalizationEnabled(value: boolean)
        
        /** Replace all characters with their accented variants during pseudolocalization.  
         *      
         *  **Note:** Updating this property does not automatically update texts in the scene tree. Please propagate the [constant MainLoop.NOTIFICATION_TRANSLATION_CHANGED] notification manually after you have finished modifying pseudolocalization related options.  
         */
        get pseudolocalizationAccentsEnabled(): boolean
        set pseudolocalizationAccentsEnabled(value: boolean)
        
        /** Double vowels in strings during pseudolocalization to simulate the lengthening of text due to localization.  
         *      
         *  **Note:** Updating this property does not automatically update texts in the scene tree. Please propagate the [constant MainLoop.NOTIFICATION_TRANSLATION_CHANGED] notification manually after you have finished modifying pseudolocalization related options.  
         */
        get pseudolocalizationDoubleVowelsEnabled(): boolean
        set pseudolocalizationDoubleVowelsEnabled(value: boolean)
        
        /** If `true`, emulate bidirectional (right-to-left) text when pseudolocalization is enabled. This can be used to spot issues with RTL layout and UI mirroring that will crop up if the project is localized to RTL languages such as Arabic or Hebrew.  
         *      
         *  **Note:** Updating this property does not automatically update texts in the scene tree. Please propagate the [constant MainLoop.NOTIFICATION_TRANSLATION_CHANGED] notification manually after you have finished modifying pseudolocalization related options.  
         */
        get pseudolocalizationFakeBidiEnabled(): boolean
        set pseudolocalizationFakeBidiEnabled(value: boolean)
        
        /** Replace all characters in the string with `*`. Useful for finding non-localizable strings.  
         *      
         *  **Note:** Updating this property does not automatically update texts in the scene tree. Please propagate the [constant MainLoop.NOTIFICATION_TRANSLATION_CHANGED] notification manually after you have finished modifying pseudolocalization related options.  
         */
        get pseudolocalizationOverrideEnabled(): boolean
        set pseudolocalizationOverrideEnabled(value: boolean)
        
        /** Skip placeholders for string formatting like `%s` or `%f` during pseudolocalization. Useful to identify strings which need additional control characters to display correctly.  
         *      
         *  **Note:** Updating this property does not automatically update texts in the scene tree. Please propagate the [constant MainLoop.NOTIFICATION_TRANSLATION_CHANGED] notification manually after you have finished modifying pseudolocalization related options.  
         */
        get pseudolocalizationSkipPlaceholdersEnabled(): boolean
        set pseudolocalizationSkipPlaceholdersEnabled(value: boolean)
        
        /** The expansion ratio to use during pseudolocalization. A value of `0.3` is sufficient for most practical purposes, and will increase the length of each string by 30%.  
         *      
         *  **Note:** Updating this property does not automatically update texts in the scene tree. Please propagate the [constant MainLoop.NOTIFICATION_TRANSLATION_CHANGED] notification manually after you have finished modifying pseudolocalization related options.  
         */
        get pseudolocalizationExpansionRatio(): float64
        set pseudolocalizationExpansionRatio(value: float64)
        
        /** Prefix that will be prepended to the pseudolocalized string.  
         *      
         *  **Note:** Updating this property does not automatically update texts in the scene tree. Please propagate the [constant MainLoop.NOTIFICATION_TRANSLATION_CHANGED] notification manually after you have finished modifying pseudolocalization related options.  
         */
        get pseudolocalizationPrefix(): string
        set pseudolocalizationPrefix(value: string)
        
        /** Suffix that will be appended to the pseudolocalized string.  
         *      
         *  **Note:** Updating this property does not automatically update texts in the scene tree. Please propagate the [constant MainLoop.NOTIFICATION_TRANSLATION_CHANGED] notification manually after you have finished modifying pseudolocalization related options.  
         */
        get pseudolocalizationSuffix(): string
        set pseudolocalizationSuffix(value: string)
    }
    namespace Tree {
        enum SelectMode {
            SelectSingle = 0,
            SelectRow = 1,
            SelectMulti = 2,
        }
        enum DropModeFlags {
            DropModeDisabled = 0,
            DropModeOnItem = 1,
            DropModeInbetween = 2,
        }
    }
    /** A control used to show a set of internal [TreeItem]s in a hierarchical structure.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_tree.html  
     */
    class Tree<Map extends NodePathMap = any> extends Control<Map> {
        /** Allows selection of a single cell at a time. From the perspective of items, only a single item is allowed to be selected. And there is only one column selected in the selected item.  
         *  The focus cursor is always hidden in this mode, but it is positioned at the current selection, making the currently selected item the currently focused item.  
         */
        static readonly SELECT_SINGLE = 0
        
        /** Allows selection of a single row at a time. From the perspective of items, only a single items is allowed to be selected. And all the columns are selected in the selected item.  
         *  The focus cursor is always hidden in this mode, but it is positioned at the first column of the current selection, making the currently selected item the currently focused item.  
         */
        static readonly SELECT_ROW = 1
        
        /** Allows selection of multiple cells at the same time. From the perspective of items, multiple items are allowed to be selected. And there can be multiple columns selected in each selected item.  
         *  The focus cursor is visible in this mode, the item or column under the cursor is not necessarily selected.  
         */
        static readonly SELECT_MULTI = 2
        
        /** Disables all drop sections, but still allows to detect the "on item" drop section by [method get_drop_section_at_position].  
         *      
         *  **Note:** This is the default flag, it has no effect when combined with other flags.  
         */
        static readonly DROP_MODE_DISABLED = 0
        
        /** Enables the "on item" drop section. This drop section covers the entire item.  
         *  When combined with [constant DROP_MODE_INBETWEEN], this drop section halves the height and stays centered vertically.  
         */
        static readonly DROP_MODE_ON_ITEM = 1
        
        /** Enables "above item" and "below item" drop sections. The "above item" drop section covers the top half of the item, and the "below item" drop section covers the bottom half.  
         *  When combined with [constant DROP_MODE_ON_ITEM], these drop sections halves the height and stays on top / bottom accordingly.  
         */
        static readonly DROP_MODE_INBETWEEN = 2
        constructor(identifier?: any)
        
        /** Clears the tree. This removes all items. */
        clear(): void
        
        /** Creates an item in the tree and adds it as a child of [param parent], which can be either a valid [TreeItem] or `null`.  
         *  If [param parent] is `null`, the root item will be the parent, or the new item will be the root itself if the tree is empty.  
         *  The new item will be the [param index]-th child of parent, or it will be the last child if there are not enough siblings.  
         */
        createItem(parent?: TreeItem /* = undefined */, index?: int64 /* = -1 */): TreeItem
        
        /** Returns the tree's root item, or `null` if the tree is empty. */
        getRoot(): null | TreeItem
        
        /** Overrides the calculated minimum width of a column. It can be set to `0` to restore the default behavior. Columns that have the "Expand" flag will use their "min_width" in a similar fashion to [member Control.size_flags_stretch_ratio]. */
        setColumnCustomMinimumWidth(column: int64, minWidth: int64): void
        
        /** If `true`, the column will have the "Expand" flag of [Control]. Columns that have the "Expand" flag will use their expand ratio in a similar fashion to [member Control.size_flags_stretch_ratio] (see [method set_column_expand_ratio]). */
        setColumnExpand(column: int64, expand: boolean): void
        
        /** Sets the relative expand ratio for a column. See [method set_column_expand]. */
        setColumnExpandRatio(column: int64, ratio: int64): void
        
        /** Allows to enable clipping for column's content, making the content size ignored. */
        setColumnClipContent(column: int64, enable: boolean): void
        
        /** Returns `true` if the column has enabled expanding (see [method set_column_expand]). */
        isColumnExpanding(column: int64): boolean
        
        /** Returns `true` if the column has enabled clipping (see [method set_column_clip_content]). */
        isColumnClippingContent(column: int64): boolean
        
        /** Returns the expand ratio assigned to the column. */
        getColumnExpandRatio(column: int64): int64
        
        /** Returns the column's width in pixels. */
        getColumnWidth(column: int64): int64
        
        /** Returns the next selected [TreeItem] after the given one, or `null` if the end is reached.  
         *  If [param from] is `null`, this returns the first selected item.  
         */
        getNextSelected(from: TreeItem): null | TreeItem
        
        /** Returns the currently focused item, or `null` if no item is focused.  
         *  In [constant SELECT_ROW] and [constant SELECT_SINGLE] modes, the focused item is same as the selected item. In [constant SELECT_MULTI] mode, the focused item is the item under the focus cursor, not necessarily selected.  
         *  To get the currently selected item(s), use [method get_next_selected].  
         */
        getSelected(): null | TreeItem
        
        /** Selects the specified [TreeItem] and column. */
        setSelected(item: TreeItem, column: int64): void
        
        /** Returns the currently focused column, or -1 if no column is focused.  
         *  In [constant SELECT_SINGLE] mode, the focused column is the selected column. In [constant SELECT_ROW] mode, the focused column is always 0 if any item is selected. In [constant SELECT_MULTI] mode, the focused column is the column under the focus cursor, and there are not necessarily any column selected.  
         *  To tell whether a column of an item is selected, use [method TreeItem.is_selected].  
         */
        getSelectedColumn(): int64
        
        /** Returns the last pressed button's index. */
        getPressedButton(): int64
        
        /** Deselects all tree items (rows and columns). In [constant SELECT_MULTI] mode also removes selection cursor. */
        deselectAll(): void
        
        /** Returns the currently edited item. Can be used with [signal item_edited] to get the item that was modified.  
         *    
         */
        getEdited(): null | TreeItem
        
        /** Returns the column for the currently edited item. */
        getEditedColumn(): int64
        
        /** Edits the selected tree item as if it was clicked.  
         *  Either the item must be set editable with [method TreeItem.set_editable] or [param force_edit] must be `true`.  
         *  Returns `true` if the item could be edited. Fails if no item is selected.  
         */
        editSelected(forceEdit?: boolean /* = false */): boolean
        
        /** Returns the rectangle for custom popups. Helper to create custom cell controls that display a popup. See [method TreeItem.set_cell_mode]. */
        getCustomPopupRect(): Rect2
        
        /** Returns the rectangle area for the specified [TreeItem]. If [param column] is specified, only get the position and size of that column, otherwise get the rectangle containing all columns. If a button index is specified, the rectangle of that button will be returned. */
        getItemAreaRect(item: TreeItem, column?: int64 /* = -1 */, buttonIndex?: int64 /* = -1 */): Rect2
        
        /** Returns the tree item at the specified position (relative to the tree origin position). */
        getItemAtPosition(position: Vector2): null | TreeItem
        
        /** Returns the column index at [param position], or -1 if no item is there. */
        getColumnAtPosition(position: Vector2): int64
        
        /** Returns the drop section at [param position], or -100 if no item is there.  
         *  Values -1, 0, or 1 will be returned for the "above item", "on item", and "below item" drop sections, respectively. See [enum DropModeFlags] for a description of each drop section.  
         *  To get the item which the returned drop section is relative to, use [method get_item_at_position].  
         */
        getDropSectionAtPosition(position: Vector2): int64
        
        /** Returns the button ID at [param position], or -1 if no button is there. */
        getButtonIdAtPosition(position: Vector2): int64
        
        /** Makes the currently focused cell visible.  
         *  This will scroll the tree if necessary. In [constant SELECT_ROW] mode, this will not do horizontal scrolling, as all the cells in the selected row is focused logically.  
         *      
         *  **Note:** Despite the name of this method, the focus cursor itself is only visible in [constant SELECT_MULTI] mode.  
         */
        ensureCursorIsVisible(): void
        
        /** Sets the title of a column. */
        setColumnTitle(column: int64, title: string): void
        
        /** Returns the column's title. */
        getColumnTitle(column: int64): string
        
        /** Sets the column title alignment. Note that [constant @GlobalScope.HORIZONTAL_ALIGNMENT_FILL] is not supported for column titles. */
        setColumnTitleAlignment(column: int64, titleAlignment: HorizontalAlignment): void
        
        /** Returns the column title alignment. */
        getColumnTitleAlignment(column: int64): HorizontalAlignment
        
        /** Sets column title base writing direction. */
        setColumnTitleDirection(column: int64, direction: Control.TextDirection): void
        
        /** Returns column title base writing direction. */
        getColumnTitleDirection(column: int64): Control.TextDirection
        
        /** Sets language code of column title used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        setColumnTitleLanguage(column: int64, language: string): void
        
        /** Returns column title language code. */
        getColumnTitleLanguage(column: int64): string
        
        /** Returns the current scrolling position. */
        getScroll(): Vector2
        
        /** Causes the [Tree] to jump to the specified [TreeItem]. */
        scrollToItem(item: TreeItem, centerOnItem?: boolean /* = false */): void
        
        /** The number of columns. */
        get columns(): int64
        set columns(value: int64)
        
        /** If `true`, column titles are visible. */
        get columnTitlesVisible(): boolean
        set columnTitlesVisible(value: boolean)
        
        /** If `true`, the currently selected cell may be selected again. */
        get allowReselect(): boolean
        set allowReselect(value: boolean)
        
        /** If `true`, a right mouse button click can select items. */
        get allowRmbSelect(): boolean
        set allowRmbSelect(value: boolean)
        
        /** If `true`, allows navigating the [Tree] with letter keys through incremental search. */
        get allowSearch(): boolean
        set allowSearch(value: boolean)
        
        /** If `true`, the folding arrow is hidden. */
        get hideFolding(): boolean
        set hideFolding(value: boolean)
        
        /** If `true`, recursive folding is enabled for this [Tree]. Holding down [kbd]Shift[/kbd] while clicking the fold arrow or using `ui_right`/`ui_left` shortcuts collapses or uncollapses the [TreeItem] and all its descendants. */
        get enableRecursiveFolding(): boolean
        set enableRecursiveFolding(value: boolean)
        
        /** If `true`, the tree's root is hidden. */
        get hideRoot(): boolean
        set hideRoot(value: boolean)
        
        /** The drop mode as an OR combination of flags. See [enum DropModeFlags] constants. Once dropping is done, reverts to [constant DROP_MODE_DISABLED]. Setting this during [method Control._can_drop_data] is recommended.  
         *  This controls the drop sections, i.e. the decision and drawing of possible drop locations based on the mouse position.  
         */
        get dropModeFlags(): int64
        set dropModeFlags(value: int64)
        
        /** Allows single or multiple selection. See the [enum SelectMode] constants. */
        get selectMode(): int64
        set selectMode(value: int64)
        
        /** If `true`, enables horizontal scrolling. */
        get scrollHorizontalEnabled(): boolean
        set scrollHorizontalEnabled(value: boolean)
        
        /** If `true`, enables vertical scrolling. */
        get scrollVerticalEnabled(): boolean
        set scrollVerticalEnabled(value: boolean)
        
        /** If `true`, tree items with no tooltip assigned display their text as their tooltip. See also [method TreeItem.get_tooltip_text] and [method TreeItem.get_button_tooltip_text]. */
        get autoTooltip(): boolean
        set autoTooltip(value: boolean)
        
        /** Emitted when an item is selected. */
        readonly itemSelected: Signal<() => void>
        
        /** Emitted when a cell is selected. */
        readonly cellSelected: Signal<() => void>
        
        /** Emitted instead of [signal item_selected] if [member select_mode] is set to [constant SELECT_MULTI]. */
        readonly multiSelected: Signal<(item: TreeItem, column: int64, selected: boolean) => void>
        
        /** Emitted when an item is selected with a mouse button. */
        readonly itemMouseSelected: Signal<(mousePosition: Vector2, mouseButtonIndex: int64) => void>
        
        /** Emitted when a mouse button is clicked in the empty space of the tree. */
        readonly emptyClicked: Signal<(clickPosition: Vector2, mouseButtonIndex: int64) => void>
        
        /** Emitted when an item is edited. */
        readonly itemEdited: Signal<() => void>
        
        /** Emitted when an item with [constant TreeItem.CELL_MODE_CUSTOM] is clicked with a mouse button. */
        readonly customItemClicked: Signal<(mouseButtonIndex: int64) => void>
        
        /** Emitted when an item's icon is double-clicked. For a signal that emits when any part of the item is double-clicked, see [signal item_activated]. */
        readonly itemIconDoubleClicked: Signal<() => void>
        
        /** Emitted when an item is collapsed by a click on the folding arrow. */
        readonly itemCollapsed: Signal<(item: TreeItem) => void>
        
        /** Emitted when [method TreeItem.propagate_check] is called. Connect to this signal to process the items that are affected when [method TreeItem.propagate_check] is invoked. The order that the items affected will be processed is as follows: the item that invoked the method, children of that item, and finally parents of that item. */
        readonly checkPropagatedToItem: Signal<(item: TreeItem, column: int64) => void>
        
        /** Emitted when a button on the tree was pressed (see [method TreeItem.add_button]). */
        readonly buttonClicked: Signal<(item: TreeItem, column: int64, id: int64, mouseButtonIndex: int64) => void>
        
        /** Emitted when a cell with the [constant TreeItem.CELL_MODE_CUSTOM] is clicked to be edited. */
        readonly customPopupEdited: Signal<(arrowClicked: boolean) => void>
        
        /** Emitted when an item is double-clicked, or selected with a `ui_accept` input event (e.g. using [kbd]Enter[/kbd] or [kbd]Space[/kbd] on the keyboard). */
        readonly itemActivated: Signal<() => void>
        
        /** Emitted when a column's title is clicked with either [constant MOUSE_BUTTON_LEFT] or [constant MOUSE_BUTTON_RIGHT]. */
        readonly columnTitleClicked: Signal<(column: int64, mouseButtonIndex: int64) => void>
        
        /** Emitted when a left mouse button click does not select any item. */
        readonly nothingSelected: Signal<() => void>
    }
    namespace TreeItem {
        enum TreeCellMode {
            CellModeString = 0,
            CellModeCheck = 1,
            CellModeRange = 2,
            CellModeIcon = 3,
            CellModeCustom = 4,
        }
    }
    /** An internal control for a single item inside [Tree].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_treeitem.html  
     */
    class TreeItem extends GObject {
        /** Cell shows a string label, optionally with an icon. When editable, the text can be edited using a [LineEdit], or a [TextEdit] popup if [method set_edit_multiline] is used. */
        static readonly CELL_MODE_STRING = 0
        
        /** Cell shows a checkbox, optionally with text and an icon. The checkbox can be pressed, released, or indeterminate (via [method set_indeterminate]). The checkbox can't be clicked unless the cell is editable. */
        static readonly CELL_MODE_CHECK = 1
        
        /** Cell shows a numeric range. When editable, it can be edited using a range slider. Use [method set_range] to set the value and [method set_range_config] to configure the range.  
         *  This cell can also be used in a text dropdown mode when you assign a text with [method set_text]. Separate options with a comma, e.g. `"Option1,Option2,Option3"`.  
         */
        static readonly CELL_MODE_RANGE = 2
        
        /** Cell shows an icon. It can't be edited nor display text. The icon is always centered within the cell. */
        static readonly CELL_MODE_ICON = 3
        
        /** Cell shows as a clickable button. It will display an arrow similar to [OptionButton], but doesn't feature a dropdown (for that you can use [constant CELL_MODE_RANGE]). Clicking the button emits the [signal Tree.item_edited] signal. The button is flat by default, you can use [method set_custom_as_button] to display it with a [StyleBox].  
         *  This mode also supports custom drawing using [method set_custom_draw_callback].  
         */
        static readonly CELL_MODE_CUSTOM = 4
        constructor(identifier?: any)
        
        /** Sets the given column's cell mode to [param mode]. This determines how the cell is displayed and edited. See [enum TreeCellMode] constants for details. */
        setCellMode(column: int64, mode: TreeItem.TreeCellMode): void
        
        /** Returns the column's cell mode. */
        getCellMode(column: int64): TreeItem.TreeCellMode
        
        /** Sets the given column's auto translate mode to [param mode].  
         *  All columns use [constant Node.AUTO_TRANSLATE_MODE_INHERIT] by default, which uses the same auto translate mode as the [Tree] itself.  
         */
        setAutoTranslateMode(column: int64, mode: Node.AutoTranslateMode): void
        
        /** Returns the column's auto translate mode. */
        getAutoTranslateMode(column: int64): Node.AutoTranslateMode
        
        /** If [param multiline] is `true`, the given [param column] is multiline editable.  
         *      
         *  **Note:** This option only affects the type of control ([LineEdit] or [TextEdit]) that appears when editing the column. You can set multiline values with [method set_text] even if the column is not multiline editable.  
         */
        setEditMultiline(column: int64, multiline: boolean): void
        
        /** Returns `true` if the given [param column] is multiline editable. */
        isEditMultiline(column: int64): boolean
        
        /** If [param checked] is `true`, the given [param column] is checked. Clears column's indeterminate status. */
        setChecked(column: int64, checked: boolean): void
        
        /** If [param indeterminate] is `true`, the given [param column] is marked indeterminate.  
         *      
         *  **Note:** If set `true` from `false`, then column is cleared of checked status.  
         */
        setIndeterminate(column: int64, indeterminate: boolean): void
        
        /** Returns `true` if the given [param column] is checked. */
        isChecked(column: int64): boolean
        
        /** Returns `true` if the given [param column] is indeterminate. */
        isIndeterminate(column: int64): boolean
        
        /** Propagates this item's checked status to its children and parents for the given [param column]. It is possible to process the items affected by this method call by connecting to [signal Tree.check_propagated_to_item]. The order that the items affected will be processed is as follows: the item invoking this method, children of that item, and finally parents of that item. If [param emit_signal] is `false`, then [signal Tree.check_propagated_to_item] will not be emitted. */
        propagateCheck(column: int64, emitSignal?: boolean /* = true */): void
        
        /** Sets the given column's text value. */
        setText(column: int64, text: string): void
        
        /** Returns the given column's text. */
        getText(column: int64): string
        
        /** Sets the given column's alternative (description) text for assistive apps. */
        setAltText(column: int64, text: string): void
        
        /** Returns the given column's alternative text. */
        getAltText(column: int64): string
        
        /** Sets item's text base writing direction. */
        setTextDirection(column: int64, direction: Control.TextDirection): void
        
        /** Returns item's text base writing direction. */
        getTextDirection(column: int64): Control.TextDirection
        
        /** Sets the autowrap mode in the given [param column]. If set to something other than [constant TextServer.AUTOWRAP_OFF], the text gets wrapped inside the cell's bounding rectangle. */
        setAutowrapMode(column: int64, autowrapMode: TextServer.AutowrapMode): void
        
        /** Returns the text autowrap mode in the given [param column]. By default it is [constant TextServer.AUTOWRAP_OFF]. */
        getAutowrapMode(column: int64): TextServer.AutowrapMode
        
        /** Sets the clipping behavior when the text exceeds the item's bounding rectangle in the given [param column]. */
        setTextOverrunBehavior(column: int64, overrunBehavior: TextServer.OverrunBehavior): void
        
        /** Returns the clipping behavior when the text exceeds the item's bounding rectangle in the given [param column]. By default it is [constant TextServer.OVERRUN_TRIM_ELLIPSIS]. */
        getTextOverrunBehavior(column: int64): TextServer.OverrunBehavior
        
        /** Set BiDi algorithm override for the structured text. Has effect for cells that display text. */
        setStructuredTextBidiOverride(column: int64, parser: TextServer.StructuredTextParser): void
        
        /** Returns the BiDi algorithm override set for this cell. */
        getStructuredTextBidiOverride(column: int64): TextServer.StructuredTextParser
        
        /** Set additional options for BiDi override. Has effect for cells that display text. */
        setStructuredTextBidiOverrideOptions(column: int64, args: GArray): void
        
        /** Returns the additional BiDi options set for this cell. */
        getStructuredTextBidiOverrideOptions(column: int64): GArray
        
        /** Sets language code of item's text used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        setLanguage(column: int64, language: string): void
        
        /** Returns item's text language code. */
        getLanguage(column: int64): string
        
        /** Sets a string to be shown after a column's value (for example, a unit abbreviation). */
        setSuffix(column: int64, text: string): void
        
        /** Gets the suffix string shown after the column value. */
        getSuffix(column: int64): string
        
        /** Sets the given cell's icon [Texture2D]. If the cell is in [constant CELL_MODE_ICON] mode, the icon is displayed in the center of the cell. Otherwise, the icon is displayed before the cell's text. [constant CELL_MODE_RANGE] does not display an icon. */
        setIcon(column: int64, texture: Texture2D): void
        
        /** Returns the given column's icon [Texture2D]. Error if no icon is set. */
        getIcon(column: int64): null | Texture2D
        
        /** Sets the given cell's icon overlay [Texture2D]. The cell has to be in [constant CELL_MODE_ICON] mode, and icon has to be set. Overlay is drawn on top of icon, in the bottom left corner. */
        setIconOverlay(column: int64, texture: Texture2D): void
        
        /** Returns the given column's icon overlay [Texture2D]. */
        getIconOverlay(column: int64): null | Texture2D
        
        /** Sets the given column's icon's texture region. */
        setIconRegion(column: int64, region: Rect2): void
        
        /** Returns the icon [Texture2D] region as [Rect2]. */
        getIconRegion(column: int64): Rect2
        
        /** Sets the maximum allowed width of the icon in the given [param column]. This limit is applied on top of the default size of the icon and on top of [theme_item Tree.icon_max_width]. The height is adjusted according to the icon's ratio. */
        setIconMaxWidth(column: int64, width: int64): void
        
        /** Returns the maximum allowed width of the icon in the given [param column]. */
        getIconMaxWidth(column: int64): int64
        
        /** Modulates the given column's icon with [param modulate]. */
        setIconModulate(column: int64, modulate: Color): void
        
        /** Returns the [Color] modulating the column's icon. */
        getIconModulate(column: int64): Color
        
        /** Sets the value of a [constant CELL_MODE_RANGE] column. */
        setRange(column: int64, value: float64): void
        
        /** Returns the value of a [constant CELL_MODE_RANGE] column. */
        getRange(column: int64): float64
        
        /** Sets the range of accepted values for a column. The column must be in the [constant CELL_MODE_RANGE] mode.  
         *  If [param expr] is `true`, the edit mode slider will use an exponential scale as with [member Range.exp_edit].  
         */
        setRangeConfig(column: int64, min: float64, max: float64, step: float64, expr?: boolean /* = false */): void
        
        /** Returns a dictionary containing the range parameters for a given column. The keys are "min", "max", "step", and "expr". */
        getRangeConfig(column: int64): GDictionary
        
        /** Sets the metadata value for the given column, which can be retrieved later using [method get_metadata]. This can be used, for example, to store a reference to the original data. */
        setMetadata(column: int64, meta: any): void
        
        /** Returns the metadata value that was set for the given column using [method set_metadata]. */
        getMetadata(column: int64): any
        
        /** Sets the given column's custom draw callback to the [param callback] method on [param object].  
         *  The method named [param callback] should accept two arguments: the [TreeItem] that is drawn and its position and size as a [Rect2].  
         */
        setCustomDraw(column: int64, object: GObject, callback: StringName): void
        
        /** Sets the given column's custom draw callback. Use an empty [Callable] ([code skip-lint]Callable()`) to clear the custom callback. The cell has to be in [constant CELL_MODE_CUSTOM] to use this feature.  
         *  The [param callback] should accept two arguments: the [TreeItem] that is drawn and its position and size as a [Rect2].  
         */
        setCustomDrawCallback(column: int64, callback: Callable): void
        
        /** Returns the custom callback of column [param column]. */
        getCustomDrawCallback(column: int64): Callable
        
        /** Collapses or uncollapses this [TreeItem] and all the descendants of this item. */
        setCollapsedRecursive(enable: boolean): void
        
        /** Returns `true` if this [TreeItem], or any of its descendants, is collapsed.  
         *  If [param only_visible] is `true` it ignores non-visible [TreeItem]s.  
         */
        isAnyCollapsed(onlyVisible?: boolean /* = false */): boolean
        
        /** Returns `true` if [member visible] is `true` and all its ancestors are also visible. */
        isVisibleInTree(): boolean
        
        /** Uncollapses all [TreeItem]s necessary to reveal this [TreeItem], i.e. all ancestor [TreeItem]s. */
        uncollapseTree(): void
        
        /** If [param selectable] is `true`, the given [param column] is selectable. */
        setSelectable(column: int64, selectable: boolean): void
        
        /** Returns `true` if the given [param column] is selectable. */
        isSelectable(column: int64): boolean
        
        /** Returns `true` if the given [param column] is selected. */
        isSelected(column: int64): boolean
        
        /** Selects the given [param column]. */
        select(column: int64): void
        
        /** Deselects the given column. */
        deselect(column: int64): void
        
        /** If [param enabled] is `true`, the given [param column] is editable. */
        setEditable(column: int64, enabled: boolean): void
        
        /** Returns `true` if the given [param column] is editable. */
        isEditable(column: int64): boolean
        
        /** Sets the given column's custom color. */
        setCustomColor(column: int64, color: Color): void
        
        /** Returns the custom color of column [param column]. */
        getCustomColor(column: int64): Color
        
        /** Resets the color for the given column to default. */
        clearCustomColor(column: int64): void
        
        /** Sets custom font used to draw text in the given [param column]. */
        setCustomFont(column: int64, font: Font): void
        
        /** Returns custom font used to draw text in the column [param column]. */
        getCustomFont(column: int64): null | Font
        
        /** Sets custom font size used to draw text in the given [param column]. */
        setCustomFontSize(column: int64, fontSize: int64): void
        
        /** Returns custom font size used to draw text in the column [param column]. */
        getCustomFontSize(column: int64): int64
        
        /** Sets the given column's custom background color and whether to just use it as an outline. */
        setCustomBgColor(column: int64, color: Color, justOutline?: boolean /* = false */): void
        
        /** Resets the background color for the given column to default. */
        clearCustomBgColor(column: int64): void
        
        /** Returns the custom background color of column [param column]. */
        getCustomBgColor(column: int64): Color
        
        /** Makes a cell with [constant CELL_MODE_CUSTOM] display as a non-flat button with a [StyleBox]. */
        setCustomAsButton(column: int64, enable: boolean): void
        
        /** Returns `true` if the cell was made into a button with [method set_custom_as_button]. */
        isCustomSetAsButton(column: int64): boolean
        
        /** Removes all buttons from all columns of this item. */
        clearButtons(): void
        
        /** Adds a button with [Texture2D] [param button] to the end of the cell at column [param column]. The [param id] is used to identify the button in the according [signal Tree.button_clicked] signal and can be different from the buttons index. If not specified, the next available index is used, which may be retrieved by calling [method get_button_count] immediately before this method. Optionally, the button can be [param disabled] and have a [param tooltip_text]. [param alt_text] is used as the button description for assistive apps. */
        addButton(column: int64, button: Texture2D, id?: int64 /* = -1 */, disabled?: boolean /* = false */, tooltipText?: string /* = '' */, altText?: string /* = '' */): void
        
        /** Returns the number of buttons in column [param column]. */
        getButtonCount(column: int64): int64
        
        /** Returns the tooltip text for the button at index [param button_index] in column [param column]. */
        getButtonTooltipText(column: int64, buttonIndex: int64): string
        
        /** Returns the ID for the button at index [param button_index] in column [param column]. */
        getButtonId(column: int64, buttonIndex: int64): int64
        
        /** Returns the button index if there is a button with ID [param id] in column [param column], otherwise returns -1. */
        getButtonById(column: int64, id: int64): int64
        
        /** Returns the color of the button with ID [param id] in column [param column]. If the specified button does not exist, returns [constant Color.BLACK]. */
        getButtonColor(column: int64, id: int64): Color
        
        /** Returns the [Texture2D] of the button at index [param button_index] in column [param column]. */
        getButton(column: int64, buttonIndex: int64): null | Texture2D
        
        /** Sets the tooltip text for the button at index [param button_index] in the given [param column]. */
        setButtonTooltipText(column: int64, buttonIndex: int64, tooltip: string): void
        
        /** Sets the given column's button [Texture2D] at index [param button_index] to [param button]. */
        setButton(column: int64, buttonIndex: int64, button: Texture2D): void
        
        /** Removes the button at index [param button_index] in column [param column]. */
        eraseButton(column: int64, buttonIndex: int64): void
        
        /** Sets the given column's button alternative text (description) at index [param button_index] for assistive apps. */
        setButtonAltText(column: int64, buttonIndex: int64, altText: string): void
        
        /** If `true`, disables the button at index [param button_index] in the given [param column]. */
        setButtonDisabled(column: int64, buttonIndex: int64, disabled: boolean): void
        
        /** Sets the given column's button color at index [param button_index] to [param color]. */
        setButtonColor(column: int64, buttonIndex: int64, color: Color): void
        
        /** Returns `true` if the button at index [param button_index] for the given [param column] is disabled. */
        isButtonDisabled(column: int64, buttonIndex: int64): boolean
        
        /** Sets the given column's tooltip text. */
        setTooltipText(column: int64, tooltip: string): void
        
        /** Returns the given column's tooltip text. */
        getTooltipText(column: int64): string
        
        /** Sets the given column's text alignment. See [enum HorizontalAlignment] for possible values. */
        setTextAlignment(column: int64, textAlignment: HorizontalAlignment): void
        
        /** Returns the given column's text alignment. */
        getTextAlignment(column: int64): HorizontalAlignment
        
        /** If [param enable] is `true`, the given [param column] is expanded to the right. */
        setExpandRight(column: int64, enable: boolean): void
        
        /** Returns `true` if `expand_right` is set. */
        getExpandRight(column: int64): boolean
        
        /** Creates an item and adds it as a child.  
         *  The new item will be inserted as position [param index] (the default value `-1` means the last position), or it will be the last child if [param index] is higher than the child count.  
         */
        createChild(index?: int64 /* = -1 */): TreeItem
        
        /** Adds a previously unparented [TreeItem] as a direct child of this one. The [param child] item must not be a part of any [Tree] or parented to any [TreeItem]. See also [method remove_child]. */
        addChild(child: TreeItem): void
        
        /** Removes the given child [TreeItem] and all its children from the [Tree]. Note that it doesn't free the item from memory, so it can be reused later (see [method add_child]). To completely remove a [TreeItem] use [method Object.free].  
         *      
         *  **Note:** If you want to move a child from one [Tree] to another, then instead of removing and adding it manually you can use [method move_before] or [method move_after].  
         */
        removeChild(child: TreeItem): void
        
        /** Returns the [Tree] that owns this TreeItem. */
        getTree(): null | Tree
        
        /** Returns the next sibling TreeItem in the tree or a `null` object if there is none. */
        getNext(): null | TreeItem
        
        /** Returns the previous sibling TreeItem in the tree or a `null` object if there is none. */
        getPrev(): null | TreeItem
        
        /** Returns the parent TreeItem or a `null` object if there is none. */
        getParent(): null | TreeItem
        
        /** Returns the TreeItem's first child. */
        getFirstChild(): null | TreeItem
        
        /** Returns the next TreeItem in the tree (in the context of a depth-first search) or a `null` object if there is none.  
         *  If [param wrap] is enabled, the method will wrap around to the first element in the tree when called on the last element, otherwise it returns `null`.  
         */
        getNextInTree(wrap?: boolean /* = false */): null | TreeItem
        
        /** Returns the previous TreeItem in the tree (in the context of a depth-first search) or a `null` object if there is none.  
         *  If [param wrap] is enabled, the method will wrap around to the last element in the tree when called on the first visible element, otherwise it returns `null`.  
         */
        getPrevInTree(wrap?: boolean /* = false */): null | TreeItem
        
        /** Returns the next visible TreeItem in the tree (in the context of a depth-first search) or a `null` object if there is none.  
         *  If [param wrap] is enabled, the method will wrap around to the first visible element in the tree when called on the last visible element, otherwise it returns `null`.  
         */
        getNextVisible(wrap?: boolean /* = false */): null | TreeItem
        
        /** Returns the previous visible sibling TreeItem in the tree (in the context of a depth-first search) or a `null` object if there is none.  
         *  If [param wrap] is enabled, the method will wrap around to the last visible element in the tree when called on the first visible element, otherwise it returns `null`.  
         */
        getPrevVisible(wrap?: boolean /* = false */): null | TreeItem
        
        /** Returns a child item by its [param index] (see [method get_child_count]). This method is often used for iterating all children of an item.  
         *  Negative indices access the children from the last one.  
         */
        getChild(index: int64): null | TreeItem
        
        /** Returns the number of child items. */
        getChildCount(): int64
        
        /** Returns an array of references to the item's children. */
        getChildren(): GArray
        
        /** Returns the node's order in the tree. For example, if called on the first child item the position is `0`. */
        getIndex(): int64
        
        /** Moves this TreeItem right before the given [param item].  
         *      
         *  **Note:** You can't move to the root or move the root.  
         */
        moveBefore(item: TreeItem): void
        
        /** Moves this TreeItem right after the given [param item].  
         *      
         *  **Note:** You can't move to the root or move the root.  
         */
        moveAfter(item: TreeItem): void
        
        /** Calls the [param method] on the actual TreeItem and its children recursively. Pass parameters as a comma separated list. */
        callRecursive(method: StringName, ...varargs: any[]): void
        
        /** If `true`, the TreeItem is collapsed. */
        get collapsed(): boolean
        set collapsed(value: boolean)
        
        /** If `true`, the [TreeItem] is visible (default).  
         *  Note that if a [TreeItem] is set to not be visible, none of its children will be visible either.  
         */
        get visible(): boolean
        set visible(value: boolean)
        
        /** If `true`, folding is disabled for this TreeItem. */
        get disableFolding(): boolean
        set disableFolding(value: boolean)
        
        /** The custom minimum height. */
        get customMinimumHeight(): int64
        set customMinimumHeight(value: int64)
    }
    /** Triangle geometry for efficient, physicsless intersection queries.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_trianglemesh.html  
     */
    class TriangleMesh extends RefCounted {
        constructor(identifier?: any)
        /** Creates the BVH tree from an array of faces. Each 3 vertices of the input [param faces] array represent one triangle (face).  
         *  Returns `true` if the tree is successfully built, `false` otherwise.  
         */
        createFromFaces(faces: PackedVector3Array | Vector3[]): boolean
        
        /** Returns a copy of the geometry faces. Each 3 vertices of the array represent one triangle (face). */
        getFaces(): PackedVector3Array
        
        /** Tests for intersection with a segment going from [param begin] to [param end].  
         *  If an intersection with a triangle happens returns a [Dictionary] with the following fields:  
         *  `position`: The position on the intersected triangle.  
         *  `normal`: The normal of the intersected triangle.  
         *  `face_index`: The index of the intersected triangle.  
         *  Returns an empty [Dictionary] if no intersection happens.  
         *  See also [method intersect_ray], which is similar but uses an infinite-length ray.  
         */
        intersectSegment(begin: Vector3, end: Vector3): GDictionary
        
        /** Tests for intersection with a ray starting at [param begin] and facing [param dir] and extending toward infinity.  
         *  If an intersection with a triangle happens, returns a [Dictionary] with the following fields:  
         *  `position`: The position on the intersected triangle.  
         *  `normal`: The normal of the intersected triangle.  
         *  `face_index`: The index of the intersected triangle.  
         *  Returns an empty [Dictionary] if no intersection happens.  
         *  See also [method intersect_segment], which is similar but uses a finite-length segment.  
         */
        intersectRay(begin: Vector3, dir: Vector3): GDictionary
    }
    /** Represents a straight tube-shaped [PrimitiveMesh] with variable width.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_tubetrailmesh.html  
     */
    class TubeTrailMesh extends PrimitiveMesh {
        constructor(identifier?: any)
        /** The baseline radius of the tube. The radius of a particular section ring is obtained by multiplying this radius by the value of the [member curve] at the given distance. */
        get radius(): float64
        set radius(value: float64)
        
        /** The number of sides on the tube. For example, a value of `5` means the tube will be pentagonal. Higher values result in a more detailed tube at the cost of performance. */
        get radialSteps(): int64
        set radialSteps(value: int64)
        
        /** The total number of sections on the tube. */
        get sections(): int64
        set sections(value: int64)
        
        /** The length of a section of the tube. */
        get sectionLength(): float64
        set sectionLength(value: float64)
        
        /** The number of rings in a section. The [member curve] is sampled on each ring to determine its radius. Higher values result in a more detailed tube at the cost of performance. */
        get sectionRings(): int64
        set sectionRings(value: int64)
        
        /** If `true`, generates a cap at the top of the tube. This can be set to `false` to speed up generation and rendering when the cap is never seen by the camera. */
        get capTop(): boolean
        set capTop(value: boolean)
        
        /** If `true`, generates a cap at the bottom of the tube. This can be set to `false` to speed up generation and rendering when the cap is never seen by the camera. */
        get capBottom(): boolean
        set capBottom(value: boolean)
        
        /** Determines the radius of the tube along its length. The radius of a particular section ring is obtained by multiplying the baseline [member radius] by the value of this curve at the given distance. For values smaller than `0`, the faces will be inverted. Should be a unit [Curve]. */
        get curve(): null | Curve
        set curve(value: null | Curve)
    }
    namespace Tween {
        enum TweenProcessMode {
            TweenProcessPhysics = 0,
            TweenProcessIdle = 1,
        }
        enum TweenPauseMode {
            TweenPauseBound = 0,
            TweenPauseStop = 1,
            TweenPauseProcess = 2,
        }
        enum TransitionType {
            TransLinear = 0,
            TransSine = 1,
            TransQuint = 2,
            TransQuart = 3,
            TransQuad = 4,
            TransExpo = 5,
            TransElastic = 6,
            TransCubic = 7,
            TransCirc = 8,
            TransBounce = 9,
            TransBack = 10,
            TransSpring = 11,
        }
        enum EaseType {
            EaseIn = 0,
            EaseOut = 1,
            EaseInOut = 2,
            EaseOutIn = 3,
        }
    }
    /** Lightweight object used for general-purpose animation via script, using [Tweener]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_tween.html  
     */
    class Tween extends RefCounted {
        /** The [Tween] updates after each physics frame (see [method Node._physics_process]). */
        static readonly TWEEN_PROCESS_PHYSICS = 0
        
        /** The [Tween] updates after each process frame (see [method Node._process]). */
        static readonly TWEEN_PROCESS_IDLE = 1
        
        /** If the [Tween] has a bound node, it will process when that node can process (see [member Node.process_mode]). Otherwise it's the same as [constant TWEEN_PAUSE_STOP]. */
        static readonly TWEEN_PAUSE_BOUND = 0
        
        /** If [SceneTree] is paused, the [Tween] will also pause. */
        static readonly TWEEN_PAUSE_STOP = 1
        
        /** The [Tween] will process regardless of whether [SceneTree] is paused. */
        static readonly TWEEN_PAUSE_PROCESS = 2
        
        /** The animation is interpolated linearly. */
        static readonly TRANS_LINEAR = 0
        
        /** The animation is interpolated using a sine function. */
        static readonly TRANS_SINE = 1
        
        /** The animation is interpolated with a quintic (to the power of 5) function. */
        static readonly TRANS_QUINT = 2
        
        /** The animation is interpolated with a quartic (to the power of 4) function. */
        static readonly TRANS_QUART = 3
        
        /** The animation is interpolated with a quadratic (to the power of 2) function. */
        static readonly TRANS_QUAD = 4
        
        /** The animation is interpolated with an exponential (to the power of x) function. */
        static readonly TRANS_EXPO = 5
        
        /** The animation is interpolated with elasticity, wiggling around the edges. */
        static readonly TRANS_ELASTIC = 6
        
        /** The animation is interpolated with a cubic (to the power of 3) function. */
        static readonly TRANS_CUBIC = 7
        
        /** The animation is interpolated with a function using square roots. */
        static readonly TRANS_CIRC = 8
        
        /** The animation is interpolated by bouncing at the end. */
        static readonly TRANS_BOUNCE = 9
        
        /** The animation is interpolated backing out at ends. */
        static readonly TRANS_BACK = 10
        
        /** The animation is interpolated like a spring towards the end. */
        static readonly TRANS_SPRING = 11
        
        /** The interpolation starts slowly and speeds up towards the end. */
        static readonly EASE_IN = 0
        
        /** The interpolation starts quickly and slows down towards the end. */
        static readonly EASE_OUT = 1
        
        /** A combination of [constant EASE_IN] and [constant EASE_OUT]. The interpolation is slowest at both ends. */
        static readonly EASE_IN_OUT = 2
        
        /** A combination of [constant EASE_IN] and [constant EASE_OUT]. The interpolation is fastest at both ends. */
        static readonly EASE_OUT_IN = 3
        constructor(identifier?: any)
        
        /** Creates and appends a [PropertyTweener]. This method tweens a [param property] of an [param object] between an initial value and [param final_val] in a span of time equal to [param duration], in seconds. The initial value by default is the property's value at the time the tweening of the [PropertyTweener] starts.  
         *    
         *  will move the sprite to position (100, 200) and then to (200, 300). If you use [method PropertyTweener.from] or [method PropertyTweener.from_current], the starting position will be overwritten by the given value instead. See other methods in [PropertyTweener] to see how the tweening can be tweaked further.  
         *      
         *  **Note:** You can find the correct property name by hovering over the property in the Inspector. You can also provide the components of a property directly by using `"property:component"` (eg. `position:x`), where it would only apply to that particular component.  
         *  **Example:** Moving an object twice from the same position, with different transition types:  
         *    
         */
        tweenProperty(object: GObject, property: NodePath | string, finalVal: any, duration: float64): null | PropertyTweener
        
        /** Creates and appends an [IntervalTweener]. This method can be used to create delays in the tween animation, as an alternative to using the delay in other [Tweener]s, or when there's no animation (in which case the [Tween] acts as a timer). [param time] is the length of the interval, in seconds.  
         *  **Example:** Creating an interval in code execution:  
         *    
         *  **Example:** Creating an object that moves back and forth and jumps every few seconds:  
         *    
         */
        tweenInterval(time: float64): null | IntervalTweener
        
        /** Creates and appends a [CallbackTweener]. This method can be used to call an arbitrary method in any object. Use [method Callable.bind] to bind additional arguments for the call.  
         *  **Example:** Object that keeps shooting every 1 second:  
         *    
         *  **Example:** Turning a sprite red and then blue, with 2 second delay:  
         *    
         */
        tweenCallback(callback: Callable): null | CallbackTweener
        
        /** Creates and appends a [MethodTweener]. This method is similar to a combination of [method tween_callback] and [method tween_property]. It calls a method over time with a tweened value provided as an argument. The value is tweened between [param from] and [param to] over the time specified by [param duration], in seconds. Use [method Callable.bind] to bind additional arguments for the call. You can use [method MethodTweener.set_ease] and [method MethodTweener.set_trans] to tweak the easing and transition of the value or [method MethodTweener.set_delay] to delay the tweening.  
         *  **Example:** Making a 3D object look from one point to another point:  
         *    
         *  **Example:** Setting the text of a [Label], using an intermediate method and after a delay:  
         *    
         */
        tweenMethod(method: Callable, from: any, to: any, duration: float64): null | MethodTweener
        
        /** Creates and appends a [SubtweenTweener]. This method can be used to nest [param subtween] within this [Tween], allowing for the creation of more complex and composable sequences.  
         *    
         *      
         *  **Note:** The methods [method pause], [method stop], and [method set_loops] can cause the parent [Tween] to get stuck on the subtween step; see the documentation for those methods for more information.  
         *      
         *  **Note:** The pause and process modes set by [method set_pause_mode] and [method set_process_mode] on [param subtween] will be overridden by the parent [Tween]'s settings.  
         */
        tweenSubtween(subtween: Tween): null | SubtweenTweener
        
        /** Processes the [Tween] by the given [param delta] value, in seconds. This is mostly useful for manual control when the [Tween] is paused. It can also be used to end the [Tween] animation immediately, by setting [param delta] longer than the whole duration of the [Tween] animation.  
         *  Returns `true` if the [Tween] still has [Tweener]s that haven't finished.  
         */
        customStep(delta: float64): boolean
        
        /** Stops the tweening and resets the [Tween] to its initial state. This will not remove any appended [Tweener]s.  
         *      
         *  **Note:** This does  *not*  reset targets of [PropertyTweener]s to their values when the [Tween] first started.  
         *    
         *      
         *  **Note:** If a Tween is stopped and not bound to any node, it will exist indefinitely until manually started or invalidated. If you lose a reference to such Tween, you can retrieve it using [method SceneTree.get_processed_tweens].  
         */
        stop(): void
        
        /** Pauses the tweening. The animation can be resumed by using [method play].  
         *      
         *  **Note:** If a Tween is paused and not bound to any node, it will exist indefinitely until manually started or invalidated. If you lose a reference to such Tween, you can retrieve it using [method SceneTree.get_processed_tweens].  
         */
        pause(): void
        
        /** Resumes a paused or stopped [Tween]. */
        play(): void
        
        /** Aborts all tweening operations and invalidates the [Tween]. */
        kill(): void
        
        /** Returns the total time in seconds the [Tween] has been animating (i.e. the time since it started, not counting pauses etc.). The time is affected by [method set_speed_scale], and [method stop] will reset it to `0`.  
         *      
         *  **Note:** As it results from accumulating frame deltas, the time returned after the [Tween] has finished animating will be slightly greater than the actual [Tween] duration.  
         */
        getTotalElapsedTime(): float64
        
        /** Returns whether the [Tween] is currently running, i.e. it wasn't paused and it's not finished. */
        isRunning(): boolean
        
        /** Returns whether the [Tween] is valid. A valid [Tween] is a [Tween] contained by the scene tree (i.e. the array from [method SceneTree.get_processed_tweens] will contain this [Tween]). A [Tween] might become invalid when it has finished tweening, is killed, or when created with `Tween.new()`. Invalid [Tween]s can't have [Tweener]s appended. */
        isValid(): boolean
        
        /** Binds this [Tween] with the given [param node]. [Tween]s are processed directly by the [SceneTree], so they run independently of the animated nodes. When you bind a [Node] with the [Tween], the [Tween] will halt the animation when the object is not inside tree and the [Tween] will be automatically killed when the bound object is freed. Also [constant TWEEN_PAUSE_BOUND] will make the pausing behavior dependent on the bound node.  
         *  For a shorter way to create and bind a [Tween], you can use [method Node.create_tween].  
         */
        bindNode(node: Node): null | Tween
        
        /** Determines whether the [Tween] should run after process frames (see [method Node._process]) or physics frames (see [method Node._physics_process]).  
         *  Default value is [constant TWEEN_PROCESS_IDLE].  
         */
        setProcessMode(mode: Tween.TweenProcessMode): null | Tween
        
        /** Determines the behavior of the [Tween] when the [SceneTree] is paused. Check [enum TweenPauseMode] for options.  
         *  Default value is [constant TWEEN_PAUSE_BOUND].  
         */
        setPauseMode(mode: Tween.TweenPauseMode): null | Tween
        
        /** If [param ignore] is `true`, the tween will ignore [member Engine.time_scale] and update with the real, elapsed time. This affects all [Tweener]s and their delays. Default value is `false`. */
        setIgnoreTimeScale(ignore?: boolean /* = true */): null | Tween
        
        /** If [param parallel] is `true`, the [Tweener]s appended after this method will by default run simultaneously, as opposed to sequentially.  
         *      
         *  **Note:** Just like with [method parallel], the tweener added right before this method will also be part of the parallel step.  
         *    
         */
        setParallel(parallel?: boolean /* = true */): null | Tween
        
        /** Sets the number of times the tweening sequence will be repeated, i.e. `set_loops(2)` will run the animation twice.  
         *  Calling this method without arguments will make the [Tween] run infinitely, until either it is killed with [method kill], the [Tween]'s bound node is freed, or all the animated objects have been freed (which makes further animation impossible).  
         *  **Warning:** Make sure to always add some duration/delay when using infinite loops. To prevent the game freezing, 0-duration looped animations (e.g. a single [CallbackTweener] with no delay) are stopped after a small number of loops, which may produce unexpected results. If a [Tween]'s lifetime depends on some node, always use [method bind_node].  
         */
        setLoops(loops?: int64 /* = 0 */): null | Tween
        
        /** Returns the number of remaining loops for this [Tween] (see [method set_loops]). A return value of `-1` indicates an infinitely looping [Tween], and a return value of `0` indicates that the [Tween] has already finished. */
        getLoopsLeft(): int64
        
        /** Scales the speed of tweening. This affects all [Tweener]s and their delays. */
        setSpeedScale(speed: float64): null | Tween
        
        /** Sets the default transition type for [PropertyTweener]s and [MethodTweener]s appended after this method.  
         *  Before this method is called, the default transition type is [constant TRANS_LINEAR].  
         *    
         */
        setTrans(trans: Tween.TransitionType): null | Tween
        
        /** Sets the default ease type for [PropertyTweener]s and [MethodTweener]s appended after this method.  
         *  Before this method is called, the default ease type is [constant EASE_IN_OUT].  
         *    
         */
        setEase(ease: Tween.EaseType): null | Tween
        
        /** Makes the next [Tweener] run parallelly to the previous one.  
         *    
         *  All [Tweener]s in the example will run at the same time.  
         *  You can make the [Tween] parallel by default by using [method set_parallel].  
         */
        parallel(): null | Tween
        
        /** Used to chain two [Tweener]s after [method set_parallel] is called with `true`.  
         *    
         */
        chain(): null | Tween
        
        /** This method can be used for manual interpolation of a value, when you don't want [Tween] to do animating for you. It's similar to [method @GlobalScope.lerp], but with support for custom transition and easing.  
         *  [param initial_value] is the starting value of the interpolation.  
         *  [param delta_value] is the change of the value in the interpolation, i.e. it's equal to `final_value - initial_value`.  
         *  [param elapsed_time] is the time in seconds that passed after the interpolation started and it's used to control the position of the interpolation. E.g. when it's equal to half of the [param duration], the interpolated value will be halfway between initial and final values. This value can also be greater than [param duration] or lower than 0, which will extrapolate the value.  
         *  [param duration] is the total time of the interpolation.  
         *      
         *  **Note:** If [param duration] is equal to `0`, the method will always return the final value, regardless of [param elapsed_time] provided.  
         */
        static interpolateValue(initialValue: any, deltaValue: any, elapsedTime: float64, duration: float64, transType: Tween.TransitionType, easeType: Tween.EaseType): any
        
        /** Emitted when one step of the [Tween] is complete, providing the step index. One step is either a single [Tweener] or a group of [Tweener]s running in parallel. */
        readonly stepFinished: Signal<(idx: int64) => void>
        
        /** Emitted when a full loop is complete (see [method set_loops]), providing the loop index. This signal is not emitted after the final loop, use [signal finished] instead for this case. */
        readonly loopFinished: Signal<(loopCount: int64) => void>
        
        /** Emitted when the [Tween] has finished all tweening. Never emitted when the [Tween] is set to infinite looping (see [method set_loops]). */
        readonly finished: Signal<() => void>
    }
    /** Abstract class for all Tweeners used by [Tween].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_tweener.html  
     */
    class Tweener extends RefCounted {
        constructor(identifier?: any)
        /** Emitted when the [Tweener] has just finished its job or became invalid (e.g. due to a freed object). */
        readonly finished: Signal<() => void>
    }
    class UdpServer extends RefCounted {
        constructor(identifier?: any)
        listen(port: int64, bindAddress?: string /* = '*' */): GError
        poll(): GError
        isConnectionAvailable(): boolean
        getLocalPort(): int64
        isListening(): boolean
        takeConnection(): null | PacketPeerUdp
        stop(): void
        get maxPendingConnections(): int64
        set maxPendingConnections(value: int64)
    }
    namespace Upnp {
        enum UpnpResult {
            UpnpResultSuccess = 0,
            UpnpResultNotAuthorized = 1,
            UpnpResultPortMappingNotFound = 2,
            UpnpResultInconsistentParameters = 3,
            UpnpResultNoSuchEntryInArray = 4,
            UpnpResultActionFailed = 5,
            UpnpResultSrcIPWildcardNotPermitted = 6,
            UpnpResultExtPortWildcardNotPermitted = 7,
            UpnpResultIntPortWildcardNotPermitted = 8,
            UpnpResultRemoteHostMustBeWildcard = 9,
            UpnpResultExtPortMustBeWildcard = 10,
            UpnpResultNoPortMapsAvailable = 11,
            UpnpResultConflictWithOtherMechanism = 12,
            UpnpResultConflictWithOtherMapping = 13,
            UpnpResultSamePortValuesRequired = 14,
            UpnpResultOnlyPermanentLeaseSupported = 15,
            UpnpResultInvalidGateway = 16,
            UpnpResultInvalidPort = 17,
            UpnpResultInvalidProtocol = 18,
            UpnpResultInvalidDuration = 19,
            UpnpResultInvalidArgs = 20,
            UpnpResultInvalidResponse = 21,
            UpnpResultInvalidParam = 22,
            UpnpResultHttpError = 23,
            UpnpResultSocketError = 24,
            UpnpResultMemAllocError = 25,
            UpnpResultNoGateway = 26,
            UpnpResultNoDevices = 27,
            UpnpResultUnknownError = 28,
        }
    }
    class Upnp extends RefCounted {
        static readonly UPNP_RESULT_SUCCESS = 0
        static readonly UPNP_RESULT_NOT_AUTHORIZED = 1
        static readonly UPNP_RESULT_PORT_MAPPING_NOT_FOUND = 2
        static readonly UPNP_RESULT_INCONSISTENT_PARAMETERS = 3
        static readonly UPNP_RESULT_NO_SUCH_ENTRY_IN_ARRAY = 4
        static readonly UPNP_RESULT_ACTION_FAILED = 5
        static readonly UPNP_RESULT_SRC_IP_WILDCARD_NOT_PERMITTED = 6
        static readonly UPNP_RESULT_EXT_PORT_WILDCARD_NOT_PERMITTED = 7
        static readonly UPNP_RESULT_INT_PORT_WILDCARD_NOT_PERMITTED = 8
        static readonly UPNP_RESULT_REMOTE_HOST_MUST_BE_WILDCARD = 9
        static readonly UPNP_RESULT_EXT_PORT_MUST_BE_WILDCARD = 10
        static readonly UPNP_RESULT_NO_PORT_MAPS_AVAILABLE = 11
        static readonly UPNP_RESULT_CONFLICT_WITH_OTHER_MECHANISM = 12
        static readonly UPNP_RESULT_CONFLICT_WITH_OTHER_MAPPING = 13
        static readonly UPNP_RESULT_SAME_PORT_VALUES_REQUIRED = 14
        static readonly UPNP_RESULT_ONLY_PERMANENT_LEASE_SUPPORTED = 15
        static readonly UPNP_RESULT_INVALID_GATEWAY = 16
        static readonly UPNP_RESULT_INVALID_PORT = 17
        static readonly UPNP_RESULT_INVALID_PROTOCOL = 18
        static readonly UPNP_RESULT_INVALID_DURATION = 19
        static readonly UPNP_RESULT_INVALID_ARGS = 20
        static readonly UPNP_RESULT_INVALID_RESPONSE = 21
        static readonly UPNP_RESULT_INVALID_PARAM = 22
        static readonly UPNP_RESULT_HTTP_ERROR = 23
        static readonly UPNP_RESULT_SOCKET_ERROR = 24
        static readonly UPNP_RESULT_MEM_ALLOC_ERROR = 25
        static readonly UPNP_RESULT_NO_GATEWAY = 26
        static readonly UPNP_RESULT_NO_DEVICES = 27
        static readonly UPNP_RESULT_UNKNOWN_ERROR = 28
        constructor(identifier?: any)
        getDeviceCount(): int64
        getDevice(index: int64): null | UpnpDevice
        addDevice(device: UpnpDevice): void
        setDevice(index: int64, device: UpnpDevice): void
        removeDevice(index: int64): void
        clearDevices(): void
        getGateway(): null | UpnpDevice
        discover(timeout?: int64 /* = 2000 */, ttl?: int64 /* = 2 */, deviceFilter?: string /* = 'InternetGatewayDevice' */): int64
        queryExternalAddress(): string
        addPortMapping(port: int64, portInternal?: int64 /* = 0 */, desc?: string /* = '' */, proto?: string /* = 'UDP' */, duration?: int64 /* = 0 */): int64
        deletePortMapping(port: int64, proto?: string /* = 'UDP' */): int64
        get discoverMulticastIf(): string
        set discoverMulticastIf(value: string)
        get discoverLocalPort(): int64
        set discoverLocalPort(value: int64)
        get discoverIpv6(): boolean
        set discoverIpv6(value: boolean)
    }
    namespace UpnpDevice {
        enum IgdStatus {
            IgdStatusOk = 0,
            IgdStatusHttpError = 1,
            IgdStatusHttpEmpty = 2,
            IgdStatusNoUrls = 3,
            IgdStatusNoIgd = 4,
            IgdStatusDisconnected = 5,
            IgdStatusUnknownDevice = 6,
            IgdStatusInvalidControl = 7,
            IgdStatusMallocError = 8,
            IgdStatusUnknownError = 9,
        }
    }
    class UpnpDevice extends RefCounted {
        static readonly IGD_STATUS_OK = 0
        static readonly IGD_STATUS_HTTP_ERROR = 1
        static readonly IGD_STATUS_HTTP_EMPTY = 2
        static readonly IGD_STATUS_NO_URLS = 3
        static readonly IGD_STATUS_NO_IGD = 4
        static readonly IGD_STATUS_DISCONNECTED = 5
        static readonly IGD_STATUS_UNKNOWN_DEVICE = 6
        static readonly IGD_STATUS_INVALID_CONTROL = 7
        static readonly IGD_STATUS_MALLOC_ERROR = 8
        static readonly IGD_STATUS_UNKNOWN_ERROR = 9
        constructor(identifier?: any)
        isValidGateway(): boolean
        queryExternalAddress(): string
        addPortMapping(port: int64, portInternal?: int64 /* = 0 */, desc?: string /* = '' */, proto?: string /* = 'UDP' */, duration?: int64 /* = 0 */): int64
        deletePortMapping(port: int64, proto?: string /* = 'UDP' */): int64
        get descriptionUrl(): string
        set descriptionUrl(value: string)
        get serviceType(): string
        set serviceType(value: string)
        get igdControlUrl(): string
        set igdControlUrl(value: string)
        get igdServiceType(): string
        set igdServiceType(value: string)
        get igdOurAddr(): string
        set igdOurAddr(value: string)
        get igdStatus(): int64
        set igdStatus(value: int64)
    }
    namespace UndoRedo {
        enum MergeMode {
            MergeDisable = 0,
            MergeEnds = 1,
            MergeAll = 2,
        }
    }
    /** Provides a high-level interface for implementing undo and redo operations.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_undoredo.html  
     */
    class UndoRedo extends GObject {
        /** Makes "do"/"undo" operations stay in separate actions. */
        static readonly MERGE_DISABLE = 0
        
        /** Merges this action with the previous one if they have the same name. Keeps only the first action's "undo" operations and the last action's "do" operations. Useful for sequential changes to a single value. */
        static readonly MERGE_ENDS = 1
        
        /** Merges this action with the previous one if they have the same name. */
        static readonly MERGE_ALL = 2
        constructor(identifier?: any)
        
        /** Create a new action. After this is called, do all your calls to [method add_do_method], [method add_undo_method], [method add_do_property], and [method add_undo_property], then commit the action with [method commit_action].  
         *  The way actions are merged is dictated by [param merge_mode]. See [enum MergeMode] for details.  
         *  The way undo operation are ordered in actions is dictated by [param backward_undo_ops]. When [param backward_undo_ops] is `false` undo option are ordered in the same order they were added. Which means the first operation to be added will be the first to be undone.  
         */
        createAction(name: string, mergeMode?: UndoRedo.MergeMode /* = 0 */, backwardUndoOps?: boolean /* = false */): void
        
        /** Commit the action. If [param execute] is `true` (which it is by default), all "do" methods/properties are called/set when this function is called. */
        commitAction(execute?: boolean /* = true */): void
        
        /** Returns `true` if the [UndoRedo] is currently committing the action, i.e. running its "do" method or property change (see [method commit_action]). */
        isCommittingAction(): boolean
        
        /** Register a [Callable] that will be called when the action is committed. */
        addDoMethod(callable: Callable): void
        
        /** Register a [Callable] that will be called when the action is undone. */
        addUndoMethod(callable: Callable): void
        
        /** Register a [param property] that would change its value to [param value] when the action is committed. */
        addDoProperty(object: GObject, property: StringName, value: any): void
        
        /** Register a [param property] that would change its value to [param value] when the action is undone. */
        addUndoProperty(object: GObject, property: StringName, value: any): void
        
        /** Register a reference to an object that will be erased if the "do" history is deleted. This is useful for objects added by the "do" action and removed by the "undo" action.  
         *  When the "do" history is deleted, if the object is a [RefCounted], it will be unreferenced. Otherwise, it will be freed. Do not use for resources.  
         *    
         */
        addDoReference(object: GObject): void
        
        /** Register a reference to an object that will be erased if the "undo" history is deleted. This is useful for objects added by the "undo" action and removed by the "do" action.  
         *  When the "undo" history is deleted, if the object is a [RefCounted], it will be unreferenced. Otherwise, it will be freed. Do not use for resources.  
         *    
         */
        addUndoReference(object: GObject): void
        
        /** Marks the next "do" and "undo" operations to be processed even if the action gets merged with another in the [constant MERGE_ENDS] mode. Return to normal operation using [method end_force_keep_in_merge_ends]. */
        startForceKeepInMergeEnds(): void
        
        /** Stops marking operations as to be processed even if the action gets merged with another in the [constant MERGE_ENDS] mode. See [method start_force_keep_in_merge_ends]. */
        endForceKeepInMergeEnds(): void
        
        /** Returns how many elements are in the history. */
        getHistoryCount(): int64
        
        /** Gets the index of the current action. */
        getCurrentAction(): int64
        
        /** Gets the action name from its index. */
        getActionName(id: int64): string
        
        /** Clear the undo/redo history and associated references.  
         *  Passing `false` to [param increase_version] will prevent the version number from increasing when the history is cleared.  
         */
        clearHistory(increaseVersion?: boolean /* = true */): void
        
        /** Gets the name of the current action, equivalent to `get_action_name(get_current_action())`. */
        getCurrentActionName(): string
        
        /** Returns `true` if an "undo" action is available. */
        hasUndo(): boolean
        
        /** Returns `true` if a "redo" action is available. */
        hasRedo(): boolean
        
        /** Gets the version. Every time a new action is committed, the [UndoRedo]'s version number is increased automatically.  
         *  This is useful mostly to check if something changed from a saved version.  
         */
        getVersion(): int64
        
        /** Redo the last action. */
        redo(): boolean
        
        /** Undo the last action. */
        undo(): boolean
        
        /** The maximum number of steps that can be stored in the undo/redo history. If the number of stored steps exceeds this limit, older steps are removed from history and can no longer be reached by calling [method undo]. A value of `0` or lower means no limit. */
        get maxSteps(): int64
        set maxSteps(value: int64)
        
        /** Called when [method undo] or [method redo] was called. */
        readonly versionChanged: Signal<() => void>
    }
    /** Uniform set cache manager for Rendering Device based renderers.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_uniformsetcacherd.html  
     */
    class UniformSetCacheRD extends GObject {
        constructor(identifier?: any)
        /** Creates/returns a cached uniform set based on the provided uniforms for a given shader. */
        static getCache(shader: Rid, set: int64, uniforms: GArray): Rid
    }
    /** A container that arranges its child controls vertically.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_vboxcontainer.html  
     */
    class VBoxContainer<Map extends NodePathMap = any> extends BoxContainer<Map> {
        constructor(identifier?: any)
    }
    /** A container that arranges its child controls vertically and wraps them around at the borders.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_vflowcontainer.html  
     */
    class VFlowContainer<Map extends NodePathMap = any> extends FlowContainer<Map> {
        constructor(identifier?: any)
    }
    /** A vertical scrollbar that goes from top (min) to bottom (max).  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_vscrollbar.html  
     */
    class VScrollBar<Map extends NodePathMap = any> extends ScrollBar<Map> {
        constructor(identifier?: any)
    }
    /** A vertical line used for separating other controls.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_vseparator.html  
     */
    class VSeparator<Map extends NodePathMap = any> extends Separator<Map> {
        constructor(identifier?: any)
    }
    /** A vertical slider that goes from bottom (min) to top (max).  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_vslider.html  
     */
    class VSlider<Map extends NodePathMap = any> extends Slider<Map> {
        constructor(identifier?: any)
    }
    /** A container that splits two child controls vertically and provides a grabber for adjusting the split ratio.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_vsplitcontainer.html  
     */
    class VSplitContainer<Map extends NodePathMap = any> extends SplitContainer<Map> {
        constructor(identifier?: any)
    }
    /** A 3D physics body that simulates the behavior of a car.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_vehiclebody3d.html  
     */
    class VehicleBody3D<Map extends NodePathMap = any> extends RigidBody3D<Map> {
        constructor(identifier?: any)
        /** Accelerates the vehicle by applying an engine force. The vehicle is only sped up if the wheels that have [member VehicleWheel3D.use_as_traction] set to `true` and are in contact with a surface. The [member RigidBody3D.mass] of the vehicle has an effect on the acceleration of the vehicle. For a vehicle with a mass set to 1000, try a value in the 25 - 50 range for acceleration.  
         *      
         *  **Note:** The simulation does not take the effect of gears into account, you will need to add logic for this if you wish to simulate gears.  
         *  A negative value will result in the vehicle reversing.  
         */
        get engineForce(): float64
        set engineForce(value: float64)
        
        /** Slows down the vehicle by applying a braking force. The vehicle is only slowed down if the wheels are in contact with a surface. The force you need to apply to adequately slow down your vehicle depends on the [member RigidBody3D.mass] of the vehicle. For a vehicle with a mass set to 1000, try a value in the 25 - 30 range for hard braking. */
        get brake(): float64
        set brake(value: float64)
        
        /** The steering angle for the vehicle. Setting this to a non-zero value will result in the vehicle turning when it's moving. Wheels that have [member VehicleWheel3D.use_as_steering] set to `true` will automatically be rotated.  
         *      
         *  **Note:** This property is edited in the inspector in degrees. In code the property is set in radians.  
         */
        get steering(): float64
        set steering(value: float64)
    }
    /** A 3D physics body for a [VehicleBody3D] that simulates the behavior of a wheel.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_vehiclewheel3d.html  
     */
    class VehicleWheel3D<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        /** Returns `true` if this wheel is in contact with a surface. */
        isInContact(): boolean
        
        /** Returns the contacting body node if valid in the tree, as [Node3D]. At the moment, [GridMap] is not supported so the node will be always of type [PhysicsBody3D].  
         *  Returns `null` if the wheel is not in contact with a surface, or the contact body is not a [PhysicsBody3D].  
         */
        getContactBody(): null | Node3D
        
        /** Returns the point of the suspension's collision in world space if the wheel is in contact. If the wheel isn't in contact with anything, returns the maximum point of the wheel's ray cast in world space, which is defined by `wheel_rest_length + wheel_radius`. */
        getContactPoint(): Vector3
        
        /** Returns the normal of the suspension's collision in world space if the wheel is in contact. If the wheel isn't in contact with anything, returns a vector pointing directly along the suspension axis toward the vehicle in world space. */
        getContactNormal(): Vector3
        
        /** Returns a value between 0.0 and 1.0 that indicates whether this wheel is skidding. 0.0 is skidding (the wheel has lost grip, e.g. icy terrain), 1.0 means not skidding (the wheel has full grip, e.g. dry asphalt road). */
        getSkidinfo(): float64
        
        /** Returns the rotational speed of the wheel in revolutions per minute. */
        getRpm(): float64
        
        /** Accelerates the wheel by applying an engine force. The wheel is only sped up if it is in contact with a surface. The [member RigidBody3D.mass] of the vehicle has an effect on the acceleration of the vehicle. For a vehicle with a mass set to 1000, try a value in the 25 - 50 range for acceleration.  
         *      
         *  **Note:** The simulation does not take the effect of gears into account, you will need to add logic for this if you wish to simulate gears.  
         *  A negative value will result in the wheel reversing.  
         */
        get engineForce(): float64
        set engineForce(value: float64)
        
        /** Slows down the wheel by applying a braking force. The wheel is only slowed down if it is in contact with a surface. The force you need to apply to adequately slow down your vehicle depends on the [member RigidBody3D.mass] of the vehicle. For a vehicle with a mass set to 1000, try a value in the 25 - 30 range for hard braking. */
        get brake(): float64
        set brake(value: float64)
        
        /** The steering angle for the wheel, in radians. Setting this to a non-zero value will result in the vehicle turning when it's moving. */
        get steering(): float64
        set steering(value: float64)
        
        /** If `true`, this wheel transfers engine force to the ground to propel the vehicle forward. This value is used in conjunction with [member VehicleBody3D.engine_force] and ignored if you are using the per-wheel [member engine_force] value instead. */
        get useAsTraction(): boolean
        set useAsTraction(value: boolean)
        
        /** If `true`, this wheel will be turned when the car steers. This value is used in conjunction with [member VehicleBody3D.steering] and ignored if you are using the per-wheel [member steering] value instead. */
        get useAsSteering(): boolean
        set useAsSteering(value: boolean)
        
        /** This value affects the roll of your vehicle. If set to 1.0 for all wheels, your vehicle will resist body roll, while a value of 0.0 will be prone to rolling over. */
        get wheelRollInfluence(): float64
        set wheelRollInfluence(value: float64)
        
        /** The radius of the wheel in meters. */
        get wheelRadius(): float64
        set wheelRadius(value: float64)
        
        /** This is the distance in meters the wheel is lowered from its origin point. Don't set this to 0.0 and move the wheel into position, instead move the origin point of your wheel (the gizmo in Godot) to the position the wheel will take when bottoming out, then use the rest length to move the wheel down to the position it should be in when the car is in rest. */
        get wheelRestLength(): float64
        set wheelRestLength(value: float64)
        
        /** This determines how much grip this wheel has. It is combined with the friction setting of the surface the wheel is in contact with. 0.0 means no grip, 1.0 is normal grip. For a drift car setup, try setting the grip of the rear wheels slightly lower than the front wheels, or use a lower value to simulate tire wear.  
         *  It's best to set this to 1.0 when starting out.  
         */
        get wheelFrictionSlip(): float64
        set wheelFrictionSlip(value: float64)
        
        /** This is the distance the suspension can travel. As Godot units are equivalent to meters, keep this setting relatively low. Try a value between 0.1 and 0.3 depending on the type of car. */
        get suspensionTravel(): float64
        set suspensionTravel(value: float64)
        
        /** The stiffness of the suspension, measured in Newtons per millimeter (N/mm), or megagrams per second squared (Mg/s²). Use a value lower than 50 for an off-road car, a value between 50 and 100 for a race car and try something around 200 for something like a Formula 1 car. */
        get suspensionStiffness(): float64
        set suspensionStiffness(value: float64)
        
        /** The maximum force the spring can resist. This value should be higher than a quarter of the [member RigidBody3D.mass] of the [VehicleBody3D] or the spring will not carry the weight of the vehicle. Good results are often obtained by a value that is about 3× to 4× this number. */
        get suspensionMaxForce(): float64
        set suspensionMaxForce(value: float64)
        
        /** The damping applied to the suspension spring when being compressed, meaning when the wheel is moving up relative to the vehicle. It is measured in Newton-seconds per millimeter (N⋅s/mm), or megagrams per second (Mg/s). This value should be between 0.0 (no damping) and 1.0, but may be more. A value of 0.0 means the car will keep bouncing as the spring keeps its energy. A good value for this is around 0.3 for a normal car, 0.5 for a race car. */
        get dampingCompression(): float64
        set dampingCompression(value: float64)
        
        /** The damping applied to the suspension spring when rebounding or extending, meaning when the wheel is moving down relative to the vehicle. It is measured in Newton-seconds per millimeter (N⋅s/mm), or megagrams per second (Mg/s). This value should be between 0.0 (no damping) and 1.0, but may be more. This value should always be slightly higher than the [member damping_compression] property. For a [member damping_compression] value of 0.3, try a relaxation value of 0.5. */
        get dampingRelaxation(): float64
        set dampingRelaxation(value: float64)
    }
    /** Base resource for video streams.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_videostream.html  
     */
    class VideoStream extends Resource {
        constructor(identifier?: any)
        /** Called when the video starts playing, to initialize and return a subclass of [VideoStreamPlayback]. */
        /* gdvirtual */ _instantiatePlayback(): null | VideoStreamPlayback
        
        /** The video file path or URI that this [VideoStream] resource handles.  
         *  For [VideoStreamTheora], this filename should be an Ogg Theora video file with the `.ogv` extension.  
         */
        get file(): string
        set file(value: string)
    }
    /** Internal class used by [VideoStream] to manage playback state when played from a [VideoStreamPlayer].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_videostreamplayback.html  
     */
    class VideoStreamPlayback extends Resource {
        constructor(identifier?: any)
        /** Stops playback. May be called multiple times before [method _play], or in response to [method VideoStreamPlayer.stop]. [method _is_playing] should return `false` once stopped. */
        /* gdvirtual */ _stop(): void
        
        /** Called in response to [member VideoStreamPlayer.autoplay] or [method VideoStreamPlayer.play]. Note that manual playback may also invoke [method _stop] multiple times before this method is called. [method _is_playing] should return `true` once playing. */
        /* gdvirtual */ _play(): void
        
        /** Returns the playback state, as determined by calls to [method _play] and [method _stop]. */
        /* gdvirtual */ _isPlaying(): boolean
        
        /** Set the paused status of video playback. [method _is_paused] must return [param paused]. Called in response to the [member VideoStreamPlayer.paused] setter. */
        /* gdvirtual */ _setPaused(paused: boolean): void
        
        /** Returns the paused status, as set by [method _set_paused]. */
        /* gdvirtual */ _isPaused(): boolean
        
        /** Returns the video duration in seconds, if known, or 0 if unknown. */
        /* gdvirtual */ _getLength(): float64
        
        /** Return the current playback timestamp. Called in response to the [member VideoStreamPlayer.stream_position] getter. */
        /* gdvirtual */ _getPlaybackPosition(): float64
        
        /** Seeks to [param time] seconds. Called in response to the [member VideoStreamPlayer.stream_position] setter. */
        /* gdvirtual */ _seek(time: float64): void
        
        /** Select the audio track [param idx]. Called when playback starts, and in response to the [member VideoStreamPlayer.audio_track] setter. */
        /* gdvirtual */ _setAudioTrack(idx: int64): void
        
        /** Allocates a [Texture2D] in which decoded video frames will be drawn. */
        /* gdvirtual */ _getTexture(): null | Texture2D
        
        /** Ticks video playback for [param delta] seconds. Called every frame as long as both [method _is_paused] and [method _is_playing] return `true`. */
        /* gdvirtual */ _update(delta: float64): void
        
        /** Returns the number of audio channels. */
        /* gdvirtual */ _getChannels(): int64
        
        /** Returns the audio sample rate used for mixing. */
        /* gdvirtual */ _getMixRate(): int64
        
        /** Render [param num_frames] audio frames (of [method _get_channels] floats each) from [param buffer], starting from index [param offset] in the array. Returns the number of audio frames rendered, or -1 on error. */
        mixAudio(numFrames: int64, buffer?: PackedFloat32Array | float32[] /* = [] */, offset?: int64 /* = 0 */): int64
    }
    /** A control used for video playback.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_videostreamplayer.html  
     */
    class VideoStreamPlayer<Map extends NodePathMap = any> extends Control<Map> {
        constructor(identifier?: any)
        /** Starts the video playback from the beginning. If the video is paused, this will not unpause the video. */
        play(): void
        
        /** Stops the video playback and sets the stream position to 0.  
         *      
         *  **Note:** Although the stream position will be set to 0, the first frame of the video stream won't become the current frame.  
         */
        stop(): void
        
        /** Returns `true` if the video is playing.  
         *      
         *  **Note:** The video is still considered playing if paused during playback.  
         */
        isPlaying(): boolean
        
        /** Returns the video stream's name, or `"<No Stream>"` if no video stream is assigned. */
        getStreamName(): string
        
        /** The length of the current stream, in seconds. */
        getStreamLength(): float64
        
        /** Returns the current frame as a [Texture2D]. */
        getVideoTexture(): null | Texture2D
        
        /** The embedded audio track to play. */
        get audioTrack(): int64
        set audioTrack(value: int64)
        
        /** The assigned video stream. See description for supported formats. */
        get stream(): null | VideoStream
        set stream(value: null | VideoStream)
        
        /** Audio volume in dB. */
        get volumeDb(): float64
        set volumeDb(value: float64)
        
        /** Audio volume as a linear value. */
        get volume(): float64
        set volume(value: float64)
        
        /** If `true`, playback starts when the scene loads. */
        get autoplay(): boolean
        set autoplay(value: boolean)
        
        /** If `true`, the video is paused. */
        get paused(): boolean
        set paused(value: boolean)
        
        /** If `true`, the video scales to the control size. Otherwise, the control minimum size will be automatically adjusted to match the video stream's dimensions. */
        get expand(): boolean
        set expand(value: boolean)
        
        /** If `true`, the video restarts when it reaches its end. */
        get loop(): boolean
        set loop(value: boolean)
        
        /** Amount of time in milliseconds to store in buffer while playing. */
        get bufferingMsec(): int64
        set bufferingMsec(value: int64)
        
        /** The current position of the stream, in seconds. */
        get streamPosition(): float64
        set streamPosition(value: float64)
        
        /** Audio bus to use for sound playback. */
        get bus(): StringName
        set bus(value: StringName)
        
        /** Emitted when playback is finished. */
        readonly finished: Signal<() => void>
    }
    /** [VideoStream] resource for Ogg Theora videos.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_videostreamtheora.html  
     */
    class VideoStreamTheora extends VideoStream {
        constructor(identifier?: any)
    }
    namespace Viewport {
        enum PositionalShadowAtlasQuadrantSubdiv {
            ShadowAtlasQuadrantSubdivDisabled = 0,
            ShadowAtlasQuadrantSubdiv1 = 1,
            ShadowAtlasQuadrantSubdiv4 = 2,
            ShadowAtlasQuadrantSubdiv16 = 3,
            ShadowAtlasQuadrantSubdiv64 = 4,
            ShadowAtlasQuadrantSubdiv256 = 5,
            ShadowAtlasQuadrantSubdiv1024 = 6,
            ShadowAtlasQuadrantSubdivMax = 7,
        }
        enum Scaling3DMode {
            Scaling3DModeBilinear = 0,
            Scaling3DModeFsr = 1,
            Scaling3DModeFsr2 = 2,
            Scaling3DModeMetalfxSpatial = 3,
            Scaling3DModeMetalfxTemporal = 4,
            Scaling3DModeMax = 5,
        }
        enum Msaa {
            MsaaDisabled = 0,
            Msaa2X = 1,
            Msaa4X = 2,
            Msaa8X = 3,
            MsaaMax = 4,
        }
        enum AnisotropicFiltering {
            AnisotropyDisabled = 0,
            Anisotropy2X = 1,
            Anisotropy4X = 2,
            Anisotropy8X = 3,
            Anisotropy16X = 4,
            AnisotropyMax = 5,
        }
        enum ScreenSpaceAA {
            ScreenSpaceAADisabled = 0,
            ScreenSpaceAAFxaa = 1,
            ScreenSpaceAAMax = 2,
        }
        enum RenderInfo {
            RenderInfoObjectsInFrame = 0,
            RenderInfoPrimitivesInFrame = 1,
            RenderInfoDrawCallsInFrame = 2,
            RenderInfoMax = 3,
        }
        enum RenderInfoType {
            RenderInfoTypeVisible = 0,
            RenderInfoTypeShadow = 1,
            RenderInfoTypeCanvas = 2,
            RenderInfoTypeMax = 3,
        }
        enum DebugDraw {
            DebugDrawDisabled = 0,
            DebugDrawUnshaded = 1,
            DebugDrawLighting = 2,
            DebugDrawOverdraw = 3,
            DebugDrawWireframe = 4,
            DebugDrawNormalBuffer = 5,
            DebugDrawVoxelGIAlbedo = 6,
            DebugDrawVoxelGILighting = 7,
            DebugDrawVoxelGIEmission = 8,
            DebugDrawShadowAtlas = 9,
            DebugDrawDirectionalShadowAtlas = 10,
            DebugDrawSceneLuminance = 11,
            DebugDrawSsao = 12,
            DebugDrawSsil = 13,
            DebugDrawPssmSplits = 14,
            DebugDrawDecalAtlas = 15,
            DebugDrawSdfgi = 16,
            DebugDrawSdfgiProbes = 17,
            DebugDrawGIBuffer = 18,
            DebugDrawDisableLod = 19,
            DebugDrawClusterOmniLights = 20,
            DebugDrawClusterSpotLights = 21,
            DebugDrawClusterDecals = 22,
            DebugDrawClusterReflectionProbes = 23,
            DebugDrawOccluders = 24,
            DebugDrawMotionVectors = 25,
            DebugDrawInternalBuffer = 26,
        }
        enum DefaultCanvasItemTextureFilter {
            DefaultCanvasItemTextureFilterNearest = 0,
            DefaultCanvasItemTextureFilterLinear = 1,
            DefaultCanvasItemTextureFilterLinearWithMipmaps = 2,
            DefaultCanvasItemTextureFilterNearestWithMipmaps = 3,
            DefaultCanvasItemTextureFilterMax = 4,
        }
        enum DefaultCanvasItemTextureRepeat {
            DefaultCanvasItemTextureRepeatDisabled = 0,
            DefaultCanvasItemTextureRepeatEnabled = 1,
            DefaultCanvasItemTextureRepeatMirror = 2,
            DefaultCanvasItemTextureRepeatMax = 3,
        }
        enum SdfOversize {
            SdfOversize100Percent = 0,
            SdfOversize120Percent = 1,
            SdfOversize150Percent = 2,
            SdfOversize200Percent = 3,
            SdfOversizeMax = 4,
        }
        enum SdfScale {
            SdfScale100Percent = 0,
            SdfScale50Percent = 1,
            SdfScale25Percent = 2,
            SdfScaleMax = 3,
        }
        enum VrsMode {
            VrsDisabled = 0,
            VrsTexture = 1,
            VrsXR = 2,
            VrsMax = 3,
        }
        enum VrsUpdateMode {
            VrsUpdateDisabled = 0,
            VrsUpdateOnce = 1,
            VrsUpdateAlways = 2,
            VrsUpdateMax = 3,
        }
    }
    /** Abstract base class for viewports. Encapsulates drawing and interaction with a game world.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_viewport.html  
     */
    class Viewport<Map extends NodePathMap = any> extends Node<Map> {
        /** This quadrant will not be used. */
        static readonly SHADOW_ATLAS_QUADRANT_SUBDIV_DISABLED = 0
        
        /** This quadrant will only be used by one shadow map. */
        static readonly SHADOW_ATLAS_QUADRANT_SUBDIV_1 = 1
        
        /** This quadrant will be split in 4 and used by up to 4 shadow maps. */
        static readonly SHADOW_ATLAS_QUADRANT_SUBDIV_4 = 2
        
        /** This quadrant will be split 16 ways and used by up to 16 shadow maps. */
        static readonly SHADOW_ATLAS_QUADRANT_SUBDIV_16 = 3
        
        /** This quadrant will be split 64 ways and used by up to 64 shadow maps. */
        static readonly SHADOW_ATLAS_QUADRANT_SUBDIV_64 = 4
        
        /** This quadrant will be split 256 ways and used by up to 256 shadow maps. Unless the [member positional_shadow_atlas_size] is very high, the shadows in this quadrant will be very low resolution. */
        static readonly SHADOW_ATLAS_QUADRANT_SUBDIV_256 = 5
        
        /** This quadrant will be split 1024 ways and used by up to 1024 shadow maps. Unless the [member positional_shadow_atlas_size] is very high, the shadows in this quadrant will be very low resolution. */
        static readonly SHADOW_ATLAS_QUADRANT_SUBDIV_1024 = 6
        
        /** Represents the size of the [enum PositionalShadowAtlasQuadrantSubdiv] enum. */
        static readonly SHADOW_ATLAS_QUADRANT_SUBDIV_MAX = 7
        
        /** Use bilinear scaling for the viewport's 3D buffer. The amount of scaling can be set using [member scaling_3d_scale]. Values less than `1.0` will result in undersampling while values greater than `1.0` will result in supersampling. A value of `1.0` disables scaling. */
        static readonly SCALING_3D_MODE_BILINEAR = 0
        
        /** Use AMD FidelityFX Super Resolution 1.0 upscaling for the viewport's 3D buffer. The amount of scaling can be set using [member scaling_3d_scale]. Values less than `1.0` will result in the viewport being upscaled using FSR. Values greater than `1.0` are not supported and bilinear downsampling will be used instead. A value of `1.0` disables scaling. */
        static readonly SCALING_3D_MODE_FSR = 1
        
        /** Use AMD FidelityFX Super Resolution 2.2 upscaling for the viewport's 3D buffer. The amount of scaling can be set using [member Viewport.scaling_3d_scale]. Values less than `1.0` will result in the viewport being upscaled using FSR2. Values greater than `1.0` are not supported and bilinear downsampling will be used instead. A value of `1.0` will use FSR2 at native resolution as a TAA solution. */
        static readonly SCALING_3D_MODE_FSR2 = 2
        
        /** Use the [url=https://developer.apple.com/documentation/metalfx/mtlfxspatialscaler#overview]MetalFX spatial upscaler[/url] for the viewport's 3D buffer.  
         *  The amount of scaling can be set using [member scaling_3d_scale].  
         *  Values less than `1.0` will result in the viewport being upscaled using MetalFX. Values greater than `1.0` are not supported and bilinear downsampling will be used instead. A value of `1.0` disables scaling.  
         *  More information: [url=https://developer.apple.com/documentation/metalfx]MetalFX[/url].  
         *      
         *  **Note:** Only supported when the Metal rendering driver is in use, which limits this scaling mode to macOS and iOS.  
         */
        static readonly SCALING_3D_MODE_METALFX_SPATIAL = 3
        
        /** Use the [url=https://developer.apple.com/documentation/metalfx/mtlfxtemporalscaler#overview]MetalFX temporal upscaler[/url] for the viewport's 3D buffer.  
         *  The amount of scaling can be set using [member scaling_3d_scale]. To determine the minimum input scale, use the [method RenderingDevice.limit_get] method with [constant RenderingDevice.LIMIT_METALFX_TEMPORAL_SCALER_MIN_SCALE].  
         *  Values less than `1.0` will result in the viewport being upscaled using MetalFX. Values greater than `1.0` are not supported and bilinear downsampling will be used instead. A value of `1.0` will use MetalFX at native resolution as a TAA solution.  
         *  More information: [url=https://developer.apple.com/documentation/metalfx]MetalFX[/url].  
         *      
         *  **Note:** Only supported when the Metal rendering driver is in use, which limits this scaling mode to macOS and iOS.  
         */
        static readonly SCALING_3D_MODE_METALFX_TEMPORAL = 4
        
        /** Represents the size of the [enum Scaling3DMode] enum. */
        static readonly SCALING_3D_MODE_MAX = 5
        
        /** Multisample antialiasing mode disabled. This is the default value, and is also the fastest setting. */
        static readonly MSAA_DISABLED = 0
        
        /** Use 2× Multisample Antialiasing. This has a moderate performance cost. It helps reduce aliasing noticeably, but 4× MSAA still looks substantially better. */
        static readonly MSAA_2X = 1
        
        /** Use 4× Multisample Antialiasing. This has a significant performance cost, and is generally a good compromise between performance and quality. */
        static readonly MSAA_4X = 2
        
        /** Use 8× Multisample Antialiasing. This has a very high performance cost. The difference between 4× and 8× MSAA may not always be visible in real gameplay conditions. Likely unsupported on low-end and older hardware. */
        static readonly MSAA_8X = 3
        
        /** Represents the size of the [enum MSAA] enum. */
        static readonly MSAA_MAX = 4
        
        /** Anisotropic filtering is disabled. */
        static readonly ANISOTROPY_DISABLED = 0
        
        /** Use 2× anisotropic filtering. */
        static readonly ANISOTROPY_2X = 1
        
        /** Use 4× anisotropic filtering. This is the default value. */
        static readonly ANISOTROPY_4X = 2
        
        /** Use 8× anisotropic filtering. */
        static readonly ANISOTROPY_8X = 3
        
        /** Use 16× anisotropic filtering. */
        static readonly ANISOTROPY_16X = 4
        
        /** Represents the size of the [enum AnisotropicFiltering] enum. */
        static readonly ANISOTROPY_MAX = 5
        
        /** Do not perform any antialiasing in the full screen post-process. */
        static readonly SCREEN_SPACE_AA_DISABLED = 0
        
        /** Use fast approximate antialiasing. FXAA is a popular screen-space antialiasing method, which is fast but will make the image look blurry, especially at lower resolutions. It can still work relatively well at large resolutions such as 1440p and 4K. */
        static readonly SCREEN_SPACE_AA_FXAA = 1
        
        /** Represents the size of the [enum ScreenSpaceAA] enum. */
        static readonly SCREEN_SPACE_AA_MAX = 2
        
        /** Amount of objects in frame. */
        static readonly RENDER_INFO_OBJECTS_IN_FRAME = 0
        
        /** Amount of vertices in frame. */
        static readonly RENDER_INFO_PRIMITIVES_IN_FRAME = 1
        
        /** Amount of draw calls in frame. */
        static readonly RENDER_INFO_DRAW_CALLS_IN_FRAME = 2
        
        /** Represents the size of the [enum RenderInfo] enum. */
        static readonly RENDER_INFO_MAX = 3
        
        /** Visible render pass (excluding shadows). */
        static readonly RENDER_INFO_TYPE_VISIBLE = 0
        
        /** Shadow render pass. Objects will be rendered several times depending on the number of amounts of lights with shadows and the number of directional shadow splits. */
        static readonly RENDER_INFO_TYPE_SHADOW = 1
        
        /** Canvas item rendering. This includes all 2D rendering. */
        static readonly RENDER_INFO_TYPE_CANVAS = 2
        
        /** Represents the size of the [enum RenderInfoType] enum. */
        static readonly RENDER_INFO_TYPE_MAX = 3
        
        /** Objects are displayed normally. */
        static readonly DEBUG_DRAW_DISABLED = 0
        
        /** Objects are displayed without light information. */
        static readonly DEBUG_DRAW_UNSHADED = 1
        
        /** Objects are displayed without textures and only with lighting information.  
         *      
         *  **Note:** When using this debug draw mode, custom shaders are ignored since all materials in the scene temporarily use a debug material. This means the result from custom shader functions (such as vertex displacement) won't be visible anymore when using this debug draw mode.  
         */
        static readonly DEBUG_DRAW_LIGHTING = 2
        
        /** Objects are displayed semi-transparent with additive blending so you can see where they are drawing over top of one another. A higher overdraw means you are wasting performance on drawing pixels that are being hidden behind others.  
         *      
         *  **Note:** When using this debug draw mode, custom shaders are ignored since all materials in the scene temporarily use a debug material. This means the result from custom shader functions (such as vertex displacement) won't be visible anymore when using this debug draw mode.  
         */
        static readonly DEBUG_DRAW_OVERDRAW = 3
        
        /** Objects are displayed as wireframe models.  
         *      
         *  **Note:** [method RenderingServer.set_debug_generate_wireframes] must be called before loading any meshes for wireframes to be visible when using the Compatibility renderer.  
         */
        static readonly DEBUG_DRAW_WIREFRAME = 4
        
        /** Objects are displayed without lighting information and their textures replaced by normal mapping.  
         *      
         *  **Note:** Only supported when using the Forward+ rendering method.  
         */
        static readonly DEBUG_DRAW_NORMAL_BUFFER = 5
        
        /** Objects are displayed with only the albedo value from [VoxelGI]s. Requires at least one visible [VoxelGI] node that has been baked to have a visible effect.  
         *      
         *  **Note:** Only supported when using the Forward+ rendering method.  
         */
        static readonly DEBUG_DRAW_VOXEL_GI_ALBEDO = 6
        
        /** Objects are displayed with only the lighting value from [VoxelGI]s. Requires at least one visible [VoxelGI] node that has been baked to have a visible effect.  
         *      
         *  **Note:** Only supported when using the Forward+ rendering method.  
         */
        static readonly DEBUG_DRAW_VOXEL_GI_LIGHTING = 7
        
        /** Objects are displayed with only the emission color from [VoxelGI]s. Requires at least one visible [VoxelGI] node that has been baked to have a visible effect.  
         *      
         *  **Note:** Only supported when using the Forward+ rendering method.  
         */
        static readonly DEBUG_DRAW_VOXEL_GI_EMISSION = 8
        
        /** Draws the shadow atlas that stores shadows from [OmniLight3D]s and [SpotLight3D]s in the upper left quadrant of the [Viewport]. */
        static readonly DEBUG_DRAW_SHADOW_ATLAS = 9
        
        /** Draws the shadow atlas that stores shadows from [DirectionalLight3D]s in the upper left quadrant of the [Viewport]. */
        static readonly DEBUG_DRAW_DIRECTIONAL_SHADOW_ATLAS = 10
        
        /** Draws the scene luminance buffer (if available) in the upper left quadrant of the [Viewport].  
         *      
         *  **Note:** Only supported when using the Forward+ or Mobile rendering methods.  
         */
        static readonly DEBUG_DRAW_SCENE_LUMINANCE = 11
        
        /** Draws the screen-space ambient occlusion texture instead of the scene so that you can clearly see how it is affecting objects. In order for this display mode to work, you must have [member Environment.ssao_enabled] set in your [WorldEnvironment].  
         *      
         *  **Note:** Only supported when using the Forward+ rendering method.  
         */
        static readonly DEBUG_DRAW_SSAO = 12
        
        /** Draws the screen-space indirect lighting texture instead of the scene so that you can clearly see how it is affecting objects. In order for this display mode to work, you must have [member Environment.ssil_enabled] set in your [WorldEnvironment].  
         *      
         *  **Note:** Only supported when using the Forward+ rendering method.  
         */
        static readonly DEBUG_DRAW_SSIL = 13
        
        /** Colors each PSSM split for the [DirectionalLight3D]s in the scene a different color so you can see where the splits are. In order (from closest to furthest from the camera), they are colored red, green, blue, and yellow.  
         *      
         *  **Note:** When using this debug draw mode, custom shaders are ignored since all materials in the scene temporarily use a debug material. This means the result from custom shader functions (such as vertex displacement) won't be visible anymore when using this debug draw mode.  
         *      
         *  **Note:** Only supported when using the Forward+ or Mobile rendering methods.  
         */
        static readonly DEBUG_DRAW_PSSM_SPLITS = 14
        
        /** Draws the decal atlas used by [Decal]s and light projector textures in the upper left quadrant of the [Viewport].  
         *      
         *  **Note:** Only supported when using the Forward+ or Mobile rendering methods.  
         */
        static readonly DEBUG_DRAW_DECAL_ATLAS = 15
        
        /** Draws the cascades used to render signed distance field global illumination (SDFGI).  
         *  Does nothing if the current environment's [member Environment.sdfgi_enabled] is `false`.  
         *      
         *  **Note:** Only supported when using the Forward+ rendering method.  
         */
        static readonly DEBUG_DRAW_SDFGI = 16
        
        /** Draws the probes used for signed distance field global illumination (SDFGI).  
         *  Does nothing if the current environment's [member Environment.sdfgi_enabled] is `false`.  
         *      
         *  **Note:** Only supported when using the Forward+ rendering method.  
         */
        static readonly DEBUG_DRAW_SDFGI_PROBES = 17
        
        /** Draws the buffer used for global illumination from [VoxelGI] or SDFGI. Requires [VoxelGI] (at least one visible baked VoxelGI node) or SDFGI ([member Environment.sdfgi_enabled]) to be enabled to have a visible effect.  
         *      
         *  **Note:** Only supported when using the Forward+ rendering method.  
         */
        static readonly DEBUG_DRAW_GI_BUFFER = 18
        
        /** Draws all of the objects at their highest polycount regardless of their distance from the camera. No low level of detail (LOD) is applied. */
        static readonly DEBUG_DRAW_DISABLE_LOD = 19
        
        /** Draws the cluster used by [OmniLight3D] nodes to optimize light rendering.  
         *      
         *  **Note:** Only supported when using the Forward+ rendering method.  
         */
        static readonly DEBUG_DRAW_CLUSTER_OMNI_LIGHTS = 20
        
        /** Draws the cluster used by [SpotLight3D] nodes to optimize light rendering.  
         *      
         *  **Note:** Only supported when using the Forward+ rendering method.  
         */
        static readonly DEBUG_DRAW_CLUSTER_SPOT_LIGHTS = 21
        
        /** Draws the cluster used by [Decal] nodes to optimize decal rendering.  
         *      
         *  **Note:** Only supported when using the Forward+ rendering method.  
         */
        static readonly DEBUG_DRAW_CLUSTER_DECALS = 22
        
        /** Draws the cluster used by [ReflectionProbe] nodes to optimize decal rendering.  
         *      
         *  **Note:** Only supported when using the Forward+ rendering method.  
         */
        static readonly DEBUG_DRAW_CLUSTER_REFLECTION_PROBES = 23
        
        /** Draws the buffer used for occlusion culling.  
         *      
         *  **Note:** Only supported when using the Forward+ or Mobile rendering methods.  
         */
        static readonly DEBUG_DRAW_OCCLUDERS = 24
        
        /** Draws vector lines over the viewport to indicate the movement of pixels between frames.  
         *      
         *  **Note:** Only supported when using the Forward+ rendering method.  
         */
        static readonly DEBUG_DRAW_MOTION_VECTORS = 25
        
        /** Draws the internal resolution buffer of the scene in linear colorspace before tonemapping or post-processing is applied.  
         *      
         *  **Note:** Only supported when using the Forward+ or Mobile rendering methods.  
         */
        static readonly DEBUG_DRAW_INTERNAL_BUFFER = 26
        
        /** The texture filter reads from the nearest pixel only. This makes the texture look pixelated from up close, and grainy from a distance (due to mipmaps not being sampled). */
        static readonly DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_NEAREST = 0
        
        /** The texture filter blends between the nearest 4 pixels. This makes the texture look smooth from up close, and grainy from a distance (due to mipmaps not being sampled). */
        static readonly DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_LINEAR = 1
        
        /** The texture filter blends between the nearest 4 pixels and between the nearest 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`). This makes the texture look smooth from up close, and smooth from a distance.  
         *  Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to [Camera2D] zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.  
         */
        static readonly DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_LINEAR_WITH_MIPMAPS = 2
        
        /** The texture filter reads from the nearest pixel and blends between the nearest 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`). This makes the texture look pixelated from up close, and smooth from a distance.  
         *  Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to [Camera2D] zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.  
         */
        static readonly DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_NEAREST_WITH_MIPMAPS = 3
        
        /** Represents the size of the [enum DefaultCanvasItemTextureFilter] enum. */
        static readonly DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_MAX = 4
        
        /** Disables textures repeating. Instead, when reading UVs outside the 0-1 range, the value will be clamped to the edge of the texture, resulting in a stretched out look at the borders of the texture. */
        static readonly DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_DISABLED = 0
        
        /** Enables the texture to repeat when UV coordinates are outside the 0-1 range. If using one of the linear filtering modes, this can result in artifacts at the edges of a texture when the sampler filters across the edges of the texture. */
        static readonly DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_ENABLED = 1
        
        /** Flip the texture when repeating so that the edge lines up instead of abruptly changing. */
        static readonly DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_MIRROR = 2
        
        /** Represents the size of the [enum DefaultCanvasItemTextureRepeat] enum. */
        static readonly DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_MAX = 3
        
        /** The signed distance field only covers the viewport's own rectangle. */
        static readonly SDF_OVERSIZE_100_PERCENT = 0
        
        /** The signed distance field is expanded to cover 20% of the viewport's size around the borders. */
        static readonly SDF_OVERSIZE_120_PERCENT = 1
        
        /** The signed distance field is expanded to cover 50% of the viewport's size around the borders. */
        static readonly SDF_OVERSIZE_150_PERCENT = 2
        
        /** The signed distance field is expanded to cover 100% (double) of the viewport's size around the borders. */
        static readonly SDF_OVERSIZE_200_PERCENT = 3
        
        /** Represents the size of the [enum SDFOversize] enum. */
        static readonly SDF_OVERSIZE_MAX = 4
        
        /** The signed distance field is rendered at full resolution. */
        static readonly SDF_SCALE_100_PERCENT = 0
        
        /** The signed distance field is rendered at half the resolution of this viewport. */
        static readonly SDF_SCALE_50_PERCENT = 1
        
        /** The signed distance field is rendered at a quarter the resolution of this viewport. */
        static readonly SDF_SCALE_25_PERCENT = 2
        
        /** Represents the size of the [enum SDFScale] enum. */
        static readonly SDF_SCALE_MAX = 3
        
        /** Variable Rate Shading is disabled. */
        static readonly VRS_DISABLED = 0
        
        /** Variable Rate Shading uses a texture. Note, for stereoscopic use a texture atlas with a texture for each view. */
        static readonly VRS_TEXTURE = 1
        
        /** Variable Rate Shading's texture is supplied by the primary [XRInterface]. */
        static readonly VRS_XR = 2
        
        /** Represents the size of the [enum VRSMode] enum. */
        static readonly VRS_MAX = 3
        
        /** The input texture for variable rate shading will not be processed. */
        static readonly VRS_UPDATE_DISABLED = 0
        
        /** The input texture for variable rate shading will be processed once. */
        static readonly VRS_UPDATE_ONCE = 1
        
        /** The input texture for variable rate shading will be processed each frame. */
        static readonly VRS_UPDATE_ALWAYS = 2
        
        /** Represents the size of the [enum VRSUpdateMode] enum. */
        static readonly VRS_UPDATE_MAX = 3
        constructor(identifier?: any)
        
        /** Returns the first valid [World2D] for this viewport, searching the [member world_2d] property of itself and any Viewport ancestor. */
        findWorld2D(): null | World2D
        
        /** Returns the automatically computed 2D stretch transform, taking the [Viewport]'s stretch settings into account. The final value is multiplied by [member Window.content_scale_factor], but only for the root viewport. If this method is called on a [SubViewport] (e.g., in a scene tree with [SubViewportContainer] and [SubViewport]), the scale factor of the root window will not be applied. Using [method Transform2D.get_scale] on the returned value, this can be used to compensate for scaling when zooming a [Camera2D] node, or to scale down a [TextureRect] to be pixel-perfect regardless of the automatically computed scale factor.  
         *      
         *  **Note:** Due to how pixel scaling works, the returned transform's X and Y scale may differ slightly, even when [member Window.content_scale_aspect] is set to a mode that preserves the pixels' aspect ratio. If [member Window.content_scale_aspect] is [constant Window.CONTENT_SCALE_ASPECT_IGNORE], the X and Y scale may differ  *significantly* .  
         */
        getStretchTransform(): Transform2D
        
        /** Returns the transform from the viewport's coordinate system to the embedder's coordinate system. */
        getFinalTransform(): Transform2D
        
        /** Returns the transform from the Viewport's coordinates to the screen coordinates of the containing window manager window. */
        getScreenTransform(): Transform2D
        
        /** Returns the visible rectangle in global screen coordinates. */
        getVisibleRect(): Rect2
        
        /** Returns viewport oversampling factor. */
        getOversampling(): float64
        
        /** Returns rendering statistics of the given type. See [enum RenderInfoType] and [enum RenderInfo] for options. */
        getRenderInfo(type: Viewport.RenderInfoType, info: Viewport.RenderInfo): int64
        
        /** Returns the viewport's texture.  
         *      
         *  **Note:** When trying to store the current texture (e.g. in a file), it might be completely black or outdated if used too early, especially when used in e.g. [method Node._ready]. To make sure the texture you get is correct, you can await [signal RenderingServer.frame_post_draw] signal.  
         *    
         *      
         *  **Note:** When [member use_hdr_2d] is `true` the returned texture will be an HDR image encoded in linear space.  
         */
        getTexture(): null | ViewportTexture
        
        /** Returns the viewport's RID from the [RenderingServer]. */
        getViewportRid(): Rid
        
        /** Helper method which calls the `set_text()` method on the currently focused [Control], provided that it is defined (e.g. if the focused Control is [Button] or [LineEdit]). */
        pushTextInput(text: string): void
        
        /** Triggers the given [param event] in this [Viewport]. This can be used to pass an [InputEvent] between viewports, or to locally apply inputs that were sent over the network or saved to a file.  
         *  If [param in_local_coords] is `false`, the event's position is in the embedder's coordinates and will be converted to viewport coordinates. If [param in_local_coords] is `true`, the event's position is in viewport coordinates.  
         *  While this method serves a similar purpose as [method Input.parse_input_event], it does not remap the specified [param event] based on project settings like [member ProjectSettings.input_devices/pointing/emulate_touch_from_mouse].  
         *  Calling this method will propagate calls to child nodes for following methods in the given order:  
         *  - [method Node._input]  
         *  - [method Control._gui_input] for [Control] nodes  
         *  - [method Node._shortcut_input]  
         *  - [method Node._unhandled_key_input]  
         *  - [method Node._unhandled_input]  
         *  If an earlier method marks the input as handled via [method set_input_as_handled], any later method in this list will not be called.  
         *  If none of the methods handle the event and [member physics_object_picking] is `true`, the event is used for physics object picking.  
         */
        pushInput(event: InputEvent, inLocalCoords?: boolean /* = false */): void
        
        /** Triggers the given [param event] in this [Viewport]. This can be used to pass an [InputEvent] between viewports, or to locally apply inputs that were sent over the network or saved to a file.  
         *  If [param in_local_coords] is `false`, the event's position is in the embedder's coordinates and will be converted to viewport coordinates. If [param in_local_coords] is `true`, the event's position is in viewport coordinates.  
         *  Calling this method will propagate calls to child nodes for following methods in the given order:  
         *  - [method Node._shortcut_input]  
         *  - [method Node._unhandled_key_input]  
         *  - [method Node._unhandled_input]  
         *  If an earlier method marks the input as handled via [method set_input_as_handled], any later method in this list will not be called.  
         *  If none of the methods handle the event and [member physics_object_picking] is `true`, the event is used for physics object picking.  
         *      
         *  **Note:** This method doesn't propagate input events to embedded [Window]s or [SubViewport]s.  
         */
        pushUnhandledInput(event: InputEvent, inLocalCoords?: boolean /* = false */): void
        
        /** Inform the Viewport that the mouse has entered its area. Use this function before sending an [InputEventMouseButton] or [InputEventMouseMotion] to the [Viewport] with [method Viewport.push_input]. See also [method notify_mouse_exited].  
         *      
         *  **Note:** In most cases, it is not necessary to call this function because [SubViewport] nodes that are children of [SubViewportContainer] are notified automatically. This is only necessary when interacting with viewports in non-default ways, for example as textures in [TextureRect] or with an [Area3D] that forwards input events.  
         */
        notifyMouseEntered(): void
        
        /** Inform the Viewport that the mouse has left its area. Use this function when the node that displays the viewport notices the mouse has left the area of the displayed viewport. See also [method notify_mouse_entered].  
         *      
         *  **Note:** In most cases, it is not necessary to call this function because [SubViewport] nodes that are children of [SubViewportContainer] are notified automatically. This is only necessary when interacting with viewports in non-default ways, for example as textures in [TextureRect] or with an [Area3D] that forwards input events.  
         */
        notifyMouseExited(): void
        
        /** Returns the mouse's position in this [Viewport] using the coordinate system of this [Viewport]. */
        getMousePosition(): Vector2
        
        /** Moves the mouse pointer to the specified position in this [Viewport] using the coordinate system of this [Viewport].  
         *      
         *  **Note:** [method warp_mouse] is only supported on Windows, macOS and Linux. It has no effect on Android, iOS and Web.  
         */
        warpMouse(position: Vector2): void
        
        /** Force instantly updating the display based on the current mouse cursor position. This includes updating the mouse cursor shape and sending necessary [signal Control.mouse_entered], [signal CollisionObject2D.mouse_entered], [signal CollisionObject3D.mouse_entered] and [signal Window.mouse_entered] signals and their respective `mouse_exited` counterparts. */
        updateMouseCursorState(): void
        
        /** Cancels the drag operation that was previously started through [method Control._get_drag_data] or forced with [method Control.force_drag]. */
        guiCancelDrag(): void
        
        /** Returns the drag data from the GUI, that was previously returned by [method Control._get_drag_data]. */
        guiGetDragData(): any
        
        /** Returns the drag data human-readable description. */
        guiGetDragDescription(): string
        
        /** Sets the drag data human-readable description. */
        guiSetDragDescription(description: string): void
        
        /** Returns `true` if a drag operation is currently ongoing and where the drop action could happen in this viewport.  
         *  Alternative to [constant Node.NOTIFICATION_DRAG_BEGIN] and [constant Node.NOTIFICATION_DRAG_END] when you prefer polling the value.  
         */
        guiIsDragging(): boolean
        
        /** Returns `true` if the drag operation is successful. */
        guiIsDragSuccessful(): boolean
        
        /** Removes the focus from the currently focused [Control] within this viewport. If no [Control] has the focus, does nothing. */
        guiReleaseFocus(): void
        
        /** Returns the currently focused [Control] within this viewport. If no [Control] is focused, returns `null`. */
        guiGetFocusOwner(): null | Control
        
        /** Returns the [Control] that the mouse is currently hovering over in this viewport. If no [Control] has the cursor, returns `null`.  
         *  Typically the leaf [Control] node or deepest level of the subtree which claims hover. This is very useful when used together with [method Node.is_ancestor_of] to find if the mouse is within a control tree.  
         */
        guiGetHoveredControl(): null | Control
        _guiRemoveFocusForWindow(_unnamedArg0: Node): void
        
        /** Sets the number of subdivisions to use in the specified quadrant. A higher number of subdivisions allows you to have more shadows in the scene at once, but reduces the quality of the shadows. A good practice is to have quadrants with a varying number of subdivisions and to have as few subdivisions as possible. */
        setPositionalShadowAtlasQuadrantSubdiv(quadrant: int64, subdiv: Viewport.PositionalShadowAtlasQuadrantSubdiv): void
        
        /** Returns the positional shadow atlas quadrant subdivision of the specified quadrant. */
        getPositionalShadowAtlasQuadrantSubdiv(quadrant: int64): Viewport.PositionalShadowAtlasQuadrantSubdiv
        
        /** Stops the input from propagating further down the [SceneTree].  
         *      
         *  **Note:** This does not affect the methods in [Input], only the way events are propagated.  
         */
        setInputAsHandled(): void
        
        /** Returns whether the current [InputEvent] has been handled. Input events are not handled until [method set_input_as_handled] has been called during the lifetime of an [InputEvent].  
         *  This is usually done as part of input handling methods like [method Node._input], [method Control._gui_input] or others, as well as in corresponding signal handlers.  
         *  If [member handle_input_locally] is set to `false`, this method will try finding the first parent viewport that is set to handle input locally, and return its value for [method is_input_handled] instead.  
         */
        isInputHandled(): boolean
        
        /** Returns a list of the visible embedded [Window]s inside the viewport.  
         *      
         *  **Note:** [Window]s inside other viewports will not be listed.  
         */
        getEmbeddedSubwindows(): GArray
        
        /** Set/clear individual bits on the rendering layer mask. This simplifies editing this [Viewport]'s layers. */
        setCanvasCullMaskBit(layer: int64, enable: boolean): void
        
        /** Returns an individual bit on the rendering layer mask. */
        getCanvasCullMaskBit(layer: int64): boolean
        _processPicking(): void
        
        /** Returns the currently active 2D audio listener. Returns `null` if there are no active 2D audio listeners, in which case the active 2D camera will be treated as listener. */
        getAudioListener2D(): null | AudioListener2D
        
        /** Returns the currently active 2D camera. Returns `null` if there are no active cameras. */
        getCamera2D(): null | Camera2D
        
        /** Returns the first valid [World3D] for this viewport, searching the [member world_3d] property of itself and any Viewport ancestor. */
        findWorld3D(): null | World3D
        
        /** Returns the currently active 3D audio listener. Returns `null` if there are no active 3D audio listeners, in which case the active 3D camera will be treated as listener. */
        getAudioListener3D(): null | AudioListener3D
        
        /** Returns the currently active 3D camera. */
        getCamera3D(): null | Camera3D
        
        /** Disable 3D rendering (but keep 2D rendering). */
        get disable3D(): boolean
        set disable3D(value: boolean)
        
        /** If `true`, the viewport will use the primary XR interface to render XR output. When applicable this can result in a stereoscopic image and the resulting render being output to a headset. */
        get useXR(): boolean
        set useXR(value: boolean)
        
        /** If `true`, the viewport will use a unique copy of the [World3D] defined in [member world_3d]. */
        get ownWorld3D(): boolean
        set ownWorld3D(value: boolean)
        
        /** The custom [World3D] which can be used as 3D environment source. */
        get world3D(): null | World3D
        set world3D(value: null | World3D)
        
        /** The custom [World2D] which can be used as 2D environment source. */
        get world2D(): null | World2D
        set world2D(value: null | World2D)
        
        /** If `true`, the viewport should render its background as transparent. */
        get transparentBg(): boolean
        set transparentBg(value: boolean)
        
        /** If `true`, this viewport will mark incoming input events as handled by itself. If `false`, this is instead done by the first parent viewport that is set to handle input locally.  
         *  A [SubViewportContainer] will automatically set this property to `false` for the [Viewport] contained inside of it.  
         *  See also [method set_input_as_handled] and [method is_input_handled].  
         */
        get handleInputLocally(): boolean
        set handleInputLocally(value: boolean)
        
        /** If `true`, [CanvasItem] nodes will internally snap to full pixels. Their position can still be sub-pixel, but the decimals will not have effect. This can lead to a crisper appearance at the cost of less smooth movement, especially when [Camera2D] smoothing is enabled. */
        get snap2DTransformsToPixel(): boolean
        set snap2DTransformsToPixel(value: boolean)
        
        /** If `true`, vertices of [CanvasItem] nodes will snap to full pixels. Only affects the final vertex positions, not the transforms. This can lead to a crisper appearance at the cost of less smooth movement, especially when [Camera2D] smoothing is enabled. */
        get snap2DVerticesToPixel(): boolean
        set snap2DVerticesToPixel(value: boolean)
        
        /** The multisample antialiasing mode for 2D/Canvas rendering. A higher number results in smoother edges at the cost of significantly worse performance. A value of [constant Viewport.MSAA_2X] or [constant Viewport.MSAA_4X] is best unless targeting very high-end systems. This has no effect on shader-induced aliasing or texture aliasing.  
         *  See also [member ProjectSettings.rendering/anti_aliasing/quality/msaa_2d] and [method RenderingServer.viewport_set_msaa_2d].  
         */
        get msaa2D(): int64
        set msaa2D(value: int64)
        
        /** The multisample antialiasing mode for 3D rendering. A higher number results in smoother edges at the cost of significantly worse performance. A value of [constant Viewport.MSAA_2X] or [constant Viewport.MSAA_4X] is best unless targeting very high-end systems. See also bilinear scaling 3D [member scaling_3d_mode] for supersampling, which provides higher quality but is much more expensive. This has no effect on shader-induced aliasing or texture aliasing.  
         *  See also [member ProjectSettings.rendering/anti_aliasing/quality/msaa_3d] and [method RenderingServer.viewport_set_msaa_3d].  
         */
        get msaa3D(): int64
        set msaa3D(value: int64)
        
        /** Sets the screen-space antialiasing method used. Screen-space antialiasing works by selectively blurring edges in a post-process shader. It differs from MSAA which takes multiple coverage samples while rendering objects. Screen-space AA methods are typically faster than MSAA and will smooth out specular aliasing, but tend to make scenes appear blurry.  
         *  See also [member ProjectSettings.rendering/anti_aliasing/quality/screen_space_aa] and [method RenderingServer.viewport_set_screen_space_aa].  
         */
        get screenSpaceAA(): int64
        set screenSpaceAA(value: int64)
        
        /** Enables temporal antialiasing for this viewport. TAA works by jittering the camera and accumulating the images of the last rendered frames, motion vector rendering is used to account for camera and object motion.  
         *      
         *  **Note:** The implementation is not complete yet, some visual instances such as particles and skinned meshes may show artifacts.  
         *  See also [member ProjectSettings.rendering/anti_aliasing/quality/use_taa] and [method RenderingServer.viewport_set_use_taa].  
         */
        get useTaa(): boolean
        set useTaa(value: boolean)
        
        /** If `true`, uses a fast post-processing filter to make banding significantly less visible in 3D. 2D rendering is  *not*  affected by debanding unless the [member Environment.background_mode] is [constant Environment.BG_CANVAS].  
         *  In some cases, debanding may introduce a slightly noticeable dithering pattern. It's recommended to enable debanding only when actually needed since the dithering pattern will make lossless-compressed screenshots larger.  
         *  See also [member ProjectSettings.rendering/anti_aliasing/quality/use_debanding] and [method RenderingServer.viewport_set_use_debanding].  
         */
        get useDebanding(): boolean
        set useDebanding(value: boolean)
        
        /** If `true`, [OccluderInstance3D] nodes will be usable for occlusion culling in 3D for this viewport. For the root viewport, [member ProjectSettings.rendering/occlusion_culling/use_occlusion_culling] must be set to `true` instead.  
         *      
         *  **Note:** Enabling occlusion culling has a cost on the CPU. Only enable occlusion culling if you actually plan to use it, and think whether your scene can actually benefit from occlusion culling. Large, open scenes with few or no objects blocking the view will generally not benefit much from occlusion culling. Large open scenes generally benefit more from mesh LOD and visibility ranges ([member GeometryInstance3D.visibility_range_begin] and [member GeometryInstance3D.visibility_range_end]) compared to occlusion culling.  
         *      
         *  **Note:** Due to memory constraints, occlusion culling is not supported by default in Web export templates. It can be enabled by compiling custom Web export templates with `module_raycast_enabled=yes`.  
         */
        get useOcclusionCulling(): boolean
        set useOcclusionCulling(value: boolean)
        
        /** The automatic LOD bias to use for meshes rendered within the [Viewport] (this is analogous to [member ReflectionProbe.mesh_lod_threshold]). Higher values will use less detailed versions of meshes that have LOD variations generated. If set to `0.0`, automatic LOD is disabled. Increase [member mesh_lod_threshold] to improve performance at the cost of geometry detail.  
         *  To control this property on the root viewport, set the [member ProjectSettings.rendering/mesh_lod/lod_change/threshold_pixels] project setting.  
         *      
         *  **Note:** [member mesh_lod_threshold] does not affect [GeometryInstance3D] visibility ranges (also known as "manual" LOD or hierarchical LOD).  
         */
        get meshLodThreshold(): float64
        set meshLodThreshold(value: float64)
        
        /** The overlay mode for test rendered geometry in debug purposes. */
        get debugDraw(): int64
        set debugDraw(value: int64)
        
        /** If `true`, 2D rendering will use an high dynamic range (HDR) format framebuffer matching the bit depth of the 3D framebuffer. When using the Forward+ renderer this will be an `RGBA16` framebuffer, while when using the Mobile renderer it will be an `RGB10_A2` framebuffer. Additionally, 2D rendering will take place in linear color space and will be converted to sRGB space immediately before blitting to the screen (if the Viewport is attached to the screen). Practically speaking, this means that the end result of the Viewport will not be clamped into the `0-1` range and can be used in 3D rendering without color space adjustments. This allows 2D rendering to take advantage of effects requiring high dynamic range (e.g. 2D glow) as well as substantially improves the appearance of effects requiring highly detailed gradients.  
         *      
         *  **Note:** This setting will have no effect when using the Compatibility renderer, which always renders in low dynamic range for performance reasons.  
         */
        get useHdr2D(): boolean
        set useHdr2D(value: boolean)
        
        /** Sets scaling 3D mode. Bilinear scaling renders at different resolution to either undersample or supersample the viewport. FidelityFX Super Resolution 1.0, abbreviated to FSR, is an upscaling technology that produces high quality images at fast framerates by using a spatially aware upscaling algorithm. FSR is slightly more expensive than bilinear, but it produces significantly higher image quality. FSR should be used where possible.  
         *  To control this property on the root viewport, set the [member ProjectSettings.rendering/scaling_3d/mode] project setting.  
         */
        get scaling3DMode(): int64
        set scaling3DMode(value: int64)
        
        /** Scales the 3D render buffer based on the viewport size uses an image filter specified in [member ProjectSettings.rendering/scaling_3d/mode] to scale the output image to the full viewport size. Values lower than `1.0` can be used to speed up 3D rendering at the cost of quality (undersampling). Values greater than `1.0` are only valid for bilinear mode and can be used to improve 3D rendering quality at a high performance cost (supersampling). See also [member ProjectSettings.rendering/anti_aliasing/quality/msaa_3d] for multi-sample antialiasing, which is significantly cheaper but only smooths the edges of polygons.  
         *  When using FSR upscaling, AMD recommends exposing the following values as preset options to users "Ultra Quality: 0.77", "Quality: 0.67", "Balanced: 0.59", "Performance: 0.5" instead of exposing the entire scale.  
         *  To control this property on the root viewport, set the [member ProjectSettings.rendering/scaling_3d/scale] project setting.  
         */
        get scaling3DScale(): float64
        set scaling3DScale(value: float64)
        
        /** Affects the final texture sharpness by reading from a lower or higher mipmap (also called "texture LOD bias"). Negative values make mipmapped textures sharper but grainier when viewed at a distance, while positive values make mipmapped textures blurrier (even when up close).  
         *  Enabling temporal antialiasing ([member use_taa]) will automatically apply a `-0.5` offset to this value, while enabling FXAA ([member screen_space_aa]) will automatically apply a `-0.25` offset to this value. If both TAA and FXAA are enabled at the same time, an offset of `-0.75` is applied to this value.  
         *      
         *  **Note:** If [member scaling_3d_scale] is lower than `1.0` (exclusive), [member texture_mipmap_bias] is used to adjust the automatic mipmap bias which is calculated internally based on the scale factor. The formula for this is `log2(scaling_3d_scale) + mipmap_bias`.  
         *  To control this property on the root viewport, set the [member ProjectSettings.rendering/textures/default_filters/texture_mipmap_bias] project setting.  
         */
        get textureMipmapBias(): float64
        set textureMipmapBias(value: float64)
        
        /** Sets the maximum number of samples to take when using anisotropic filtering on textures (as a power of two). A higher sample count will result in sharper textures at oblique angles, but is more expensive to compute. A value of `0` forcibly disables anisotropic filtering, even on materials where it is enabled.  
         *  The anisotropic filtering level also affects decals and light projectors if they are configured to use anisotropic filtering. See [member ProjectSettings.rendering/textures/decals/filter] and [member ProjectSettings.rendering/textures/light_projectors/filter].  
         *      
         *  **Note:** In 3D, for this setting to have an effect, set [member BaseMaterial3D.texture_filter] to [constant BaseMaterial3D.TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC] or [constant BaseMaterial3D.TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC] on materials.  
         *      
         *  **Note:** In 2D, for this setting to have an effect, set [member CanvasItem.texture_filter] to [constant CanvasItem.TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC] or [constant CanvasItem.TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC] on the [CanvasItem] node displaying the texture (or in [CanvasTexture]). However, anisotropic filtering is rarely useful in 2D, so only enable it for textures in 2D if it makes a meaningful visual difference.  
         */
        get anisotropicFilteringLevel(): int64
        set anisotropicFilteringLevel(value: int64)
        
        /** Determines how sharp the upscaled image will be when using the FSR upscaling mode. Sharpness halves with every whole number. Values go from 0.0 (sharpest) to 2.0. Values above 2.0 won't make a visible difference.  
         *  To control this property on the root viewport, set the [member ProjectSettings.rendering/scaling_3d/fsr_sharpness] project setting.  
         */
        get fsrSharpness(): float64
        set fsrSharpness(value: float64)
        
        /** The Variable Rate Shading (VRS) mode that is used for this viewport. Note, if hardware does not support VRS this property is ignored. */
        get vrsMode(): int64
        set vrsMode(value: int64)
        
        /** Sets the update mode for Variable Rate Shading (VRS) for the viewport. VRS requires the input texture to be converted to the format usable by the VRS method supported by the hardware. The update mode defines how often this happens. If the GPU does not support VRS, or VRS is not enabled, this property is ignored. */
        get vrsUpdateMode(): int64
        set vrsUpdateMode(value: int64)
        
        /** Texture to use when [member vrs_mode] is set to [constant Viewport.VRS_TEXTURE].  
         *  The texture  *must*  use a lossless compression format so that colors can be matched precisely. The following VRS densities are mapped to various colors, with brighter colors representing a lower level of shading precision:  
         *  [codeblock lang=text]  
         *  - 1×1 = rgb(0, 0, 0)     - #000000  
         *  - 1×2 = rgb(0, 85, 0)    - #005500  
         *  - 2×1 = rgb(85, 0, 0)    - #550000  
         *  - 2×2 = rgb(85, 85, 0)   - #555500  
         *  - 2×4 = rgb(85, 170, 0)  - #55aa00  
         *  - 4×2 = rgb(170, 85, 0)  - #aa5500  
         *  - 4×4 = rgb(170, 170, 0) - #aaaa00  
         *  - 4×8 = rgb(170, 255, 0) - #aaff00 - Not supported on most hardware  
         *  - 8×4 = rgb(255, 170, 0) - #ffaa00 - Not supported on most hardware  
         *  - 8×8 = rgb(255, 255, 0) - #ffff00 - Not supported on most hardware  
         *  [/codeblock]  
         */
        get vrsTexture(): null | Texture2D
        set vrsTexture(value: null | Texture2D)
        
        /** Sets the default filter mode used by [CanvasItem]s in this Viewport. See [enum DefaultCanvasItemTextureFilter] for options. */
        get canvasItemDefaultTextureFilter(): int64
        set canvasItemDefaultTextureFilter(value: int64)
        
        /** Sets the default repeat mode used by [CanvasItem]s in this Viewport. See [enum DefaultCanvasItemTextureRepeat] for options. */
        get canvasItemDefaultTextureRepeat(): int64
        set canvasItemDefaultTextureRepeat(value: int64)
        
        /** If `true`, the viewport will process 2D audio streams. */
        get audioListenerEnable2D(): boolean
        set audioListenerEnable2D(value: boolean)
        
        /** If `true`, the viewport will process 3D audio streams. */
        get audioListenerEnable3D(): boolean
        set audioListenerEnable3D(value: boolean)
        
        /** If `true`, the objects rendered by viewport become subjects of mouse picking process.  
         *      
         *  **Note:** The number of simultaneously pickable objects is limited to 64 and they are selected in a non-deterministic order, which can be different in each picking process.  
         */
        get physicsObjectPicking(): boolean
        set physicsObjectPicking(value: boolean)
        
        /** If `true`, objects receive mouse picking events sorted primarily by their [member CanvasItem.z_index] and secondarily by their position in the scene tree. If `false`, the order is undetermined.  
         *      
         *  **Note:** This setting is disabled by default because of its potential expensive computational cost.  
         *      
         *  **Note:** Sorting happens after selecting the pickable objects. Because of the limitation of 64 simultaneously pickable objects, it is not guaranteed that the object with the highest [member CanvasItem.z_index] receives the picking event.  
         */
        get physicsObjectPickingSort(): boolean
        set physicsObjectPickingSort(value: boolean)
        
        /** If `true`, the input_event signal will only be sent to one physics object in the mouse picking process. If you want to get the top object only, you must also enable [member physics_object_picking_sort].  
         *  If `false`, an input_event signal will be sent to all physics objects in the mouse picking process.  
         *  This applies to 2D CanvasItem object picking only.  
         */
        get physicsObjectPickingFirstOnly(): boolean
        set physicsObjectPickingFirstOnly(value: boolean)
        
        /** If `true`, the viewport will not receive input events. */
        get guiDisableInput(): boolean
        set guiDisableInput(value: boolean)
        
        /** If `true`, the GUI controls on the viewport will lay pixel perfectly. */
        get guiSnapControlsToPixels(): boolean
        set guiSnapControlsToPixels(value: boolean)
        
        /** If `true`, sub-windows (popups and dialogs) will be embedded inside application window as control-like nodes. If `false`, they will appear as separate windows handled by the operating system. */
        get guiEmbedSubwindows(): boolean
        set guiEmbedSubwindows(value: boolean)
        
        /** Controls how much of the original viewport's size should be covered by the 2D signed distance field. This SDF can be sampled in [CanvasItem] shaders and is also used for [GPUParticles2D] collision. Higher values allow portions of occluders located outside the viewport to still be taken into account in the generated signed distance field, at the cost of performance. If you notice particles falling through [LightOccluder2D]s as the occluders leave the viewport, increase this setting.  
         *  The percentage is added on each axis and on both sides. For example, with the default [constant SDF_OVERSIZE_120_PERCENT], the signed distance field will cover 20% of the viewport's size outside the viewport on each side (top, right, bottom, left).  
         */
        get sdfOversize(): int64
        set sdfOversize(value: int64)
        
        /** The resolution scale to use for the 2D signed distance field. Higher values lead to a more precise and more stable signed distance field as the camera moves, at the cost of performance. */
        get sdfScale(): int64
        set sdfScale(value: int64)
        
        /** The shadow atlas' resolution (used for omni and spot lights). The value is rounded up to the nearest power of 2.  
         *      
         *  **Note:** If this is set to `0`, no positional shadows will be visible at all. This can improve performance significantly on low-end systems by reducing both the CPU and GPU load (as fewer draw calls are needed to draw the scene without shadows).  
         */
        get positionalShadowAtlasSize(): int64
        set positionalShadowAtlasSize(value: int64)
        
        /** Use 16 bits for the omni/spot shadow depth map. Enabling this results in shadows having less precision and may result in shadow acne, but can lead to performance improvements on some devices. */
        get positionalShadowAtlas16Bits(): boolean
        set positionalShadowAtlas16Bits(value: boolean)
        
        /** The subdivision amount of the first quadrant on the shadow atlas. */
        get positionalShadowAtlasQuad0(): int64
        set positionalShadowAtlasQuad0(value: int64)
        
        /** The subdivision amount of the second quadrant on the shadow atlas. */
        get positionalShadowAtlasQuad1(): int64
        set positionalShadowAtlasQuad1(value: int64)
        
        /** The subdivision amount of the third quadrant on the shadow atlas. */
        get positionalShadowAtlasQuad2(): int64
        set positionalShadowAtlasQuad2(value: int64)
        
        /** The subdivision amount of the fourth quadrant on the shadow atlas. */
        get positionalShadowAtlasQuad3(): int64
        set positionalShadowAtlasQuad3(value: int64)
        
        /** The canvas transform of the viewport, useful for changing the on-screen positions of all child [CanvasItem]s. This is relative to the global canvas transform of the viewport. */
        get canvasTransform(): Transform2D
        set canvasTransform(value: Transform2D)
        
        /** The global canvas transform of the viewport. The canvas transform is relative to this. */
        get globalCanvasTransform(): Transform2D
        set globalCanvasTransform(value: Transform2D)
        
        /** The rendering layers in which this [Viewport] renders [CanvasItem] nodes. */
        get canvasCullMask(): int64
        set canvasCullMask(value: int64)
        
        /** If `true` and one of the following conditions is true: [member SubViewport.size_2d_override_stretch] and [member SubViewport.size_2d_override] are set, [member Window.content_scale_factor] is set and scaling is enabled, [member oversampling_override] is set, font and [SVGTexture] oversampling is enabled. */
        get oversampling(): boolean
        set oversampling(value: boolean)
        
        /** If greater than zero, this value is used as the font oversampling factor, otherwise oversampling is equal to viewport scale. */
        get oversamplingOverride(): float64
        set oversamplingOverride(value: float64)
        
        /** Emitted when the size of the viewport is changed, whether by resizing of window, or some other means. */
        readonly sizeChanged: Signal<() => void>
        
        /** Emitted when a Control node grabs keyboard focus.  
         *      
         *  **Note:** A Control node losing focus doesn't cause this signal to be emitted.  
         */
        readonly guiFocusChanged: Signal<(node: Control) => void>
    }
    /** Provides the content of a [Viewport] as a dynamic texture.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_viewporttexture.html  
     */
    class ViewportTexture extends Texture2D {
        constructor(identifier?: any)
        /** The path to the [Viewport] node to display. This is relative to the local scene root (see [method Resource.get_local_scene]), **not** to the nodes that use this texture.  
         *      
         *  **Note:** In the editor, this path is automatically updated when the target viewport or one of its ancestors is renamed or moved. At runtime, this path may not automatically update if the scene root cannot be found.  
         */
        get viewportPath(): NodePath
        set viewportPath(value: NodePath | string)
    }
    namespace VisibleOnScreenEnabler2D {
        enum EnableMode {
            EnableModeInherit = 0,
            EnableModeAlways = 1,
            EnableModeWhenPaused = 2,
        }
    }
    /** A rectangular region of 2D space that, when visible on screen, enables a target node.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visibleonscreenenabler2d.html  
     */
    class VisibleOnScreenEnabler2D<Map extends NodePathMap = any> extends VisibleOnScreenNotifier2D<Map> {
        /** Corresponds to [constant Node.PROCESS_MODE_INHERIT]. */
        static readonly ENABLE_MODE_INHERIT = 0
        
        /** Corresponds to [constant Node.PROCESS_MODE_ALWAYS]. */
        static readonly ENABLE_MODE_ALWAYS = 1
        
        /** Corresponds to [constant Node.PROCESS_MODE_WHEN_PAUSED]. */
        static readonly ENABLE_MODE_WHEN_PAUSED = 2
        constructor(identifier?: any)
        
        /** Determines how the target node is enabled. Corresponds to [enum Node.ProcessMode]. When the node is disabled, it always uses [constant Node.PROCESS_MODE_DISABLED]. */
        get enableMode(): int64
        set enableMode(value: int64)
        
        /** The path to the target node, relative to the [VisibleOnScreenEnabler2D]. The target node is cached; it's only assigned when setting this property (if the [VisibleOnScreenEnabler2D] is inside the scene tree) and every time the [VisibleOnScreenEnabler2D] enters the scene tree. If the path is empty, no node will be affected. If the path is invalid, an error is also generated. */
        get enableNodePath(): NodePath
        set enableNodePath(value: NodePath | string)
    }
    namespace VisibleOnScreenEnabler3D {
        enum EnableMode {
            EnableModeInherit = 0,
            EnableModeAlways = 1,
            EnableModeWhenPaused = 2,
        }
    }
    /** A box-shaped region of 3D space that, when visible on screen, enables a target node.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visibleonscreenenabler3d.html  
     */
    class VisibleOnScreenEnabler3D<Map extends NodePathMap = any> extends VisibleOnScreenNotifier3D<Map> {
        /** Corresponds to [constant Node.PROCESS_MODE_INHERIT]. */
        static readonly ENABLE_MODE_INHERIT = 0
        
        /** Corresponds to [constant Node.PROCESS_MODE_ALWAYS]. */
        static readonly ENABLE_MODE_ALWAYS = 1
        
        /** Corresponds to [constant Node.PROCESS_MODE_WHEN_PAUSED]. */
        static readonly ENABLE_MODE_WHEN_PAUSED = 2
        constructor(identifier?: any)
        
        /** Determines how the target node is enabled. Corresponds to [enum Node.ProcessMode]. When the node is disabled, it always uses [constant Node.PROCESS_MODE_DISABLED]. */
        get enableMode(): int64
        set enableMode(value: int64)
        
        /** The path to the target node, relative to the [VisibleOnScreenEnabler3D]. The target node is cached; it's only assigned when setting this property (if the [VisibleOnScreenEnabler3D] is inside the scene tree) and every time the [VisibleOnScreenEnabler3D] enters the scene tree. If the path is empty, no node will be affected. If the path is invalid, an error is also generated. */
        get enableNodePath(): NodePath
        set enableNodePath(value: NodePath | string)
    }
    /** A rectangular region of 2D space that detects whether it is visible on screen.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visibleonscreennotifier2d.html  
     */
    class VisibleOnScreenNotifier2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** If `true`, the bounding rectangle is on the screen.  
         *      
         *  **Note:** It takes one frame for the [VisibleOnScreenNotifier2D]'s visibility to be determined once added to the scene tree, so this method will always return `false` right after it is instantiated, before the draw pass.  
         */
        isOnScreen(): boolean
        
        /** The VisibleOnScreenNotifier2D's bounding rectangle. */
        get rect(): Rect2
        set rect(value: Rect2)
        
        /** If `true`, shows the rectangle area of [member rect] in the editor with a translucent magenta fill. Unlike changing the visibility of the VisibleOnScreenNotifier2D, this does not affect the screen culling detection. */
        get showRect(): boolean
        set showRect(value: boolean)
        
        /** Emitted when the VisibleOnScreenNotifier2D enters the screen. */
        readonly screenEntered: Signal<() => void>
        
        /** Emitted when the VisibleOnScreenNotifier2D exits the screen. */
        readonly screenExited: Signal<() => void>
    }
    /** A box-shaped region of 3D space that detects whether it is visible on screen.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visibleonscreennotifier3d.html  
     */
    class VisibleOnScreenNotifier3D<Map extends NodePathMap = any> extends VisualInstance3D<Map> {
        constructor(identifier?: any)
        /** Returns `true` if the bounding box is on the screen.  
         *      
         *  **Note:** It takes one frame for the [VisibleOnScreenNotifier3D]'s visibility to be assessed once added to the scene tree, so this method will always return `false` right after it is instantiated.  
         */
        isOnScreen(): boolean
        
        /** The [VisibleOnScreenNotifier3D]'s bounding box. */
        get aabb(): Aabb
        set aabb(value: Aabb)
        
        /** Emitted when the [VisibleOnScreenNotifier3D] enters the screen. */
        readonly screenEntered: Signal<() => void>
        
        /** Emitted when the [VisibleOnScreenNotifier3D] exits the screen. */
        readonly screenExited: Signal<() => void>
    }
    /** Parent of all visual 3D nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualinstance3d.html  
     */
    class VisualInstance3D<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        /* gdvirtual */ _getAabb(): Aabb
        
        /** Sets the resource that is instantiated by this [VisualInstance3D], which changes how the engine handles the [VisualInstance3D] under the hood. Equivalent to [method RenderingServer.instance_set_base]. */
        setBase(base: Rid): void
        
        /** Returns the RID of the resource associated with this [VisualInstance3D]. For example, if the Node is a [MeshInstance3D], this will return the RID of the associated [Mesh]. */
        getBase(): Rid
        
        /** Returns the RID of this instance. This RID is the same as the RID returned by [method RenderingServer.instance_create]. This RID is needed if you want to call [RenderingServer] functions directly on this [VisualInstance3D]. */
        getInstance(): Rid
        
        /** Based on [param value], enables or disables the specified layer in the [member layers], given a [param layer_number] between 1 and 20. */
        setLayerMaskValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member layers] is enabled, given a [param layer_number] between 1 and 20. */
        getLayerMaskValue(layerNumber: int64): boolean
        
        /** Returns the [AABB] (also known as the bounding box) for this [VisualInstance3D]. */
        getAabb(): Aabb
        
        /** The render layer(s) this [VisualInstance3D] is drawn on.  
         *  This object will only be visible for [Camera3D]s whose cull mask includes any of the render layers this [VisualInstance3D] is set to.  
         *  For [Light3D]s, this can be used to control which [VisualInstance3D]s are affected by a specific light. For [GPUParticles3D], this can be used to control which particles are effected by a specific attractor. For [Decal]s, this can be used to control which [VisualInstance3D]s are affected by a specific decal.  
         *  To adjust [member layers] more easily using a script, use [method get_layer_mask_value] and [method set_layer_mask_value].  
         *      
         *  **Note:** [VoxelGI], SDFGI and [LightmapGI] will always take all layers into account to determine what contributes to global illumination. If this is an issue, set [member GeometryInstance3D.gi_mode] to [constant GeometryInstance3D.GI_MODE_DISABLED] for meshes and [member Light3D.light_bake_mode] to [constant Light3D.BAKE_DISABLED] for lights to exclude them from global illumination.  
         */
        get layers(): int64
        set layers(value: int64)
        
        /** The amount by which the depth of this [VisualInstance3D] will be adjusted when sorting by depth. Uses the same units as the engine (which are typically meters). Adjusting it to a higher value will make the [VisualInstance3D] reliably draw on top of other [VisualInstance3D]s that are otherwise positioned at the same spot. To ensure it always draws on top of other objects around it (not positioned at the same spot), set the value to be greater than the distance between this [VisualInstance3D] and the other nearby [VisualInstance3D]s. */
        get sortingOffset(): float64
        set sortingOffset(value: float64)
        
        /** If `true`, the object is sorted based on the [AABB] center. The object will be sorted based on the global position otherwise.  
         *  The [AABB] center based sorting is generally more accurate for 3D models. The position based sorting instead allows to better control the drawing order when working with [GPUParticles3D] and [CPUParticles3D].  
         */
        get sortingUseAabbCenter(): boolean
        set sortingUseAabbCenter(value: boolean)
    }
    namespace VisualShader {
        enum Type {
            TypeVertex = 0,
            TypeFragment = 1,
            TypeLight = 2,
            TypeStart = 3,
            TypeProcess = 4,
            TypeCollide = 5,
            TypeStartCustom = 6,
            TypeProcessCustom = 7,
            TypeSky = 8,
            TypeFog = 9,
            TypeMax = 10,
        }
        enum VaryingMode {
            VaryingModeVertexToFragLight = 0,
            VaryingModeFragToLight = 1,
            VaryingModeMax = 2,
        }
        enum VaryingType {
            VaryingTypeFloat = 0,
            VaryingTypeInt = 1,
            VaryingTypeUint = 2,
            VaryingTypeVector2D = 3,
            VaryingTypeVector3D = 4,
            VaryingTypeVector4D = 5,
            VaryingTypeBoolean = 6,
            VaryingTypeTransform = 7,
            VaryingTypeMax = 8,
        }
    }
    /** A custom shader program with a visual editor.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshader.html  
     */
    class VisualShader extends Shader {
        /** A vertex shader, operating on vertices. */
        static readonly TYPE_VERTEX = 0
        
        /** A fragment shader, operating on fragments (pixels). */
        static readonly TYPE_FRAGMENT = 1
        
        /** A shader for light calculations. */
        static readonly TYPE_LIGHT = 2
        
        /** A function for the "start" stage of particle shader. */
        static readonly TYPE_START = 3
        
        /** A function for the "process" stage of particle shader. */
        static readonly TYPE_PROCESS = 4
        
        /** A function for the "collide" stage (particle collision handler) of particle shader. */
        static readonly TYPE_COLLIDE = 5
        
        /** A function for the "start" stage of particle shader, with customized output. */
        static readonly TYPE_START_CUSTOM = 6
        
        /** A function for the "process" stage of particle shader, with customized output. */
        static readonly TYPE_PROCESS_CUSTOM = 7
        
        /** A shader for 3D environment's sky. */
        static readonly TYPE_SKY = 8
        
        /** A compute shader that runs for each froxel of the volumetric fog map. */
        static readonly TYPE_FOG = 9
        
        /** Represents the size of the [enum Type] enum. */
        static readonly TYPE_MAX = 10
        
        /** Varying is passed from `Vertex` function to `Fragment` and `Light` functions. */
        static readonly VARYING_MODE_VERTEX_TO_FRAG_LIGHT = 0
        
        /** Varying is passed from `Fragment` function to `Light` function. */
        static readonly VARYING_MODE_FRAG_TO_LIGHT = 1
        
        /** Represents the size of the [enum VaryingMode] enum. */
        static readonly VARYING_MODE_MAX = 2
        
        /** Varying is of type [float]. */
        static readonly VARYING_TYPE_FLOAT = 0
        
        /** Varying is of type [int]. */
        static readonly VARYING_TYPE_INT = 1
        
        /** Varying is of type unsigned [int]. */
        static readonly VARYING_TYPE_UINT = 2
        
        /** Varying is of type [Vector2]. */
        static readonly VARYING_TYPE_VECTOR_2D = 3
        
        /** Varying is of type [Vector3]. */
        static readonly VARYING_TYPE_VECTOR_3D = 4
        
        /** Varying is of type [Vector4]. */
        static readonly VARYING_TYPE_VECTOR_4D = 5
        
        /** Varying is of type [bool]. */
        static readonly VARYING_TYPE_BOOLEAN = 6
        
        /** Varying is of type [Transform3D]. */
        static readonly VARYING_TYPE_TRANSFORM = 7
        
        /** Represents the size of the [enum VaryingType] enum. */
        static readonly VARYING_TYPE_MAX = 8
        
        /** Indicates an invalid [VisualShader] node. */
        static readonly NODE_ID_INVALID = -1
        
        /** Indicates an output node of [VisualShader]. */
        static readonly NODE_ID_OUTPUT = 0
        constructor(identifier?: any)
        
        /** Sets the mode of this shader. */
        setMode(mode: Shader.Mode): void
        
        /** Adds the specified [param node] to the shader. */
        addNode(type: VisualShader.Type, node: VisualShaderNode, position: Vector2, id: int64): void
        
        /** Returns the shader node instance with specified [param type] and [param id]. */
        getNode(type: VisualShader.Type, id: int64): null | VisualShaderNode
        
        /** Sets the position of the specified node. */
        setNodePosition(type: VisualShader.Type, id: int64, position: Vector2): void
        
        /** Returns the position of the specified node within the shader graph. */
        getNodePosition(type: VisualShader.Type, id: int64): Vector2
        
        /** Returns the list of all nodes in the shader with the specified type. */
        getNodeList(type: VisualShader.Type): PackedInt32Array
        
        /** Returns next valid node ID that can be added to the shader graph. */
        getValidNodeId(type: VisualShader.Type): int64
        
        /** Removes the specified node from the shader. */
        removeNode(type: VisualShader.Type, id: int64): void
        
        /** Replaces the specified node with a node of new class type. */
        replaceNode(type: VisualShader.Type, id: int64, newClass: StringName): void
        
        /** Returns `true` if the specified node and port connection exist. */
        isNodeConnection(type: VisualShader.Type, fromNode: int64, fromPort: int64, toNode: int64, toPort: int64): boolean
        
        /** Returns `true` if the specified nodes and ports can be connected together. */
        canConnectNodes(type: VisualShader.Type, fromNode: int64, fromPort: int64, toNode: int64, toPort: int64): boolean
        
        /** Connects the specified nodes and ports. */
        connectNodes(type: VisualShader.Type, fromNode: int64, fromPort: int64, toNode: int64, toPort: int64): GError
        
        /** Connects the specified nodes and ports. */
        disconnectNodes(type: VisualShader.Type, fromNode: int64, fromPort: int64, toNode: int64, toPort: int64): void
        
        /** Connects the specified nodes and ports, even if they can't be connected. Such connection is invalid and will not function properly. */
        connectNodesForced(type: VisualShader.Type, fromNode: int64, fromPort: int64, toNode: int64, toPort: int64): void
        
        /** Returns the list of connected nodes with the specified type. */
        getNodeConnections(type: VisualShader.Type): GArray
        
        /** Attaches the given node to the given frame. */
        attachNodeToFrame(type: VisualShader.Type, id: int64, frame: int64): void
        
        /** Detaches the given node from the frame it is attached to. */
        detachNodeFromFrame(type: VisualShader.Type, id: int64): void
        
        /** Adds a new varying value node to the shader. */
        addVarying(name: string, mode: VisualShader.VaryingMode, type: VisualShader.VaryingType): void
        
        /** Removes a varying value node with the given [param name]. Prints an error if a node with this name is not found. */
        removeVarying(name: string): void
        
        /** Returns `true` if the shader has a varying with the given [param name]. */
        hasVarying(name: string): boolean
        _setPreviewShaderParameter(name: string, value: any): void
        _getPreviewShaderParameter(name: string): any
        _hasPreviewShaderParameter(name: string): boolean
        _updateShader(): void
        
        /** The offset vector of the whole graph. */
        get graphOffset(): Vector2
        set graphOffset(value: Vector2)
    }
    namespace VisualShaderNode {
        enum PortType {
            PortTypeScalar = 0,
            PortTypeScalarInt = 1,
            PortTypeScalarUint = 2,
            PortTypeVector2D = 3,
            PortTypeVector3D = 4,
            PortTypeVector4D = 5,
            PortTypeBoolean = 6,
            PortTypeTransform = 7,
            PortTypeSampler = 8,
            PortTypeMax = 9,
        }
    }
    /** Base class for [VisualShader] nodes. Not related to scene nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernode.html  
     */
    class VisualShaderNode extends Resource {
        /** Floating-point scalar. Translated to [code skip-lint]float` type in shader code. */
        static readonly PORT_TYPE_SCALAR = 0
        
        /** Integer scalar. Translated to [code skip-lint]int` type in shader code. */
        static readonly PORT_TYPE_SCALAR_INT = 1
        
        /** Unsigned integer scalar. Translated to [code skip-lint]uint` type in shader code. */
        static readonly PORT_TYPE_SCALAR_UINT = 2
        
        /** 2D vector of floating-point values. Translated to [code skip-lint]vec2` type in shader code. */
        static readonly PORT_TYPE_VECTOR_2D = 3
        
        /** 3D vector of floating-point values. Translated to [code skip-lint]vec3` type in shader code. */
        static readonly PORT_TYPE_VECTOR_3D = 4
        
        /** 4D vector of floating-point values. Translated to [code skip-lint]vec4` type in shader code. */
        static readonly PORT_TYPE_VECTOR_4D = 5
        
        /** Boolean type. Translated to [code skip-lint]bool` type in shader code. */
        static readonly PORT_TYPE_BOOLEAN = 6
        
        /** Transform type. Translated to [code skip-lint]mat4` type in shader code. */
        static readonly PORT_TYPE_TRANSFORM = 7
        
        /** Sampler type. Translated to reference of sampler uniform in shader code. Can only be used for input ports in non-uniform nodes. */
        static readonly PORT_TYPE_SAMPLER = 8
        
        /** Represents the size of the [enum PortType] enum. */
        static readonly PORT_TYPE_MAX = 9
        constructor(identifier?: any)
        
        /** Returns the input port which should be connected by default when this node is created as a result of dragging a connection from an existing node to the empty space on the graph. */
        getDefaultInputPort(type: VisualShaderNode.PortType): int64
        _setOutputPortExpanded(port: int64, _unnamedArg1: boolean): void
        _isOutputPortExpanded(_unnamedArg0: int64): boolean
        
        /** Sets the default [param value] for the selected input [param port]. */
        setInputPortDefaultValue(port: int64, value: any, prevValue?: any /* = <any> {} */): void
        
        /** Returns the default value of the input [param port]. */
        getInputPortDefaultValue(port: int64): any
        
        /** Removes the default value of the input [param port]. */
        removeInputPortDefaultValue(port: int64): void
        
        /** Clears the default input ports value. */
        clearDefaultInputValues(): void
        
        /** Sets the output port index which will be showed for preview. If set to `-1` no port will be open for preview. */
        get outputPortForPreview(): int64
        set outputPortForPreview(value: int64)
        get defaultInputValues(): GArray
        set defaultInputValues(value: GArray)
        get expandedOutputPorts(): GArray
        set expandedOutputPorts(value: GArray)
        
        /** Represents the index of the frame this node is linked to. If set to `-1` the node is not linked to any frame. */
        get linkedParentGraphFrame(): int64
        set linkedParentGraphFrame(value: int64)
    }
    namespace VisualShaderNodeBillboard {
        enum BillboardType {
            BillboardTypeDisabled = 0,
            BillboardTypeEnabled = 1,
            BillboardTypeFixedY = 2,
            BillboardTypeParticles = 3,
            BillboardTypeMax = 4,
        }
    }
    /** A node that controls how the object faces the camera to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodebillboard.html  
     */
    class VisualShaderNodeBillboard extends VisualShaderNode {
        /** Billboarding is disabled and the node does nothing. */
        static readonly BILLBOARD_TYPE_DISABLED = 0
        
        /** A standard billboarding algorithm is enabled. */
        static readonly BILLBOARD_TYPE_ENABLED = 1
        
        /** A billboarding algorithm to rotate around Y-axis is enabled. */
        static readonly BILLBOARD_TYPE_FIXED_Y = 2
        
        /** A billboarding algorithm designed to use on particles is enabled. */
        static readonly BILLBOARD_TYPE_PARTICLES = 3
        
        /** Represents the size of the [enum BillboardType] enum. */
        static readonly BILLBOARD_TYPE_MAX = 4
        constructor(identifier?: any)
        
        /** Controls how the object faces the camera. See [enum BillboardType]. */
        get billboardType(): int64
        set billboardType(value: int64)
        
        /** If `true`, the shader will keep the scale set for the mesh. Otherwise, the scale is lost when billboarding. */
        get keepScale(): boolean
        set keepScale(value: boolean)
    }
    /** A boolean constant to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodebooleanconstant.html  
     */
    class VisualShaderNodeBooleanConstant extends VisualShaderNodeConstant {
        constructor(identifier?: any)
        /** A boolean constant which represents a state of this node. */
        get constant(): boolean
        set constant(value: boolean)
    }
    /** A boolean parameter to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodebooleanparameter.html  
     */
    class VisualShaderNodeBooleanParameter extends VisualShaderNodeParameter {
        constructor(identifier?: any)
        /** Enables usage of the [member default_value]. */
        get defaultValueEnabled(): boolean
        set defaultValueEnabled(value: boolean)
        
        /** A default value to be assigned within the shader. */
        get defaultValue(): boolean
        set defaultValue(value: boolean)
    }
    namespace VisualShaderNodeClamp {
        enum OpType {
            OpTypeFloat = 0,
            OpTypeInt = 1,
            OpTypeUint = 2,
            OpTypeVector2D = 3,
            OpTypeVector3D = 4,
            OpTypeVector4D = 5,
            OpTypeMax = 6,
        }
    }
    /** Clamps a value within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodeclamp.html  
     */
    class VisualShaderNodeClamp extends VisualShaderNode {
        /** A floating-point scalar. */
        static readonly OP_TYPE_FLOAT = 0
        
        /** An integer scalar. */
        static readonly OP_TYPE_INT = 1
        
        /** An unsigned integer scalar. */
        static readonly OP_TYPE_UINT = 2
        
        /** A 2D vector type. */
        static readonly OP_TYPE_VECTOR_2D = 3
        
        /** A 3D vector type. */
        static readonly OP_TYPE_VECTOR_3D = 4
        
        /** A 4D vector type. */
        static readonly OP_TYPE_VECTOR_4D = 5
        
        /** Represents the size of the [enum OpType] enum. */
        static readonly OP_TYPE_MAX = 6
        constructor(identifier?: any)
        
        /** A type of operands and returned value. */
        get opType(): int64
        set opType(value: int64)
    }
    /** A [Color] constant to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodecolorconstant.html  
     */
    class VisualShaderNodeColorConstant extends VisualShaderNodeConstant {
        constructor(identifier?: any)
        /** A [Color] constant which represents a state of this node. */
        get constant(): Color
        set constant(value: Color)
    }
    namespace VisualShaderNodeColorFunc {
        enum Function {
            FuncGrayscale = 0,
            FuncHsv2Rgb = 1,
            FuncRgb2Hsv = 2,
            FuncSepia = 3,
            FuncLinearToSrgb = 4,
            FuncSrgbToLinear = 5,
            FuncMax = 6,
        }
    }
    /** A [Color] function to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodecolorfunc.html  
     */
    class VisualShaderNodeColorFunc extends VisualShaderNode {
        /** Converts the color to grayscale using the following formula:  
         *    
         */
        static readonly FUNC_GRAYSCALE = 0
        
        /** Converts HSV vector to RGB equivalent. */
        static readonly FUNC_HSV2RGB = 1
        
        /** Converts RGB vector to HSV equivalent. */
        static readonly FUNC_RGB2HSV = 2
        
        /** Applies sepia tone effect using the following formula:  
         *    
         */
        static readonly FUNC_SEPIA = 3
        
        /** Converts color from linear color space to sRGB color space using the following formula:  
         *    
         *  The Compatibility renderer uses a simpler formula:  
         *    
         */
        static readonly FUNC_LINEAR_TO_SRGB = 4
        
        /** Converts color from sRGB color space to linear color space using the following formula:  
         *    
         *  The Compatibility renderer uses a simpler formula:  
         *    
         */
        static readonly FUNC_SRGB_TO_LINEAR = 5
        
        /** Represents the size of the [enum Function] enum. */
        static readonly FUNC_MAX = 6
        constructor(identifier?: any)
        
        /** A function to be applied to the input color. See [enum Function] for options. */
        get "function"(): int64
        set "function"(value: int64)
    }
    namespace VisualShaderNodeColorOp {
        enum Operator {
            OpScreen = 0,
            OpDifference = 1,
            OpDarken = 2,
            OpLighten = 3,
            OpOverlay = 4,
            OpDodge = 5,
            OpBurn = 6,
            OpSoftLight = 7,
            OpHardLight = 8,
            OpMax = 9,
        }
    }
    /** A [Color] operator to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodecolorop.html  
     */
    class VisualShaderNodeColorOp extends VisualShaderNode {
        /** Produce a screen effect with the following formula:  
         *    
         */
        static readonly OP_SCREEN = 0
        
        /** Produce a difference effect with the following formula:  
         *    
         */
        static readonly OP_DIFFERENCE = 1
        
        /** Produce a darken effect with the following formula:  
         *    
         */
        static readonly OP_DARKEN = 2
        
        /** Produce a lighten effect with the following formula:  
         *    
         */
        static readonly OP_LIGHTEN = 3
        
        /** Produce an overlay effect with the following formula:  
         *    
         */
        static readonly OP_OVERLAY = 4
        
        /** Produce a dodge effect with the following formula:  
         *    
         */
        static readonly OP_DODGE = 5
        
        /** Produce a burn effect with the following formula:  
         *    
         */
        static readonly OP_BURN = 6
        
        /** Produce a soft light effect with the following formula:  
         *    
         */
        static readonly OP_SOFT_LIGHT = 7
        
        /** Produce a hard light effect with the following formula:  
         *    
         */
        static readonly OP_HARD_LIGHT = 8
        
        /** Represents the size of the [enum Operator] enum. */
        static readonly OP_MAX = 9
        constructor(identifier?: any)
        
        /** An operator to be applied to the inputs. See [enum Operator] for options. */
        get operator(): int64
        set operator(value: int64)
    }
    /** A [Color] parameter to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodecolorparameter.html  
     */
    class VisualShaderNodeColorParameter extends VisualShaderNodeParameter {
        constructor(identifier?: any)
        /** Enables usage of the [member default_value]. */
        get defaultValueEnabled(): boolean
        set defaultValueEnabled(value: boolean)
        
        /** A default value to be assigned within the shader. */
        get defaultValue(): Color
        set defaultValue(value: Color)
    }
    /** Only exists for compatibility. Use [VisualShaderNodeFrame] as a replacement.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodecomment.html  
     */
    class VisualShaderNodeComment extends VisualShaderNodeFrame {
        constructor(identifier?: any)
        /** This property only exists to preserve data authored in earlier versions of Godot. It has currently no function. */
        get description(): string
        set description(value: string)
    }
    namespace VisualShaderNodeCompare {
        enum ComparisonType {
            CtypeScalar = 0,
            CtypeScalarInt = 1,
            CtypeScalarUint = 2,
            CtypeVector2D = 3,
            CtypeVector3D = 4,
            CtypeVector4D = 5,
            CtypeBoolean = 6,
            CtypeTransform = 7,
            CtypeMax = 8,
        }
        enum Function {
            FuncEqual = 0,
            FuncNotEqual = 1,
            FuncGreaterThan = 2,
            FuncGreaterThanEqual = 3,
            FuncLessThan = 4,
            FuncLessThanEqual = 5,
            FuncMax = 6,
        }
        enum Condition {
            CondAll = 0,
            CondAny = 1,
            CondMax = 2,
        }
    }
    /** A comparison function for common types within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodecompare.html  
     */
    class VisualShaderNodeCompare extends VisualShaderNode {
        /** A floating-point scalar. */
        static readonly CTYPE_SCALAR = 0
        
        /** An integer scalar. */
        static readonly CTYPE_SCALAR_INT = 1
        
        /** An unsigned integer scalar. */
        static readonly CTYPE_SCALAR_UINT = 2
        
        /** A 2D vector type. */
        static readonly CTYPE_VECTOR_2D = 3
        
        /** A 3D vector type. */
        static readonly CTYPE_VECTOR_3D = 4
        
        /** A 4D vector type. */
        static readonly CTYPE_VECTOR_4D = 5
        
        /** A boolean type. */
        static readonly CTYPE_BOOLEAN = 6
        
        /** A transform (`mat4`) type. */
        static readonly CTYPE_TRANSFORM = 7
        
        /** Represents the size of the [enum ComparisonType] enum. */
        static readonly CTYPE_MAX = 8
        
        /** Comparison for equality (`a == b`). */
        static readonly FUNC_EQUAL = 0
        
        /** Comparison for inequality (`a != b`). */
        static readonly FUNC_NOT_EQUAL = 1
        
        /** Comparison for greater than (`a > b`). Cannot be used if [member type] set to [constant CTYPE_BOOLEAN] or [constant CTYPE_TRANSFORM]. */
        static readonly FUNC_GREATER_THAN = 2
        
        /** Comparison for greater than or equal (`a >= b`). Cannot be used if [member type] set to [constant CTYPE_BOOLEAN] or [constant CTYPE_TRANSFORM]. */
        static readonly FUNC_GREATER_THAN_EQUAL = 3
        
        /** Comparison for less than (`a < b`). Cannot be used if [member type] set to [constant CTYPE_BOOLEAN] or [constant CTYPE_TRANSFORM]. */
        static readonly FUNC_LESS_THAN = 4
        
        /** Comparison for less than or equal (`a <= b`). Cannot be used if [member type] set to [constant CTYPE_BOOLEAN] or [constant CTYPE_TRANSFORM]. */
        static readonly FUNC_LESS_THAN_EQUAL = 5
        
        /** Represents the size of the [enum Function] enum. */
        static readonly FUNC_MAX = 6
        
        /** The result will be `true` if all components in the vector satisfy the comparison condition. */
        static readonly COND_ALL = 0
        
        /** The result will be `true` if any component in the vector satisfies the comparison condition. */
        static readonly COND_ANY = 1
        
        /** Represents the size of the [enum Condition] enum. */
        static readonly COND_MAX = 2
        constructor(identifier?: any)
        
        /** The type to be used in the comparison. See [enum ComparisonType] for options. */
        get type(): int64
        set type(value: int64)
        
        /** A comparison function. See [enum Function] for options. */
        get "function"(): int64
        set "function"(value: int64)
        
        /** Extra condition which is applied if [member type] is set to [constant CTYPE_VECTOR_3D]. */
        get condition(): int64
        set condition(value: int64)
    }
    /** A base type for the constants within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodeconstant.html  
     */
    class VisualShaderNodeConstant extends VisualShaderNode {
        constructor(identifier?: any)
    }
    namespace VisualShaderNodeCubemap {
        enum Source {
            SourceTexture = 0,
            SourcePort = 1,
            SourceMax = 2,
        }
        enum TextureType {
            TypeData = 0,
            TypeColor = 1,
            TypeNormalMap = 2,
            TypeMax = 3,
        }
    }
    /** A [Cubemap] sampling node to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodecubemap.html  
     */
    class VisualShaderNodeCubemap extends VisualShaderNode {
        /** Use the [Cubemap] set via [member cube_map]. If this is set to [member source], the `samplerCube` port is ignored. */
        static readonly SOURCE_TEXTURE = 0
        
        /** Use the [Cubemap] sampler reference passed via the `samplerCube` port. If this is set to [member source], the [member cube_map] texture is ignored. */
        static readonly SOURCE_PORT = 1
        
        /** Represents the size of the [enum Source] enum. */
        static readonly SOURCE_MAX = 2
        
        /** No hints are added to the uniform declaration. */
        static readonly TYPE_DATA = 0
        
        /** Adds `source_color` as hint to the uniform declaration for proper sRGB to linear conversion. */
        static readonly TYPE_COLOR = 1
        
        /** Adds `hint_normal` as hint to the uniform declaration, which internally converts the texture for proper usage as normal map. */
        static readonly TYPE_NORMAL_MAP = 2
        
        /** Represents the size of the [enum TextureType] enum. */
        static readonly TYPE_MAX = 3
        constructor(identifier?: any)
        
        /** Defines which source should be used for the sampling. See [enum Source] for options. */
        get source(): int64
        set source(value: int64)
        
        /** The [Cubemap] texture to sample when using [constant SOURCE_TEXTURE] as [member source]. */
        get cubeMap(): null | Cubemap | CompressedCubemap | PlaceholderCubemap | TextureCubemapRD
        set cubeMap(value: null | Cubemap | CompressedCubemap | PlaceholderCubemap | TextureCubemapRD)
        
        /** Defines the type of data provided by the source texture. See [enum TextureType] for options. */
        get textureType(): int64
        set textureType(value: int64)
    }
    /** A [Cubemap] parameter node to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodecubemapparameter.html  
     */
    class VisualShaderNodeCubemapParameter extends VisualShaderNodeTextureParameter {
        constructor(identifier?: any)
    }
    /** Performs a [CurveTexture] lookup within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodecurvetexture.html  
     */
    class VisualShaderNodeCurveTexture extends VisualShaderNodeResizableBase {
        constructor(identifier?: any)
        /** The source texture. */
        get texture(): null | CurveTexture
        set texture(value: null | CurveTexture)
    }
    class VisualShaderNodeCurveXyzTexture extends VisualShaderNodeResizableBase {
        constructor(identifier?: any)
        get texture(): null | CurveXyzTexture
        set texture(value: null | CurveXyzTexture)
    }
    /** Virtual class to define custom [VisualShaderNode]s for use in the Visual Shader Editor.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodecustom.html  
     */
    class VisualShaderNodeCustom extends VisualShaderNode {
        constructor(identifier?: any)
        /** Override this method to define the name of the associated custom node in the Visual Shader Editor's members dialog and graph.  
         *  Defining this method is **optional**, but recommended. If not overridden, the node will be named as "Unnamed".  
         */
        /* gdvirtual */ _getName(): string
        
        /** Override this method to define the description of the associated custom node in the Visual Shader Editor's members dialog.  
         *  Defining this method is **optional**.  
         */
        /* gdvirtual */ _getDescription(): string
        
        /** Override this method to define the path to the associated custom node in the Visual Shader Editor's members dialog. The path may look like `"MyGame/MyFunctions/Noise"`.  
         *  Defining this method is **optional**. If not overridden, the node will be filed under the "Addons" category.  
         */
        /* gdvirtual */ _getCategory(): string
        
        /** Override this method to define the return icon of the associated custom node in the Visual Shader Editor's members dialog.  
         *  Defining this method is **optional**. If not overridden, no return icon is shown.  
         */
        /* gdvirtual */ _getReturnIconType(): VisualShaderNode.PortType
        
        /** Override this method to define the number of input ports of the associated custom node.  
         *  Defining this method is **required**. If not overridden, the node has no input ports.  
         */
        /* gdvirtual */ _getInputPortCount(): int64
        
        /** Override this method to define the returned type of each input port of the associated custom node (see [enum VisualShaderNode.PortType] for possible types).  
         *  Defining this method is **optional**, but recommended. If not overridden, input ports will return the [constant VisualShaderNode.PORT_TYPE_SCALAR] type.  
         */
        /* gdvirtual */ _getInputPortType(port: int64): VisualShaderNode.PortType
        
        /** Override this method to define the names of input ports of the associated custom node. The names are used both for the input slots in the editor and as identifiers in the shader code, and are passed in the `input_vars` array in [method _get_code].  
         *  Defining this method is **optional**, but recommended. If not overridden, input ports are named as `"in" + str(port)`.  
         */
        /* gdvirtual */ _getInputPortName(port: int64): string
        
        /** Override this method to define the default value for the specified input port. Prefer use this over [method VisualShaderNode.set_input_port_default_value].  
         *  Defining this method is **required**. If not overridden, the node has no default values for their input ports.  
         */
        /* gdvirtual */ _getInputPortDefaultValue(port: int64): any
        
        /** Override this method to define the input port which should be connected by default when this node is created as a result of dragging a connection from an existing node to the empty space on the graph.  
         *  Defining this method is **optional**. If not overridden, the connection will be created to the first valid port.  
         */
        /* gdvirtual */ _getDefaultInputPort(type: VisualShaderNode.PortType): int64
        
        /** Override this method to define the number of output ports of the associated custom node.  
         *  Defining this method is **required**. If not overridden, the node has no output ports.  
         */
        /* gdvirtual */ _getOutputPortCount(): int64
        
        /** Override this method to define the returned type of each output port of the associated custom node (see [enum VisualShaderNode.PortType] for possible types).  
         *  Defining this method is **optional**, but recommended. If not overridden, output ports will return the [constant VisualShaderNode.PORT_TYPE_SCALAR] type.  
         */
        /* gdvirtual */ _getOutputPortType(port: int64): VisualShaderNode.PortType
        
        /** Override this method to define the names of output ports of the associated custom node. The names are used both for the output slots in the editor and as identifiers in the shader code, and are passed in the `output_vars` array in [method _get_code].  
         *  Defining this method is **optional**, but recommended. If not overridden, output ports are named as `"out" + str(port)`.  
         */
        /* gdvirtual */ _getOutputPortName(port: int64): string
        
        /** Override this method to define the number of the properties.  
         *  Defining this method is **optional**.  
         */
        /* gdvirtual */ _getPropertyCount(): int64
        
        /** Override this method to define the names of the property of the associated custom node.  
         *  Defining this method is **optional**.  
         */
        /* gdvirtual */ _getPropertyName(index: int64): string
        
        /** Override this method to define the default index of the property of the associated custom node.  
         *  Defining this method is **optional**.  
         */
        /* gdvirtual */ _getPropertyDefaultIndex(index: int64): int64
        
        /** Override this method to define the options inside the drop-down list property of the associated custom node.  
         *  Defining this method is **optional**.  
         */
        /* gdvirtual */ _getPropertyOptions(index: int64): PackedStringArray
        
        /** Override this method to define the actual shader code of the associated custom node. The shader code should be returned as a string, which can have multiple lines (the `"""` multiline string construct can be used for convenience).  
         *  The [param input_vars] and [param output_vars] arrays contain the string names of the various input and output variables, as defined by `_get_input_*` and `_get_output_*` virtual methods in this class.  
         *  The output ports can be assigned values in the shader code. For example, `return output_vars[0] + " = " + input_vars[0] + ";"`.  
         *  You can customize the generated code based on the shader [param mode] (see [enum Shader.Mode]) and/or [param type] (see [enum VisualShader.Type]).  
         *  Defining this method is **required**.  
         */
        /* gdvirtual */ _getCode(inputVars: GArray, outputVars: GArray, mode: Shader.Mode, type: VisualShader.Type): string
        
        /** Override this method to add a shader code to the beginning of each shader function (once). The shader code should be returned as a string, which can have multiple lines (the `"""` multiline string construct can be used for convenience).  
         *  If there are multiple custom nodes of different types which use this feature the order of each insertion is undefined.  
         *  You can customize the generated code based on the shader [param mode] (see [enum Shader.Mode]) and/or [param type] (see [enum VisualShader.Type]).  
         *  Defining this method is **optional**.  
         */
        /* gdvirtual */ _getFuncCode(mode: Shader.Mode, type: VisualShader.Type): string
        
        /** Override this method to add shader code on top of the global shader, to define your own standard library of reusable methods, varyings, constants, uniforms, etc. The shader code should be returned as a string, which can have multiple lines (the `"""` multiline string construct can be used for convenience).  
         *  Be careful with this functionality as it can cause name conflicts with other custom nodes, so be sure to give the defined entities unique names.  
         *  You can customize the generated code based on the shader [param mode] (see [enum Shader.Mode]).  
         *  Defining this method is **optional**.  
         */
        /* gdvirtual */ _getGlobalCode(mode: Shader.Mode): string
        
        /** Override this method to enable high-end mark in the Visual Shader Editor's members dialog.  
         *  Defining this method is **optional**. If not overridden, it's `false`.  
         */
        /* gdvirtual */ _isHighend(): boolean
        
        /** Override this method to prevent the node to be visible in the member dialog for the certain [param mode] (see [enum Shader.Mode]) and/or [param type] (see [enum VisualShader.Type]).  
         *  Defining this method is **optional**. If not overridden, it's `true`.  
         */
        /* gdvirtual */ _isAvailable(mode: Shader.Mode, type: VisualShader.Type): boolean
        _setInputPortDefaultValue(port: int64, value: any): void
        _setOptionIndex(option: int64, value: int64): void
        
        /** Returns the selected index of the drop-down list option within a graph. You may use this function to define the specific behavior in the [method _get_code] or [method _get_global_code]. */
        getOptionIndex(option: int64): int64
        get initialized(): boolean
        set initialized(value: boolean)
        get properties(): string
        set properties(value: string)
    }
    namespace VisualShaderNodeDerivativeFunc {
        enum OpType {
            OpTypeScalar = 0,
            OpTypeVector2D = 1,
            OpTypeVector3D = 2,
            OpTypeVector4D = 3,
            OpTypeMax = 4,
        }
        enum Function {
            FuncSum = 0,
            FuncX = 1,
            FuncY = 2,
            FuncMax = 3,
        }
        enum Precision {
            PrecisionNone = 0,
            PrecisionCoarse = 1,
            PrecisionFine = 2,
            PrecisionMax = 3,
        }
    }
    /** Calculates a derivative within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodederivativefunc.html  
     */
    class VisualShaderNodeDerivativeFunc extends VisualShaderNode {
        /** A floating-point scalar. */
        static readonly OP_TYPE_SCALAR = 0
        
        /** A 2D vector type. */
        static readonly OP_TYPE_VECTOR_2D = 1
        
        /** A 3D vector type. */
        static readonly OP_TYPE_VECTOR_3D = 2
        
        /** A 4D vector type. */
        static readonly OP_TYPE_VECTOR_4D = 3
        
        /** Represents the size of the [enum OpType] enum. */
        static readonly OP_TYPE_MAX = 4
        
        /** Sum of absolute derivative in `x` and `y`. */
        static readonly FUNC_SUM = 0
        
        /** Derivative in `x` using local differencing. */
        static readonly FUNC_X = 1
        
        /** Derivative in `y` using local differencing. */
        static readonly FUNC_Y = 2
        
        /** Represents the size of the [enum Function] enum. */
        static readonly FUNC_MAX = 3
        
        /** No precision is specified, the GPU driver is allowed to use whatever level of precision it chooses. This is the default option and is equivalent to using `dFdx()` or `dFdy()` in text shaders. */
        static readonly PRECISION_NONE = 0
        
        /** The derivative will be calculated using the current fragment's neighbors (which may not include the current fragment). This tends to be faster than using [constant PRECISION_FINE], but may not be suitable when more precision is needed. This is equivalent to using `dFdxCoarse()` or `dFdyCoarse()` in text shaders. */
        static readonly PRECISION_COARSE = 1
        
        /** The derivative will be calculated using the current fragment and its immediate neighbors. This tends to be slower than using [constant PRECISION_COARSE], but may be necessary when more precision is needed. This is equivalent to using `dFdxFine()` or `dFdyFine()` in text shaders. */
        static readonly PRECISION_FINE = 2
        
        /** Represents the size of the [enum Precision] enum. */
        static readonly PRECISION_MAX = 3
        constructor(identifier?: any)
        
        /** A type of operands and returned value. See [enum OpType] for options. */
        get opType(): int64
        set opType(value: int64)
        
        /** A derivative function type. See [enum Function] for options. */
        get "function"(): int64
        set "function"(value: int64)
        
        /** Sets the level of precision to use for the derivative function. See [enum Precision] for options. When using the Compatibility renderer, this setting has no effect. */
        get precision(): int64
        set precision(value: int64)
    }
    /** Calculates the determinant of a [Transform3D] within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodedeterminant.html  
     */
    class VisualShaderNodeDeterminant extends VisualShaderNode {
        constructor(identifier?: any)
    }
    /** A visual shader node representing distance fade effect.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodedistancefade.html  
     */
    class VisualShaderNodeDistanceFade extends VisualShaderNode {
        constructor(identifier?: any)
    }
    /** Calculates a dot product of two vectors within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodedotproduct.html  
     */
    class VisualShaderNodeDotProduct extends VisualShaderNode {
        constructor(identifier?: any)
    }
    /** A custom visual shader graph expression written in Godot Shading Language.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodeexpression.html  
     */
    class VisualShaderNodeExpression extends VisualShaderNodeGroupBase {
        constructor(identifier?: any)
        /** An expression in Godot Shading Language, which will be injected at the start of the graph's matching shader function (`vertex`, `fragment`, or `light`), and thus cannot be used to declare functions, varyings, uniforms, or global constants. */
        get expression(): string
        set expression(value: string)
    }
    /** Returns the vector that points in the same direction as a reference vector within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodefaceforward.html  
     */
    class VisualShaderNodeFaceForward extends VisualShaderNodeVectorBase {
        constructor(identifier?: any)
    }
    /** A scalar floating-point constant to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodefloatconstant.html  
     */
    class VisualShaderNodeFloatConstant extends VisualShaderNodeConstant {
        constructor(identifier?: any)
        /** A floating-point constant which represents a state of this node. */
        get constant(): float64
        set constant(value: float64)
    }
    namespace VisualShaderNodeFloatFunc {
        enum Function {
            FuncSin = 0,
            FuncCos = 1,
            FuncTan = 2,
            FuncAsin = 3,
            FuncAcos = 4,
            FuncAtan = 5,
            FuncSinh = 6,
            FuncCosh = 7,
            FuncTanh = 8,
            FuncLog = 9,
            FuncExp = 10,
            FuncSqrt = 11,
            FuncAbs = 12,
            FuncSign = 13,
            FuncFloor = 14,
            FuncRound = 15,
            FuncCeil = 16,
            FuncFract = 17,
            FuncSaturate = 18,
            FuncNegate = 19,
            FuncAcosh = 20,
            FuncAsinh = 21,
            FuncAtanh = 22,
            FuncDegrees = 23,
            FuncExp2 = 24,
            FuncInverseSqrt = 25,
            FuncLog2 = 26,
            FuncRadians = 27,
            FuncReciprocal = 28,
            FuncRoundeven = 29,
            FuncTrunc = 30,
            FuncOneminus = 31,
            FuncMax = 32,
        }
    }
    /** A scalar floating-point function to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodefloatfunc.html  
     */
    class VisualShaderNodeFloatFunc extends VisualShaderNode {
        /** Returns the sine of the parameter. Translates to `sin(x)` in the Godot Shader Language. */
        static readonly FUNC_SIN = 0
        
        /** Returns the cosine of the parameter. Translates to `cos(x)` in the Godot Shader Language. */
        static readonly FUNC_COS = 1
        
        /** Returns the tangent of the parameter. Translates to `tan(x)` in the Godot Shader Language. */
        static readonly FUNC_TAN = 2
        
        /** Returns the arc-sine of the parameter. Translates to `asin(x)` in the Godot Shader Language. */
        static readonly FUNC_ASIN = 3
        
        /** Returns the arc-cosine of the parameter. Translates to `acos(x)` in the Godot Shader Language. */
        static readonly FUNC_ACOS = 4
        
        /** Returns the arc-tangent of the parameter. Translates to `atan(x)` in the Godot Shader Language. */
        static readonly FUNC_ATAN = 5
        
        /** Returns the hyperbolic sine of the parameter. Translates to `sinh(x)` in the Godot Shader Language. */
        static readonly FUNC_SINH = 6
        
        /** Returns the hyperbolic cosine of the parameter. Translates to `cosh(x)` in the Godot Shader Language. */
        static readonly FUNC_COSH = 7
        
        /** Returns the hyperbolic tangent of the parameter. Translates to `tanh(x)` in the Godot Shader Language. */
        static readonly FUNC_TANH = 8
        
        /** Returns the natural logarithm of the parameter. Translates to `log(x)` in the Godot Shader Language. */
        static readonly FUNC_LOG = 9
        
        /** Returns the natural exponentiation of the parameter. Translates to `exp(x)` in the Godot Shader Language. */
        static readonly FUNC_EXP = 10
        
        /** Returns the square root of the parameter. Translates to `sqrt(x)` in the Godot Shader Language. */
        static readonly FUNC_SQRT = 11
        
        /** Returns the absolute value of the parameter. Translates to `abs(x)` in the Godot Shader Language. */
        static readonly FUNC_ABS = 12
        
        /** Extracts the sign of the parameter. Translates to `sign(x)` in the Godot Shader Language. */
        static readonly FUNC_SIGN = 13
        
        /** Finds the nearest integer less than or equal to the parameter. Translates to `floor(x)` in the Godot Shader Language. */
        static readonly FUNC_FLOOR = 14
        
        /** Finds the nearest integer to the parameter. Translates to `round(x)` in the Godot Shader Language. */
        static readonly FUNC_ROUND = 15
        
        /** Finds the nearest integer that is greater than or equal to the parameter. Translates to `ceil(x)` in the Godot Shader Language. */
        static readonly FUNC_CEIL = 16
        
        /** Computes the fractional part of the argument. Translates to `fract(x)` in the Godot Shader Language. */
        static readonly FUNC_FRACT = 17
        
        /** Clamps the value between `0.0` and `1.0` using `min(max(x, 0.0), 1.0)`. */
        static readonly FUNC_SATURATE = 18
        
        /** Negates the `x` using `-(x)`. */
        static readonly FUNC_NEGATE = 19
        
        /** Returns the arc-hyperbolic-cosine of the parameter. Translates to `acosh(x)` in the Godot Shader Language. */
        static readonly FUNC_ACOSH = 20
        
        /** Returns the arc-hyperbolic-sine of the parameter. Translates to `asinh(x)` in the Godot Shader Language. */
        static readonly FUNC_ASINH = 21
        
        /** Returns the arc-hyperbolic-tangent of the parameter. Translates to `atanh(x)` in the Godot Shader Language. */
        static readonly FUNC_ATANH = 22
        
        /** Convert a quantity in radians to degrees. Translates to `degrees(x)` in the Godot Shader Language. */
        static readonly FUNC_DEGREES = 23
        
        /** Returns 2 raised by the power of the parameter. Translates to `exp2(x)` in the Godot Shader Language. */
        static readonly FUNC_EXP2 = 24
        
        /** Returns the inverse of the square root of the parameter. Translates to `inversesqrt(x)` in the Godot Shader Language. */
        static readonly FUNC_INVERSE_SQRT = 25
        
        /** Returns the base 2 logarithm of the parameter. Translates to `log2(x)` in the Godot Shader Language. */
        static readonly FUNC_LOG2 = 26
        
        /** Convert a quantity in degrees to radians. Translates to `radians(x)` in the Godot Shader Language. */
        static readonly FUNC_RADIANS = 27
        
        /** Finds reciprocal value of dividing 1 by `x` (i.e. `1 / x`). */
        static readonly FUNC_RECIPROCAL = 28
        
        /** Finds the nearest even integer to the parameter. Translates to `roundEven(x)` in the Godot Shader Language. */
        static readonly FUNC_ROUNDEVEN = 29
        
        /** Returns a value equal to the nearest integer to `x` whose absolute value is not larger than the absolute value of `x`. Translates to `trunc(x)` in the Godot Shader Language. */
        static readonly FUNC_TRUNC = 30
        
        /** Subtracts scalar `x` from 1 (i.e. `1 - x`). */
        static readonly FUNC_ONEMINUS = 31
        
        /** Represents the size of the [enum Function] enum. */
        static readonly FUNC_MAX = 32
        constructor(identifier?: any)
        
        /** A function to be applied to the scalar. See [enum Function] for options. */
        get "function"(): int64
        set "function"(value: int64)
    }
    namespace VisualShaderNodeFloatOp {
        enum Operator {
            OpAdd = 0,
            OpSub = 1,
            OpMul = 2,
            OpDiv = 3,
            OpMod = 4,
            OpPow = 5,
            OpMax = 6,
            OpMin = 7,
            OpAtan2 = 8,
            OpStep = 9,
            OpEnumSize = 10,
        }
    }
    /** A floating-point scalar operator to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodefloatop.html  
     */
    class VisualShaderNodeFloatOp extends VisualShaderNode {
        /** Sums two numbers using `a + b`. */
        static readonly OP_ADD = 0
        
        /** Subtracts two numbers using `a - b`. */
        static readonly OP_SUB = 1
        
        /** Multiplies two numbers using `a * b`. */
        static readonly OP_MUL = 2
        
        /** Divides two numbers using `a / b`. */
        static readonly OP_DIV = 3
        
        /** Calculates the remainder of two numbers. Translates to `mod(a, b)` in the Godot Shader Language. */
        static readonly OP_MOD = 4
        
        /** Raises the `a` to the power of `b`. Translates to `pow(a, b)` in the Godot Shader Language. */
        static readonly OP_POW = 5
        
        /** Returns the greater of two numbers. Translates to `max(a, b)` in the Godot Shader Language. */
        static readonly OP_MAX = 6
        
        /** Returns the lesser of two numbers. Translates to `min(a, b)` in the Godot Shader Language. */
        static readonly OP_MIN = 7
        
        /** Returns the arc-tangent of the parameters. Translates to `atan(a, b)` in the Godot Shader Language. */
        static readonly OP_ATAN2 = 8
        
        /** Generates a step function by comparing `b`(x) to `a`(edge). Returns 0.0 if `x` is smaller than `edge` and otherwise 1.0. Translates to `step(a, b)` in the Godot Shader Language. */
        static readonly OP_STEP = 9
        
        /** Represents the size of the [enum Operator] enum. */
        static readonly OP_ENUM_SIZE = 10
        constructor(identifier?: any)
        
        /** An operator to be applied to the inputs. See [enum Operator] for options. */
        get operator(): int64
        set operator(value: int64)
    }
    namespace VisualShaderNodeFloatParameter {
        enum Hint {
            HintNone = 0,
            HintRange = 1,
            HintRangeStep = 2,
            HintMax = 3,
        }
    }
    /** A scalar float parameter to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodefloatparameter.html  
     */
    class VisualShaderNodeFloatParameter extends VisualShaderNodeParameter {
        /** No hint used. */
        static readonly HINT_NONE = 0
        
        /** A range hint for scalar value, which limits possible input values between [member min] and [member max]. Translated to `hint_range(min, max)` in shader code. */
        static readonly HINT_RANGE = 1
        
        /** A range hint for scalar value with step, which limits possible input values between [member min] and [member max], with a step (increment) of [member step]). Translated to `hint_range(min, max, step)` in shader code. */
        static readonly HINT_RANGE_STEP = 2
        
        /** Represents the size of the [enum Hint] enum. */
        static readonly HINT_MAX = 3
        constructor(identifier?: any)
        
        /** A hint applied to the uniform, which controls the values it can take when set through the Inspector. */
        get hint(): int64
        set hint(value: int64)
        
        /** Maximum value for range hints. Used if [member hint] is set to [constant HINT_RANGE] or [constant HINT_RANGE_STEP]. */
        get min(): float64
        set min(value: float64)
        
        /** Minimum value for range hints. Used if [member hint] is set to [constant HINT_RANGE] or [constant HINT_RANGE_STEP]. */
        get max(): float64
        set max(value: float64)
        
        /** Step (increment) value for the range hint with step. Used if [member hint] is set to [constant HINT_RANGE_STEP]. */
        get step(): float64
        set step(value: float64)
        
        /** Enables usage of the [member default_value]. */
        get defaultValueEnabled(): boolean
        set defaultValueEnabled(value: boolean)
        
        /** A default value to be assigned within the shader. */
        get defaultValue(): float64
        set defaultValue(value: float64)
    }
    /** A frame other visual shader nodes can be attached to for better organization.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodeframe.html  
     */
    class VisualShaderNodeFrame extends VisualShaderNodeResizableBase {
        constructor(identifier?: any)
        /** Adds a node to the list of nodes attached to the frame. Should not be called directly, use the [method VisualShader.attach_node_to_frame] method instead. */
        addAttachedNode(node: int64): void
        
        /** Removes a node from the list of nodes attached to the frame. Should not be called directly, use the [method VisualShader.detach_node_from_frame] method instead. */
        removeAttachedNode(node: int64): void
        
        /** The title of the node. */
        get title(): string
        set title(value: string)
        
        /** If `true`, the frame will be tinted with the color specified in [member tint_color]. */
        get tintColorEnabled(): boolean
        set tintColorEnabled(value: boolean)
        
        /** The color of the frame when [member tint_color_enabled] is `true`. */
        get tintColor(): Color
        set tintColor(value: Color)
        
        /** If `true`, the frame will automatically resize to enclose all attached nodes. */
        get autoshrink(): boolean
        set autoshrink(value: boolean)
        
        /** The list of nodes attached to the frame. */
        get attachedNodes(): PackedInt32Array
        set attachedNodes(value: PackedInt32Array | int32[])
    }
    /** A Fresnel effect to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodefresnel.html  
     */
    class VisualShaderNodeFresnel extends VisualShaderNode {
        constructor(identifier?: any)
    }
    /** A custom global visual shader graph expression written in Godot Shading Language.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodeglobalexpression.html  
     */
    class VisualShaderNodeGlobalExpression extends VisualShaderNodeExpression {
        constructor(identifier?: any)
    }
    /** Base class for a family of nodes with variable number of input and output ports within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodegroupbase.html  
     */
    class VisualShaderNodeGroupBase extends VisualShaderNodeResizableBase {
        constructor(identifier?: any)
        /** Defines all input ports using a [String] formatted as a colon-separated list: `id,type,name;` (see [method add_input_port]). */
        setInputs(inputs: string): void
        
        /** Returns a [String] description of the input ports as a colon-separated list using the format `id,type,name;` (see [method add_input_port]). */
        getInputs(): string
        
        /** Defines all output ports using a [String] formatted as a colon-separated list: `id,type,name;` (see [method add_output_port]). */
        setOutputs(outputs: string): void
        
        /** Returns a [String] description of the output ports as a colon-separated list using the format `id,type,name;` (see [method add_output_port]). */
        getOutputs(): string
        
        /** Returns `true` if the specified port name does not override an existed port name and is valid within the shader. */
        isValidPortName(name: string): boolean
        
        /** Adds an input port with the specified [param type] (see [enum VisualShaderNode.PortType]) and [param name]. */
        addInputPort(id: int64, type: int64, name: string): void
        
        /** Removes the specified input port. */
        removeInputPort(id: int64): void
        
        /** Returns the number of input ports in use. Alternative for [method get_free_input_port_id]. */
        getInputPortCount(): int64
        
        /** Returns `true` if the specified input port exists. */
        hasInputPort(id: int64): boolean
        
        /** Removes all previously specified input ports. */
        clearInputPorts(): void
        
        /** Adds an output port with the specified [param type] (see [enum VisualShaderNode.PortType]) and [param name]. */
        addOutputPort(id: int64, type: int64, name: string): void
        
        /** Removes the specified output port. */
        removeOutputPort(id: int64): void
        
        /** Returns the number of output ports in use. Alternative for [method get_free_output_port_id]. */
        getOutputPortCount(): int64
        
        /** Returns `true` if the specified output port exists. */
        hasOutputPort(id: int64): boolean
        
        /** Removes all previously specified output ports. */
        clearOutputPorts(): void
        
        /** Renames the specified input port. */
        setInputPortName(id: int64, name: string): void
        
        /** Sets the specified input port's type (see [enum VisualShaderNode.PortType]). */
        setInputPortType(id: int64, type: int64): void
        
        /** Renames the specified output port. */
        setOutputPortName(id: int64, name: string): void
        
        /** Sets the specified output port's type (see [enum VisualShaderNode.PortType]). */
        setOutputPortType(id: int64, type: int64): void
        
        /** Returns a free input port ID which can be used in [method add_input_port]. */
        getFreeInputPortId(): int64
        
        /** Returns a free output port ID which can be used in [method add_output_port]. */
        getFreeOutputPortId(): int64
    }
    /** Outputs a 3D vector based on the result of a floating-point comparison within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodeif.html  
     */
    class VisualShaderNodeIf extends VisualShaderNode {
        constructor(identifier?: any)
    }
    /** Represents the input shader parameter within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodeinput.html  
     */
    class VisualShaderNodeInput extends VisualShaderNode {
        constructor(identifier?: any)
        /** Returns a translated name of the current constant in the Godot Shader Language. E.g. `"ALBEDO"` if the [member input_name] equal to `"albedo"`. */
        getInputRealName(): string
        
        /** One of the several input constants in lower-case style like: "vertex" (`VERTEX`) or "point_size" (`POINT_SIZE`). */
        get inputName(): StringName
        set inputName(value: StringName)
        
        /** Emitted when input is changed via [member input_name]. */
        readonly inputTypeChanged: Signal<() => void>
    }
    /** A scalar integer constant to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodeintconstant.html  
     */
    class VisualShaderNodeIntConstant extends VisualShaderNodeConstant {
        constructor(identifier?: any)
        /** An integer constant which represents a state of this node. */
        get constant(): int64
        set constant(value: int64)
    }
    namespace VisualShaderNodeIntFunc {
        enum Function {
            FuncAbs = 0,
            FuncNegate = 1,
            FuncSign = 2,
            FuncBitwiseNot = 3,
            FuncMax = 4,
        }
    }
    /** A scalar integer function to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodeintfunc.html  
     */
    class VisualShaderNodeIntFunc extends VisualShaderNode {
        /** Returns the absolute value of the parameter. Translates to `abs(x)` in the Godot Shader Language. */
        static readonly FUNC_ABS = 0
        
        /** Negates the `x` using `-(x)`. */
        static readonly FUNC_NEGATE = 1
        
        /** Extracts the sign of the parameter. Translates to `sign(x)` in the Godot Shader Language. */
        static readonly FUNC_SIGN = 2
        
        /** Returns the result of bitwise `NOT` operation on the integer. Translates to `~a` in the Godot Shader Language. */
        static readonly FUNC_BITWISE_NOT = 3
        
        /** Represents the size of the [enum Function] enum. */
        static readonly FUNC_MAX = 4
        constructor(identifier?: any)
        
        /** A function to be applied to the scalar. See [enum Function] for options. */
        get "function"(): int64
        set "function"(value: int64)
    }
    namespace VisualShaderNodeIntOp {
        enum Operator {
            OpAdd = 0,
            OpSub = 1,
            OpMul = 2,
            OpDiv = 3,
            OpMod = 4,
            OpMax = 5,
            OpMin = 6,
            OpBitwiseAnd = 7,
            OpBitwiseOr = 8,
            OpBitwiseXor = 9,
            OpBitwiseLeftShift = 10,
            OpBitwiseRightShift = 11,
            OpEnumSize = 12,
        }
    }
    /** An integer scalar operator to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodeintop.html  
     */
    class VisualShaderNodeIntOp extends VisualShaderNode {
        /** Sums two numbers using `a + b`. */
        static readonly OP_ADD = 0
        
        /** Subtracts two numbers using `a - b`. */
        static readonly OP_SUB = 1
        
        /** Multiplies two numbers using `a * b`. */
        static readonly OP_MUL = 2
        
        /** Divides two numbers using `a / b`. */
        static readonly OP_DIV = 3
        
        /** Calculates the remainder of two numbers using `a % b`. */
        static readonly OP_MOD = 4
        
        /** Returns the greater of two numbers. Translates to `max(a, b)` in the Godot Shader Language. */
        static readonly OP_MAX = 5
        
        /** Returns the lesser of two numbers. Translates to `max(a, b)` in the Godot Shader Language. */
        static readonly OP_MIN = 6
        
        /** Returns the result of bitwise `AND` operation on the integer. Translates to `a & b` in the Godot Shader Language. */
        static readonly OP_BITWISE_AND = 7
        
        /** Returns the result of bitwise `OR` operation for two integers. Translates to `a | b` in the Godot Shader Language. */
        static readonly OP_BITWISE_OR = 8
        
        /** Returns the result of bitwise `XOR` operation for two integers. Translates to `a ^ b` in the Godot Shader Language. */
        static readonly OP_BITWISE_XOR = 9
        
        /** Returns the result of bitwise left shift operation on the integer. Translates to `a << b` in the Godot Shader Language. */
        static readonly OP_BITWISE_LEFT_SHIFT = 10
        
        /** Returns the result of bitwise right shift operation on the integer. Translates to `a >> b` in the Godot Shader Language. */
        static readonly OP_BITWISE_RIGHT_SHIFT = 11
        
        /** Represents the size of the [enum Operator] enum. */
        static readonly OP_ENUM_SIZE = 12
        constructor(identifier?: any)
        
        /** An operator to be applied to the inputs. See [enum Operator] for options. */
        get operator(): int64
        set operator(value: int64)
    }
    namespace VisualShaderNodeIntParameter {
        enum Hint {
            HintNone = 0,
            HintRange = 1,
            HintRangeStep = 2,
            HintEnum = 3,
            HintMax = 4,
        }
    }
    /** A visual shader node for shader parameter (uniform) of type [int].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodeintparameter.html  
     */
    class VisualShaderNodeIntParameter extends VisualShaderNodeParameter {
        /** The parameter will not constrain its value. */
        static readonly HINT_NONE = 0
        
        /** The parameter's value must be within the specified [member min]/[member max] range. */
        static readonly HINT_RANGE = 1
        
        /** The parameter's value must be within the specified range, with the given [member step] between values. */
        static readonly HINT_RANGE_STEP = 2
        
        /** The parameter uses an enum to associate preset values to names in the editor. */
        static readonly HINT_ENUM = 3
        
        /** Represents the size of the [enum Hint] enum. */
        static readonly HINT_MAX = 4
        constructor(identifier?: any)
        
        /** Range hint of this node. Use it to customize valid parameter range. */
        get hint(): int64
        set hint(value: int64)
        
        /** The minimum value this parameter can take. [member hint] must be either [constant HINT_RANGE] or [constant HINT_RANGE_STEP] for this to take effect. */
        get min(): int64
        set min(value: int64)
        
        /** The maximum value this parameter can take. [member hint] must be either [constant HINT_RANGE] or [constant HINT_RANGE_STEP] for this to take effect. */
        get max(): int64
        set max(value: int64)
        
        /** The step between parameter's values. Forces the parameter to be a multiple of the given value. [member hint] must be [constant HINT_RANGE_STEP] for this to take effect. */
        get step(): int64
        set step(value: int64)
        
        /** The names used for the enum select in the editor. [member hint] must be [constant HINT_ENUM] for this to take effect. */
        get enumNames(): PackedStringArray
        set enumNames(value: PackedStringArray | string[])
        
        /** If `true`, the node will have a custom default value. */
        get defaultValueEnabled(): boolean
        set defaultValueEnabled(value: boolean)
        
        /** Default value of this parameter, which will be used if not set externally. [member default_value_enabled] must be enabled; defaults to `0` otherwise. */
        get defaultValue(): int64
        set defaultValue(value: int64)
    }
    namespace VisualShaderNodeIs {
        enum Function {
            FuncIsInf = 0,
            FuncIsNan = 1,
            FuncMax = 2,
        }
    }
    /** A boolean comparison operator to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodeis.html  
     */
    class VisualShaderNodeIs extends VisualShaderNode {
        /** Comparison with `INF` (Infinity). */
        static readonly FUNC_IS_INF = 0
        
        /** Comparison with `NaN` (Not a Number; indicates invalid numeric results, such as division by zero). */
        static readonly FUNC_IS_NAN = 1
        
        /** Represents the size of the [enum Function] enum. */
        static readonly FUNC_MAX = 2
        constructor(identifier?: any)
        
        /** The comparison function. See [enum Function] for options. */
        get "function"(): int64
        set "function"(value: int64)
    }
    /** A visual shader node that returns the depth value of the DEPTH_TEXTURE node in a linear space.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodelinearscenedepth.html  
     */
    class VisualShaderNodeLinearSceneDepth extends VisualShaderNode {
        constructor(identifier?: any)
    }
    namespace VisualShaderNodeMix {
        enum OpType {
            OpTypeScalar = 0,
            OpTypeVector2D = 1,
            OpTypeVector2DScalar = 2,
            OpTypeVector3D = 3,
            OpTypeVector3DScalar = 4,
            OpTypeVector4D = 5,
            OpTypeVector4DScalar = 6,
            OpTypeMax = 7,
        }
    }
    /** Linearly interpolates between two values within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodemix.html  
     */
    class VisualShaderNodeMix extends VisualShaderNode {
        /** A floating-point scalar. */
        static readonly OP_TYPE_SCALAR = 0
        
        /** A 2D vector type. */
        static readonly OP_TYPE_VECTOR_2D = 1
        
        /** The `a` and `b` ports use a 2D vector type. The `weight` port uses a scalar type. */
        static readonly OP_TYPE_VECTOR_2D_SCALAR = 2
        
        /** A 3D vector type. */
        static readonly OP_TYPE_VECTOR_3D = 3
        
        /** The `a` and `b` ports use a 3D vector type. The `weight` port uses a scalar type. */
        static readonly OP_TYPE_VECTOR_3D_SCALAR = 4
        
        /** A 4D vector type. */
        static readonly OP_TYPE_VECTOR_4D = 5
        
        /** The `a` and `b` ports use a 4D vector type. The `weight` port uses a scalar type. */
        static readonly OP_TYPE_VECTOR_4D_SCALAR = 6
        
        /** Represents the size of the [enum OpType] enum. */
        static readonly OP_TYPE_MAX = 7
        constructor(identifier?: any)
        
        /** A type of operands and returned value. */
        get opType(): int64
        set opType(value: int64)
    }
    namespace VisualShaderNodeMultiplyAdd {
        enum OpType {
            OpTypeScalar = 0,
            OpTypeVector2D = 1,
            OpTypeVector3D = 2,
            OpTypeVector4D = 3,
            OpTypeMax = 4,
        }
    }
    /** Performs a fused multiply-add operation within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodemultiplyadd.html  
     */
    class VisualShaderNodeMultiplyAdd extends VisualShaderNode {
        /** A floating-point scalar type. */
        static readonly OP_TYPE_SCALAR = 0
        
        /** A 2D vector type. */
        static readonly OP_TYPE_VECTOR_2D = 1
        
        /** A 3D vector type. */
        static readonly OP_TYPE_VECTOR_3D = 2
        
        /** A 4D vector type. */
        static readonly OP_TYPE_VECTOR_4D = 3
        
        /** Represents the size of the [enum OpType] enum. */
        static readonly OP_TYPE_MAX = 4
        constructor(identifier?: any)
        
        /** A type of operands and returned value. */
        get opType(): int64
        set opType(value: int64)
    }
    /** Calculates an outer product of two vectors within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodeouterproduct.html  
     */
    class VisualShaderNodeOuterProduct extends VisualShaderNode {
        constructor(identifier?: any)
    }
    /** Represents the output shader parameters within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodeoutput.html  
     */
    class VisualShaderNodeOutput extends VisualShaderNode {
        constructor(identifier?: any)
    }
    namespace VisualShaderNodeParameter {
        enum Qualifier {
            QualNone = 0,
            QualGlobal = 1,
            QualInstance = 2,
            QualMax = 3,
        }
    }
    /** A base type for the parameters within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodeparameter.html  
     */
    class VisualShaderNodeParameter extends VisualShaderNode {
        /** The parameter will be tied to the [ShaderMaterial] using this shader. */
        static readonly QUAL_NONE = 0
        
        /** The parameter will use a global value, defined in Project Settings. */
        static readonly QUAL_GLOBAL = 1
        
        /** The parameter will be tied to the node with attached [ShaderMaterial] using this shader. */
        static readonly QUAL_INSTANCE = 2
        
        /** Represents the size of the [enum Qualifier] enum. */
        static readonly QUAL_MAX = 3
        constructor(identifier?: any)
        
        /** Name of the parameter, by which it can be accessed through the [ShaderMaterial] properties. */
        get parameterName(): StringName
        set parameterName(value: StringName)
        
        /** Defines the scope of the parameter. */
        get qualifier(): int64
        set qualifier(value: int64)
    }
    /** A reference to an existing [VisualShaderNodeParameter].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodeparameterref.html  
     */
    class VisualShaderNodeParameterRef extends VisualShaderNode {
        constructor(identifier?: any)
        /** The name of the parameter which this reference points to. */
        get parameterName(): StringName
        set parameterName(value: StringName)
        get paramType(): int64
        set paramType(value: int64)
    }
    namespace VisualShaderNodeParticleAccelerator {
        enum Mode {
            ModeLinear = 0,
            ModeRadial = 1,
            ModeTangential = 2,
            ModeMax = 3,
        }
    }
    /** A visual shader node that accelerates particles.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodeparticleaccelerator.html  
     */
    class VisualShaderNodeParticleAccelerator extends VisualShaderNode {
        /** The particles will be accelerated based on their velocity. */
        static readonly MODE_LINEAR = 0
        
        /** The particles will be accelerated towards or away from the center. */
        static readonly MODE_RADIAL = 1
        
        /** The particles will be accelerated tangentially to the radius vector from center to their position. */
        static readonly MODE_TANGENTIAL = 2
        
        /** Represents the size of the [enum Mode] enum. */
        static readonly MODE_MAX = 3
        constructor(identifier?: any)
        
        /** Defines in what manner the particles will be accelerated. */
        get mode(): int64
        set mode(value: int64)
    }
    /** A visual shader node that makes particles emitted in a box shape.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodeparticleboxemitter.html  
     */
    class VisualShaderNodeParticleBoxEmitter extends VisualShaderNodeParticleEmitter {
        constructor(identifier?: any)
    }
    /** A visual shader node that makes particles move in a cone shape.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodeparticleconevelocity.html  
     */
    class VisualShaderNodeParticleConeVelocity extends VisualShaderNode {
        constructor(identifier?: any)
    }
    namespace VisualShaderNodeParticleEmit {
        enum EmitFlags {
            EmitFlagPosition = 1,
            EmitFlagRotScale = 2,
            EmitFlagVelocity = 4,
            EmitFlagColor = 8,
            EmitFlagCustom = 16,
        }
    }
    /** A visual shader node that forces to emit a particle from a sub-emitter.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodeparticleemit.html  
     */
    class VisualShaderNodeParticleEmit extends VisualShaderNode {
        /** If enabled, the particle starts with the position defined by this node. */
        static readonly EMIT_FLAG_POSITION = 1
        
        /** If enabled, the particle starts with the rotation and scale defined by this node. */
        static readonly EMIT_FLAG_ROT_SCALE = 2
        
        /** If enabled,the particle starts with the velocity defined by this node. */
        static readonly EMIT_FLAG_VELOCITY = 4
        
        /** If enabled, the particle starts with the color defined by this node. */
        static readonly EMIT_FLAG_COLOR = 8
        
        /** If enabled, the particle starts with the `CUSTOM` data defined by this node. */
        static readonly EMIT_FLAG_CUSTOM = 16
        constructor(identifier?: any)
        
        /** Flags used to override the properties defined in the sub-emitter's process material. */
        get flags(): int64
        set flags(value: int64)
    }
    /** A base class for particle emitters.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodeparticleemitter.html  
     */
    class VisualShaderNodeParticleEmitter extends VisualShaderNode {
        constructor(identifier?: any)
        /** If `true`, the result of this emitter is projected to 2D space. By default it is `false` and meant for use in 3D space. */
        get mode2D(): boolean
        set mode2D(value: boolean)
    }
    /** A visual shader node that makes particles emitted in a shape defined by a [Mesh].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodeparticlemeshemitter.html  
     */
    class VisualShaderNodeParticleMeshEmitter extends VisualShaderNodeParticleEmitter {
        constructor(identifier?: any)
        /** The [Mesh] that defines emission shape. */
        get mesh(): null | Mesh
        set mesh(value: null | Mesh)
        
        /** If `true`, the particles will emit from all surfaces of the mesh. */
        get useAllSurfaces(): boolean
        set useAllSurfaces(value: boolean)
        
        /** Index of the surface that emits particles. [member use_all_surfaces] must be `false` for this to take effect. */
        get surfaceIndex(): int64
        set surfaceIndex(value: int64)
    }
    /** A visual shader helper node for multiplying position and rotation of particles.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodeparticlemultiplybyaxisangle.html  
     */
    class VisualShaderNodeParticleMultiplyByAxisAngle extends VisualShaderNode {
        constructor(identifier?: any)
        /** If `true`, the angle will be interpreted in degrees instead of radians. */
        get degreesMode(): boolean
        set degreesMode(value: boolean)
    }
    /** Visual shader node that defines output values for particle emitting.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodeparticleoutput.html  
     */
    class VisualShaderNodeParticleOutput extends VisualShaderNodeOutput {
        constructor(identifier?: any)
    }
    namespace VisualShaderNodeParticleRandomness {
        enum OpType {
            OpTypeScalar = 0,
            OpTypeVector2D = 1,
            OpTypeVector3D = 2,
            OpTypeVector4D = 3,
            OpTypeMax = 4,
        }
    }
    /** Visual shader node for randomizing particle values.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodeparticlerandomness.html  
     */
    class VisualShaderNodeParticleRandomness extends VisualShaderNode {
        /** A floating-point scalar. */
        static readonly OP_TYPE_SCALAR = 0
        
        /** A 2D vector type. */
        static readonly OP_TYPE_VECTOR_2D = 1
        
        /** A 3D vector type. */
        static readonly OP_TYPE_VECTOR_3D = 2
        
        /** A 4D vector type. */
        static readonly OP_TYPE_VECTOR_4D = 3
        
        /** Represents the size of the [enum OpType] enum. */
        static readonly OP_TYPE_MAX = 4
        constructor(identifier?: any)
        
        /** A type of operands and returned value. */
        get opType(): int64
        set opType(value: int64)
    }
    /** A visual shader node that makes particles emitted in a ring shape.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodeparticleringemitter.html  
     */
    class VisualShaderNodeParticleRingEmitter extends VisualShaderNodeParticleEmitter {
        constructor(identifier?: any)
    }
    /** A visual shader node that makes particles emitted in a sphere shape.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodeparticlesphereemitter.html  
     */
    class VisualShaderNodeParticleSphereEmitter extends VisualShaderNodeParticleEmitter {
        constructor(identifier?: any)
    }
    /** A visual shader node representing proximity fade effect.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodeproximityfade.html  
     */
    class VisualShaderNodeProximityFade extends VisualShaderNode {
        constructor(identifier?: any)
    }
    /** A visual shader node that generates a pseudo-random scalar.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernoderandomrange.html  
     */
    class VisualShaderNodeRandomRange extends VisualShaderNode {
        constructor(identifier?: any)
    }
    namespace VisualShaderNodeRemap {
        enum OpType {
            OpTypeScalar = 0,
            OpTypeVector2D = 1,
            OpTypeVector2DScalar = 2,
            OpTypeVector3D = 3,
            OpTypeVector3DScalar = 4,
            OpTypeVector4D = 5,
            OpTypeVector4DScalar = 6,
            OpTypeMax = 7,
        }
    }
    /** A visual shader node for remap function.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernoderemap.html  
     */
    class VisualShaderNodeRemap extends VisualShaderNode {
        /** A floating-point scalar type. */
        static readonly OP_TYPE_SCALAR = 0
        
        /** A 2D vector type. */
        static readonly OP_TYPE_VECTOR_2D = 1
        
        /** The `value` port uses a 2D vector type, while the `input min`, `input max`, `output min`, and `output max` ports use a floating-point scalar type. */
        static readonly OP_TYPE_VECTOR_2D_SCALAR = 2
        
        /** A 3D vector type. */
        static readonly OP_TYPE_VECTOR_3D = 3
        
        /** The `value` port uses a 3D vector type, while the `input min`, `input max`, `output min`, and `output max` ports use a floating-point scalar type. */
        static readonly OP_TYPE_VECTOR_3D_SCALAR = 4
        
        /** A 4D vector type. */
        static readonly OP_TYPE_VECTOR_4D = 5
        
        /** The `value` port uses a 4D vector type, while the `input min`, `input max`, `output min`, and `output max` ports use a floating-point scalar type. */
        static readonly OP_TYPE_VECTOR_4D_SCALAR = 6
        
        /** Represents the size of the [enum OpType] enum. */
        static readonly OP_TYPE_MAX = 7
        constructor(identifier?: any)
        get opType(): int64
        set opType(value: int64)
    }
    /** A node that allows rerouting a connection within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodereroute.html  
     */
    class VisualShaderNodeReroute extends VisualShaderNode {
        constructor(identifier?: any)
        get portType(): int64
        set portType(value: int64)
    }
    /** Base class for resizable nodes in a visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernoderesizablebase.html  
     */
    class VisualShaderNodeResizableBase extends VisualShaderNode {
        constructor(identifier?: any)
        /** The size of the node in the visual shader graph. */
        get size(): Vector2
        set size(value: Vector2)
    }
    /** A visual shader node that modifies the rotation of the object using a rotation matrix.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernoderotationbyaxis.html  
     */
    class VisualShaderNodeRotationByAxis extends VisualShaderNode {
        constructor(identifier?: any)
    }
    class VisualShaderNodeSdfRaymarch extends VisualShaderNode {
        constructor(identifier?: any)
    }
    class VisualShaderNodeSdfToScreenUV extends VisualShaderNode {
        constructor(identifier?: any)
    }
    namespace VisualShaderNodeSample3D {
        enum Source {
            SourceTexture = 0,
            SourcePort = 1,
            SourceMax = 2,
        }
    }
    /** A base node for nodes which samples 3D textures in the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodesample3d.html  
     */
    class VisualShaderNodeSample3D extends VisualShaderNode {
        /** Creates internal uniform and provides a way to assign it within node. */
        static readonly SOURCE_TEXTURE = 0
        
        /** Use the uniform texture from sampler port. */
        static readonly SOURCE_PORT = 1
        
        /** Represents the size of the [enum Source] enum. */
        static readonly SOURCE_MAX = 2
        constructor(identifier?: any)
        
        /** An input source type. */
        get source(): int64
        set source(value: int64)
    }
    /** A visual shader node that unpacks the screen normal texture in World Space.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodescreennormalworldspace.html  
     */
    class VisualShaderNodeScreenNormalWorldSpace extends VisualShaderNode {
        constructor(identifier?: any)
    }
    class VisualShaderNodeScreenUVToSdf extends VisualShaderNode {
        constructor(identifier?: any)
    }
    namespace VisualShaderNodeSmoothStep {
        enum OpType {
            OpTypeScalar = 0,
            OpTypeVector2D = 1,
            OpTypeVector2DScalar = 2,
            OpTypeVector3D = 3,
            OpTypeVector3DScalar = 4,
            OpTypeVector4D = 5,
            OpTypeVector4DScalar = 6,
            OpTypeMax = 7,
        }
    }
    /** Calculates a SmoothStep function within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodesmoothstep.html  
     */
    class VisualShaderNodeSmoothStep extends VisualShaderNode {
        /** A floating-point scalar type. */
        static readonly OP_TYPE_SCALAR = 0
        
        /** A 2D vector type. */
        static readonly OP_TYPE_VECTOR_2D = 1
        
        /** The `x` port uses a 2D vector type. The first two ports use a floating-point scalar type. */
        static readonly OP_TYPE_VECTOR_2D_SCALAR = 2
        
        /** A 3D vector type. */
        static readonly OP_TYPE_VECTOR_3D = 3
        
        /** The `x` port uses a 3D vector type. The first two ports use a floating-point scalar type. */
        static readonly OP_TYPE_VECTOR_3D_SCALAR = 4
        
        /** A 4D vector type. */
        static readonly OP_TYPE_VECTOR_4D = 5
        
        /** The `a` and `b` ports use a 4D vector type. The `weight` port uses a scalar type. */
        static readonly OP_TYPE_VECTOR_4D_SCALAR = 6
        
        /** Represents the size of the [enum OpType] enum. */
        static readonly OP_TYPE_MAX = 7
        constructor(identifier?: any)
        
        /** A type of operands and returned value. */
        get opType(): int64
        set opType(value: int64)
    }
    namespace VisualShaderNodeStep {
        enum OpType {
            OpTypeScalar = 0,
            OpTypeVector2D = 1,
            OpTypeVector2DScalar = 2,
            OpTypeVector3D = 3,
            OpTypeVector3DScalar = 4,
            OpTypeVector4D = 5,
            OpTypeVector4DScalar = 6,
            OpTypeMax = 7,
        }
    }
    /** Calculates a Step function within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodestep.html  
     */
    class VisualShaderNodeStep extends VisualShaderNode {
        /** A floating-point scalar type. */
        static readonly OP_TYPE_SCALAR = 0
        
        /** A 2D vector type. */
        static readonly OP_TYPE_VECTOR_2D = 1
        
        /** The `x` port uses a 2D vector type, while the `edge` port uses a floating-point scalar type. */
        static readonly OP_TYPE_VECTOR_2D_SCALAR = 2
        
        /** A 3D vector type. */
        static readonly OP_TYPE_VECTOR_3D = 3
        
        /** The `x` port uses a 3D vector type, while the `edge` port uses a floating-point scalar type. */
        static readonly OP_TYPE_VECTOR_3D_SCALAR = 4
        
        /** A 4D vector type. */
        static readonly OP_TYPE_VECTOR_4D = 5
        
        /** The `a` and `b` ports use a 4D vector type. The `weight` port uses a scalar type. */
        static readonly OP_TYPE_VECTOR_4D_SCALAR = 6
        
        /** Represents the size of the [enum OpType] enum. */
        static readonly OP_TYPE_MAX = 7
        constructor(identifier?: any)
        
        /** A type of operands and returned value. */
        get opType(): int64
        set opType(value: int64)
    }
    namespace VisualShaderNodeSwitch {
        enum OpType {
            OpTypeFloat = 0,
            OpTypeInt = 1,
            OpTypeUint = 2,
            OpTypeVector2D = 3,
            OpTypeVector3D = 4,
            OpTypeVector4D = 5,
            OpTypeBoolean = 6,
            OpTypeTransform = 7,
            OpTypeMax = 8,
        }
    }
    /** A selector function for use within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodeswitch.html  
     */
    class VisualShaderNodeSwitch extends VisualShaderNode {
        /** A floating-point scalar. */
        static readonly OP_TYPE_FLOAT = 0
        
        /** An integer scalar. */
        static readonly OP_TYPE_INT = 1
        
        /** An unsigned integer scalar. */
        static readonly OP_TYPE_UINT = 2
        
        /** A 2D vector type. */
        static readonly OP_TYPE_VECTOR_2D = 3
        
        /** A 3D vector type. */
        static readonly OP_TYPE_VECTOR_3D = 4
        
        /** A 4D vector type. */
        static readonly OP_TYPE_VECTOR_4D = 5
        
        /** A boolean type. */
        static readonly OP_TYPE_BOOLEAN = 6
        
        /** A transform type. */
        static readonly OP_TYPE_TRANSFORM = 7
        
        /** Represents the size of the [enum OpType] enum. */
        static readonly OP_TYPE_MAX = 8
        constructor(identifier?: any)
        
        /** A type of operands and returned value. */
        get opType(): int64
        set opType(value: int64)
    }
    namespace VisualShaderNodeTexture {
        enum Source {
            SourceTexture = 0,
            SourceScreen = 1,
            Source2DTexture = 2,
            Source2DNormal = 3,
            SourceDepth = 4,
            SourcePort = 5,
            Source3DNormal = 6,
            SourceRoughness = 7,
            SourceMax = 8,
        }
        enum TextureType {
            TypeData = 0,
            TypeColor = 1,
            TypeNormalMap = 2,
            TypeMax = 3,
        }
    }
    /** Performs a 2D texture lookup within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodetexture.html  
     */
    class VisualShaderNodeTexture extends VisualShaderNode {
        /** Use the texture given as an argument for this function. */
        static readonly SOURCE_TEXTURE = 0
        
        /** Use the current viewport's texture as the source. */
        static readonly SOURCE_SCREEN = 1
        
        /** Use the texture from this shader's texture built-in (e.g. a texture of a [Sprite2D]). */
        static readonly SOURCE_2D_TEXTURE = 2
        
        /** Use the texture from this shader's normal map built-in. */
        static readonly SOURCE_2D_NORMAL = 3
        
        /** Use the depth texture captured during the depth prepass. Only available when the depth prepass is used (i.e. in spatial shaders and in the forward_plus or gl_compatibility renderers). */
        static readonly SOURCE_DEPTH = 4
        
        /** Use the texture provided in the input port for this function. */
        static readonly SOURCE_PORT = 5
        
        /** Use the normal buffer captured during the depth prepass. Only available when the normal-roughness buffer is available (i.e. in spatial shaders and in the forward_plus renderer). */
        static readonly SOURCE_3D_NORMAL = 6
        
        /** Use the roughness buffer captured during the depth prepass. Only available when the normal-roughness buffer is available (i.e. in spatial shaders and in the forward_plus renderer). */
        static readonly SOURCE_ROUGHNESS = 7
        
        /** Represents the size of the [enum Source] enum. */
        static readonly SOURCE_MAX = 8
        
        /** No hints are added to the uniform declaration. */
        static readonly TYPE_DATA = 0
        
        /** Adds `source_color` as hint to the uniform declaration for proper sRGB to linear conversion. */
        static readonly TYPE_COLOR = 1
        
        /** Adds `hint_normal` as hint to the uniform declaration, which internally converts the texture for proper usage as normal map. */
        static readonly TYPE_NORMAL_MAP = 2
        
        /** Represents the size of the [enum TextureType] enum. */
        static readonly TYPE_MAX = 3
        constructor(identifier?: any)
        
        /** Determines the source for the lookup. See [enum Source] for options. */
        get source(): int64
        set source(value: int64)
        
        /** The source texture, if needed for the selected [member source]. */
        get texture(): null | Texture2D
        set texture(value: null | Texture2D)
        
        /** Specifies the type of the texture if [member source] is set to [constant SOURCE_TEXTURE]. See [enum TextureType] for options. */
        get textureType(): int64
        set textureType(value: int64)
    }
    /** A 2D texture uniform array to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodetexture2darray.html  
     */
    class VisualShaderNodeTexture2DArray extends VisualShaderNodeSample3D {
        constructor(identifier?: any)
        /** A source texture array. Used if [member VisualShaderNodeSample3D.source] is set to [constant VisualShaderNodeSample3D.SOURCE_TEXTURE]. */
        get textureArray(): null | Texture2DArray | CompressedTexture2DArray | PlaceholderTexture2DArray | Texture2DArrayRD
        set textureArray(value: null | Texture2DArray | CompressedTexture2DArray | PlaceholderTexture2DArray | Texture2DArrayRD)
    }
    /** A visual shader node for shader parameter (uniform) of type [Texture2DArray].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodetexture2darrayparameter.html  
     */
    class VisualShaderNodeTexture2DArrayParameter extends VisualShaderNodeTextureParameter {
        constructor(identifier?: any)
    }
    /** Provides a 2D texture parameter within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodetexture2dparameter.html  
     */
    class VisualShaderNodeTexture2DParameter extends VisualShaderNodeTextureParameter {
        constructor(identifier?: any)
    }
    /** Performs a 3D texture lookup within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodetexture3d.html  
     */
    class VisualShaderNodeTexture3D extends VisualShaderNodeSample3D {
        constructor(identifier?: any)
        /** A source texture. Used if [member VisualShaderNodeSample3D.source] is set to [constant VisualShaderNodeSample3D.SOURCE_TEXTURE]. */
        get texture(): null | Texture3D
        set texture(value: null | Texture3D)
    }
    /** Provides a 3D texture parameter within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodetexture3dparameter.html  
     */
    class VisualShaderNodeTexture3DParameter extends VisualShaderNodeTextureParameter {
        constructor(identifier?: any)
    }
    namespace VisualShaderNodeTextureParameter {
        enum TextureType {
            TypeData = 0,
            TypeColor = 1,
            TypeNormalMap = 2,
            TypeAnisotropy = 3,
            TypeMax = 4,
        }
        enum ColorDefault {
            ColorDefaultWhite = 0,
            ColorDefaultBlack = 1,
            ColorDefaultTransparent = 2,
            ColorDefaultMax = 3,
        }
        enum TextureFilter {
            FilterDefault = 0,
            FilterNearest = 1,
            FilterLinear = 2,
            FilterNearestMipmap = 3,
            FilterLinearMipmap = 4,
            FilterNearestMipmapAnisotropic = 5,
            FilterLinearMipmapAnisotropic = 6,
            FilterMax = 7,
        }
        enum TextureRepeat {
            RepeatDefault = 0,
            RepeatEnabled = 1,
            RepeatDisabled = 2,
            RepeatMax = 3,
        }
        enum TextureSource {
            SourceNone = 0,
            SourceScreen = 1,
            SourceDepth = 2,
            SourceNormalRoughness = 3,
            SourceMax = 4,
        }
    }
    /** Performs a uniform texture lookup within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodetextureparameter.html  
     */
    class VisualShaderNodeTextureParameter extends VisualShaderNodeParameter {
        /** No hints are added to the uniform declaration. */
        static readonly TYPE_DATA = 0
        
        /** Adds `source_color` as hint to the uniform declaration for proper sRGB to linear conversion. */
        static readonly TYPE_COLOR = 1
        
        /** Adds `hint_normal` as hint to the uniform declaration, which internally converts the texture for proper usage as normal map. */
        static readonly TYPE_NORMAL_MAP = 2
        
        /** Adds `hint_anisotropy` as hint to the uniform declaration to use for a flowmap. */
        static readonly TYPE_ANISOTROPY = 3
        
        /** Represents the size of the [enum TextureType] enum. */
        static readonly TYPE_MAX = 4
        
        /** Defaults to fully opaque white color. */
        static readonly COLOR_DEFAULT_WHITE = 0
        
        /** Defaults to fully opaque black color. */
        static readonly COLOR_DEFAULT_BLACK = 1
        
        /** Defaults to fully transparent black color. */
        static readonly COLOR_DEFAULT_TRANSPARENT = 2
        
        /** Represents the size of the [enum ColorDefault] enum. */
        static readonly COLOR_DEFAULT_MAX = 3
        
        /** Sample the texture using the filter determined by the node this shader is attached to. */
        static readonly FILTER_DEFAULT = 0
        
        /** The texture filter reads from the nearest pixel only. This makes the texture look pixelated from up close, and grainy from a distance (due to mipmaps not being sampled). */
        static readonly FILTER_NEAREST = 1
        
        /** The texture filter blends between the nearest 4 pixels. This makes the texture look smooth from up close, and grainy from a distance (due to mipmaps not being sampled). */
        static readonly FILTER_LINEAR = 2
        
        /** The texture filter reads from the nearest pixel and blends between the nearest 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`). This makes the texture look pixelated from up close, and smooth from a distance.  
         *  Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to [Camera2D] zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.  
         */
        static readonly FILTER_NEAREST_MIPMAP = 3
        
        /** The texture filter blends between the nearest 4 pixels and between the nearest 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`). This makes the texture look smooth from up close, and smooth from a distance.  
         *  Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to [Camera2D] zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.  
         */
        static readonly FILTER_LINEAR_MIPMAP = 4
        
        /** The texture filter reads from the nearest pixel and blends between 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`) based on the angle between the surface and the camera view. This makes the texture look pixelated from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting [member ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level].  
         *      
         *  **Note:** This texture filter is rarely useful in 2D projects. [constant FILTER_NEAREST_MIPMAP] is usually more appropriate in this case.  
         */
        static readonly FILTER_NEAREST_MIPMAP_ANISOTROPIC = 5
        
        /** The texture filter blends between the nearest 4 pixels and blends between 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`) based on the angle between the surface and the camera view. This makes the texture look smooth from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting [member ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level].  
         *      
         *  **Note:** This texture filter is rarely useful in 2D projects. [constant FILTER_LINEAR_MIPMAP] is usually more appropriate in this case.  
         */
        static readonly FILTER_LINEAR_MIPMAP_ANISOTROPIC = 6
        
        /** Represents the size of the [enum TextureFilter] enum. */
        static readonly FILTER_MAX = 7
        
        /** Sample the texture using the repeat mode determined by the node this shader is attached to. */
        static readonly REPEAT_DEFAULT = 0
        
        /** Texture will repeat normally. */
        static readonly REPEAT_ENABLED = 1
        
        /** Texture will not repeat. */
        static readonly REPEAT_DISABLED = 2
        
        /** Represents the size of the [enum TextureRepeat] enum. */
        static readonly REPEAT_MAX = 3
        
        /** The texture source is not specified in the shader. */
        static readonly SOURCE_NONE = 0
        
        /** The texture source is the screen texture which captures all opaque objects drawn this frame. */
        static readonly SOURCE_SCREEN = 1
        
        /** The texture source is the depth texture from the depth prepass. */
        static readonly SOURCE_DEPTH = 2
        
        /** The texture source is the normal-roughness buffer from the depth prepass. */
        static readonly SOURCE_NORMAL_ROUGHNESS = 3
        
        /** Represents the size of the [enum TextureSource] enum. */
        static readonly SOURCE_MAX = 4
        constructor(identifier?: any)
        
        /** Defines the type of data provided by the source texture. See [enum TextureType] for options. */
        get textureType(): int64
        set textureType(value: int64)
        
        /** Sets the default color if no texture is assigned to the uniform. */
        get colorDefault(): int64
        set colorDefault(value: int64)
        
        /** Sets the texture filtering mode. See [enum TextureFilter] for options. */
        get textureFilter(): int64
        set textureFilter(value: int64)
        
        /** Sets the texture repeating mode. See [enum TextureRepeat] for options. */
        get textureRepeat(): int64
        set textureRepeat(value: int64)
        
        /** Sets the texture source mode. Used for reading from the screen, depth, or normal_roughness texture. See [enum TextureSource] for options. */
        get textureSource(): int64
        set textureSource(value: int64)
    }
    /** Performs a uniform texture lookup with triplanar within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodetextureparametertriplanar.html  
     */
    class VisualShaderNodeTextureParameterTriplanar extends VisualShaderNodeTextureParameter {
        constructor(identifier?: any)
    }
    class VisualShaderNodeTextureSdf extends VisualShaderNode {
        constructor(identifier?: any)
    }
    class VisualShaderNodeTextureSdfNormal extends VisualShaderNode {
        constructor(identifier?: any)
    }
    /** Composes a [Transform3D] from four [Vector3]s within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodetransformcompose.html  
     */
    class VisualShaderNodeTransformCompose extends VisualShaderNode {
        constructor(identifier?: any)
    }
    /** A [Transform3D] constant for use within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodetransformconstant.html  
     */
    class VisualShaderNodeTransformConstant extends VisualShaderNodeConstant {
        constructor(identifier?: any)
        /** A [Transform3D] constant which represents the state of this node. */
        get constant(): Transform3D
        set constant(value: Transform3D)
    }
    /** Decomposes a [Transform3D] into four [Vector3]s within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodetransformdecompose.html  
     */
    class VisualShaderNodeTransformDecompose extends VisualShaderNode {
        constructor(identifier?: any)
    }
    namespace VisualShaderNodeTransformFunc {
        enum Function {
            FuncInverse = 0,
            FuncTranspose = 1,
            FuncMax = 2,
        }
    }
    /** Computes a [Transform3D] function within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodetransformfunc.html  
     */
    class VisualShaderNodeTransformFunc extends VisualShaderNode {
        /** Perform the inverse operation on the [Transform3D] matrix. */
        static readonly FUNC_INVERSE = 0
        
        /** Perform the transpose operation on the [Transform3D] matrix. */
        static readonly FUNC_TRANSPOSE = 1
        
        /** Represents the size of the [enum Function] enum. */
        static readonly FUNC_MAX = 2
        constructor(identifier?: any)
        
        /** The function to be computed. See [enum Function] for options. */
        get "function"(): int64
        set "function"(value: int64)
    }
    namespace VisualShaderNodeTransformOp {
        enum Operator {
            OpAxb = 0,
            OpBxa = 1,
            OpAxbComp = 2,
            OpBxaComp = 3,
            OpAdd = 4,
            OpAMinusB = 5,
            OpBMinusA = 6,
            OpADivB = 7,
            OpBDivA = 8,
            OpMax = 9,
        }
    }
    /** A [Transform3D] operator to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodetransformop.html  
     */
    class VisualShaderNodeTransformOp extends VisualShaderNode {
        /** Multiplies transform `a` by the transform `b`. */
        static readonly OP_AxB = 0
        
        /** Multiplies transform `b` by the transform `a`. */
        static readonly OP_BxA = 1
        
        /** Performs a component-wise multiplication of transform `a` by the transform `b`. */
        static readonly OP_AxB_COMP = 2
        
        /** Performs a component-wise multiplication of transform `b` by the transform `a`. */
        static readonly OP_BxA_COMP = 3
        
        /** Adds two transforms. */
        static readonly OP_ADD = 4
        
        /** Subtracts the transform `a` from the transform `b`. */
        static readonly OP_A_MINUS_B = 5
        
        /** Subtracts the transform `b` from the transform `a`. */
        static readonly OP_B_MINUS_A = 6
        
        /** Divides the transform `a` by the transform `b`. */
        static readonly OP_A_DIV_B = 7
        
        /** Divides the transform `b` by the transform `a`. */
        static readonly OP_B_DIV_A = 8
        
        /** Represents the size of the [enum Operator] enum. */
        static readonly OP_MAX = 9
        constructor(identifier?: any)
        
        /** The type of the operation to be performed on the transforms. See [enum Operator] for options. */
        get operator(): int64
        set operator(value: int64)
    }
    /** A [Transform3D] parameter for use within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodetransformparameter.html  
     */
    class VisualShaderNodeTransformParameter extends VisualShaderNodeParameter {
        constructor(identifier?: any)
        /** Enables usage of the [member default_value]. */
        get defaultValueEnabled(): boolean
        set defaultValueEnabled(value: boolean)
        
        /** A default value to be assigned within the shader. */
        get defaultValue(): Transform3D
        set defaultValue(value: Transform3D)
    }
    namespace VisualShaderNodeTransformVecMult {
        enum Operator {
            OpAxb = 0,
            OpBxa = 1,
            Op3X3Axb = 2,
            Op3X3Bxa = 3,
            OpMax = 4,
        }
    }
    /** Multiplies a [Transform3D] and a [Vector3] within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodetransformvecmult.html  
     */
    class VisualShaderNodeTransformVecMult extends VisualShaderNode {
        /** Multiplies transform `a` by the vector `b`. */
        static readonly OP_AxB = 0
        
        /** Multiplies vector `b` by the transform `a`. */
        static readonly OP_BxA = 1
        
        /** Multiplies transform `a` by the vector `b`, skipping the last row and column of the transform. */
        static readonly OP_3x3_AxB = 2
        
        /** Multiplies vector `b` by the transform `a`, skipping the last row and column of the transform. */
        static readonly OP_3x3_BxA = 3
        
        /** Represents the size of the [enum Operator] enum. */
        static readonly OP_MAX = 4
        constructor(identifier?: any)
        
        /** The multiplication type to be performed. See [enum Operator] for options. */
        get operator(): int64
        set operator(value: int64)
    }
    /** An unsigned scalar integer constant to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodeuintconstant.html  
     */
    class VisualShaderNodeUIntConstant extends VisualShaderNodeConstant {
        constructor(identifier?: any)
        /** An unsigned integer constant which represents a state of this node. */
        get constant(): int64
        set constant(value: int64)
    }
    namespace VisualShaderNodeUIntFunc {
        enum Function {
            FuncNegate = 0,
            FuncBitwiseNot = 1,
            FuncMax = 2,
        }
    }
    /** An unsigned scalar integer function to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodeuintfunc.html  
     */
    class VisualShaderNodeUIntFunc extends VisualShaderNode {
        /** Negates the `x` using `-(x)`. */
        static readonly FUNC_NEGATE = 0
        
        /** Returns the result of bitwise `NOT` operation on the integer. Translates to `~a` in the Godot Shader Language. */
        static readonly FUNC_BITWISE_NOT = 1
        
        /** Represents the size of the [enum Function] enum. */
        static readonly FUNC_MAX = 2
        constructor(identifier?: any)
        
        /** A function to be applied to the scalar. See [enum Function] for options. */
        get "function"(): int64
        set "function"(value: int64)
    }
    namespace VisualShaderNodeUIntOp {
        enum Operator {
            OpAdd = 0,
            OpSub = 1,
            OpMul = 2,
            OpDiv = 3,
            OpMod = 4,
            OpMax = 5,
            OpMin = 6,
            OpBitwiseAnd = 7,
            OpBitwiseOr = 8,
            OpBitwiseXor = 9,
            OpBitwiseLeftShift = 10,
            OpBitwiseRightShift = 11,
            OpEnumSize = 12,
        }
    }
    /** An unsigned integer scalar operator to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodeuintop.html  
     */
    class VisualShaderNodeUIntOp extends VisualShaderNode {
        /** Sums two numbers using `a + b`. */
        static readonly OP_ADD = 0
        
        /** Subtracts two numbers using `a - b`. */
        static readonly OP_SUB = 1
        
        /** Multiplies two numbers using `a * b`. */
        static readonly OP_MUL = 2
        
        /** Divides two numbers using `a / b`. */
        static readonly OP_DIV = 3
        
        /** Calculates the remainder of two numbers using `a % b`. */
        static readonly OP_MOD = 4
        
        /** Returns the greater of two numbers. Translates to `max(a, b)` in the Godot Shader Language. */
        static readonly OP_MAX = 5
        
        /** Returns the lesser of two numbers. Translates to `max(a, b)` in the Godot Shader Language. */
        static readonly OP_MIN = 6
        
        /** Returns the result of bitwise `AND` operation on the integer. Translates to `a & b` in the Godot Shader Language. */
        static readonly OP_BITWISE_AND = 7
        
        /** Returns the result of bitwise `OR` operation for two integers. Translates to `a | b` in the Godot Shader Language. */
        static readonly OP_BITWISE_OR = 8
        
        /** Returns the result of bitwise `XOR` operation for two integers. Translates to `a ^ b` in the Godot Shader Language. */
        static readonly OP_BITWISE_XOR = 9
        
        /** Returns the result of bitwise left shift operation on the integer. Translates to `a << b` in the Godot Shader Language. */
        static readonly OP_BITWISE_LEFT_SHIFT = 10
        
        /** Returns the result of bitwise right shift operation on the integer. Translates to `a >> b` in the Godot Shader Language. */
        static readonly OP_BITWISE_RIGHT_SHIFT = 11
        
        /** Represents the size of the [enum Operator] enum. */
        static readonly OP_ENUM_SIZE = 12
        constructor(identifier?: any)
        
        /** An operator to be applied to the inputs. See [enum Operator] for options. */
        get operator(): int64
        set operator(value: int64)
    }
    /** A visual shader node for shader parameter (uniform) of type unsigned [int].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodeuintparameter.html  
     */
    class VisualShaderNodeUIntParameter extends VisualShaderNodeParameter {
        constructor(identifier?: any)
        /** If `true`, the node will have a custom default value. */
        get defaultValueEnabled(): boolean
        set defaultValueEnabled(value: boolean)
        
        /** Default value of this parameter, which will be used if not set externally. [member default_value_enabled] must be enabled; defaults to `0` otherwise. */
        get defaultValue(): int64
        set defaultValue(value: int64)
    }
    namespace VisualShaderNodeUVFunc {
        enum Function {
            FuncPanning = 0,
            FuncScaling = 1,
            FuncMax = 2,
        }
    }
    /** Contains functions to modify texture coordinates (`uv`) to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodeuvfunc.html  
     */
    class VisualShaderNodeUVFunc extends VisualShaderNode {
        /** Translates `uv` by using `scale` and `offset` values using the following formula: `uv = uv + offset * scale`. `uv` port is connected to `UV` built-in by default. */
        static readonly FUNC_PANNING = 0
        
        /** Scales `uv` by using `scale` and `pivot` values using the following formula: `uv = (uv - pivot) * scale + pivot`. `uv` port is connected to `UV` built-in by default. */
        static readonly FUNC_SCALING = 1
        
        /** Represents the size of the [enum Function] enum. */
        static readonly FUNC_MAX = 2
        constructor(identifier?: any)
        
        /** A function to be applied to the texture coordinates. See [enum Function] for options. */
        get "function"(): int64
        set "function"(value: int64)
    }
    /** A visual shader node that modifies the texture UV using polar coordinates.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodeuvpolarcoord.html  
     */
    class VisualShaderNodeUVPolarCoord extends VisualShaderNode {
        constructor(identifier?: any)
    }
    /** A visual shader node that represents a "varying" shader value.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodevarying.html  
     */
    class VisualShaderNodeVarying extends VisualShaderNode {
        constructor(identifier?: any)
        /** Name of the variable. Must be unique. */
        get varyingName(): StringName
        set varyingName(value: StringName)
        
        /** Type of the variable. Determines where the variable can be accessed. */
        get varyingType(): int64
        set varyingType(value: int64)
    }
    /** A visual shader node that gets a value of a varying.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodevaryinggetter.html  
     */
    class VisualShaderNodeVaryingGetter extends VisualShaderNodeVarying {
        constructor(identifier?: any)
    }
    /** A visual shader node that sets a value of a varying.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodevaryingsetter.html  
     */
    class VisualShaderNodeVaryingSetter extends VisualShaderNodeVarying {
        constructor(identifier?: any)
    }
    /** A [Vector2] constant to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodevec2constant.html  
     */
    class VisualShaderNodeVec2Constant extends VisualShaderNodeConstant {
        constructor(identifier?: any)
        /** A [Vector2] constant which represents the state of this node. */
        get constant(): Vector2
        set constant(value: Vector2)
    }
    /** A [Vector2] parameter to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodevec2parameter.html  
     */
    class VisualShaderNodeVec2Parameter extends VisualShaderNodeParameter {
        constructor(identifier?: any)
        /** Enables usage of the [member default_value]. */
        get defaultValueEnabled(): boolean
        set defaultValueEnabled(value: boolean)
        
        /** A default value to be assigned within the shader. */
        get defaultValue(): Vector2
        set defaultValue(value: Vector2)
    }
    /** A [Vector3] constant to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodevec3constant.html  
     */
    class VisualShaderNodeVec3Constant extends VisualShaderNodeConstant {
        constructor(identifier?: any)
        /** A [Vector3] constant which represents the state of this node. */
        get constant(): Vector3
        set constant(value: Vector3)
    }
    /** A [Vector3] parameter to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodevec3parameter.html  
     */
    class VisualShaderNodeVec3Parameter extends VisualShaderNodeParameter {
        constructor(identifier?: any)
        /** Enables usage of the [member default_value]. */
        get defaultValueEnabled(): boolean
        set defaultValueEnabled(value: boolean)
        
        /** A default value to be assigned within the shader. */
        get defaultValue(): Vector3
        set defaultValue(value: Vector3)
    }
    /** A 4D vector constant to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodevec4constant.html  
     */
    class VisualShaderNodeVec4Constant extends VisualShaderNodeConstant {
        constructor(identifier?: any)
        /** A 4D vector (represented as a [Quaternion]) constant which represents the state of this node. */
        get constant(): Quaternion
        set constant(value: Quaternion)
        get constantV4(): Vector4
        set constantV4(value: Vector4)
    }
    /** A 4D vector parameter to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodevec4parameter.html  
     */
    class VisualShaderNodeVec4Parameter extends VisualShaderNodeParameter {
        constructor(identifier?: any)
        /** Enables usage of the [member default_value]. */
        get defaultValueEnabled(): boolean
        set defaultValueEnabled(value: boolean)
        
        /** A default value to be assigned within the shader. */
        get defaultValue(): Vector4
        set defaultValue(value: Vector4)
    }
    namespace VisualShaderNodeVectorBase {
        enum OpType {
            OpTypeVector2D = 0,
            OpTypeVector3D = 1,
            OpTypeVector4D = 2,
            OpTypeMax = 3,
        }
    }
    /** A base type for the nodes that perform vector operations within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodevectorbase.html  
     */
    class VisualShaderNodeVectorBase extends VisualShaderNode {
        /** A 2D vector type. */
        static readonly OP_TYPE_VECTOR_2D = 0
        
        /** A 3D vector type. */
        static readonly OP_TYPE_VECTOR_3D = 1
        
        /** A 4D vector type. */
        static readonly OP_TYPE_VECTOR_4D = 2
        
        /** Represents the size of the [enum OpType] enum. */
        static readonly OP_TYPE_MAX = 3
        constructor(identifier?: any)
        
        /** A vector type that this operation is performed on. */
        get opType(): int64
        set opType(value: int64)
    }
    /** Composes a [Vector2], [Vector3] or 4D vector (represented as a [Quaternion]) from scalars within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodevectorcompose.html  
     */
    class VisualShaderNodeVectorCompose extends VisualShaderNodeVectorBase {
        constructor(identifier?: any)
    }
    /** Decomposes a [Vector2], [Vector3] or 4D vector (represented as a [Quaternion]) into scalars within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodevectordecompose.html  
     */
    class VisualShaderNodeVectorDecompose extends VisualShaderNodeVectorBase {
        constructor(identifier?: any)
    }
    /** Returns the distance between two points. To be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodevectordistance.html  
     */
    class VisualShaderNodeVectorDistance extends VisualShaderNodeVectorBase {
        constructor(identifier?: any)
    }
    namespace VisualShaderNodeVectorFunc {
        enum Function {
            FuncNormalize = 0,
            FuncSaturate = 1,
            FuncNegate = 2,
            FuncReciprocal = 3,
            FuncAbs = 4,
            FuncAcos = 5,
            FuncAcosh = 6,
            FuncAsin = 7,
            FuncAsinh = 8,
            FuncAtan = 9,
            FuncAtanh = 10,
            FuncCeil = 11,
            FuncCos = 12,
            FuncCosh = 13,
            FuncDegrees = 14,
            FuncExp = 15,
            FuncExp2 = 16,
            FuncFloor = 17,
            FuncFract = 18,
            FuncInverseSqrt = 19,
            FuncLog = 20,
            FuncLog2 = 21,
            FuncRadians = 22,
            FuncRound = 23,
            FuncRoundeven = 24,
            FuncSign = 25,
            FuncSin = 26,
            FuncSinh = 27,
            FuncSqrt = 28,
            FuncTan = 29,
            FuncTanh = 30,
            FuncTrunc = 31,
            FuncOneminus = 32,
            FuncMax = 33,
        }
    }
    /** A vector function to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodevectorfunc.html  
     */
    class VisualShaderNodeVectorFunc extends VisualShaderNodeVectorBase {
        /** Normalizes the vector so that it has a length of `1` but points in the same direction. */
        static readonly FUNC_NORMALIZE = 0
        
        /** Clamps the value between `0.0` and `1.0`. */
        static readonly FUNC_SATURATE = 1
        
        /** Returns the opposite value of the parameter. */
        static readonly FUNC_NEGATE = 2
        
        /** Returns `1/vector`. */
        static readonly FUNC_RECIPROCAL = 3
        
        /** Returns the absolute value of the parameter. */
        static readonly FUNC_ABS = 4
        
        /** Returns the arc-cosine of the parameter. */
        static readonly FUNC_ACOS = 5
        
        /** Returns the inverse hyperbolic cosine of the parameter. */
        static readonly FUNC_ACOSH = 6
        
        /** Returns the arc-sine of the parameter. */
        static readonly FUNC_ASIN = 7
        
        /** Returns the inverse hyperbolic sine of the parameter. */
        static readonly FUNC_ASINH = 8
        
        /** Returns the arc-tangent of the parameter. */
        static readonly FUNC_ATAN = 9
        
        /** Returns the inverse hyperbolic tangent of the parameter. */
        static readonly FUNC_ATANH = 10
        
        /** Finds the nearest integer that is greater than or equal to the parameter. */
        static readonly FUNC_CEIL = 11
        
        /** Returns the cosine of the parameter. */
        static readonly FUNC_COS = 12
        
        /** Returns the hyperbolic cosine of the parameter. */
        static readonly FUNC_COSH = 13
        
        /** Converts a quantity in radians to degrees. */
        static readonly FUNC_DEGREES = 14
        
        /** Base-e Exponential. */
        static readonly FUNC_EXP = 15
        
        /** Base-2 Exponential. */
        static readonly FUNC_EXP2 = 16
        
        /** Finds the nearest integer less than or equal to the parameter. */
        static readonly FUNC_FLOOR = 17
        
        /** Computes the fractional part of the argument. */
        static readonly FUNC_FRACT = 18
        
        /** Returns the inverse of the square root of the parameter. */
        static readonly FUNC_INVERSE_SQRT = 19
        
        /** Natural logarithm. */
        static readonly FUNC_LOG = 20
        
        /** Base-2 logarithm. */
        static readonly FUNC_LOG2 = 21
        
        /** Converts a quantity in degrees to radians. */
        static readonly FUNC_RADIANS = 22
        
        /** Finds the nearest integer to the parameter. */
        static readonly FUNC_ROUND = 23
        
        /** Finds the nearest even integer to the parameter. */
        static readonly FUNC_ROUNDEVEN = 24
        
        /** Extracts the sign of the parameter, i.e. returns `-1` if the parameter is negative, `1` if it's positive and `0` otherwise. */
        static readonly FUNC_SIGN = 25
        
        /** Returns the sine of the parameter. */
        static readonly FUNC_SIN = 26
        
        /** Returns the hyperbolic sine of the parameter. */
        static readonly FUNC_SINH = 27
        
        /** Returns the square root of the parameter. */
        static readonly FUNC_SQRT = 28
        
        /** Returns the tangent of the parameter. */
        static readonly FUNC_TAN = 29
        
        /** Returns the hyperbolic tangent of the parameter. */
        static readonly FUNC_TANH = 30
        
        /** Returns a value equal to the nearest integer to the parameter whose absolute value is not larger than the absolute value of the parameter. */
        static readonly FUNC_TRUNC = 31
        
        /** Returns `1.0 - vector`. */
        static readonly FUNC_ONEMINUS = 32
        
        /** Represents the size of the [enum Function] enum. */
        static readonly FUNC_MAX = 33
        constructor(identifier?: any)
        
        /** The function to be performed. See [enum Function] for options. */
        get "function"(): int64
        set "function"(value: int64)
    }
    /** Returns the length of a [Vector3] within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodevectorlen.html  
     */
    class VisualShaderNodeVectorLen extends VisualShaderNodeVectorBase {
        constructor(identifier?: any)
    }
    namespace VisualShaderNodeVectorOp {
        enum Operator {
            OpAdd = 0,
            OpSub = 1,
            OpMul = 2,
            OpDiv = 3,
            OpMod = 4,
            OpPow = 5,
            OpMax = 6,
            OpMin = 7,
            OpCross = 8,
            OpAtan2 = 9,
            OpReflect = 10,
            OpStep = 11,
            OpEnumSize = 12,
        }
    }
    /** A vector operator to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodevectorop.html  
     */
    class VisualShaderNodeVectorOp extends VisualShaderNodeVectorBase {
        /** Adds two vectors. */
        static readonly OP_ADD = 0
        
        /** Subtracts a vector from a vector. */
        static readonly OP_SUB = 1
        
        /** Multiplies two vectors. */
        static readonly OP_MUL = 2
        
        /** Divides vector by vector. */
        static readonly OP_DIV = 3
        
        /** Returns the remainder of the two vectors. */
        static readonly OP_MOD = 4
        
        /** Returns the value of the first parameter raised to the power of the second, for each component of the vectors. */
        static readonly OP_POW = 5
        
        /** Returns the greater of two values, for each component of the vectors. */
        static readonly OP_MAX = 6
        
        /** Returns the lesser of two values, for each component of the vectors. */
        static readonly OP_MIN = 7
        
        /** Calculates the cross product of two vectors. */
        static readonly OP_CROSS = 8
        
        /** Returns the arc-tangent of the parameters. */
        static readonly OP_ATAN2 = 9
        
        /** Returns the vector that points in the direction of reflection. `a` is incident vector and `b` is the normal vector. */
        static readonly OP_REFLECT = 10
        
        /** Vector step operator. Returns `0.0` if `a` is smaller than `b` and `1.0` otherwise. */
        static readonly OP_STEP = 11
        
        /** Represents the size of the [enum Operator] enum. */
        static readonly OP_ENUM_SIZE = 12
        constructor(identifier?: any)
        
        /** The operator to be used. See [enum Operator] for options. */
        get operator(): int64
        set operator(value: int64)
    }
    /** Returns the vector that points in the direction of refraction. For use within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodevectorrefract.html  
     */
    class VisualShaderNodeVectorRefract extends VisualShaderNodeVectorBase {
        constructor(identifier?: any)
    }
    /** A visual shader node that calculates the position of the pixel in world space using the depth texture.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodeworldpositionfromdepth.html  
     */
    class VisualShaderNodeWorldPositionFromDepth extends VisualShaderNode {
        constructor(identifier?: any)
    }
    namespace VoxelGI {
        enum Subdiv {
            Subdiv64 = 0,
            Subdiv128 = 1,
            Subdiv256 = 2,
            Subdiv512 = 3,
            SubdivMax = 4,
        }
    }
    /** Real-time global illumination (GI) probe.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_voxelgi.html  
     */
    class VoxelGI<Map extends NodePathMap = any> extends VisualInstance3D<Map> {
        /** Use 64 subdivisions. This is the lowest quality setting, but the fastest. Use it if you can, but especially use it on lower-end hardware. */
        static readonly SUBDIV_64 = 0
        
        /** Use 128 subdivisions. This is the default quality setting. */
        static readonly SUBDIV_128 = 1
        
        /** Use 256 subdivisions. */
        static readonly SUBDIV_256 = 2
        
        /** Use 512 subdivisions. This is the highest quality setting, but the slowest. On lower-end hardware, this could cause the GPU to stall. */
        static readonly SUBDIV_512 = 3
        
        /** Represents the size of the [enum Subdiv] enum. */
        static readonly SUBDIV_MAX = 4
        constructor(identifier?: any)
        
        /** Bakes the effect from all [GeometryInstance3D]s marked with [constant GeometryInstance3D.GI_MODE_STATIC] and [Light3D]s marked with either [constant Light3D.BAKE_STATIC] or [constant Light3D.BAKE_DYNAMIC]. If [param create_visual_debug] is `true`, after baking the light, this will generate a [MultiMesh] that has a cube representing each solid cell with each cube colored to the cell's albedo color. This can be used to visualize the [VoxelGI]'s data and debug any issues that may be occurring.  
         *      
         *  **Note:** [method bake] works from the editor and in exported projects. This makes it suitable for procedurally generated or user-built levels. Baking a [VoxelGI] node generally takes from 5 to 20 seconds in most scenes. Reducing [member subdiv] can speed up baking.  
         *      
         *  **Note:** [GeometryInstance3D]s and [Light3D]s must be fully ready before [method bake] is called. If you are procedurally creating those and some meshes or lights are missing from your baked [VoxelGI], use `call_deferred("bake")` instead of calling [method bake] directly.  
         */
        bake(fromNode?: Node /* = undefined */, createVisualDebug?: boolean /* = false */): void
        
        /** Calls [method bake] with `create_visual_debug` enabled. */
        debugBake(): void
        
        /** Number of times to subdivide the grid that the [VoxelGI] operates on. A higher number results in finer detail and thus higher visual quality, while lower numbers result in better performance. */
        get subdiv(): int64
        set subdiv(value: int64)
        
        /** The size of the area covered by the [VoxelGI]. If you make the size larger without increasing the subdivisions with [member subdiv], the size of each cell will increase and result in lower detailed lighting.  
         *      
         *  **Note:** Size is clamped to 1.0 unit or more on each axis.  
         */
        get size(): Vector3
        set size(value: Vector3)
        
        /** The [CameraAttributes] resource that specifies exposure levels to bake at. Auto-exposure and non exposure properties will be ignored. Exposure settings should be used to reduce the dynamic range present when baking. If exposure is too high, the [VoxelGI] will have banding artifacts or may have over-exposure artifacts. */
        get cameraAttributes(): null | CameraAttributesPractical | CameraAttributesPhysical
        set cameraAttributes(value: null | CameraAttributesPractical | CameraAttributesPhysical)
        
        /** The [VoxelGIData] resource that holds the data for this [VoxelGI]. */
        get data(): null | VoxelGIData
        set data(value: null | VoxelGIData)
    }
    /** Contains baked voxel global illumination data for use in a [VoxelGI] node.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_voxelgidata.html  
     */
    class VoxelGIData extends Resource {
        constructor(identifier?: any)
        allocate(toCellXform: Transform3D, aabb: Aabb, octreeSize: Vector3, octreeCells: PackedByteArray | byte[] | ArrayBuffer, dataCells: PackedByteArray | byte[] | ArrayBuffer, distanceField: PackedByteArray | byte[] | ArrayBuffer, levelCounts: PackedInt32Array | int32[]): void
        
        /** Returns the bounds of the baked voxel data as an [AABB], which should match [member VoxelGI.size] after being baked (which only contains the size as a [Vector3]).  
         *      
         *  **Note:** If the size was modified without baking the VoxelGI data, then the value of [method get_bounds] and [member VoxelGI.size] will not match.  
         */
        getBounds(): Aabb
        getOctreeSize(): Vector3
        getToCellXform(): Transform3D
        getOctreeCells(): PackedByteArray
        getDataCells(): PackedByteArray
        getLevelCounts(): PackedInt32Array
        get _data(): GDictionary
        set _data(value: GDictionary)
        
        /** The dynamic range to use (`1.0` represents a low dynamic range scene brightness). Higher values can be used to provide brighter indirect lighting, at the cost of more visible color banding in dark areas (both in indirect lighting and reflections). To avoid color banding, it's recommended to use the lowest value that does not result in visible light clipping. */
        get dynamicRange(): float64
        set dynamicRange(value: float64)
        
        /** The energy of the indirect lighting and reflections produced by the [VoxelGI] node. Higher values result in brighter indirect lighting. If indirect lighting looks too flat, try decreasing [member propagation] while increasing [member energy] at the same time. See also [member use_two_bounces] which influences the indirect lighting's effective brightness. */
        get energy(): float64
        set energy(value: float64)
        
        /** The normal bias to use for indirect lighting and reflections. Higher values reduce self-reflections visible in non-rough materials, at the cost of more visible light leaking and flatter-looking indirect lighting. To prioritize hiding self-reflections over lighting quality, set [member bias] to `0.0` and [member normal_bias] to a value between `1.0` and `2.0`. */
        get bias(): float64
        set bias(value: float64)
        
        /** The normal bias to use for indirect lighting and reflections. Higher values reduce self-reflections visible in non-rough materials, at the cost of more visible light leaking and flatter-looking indirect lighting. See also [member bias]. To prioritize hiding self-reflections over lighting quality, set [member bias] to `0.0` and [member normal_bias] to a value between `1.0` and `2.0`. */
        get normalBias(): float64
        set normalBias(value: float64)
        
        /** The multiplier to use when light bounces off a surface. Higher values result in brighter indirect lighting. If indirect lighting looks too flat, try decreasing [member propagation] while increasing [member energy] at the same time. See also [member use_two_bounces] which influences the indirect lighting's effective brightness. */
        get propagation(): float64
        set propagation(value: float64)
        
        /** If `true`, performs two bounces of indirect lighting instead of one. This makes indirect lighting look more natural and brighter at a small performance cost. The second bounce is also visible in reflections. If the scene appears too bright after enabling [member use_two_bounces], adjust [member propagation] and [member energy]. */
        get useTwoBounces(): boolean
        set useTwoBounces(value: boolean)
        
        /** If `true`, [Environment] lighting is ignored by the [VoxelGI] node. If `false`, [Environment] lighting is taken into account by the [VoxelGI] node. [Environment] lighting updates in real-time, which means it can be changed without having to bake the [VoxelGI] node again. */
        get interior(): boolean
        set interior(value: boolean)
    }
    /** Holds an [Object]. If the object is [RefCounted], it doesn't update the reference count.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_weakref.html  
     */
    class WeakRef extends RefCounted {
        constructor(identifier?: any)
        /** Returns the [Object] this weakref is referring to. Returns `null` if that object no longer exists. */
        getRef(): any
    }
    namespace WebRtcDataChannel {
        enum WriteMode {
            WriteModeText = 0,
            WriteModeBinary = 1,
        }
        enum ChannelState {
            StateConnecting = 0,
            StateOpen = 1,
            StateClosing = 2,
            StateClosed = 3,
        }
    }
    class WebRtcDataChannel extends PacketPeer {
        static readonly WRITE_MODE_TEXT = 0
        static readonly WRITE_MODE_BINARY = 1
        static readonly STATE_CONNECTING = 0
        static readonly STATE_OPEN = 1
        static readonly STATE_CLOSING = 2
        static readonly STATE_CLOSED = 3
        constructor(identifier?: any)
        poll(): GError
        close(): void
        wasStringPacket(): boolean
        getReadyState(): WebRtcDataChannel.ChannelState
        getLabel(): string
        isOrdered(): boolean
        getId(): int64
        getMaxPacketLifeTime(): int64
        getMaxRetransmits(): int64
        getProtocol(): string
        isNegotiated(): boolean
        getBufferedAmount(): int64
        get writeMode(): int64
        set writeMode(value: int64)
    }
    class WebRtcDataChannelExtension extends WebRtcDataChannel {
        constructor(identifier?: any)
        /* gdvirtual */ _getPacket(rBuffer: int64, rBufferSize: int64): GError
        /* gdvirtual */ _putPacket(pBuffer: int64, pBufferSize: int64): GError
        /* gdvirtual */ _getAvailablePacketCount(): int64
        /* gdvirtual */ _getMaxPacketSize(): int64
        /* gdvirtual */ _poll(): GError
        /* gdvirtual */ _close(): void
        /* gdvirtual */ _setWriteMode(pWriteMode: WebRtcDataChannel.WriteMode): void
        /* gdvirtual */ _getWriteMode(): WebRtcDataChannel.WriteMode
        /* gdvirtual */ _wasStringPacket(): boolean
        /* gdvirtual */ _getReadyState(): WebRtcDataChannel.ChannelState
        /* gdvirtual */ _getLabel(): string
        /* gdvirtual */ _isOrdered(): boolean
        /* gdvirtual */ _getId(): int64
        /* gdvirtual */ _getMaxPacketLifeTime(): int64
        /* gdvirtual */ _getMaxRetransmits(): int64
        /* gdvirtual */ _getProtocol(): string
        /* gdvirtual */ _isNegotiated(): boolean
        /* gdvirtual */ _getBufferedAmount(): int64
    }
    class WebRtcMultiplayerPeer extends MultiplayerPeer {
        constructor(identifier?: any)
        createServer(channelsConfig?: GArray /* = [] */): GError
        createClient(peerId: int64, channelsConfig?: GArray /* = [] */): GError
        createMesh(peerId: int64, channelsConfig?: GArray /* = [] */): GError
        addPeer(peer: WebRtcPeerConnection, peerId: int64, unreliableLifetime?: int64 /* = 1 */): GError
        removePeer(peerId: int64): void
        hasPeer(peerId: int64): boolean
        getPeer(peerId: int64): GDictionary
        getPeers(): GDictionary
    }
    namespace WebRtcPeerConnection {
        enum ConnectionState {
            StateNew = 0,
            StateConnecting = 1,
            StateConnected = 2,
            StateDisconnected = 3,
            StateFailed = 4,
            StateClosed = 5,
        }
        enum GatheringState {
            GatheringStateNew = 0,
            GatheringStateGathering = 1,
            GatheringStateComplete = 2,
        }
        enum SignalingState {
            SignalingStateStable = 0,
            SignalingStateHaveLocalOffer = 1,
            SignalingStateHaveRemoteOffer = 2,
            SignalingStateHaveLocalPranswer = 3,
            SignalingStateHaveRemotePranswer = 4,
            SignalingStateClosed = 5,
        }
    }
    class WebRtcPeerConnection extends RefCounted {
        static readonly STATE_NEW = 0
        static readonly STATE_CONNECTING = 1
        static readonly STATE_CONNECTED = 2
        static readonly STATE_DISCONNECTED = 3
        static readonly STATE_FAILED = 4
        static readonly STATE_CLOSED = 5
        static readonly GATHERING_STATE_NEW = 0
        static readonly GATHERING_STATE_GATHERING = 1
        static readonly GATHERING_STATE_COMPLETE = 2
        static readonly SIGNALING_STATE_STABLE = 0
        static readonly SIGNALING_STATE_HAVE_LOCAL_OFFER = 1
        static readonly SIGNALING_STATE_HAVE_REMOTE_OFFER = 2
        static readonly SIGNALING_STATE_HAVE_LOCAL_PRANSWER = 3
        static readonly SIGNALING_STATE_HAVE_REMOTE_PRANSWER = 4
        static readonly SIGNALING_STATE_CLOSED = 5
        constructor(identifier?: any)
        static setDefaultExtension(extensionClass: StringName): void
        initialize(configuration?: GDictionary /* = new GDictionary() */): GError
        createDataChannel(label: string, options?: GDictionary /* = new GDictionary() */): WebRtcDataChannel
        createOffer(): GError
        setLocalDescription(type: string, sdp: string): GError
        setRemoteDescription(type: string, sdp: string): GError
        addIceCandidate(media: string, index: int64, name: string): GError
        poll(): GError
        close(): void
        getConnectionState(): WebRtcPeerConnection.ConnectionState
        getGatheringState(): WebRtcPeerConnection.GatheringState
        getSignalingState(): WebRtcPeerConnection.SignalingState
        readonly sessionDescriptionCreated: Signal<(type: string, sdp: string) => void>
        readonly iceCandidateCreated: Signal<(media: string, index: int64, name: string) => void>
        readonly dataChannelReceived: Signal<(channel: WebRtcDataChannel) => void>
    }
    class WebRtcPeerConnectionExtension extends WebRtcPeerConnection {
        constructor(identifier?: any)
        /* gdvirtual */ _getConnectionState(): WebRtcPeerConnection.ConnectionState
        /* gdvirtual */ _getGatheringState(): WebRtcPeerConnection.GatheringState
        /* gdvirtual */ _getSignalingState(): WebRtcPeerConnection.SignalingState
        /* gdvirtual */ _initialize(pConfig: GDictionary): GError
        /* gdvirtual */ _createDataChannel(pLabel: string, pConfig: GDictionary): null | WebRtcDataChannel
        /* gdvirtual */ _createOffer(): GError
        /* gdvirtual */ _setRemoteDescription(pType: string, pSdp: string): GError
        /* gdvirtual */ _setLocalDescription(pType: string, pSdp: string): GError
        /* gdvirtual */ _addIceCandidate(pSdpMidName: string, pSdpMlineIndex: int64, pSdpName: string): GError
        /* gdvirtual */ _poll(): GError
        /* gdvirtual */ _close(): void
    }
    /** Base class for WebSocket server and client.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_websocketmultiplayerpeer.html  
     */
    class WebSocketMultiplayerPeer extends MultiplayerPeer {
        constructor(identifier?: any)
        /** Starts a new multiplayer client connecting to the given [param url]. TLS certificates will be verified against the hostname when connecting using the `wss://` protocol. You can pass the optional [param tls_client_options] parameter to customize the trusted certification authorities, or disable the common name verification. See [method TLSOptions.client] and [method TLSOptions.client_unsafe].  
         *      
         *  **Note:** It is recommended to specify the scheme part of the URL, i.e. the [param url] should start with either `ws://` or `wss://`.  
         */
        createClient(url: string, tlsClientOptions?: TlsOptions /* = undefined */): GError
        
        /** Starts a new multiplayer server listening on the given [param port]. You can optionally specify a [param bind_address], and provide valid [param tls_server_options] to use TLS. See [method TLSOptions.server]. */
        createServer(port: int64, bindAddress?: string /* = '*' */, tlsServerOptions?: TlsOptions /* = undefined */): GError
        
        /** Returns the [WebSocketPeer] associated to the given [param peer_id]. */
        getPeer(peerId: int64): null | WebSocketPeer
        
        /** Returns the IP address of the given peer. */
        getPeerAddress(id: int64): string
        
        /** Returns the remote port of the given peer. */
        getPeerPort(id: int64): int64
        
        /** The supported WebSocket sub-protocols. See [member WebSocketPeer.supported_protocols] for more details. */
        get supportedProtocols(): PackedStringArray
        set supportedProtocols(value: PackedStringArray | string[])
        
        /** The extra headers to use during handshake. See [member WebSocketPeer.handshake_headers] for more details. */
        get handshakeHeaders(): PackedStringArray
        set handshakeHeaders(value: PackedStringArray | string[])
        
        /** The inbound buffer size for connected peers. See [member WebSocketPeer.inbound_buffer_size] for more details. */
        get inboundBufferSize(): int64
        set inboundBufferSize(value: int64)
        
        /** The outbound buffer size for connected peers. See [member WebSocketPeer.outbound_buffer_size] for more details. */
        get outboundBufferSize(): int64
        set outboundBufferSize(value: int64)
        
        /** The maximum time each peer can stay in a connecting state before being dropped. */
        get handshakeTimeout(): float64
        set handshakeTimeout(value: float64)
        
        /** The maximum number of queued packets for connected peers. See [member WebSocketPeer.max_queued_packets] for more details. */
        get maxQueuedPackets(): int64
        set maxQueuedPackets(value: int64)
    }
    namespace WebSocketPeer {
        enum WriteMode {
            WriteModeText = 0,
            WriteModeBinary = 1,
        }
        enum State {
            StateConnecting = 0,
            StateOpen = 1,
            StateClosing = 2,
            StateClosed = 3,
        }
    }
    /** A WebSocket connection.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_websocketpeer.html  
     */
    class WebSocketPeer extends PacketPeer {
        /** Specifies that WebSockets messages should be transferred as text payload (only valid UTF-8 is allowed). */
        static readonly WRITE_MODE_TEXT = 0
        
        /** Specifies that WebSockets messages should be transferred as binary payload (any byte combination is allowed). */
        static readonly WRITE_MODE_BINARY = 1
        
        /** Socket has been created. The connection is not yet open. */
        static readonly STATE_CONNECTING = 0
        
        /** The connection is open and ready to communicate. */
        static readonly STATE_OPEN = 1
        
        /** The connection is in the process of closing. This means a close request has been sent to the remote peer but confirmation has not been received. */
        static readonly STATE_CLOSING = 2
        
        /** The connection is closed or couldn't be opened. */
        static readonly STATE_CLOSED = 3
        constructor(identifier?: any)
        
        /** Connects to the given URL. TLS certificates will be verified against the hostname when connecting using the `wss://` protocol. You can pass the optional [param tls_client_options] parameter to customize the trusted certification authorities, or disable the common name verification. See [method TLSOptions.client] and [method TLSOptions.client_unsafe].  
         *      
         *  **Note:** This method is non-blocking, and will return [constant OK] before the connection is established as long as the provided parameters are valid and the peer is not in an invalid state (e.g. already connected). Regularly call [method poll] (e.g. during [Node] process) and check the result of [method get_ready_state] to know whether the connection succeeds or fails.  
         *      
         *  **Note:** To avoid mixed content warnings or errors in Web, you may have to use a [param url] that starts with `wss://` (secure) instead of `ws://`. When doing so, make sure to use the fully qualified domain name that matches the one defined in the server's TLS certificate. Do not connect directly via the IP address for `wss://` connections, as it won't match with the TLS certificate.  
         */
        connectToUrl(url: string, tlsClientOptions?: TlsOptions /* = undefined */): GError
        
        /** Accepts a peer connection performing the HTTP handshake as a WebSocket server. The [param stream] must be a valid TCP stream retrieved via [method TCPServer.take_connection], or a TLS stream accepted via [method StreamPeerTLS.accept_stream].  
         *      
         *  **Note:** Not supported in Web exports due to browsers' restrictions.  
         */
        acceptStream(stream: StreamPeer): GError
        
        /** Sends the given [param message] using the desired [param write_mode]. When sending a [String], prefer using [method send_text]. */
        send(message: PackedByteArray | byte[] | ArrayBuffer, writeMode?: WebSocketPeer.WriteMode /* = 1 */): GError
        
        /** Sends the given [param message] using WebSocket text mode. Prefer this method over [method PacketPeer.put_packet] when interacting with third-party text-based API (e.g. when using [JSON] formatted messages). */
        sendText(message: string): GError
        
        /** Returns `true` if the last received packet was sent as a text payload. See [enum WriteMode]. */
        wasStringPacket(): boolean
        
        /** Updates the connection state and receive incoming packets. Call this function regularly to keep it in a clean state. */
        poll(): void
        
        /** Closes this WebSocket connection. [param code] is the status code for the closure (see RFC 6455 section 7.4 for a list of valid status codes). [param reason] is the human readable reason for closing the connection (can be any UTF-8 string that's smaller than 123 bytes). If [param code] is negative, the connection will be closed immediately without notifying the remote peer.  
         *      
         *  **Note:** To achieve a clean close, you will need to keep polling until [constant STATE_CLOSED] is reached.  
         *      
         *  **Note:** The Web export might not support all status codes. Please refer to browser-specific documentation for more details.  
         */
        close(code?: int64 /* = 1000 */, reason?: string /* = '' */): void
        
        /** Returns the IP address of the connected peer.  
         *      
         *  **Note:** Not available in the Web export.  
         */
        getConnectedHost(): string
        
        /** Returns the remote port of the connected peer.  
         *      
         *  **Note:** Not available in the Web export.  
         */
        getConnectedPort(): int64
        
        /** Returns the selected WebSocket sub-protocol for this connection or an empty string if the sub-protocol has not been selected yet. */
        getSelectedProtocol(): string
        
        /** Returns the URL requested by this peer. The URL is derived from the `url` passed to [method connect_to_url] or from the HTTP headers when acting as server (i.e. when using [method accept_stream]). */
        getRequestedUrl(): string
        
        /** Disable Nagle's algorithm on the underlying TCP socket (default). See [method StreamPeerTCP.set_no_delay] for more information.  
         *      
         *  **Note:** Not available in the Web export.  
         */
        setNoDelay(enabled: boolean): void
        
        /** Returns the current amount of data in the outbound websocket buffer.     
         *  **Note:** Web exports use WebSocket.bufferedAmount, while other platforms use an internal buffer.  
         */
        getCurrentOutboundBufferedAmount(): int64
        
        /** Returns the ready state of the connection. See [enum State]. */
        getReadyState(): WebSocketPeer.State
        
        /** Returns the received WebSocket close frame status code, or `-1` when the connection was not cleanly closed. Only call this method when [method get_ready_state] returns [constant STATE_CLOSED]. */
        getCloseCode(): int64
        
        /** Returns the received WebSocket close frame status reason string. Only call this method when [method get_ready_state] returns [constant STATE_CLOSED]. */
        getCloseReason(): string
        
        /** The WebSocket sub-protocols allowed during the WebSocket handshake. */
        get supportedProtocols(): PackedStringArray
        set supportedProtocols(value: PackedStringArray | string[])
        
        /** The extra HTTP headers to be sent during the WebSocket handshake.  
         *      
         *  **Note:** Not supported in Web exports due to browsers' restrictions.  
         */
        get handshakeHeaders(): PackedStringArray
        set handshakeHeaders(value: PackedStringArray | string[])
        
        /** The size of the input buffer in bytes (roughly the maximum amount of memory that will be allocated for the inbound packets). */
        get inboundBufferSize(): int64
        set inboundBufferSize(value: int64)
        
        /** The size of the input buffer in bytes (roughly the maximum amount of memory that will be allocated for the outbound packets). */
        get outboundBufferSize(): int64
        set outboundBufferSize(value: int64)
        
        /** The maximum amount of packets that will be allowed in the queues (both inbound and outbound). */
        get maxQueuedPackets(): int64
        set maxQueuedPackets(value: int64)
        
        /** The interval (in seconds) at which the peer will automatically send WebSocket "ping" control frames. When set to `0`, no "ping" control frames will be sent.  
         *      
         *  **Note:** Has no effect in Web exports due to browser restrictions.  
         */
        get heartbeatInterval(): int64
        set heartbeatInterval(value: int64)
    }
    namespace WebXRInterface {
        enum TargetRayMode {
            TargetRayModeUnknown = 0,
            TargetRayModeGaze = 1,
            TargetRayModeTrackedPointer = 2,
            TargetRayModeScreen = 3,
        }
    }
    /** XR interface using WebXR.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_webxrinterface.html  
     */
    class WebXRInterface extends XRInterface {
        /** We don't know the target ray mode. */
        static readonly TARGET_RAY_MODE_UNKNOWN = 0
        
        /** Target ray originates at the viewer's eyes and points in the direction they are looking. */
        static readonly TARGET_RAY_MODE_GAZE = 1
        
        /** Target ray from a handheld pointer, most likely a VR touch controller. */
        static readonly TARGET_RAY_MODE_TRACKED_POINTER = 2
        
        /** Target ray from touch screen, mouse or other tactile input device. */
        static readonly TARGET_RAY_MODE_SCREEN = 3
        constructor(identifier?: any)
        
        /** Checks if the given [param session_mode] is supported by the user's browser.  
         *  Possible values come from [url=https://developer.mozilla.org/en-US/docs/Web/API/XRSessionMode]WebXR's XRSessionMode[/url], including: `"immersive-vr"`, `"immersive-ar"`, and `"inline"`.  
         *  This method returns nothing, instead it emits the [signal session_supported] signal with the result.  
         */
        isSessionSupported(sessionMode: string): void
        
        /** Returns `true` if there is an active input source with the given [param input_source_id]. */
        isInputSourceActive(inputSourceId: int64): boolean
        
        /** Gets an [XRControllerTracker] for the given [param input_source_id].  
         *  In the context of WebXR, an input source can be an advanced VR controller like the Oculus Touch or Index controllers, or even a tap on the screen, a spoken voice command or a button press on the device itself. When a non-traditional input source is used, interpret the position and orientation of the [XRPositionalTracker] as a ray pointing at the object the user wishes to interact with.  
         *  Use this method to get information about the input source that triggered one of these signals:  
         *  - [signal selectstart]  
         *  - [signal select]  
         *  - [signal selectend]  
         *  - [signal squeezestart]  
         *  - [signal squeeze]  
         *  - [signal squeezestart]  
         */
        getInputSourceTracker(inputSourceId: int64): null | XRControllerTracker
        
        /** Returns the target ray mode for the given [param input_source_id].  
         *  This can help interpret the input coming from that input source. See [url=https://developer.mozilla.org/en-US/docs/Web/API/XRInputSource/targetRayMode]XRInputSource.targetRayMode[/url] for more information.  
         */
        getInputSourceTargetRayMode(inputSourceId: int64): WebXRInterface.TargetRayMode
        
        /** Returns the display refresh rate for the current HMD. Not supported on all HMDs and browsers. It may not report an accurate value until after using [method set_display_refresh_rate]. */
        getDisplayRefreshRate(): float64
        
        /** Sets the display refresh rate for the current HMD. Not supported on all HMDs and browsers. It won't take effect right away until after [signal display_refresh_rate_changed] is emitted. */
        setDisplayRefreshRate(refreshRate: float64): void
        
        /** Returns display refresh rates supported by the current HMD. Only returned if this feature is supported by the web browser and after the interface has been initialized. */
        getAvailableDisplayRefreshRates(): GArray
        
        /** The session mode used by [method XRInterface.initialize] when setting up the WebXR session.  
         *  This doesn't have any effect on the interface when already initialized.  
         *  Possible values come from [url=https://developer.mozilla.org/en-US/docs/Web/API/XRSessionMode]WebXR's XRSessionMode[/url], including: `"immersive-vr"`, `"immersive-ar"`, and `"inline"`.  
         */
        get sessionMode(): string
        set sessionMode(value: string)
        
        /** A comma-seperated list of required features used by [method XRInterface.initialize] when setting up the WebXR session.  
         *  If a user's browser or device doesn't support one of the given features, initialization will fail and [signal session_failed] will be emitted.  
         *  This doesn't have any effect on the interface when already initialized.  
         *  Possible values come from [url=https://developer.mozilla.org/en-US/docs/Web/API/XRReferenceSpaceType]WebXR's XRReferenceSpaceType[/url], or include other features like `"hand-tracking"` to enable hand tracking.  
         */
        get requiredFeatures(): string
        set requiredFeatures(value: string)
        
        /** A comma-seperated list of optional features used by [method XRInterface.initialize] when setting up the WebXR session.  
         *  If a user's browser or device doesn't support one of the given features, initialization will continue, but you won't be able to use the requested feature.  
         *  This doesn't have any effect on the interface when already initialized.  
         *  Possible values come from [url=https://developer.mozilla.org/en-US/docs/Web/API/XRReferenceSpaceType]WebXR's XRReferenceSpaceType[/url], or include other features like `"hand-tracking"` to enable hand tracking.  
         */
        get optionalFeatures(): string
        set optionalFeatures(value: string)
        
        /** A comma-seperated list of reference space types used by [method XRInterface.initialize] when setting up the WebXR session.  
         *  The reference space types are requested in order, and the first one supported by the users device or browser will be used. The [member reference_space_type] property contains the reference space type that was ultimately selected.  
         *  This doesn't have any effect on the interface when already initialized.  
         *  Possible values come from [url=https://developer.mozilla.org/en-US/docs/Web/API/XRReferenceSpaceType]WebXR's XRReferenceSpaceType[/url]. If you want to use a particular reference space type, it must be listed in either [member required_features] or [member optional_features].  
         */
        get requestedReferenceSpaceTypes(): string
        set requestedReferenceSpaceTypes(value: string)
        
        /** The reference space type (from the list of requested types set in the [member requested_reference_space_types] property), that was ultimately used by [method XRInterface.initialize] when setting up the WebXR session.  
         *  Possible values come from [url=https://developer.mozilla.org/en-US/docs/Web/API/XRReferenceSpaceType]WebXR's XRReferenceSpaceType[/url]. If you want to use a particular reference space type, it must be listed in either [member required_features] or [member optional_features].  
         */
        get referenceSpaceType(): string
        set referenceSpaceType(value: string)
        
        /** A comma-separated list of features that were successfully enabled by [method XRInterface.initialize] when setting up the WebXR session.  
         *  This may include features requested by setting [member required_features] and [member optional_features], and will only be available after [signal session_started] has been emitted.  
         *      
         *  **Note:** This may not be support by all web browsers, in which case it will be an empty string.  
         */
        get enabledFeatures(): string
        set enabledFeatures(value: string)
        
        /** Indicates if the WebXR session's imagery is visible to the user.  
         *  Possible values come from [url=https://developer.mozilla.org/en-US/docs/Web/API/XRVisibilityState]WebXR's XRVisibilityState[/url], including `"hidden"`, `"visible"`, and `"visible-blurred"`.  
         */
        get visibilityState(): string
        set visibilityState(value: string)
        
        /** Emitted by [method is_session_supported] to indicate if the given [param session_mode] is supported or not. */
        readonly sessionSupported: Signal<(sessionMode: string, supported: boolean) => void>
        
        /** Emitted by [method XRInterface.initialize] if the session is successfully started.  
         *  At this point, it's safe to do `get_viewport().use_xr = true` to instruct Godot to start rendering to the XR device.  
         */
        readonly sessionStarted: Signal<() => void>
        
        /** Emitted when the user ends the WebXR session (which can be done using UI from the browser or device).  
         *  At this point, you should do `get_viewport().use_xr = false` to instruct Godot to resume rendering to the screen.  
         */
        readonly sessionEnded: Signal<() => void>
        
        /** Emitted by [method XRInterface.initialize] if the session fails to start.  
         *  [param message] may optionally contain an error message from WebXR, or an empty string if no message is available.  
         */
        readonly sessionFailed: Signal<(message: string) => void>
        
        /** Emitted when one of the input source has started its "primary action".  
         *  Use [method get_input_source_tracker] and [method get_input_source_target_ray_mode] to get more information about the input source.  
         */
        readonly selectstart: Signal<(inputSourceId: int64) => void>
        
        /** Emitted after one of the input sources has finished its "primary action".  
         *  Use [method get_input_source_tracker] and [method get_input_source_target_ray_mode] to get more information about the input source.  
         */
        readonly select: Signal<(inputSourceId: int64) => void>
        
        /** Emitted when one of the input sources has finished its "primary action".  
         *  Use [method get_input_source_tracker] and [method get_input_source_target_ray_mode] to get more information about the input source.  
         */
        readonly selectend: Signal<(inputSourceId: int64) => void>
        
        /** Emitted when one of the input sources has started its "primary squeeze action".  
         *  Use [method get_input_source_tracker] and [method get_input_source_target_ray_mode] to get more information about the input source.  
         */
        readonly squeezestart: Signal<(inputSourceId: int64) => void>
        
        /** Emitted after one of the input sources has finished its "primary squeeze action".  
         *  Use [method get_input_source_tracker] and [method get_input_source_target_ray_mode] to get more information about the input source.  
         */
        readonly squeeze: Signal<(inputSourceId: int64) => void>
        
        /** Emitted when one of the input sources has finished its "primary squeeze action".  
         *  Use [method get_input_source_tracker] and [method get_input_source_target_ray_mode] to get more information about the input source.  
         */
        readonly squeezeend: Signal<(inputSourceId: int64) => void>
        
        /** Emitted when [member visibility_state] has changed. */
        readonly visibilityStateChanged: Signal<() => void>
        
        /** Emitted to indicate that the reference space has been reset or reconfigured.  
         *  When (or whether) this is emitted depends on the user's browser or device, but may include when the user has changed the dimensions of their play space (which you may be able to access via [method XRInterface.get_play_area]) or pressed/held a button to recenter their position.  
         *  See [url=https://developer.mozilla.org/en-US/docs/Web/API/XRReferenceSpace/reset_event]WebXR's XRReferenceSpace reset event[/url] for more information.  
         */
        readonly referenceSpaceReset: Signal<() => void>
        
        /** Emitted after the display's refresh rate has changed. */
        readonly displayRefreshRateChanged: Signal<() => void>
    }
    namespace Window {
        enum Mode {
            ModeWindowed = 0,
            ModeMinimized = 1,
            ModeMaximized = 2,
            ModeFullscreen = 3,
            ModeExclusiveFullscreen = 4,
        }
        enum Flags {
            FlagResizeDisabled = 0,
            FlagBorderless = 1,
            FlagAlwaysOnTop = 2,
            FlagTransparent = 3,
            FlagNoFocus = 4,
            FlagPopup = 5,
            FlagExtendToTitle = 6,
            FlagMousePassthrough = 7,
            FlagSharpCorners = 8,
            FlagExcludeFromCapture = 9,
            FlagPopupWMHint = 10,
            FlagMinimizeDisabled = 11,
            FlagMaximizeDisabled = 12,
            FlagMax = 13,
        }
        enum ContentScaleMode {
            ContentScaleModeDisabled = 0,
            ContentScaleModeCanvasItems = 1,
            ContentScaleModeViewport = 2,
        }
        enum ContentScaleAspect {
            ContentScaleAspectIgnore = 0,
            ContentScaleAspectKeep = 1,
            ContentScaleAspectKeepWidth = 2,
            ContentScaleAspectKeepHeight = 3,
            ContentScaleAspectExpand = 4,
        }
        enum ContentScaleStretch {
            ContentScaleStretchFractional = 0,
            ContentScaleStretchInteger = 1,
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
        enum WindowInitialPosition {
            WindowInitialPositionAbsolute = 0,
            WindowInitialPositionCenterPrimaryScreen = 1,
            WindowInitialPositionCenterMainWindowScreen = 2,
            WindowInitialPositionCenterOtherScreen = 3,
            WindowInitialPositionCenterScreenWithMouseFocus = 4,
            WindowInitialPositionCenterScreenWithKeyboardFocus = 5,
        }
    }
    /** Base class for all windows, dialogs, and popups.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_window.html  
     */
    class Window<Map extends NodePathMap = any> extends Viewport<Map> {
        /** Emitted when [Window]'s visibility changes, right before [signal visibility_changed]. */
        static readonly NOTIFICATION_VISIBILITY_CHANGED = 30
        
        /** Sent when the node needs to refresh its theme items. This happens in one of the following cases:  
         *  - The [member theme] property is changed on this node or any of its ancestors.  
         *  - The [member theme_type_variation] property is changed on this node.  
         *  - The node enters the scene tree.  
         *      
         *  **Note:** As an optimization, this notification won't be sent from changes that occur while this node is outside of the scene tree. Instead, all of the theme item updates can be applied at once when the node enters the scene tree.  
         */
        static readonly NOTIFICATION_THEME_CHANGED = 32
        
        /** Windowed mode, i.e. [Window] doesn't occupy the whole screen (unless set to the size of the screen). */
        static readonly MODE_WINDOWED = 0
        
        /** Minimized window mode, i.e. [Window] is not visible and available on window manager's window list. Normally happens when the minimize button is pressed. */
        static readonly MODE_MINIMIZED = 1
        
        /** Maximized window mode, i.e. [Window] will occupy whole screen area except task bar and still display its borders. Normally happens when the maximize button is pressed. */
        static readonly MODE_MAXIMIZED = 2
        
        /** Full screen mode with full multi-window support.  
         *  Full screen window covers the entire display area of a screen and has no decorations. The display's video mode is not changed.  
         *  **On Android:** This enables immersive mode.  
         *  **On Windows:** Multi-window full-screen mode has a 1px border of the [member ProjectSettings.rendering/environment/defaults/default_clear_color] color.  
         *  **On macOS:** A new desktop is used to display the running project.  
         *      
         *  **Note:** Regardless of the platform, enabling full screen will change the window size to match the monitor's size. Therefore, make sure your project supports [url=https://docs.godotengine.org/en/latest/tutorials/rendering/multiple_resolutions.html]multiple resolutions[/url] when enabling full screen mode.  
         */
        static readonly MODE_FULLSCREEN = 3
        
        /** A single window full screen mode. This mode has less overhead, but only one window can be open on a given screen at a time (opening a child window or application switching will trigger a full screen transition).  
         *  Full screen window covers the entire display area of a screen and has no border or decorations. The display's video mode is not changed.  
         *  **On Android:** This enables immersive mode.  
         *  **On Windows:** Depending on video driver, full screen transition might cause screens to go black for a moment.  
         *  **On macOS:** A new desktop is used to display the running project. Exclusive full screen mode prevents Dock and Menu from showing up when the mouse pointer is hovering the edge of the screen.  
         *  **On Linux (X11):** Exclusive full screen mode bypasses compositor.  
         *      
         *  **Note:** Regardless of the platform, enabling full screen will change the window size to match the monitor's size. Therefore, make sure your project supports [url=https://docs.godotengine.org/en/latest/tutorials/rendering/multiple_resolutions.html]multiple resolutions[/url] when enabling full screen mode.  
         */
        static readonly MODE_EXCLUSIVE_FULLSCREEN = 4
        
        /** The window can't be resized by dragging its resize grip. It's still possible to resize the window using [member size]. This flag is ignored for full screen windows. Set with [member unresizable]. */
        static readonly FLAG_RESIZE_DISABLED = 0
        
        /** The window do not have native title bar and other decorations. This flag is ignored for full-screen windows. Set with [member borderless]. */
        static readonly FLAG_BORDERLESS = 1
        
        /** The window is floating on top of all other windows. This flag is ignored for full-screen windows. Set with [member always_on_top]. */
        static readonly FLAG_ALWAYS_ON_TOP = 2
        
        /** The window background can be transparent. Set with [member transparent].  
         *      
         *  **Note:** This flag has no effect if either [member ProjectSettings.display/window/per_pixel_transparency/allowed], or the window's [member Viewport.transparent_bg] is set to `false`.  
         */
        static readonly FLAG_TRANSPARENT = 3
        
        /** The window can't be focused. No-focus window will ignore all input, except mouse clicks. Set with [member unfocusable]. */
        static readonly FLAG_NO_FOCUS = 4
        
        /** Window is part of menu or [OptionButton] dropdown. This flag can't be changed when the window is visible. An active popup window will exclusively receive all input, without stealing focus from its parent. Popup windows are automatically closed when uses click outside it, or when an application is switched. Popup window must have transient parent set (see [member transient]).  
         *      
         *  **Note:** This flag has no effect in embedded windows (unless said window is a [Popup]).  
         */
        static readonly FLAG_POPUP = 5
        
        /** Window content is expanded to the full size of the window. Unlike borderless window, the frame is left intact and can be used to resize the window, title bar is transparent, but have minimize/maximize/close buttons. Set with [member extend_to_title].  
         *      
         *  **Note:** This flag is implemented only on macOS.  
         *      
         *  **Note:** This flag has no effect in embedded windows.  
         */
        static readonly FLAG_EXTEND_TO_TITLE = 6
        
        /** All mouse events are passed to the underlying window of the same application.  
         *      
         *  **Note:** This flag has no effect in embedded windows.  
         */
        static readonly FLAG_MOUSE_PASSTHROUGH = 7
        
        /** Window style is overridden, forcing sharp corners.  
         *      
         *  **Note:** This flag has no effect in embedded windows.  
         *      
         *  **Note:** This flag is implemented only on Windows (11).  
         */
        static readonly FLAG_SHARP_CORNERS = 8
        
        /** Windows is excluded from screenshots taken by [method DisplayServer.screen_get_image], [method DisplayServer.screen_get_image_rect], and [method DisplayServer.screen_get_pixel].  
         *      
         *  **Note:** This flag is implemented on macOS and Windows.  
         *      
         *  **Note:** Setting this flag will **NOT** prevent other apps from capturing an image, it should not be used as a security measure.  
         */
        static readonly FLAG_EXCLUDE_FROM_CAPTURE = 9
        
        /** Signals the window manager that this window is supposed to be an implementation-defined "popup" (usually a floating, borderless, untileable and immovable child window). */
        static readonly FLAG_POPUP_WM_HINT = 10
        
        /** Window minimize button is disabled.  
         *      
         *  **Note:** This flag is implemented on macOS and Windows.  
         */
        static readonly FLAG_MINIMIZE_DISABLED = 11
        
        /** Window maximize button is disabled.  
         *      
         *  **Note:** This flag is implemented on macOS and Windows.  
         */
        static readonly FLAG_MAXIMIZE_DISABLED = 12
        
        /** Max value of the [enum Flags]. */
        static readonly FLAG_MAX = 13
        
        /** The content will not be scaled to match the [Window]'s size. */
        static readonly CONTENT_SCALE_MODE_DISABLED = 0
        
        /** The content will be rendered at the target size. This is more performance-expensive than [constant CONTENT_SCALE_MODE_VIEWPORT], but provides better results. */
        static readonly CONTENT_SCALE_MODE_CANVAS_ITEMS = 1
        
        /** The content will be rendered at the base size and then scaled to the target size. More performant than [constant CONTENT_SCALE_MODE_CANVAS_ITEMS], but results in pixelated image. */
        static readonly CONTENT_SCALE_MODE_VIEWPORT = 2
        
        /** The aspect will be ignored. Scaling will simply stretch the content to fit the target size. */
        static readonly CONTENT_SCALE_ASPECT_IGNORE = 0
        
        /** The content's aspect will be preserved. If the target size has different aspect from the base one, the image will be centered and black bars will appear on left and right sides. */
        static readonly CONTENT_SCALE_ASPECT_KEEP = 1
        
        /** The content can be expanded vertically. Scaling horizontally will result in keeping the width ratio and then black bars on left and right sides. */
        static readonly CONTENT_SCALE_ASPECT_KEEP_WIDTH = 2
        
        /** The content can be expanded horizontally. Scaling vertically will result in keeping the height ratio and then black bars on top and bottom sides. */
        static readonly CONTENT_SCALE_ASPECT_KEEP_HEIGHT = 3
        
        /** The content's aspect will be preserved. If the target size has different aspect from the base one, the content will stay in the top-left corner and add an extra visible area in the stretched space. */
        static readonly CONTENT_SCALE_ASPECT_EXPAND = 4
        
        /** The content will be stretched according to a fractional factor. This fills all the space available in the window, but allows "pixel wobble" to occur due to uneven pixel scaling. */
        static readonly CONTENT_SCALE_STRETCH_FRACTIONAL = 0
        
        /** The content will be stretched only according to an integer factor, preserving sharp pixels. This may leave a black background visible on the window's edges depending on the window size. */
        static readonly CONTENT_SCALE_STRETCH_INTEGER = 1
        
        /** Automatic layout direction, determined from the parent window layout direction. */
        static readonly LAYOUT_DIRECTION_INHERITED = 0
        
        /** Automatic layout direction, determined from the current locale. */
        static readonly LAYOUT_DIRECTION_APPLICATION_LOCALE = 1
        
        /** Left-to-right layout direction. */
        static readonly LAYOUT_DIRECTION_LTR = 2
        
        /** Right-to-left layout direction. */
        static readonly LAYOUT_DIRECTION_RTL = 3
        
        /** Automatic layout direction, determined from the system locale. */
        static readonly LAYOUT_DIRECTION_SYSTEM_LOCALE = 4
        
        /** Represents the size of the [enum LayoutDirection] enum. */
        static readonly LAYOUT_DIRECTION_MAX = 5
        static readonly LAYOUT_DIRECTION_LOCALE = 1
        
        /** Initial window position is determined by [member position]. */
        static readonly WINDOW_INITIAL_POSITION_ABSOLUTE = 0
        
        /** Initial window position is the center of the primary screen. */
        static readonly WINDOW_INITIAL_POSITION_CENTER_PRIMARY_SCREEN = 1
        
        /** Initial window position is the center of the main window screen. */
        static readonly WINDOW_INITIAL_POSITION_CENTER_MAIN_WINDOW_SCREEN = 2
        
        /** Initial window position is the center of [member current_screen] screen. */
        static readonly WINDOW_INITIAL_POSITION_CENTER_OTHER_SCREEN = 3
        
        /** Initial window position is the center of the screen containing the mouse pointer. */
        static readonly WINDOW_INITIAL_POSITION_CENTER_SCREEN_WITH_MOUSE_FOCUS = 4
        
        /** Initial window position is the center of the screen containing the window with the keyboard focus. */
        static readonly WINDOW_INITIAL_POSITION_CENTER_SCREEN_WITH_KEYBOARD_FOCUS = 5
        constructor(identifier?: any)
        
        /** Virtual method to be implemented by the user. Overrides the value returned by [method get_contents_minimum_size]. */
        /* gdvirtual */ _getContentsMinimumSize(): Vector2
        
        /** Centers a native window on the current screen and an embedded window on its embedder [Viewport]. */
        moveToCenter(): void
        
        /** Resets the size to the minimum size, which is the max of [member min_size] and (if [member wrap_controls] is enabled) [method get_contents_minimum_size]. This is equivalent to calling `set_size(Vector2i())` (or any size below the minimum). */
        resetSize(): void
        
        /** Returns the window's position including its border.  
         *      
         *  **Note:** If [member visible] is `false`, this method returns the same value as [member position].  
         */
        getPositionWithDecorations(): Vector2I
        
        /** Returns the window's size including its border.  
         *      
         *  **Note:** If [member visible] is `false`, this method returns the same value as [member size].  
         */
        getSizeWithDecorations(): Vector2I
        
        /** Sets a specified window flag. */
        setFlag(flag: Window.Flags, enabled: boolean): void
        
        /** Returns `true` if the [param flag] is set. */
        getFlag(flag: Window.Flags): boolean
        
        /** Returns `true` if the window can be maximized (the maximize button is enabled). */
        isMaximizeAllowed(): boolean
        
        /** Tells the OS that the [Window] needs an attention. This makes the window stand out in some way depending on the system, e.g. it might blink on the task bar. */
        requestAttention(): void
        
        /** Causes the window to grab focus, allowing it to receive user input. */
        moveToForeground(): void
        
        /** Hides the window. This is not the same as minimized state. Hidden window can't be interacted with and needs to be made visible with [method show]. */
        hide(): void
        
        /** Makes the [Window] appear. This enables interactions with the [Window] and doesn't change any of its property other than visibility (unlike e.g. [method popup]). */
        show(): void
        
        /** If [param unparent] is `true`, the window is automatically unparented when going invisible.  
         *      
         *  **Note:** Make sure to keep a reference to the node, otherwise it will be orphaned. You also need to manually call [method Node.queue_free] to free the window if it's not parented.  
         */
        setUnparentWhenInvisible(unparent: boolean): void
        
        /** Returns whether the window is being drawn to the screen. */
        canDraw(): boolean
        
        /** Returns `true` if the window is focused. */
        hasFocus(): boolean
        
        /** Causes the window to grab focus, allowing it to receive user input. */
        grabFocus(): void
        
        /** Starts an interactive drag operation on the window, using the current mouse position. Call this method when handling a mouse button being pressed to simulate a pressed event on the window's title bar. Using this method allows the window to participate in space switching, tiling, and other system features. */
        startDrag(): void
        
        /** Starts an interactive resize operation on the window, using the current mouse position. Call this method when handling a mouse button being pressed to simulate a pressed event on the window's edge. */
        startResize(edge: DisplayServer.WindowResizeEdge): void
        
        /** If [param active] is `true`, enables system's native IME (Input Method Editor). */
        setImeActive(active: boolean): void
        
        /** Moves IME to the given position. */
        setImePosition(position: Vector2I): void
        
        /** Returns `true` if the window is currently embedded in another window. */
        isEmbedded(): boolean
        
        /** Returns the combined minimum size from the child [Control] nodes of the window. Use [method child_controls_changed] to update it when child nodes have changed.  
         *  The value returned by this method can be overridden with [method _get_contents_minimum_size].  
         */
        getContentsMinimumSize(): Vector2
        
        /** Requests an update of the [Window] size to fit underlying [Control] nodes. */
        childControlsChanged(): void
        
        /** Prevents `*_theme_*_override` methods from emitting [constant NOTIFICATION_THEME_CHANGED] until [method end_bulk_theme_override] is called. */
        beginBulkThemeOverride(): void
        
        /** Ends a bulk theme override update. See [method begin_bulk_theme_override]. */
        endBulkThemeOverride(): void
        
        /** Creates a local override for a theme icon with the specified [param name]. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [method remove_theme_icon_override].  
         *  See also [method get_theme_icon].  
         */
        addThemeIconOverride(name: StringName, texture: Texture2D): void
        
        /** Creates a local override for a theme [StyleBox] with the specified [param name]. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [method remove_theme_stylebox_override].  
         *  See also [method get_theme_stylebox] and [method Control.add_theme_stylebox_override] for more details.  
         */
        addThemeStyleboxOverride(name: StringName, stylebox: StyleBox): void
        
        /** Creates a local override for a theme [Font] with the specified [param name]. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [method remove_theme_font_override].  
         *  See also [method get_theme_font].  
         */
        addThemeFontOverride(name: StringName, font: Font): void
        
        /** Creates a local override for a theme font size with the specified [param name]. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [method remove_theme_font_size_override].  
         *  See also [method get_theme_font_size].  
         */
        addThemeFontSizeOverride(name: StringName, fontSize: int64): void
        
        /** Creates a local override for a theme [Color] with the specified [param name]. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [method remove_theme_color_override].  
         *  See also [method get_theme_color] and [method Control.add_theme_color_override] for more details.  
         */
        addThemeColorOverride(name: StringName, color: Color): void
        
        /** Creates a local override for a theme constant with the specified [param name]. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [method remove_theme_constant_override].  
         *  See also [method get_theme_constant].  
         */
        addThemeConstantOverride(name: StringName, constant: int64): void
        
        /** Removes a local override for a theme icon with the specified [param name] previously added by [method add_theme_icon_override] or via the Inspector dock. */
        removeThemeIconOverride(name: StringName): void
        
        /** Removes a local override for a theme [StyleBox] with the specified [param name] previously added by [method add_theme_stylebox_override] or via the Inspector dock. */
        removeThemeStyleboxOverride(name: StringName): void
        
        /** Removes a local override for a theme [Font] with the specified [param name] previously added by [method add_theme_font_override] or via the Inspector dock. */
        removeThemeFontOverride(name: StringName): void
        
        /** Removes a local override for a theme font size with the specified [param name] previously added by [method add_theme_font_size_override] or via the Inspector dock. */
        removeThemeFontSizeOverride(name: StringName): void
        
        /** Removes a local override for a theme [Color] with the specified [param name] previously added by [method add_theme_color_override] or via the Inspector dock. */
        removeThemeColorOverride(name: StringName): void
        
        /** Removes a local override for a theme constant with the specified [param name] previously added by [method add_theme_constant_override] or via the Inspector dock. */
        removeThemeConstantOverride(name: StringName): void
        
        /** Returns an icon from the first matching [Theme] in the tree if that [Theme] has an icon item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for details.  
         */
        getThemeIcon(name: StringName, themeType?: StringName /* = '' */): null | Texture2D
        
        /** Returns a [StyleBox] from the first matching [Theme] in the tree if that [Theme] has a stylebox item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for details.  
         */
        getThemeStylebox(name: StringName, themeType?: StringName /* = '' */): null | StyleBox
        
        /** Returns a [Font] from the first matching [Theme] in the tree if that [Theme] has a font item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for details.  
         */
        getThemeFont(name: StringName, themeType?: StringName /* = '' */): null | Font
        
        /** Returns a font size from the first matching [Theme] in the tree if that [Theme] has a font size item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for details.  
         */
        getThemeFontSize(name: StringName, themeType?: StringName /* = '' */): int64
        
        /** Returns a [Color] from the first matching [Theme] in the tree if that [Theme] has a color item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for more details.  
         */
        getThemeColor(name: StringName, themeType?: StringName /* = '' */): Color
        
        /** Returns a constant from the first matching [Theme] in the tree if that [Theme] has a constant item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for more details.  
         */
        getThemeConstant(name: StringName, themeType?: StringName /* = '' */): int64
        
        /** Returns `true` if there is a local override for a theme icon with the specified [param name] in this [Control] node.  
         *  See [method add_theme_icon_override].  
         */
        hasThemeIconOverride(name: StringName): boolean
        
        /** Returns `true` if there is a local override for a theme [StyleBox] with the specified [param name] in this [Control] node.  
         *  See [method add_theme_stylebox_override].  
         */
        hasThemeStyleboxOverride(name: StringName): boolean
        
        /** Returns `true` if there is a local override for a theme [Font] with the specified [param name] in this [Control] node.  
         *  See [method add_theme_font_override].  
         */
        hasThemeFontOverride(name: StringName): boolean
        
        /** Returns `true` if there is a local override for a theme font size with the specified [param name] in this [Control] node.  
         *  See [method add_theme_font_size_override].  
         */
        hasThemeFontSizeOverride(name: StringName): boolean
        
        /** Returns `true` if there is a local override for a theme [Color] with the specified [param name] in this [Control] node.  
         *  See [method add_theme_color_override].  
         */
        hasThemeColorOverride(name: StringName): boolean
        
        /** Returns `true` if there is a local override for a theme constant with the specified [param name] in this [Control] node.  
         *  See [method add_theme_constant_override].  
         */
        hasThemeConstantOverride(name: StringName): boolean
        
        /** Returns `true` if there is a matching [Theme] in the tree that has an icon item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for details.  
         */
        hasThemeIcon(name: StringName, themeType?: StringName /* = '' */): boolean
        
        /** Returns `true` if there is a matching [Theme] in the tree that has a stylebox item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for details.  
         */
        hasThemeStylebox(name: StringName, themeType?: StringName /* = '' */): boolean
        
        /** Returns `true` if there is a matching [Theme] in the tree that has a font item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for details.  
         */
        hasThemeFont(name: StringName, themeType?: StringName /* = '' */): boolean
        
        /** Returns `true` if there is a matching [Theme] in the tree that has a font size item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for details.  
         */
        hasThemeFontSize(name: StringName, themeType?: StringName /* = '' */): boolean
        
        /** Returns `true` if there is a matching [Theme] in the tree that has a color item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for details.  
         */
        hasThemeColor(name: StringName, themeType?: StringName /* = '' */): boolean
        
        /** Returns `true` if there is a matching [Theme] in the tree that has a constant item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for details.  
         */
        hasThemeConstant(name: StringName, themeType?: StringName /* = '' */): boolean
        
        /** Returns the default base scale value from the first matching [Theme] in the tree if that [Theme] has a valid [member Theme.default_base_scale] value.  
         *  See [method Control.get_theme_color] for details.  
         */
        getThemeDefaultBaseScale(): float64
        
        /** Returns the default font from the first matching [Theme] in the tree if that [Theme] has a valid [member Theme.default_font] value.  
         *  See [method Control.get_theme_color] for details.  
         */
        getThemeDefaultFont(): null | Font
        
        /** Returns the default font size value from the first matching [Theme] in the tree if that [Theme] has a valid [member Theme.default_font_size] value.  
         *  See [method Control.get_theme_color] for details.  
         */
        getThemeDefaultFontSize(): int64
        
        /** Returns the ID of the window. */
        getWindowId(): int64
        
        /** Returns the focused window. */
        static getFocusedWindow(): null | Window
        
        /** Sets layout direction and text writing direction. Right-to-left layouts are necessary for certain languages (e.g. Arabic and Hebrew). */
        setLayoutDirection(direction: Window.LayoutDirection): void
        
        /** Returns layout direction and text writing direction. */
        getLayoutDirection(): Window.LayoutDirection
        
        /** Returns `true` if the layout is right-to-left. */
        isLayoutRtl(): boolean
        
        /** Enables font oversampling. This makes fonts look better when they are scaled up. */
        setUseFontOversampling(enable: boolean): void
        
        /** Returns `true` if font oversampling is enabled. See [method set_use_font_oversampling]. */
        isUsingFontOversampling(): boolean
        
        /** Shows the [Window] and makes it transient (see [member transient]). If [param rect] is provided, it will be set as the [Window]'s size. Fails if called on the main window.  
         *  If [member ProjectSettings.display/window/subwindows/embed_subwindows] is `true` (single-window mode), [param rect]'s coordinates are global and relative to the main window's top-left corner (excluding window decorations). If [param rect]'s position coordinates are negative, the window will be located outside the main window and may not be visible as a result.  
         *  If [member ProjectSettings.display/window/subwindows/embed_subwindows] is `false` (multi-window mode), [param rect]'s coordinates are global and relative to the top-left corner of the leftmost screen. If [param rect]'s position coordinates are negative, the window will be placed at the top-left corner of the screen.  
         *      
         *  **Note:** [param rect] must be in global coordinates if specified.  
         */
        popup(rect?: Rect2I /* = new Rect2I(0, 0, 0, 0) */): void
        
        /** Popups the [Window] with a position shifted by parent [Window]'s position. If the [Window] is embedded, has the same effect as [method popup]. */
        popupOnParent(parentRect: Rect2I): void
        
        /** Popups the [Window] at the center of the current screen, with optionally given minimum size. If the [Window] is embedded, it will be centered in the parent [Viewport] instead.  
         *      
         *  **Note:** Calling it with the default value of [param minsize] is equivalent to calling it with [member size].  
         */
        popupCentered(minsize?: Vector2I /* = Vector2I.ZERO */): void
        
        /** If [Window] is embedded, popups the [Window] centered inside its embedder and sets its size as a [param ratio] of embedder's size.  
         *  If [Window] is a native window, popups the [Window] centered inside the screen of its parent [Window] and sets its size as a [param ratio] of the screen size.  
         */
        popupCenteredRatio(ratio?: float64 /* = 0.8 */): void
        
        /** Popups the [Window] centered inside its parent [Window]. [param fallback_ratio] determines the maximum size of the [Window], in relation to its parent.  
         *      
         *  **Note:** Calling it with the default value of [param minsize] is equivalent to calling it with [member size].  
         */
        popupCenteredClamped(minsize?: Vector2I /* = Vector2I.ZERO */, fallbackRatio?: float64 /* = 0.75 */): void
        
        /** Attempts to parent this dialog to the last exclusive window relative to [param from_node], and then calls [method Window.popup] on it. The dialog must have no current parent, otherwise the method fails.  
         *  See also [method set_unparent_when_invisible] and [method Node.get_last_exclusive_window].  
         */
        popupExclusive(fromNode: Node, rect?: Rect2I /* = new Rect2I(0, 0, 0, 0) */): void
        
        /** Attempts to parent this dialog to the last exclusive window relative to [param from_node], and then calls [method Window.popup_on_parent] on it. The dialog must have no current parent, otherwise the method fails.  
         *  See also [method set_unparent_when_invisible] and [method Node.get_last_exclusive_window].  
         */
        popupExclusiveOnParent(fromNode: Node, parentRect: Rect2I): void
        
        /** Attempts to parent this dialog to the last exclusive window relative to [param from_node], and then calls [method Window.popup_centered] on it. The dialog must have no current parent, otherwise the method fails.  
         *  See also [method set_unparent_when_invisible] and [method Node.get_last_exclusive_window].  
         */
        popupExclusiveCentered(fromNode: Node, minsize?: Vector2I /* = Vector2I.ZERO */): void
        
        /** Attempts to parent this dialog to the last exclusive window relative to [param from_node], and then calls [method Window.popup_centered_ratio] on it. The dialog must have no current parent, otherwise the method fails.  
         *  See also [method set_unparent_when_invisible] and [method Node.get_last_exclusive_window].  
         */
        popupExclusiveCenteredRatio(fromNode: Node, ratio?: float64 /* = 0.8 */): void
        
        /** Attempts to parent this dialog to the last exclusive window relative to [param from_node], and then calls [method Window.popup_centered_clamped] on it. The dialog must have no current parent, otherwise the method fails.  
         *  See also [method set_unparent_when_invisible] and [method Node.get_last_exclusive_window].  
         */
        popupExclusiveCenteredClamped(fromNode: Node, minsize?: Vector2I /* = Vector2I.ZERO */, fallbackRatio?: float64 /* = 0.75 */): void
        
        /** Set's the window's current mode.  
         *      
         *  **Note:** Fullscreen mode is not exclusive full screen on Windows and Linux.  
         *      
         *  **Note:** This method only works with native windows, i.e. the main window and [Window]-derived nodes when [member Viewport.gui_embed_subwindows] is disabled in the main viewport.  
         */
        get mode(): int64
        set mode(value: int64)
        
        /** The window's title. If the [Window] is native, title styles set in [Theme] will have no effect. */
        get title(): string
        set title(value: string)
        
        /** Specifies the initial type of position for the [Window]. See [enum WindowInitialPosition] constants. */
        get initialPosition(): int64
        set initialPosition(value: int64)
        
        /** The window's position in pixels.  
         *  If [member ProjectSettings.display/window/subwindows/embed_subwindows] is `false`, the position is in absolute screen coordinates. This typically applies to editor plugins. If the setting is `true`, the window's position is in the coordinates of its parent [Viewport].  
         *      
         *  **Note:** This property only works if [member initial_position] is set to [constant WINDOW_INITIAL_POSITION_ABSOLUTE].  
         */
        get position(): Vector2I
        set position(value: Vector2I)
        
        /** The window's size in pixels. */
        get size(): Vector2I
        set size(value: Vector2I)
        
        /** The screen the window is currently on. */
        get currentScreen(): int64
        set currentScreen(value: int64)
        
        /** Sets a polygonal region of the window which accepts mouse events. Mouse events outside the region will be passed through.  
         *  Passing an empty array will disable passthrough support (all mouse events will be intercepted by the window, which is the default behavior).  
         *    
         *      
         *  **Note:** This property is ignored if [member mouse_passthrough] is set to `true`.  
         *      
         *  **Note:** On Windows, the portion of a window that lies outside the region is not drawn, while on Linux (X11) and macOS it is.  
         *      
         *  **Note:** This property is implemented on Linux (X11), macOS and Windows.  
         */
        get mousePassthroughPolygon(): PackedVector2Array
        set mousePassthroughPolygon(value: PackedVector2Array | Vector2[])
        
        /** If `true`, the window is visible. */
        get visible(): boolean
        set visible(value: boolean)
        
        /** If `true`, the window's size will automatically update when a child node is added or removed, ignoring [member min_size] if the new size is bigger.  
         *  If `false`, you need to call [method child_controls_changed] manually.  
         */
        get wrapControls(): boolean
        set wrapControls(value: boolean)
        
        /** If `true`, the [Window] is transient, i.e. it's considered a child of another [Window]. The transient window will be destroyed with its transient parent and will return focus to their parent when closed. The transient window is displayed on top of a non-exclusive full-screen parent window. Transient windows can't enter full-screen mode.  
         *  Note that behavior might be different depending on the platform.  
         */
        get transient(): boolean
        set transient(value: boolean)
        
        /** If `true`, and the [Window] is [member transient], this window will (at the time of becoming visible) become transient to the currently focused window instead of the immediate parent window in the hierarchy. Note that the transient parent is assigned at the time this window becomes visible, so changing it afterwards has no effect until re-shown. */
        get transientToFocused(): boolean
        set transientToFocused(value: boolean)
        
        /** If `true`, the [Window] will be in exclusive mode. Exclusive windows are always on top of their parent and will block all input going to the parent [Window].  
         *  Needs [member transient] enabled to work.  
         */
        get exclusive(): boolean
        set exclusive(value: boolean)
        
        /** If `true`, the window can't be resized. */
        get unresizable(): boolean
        set unresizable(value: boolean)
        
        /** If `true`, the window will have no borders. */
        get borderless(): boolean
        set borderless(value: boolean)
        
        /** If `true`, the window will be on top of all other windows. Does not work if [member transient] is enabled. */
        get alwaysOnTop(): boolean
        set alwaysOnTop(value: boolean)
        
        /** If `true`, the [Window]'s background can be transparent. This is best used with embedded windows.  
         *      
         *  **Note:** Transparency support is implemented on Linux, macOS and Windows, but availability might vary depending on GPU driver, display manager, and compositor capabilities.  
         *      
         *  **Note:** This property has no effect if [member ProjectSettings.display/window/per_pixel_transparency/allowed] is set to `false`.  
         */
        get transparent(): boolean
        set transparent(value: boolean)
        
        /** If `true`, the [Window] can't be focused nor interacted with. It can still be visible. */
        get unfocusable(): boolean
        set unfocusable(value: boolean)
        
        /** If `true`, the [Window] will be considered a popup. Popups are sub-windows that don't show as separate windows in system's window manager's window list and will send close request when anything is clicked outside of them (unless [member exclusive] is enabled). */
        get popupWindow(): boolean
        set popupWindow(value: boolean)
        
        /** If `true`, the [Window] contents is expanded to the full size of the window, window title bar is transparent.  
         *      
         *  **Note:** This property is implemented only on macOS.  
         *      
         *  **Note:** This property only works with native windows.  
         */
        get extendToTitle(): boolean
        set extendToTitle(value: boolean)
        
        /** If `true`, all mouse events will be passed to the underlying window of the same application. See also [member mouse_passthrough_polygon].  
         *      
         *  **Note:** This property is implemented on Linux (X11), macOS and Windows.  
         *      
         *  **Note:** This property only works with native windows.  
         */
        get mousePassthrough(): boolean
        set mousePassthrough(value: boolean)
        
        /** If `true`, the [Window] will override the OS window style to display sharp corners.  
         *      
         *  **Note:** This property is implemented only on Windows (11).  
         *      
         *  **Note:** This property only works with native windows.  
         */
        get sharpCorners(): boolean
        set sharpCorners(value: boolean)
        
        /** If `true`, the [Window] is excluded from screenshots taken by [method DisplayServer.screen_get_image], [method DisplayServer.screen_get_image_rect], and [method DisplayServer.screen_get_pixel].  
         *      
         *  **Note:** This property is implemented on macOS and Windows.  
         *      
         *  **Note:** Enabling this setting does **NOT** prevent other apps from capturing an image. It should not be used as a security measure.  
         */
        get excludeFromCapture(): boolean
        set excludeFromCapture(value: boolean)
        
        /** If `true`, the [Window] will signal to the window manager that it is supposed to be an implementation-defined "popup" (usually a floating, borderless, untileable and immovable child window). */
        get popupWMHint(): boolean
        set popupWMHint(value: boolean)
        
        /** If `true`, the [Window]'s minimize button is disabled.  
         *      
         *  **Note:** If both minimize and maximize buttons are disabled, buttons are fully hidden, and only close button is visible.  
         *      
         *  **Note:** This property is implemented only on macOS and Windows.  
         */
        get minimizeDisabled(): boolean
        set minimizeDisabled(value: boolean)
        
        /** If `true`, the [Window]'s maximize button is disabled.  
         *      
         *  **Note:** If both minimize and maximize buttons are disabled, buttons are fully hidden, and only close button is visible.  
         *      
         *  **Note:** This property is implemented only on macOS and Windows.  
         */
        get maximizeDisabled(): boolean
        set maximizeDisabled(value: boolean)
        
        /** If `true`, native window will be used regardless of parent viewport and project settings. */
        get forceNative(): boolean
        set forceNative(value: boolean)
        
        /** If non-zero, the [Window] can't be resized to be smaller than this size.  
         *      
         *  **Note:** This property will be ignored in favor of [method get_contents_minimum_size] if [member wrap_controls] is enabled and if its size is bigger.  
         */
        get minSize(): Vector2I
        set minSize(value: Vector2I)
        
        /** If non-zero, the [Window] can't be resized to be bigger than this size.  
         *      
         *  **Note:** This property will be ignored if the value is lower than [member min_size].  
         */
        get maxSize(): Vector2I
        set maxSize(value: Vector2I)
        
        /** If `true`, the [Window] width is expanded to keep the title bar text fully visible. */
        get keepTitleVisible(): boolean
        set keepTitleVisible(value: boolean)
        
        /** Base size of the content (i.e. nodes that are drawn inside the window). If non-zero, [Window]'s content will be scaled when the window is resized to a different size. */
        get contentScaleSize(): Vector2I
        set contentScaleSize(value: Vector2I)
        
        /** Specifies how the content is scaled when the [Window] is resized. */
        get contentScaleMode(): int64
        set contentScaleMode(value: int64)
        
        /** Specifies how the content's aspect behaves when the [Window] is resized. The base aspect is determined by [member content_scale_size]. */
        get contentScaleAspect(): int64
        set contentScaleAspect(value: int64)
        
        /** The policy to use to determine the final scale factor for 2D elements. This affects how [member content_scale_factor] is applied, in addition to the automatic scale factor determined by [member content_scale_size]. */
        get contentScaleStretch(): int64
        set contentScaleStretch(value: int64)
        
        /** Specifies the base scale of [Window]'s content when its [member size] is equal to [member content_scale_size]. See also [method Viewport.get_stretch_transform]. */
        get contentScaleFactor(): float64
        set contentScaleFactor(value: float64)
        
        /** Toggles if any text should automatically change to its translated version depending on the current locale. */
        get autoTranslate(): boolean
        set autoTranslate(value: boolean)
        
        /** The [Theme] resource this node and all its [Control] and [Window] children use. If a child node has its own [Theme] resource set, theme items are merged with child's definitions having higher priority.  
         *      
         *  **Note:** [Window] styles will have no effect unless the window is embedded.  
         */
        get theme(): null | Theme
        set theme(value: null | Theme)
        
        /** The name of a theme type variation used by this [Window] to look up its own theme items. See [member Control.theme_type_variation] for more details. */
        get themeTypeVariation(): string
        set themeTypeVariation(value: string)
        
        /** Emitted when the [Window] is currently focused and receives any input, passing the received event as an argument. The event's position, if present, is in the embedder's coordinate system. */
        readonly windowInput: Signal<(event: InputEvent) => void>
        
        /** Emitted when files are dragged from the OS file manager and dropped in the game window. The argument is a list of file paths.  
         *    
         *      
         *  **Note:** This signal only works with native windows, i.e. the main window and [Window]-derived nodes when [member Viewport.gui_embed_subwindows] is disabled in the main viewport.  
         */
        readonly filesDropped: Signal<(files: PackedStringArray) => void>
        
        /** Emitted when the mouse cursor enters the [Window]'s visible area, that is not occluded behind other [Control]s or windows, provided its [member Viewport.gui_disable_input] is `false` and regardless if it's currently focused or not. */
        readonly mouseEntered: Signal<() => void>
        
        /** Emitted when the mouse cursor leaves the [Window]'s visible area, that is not occluded behind other [Control]s or windows, provided its [member Viewport.gui_disable_input] is `false` and regardless if it's currently focused or not. */
        readonly mouseExited: Signal<() => void>
        
        /** Emitted when the [Window] gains focus. */
        readonly focusEntered: Signal<() => void>
        
        /** Emitted when the [Window] loses its focus. */
        readonly focusExited: Signal<() => void>
        
        /** Emitted when the [Window]'s close button is pressed or when [member popup_window] is enabled and user clicks outside the window.  
         *  This signal can be used to handle window closing, e.g. by connecting it to [method hide].  
         */
        readonly closeRequested: Signal<() => void>
        
        /** Emitted when a go back request is sent (e.g. pressing the "Back" button on Android), right after [constant Node.NOTIFICATION_WM_GO_BACK_REQUEST]. */
        readonly goBackRequested: Signal<() => void>
        
        /** Emitted when [Window] is made visible or disappears. */
        readonly visibilityChanged: Signal<() => void>
        
        /** Emitted right after [method popup] call, before the [Window] appears or does anything. */
        readonly aboutToPopup: Signal<() => void>
        
        /** Emitted when the [constant NOTIFICATION_THEME_CHANGED] notification is sent. */
        readonly themeChanged: Signal<() => void>
        
        /** Emitted when the [Window]'s DPI changes as a result of OS-level changes (e.g. moving the window from a Retina display to a lower resolution one).  
         *      
         *  **Note:** Only implemented on macOS and Linux (Wayland).  
         */
        readonly dpiChanged: Signal<() => void>
        
        /** Emitted when window title bar decorations are changed, e.g. macOS window enter/exit full screen mode, or extend-to-title flag is changed. */
        readonly titlebarChanged: Signal<() => void>
        
        /** Emitted when window title bar text is changed. */
        readonly titleChanged: Signal<() => void>
    }
}
