// AUTO-GENERATED
/// <reference no-default-lib="true"/>
declare module "godot" {
    /** A PBR (Physically Based Rendering) material to be used on 3D objects.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_standardmaterial3d.html  
     */
    class StandardMaterial3D extends BaseMaterial3D {
        constructor(identifier?: any)
    }
    /** A 2D physics body that can't be moved by external forces. When moved manually, it doesn't affect other bodies in its path.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_staticbody2d.html  
     */
    class StaticBody2D<Map extends Record<string, Node> = {}> extends PhysicsBody2D<Map> {
        constructor(identifier?: any)
        get physicsMaterialOverride(): PhysicsMaterial
        set physicsMaterialOverride(value: PhysicsMaterial)
        get constantLinearVelocity(): Vector2
        set constantLinearVelocity(value: Vector2)
        get constantAngularVelocity(): float64
        set constantAngularVelocity(value: float64)
    }
    /** A 3D physics body that can't be moved by external forces. When moved manually, it doesn't affect other bodies in its path.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_staticbody3d.html  
     */
    class StaticBody3D<Map extends Record<string, Node> = {}> extends PhysicsBody3D<Map> {
        constructor(identifier?: any)
        get physicsMaterialOverride(): PhysicsMaterial
        set physicsMaterialOverride(value: PhysicsMaterial)
        get constantLinearVelocity(): Vector3
        set constantLinearVelocity(value: Vector3)
        get constantAngularVelocity(): Vector3
        set constantAngularVelocity(value: Vector3)
    }
    /** Application status indicator (aka notification area icon).  
     *      
     *  **Note:** Status indicator is implemented on macOS and Windows.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_statusindicator.html  
     */
    class StatusIndicator<Map extends Record<string, Node> = {}> extends Node<Map> {
        constructor(identifier?: any)
        getRect(): Rect2
        
        /** Status indicator tooltip. */
        get tooltip(): string
        set tooltip(value: string)
        
        /** Status indicator icon. */
        get icon(): Texture2D
        set icon(value: Texture2D)
        
        /** Status indicator native popup menu. If this is set, the [signal pressed] signal is not emitted.  
         *      
         *  **Note:** Native popup is only supported if [NativeMenu] supports [constant NativeMenu.FEATURE_POPUP_MENU] feature.  
         */
        get menu(): NodePath
        set menu(value: NodePath | string)
        
        /** If `true`, the status indicator is visible. */
        get visible(): boolean
        set visible(value: boolean)
        
        /** Emitted when the status indicator is pressed. */
        readonly pressed: Signal<(mouseButton: int64, mousePosition: Vector2I) => void>
    }
    /** Abstract base class for interacting with streams.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_streampeer.html  
     */
    class StreamPeer extends RefCounted {
        constructor(identifier?: any)
        putData(data: PackedByteArray | byte[] | ArrayBuffer): GError
        putPartialData(data: PackedByteArray | byte[] | ArrayBuffer): GArray
        getData(bytes: int64): GArray
        getPartialData(bytes: int64): GArray
        getAvailableBytes(): int64
        put8(value: int64): void
        putU8(value: int64): void
        put16(value: int64): void
        putU16(value: int64): void
        put32(value: int64): void
        putU32(value: int64): void
        put64(value: int64): void
        putU64(value: int64): void
        putHalf(value: float64): void
        putFloat(value: float64): void
        putDouble(value: float64): void
        putString(value: string): void
        putUtf8String(value: string): void
        putVar(value: any, fullObjects: boolean = false): void
        get8(): int64
        getU8(): int64
        get16(): int64
        getU16(): int64
        get32(): int64
        getU32(): int64
        get64(): int64
        getU64(): int64
        getHalf(): float64
        getFloat(): float64
        getDouble(): float64
        getString(bytes: int64 = -1): string
        getUtf8String(bytes: int64 = -1): string
        getVar(allowObjects: boolean = false): any
        get bigEndian(): boolean
        set bigEndian(value: boolean)
    }
    /** A stream peer used to handle binary data streams.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_streampeerbuffer.html  
     */
    class StreamPeerBuffer extends StreamPeer {
        constructor(identifier?: any)
        /** Moves the cursor to the specified position. [param position] must be a valid index of [member data_array]. */
        seek(position: int64): void
        getSize(): int64
        getPosition(): int64
        
        /** Resizes the [member data_array]. This  *doesn't*  update the cursor. */
        resize(size: int64): void
        
        /** Clears the [member data_array] and resets the cursor. */
        clear(): void
        
        /** Returns a new [StreamPeerBuffer] with the same [member data_array] content. */
        duplicate(): StreamPeerBuffer
        get dataArray(): PackedByteArray
        set dataArray(value: PackedByteArray | byte[] | ArrayBuffer)
    }
    /** @link https://docs.godotengine.org/en/latest/classes/class_streampeerextension.html */
    class StreamPeerExtension extends StreamPeer {
        constructor(identifier?: any)
        /* gdvirtual */ _getData(rBuffer: int64, rBytes: int64, rReceived: int64): GError
        /* gdvirtual */ _getPartialData(rBuffer: int64, rBytes: int64, rReceived: int64): GError
        /* gdvirtual */ _putData(pData: int64, pBytes: int64, rSent: int64): GError
        /* gdvirtual */ _putPartialData(pData: int64, pBytes: int64, rSent: int64): GError
        /* gdvirtual */ _getAvailableBytes(): int64
    }
    class StreamPeerGZip extends StreamPeer {
        constructor(identifier?: any)
        startCompression(useDeflate: boolean = false, bufferSize: int64 = 65535): GError
        startDecompression(useDeflate: boolean = false, bufferSize: int64 = 65535): GError
        finish(): GError
        clear(): void
    }
    namespace StreamPeerTcp {
        enum Status {
            StatusNone = 0,
            StatusConnecting = 1,
            StatusConnected = 2,
            StatusError = 3,
        }
    }
    class StreamPeerTcp extends StreamPeer {
        static readonly STATUS_NONE = 0
        static readonly STATUS_CONNECTING = 1
        static readonly STATUS_CONNECTED = 2
        static readonly STATUS_ERROR = 3
        constructor(identifier?: any)
        bind(port: int64, host: string = '*'): GError
        connectToHost(host: string, port: int64): GError
        poll(): GError
        getStatus(): StreamPeerTcp.Status
        getConnectedHost(): string
        getConnectedPort(): int64
        getLocalPort(): int64
        disconnectFromHost(): void
        setNoDelay(enabled: boolean): void
    }
    namespace StreamPeerTls {
        enum Status {
            StatusDisconnected = 0,
            StatusHandshaking = 1,
            StatusConnected = 2,
            StatusError = 3,
            StatusErrorHostnameMismatch = 4,
        }
    }
    class StreamPeerTls extends StreamPeer {
        static readonly STATUS_DISCONNECTED = 0
        static readonly STATUS_HANDSHAKING = 1
        static readonly STATUS_CONNECTED = 2
        static readonly STATUS_ERROR = 3
        static readonly STATUS_ERROR_HOSTNAME_MISMATCH = 4
        constructor(identifier?: any)
        poll(): void
        acceptStream(stream: StreamPeer, serverOptions: any /*TLSOptions*/): GError
        connectToStream(stream: StreamPeer, commonName: string, clientOptions: any /*TLSOptions*/ = undefined): GError
        getStatus(): StreamPeerTls.Status
        getStream(): StreamPeer
        disconnectFromStream(): void
    }
    /** Abstract base class for defining stylized boxes for UI elements.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_stylebox.html  
     */
    class StyleBox extends Resource {
        constructor(identifier?: any)
        /* gdvirtual */ _draw(toCanvasItem: Rid, rect: Rect2): void
        /* gdvirtual */ _getDrawRect(rect: Rect2): Rect2
        /* gdvirtual */ _getMinimumSize(): Vector2
        /* gdvirtual */ _testMask(point: Vector2, rect: Rect2): boolean
        getMinimumSize(): Vector2
        setContentMargin(margin: Side, offset: float64): void
        setContentMarginAll(offset: float64): void
        getContentMargin(margin: Side): float64
        getMargin(margin: Side): float64
        getOffset(): Vector2
        
        /** Draws this stylebox using a canvas item identified by the given [RID].  
         *  The [RID] value can either be the result of [method CanvasItem.get_canvas_item] called on an existing [CanvasItem]-derived node, or directly from creating a canvas item in the [RenderingServer] with [method RenderingServer.canvas_item_create].  
         */
        draw(canvasItem: Rid, rect: Rect2): void
        getCurrentItemDrawn(): CanvasItem
        testMask(point: Vector2, rect: Rect2): boolean
        get contentMarginLeft(): float64
        set contentMarginLeft(value: float64)
        get contentMarginTop(): float64
        set contentMarginTop(value: float64)
        get contentMarginRight(): float64
        set contentMarginRight(value: float64)
        get contentMarginBottom(): float64
        set contentMarginBottom(value: float64)
    }
    /** An empty [StyleBox] (does not display anything).  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_styleboxempty.html  
     */
    class StyleBoxEmpty extends StyleBox {
        constructor(identifier?: any)
    }
    /** A customizable [StyleBox] that doesn't use a texture.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_styleboxflat.html  
     */
    class StyleBoxFlat extends StyleBox {
        constructor(identifier?: any)
        setBorderWidthAll(width: int64): void
        getBorderWidthMin(): int64
        setBorderWidth(margin: Side, width: int64): void
        getBorderWidth(margin: Side): int64
        setCornerRadiusAll(radius: int64): void
        setCornerRadius(corner: Corner, radius: int64): void
        getCornerRadius(corner: Corner): int64
        setExpandMargin(margin: Side, size: float64): void
        setExpandMarginAll(size: float64): void
        getExpandMargin(margin: Side): float64
        get bgColor(): Color
        set bgColor(value: Color)
        get drawCenter(): boolean
        set drawCenter(value: boolean)
        
        /** If set to a non-zero value on either axis, [member skew] distorts the StyleBox horizontally and/or vertically. This can be used for "futuristic"-style UIs. Positive values skew the StyleBox towards the right (X axis) and upwards (Y axis), while negative values skew the StyleBox towards the left (X axis) and downwards (Y axis).  
         *      
         *  **Note:** To ensure text does not touch the StyleBox's edges, consider increasing the [StyleBox]'s content margin (see [member StyleBox.content_margin_bottom]). It is preferable to increase the content margin instead of the expand margin (see [member expand_margin_bottom]), as increasing the expand margin does not increase the size of the clickable area for [Control]s.  
         */
        get skew(): Vector2
        set skew(value: Vector2)
        get borderWidthLeft(): int64
        set borderWidthLeft(value: int64)
        get borderWidthTop(): int64
        set borderWidthTop(value: int64)
        get borderWidthRight(): int64
        set borderWidthRight(value: int64)
        get borderWidthBottom(): int64
        set borderWidthBottom(value: int64)
        get borderColor(): Color
        set borderColor(value: Color)
        get borderBlend(): boolean
        set borderBlend(value: boolean)
        get cornerRadiusTopLeft(): int64
        set cornerRadiusTopLeft(value: int64)
        get cornerRadiusTopRight(): int64
        set cornerRadiusTopRight(value: int64)
        get cornerRadiusBottomRight(): int64
        set cornerRadiusBottomRight(value: int64)
        get cornerRadiusBottomLeft(): int64
        set cornerRadiusBottomLeft(value: int64)
        get cornerDetail(): int64
        set cornerDetail(value: int64)
        get expandMarginLeft(): float64
        set expandMarginLeft(value: float64)
        get expandMarginTop(): float64
        set expandMarginTop(value: float64)
        get expandMarginRight(): float64
        set expandMarginRight(value: float64)
        get expandMarginBottom(): float64
        set expandMarginBottom(value: float64)
        get shadowColor(): Color
        set shadowColor(value: Color)
        get shadowSize(): int64
        set shadowSize(value: int64)
        get shadowOffset(): Vector2
        set shadowOffset(value: Vector2)
        get antiAliasing(): boolean
        set antiAliasing(value: boolean)
        get antiAliasingSize(): float64
        set antiAliasingSize(value: float64)
    }
    /** A [StyleBox] that displays a single line of a given color and thickness.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_styleboxline.html  
     */
    class StyleBoxLine extends StyleBox {
        constructor(identifier?: any)
        /** The line's color. */
        get color(): Color
        set color(value: Color)
        get growBegin(): float64
        set growBegin(value: float64)
        get growEnd(): float64
        set growEnd(value: float64)
        
        /** The line's thickness in pixels. */
        get thickness(): int64
        set thickness(value: int64)
        
        /** If `true`, the line will be vertical. If `false`, the line will be horizontal. */
        get vertical(): boolean
        set vertical(value: boolean)
    }
    namespace StyleBoxTexture {
        enum AxisStretchMode {
            AxisStretchModeStretch = 0,
            AxisStretchModeTile = 1,
            AxisStretchModeTileFit = 2,
        }
    }
    /** A texture-based nine-patch [StyleBox].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_styleboxtexture.html  
     */
    class StyleBoxTexture extends StyleBox {
        /** Stretch the stylebox's texture. This results in visible distortion unless the texture size matches the stylebox's size perfectly. */
        static readonly AXIS_STRETCH_MODE_STRETCH = 0
        
        /** Repeats the stylebox's texture to match the stylebox's size according to the nine-patch system. */
        static readonly AXIS_STRETCH_MODE_TILE = 1
        
        /** Repeats the stylebox's texture to match the stylebox's size according to the nine-patch system. Unlike [constant AXIS_STRETCH_MODE_TILE], the texture may be slightly stretched to make the nine-patch texture tile seamlessly. */
        static readonly AXIS_STRETCH_MODE_TILE_FIT = 2
        constructor(identifier?: any)
        setTextureMargin(margin: Side, size: float64): void
        setTextureMarginAll(size: float64): void
        getTextureMargin(margin: Side): float64
        setExpandMargin(margin: Side, size: float64): void
        setExpandMarginAll(size: float64): void
        getExpandMargin(margin: Side): float64
        
        /** The texture to use when drawing this style box. */
        get texture(): Texture2D
        set texture(value: Texture2D)
        get textureMarginLeft(): float64
        set textureMarginLeft(value: float64)
        get textureMarginTop(): float64
        set textureMarginTop(value: float64)
        get textureMarginRight(): float64
        set textureMarginRight(value: float64)
        get textureMarginBottom(): float64
        set textureMarginBottom(value: float64)
        get expandMarginLeft(): float64
        set expandMarginLeft(value: float64)
        get expandMarginTop(): float64
        set expandMarginTop(value: float64)
        get expandMarginRight(): float64
        set expandMarginRight(value: float64)
        get expandMarginBottom(): float64
        set expandMarginBottom(value: float64)
        get axisStretchHorizontal(): int64
        set axisStretchHorizontal(value: int64)
        get axisStretchVertical(): int64
        set axisStretchVertical(value: int64)
        get regionRect(): Rect2
        set regionRect(value: Rect2)
        get modulateColor(): Color
        set modulateColor(value: Color)
        get drawCenter(): boolean
        set drawCenter(value: boolean)
    }
    namespace SubViewport {
        enum ClearMode {
            ClearModeAlways = 0,
            ClearModeNever = 1,
            ClearModeOnce = 2,
        }
        enum UpdateMode {
            UpdateDisabled = 0,
            UpdateOnce = 1,
            UpdateWhenVisible = 2,
            UpdateWhenParentVisible = 3,
            UpdateAlways = 4,
        }
    }
    /** An interface to a game world that doesn't create a window or draw to the screen directly.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_subviewport.html  
     */
    class SubViewport<Map extends Record<string, Node> = {}> extends Viewport<Map> {
        /** Always clear the render target before drawing. */
        static readonly CLEAR_MODE_ALWAYS = 0
        
        /** Never clear the render target. */
        static readonly CLEAR_MODE_NEVER = 1
        
        /** Clear the render target on the next frame, then switch to [constant CLEAR_MODE_NEVER]. */
        static readonly CLEAR_MODE_ONCE = 2
        
        /** Do not update the render target. */
        static readonly UPDATE_DISABLED = 0
        
        /** Update the render target once, then switch to [constant UPDATE_DISABLED]. */
        static readonly UPDATE_ONCE = 1
        
        /** Update the render target only when it is visible. This is the default value. */
        static readonly UPDATE_WHEN_VISIBLE = 2
        
        /** Update the render target only when its parent is visible. */
        static readonly UPDATE_WHEN_PARENT_VISIBLE = 3
        
        /** Always update the render target. */
        static readonly UPDATE_ALWAYS = 4
        constructor(identifier?: any)
        
        /** The width and height of the sub-viewport. Must be set to a value greater than or equal to 2 pixels on both dimensions. Otherwise, nothing will be displayed.  
         *      
         *  **Note:** If the parent node is a [SubViewportContainer] and its [member SubViewportContainer.stretch] is `true`, the viewport size cannot be changed manually.  
         */
        get size(): Vector2I
        set size(value: Vector2I)
        get size2DOverride(): Vector2I
        set size2DOverride(value: Vector2I)
        get size2DOverrideStretch(): boolean
        set size2DOverrideStretch(value: boolean)
        get renderTargetClearMode(): int64
        set renderTargetClearMode(value: int64)
        get renderTargetUpdateMode(): int64
        set renderTargetUpdateMode(value: int64)
    }
    /** A container used for displaying the contents of a [SubViewport].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_subviewportcontainer.html  
     */
    class SubViewportContainer<Map extends Record<string, Node> = {}> extends Container<Map> {
        constructor(identifier?: any)
        /* gdvirtual */ _propagateInputEvent(event: InputEvent): boolean
        
        /** If `true`, the sub-viewport will be automatically resized to the control's size.  
         *      
         *  **Note:** If `true`, this will prohibit changing [member SubViewport.size] of its children manually.  
         */
        get stretch(): boolean
        set stretch(value: boolean)
        get stretchShrink(): int64
        set stretchShrink(value: int64)
        get mouseTarget(): boolean
        set mouseTarget(value: boolean)
    }
    /** Runs a [Tween] nested within another [Tween].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_subtweentweener.html  
     */
    class SubtweenTweener extends Tweener {
        constructor(identifier?: any)
        setDelay(delay: float64): SubtweenTweener
    }
    namespace SurfaceTool {
        enum CustomFormat {
            CustomRgba8Unorm = 0,
            CustomRgba8Snorm = 1,
            CustomRgHalf = 2,
            CustomRgbaHalf = 3,
            CustomRFloat = 4,
            CustomRgFloat = 5,
            CustomRgbFloat = 6,
            CustomRgbaFloat = 7,
            CustomMax = 8,
        }
        enum SkinWeightCount {
            Skin4Weights = 0,
            Skin8Weights = 1,
        }
    }
    /** Helper tool to create geometry.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_surfacetool.html  
     */
    class SurfaceTool extends RefCounted {
        /** Limits range of data passed to [method set_custom] to unsigned normalized 0 to 1 stored in 8 bits per channel. See [constant Mesh.ARRAY_CUSTOM_RGBA8_UNORM]. */
        static readonly CUSTOM_RGBA8_UNORM = 0
        
        /** Limits range of data passed to [method set_custom] to signed normalized -1 to 1 stored in 8 bits per channel. See [constant Mesh.ARRAY_CUSTOM_RGBA8_SNORM]. */
        static readonly CUSTOM_RGBA8_SNORM = 1
        
        /** Stores data passed to [method set_custom] as half precision floats, and uses only red and green color channels. See [constant Mesh.ARRAY_CUSTOM_RG_HALF]. */
        static readonly CUSTOM_RG_HALF = 2
        
        /** Stores data passed to [method set_custom] as half precision floats and uses all color channels. See [constant Mesh.ARRAY_CUSTOM_RGBA_HALF]. */
        static readonly CUSTOM_RGBA_HALF = 3
        
        /** Stores data passed to [method set_custom] as full precision floats, and uses only red color channel. See [constant Mesh.ARRAY_CUSTOM_R_FLOAT]. */
        static readonly CUSTOM_R_FLOAT = 4
        
        /** Stores data passed to [method set_custom] as full precision floats, and uses only red and green color channels. See [constant Mesh.ARRAY_CUSTOM_RG_FLOAT]. */
        static readonly CUSTOM_RG_FLOAT = 5
        
        /** Stores data passed to [method set_custom] as full precision floats, and uses only red, green and blue color channels. See [constant Mesh.ARRAY_CUSTOM_RGB_FLOAT]. */
        static readonly CUSTOM_RGB_FLOAT = 6
        
        /** Stores data passed to [method set_custom] as full precision floats, and uses all color channels. See [constant Mesh.ARRAY_CUSTOM_RGBA_FLOAT]. */
        static readonly CUSTOM_RGBA_FLOAT = 7
        
        /** Used to indicate a disabled custom channel. */
        static readonly CUSTOM_MAX = 8
        
        /** Each individual vertex can be influenced by only 4 bone weights. */
        static readonly SKIN_4_WEIGHTS = 0
        
        /** Each individual vertex can be influenced by up to 8 bone weights. */
        static readonly SKIN_8_WEIGHTS = 1
        constructor(identifier?: any)
        setSkinWeightCount(count: SurfaceTool.SkinWeightCount): void
        getSkinWeightCount(): SurfaceTool.SkinWeightCount
        setCustomFormat(channelIndex: int64, format: SurfaceTool.CustomFormat): void
        getCustomFormat(channelIndex: int64): SurfaceTool.CustomFormat
        
        /** Called before adding any vertices. Takes the primitive type as an argument (e.g. [constant Mesh.PRIMITIVE_TRIANGLES]). */
        begin(primitive: Mesh.PrimitiveType): void
        addVertex(vertex: Vector3): void
        setColor(color: Color): void
        setNormal(normal: Vector3): void
        setTangent(tangent: Plane): void
        setUV(uV: Vector2): void
        setUV2(uV2: Vector2): void
        setBones(bones: PackedInt32Array | int32[]): void
        setWeights(weights: PackedFloat32Array | float32[]): void
        setCustom(channelIndex: int64, customColor: Color): void
        setSmoothGroup(index: int64): void
        addTriangleFan(vertices: PackedVector3Array | Vector3[], uvs: PackedVector2Array | Vector2[] = [], colors: PackedColorArray | Color[] = [], uv2S: PackedVector2Array | Vector2[] = [], normals: PackedVector3Array | Vector3[] = [], tangents: GArray = []): void
        addIndex(index: int64): void
        
        /** Shrinks the vertex array by creating an index array. This can improve performance by avoiding vertex reuse. */
        index(): void
        
        /** Removes the index array by expanding the vertex array. */
        deindex(): void
        generateNormals(flip: boolean = false): void
        generateTangents(): void
        optimizeIndicesForCache(): void
        getAabb(): Aabb
        generateLod(ndThreshold: float64, targetIndexCount: int64 = 3): PackedInt32Array
        setMaterial(material: Material): void
        getPrimitiveType(): Mesh.PrimitiveType
        
        /** Clear all information passed into the surface tool so far. */
        clear(): void
        createFrom(existing: Mesh, surface: int64): void
        createFromArrays(arrays: GArray, primitiveType: Mesh.PrimitiveType = 3): void
        createFromBlendShape(existing: Mesh, surface: int64, blendShape: string): void
        appendFrom(existing: Mesh, surface: int64, transform: Transform3D): void
        
        /** Returns a constructed [ArrayMesh] from current information passed in. If an existing [ArrayMesh] is passed in as an argument, will add an extra surface to the existing [ArrayMesh].  
         *  The [param flags] argument can be the bitwise OR of [constant Mesh.ARRAY_FLAG_USE_DYNAMIC_UPDATE], [constant Mesh.ARRAY_FLAG_USE_8_BONE_WEIGHTS], or [constant Mesh.ARRAY_FLAG_USES_EMPTY_VERTEX_ARRAY].  
         */
        commit(existing: ArrayMesh = undefined, flags: int64 = 0): ArrayMesh
        commitToArrays(): GArray
    }
    /** Base class for syntax highlighters. Provides syntax highlighting data to a [TextEdit].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_syntaxhighlighter.html  
     */
    class SyntaxHighlighter extends Resource {
        constructor(identifier?: any)
        /* gdvirtual */ _getLineSyntaxHighlighting(line: int64): GDictionary
        /* gdvirtual */ _clearHighlightingCache(): void
        /* gdvirtual */ _updateCache(): void
        getLineSyntaxHighlighting(line: int64): GDictionary
        updateCache(): void
        clearHighlightingCache(): void
        getTextEdit(): TextEdit
    }
    /** A font loaded from a system font. Falls back to a default theme font if not implemented on the host OS.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_systemfont.html  
     */
    class SystemFont extends Font {
        constructor(identifier?: any)
        get fontNames(): PackedStringArray
        set fontNames(value: PackedStringArray | string[])
        get fontItalic(): boolean
        set fontItalic(value: boolean)
        get fontWeight(): int64
        set fontWeight(value: int64)
        get fontStretch(): int64
        set fontStretch(value: int64)
        
        /** Font anti-aliasing mode. */
        get antialiasing(): int64
        set antialiasing(value: int64)
        get generateMipmaps(): boolean
        set generateMipmaps(value: boolean)
        get disableEmbeddedBitmaps(): boolean
        set disableEmbeddedBitmaps(value: boolean)
        get allowSystemFallback(): boolean
        set allowSystemFallback(value: boolean)
        get forceAutohinter(): boolean
        set forceAutohinter(value: boolean)
        
        /** Font hinting mode. */
        get hinting(): int64
        set hinting(value: int64)
        get subpixelPositioning(): int64
        set subpixelPositioning(value: int64)
        get keepRoundingRemainders(): boolean
        set keepRoundingRemainders(value: boolean)
        get multichannelSignedDistanceField(): boolean
        set multichannelSignedDistanceField(value: boolean)
        get msdfPixelRange(): int64
        set msdfPixelRange(value: int64)
        get msdfSize(): int64
        set msdfSize(value: int64)
        
        /** Font oversampling factor, if set to `0.0` global oversampling factor is used instead. */
        get oversampling(): float64
        set oversampling(value: float64)
    }
    class TcpServer extends RefCounted {
        constructor(identifier?: any)
        listen(port: int64, bindAddress: string = '*'): GError
        isConnectionAvailable(): boolean
        isListening(): boolean
        getLocalPort(): int64
        takeConnection(): any /*StreamPeerTCP*/
        stop(): void
    }
    class TlsOptions extends RefCounted {
        constructor(identifier?: any)
        static client(trustedChain: X509Certificate = undefined, commonNameOverride: string = ''): any /*TLSOptions*/
        static clientUnsafe(trustedChain: X509Certificate = undefined): any /*TLSOptions*/
        static server(key: CryptoKey, certificate: X509Certificate): any /*TLSOptions*/
        isServer(): boolean
        isUnsafeClient(): boolean
        getCommonNameOverride(): string
        getTrustedCaChain(): X509Certificate
        getPrivateKey(): CryptoKey
        getOwnCertificate(): X509Certificate
    }
    namespace TabBar {
        enum AlignmentMode {
            AlignmentLeft = 0,
            AlignmentCenter = 1,
            AlignmentRight = 2,
            AlignmentMax = 3,
        }
        enum CloseButtonDisplayPolicy {
            CloseButtonShowNever = 0,
            CloseButtonShowActiveOnly = 1,
            CloseButtonShowAlways = 2,
            CloseButtonMax = 3,
        }
    }
    /** A control that provides a horizontal bar with tabs.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_tabbar.html  
     */
    class TabBar<Map extends Record<string, Node> = {}> extends Control<Map> {
        /** Places tabs to the left. */
        static readonly ALIGNMENT_LEFT = 0
        
        /** Places tabs in the middle. */
        static readonly ALIGNMENT_CENTER = 1
        
        /** Places tabs to the right. */
        static readonly ALIGNMENT_RIGHT = 2
        
        /** Represents the size of the [enum AlignmentMode] enum. */
        static readonly ALIGNMENT_MAX = 3
        
        /** Never show the close buttons. */
        static readonly CLOSE_BUTTON_SHOW_NEVER = 0
        
        /** Only show the close button on the currently active tab. */
        static readonly CLOSE_BUTTON_SHOW_ACTIVE_ONLY = 1
        
        /** Show the close button on all tabs. */
        static readonly CLOSE_BUTTON_SHOW_ALWAYS = 2
        
        /** Represents the size of the [enum CloseButtonDisplayPolicy] enum. */
        static readonly CLOSE_BUTTON_MAX = 3
        constructor(identifier?: any)
        getPreviousTab(): int64
        selectPreviousAvailable(): boolean
        selectNextAvailable(): boolean
        setTabTitle(tabIdx: int64, title: string): void
        getTabTitle(tabIdx: int64): string
        setTabTooltip(tabIdx: int64, tooltip: string): void
        getTabTooltip(tabIdx: int64): string
        setTabTextDirection(tabIdx: int64, direction: Control.TextDirection): void
        getTabTextDirection(tabIdx: int64): Control.TextDirection
        setTabLanguage(tabIdx: int64, language: string): void
        getTabLanguage(tabIdx: int64): string
        setTabIcon(tabIdx: int64, icon: Texture2D): void
        getTabIcon(tabIdx: int64): Texture2D
        setTabIconMaxWidth(tabIdx: int64, width: int64): void
        getTabIconMaxWidth(tabIdx: int64): int64
        setTabButtonIcon(tabIdx: int64, icon: Texture2D): void
        getTabButtonIcon(tabIdx: int64): Texture2D
        setTabDisabled(tabIdx: int64, disabled: boolean): void
        isTabDisabled(tabIdx: int64): boolean
        setTabHidden(tabIdx: int64, hidden: boolean): void
        isTabHidden(tabIdx: int64): boolean
        setTabMetadata(tabIdx: int64, metadata: any): void
        getTabMetadata(tabIdx: int64): any
        removeTab(tabIdx: int64): void
        addTab(title: string = '', icon: Texture2D = undefined): void
        getTabIdxAtPoint(point: Vector2): int64
        getTabOffset(): int64
        getOffsetButtonsVisible(): boolean
        ensureTabVisible(idx: int64): void
        getTabRect(tabIdx: int64): Rect2
        moveTab(from: int64, to: int64): void
        clearTabs(): void
        get currentTab(): int64
        set currentTab(value: int64)
        get tabAlignment(): int64
        set tabAlignment(value: int64)
        get clipTabs(): boolean
        set clipTabs(value: boolean)
        get tabCloseDisplayPolicy(): int64
        set tabCloseDisplayPolicy(value: int64)
        get maxTabWidth(): int64
        set maxTabWidth(value: int64)
        get scrollingEnabled(): boolean
        set scrollingEnabled(value: boolean)
        get dragToRearrangeEnabled(): boolean
        set dragToRearrangeEnabled(value: boolean)
        get tabsRearrangeGroup(): int64
        set tabsRearrangeGroup(value: int64)
        get scrollToSelected(): boolean
        set scrollToSelected(value: boolean)
        get selectWithRmb(): boolean
        set selectWithRmb(value: boolean)
        get deselectEnabled(): boolean
        set deselectEnabled(value: boolean)
        get tabCount(): any /*Tabs,tab_*/
        set tabCount(value: any /*Tabs,tab_*/)
        readonly tabSelected: Signal<(tab: int64) => void>
        readonly tabChanged: Signal<(tab: int64) => void>
        readonly tabClicked: Signal<(tab: int64) => void>
        readonly tabRmbClicked: Signal<(tab: int64) => void>
        readonly tabClosePressed: Signal<(tab: int64) => void>
        readonly tabButtonPressed: Signal<(tab: int64) => void>
        readonly tabHovered: Signal<(tab: int64) => void>
        readonly activeTabRearranged: Signal<(idxTo: int64) => void>
    }
    namespace TabContainer {
        enum TabPosition {
            PositionTop = 0,
            PositionBottom = 1,
            PositionMax = 2,
        }
    }
    /** A container that creates a tab for each child control, displaying only the active tab's control.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_tabcontainer.html  
     */
    class TabContainer<Map extends Record<string, Node> = {}> extends Container<Map> {
        /** Places the tab bar at the top. */
        static readonly POSITION_TOP = 0
        
        /** Places the tab bar at the bottom. The tab bar's [StyleBox] will be flipped vertically. */
        static readonly POSITION_BOTTOM = 1
        
        /** Represents the size of the [enum TabPosition] enum. */
        static readonly POSITION_MAX = 2
        constructor(identifier?: any)
        getTabCount(): int64
        getPreviousTab(): int64
        selectPreviousAvailable(): boolean
        selectNextAvailable(): boolean
        getCurrentTabControl(): Control
        getTabBar(): TabBar
        getTabControl(tabIdx: int64): Control
        setTabTitle(tabIdx: int64, title: string): void
        getTabTitle(tabIdx: int64): string
        setTabTooltip(tabIdx: int64, tooltip: string): void
        getTabTooltip(tabIdx: int64): string
        setTabIcon(tabIdx: int64, icon: Texture2D): void
        getTabIcon(tabIdx: int64): Texture2D
        setTabIconMaxWidth(tabIdx: int64, width: int64): void
        getTabIconMaxWidth(tabIdx: int64): int64
        setTabDisabled(tabIdx: int64, disabled: boolean): void
        isTabDisabled(tabIdx: int64): boolean
        setTabHidden(tabIdx: int64, hidden: boolean): void
        isTabHidden(tabIdx: int64): boolean
        setTabMetadata(tabIdx: int64, metadata: any): void
        getTabMetadata(tabIdx: int64): any
        setTabButtonIcon(tabIdx: int64, icon: Texture2D): void
        getTabButtonIcon(tabIdx: int64): Texture2D
        getTabIdxAtPoint(point: Vector2): int64
        getTabIdxFromControl(control: Control): int64
        setPopup(popup: Node): void
        getPopup(): Popup
        get tabAlignment(): int64
        set tabAlignment(value: int64)
        get currentTab(): int64
        set currentTab(value: int64)
        get tabsPosition(): int64
        set tabsPosition(value: int64)
        get clipTabs(): boolean
        set clipTabs(value: boolean)
        get tabsVisible(): boolean
        set tabsVisible(value: boolean)
        get allTabsInFront(): boolean
        set allTabsInFront(value: boolean)
        get dragToRearrangeEnabled(): boolean
        set dragToRearrangeEnabled(value: boolean)
        get tabsRearrangeGroup(): int64
        set tabsRearrangeGroup(value: int64)
        get useHiddenTabsForMinSize(): boolean
        set useHiddenTabsForMinSize(value: boolean)
        get tabFocusMode(): int64
        set tabFocusMode(value: int64)
        get deselectEnabled(): boolean
        set deselectEnabled(value: boolean)
        readonly activeTabRearranged: Signal<(idxTo: int64) => void>
        readonly tabChanged: Signal<(tab: int64) => void>
        readonly tabClicked: Signal<(tab: int64) => void>
        readonly tabHovered: Signal<(tab: int64) => void>
        readonly tabSelected: Signal<(tab: int64) => void>
        readonly tabButtonPressed: Signal<(tab: int64) => void>
        readonly prePopupPressed: Signal<() => void>
    }
    namespace TextEdit {
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
        enum EditAction {
            ActionNone = 0,
            ActionTyping = 1,
            ActionBackspace = 2,
            ActionDelete = 3,
        }
        enum SearchFlags {
            SearchMatchCase = 1,
            SearchWholeWords = 2,
            SearchBackwards = 4,
        }
        enum CaretType {
            CaretTypeLine = 0,
            CaretTypeBlock = 1,
        }
        enum SelectionMode {
            SelectionModeNone = 0,
            SelectionModeShift = 1,
            SelectionModePointer = 2,
            SelectionModeWord = 3,
            SelectionModeLine = 4,
        }
        enum LineWrappingMode {
            LineWrappingNone = 0,
            LineWrappingBoundary = 1,
        }
        enum GutterType {
            GutterTypeString = 0,
            GutterTypeIcon = 1,
            GutterTypeCustom = 2,
        }
    }
    /** A multiline text editor.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_textedit.html  
     */
    class TextEdit<Map extends Record<string, Node> = {}> extends Control<Map> {
        /** Cuts (copies and clears) the selected text. */
        static readonly MENU_CUT = 0
        
        /** Copies the selected text. */
        static readonly MENU_COPY = 1
        
        /** Pastes the clipboard text over the selected text (or at the cursor's position). */
        static readonly MENU_PASTE = 2
        
        /** Erases the whole [TextEdit] text. */
        static readonly MENU_CLEAR = 3
        
        /** Selects the whole [TextEdit] text. */
        static readonly MENU_SELECT_ALL = 4
        
        /** Undoes the previous action. */
        static readonly MENU_UNDO = 5
        
        /** Redoes the previous action. */
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
        
        /** No current action. */
        static readonly ACTION_NONE = 0
        
        /** A typing action. */
        static readonly ACTION_TYPING = 1
        
        /** A backwards delete action. */
        static readonly ACTION_BACKSPACE = 2
        
        /** A forward delete action. */
        static readonly ACTION_DELETE = 3
        
        /** Match case when searching. */
        static readonly SEARCH_MATCH_CASE = 1
        
        /** Match whole words when searching. */
        static readonly SEARCH_WHOLE_WORDS = 2
        
        /** Search from end to beginning. */
        static readonly SEARCH_BACKWARDS = 4
        
        /** Vertical line caret. */
        static readonly CARET_TYPE_LINE = 0
        
        /** Block caret. */
        static readonly CARET_TYPE_BLOCK = 1
        
        /** Not selecting. */
        static readonly SELECTION_MODE_NONE = 0
        
        /** Select as if `shift` is pressed. */
        static readonly SELECTION_MODE_SHIFT = 1
        
        /** Select single characters as if the user single clicked. */
        static readonly SELECTION_MODE_POINTER = 2
        
        /** Select whole words as if the user double clicked. */
        static readonly SELECTION_MODE_WORD = 3
        
        /** Select whole lines as if the user triple clicked. */
        static readonly SELECTION_MODE_LINE = 4
        
        /** Line wrapping is disabled. */
        static readonly LINE_WRAPPING_NONE = 0
        
        /** Line wrapping occurs at the control boundary, beyond what would normally be visible. */
        static readonly LINE_WRAPPING_BOUNDARY = 1
        
        /** When a gutter is set to string using [method set_gutter_type], it is used to contain text set via the [method set_line_gutter_text] method. */
        static readonly GUTTER_TYPE_STRING = 0
        
        /** When a gutter is set to icon using [method set_gutter_type], it is used to contain an icon set via the [method set_line_gutter_icon] method. */
        static readonly GUTTER_TYPE_ICON = 1
        
        /** When a gutter is set to custom using [method set_gutter_type], it is used to contain custom visuals controlled by a callback method set via the [method set_gutter_custom_draw] method. */
        static readonly GUTTER_TYPE_CUSTOM = 2
        constructor(identifier?: any)
        /* gdvirtual */ _handleUnicodeInput(unicodeChar: int64, caretIndex: int64): void
        
        /** Override this method to define what happens when the user presses the backspace key. */
        /* gdvirtual */ _backspace(caretIndex: int64): void
        
        /** Override this method to define what happens when the user performs a cut operation. */
        /* gdvirtual */ _cut(caretIndex: int64): void
        
        /** Override this method to define what happens when the user performs a copy operation. */
        /* gdvirtual */ _copy(caretIndex: int64): void
        
        /** Override this method to define what happens when the user performs a paste operation. */
        /* gdvirtual */ _paste(caretIndex: int64): void
        /* gdvirtual */ _pastePrimaryClipboard(caretIndex: int64): void
        hasImeText(): boolean
        cancelIme(): void
        applyIme(): void
        setTabSize(size: int64): void
        getTabSize(): int64
        setOvertypeModeEnabled(enabled: boolean): void
        isOvertypeModeEnabled(): boolean
        
        /** Performs a full reset of [TextEdit], including undo history. */
        clear(): void
        getLineCount(): int64
        setLine(line: int64, newText: string): void
        getLine(line: int64): string
        getLineWithIme(line: int64): string
        getLineWidth(line: int64, wrapIndex: int64 = -1): int64
        getLineHeight(): int64
        getIndentLevel(line: int64): int64
        getFirstNonWhiteSpaceColumn(line: int64): int64
        swapLines(fromLine: int64, toLine: int64): void
        insertLineAt(line: int64, text: string): void
        removeLineAt(line: int64, moveCaretsDown: boolean = true): void
        insertTextAtCaret(text: string, caretIndex: int64 = -1): void
        insertText(text: string, line: int64, column: int64, beforeSelectionBegin: boolean = true, beforeSelectionEnd: boolean = false): void
        removeText(fromLine: int64, fromColumn: int64, toLine: int64, toColumn: int64): void
        getLastUnhiddenLine(): int64
        getNextVisibleLineOffsetFrom(line: int64, visibleAmount: int64): int64
        getNextVisibleLineIndexOffsetFrom(line: int64, wrapIndex: int64, visibleAmount: int64): Vector2I
        
        /** Called when the user presses the backspace key. Can be overridden with [method _backspace]. */
        backspace(caretIndex: int64 = -1): void
        
        /** Cut's the current selection. Can be overridden with [method _cut]. */
        cut(caretIndex: int64 = -1): void
        
        /** Copies the current text selection. Can be overridden with [method _copy]. */
        copy(caretIndex: int64 = -1): void
        
        /** Paste at the current location. Can be overridden with [method _paste]. */
        paste(caretIndex: int64 = -1): void
        pastePrimaryClipboard(caretIndex: int64 = -1): void
        startAction(action: TextEdit.EditAction): void
        endAction(): void
        beginComplexOperation(): void
        endComplexOperation(): void
        hasUndo(): boolean
        hasRedo(): boolean
        
        /** Perform undo operation. */
        undo(): void
        
        /** Perform redo operation. */
        redo(): void
        clearUndoHistory(): void
        tagSavedVersion(): void
        getVersion(): int64
        getSavedVersion(): int64
        setSearchText(searchText: string): void
        setSearchFlags(flags: int64): void
        
        /** Perform a search inside the text. Search flags can be specified in the [enum SearchFlags] enum.  
         *  In the returned vector, `x` is the column, `y` is the line. If no results are found, both are equal to `-1`.  
         *    
         */
        search(text: string, flags: int64, fromLine: int64, fromColumn: int64): Vector2I
        setTooltipRequestFunc(callback: Callable): void
        getLocalMousePos(): Vector2
        getWordAtPos(position: Vector2): string
        getLineColumnAtPos(position: Vector2I, clampLine: boolean = true, clampColumn: boolean = true): Vector2I
        getPosAtLineColumn(line: int64, column: int64): Vector2I
        getRectAtLineColumn(line: int64, column: int64): Rect2I
        getMinimapLineAtPos(position: Vector2I): int64
        isDraggingCursor(): boolean
        isMouseOverSelection(edges: boolean, caretIndex: int64 = -1): boolean
        addCaret(line: int64, column: int64): int64
        removeCaret(caret: int64): void
        removeSecondaryCarets(): void
        getCaretCount(): int64
        addCaretAtCarets(below: boolean): void
        getSortedCarets(includeIgnoredCarets: boolean = false): PackedInt32Array
        collapseCarets(fromLine: int64, fromColumn: int64, toLine: int64, toColumn: int64, inclusive: boolean = false): void
        mergeOverlappingCarets(): void
        beginMulticaretEdit(): void
        endMulticaretEdit(): void
        isInMulitcaretEdit(): boolean
        multicaretEditIgnoreCaret(caretIndex: int64): boolean
        isCaretVisible(caretIndex: int64 = 0): boolean
        getCaretDrawPos(caretIndex: int64 = 0): Vector2
        setCaretLine(line: int64, adjustViewport: boolean = true, canBeHidden: boolean = true, wrapIndex: int64 = 0, caretIndex: int64 = 0): void
        getCaretLine(caretIndex: int64 = 0): int64
        setCaretColumn(column: int64, adjustViewport: boolean = true, caretIndex: int64 = 0): void
        getCaretColumn(caretIndex: int64 = 0): int64
        getCaretWrapIndex(caretIndex: int64 = 0): int64
        getWordUnderCaret(caretIndex: int64 = -1): string
        setSelectionMode(mode: TextEdit.SelectionMode): void
        getSelectionMode(): TextEdit.SelectionMode
        selectAll(): void
        selectWordUnderCaret(caretIndex: int64 = -1): void
        addSelectionForNextOccurrence(): void
        skipSelectionForNextOccurrence(): void
        
        /** Selects text from [param origin_line] and [param origin_column] to [param caret_line] and [param caret_column] for the given [param caret_index]. This moves the selection origin and the caret. If the positions are the same, the selection will be deselected.  
         *  If [member selecting_enabled] is `false`, no selection will occur.  
         *      
         *  **Note:** If supporting multiple carets this will not check for any overlap. See [method merge_overlapping_carets].  
         */
        select(originLine: int64, originColumn: int64, caretLine: int64, caretColumn: int64, caretIndex: int64 = 0): void
        hasSelection(caretIndex: int64 = -1): boolean
        getSelectedText(caretIndex: int64 = -1): string
        getSelectionAtLineColumn(line: int64, column: int64, includeEdges: boolean = true, onlySelections: boolean = true): int64
        getLineRangesFromCarets(onlySelections: boolean = false, mergeAdjacent: boolean = true): GArray
        getSelectionOriginLine(caretIndex: int64 = 0): int64
        getSelectionOriginColumn(caretIndex: int64 = 0): int64
        setSelectionOriginLine(line: int64, canBeHidden: boolean = true, wrapIndex: int64 = -1, caretIndex: int64 = 0): void
        setSelectionOriginColumn(column: int64, caretIndex: int64 = 0): void
        getSelectionFromLine(caretIndex: int64 = 0): int64
        getSelectionFromColumn(caretIndex: int64 = 0): int64
        getSelectionToLine(caretIndex: int64 = 0): int64
        getSelectionToColumn(caretIndex: int64 = 0): int64
        isCaretAfterSelectionOrigin(caretIndex: int64 = 0): boolean
        
        /** Deselects the current selection. */
        deselect(caretIndex: int64 = -1): void
        deleteSelection(caretIndex: int64 = -1): void
        isLineWrapped(line: int64): boolean
        getLineWrapCount(line: int64): int64
        getLineWrapIndexAtColumn(line: int64, column: int64): int64
        getLineWrappedText(line: int64): PackedStringArray
        getVScrollBar(): VScrollBar
        getHScrollBar(): HScrollBar
        getScrollPosForLine(line: int64, wrapIndex: int64 = 0): float64
        setLineAsFirstVisible(line: int64, wrapIndex: int64 = 0): void
        getFirstVisibleLine(): int64
        setLineAsCenterVisible(line: int64, wrapIndex: int64 = 0): void
        setLineAsLastVisible(line: int64, wrapIndex: int64 = 0): void
        getLastFullVisibleLine(): int64
        getLastFullVisibleLineWrapIndex(): int64
        getVisibleLineCount(): int64
        getVisibleLineCountInRange(fromLine: int64, toLine: int64): int64
        getTotalVisibleLineCount(): int64
        adjustViewportToCaret(caretIndex: int64 = 0): void
        centerViewportToCaret(caretIndex: int64 = 0): void
        getMinimapVisibleLines(): int64
        addGutter(at: int64 = -1): void
        removeGutter(gutter: int64): void
        getGutterCount(): int64
        setGutterName(gutter: int64, name: string): void
        getGutterName(gutter: int64): string
        setGutterType(gutter: int64, type: TextEdit.GutterType): void
        getGutterType(gutter: int64): TextEdit.GutterType
        setGutterWidth(gutter: int64, width: int64): void
        getGutterWidth(gutter: int64): int64
        setGutterDraw(gutter: int64, draw: boolean): void
        isGutterDrawn(gutter: int64): boolean
        setGutterClickable(gutter: int64, clickable: boolean): void
        isGutterClickable(gutter: int64): boolean
        setGutterOverwritable(gutter: int64, overwritable: boolean): void
        isGutterOverwritable(gutter: int64): boolean
        mergeGutters(fromLine: int64, toLine: int64): void
        setGutterCustomDraw(column: int64, drawCallback: Callable): void
        getTotalGutterWidth(): int64
        setLineGutterMetadata(line: int64, gutter: int64, metadata: any): void
        getLineGutterMetadata(line: int64, gutter: int64): any
        setLineGutterText(line: int64, gutter: int64, text: string): void
        getLineGutterText(line: int64, gutter: int64): string
        setLineGutterIcon(line: int64, gutter: int64, icon: Texture2D): void
        getLineGutterIcon(line: int64, gutter: int64): Texture2D
        setLineGutterItemColor(line: int64, gutter: int64, color: Color): void
        getLineGutterItemColor(line: int64, gutter: int64): Color
        setLineGutterClickable(line: int64, gutter: int64, clickable: boolean): void
        isLineGutterClickable(line: int64, gutter: int64): boolean
        setLineBackgroundColor(line: int64, color: Color): void
        getLineBackgroundColor(line: int64): Color
        getMenu(): PopupMenu
        isMenuVisible(): boolean
        menuOption(option: int64): void
        adjustCaretsAfterEdit(caret: int64, fromLine: int64, fromCol: int64, toLine: int64, toCol: int64): void
        getCaretIndexEditOrder(): PackedInt32Array
        getSelectionLine(caretIndex: int64 = 0): int64
        getSelectionColumn(caretIndex: int64 = 0): int64
        
        /** String value of the [TextEdit]. */
        get text(): string
        set text(value: string)
        get placeholderText(): string
        set placeholderText(value: string)
        
        /** If `false`, existing text cannot be modified and new text cannot be added. */
        get editable(): boolean
        set editable(value: boolean)
        get contextMenuEnabled(): boolean
        set contextMenuEnabled(value: boolean)
        get emojiMenuEnabled(): boolean
        set emojiMenuEnabled(value: boolean)
        get shortcutKeysEnabled(): boolean
        set shortcutKeysEnabled(value: boolean)
        get selectingEnabled(): boolean
        set selectingEnabled(value: boolean)
        get deselectOnFocusLossEnabled(): boolean
        set deselectOnFocusLossEnabled(value: boolean)
        get dragAndDropSelectionEnabled(): boolean
        set dragAndDropSelectionEnabled(value: boolean)
        get virtualKeyboardEnabled(): boolean
        set virtualKeyboardEnabled(value: boolean)
        get middleMousePasteEnabled(): boolean
        set middleMousePasteEnabled(value: boolean)
        get emptySelectionClipboardEnabled(): boolean
        set emptySelectionClipboardEnabled(value: boolean)
        get wrapMode(): int64
        set wrapMode(value: int64)
        get autowrapMode(): int64
        set autowrapMode(value: int64)
        get indentWrappedLines(): boolean
        set indentWrappedLines(value: boolean)
        get scrollSmooth(): boolean
        set scrollSmooth(value: boolean)
        get scrollVScrollSpeed(): float64
        set scrollVScrollSpeed(value: float64)
        get scrollPastEndOfFile(): boolean
        set scrollPastEndOfFile(value: boolean)
        get scrollVertical(): float64
        set scrollVertical(value: float64)
        get scrollHorizontal(): int64
        set scrollHorizontal(value: int64)
        get scrollFitContentHeight(): boolean
        set scrollFitContentHeight(value: boolean)
        get scrollFitContentWidth(): boolean
        set scrollFitContentWidth(value: boolean)
        get minimapDraw(): boolean
        set minimapDraw(value: boolean)
        get minimapWidth(): int64
        set minimapWidth(value: int64)
        get caretType(): int64
        set caretType(value: int64)
        get caretBlink(): boolean
        set caretBlink(value: boolean)
        get caretBlinkInterval(): float64
        set caretBlinkInterval(value: float64)
        get caretDrawWhenEditableDisabled(): boolean
        set caretDrawWhenEditableDisabled(value: boolean)
        get caretMoveOnRightClick(): boolean
        set caretMoveOnRightClick(value: boolean)
        get caretMidGrapheme(): boolean
        set caretMidGrapheme(value: boolean)
        get caretMultiple(): boolean
        set caretMultiple(value: boolean)
        get useDefaultWordSeparators(): boolean
        set useDefaultWordSeparators(value: boolean)
        get useCustomWordSeparators(): boolean
        set useCustomWordSeparators(value: boolean)
        get customWordSeparators(): string
        set customWordSeparators(value: string)
        get syntaxHighlighter(): SyntaxHighlighter
        set syntaxHighlighter(value: SyntaxHighlighter)
        get highlightAllOccurrences(): boolean
        set highlightAllOccurrences(value: boolean)
        get highlightCurrentLine(): boolean
        set highlightCurrentLine(value: boolean)
        get drawControlChars(): boolean
        set drawControlChars(value: boolean)
        get drawTabs(): boolean
        set drawTabs(value: boolean)
        get drawSpaces(): boolean
        set drawSpaces(value: boolean)
        get textDirection(): int64
        set textDirection(value: int64)
        
        /** Language code used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        get language(): string
        set language(value: string)
        get structuredTextBidiOverride(): int64
        set structuredTextBidiOverride(value: int64)
        get structuredTextBidiOverrideOptions(): GArray
        set structuredTextBidiOverrideOptions(value: GArray)
        readonly textSet: Signal<() => void>
        readonly textChanged: Signal<() => void>
        readonly linesEditedFrom: Signal<(fromLine: int64, toLine: int64) => void>
        readonly caretChanged: Signal<() => void>
        readonly gutterClicked: Signal<(line: int64, gutter: int64) => void>
        readonly gutterAdded: Signal<() => void>
        readonly gutterRemoved: Signal<() => void>
    }
    /** Holds a line of text.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_textline.html  
     */
    class TextLine extends RefCounted {
        constructor(identifier?: any)
        /** Clears text line (removes text and inline objects). */
        clear(): void
        setBidiOverride(override: GArray): void
        addString(text: string, font: Font, fontSize: int64, language: string = '', meta: any = <any> {}): boolean
        addObject(key: any, size: Vector2, inlineAlign: InlineAlignment = 5, length: int64 = 1, baseline: float64 = 0): boolean
        resizeObject(key: any, size: Vector2, inlineAlign: InlineAlignment = 5, baseline: float64 = 0): boolean
        tabAlign(tabStops: PackedFloat32Array | float32[]): void
        getObjects(): GArray
        getObjectRect(key: any): Rect2
        getSize(): Vector2
        getRid(): Rid
        getLineAscent(): float64
        getLineDescent(): float64
        getLineWidth(): float64
        getLineUnderlinePosition(): float64
        getLineUnderlineThickness(): float64
        
        /** Draw text into a canvas item at a given position, with [param color]. [param pos] specifies the top left corner of the bounding box. */
        draw(canvas: Rid, pos: Vector2, color: Color = new Color(1, 1, 1, 1)): void
        drawOutline(canvas: Rid, pos: Vector2, outlineSize: int64 = 1, color: Color = new Color(1, 1, 1, 1)): void
        hitTest(coords: float64): int64
        
        /** Text writing direction. */
        get direction(): int64
        set direction(value: int64)
        
        /** Text orientation. */
        get orientation(): int64
        set orientation(value: int64)
        get preserveInvalid(): boolean
        set preserveInvalid(value: boolean)
        get preserveControl(): boolean
        set preserveControl(value: boolean)
        
        /** Text line width. */
        get width(): float64
        set width(value: float64)
        
        /** Sets text alignment within the line as if the line was horizontal. */
        get alignment(): int64
        set alignment(value: int64)
        
        /** Line alignment rules. For more info see [TextServer]. */
        get flags(): int64
        set flags(value: int64)
        get textOverrunBehavior(): int64
        set textOverrunBehavior(value: int64)
        get ellipsisChar(): string
        set ellipsisChar(value: string)
    }
    /** Generate an [PrimitiveMesh] from the text.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_textmesh.html  
     */
    class TextMesh extends PrimitiveMesh {
        constructor(identifier?: any)
        /** The text to generate mesh from.  
         *      
         *  **Note:** Due to being a [Resource], it doesn't follow the rules of [member Node.auto_translate_mode]. If disabling translation is desired, it should be done manually with [method Object.set_message_translation].  
         */
        get text(): string
        set text(value: string)
        
        /** Font configuration used to display text. */
        get font(): Font
        set font(value: Font)
        get fontSize(): int64
        set fontSize(value: int64)
        get horizontalAlignment(): int64
        set horizontalAlignment(value: int64)
        get verticalAlignment(): int64
        set verticalAlignment(value: int64)
        
        /** If `true`, all the text displays as UPPERCASE. */
        get uppercase(): boolean
        set uppercase(value: boolean)
        get lineSpacing(): float64
        set lineSpacing(value: float64)
        get autowrapMode(): int64
        set autowrapMode(value: int64)
        get justificationFlags(): int64
        set justificationFlags(value: int64)
        get pixelSize(): float64
        set pixelSize(value: float64)
        get curveStep(): float64
        set curveStep(value: float64)
        
        /** Depths of the mesh, if set to `0.0` only front surface, is generated, and UV layout is changed to use full texture for the front face only. */
        get depth(): float64
        set depth(value: float64)
        
        /** Text width (in pixels), used for fill alignment. */
        get width(): float64
        set width(value: float64)
        
        /** The text drawing offset (in pixels). */
        get offset(): Vector2
        set offset(value: Vector2)
        get textDirection(): int64
        set textDirection(value: int64)
        
        /** Language code used for text shaping algorithms, if left empty current locale is used instead. */
        get language(): string
        set language(value: string)
        get structuredTextBidiOverride(): int64
        set structuredTextBidiOverride(value: int64)
        get structuredTextBidiOverrideOptions(): GArray
        set structuredTextBidiOverrideOptions(value: GArray)
    }
    /** Holds a paragraph of text.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_textparagraph.html  
     */
    class TextParagraph extends RefCounted {
        constructor(identifier?: any)
        /** Clears text paragraph (removes text and inline objects). */
        clear(): void
        setBidiOverride(override: GArray): void
        setDropcap(text: string, font: Font, fontSize: int64, dropcapMargins: Rect2 = new Rect2(0, 0, 0, 0), language: string = ''): boolean
        clearDropcap(): void
        addString(text: string, font: Font, fontSize: int64, language: string = '', meta: any = <any> {}): boolean
        addObject(key: any, size: Vector2, inlineAlign: InlineAlignment = 5, length: int64 = 1, baseline: float64 = 0): boolean
        resizeObject(key: any, size: Vector2, inlineAlign: InlineAlignment = 5, baseline: float64 = 0): boolean
        tabAlign(tabStops: PackedFloat32Array | float32[]): void
        getNonWrappedSize(): Vector2
        getSize(): Vector2
        getRid(): Rid
        getLineRid(line: int64): Rid
        getDropcapRid(): Rid
        getLineCount(): int64
        getLineObjects(line: int64): GArray
        getLineObjectRect(line: int64, key: any): Rect2
        getLineSize(line: int64): Vector2
        getLineRange(line: int64): Vector2I
        getLineAscent(line: int64): float64
        getLineDescent(line: int64): float64
        getLineWidth(line: int64): float64
        getLineUnderlinePosition(line: int64): float64
        getLineUnderlineThickness(line: int64): float64
        getDropcapSize(): Vector2
        getDropcapLines(): int64
        
        /** Draw all lines of the text and drop cap into a canvas item at a given position, with [param color]. [param pos] specifies the top left corner of the bounding box. */
        draw(canvas: Rid, pos: Vector2, color: Color = new Color(1, 1, 1, 1), dcColor: Color = new Color(1, 1, 1, 1)): void
        drawOutline(canvas: Rid, pos: Vector2, outlineSize: int64 = 1, color: Color = new Color(1, 1, 1, 1), dcColor: Color = new Color(1, 1, 1, 1)): void
        drawLine(canvas: Rid, pos: Vector2, line: int64, color: Color = new Color(1, 1, 1, 1)): void
        drawLineOutline(canvas: Rid, pos: Vector2, line: int64, outlineSize: int64 = 1, color: Color = new Color(1, 1, 1, 1)): void
        drawDropcap(canvas: Rid, pos: Vector2, color: Color = new Color(1, 1, 1, 1)): void
        drawDropcapOutline(canvas: Rid, pos: Vector2, outlineSize: int64 = 1, color: Color = new Color(1, 1, 1, 1)): void
        hitTest(coords: Vector2): int64
        
        /** Text writing direction. */
        get direction(): int64
        set direction(value: int64)
        get customPunctuation(): string
        set customPunctuation(value: string)
        
        /** Text orientation. */
        get orientation(): int64
        set orientation(value: int64)
        get preserveInvalid(): boolean
        set preserveInvalid(value: boolean)
        get preserveControl(): boolean
        set preserveControl(value: boolean)
        
        /** Paragraph horizontal alignment. */
        get alignment(): int64
        set alignment(value: int64)
        get breakFlags(): int64
        set breakFlags(value: int64)
        get justificationFlags(): int64
        set justificationFlags(value: int64)
        get textOverrunBehavior(): int64
        set textOverrunBehavior(value: int64)
        get ellipsisChar(): string
        set ellipsisChar(value: string)
        
        /** Paragraph width. */
        get width(): float64
        set width(value: float64)
        get maxLinesVisible(): int64
        set maxLinesVisible(value: int64)
        get lineSpacing(): float64
        set lineSpacing(value: float64)
    }
    namespace TextServer {
        enum FontAntialiasing {
            FontAntialiasingNone = 0,
            FontAntialiasingGray = 1,
            FontAntialiasingLcd = 2,
        }
        enum FontLcdSubpixelLayout {
            FontLcdSubpixelLayoutNone = 0,
            FontLcdSubpixelLayoutHrgb = 1,
            FontLcdSubpixelLayoutHbgr = 2,
            FontLcdSubpixelLayoutVrgb = 3,
            FontLcdSubpixelLayoutVbgr = 4,
            FontLcdSubpixelLayoutMax = 5,
        }
        enum Direction {
            DirectionAuto = 0,
            DirectionLtr = 1,
            DirectionRtl = 2,
            DirectionInherited = 3,
        }
        enum Orientation {
            OrientationHorizontal = 0,
            OrientationVertical = 1,
        }
        enum JustificationFlag {
            JustificationNone = 0,
            JustificationKashida = 1,
            JustificationWordBound = 2,
            JustificationTrimEdgeSpaces = 4,
            JustificationAfterLastTab = 8,
            JustificationConstrainEllipsis = 16,
            JustificationSkipLastLine = 32,
            JustificationSkipLastLineWithVisibleChars = 64,
            JustificationDoNotSkipSingleLine = 128,
        }
        enum AutowrapMode {
            AutowrapOff = 0,
            AutowrapArbitrary = 1,
            AutowrapWord = 2,
            AutowrapWordSmart = 3,
        }
        enum LineBreakFlag {
            BreakNone = 0,
            BreakMandatory = 1,
            BreakWordBound = 2,
            BreakGraphemeBound = 4,
            BreakAdaptive = 8,
            BreakTrimEdgeSpaces = 16,
            BreakTrimIndent = 32,
        }
        enum VisibleCharactersBehavior {
            VcCharsBeforeShaping = 0,
            VcCharsAfterShaping = 1,
            VcGlyphsAuto = 2,
            VcGlyphsLtr = 3,
            VcGlyphsRtl = 4,
        }
        enum OverrunBehavior {
            OverrunNoTrimming = 0,
            OverrunTrimChar = 1,
            OverrunTrimWord = 2,
            OverrunTrimEllipsis = 3,
            OverrunTrimWordEllipsis = 4,
        }
        enum TextOverrunFlag {
            OverrunNoTrim = 0,
            OverrunTrim = 1,
            OverrunTrimWordOnly = 2,
            OverrunAddEllipsis = 4,
            OverrunEnforceEllipsis = 8,
            OverrunJustificationAware = 16,
        }
        enum GraphemeFlag {
            GraphemeIsValid = 1,
            GraphemeIsRtl = 2,
            GraphemeIsVirtual = 4,
            GraphemeIsSpace = 8,
            GraphemeIsBreakHard = 16,
            GraphemeIsBreakSoft = 32,
            GraphemeIsTab = 64,
            GraphemeIsElongation = 128,
            GraphemeIsPunctuation = 256,
            GraphemeIsUnderscore = 512,
            GraphemeIsConnected = 1024,
            GraphemeIsSafeToInsertTatweel = 2048,
            GraphemeIsEmbeddedObject = 4096,
            GraphemeIsSoftHyphen = 8192,
        }
        enum Hinting {
            HintingNone = 0,
            HintingLight = 1,
            HintingNormal = 2,
        }
        enum SubpixelPositioning {
            SubpixelPositioningDisabled = 0,
            SubpixelPositioningAuto = 1,
            SubpixelPositioningOneHalf = 2,
            SubpixelPositioningOneQuarter = 3,
            SubpixelPositioningOneHalfMaxSize = 20,
            SubpixelPositioningOneQuarterMaxSize = 16,
        }
        enum Feature {
            FeatureSimpleLayout = 1,
            FeatureBidiLayout = 2,
            FeatureVerticalLayout = 4,
            FeatureShaping = 8,
            FeatureKashidaJustification = 16,
            FeatureBreakIterators = 32,
            FeatureFontBitmap = 64,
            FeatureFontDynamic = 128,
            FeatureFontMsdf = 256,
            FeatureFontSystem = 512,
            FeatureFontVariable = 1024,
            FeatureContextSensitiveCaseConversion = 2048,
            FeatureUseSupportData = 4096,
            FeatureUnicodeIdentifiers = 8192,
            FeatureUnicodeSecurity = 16384,
        }
        enum ContourPointTag {
            ContourCurveTagOn = 1,
            ContourCurveTagOffConic = 0,
            ContourCurveTagOffCubic = 2,
        }
        enum SpacingType {
            SpacingGlyph = 0,
            SpacingSpace = 1,
            SpacingTop = 2,
            SpacingBottom = 3,
            SpacingMax = 4,
        }
        enum FontStyle {
            FontBold = 1,
            FontItalic = 2,
            FontFixedWidth = 4,
        }
        enum StructuredTextParser {
            StructuredTextDefault = 0,
            StructuredTextUri = 1,
            StructuredTextFile = 2,
            StructuredTextEmail = 3,
            StructuredTextList = 4,
            StructuredTextGdscript = 5,
            StructuredTextCustom = 6,
        }
        enum FixedSizeScaleMode {
            FixedSizeScaleDisable = 0,
            FixedSizeScaleIntegerOnly = 1,
            FixedSizeScaleEnabled = 2,
        }
    }
    /** A server interface for font management and text rendering.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_textserver.html  
     */
    class TextServer extends RefCounted {
        /** Font glyphs are rasterized as 1-bit bitmaps. */
        static readonly FONT_ANTIALIASING_NONE = 0
        
        /** Font glyphs are rasterized as 8-bit grayscale anti-aliased bitmaps. */
        static readonly FONT_ANTIALIASING_GRAY = 1
        
        /** Font glyphs are rasterized for LCD screens.  
         *  LCD subpixel layout is determined by the value of `gui/theme/lcd_subpixel_layout` project settings.  
         *  LCD subpixel anti-aliasing mode is suitable only for rendering horizontal, unscaled text in 2D.  
         */
        static readonly FONT_ANTIALIASING_LCD = 2
        
        /** Unknown or unsupported subpixel layout, LCD subpixel antialiasing is disabled. */
        static readonly FONT_LCD_SUBPIXEL_LAYOUT_NONE = 0
        
        /** Horizontal RGB subpixel layout. */
        static readonly FONT_LCD_SUBPIXEL_LAYOUT_HRGB = 1
        
        /** Horizontal BGR subpixel layout. */
        static readonly FONT_LCD_SUBPIXEL_LAYOUT_HBGR = 2
        
        /** Vertical RGB subpixel layout. */
        static readonly FONT_LCD_SUBPIXEL_LAYOUT_VRGB = 3
        
        /** Vertical BGR subpixel layout. */
        static readonly FONT_LCD_SUBPIXEL_LAYOUT_VBGR = 4
        
        /** Represents the size of the [enum FontLCDSubpixelLayout] enum. */
        static readonly FONT_LCD_SUBPIXEL_LAYOUT_MAX = 5
        
        /** Text direction is determined based on contents and current locale. */
        static readonly DIRECTION_AUTO = 0
        
        /** Text is written from left to right. */
        static readonly DIRECTION_LTR = 1
        
        /** Text is written from right to left. */
        static readonly DIRECTION_RTL = 2
        
        /** Text writing direction is the same as base string writing direction. Used for BiDi override only. */
        static readonly DIRECTION_INHERITED = 3
        
        /** Text is written horizontally. */
        static readonly ORIENTATION_HORIZONTAL = 0
        
        /** Left to right text is written vertically from top to bottom.  
         *  Right to left text is written vertically from bottom to top.  
         */
        static readonly ORIENTATION_VERTICAL = 1
        
        /** Do not justify text. */
        static readonly JUSTIFICATION_NONE = 0
        
        /** Justify text by adding and removing kashidas. */
        static readonly JUSTIFICATION_KASHIDA = 1
        
        /** Justify text by changing width of the spaces between the words. */
        static readonly JUSTIFICATION_WORD_BOUND = 2
        
        /** Remove trailing and leading spaces from the justified text. */
        static readonly JUSTIFICATION_TRIM_EDGE_SPACES = 4
        
        /** Only apply justification to the part of the text after the last tab. */
        static readonly JUSTIFICATION_AFTER_LAST_TAB = 8
        
        /** Apply justification to the trimmed line with ellipsis. */
        static readonly JUSTIFICATION_CONSTRAIN_ELLIPSIS = 16
        
        /** Do not apply justification to the last line of the paragraph. */
        static readonly JUSTIFICATION_SKIP_LAST_LINE = 32
        
        /** Do not apply justification to the last line of the paragraph with visible characters (takes precedence over [constant JUSTIFICATION_SKIP_LAST_LINE]). */
        static readonly JUSTIFICATION_SKIP_LAST_LINE_WITH_VISIBLE_CHARS = 64
        
        /** Always apply justification to the paragraphs with a single line ([constant JUSTIFICATION_SKIP_LAST_LINE] and [constant JUSTIFICATION_SKIP_LAST_LINE_WITH_VISIBLE_CHARS] are ignored). */
        static readonly JUSTIFICATION_DO_NOT_SKIP_SINGLE_LINE = 128
        
        /** Autowrap is disabled. */
        static readonly AUTOWRAP_OFF = 0
        
        /** Wraps the text inside the node's bounding rectangle by allowing to break lines at arbitrary positions, which is useful when very limited space is available. */
        static readonly AUTOWRAP_ARBITRARY = 1
        
        /** Wraps the text inside the node's bounding rectangle by soft-breaking between words. */
        static readonly AUTOWRAP_WORD = 2
        
        /** Behaves similarly to [constant AUTOWRAP_WORD], but force-breaks a word if that single word does not fit in one line. */
        static readonly AUTOWRAP_WORD_SMART = 3
        
        /** Do not break the line. */
        static readonly BREAK_NONE = 0
        
        /** Break the line at the line mandatory break characters (e.g. `"\n"`). */
        static readonly BREAK_MANDATORY = 1
        
        /** Break the line between the words. */
        static readonly BREAK_WORD_BOUND = 2
        
        /** Break the line between any unconnected graphemes. */
        static readonly BREAK_GRAPHEME_BOUND = 4
        
        /** Should be used only in conjunction with [constant BREAK_WORD_BOUND], break the line between any unconnected graphemes, if it's impossible to break it between the words. */
        static readonly BREAK_ADAPTIVE = 8
        
        /** Remove edge spaces from the broken line segments. */
        static readonly BREAK_TRIM_EDGE_SPACES = 16
        
        /** Subtract first line indentation width from all lines after the first one. */
        static readonly BREAK_TRIM_INDENT = 32
        
        /** Trims text before the shaping. e.g, increasing [member Label.visible_characters] or [member RichTextLabel.visible_characters] value is visually identical to typing the text.  
         *      
         *  **Note:** In this mode, trimmed text is not processed at all. It is not accounted for in line breaking and size calculations.  
         */
        static readonly VC_CHARS_BEFORE_SHAPING = 0
        
        /** Displays glyphs that are mapped to the first [member Label.visible_characters] or [member RichTextLabel.visible_characters] characters from the beginning of the text. */
        static readonly VC_CHARS_AFTER_SHAPING = 1
        
        /** Displays [member Label.visible_ratio] or [member RichTextLabel.visible_ratio] glyphs, starting from the left or from the right, depending on [member Control.layout_direction] value. */
        static readonly VC_GLYPHS_AUTO = 2
        
        /** Displays [member Label.visible_ratio] or [member RichTextLabel.visible_ratio] glyphs, starting from the left. */
        static readonly VC_GLYPHS_LTR = 3
        
        /** Displays [member Label.visible_ratio] or [member RichTextLabel.visible_ratio] glyphs, starting from the right. */
        static readonly VC_GLYPHS_RTL = 4
        
        /** No text trimming is performed. */
        static readonly OVERRUN_NO_TRIMMING = 0
        
        /** Trims the text per character. */
        static readonly OVERRUN_TRIM_CHAR = 1
        
        /** Trims the text per word. */
        static readonly OVERRUN_TRIM_WORD = 2
        
        /** Trims the text per character and adds an ellipsis to indicate that parts are hidden. */
        static readonly OVERRUN_TRIM_ELLIPSIS = 3
        
        /** Trims the text per word and adds an ellipsis to indicate that parts are hidden. */
        static readonly OVERRUN_TRIM_WORD_ELLIPSIS = 4
        
        /** No trimming is performed. */
        static readonly OVERRUN_NO_TRIM = 0
        
        /** Trims the text when it exceeds the given width. */
        static readonly OVERRUN_TRIM = 1
        
        /** Trims the text per word instead of per grapheme. */
        static readonly OVERRUN_TRIM_WORD_ONLY = 2
        
        /** Determines whether an ellipsis should be added at the end of the text. */
        static readonly OVERRUN_ADD_ELLIPSIS = 4
        
        /** Determines whether the ellipsis at the end of the text is enforced and may not be hidden. */
        static readonly OVERRUN_ENFORCE_ELLIPSIS = 8
        
        /** Accounts for the text being justified before attempting to trim it (see [enum JustificationFlag]). */
        static readonly OVERRUN_JUSTIFICATION_AWARE = 16
        
        /** Grapheme is supported by the font, and can be drawn. */
        static readonly GRAPHEME_IS_VALID = 1
        
        /** Grapheme is part of right-to-left or bottom-to-top run. */
        static readonly GRAPHEME_IS_RTL = 2
        
        /** Grapheme is not part of source text, it was added by justification process. */
        static readonly GRAPHEME_IS_VIRTUAL = 4
        
        /** Grapheme is whitespace. */
        static readonly GRAPHEME_IS_SPACE = 8
        
        /** Grapheme is mandatory break point (e.g. `"\n"`). */
        static readonly GRAPHEME_IS_BREAK_HARD = 16
        
        /** Grapheme is optional break point (e.g. space). */
        static readonly GRAPHEME_IS_BREAK_SOFT = 32
        
        /** Grapheme is the tabulation character. */
        static readonly GRAPHEME_IS_TAB = 64
        
        /** Grapheme is kashida. */
        static readonly GRAPHEME_IS_ELONGATION = 128
        
        /** Grapheme is punctuation character. */
        static readonly GRAPHEME_IS_PUNCTUATION = 256
        
        /** Grapheme is underscore character. */
        static readonly GRAPHEME_IS_UNDERSCORE = 512
        
        /** Grapheme is connected to the previous grapheme. Breaking line before this grapheme is not safe. */
        static readonly GRAPHEME_IS_CONNECTED = 1024
        
        /** It is safe to insert a U+0640 before this grapheme for elongation. */
        static readonly GRAPHEME_IS_SAFE_TO_INSERT_TATWEEL = 2048
        
        /** Grapheme is an object replacement character for the embedded object. */
        static readonly GRAPHEME_IS_EMBEDDED_OBJECT = 4096
        
        /** Grapheme is a soft hyphen. */
        static readonly GRAPHEME_IS_SOFT_HYPHEN = 8192
        
        /** Disables font hinting (smoother but less crisp). */
        static readonly HINTING_NONE = 0
        
        /** Use the light font hinting mode. */
        static readonly HINTING_LIGHT = 1
        
        /** Use the default font hinting mode (crisper but less smooth).  
         *      
         *  **Note:** This hinting mode changes both horizontal and vertical glyph metrics. If applied to monospace font, some glyphs might have different width.  
         */
        static readonly HINTING_NORMAL = 2
        
        /** Glyph horizontal position is rounded to the whole pixel size, each glyph is rasterized once. */
        static readonly SUBPIXEL_POSITIONING_DISABLED = 0
        
        /** Glyph horizontal position is rounded based on font size.  
         *  - To one quarter of the pixel size if font size is smaller or equal to [constant SUBPIXEL_POSITIONING_ONE_QUARTER_MAX_SIZE].  
         *  - To one half of the pixel size if font size is smaller or equal to [constant SUBPIXEL_POSITIONING_ONE_HALF_MAX_SIZE].  
         *  - To the whole pixel size for larger fonts.  
         */
        static readonly SUBPIXEL_POSITIONING_AUTO = 1
        
        /** Glyph horizontal position is rounded to one half of the pixel size, each glyph is rasterized up to two times. */
        static readonly SUBPIXEL_POSITIONING_ONE_HALF = 2
        
        /** Glyph horizontal position is rounded to one quarter of the pixel size, each glyph is rasterized up to four times. */
        static readonly SUBPIXEL_POSITIONING_ONE_QUARTER = 3
        
        /** Maximum font size which will use one half of the pixel subpixel positioning in [constant SUBPIXEL_POSITIONING_AUTO] mode. */
        static readonly SUBPIXEL_POSITIONING_ONE_HALF_MAX_SIZE = 20
        
        /** Maximum font size which will use one quarter of the pixel subpixel positioning in [constant SUBPIXEL_POSITIONING_AUTO] mode. */
        static readonly SUBPIXEL_POSITIONING_ONE_QUARTER_MAX_SIZE = 16
        
        /** TextServer supports simple text layouts. */
        static readonly FEATURE_SIMPLE_LAYOUT = 1
        
        /** TextServer supports bidirectional text layouts. */
        static readonly FEATURE_BIDI_LAYOUT = 2
        
        /** TextServer supports vertical layouts. */
        static readonly FEATURE_VERTICAL_LAYOUT = 4
        
        /** TextServer supports complex text shaping. */
        static readonly FEATURE_SHAPING = 8
        
        /** TextServer supports justification using kashidas. */
        static readonly FEATURE_KASHIDA_JUSTIFICATION = 16
        
        /** TextServer supports complex line/word breaking rules (e.g. dictionary based). */
        static readonly FEATURE_BREAK_ITERATORS = 32
        
        /** TextServer supports loading bitmap fonts. */
        static readonly FEATURE_FONT_BITMAP = 64
        
        /** TextServer supports loading dynamic (TrueType, OpeType, etc.) fonts. */
        static readonly FEATURE_FONT_DYNAMIC = 128
        
        /** TextServer supports multichannel signed distance field dynamic font rendering. */
        static readonly FEATURE_FONT_MSDF = 256
        
        /** TextServer supports loading system fonts. */
        static readonly FEATURE_FONT_SYSTEM = 512
        
        /** TextServer supports variable fonts. */
        static readonly FEATURE_FONT_VARIABLE = 1024
        
        /** TextServer supports locale dependent and context sensitive case conversion. */
        static readonly FEATURE_CONTEXT_SENSITIVE_CASE_CONVERSION = 2048
        
        /** TextServer require external data file for some features, see [method load_support_data]. */
        static readonly FEATURE_USE_SUPPORT_DATA = 4096
        
        /** TextServer supports UAX #31 identifier validation, see [method is_valid_identifier]. */
        static readonly FEATURE_UNICODE_IDENTIFIERS = 8192
        
        /** TextServer supports [url=https://unicode.org/reports/tr36/]Unicode Technical Report #36[/url] and [url=https://unicode.org/reports/tr39/]Unicode Technical Standard #39[/url] based spoof detection features. */
        static readonly FEATURE_UNICODE_SECURITY = 16384
        
        /** Contour point is on the curve. */
        static readonly CONTOUR_CURVE_TAG_ON = 1
        
        /** Contour point isn't on the curve, but serves as a control point for a conic (quadratic) Bézier arc. */
        static readonly CONTOUR_CURVE_TAG_OFF_CONIC = 0
        
        /** Contour point isn't on the curve, but serves as a control point for a cubic Bézier arc. */
        static readonly CONTOUR_CURVE_TAG_OFF_CUBIC = 2
        
        /** Spacing for each glyph. */
        static readonly SPACING_GLYPH = 0
        
        /** Spacing for the space character. */
        static readonly SPACING_SPACE = 1
        
        /** Spacing at the top of the line. */
        static readonly SPACING_TOP = 2
        
        /** Spacing at the bottom of the line. */
        static readonly SPACING_BOTTOM = 3
        
        /** Represents the size of the [enum SpacingType] enum. */
        static readonly SPACING_MAX = 4
        
        /** Font is bold. */
        static readonly FONT_BOLD = 1
        
        /** Font is italic or oblique. */
        static readonly FONT_ITALIC = 2
        
        /** Font have fixed-width characters. */
        static readonly FONT_FIXED_WIDTH = 4
        
        /** Use default Unicode BiDi algorithm. */
        static readonly STRUCTURED_TEXT_DEFAULT = 0
        
        /** BiDi override for URI. */
        static readonly STRUCTURED_TEXT_URI = 1
        
        /** BiDi override for file path. */
        static readonly STRUCTURED_TEXT_FILE = 2
        
        /** BiDi override for email. */
        static readonly STRUCTURED_TEXT_EMAIL = 3
        
        /** BiDi override for lists. Structured text options: list separator [String]. */
        static readonly STRUCTURED_TEXT_LIST = 4
        
        /** BiDi override for GDScript. */
        static readonly STRUCTURED_TEXT_GDSCRIPT = 5
        
        /** User defined structured text BiDi override function. */
        static readonly STRUCTURED_TEXT_CUSTOM = 6
        
        /** Bitmap font is not scaled. */
        static readonly FIXED_SIZE_SCALE_DISABLE = 0
        
        /** Bitmap font is scaled to the closest integer multiple of the font's fixed size. This is the recommended option for pixel art fonts. */
        static readonly FIXED_SIZE_SCALE_INTEGER_ONLY = 1
        
        /** Bitmap font is scaled to an arbitrary (fractional) size. This is the recommended option for non-pixel art fonts. */
        static readonly FIXED_SIZE_SCALE_ENABLED = 2
        constructor(identifier?: any)
        hasFeature(feature: TextServer.Feature): boolean
        getName(): string
        getFeatures(): int64
        loadSupportData(fileName: string): boolean
        getSupportDataFileName(): string
        getSupportDataInfo(): string
        saveSupportData(fileName: string): boolean
        getSupportData(): PackedByteArray
        isLocaleRightToLeft(locale: string): boolean
        nameToTag(name: string): int64
        tagToName(tag: int64): string
        
        /** Returns `true` if [param rid] is valid resource owned by this text server. */
        has(rid: Rid): boolean
        freeRid(rid: Rid): void
        createFont(): Rid
        createFontLinkedVariation(fontRid: Rid): Rid
        fontSetData(fontRid: Rid, data: PackedByteArray | byte[] | ArrayBuffer): void
        fontSetFaceIndex(fontRid: Rid, faceIndex: int64): void
        fontGetFaceIndex(fontRid: Rid): int64
        fontGetFaceCount(fontRid: Rid): int64
        fontSetStyle(fontRid: Rid, style: TextServer.FontStyle): void
        fontGetStyle(fontRid: Rid): TextServer.FontStyle
        fontSetName(fontRid: Rid, name: string): void
        fontGetName(fontRid: Rid): string
        fontGetOtNameStrings(fontRid: Rid): GDictionary
        fontSetStyleName(fontRid: Rid, name: string): void
        fontGetStyleName(fontRid: Rid): string
        fontSetWeight(fontRid: Rid, weight: int64): void
        fontGetWeight(fontRid: Rid): int64
        fontSetStretch(fontRid: Rid, weight: int64): void
        fontGetStretch(fontRid: Rid): int64
        fontSetAntialiasing(fontRid: Rid, antialiasing: TextServer.FontAntialiasing): void
        fontGetAntialiasing(fontRid: Rid): TextServer.FontAntialiasing
        fontSetDisableEmbeddedBitmaps(fontRid: Rid, disableEmbeddedBitmaps: boolean): void
        fontGetDisableEmbeddedBitmaps(fontRid: Rid): boolean
        fontSetGenerateMipmaps(fontRid: Rid, generateMipmaps: boolean): void
        fontGetGenerateMipmaps(fontRid: Rid): boolean
        fontSetMultichannelSignedDistanceField(fontRid: Rid, msdf: boolean): void
        fontIsMultichannelSignedDistanceField(fontRid: Rid): boolean
        fontSetMsdfPixelRange(fontRid: Rid, msdfPixelRange: int64): void
        fontGetMsdfPixelRange(fontRid: Rid): int64
        fontSetMsdfSize(fontRid: Rid, msdfSize: int64): void
        fontGetMsdfSize(fontRid: Rid): int64
        fontSetFixedSize(fontRid: Rid, fixedSize: int64): void
        fontGetFixedSize(fontRid: Rid): int64
        fontSetFixedSizeScaleMode(fontRid: Rid, fixedSizeScaleMode: TextServer.FixedSizeScaleMode): void
        fontGetFixedSizeScaleMode(fontRid: Rid): TextServer.FixedSizeScaleMode
        fontSetAllowSystemFallback(fontRid: Rid, allowSystemFallback: boolean): void
        fontIsAllowSystemFallback(fontRid: Rid): boolean
        fontSetForceAutohinter(fontRid: Rid, forceAutohinter: boolean): void
        fontIsForceAutohinter(fontRid: Rid): boolean
        fontSetHinting(fontRid: Rid, hinting: TextServer.Hinting): void
        fontGetHinting(fontRid: Rid): TextServer.Hinting
        fontSetSubpixelPositioning(fontRid: Rid, subpixelPositioning: TextServer.SubpixelPositioning): void
        fontGetSubpixelPositioning(fontRid: Rid): TextServer.SubpixelPositioning
        fontSetKeepRoundingRemainders(fontRid: Rid, keepRoundingRemainders: boolean): void
        fontGetKeepRoundingRemainders(fontRid: Rid): boolean
        fontSetEmbolden(fontRid: Rid, strength: float64): void
        fontGetEmbolden(fontRid: Rid): float64
        fontSetSpacing(fontRid: Rid, spacing: TextServer.SpacingType, value: int64): void
        fontGetSpacing(fontRid: Rid, spacing: TextServer.SpacingType): int64
        fontSetBaselineOffset(fontRid: Rid, baselineOffset: float64): void
        fontGetBaselineOffset(fontRid: Rid): float64
        fontSetTransform(fontRid: Rid, transform: Transform2D): void
        fontGetTransform(fontRid: Rid): Transform2D
        fontSetVariationCoordinates(fontRid: Rid, variationCoordinates: GDictionary): void
        fontGetVariationCoordinates(fontRid: Rid): GDictionary
        fontSetOversampling(fontRid: Rid, oversampling: float64): void
        fontGetOversampling(fontRid: Rid): float64
        fontGetSizeCacheList(fontRid: Rid): GArray
        fontClearSizeCache(fontRid: Rid): void
        fontRemoveSizeCache(fontRid: Rid, size: Vector2I): void
        fontSetAscent(fontRid: Rid, size: int64, ascent: float64): void
        fontGetAscent(fontRid: Rid, size: int64): float64
        fontSetDescent(fontRid: Rid, size: int64, descent: float64): void
        fontGetDescent(fontRid: Rid, size: int64): float64
        fontSetUnderlinePosition(fontRid: Rid, size: int64, underlinePosition: float64): void
        fontGetUnderlinePosition(fontRid: Rid, size: int64): float64
        fontSetUnderlineThickness(fontRid: Rid, size: int64, underlineThickness: float64): void
        fontGetUnderlineThickness(fontRid: Rid, size: int64): float64
        fontSetScale(fontRid: Rid, size: int64, scale: float64): void
        fontGetScale(fontRid: Rid, size: int64): float64
        fontGetTextureCount(fontRid: Rid, size: Vector2I): int64
        fontClearTextures(fontRid: Rid, size: Vector2I): void
        fontRemoveTexture(fontRid: Rid, size: Vector2I, textureIndex: int64): void
        fontSetTextureImage(fontRid: Rid, size: Vector2I, textureIndex: int64, image: Image): void
        fontGetTextureImage(fontRid: Rid, size: Vector2I, textureIndex: int64): Image
        fontSetTextureOffsets(fontRid: Rid, size: Vector2I, textureIndex: int64, offset: PackedInt32Array | int32[]): void
        fontGetTextureOffsets(fontRid: Rid, size: Vector2I, textureIndex: int64): PackedInt32Array
        fontGetGlyphList(fontRid: Rid, size: Vector2I): PackedInt32Array
        fontClearGlyphs(fontRid: Rid, size: Vector2I): void
        fontRemoveGlyph(fontRid: Rid, size: Vector2I, glyph: int64): void
        fontGetGlyphAdvance(fontRid: Rid, size: int64, glyph: int64): Vector2
        fontSetGlyphAdvance(fontRid: Rid, size: int64, glyph: int64, advance: Vector2): void
        fontGetGlyphOffset(fontRid: Rid, size: Vector2I, glyph: int64): Vector2
        fontSetGlyphOffset(fontRid: Rid, size: Vector2I, glyph: int64, offset: Vector2): void
        fontGetGlyphSize(fontRid: Rid, size: Vector2I, glyph: int64): Vector2
        fontSetGlyphSize(fontRid: Rid, size: Vector2I, glyph: int64, glSize: Vector2): void
        fontGetGlyphUVRect(fontRid: Rid, size: Vector2I, glyph: int64): Rect2
        fontSetGlyphUVRect(fontRid: Rid, size: Vector2I, glyph: int64, uVRect: Rect2): void
        fontGetGlyphTextureIdx(fontRid: Rid, size: Vector2I, glyph: int64): int64
        fontSetGlyphTextureIdx(fontRid: Rid, size: Vector2I, glyph: int64, textureIdx: int64): void
        fontGetGlyphTextureRid(fontRid: Rid, size: Vector2I, glyph: int64): Rid
        fontGetGlyphTextureSize(fontRid: Rid, size: Vector2I, glyph: int64): Vector2
        fontGetGlyphContours(font: Rid, size: int64, index: int64): GDictionary
        fontGetKerningList(fontRid: Rid, size: int64): GArray
        fontClearKerningMap(fontRid: Rid, size: int64): void
        fontRemoveKerning(fontRid: Rid, size: int64, glyphPair: Vector2I): void
        fontSetKerning(fontRid: Rid, size: int64, glyphPair: Vector2I, kerning: Vector2): void
        fontGetKerning(fontRid: Rid, size: int64, glyphPair: Vector2I): Vector2
        fontGetGlyphIndex(fontRid: Rid, size: int64, char: int64, variationSelector: int64): int64
        fontGetCharFromGlyphIndex(fontRid: Rid, size: int64, glyphIndex: int64): int64
        fontHasChar(fontRid: Rid, char: int64): boolean
        fontGetSupportedChars(fontRid: Rid): string
        fontGetSupportedGlyphs(fontRid: Rid): PackedInt32Array
        fontRenderRange(fontRid: Rid, size: Vector2I, start: int64, end: int64): void
        fontRenderGlyph(fontRid: Rid, size: Vector2I, index: int64): void
        fontDrawGlyph(fontRid: Rid, canvas: Rid, size: int64, pos: Vector2, index: int64, color: Color = new Color(1, 1, 1, 1)): void
        fontDrawGlyphOutline(fontRid: Rid, canvas: Rid, size: int64, outlineSize: int64, pos: Vector2, index: int64, color: Color = new Color(1, 1, 1, 1)): void
        fontIsLanguageSupported(fontRid: Rid, language: string): boolean
        fontSetLanguageSupportOverride(fontRid: Rid, language: string, supported: boolean): void
        fontGetLanguageSupportOverride(fontRid: Rid, language: string): boolean
        fontRemoveLanguageSupportOverride(fontRid: Rid, language: string): void
        fontGetLanguageSupportOverrides(fontRid: Rid): PackedStringArray
        fontIsScriptSupported(fontRid: Rid, script: string): boolean
        fontSetScriptSupportOverride(fontRid: Rid, script: string, supported: boolean): void
        fontGetScriptSupportOverride(fontRid: Rid, script: string): boolean
        fontRemoveScriptSupportOverride(fontRid: Rid, script: string): void
        fontGetScriptSupportOverrides(fontRid: Rid): PackedStringArray
        fontSetOpentypeFeatureOverrides(fontRid: Rid, overrides: GDictionary): void
        fontGetOpentypeFeatureOverrides(fontRid: Rid): GDictionary
        fontSupportedFeatureList(fontRid: Rid): GDictionary
        fontSupportedVariationList(fontRid: Rid): GDictionary
        fontGetGlobalOversampling(): float64
        fontSetGlobalOversampling(oversampling: float64): void
        getHexCodeBoxSize(size: int64, index: int64): Vector2
        drawHexCodeBox(canvas: Rid, size: int64, pos: Vector2, index: int64, color: Color): void
        createShapedText(direction: TextServer.Direction = 0, orientation: TextServer.Orientation = 0): Rid
        shapedTextClear(rid: Rid): void
        shapedTextSetDirection(shaped: Rid, direction: TextServer.Direction = 0): void
        shapedTextGetDirection(shaped: Rid): TextServer.Direction
        shapedTextGetInferredDirection(shaped: Rid): TextServer.Direction
        shapedTextSetBidiOverride(shaped: Rid, override: GArray): void
        shapedTextSetCustomPunctuation(shaped: Rid, punct: string): void
        shapedTextGetCustomPunctuation(shaped: Rid): string
        shapedTextSetCustomEllipsis(shaped: Rid, char: int64): void
        shapedTextGetCustomEllipsis(shaped: Rid): int64
        shapedTextSetOrientation(shaped: Rid, orientation: TextServer.Orientation = 0): void
        shapedTextGetOrientation(shaped: Rid): TextServer.Orientation
        shapedTextSetPreserveInvalid(shaped: Rid, enabled: boolean): void
        shapedTextGetPreserveInvalid(shaped: Rid): boolean
        shapedTextSetPreserveControl(shaped: Rid, enabled: boolean): void
        shapedTextGetPreserveControl(shaped: Rid): boolean
        shapedTextSetSpacing(shaped: Rid, spacing: TextServer.SpacingType, value: int64): void
        shapedTextGetSpacing(shaped: Rid, spacing: TextServer.SpacingType): int64
        shapedTextAddString(shaped: Rid, text: string, fonts: GArray, size: int64, opentypeFeatures: GDictionary = new GDictionary(), language: string = '', meta: any = <any> {}): boolean
        shapedTextAddObject(shaped: Rid, key: any, size: Vector2, inlineAlign: InlineAlignment = 5, length: int64 = 1, baseline: float64 = 0): boolean
        shapedTextResizeObject(shaped: Rid, key: any, size: Vector2, inlineAlign: InlineAlignment = 5, baseline: float64 = 0): boolean
        shapedGetSpanCount(shaped: Rid): int64
        shapedGetSpanMeta(shaped: Rid, index: int64): any
        shapedGetSpanEmbeddedObject(shaped: Rid, index: int64): any
        shapedSetSpanUpdateFont(shaped: Rid, index: int64, fonts: GArray, size: int64, opentypeFeatures: GDictionary = new GDictionary()): void
        shapedTextSubstr(shaped: Rid, start: int64, length: int64): Rid
        shapedTextGetParent(shaped: Rid): Rid
        shapedTextFitToWidth(shaped: Rid, width: float64, justificationFlags: TextServer.JustificationFlag = 3): float64
        shapedTextTabAlign(shaped: Rid, tabStops: PackedFloat32Array | float32[]): float64
        shapedTextShape(shaped: Rid): boolean
        shapedTextIsReady(shaped: Rid): boolean
        shapedTextHasVisibleChars(shaped: Rid): boolean
        shapedTextGetGlyphs(shaped: Rid): GArray
        shapedTextSortLogical(shaped: Rid): GArray
        shapedTextGetGlyphCount(shaped: Rid): int64
        shapedTextGetRange(shaped: Rid): Vector2I
        shapedTextGetLineBreaksAdv(shaped: Rid, width: PackedFloat32Array | float32[], start: int64 = 0, once: boolean = true, breakFlags: TextServer.LineBreakFlag = 3): PackedInt32Array
        shapedTextGetLineBreaks(shaped: Rid, width: float64, start: int64 = 0, breakFlags: TextServer.LineBreakFlag = 3): PackedInt32Array
        shapedTextGetWordBreaks(shaped: Rid, graphemeFlags: TextServer.GraphemeFlag = 264, skipGraphemeFlags: TextServer.GraphemeFlag = 4): PackedInt32Array
        shapedTextGetTrimPos(shaped: Rid): int64
        shapedTextGetEllipsisPos(shaped: Rid): int64
        shapedTextGetEllipsisGlyphs(shaped: Rid): GArray
        shapedTextGetEllipsisGlyphCount(shaped: Rid): int64
        shapedTextOverrunTrimToWidth(shaped: Rid, width: float64 = 0, overrunTrimFlags: TextServer.TextOverrunFlag = 0): void
        shapedTextGetObjects(shaped: Rid): GArray
        shapedTextGetObjectRect(shaped: Rid, key: any): Rect2
        shapedTextGetObjectRange(shaped: Rid, key: any): Vector2I
        shapedTextGetObjectGlyph(shaped: Rid, key: any): int64
        shapedTextGetSize(shaped: Rid): Vector2
        shapedTextGetAscent(shaped: Rid): float64
        shapedTextGetDescent(shaped: Rid): float64
        shapedTextGetWidth(shaped: Rid): float64
        shapedTextGetUnderlinePosition(shaped: Rid): float64
        shapedTextGetUnderlineThickness(shaped: Rid): float64
        shapedTextGetCarets(shaped: Rid, position: int64): GDictionary
        shapedTextGetSelection(shaped: Rid, start: int64, end: int64): PackedVector2Array
        shapedTextHitTestGrapheme(shaped: Rid, coords: float64): int64
        shapedTextHitTestPosition(shaped: Rid, coords: float64): int64
        shapedTextGetGraphemeBounds(shaped: Rid, pos: int64): Vector2
        shapedTextNextGraphemePos(shaped: Rid, pos: int64): int64
        shapedTextPrevGraphemePos(shaped: Rid, pos: int64): int64
        shapedTextGetCharacterBreaks(shaped: Rid): PackedInt32Array
        shapedTextNextCharacterPos(shaped: Rid, pos: int64): int64
        shapedTextPrevCharacterPos(shaped: Rid, pos: int64): int64
        shapedTextClosestCharacterPos(shaped: Rid, pos: int64): int64
        shapedTextDraw(shaped: Rid, canvas: Rid, pos: Vector2, clipL: float64 = -1, clipR: float64 = -1, color: Color = new Color(1, 1, 1, 1)): void
        shapedTextDrawOutline(shaped: Rid, canvas: Rid, pos: Vector2, clipL: float64 = -1, clipR: float64 = -1, outlineSize: int64 = 1, color: Color = new Color(1, 1, 1, 1)): void
        shapedTextGetDominantDirectionInRange(shaped: Rid, start: int64, end: int64): TextServer.Direction
        formatNumber(number: string, language: string = ''): string
        parseNumber(number: string, language: string = ''): string
        percentSign(language: string = ''): string
        stringGetWordBreaks(string_: string, language: string = '', charsPerLine: int64 = 0): PackedInt32Array
        stringGetCharacterBreaks(string_: string, language: string = ''): PackedInt32Array
        isConfusable(string_: string, dict: PackedStringArray | string[]): int64
        spoofCheck(string_: string): boolean
        stripDiacritics(string_: string): string
        isValidIdentifier(string_: string): boolean
        isValidLetter(unicode: int64): boolean
        stringToUpper(string_: string, language: string = ''): string
        stringToLower(string_: string, language: string = ''): string
        stringToTitle(string_: string, language: string = ''): string
        parseStructuredText(parserType: TextServer.StructuredTextParser, args: GArray, text: string): GArray
    }
    /** An advanced text server with support for BiDi, complex text layout, and contextual OpenType features. Used in Godot by default.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_textserveradvanced.html  
     */
    class TextServerAdvanced extends TextServerExtension {
        constructor(identifier?: any)
    }
    /** A dummy text server that can't render text or manage fonts.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_textserverdummy.html  
     */
    class TextServerDummy extends TextServerExtension {
        constructor(identifier?: any)
    }
    /** Base class for custom [TextServer] implementations (plugins).  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_textserverextension.html  
     */
    class TextServerExtension extends TextServer {
        constructor(identifier?: any)
        /* gdvirtual */ _hasFeature(feature: TextServer.Feature): boolean
        /* gdvirtual */ _getName(): string
        /* gdvirtual */ _getFeatures(): int64
        /* gdvirtual */ _freeRid(rid: Rid): void
        
        /** **Required.**  
         *  Returns `true` if [param rid] is valid resource owned by this text server.  
         */
        /* gdvirtual */ _has(rid: Rid): boolean
        /* gdvirtual */ _loadSupportData(fileName: string): boolean
        /* gdvirtual */ _getSupportDataFileName(): string
        /* gdvirtual */ _getSupportDataInfo(): string
        /* gdvirtual */ _saveSupportData(fileName: string): boolean
        /* gdvirtual */ _getSupportData(): PackedByteArray
        /* gdvirtual */ _isLocaleRightToLeft(locale: string): boolean
        /* gdvirtual */ _nameToTag(name: string): int64
        /* gdvirtual */ _tagToName(tag: int64): string
        /* gdvirtual */ _createFont(): Rid
        /* gdvirtual */ _createFontLinkedVariation(fontRid: Rid): Rid
        /* gdvirtual */ _fontSetData(fontRid: Rid, data: PackedByteArray | byte[] | ArrayBuffer): void
        /* gdvirtual */ _fontSetDataPtr(fontRid: Rid, dataPtr: int64, dataSize: int64): void
        /* gdvirtual */ _fontSetFaceIndex(fontRid: Rid, faceIndex: int64): void
        /* gdvirtual */ _fontGetFaceIndex(fontRid: Rid): int64
        /* gdvirtual */ _fontGetFaceCount(fontRid: Rid): int64
        /* gdvirtual */ _fontSetStyle(fontRid: Rid, style: TextServer.FontStyle): void
        /* gdvirtual */ _fontGetStyle(fontRid: Rid): TextServer.FontStyle
        /* gdvirtual */ _fontSetName(fontRid: Rid, name: string): void
        /* gdvirtual */ _fontGetName(fontRid: Rid): string
        /* gdvirtual */ _fontGetOtNameStrings(fontRid: Rid): GDictionary
        /* gdvirtual */ _fontSetStyleName(fontRid: Rid, nameStyle: string): void
        /* gdvirtual */ _fontGetStyleName(fontRid: Rid): string
        /* gdvirtual */ _fontSetWeight(fontRid: Rid, weight: int64): void
        /* gdvirtual */ _fontGetWeight(fontRid: Rid): int64
        /* gdvirtual */ _fontSetStretch(fontRid: Rid, stretch: int64): void
        /* gdvirtual */ _fontGetStretch(fontRid: Rid): int64
        /* gdvirtual */ _fontSetAntialiasing(fontRid: Rid, antialiasing: TextServer.FontAntialiasing): void
        /* gdvirtual */ _fontGetAntialiasing(fontRid: Rid): TextServer.FontAntialiasing
        /* gdvirtual */ _fontSetDisableEmbeddedBitmaps(fontRid: Rid, disableEmbeddedBitmaps: boolean): void
        /* gdvirtual */ _fontGetDisableEmbeddedBitmaps(fontRid: Rid): boolean
        /* gdvirtual */ _fontSetGenerateMipmaps(fontRid: Rid, generateMipmaps: boolean): void
        /* gdvirtual */ _fontGetGenerateMipmaps(fontRid: Rid): boolean
        /* gdvirtual */ _fontSetMultichannelSignedDistanceField(fontRid: Rid, msdf: boolean): void
        /* gdvirtual */ _fontIsMultichannelSignedDistanceField(fontRid: Rid): boolean
        /* gdvirtual */ _fontSetMsdfPixelRange(fontRid: Rid, msdfPixelRange: int64): void
        /* gdvirtual */ _fontGetMsdfPixelRange(fontRid: Rid): int64
        /* gdvirtual */ _fontSetMsdfSize(fontRid: Rid, msdfSize: int64): void
        /* gdvirtual */ _fontGetMsdfSize(fontRid: Rid): int64
        /* gdvirtual */ _fontSetFixedSize(fontRid: Rid, fixedSize: int64): void
        /* gdvirtual */ _fontGetFixedSize(fontRid: Rid): int64
        /* gdvirtual */ _fontSetFixedSizeScaleMode(fontRid: Rid, fixedSizeScaleMode: TextServer.FixedSizeScaleMode): void
        /* gdvirtual */ _fontGetFixedSizeScaleMode(fontRid: Rid): TextServer.FixedSizeScaleMode
        /* gdvirtual */ _fontSetAllowSystemFallback(fontRid: Rid, allowSystemFallback: boolean): void
        /* gdvirtual */ _fontIsAllowSystemFallback(fontRid: Rid): boolean
        /* gdvirtual */ _fontSetForceAutohinter(fontRid: Rid, forceAutohinter: boolean): void
        /* gdvirtual */ _fontIsForceAutohinter(fontRid: Rid): boolean
        /* gdvirtual */ _fontSetHinting(fontRid: Rid, hinting: TextServer.Hinting): void
        /* gdvirtual */ _fontGetHinting(fontRid: Rid): TextServer.Hinting
        /* gdvirtual */ _fontSetSubpixelPositioning(fontRid: Rid, subpixelPositioning: TextServer.SubpixelPositioning): void
        /* gdvirtual */ _fontGetSubpixelPositioning(fontRid: Rid): TextServer.SubpixelPositioning
        /* gdvirtual */ _fontSetKeepRoundingRemainders(fontRid: Rid, keepRoundingRemainders: boolean): void
        /* gdvirtual */ _fontGetKeepRoundingRemainders(fontRid: Rid): boolean
        /* gdvirtual */ _fontSetEmbolden(fontRid: Rid, strength: float64): void
        /* gdvirtual */ _fontGetEmbolden(fontRid: Rid): float64
        /* gdvirtual */ _fontSetSpacing(fontRid: Rid, spacing: TextServer.SpacingType, value: int64): void
        /* gdvirtual */ _fontGetSpacing(fontRid: Rid, spacing: TextServer.SpacingType): int64
        /* gdvirtual */ _fontSetBaselineOffset(fontRid: Rid, baselineOffset: float64): void
        /* gdvirtual */ _fontGetBaselineOffset(fontRid: Rid): float64
        /* gdvirtual */ _fontSetTransform(fontRid: Rid, transform: Transform2D): void
        /* gdvirtual */ _fontGetTransform(fontRid: Rid): Transform2D
        /* gdvirtual */ _fontSetVariationCoordinates(fontRid: Rid, variationCoordinates: GDictionary): void
        /* gdvirtual */ _fontGetVariationCoordinates(fontRid: Rid): GDictionary
        /* gdvirtual */ _fontSetOversampling(fontRid: Rid, oversampling: float64): void
        /* gdvirtual */ _fontGetOversampling(fontRid: Rid): float64
        /* gdvirtual */ _fontGetSizeCacheList(fontRid: Rid): GArray
        /* gdvirtual */ _fontClearSizeCache(fontRid: Rid): void
        /* gdvirtual */ _fontRemoveSizeCache(fontRid: Rid, size: Vector2I): void
        /* gdvirtual */ _fontSetAscent(fontRid: Rid, size: int64, ascent: float64): void
        /* gdvirtual */ _fontGetAscent(fontRid: Rid, size: int64): float64
        /* gdvirtual */ _fontSetDescent(fontRid: Rid, size: int64, descent: float64): void
        /* gdvirtual */ _fontGetDescent(fontRid: Rid, size: int64): float64
        /* gdvirtual */ _fontSetUnderlinePosition(fontRid: Rid, size: int64, underlinePosition: float64): void
        /* gdvirtual */ _fontGetUnderlinePosition(fontRid: Rid, size: int64): float64
        /* gdvirtual */ _fontSetUnderlineThickness(fontRid: Rid, size: int64, underlineThickness: float64): void
        /* gdvirtual */ _fontGetUnderlineThickness(fontRid: Rid, size: int64): float64
        /* gdvirtual */ _fontSetScale(fontRid: Rid, size: int64, scale: float64): void
        /* gdvirtual */ _fontGetScale(fontRid: Rid, size: int64): float64
        /* gdvirtual */ _fontGetTextureCount(fontRid: Rid, size: Vector2I): int64
        /* gdvirtual */ _fontClearTextures(fontRid: Rid, size: Vector2I): void
        /* gdvirtual */ _fontRemoveTexture(fontRid: Rid, size: Vector2I, textureIndex: int64): void
        /* gdvirtual */ _fontSetTextureImage(fontRid: Rid, size: Vector2I, textureIndex: int64, image: Image): void
        /* gdvirtual */ _fontGetTextureImage(fontRid: Rid, size: Vector2I, textureIndex: int64): Image
        /* gdvirtual */ _fontSetTextureOffsets(fontRid: Rid, size: Vector2I, textureIndex: int64, offset: PackedInt32Array | int32[]): void
        /* gdvirtual */ _fontGetTextureOffsets(fontRid: Rid, size: Vector2I, textureIndex: int64): PackedInt32Array
        /* gdvirtual */ _fontGetGlyphList(fontRid: Rid, size: Vector2I): PackedInt32Array
        /* gdvirtual */ _fontClearGlyphs(fontRid: Rid, size: Vector2I): void
        /* gdvirtual */ _fontRemoveGlyph(fontRid: Rid, size: Vector2I, glyph: int64): void
        /* gdvirtual */ _fontGetGlyphAdvance(fontRid: Rid, size: int64, glyph: int64): Vector2
        /* gdvirtual */ _fontSetGlyphAdvance(fontRid: Rid, size: int64, glyph: int64, advance: Vector2): void
        /* gdvirtual */ _fontGetGlyphOffset(fontRid: Rid, size: Vector2I, glyph: int64): Vector2
        /* gdvirtual */ _fontSetGlyphOffset(fontRid: Rid, size: Vector2I, glyph: int64, offset: Vector2): void
        /* gdvirtual */ _fontGetGlyphSize(fontRid: Rid, size: Vector2I, glyph: int64): Vector2
        /* gdvirtual */ _fontSetGlyphSize(fontRid: Rid, size: Vector2I, glyph: int64, glSize: Vector2): void
        /* gdvirtual */ _fontGetGlyphUVRect(fontRid: Rid, size: Vector2I, glyph: int64): Rect2
        /* gdvirtual */ _fontSetGlyphUVRect(fontRid: Rid, size: Vector2I, glyph: int64, uVRect: Rect2): void
        /* gdvirtual */ _fontGetGlyphTextureIdx(fontRid: Rid, size: Vector2I, glyph: int64): int64
        /* gdvirtual */ _fontSetGlyphTextureIdx(fontRid: Rid, size: Vector2I, glyph: int64, textureIdx: int64): void
        /* gdvirtual */ _fontGetGlyphTextureRid(fontRid: Rid, size: Vector2I, glyph: int64): Rid
        /* gdvirtual */ _fontGetGlyphTextureSize(fontRid: Rid, size: Vector2I, glyph: int64): Vector2
        /* gdvirtual */ _fontGetGlyphContours(fontRid: Rid, size: int64, index: int64): GDictionary
        /* gdvirtual */ _fontGetKerningList(fontRid: Rid, size: int64): GArray
        /* gdvirtual */ _fontClearKerningMap(fontRid: Rid, size: int64): void
        /* gdvirtual */ _fontRemoveKerning(fontRid: Rid, size: int64, glyphPair: Vector2I): void
        /* gdvirtual */ _fontSetKerning(fontRid: Rid, size: int64, glyphPair: Vector2I, kerning: Vector2): void
        /* gdvirtual */ _fontGetKerning(fontRid: Rid, size: int64, glyphPair: Vector2I): Vector2
        /* gdvirtual */ _fontGetGlyphIndex(fontRid: Rid, size: int64, char: int64, variationSelector: int64): int64
        /* gdvirtual */ _fontGetCharFromGlyphIndex(fontRid: Rid, size: int64, glyphIndex: int64): int64
        /* gdvirtual */ _fontHasChar(fontRid: Rid, char: int64): boolean
        /* gdvirtual */ _fontGetSupportedChars(fontRid: Rid): string
        /* gdvirtual */ _fontGetSupportedGlyphs(fontRid: Rid): PackedInt32Array
        /* gdvirtual */ _fontRenderRange(fontRid: Rid, size: Vector2I, start: int64, end: int64): void
        /* gdvirtual */ _fontRenderGlyph(fontRid: Rid, size: Vector2I, index: int64): void
        /* gdvirtual */ _fontDrawGlyph(fontRid: Rid, canvas: Rid, size: int64, pos: Vector2, index: int64, color: Color): void
        /* gdvirtual */ _fontDrawGlyphOutline(fontRid: Rid, canvas: Rid, size: int64, outlineSize: int64, pos: Vector2, index: int64, color: Color): void
        /* gdvirtual */ _fontIsLanguageSupported(fontRid: Rid, language: string): boolean
        /* gdvirtual */ _fontSetLanguageSupportOverride(fontRid: Rid, language: string, supported: boolean): void
        /* gdvirtual */ _fontGetLanguageSupportOverride(fontRid: Rid, language: string): boolean
        /* gdvirtual */ _fontRemoveLanguageSupportOverride(fontRid: Rid, language: string): void
        /* gdvirtual */ _fontGetLanguageSupportOverrides(fontRid: Rid): PackedStringArray
        /* gdvirtual */ _fontIsScriptSupported(fontRid: Rid, script: string): boolean
        /* gdvirtual */ _fontSetScriptSupportOverride(fontRid: Rid, script: string, supported: boolean): void
        /* gdvirtual */ _fontGetScriptSupportOverride(fontRid: Rid, script: string): boolean
        /* gdvirtual */ _fontRemoveScriptSupportOverride(fontRid: Rid, script: string): void
        /* gdvirtual */ _fontGetScriptSupportOverrides(fontRid: Rid): PackedStringArray
        /* gdvirtual */ _fontSetOpentypeFeatureOverrides(fontRid: Rid, overrides: GDictionary): void
        /* gdvirtual */ _fontGetOpentypeFeatureOverrides(fontRid: Rid): GDictionary
        /* gdvirtual */ _fontSupportedFeatureList(fontRid: Rid): GDictionary
        /* gdvirtual */ _fontSupportedVariationList(fontRid: Rid): GDictionary
        /* gdvirtual */ _fontGetGlobalOversampling(): float64
        /* gdvirtual */ _fontSetGlobalOversampling(oversampling: float64): void
        /* gdvirtual */ _getHexCodeBoxSize(size: int64, index: int64): Vector2
        /* gdvirtual */ _drawHexCodeBox(canvas: Rid, size: int64, pos: Vector2, index: int64, color: Color): void
        /* gdvirtual */ _createShapedText(direction: TextServer.Direction, orientation: TextServer.Orientation): Rid
        /* gdvirtual */ _shapedTextClear(shaped: Rid): void
        /* gdvirtual */ _shapedTextSetDirection(shaped: Rid, direction: TextServer.Direction): void
        /* gdvirtual */ _shapedTextGetDirection(shaped: Rid): TextServer.Direction
        /* gdvirtual */ _shapedTextGetInferredDirection(shaped: Rid): TextServer.Direction
        /* gdvirtual */ _shapedTextSetBidiOverride(shaped: Rid, override: GArray): void
        /* gdvirtual */ _shapedTextSetCustomPunctuation(shaped: Rid, punct: string): void
        /* gdvirtual */ _shapedTextGetCustomPunctuation(shaped: Rid): string
        /* gdvirtual */ _shapedTextSetCustomEllipsis(shaped: Rid, char: int64): void
        /* gdvirtual */ _shapedTextGetCustomEllipsis(shaped: Rid): int64
        /* gdvirtual */ _shapedTextSetOrientation(shaped: Rid, orientation: TextServer.Orientation): void
        /* gdvirtual */ _shapedTextGetOrientation(shaped: Rid): TextServer.Orientation
        /* gdvirtual */ _shapedTextSetPreserveInvalid(shaped: Rid, enabled: boolean): void
        /* gdvirtual */ _shapedTextGetPreserveInvalid(shaped: Rid): boolean
        /* gdvirtual */ _shapedTextSetPreserveControl(shaped: Rid, enabled: boolean): void
        /* gdvirtual */ _shapedTextGetPreserveControl(shaped: Rid): boolean
        /* gdvirtual */ _shapedTextSetSpacing(shaped: Rid, spacing: TextServer.SpacingType, value: int64): void
        /* gdvirtual */ _shapedTextGetSpacing(shaped: Rid, spacing: TextServer.SpacingType): int64
        /* gdvirtual */ _shapedTextAddString(shaped: Rid, text: string, fonts: GArray, size: int64, opentypeFeatures: GDictionary, language: string, meta: any): boolean
        /* gdvirtual */ _shapedTextAddObject(shaped: Rid, key: any, size: Vector2, inlineAlign: InlineAlignment, length: int64, baseline: float64): boolean
        /* gdvirtual */ _shapedTextResizeObject(shaped: Rid, key: any, size: Vector2, inlineAlign: InlineAlignment, baseline: float64): boolean
        /* gdvirtual */ _shapedGetSpanCount(shaped: Rid): int64
        /* gdvirtual */ _shapedGetSpanMeta(shaped: Rid, index: int64): any
        /* gdvirtual */ _shapedGetSpanEmbeddedObject(shaped: Rid, index: int64): any
        /* gdvirtual */ _shapedSetSpanUpdateFont(shaped: Rid, index: int64, fonts: GArray, size: int64, opentypeFeatures: GDictionary): void
        /* gdvirtual */ _shapedTextSubstr(shaped: Rid, start: int64, length: int64): Rid
        /* gdvirtual */ _shapedTextGetParent(shaped: Rid): Rid
        /* gdvirtual */ _shapedTextFitToWidth(shaped: Rid, width: float64, justificationFlags: TextServer.JustificationFlag): float64
        /* gdvirtual */ _shapedTextTabAlign(shaped: Rid, tabStops: PackedFloat32Array | float32[]): float64
        /* gdvirtual */ _shapedTextShape(shaped: Rid): boolean
        /* gdvirtual */ _shapedTextUpdateBreaks(shaped: Rid): boolean
        /* gdvirtual */ _shapedTextUpdateJustificationOps(shaped: Rid): boolean
        /* gdvirtual */ _shapedTextIsReady(shaped: Rid): boolean
        /* gdvirtual */ _shapedTextGetGlyphs(shaped: Rid): int64
        /* gdvirtual */ _shapedTextSortLogical(shaped: Rid): int64
        /* gdvirtual */ _shapedTextGetGlyphCount(shaped: Rid): int64
        /* gdvirtual */ _shapedTextGetRange(shaped: Rid): Vector2I
        /* gdvirtual */ _shapedTextGetLineBreaksAdv(shaped: Rid, width: PackedFloat32Array | float32[], start: int64, once: boolean, breakFlags: TextServer.LineBreakFlag): PackedInt32Array
        /* gdvirtual */ _shapedTextGetLineBreaks(shaped: Rid, width: float64, start: int64, breakFlags: TextServer.LineBreakFlag): PackedInt32Array
        /* gdvirtual */ _shapedTextGetWordBreaks(shaped: Rid, graphemeFlags: TextServer.GraphemeFlag, skipGraphemeFlags: TextServer.GraphemeFlag): PackedInt32Array
        /* gdvirtual */ _shapedTextGetTrimPos(shaped: Rid): int64
        /* gdvirtual */ _shapedTextGetEllipsisPos(shaped: Rid): int64
        /* gdvirtual */ _shapedTextGetEllipsisGlyphCount(shaped: Rid): int64
        /* gdvirtual */ _shapedTextGetEllipsisGlyphs(shaped: Rid): int64
        /* gdvirtual */ _shapedTextOverrunTrimToWidth(shaped: Rid, width: float64, trimFlags: TextServer.TextOverrunFlag): void
        /* gdvirtual */ _shapedTextGetObjects(shaped: Rid): GArray
        /* gdvirtual */ _shapedTextGetObjectRect(shaped: Rid, key: any): Rect2
        /* gdvirtual */ _shapedTextGetObjectRange(shaped: Rid, key: any): Vector2I
        /* gdvirtual */ _shapedTextGetObjectGlyph(shaped: Rid, key: any): int64
        /* gdvirtual */ _shapedTextGetSize(shaped: Rid): Vector2
        /* gdvirtual */ _shapedTextGetAscent(shaped: Rid): float64
        /* gdvirtual */ _shapedTextGetDescent(shaped: Rid): float64
        /* gdvirtual */ _shapedTextGetWidth(shaped: Rid): float64
        /* gdvirtual */ _shapedTextGetUnderlinePosition(shaped: Rid): float64
        /* gdvirtual */ _shapedTextGetUnderlineThickness(shaped: Rid): float64
        /* gdvirtual */ _shapedTextGetDominantDirectionInRange(shaped: Rid, start: int64, end: int64): int64
        /* gdvirtual */ _shapedTextGetCarets(shaped: Rid, position: int64, caret: int64): void
        /* gdvirtual */ _shapedTextGetSelection(shaped: Rid, start: int64, end: int64): PackedVector2Array
        /* gdvirtual */ _shapedTextHitTestGrapheme(shaped: Rid, coord: float64): int64
        /* gdvirtual */ _shapedTextHitTestPosition(shaped: Rid, coord: float64): int64
        /* gdvirtual */ _shapedTextDraw(shaped: Rid, canvas: Rid, pos: Vector2, clipL: float64, clipR: float64, color: Color): void
        /* gdvirtual */ _shapedTextDrawOutline(shaped: Rid, canvas: Rid, pos: Vector2, clipL: float64, clipR: float64, outlineSize: int64, color: Color): void
        /* gdvirtual */ _shapedTextGetGraphemeBounds(shaped: Rid, pos: int64): Vector2
        /* gdvirtual */ _shapedTextNextGraphemePos(shaped: Rid, pos: int64): int64
        /* gdvirtual */ _shapedTextPrevGraphemePos(shaped: Rid, pos: int64): int64
        /* gdvirtual */ _shapedTextGetCharacterBreaks(shaped: Rid): PackedInt32Array
        /* gdvirtual */ _shapedTextNextCharacterPos(shaped: Rid, pos: int64): int64
        /* gdvirtual */ _shapedTextPrevCharacterPos(shaped: Rid, pos: int64): int64
        /* gdvirtual */ _shapedTextClosestCharacterPos(shaped: Rid, pos: int64): int64
        /* gdvirtual */ _formatNumber(number: string, language: string): string
        /* gdvirtual */ _parseNumber(number: string, language: string): string
        /* gdvirtual */ _percentSign(language: string): string
        /* gdvirtual */ _stripDiacritics(string_: string): string
        /* gdvirtual */ _isValidIdentifier(string_: string): boolean
        /* gdvirtual */ _isValidLetter(unicode: int64): boolean
        /* gdvirtual */ _stringGetWordBreaks(string_: string, language: string, charsPerLine: int64): PackedInt32Array
        /* gdvirtual */ _stringGetCharacterBreaks(string_: string, language: string): PackedInt32Array
        /* gdvirtual */ _isConfusable(string_: string, dict: PackedStringArray | string[]): int64
        /* gdvirtual */ _spoofCheck(string_: string): boolean
        /* gdvirtual */ _stringToUpper(string_: string, language: string): string
        /* gdvirtual */ _stringToLower(string_: string, language: string): string
        /* gdvirtual */ _stringToTitle(string_: string, language: string): string
        /* gdvirtual */ _parseStructuredText(parserType: TextServer.StructuredTextParser, args: GArray, text: string): GArray
        
        /** **Optional.**  
         *  This method is called before text server is unregistered.  
         */
        /* gdvirtual */ _cleanup(): void
    }
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
        /* gdvirtual */ _getWidth(): int64
        /* gdvirtual */ _getHeight(): int64
        /* gdvirtual */ _isPixelOpaque(x: int64, y: int64): boolean
        /* gdvirtual */ _hasAlpha(): boolean
        
        /** Called when the entire [Texture2D] is requested to be drawn over a [CanvasItem], with the top-left offset specified in [param pos]. [param modulate] specifies a multiplier for the colors being drawn, while [param transpose] specifies whether drawing should be performed in column-major order instead of row-major order (resulting in 90-degree clockwise rotation).  
         *      
         *  **Note:** This is only used in 2D rendering, not 3D.  
         */
        /* gdvirtual */ _draw(toCanvasItem: Rid, pos: Vector2, modulate: Color, transpose: boolean): void
        /* gdvirtual */ _drawRect(toCanvasItem: Rid, rect: Rect2, tile: boolean, modulate: Color, transpose: boolean): void
        /* gdvirtual */ _drawRectRegion(toCanvasItem: Rid, rect: Rect2, srcRect: Rect2, modulate: Color, transpose: boolean, clipUV: boolean): void
        getWidth(): int64
        getHeight(): int64
        getSize(): Vector2
        hasAlpha(): boolean
        
        /** Draws the texture using a [CanvasItem] with the [RenderingServer] API at the specified [param position]. */
        draw(canvasItem: Rid, position: Vector2, modulate: Color = new Color(1, 1, 1, 1), transpose: boolean = false): void
        drawRect(canvasItem: Rid, rect: Rect2, tile: boolean, modulate: Color = new Color(1, 1, 1, 1), transpose: boolean = false): void
        drawRectRegion(canvasItem: Rid, rect: Rect2, srcRect: Rect2, modulate: Color = new Color(1, 1, 1, 1), transpose: boolean = false, clipUV: boolean = true): void
        getImage(): Image
        createPlaceholder(): Resource
    }
    /** A single texture resource which consists of multiple, separate images. Each image has the same dimensions and number of mipmap levels.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_texture2darray.html  
     */
    class Texture2DArray extends ImageTextureLayered {
        constructor(identifier?: any)
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
        /* gdvirtual */ _getFormat(): Image.Format
        /* gdvirtual */ _getWidth(): int64
        /* gdvirtual */ _getHeight(): int64
        /* gdvirtual */ _getDepth(): int64
        /* gdvirtual */ _hasMipmaps(): boolean
        /* gdvirtual */ _getData(): GArray
        getFormat(): Image.Format
        getWidth(): int64
        getHeight(): int64
        getDepth(): int64
        hasMipmaps(): boolean
        getData(): GArray
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
    class TextureButton<Map extends Record<string, Node> = {}> extends BaseButton<Map> {
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
        get textureNormal(): Texture2D
        set textureNormal(value: Texture2D)
        get texturePressed(): Texture2D
        set texturePressed(value: Texture2D)
        get textureHover(): Texture2D
        set textureHover(value: Texture2D)
        get textureDisabled(): Texture2D
        set textureDisabled(value: Texture2D)
        get textureFocused(): Texture2D
        set textureFocused(value: Texture2D)
        get textureClickMask(): any /*BitMap*/
        set textureClickMask(value: any /*BitMap*/)
        get ignoreTextureSize(): boolean
        set ignoreTextureSize(value: boolean)
        get stretchMode(): int64
        set stretchMode(value: int64)
        get flipH(): boolean
        set flipH(value: boolean)
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
        /* gdvirtual */ _getFormat(): Image.Format
        /* gdvirtual */ _getLayeredType(): int64
        /* gdvirtual */ _getWidth(): int64
        /* gdvirtual */ _getHeight(): int64
        /* gdvirtual */ _getLayers(): int64
        /* gdvirtual */ _hasMipmaps(): boolean
        /* gdvirtual */ _getLayerData(layerIndex: int64): Image
        getFormat(): Image.Format
        getLayeredType(): TextureLayered.LayeredType
        getWidth(): int64
        getHeight(): int64
        getLayers(): int64
        hasMipmaps(): boolean
        getLayerData(layer: int64): Image
    }
    /** Abstract base class for layered texture RD types.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_texturelayeredrd.html  
     */
    class TextureLayeredRD extends TextureLayered {
        constructor(identifier?: any)
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
    class TextureProgressBar<Map extends Record<string, Node> = {}> extends Range<Map> {
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
        setStretchMargin(margin: Side, value: int64): void
        getStretchMargin(margin: Side): int64
        get fillMode(): int64
        set fillMode(value: int64)
        get radialInitialAngle(): float64
        set radialInitialAngle(value: float64)
        get radialFillDegrees(): float64
        set radialFillDegrees(value: float64)
        get radialCenterOffset(): Vector2
        set radialCenterOffset(value: Vector2)
        get ninePatchStretch(): boolean
        set ninePatchStretch(value: boolean)
        get stretchMarginLeft(): int64
        set stretchMarginLeft(value: int64)
        get stretchMarginTop(): int64
        set stretchMarginTop(value: int64)
        get stretchMarginRight(): int64
        set stretchMarginRight(value: int64)
        get stretchMarginBottom(): int64
        set stretchMarginBottom(value: int64)
        get textureUnder(): Texture2D
        set textureUnder(value: Texture2D)
        get textureOver(): Texture2D
        set textureOver(value: Texture2D)
        get textureProgress(): Texture2D
        set textureProgress(value: Texture2D)
        get textureProgressOffset(): Vector2
        set textureProgressOffset(value: Vector2)
        get tintUnder(): Color
        set tintUnder(value: Color)
        get tintOver(): Color
        set tintOver(value: Color)
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
    class TextureRect<Map extends Record<string, Node> = {}> extends Control<Map> {
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
        get texture(): Texture2D
        set texture(value: Texture2D)
        get expandMode(): int64
        set expandMode(value: int64)
        get stretchMode(): int64
        set stretchMode(value: int64)
        get flipH(): boolean
        set flipH(value: boolean)
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
        setIcon(name: StringName, themeType: StringName, texture: Texture2D): void
        getIcon(name: StringName, themeType: StringName): Texture2D
        hasIcon(name: StringName, themeType: StringName): boolean
        renameIcon(oldName: StringName, name: StringName, themeType: StringName): void
        clearIcon(name: StringName, themeType: StringName): void
        getIconList(themeType: string): PackedStringArray
        getIconTypeList(): PackedStringArray
        setStylebox(name: StringName, themeType: StringName, texture: StyleBox): void
        getStylebox(name: StringName, themeType: StringName): StyleBox
        hasStylebox(name: StringName, themeType: StringName): boolean
        renameStylebox(oldName: StringName, name: StringName, themeType: StringName): void
        clearStylebox(name: StringName, themeType: StringName): void
        getStyleboxList(themeType: string): PackedStringArray
        getStyleboxTypeList(): PackedStringArray
        setFont(name: StringName, themeType: StringName, font: Font): void
        getFont(name: StringName, themeType: StringName): Font
        hasFont(name: StringName, themeType: StringName): boolean
        renameFont(oldName: StringName, name: StringName, themeType: StringName): void
        clearFont(name: StringName, themeType: StringName): void
        getFontList(themeType: string): PackedStringArray
        getFontTypeList(): PackedStringArray
        setFontSize(name: StringName, themeType: StringName, fontSize: int64): void
        getFontSize(name: StringName, themeType: StringName): int64
        hasFontSize(name: StringName, themeType: StringName): boolean
        renameFontSize(oldName: StringName, name: StringName, themeType: StringName): void
        clearFontSize(name: StringName, themeType: StringName): void
        getFontSizeList(themeType: string): PackedStringArray
        getFontSizeTypeList(): PackedStringArray
        setColor(name: StringName, themeType: StringName, color: Color): void
        getColor(name: StringName, themeType: StringName): Color
        hasColor(name: StringName, themeType: StringName): boolean
        renameColor(oldName: StringName, name: StringName, themeType: StringName): void
        clearColor(name: StringName, themeType: StringName): void
        getColorList(themeType: string): PackedStringArray
        getColorTypeList(): PackedStringArray
        setConstant(name: StringName, themeType: StringName, constant: int64): void
        getConstant(name: StringName, themeType: StringName): int64
        hasConstant(name: StringName, themeType: StringName): boolean
        renameConstant(oldName: StringName, name: StringName, themeType: StringName): void
        clearConstant(name: StringName, themeType: StringName): void
        getConstantList(themeType: string): PackedStringArray
        getConstantTypeList(): PackedStringArray
        hasDefaultBaseScale(): boolean
        hasDefaultFont(): boolean
        hasDefaultFontSize(): boolean
        setThemeItem(dataType: Theme.DataType, name: StringName, themeType: StringName, value: any): void
        getThemeItem(dataType: Theme.DataType, name: StringName, themeType: StringName): any
        hasThemeItem(dataType: Theme.DataType, name: StringName, themeType: StringName): boolean
        renameThemeItem(dataType: Theme.DataType, oldName: StringName, name: StringName, themeType: StringName): void
        clearThemeItem(dataType: Theme.DataType, name: StringName, themeType: StringName): void
        getThemeItemList(dataType: Theme.DataType, themeType: string): PackedStringArray
        getThemeItemTypeList(dataType: Theme.DataType): PackedStringArray
        setTypeVariation(themeType: StringName, baseType: StringName): void
        isTypeVariation(themeType: StringName, baseType: StringName): boolean
        clearTypeVariation(themeType: StringName): void
        getTypeVariationBase(themeType: StringName): StringName
        getTypeVariationList(baseType: StringName): PackedStringArray
        addType(themeType: StringName): void
        removeType(themeType: StringName): void
        getTypeList(): PackedStringArray
        mergeWith(other: Theme): void
        
        /** Removes all the theme properties defined on the theme resource. */
        clear(): void
        get defaultBaseScale(): float64
        set defaultBaseScale(value: float64)
        get defaultFont(): Font
        set defaultFont(value: Font)
        get defaultFontSize(): int64
        set defaultFontSize(value: int64)
    }
    /** Settings for a single tile in a [TileSet].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_tiledata.html  
     */
    class TileData extends GObject {
        constructor(identifier?: any)
        setOccluderPolygonsCount(layerId: int64, polygonsCount: int64): void
        getOccluderPolygonsCount(layerId: int64): int64
        addOccluderPolygon(layerId: int64): void
        removeOccluderPolygon(layerId: int64, polygonIndex: int64): void
        setOccluderPolygon(layerId: int64, polygonIndex: int64, polygon: OccluderPolygon2D): void
        getOccluderPolygon(layerId: int64, polygonIndex: int64, flipH: boolean = false, flipV: boolean = false, transpose: boolean = false): OccluderPolygon2D
        setOccluder(layerId: int64, occluderPolygon: OccluderPolygon2D): void
        getOccluder(layerId: int64, flipH: boolean = false, flipV: boolean = false, transpose: boolean = false): OccluderPolygon2D
        setConstantLinearVelocity(layerId: int64, velocity: Vector2): void
        getConstantLinearVelocity(layerId: int64): Vector2
        setConstantAngularVelocity(layerId: int64, velocity: float64): void
        getConstantAngularVelocity(layerId: int64): float64
        setCollisionPolygonsCount(layerId: int64, polygonsCount: int64): void
        getCollisionPolygonsCount(layerId: int64): int64
        addCollisionPolygon(layerId: int64): void
        removeCollisionPolygon(layerId: int64, polygonIndex: int64): void
        setCollisionPolygonPoints(layerId: int64, polygonIndex: int64, polygon: PackedVector2Array | Vector2[]): void
        getCollisionPolygonPoints(layerId: int64, polygonIndex: int64): PackedVector2Array
        setCollisionPolygonOneWay(layerId: int64, polygonIndex: int64, oneWay: boolean): void
        isCollisionPolygonOneWay(layerId: int64, polygonIndex: int64): boolean
        setCollisionPolygonOneWayMargin(layerId: int64, polygonIndex: int64, oneWayMargin: float64): void
        getCollisionPolygonOneWayMargin(layerId: int64, polygonIndex: int64): float64
        setTerrainPeeringBit(peeringBit: TileSet.CellNeighbor, terrain: int64): void
        getTerrainPeeringBit(peeringBit: TileSet.CellNeighbor): int64
        isValidTerrainPeeringBit(peeringBit: TileSet.CellNeighbor): boolean
        setNavigationPolygon(layerId: int64, navigationPolygon: NavigationPolygon): void
        getNavigationPolygon(layerId: int64, flipH: boolean = false, flipV: boolean = false, transpose: boolean = false): NavigationPolygon
        setCustomData(layerName: string, value: any): void
        getCustomData(layerName: string): any
        hasCustomData(layerName: string): boolean
        setCustomDataByLayerId(layerId: int64, value: any): void
        getCustomDataByLayerId(layerId: int64): any
        get flipH(): boolean
        set flipH(value: boolean)
        get flipV(): boolean
        set flipV(value: boolean)
        
        /** If `true`, the tile will display transposed, i.e. with horizontal and vertical texture UVs swapped. */
        get transpose(): boolean
        set transpose(value: boolean)
        get textureOrigin(): Vector2I
        set textureOrigin(value: Vector2I)
        
        /** Color modulation of the tile. */
        get modulate(): Color
        set modulate(value: Color)
        
        /** The [Material] to use for this [TileData]. This can be a [CanvasItemMaterial] to use the default shader, or a [ShaderMaterial] to use a custom shader. */
        get material(): CanvasItemMaterial | ShaderMaterial
        set material(value: CanvasItemMaterial | ShaderMaterial)
        get zIndex(): int64
        set zIndex(value: int64)
        get ySortOrigin(): int64
        set ySortOrigin(value: int64)
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
    class TileMap<Map extends Record<string, Node> = {}> extends Node2D<Map> {
        /** Use the debug settings to determine visibility. */
        static readonly VISIBILITY_MODE_DEFAULT = 0
        
        /** Always hide. */
        static readonly VISIBILITY_MODE_FORCE_HIDE = 2
        
        /** Always show. */
        static readonly VISIBILITY_MODE_FORCE_SHOW = 1
        constructor(identifier?: any)
        /* gdvirtual */ _useTileDataRuntimeUpdate(layer: int64, coords: Vector2I): boolean
        /* gdvirtual */ _tileDataRuntimeUpdate(layer: int64, coords: Vector2I, tileData: TileData): void
        setNavigationMap(layer: int64, map: Rid): void
        getNavigationMap(layer: int64): Rid
        forceUpdate(layer: int64 = -1): void
        getLayersCount(): int64
        addLayer(toPosition: int64): void
        moveLayer(layer: int64, toPosition: int64): void
        removeLayer(layer: int64): void
        setLayerName(layer: int64, name: string): void
        getLayerName(layer: int64): string
        setLayerEnabled(layer: int64, enabled: boolean): void
        isLayerEnabled(layer: int64): boolean
        setLayerModulate(layer: int64, modulate: Color): void
        getLayerModulate(layer: int64): Color
        setLayerYSortEnabled(layer: int64, ySortEnabled: boolean): void
        isLayerYSortEnabled(layer: int64): boolean
        setLayerYSortOrigin(layer: int64, ySortOrigin: int64): void
        getLayerYSortOrigin(layer: int64): int64
        setLayerZIndex(layer: int64, zIndex: int64): void
        getLayerZIndex(layer: int64): int64
        setLayerNavigationEnabled(layer: int64, enabled: boolean): void
        isLayerNavigationEnabled(layer: int64): boolean
        setLayerNavigationMap(layer: int64, map: Rid): void
        getLayerNavigationMap(layer: int64): Rid
        setCell(layer: int64, coords: Vector2I, sourceId: int64 = -1, atlasCoords: Vector2I = <any> {} /*compound.type from TypeVector2I ([object Object])*/, alternativeTile: int64 = 0): void
        eraseCell(layer: int64, coords: Vector2I): void
        getCellSourceId(layer: int64, coords: Vector2I, useProxies: boolean = false): int64
        getCellAtlasCoords(layer: int64, coords: Vector2I, useProxies: boolean = false): Vector2I
        getCellAlternativeTile(layer: int64, coords: Vector2I, useProxies: boolean = false): int64
        getCellTileData(layer: int64, coords: Vector2I, useProxies: boolean = false): TileData
        isCellFlippedH(layer: int64, coords: Vector2I, useProxies: boolean = false): boolean
        isCellFlippedV(layer: int64, coords: Vector2I, useProxies: boolean = false): boolean
        isCellTransposed(layer: int64, coords: Vector2I, useProxies: boolean = false): boolean
        getCoordsForBodyRid(body: Rid): Vector2I
        getLayerForBodyRid(body: Rid): int64
        getPattern(layer: int64, coordsArray: GArray): TileMapPattern
        mapPattern(positionInTilemap: Vector2I, coordsInPattern: Vector2I, pattern: TileMapPattern): Vector2I
        setPattern(layer: int64, position: Vector2I, pattern: TileMapPattern): void
        setCellsTerrainConnect(layer: int64, cells: GArray, terrainSet: int64, terrain: int64, ignoreEmptyTerrains: boolean = true): void
        setCellsTerrainPath(layer: int64, path: GArray, terrainSet: int64, terrain: int64, ignoreEmptyTerrains: boolean = true): void
        fixInvalidTiles(): void
        clearLayer(layer: int64): void
        
        /** Clears all cells. */
        clear(): void
        updateInternals(): void
        notifyRuntimeTileDataUpdate(layer: int64 = -1): void
        getSurroundingCells(coords: Vector2I): GArray
        getUsedCells(layer: int64): GArray
        getUsedCellsById(layer: int64, sourceId: int64 = -1, atlasCoords: Vector2I = <any> {} /*compound.type from TypeVector2I ([object Object])*/, alternativeTile: int64 = -1): GArray
        getUsedRect(): Rect2I
        mapToLocal(mapPosition: Vector2I): Vector2
        localToMap(localPosition: Vector2): Vector2I
        getNeighborCell(coords: Vector2I, neighbor: TileSet.CellNeighbor): Vector2I
        get tileSet(): TileSet
        set tileSet(value: TileSet)
        get renderingQuadrantSize(): int64
        set renderingQuadrantSize(value: int64)
        get collisionAnimatable(): boolean
        set collisionAnimatable(value: boolean)
        get collisionVisibilityMode(): int64
        set collisionVisibilityMode(value: int64)
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
    class TileMapLayer<Map extends Record<string, Node> = {}> extends Node2D<Map> {
        /** Hide the collisions or navigation debug shapes in the editor, and use the debug settings to determine their visibility in game (i.e. [member SceneTree.debug_collisions_hint] or [member SceneTree.debug_navigation_hint]). */
        static readonly DEBUG_VISIBILITY_MODE_DEFAULT = 0
        
        /** Always hide the collisions or navigation debug shapes. */
        static readonly DEBUG_VISIBILITY_MODE_FORCE_HIDE = 2
        
        /** Always show the collisions or navigation debug shapes. */
        static readonly DEBUG_VISIBILITY_MODE_FORCE_SHOW = 1
        constructor(identifier?: any)
        /* gdvirtual */ _useTileDataRuntimeUpdate(coords: Vector2I): boolean
        /* gdvirtual */ _tileDataRuntimeUpdate(coords: Vector2I, tileData: TileData): void
        /* gdvirtual */ _updateCells(coords: GArray, forcedCleanup: boolean): void
        setCell(coords: Vector2I, sourceId: int64 = -1, atlasCoords: Vector2I = <any> {} /*compound.type from TypeVector2I ([object Object])*/, alternativeTile: int64 = 0): void
        eraseCell(coords: Vector2I): void
        fixInvalidTiles(): void
        
        /** Clears all cells. */
        clear(): void
        getCellSourceId(coords: Vector2I): int64
        getCellAtlasCoords(coords: Vector2I): Vector2I
        getCellAlternativeTile(coords: Vector2I): int64
        getCellTileData(coords: Vector2I): TileData
        isCellFlippedH(coords: Vector2I): boolean
        isCellFlippedV(coords: Vector2I): boolean
        isCellTransposed(coords: Vector2I): boolean
        getUsedCells(): GArray
        getUsedCellsById(sourceId: int64 = -1, atlasCoords: Vector2I = <any> {} /*compound.type from TypeVector2I ([object Object])*/, alternativeTile: int64 = -1): GArray
        getUsedRect(): Rect2I
        getPattern(coordsArray: GArray): TileMapPattern
        setPattern(position: Vector2I, pattern: TileMapPattern): void
        setCellsTerrainConnect(cells: GArray, terrainSet: int64, terrain: int64, ignoreEmptyTerrains: boolean = true): void
        setCellsTerrainPath(path: GArray, terrainSet: int64, terrain: int64, ignoreEmptyTerrains: boolean = true): void
        hasBodyRid(body: Rid): boolean
        getCoordsForBodyRid(body: Rid): Vector2I
        updateInternals(): void
        notifyRuntimeTileDataUpdate(): void
        mapPattern(positionInTilemap: Vector2I, coordsInPattern: Vector2I, pattern: TileMapPattern): Vector2I
        getSurroundingCells(coords: Vector2I): GArray
        getNeighborCell(coords: Vector2I, neighbor: TileSet.CellNeighbor): Vector2I
        mapToLocal(mapPosition: Vector2I): Vector2
        localToMap(localPosition: Vector2): Vector2I
        setNavigationMap(map: Rid): void
        getNavigationMap(): Rid
        get tileMapData(): PackedByteArray
        set tileMapData(value: PackedByteArray | byte[] | ArrayBuffer)
        
        /** If `false`, disables this [TileMapLayer] completely (rendering, collision, navigation, scene tiles, etc.) */
        get enabled(): boolean
        set enabled(value: boolean)
        get tileSet(): TileSet
        set tileSet(value: TileSet)
        get occlusionEnabled(): boolean
        set occlusionEnabled(value: boolean)
        get ySortOrigin(): int64
        set ySortOrigin(value: int64)
        get xDrawOrderReversed(): boolean
        set xDrawOrderReversed(value: boolean)
        get renderingQuadrantSize(): int64
        set renderingQuadrantSize(value: int64)
        get collisionEnabled(): boolean
        set collisionEnabled(value: boolean)
        get useKinematicBodies(): boolean
        set useKinematicBodies(value: boolean)
        get collisionVisibilityMode(): int64
        set collisionVisibilityMode(value: int64)
        get navigationEnabled(): boolean
        set navigationEnabled(value: boolean)
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
        setCell(coords: Vector2I, sourceId: int64 = -1, atlasCoords: Vector2I = <any> {} /*compound.type from TypeVector2I ([object Object])*/, alternativeTile: int64 = -1): void
        hasCell(coords: Vector2I): boolean
        removeCell(coords: Vector2I, updateSize: boolean): void
        getCellSourceId(coords: Vector2I): int64
        getCellAtlasCoords(coords: Vector2I): Vector2I
        getCellAlternativeTile(coords: Vector2I): int64
        getUsedCells(): GArray
        getSize(): Vector2I
        setSize(size: Vector2I): void
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
         *  **Note:** Isometric [TileSet] works best if [TileMap] and all its layers have Y-sort enabled.  
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
        getNextSourceId(): int64
        addSource(source: TileSetSource, atlasSourceIdOverride: int64 = -1): int64
        removeSource(sourceId: int64): void
        setSourceId(sourceId: int64, newSourceId: int64): void
        getSourceCount(): int64
        getSourceId(index: int64): int64
        hasSource(sourceId: int64): boolean
        getSource(sourceId: int64): TileSetSource
        getOcclusionLayersCount(): int64
        addOcclusionLayer(toPosition: int64 = -1): void
        moveOcclusionLayer(layerIndex: int64, toPosition: int64): void
        removeOcclusionLayer(layerIndex: int64): void
        setOcclusionLayerLightMask(layerIndex: int64, lightMask: int64): void
        getOcclusionLayerLightMask(layerIndex: int64): int64
        setOcclusionLayerSdfCollision(layerIndex: int64, sdfCollision: boolean): void
        getOcclusionLayerSdfCollision(layerIndex: int64): boolean
        getPhysicsLayersCount(): int64
        addPhysicsLayer(toPosition: int64 = -1): void
        movePhysicsLayer(layerIndex: int64, toPosition: int64): void
        removePhysicsLayer(layerIndex: int64): void
        setPhysicsLayerCollisionLayer(layerIndex: int64, layer: int64): void
        getPhysicsLayerCollisionLayer(layerIndex: int64): int64
        setPhysicsLayerCollisionMask(layerIndex: int64, mask: int64): void
        getPhysicsLayerCollisionMask(layerIndex: int64): int64
        setPhysicsLayerCollisionPriority(layerIndex: int64, priority: float64): void
        getPhysicsLayerCollisionPriority(layerIndex: int64): float64
        setPhysicsLayerPhysicsMaterial(layerIndex: int64, physicsMaterial: PhysicsMaterial): void
        getPhysicsLayerPhysicsMaterial(layerIndex: int64): PhysicsMaterial
        getTerrainSetsCount(): int64
        addTerrainSet(toPosition: int64 = -1): void
        moveTerrainSet(terrainSet: int64, toPosition: int64): void
        removeTerrainSet(terrainSet: int64): void
        setTerrainSetMode(terrainSet: int64, mode: TileSet.TerrainMode): void
        getTerrainSetMode(terrainSet: int64): TileSet.TerrainMode
        getTerrainsCount(terrainSet: int64): int64
        addTerrain(terrainSet: int64, toPosition: int64 = -1): void
        moveTerrain(terrainSet: int64, terrainIndex: int64, toPosition: int64): void
        removeTerrain(terrainSet: int64, terrainIndex: int64): void
        setTerrainName(terrainSet: int64, terrainIndex: int64, name: string): void
        getTerrainName(terrainSet: int64, terrainIndex: int64): string
        setTerrainColor(terrainSet: int64, terrainIndex: int64, color: Color): void
        getTerrainColor(terrainSet: int64, terrainIndex: int64): Color
        getNavigationLayersCount(): int64
        addNavigationLayer(toPosition: int64 = -1): void
        moveNavigationLayer(layerIndex: int64, toPosition: int64): void
        removeNavigationLayer(layerIndex: int64): void
        setNavigationLayerLayers(layerIndex: int64, layers: int64): void
        getNavigationLayerLayers(layerIndex: int64): int64
        setNavigationLayerLayerValue(layerIndex: int64, layerNumber: int64, value: boolean): void
        getNavigationLayerLayerValue(layerIndex: int64, layerNumber: int64): boolean
        getCustomDataLayersCount(): int64
        addCustomDataLayer(toPosition: int64 = -1): void
        moveCustomDataLayer(layerIndex: int64, toPosition: int64): void
        removeCustomDataLayer(layerIndex: int64): void
        getCustomDataLayerByName(layerName: string): int64
        setCustomDataLayerName(layerIndex: int64, layerName: string): void
        hasCustomDataLayerByName(layerName: string): boolean
        getCustomDataLayerName(layerIndex: int64): string
        setCustomDataLayerType(layerIndex: int64, layerType: Variant.Type): void
        getCustomDataLayerType(layerIndex: int64): Variant.Type
        setSourceLevelTileProxy(sourceFrom: int64, sourceTo: int64): void
        getSourceLevelTileProxy(sourceFrom: int64): int64
        hasSourceLevelTileProxy(sourceFrom: int64): boolean
        removeSourceLevelTileProxy(sourceFrom: int64): void
        setCoordsLevelTileProxy(pSourceFrom: int64, coordsFrom: Vector2I, sourceTo: int64, coordsTo: Vector2I): void
        getCoordsLevelTileProxy(sourceFrom: int64, coordsFrom: Vector2I): GArray
        hasCoordsLevelTileProxy(sourceFrom: int64, coordsFrom: Vector2I): boolean
        removeCoordsLevelTileProxy(sourceFrom: int64, coordsFrom: Vector2I): void
        setAlternativeLevelTileProxy(sourceFrom: int64, coordsFrom: Vector2I, alternativeFrom: int64, sourceTo: int64, coordsTo: Vector2I, alternativeTo: int64): void
        getAlternativeLevelTileProxy(sourceFrom: int64, coordsFrom: Vector2I, alternativeFrom: int64): GArray
        hasAlternativeLevelTileProxy(sourceFrom: int64, coordsFrom: Vector2I, alternativeFrom: int64): boolean
        removeAlternativeLevelTileProxy(sourceFrom: int64, coordsFrom: Vector2I, alternativeFrom: int64): void
        mapTileProxy(sourceFrom: int64, coordsFrom: Vector2I, alternativeFrom: int64): GArray
        cleanupInvalidTileProxies(): void
        clearTileProxies(): void
        addPattern(pattern: TileMapPattern, index: int64 = -1): int64
        getPattern(index: int64 = -1): TileMapPattern
        removePattern(index: int64): void
        getPatternsCount(): int64
        get tileShape(): int64
        set tileShape(value: int64)
        get tileLayout(): int64
        set tileLayout(value: int64)
        get tileOffsetAxis(): int64
        set tileOffsetAxis(value: int64)
        get tileSize(): Vector2I
        set tileSize(value: Vector2I)
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
        
        /** Represents cell's horizontal flip flag. Should be used directly with [TileMap] to flip placed tiles by altering their alternative IDs.  
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
        createTile(atlasCoords: Vector2I, size: Vector2I = <any> {} /*compound.type from TypeVector2I ([object Object])*/): void
        removeTile(atlasCoords: Vector2I): void
        moveTileInAtlas(atlasCoords: Vector2I, newAtlasCoords: Vector2I = <any> {} /*compound.type from TypeVector2I ([object Object])*/, newSize: Vector2I = <any> {} /*compound.type from TypeVector2I ([object Object])*/): void
        getTileSizeInAtlas(atlasCoords: Vector2I): Vector2I
        hasRoomForTile(atlasCoords: Vector2I, size: Vector2I, animationColumns: int64, animationSeparation: Vector2I, framesCount: int64, ignoredTile: Vector2I = <any> {} /*compound.type from TypeVector2I ([object Object])*/): boolean
        getTilesToBeRemovedOnChange(texture: Texture2D, margins: Vector2I, separation: Vector2I, textureRegionSize: Vector2I): PackedVector2Array
        getTileAtCoords(atlasCoords: Vector2I): Vector2I
        hasTilesOutsideTexture(): boolean
        clearTilesOutsideTexture(): void
        setTileAnimationColumns(atlasCoords: Vector2I, frameColumns: int64): void
        getTileAnimationColumns(atlasCoords: Vector2I): int64
        setTileAnimationSeparation(atlasCoords: Vector2I, separation: Vector2I): void
        getTileAnimationSeparation(atlasCoords: Vector2I): Vector2I
        setTileAnimationSpeed(atlasCoords: Vector2I, speed: float64): void
        getTileAnimationSpeed(atlasCoords: Vector2I): float64
        setTileAnimationMode(atlasCoords: Vector2I, mode: TileSetAtlasSource.TileAnimationMode): void
        getTileAnimationMode(atlasCoords: Vector2I): TileSetAtlasSource.TileAnimationMode
        setTileAnimationFramesCount(atlasCoords: Vector2I, framesCount: int64): void
        getTileAnimationFramesCount(atlasCoords: Vector2I): int64
        setTileAnimationFrameDuration(atlasCoords: Vector2I, frameIndex: int64, duration: float64): void
        getTileAnimationFrameDuration(atlasCoords: Vector2I, frameIndex: int64): float64
        getTileAnimationTotalDuration(atlasCoords: Vector2I): float64
        createAlternativeTile(atlasCoords: Vector2I, alternativeIdOverride: int64 = -1): int64
        removeAlternativeTile(atlasCoords: Vector2I, alternativeTile: int64): void
        setAlternativeTileId(atlasCoords: Vector2I, alternativeTile: int64, newId: int64): void
        getNextAlternativeTileId(atlasCoords: Vector2I): int64
        getTileData(atlasCoords: Vector2I, alternativeTile: int64): TileData
        getAtlasGridSize(): Vector2I
        getTileTextureRegion(atlasCoords: Vector2I, frame: int64 = 0): Rect2I
        getRuntimeTexture(): Texture2D
        getRuntimeTileTextureRegion(atlasCoords: Vector2I, frame: int64): Rect2I
        
        /** The atlas texture. */
        get texture(): Texture2D
        set texture(value: Texture2D)
        
        /** Margins, in pixels, to offset the origin of the grid in the texture. */
        get margins(): Vector2I
        set margins(value: Vector2I)
        
        /** Separation, in pixels, between each tile texture region of the grid. */
        get separation(): Vector2I
        set separation(value: Vector2I)
        get textureRegionSize(): Vector2I
        set textureRegionSize(value: Vector2I)
        get useTexturePadding(): boolean
        set useTexturePadding(value: boolean)
    }
    /** Exposes a set of scenes as tiles for a [TileSet] resource.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_tilesetscenescollectionsource.html  
     */
    class TileSetScenesCollectionSource extends TileSetSource {
        constructor(identifier?: any)
        getSceneTilesCount(): int64
        getSceneTileId(index: int64): int64
        hasSceneTileId(id: int64): boolean
        createSceneTile(packedScene: PackedScene, idOverride: int64 = -1): int64
        setSceneTileId(id: int64, newId: int64): void
        setSceneTileScene(id: int64, packedScene: PackedScene): void
        getSceneTileScene(id: int64): PackedScene
        setSceneTileDisplayPlaceholder(id: int64, displayPlaceholder: boolean): void
        getSceneTileDisplayPlaceholder(id: int64): boolean
        removeSceneTile(id: int64): void
        getNextSceneTileId(): int64
    }
    /** Exposes a set of tiles for a [TileSet] resource.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_tilesetsource.html  
     */
    class TileSetSource extends Resource {
        constructor(identifier?: any)
        getTilesCount(): int64
        getTileId(index: int64): Vector2I
        hasTile(atlasCoords: Vector2I): boolean
        getAlternativeTilesCount(atlasCoords: Vector2I): int64
        getAlternativeTileId(atlasCoords: Vector2I, index: int64): int64
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
    class Timer<Map extends Record<string, Node> = {}> extends Node<Map> {
        /** Update the timer every physics process frame (see [constant Node.NOTIFICATION_INTERNAL_PHYSICS_PROCESS]). */
        static readonly TIMER_PROCESS_PHYSICS = 0
        
        /** Update the timer every process (rendered) frame (see [constant Node.NOTIFICATION_INTERNAL_PROCESS]). */
        static readonly TIMER_PROCESS_IDLE = 1
        constructor(identifier?: any)
        
        /** Starts the timer, or resets the timer if it was started already. Fails if the timer is not inside the tree. If [param time_sec] is greater than `0`, this value is used for the [member wait_time].  
         *      
         *  **Note:** This method does not resume a paused timer. See [member paused].  
         */
        start(timeSec: float64 = -1): void
        
        /** Stops the timer. */
        stop(): void
        isStopped(): boolean
        get processCallback(): int64
        set processCallback(value: int64)
        get waitTime(): float64
        set waitTime(value: float64)
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
        get ignoreTimeScale(): boolean
        set ignoreTimeScale(value: boolean)
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
        get innerRadius(): float64
        set innerRadius(value: float64)
        get outerRadius(): float64
        set outerRadius(value: float64)
        
        /** The number of slices the torus is constructed of. */
        get rings(): int64
        set rings(value: int64)
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
    class TouchScreenButton<Map extends Record<string, Node> = {}> extends Node2D<Map> {
        /** Always visible. */
        static readonly VISIBILITY_ALWAYS = 0
        
        /** Visible on touch screens only. */
        static readonly VISIBILITY_TOUCHSCREEN_ONLY = 1
        constructor(identifier?: any)
        isPressed(): boolean
        get textureNormal(): Texture2D
        set textureNormal(value: Texture2D)
        get texturePressed(): Texture2D
        set texturePressed(value: Texture2D)
        
        /** The button's bitmask. */
        get bitmask(): any /*BitMap*/
        set bitmask(value: any /*BitMap*/)
        
        /** The button's shape. */
        get shape(): Shape2D
        set shape(value: Shape2D)
        get shapeCentered(): boolean
        set shapeCentered(value: boolean)
        get shapeVisible(): boolean
        set shapeVisible(value: boolean)
        get passbyPress(): boolean
        set passbyPress(value: boolean)
        
        /** The button's action. Actions can be handled with [InputEventAction]. */
        get action(): StringName
        set action(value: StringName)
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
        /* gdvirtual */ _getPluralMessage(srcMessage: StringName, srcPluralMessage: StringName, n: int64, context: StringName): StringName
        /* gdvirtual */ _getMessage(srcMessage: StringName, context: StringName): StringName
        addMessage(srcMessage: StringName, xlatedMessage: StringName, context: StringName = ''): void
        addPluralMessage(srcMessage: StringName, xlatedMessages: PackedStringArray | string[], context: StringName = ''): void
        getMessage(srcMessage: StringName, context: StringName = ''): StringName
        getPluralMessage(srcMessage: StringName, srcPluralMessage: StringName, n: int64, context: StringName = ''): StringName
        eraseMessage(srcMessage: StringName, context: StringName = ''): void
        getMessageList(): PackedStringArray
        getTranslatedMessageList(): PackedStringArray
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
        getTranslationObject(locale: string): Translation
        addTranslation(translation: Translation): void
        removeTranslation(translation: Translation): void
        
        /** Removes all translations. */
        clear(): void
        
        /** Returns the current locale's translation for the given message and context. */
        translate(message: StringName, context: StringName = ''): StringName
        translatePlural(message: StringName, messagePlural: StringName, n: int64, context: StringName = ''): StringName
        
        /** Returns the pseudolocalized string based on the [param message] passed in. */
        pseudolocalize(message: StringName): StringName
        get pseudolocalizationEnabled(): boolean
        set pseudolocalizationEnabled(value: boolean)
        get pseudolocalizationAccentsEnabled(): boolean
        set pseudolocalizationAccentsEnabled(value: boolean)
        get pseudolocalizationDoubleVowelsEnabled(): boolean
        set pseudolocalizationDoubleVowelsEnabled(value: boolean)
        get pseudolocalizationFakeBidiEnabled(): boolean
        set pseudolocalizationFakeBidiEnabled(value: boolean)
        get pseudolocalizationOverrideEnabled(): boolean
        set pseudolocalizationOverrideEnabled(value: boolean)
        get pseudolocalizationSkipPlaceholdersEnabled(): boolean
        set pseudolocalizationSkipPlaceholdersEnabled(value: boolean)
        get pseudolocalizationExpansionRatio(): float64
        set pseudolocalizationExpansionRatio(value: float64)
        get pseudolocalizationPrefix(): string
        set pseudolocalizationPrefix(value: string)
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
    class Tree<Map extends Record<string, Node> = {}> extends Control<Map> {
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
        createItem(parent: TreeItem = undefined, index: int64 = -1): TreeItem
        getRoot(): TreeItem
        setColumnCustomMinimumWidth(column: int64, minWidth: int64): void
        setColumnExpand(column: int64, expand: boolean): void
        setColumnExpandRatio(column: int64, ratio: int64): void
        setColumnClipContent(column: int64, enable: boolean): void
        isColumnExpanding(column: int64): boolean
        isColumnClippingContent(column: int64): boolean
        getColumnExpandRatio(column: int64): int64
        getColumnWidth(column: int64): int64
        getNextSelected(from: TreeItem): TreeItem
        getSelected(): TreeItem
        setSelected(item: TreeItem, column: int64): void
        getSelectedColumn(): int64
        getPressedButton(): int64
        deselectAll(): void
        getEdited(): TreeItem
        getEditedColumn(): int64
        editSelected(forceEdit: boolean = false): boolean
        getCustomPopupRect(): Rect2
        getItemAreaRect(item: TreeItem, column: int64 = -1, buttonIndex: int64 = -1): Rect2
        getItemAtPosition(position: Vector2): TreeItem
        getColumnAtPosition(position: Vector2): int64
        getDropSectionAtPosition(position: Vector2): int64
        getButtonIdAtPosition(position: Vector2): int64
        ensureCursorIsVisible(): void
        setColumnTitle(column: int64, title: string): void
        getColumnTitle(column: int64): string
        setColumnTitleAlignment(column: int64, titleAlignment: HorizontalAlignment): void
        getColumnTitleAlignment(column: int64): HorizontalAlignment
        setColumnTitleDirection(column: int64, direction: Control.TextDirection): void
        getColumnTitleDirection(column: int64): Control.TextDirection
        setColumnTitleLanguage(column: int64, language: string): void
        getColumnTitleLanguage(column: int64): string
        getScroll(): Vector2
        scrollToItem(item: TreeItem, centerOnItem: boolean = false): void
        
        /** The number of columns. */
        get columns(): int64
        set columns(value: int64)
        get columnTitlesVisible(): boolean
        set columnTitlesVisible(value: boolean)
        get allowReselect(): boolean
        set allowReselect(value: boolean)
        get allowRmbSelect(): boolean
        set allowRmbSelect(value: boolean)
        get allowSearch(): boolean
        set allowSearch(value: boolean)
        get hideFolding(): boolean
        set hideFolding(value: boolean)
        get enableRecursiveFolding(): boolean
        set enableRecursiveFolding(value: boolean)
        get hideRoot(): boolean
        set hideRoot(value: boolean)
        get dropModeFlags(): int64
        set dropModeFlags(value: int64)
        get selectMode(): int64
        set selectMode(value: int64)
        get scrollHorizontalEnabled(): boolean
        set scrollHorizontalEnabled(value: boolean)
        get scrollVerticalEnabled(): boolean
        set scrollVerticalEnabled(value: boolean)
        get autoTooltip(): boolean
        set autoTooltip(value: boolean)
        readonly itemSelected: Signal<() => void>
        readonly cellSelected: Signal<() => void>
        readonly multiSelected: Signal<(item: TreeItem, column: int64, selected: boolean) => void>
        readonly itemMouseSelected: Signal<(mousePosition: Vector2, mouseButtonIndex: int64) => void>
        readonly emptyClicked: Signal<(clickPosition: Vector2, mouseButtonIndex: int64) => void>
        readonly itemEdited: Signal<() => void>
        readonly customItemClicked: Signal<(mouseButtonIndex: int64) => void>
        readonly itemIconDoubleClicked: Signal<() => void>
        readonly itemCollapsed: Signal<(item: TreeItem) => void>
        readonly checkPropagatedToItem: Signal<(item: TreeItem, column: int64) => void>
        readonly buttonClicked: Signal<(item: TreeItem, column: int64, id: int64, mouseButtonIndex: int64) => void>
        readonly customPopupEdited: Signal<(arrowClicked: boolean) => void>
        readonly itemActivated: Signal<() => void>
        readonly columnTitleClicked: Signal<(column: int64, mouseButtonIndex: int64) => void>
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
        setCellMode(column: int64, mode: TreeItem.TreeCellMode): void
        getCellMode(column: int64): TreeItem.TreeCellMode
        setAutoTranslateMode(column: int64, mode: Node.AutoTranslateMode): void
        getAutoTranslateMode(column: int64): Node.AutoTranslateMode
        setEditMultiline(column: int64, multiline: boolean): void
        isEditMultiline(column: int64): boolean
        setChecked(column: int64, checked: boolean): void
        setIndeterminate(column: int64, indeterminate: boolean): void
        isChecked(column: int64): boolean
        isIndeterminate(column: int64): boolean
        propagateCheck(column: int64, emitSignal: boolean = true): void
        setText(column: int64, text: string): void
        getText(column: int64): string
        setTextDirection(column: int64, direction: Control.TextDirection): void
        getTextDirection(column: int64): Control.TextDirection
        setAutowrapMode(column: int64, autowrapMode: TextServer.AutowrapMode): void
        getAutowrapMode(column: int64): TextServer.AutowrapMode
        setTextOverrunBehavior(column: int64, overrunBehavior: TextServer.OverrunBehavior): void
        getTextOverrunBehavior(column: int64): TextServer.OverrunBehavior
        setStructuredTextBidiOverride(column: int64, parser: TextServer.StructuredTextParser): void
        getStructuredTextBidiOverride(column: int64): TextServer.StructuredTextParser
        setStructuredTextBidiOverrideOptions(column: int64, args: GArray): void
        getStructuredTextBidiOverrideOptions(column: int64): GArray
        setLanguage(column: int64, language: string): void
        getLanguage(column: int64): string
        setSuffix(column: int64, text: string): void
        getSuffix(column: int64): string
        setIcon(column: int64, texture: Texture2D): void
        getIcon(column: int64): Texture2D
        setIconOverlay(column: int64, texture: Texture2D): void
        getIconOverlay(column: int64): Texture2D
        setIconRegion(column: int64, region: Rect2): void
        getIconRegion(column: int64): Rect2
        setIconMaxWidth(column: int64, width: int64): void
        getIconMaxWidth(column: int64): int64
        setIconModulate(column: int64, modulate: Color): void
        getIconModulate(column: int64): Color
        setRange(column: int64, value: float64): void
        getRange(column: int64): float64
        setRangeConfig(column: int64, min: float64, max: float64, step: float64, expr: boolean = false): void
        getRangeConfig(column: int64): GDictionary
        setMetadata(column: int64, meta: any): void
        getMetadata(column: int64): any
        setCustomDraw(column: int64, object: GObject, callback: StringName): void
        setCustomDrawCallback(column: int64, callback: Callable): void
        getCustomDrawCallback(column: int64): Callable
        setCollapsedRecursive(enable: boolean): void
        isAnyCollapsed(onlyVisible: boolean = false): boolean
        isVisibleInTree(): boolean
        uncollapseTree(): void
        setSelectable(column: int64, selectable: boolean): void
        isSelectable(column: int64): boolean
        isSelected(column: int64): boolean
        
        /** Selects the given [param column]. */
        select(column: int64): void
        
        /** Deselects the given column. */
        deselect(column: int64): void
        setEditable(column: int64, enabled: boolean): void
        isEditable(column: int64): boolean
        setCustomColor(column: int64, color: Color): void
        getCustomColor(column: int64): Color
        clearCustomColor(column: int64): void
        setCustomFont(column: int64, font: Font): void
        getCustomFont(column: int64): Font
        setCustomFontSize(column: int64, fontSize: int64): void
        getCustomFontSize(column: int64): int64
        setCustomBgColor(column: int64, color: Color, justOutline: boolean = false): void
        clearCustomBgColor(column: int64): void
        getCustomBgColor(column: int64): Color
        setCustomAsButton(column: int64, enable: boolean): void
        isCustomSetAsButton(column: int64): boolean
        clearButtons(): void
        addButton(column: int64, button: Texture2D, id: int64 = -1, disabled: boolean = false, tooltipText: string = ''): void
        getButtonCount(column: int64): int64
        getButtonTooltipText(column: int64, buttonIndex: int64): string
        getButtonId(column: int64, buttonIndex: int64): int64
        getButtonById(column: int64, id: int64): int64
        getButtonColor(column: int64, id: int64): Color
        getButton(column: int64, buttonIndex: int64): Texture2D
        setButtonTooltipText(column: int64, buttonIndex: int64, tooltip: string): void
        setButton(column: int64, buttonIndex: int64, button: Texture2D): void
        eraseButton(column: int64, buttonIndex: int64): void
        setButtonDisabled(column: int64, buttonIndex: int64, disabled: boolean): void
        setButtonColor(column: int64, buttonIndex: int64, color: Color): void
        isButtonDisabled(column: int64, buttonIndex: int64): boolean
        setTooltipText(column: int64, tooltip: string): void
        getTooltipText(column: int64): string
        setTextAlignment(column: int64, textAlignment: HorizontalAlignment): void
        getTextAlignment(column: int64): HorizontalAlignment
        setExpandRight(column: int64, enable: boolean): void
        getExpandRight(column: int64): boolean
        createChild(index: int64 = -1): TreeItem
        addChild(child: TreeItem): void
        removeChild(child: TreeItem): void
        getTree(): Tree
        getNext(): TreeItem
        getPrev(): TreeItem
        getParent(): TreeItem
        getFirstChild(): TreeItem
        getNextInTree(wrap: boolean = false): TreeItem
        getPrevInTree(wrap: boolean = false): TreeItem
        getNextVisible(wrap: boolean = false): TreeItem
        getPrevVisible(wrap: boolean = false): TreeItem
        getChild(index: int64): TreeItem
        getChildCount(): int64
        getChildren(): GArray
        getIndex(): int64
        moveBefore(item: TreeItem): void
        moveAfter(item: TreeItem): void
        callRecursive(method: StringName, ...varargs: any[]): void
        
        /** If `true`, the TreeItem is collapsed. */
        get collapsed(): boolean
        set collapsed(value: boolean)
        
        /** If `true`, the [TreeItem] is visible (default).  
         *  Note that if a [TreeItem] is set to not be visible, none of its children will be visible either.  
         */
        get visible(): boolean
        set visible(value: boolean)
        get disableFolding(): boolean
        set disableFolding(value: boolean)
        get customMinimumHeight(): int64
        set customMinimumHeight(value: int64)
    }
    /** Internal mesh type.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_trianglemesh.html  
     */
    class TriangleMesh extends RefCounted {
        constructor(identifier?: any)
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
        get radialSteps(): int64
        set radialSteps(value: int64)
        
        /** The total number of sections on the tube. */
        get sections(): int64
        set sections(value: int64)
        get sectionLength(): float64
        set sectionLength(value: float64)
        get sectionRings(): int64
        set sectionRings(value: int64)
        get capTop(): boolean
        set capTop(value: boolean)
        get capBottom(): boolean
        set capBottom(value: boolean)
        
        /** Determines the radius of the tube along its length. The radius of a particular section ring is obtained by multiplying the baseline [member radius] by the value of this curve at the given distance. For values smaller than `0`, the faces will be inverted. Should be a unit [Curve]. */
        get curve(): Curve
        set curve(value: Curve)
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
        tweenProperty(object: GObject, property: NodePath | string, finalVal: any, duration: float64): PropertyTweener
        tweenInterval(time: float64): IntervalTweener
        tweenCallback(callback: Callable): CallbackTweener
        tweenMethod(method: Callable, from: any, to: any, duration: float64): MethodTweener
        tweenSubtween(subtween: Tween): SubtweenTweener
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
        getTotalElapsedTime(): float64
        isRunning(): boolean
        isValid(): boolean
        bindNode(node: Node): Tween
        setProcessMode(mode: Tween.TweenProcessMode): Tween
        setPauseMode(mode: Tween.TweenPauseMode): Tween
        setIgnoreTimeScale(ignore: boolean = true): Tween
        setParallel(parallel: boolean = true): Tween
        setLoops(loops: int64 = 0): Tween
        getLoopsLeft(): int64
        setSpeedScale(speed: float64): Tween
        setTrans(trans: Tween.TransitionType): Tween
        setEase(ease: Tween.EaseType): Tween
        
        /** Makes the next [Tweener] run parallelly to the previous one.  
         *    
         *  All [Tweener]s in the example will run at the same time.  
         *  You can make the [Tween] parallel by default by using [method set_parallel].  
         */
        parallel(): Tween
        
        /** Used to chain two [Tweener]s after [method set_parallel] is called with `true`.  
         *    
         */
        chain(): Tween
        static interpolateValue(initialValue: any, deltaValue: any, elapsedTime: float64, duration: float64, transType: Tween.TransitionType, easeType: Tween.EaseType): any
        readonly stepFinished: Signal<(idx: int64) => void>
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
        listen(port: int64, bindAddress: string = '*'): GError
        poll(): GError
        isConnectionAvailable(): boolean
        getLocalPort(): int64
        isListening(): boolean
        takeConnection(): any /*PacketPeerUDP*/
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
        getDevice(index: int64): any /*UPNPDevice*/
        addDevice(device: any /*UPNPDevice*/): void
        setDevice(index: int64, device: any /*UPNPDevice*/): void
        removeDevice(index: int64): void
        clearDevices(): void
        getGateway(): any /*UPNPDevice*/
        discover(timeout: int64 = 2000, ttl: int64 = 2, deviceFilter: string = 'InternetGatewayDevice'): int64
        queryExternalAddress(): string
        addPortMapping(port: int64, portInternal: int64 = 0, desc: string = '', proto: string = 'UDP', duration: int64 = 0): int64
        deletePortMapping(port: int64, proto: string = 'UDP'): int64
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
        addPortMapping(port: int64, portInternal: int64 = 0, desc: string = '', proto: string = 'UDP', duration: int64 = 0): int64
        deletePortMapping(port: int64, proto: string = 'UDP'): int64
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
        createAction(name: string, mergeMode: UndoRedo.MergeMode = 0, backwardUndoOps: boolean = false): void
        commitAction(execute: boolean = true): void
        isCommittingAction(): boolean
        addDoMethod(callable: Callable): void
        addUndoMethod(callable: Callable): void
        addDoProperty(object: GObject, property: StringName, value: any): void
        addUndoProperty(object: GObject, property: StringName, value: any): void
        addDoReference(object: GObject): void
        addUndoReference(object: GObject): void
        startForceKeepInMergeEnds(): void
        endForceKeepInMergeEnds(): void
        getHistoryCount(): int64
        getCurrentAction(): int64
        getActionName(id: int64): string
        clearHistory(increaseVersion: boolean = true): void
        getCurrentActionName(): string
        hasUndo(): boolean
        hasRedo(): boolean
        getVersion(): int64
        
        /** Redo the last action. */
        redo(): boolean
        
        /** Undo the last action. */
        undo(): boolean
        get maxSteps(): int64
        set maxSteps(value: int64)
        readonly versionChanged: Signal<() => void>
    }
    /** Uniform set cache manager for Rendering Device based renderers.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_uniformsetcacherd.html  
     */
    class UniformSetCacheRD extends GObject {
        constructor(identifier?: any)
        static getCache(shader: Rid, set: int64, uniforms: GArray): Rid
    }
    /** A container that arranges its child controls vertically.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_vboxcontainer.html  
     */
    class VBoxContainer<Map extends Record<string, Node> = {}> extends BoxContainer<Map> {
        constructor(identifier?: any)
    }
    /** A container that arranges its child controls vertically and wraps them around at the borders.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_vflowcontainer.html  
     */
    class VFlowContainer<Map extends Record<string, Node> = {}> extends FlowContainer<Map> {
        constructor(identifier?: any)
    }
    /** A vertical scrollbar that goes from top (min) to bottom (max).  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_vscrollbar.html  
     */
    class VScrollBar<Map extends Record<string, Node> = {}> extends ScrollBar<Map> {
        constructor(identifier?: any)
    }
    /** A vertical line used for separating other controls.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_vseparator.html  
     */
    class VSeparator<Map extends Record<string, Node> = {}> extends Separator<Map> {
        constructor(identifier?: any)
    }
    /** A vertical slider that goes from bottom (min) to top (max).  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_vslider.html  
     */
    class VSlider<Map extends Record<string, Node> = {}> extends Slider<Map> {
        constructor(identifier?: any)
    }
    /** A container that splits two child controls vertically and provides a grabber for adjusting the split ratio.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_vsplitcontainer.html  
     */
    class VSplitContainer<Map extends Record<string, Node> = {}> extends SplitContainer<Map> {
        constructor(identifier?: any)
    }
    /** A 3D physics body that simulates the behavior of a car.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_vehiclebody3d.html  
     */
    class VehicleBody3D<Map extends Record<string, Node> = {}> extends RigidBody3D<Map> {
        constructor(identifier?: any)
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
    class VehicleWheel3D<Map extends Record<string, Node> = {}> extends Node3D<Map> {
        constructor(identifier?: any)
        isInContact(): boolean
        getContactBody(): Node3D
        getContactPoint(): Vector3
        getContactNormal(): Vector3
        getSkidinfo(): float64
        getRpm(): float64
        get engineForce(): float64
        set engineForce(value: float64)
        
        /** Slows down the wheel by applying a braking force. The wheel is only slowed down if it is in contact with a surface. The force you need to apply to adequately slow down your vehicle depends on the [member RigidBody3D.mass] of the vehicle. For a vehicle with a mass set to 1000, try a value in the 25 - 30 range for hard braking. */
        get brake(): float64
        set brake(value: float64)
        
        /** The steering angle for the wheel, in radians. Setting this to a non-zero value will result in the vehicle turning when it's moving. */
        get steering(): float64
        set steering(value: float64)
        get useAsTraction(): boolean
        set useAsTraction(value: boolean)
        get useAsSteering(): boolean
        set useAsSteering(value: boolean)
        get wheelRollInfluence(): float64
        set wheelRollInfluence(value: float64)
        get wheelRadius(): float64
        set wheelRadius(value: float64)
        get wheelRestLength(): float64
        set wheelRestLength(value: float64)
        get wheelFrictionSlip(): float64
        set wheelFrictionSlip(value: float64)
        get suspensionTravel(): float64
        set suspensionTravel(value: float64)
        get suspensionStiffness(): float64
        set suspensionStiffness(value: float64)
        get suspensionMaxForce(): float64
        set suspensionMaxForce(value: float64)
        get dampingCompression(): float64
        set dampingCompression(value: float64)
        get dampingRelaxation(): float64
        set dampingRelaxation(value: float64)
    }
    /** Base resource for video streams.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_videostream.html  
     */
    class VideoStream extends Resource {
        constructor(identifier?: any)
        /* gdvirtual */ _instantiatePlayback(): VideoStreamPlayback
        
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
        /* gdvirtual */ _isPlaying(): boolean
        /* gdvirtual */ _setPaused(paused: boolean): void
        /* gdvirtual */ _isPaused(): boolean
        /* gdvirtual */ _getLength(): float64
        /* gdvirtual */ _getPlaybackPosition(): float64
        
        /** Seeks to [param time] seconds. Called in response to the [member VideoStreamPlayer.stream_position] setter. */
        /* gdvirtual */ _seek(time: float64): void
        /* gdvirtual */ _setAudioTrack(idx: int64): void
        /* gdvirtual */ _getTexture(): Texture2D
        
        /** Ticks video playback for [param delta] seconds. Called every frame as long as both [method _is_paused] and [method _is_playing] return `true`. */
        /* gdvirtual */ _update(delta: float64): void
        /* gdvirtual */ _getChannels(): int64
        /* gdvirtual */ _getMixRate(): int64
        mixAudio(numFrames: int64, buffer: PackedFloat32Array | float32[] = [], offset: int64 = 0): int64
    }
    /** A control used for video playback.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_videostreamplayer.html  
     */
    class VideoStreamPlayer<Map extends Record<string, Node> = {}> extends Control<Map> {
        constructor(identifier?: any)
        /** Starts the video playback from the beginning. If the video is paused, this will not unpause the video. */
        play(): void
        
        /** Stops the video playback and sets the stream position to 0.  
         *      
         *  **Note:** Although the stream position will be set to 0, the first frame of the video stream won't become the current frame.  
         */
        stop(): void
        isPlaying(): boolean
        getStreamName(): string
        getStreamLength(): float64
        getVideoTexture(): Texture2D
        get audioTrack(): int64
        set audioTrack(value: int64)
        
        /** The assigned video stream. See description for supported formats. */
        get stream(): VideoStream
        set stream(value: VideoStream)
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
        get bufferingMsec(): int64
        set bufferingMsec(value: int64)
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
    class Viewport<Map extends Record<string, Node> = {}> extends Node<Map> {
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
        
        /** Use AMD FidelityFX Super Resolution 1.0 upscaling for the viewport's 3D buffer. The amount of scaling can be set using [member scaling_3d_scale]. Values less than `1.0` will be result in the viewport being upscaled using FSR. Values greater than `1.0` are not supported and bilinear downsampling will be used instead. A value of `1.0` disables scaling. */
        static readonly SCALING_3D_MODE_FSR = 1
        
        /** Use AMD FidelityFX Super Resolution 2.2 upscaling for the viewport's 3D buffer. The amount of scaling can be set using [member Viewport.scaling_3d_scale]. Values less than `1.0` will be result in the viewport being upscaled using FSR2. Values greater than `1.0` are not supported and bilinear downsampling will be used instead. A value of `1.0` will use FSR2 at native resolution as a TAA solution. */
        static readonly SCALING_3D_MODE_FSR2 = 2
        
        /** Use the [url=https://developer.apple.com/documentation/metalfx/mtlfxspatialscaler#overview]MetalFX spatial upscaler[/url] for the viewport's 3D buffer.  
         *  The amount of scaling can be set using [member scaling_3d_scale].  
         *  Values less than `1.0` will be result in the viewport being upscaled using MetalFX. Values greater than `1.0` are not supported and bilinear downsampling will be used instead. A value of `1.0` disables scaling.  
         *  More information: [url=https://developer.apple.com/documentation/metalfx]MetalFX[/url].  
         *      
         *  **Note:** Only supported when the Metal rendering driver is in use, which limits this scaling mode to macOS and iOS.  
         */
        static readonly SCALING_3D_MODE_METALFX_SPATIAL = 3
        
        /** Use the [url=https://developer.apple.com/documentation/metalfx/mtlfxtemporalscaler#overview]MetalFX temporal upscaler[/url] for the viewport's 3D buffer.  
         *  The amount of scaling can be set using [member scaling_3d_scale]. To determine the minimum input scale, use the [method RenderingDevice.limit_get] method with [constant RenderingDevice.LIMIT_METALFX_TEMPORAL_SCALER_MIN_SCALE].  
         *  Values less than `1.0` will be result in the viewport being upscaled using MetalFX. Values greater than `1.0` are not supported and bilinear downsampling will be used instead. A value of `1.0` will use MetalFX at native resolution as a TAA solution.  
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
        
        /** Objects are displayed without textures and only with lighting information. */
        static readonly DEBUG_DRAW_LIGHTING = 2
        
        /** Objects are displayed semi-transparent with additive blending so you can see where they are drawing over top of one another. A higher overdraw means you are wasting performance on drawing pixels that are being hidden behind others. */
        static readonly DEBUG_DRAW_OVERDRAW = 3
        
        /** Objects are displayed as wireframe models.  
         *      
         *  **Note:** [method RenderingServer.set_debug_generate_wireframes] must be called before loading any meshes for wireframes to be visible when using the Compatibility renderer.  
         */
        static readonly DEBUG_DRAW_WIREFRAME = 4
        
        /** Objects are displayed without lighting information and their textures replaced by normal mapping. */
        static readonly DEBUG_DRAW_NORMAL_BUFFER = 5
        
        /** Objects are displayed with only the albedo value from [VoxelGI]s. */
        static readonly DEBUG_DRAW_VOXEL_GI_ALBEDO = 6
        
        /** Objects are displayed with only the lighting value from [VoxelGI]s. */
        static readonly DEBUG_DRAW_VOXEL_GI_LIGHTING = 7
        
        /** Objects are displayed with only the emission color from [VoxelGI]s. */
        static readonly DEBUG_DRAW_VOXEL_GI_EMISSION = 8
        
        /** Draws the shadow atlas that stores shadows from [OmniLight3D]s and [SpotLight3D]s in the upper left quadrant of the [Viewport]. */
        static readonly DEBUG_DRAW_SHADOW_ATLAS = 9
        
        /** Draws the shadow atlas that stores shadows from [DirectionalLight3D]s in the upper left quadrant of the [Viewport]. */
        static readonly DEBUG_DRAW_DIRECTIONAL_SHADOW_ATLAS = 10
        
        /** Draws the scene luminance buffer (if available) in the upper left quadrant of the [Viewport]. */
        static readonly DEBUG_DRAW_SCENE_LUMINANCE = 11
        
        /** Draws the screen-space ambient occlusion texture instead of the scene so that you can clearly see how it is affecting objects. In order for this display mode to work, you must have [member Environment.ssao_enabled] set in your [WorldEnvironment]. */
        static readonly DEBUG_DRAW_SSAO = 12
        
        /** Draws the screen-space indirect lighting texture instead of the scene so that you can clearly see how it is affecting objects. In order for this display mode to work, you must have [member Environment.ssil_enabled] set in your [WorldEnvironment]. */
        static readonly DEBUG_DRAW_SSIL = 13
        
        /** Colors each PSSM split for the [DirectionalLight3D]s in the scene a different color so you can see where the splits are. In order, they will be colored red, green, blue, and yellow. */
        static readonly DEBUG_DRAW_PSSM_SPLITS = 14
        
        /** Draws the decal atlas used by [Decal]s and light projector textures in the upper left quadrant of the [Viewport]. */
        static readonly DEBUG_DRAW_DECAL_ATLAS = 15
        
        /** Draws the cascades used to render signed distance field global illumination (SDFGI).  
         *  Does nothing if the current environment's [member Environment.sdfgi_enabled] is `false` or SDFGI is not supported on the platform.  
         */
        static readonly DEBUG_DRAW_SDFGI = 16
        
        /** Draws the probes used for signed distance field global illumination (SDFGI).  
         *  Does nothing if the current environment's [member Environment.sdfgi_enabled] is `false` or SDFGI is not supported on the platform.  
         */
        static readonly DEBUG_DRAW_SDFGI_PROBES = 17
        
        /** Draws the buffer used for global illumination (GI). */
        static readonly DEBUG_DRAW_GI_BUFFER = 18
        
        /** Draws all of the objects at their highest polycount, without low level of detail (LOD). */
        static readonly DEBUG_DRAW_DISABLE_LOD = 19
        
        /** Draws the cluster used by [OmniLight3D] nodes to optimize light rendering. */
        static readonly DEBUG_DRAW_CLUSTER_OMNI_LIGHTS = 20
        
        /** Draws the cluster used by [SpotLight3D] nodes to optimize light rendering. */
        static readonly DEBUG_DRAW_CLUSTER_SPOT_LIGHTS = 21
        
        /** Draws the cluster used by [Decal] nodes to optimize decal rendering. */
        static readonly DEBUG_DRAW_CLUSTER_DECALS = 22
        
        /** Draws the cluster used by [ReflectionProbe] nodes to optimize decal rendering. */
        static readonly DEBUG_DRAW_CLUSTER_REFLECTION_PROBES = 23
        
        /** Draws the buffer used for occlusion culling. */
        static readonly DEBUG_DRAW_OCCLUDERS = 24
        
        /** Draws vector lines over the viewport to indicate the movement of pixels between frames. */
        static readonly DEBUG_DRAW_MOTION_VECTORS = 25
        
        /** Draws the internal resolution buffer of the scene before post-processing is applied. */
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
        findWorld2D(): World2D
        getStretchTransform(): Transform2D
        getFinalTransform(): Transform2D
        getScreenTransform(): Transform2D
        getVisibleRect(): Rect2
        getRenderInfo(type: Viewport.RenderInfoType, info: Viewport.RenderInfo): int64
        getTexture(): ViewportTexture
        getViewportRid(): Rid
        pushTextInput(text: string): void
        pushInput(event: InputEvent, inLocalCoords: boolean = false): void
        pushUnhandledInput(event: InputEvent, inLocalCoords: boolean = false): void
        notifyMouseEntered(): void
        notifyMouseExited(): void
        getMousePosition(): Vector2
        warpMouse(position: Vector2): void
        updateMouseCursorState(): void
        guiCancelDrag(): void
        guiGetDragData(): any
        guiIsDragging(): boolean
        guiIsDragSuccessful(): boolean
        guiReleaseFocus(): void
        guiGetFocusOwner(): Control
        guiGetHoveredControl(): Control
        _guiRemoveFocusForWindow(_unnamedArg0: Node): void
        setPositionalShadowAtlasQuadrantSubdiv(quadrant: int64, subdiv: Viewport.PositionalShadowAtlasQuadrantSubdiv): void
        getPositionalShadowAtlasQuadrantSubdiv(quadrant: int64): Viewport.PositionalShadowAtlasQuadrantSubdiv
        setInputAsHandled(): void
        isInputHandled(): boolean
        getEmbeddedSubwindows(): GArray
        setCanvasCullMaskBit(layer: int64, enable: boolean): void
        getCanvasCullMaskBit(layer: int64): boolean
        _processPicking(): void
        getAudioListener2D(): AudioListener2D
        getCamera2D(): Camera2D
        findWorld3D(): World3D
        getAudioListener3D(): AudioListener3D
        getCamera3D(): Camera3D
        get disable3D(): boolean
        set disable3D(value: boolean)
        get useXR(): boolean
        set useXR(value: boolean)
        get ownWorld3D(): boolean
        set ownWorld3D(value: boolean)
        get world3D(): World3D
        set world3D(value: World3D)
        get world2D(): World2D
        set world2D(value: World2D)
        get transparentBg(): boolean
        set transparentBg(value: boolean)
        get handleInputLocally(): boolean
        set handleInputLocally(value: boolean)
        get snap2DTransformsToPixel(): boolean
        set snap2DTransformsToPixel(value: boolean)
        get snap2DVerticesToPixel(): boolean
        set snap2DVerticesToPixel(value: boolean)
        get msaa2D(): int64
        set msaa2D(value: int64)
        get msaa3D(): int64
        set msaa3D(value: int64)
        get screenSpaceAA(): int64
        set screenSpaceAA(value: int64)
        get useTaa(): boolean
        set useTaa(value: boolean)
        get useDebanding(): boolean
        set useDebanding(value: boolean)
        get useOcclusionCulling(): boolean
        set useOcclusionCulling(value: boolean)
        get meshLodThreshold(): float64
        set meshLodThreshold(value: float64)
        get debugDraw(): int64
        set debugDraw(value: int64)
        get useHdr2D(): boolean
        set useHdr2D(value: boolean)
        get scaling3DMode(): int64
        set scaling3DMode(value: int64)
        get scaling3DScale(): float64
        set scaling3DScale(value: float64)
        get textureMipmapBias(): float64
        set textureMipmapBias(value: float64)
        get anisotropicFilteringLevel(): int64
        set anisotropicFilteringLevel(value: int64)
        get fsrSharpness(): float64
        set fsrSharpness(value: float64)
        get vrsMode(): int64
        set vrsMode(value: int64)
        get vrsUpdateMode(): int64
        set vrsUpdateMode(value: int64)
        get vrsTexture(): Texture2D
        set vrsTexture(value: Texture2D)
        get canvasItemDefaultTextureFilter(): int64
        set canvasItemDefaultTextureFilter(value: int64)
        get canvasItemDefaultTextureRepeat(): int64
        set canvasItemDefaultTextureRepeat(value: int64)
        get audioListenerEnable2D(): boolean
        set audioListenerEnable2D(value: boolean)
        get audioListenerEnable3D(): boolean
        set audioListenerEnable3D(value: boolean)
        get physicsObjectPicking(): boolean
        set physicsObjectPicking(value: boolean)
        get physicsObjectPickingSort(): boolean
        set physicsObjectPickingSort(value: boolean)
        get physicsObjectPickingFirstOnly(): boolean
        set physicsObjectPickingFirstOnly(value: boolean)
        get guiDisableInput(): boolean
        set guiDisableInput(value: boolean)
        get guiSnapControlsToPixels(): boolean
        set guiSnapControlsToPixels(value: boolean)
        get guiEmbedSubwindows(): boolean
        set guiEmbedSubwindows(value: boolean)
        get sdfOversize(): int64
        set sdfOversize(value: int64)
        get sdfScale(): int64
        set sdfScale(value: int64)
        get positionalShadowAtlasSize(): int64
        set positionalShadowAtlasSize(value: int64)
        get positionalShadowAtlas16Bits(): boolean
        set positionalShadowAtlas16Bits(value: boolean)
        get positionalShadowAtlasQuad0(): int64
        set positionalShadowAtlasQuad0(value: int64)
        get positionalShadowAtlasQuad1(): int64
        set positionalShadowAtlasQuad1(value: int64)
        get positionalShadowAtlasQuad2(): int64
        set positionalShadowAtlasQuad2(value: int64)
        get positionalShadowAtlasQuad3(): int64
        set positionalShadowAtlasQuad3(value: int64)
        get canvasTransform(): Transform2D
        set canvasTransform(value: Transform2D)
        get globalCanvasTransform(): Transform2D
        set globalCanvasTransform(value: Transform2D)
        get canvasCullMask(): int64
        set canvasCullMask(value: int64)
        readonly sizeChanged: Signal<() => void>
        readonly guiFocusChanged: Signal<(node: Control) => void>
    }
    /** Provides the content of a [Viewport] as a dynamic texture.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_viewporttexture.html  
     */
    class ViewportTexture extends Texture2D {
        constructor(identifier?: any)
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
    class VisibleOnScreenEnabler2D<Map extends Record<string, Node> = {}> extends VisibleOnScreenNotifier2D<Map> {
        /** Corresponds to [constant Node.PROCESS_MODE_INHERIT]. */
        static readonly ENABLE_MODE_INHERIT = 0
        
        /** Corresponds to [constant Node.PROCESS_MODE_ALWAYS]. */
        static readonly ENABLE_MODE_ALWAYS = 1
        
        /** Corresponds to [constant Node.PROCESS_MODE_WHEN_PAUSED]. */
        static readonly ENABLE_MODE_WHEN_PAUSED = 2
        constructor(identifier?: any)
        get enableMode(): int64
        set enableMode(value: int64)
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
    class VisibleOnScreenEnabler3D<Map extends Record<string, Node> = {}> extends VisibleOnScreenNotifier3D<Map> {
        /** Corresponds to [constant Node.PROCESS_MODE_INHERIT]. */
        static readonly ENABLE_MODE_INHERIT = 0
        
        /** Corresponds to [constant Node.PROCESS_MODE_ALWAYS]. */
        static readonly ENABLE_MODE_ALWAYS = 1
        
        /** Corresponds to [constant Node.PROCESS_MODE_WHEN_PAUSED]. */
        static readonly ENABLE_MODE_WHEN_PAUSED = 2
        constructor(identifier?: any)
        get enableMode(): int64
        set enableMode(value: int64)
        get enableNodePath(): NodePath
        set enableNodePath(value: NodePath | string)
    }
    /** A rectangular region of 2D space that detects whether it is visible on screen.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visibleonscreennotifier2d.html  
     */
    class VisibleOnScreenNotifier2D<Map extends Record<string, Node> = {}> extends Node2D<Map> {
        constructor(identifier?: any)
        isOnScreen(): boolean
        
        /** The VisibleOnScreenNotifier2D's bounding rectangle. */
        get rect(): Rect2
        set rect(value: Rect2)
        readonly screenEntered: Signal<() => void>
        readonly screenExited: Signal<() => void>
    }
    /** A box-shaped region of 3D space that detects whether it is visible on screen.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visibleonscreennotifier3d.html  
     */
    class VisibleOnScreenNotifier3D<Map extends Record<string, Node> = {}> extends VisualInstance3D<Map> {
        constructor(identifier?: any)
        isOnScreen(): boolean
        
        /** The [VisibleOnScreenNotifier3D]'s bounding box. */
        get aabb(): Aabb
        set aabb(value: Aabb)
        readonly screenEntered: Signal<() => void>
        readonly screenExited: Signal<() => void>
    }
    /** Parent of all visual 3D nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualinstance3d.html  
     */
    class VisualInstance3D<Map extends Record<string, Node> = {}> extends Node3D<Map> {
        constructor(identifier?: any)
        /* gdvirtual */ _getAabb(): Aabb
        setBase(base: Rid): void
        getBase(): Rid
        getInstance(): Rid
        setLayerMaskValue(layerNumber: int64, value: boolean): void
        getLayerMaskValue(layerNumber: int64): boolean
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
        get sortingOffset(): float64
        set sortingOffset(value: float64)
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
        setMode(mode: Shader.Mode): void
        addNode(type: VisualShader.Type, node: VisualShaderNode, position: Vector2, id: int64): void
        getNode(type: VisualShader.Type, id: int64): VisualShaderNode
        setNodePosition(type: VisualShader.Type, id: int64, position: Vector2): void
        getNodePosition(type: VisualShader.Type, id: int64): Vector2
        getNodeList(type: VisualShader.Type): PackedInt32Array
        getValidNodeId(type: VisualShader.Type): int64
        removeNode(type: VisualShader.Type, id: int64): void
        replaceNode(type: VisualShader.Type, id: int64, newClass: StringName): void
        isNodeConnection(type: VisualShader.Type, fromNode: int64, fromPort: int64, toNode: int64, toPort: int64): boolean
        canConnectNodes(type: VisualShader.Type, fromNode: int64, fromPort: int64, toNode: int64, toPort: int64): boolean
        connectNodes(type: VisualShader.Type, fromNode: int64, fromPort: int64, toNode: int64, toPort: int64): GError
        disconnectNodes(type: VisualShader.Type, fromNode: int64, fromPort: int64, toNode: int64, toPort: int64): void
        connectNodesForced(type: VisualShader.Type, fromNode: int64, fromPort: int64, toNode: int64, toPort: int64): void
        getNodeConnections(type: VisualShader.Type): GArray
        attachNodeToFrame(type: VisualShader.Type, id: int64, frame: int64): void
        detachNodeFromFrame(type: VisualShader.Type, id: int64): void
        addVarying(name: string, mode: VisualShader.VaryingMode, type: VisualShader.VaryingType): void
        removeVarying(name: string): void
        hasVarying(name: string): boolean
        _setPreviewShaderParameter(name: string, value: any): void
        _getPreviewShaderParameter(name: string): any
        _hasPreviewShaderParameter(name: string): boolean
        _updateShader(): void
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
        getDefaultInputPort(type: VisualShaderNode.PortType): int64
        _setOutputPortExpanded(port: int64, _unnamedArg1: boolean): void
        _isOutputPortExpanded(_unnamedArg0: int64): boolean
        setInputPortDefaultValue(port: int64, value: any, prevValue: any = <any> {}): void
        getInputPortDefaultValue(port: int64): any
        removeInputPortDefaultValue(port: int64): void
        clearDefaultInputValues(): void
        get outputPortForPreview(): int64
        set outputPortForPreview(value: int64)
        get defaultInputValues(): GArray
        set defaultInputValues(value: GArray)
        get expandedOutputPorts(): GArray
        set expandedOutputPorts(value: GArray)
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
        get billboardType(): int64
        set billboardType(value: int64)
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
        get defaultValueEnabled(): boolean
        set defaultValueEnabled(value: boolean)
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
        get function(): int64
        set function(value: int64)
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
        get defaultValueEnabled(): boolean
        set defaultValueEnabled(value: boolean)
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
        get function(): int64
        set function(value: int64)
        
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
        get cubeMap(): Cubemap | CompressedCubemap | PlaceholderCubemap | TextureCubemapRD
        set cubeMap(value: Cubemap | CompressedCubemap | PlaceholderCubemap | TextureCubemapRD)
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
        get texture(): CurveTexture
        set texture(value: CurveTexture)
    }
    class VisualShaderNodeCurveXyzTexture extends VisualShaderNodeResizableBase {
        constructor(identifier?: any)
        get texture(): any /*CurveXYZTexture*/
        set texture(value: any /*CurveXYZTexture*/)
    }
    /** Virtual class to define custom [VisualShaderNode]s for use in the Visual Shader Editor.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodecustom.html  
     */
    class VisualShaderNodeCustom extends VisualShaderNode {
        constructor(identifier?: any)
        /* gdvirtual */ _getName(): string
        /* gdvirtual */ _getDescription(): string
        /* gdvirtual */ _getCategory(): string
        /* gdvirtual */ _getReturnIconType(): VisualShaderNode.PortType
        /* gdvirtual */ _getInputPortCount(): int64
        /* gdvirtual */ _getInputPortType(port: int64): VisualShaderNode.PortType
        /* gdvirtual */ _getInputPortName(port: int64): string
        /* gdvirtual */ _getInputPortDefaultValue(port: int64): any
        /* gdvirtual */ _getDefaultInputPort(type: VisualShaderNode.PortType): int64
        /* gdvirtual */ _getOutputPortCount(): int64
        /* gdvirtual */ _getOutputPortType(port: int64): VisualShaderNode.PortType
        /* gdvirtual */ _getOutputPortName(port: int64): string
        /* gdvirtual */ _getPropertyCount(): int64
        /* gdvirtual */ _getPropertyName(index: int64): string
        /* gdvirtual */ _getPropertyDefaultIndex(index: int64): int64
        /* gdvirtual */ _getPropertyOptions(index: int64): PackedStringArray
        /* gdvirtual */ _getCode(inputVars: GArray, outputVars: GArray, mode: Shader.Mode, type: VisualShader.Type): string
        /* gdvirtual */ _getFuncCode(mode: Shader.Mode, type: VisualShader.Type): string
        /* gdvirtual */ _getGlobalCode(mode: Shader.Mode): string
        /* gdvirtual */ _isHighend(): boolean
        /* gdvirtual */ _isAvailable(mode: Shader.Mode, type: VisualShader.Type): boolean
        _setInputPortDefaultValue(port: int64, value: any): void
        _setOptionIndex(option: int64, value: int64): void
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
        get opType(): int64
        set opType(value: int64)
        
        /** A derivative function type. See [enum Function] for options. */
        get function(): int64
        set function(value: int64)
        
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
        get function(): int64
        set function(value: int64)
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
        get defaultValueEnabled(): boolean
        set defaultValueEnabled(value: boolean)
        get defaultValue(): float64
        set defaultValue(value: float64)
    }
    /** A frame other visual shader nodes can be attached to for better organization.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodeframe.html  
     */
    class VisualShaderNodeFrame extends VisualShaderNodeResizableBase {
        constructor(identifier?: any)
        addAttachedNode(node: int64): void
        removeAttachedNode(node: int64): void
        
        /** The title of the node. */
        get title(): string
        set title(value: string)
        get tintColorEnabled(): boolean
        set tintColorEnabled(value: boolean)
        get tintColor(): Color
        set tintColor(value: Color)
        
        /** If `true`, the frame will automatically resize to enclose all attached nodes. */
        get autoshrink(): boolean
        set autoshrink(value: boolean)
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
        setInputs(inputs: string): void
        getInputs(): string
        setOutputs(outputs: string): void
        getOutputs(): string
        isValidPortName(name: string): boolean
        addInputPort(id: int64, type: int64, name: string): void
        removeInputPort(id: int64): void
        getInputPortCount(): int64
        hasInputPort(id: int64): boolean
        clearInputPorts(): void
        addOutputPort(id: int64, type: int64, name: string): void
        removeOutputPort(id: int64): void
        getOutputPortCount(): int64
        hasOutputPort(id: int64): boolean
        clearOutputPorts(): void
        setInputPortName(id: int64, name: string): void
        setInputPortType(id: int64, type: int64): void
        setOutputPortName(id: int64, name: string): void
        setOutputPortType(id: int64, type: int64): void
        getFreeInputPortId(): int64
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
        getInputRealName(): string
        get inputName(): StringName
        set inputName(value: StringName)
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
        get function(): int64
        set function(value: int64)
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
        get enumNames(): PackedStringArray
        set enumNames(value: PackedStringArray | string[])
        get defaultValueEnabled(): boolean
        set defaultValueEnabled(value: boolean)
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
        get function(): int64
        set function(value: int64)
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
        get mesh(): Mesh
        set mesh(value: Mesh)
        get useAllSurfaces(): boolean
        set useAllSurfaces(value: boolean)
        get surfaceIndex(): int64
        set surfaceIndex(value: int64)
    }
    /** A visual shader helper node for multiplying position and rotation of particles.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodeparticlemultiplybyaxisangle.html  
     */
    class VisualShaderNodeParticleMultiplyByAxisAngle extends VisualShaderNode {
        constructor(identifier?: any)
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
        get texture(): Texture2D
        set texture(value: Texture2D)
        get textureType(): int64
        set textureType(value: int64)
    }
    /** A 2D texture uniform array to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_visualshadernodetexture2darray.html  
     */
    class VisualShaderNodeTexture2DArray extends VisualShaderNodeSample3D {
        constructor(identifier?: any)
        get textureArray(): Texture2DArray | CompressedTexture2DArray | PlaceholderTexture2DArray | Texture2DArrayRD
        set textureArray(value: Texture2DArray | CompressedTexture2DArray | PlaceholderTexture2DArray | Texture2DArrayRD)
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
        get texture(): Texture3D
        set texture(value: Texture3D)
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
        get textureType(): int64
        set textureType(value: int64)
        get colorDefault(): int64
        set colorDefault(value: int64)
        get textureFilter(): int64
        set textureFilter(value: int64)
        get textureRepeat(): int64
        set textureRepeat(value: int64)
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
        get function(): int64
        set function(value: int64)
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
        get defaultValueEnabled(): boolean
        set defaultValueEnabled(value: boolean)
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
        get function(): int64
        set function(value: int64)
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
        get defaultValueEnabled(): boolean
        set defaultValueEnabled(value: boolean)
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
        get function(): int64
        set function(value: int64)
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
        get varyingName(): StringName
        set varyingName(value: StringName)
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
        get defaultValueEnabled(): boolean
        set defaultValueEnabled(value: boolean)
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
        get defaultValueEnabled(): boolean
        set defaultValueEnabled(value: boolean)
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
        get defaultValueEnabled(): boolean
        set defaultValueEnabled(value: boolean)
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
        get function(): int64
        set function(value: int64)
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
    class VoxelGI<Map extends Record<string, Node> = {}> extends VisualInstance3D<Map> {
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
        bake(fromNode: Node = undefined, createVisualDebug: boolean = false): void
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
        get cameraAttributes(): CameraAttributesPractical | CameraAttributesPhysical
        set cameraAttributes(value: CameraAttributesPractical | CameraAttributesPhysical)
        
        /** The [VoxelGIData] resource that holds the data for this [VoxelGI]. */
        get data(): VoxelGIData
        set data(value: VoxelGIData)
    }
    /** Contains baked voxel global illumination data for use in a [VoxelGI] node.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_voxelgidata.html  
     */
    class VoxelGIData extends Resource {
        constructor(identifier?: any)
        allocate(toCellXform: Transform3D, aabb: Aabb, octreeSize: Vector3, octreeCells: PackedByteArray | byte[] | ArrayBuffer, dataCells: PackedByteArray | byte[] | ArrayBuffer, distanceField: PackedByteArray | byte[] | ArrayBuffer, levelCounts: PackedInt32Array | int32[]): void
        getBounds(): Aabb
        getOctreeSize(): Vector3
        getToCellXform(): Transform3D
        getOctreeCells(): PackedByteArray
        getDataCells(): PackedByteArray
        getLevelCounts(): PackedInt32Array
        get _data(): GDictionary
        set _data(value: GDictionary)
        get dynamicRange(): float64
        set dynamicRange(value: float64)
        
        /** The energy of the indirect lighting and reflections produced by the [VoxelGI] node. Higher values result in brighter indirect lighting. If indirect lighting looks too flat, try decreasing [member propagation] while increasing [member energy] at the same time. See also [member use_two_bounces] which influences the indirect lighting's effective brightness. */
        get energy(): float64
        set energy(value: float64)
        
        /** The normal bias to use for indirect lighting and reflections. Higher values reduce self-reflections visible in non-rough materials, at the cost of more visible light leaking and flatter-looking indirect lighting. To prioritize hiding self-reflections over lighting quality, set [member bias] to `0.0` and [member normal_bias] to a value between `1.0` and `2.0`. */
        get bias(): float64
        set bias(value: float64)
        get normalBias(): float64
        set normalBias(value: float64)
        
        /** The multiplier to use when light bounces off a surface. Higher values result in brighter indirect lighting. If indirect lighting looks too flat, try decreasing [member propagation] while increasing [member energy] at the same time. See also [member use_two_bounces] which influences the indirect lighting's effective brightness. */
        get propagation(): float64
        set propagation(value: float64)
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
        createServer(channelsConfig: GArray = []): GError
        createClient(peerId: int64, channelsConfig: GArray = []): GError
        createMesh(peerId: int64, channelsConfig: GArray = []): GError
        addPeer(peer: any /*WebRTCPeerConnection*/, peerId: int64, unreliableLifetime: int64 = 1): GError
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
        initialize(configuration: GDictionary = new GDictionary()): GError
        createDataChannel(label: string, options: GDictionary = new GDictionary()): any /*WebRTCDataChannel*/
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
        readonly dataChannelReceived: Signal<(channel: any /*WebRTCDataChannel*/) => void>
    }
    class WebRtcPeerConnectionExtension extends WebRtcPeerConnection {
        constructor(identifier?: any)
        /* gdvirtual */ _getConnectionState(): WebRtcPeerConnection.ConnectionState
        /* gdvirtual */ _getGatheringState(): WebRtcPeerConnection.GatheringState
        /* gdvirtual */ _getSignalingState(): WebRtcPeerConnection.SignalingState
        /* gdvirtual */ _initialize(pConfig: GDictionary): GError
        /* gdvirtual */ _createDataChannel(pLabel: string, pConfig: GDictionary): any /*WebRTCDataChannel*/
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
        createClient(url: string, tlsClientOptions: any /*TLSOptions*/ = undefined): GError
        createServer(port: int64, bindAddress: string = '*', tlsServerOptions: any /*TLSOptions*/ = undefined): GError
        getPeer(peerId: int64): WebSocketPeer
        getPeerAddress(id: int64): string
        getPeerPort(id: int64): int64
        get supportedProtocols(): PackedStringArray
        set supportedProtocols(value: PackedStringArray | string[])
        get handshakeHeaders(): PackedStringArray
        set handshakeHeaders(value: PackedStringArray | string[])
        get inboundBufferSize(): int64
        set inboundBufferSize(value: int64)
        get outboundBufferSize(): int64
        set outboundBufferSize(value: int64)
        get handshakeTimeout(): float64
        set handshakeTimeout(value: float64)
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
        connectToUrl(url: string, tlsClientOptions: any /*TLSOptions*/ = undefined): GError
        acceptStream(stream: StreamPeer): GError
        
        /** Sends the given [param message] using the desired [param write_mode]. When sending a [String], prefer using [method send_text]. */
        send(message: PackedByteArray | byte[] | ArrayBuffer, writeMode: WebSocketPeer.WriteMode = 1): GError
        sendText(message: string): GError
        wasStringPacket(): boolean
        
        /** Updates the connection state and receive incoming packets. Call this function regularly to keep it in a clean state. */
        poll(): void
        
        /** Closes this WebSocket connection. [param code] is the status code for the closure (see RFC 6455 section 7.4 for a list of valid status codes). [param reason] is the human readable reason for closing the connection (can be any UTF-8 string that's smaller than 123 bytes). If [param code] is negative, the connection will be closed immediately without notifying the remote peer.  
         *      
         *  **Note:** To achieve a clean close, you will need to keep polling until [constant STATE_CLOSED] is reached.  
         *      
         *  **Note:** The Web export might not support all status codes. Please refer to browser-specific documentation for more details.  
         */
        close(code: int64 = 1000, reason: string = ''): void
        getConnectedHost(): string
        getConnectedPort(): int64
        getSelectedProtocol(): string
        getRequestedUrl(): string
        setNoDelay(enabled: boolean): void
        getCurrentOutboundBufferedAmount(): int64
        getReadyState(): WebSocketPeer.State
        getCloseCode(): int64
        getCloseReason(): string
        get supportedProtocols(): PackedStringArray
        set supportedProtocols(value: PackedStringArray | string[])
        get handshakeHeaders(): PackedStringArray
        set handshakeHeaders(value: PackedStringArray | string[])
        get inboundBufferSize(): int64
        set inboundBufferSize(value: int64)
        get outboundBufferSize(): int64
        set outboundBufferSize(value: int64)
        get maxQueuedPackets(): int64
        set maxQueuedPackets(value: int64)
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
        isSessionSupported(sessionMode: string): void
        isInputSourceActive(inputSourceId: int64): boolean
        getInputSourceTracker(inputSourceId: int64): XRControllerTracker
        getInputSourceTargetRayMode(inputSourceId: int64): WebXRInterface.TargetRayMode
        getDisplayRefreshRate(): float64
        setDisplayRefreshRate(refreshRate: float64): void
        getAvailableDisplayRefreshRates(): GArray
        get sessionMode(): string
        set sessionMode(value: string)
        get requiredFeatures(): string
        set requiredFeatures(value: string)
        get optionalFeatures(): string
        set optionalFeatures(value: string)
        get requestedReferenceSpaceTypes(): string
        set requestedReferenceSpaceTypes(value: string)
        get referenceSpaceType(): string
        set referenceSpaceType(value: string)
        get enabledFeatures(): string
        set enabledFeatures(value: string)
        get visibilityState(): string
        set visibilityState(value: string)
        readonly sessionSupported: Signal<(sessionMode: string, supported: boolean) => void>
        readonly sessionStarted: Signal<() => void>
        readonly sessionEnded: Signal<() => void>
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
        readonly visibilityStateChanged: Signal<() => void>
        readonly referenceSpaceReset: Signal<() => void>
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
            FlagMax = 10,
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
    class Window<Map extends Record<string, Node> = {}> extends Viewport<Map> {
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
        
        /** Max value of the [enum Flags]. */
        static readonly FLAG_MAX = 10
        
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
        /* gdvirtual */ _getContentsMinimumSize(): Vector2
        getWindowId(): int64
        moveToCenter(): void
        resetSize(): void
        getPositionWithDecorations(): Vector2I
        getSizeWithDecorations(): Vector2I
        setFlag(flag: Window.Flags, enabled: boolean): void
        getFlag(flag: Window.Flags): boolean
        isMaximizeAllowed(): boolean
        requestAttention(): void
        moveToForeground(): void
        
        /** Hides the window. This is not the same as minimized state. Hidden window can't be interacted with and needs to be made visible with [method show]. */
        hide(): void
        
        /** Makes the [Window] appear. This enables interactions with the [Window] and doesn't change any of its property other than visibility (unlike e.g. [method popup]). */
        show(): void
        setUnparentWhenInvisible(unparent: boolean): void
        canDraw(): boolean
        hasFocus(): boolean
        grabFocus(): void
        startDrag(): void
        startResize(edge: DisplayServer.WindowResizeEdge): void
        setImeActive(active: boolean): void
        setImePosition(position: Vector2I): void
        isEmbedded(): boolean
        getContentsMinimumSize(): Vector2
        setUseFontOversampling(enable: boolean): void
        isUsingFontOversampling(): boolean
        childControlsChanged(): void
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
        setLayoutDirection(direction: Window.LayoutDirection): void
        getLayoutDirection(): Window.LayoutDirection
        isLayoutRtl(): boolean
        
        /** Shows the [Window] and makes it transient (see [member transient]). If [param rect] is provided, it will be set as the [Window]'s size. Fails if called on the main window.  
         *  If [member ProjectSettings.display/window/subwindows/embed_subwindows] is `true` (single-window mode), [param rect]'s coordinates are global and relative to the main window's top-left corner (excluding window decorations). If [param rect]'s position coordinates are negative, the window will be located outside the main window and may not be visible as a result.  
         *  If [member ProjectSettings.display/window/subwindows/embed_subwindows] is `false` (multi-window mode), [param rect]'s coordinates are global and relative to the top-left corner of the leftmost screen. If [param rect]'s position coordinates are negative, the window will be placed at the top-left corner of the screen.  
         *      
         *  **Note:** [param rect] must be in global coordinates if specified.  
         */
        popup(rect: Rect2I = <any> {} /*compound.type from TypeRect2I ([object Object])*/): void
        popupOnParent(parentRect: Rect2I): void
        popupCentered(minsize: Vector2I = <any> {} /*compound.type from TypeVector2I ([object Object])*/): void
        popupCenteredRatio(ratio: float64 = 0.8): void
        popupCenteredClamped(minsize: Vector2I = <any> {} /*compound.type from TypeVector2I ([object Object])*/, fallbackRatio: float64 = 0.75): void
        popupExclusive(fromNode: Node, rect: Rect2I = <any> {} /*compound.type from TypeRect2I ([object Object])*/): void
        popupExclusiveOnParent(fromNode: Node, parentRect: Rect2I): void
        popupExclusiveCentered(fromNode: Node, minsize: Vector2I = <any> {} /*compound.type from TypeVector2I ([object Object])*/): void
        popupExclusiveCenteredRatio(fromNode: Node, ratio: float64 = 0.8): void
        popupExclusiveCenteredClamped(fromNode: Node, minsize: Vector2I = <any> {} /*compound.type from TypeVector2I ([object Object])*/, fallbackRatio: float64 = 0.75): void
        
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
        get currentScreen(): int64
        set currentScreen(value: int64)
        get mousePassthroughPolygon(): PackedVector2Array
        set mousePassthroughPolygon(value: PackedVector2Array | Vector2[])
        
        /** If `true`, the window is visible. */
        get visible(): boolean
        set visible(value: boolean)
        get wrapControls(): boolean
        set wrapControls(value: boolean)
        
        /** If `true`, the [Window] is transient, i.e. it's considered a child of another [Window]. The transient window will be destroyed with its transient parent and will return focus to their parent when closed. The transient window is displayed on top of a non-exclusive full-screen parent window. Transient windows can't enter full-screen mode.  
         *  Note that behavior might be different depending on the platform.  
         */
        get transient(): boolean
        set transient(value: boolean)
        get transientToFocused(): boolean
        set transientToFocused(value: boolean)
        
        /** If `true`, the [Window] will be in exclusive mode. Exclusive windows are always on top of their parent and will block all input going to the parent [Window].  
         *  Needs [member transient] enabled to work.  
         */
        get exclusive(): boolean
        set exclusive(value: boolean)
        
        /** If `true`, the window can't be resized. Minimize and maximize buttons are disabled. */
        get unresizable(): boolean
        set unresizable(value: boolean)
        
        /** If `true`, the window will have no borders. */
        get borderless(): boolean
        set borderless(value: boolean)
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
        get popupWindow(): boolean
        set popupWindow(value: boolean)
        get extendToTitle(): boolean
        set extendToTitle(value: boolean)
        get mousePassthrough(): boolean
        set mousePassthrough(value: boolean)
        get sharpCorners(): boolean
        set sharpCorners(value: boolean)
        get excludeFromCapture(): boolean
        set excludeFromCapture(value: boolean)
        get forceNative(): boolean
        set forceNative(value: boolean)
        get minSize(): Vector2I
        set minSize(value: Vector2I)
        get maxSize(): Vector2I
        set maxSize(value: Vector2I)
        get keepTitleVisible(): boolean
        set keepTitleVisible(value: boolean)
        get contentScaleSize(): Vector2I
        set contentScaleSize(value: Vector2I)
        get contentScaleMode(): int64
        set contentScaleMode(value: int64)
        get contentScaleAspect(): int64
        set contentScaleAspect(value: int64)
        get contentScaleStretch(): int64
        set contentScaleStretch(value: int64)
        get contentScaleFactor(): float64
        set contentScaleFactor(value: float64)
        get autoTranslate(): boolean
        set autoTranslate(value: boolean)
        
        /** The [Theme] resource this node and all its [Control] and [Window] children use. If a child node has its own [Theme] resource set, theme items are merged with child's definitions having higher priority.  
         *      
         *  **Note:** [Window] styles will have no effect unless the window is embedded.  
         */
        get theme(): Theme
        set theme(value: Theme)
        get themeTypeVariation(): string
        set themeTypeVariation(value: string)
        readonly windowInput: Signal<(event: InputEvent) => void>
        readonly filesDropped: Signal<(files: PackedStringArray | string[]) => void>
        readonly mouseEntered: Signal<() => void>
        readonly mouseExited: Signal<() => void>
        readonly focusEntered: Signal<() => void>
        readonly focusExited: Signal<() => void>
        readonly closeRequested: Signal<() => void>
        readonly goBackRequested: Signal<() => void>
        readonly visibilityChanged: Signal<() => void>
        readonly aboutToPopup: Signal<() => void>
        readonly themeChanged: Signal<() => void>
        readonly dpiChanged: Signal<() => void>
        readonly titlebarChanged: Signal<() => void>
        readonly titleChanged: Signal<() => void>
    }
    /** A resource that holds all components of a 2D world, such as a canvas and a physics space.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_world2d.html  
     */
    class World2D extends Resource {
        constructor(identifier?: any)
        /** The [RID] of this world's canvas resource. Used by the [RenderingServer] for 2D drawing. */
        get canvas(): Rid
        set canvas(value: Rid)
        
        /** The [RID] of this world's physics space resource. Used by the [PhysicsServer2D] for 2D physics, treating it as both a space and an area. */
        get space(): Rid
        set space(value: Rid)
        get navigationMap(): Rid
        set navigationMap(value: Rid)
        get directSpaceState(): PhysicsDirectSpaceState2D
        set directSpaceState(value: PhysicsDirectSpaceState2D)
    }
    /** A resource that holds all components of a 3D world, such as a visual scenario and a physics space.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_world3d.html  
     */
    class World3D extends Resource {
        constructor(identifier?: any)
        /** The World3D's [Environment]. */
        get environment(): Environment
        set environment(value: Environment)
        get fallbackEnvironment(): Environment
        set fallbackEnvironment(value: Environment)
        get cameraAttributes(): CameraAttributesPractical | CameraAttributesPhysical
        set cameraAttributes(value: CameraAttributesPractical | CameraAttributesPhysical)
        
        /** The World3D's physics space. */
        get space(): Rid
        set space(value: Rid)
        get navigationMap(): Rid
        set navigationMap(value: Rid)
        
        /** The World3D's visual scenario. */
        get scenario(): Rid
        set scenario(value: Rid)
        get directSpaceState(): PhysicsDirectSpaceState3D
        set directSpaceState(value: PhysicsDirectSpaceState3D)
    }
    /** A 2D world boundary (half-plane) shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_worldboundaryshape2d.html  
     */
    class WorldBoundaryShape2D extends Shape2D {
        constructor(identifier?: any)
        /** The line's normal, typically a unit vector. Its direction indicates the non-colliding half-plane. Can be of any length but zero. Defaults to [constant Vector2.UP]. */
        get normal(): Vector2
        set normal(value: Vector2)
        
        /** The distance from the origin to the line, expressed in terms of [member normal] (according to its direction and magnitude). Actual absolute distance from the origin to the line can be calculated as `abs(distance) / normal.length()`.  
         *  In the scalar equation of the line `ax + by = d`, this is `d`, while the `(a, b)` coordinates are represented by the [member normal] property.  
         */
        get distance(): float64
        set distance(value: float64)
    }
    /** A 3D world boundary (half-space) shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_worldboundaryshape3d.html  
     */
    class WorldBoundaryShape3D extends Shape3D {
        constructor(identifier?: any)
        /** The [Plane] used by the [WorldBoundaryShape3D] for collision. */
        get plane(): Plane
        set plane(value: Plane)
    }
    /** Default environment properties for the entire scene (post-processing effects, lighting and background settings).  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_worldenvironment.html  
     */
    class WorldEnvironment<Map extends Record<string, Node> = {}> extends Node<Map> {
        constructor(identifier?: any)
        /** The [Environment] resource used by this [WorldEnvironment], defining the default properties. */
        get environment(): Environment
        set environment(value: Environment)
        get cameraAttributes(): CameraAttributesPractical | CameraAttributesPhysical
        set cameraAttributes(value: CameraAttributesPractical | CameraAttributesPhysical)
        
        /** The default [Compositor] resource to use if none set on the [Camera3D]. */
        get compositor(): Compositor
        set compositor(value: Compositor)
    }
    /** An X509 certificate (e.g. for TLS).  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_x509certificate.html  
     */
    class X509Certificate extends Resource {
        constructor(identifier?: any)
        /** Saves a certificate to the given [param path] (should be a "*.crt" file). */
        save(path: string): GError
        
        /** Loads a certificate from [param path] ("*.crt" file). */
        load(path: string): GError
        saveToString(): string
        loadFromString(string_: string): GError
    }
    namespace XmlParser {
        enum NodeType {
            NodeNone = 0,
            NodeElement = 1,
            NodeElementEnd = 2,
            NodeText = 3,
            NodeComment = 4,
            NodeCdata = 5,
            NodeUnknown = 6,
        }
    }
    class XmlParser extends RefCounted {
        static readonly NODE_NONE = 0
        static readonly NODE_ELEMENT = 1
        static readonly NODE_ELEMENT_END = 2
        static readonly NODE_TEXT = 3
        static readonly NODE_COMMENT = 4
        static readonly NODE_CDATA = 5
        static readonly NODE_UNKNOWN = 6
        constructor(identifier?: any)
        read(): GError
        getNodeType(): XmlParser.NodeType
        getNodeName(): string
        getNodeData(): string
        getNodeOffset(): int64
        getAttributeCount(): int64
        getAttributeName(idx: int64): string
        getAttributeValue(idx: int64): string
        hasAttribute(name: string): boolean
        getNamedAttributeValue(name: string): string
        getNamedAttributeValueSafe(name: string): string
        isEmpty(): boolean
        getCurrentLine(): int64
        skipSection(): void
        seek(position: int64): GError
        open(file: string): GError
        openBuffer(buffer: PackedByteArray | byte[] | ArrayBuffer): GError
    }
    /** An anchor point in AR space.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_xranchor3d.html  
     */
    class XRAnchor3D<Map extends Record<string, Node> = {}> extends XRNode3D<Map> {
        constructor(identifier?: any)
        getSize(): Vector3
        getPlane(): Plane
    }
    namespace XRBodyModifier3D {
        enum BodyUpdate {
            BodyUpdateUpperBody = 1,
            BodyUpdateLowerBody = 2,
            BodyUpdateHands = 4,
        }
        enum BoneUpdate {
            BoneUpdateFull = 0,
            BoneUpdateRotationOnly = 1,
            BoneUpdateMax = 2,
        }
    }
    /** A node for driving body meshes from [XRBodyTracker] data.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_xrbodymodifier3d.html  
     */
    class XRBodyModifier3D<Map extends Record<string, Node> = {}> extends SkeletonModifier3D<Map> {
        /** The skeleton's upper body joints are updated. */
        static readonly BODY_UPDATE_UPPER_BODY = 1
        
        /** The skeleton's lower body joints are updated. */
        static readonly BODY_UPDATE_LOWER_BODY = 2
        
        /** The skeleton's hand joints are updated. */
        static readonly BODY_UPDATE_HANDS = 4
        
        /** The skeleton's bones are fully updated (both position and rotation) to match the tracked bones. */
        static readonly BONE_UPDATE_FULL = 0
        
        /** The skeleton's bones are only rotated to align with the tracked bones, preserving bone length. */
        static readonly BONE_UPDATE_ROTATION_ONLY = 1
        
        /** Represents the size of the [enum BoneUpdate] enum. */
        static readonly BONE_UPDATE_MAX = 2
        constructor(identifier?: any)
        get bodyTracker(): string
        set bodyTracker(value: string)
        get bodyUpdate(): int64
        set bodyUpdate(value: int64)
        get boneUpdate(): int64
        set boneUpdate(value: int64)
    }
}
