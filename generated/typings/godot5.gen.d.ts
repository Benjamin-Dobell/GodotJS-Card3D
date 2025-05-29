// AUTO-GENERATED
declare module "godot" {
    /** A parallax scrolling layer to be used with [ParallaxBackground].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_parallaxlayer.html  
     */
    class ParallaxLayer<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** Multiplies the ParallaxLayer's motion. If an axis is set to `0`, it will not scroll. */
        get motionScale(): Vector2
        set motionScale(value: Vector2)
        
        /** The ParallaxLayer's offset relative to the parent ParallaxBackground's [member ParallaxBackground.scroll_offset]. */
        get motionOffset(): Vector2
        set motionOffset(value: Vector2)
        
        /** The interval, in pixels, at which the [ParallaxLayer] is drawn repeatedly. Useful for creating an infinitely scrolling background. If an axis is set to `0`, the [ParallaxLayer] will be drawn only once along that direction.  
         *      
         *  **Note:** If you want the repetition to pixel-perfect match a [Texture2D] displayed by a child node, you should account for any scale applied to the texture when defining this interval. For example, if you use a child [Sprite2D] scaled to `0.5` to display a 600x600 texture, and want this sprite to be repeated continuously horizontally, you should set the mirroring to `Vector2(300, 0)`.  
         *      
         *  **Note:** If the length of the viewport axis is bigger than twice the repeated axis size, it will not repeat infinitely, as the parallax layer only draws 2 instances of the layer at any given time. The visibility window is calculated from the parent [ParallaxBackground]'s position, not the layer's own position. So, if you use mirroring, **do not** change the [ParallaxLayer] position relative to its parent. Instead, if you need to adjust the background's position, set the [member CanvasLayer.offset] property in the parent [ParallaxBackground].  
         *      
         *  **Note:** Despite the name, the layer will not be mirrored, it will only be repeated.  
         */
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
        
        /** Sets the minimum and maximum values of the given [param param].  
         *  The `x` component of the argument vector corresponds to minimum and the `y` component corresponds to maximum.  
         */
        setParam(param: ParticleProcessMaterial.Parameter, value: Vector2): void
        
        /** Returns the minimum and maximum values of the given [param param] as a vector.  
         *  The `x` component of the returned vector corresponds to minimum and the `y` component corresponds to maximum.  
         */
        getParam(param: ParticleProcessMaterial.Parameter): Vector2
        
        /** Sets the minimum value range for the given parameter. */
        setParamMin(param: ParticleProcessMaterial.Parameter, value: float64): void
        
        /** Returns the minimum value range for the given parameter. */
        getParamMin(param: ParticleProcessMaterial.Parameter): float64
        
        /** Sets the maximum value range for the given parameter. */
        setParamMax(param: ParticleProcessMaterial.Parameter, value: float64): void
        
        /** Returns the maximum value range for the given parameter. */
        getParamMax(param: ParticleProcessMaterial.Parameter): float64
        
        /** Sets the [Texture2D] for the specified [enum Parameter]. */
        setParamTexture(param: ParticleProcessMaterial.Parameter, texture: Texture2D): void
        
        /** Returns the [Texture2D] used by the specified parameter. */
        getParamTexture(param: ParticleProcessMaterial.Parameter): null | Texture2D
        
        /** If `true`, enables the specified particle flag. See [enum ParticleFlags] for options. */
        setParticleFlag(particleFlag: ParticleProcessMaterial.ParticleFlags, enable: boolean): void
        
        /** Returns `true` if the specified particle flag is enabled. See [enum ParticleFlags] for options. */
        getParticleFlag(particleFlag: ParticleProcessMaterial.ParticleFlags): boolean
        
        /** Particle lifetime randomness ratio. The equation for the lifetime of a particle is `lifetime * (1.0 - randf() * lifetime_randomness)`. For example, a [member lifetime_randomness] of `0.4` scales the lifetime between `0.6` to `1.0` of its original value. */
        get lifetimeRandomness(): float64
        set lifetimeRandomness(value: float64)
        
        /** Align Y axis of particle with the direction of its velocity. */
        get particleFlagAlignY(): boolean
        set particleFlagAlignY(value: boolean)
        
        /** If `true`, particles rotate around Y axis by [member angle_min]. */
        get particleFlagRotateY(): boolean
        set particleFlagRotateY(value: boolean)
        
        /** If `true`, particles will not move on the z axis. */
        get particleFlagDisableZ(): boolean
        set particleFlagDisableZ(value: boolean)
        
        /** Changes the behavior of the damping properties from a linear deceleration to a deceleration based on speed percentage. */
        get particleFlagDampingAsFriction(): boolean
        set particleFlagDampingAsFriction(value: boolean)
        
        /** The offset for the [member emission_shape], in local space. */
        get emissionShapeOffset(): Vector3
        set emissionShapeOffset(value: Vector3)
        
        /** The scale of the [member emission_shape], in local space. */
        get emissionShapeScale(): Vector3
        set emissionShapeScale(value: Vector3)
        
        /** Particles will be emitted inside this region. Use [enum EmissionShape] constants for values. */
        get emissionShape(): int64
        set emissionShape(value: int64)
        
        /** The sphere's radius if [member emission_shape] is set to [constant EMISSION_SHAPE_SPHERE]. */
        get emissionSphereRadius(): float64
        set emissionSphereRadius(value: float64)
        
        /** The box's extents if [member emission_shape] is set to [constant EMISSION_SHAPE_BOX].  
         *      
         *  **Note:** [member emission_box_extents] starts from the center point and applies the X, Y, and Z values in both directions. The size is twice the area of the extents.  
         */
        get emissionBoxExtents(): Vector3
        set emissionBoxExtents(value: Vector3)
        
        /** Particles will be emitted at positions determined by sampling this texture at a random position. Used with [constant EMISSION_SHAPE_POINTS] and [constant EMISSION_SHAPE_DIRECTED_POINTS]. Can be created automatically from mesh or node by selecting "Create Emission Points from Mesh/Node" under the "Particles" tool in the toolbar. */
        get emissionPointTexture(): null | Texture2D
        set emissionPointTexture(value: null | Texture2D)
        
        /** Particle velocity and rotation will be set by sampling this texture at the same point as the [member emission_point_texture]. Used only in [constant EMISSION_SHAPE_DIRECTED_POINTS]. Can be created automatically from mesh or node by selecting "Create Emission Points from Mesh/Node" under the "Particles" tool in the toolbar. */
        get emissionNormalTexture(): null | Texture2D
        set emissionNormalTexture(value: null | Texture2D)
        
        /** Particle color will be modulated by color determined by sampling this texture at the same point as the [member emission_point_texture].  
         *      
         *  **Note:** [member emission_color_texture] multiplies the particle mesh's vertex colors. To have a visible effect on a [BaseMaterial3D], [member BaseMaterial3D.vertex_color_use_as_albedo]  *must*  be `true`. For a [ShaderMaterial], `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, [member emission_color_texture] will have no visible effect.  
         */
        get emissionColorTexture(): null | Texture2D
        set emissionColorTexture(value: null | Texture2D)
        
        /** The number of emission points if [member emission_shape] is set to [constant EMISSION_SHAPE_POINTS] or [constant EMISSION_SHAPE_DIRECTED_POINTS]. */
        get emissionPointCount(): int64
        set emissionPointCount(value: int64)
        
        /** The axis of the ring when using the emitter [constant EMISSION_SHAPE_RING]. */
        get emissionRingAxis(): Vector3
        set emissionRingAxis(value: Vector3)
        
        /** The height of the ring when using the emitter [constant EMISSION_SHAPE_RING]. */
        get emissionRingHeight(): float64
        set emissionRingHeight(value: float64)
        
        /** The radius of the ring when using the emitter [constant EMISSION_SHAPE_RING]. */
        get emissionRingRadius(): float64
        set emissionRingRadius(value: float64)
        
        /** The inner radius of the ring when using the emitter [constant EMISSION_SHAPE_RING]. */
        get emissionRingInnerRadius(): float64
        set emissionRingInnerRadius(value: float64)
        
        /** The angle of the cone when using the emitter [constant EMISSION_SHAPE_RING]. The default angle of 90 degrees results in a ring, while an angle of 0 degrees results in a cone. Intermediate values will result in a ring where one end is larger than the other.  
         *      
         *  **Note:** Depending on [member emission_ring_height], the angle may be clamped if the ring's end is reached to form a perfect cone.  
         */
        get emissionRingConeAngle(): float64
        set emissionRingConeAngle(value: float64)
        get angle(): Vector2
        set angle(value: Vector2)
        
        /** Minimum equivalent of [member angle_max]. */
        get angleMin(): float64
        set angleMin(value: float64)
        
        /** Maximum initial rotation applied to each particle, in degrees.  
         *  Only applied when [member particle_flag_disable_z] or [member particle_flag_rotate_y] are `true` or the [BaseMaterial3D] being used to draw the particle is using [constant BaseMaterial3D.BILLBOARD_PARTICLES].  
         */
        get angleMax(): float64
        set angleMax(value: float64)
        
        /** Each particle's rotation will be animated along this [CurveTexture]. */
        get angleCurve(): null | CurveTexture
        set angleCurve(value: null | CurveTexture)
        
        /** Percentage of the velocity of the respective [GPUParticles2D] or [GPUParticles3D] inherited by each particle when spawning. */
        get inheritVelocityRatio(): float64
        set inheritVelocityRatio(value: float64)
        
        /** A pivot point used to calculate radial and orbital velocity of particles. */
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
        
        /** Minimum equivalent of [member initial_velocity_max]. */
        get initialVelocityMin(): float64
        set initialVelocityMin(value: float64)
        
        /** Maximum initial velocity magnitude for each particle. Direction comes from [member direction] and [member spread]. */
        get initialVelocityMax(): float64
        set initialVelocityMax(value: float64)
        get angularVelocity(): Vector2
        set angularVelocity(value: Vector2)
        
        /** Minimum equivalent of [member angular_velocity_max]. */
        get angularVelocityMin(): float64
        set angularVelocityMin(value: float64)
        
        /** Maximum initial angular velocity (rotation speed) applied to each particle in  *degrees*  per second.  
         *  Only applied when [member particle_flag_disable_z] or [member particle_flag_rotate_y] are `true` or the [BaseMaterial3D] being used to draw the particle is using [constant BaseMaterial3D.BILLBOARD_PARTICLES].  
         */
        get angularVelocityMax(): float64
        set angularVelocityMax(value: float64)
        
        /** Each particle's angular velocity (rotation speed) will vary along this [CurveTexture] over its lifetime. */
        get angularVelocityCurve(): null | CurveTexture
        set angularVelocityCurve(value: null | CurveTexture)
        get directionalVelocity(): Vector2
        set directionalVelocity(value: Vector2)
        
        /** Minimum directional velocity value, which is multiplied by [member directional_velocity_curve].  
         *      
         *  **Note:** Animated velocities will not be affected by damping, use [member velocity_limit_curve] instead.  
         */
        get directionalVelocityMin(): float64
        set directionalVelocityMin(value: float64)
        
        /** Maximum directional velocity value, which is multiplied by [member directional_velocity_curve].  
         *      
         *  **Note:** Animated velocities will not be affected by damping, use [member velocity_limit_curve] instead.  
         */
        get directionalVelocityMax(): float64
        set directionalVelocityMax(value: float64)
        
        /** A curve that specifies the velocity along each of the axes of the particle system along its lifetime.  
         *      
         *  **Note:** Animated velocities will not be affected by damping, use [member velocity_limit_curve] instead.  
         */
        get directionalVelocityCurve(): null | CurveXyzTexture
        set directionalVelocityCurve(value: null | CurveXyzTexture)
        get orbitVelocity(): Vector2
        set orbitVelocity(value: Vector2)
        
        /** Minimum equivalent of [member orbit_velocity_max].  
         *      
         *  **Note:** Animated velocities will not be affected by damping, use [member velocity_limit_curve] instead.  
         */
        get orbitVelocityMin(): float64
        set orbitVelocityMin(value: float64)
        
        /** Maximum orbital velocity applied to each particle. Makes the particles circle around origin. Specified in number of full rotations around origin per second.  
         *      
         *  **Note:** Animated velocities will not be affected by damping, use [member velocity_limit_curve] instead.  
         */
        get orbitVelocityMax(): float64
        set orbitVelocityMax(value: float64)
        
        /** Each particle's orbital velocity will vary along this [CurveTexture].  
         *      
         *  **Note:** For 3D orbital velocity, use a [CurveXYZTexture].  
         *      
         *  **Note:** Animated velocities will not be affected by damping, use [member velocity_limit_curve] instead.  
         */
        get orbitVelocityCurve(): null | CurveTexture | CurveXyzTexture
        set orbitVelocityCurve(value: null | CurveTexture | CurveXyzTexture)
        get radialVelocity(): Vector2
        set radialVelocity(value: Vector2)
        
        /** Minimum radial velocity applied to each particle. Makes particles move away from the [member velocity_pivot], or toward it if negative.  
         *      
         *  **Note:** Animated velocities will not be affected by damping, use [member velocity_limit_curve] instead.  
         */
        get radialVelocityMin(): float64
        set radialVelocityMin(value: float64)
        
        /** Maximum radial velocity applied to each particle. Makes particles move away from the [member velocity_pivot], or toward it if negative.  
         *      
         *  **Note:** Animated velocities will not be affected by damping, use [member velocity_limit_curve] instead.  
         */
        get radialVelocityMax(): float64
        set radialVelocityMax(value: float64)
        
        /** A [CurveTexture] that defines the velocity over the particle's lifetime away (or toward) the [member velocity_pivot].  
         *      
         *  **Note:** Animated velocities will not be affected by damping, use [member velocity_limit_curve] instead.  
         */
        get radialVelocityCurve(): null | CurveTexture
        set radialVelocityCurve(value: null | CurveTexture)
        
        /** A [CurveTexture] that defines the maximum velocity of a particle during its lifetime. */
        get velocityLimitCurve(): null | CurveTexture
        set velocityLimitCurve(value: null | CurveTexture)
        
        /** Gravity applied to every particle. */
        get gravity(): Vector3
        set gravity(value: Vector3)
        get linearAccel(): Vector2
        set linearAccel(value: Vector2)
        
        /** Minimum equivalent of [member linear_accel_max]. */
        get linearAccelMin(): float64
        set linearAccelMin(value: float64)
        
        /** Maximum linear acceleration applied to each particle in the direction of motion. */
        get linearAccelMax(): float64
        set linearAccelMax(value: float64)
        
        /** Each particle's linear acceleration will vary along this [CurveTexture]. */
        get linearAccelCurve(): null | CurveTexture
        set linearAccelCurve(value: null | CurveTexture)
        get radialAccel(): Vector2
        set radialAccel(value: Vector2)
        
        /** Minimum equivalent of [member radial_accel_max]. */
        get radialAccelMin(): float64
        set radialAccelMin(value: float64)
        
        /** Maximum radial acceleration applied to each particle. Makes particle accelerate away from the origin or towards it if negative. */
        get radialAccelMax(): float64
        set radialAccelMax(value: float64)
        
        /** Each particle's radial acceleration will vary along this [CurveTexture]. */
        get radialAccelCurve(): null | CurveTexture
        set radialAccelCurve(value: null | CurveTexture)
        get tangentialAccel(): Vector2
        set tangentialAccel(value: Vector2)
        
        /** Minimum equivalent of [member tangential_accel_max]. */
        get tangentialAccelMin(): float64
        set tangentialAccelMin(value: float64)
        
        /** Maximum tangential acceleration applied to each particle. Tangential acceleration is perpendicular to the particle's velocity giving the particles a swirling motion. */
        get tangentialAccelMax(): float64
        set tangentialAccelMax(value: float64)
        
        /** Each particle's tangential acceleration will vary along this [CurveTexture]. */
        get tangentialAccelCurve(): null | CurveTexture
        set tangentialAccelCurve(value: null | CurveTexture)
        get damping(): Vector2
        set damping(value: Vector2)
        
        /** Minimum equivalent of [member damping_max]. */
        get dampingMin(): float64
        set dampingMin(value: float64)
        
        /** The maximum rate at which particles lose velocity. For example value of `100` means that the particle will go from `100` velocity to `0` in `1` second. */
        get dampingMax(): float64
        set dampingMax(value: float64)
        
        /** Damping will vary along this [CurveTexture]. */
        get dampingCurve(): null | CurveTexture
        set dampingCurve(value: null | CurveTexture)
        
        /** If `true`, interaction with particle attractors is enabled. In 3D, attraction only occurs within the area defined by the [GPUParticles3D] node's [member GPUParticles3D.visibility_aabb]. */
        get attractorInteractionEnabled(): boolean
        set attractorInteractionEnabled(value: boolean)
        get scale(): Vector2
        set scale(value: Vector2)
        
        /** Minimum equivalent of [member scale_max]. */
        get scaleMin(): float64
        set scaleMin(value: float64)
        
        /** Maximum initial scale applied to each particle. */
        get scaleMax(): float64
        set scaleMax(value: float64)
        
        /** Each particle's scale will vary along this [CurveTexture] over its lifetime. If a [CurveXYZTexture] is supplied instead, the scale will be separated per-axis. */
        get scaleCurve(): null | CurveTexture | CurveXyzTexture
        set scaleCurve(value: null | CurveTexture | CurveXyzTexture)
        get scaleOverVelocity(): Vector2
        set scaleOverVelocity(value: Vector2)
        
        /** Minimum velocity value reference for [member scale_over_velocity_curve].  
         *  [member scale_over_velocity_curve] will be interpolated between [member scale_over_velocity_min] and [member scale_over_velocity_max].  
         */
        get scaleOverVelocityMin(): float64
        set scaleOverVelocityMin(value: float64)
        
        /** Maximum velocity value reference for [member scale_over_velocity_curve].  
         *  [member scale_over_velocity_curve] will be interpolated between [member scale_over_velocity_min] and [member scale_over_velocity_max].  
         */
        get scaleOverVelocityMax(): float64
        set scaleOverVelocityMax(value: float64)
        
        /** Either a [CurveTexture] or a [CurveXYZTexture] that scales each particle based on its velocity. */
        get scaleOverVelocityCurve(): null | CurveTexture | CurveXyzTexture
        set scaleOverVelocityCurve(value: null | CurveTexture | CurveXyzTexture)
        
        /** Each particle's initial color. If the [GPUParticles2D]'s `texture` is defined, it will be multiplied by this color.  
         *      
         *  **Note:** [member color] multiplies the particle mesh's vertex colors. To have a visible effect on a [BaseMaterial3D], [member BaseMaterial3D.vertex_color_use_as_albedo]  *must*  be `true`. For a [ShaderMaterial], `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, [member color] will have no visible effect.  
         */
        get color(): Color
        set color(value: Color)
        
        /** Each particle's color will vary along this [GradientTexture1D] over its lifetime (multiplied with [member color]).  
         *      
         *  **Note:** [member color_ramp] multiplies the particle mesh's vertex colors. To have a visible effect on a [BaseMaterial3D], [member BaseMaterial3D.vertex_color_use_as_albedo]  *must*  be `true`. For a [ShaderMaterial], `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, [member color_ramp] will have no visible effect.  
         */
        get colorRamp(): null | GradientTexture1D
        set colorRamp(value: null | GradientTexture1D)
        
        /** Each particle's initial color will vary along this [GradientTexture1D] (multiplied with [member color]).  
         *      
         *  **Note:** [member color_initial_ramp] multiplies the particle mesh's vertex colors. To have a visible effect on a [BaseMaterial3D], [member BaseMaterial3D.vertex_color_use_as_albedo]  *must*  be `true`. For a [ShaderMaterial], `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, [member color_initial_ramp] will have no visible effect.  
         */
        get colorInitialRamp(): null | GradientTexture1D
        set colorInitialRamp(value: null | GradientTexture1D)
        
        /** The alpha value of each particle's color will be multiplied by this [CurveTexture] over its lifetime.  
         *      
         *  **Note:** [member alpha_curve] multiplies the particle mesh's vertex colors. To have a visible effect on a [BaseMaterial3D], [member BaseMaterial3D.vertex_color_use_as_albedo]  *must*  be `true`. For a [ShaderMaterial], `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, [member alpha_curve] will have no visible effect.  
         */
        get alphaCurve(): null | CurveTexture
        set alphaCurve(value: null | CurveTexture)
        
        /** Each particle's color will be multiplied by this [CurveTexture] over its lifetime.  
         *      
         *  **Note:** [member emission_curve] multiplies the particle mesh's vertex colors. To have a visible effect on a [BaseMaterial3D], [member BaseMaterial3D.vertex_color_use_as_albedo]  *must*  be `true`. For a [ShaderMaterial], `ALBEDO *= COLOR.rgb;` must be inserted in the shader's `fragment()` function. Otherwise, [member emission_curve] will have no visible effect.  
         */
        get emissionCurve(): null | CurveTexture
        set emissionCurve(value: null | CurveTexture)
        get hueVariation(): Vector2
        set hueVariation(value: Vector2)
        
        /** Minimum equivalent of [member hue_variation_max]. */
        get hueVariationMin(): float64
        set hueVariationMin(value: float64)
        
        /** Maximum initial hue variation applied to each particle. It will shift the particle color's hue. */
        get hueVariationMax(): float64
        set hueVariationMax(value: float64)
        
        /** Each particle's hue will vary along this [CurveTexture]. */
        get hueVariationCurve(): null | CurveTexture
        set hueVariationCurve(value: null | CurveTexture)
        get animSpeed(): Vector2
        set animSpeed(value: Vector2)
        
        /** Minimum equivalent of [member anim_speed_max]. */
        get animSpeedMin(): float64
        set animSpeedMin(value: float64)
        
        /** Maximum particle animation speed. Animation speed of `1` means that the particles will make full `0` to `1` offset cycle during lifetime, `2` means `2` cycles etc.  
         *  With animation speed greater than `1`, remember to enable [member CanvasItemMaterial.particles_anim_loop] property if you want the animation to repeat.  
         */
        get animSpeedMax(): float64
        set animSpeedMax(value: float64)
        
        /** Each particle's animation speed will vary along this [CurveTexture]. */
        get animSpeedCurve(): null | CurveTexture
        set animSpeedCurve(value: null | CurveTexture)
        get animOffset(): Vector2
        set animOffset(value: Vector2)
        
        /** Minimum equivalent of [member anim_offset_max]. */
        get animOffsetMin(): float64
        set animOffsetMin(value: float64)
        
        /** Maximum animation offset that corresponds to frame index in the texture. `0` is the first frame, `1` is the last one. See [member CanvasItemMaterial.particles_animation]. */
        get animOffsetMax(): float64
        set animOffsetMax(value: float64)
        
        /** Each particle's animation offset will vary along this [CurveTexture]. */
        get animOffsetCurve(): null | CurveTexture
        set animOffsetCurve(value: null | CurveTexture)
        
        /** If `true`, enables turbulence for the particle system. Turbulence can be used to vary particle movement according to its position (based on a 3D noise pattern). In 3D, [GPUParticlesAttractorVectorField3D] with [NoiseTexture3D] can be used as an alternative to turbulence that works in world space and with multiple particle systems reacting in the same way.  
         *      
         *  **Note:** Enabling turbulence has a high performance cost on the GPU. Only enable turbulence on a few particle systems at once at most, and consider disabling it when targeting mobile/web platforms.  
         */
        get turbulenceEnabled(): boolean
        set turbulenceEnabled(value: boolean)
        
        /** The turbulence noise strength. Increasing this will result in a stronger, more contrasting, flow pattern. */
        get turbulenceNoiseStrength(): float64
        set turbulenceNoiseStrength(value: float64)
        
        /** This value controls the overall scale/frequency of the turbulence noise pattern.  
         *  A small scale will result in smaller features with more detail while a high scale will result in smoother noise with larger features.  
         */
        get turbulenceNoiseScale(): float64
        set turbulenceNoiseScale(value: float64)
        
        /** A scrolling velocity for the turbulence field. This sets a directional trend for the pattern to move in over time.  
         *  The default value of `Vector3(0, 0, 0)` turns off the scrolling.  
         */
        get turbulenceNoiseSpeed(): Vector3
        set turbulenceNoiseSpeed(value: Vector3)
        
        /** The in-place rate of change of the turbulence field. This defines how quickly the noise pattern varies over time.  
         *  A value of 0.0 will result in a fixed pattern.  
         */
        get turbulenceNoiseSpeedRandom(): float64
        set turbulenceNoiseSpeedRandom(value: float64)
        get turbulenceInfluence(): Vector2
        set turbulenceInfluence(value: Vector2)
        
        /** Minimum turbulence influence on each particle.  
         *  The actual amount of turbulence influence on each particle is calculated as a random value between [member turbulence_influence_min] and [member turbulence_influence_max] and multiplied by the amount of turbulence influence from [member turbulence_influence_over_life].  
         */
        get turbulenceInfluenceMin(): float64
        set turbulenceInfluenceMin(value: float64)
        
        /** Maximum turbulence influence on each particle.  
         *  The actual amount of turbulence influence on each particle is calculated as a random value between [member turbulence_influence_min] and [member turbulence_influence_max] and multiplied by the amount of turbulence influence from [member turbulence_influence_over_life].  
         */
        get turbulenceInfluenceMax(): float64
        set turbulenceInfluenceMax(value: float64)
        get turbulenceInitialDisplacement(): Vector2
        set turbulenceInitialDisplacement(value: Vector2)
        
        /** Minimum displacement of each particle's spawn position by the turbulence.  
         *  The actual amount of displacement will be a factor of the underlying turbulence multiplied by a random value between [member turbulence_initial_displacement_min] and [member turbulence_initial_displacement_max].  
         */
        get turbulenceInitialDisplacementMin(): float64
        set turbulenceInitialDisplacementMin(value: float64)
        
        /** Maximum displacement of each particle's spawn position by the turbulence.  
         *  The actual amount of displacement will be a factor of the underlying turbulence multiplied by a random value between [member turbulence_initial_displacement_min] and [member turbulence_initial_displacement_max].  
         */
        get turbulenceInitialDisplacementMax(): float64
        set turbulenceInitialDisplacementMax(value: float64)
        
        /** Each particle's amount of turbulence will be influenced along this [CurveTexture] over its life time. */
        get turbulenceInfluenceOverLife(): null | CurveTexture
        set turbulenceInfluenceOverLife(value: null | CurveTexture)
        
        /** The particles' collision mode.  
         *      
         *  **Note:** 3D Particles can only collide with [GPUParticlesCollision3D] nodes, not [PhysicsBody3D] nodes. To make particles collide with various objects, you can add [GPUParticlesCollision3D] nodes as children of [PhysicsBody3D] nodes. In 3D, collisions only occur within the area defined by the [GPUParticles3D] node's [member GPUParticles3D.visibility_aabb].  
         *      
         *  **Note:** 2D Particles can only collide with [LightOccluder2D] nodes, not [PhysicsBody2D] nodes.  
         */
        get collisionMode(): int64
        set collisionMode(value: int64)
        
        /** The particles' friction. Values range from `0` (frictionless) to `1` (maximum friction). Only effective if [member collision_mode] is [constant COLLISION_RIGID]. */
        get collisionFriction(): float64
        set collisionFriction(value: float64)
        
        /** The particles' bounciness. Values range from `0` (no bounce) to `1` (full bounciness). Only effective if [member collision_mode] is [constant COLLISION_RIGID]. */
        get collisionBounce(): float64
        set collisionBounce(value: float64)
        
        /** If `true`, [member GPUParticles3D.collision_base_size] is multiplied by the particle's effective scale (see [member scale_min], [member scale_max], [member scale_curve], and [member scale_over_velocity_curve]). */
        get collisionUseScale(): boolean
        set collisionUseScale(value: boolean)
        
        /** The particle subemitter mode (see [member GPUParticles2D.sub_emitter] and [member GPUParticles3D.sub_emitter]). */
        get subEmitterMode(): int64
        set subEmitterMode(value: int64)
        
        /** The frequency at which particles should be emitted from the subemitter node. One particle will be spawned every [member sub_emitter_frequency] seconds.  
         *      
         *  **Note:** This value shouldn't exceed [member GPUParticles2D.amount] or [member GPUParticles3D.amount] defined on the  *subemitter node*  (not the main node), relative to the subemitter's particle lifetime. If the number of particles is exceeded, no new particles will spawn from the subemitter until enough particles have expired.  
         */
        get subEmitterFrequency(): float64
        set subEmitterFrequency(value: float64)
        
        /** The amount of particles to spawn from the subemitter node when the particle expires.  
         *      
         *  **Note:** This value shouldn't exceed [member GPUParticles2D.amount] or [member GPUParticles3D.amount] defined on the  *subemitter node*  (not the main node), relative to the subemitter's particle lifetime. If the number of particles is exceeded, no new particles will spawn from the subemitter until enough particles have expired.  
         */
        get subEmitterAmountAtEnd(): int64
        set subEmitterAmountAtEnd(value: int64)
        
        /** The amount of particles to spawn from the subemitter node when a collision occurs. When combined with [constant COLLISION_HIDE_ON_CONTACT] on the main particles material, this can be used to achieve effects such as raindrops hitting the ground.  
         *      
         *  **Note:** This value shouldn't exceed [member GPUParticles2D.amount] or [member GPUParticles3D.amount] defined on the  *subemitter node*  (not the main node), relative to the subemitter's particle lifetime. If the number of particles is exceeded, no new particles will spawn from the subemitter until enough particles have expired.  
         */
        get subEmitterAmountAtCollision(): int64
        set subEmitterAmountAtCollision(value: int64)
        
        /** The amount of particles to spawn from the subemitter node when the particle spawns.  
         *      
         *  **Note:** This value shouldn't exceed [member GPUParticles2D.amount] or [member GPUParticles3D.amount] defined on the  *subemitter node*  (not the main node), relative to the subemitter's particle lifetime. If the number of particles is exceeded, no new particles will spawn from the subemitter until enough particles have expired.  
         */
        get subEmitterAmountAtStart(): int64
        set subEmitterAmountAtStart(value: int64)
        
        /** If `true`, the subemitter inherits the parent particle's velocity when it spawns. */
        get subEmitterKeepVelocity(): boolean
        set subEmitterKeepVelocity(value: boolean)
        
        /** Emitted when this material's emission shape is changed in any way. This includes changes to [member emission_shape], [member emission_shape_scale], or [member emission_sphere_radius], and any other property that affects the emission shape's offset, size, scale, or orientation.  
         *      
         *  **Note:** This signal is only emitted inside the editor for performance reasons.  
         */
        readonly emissionShapeChanged: Signal<() => void>
    }
    /** Contains a [Curve2D] path for [PathFollow2D] nodes to follow.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_path2d.html  
     */
    class Path2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** A [Curve2D] describing the path. */
        get curve(): null | Curve2D
        set curve(value: null | Curve2D)
    }
    /** Contains a [Curve3D] path for [PathFollow3D] nodes to follow.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_path3d.html  
     */
    class Path3D<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        /** A [Curve3D] describing the path. */
        get curve(): null | Curve3D
        set curve(value: null | Curve3D)
        
        /** The custom color to use to draw the shape in the editor.  
         *  If set to `Color(0.0, 0.0, 0.0)` (by default), the color set in EditorSettings is used.  
         */
        get debugCustomColor(): Color
        set debugCustomColor(value: Color)
        
        /** Emitted when the [member curve] changes. */
        readonly curveChanged: Signal<() => void>
        
        /** Emitted when the [member debug_custom_color] changes. */
        readonly debugColorChanged: Signal<() => void>
    }
    /** Point sampler for a [Path2D].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_pathfollow2d.html  
     */
    class PathFollow2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** The distance along the path, in pixels. Changing this value sets this node's position to a point within the path. */
        get progress(): float64
        set progress(value: float64)
        
        /** The distance along the path as a number in the range 0.0 (for the first vertex) to 1.0 (for the last). This is just another way of expressing the progress within the path, as the offset supplied is multiplied internally by the path's length.  
         *  It can be set or get only if the [PathFollow2D] is the child of a [Path2D] which is part of the scene tree, and that this [Path2D] has a [Curve2D] with a non-zero length. Otherwise, trying to set this field will print an error, and getting this field will return `0.0`.  
         */
        get progressRatio(): float64
        set progressRatio(value: float64)
        
        /** The node's offset along the curve. */
        get hOffset(): float64
        set hOffset(value: float64)
        
        /** The node's offset perpendicular to the curve. */
        get vOffset(): float64
        set vOffset(value: float64)
        
        /** If `true`, this node rotates to follow the path, with the +X direction facing forward on the path. */
        get rotates(): boolean
        set rotates(value: boolean)
        
        /** If `true`, the position between two cached points is interpolated cubically, and linearly otherwise.  
         *  The points along the [Curve2D] of the [Path2D] are precomputed before use, for faster calculations. The point at the requested offset is then calculated interpolating between two adjacent cached points. This may present a problem if the curve makes sharp turns, as the cached points may not follow the curve closely enough.  
         *  There are two answers to this problem: either increase the number of cached points and increase memory consumption, or make a cubic interpolation between two points at the cost of (slightly) slower calculations.  
         */
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
    class PathFollow3D<Map extends NodePathMap = any> extends Node3D<Map> {
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
        
        /** Correct the [param transform]. [param rotation_mode] implicitly specifies how posture (forward, up and sideway direction) is calculated. */
        static correctPosture(transform: Transform3D, rotationMode: PathFollow3D.RotationMode): Transform3D
        
        /** The distance from the first vertex, measured in 3D units along the path. Changing this value sets this node's position to a point within the path. */
        get progress(): float64
        set progress(value: float64)
        
        /** The distance from the first vertex, considering 0.0 as the first vertex and 1.0 as the last. This is just another way of expressing the progress within the path, as the progress supplied is multiplied internally by the path's length.  
         *  It can be set or get only if the [PathFollow3D] is the child of a [Path3D] which is part of the scene tree, and that this [Path3D] has a [Curve3D] with a non-zero length. Otherwise, trying to set this field will print an error, and getting this field will return `0.0`.  
         */
        get progressRatio(): float64
        set progressRatio(value: float64)
        
        /** The node's offset along the curve. */
        get hOffset(): float64
        set hOffset(value: float64)
        
        /** The node's offset perpendicular to the curve. */
        get vOffset(): float64
        set vOffset(value: float64)
        
        /** Allows or forbids rotation on one or more axes, depending on the [enum RotationMode] constants being used. */
        get rotationMode(): int64
        set rotationMode(value: int64)
        
        /** If `true`, the node moves on the travel path with orienting the +Z axis as forward. See also [constant Vector3.FORWARD] and [constant Vector3.MODEL_FRONT]. */
        get useModelFront(): boolean
        set useModelFront(value: boolean)
        
        /** If `true`, the position between two cached points is interpolated cubically, and linearly otherwise.  
         *  The points along the [Curve3D] of the [Path3D] are precomputed before use, for faster calculations. The point at the requested offset is then calculated interpolating between two adjacent cached points. This may present a problem if the curve makes sharp turns, as the cached points may not follow the curve closely enough.  
         *  There are two answers to this problem: either increase the number of cached points and increase memory consumption, or make a cubic interpolation between two points at the cost of (slightly) slower calculations.  
         */
        get cubicInterp(): boolean
        set cubicInterp(value: boolean)
        
        /** If `true`, any offset outside the path's length will wrap around, instead of stopping at the ends. Use it for cyclic paths. */
        get loop(): boolean
        set loop(value: boolean)
        
        /** If `true`, the tilt property of [Curve3D] takes effect. */
        get tiltEnabled(): boolean
        set tiltEnabled(value: boolean)
    }
    /** A [RigidBody2D]-derived node used to make [Bone2D]s in a [Skeleton2D] react to physics.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicalbone2d.html  
     */
    class PhysicalBone2D<Map extends NodePathMap = any> extends RigidBody2D<Map> {
        constructor(identifier?: any)
        /** Returns the first [Joint2D] child node, if one exists. This is mainly a helper function to make it easier to get the [Joint2D] that the [PhysicalBone2D] is autoconfiguring. */
        getJoint(): null | Joint2D
        
        /** Returns a boolean that indicates whether the [PhysicalBone2D] is running and simulating using the Godot 2D physics engine. When `true`, the PhysicalBone2D node is using physics. */
        isSimulatingPhysics(): boolean
        
        /** The [NodePath] to the [Bone2D] that this [PhysicalBone2D] should simulate. */
        get bone2DNodePath(): NodePath
        set bone2DNodePath(value: NodePath | string)
        
        /** The index of the [Bone2D] that this [PhysicalBone2D] should simulate. */
        get bone2DIndex(): int64
        set bone2DIndex(value: int64)
        
        /** If `true`, the [PhysicalBone2D] will automatically configure the first [Joint2D] child node. The automatic configuration is limited to setting up the node properties and positioning the [Joint2D]. */
        get autoConfigureJoint(): boolean
        set autoConfigureJoint(value: boolean)
        
        /** If `true`, the [PhysicalBone2D] will start simulating using physics. If `false`, the [PhysicalBone2D] will follow the transform of the [Bone2D] node.  
         *      
         *  **Note:** To have the [Bone2D]s visually follow the [PhysicalBone2D], use a [SkeletonModification2DPhysicalBones] modification on the [Skeleton2D] node with the [Bone2D] nodes.  
         */
        get simulatePhysics(): boolean
        set simulatePhysics(value: boolean)
        
        /** If `true`, the [PhysicalBone2D] will keep the transform of the bone it is bound to when simulating physics. */
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
    class PhysicalBone3D<Map extends NodePathMap = any> extends PhysicsBody3D<Map> {
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
        
        /** Called during physics processing, allowing you to read and safely modify the simulation state for the object. By default, it is called before the standard force integration, but the [member custom_integrator] property allows you to disable the standard force integration and do fully custom force integration for a body. */
        /* gdvirtual */ _integrateForces(state: PhysicsDirectBodyState3D): void
        
        /** Applies a directional impulse without affecting rotation.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_integrate_forces" functions otherwise).  
         *  This is equivalent to using [method apply_impulse] at the body's center of mass.  
         */
        applyCentralImpulse(impulse: Vector3): void
        
        /** Applies a positioned impulse to the PhysicsBone3D.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_integrate_forces" functions otherwise).  
         *  [param position] is the offset from the PhysicsBone3D origin in global coordinates.  
         */
        applyImpulse(impulse: Vector3, position?: Vector3 /* = new Vector3(0, 0, 0) */): void
        
        /** Returns `true` if the PhysicsBone3D is allowed to simulate physics. */
        getSimulatePhysics(): boolean
        
        /** Returns `true` if the PhysicsBone3D is currently simulating physics. */
        isSimulatingPhysics(): boolean
        
        /** Returns the unique identifier of the PhysicsBone3D. */
        getBoneId(): int64
        
        /** Sets the joint type. See [enum JointType] for possible values. */
        get jointType(): int64
        set jointType(value: int64)
        
        /** Sets the joint's transform. */
        get jointOffset(): Transform3D
        set jointOffset(value: Transform3D)
        
        /** Sets the joint's rotation in radians. */
        get jointRotation(): Vector3
        set jointRotation(value: Vector3)
        
        /** Sets the body's transform. */
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
        
        /** This is multiplied by [member ProjectSettings.physics/3d/default_gravity] to produce this body's gravity. For example, a value of `1.0` will apply normal gravity, `2.0` will apply double the gravity, and `0.5` will apply half the gravity to this body. */
        get gravityScale(): float64
        set gravityScale(value: float64)
        
        /** If `true`, the standard force integration (like gravity or damping) will be disabled for this body. Other than collision response, the body will only move as determined by the [method _integrate_forces] method, if that virtual method is overridden.  
         *  Setting this property will call the method [method PhysicsServer3D.body_set_omit_force_integration] internally.  
         */
        get customIntegrator(): boolean
        set customIntegrator(value: boolean)
        
        /** Defines how [member linear_damp] is applied. See [enum DampMode] for possible values. */
        get linearDampMode(): int64
        set linearDampMode(value: int64)
        
        /** Damps the body's movement. By default, the body will use [member ProjectSettings.physics/3d/default_linear_damp] or any value override set by an [Area3D] the body is in. Depending on [member linear_damp_mode], [member linear_damp] may be added to or replace the body's damping value.  
         *  See [member ProjectSettings.physics/3d/default_linear_damp] for more details about damping.  
         */
        get linearDamp(): float64
        set linearDamp(value: float64)
        
        /** Defines how [member angular_damp] is applied. See [enum DampMode] for possible values. */
        get angularDampMode(): int64
        set angularDampMode(value: int64)
        
        /** Damps the body's rotation. By default, the body will use the [member ProjectSettings.physics/3d/default_angular_damp] project setting or any value override set by an [Area3D] the body is in. Depending on [member angular_damp_mode], you can set [member angular_damp] to be added to or to replace the body's damping value.  
         *  See [member ProjectSettings.physics/3d/default_angular_damp] for more details about damping.  
         */
        get angularDamp(): float64
        set angularDamp(value: float64)
        
        /** The body's linear velocity in units per second. Can be used sporadically, but **don't set this every frame**, because physics may run in another thread and runs at a different granularity. Use [method _integrate_forces] as your process loop for precise control of the body state. */
        get linearVelocity(): Vector3
        set linearVelocity(value: Vector3)
        
        /** The PhysicalBone3D's rotational velocity in  *radians*  per second. */
        get angularVelocity(): Vector3
        set angularVelocity(value: Vector3)
        
        /** If `true`, the body is deactivated when there is no movement, so it will not take part in the simulation until it is awakened by an external force. */
        get canSleep(): boolean
        set canSleep(value: boolean)
    }
    /** Node that can be the parent of [PhysicalBone3D] and can apply the simulation results to [Skeleton3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicalbonesimulator3d.html  
     */
    class PhysicalBoneSimulator3D<Map extends NodePathMap = any> extends SkeletonModifier3D<Map> {
        constructor(identifier?: any)
        /** Returns a boolean that indicates whether the [PhysicalBoneSimulator3D] is running and simulating. */
        isSimulatingPhysics(): boolean
        
        /** Tells the [PhysicalBone3D] nodes in the Skeleton to stop simulating. */
        physicalBonesStopSimulation(): void
        
        /** Tells the [PhysicalBone3D] nodes in the Skeleton to start simulating and reacting to the physics world.  
         *  Optionally, a list of bone names can be passed-in, allowing only the passed-in bones to be simulated.  
         */
        physicalBonesStartSimulation(bones?: GArray /* = [] */): void
        
        /** Adds a collision exception to the physical bone.  
         *  Works just like the [RigidBody3D] node.  
         */
        physicalBonesAddCollisionException(exception: Rid): void
        
        /** Removes a collision exception to the physical bone.  
         *  Works just like the [RigidBody3D] node.  
         */
        physicalBonesRemoveCollisionException(exception: Rid): void
    }
    /** A material that defines a sky for a [Sky] resource by a set of physical properties.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicalskymaterial.html  
     */
    class PhysicalSkyMaterial extends Material {
        constructor(identifier?: any)
        /** Controls the strength of the [url=https://en.wikipedia.org/wiki/Rayleigh_scattering]Rayleigh scattering[/url]. Rayleigh scattering results from light colliding with small particles. It is responsible for the blue color of the sky. */
        get rayleighCoefficient(): float64
        set rayleighCoefficient(value: float64)
        
        /** Controls the [Color] of the [url=https://en.wikipedia.org/wiki/Rayleigh_scattering]Rayleigh scattering[/url]. While not physically accurate, this allows for the creation of alien-looking planets. For example, setting this to a red [Color] results in a Mars-looking atmosphere with a corresponding blue sunset. */
        get rayleighColor(): Color
        set rayleighColor(value: Color)
        
        /** Controls the strength of [url=https://en.wikipedia.org/wiki/Mie_scattering]Mie scattering[/url] for the sky. Mie scattering results from light colliding with larger particles (like water). On earth, Mie scattering results in a whitish color around the sun and horizon. */
        get mieCoefficient(): float64
        set mieCoefficient(value: float64)
        
        /** Controls the direction of the [url=https://en.wikipedia.org/wiki/Mie_scattering]Mie scattering[/url]. A value of `1` means that when light hits a particle it's passing through straight forward. A value of `-1` means that all light is scatter backwards. */
        get mieEccentricity(): float64
        set mieEccentricity(value: float64)
        
        /** Controls the [Color] of the [url=https://en.wikipedia.org/wiki/Mie_scattering]Mie scattering[/url] effect. While not physically accurate, this allows for the creation of alien-looking planets. */
        get mieColor(): Color
        set mieColor(value: Color)
        
        /** Sets the thickness of the atmosphere. High turbidity creates a foggy-looking atmosphere, while a low turbidity results in a clearer atmosphere. */
        get turbidity(): float64
        set turbidity(value: float64)
        
        /** Sets the size of the sun disk. Default value is based on Sol's perceived size from Earth. */
        get sunDiskScale(): float64
        set sunDiskScale(value: float64)
        
        /** Modulates the [Color] on the bottom half of the sky to represent the ground. */
        get groundColor(): Color
        set groundColor(value: Color)
        
        /** The sky's overall brightness multiplier. Higher values result in a brighter sky. */
        get energyMultiplier(): float64
        set energyMultiplier(value: float64)
        
        /** If `true`, enables debanding. Debanding adds a small amount of noise which helps reduce banding that appears from the smooth changes in color in the sky. */
        get useDebanding(): boolean
        set useDebanding(value: boolean)
        
        /** [Texture2D] for the night sky. This is added to the sky, so if it is bright enough, it may be visible during the day. */
        get nightSky(): null | Texture2D
        set nightSky(value: null | Texture2D)
    }
    /** Abstract base class for 2D game objects affected by physics.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicsbody2d.html  
     */
    class PhysicsBody2D<Map extends NodePathMap = any> extends CollisionObject2D<Map> {
        constructor(identifier?: any)
        /** Moves the body along the vector [param motion]. In order to be frame rate independent in [method Node._physics_process] or [method Node._process], [param motion] should be computed using `delta`.  
         *  Returns a [KinematicCollision2D], which contains information about the collision when stopped, or when touching another body along the motion.  
         *  If [param test_only] is `true`, the body does not move but the would-be collision information is given.  
         *  [param safe_margin] is the extra margin used for collision recovery (see [member CharacterBody2D.safe_margin] for more details).  
         *  If [param recovery_as_collision] is `true`, any depenetration from the recovery phase is also reported as a collision; this is used e.g. by [CharacterBody2D] for improving floor detection during floor snapping.  
         */
        moveAndCollide(motion: Vector2, testOnly?: boolean /* = false */, safeMargin?: float64 /* = 0.08 */, recoveryAsCollision?: boolean /* = false */): null | KinematicCollision2D
        
        /** Checks for collisions without moving the body. In order to be frame rate independent in [method Node._physics_process] or [method Node._process], [param motion] should be computed using `delta`.  
         *  Virtually sets the node's position, scale and rotation to that of the given [Transform2D], then tries to move the body along the vector [param motion]. Returns `true` if a collision would stop the body from moving along the whole path.  
         *  [param collision] is an optional object of type [KinematicCollision2D], which contains additional information about the collision when stopped, or when touching another body along the motion.  
         *  [param safe_margin] is the extra margin used for collision recovery (see [member CharacterBody2D.safe_margin] for more details).  
         *  If [param recovery_as_collision] is `true`, any depenetration from the recovery phase is also reported as a collision; this is useful for checking whether the body would  *touch*  any other bodies.  
         */
        testMove(from: Transform2D, motion: Vector2, collision?: KinematicCollision2D /* = undefined */, safeMargin?: float64 /* = 0.08 */, recoveryAsCollision?: boolean /* = false */): boolean
        
        /** Returns the gravity vector computed from all sources that can affect the body, including all gravity overrides from [Area2D] nodes and the global world gravity. */
        getGravity(): Vector2
        
        /** Returns an array of nodes that were added as collision exceptions for this body. */
        getCollisionExceptions(): GArray
        
        /** Adds a body to the list of bodies that this body can't collide with. */
        addCollisionExceptionWith(body: Node): void
        
        /** Removes a body from the list of bodies that this body can't collide with. */
        removeCollisionExceptionWith(body: Node): void
    }
    /** Abstract base class for 3D game objects affected by physics.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicsbody3d.html  
     */
    class PhysicsBody3D<Map extends NodePathMap = any> extends CollisionObject3D<Map> {
        constructor(identifier?: any)
        /** Moves the body along the vector [param motion]. In order to be frame rate independent in [method Node._physics_process] or [method Node._process], [param motion] should be computed using `delta`.  
         *  The body will stop if it collides. Returns a [KinematicCollision3D], which contains information about the collision when stopped, or when touching another body along the motion.  
         *  If [param test_only] is `true`, the body does not move but the would-be collision information is given.  
         *  [param safe_margin] is the extra margin used for collision recovery (see [member CharacterBody3D.safe_margin] for more details).  
         *  If [param recovery_as_collision] is `true`, any depenetration from the recovery phase is also reported as a collision; this is used e.g. by [CharacterBody3D] for improving floor detection during floor snapping.  
         *  [param max_collisions] allows to retrieve more than one collision result.  
         */
        moveAndCollide(motion: Vector3, testOnly?: boolean /* = false */, safeMargin?: float64 /* = 0.001 */, recoveryAsCollision?: boolean /* = false */, maxCollisions?: int64 /* = 1 */): null | KinematicCollision3D
        
        /** Checks for collisions without moving the body. In order to be frame rate independent in [method Node._physics_process] or [method Node._process], [param motion] should be computed using `delta`.  
         *  Virtually sets the node's position, scale and rotation to that of the given [Transform3D], then tries to move the body along the vector [param motion]. Returns `true` if a collision would stop the body from moving along the whole path.  
         *  [param collision] is an optional object of type [KinematicCollision3D], which contains additional information about the collision when stopped, or when touching another body along the motion.  
         *  [param safe_margin] is the extra margin used for collision recovery (see [member CharacterBody3D.safe_margin] for more details).  
         *  If [param recovery_as_collision] is `true`, any depenetration from the recovery phase is also reported as a collision; this is useful for checking whether the body would  *touch*  any other bodies.  
         *  [param max_collisions] allows to retrieve more than one collision result.  
         */
        testMove(from: Transform3D, motion: Vector3, collision?: KinematicCollision3D /* = undefined */, safeMargin?: float64 /* = 0.001 */, recoveryAsCollision?: boolean /* = false */, maxCollisions?: int64 /* = 1 */): boolean
        
        /** Returns the gravity vector computed from all sources that can affect the body, including all gravity overrides from [Area3D] nodes and the global world gravity. */
        getGravity(): Vector3
        
        /** Locks or unlocks the specified linear or rotational [param axis] depending on the value of [param lock]. */
        setAxisLock(axis: PhysicsServer3D.BodyAxis, lock: boolean): void
        
        /** Returns `true` if the specified linear or rotational [param axis] is locked. */
        getAxisLock(axis: PhysicsServer3D.BodyAxis): boolean
        
        /** Returns an array of nodes that were added as collision exceptions for this body. */
        getCollisionExceptions(): GArray
        
        /** Adds a body to the list of bodies that this body can't collide with. */
        addCollisionExceptionWith(body: Node): void
        
        /** Removes a body from the list of bodies that this body can't collide with. */
        removeCollisionExceptionWith(body: Node): void
        
        /** Lock the body's linear movement in the X axis. */
        get axisLockLinearX(): boolean
        set axisLockLinearX(value: boolean)
        
        /** Lock the body's linear movement in the Y axis. */
        get axisLockLinearY(): boolean
        set axisLockLinearY(value: boolean)
        
        /** Lock the body's linear movement in the Z axis. */
        get axisLockLinearZ(): boolean
        set axisLockLinearZ(value: boolean)
        
        /** Lock the body's rotation in the X axis. */
        get axisLockAngularX(): boolean
        set axisLockAngularX(value: boolean)
        
        /** Lock the body's rotation in the Y axis. */
        get axisLockAngularY(): boolean
        set axisLockAngularY(value: boolean)
        
        /** Lock the body's rotation in the Z axis. */
        get axisLockAngularZ(): boolean
        set axisLockAngularZ(value: boolean)
    }
    /** Provides direct access to a physics body in the [PhysicsServer2D].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicsdirectbodystate2d.html  
     */
    class PhysicsDirectBodyState2D extends GObject {
        constructor(identifier?: any)
        /** Returns the body's velocity at the given relative position, including both translation and rotation. */
        getVelocityAtLocalPosition(localPosition: Vector2): Vector2
        
        /** Applies a directional impulse without affecting rotation.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         *  This is equivalent to using [method apply_impulse] at the body's center of mass.  
         */
        applyCentralImpulse(impulse: Vector2): void
        
        /** Applies a rotational impulse to the body without affecting the position.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         *      
         *  **Note:** [member inverse_inertia] is required for this to work. To have [member inverse_inertia], an active [CollisionShape2D] must be a child of the node, or you can manually set [member inverse_inertia].  
         */
        applyTorqueImpulse(impulse: float64): void
        
        /** Applies a positioned impulse to the body.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        applyImpulse(impulse: Vector2, position?: Vector2 /* = Vector2.ZERO */): void
        
        /** Applies a directional force without affecting rotation. A force is time dependent and meant to be applied every physics update.  
         *  This is equivalent to using [method apply_force] at the body's center of mass.  
         */
        applyCentralForce(force?: Vector2 /* = Vector2.ZERO */): void
        
        /** Applies a positioned force to the body. A force is time dependent and meant to be applied every physics update.  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        applyForce(force: Vector2, position?: Vector2 /* = Vector2.ZERO */): void
        
        /** Applies a rotational force without affecting position. A force is time dependent and meant to be applied every physics update.  
         *      
         *  **Note:** [member inverse_inertia] is required for this to work. To have [member inverse_inertia], an active [CollisionShape2D] must be a child of the node, or you can manually set [member inverse_inertia].  
         */
        applyTorque(torque: float64): void
        
        /** Adds a constant directional force without affecting rotation that keeps being applied over time until cleared with `constant_force = Vector2(0, 0)`.  
         *  This is equivalent to using [method add_constant_force] at the body's center of mass.  
         */
        addConstantCentralForce(force?: Vector2 /* = Vector2.ZERO */): void
        
        /** Adds a constant positioned force to the body that keeps being applied over time until cleared with `constant_force = Vector2(0, 0)`.  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        addConstantForce(force: Vector2, position?: Vector2 /* = Vector2.ZERO */): void
        
        /** Adds a constant rotational force without affecting position that keeps being applied over time until cleared with `constant_torque = 0`. */
        addConstantTorque(torque: float64): void
        
        /** Sets the body's total constant positional forces applied during each physics update.  
         *  See [method add_constant_force] and [method add_constant_central_force].  
         */
        setConstantForce(force: Vector2): void
        
        /** Returns the body's total constant positional forces applied during each physics update.  
         *  See [method add_constant_force] and [method add_constant_central_force].  
         */
        getConstantForce(): Vector2
        
        /** Sets the body's total constant rotational forces applied during each physics update.  
         *  See [method add_constant_torque].  
         */
        setConstantTorque(torque: float64): void
        
        /** Returns the body's total constant rotational forces applied during each physics update.  
         *  See [method add_constant_torque].  
         */
        getConstantTorque(): float64
        
        /** Returns the number of contacts this body has with other bodies.  
         *      
         *  **Note:** By default, this returns 0 unless bodies are configured to monitor contacts. See [member RigidBody2D.contact_monitor].  
         */
        getContactCount(): int64
        
        /** Returns the position of the contact point on the body in the global coordinate system. */
        getContactLocalPosition(contactIdx: int64): Vector2
        
        /** Returns the local normal at the contact point. */
        getContactLocalNormal(contactIdx: int64): Vector2
        
        /** Returns the local shape index of the collision. */
        getContactLocalShape(contactIdx: int64): int64
        
        /** Returns the velocity vector at the body's contact point. */
        getContactLocalVelocityAtPosition(contactIdx: int64): Vector2
        
        /** Returns the collider's [RID]. */
        getContactCollider(contactIdx: int64): Rid
        
        /** Returns the position of the contact point on the collider in the global coordinate system. */
        getContactColliderPosition(contactIdx: int64): Vector2
        
        /** Returns the collider's object id. */
        getContactColliderId(contactIdx: int64): int64
        
        /** Returns the collider object. This depends on how it was created (will return a scene node if such was used to create it). */
        getContactColliderObject(contactIdx: int64): null | GObject
        
        /** Returns the collider's shape index. */
        getContactColliderShape(contactIdx: int64): int64
        
        /** Returns the velocity vector at the collider's contact point. */
        getContactColliderVelocityAtPosition(contactIdx: int64): Vector2
        
        /** Returns the impulse created by the contact. */
        getContactImpulse(contactIdx: int64): Vector2
        
        /** Updates the body's linear and angular velocity by applying gravity and damping for the equivalent of one physics tick. */
        integrateForces(): void
        
        /** Returns the current state of the space, useful for queries. */
        getSpaceState(): null | PhysicsDirectSpaceState2D
        
        /** The timestep (delta) used for the simulation. */
        get step(): float64
        set step(value: float64)
        
        /** The inverse of the mass of the body. */
        get inverseMass(): float64
        set inverseMass(value: float64)
        
        /** The inverse of the inertia of the body. */
        get inverseInertia(): float64
        set inverseInertia(value: float64)
        
        /** The rate at which the body stops rotating, if there are not any other forces moving it. */
        get totalAngularDamp(): float64
        set totalAngularDamp(value: float64)
        
        /** The rate at which the body stops moving, if there are not any other forces moving it. */
        get totalLinearDamp(): float64
        set totalLinearDamp(value: float64)
        
        /** The total gravity vector being currently applied to this body. */
        get totalGravity(): Vector2
        set totalGravity(value: Vector2)
        
        /** The body's center of mass position relative to the body's center in the global coordinate system. */
        get centerOfMass(): Vector2
        set centerOfMass(value: Vector2)
        
        /** The body's center of mass position in the body's local coordinate system. */
        get centerOfMassLocal(): Vector2
        set centerOfMassLocal(value: Vector2)
        
        /** The body's rotational velocity in  *radians*  per second. */
        get angularVelocity(): float64
        set angularVelocity(value: float64)
        
        /** The body's linear velocity in pixels per second. */
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
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.total_gravity] and its respective getter. */
        /* gdvirtual */ _getTotalGravity(): Vector2
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.total_linear_damp] and its respective getter. */
        /* gdvirtual */ _getTotalLinearDamp(): float64
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.total_angular_damp] and its respective getter. */
        /* gdvirtual */ _getTotalAngularDamp(): float64
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.center_of_mass] and its respective getter. */
        /* gdvirtual */ _getCenterOfMass(): Vector2
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.center_of_mass_local] and its respective getter. */
        /* gdvirtual */ _getCenterOfMassLocal(): Vector2
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.inverse_mass] and its respective getter. */
        /* gdvirtual */ _getInverseMass(): float64
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.inverse_inertia] and its respective getter. */
        /* gdvirtual */ _getInverseInertia(): float64
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.linear_velocity] and its respective setter. */
        /* gdvirtual */ _setLinearVelocity(velocity: Vector2): void
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.linear_velocity] and its respective getter. */
        /* gdvirtual */ _getLinearVelocity(): Vector2
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.angular_velocity] and its respective setter. */
        /* gdvirtual */ _setAngularVelocity(velocity: float64): void
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.angular_velocity] and its respective getter. */
        /* gdvirtual */ _getAngularVelocity(): float64
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.transform] and its respective setter. */
        /* gdvirtual */ _setTransform(transform: Transform2D): void
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.transform] and its respective getter. */
        /* gdvirtual */ _getTransform(): Transform2D
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_velocity_at_local_position]. */
        /* gdvirtual */ _getVelocityAtLocalPosition(localPosition: Vector2): Vector2
        
        /** Overridable version of [method PhysicsDirectBodyState2D.apply_central_impulse]. */
        /* gdvirtual */ _applyCentralImpulse(impulse: Vector2): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.apply_impulse]. */
        /* gdvirtual */ _applyImpulse(impulse: Vector2, position: Vector2): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.apply_torque_impulse]. */
        /* gdvirtual */ _applyTorqueImpulse(impulse: float64): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.apply_central_force]. */
        /* gdvirtual */ _applyCentralForce(force: Vector2): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.apply_force]. */
        /* gdvirtual */ _applyForce(force: Vector2, position: Vector2): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.apply_torque]. */
        /* gdvirtual */ _applyTorque(torque: float64): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.add_constant_central_force]. */
        /* gdvirtual */ _addConstantCentralForce(force: Vector2): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.add_constant_force]. */
        /* gdvirtual */ _addConstantForce(force: Vector2, position: Vector2): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.add_constant_torque]. */
        /* gdvirtual */ _addConstantTorque(torque: float64): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.set_constant_force]. */
        /* gdvirtual */ _setConstantForce(force: Vector2): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_constant_force]. */
        /* gdvirtual */ _getConstantForce(): Vector2
        
        /** Overridable version of [method PhysicsDirectBodyState2D.set_constant_torque]. */
        /* gdvirtual */ _setConstantTorque(torque: float64): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_constant_torque]. */
        /* gdvirtual */ _getConstantTorque(): float64
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.sleeping] and its respective setter. */
        /* gdvirtual */ _setSleepState(enabled: boolean): void
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.sleeping] and its respective getter. */
        /* gdvirtual */ _isSleeping(): boolean
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_count]. */
        /* gdvirtual */ _getContactCount(): int64
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_local_position]. */
        /* gdvirtual */ _getContactLocalPosition(contactIdx: int64): Vector2
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_local_normal]. */
        /* gdvirtual */ _getContactLocalNormal(contactIdx: int64): Vector2
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_local_shape]. */
        /* gdvirtual */ _getContactLocalShape(contactIdx: int64): int64
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_local_velocity_at_position]. */
        /* gdvirtual */ _getContactLocalVelocityAtPosition(contactIdx: int64): Vector2
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_collider]. */
        /* gdvirtual */ _getContactCollider(contactIdx: int64): Rid
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_collider_position]. */
        /* gdvirtual */ _getContactColliderPosition(contactIdx: int64): Vector2
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_collider_id]. */
        /* gdvirtual */ _getContactColliderId(contactIdx: int64): int64
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_collider_object]. */
        /* gdvirtual */ _getContactColliderObject(contactIdx: int64): null | GObject
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_collider_shape]. */
        /* gdvirtual */ _getContactColliderShape(contactIdx: int64): int64
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_collider_velocity_at_position]. */
        /* gdvirtual */ _getContactColliderVelocityAtPosition(contactIdx: int64): Vector2
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_contact_impulse]. */
        /* gdvirtual */ _getContactImpulse(contactIdx: int64): Vector2
        
        /** Implement to override the behavior of [member PhysicsDirectBodyState2D.step] and its respective getter. */
        /* gdvirtual */ _getStep(): float64
        
        /** Overridable version of [method PhysicsDirectBodyState2D.integrate_forces]. */
        /* gdvirtual */ _integrateForces(): void
        
        /** Overridable version of [method PhysicsDirectBodyState2D.get_space_state]. */
        /* gdvirtual */ _getSpaceState(): null | PhysicsDirectSpaceState2D
    }
    /** Provides direct access to a physics body in the [PhysicsServer3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicsdirectbodystate3d.html  
     */
    class PhysicsDirectBodyState3D extends GObject {
        constructor(identifier?: any)
        /** Returns the body's velocity at the given relative position, including both translation and rotation. */
        getVelocityAtLocalPosition(localPosition: Vector3): Vector3
        
        /** Applies a directional impulse without affecting rotation.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         *  This is equivalent to using [method apply_impulse] at the body's center of mass.  
         */
        applyCentralImpulse(impulse?: Vector3 /* = new Vector3(0, 0, 0) */): void
        
        /** Applies a positioned impulse to the body.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        applyImpulse(impulse: Vector3, position?: Vector3 /* = new Vector3(0, 0, 0) */): void
        
        /** Applies a rotational impulse to the body without affecting the position.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         *      
         *  **Note:** [member inverse_inertia] is required for this to work. To have [member inverse_inertia], an active [CollisionShape3D] must be a child of the node, or you can manually set [member inverse_inertia].  
         */
        applyTorqueImpulse(impulse: Vector3): void
        
        /** Applies a directional force without affecting rotation. A force is time dependent and meant to be applied every physics update.  
         *  This is equivalent to using [method apply_force] at the body's center of mass.  
         */
        applyCentralForce(force?: Vector3 /* = new Vector3(0, 0, 0) */): void
        
        /** Applies a positioned force to the body. A force is time dependent and meant to be applied every physics update.  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        applyForce(force: Vector3, position?: Vector3 /* = new Vector3(0, 0, 0) */): void
        
        /** Applies a rotational force without affecting position. A force is time dependent and meant to be applied every physics update.  
         *      
         *  **Note:** [member inverse_inertia] is required for this to work. To have [member inverse_inertia], an active [CollisionShape3D] must be a child of the node, or you can manually set [member inverse_inertia].  
         */
        applyTorque(torque: Vector3): void
        
        /** Adds a constant directional force without affecting rotation that keeps being applied over time until cleared with `constant_force = Vector3(0, 0, 0)`.  
         *  This is equivalent to using [method add_constant_force] at the body's center of mass.  
         */
        addConstantCentralForce(force?: Vector3 /* = new Vector3(0, 0, 0) */): void
        
        /** Adds a constant positioned force to the body that keeps being applied over time until cleared with `constant_force = Vector3(0, 0, 0)`.  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        addConstantForce(force: Vector3, position?: Vector3 /* = new Vector3(0, 0, 0) */): void
        
        /** Adds a constant rotational force without affecting position that keeps being applied over time until cleared with `constant_torque = Vector3(0, 0, 0)`. */
        addConstantTorque(torque: Vector3): void
        
        /** Sets the body's total constant positional forces applied during each physics update.  
         *  See [method add_constant_force] and [method add_constant_central_force].  
         */
        setConstantForce(force: Vector3): void
        
        /** Returns the body's total constant positional forces applied during each physics update.  
         *  See [method add_constant_force] and [method add_constant_central_force].  
         */
        getConstantForce(): Vector3
        
        /** Sets the body's total constant rotational forces applied during each physics update.  
         *  See [method add_constant_torque].  
         */
        setConstantTorque(torque: Vector3): void
        
        /** Returns the body's total constant rotational forces applied during each physics update.  
         *  See [method add_constant_torque].  
         */
        getConstantTorque(): Vector3
        
        /** Returns the number of contacts this body has with other bodies.  
         *      
         *  **Note:** By default, this returns 0 unless bodies are configured to monitor contacts. See [member RigidBody3D.contact_monitor].  
         */
        getContactCount(): int64
        
        /** Returns the position of the contact point on the body in the global coordinate system. */
        getContactLocalPosition(contactIdx: int64): Vector3
        
        /** Returns the local normal at the contact point. */
        getContactLocalNormal(contactIdx: int64): Vector3
        
        /** Impulse created by the contact. */
        getContactImpulse(contactIdx: int64): Vector3
        
        /** Returns the local shape index of the collision. */
        getContactLocalShape(contactIdx: int64): int64
        
        /** Returns the linear velocity vector at the body's contact point. */
        getContactLocalVelocityAtPosition(contactIdx: int64): Vector3
        
        /** Returns the collider's [RID]. */
        getContactCollider(contactIdx: int64): Rid
        
        /** Returns the position of the contact point on the collider in the global coordinate system. */
        getContactColliderPosition(contactIdx: int64): Vector3
        
        /** Returns the collider's object id. */
        getContactColliderId(contactIdx: int64): int64
        
        /** Returns the collider object. */
        getContactColliderObject(contactIdx: int64): null | GObject
        
        /** Returns the collider's shape index. */
        getContactColliderShape(contactIdx: int64): int64
        
        /** Returns the linear velocity vector at the collider's contact point. */
        getContactColliderVelocityAtPosition(contactIdx: int64): Vector3
        
        /** Updates the body's linear and angular velocity by applying gravity and damping for the equivalent of one physics tick. */
        integrateForces(): void
        
        /** Returns the current state of the space, useful for queries. */
        getSpaceState(): null | PhysicsDirectSpaceState3D
        
        /** The timestep (delta) used for the simulation. */
        get step(): float64
        set step(value: float64)
        
        /** The inverse of the mass of the body. */
        get inverseMass(): float64
        set inverseMass(value: float64)
        
        /** The rate at which the body stops rotating, if there are not any other forces moving it. */
        get totalAngularDamp(): float64
        set totalAngularDamp(value: float64)
        
        /** The rate at which the body stops moving, if there are not any other forces moving it. */
        get totalLinearDamp(): float64
        set totalLinearDamp(value: float64)
        
        /** The inverse of the inertia of the body. */
        get inverseInertia(): Vector3
        set inverseInertia(value: Vector3)
        
        /** The inverse of the inertia tensor of the body. */
        get inverseInertiaTensor(): Basis
        set inverseInertiaTensor(value: Basis)
        
        /** The total gravity vector being currently applied to this body. */
        get totalGravity(): Vector3
        set totalGravity(value: Vector3)
        
        /** The body's center of mass position relative to the body's center in the global coordinate system. */
        get centerOfMass(): Vector3
        set centerOfMass(value: Vector3)
        
        /** The body's center of mass position in the body's local coordinate system. */
        get centerOfMassLocal(): Vector3
        set centerOfMassLocal(value: Vector3)
        get principalInertiaAxes(): Basis
        set principalInertiaAxes(value: Basis)
        
        /** The body's rotational velocity in  *radians*  per second. */
        get angularVelocity(): Vector3
        set angularVelocity(value: Vector3)
        
        /** The body's linear velocity in units per second. */
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
        /* gdvirtual */ _getContactColliderObject(contactIdx: int64): null | GObject
        /* gdvirtual */ _getContactColliderShape(contactIdx: int64): int64
        /* gdvirtual */ _getContactColliderVelocityAtPosition(contactIdx: int64): Vector3
        /* gdvirtual */ _getStep(): float64
        /* gdvirtual */ _integrateForces(): void
        /* gdvirtual */ _getSpaceState(): null | PhysicsDirectSpaceState3D
    }
    /** Provides direct access to a physics space in the [PhysicsServer2D].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicsdirectspacestate2d.html  
     */
    class PhysicsDirectSpaceState2D extends GObject {
        constructor(identifier?: any)
        /** Checks whether a point is inside any solid shape. Position and other parameters are defined through [PhysicsPointQueryParameters2D]. The shapes the point is inside of are returned in an array containing dictionaries with the following fields:  
         *  `collider`: The colliding object.  
         *  `collider_id`: The colliding object's ID.  
         *  `rid`: The intersecting object's [RID].  
         *  `shape`: The shape index of the colliding shape.  
         *  The number of intersections can be limited with the [param max_results] parameter, to reduce the processing time.  
         *      
         *  **Note:** [ConcavePolygonShape2D]s and [CollisionPolygon2D]s in `Segments` build mode are not solid shapes. Therefore, they will not be detected.  
         */
        intersectPoint(parameters: PhysicsPointQueryParameters2D, maxResults?: int64 /* = 32 */): GArray
        
        /** Intersects a ray in a given space. Ray position and other parameters are defined through [PhysicsRayQueryParameters2D]. The returned object is a dictionary with the following fields:  
         *  `collider`: The colliding object.  
         *  `collider_id`: The colliding object's ID.  
         *  `normal`: The object's surface normal at the intersection point, or `Vector2(0, 0)` if the ray starts inside the shape and [member PhysicsRayQueryParameters2D.hit_from_inside] is `true`.  
         *  `position`: The intersection point.  
         *  `rid`: The intersecting object's [RID].  
         *  `shape`: The shape index of the colliding shape.  
         *  If the ray did not intersect anything, then an empty dictionary is returned instead.  
         */
        intersectRay(parameters: PhysicsRayQueryParameters2D): GDictionary
        
        /** Checks the intersections of a shape, given through a [PhysicsShapeQueryParameters2D] object, against the space. The intersected shapes are returned in an array containing dictionaries with the following fields:  
         *  `collider`: The colliding object.  
         *  `collider_id`: The colliding object's ID.  
         *  `rid`: The intersecting object's [RID].  
         *  `shape`: The shape index of the colliding shape.  
         *  The number of intersections can be limited with the [param max_results] parameter, to reduce the processing time.  
         */
        intersectShape(parameters: PhysicsShapeQueryParameters2D, maxResults?: int64 /* = 32 */): GArray
        
        /** Checks how far a [Shape2D] can move without colliding. All the parameters for the query, including the shape and the motion, are supplied through a [PhysicsShapeQueryParameters2D] object.  
         *  Returns an array with the safe and unsafe proportions (between 0 and 1) of the motion. The safe proportion is the maximum fraction of the motion that can be made without a collision. The unsafe proportion is the minimum fraction of the distance that must be moved for a collision. If no collision is detected a result of `[1.0, 1.0]` will be returned.  
         *      
         *  **Note:** Any [Shape2D]s that the shape is already colliding with e.g. inside of, will be ignored. Use [method collide_shape] to determine the [Shape2D]s that the shape is already colliding with.  
         */
        castMotion(parameters: PhysicsShapeQueryParameters2D): PackedFloat32Array
        
        /** Checks the intersections of a shape, given through a [PhysicsShapeQueryParameters2D] object, against the space. The resulting array contains a list of points where the shape intersects another. Like with [method intersect_shape], the number of returned results can be limited to save processing time.  
         *  Returned points are a list of pairs of contact points. For each pair the first one is in the shape passed in [PhysicsShapeQueryParameters2D] object, second one is in the collided shape from the physics space.  
         */
        collideShape(parameters: PhysicsShapeQueryParameters2D, maxResults?: int64 /* = 32 */): GArray
        
        /** Checks the intersections of a shape, given through a [PhysicsShapeQueryParameters2D] object, against the space. If it collides with more than one shape, the nearest one is selected. The returned object is a dictionary containing the following fields:  
         *  `collider_id`: The colliding object's ID.  
         *  `linear_velocity`: The colliding object's velocity [Vector2]. If the object is an [Area2D], the result is `(0, 0)`.  
         *  `normal`: The collision normal of the query shape at the intersection point, pointing away from the intersecting object.  
         *  `point`: The intersection point.  
         *  `rid`: The intersecting object's [RID].  
         *  `shape`: The shape index of the colliding shape.  
         *  If the shape did not intersect anything, then an empty dictionary is returned instead.  
         */
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
        /** Checks whether a point is inside any solid shape. Position and other parameters are defined through [PhysicsPointQueryParameters3D]. The shapes the point is inside of are returned in an array containing dictionaries with the following fields:  
         *  `collider`: The colliding object.  
         *  `collider_id`: The colliding object's ID.  
         *  `rid`: The intersecting object's [RID].  
         *  `shape`: The shape index of the colliding shape.  
         *  The number of intersections can be limited with the [param max_results] parameter, to reduce the processing time.  
         */
        intersectPoint(parameters: PhysicsPointQueryParameters3D, maxResults?: int64 /* = 32 */): GArray
        
        /** Intersects a ray in a given space. Ray position and other parameters are defined through [PhysicsRayQueryParameters3D]. The returned object is a dictionary with the following fields:  
         *  `collider`: The colliding object.  
         *  `collider_id`: The colliding object's ID.  
         *  `normal`: The object's surface normal at the intersection point, or `Vector3(0, 0, 0)` if the ray starts inside the shape and [member PhysicsRayQueryParameters3D.hit_from_inside] is `true`.  
         *  `position`: The intersection point.  
         *  `face_index`: The face index at the intersection point.  
         *      
         *  **Note:** Returns a valid number only if the intersected shape is a [ConcavePolygonShape3D]. Otherwise, `-1` is returned.  
         *  `rid`: The intersecting object's [RID].  
         *  `shape`: The shape index of the colliding shape.  
         *  If the ray did not intersect anything, then an empty dictionary is returned instead.  
         */
        intersectRay(parameters: PhysicsRayQueryParameters3D): GDictionary
        
        /** Checks the intersections of a shape, given through a [PhysicsShapeQueryParameters3D] object, against the space. The intersected shapes are returned in an array containing dictionaries with the following fields:  
         *  `collider`: The colliding object.  
         *  `collider_id`: The colliding object's ID.  
         *  `rid`: The intersecting object's [RID].  
         *  `shape`: The shape index of the colliding shape.  
         *  The number of intersections can be limited with the [param max_results] parameter, to reduce the processing time.  
         *      
         *  **Note:** This method does not take into account the `motion` property of the object.  
         */
        intersectShape(parameters: PhysicsShapeQueryParameters3D, maxResults?: int64 /* = 32 */): GArray
        
        /** Checks how far a [Shape3D] can move without colliding. All the parameters for the query, including the shape and the motion, are supplied through a [PhysicsShapeQueryParameters3D] object.  
         *  Returns an array with the safe and unsafe proportions (between 0 and 1) of the motion. The safe proportion is the maximum fraction of the motion that can be made without a collision. The unsafe proportion is the minimum fraction of the distance that must be moved for a collision. If no collision is detected a result of `[1.0, 1.0]` will be returned.  
         *      
         *  **Note:** Any [Shape3D]s that the shape is already colliding with e.g. inside of, will be ignored. Use [method collide_shape] to determine the [Shape3D]s that the shape is already colliding with.  
         */
        castMotion(parameters: PhysicsShapeQueryParameters3D): PackedFloat32Array
        
        /** Checks the intersections of a shape, given through a [PhysicsShapeQueryParameters3D] object, against the space. The resulting array contains a list of points where the shape intersects another. Like with [method intersect_shape], the number of returned results can be limited to save processing time.  
         *  Returned points are a list of pairs of contact points. For each pair the first one is in the shape passed in [PhysicsShapeQueryParameters3D] object, second one is in the collided shape from the physics space.  
         *      
         *  **Note:** This method does not take into account the `motion` property of the object.  
         */
        collideShape(parameters: PhysicsShapeQueryParameters3D, maxResults?: int64 /* = 32 */): GArray
        
        /** Checks the intersections of a shape, given through a [PhysicsShapeQueryParameters3D] object, against the space. If it collides with more than one shape, the nearest one is selected. The returned object is a dictionary containing the following fields:  
         *  `collider_id`: The colliding object's ID.  
         *  `linear_velocity`: The colliding object's velocity [Vector3]. If the object is an [Area3D], the result is `(0, 0, 0)`.  
         *  `normal`: The collision normal of the query shape at the intersection point, pointing away from the intersecting object.  
         *  `point`: The intersection point.  
         *  `rid`: The intersecting object's [RID].  
         *  `shape`: The shape index of the colliding shape.  
         *  If the shape did not intersect anything, then an empty dictionary is returned instead.  
         *      
         *  **Note:** This method does not take into account the `motion` property of the object.  
         */
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
        
        /** If different from `0`, restricts the query to a specific canvas layer specified by its instance ID. See [method Object.get_instance_id].  
         *  If `0`, restricts the query to the Viewport's default canvas layer.  
         */
        get canvasInstanceId(): int64
        set canvasInstanceId(value: int64)
        
        /** The physics layers the query will detect (as a bitmask). By default, all collision layers are detected. See [url=https://docs.godotengine.org/en/latest/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        get collisionMask(): int64
        set collisionMask(value: int64)
        
        /** The list of object [RID]s that will be excluded from collisions. Use [method CollisionObject2D.get_rid] to get the [RID] associated with a [CollisionObject2D]-derived node.  
         *      
         *  **Note:** The returned array is copied and any changes to it will not update the original property value. To update the value you need to modify the returned array, and then assign it to the property again.  
         */
        get exclude(): GArray
        set exclude(value: GArray)
        
        /** If `true`, the query will take [PhysicsBody2D]s into account. */
        get collideWithBodies(): boolean
        set collideWithBodies(value: boolean)
        
        /** If `true`, the query will take [Area2D]s into account. */
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
        
        /** The physics layers the query will detect (as a bitmask). By default, all collision layers are detected. See [url=https://docs.godotengine.org/en/latest/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        get collisionMask(): int64
        set collisionMask(value: int64)
        
        /** The list of object [RID]s that will be excluded from collisions. Use [method CollisionObject3D.get_rid] to get the [RID] associated with a [CollisionObject3D]-derived node.  
         *      
         *  **Note:** The returned array is copied and any changes to it will not update the original property value. To update the value you need to modify the returned array, and then assign it to the property again.  
         */
        get exclude(): GArray
        set exclude(value: GArray)
        
        /** If `true`, the query will take [PhysicsBody3D]s into account. */
        get collideWithBodies(): boolean
        set collideWithBodies(value: boolean)
        
        /** If `true`, the query will take [Area3D]s into account. */
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
        static create(from: Vector2, to: Vector2, collisionMask?: int64 /* = 4294967295 */, exclude?: GArray /* = [] */): PhysicsRayQueryParameters2D
        
        /** The starting point of the ray being queried for, in global coordinates. */
        get from(): Vector2
        set from(value: Vector2)
        
        /** The ending point of the ray being queried for, in global coordinates. */
        get to(): Vector2
        set to(value: Vector2)
        
        /** The physics layers the query will detect (as a bitmask). By default, all collision layers are detected. See [url=https://docs.godotengine.org/en/latest/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        get collisionMask(): int64
        set collisionMask(value: int64)
        
        /** The list of object [RID]s that will be excluded from collisions. Use [method CollisionObject2D.get_rid] to get the [RID] associated with a [CollisionObject2D]-derived node.  
         *      
         *  **Note:** The returned array is copied and any changes to it will not update the original property value. To update the value you need to modify the returned array, and then assign it to the property again.  
         */
        get exclude(): GArray
        set exclude(value: GArray)
        
        /** If `true`, the query will take [PhysicsBody2D]s into account. */
        get collideWithBodies(): boolean
        set collideWithBodies(value: boolean)
        
        /** If `true`, the query will take [Area2D]s into account. */
        get collideWithAreas(): boolean
        set collideWithAreas(value: boolean)
        
        /** If `true`, the query will detect a hit when starting inside shapes. In this case the collision normal will be `Vector2(0, 0)`. Does not affect concave polygon shapes. */
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
        static create(from: Vector3, to: Vector3, collisionMask?: int64 /* = 4294967295 */, exclude?: GArray /* = [] */): PhysicsRayQueryParameters3D
        
        /** The starting point of the ray being queried for, in global coordinates. */
        get from(): Vector3
        set from(value: Vector3)
        
        /** The ending point of the ray being queried for, in global coordinates. */
        get to(): Vector3
        set to(value: Vector3)
        
        /** The physics layers the query will detect (as a bitmask). By default, all collision layers are detected. See [url=https://docs.godotengine.org/en/latest/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        get collisionMask(): int64
        set collisionMask(value: int64)
        
        /** The list of object [RID]s that will be excluded from collisions. Use [method CollisionObject3D.get_rid] to get the [RID] associated with a [CollisionObject3D]-derived node.  
         *      
         *  **Note:** The returned array is copied and any changes to it will not update the original property value. To update the value you need to modify the returned array, and then assign it to the property again.  
         */
        get exclude(): GArray
        set exclude(value: GArray)
        
        /** If `true`, the query will take [PhysicsBody3D]s into account. */
        get collideWithBodies(): boolean
        set collideWithBodies(value: boolean)
        
        /** If `true`, the query will take [Area3D]s into account. */
        get collideWithAreas(): boolean
        set collideWithAreas(value: boolean)
        
        /** If `true`, the query will detect a hit when starting inside shapes. In this case the collision normal will be `Vector3(0, 0, 0)`. Does not affect concave polygon shapes or heightmap shapes. */
        get hitFromInside(): boolean
        set hitFromInside(value: boolean)
        
        /** If `true`, the query will hit back faces with concave polygon shapes with back face enabled or heightmap shapes. */
        get hitBackFaces(): boolean
        set hitBackFaces(value: boolean)
    }
    /** Provides virtual methods that can be overridden to create custom [PhysicsServer2D] implementations.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicsserver2dextension.html  
     */
    class PhysicsServer2DExtension extends PhysicsServer2D {
        constructor(identifier?: any)
        /** Overridable version of [method PhysicsServer2D.world_boundary_shape_create]. */
        /* gdvirtual */ _worldBoundaryShapeCreate(): Rid
        
        /** Overridable version of [method PhysicsServer2D.separation_ray_shape_create]. */
        /* gdvirtual */ _separationRayShapeCreate(): Rid
        
        /** Overridable version of [method PhysicsServer2D.segment_shape_create]. */
        /* gdvirtual */ _segmentShapeCreate(): Rid
        
        /** Overridable version of [method PhysicsServer2D.circle_shape_create]. */
        /* gdvirtual */ _circleShapeCreate(): Rid
        
        /** Overridable version of [method PhysicsServer2D.rectangle_shape_create]. */
        /* gdvirtual */ _rectangleShapeCreate(): Rid
        
        /** Overridable version of [method PhysicsServer2D.capsule_shape_create]. */
        /* gdvirtual */ _capsuleShapeCreate(): Rid
        
        /** Overridable version of [method PhysicsServer2D.convex_polygon_shape_create]. */
        /* gdvirtual */ _convexPolygonShapeCreate(): Rid
        
        /** Overridable version of [method PhysicsServer2D.concave_polygon_shape_create]. */
        /* gdvirtual */ _concavePolygonShapeCreate(): Rid
        
        /** Overridable version of [method PhysicsServer2D.shape_set_data]. */
        /* gdvirtual */ _shapeSetData(shape: Rid, data: any): void
        
        /** Should set the custom solver bias for the given [param shape]. It defines how much bodies are forced to separate on contact.  
         *  Overridable version of [PhysicsServer2D]'s internal `shape_get_custom_solver_bias` method. Corresponds to [member Shape2D.custom_solver_bias].  
         */
        /* gdvirtual */ _shapeSetCustomSolverBias(shape: Rid, bias: float64): void
        
        /** Overridable version of [method PhysicsServer2D.shape_get_type]. */
        /* gdvirtual */ _shapeGetType(shape: Rid): PhysicsServer2D.ShapeType
        
        /** Overridable version of [method PhysicsServer2D.shape_get_data]. */
        /* gdvirtual */ _shapeGetData(shape: Rid): any
        
        /** Should return the custom solver bias of the given [param shape], which defines how much bodies are forced to separate on contact when this shape is involved.  
         *  Overridable version of [PhysicsServer2D]'s internal `shape_get_custom_solver_bias` method. Corresponds to [member Shape2D.custom_solver_bias].  
         */
        /* gdvirtual */ _shapeGetCustomSolverBias(shape: Rid): float64
        
        /** Given two shapes and their parameters, should return `true` if a collision between the two would occur, with additional details passed in [param results].  
         *  Overridable version of [PhysicsServer2D]'s internal `shape_collide` method. Corresponds to [method PhysicsDirectSpaceState2D.collide_shape].  
         */
        /* gdvirtual */ _shapeCollide(shapeA: Rid, xformA: Transform2D, motionA: Vector2, shapeB: Rid, xformB: Transform2D, motionB: Vector2, results: int64, resultMax: int64, resultCount: int64): boolean
        
        /** Overridable version of [method PhysicsServer2D.space_create]. */
        /* gdvirtual */ _spaceCreate(): Rid
        
        /** Overridable version of [method PhysicsServer2D.space_set_active]. */
        /* gdvirtual */ _spaceSetActive(space: Rid, active: boolean): void
        
        /** Overridable version of [method PhysicsServer2D.space_is_active]. */
        /* gdvirtual */ _spaceIsActive(space: Rid): boolean
        
        /** Overridable version of [method PhysicsServer2D.space_set_param]. */
        /* gdvirtual */ _spaceSetParam(space: Rid, param: PhysicsServer2D.SpaceParameter, value: float64): void
        
        /** Overridable version of [method PhysicsServer2D.space_get_param]. */
        /* gdvirtual */ _spaceGetParam(space: Rid, param: PhysicsServer2D.SpaceParameter): float64
        
        /** Overridable version of [method PhysicsServer2D.space_get_direct_state]. */
        /* gdvirtual */ _spaceGetDirectState(space: Rid): null | PhysicsDirectSpaceState2D
        
        /** Used internally to allow the given [param space] to store contact points, up to [param max_contacts]. This is automatically set for the main [World2D]'s space when [member SceneTree.debug_collisions_hint] is `true`, or by checking "Visible Collision Shapes" in the editor. Only works in debug builds.  
         *  Overridable version of [PhysicsServer2D]'s internal `space_set_debug_contacts` method.  
         */
        /* gdvirtual */ _spaceSetDebugContacts(space: Rid, maxContacts: int64): void
        
        /** Should return the positions of all contacts that have occurred during the last physics step in the given [param space]. See also [method _space_get_contact_count] and [method _space_set_debug_contacts].  
         *  Overridable version of [PhysicsServer2D]'s internal `space_get_contacts` method.  
         */
        /* gdvirtual */ _spaceGetContacts(space: Rid): PackedVector2Array
        
        /** Should return how many contacts have occurred during the last physics step in the given [param space]. See also [method _space_get_contacts] and [method _space_set_debug_contacts].  
         *  Overridable version of [PhysicsServer2D]'s internal `space_get_contact_count` method.  
         */
        /* gdvirtual */ _spaceGetContactCount(space: Rid): int64
        
        /** Overridable version of [method PhysicsServer2D.area_create]. */
        /* gdvirtual */ _areaCreate(): Rid
        
        /** Overridable version of [method PhysicsServer2D.area_set_space]. */
        /* gdvirtual */ _areaSetSpace(area: Rid, space: Rid): void
        
        /** Overridable version of [method PhysicsServer2D.area_get_space]. */
        /* gdvirtual */ _areaGetSpace(area: Rid): Rid
        
        /** Overridable version of [method PhysicsServer2D.area_add_shape]. */
        /* gdvirtual */ _areaAddShape(area: Rid, shape: Rid, transform: Transform2D, disabled: boolean): void
        
        /** Overridable version of [method PhysicsServer2D.area_set_shape]. */
        /* gdvirtual */ _areaSetShape(area: Rid, shapeIdx: int64, shape: Rid): void
        
        /** Overridable version of [method PhysicsServer2D.area_set_shape_transform]. */
        /* gdvirtual */ _areaSetShapeTransform(area: Rid, shapeIdx: int64, transform: Transform2D): void
        
        /** Overridable version of [method PhysicsServer2D.area_set_shape_disabled]. */
        /* gdvirtual */ _areaSetShapeDisabled(area: Rid, shapeIdx: int64, disabled: boolean): void
        
        /** Overridable version of [method PhysicsServer2D.area_get_shape_count]. */
        /* gdvirtual */ _areaGetShapeCount(area: Rid): int64
        
        /** Overridable version of [method PhysicsServer2D.area_get_shape]. */
        /* gdvirtual */ _areaGetShape(area: Rid, shapeIdx: int64): Rid
        
        /** Overridable version of [method PhysicsServer2D.area_get_shape_transform]. */
        /* gdvirtual */ _areaGetShapeTransform(area: Rid, shapeIdx: int64): Transform2D
        
        /** Overridable version of [method PhysicsServer2D.area_remove_shape]. */
        /* gdvirtual */ _areaRemoveShape(area: Rid, shapeIdx: int64): void
        
        /** Overridable version of [method PhysicsServer2D.area_clear_shapes]. */
        /* gdvirtual */ _areaClearShapes(area: Rid): void
        
        /** Overridable version of [method PhysicsServer2D.area_attach_object_instance_id]. */
        /* gdvirtual */ _areaAttachObjectInstanceId(area: Rid, id: int64): void
        
        /** Overridable version of [method PhysicsServer2D.area_get_object_instance_id]. */
        /* gdvirtual */ _areaGetObjectInstanceId(area: Rid): int64
        
        /** Overridable version of [method PhysicsServer2D.area_attach_canvas_instance_id]. */
        /* gdvirtual */ _areaAttachCanvasInstanceId(area: Rid, id: int64): void
        
        /** Overridable version of [method PhysicsServer2D.area_get_canvas_instance_id]. */
        /* gdvirtual */ _areaGetCanvasInstanceId(area: Rid): int64
        
        /** Overridable version of [method PhysicsServer2D.area_set_param]. */
        /* gdvirtual */ _areaSetParam(area: Rid, param: PhysicsServer2D.AreaParameter, value: any): void
        
        /** Overridable version of [method PhysicsServer2D.area_set_transform]. */
        /* gdvirtual */ _areaSetTransform(area: Rid, transform: Transform2D): void
        
        /** Overridable version of [method PhysicsServer2D.area_get_param]. */
        /* gdvirtual */ _areaGetParam(area: Rid, param: PhysicsServer2D.AreaParameter): any
        
        /** Overridable version of [method PhysicsServer2D.area_get_transform]. */
        /* gdvirtual */ _areaGetTransform(area: Rid): Transform2D
        
        /** Overridable version of [method PhysicsServer2D.area_set_collision_layer]. */
        /* gdvirtual */ _areaSetCollisionLayer(area: Rid, layer: int64): void
        
        /** Overridable version of [method PhysicsServer2D.area_get_collision_layer]. */
        /* gdvirtual */ _areaGetCollisionLayer(area: Rid): int64
        
        /** Overridable version of [method PhysicsServer2D.area_set_collision_mask]. */
        /* gdvirtual */ _areaSetCollisionMask(area: Rid, mask: int64): void
        
        /** Overridable version of [method PhysicsServer2D.area_get_collision_mask]. */
        /* gdvirtual */ _areaGetCollisionMask(area: Rid): int64
        
        /** Overridable version of [method PhysicsServer2D.area_set_monitorable]. */
        /* gdvirtual */ _areaSetMonitorable(area: Rid, monitorable: boolean): void
        
        /** If set to `true`, allows the area with the given [RID] to detect mouse inputs when the mouse cursor is hovering on it.  
         *  Overridable version of [PhysicsServer2D]'s internal `area_set_pickable` method. Corresponds to [member CollisionObject2D.input_pickable].  
         */
        /* gdvirtual */ _areaSetPickable(area: Rid, pickable: boolean): void
        
        /** Overridable version of [method PhysicsServer2D.area_set_monitor_callback]. */
        /* gdvirtual */ _areaSetMonitorCallback(area: Rid, callback: Callable): void
        
        /** Overridable version of [method PhysicsServer2D.area_set_area_monitor_callback]. */
        /* gdvirtual */ _areaSetAreaMonitorCallback(area: Rid, callback: Callable): void
        
        /** Overridable version of [method PhysicsServer2D.body_create]. */
        /* gdvirtual */ _bodyCreate(): Rid
        
        /** Overridable version of [method PhysicsServer2D.body_set_space]. */
        /* gdvirtual */ _bodySetSpace(body: Rid, space: Rid): void
        
        /** Overridable version of [method PhysicsServer2D.body_get_space]. */
        /* gdvirtual */ _bodyGetSpace(body: Rid): Rid
        
        /** Overridable version of [method PhysicsServer2D.body_set_mode]. */
        /* gdvirtual */ _bodySetMode(body: Rid, mode: PhysicsServer2D.BodyMode): void
        
        /** Overridable version of [method PhysicsServer2D.body_get_mode]. */
        /* gdvirtual */ _bodyGetMode(body: Rid): PhysicsServer2D.BodyMode
        
        /** Overridable version of [method PhysicsServer2D.body_add_shape]. */
        /* gdvirtual */ _bodyAddShape(body: Rid, shape: Rid, transform: Transform2D, disabled: boolean): void
        
        /** Overridable version of [method PhysicsServer2D.body_set_shape]. */
        /* gdvirtual */ _bodySetShape(body: Rid, shapeIdx: int64, shape: Rid): void
        
        /** Overridable version of [method PhysicsServer2D.body_set_shape_transform]. */
        /* gdvirtual */ _bodySetShapeTransform(body: Rid, shapeIdx: int64, transform: Transform2D): void
        
        /** Overridable version of [method PhysicsServer2D.body_get_shape_count]. */
        /* gdvirtual */ _bodyGetShapeCount(body: Rid): int64
        
        /** Overridable version of [method PhysicsServer2D.body_get_shape]. */
        /* gdvirtual */ _bodyGetShape(body: Rid, shapeIdx: int64): Rid
        
        /** Overridable version of [method PhysicsServer2D.body_get_shape_transform]. */
        /* gdvirtual */ _bodyGetShapeTransform(body: Rid, shapeIdx: int64): Transform2D
        
        /** Overridable version of [method PhysicsServer2D.body_set_shape_disabled]. */
        /* gdvirtual */ _bodySetShapeDisabled(body: Rid, shapeIdx: int64, disabled: boolean): void
        
        /** Overridable version of [method PhysicsServer2D.body_set_shape_as_one_way_collision]. */
        /* gdvirtual */ _bodySetShapeAsOneWayCollision(body: Rid, shapeIdx: int64, enable: boolean, margin: float64): void
        
        /** Overridable version of [method PhysicsServer2D.body_remove_shape]. */
        /* gdvirtual */ _bodyRemoveShape(body: Rid, shapeIdx: int64): void
        
        /** Overridable version of [method PhysicsServer2D.body_clear_shapes]. */
        /* gdvirtual */ _bodyClearShapes(body: Rid): void
        
        /** Overridable version of [method PhysicsServer2D.body_attach_object_instance_id]. */
        /* gdvirtual */ _bodyAttachObjectInstanceId(body: Rid, id: int64): void
        
        /** Overridable version of [method PhysicsServer2D.body_get_object_instance_id]. */
        /* gdvirtual */ _bodyGetObjectInstanceId(body: Rid): int64
        
        /** Overridable version of [method PhysicsServer2D.body_attach_canvas_instance_id]. */
        /* gdvirtual */ _bodyAttachCanvasInstanceId(body: Rid, id: int64): void
        
        /** Overridable version of [method PhysicsServer2D.body_get_canvas_instance_id]. */
        /* gdvirtual */ _bodyGetCanvasInstanceId(body: Rid): int64
        
        /** Overridable version of [method PhysicsServer2D.body_set_continuous_collision_detection_mode]. */
        /* gdvirtual */ _bodySetContinuousCollisionDetectionMode(body: Rid, mode: PhysicsServer2D.CcdMode): void
        
        /** Overridable version of [method PhysicsServer2D.body_get_continuous_collision_detection_mode]. */
        /* gdvirtual */ _bodyGetContinuousCollisionDetectionMode(body: Rid): PhysicsServer2D.CcdMode
        
        /** Overridable version of [method PhysicsServer2D.body_set_collision_layer]. */
        /* gdvirtual */ _bodySetCollisionLayer(body: Rid, layer: int64): void
        
        /** Overridable version of [method PhysicsServer2D.body_get_collision_layer]. */
        /* gdvirtual */ _bodyGetCollisionLayer(body: Rid): int64
        
        /** Overridable version of [method PhysicsServer2D.body_set_collision_mask]. */
        /* gdvirtual */ _bodySetCollisionMask(body: Rid, mask: int64): void
        
        /** Overridable version of [method PhysicsServer2D.body_get_collision_mask]. */
        /* gdvirtual */ _bodyGetCollisionMask(body: Rid): int64
        
        /** Overridable version of [method PhysicsServer2D.body_set_collision_priority]. */
        /* gdvirtual */ _bodySetCollisionPriority(body: Rid, priority: float64): void
        
        /** Overridable version of [method PhysicsServer2D.body_get_collision_priority]. */
        /* gdvirtual */ _bodyGetCollisionPriority(body: Rid): float64
        
        /** Overridable version of [method PhysicsServer2D.body_set_param]. */
        /* gdvirtual */ _bodySetParam(body: Rid, param: PhysicsServer2D.BodyParameter, value: any): void
        
        /** Overridable version of [method PhysicsServer2D.body_get_param]. */
        /* gdvirtual */ _bodyGetParam(body: Rid, param: PhysicsServer2D.BodyParameter): any
        
        /** Overridable version of [method PhysicsServer2D.body_reset_mass_properties]. */
        /* gdvirtual */ _bodyResetMassProperties(body: Rid): void
        
        /** Overridable version of [method PhysicsServer2D.body_set_state]. */
        /* gdvirtual */ _bodySetState(body: Rid, state: PhysicsServer2D.BodyState, value: any): void
        
        /** Overridable version of [method PhysicsServer2D.body_get_state]. */
        /* gdvirtual */ _bodyGetState(body: Rid, state: PhysicsServer2D.BodyState): any
        
        /** Overridable version of [method PhysicsServer2D.body_apply_central_impulse]. */
        /* gdvirtual */ _bodyApplyCentralImpulse(body: Rid, impulse: Vector2): void
        
        /** Overridable version of [method PhysicsServer2D.body_apply_torque_impulse]. */
        /* gdvirtual */ _bodyApplyTorqueImpulse(body: Rid, impulse: float64): void
        
        /** Overridable version of [method PhysicsServer2D.body_apply_impulse]. */
        /* gdvirtual */ _bodyApplyImpulse(body: Rid, impulse: Vector2, position: Vector2): void
        
        /** Overridable version of [method PhysicsServer2D.body_apply_central_force]. */
        /* gdvirtual */ _bodyApplyCentralForce(body: Rid, force: Vector2): void
        
        /** Overridable version of [method PhysicsServer2D.body_apply_force]. */
        /* gdvirtual */ _bodyApplyForce(body: Rid, force: Vector2, position: Vector2): void
        
        /** Overridable version of [method PhysicsServer2D.body_apply_torque]. */
        /* gdvirtual */ _bodyApplyTorque(body: Rid, torque: float64): void
        
        /** Overridable version of [method PhysicsServer2D.body_add_constant_central_force]. */
        /* gdvirtual */ _bodyAddConstantCentralForce(body: Rid, force: Vector2): void
        
        /** Overridable version of [method PhysicsServer2D.body_add_constant_force]. */
        /* gdvirtual */ _bodyAddConstantForce(body: Rid, force: Vector2, position: Vector2): void
        
        /** Overridable version of [method PhysicsServer2D.body_add_constant_torque]. */
        /* gdvirtual */ _bodyAddConstantTorque(body: Rid, torque: float64): void
        
        /** Overridable version of [method PhysicsServer2D.body_set_constant_force]. */
        /* gdvirtual */ _bodySetConstantForce(body: Rid, force: Vector2): void
        
        /** Overridable version of [method PhysicsServer2D.body_get_constant_force]. */
        /* gdvirtual */ _bodyGetConstantForce(body: Rid): Vector2
        
        /** Overridable version of [method PhysicsServer2D.body_set_constant_torque]. */
        /* gdvirtual */ _bodySetConstantTorque(body: Rid, torque: float64): void
        
        /** Overridable version of [method PhysicsServer2D.body_get_constant_torque]. */
        /* gdvirtual */ _bodyGetConstantTorque(body: Rid): float64
        
        /** Overridable version of [method PhysicsServer2D.body_set_axis_velocity]. */
        /* gdvirtual */ _bodySetAxisVelocity(body: Rid, axisVelocity: Vector2): void
        
        /** Overridable version of [method PhysicsServer2D.body_add_collision_exception]. */
        /* gdvirtual */ _bodyAddCollisionException(body: Rid, exceptedBody: Rid): void
        
        /** Overridable version of [method PhysicsServer2D.body_remove_collision_exception]. */
        /* gdvirtual */ _bodyRemoveCollisionException(body: Rid, exceptedBody: Rid): void
        
        /** Returns the [RID]s of all bodies added as collision exceptions for the given [param body]. See also [method _body_add_collision_exception] and [method _body_remove_collision_exception].  
         *  Overridable version of [PhysicsServer2D]'s internal `body_get_collision_exceptions` method. Corresponds to [method PhysicsBody2D.get_collision_exceptions].  
         */
        /* gdvirtual */ _bodyGetCollisionExceptions(body: Rid): GArray
        
        /** Overridable version of [method PhysicsServer2D.body_set_max_contacts_reported]. */
        /* gdvirtual */ _bodySetMaxContactsReported(body: Rid, amount: int64): void
        
        /** Overridable version of [method PhysicsServer2D.body_get_max_contacts_reported]. */
        /* gdvirtual */ _bodyGetMaxContactsReported(body: Rid): int64
        
        /** Overridable version of [PhysicsServer2D]'s internal `body_set_contacts_reported_depth_threshold` method.  
         *      
         *  **Note:** This method is currently unused by Godot's default physics implementation.  
         */
        /* gdvirtual */ _bodySetContactsReportedDepthThreshold(body: Rid, threshold: float64): void
        
        /** Overridable version of [PhysicsServer2D]'s internal `body_get_contacts_reported_depth_threshold` method.  
         *      
         *  **Note:** This method is currently unused by Godot's default physics implementation.  
         */
        /* gdvirtual */ _bodyGetContactsReportedDepthThreshold(body: Rid): float64
        
        /** Overridable version of [method PhysicsServer2D.body_set_omit_force_integration]. */
        /* gdvirtual */ _bodySetOmitForceIntegration(body: Rid, enable: boolean): void
        
        /** Overridable version of [method PhysicsServer2D.body_is_omitting_force_integration]. */
        /* gdvirtual */ _bodyIsOmittingForceIntegration(body: Rid): boolean
        
        /** Assigns the [param body] to call the given [param callable] during the synchronization phase of the loop, before [method _step] is called. See also [method _sync].  
         *  Overridable version of [method PhysicsServer2D.body_set_state_sync_callback].  
         */
        /* gdvirtual */ _bodySetStateSyncCallback(body: Rid, callable: Callable): void
        
        /** Overridable version of [method PhysicsServer2D.body_set_force_integration_callback]. */
        /* gdvirtual */ _bodySetForceIntegrationCallback(body: Rid, callable: Callable, userdata: any): void
        
        /** Given a [param body], a [param shape], and their respective parameters, this method should return `true` if a collision between the two would occur, with additional details passed in [param results].  
         *  Overridable version of [PhysicsServer2D]'s internal `shape_collide` method. Corresponds to [method PhysicsDirectSpaceState2D.collide_shape].  
         */
        /* gdvirtual */ _bodyCollideShape(body: Rid, bodyShape: int64, shape: Rid, shapeXform: Transform2D, motion: Vector2, results: int64, resultMax: int64, resultCount: int64): boolean
        
        /** If set to `true`, allows the body with the given [RID] to detect mouse inputs when the mouse cursor is hovering on it.  
         *  Overridable version of [PhysicsServer2D]'s internal `body_set_pickable` method. Corresponds to [member CollisionObject2D.input_pickable].  
         */
        /* gdvirtual */ _bodySetPickable(body: Rid, pickable: boolean): void
        
        /** Overridable version of [method PhysicsServer2D.body_get_direct_state]. */
        /* gdvirtual */ _bodyGetDirectState(body: Rid): null | PhysicsDirectBodyState2D
        
        /** Overridable version of [method PhysicsServer2D.body_test_motion]. Unlike the exposed implementation, this method does not receive all of the arguments inside a [PhysicsTestMotionParameters2D]. */
        /* gdvirtual */ _bodyTestMotion(body: Rid, from: Transform2D, motion: Vector2, margin: float64, collideSeparationRay: boolean, recoveryAsCollision: boolean, result: int64): boolean
        
        /** Overridable version of [method PhysicsServer2D.joint_create]. */
        /* gdvirtual */ _jointCreate(): Rid
        
        /** Overridable version of [method PhysicsServer2D.joint_clear]. */
        /* gdvirtual */ _jointClear(joint: Rid): void
        
        /** Overridable version of [method PhysicsServer2D.joint_set_param]. */
        /* gdvirtual */ _jointSetParam(joint: Rid, param: PhysicsServer2D.JointParam, value: float64): void
        
        /** Overridable version of [method PhysicsServer2D.joint_get_param]. */
        /* gdvirtual */ _jointGetParam(joint: Rid, param: PhysicsServer2D.JointParam): float64
        
        /** Overridable version of [method PhysicsServer2D.joint_disable_collisions_between_bodies]. */
        /* gdvirtual */ _jointDisableCollisionsBetweenBodies(joint: Rid, disable: boolean): void
        
        /** Overridable version of [method PhysicsServer2D.joint_is_disabled_collisions_between_bodies]. */
        /* gdvirtual */ _jointIsDisabledCollisionsBetweenBodies(joint: Rid): boolean
        
        /** Overridable version of [method PhysicsServer2D.joint_make_pin]. */
        /* gdvirtual */ _jointMakePin(joint: Rid, anchor: Vector2, bodyA: Rid, bodyB: Rid): void
        
        /** Overridable version of [method PhysicsServer2D.joint_make_groove]. */
        /* gdvirtual */ _jointMakeGroove(joint: Rid, aGroove1: Vector2, aGroove2: Vector2, bAnchor: Vector2, bodyA: Rid, bodyB: Rid): void
        
        /** Overridable version of [method PhysicsServer2D.joint_make_damped_spring]. */
        /* gdvirtual */ _jointMakeDampedSpring(joint: Rid, anchorA: Vector2, anchorB: Vector2, bodyA: Rid, bodyB: Rid): void
        
        /** Overridable version of [method PhysicsServer2D.pin_joint_set_flag]. */
        /* gdvirtual */ _pinJointSetFlag(joint: Rid, flag: PhysicsServer2D.PinJointFlag, enabled: boolean): void
        
        /** Overridable version of [method PhysicsServer2D.pin_joint_get_flag]. */
        /* gdvirtual */ _pinJointGetFlag(joint: Rid, flag: PhysicsServer2D.PinJointFlag): boolean
        
        /** Overridable version of [method PhysicsServer2D.pin_joint_set_param]. */
        /* gdvirtual */ _pinJointSetParam(joint: Rid, param: PhysicsServer2D.PinJointParam, value: float64): void
        
        /** Overridable version of [method PhysicsServer2D.pin_joint_get_param]. */
        /* gdvirtual */ _pinJointGetParam(joint: Rid, param: PhysicsServer2D.PinJointParam): float64
        
        /** Overridable version of [method PhysicsServer2D.damped_spring_joint_set_param]. */
        /* gdvirtual */ _dampedSpringJointSetParam(joint: Rid, param: PhysicsServer2D.DampedSpringParam, value: float64): void
        
        /** Overridable version of [method PhysicsServer2D.damped_spring_joint_get_param]. */
        /* gdvirtual */ _dampedSpringJointGetParam(joint: Rid, param: PhysicsServer2D.DampedSpringParam): float64
        
        /** Overridable version of [method PhysicsServer2D.joint_get_type]. */
        /* gdvirtual */ _jointGetType(joint: Rid): PhysicsServer2D.JointType
        
        /** Overridable version of [method PhysicsServer2D.free_rid]. */
        /* gdvirtual */ _freeRid(rid: Rid): void
        
        /** Overridable version of [method PhysicsServer2D.set_active]. */
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
        
        /** Called every physics step before [method _step] to process all remaining queries.  
         *  Overridable version of [PhysicsServer2D]'s internal `flush_queries` method.  
         */
        /* gdvirtual */ _flushQueries(): void
        
        /** Called to indicate that the physics server has stopped synchronizing. It is in the loop's iteration/physics phase, and can access physics objects even if running on a separate thread. See also [method _sync].  
         *  Overridable version of [PhysicsServer2D]'s internal `end_sync` method.  
         */
        /* gdvirtual */ _endSync(): void
        
        /** Called when the main loop finalizes to shut down the physics server. See also [method MainLoop._finalize] and [method _init].  
         *  Overridable version of [PhysicsServer2D]'s internal `finish` method.  
         */
        /* gdvirtual */ _finish(): void
        
        /** Overridable method that should return `true` when the physics server is processing queries. See also [method _flush_queries].  
         *  Overridable version of [PhysicsServer2D]'s internal `is_flushing_queries` method.  
         */
        /* gdvirtual */ _isFlushingQueries(): boolean
        
        /** Overridable version of [method PhysicsServer2D.get_process_info]. */
        /* gdvirtual */ _getProcessInfo(processInfo: PhysicsServer2D.ProcessInfo): int64
        
        /** Returns `true` if the body with the given [RID] is being excluded from [method _body_test_motion]. See also [method Object.get_instance_id]. */
        bodyTestMotionIsExcludingBody(body: Rid): boolean
        
        /** Returns `true` if the object with the given instance ID is being excluded from [method _body_test_motion]. See also [method Object.get_instance_id]. */
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
        /* gdvirtual */ _spaceGetDirectState(space: Rid): null | PhysicsDirectSpaceState3D
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
        /* gdvirtual */ _bodyGetDirectState(body: Rid): null | PhysicsDirectBodyState3D
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
        /* gdvirtual */ _generic6DofJointSetParam(joint: Rid, axis: Vector3.Axis, param: PhysicsServer3D.G6DofJointAxisParam, value: float64): void
        /* gdvirtual */ _generic6DofJointGetParam(joint: Rid, axis: Vector3.Axis, param: PhysicsServer3D.G6DofJointAxisParam): float64
        /* gdvirtual */ _generic6DofJointSetFlag(joint: Rid, axis: Vector3.Axis, flag: PhysicsServer3D.G6DofJointAxisFlag, enable: boolean): void
        /* gdvirtual */ _generic6DofJointGetFlag(joint: Rid, axis: Vector3.Axis, flag: PhysicsServer3D.G6DofJointAxisFlag): boolean
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
        /** Called by the [PhysicsServer3D] to set the position for the [SoftBody3D] vertex at the index specified by [param vertex_id].  
         *      
         *  **Note:** The [param vertex] parameter used to be of type `const void*` prior to Godot 4.2.  
         */
        /* gdvirtual */ _setVertex(vertexId: int64, vertex: Vector3): void
        
        /** Called by the [PhysicsServer3D] to set the normal for the [SoftBody3D] vertex at the index specified by [param vertex_id].  
         *      
         *  **Note:** The [param normal] parameter used to be of type `const void*` prior to Godot 4.2.  
         */
        /* gdvirtual */ _setNormal(vertexId: int64, normal: Vector3): void
        
        /** Called by the [PhysicsServer3D] to set the bounding box for the [SoftBody3D]. */
        /* gdvirtual */ _setAabb(aabb: Aabb): void
        
        /** Sets the position for the [SoftBody3D] vertex at the index specified by [param vertex_id]. */
        setVertex(vertexId: int64, vertex: Vector3): void
        
        /** Sets the normal for the [SoftBody3D] vertex at the index specified by [param vertex_id]. */
        setNormal(vertexId: int64, normal: Vector3): void
        
        /** Sets the bounding box for the [SoftBody3D]. */
        setAabb(aabb: Aabb): void
    }
    /** Provides parameters for [method PhysicsDirectSpaceState2D.intersect_shape].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicsshapequeryparameters2d.html  
     */
    class PhysicsShapeQueryParameters2D extends RefCounted {
        constructor(identifier?: any)
        /** The physics layers the query will detect (as a bitmask). By default, all collision layers are detected. See [url=https://docs.godotengine.org/en/latest/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
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
        get shape(): null | Shape2D
        set shape(value: null | Shape2D)
        
        /** The queried shape's [RID] that will be used for collision/intersection queries. Use this over [member shape] if you want to optimize for performance using the Servers API:  
         *  	  
         */
        get shapeRid(): Rid
        set shapeRid(value: Rid)
        
        /** The queried shape's transform matrix. */
        get transform(): Transform2D
        set transform(value: Transform2D)
        
        /** If `true`, the query will take [PhysicsBody2D]s into account. */
        get collideWithBodies(): boolean
        set collideWithBodies(value: boolean)
        
        /** If `true`, the query will take [Area2D]s into account. */
        get collideWithAreas(): boolean
        set collideWithAreas(value: boolean)
    }
    /** Provides parameters for [method PhysicsDirectSpaceState3D.intersect_shape].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicsshapequeryparameters3d.html  
     */
    class PhysicsShapeQueryParameters3D extends RefCounted {
        constructor(identifier?: any)
        /** The physics layers the query will detect (as a bitmask). By default, all collision layers are detected. See [url=https://docs.godotengine.org/en/latest/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
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
        get shape(): null | Shape3D
        set shape(value: null | Shape3D)
        
        /** The queried shape's [RID] that will be used for collision/intersection queries. Use this over [member shape] if you want to optimize for performance using the Servers API:  
         *  	  
         */
        get shapeRid(): Rid
        set shapeRid(value: Rid)
        
        /** The queried shape's transform matrix. */
        get transform(): Transform3D
        set transform(value: Transform3D)
        
        /** If `true`, the query will take [PhysicsBody3D]s into account. */
        get collideWithBodies(): boolean
        set collideWithBodies(value: boolean)
        
        /** If `true`, the query will take [Area3D]s into account. */
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
        
        /** If set to `true`, shapes of type [constant PhysicsServer2D.SHAPE_SEPARATION_RAY] are used to detect collisions and can stop the motion. Can be useful when snapping to the ground.  
         *  If set to `false`, shapes of type [constant PhysicsServer2D.SHAPE_SEPARATION_RAY] are only used for separation when overlapping with other bodies. That's the main use for separation ray shapes.  
         */
        get collideSeparationRay(): boolean
        set collideSeparationRay(value: boolean)
        
        /** Optional array of body [RID] to exclude from collision. Use [method CollisionObject2D.get_rid] to get the [RID] associated with a [CollisionObject2D]-derived node. */
        get excludeBodies(): GArray
        set excludeBodies(value: GArray)
        
        /** Optional array of object unique instance ID to exclude from collision. See [method Object.get_instance_id]. */
        get excludeObjects(): GArray
        set excludeObjects(value: GArray)
        
        /** If set to `true`, any depenetration from the recovery phase is reported as a collision; this is used e.g. by [CharacterBody2D] for improving floor detection during floor snapping.  
         *  If set to `false`, only collisions resulting from the motion are reported, which is generally the desired behavior.  
         */
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
        
        /** Maximum number of returned collisions, between `1` and `32`. Always returns the deepest detected collisions. */
        get maxCollisions(): int64
        set maxCollisions(value: int64)
        
        /** If set to `true`, shapes of type [constant PhysicsServer3D.SHAPE_SEPARATION_RAY] are used to detect collisions and can stop the motion. Can be useful when snapping to the ground.  
         *  If set to `false`, shapes of type [constant PhysicsServer3D.SHAPE_SEPARATION_RAY] are only used for separation when overlapping with other bodies. That's the main use for separation ray shapes.  
         */
        get collideSeparationRay(): boolean
        set collideSeparationRay(value: boolean)
        
        /** Optional array of body [RID] to exclude from collision. Use [method CollisionObject3D.get_rid] to get the [RID] associated with a [CollisionObject3D]-derived node. */
        get excludeBodies(): GArray
        set excludeBodies(value: GArray)
        
        /** Optional array of object unique instance ID to exclude from collision. See [method Object.get_instance_id]. */
        get excludeObjects(): GArray
        set excludeObjects(value: GArray)
        
        /** If set to `true`, any depenetration from the recovery phase is reported as a collision; this is used e.g. by [CharacterBody3D] for improving floor detection during floor snapping.  
         *  If set to `false`, only collisions resulting from the motion are reported, which is generally the desired behavior.  
         */
        get recoveryAsCollision(): boolean
        set recoveryAsCollision(value: boolean)
    }
    /** Describes the motion and collision result from [method PhysicsServer2D.body_test_motion].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicstestmotionresult2d.html  
     */
    class PhysicsTestMotionResult2D extends RefCounted {
        constructor(identifier?: any)
        /** Returns the moving object's travel before collision. */
        getTravel(): Vector2
        
        /** Returns the moving object's remaining movement vector. */
        getRemainder(): Vector2
        
        /** Returns the point of collision in global coordinates, if a collision occurred. */
        getCollisionPoint(): Vector2
        
        /** Returns the colliding body's shape's normal at the point of collision, if a collision occurred. */
        getCollisionNormal(): Vector2
        
        /** Returns the colliding body's velocity, if a collision occurred. */
        getColliderVelocity(): Vector2
        
        /** Returns the unique instance ID of the colliding body's attached [Object], if a collision occurred. See [method Object.get_instance_id]. */
        getColliderId(): int64
        
        /** Returns the colliding body's [RID] used by the [PhysicsServer2D], if a collision occurred. */
        getColliderRid(): Rid
        
        /** Returns the colliding body's attached [Object], if a collision occurred. */
        getCollider(): null | GObject
        
        /** Returns the colliding body's shape index, if a collision occurred. See [CollisionObject2D]. */
        getColliderShape(): int64
        
        /** Returns the moving object's colliding shape, if a collision occurred. */
        getCollisionLocalShape(): int64
        
        /** Returns the length of overlap along the collision normal, if a collision occurred. */
        getCollisionDepth(): float64
        
        /** Returns the maximum fraction of the motion that can occur without a collision, between `0` and `1`. */
        getCollisionSafeFraction(): float64
        
        /** Returns the minimum fraction of the motion needed to collide, if a collision occurred, between `0` and `1`. */
        getCollisionUnsafeFraction(): float64
    }
    /** Describes the motion and collision result from [method PhysicsServer3D.body_test_motion].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_physicstestmotionresult3d.html  
     */
    class PhysicsTestMotionResult3D extends RefCounted {
        constructor(identifier?: any)
        /** Returns the moving object's travel before collision. */
        getTravel(): Vector3
        
        /** Returns the moving object's remaining movement vector. */
        getRemainder(): Vector3
        
        /** Returns the maximum fraction of the motion that can occur without a collision, between `0` and `1`. */
        getCollisionSafeFraction(): float64
        
        /** Returns the minimum fraction of the motion needed to collide, if a collision occurred, between `0` and `1`. */
        getCollisionUnsafeFraction(): float64
        
        /** Returns the number of detected collisions. */
        getCollisionCount(): int64
        
        /** Returns the point of collision in global coordinates given a collision index (the deepest collision by default), if a collision occurred. */
        getCollisionPoint(collisionIndex?: int64 /* = 0 */): Vector3
        
        /** Returns the colliding body's shape's normal at the point of collision given a collision index (the deepest collision by default), if a collision occurred. */
        getCollisionNormal(collisionIndex?: int64 /* = 0 */): Vector3
        
        /** Returns the colliding body's velocity given a collision index (the deepest collision by default), if a collision occurred. */
        getColliderVelocity(collisionIndex?: int64 /* = 0 */): Vector3
        
        /** Returns the unique instance ID of the colliding body's attached [Object] given a collision index (the deepest collision by default), if a collision occurred. See [method Object.get_instance_id]. */
        getColliderId(collisionIndex?: int64 /* = 0 */): int64
        
        /** Returns the colliding body's [RID] used by the [PhysicsServer3D] given a collision index (the deepest collision by default), if a collision occurred. */
        getColliderRid(collisionIndex?: int64 /* = 0 */): Rid
        
        /** Returns the colliding body's attached [Object] given a collision index (the deepest collision by default), if a collision occurred. */
        getCollider(collisionIndex?: int64 /* = 0 */): null | GObject
        
        /** Returns the colliding body's shape index given a collision index (the deepest collision by default), if a collision occurred. See [CollisionObject3D]. */
        getColliderShape(collisionIndex?: int64 /* = 0 */): int64
        
        /** Returns the moving object's colliding shape given a collision index (the deepest collision by default), if a collision occurred. */
        getCollisionLocalShape(collisionIndex?: int64 /* = 0 */): int64
        
        /** Returns the length of overlap along the collision normal given a collision index (the deepest collision by default), if a collision occurred. */
        getCollisionDepth(collisionIndex?: int64 /* = 0 */): float64
    }
    /** A physics joint that attaches two 2D physics bodies at a single point, allowing them to freely rotate.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_pinjoint2d.html  
     */
    class PinJoint2D<Map extends NodePathMap = any> extends Joint2D<Map> {
        constructor(identifier?: any)
        /** The higher this value, the more the bond to the pinned partner can flex. */
        get softness(): float64
        set softness(value: float64)
        
        /** If `true`, the pin maximum and minimum rotation, defined by [member angular_limit_lower] and [member angular_limit_upper] are applied. */
        get angularLimitEnabled(): boolean
        set angularLimitEnabled(value: boolean)
        
        /** The minimum rotation. Only active if [member angular_limit_enabled] is `true`. */
        get angularLimitLower(): float64
        set angularLimitLower(value: float64)
        
        /** The maximum rotation. Only active if [member angular_limit_enabled] is `true`. */
        get angularLimitUpper(): float64
        set angularLimitUpper(value: float64)
        
        /** When activated, a motor turns the pin. */
        get motorEnabled(): boolean
        set motorEnabled(value: boolean)
        
        /** Target speed for the motor. In radians per second. */
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
    class PinJoint3D<Map extends NodePathMap = any> extends Joint3D<Map> {
        /** The force with which the pinned objects stay in positional relation to each other. The higher, the stronger. */
        static readonly PARAM_BIAS = 0
        
        /** The force with which the pinned objects stay in velocity relation to each other. The higher, the stronger. */
        static readonly PARAM_DAMPING = 1
        
        /** If above 0, this value is the maximum value for an impulse that this Joint3D produces. */
        static readonly PARAM_IMPULSE_CLAMP = 2
        constructor(identifier?: any)
        
        /** Sets the value of the specified parameter. */
        setParam(param: PinJoint3D.Param, value: float64): void
        
        /** Returns the value of the specified parameter. */
        getParam(param: PinJoint3D.Param): float64
        
        /** The force with which the pinned objects stay in positional relation to each other. The higher, the stronger. */
        get "params/bias"(): float64
        set "params/bias"(value: float64)
        
        /** The force with which the pinned objects stay in velocity relation to each other. The higher, the stronger. */
        get "params/damping"(): float64
        set "params/damping"(value: float64)
        
        /** If above 0, this value is the maximum value for an impulse that this Joint3D produces. */
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
        
        /** Number of subdivision along the X axis. */
        get subdivideWidth(): int64
        set subdivideWidth(value: int64)
        
        /** Number of subdivision along the Z axis. */
        get subdivideDepth(): int64
        set subdivideDepth(value: int64)
        
        /** Offset of the generated plane. Useful for particles. */
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
    class PointLight2D<Map extends NodePathMap = any> extends Light2D<Map> {
        constructor(identifier?: any)
        /** [Texture2D] used for the light's appearance. */
        get texture(): null | Texture2D | any /*-AnimatedTexture*/ | any /*-AtlasTexture*/ | any /*-CameraTexture*/ | any /*-CanvasTexture*/ | any /*-MeshTexture*/ | any /*-Texture2Drd*/ | any /*-ViewportTexture*/
        set texture(value: null | Texture2D | any /*-AnimatedTexture*/ | any /*-AtlasTexture*/ | any /*-CameraTexture*/ | any /*-CanvasTexture*/ | any /*-MeshTexture*/ | any /*-Texture2Drd*/ | any /*-ViewportTexture*/)
        
        /** The offset of the light's [member texture]. */
        get offset(): Vector2
        set offset(value: Vector2)
        
        /** The [member texture]'s scale factor. */
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
    class Polygon2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** Adds a bone with the specified [param path] and [param weights]. */
        addBone(path: NodePath | string, weights: PackedFloat32Array | float32[]): void
        
        /** Returns the number of bones in this [Polygon2D]. */
        getBoneCount(): int64
        
        /** Returns the path to the node associated with the specified bone. */
        getBonePath(index: int64): NodePath
        
        /** Returns the weight values of the specified bone. */
        getBoneWeights(index: int64): PackedFloat32Array
        
        /** Removes the specified bone from this [Polygon2D]. */
        eraseBone(index: int64): void
        
        /** Removes all bones from this [Polygon2D]. */
        clearBones(): void
        
        /** Sets the path to the node associated with the specified bone. */
        setBonePath(index: int64, path: NodePath | string): void
        
        /** Sets the weight values for the specified bone. */
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
        get texture(): null | Texture2D
        set texture(value: null | Texture2D)
        
        /** Amount to offset the polygon's [member texture]. If set to `Vector2(0, 0)`, the texture's origin (its top-left corner) will be placed at the polygon's position. */
        get textureOffset(): Vector2
        set textureOffset(value: Vector2)
        
        /** Amount to multiply the [member uv] coordinates when using [member texture]. Larger values make the texture smaller, and vice versa. */
        get textureScale(): Vector2
        set textureScale(value: Vector2)
        
        /** The texture's rotation in radians. */
        get textureRotation(): float64
        set textureRotation(value: float64)
        
        /** Path to a [Skeleton2D] node used for skeleton-based deformations of this polygon. If empty or invalid, skeletal deformations will not be used. */
        get skeleton(): NodePath
        set skeleton(value: NodePath | string)
        
        /** If `true`, the polygon will be inverted, containing the area outside the defined points and extending to the [member invert_border]. */
        get invertEnabled(): boolean
        set invertEnabled(value: boolean)
        
        /** Added padding applied to the bounding box when [member invert_enabled] is set to `true`. Setting this value too small may result in a "Bad Polygon" error. */
        get invertBorder(): float64
        set invertBorder(value: float64)
        
        /** The polygon's list of vertices. The final point will be connected to the first. */
        get polygon(): PackedVector2Array
        set polygon(value: PackedVector2Array | Vector2[])
        
        /** Texture coordinates for each vertex of the polygon. There should be one UV value per polygon vertex. If there are fewer, undefined vertices will use `Vector2(0, 0)`. */
        get uV(): PackedVector2Array
        set uV(value: PackedVector2Array | Vector2[])
        
        /** Color for each vertex. Colors are interpolated between vertices, resulting in smooth gradients. There should be one per polygon vertex. If there are fewer, undefined vertices will use [member color]. */
        get vertexColors(): PackedColorArray
        set vertexColors(value: PackedColorArray | Color[])
        
        /** The list of polygons, in case more than one is being represented. Every individual polygon is stored as a [PackedInt32Array] where each [int] is an index to a point in [member polygon]. If empty, this property will be ignored, and the resulting single polygon will be composed of all points in [member polygon], using the order they are stored in. */
        get polygons(): GArray
        set polygons(value: GArray)
        get bones(): GArray
        set bones(value: GArray)
        
        /** Number of internal vertices, used for UV mapping. */
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
        
        /** Returns `true` if [param point] falls inside the polygon area.  
         *    
         */
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
    class Popup<Map extends NodePathMap = any> extends Window<Map> {
        constructor(identifier?: any)
        /** Emitted when the popup is hidden. */
        readonly popupHide: Signal<() => void>
    }
    /** A modal window used to display a list of options.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_popupmenu.html  
     */
    class PopupMenu<Map extends NodePathMap = any> extends Popup<Map> {
        constructor(identifier?: any)
        /** Checks the provided [param event] against the [PopupMenu]'s shortcuts and accelerators, and activates the first item with matching events. If [param for_global_only] is `true`, only shortcuts and accelerators with `global` set to `true` will be called.  
         *  Returns `true` if an item was successfully activated.  
         *      
         *  **Note:** Certain [Control]s, such as [MenuButton], will call this method automatically.  
         */
        activateItemByEvent(event: InputEvent, forGlobalOnly?: boolean /* = false */): boolean
        
        /** Returns `true` if the system native menu is supported and currently used by this [PopupMenu]. */
        isNativeMenu(): boolean
        
        /** Adds a new item with text [param label].  
         *  An [param id] can optionally be provided, as well as an accelerator ([param accel]). If no [param id] is provided, one will be created from the index. If no [param accel] is provided, then the default value of 0 (corresponding to [constant @GlobalScope.KEY_NONE]) will be assigned to the item (which means it won't have any accelerator). See [method get_item_accelerator] for more info on accelerators.  
         *      
         *  **Note:** The provided [param id] is used only in [signal id_pressed] and [signal id_focused] signals. It's not related to the `index` arguments in e.g. [method set_item_checked].  
         */
        addItem(label: string, id?: int64 /* = -1 */, accel?: Key /* = 0 */): void
        
        /** Adds a new item with text [param label] and icon [param texture].  
         *  An [param id] can optionally be provided, as well as an accelerator ([param accel]). If no [param id] is provided, one will be created from the index. If no [param accel] is provided, then the default value of 0 (corresponding to [constant @GlobalScope.KEY_NONE]) will be assigned to the item (which means it won't have any accelerator). See [method get_item_accelerator] for more info on accelerators.  
         */
        addIconItem(texture: Texture2D, label: string, id?: int64 /* = -1 */, accel?: Key /* = 0 */): void
        
        /** Adds a new checkable item with text [param label].  
         *  An [param id] can optionally be provided, as well as an accelerator ([param accel]). If no [param id] is provided, one will be created from the index. If no [param accel] is provided, then the default value of 0 (corresponding to [constant @GlobalScope.KEY_NONE]) will be assigned to the item (which means it won't have any accelerator). See [method get_item_accelerator] for more info on accelerators.  
         *      
         *  **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method set_item_checked] for more info on how to control it.  
         */
        addCheckItem(label: string, id?: int64 /* = -1 */, accel?: Key /* = 0 */): void
        
        /** Adds a new checkable item with text [param label] and icon [param texture].  
         *  An [param id] can optionally be provided, as well as an accelerator ([param accel]). If no [param id] is provided, one will be created from the index. If no [param accel] is provided, then the default value of 0 (corresponding to [constant @GlobalScope.KEY_NONE]) will be assigned to the item (which means it won't have any accelerator). See [method get_item_accelerator] for more info on accelerators.  
         *      
         *  **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method set_item_checked] for more info on how to control it.  
         */
        addIconCheckItem(texture: Texture2D, label: string, id?: int64 /* = -1 */, accel?: Key /* = 0 */): void
        
        /** Adds a new radio check button with text [param label].  
         *  An [param id] can optionally be provided, as well as an accelerator ([param accel]). If no [param id] is provided, one will be created from the index. If no [param accel] is provided, then the default value of 0 (corresponding to [constant @GlobalScope.KEY_NONE]) will be assigned to the item (which means it won't have any accelerator). See [method get_item_accelerator] for more info on accelerators.  
         *      
         *  **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method set_item_checked] for more info on how to control it.  
         */
        addRadioCheckItem(label: string, id?: int64 /* = -1 */, accel?: Key /* = 0 */): void
        
        /** Same as [method add_icon_check_item], but uses a radio check button. */
        addIconRadioCheckItem(texture: Texture2D, label: string, id?: int64 /* = -1 */, accel?: Key /* = 0 */): void
        
        /** Adds a new multistate item with text [param label].  
         *  Contrarily to normal binary items, multistate items can have more than two states, as defined by [param max_states]. The default value is defined by [param default_state].  
         *  An [param id] can optionally be provided, as well as an accelerator ([param accel]). If no [param id] is provided, one will be created from the index. If no [param accel] is provided, then the default value of 0 (corresponding to [constant @GlobalScope.KEY_NONE]) will be assigned to the item (which means it won't have any accelerator). See [method get_item_accelerator] for more info on accelerators.  
         *    
         *      
         *  **Note:** Multistate items don't update their state automatically and must be done manually. See [method toggle_item_multistate], [method set_item_multistate] and [method get_item_multistate] for more info on how to control it.  
         */
        addMultistateItem(label: string, maxStates: int64, defaultState?: int64 /* = 0 */, id?: int64 /* = -1 */, accel?: Key /* = 0 */): void
        
        /** Adds a [Shortcut].  
         *  An [param id] can optionally be provided. If no [param id] is provided, one will be created from the index.  
         *  If [param allow_echo] is `true`, the shortcut can be activated with echo events.  
         */
        addShortcut(shortcut: Shortcut, id?: int64 /* = -1 */, global?: boolean /* = false */, allowEcho?: boolean /* = false */): void
        
        /** Adds a new item and assigns the specified [Shortcut] and icon [param texture] to it. Sets the label of the checkbox to the [Shortcut]'s name.  
         *  An [param id] can optionally be provided. If no [param id] is provided, one will be created from the index.  
         *  If [param allow_echo] is `true`, the shortcut can be activated with echo events.  
         */
        addIconShortcut(texture: Texture2D, shortcut: Shortcut, id?: int64 /* = -1 */, global?: boolean /* = false */, allowEcho?: boolean /* = false */): void
        
        /** Adds a new checkable item and assigns the specified [Shortcut] to it. Sets the label of the checkbox to the [Shortcut]'s name.  
         *  An [param id] can optionally be provided. If no [param id] is provided, one will be created from the index.  
         *      
         *  **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method set_item_checked] for more info on how to control it.  
         */
        addCheckShortcut(shortcut: Shortcut, id?: int64 /* = -1 */, global?: boolean /* = false */): void
        
        /** Adds a new checkable item and assigns the specified [Shortcut] and icon [param texture] to it. Sets the label of the checkbox to the [Shortcut]'s name.  
         *  An [param id] can optionally be provided. If no [param id] is provided, one will be created from the index.  
         *      
         *  **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method set_item_checked] for more info on how to control it.  
         */
        addIconCheckShortcut(texture: Texture2D, shortcut: Shortcut, id?: int64 /* = -1 */, global?: boolean /* = false */): void
        
        /** Adds a new radio check button and assigns a [Shortcut] to it. Sets the label of the checkbox to the [Shortcut]'s name.  
         *  An [param id] can optionally be provided. If no [param id] is provided, one will be created from the index.  
         *      
         *  **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually. See [method set_item_checked] for more info on how to control it.  
         */
        addRadioCheckShortcut(shortcut: Shortcut, id?: int64 /* = -1 */, global?: boolean /* = false */): void
        
        /** Same as [method add_icon_check_shortcut], but uses a radio check button. */
        addIconRadioCheckShortcut(texture: Texture2D, shortcut: Shortcut, id?: int64 /* = -1 */, global?: boolean /* = false */): void
        
        /** Adds an item that will act as a submenu of the parent [PopupMenu] node when clicked. The [param submenu] argument must be the name of an existing [PopupMenu] that has been added as a child to this node. This submenu will be shown when the item is clicked, hovered for long enough, or activated using the `ui_select` or `ui_right` input actions.  
         *  An [param id] can optionally be provided. If no [param id] is provided, one will be created from the index.  
         */
        addSubmenuItem(label: string, submenu: string, id?: int64 /* = -1 */): void
        
        /** Adds an item that will act as a submenu of the parent [PopupMenu] node when clicked. This submenu will be shown when the item is clicked, hovered for long enough, or activated using the `ui_select` or `ui_right` input actions.  
         *  [param submenu] must be either child of this [PopupMenu] or has no parent node (in which case it will be automatically added as a child). If the [param submenu] popup has another parent, this method will fail.  
         *  An [param id] can optionally be provided. If no [param id] is provided, one will be created from the index.  
         */
        addSubmenuNodeItem(label: string, submenu: PopupMenu, id?: int64 /* = -1 */): void
        
        /** Sets the text of the item at the given [param index]. */
        setItemText(index: int64, text: string): void
        
        /** Sets item's text base writing direction. */
        setItemTextDirection(index: int64, direction: Control.TextDirection): void
        
        /** Sets language code of item's text used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        setItemLanguage(index: int64, language: string): void
        
        /** Sets the auto translate mode of the item at the given [param index].  
         *  Items use [constant Node.AUTO_TRANSLATE_MODE_INHERIT] by default, which uses the same auto translate mode as the [PopupMenu] itself.  
         */
        setItemAutoTranslateMode(index: int64, mode: Node.AutoTranslateMode): void
        
        /** Replaces the [Texture2D] icon of the item at the given [param index]. */
        setItemIcon(index: int64, icon: Texture2D): void
        
        /** Sets the maximum allowed width of the icon for the item at the given [param index]. This limit is applied on top of the default size of the icon and on top of [theme_item icon_max_width]. The height is adjusted according to the icon's ratio. */
        setItemIconMaxWidth(index: int64, width: int64): void
        
        /** Sets a modulating [Color] of the item's icon at the given [param index]. */
        setItemIconModulate(index: int64, modulate: Color): void
        
        /** Sets the checkstate status of the item at the given [param index]. */
        setItemChecked(index: int64, checked: boolean): void
        
        /** Sets the [param id] of the item at the given [param index].  
         *  The [param id] is used in [signal id_pressed] and [signal id_focused] signals.  
         */
        setItemId(index: int64, id: int64): void
        
        /** Sets the accelerator of the item at the given [param index]. An accelerator is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. [param accel] is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` ([kbd]Ctrl + A[/kbd]). */
        setItemAccelerator(index: int64, accel: Key): void
        
        /** Sets the metadata of an item, which may be of any type. You can later get it with [method get_item_metadata], which provides a simple way of assigning context data to items. */
        setItemMetadata(index: int64, metadata: any): void
        
        /** Enables/disables the item at the given [param index]. When it is disabled, it can't be selected and its action can't be invoked. */
        setItemDisabled(index: int64, disabled: boolean): void
        
        /** Sets the submenu of the item at the given [param index]. The submenu is the name of a child [PopupMenu] node that would be shown when the item is clicked. */
        setItemSubmenu(index: int64, submenu: string): void
        
        /** Sets the submenu of the item at the given [param index]. The submenu is a [PopupMenu] node that would be shown when the item is clicked. It must either be a child of this [PopupMenu] or has no parent (in which case it will be automatically added as a child). If the [param submenu] popup has another parent, this method will fail. */
        setItemSubmenuNode(index: int64, submenu: PopupMenu): void
        
        /** Mark the item at the given [param index] as a separator, which means that it would be displayed as a line. If `false`, sets the type of the item to plain text. */
        setItemAsSeparator(index: int64, enable: boolean): void
        
        /** Sets whether the item at the given [param index] has a checkbox. If `false`, sets the type of the item to plain text.  
         *      
         *  **Note:** Checkable items just display a checkmark, but don't have any built-in checking behavior and must be checked/unchecked manually.  
         */
        setItemAsCheckable(index: int64, enable: boolean): void
        
        /** Sets the type of the item at the given [param index] to radio button. If `false`, sets the type of the item to plain text. */
        setItemAsRadioCheckable(index: int64, enable: boolean): void
        
        /** Sets the [String] tooltip of the item at the given [param index]. */
        setItemTooltip(index: int64, tooltip: string): void
        
        /** Sets a [Shortcut] for the item at the given [param index]. */
        setItemShortcut(index: int64, shortcut: Shortcut, global?: boolean /* = false */): void
        
        /** Sets the horizontal offset of the item at the given [param index]. */
        setItemIndent(index: int64, indent: int64): void
        
        /** Sets the state of a multistate item. See [method add_multistate_item] for details. */
        setItemMultistate(index: int64, state: int64): void
        
        /** Sets the max states of a multistate item. See [method add_multistate_item] for details. */
        setItemMultistateMax(index: int64, maxStates: int64): void
        
        /** Disables the [Shortcut] of the item at the given [param index]. */
        setItemShortcutDisabled(index: int64, disabled: boolean): void
        
        /** Toggles the check state of the item at the given [param index]. */
        toggleItemChecked(index: int64): void
        
        /** Cycle to the next state of a multistate item. See [method add_multistate_item] for details. */
        toggleItemMultistate(index: int64): void
        
        /** Returns the text of the item at the given [param index]. */
        getItemText(index: int64): string
        
        /** Returns item's text base writing direction. */
        getItemTextDirection(index: int64): Control.TextDirection
        
        /** Returns item's text language code. */
        getItemLanguage(index: int64): string
        
        /** Returns the auto translate mode of the item at the given [param index]. */
        getItemAutoTranslateMode(index: int64): Node.AutoTranslateMode
        
        /** Returns the icon of the item at the given [param index]. */
        getItemIcon(index: int64): null | Texture2D
        
        /** Returns the maximum allowed width of the icon for the item at the given [param index]. */
        getItemIconMaxWidth(index: int64): int64
        
        /** Returns a [Color] modulating the item's icon at the given [param index]. */
        getItemIconModulate(index: int64): Color
        
        /** Returns `true` if the item at the given [param index] is checked. */
        isItemChecked(index: int64): boolean
        
        /** Returns the ID of the item at the given [param index]. `id` can be manually assigned, while index can not. */
        getItemId(index: int64): int64
        
        /** Returns the index of the item containing the specified [param id]. Index is automatically assigned to each item by the engine and can not be set manually. */
        getItemIndex(id: int64): int64
        
        /** Returns the accelerator of the item at the given [param index]. An accelerator is a keyboard shortcut that can be pressed to trigger the menu button even if it's not currently open. The return value is an integer which is generally a combination of [enum KeyModifierMask]s and [enum Key]s using bitwise OR such as `KEY_MASK_CTRL | KEY_A` ([kbd]Ctrl + A[/kbd]). If no accelerator is defined for the specified [param index], [method get_item_accelerator] returns `0` (corresponding to [constant @GlobalScope.KEY_NONE]). */
        getItemAccelerator(index: int64): Key
        
        /** Returns the metadata of the specified item, which might be of any type. You can set it with [method set_item_metadata], which provides a simple way of assigning context data to items. */
        getItemMetadata(index: int64): any
        
        /** Returns `true` if the item at the given [param index] is disabled. When it is disabled it can't be selected, or its action invoked.  
         *  See [method set_item_disabled] for more info on how to disable an item.  
         */
        isItemDisabled(index: int64): boolean
        
        /** Returns the submenu name of the item at the given [param index]. See [method add_submenu_item] for more info on how to add a submenu. */
        getItemSubmenu(index: int64): string
        
        /** Returns the submenu of the item at the given [param index], or `null` if no submenu was added. See [method add_submenu_node_item] for more info on how to add a submenu. */
        getItemSubmenuNode(index: int64): null | PopupMenu
        
        /** Returns `true` if the item is a separator. If it is, it will be displayed as a line. See [method add_separator] for more info on how to add a separator. */
        isItemSeparator(index: int64): boolean
        
        /** Returns `true` if the item at the given [param index] is checkable in some way, i.e. if it has a checkbox or radio button.  
         *      
         *  **Note:** Checkable items just display a checkmark or radio button, but don't have any built-in checking behavior and must be checked/unchecked manually.  
         */
        isItemCheckable(index: int64): boolean
        
        /** Returns `true` if the item at the given [param index] has radio button-style checkability.  
         *      
         *  **Note:** This is purely cosmetic; you must add the logic for checking/unchecking items in radio groups.  
         */
        isItemRadioCheckable(index: int64): boolean
        
        /** Returns `true` if the specified item's shortcut is disabled. */
        isItemShortcutDisabled(index: int64): boolean
        
        /** Returns the tooltip associated with the item at the given [param index]. */
        getItemTooltip(index: int64): string
        
        /** Returns the [Shortcut] associated with the item at the given [param index]. */
        getItemShortcut(index: int64): null | Shortcut
        
        /** Returns the horizontal offset of the item at the given [param index]. */
        getItemIndent(index: int64): int64
        
        /** Returns the max states of the item at the given [param index]. */
        getItemMultistateMax(index: int64): int64
        
        /** Returns the state of the item at the given [param index]. */
        getItemMultistate(index: int64): int64
        
        /** Sets the currently focused item as the given [param index].  
         *  Passing `-1` as the index makes so that no item is focused.  
         */
        setFocusedItem(index: int64): void
        
        /** Returns the index of the currently focused item. Returns `-1` if no item is focused. */
        getFocusedItem(): int64
        
        /** Moves the scroll view to make the item at the given [param index] visible. */
        scrollToItem(index: int64): void
        
        /** Removes the item at the given [param index] from the menu.  
         *      
         *  **Note:** The indices of items after the removed item will be shifted by one.  
         */
        removeItem(index: int64): void
        
        /** Adds a separator between items. Separators also occupy an index, which you can set by using the [param id] parameter.  
         *  A [param label] can optionally be provided, which will appear at the center of the separator.  
         */
        addSeparator(label?: string /* = '' */, id?: int64 /* = -1 */): void
        
        /** Removes all items from the [PopupMenu]. If [param free_submenus] is `true`, the submenu nodes are automatically freed. */
        clear(freeSubmenus?: boolean /* = false */): void
        
        /** Returns `true` if the menu is bound to the special system menu. */
        isSystemMenu(): boolean
        
        /** If `true`, hides the [PopupMenu] when an item is selected. */
        get hideOnItemSelection(): boolean
        set hideOnItemSelection(value: boolean)
        
        /** If `true`, hides the [PopupMenu] when a checkbox or radio button is selected. */
        get hideOnCheckableItemSelection(): boolean
        set hideOnCheckableItemSelection(value: boolean)
        
        /** If `true`, hides the [PopupMenu] when a state item is selected. */
        get hideOnStateItemSelection(): boolean
        set hideOnStateItemSelection(value: boolean)
        
        /** Sets the delay time in seconds for the submenu item to popup on mouse hovering. If the popup menu is added as a child of another (acting as a submenu), it will inherit the delay time of the parent menu item. */
        get submenuPopupDelay(): float64
        set submenuPopupDelay(value: float64)
        
        /** If `true`, allows navigating [PopupMenu] with letter keys. */
        get allowSearch(): boolean
        set allowSearch(value: boolean)
        
        /** If set to one of the values of [enum NativeMenu.SystemMenus], this [PopupMenu] is bound to the special system menu. Only one [PopupMenu] can be bound to each special menu at a time. */
        get systemMenuId(): int64
        set systemMenuId(value: int64)
        
        /** If `true`, [MenuBar] will use native menu when supported.  
         *      
         *  **Note:** If [PopupMenu] is linked to [StatusIndicator], [MenuBar], or another [PopupMenu] item it can use native menu regardless of this property, use [method is_native_menu] to check it.  
         */
        get preferNativeMenu(): boolean
        set preferNativeMenu(value: boolean)
        
        /** The number of items currently in the list. */
        get itemCount(): any /*Items,item_*/
        set itemCount(value: any /*Items,item_*/)
        
        /** Emitted when an item of some [param id] is pressed or its accelerator is activated.  
         *      
         *  **Note:** If [param id] is negative (either explicitly or due to overflow), this will return the corresponding index instead.  
         */
        readonly idPressed: Signal<(id: int64) => void>
        
        /** Emitted when the user navigated to an item of some [param id] using the [member ProjectSettings.input/ui_up] or [member ProjectSettings.input/ui_down] input action. */
        readonly idFocused: Signal<(id: int64) => void>
        
        /** Emitted when an item of some [param index] is pressed or its accelerator is activated. */
        readonly indexPressed: Signal<(index: int64) => void>
        
        /** Emitted when any item is added, modified or removed. */
        readonly menuChanged: Signal<() => void>
    }
    /** A popup with a panel background.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_popuppanel.html  
     */
    class PopupPanel<Map extends NodePathMap = any> extends Popup<Map> {
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
            CompressionModeAstc = 6,
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
        static readonly COMPRESSION_MODE_ASTC = 6
        constructor(identifier?: any)
        
        /** Initializes the compressed texture from a base image. The compression mode must be provided.  
         *  [param normal_map] is recommended to ensure optimum quality if this image will be used as a normal map.  
         *  If lossy compression is requested, the quality setting can optionally be provided. This maps to Lossy WebP compression quality.  
         */
        createFromImage(image: Image, compressionMode: PortableCompressedTexture2D.CompressionMode, normalMap?: boolean /* = false */, lossyQuality?: float64 /* = 0.8 */): void
        
        /** Return the image format used (valid after initialized). */
        getFormat(): Image.Format
        
        /** Return the compression mode used (valid after initialized). */
        getCompressionMode(): PortableCompressedTexture2D.CompressionMode
        
        /** Sets the compressor parameters for Basis Universal compression. See also the settings in [ResourceImporterTexture].  
         *      
         *  **Note:** This must be set before [method create_from_image] to take effect.  
         */
        setBasisuCompressorParams(uastcLevel: int64, rdoQualityLoss: float64): void
        
        /** Overrides the flag globally for all textures of this type. This is used primarily by the editor. */
        static setKeepAllCompressedBuffers(keep: boolean): void
        
        /** Return whether the flag is overridden for all textures of this type. */
        static isKeepingAllCompressedBuffers(): boolean
        get _data(): PackedByteArray
        set _data(value: PackedByteArray | byte[] | ArrayBuffer)
        
        /** Allow overriding the texture size (for 2D only). */
        get sizeOverride(): Vector2
        set sizeOverride(value: Vector2)
        
        /** When running on the editor, this class will keep the source compressed data in memory. Otherwise, the source compressed data is lost after loading and the resource can't be re saved.  
         *  This flag allows to keep the compressed data in memory if you intend it to persist after loading.  
         *      
         *  **Note:** This must be set before [method create_from_image] to take effect.  
         */
        get keepCompressedBuffer(): boolean
        set keepCompressedBuffer(value: boolean)
    }
    /** Base class for all primitive meshes. Handles applying a [Material] to a primitive mesh.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_primitivemesh.html  
     */
    class PrimitiveMesh extends Mesh {
        constructor(identifier?: any)
        /** Override this method to customize how this primitive mesh should be generated. Should return an [Array] where each element is another Array of values required for the mesh (see the [enum Mesh.ArrayType] constants). */
        /* gdvirtual */ _createMeshArray(): GArray
        
        /** Returns the mesh arrays used to make up the surface of this primitive mesh.  
         *  **Example:** Pass the result to [method ArrayMesh.add_surface_from_arrays] to create a new surface:  
         *    
         */
        getMeshArrays(): GArray
        
        /** Request an update of this primitive mesh based on its properties. */
        requestUpdate(): void
        
        /** The current [Material] of the primitive mesh. */
        get material(): null | BaseMaterial3D | ShaderMaterial
        set material(value: null | BaseMaterial3D | ShaderMaterial)
        
        /** Overrides the [AABB] with one defined by user for use with frustum culling. Especially useful to avoid unexpected culling when using a shader to offset vertices. */
        get customAabb(): Aabb
        set customAabb(value: Aabb)
        
        /** If `true`, the order of the vertices in each triangle is reversed, resulting in the backside of the mesh being drawn.  
         *  This gives the same result as using [constant BaseMaterial3D.CULL_FRONT] in [member BaseMaterial3D.cull_mode].  
         */
        get flipFaces(): boolean
        set flipFaces(value: boolean)
        
        /** If set, generates UV2 UV coordinates applying a padding using the [member uv2_padding] setting. UV2 is needed for lightmapping. */
        get addUV2(): boolean
        set addUV2(value: boolean)
        
        /** If [member add_uv2] is set, specifies the padding in pixels applied along seams of the mesh. Lower padding values allow making better use of the lightmap texture (resulting in higher texel density), but may introduce visible lightmap bleeding along edges.  
         *  If the size of the lightmap texture can't be determined when generating the mesh, UV2 is calculated assuming a texture size of 1024x1024.  
         */
        get uV2Padding(): float64
        set uV2Padding(value: float64)
    }
    /** Class representing a prism-shaped [PrimitiveMesh].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_prismmesh.html  
     */
    class PrismMesh extends PrimitiveMesh {
        constructor(identifier?: any)
        /** Displacement of the upper edge along the X axis. 0.0 positions edge straight above the bottom-left edge. */
        get leftToRight(): float64
        set leftToRight(value: float64)
        
        /** Size of the prism. */
        get size(): Vector3
        set size(value: Vector3)
        
        /** Number of added edge loops along the X axis. */
        get subdivideWidth(): int64
        set subdivideWidth(value: int64)
        
        /** Number of added edge loops along the Y axis. */
        get subdivideHeight(): int64
        set subdivideHeight(value: int64)
        
        /** Number of added edge loops along the Z axis. */
        get subdivideDepth(): int64
        set subdivideDepth(value: int64)
    }
    /** A material that defines a simple sky for a [Sky] resource.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_proceduralskymaterial.html  
     */
    class ProceduralSkyMaterial extends Material {
        constructor(identifier?: any)
        /** Color of the sky at the top. Blends with [member sky_horizon_color]. */
        get skyTopColor(): Color
        set skyTopColor(value: Color)
        
        /** Color of the sky at the horizon. Blends with [member sky_top_color]. */
        get skyHorizonColor(): Color
        set skyHorizonColor(value: Color)
        
        /** How quickly the [member sky_horizon_color] fades into the [member sky_top_color]. */
        get skyCurve(): float64
        set skyCurve(value: float64)
        
        /** Multiplier for sky color. A higher value will make the sky brighter. */
        get skyEnergyMultiplier(): float64
        set skyEnergyMultiplier(value: float64)
        
        /** The sky cover texture to use. This texture must use an equirectangular projection (similar to [PanoramaSkyMaterial]). The texture's colors will be  *added*  to the existing sky color, and will be multiplied by [member sky_energy_multiplier] and [member sky_cover_modulate]. This is mainly suited to displaying stars at night, but it can also be used to display clouds at day or night (with a non-physically-accurate look). */
        get skyCover(): null | Texture2D
        set skyCover(value: null | Texture2D)
        
        /** The tint to apply to the [member sky_cover] texture. This can be used to change the sky cover's colors or opacity independently of the sky energy, which is useful for day/night or weather transitions. Only effective if a texture is defined in [member sky_cover]. */
        get skyCoverModulate(): Color
        set skyCoverModulate(value: Color)
        
        /** Color of the ground at the bottom. Blends with [member ground_horizon_color]. */
        get groundBottomColor(): Color
        set groundBottomColor(value: Color)
        
        /** Color of the ground at the horizon. Blends with [member ground_bottom_color]. */
        get groundHorizonColor(): Color
        set groundHorizonColor(value: Color)
        
        /** How quickly the [member ground_horizon_color] fades into the [member ground_bottom_color]. */
        get groundCurve(): float64
        set groundCurve(value: float64)
        
        /** Multiplier for ground color. A higher value will make the ground brighter. */
        get groundEnergyMultiplier(): float64
        set groundEnergyMultiplier(value: float64)
        
        /** Distance from center of sun where it fades out completely. */
        get sunAngleMax(): float64
        set sunAngleMax(value: float64)
        
        /** How quickly the sun fades away between the edge of the sun disk and [member sun_angle_max]. */
        get sunCurve(): float64
        set sunCurve(value: float64)
        
        /** If `true`, enables debanding. Debanding adds a small amount of noise which helps reduce banding that appears from the smooth changes in color in the sky. */
        get useDebanding(): boolean
        set useDebanding(value: boolean)
        
        /** The sky's overall brightness multiplier. Higher values result in a brighter sky. */
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
    class ProgressBar<Map extends NodePathMap = any> extends Range<Map> {
        /** The progress bar fills from begin to end horizontally, according to the language direction. If [method Control.is_layout_rtl] returns `false`, it fills from left to right, and if it returns `true`, it fills from right to left. */
        static readonly FILL_BEGIN_TO_END = 0
        
        /** The progress bar fills from end to begin horizontally, according to the language direction. If [method Control.is_layout_rtl] returns `false`, it fills from right to left, and if it returns `true`, it fills from left to right. */
        static readonly FILL_END_TO_BEGIN = 1
        
        /** The progress fills from top to bottom. */
        static readonly FILL_TOP_TO_BOTTOM = 2
        
        /** The progress fills from bottom to top. */
        static readonly FILL_BOTTOM_TO_TOP = 3
        constructor(identifier?: any)
        
        /** The fill direction. See [enum FillMode] for possible values. */
        get fillMode(): int64
        set fillMode(value: int64)
        
        /** If `true`, the fill percentage is displayed on the bar. */
        get showPercentage(): boolean
        set showPercentage(value: boolean)
        
        /** When set to `true`, the progress bar indicates that something is happening with an animation, but does not show the fill percentage or value. */
        get indeterminate(): boolean
        set indeterminate(value: boolean)
        
        /** If `false`, the [member indeterminate] animation will be paused in the editor. */
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
        from(value: any): null | PropertyTweener
        
        /** Makes the [PropertyTweener] use the current property value (i.e. at the time of creating this [PropertyTweener]) as a starting point. This is equivalent of using [method from] with the current value. These two calls will do the same:  
         *    
         */
        fromCurrent(): null | PropertyTweener
        
        /** When called, the final value will be used as a relative value instead.  
         *  **Example:** Move the node by `100` pixels to the right.  
         *    
         */
        asRelative(): null | PropertyTweener
        
        /** Sets the type of used transition from [enum Tween.TransitionType]. If not set, the default transition is used from the [Tween] that contains this Tweener. */
        setTrans(trans: Tween.TransitionType): null | PropertyTweener
        
        /** Sets the type of used easing from [enum Tween.EaseType]. If not set, the default easing is used from the [Tween] that contains this Tweener. */
        setEase(ease: Tween.EaseType): null | PropertyTweener
        
        /** Allows interpolating the value with a custom easing function. The provided [param interpolator_method] will be called with a value ranging from `0.0` to `1.0` and is expected to return a value within the same range (values outside the range can be used for overshoot). The return value of the method is then used for interpolation between initial and final value. Note that the parameter passed to the method is still subject to the tweener's own easing.  
         *    
         */
        setCustomInterpolator(interpolatorMethod: Callable): null | PropertyTweener
        
        /** Sets the time in seconds after which the [PropertyTweener] will start interpolating. By default there's no delay. */
        setDelay(delay: float64): null | PropertyTweener
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
        
        /** The attachment's usage flags, which determine what can be done with it. */
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
        
        /** Color attachments in order starting from 0. If this attachment is not used by the shader, pass ATTACHMENT_UNUSED to skip. */
        get colorAttachments(): PackedInt32Array
        set colorAttachments(value: PackedInt32Array | int32[])
        
        /** Used for multipass framebuffers (more than one render pass). Converts an attachment to an input. Make sure to also supply it properly in the [RDUniform] for the uniform set. */
        get inputAttachments(): PackedInt32Array
        set inputAttachments(value: PackedInt32Array | int32[])
        
        /** If the color attachments are multisampled, non-multisampled resolve attachments can be provided. */
        get resolveAttachments(): PackedInt32Array
        set resolveAttachments(value: PackedInt32Array | int32[])
        
        /** Attachments to preserve in this pass (otherwise they are erased). */
        get preserveAttachments(): PackedInt32Array
        set preserveAttachments(value: PackedInt32Array | int32[])
        
        /** Depth attachment. ATTACHMENT_UNUSED should be used if no depth buffer is required for this pass. */
        get depthAttachment(): int64
        set depthAttachment(value: int64)
    }
    /** Pipeline color blend state (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_rdpipelinecolorblendstate.html  
     */
    class RDPipelineColorBlendState extends RefCounted {
        constructor(identifier?: any)
        /** If `true`, performs the logic operation defined in [member logic_op]. */
        get enableLogicOp(): boolean
        set enableLogicOp(value: boolean)
        
        /** The logic operation to perform for blending. Only effective if [member enable_logic_op] is `true`. */
        get logicOp(): int64
        set logicOp(value: int64)
        
        /** The constant color to blend with. See also [method RenderingDevice.draw_list_set_blend_constants]. */
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
        /** Convenience method to perform standard mix blending with straight (non-premultiplied) alpha. This sets [member enable_blend] to `true`, [member src_color_blend_factor] to [constant RenderingDevice.BLEND_FACTOR_SRC_ALPHA], [member dst_color_blend_factor] to [constant RenderingDevice.BLEND_FACTOR_ONE_MINUS_SRC_ALPHA], [member src_alpha_blend_factor] to [constant RenderingDevice.BLEND_FACTOR_SRC_ALPHA] and [member dst_alpha_blend_factor] to [constant RenderingDevice.BLEND_FACTOR_ONE_MINUS_SRC_ALPHA]. */
        setAsMix(): void
        
        /** If `true`, performs blending between the source and destination according to the factors defined in [member src_color_blend_factor], [member dst_color_blend_factor], [member src_alpha_blend_factor] and [member dst_alpha_blend_factor]. The blend modes [member color_blend_op] and [member alpha_blend_op] are also taken into account, with [member write_r], [member write_g], [member write_b] and [member write_a] controlling the output. */
        get enableBlend(): boolean
        set enableBlend(value: boolean)
        
        /** Controls how the blend factor for the color channels is determined based on the source's fragments. */
        get srcColorBlendFactor(): int64
        set srcColorBlendFactor(value: int64)
        
        /** Controls how the blend factor for the color channels is determined based on the destination's fragments. */
        get dstColorBlendFactor(): int64
        set dstColorBlendFactor(value: int64)
        
        /** The blend mode to use for the red/green/blue color channels. */
        get colorBlendOp(): int64
        set colorBlendOp(value: int64)
        
        /** Controls how the blend factor for the alpha channel is determined based on the source's fragments. */
        get srcAlphaBlendFactor(): int64
        set srcAlphaBlendFactor(value: int64)
        
        /** Controls how the blend factor for the alpha channel is determined based on the destination's fragments. */
        get dstAlphaBlendFactor(): int64
        set dstAlphaBlendFactor(value: int64)
        
        /** The blend mode to use for the alpha channel. */
        get alphaBlendOp(): int64
        set alphaBlendOp(value: int64)
        
        /** If `true`, writes the new red color channel to the final result. */
        get writeR(): boolean
        set writeR(value: boolean)
        
        /** If `true`, writes the new green color channel to the final result. */
        get writeG(): boolean
        set writeG(value: boolean)
        
        /** If `true`, writes the new blue color channel to the final result. */
        get writeB(): boolean
        set writeB(value: boolean)
        
        /** If `true`, writes the new alpha channel to the final result. */
        get writeA(): boolean
        set writeA(value: boolean)
    }
    /** Pipeline depth/stencil state (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_rdpipelinedepthstencilstate.html  
     */
    class RDPipelineDepthStencilState extends RefCounted {
        constructor(identifier?: any)
        /** If `true`, enables depth testing which allows objects to be automatically occluded by other objects based on their depth. This also allows objects to be partially occluded by other objects. If `false`, objects will appear in the order they were drawn (like in Godot's 2D renderer). */
        get enableDepthTest(): boolean
        set enableDepthTest(value: boolean)
        
        /** If `true`, writes to the depth buffer whenever the depth test returns `true`. Only works when enable_depth_test is also `true`. */
        get enableDepthWrite(): boolean
        set enableDepthWrite(value: boolean)
        
        /** The method used for comparing the previous and current depth values. */
        get depthCompareOperator(): int64
        set depthCompareOperator(value: int64)
        
        /** If `true`, each depth value will be tested to see if it is between [member depth_range_min] and [member depth_range_max]. If it is outside of these values, it is discarded. */
        get enableDepthRange(): boolean
        set enableDepthRange(value: boolean)
        
        /** The minimum depth that returns `true` for [member enable_depth_range]. */
        get depthRangeMin(): float64
        set depthRangeMin(value: float64)
        
        /** The maximum depth that returns `true` for [member enable_depth_range]. */
        get depthRangeMax(): float64
        set depthRangeMax(value: float64)
        
        /** If `true`, enables stencil testing. There are separate stencil buffers for front-facing triangles and back-facing triangles. See properties that begin with "front_op" and properties with "back_op" for each. */
        get enableStencil(): boolean
        set enableStencil(value: boolean)
        
        /** The operation to perform on the stencil buffer for front pixels that fail the stencil test. */
        get frontOpFail(): int64
        set frontOpFail(value: int64)
        
        /** The operation to perform on the stencil buffer for front pixels that pass the stencil test. */
        get frontOpPass(): int64
        set frontOpPass(value: int64)
        
        /** The operation to perform on the stencil buffer for front pixels that pass the stencil test but fail the depth test. */
        get frontOpDepthFail(): int64
        set frontOpDepthFail(value: int64)
        
        /** The method used for comparing the previous front stencil value and [member front_op_reference]. */
        get frontOpCompare(): int64
        set frontOpCompare(value: int64)
        
        /** Selects which bits from the front stencil value will be compared. */
        get frontOpCompareMask(): int64
        set frontOpCompareMask(value: int64)
        
        /** Selects which bits from the front stencil value will be changed. */
        get frontOpWriteMask(): int64
        set frontOpWriteMask(value: int64)
        
        /** The value the previous front stencil value will be compared to. */
        get frontOpReference(): int64
        set frontOpReference(value: int64)
        
        /** The operation to perform on the stencil buffer for back pixels that fail the stencil test. */
        get backOpFail(): int64
        set backOpFail(value: int64)
        
        /** The operation to perform on the stencil buffer for back pixels that pass the stencil test. */
        get backOpPass(): int64
        set backOpPass(value: int64)
        
        /** The operation to perform on the stencil buffer for back pixels that pass the stencil test but fail the depth test. */
        get backOpDepthFail(): int64
        set backOpDepthFail(value: int64)
        
        /** The method used for comparing the previous back stencil value and [member back_op_reference]. */
        get backOpCompare(): int64
        set backOpCompare(value: int64)
        
        /** Selects which bits from the back stencil value will be compared. */
        get backOpCompareMask(): int64
        set backOpCompareMask(value: int64)
        
        /** Selects which bits from the back stencil value will be changed. */
        get backOpWriteMask(): int64
        set backOpWriteMask(value: int64)
        
        /** The value the previous back stencil value will be compared to. */
        get backOpReference(): int64
        set backOpReference(value: int64)
    }
    /** Pipeline multisample state (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_rdpipelinemultisamplestate.html  
     */
    class RDPipelineMultisampleState extends RefCounted {
        constructor(identifier?: any)
        /** The number of MSAA samples (or SSAA samples if [member enable_sample_shading] is `true`) to perform. Higher values result in better antialiasing, at the cost of performance. */
        get sampleCount(): int64
        set sampleCount(value: int64)
        
        /** If `true`, enables per-sample shading which replaces MSAA by SSAA. This provides higher quality antialiasing that works with transparent (alpha scissor) edges. This has a very high performance cost. See also [member min_sample_shading]. See the [url=https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#primsrast-sampleshading]per-sample shading Vulkan documentation[/url] for more details. */
        get enableSampleShading(): boolean
        set enableSampleShading(value: boolean)
        
        /** The multiplier of [member sample_count] that determines how many samples are performed for each fragment. Must be between `0.0` and `1.0` (inclusive). Only effective if [member enable_sample_shading] is `true`. If [member min_sample_shading] is `1.0`, fragment invocation must only read from the coverage index sample. Tile image access must not be used if [member enable_sample_shading] is  *not*  `1.0`. */
        get minSampleShading(): float64
        set minSampleShading(value: float64)
        
        /** If `true`, alpha to coverage is enabled. This generates a temporary coverage value based on the alpha component of the fragment's first color output. This allows alpha transparency to make use of multisample antialiasing. */
        get enableAlphaToCoverage(): boolean
        set enableAlphaToCoverage(value: boolean)
        
        /** If `true`, alpha is forced to either `0.0` or `1.0`. This allows hardening the edges of antialiased alpha transparencies. Only relevant if [member enable_alpha_to_coverage] is `true`. */
        get enableAlphaToOne(): boolean
        set enableAlphaToOne(value: boolean)
        
        /** The sample mask array. See the [url=https://registry.khronos.org/vulkan/specs/1.3-extensions/html/vkspec.html#fragops-samplemask]sample mask Vulkan documentation[/url] for more details. */
        get sampleMasks(): GArray
        set sampleMasks(value: GArray)
    }
    /** Pipeline rasterization state (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_rdpipelinerasterizationstate.html  
     */
    class RDPipelineRasterizationState extends RefCounted {
        constructor(identifier?: any)
        /** If `true`, clamps depth values according to the minimum and maximum depth of the associated viewport. */
        get enableDepthClamp(): boolean
        set enableDepthClamp(value: boolean)
        
        /** If `true`, primitives are discarded immediately before the rasterization stage. */
        get discardPrimitives(): boolean
        set discardPrimitives(value: boolean)
        
        /** If `true`, performs wireframe rendering for triangles instead of flat or textured rendering. */
        get wireframe(): boolean
        set wireframe(value: boolean)
        
        /** The cull mode to use when drawing polygons, which determines whether front faces or backfaces are hidden. */
        get cullMode(): int64
        set cullMode(value: int64)
        
        /** The winding order to use to determine which face of a triangle is considered its front face. */
        get frontFace(): int64
        set frontFace(value: int64)
        
        /** If `true`, each generated depth value will by offset by some amount. The specific amount is generated per polygon based on the values of [member depth_bias_slope_factor] and [member depth_bias_constant_factor]. */
        get depthBiasEnabled(): boolean
        set depthBiasEnabled(value: boolean)
        
        /** A constant offset added to each depth value. Applied after [member depth_bias_slope_factor]. */
        get depthBiasConstantFactor(): float64
        set depthBiasConstantFactor(value: float64)
        
        /** A limit for how much each depth value can be offset. If negative, it serves as a minimum value, but if positive, it serves as a maximum value. */
        get depthBiasClamp(): float64
        set depthBiasClamp(value: float64)
        
        /** A constant scale applied to the slope of each polygons' depth. Applied before [member depth_bias_constant_factor]. */
        get depthBiasSlopeFactor(): float64
        set depthBiasSlopeFactor(value: float64)
        
        /** The line width to use when drawing lines (in pixels). Thick lines may not be supported on all hardware. */
        get lineWidth(): float64
        set lineWidth(value: float64)
        
        /** The number of control points to use when drawing a patch with tessellation enabled. Higher values result in higher quality at the cost of performance. */
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
        
        /** The identifier of the specialization constant. This is a value starting from `0` and that increments for every different specialization constant for a given shader. */
        get constantId(): int64
        set constantId(value: int64)
    }
    /** Sampler state (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_rdsamplerstate.html  
     */
    class RDSamplerState extends RefCounted {
        constructor(identifier?: any)
        /** The sampler's magnification filter. It is the filtering method used when sampling texels that appear bigger than on-screen pixels. */
        get magFilter(): int64
        set magFilter(value: int64)
        
        /** The sampler's minification filter. It is the filtering method used when sampling texels that appear smaller than on-screen pixels. */
        get minFilter(): int64
        set minFilter(value: int64)
        
        /** The filtering method to use for mipmaps. */
        get mipFilter(): int64
        set mipFilter(value: int64)
        
        /** The repeat mode to use along the U axis of UV coordinates. This affects the returned values if sampling outside the UV bounds. */
        get repeatU(): int64
        set repeatU(value: int64)
        
        /** The repeat mode to use along the V axis of UV coordinates. This affects the returned values if sampling outside the UV bounds. */
        get repeatV(): int64
        set repeatV(value: int64)
        
        /** The repeat mode to use along the W axis of UV coordinates. This affects the returned values if sampling outside the UV bounds. Only effective for 3D samplers. */
        get repeatW(): int64
        set repeatW(value: int64)
        
        /** The mipmap LOD bias to use. Positive values will make the sampler blurrier at a given distance, while negative values will make the sampler sharper at a given distance (at the risk of looking grainy). Recommended values are between `-0.5` and `0.0`. Only effective if the sampler has mipmaps available. */
        get lodBias(): float64
        set lodBias(value: float64)
        
        /** If `true`, perform anisotropic sampling. See [member anisotropy_max]. */
        get useAnisotropy(): boolean
        set useAnisotropy(value: boolean)
        
        /** Maximum anisotropy that can be used when sampling. Only effective if [member use_anisotropy] is `true`. Higher values result in a sharper sampler at oblique angles, at the cost of performance (due to memory bandwidth). This value may be limited by the graphics hardware in use. Most graphics hardware only supports values up to `16.0`.  
         *  If [member anisotropy_max] is `1.0`, forcibly disables anisotropy even if [member use_anisotropy] is `true`.  
         */
        get anisotropyMax(): float64
        set anisotropyMax(value: float64)
        
        /** If `true`, returned values will be based on the comparison operation defined in [member compare_op]. This is a hardware-based approach and is therefore faster than performing this manually in a shader. For example, compare operations are used for shadow map rendering by comparing depth values from a shadow sampler. */
        get enableCompare(): boolean
        set enableCompare(value: boolean)
        
        /** The compare operation to use. Only effective if [member enable_compare] is `true`. */
        get compareOp(): int64
        set compareOp(value: int64)
        
        /** The minimum mipmap LOD bias to display (highest resolution). Only effective if the sampler has mipmaps available. */
        get minLod(): float64
        set minLod(value: float64)
        
        /** The maximum mipmap LOD bias to display (lowest resolution). Only effective if the sampler has mipmaps available. */
        get maxLod(): float64
        set maxLod(value: float64)
        
        /** The border color that will be returned when sampling outside the sampler's bounds and the [member repeat_u], [member repeat_v] or [member repeat_w] modes have repeating disabled. */
        get borderColor(): int64
        set borderColor(value: int64)
        
        /** If `true`, the texture will be sampled with coordinates ranging from 0 to the texture's resolution. Otherwise, the coordinates will be normalized and range from 0 to 1. */
        get unnormalizedUvw(): boolean
        set unnormalizedUvw(value: boolean)
    }
    /** Compiled shader file in SPIR-V form (used by [RenderingDevice]). Not to be confused with Godot's own [Shader].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_rdshaderfile.html  
     */
    class RDShaderFile extends Resource {
        constructor(identifier?: any)
        /** Sets the SPIR-V [param bytecode] that will be compiled for the specified [param version]. */
        setBytecode(bytecode: RDShaderSpirV, version?: StringName /* = '' */): void
        
        /** Returns the SPIR-V intermediate representation for the specified shader [param version]. */
        getSpirV(version?: StringName /* = '' */): null | RDShaderSpirV
        
        /** Returns the list of compiled versions for this shader. */
        getVersionList(): GArray
        get _versions(): GDictionary
        set _versions(value: GDictionary)
        
        /** The base compilation error message, which indicates errors not related to a specific shader stage if non-empty. If empty, shader compilation is not necessarily successful (check [RDShaderSPIRV]'s error message members). */
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
        /** Sets [param source] code for the specified shader [param stage]. Equivalent to setting one of [member source_compute], [member source_fragment], [member source_tesselation_control], [member source_tesselation_evaluation] or [member source_vertex].  
         *      
         *  **Note:** If you set the compute shader source code using this method directly, remember to remove the Godot-specific hint `#[compute]`.  
         */
        setStageSource(stage: RenderingDevice.ShaderStage, source: string): void
        
        /** Returns source code for the specified shader [param stage]. Equivalent to getting one of [member source_compute], [member source_fragment], [member source_tesselation_control], [member source_tesselation_evaluation] or [member source_vertex]. */
        getStageSource(stage: RenderingDevice.ShaderStage): string
        
        /** Source code for the shader's vertex stage. */
        get sourceVertex(): string
        set sourceVertex(value: string)
        
        /** Source code for the shader's fragment stage. */
        get sourceFragment(): string
        set sourceFragment(value: string)
        
        /** Source code for the shader's tessellation control stage. */
        get sourceTesselationControl(): string
        set sourceTesselationControl(value: string)
        
        /** Source code for the shader's tessellation evaluation stage. */
        get sourceTesselationEvaluation(): string
        set sourceTesselationEvaluation(value: string)
        
        /** Source code for the shader's compute stage. */
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
        /** Adds [param format] as a valid format for the corresponding [RDTextureView]'s [member RDTextureView.format_override] property. If any format is added as shareable, then the main [member format] must also be added. */
        addShareableFormat(format: RenderingDevice.DataFormat): void
        
        /** Removes [param format] from the list of valid formats that the corresponding [RDTextureView]'s [member RDTextureView.format_override] property can be set to. */
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
        
        /** The number of layers in the texture. Only relevant for 2D texture arrays. */
        get arrayLayers(): int64
        set arrayLayers(value: int64)
        
        /** The number of mipmaps available in the texture. */
        get mipmaps(): int64
        set mipmaps(value: int64)
        
        /** The texture type. */
        get textureType(): int64
        set textureType(value: int64)
        
        /** The number of samples used when sampling the texture. */
        get samples(): int64
        set samples(value: int64)
        
        /** The texture's usage bits, which determine what can be done using the texture. */
        get usageBits(): int64
        set usageBits(value: int64)
        
        /** The texture will be used as the destination of a resolve operation. */
        get isResolveBuffer(): boolean
        set isResolveBuffer(value: boolean)
        
        /** If a texture is discardable, its contents do not need to be preserved between frames. This flag is only relevant when the texture is used as target in a draw list.  
         *  This information is used by [RenderingDevice] to figure out if a texture's contents can be discarded, eliminating unnecessary writes to memory and boosting performance.  
         */
        get isDiscardable(): boolean
        set isDiscardable(value: boolean)
    }
    /** Texture view (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_rdtextureview.html  
     */
    class RDTextureView extends RefCounted {
        constructor(identifier?: any)
        /** Optional override for the data format to return sampled values in. The corresponding [RDTextureFormat] must have had this added as a shareable format. The default value of [constant RenderingDevice.DATA_FORMAT_MAX] does not override the format. */
        get formatOverride(): int64
        set formatOverride(value: int64)
        
        /** The channel to sample when sampling the red color channel. */
        get swizzleR(): int64
        set swizzleR(value: int64)
        
        /** The channel to sample when sampling the green color channel. */
        get swizzleG(): int64
        set swizzleG(value: int64)
        
        /** The channel to sample when sampling the blue color channel. */
        get swizzleB(): int64
        set swizzleB(value: int64)
        
        /** The channel to sample when sampling the alpha channel. */
        get swizzleA(): int64
        set swizzleA(value: int64)
    }
    /** Shader uniform (used by [RenderingDevice]).  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_rduniform.html  
     */
    class RDUniform extends RefCounted {
        constructor(identifier?: any)
        /** Binds the given id to the uniform. The data associated with the id is then used when the uniform is passed to a shader. */
        addId(id: Rid): void
        
        /** Unbinds all ids currently bound to the uniform. */
        clearIds(): void
        
        /** The uniform's data type. */
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
        randfn(mean?: float64 /* = 0 */, deviation?: float64 /* = 1 */): float64
        
        /** Returns a pseudo-random float between [param from] and [param to] (inclusive). */
        randfRange(from: float64, to: float64): float64
        
        /** Returns a pseudo-random 32-bit signed integer between [param from] and [param to] (inclusive). */
        randiRange(from: int64, to: int64): int64
        
        /** Returns a random index with non-uniform weights. Prints an error and returns `-1` if the array is empty.  
         *    
         */
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
         *  **Note:** The default value of this property is pseudo-random, and changes when calling [method randomize]. The `0` value documented here is a placeholder, and not the actual default state.  
         */
        get state(): int64
        set state(value: int64)
    }
    /** Abstract base class for controls that represent a number within a range.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_range.html  
     */
    class Range<Map extends NodePathMap = any> extends Control<Map> {
        constructor(identifier?: any)
        /** Called when the [Range]'s value is changed (following the same conditions as [signal value_changed]). */
        /* gdvirtual */ _valueChanged(newValue: float64): void
        
        /** Sets the [Range]'s current value to the specified [param value], without emitting the [signal value_changed] signal. */
        setValueNoSignal(value: float64): void
        
        /** Binds two [Range]s together along with any ranges previously grouped with either of them. When any of range's member variables change, it will share the new value with all other ranges in its group. */
        share(with_: Node): void
        
        /** Stops the [Range] from sharing its member variables with any other. */
        unshare(): void
        
        /** Minimum value. Range is clamped if [member value] is less than [member min_value]. */
        get minValue(): float64
        set minValue(value: float64)
        
        /** Maximum value. Range is clamped if [member value] is greater than [member max_value]. */
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
        
        /** If `true`, and [member min_value] is greater or equal to `0`, [member value] will be represented exponentially rather than linearly. */
        get expEdit(): boolean
        set expEdit(value: boolean)
        
        /** If `true`, [member value] will always be rounded to the nearest integer. */
        get rounded(): boolean
        set rounded(value: boolean)
        
        /** If `true`, [member value] may be greater than [member max_value]. */
        get allowGreater(): boolean
        set allowGreater(value: boolean)
        
        /** If `true`, [member value] may be less than [member min_value]. */
        get allowLesser(): boolean
        set allowLesser(value: boolean)
        
        /** Emitted when [member value] changes. When used on a [Slider], this is called continuously while dragging (potentially every frame). If you are performing an expensive operation in a function connected to [signal value_changed], consider using a  *debouncing*  [Timer] to call the function less often.  
         *      
         *  **Note:** Unlike signals such as [signal LineEdit.text_changed], [signal value_changed] is also emitted when [param value] is set directly via code.  
         */
        readonly valueChanged: Signal<(value: float64) => void>
        
        /** Emitted when [member min_value], [member max_value], [member page], or [member step] change. */
        readonly changed: Signal<() => void>
    }
    /** A ray in 2D space, used to find the first [CollisionObject2D] it intersects.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_raycast2d.html  
     */
    class RayCast2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** Returns whether any object is intersecting with the ray's vector (considering the vector length). */
        isColliding(): boolean
        
        /** Updates the collision information for the ray immediately, without waiting for the next `_physics_process` call. Use this method, for example, when the ray or its parent has changed state.  
         *      
         *  **Note:** [member enabled] does not need to be `true` for this to work.  
         */
        forceRaycastUpdate(): void
        
        /** Returns the first object that the ray intersects, or `null` if no object is intersecting the ray (i.e. [method is_colliding] returns `false`). */
        getCollider(): null | GObject
        
        /** Returns the [RID] of the first object that the ray intersects, or an empty [RID] if no object is intersecting the ray (i.e. [method is_colliding] returns `false`). */
        getColliderRid(): Rid
        
        /** Returns the shape ID of the first object that the ray intersects, or `0` if no object is intersecting the ray (i.e. [method is_colliding] returns `false`).  
         *  To get the intersected shape node, for a [CollisionObject2D] target, use:  
         *    
         */
        getColliderShape(): int64
        
        /** Returns the collision point at which the ray intersects the closest object, in the global coordinate system. If [member hit_from_inside] is `true` and the ray starts inside of a collision shape, this function will return the origin point of the ray.  
         *      
         *  **Note:** Check that [method is_colliding] returns `true` before calling this method to ensure the returned point is valid and up-to-date.  
         */
        getCollisionPoint(): Vector2
        
        /** Returns the normal of the intersecting object's shape at the collision point, or `Vector2(0, 0)` if the ray starts inside the shape and [member hit_from_inside] is `true`.  
         *      
         *  **Note:** Check that [method is_colliding] returns `true` before calling this method to ensure the returned normal is valid and up-to-date.  
         */
        getCollisionNormal(): Vector2
        
        /** Adds a collision exception so the ray does not report collisions with the specified [RID]. */
        addExceptionRid(rid: Rid): void
        
        /** Adds a collision exception so the ray does not report collisions with the specified [CollisionObject2D] node. */
        addException(node: CollisionObject2D): void
        
        /** Removes a collision exception so the ray does report collisions with the specified [RID]. */
        removeExceptionRid(rid: Rid): void
        
        /** Removes a collision exception so the ray does report collisions with the specified [CollisionObject2D] node. */
        removeException(node: CollisionObject2D): void
        
        /** Removes all collision exceptions for this ray. */
        clearExceptions(): void
        
        /** Based on [param value], enables or disables the specified layer in the [member collision_mask], given a [param layer_number] between 1 and 32. */
        setCollisionMaskValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member collision_mask] is enabled, given a [param layer_number] between 1 and 32. */
        getCollisionMaskValue(layerNumber: int64): boolean
        
        /** If `true`, collisions will be reported. */
        get enabled(): boolean
        set enabled(value: boolean)
        
        /** If `true`, the parent node will be excluded from collision detection. */
        get excludeParent(): boolean
        set excludeParent(value: boolean)
        
        /** The ray's destination point, relative to the RayCast's `position`. */
        get targetPosition(): Vector2
        set targetPosition(value: Vector2)
        
        /** The ray's collision mask. Only objects in at least one collision layer enabled in the mask will be detected. See [url=https://docs.godotengine.org/en/latest/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        get collisionMask(): int64
        set collisionMask(value: int64)
        
        /** If `true`, the ray will detect a hit when starting inside shapes. In this case the collision normal will be `Vector2(0, 0)`. Does not affect concave polygon shapes. */
        get hitFromInside(): boolean
        set hitFromInside(value: boolean)
        
        /** If `true`, collisions with [Area2D]s will be reported. */
        get collideWithAreas(): boolean
        set collideWithAreas(value: boolean)
        
        /** If `true`, collisions with [PhysicsBody2D]s will be reported. */
        get collideWithBodies(): boolean
        set collideWithBodies(value: boolean)
    }
    /** A ray in 3D space, used to find the first object it intersects.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_raycast3d.html  
     */
    class RayCast3D<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        /** Returns whether any object is intersecting with the ray's vector (considering the vector length). */
        isColliding(): boolean
        
        /** Updates the collision information for the ray immediately, without waiting for the next `_physics_process` call. Use this method, for example, when the ray or its parent has changed state.  
         *      
         *  **Note:** [member enabled] does not need to be `true` for this to work.  
         */
        forceRaycastUpdate(): void
        
        /** Returns the first object that the ray intersects, or `null` if no object is intersecting the ray (i.e. [method is_colliding] returns `false`).  
         *      
         *  **Note:** This object is not guaranteed to be a [CollisionObject3D]. For example, if the ray intersects a [CSGShape3D] or a [GridMap], the method will return a [CSGShape3D] or [GridMap] instance.  
         */
        getCollider(): null | GObject
        
        /** Returns the [RID] of the first object that the ray intersects, or an empty [RID] if no object is intersecting the ray (i.e. [method is_colliding] returns `false`). */
        getColliderRid(): Rid
        
        /** Returns the shape ID of the first object that the ray intersects, or `0` if no object is intersecting the ray (i.e. [method is_colliding] returns `false`).  
         *  To get the intersected shape node, for a [CollisionObject3D] target, use:  
         *    
         */
        getColliderShape(): int64
        
        /** Returns the collision point at which the ray intersects the closest object, in the global coordinate system. If [member hit_from_inside] is `true` and the ray starts inside of a collision shape, this function will return the origin point of the ray.  
         *      
         *  **Note:** Check that [method is_colliding] returns `true` before calling this method to ensure the returned point is valid and up-to-date.  
         */
        getCollisionPoint(): Vector3
        
        /** Returns the normal of the intersecting object's shape at the collision point, or `Vector3(0, 0, 0)` if the ray starts inside the shape and [member hit_from_inside] is `true`.  
         *      
         *  **Note:** Check that [method is_colliding] returns `true` before calling this method to ensure the returned normal is valid and up-to-date.  
         */
        getCollisionNormal(): Vector3
        
        /** Returns the collision object's face index at the collision point, or `-1` if the shape intersecting the ray is not a [ConcavePolygonShape3D]. */
        getCollisionFaceIndex(): int64
        
        /** Adds a collision exception so the ray does not report collisions with the specified [RID]. */
        addExceptionRid(rid: Rid): void
        
        /** Adds a collision exception so the ray does not report collisions with the specified [CollisionObject3D] node. */
        addException(node: CollisionObject3D): void
        
        /** Removes a collision exception so the ray does report collisions with the specified [RID]. */
        removeExceptionRid(rid: Rid): void
        
        /** Removes a collision exception so the ray does report collisions with the specified [CollisionObject3D] node. */
        removeException(node: CollisionObject3D): void
        
        /** Removes all collision exceptions for this ray. */
        clearExceptions(): void
        
        /** Based on [param value], enables or disables the specified layer in the [member collision_mask], given a [param layer_number] between 1 and 32. */
        setCollisionMaskValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member collision_mask] is enabled, given a [param layer_number] between 1 and 32. */
        getCollisionMaskValue(layerNumber: int64): boolean
        
        /** If `true`, collisions will be reported. */
        get enabled(): boolean
        set enabled(value: boolean)
        
        /** If `true`, collisions will be ignored for this RayCast3D's immediate parent. */
        get excludeParent(): boolean
        set excludeParent(value: boolean)
        
        /** The ray's destination point, relative to the RayCast's `position`. */
        get targetPosition(): Vector3
        set targetPosition(value: Vector3)
        
        /** The ray's collision mask. Only objects in at least one collision layer enabled in the mask will be detected. See [url=https://docs.godotengine.org/en/latest/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        get collisionMask(): int64
        set collisionMask(value: int64)
        
        /** If `true`, the ray will detect a hit when starting inside shapes. In this case the collision normal will be `Vector3(0, 0, 0)`. Does not affect shapes with no volume like concave polygon or heightmap. */
        get hitFromInside(): boolean
        set hitFromInside(value: boolean)
        
        /** If `true`, the ray will hit back faces with concave polygon shapes with back face enabled or heightmap shapes. */
        get hitBackFaces(): boolean
        set hitBackFaces(value: boolean)
        
        /** If `true`, collisions with [Area3D]s will be reported. */
        get collideWithAreas(): boolean
        set collideWithAreas(value: boolean)
        
        /** If `true`, collisions with [PhysicsBody3D]s will be reported. */
        get collideWithBodies(): boolean
        set collideWithBodies(value: boolean)
        
        /** The custom color to use to draw the shape in the editor and at run-time if **Visible Collision Shapes** is enabled in the **Debug** menu. This color will be highlighted at run-time if the [RayCast3D] is colliding with something.  
         *  If set to `Color(0.0, 0.0, 0.0)` (by default), the color set in [member ProjectSettings.debug/shapes/collision/shape_color] is used.  
         */
        get debugShapeCustomColor(): Color
        set debugShapeCustomColor(value: Color)
        
        /** If set to `1`, a line is used as the debug shape. Otherwise, a truncated pyramid is drawn to represent the [RayCast3D]. Requires **Visible Collision Shapes** to be enabled in the **Debug** menu for the debug shape to be visible at run-time. */
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
        /** Initializes the internal reference counter. Use this only if you really know what you are doing.  
         *  Returns whether the initialization was successful.  
         */
        initRef(): boolean
        
        /** Increments the internal reference counter. Use this only if you really know what you are doing.  
         *  Returns `true` if the increment was successful, `false` otherwise.  
         */
        reference(): boolean
        
        /** Decrements the internal reference counter. Use this only if you really know what you are doing.  
         *  Returns `true` if the object should be freed after the decrement, `false` otherwise.  
         */
        unreference(): boolean
        
        /** Returns the current reference count. */
        getReferenceCount(): int64
    }
    /** A rectangle hint for designing UIs.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_referencerect.html  
     */
    class ReferenceRect<Map extends NodePathMap = any> extends Control<Map> {
        constructor(identifier?: any)
        /** Sets the border color of the [ReferenceRect]. */
        get borderColor(): Color
        set borderColor(value: Color)
        
        /** Sets the border width of the [ReferenceRect]. The border grows both inwards and outwards with respect to the rectangle box. */
        get borderWidth(): float64
        set borderWidth(value: float64)
        
        /** If `true`, the [ReferenceRect] will only be visible while in editor. Otherwise, [ReferenceRect] will be visible in the running project. */
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
    class ReflectionProbe<Map extends NodePathMap = any> extends VisualInstance3D<Map> {
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
        
        /** Sets how frequently the [ReflectionProbe] is updated. Can be [constant UPDATE_ONCE] or [constant UPDATE_ALWAYS]. */
        get updateMode(): int64
        set updateMode(value: int64)
        
        /** Defines the reflection intensity. Intensity modulates the strength of the reflection. */
        get intensity(): float64
        set intensity(value: float64)
        
        /** Defines the distance in meters over which a probe blends into the scene. */
        get blendDistance(): float64
        set blendDistance(value: float64)
        
        /** The maximum distance away from the [ReflectionProbe] an object can be before it is culled. Decrease this to improve performance, especially when using the [constant UPDATE_ALWAYS] [member update_mode].  
         *      
         *  **Note:** The maximum reflection distance is always at least equal to the probe's extents. This means that decreasing [member max_distance] will not always cull objects from reflections, especially if the reflection probe's box defined by its [member size] is already large.  
         */
        get maxDistance(): float64
        set maxDistance(value: float64)
        
        /** The size of the reflection probe. The larger the size, the more space covered by the probe, which will lower the perceived resolution. It is best to keep the size only as large as you need it.  
         *      
         *  **Note:** To better fit areas that are not aligned to the grid, you can rotate the [ReflectionProbe] node.  
         */
        get size(): Vector3
        set size(value: Vector3)
        
        /** Sets the origin offset to be used when this [ReflectionProbe] is in [member box_projection] mode. This can be set to a non-zero value to ensure a reflection fits a rectangle-shaped room, while reducing the number of objects that "get in the way" of the reflection. */
        get originOffset(): Vector3
        set originOffset(value: Vector3)
        
        /** If `true`, enables box projection. This makes reflections look more correct in rectangle-shaped rooms by offsetting the reflection center depending on the camera's location.  
         *      
         *  **Note:** To better fit rectangle-shaped rooms that are not aligned to the grid, you can rotate the [ReflectionProbe] node.  
         */
        get boxProjection(): boolean
        set boxProjection(value: boolean)
        
        /** If `true`, reflections will ignore sky contribution. */
        get interior(): boolean
        set interior(value: boolean)
        
        /** If `true`, computes shadows in the reflection probe. This makes the reflection probe slower to render; you may want to disable this if using the [constant UPDATE_ALWAYS] [member update_mode]. */
        get enableShadows(): boolean
        set enableShadows(value: boolean)
        
        /** Sets the cull mask which determines what objects are drawn by this probe. Every [VisualInstance3D] with a layer included in this cull mask will be rendered by the probe. It is best to only include large objects which are likely to take up a lot of space in the reflection in order to save on rendering cost.  
         *  This can also be used to prevent an object from reflecting upon itself (for instance, a [ReflectionProbe] centered on a vehicle).  
         */
        get cullMask(): int64
        set cullMask(value: int64)
        
        /** Sets the reflection mask which determines what objects have reflections applied from this probe. Every [VisualInstance3D] with a layer included in this reflection mask will have reflections applied from this probe. See also [member cull_mask], which can be used to exclude objects from appearing in the reflection while still making them affected by the [ReflectionProbe]. */
        get reflectionMask(): int64
        set reflectionMask(value: int64)
        
        /** The automatic LOD bias to use for meshes rendered within the [ReflectionProbe] (this is analog to [member Viewport.mesh_lod_threshold]). Higher values will use less detailed versions of meshes that have LOD variations generated. If set to `0.0`, automatic LOD is disabled. Increase [member mesh_lod_threshold] to improve performance at the cost of geometry detail, especially when using the [constant UPDATE_ALWAYS] [member update_mode].  
         *      
         *  **Note:** [member mesh_lod_threshold] does not affect [GeometryInstance3D] visibility ranges (also known as "manual" LOD or hierarchical LOD).  
         */
        get meshLodThreshold(): float64
        set meshLodThreshold(value: float64)
        
        /** The ambient color to use within the [ReflectionProbe]'s box defined by its [member size]. The ambient color will smoothly blend with other [ReflectionProbe]s and the rest of the scene (outside the [ReflectionProbe]'s box defined by its [member size]). */
        get ambientMode(): int64
        set ambientMode(value: int64)
        
        /** The custom ambient color to use within the [ReflectionProbe]'s box defined by its [member size]. Only effective if [member ambient_mode] is [constant AMBIENT_COLOR]. */
        get ambientColor(): Color
        set ambientColor(value: Color)
        
        /** The custom ambient color energy to use within the [ReflectionProbe]'s box defined by its [member size]. Only effective if [member ambient_mode] is [constant AMBIENT_COLOR]. */
        get ambientColorEnergy(): float64
        set ambientColorEnergy(value: float64)
    }
    /** Class for searching text for patterns using regular expressions.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_regex.html  
     */
    class RegEx extends RefCounted {
        constructor(identifier?: any)
        /** Creates and compiles a new [RegEx] object. See also [method compile]. */
        static createFromString(pattern: string, showError?: boolean /* = true */): RegEx
        
        /** This method resets the state of the object, as if it was freshly created. Namely, it unassigns the regular expression of this object. */
        clear(): void
        
        /** Compiles and assign the search pattern to use. Returns [constant OK] if the compilation is successful. If compilation fails, returns [constant FAILED] and when [param show_error] is `true`, details are printed to standard output. */
        compile(pattern: string, showError?: boolean /* = true */): GError
        
        /** Searches the text for the compiled pattern. Returns a [RegExMatch] container of the first matching result if found, otherwise `null`.  
         *  The region to search within can be specified with [param offset] and [param end]. This is useful when searching for another match in the same [param subject] by calling this method again after a previous success. Note that setting these parameters differs from passing over a shortened string. For example, the start anchor `^` is not affected by [param offset], and the character before [param offset] will be checked for the word boundary `\b`.  
         */
        search(subject: string, offset?: int64 /* = 0 */, end?: int64 /* = -1 */): null | RegExMatch
        
        /** Searches the text for the compiled pattern. Returns an array of [RegExMatch] containers for each non-overlapping result. If no results were found, an empty array is returned instead.  
         *  The region to search within can be specified with [param offset] and [param end]. This is useful when searching for another match in the same [param subject] by calling this method again after a previous success. Note that setting these parameters differs from passing over a shortened string. For example, the start anchor `^` is not affected by [param offset], and the character before [param offset] will be checked for the word boundary `\b`.  
         */
        searchAll(subject: string, offset?: int64 /* = 0 */, end?: int64 /* = -1 */): GArray
        
        /** Searches the text for the compiled pattern and replaces it with the specified string. Escapes and backreferences such as `$1` and `$name` are expanded and resolved. By default, only the first instance is replaced, but it can be changed for all instances (global replacement).  
         *  The region to search within can be specified with [param offset] and [param end]. This is useful when searching for another match in the same [param subject] by calling this method again after a previous success. Note that setting these parameters differs from passing over a shortened string. For example, the start anchor `^` is not affected by [param offset], and the character before [param offset] will be checked for the word boundary `\b`.  
         */
        sub(subject: string, replacement: string, all?: boolean /* = false */, offset?: int64 /* = 0 */, end?: int64 /* = -1 */): string
        
        /** Returns whether this object has a valid search pattern assigned. */
        isValid(): boolean
        
        /** Returns the original search pattern that was compiled. */
        getPattern(): string
        
        /** Returns the number of capturing groups in compiled pattern. */
        getGroupCount(): int64
        
        /** Returns an array of names of named capturing groups in the compiled pattern. They are ordered by appearance. */
        getNames(): PackedStringArray
    }
    /** Contains the results of a [RegEx] search.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_regexmatch.html  
     */
    class RegExMatch extends RefCounted {
        constructor(identifier?: any)
        /** Returns the number of capturing groups. */
        getGroupCount(): int64
        
        /** Returns the substring of the match from the source string. Capturing groups can be retrieved by providing its group number as an integer or its string name (if it's a named group). The default value of 0 refers to the whole pattern.  
         *  Returns an empty string if the group did not match or doesn't exist.  
         */
        getString(name?: any /* = <any> {} */): string
        
        /** Returns the starting position of the match within the source string. The starting position of capturing groups can be retrieved by providing its group number as an integer or its string name (if it's a named group). The default value of 0 refers to the whole pattern.  
         *  Returns -1 if the group did not match or doesn't exist.  
         */
        getStart(name?: any /* = <any> {} */): int64
        
        /** Returns the end position of the match within the source string. The end position of capturing groups can be retrieved by providing its group number as an integer or its string name (if it's a named group). The default value of 0 refers to the whole pattern.  
         *  Returns -1 if the group did not match or doesn't exist.  
         */
        getEnd(name?: any /* = <any> {} */): int64
        
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
    class RemoteTransform2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** [RemoteTransform2D] caches the remote node. It may not notice if the remote node disappears; [method force_update_cache] forces it to update the cache again. */
        forceUpdateCache(): void
        
        /** The [NodePath] to the remote node, relative to the RemoteTransform2D's position in the scene. */
        get remotePath(): NodePath
        set remotePath(value: NodePath | string)
        
        /** If `true`, global coordinates are used. If `false`, local coordinates are used. */
        get useGlobalCoordinates(): boolean
        set useGlobalCoordinates(value: boolean)
        
        /** If `true`, the remote node's position is updated. */
        get updatePosition(): boolean
        set updatePosition(value: boolean)
        
        /** If `true`, the remote node's rotation is updated. */
        get updateRotation(): boolean
        set updateRotation(value: boolean)
        
        /** If `true`, the remote node's scale is updated. */
        get updateScale(): boolean
        set updateScale(value: boolean)
    }
    /** RemoteTransform3D pushes its own [Transform3D] to another [Node3D] derived Node in the scene.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_remotetransform3d.html  
     */
    class RemoteTransform3D<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        /** [RemoteTransform3D] caches the remote node. It may not notice if the remote node disappears; [method force_update_cache] forces it to update the cache again. */
        forceUpdateCache(): void
        
        /** The [NodePath] to the remote node, relative to the RemoteTransform3D's position in the scene. */
        get remotePath(): NodePath
        set remotePath(value: NodePath | string)
        
        /** If `true`, global coordinates are used. If `false`, local coordinates are used. */
        get useGlobalCoordinates(): boolean
        set useGlobalCoordinates(value: boolean)
        
        /** If `true`, the remote node's position is updated. */
        get updatePosition(): boolean
        set updatePosition(value: boolean)
        
        /** If `true`, the remote node's rotation is updated. */
        get updateRotation(): boolean
        set updateRotation(value: boolean)
        
        /** If `true`, the remote node's scale is updated. */
        get updateScale(): boolean
        set updateScale(value: boolean)
    }
    /** Abstract render data object, holds frame data related to rendering a single frame of a viewport.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_renderdata.html  
     */
    class RenderData extends GObject {
        constructor(identifier?: any)
        /** Returns the [RenderSceneBuffers] object managing the scene buffers for rendering this viewport. */
        getRenderSceneBuffers(): null | RenderSceneBuffers
        
        /** Returns the [RenderSceneData] object managing this frames scene data. */
        getRenderSceneData(): null | RenderSceneData
        
        /** Returns the [RID] of the environment object in the [RenderingServer] being used to render this viewport. */
        getEnvironment(): Rid
        
        /** Returns the [RID] of the camera attributes object in the [RenderingServer] being used to render this viewport. */
        getCameraAttributes(): Rid
    }
    /** This class allows for a RenderData implementation to be made in GDExtension.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_renderdataextension.html  
     */
    class RenderDataExtension extends RenderData {
        constructor(identifier?: any)
        /** Implement this in GDExtension to return the implementation's [RenderSceneBuffers] object. */
        /* gdvirtual */ _getRenderSceneBuffers(): null | RenderSceneBuffers
        
        /** Implement this in GDExtension to return the implementation's [RenderSceneDataExtension] object. */
        /* gdvirtual */ _getRenderSceneData(): null | RenderSceneData
        
        /** Implement this in GDExtension to return the [RID] of the implementation's environment object. */
        /* gdvirtual */ _getEnvironment(): Rid
        
        /** Implement this in GDExtension to return the [RID] for the implementation's camera attributes object. */
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
        /** The render target associated with these buffer. */
        get renderTarget(): Rid
        set renderTarget(value: Rid)
        
        /** The size of the 3D render buffer used for rendering. */
        get internalSize(): Vector2I
        set internalSize(value: Vector2I)
        
        /** The target (upscale) size if scaling is used. */
        get targetSize(): Vector2I
        set targetSize(value: Vector2I)
        
        /** The number of views we're rendering. */
        get viewCount(): int64
        set viewCount(value: int64)
        
        /** The requested scaling mode with which we upscale/downscale if [member internal_size] and [member target_size] are not equal. */
        get scaling3DMode(): int64
        set scaling3DMode(value: int64)
        
        /** The MSAA mode we're using for 3D rendering. */
        get msaa3D(): int64
        set msaa3D(value: int64)
        
        /** The requested screen space AA applied in post processing. */
        get screenSpaceAA(): int64
        set screenSpaceAA(value: int64)
        
        /** FSR Sharpness applicable if FSR upscaling is used. */
        get fsrSharpness(): boolean
        set fsrSharpness(value: boolean)
        
        /** Bias applied to mipmaps. */
        get textureMipmapBias(): boolean
        set textureMipmapBias(value: boolean)
        
        /** Level of the anisotropic filter. */
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
        
        /** Implement this in GDExtension to record a new FSR sharpness value. */
        /* gdvirtual */ _setFsrSharpness(fsrSharpness: float64): void
        
        /** Implement this in GDExtension to change the texture mipmap bias. */
        /* gdvirtual */ _setTextureMipmapBias(textureMipmapBias: float64): void
        
        /** Implement this in GDExtension to change the anisotropic filtering level. */
        /* gdvirtual */ _setAnisotropicFilteringLevel(anisotropicFilteringLevel: int64): void
        
        /** Implement this in GDExtension to react to the debanding flag changing. */
        /* gdvirtual */ _setUseDebanding(useDebanding: boolean): void
    }
    /** Render scene buffer implementation for the RenderingDevice based renderers.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_renderscenebuffersrd.html  
     */
    class RenderSceneBuffersRD extends RenderSceneBuffers {
        constructor(identifier?: any)
        /** Returns `true` if a cached texture exists for this name. */
        hasTexture(context: StringName, name: StringName): boolean
        
        /** Create a new texture with the given definition and cache this under the given name. Will return the existing texture if it already exists. */
        createTexture(context: StringName, name: StringName, dataFormat: RenderingDevice.DataFormat, usageBits: int64, textureSamples: RenderingDevice.TextureSamples, size: Vector2I, layers: int64, mipmaps: int64, unique: boolean, discardable: boolean): Rid
        
        /** Create a new texture using the given format and view and cache this under the given name. Will return the existing texture if it already exists. */
        createTextureFromFormat(context: StringName, name: StringName, format: RDTextureFormat, view: RDTextureView, unique: boolean): Rid
        
        /** Create a new texture view for an existing texture and cache this under the given [param view_name]. Will return the existing texture view if it already exists. Will error if the source texture doesn't exist. */
        createTextureView(context: StringName, name: StringName, viewName: StringName, view: RDTextureView): Rid
        
        /** Returns a cached texture with this name. */
        getTexture(context: StringName, name: StringName): Rid
        
        /** Returns the texture format information with which a cached texture was created. */
        getTextureFormat(context: StringName, name: StringName): null | RDTextureFormat
        
        /** Returns a specific slice (layer or mipmap) for a cached texture. */
        getTextureSlice(context: StringName, name: StringName, layer: int64, mipmap: int64, layers: int64, mipmaps: int64): Rid
        
        /** Returns a specific view of a slice (layer or mipmap) for a cached texture. */
        getTextureSliceView(context: StringName, name: StringName, layer: int64, mipmap: int64, layers: int64, mipmaps: int64, view: RDTextureView): Rid
        
        /** Returns the texture size of a given slice of a cached texture. */
        getTextureSliceSize(context: StringName, name: StringName, mipmap: int64): Vector2I
        
        /** Frees all buffers related to this context. */
        clearContext(context: StringName): void
        
        /** Returns the color texture we are rendering 3D content to. If multiview is used this will be a texture array with all views.  
         *  If [param msaa] is `true` and MSAA is enabled, this returns the MSAA variant of the buffer.  
         */
        getColorTexture(msaa?: boolean /* = false */): Rid
        
        /** Returns the specified layer from the color texture we are rendering 3D content to.  
         *  If [param msaa] is `true` and MSAA is enabled, this returns the MSAA variant of the buffer.  
         */
        getColorLayer(layer: int64, msaa?: boolean /* = false */): Rid
        
        /** Returns the depth texture we are rendering 3D content to. If multiview is used this will be a texture array with all views.  
         *  If [param msaa] is `true` and MSAA is enabled, this returns the MSAA variant of the buffer.  
         */
        getDepthTexture(msaa?: boolean /* = false */): Rid
        
        /** Returns the specified layer from the depth texture we are rendering 3D content to.  
         *  If [param msaa] is `true` and MSAA is enabled, this returns the MSAA variant of the buffer.  
         */
        getDepthLayer(layer: int64, msaa?: boolean /* = false */): Rid
        
        /** Returns the velocity texture we are rendering 3D content to. If multiview is used this will be a texture array with all views.  
         *  If [param msaa] is **true** and MSAA is enabled, this returns the MSAA variant of the buffer.  
         */
        getVelocityTexture(msaa?: boolean /* = false */): Rid
        
        /** Returns the specified layer from the velocity texture we are rendering 3D content to. */
        getVelocityLayer(layer: int64, msaa?: boolean /* = false */): Rid
        
        /** Returns the render target associated with this buffers object. */
        getRenderTarget(): Rid
        
        /** Returns the view count for the associated viewport. */
        getViewCount(): int64
        
        /** Returns the internal size of the render buffer (size before upscaling) with which textures are created by default. */
        getInternalSize(): Vector2I
        
        /** Returns the target size of the render buffer (size after upscaling). */
        getTargetSize(): Vector2I
        
        /** Returns the scaling mode used for upscaling. */
        getScaling3DMode(): RenderingServer.ViewportScaling3DMode
        
        /** Returns the FSR sharpness value used while rendering the 3D content (if [method get_scaling_3d_mode] is an FSR mode). */
        getFsrSharpness(): float64
        
        /** Returns the applied 3D MSAA mode for this viewport. */
        getMsaa3D(): RenderingServer.ViewportMsaa
        
        /** Returns the number of MSAA samples used. */
        getTextureSamples(): RenderingDevice.TextureSamples
        
        /** Returns the screen-space antialiasing method applied. */
        getScreenSpaceAA(): RenderingServer.ViewportScreenSpaceAA
        
        /** Returns `true` if TAA is enabled. */
        getUseTaa(): boolean
        
        /** Returns `true` if debanding is enabled. */
        getUseDebanding(): boolean
    }
    /** Abstract render data object, holds scene data related to rendering a single frame of a viewport.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_renderscenedata.html  
     */
    class RenderSceneData extends GObject {
        constructor(identifier?: any)
        /** Returns the camera transform used to render this frame.  
         *      
         *  **Note:** If more than one view is rendered, this will return a centered transform.  
         */
        getCamTransform(): Transform3D
        
        /** Returns the camera projection used to render this frame.  
         *      
         *  **Note:** If more than one view is rendered, this will return a combined projection.  
         */
        getCamProjection(): Projection
        
        /** Returns the number of views being rendered. */
        getViewCount(): int64
        
        /** Returns the eye offset per view used to render this frame. This is the offset between our camera transform and the eye transform. */
        getViewEyeOffset(view: int64): Vector3
        
        /** Returns the view projection per view used to render this frame.  
         *      
         *  **Note:** If a single view is rendered, this returns the camera projection. If more than one view is rendered, this will return a projection for the given view including the eye offset.  
         */
        getViewProjection(view: int64): Projection
        
        /** Return the [RID] of the uniform buffer containing the scene data as a UBO. */
        getUniformBuffer(): Rid
    }
    /** This class allows for a RenderSceneData implementation to be made in GDExtension.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_renderscenedataextension.html  
     */
    class RenderSceneDataExtension extends RenderSceneData {
        constructor(identifier?: any)
        /** Implement this in GDExtension to return the camera [Transform3D]. */
        /* gdvirtual */ _getCamTransform(): Transform3D
        
        /** Implement this in GDExtension to return the camera [Projection]. */
        /* gdvirtual */ _getCamProjection(): Projection
        
        /** Implement this in GDExtension to return the view count. */
        /* gdvirtual */ _getViewCount(): int64
        
        /** Implement this in GDExtension to return the eye offset for the given [param view]. */
        /* gdvirtual */ _getViewEyeOffset(view: int64): Vector3
        
        /** Implement this in GDExtension to return the view [Projection] for the given [param view]. */
        /* gdvirtual */ _getViewProjection(view: int64): Projection
        
        /** Implement this in GDExtension to return the [RID] of the uniform buffer containing the scene data as a UBO. */
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
            DataFormatAstc4X4SfloatBlock = 218,
            DataFormatAstc5X4SfloatBlock = 219,
            DataFormatAstc5X5SfloatBlock = 220,
            DataFormatAstc6X5SfloatBlock = 221,
            DataFormatAstc6X6SfloatBlock = 222,
            DataFormatAstc8X5SfloatBlock = 223,
            DataFormatAstc8X6SfloatBlock = 224,
            DataFormatAstc8X8SfloatBlock = 225,
            DataFormatAstc10X5SfloatBlock = 226,
            DataFormatAstc10X6SfloatBlock = 227,
            DataFormatAstc10X8SfloatBlock = 228,
            DataFormatAstc10X10SfloatBlock = 229,
            DataFormatAstc12X10SfloatBlock = 230,
            DataFormatAstc12X12SfloatBlock = 231,
            DataFormatMax = 232,
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
            SupportsMetalfxSpatial = 3,
            SupportsMetalfxTemporal = 4,
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
        
        /** 8-bit-per-channel unsigned floating-point red/green/blue channel data format with normalized value and non-linear sRGB encoding. Values are in the `[0.0, 1.0]` range. */
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
        static readonly DATA_FORMAT_ASTC_4x4_SFLOAT_BLOCK = 218
        static readonly DATA_FORMAT_ASTC_5x4_SFLOAT_BLOCK = 219
        static readonly DATA_FORMAT_ASTC_5x5_SFLOAT_BLOCK = 220
        static readonly DATA_FORMAT_ASTC_6x5_SFLOAT_BLOCK = 221
        static readonly DATA_FORMAT_ASTC_6x6_SFLOAT_BLOCK = 222
        static readonly DATA_FORMAT_ASTC_8x5_SFLOAT_BLOCK = 223
        static readonly DATA_FORMAT_ASTC_8x6_SFLOAT_BLOCK = 224
        static readonly DATA_FORMAT_ASTC_8x8_SFLOAT_BLOCK = 225
        static readonly DATA_FORMAT_ASTC_10x5_SFLOAT_BLOCK = 226
        static readonly DATA_FORMAT_ASTC_10x6_SFLOAT_BLOCK = 227
        static readonly DATA_FORMAT_ASTC_10x8_SFLOAT_BLOCK = 228
        static readonly DATA_FORMAT_ASTC_10x10_SFLOAT_BLOCK = 229
        static readonly DATA_FORMAT_ASTC_12x10_SFLOAT_BLOCK = 230
        static readonly DATA_FORMAT_ASTC_12x12_SFLOAT_BLOCK = 231
        
        /** Represents the size of the [enum DataFormat] enum. */
        static readonly DATA_FORMAT_MAX = 232
        
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
        
        /** Support for MetalFX spatial upscaling. */
        static readonly SUPPORTS_METALFX_SPATIAL = 3
        
        /** Support for MetalFX temporal upscaling. */
        static readonly SUPPORTS_METALFX_TEMPORAL = 4
        
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
        
        /** Creates a new texture. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         *      
         *  **Note:** Not to be confused with [method RenderingServer.texture_2d_create], which creates the Godot-specific [Texture2D] resource as opposed to the graphics API's own texture type.  
         */
        textureCreate(format: RDTextureFormat, view: RDTextureView, data?: GArray /* = [] */): Rid
        
        /** Creates a shared texture using the specified [param view] and the texture information from [param with_texture]. */
        textureCreateShared(view: RDTextureView, withTexture: Rid): Rid
        
        /** Creates a shared texture using the specified [param view] and the texture information from [param with_texture]'s [param layer] and [param mipmap]. The number of included mipmaps from the original texture can be controlled using the [param mipmaps] parameter. Only relevant for textures with multiple layers, such as 3D textures, texture arrays and cubemaps. For single-layer textures, use [method texture_create_shared].  
         *  For 2D textures (which only have one layer), [param layer] must be `0`.  
         *      
         *  **Note:** Layer slicing is only supported for 2D texture arrays, not 3D textures or cubemaps.  
         */
        textureCreateSharedFromSlice(view: RDTextureView, withTexture: Rid, layer: int64, mipmap: int64, mipmaps?: int64 /* = 1 */, sliceType?: RenderingDevice.TextureSliceType /* = 0 */): Rid
        
        /** Returns an RID for an existing [param image] (`VkImage`) with the given [param type], [param format], [param samples], [param usage_flags], [param width], [param height], [param depth], [param layers], and [param mipmaps]. This can be used to allow Godot to render onto foreign images. */
        textureCreateFromExtension(type: RenderingDevice.TextureType, format: RenderingDevice.DataFormat, samples: RenderingDevice.TextureSamples, usageFlags: RenderingDevice.TextureUsageBits, image: int64, width: int64, height: int64, depth: int64, layers: int64, mipmaps?: int64 /* = 1 */): Rid
        
        /** Updates texture data with new data, replacing the previous data in place. The updated texture data must have the same dimensions and format. For 2D textures (which only have one layer), [param layer] must be `0`. Returns [constant @GlobalScope.OK] if the update was successful, [constant @GlobalScope.ERR_INVALID_PARAMETER] otherwise.  
         *      
         *  **Note:** Updating textures is forbidden during creation of a draw or compute list.  
         *      
         *  **Note:** The existing [param texture] can't be updated while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to [constant FINAL_ACTION_CONTINUE]) to update this texture.  
         *      
         *  **Note:** The existing [param texture] requires the [constant TEXTURE_USAGE_CAN_UPDATE_BIT] to be updatable.  
         */
        textureUpdate(texture: Rid, layer: int64, data: PackedByteArray | byte[] | ArrayBuffer): GError
        
        /** Returns the [param texture] data for the specified [param layer] as raw binary data. For 2D textures (which only have one layer), [param layer] must be `0`.  
         *      
         *  **Note:** [param texture] can't be retrieved while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to [constant FINAL_ACTION_CONTINUE]) to retrieve this texture. Otherwise, an error is printed and a empty [PackedByteArray] is returned.  
         *      
         *  **Note:** [param texture] requires the [constant TEXTURE_USAGE_CAN_COPY_FROM_BIT] to be retrieved. Otherwise, an error is printed and a empty [PackedByteArray] is returned.  
         *      
         *  **Note:** This method will block the GPU from working until the data is retrieved. Refer to [method texture_get_data_async] for an alternative that returns the data in more performant way.  
         */
        textureGetData(texture: Rid, layer: int64): PackedByteArray
        
        /** Asynchronous version of [method texture_get_data]. RenderingDevice will call [param callback] in a certain amount of frames with the data the texture had at the time of the request.  
         *      
         *  **Note:** At the moment, the delay corresponds to the amount of frames specified by [member ProjectSettings.rendering/rendering_device/vsync/frame_queue_size].  
         *      
         *  **Note:** Downloading large textures can have a prohibitive cost for real-time even when using the asynchronous method due to hardware bandwidth limitations. When dealing with large resources, you can adjust settings such as [member ProjectSettings.rendering/rendering_device/staging_buffer/texture_download_region_size_px] and [member ProjectSettings.rendering/rendering_device/staging_buffer/block_size_kb] to improve the transfer speed at the cost of extra memory.  
         *    
         */
        textureGetDataAsync(texture: Rid, layer: int64, callback: Callable): GError
        
        /** Returns `true` if the specified [param format] is supported for the given [param usage_flags], `false` otherwise. */
        textureIsFormatSupportedForUsage(format: RenderingDevice.DataFormat, usageFlags: RenderingDevice.TextureUsageBits): boolean
        
        /** Returns `true` if the [param texture] is shared, `false` otherwise. See [RDTextureView]. */
        textureIsShared(texture: Rid): boolean
        
        /** Returns `true` if the [param texture] is valid, `false` otherwise. */
        textureIsValid(texture: Rid): boolean
        
        /** Updates the discardable property of [param texture].  
         *  If a texture is discardable, its contents do not need to be preserved between frames. This flag is only relevant when the texture is used as target in a draw list.  
         *  This information is used by [RenderingDevice] to figure out if a texture's contents can be discarded, eliminating unnecessary writes to memory and boosting performance.  
         */
        textureSetDiscardable(texture: Rid, discardable: boolean): void
        
        /** Returns `true` if the [param texture] is discardable, `false` otherwise. See [RDTextureFormat] or [method texture_set_discardable]. */
        textureIsDiscardable(texture: Rid): boolean
        
        /** Copies the [param from_texture] to [param to_texture] with the specified [param from_pos], [param to_pos] and [param size] coordinates. The Z axis of the [param from_pos], [param to_pos] and [param size] must be `0` for 2-dimensional textures. Source and destination mipmaps/layers must also be specified, with these parameters being `0` for textures without mipmaps or single-layer textures. Returns [constant @GlobalScope.OK] if the texture copy was successful or [constant @GlobalScope.ERR_INVALID_PARAMETER] otherwise.  
         *      
         *  **Note:** [param from_texture] texture can't be copied while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to [constant FINAL_ACTION_CONTINUE]) to copy this texture.  
         *      
         *  **Note:** [param from_texture] texture requires the [constant TEXTURE_USAGE_CAN_COPY_FROM_BIT] to be retrieved.  
         *      
         *  **Note:** [param to_texture] can't be copied while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to [constant FINAL_ACTION_CONTINUE]) to copy this texture.  
         *      
         *  **Note:** [param to_texture] requires the [constant TEXTURE_USAGE_CAN_COPY_TO_BIT] to be retrieved.  
         *      
         *  **Note:** [param from_texture] and [param to_texture] must be of the same type (color or depth).  
         */
        textureCopy(fromTexture: Rid, toTexture: Rid, fromPos: Vector3, toPos: Vector3, size: Vector3, srcMipmap: int64, dstMipmap: int64, srcLayer: int64, dstLayer: int64): GError
        
        /** Clears the specified [param texture] by replacing all of its pixels with the specified [param color]. [param base_mipmap] and [param mipmap_count] determine which mipmaps of the texture are affected by this clear operation, while [param base_layer] and [param layer_count] determine which layers of a 3D texture (or texture array) are affected by this clear operation. For 2D textures (which only have one layer by design), [param base_layer] must be `0` and [param layer_count] must be `1`.  
         *      
         *  **Note:** [param texture] can't be cleared while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to [constant FINAL_ACTION_CONTINUE]) to clear this texture.  
         */
        textureClear(texture: Rid, color: Color, baseMipmap: int64, mipmapCount: int64, baseLayer: int64, layerCount: int64): GError
        
        /** Resolves the [param from_texture] texture onto [param to_texture] with multisample antialiasing enabled. This must be used when rendering a framebuffer for MSAA to work. Returns [constant @GlobalScope.OK] if successful, [constant @GlobalScope.ERR_INVALID_PARAMETER] otherwise.  
         *      
         *  **Note:** [param from_texture] and [param to_texture] textures must have the same dimension, format and type (color or depth).  
         *      
         *  **Note:** [param from_texture] can't be copied while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to [constant FINAL_ACTION_CONTINUE]) to resolve this texture.  
         *      
         *  **Note:** [param from_texture] requires the [constant TEXTURE_USAGE_CAN_COPY_FROM_BIT] to be retrieved.  
         *      
         *  **Note:** [param from_texture] must be multisampled and must also be 2D (or a slice of a 3D/cubemap texture).  
         *      
         *  **Note:** [param to_texture] can't be copied while a draw list that uses it as part of a framebuffer is being created. Ensure the draw list is finalized (and that the color/depth texture using it is not set to [constant FINAL_ACTION_CONTINUE]) to resolve this texture.  
         *      
         *  **Note:** [param to_texture] texture requires the [constant TEXTURE_USAGE_CAN_COPY_TO_BIT] to be retrieved.  
         *      
         *  **Note:** [param to_texture] texture must **not** be multisampled and must also be 2D (or a slice of a 3D/cubemap texture).  
         */
        textureResolveMultisample(fromTexture: Rid, toTexture: Rid): GError
        
        /** Returns the data format used to create this texture. */
        textureGetFormat(texture: Rid): null | RDTextureFormat
        
        /** Returns the internal graphics handle for this texture object. For use when communicating with third-party APIs mostly with GDExtension.  
         *      
         *  **Note:** This function returns a `uint64_t` which internally maps to a `GLuint` (OpenGL) or `VkImage` (Vulkan).  
         */
        textureGetNativeHandle(texture: Rid): int64
        
        /** Creates a new framebuffer format with the specified [param attachments] and [param view_count]. Returns the new framebuffer's unique framebuffer format ID.  
         *  If [param view_count] is greater than or equal to `2`, enables multiview which is used for VR rendering. This requires support for the Vulkan multiview extension.  
         */
        framebufferFormatCreate(attachments: GArray, viewCount?: int64 /* = 1 */): int64
        
        /** Creates a multipass framebuffer format with the specified [param attachments], [param passes] and [param view_count] and returns its ID. If [param view_count] is greater than or equal to `2`, enables multiview which is used for VR rendering. This requires support for the Vulkan multiview extension. */
        framebufferFormatCreateMultipass(attachments: GArray, passes: GArray, viewCount?: int64 /* = 1 */): int64
        
        /** Creates a new empty framebuffer format with the specified number of [param samples] and returns its ID. */
        framebufferFormatCreateEmpty(samples?: RenderingDevice.TextureSamples /* = 0 */): int64
        
        /** Returns the number of texture samples used for the given framebuffer [param format] ID (returned by [method framebuffer_get_format]). */
        framebufferFormatGetTextureSamples(format: int64, renderPass?: int64 /* = 0 */): RenderingDevice.TextureSamples
        
        /** Creates a new framebuffer. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        framebufferCreate(textures: GArray, validateWithFormat?: int64 /* = -1 */, viewCount?: int64 /* = 1 */): Rid
        
        /** Creates a new multipass framebuffer. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        framebufferCreateMultipass(textures: GArray, passes: GArray, validateWithFormat?: int64 /* = -1 */, viewCount?: int64 /* = 1 */): Rid
        
        /** Creates a new empty framebuffer. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        framebufferCreateEmpty(size: Vector2I, samples?: RenderingDevice.TextureSamples /* = 0 */, validateWithFormat?: int64 /* = -1 */): Rid
        
        /** Returns the format ID of the framebuffer specified by the [param framebuffer] RID. This ID is guaranteed to be unique for the same formats and does not need to be freed. */
        framebufferGetFormat(framebuffer: Rid): int64
        
        /** Returns `true` if the framebuffer specified by the [param framebuffer] RID is valid, `false` otherwise. */
        framebufferIsValid(framebuffer: Rid): boolean
        
        /** Creates a new sampler. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        samplerCreate(state: RDSamplerState): Rid
        
        /** Returns `true` if implementation supports using a texture of [param format] with the given [param sampler_filter]. */
        samplerIsFormatSupportedForFilter(format: RenderingDevice.DataFormat, samplerFilter: RenderingDevice.SamplerFilter): boolean
        
        /** Creates a new vertex buffer. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        vertexBufferCreate(sizeBytes: int64, data?: PackedByteArray | byte[] | ArrayBuffer /* = [] */, creationBits?: RenderingDevice.BufferCreationBits /* = 0 */): Rid
        
        /** Creates a new vertex format with the specified [param vertex_descriptions]. Returns a unique vertex format ID corresponding to the newly created vertex format. */
        vertexFormatCreate(vertexDescriptions: GArray): int64
        
        /** Creates a vertex array based on the specified buffers. Optionally, [param offsets] (in bytes) may be defined for each buffer. */
        vertexArrayCreate(vertexCount: int64, vertexFormat: int64, srcBuffers: GArray, offsets?: PackedInt64Array | int64[] /* = [] */): Rid
        
        /** Creates a new index buffer. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        indexBufferCreate(sizeIndices: int64, format: RenderingDevice.IndexBufferFormat, data?: PackedByteArray | byte[] | ArrayBuffer /* = [] */, useRestartIndices?: boolean /* = false */, creationBits?: RenderingDevice.BufferCreationBits /* = 0 */): Rid
        
        /** Creates a new index array. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        indexArrayCreate(indexBuffer: Rid, indexOffset: int64, indexCount: int64): Rid
        
        /** Compiles a SPIR-V from the shader source code in [param shader_source] and returns the SPIR-V as a [RDShaderSPIRV]. This intermediate language shader is portable across different GPU models and driver versions, but cannot be run directly by GPUs until compiled into a binary shader using [method shader_compile_binary_from_spirv].  
         *  If [param allow_cache] is `true`, make use of the shader cache generated by Godot. This avoids a potentially lengthy shader compilation step if the shader is already in cache. If [param allow_cache] is `false`, Godot's shader cache is ignored and the shader will always be recompiled.  
         */
        shaderCompileSpirVFromSource(shaderSource: RDShaderSource, allowCache?: boolean /* = true */): null | RDShaderSpirV
        
        /** Compiles a binary shader from [param spirv_data] and returns the compiled binary data as a [PackedByteArray]. This compiled shader is specific to the GPU model and driver version used; it will not work on different GPU models or even different driver versions. See also [method shader_compile_spirv_from_source].  
         *  [param name] is an optional human-readable name that can be given to the compiled shader for organizational purposes.  
         */
        shaderCompileBinaryFromSpirV(spirVData: RDShaderSpirV, name?: string /* = '' */): PackedByteArray
        
        /** Creates a new shader instance from SPIR-V intermediate code. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method. See also [method shader_compile_spirv_from_source] and [method shader_create_from_bytecode].  
         */
        shaderCreateFromSpirV(spirVData: RDShaderSpirV, name?: string /* = '' */): Rid
        
        /** Creates a new shader instance from a binary compiled shader. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method. See also [method shader_compile_binary_from_spirv] and [method shader_create_from_spirv].  
         */
        shaderCreateFromBytecode(binaryData: PackedByteArray | byte[] | ArrayBuffer, placeholderRid?: Rid /* = new Rid() */): Rid
        
        /** Create a placeholder RID by allocating an RID without initializing it for use in [method shader_create_from_bytecode]. This allows you to create an RID for a shader and pass it around, but defer compiling the shader to a later time. */
        shaderCreatePlaceholder(): Rid
        
        /** Returns the internal vertex input mask. Internally, the vertex input mask is an unsigned integer consisting of the locations (specified in GLSL via. `layout(location = ...)`) of the input variables (specified in GLSL by the `in` keyword). */
        shaderGetVertexInputAttributeMask(shader: Rid): int64
        
        /** Creates a new uniform buffer. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        uniformBufferCreate(sizeBytes: int64, data?: PackedByteArray | byte[] | ArrayBuffer /* = [] */, creationBits?: RenderingDevice.BufferCreationBits /* = 0 */): Rid
        
        /** Creates a [url=https://vkguide.dev/docs/chapter-4/storage_buffers/]storage buffer[/url] with the specified [param data] and [param usage]. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        storageBufferCreate(sizeBytes: int64, data?: PackedByteArray | byte[] | ArrayBuffer /* = [] */, usage?: RenderingDevice.StorageBufferUsage /* = 0 */, creationBits?: RenderingDevice.BufferCreationBits /* = 0 */): Rid
        
        /** Creates a new texture buffer. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        textureBufferCreate(sizeBytes: int64, format: RenderingDevice.DataFormat, data?: PackedByteArray | byte[] | ArrayBuffer /* = [] */): Rid
        
        /** Creates a new uniform set. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        uniformSetCreate(uniforms: GArray, shader: Rid, shaderSet: int64): Rid
        
        /** Checks if the [param uniform_set] is valid, i.e. is owned. */
        uniformSetIsValid(uniformSet: Rid): boolean
        
        /** Copies [param size] bytes from the [param src_buffer] at [param src_offset] into [param dst_buffer] at [param dst_offset].  
         *  Prints an error if:  
         *  - [param size] exceeds the size of either [param src_buffer] or [param dst_buffer] at their corresponding offsets  
         *  - a draw list is currently active (created by [method draw_list_begin])  
         *  - a compute list is currently active (created by [method compute_list_begin])  
         */
        bufferCopy(srcBuffer: Rid, dstBuffer: Rid, srcOffset: int64, dstOffset: int64, size: int64): GError
        
        /** Updates a region of [param size_bytes] bytes, starting at [param offset], in the buffer, with the specified [param data].  
         *  Prints an error if:  
         *  - the region specified by [param offset] + [param size_bytes] exceeds the buffer  
         *  - a draw list is currently active (created by [method draw_list_begin])  
         *  - a compute list is currently active (created by [method compute_list_begin])  
         */
        bufferUpdate(buffer: Rid, offset: int64, sizeBytes: int64, data: PackedByteArray | byte[] | ArrayBuffer): GError
        
        /** Clears the contents of the [param buffer], clearing [param size_bytes] bytes, starting at [param offset].  
         *  Prints an error if:  
         *  - the size isn't a multiple of four  
         *  - the region specified by [param offset] + [param size_bytes] exceeds the buffer  
         *  - a draw list is currently active (created by [method draw_list_begin])  
         *  - a compute list is currently active (created by [method compute_list_begin])  
         */
        bufferClear(buffer: Rid, offset: int64, sizeBytes: int64): GError
        
        /** Returns a copy of the data of the specified [param buffer], optionally [param offset_bytes] and [param size_bytes] can be set to copy only a portion of the buffer.  
         *      
         *  **Note:** This method will block the GPU from working until the data is retrieved. Refer to [method buffer_get_data_async] for an alternative that returns the data in more performant way.  
         */
        bufferGetData(buffer: Rid, offsetBytes?: int64 /* = 0 */, sizeBytes?: int64 /* = 0 */): PackedByteArray
        
        /** Asynchronous version of [method buffer_get_data]. RenderingDevice will call [param callback] in a certain amount of frames with the data the buffer had at the time of the request.  
         *      
         *  **Note:** At the moment, the delay corresponds to the amount of frames specified by [member ProjectSettings.rendering/rendering_device/vsync/frame_queue_size].  
         *      
         *  **Note:** Downloading large buffers can have a prohibitive cost for real-time even when using the asynchronous method due to hardware bandwidth limitations. When dealing with large resources, you can adjust settings such as [member ProjectSettings.rendering/rendering_device/staging_buffer/block_size_kb] to improve the transfer speed at the cost of extra memory.  
         *    
         */
        bufferGetDataAsync(buffer: Rid, callback: Callable, offsetBytes?: int64 /* = 0 */, sizeBytes?: int64 /* = 0 */): GError
        
        /** Returns the address of the given [param buffer] which can be passed to shaders in any way to access underlying data. Buffer must have been created with this feature enabled.  
         *      
         *  **Note:** You must check that the GPU supports this functionality by calling [method has_feature] with [constant SUPPORTS_BUFFER_DEVICE_ADDRESS] as a parameter.  
         */
        bufferGetDeviceAddress(buffer: Rid): int64
        
        /** Creates a new render pipeline. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        renderPipelineCreate(shader: Rid, framebufferFormat: int64, vertexFormat: int64, primitive: RenderingDevice.RenderPrimitive, rasterizationState: RDPipelineRasterizationState, multisampleState: RDPipelineMultisampleState, stencilState: RDPipelineDepthStencilState, colorBlendState: RDPipelineColorBlendState, dynamicStateFlags?: RenderingDevice.PipelineDynamicStateFlags /* = 0 */, forRenderPass?: int64 /* = 0 */, specializationConstants?: GArray /* = [] */): Rid
        
        /** Returns `true` if the render pipeline specified by the [param render_pipeline] RID is valid, `false` otherwise. */
        renderPipelineIsValid(renderPipeline: Rid): boolean
        
        /** Creates a new compute pipeline. It can be accessed with the RID that is returned.  
         *  Once finished with your RID, you will want to free the RID using the RenderingDevice's [method free_rid] method.  
         */
        computePipelineCreate(shader: Rid, specializationConstants?: GArray /* = [] */): Rid
        
        /** Returns `true` if the compute pipeline specified by the [param compute_pipeline] RID is valid, `false` otherwise. */
        computePipelineIsValid(computePipeline: Rid): boolean
        
        /** Returns the window width matching the graphics API context for the given window ID (in pixels). Despite the parameter being named [param screen], this returns the  *window*  size. See also [method screen_get_height].  
         *      
         *  **Note:** Only the main [RenderingDevice] returned by [method RenderingServer.get_rendering_device] has a width. If called on a local [RenderingDevice], this method prints an error and returns [constant INVALID_ID].  
         */
        screenGetWidth(screen?: int64 /* = 0 */): int64
        
        /** Returns the window height matching the graphics API context for the given window ID (in pixels). Despite the parameter being named [param screen], this returns the  *window*  size. See also [method screen_get_width].  
         *      
         *  **Note:** Only the main [RenderingDevice] returned by [method RenderingServer.get_rendering_device] has a height. If called on a local [RenderingDevice], this method prints an error and returns [constant INVALID_ID].  
         */
        screenGetHeight(screen?: int64 /* = 0 */): int64
        
        /** Returns the framebuffer format of the given screen.  
         *      
         *  **Note:** Only the main [RenderingDevice] returned by [method RenderingServer.get_rendering_device] has a format. If called on a local [RenderingDevice], this method prints an error and returns [constant INVALID_ID].  
         */
        screenGetFramebufferFormat(screen?: int64 /* = 0 */): int64
        
        /** High-level variant of [method draw_list_begin], with the parameters automatically being adjusted for drawing onto the window specified by the [param screen] ID.  
         *      
         *  **Note:** Cannot be used with local RenderingDevices, as these don't have a screen. If called on a local RenderingDevice, [method draw_list_begin_for_screen] returns [constant INVALID_ID].  
         */
        drawListBeginForScreen(screen?: int64 /* = 0 */, clearColor?: Color /* = new Color(0, 0, 0, 1) */): int64
        
        /** Starts a list of raster drawing commands created with the `draw_*` methods. The returned value should be passed to other `draw_list_*` functions.  
         *  Multiple draw lists cannot be created at the same time; you must finish the previous draw list first using [method draw_list_end].  
         *  A simple drawing operation might look like this (code is not a complete example):  
         *    
         *  The [param draw_flags] indicates if the texture attachments of the framebuffer should be cleared or ignored. Only one of the two flags can be used for each individual attachment. Ignoring an attachment means that any contents that existed before the draw list will be completely discarded, reducing the memory bandwidth used by the render pass but producing garbage results if the pixels aren't replaced. The default behavior allows the engine to figure out the right operation to use if the texture is discardable, which can result in increased performance. See [RDTextureFormat] or [method texture_set_discardable].  
         *  The [param breadcrumb] parameter can be an arbitrary 32-bit integer that is useful to diagnose GPU crashes. If Godot is built in dev or debug mode; when the GPU crashes Godot will dump all shaders that were being executed at the time of the crash and the breadcrumb is useful to diagnose what passes did those shaders belong to.  
         *  It does not affect rendering behavior and can be set to 0. It is recommended to use [enum BreadcrumbMarker] enumerations for consistency but it's not required. It is also possible to use bitwise operations to add extra data. e.g.  
         *    
         */
        drawListBegin(framebuffer: Rid, drawFlags?: RenderingDevice.DrawFlags /* = 0 */, clearColorValues?: PackedColorArray | Color[] /* = [] */, clearDepthValue?: float64 /* = 1 */, clearStencilValue?: int64 /* = 0 */, region?: Rect2 /* = new Rect2(0, 0, 0, 0) */, breadcrumb?: int64 /* = 0 */): int64
        
        /** This method does nothing and always returns an empty [PackedInt64Array]. */
        drawListBeginSplit(framebuffer: Rid, splits: int64, initialColorAction: RenderingDevice.InitialAction, finalColorAction: RenderingDevice.FinalAction, initialDepthAction: RenderingDevice.InitialAction, finalDepthAction: RenderingDevice.FinalAction, clearColorValues?: PackedColorArray | Color[] /* = [] */, clearDepth?: float64 /* = 1 */, clearStencil?: int64 /* = 0 */, region?: Rect2 /* = new Rect2(0, 0, 0, 0) */, storageTextures?: GArray /* = [] */): PackedInt64Array
        
        /** Sets blend constants for the specified [param draw_list] to [param color]. Blend constants are used only if the graphics pipeline is created with [constant DYNAMIC_STATE_BLEND_CONSTANTS] flag set. */
        drawListSetBlendConstants(drawList: int64, color: Color): void
        
        /** Binds [param render_pipeline] to the specified [param draw_list]. */
        drawListBindRenderPipeline(drawList: int64, renderPipeline: Rid): void
        
        /** Binds [param uniform_set] to the specified [param draw_list]. A [param set_index] must also be specified, which is an identifier starting from `0` that must match the one expected by the draw list. */
        drawListBindUniformSet(drawList: int64, uniformSet: Rid, setIndex: int64): void
        
        /** Binds [param vertex_array] to the specified [param draw_list]. */
        drawListBindVertexArray(drawList: int64, vertexArray: Rid): void
        
        /** Binds [param index_array] to the specified [param draw_list]. */
        drawListBindIndexArray(drawList: int64, indexArray: Rid): void
        
        /** Sets the push constant data to [param buffer] for the specified [param draw_list]. The shader determines how this binary data is used. The buffer's size in bytes must also be specified in [param size_bytes] (this can be obtained by calling the [method PackedByteArray.size] method on the passed [param buffer]). */
        drawListSetPushConstant(drawList: int64, buffer: PackedByteArray | byte[] | ArrayBuffer, sizeBytes: int64): void
        
        /** Submits [param draw_list] for rendering on the GPU. This is the raster equivalent to [method compute_list_dispatch]. */
        drawListDraw(drawList: int64, useIndices: boolean, instances: int64, proceduralVertexCount?: int64 /* = 0 */): void
        
        /** Submits [param draw_list] for rendering on the GPU with the given parameters stored in the [param buffer] at [param offset]. Parameters being integers: vertex count, instance count, first vertex, first instance. And when using indices: index count, instance count, first index, vertex offset, first instance. Buffer must have been created with [constant STORAGE_BUFFER_USAGE_DISPATCH_INDIRECT] flag. */
        drawListDrawIndirect(drawList: int64, useIndices: boolean, buffer: Rid, offset?: int64 /* = 0 */, drawCount?: int64 /* = 1 */, stride?: int64 /* = 0 */): void
        
        /** Creates a scissor rectangle and enables it for the specified [param draw_list]. Scissor rectangles are used for clipping by discarding fragments that fall outside a specified rectangular portion of the screen. See also [method draw_list_disable_scissor].  
         *      
         *  **Note:** The specified [param rect] is automatically intersected with the screen's dimensions, which means it cannot exceed the screen's dimensions.  
         */
        drawListEnableScissor(drawList: int64, rect?: Rect2 /* = new Rect2(0, 0, 0, 0) */): void
        
        /** Removes and disables the scissor rectangle for the specified [param draw_list]. See also [method draw_list_enable_scissor]. */
        drawListDisableScissor(drawList: int64): void
        
        /** Switches to the next draw pass. */
        drawListSwitchToNextPass(): int64
        
        /** This method does nothing and always returns an empty [PackedInt64Array]. */
        drawListSwitchToNextPassSplit(splits: int64): PackedInt64Array
        
        /** Finishes a list of raster drawing commands created with the `draw_*` methods. */
        drawListEnd(): void
        
        /** Starts a list of compute commands created with the `compute_*` methods. The returned value should be passed to other `compute_list_*` functions.  
         *  Multiple compute lists cannot be created at the same time; you must finish the previous compute list first using [method compute_list_end].  
         *  A simple compute operation might look like this (code is not a complete example):  
         *    
         */
        computeListBegin(): int64
        
        /** Tells the GPU what compute pipeline to use when processing the compute list. If the shader has changed since the last time this function was called, Godot will unbind all descriptor sets and will re-bind them inside [method compute_list_dispatch]. */
        computeListBindComputePipeline(computeList: int64, computePipeline: Rid): void
        
        /** Sets the push constant data to [param buffer] for the specified [param compute_list]. The shader determines how this binary data is used. The buffer's size in bytes must also be specified in [param size_bytes] (this can be obtained by calling the [method PackedByteArray.size] method on the passed [param buffer]). */
        computeListSetPushConstant(computeList: int64, buffer: PackedByteArray | byte[] | ArrayBuffer, sizeBytes: int64): void
        
        /** Binds the [param uniform_set] to this [param compute_list]. Godot ensures that all textures in the uniform set have the correct Vulkan access masks. If Godot had to change access masks of textures, it will raise a Vulkan image memory barrier. */
        computeListBindUniformSet(computeList: int64, uniformSet: Rid, setIndex: int64): void
        
        /** Submits the compute list for processing on the GPU. This is the compute equivalent to [method draw_list_draw]. */
        computeListDispatch(computeList: int64, xGroups: int64, yGroups: int64, zGroups: int64): void
        
        /** Submits the compute list for processing on the GPU with the given group counts stored in the [param buffer] at [param offset]. Buffer must have been created with [constant STORAGE_BUFFER_USAGE_DISPATCH_INDIRECT] flag. */
        computeListDispatchIndirect(computeList: int64, buffer: Rid, offset: int64): void
        
        /** Raises a Vulkan compute barrier in the specified [param compute_list]. */
        computeListAddBarrier(computeList: int64): void
        
        /** Finishes a list of compute commands created with the `compute_*` methods. */
        computeListEnd(): void
        
        /** Tries to free an object in the RenderingDevice. To avoid memory leaks, this should be called after using an object as memory management does not occur automatically when using RenderingDevice directly. */
        freeRid(rid: Rid): void
        
        /** Creates a timestamp marker with the specified [param name]. This is used for performance reporting with the [method get_captured_timestamp_cpu_time], [method get_captured_timestamp_gpu_time] and [method get_captured_timestamp_name] methods. */
        captureTimestamp(name: string): void
        
        /** Returns the total number of timestamps (rendering steps) available for profiling. */
        getCapturedTimestampsCount(): int64
        
        /** Returns the index of the last frame rendered that has rendering timestamps available for querying. */
        getCapturedTimestampsFrame(): int64
        
        /** Returns the timestamp in GPU time for the rendering step specified by [param index] (in microseconds since the engine started). See also [method get_captured_timestamp_cpu_time] and [method capture_timestamp]. */
        getCapturedTimestampGpuTime(index: int64): int64
        
        /** Returns the timestamp in CPU time for the rendering step specified by [param index] (in microseconds since the engine started). See also [method get_captured_timestamp_gpu_time] and [method capture_timestamp]. */
        getCapturedTimestampCpuTime(index: int64): int64
        
        /** Returns the timestamp's name for the rendering step specified by [param index]. See also [method capture_timestamp]. */
        getCapturedTimestampName(index: int64): string
        
        /** Returns `true` if the [param feature] is supported by the GPU. */
        hasFeature(feature: RenderingDevice.Features): boolean
        
        /** Returns the value of the specified [param limit]. This limit varies depending on the current graphics hardware (and sometimes the driver version). If the given limit is exceeded, rendering errors will occur.  
         *  Limits for various graphics hardware can be found in the [url=https://vulkan.gpuinfo.org/]Vulkan Hardware Database[/url].  
         */
        limitGet(limit: RenderingDevice.Limit): int64
        
        /** Returns the frame count kept by the graphics API. Higher values result in higher input lag, but with more consistent throughput. For the main [RenderingDevice], frames are cycled (usually 3 with triple-buffered V-Sync enabled). However, local [RenderingDevice]s only have 1 frame. */
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
        barrier(from?: RenderingDevice.BarrierMask /* = 32767 */, to?: RenderingDevice.BarrierMask /* = 32767 */): void
        
        /** This method does nothing. */
        fullBarrier(): void
        
        /** Create a new local [RenderingDevice]. This is most useful for performing compute operations on the GPU independently from the rest of the engine. */
        createLocalDevice(): RenderingDevice
        
        /** Sets the resource name for [param id] to [param name]. This is used for debugging with third-party tools such as [url=https://renderdoc.org/]RenderDoc[/url].  
         *  The following types of resources can be named: texture, sampler, vertex buffer, index buffer, uniform buffer, texture buffer, storage buffer, uniform set buffer, shader, render pipeline and compute pipeline. Framebuffers cannot be named. Attempting to name an incompatible resource type will print an error.  
         *      
         *  **Note:** Resource names are only set when the engine runs in verbose mode ([method OS.is_stdout_verbose] = `true`), or when using an engine build compiled with the `dev_mode=yes` SCons option. The graphics driver must also support the `VK_EXT_DEBUG_UTILS_EXTENSION_NAME` Vulkan extension for named resources to work.  
         */
        setResourceName(id: Rid, name: string): void
        
        /** Create a command buffer debug label region that can be displayed in third-party tools such as [url=https://renderdoc.org/]RenderDoc[/url]. All regions must be ended with a [method draw_command_end_label] call. When viewed from the linear series of submissions to a single queue, calls to [method draw_command_begin_label] and [method draw_command_end_label] must be matched and balanced.  
         *  The `VK_EXT_DEBUG_UTILS_EXTENSION_NAME` Vulkan extension must be available and enabled for command buffer debug label region to work. See also [method draw_command_end_label].  
         */
        drawCommandBeginLabel(name: string, color: Color): void
        
        /** This method does nothing. */
        drawCommandInsertLabel(name: string, color: Color): void
        
        /** Ends the command buffer debug label region started by a [method draw_command_begin_label] call. */
        drawCommandEndLabel(): void
        
        /** Returns the vendor of the video adapter (e.g. "NVIDIA Corporation"). Equivalent to [method RenderingServer.get_video_adapter_vendor]. See also [method get_device_name]. */
        getDeviceVendorName(): string
        
        /** Returns the name of the video adapter (e.g. "GeForce GTX 1080/PCIe/SSE2"). Equivalent to [method RenderingServer.get_video_adapter_name]. See also [method get_device_vendor_name]. */
        getDeviceName(): string
        
        /** Returns the universally unique identifier for the pipeline cache. This is used to cache shader files on disk, which avoids shader recompilations on subsequent engine runs. This UUID varies depending on the graphics card model, but also the driver version. Therefore, updating graphics drivers will invalidate the shader cache. */
        getDevicePipelineCacheUuid(): string
        
        /** Returns the memory usage in bytes corresponding to the given [param type]. When using Vulkan, these statistics are calculated by [url=https://github.com/GPUOpen-LibrariesAndSDKs/VulkanMemoryAllocator]Vulkan Memory Allocator[/url]. */
        getMemoryUsage(type: RenderingDevice.MemoryType): int64
        
        /** Returns the unique identifier of the driver [param resource] for the specified [param rid]. Some driver resource types ignore the specified [param rid] (see [enum DriverResource] descriptions). [param index] is always ignored but must be specified anyway. */
        getDriverResource(resource: RenderingDevice.DriverResource, rid: Rid, index: int64): int64
        
        /** Returns a string with a performance report from the past frame. Updates every frame. */
        getPerfReport(): string
        
        /** Returns string report in CSV format using the following methods:  
         *  - [method get_tracked_object_name]  
         *  - [method get_tracked_object_type_count]  
         *  - [method get_driver_total_memory]  
         *  - [method get_driver_allocation_count]  
         *  - [method get_driver_memory_by_object_type]  
         *  - [method get_driver_allocs_by_object_type]  
         *  - [method get_device_total_memory]  
         *  - [method get_device_allocation_count]  
         *  - [method get_device_memory_by_object_type]  
         *  - [method get_device_allocs_by_object_type]  
         *  This is only used by Vulkan in debug builds. Godot must also be started with the `--extra-gpu-memory-tracking` [url=https://docs.godotengine.org/en/latest/tutorials/editor/command_line_tutorial.html]command line argument[/url].  
         */
        getDriverAndDeviceMemoryReport(): string
        
        /** Returns the name of the type of object for the given [param type_index]. This value must be in range `[0; get_tracked_object_type_count - 1]`. If [method get_tracked_object_type_count] is 0, then type argument is ignored and always returns the same string.  
         *  The return value is important because it gives meaning to the types passed to [method get_driver_memory_by_object_type], [method get_driver_allocs_by_object_type], [method get_device_memory_by_object_type], and [method get_device_allocs_by_object_type]. Examples of strings it can return (not exhaustive):  
         *  - DEVICE_MEMORY  
         *  - PIPELINE_CACHE  
         *  - SWAPCHAIN_KHR  
         *  - COMMAND_POOL  
         *  Thus if e.g. `get_tracked_object_name(5)` returns "COMMAND_POOL", then `get_device_memory_by_object_type(5)` returns the bytes used by the GPU for command pools.  
         *  This is only used by Vulkan in debug builds. Godot must also be started with the `--extra-gpu-memory-tracking` [url=https://docs.godotengine.org/en/latest/tutorials/editor/command_line_tutorial.html]command line argument[/url].  
         */
        getTrackedObjectName(typeIndex: int64): string
        
        /** Returns how many types of trackable objects there are.  
         *  This is only used by Vulkan in debug builds. Godot must also be started with the `--extra-gpu-memory-tracking` [url=https://docs.godotengine.org/en/latest/tutorials/editor/command_line_tutorial.html]command line argument[/url].  
         */
        getTrackedObjectTypeCount(): int64
        
        /** Returns how much bytes the GPU driver is using for internal driver structures.  
         *  This is only used by Vulkan in debug builds and can return 0 when this information is not tracked or unknown.  
         */
        getDriverTotalMemory(): int64
        
        /** Returns how many allocations the GPU driver has performed for internal driver structures.  
         *  This is only used by Vulkan in debug builds and can return 0 when this information is not tracked or unknown.  
         */
        getDriverAllocationCount(): int64
        
        /** Same as [method get_driver_total_memory] but filtered for a given object type.  
         *  The type argument must be in range `[0; get_tracked_object_type_count - 1]`. If [method get_tracked_object_type_count] is 0, then type argument is ignored and always returns 0.  
         *  This is only used by Vulkan in debug builds and can return 0 when this information is not tracked or unknown.  
         */
        getDriverMemoryByObjectType(type: int64): int64
        
        /** Same as [method get_driver_allocation_count] but filtered for a given object type.  
         *  The type argument must be in range `[0; get_tracked_object_type_count - 1]`. If [method get_tracked_object_type_count] is 0, then type argument is ignored and always returns 0.  
         *  This is only used by Vulkan in debug builds and can return 0 when this information is not tracked or unknown.  
         */
        getDriverAllocsByObjectType(type: int64): int64
        
        /** Returns how much bytes the GPU is using.  
         *  This is only used by Vulkan in debug builds and can return 0 when this information is not tracked or unknown.  
         */
        getDeviceTotalMemory(): int64
        
        /** Returns how many allocations the GPU has performed for internal driver structures.  
         *  This is only used by Vulkan in debug builds and can return 0 when this information is not tracked or unknown.  
         */
        getDeviceAllocationCount(): int64
        
        /** Same as [method get_device_total_memory] but filtered for a given object type.  
         *  The type argument must be in range `[0; get_tracked_object_type_count - 1]`. If [method get_tracked_object_type_count] is 0, then type argument is ignored and always returns 0.  
         *  This is only used by Vulkan in debug builds and can return 0 when this information is not tracked or unknown.  
         */
        getDeviceMemoryByObjectType(type: int64): int64
        
        /** Same as [method get_device_allocation_count] but filtered for a given object type.  
         *  The type argument must be in range `[0; get_tracked_object_type_count - 1]`. If [method get_tracked_object_type_count] is 0, then type argument is ignored and always returns 0.  
         *  This is only used by Vulkan in debug builds and can return 0 when this information is not tracked or unknown.  
         */
        getDeviceAllocsByObjectType(type: int64): int64
    }
    /** Base class for serializable objects.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_resource.html  
     */
    class Resource extends RefCounted {
        constructor(identifier?: any)
        /** Override this method to customize the newly duplicated resource created from [method PackedScene.instantiate], if the original's [member resource_local_to_scene] is set to `true`.  
         *  **Example:** Set a random `damage` value to every local resource from an instantiated scene:  
         *    
         */
        /* gdvirtual */ _setupLocalToScene(): void
        
        /** Override this method to return a custom [RID] when [method get_rid] is called. */
        /* gdvirtual */ _getRid(): Rid
        
        /** For resources that use a variable number of properties, either via [method Object._validate_property] or [method Object._get_property_list], this method should be implemented to correctly clear the resource's state. */
        /* gdvirtual */ _resetState(): void
        
        /** Sets the resource's path to [param path] without involving the resource cache. */
        /* gdvirtual */ _setPathCache(path: string): void
        
        /** Sets the [member resource_path] to [param path], potentially overriding an existing cache entry for this path. Further attempts to load an overridden resource by path will instead return this resource. */
        takeOverPath(path: string): void
        
        /** Sets the resource's path to [param path] without involving the resource cache. */
        setPathCache(path: string): void
        
        /** Returns the [RID] of this resource (or an empty RID). Many resources (such as [Texture2D], [Mesh], and so on) are high-level abstractions of resources stored in a specialized server ([DisplayServer], [RenderingServer], etc.), so this function will return the original [RID]. */
        getRid(): Rid
        
        /** If [member resource_local_to_scene] is set to `true` and the resource has been loaded from a [PackedScene] instantiation, returns the root [Node] of the scene where this resource is used. Otherwise, returns `null`. */
        getLocalScene(): null | Node
        
        /** Calls [method _setup_local_to_scene]. If [member resource_local_to_scene] is set to `true`, this method is automatically called from [method PackedScene.instantiate] by the newly duplicated resource within the scene instance. */
        setupLocalToScene(): void
        
        /** For resources that use a variable number of properties, either via [method Object._validate_property] or [method Object._get_property_list], override [method _reset_state] to correctly clear the resource's state. */
        resetState(): void
        
        /** Sets the unique identifier to [param id] for the resource with the given [param path] in the resource cache. If the unique identifier is empty, the cache entry using [param path] is removed if it exists.  
         *      
         *  **Note:** This method is only implemented when running in an editor context.  
         */
        setIdForPath(path: string, id: string): void
        
        /** Returns the unique identifier for the resource with the given [param path] from the resource cache. If the resource is not loaded and cached, an empty string is returned.  
         *      
         *  **Note:** This method is only implemented when running in an editor context. At runtime, it returns an empty string.  
         */
        getIdForPath(path: string): string
        
        /** Returns `true` if the resource is built-in (from the engine) or `false` if it is user-defined. */
        isBuiltIn(): boolean
        
        /** Generates a unique identifier for a resource to be contained inside a [PackedScene], based on the current date, time, and a random value. The returned string is only composed of letters (`a` to `y`) and numbers (`0` to `8`). See also [member resource_scene_unique_id]. */
        static generateSceneUniqueId(): string
        
        /** Emits the [signal changed] signal. This method is called automatically for some built-in resources.  
         *      
         *  **Note:** For custom resources, it's recommended to call this method whenever a meaningful change occurs, such as a modified property. This ensures that custom [Object]s depending on the resource are properly updated.  
         *    
         */
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
        duplicate(subresources?: boolean /* = false */): null | Resource
        
        /** If `true`, the resource is duplicated for each instance of all scenes using it. At run-time, the resource can be modified in one scene without affecting other instances (see [method PackedScene.instantiate]).  
         *      
         *  **Note:** Changing this property at run-time has no effect on already created duplicate resources.  
         */
        get resourceLocalToScene(): boolean
        set resourceLocalToScene(value: boolean)
        
        /** The unique path to this resource. If it has been saved to disk, the value will be its filepath. If the resource is exclusively contained within a scene, the value will be the [PackedScene]'s filepath, followed by a unique identifier.  
         *      
         *  **Note:** Setting this property manually may fail if a resource with the same path has already been previously loaded. If necessary, use [method take_over_path].  
         */
        get resourcePath(): string
        set resourcePath(value: string)
        
        /** An optional name for this resource. When defined, its value is displayed to represent the resource in the Inspector dock. For built-in scripts, the name is displayed as part of the tab name in the script editor.  
         *      
         *  **Note:** Some resource formats do not support resource names. You can still set the name in the editor or via code, but it will be lost when the resource is reloaded. For example, only built-in scripts can have a resource name, while scripts stored in separate files cannot.  
         */
        get resourceName(): string
        set resourceName(value: string)
        
        /** An unique identifier relative to the this resource's scene. If left empty, the ID is automatically generated when this resource is saved inside a [PackedScene]. If the resource is not inside a scene, this property is empty by default.  
         *      
         *  **Note:** When the [PackedScene] is saved, if multiple resources in the same scene use the same ID, only the earliest resource in the scene hierarchy keeps the original ID. The other resources are assigned new IDs from [method generate_scene_unique_id].  
         *      
         *  **Note:** Setting this property does not emit the [signal changed] signal.  
         *  **Warning:** When setting, the ID must only consist of letters, numbers, and underscores. Otherwise, it will fail and default to a randomly generated ID.  
         */
        get resourceSceneUniqueId(): string
        set resourceSceneUniqueId(value: string)
        
        /** Emitted when the resource changes, usually when one of its properties is modified. See also [method emit_changed].  
         *      
         *  **Note:** This signal is not emitted automatically for properties of custom resources. If necessary, a setter needs to be created to emit the signal.  
         */
        readonly changed: Signal<() => void>
        
        /** Emitted by a newly duplicated resource with [member resource_local_to_scene] set to `true`. */
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
        
        /** Gets the list of extensions for files this loader is able to read. */
        /* gdvirtual */ _getRecognizedExtensions(): PackedStringArray
        
        /** Tells whether or not this loader should load a resource from its resource path for a given type.  
         *  If it is not implemented, the default behavior returns whether the path's extension is within the ones provided by [method _get_recognized_extensions], and if the type is within the ones provided by [method _get_resource_type].  
         */
        /* gdvirtual */ _recognizePath(path: string, type: StringName): boolean
        
        /** Tells which resource class this loader can load.  
         *      
         *  **Note:** Custom resource types defined by scripts aren't known by the [ClassDB], so you might just handle `"Resource"` for them.  
         */
        /* gdvirtual */ _handlesType(type: StringName): boolean
        
        /** Gets the class name of the resource associated with the given path. If the loader cannot handle it, it should return `""`.  
         *      
         *  **Note:** Custom resource types defined by scripts aren't known by the [ClassDB], so you might just return `"Resource"` for them.  
         */
        /* gdvirtual */ _getResourceType(path: string): string
        
        /** Returns the script class name associated with the [Resource] under the given [param path]. If the resource has no script or the script isn't a named class, it should return `""`. */
        /* gdvirtual */ _getResourceScriptClass(path: string): string
        
        /** Should return the unique ID for the resource associated with the given path. If this method is not overridden, a `.uid` file is generated along with the resource file, containing the unique ID. */
        /* gdvirtual */ _getResourceUid(path: string): int64
        
        /** If implemented, gets the dependencies of a given resource. If [param add_types] is `true`, paths should be appended `::TypeName`, where `TypeName` is the class name of the dependency.  
         *      
         *  **Note:** Custom resource types defined by scripts aren't known by the [ClassDB], so you might just return `"Resource"` for them.  
         */
        /* gdvirtual */ _getDependencies(path: string, addTypes: boolean): PackedStringArray
        
        /** If implemented, renames dependencies within the given resource and saves it. [param renames] is a dictionary `{ String => String }` mapping old dependency paths to new paths.  
         *  Returns [constant OK] on success, or an [enum Error] constant in case of failure.  
         */
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
        
        /** Sets a new UID for the resource at the given [param path]. Returns [constant OK] on success, or an [enum Error] constant in case of failure. */
        /* gdvirtual */ _setUid(path: string, uid: int64): GError
        
        /** Returns whether the given resource object can be saved by this saver. */
        /* gdvirtual */ _recognize(resource: Resource): boolean
        
        /** Returns the list of extensions available for saving the resource object, provided it is recognized (see [method _recognize]). */
        /* gdvirtual */ _getRecognizedExtensions(resource: Resource): PackedStringArray
        
        /** Returns `true` if this saver handles a given save path and `false` otherwise.  
         *  If this method is not implemented, the default behavior returns whether the path's extension is within the ones provided by [method _get_recognized_extensions].  
         */
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
        /** Creates a new [AudioStreamOggVorbis] instance from the given buffer. The buffer must contain Ogg Vorbis data. */
        static loadFromBuffer(streamData: PackedByteArray | byte[] | ArrayBuffer): null | AudioStreamOggVorbis
        
        /** Creates a new [AudioStreamOggVorbis] instance from the given file path. The file must be in Ogg Vorbis format. */
        static loadFromFile(path: string): null | AudioStreamOggVorbis
    }
    class ResourceImporterSvg extends ResourceImporter {
        constructor(identifier?: any)
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
    class ResourcePreloader<Map extends NodePathMap = any> extends Node<Map> {
        constructor(identifier?: any)
        /** Adds a resource to the preloader with the given [param name]. If a resource with the given [param name] already exists, the new resource will be renamed to "[param name] N" where N is an incrementing number starting from 2. */
        addResource(name: StringName, resource: Resource): void
        
        /** Removes the resource associated to [param name] from the preloader. */
        removeResource(name: StringName): void
        
        /** Renames a resource inside the preloader from [param name] to [param newname]. */
        renameResource(name: StringName, newname: StringName): void
        
        /** Returns `true` if the preloader contains a resource associated to [param name]. */
        hasResource(name: StringName): boolean
        
        /** Returns the resource associated to [param name]. */
        getResource(name: StringName): null | Resource
        
        /** Returns the list of resources inside the preloader. */
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
    class RetargetModifier3D<Map extends NodePathMap = any> extends SkeletonModifier3D<Map> {
        /** If set, allows to retarget the position. */
        static readonly TRANSFORM_FLAG_POSITION = 1
        
        /** If set, allows to retarget the rotation. */
        static readonly TRANSFORM_FLAG_ROTATION = 2
        
        /** If set, allows to retarget the scale. */
        static readonly TRANSFORM_FLAG_SCALE = 4
        
        /** If set, allows to retarget the position/rotation/scale. */
        static readonly TRANSFORM_FLAG_ALL = 7
        constructor(identifier?: any)
        
        /** Sets [constant TRANSFORM_FLAG_POSITION] into [member enable]. */
        setPositionEnabled(enabled: boolean): void
        
        /** Returns `true` if [member enable] has [constant TRANSFORM_FLAG_POSITION]. */
        isPositionEnabled(): boolean
        
        /** Sets [constant TRANSFORM_FLAG_ROTATION] into [member enable]. */
        setRotationEnabled(enabled: boolean): void
        
        /** Returns `true` if [member enable] has [constant TRANSFORM_FLAG_ROTATION]. */
        isRotationEnabled(): boolean
        
        /** Sets [constant TRANSFORM_FLAG_SCALE] into [member enable]. */
        setScaleEnabled(enabled: boolean): void
        
        /** Returns `true` if [member enable] has [constant TRANSFORM_FLAG_SCALE]. */
        isScaleEnabled(): boolean
        
        /** [SkeletonProfile] for retargeting bones with names matching the bone list. */
        get profile(): null | SkeletonProfile
        set profile(value: null | SkeletonProfile)
        
        /** If `false`, in case the target skeleton has fewer bones than the source skeleton, the source bone parent's transform will be ignored.  
         *  Instead, it is possible to retarget between models with different body shapes, and position, rotation, and scale can be retargeted separately.  
         *  If `true`, retargeting is performed taking into account global pose.  
         *  In case the target skeleton has fewer bones than the source skeleton, the source bone parent's transform is taken into account. However, bone length between skeletons must match exactly, if not, the bones will be forced to expand or shrink.  
         *  This is useful for using dummy bone with length `0` to match postures when retargeting between models with different number of bones.  
         */
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
        
        /** The length of a section of the ribbon. */
        get sectionLength(): float64
        set sectionLength(value: float64)
        
        /** The number of segments in a section. The [member curve] is sampled on each segment to determine its size. Higher values result in a more detailed ribbon at the cost of performance. */
        get sectionSegments(): int64
        set sectionSegments(value: int64)
        
        /** Determines the size of the ribbon along its length. The size of a particular section segment is obtained by multiplying the baseline [member size] by the value of this curve at the given distance. For values smaller than `0`, the faces will be inverted. Should be a unit [Curve]. */
        get curve(): null | Curve
        set curve(value: null | Curve)
    }
    /** A custom effect for a [RichTextLabel].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_richtexteffect.html  
     */
    class RichTextEffect extends Resource {
        constructor(identifier?: any)
        /** Override this method to modify properties in [param char_fx]. The method must return `true` if the character could be transformed successfully. If the method returns `false`, it will skip transformation to avoid displaying broken text. */
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
    class RichTextLabel<Map extends NodePathMap = any> extends Control<Map> {
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
        
        /** Returns the text without BBCode mark-up. */
        getParsedText(): string
        
        /** Adds raw non-BBCode-parsed text to the tag stack. */
        addText(text: string): void
        
        /** Adds an image's opening and closing tags to the tag stack, optionally providing a [param width] and [param height] to resize the image, a [param color] to tint the image and a [param region] to only use parts of the image.  
         *  If [param width] or [param height] is set to 0, the image size will be adjusted in order to keep the original aspect ratio.  
         *  If [param width] and [param height] are not set, but [param region] is, the region's rect will be used.  
         *  [param key] is an optional identifier, that can be used to modify the image via [method update_image].  
         *  If [param pad] is set, and the image is smaller than the size specified by [param width] and [param height], the image padding is added to match the size instead of upscaling.  
         *  If [param size_in_percent] is set, [param width] and [param height] values are percentages of the control width instead of pixels.  
         *  [param alt_text] is used as the image description for assistive apps.  
         */
        addImage(image: Texture2D, width?: int64 /* = 0 */, height?: int64 /* = 0 */, color?: Color /* = new Color(1, 1, 1, 1) */, inlineAlign?: InlineAlignment /* = 5 */, region?: Rect2 /* = new Rect2(0, 0, 0, 0) */, key?: any /* = <any> {} */, pad?: boolean /* = false */, tooltip?: string /* = '' */, sizeInPercent?: boolean /* = false */, altText?: string /* = '' */): void
        
        /** Updates the existing images with the key [param key]. Only properties specified by [param mask] bits are updated. See [method add_image]. */
        updateImage(key: any, mask: RichTextLabel.ImageUpdateMask, image: Texture2D, width?: int64 /* = 0 */, height?: int64 /* = 0 */, color?: Color /* = new Color(1, 1, 1, 1) */, inlineAlign?: InlineAlignment /* = 5 */, region?: Rect2 /* = new Rect2(0, 0, 0, 0) */, pad?: boolean /* = false */, tooltip?: string /* = '' */, sizeInPercent?: boolean /* = false */): void
        
        /** Adds a newline tag to the tag stack. */
        newline(): void
        
        /** Removes a paragraph of content from the label. Returns `true` if the paragraph exists.  
         *  The [param paragraph] argument is the index of the paragraph to remove, it can take values in the interval `[0, get_paragraph_count() - 1]`.  
         *  If [param no_invalidate] is set to `true`, cache for the subsequent paragraphs is not invalidated. Use it for faster updates if deleted paragraph is fully self-contained (have no unclosed tags), or this call is part of the complex edit operation and [method invalidate_paragraph] will be called at the end of operation.  
         */
        removeParagraph(paragraph: int64, noInvalidate?: boolean /* = false */): boolean
        
        /** Invalidates [param paragraph] and all subsequent paragraphs cache. */
        invalidateParagraph(paragraph: int64): boolean
        
        /** Adds a [code skip-lint][font]` tag to the tag stack. Overrides default fonts for its duration.  
         *  Passing `0` to [param font_size] will use the existing default font size.  
         */
        pushFont(font: Font, fontSize?: int64 /* = 0 */): void
        
        /** Adds a [code skip-lint][font_size]` tag to the tag stack. Overrides default font size for its duration. */
        pushFontSize(fontSize: int64): void
        
        /** Adds a [code skip-lint][font]` tag with a normal font to the tag stack. */
        pushNormal(): void
        
        /** Adds a [code skip-lint][font]` tag with a bold font to the tag stack. This is the same as adding a [code skip-lint]**` tag if not currently in a [code skip-lint] *` tag. */
        pushBold(): void
        
        /** Adds a [code skip-lint][font]` tag with a bold italics font to the tag stack. */
        pushBoldItalics(): void
        
        /** Adds a [code skip-lint][font]` tag with an italics font to the tag stack. This is the same as adding an [code skip-lint] *` tag if not currently in a [code skip-lint]**` tag. */
        pushItalics(): void
        
        /** Adds a [code skip-lint][font]` tag with a monospace font to the tag stack. */
        pushMono(): void
        
        /** Adds a [code skip-lint][color]` tag to the tag stack. */
        pushColor(color: Color): void
        
        /** Adds a [code skip-lint][outline_size]` tag to the tag stack. Overrides default text outline size for its duration. */
        pushOutlineSize(outlineSize: int64): void
        
        /** Adds a [code skip-lint][outline_color]` tag to the tag stack. Adds text outline for its duration. */
        pushOutlineColor(color: Color): void
        
        /** Adds a [code skip-lint][p]` tag to the tag stack. */
        pushParagraph(alignment: HorizontalAlignment, baseDirection?: Control.TextDirection /* = 0 */, language?: string /* = '' */, stParser?: TextServer.StructuredTextParser /* = 0 */, justificationFlags?: TextServer.JustificationFlag /* = 163 */, tabStops?: PackedFloat32Array | float32[] /* = [] */): void
        
        /** Adds an [code skip-lint][indent]` tag to the tag stack. Multiplies [param level] by current [member tab_size] to determine new margin length. */
        pushIndent(level: int64): void
        
        /** Adds [code skip-lint][ol]` or [code skip-lint][ul]` tag to the tag stack. Multiplies [param level] by current [member tab_size] to determine new margin length. */
        pushList(level: int64, type: RichTextLabel.ListType, capitalize: boolean, bullet?: string /* = '•' */): void
        
        /** Adds a meta tag to the tag stack. Similar to the BBCode [code skip-lint][url=something]{text}[/url]`, but supports non-[String] metadata types.  
         *  If [member meta_underlined] is `true`, meta tags display an underline. This behavior can be customized with [param underline_mode].  
         *      
         *  **Note:** Meta tags do nothing by default when clicked. To assign behavior when clicked, connect [signal meta_clicked] to a function that is called when the meta tag is clicked.  
         */
        pushMeta(data: any, underlineMode?: RichTextLabel.MetaUnderline /* = 1 */, tooltip?: string /* = '' */): void
        
        /** Adds a [code skip-lint][hint]` tag to the tag stack. Same as BBCode [code skip-lint][hint=something]{text}[/hint]`. */
        pushHint(description: string): void
        
        /** Adds language code used for text shaping algorithm and Open-Type font features. */
        pushLanguage(language: string): void
        
        /** Adds a [code skip-lint][u]` tag to the tag stack. */
        pushUnderline(): void
        
        /** Adds a [code skip-lint][s]` tag to the tag stack. */
        pushStrikethrough(): void
        
        /** Adds a [code skip-lint][table=columns,inline_align]` tag to the tag stack. Use [method set_table_column_expand] to set column expansion ratio. Use [method push_cell] to add cells. [param name] is used as the table name for assistive apps. */
        pushTable(columns: int64, inlineAlign?: InlineAlignment /* = 0 */, alignToRow?: int64 /* = -1 */, name?: string /* = '' */): void
        
        /** Adds a [code skip-lint][dropcap]` tag to the tag stack. Drop cap (dropped capital) is a decorative element at the beginning of a paragraph that is larger than the rest of the text. */
        pushDropcap(string_: string, font: Font, size: int64, dropcapMargins?: Rect2 /* = new Rect2(0, 0, 0, 0) */, color?: Color /* = new Color(1, 1, 1, 1) */, outlineSize?: int64 /* = 0 */, outlineColor?: Color /* = new Color(0, 0, 0, 0) */): void
        
        /** Edits the selected column's expansion options. If [param expand] is `true`, the column expands in proportion to its expansion ratio versus the other columns' ratios.  
         *  For example, 2 columns with ratios 3 and 4 plus 70 pixels in available width would expand 30 and 40 pixels, respectively.  
         *  If [param expand] is `false`, the column will not contribute to the total ratio.  
         */
        setTableColumnExpand(column: int64, expand: boolean, ratio?: int64 /* = 1 */, shrink?: boolean /* = true */): void
        
        /** Sets table column name for assistive apps. */
        setTableColumnName(column: int64, name: string): void
        
        /** Sets color of a table cell. Separate colors for alternating rows can be specified. */
        setCellRowBackgroundColor(oddRowBg: Color, evenRowBg: Color): void
        
        /** Sets color of a table cell border. */
        setCellBorderColor(color: Color): void
        
        /** Sets minimum and maximum size overrides for a table cell. */
        setCellSizeOverride(minSize: Vector2, maxSize: Vector2): void
        
        /** Sets inner padding of a table cell. */
        setCellPadding(padding: Rect2): void
        
        /** Adds a [code skip-lint][cell]` tag to the tag stack. Must be inside a [code skip-lint][table]` tag. See [method push_table] for details. Use [method set_table_column_expand] to set column expansion ratio, [method set_cell_border_color] to set cell border, [method set_cell_row_background_color] to set cell background, [method set_cell_size_override] to override cell size, and [method set_cell_padding] to set padding. */
        pushCell(): void
        
        /** Adds a [code skip-lint][fgcolor]` tag to the tag stack.  
         *      
         *  **Note:** The foreground color has padding applied by default, which is controlled using [theme_item text_highlight_h_padding] and [theme_item text_highlight_v_padding]. This can lead to overlapping highlights if foreground colors are placed on neighboring lines/columns, so consider setting those theme items to `0` if you want to avoid this.  
         */
        pushFgcolor(fgcolor: Color): void
        
        /** Adds a [code skip-lint][bgcolor]` tag to the tag stack.  
         *      
         *  **Note:** The background color has padding applied by default, which is controlled using [theme_item text_highlight_h_padding] and [theme_item text_highlight_v_padding]. This can lead to overlapping highlights if background colors are placed on neighboring lines/columns, so consider setting those theme items to `0` if you want to avoid this.  
         */
        pushBgcolor(bgcolor: Color): void
        
        /** Adds a custom effect tag to the tag stack. The effect does not need to be in [member custom_effects]. The environment is directly passed to the effect. */
        pushCustomfx(effect: RichTextEffect, env: GDictionary): void
        
        /** Adds a context marker to the tag stack. See [method pop_context]. */
        pushContext(): void
        
        /** Terminates tags opened after the last [method push_context] call (including context marker), or all tags if there's no context marker on the stack. */
        popContext(): void
        
        /** Terminates the current tag. Use after `push_*` methods to close BBCodes manually. Does not need to follow `add_*` methods. */
        pop(): void
        
        /** Terminates all tags opened by `push_*` methods. */
        popAll(): void
        
        /** Clears the tag stack, causing the label to display nothing.  
         *      
         *  **Note:** This method does not affect [member text], and its contents will show again if the label is redrawn. However, setting [member text] to an empty [String] also clears the stack.  
         */
        clear(): void
        
        /** Returns the vertical scrollbar.  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.  
         */
        getVScrollBar(): null | VScrollBar
        
        /** Scrolls the window's top line to match [param line]. */
        scrollToLine(line: int64): void
        
        /** Scrolls the window's top line to match first line of the [param paragraph]. */
        scrollToParagraph(paragraph: int64): void
        
        /** Scrolls to the beginning of the current selection. */
        scrollToSelection(): void
        
        /** Returns the current selection first character index if a selection is active, `-1` otherwise. Does not include BBCodes. */
        getSelectionFrom(): int64
        
        /** Returns the current selection last character index if a selection is active, `-1` otherwise. Does not include BBCodes. */
        getSelectionTo(): int64
        
        /** Returns the current selection vertical line offset if a selection is active, `-1.0` otherwise. */
        getSelectionLineOffset(): float64
        
        /** Select all the text.  
         *  If [member selection_enabled] is `false`, no selection will occur.  
         */
        selectAll(): void
        
        /** Returns the current selection text. Does not include BBCodes. */
        getSelectedText(): string
        
        /** Clears the current selection. */
        deselect(): void
        
        /** The assignment version of [method append_text]. Clears the tag stack and inserts the new content. */
        parseBbcode(bbcode: string): void
        
        /** Parses [param bbcode] and adds tags to the tag stack as needed.  
         *      
         *  **Note:** Using this method, you can't close a tag that was opened in a previous [method append_text] call. This is done to improve performance, especially when updating large RichTextLabels since rebuilding the whole BBCode every time would be slower. If you absolutely need to close a tag in a future method call, append the [member text] instead of using [method append_text].  
         */
        appendText(bbcode: string): void
        
        /** If [member threaded] is enabled, returns `true` if the background thread has finished text processing, otherwise always return `true`. */
        isReady(): boolean
        
        /** If [member threaded] is enabled, returns `true` if the background thread has finished text processing, otherwise always return `true`. */
        isFinished(): boolean
        
        /** Returns the line number of the character position provided. Line and character numbers are both zero-indexed.  
         *      
         *  **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_finished] or [signal finished] to determine whether document is fully loaded.  
         */
        getCharacterLine(character: int64): int64
        
        /** Returns the paragraph number of the character position provided. Paragraph and character numbers are both zero-indexed.  
         *      
         *  **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_finished] or [signal finished] to determine whether document is fully loaded.  
         */
        getCharacterParagraph(character: int64): int64
        
        /** Returns the total number of characters from text tags. Does not include BBCodes. */
        getTotalCharacterCount(): int64
        
        /** Returns the total number of lines in the text. Wrapped text is counted as multiple lines.  
         *      
         *  **Note:** If [member visible_characters_behavior] is set to [constant TextServer.VC_CHARS_BEFORE_SHAPING] only visible wrapped lines are counted.  
         *      
         *  **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_finished] or [signal finished] to determine whether document is fully loaded.  
         */
        getLineCount(): int64
        
        /** Returns the indexes of the first and last visible characters for the given [param line], as a [Vector2i].  
         *      
         *  **Note:** If [member visible_characters_behavior] is set to [constant TextServer.VC_CHARS_BEFORE_SHAPING] only visible wrapped lines are counted.  
         *      
         *  **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_finished] or [signal finished] to determine whether document is fully loaded.  
         */
        getLineRange(line: int64): Vector2I
        
        /** Returns the number of visible lines.  
         *      
         *  **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_finished] or [signal finished] to determine whether document is fully loaded.  
         */
        getVisibleLineCount(): int64
        
        /** Returns the total number of paragraphs (newlines or `p` tags in the tag stack's text tags). Considers wrapped text as one paragraph. */
        getParagraphCount(): int64
        
        /** Returns the number of visible paragraphs. A paragraph is considered visible if at least one of its lines is visible.  
         *      
         *  **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_finished] or [signal finished] to determine whether document is fully loaded.  
         */
        getVisibleParagraphCount(): int64
        
        /** Returns the height of the content.  
         *      
         *  **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_finished] or [signal finished] to determine whether document is fully loaded.  
         */
        getContentHeight(): int64
        
        /** Returns the width of the content.  
         *      
         *  **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_finished] or [signal finished] to determine whether document is fully loaded.  
         */
        getContentWidth(): int64
        
        /** Returns the height of the line found at the provided index.  
         *      
         *  **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_finished] or [signal finished] to determine whether the document is fully loaded.  
         */
        getLineHeight(line: int64): int64
        
        /** Returns the width of the line found at the provided index.  
         *      
         *  **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_finished] or [signal finished] to determine whether the document is fully loaded.  
         */
        getLineWidth(line: int64): int64
        
        /** Returns the vertical offset of the line found at the provided index.  
         *      
         *  **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_finished] or [signal finished] to determine whether document is fully loaded.  
         */
        getLineOffset(line: int64): float64
        
        /** Returns the vertical offset of the paragraph found at the provided index.  
         *      
         *  **Note:** If [member threaded] is enabled, this method returns a value for the loaded part of the document. Use [method is_finished] or [signal finished] to determine whether document is fully loaded.  
         */
        getParagraphOffset(paragraph: int64): float64
        
        /** Parses BBCode parameter [param expressions] into a dictionary. */
        parseExpressionsForValues(expressions: PackedStringArray | string[]): GDictionary
        
        /** Installs a custom effect. This can also be done in the Inspector through the [member custom_effects] property. [param effect] should be a valid [RichTextEffect].  
         *  **Example:** With the following script extending from [RichTextEffect]:  
         *    
         *  The above effect can be installed in [RichTextLabel] from a script:  
         *    
         */
        installEffect(effect: any): void
        
        /** Reloads custom effects. Useful when [member custom_effects] is modified manually. */
        reloadEffects(): void
        
        /** Returns the [PopupMenu] of this [RichTextLabel]. By default, this menu is displayed when right-clicking on the [RichTextLabel].  
         *  You can add custom menu items or remove standard ones. Make sure your IDs don't conflict with the standard ones (see [enum MenuItems]). For example:  
         *    
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member Window.visible] property.  
         */
        getMenu(): null | PopupMenu
        
        /** Returns whether the menu is visible. Use this instead of `get_menu().visible` to improve performance (so the creation of the menu is avoided). */
        isMenuVisible(): boolean
        
        /** Executes a given action as defined in the [enum MenuItems] enum. */
        menuOption(option: int64): void
        
        /** If `true`, the label uses BBCode formatting.  
         *      
         *  **Note:** This only affects the contents of [member text], not the tag stack.  
         */
        get bbcodeEnabled(): boolean
        set bbcodeEnabled(value: boolean)
        
        /** The label's text in BBCode format. Is not representative of manual modifications to the internal tag stack. Erases changes made by other methods when edited.  
         *      
         *  **Note:** If [member bbcode_enabled] is `true`, it is unadvised to use the `+=` operator with [member text] (e.g. `text += "some string"`) as it replaces the whole text and can cause slowdowns. It will also erase all BBCode that was added to stack using `push_*` methods. Use [method append_text] for adding text instead, unless you absolutely need to close a tag that was opened in an earlier method call.  
         */
        get text(): string
        set text(value: string)
        
        /** If `true`, the label's minimum size will be automatically updated to fit its content, matching the behavior of [Label]. */
        get fitContent(): boolean
        set fitContent(value: boolean)
        
        /** If `true`, the scrollbar is visible. Setting this to `false` does not block scrolling completely. See [method scroll_to_line]. */
        get scrollActive(): boolean
        set scrollActive(value: boolean)
        
        /** If `true`, the window scrolls down to display new content automatically. */
        get scrollFollowing(): boolean
        set scrollFollowing(value: boolean)
        
        /** If set to something other than [constant TextServer.AUTOWRAP_OFF], the text gets wrapped inside the node's bounding rectangle. To see how each mode behaves, see [enum TextServer.AutowrapMode]. */
        get autowrapMode(): int64
        set autowrapMode(value: int64)
        
        /** Autowrap space trimming flags. See [constant TextServer.BREAK_TRIM_START_EDGE_SPACES] and [constant TextServer.BREAK_TRIM_END_EDGE_SPACES] for more info. */
        get autowrapTrimFlags(): int64
        set autowrapTrimFlags(value: int64)
        
        /** The number of spaces associated with a single tab length. Does not affect `\t` in text tags, only indent tags. */
        get tabSize(): int64
        set tabSize(value: int64)
        
        /** If `true`, a right-click displays the context menu. */
        get contextMenuEnabled(): boolean
        set contextMenuEnabled(value: boolean)
        
        /** If `true`, shortcut keys for context menu items are enabled, even if the context menu is disabled. */
        get shortcutKeysEnabled(): boolean
        set shortcutKeysEnabled(value: boolean)
        
        /** Controls the text's horizontal alignment. Supports left, center, right, and fill, or justify. Set it to one of the [enum HorizontalAlignment] constants. */
        get horizontalAlignment(): int64
        set horizontalAlignment(value: int64)
        
        /** Controls the text's vertical alignment. Supports top, center, bottom, and fill. Set it to one of the [enum VerticalAlignment] constants. */
        get verticalAlignment(): int64
        set verticalAlignment(value: int64)
        
        /** Line fill alignment rules. See [enum TextServer.JustificationFlag] for more information. */
        get justificationFlags(): int64
        set justificationFlags(value: int64)
        
        /** Aligns text to the given tab-stops. */
        get tabStops(): PackedFloat32Array
        set tabStops(value: PackedFloat32Array | float32[])
        
        /** The currently installed custom effects. This is an array of [RichTextEffect]s.  
         *  To add a custom effect, it's more convenient to use [method install_effect].  
         */
        get customEffects(): GArray
        set customEffects(value: GArray)
        
        /** If `true`, the label underlines meta tags such as [code skip-lint][url]{text}[/url]`. These tags can call a function when clicked if [signal meta_clicked] is connected to a function. */
        get metaUnderlined(): boolean
        set metaUnderlined(value: boolean)
        
        /** If `true`, the label underlines hint tags such as [code skip-lint][hint=description]{text}[/hint]`. */
        get hintUnderlined(): boolean
        set hintUnderlined(value: boolean)
        
        /** If `true`, text processing is done in a background thread. */
        get threaded(): boolean
        set threaded(value: boolean)
        
        /** The delay after which the loading progress bar is displayed, in milliseconds. Set to `-1` to disable progress bar entirely.  
         *      
         *  **Note:** Progress bar is displayed only if [member threaded] is enabled.  
         */
        get progressBarDelay(): int64
        set progressBarDelay(value: int64)
        
        /** If `true`, the label allows text selection. */
        get selectionEnabled(): boolean
        set selectionEnabled(value: boolean)
        
        /** If `true`, the selected text will be deselected when focus is lost. */
        get deselectOnFocusLossEnabled(): boolean
        set deselectOnFocusLossEnabled(value: boolean)
        
        /** If `true`, allow drag and drop of selected text. */
        get dragAndDropSelectionEnabled(): boolean
        set dragAndDropSelectionEnabled(value: boolean)
        
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
        
        /** Triggered when the user clicks on content between meta (URL) tags. If the meta is defined in BBCode, e.g. [code skip-lint][url={"key": "value"}]Text[/url]`, then the parameter for this signal will always be a [String] type. If a particular type or an object is desired, the [method push_meta] method must be used to manually insert the data into the tag stack. Alternatively, you can convert the [String] input to the desired type based on its contents (such as calling [method JSON.parse] on it).  
         *  For example, the following method can be connected to [signal meta_clicked] to open clicked URLs using the user's default web browser:  
         *    
         */
        readonly metaClicked: Signal<(meta: any) => void>
        
        /** Triggers when the mouse enters a meta tag. */
        readonly metaHoverStarted: Signal<(meta: any) => void>
        
        /** Triggers when the mouse exits a meta tag. */
        readonly metaHoverEnded: Signal<(meta: any) => void>
        
        /** Triggered when the document is fully loaded.  
         *      
         *  **Note:** This can happen before the text is processed for drawing. Scrolling values may not be valid until the document is drawn for the first time after this signal.  
         */
        readonly finished: Signal<() => void>
    }
}
