// AUTO-GENERATED
/// <reference no-default-lib="true"/>
declare module "godot" {
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
        setGlowLevel(idx: int64, intensity: float64): void
        getGlowLevel(idx: int64): float64
        get backgroundMode(): int64
        set backgroundMode(value: int64)
        get backgroundColor(): Color
        set backgroundColor(value: Color)
        get backgroundEnergyMultiplier(): float64
        set backgroundEnergyMultiplier(value: float64)
        get backgroundIntensity(): float64
        set backgroundIntensity(value: float64)
        get backgroundCanvasMaxLayer(): int64
        set backgroundCanvasMaxLayer(value: int64)
        get backgroundCameraFeedId(): int64
        set backgroundCameraFeedId(value: int64)
        
        /** The [Sky] resource used for this [Environment]. */
        get sky(): Sky
        set sky(value: Sky)
        get skyCustomFov(): float64
        set skyCustomFov(value: float64)
        get skyRotation(): Vector3
        set skyRotation(value: Vector3)
        get ambientLightSource(): int64
        set ambientLightSource(value: int64)
        get ambientLightColor(): Color
        set ambientLightColor(value: Color)
        get ambientLightSkyContribution(): float64
        set ambientLightSkyContribution(value: float64)
        get ambientLightEnergy(): float64
        set ambientLightEnergy(value: float64)
        get reflectedLightSource(): int64
        set reflectedLightSource(value: int64)
        get tonemapMode(): int64
        set tonemapMode(value: int64)
        get tonemapExposure(): float64
        set tonemapExposure(value: float64)
        get tonemapWhite(): float64
        set tonemapWhite(value: float64)
        get ssrEnabled(): boolean
        set ssrEnabled(value: boolean)
        get ssrMaxSteps(): int64
        set ssrMaxSteps(value: int64)
        get ssrFadeIn(): float64
        set ssrFadeIn(value: float64)
        get ssrFadeOut(): float64
        set ssrFadeOut(value: float64)
        get ssrDepthTolerance(): float64
        set ssrDepthTolerance(value: float64)
        get ssaoEnabled(): boolean
        set ssaoEnabled(value: boolean)
        get ssaoRadius(): float64
        set ssaoRadius(value: float64)
        get ssaoIntensity(): float64
        set ssaoIntensity(value: float64)
        get ssaoPower(): float64
        set ssaoPower(value: float64)
        get ssaoDetail(): float64
        set ssaoDetail(value: float64)
        get ssaoHorizon(): float64
        set ssaoHorizon(value: float64)
        get ssaoSharpness(): float64
        set ssaoSharpness(value: float64)
        get ssaoLightAffect(): float64
        set ssaoLightAffect(value: float64)
        get ssaoAOChannelAffect(): float64
        set ssaoAOChannelAffect(value: float64)
        get ssilEnabled(): boolean
        set ssilEnabled(value: boolean)
        get ssilRadius(): float64
        set ssilRadius(value: float64)
        get ssilIntensity(): float64
        set ssilIntensity(value: float64)
        get ssilSharpness(): float64
        set ssilSharpness(value: float64)
        get ssilNormalRejection(): float64
        set ssilNormalRejection(value: float64)
        get sdfgiEnabled(): boolean
        set sdfgiEnabled(value: boolean)
        get sdfgiUseOcclusion(): boolean
        set sdfgiUseOcclusion(value: boolean)
        get sdfgiReadSkyLight(): boolean
        set sdfgiReadSkyLight(value: boolean)
        get sdfgiBounceFeedback(): float64
        set sdfgiBounceFeedback(value: float64)
        get sdfgiCascades(): int64
        set sdfgiCascades(value: int64)
        get sdfgiMinCellSize(): float64
        set sdfgiMinCellSize(value: float64)
        get sdfgiCascade0Distance(): float64
        set sdfgiCascade0Distance(value: float64)
        get sdfgiMaxDistance(): float64
        set sdfgiMaxDistance(value: float64)
        get sdfgiYScale(): int64
        set sdfgiYScale(value: int64)
        get sdfgiEnergy(): float64
        set sdfgiEnergy(value: float64)
        get sdfgiNormalBias(): float64
        set sdfgiNormalBias(value: float64)
        get sdfgiProbeBias(): float64
        set sdfgiProbeBias(value: float64)
        get glowEnabled(): boolean
        set glowEnabled(value: boolean)
        get "glowLevels/1"(): float64
        set "glowLevels/1"(value: float64)
        get "glowLevels/2"(): float64
        set "glowLevels/2"(value: float64)
        get "glowLevels/3"(): float64
        set "glowLevels/3"(value: float64)
        get "glowLevels/4"(): float64
        set "glowLevels/4"(value: float64)
        get "glowLevels/5"(): float64
        set "glowLevels/5"(value: float64)
        get "glowLevels/6"(): float64
        set "glowLevels/6"(value: float64)
        get "glowLevels/7"(): float64
        set "glowLevels/7"(value: float64)
        get glowNormalized(): boolean
        set glowNormalized(value: boolean)
        get glowIntensity(): float64
        set glowIntensity(value: float64)
        get glowStrength(): float64
        set glowStrength(value: float64)
        get glowMix(): float64
        set glowMix(value: float64)
        get glowBloom(): float64
        set glowBloom(value: float64)
        get glowBlendMode(): int64
        set glowBlendMode(value: int64)
        get glowHdrThreshold(): float64
        set glowHdrThreshold(value: float64)
        get glowHdrScale(): float64
        set glowHdrScale(value: float64)
        get glowHdrLuminanceCap(): float64
        set glowHdrLuminanceCap(value: float64)
        get glowMapStrength(): float64
        set glowMapStrength(value: float64)
        get glowMap(): Texture2D
        set glowMap(value: Texture2D)
        get fogEnabled(): boolean
        set fogEnabled(value: boolean)
        get fogMode(): int64
        set fogMode(value: int64)
        get fogLightColor(): Color
        set fogLightColor(value: Color)
        get fogLightEnergy(): float64
        set fogLightEnergy(value: float64)
        get fogSunScatter(): float64
        set fogSunScatter(value: float64)
        get fogDensity(): float64
        set fogDensity(value: float64)
        get fogAerialPerspective(): float64
        set fogAerialPerspective(value: float64)
        get fogSkyAffect(): float64
        set fogSkyAffect(value: float64)
        get fogHeight(): float64
        set fogHeight(value: float64)
        get fogHeightDensity(): float64
        set fogHeightDensity(value: float64)
        get fogDepthCurve(): float64
        set fogDepthCurve(value: float64)
        get fogDepthBegin(): float64
        set fogDepthBegin(value: float64)
        get fogDepthEnd(): float64
        set fogDepthEnd(value: float64)
        get volumetricFogEnabled(): boolean
        set volumetricFogEnabled(value: boolean)
        get volumetricFogDensity(): float64
        set volumetricFogDensity(value: float64)
        get volumetricFogAlbedo(): Color
        set volumetricFogAlbedo(value: Color)
        get volumetricFogEmission(): Color
        set volumetricFogEmission(value: Color)
        get volumetricFogEmissionEnergy(): float64
        set volumetricFogEmissionEnergy(value: float64)
        get volumetricFogGIInject(): float64
        set volumetricFogGIInject(value: float64)
        get volumetricFogAnisotropy(): float64
        set volumetricFogAnisotropy(value: float64)
        get volumetricFogLength(): float64
        set volumetricFogLength(value: float64)
        get volumetricFogDetailSpread(): float64
        set volumetricFogDetailSpread(value: float64)
        get volumetricFogAmbientInject(): float64
        set volumetricFogAmbientInject(value: float64)
        get volumetricFogSkyAffect(): float64
        set volumetricFogSkyAffect(value: float64)
        get volumetricFogTemporalReprojectionEnabled(): boolean
        set volumetricFogTemporalReprojectionEnabled(value: boolean)
        get volumetricFogTemporalReprojectionAmount(): float64
        set volumetricFogTemporalReprojectionAmount(value: float64)
        get adjustmentEnabled(): boolean
        set adjustmentEnabled(value: boolean)
        get adjustmentBrightness(): float64
        set adjustmentBrightness(value: float64)
        get adjustmentContrast(): float64
        set adjustmentContrast(value: float64)
        get adjustmentSaturation(): float64
        set adjustmentSaturation(value: float64)
        get adjustmentColorCorrection(): Texture2D | Texture3D
        set adjustmentColorCorrection(value: Texture2D | Texture3D)
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
        parse(expression: string, inputNames: PackedStringArray | string[] = []): GError
        
        /** Executes the expression that was previously parsed by [method parse] and returns the result. Before you use the returned object, you should check if the method failed by calling [method has_execute_failed].  
         *  If you defined input variables in [method parse], you can specify their values in the inputs array, in the same order.  
         */
        execute(inputs: GArray = [], baseInstance: GObject = undefined, showError: boolean = true, constCallsOnly: boolean = false): any
        hasExecuteFailed(): boolean
        getErrorText(): string
    }
    /** Texture which displays the content of an external buffer.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_externaltexture.html  
     */
    class ExternalTexture extends Texture2D {
        constructor(identifier?: any)
        getExternalTextureId(): int64
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
        get fractalType(): int64
        set fractalType(value: int64)
        get fractalOctaves(): int64
        set fractalOctaves(value: int64)
        get fractalLacunarity(): float64
        set fractalLacunarity(value: float64)
        get fractalGain(): float64
        set fractalGain(value: float64)
        get fractalWeightedStrength(): float64
        set fractalWeightedStrength(value: float64)
        get fractalPingPongStrength(): float64
        set fractalPingPongStrength(value: float64)
        get cellularDistanceFunction(): int64
        set cellularDistanceFunction(value: int64)
        get cellularJitter(): float64
        set cellularJitter(value: float64)
        get cellularReturnType(): int64
        set cellularReturnType(value: int64)
        get domainWarpEnabled(): boolean
        set domainWarpEnabled(value: boolean)
        get domainWarpType(): int64
        set domainWarpType(value: int64)
        get domainWarpAmplitude(): float64
        set domainWarpAmplitude(value: float64)
        get domainWarpFrequency(): float64
        set domainWarpFrequency(value: float64)
        get domainWarpFractalType(): int64
        set domainWarpFractalType(value: int64)
        get domainWarpFractalOctaves(): int64
        set domainWarpFractalOctaves(value: int64)
        get domainWarpFractalLacunarity(): float64
        set domainWarpFractalLacunarity(value: float64)
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
        static open(path: string, flags: FileAccess.ModeFlags): FileAccess
        static openEncrypted(path: string, modeFlags: FileAccess.ModeFlags, key: PackedByteArray | byte[] | ArrayBuffer, iV: PackedByteArray | byte[] | ArrayBuffer = []): FileAccess
        static openEncryptedWithPass(path: string, modeFlags: FileAccess.ModeFlags, pass: string): FileAccess
        static openCompressed(path: string, modeFlags: FileAccess.ModeFlags, compressionMode: FileAccess.CompressionMode = 0): FileAccess
        static getOpenError(): GError
        static createTemp(modeFlags: int64, prefix: string = '', extension: string = '', keep: boolean = false): FileAccess
        static getFileAsBytes(path: string): PackedByteArray
        static getFileAsString(path: string): string
        
        /** Resizes the file to a specified length. The file must be open in a mode that permits writing. If the file is extended, NUL characters are appended. If the file is truncated, all data from the end file to the original length of the file is lost. */
        resize(length: int64): GError
        
        /** Writes the file's buffer to disk. Flushing is automatically performed when the file is closed. This means you don't need to call [method flush] manually before closing a file. Still, calling [method flush] can be used to ensure the data is safe even if the project crashes instead of being closed gracefully.  
         *      
         *  **Note:** Only call [method flush] when you actually need it. Otherwise, it will decrease performance due to constant disk writes.  
         */
        flush(): void
        getPath(): string
        getPathAbsolute(): string
        isOpen(): boolean
        
        /** Changes the file reading/writing cursor to the specified position (in bytes from the beginning of the file). */
        seek(position: int64): void
        seekEnd(position: int64 = 0): void
        getPosition(): int64
        getLength(): int64
        eofReached(): boolean
        get8(): int64
        get16(): int64
        get32(): int64
        get64(): int64
        getHalf(): float64
        getFloat(): float64
        getDouble(): float64
        getReal(): float64
        getBuffer(length: int64): PackedByteArray
        getLine(): string
        getCsvLine(delim: string = ','): PackedStringArray
        getAsText(skipCr: boolean = false): string
        static getMd5(path: string): string
        static getSha256(path: string): string
        getError(): GError
        getVar(allowObjects: boolean = false): any
        store8(value: int64): boolean
        store16(value: int64): boolean
        store32(value: int64): boolean
        store64(value: int64): boolean
        storeHalf(value: float64): boolean
        storeFloat(value: float64): boolean
        storeDouble(value: float64): boolean
        storeReal(value: float64): boolean
        storeBuffer(buffer: PackedByteArray | byte[] | ArrayBuffer): boolean
        storeLine(line: string): boolean
        storeCsvLine(values: PackedStringArray | string[], delim: string = ','): boolean
        storeString(string_: string): boolean
        storeVar(value: any, fullObjects: boolean = false): boolean
        storePascalString(string_: string): boolean
        getPascalString(): string
        
        /** Closes the currently opened file and prevents subsequent read/write operations. Use [method flush] to persist the data to disk without closing the file.  
         *      
         *  **Note:** [FileAccess] will automatically close when it's freed, which happens when it goes out of scope or when it gets assigned with `null`. In C# the reference must be disposed after we are done using it, this can be done with the `using` statement or calling the `Dispose` method directly.  
         */
        close(): void
        static fileExists(path: string): boolean
        static getModifiedTime(file: string): int64
        static getUnixPermissions(file: string): FileAccess.UnixPermissionFlags
        static setUnixPermissions(file: string, permissions: FileAccess.UnixPermissionFlags): GError
        static getHiddenAttribute(file: string): boolean
        static setHiddenAttribute(file: string, hidden: boolean): GError
        static setReadOnlyAttribute(file: string, ro: boolean): GError
        static getReadOnlyAttribute(file: string): boolean
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
    class FileDialog<Map extends Record<string, Node> = {}> extends ConfirmationDialog<Map> {
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
        clearFilters(): void
        addFilter(filter: string, description: string = ''): void
        clearFileNameFilter(): void
        getOptionName(option: int64): string
        getOptionValues(option: int64): PackedStringArray
        getOptionDefault(option: int64): int64
        setOptionName(option: int64, name: string): void
        setOptionValues(option: int64, values: PackedStringArray | string[]): void
        setOptionDefault(option: int64, defaultValueIndex: int64): void
        addOption(name: string, values: PackedStringArray | string[], defaultValueIndex: int64): void
        getSelectedOptions(): GDictionary
        getVBox(): VBoxContainer
        getLineEdit(): LineEdit
        deselectAll(): void
        
        /** Invalidate and update the current dialog content list.  
         *      
         *  **Note:** This method does nothing on native file dialogs.  
         */
        invalidate(): void
        get modeOverridesTitle(): boolean
        set modeOverridesTitle(value: boolean)
        get fileMode(): int64
        set fileMode(value: int64)
        
        /** The file system access scope. See [enum Access] constants.  
         *  **Warning:** In Web builds, FileDialog cannot access the host file system. In sandboxed Linux and macOS environments, [member use_native_dialog] is automatically used to allow limited access to host file system.  
         */
        get access(): int64
        set access(value: int64)
        get rootSubfolder(): string
        set rootSubfolder(value: string)
        
        /** The available file type filters. Each filter string in the array should be formatted like this: `*.png,*.jpg,*.jpeg;Image Files;image/png,image/jpeg`. The description text of the filter is optional and can be omitted. Both file extensions and MIME type should be always set.  
         *      
         *  **Note:** Embedded file dialog and Windows file dialog support only file extensions, while Android, Linux, and macOS file dialogs also support MIME types.  
         */
        get filters(): PackedStringArray
        set filters(value: PackedStringArray | string[])
        get fileNameFilter(): string
        set fileNameFilter(value: string)
        get optionCount(): any /*Options,option_*/
        set optionCount(value: any /*Options,option_*/)
        get showHiddenFiles(): boolean
        set showHiddenFiles(value: boolean)
        get useNativeDialog(): boolean
        set useNativeDialog(value: boolean)
        get currentDir(): string
        set currentDir(value: string)
        get currentFile(): string
        set currentFile(value: string)
        get currentPath(): string
        set currentPath(value: string)
        readonly fileSelected: Signal<(path: string) => void>
        readonly filesSelected: Signal<(paths: PackedStringArray | string[]) => void>
        readonly dirSelected: Signal<(dir: string) => void>
        readonly fileNameFilterChanged: Signal<(filter: string) => void>
    }
    /** Godot editor's dock for managing files in the project.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_filesystemdock.html  
     */
    class FileSystemDock<Map extends Record<string, Node> = {}> extends VBoxContainer<Map> {
        constructor(identifier?: any)
        _fileListThumbnailDone(_unnamedArg0: string, _unnamedArg1: Texture2D, _unnamedArg2: Texture2D, _unnamedArg3: any): void
        _treeThumbnailDone(_unnamedArg0: string, _unnamedArg1: Texture2D, _unnamedArg2: Texture2D, _unnamedArg3: any): void
        navigateToPath(path: string): void
        addResourceTooltipPlugin(plugin: EditorResourceTooltipPlugin): void
        removeResourceTooltipPlugin(plugin: EditorResourceTooltipPlugin): void
        _setDockHorizontal(enable: boolean): void
        _canDockHorizontal(): boolean
        _saveLayoutToConfig(_unnamedArg0: ConfigFile, _unnamedArg1: string): void
        _loadLayoutFromConfig(_unnamedArg0: ConfigFile, _unnamedArg1: string): void
        
        /** Emitted when a new scene is created that inherits the scene at [param file] path. */
        readonly inherit: Signal<(file: string) => void>
        
        /** Emitted when the given scenes are being instantiated in the editor. */
        readonly instantiate: Signal<(files: PackedStringArray | string[]) => void>
        readonly resourceRemoved: Signal<(resource: Resource) => void>
        readonly fileRemoved: Signal<(file: string) => void>
        readonly folderRemoved: Signal<(folder: string) => void>
        readonly filesMoved: Signal<(oldFile: string, newFile: string) => void>
        readonly folderMoved: Signal<(oldFolder: string, newFolder: string) => void>
        readonly folderColorChanged: Signal<() => void>
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
    class FlowContainer<Map extends Record<string, Node> = {}> extends Container<Map> {
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
        getLineCount(): int64
        
        /** The alignment of the container's children (must be one of [constant ALIGNMENT_BEGIN], [constant ALIGNMENT_CENTER], or [constant ALIGNMENT_END]). */
        get alignment(): int64
        set alignment(value: int64)
        get lastWrapAlignment(): int64
        set lastWrapAlignment(value: int64)
        
        /** If `true`, the [FlowContainer] will arrange its children vertically, rather than horizontally.  
         *  Can't be changed when using [HFlowContainer] and [VFlowContainer].  
         */
        get vertical(): boolean
        set vertical(value: boolean)
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
        get heightFalloff(): float64
        set heightFalloff(value: float64)
        get edgeFade(): float64
        set edgeFade(value: float64)
        get densityTexture(): Texture3D
        set densityTexture(value: Texture3D)
    }
    /** A region that contributes to the default volumetric fog from the world environment.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_fogvolume.html  
     */
    class FogVolume<Map extends Record<string, Node> = {}> extends VisualInstance3D<Map> {
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
        get material(): FogMaterial | ShaderMaterial
        set material(value: FogMaterial | ShaderMaterial)
    }
    /** Abstract base class for fonts and font variations.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_font.html  
     */
    class Font extends Resource {
        constructor(identifier?: any)
        findVariation(variationCoordinates: GDictionary, faceIndex: int64 = 0, strength: float64 = 0, transform: Transform2D = <any> {} /*compound.type from TypeTransform2D ([object Object])*/, spacingTop: int64 = 0, spacingBottom: int64 = 0, spacingSpace: int64 = 0, spacingGlyph: int64 = 0, baselineOffset: float64 = 0): Rid
        getRids(): GArray
        getHeight(fontSize: int64 = 16): float64
        getAscent(fontSize: int64 = 16): float64
        getDescent(fontSize: int64 = 16): float64
        getUnderlinePosition(fontSize: int64 = 16): float64
        getUnderlineThickness(fontSize: int64 = 16): float64
        getFontName(): string
        getFontStyleName(): string
        getOtNameStrings(): GDictionary
        getFontStyle(): TextServer.FontStyle
        getFontWeight(): int64
        getFontStretch(): int64
        getSpacing(spacing: TextServer.SpacingType): int64
        getOpentypeFeatures(): GDictionary
        setCacheCapacity(singleLine: int64, multiLine: int64): void
        getStringSize(text: string, alignment: HorizontalAlignment = 0, width: float64 = -1, fontSize: int64 = 16, justificationFlags: TextServer.JustificationFlag = 3, direction: TextServer.Direction = 0, orientation: TextServer.Orientation = 0): Vector2
        getMultilineStringSize(text: string, alignment: HorizontalAlignment = 0, width: float64 = -1, fontSize: int64 = 16, maxLines: int64 = -1, brkFlags: TextServer.LineBreakFlag = 3, justificationFlags: TextServer.JustificationFlag = 3, direction: TextServer.Direction = 0, orientation: TextServer.Orientation = 0): Vector2
        drawString(canvasItem: Rid, pos: Vector2, text: string, alignment: HorizontalAlignment = 0, width: float64 = -1, fontSize: int64 = 16, modulate: Color = new Color(1, 1, 1, 1), justificationFlags: TextServer.JustificationFlag = 3, direction: TextServer.Direction = 0, orientation: TextServer.Orientation = 0): void
        drawMultilineString(canvasItem: Rid, pos: Vector2, text: string, alignment: HorizontalAlignment = 0, width: float64 = -1, fontSize: int64 = 16, maxLines: int64 = -1, modulate: Color = new Color(1, 1, 1, 1), brkFlags: TextServer.LineBreakFlag = 3, justificationFlags: TextServer.JustificationFlag = 3, direction: TextServer.Direction = 0, orientation: TextServer.Orientation = 0): void
        drawStringOutline(canvasItem: Rid, pos: Vector2, text: string, alignment: HorizontalAlignment = 0, width: float64 = -1, fontSize: int64 = 16, size: int64 = 1, modulate: Color = new Color(1, 1, 1, 1), justificationFlags: TextServer.JustificationFlag = 3, direction: TextServer.Direction = 0, orientation: TextServer.Orientation = 0): void
        drawMultilineStringOutline(canvasItem: Rid, pos: Vector2, text: string, alignment: HorizontalAlignment = 0, width: float64 = -1, fontSize: int64 = 16, maxLines: int64 = -1, size: int64 = 1, modulate: Color = new Color(1, 1, 1, 1), brkFlags: TextServer.LineBreakFlag = 3, justificationFlags: TextServer.JustificationFlag = 3, direction: TextServer.Direction = 0, orientation: TextServer.Orientation = 0): void
        getCharSize(char: int64, fontSize: int64): Vector2
        drawChar(canvasItem: Rid, pos: Vector2, char: int64, fontSize: int64, modulate: Color = new Color(1, 1, 1, 1)): float64
        drawCharOutline(canvasItem: Rid, pos: Vector2, char: int64, fontSize: int64, size: int64 = -1, modulate: Color = new Color(1, 1, 1, 1)): float64
        hasChar(char: int64): boolean
        getSupportedChars(): string
        isLanguageSupported(language: string): boolean
        isScriptSupported(script: string): boolean
        getSupportedFeatureList(): GDictionary
        getSupportedVariationList(): GDictionary
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
        loadBitmapFont(path: string): GError
        loadDynamicFont(path: string): GError
        getCacheCount(): int64
        clearCache(): void
        removeCache(cacheIndex: int64): void
        getSizeCacheList(cacheIndex: int64): GArray
        clearSizeCache(cacheIndex: int64): void
        removeSizeCache(cacheIndex: int64, size: Vector2I): void
        setVariationCoordinates(cacheIndex: int64, variationCoordinates: GDictionary): void
        getVariationCoordinates(cacheIndex: int64): GDictionary
        setEmbolden(cacheIndex: int64, strength: float64): void
        getEmbolden(cacheIndex: int64): float64
        setTransform(cacheIndex: int64, transform: Transform2D): void
        getTransform(cacheIndex: int64): Transform2D
        setExtraSpacing(cacheIndex: int64, spacing: TextServer.SpacingType, value: int64): void
        getExtraSpacing(cacheIndex: int64, spacing: TextServer.SpacingType): int64
        setExtraBaselineOffset(cacheIndex: int64, baselineOffset: float64): void
        getExtraBaselineOffset(cacheIndex: int64): float64
        setFaceIndex(cacheIndex: int64, faceIndex: int64): void
        getFaceIndex(cacheIndex: int64): int64
        setCacheAscent(cacheIndex: int64, size: int64, ascent: float64): void
        getCacheAscent(cacheIndex: int64, size: int64): float64
        setCacheDescent(cacheIndex: int64, size: int64, descent: float64): void
        getCacheDescent(cacheIndex: int64, size: int64): float64
        setCacheUnderlinePosition(cacheIndex: int64, size: int64, underlinePosition: float64): void
        getCacheUnderlinePosition(cacheIndex: int64, size: int64): float64
        setCacheUnderlineThickness(cacheIndex: int64, size: int64, underlineThickness: float64): void
        getCacheUnderlineThickness(cacheIndex: int64, size: int64): float64
        setCacheScale(cacheIndex: int64, size: int64, scale: float64): void
        getCacheScale(cacheIndex: int64, size: int64): float64
        getTextureCount(cacheIndex: int64, size: Vector2I): int64
        clearTextures(cacheIndex: int64, size: Vector2I): void
        removeTexture(cacheIndex: int64, size: Vector2I, textureIndex: int64): void
        setTextureImage(cacheIndex: int64, size: Vector2I, textureIndex: int64, image: Image): void
        getTextureImage(cacheIndex: int64, size: Vector2I, textureIndex: int64): Image
        setTextureOffsets(cacheIndex: int64, size: Vector2I, textureIndex: int64, offset: PackedInt32Array | int32[]): void
        getTextureOffsets(cacheIndex: int64, size: Vector2I, textureIndex: int64): PackedInt32Array
        getGlyphList(cacheIndex: int64, size: Vector2I): PackedInt32Array
        clearGlyphs(cacheIndex: int64, size: Vector2I): void
        removeGlyph(cacheIndex: int64, size: Vector2I, glyph: int64): void
        setGlyphAdvance(cacheIndex: int64, size: int64, glyph: int64, advance: Vector2): void
        getGlyphAdvance(cacheIndex: int64, size: int64, glyph: int64): Vector2
        setGlyphOffset(cacheIndex: int64, size: Vector2I, glyph: int64, offset: Vector2): void
        getGlyphOffset(cacheIndex: int64, size: Vector2I, glyph: int64): Vector2
        setGlyphSize(cacheIndex: int64, size: Vector2I, glyph: int64, glSize: Vector2): void
        getGlyphSize(cacheIndex: int64, size: Vector2I, glyph: int64): Vector2
        setGlyphUVRect(cacheIndex: int64, size: Vector2I, glyph: int64, uVRect: Rect2): void
        getGlyphUVRect(cacheIndex: int64, size: Vector2I, glyph: int64): Rect2
        setGlyphTextureIdx(cacheIndex: int64, size: Vector2I, glyph: int64, textureIdx: int64): void
        getGlyphTextureIdx(cacheIndex: int64, size: Vector2I, glyph: int64): int64
        getKerningList(cacheIndex: int64, size: int64): GArray
        clearKerningMap(cacheIndex: int64, size: int64): void
        removeKerning(cacheIndex: int64, size: int64, glyphPair: Vector2I): void
        setKerning(cacheIndex: int64, size: int64, glyphPair: Vector2I, kerning: Vector2): void
        getKerning(cacheIndex: int64, size: int64, glyphPair: Vector2I): Vector2
        renderRange(cacheIndex: int64, size: Vector2I, start: int64, end: int64): void
        renderGlyph(cacheIndex: int64, size: Vector2I, index: int64): void
        setLanguageSupportOverride(language: string, supported: boolean): void
        getLanguageSupportOverride(language: string): boolean
        removeLanguageSupportOverride(language: string): void
        getLanguageSupportOverrides(): PackedStringArray
        setScriptSupportOverride(script: string, supported: boolean): void
        getScriptSupportOverride(script: string): boolean
        removeScriptSupportOverride(script: string): void
        getScriptSupportOverrides(): PackedStringArray
        getGlyphIndex(size: int64, char: int64, variationSelector: int64): int64
        getCharFromGlyphIndex(size: int64, glyphIndex: int64): int64
        
        /** Contents of the dynamic font source file. */
        get data(): PackedByteArray
        set data(value: PackedByteArray | byte[] | ArrayBuffer)
        get generateMipmaps(): boolean
        set generateMipmaps(value: boolean)
        get disableEmbeddedBitmaps(): boolean
        set disableEmbeddedBitmaps(value: boolean)
        
        /** Font anti-aliasing mode. */
        get antialiasing(): int64
        set antialiasing(value: int64)
        get fontName(): string
        set fontName(value: string)
        get styleName(): string
        set styleName(value: string)
        get fontStyle(): int64
        set fontStyle(value: int64)
        get fontWeight(): int64
        set fontWeight(value: int64)
        get fontStretch(): int64
        set fontStretch(value: int64)
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
        get allowSystemFallback(): boolean
        set allowSystemFallback(value: boolean)
        get forceAutohinter(): boolean
        set forceAutohinter(value: boolean)
        
        /** Font hinting mode. Used by dynamic fonts only. */
        get hinting(): int64
        set hinting(value: int64)
        
        /** Font oversampling factor. If set to `0.0`, the global oversampling factor is used instead. Used by dynamic fonts only (MSDF fonts ignore oversampling). */
        get oversampling(): float64
        set oversampling(value: float64)
        get fixedSize(): int64
        set fixedSize(value: int64)
        get fixedSizeScaleMode(): int64
        set fixedSizeScaleMode(value: int64)
        get opentypeFeatureOverrides(): GDictionary
        set opentypeFeatureOverrides(value: GDictionary)
    }
    /** A variation of a font with additional settings.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_fontvariation.html  
     */
    class FontVariation extends Font {
        constructor(identifier?: any)
        setSpacing(spacing: TextServer.SpacingType, value: int64): void
        get baseFont(): Font
        set baseFont(value: Font)
        get variationOpentype(): GDictionary
        set variationOpentype(value: GDictionary)
        get variationFaceIndex(): int64
        set variationFaceIndex(value: int64)
        get variationEmbolden(): float64
        set variationEmbolden(value: float64)
        get variationTransform(): Transform2D
        set variationTransform(value: Transform2D)
        get opentypeFeatures(): GDictionary
        set opentypeFeatures(value: GDictionary)
        get spacingGlyph(): int64
        set spacingGlyph(value: int64)
        get spacingSpace(): int64
        set spacingSpace(value: int64)
        get spacingTop(): int64
        set spacingTop(value: int64)
        get spacingBottom(): int64
        set spacingBottom(value: int64)
        get baselineOffset(): float64
        set baselineOffset(value: float64)
    }
    /** Framebuffer cache manager for Rendering Device based renderers.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_framebuffercacherd.html  
     */
    class FramebufferCacheRD extends GObject {
        constructor(identifier?: any)
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
        isLibraryOpen(): boolean
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
        loadBufferViewData(state: any /*GLTFState*/): PackedByteArray
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
        static fromNode(cameraNode: Camera3D): any /*GLTFCamera*/
        toNode(): Camera3D
        static fromDictionary(dictionary: GDictionary): any /*GLTFCamera*/
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
    }
    class GltfDocument extends Resource {
        static readonly ROOT_NODE_MODE_SINGLE_ROOT = 0
        static readonly ROOT_NODE_MODE_KEEP_ROOT = 1
        static readonly ROOT_NODE_MODE_MULTI_ROOT = 2
        constructor(identifier?: any)
        appendFromFile(path: string, state: any /*GLTFState*/, flags: int64 = 0, basePath: string = ''): GError
        appendFromBuffer(bytes: PackedByteArray | byte[] | ArrayBuffer, basePath: string, state: any /*GLTFState*/, flags: int64 = 0): GError
        appendFromScene(node: Node, state: any /*GLTFState*/, flags: int64 = 0): GError
        generateScene(state: any /*GLTFState*/, bakeFps: float64 = 30, trimming: boolean = false, removeImmutableTracks: boolean = true): Node
        generateBuffer(state: any /*GLTFState*/): PackedByteArray
        writeToFilesystem(state: any /*GLTFState*/, path: string): GError
        static importObjectModelProperty(state: any /*GLTFState*/, jsonPointer: string): any /*GLTFObjectModelProperty*/
        static exportObjectModelProperty(state: any /*GLTFState*/, nodePath: NodePath | string, godotNode: Node, gltfNodeIndex: int64): any /*GLTFObjectModelProperty*/
        static registerGltfDocumentExtension(extension: any /*GLTFDocumentExtension*/, firstPriority: boolean = false): void
        static unregisterGltfDocumentExtension(extension: any /*GLTFDocumentExtension*/): void
        static getSupportedGltfExtensions(): PackedStringArray
        get imageFormat(): string
        set imageFormat(value: string)
        get lossyQuality(): float64
        set lossyQuality(value: float64)
        get rootNodeMode(): int64
        set rootNodeMode(value: int64)
    }
    class GltfDocumentExtension extends Resource {
        constructor(identifier?: any)
        /* gdvirtual */ _importPreflight(state: any /*GLTFState*/, extensions: PackedStringArray | string[]): GError
        /* gdvirtual */ _getSupportedExtensions(): PackedStringArray
        /* gdvirtual */ _parseNodeExtensions(state: any /*GLTFState*/, gltfNode: any /*GLTFNode*/, extensions: GDictionary): GError
        /* gdvirtual */ _parseImageData(state: any /*GLTFState*/, imageData: PackedByteArray | byte[] | ArrayBuffer, mimeType: string, retImage: Image): GError
        /* gdvirtual */ _getImageFileExtension(): string
        /* gdvirtual */ _parseTextureJson(state: any /*GLTFState*/, textureJson: GDictionary, retGltfTexture: any /*GLTFTexture*/): GError
        /* gdvirtual */ _importObjectModelProperty(state: any /*GLTFState*/, splitJsonPointer: PackedStringArray | string[], partialPaths: GArray): any /*GLTFObjectModelProperty*/
        /* gdvirtual */ _importPostParse(state: any /*GLTFState*/): GError
        /* gdvirtual */ _importPreGenerate(state: any /*GLTFState*/): GError
        /* gdvirtual */ _generateSceneNode(state: any /*GLTFState*/, gltfNode: any /*GLTFNode*/, sceneParent: Node): Node3D
        /* gdvirtual */ _importNode(state: any /*GLTFState*/, gltfNode: any /*GLTFNode*/, json: GDictionary, node: Node): GError
        /* gdvirtual */ _importPost(state: any /*GLTFState*/, root: Node): GError
        /* gdvirtual */ _exportPreflight(state: any /*GLTFState*/, root: Node): GError
        /* gdvirtual */ _convertSceneNode(state: any /*GLTFState*/, gltfNode: any /*GLTFNode*/, sceneNode: Node): void
        /* gdvirtual */ _exportPostConvert(state: any /*GLTFState*/, root: Node): GError
        /* gdvirtual */ _exportPreserialize(state: any /*GLTFState*/): GError
        /* gdvirtual */ _exportObjectModelProperty(state: any /*GLTFState*/, nodePath: NodePath | string, godotNode: Node, gltfNodeIndex: int64, targetObject: GObject, targetDepth: int64): any /*GLTFObjectModelProperty*/
        /* gdvirtual */ _getSaveableImageFormats(): PackedStringArray
        /* gdvirtual */ _serializeImageToBytes(state: any /*GLTFState*/, image: Image, imageDict: GDictionary, imageFormat: string, lossyQuality: float64): PackedByteArray
        /* gdvirtual */ _saveImageAtPath(state: any /*GLTFState*/, image: Image, filePath: string, imageFormat: string, lossyQuality: float64): GError
        /* gdvirtual */ _serializeTextureJson(state: any /*GLTFState*/, textureJson: GDictionary, gltfTexture: any /*GLTFTexture*/, imageFormat: string): GError
        /* gdvirtual */ _exportNode(state: any /*GLTFState*/, gltfNode: any /*GLTFNode*/, json: GDictionary, node: Node): GError
        /* gdvirtual */ _exportPost(state: any /*GLTFState*/): GError
    }
    class GltfDocumentExtensionConvertImporterMesh extends GltfDocumentExtension {
        constructor(identifier?: any)
    }
    class GltfLight extends Resource {
        constructor(identifier?: any)
        static fromNode(lightNode: Light3D): any /*GLTFLight*/
        toNode(): Light3D
        static fromDictionary(dictionary: GDictionary): any /*GLTFLight*/
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
        get mesh(): GObject
        set mesh(value: GObject)
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
        getSceneNodePath(gltfState: any /*GLTFState*/, handleSkeletons: boolean = true): NodePath
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
        get gltfToGodotExpression(): Expression
        set gltfToGodotExpression(value: Expression)
        get godotToGltfExpression(): Expression
        set godotToGltfExpression(value: Expression)
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
        static fromNode(bodyNode: CollisionObject3D): any /*GLTFPhysicsBody*/
        toNode(): CollisionObject3D
        static fromDictionary(dictionary: GDictionary): any /*GLTFPhysicsBody*/
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
        static fromNode(shapeNode: CollisionShape3D): any /*GLTFPhysicsShape*/
        toNode(cacheShapes: boolean = false): CollisionShape3D
        static fromResource(shapeResource: Shape3D): any /*GLTFPhysicsShape*/
        toResource(cacheShapes: boolean = false): Shape3D
        static fromDictionary(dictionary: GDictionary): any /*GLTFPhysicsShape*/
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
        get importerMesh(): ImporterMesh
        set importerMesh(value: ImporterMesh)
    }
    class GltfSkeleton extends Resource {
        constructor(identifier?: any)
        getGodotSkeleton(): Skeleton3D
        getBoneAttachmentCount(): int64
        getBoneAttachment(idx: int64): BoneAttachment3D
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
        get godotSkin(): Skin
        set godotSkin(value: Skin)
    }
    class GltfSpecGloss extends Resource {
        constructor(identifier?: any)
        get diffuseImg(): GObject
        set diffuseImg(value: GObject)
        get diffuseFactor(): Color
        set diffuseFactor(value: Color)
        get glossFactor(): float64
        set glossFactor(value: float64)
        get specularFactor(): Color
        set specularFactor(value: Color)
        get specGlossImg(): GObject
        set specGlossImg(value: GObject)
    }
    class GltfState extends Resource {
        static readonly HANDLE_BINARY_DISCARD_TEXTURES = 0
        static readonly HANDLE_BINARY_EXTRACT_TEXTURES = 1
        static readonly HANDLE_BINARY_EMBED_AS_BASISU = 2
        static readonly HANDLE_BINARY_EMBED_AS_UNCOMPRESSED = 3
        constructor(identifier?: any)
        addUsedExtension(extensionName: string, required: boolean): void
        appendDataToBuffers(data: PackedByteArray | byte[] | ArrayBuffer, deduplication: boolean): int64
        appendGltfNode(gltfNode: any /*GLTFNode*/, godotSceneNode: Node, parentNodeIndex: int64): int64
        getAnimationPlayersCount(idx: int64): int64
        getAnimationPlayer(idx: int64): AnimationPlayer
        getSceneNode(idx: int64): Node
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
    class GpuParticles2D<Map extends Record<string, Node> = {}> extends Node2D<Map> {
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
        restart(keepSeed: boolean = false): void
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
        get texture(): Texture2D
        set texture(value: Texture2D)
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
        get processMaterial(): ParticleProcessMaterial | ShaderMaterial
        set processMaterial(value: ParticleProcessMaterial | ShaderMaterial)
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
    class GpuParticles3D<Map extends Record<string, Node> = {}> extends GeometryInstance3D<Map> {
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
        getDrawPassMesh(pass: int64): Mesh
        restart(keepSeed: boolean = false): void
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
        get processMaterial(): ParticleProcessMaterial | ShaderMaterial
        set processMaterial(value: ParticleProcessMaterial | ShaderMaterial)
        get drawPasses(): int64
        set drawPasses(value: int64)
        get drawPass1(): Mesh
        set drawPass1(value: Mesh)
        get drawPass2(): Mesh
        set drawPass2(value: Mesh)
        get drawPass3(): Mesh
        set drawPass3(value: Mesh)
        get drawPass4(): Mesh
        set drawPass4(value: Mesh)
        get drawSkin(): Skin
        set drawSkin(value: Skin)
        readonly finished: Signal<() => void>
    }
    class GpuParticlesAttractor3D<Map extends Record<string, Node> = {}> extends VisualInstance3D<Map> {
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
    class GpuParticlesAttractorBox3D<Map extends Record<string, Node> = {}> extends GpuParticlesAttractor3D<Map> {
        constructor(identifier?: any)
        get size(): Vector3
        set size(value: Vector3)
    }
    class GpuParticlesAttractorSphere3D<Map extends Record<string, Node> = {}> extends GpuParticlesAttractor3D<Map> {
        constructor(identifier?: any)
        get radius(): float64
        set radius(value: float64)
    }
    class GpuParticlesAttractorVectorField3D<Map extends Record<string, Node> = {}> extends GpuParticlesAttractor3D<Map> {
        constructor(identifier?: any)
        get size(): Vector3
        set size(value: Vector3)
        get texture(): Texture3D
        set texture(value: Texture3D)
    }
    class GpuParticlesCollision3D<Map extends Record<string, Node> = {}> extends VisualInstance3D<Map> {
        constructor(identifier?: any)
        get cullMask(): int64
        set cullMask(value: int64)
    }
    class GpuParticlesCollisionBox3D<Map extends Record<string, Node> = {}> extends GpuParticlesCollision3D<Map> {
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
    class GpuParticlesCollisionHeightField3D<Map extends Record<string, Node> = {}> extends GpuParticlesCollision3D<Map> {
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
    class GpuParticlesCollisionSdf3D<Map extends Record<string, Node> = {}> extends GpuParticlesCollision3D<Map> {
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
        get texture(): Texture3D
        set texture(value: Texture3D)
    }
    class GpuParticlesCollisionSphere3D<Map extends Record<string, Node> = {}> extends GpuParticlesCollision3D<Map> {
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
    class Generic6DofJoint3D<Map extends Record<string, Node> = {}> extends Joint3D<Map> {
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
    class GeometryInstance3D<Map extends Record<string, Node> = {}> extends VisualInstance3D<Map> {
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
        setInstanceShaderParameter(name: StringName, value: any): void
        getInstanceShaderParameter(name: StringName): any
        get materialOverride(): BaseMaterial3D | ShaderMaterial
        set materialOverride(value: BaseMaterial3D | ShaderMaterial)
        get materialOverlay(): BaseMaterial3D | ShaderMaterial
        set materialOverlay(value: BaseMaterial3D | ShaderMaterial)
        
        /** The transparency applied to the whole geometry (as a multiplier of the materials' existing transparency). `0.0` is fully opaque, while `1.0` is fully transparent. Values greater than `0.0` (exclusive) will force the geometry's materials to go through the transparent pipeline, which is slower to render and can exhibit rendering issues due to incorrect transparency sorting. However, unlike using a transparent material, setting [member transparency] to a value greater than `0.0` (exclusive) will  *not*  disable shadow rendering.  
         *  In spatial shaders, `1.0 - transparency` is set as the default value of the `ALPHA` built-in.  
         *      
         *  **Note:** [member transparency] is clamped between `0.0` and `1.0`, so this property cannot be used to make transparent materials more opaque than they originally are.  
         *      
         *  **Note:** Only supported when using the Forward+ rendering method. When using the Mobile or Compatibility rendering method, [member transparency] is ignored and is considered as always being `0.0`.  
         */
        get transparency(): float64
        set transparency(value: float64)
        get castShadow(): int64
        set castShadow(value: int64)
        get extraCullMargin(): float64
        set extraCullMargin(value: float64)
        get customAabb(): Aabb
        set customAabb(value: Aabb)
        get lodBias(): float64
        set lodBias(value: float64)
        get ignoreOcclusionCulling(): boolean
        set ignoreOcclusionCulling(value: boolean)
        get gIMode(): int64
        set gIMode(value: int64)
        get gILightmapTexelScale(): float64
        set gILightmapTexelScale(value: float64)
        get gILightmapScale(): int64
        set gILightmapScale(value: int64)
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
        addPoint(offset: float64, color: Color): void
        removePoint(point: int64): void
        setOffset(point: int64, offset: float64): void
        getOffset(point: int64): float64
        
        /** Reverses/mirrors the gradient.  
         *      
         *  **Note:** This method mirrors all points around the middle of the gradient, which may produce unexpected results when [member interpolation_mode] is set to [constant GRADIENT_INTERPOLATE_CONSTANT].  
         */
        reverse(): void
        setColor(point: int64, color: Color): void
        getColor(point: int64): Color
        
        /** Returns the interpolated color specified by [param offset]. */
        sample(offset: float64): Color
        getPointCount(): int64
        get interpolationMode(): int64
        set interpolationMode(value: int64)
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
        get gradient(): Gradient
        set gradient(value: Gradient)
        
        /** The number of color samples that will be obtained from the [Gradient]. */
        get width(): int64
        set width(value: int64)
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
        get gradient(): Gradient
        set gradient(value: Gradient)
        
        /** The number of horizontal color samples that will be obtained from the [Gradient], which also represents the texture's width. */
        get width(): int64
        set width(value: int64)
        
        /** The number of vertical color samples that will be obtained from the [Gradient], which also represents the texture's height. */
        get height(): int64
        set height(value: int64)
        get useHdr(): boolean
        set useHdr(value: boolean)
        
        /** The gradient fill type, one of the [enum Fill] values. The texture is filled by interpolating colors starting from [member fill_from] to [member fill_to] offsets. */
        get fill(): int64
        set fill(value: int64)
        get fillFrom(): Vector2
        set fillFrom(value: Vector2)
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
    class GraphEdit<Map extends Record<string, Node> = {}> extends Control<Map> {
        /** [kbd]Mouse Wheel[/kbd] will zoom, [kbd]Ctrl + Mouse Wheel[/kbd] will move the view. */
        static readonly SCROLL_ZOOMS = 0
        
        /** [kbd]Mouse Wheel[/kbd] will move the view, [kbd]Ctrl + Mouse Wheel[/kbd] will zoom. */
        static readonly SCROLL_PANS = 1
        
        /** Draw the grid using solid lines. */
        static readonly GRID_PATTERN_LINES = 0
        
        /** Draw the grid using dots. */
        static readonly GRID_PATTERN_DOTS = 1
        constructor(identifier?: any)
        /* gdvirtual */ _isInInputHotzone(inNode: GObject, inPort: int64, mousePosition: Vector2): boolean
        /* gdvirtual */ _isInOutputHotzone(inNode: GObject, inPort: int64, mousePosition: Vector2): boolean
        /* gdvirtual */ _getConnectionLine(fromPosition: Vector2, toPosition: Vector2): PackedVector2Array
        /* gdvirtual */ _isNodeHoverValid(fromNode: StringName, fromPort: int64, toNode: StringName, toPort: int64): boolean
        connectNode(fromNode: StringName, fromPort: int64, toNode: StringName, toPort: int64, keepAlive: boolean = false): GError
        isNodeConnected(fromNode: StringName, fromPort: int64, toNode: StringName, toPort: int64): boolean
        disconnectNode(fromNode: StringName, fromPort: int64, toNode: StringName, toPort: int64): void
        setConnectionActivity(fromNode: StringName, fromPort: int64, toNode: StringName, toPort: int64, amount: float64): void
        getConnectionCount(fromNode: StringName, fromPort: int64): int64
        getClosestConnectionAtPoint(point: Vector2, maxDistance: float64 = 4): GDictionary
        getConnectionsIntersectingWithRect(rect: Rect2): GArray
        clearConnections(): void
        forceConnectionDragEnd(): void
        addValidRightDisconnectType(type: int64): void
        removeValidRightDisconnectType(type: int64): void
        addValidLeftDisconnectType(type: int64): void
        removeValidLeftDisconnectType(type: int64): void
        addValidConnectionType(fromType: int64, toType: int64): void
        removeValidConnectionType(fromType: int64, toType: int64): void
        isValidConnectionType(fromType: int64, toType: int64): boolean
        getConnectionLine(fromNode: Vector2, toNode: Vector2): PackedVector2Array
        attachGraphElementToFrame(element: StringName, frame: StringName): void
        detachGraphElementFromFrame(element: StringName): void
        getElementFrame(element: StringName): GraphFrame
        getAttachedNodesOfFrame(frame: StringName): GArray
        getMenuHBox(): HBoxContainer
        arrangeNodes(): void
        setSelected(node: Node): void
        get scrollOffset(): Vector2
        set scrollOffset(value: Vector2)
        get showGrid(): boolean
        set showGrid(value: boolean)
        get gridPattern(): int64
        set gridPattern(value: int64)
        get snappingEnabled(): boolean
        set snappingEnabled(value: boolean)
        get snappingDistance(): int64
        set snappingDistance(value: int64)
        get panningScheme(): int64
        set panningScheme(value: int64)
        get rightDisconnects(): boolean
        set rightDisconnects(value: boolean)
        get connectionLinesCurvature(): float64
        set connectionLinesCurvature(value: float64)
        get connectionLinesThickness(): float64
        set connectionLinesThickness(value: float64)
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
        get zoomMin(): float64
        set zoomMin(value: float64)
        get zoomMax(): float64
        set zoomMax(value: float64)
        get zoomStep(): float64
        set zoomStep(value: float64)
        get minimapEnabled(): boolean
        set minimapEnabled(value: boolean)
        get minimapSize(): Vector2
        set minimapSize(value: Vector2)
        get minimapOpacity(): float64
        set minimapOpacity(value: float64)
        get showMenu(): boolean
        set showMenu(value: boolean)
        get showZoomLabel(): boolean
        set showZoomLabel(value: boolean)
        get showZoomButtons(): boolean
        set showZoomButtons(value: boolean)
        get showGridButtons(): boolean
        set showGridButtons(value: boolean)
        get showMinimapButton(): boolean
        set showMinimapButton(value: boolean)
        get showArrangeButton(): boolean
        set showArrangeButton(value: boolean)
        readonly connectionRequest: Signal<(fromNode: StringName, fromPort: int64, toNode: StringName, toPort: int64) => void>
        readonly disconnectionRequest: Signal<(fromNode: StringName, fromPort: int64, toNode: StringName, toPort: int64) => void>
        readonly connectionToEmpty: Signal<(fromNode: StringName, fromPort: int64, releasePosition: Vector2) => void>
        readonly connectionFromEmpty: Signal<(toNode: StringName, toPort: int64, releasePosition: Vector2) => void>
        readonly connectionDragStarted: Signal<(fromNode: StringName, fromPort: int64, isOutput: boolean) => void>
        readonly connectionDragEnded: Signal<() => void>
        readonly copyNodesRequest: Signal<() => void>
        readonly cutNodesRequest: Signal<() => void>
        readonly pasteNodesRequest: Signal<() => void>
        readonly duplicateNodesRequest: Signal<() => void>
        readonly deleteNodesRequest: Signal<(nodes: GArray) => void>
        readonly nodeSelected: Signal<(node: Node) => void>
        readonly nodeDeselected: Signal<(node: Node) => void>
        readonly frameRectChanged: Signal<(frame: GraphFrame, newRect: Rect2) => void>
        readonly popupRequest: Signal<(atPosition: Vector2) => void>
        readonly beginNodeMove: Signal<() => void>
        readonly endNodeMove: Signal<() => void>
        readonly graphElementsLinkedToFrameRequest: Signal<(elements: GArray, frame: StringName) => void>
        readonly scrollOffsetChanged: Signal<(offset: Vector2) => void>
    }
    /** A container that represents a basic element that can be placed inside a [GraphEdit] control.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_graphelement.html  
     */
    class GraphElement<Map extends Record<string, Node> = {}> extends Container<Map> {
        constructor(identifier?: any)
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
        readonly nodeSelected: Signal<() => void>
        readonly nodeDeselected: Signal<() => void>
        readonly raiseRequest: Signal<() => void>
        readonly deleteRequest: Signal<() => void>
        readonly resizeRequest: Signal<(newSize: Vector2) => void>
        readonly resizeEnd: Signal<(newSize: Vector2) => void>
        
        /** Emitted when the GraphElement is dragged. */
        readonly dragged: Signal<(from: Vector2, to: Vector2) => void>
        readonly positionOffsetChanged: Signal<() => void>
    }
    /** GraphFrame is a special [GraphElement] that can be used to organize other [GraphElement]s inside a [GraphEdit].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_graphframe.html  
     */
    class GraphFrame<Map extends Record<string, Node> = {}> extends GraphElement<Map> {
        constructor(identifier?: any)
        getTitlebarHBox(): HBoxContainer
        
        /** Title of the frame. */
        get title(): string
        set title(value: string)
        get autoshrinkEnabled(): boolean
        set autoshrinkEnabled(value: boolean)
        get autoshrinkMargin(): int64
        set autoshrinkMargin(value: int64)
        get dragMargin(): int64
        set dragMargin(value: int64)
        get tintColorEnabled(): boolean
        set tintColorEnabled(value: boolean)
        get tintColor(): Color
        set tintColor(value: Color)
        readonly autoshrinkChanged: Signal<() => void>
    }
    /** A container with connection ports, representing a node in a [GraphEdit].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_graphnode.html  
     */
    class GraphNode<Map extends Record<string, Node> = {}> extends GraphElement<Map> {
        constructor(identifier?: any)
        /* gdvirtual */ _drawPort(slotIndex: int64, position: Vector2I, left: boolean, color: Color): void
        getTitlebarHBox(): HBoxContainer
        setSlot(slotIndex: int64, enableLeftPort: boolean, typeLeft: int64, colorLeft: Color, enableRightPort: boolean, typeRight: int64, colorRight: Color, customIconLeft: Texture2D = undefined, customIconRight: Texture2D = undefined, drawStylebox: boolean = true): void
        clearSlot(slotIndex: int64): void
        clearAllSlots(): void
        isSlotEnabledLeft(slotIndex: int64): boolean
        setSlotEnabledLeft(slotIndex: int64, enable: boolean): void
        setSlotTypeLeft(slotIndex: int64, type: int64): void
        getSlotTypeLeft(slotIndex: int64): int64
        setSlotColorLeft(slotIndex: int64, color: Color): void
        getSlotColorLeft(slotIndex: int64): Color
        setSlotCustomIconLeft(slotIndex: int64, customIcon: Texture2D): void
        getSlotCustomIconLeft(slotIndex: int64): Texture2D
        isSlotEnabledRight(slotIndex: int64): boolean
        setSlotEnabledRight(slotIndex: int64, enable: boolean): void
        setSlotTypeRight(slotIndex: int64, type: int64): void
        getSlotTypeRight(slotIndex: int64): int64
        setSlotColorRight(slotIndex: int64, color: Color): void
        getSlotColorRight(slotIndex: int64): Color
        setSlotCustomIconRight(slotIndex: int64, customIcon: Texture2D): void
        getSlotCustomIconRight(slotIndex: int64): Texture2D
        isSlotDrawStylebox(slotIndex: int64): boolean
        setSlotDrawStylebox(slotIndex: int64, enable: boolean): void
        getInputPortCount(): int64
        getInputPortPosition(portIdx: int64): Vector2
        getInputPortType(portIdx: int64): int64
        getInputPortColor(portIdx: int64): Color
        getInputPortSlot(portIdx: int64): int64
        getOutputPortCount(): int64
        getOutputPortPosition(portIdx: int64): Vector2
        getOutputPortType(portIdx: int64): int64
        getOutputPortColor(portIdx: int64): Color
        getOutputPortSlot(portIdx: int64): int64
        
        /** The text displayed in the GraphNode's title bar. */
        get title(): string
        set title(value: string)
        get ignoreInvalidConnectionType(): boolean
        set ignoreInvalidConnectionType(value: boolean)
        readonly slotUpdated: Signal<(slotIndex: int64) => void>
    }
    /** A container that arranges its child controls in a grid layout.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_gridcontainer.html  
     */
    class GridContainer<Map extends Record<string, Node> = {}> extends Container<Map> {
        constructor(identifier?: any)
        /** The number of columns in the [GridContainer]. If modified, [GridContainer] reorders its Control-derived children to accommodate the new layout. */
        get columns(): int64
        set columns(value: int64)
    }
    /** Node for 3D tile-based maps.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_gridmap.html  
     */
    class GridMap<Map extends Record<string, Node> = {}> extends Node3D<Map> {
        /** Invalid cell item that can be used in [method set_cell_item] to clear cells (or represent an empty cell in [method get_cell_item]). */
        static readonly INVALID_CELL_ITEM = -1
        constructor(identifier?: any)
        setCollisionMaskValue(layerNumber: int64, value: boolean): void
        getCollisionMaskValue(layerNumber: int64): boolean
        setCollisionLayerValue(layerNumber: int64, value: boolean): void
        getCollisionLayerValue(layerNumber: int64): boolean
        setNavigationMap(navigationMap: Rid): void
        getNavigationMap(): Rid
        setCellItem(position: Vector3I, item: int64, orientation: int64 = 0): void
        getCellItem(position: Vector3I): int64
        getCellItemOrientation(position: Vector3I): int64
        getCellItemBasis(position: Vector3I): Basis
        getBasisWithOrthogonalIndex(index: int64): Basis
        getOrthogonalIndexFromBasis(basis: Basis): int64
        localToMap(localPosition: Vector3): Vector3I
        mapToLocal(mapPosition: Vector3I): Vector3
        resourceChanged(resource: Resource): void
        
        /** Clear all cells. */
        clear(): void
        getUsedCells(): GArray
        getUsedCellsByItem(item: int64): GArray
        getMeshes(): GArray
        getBakeMeshes(): GArray
        getBakeMeshInstance(idx: int64): Rid
        clearBakedMeshes(): void
        makeBakedMeshes(genLightmapUV: boolean = false, lightmapUVTexelSize: float64 = 0.1): void
        get meshLibrary(): MeshLibrary
        set meshLibrary(value: MeshLibrary)
        get physicsMaterial(): PhysicsMaterial
        set physicsMaterial(value: PhysicsMaterial)
        get cellSize(): Vector3
        set cellSize(value: Vector3)
        get cellOctantSize(): int64
        set cellOctantSize(value: int64)
        get cellCenterX(): boolean
        set cellCenterX(value: boolean)
        get cellCenterY(): boolean
        set cellCenterY(value: boolean)
        get cellCenterZ(): boolean
        set cellCenterZ(value: boolean)
        get cellScale(): float64
        set cellScale(value: float64)
        get collisionLayer(): int64
        set collisionLayer(value: int64)
        get collisionMask(): int64
        set collisionMask(value: int64)
        get collisionPriority(): float64
        set collisionPriority(value: float64)
        get bakeNavigation(): boolean
        set bakeNavigation(value: boolean)
        readonly cellSizeChanged: Signal<(cellSize: Vector3) => void>
        
        /** Emitted when the [MeshLibrary] of this GridMap changes. */
        readonly changed: Signal<() => void>
    }
    /** Editor for [GridMap] nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_gridmapeditorplugin.html  
     */
    class GridMapEditorPlugin<Map extends Record<string, Node> = {}> extends EditorPlugin<Map> {
        constructor(identifier?: any)
        getCurrentGridMap(): GridMap
        setSelection(begin: Vector3I, end: Vector3I): void
        clearSelection(): void
        getSelection(): Aabb
        hasSelection(): boolean
        getSelectedCells(): GArray
        setSelectedPaletteItem(item: int64): void
        getSelectedPaletteItem(): int64
    }
    /** A physics joint that restricts the movement of two 2D physics bodies to a fixed axis.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_groovejoint2d.html  
     */
    class GrooveJoint2D<Map extends Record<string, Node> = {}> extends Joint2D<Map> {
        constructor(identifier?: any)
        /** The groove's length. The groove is from the joint's origin towards [member length] along the joint's local Y axis. */
        get length(): float64
        set length(value: float64)
        get initialOffset(): float64
        set initialOffset(value: float64)
    }
    /** A container that arranges its child controls horizontally.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_hboxcontainer.html  
     */
    class HBoxContainer<Map extends Record<string, Node> = {}> extends BoxContainer<Map> {
        constructor(identifier?: any)
    }
    /** A container that arranges its child controls horizontally and wraps them around at the borders.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_hflowcontainer.html  
     */
    class HFlowContainer<Map extends Record<string, Node> = {}> extends FlowContainer<Map> {
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
    class HScrollBar<Map extends Record<string, Node> = {}> extends ScrollBar<Map> {
        constructor(identifier?: any)
    }
    /** A horizontal line used for separating other controls.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_hseparator.html  
     */
    class HSeparator<Map extends Record<string, Node> = {}> extends Separator<Map> {
        constructor(identifier?: any)
    }
    /** A horizontal slider that goes from left (min) to right (max).  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_hslider.html  
     */
    class HSlider<Map extends Record<string, Node> = {}> extends Slider<Map> {
        constructor(identifier?: any)
    }
    /** A container that splits two child controls horizontally and provides a grabber for adjusting the split ratio.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_hsplitcontainer.html  
     */
    class HSplitContainer<Map extends Record<string, Node> = {}> extends SplitContainer<Map> {
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
        connectToHost(host: string, port: int64 = -1, tlsOptions: any /*TLSOptions*/ = undefined): GError
        requestRaw(method: HttpClient.Method, url: string, headers: PackedStringArray | string[], body: PackedByteArray | byte[] | ArrayBuffer): GError
        request(method: HttpClient.Method, url: string, headers: PackedStringArray | string[], body: string = ''): GError
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
        get connection(): StreamPeer
        set connection(value: StreamPeer)
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
    class HttpRequest<Map extends Record<string, Node> = {}> extends Node<Map> {
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
        request(url: string, customHeaders: PackedStringArray | string[] = [], method: HttpClient.Method = 0, requestData: string = ''): GError
        requestRaw(url: string, customHeaders: PackedStringArray | string[] = [], method: HttpClient.Method = 0, requestDataRaw: PackedByteArray | byte[] | ArrayBuffer = []): GError
        cancelRequest(): void
        setTlsOptions(clientOptions: any /*TLSOptions*/): void
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
        readonly requestCompleted: Signal<(result: int64, responseCode: int64, headers: PackedStringArray | string[], body: PackedByteArray | byte[] | ArrayBuffer) => void>
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
        getMinHeight(): float64
        getMaxHeight(): float64
        updateMapDataFromImage(image: Image, heightMin: float64, heightMax: float64): void
        get mapWidth(): int64
        set mapWidth(value: int64)
        get mapDepth(): int64
        set mapDepth(value: int64)
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
    class HingeJoint3D<Map extends Record<string, Node> = {}> extends Joint3D<Map> {
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
        setParam(param: HingeJoint3D.Param, value: float64): void
        getParam(param: HingeJoint3D.Param): float64
        setFlag(flag: HingeJoint3D.Flag, enabled: boolean): void
        getFlag(flag: HingeJoint3D.Flag): boolean
        
        /** The speed with which the two bodies get pulled together when they move in different directions. */
        get "params/bias"(): float64
        set "params/bias"(value: float64)
        get "angularLimit/enable"(): boolean
        set "angularLimit/enable"(value: boolean)
        get "angularLimit/upper"(): float64
        set "angularLimit/upper"(value: float64)
        get "angularLimit/lower"(): float64
        set "angularLimit/lower"(value: float64)
        get "angularLimit/bias"(): float64
        set "angularLimit/bias"(value: float64)
        get "angularLimit/softness"(): float64
        set "angularLimit/softness"(value: float64)
        get "angularLimit/relaxation"(): float64
        set "angularLimit/relaxation"(value: float64)
        
        /** When activated, a motor turns the hinge. */
        get "motor/enable"(): boolean
        set "motor/enable"(value: boolean)
        get "motor/targetVelocity"(): float64
        set "motor/targetVelocity"(value: float64)
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
        getWidth(): int64
        getHeight(): int64
        getSize(): Vector2I
        hasMipmaps(): boolean
        getFormat(): Image.Format
        getData(): PackedByteArray
        getDataSize(): int64
        
        /** Converts the image's format. See [enum Format] constants. */
        convert(format: Image.Format): void
        getMipmapCount(): int64
        getMipmapOffset(mipmap: int64): int64
        resizeToPo2(square: boolean = false, interpolation: Image.Interpolation = 1): void
        
        /** Resizes the image to the given [param width] and [param height]. New pixels are calculated using the [param interpolation] mode defined via [enum Interpolation] constants. */
        resize(width: int64, height: int64, interpolation: Image.Interpolation = 1): void
        shrinkX2(): void
        
        /** Crops the image to the given [param width] and [param height]. If the specified size is larger than the current size, the extra area is filled with black pixels. */
        crop(width: int64, height: int64): void
        flipX(): void
        flipY(): void
        generateMipmaps(renormalize: boolean = false): GError
        clearMipmaps(): void
        
        /** Creates an empty image of given size and format. See [enum Format] constants. If [param use_mipmaps] is `true`, then generate mipmaps for this image. See the [method generate_mipmaps]. */
        static create(width: int64, height: int64, useMipmaps: boolean, format: Image.Format): Image
        static createEmpty(width: int64, height: int64, useMipmaps: boolean, format: Image.Format): Image
        static createFromData(width: int64, height: int64, useMipmaps: boolean, format: Image.Format, data: PackedByteArray | byte[] | ArrayBuffer): Image
        setData(width: int64, height: int64, useMipmaps: boolean, format: Image.Format, data: PackedByteArray | byte[] | ArrayBuffer): void
        isEmpty(): boolean
        
        /** Loads an image from file [param path]. See [url=https://docs.godotengine.org/en/latest/tutorials/assets_pipeline/importing_images.html#supported-image-formats]Supported image formats[/url] for a list of supported image formats and limitations.  
         *  **Warning:** This method should only be used in the editor or in cases when you need to load external images at run-time, such as images located at the `user://` directory, and may not work in exported projects.  
         *  See also [ImageTexture] description for usage examples.  
         */
        load(path: string): GError
        static loadFromFile(path: string): Image
        savePng(path: string): GError
        savePngToBuffer(): PackedByteArray
        saveJpg(path: string, quality: float64 = 0.75): GError
        saveJpgToBuffer(quality: float64 = 0.75): PackedByteArray
        saveExr(path: string, grayscale: boolean = false): GError
        saveExrToBuffer(grayscale: boolean = false): PackedByteArray
        saveWebp(path: string, lossy: boolean = false, quality: float64 = 0.75): GError
        saveWebpToBuffer(lossy: boolean = false, quality: float64 = 0.75): PackedByteArray
        detectAlpha(): Image.AlphaMode
        isInvisible(): boolean
        detectUsedChannels(source: Image.CompressSource = 0): Image.UsedChannels
        
        /** Compresses the image to use less memory. Can not directly access pixel data while the image is compressed. Returns error if the chosen compression mode is not available.  
         *  The [param source] parameter helps to pick the best compression method for DXT and ETC2 formats. It is ignored for ASTC compression.  
         *  For ASTC compression, the [param astc_format] parameter must be supplied.  
         */
        compress(mode: Image.CompressMode, source: Image.CompressSource = 0, astcFormat: Image.AstcFormat = 0): GError
        compressFromChannels(mode: Image.CompressMode, channels: Image.UsedChannels, astcFormat: Image.AstcFormat = 0): GError
        
        /** Decompresses the image if it is VRAM compressed in a supported format. Returns [constant OK] if the format is supported, otherwise [constant ERR_UNAVAILABLE].  
         *      
         *  **Note:** The following formats can be decompressed: DXT, RGTC, BPTC. The formats ETC1 and ETC2 are not supported.  
         */
        decompress(): GError
        isCompressed(): boolean
        rotate90(direction: ClockDirection): void
        rotate180(): void
        fixAlphaEdges(): void
        premultiplyAlpha(): void
        srgbToLinear(): void
        linearToSrgb(): void
        normalMapToXy(): void
        rgbeToSrgb(): Image
        bumpMapToNormalMap(bumpScale: float64 = 1): void
        computeImageMetrics(comparedImage: Image, useLuma: boolean): GDictionary
        blitRect(src: Image, srcRect: Rect2I, dst: Vector2I): void
        blitRectMask(src: Image, mask: Image, srcRect: Rect2I, dst: Vector2I): void
        blendRect(src: Image, srcRect: Rect2I, dst: Vector2I): void
        blendRectMask(src: Image, mask: Image, srcRect: Rect2I, dst: Vector2I): void
        
        /** Fills the image with [param color]. */
        fill(color: Color): void
        fillRect(rect: Rect2I, color: Color): void
        getUsedRect(): Rect2I
        getRegion(region: Rect2I): Image
        copyFrom(src: Image): void
        getPixelv(point: Vector2I): Color
        getPixel(x: int64, y: int64): Color
        setPixelv(point: Vector2I, color: Color): void
        setPixel(x: int64, y: int64, color: Color): void
        adjustBcs(brightness: float64, contrast: float64, saturation: float64): void
        loadPngFromBuffer(buffer: PackedByteArray | byte[] | ArrayBuffer): GError
        loadJpgFromBuffer(buffer: PackedByteArray | byte[] | ArrayBuffer): GError
        loadWebpFromBuffer(buffer: PackedByteArray | byte[] | ArrayBuffer): GError
        loadTgaFromBuffer(buffer: PackedByteArray | byte[] | ArrayBuffer): GError
        loadBmpFromBuffer(buffer: PackedByteArray | byte[] | ArrayBuffer): GError
        loadKtxFromBuffer(buffer: PackedByteArray | byte[] | ArrayBuffer): GError
        loadSvgFromBuffer(buffer: PackedByteArray | byte[] | ArrayBuffer, scale: float64 = 1): GError
        loadSvgFromString(svgStr: string, scale: float64 = 1): GError
        
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
        /* gdvirtual */ _getRecognizedExtensions(): PackedStringArray
        /* gdvirtual */ _loadImage(image: Image, fileaccess: FileAccess, flags: ImageFormatLoader.LoaderFlags, scale: float64): GError
        addFormatLoader(): void
        removeFormatLoader(): void
    }
    /** A [Texture2D] based on an [Image].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_imagetexture.html  
     */
    class ImageTexture extends Texture2D {
        constructor(identifier?: any)
        static createFromImage(image: Image): ImageTexture
        getFormat(): Image.Format
        setImage(image: Image): void
        
        /** Replaces the texture's data with a new [Image].  
         *      
         *  **Note:** The texture has to be created using [method create_from_image] or initialized first with the [method set_image] method before it can be updated. The new image dimensions, format, and mipmaps configuration should match the existing texture's image configuration.  
         *  Use this method over [method set_image] if you need to update the texture frequently, which is faster than allocating additional memory for a new texture each time.  
         */
        update(image: Image): void
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
        createFromImages(images: GArray): GError
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
        surfaceBegin(primitive: Mesh.PrimitiveType, material: Material = undefined): void
        surfaceSetColor(color: Color): void
        surfaceSetNormal(normal: Vector3): void
        surfaceSetTangent(tangent: Plane): void
        surfaceSetUV(uV: Vector2): void
        surfaceSetUV2(uV2: Vector2): void
        surfaceAddVertex(vertex: Vector3): void
        surfaceAddVertex2D(vertex: Vector2): void
        surfaceEnd(): void
        clearSurfaces(): void
    }
    /** A [Resource] that contains vertex array-based geometry during the import process.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_importermesh.html  
     */
    class ImporterMesh extends Resource {
        constructor(identifier?: any)
        addBlendShape(name: string): void
        getBlendShapeCount(): int64
        getBlendShapeName(blendShapeIdx: int64): string
        setBlendShapeMode(mode: Mesh.BlendShapeMode): void
        getBlendShapeMode(): Mesh.BlendShapeMode
        addSurface(primitive: Mesh.PrimitiveType, arrays: GArray, blendShapes: GArray = [], lods: GDictionary = new GDictionary(), material: Material = undefined, name: string = '', flags: int64 = 0): void
        getSurfaceCount(): int64
        getSurfacePrimitiveType(surfaceIdx: int64): Mesh.PrimitiveType
        getSurfaceName(surfaceIdx: int64): string
        getSurfaceArrays(surfaceIdx: int64): GArray
        getSurfaceBlendShapeArrays(surfaceIdx: int64, blendShapeIdx: int64): GArray
        getSurfaceLodCount(surfaceIdx: int64): int64
        getSurfaceLodSize(surfaceIdx: int64, lodIdx: int64): float64
        getSurfaceLodIndices(surfaceIdx: int64, lodIdx: int64): PackedInt32Array
        getSurfaceMaterial(surfaceIdx: int64): Material
        getSurfaceFormat(surfaceIdx: int64): int64
        setSurfaceName(surfaceIdx: int64, name: string): void
        setSurfaceMaterial(surfaceIdx: int64, material: Material): void
        generateLods(normalMergeAngle: float64, normalSplitAngle: float64, boneTransformArray: GArray): void
        getMesh(baseMesh: ArrayMesh = undefined): ArrayMesh
        
        /** Removes all surfaces and blend shapes from this [ImporterMesh]. */
        clear(): void
        setLightmapSizeHint(size: Vector2I): void
        getLightmapSizeHint(): Vector2I
        get _data(): GDictionary
        set _data(value: GDictionary)
    }
    /** @link https://docs.godotengine.org/en/latest/classes/class_importermeshinstance3d.html */
    class ImporterMeshInstance3D<Map extends Record<string, Node> = {}> extends Node3D<Map> {
        constructor(identifier?: any)
        get mesh(): ImporterMesh
        set mesh(value: ImporterMesh)
        get skin(): Skin
        set skin(value: Skin)
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
        isAction(action: StringName, exactMatch: boolean = false): boolean
        isActionPressed(action: StringName, allowEcho: boolean = false, exactMatch: boolean = false): boolean
        isActionReleased(action: StringName, exactMatch: boolean = false): boolean
        getActionStrength(action: StringName, exactMatch: boolean = false): float64
        isCanceled(): boolean
        isPressed(): boolean
        isReleased(): boolean
        isEcho(): boolean
        asText(): string
        isMatch(event: InputEvent, exactMatch: boolean = true): boolean
        isActionType(): boolean
        
        /** Returns `true` if the given input event and this input event can be added together (only for events of type [InputEventMouseMotion]).  
         *  The given input event's position, global position and speed will be copied. The resulting `relative` is a sum of both events. Both events' modifiers have to be identical.  
         */
        accumulate(withEvent: InputEvent): boolean
        xformedBy(xform: Transform2D, localOfs: Vector2 = Vector2.ZERO): InputEvent
        
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
        /** The action's name. Actions are accessed via this [String]. */
        get action(): StringName
        set action(value: StringName)
        
        /** If `true`, the action's state is pressed. If `false`, the action's state is released. */
        get pressed(): boolean
        set pressed(value: boolean)
        
        /** The action's strength between 0 and 1. This value is considered as equal to 0 if pressed is `false`. The event strength allows faking analog joypad motion events, by specifying how strongly the joypad axis is bent or pressed. */
        get strength(): float64
        set strength(value: float64)
        get eventIndex(): int64
        set eventIndex(value: int64)
    }
    /** Abstract base class for [Viewport]-based input events.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_inputeventfromwindow.html  
     */
    class InputEventFromWindow extends InputEvent {
        constructor(identifier?: any)
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
        get axisValue(): float64
        set axisValue(value: float64)
    }
    /** Represents a key on a keyboard being pressed or released.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_inputeventkey.html  
     */
    class InputEventKey extends InputEventWithModifiers {
        constructor(identifier?: any)
        getKeycodeWithModifiers(): Key
        getPhysicalKeycodeWithModifiers(): Key
        getKeyLabelWithModifiers(): Key
        asTextKeycode(): string
        asTextPhysicalKeycode(): string
        asTextKeyLabel(): string
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
        get physicalKeycode(): int64
        set physicalKeycode(value: int64)
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
        get buttonMask(): int64
        set buttonMask(value: int64)
        
        /** When received in [method Node._input] or [method Node._unhandled_input], returns the mouse's position in the [Viewport] this [Node] is in using the coordinate system of this [Viewport].  
         *  When received in [method Control._gui_input], returns the mouse's position in the [Control] using the local coordinate system of the [Control].  
         */
        get position(): Vector2
        set position(value: Vector2)
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
        get buttonIndex(): int64
        set buttonIndex(value: int64)
        
        /** If `true`, the mouse button event has been canceled. */
        get canceled(): boolean
        set canceled(value: boolean)
        
        /** If `true`, the mouse button's state is pressed. If `false`, the mouse button's state is released. */
        get pressed(): boolean
        set pressed(value: boolean)
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
        get screenRelative(): Vector2
        set screenRelative(value: Vector2)
        
        /** The mouse velocity in pixels per second.  
         *      
         *  **Note:** [member velocity] is automatically scaled according to the content scale factor, which is defined by the project's stretch mode settings. This means mouse sensitivity will appear different depending on resolution when using [member velocity] in a script that handles mouse aiming with the [constant Input.MOUSE_MODE_CAPTURED] mouse mode. To avoid this, use [member screen_velocity] instead.  
         */
        get velocity(): Vector2
        set velocity(value: Vector2)
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
        get screenRelative(): Vector2
        set screenRelative(value: Vector2)
        
        /** The drag velocity.  
         *      
         *  **Note:** [member velocity] is automatically scaled according to the content scale factor, which is defined by the project's stretch mode settings. This means touch sensitivity will appear different depending on resolution when using [member velocity] in a script that handles touch aiming. To avoid this, use [member screen_velocity] instead.  
         */
        get velocity(): Vector2
        set velocity(value: Vector2)
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
        get shortcut(): Shortcut
        set shortcut(value: Shortcut)
    }
    /** Abstract base class for input events affected by modifier keys like [kbd]Shift[/kbd] and [kbd]Alt[/kbd].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_inputeventwithmodifiers.html  
     */
    class InputEventWithModifiers extends InputEventFromWindow {
        constructor(identifier?: any)
        isCommandOrControlPressed(): boolean
        getModifiersMask(): KeyModifierMask
        get commandOrControlAutoremap(): boolean
        set commandOrControlAutoremap(value: boolean)
        get altPressed(): boolean
        set altPressed(value: boolean)
        get shiftPressed(): boolean
        set shiftPressed(value: boolean)
        get ctrlPressed(): boolean
        set ctrlPressed(value: boolean)
        get metaPressed(): boolean
        set metaPressed(value: boolean)
    }
    /** Placeholder for the root [Node] of a [PackedScene].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_instanceplaceholder.html  
     */
    class InstancePlaceholder<Map extends Record<string, Node> = {}> extends Node<Map> {
        constructor(identifier?: any)
        getStoredValues(withOrder: boolean = false): GDictionary
        createInstance(replace: boolean = false, customScene: PackedScene = undefined): Node
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
    class ItemList<Map extends Record<string, Node> = {}> extends Control<Map> {
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
        addItem(text: string, icon: Texture2D = undefined, selectable: boolean = true): int64
        addIconItem(icon: Texture2D, selectable: boolean = true): int64
        setItemText(idx: int64, text: string): void
        getItemText(idx: int64): string
        setItemIcon(idx: int64, icon: Texture2D): void
        getItemIcon(idx: int64): Texture2D
        setItemTextDirection(idx: int64, direction: Control.TextDirection): void
        getItemTextDirection(idx: int64): Control.TextDirection
        setItemLanguage(idx: int64, language: string): void
        getItemLanguage(idx: int64): string
        setItemAutoTranslateMode(idx: int64, mode: Node.AutoTranslateMode): void
        getItemAutoTranslateMode(idx: int64): Node.AutoTranslateMode
        setItemIconTransposed(idx: int64, transposed: boolean): void
        isItemIconTransposed(idx: int64): boolean
        setItemIconRegion(idx: int64, rect: Rect2): void
        getItemIconRegion(idx: int64): Rect2
        setItemIconModulate(idx: int64, modulate: Color): void
        getItemIconModulate(idx: int64): Color
        setItemSelectable(idx: int64, selectable: boolean): void
        isItemSelectable(idx: int64): boolean
        setItemDisabled(idx: int64, disabled: boolean): void
        isItemDisabled(idx: int64): boolean
        setItemMetadata(idx: int64, metadata: any): void
        getItemMetadata(idx: int64): any
        setItemCustomBgColor(idx: int64, customBgColor: Color): void
        getItemCustomBgColor(idx: int64): Color
        setItemCustomFgColor(idx: int64, customFgColor: Color): void
        getItemCustomFgColor(idx: int64): Color
        getItemRect(idx: int64, expand: boolean = true): Rect2
        setItemTooltipEnabled(idx: int64, enable: boolean): void
        isItemTooltipEnabled(idx: int64): boolean
        setItemTooltip(idx: int64, tooltip: string): void
        getItemTooltip(idx: int64): string
        
        /** Select the item at the specified index.  
         *      
         *  **Note:** This method does not trigger the item selection signal.  
         */
        select(idx: int64, single: boolean = true): void
        
        /** Ensures the item associated with the specified index is not selected. */
        deselect(idx: int64): void
        deselectAll(): void
        isSelected(idx: int64): boolean
        getSelectedItems(): PackedInt32Array
        moveItem(fromIdx: int64, toIdx: int64): void
        removeItem(idx: int64): void
        
        /** Removes all items from the list. */
        clear(): void
        sortItemsByText(): void
        isAnythingSelected(): boolean
        getItemAtPosition(position: Vector2, exact: boolean = false): int64
        ensureCurrentIsVisible(): void
        getVScrollBar(): VScrollBar
        getHScrollBar(): HScrollBar
        forceUpdateListSize(): void
        get selectMode(): int64
        set selectMode(value: int64)
        get allowReselect(): boolean
        set allowReselect(value: boolean)
        get allowRmbSelect(): boolean
        set allowRmbSelect(value: boolean)
        get allowSearch(): boolean
        set allowSearch(value: boolean)
        get maxTextLines(): int64
        set maxTextLines(value: int64)
        get autoWidth(): boolean
        set autoWidth(value: boolean)
        get autoHeight(): boolean
        set autoHeight(value: boolean)
        get textOverrunBehavior(): int64
        set textOverrunBehavior(value: int64)
        get wraparoundItems(): boolean
        set wraparoundItems(value: boolean)
        get itemCount(): any /*Items,item_*/
        set itemCount(value: any /*Items,item_*/)
        get maxColumns(): int64
        set maxColumns(value: int64)
        get sameColumnWidth(): boolean
        set sameColumnWidth(value: boolean)
        get fixedColumnWidth(): int64
        set fixedColumnWidth(value: int64)
        get iconMode(): int64
        set iconMode(value: int64)
        get iconScale(): float64
        set iconScale(value: float64)
        get fixedIconSize(): Vector2I
        set fixedIconSize(value: Vector2I)
        readonly itemSelected: Signal<(index: int64) => void>
        readonly emptyClicked: Signal<(atPosition: Vector2, mouseButtonIndex: int64) => void>
        readonly itemClicked: Signal<(index: int64, atPosition: Vector2, mouseButtonIndex: int64) => void>
        readonly multiSelected: Signal<(index: int64, selected: boolean) => void>
        readonly itemActivated: Signal<(index: int64) => void>
    }
    class JniSingleton extends GObject {
        constructor(identifier?: any)
    }
    class Json extends Resource {
        constructor(identifier?: any)
        static stringify(data: any, indent: string = '', sortKeys: boolean = true, fullPrecision: boolean = false): string
        static parseString(jsonString: string): any
        parse(jsonText: string, keepText: boolean = false): GError
        getParsedText(): string
        getErrorLine(): int64
        getErrorMessage(): string
        static fromNative(variant: any, fullObjects: boolean = false): any
        static toNative(json: any, allowObjects: boolean = false): any
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
        setScope(scope: string, target: GObject): void
        processAction(action: any, recurse: boolean = false): any
        processString(action: string): string
        makeRequest(method: string, params: any, id: any): GDictionary
        makeResponse(result: any, id: any): GDictionary
        makeNotification(method: string, params: any): GDictionary
        makeResponseError(code: int64, message: string, id: any = <any> {}): GDictionary
    }
    /** Represents a class from the Java Native Interface.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_javaclass.html  
     */
    class JavaClass extends RefCounted {
        constructor(identifier?: any)
        getJavaClassName(): string
        getJavaMethodList(): GArray
        getJavaParentClass(): JavaClass
    }
    /** Represents an object from the Java Native Interface.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_javaobject.html  
     */
    class JavaObject extends RefCounted {
        constructor(identifier?: any)
        getJavaClass(): JavaClass
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
    class Joint2D<Map extends Record<string, Node> = {}> extends Node2D<Map> {
        constructor(identifier?: any)
        getRid(): Rid
        get nodeA(): NodePath
        set nodeA(value: NodePath | string)
        get nodeB(): NodePath
        set nodeB(value: NodePath | string)
        
        /** When [member node_a] and [member node_b] move in different directions the [member bias] controls how fast the joint pulls them back to their original position. The lower the [member bias] the more the two bodies can pull on the joint.  
         *  When set to `0`, the default value from [member ProjectSettings.physics/2d/solver/default_constraint_bias] is used.  
         */
        get bias(): float64
        set bias(value: float64)
        get disableCollision(): boolean
        set disableCollision(value: boolean)
    }
    /** Abstract base class for all 3D physics joints.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_joint3d.html  
     */
    class Joint3D<Map extends Record<string, Node> = {}> extends Node3D<Map> {
        constructor(identifier?: any)
        getRid(): Rid
        get nodeA(): NodePath
        set nodeA(value: NodePath | string)
        get nodeB(): NodePath
        set nodeB(value: NodePath | string)
        get solverPriority(): int64
        set solverPriority(value: int64)
        get excludeNodesFromCollision(): boolean
        set excludeNodesFromCollision(value: boolean)
    }
    /** Holds collision data from the movement of a [PhysicsBody2D].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_kinematiccollision2d.html  
     */
    class KinematicCollision2D extends RefCounted {
        constructor(identifier?: any)
        getPosition(): Vector2
        getNormal(): Vector2
        getTravel(): Vector2
        getRemainder(): Vector2
        getAngle(upDirection: Vector2 = new Vector2(0, -1)): float64
        getDepth(): float64
        getLocalShape(): GObject
        getCollider(): GObject
        getColliderId(): int64
        getColliderRid(): Rid
        getColliderShape(): GObject
        getColliderShapeIndex(): int64
        getColliderVelocity(): Vector2
    }
    /** Holds collision data from the movement of a [PhysicsBody3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_kinematiccollision3d.html  
     */
    class KinematicCollision3D extends RefCounted {
        constructor(identifier?: any)
        getTravel(): Vector3
        getRemainder(): Vector3
        getDepth(): float64
        getCollisionCount(): int64
        getPosition(collisionIndex: int64 = 0): Vector3
        getNormal(collisionIndex: int64 = 0): Vector3
        getAngle(collisionIndex: int64 = 0, upDirection: Vector3 = Vector3.ZERO): float64
        getLocalShape(collisionIndex: int64 = 0): GObject
        getCollider(collisionIndex: int64 = 0): GObject
        getColliderId(collisionIndex: int64 = 0): int64
        getColliderRid(collisionIndex: int64 = 0): Rid
        getColliderShape(collisionIndex: int64 = 0): GObject
        getColliderShapeIndex(collisionIndex: int64 = 0): int64
        getColliderVelocity(collisionIndex: int64 = 0): Vector3
    }
    /** A control for displaying plain text.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_label.html  
     */
    class Label<Map extends Record<string, Node> = {}> extends Control<Map> {
        constructor(identifier?: any)
        getLineHeight(line: int64 = -1): int64
        getLineCount(): int64
        getVisibleLineCount(): int64
        getTotalCharacterCount(): int64
        getCharacterBounds(pos: int64): Rect2
        
        /** The text to display on screen. */
        get text(): string
        set text(value: string)
        get labelSettings(): LabelSettings
        set labelSettings(value: LabelSettings)
        get horizontalAlignment(): int64
        set horizontalAlignment(value: int64)
        get verticalAlignment(): int64
        set verticalAlignment(value: int64)
        get autowrapMode(): int64
        set autowrapMode(value: int64)
        get justificationFlags(): int64
        set justificationFlags(value: int64)
        get paragraphSeparator(): string
        set paragraphSeparator(value: string)
        get clipText(): boolean
        set clipText(value: boolean)
        get textOverrunBehavior(): int64
        set textOverrunBehavior(value: int64)
        get ellipsisChar(): string
        set ellipsisChar(value: string)
        
        /** If `true`, all the text displays as UPPERCASE. */
        get uppercase(): boolean
        set uppercase(value: boolean)
        get tabStops(): PackedFloat32Array
        set tabStops(value: PackedFloat32Array | float32[])
        get linesSkipped(): int64
        set linesSkipped(value: int64)
        get maxLinesVisible(): int64
        set maxLinesVisible(value: int64)
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
    class Label3D<Map extends Record<string, Node> = {}> extends GeometryInstance3D<Map> {
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
        setDrawFlag(flag: Label3D.DrawFlags, enabled: boolean): void
        getDrawFlag(flag: Label3D.DrawFlags): boolean
        generateTriangleMesh(): TriangleMesh
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
        get outlineRenderPriority(): int64
        set outlineRenderPriority(value: int64)
        
        /** Text [Color] of the [Label3D]. */
        get modulate(): Color
        set modulate(value: Color)
        get outlineModulate(): Color
        set outlineModulate(value: Color)
        
        /** The text to display on screen. */
        get text(): string
        set text(value: string)
        
        /** Font configuration used to display text. */
        get font(): Font
        set font(value: Font)
        get fontSize(): int64
        set fontSize(value: int64)
        get outlineSize(): int64
        set outlineSize(value: int64)
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
        
        /** Text width (in pixels), used for autowrap and fill alignment. */
        get width(): float64
        set width(value: float64)
        get textDirection(): int64
        set textDirection(value: int64)
        
        /** Language code used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        get language(): string
        set language(value: string)
        get structuredTextBidiOverride(): int64
        set structuredTextBidiOverride(value: int64)
        get structuredTextBidiOverrideOptions(): GArray
        set structuredTextBidiOverrideOptions(value: GArray)
    }
    /** Provides common settings to customize the text in a [Label].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_labelsettings.html  
     */
    class LabelSettings extends Resource {
        constructor(identifier?: any)
        get lineSpacing(): float64
        set lineSpacing(value: float64)
        get paragraphSpacing(): float64
        set paragraphSpacing(value: float64)
        
        /** [Font] used for the text. */
        get font(): Font
        set font(value: Font)
        get fontSize(): int64
        set fontSize(value: int64)
        get fontColor(): Color
        set fontColor(value: Color)
        get outlineSize(): int64
        set outlineSize(value: int64)
        get outlineColor(): Color
        set outlineColor(value: Color)
        get shadowSize(): int64
        set shadowSize(value: int64)
        get shadowColor(): Color
        set shadowColor(value: Color)
        get shadowOffset(): Vector2
        set shadowOffset(value: Vector2)
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
    class Light2D<Map extends Record<string, Node> = {}> extends Node2D<Map> {
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
        setHeight(height: float64): void
        getHeight(): float64
        
        /** If `true`, Light2D will emit light. */
        get enabled(): boolean
        set enabled(value: boolean)
        get editorOnly(): boolean
        set editorOnly(value: boolean)
        
        /** The Light2D's [Color]. */
        get color(): Color
        set color(value: Color)
        
        /** The Light2D's energy value. The larger the value, the stronger the light. */
        get energy(): float64
        set energy(value: float64)
        get blendMode(): int64
        set blendMode(value: int64)
        get rangeZMin(): int64
        set rangeZMin(value: int64)
        get rangeZMax(): int64
        set rangeZMax(value: int64)
        get rangeLayerMin(): int64
        set rangeLayerMin(value: int64)
        get rangeLayerMax(): int64
        set rangeLayerMax(value: int64)
        get rangeItemCullMask(): int64
        set rangeItemCullMask(value: int64)
        get shadowEnabled(): boolean
        set shadowEnabled(value: boolean)
        get shadowColor(): Color
        set shadowColor(value: Color)
        get shadowFilter(): int64
        set shadowFilter(value: int64)
        get shadowFilterSmooth(): float64
        set shadowFilterSmooth(value: float64)
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
    class Light3D<Map extends Record<string, Node> = {}> extends VisualInstance3D<Map> {
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
        
        /** Light is ignored when baking. This is the fastest mode, but the light will be taken into account when baking global illumination. This mode should generally be used for dynamic lights that change quickly, as the effect of global illumination is less noticeable on those lights.  
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
        setParam(param: Light3D.Param, value: float64): void
        getParam(param: Light3D.Param): float64
        getCorrelatedColor(): Color
        get lightIntensityLumens(): float64
        set lightIntensityLumens(value: float64)
        get lightIntensityLux(): float64
        set lightIntensityLux(value: float64)
        get lightTemperature(): float64
        set lightTemperature(value: float64)
        get lightColor(): Color
        set lightColor(value: Color)
        get lightEnergy(): float64
        set lightEnergy(value: float64)
        get lightIndirectEnergy(): float64
        set lightIndirectEnergy(value: float64)
        get lightVolumetricFogEnergy(): float64
        set lightVolumetricFogEnergy(value: float64)
        get lightProjector(): Texture2D | any /*-AnimatedTexture*/ | any /*-AtlasTexture*/ | any /*-CameraTexture*/ | any /*-CanvasTexture*/ | any /*-MeshTexture*/ | any /*-Texture2DRD*/ | any /*-ViewportTexture*/
        set lightProjector(value: Texture2D | any /*-AnimatedTexture*/ | any /*-AtlasTexture*/ | any /*-CameraTexture*/ | any /*-CanvasTexture*/ | any /*-MeshTexture*/ | any /*-Texture2DRD*/ | any /*-ViewportTexture*/)
        get lightSize(): float64
        set lightSize(value: float64)
        get lightAngularDistance(): float64
        set lightAngularDistance(value: float64)
        get lightNegative(): boolean
        set lightNegative(value: boolean)
        get lightSpecular(): float64
        set lightSpecular(value: float64)
        get lightBakeMode(): int64
        set lightBakeMode(value: int64)
        get lightCullMask(): int64
        set lightCullMask(value: int64)
        get shadowEnabled(): boolean
        set shadowEnabled(value: boolean)
        get shadowBias(): float64
        set shadowBias(value: float64)
        get shadowNormalBias(): float64
        set shadowNormalBias(value: float64)
        get shadowReverseCullFace(): boolean
        set shadowReverseCullFace(value: boolean)
        get shadowTransmittanceBias(): float64
        set shadowTransmittanceBias(value: float64)
        get shadowOpacity(): float64
        set shadowOpacity(value: float64)
        get shadowBlur(): float64
        set shadowBlur(value: float64)
        get shadowCasterMask(): int64
        set shadowCasterMask(value: int64)
        get distanceFadeEnabled(): boolean
        set distanceFadeEnabled(value: boolean)
        get distanceFadeBegin(): float64
        set distanceFadeBegin(value: float64)
        get distanceFadeShadow(): float64
        set distanceFadeShadow(value: float64)
        get distanceFadeLength(): float64
        set distanceFadeLength(value: float64)
        get editorOnly(): boolean
        set editorOnly(value: boolean)
    }
    /** Occludes light cast by a Light2D, casting shadows.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_lightoccluder2d.html  
     */
    class LightOccluder2D<Map extends Record<string, Node> = {}> extends Node2D<Map> {
        constructor(identifier?: any)
        /** The [OccluderPolygon2D] used to compute the shadow. */
        get occluder(): OccluderPolygon2D
        set occluder(value: OccluderPolygon2D)
        get sdfCollision(): boolean
        set sdfCollision(value: boolean)
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
    class LightmapGI<Map extends Record<string, Node> = {}> extends VisualInstance3D<Map> {
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
        get supersamplingFactor(): float64
        set supersamplingFactor(value: float64)
        
        /** Number of light bounces that are taken into account during baking. Higher values result in brighter, more realistic lighting, at the cost of longer bake times. If set to `0`, only environment lighting, direct light and emissive lighting is baked. */
        get bounces(): int64
        set bounces(value: int64)
        get bounceIndirectEnergy(): float64
        set bounceIndirectEnergy(value: float64)
        
        /** If `true`, bakes lightmaps to contain directional information as spherical harmonics. This results in more realistic lighting appearance, especially with normal mapped materials and for lights that have their direct light baked ([member Light3D.light_bake_mode] set to [constant Light3D.BAKE_STATIC] and with [member Light3D.editor_only] set to `false`). The directional information is also used to provide rough reflections for static and dynamic objects. This has a small run-time performance cost as the shader has to perform more work to interpret the direction information from the lightmap. Directional lightmaps also take longer to bake and result in larger file sizes.  
         *      
         *  **Note:** The property's name has no relationship with [DirectionalLight3D]. [member directional] works with all light types.  
         */
        get directional(): boolean
        set directional(value: boolean)
        get shadowmaskMode(): int64
        set shadowmaskMode(value: int64)
        get useTextureForBounces(): boolean
        set useTextureForBounces(value: boolean)
        
        /** If `true`, ignore environment lighting when baking lightmaps. */
        get interior(): boolean
        set interior(value: boolean)
        get useDenoiser(): boolean
        set useDenoiser(value: boolean)
        get denoiserStrength(): float64
        set denoiserStrength(value: float64)
        get denoiserRange(): int64
        set denoiserRange(value: int64)
        
        /** The bias to use when computing shadows. Increasing [member bias] can fix shadow acne on the resulting baked lightmap, but can introduce peter-panning (shadows not connecting to their casters). Real-time [Light3D] shadows are not affected by this [member bias] property. */
        get bias(): float64
        set bias(value: float64)
        get texelScale(): float64
        set texelScale(value: float64)
        get maxTextureSize(): int64
        set maxTextureSize(value: int64)
        get environmentMode(): int64
        set environmentMode(value: int64)
        get environmentCustomSky(): Sky
        set environmentCustomSky(value: Sky)
        get environmentCustomColor(): Color
        set environmentCustomColor(value: Color)
        get environmentCustomEnergy(): float64
        set environmentCustomEnergy(value: float64)
        get cameraAttributes(): CameraAttributesPractical | CameraAttributesPhysical
        set cameraAttributes(value: CameraAttributesPractical | CameraAttributesPhysical)
        get generateProbesSubdiv(): int64
        set generateProbesSubdiv(value: int64)
        get lightData(): LightmapGIData
        set lightData(value: LightmapGIData)
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
        addUser(path: NodePath | string, uVScale: Rect2, sliceIndex: int64, subInstance: int64): void
        getUserCount(): int64
        getUserPath(userIdx: int64): NodePath
        clearUsers(): void
        get lightmapTextures(): GArray
        set lightmapTextures(value: GArray)
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
        get lightTexture(): TextureLayered
        set lightTexture(value: TextureLayered)
        get lightTextures(): GArray
        set lightTextures(value: GArray)
    }
    /** Represents a single manually placed probe for dynamic object lighting with [LightmapGI].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_lightmapprobe.html  
     */
    class LightmapProbe<Map extends Record<string, Node> = {}> extends Node3D<Map> {
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
    class Line2D<Map extends Record<string, Node> = {}> extends Node2D<Map> {
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
        setPointPosition(index: int64, position: Vector2): void
        getPointPosition(index: int64): Vector2
        getPointCount(): int64
        addPoint(position: Vector2, index: int64 = -1): void
        removePoint(index: int64): void
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
        get widthCurve(): Curve
        set widthCurve(value: Curve)
        get defaultColor(): Color
        set defaultColor(value: Color)
        
        /** The gradient is drawn through the whole line from start to finish. The [member default_color] will not be used if this property is set. */
        get gradient(): Gradient
        set gradient(value: Gradient)
        
        /** The texture used for the polyline. Uses [member texture_mode] for drawing style. */
        get texture(): Texture2D
        set texture(value: Texture2D)
        get textureMode(): int64
        set textureMode(value: int64)
        get jointMode(): int64
        set jointMode(value: int64)
        get beginCapMode(): int64
        set beginCapMode(value: int64)
        get endCapMode(): int64
        set endCapMode(value: int64)
        get sharpLimit(): float64
        set sharpLimit(value: float64)
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
    class LineEdit<Map extends Record<string, Node> = {}> extends Control<Map> {
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
        hasImeText(): boolean
        cancelIme(): void
        applyIme(): void
        
        /** Allows entering edit mode whether the [LineEdit] is focused or not.  
         *  See also [member keep_editing_on_text_submit].  
         */
        edit(): void
        
        /** Allows exiting edit mode while preserving focus. */
        unedit(): void
        isEditing(): boolean
        
        /** Erases the [LineEdit]'s [member text]. */
        clear(): void
        
        /** Selects characters inside [LineEdit] between [param from] and [param to]. By default, [param from] is at the beginning and [param to] at the end.  
         *    
         */
        select(from: int64 = 0, to: int64 = -1): void
        selectAll(): void
        
        /** Clears the current selection. */
        deselect(): void
        hasUndo(): boolean
        hasRedo(): boolean
        hasSelection(): boolean
        getSelectedText(): string
        getSelectionFromColumn(): int64
        getSelectionToColumn(): int64
        getScrollOffset(): float64
        insertTextAtCaret(text: string): void
        deleteCharAtCaret(): void
        deleteText(fromColumn: int64, toColumn: int64): void
        menuOption(option: int64): void
        getMenu(): PopupMenu
        isMenuVisible(): boolean
        
        /** String value of the [LineEdit].  
         *      
         *  **Note:** Changing text using this property won't emit the [signal text_changed] signal.  
         */
        get text(): string
        set text(value: string)
        get placeholderText(): string
        set placeholderText(value: string)
        
        /** Text alignment as defined in the [enum HorizontalAlignment] enum. */
        get alignment(): int64
        set alignment(value: int64)
        get maxLength(): int64
        set maxLength(value: int64)
        
        /** If `false`, existing text cannot be modified and new text cannot be added. */
        get editable(): boolean
        set editable(value: boolean)
        get keepEditingOnTextSubmit(): boolean
        set keepEditingOnTextSubmit(value: boolean)
        get expandToTextLength(): boolean
        set expandToTextLength(value: boolean)
        get contextMenuEnabled(): boolean
        set contextMenuEnabled(value: boolean)
        get emojiMenuEnabled(): boolean
        set emojiMenuEnabled(value: boolean)
        get virtualKeyboardEnabled(): boolean
        set virtualKeyboardEnabled(value: boolean)
        get virtualKeyboardType(): int64
        set virtualKeyboardType(value: int64)
        get clearButtonEnabled(): boolean
        set clearButtonEnabled(value: boolean)
        get shortcutKeysEnabled(): boolean
        set shortcutKeysEnabled(value: boolean)
        get middleMousePasteEnabled(): boolean
        set middleMousePasteEnabled(value: boolean)
        get selectingEnabled(): boolean
        set selectingEnabled(value: boolean)
        get deselectOnFocusLossEnabled(): boolean
        set deselectOnFocusLossEnabled(value: boolean)
        get dragAndDropSelectionEnabled(): boolean
        set dragAndDropSelectionEnabled(value: boolean)
        get rightIcon(): Texture2D
        set rightIcon(value: Texture2D)
        
        /** If `true`, the [LineEdit] doesn't display decoration. */
        get flat(): boolean
        set flat(value: boolean)
        get drawControlChars(): boolean
        set drawControlChars(value: boolean)
        get selectAllOnFocus(): boolean
        set selectAllOnFocus(value: boolean)
        get caretBlink(): boolean
        set caretBlink(value: boolean)
        get caretBlinkInterval(): float64
        set caretBlinkInterval(value: float64)
        get caretColumn(): int64
        set caretColumn(value: int64)
        get caretForceDisplayed(): boolean
        set caretForceDisplayed(value: boolean)
        get caretMidGrapheme(): boolean
        set caretMidGrapheme(value: boolean)
        
        /** If `true`, every character is replaced with the secret character (see [member secret_character]). */
        get secret(): boolean
        set secret(value: boolean)
        get secretCharacter(): string
        set secretCharacter(value: string)
        get textDirection(): int64
        set textDirection(value: int64)
        
        /** Language code used for line-breaking and text shaping algorithms. If left empty, current locale is used instead. */
        get language(): string
        set language(value: string)
        get structuredTextBidiOverride(): int64
        set structuredTextBidiOverride(value: int64)
        get structuredTextBidiOverrideOptions(): GArray
        set structuredTextBidiOverrideOptions(value: GArray)
        readonly textChanged: Signal<(newText: string) => void>
        readonly textChangeRejected: Signal<(rejectedSubstring: string) => void>
        readonly textSubmitted: Signal<(newText: string) => void>
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
    class LinkButton<Map extends Record<string, Node> = {}> extends BaseButton<Map> {
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
        get textDirection(): int64
        set textDirection(value: int64)
        
        /** Language code used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        get language(): string
        set language(value: string)
        get structuredTextBidiOverride(): int64
        set structuredTextBidiOverride(value: int64)
        get structuredTextBidiOverrideOptions(): GArray
        set structuredTextBidiOverrideOptions(value: GArray)
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
    class LookAtModifier3D<Map extends Record<string, Node> = {}> extends SkeletonModifier3D<Map> {
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
        getInterpolationRemaining(): float64
        isInterpolating(): boolean
        isTargetWithinLimitation(): boolean
        get targetNode(): NodePath
        set targetNode(value: NodePath | string)
        get boneName(): string
        set boneName(value: string)
        
        /** Index of the [member bone_name] in the parent [Skeleton3D]. */
        get bone(): int64
        set bone(value: int64)
        get forwardAxis(): int64
        set forwardAxis(value: int64)
        get primaryRotationAxis(): int64
        set primaryRotationAxis(value: int64)
        get useSecondaryRotation(): boolean
        set useSecondaryRotation(value: boolean)
        get originFrom(): int64
        set originFrom(value: int64)
        get originBoneName(): string
        set originBoneName(value: string)
        get originBone(): int64
        set originBone(value: int64)
        get originExternalNode(): NodePath
        set originExternalNode(value: NodePath | string)
        get originOffset(): Vector3
        set originOffset(value: Vector3)
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
        get transitionType(): int64
        set transitionType(value: int64)
        get easeType(): int64
        set easeType(value: int64)
        get useAngleLimitation(): boolean
        set useAngleLimitation(value: boolean)
        get symmetryLimitation(): boolean
        set symmetryLimitation(value: boolean)
        get primaryLimitAngle(): float64
        set primaryLimitAngle(value: float64)
        get primaryDampThreshold(): float64
        set primaryDampThreshold(value: float64)
        get primaryPositiveLimitAngle(): float64
        set primaryPositiveLimitAngle(value: float64)
        get primaryPositiveDampThreshold(): float64
        set primaryPositiveDampThreshold(value: float64)
        get primaryNegativeLimitAngle(): float64
        set primaryNegativeLimitAngle(value: float64)
        get primaryNegativeDampThreshold(): float64
        set primaryNegativeDampThreshold(value: float64)
        get secondaryLimitAngle(): float64
        set secondaryLimitAngle(value: float64)
        get secondaryDampThreshold(): float64
        set secondaryDampThreshold(value: float64)
        get secondaryPositiveLimitAngle(): float64
        set secondaryPositiveLimitAngle(value: float64)
        get secondaryPositiveDampThreshold(): float64
        set secondaryPositiveDampThreshold(value: float64)
        get secondaryNegativeLimitAngle(): float64
        set secondaryNegativeLimitAngle(value: float64)
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
        /* gdvirtual */ _physicsProcess(delta: float64): boolean
        
        /** Called each process (idle) frame with the time since the last process frame as argument (in seconds). Equivalent to [method Node._process].  
         *  If implemented, the method must return a boolean value. `true` ends the main loop, while `false` lets it proceed to the next frame.  
         *      
         *  **Note:** [param delta] will be larger than expected if running at a framerate lower than [member Engine.physics_ticks_per_second] / [member Engine.max_physics_steps_per_frame] FPS. This is done to avoid "spiral of death" scenarios where performance would plummet due to an ever-increasing number of physics steps per frame. This behavior affects both [method _process] and [method _physics_process]. As a result, avoid using [param delta] for time measurements in real-world seconds. Use the [Time] singleton's methods for this purpose instead, such as [method Time.get_ticks_usec].  
         */
        /* gdvirtual */ _process(delta: float64): boolean
        
        /** Called before the program exits. */
        /* gdvirtual */ _finalize(): void
        readonly onRequestPermissionsResult: Signal<(permission: string, granted: boolean) => void>
    }
    /** A container that keeps a margin around its child controls.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_margincontainer.html  
     */
    class MarginContainer<Map extends Record<string, Node> = {}> extends Container<Map> {
        constructor(identifier?: any)
    }
    /** Generic 2D position hint for editing.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_marker2d.html  
     */
    class Marker2D<Map extends Record<string, Node> = {}> extends Node2D<Map> {
        constructor(identifier?: any)
        get gizmoExtents(): float64
        set gizmoExtents(value: float64)
    }
    /** Generic 3D position hint for editing.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_marker3d.html  
     */
    class Marker3D<Map extends Record<string, Node> = {}> extends Node3D<Map> {
        constructor(identifier?: any)
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
        /* gdvirtual */ _getShaderRid(): Rid
        /* gdvirtual */ _getShaderMode(): Shader.Mode
        /* gdvirtual */ _canDoNextPass(): boolean
        /* gdvirtual */ _canUseRenderPriority(): boolean
        inspectNativeShaderCode(): void
        createPlaceholder(): Resource
        get renderPriority(): int64
        set renderPriority(value: int64)
        get nextPass(): Material
        set nextPass(value: Material)
    }
    /** A horizontal menu bar that creates a menu for each [PopupMenu] child.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_menubar.html  
     */
    class MenuBar<Map extends Record<string, Node> = {}> extends Control<Map> {
        constructor(identifier?: any)
        setDisableShortcuts(disabled: boolean): void
        isNativeMenu(): boolean
        getMenuCount(): int64
        setMenuTitle(menu: int64, title: string): void
        getMenuTitle(menu: int64): string
        setMenuTooltip(menu: int64, tooltip: string): void
        getMenuTooltip(menu: int64): string
        setMenuDisabled(menu: int64, disabled: boolean): void
        isMenuDisabled(menu: int64): boolean
        setMenuHidden(menu: int64, hidden: boolean): void
        isMenuHidden(menu: int64): boolean
        getMenuPopup(menu: int64): PopupMenu
        
        /** Flat [MenuBar] don't display item decoration. */
        get flat(): boolean
        set flat(value: boolean)
        get startIndex(): int64
        set startIndex(value: int64)
        get switchOnHover(): boolean
        set switchOnHover(value: boolean)
        get preferGlobalMenu(): boolean
        set preferGlobalMenu(value: boolean)
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
    class MenuButton<Map extends Record<string, Node> = {}> extends Button<Map> {
        constructor(identifier?: any)
        getPopup(): PopupMenu
        showPopup(): void
        setDisableShortcuts(disabled: boolean): void
        get switchOnHover(): boolean
        set switchOnHover(value: boolean)
        get itemCount(): any /*Items,popup/item_*/
        set itemCount(value: any /*Items,popup/item_*/)
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
        
        /** Flag indices that the mesh data will use `GL_DYNAMIC_DRAW` on GLES. Unused on Vulkan. */
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
        /* gdvirtual */ _getSurfaceCount(): int64
        /* gdvirtual */ _surfaceGetArrayLen(index: int64): int64
        /* gdvirtual */ _surfaceGetArrayIndexLen(index: int64): int64
        /* gdvirtual */ _surfaceGetArrays(index: int64): GArray
        /* gdvirtual */ _surfaceGetBlendShapeArrays(index: int64): GArray
        /* gdvirtual */ _surfaceGetLods(index: int64): GDictionary
        /* gdvirtual */ _surfaceGetFormat(index: int64): int64
        /* gdvirtual */ _surfaceGetPrimitiveType(index: int64): int64
        /* gdvirtual */ _surfaceSetMaterial(index: int64, material: Material): void
        /* gdvirtual */ _surfaceGetMaterial(index: int64): Material
        /* gdvirtual */ _getBlendShapeCount(): int64
        /* gdvirtual */ _getBlendShapeName(index: int64): StringName
        /* gdvirtual */ _setBlendShapeName(index: int64, name: StringName): void
        /* gdvirtual */ _getAabb(): Aabb
        getAabb(): Aabb
        getFaces(): PackedVector3Array
        getSurfaceCount(): int64
        surfaceGetArrays(surfIdx: int64): GArray
        surfaceGetBlendShapeArrays(surfIdx: int64): GArray
        surfaceSetMaterial(surfIdx: int64, material: Material): void
        surfaceGetMaterial(surfIdx: int64): Material
        createPlaceholder(): Resource
        createTrimeshShape(): ConcavePolygonShape3D
        createConvexShape(clean: boolean = true, simplify: boolean = false): ConvexPolygonShape3D
        createOutline(margin: float64): Mesh
        generateTriangleMesh(): TriangleMesh
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
        get maxConcavity(): float64
        set maxConcavity(value: float64)
        get symmetryPlanesClippingBias(): float64
        set symmetryPlanesClippingBias(value: float64)
        get revolutionAxesClippingBias(): float64
        set revolutionAxesClippingBias(value: float64)
        get minVolumePerConvexHull(): float64
        set minVolumePerConvexHull(value: float64)
        
        /** Maximum number of voxels generated during the voxelization stage. */
        get resolution(): int64
        set resolution(value: int64)
        get maxNumVerticesPerConvexHull(): int64
        set maxNumVerticesPerConvexHull(value: int64)
        get planeDownsampling(): int64
        set planeDownsampling(value: int64)
        get convexHullDownsampling(): int64
        set convexHullDownsampling(value: int64)
        get normalizeMesh(): boolean
        set normalizeMesh(value: boolean)
        
        /** Mode for the approximate convex decomposition. */
        get mode(): int64
        set mode(value: int64)
        get convexHullApproximation(): boolean
        set convexHullApproximation(value: boolean)
        get maxConvexHulls(): int64
        set maxConvexHulls(value: int64)
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
        createFromSurface(mesh: ArrayMesh, surface: int64): GError
        commitToSurface(mesh: ArrayMesh, compressionFlags: int64 = 0): GError
        getFormat(): int64
        getVertexCount(): int64
        getEdgeCount(): int64
        getFaceCount(): int64
        setVertex(idx: int64, vertex: Vector3): void
        getVertex(idx: int64): Vector3
        setVertexNormal(idx: int64, normal: Vector3): void
        getVertexNormal(idx: int64): Vector3
        setVertexTangent(idx: int64, tangent: Plane): void
        getVertexTangent(idx: int64): Plane
        setVertexUV(idx: int64, uV: Vector2): void
        getVertexUV(idx: int64): Vector2
        setVertexUV2(idx: int64, uV2: Vector2): void
        getVertexUV2(idx: int64): Vector2
        setVertexColor(idx: int64, color: Color): void
        getVertexColor(idx: int64): Color
        setVertexBones(idx: int64, bones: PackedInt32Array | int32[]): void
        getVertexBones(idx: int64): PackedInt32Array
        setVertexWeights(idx: int64, weights: PackedFloat32Array | float32[]): void
        getVertexWeights(idx: int64): PackedFloat32Array
        setVertexMeta(idx: int64, meta: any): void
        getVertexMeta(idx: int64): any
        getVertexEdges(idx: int64): PackedInt32Array
        getVertexFaces(idx: int64): PackedInt32Array
        getEdgeVertex(idx: int64, vertex: int64): int64
        getEdgeFaces(idx: int64): PackedInt32Array
        setEdgeMeta(idx: int64, meta: any): void
        getEdgeMeta(idx: int64): any
        getFaceVertex(idx: int64, vertex: int64): int64
        getFaceEdge(idx: int64, edge: int64): int64
        setFaceMeta(idx: int64, meta: any): void
        getFaceMeta(idx: int64): any
        getFaceNormal(idx: int64): Vector3
        setMaterial(material: Material): void
        getMaterial(): Material
    }
    /** Node used for displaying a [Mesh] in 2D.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_meshinstance2d.html  
     */
    class MeshInstance2D<Map extends Record<string, Node> = {}> extends Node2D<Map> {
        constructor(identifier?: any)
        /** The [Mesh] that will be drawn by the [MeshInstance2D]. */
        get mesh(): Mesh
        set mesh(value: Mesh)
        
        /** The [Texture2D] that will be used if using the default [CanvasItemMaterial]. Can be accessed as `TEXTURE` in CanvasItem shader. */
        get texture(): Texture2D
        set texture(value: Texture2D)
        readonly textureChanged: Signal<() => void>
    }
    /** Node that instances meshes into a scenario.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_meshinstance3d.html  
     */
    class MeshInstance3D<Map extends Record<string, Node> = {}> extends GeometryInstance3D<Map> {
        constructor(identifier?: any)
        getSkinReference(): SkinReference
        getSurfaceOverrideMaterialCount(): int64
        setSurfaceOverrideMaterial(surface: int64, material: Material): void
        getSurfaceOverrideMaterial(surface: int64): Material
        getActiveMaterial(surface: int64): Material
        createTrimeshCollision(): void
        createConvexCollision(clean: boolean = true, simplify: boolean = false): void
        createMultipleConvexCollisions(settings: MeshConvexDecompositionSettings = undefined): void
        getBlendShapeCount(): int64
        findBlendShapeByName(name: StringName): int64
        getBlendShapeValue(blendShapeIdx: int64): float64
        setBlendShapeValue(blendShapeIdx: int64, value: float64): void
        createDebugTangents(): void
        bakeMeshFromCurrentBlendShapeMix(existing: ArrayMesh = undefined): ArrayMesh
        bakeMeshFromCurrentSkeletonPose(existing: ArrayMesh = undefined): ArrayMesh
        
        /** The [Mesh] resource for the instance. */
        get mesh(): Mesh
        set mesh(value: Mesh)
        
        /** The [Skin] to be used by this instance. */
        get skin(): Skin
        set skin(value: Skin)
        
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
        createItem(id: int64): void
        setItemName(id: int64, name: string): void
        setItemMesh(id: int64, mesh: Mesh): void
        setItemMeshTransform(id: int64, meshTransform: Transform3D): void
        setItemMeshCastShadow(id: int64, shadowCastingSetting: RenderingServer.ShadowCastingSetting): void
        setItemNavigationMesh(id: int64, navigationMesh: NavigationMesh): void
        setItemNavigationMeshTransform(id: int64, navigationMesh: Transform3D): void
        setItemNavigationLayers(id: int64, navigationLayers: int64): void
        setItemShapes(id: int64, shapes: GArray): void
        setItemPreview(id: int64, texture: Texture2D): void
        getItemName(id: int64): string
        getItemMesh(id: int64): Mesh
        getItemMeshTransform(id: int64): Transform3D
        getItemMeshCastShadow(id: int64): RenderingServer.ShadowCastingSetting
        getItemNavigationMesh(id: int64): NavigationMesh
        getItemNavigationMeshTransform(id: int64): Transform3D
        getItemNavigationLayers(id: int64): int64
        getItemShapes(id: int64): GArray
        getItemPreview(id: int64): Texture2D
        removeItem(id: int64): void
        findItemByName(name: string): int64
        
        /** Clears the library. */
        clear(): void
        getItemList(): PackedInt32Array
        getLastUnusedItemId(): int64
    }
    /** Simple texture that uses a mesh to draw itself.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_meshtexture.html  
     */
    class MeshTexture extends Texture2D {
        constructor(identifier?: any)
        /** Sets the mesh used to draw. It must be a mesh using 2D vertices. */
        get mesh(): Mesh
        set mesh(value: Mesh)
        get baseTexture(): Texture2D
        set baseTexture(value: Texture2D)
        get imageSize(): Vector2
        set imageSize(value: Vector2)
    }
    /** Interpolates an abstract value and supplies it to a method called over time.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_methodtweener.html  
     */
    class MethodTweener extends Tweener {
        constructor(identifier?: any)
        setDelay(delay: float64): MethodTweener
        setTrans(trans: Tween.TransitionType): MethodTweener
        setEase(ease: Tween.EaseType): MethodTweener
    }
    /** An internal editor class intended for keeping the data of unrecognized nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_missingnode.html  
     */
    class MissingNode<Map extends Record<string, Node> = {}> extends Node<Map> {
        constructor(identifier?: any)
        get originalClass(): string
        set originalClass(value: string)
        get originalScene(): string
        set originalScene(value: string)
        get recordingProperties(): boolean
        set recordingProperties(value: boolean)
    }
    /** An internal editor class intended for keeping the data of unrecognized resources.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_missingresource.html  
     */
    class MissingResource extends Resource {
        constructor(identifier?: any)
        get originalClass(): string
        set originalClass(value: string)
        get recordingProperties(): boolean
        set recordingProperties(value: boolean)
    }
    /** Generic mobile VR implementation.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_mobilevrinterface.html  
     */
    class MobileVRInterface extends XRInterface {
        constructor(identifier?: any)
        get eyeHeight(): float64
        set eyeHeight(value: float64)
        
        /** The interocular distance, also known as the interpupillary distance. The distance between the pupils of the left and right eye. */
        get iod(): float64
        set iod(value: float64)
        get displayWidth(): float64
        set displayWidth(value: float64)
        get displayToLens(): float64
        set displayToLens(value: float64)
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
        get vrsMinRadius(): float64
        set vrsMinRadius(value: float64)
        get vrsStrength(): float64
        set vrsStrength(value: float64)
    }
    /** Abstract class for non-real-time video recording encoders.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_moviewriter.html  
     */
    class MovieWriter extends GObject {
        constructor(identifier?: any)
        /* gdvirtual */ _getAudioMixRate(): int64
        /* gdvirtual */ _getAudioSpeakerMode(): AudioServer.SpeakerMode
        /* gdvirtual */ _handlesFile(path: string): boolean
        /* gdvirtual */ _writeBegin(movieSize: Vector2I, fps: int64, basePath: string): GError
        /* gdvirtual */ _writeFrame(frameImage: Image, audioFrameBlock: int64): GError
        /* gdvirtual */ _writeEnd(): void
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
        setInstanceTransform(instance: int64, transform: Transform3D): void
        setInstanceTransform2D(instance: int64, transform: Transform2D): void
        getInstanceTransform(instance: int64): Transform3D
        getInstanceTransform2D(instance: int64): Transform2D
        setInstanceColor(instance: int64, color: Color): void
        getInstanceColor(instance: int64): Color
        setInstanceCustomData(instance: int64, customData: Color): void
        getInstanceCustomData(instance: int64): Color
        resetInstancePhysicsInterpolation(instance: int64): void
        getAabb(): Aabb
        setBufferInterpolated(bufferCurr: PackedFloat32Array | float32[], bufferPrev: PackedFloat32Array | float32[]): void
        get transformFormat(): int64
        set transformFormat(value: int64)
        get useColors(): boolean
        set useColors(value: boolean)
        get useCustomData(): boolean
        set useCustomData(value: boolean)
        get customAabb(): Aabb
        set customAabb(value: Aabb)
        get instanceCount(): int64
        set instanceCount(value: int64)
        get visibleInstanceCount(): int64
        set visibleInstanceCount(value: int64)
        
        /** [Mesh] resource to be instanced.  
         *  The looks of the individual instances can be modified using [method set_instance_color] and [method set_instance_custom_data].  
         */
        get mesh(): Mesh
        set mesh(value: Mesh)
        get buffer(): PackedFloat32Array
        set buffer(value: PackedFloat32Array | float32[])
        get transformArray(): PackedVector3Array
        set transformArray(value: PackedVector3Array | Vector3[])
        get transform2DArray(): PackedVector2Array
        set transform2DArray(value: PackedVector2Array | Vector2[])
        get colorArray(): PackedColorArray
        set colorArray(value: PackedColorArray | Color[])
        get customDataArray(): PackedColorArray
        set customDataArray(value: PackedColorArray | Color[])
        get physicsInterpolationQuality(): int64
        set physicsInterpolationQuality(value: int64)
    }
    /** Node that instances a [MultiMesh] in 2D.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_multimeshinstance2d.html  
     */
    class MultiMeshInstance2D<Map extends Record<string, Node> = {}> extends Node2D<Map> {
        constructor(identifier?: any)
        /** The [MultiMesh] that will be drawn by the [MultiMeshInstance2D]. */
        get multimesh(): MultiMesh
        set multimesh(value: MultiMesh)
        
        /** The [Texture2D] that will be used if using the default [CanvasItemMaterial]. Can be accessed as `TEXTURE` in CanvasItem shader. */
        get texture(): Texture2D
        set texture(value: Texture2D)
        readonly textureChanged: Signal<() => void>
    }
    /** Node that instances a [MultiMesh].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_multimeshinstance3d.html  
     */
    class MultiMeshInstance3D<Map extends Record<string, Node> = {}> extends GeometryInstance3D<Map> {
        constructor(identifier?: any)
        /** The [MultiMesh] resource that will be used and shared among all instances of the [MultiMeshInstance3D]. */
        get multimesh(): MultiMesh
        set multimesh(value: MultiMesh)
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
        rpc(peer: int64, object: GObject, method: StringName, arguments_: GArray = []): GError
        objectConfigurationAdd(object: GObject, configuration: any): GError
        objectConfigurationRemove(object: GObject, configuration: any): GError
        getPeers(): PackedInt32Array
        static setDefaultInterface(interfaceName: StringName): void
        static getDefaultInterface(): StringName
        static createDefaultInterface(): any /*MultiplayerAPI*/
        get multiplayerPeer(): MultiplayerPeer
        set multiplayerPeer(value: MultiplayerPeer)
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
        /* gdvirtual */ _getMultiplayerPeer(): MultiplayerPeer
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
        setTargetPeer(id: int64): void
        getPacketPeer(): int64
        getPacketChannel(): int64
        getPacketMode(): MultiplayerPeer.TransferMode
        
        /** Waits up to 1 second to receive a new network event. */
        poll(): void
        
        /** Immediately close the multiplayer peer returning to the state [constant CONNECTION_DISCONNECTED]. Connected peers will be dropped without emitting [signal peer_disconnected]. */
        close(): void
        disconnectPeer(peer: int64, force: boolean = false): void
        getConnectionStatus(): MultiplayerPeer.ConnectionStatus
        getUniqueId(): int64
        generateUniqueId(): int64
        isServerRelaySupported(): boolean
        get refuseNewConnections(): boolean
        set refuseNewConnections(value: boolean)
        get transferMode(): int64
        set transferMode(value: int64)
        get transferChannel(): int64
        set transferChannel(value: int64)
        readonly peerConnected: Signal<(id: int64) => void>
        readonly peerDisconnected: Signal<(id: int64) => void>
    }
    /** Class that can be inherited to implement custom multiplayer API networking layers via GDExtension.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_multiplayerpeerextension.html  
     */
    class MultiplayerPeerExtension extends MultiplayerPeer {
        constructor(identifier?: any)
        /* gdvirtual */ _getPacket(rBuffer: int64, rBufferSize: int64): GError
        /* gdvirtual */ _putPacket(pBuffer: int64, pBufferSize: int64): GError
        /* gdvirtual */ _getAvailablePacketCount(): int64
        /* gdvirtual */ _getMaxPacketSize(): int64
        /* gdvirtual */ _getPacketScript(): PackedByteArray
        /* gdvirtual */ _putPacketScript(pBuffer: PackedByteArray | byte[] | ArrayBuffer): GError
        /* gdvirtual */ _getPacketChannel(): int64
        /* gdvirtual */ _getPacketMode(): MultiplayerPeer.TransferMode
        /* gdvirtual */ _setTransferChannel(pChannel: int64): void
        /* gdvirtual */ _getTransferChannel(): int64
        /* gdvirtual */ _setTransferMode(pMode: MultiplayerPeer.TransferMode): void
        /* gdvirtual */ _getTransferMode(): MultiplayerPeer.TransferMode
        /* gdvirtual */ _setTargetPeer(pPeer: int64): void
        /* gdvirtual */ _getPacketPeer(): int64
        /* gdvirtual */ _isServer(): boolean
        
        /** Called when the [MultiplayerAPI] is polled. See [method MultiplayerAPI.poll]. */
        /* gdvirtual */ _poll(): void
        
        /** Called when the multiplayer peer should be immediately closed (see [method MultiplayerPeer.close]). */
        /* gdvirtual */ _close(): void
        /* gdvirtual */ _disconnectPeer(pPeer: int64, pForce: boolean): void
        /* gdvirtual */ _getUniqueId(): int64
        /* gdvirtual */ _setRefuseNewConnections(pEnable: boolean): void
        /* gdvirtual */ _isRefusingNewConnections(): boolean
        /* gdvirtual */ _isServerRelaySupported(): boolean
        /* gdvirtual */ _getConnectionStatus(): MultiplayerPeer.ConnectionStatus
    }
    /** Automatically replicates spawnable nodes from the authority to other multiplayer peers.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_multiplayerspawner.html  
     */
    class MultiplayerSpawner<Map extends Record<string, Node> = {}> extends Node<Map> {
        constructor(identifier?: any)
        addSpawnableScene(path: string): void
        getSpawnableSceneCount(): int64
        getSpawnableScene(index: int64): string
        clearSpawnableScenes(): void
        
        /** Requests a custom spawn, with [param data] passed to [member spawn_function] on all peers. Returns the locally spawned node instance already inside the scene tree, and added as a child of the node pointed by [member spawn_path].  
         *      
         *  **Note:** Spawnable scenes are spawned automatically. [method spawn] is only needed for custom spawns.  
         */
        spawn(data: any = <any> {}): Node
        get _spawnableScenes(): PackedStringArray
        set _spawnableScenes(value: PackedStringArray | string[])
        get spawnPath(): NodePath
        set spawnPath(value: NodePath | string)
        get spawnLimit(): int64
        set spawnLimit(value: int64)
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
    class MultiplayerSynchronizer<Map extends Record<string, Node> = {}> extends Node<Map> {
        /** Visibility filters are updated during process frames (see [constant Node.NOTIFICATION_INTERNAL_PROCESS]). */
        static readonly VISIBILITY_PROCESS_IDLE = 0
        
        /** Visibility filters are updated during physics frames (see [constant Node.NOTIFICATION_INTERNAL_PHYSICS_PROCESS]). */
        static readonly VISIBILITY_PROCESS_PHYSICS = 1
        
        /** Visibility filters are not updated automatically, and must be updated manually by calling [method update_visibility]. */
        static readonly VISIBILITY_PROCESS_NONE = 2
        constructor(identifier?: any)
        updateVisibility(forPeer: int64 = 0): void
        addVisibilityFilter(filter: Callable): void
        removeVisibilityFilter(filter: Callable): void
        setVisibilityFor(peer: int64, visible: boolean): void
        getVisibilityFor(peer: int64): boolean
        get rootPath(): NodePath
        set rootPath(value: NodePath | string)
        get replicationInterval(): float64
        set replicationInterval(value: float64)
        get deltaInterval(): float64
        set deltaInterval(value: float64)
        get replicationConfig(): SceneReplicationConfig
        set replicationConfig(value: SceneReplicationConfig)
        get visibilityUpdateMode(): int64
        set visibilityUpdateMode(value: int64)
        get publicVisibility(): boolean
        set publicVisibility(value: boolean)
        
        /** Emitted when a new synchronization state is received by this synchronizer after the properties have been updated. */
        readonly synchronized: Signal<() => void>
        readonly deltaSynchronized: Signal<() => void>
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
    class NavigationAgent2D<Map extends Record<string, Node> = {}> extends Node<Map> {
        constructor(identifier?: any)
        getRid(): Rid
        setNavigationLayerValue(layerNumber: int64, value: boolean): void
        getNavigationLayerValue(layerNumber: int64): boolean
        setNavigationMap(navigationMap: Rid): void
        getNavigationMap(): Rid
        getNextPathPosition(): Vector2
        setVelocityForced(velocity: Vector2): void
        distanceToTarget(): float64
        getCurrentNavigationResult(): NavigationPathQueryResult2D
        getCurrentNavigationPath(): PackedVector2Array
        getCurrentNavigationPathIndex(): int64
        isTargetReached(): boolean
        isTargetReachable(): boolean
        isNavigationFinished(): boolean
        getFinalPosition(): Vector2
        _avoidanceDone(newVelocity: Vector3): void
        setAvoidanceLayerValue(layerNumber: int64, value: boolean): void
        getAvoidanceLayerValue(layerNumber: int64): boolean
        setAvoidanceMaskValue(maskNumber: int64, value: boolean): void
        getAvoidanceMaskValue(maskNumber: int64): boolean
        get targetPosition(): Vector2
        set targetPosition(value: Vector2)
        get pathDesiredDistance(): float64
        set pathDesiredDistance(value: float64)
        get targetDesiredDistance(): float64
        set targetDesiredDistance(value: float64)
        get pathMaxDistance(): float64
        set pathMaxDistance(value: float64)
        get navigationLayers(): int64
        set navigationLayers(value: int64)
        get pathfindingAlgorithm(): int64
        set pathfindingAlgorithm(value: int64)
        get pathPostprocessing(): int64
        set pathPostprocessing(value: int64)
        get pathMetadataFlags(): int64
        set pathMetadataFlags(value: int64)
        get simplifyPath(): boolean
        set simplifyPath(value: boolean)
        get simplifyEpsilon(): float64
        set simplifyEpsilon(value: float64)
        get avoidanceEnabled(): boolean
        set avoidanceEnabled(value: boolean)
        
        /** Sets the new wanted velocity for the agent. The avoidance simulation will try to fulfill this velocity if possible but will modify it to avoid collision with other agents and obstacles. When an agent is teleported to a new position, use [method set_velocity_forced] as well to reset the internal simulation velocity. */
        get velocity(): Vector2
        set velocity(value: Vector2)
        
        /** The radius of the avoidance agent. This is the "body" of the avoidance agent and not the avoidance maneuver starting radius (which is controlled by [member neighbor_distance]).  
         *  Does not affect normal pathfinding. To change an actor's pathfinding radius bake [NavigationMesh] resources with a different [member NavigationMesh.agent_radius] property and use different navigation maps for each actor size.  
         */
        get radius(): float64
        set radius(value: float64)
        get neighborDistance(): float64
        set neighborDistance(value: float64)
        get maxNeighbors(): int64
        set maxNeighbors(value: int64)
        get timeHorizonAgents(): float64
        set timeHorizonAgents(value: float64)
        get timeHorizonObstacles(): float64
        set timeHorizonObstacles(value: float64)
        get maxSpeed(): float64
        set maxSpeed(value: float64)
        get avoidanceLayers(): int64
        set avoidanceLayers(value: int64)
        get avoidanceMask(): int64
        set avoidanceMask(value: int64)
        get avoidancePriority(): float64
        set avoidancePriority(value: float64)
        get debugEnabled(): boolean
        set debugEnabled(value: boolean)
        get debugUseCustom(): boolean
        set debugUseCustom(value: boolean)
        get debugPathCustomColor(): Color
        set debugPathCustomColor(value: Color)
        get debugPathCustomPointSize(): float64
        set debugPathCustomPointSize(value: float64)
        get debugPathCustomLineWidth(): float64
        set debugPathCustomLineWidth(value: float64)
        readonly pathChanged: Signal<() => void>
        readonly targetReached: Signal<() => void>
        readonly waypointReached: Signal<(details: GDictionary) => void>
        readonly linkReached: Signal<(details: GDictionary) => void>
        readonly navigationFinished: Signal<() => void>
        readonly velocityComputed: Signal<(safeVelocity: Vector2) => void>
    }
    /** A 3D agent used to pathfind to a position while avoiding obstacles.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_navigationagent3d.html  
     */
    class NavigationAgent3D<Map extends Record<string, Node> = {}> extends Node<Map> {
        constructor(identifier?: any)
        getRid(): Rid
        setNavigationLayerValue(layerNumber: int64, value: boolean): void
        getNavigationLayerValue(layerNumber: int64): boolean
        setNavigationMap(navigationMap: Rid): void
        getNavigationMap(): Rid
        getNextPathPosition(): Vector3
        setVelocityForced(velocity: Vector3): void
        distanceToTarget(): float64
        getCurrentNavigationResult(): NavigationPathQueryResult3D
        getCurrentNavigationPath(): PackedVector3Array
        getCurrentNavigationPathIndex(): int64
        isTargetReached(): boolean
        isTargetReachable(): boolean
        isNavigationFinished(): boolean
        getFinalPosition(): Vector3
        _avoidanceDone(newVelocity: Vector3): void
        setAvoidanceLayerValue(layerNumber: int64, value: boolean): void
        getAvoidanceLayerValue(layerNumber: int64): boolean
        setAvoidanceMaskValue(maskNumber: int64, value: boolean): void
        getAvoidanceMaskValue(maskNumber: int64): boolean
        get targetPosition(): Vector3
        set targetPosition(value: Vector3)
        get pathDesiredDistance(): float64
        set pathDesiredDistance(value: float64)
        get targetDesiredDistance(): float64
        set targetDesiredDistance(value: float64)
        get pathHeightOffset(): float64
        set pathHeightOffset(value: float64)
        get pathMaxDistance(): float64
        set pathMaxDistance(value: float64)
        get navigationLayers(): int64
        set navigationLayers(value: int64)
        get pathfindingAlgorithm(): int64
        set pathfindingAlgorithm(value: int64)
        get pathPostprocessing(): int64
        set pathPostprocessing(value: int64)
        get pathMetadataFlags(): int64
        set pathMetadataFlags(value: int64)
        get simplifyPath(): boolean
        set simplifyPath(value: boolean)
        get simplifyEpsilon(): float64
        set simplifyEpsilon(value: float64)
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
        get neighborDistance(): float64
        set neighborDistance(value: float64)
        get maxNeighbors(): int64
        set maxNeighbors(value: int64)
        get timeHorizonAgents(): float64
        set timeHorizonAgents(value: float64)
        get timeHorizonObstacles(): float64
        set timeHorizonObstacles(value: float64)
        get maxSpeed(): float64
        set maxSpeed(value: float64)
        get use3DAvoidance(): boolean
        set use3DAvoidance(value: boolean)
        get keepYVelocity(): boolean
        set keepYVelocity(value: boolean)
        get avoidanceLayers(): int64
        set avoidanceLayers(value: int64)
        get avoidanceMask(): int64
        set avoidanceMask(value: int64)
        get avoidancePriority(): float64
        set avoidancePriority(value: float64)
        get debugEnabled(): boolean
        set debugEnabled(value: boolean)
        get debugUseCustom(): boolean
        set debugUseCustom(value: boolean)
        get debugPathCustomColor(): Color
        set debugPathCustomColor(value: Color)
        get debugPathCustomPointSize(): float64
        set debugPathCustomPointSize(value: float64)
        readonly pathChanged: Signal<() => void>
        readonly targetReached: Signal<() => void>
        readonly waypointReached: Signal<(details: GDictionary) => void>
        readonly linkReached: Signal<(details: GDictionary) => void>
        readonly navigationFinished: Signal<() => void>
        readonly velocityComputed: Signal<(safeVelocity: Vector3) => void>
    }
    /** A link between two positions on [NavigationRegion2D]s that agents can be routed through.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_navigationlink2d.html  
     */
    class NavigationLink2D<Map extends Record<string, Node> = {}> extends Node2D<Map> {
        constructor(identifier?: any)
        getRid(): Rid
        setNavigationMap(navigationMap: Rid): void
        getNavigationMap(): Rid
        setNavigationLayerValue(layerNumber: int64, value: boolean): void
        getNavigationLayerValue(layerNumber: int64): boolean
        setGlobalStartPosition(position: Vector2): void
        getGlobalStartPosition(): Vector2
        setGlobalEndPosition(position: Vector2): void
        getGlobalEndPosition(): Vector2
        
        /** Whether this link is currently active. If `false`, [method NavigationServer2D.map_get_path] will ignore this link. */
        get enabled(): boolean
        set enabled(value: boolean)
        
        /** Whether this link can be traveled in both directions or only from [member start_position] to [member end_position]. */
        get bidirectional(): boolean
        set bidirectional(value: boolean)
        get navigationLayers(): int64
        set navigationLayers(value: int64)
        get startPosition(): Vector2
        set startPosition(value: Vector2)
        get endPosition(): Vector2
        set endPosition(value: Vector2)
        get enterCost(): float64
        set enterCost(value: float64)
        get travelCost(): float64
        set travelCost(value: float64)
    }
    /** A link between two positions on [NavigationRegion3D]s that agents can be routed through.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_navigationlink3d.html  
     */
    class NavigationLink3D<Map extends Record<string, Node> = {}> extends Node3D<Map> {
        constructor(identifier?: any)
        getRid(): Rid
        setNavigationMap(navigationMap: Rid): void
        getNavigationMap(): Rid
        setNavigationLayerValue(layerNumber: int64, value: boolean): void
        getNavigationLayerValue(layerNumber: int64): boolean
        setGlobalStartPosition(position: Vector3): void
        getGlobalStartPosition(): Vector3
        setGlobalEndPosition(position: Vector3): void
        getGlobalEndPosition(): Vector3
        
        /** Whether this link is currently active. If `false`, [method NavigationServer3D.map_get_path] will ignore this link. */
        get enabled(): boolean
        set enabled(value: boolean)
        
        /** Whether this link can be traveled in both directions or only from [member start_position] to [member end_position]. */
        get bidirectional(): boolean
        set bidirectional(value: boolean)
        get navigationLayers(): int64
        set navigationLayers(value: int64)
        get startPosition(): Vector3
        set startPosition(value: Vector3)
        get endPosition(): Vector3
        set endPosition(value: Vector3)
        get enterCost(): float64
        set enterCost(value: float64)
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
        setCollisionMaskValue(layerNumber: int64, value: boolean): void
        getCollisionMaskValue(layerNumber: int64): boolean
        addPolygon(polygon: PackedInt32Array | int32[]): void
        getPolygonCount(): int64
        getPolygon(idx: int64): PackedInt32Array
        clearPolygons(): void
        createFromMesh(mesh: Mesh): void
        
        /** Clears the internal arrays for vertices and polygon indices. */
        clear(): void
        get vertices(): PackedVector3Array
        set vertices(value: PackedVector3Array | Vector3[])
        get polygons(): GArray
        set polygons(value: GArray)
        get samplePartitionType(): int64
        set samplePartitionType(value: int64)
        get geometryParsedGeometryType(): int64
        set geometryParsedGeometryType(value: int64)
        get geometryCollisionMask(): int64
        set geometryCollisionMask(value: int64)
        get geometrySourceGeometryMode(): int64
        set geometrySourceGeometryMode(value: int64)
        get geometrySourceGroupName(): string
        set geometrySourceGroupName(value: string)
        get cellSize(): float64
        set cellSize(value: float64)
        get cellHeight(): float64
        set cellHeight(value: float64)
        get borderSize(): float64
        set borderSize(value: float64)
        get agentHeight(): float64
        set agentHeight(value: float64)
        get agentRadius(): float64
        set agentRadius(value: float64)
        get agentMaxClimb(): float64
        set agentMaxClimb(value: float64)
        get agentMaxSlope(): float64
        set agentMaxSlope(value: float64)
        get regionMinSize(): float64
        set regionMinSize(value: float64)
        get regionMergeSize(): float64
        set regionMergeSize(value: float64)
        get edgeMaxLength(): float64
        set edgeMaxLength(value: float64)
        get edgeMaxError(): float64
        set edgeMaxError(value: float64)
        get verticesPerPolygon(): float64
        set verticesPerPolygon(value: float64)
        get detailSampleDistance(): float64
        set detailSampleDistance(value: float64)
        get detailSampleMaxError(): float64
        set detailSampleMaxError(value: float64)
        get filterLowHangingObstacles(): boolean
        set filterLowHangingObstacles(value: boolean)
        get filterLedgeSpans(): boolean
        set filterLedgeSpans(value: boolean)
        get filterWalkableLowHeightSpans(): boolean
        set filterWalkableLowHeightSpans(value: boolean)
        get filterBakingAabb(): Aabb
        set filterBakingAabb(value: Aabb)
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
        hasData(): boolean
        appendTraversableOutlines(traversableOutlines: GArray): void
        appendObstructionOutlines(obstructionOutlines: GArray): void
        addTraversableOutline(shapeOutline: PackedVector2Array | Vector2[]): void
        addObstructionOutline(shapeOutline: PackedVector2Array | Vector2[]): void
        
        /** Adds the geometry data of another [NavigationMeshSourceGeometryData2D] to the navigation mesh baking data. */
        merge(otherGeometry: NavigationMeshSourceGeometryData2D): void
        addProjectedObstruction(vertices: PackedVector2Array | Vector2[], carve: boolean): void
        clearProjectedObstructions(): void
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
        appendArrays(vertices: PackedFloat32Array | float32[], indices: PackedInt32Array | int32[]): void
        
        /** Clears the internal data. */
        clear(): void
        hasData(): boolean
        addMesh(mesh: Mesh, xform: Transform3D): void
        addMeshArray(meshArray: GArray, xform: Transform3D): void
        addFaces(faces: PackedVector3Array | Vector3[], xform: Transform3D): void
        
        /** Adds the geometry data of another [NavigationMeshSourceGeometryData3D] to the navigation mesh baking data. */
        merge(otherGeometry: NavigationMeshSourceGeometryData3D): void
        addProjectedObstruction(vertices: PackedVector3Array | Vector3[], elevation: float64, height: float64, carve: boolean): void
        clearProjectedObstructions(): void
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
    class NavigationObstacle2D<Map extends Record<string, Node> = {}> extends Node2D<Map> {
        constructor(identifier?: any)
        getRid(): Rid
        setNavigationMap(navigationMap: Rid): void
        getNavigationMap(): Rid
        setAvoidanceLayerValue(layerNumber: int64, value: boolean): void
        getAvoidanceLayerValue(layerNumber: int64): boolean
        
        /** Sets the avoidance radius for the obstacle. */
        get radius(): float64
        set radius(value: float64)
        
        /** The outline vertices of the obstacle. If the vertices are winded in clockwise order agents will be pushed in by the obstacle, else they will be pushed out. Outlines can not be crossed or overlap. Should the vertices using obstacle be warped to a new position agent's can not predict this movement and may get trapped inside the obstacle. */
        get vertices(): PackedVector2Array
        set vertices(value: PackedVector2Array | Vector2[])
        get affectNavigationMesh(): boolean
        set affectNavigationMesh(value: boolean)
        get carveNavigationMesh(): boolean
        set carveNavigationMesh(value: boolean)
        get avoidanceEnabled(): boolean
        set avoidanceEnabled(value: boolean)
        
        /** Sets the wanted velocity for the obstacle so other agent's can better predict the obstacle if it is moved with a velocity regularly (every frame) instead of warped to a new position. Does only affect avoidance for the obstacles [member radius]. Does nothing for the obstacles static vertices. */
        get velocity(): Vector2
        set velocity(value: Vector2)
        get avoidanceLayers(): int64
        set avoidanceLayers(value: int64)
    }
    /** 3D obstacle used to affect navigation mesh baking or constrain velocities of avoidance controlled agents.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_navigationobstacle3d.html  
     */
    class NavigationObstacle3D<Map extends Record<string, Node> = {}> extends Node3D<Map> {
        constructor(identifier?: any)
        getRid(): Rid
        setNavigationMap(navigationMap: Rid): void
        getNavigationMap(): Rid
        setAvoidanceLayerValue(layerNumber: int64, value: boolean): void
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
        get affectNavigationMesh(): boolean
        set affectNavigationMesh(value: boolean)
        get carveNavigationMesh(): boolean
        set carveNavigationMesh(value: boolean)
        get avoidanceEnabled(): boolean
        set avoidanceEnabled(value: boolean)
        
        /** Sets the wanted velocity for the obstacle so other agent's can better predict the obstacle if it is moved with a velocity regularly (every frame) instead of warped to a new position. Does only affect avoidance for the obstacles [member radius]. Does nothing for the obstacles static vertices. */
        get velocity(): Vector3
        set velocity(value: Vector3)
        get avoidanceLayers(): int64
        set avoidanceLayers(value: int64)
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
        get startPosition(): Vector2
        set startPosition(value: Vector2)
        get targetPosition(): Vector2
        set targetPosition(value: Vector2)
        get navigationLayers(): int64
        set navigationLayers(value: int64)
        get pathfindingAlgorithm(): int64
        set pathfindingAlgorithm(value: int64)
        get pathPostprocessing(): int64
        set pathPostprocessing(value: int64)
        get metadataFlags(): int64
        set metadataFlags(value: int64)
        get simplifyPath(): boolean
        set simplifyPath(value: boolean)
        get simplifyEpsilon(): float64
        set simplifyEpsilon(value: float64)
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
        get startPosition(): Vector3
        set startPosition(value: Vector3)
        get targetPosition(): Vector3
        set targetPosition(value: Vector3)
        get navigationLayers(): int64
        set navigationLayers(value: int64)
        get pathfindingAlgorithm(): int64
        set pathfindingAlgorithm(value: int64)
        get pathPostprocessing(): int64
        set pathPostprocessing(value: int64)
        get metadataFlags(): int64
        set metadataFlags(value: int64)
        get simplifyPath(): boolean
        set simplifyPath(value: boolean)
        get simplifyEpsilon(): float64
        set simplifyEpsilon(value: float64)
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
        get pathTypes(): PackedInt32Array
        set pathTypes(value: PackedInt32Array | int32[])
        get pathRids(): GArray
        set pathRids(value: GArray)
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
        get pathTypes(): PackedInt32Array
        set pathTypes(value: PackedInt32Array | int32[])
        get pathRids(): GArray
        set pathRids(value: GArray)
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
        addPolygon(polygon: PackedInt32Array | int32[]): void
        getPolygonCount(): int64
        getPolygon(idx: int64): PackedInt32Array
        clearPolygons(): void
        getNavigationMesh(): NavigationMesh
        addOutline(outline: PackedVector2Array | Vector2[]): void
        addOutlineAtIndex(outline: PackedVector2Array | Vector2[], index: int64): void
        getOutlineCount(): int64
        setOutline(idx: int64, outline: PackedVector2Array | Vector2[]): void
        getOutline(idx: int64): PackedVector2Array
        removeOutline(idx: int64): void
        clearOutlines(): void
        makePolygonsFromOutlines(): void
        setParsedCollisionMaskValue(layerNumber: int64, value: boolean): void
        getParsedCollisionMaskValue(layerNumber: int64): boolean
        
        /** Clears the internal arrays for vertices and polygon indices. */
        clear(): void
        get vertices(): PackedVector2Array
        set vertices(value: PackedVector2Array | Vector2[])
        get polygons(): GArray
        set polygons(value: GArray)
        get outlines(): GArray
        set outlines(value: GArray)
        get samplePartitionType(): int64
        set samplePartitionType(value: int64)
        get parsedGeometryType(): int64
        set parsedGeometryType(value: int64)
        get parsedCollisionMask(): int64
        set parsedCollisionMask(value: int64)
        get sourceGeometryMode(): int64
        set sourceGeometryMode(value: int64)
        get sourceGeometryGroupName(): string
        set sourceGeometryGroupName(value: string)
        get cellSize(): float64
        set cellSize(value: float64)
        get borderSize(): float64
        set borderSize(value: float64)
        get agentRadius(): float64
        set agentRadius(value: float64)
        get bakingRect(): Rect2
        set bakingRect(value: Rect2)
        get bakingRectOffset(): Vector2
        set bakingRectOffset(value: Vector2)
    }
    /** A traversable 2D region that [NavigationAgent2D]s can use for pathfinding.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_navigationregion2d.html  
     */
    class NavigationRegion2D<Map extends Record<string, Node> = {}> extends Node2D<Map> {
        constructor(identifier?: any)
        getRid(): Rid
        setNavigationMap(navigationMap: Rid): void
        getNavigationMap(): Rid
        setNavigationLayerValue(layerNumber: int64, value: boolean): void
        getNavigationLayerValue(layerNumber: int64): boolean
        getRegionRid(): Rid
        bakeNavigationPolygon(onThread: boolean = true): void
        isBaking(): boolean
        _navigationPolygonChanged(): void
        getBounds(): Rect2
        get navigationPolygon(): NavigationPolygon
        set navigationPolygon(value: NavigationPolygon)
        
        /** Determines if the [NavigationRegion2D] is enabled or disabled. */
        get enabled(): boolean
        set enabled(value: boolean)
        get useEdgeConnections(): boolean
        set useEdgeConnections(value: boolean)
        get navigationLayers(): int64
        set navigationLayers(value: int64)
        get enterCost(): float64
        set enterCost(value: float64)
        get travelCost(): float64
        set travelCost(value: float64)
        readonly navigationPolygonChanged: Signal<() => void>
        readonly bakeFinished: Signal<() => void>
    }
    /** A traversable 3D region that [NavigationAgent3D]s can use for pathfinding.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_navigationregion3d.html  
     */
    class NavigationRegion3D<Map extends Record<string, Node> = {}> extends Node3D<Map> {
        constructor(identifier?: any)
        getRid(): Rid
        setNavigationMap(navigationMap: Rid): void
        getNavigationMap(): Rid
        setNavigationLayerValue(layerNumber: int64, value: boolean): void
        getNavigationLayerValue(layerNumber: int64): boolean
        getRegionRid(): Rid
        bakeNavigationMesh(onThread: boolean = true): void
        isBaking(): boolean
        getBounds(): Aabb
        get navigationMesh(): NavigationMesh
        set navigationMesh(value: NavigationMesh)
        
        /** Determines if the [NavigationRegion3D] is enabled or disabled. */
        get enabled(): boolean
        set enabled(value: boolean)
        get useEdgeConnections(): boolean
        set useEdgeConnections(value: boolean)
        get navigationLayers(): int64
        set navigationLayers(value: int64)
        get enterCost(): float64
        set enterCost(value: float64)
        get travelCost(): float64
        set travelCost(value: float64)
        readonly navigationMeshChanged: Signal<() => void>
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
    class NinePatchRect<Map extends Record<string, Node> = {}> extends Control<Map> {
        /** Stretches the center texture across the NinePatchRect. This may cause the texture to be distorted. */
        static readonly AXIS_STRETCH_MODE_STRETCH = 0
        
        /** Repeats the center texture across the NinePatchRect. This won't cause any visible distortion. The texture must be seamless for this to work without displaying artifacts between edges. */
        static readonly AXIS_STRETCH_MODE_TILE = 1
        
        /** Repeats the center texture across the NinePatchRect, but will also stretch the texture to make sure each tile is visible in full. This may cause the texture to be distorted, but less than [constant AXIS_STRETCH_MODE_STRETCH]. The texture must be seamless for this to work without displaying artifacts between edges. */
        static readonly AXIS_STRETCH_MODE_TILE_FIT = 2
        constructor(identifier?: any)
        setPatchMargin(margin: Side, value: int64): void
        getPatchMargin(margin: Side): int64
        
        /** The node's texture resource. */
        get texture(): Texture2D
        set texture(value: Texture2D)
        get drawCenter(): boolean
        set drawCenter(value: boolean)
        get regionRect(): Rect2
        set regionRect(value: Rect2)
        get patchMarginLeft(): int64
        set patchMarginLeft(value: int64)
        get patchMarginTop(): int64
        set patchMarginTop(value: int64)
        get patchMarginRight(): int64
        set patchMarginRight(value: int64)
        get patchMarginBottom(): int64
        set patchMarginBottom(value: int64)
        get axisStretchHorizontal(): int64
        set axisStretchHorizontal(value: int64)
        get axisStretchVertical(): int64
        set axisStretchVertical(value: int64)
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
    /** Base class for all scene objects.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_node.html  
     */
    class Node<Map extends Record<string, Node> = {}> extends GObject {
        // TypeScript's inference won't directly match against a generic parameter. The generic parameter has to
        // appear somewhere in the type definition. Consequently, we insert a dummy direct usage of the parameter.
        private __doesnotexist_NodeMap: Map
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
        
        /** Duplicate the node's signal connections. */
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
        /* gdvirtual */ _physicsProcess(delta: float64): void
        /* gdvirtual */ _enterTree(): void
        /* gdvirtual */ _exitTree(): void
        
        /** Called when the node is "ready", i.e. when both the node and its children have entered the scene tree. If the node has children, their [method _ready] callbacks get triggered first, and the parent node will receive the ready notification afterwards.  
         *  Corresponds to the [constant NOTIFICATION_READY] notification in [method Object._notification]. See also the `@onready` annotation for variables.  
         *  Usually used for initialization. For even earlier initialization, [method Object._init] may be used. See also [method _enter_tree].  
         *      
         *  **Note:** This method may be called only once for each node. After removing a node from the scene tree and adding it again, [method _ready] will **not** be called a second time. This can be bypassed by requesting another call with [method request_ready], which may be called anywhere before adding the node again.  
         */
        /* gdvirtual */ _ready(): void
        /* gdvirtual */ _getConfigurationWarnings(): PackedStringArray
        
        /** Called when there is an input event. The input event propagates up through the node tree until a node consumes it.  
         *  It is only called if input processing is enabled, which is done automatically if this method is overridden, and can be toggled with [method set_process_input].  
         *  To consume the input event and stop it propagating further to other nodes, [method Viewport.set_input_as_handled] can be called.  
         *  For gameplay input, [method _unhandled_input] and [method _unhandled_key_input] are usually a better fit as they allow the GUI to intercept the events first.  
         *      
         *  **Note:** This method is only called if the node is present in the scene tree (i.e. if it's not an orphan).  
         */
        /* gdvirtual */ _input(event: InputEvent): void
        /* gdvirtual */ _shortcutInput(event: InputEvent): void
        /* gdvirtual */ _unhandledInput(event: InputEvent): void
        /* gdvirtual */ _unhandledKeyInput(event: InputEvent): void
        static printOrphanNodes(): void
        addSibling(sibling: Node, forceReadableName: boolean = false): void
        setName(name: string): void
        getName(): StringName
        addChild(node: Node, forceReadableName: boolean = false, internal: Node.InternalMode = 0): void
        removeChild(node: Node): void
        
        /** Changes the parent of this [Node] to the [param new_parent]. The node needs to already have a parent. The node's [member owner] is preserved if its owner is still reachable from the new location (i.e., the node is still a descendant of the new parent after the operation).  
         *  If [param keep_global_transform] is `true`, the node's global transform will be preserved if supported. [Node2D], [Node3D] and [Control] support this argument (but [Control] keeps only position).  
         */
        reparent(newParent: Node, keepGlobalTransform: boolean = true): void
        getChildCount(includeInternal: boolean = false): int64
        getChildren(includeInternal: boolean = false): GArray
        getChild(idx: int64, includeInternal: boolean = false): Node
        hasNode(path: NodePath | string): boolean
        getNode<Path extends StaticNodePath<Map>, Default = never>(path: Path): ResolveNodePath<Map, Path, Default>
        getNode(path: NodePath | string): Node
        getNodeOrNull<Path extends StaticNodePath<Map>, Default = never>(path: Path): null | ResolveNodePath<Map, Path, Default>
        getNodeOrNull(path: NodePath | string): null | Node
        getParent(): Node
        findChild(pattern: string, recursive: boolean = true, owned: boolean = true): Node
        findChildren(pattern: string, type: string = '', recursive: boolean = true, owned: boolean = true): GArray
        findParent(pattern: string): Node
        hasNodeAndResource(path: NodePath | string): boolean
        getNodeAndResource(path: NodePath | string): GArray
        isInsideTree(): boolean
        isPartOfEditedScene(): boolean
        isAncestorOf(node: Node): boolean
        isGreaterThan(node: Node): boolean
        getPath(): NodePath
        getPathTo(node: Node, useUniquePath: boolean = false): NodePath
        addToGroup(group: StringName, persistent: boolean = false): void
        removeFromGroup(group: StringName): void
        isInGroup(group: StringName): boolean
        moveChild(childNode: Node, toIndex: int64): void
        getGroups(): GArray
        getIndex(includeInternal: boolean = false): int64
        printTree(): void
        printTreePretty(): void
        getTreeString(): string
        getTreeStringPretty(): string
        propagateNotification(what: int64): void
        propagateCall(method: StringName, args: GArray = [], parentFirst: boolean = false): void
        setPhysicsProcess(enable: boolean): void
        getPhysicsProcessDeltaTime(): float64
        isPhysicsProcessing(): boolean
        getProcessDeltaTime(): float64
        setProcess(enable: boolean): void
        isProcessing(): boolean
        setProcessInput(enable: boolean): void
        isProcessingInput(): boolean
        setProcessShortcutInput(enable: boolean): void
        isProcessingShortcutInput(): boolean
        setProcessUnhandledInput(enable: boolean): void
        isProcessingUnhandledInput(): boolean
        setProcessUnhandledKeyInput(enable: boolean): void
        isProcessingUnhandledKeyInput(): boolean
        canProcess(): boolean
        setDisplayFolded(fold: boolean): void
        isDisplayedFolded(): boolean
        setProcessInternal(enable: boolean): void
        isProcessingInternal(): boolean
        setPhysicsProcessInternal(enable: boolean): void
        isPhysicsProcessingInternal(): boolean
        isPhysicsInterpolated(): boolean
        isPhysicsInterpolatedAndEnabled(): boolean
        resetPhysicsInterpolation(): void
        setTranslationDomainInherited(): void
        getWindow(): Window
        getLastExclusiveWindow(): Window
        getTree(): SceneTree
        createTween(): Tween
        
        /** Duplicates the node, returning a new node with all of its properties, signals, groups, and children copied from the original. The behavior can be tweaked through the [param flags] (see [enum DuplicateFlags]).  
         *      
         *  **Note:** For nodes with a [Script] attached, if [method Object._init] has been defined with required parameters, the duplicated node will not have a [Script].  
         */
        duplicate(flags: int64 = 15): Node
        replaceBy(node: Node, keepGroups: boolean = false): void
        setSceneInstanceLoadPlaceholder(loadPlaceholder: boolean): void
        getSceneInstanceLoadPlaceholder(): boolean
        setEditableInstance(node: Node, isEditable: boolean): void
        isEditableInstance(node: Node): boolean
        getViewport(): Viewport
        queueFree(): void
        requestReady(): void
        isNodeReady(): boolean
        setMultiplayerAuthority(id: int64, recursive: boolean = true): void
        getMultiplayerAuthority(): int64
        isMultiplayerAuthority(): boolean
        rpcConfig(method: StringName, config: any): void
        getRpcConfig(): any
        
        /** Translates a [param message], using the translation catalogs configured in the Project Settings. Further [param context] can be specified to help with the translation. Note that most [Control] nodes automatically translate their strings, so this method is mostly useful for formatted strings or custom drawn text.  
         *  This method works the same as [method Object.tr], with the addition of respecting the [member auto_translate_mode] state.  
         *  If [method Object.can_translate_messages] is `false`, or no translation is available, this method returns the [param message] without changes. See [method Object.set_message_translation].  
         *  For detailed examples, see [url=https://docs.godotengine.org/en/latest/tutorials/i18n/internationalizing_games.html]Internationalizing games[/url].  
         */
        atr(message: string, context: StringName = ''): string
        atrN(message: string, pluralMessage: StringName, n: int64, context: StringName = ''): string
        _setPropertyPinned(property: string, pinned: boolean): void
        
        /** Sends a remote procedure call request for the given [param method] to peers on the network (and locally), sending additional arguments to the method called by the RPC. The call request will only be received by nodes with the same [NodePath], including the exact same [member name]. Behavior depends on the RPC configuration for the given [param method] (see [method rpc_config] and [annotation @GDScript.@rpc]). By default, methods are not exposed to RPCs.  
         *  May return [constant OK] if the call is successful, [constant ERR_INVALID_PARAMETER] if the arguments passed in the [param method] do not match, [constant ERR_UNCONFIGURED] if the node's [member multiplayer] cannot be fetched (such as when the node is not inside the tree), [constant ERR_CONNECTION_ERROR] if [member multiplayer]'s connection is not available.  
         *      
         *  **Note:** You can only safely use RPCs on clients after you received the [signal MultiplayerAPI.connected_to_server] signal from the [MultiplayerAPI]. You also need to keep track of the connection state, either by the [MultiplayerAPI] signals like [signal MultiplayerAPI.server_disconnected] or by checking (`get_multiplayer().peer.get_connection_status() == CONNECTION_CONNECTED`).  
         */
        rpc(method: StringName, ...varargs: any[]): GError
        rpcId(peerId: int64, method: StringName, ...varargs: any[]): GError
        updateConfigurationWarnings(): void
        callDeferredThreadGroup(method: StringName, ...varargs: any[]): any
        setDeferredThreadGroup(property: StringName, value: any): void
        notifyDeferredThreadGroup(what: int64): void
        callThreadSafe(method: StringName, ...varargs: any[]): any
        setThreadSafe(property: StringName, value: any): void
        notifyThreadSafe(what: int64): void
        get _importPath(): NodePath
        set _importPath(value: NodePath | string)
        get uniqueNameInOwner(): boolean
        set uniqueNameInOwner(value: boolean)
        get sceneFilePath(): string
        set sceneFilePath(value: string)
        
        /** The owner of this node. The owner must be an ancestor of this node. When packing the owner node in a [PackedScene], all the nodes it owns are also saved with it. See also [member unique_name_in_owner].  
         *      
         *  **Note:** In the editor, nodes not owned by the scene root are usually not displayed in the Scene dock, and will **not** be saved. To prevent this, remember to set the owner after calling [method add_child].  
         */
        get owner(): Node
        set owner(value: Node)
        
        /** The [MultiplayerAPI] instance associated with this node. See [method SceneTree.get_multiplayer].  
         *      
         *  **Note:** Renaming the node, or moving it in the tree, will not move the [MultiplayerAPI] to the new path, you will have to update this manually.  
         */
        get multiplayer(): any /*MultiplayerAPI*/
        set multiplayer(value: any /*MultiplayerAPI*/)
        get processMode(): int64
        set processMode(value: int64)
        get processPriority(): int64
        set processPriority(value: int64)
        get processPhysicsPriority(): int64
        set processPhysicsPriority(value: int64)
        get processThreadGroup(): int64
        set processThreadGroup(value: int64)
        get processThreadGroupOrder(): int64
        set processThreadGroupOrder(value: int64)
        get processThreadMessages(): int64
        set processThreadMessages(value: int64)
        get physicsInterpolationMode(): int64
        set physicsInterpolationMode(value: int64)
        get autoTranslateMode(): int64
        set autoTranslateMode(value: int64)
        get editorDescription(): string
        set editorDescription(value: string)
        
        /** Emitted when the node is considered ready, after [method _ready] is called. */
        readonly ready: Signal<() => void>
        
        /** Emitted when the node's [member name] is changed, if the node is inside the tree. */
        readonly renamed: Signal<() => void>
        readonly treeEntered: Signal<() => void>
        readonly treeExiting: Signal<() => void>
        readonly treeExited: Signal<() => void>
        readonly childEnteredTree: Signal<(node: Node) => void>
        readonly childExitingTree: Signal<(node: Node) => void>
        readonly childOrderChanged: Signal<() => void>
        readonly replacingBy: Signal<(node: Node) => void>
        readonly editorDescriptionChanged: Signal<(node: Node) => void>
        readonly editorStateChanged: Signal<() => void>
    }
    /** A 2D game object, inherited by all 2D-related nodes. Has a position, rotation, scale, and skew.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_node2d.html  
     */
    class Node2D<Map extends Record<string, Node> = {}> extends CanvasItem<Map> {
        constructor(identifier?: any)
        /** Applies a rotation to the node, in radians, starting from its current rotation. */
        rotate(radians: float64): void
        moveLocalX(delta: float64, scaled: boolean = false): void
        moveLocalY(delta: float64, scaled: boolean = false): void
        
        /** Translates the node by the given [param offset] in local coordinates. */
        translate(offset: Vector2): void
        globalTranslate(offset: Vector2): void
        applyScale(ratio: Vector2): void
        lookAt(point: Vector2): void
        getAngleTo(point: Vector2): float64
        toLocal(globalPoint: Vector2): Vector2
        toGlobal(localPoint: Vector2): Vector2
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
        get globalPosition(): Vector2
        set globalPosition(value: Vector2)
        get globalRotation(): float64
        set globalRotation(value: float64)
        get globalRotationDegrees(): float64
        set globalRotationDegrees(value: float64)
        get globalScale(): Vector2
        set globalScale(value: Vector2)
        get globalSkew(): float64
        set globalSkew(value: float64)
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
    /** Most basic 3D game object, parent of all 3D-related nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_node3d.html  
     */
    class Node3D<Map extends Record<string, Node> = {}> extends Node<Map> {
        /** [Node3D] nodes receive this notification when their global transform changes. This means that either the current or a parent node changed its transform.  
         *  In order for [constant NOTIFICATION_TRANSFORM_CHANGED] to work, users first need to ask for it, with [method set_notify_transform]. The notification is also sent if the node is in the editor context and it has at least one valid gizmo.  
         */
        static readonly NOTIFICATION_TRANSFORM_CHANGED = 2000
        
        /** [Node3D] nodes receive this notification when they are registered to new [World3D] resource. */
        static readonly NOTIFICATION_ENTER_WORLD = 41
        
        /** [Node3D] nodes receive this notification when they are unregistered from current [World3D] resource. */
        static readonly NOTIFICATION_EXIT_WORLD = 42
        
        /** [Node3D] nodes receive this notification when their visibility changes. */
        static readonly NOTIFICATION_VISIBILITY_CHANGED = 43
        
        /** [Node3D] nodes receive this notification when their local transform changes. This is not received when the transform of a parent node is changed.  
         *  In order for [constant NOTIFICATION_LOCAL_TRANSFORM_CHANGED] to work, users first need to ask for it, with [method set_notify_local_transform].  
         */
        static readonly NOTIFICATION_LOCAL_TRANSFORM_CHANGED = 44
        
        /** The rotation is edited using [Vector3] Euler angles. */
        static readonly ROTATION_EDIT_MODE_EULER = 0
        
        /** The rotation is edited using a [Quaternion]. */
        static readonly ROTATION_EDIT_MODE_QUATERNION = 1
        
        /** The rotation is edited using a [Basis]. In this mode, [member scale] can't be edited separately. */
        static readonly ROTATION_EDIT_MODE_BASIS = 2
        constructor(identifier?: any)
        getGlobalTransformInterpolated(): Transform3D
        getParentNode3D(): Node3D
        setIgnoreTransformNotification(enabled: boolean): void
        setDisableScale(disable: boolean): void
        isScaleDisabled(): boolean
        getWorld3D(): World3D
        forceUpdateTransform(): void
        updateGizmos(): void
        addGizmo(gizmo: Node3DGizmo): void
        getGizmos(): GArray
        clearGizmos(): void
        setSubgizmoSelection(gizmo: Node3DGizmo, id: int64, transform: Transform3D): void
        clearSubgizmoSelection(): void
        isVisibleInTree(): boolean
        
        /** Enables rendering of this node. Changes [member visible] to `true`. */
        show(): void
        
        /** Disables rendering of this node. Changes [member visible] to `false`. */
        hide(): void
        setNotifyLocalTransform(enable: boolean): void
        isLocalTransformNotificationEnabled(): boolean
        setNotifyTransform(enable: boolean): void
        isTransformNotificationEnabled(): boolean
        
        /** Rotates the local transformation around axis, a unit [Vector3], by specified angle in radians. */
        rotate(axis: Vector3, angle: float64): void
        globalRotate(axis: Vector3, angle: float64): void
        globalScale(scale: Vector3): void
        globalTranslate(offset: Vector3): void
        rotateObjectLocal(axis: Vector3, angle: float64): void
        scaleObjectLocal(scale: Vector3): void
        translateObjectLocal(offset: Vector3): void
        rotateX(angle: float64): void
        rotateY(angle: float64): void
        rotateZ(angle: float64): void
        
        /** Changes the node's position by the given offset [Vector3].  
         *  Note that the translation [param offset] is affected by the node's scale, so if scaled by e.g. `(10, 1, 1)`, a translation by an offset of `(2, 0, 0)` would actually add 20 (`2 * 10`) to the X coordinate.  
         */
        translate(offset: Vector3): void
        
        /** Resets this node's transformations (like scale, skew and taper) preserving its rotation and translation by performing Gram-Schmidt orthonormalization on this node's [Transform3D]. */
        orthonormalize(): void
        setIdentity(): void
        lookAt(target: Vector3, up: Vector3 = Vector3.ZERO, useModelFront: boolean = false): void
        lookAtFromPosition(position: Vector3, target: Vector3, up: Vector3 = Vector3.ZERO, useModelFront: boolean = false): void
        toLocal(globalPoint: Vector3): Vector3
        toGlobal(localPoint: Vector3): Vector3
        
        /** Local space [Transform3D] of this node, with respect to the parent node. */
        get transform(): Transform3D
        set transform(value: Transform3D)
        get globalTransform(): Transform3D
        set globalTransform(value: Transform3D)
        
        /** Local position or translation of this node relative to the parent. This is equivalent to `transform.origin`. */
        get position(): Vector3
        set position(value: Vector3)
        
        /** Rotation part of the local transformation in radians, specified in terms of Euler angles. The angles construct a rotation in the order specified by the [member rotation_order] property.  
         *      
         *  **Note:** In the mathematical sense, rotation is a matrix and not a vector. The three Euler angles, which are the three independent parameters of the Euler-angle parametrization of the rotation matrix, are stored in a [Vector3] data structure not because the rotation is a vector, but only because [Vector3] exists as a convenient data-structure to store 3 floating-point numbers. Therefore, applying affine operations on the rotation "vector" is not meaningful.  
         *      
         *  **Note:** This property is edited in the inspector in degrees. If you want to use degrees in a script, use [member rotation_degrees].  
         */
        get rotation(): Vector3
        set rotation(value: Vector3)
        get rotationDegrees(): Vector3
        set rotationDegrees(value: Vector3)
        
        /** Access to the node rotation as a [Quaternion]. This property is ideal for tweening complex rotations. */
        get quaternion(): Quaternion
        set quaternion(value: Quaternion)
        
        /** Basis of the [member transform] property. Represents the rotation, scale, and shear of this node. */
        get basis(): Basis
        set basis(value: Basis)
        
        /** Scale part of the local transformation.  
         *      
         *  **Note:** Mixed negative scales in 3D are not decomposable from the transformation matrix. Due to the way scale is represented with transformation matrices in Godot, the scale values will either be all positive or all negative.  
         *      
         *  **Note:** Not all nodes are visually scaled by the [member scale] property. For example, [Light3D]s are not visually affected by [member scale].  
         */
        get scale(): Vector3
        set scale(value: Vector3)
        get rotationEditMode(): int64
        set rotationEditMode(value: int64)
        get rotationOrder(): int64
        set rotationOrder(value: int64)
        get topLevel(): boolean
        set topLevel(value: boolean)
        get globalPosition(): Vector3
        set globalPosition(value: Vector3)
        get globalBasis(): Basis
        set globalBasis(value: Basis)
        get globalRotation(): Vector3
        set globalRotation(value: Vector3)
        get globalRotationDegrees(): Vector3
        set globalRotationDegrees(value: Vector3)
        
        /** If `true`, this node is drawn. The node is only visible if all of its ancestors are visible as well (in other words, [method is_visible_in_tree] must return `true`). */
        get visible(): boolean
        set visible(value: boolean)
        get visibilityParent(): NodePath
        set visibilityParent(value: NodePath | string)
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
        getNoise1D(x: float64): float64
        getNoise2D(x: float64, y: float64): float64
        getNoise2Dv(v: Vector2): float64
        getNoise3D(x: float64, y: float64, z: float64): float64
        getNoise3Dv(v: Vector3): float64
        getImage(width: int64, height: int64, invert: boolean = false, in3DSpace: boolean = false, normalize: boolean = true): Image
        getSeamlessImage(width: int64, height: int64, invert: boolean = false, in3DSpace: boolean = false, skirt: float64 = 0.1, normalize: boolean = true): Image
        getImage3D(width: int64, height: int64, depth: int64, invert: boolean = false, normalize: boolean = true): GArray
        getSeamlessImage3D(width: int64, height: int64, depth: int64, invert: boolean = false, skirt: float64 = 0.1, normalize: boolean = true): GArray
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
        get in3DSpace(): boolean
        set in3DSpace(value: boolean)
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
        get seamlessBlendSkirt(): float64
        set seamlessBlendSkirt(value: float64)
        get asNormalMap(): boolean
        set asNormalMap(value: boolean)
        get bumpStrength(): float64
        set bumpStrength(value: float64)
        
        /** If `true`, the noise image coming from the noise generator is normalized to the range `0.0` to `1.0`.  
         *  Turning normalization off can affect the contrast and allows you to generate non repeating tileable noise textures.  
         */
        get normalize(): boolean
        set normalize(value: boolean)
        get colorRamp(): Gradient
        set colorRamp(value: Gradient)
        
        /** The instance of the [Noise] object. */
        get noise(): Noise
        set noise(value: Noise)
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
        get seamlessBlendSkirt(): float64
        set seamlessBlendSkirt(value: float64)
        
        /** If `true`, the noise image coming from the noise generator is normalized to the range `0.0` to `1.0`.  
         *  Turning normalization off can affect the contrast and allows you to generate non repeating tileable noise textures.  
         */
        get normalize(): boolean
        set normalize(value: boolean)
        get colorRamp(): Gradient
        set colorRamp(value: Gradient)
        
        /** The instance of the [Noise] object. */
        get noise(): Noise
        set noise(value: Noise)
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
        notification(what: int64, reversed: boolean = false): void
        ["toString"]: () => string
        getInstanceId(): int64
        setScript(script: any): void
        getScript(): any
        setMeta(name: StringName, value: any): void
        removeMeta(name: StringName): void
        getMeta(name: StringName, default_: any = <any> {}): any
        hasMeta(name: StringName): boolean
        getMetaList(): GArray
        addUserSignal(signal: string, arguments_: GArray = []): void
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
        connect(signal: StringName, callable: Callable, flags: int64 = 0): GError
        disconnect(signal: StringName, callable: Callable): void
        isConnected(signal: StringName, callable: Callable): boolean
        hasConnections(signal: StringName): boolean
        setBlockSignals(enable: boolean): void
        isBlockingSignals(): boolean
        notifyPropertyListChanged(): void
        setMessageTranslation(enable: boolean): void
        canTranslateMessages(): boolean
        tr(message: StringName, context: StringName = ''): string
        trN(message: StringName, pluralMessage: StringName, n: int64, context: StringName = ''): string
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
        getVertices(): PackedVector3Array
        getIndices(): PackedInt32Array
    }
    /** Provides occlusion culling for 3D nodes, which improves performance in closed areas.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_occluderinstance3d.html  
     */
    class OccluderInstance3D<Map extends Record<string, Node> = {}> extends VisualInstance3D<Map> {
        constructor(identifier?: any)
        setBakeMaskValue(layerNumber: int64, value: boolean): void
        getBakeMaskValue(layerNumber: int64): boolean
        _isEditable3DPolygon(): boolean
        _getEditable3DPolygonResource(): Resource
        
        /** The occluder resource for this [OccluderInstance3D]. You can generate an occluder resource by selecting an [OccluderInstance3D] node then using the **Bake Occluders** button at the top of the editor.  
         *  You can also draw your own 2D occluder polygon by adding a new [PolygonOccluder3D] resource to the [member occluder] property in the Inspector.  
         *  Alternatively, you can select a primitive occluder to use: [QuadOccluder3D], [BoxOccluder3D] or [SphereOccluder3D].  
         */
        get occluder(): Occluder3D
        set occluder(value: Occluder3D)
        get bakeMask(): int64
        set bakeMask(value: int64)
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
        getLength(): float64
        get packetData(): GArray
        set packetData(value: GArray)
        get granulePositions(): PackedInt64Array
        set granulePositions(value: PackedInt64Array | int64[])
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
    class OmniLight3D<Map extends Record<string, Node> = {}> extends Light3D<Map> {
        /** Shadows are rendered to a dual-paraboloid texture. Faster than [constant SHADOW_CUBE], but lower-quality. */
        static readonly SHADOW_DUAL_PARABOLOID = 0
        
        /** Shadows are rendered to a cubemap. Slower than [constant SHADOW_DUAL_PARABOLOID], but higher-quality. */
        static readonly SHADOW_CUBE = 1
        constructor(identifier?: any)
        get omniRange(): float64
        set omniRange(value: float64)
        get omniAttenuation(): float64
        set omniAttenuation(value: float64)
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
        getPlaySpace(): int64
        getPredictedDisplayTime(): int64
        getNextFrameTime(): int64
        canRender(): boolean
        findAction(name: string, actionSet: Rid): Rid
        actionGetHandle(action: Rid): int64
        getHandTracker(handIndex: int64): int64
        registerCompositionLayerProvider(extension: OpenXRExtensionWrapperExtension): void
        unregisterCompositionLayerProvider(extension: OpenXRExtensionWrapperExtension): void
        registerProjectionViewsExtension(extension: OpenXRExtensionWrapperExtension): void
        unregisterProjectionViewsExtension(extension: OpenXRExtensionWrapperExtension): void
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
        get localizedName(): string
        set localizedName(value: string)
        get actionType(): int64
        set actionType(value: int64)
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
        getActionSetCount(): int64
        findActionSet(name: string): OpenXRActionSet
        getActionSet(idx: int64): OpenXRActionSet
        addActionSet(actionSet: OpenXRActionSet): void
        removeActionSet(actionSet: OpenXRActionSet): void
        getInteractionProfileCount(): int64
        findInteractionProfile(name: string): OpenXRInteractionProfile
        getInteractionProfile(idx: int64): OpenXRInteractionProfile
        addInteractionProfile(interactionProfile: OpenXRInteractionProfile): void
        removeInteractionProfile(interactionProfile: OpenXRInteractionProfile): void
        createDefaultActionSets(): void
        get actionSets(): OpenXRActionSet
        set actionSets(value: OpenXRActionSet)
        get interactionProfiles(): OpenXRInteractionProfile
        set interactionProfiles(value: OpenXRInteractionProfile)
    }
    /** Collection of [OpenXRAction] resources that make up an action set.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_openxractionset.html  
     */
    class OpenXRActionSet extends Resource {
        constructor(identifier?: any)
        getActionCount(): int64
        addAction(action: OpenXRAction): void
        removeAction(action: OpenXRAction): void
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
        get onThreshold(): float64
        set onThreshold(value: float64)
        get offThreshold(): float64
        set offThreshold(value: float64)
        get onHaptic(): OpenXRHapticBase
        set onHaptic(value: OpenXRHapticBase)
        get offHaptic(): OpenXRHapticBase
        set offHaptic(value: OpenXRHapticBase)
    }
    /** Binding modifier base class.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_openxrbindingmodifier.html  
     */
    class OpenXRBindingModifier extends Resource {
        constructor(identifier?: any)
        /* gdvirtual */ _getDescription(): string
        /* gdvirtual */ _getIPModification(): PackedByteArray
    }
    /** Binding modifier editor.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_openxrbindingmodifiereditor.html  
     */
    class OpenXRBindingModifierEditor<Map extends Record<string, Node> = {}> extends PanelContainer<Map> {
        constructor(identifier?: any)
        getBindingModifier(): OpenXRBindingModifier
        
        /** Setup this editor for the provided [param action_map] and [param binding_modifier]. */
        setup(actionMap: OpenXRActionMap, bindingModifier: OpenXRBindingModifier): void
        readonly bindingModifierRemoved: Signal<(bindingModifierEditor: GObject) => void>
    }
    /** The parent class of all OpenXR composition layer nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_openxrcompositionlayer.html  
     */
    class OpenXRCompositionLayer<Map extends Record<string, Node> = {}> extends Node3D<Map> {
        constructor(identifier?: any)
        getAndroidSurface(): JavaObject
        isNativelySupported(): boolean
        intersectsRay(origin: Vector3, direction: Vector3): Vector2
        get layerViewport(): GObject
        set layerViewport(value: GObject)
        get useAndroidSurface(): boolean
        set useAndroidSurface(value: boolean)
        get androidSurfaceSize(): Vector2I
        set androidSurfaceSize(value: Vector2I)
        get sortOrder(): int64
        set sortOrder(value: int64)
        get alphaBlend(): boolean
        set alphaBlend(value: boolean)
        get enableHolePunch(): boolean
        set enableHolePunch(value: boolean)
    }
    /** An OpenXR composition layer that is rendered as an internal slice of a cylinder.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_openxrcompositionlayercylinder.html  
     */
    class OpenXRCompositionLayerCylinder<Map extends Record<string, Node> = {}> extends OpenXRCompositionLayer<Map> {
        constructor(identifier?: any)
        /** The radius of the cylinder. */
        get radius(): float64
        set radius(value: float64)
        get aspectRatio(): float64
        set aspectRatio(value: float64)
        get centralAngle(): float64
        set centralAngle(value: float64)
        get fallbackSegments(): int64
        set fallbackSegments(value: int64)
    }
    /** An OpenXR composition layer that is rendered as an internal slice of a sphere.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_openxrcompositionlayerequirect.html  
     */
    class OpenXRCompositionLayerEquirect<Map extends Record<string, Node> = {}> extends OpenXRCompositionLayer<Map> {
        constructor(identifier?: any)
        /** The radius of the sphere. */
        get radius(): float64
        set radius(value: float64)
        get centralHorizontalAngle(): float64
        set centralHorizontalAngle(value: float64)
        get upperVerticalAngle(): float64
        set upperVerticalAngle(value: float64)
        get lowerVerticalAngle(): float64
        set lowerVerticalAngle(value: float64)
        get fallbackSegments(): int64
        set fallbackSegments(value: int64)
    }
    /** An OpenXR composition layer that is rendered as a quad.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_openxrcompositionlayerquad.html  
     */
    class OpenXRCompositionLayerQuad<Map extends Record<string, Node> = {}> extends OpenXRCompositionLayer<Map> {
        constructor(identifier?: any)
        get quadSize(): Vector2
        set quadSize(value: Vector2)
    }
    /** The DPad binding modifier converts an axis input to a dpad output.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_openxrdpadbindingmodifier.html  
     */
    class OpenXRDpadBindingModifier extends OpenXripBindingModifier {
        constructor(identifier?: any)
        get actionSet(): OpenXRActionSet
        set actionSet(value: OpenXRActionSet)
        get inputPath(): string
        set inputPath(value: string)
        
        /** When our input value is equal or larger than this value, our dpad in that direction becomes true. It stays true until it falls under the [member threshold_released] value. */
        get threshold(): float64
        set threshold(value: float64)
        get thresholdReleased(): float64
        set thresholdReleased(value: float64)
        get centerRegion(): float64
        set centerRegion(value: float64)
        get wedgeAngle(): float64
        set wedgeAngle(value: float64)
        get isSticky(): boolean
        set isSticky(value: boolean)
        get onHaptic(): OpenXRHapticBase
        set onHaptic(value: OpenXRHapticBase)
        get offHaptic(): OpenXRHapticBase
        set offHaptic(value: OpenXRHapticBase)
    }
    /** Allows clients to implement OpenXR extensions with GDExtension.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_openxrextensionwrapperextension.html  
     */
    class OpenXRExtensionWrapperExtension extends GObject {
        constructor(identifier?: any)
        /* gdvirtual */ _getRequestedExtensions(): GDictionary
        /* gdvirtual */ _setSystemPropertiesAndGetNextPointer(nextPointer: int64): int64
        /* gdvirtual */ _setInstanceCreateInfoAndGetNextPointer(nextPointer: int64): int64
        /* gdvirtual */ _setSessionCreateAndGetNextPointer(nextPointer: int64): int64
        /* gdvirtual */ _setSwapchainCreateInfoAndGetNextPointer(nextPointer: int64): int64
        /* gdvirtual */ _setHandJointLocationsAndGetNextPointer(handIndex: int64, nextPointer: int64): int64
        /* gdvirtual */ _setProjectionViewsAndGetNextPointer(viewIndex: int64, nextPointer: int64): int64
        /* gdvirtual */ _getCompositionLayerCount(): int64
        /* gdvirtual */ _getCompositionLayer(index: int64): int64
        /* gdvirtual */ _getCompositionLayerOrder(index: int64): int64
        /* gdvirtual */ _getSuggestedTrackerNames(): PackedStringArray
        /* gdvirtual */ _onRegisterMetadata(): void
        /* gdvirtual */ _onBeforeInstanceCreated(): void
        /* gdvirtual */ _onInstanceCreated(instance: int64): void
        /* gdvirtual */ _onInstanceDestroyed(): void
        /* gdvirtual */ _onSessionCreated(session: int64): void
        /* gdvirtual */ _onProcess(): void
        /* gdvirtual */ _onPreRender(): void
        /* gdvirtual */ _onMainSwapchainsCreated(): void
        /* gdvirtual */ _onPreDrawViewport(viewport: Rid): void
        /* gdvirtual */ _onPostDrawViewport(viewport: Rid): void
        /* gdvirtual */ _onSessionDestroyed(): void
        /* gdvirtual */ _onStateIdle(): void
        /* gdvirtual */ _onStateReady(): void
        /* gdvirtual */ _onStateSynchronized(): void
        /* gdvirtual */ _onStateVisible(): void
        /* gdvirtual */ _onStateFocused(): void
        /* gdvirtual */ _onStateStopping(): void
        /* gdvirtual */ _onStateLossPending(): void
        /* gdvirtual */ _onStateExiting(): void
        /* gdvirtual */ _onEventPolled(event: int64): boolean
        /* gdvirtual */ _setViewportCompositionLayerAndGetNextPointer(layer: int64, propertyValues: GDictionary, nextPointer: int64): int64
        /* gdvirtual */ _getViewportCompositionLayerExtensionProperties(): GArray
        /* gdvirtual */ _getViewportCompositionLayerExtensionPropertyDefaults(): GDictionary
        /* gdvirtual */ _onViewportCompositionLayerDestroyed(layer: int64): void
        /* gdvirtual */ _setAndroidSurfaceSwapchainCreateInfoAndGetNextPointer(propertyValues: GDictionary, nextPointer: int64): int64
        getOpenxrApi(): any /*OpenXRAPIExtension*/
        registerExtensionWrapper(): void
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
    class OpenXRHand<Map extends Record<string, Node> = {}> extends Node3D<Map> {
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
        get motionRange(): int64
        set motionRange(value: int64)
        get handSkeleton(): NodePath
        set handSkeleton(value: NodePath | string)
        get skeletonRig(): int64
        set skeletonRig(value: int64)
        get boneUpdate(): int64
        set boneUpdate(value: int64)
    }
}
