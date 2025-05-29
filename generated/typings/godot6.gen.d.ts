// AUTO-GENERATED
declare module "godot" {
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
    class RigidBody2D<Map extends NodePathMap = any> extends PhysicsBody2D<Map> {
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
        
        /** Called during physics processing, allowing you to read and safely modify the simulation state for the object. By default, it is called before the standard force integration, but the [member custom_integrator] property allows you to disable the standard force integration and do fully custom force integration for a body. */
        /* gdvirtual */ _integrateForces(state: PhysicsDirectBodyState2D): void
        
        /** Returns the number of contacts this body has with other bodies. By default, this returns 0 unless bodies are configured to monitor contacts (see [member contact_monitor]).  
         *      
         *  **Note:** To retrieve the colliding bodies, use [method get_colliding_bodies].  
         */
        getContactCount(): int64
        
        /** Sets the body's velocity on the given axis. The velocity in the given vector axis will be set as the given vector length. This is useful for jumping behavior. */
        setAxisVelocity(axisVelocity: Vector2): void
        
        /** Applies a directional impulse without affecting rotation.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         *  This is equivalent to using [method apply_impulse] at the body's center of mass.  
         */
        applyCentralImpulse(impulse?: Vector2 /* = Vector2.ZERO */): void
        
        /** Applies a positioned impulse to the body.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        applyImpulse(impulse: Vector2, position?: Vector2 /* = Vector2.ZERO */): void
        
        /** Applies a rotational impulse to the body without affecting the position.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         *      
         *  **Note:** [member inertia] is required for this to work. To have [member inertia], an active [CollisionShape2D] must be a child of the node, or you can manually set [member inertia].  
         */
        applyTorqueImpulse(torque: float64): void
        
        /** Applies a directional force without affecting rotation. A force is time dependent and meant to be applied every physics update.  
         *  This is equivalent to using [method apply_force] at the body's center of mass.  
         */
        applyCentralForce(force: Vector2): void
        
        /** Applies a positioned force to the body. A force is time dependent and meant to be applied every physics update.  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        applyForce(force: Vector2, position?: Vector2 /* = Vector2.ZERO */): void
        
        /** Applies a rotational force without affecting position. A force is time dependent and meant to be applied every physics update.  
         *      
         *  **Note:** [member inertia] is required for this to work. To have [member inertia], an active [CollisionShape2D] must be a child of the node, or you can manually set [member inertia].  
         */
        applyTorque(torque: float64): void
        
        /** Adds a constant directional force without affecting rotation that keeps being applied over time until cleared with `constant_force = Vector2(0, 0)`.  
         *  This is equivalent to using [method add_constant_force] at the body's center of mass.  
         */
        addConstantCentralForce(force: Vector2): void
        
        /** Adds a constant positioned force to the body that keeps being applied over time until cleared with `constant_force = Vector2(0, 0)`.  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        addConstantForce(force: Vector2, position?: Vector2 /* = Vector2.ZERO */): void
        
        /** Adds a constant rotational force without affecting position that keeps being applied over time until cleared with `constant_torque = 0`. */
        addConstantTorque(torque: float64): void
        
        /** Returns a list of the bodies colliding with this one. Requires [member contact_monitor] to be set to `true` and [member max_contacts_reported] to be set high enough to detect all the collisions.  
         *      
         *  **Note:** The result of this test is not immediate after moving objects. For performance, list of collisions is updated once per frame and before the physics step. Consider using signals instead.  
         */
        getCollidingBodies(): GArray
        
        /** The body's mass. */
        get mass(): float64
        set mass(value: float64)
        
        /** The physics material override for the body.  
         *  If a material is assigned to this property, it will be used instead of any other physics material, such as an inherited one.  
         */
        get physicsMaterialOverride(): null | PhysicsMaterial
        set physicsMaterialOverride(value: null | PhysicsMaterial)
        
        /** Multiplies the gravity applied to the body. The body's gravity is calculated from the [member ProjectSettings.physics/2d/default_gravity] project setting and/or any additional gravity vector applied by [Area2D]s. */
        get gravityScale(): float64
        set gravityScale(value: float64)
        
        /** Defines the way the body's center of mass is set. See [enum CenterOfMassMode] for possible values. */
        get centerOfMassMode(): int64
        set centerOfMassMode(value: int64)
        
        /** The body's custom center of mass, relative to the body's origin position, when [member center_of_mass_mode] is set to [constant CENTER_OF_MASS_MODE_CUSTOM]. This is the balanced point of the body, where applied forces only cause linear acceleration. Applying forces outside of the center of mass causes angular acceleration.  
         *  When [member center_of_mass_mode] is set to [constant CENTER_OF_MASS_MODE_AUTO] (default value), the center of mass is automatically computed.  
         */
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
        
        /** If `true`, the body can enter sleep mode when there is no movement. See [member sleeping]. */
        get canSleep(): boolean
        set canSleep(value: boolean)
        
        /** If `true`, the body cannot rotate. Gravity and forces only apply linear movement. */
        get lockRotation(): boolean
        set lockRotation(value: boolean)
        
        /** If `true`, the body is frozen. Gravity and forces are not applied anymore.  
         *  See [member freeze_mode] to set the body's behavior when frozen.  
         *  For a body that is always frozen, use [StaticBody2D] or [AnimatableBody2D] instead.  
         */
        get freeze(): boolean
        set freeze(value: boolean)
        
        /** The body's freeze mode. Can be used to set the body's behavior when [member freeze] is enabled. See [enum FreezeMode] for possible values.  
         *  For a body that is always frozen, use [StaticBody2D] or [AnimatableBody2D] instead.  
         */
        get freezeMode(): int64
        set freezeMode(value: int64)
        
        /** If `true`, the standard force integration (like gravity or damping) will be disabled for this body. Other than collision response, the body will only move as determined by the [method _integrate_forces] method, if that virtual method is overridden.  
         *  Setting this property will call the method [method PhysicsServer2D.body_set_omit_force_integration] internally.  
         */
        get customIntegrator(): boolean
        set customIntegrator(value: boolean)
        
        /** Continuous collision detection mode.  
         *  Continuous collision detection tries to predict where a moving body will collide instead of moving it and correcting its movement after collision. Continuous collision detection is slower, but more precise and misses fewer collisions with small, fast-moving objects. Raycasting and shapecasting methods are available. See [enum CCDMode] for details.  
         */
        get continuousCd(): int64
        set continuousCd(value: int64)
        
        /** If `true`, the RigidBody2D will emit signals when it collides with another body.  
         *      
         *  **Note:** By default the maximum contacts reported is set to 0, meaning nothing will be recorded, see [member max_contacts_reported].  
         */
        get contactMonitor(): boolean
        set contactMonitor(value: boolean)
        
        /** The maximum number of contacts that will be recorded. Requires a value greater than 0 and [member contact_monitor] to be set to `true` to start to register contacts. Use [method get_contact_count] to retrieve the count or [method get_colliding_bodies] to retrieve bodies that have been collided with.  
         *      
         *  **Note:** The number of contacts is different from the number of collisions. Collisions between parallel edges will result in two contacts (one at each end), and collisions between parallel faces will result in four contacts (one at each corner).  
         */
        get maxContactsReported(): int64
        set maxContactsReported(value: int64)
        
        /** The body's linear velocity in pixels per second. Can be used sporadically, but **don't set this every frame**, because physics may run in another thread and runs at a different granularity. Use [method _integrate_forces] as your process loop for precise control of the body state. */
        get linearVelocity(): Vector2
        set linearVelocity(value: Vector2)
        
        /** Defines how [member linear_damp] is applied. See [enum DampMode] for possible values. */
        get linearDampMode(): int64
        set linearDampMode(value: int64)
        
        /** Damps the body's movement. By default, the body will use the [member ProjectSettings.physics/2d/default_linear_damp] setting or any value override set by an [Area2D] the body is in. Depending on [member linear_damp_mode], you can set [member linear_damp] to be added to or to replace the body's damping value.  
         *  See [member ProjectSettings.physics/2d/default_linear_damp] for more details about damping.  
         */
        get linearDamp(): float64
        set linearDamp(value: float64)
        
        /** The body's rotational velocity in  *radians*  per second. */
        get angularVelocity(): float64
        set angularVelocity(value: float64)
        
        /** Defines how [member angular_damp] is applied. See [enum DampMode] for possible values. */
        get angularDampMode(): int64
        set angularDampMode(value: int64)
        
        /** Damps the body's rotation. By default, the body will use the [member ProjectSettings.physics/2d/default_angular_damp] setting or any value override set by an [Area2D] the body is in. Depending on [member angular_damp_mode], you can set [member angular_damp] to be added to or to replace the body's damping value.  
         *  See [member ProjectSettings.physics/2d/default_angular_damp] for more details about damping.  
         */
        get angularDamp(): float64
        set angularDamp(value: float64)
        
        /** The body's total constant positional forces applied during each physics update.  
         *  See [method add_constant_force] and [method add_constant_central_force].  
         */
        get constantForce(): Vector2
        set constantForce(value: Vector2)
        
        /** The body's total constant rotational forces applied during each physics update.  
         *  See [method add_constant_torque].  
         */
        get constantTorque(): float64
        set constantTorque(value: float64)
        
        /** Emitted when one of this RigidBody2D's [Shape2D]s collides with another [PhysicsBody2D] or [TileMap]'s [Shape2D]s. Requires [member contact_monitor] to be set to `true` and [member max_contacts_reported] to be set high enough to detect all the collisions. [TileMap]s are detected if the [TileSet] has Collision [Shape2D]s.  
         *  [param body_rid] the [RID] of the other [PhysicsBody2D] or [TileSet]'s [CollisionObject2D] used by the [PhysicsServer2D].  
         *  [param body] the [Node], if it exists in the tree, of the other [PhysicsBody2D] or [TileMap].  
         *  [param body_shape_index] the index of the [Shape2D] of the other [PhysicsBody2D] or [TileMap] used by the [PhysicsServer2D]. Get the [CollisionShape2D] node with `body.shape_owner_get_owner(body.shape_find_owner(body_shape_index))`.  
         *  [param local_shape_index] the index of the [Shape2D] of this RigidBody2D used by the [PhysicsServer2D]. Get the [CollisionShape2D] node with `self.shape_owner_get_owner(self.shape_find_owner(local_shape_index))`.  
         */
        readonly bodyShapeEntered: Signal<(bodyRid: Rid, body: Node, bodyShapeIndex: int64, localShapeIndex: int64) => void>
        
        /** Emitted when the collision between one of this RigidBody2D's [Shape2D]s and another [PhysicsBody2D] or [TileMap]'s [Shape2D]s ends. Requires [member contact_monitor] to be set to `true` and [member max_contacts_reported] to be set high enough to detect all the collisions. [TileMap]s are detected if the [TileSet] has Collision [Shape2D]s.  
         *  [param body_rid] the [RID] of the other [PhysicsBody2D] or [TileSet]'s [CollisionObject2D] used by the [PhysicsServer2D].  
         *  [param body] the [Node], if it exists in the tree, of the other [PhysicsBody2D] or [TileMap].  
         *  [param body_shape_index] the index of the [Shape2D] of the other [PhysicsBody2D] or [TileMap] used by the [PhysicsServer2D]. Get the [CollisionShape2D] node with `body.shape_owner_get_owner(body.shape_find_owner(body_shape_index))`.  
         *  [param local_shape_index] the index of the [Shape2D] of this RigidBody2D used by the [PhysicsServer2D]. Get the [CollisionShape2D] node with `self.shape_owner_get_owner(self.shape_find_owner(local_shape_index))`.  
         */
        readonly bodyShapeExited: Signal<(bodyRid: Rid, body: Node, bodyShapeIndex: int64, localShapeIndex: int64) => void>
        
        /** Emitted when a collision with another [PhysicsBody2D] or [TileMap] occurs. Requires [member contact_monitor] to be set to `true` and [member max_contacts_reported] to be set high enough to detect all the collisions. [TileMap]s are detected if the [TileSet] has Collision [Shape2D]s.  
         *  [param body] the [Node], if it exists in the tree, of the other [PhysicsBody2D] or [TileMap].  
         */
        readonly bodyEntered: Signal<(body: Node) => void>
        
        /** Emitted when the collision with another [PhysicsBody2D] or [TileMap] ends. Requires [member contact_monitor] to be set to `true` and [member max_contacts_reported] to be set high enough to detect all the collisions. [TileMap]s are detected if the [TileSet] has Collision [Shape2D]s.  
         *  [param body] the [Node], if it exists in the tree, of the other [PhysicsBody2D] or [TileMap].  
         */
        readonly bodyExited: Signal<(body: Node) => void>
        
        /** Emitted when the physics engine changes the body's sleeping state.  
         *      
         *  **Note:** Changing the value [member sleeping] will not trigger this signal. It is only emitted if the sleeping state is changed by the physics engine or `emit_signal("sleeping_state_changed")` is used.  
         */
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
    class RigidBody3D<Map extends NodePathMap = any> extends PhysicsBody3D<Map> {
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
        
        /** Called during physics processing, allowing you to read and safely modify the simulation state for the object. By default, it is called before the standard force integration, but the [member custom_integrator] property allows you to disable the standard force integration and do fully custom force integration for a body. */
        /* gdvirtual */ _integrateForces(state: PhysicsDirectBodyState3D): void
        
        /** Returns the inverse inertia tensor basis. This is used to calculate the angular acceleration resulting from a torque applied to the [RigidBody3D]. */
        getInverseInertiaTensor(): Basis
        
        /** Returns the number of contacts this body has with other bodies. By default, this returns 0 unless bodies are configured to monitor contacts (see [member contact_monitor]).  
         *      
         *  **Note:** To retrieve the colliding bodies, use [method get_colliding_bodies].  
         */
        getContactCount(): int64
        
        /** Sets an axis velocity. The velocity in the given vector axis will be set as the given vector length. This is useful for jumping behavior. */
        setAxisVelocity(axisVelocity: Vector3): void
        
        /** Applies a directional impulse without affecting rotation.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         *  This is equivalent to using [method apply_impulse] at the body's center of mass.  
         */
        applyCentralImpulse(impulse: Vector3): void
        
        /** Applies a positioned impulse to the body.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        applyImpulse(impulse: Vector3, position?: Vector3 /* = new Vector3(0, 0, 0) */): void
        
        /** Applies a rotational impulse to the body without affecting the position.  
         *  An impulse is time-independent! Applying an impulse every frame would result in a framerate-dependent force. For this reason, it should only be used when simulating one-time impacts (use the "_force" functions otherwise).  
         *      
         *  **Note:** [member inertia] is required for this to work. To have [member inertia], an active [CollisionShape3D] must be a child of the node, or you can manually set [member inertia].  
         */
        applyTorqueImpulse(impulse: Vector3): void
        
        /** Applies a directional force without affecting rotation. A force is time dependent and meant to be applied every physics update.  
         *  This is equivalent to using [method apply_force] at the body's center of mass.  
         */
        applyCentralForce(force: Vector3): void
        
        /** Applies a positioned force to the body. A force is time dependent and meant to be applied every physics update.  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        applyForce(force: Vector3, position?: Vector3 /* = new Vector3(0, 0, 0) */): void
        
        /** Applies a rotational force without affecting position. A force is time dependent and meant to be applied every physics update.  
         *      
         *  **Note:** [member inertia] is required for this to work. To have [member inertia], an active [CollisionShape3D] must be a child of the node, or you can manually set [member inertia].  
         */
        applyTorque(torque: Vector3): void
        
        /** Adds a constant directional force without affecting rotation that keeps being applied over time until cleared with `constant_force = Vector3(0, 0, 0)`.  
         *  This is equivalent to using [method add_constant_force] at the body's center of mass.  
         */
        addConstantCentralForce(force: Vector3): void
        
        /** Adds a constant positioned force to the body that keeps being applied over time until cleared with `constant_force = Vector3(0, 0, 0)`.  
         *  [param position] is the offset from the body origin in global coordinates.  
         */
        addConstantForce(force: Vector3, position?: Vector3 /* = new Vector3(0, 0, 0) */): void
        
        /** Adds a constant rotational force without affecting position that keeps being applied over time until cleared with `constant_torque = Vector3(0, 0, 0)`. */
        addConstantTorque(torque: Vector3): void
        
        /** Returns a list of the bodies colliding with this one. Requires [member contact_monitor] to be set to `true` and [member max_contacts_reported] to be set high enough to detect all the collisions.  
         *      
         *  **Note:** The result of this test is not immediate after moving objects. For performance, list of collisions is updated once per frame and before the physics step. Consider using signals instead.  
         */
        getCollidingBodies(): GArray
        
        /** The body's mass. */
        get mass(): float64
        set mass(value: float64)
        
        /** The physics material override for the body.  
         *  If a material is assigned to this property, it will be used instead of any other physics material, such as an inherited one.  
         */
        get physicsMaterialOverride(): null | PhysicsMaterial
        set physicsMaterialOverride(value: null | PhysicsMaterial)
        
        /** This is multiplied by [member ProjectSettings.physics/3d/default_gravity] to produce this body's gravity. For example, a value of `1.0` will apply normal gravity, `2.0` will apply double the gravity, and `0.5` will apply half the gravity to this body. */
        get gravityScale(): float64
        set gravityScale(value: float64)
        
        /** Defines the way the body's center of mass is set. See [enum CenterOfMassMode] for possible values. */
        get centerOfMassMode(): int64
        set centerOfMassMode(value: int64)
        
        /** The body's custom center of mass, relative to the body's origin position, when [member center_of_mass_mode] is set to [constant CENTER_OF_MASS_MODE_CUSTOM]. This is the balanced point of the body, where applied forces only cause linear acceleration. Applying forces outside of the center of mass causes angular acceleration.  
         *  When [member center_of_mass_mode] is set to [constant CENTER_OF_MASS_MODE_AUTO] (default value), the center of mass is automatically computed.  
         */
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
        
        /** If `true`, the body can enter sleep mode when there is no movement. See [member sleeping]. */
        get canSleep(): boolean
        set canSleep(value: boolean)
        
        /** If `true`, the body cannot rotate. Gravity and forces only apply linear movement. */
        get lockRotation(): boolean
        set lockRotation(value: boolean)
        
        /** If `true`, the body is frozen. Gravity and forces are not applied anymore.  
         *  See [member freeze_mode] to set the body's behavior when frozen.  
         *  For a body that is always frozen, use [StaticBody3D] or [AnimatableBody3D] instead.  
         */
        get freeze(): boolean
        set freeze(value: boolean)
        
        /** The body's freeze mode. Can be used to set the body's behavior when [member freeze] is enabled. See [enum FreezeMode] for possible values.  
         *  For a body that is always frozen, use [StaticBody3D] or [AnimatableBody3D] instead.  
         */
        get freezeMode(): int64
        set freezeMode(value: int64)
        
        /** If `true`, the standard force integration (like gravity or damping) will be disabled for this body. Other than collision response, the body will only move as determined by the [method _integrate_forces] method, if that virtual method is overridden.  
         *  Setting this property will call the method [method PhysicsServer3D.body_set_omit_force_integration] internally.  
         */
        get customIntegrator(): boolean
        set customIntegrator(value: boolean)
        
        /** If `true`, continuous collision detection is used.  
         *  Continuous collision detection tries to predict where a moving body will collide, instead of moving it and correcting its movement if it collided. Continuous collision detection is more precise, and misses fewer impacts by small, fast-moving objects. Not using continuous collision detection is faster to compute, but can miss small, fast-moving objects.  
         */
        get continuousCd(): boolean
        set continuousCd(value: boolean)
        
        /** If `true`, the RigidBody3D will emit signals when it collides with another body.  
         *      
         *  **Note:** By default the maximum contacts reported is set to 0, meaning nothing will be recorded, see [member max_contacts_reported].  
         */
        get contactMonitor(): boolean
        set contactMonitor(value: boolean)
        
        /** The maximum number of contacts that will be recorded. Requires a value greater than 0 and [member contact_monitor] to be set to `true` to start to register contacts. Use [method get_contact_count] to retrieve the count or [method get_colliding_bodies] to retrieve bodies that have been collided with.  
         *      
         *  **Note:** The number of contacts is different from the number of collisions. Collisions between parallel edges will result in two contacts (one at each end), and collisions between parallel faces will result in four contacts (one at each corner).  
         */
        get maxContactsReported(): int64
        set maxContactsReported(value: int64)
        
        /** The body's linear velocity in units per second. Can be used sporadically, but **don't set this every frame**, because physics may run in another thread and runs at a different granularity. Use [method _integrate_forces] as your process loop for precise control of the body state. */
        get linearVelocity(): Vector3
        set linearVelocity(value: Vector3)
        
        /** Defines how [member linear_damp] is applied. See [enum DampMode] for possible values. */
        get linearDampMode(): int64
        set linearDampMode(value: int64)
        
        /** Damps the body's movement. By default, the body will use the [member ProjectSettings.physics/3d/default_linear_damp] project setting or any value override set by an [Area3D] the body is in. Depending on [member linear_damp_mode], you can set [member linear_damp] to be added to or to replace the body's damping value.  
         *  See [member ProjectSettings.physics/3d/default_linear_damp] for more details about damping.  
         */
        get linearDamp(): float64
        set linearDamp(value: float64)
        
        /** The RigidBody3D's rotational velocity in  *radians*  per second. */
        get angularVelocity(): Vector3
        set angularVelocity(value: Vector3)
        
        /** Defines how [member angular_damp] is applied. See [enum DampMode] for possible values. */
        get angularDampMode(): int64
        set angularDampMode(value: int64)
        
        /** Damps the body's rotation. By default, the body will use the [member ProjectSettings.physics/3d/default_angular_damp] project setting or any value override set by an [Area3D] the body is in. Depending on [member angular_damp_mode], you can set [member angular_damp] to be added to or to replace the body's damping value.  
         *  See [member ProjectSettings.physics/3d/default_angular_damp] for more details about damping.  
         */
        get angularDamp(): float64
        set angularDamp(value: float64)
        
        /** The body's total constant positional forces applied during each physics update.  
         *  See [method add_constant_force] and [method add_constant_central_force].  
         */
        get constantForce(): Vector3
        set constantForce(value: Vector3)
        
        /** The body's total constant rotational forces applied during each physics update.  
         *  See [method add_constant_torque].  
         */
        get constantTorque(): Vector3
        set constantTorque(value: Vector3)
        
        /** Emitted when one of this RigidBody3D's [Shape3D]s collides with another [PhysicsBody3D] or [GridMap]'s [Shape3D]s. Requires [member contact_monitor] to be set to `true` and [member max_contacts_reported] to be set high enough to detect all the collisions. [GridMap]s are detected if the [MeshLibrary] has Collision [Shape3D]s.  
         *  [param body_rid] the [RID] of the other [PhysicsBody3D] or [MeshLibrary]'s [CollisionObject3D] used by the [PhysicsServer3D].  
         *  [param body] the [Node], if it exists in the tree, of the other [PhysicsBody3D] or [GridMap].  
         *  [param body_shape_index] the index of the [Shape3D] of the other [PhysicsBody3D] or [GridMap] used by the [PhysicsServer3D]. Get the [CollisionShape3D] node with `body.shape_owner_get_owner(body.shape_find_owner(body_shape_index))`.  
         *  [param local_shape_index] the index of the [Shape3D] of this RigidBody3D used by the [PhysicsServer3D]. Get the [CollisionShape3D] node with `self.shape_owner_get_owner(self.shape_find_owner(local_shape_index))`.  
         */
        readonly bodyShapeEntered: Signal<(bodyRid: Rid, body: Node, bodyShapeIndex: int64, localShapeIndex: int64) => void>
        
        /** Emitted when the collision between one of this RigidBody3D's [Shape3D]s and another [PhysicsBody3D] or [GridMap]'s [Shape3D]s ends. Requires [member contact_monitor] to be set to `true` and [member max_contacts_reported] to be set high enough to detect all the collisions. [GridMap]s are detected if the [MeshLibrary] has Collision [Shape3D]s.  
         *  [param body_rid] the [RID] of the other [PhysicsBody3D] or [MeshLibrary]'s [CollisionObject3D] used by the [PhysicsServer3D]. [GridMap]s are detected if the Meshes have [Shape3D]s.  
         *  [param body] the [Node], if it exists in the tree, of the other [PhysicsBody3D] or [GridMap].  
         *  [param body_shape_index] the index of the [Shape3D] of the other [PhysicsBody3D] or [GridMap] used by the [PhysicsServer3D]. Get the [CollisionShape3D] node with `body.shape_owner_get_owner(body.shape_find_owner(body_shape_index))`.  
         *  [param local_shape_index] the index of the [Shape3D] of this RigidBody3D used by the [PhysicsServer3D]. Get the [CollisionShape3D] node with `self.shape_owner_get_owner(self.shape_find_owner(local_shape_index))`.  
         */
        readonly bodyShapeExited: Signal<(bodyRid: Rid, body: Node, bodyShapeIndex: int64, localShapeIndex: int64) => void>
        
        /** Emitted when a collision with another [PhysicsBody3D] or [GridMap] occurs. Requires [member contact_monitor] to be set to `true` and [member max_contacts_reported] to be set high enough to detect all the collisions. [GridMap]s are detected if the [MeshLibrary] has Collision [Shape3D]s.  
         *  [param body] the [Node], if it exists in the tree, of the other [PhysicsBody3D] or [GridMap].  
         */
        readonly bodyEntered: Signal<(body: Node) => void>
        
        /** Emitted when the collision with another [PhysicsBody3D] or [GridMap] ends. Requires [member contact_monitor] to be set to `true` and [member max_contacts_reported] to be set high enough to detect all the collisions. [GridMap]s are detected if the [MeshLibrary] has Collision [Shape3D]s.  
         *  [param body] the [Node], if it exists in the tree, of the other [PhysicsBody3D] or [GridMap].  
         */
        readonly bodyExited: Signal<(body: Node) => void>
        
        /** Emitted when the physics engine changes the body's sleeping state.  
         *      
         *  **Note:** Changing the value [member sleeping] will not trigger this signal. It is only emitted if the sleeping state is changed by the physics engine or `emit_signal("sleeping_state_changed")` is used.  
         */
        readonly sleepingStateChanged: Signal<() => void>
    }
    /** Editor-only helper for setting up root motion in [AnimationMixer].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_rootmotionview.html  
     */
    class RootMotionView<Map extends NodePathMap = any> extends VisualInstance3D<Map> {
        constructor(identifier?: any)
        /** Path to an [AnimationMixer] node to use as a basis for root motion. */
        get animationPath(): NodePath
        set animationPath(value: NodePath | string)
        
        /** The grid's color. */
        get color(): Color
        set color(value: Color)
        
        /** The grid's cell size in 3D units. */
        get cellSize(): float64
        set cellSize(value: float64)
        
        /** The grid's radius in 3D units. The grid's opacity will fade gradually as the distance from the origin increases until this [member radius] is reached. */
        get radius(): float64
        set radius(value: float64)
        
        /** If `true`, the grid's points will all be on the same Y coordinate ( *local*  Y = 0). If `false`, the points' original Y coordinate is preserved. */
        get zeroY(): boolean
        set zeroY(value: boolean)
    }
    class SvgTexture extends Texture2D {
        constructor(identifier?: any)
        static createFromString(source: string, scale?: float64 /* = 1 */, saturation?: float64 /* = 1 */, colorMap?: GDictionary /* = new GDictionary() */): SvgTexture
        setSizeOverride(size: Vector2I): void
        get _source(): string
        set _source(value: string)
        get baseScale(): float64
        set baseScale(value: float64)
        get saturation(): float64
        set saturation(value: float64)
        get colorMap(): GDictionary
        set colorMap(value: GDictionary)
    }
    /** High-level multiplayer API implementation.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_scenemultiplayer.html  
     */
    class SceneMultiplayer extends MultiplayerApi {
        constructor(identifier?: any)
        /** Clears the current SceneMultiplayer network state (you shouldn't call this unless you know what you are doing). */
        clear(): void
        
        /** Disconnects the peer identified by [param id], removing it from the list of connected peers, and closing the underlying connection with it. */
        disconnectPeer(id: int64): void
        
        /** Returns the IDs of the peers currently trying to authenticate with this [MultiplayerAPI]. */
        getAuthenticatingPeers(): PackedInt32Array
        
        /** Sends the specified [param data] to the remote peer identified by [param id] as part of an authentication message. This can be used to authenticate peers, and control when [signal MultiplayerAPI.peer_connected] is emitted (and the remote peer accepted as one of the connected peers). */
        sendAuth(id: int64, data: PackedByteArray | byte[] | ArrayBuffer): GError
        
        /** Mark the authentication step as completed for the remote peer identified by [param id]. The [signal MultiplayerAPI.peer_connected] signal will be emitted for this peer once the remote side also completes the authentication. No further authentication messages are expected to be received from this peer.  
         *  If a peer disconnects before completing authentication, either due to a network issue, the [member auth_timeout] expiring, or manually calling [method disconnect_peer], the [signal peer_authentication_failed] signal will be emitted instead of [signal MultiplayerAPI.peer_disconnected].  
         */
        completeAuth(id: int64): GError
        
        /** Sends the given raw [param bytes] to a specific peer identified by [param id] (see [method MultiplayerPeer.set_target_peer]). Default ID is `0`, i.e. broadcast to all peers. */
        sendBytes(bytes: PackedByteArray | byte[] | ArrayBuffer, id?: int64 /* = 0 */, mode?: MultiplayerPeer.TransferMode /* = 2 */, channel?: int64 /* = 0 */): GError
        
        /** The root path to use for RPCs and replication. Instead of an absolute path, a relative path will be used to find the node upon which the RPC should be executed.  
         *  This effectively allows to have different branches of the scene tree to be managed by different MultiplayerAPI, allowing for example to run both client and server in the same scene.  
         */
        get rootPath(): NodePath
        set rootPath(value: NodePath | string)
        
        /** The callback to execute when receiving authentication data sent via [method send_auth]. If the [Callable] is empty (default), peers will be automatically accepted as soon as they connect. */
        get authCallback(): Callable
        set authCallback(value: Callable)
        
        /** If set to a value greater than `0.0`, the maximum duration in seconds peers can stay in the authenticating state, after which the authentication will automatically fail. See the [signal peer_authenticating] and [signal peer_authentication_failed] signals. */
        get authTimeout(): float64
        set authTimeout(value: float64)
        
        /** If `true`, the MultiplayerAPI will allow encoding and decoding of object during RPCs.  
         *  **Warning:** Deserialized objects can contain code which gets executed. Do not use this option if the serialized object comes from untrusted sources to avoid potential security threat such as remote code execution.  
         */
        get allowObjectDecoding(): boolean
        set allowObjectDecoding(value: boolean)
        
        /** If `true`, the MultiplayerAPI's [member MultiplayerAPI.multiplayer_peer] refuses new incoming connections. */
        get refuseNewConnections(): boolean
        set refuseNewConnections(value: boolean)
        
        /** Enable or disable the server feature that notifies clients of other peers' connection/disconnection, and relays messages between them. When this option is `false`, clients won't be automatically notified of other peers and won't be able to send them packets through the server.  
         *      
         *  **Note:** Changing this option while other peers are connected may lead to unexpected behaviors.  
         *      
         *  **Note:** Support for this feature may depend on the current [MultiplayerPeer] configuration. See [method MultiplayerPeer.is_server_relay_supported].  
         */
        get serverRelay(): boolean
        set serverRelay(value: boolean)
        
        /** Maximum size of each synchronization packet. Higher values increase the chance of receiving full updates in a single frame, but also the chance of packet loss. See [MultiplayerSynchronizer]. */
        get maxSyncPacketSize(): int64
        set maxSyncPacketSize(value: int64)
        
        /** Maximum size of each delta packet. Higher values increase the chance of receiving full updates in a single frame, but also the chance of causing networking congestion (higher latency, disconnections). See [MultiplayerSynchronizer]. */
        get maxDeltaPacketSize(): int64
        set maxDeltaPacketSize(value: int64)
        
        /** Emitted when this MultiplayerAPI's [member MultiplayerAPI.multiplayer_peer] connects to a new peer and a valid [member auth_callback] is set. In this case, the [signal MultiplayerAPI.peer_connected] will not be emitted until [method complete_auth] is called with given peer [param id]. While in this state, the peer will not be included in the list returned by [method MultiplayerAPI.get_peers] (but in the one returned by [method get_authenticating_peers]), and only authentication data will be sent or received. See [method send_auth] for sending authentication data. */
        readonly peerAuthenticating: Signal<(id: int64) => void>
        
        /** Emitted when this MultiplayerAPI's [member MultiplayerAPI.multiplayer_peer] disconnects from a peer for which authentication had not yet completed. See [signal peer_authenticating]. */
        readonly peerAuthenticationFailed: Signal<(id: int64) => void>
        
        /** Emitted when this MultiplayerAPI's [member MultiplayerAPI.multiplayer_peer] receives a [param packet] with custom data (see [method send_bytes]). ID is the peer ID of the peer that sent the packet. */
        readonly peerPacket: Signal<(id: int64, packet: PackedByteArray) => void>
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
        
        /** Returns a list of synchronized property [NodePath]s. */
        getProperties(): GArray
        
        /** Adds the property identified by the given [param path] to the list of the properties being synchronized, optionally passing an [param index].  
         *      
         *  **Note:** For details on restrictions and limitations on property synchronization, see [MultiplayerSynchronizer].  
         */
        addProperty(path: NodePath | string, index?: int64 /* = -1 */): void
        
        /** Returns `true` if the given [param path] is configured for synchronization. */
        hasProperty(path: NodePath | string): boolean
        
        /** Removes the property identified by the given [param path] from the configuration. */
        removeProperty(path: NodePath | string): void
        
        /** Finds the index of the given [param path]. */
        propertyGetIndex(path: NodePath | string): int64
        
        /** Returns `true` if the property identified by the given [param path] is configured to be synchronized on spawn. */
        propertyGetSpawn(path: NodePath | string): boolean
        
        /** Sets whether the property identified by the given [param path] is configured to be synchronized on spawn. */
        propertySetSpawn(path: NodePath | string, enabled: boolean): void
        
        /** Returns the replication mode for the property identified by the given [param path]. See [enum ReplicationMode]. */
        propertyGetReplicationMode(path: NodePath | string): SceneReplicationConfig.ReplicationMode
        
        /** Sets the synchronization mode for the property identified by the given [param path]. See [enum ReplicationMode]. */
        propertySetReplicationMode(path: NodePath | string, mode: SceneReplicationConfig.ReplicationMode): void
        
        /** Returns `true` if the property identified by the given [param path] is configured to be synchronized on process. */
        propertyGetSync(path: NodePath | string): boolean
        
        /** Sets whether the property identified by the given [param path] is configured to be synchronized on process. */
        propertySetSync(path: NodePath | string, enabled: boolean): void
        
        /** Returns `true` if the property identified by the given [param path] is configured to be reliably synchronized when changes are detected on process. */
        propertyGetWatch(path: NodePath | string): boolean
        
        /** Sets whether the property identified by the given [param path] is configured to be reliably synchronized when changes are detected on process. */
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
        
        /** Returns the resource path to the represented [PackedScene]. */
        getPath(): string
        
        /** Returns the [SceneState] of the scene that this scene inherits from, or `null` if it doesn't inherit from any scene. */
        getBaseSceneState(): null | SceneState
        
        /** Returns the number of nodes in the scene.  
         *  The `idx` argument used to query node data in other `get_node_*` methods in the interval `[0, get_node_count() - 1]`.  
         */
        getNodeCount(): int64
        
        /** Returns the type of the node at [param idx]. */
        getNodeType(idx: int64): StringName
        
        /** Returns the name of the node at [param idx]. */
        getNodeName(idx: int64): StringName
        
        /** Returns the path to the node at [param idx].  
         *  If [param for_parent] is `true`, returns the path of the [param idx] node's parent instead.  
         */
        getNodePath(idx: int64, forParent?: boolean /* = false */): NodePath
        
        /** Returns the path to the owner of the node at [param idx], relative to the root node. */
        getNodeOwnerPath(idx: int64): NodePath
        
        /** Returns `true` if the node at [param idx] is an [InstancePlaceholder]. */
        isNodeInstancePlaceholder(idx: int64): boolean
        
        /** Returns the path to the represented scene file if the node at [param idx] is an [InstancePlaceholder]. */
        getNodeInstancePlaceholder(idx: int64): string
        
        /** Returns a [PackedScene] for the node at [param idx] (i.e. the whole branch starting at this node, with its child nodes and resources), or `null` if the node is not an instance. */
        getNodeInstance(idx: int64): null | PackedScene
        
        /** Returns the list of group names associated with the node at [param idx]. */
        getNodeGroups(idx: int64): PackedStringArray
        
        /** Returns the node's index, which is its position relative to its siblings. This is only relevant and saved in scenes for cases where new nodes are added to an instantiated or inherited scene among siblings from the base scene. Despite the name, this index is not related to the [param idx] argument used here and in other methods. */
        getNodeIndex(idx: int64): int64
        
        /** Returns the number of exported or overridden properties for the node at [param idx].  
         *  The `prop_idx` argument used to query node property data in other `get_node_property_*` methods in the interval `[0, get_node_property_count() - 1]`.  
         */
        getNodePropertyCount(idx: int64): int64
        
        /** Returns the name of the property at [param prop_idx] for the node at [param idx]. */
        getNodePropertyName(idx: int64, propIdx: int64): StringName
        
        /** Returns the value of the property at [param prop_idx] for the node at [param idx]. */
        getNodePropertyValue(idx: int64, propIdx: int64): any
        
        /** Returns the number of signal connections in the scene.  
         *  The `idx` argument used to query connection metadata in other `get_connection_*` methods in the interval `[0, get_connection_count() - 1]`.  
         */
        getConnectionCount(): int64
        
        /** Returns the path to the node that owns the signal at [param idx], relative to the root node. */
        getConnectionSource(idx: int64): NodePath
        
        /** Returns the name of the signal at [param idx]. */
        getConnectionSignal(idx: int64): StringName
        
        /** Returns the path to the node that owns the method connected to the signal at [param idx], relative to the root node. */
        getConnectionTarget(idx: int64): NodePath
        
        /** Returns the method connected to the signal at [param idx]. */
        getConnectionMethod(idx: int64): StringName
        
        /** Returns the connection flags for the signal at [param idx]. See [enum Object.ConnectFlags] constants. */
        getConnectionFlags(idx: int64): int64
        
        /** Returns the list of bound parameters for the signal at [param idx]. */
        getConnectionBinds(idx: int64): GArray
        
        /** Returns the number of unbound parameters for the signal at [param idx]. */
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
        
        /** Returns `true` if a node added to the given group [param name] exists in the tree. */
        hasGroup(name: StringName): boolean
        
        /** Returns `true` if accessibility features are enabled, and accessibility information updates are actively processed. */
        isAccessibilityEnabled(): boolean
        
        /** Returns `true` if accessibility features are supported by the OS and enabled in project settings. */
        isAccessibilitySupported(): boolean
        
        /** Returns a new [SceneTreeTimer]. After [param time_sec] in seconds have passed, the timer will emit [signal SceneTreeTimer.timeout] and will be automatically freed.  
         *  If [param process_always] is `false`, the timer will be paused when setting [member SceneTree.paused] to `true`.  
         *  If [param process_in_physics] is `true`, the timer will update at the end of the physics frame, instead of the process frame.  
         *  If [param ignore_time_scale] is `true`, the timer will ignore [member Engine.time_scale] and update with the real, elapsed time.  
         *  This method is commonly used to create a one-shot delay timer, as in the following example:  
         *    
         *      
         *  **Note:** The timer is always updated  *after*  all of the nodes in the tree. A node's [method Node._process] method would be called before the timer updates (or [method Node._physics_process] if [param process_in_physics] is set to `true`).  
         */
        createTimer(timeSec: float64, processAlways?: boolean /* = true */, processInPhysics?: boolean /* = false */, ignoreTimeScale?: boolean /* = false */): SceneTreeTimer
        
        /** Creates and returns a new [Tween] processed in this tree. The Tween will start automatically on the next process frame or physics frame (depending on its [enum Tween.TweenProcessMode]).  
         *      
         *  **Note:** A [Tween] created using this method is not bound to any [Node]. It may keep working until there is nothing left to animate. If you want the [Tween] to be automatically killed when the [Node] is freed, use [method Node.create_tween] or [method Tween.bind_node].  
         */
        createTween(): Tween
        
        /** Returns an [Array] of currently existing [Tween]s in the tree, including paused tweens. */
        getProcessedTweens(): GArray<Tween>
        
        /** Returns the number of nodes inside this tree. */
        getNodeCount(): int64
        
        /** Returns how many frames have been processed, since the application started. This is  *not*  a measurement of elapsed time. */
        getFrame(): int64
        
        /** Quits the application at the end of the current iteration, with the given [param exit_code].  
         *  By convention, an exit code of `0` indicates success, whereas any other exit code indicates an error. For portability reasons, it should be between `0` and `125` (inclusive).  
         *      
         *  **Note:** On iOS this method doesn't work. Instead, as recommended by the [url=https://developer.apple.com/library/archive/qa/qa1561/_index.html]iOS Human Interface Guidelines[/url], the user is expected to close apps via the Home button.  
         */
        quit(exitCode?: int64 /* = 0 */): void
        
        /** Queues the given [param obj] to be deleted, calling its [method Object.free] at the end of the current frame. This method is similar to [method Node.queue_free]. */
        queueDelete(obj: GObject): void
        
        /** Calls the given [param method] on each node inside this tree added to the given [param group]. Use [param flags] to customize this method's behavior (see [enum GroupCallFlags]). Additional arguments for [param method] can be passed at the end of this method. Nodes that cannot call [param method] (either because the method doesn't exist or the arguments do not match) are ignored.  
         *    
         *      
         *  **Note:** In C#, [param method] must be in snake_case when referring to built-in Godot methods. Prefer using the names exposed in the `MethodName` class to avoid allocating a new [StringName] on each call.  
         */
        callGroupFlags(flags: int64, group: StringName, method: StringName, ...varargs: any[]): void
        
        /** Calls [method Object.notification] with the given [param notification] to all nodes inside this tree added to the [param group]. Use [param call_flags] to customize this method's behavior (see [enum GroupCallFlags]). */
        notifyGroupFlags(callFlags: int64, group: StringName, notification: int64): void
        
        /** Sets the given [param property] to [param value] on all nodes inside this tree added to the given [param group]. Nodes that do not have the [param property] are ignored. Use [param call_flags] to customize this method's behavior (see [enum GroupCallFlags]).  
         *      
         *  **Note:** In C#, [param property] must be in snake_case when referring to built-in Godot properties. Prefer using the names exposed in the `PropertyName` class to avoid allocating a new [StringName] on each call.  
         */
        setGroupFlags(callFlags: int64, group: StringName, property: string, value: any): void
        
        /** Calls [param method] on each node inside this tree added to the given [param group]. You can pass arguments to [param method] by specifying them at the end of this method call. Nodes that cannot call [param method] (either because the method doesn't exist or the arguments do not match) are ignored. See also [method set_group] and [method notify_group].  
         *      
         *  **Note:** This method acts immediately on all selected nodes at once, which may cause stuttering in some performance-intensive situations.  
         *      
         *  **Note:** In C#, [param method] must be in snake_case when referring to built-in Godot methods. Prefer using the names exposed in the `MethodName` class to avoid allocating a new [StringName] on each call.  
         */
        callGroup(group: StringName, method: StringName, ...varargs: any[]): void
        
        /** Calls [method Object.notification] with the given [param notification] to all nodes inside this tree added to the [param group]. See also [url=https://docs.godotengine.org/en/latest/tutorials/best_practices/godot_notifications.html]Godot notifications[/url] and [method call_group] and [method set_group].  
         *      
         *  **Note:** This method acts immediately on all selected nodes at once, which may cause stuttering in some performance-intensive situations.  
         */
        notifyGroup(group: StringName, notification: int64): void
        
        /** Sets the given [param property] to [param value] on all nodes inside this tree added to the given [param group]. Nodes that do not have the [param property] are ignored. See also [method call_group] and [method notify_group].  
         *      
         *  **Note:** This method acts immediately on all selected nodes at once, which may cause stuttering in some performance-intensive situations.  
         *      
         *  **Note:** In C#, [param property] must be in snake_case when referring to built-in Godot properties. Prefer using the names exposed in the `PropertyName` class to avoid allocating a new [StringName] on each call.  
         */
        setGroup(group: StringName, property: string, value: any): void
        
        /** Returns an [Array] containing all nodes inside this tree, that have been added to the given [param group], in scene hierarchy order. */
        getNodesInGroup(group: StringName): GArray<Node>
        
        /** Returns the first [Node] found inside the tree, that has been added to the given [param group], in scene hierarchy order. Returns `null` if no match is found. See also [method get_nodes_in_group]. */
        getFirstNodeInGroup(group: StringName): null | Node
        
        /** Returns the number of nodes assigned to the given group. */
        getNodeCountInGroup(group: StringName): int64
        
        /** Changes the running scene to the one at the given [param path], after loading it into a [PackedScene] and creating a new instance.  
         *  Returns [constant OK] on success, [constant ERR_CANT_OPEN] if the [param path] cannot be loaded into a [PackedScene], or [constant ERR_CANT_CREATE] if that scene cannot be instantiated.  
         *      
         *  **Note:** See [method change_scene_to_packed] for details on the order of operations.  
         */
        changeSceneToFile(path: string): GError
        
        /** Changes the running scene to a new instance of the given [PackedScene] (which must be valid).  
         *  Returns [constant OK] on success, [constant ERR_CANT_CREATE] if the scene cannot be instantiated, or [constant ERR_INVALID_PARAMETER] if the scene is invalid.  
         *      
         *  **Note:** Operations happen in the following order when [method change_scene_to_packed] is called:  
         *  1. The current scene node is immediately removed from the tree. From that point, [method Node.get_tree] called on the current (outgoing) scene will return `null`. [member current_scene] will be `null`, too, because the new scene is not available yet.  
         *  2. At the end of the frame, the formerly current scene, already removed from the tree, will be deleted (freed from memory) and then the new scene will be instantiated and added to the tree. [method Node.get_tree] and [member current_scene] will be back to working as usual.  
         *  This ensures that both scenes aren't running at the same time, while still freeing the previous scene in a safe way similar to [method Node.queue_free].  
         *  If you want to reliably access the new scene, await the [signal scene_changed] signal.  
         */
        changeSceneToPacked(packedScene: PackedScene): GError
        
        /** Reloads the currently active scene, replacing [member current_scene] with a new instance of its original [PackedScene].  
         *  Returns [constant OK] on success, [constant ERR_UNCONFIGURED] if no [member current_scene] is defined, [constant ERR_CANT_OPEN] if [member current_scene] cannot be loaded into a [PackedScene], or [constant ERR_CANT_CREATE] if the scene cannot be instantiated.  
         */
        reloadCurrentScene(): GError
        
        /** If a current scene is loaded, calling this method will unload it. */
        unloadCurrentScene(): void
        
        /** Sets a custom [MultiplayerAPI] with the given [param root_path] (controlling also the relative subpaths), or override the default one if [param root_path] is empty.  
         *      
         *  **Note:** No [MultiplayerAPI] must be configured for the subpath containing [param root_path], nested custom multiplayers are not allowed. I.e. if one is configured for `"/root/Foo"` setting one for `"/root/Foo/Bar"` will cause an error.  
         *      
         *  **Note:** [method set_multiplayer] should be called  *before*  the child nodes are ready at the given [param root_path]. If multiplayer nodes like [MultiplayerSpawner] or [MultiplayerSynchronizer] are added to the tree before the custom multiplayer API is set, they will not work.  
         */
        setMultiplayer(multiplayer: MultiplayerApi, rootPath?: NodePath | string /* = '' */): void
        
        /** Searches for the [MultiplayerAPI] configured for the given path, if one does not exist it searches the parent paths until one is found. If the path is empty, or none is found, the default one is returned. See [method set_multiplayer]. */
        getMultiplayer(forPath?: NodePath | string /* = '' */): null | MultiplayerApi
        
        /** If `true`, the application automatically accepts quitting requests.  
         *  For mobile platforms, see [member quit_on_go_back].  
         */
        get autoAcceptQuit(): boolean
        set autoAcceptQuit(value: boolean)
        
        /** If `true`, the application quits automatically when navigating back (e.g. using the system "Back" button on Android).  
         *  To handle 'Go Back' button when this option is disabled, use [constant DisplayServer.WINDOW_EVENT_GO_BACK_REQUEST].  
         */
        get quitOnGoBack(): boolean
        set quitOnGoBack(value: boolean)
        
        /** If `true`, collision shapes will be visible when running the game from the editor for debugging purposes.  
         *      
         *  **Note:** This property is not designed to be changed at run-time. Changing the value of [member debug_collisions_hint] while the project is running will not have the desired effect.  
         */
        get debugCollisionsHint(): boolean
        set debugCollisionsHint(value: boolean)
        
        /** If `true`, curves from [Path2D] and [Path3D] nodes will be visible when running the game from the editor for debugging purposes.  
         *      
         *  **Note:** This property is not designed to be changed at run-time. Changing the value of [member debug_paths_hint] while the project is running will not have the desired effect.  
         */
        get debugPathsHint(): boolean
        set debugPathsHint(value: boolean)
        
        /** If `true`, navigation polygons will be visible when running the game from the editor for debugging purposes.  
         *      
         *  **Note:** This property is not designed to be changed at run-time. Changing the value of [member debug_navigation_hint] while the project is running will not have the desired effect.  
         */
        get debugNavigationHint(): boolean
        set debugNavigationHint(value: boolean)
        
        /** If `true`, the scene tree is considered paused. This causes the following behavior:  
         *  - 2D and 3D physics will be stopped, as well as collision detection and related signals.  
         *  - Depending on each node's [member Node.process_mode], their [method Node._process], [method Node._physics_process] and [method Node._input] callback methods may not called anymore.  
         */
        get paused(): boolean
        set paused(value: boolean)
        
        /** The root of the scene currently being edited in the editor. This is usually a direct child of [member root].  
         *      
         *  **Note:** This property does nothing in release builds.  
         */
        get editedSceneRoot(): null | Node
        set editedSceneRoot(value: null | Node)
        
        /** The root node of the currently loaded main scene, usually as a direct child of [member root]. See also [method change_scene_to_file], [method change_scene_to_packed], and [method reload_current_scene].  
         *  **Warning:** Setting this property directly may not work as expected, as it does  *not*  add or remove any nodes from this tree.  
         */
        get currentScene(): null | Node
        set currentScene(value: null | Node)
        
        /** The tree's root [Window]. This is top-most [Node] of the scene tree, and is always present. An absolute [NodePath] always starts from this node. Children of the root node may include the loaded [member current_scene], as well as any [url=https://docs.godotengine.org/en/latest/tutorials/scripting/singletons_autoload.html]AutoLoad[/url] configured in the Project Settings.  
         *  **Warning:** Do not delete this node. This will result in unstable behavior, followed by a crash.  
         */
        get root(): null | Node
        set root(value: null | Node)
        
        /** If `true` (default value), enables automatic polling of the [MultiplayerAPI] for this SceneTree during [signal process_frame].  
         *  If `false`, you need to manually call [method MultiplayerAPI.poll] to process network packets and deliver RPCs. This allows running RPCs in a different loop (e.g. physics, thread, specific time step) and for manual [Mutex] protection when accessing the [MultiplayerAPI] from threads.  
         */
        get multiplayerPoll(): boolean
        set multiplayerPoll(value: boolean)
        
        /** If `true`, the renderer will interpolate the transforms of objects (both physics and non-physics) between the last two transforms, so that smooth motion is seen even when physics ticks do not coincide with rendered frames.  
         *  The default value of this property is controlled by [member ProjectSettings.physics/common/physics_interpolation].  
         *      
         *  **Note:** Although this is a global setting, finer control of individual branches of the [SceneTree] is possible using [member Node.physics_interpolation_mode].  
         */
        get physicsInterpolation(): boolean
        set physicsInterpolation(value: boolean)
        
        /** Emitted any time the tree's hierarchy changes (nodes being moved, renamed, etc.). */
        readonly treeChanged: Signal<() => void>
        
        /** Emitted after the new scene is added to scene tree and initialized. Can be used to reliably access [member current_scene] when changing scenes.  
         *    
         */
        readonly sceneChanged: Signal<() => void>
        
        /** Emitted when the [member Node.process_mode] of any node inside the tree is changed. Only emitted in the editor, to update the visibility of disabled nodes. */
        readonly treeProcessModeChanged: Signal<() => void>
        
        /** Emitted when the [param node] enters this tree. */
        readonly nodeAdded: Signal<(node: Node) => void>
        
        /** Emitted when the [param node] exits this tree. */
        readonly nodeRemoved: Signal<(node: Node) => void>
        
        /** Emitted when the [param node]'s [member Node.name] is changed. */
        readonly nodeRenamed: Signal<(node: Node) => void>
        
        /** Emitted when the [param node]'s [method Node.update_configuration_warnings] is called. Only emitted in the editor. */
        readonly nodeConfigurationWarningChanged: Signal<(node: Node) => void>
        
        /** Emitted immediately before [method Node._process] is called on every node in this tree. */
        readonly processFrame: Signal<() => void>
        
        /** Emitted immediately before [method Node._physics_process] is called on every node in this tree. */
        readonly physicsFrame: Signal<() => void>
    }
    /** One-shot timer.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_scenetreetimer.html  
     */
    class SceneTreeTimer extends RefCounted {
        constructor(identifier?: any)
        /** The time remaining (in seconds). */
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
        /** Returns `true` if the script can be instantiated. */
        canInstantiate(): boolean
        
        /** Returns `true` if [param base_object] is an instance of this script. */
        instanceHas(baseObject: GObject): boolean
        
        /** Returns `true` if the script contains non-empty source code.  
         *      
         *  **Note:** If a script does not have source code, this does not mean that it is invalid or unusable. For example, a [GDScript] that was exported with binary tokenization has no source code, but still behaves as expected and could be instantiated. This can be checked with [method can_instantiate].  
         */
        hasSourceCode(): boolean
        
        /** Reloads the script's class implementation. Returns an error code. */
        reload(keepState?: boolean /* = false */): GError
        
        /** Returns the script directly inherited by this script. */
        getBaseScript(): null | Script
        
        /** Returns the script's base type. */
        getInstanceBaseType(): StringName
        
        /** Returns the class name associated with the script, if there is one. Returns an empty string otherwise.  
         *  To give the script a global name, you can use the `class_name` keyword in GDScript and the `[GlobalClass]` attribute in C#.  
         *    
         */
        getGlobalName(): StringName
        
        /** Returns `true` if the script, or a base class, defines a signal with the given name. */
        hasScriptSignal(signalName: StringName): boolean
        
        /** Returns the list of properties in this [Script]. */
        getScriptPropertyList(): GArray
        
        /** Returns the list of methods in this [Script]. */
        getScriptMethodList(): GArray
        
        /** Returns the list of user signals defined in this [Script]. */
        getScriptSignalList(): GArray
        
        /** Returns a dictionary containing constant names and their values. */
        getScriptConstantMap(): GDictionary
        
        /** Returns the default value of the specified property. */
        getPropertyDefaultValue(property: StringName): any
        
        /** Returns `true` if the script is a tool script. A tool script can run in the editor. */
        isTool(): boolean
        
        /** Returns `true` if the script is an abstract script. An abstract script does not have a constructor and cannot be instantiated. */
        isAbstract(): boolean
        
        /** Returns a [Dictionary] mapping method names to their RPC configuration defined by this script. */
        getRpcConfig(): any
        
        /** The script source code or an empty string if source code is not available. When set, does not reload the class implementation automatically. */
        get sourceCode(): string
        set sourceCode(value: string)
    }
    /** A captured backtrace of a specific script language.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_scriptbacktrace.html  
     */
    class ScriptBacktrace extends RefCounted {
        constructor(identifier?: any)
        /** Returns the name of the script language that this backtrace was captured from. */
        getLanguageName(): string
        
        /** Returns `true` if the backtrace has no stack frames. */
        isEmpty(): boolean
        
        /** Returns the number of stack frames in the backtrace. */
        getFrameCount(): int64
        
        /** Returns the name of the function called at the stack frame at the specified index. */
        getFrameFunction(index: int64): string
        
        /** Returns the file name of the call site represented by the stack frame at the specified index. */
        getFrameFile(index: int64): string
        
        /** Returns the line number of the call site represented by the stack frame at the specified index. */
        getFrameLine(index: int64): int64
        
        /** Returns the number of global variables (e.g. autoload singletons) in the backtrace.  
         *      
         *  **Note:** This will be non-zero only if the `include_variables` parameter was `true` when capturing the backtrace with [method Engine.capture_script_backtraces].  
         */
        getGlobalVariableCount(): int64
        
        /** Returns the name of the global variable at the specified index. */
        getGlobalVariableName(variableIndex: int64): string
        
        /** Returns the value of the global variable at the specified index.  
         *  **Warning:** With GDScript backtraces, the returned [Variant] will be the variable's actual value, including any object references. This means that storing the returned [Variant] will prevent any such object from being deallocated, so it's generally recommended not to do so.  
         */
        getGlobalVariableValue(variableIndex: int64): any
        
        /** Returns the number of local variables in the stack frame at the specified index.  
         *      
         *  **Note:** This will be non-zero only if the `include_variables` parameter was `true` when capturing the backtrace with [method Engine.capture_script_backtraces].  
         */
        getLocalVariableCount(frameIndex: int64): int64
        
        /** Returns the name of the local variable at the specified [param variable_index] in the stack frame at the specified [param frame_index]. */
        getLocalVariableName(frameIndex: int64, variableIndex: int64): string
        
        /** Returns the value of the local variable at the specified [param variable_index] in the stack frame at the specified [param frame_index].  
         *  **Warning:** With GDScript backtraces, the returned [Variant] will be the variable's actual value, including any object references. This means that storing the returned [Variant] will prevent any such object from being deallocated, so it's generally recommended not to do so.  
         */
        getLocalVariableValue(frameIndex: int64, variableIndex: int64): any
        
        /** Returns the number of member variables in the stack frame at the specified index.  
         *      
         *  **Note:** This will be non-zero only if the `include_variables` parameter was `true` when capturing the backtrace with [method Engine.capture_script_backtraces].  
         */
        getMemberVariableCount(frameIndex: int64): int64
        
        /** Returns the name of the member variable at the specified [param variable_index] in the stack frame at the specified [param frame_index]. */
        getMemberVariableName(frameIndex: int64, variableIndex: int64): string
        
        /** Returns the value of the member variable at the specified [param variable_index] in the stack frame at the specified [param frame_index].  
         *  **Warning:** With GDScript backtraces, the returned [Variant] will be the variable's actual value, including any object references. This means that storing the returned [Variant] will prevent any such object from being deallocated, so it's generally recommended not to do so.  
         */
        getMemberVariableValue(frameIndex: int64, variableIndex: int64): any
        
        /** Converts the backtrace to a [String], where the entire string will be indented by [param indent_all] number of spaces, and the individual stack frames will be additionally indented by [param indent_frames] number of spaces.  
         *      
         *  **Note:** Calling [method Object.to_string] on a [ScriptBacktrace] will produce the same output as calling [method format] with all parameters left at their default values.  
         */
        format(indentAll?: int64 /* = 0 */, indentFrames?: int64 /* = 4 */): string
    }
    /** Godot editor's popup dialog for creating new [Script] files.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_scriptcreatedialog.html  
     */
    class ScriptCreateDialog<Map extends NodePathMap = any> extends ConfirmationDialog<Map> {
        constructor(identifier?: any)
        /** Prefills required fields to configure the ScriptCreateDialog for use. */
        config(inherits: string, path: string, builtInEnabled?: boolean /* = true */, loadEnabled?: boolean /* = true */): void
        
        /** Emitted when the user clicks the OK button. */
        readonly scriptCreated: Signal<(script: Script) => void>
    }
    /** Godot editor's script editor.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_scripteditor.html  
     */
    class ScriptEditor<Map extends NodePathMap = any> extends PanelContainer<Map> {
        constructor(identifier?: any)
        _helpTabGoto(_unnamedArg0: string, _unnamedArg1: string): boolean
        
        /** Returns the [ScriptEditorBase] object that the user is currently editing. */
        getCurrentEditor(): null | ScriptEditorBase
        
        /** Returns an array with all [ScriptEditorBase] objects which are currently open in editor. */
        getOpenScriptEditors(): GArray
        
        /** Returns array of breakpoints. */
        getBreakpoints(): PackedStringArray
        
        /** Registers the [EditorSyntaxHighlighter] to the editor, the [EditorSyntaxHighlighter] will be available on all open scripts.  
         *      
         *  **Note:** Does not apply to scripts that are already opened.  
         */
        registerSyntaxHighlighter(syntaxHighlighter: EditorSyntaxHighlighter): void
        
        /** Unregisters the [EditorSyntaxHighlighter] from the editor.  
         *      
         *  **Note:** The [EditorSyntaxHighlighter] will still be applied to scripts that are already opened.  
         */
        unregisterSyntaxHighlighter(syntaxHighlighter: EditorSyntaxHighlighter): void
        
        /** Goes to the specified line in the current script. */
        gotoLine(lineNumber: int64): void
        
        /** Returns a [Script] that is currently active in editor. */
        getCurrentScript(): null | Script
        
        /** Returns an array with all [Script] objects which are currently open in editor. */
        getOpenScripts(): GArray
        
        /** Opens the script create dialog. The script will extend [param base_name]. The file extension can be omitted from [param base_path]. It will be added based on the selected scripting language. */
        openScriptCreateDialog(baseName: string, basePath: string): void
        
        /** Opens help for the given topic. The [param topic] is an encoded string that controls which class, method, constant, signal, annotation, property, or theme item should be focused.  
         *  The supported [param topic] formats include `class_name:class`, `class_method:class:method`, `class_constant:class:constant`, `class_signal:class:signal`, `class_annotation:class:@annotation`, `class_property:class:property`, and `class_theme_item:class:item`, where `class` is the class name, `method` is the method name, `constant` is the constant name, `signal` is the signal name, `annotation` is the annotation name, `property` is the property name, and `item` is the theme item.  
         *    
         */
        gotoHelp(topic: string): void
        
        /** Updates the documentation for the given [param script] if the script's documentation is currently open.  
         *      
         *  **Note:** This should be called whenever the script is changed to keep the open documentation state up to date.  
         */
        updateDocsFromScript(script: Script): void
        
        /** Emitted when user changed active script. Argument is a freshly activated [Script]. */
        readonly editorScriptChanged: Signal<(script: Script) => void>
        
        /** Emitted when editor is about to close the active script. Argument is a [Script] that is going to be closed. */
        readonly scriptClose: Signal<(script: Script) => void>
    }
    /** Base editor for editing scripts in the [ScriptEditor].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_scripteditorbase.html  
     */
    class ScriptEditorBase<Map extends NodePathMap = any> extends VBoxContainer<Map> {
        constructor(identifier?: any)
        /** Returns the underlying [Control] used for editing scripts. For text scripts, this is a [CodeEdit]. */
        getBaseEditor(): null | Control
        
        /** Adds a [EditorSyntaxHighlighter] to the open script. */
        addSyntaxHighlighter(highlighter: EditorSyntaxHighlighter): void
        
        /** Emitted after script validation or when the edited resource has changed. */
        readonly nameChanged: Signal<() => void>
        
        /** Emitted after script validation. */
        readonly editedScriptChanged: Signal<() => void>
        
        /** Emitted when the user requests contextual help. */
        readonly requestHelp: Signal<(topic: string) => void>
        
        /** Emitted when the user requests to view a specific line of a script, similar to [signal go_to_method]. */
        readonly requestOpenScriptAtLine: Signal<(script: GObject, line: int64) => void>
        
        /** Emitted when the user contextual goto and the item is in the same script. */
        readonly requestSaveHistory: Signal<() => void>
        
        /** Emitted when the user changes current script or moves caret by 10 or more columns within the same script. */
        readonly requestSavePreviousState: Signal<(state: GDictionary) => void>
        
        /** Emitted when the user requests a specific documentation page. */
        readonly goToHelp: Signal<(what: string) => void>
        
        /** Emitted when the user request to search text in the file system. */
        readonly searchInFilesRequested: Signal<(text: string) => void>
        
        /** Emitted when the user request to find and replace text in the file system. */
        readonly replaceInFilesRequested: Signal<(text: string) => void>
        
        /** Emitted when the user requests to view a specific method of a script, similar to [signal request_open_script_at_line]. */
        readonly goToMethod: Signal<(script: GObject, method: string) => void>
    }
    /** @link https://docs.godotengine.org/en/latest/classes/class_scriptextension.html */
    class ScriptExtension extends Script {
        constructor(identifier?: any)
        /* gdvirtual */ _editorCanReloadFromFile(): boolean
        /* gdvirtual */ _placeholderErased(placeholder: int64): void
        /* gdvirtual */ _canInstantiate(): boolean
        /* gdvirtual */ _getBaseScript(): null | Script
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
        
        /** Return the expected argument count for the given [param method], or `null` if it can't be determined (which will then fall back to the default behavior). */
        /* gdvirtual */ _getScriptMethodArgumentCount(method: StringName): any
        /* gdvirtual */ _getMethodInfo(method: StringName): GDictionary
        /* gdvirtual */ _isTool(): boolean
        /* gdvirtual */ _isValid(): boolean
        
        /** Returns `true` if the script is an abstract script. Abstract scripts cannot be instantiated directly, instead other scripts should inherit them. Abstract scripts will be either unselectable or hidden in the Create New Node dialog (unselectable if there are non-abstract classes inheriting it, otherwise hidden). */
        /* gdvirtual */ _isAbstract(): boolean
        /* gdvirtual */ _getLanguage(): null | ScriptLanguage
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
            ScriptNameCasingCamelCase = 4,
        }
    }
    /** @link https://docs.godotengine.org/en/latest/classes/class_scriptlanguage.html */
    class ScriptLanguage extends GObject {
        static readonly SCRIPT_NAME_CASING_AUTO = 0
        static readonly SCRIPT_NAME_CASING_PASCAL_CASE = 1
        static readonly SCRIPT_NAME_CASING_SNAKE_CASE = 2
        static readonly SCRIPT_NAME_CASING_KEBAB_CASE = 3
        static readonly SCRIPT_NAME_CASING_CAMEL_CASE = 4
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
        /* gdvirtual */ _makeTemplate(template: string, className: string, baseClassName: string): null | Script
        /* gdvirtual */ _getBuiltInTemplates(object: StringName): GArray
        /* gdvirtual */ _isUsingTemplates(): boolean
        /* gdvirtual */ _validate(script: string, path: string, validateFunctions: boolean, validateErrors: boolean, validateWarnings: boolean, validateSafeLines: boolean): GDictionary
        /* gdvirtual */ _validatePath(path: string): string
        /* gdvirtual */ _createScript(): null | GObject
        /* gdvirtual */ _hasNamedClasses(): boolean
        /* gdvirtual */ _supportsBuiltinMode(): boolean
        /* gdvirtual */ _supportsDocumentation(): boolean
        /* gdvirtual */ _canInheritFromFile(): boolean
        
        /** Returns the line where the function is defined in the code, or `-1` if the function is not present. */
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
        
        /** Returns the source associated with a given debug stack position. */
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
    class ScrollBar<Map extends NodePathMap = any> extends Range<Map> {
        constructor(identifier?: any)
        /** Overrides the step used when clicking increment and decrement buttons or when using arrow keys when the [ScrollBar] is focused. */
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
    class ScrollContainer<Map extends NodePathMap = any> extends Container<Map> {
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
        
        /** Returns the horizontal scrollbar [HScrollBar] of this [ScrollContainer].  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to disable or hide a scrollbar, you can use [member horizontal_scroll_mode].  
         */
        getHScrollBar(): null | HScrollBar
        
        /** Returns the vertical scrollbar [VScrollBar] of this [ScrollContainer].  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to disable or hide a scrollbar, you can use [member vertical_scroll_mode].  
         */
        getVScrollBar(): null | VScrollBar
        
        /** Ensures the given [param control] is visible (must be a direct or indirect child of the ScrollContainer). Used by [member follow_focus].  
         *      
         *  **Note:** This will not work on a node that was just added during the same frame. If you want to scroll to a newly added child, you must wait until the next frame using [signal SceneTree.process_frame]:  
         *    
         */
        ensureControlVisible(control: Control): void
        
        /** If `true`, the ScrollContainer will automatically scroll to focused children (including indirect children) to make sure they are fully visible. */
        get followFocus(): boolean
        set followFocus(value: boolean)
        
        /** If `true`, [theme_item focus] is drawn when the ScrollContainer or one of its descendant nodes is focused. */
        get drawFocusBorder(): boolean
        set drawFocusBorder(value: boolean)
        
        /** The current horizontal scroll value.  
         *      
         *  **Note:** If you are setting this value in the [method Node._ready] function or earlier, it needs to be wrapped with [method Object.set_deferred], since scroll bar's [member Range.max_value] is not initialized yet.  
         *    
         */
        get scrollHorizontal(): int64
        set scrollHorizontal(value: int64)
        
        /** The current vertical scroll value.  
         *      
         *  **Note:** Setting it early needs to be deferred, just like in [member scroll_horizontal].  
         *    
         */
        get scrollVertical(): int64
        set scrollVertical(value: int64)
        
        /** Overrides the [member ScrollBar.custom_step] used when clicking the internal scroll bar's horizontal increment and decrement buttons or when using arrow keys when the [ScrollBar] is focused. */
        get scrollHorizontalCustomStep(): float64
        set scrollHorizontalCustomStep(value: float64)
        
        /** Overrides the [member ScrollBar.custom_step] used when clicking the internal scroll bar's vertical increment and decrement buttons or when using arrow keys when the [ScrollBar] is focused. */
        get scrollVerticalCustomStep(): float64
        set scrollVerticalCustomStep(value: float64)
        
        /** Controls whether horizontal scrollbar can be used and when it should be visible. See [enum ScrollMode] for options. */
        get horizontalScrollMode(): int64
        set horizontalScrollMode(value: int64)
        
        /** Controls whether vertical scrollbar can be used and when it should be visible. See [enum ScrollMode] for options. */
        get verticalScrollMode(): int64
        set verticalScrollMode(value: int64)
        
        /** Deadzone for touch scrolling. Lower deadzone makes the scrolling more sensitive. */
        get scrollDeadzone(): int64
        set scrollDeadzone(value: int64)
        
        /** Emitted when scrolling starts when dragging the scrollable area w *ith a touch event* . This signal is  *not*  emitted when scrolling by dragging the scrollbar, scrolling with the mouse wheel or scrolling with keyboard/gamepad events.  
         *      
         *  **Note:** This signal is only emitted on Android or iOS, or on desktop/web platforms when [member ProjectSettings.input_devices/pointing/emulate_touch_from_mouse] is enabled.  
         */
        readonly scrollStarted: Signal<() => void>
        
        /** Emitted when scrolling stops when dragging the scrollable area  *with a touch event* . This signal is  *not*  emitted when scrolling by dragging the scrollbar, scrolling with the mouse wheel or scrolling with keyboard/gamepad events.  
         *      
         *  **Note:** This signal is only emitted on Android or iOS, or on desktop/web platforms when [member ProjectSettings.input_devices/pointing/emulate_touch_from_mouse] is enabled.  
         */
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
        
        /** If `false` (default), the shape always separates and returns a normal along its own direction.  
         *  If `true`, the shape can return the correct normal and separate in any direction, allowing sliding motion on slopes.  
         */
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
        
        /** If `false` (default), the shape always separates and returns a normal along its own direction.  
         *  If `true`, the shape can return the correct normal and separate in any direction, allowing sliding motion on slopes.  
         */
        get slideOnSlope(): boolean
        set slideOnSlope(value: boolean)
    }
    /** Abstract base class for separators.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_separator.html  
     */
    class Separator<Map extends NodePathMap = any> extends Control<Map> {
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
        
        /** Returns the shader mode for the shader. */
        getMode(): Shader.Mode
        
        /** Sets the default texture to be used with a texture uniform. The default is used if a texture is not set in the [ShaderMaterial].  
         *      
         *  **Note:** [param name] must match the name of the uniform in the code exactly.  
         *      
         *  **Note:** If the sampler array is used use [param index] to access the specified texture.  
         */
        setDefaultTextureParameter(name: StringName, texture: Texture, index?: int64 /* = 0 */): void
        
        /** Returns the texture that is set as default for the specified parameter.  
         *      
         *  **Note:** [param name] must match the name of the uniform in the code exactly.  
         *      
         *  **Note:** If the sampler array is used use [param index] to access the specified texture.  
         */
        getDefaultTextureParameter(name: StringName, index?: int64 /* = 0 */): null | Texture
        
        /** Returns the list of shader uniforms that can be assigned to a [ShaderMaterial], for use with [method ShaderMaterial.set_shader_parameter] and [method ShaderMaterial.get_shader_parameter]. The parameters returned are contained in dictionaries in a similar format to the ones returned by [method Object.get_property_list].  
         *  If argument [param get_groups] is `true`, parameter grouping hints are also included in the list.  
         */
        getShaderUniformList(getGroups?: boolean /* = false */): GArray
        
        /** Only available when running in the editor. Opens a popup that visualizes the generated shader code, including all variants and internal shader code. See also [method Material.inspect_native_shader_code]. */
        inspectNativeShaderCode(): void
        
        /** Returns the shader's code as the user has written it, not the full generated code used internally. */
        get code(): string
        set code(value: string)
    }
    /** A node used to override global shader parameters' values in a scene.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_shaderglobalsoverride.html  
     */
    class ShaderGlobalsOverride<Map extends NodePathMap = any> extends Node<Map> {
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
        /** Returns a list of built-in include files that are currently registered. */
        static listBuiltInIncludeFiles(): PackedStringArray
        
        /** Returns `true` if an include file with this name exists. */
        static hasBuiltInIncludeFile(fileName: string): boolean
        
        /** Returns the code for the built-in shader fragment. You can also access this in your shader code through `#include "filename"`. */
        static getBuiltInIncludeFile(fileName: string): string
    }
    /** A material defined by a custom [Shader] program and the values of its shader parameters.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_shadermaterial.html  
     */
    class ShaderMaterial extends Material {
        constructor(identifier?: any)
        /** Changes the value set for this material of a uniform in the shader.  
         *      
         *  **Note:** [param param] is case-sensitive and must match the name of the uniform in the code exactly (not the capitalized name in the inspector).  
         *      
         *  **Note:** Changes to the shader uniform will be effective on all instances using this [ShaderMaterial]. To prevent this, use per-instance uniforms with [method GeometryInstance3D.set_instance_shader_parameter] or duplicate the [ShaderMaterial] resource using [method Resource.duplicate]. Per-instance uniforms allow for better shader reuse and are therefore faster, so they should be preferred over duplicating the [ShaderMaterial] when possible.  
         */
        setShaderParameter(param: StringName, value: any): void
        
        /** Returns the current value set for this material of a uniform in the shader. */
        getShaderParameter(param: StringName): any
        
        /** The [Shader] program used to render this material. */
        get shader(): null | Shader
        set shader(value: null | Shader)
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
        
        /** Returns whether this shape would collide with another, if a given movement was applied.  
         *  This method needs the transformation matrix for this shape ([param local_xform]), the movement to test on this shape ([param local_motion]), the shape to check collisions with ([param with_shape]), the transformation matrix of that shape ([param shape_xform]), and the movement to test onto the other object ([param shape_motion]).  
         */
        collideWithMotion(localXform: Transform2D, localMotion: Vector2, withShape: Shape2D, shapeXform: Transform2D, shapeMotion: Vector2): boolean
        
        /** Returns a list of contact point pairs where this shape touches another.  
         *  If there are no collisions, the returned list is empty. Otherwise, the returned list contains contact points arranged in pairs, with entries alternating between points on the boundary of this shape and points on the boundary of [param with_shape].  
         *  A collision pair A, B can be used to calculate the collision normal with `(B - A).normalized()`, and the collision depth with `(B - A).length()`. This information is typically used to separate shapes, particularly in collision solvers.  
         *  This method needs the transformation matrix for this shape ([param local_xform]), the shape to check collisions with ([param with_shape]), and the transformation matrix of that shape ([param shape_xform]).  
         */
        collideAndGetContacts(localXform: Transform2D, withShape: Shape2D, shapeXform: Transform2D): PackedVector2Array
        
        /** Returns a list of contact point pairs where this shape would touch another, if a given movement was applied.  
         *  If there would be no collisions, the returned list is empty. Otherwise, the returned list contains contact points arranged in pairs, with entries alternating between points on the boundary of this shape and points on the boundary of [param with_shape].  
         *  A collision pair A, B can be used to calculate the collision normal with `(B - A).normalized()`, and the collision depth with `(B - A).length()`. This information is typically used to separate shapes, particularly in collision solvers.  
         *  This method needs the transformation matrix for this shape ([param local_xform]), the movement to test on this shape ([param local_motion]), the shape to check collisions with ([param with_shape]), the transformation matrix of that shape ([param shape_xform]), and the movement to test onto the other object ([param shape_motion]).  
         */
        collideWithMotionAndGetContacts(localXform: Transform2D, localMotion: Vector2, withShape: Shape2D, shapeXform: Transform2D, shapeMotion: Vector2): PackedVector2Array
        
        /** Draws a solid shape onto a [CanvasItem] with the [RenderingServer] API filled with the specified [param color]. The exact drawing method is specific for each shape and cannot be configured. */
        draw(canvasItem: Rid, color: Color): void
        
        /** Returns a [Rect2] representing the shapes boundary. */
        getRect(): Rect2
        
        /** The shape's custom solver bias. Defines how much bodies react to enforce contact separation when this shape is involved.  
         *  When set to `0`, the default value from [member ProjectSettings.physics/2d/solver/default_contact_bias] is used.  
         */
        get customSolverBias(): float64
        set customSolverBias(value: float64)
    }
    /** Abstract base class for 3D shapes used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_shape3d.html  
     */
    class Shape3D extends Resource {
        constructor(identifier?: any)
        /** Returns the [ArrayMesh] used to draw the debug collision for this [Shape3D]. */
        getDebugMesh(): null | ArrayMesh
        
        /** The shape's custom solver bias. Defines how much bodies react to enforce contact separation when this shape is involved.  
         *  When set to `0`, the default value from [member ProjectSettings.physics/3d/solver/default_contact_bias] is used.  
         */
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
    class ShapeCast2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** Returns whether any object is intersecting with the shape's vector (considering the vector length). */
        isColliding(): boolean
        
        /** The number of collisions detected at the point of impact. Use this to iterate over multiple collisions as provided by [method get_collider], [method get_collider_shape], [method get_collision_point], and [method get_collision_normal] methods. */
        getCollisionCount(): int64
        
        /** Updates the collision information for the shape immediately, without waiting for the next `_physics_process` call. Use this method, for example, when the shape or its parent has changed state.  
         *      
         *  **Note:** Setting [member enabled] to `true` is not required for this to work.  
         */
        forceShapecastUpdate(): void
        
        /** Returns the collided [Object] of one of the multiple collisions at [param index], or `null` if no object is intersecting the shape (i.e. [method is_colliding] returns `false`). */
        getCollider(index: int64): null | GObject
        
        /** Returns the [RID] of the collided object of one of the multiple collisions at [param index]. */
        getColliderRid(index: int64): Rid
        
        /** Returns the shape ID of the colliding shape of one of the multiple collisions at [param index], or `0` if no object is intersecting the shape (i.e. [method is_colliding] returns `false`). */
        getColliderShape(index: int64): int64
        
        /** Returns the collision point of one of the multiple collisions at [param index] where the shape intersects the colliding object.  
         *      
         *  **Note:** This point is in the **global** coordinate system.  
         */
        getCollisionPoint(index: int64): Vector2
        
        /** Returns the normal of one of the multiple collisions at [param index] of the intersecting object. */
        getCollisionNormal(index: int64): Vector2
        
        /** Returns the fraction from this cast's origin to its [member target_position] of how far the shape can move without triggering a collision, as a value between `0.0` and `1.0`. */
        getClosestCollisionSafeFraction(): float64
        
        /** Returns the fraction from this cast's origin to its [member target_position] of how far the shape must move to trigger a collision, as a value between `0.0` and `1.0`.  
         *  In ideal conditions this would be the same as [method get_closest_collision_safe_fraction], however shape casting is calculated in discrete steps, so the precise point of collision can occur between two calculated positions.  
         */
        getClosestCollisionUnsafeFraction(): float64
        
        /** Adds a collision exception so the shape does not report collisions with the specified [RID]. */
        addExceptionRid(rid: Rid): void
        
        /** Adds a collision exception so the shape does not report collisions with the specified node. */
        addException(node: CollisionObject2D): void
        
        /** Removes a collision exception so the shape does report collisions with the specified [RID]. */
        removeExceptionRid(rid: Rid): void
        
        /** Removes a collision exception so the shape does report collisions with the specified node. */
        removeException(node: CollisionObject2D): void
        
        /** Removes all collision exceptions for this shape. */
        clearExceptions(): void
        
        /** Based on [param value], enables or disables the specified layer in the [member collision_mask], given a [param layer_number] between 1 and 32. */
        setCollisionMaskValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member collision_mask] is enabled, given a [param layer_number] between 1 and 32. */
        getCollisionMaskValue(layerNumber: int64): boolean
        
        /** If `true`, collisions will be reported. */
        get enabled(): boolean
        set enabled(value: boolean)
        
        /** The shape to be used for collision queries. */
        get shape(): null | Shape2D
        set shape(value: null | Shape2D)
        
        /** If `true`, the parent node will be excluded from collision detection. */
        get excludeParent(): boolean
        set excludeParent(value: boolean)
        
        /** The shape's destination point, relative to this node's [member Node2D.position]. */
        get targetPosition(): Vector2
        set targetPosition(value: Vector2)
        
        /** The collision margin for the shape. A larger margin helps detecting collisions more consistently, at the cost of precision. */
        get margin(): float64
        set margin(value: float64)
        
        /** The number of intersections can be limited with this parameter, to reduce the processing time. */
        get maxResults(): int64
        set maxResults(value: int64)
        
        /** The shape's collision mask. Only objects in at least one collision layer enabled in the mask will be detected. See [url=https://docs.godotengine.org/en/latest/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        get collisionMask(): int64
        set collisionMask(value: int64)
        
        /** Returns the complete collision information from the collision sweep. The data returned is the same as in the [method PhysicsDirectSpaceState2D.get_rest_info] method. */
        get collisionResult(): GArray
        set collisionResult(value: GArray)
        
        /** If `true`, collisions with [Area2D]s will be reported. */
        get collideWithAreas(): boolean
        set collideWithAreas(value: boolean)
        
        /** If `true`, collisions with [PhysicsBody2D]s will be reported. */
        get collideWithBodies(): boolean
        set collideWithBodies(value: boolean)
    }
    /** A 3D shape that sweeps a region of space to detect [CollisionObject3D]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_shapecast3d.html  
     */
    class ShapeCast3D<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        /** This method does nothing. */
        resourceChanged(resource: Resource): void
        
        /** Returns whether any object is intersecting with the shape's vector (considering the vector length). */
        isColliding(): boolean
        
        /** The number of collisions detected at the point of impact. Use this to iterate over multiple collisions as provided by [method get_collider], [method get_collider_shape], [method get_collision_point], and [method get_collision_normal] methods. */
        getCollisionCount(): int64
        
        /** Updates the collision information for the shape immediately, without waiting for the next `_physics_process` call. Use this method, for example, when the shape or its parent has changed state.  
         *      
         *  **Note:** Setting [member enabled] to `true` is not required for this to work.  
         */
        forceShapecastUpdate(): void
        
        /** Returns the collided [Object] of one of the multiple collisions at [param index], or `null` if no object is intersecting the shape (i.e. [method is_colliding] returns `false`). */
        getCollider(index: int64): null | GObject
        
        /** Returns the [RID] of the collided object of one of the multiple collisions at [param index]. */
        getColliderRid(index: int64): Rid
        
        /** Returns the shape ID of the colliding shape of one of the multiple collisions at [param index], or `0` if no object is intersecting the shape (i.e. [method is_colliding] returns `false`). */
        getColliderShape(index: int64): int64
        
        /** Returns the collision point of one of the multiple collisions at [param index] where the shape intersects the colliding object.  
         *      
         *  **Note:** This point is in the **global** coordinate system.  
         */
        getCollisionPoint(index: int64): Vector3
        
        /** Returns the normal of one of the multiple collisions at [param index] of the intersecting object. */
        getCollisionNormal(index: int64): Vector3
        
        /** Returns the fraction from this cast's origin to its [member target_position] of how far the shape can move without triggering a collision, as a value between `0.0` and `1.0`. */
        getClosestCollisionSafeFraction(): float64
        
        /** Returns the fraction from this cast's origin to its [member target_position] of how far the shape must move to trigger a collision, as a value between `0.0` and `1.0`.  
         *  In ideal conditions this would be the same as [method get_closest_collision_safe_fraction], however shape casting is calculated in discrete steps, so the precise point of collision can occur between two calculated positions.  
         */
        getClosestCollisionUnsafeFraction(): float64
        
        /** Adds a collision exception so the shape does not report collisions with the specified [RID]. */
        addExceptionRid(rid: Rid): void
        
        /** Adds a collision exception so the shape does not report collisions with the specified node. */
        addException(node: CollisionObject3D): void
        
        /** Removes a collision exception so the shape does report collisions with the specified [RID]. */
        removeExceptionRid(rid: Rid): void
        
        /** Removes a collision exception so the shape does report collisions with the specified node. */
        removeException(node: CollisionObject3D): void
        
        /** Removes all collision exceptions for this shape. */
        clearExceptions(): void
        
        /** Based on [param value], enables or disables the specified layer in the [member collision_mask], given a [param layer_number] between 1 and 32. */
        setCollisionMaskValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member collision_mask] is enabled, given a [param layer_number] between 1 and 32. */
        getCollisionMaskValue(layerNumber: int64): boolean
        
        /** If `true`, collisions will be reported. */
        get enabled(): boolean
        set enabled(value: boolean)
        
        /** The shape to be used for collision queries. */
        get shape(): null | Shape3D
        set shape(value: null | Shape3D)
        
        /** If `true`, the parent node will be excluded from collision detection. */
        get excludeParent(): boolean
        set excludeParent(value: boolean)
        
        /** The shape's destination point, relative to this node's [member Node3D.position]. */
        get targetPosition(): Vector3
        set targetPosition(value: Vector3)
        
        /** The collision margin for the shape. A larger margin helps detecting collisions more consistently, at the cost of precision. */
        get margin(): float64
        set margin(value: float64)
        
        /** The number of intersections can be limited with this parameter, to reduce the processing time. */
        get maxResults(): int64
        set maxResults(value: int64)
        
        /** The shape's collision mask. Only objects in at least one collision layer enabled in the mask will be detected. See [url=https://docs.godotengine.org/en/latest/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        get collisionMask(): int64
        set collisionMask(value: int64)
        
        /** Returns the complete collision information from the collision sweep. The data returned is the same as in the [method PhysicsDirectSpaceState3D.get_rest_info] method. */
        get collisionResult(): GArray
        set collisionResult(value: GArray)
        
        /** If `true`, collisions with [Area3D]s will be reported. */
        get collideWithAreas(): boolean
        set collideWithAreas(value: boolean)
        
        /** If `true`, collisions with [PhysicsBody3D]s will be reported. */
        get collideWithBodies(): boolean
        set collideWithBodies(value: boolean)
        
        /** The custom color to use to draw the shape in the editor and at run-time if **Visible Collision Shapes** is enabled in the **Debug** menu. This color will be highlighted at run-time if the [ShapeCast3D] is colliding with something.  
         *  If set to `Color(0.0, 0.0, 0.0)` (by default), the color set in [member ProjectSettings.debug/shapes/collision/shape_color] is used.  
         */
        get debugShapeCustomColor(): Color
        set debugShapeCustomColor(value: Color)
    }
    /** A shortcut for binding input.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_shortcut.html  
     */
    class Shortcut extends Resource {
        constructor(identifier?: any)
        /** Returns whether [member events] contains an [InputEvent] which is valid. */
        hasValidEvent(): boolean
        
        /** Returns whether any [InputEvent] in [member events] equals [param event]. This uses [method InputEvent.is_match] to compare events. */
        matchesEvent(event: InputEvent): boolean
        
        /** Returns the shortcut's first valid [InputEvent] as a [String]. */
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
    class Skeleton2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** Returns the number of [Bone2D] nodes in the node hierarchy parented by Skeleton2D. */
        getBoneCount(): int64
        
        /** Returns a [Bone2D] from the node hierarchy parented by Skeleton2D. The object to return is identified by the parameter [param idx]. Bones are indexed by descending the node hierarchy from top to bottom, adding the children of each branch before moving to the next sibling. */
        getBone(idx: int64): null | Bone2D
        
        /** Returns the [RID] of a Skeleton2D instance. */
        getSkeleton(): Rid
        
        /** Sets the [SkeletonModificationStack2D] attached to this skeleton. */
        setModificationStack(modificationStack: SkeletonModificationStack2D): void
        
        /** Returns the [SkeletonModificationStack2D] attached to this skeleton, if one exists. */
        getModificationStack(): null | SkeletonModificationStack2D
        
        /** Executes all the modifications on the [SkeletonModificationStack2D], if the Skeleton2D has one assigned. */
        executeModifications(delta: float64, executionMode: int64): void
        
        /** Sets the local pose transform, [param override_pose], for the bone at [param bone_idx].  
         *  [param strength] is the interpolation strength that will be used when applying the pose, and [param persistent] determines if the applied pose will remain.  
         *      
         *  **Note:** The pose transform needs to be a local transform relative to the [Bone2D] node at [param bone_idx]!  
         */
        setBoneLocalPoseOverride(boneIdx: int64, overridePose: Transform2D, strength: float64, persistent: boolean): void
        
        /** Returns the local pose override transform for [param bone_idx]. */
        getBoneLocalPoseOverride(boneIdx: int64): Transform2D
        
        /** Emitted when the [Bone2D] setup attached to this skeletons changes. This is primarily used internally within the skeleton. */
        readonly boneSetupChanged: Signal<() => void>
    }
    namespace Skeleton3D {
        enum ModifierCallbackModeProcess {
            ModifierCallbackModeProcessPhysics = 0,
            ModifierCallbackModeProcessIdle = 1,
            ModifierCallbackModeProcessManual = 2,
        }
    }
    /** A node containing a bone hierarchy, used to create a 3D skeletal animation.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_skeleton3d.html  
     */
    class Skeleton3D<Map extends NodePathMap = any> extends Node3D<Map> {
        /** Notification received when this skeleton's pose needs to be updated. In that case, this is called only once per frame in a deferred process. */
        static readonly NOTIFICATION_UPDATE_SKELETON = 50
        
        /** Set a flag to process modification during physics frames (see [constant Node.NOTIFICATION_INTERNAL_PHYSICS_PROCESS]). */
        static readonly MODIFIER_CALLBACK_MODE_PROCESS_PHYSICS = 0
        
        /** Set a flag to process modification during process frames (see [constant Node.NOTIFICATION_INTERNAL_PROCESS]). */
        static readonly MODIFIER_CALLBACK_MODE_PROCESS_IDLE = 1
        
        /** Do not process modification. Use [method advance] to process the modification manually. */
        static readonly MODIFIER_CALLBACK_MODE_PROCESS_MANUAL = 2
        constructor(identifier?: any)
        
        /** Adds a new bone with the given name. Returns the new bone's index, or `-1` if this method fails.  
         *      
         *  **Note:** Bone names should be unique, non empty, and cannot include the `:` and `/` characters.  
         */
        addBone(name: string): int64
        
        /** Returns the bone index that matches [param name] as its name. Returns `-1` if no bone with this name exists. */
        findBone(name: string): int64
        
        /** Returns the name of the bone at index [param bone_idx]. */
        getBoneName(boneIdx: int64): string
        
        /** Sets the bone name, [param name], for the bone at [param bone_idx]. */
        setBoneName(boneIdx: int64, name: string): void
        
        /** Returns the metadata for the bone at index [param bone_idx] with [param key]. */
        getBoneMeta(boneIdx: int64, key: StringName): any
        
        /** Returns the list of all metadata keys for the bone at index [param bone_idx]. */
        getBoneMetaList(boneIdx: int64): GArray
        
        /** Returns `true` if the bone at index [param bone_idx] has metadata with the key [param key]. */
        hasBoneMeta(boneIdx: int64, key: StringName): boolean
        
        /** Sets the metadata for the bone at index [param bone_idx], setting the [param key] meta to [param value]. */
        setBoneMeta(boneIdx: int64, key: StringName, value: any): void
        
        /** Returns all bone names concatenated with commas (`,`) as a single [StringName].  
         *  It is useful to set it as a hint for the enum property.  
         */
        getConcatenatedBoneNames(): StringName
        
        /** Returns the bone index which is the parent of the bone at [param bone_idx]. If -1, then bone has no parent.  
         *      
         *  **Note:** The parent bone returned will always be less than [param bone_idx].  
         */
        getBoneParent(boneIdx: int64): int64
        
        /** Sets the bone index [param parent_idx] as the parent of the bone at [param bone_idx]. If -1, then bone has no parent.  
         *      
         *  **Note:** [param parent_idx] must be less than [param bone_idx].  
         */
        setBoneParent(boneIdx: int64, parentIdx: int64): void
        
        /** Returns the number of bones in the skeleton. */
        getBoneCount(): int64
        
        /** Returns the number of times the bone hierarchy has changed within this skeleton, including renames.  
         *  The Skeleton version is not serialized: only use within a single instance of Skeleton3D.  
         *  Use for invalidating caches in IK solvers and other nodes which process bones.  
         */
        getVersion(): int64
        
        /** Unparents the bone at [param bone_idx] and sets its rest position to that of its parent prior to being reset. */
        unparentBoneAndRest(boneIdx: int64): void
        
        /** Returns an array containing the bone indexes of all the child node of the passed in bone, [param bone_idx]. */
        getBoneChildren(boneIdx: int64): PackedInt32Array
        
        /** Returns an array with all of the bones that are parentless. Another way to look at this is that it returns the indexes of all the bones that are not dependent or modified by other bones in the Skeleton. */
        getParentlessBones(): PackedInt32Array
        
        /** Returns the rest transform for a bone [param bone_idx]. */
        getBoneRest(boneIdx: int64): Transform3D
        
        /** Sets the rest transform for bone [param bone_idx]. */
        setBoneRest(boneIdx: int64, rest: Transform3D): void
        
        /** Returns the global rest transform for [param bone_idx]. */
        getBoneGlobalRest(boneIdx: int64): Transform3D
        createSkinFromRestTransforms(): Skin
        
        /** Binds the given Skin to the Skeleton. */
        registerSkin(skin: Skin): null | SkinReference
        
        /** Returns all bones in the skeleton to their rest poses. */
        localizeRests(): void
        
        /** Clear all the bones in this skeleton. */
        clearBones(): void
        
        /** Returns the pose transform of the specified bone.  
         *      
         *  **Note:** This is the pose you set to the skeleton in the process, the final pose can get overridden by modifiers in the deferred process, if you want to access the final pose, use [signal SkeletonModifier3D.modification_processed].  
         */
        getBonePose(boneIdx: int64): Transform3D
        
        /** Sets the pose transform, [param pose], for the bone at [param bone_idx]. */
        setBonePose(boneIdx: int64, pose: Transform3D): void
        
        /** Sets the pose position of the bone at [param bone_idx] to [param position]. [param position] is a [Vector3] describing a position local to the [Skeleton3D] node. */
        setBonePosePosition(boneIdx: int64, position: Vector3): void
        
        /** Sets the pose rotation of the bone at [param bone_idx] to [param rotation]. [param rotation] is a [Quaternion] describing a rotation in the bone's local coordinate space with respect to the rotation of any parent bones. */
        setBonePoseRotation(boneIdx: int64, rotation: Quaternion): void
        
        /** Sets the pose scale of the bone at [param bone_idx] to [param scale]. */
        setBonePoseScale(boneIdx: int64, scale: Vector3): void
        
        /** Returns the pose position of the bone at [param bone_idx]. The returned [Vector3] is in the local coordinate space of the [Skeleton3D] node. */
        getBonePosePosition(boneIdx: int64): Vector3
        
        /** Returns the pose rotation of the bone at [param bone_idx]. The returned [Quaternion] is local to the bone with respect to the rotation of any parent bones. */
        getBonePoseRotation(boneIdx: int64): Quaternion
        
        /** Returns the pose scale of the bone at [param bone_idx]. */
        getBonePoseScale(boneIdx: int64): Vector3
        
        /** Sets the bone pose to rest for [param bone_idx]. */
        resetBonePose(boneIdx: int64): void
        
        /** Sets all bone poses to rests. */
        resetBonePoses(): void
        
        /** Returns whether the bone pose for the bone at [param bone_idx] is enabled. */
        isBoneEnabled(boneIdx: int64): boolean
        
        /** Disables the pose for the bone at [param bone_idx] if `false`, enables the bone pose if `true`. */
        setBoneEnabled(boneIdx: int64, enabled?: boolean /* = true */): void
        
        /** Returns the overall transform of the specified bone, with respect to the skeleton. Being relative to the skeleton frame, this is not the actual "global" transform of the bone.  
         *      
         *  **Note:** This is the global pose you set to the skeleton in the process, the final global pose can get overridden by modifiers in the deferred process, if you want to access the final global pose, use [signal SkeletonModifier3D.modification_processed].  
         */
        getBoneGlobalPose(boneIdx: int64): Transform3D
        
        /** Sets the global pose transform, [param pose], for the bone at [param bone_idx].  
         *      
         *  **Note:** If other bone poses have been changed, this method executes a dirty poses recalculation and will cause performance to deteriorate. If you know that multiple global poses will be applied, consider using [method set_bone_pose] with precalculation.  
         */
        setBoneGlobalPose(boneIdx: int64, pose: Transform3D): void
        
        /** Force updates the bone transforms/poses for all bones in the skeleton. */
        forceUpdateAllBoneTransforms(): void
        
        /** Force updates the bone transform for the bone at [param bone_idx] and all of its children. */
        forceUpdateBoneChildTransform(boneIdx: int64): void
        
        /** Manually advance the child [SkeletonModifier3D]s by the specified time (in seconds).  
         *      
         *  **Note:** The [param delta] is temporarily accumulated in the [Skeleton3D], and the deferred process uses the accumulated value to process the modification.  
         */
        advance(delta: float64): void
        
        /** Removes the global pose override on all bones in the skeleton. */
        clearBonesGlobalPoseOverride(): void
        
        /** Sets the global pose transform, [param pose], for the bone at [param bone_idx].  
         *  [param amount] is the interpolation strength that will be used when applying the pose, and [param persistent] determines if the applied pose will remain.  
         *      
         *  **Note:** The pose transform needs to be a global pose! To convert a world transform from a [Node3D] to a global bone pose, multiply the [method Transform3D.affine_inverse] of the node's [member Node3D.global_transform] by the desired world transform.  
         */
        setBoneGlobalPoseOverride(boneIdx: int64, pose: Transform3D, amount: float64, persistent?: boolean /* = false */): void
        
        /** Returns the global pose override transform for [param bone_idx]. */
        getBoneGlobalPoseOverride(boneIdx: int64): Transform3D
        
        /** Returns the overall transform of the specified bone, with respect to the skeleton, but without any global pose overrides. Being relative to the skeleton frame, this is not the actual "global" transform of the bone. */
        getBoneGlobalPoseNoOverride(boneIdx: int64): Transform3D
        
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
        
        /** Multiplies the 3D position track animation.  
         *      
         *  **Note:** Unless this value is `1.0`, the key value in animation will not match the actual position value.  
         */
        get motionScale(): float64
        set motionScale(value: float64)
        
        /** If `true`, forces the bones in their default rest pose, regardless of their values. In the editor, this also prevents the bones from being edited. */
        get showRestOnly(): boolean
        set showRestOnly(value: boolean)
        
        /** Sets the processing timing for the Modifier. */
        get modifierCallbackModeProcess(): int64
        set modifierCallbackModeProcess(value: int64)
        
        /** If you follow the recommended workflow and explicitly have [PhysicalBoneSimulator3D] as a child of [Skeleton3D], you can control whether it is affected by raycasting without running [method physical_bones_start_simulation], by its [member SkeletonModifier3D.active].  
         *  However, for old (deprecated) configurations, [Skeleton3D] has an internal virtual [PhysicalBoneSimulator3D] for compatibility. This property controls the internal virtual [PhysicalBoneSimulator3D]'s [member SkeletonModifier3D.active].  
         */
        get animatePhysicalBones(): boolean
        set animatePhysicalBones(value: boolean)
        
        /** Emitted when the rest is updated. */
        readonly restUpdated: Signal<() => void>
        
        /** Emitted when the pose is updated.  
         *      
         *  **Note:** During the update process, this signal is not fired, so modification by [SkeletonModifier3D] is not detected.  
         */
        readonly poseUpdated: Signal<() => void>
        
        /** Emitted when the final pose has been calculated will be applied to the skin in the update process.  
         *  This means that all [SkeletonModifier3D] processing is complete. In order to detect the completion of the processing of each [SkeletonModifier3D], use [signal SkeletonModifier3D.modification_processed].  
         */
        readonly skeletonUpdated: Signal<() => void>
        
        /** Emitted when the bone at [param bone_idx] is toggled with [method set_bone_enabled]. Use [method is_bone_enabled] to check the new value. */
        readonly boneEnabledChanged: Signal<(boneIdx: int64) => void>
        readonly boneListChanged: Signal<() => void>
        
        /** Emitted when the value of [member show_rest_only] changes. */
        readonly showRestOnlyChanged: Signal<() => void>
    }
    /** A node used to rotate all bones of a [Skeleton3D] bone chain a way that places the end bone at a desired 3D position.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_skeletonik3d.html  
     */
    class SkeletonIK3D<Map extends NodePathMap = any> extends SkeletonModifier3D<Map> {
        constructor(identifier?: any)
        /** Returns the parent [Skeleton3D] node that was present when SkeletonIK entered the scene tree. Returns `null` if the parent node was not a [Skeleton3D] node when SkeletonIK3D entered the scene tree. */
        getParentSkeleton(): null | Skeleton3D
        
        /** Returns `true` if SkeletonIK is applying IK effects on continues frames to the [Skeleton3D] bones. Returns `false` if SkeletonIK is stopped or [method start] was used with the `one_time` parameter set to `true`. */
        isRunning(): boolean
        
        /** Starts applying IK effects on each frame to the [Skeleton3D] bones but will only take effect starting on the next frame. If [param one_time] is `true`, this will take effect immediately but also reset on the next frame. */
        start(oneTime?: boolean /* = false */): void
        
        /** Stops applying IK effects on each frame to the [Skeleton3D] bones and also calls [method Skeleton3D.clear_bones_global_pose_override] to remove existing overrides on all bones. */
        stop(): void
        
        /** The name of the current root bone, the first bone in the IK chain. */
        get rootBone(): StringName
        set rootBone(value: StringName)
        
        /** The name of the current tip bone, the last bone in the IK chain placed at the [member target] transform (or [member target_node] if defined). */
        get tipBone(): StringName
        set tipBone(value: StringName)
        
        /** First target of the IK chain where the tip bone is placed and, if [member override_tip_basis] is `true`, how the tip bone is rotated. If a [member target_node] path is available the nodes transform is used instead and this property is ignored. */
        get target(): Transform3D
        set target(value: Transform3D)
        
        /** If `true` overwrites the rotation of the tip bone with the rotation of the [member target] (or [member target_node] if defined). */
        get overrideTipBasis(): boolean
        set overrideTipBasis(value: boolean)
        
        /** If `true`, instructs the IK solver to consider the secondary magnet target (pole target) when calculating the bone chain. Use the magnet position (pole target) to control the bending of the IK chain. */
        get useMagnet(): boolean
        set useMagnet(value: boolean)
        
        /** Secondary target position (first is [member target] property or [member target_node]) for the IK chain. Use magnet position (pole target) to control the bending of the IK chain. Only works if the bone chain has more than 2 bones. The middle chain bone position will be linearly interpolated with the magnet position. */
        get magnet(): Vector3
        set magnet(value: Vector3)
        
        /** Target node [NodePath] for the IK chain. If available, the node's current [Transform3D] is used instead of the [member target] property. */
        get targetNode(): NodePath
        set targetNode(value: NodePath | string)
        
        /** The minimum distance between bone and goal target. If the distance is below this value, the IK solver stops further iterations. */
        get minDistance(): float64
        set minDistance(value: float64)
        
        /** Number of iteration loops used by the IK solver to produce more accurate (and elegant) bone chain results. */
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
        
        /** Called when the modification is setup. This is where the modification performs initialization. */
        /* gdvirtual */ _setupModification(modificationStack: SkeletonModificationStack2D): void
        
        /** Used for drawing **editor-only** modification gizmos. This function will only be called in the Godot editor and can be overridden to draw custom gizmos.  
         *      
         *  **Note:** You will need to use the Skeleton2D from [method SkeletonModificationStack2D.get_skeleton] and it's draw functions, as the [SkeletonModification2D] resource cannot draw on its own.  
         */
        /* gdvirtual */ _drawEditorGizmo(): void
        
        /** Returns the [SkeletonModificationStack2D] that this modification is bound to. Through the modification stack, you can access the Skeleton2D the modification is operating on. */
        getModificationStack(): null | SkeletonModificationStack2D
        
        /** Manually allows you to set the setup state of the modification. This function should only rarely be used, as the [SkeletonModificationStack2D] the modification is bound to should handle setting the modification up. */
        setIsSetup(isSetup: boolean): void
        
        /** Returns whether this modification has been successfully setup or not. */
        getIsSetup(): boolean
        
        /** Takes an angle and clamps it so it is within the passed-in [param min] and [param max] range. [param invert] will inversely clamp the angle, clamping it to the range outside of the given bounds. */
        clampAngle(angle: float64, min: float64, max: float64, invert: boolean): float64
        
        /** Sets whether this modification will call [method _draw_editor_gizmo] in the Godot editor to draw modification-specific gizmos. */
        setEditorDrawGizmo(drawGizmo: boolean): void
        
        /** Returns whether this modification will call [method _draw_editor_gizmo] in the Godot editor to draw modification-specific gizmos. */
        getEditorDrawGizmo(): boolean
        
        /** If `true`, the modification's [method _execute] function will be called by the [SkeletonModificationStack2D]. */
        get enabled(): boolean
        set enabled(value: boolean)
        
        /** The execution mode for the modification. This tells the modification stack when to execute the modification. Some modifications have settings that are only available in certain execution modes. */
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
        /** If `true`, the Jiggle modifier will take colliders into account, keeping them from entering into these collision objects. */
        setUseColliders(useColliders: boolean): void
        
        /** Returns whether the jiggle modifier is taking physics colliders into account when solving. */
        getUseColliders(): boolean
        
        /** Sets the collision mask that the Jiggle modifier will use when reacting to colliders, if the Jiggle modifier is set to take colliders into account. */
        setCollisionMask(collisionMask: int64): void
        
        /** Returns the collision mask used by the Jiggle modifier when collisions are enabled. */
        getCollisionMask(): int64
        
        /** Sets the [Bone2D] node assigned to the Jiggle joint at [param joint_idx]. */
        setJiggleJointBone2DNode(jointIdx: int64, bone2DNode: NodePath | string): void
        
        /** Returns the [Bone2D] node assigned to the Jiggle joint at [param joint_idx]. */
        getJiggleJointBone2DNode(jointIdx: int64): NodePath
        
        /** Sets the bone index, [param bone_idx], of the Jiggle joint at [param joint_idx]. When possible, this will also update the `bone2d_node` of the Jiggle joint based on data provided by the linked skeleton. */
        setJiggleJointBoneIndex(jointIdx: int64, boneIdx: int64): void
        
        /** Returns the index of the [Bone2D] node assigned to the Jiggle joint at [param joint_idx]. */
        getJiggleJointBoneIndex(jointIdx: int64): int64
        
        /** Sets whether the Jiggle joint at [param joint_idx] should override the default Jiggle joint settings. Setting this to `true` will make the joint use its own settings rather than the default ones attached to the modification. */
        setJiggleJointOverride(jointIdx: int64, override: boolean): void
        
        /** Returns a boolean that indicates whether the joint at [param joint_idx] is overriding the default Jiggle joint data defined in the modification. */
        getJiggleJointOverride(jointIdx: int64): boolean
        
        /** Sets the of stiffness of the Jiggle joint at [param joint_idx]. */
        setJiggleJointStiffness(jointIdx: int64, stiffness: float64): void
        
        /** Returns the stiffness of the Jiggle joint at [param joint_idx]. */
        getJiggleJointStiffness(jointIdx: int64): float64
        
        /** Sets the of mass of the Jiggle joint at [param joint_idx]. */
        setJiggleJointMass(jointIdx: int64, mass: float64): void
        
        /** Returns the amount of mass of the jiggle joint at [param joint_idx]. */
        getJiggleJointMass(jointIdx: int64): float64
        
        /** Sets the amount of damping of the Jiggle joint at [param joint_idx]. */
        setJiggleJointDamping(jointIdx: int64, damping: float64): void
        
        /** Returns the amount of damping of the Jiggle joint at [param joint_idx]. */
        getJiggleJointDamping(jointIdx: int64): float64
        
        /** Sets whether the Jiggle joint at [param joint_idx] should use gravity. */
        setJiggleJointUseGravity(jointIdx: int64, useGravity: boolean): void
        
        /** Returns a boolean that indicates whether the joint at [param joint_idx] is using gravity or not. */
        getJiggleJointUseGravity(jointIdx: int64): boolean
        
        /** Sets the gravity vector of the Jiggle joint at [param joint_idx]. */
        setJiggleJointGravity(jointIdx: int64, gravity: Vector2): void
        
        /** Returns a [Vector2] representing the amount of gravity the Jiggle joint at [param joint_idx] is influenced by. */
        getJiggleJointGravity(jointIdx: int64): Vector2
        
        /** The NodePath to the node that is the target for the Jiggle modification. This node is what the Jiggle chain will attempt to rotate the bone chain to. */
        get targetNodePath(): NodePath
        set targetNodePath(value: NodePath | string)
        
        /** The amount of Jiggle joints in the Jiggle modification. */
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
        
        /** Whether the gravity vector, [member gravity], should be applied to the Jiggle joints, assuming they are not overriding the default settings. */
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
        /** Sets the amount of additional rotation that is to be applied after executing the modification. This allows for offsetting the results by the inputted rotation amount. */
        setAdditionalRotation(rotation: float64): void
        
        /** Returns the amount of additional rotation that is applied after the LookAt modification executes. */
        getAdditionalRotation(): float64
        
        /** Sets whether this modification will use constraints or not. When `true`, constraints will be applied when solving the LookAt modification. */
        setEnableConstraint(enableConstraint: boolean): void
        
        /** Returns `true` if the LookAt modification is using constraints. */
        getEnableConstraint(): boolean
        
        /** Sets the constraint's minimum allowed angle. */
        setConstraintAngleMin(angleMin: float64): void
        
        /** Returns the constraint's minimum allowed angle. */
        getConstraintAngleMin(): float64
        
        /** Sets the constraint's maximum allowed angle. */
        setConstraintAngleMax(angleMax: float64): void
        
        /** Returns the constraint's maximum allowed angle. */
        getConstraintAngleMax(): float64
        
        /** When `true`, the modification will use an inverted joint constraint.  
         *  An inverted joint constraint only constraints the [Bone2D] to the angles  *outside of*  the inputted minimum and maximum angles. For this reason, it is referred to as an inverted joint constraint, as it constraints the joint to the outside of the inputted values.  
         */
        setConstraintAngleInvert(invert: boolean): void
        
        /** Returns whether the constraints to this modification are inverted or not. */
        getConstraintAngleInvert(): boolean
        
        /** The index of the [Bone2D] node that the modification will operate on. */
        get boneIndex(): int64
        set boneIndex(value: int64)
        
        /** The [Bone2D] node that the modification will operate on. */
        get bone2DNode(): NodePath
        set bone2DNode(value: NodePath | string)
        
        /** The NodePath to the node that is the target for the LookAt modification. This node is what the modification will rotate the [Bone2D] to. */
        get targetNodePath(): NodePath
        set targetNodePath(value: NodePath | string)
    }
    /** A modification that applies the transforms of [PhysicalBone2D] nodes to [Bone2D] nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_skeletonmodification2dphysicalbones.html  
     */
    class SkeletonModification2DPhysicalBones extends SkeletonModification2D {
        constructor(identifier?: any)
        /** Sets the [PhysicalBone2D] node at [param joint_idx].  
         *      
         *  **Note:** This is just the index used for this modification, not the bone index used in the [Skeleton2D].  
         */
        setPhysicalBoneNode(jointIdx: int64, physicalbone2DNode: NodePath | string): void
        
        /** Returns the [PhysicalBone2D] node at [param joint_idx]. */
        getPhysicalBoneNode(jointIdx: int64): NodePath
        
        /** Empties the list of [PhysicalBone2D] nodes and populates it with all [PhysicalBone2D] nodes that are children of the [Skeleton2D]. */
        fetchPhysicalBones(): void
        
        /** Tell the [PhysicalBone2D] nodes to start simulating and interacting with the physics world.  
         *  Optionally, an array of bone names can be passed to this function, and that will cause only [PhysicalBone2D] nodes with those names to start simulating.  
         */
        startSimulation(bones?: GArray /* = [] */): void
        
        /** Tell the [PhysicalBone2D] nodes to stop simulating and interacting with the physics world.  
         *  Optionally, an array of bone names can be passed to this function, and that will cause only [PhysicalBone2D] nodes with those names to stop simulating.  
         */
        stopSimulation(bones?: GArray /* = [] */): void
        
        /** The number of [PhysicalBone2D] nodes linked in this modification. */
        get physicalBoneChainLength(): int64
        set physicalBoneChainLength(value: int64)
    }
    /** A modification that holds and executes a [SkeletonModificationStack2D].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_skeletonmodification2dstackholder.html  
     */
    class SkeletonModification2DStackHolder extends SkeletonModification2D {
        constructor(identifier?: any)
        /** Sets the [SkeletonModificationStack2D] that this modification is holding. This modification stack will then be executed when this modification is executed. */
        setHeldModificationStack(heldModificationStack: SkeletonModificationStack2D): void
        
        /** Returns the [SkeletonModificationStack2D] that this modification is holding. */
        getHeldModificationStack(): null | SkeletonModificationStack2D
    }
    /** A modification that rotates two bones using the law of cosines to reach the target.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_skeletonmodification2dtwoboneik.html  
     */
    class SkeletonModification2DTwoBoneIK extends SkeletonModification2D {
        constructor(identifier?: any)
        /** Sets the [Bone2D] node that is being used as the first bone in the TwoBoneIK modification. */
        setJointOneBone2DNode(bone2DNode: NodePath | string): void
        
        /** Returns the [Bone2D] node that is being used as the first bone in the TwoBoneIK modification. */
        getJointOneBone2DNode(): NodePath
        
        /** Sets the index of the [Bone2D] node that is being used as the first bone in the TwoBoneIK modification. */
        setJointOneBoneIdx(boneIdx: int64): void
        
        /** Returns the index of the [Bone2D] node that is being used as the first bone in the TwoBoneIK modification. */
        getJointOneBoneIdx(): int64
        
        /** Sets the [Bone2D] node that is being used as the second bone in the TwoBoneIK modification. */
        setJointTwoBone2DNode(bone2DNode: NodePath | string): void
        
        /** Returns the [Bone2D] node that is being used as the second bone in the TwoBoneIK modification. */
        getJointTwoBone2DNode(): NodePath
        
        /** Sets the index of the [Bone2D] node that is being used as the second bone in the TwoBoneIK modification. */
        setJointTwoBoneIdx(boneIdx: int64): void
        
        /** Returns the index of the [Bone2D] node that is being used as the second bone in the TwoBoneIK modification. */
        getJointTwoBoneIdx(): int64
        
        /** The NodePath to the node that is the target for the TwoBoneIK modification. This node is what the modification will use when bending the [Bone2D] nodes. */
        get targetNodePath(): NodePath
        set targetNodePath(value: NodePath | string)
        
        /** The minimum distance the target can be at. If the target is closer than this distance, the modification will solve as if it's at this minimum distance. When set to `0`, the modification will solve without distance constraints. */
        get targetMinimumDistance(): float64
        set targetMinimumDistance(value: float64)
        
        /** The maximum distance the target can be at. If the target is farther than this distance, the modification will solve as if it's at this maximum distance. When set to `0`, the modification will solve without distance constraints. */
        get targetMaximumDistance(): float64
        set targetMaximumDistance(value: float64)
        
        /** If `true`, the bones in the modification will bend outward as opposed to inwards when contracting. If `false`, the bones will bend inwards when contracting. */
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
        
        /** Enables all [SkeletonModification2D]s in the stack. */
        enableAllModifications(enabled: boolean): void
        
        /** Returns the [SkeletonModification2D] at the passed-in index, [param mod_idx]. */
        getModification(modIdx: int64): null | SkeletonModification2D
        
        /** Adds the passed-in [SkeletonModification2D] to the stack. */
        addModification(modification: SkeletonModification2D): void
        
        /** Deletes the [SkeletonModification2D] at the index position [param mod_idx], if it exists. */
        deleteModification(modIdx: int64): void
        
        /** Sets the modification at [param mod_idx] to the passed-in modification, [param modification]. */
        setModification(modIdx: int64, modification: SkeletonModification2D): void
        
        /** Returns a boolean that indicates whether the modification stack is setup and can execute. */
        getIsSetup(): boolean
        
        /** Returns the [Skeleton2D] node that the SkeletonModificationStack2D is bound to. */
        getSkeleton(): null | Skeleton2D
        
        /** If `true`, the modification's in the stack will be called. This is handled automatically through the [Skeleton2D] node. */
        get enabled(): boolean
        set enabled(value: boolean)
        
        /** The interpolation strength of the modifications in stack. A value of `0` will make it where the modifications are not applied, a strength of `0.5` will be half applied, and a strength of `1` will allow the modifications to be fully applied and override the [Skeleton2D] [Bone2D] poses. */
        get strength(): float64
        set strength(value: float64)
        
        /** The number of modifications in the stack. */
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
    /** A node that may modify a Skeleton3D's bones.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_skeletonmodifier3d.html  
     */
    class SkeletonModifier3D<Map extends NodePathMap = any> extends Node3D<Map> {
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
        
        /** Override this virtual method to implement a custom skeleton modifier. You should do things like get the [Skeleton3D]'s current pose and apply the pose here.  
         *  [method _process_modification_with_delta] must not apply [member influence] to bone poses because the [Skeleton3D] automatically applies influence to all bone poses set by the modifier.  
         *  [param delta] is passed from parent [Skeleton3D]. See also [method Skeleton3D.advance].  
         */
        /* gdvirtual */ _processModificationWithDelta(delta: float64): void
        
        /** Override this virtual method to implement a custom skeleton modifier. You should do things like get the [Skeleton3D]'s current pose and apply the pose here.  
         *  [method _process_modification] must not apply [member influence] to bone poses because the [Skeleton3D] automatically applies influence to all bone poses set by the modifier.  
         */
        /* gdvirtual */ _processModification(): void
        
        /** Called when the skeleton is changed. */
        /* gdvirtual */ _skeletonChanged(oldSkeleton: Skeleton3D, newSkeleton: Skeleton3D): void
        
        /** Called when bone name and index need to be validated such as the timing of the entering tree or changing skeleton. */
        /* gdvirtual */ _validateBoneNames(): void
        
        /** Get parent [Skeleton3D] node if found. */
        getSkeleton(): null | Skeleton3D
        
        /** If `true`, the [SkeletonModifier3D] will be processing. */
        get active(): boolean
        set active(value: boolean)
        
        /** Sets the influence of the modification.  
         *      
         *  **Note:** This value is used by [Skeleton3D] to blend, so the [SkeletonModifier3D] should always apply only 100% of the result without interpolation.  
         */
        get influence(): float64
        set influence(value: float64)
        
        /** Notifies when the modification have been finished.  
         *      
         *  **Note:** If you want to get the modified bone pose by the modifier, you must use [method Skeleton3D.get_bone_pose] or [method Skeleton3D.get_bone_global_pose] at the moment this signal is fired.  
         */
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
        
        /** Returns the name of the group at [param group_idx] that will be the drawing group in the [BoneMap] editor. */
        getGroupName(groupIdx: int64): StringName
        
        /** Sets the name of the group at [param group_idx] that will be the drawing group in the [BoneMap] editor. */
        setGroupName(groupIdx: int64, groupName: StringName): void
        
        /** Returns the texture of the group at [param group_idx] that will be the drawing group background image in the [BoneMap] editor. */
        getTexture(groupIdx: int64): null | Texture2D
        
        /** Sets the texture of the group at [param group_idx] that will be the drawing group background image in the [BoneMap] editor. */
        setTexture(groupIdx: int64, texture: Texture2D): void
        
        /** Returns the bone index that matches [param bone_name] as its name. */
        findBone(boneName: StringName): int64
        
        /** Returns the name of the bone at [param bone_idx] that will be the key name in the [BoneMap].  
         *  In the retargeting process, the returned bone name is the bone name of the target skeleton.  
         */
        getBoneName(boneIdx: int64): StringName
        
        /** Sets the name of the bone at [param bone_idx] that will be the key name in the [BoneMap].  
         *  In the retargeting process, the setting bone name is the bone name of the target skeleton.  
         */
        setBoneName(boneIdx: int64, boneName: StringName): void
        
        /** Returns the name of the bone which is the parent to the bone at [param bone_idx]. The result is empty if the bone has no parent. */
        getBoneParent(boneIdx: int64): StringName
        
        /** Sets the bone with name [param bone_parent] as the parent of the bone at [param bone_idx]. If an empty string is passed, then the bone has no parent. */
        setBoneParent(boneIdx: int64, boneParent: StringName): void
        
        /** Returns the tail direction of the bone at [param bone_idx]. */
        getTailDirection(boneIdx: int64): SkeletonProfile.TailDirection
        
        /** Sets the tail direction of the bone at [param bone_idx].  
         *      
         *  **Note:** This only specifies the method of calculation. The actual coordinates required should be stored in an external skeleton, so the calculation itself needs to be done externally.  
         */
        setTailDirection(boneIdx: int64, tailDirection: SkeletonProfile.TailDirection): void
        
        /** Returns the name of the bone which is the tail of the bone at [param bone_idx]. */
        getBoneTail(boneIdx: int64): StringName
        
        /** Sets the bone with name [param bone_tail] as the tail of the bone at [param bone_idx]. */
        setBoneTail(boneIdx: int64, boneTail: StringName): void
        
        /** Returns the reference pose transform for bone [param bone_idx]. */
        getReferencePose(boneIdx: int64): Transform3D
        
        /** Sets the reference pose transform for bone [param bone_idx]. */
        setReferencePose(boneIdx: int64, boneName: Transform3D): void
        
        /** Returns the offset of the bone at [param bone_idx] that will be the button position in the [BoneMap] editor.  
         *  This is the offset with origin at the top left corner of the square.  
         */
        getHandleOffset(boneIdx: int64): Vector2
        
        /** Sets the offset of the bone at [param bone_idx] that will be the button position in the [BoneMap] editor.  
         *  This is the offset with origin at the top left corner of the square.  
         */
        setHandleOffset(boneIdx: int64, handleOffset: Vector2): void
        
        /** Returns the group of the bone at [param bone_idx]. */
        getGroup(boneIdx: int64): StringName
        
        /** Sets the group of the bone at [param bone_idx]. */
        setGroup(boneIdx: int64, group: StringName): void
        
        /** Returns whether the bone at [param bone_idx] is required for retargeting.  
         *  This value is used by the bone map editor. If this method returns `true`, and no bone is assigned, the handle color will be red on the bone map editor.  
         */
        isRequired(boneIdx: int64): boolean
        
        /** Sets the required status for bone [param bone_idx] to [param required]. */
        setRequired(boneIdx: int64, required: boolean): void
        
        /** A bone name that will be used as the root bone in [AnimationTree]. This should be the bone of the parent of hips that exists at the world origin. */
        get rootBone(): StringName
        set rootBone(value: StringName)
        
        /** A bone name which will use model's height as the coefficient for normalization. For example, [SkeletonProfileHumanoid] defines it as `Hips`. */
        get scaleBaseBone(): StringName
        set scaleBaseBone(value: StringName)
        
        /** The amount of groups of bones in retargeting section's [BoneMap] editor. For example, [SkeletonProfileHumanoid] has 4 groups.  
         *  This property exists to separate the bone list into several sections in the editor.  
         */
        get groupSize(): any /*Groups,groups/*/
        set groupSize(value: any /*Groups,groups/*/)
        
        /** The amount of bones in retargeting section's [BoneMap] editor. For example, [SkeletonProfileHumanoid] has 56 bones.  
         *  The size of elements in [BoneMap] updates when changing this property in it's assigned [SkeletonProfile].  
         */
        get boneSize(): any /*Bones,bones/*/
        set boneSize(value: any /*Bones,bones/*/)
        
        /** This signal is emitted when change the value in profile. This is used to update key name in the [BoneMap] and to redraw the [BoneMap] editor.  
         *      
         *  **Note:** This signal is not connected directly to editor to simplify the reference, instead it is passed on to editor through the [BoneMap].  
         */
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
        /** Returns the [RID] owned by this SkinReference, as returned by [method RenderingServer.skeleton_create]. */
        getSkeleton(): Rid
        
        /** Returns the [Skin] connected to this SkinReference. In the case of [MeshInstance3D] with no [member MeshInstance3D.skin] assigned, this will reference an internal default [Skin] owned by that [MeshInstance3D].  
         *  Note that a single [Skin] may have more than one [SkinReference] in the case that it is shared by meshes across multiple [Skeleton3D] nodes.  
         */
        getSkin(): null | Skin
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
        
        /** [Material] used to draw the background. Can be [PanoramaSkyMaterial], [ProceduralSkyMaterial], [PhysicalSkyMaterial], or even a [ShaderMaterial] if you want to use your own custom shader. */
        get skyMaterial(): null | PanoramaSkyMaterial | ProceduralSkyMaterial | PhysicalSkyMaterial | ShaderMaterial
        set skyMaterial(value: null | PanoramaSkyMaterial | ProceduralSkyMaterial | PhysicalSkyMaterial | ShaderMaterial)
        
        /** Sets the method for generating the radiance map from the sky. The radiance map is a cubemap with increasingly blurry versions of the sky corresponding to different levels of roughness. Radiance maps can be expensive to calculate. See [enum ProcessMode] for options. */
        get processMode(): int64
        set processMode(value: int64)
        
        /** The [Sky]'s radiance map size. The higher the radiance map size, the more detailed the lighting from the [Sky] will be.  
         *  See [enum RadianceSize] constants for values.  
         *      
         *  **Note:** Some hardware will have trouble with higher radiance sizes, especially [constant RADIANCE_SIZE_512] and above. Only use such high values on high-end hardware.  
         */
        get radianceSize(): int64
        set radianceSize(value: int64)
    }
    /** Abstract base class for sliders.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_slider.html  
     */
    class Slider<Map extends NodePathMap = any> extends Range<Map> {
        constructor(identifier?: any)
        /** If `true`, the slider can be interacted with. If `false`, the value can be changed only by code. */
        get editable(): boolean
        set editable(value: boolean)
        
        /** If `true`, the value can be changed using the mouse wheel. */
        get scrollable(): boolean
        set scrollable(value: boolean)
        
        /** Number of ticks displayed on the slider, including border ticks. Ticks are uniformly-distributed value markers. */
        get tickCount(): int64
        set tickCount(value: int64)
        
        /** If `true`, the slider will display ticks for minimum and maximum values. */
        get ticksOnBorders(): boolean
        set ticksOnBorders(value: boolean)
        
        /** Emitted when the grabber starts being dragged. This is emitted before the corresponding [signal Range.value_changed] signal. */
        readonly dragStarted: Signal<() => void>
        
        /** Emitted when the grabber stops being dragged. If [param value_changed] is `true`, [member Range.value] is different from the value when the dragging was started. */
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
    class SliderJoint3D<Map extends NodePathMap = any> extends Joint3D<Map> {
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
        
        /** Assigns [param value] to the given parameter (see [enum Param] constants). */
        setParam(param: SliderJoint3D.Param, value: float64): void
        
        /** Returns the value of the given parameter (see [enum Param] constants). */
        getParam(param: SliderJoint3D.Param): float64
        
        /** The maximum difference between the pivot points on their X axis before damping happens. */
        get "linearLimit/upperDistance"(): float64
        set "linearLimit/upperDistance"(value: float64)
        
        /** The minimum difference between the pivot points on their X axis before damping happens. */
        get "linearLimit/lowerDistance"(): float64
        set "linearLimit/lowerDistance"(value: float64)
        
        /** A factor applied to the movement across the slider axis once the limits get surpassed. The lower, the slower the movement. */
        get "linearLimit/softness"(): float64
        set "linearLimit/softness"(value: float64)
        
        /** The amount of restitution once the limits are surpassed. The lower, the more velocity-energy gets lost. */
        get "linearLimit/restitution"(): float64
        set "linearLimit/restitution"(value: float64)
        
        /** The amount of damping that happens once the limit defined by [member linear_limit/lower_distance] and [member linear_limit/upper_distance] is surpassed. */
        get "linearLimit/damping"(): float64
        set "linearLimit/damping"(value: float64)
        
        /** A factor applied to the movement across the slider axis as long as the slider is in the limits. The lower, the slower the movement. */
        get "linearMotion/softness"(): float64
        set "linearMotion/softness"(value: float64)
        
        /** The amount of restitution inside the slider limits. */
        get "linearMotion/restitution"(): float64
        set "linearMotion/restitution"(value: float64)
        
        /** The amount of damping inside the slider limits. */
        get "linearMotion/damping"(): float64
        set "linearMotion/damping"(value: float64)
        
        /** A factor applied to the movement across axes orthogonal to the slider. */
        get "linearOrtho/softness"(): float64
        set "linearOrtho/softness"(value: float64)
        
        /** The amount of restitution when movement is across axes orthogonal to the slider. */
        get "linearOrtho/restitution"(): float64
        set "linearOrtho/restitution"(value: float64)
        
        /** The amount of damping when movement is across axes orthogonal to the slider. */
        get "linearOrtho/damping"(): float64
        set "linearOrtho/damping"(value: float64)
        
        /** The upper limit of rotation in the slider. */
        get "angularLimit/upperAngle"(): float64
        set "angularLimit/upperAngle"(value: float64)
        
        /** The lower limit of rotation in the slider. */
        get "angularLimit/lowerAngle"(): float64
        set "angularLimit/lowerAngle"(value: float64)
        
        /** A factor applied to the all rotation once the limit is surpassed.  
         *  Makes all rotation slower when between 0 and 1.  
         */
        get "angularLimit/softness"(): float64
        set "angularLimit/softness"(value: float64)
        
        /** The amount of restitution of the rotation when the limit is surpassed.  
         *  Does not affect damping.  
         */
        get "angularLimit/restitution"(): float64
        set "angularLimit/restitution"(value: float64)
        
        /** The amount of damping of the rotation when the limit is surpassed.  
         *  A lower damping value allows a rotation initiated by body A to travel to body B slower.  
         */
        get "angularLimit/damping"(): float64
        set "angularLimit/damping"(value: float64)
        
        /** A factor applied to the all rotation in the limits. */
        get "angularMotion/softness"(): float64
        set "angularMotion/softness"(value: float64)
        
        /** The amount of restitution of the rotation in the limits. */
        get "angularMotion/restitution"(): float64
        set "angularMotion/restitution"(value: float64)
        
        /** The amount of damping of the rotation in the limits. */
        get "angularMotion/damping"(): float64
        set "angularMotion/damping"(value: float64)
        
        /** A factor applied to the all rotation across axes orthogonal to the slider. */
        get "angularOrtho/softness"(): float64
        set "angularOrtho/softness"(value: float64)
        
        /** The amount of restitution of the rotation across axes orthogonal to the slider. */
        get "angularOrtho/restitution"(): float64
        set "angularOrtho/restitution"(value: float64)
        
        /** The amount of damping of the rotation across axes orthogonal to the slider. */
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
    class SoftBody3D<Map extends NodePathMap = any> extends MeshInstance3D<Map> {
        /** When [member Node.process_mode] is set to [constant Node.PROCESS_MODE_DISABLED], remove from the physics simulation to stop all physics interactions with this [SoftBody3D].  
         *  Automatically re-added to the physics simulation when the [Node] is processed again.  
         */
        static readonly DISABLE_MODE_REMOVE = 0
        
        /** When [member Node.process_mode] is set to [constant Node.PROCESS_MODE_DISABLED], do not affect the physics simulation. */
        static readonly DISABLE_MODE_KEEP_ACTIVE = 1
        constructor(identifier?: any)
        
        /** Returns the internal [RID] used by the [PhysicsServer3D] for this body. */
        getPhysicsRid(): Rid
        
        /** Based on [param value], enables or disables the specified layer in the [member collision_mask], given a [param layer_number] between 1 and 32. */
        setCollisionMaskValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member collision_mask] is enabled, given a [param layer_number] between 1 and 32. */
        getCollisionMaskValue(layerNumber: int64): boolean
        
        /** Based on [param value], enables or disables the specified layer in the [member collision_layer], given a [param layer_number] between 1 and 32. */
        setCollisionLayerValue(layerNumber: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member collision_layer] is enabled, given a [param layer_number] between 1 and 32. */
        getCollisionLayerValue(layerNumber: int64): boolean
        
        /** Returns an array of nodes that were added as collision exceptions for this body. */
        getCollisionExceptions(): GArray
        
        /** Adds a body to the list of bodies that this body can't collide with. */
        addCollisionExceptionWith(body: Node): void
        
        /** Removes a body from the list of bodies that this body can't collide with. */
        removeCollisionExceptionWith(body: Node): void
        
        /** Returns local translation of a vertex in the surface array. */
        getPointTransform(pointIndex: int64): Vector3
        
        /** Sets the pinned state of a surface vertex. When set to `true`, the optional [param attachment_path] can define a [Node3D] the pinned vertex will be attached to. */
        setPointPinned(pointIndex: int64, pinned: boolean, attachmentPath?: NodePath | string /* = '' */, insertAt?: int64 /* = -1 */): void
        
        /** Returns `true` if vertex is set to pinned. */
        isPointPinned(pointIndex: int64): boolean
        
        /** The physics layers this SoftBody3D **is in**. Collision objects can exist in one or more of 32 different layers. See also [member collision_mask].  
         *      
         *  **Note:** Object A can detect a contact with object B only if object B is in any of the layers that object A scans. See [url=https://docs.godotengine.org/en/latest/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information.  
         */
        get collisionLayer(): int64
        set collisionLayer(value: int64)
        
        /** The physics layers this SoftBody3D **scans**. Collision objects can scan one or more of 32 different layers. See also [member collision_layer].  
         *      
         *  **Note:** Object A can detect a contact with object B only if object B is in any of the layers that object A scans. See [url=https://docs.godotengine.org/en/latest/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information.  
         */
        get collisionMask(): int64
        set collisionMask(value: int64)
        
        /** [NodePath] to a [CollisionObject3D] this SoftBody3D should avoid clipping. */
        get parentCollisionIgnore(): NodePath
        set parentCollisionIgnore(value: NodePath | string)
        
        /** Increasing this value will improve the resulting simulation, but can affect performance. Use with care. */
        get simulationPrecision(): int64
        set simulationPrecision(value: int64)
        
        /** The SoftBody3D's mass. */
        get totalMass(): float64
        set totalMass(value: float64)
        
        /** Higher values will result in a stiffer body, while lower values will increase the body's ability to bend. The value can be between `0.0` and `1.0` (inclusive). */
        get linearStiffness(): float64
        set linearStiffness(value: float64)
        
        /** The pressure coefficient of this soft body. Simulate pressure build-up from inside this body. Higher values increase the strength of this effect. */
        get pressureCoefficient(): float64
        set pressureCoefficient(value: float64)
        
        /** The body's damping coefficient. Higher values will slow down the body more noticeably when forces are applied. */
        get dampingCoefficient(): float64
        set dampingCoefficient(value: float64)
        
        /** The body's drag coefficient. Higher values increase this body's air resistance.  
         *      
         *  **Note:** This value is currently unused by Godot's default physics implementation.  
         */
        get dragCoefficient(): float64
        set dragCoefficient(value: float64)
        
        /** If `true`, the [SoftBody3D] will respond to [RayCast3D]s. */
        get rayPickable(): boolean
        set rayPickable(value: boolean)
        
        /** Defines the behavior in physics when [member Node.process_mode] is set to [constant Node.PROCESS_MODE_DISABLED]. See [enum DisableMode] for more details about the different modes. */
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
        
        /** Number of radial segments on the sphere. */
        get radialSegments(): int64
        set radialSegments(value: int64)
        
        /** Number of segments along the height of the sphere. */
        get rings(): int64
        set rings(value: int64)
        
        /** If `true`, a hemisphere is created rather than a full sphere.  
         *      
         *  **Note:** To get a regular hemisphere, the height and radius of the sphere must be equal.  
         */
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
    class SpinBox<Map extends NodePathMap = any> extends Range<Map> {
        constructor(identifier?: any)
        /** Applies the current value of this [SpinBox]. */
        apply(): void
        
        /** Returns the [LineEdit] instance from this [SpinBox]. You can use it to access properties and methods of [LineEdit].  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member CanvasItem.visible] property.  
         */
        getLineEdit(): null | LineEdit
        
        /** Changes the alignment of the underlying [LineEdit]. */
        get alignment(): int64
        set alignment(value: int64)
        
        /** If `true`, the [SpinBox] will be editable. Otherwise, it will be read only. */
        get editable(): boolean
        set editable(value: boolean)
        
        /** Sets the value of the [Range] for this [SpinBox] when the [LineEdit] text is  *changed*  instead of  *submitted* . See [signal LineEdit.text_changed] and [signal LineEdit.text_submitted]. */
        get updateOnTextChanged(): boolean
        set updateOnTextChanged(value: boolean)
        
        /** Adds the specified prefix string before the numerical value of the [SpinBox]. */
        get prefix(): string
        set prefix(value: string)
        
        /** Adds the specified suffix string after the numerical value of the [SpinBox]. */
        get suffix(): string
        set suffix(value: string)
        
        /** If not `0`, [member Range.value] will always be rounded to a multiple of [member custom_arrow_step] when interacting with the arrow buttons of the [SpinBox]. */
        get customArrowStep(): float64
        set customArrowStep(value: float64)
        
        /** If `true`, the [SpinBox] will select the whole text when the [LineEdit] gains focus. Clicking the up and down arrows won't trigger this behavior. */
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
    class SplitContainer<Map extends NodePathMap = any> extends Container<Map> {
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
        
        /** Clamps the [member split_offset] value to not go outside the currently possible minimal and maximum values. */
        clampSplitOffset(): void
        
        /** Returns the drag area [Control]. For example, you can move a pre-configured button into the drag area [Control] so that it rides along with the split bar. Try setting the [Button] anchors to `center` prior to the `reparent()` call.  
         *    
         *      
         *  **Note:** The drag area [Control] is drawn over the [SplitContainer]'s children, so [CanvasItem] draw objects called from the [Control] and children added to the [Control] will also appear over the [SplitContainer]'s children. Try setting [member Control.mouse_filter] of custom children to [constant Control.MOUSE_FILTER_IGNORE] to prevent blocking the mouse from dragging if desired.  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash.  
         */
        getDragAreaControl(): null | Control
        
        /** The initial offset of the splitting between the two [Control]s, with `0` being at the end of the first [Control]. */
        get splitOffset(): int64
        set splitOffset(value: int64)
        
        /** If `true`, the dragger will be disabled and the children will be sized as if the [member split_offset] was `0`. */
        get collapsed(): boolean
        set collapsed(value: boolean)
        
        /** Enables or disables split dragging. */
        get draggingEnabled(): boolean
        set draggingEnabled(value: boolean)
        
        /** Determines the dragger's visibility. See [enum DraggerVisibility] for details. This property does not determine whether dragging is enabled or not. Use [member dragging_enabled] for that. */
        get draggerVisibility(): int64
        set draggerVisibility(value: int64)
        
        /** If `true`, the [SplitContainer] will arrange its children vertically, rather than horizontally.  
         *  Can't be changed when using [HSplitContainer] and [VSplitContainer].  
         */
        get vertical(): boolean
        set vertical(value: boolean)
        
        /** Reduces the size of the drag area and split bar [theme_item split_bar_background] at the beginning of the container. */
        get dragAreaMarginBegin(): int64
        set dragAreaMarginBegin(value: int64)
        
        /** Reduces the size of the drag area and split bar [theme_item split_bar_background] at the end of the container. */
        get dragAreaMarginEnd(): int64
        set dragAreaMarginEnd(value: int64)
        
        /** Shifts the drag area in the axis of the container to prevent the drag area from overlapping the [ScrollBar] or other selectable [Control] of a child node. */
        get dragAreaOffset(): int64
        set dragAreaOffset(value: int64)
        
        /** Highlights the drag area [Rect2] so you can see where it is during development. The drag area is gold if [member dragging_enabled] is `true`, and red if `false`. */
        get dragAreaHighlightInEditor(): boolean
        set dragAreaHighlightInEditor(value: boolean)
        
        /** Emitted when the dragger is dragged by user. */
        readonly dragged: Signal<(offset: int64) => void>
        
        /** Emitted when the user starts dragging. */
        readonly dragStarted: Signal<() => void>
        
        /** Emitted when the user ends dragging. */
        readonly dragEnded: Signal<() => void>
    }
    /** A spotlight, such as a reflector spotlight or a lantern.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_spotlight3d.html  
     */
    class SpotLight3D<Map extends NodePathMap = any> extends Light3D<Map> {
        constructor(identifier?: any)
        /** The maximal range that can be reached by the spotlight. Note that the effectively lit area may appear to be smaller depending on the [member spot_attenuation] in use. No matter the [member spot_attenuation] in use, the light will never reach anything outside this range.  
         *      
         *  **Note:** [member spot_range] is not affected by [member Node3D.scale] (the light's scale or its parent's scale).  
         */
        get spotRange(): float64
        set spotRange(value: float64)
        
        /** Controls the distance attenuation function for spotlights.  
         *  A value of `0.0` will maintain a constant brightness through most of the range, but smoothly attenuate the light at the edge of the range. Use a value of `2.0` for physically accurate lights as it results in the proper inverse square attenutation.  
         *      
         *  **Note:** Setting attenuation to `2.0` or higher may result in distant objects receiving minimal light, even within range. For example, with a range of `4096`, an object at `100` units is attenuated by a factor of `0.0001`. With a default brightness of `1`, the light would not be visible at that distance.  
         *      
         *  **Note:** Using negative or values higher than `10.0` may lead to unexpected results.  
         */
        get spotAttenuation(): float64
        set spotAttenuation(value: float64)
        
        /** The spotlight's angle in degrees.  
         *      
         *  **Note:** [member spot_angle] is not affected by [member Node3D.scale] (the light's scale or its parent's scale).  
         */
        get spotAngle(): float64
        set spotAngle(value: float64)
        
        /** The spotlight's  *angular*  attenuation curve. See also [member spot_attenuation]. */
        get spotAngleAttenuation(): float64
        set spotAngleAttenuation(value: float64)
    }
    /** A 3D raycast that dynamically moves its children near the collision point.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_springarm3d.html  
     */
    class SpringArm3D<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        /** Returns the spring arm's current length. */
        getHitLength(): float64
        
        /** Adds the [PhysicsBody3D] object with the given [RID] to the list of [PhysicsBody3D] objects excluded from the collision check. */
        addExcludedObject(rID: Rid): void
        
        /** Removes the given [RID] from the list of [PhysicsBody3D] objects excluded from the collision check. */
        removeExcludedObject(rID: Rid): boolean
        
        /** Clears the list of [PhysicsBody3D] objects excluded from the collision check. */
        clearExcludedObjects(): void
        
        /** The layers against which the collision check shall be done. See [url=https://docs.godotengine.org/en/latest/tutorials/physics/physics_introduction.html#collision-layers-and-masks]Collision layers and masks[/url] in the documentation for more information. */
        get collisionMask(): int64
        set collisionMask(value: int64)
        
        /** The [Shape3D] to use for the SpringArm3D.  
         *  When the shape is set, the SpringArm3D will cast the [Shape3D] on its z axis instead of performing a ray cast.  
         */
        get shape(): null | Shape3D
        set shape(value: null | Shape3D)
        
        /** The maximum extent of the SpringArm3D. This is used as a length for both the ray and the shape cast used internally to calculate the desired position of the SpringArm3D's child nodes.  
         *  To know more about how to perform a shape cast or a ray cast, please consult the [PhysicsDirectSpaceState3D] documentation.  
         */
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
    class SpringBoneCollision3D<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        /** Get parent [Skeleton3D] node of the parent [SpringBoneSimulator3D] if found. */
        getSkeleton(): null | Skeleton3D
        
        /** The name of the attached bone. */
        get boneName(): StringName
        set boneName(value: StringName)
        
        /** The index of the attached bone. */
        get bone(): int64
        set bone(value: int64)
        
        /** The offset of the position from [Skeleton3D]'s [member bone] pose position. */
        get positionOffset(): Vector3
        set positionOffset(value: Vector3)
        
        /** The offset of the rotation from [Skeleton3D]'s [member bone] pose rotation. */
        get rotationOffset(): Quaternion
        set rotationOffset(value: Quaternion)
    }
    /** A capsule shape collision that interacts with [SpringBoneSimulator3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_springbonecollisioncapsule3d.html  
     */
    class SpringBoneCollisionCapsule3D<Map extends NodePathMap = any> extends SpringBoneCollision3D<Map> {
        constructor(identifier?: any)
        /** The capsule's radius. */
        get radius(): float64
        set radius(value: float64)
        
        /** The capsule's full height, including the hemispheres. */
        get height(): float64
        set height(value: float64)
        
        /** The capsule's height, excluding the hemispheres. This is the height of the central cylindrical part in the middle of the capsule, and is the distance between the centers of the two hemispheres. This is a wrapper for [member height]. */
        get midHeight(): float64
        set midHeight(value: float64)
        
        /** If `true`, the collision acts to trap the joint within the collision. */
        get inside(): boolean
        set inside(value: boolean)
    }
    /** A infinite plane collision that interacts with [SpringBoneSimulator3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_springbonecollisionplane3d.html  
     */
    class SpringBoneCollisionPlane3D<Map extends NodePathMap = any> extends SpringBoneCollision3D<Map> {
        constructor(identifier?: any)
    }
    /** A sphere shape collision that interacts with [SpringBoneSimulator3D].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_springbonecollisionsphere3d.html  
     */
    class SpringBoneCollisionSphere3D<Map extends NodePathMap = any> extends SpringBoneCollision3D<Map> {
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
    class SpringBoneSimulator3D<Map extends NodePathMap = any> extends SkeletonModifier3D<Map> {
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
        
        /** Sets the root bone name of the bone chain. */
        setRootBoneName(index: int64, boneName: string): void
        
        /** Returns the root bone name of the bone chain. */
        getRootBoneName(index: int64): string
        
        /** Sets the root bone index of the bone chain. */
        setRootBone(index: int64, bone: int64): void
        
        /** Returns the root bone index of the bone chain. */
        getRootBone(index: int64): int64
        
        /** Sets the end bone name of the bone chain.  
         *      
         *  **Note:** End bone must be the root bone or a child of the root bone. If they are the same, the tail must be extended by [method set_extend_end_bone] to jiggle the bone.  
         */
        setEndBoneName(index: int64, boneName: string): void
        
        /** Returns the end bone name of the bone chain. */
        getEndBoneName(index: int64): string
        
        /** Sets the end bone index of the bone chain. */
        setEndBone(index: int64, bone: int64): void
        
        /** Returns the end bone index of the bone chain. */
        getEndBone(index: int64): int64
        
        /** If [param enabled] is `true`, the end bone is extended to have the tail.  
         *  The extended tail config is allocated to the last element in the joint list.  
         *  In other words, if you set [param enabled] is `false`, the config of last element in the joint list has no effect in the simulated result.  
         */
        setExtendEndBone(index: int64, enabled: boolean): void
        
        /** Returns `true` if the end bone is extended to have the tail. */
        isEndBoneExtended(index: int64): boolean
        
        /** Sets the end bone tail direction of the bone chain when [method is_end_bone_extended] is `true`. */
        setEndBoneDirection(index: int64, boneDirection: SpringBoneSimulator3D.BoneDirection): void
        
        /** Returns the end bone's tail direction of the bone chain when [method is_end_bone_extended] is `true`. */
        getEndBoneDirection(index: int64): SpringBoneSimulator3D.BoneDirection
        
        /** Sets the end bone tail length of the bone chain when [method is_end_bone_extended] is `true`. */
        setEndBoneLength(index: int64, length: float64): void
        
        /** Returns the end bone's tail length of the bone chain when [method is_end_bone_extended] is `true`. */
        getEndBoneLength(index: int64): float64
        
        /** Sets what the center originates from in the bone chain.  
         *  Bone movement is calculated based on the difference in relative distance between center and bone in the previous and next frames.  
         *  For example, if the parent [Skeleton3D] is used as the center, the bones are considered to have not moved if the [Skeleton3D] moves in the world.  
         *  In this case, only a change in the bone pose is considered to be a bone movement.  
         */
        setCenterFrom(index: int64, centerFrom: SpringBoneSimulator3D.CenterFrom): void
        
        /** Returns what the center originates from in the bone chain. */
        getCenterFrom(index: int64): SpringBoneSimulator3D.CenterFrom
        
        /** Sets the center node path of the bone chain. */
        setCenterNode(index: int64, nodePath: NodePath | string): void
        
        /** Returns the center node path of the bone chain. */
        getCenterNode(index: int64): NodePath
        
        /** Sets the center bone name of the bone chain. */
        setCenterBoneName(index: int64, boneName: string): void
        
        /** Returns the center bone name of the bone chain. */
        getCenterBoneName(index: int64): string
        
        /** Sets the center bone index of the bone chain. */
        setCenterBone(index: int64, bone: int64): void
        
        /** Returns the center bone index of the bone chain. */
        getCenterBone(index: int64): int64
        
        /** Sets the joint radius of the bone chain. It is used to move and slide with the [SpringBoneCollision3D] in the collision list.  
         *  The value is scaled by [method set_radius_damping_curve] and cached in each joint setting in the joint list.  
         */
        setRadius(index: int64, radius: float64): void
        
        /** Returns the joint radius of the bone chain. */
        getRadius(index: int64): float64
        
        /** Sets the rotation axis of the bone chain. If sets a specific axis, it acts like a hinge joint.  
         *  The value is cached in each joint setting in the joint list.  
         *      
         *  **Note:** The rotation axis and the forward vector shouldn't be colinear to avoid unintended rotation since [SpringBoneSimulator3D] does not factor in twisting forces.  
         */
        setRotationAxis(index: int64, axis: SpringBoneSimulator3D.RotationAxis): void
        
        /** Returns the rotation axis of the bone chain. */
        getRotationAxis(index: int64): SpringBoneSimulator3D.RotationAxis
        
        /** Sets the joint radius damping curve of the bone chain. */
        setRadiusDampingCurve(index: int64, curve: Curve): void
        
        /** Returns the joint radius damping curve of the bone chain. */
        getRadiusDampingCurve(index: int64): null | Curve
        
        /** Sets the stiffness force of the bone chain. The greater the value, the faster it recovers to its initial pose.  
         *  If [param stiffness] is `0`, the modified pose will not return to the original pose.  
         *  The value is scaled by [method set_stiffness_damping_curve] and cached in each joint setting in the joint list.  
         */
        setStiffness(index: int64, stiffness: float64): void
        
        /** Returns the stiffness force of the bone chain. */
        getStiffness(index: int64): float64
        
        /** Sets the stiffness force damping curve of the bone chain. */
        setStiffnessDampingCurve(index: int64, curve: Curve): void
        
        /** Returns the stiffness force damping curve of the bone chain. */
        getStiffnessDampingCurve(index: int64): null | Curve
        
        /** Sets the drag force of the bone chain. The greater the value, the more suppressed the wiggling.  
         *  The value is scaled by [method set_drag_damping_curve] and cached in each joint setting in the joint list.  
         */
        setDrag(index: int64, drag: float64): void
        
        /** Returns the drag force damping curve of the bone chain. */
        getDrag(index: int64): float64
        
        /** Sets the drag force damping curve of the bone chain. */
        setDragDampingCurve(index: int64, curve: Curve): void
        
        /** Returns the drag force damping curve of the bone chain. */
        getDragDampingCurve(index: int64): null | Curve
        
        /** Sets the gravity amount of the bone chain. This value is not an acceleration, but a constant velocity of movement in [method set_gravity_direction].  
         *  If [param gravity] is not `0`, the modified pose will not return to the original pose since it is always affected by gravity.  
         *  The value is scaled by [method set_gravity_damping_curve] and cached in each joint setting in the joint list.  
         */
        setGravity(index: int64, gravity: float64): void
        
        /** Returns the gravity amount of the bone chain. */
        getGravity(index: int64): float64
        
        /** Sets the gravity amount damping curve of the bone chain. */
        setGravityDampingCurve(index: int64, curve: Curve): void
        
        /** Returns the gravity amount damping curve of the bone chain. */
        getGravityDampingCurve(index: int64): null | Curve
        
        /** Sets the gravity direction of the bone chain. This value is internally normalized and then multiplied by [method set_gravity].  
         *  The value is cached in each joint setting in the joint list.  
         */
        setGravityDirection(index: int64, gravityDirection: Vector3): void
        
        /** Returns the gravity direction of the bone chain. */
        getGravityDirection(index: int64): Vector3
        
        /** Clears all settings. */
        clearSettings(): void
        
        /** If [param enabled] is `true`, the config can be edited individually for each joint. */
        setIndividualConfig(index: int64, enabled: boolean): void
        
        /** Returns `true` if the config can be edited individually for each joint. */
        isConfigIndividual(index: int64): boolean
        
        /** Returns the bone name at [param joint] in the bone chain's joint list. */
        getJointBoneName(index: int64, joint: int64): string
        
        /** Returns the bone index at [param joint] in the bone chain's joint list. */
        getJointBone(index: int64, joint: int64): int64
        
        /** Sets the rotation axis at [param joint] in the bone chain's joint list when [method is_config_individual] is `true`. */
        setJointRotationAxis(index: int64, joint: int64, axis: SpringBoneSimulator3D.RotationAxis): void
        
        /** Returns the rotation axis at [param joint] in the bone chain's joint list. */
        getJointRotationAxis(index: int64, joint: int64): SpringBoneSimulator3D.RotationAxis
        
        /** Sets the joint radius at [param joint] in the bone chain's joint list when [method is_config_individual] is `true`. */
        setJointRadius(index: int64, joint: int64, radius: float64): void
        
        /** Returns the radius at [param joint] in the bone chain's joint list. */
        getJointRadius(index: int64, joint: int64): float64
        
        /** Sets the stiffness force at [param joint] in the bone chain's joint list when [method is_config_individual] is `true`. */
        setJointStiffness(index: int64, joint: int64, stiffness: float64): void
        
        /** Returns the stiffness force at [param joint] in the bone chain's joint list. */
        getJointStiffness(index: int64, joint: int64): float64
        
        /** Sets the drag force at [param joint] in the bone chain's joint list when [method is_config_individual] is `true`. */
        setJointDrag(index: int64, joint: int64, drag: float64): void
        
        /** Returns the drag force at [param joint] in the bone chain's joint list. */
        getJointDrag(index: int64, joint: int64): float64
        
        /** Sets the gravity amount at [param joint] in the bone chain's joint list when [method is_config_individual] is `true`. */
        setJointGravity(index: int64, joint: int64, gravity: float64): void
        
        /** Returns the gravity amount at [param joint] in the bone chain's joint list. */
        getJointGravity(index: int64, joint: int64): float64
        
        /** Sets the gravity direction at [param joint] in the bone chain's joint list when [method is_config_individual] is `true`. */
        setJointGravityDirection(index: int64, joint: int64, gravityDirection: Vector3): void
        
        /** Returns the gravity direction at [param joint] in the bone chain's joint list. */
        getJointGravityDirection(index: int64, joint: int64): Vector3
        
        /** Returns the joint count of the bone chain's joint list. */
        getJointCount(index: int64): int64
        
        /** If [param enabled] is `true`, all child [SpringBoneCollision3D]s are colliding and [method set_exclude_collision_path] is enabled as an exclusion list at [param index] in the settings.  
         *  If [param enabled] is `false`, you need to manually register all valid collisions with [method set_collision_path].  
         */
        setEnableAllChildCollisions(index: int64, enabled: boolean): void
        
        /** Returns `true` if all child [SpringBoneCollision3D]s are contained in the collision list at [param index] in the settings. */
        areAllChildCollisionsEnabled(index: int64): boolean
        
        /** Sets the node path of the [SpringBoneCollision3D] at [param collision] in the bone chain's exclude collision list when [method are_all_child_collisions_enabled] is `true`. */
        setExcludeCollisionPath(index: int64, collision: int64, nodePath: NodePath | string): void
        
        /** Returns the node path of the [SpringBoneCollision3D] at [param collision] in the bone chain's exclude collision list when [method are_all_child_collisions_enabled] is `true`. */
        getExcludeCollisionPath(index: int64, collision: int64): NodePath
        
        /** Sets the number of exclude collisions in the exclude collision list at [param index] in the settings when [method are_all_child_collisions_enabled] is `true`. */
        setExcludeCollisionCount(index: int64, count: int64): void
        
        /** Returns the exclude collision count of the bone chain's exclude collision list when [method are_all_child_collisions_enabled] is `true`. */
        getExcludeCollisionCount(index: int64): int64
        
        /** Clears all exclude collisions from the collision list at [param index] in the settings when [method are_all_child_collisions_enabled] is `true`. */
        clearExcludeCollisions(index: int64): void
        
        /** Sets the node path of the [SpringBoneCollision3D] at [param collision] in the bone chain's collision list when [method are_all_child_collisions_enabled] is `false`. */
        setCollisionPath(index: int64, collision: int64, nodePath: NodePath | string): void
        
        /** Returns the node path of the [SpringBoneCollision3D] at [param collision] in the bone chain's collision list when [method are_all_child_collisions_enabled] is `false`. */
        getCollisionPath(index: int64, collision: int64): NodePath
        
        /** Sets the number of collisions in the collision list at [param index] in the settings when [method are_all_child_collisions_enabled] is `false`. */
        setCollisionCount(index: int64, count: int64): void
        
        /** Returns the collision count of the bone chain's collision list when [method are_all_child_collisions_enabled] is `false`. */
        getCollisionCount(index: int64): int64
        
        /** Clears all collisions from the collision list at [param index] in the settings when [method are_all_child_collisions_enabled] is `false`. */
        clearCollisions(index: int64): void
        
        /** Resets a simulating state with respect to the current bone pose.  
         *  It is useful to prevent the simulation result getting violent. For example, calling this immediately after a call to [method AnimationPlayer.play] without a fading, or within the previous [signal SkeletonModifier3D.modification_processed] signal if it's condition changes significantly.  
         */
        reset(): void
        
        /** The constant force that always affected bones. It is equal to the result when the parent [Skeleton3D] moves at this speed in the opposite direction.  
         *  This is useful for effects such as wind and anti-gravity.  
         */
        get externalForce(): Vector3
        set externalForce(value: Vector3)
        
        /** The number of settings. */
        get settingCount(): any /*Settings,settings/*/
        set settingCount(value: any /*Settings,settings/*/)
    }
    /** General-purpose sprite node.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_sprite2d.html  
     */
    class Sprite2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** Returns `true`, if the pixel at the given position is opaque and `false` in other case. The position is in local coordinates.  
         *      
         *  **Note:** It also returns `false`, if the sprite's texture is `null` or if the given position is invalid.  
         */
        isPixelOpaque(pos: Vector2): boolean
        
        /** Returns a [Rect2] representing the Sprite2D's boundary in local coordinates.  
         *  **Example:** Detect if the Sprite2D was clicked:  
         *    
         */
        getRect(): Rect2
        
        /** [Texture2D] object to draw. */
        get texture(): null | Texture2D
        set texture(value: null | Texture2D)
        
        /** If `true`, texture is centered.  
         *      
         *  **Note:** For games with a pixel art aesthetic, textures may appear deformed when centered. This is caused by their position being between pixels. To prevent this, set this property to `false`, or consider enabling [member ProjectSettings.rendering/2d/snap/snap_2d_vertices_to_pixel] and [member ProjectSettings.rendering/2d/snap/snap_2d_transforms_to_pixel].  
         */
        get centered(): boolean
        set centered(value: boolean)
        
        /** The texture's drawing offset. */
        get offset(): Vector2
        set offset(value: Vector2)
        
        /** If `true`, texture is flipped horizontally. */
        get flipH(): boolean
        set flipH(value: boolean)
        
        /** If `true`, texture is flipped vertically. */
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
        
        /** Coordinates of the frame to display from sprite sheet. This is as an alias for the [member frame] property. [member hframes] or [member vframes] must be greater than 1. */
        get frameCoords(): Vector2I
        set frameCoords(value: Vector2I)
        
        /** If `true`, texture is cut from a larger atlas texture. See [member region_rect]. */
        get regionEnabled(): boolean
        set regionEnabled(value: boolean)
        
        /** The region of the atlas texture to display. [member region_enabled] must be `true`. */
        get regionRect(): Rect2
        set regionRect(value: Rect2)
        
        /** If `true`, the area outside of the [member region_rect] is clipped to avoid bleeding of the surrounding texture pixels. [member region_enabled] must be `true`. */
        get regionFilterClipEnabled(): boolean
        set regionFilterClipEnabled(value: boolean)
        
        /** Emitted when the [member frame] changes. */
        readonly frameChanged: Signal<() => void>
        
        /** Emitted when the [member texture] changes. */
        readonly textureChanged: Signal<() => void>
    }
    /** 2D sprite node in a 3D world.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_sprite3d.html  
     */
    class Sprite3D<Map extends NodePathMap = any> extends SpriteBase3D<Map> {
        constructor(identifier?: any)
        /** [Texture2D] object to draw. If [member GeometryInstance3D.material_override] is used, this will be overridden. The size information is still used. */
        get texture(): null | Texture2D
        set texture(value: null | Texture2D)
        
        /** The number of columns in the sprite sheet. When this property is changed, [member frame] is adjusted so that the same visual frame is maintained (same row and column). If that's impossible, [member frame] is reset to `0`. */
        get hframes(): int64
        set hframes(value: int64)
        
        /** The number of rows in the sprite sheet. When this property is changed, [member frame] is adjusted so that the same visual frame is maintained (same row and column). If that's impossible, [member frame] is reset to `0`. */
        get vframes(): int64
        set vframes(value: int64)
        
        /** Current frame to display from sprite sheet. [member hframes] or [member vframes] must be greater than 1. This property is automatically adjusted when [member hframes] or [member vframes] are changed to keep pointing to the same visual frame (same column and row). If that's impossible, this value is reset to `0`. */
        get frame(): int64
        set frame(value: int64)
        
        /** Coordinates of the frame to display from sprite sheet. This is as an alias for the [member frame] property. [member hframes] or [member vframes] must be greater than 1. */
        get frameCoords(): Vector2I
        set frameCoords(value: Vector2I)
        
        /** If `true`, the sprite will use [member region_rect] and display only the specified part of its texture. */
        get regionEnabled(): boolean
        set regionEnabled(value: boolean)
        
        /** The region of the atlas texture to display. [member region_enabled] must be `true`. */
        get regionRect(): Rect2
        set regionRect(value: Rect2)
        
        /** Emitted when the [member frame] changes. */
        readonly frameChanged: Signal<() => void>
        
        /** Emitted when the [member texture] changes. */
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
    class SpriteBase3D<Map extends NodePathMap = any> extends GeometryInstance3D<Map> {
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
        
        /** If `true`, the specified flag will be enabled. See [enum SpriteBase3D.DrawFlags] for a list of flags. */
        setDrawFlag(flag: SpriteBase3D.DrawFlags, enabled: boolean): void
        
        /** Returns the value of the specified flag. */
        getDrawFlag(flag: SpriteBase3D.DrawFlags): boolean
        
        /** Returns the rectangle representing this sprite. */
        getItemRect(): Rect2
        
        /** Returns a [TriangleMesh] with the sprite's vertices following its current configuration (such as its [member axis] and [member pixel_size]). */
        generateTriangleMesh(): null | TriangleMesh
        
        /** If `true`, texture will be centered. */
        get centered(): boolean
        set centered(value: boolean)
        
        /** The texture's drawing offset. */
        get offset(): Vector2
        set offset(value: Vector2)
        
        /** If `true`, texture is flipped horizontally. */
        get flipH(): boolean
        set flipH(value: boolean)
        
        /** If `true`, texture is flipped vertically. */
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
        
        /** The size of one pixel's width on the sprite to scale it in 3D. */
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
        
        /** If `true`, texture can be seen from the back as well, if `false`, it is invisible when looking at it from behind. */
        get doubleSided(): boolean
        set doubleSided(value: boolean)
        
        /** If `true`, depth testing is disabled and the object will be drawn in render order. */
        get noDepthTest(): boolean
        set noDepthTest(value: boolean)
        
        /** If `true`, the texture is rendered at the same size regardless of distance. The texture's size on screen is the same as if the camera was `1.0` units away from the texture's origin, regardless of the actual distance from the camera. The [Camera3D]'s field of view (or [member Camera3D.size] when in orthogonal/frustum mode) still affects the size the sprite is drawn at. */
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
        
        /** Filter flags for the texture. See [enum BaseMaterial3D.TextureFilter] for options.  
         *      
         *  **Note:** Linear filtering may cause artifacts around the edges, which are especially noticeable on opaque textures. To prevent this, use textures with transparent or identical colors around the edges.  
         */
        get textureFilter(): int64
        set textureFilter(value: int64)
        
        /** Sets the render priority for the sprite. Higher priority objects will be sorted in front of lower priority objects.  
         *      
         *  **Note:** This only applies if [member alpha_cut] is set to [constant ALPHA_CUT_DISABLED] (default value).  
         *      
         *  **Note:** This only applies to sorting of transparent objects. This will not impact how transparent objects are sorted relative to opaque objects. This is because opaque objects are not sorted, while transparent objects are sorted from back to front (subject to priority).  
         */
        get renderPriority(): int64
        set renderPriority(value: int64)
    }
    /** Sprite frame library for AnimatedSprite2D and AnimatedSprite3D.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_spriteframes.html  
     */
    class SpriteFrames extends Resource {
        constructor(identifier?: any)
        /** Adds a new [param anim] animation to the library. */
        addAnimation(anim: StringName): void
        
        /** Returns `true` if the [param anim] animation exists. */
        hasAnimation(anim: StringName): boolean
        
        /** Duplicates the animation [param anim_from] to a new animation named [param anim_to]. Fails if [param anim_to] already exists, or if [param anim_from] does not exist. */
        duplicateAnimation(animFrom: StringName, animTo: StringName): void
        
        /** Removes the [param anim] animation. */
        removeAnimation(anim: StringName): void
        
        /** Changes the [param anim] animation's name to [param newname]. */
        renameAnimation(anim: StringName, newname: StringName): void
        
        /** Returns an array containing the names associated to each animation. Values are placed in alphabetical order. */
        getAnimationNames(): PackedStringArray
        
        /** Sets the speed for the [param anim] animation in frames per second. */
        setAnimationSpeed(anim: StringName, fps: float64): void
        
        /** Returns the speed in frames per second for the [param anim] animation. */
        getAnimationSpeed(anim: StringName): float64
        
        /** If [param loop] is `true`, the [param anim] animation will loop when it reaches the end, or the start if it is played in reverse. */
        setAnimationLoop(anim: StringName, loop: boolean): void
        
        /** Returns `true` if the given animation is configured to loop when it finishes playing. Otherwise, returns `false`. */
        getAnimationLoop(anim: StringName): boolean
        
        /** Adds a frame to the [param anim] animation. If [param at_position] is `-1`, the frame will be added to the end of the animation. [param duration] specifies the relative duration, see [method get_frame_duration] for details. */
        addFrame(anim: StringName, texture: Texture2D, duration?: float64 /* = 1 */, atPosition?: int64 /* = -1 */): void
        
        /** Sets the [param texture] and the [param duration] of the frame [param idx] in the [param anim] animation. [param duration] specifies the relative duration, see [method get_frame_duration] for details. */
        setFrame(anim: StringName, idx: int64, texture: Texture2D, duration?: float64 /* = 1 */): void
        
        /** Removes the [param anim] animation's frame [param idx]. */
        removeFrame(anim: StringName, idx: int64): void
        
        /** Returns the number of frames for the [param anim] animation. */
        getFrameCount(anim: StringName): int64
        
        /** Returns the texture of the frame [param idx] in the [param anim] animation. */
        getFrameTexture(anim: StringName, idx: int64): null | Texture2D
        
        /** Returns a relative duration of the frame [param idx] in the [param anim] animation (defaults to `1.0`). For example, a frame with a duration of `2.0` is displayed twice as long as a frame with a duration of `1.0`. You can calculate the absolute duration (in seconds) of a frame using the following formula:  
         *    
         *  In this example, `playing_speed` refers to either [method AnimatedSprite2D.get_playing_speed] or [method AnimatedSprite3D.get_playing_speed].  
         */
        getFrameDuration(anim: StringName, idx: int64): float64
        
        /** Removes all frames from the [param anim] animation. */
        clear(anim: StringName): void
        
        /** Removes all animations. An empty `default` animation will be created. */
        clearAll(): void
        get animations(): GArray
        set animations(value: GArray)
    }
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
    class StaticBody2D<Map extends NodePathMap = any> extends PhysicsBody2D<Map> {
        constructor(identifier?: any)
        /** The physics material override for the body.  
         *  If a material is assigned to this property, it will be used instead of any other physics material, such as an inherited one.  
         */
        get physicsMaterialOverride(): null | PhysicsMaterial
        set physicsMaterialOverride(value: null | PhysicsMaterial)
        
        /** The body's constant linear velocity. This does not move the body, but affects touching bodies, as if it were moving. */
        get constantLinearVelocity(): Vector2
        set constantLinearVelocity(value: Vector2)
        
        /** The body's constant angular velocity. This does not rotate the body, but affects touching bodies, as if it were rotating. */
        get constantAngularVelocity(): float64
        set constantAngularVelocity(value: float64)
    }
    /** A 3D physics body that can't be moved by external forces. When moved manually, it doesn't affect other bodies in its path.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_staticbody3d.html  
     */
    class StaticBody3D<Map extends NodePathMap = any> extends PhysicsBody3D<Map> {
        constructor(identifier?: any)
        /** The physics material override for the body.  
         *  If a material is assigned to this property, it will be used instead of any other physics material, such as an inherited one.  
         */
        get physicsMaterialOverride(): null | PhysicsMaterial
        set physicsMaterialOverride(value: null | PhysicsMaterial)
        
        /** The body's constant linear velocity. This does not move the body, but affects touching bodies, as if it were moving. */
        get constantLinearVelocity(): Vector3
        set constantLinearVelocity(value: Vector3)
        
        /** The body's constant angular velocity. This does not rotate the body, but affects touching bodies, as if it were rotating. */
        get constantAngularVelocity(): Vector3
        set constantAngularVelocity(value: Vector3)
    }
    /** Application status indicator (aka notification area icon).  
     *      
     *  **Note:** Status indicator is implemented on macOS and Windows.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_statusindicator.html  
     */
    class StatusIndicator<Map extends NodePathMap = any> extends Node<Map> {
        constructor(identifier?: any)
        /** Returns the status indicator rectangle in screen coordinates. If this status indicator is not visible, returns an empty [Rect2]. */
        getRect(): Rect2
        
        /** Status indicator tooltip. */
        get tooltip(): string
        set tooltip(value: string)
        
        /** Status indicator icon. */
        get icon(): null | Texture2D
        set icon(value: null | Texture2D)
        
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
        /** Sends a chunk of data through the connection, blocking if necessary until the data is done sending. This function returns an [enum Error] code. */
        putData(data: PackedByteArray | byte[] | ArrayBuffer): GError
        
        /** Sends a chunk of data through the connection. If all the data could not be sent at once, only part of it will. This function returns two values, an [enum Error] code and an integer, describing how much data was actually sent. */
        putPartialData(data: PackedByteArray | byte[] | ArrayBuffer): GArray
        
        /** Returns a chunk data with the received bytes. The number of bytes to be received can be requested in the [param bytes] argument. If not enough bytes are available, the function will block until the desired amount is received. This function returns two values, an [enum Error] code and a data array. */
        getData(bytes: int64): GArray
        
        /** Returns a chunk data with the received bytes. The number of bytes to be received can be requested in the [param bytes] argument. If not enough bytes are available, the function will return how many were actually received. This function returns two values: an [enum Error] code and a data array. */
        getPartialData(bytes: int64): GArray
        
        /** Returns the number of bytes this [StreamPeer] has available. */
        getAvailableBytes(): int64
        
        /** Puts a signed byte into the stream. */
        put8(value: int64): void
        
        /** Puts an unsigned byte into the stream. */
        putU8(value: int64): void
        
        /** Puts a signed 16-bit value into the stream. */
        put16(value: int64): void
        
        /** Puts an unsigned 16-bit value into the stream. */
        putU16(value: int64): void
        
        /** Puts a signed 32-bit value into the stream. */
        put32(value: int64): void
        
        /** Puts an unsigned 32-bit value into the stream. */
        putU32(value: int64): void
        
        /** Puts a signed 64-bit value into the stream. */
        put64(value: int64): void
        
        /** Puts an unsigned 64-bit value into the stream. */
        putU64(value: int64): void
        
        /** Puts a half-precision float into the stream. */
        putHalf(value: float64): void
        
        /** Puts a single-precision float into the stream. */
        putFloat(value: float64): void
        
        /** Puts a double-precision float into the stream. */
        putDouble(value: float64): void
        
        /** Puts a zero-terminated ASCII string into the stream prepended by a 32-bit unsigned integer representing its size.  
         *      
         *  **Note:** To put an ASCII string without prepending its size, you can use [method put_data]:  
         *    
         */
        putString(value: string): void
        
        /** Puts a zero-terminated UTF-8 string into the stream prepended by a 32 bits unsigned integer representing its size.  
         *      
         *  **Note:** To put a UTF-8 string without prepending its size, you can use [method put_data]:  
         *    
         */
        putUtf8String(value: string): void
        
        /** Puts a Variant into the stream. If [param full_objects] is `true` encoding objects is allowed (and can potentially include code).  
         *  Internally, this uses the same encoding mechanism as the [method @GlobalScope.var_to_bytes] method.  
         */
        putVar(value: any, fullObjects?: boolean /* = false */): void
        
        /** Gets a signed byte from the stream. */
        get8(): int64
        
        /** Gets an unsigned byte from the stream. */
        getU8(): int64
        
        /** Gets a signed 16-bit value from the stream. */
        get16(): int64
        
        /** Gets an unsigned 16-bit value from the stream. */
        getU16(): int64
        
        /** Gets a signed 32-bit value from the stream. */
        get32(): int64
        
        /** Gets an unsigned 32-bit value from the stream. */
        getU32(): int64
        
        /** Gets a signed 64-bit value from the stream. */
        get64(): int64
        
        /** Gets an unsigned 64-bit value from the stream. */
        getU64(): int64
        
        /** Gets a half-precision float from the stream. */
        getHalf(): float64
        
        /** Gets a single-precision float from the stream. */
        getFloat(): float64
        
        /** Gets a double-precision float from the stream. */
        getDouble(): float64
        
        /** Gets an ASCII string with byte-length [param bytes] from the stream. If [param bytes] is negative (default) the length will be read from the stream using the reverse process of [method put_string]. */
        getString(bytes?: int64 /* = -1 */): string
        
        /** Gets a UTF-8 string with byte-length [param bytes] from the stream (this decodes the string sent as UTF-8). If [param bytes] is negative (default) the length will be read from the stream using the reverse process of [method put_utf8_string]. */
        getUtf8String(bytes?: int64 /* = -1 */): string
        
        /** Gets a Variant from the stream. If [param allow_objects] is `true`, decoding objects is allowed.  
         *  Internally, this uses the same decoding mechanism as the [method @GlobalScope.bytes_to_var] method.  
         *  **Warning:** Deserialized objects can contain code which gets executed. Do not use this option if the serialized object comes from untrusted sources to avoid potential security threats such as remote code execution.  
         */
        getVar(allowObjects?: boolean /* = false */): any
        
        /** If `true`, this [StreamPeer] will using big-endian format for encoding and decoding. */
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
        
        /** Returns the size of [member data_array]. */
        getSize(): int64
        
        /** Returns the current cursor position. */
        getPosition(): int64
        
        /** Resizes the [member data_array]. This  *doesn't*  update the cursor. */
        resize(size: int64): void
        
        /** Clears the [member data_array] and resets the cursor. */
        clear(): void
        
        /** Returns a new [StreamPeerBuffer] with the same [member data_array] content. */
        duplicate(): null | StreamPeerBuffer
        
        /** The underlying data buffer. Setting this value resets the cursor. */
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
        startCompression(useDeflate?: boolean /* = false */, bufferSize?: int64 /* = 65535 */): GError
        startDecompression(useDeflate?: boolean /* = false */, bufferSize?: int64 /* = 65535 */): GError
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
        bind(port: int64, host?: string /* = '*' */): GError
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
        acceptStream(stream: StreamPeer, serverOptions: TlsOptions): GError
        connectToStream(stream: StreamPeer, commonName: string, clientOptions?: TlsOptions /* = undefined */): GError
        getStatus(): StreamPeerTls.Status
        getStream(): null | StreamPeer
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
        
        /** Virtual method to be implemented by the user. Returns a custom minimum size that the stylebox must respect when drawing. By default [method get_minimum_size] only takes content margins into account. This method can be overridden to add another size restriction. A combination of the default behavior and the output of this method will be used, to account for both sizes. */
        /* gdvirtual */ _getMinimumSize(): Vector2
        /* gdvirtual */ _testMask(point: Vector2, rect: Rect2): boolean
        
        /** Returns the minimum size that this stylebox can be shrunk to. */
        getMinimumSize(): Vector2
        
        /** Sets the default value of the specified [enum Side] to [param offset] pixels. */
        setContentMargin(margin: Side, offset: float64): void
        
        /** Sets the default margin to [param offset] pixels for all sides. */
        setContentMarginAll(offset: float64): void
        
        /** Returns the default margin of the specified [enum Side]. */
        getContentMargin(margin: Side): float64
        
        /** Returns the content margin offset for the specified [enum Side].  
         *  Positive values reduce size inwards, unlike [Control]'s margin values.  
         */
        getMargin(margin: Side): float64
        
        /** Returns the "offset" of a stylebox. This helper function returns a value equivalent to `Vector2(style.get_margin(MARGIN_LEFT), style.get_margin(MARGIN_TOP))`. */
        getOffset(): Vector2
        
        /** Draws this stylebox using a canvas item identified by the given [RID].  
         *  The [RID] value can either be the result of [method CanvasItem.get_canvas_item] called on an existing [CanvasItem]-derived node, or directly from creating a canvas item in the [RenderingServer] with [method RenderingServer.canvas_item_create].  
         */
        draw(canvasItem: Rid, rect: Rect2): void
        
        /** Returns the [CanvasItem] that handles its [constant CanvasItem.NOTIFICATION_DRAW] or [method CanvasItem._draw] callback at this moment. */
        getCurrentItemDrawn(): null | CanvasItem
        
        /** Test a position in a rectangle, return whether it passes the mask test. */
        testMask(point: Vector2, rect: Rect2): boolean
        
        /** The left margin for the contents of this style box. Increasing this value reduces the space available to the contents from the left.  
         *  Refer to [member content_margin_bottom] for extra considerations.  
         */
        get contentMarginLeft(): float64
        set contentMarginLeft(value: float64)
        
        /** The top margin for the contents of this style box. Increasing this value reduces the space available to the contents from the top.  
         *  Refer to [member content_margin_bottom] for extra considerations.  
         */
        get contentMarginTop(): float64
        set contentMarginTop(value: float64)
        
        /** The right margin for the contents of this style box. Increasing this value reduces the space available to the contents from the right.  
         *  Refer to [member content_margin_bottom] for extra considerations.  
         */
        get contentMarginRight(): float64
        set contentMarginRight(value: float64)
        
        /** The bottom margin for the contents of this style box. Increasing this value reduces the space available to the contents from the bottom.  
         *  If this value is negative, it is ignored and a child-specific margin is used instead. For example, for [StyleBoxFlat], the border thickness (if any) is used instead.  
         *  It is up to the code using this style box to decide what these contents are: for example, a [Button] respects this content margin for the textual contents of the button.  
         *  [method get_margin] should be used to fetch this value as consumer instead of reading these properties directly. This is because it correctly respects negative values and the fallback mentioned above.  
         */
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
        /** Sets the border width to [param width] pixels for all sides. */
        setBorderWidthAll(width: int64): void
        
        /** Returns the smallest border width out of all four borders. */
        getBorderWidthMin(): int64
        
        /** Sets the specified [enum Side]'s border width to [param width] pixels. */
        setBorderWidth(margin: Side, width: int64): void
        
        /** Returns the specified [enum Side]'s border width. */
        getBorderWidth(margin: Side): int64
        
        /** Sets the corner radius to [param radius] pixels for all corners. */
        setCornerRadiusAll(radius: int64): void
        
        /** Sets the corner radius to [param radius] pixels for the given [param corner]. See [enum Corner] for possible values. */
        setCornerRadius(corner: Corner, radius: int64): void
        
        /** Returns the given [param corner]'s radius. See [enum Corner] for possible values. */
        getCornerRadius(corner: Corner): int64
        
        /** Sets the expand margin to [param size] pixels for the specified [enum Side]. */
        setExpandMargin(margin: Side, size: float64): void
        
        /** Sets the expand margin to [param size] pixels for all sides. */
        setExpandMarginAll(size: float64): void
        
        /** Returns the size of the specified [enum Side]'s expand margin. */
        getExpandMargin(margin: Side): float64
        
        /** The background color of the stylebox. */
        get bgColor(): Color
        set bgColor(value: Color)
        
        /** Toggles drawing of the inner part of the stylebox. */
        get drawCenter(): boolean
        set drawCenter(value: boolean)
        
        /** If set to a non-zero value on either axis, [member skew] distorts the StyleBox horizontally and/or vertically. This can be used for "futuristic"-style UIs. Positive values skew the StyleBox towards the right (X axis) and upwards (Y axis), while negative values skew the StyleBox towards the left (X axis) and downwards (Y axis).  
         *      
         *  **Note:** To ensure text does not touch the StyleBox's edges, consider increasing the [StyleBox]'s content margin (see [member StyleBox.content_margin_bottom]). It is preferable to increase the content margin instead of the expand margin (see [member expand_margin_bottom]), as increasing the expand margin does not increase the size of the clickable area for [Control]s.  
         */
        get skew(): Vector2
        set skew(value: Vector2)
        
        /** Border width for the left border. */
        get borderWidthLeft(): int64
        set borderWidthLeft(value: int64)
        
        /** Border width for the top border. */
        get borderWidthTop(): int64
        set borderWidthTop(value: int64)
        
        /** Border width for the right border. */
        get borderWidthRight(): int64
        set borderWidthRight(value: int64)
        
        /** Border width for the bottom border. */
        get borderWidthBottom(): int64
        set borderWidthBottom(value: int64)
        
        /** Sets the color of the border. */
        get borderColor(): Color
        set borderColor(value: Color)
        
        /** If `true`, the border will fade into the background color. */
        get borderBlend(): boolean
        set borderBlend(value: boolean)
        
        /** The top-left corner's radius. If `0`, the corner is not rounded. */
        get cornerRadiusTopLeft(): int64
        set cornerRadiusTopLeft(value: int64)
        
        /** The top-right corner's radius. If `0`, the corner is not rounded. */
        get cornerRadiusTopRight(): int64
        set cornerRadiusTopRight(value: int64)
        
        /** The bottom-right corner's radius. If `0`, the corner is not rounded. */
        get cornerRadiusBottomRight(): int64
        set cornerRadiusBottomRight(value: int64)
        
        /** The bottom-left corner's radius. If `0`, the corner is not rounded. */
        get cornerRadiusBottomLeft(): int64
        set cornerRadiusBottomLeft(value: int64)
        
        /** This sets the number of vertices used for each corner. Higher values result in rounder corners but take more processing power to compute. When choosing a value, you should take the corner radius ([method set_corner_radius_all]) into account.  
         *  For corner radii less than 10, `4` or `5` should be enough. For corner radii less than 30, values between `8` and `12` should be enough.  
         *  A corner detail of `1` will result in chamfered corners instead of rounded corners, which is useful for some artistic effects.  
         */
        get cornerDetail(): int64
        set cornerDetail(value: int64)
        
        /** Expands the stylebox outside of the control rect on the left edge. Useful in combination with [member border_width_left] to draw a border outside the control rect.  
         *      
         *  **Note:** Unlike [member StyleBox.content_margin_left], [member expand_margin_left] does  *not*  affect the size of the clickable area for [Control]s. This can negatively impact usability if used wrong, as the user may try to click an area of the StyleBox that cannot actually receive clicks.  
         */
        get expandMarginLeft(): float64
        set expandMarginLeft(value: float64)
        
        /** Expands the stylebox outside of the control rect on the top edge. Useful in combination with [member border_width_top] to draw a border outside the control rect.  
         *      
         *  **Note:** Unlike [member StyleBox.content_margin_top], [member expand_margin_top] does  *not*  affect the size of the clickable area for [Control]s. This can negatively impact usability if used wrong, as the user may try to click an area of the StyleBox that cannot actually receive clicks.  
         */
        get expandMarginTop(): float64
        set expandMarginTop(value: float64)
        
        /** Expands the stylebox outside of the control rect on the right edge. Useful in combination with [member border_width_right] to draw a border outside the control rect.  
         *      
         *  **Note:** Unlike [member StyleBox.content_margin_right], [member expand_margin_right] does  *not*  affect the size of the clickable area for [Control]s. This can negatively impact usability if used wrong, as the user may try to click an area of the StyleBox that cannot actually receive clicks.  
         */
        get expandMarginRight(): float64
        set expandMarginRight(value: float64)
        
        /** Expands the stylebox outside of the control rect on the bottom edge. Useful in combination with [member border_width_bottom] to draw a border outside the control rect.  
         *      
         *  **Note:** Unlike [member StyleBox.content_margin_bottom], [member expand_margin_bottom] does  *not*  affect the size of the clickable area for [Control]s. This can negatively impact usability if used wrong, as the user may try to click an area of the StyleBox that cannot actually receive clicks.  
         */
        get expandMarginBottom(): float64
        set expandMarginBottom(value: float64)
        
        /** The color of the shadow. This has no effect if [member shadow_size] is lower than 1. */
        get shadowColor(): Color
        set shadowColor(value: Color)
        
        /** The shadow size in pixels. */
        get shadowSize(): int64
        set shadowSize(value: int64)
        
        /** The shadow offset in pixels. Adjusts the position of the shadow relatively to the stylebox. */
        get shadowOffset(): Vector2
        set shadowOffset(value: Vector2)
        
        /** Antialiasing draws a small ring around the edges, which fades to transparency. As a result, edges look much smoother. This is only noticeable when using rounded corners or [member skew].  
         *      
         *  **Note:** When using beveled corners with 45-degree angles ([member corner_detail] = 1), it is recommended to set [member anti_aliasing] to `false` to ensure crisp visuals and avoid possible visual glitches.  
         */
        get antiAliasing(): boolean
        set antiAliasing(value: boolean)
        
        /** This changes the size of the antialiasing effect. `1.0` is recommended for an optimal result at 100% scale, identical to how rounded rectangles are rendered in web browsers and most vector drawing software.  
         *      
         *  **Note:** Higher values may produce a blur effect but can also create undesired artifacts on small boxes with large-radius corners.  
         */
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
        
        /** The number of pixels the line will extend before the [StyleBoxLine]'s bounds. If set to a negative value, the line will begin inside the [StyleBoxLine]'s bounds. */
        get growBegin(): float64
        set growBegin(value: float64)
        
        /** The number of pixels the line will extend past the [StyleBoxLine]'s bounds. If set to a negative value, the line will end inside the [StyleBoxLine]'s bounds. */
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
        
        /** Sets the margin to [param size] pixels for the specified [enum Side]. */
        setTextureMargin(margin: Side, size: float64): void
        
        /** Sets the margin to [param size] pixels for all sides. */
        setTextureMarginAll(size: float64): void
        
        /** Returns the margin size of the specified [enum Side]. */
        getTextureMargin(margin: Side): float64
        
        /** Sets the expand margin to [param size] pixels for the specified [enum Side]. */
        setExpandMargin(margin: Side, size: float64): void
        
        /** Sets the expand margin to [param size] pixels for all sides. */
        setExpandMarginAll(size: float64): void
        
        /** Returns the expand margin size of the specified [enum Side]. */
        getExpandMargin(margin: Side): float64
        
        /** The texture to use when drawing this style box. */
        get texture(): null | Texture2D
        set texture(value: null | Texture2D)
        
        /** Increases the left margin of the 3×3 texture box.  
         *  A higher value means more of the source texture is considered to be part of the left border of the 3×3 box.  
         *  This is also the value used as fallback for [member StyleBox.content_margin_left] if it is negative.  
         */
        get textureMarginLeft(): float64
        set textureMarginLeft(value: float64)
        
        /** Increases the top margin of the 3×3 texture box.  
         *  A higher value means more of the source texture is considered to be part of the top border of the 3×3 box.  
         *  This is also the value used as fallback for [member StyleBox.content_margin_top] if it is negative.  
         */
        get textureMarginTop(): float64
        set textureMarginTop(value: float64)
        
        /** Increases the right margin of the 3×3 texture box.  
         *  A higher value means more of the source texture is considered to be part of the right border of the 3×3 box.  
         *  This is also the value used as fallback for [member StyleBox.content_margin_right] if it is negative.  
         */
        get textureMarginRight(): float64
        set textureMarginRight(value: float64)
        
        /** Increases the bottom margin of the 3×3 texture box.  
         *  A higher value means more of the source texture is considered to be part of the bottom border of the 3×3 box.  
         *  This is also the value used as fallback for [member StyleBox.content_margin_bottom] if it is negative.  
         */
        get textureMarginBottom(): float64
        set textureMarginBottom(value: float64)
        
        /** Expands the left margin of this style box when drawing, causing it to be drawn larger than requested. */
        get expandMarginLeft(): float64
        set expandMarginLeft(value: float64)
        
        /** Expands the top margin of this style box when drawing, causing it to be drawn larger than requested. */
        get expandMarginTop(): float64
        set expandMarginTop(value: float64)
        
        /** Expands the right margin of this style box when drawing, causing it to be drawn larger than requested. */
        get expandMarginRight(): float64
        set expandMarginRight(value: float64)
        
        /** Expands the bottom margin of this style box when drawing, causing it to be drawn larger than requested. */
        get expandMarginBottom(): float64
        set expandMarginBottom(value: float64)
        
        /** Controls how the stylebox's texture will be stretched or tiled horizontally. See [enum AxisStretchMode] for possible values. */
        get axisStretchHorizontal(): int64
        set axisStretchHorizontal(value: int64)
        
        /** Controls how the stylebox's texture will be stretched or tiled vertically. See [enum AxisStretchMode] for possible values. */
        get axisStretchVertical(): int64
        set axisStretchVertical(value: int64)
        
        /** The region to use from the [member texture].  
         *  This is equivalent to first wrapping the [member texture] in an [AtlasTexture] with the same region.  
         *  If empty (`Rect2(0, 0, 0, 0)`), the whole [member texture] is used.  
         */
        get regionRect(): Rect2
        set regionRect(value: Rect2)
        
        /** Modulates the color of the texture when this style box is drawn. */
        get modulateColor(): Color
        set modulateColor(value: Color)
        
        /** If `true`, the nine-patch texture's center tile will be drawn. */
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
    class SubViewport<Map extends NodePathMap = any> extends Viewport<Map> {
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
        
        /** The 2D size override of the sub-viewport. If either the width or height is `0`, the override is disabled. */
        get size2DOverride(): Vector2I
        set size2DOverride(value: Vector2I)
        
        /** If `true`, the 2D size override affects stretch as well. */
        get size2DOverrideStretch(): boolean
        set size2DOverrideStretch(value: boolean)
        
        /** The clear mode when the sub-viewport is used as a render target.  
         *      
         *  **Note:** This property is intended for 2D usage.  
         */
        get renderTargetClearMode(): int64
        set renderTargetClearMode(value: int64)
        
        /** The update mode when the sub-viewport is used as a render target. */
        get renderTargetUpdateMode(): int64
        set renderTargetUpdateMode(value: int64)
    }
    /** A container used for displaying the contents of a [SubViewport].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_subviewportcontainer.html  
     */
    class SubViewportContainer<Map extends NodePathMap = any> extends Container<Map> {
        constructor(identifier?: any)
        /** Virtual method to be implemented by the user. If it returns `true`, the [param event] is propagated to [SubViewport] children. Propagation doesn't happen if it returns `false`. If the function is not implemented, all events are propagated to SubViewports. */
        /* gdvirtual */ _propagateInputEvent(event: InputEvent): boolean
        
        /** If `true`, the sub-viewport will be automatically resized to the control's size.  
         *      
         *  **Note:** If `true`, this will prohibit changing [member SubViewport.size] of its children manually.  
         */
        get stretch(): boolean
        set stretch(value: boolean)
        
        /** Divides the sub-viewport's effective resolution by this value while preserving its scale. This can be used to speed up rendering.  
         *  For example, a 1280×720 sub-viewport with [member stretch_shrink] set to `2` will be rendered at 640×360 while occupying the same size in the container.  
         *      
         *  **Note:** [member stretch] must be `true` for this property to work.  
         */
        get stretchShrink(): int64
        set stretchShrink(value: int64)
        
        /** Configure, if either the [SubViewportContainer] or alternatively the [Control] nodes of its [SubViewport] children should be available as targets of mouse-related functionalities, like identifying the drop target in drag-and-drop operations or cursor shape of hovered [Control] node.  
         *  If `false`, the [Control] nodes inside its [SubViewport] children are considered as targets.  
         *  If `true`, the [SubViewportContainer] itself will be considered as a target.  
         */
        get mouseTarget(): boolean
        set mouseTarget(value: boolean)
    }
    /** Runs a [Tween] nested within another [Tween].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_subtweentweener.html  
     */
    class SubtweenTweener extends Tweener {
        constructor(identifier?: any)
        /** Sets the time in seconds after which the [SubtweenTweener] will start running the subtween. By default there's no delay. */
        setDelay(delay: float64): null | SubtweenTweener
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
        
        /** Set to [constant SKIN_8_WEIGHTS] to indicate that up to 8 bone influences per vertex may be used.  
         *  By default, only 4 bone influences are used ([constant SKIN_4_WEIGHTS]).  
         *      
         *  **Note:** This function takes an enum, not the exact number of weights.  
         */
        setSkinWeightCount(count: SurfaceTool.SkinWeightCount): void
        
        /** By default, returns [constant SKIN_4_WEIGHTS] to indicate only 4 bone influences per vertex are used.  
         *  Returns [constant SKIN_8_WEIGHTS] if up to 8 influences are used.  
         *      
         *  **Note:** This function returns an enum, not the exact number of weights.  
         */
        getSkinWeightCount(): SurfaceTool.SkinWeightCount
        
        /** Sets the color format for this custom [param channel_index]. Use [constant CUSTOM_MAX] to disable.  
         *  Must be invoked after [method begin] and should be set before [method commit] or [method commit_to_arrays].  
         */
        setCustomFormat(channelIndex: int64, format: SurfaceTool.CustomFormat): void
        
        /** Returns the format for custom [param channel_index] (currently up to 4). Returns [constant CUSTOM_MAX] if this custom channel is unused. */
        getCustomFormat(channelIndex: int64): SurfaceTool.CustomFormat
        
        /** Called before adding any vertices. Takes the primitive type as an argument (e.g. [constant Mesh.PRIMITIVE_TRIANGLES]). */
        begin(primitive: Mesh.PrimitiveType): void
        
        /** Specifies the position of current vertex. Should be called after specifying other vertex properties (e.g. Color, UV). */
        addVertex(vertex: Vector3): void
        
        /** Specifies a [Color] to use for the  *next*  vertex. If every vertex needs to have this information set and you fail to submit it for the first vertex, this information may not be used at all.  
         *      
         *  **Note:** The material must have [member BaseMaterial3D.vertex_color_use_as_albedo] enabled for the vertex color to be visible.  
         */
        setColor(color: Color): void
        
        /** Specifies a normal to use for the  *next*  vertex. If every vertex needs to have this information set and you fail to submit it for the first vertex, this information may not be used at all. */
        setNormal(normal: Vector3): void
        
        /** Specifies a tangent to use for the  *next*  vertex. If every vertex needs to have this information set and you fail to submit it for the first vertex, this information may not be used at all. */
        setTangent(tangent: Plane): void
        
        /** Specifies a set of UV coordinates to use for the  *next*  vertex. If every vertex needs to have this information set and you fail to submit it for the first vertex, this information may not be used at all. */
        setUV(uV: Vector2): void
        
        /** Specifies an optional second set of UV coordinates to use for the  *next*  vertex. If every vertex needs to have this information set and you fail to submit it for the first vertex, this information may not be used at all. */
        setUV2(uV2: Vector2): void
        
        /** Specifies an array of bones to use for the  *next*  vertex. [param bones] must contain 4 integers. */
        setBones(bones: PackedInt32Array | int32[]): void
        
        /** Specifies weight values to use for the  *next*  vertex. [param weights] must contain 4 values. If every vertex needs to have this information set and you fail to submit it for the first vertex, this information may not be used at all. */
        setWeights(weights: PackedFloat32Array | float32[]): void
        
        /** Sets the custom value on this vertex for [param channel_index].  
         *  [method set_custom_format] must be called first for this [param channel_index]. Formats which are not RGBA will ignore other color channels.  
         */
        setCustom(channelIndex: int64, customColor: Color): void
        
        /** Specifies the smooth group to use for the  *next*  vertex. If this is never called, all vertices will have the default smooth group of `0` and will be smoothed with adjacent vertices of the same group. To produce a mesh with flat normals, set the smooth group to `-1`.  
         *      
         *  **Note:** This function actually takes a `uint32_t`, so C# users should use `uint32.MaxValue` instead of `-1` to produce a mesh with flat normals.  
         */
        setSmoothGroup(index: int64): void
        
        /** Inserts a triangle fan made of array data into [Mesh] being constructed.  
         *  Requires the primitive type be set to [constant Mesh.PRIMITIVE_TRIANGLES].  
         */
        addTriangleFan(vertices: PackedVector3Array | Vector3[], uvs?: PackedVector2Array | Vector2[] /* = [] */, colors?: PackedColorArray | Color[] /* = [] */, uv2S?: PackedVector2Array | Vector2[] /* = [] */, normals?: PackedVector3Array | Vector3[] /* = [] */, tangents?: GArray /* = [] */): void
        
        /** Adds a vertex to index array if you are using indexed vertices. Does not need to be called before adding vertices. */
        addIndex(index: int64): void
        
        /** Shrinks the vertex array by creating an index array. This can improve performance by avoiding vertex reuse. */
        index(): void
        
        /** Removes the index array by expanding the vertex array. */
        deindex(): void
        
        /** Generates normals from vertices so you do not have to do it manually. If [param flip] is `true`, the resulting normals will be inverted. [method generate_normals] should be called  *after*  generating geometry and  *before*  committing the mesh using [method commit] or [method commit_to_arrays]. For correct display of normal-mapped surfaces, you will also have to generate tangents using [method generate_tangents].  
         *      
         *  **Note:** [method generate_normals] only works if the primitive type is set to [constant Mesh.PRIMITIVE_TRIANGLES].  
         *      
         *  **Note:** [method generate_normals] takes smooth groups into account. To generate smooth normals, set the smooth group to a value greater than or equal to `0` using [method set_smooth_group] or leave the smooth group at the default of `0`. To generate flat normals, set the smooth group to `-1` using [method set_smooth_group] prior to adding vertices.  
         */
        generateNormals(flip?: boolean /* = false */): void
        
        /** Generates a tangent vector for each vertex. Requires that each vertex already has UVs and normals set (see [method generate_normals]). */
        generateTangents(): void
        
        /** Optimizes triangle sorting for performance. Requires that [method get_primitive_type] is [constant Mesh.PRIMITIVE_TRIANGLES]. */
        optimizeIndicesForCache(): void
        
        /** Returns the axis-aligned bounding box of the vertex positions. */
        getAabb(): Aabb
        
        /** Generates an LOD for a given [param nd_threshold] in linear units (square root of quadric error metric), using at most [param target_index_count] indices. */
        generateLod(ndThreshold: float64, targetIndexCount?: int64 /* = 3 */): PackedInt32Array
        
        /** Sets [Material] to be used by the [Mesh] you are constructing. */
        setMaterial(material: Material): void
        
        /** Returns the type of mesh geometry, such as [constant Mesh.PRIMITIVE_TRIANGLES]. */
        getPrimitiveType(): Mesh.PrimitiveType
        
        /** Clear all information passed into the surface tool so far. */
        clear(): void
        
        /** Creates a vertex array from an existing [Mesh]. */
        createFrom(existing: Mesh, surface: int64): void
        
        /** Creates this SurfaceTool from existing vertex arrays such as returned by [method commit_to_arrays], [method Mesh.surface_get_arrays], [method Mesh.surface_get_blend_shape_arrays], [method ImporterMesh.get_surface_arrays], and [method ImporterMesh.get_surface_blend_shape_arrays]. [param primitive_type] controls the type of mesh data, defaulting to [constant Mesh.PRIMITIVE_TRIANGLES]. */
        createFromArrays(arrays: GArray, primitiveType?: Mesh.PrimitiveType /* = 3 */): void
        
        /** Creates a vertex array from the specified blend shape of an existing [Mesh]. This can be used to extract a specific pose from a blend shape. */
        createFromBlendShape(existing: Mesh, surface: int64, blendShape: string): void
        
        /** Append vertices from a given [Mesh] surface onto the current vertex array with specified [Transform3D]. */
        appendFrom(existing: Mesh, surface: int64, transform: Transform3D): void
        
        /** Returns a constructed [ArrayMesh] from current information passed in. If an existing [ArrayMesh] is passed in as an argument, will add an extra surface to the existing [ArrayMesh].  
         *  The [param flags] argument can be the bitwise OR of [constant Mesh.ARRAY_FLAG_USE_DYNAMIC_UPDATE], [constant Mesh.ARRAY_FLAG_USE_8_BONE_WEIGHTS], or [constant Mesh.ARRAY_FLAG_USES_EMPTY_VERTEX_ARRAY].  
         */
        commit(existing?: ArrayMesh /* = undefined */, flags?: int64 /* = 0 */): null | ArrayMesh
        
        /** Commits the data to the same format used by [method ArrayMesh.add_surface_from_arrays], [method ImporterMesh.add_surface], and [method create_from_arrays]. This way you can further process the mesh data using the [ArrayMesh] or [ImporterMesh] APIs. */
        commitToArrays(): GArray
    }
    /** Base class for syntax highlighters. Provides syntax highlighting data to a [TextEdit].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_syntaxhighlighter.html  
     */
    class SyntaxHighlighter extends Resource {
        constructor(identifier?: any)
        /** Virtual method which can be overridden to return syntax highlighting data.  
         *  See [method get_line_syntax_highlighting] for more details.  
         */
        /* gdvirtual */ _getLineSyntaxHighlighting(line: int64): GDictionary
        
        /** Virtual method which can be overridden to clear any local caches. */
        /* gdvirtual */ _clearHighlightingCache(): void
        
        /** Virtual method which can be overridden to update any local caches. */
        /* gdvirtual */ _updateCache(): void
        
        /** Returns the syntax highlighting data for the line at index [param line]. If the line is not cached, calls [method _get_line_syntax_highlighting] first to calculate the data.  
         *  Each entry is a column number containing a nested [Dictionary]. The column number denotes the start of a region, the region will end if another region is found, or at the end of the line. The nested [Dictionary] contains the data for that region. Currently only the key `"color"` is supported.  
         *  **Example:** Possible return value. This means columns `0` to `4` should be red, and columns `5` to the end of the line should be green:  
         *    
         */
        getLineSyntaxHighlighting(line: int64): GDictionary
        
        /** Clears then updates the [SyntaxHighlighter] caches. Override [method _update_cache] for a callback.  
         *      
         *  **Note:** This is called automatically when the associated [TextEdit] node, updates its own cache.  
         */
        updateCache(): void
        
        /** Clears all cached syntax highlighting data.  
         *  Then calls overridable method [method _clear_highlighting_cache].  
         */
        clearHighlightingCache(): void
        
        /** Returns the associated [TextEdit] node. */
        getTextEdit(): null | TextEdit
    }
    /** A font loaded from a system font. Falls back to a default theme font if not implemented on the host OS.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_systemfont.html  
     */
    class SystemFont extends Font {
        constructor(identifier?: any)
        /** Deprecated. This property does nothing. */
        get oversampling(): float64
        set oversampling(value: float64)
        
        /** Array of font family names to search, first matching font found is used. */
        get fontNames(): PackedStringArray
        set fontNames(value: PackedStringArray | string[])
        
        /** If set to `true`, italic or oblique font is preferred. */
        get fontItalic(): boolean
        set fontItalic(value: boolean)
        
        /** Preferred weight (boldness) of the font. A value in the `100...999` range, normal font weight is `400`, bold font weight is `700`. */
        get fontWeight(): int64
        set fontWeight(value: int64)
        
        /** Preferred font stretch amount, compared to a normal width. A percentage value between `50%` and `200%`. */
        get fontStretch(): int64
        set fontStretch(value: int64)
        
        /** Font anti-aliasing mode. */
        get antialiasing(): int64
        set antialiasing(value: int64)
        
        /** If set to `true`, generate mipmaps for the font textures. */
        get generateMipmaps(): boolean
        set generateMipmaps(value: boolean)
        
        /** If set to `true`, embedded font bitmap loading is disabled (bitmap-only and color fonts ignore this property). */
        get disableEmbeddedBitmaps(): boolean
        set disableEmbeddedBitmaps(value: boolean)
        
        /** If set to `true`, system fonts can be automatically used as fallbacks. */
        get allowSystemFallback(): boolean
        set allowSystemFallback(value: boolean)
        
        /** If set to `true`, auto-hinting is supported and preferred over font built-in hinting. */
        get forceAutohinter(): boolean
        set forceAutohinter(value: boolean)
        
        /** If set to `true`, color modulation is applied when drawing colored glyphs, otherwise it's applied to the monochrome glyphs only. */
        get modulateColorGlyphs(): boolean
        set modulateColorGlyphs(value: boolean)
        
        /** Font hinting mode. */
        get hinting(): int64
        set hinting(value: int64)
        
        /** Font glyph subpixel positioning mode. Subpixel positioning provides shaper text and better kerning for smaller font sizes, at the cost of memory usage and font rasterization speed. Use [constant TextServer.SUBPIXEL_POSITIONING_AUTO] to automatically enable it based on the font size. */
        get subpixelPositioning(): int64
        set subpixelPositioning(value: int64)
        
        /** If set to `true`, when aligning glyphs to the pixel boundaries rounding remainders are accumulated to ensure more uniform glyph distribution. This setting has no effect if subpixel positioning is enabled. */
        get keepRoundingRemainders(): boolean
        set keepRoundingRemainders(value: boolean)
        
        /** If set to `true`, glyphs of all sizes are rendered using single multichannel signed distance field generated from the dynamic font vector data. */
        get multichannelSignedDistanceField(): boolean
        set multichannelSignedDistanceField(value: boolean)
        
        /** The width of the range around the shape between the minimum and maximum representable signed distance. If using font outlines, [member msdf_pixel_range] must be set to at least  *twice*  the size of the largest font outline. The default [member msdf_pixel_range] value of `16` allows outline sizes up to `8` to look correct. */
        get msdfPixelRange(): int64
        set msdfPixelRange(value: int64)
        
        /** Source font size used to generate MSDF textures. Higher values allow for more precision, but are slower to render and require more memory. Only increase this value if you notice a visible lack of precision in glyph rendering. */
        get msdfSize(): int64
        set msdfSize(value: int64)
    }
    class TcpServer extends RefCounted {
        constructor(identifier?: any)
        listen(port: int64, bindAddress?: string /* = '*' */): GError
        isConnectionAvailable(): boolean
        isListening(): boolean
        getLocalPort(): int64
        takeConnection(): null | StreamPeerTcp
        stop(): void
    }
    class TlsOptions extends RefCounted {
        constructor(identifier?: any)
        static client(trustedChain?: X509Certificate /* = undefined */, commonNameOverride?: string /* = '' */): null | TlsOptions
        static clientUnsafe(trustedChain?: X509Certificate /* = undefined */): null | TlsOptions
        static server(key: CryptoKey, certificate: X509Certificate): null | TlsOptions
        isServer(): boolean
        isUnsafeClient(): boolean
        getCommonNameOverride(): string
        getTrustedCaChain(): null | X509Certificate
        getPrivateKey(): null | CryptoKey
        getOwnCertificate(): null | X509Certificate
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
    class TabBar<Map extends NodePathMap = any> extends Control<Map> {
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
        
        /** Returns the previously active tab index. */
        getPreviousTab(): int64
        
        /** Selects the first available tab with lower index than the currently selected. Returns `true` if tab selection changed. */
        selectPreviousAvailable(): boolean
        
        /** Selects the first available tab with greater index than the currently selected. Returns `true` if tab selection changed. */
        selectNextAvailable(): boolean
        
        /** Sets a [param title] for the tab at index [param tab_idx]. */
        setTabTitle(tabIdx: int64, title: string): void
        
        /** Returns the title of the tab at index [param tab_idx]. */
        getTabTitle(tabIdx: int64): string
        
        /** Sets a [param tooltip] for tab at index [param tab_idx].  
         *      
         *  **Note:** By default, if the [param tooltip] is empty and the tab text is truncated (not all characters fit into the tab), the title will be displayed as a tooltip. To hide the tooltip, assign `" "` as the [param tooltip] text.  
         */
        setTabTooltip(tabIdx: int64, tooltip: string): void
        
        /** Returns the tooltip text of the tab at index [param tab_idx]. */
        getTabTooltip(tabIdx: int64): string
        
        /** Sets tab title base writing direction. */
        setTabTextDirection(tabIdx: int64, direction: Control.TextDirection): void
        
        /** Returns tab title text base writing direction. */
        getTabTextDirection(tabIdx: int64): Control.TextDirection
        
        /** Sets language code of tab title used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        setTabLanguage(tabIdx: int64, language: string): void
        
        /** Returns tab title language code. */
        getTabLanguage(tabIdx: int64): string
        
        /** Sets an [param icon] for the tab at index [param tab_idx]. */
        setTabIcon(tabIdx: int64, icon: Texture2D): void
        
        /** Returns the icon for the tab at index [param tab_idx] or `null` if the tab has no icon. */
        getTabIcon(tabIdx: int64): null | Texture2D
        
        /** Sets the maximum allowed width of the icon for the tab at index [param tab_idx]. This limit is applied on top of the default size of the icon and on top of [theme_item icon_max_width]. The height is adjusted according to the icon's ratio. */
        setTabIconMaxWidth(tabIdx: int64, width: int64): void
        
        /** Returns the maximum allowed width of the icon for the tab at index [param tab_idx]. */
        getTabIconMaxWidth(tabIdx: int64): int64
        
        /** Sets an [param icon] for the button of the tab at index [param tab_idx] (located to the right, before the close button), making it visible and clickable (See [signal tab_button_pressed]). Giving it a `null` value will hide the button. */
        setTabButtonIcon(tabIdx: int64, icon: Texture2D): void
        
        /** Returns the icon for the right button of the tab at index [param tab_idx] or `null` if the right button has no icon. */
        getTabButtonIcon(tabIdx: int64): null | Texture2D
        
        /** If [param disabled] is `true`, disables the tab at index [param tab_idx], making it non-interactable. */
        setTabDisabled(tabIdx: int64, disabled: boolean): void
        
        /** Returns `true` if the tab at index [param tab_idx] is disabled. */
        isTabDisabled(tabIdx: int64): boolean
        
        /** If [param hidden] is `true`, hides the tab at index [param tab_idx], making it disappear from the tab area. */
        setTabHidden(tabIdx: int64, hidden: boolean): void
        
        /** Returns `true` if the tab at index [param tab_idx] is hidden. */
        isTabHidden(tabIdx: int64): boolean
        
        /** Sets the metadata value for the tab at index [param tab_idx], which can be retrieved later using [method get_tab_metadata]. */
        setTabMetadata(tabIdx: int64, metadata: any): void
        
        /** Returns the metadata value set to the tab at index [param tab_idx] using [method set_tab_metadata]. If no metadata was previously set, returns `null` by default. */
        getTabMetadata(tabIdx: int64): any
        
        /** Removes the tab at index [param tab_idx]. */
        removeTab(tabIdx: int64): void
        
        /** Adds a new tab. */
        addTab(title?: string /* = '' */, icon?: Texture2D /* = undefined */): void
        
        /** Returns the index of the tab at local coordinates [param point]. Returns `-1` if the point is outside the control boundaries or if there's no tab at the queried position. */
        getTabIdxAtPoint(point: Vector2): int64
        
        /** Returns the number of hidden tabs offsetted to the left. */
        getTabOffset(): int64
        
        /** Returns `true` if the offset buttons (the ones that appear when there's not enough space for all tabs) are visible. */
        getOffsetButtonsVisible(): boolean
        
        /** Moves the scroll view to make the tab visible. */
        ensureTabVisible(idx: int64): void
        
        /** Returns tab [Rect2] with local position and size. */
        getTabRect(tabIdx: int64): Rect2
        
        /** Moves a tab from [param from] to [param to]. */
        moveTab(from: int64, to: int64): void
        
        /** Clears all tabs. */
        clearTabs(): void
        
        /** The index of the current selected tab. A value of `-1` means that no tab is selected and can only be set when [member deselect_enabled] is `true` or if all tabs are hidden or disabled. */
        get currentTab(): int64
        set currentTab(value: int64)
        
        /** Sets the position at which tabs will be placed. See [enum AlignmentMode] for details. */
        get tabAlignment(): int64
        set tabAlignment(value: int64)
        
        /** If `true`, tabs overflowing this node's width will be hidden, displaying two navigation buttons instead. Otherwise, this node's minimum size is updated so that all tabs are visible. */
        get clipTabs(): boolean
        set clipTabs(value: boolean)
        
        /** If `true`, middle clicking on the mouse will fire the [signal tab_close_pressed] signal. */
        get closeWithMiddleMouse(): boolean
        set closeWithMiddleMouse(value: boolean)
        
        /** Sets when the close button will appear on the tabs. See [enum CloseButtonDisplayPolicy] for details. */
        get tabCloseDisplayPolicy(): int64
        set tabCloseDisplayPolicy(value: int64)
        
        /** Sets the maximum width which all tabs should be limited to. Unlimited if set to `0`. */
        get maxTabWidth(): int64
        set maxTabWidth(value: int64)
        
        /** if `true`, the mouse's scroll wheel can be used to navigate the scroll view. */
        get scrollingEnabled(): boolean
        set scrollingEnabled(value: boolean)
        
        /** If `true`, tabs can be rearranged with mouse drag. */
        get dragToRearrangeEnabled(): boolean
        set dragToRearrangeEnabled(value: boolean)
        
        /** [TabBar]s with the same rearrange group ID will allow dragging the tabs between them. Enable drag with [member drag_to_rearrange_enabled].  
         *  Setting this to `-1` will disable rearranging between [TabBar]s.  
         */
        get tabsRearrangeGroup(): int64
        set tabsRearrangeGroup(value: int64)
        
        /** If `true`, the tab offset will be changed to keep the currently selected tab visible. */
        get scrollToSelected(): boolean
        set scrollToSelected(value: boolean)
        
        /** If `true`, enables selecting a tab with the right mouse button. */
        get selectWithRmb(): boolean
        set selectWithRmb(value: boolean)
        
        /** If `true`, all tabs can be deselected so that no tab is selected. Click on the current tab to deselect it. */
        get deselectEnabled(): boolean
        set deselectEnabled(value: boolean)
        
        /** The number of tabs currently in the bar. */
        get tabCount(): any /*Tabs,tab_*/
        set tabCount(value: any /*Tabs,tab_*/)
        
        /** Emitted when a tab is selected via click, directional input, or script, even if it is the current tab. */
        readonly tabSelected: Signal<(tab: int64) => void>
        
        /** Emitted when switching to another tab. */
        readonly tabChanged: Signal<(tab: int64) => void>
        
        /** Emitted when a tab is clicked, even if it is the current tab. */
        readonly tabClicked: Signal<(tab: int64) => void>
        
        /** Emitted when a tab is right-clicked. [member select_with_rmb] must be enabled. */
        readonly tabRmbClicked: Signal<(tab: int64) => void>
        
        /** Emitted when a tab's close button is pressed or when middle-clicking on a tab, if [member close_with_middle_mouse] is enabled.  
         *      
         *  **Note:** Tabs are not removed automatically once the close button is pressed, this behavior needs to be programmed manually. For example:  
         *    
         */
        readonly tabClosePressed: Signal<(tab: int64) => void>
        
        /** Emitted when a tab's right button is pressed. See [method set_tab_button_icon]. */
        readonly tabButtonPressed: Signal<(tab: int64) => void>
        
        /** Emitted when a tab is hovered by the mouse. */
        readonly tabHovered: Signal<(tab: int64) => void>
        
        /** Emitted when the active tab is rearranged via mouse drag. See [member drag_to_rearrange_enabled]. */
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
    class TabContainer<Map extends NodePathMap = any> extends Container<Map> {
        /** Places the tab bar at the top. */
        static readonly POSITION_TOP = 0
        
        /** Places the tab bar at the bottom. The tab bar's [StyleBox] will be flipped vertically. */
        static readonly POSITION_BOTTOM = 1
        
        /** Represents the size of the [enum TabPosition] enum. */
        static readonly POSITION_MAX = 2
        constructor(identifier?: any)
        
        /** Returns the number of tabs. */
        getTabCount(): int64
        
        /** Returns the previously active tab index. */
        getPreviousTab(): int64
        
        /** Selects the first available tab with lower index than the currently selected. Returns `true` if tab selection changed. */
        selectPreviousAvailable(): boolean
        
        /** Selects the first available tab with greater index than the currently selected. Returns `true` if tab selection changed. */
        selectNextAvailable(): boolean
        
        /** Returns the child [Control] node located at the active tab index. */
        getCurrentTabControl(): null | Control
        
        /** Returns the [TabBar] contained in this container.  
         *  **Warning:** This is a required internal node, removing and freeing it or editing its tabs may cause a crash. If you wish to edit the tabs, use the methods provided in [TabContainer].  
         */
        getTabBar(): null | TabBar
        
        /** Returns the [Control] node from the tab at index [param tab_idx]. */
        getTabControl(tabIdx: int64): null | Control
        
        /** Sets a custom title for the tab at index [param tab_idx] (tab titles default to the name of the indexed child node). Set it back to the child's name to make the tab default to it again. */
        setTabTitle(tabIdx: int64, title: string): void
        
        /** Returns the title of the tab at index [param tab_idx]. Tab titles default to the name of the indexed child node, but this can be overridden with [method set_tab_title]. */
        getTabTitle(tabIdx: int64): string
        
        /** Sets a custom tooltip text for tab at index [param tab_idx].  
         *      
         *  **Note:** By default, if the [param tooltip] is empty and the tab text is truncated (not all characters fit into the tab), the title will be displayed as a tooltip. To hide the tooltip, assign `" "` as the [param tooltip] text.  
         */
        setTabTooltip(tabIdx: int64, tooltip: string): void
        
        /** Returns the tooltip text of the tab at index [param tab_idx]. */
        getTabTooltip(tabIdx: int64): string
        
        /** Sets an icon for the tab at index [param tab_idx]. */
        setTabIcon(tabIdx: int64, icon: Texture2D): void
        
        /** Returns the [Texture2D] for the tab at index [param tab_idx] or `null` if the tab has no [Texture2D]. */
        getTabIcon(tabIdx: int64): null | Texture2D
        
        /** Sets the maximum allowed width of the icon for the tab at index [param tab_idx]. This limit is applied on top of the default size of the icon and on top of [theme_item icon_max_width]. The height is adjusted according to the icon's ratio. */
        setTabIconMaxWidth(tabIdx: int64, width: int64): void
        
        /** Returns the maximum allowed width of the icon for the tab at index [param tab_idx]. */
        getTabIconMaxWidth(tabIdx: int64): int64
        
        /** If [param disabled] is `true`, disables the tab at index [param tab_idx], making it non-interactable. */
        setTabDisabled(tabIdx: int64, disabled: boolean): void
        
        /** Returns `true` if the tab at index [param tab_idx] is disabled. */
        isTabDisabled(tabIdx: int64): boolean
        
        /** If [param hidden] is `true`, hides the tab at index [param tab_idx], making it disappear from the tab area. */
        setTabHidden(tabIdx: int64, hidden: boolean): void
        
        /** Returns `true` if the tab at index [param tab_idx] is hidden. */
        isTabHidden(tabIdx: int64): boolean
        
        /** Sets the metadata value for the tab at index [param tab_idx], which can be retrieved later using [method get_tab_metadata]. */
        setTabMetadata(tabIdx: int64, metadata: any): void
        
        /** Returns the metadata value set to the tab at index [param tab_idx] using [method set_tab_metadata]. If no metadata was previously set, returns `null` by default. */
        getTabMetadata(tabIdx: int64): any
        
        /** Sets the button icon from the tab at index [param tab_idx]. */
        setTabButtonIcon(tabIdx: int64, icon: Texture2D): void
        
        /** Returns the button icon from the tab at index [param tab_idx]. */
        getTabButtonIcon(tabIdx: int64): null | Texture2D
        
        /** Returns the index of the tab at local coordinates [param point]. Returns `-1` if the point is outside the control boundaries or if there's no tab at the queried position. */
        getTabIdxAtPoint(point: Vector2): int64
        
        /** Returns the index of the tab tied to the given [param control]. The control must be a child of the [TabContainer]. */
        getTabIdxFromControl(control: Control): int64
        
        /** If set on a [Popup] node instance, a popup menu icon appears in the top-right corner of the [TabContainer] (setting it to `null` will make it go away). Clicking it will expand the [Popup] node. */
        setPopup(popup: Node): void
        
        /** Returns the [Popup] node instance if one has been set already with [method set_popup].  
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member Window.visible] property.  
         */
        getPopup(): null | Popup
        
        /** Sets the position at which tabs will be placed. See [enum TabBar.AlignmentMode] for details. */
        get tabAlignment(): int64
        set tabAlignment(value: int64)
        
        /** The current tab index. When set, this index's [Control] node's `visible` property is set to `true` and all others are set to `false`.  
         *  A value of `-1` means that no tab is selected.  
         */
        get currentTab(): int64
        set currentTab(value: int64)
        
        /** Sets the position of the tab bar. See [enum TabPosition] for details. */
        get tabsPosition(): int64
        set tabsPosition(value: int64)
        
        /** If `true`, tabs overflowing this node's width will be hidden, displaying two navigation buttons instead. Otherwise, this node's minimum size is updated so that all tabs are visible. */
        get clipTabs(): boolean
        set clipTabs(value: boolean)
        
        /** If `true`, tabs are visible. If `false`, tabs' content and titles are hidden. */
        get tabsVisible(): boolean
        set tabsVisible(value: boolean)
        
        /** If `true`, all tabs are drawn in front of the panel. If `false`, inactive tabs are drawn behind the panel. */
        get allTabsInFront(): boolean
        set allTabsInFront(value: boolean)
        
        /** If `true`, tabs can be rearranged with mouse drag. */
        get dragToRearrangeEnabled(): boolean
        set dragToRearrangeEnabled(value: boolean)
        
        /** [TabContainer]s with the same rearrange group ID will allow dragging the tabs between them. Enable drag with [member drag_to_rearrange_enabled].  
         *  Setting this to `-1` will disable rearranging between [TabContainer]s.  
         */
        get tabsRearrangeGroup(): int64
        set tabsRearrangeGroup(value: int64)
        
        /** If `true`, child [Control] nodes that are hidden have their minimum size take into account in the total, instead of only the currently visible one. */
        get useHiddenTabsForMinSize(): boolean
        set useHiddenTabsForMinSize(value: boolean)
        
        /** The focus access mode for the internal [TabBar] node. */
        get tabFocusMode(): int64
        set tabFocusMode(value: int64)
        
        /** If `true`, all tabs can be deselected so that no tab is selected. Click on the [member current_tab] to deselect it.  
         *  Only the tab header will be shown if no tabs are selected.  
         */
        get deselectEnabled(): boolean
        set deselectEnabled(value: boolean)
        
        /** Emitted when the active tab is rearranged via mouse drag. See [member drag_to_rearrange_enabled]. */
        readonly activeTabRearranged: Signal<(idxTo: int64) => void>
        
        /** Emitted when switching to another tab. */
        readonly tabChanged: Signal<(tab: int64) => void>
        
        /** Emitted when a tab is clicked, even if it is the current tab. */
        readonly tabClicked: Signal<(tab: int64) => void>
        
        /** Emitted when a tab is hovered by the mouse. */
        readonly tabHovered: Signal<(tab: int64) => void>
        
        /** Emitted when a tab is selected via click, directional input, or script, even if it is the current tab. */
        readonly tabSelected: Signal<(tab: int64) => void>
        
        /** Emitted when the user clicks on the button icon on this tab. */
        readonly tabButtonPressed: Signal<(tab: int64) => void>
        
        /** Emitted when the [TabContainer]'s [Popup] button is clicked. See [method set_popup] for details. */
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
    class TextEdit<Map extends NodePathMap = any> extends Control<Map> {
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
        
        /** Override this method to define what happens when the user types in the provided key [param unicode_char]. */
        /* gdvirtual */ _handleUnicodeInput(unicodeChar: int64, caretIndex: int64): void
        
        /** Override this method to define what happens when the user presses the backspace key. */
        /* gdvirtual */ _backspace(caretIndex: int64): void
        
        /** Override this method to define what happens when the user performs a cut operation. */
        /* gdvirtual */ _cut(caretIndex: int64): void
        
        /** Override this method to define what happens when the user performs a copy operation. */
        /* gdvirtual */ _copy(caretIndex: int64): void
        
        /** Override this method to define what happens when the user performs a paste operation. */
        /* gdvirtual */ _paste(caretIndex: int64): void
        
        /** Override this method to define what happens when the user performs a paste operation with middle mouse button.  
         *      
         *  **Note:** This method is only implemented on Linux.  
         */
        /* gdvirtual */ _pastePrimaryClipboard(caretIndex: int64): void
        
        /** Returns `true` if the user has text in the [url=https://en.wikipedia.org/wiki/Input_method]Input Method Editor[/url] (IME). */
        hasImeText(): boolean
        
        /** Closes the [url=https://en.wikipedia.org/wiki/Input_method]Input Method Editor[/url] (IME) if it is open. Any text in the IME will be lost. */
        cancelIme(): void
        
        /** Applies text from the [url=https://en.wikipedia.org/wiki/Input_method]Input Method Editor[/url] (IME) to each caret and closes the IME if it is open. */
        applyIme(): void
        
        /** Sets the tab size for the [TextEdit] to use. */
        setTabSize(size: int64): void
        
        /** Returns the [TextEdit]'s' tab size. */
        getTabSize(): int64
        
        /** If `true`, enables overtype mode. In this mode, typing overrides existing text instead of inserting text. The [member ProjectSettings.input/ui_text_toggle_insert_mode] action toggles overtype mode. See [method is_overtype_mode_enabled]. */
        setOvertypeModeEnabled(enabled: boolean): void
        
        /** Returns `true` if overtype mode is enabled. See [method set_overtype_mode_enabled]. */
        isOvertypeModeEnabled(): boolean
        
        /** Performs a full reset of [TextEdit], including undo history. */
        clear(): void
        
        /** Returns the number of lines in the text. */
        getLineCount(): int64
        
        /** Sets the text for a specific [param line].  
         *  Carets on the line will attempt to keep their visual x position.  
         */
        setLine(line: int64, newText: string): void
        
        /** Returns the text of a specific line. */
        getLine(line: int64): string
        
        /** Returns line text as it is currently displayed, including IME composition string. */
        getLineWithIme(line: int64): string
        
        /** Returns the width in pixels of the [param wrap_index] on [param line]. */
        getLineWidth(line: int64, wrapIndex?: int64 /* = -1 */): int64
        
        /** Returns the maximum value of the line height among all lines.  
         *      
         *  **Note:** The return value is influenced by [theme_item line_spacing] and [theme_item font_size]. And it will not be less than `1`.  
         */
        getLineHeight(): int64
        
        /** Returns the indent level of the given line. This is the number of spaces and tabs at the beginning of the line, with the tabs taking the tab size into account (see [method get_tab_size]). */
        getIndentLevel(line: int64): int64
        
        /** Returns the first column containing a non-whitespace character on the given line. If there is only whitespace, returns the number of characters. */
        getFirstNonWhiteSpaceColumn(line: int64): int64
        
        /** Swaps the two lines. Carets will be swapped with the lines. */
        swapLines(fromLine: int64, toLine: int64): void
        
        /** Inserts a new line with [param text] at [param line]. */
        insertLineAt(line: int64, text: string): void
        
        /** Removes the line of text at [param line]. Carets on this line will attempt to match their previous visual x position.  
         *  If [param move_carets_down] is `true` carets will move to the next line down, otherwise carets will move up.  
         */
        removeLineAt(line: int64, moveCaretsDown?: boolean /* = true */): void
        
        /** Insert the specified text at the caret position. */
        insertTextAtCaret(text: string, caretIndex?: int64 /* = -1 */): void
        
        /** Inserts the [param text] at [param line] and [param column].  
         *  If [param before_selection_begin] is `true`, carets and selections that begin at [param line] and [param column] will moved to the end of the inserted text, along with all carets after it.  
         *  If [param before_selection_end] is `true`, selections that end at [param line] and [param column] will be extended to the end of the inserted text. These parameters can be used to insert text inside of or outside of selections.  
         */
        insertText(text: string, line: int64, column: int64, beforeSelectionBegin?: boolean /* = true */, beforeSelectionEnd?: boolean /* = false */): void
        
        /** Removes text between the given positions. */
        removeText(fromLine: int64, fromColumn: int64, toLine: int64, toColumn: int64): void
        
        /** Returns the last unhidden line in the entire [TextEdit]. */
        getLastUnhiddenLine(): int64
        
        /** Returns the count to the next visible line from [param line] to `line + visible_amount`. Can also count backwards. For example if a [TextEdit] has 5 lines with lines 2 and 3 hidden, calling this with `line = 1, visible_amount = 1` would return 3. */
        getNextVisibleLineOffsetFrom(line: int64, visibleAmount: int64): int64
        
        /** Similar to [method get_next_visible_line_offset_from], but takes into account the line wrap indexes. In the returned vector, `x` is the line, `y` is the wrap index. */
        getNextVisibleLineIndexOffsetFrom(line: int64, wrapIndex: int64, visibleAmount: int64): Vector2I
        
        /** Called when the user presses the backspace key. Can be overridden with [method _backspace]. */
        backspace(caretIndex?: int64 /* = -1 */): void
        
        /** Cut's the current selection. Can be overridden with [method _cut]. */
        cut(caretIndex?: int64 /* = -1 */): void
        
        /** Copies the current text selection. Can be overridden with [method _copy]. */
        copy(caretIndex?: int64 /* = -1 */): void
        
        /** Paste at the current location. Can be overridden with [method _paste]. */
        paste(caretIndex?: int64 /* = -1 */): void
        
        /** Pastes the primary clipboard. */
        pastePrimaryClipboard(caretIndex?: int64 /* = -1 */): void
        
        /** Starts an action, will end the current action if [param action] is different.  
         *  An action will also end after a call to [method end_action], after [member ProjectSettings.gui/timers/text_edit_idle_detect_sec] is triggered or a new undoable step outside the [method start_action] and [method end_action] calls.  
         */
        startAction(action: TextEdit.EditAction): void
        
        /** Marks the end of steps in the current action started with [method start_action]. */
        endAction(): void
        
        /** Starts a multipart edit. All edits will be treated as one action until [method end_complex_operation] is called. */
        beginComplexOperation(): void
        
        /** Ends a multipart edit, started with [method begin_complex_operation]. If called outside a complex operation, the current operation is pushed onto the undo/redo stack. */
        endComplexOperation(): void
        
        /** Returns `true` if an "undo" action is available. */
        hasUndo(): boolean
        
        /** Returns `true` if a "redo" action is available. */
        hasRedo(): boolean
        
        /** Perform undo operation. */
        undo(): void
        
        /** Perform redo operation. */
        redo(): void
        
        /** Clears the undo history. */
        clearUndoHistory(): void
        
        /** Tag the current version as saved. */
        tagSavedVersion(): void
        
        /** Returns the current version of the [TextEdit]. The version is a count of recorded operations by the undo/redo history. */
        getVersion(): int64
        
        /** Returns the last tagged saved version from [method tag_saved_version]. */
        getSavedVersion(): int64
        
        /** Sets the search text. See [method set_search_flags]. */
        setSearchText(searchText: string): void
        
        /** Sets the search [param flags]. This is used with [method set_search_text] to highlight occurrences of the searched text. Search flags can be specified from the [enum SearchFlags] enum. */
        setSearchFlags(flags: int64): void
        
        /** Perform a search inside the text. Search flags can be specified in the [enum SearchFlags] enum.  
         *  In the returned vector, `x` is the column, `y` is the line. If no results are found, both are equal to `-1`.  
         *    
         */
        search(text: string, flags: int64, fromLine: int64, fromColumn: int64): Vector2I
        
        /** Provide custom tooltip text. The callback method must take the following args: `hovered_word: String`. */
        setTooltipRequestFunc(callback: Callable): void
        
        /** Returns the local mouse position adjusted for the text direction. */
        getLocalMousePos(): Vector2
        
        /** Returns the word at [param position]. */
        getWordAtPos(position: Vector2): string
        
        /** Returns the line and column at the given position. In the returned vector, `x` is the column and `y` is the line.  
         *  If [param clamp_line] is `false` and [param position] is below the last line, `Vector2i(-1, -1)` is returned.  
         *  If [param clamp_column] is `false` and [param position] is outside the column range of the line, `Vector2i(-1, -1)` is returned.  
         */
        getLineColumnAtPos(position: Vector2I, clampLine?: boolean /* = true */, clampColumn?: boolean /* = true */): Vector2I
        
        /** Returns the local position for the given [param line] and [param column]. If `x` or `y` of the returned vector equal `-1`, the position is outside of the viewable area of the control.  
         *      
         *  **Note:** The Y position corresponds to the bottom side of the line. Use [method get_rect_at_line_column] to get the top side position.  
         */
        getPosAtLineColumn(line: int64, column: int64): Vector2I
        
        /** Returns the local position and size for the grapheme at the given [param line] and [param column]. If `x` or `y` position of the returned rect equal `-1`, the position is outside of the viewable area of the control.  
         *      
         *  **Note:** The Y position of the returned rect corresponds to the top side of the line, unlike [method get_pos_at_line_column] which returns the bottom side.  
         */
        getRectAtLineColumn(line: int64, column: int64): Rect2I
        
        /** Returns the equivalent minimap line at [param position]. */
        getMinimapLineAtPos(position: Vector2I): int64
        
        /** Returns `true` if the user is dragging their mouse for scrolling, selecting, or text dragging. */
        isDraggingCursor(): boolean
        
        /** Returns `true` if the mouse is over a selection. If [param edges] is `true`, the edges are considered part of the selection. */
        isMouseOverSelection(edges: boolean, caretIndex?: int64 /* = -1 */): boolean
        
        /** Adds a new caret at the given location. Returns the index of the new caret, or `-1` if the location is invalid. */
        addCaret(line: int64, column: int64): int64
        
        /** Removes the given caret index.  
         *      
         *  **Note:** This can result in adjustment of all other caret indices.  
         */
        removeCaret(caret: int64): void
        
        /** Removes all additional carets. */
        removeSecondaryCarets(): void
        
        /** Returns the number of carets in this [TextEdit]. */
        getCaretCount(): int64
        
        /** Adds an additional caret above or below every caret. If [param below] is `true` the new caret will be added below and above otherwise. */
        addCaretAtCarets(below: boolean): void
        
        /** Returns the carets sorted by selection beginning from lowest line and column to highest (from top to bottom of text).  
         *  If [param include_ignored_carets] is `false`, carets from [method multicaret_edit_ignore_caret] will be ignored.  
         */
        getSortedCarets(includeIgnoredCarets?: boolean /* = false */): PackedInt32Array
        
        /** Collapse all carets in the given range to the [param from_line] and [param from_column] position.  
         *  [param inclusive] applies to both ends.  
         *  If [method is_in_mulitcaret_edit] is `true`, carets that are collapsed will be `true` for [method multicaret_edit_ignore_caret].  
         *  [method merge_overlapping_carets] will be called if any carets were collapsed.  
         */
        collapseCarets(fromLine: int64, fromColumn: int64, toLine: int64, toColumn: int64, inclusive?: boolean /* = false */): void
        
        /** Merges any overlapping carets. Will favor the newest caret, or the caret with a selection.  
         *  If [method is_in_mulitcaret_edit] is `true`, the merge will be queued to happen at the end of the multicaret edit. See [method begin_multicaret_edit] and [method end_multicaret_edit].  
         *      
         *  **Note:** This is not called when a caret changes position but after certain actions, so it is possible to get into a state where carets overlap.  
         */
        mergeOverlappingCarets(): void
        
        /** Starts an edit for multiple carets. The edit must be ended with [method end_multicaret_edit]. Multicaret edits can be used to edit text at multiple carets and delay merging the carets until the end, so the caret indexes aren't affected immediately. [method begin_multicaret_edit] and [method end_multicaret_edit] can be nested, and the merge will happen at the last [method end_multicaret_edit].  
         *    
         */
        beginMulticaretEdit(): void
        
        /** Ends an edit for multiple carets, that was started with [method begin_multicaret_edit]. If this was the last [method end_multicaret_edit] and [method merge_overlapping_carets] was called, carets will be merged. */
        endMulticaretEdit(): void
        
        /** Returns `true` if a [method begin_multicaret_edit] has been called and [method end_multicaret_edit] has not yet been called. */
        isInMulitcaretEdit(): boolean
        
        /** Returns `true` if the given [param caret_index] should be ignored as part of a multicaret edit. See [method begin_multicaret_edit] and [method end_multicaret_edit]. Carets that should be ignored are ones that were part of removed text and will likely be merged at the end of the edit, or carets that were added during the edit.  
         *  It is recommended to `continue` within a loop iterating on multiple carets if a caret should be ignored.  
         */
        multicaretEditIgnoreCaret(caretIndex: int64): boolean
        
        /** Returns `true` if the caret is visible, `false` otherwise. A caret will be considered hidden if it is outside the scrollable area when scrolling is enabled.  
         *      
         *  **Note:** [method is_caret_visible] does not account for a caret being off-screen if it is still within the scrollable area. It will return `true` even if the caret is off-screen as long as it meets [TextEdit]'s own conditions for being visible. This includes uses of [member scroll_fit_content_width] and [member scroll_fit_content_height] that cause the [TextEdit] to expand beyond the viewport's bounds.  
         */
        isCaretVisible(caretIndex?: int64 /* = 0 */): boolean
        
        /** Returns the caret pixel draw position. */
        getCaretDrawPos(caretIndex?: int64 /* = 0 */): Vector2
        
        /** Moves the caret to the specified [param line] index. The caret column will be moved to the same visual position it was at the last time [method set_caret_column] was called, or clamped to the end of the line.  
         *  If [param adjust_viewport] is `true`, the viewport will center at the caret position after the move occurs.  
         *  If [param can_be_hidden] is `true`, the specified [param line] can be hidden.  
         *  If [param wrap_index] is `-1`, the caret column will be clamped to the [param line]'s length. If [param wrap_index] is greater than `-1`, the column will be moved to attempt to match the visual x position on the line's [param wrap_index] to the position from the last time [method set_caret_column] was called.  
         *      
         *  **Note:** If supporting multiple carets this will not check for any overlap. See [method merge_overlapping_carets].  
         */
        setCaretLine(line: int64, adjustViewport?: boolean /* = true */, canBeHidden?: boolean /* = true */, wrapIndex?: int64 /* = 0 */, caretIndex?: int64 /* = 0 */): void
        
        /** Returns the line the editing caret is on. */
        getCaretLine(caretIndex?: int64 /* = 0 */): int64
        
        /** Moves the caret to the specified [param column] index.  
         *  If [param adjust_viewport] is `true`, the viewport will center at the caret position after the move occurs.  
         *      
         *  **Note:** If supporting multiple carets this will not check for any overlap. See [method merge_overlapping_carets].  
         */
        setCaretColumn(column: int64, adjustViewport?: boolean /* = true */, caretIndex?: int64 /* = 0 */): void
        
        /** Returns the column the editing caret is at. */
        getCaretColumn(caretIndex?: int64 /* = 0 */): int64
        
        /** Returns the correct column at the end of a composite character like ❤️‍🩹 (mending heart; Unicode: `U+2764 U+FE0F U+200D U+1FA79`) which is comprised of more than one Unicode code point, if the caret is at the start of the composite character. Also returns the correct column with the caret at mid grapheme and for non-composite characters.  
         *      
         *  **Note:** To check at caret location use `get_next_composite_character_column(get_caret_line(), get_caret_column())`  
         */
        getNextCompositeCharacterColumn(line: int64, column: int64): int64
        
        /** Returns the correct column at the start of a composite character like ❤️‍🩹 (mending heart; Unicode: `U+2764 U+FE0F U+200D U+1FA79`) which is comprised of more than one Unicode code point, if the caret is at the end of the composite character. Also returns the correct column with the caret at mid grapheme and for non-composite characters.  
         *      
         *  **Note:** To check at caret location use `get_previous_composite_character_column(get_caret_line(), get_caret_column())`  
         */
        getPreviousCompositeCharacterColumn(line: int64, column: int64): int64
        
        /** Returns the wrap index the editing caret is on. */
        getCaretWrapIndex(caretIndex?: int64 /* = 0 */): int64
        
        /** Returns a [String] text with the word under the caret's location. */
        getWordUnderCaret(caretIndex?: int64 /* = -1 */): string
        
        /** Sets the current selection mode. */
        setSelectionMode(mode: TextEdit.SelectionMode): void
        
        /** Returns the current selection mode. */
        getSelectionMode(): TextEdit.SelectionMode
        
        /** Select all the text.  
         *  If [member selecting_enabled] is `false`, no selection will occur.  
         */
        selectAll(): void
        
        /** Selects the word under the caret. */
        selectWordUnderCaret(caretIndex?: int64 /* = -1 */): void
        
        /** Adds a selection and a caret for the next occurrence of the current selection. If there is no active selection, selects word under caret. */
        addSelectionForNextOccurrence(): void
        
        /** Moves a selection and a caret for the next occurrence of the current selection. If there is no active selection, moves to the next occurrence of the word under caret. */
        skipSelectionForNextOccurrence(): void
        
        /** Selects text from [param origin_line] and [param origin_column] to [param caret_line] and [param caret_column] for the given [param caret_index]. This moves the selection origin and the caret. If the positions are the same, the selection will be deselected.  
         *  If [member selecting_enabled] is `false`, no selection will occur.  
         *      
         *  **Note:** If supporting multiple carets this will not check for any overlap. See [method merge_overlapping_carets].  
         */
        select(originLine: int64, originColumn: int64, caretLine: int64, caretColumn: int64, caretIndex?: int64 /* = 0 */): void
        
        /** Returns `true` if the user has selected text. */
        hasSelection(caretIndex?: int64 /* = -1 */): boolean
        
        /** Returns the text inside the selection of a caret, or all the carets if [param caret_index] is its default value `-1`. */
        getSelectedText(caretIndex?: int64 /* = -1 */): string
        
        /** Returns the caret index of the selection at the given [param line] and [param column], or `-1` if there is none.  
         *  If [param include_edges] is `false`, the position must be inside the selection and not at either end. If [param only_selections] is `false`, carets without a selection will also be considered.  
         */
        getSelectionAtLineColumn(line: int64, column: int64, includeEdges?: boolean /* = true */, onlySelections?: boolean /* = true */): int64
        
        /** Returns an [Array] of line ranges where `x` is the first line and `y` is the last line. All lines within these ranges will have a caret on them or be part of a selection. Each line will only be part of one line range, even if it has multiple carets on it.  
         *  If a selection's end column ([method get_selection_to_column]) is at column `0`, that line will not be included. If a selection begins on the line after another selection ends and [param merge_adjacent] is `true`, or they begin and end on the same line, one line range will include both selections.  
         */
        getLineRangesFromCarets(onlySelections?: boolean /* = false */, mergeAdjacent?: boolean /* = true */): GArray
        
        /** Returns the origin line of the selection. This is the opposite end from the caret. */
        getSelectionOriginLine(caretIndex?: int64 /* = 0 */): int64
        
        /** Returns the origin column of the selection. This is the opposite end from the caret. */
        getSelectionOriginColumn(caretIndex?: int64 /* = 0 */): int64
        
        /** Sets the selection origin line to the [param line] for the given [param caret_index]. If the selection origin is moved to the caret position, the selection will deselect.  
         *  If [param can_be_hidden] is `false`, The line will be set to the nearest unhidden line below or above.  
         *  If [param wrap_index] is `-1`, the selection origin column will be clamped to the [param line]'s length. If [param wrap_index] is greater than `-1`, the column will be moved to attempt to match the visual x position on the line's [param wrap_index] to the position from the last time [method set_selection_origin_column] or [method select] was called.  
         */
        setSelectionOriginLine(line: int64, canBeHidden?: boolean /* = true */, wrapIndex?: int64 /* = -1 */, caretIndex?: int64 /* = 0 */): void
        
        /** Sets the selection origin column to the [param column] for the given [param caret_index]. If the selection origin is moved to the caret position, the selection will deselect. */
        setSelectionOriginColumn(column: int64, caretIndex?: int64 /* = 0 */): void
        
        /** Returns the selection begin line. Returns the caret line if there is no selection. */
        getSelectionFromLine(caretIndex?: int64 /* = 0 */): int64
        
        /** Returns the selection begin column. Returns the caret column if there is no selection. */
        getSelectionFromColumn(caretIndex?: int64 /* = 0 */): int64
        
        /** Returns the selection end line. Returns the caret line if there is no selection. */
        getSelectionToLine(caretIndex?: int64 /* = 0 */): int64
        
        /** Returns the selection end column. Returns the caret column if there is no selection. */
        getSelectionToColumn(caretIndex?: int64 /* = 0 */): int64
        
        /** Returns `true` if the caret of the selection is after the selection origin. This can be used to determine the direction of the selection. */
        isCaretAfterSelectionOrigin(caretIndex?: int64 /* = 0 */): boolean
        
        /** Deselects the current selection. */
        deselect(caretIndex?: int64 /* = -1 */): void
        
        /** Deletes the selected text. */
        deleteSelection(caretIndex?: int64 /* = -1 */): void
        
        /** Returns if the given line is wrapped. */
        isLineWrapped(line: int64): boolean
        
        /** Returns the number of times the given line is wrapped. */
        getLineWrapCount(line: int64): int64
        
        /** Returns the wrap index of the given column on the given line. This ranges from `0` to [method get_line_wrap_count]. */
        getLineWrapIndexAtColumn(line: int64, column: int64): int64
        
        /** Returns an array of [String]s representing each wrapped index. */
        getLineWrappedText(line: int64): PackedStringArray
        
        /** Returns the [VScrollBar] of the [TextEdit]. */
        getVScrollBar(): null | VScrollBar
        
        /** Returns the [HScrollBar] used by [TextEdit]. */
        getHScrollBar(): null | HScrollBar
        
        /** Returns the scroll position for [param wrap_index] of [param line]. */
        getScrollPosForLine(line: int64, wrapIndex?: int64 /* = 0 */): float64
        
        /** Positions the [param wrap_index] of [param line] at the top of the viewport. */
        setLineAsFirstVisible(line: int64, wrapIndex?: int64 /* = 0 */): void
        
        /** Returns the first visible line. */
        getFirstVisibleLine(): int64
        
        /** Positions the [param wrap_index] of [param line] at the center of the viewport. */
        setLineAsCenterVisible(line: int64, wrapIndex?: int64 /* = 0 */): void
        
        /** Positions the [param wrap_index] of [param line] at the bottom of the viewport. */
        setLineAsLastVisible(line: int64, wrapIndex?: int64 /* = 0 */): void
        
        /** Returns the last visible line. Use [method get_last_full_visible_line_wrap_index] for the wrap index. */
        getLastFullVisibleLine(): int64
        
        /** Returns the last visible wrap index of the last visible line. */
        getLastFullVisibleLineWrapIndex(): int64
        
        /** Returns the number of lines that can visually fit, rounded down, based on this control's height. */
        getVisibleLineCount(): int64
        
        /** Returns the total number of lines between [param from_line] and [param to_line] (inclusive) in the text. This includes wrapped lines and excludes folded lines. If the range covers all lines it is equivalent to [method get_total_visible_line_count]. */
        getVisibleLineCountInRange(fromLine: int64, toLine: int64): int64
        
        /** Returns the total number of lines in the text. This includes wrapped lines and excludes folded lines. If [member wrap_mode] is set to [constant LINE_WRAPPING_NONE] and no lines are folded (see [method CodeEdit.is_line_folded]) then this is equivalent to [method get_line_count]. See [method get_visible_line_count_in_range] for a limited range of lines. */
        getTotalVisibleLineCount(): int64
        
        /** Adjust the viewport so the caret is visible. */
        adjustViewportToCaret(caretIndex?: int64 /* = 0 */): void
        
        /** Centers the viewport on the line the editing caret is at. This also resets the [member scroll_horizontal] value to `0`. */
        centerViewportToCaret(caretIndex?: int64 /* = 0 */): void
        
        /** Returns the number of lines that may be drawn on the minimap. */
        getMinimapVisibleLines(): int64
        
        /** Register a new gutter to this [TextEdit]. Use [param at] to have a specific gutter order. A value of `-1` appends the gutter to the right. */
        addGutter(at?: int64 /* = -1 */): void
        
        /** Removes the gutter at the given index. */
        removeGutter(gutter: int64): void
        
        /** Returns the number of gutters registered. */
        getGutterCount(): int64
        
        /** Sets the name of the gutter at the given index. */
        setGutterName(gutter: int64, name: string): void
        
        /** Returns the name of the gutter at the given index. */
        getGutterName(gutter: int64): string
        
        /** Sets the type of gutter at the given index. Gutters can contain icons, text, or custom visuals. See [enum TextEdit.GutterType] for options. */
        setGutterType(gutter: int64, type: TextEdit.GutterType): void
        
        /** Returns the type of the gutter at the given index. Gutters can contain icons, text, or custom visuals. See [enum TextEdit.GutterType] for options. */
        getGutterType(gutter: int64): TextEdit.GutterType
        
        /** Set the width of the gutter at the given index. */
        setGutterWidth(gutter: int64, width: int64): void
        
        /** Returns the width of the gutter at the given index. */
        getGutterWidth(gutter: int64): int64
        
        /** If `true`, the gutter at the given index is drawn. The gutter type ([method set_gutter_type]) determines how it is drawn. See [method is_gutter_drawn]. */
        setGutterDraw(gutter: int64, draw: boolean): void
        
        /** Returns `true` if the gutter at the given index is currently drawn. See [method set_gutter_draw]. */
        isGutterDrawn(gutter: int64): boolean
        
        /** If `true`, the mouse cursor will change to a pointing hand ([constant Control.CURSOR_POINTING_HAND]) when hovering over the gutter at the given index. See [method is_gutter_clickable] and [method set_line_gutter_clickable]. */
        setGutterClickable(gutter: int64, clickable: boolean): void
        
        /** Returns `true` if the gutter at the given index is clickable. See [method set_gutter_clickable]. */
        isGutterClickable(gutter: int64): boolean
        
        /** If `true`, the line data of the gutter at the given index can be overridden when using [method merge_gutters]. See [method is_gutter_overwritable]. */
        setGutterOverwritable(gutter: int64, overwritable: boolean): void
        
        /** Returns `true` if the gutter at the given index is overwritable. See [method set_gutter_overwritable]. */
        isGutterOverwritable(gutter: int64): boolean
        
        /** Merge the gutters from [param from_line] into [param to_line]. Only overwritable gutters will be copied. See [method set_gutter_overwritable]. */
        mergeGutters(fromLine: int64, toLine: int64): void
        
        /** Set a custom draw callback for the gutter at the given index. [param draw_callback] must take the following arguments: A line index [int], a gutter index [int], and an area [Rect2]. This callback only works when the gutter type is [constant GUTTER_TYPE_CUSTOM] (see [method set_gutter_type]). */
        setGutterCustomDraw(column: int64, drawCallback: Callable): void
        
        /** Returns the total width of all gutters and internal padding. */
        getTotalGutterWidth(): int64
        
        /** Sets the metadata for [param gutter] on [param line] to [param metadata]. */
        setLineGutterMetadata(line: int64, gutter: int64, metadata: any): void
        
        /** Returns the metadata currently in [param gutter] at [param line]. */
        getLineGutterMetadata(line: int64, gutter: int64): any
        
        /** Sets the text for [param gutter] on [param line] to [param text]. This only works when the gutter type is [constant GUTTER_TYPE_STRING] (see [method set_gutter_type]). */
        setLineGutterText(line: int64, gutter: int64, text: string): void
        
        /** Returns the text currently in [param gutter] at [param line]. This only works when the gutter type is [constant GUTTER_TYPE_STRING] (see [method set_gutter_type]). */
        getLineGutterText(line: int64, gutter: int64): string
        
        /** Sets the icon for [param gutter] on [param line] to [param icon]. This only works when the gutter type is [constant GUTTER_TYPE_ICON] (see [method set_gutter_type]). */
        setLineGutterIcon(line: int64, gutter: int64, icon: Texture2D): void
        
        /** Returns the icon currently in [param gutter] at [param line]. This only works when the gutter type is [constant GUTTER_TYPE_ICON] (see [method set_gutter_type]). */
        getLineGutterIcon(line: int64, gutter: int64): null | Texture2D
        
        /** Sets the color for [param gutter] on [param line] to [param color]. */
        setLineGutterItemColor(line: int64, gutter: int64, color: Color): void
        
        /** Returns the color currently in [param gutter] at [param line]. */
        getLineGutterItemColor(line: int64, gutter: int64): Color
        
        /** If [param clickable] is `true`, makes the [param gutter] on the given [param line] clickable. This is like [method set_gutter_clickable], but for a single line. If [method is_gutter_clickable] is `true`, this will not have any effect. See [method is_line_gutter_clickable] and [signal gutter_clicked]. */
        setLineGutterClickable(line: int64, gutter: int64, clickable: boolean): void
        
        /** Returns `true` if the gutter at the given index on the given line is clickable. See [method set_line_gutter_clickable]. */
        isLineGutterClickable(line: int64, gutter: int64): boolean
        
        /** Sets the custom background color of the given line. If transparent, this color is applied on top of the default background color (See [theme_item background_color]). If set to `Color(0, 0, 0, 0)`, no additional color is applied. */
        setLineBackgroundColor(line: int64, color: Color): void
        
        /** Returns the custom background color of the given line. If no color is set, returns `Color(0, 0, 0, 0)`. */
        getLineBackgroundColor(line: int64): Color
        
        /** Returns the [PopupMenu] of this [TextEdit]. By default, this menu is displayed when right-clicking on the [TextEdit].  
         *  You can add custom menu items or remove standard ones. Make sure your IDs don't conflict with the standard ones (see [enum MenuItems]). For example:  
         *    
         *  **Warning:** This is a required internal node, removing and freeing it may cause a crash. If you wish to hide it or any of its children, use their [member Window.visible] property.  
         */
        getMenu(): null | PopupMenu
        
        /** Returns `true` if the menu is visible. Use this instead of `get_menu().visible` to improve performance (so the creation of the menu is avoided). See [method get_menu]. */
        isMenuVisible(): boolean
        
        /** Executes a given action as defined in the [enum MenuItems] enum. */
        menuOption(option: int64): void
        
        /** This method does nothing. */
        adjustCaretsAfterEdit(caret: int64, fromLine: int64, fromCol: int64, toLine: int64, toCol: int64): void
        
        /** Returns a list of caret indexes in their edit order, this done from bottom to top. Edit order refers to the way actions such as [method insert_text_at_caret] are applied. */
        getCaretIndexEditOrder(): PackedInt32Array
        
        /** Returns the original start line of the selection. */
        getSelectionLine(caretIndex?: int64 /* = 0 */): int64
        
        /** Returns the original start column of the selection. */
        getSelectionColumn(caretIndex?: int64 /* = 0 */): int64
        
        /** String value of the [TextEdit]. */
        get text(): string
        set text(value: string)
        
        /** Text shown when the [TextEdit] is empty. It is **not** the [TextEdit]'s default value (see [member text]). */
        get placeholderText(): string
        set placeholderText(value: string)
        
        /** If `false`, existing text cannot be modified and new text cannot be added. */
        get editable(): boolean
        set editable(value: boolean)
        
        /** If `true`, a right-click displays the context menu. */
        get contextMenuEnabled(): boolean
        set contextMenuEnabled(value: boolean)
        
        /** If `true`, "Emoji and Symbols" menu is enabled. */
        get emojiMenuEnabled(): boolean
        set emojiMenuEnabled(value: boolean)
        
        /** If `true` and [member caret_mid_grapheme] is `false`, backspace deletes an entire composite character such as ❤️‍🩹, instead of deleting part of the composite character. */
        get backspaceDeletesCompositeCharacterEnabled(): boolean
        set backspaceDeletesCompositeCharacterEnabled(value: boolean)
        
        /** If `true`, shortcut keys for context menu items are enabled, even if the context menu is disabled. */
        get shortcutKeysEnabled(): boolean
        set shortcutKeysEnabled(value: boolean)
        
        /** If `true`, text can be selected.  
         *  If `false`, text can not be selected by the user or by the [method select] or [method select_all] methods.  
         */
        get selectingEnabled(): boolean
        set selectingEnabled(value: boolean)
        
        /** If `true`, the selected text will be deselected when focus is lost. */
        get deselectOnFocusLossEnabled(): boolean
        set deselectOnFocusLossEnabled(value: boolean)
        
        /** If `true`, allow drag and drop of selected text. Text can still be dropped from other sources. */
        get dragAndDropSelectionEnabled(): boolean
        set dragAndDropSelectionEnabled(value: boolean)
        
        /** If `true`, the native virtual keyboard is enabled on platforms that support it. */
        get virtualKeyboardEnabled(): boolean
        set virtualKeyboardEnabled(value: boolean)
        
        /** If `true`, the native virtual keyboard is shown on focus events on platforms that support it. */
        get virtualKeyboardShowOnFocus(): boolean
        set virtualKeyboardShowOnFocus(value: boolean)
        
        /** If `false`, using middle mouse button to paste clipboard will be disabled.  
         *      
         *  **Note:** This method is only implemented on Linux.  
         */
        get middleMousePasteEnabled(): boolean
        set middleMousePasteEnabled(value: boolean)
        
        /** If `true`, copying or cutting without a selection is performed on all lines with a caret. Otherwise, copy and cut require a selection. */
        get emptySelectionClipboardEnabled(): boolean
        set emptySelectionClipboardEnabled(value: boolean)
        
        /** Sets the line wrapping mode to use. */
        get wrapMode(): int64
        set wrapMode(value: int64)
        
        /** If [member wrap_mode] is set to [constant LINE_WRAPPING_BOUNDARY], sets text wrapping mode. To see how each mode behaves, see [enum TextServer.AutowrapMode]. */
        get autowrapMode(): int64
        set autowrapMode(value: int64)
        
        /** If `true`, all wrapped lines are indented to the same amount as the unwrapped line. */
        get indentWrappedLines(): boolean
        set indentWrappedLines(value: boolean)
        
        /** If `true`, [member ProjectSettings.input/ui_text_indent] input `Tab` character, otherwise it moves keyboard focus to the next [Control] in the scene. */
        get tabInputMode(): boolean
        set tabInputMode(value: boolean)
        
        /** Scroll smoothly over the text rather than jumping to the next location. */
        get scrollSmooth(): boolean
        set scrollSmooth(value: boolean)
        
        /** Sets the scroll speed with the minimap or when [member scroll_smooth] is enabled. */
        get scrollVScrollSpeed(): float64
        set scrollVScrollSpeed(value: float64)
        
        /** Allow scrolling past the last line into "virtual" space. */
        get scrollPastEndOfFile(): boolean
        set scrollPastEndOfFile(value: boolean)
        
        /** If there is a vertical scrollbar, this determines the current vertical scroll value in line numbers, starting at 0 for the top line. */
        get scrollVertical(): float64
        set scrollVertical(value: float64)
        
        /** If there is a horizontal scrollbar, this determines the current horizontal scroll value in pixels. */
        get scrollHorizontal(): int64
        set scrollHorizontal(value: int64)
        
        /** If `true`, [TextEdit] will disable vertical scroll and fit minimum height to the number of visible lines. When both this property and [member scroll_fit_content_width] are `true`, no scrollbars will be displayed. */
        get scrollFitContentHeight(): boolean
        set scrollFitContentHeight(value: boolean)
        
        /** If `true`, [TextEdit] will disable horizontal scroll and fit minimum width to the widest line in the text. When both this property and [member scroll_fit_content_height] are `true`, no scrollbars will be displayed. */
        get scrollFitContentWidth(): boolean
        set scrollFitContentWidth(value: boolean)
        
        /** If `true`, a minimap is shown, providing an outline of your source code. The minimap uses a fixed-width text size. */
        get minimapDraw(): boolean
        set minimapDraw(value: boolean)
        
        /** The width, in pixels, of the minimap. */
        get minimapWidth(): int64
        set minimapWidth(value: int64)
        
        /** Set the type of caret to draw. */
        get caretType(): int64
        set caretType(value: int64)
        
        /** If `true`, makes the caret blink. */
        get caretBlink(): boolean
        set caretBlink(value: boolean)
        
        /** The interval at which the caret blinks (in seconds). */
        get caretBlinkInterval(): float64
        set caretBlinkInterval(value: float64)
        
        /** If `true`, caret will be visible when [member editable] is disabled. */
        get caretDrawWhenEditableDisabled(): boolean
        set caretDrawWhenEditableDisabled(value: boolean)
        
        /** If `true`, a right-click moves the caret at the mouse position before displaying the context menu.  
         *  If `false`, the context menu ignores mouse location.  
         */
        get caretMoveOnRightClick(): boolean
        set caretMoveOnRightClick(value: boolean)
        
        /** Allow moving caret, selecting and removing the individual composite character components.  
         *      
         *  **Note:** [kbd]Backspace[/kbd] is always removing individual composite character components.  
         */
        get caretMidGrapheme(): boolean
        set caretMidGrapheme(value: boolean)
        
        /** If `true`, multiple carets are allowed. Left-clicking with [kbd]Alt[/kbd] adds a new caret. See [method add_caret] and [method get_caret_count]. */
        get caretMultiple(): boolean
        set caretMultiple(value: boolean)
        
        /** If `false`, using [kbd]Ctrl + Left[/kbd] or [kbd]Ctrl + Right[/kbd] ([kbd]Cmd + Left[/kbd] or [kbd]Cmd + Right[/kbd] on macOS) bindings will stop moving caret only if a space or punctuation is detected. If `true`, it will also stop the caret if a character is part of `!"#$%&'()*+,-./:;<=>?@[\]^`{|}~`, the Unicode General Punctuation table, or the Unicode CJK Punctuation table. Useful for subword moving. This behavior also will be applied to the behavior of text selection. */
        get useDefaultWordSeparators(): boolean
        set useDefaultWordSeparators(value: boolean)
        
        /** If `false`, using [kbd]Ctrl + Left[/kbd] or [kbd]Ctrl + Right[/kbd] ([kbd]Cmd + Left[/kbd] or [kbd]Cmd + Right[/kbd] on macOS) bindings will use the behavior of [member use_default_word_separators]. If `true`, it will also stop the caret if a character within [member custom_word_separators] is detected. Useful for subword moving. This behavior also will be applied to the behavior of text selection. */
        get useCustomWordSeparators(): boolean
        set useCustomWordSeparators(value: boolean)
        
        /** The characters to consider as word delimiters if [member use_custom_word_separators] is `true`. The characters should be defined without separation, for example `#_!`. */
        get customWordSeparators(): string
        set customWordSeparators(value: string)
        
        /** The syntax highlighter to use.  
         *      
         *  **Note:** A [SyntaxHighlighter] instance should not be used across multiple [TextEdit] nodes.  
         */
        get syntaxHighlighter(): null | SyntaxHighlighter
        set syntaxHighlighter(value: null | SyntaxHighlighter)
        
        /** If `true`, all occurrences of the selected text will be highlighted. */
        get highlightAllOccurrences(): boolean
        set highlightAllOccurrences(value: boolean)
        
        /** If `true`, the line containing the cursor is highlighted. */
        get highlightCurrentLine(): boolean
        set highlightCurrentLine(value: boolean)
        
        /** If `true`, control characters are displayed. */
        get drawControlChars(): boolean
        set drawControlChars(value: boolean)
        
        /** If `true`, the "tab" character will have a visible representation. */
        get drawTabs(): boolean
        set drawTabs(value: boolean)
        
        /** If `true`, the "space" character will have a visible representation. */
        get drawSpaces(): boolean
        set drawSpaces(value: boolean)
        
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
        
        /** Emitted when [method clear] is called or [member text] is set. */
        readonly textSet: Signal<() => void>
        
        /** Emitted when the text changes. */
        readonly textChanged: Signal<() => void>
        
        /** Emitted immediately when the text changes.  
         *  When text is added [param from_line] will be less than [param to_line]. On a remove [param to_line] will be less than [param from_line].  
         */
        readonly linesEditedFrom: Signal<(fromLine: int64, toLine: int64) => void>
        
        /** Emitted when any caret changes position. */
        readonly caretChanged: Signal<() => void>
        
        /** Emitted when a gutter is clicked. */
        readonly gutterClicked: Signal<(line: int64, gutter: int64) => void>
        
        /** Emitted when a gutter is added. */
        readonly gutterAdded: Signal<() => void>
        
        /** Emitted when a gutter is removed. */
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
        
        /** Returns the text writing direction inferred by the BiDi algorithm. */
        getInferredDirection(): TextServer.Direction
        
        /** Overrides BiDi for the structured text.  
         *  Override ranges should cover full source text without overlaps. BiDi algorithm will be used on each range separately.  
         */
        setBidiOverride(override: GArray): void
        
        /** Adds text span and font to draw it. */
        addString(text: string, font: Font, fontSize: int64, language?: string /* = '' */, meta?: any /* = <any> {} */): boolean
        
        /** Adds inline object to the text buffer, [param key] must be unique. In the text, object is represented as [param length] object replacement characters. */
        addObject(key: any, size: Vector2, inlineAlign?: InlineAlignment /* = 5 */, length?: int64 /* = 1 */, baseline?: float64 /* = 0 */): boolean
        
        /** Sets new size and alignment of embedded object. */
        resizeObject(key: any, size: Vector2, inlineAlign?: InlineAlignment /* = 5 */, baseline?: float64 /* = 0 */): boolean
        
        /** Aligns text to the given tab-stops. */
        tabAlign(tabStops: PackedFloat32Array | float32[]): void
        
        /** Returns array of inline objects. */
        getObjects(): GArray
        
        /** Returns bounding rectangle of the inline object. */
        getObjectRect(key: any): Rect2
        
        /** Returns size of the bounding box of the text. */
        getSize(): Vector2
        
        /** Returns TextServer buffer RID. */
        getRid(): Rid
        
        /** Returns the text ascent (number of pixels above the baseline for horizontal layout or to the left of baseline for vertical). */
        getLineAscent(): float64
        
        /** Returns the text descent (number of pixels below the baseline for horizontal layout or to the right of baseline for vertical). */
        getLineDescent(): float64
        
        /** Returns width (for horizontal layout) or height (for vertical) of the text. */
        getLineWidth(): float64
        
        /** Returns pixel offset of the underline below the baseline. */
        getLineUnderlinePosition(): float64
        
        /** Returns thickness of the underline. */
        getLineUnderlineThickness(): float64
        
        /** Draw text into a canvas item at a given position, with [param color]. [param pos] specifies the top left corner of the bounding box. If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used. */
        draw(canvas: Rid, pos: Vector2, color?: Color /* = new Color(1, 1, 1, 1) */, oversampling?: float64 /* = 0 */): void
        
        /** Draw text into a canvas item at a given position, with [param color]. [param pos] specifies the top left corner of the bounding box. If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used. */
        drawOutline(canvas: Rid, pos: Vector2, outlineSize?: int64 /* = 1 */, color?: Color /* = new Color(1, 1, 1, 1) */, oversampling?: float64 /* = 0 */): void
        
        /** Returns caret character offset at the specified pixel offset at the baseline. This function always returns a valid position. */
        hitTest(coords: float64): int64
        
        /** Text writing direction. */
        get direction(): int64
        set direction(value: int64)
        
        /** Text orientation. */
        get orientation(): int64
        set orientation(value: int64)
        
        /** If set to `true` text will display invalid characters. */
        get preserveInvalid(): boolean
        set preserveInvalid(value: boolean)
        
        /** If set to `true` text will display control characters. */
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
        
        /** Sets the clipping behavior when the text exceeds the text line's set width. See [enum TextServer.OverrunBehavior] for a description of all modes. */
        get textOverrunBehavior(): int64
        set textOverrunBehavior(value: int64)
        
        /** Ellipsis character used for text clipping. */
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
        get font(): null | Font
        set font(value: null | Font)
        
        /** Font size of the [TextMesh]'s text. */
        get fontSize(): int64
        set fontSize(value: int64)
        
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
        
        /** Line fill alignment rules. See [enum TextServer.JustificationFlag] for more information. */
        get justificationFlags(): int64
        set justificationFlags(value: int64)
        
        /** The size of one pixel's width on the text to scale it in 3D. */
        get pixelSize(): float64
        set pixelSize(value: float64)
        
        /** Step (in pixels) used to approximate Bézier curves. */
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
        
        /** Base text writing direction. */
        get textDirection(): int64
        set textDirection(value: int64)
        
        /** Language code used for text shaping algorithms, if left empty current locale is used instead. */
        get language(): string
        set language(value: string)
        
        /** Set BiDi algorithm override for the structured text. */
        get structuredTextBidiOverride(): int64
        set structuredTextBidiOverride(value: int64)
        
        /** Set additional options for BiDi override. */
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
        
        /** Returns the text writing direction inferred by the BiDi algorithm. */
        getInferredDirection(): TextServer.Direction
        
        /** Overrides BiDi for the structured text.  
         *  Override ranges should cover full source text without overlaps. BiDi algorithm will be used on each range separately.  
         */
        setBidiOverride(override: GArray): void
        
        /** Sets drop cap, overrides previously set drop cap. Drop cap (dropped capital) is a decorative element at the beginning of a paragraph that is larger than the rest of the text. */
        setDropcap(text: string, font: Font, fontSize: int64, dropcapMargins?: Rect2 /* = new Rect2(0, 0, 0, 0) */, language?: string /* = '' */): boolean
        
        /** Removes dropcap. */
        clearDropcap(): void
        
        /** Adds text span and font to draw it. */
        addString(text: string, font: Font, fontSize: int64, language?: string /* = '' */, meta?: any /* = <any> {} */): boolean
        
        /** Adds inline object to the text buffer, [param key] must be unique. In the text, object is represented as [param length] object replacement characters. */
        addObject(key: any, size: Vector2, inlineAlign?: InlineAlignment /* = 5 */, length?: int64 /* = 1 */, baseline?: float64 /* = 0 */): boolean
        
        /** Sets new size and alignment of embedded object. */
        resizeObject(key: any, size: Vector2, inlineAlign?: InlineAlignment /* = 5 */, baseline?: float64 /* = 0 */): boolean
        
        /** Aligns paragraph to the given tab-stops. */
        tabAlign(tabStops: PackedFloat32Array | float32[]): void
        
        /** Returns the size of the bounding box of the paragraph, without line breaks. */
        getNonWrappedSize(): Vector2
        
        /** Returns the size of the bounding box of the paragraph. */
        getSize(): Vector2
        
        /** Returns TextServer full string buffer RID. */
        getRid(): Rid
        
        /** Returns TextServer line buffer RID. */
        getLineRid(line: int64): Rid
        
        /** Returns drop cap text buffer RID. */
        getDropcapRid(): Rid
        
        /** Returns the character range of the paragraph. */
        getRange(): Vector2I
        
        /** Returns number of lines in the paragraph. */
        getLineCount(): int64
        
        /** Returns array of inline objects in the line. */
        getLineObjects(line: int64): GArray
        
        /** Returns bounding rectangle of the inline object. */
        getLineObjectRect(line: int64, key: any): Rect2
        
        /** Returns size of the bounding box of the line of text. Returned size is rounded up. */
        getLineSize(line: int64): Vector2
        
        /** Returns character range of the line. */
        getLineRange(line: int64): Vector2I
        
        /** Returns the text line ascent (number of pixels above the baseline for horizontal layout or to the left of baseline for vertical). */
        getLineAscent(line: int64): float64
        
        /** Returns the text line descent (number of pixels below the baseline for horizontal layout or to the right of baseline for vertical). */
        getLineDescent(line: int64): float64
        
        /** Returns width (for horizontal layout) or height (for vertical) of the line of text. */
        getLineWidth(line: int64): float64
        
        /** Returns pixel offset of the underline below the baseline. */
        getLineUnderlinePosition(line: int64): float64
        
        /** Returns thickness of the underline. */
        getLineUnderlineThickness(line: int64): float64
        
        /** Returns drop cap bounding box size. */
        getDropcapSize(): Vector2
        
        /** Returns number of lines used by dropcap. */
        getDropcapLines(): int64
        
        /** Draw all lines of the text and drop cap into a canvas item at a given position, with [param color]. [param pos] specifies the top left corner of the bounding box. If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used. */
        draw(canvas: Rid, pos: Vector2, color?: Color /* = new Color(1, 1, 1, 1) */, dcColor?: Color /* = new Color(1, 1, 1, 1) */, oversampling?: float64 /* = 0 */): void
        
        /** Draw outlines of all lines of the text and drop cap into a canvas item at a given position, with [param color]. [param pos] specifies the top left corner of the bounding box. If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used. */
        drawOutline(canvas: Rid, pos: Vector2, outlineSize?: int64 /* = 1 */, color?: Color /* = new Color(1, 1, 1, 1) */, dcColor?: Color /* = new Color(1, 1, 1, 1) */, oversampling?: float64 /* = 0 */): void
        
        /** Draw single line of text into a canvas item at a given position, with [param color]. [param pos] specifies the top left corner of the bounding box. If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used. */
        drawLine(canvas: Rid, pos: Vector2, line: int64, color?: Color /* = new Color(1, 1, 1, 1) */, oversampling?: float64 /* = 0 */): void
        
        /** Draw outline of the single line of text into a canvas item at a given position, with [param color]. [param pos] specifies the top left corner of the bounding box. If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used. */
        drawLineOutline(canvas: Rid, pos: Vector2, line: int64, outlineSize?: int64 /* = 1 */, color?: Color /* = new Color(1, 1, 1, 1) */, oversampling?: float64 /* = 0 */): void
        
        /** Draw drop cap into a canvas item at a given position, with [param color]. [param pos] specifies the top left corner of the bounding box. If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used. */
        drawDropcap(canvas: Rid, pos: Vector2, color?: Color /* = new Color(1, 1, 1, 1) */, oversampling?: float64 /* = 0 */): void
        
        /** Draw drop cap outline into a canvas item at a given position, with [param color]. [param pos] specifies the top left corner of the bounding box. If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used. */
        drawDropcapOutline(canvas: Rid, pos: Vector2, outlineSize?: int64 /* = 1 */, color?: Color /* = new Color(1, 1, 1, 1) */, oversampling?: float64 /* = 0 */): void
        
        /** Returns caret character offset at the specified coordinates. This function always returns a valid position. */
        hitTest(coords: Vector2): int64
        
        /** Text writing direction. */
        get direction(): int64
        set direction(value: int64)
        
        /** Custom punctuation character list, used for word breaking. If set to empty string, server defaults are used. */
        get customPunctuation(): string
        set customPunctuation(value: string)
        
        /** Text orientation. */
        get orientation(): int64
        set orientation(value: int64)
        
        /** If set to `true` text will display invalid characters. */
        get preserveInvalid(): boolean
        set preserveInvalid(value: boolean)
        
        /** If set to `true` text will display control characters. */
        get preserveControl(): boolean
        set preserveControl(value: boolean)
        
        /** Paragraph horizontal alignment. */
        get alignment(): int64
        set alignment(value: int64)
        
        /** Line breaking rules. For more info see [TextServer]. */
        get breakFlags(): int64
        set breakFlags(value: int64)
        
        /** Line fill alignment rules. See [enum TextServer.JustificationFlag] for more information. */
        get justificationFlags(): int64
        set justificationFlags(value: int64)
        
        /** Sets the clipping behavior when the text exceeds the paragraph's set width. See [enum TextServer.OverrunBehavior] for a description of all modes. */
        get textOverrunBehavior(): int64
        set textOverrunBehavior(value: int64)
        
        /** Ellipsis character used for text clipping. */
        get ellipsisChar(): string
        set ellipsisChar(value: string)
        
        /** Paragraph width. */
        get width(): float64
        set width(value: float64)
        
        /** Limits the lines of text shown. */
        get maxLinesVisible(): int64
        set maxLinesVisible(value: int64)
        
        /** Additional vertical spacing between lines (in pixels), spacing is added to line descent. This value can be negative. */
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
            BreakTrimStartEdgeSpaces = 64,
            BreakTrimEndEdgeSpaces = 128,
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
            OverrunTrimEllipsisForce = 5,
            OverrunTrimWordEllipsisForce = 6,
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
         *  LCD subpixel layout is determined by the value of the [member ProjectSettings.gui/theme/lcd_subpixel_layout] setting.  
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
        
        /** Remove spaces and line break characters from the start of broken line segments.  
         *  E.g, after line breaking, the second segment of the following text `test  \n  next`, is `next` if the flag is set, and `  next` if it is not.  
         */
        static readonly BREAK_TRIM_START_EDGE_SPACES = 64
        
        /** Remove spaces and line break characters from the end of broken line segments.  
         *  E.g, after line breaking, the first segment of the following text `test  \n  next`, is `test` if the flag is set, and `test  \n` if it is not.  
         */
        static readonly BREAK_TRIM_END_EDGE_SPACES = 128
        
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
        
        /** Trims the text per character and adds an ellipsis to indicate that parts are hidden if trimmed text is 6 characters or longer. */
        static readonly OVERRUN_TRIM_ELLIPSIS = 3
        
        /** Trims the text per word and adds an ellipsis to indicate that parts are hidden if trimmed text is 6 characters or longer. */
        static readonly OVERRUN_TRIM_WORD_ELLIPSIS = 4
        
        /** Trims the text per character and adds an ellipsis to indicate that parts are hidden regardless of trimmed text length. */
        static readonly OVERRUN_TRIM_ELLIPSIS_FORCE = 5
        
        /** Trims the text per word and adds an ellipsis to indicate that parts are hidden regardless of trimmed text length. */
        static readonly OVERRUN_TRIM_WORD_ELLIPSIS_FORCE = 6
        
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
        
        /** Returns `true` if the server supports a feature. */
        hasFeature(feature: TextServer.Feature): boolean
        
        /** Returns the name of the server interface. */
        getName(): string
        
        /** Returns text server features, see [enum Feature]. */
        getFeatures(): int64
        
        /** Loads optional TextServer database (e.g. ICU break iterators and dictionaries).  
         *      
         *  **Note:** This function should be called before any other TextServer functions used, otherwise it won't have any effect.  
         */
        loadSupportData(fileName: string): boolean
        
        /** Returns default TextServer database (e.g. ICU break iterators and dictionaries) filename. */
        getSupportDataFileName(): string
        
        /** Returns TextServer database (e.g. ICU break iterators and dictionaries) description. */
        getSupportDataInfo(): string
        
        /** Saves optional TextServer database (e.g. ICU break iterators and dictionaries) to the file.  
         *      
         *  **Note:** This function is used by during project export, to include TextServer database.  
         */
        saveSupportData(fileName: string): boolean
        
        /** Returns default TextServer database (e.g. ICU break iterators and dictionaries). */
        getSupportData(): PackedByteArray
        
        /** Returns `true` if locale is right-to-left. */
        isLocaleRightToLeft(locale: string): boolean
        
        /** Converts readable feature, variation, script, or language name to OpenType tag. */
        nameToTag(name: string): int64
        
        /** Converts OpenType tag to readable feature, variation, script, or language name. */
        tagToName(tag: int64): string
        
        /** Returns `true` if [param rid] is valid resource owned by this text server. */
        has(rid: Rid): boolean
        
        /** Frees an object created by this [TextServer]. */
        freeRid(rid: Rid): void
        
        /** Creates a new, empty font cache entry resource. To free the resulting resource, use the [method free_rid] method. */
        createFont(): Rid
        
        /** Creates a new variation existing font which is reusing the same glyph cache and font data. To free the resulting resource, use the [method free_rid] method. */
        createFontLinkedVariation(fontRid: Rid): Rid
        
        /** Sets font source data, e.g contents of the dynamic font source file. */
        fontSetData(fontRid: Rid, data: PackedByteArray | byte[] | ArrayBuffer): void
        
        /** Sets an active face index in the TrueType / OpenType collection. */
        fontSetFaceIndex(fontRid: Rid, faceIndex: int64): void
        
        /** Returns an active face index in the TrueType / OpenType collection. */
        fontGetFaceIndex(fontRid: Rid): int64
        
        /** Returns number of faces in the TrueType / OpenType collection. */
        fontGetFaceCount(fontRid: Rid): int64
        
        /** Sets the font style flags, see [enum FontStyle].  
         *      
         *  **Note:** This value is used for font matching only and will not affect font rendering. Use [method font_set_face_index], [method font_set_variation_coordinates], [method font_set_embolden], or [method font_set_transform] instead.  
         */
        fontSetStyle(fontRid: Rid, style: TextServer.FontStyle): void
        
        /** Returns font style flags, see [enum FontStyle]. */
        fontGetStyle(fontRid: Rid): TextServer.FontStyle
        
        /** Sets the font family name. */
        fontSetName(fontRid: Rid, name: string): void
        
        /** Returns font family name. */
        fontGetName(fontRid: Rid): string
        
        /** Returns [Dictionary] with OpenType font name strings (localized font names, version, description, license information, sample text, etc.). */
        fontGetOtNameStrings(fontRid: Rid): GDictionary
        
        /** Sets the font style name. */
        fontSetStyleName(fontRid: Rid, name: string): void
        
        /** Returns font style name. */
        fontGetStyleName(fontRid: Rid): string
        
        /** Sets weight (boldness) of the font. A value in the `100...999` range, normal font weight is `400`, bold font weight is `700`.  
         *      
         *  **Note:** This value is used for font matching only and will not affect font rendering. Use [method font_set_face_index], [method font_set_variation_coordinates], or [method font_set_embolden] instead.  
         */
        fontSetWeight(fontRid: Rid, weight: int64): void
        
        /** Returns weight (boldness) of the font. A value in the `100...999` range, normal font weight is `400`, bold font weight is `700`. */
        fontGetWeight(fontRid: Rid): int64
        
        /** Sets font stretch amount, compared to a normal width. A percentage value between `50%` and `200%`.  
         *      
         *  **Note:** This value is used for font matching only and will not affect font rendering. Use [method font_set_face_index], [method font_set_variation_coordinates], or [method font_set_transform] instead.  
         */
        fontSetStretch(fontRid: Rid, weight: int64): void
        
        /** Returns font stretch amount, compared to a normal width. A percentage value between `50%` and `200%`. */
        fontGetStretch(fontRid: Rid): int64
        
        /** Sets font anti-aliasing mode. */
        fontSetAntialiasing(fontRid: Rid, antialiasing: TextServer.FontAntialiasing): void
        
        /** Returns font anti-aliasing mode. */
        fontGetAntialiasing(fontRid: Rid): TextServer.FontAntialiasing
        
        /** If set to `true`, embedded font bitmap loading is disabled (bitmap-only and color fonts ignore this property). */
        fontSetDisableEmbeddedBitmaps(fontRid: Rid, disableEmbeddedBitmaps: boolean): void
        
        /** Returns whether the font's embedded bitmap loading is disabled. */
        fontGetDisableEmbeddedBitmaps(fontRid: Rid): boolean
        
        /** If set to `true` font texture mipmap generation is enabled. */
        fontSetGenerateMipmaps(fontRid: Rid, generateMipmaps: boolean): void
        
        /** Returns `true` if font texture mipmap generation is enabled. */
        fontGetGenerateMipmaps(fontRid: Rid): boolean
        
        /** If set to `true`, glyphs of all sizes are rendered using single multichannel signed distance field generated from the dynamic font vector data. MSDF rendering allows displaying the font at any scaling factor without blurriness, and without incurring a CPU cost when the font size changes (since the font no longer needs to be rasterized on the CPU). As a downside, font hinting is not available with MSDF. The lack of font hinting may result in less crisp and less readable fonts at small sizes.  
         *      
         *  **Note:** MSDF font rendering does not render glyphs with overlapping shapes correctly. Overlapping shapes are not valid per the OpenType standard, but are still commonly found in many font files, especially those converted by Google Fonts. To avoid issues with overlapping glyphs, consider downloading the font file directly from the type foundry instead of relying on Google Fonts.  
         */
        fontSetMultichannelSignedDistanceField(fontRid: Rid, msdf: boolean): void
        
        /** Returns `true` if glyphs of all sizes are rendered using single multichannel signed distance field generated from the dynamic font vector data. */
        fontIsMultichannelSignedDistanceField(fontRid: Rid): boolean
        
        /** Sets the width of the range around the shape between the minimum and maximum representable signed distance. */
        fontSetMsdfPixelRange(fontRid: Rid, msdfPixelRange: int64): void
        
        /** Returns the width of the range around the shape between the minimum and maximum representable signed distance. */
        fontGetMsdfPixelRange(fontRid: Rid): int64
        
        /** Sets source font size used to generate MSDF textures. */
        fontSetMsdfSize(fontRid: Rid, msdfSize: int64): void
        
        /** Returns source font size used to generate MSDF textures. */
        fontGetMsdfSize(fontRid: Rid): int64
        
        /** Sets bitmap font fixed size. If set to value greater than zero, same cache entry will be used for all font sizes. */
        fontSetFixedSize(fontRid: Rid, fixedSize: int64): void
        
        /** Returns bitmap font fixed size. */
        fontGetFixedSize(fontRid: Rid): int64
        
        /** Sets bitmap font scaling mode. This property is used only if `fixed_size` is greater than zero. */
        fontSetFixedSizeScaleMode(fontRid: Rid, fixedSizeScaleMode: TextServer.FixedSizeScaleMode): void
        
        /** Returns bitmap font scaling mode. */
        fontGetFixedSizeScaleMode(fontRid: Rid): TextServer.FixedSizeScaleMode
        
        /** If set to `true`, system fonts can be automatically used as fallbacks. */
        fontSetAllowSystemFallback(fontRid: Rid, allowSystemFallback: boolean): void
        
        /** Returns `true` if system fonts can be automatically used as fallbacks. */
        fontIsAllowSystemFallback(fontRid: Rid): boolean
        
        /** Frees all automatically loaded system fonts. */
        fontClearSystemFallbackCache(): void
        
        /** If set to `true` auto-hinting is preferred over font built-in hinting. */
        fontSetForceAutohinter(fontRid: Rid, forceAutohinter: boolean): void
        
        /** Returns `true` if auto-hinting is supported and preferred over font built-in hinting. Used by dynamic fonts only. */
        fontIsForceAutohinter(fontRid: Rid): boolean
        
        /** If set to `true`, color modulation is applied when drawing colored glyphs, otherwise it's applied to the monochrome glyphs only. */
        fontSetModulateColorGlyphs(fontRid: Rid, forceAutohinter: boolean): void
        
        /** Returns `true`, if color modulation is applied when drawing colored glyphs. */
        fontIsModulateColorGlyphs(fontRid: Rid): boolean
        
        /** Sets font hinting mode. Used by dynamic fonts only. */
        fontSetHinting(fontRid: Rid, hinting: TextServer.Hinting): void
        
        /** Returns the font hinting mode. Used by dynamic fonts only. */
        fontGetHinting(fontRid: Rid): TextServer.Hinting
        
        /** Sets font subpixel glyph positioning mode. */
        fontSetSubpixelPositioning(fontRid: Rid, subpixelPositioning: TextServer.SubpixelPositioning): void
        
        /** Returns font subpixel glyph positioning mode. */
        fontGetSubpixelPositioning(fontRid: Rid): TextServer.SubpixelPositioning
        
        /** Sets glyph position rounding behavior. If set to `true`, when aligning glyphs to the pixel boundaries rounding remainders are accumulated to ensure more uniform glyph distribution. This setting has no effect if subpixel positioning is enabled. */
        fontSetKeepRoundingRemainders(fontRid: Rid, keepRoundingRemainders: boolean): void
        
        /** Returns glyph position rounding behavior. If set to `true`, when aligning glyphs to the pixel boundaries rounding remainders are accumulated to ensure more uniform glyph distribution. This setting has no effect if subpixel positioning is enabled. */
        fontGetKeepRoundingRemainders(fontRid: Rid): boolean
        
        /** Sets font embolden strength. If [param strength] is not equal to zero, emboldens the font outlines. Negative values reduce the outline thickness. */
        fontSetEmbolden(fontRid: Rid, strength: float64): void
        
        /** Returns font embolden strength. */
        fontGetEmbolden(fontRid: Rid): float64
        
        /** Sets the spacing for [param spacing] (see [enum TextServer.SpacingType]) to [param value] in pixels (not relative to the font size). */
        fontSetSpacing(fontRid: Rid, spacing: TextServer.SpacingType, value: int64): void
        
        /** Returns the spacing for [param spacing] (see [enum TextServer.SpacingType]) in pixels (not relative to the font size). */
        fontGetSpacing(fontRid: Rid, spacing: TextServer.SpacingType): int64
        
        /** Sets extra baseline offset (as a fraction of font height). */
        fontSetBaselineOffset(fontRid: Rid, baselineOffset: float64): void
        
        /** Returns extra baseline offset (as a fraction of font height). */
        fontGetBaselineOffset(fontRid: Rid): float64
        
        /** Sets 2D transform, applied to the font outlines, can be used for slanting, flipping, and rotating glyphs.  
         *  For example, to simulate italic typeface by slanting, apply the following transform `Transform2D(1.0, slant, 0.0, 1.0, 0.0, 0.0)`.  
         */
        fontSetTransform(fontRid: Rid, transform: Transform2D): void
        
        /** Returns 2D transform applied to the font outlines. */
        fontGetTransform(fontRid: Rid): Transform2D
        
        /** Sets variation coordinates for the specified font cache entry. See [method font_supported_variation_list] for more info. */
        fontSetVariationCoordinates(fontRid: Rid, variationCoordinates: GDictionary): void
        
        /** Returns variation coordinates for the specified font cache entry. See [method font_supported_variation_list] for more info. */
        fontGetVariationCoordinates(fontRid: Rid): GDictionary
        
        /** Deprecated. This method does nothing. */
        fontSetOversampling(fontRid: Rid, oversampling: float64): void
        
        /** Deprecated. This method always returns `1.0`. */
        fontGetOversampling(fontRid: Rid): float64
        
        /** Returns list of the font sizes in the cache. Each size is [Vector2i] with font size and outline size. */
        fontGetSizeCacheList(fontRid: Rid): GArray
        
        /** Removes all font sizes from the cache entry. */
        fontClearSizeCache(fontRid: Rid): void
        
        /** Removes specified font size from the cache entry. */
        fontRemoveSizeCache(fontRid: Rid, size: Vector2I): void
        
        /** Returns font cache information, each entry contains the following fields: `Vector2i size_px` - font size in pixels, `float viewport_oversampling` - viewport oversampling factor, `int glyphs` - number of rendered glyphs, `int textures` - number of used textures, `int textures_size` - size of texture data in bytes. */
        fontGetSizeCacheInfo(fontRid: Rid): GArray
        
        /** Sets the font ascent (number of pixels above the baseline). */
        fontSetAscent(fontRid: Rid, size: int64, ascent: float64): void
        
        /** Returns the font ascent (number of pixels above the baseline). */
        fontGetAscent(fontRid: Rid, size: int64): float64
        
        /** Sets the font descent (number of pixels below the baseline). */
        fontSetDescent(fontRid: Rid, size: int64, descent: float64): void
        
        /** Returns the font descent (number of pixels below the baseline). */
        fontGetDescent(fontRid: Rid, size: int64): float64
        
        /** Sets pixel offset of the underline below the baseline. */
        fontSetUnderlinePosition(fontRid: Rid, size: int64, underlinePosition: float64): void
        
        /** Returns pixel offset of the underline below the baseline. */
        fontGetUnderlinePosition(fontRid: Rid, size: int64): float64
        
        /** Sets thickness of the underline in pixels. */
        fontSetUnderlineThickness(fontRid: Rid, size: int64, underlineThickness: float64): void
        
        /** Returns thickness of the underline in pixels. */
        fontGetUnderlineThickness(fontRid: Rid, size: int64): float64
        
        /** Sets scaling factor of the color bitmap font. */
        fontSetScale(fontRid: Rid, size: int64, scale: float64): void
        
        /** Returns scaling factor of the color bitmap font. */
        fontGetScale(fontRid: Rid, size: int64): float64
        
        /** Returns number of textures used by font cache entry. */
        fontGetTextureCount(fontRid: Rid, size: Vector2I): int64
        
        /** Removes all textures from font cache entry.  
         *      
         *  **Note:** This function will not remove glyphs associated with the texture, use [method font_remove_glyph] to remove them manually.  
         */
        fontClearTextures(fontRid: Rid, size: Vector2I): void
        
        /** Removes specified texture from the cache entry.  
         *      
         *  **Note:** This function will not remove glyphs associated with the texture, remove them manually, using [method font_remove_glyph].  
         */
        fontRemoveTexture(fontRid: Rid, size: Vector2I, textureIndex: int64): void
        
        /** Sets font cache texture image data. */
        fontSetTextureImage(fontRid: Rid, size: Vector2I, textureIndex: int64, image: Image): void
        
        /** Returns font cache texture image data. */
        fontGetTextureImage(fontRid: Rid, size: Vector2I, textureIndex: int64): null | Image
        
        /** Sets array containing glyph packing data. */
        fontSetTextureOffsets(fontRid: Rid, size: Vector2I, textureIndex: int64, offset: PackedInt32Array | int32[]): void
        
        /** Returns array containing glyph packing data. */
        fontGetTextureOffsets(fontRid: Rid, size: Vector2I, textureIndex: int64): PackedInt32Array
        
        /** Returns list of rendered glyphs in the cache entry. */
        fontGetGlyphList(fontRid: Rid, size: Vector2I): PackedInt32Array
        
        /** Removes all rendered glyph information from the cache entry.  
         *      
         *  **Note:** This function will not remove textures associated with the glyphs, use [method font_remove_texture] to remove them manually.  
         */
        fontClearGlyphs(fontRid: Rid, size: Vector2I): void
        
        /** Removes specified rendered glyph information from the cache entry.  
         *      
         *  **Note:** This function will not remove textures associated with the glyphs, use [method font_remove_texture] to remove them manually.  
         */
        fontRemoveGlyph(fontRid: Rid, size: Vector2I, glyph: int64): void
        
        /** Returns glyph advance (offset of the next glyph).  
         *      
         *  **Note:** Advance for glyphs outlines is the same as the base glyph advance and is not saved.  
         */
        fontGetGlyphAdvance(fontRid: Rid, size: int64, glyph: int64): Vector2
        
        /** Sets glyph advance (offset of the next glyph).  
         *      
         *  **Note:** Advance for glyphs outlines is the same as the base glyph advance and is not saved.  
         */
        fontSetGlyphAdvance(fontRid: Rid, size: int64, glyph: int64, advance: Vector2): void
        
        /** Returns glyph offset from the baseline. */
        fontGetGlyphOffset(fontRid: Rid, size: Vector2I, glyph: int64): Vector2
        
        /** Sets glyph offset from the baseline. */
        fontSetGlyphOffset(fontRid: Rid, size: Vector2I, glyph: int64, offset: Vector2): void
        
        /** Returns size of the glyph. */
        fontGetGlyphSize(fontRid: Rid, size: Vector2I, glyph: int64): Vector2
        
        /** Sets size of the glyph. */
        fontSetGlyphSize(fontRid: Rid, size: Vector2I, glyph: int64, glSize: Vector2): void
        
        /** Returns rectangle in the cache texture containing the glyph. */
        fontGetGlyphUVRect(fontRid: Rid, size: Vector2I, glyph: int64): Rect2
        
        /** Sets rectangle in the cache texture containing the glyph. */
        fontSetGlyphUVRect(fontRid: Rid, size: Vector2I, glyph: int64, uVRect: Rect2): void
        
        /** Returns index of the cache texture containing the glyph. */
        fontGetGlyphTextureIdx(fontRid: Rid, size: Vector2I, glyph: int64): int64
        
        /** Sets index of the cache texture containing the glyph. */
        fontSetGlyphTextureIdx(fontRid: Rid, size: Vector2I, glyph: int64, textureIdx: int64): void
        
        /** Returns resource ID of the cache texture containing the glyph.  
         *      
         *  **Note:** If there are pending glyphs to render, calling this function might trigger the texture cache update.  
         */
        fontGetGlyphTextureRid(fontRid: Rid, size: Vector2I, glyph: int64): Rid
        
        /** Returns size of the cache texture containing the glyph.  
         *      
         *  **Note:** If there are pending glyphs to render, calling this function might trigger the texture cache update.  
         */
        fontGetGlyphTextureSize(fontRid: Rid, size: Vector2I, glyph: int64): Vector2
        
        /** Returns outline contours of the glyph as a [Dictionary] with the following contents:  
         *  `points`         - [PackedVector3Array], containing outline points. `x` and `y` are point coordinates. `z` is the type of the point, using the [enum ContourPointTag] values.  
         *  `contours`       - [PackedInt32Array], containing indices the end points of each contour.  
         *  `orientation`    - [bool], contour orientation. If `true`, clockwise contours must be filled.  
         *  - Two successive [constant CONTOUR_CURVE_TAG_ON] points indicate a line segment.  
         *  - One [constant CONTOUR_CURVE_TAG_OFF_CONIC] point between two [constant CONTOUR_CURVE_TAG_ON] points indicates a single conic (quadratic) Bézier arc.  
         *  - Two [constant CONTOUR_CURVE_TAG_OFF_CUBIC] points between two [constant CONTOUR_CURVE_TAG_ON] points indicate a single cubic Bézier arc.  
         *  - Two successive [constant CONTOUR_CURVE_TAG_OFF_CONIC] points indicate two successive conic (quadratic) Bézier arcs with a virtual [constant CONTOUR_CURVE_TAG_ON] point at their middle.  
         *  - Each contour is closed. The last point of a contour uses the first point of a contour as its next point, and vice versa. The first point can be [constant CONTOUR_CURVE_TAG_OFF_CONIC] point.  
         */
        fontGetGlyphContours(font: Rid, size: int64, index: int64): GDictionary
        
        /** Returns list of the kerning overrides. */
        fontGetKerningList(fontRid: Rid, size: int64): GArray
        
        /** Removes all kerning overrides. */
        fontClearKerningMap(fontRid: Rid, size: int64): void
        
        /** Removes kerning override for the pair of glyphs. */
        fontRemoveKerning(fontRid: Rid, size: int64, glyphPair: Vector2I): void
        
        /** Sets kerning for the pair of glyphs. */
        fontSetKerning(fontRid: Rid, size: int64, glyphPair: Vector2I, kerning: Vector2): void
        
        /** Returns kerning for the pair of glyphs. */
        fontGetKerning(fontRid: Rid, size: int64, glyphPair: Vector2I): Vector2
        
        /** Returns the glyph index of a [param char], optionally modified by the [param variation_selector]. See [method font_get_char_from_glyph_index]. */
        fontGetGlyphIndex(fontRid: Rid, size: int64, char: int64, variationSelector: int64): int64
        
        /** Returns character code associated with [param glyph_index], or `0` if [param glyph_index] is invalid. See [method font_get_glyph_index]. */
        fontGetCharFromGlyphIndex(fontRid: Rid, size: int64, glyphIndex: int64): int64
        
        /** Returns `true` if a Unicode [param char] is available in the font. */
        fontHasChar(fontRid: Rid, char: int64): boolean
        
        /** Returns a string containing all the characters available in the font. */
        fontGetSupportedChars(fontRid: Rid): string
        
        /** Returns an array containing all glyph indices in the font. */
        fontGetSupportedGlyphs(fontRid: Rid): PackedInt32Array
        
        /** Renders the range of characters to the font cache texture. */
        fontRenderRange(fontRid: Rid, size: Vector2I, start: int64, end: int64): void
        
        /** Renders specified glyph to the font cache texture. */
        fontRenderGlyph(fontRid: Rid, size: Vector2I, index: int64): void
        
        /** Draws single glyph into a canvas item at the position, using [param font_rid] at the size [param size]. If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used.  
         *      
         *  **Note:** Glyph index is specific to the font, use glyphs indices returned by [method shaped_text_get_glyphs] or [method font_get_glyph_index].  
         *      
         *  **Note:** If there are pending glyphs to render, calling this function might trigger the texture cache update.  
         */
        fontDrawGlyph(fontRid: Rid, canvas: Rid, size: int64, pos: Vector2, index: int64, color?: Color /* = new Color(1, 1, 1, 1) */, oversampling?: float64 /* = 0 */): void
        
        /** Draws single glyph outline of size [param outline_size] into a canvas item at the position, using [param font_rid] at the size [param size]. If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used.  
         *      
         *  **Note:** Glyph index is specific to the font, use glyphs indices returned by [method shaped_text_get_glyphs] or [method font_get_glyph_index].  
         *      
         *  **Note:** If there are pending glyphs to render, calling this function might trigger the texture cache update.  
         */
        fontDrawGlyphOutline(fontRid: Rid, canvas: Rid, size: int64, outlineSize: int64, pos: Vector2, index: int64, color?: Color /* = new Color(1, 1, 1, 1) */, oversampling?: float64 /* = 0 */): void
        
        /** Returns `true`, if font supports given language ([url=https://en.wikipedia.org/wiki/ISO_639-1]ISO 639[/url] code). */
        fontIsLanguageSupported(fontRid: Rid, language: string): boolean
        
        /** Adds override for [method font_is_language_supported]. */
        fontSetLanguageSupportOverride(fontRid: Rid, language: string, supported: boolean): void
        
        /** Returns `true` if support override is enabled for the [param language]. */
        fontGetLanguageSupportOverride(fontRid: Rid, language: string): boolean
        
        /** Remove language support override. */
        fontRemoveLanguageSupportOverride(fontRid: Rid, language: string): void
        
        /** Returns list of language support overrides. */
        fontGetLanguageSupportOverrides(fontRid: Rid): PackedStringArray
        
        /** Returns `true`, if font supports given script (ISO 15924 code). */
        fontIsScriptSupported(fontRid: Rid, script: string): boolean
        
        /** Adds override for [method font_is_script_supported]. */
        fontSetScriptSupportOverride(fontRid: Rid, script: string, supported: boolean): void
        
        /** Returns `true` if support override is enabled for the [param script]. */
        fontGetScriptSupportOverride(fontRid: Rid, script: string): boolean
        
        /** Removes script support override. */
        fontRemoveScriptSupportOverride(fontRid: Rid, script: string): void
        
        /** Returns list of script support overrides. */
        fontGetScriptSupportOverrides(fontRid: Rid): PackedStringArray
        
        /** Sets font OpenType feature set override. */
        fontSetOpentypeFeatureOverrides(fontRid: Rid, overrides: GDictionary): void
        
        /** Returns font OpenType feature set override. */
        fontGetOpentypeFeatureOverrides(fontRid: Rid): GDictionary
        
        /** Returns the dictionary of the supported OpenType features. */
        fontSupportedFeatureList(fontRid: Rid): GDictionary
        
        /** Returns the dictionary of the supported OpenType variation coordinates. */
        fontSupportedVariationList(fontRid: Rid): GDictionary
        
        /** Deprecated. This method always returns `1.0`. */
        fontGetGlobalOversampling(): float64
        
        /** Deprecated. This method does nothing. */
        fontSetGlobalOversampling(oversampling: float64): void
        
        /** Returns size of the replacement character (box with character hexadecimal code that is drawn in place of invalid characters). */
        getHexCodeBoxSize(size: int64, index: int64): Vector2
        
        /** Draws box displaying character hexadecimal code. Used for replacing missing characters. */
        drawHexCodeBox(canvas: Rid, size: int64, pos: Vector2, index: int64, color: Color): void
        
        /** Creates a new buffer for complex text layout, with the given [param direction] and [param orientation]. To free the resulting buffer, use [method free_rid] method.  
         *      
         *  **Note:** Direction is ignored if server does not support [constant FEATURE_BIDI_LAYOUT] feature (supported by [TextServerAdvanced]).  
         *      
         *  **Note:** Orientation is ignored if server does not support [constant FEATURE_VERTICAL_LAYOUT] feature (supported by [TextServerAdvanced]).  
         */
        createShapedText(direction?: TextServer.Direction /* = 0 */, orientation?: TextServer.Orientation /* = 0 */): Rid
        
        /** Clears text buffer (removes text and inline objects). */
        shapedTextClear(rid: Rid): void
        
        /** Sets desired text direction. If set to [constant DIRECTION_AUTO], direction will be detected based on the buffer contents and current locale.  
         *      
         *  **Note:** Direction is ignored if server does not support [constant FEATURE_BIDI_LAYOUT] feature (supported by [TextServerAdvanced]).  
         */
        shapedTextSetDirection(shaped: Rid, direction?: TextServer.Direction /* = 0 */): void
        
        /** Returns direction of the text. */
        shapedTextGetDirection(shaped: Rid): TextServer.Direction
        
        /** Returns direction of the text, inferred by the BiDi algorithm. */
        shapedTextGetInferredDirection(shaped: Rid): TextServer.Direction
        
        /** Overrides BiDi for the structured text.  
         *  Override ranges should cover full source text without overlaps. BiDi algorithm will be used on each range separately.  
         */
        shapedTextSetBidiOverride(shaped: Rid, override: GArray): void
        
        /** Sets custom punctuation character list, used for word breaking. If set to empty string, server defaults are used. */
        shapedTextSetCustomPunctuation(shaped: Rid, punct: string): void
        
        /** Returns custom punctuation character list, used for word breaking. If set to empty string, server defaults are used. */
        shapedTextGetCustomPunctuation(shaped: Rid): string
        
        /** Sets ellipsis character used for text clipping. */
        shapedTextSetCustomEllipsis(shaped: Rid, char: int64): void
        
        /** Returns ellipsis character used for text clipping. */
        shapedTextGetCustomEllipsis(shaped: Rid): int64
        
        /** Sets desired text orientation.  
         *      
         *  **Note:** Orientation is ignored if server does not support [constant FEATURE_VERTICAL_LAYOUT] feature (supported by [TextServerAdvanced]).  
         */
        shapedTextSetOrientation(shaped: Rid, orientation?: TextServer.Orientation /* = 0 */): void
        
        /** Returns text orientation. */
        shapedTextGetOrientation(shaped: Rid): TextServer.Orientation
        
        /** If set to `true` text buffer will display invalid characters as hexadecimal codes, otherwise nothing is displayed. */
        shapedTextSetPreserveInvalid(shaped: Rid, enabled: boolean): void
        
        /** Returns `true` if text buffer is configured to display hexadecimal codes in place of invalid characters.  
         *      
         *  **Note:** If set to `false`, nothing is displayed in place of invalid characters.  
         */
        shapedTextGetPreserveInvalid(shaped: Rid): boolean
        
        /** If set to `true` text buffer will display control characters. */
        shapedTextSetPreserveControl(shaped: Rid, enabled: boolean): void
        
        /** Returns `true` if text buffer is configured to display control characters. */
        shapedTextGetPreserveControl(shaped: Rid): boolean
        
        /** Sets extra spacing added between glyphs or lines in pixels. */
        shapedTextSetSpacing(shaped: Rid, spacing: TextServer.SpacingType, value: int64): void
        
        /** Returns extra spacing added between glyphs or lines in pixels. */
        shapedTextGetSpacing(shaped: Rid, spacing: TextServer.SpacingType): int64
        
        /** Adds text span and font to draw it to the text buffer. */
        shapedTextAddString(shaped: Rid, text: string, fonts: GArray, size: int64, opentypeFeatures?: GDictionary /* = new GDictionary() */, language?: string /* = '' */, meta?: any /* = <any> {} */): boolean
        
        /** Adds inline object to the text buffer, [param key] must be unique. In the text, object is represented as [param length] object replacement characters. */
        shapedTextAddObject(shaped: Rid, key: any, size: Vector2, inlineAlign?: InlineAlignment /* = 5 */, length?: int64 /* = 1 */, baseline?: float64 /* = 0 */): boolean
        
        /** Sets new size and alignment of embedded object. */
        shapedTextResizeObject(shaped: Rid, key: any, size: Vector2, inlineAlign?: InlineAlignment /* = 5 */, baseline?: float64 /* = 0 */): boolean
        
        /** Returns the text buffer source text, including object replacement characters. */
        shapedGetText(shaped: Rid): string
        
        /** Returns number of text spans added using [method shaped_text_add_string] or [method shaped_text_add_object]. */
        shapedGetSpanCount(shaped: Rid): int64
        
        /** Returns text span metadata. */
        shapedGetSpanMeta(shaped: Rid, index: int64): any
        
        /** Returns text embedded object key. */
        shapedGetSpanEmbeddedObject(shaped: Rid, index: int64): any
        
        /** Returns the text span source text. */
        shapedGetSpanText(shaped: Rid, index: int64): string
        
        /** Returns the text span embedded object key. */
        shapedGetSpanObject(shaped: Rid, index: int64): any
        
        /** Changes text span font, font size, and OpenType features, without changing the text. */
        shapedSetSpanUpdateFont(shaped: Rid, index: int64, fonts: GArray, size: int64, opentypeFeatures?: GDictionary /* = new GDictionary() */): void
        
        /** Returns the number of uniform text runs in the buffer. */
        shapedGetRunCount(shaped: Rid): int64
        
        /** Returns the source text of the [param index] text run (in visual order). */
        shapedGetRunText(shaped: Rid, index: int64): string
        
        /** Returns the source text range of the [param index] text run (in visual order). */
        shapedGetRunRange(shaped: Rid, index: int64): Vector2I
        
        /** Returns the font RID of the [param index] text run (in visual order). */
        shapedGetRunFontRid(shaped: Rid, index: int64): Rid
        
        /** Returns the font size of the [param index] text run (in visual order). */
        shapedGetRunFontSize(shaped: Rid, index: int64): int64
        
        /** Returns the language of the [param index] text run (in visual order). */
        shapedGetRunLanguage(shaped: Rid, index: int64): string
        
        /** Returns the direction of the [param index] text run (in visual order). */
        shapedGetRunDirection(shaped: Rid, index: int64): TextServer.Direction
        
        /** Returns the embedded object of the [param index] text run (in visual order). */
        shapedGetRunObject(shaped: Rid, index: int64): any
        
        /** Returns text buffer for the substring of the text in the [param shaped] text buffer (including inline objects). */
        shapedTextSubstr(shaped: Rid, start: int64, length: int64): Rid
        
        /** Returns the parent buffer from which the substring originates. */
        shapedTextGetParent(shaped: Rid): Rid
        
        /** Adjusts text width to fit to specified width, returns new text width. */
        shapedTextFitToWidth(shaped: Rid, width: float64, justificationFlags?: TextServer.JustificationFlag /* = 3 */): float64
        
        /** Aligns shaped text to the given tab-stops. */
        shapedTextTabAlign(shaped: Rid, tabStops: PackedFloat32Array | float32[]): float64
        
        /** Shapes buffer if it's not shaped. Returns `true` if the string is shaped successfully.  
         *      
         *  **Note:** It is not necessary to call this function manually, buffer will be shaped automatically as soon as any of its output data is requested.  
         */
        shapedTextShape(shaped: Rid): boolean
        
        /** Returns `true` if buffer is successfully shaped. */
        shapedTextIsReady(shaped: Rid): boolean
        
        /** Returns `true` if text buffer contains any visible characters. */
        shapedTextHasVisibleChars(shaped: Rid): boolean
        
        /** Returns an array of glyphs in the visual order. */
        shapedTextGetGlyphs(shaped: Rid): GArray
        
        /** Returns text glyphs in the logical order. */
        shapedTextSortLogical(shaped: Rid): GArray
        
        /** Returns number of glyphs in the buffer. */
        shapedTextGetGlyphCount(shaped: Rid): int64
        
        /** Returns substring buffer character range in the parent buffer. */
        shapedTextGetRange(shaped: Rid): Vector2I
        
        /** Breaks text to the lines and columns. Returns character ranges for each segment. */
        shapedTextGetLineBreaksAdv(shaped: Rid, width: PackedFloat32Array | float32[], start?: int64 /* = 0 */, once?: boolean /* = true */, breakFlags?: TextServer.LineBreakFlag /* = 3 */): PackedInt32Array
        
        /** Breaks text to the lines and returns character ranges for each line. */
        shapedTextGetLineBreaks(shaped: Rid, width: float64, start?: int64 /* = 0 */, breakFlags?: TextServer.LineBreakFlag /* = 3 */): PackedInt32Array
        
        /** Breaks text into words and returns array of character ranges. Use [param grapheme_flags] to set what characters are used for breaking (see [enum GraphemeFlag]). */
        shapedTextGetWordBreaks(shaped: Rid, graphemeFlags?: TextServer.GraphemeFlag /* = 264 */, skipGraphemeFlags?: TextServer.GraphemeFlag /* = 4 */): PackedInt32Array
        
        /** Returns the position of the overrun trim. */
        shapedTextGetTrimPos(shaped: Rid): int64
        
        /** Returns position of the ellipsis. */
        shapedTextGetEllipsisPos(shaped: Rid): int64
        
        /** Returns array of the glyphs in the ellipsis. */
        shapedTextGetEllipsisGlyphs(shaped: Rid): GArray
        
        /** Returns number of glyphs in the ellipsis. */
        shapedTextGetEllipsisGlyphCount(shaped: Rid): int64
        
        /** Trims text if it exceeds the given width. */
        shapedTextOverrunTrimToWidth(shaped: Rid, width?: float64 /* = 0 */, overrunTrimFlags?: TextServer.TextOverrunFlag /* = 0 */): void
        
        /** Returns array of inline objects. */
        shapedTextGetObjects(shaped: Rid): GArray
        
        /** Returns bounding rectangle of the inline object. */
        shapedTextGetObjectRect(shaped: Rid, key: any): Rect2
        
        /** Returns the character range of the inline object. */
        shapedTextGetObjectRange(shaped: Rid, key: any): Vector2I
        
        /** Returns the glyph index of the inline object. */
        shapedTextGetObjectGlyph(shaped: Rid, key: any): int64
        
        /** Returns size of the text. */
        shapedTextGetSize(shaped: Rid): Vector2
        
        /** Returns the text ascent (number of pixels above the baseline for horizontal layout or to the left of baseline for vertical).  
         *      
         *  **Note:** Overall ascent can be higher than font ascent, if some glyphs are displaced from the baseline.  
         */
        shapedTextGetAscent(shaped: Rid): float64
        
        /** Returns the text descent (number of pixels below the baseline for horizontal layout or to the right of baseline for vertical).  
         *      
         *  **Note:** Overall descent can be higher than font descent, if some glyphs are displaced from the baseline.  
         */
        shapedTextGetDescent(shaped: Rid): float64
        
        /** Returns width (for horizontal layout) or height (for vertical) of the text. */
        shapedTextGetWidth(shaped: Rid): float64
        
        /** Returns pixel offset of the underline below the baseline. */
        shapedTextGetUnderlinePosition(shaped: Rid): float64
        
        /** Returns thickness of the underline. */
        shapedTextGetUnderlineThickness(shaped: Rid): float64
        
        /** Returns shapes of the carets corresponding to the character offset [param position] in the text. Returned caret shape is 1 pixel wide rectangle. */
        shapedTextGetCarets(shaped: Rid, position: int64): GDictionary
        
        /** Returns selection rectangles for the specified character range. */
        shapedTextGetSelection(shaped: Rid, start: int64, end: int64): PackedVector2Array
        
        /** Returns grapheme index at the specified pixel offset at the baseline, or `-1` if none is found. */
        shapedTextHitTestGrapheme(shaped: Rid, coords: float64): int64
        
        /** Returns caret character offset at the specified pixel offset at the baseline. This function always returns a valid position. */
        shapedTextHitTestPosition(shaped: Rid, coords: float64): int64
        
        /** Returns composite character's bounds as offsets from the start of the line. */
        shapedTextGetGraphemeBounds(shaped: Rid, pos: int64): Vector2
        
        /** Returns grapheme end position closest to the [param pos]. */
        shapedTextNextGraphemePos(shaped: Rid, pos: int64): int64
        
        /** Returns grapheme start position closest to the [param pos]. */
        shapedTextPrevGraphemePos(shaped: Rid, pos: int64): int64
        
        /** Returns array of the composite character boundaries. */
        shapedTextGetCharacterBreaks(shaped: Rid): PackedInt32Array
        
        /** Returns composite character end position closest to the [param pos]. */
        shapedTextNextCharacterPos(shaped: Rid, pos: int64): int64
        
        /** Returns composite character start position closest to the [param pos]. */
        shapedTextPrevCharacterPos(shaped: Rid, pos: int64): int64
        
        /** Returns composite character position closest to the [param pos]. */
        shapedTextClosestCharacterPos(shaped: Rid, pos: int64): int64
        
        /** Draw shaped text into a canvas item at a given position, with [param color]. [param pos] specifies the leftmost point of the baseline (for horizontal layout) or topmost point of the baseline (for vertical layout). If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used. */
        shapedTextDraw(shaped: Rid, canvas: Rid, pos: Vector2, clipL?: float64 /* = -1 */, clipR?: float64 /* = -1 */, color?: Color /* = new Color(1, 1, 1, 1) */, oversampling?: float64 /* = 0 */): void
        
        /** Draw the outline of the shaped text into a canvas item at a given position, with [param color]. [param pos] specifies the leftmost point of the baseline (for horizontal layout) or topmost point of the baseline (for vertical layout). If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used. */
        shapedTextDrawOutline(shaped: Rid, canvas: Rid, pos: Vector2, clipL?: float64 /* = -1 */, clipR?: float64 /* = -1 */, outlineSize?: int64 /* = 1 */, color?: Color /* = new Color(1, 1, 1, 1) */, oversampling?: float64 /* = 0 */): void
        
        /** Returns dominant direction of in the range of text. */
        shapedTextGetDominantDirectionInRange(shaped: Rid, start: int64, end: int64): TextServer.Direction
        
        /** Converts a number from the Western Arabic (0..9) to the numeral systems used in [param language].  
         *  If [param language] is omitted, the active locale will be used.  
         */
        formatNumber(number: string, language?: string /* = '' */): string
        
        /** Converts [param number] from the numeral systems used in [param language] to Western Arabic (0..9). */
        parseNumber(number: string, language?: string /* = '' */): string
        
        /** Returns percent sign used in the [param language]. */
        percentSign(language?: string /* = '' */): string
        
        /** Returns an array of the word break boundaries. Elements in the returned array are the offsets of the start and end of words. Therefore the length of the array is always even.  
         *  When [param chars_per_line] is greater than zero, line break boundaries are returned instead.  
         *    
         */
        stringGetWordBreaks(string_: string, language?: string /* = '' */, charsPerLine?: int64 /* = 0 */): PackedInt32Array
        
        /** Returns array of the composite character boundaries.  
         *    
         */
        stringGetCharacterBreaks(string_: string, language?: string /* = '' */): PackedInt32Array
        
        /** Returns index of the first string in [param dict] which is visually confusable with the [param string], or `-1` if none is found.  
         *      
         *  **Note:** This method doesn't detect invisible characters, for spoof detection use it in combination with [method spoof_check].  
         *      
         *  **Note:** Always returns `-1` if the server does not support the [constant FEATURE_UNICODE_SECURITY] feature.  
         */
        isConfusable(string_: string, dict: PackedStringArray | string[]): int64
        
        /** Returns `true` if [param string] is likely to be an attempt at confusing the reader.  
         *      
         *  **Note:** Always returns `false` if the server does not support the [constant FEATURE_UNICODE_SECURITY] feature.  
         */
        spoofCheck(string_: string): boolean
        
        /** Strips diacritics from the string.  
         *      
         *  **Note:** The result may be longer or shorter than the original.  
         */
        stripDiacritics(string_: string): string
        
        /** Returns `true` if [param string] is a valid identifier.  
         *  If the text server supports the [constant FEATURE_UNICODE_IDENTIFIERS] feature, a valid identifier must:  
         *  - Conform to normalization form C.  
         *  - Begin with a Unicode character of class XID_Start or `"_"`.  
         *  - May contain Unicode characters of class XID_Continue in the other positions.  
         *  - Use UAX #31 recommended scripts only (mixed scripts are allowed).  
         *  If the [constant FEATURE_UNICODE_IDENTIFIERS] feature is not supported, a valid identifier must:  
         *  - Begin with a Unicode character of class XID_Start or `"_"`.  
         *  - May contain Unicode characters of class XID_Continue in the other positions.  
         */
        isValidIdentifier(string_: string): boolean
        
        /** Returns `true` if the given code point is a valid letter, i.e. it belongs to the Unicode category "L". */
        isValidLetter(unicode: int64): boolean
        
        /** Returns the string converted to uppercase.  
         *      
         *  **Note:** Casing is locale dependent and context sensitive if server support [constant FEATURE_CONTEXT_SENSITIVE_CASE_CONVERSION] feature (supported by [TextServerAdvanced]).  
         *      
         *  **Note:** The result may be longer or shorter than the original.  
         */
        stringToUpper(string_: string, language?: string /* = '' */): string
        
        /** Returns the string converted to lowercase.  
         *      
         *  **Note:** Casing is locale dependent and context sensitive if server support [constant FEATURE_CONTEXT_SENSITIVE_CASE_CONVERSION] feature (supported by [TextServerAdvanced]).  
         *      
         *  **Note:** The result may be longer or shorter than the original.  
         */
        stringToLower(string_: string, language?: string /* = '' */): string
        
        /** Returns the string converted to title case.  
         *      
         *  **Note:** Casing is locale dependent and context sensitive if server support [constant FEATURE_CONTEXT_SENSITIVE_CASE_CONVERSION] feature (supported by [TextServerAdvanced]).  
         *      
         *  **Note:** The result may be longer or shorter than the original.  
         */
        stringToTitle(string_: string, language?: string /* = '' */): string
        
        /** Default implementation of the BiDi algorithm override function. See [enum StructuredTextParser] for more info. */
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
        /** **Required.**  
         *  Returns `true` if the server supports a feature.  
         */
        /* gdvirtual */ _hasFeature(feature: TextServer.Feature): boolean
        
        /** **Required.**  
         *  Returns the name of the server interface.  
         */
        /* gdvirtual */ _getName(): string
        
        /** **Required.**  
         *  Returns text server features, see [enum TextServer.Feature].  
         */
        /* gdvirtual */ _getFeatures(): int64
        
        /** **Required.**  
         *  Frees an object created by this [TextServer].  
         */
        /* gdvirtual */ _freeRid(rid: Rid): void
        
        /** **Required.**  
         *  Returns `true` if [param rid] is valid resource owned by this text server.  
         */
        /* gdvirtual */ _has(rid: Rid): boolean
        
        /** **Optional.**  
         *  Loads optional TextServer database (e.g. ICU break iterators and dictionaries).  
         */
        /* gdvirtual */ _loadSupportData(fileName: string): boolean
        
        /** **Optional.**  
         *  Returns default TextServer database (e.g. ICU break iterators and dictionaries) filename.  
         */
        /* gdvirtual */ _getSupportDataFileName(): string
        
        /** **Optional.**  
         *  Returns TextServer database (e.g. ICU break iterators and dictionaries) description.  
         */
        /* gdvirtual */ _getSupportDataInfo(): string
        
        /** **Optional.**  
         *  Saves optional TextServer database (e.g. ICU break iterators and dictionaries) to the file.  
         */
        /* gdvirtual */ _saveSupportData(fileName: string): boolean
        
        /** **Optional.**  
         *  Returns default TextServer database (e.g. ICU break iterators and dictionaries).  
         */
        /* gdvirtual */ _getSupportData(): PackedByteArray
        
        /** **Required.**  
         *  Returns `true` if locale is right-to-left.  
         */
        /* gdvirtual */ _isLocaleRightToLeft(locale: string): boolean
        
        /** **Optional.**  
         *  Converts readable feature, variation, script, or language name to OpenType tag.  
         */
        /* gdvirtual */ _nameToTag(name: string): int64
        
        /** **Optional.**  
         *  Converts OpenType tag to readable feature, variation, script, or language name.  
         */
        /* gdvirtual */ _tagToName(tag: int64): string
        
        /** **Required.**  
         *  Creates a new, empty font cache entry resource.  
         */
        /* gdvirtual */ _createFont(): Rid
        
        /** Optional, implement if font supports extra spacing or baseline offset.  
         *  Creates a new variation existing font which is reusing the same glyph cache and font data.  
         */
        /* gdvirtual */ _createFontLinkedVariation(fontRid: Rid): Rid
        
        /** **Optional.**  
         *  Sets font source data, e.g contents of the dynamic font source file.  
         */
        /* gdvirtual */ _fontSetData(fontRid: Rid, data: PackedByteArray | byte[] | ArrayBuffer): void
        
        /** **Optional.**  
         *  Sets pointer to the font source data, e.g contents of the dynamic font source file.  
         */
        /* gdvirtual */ _fontSetDataPtr(fontRid: Rid, dataPtr: int64, dataSize: int64): void
        
        /** **Optional.**  
         *  Sets an active face index in the TrueType / OpenType collection.  
         */
        /* gdvirtual */ _fontSetFaceIndex(fontRid: Rid, faceIndex: int64): void
        
        /** **Optional.**  
         *  Returns an active face index in the TrueType / OpenType collection.  
         */
        /* gdvirtual */ _fontGetFaceIndex(fontRid: Rid): int64
        
        /** **Optional.**  
         *  Returns number of faces in the TrueType / OpenType collection.  
         */
        /* gdvirtual */ _fontGetFaceCount(fontRid: Rid): int64
        
        /** **Optional.**  
         *  Sets the font style flags, see [enum TextServer.FontStyle].  
         */
        /* gdvirtual */ _fontSetStyle(fontRid: Rid, style: TextServer.FontStyle): void
        
        /** **Optional.**  
         *  Returns font style flags, see [enum TextServer.FontStyle].  
         */
        /* gdvirtual */ _fontGetStyle(fontRid: Rid): TextServer.FontStyle
        
        /** **Optional.**  
         *  Sets the font family name.  
         */
        /* gdvirtual */ _fontSetName(fontRid: Rid, name: string): void
        
        /** **Optional.**  
         *  Returns font family name.  
         */
        /* gdvirtual */ _fontGetName(fontRid: Rid): string
        
        /** **Optional.**  
         *  Returns [Dictionary] with OpenType font name strings (localized font names, version, description, license information, sample text, etc.).  
         */
        /* gdvirtual */ _fontGetOtNameStrings(fontRid: Rid): GDictionary
        
        /** **Optional.**  
         *  Sets the font style name.  
         */
        /* gdvirtual */ _fontSetStyleName(fontRid: Rid, nameStyle: string): void
        
        /** **Optional.**  
         *  Returns font style name.  
         */
        /* gdvirtual */ _fontGetStyleName(fontRid: Rid): string
        
        /** **Optional.**  
         *  Sets weight (boldness) of the font. A value in the `100...999` range, normal font weight is `400`, bold font weight is `700`.  
         */
        /* gdvirtual */ _fontSetWeight(fontRid: Rid, weight: int64): void
        
        /** **Optional.**  
         *  Returns weight (boldness) of the font. A value in the `100...999` range, normal font weight is `400`, bold font weight is `700`.  
         */
        /* gdvirtual */ _fontGetWeight(fontRid: Rid): int64
        
        /** **Optional.**  
         *  Sets font stretch amount, compared to a normal width. A percentage value between `50%` and `200%`.  
         */
        /* gdvirtual */ _fontSetStretch(fontRid: Rid, stretch: int64): void
        
        /** **Optional.**  
         *  Returns font stretch amount, compared to a normal width. A percentage value between `50%` and `200%`.  
         */
        /* gdvirtual */ _fontGetStretch(fontRid: Rid): int64
        
        /** **Optional.**  
         *  Sets font anti-aliasing mode.  
         */
        /* gdvirtual */ _fontSetAntialiasing(fontRid: Rid, antialiasing: TextServer.FontAntialiasing): void
        
        /** **Optional.**  
         *  Returns font anti-aliasing mode.  
         */
        /* gdvirtual */ _fontGetAntialiasing(fontRid: Rid): TextServer.FontAntialiasing
        
        /** **Optional.**  
         *  If set to `true`, embedded font bitmap loading is disabled.  
         */
        /* gdvirtual */ _fontSetDisableEmbeddedBitmaps(fontRid: Rid, disableEmbeddedBitmaps: boolean): void
        
        /** **Optional.**  
         *  Returns whether the font's embedded bitmap loading is disabled.  
         */
        /* gdvirtual */ _fontGetDisableEmbeddedBitmaps(fontRid: Rid): boolean
        
        /** **Optional.**  
         *  If set to `true` font texture mipmap generation is enabled.  
         */
        /* gdvirtual */ _fontSetGenerateMipmaps(fontRid: Rid, generateMipmaps: boolean): void
        
        /** **Optional.**  
         *  Returns `true` if font texture mipmap generation is enabled.  
         */
        /* gdvirtual */ _fontGetGenerateMipmaps(fontRid: Rid): boolean
        
        /** **Optional.**  
         *  If set to `true`, glyphs of all sizes are rendered using single multichannel signed distance field generated from the dynamic font vector data. MSDF rendering allows displaying the font at any scaling factor without blurriness, and without incurring a CPU cost when the font size changes (since the font no longer needs to be rasterized on the CPU). As a downside, font hinting is not available with MSDF. The lack of font hinting may result in less crisp and less readable fonts at small sizes.  
         */
        /* gdvirtual */ _fontSetMultichannelSignedDistanceField(fontRid: Rid, msdf: boolean): void
        
        /** **Optional.**  
         *  Returns `true` if glyphs of all sizes are rendered using single multichannel signed distance field generated from the dynamic font vector data.  
         */
        /* gdvirtual */ _fontIsMultichannelSignedDistanceField(fontRid: Rid): boolean
        
        /** **Optional.**  
         *  Sets the width of the range around the shape between the minimum and maximum representable signed distance.  
         */
        /* gdvirtual */ _fontSetMsdfPixelRange(fontRid: Rid, msdfPixelRange: int64): void
        
        /** **Optional.**  
         *  Returns the width of the range around the shape between the minimum and maximum representable signed distance.  
         */
        /* gdvirtual */ _fontGetMsdfPixelRange(fontRid: Rid): int64
        
        /** **Optional.**  
         *  Sets source font size used to generate MSDF textures.  
         */
        /* gdvirtual */ _fontSetMsdfSize(fontRid: Rid, msdfSize: int64): void
        
        /** **Optional.**  
         *  Returns source font size used to generate MSDF textures.  
         */
        /* gdvirtual */ _fontGetMsdfSize(fontRid: Rid): int64
        
        /** **Required.**  
         *  Sets bitmap font fixed size. If set to value greater than zero, same cache entry will be used for all font sizes.  
         */
        /* gdvirtual */ _fontSetFixedSize(fontRid: Rid, fixedSize: int64): void
        
        /** **Required.**  
         *  Returns bitmap font fixed size.  
         */
        /* gdvirtual */ _fontGetFixedSize(fontRid: Rid): int64
        
        /** **Required.**  
         *  Sets bitmap font scaling mode. This property is used only if `fixed_size` is greater than zero.  
         */
        /* gdvirtual */ _fontSetFixedSizeScaleMode(fontRid: Rid, fixedSizeScaleMode: TextServer.FixedSizeScaleMode): void
        
        /** **Required.**  
         *  Returns bitmap font scaling mode.  
         */
        /* gdvirtual */ _fontGetFixedSizeScaleMode(fontRid: Rid): TextServer.FixedSizeScaleMode
        
        /** **Optional.**  
         *  If set to `true`, system fonts can be automatically used as fallbacks.  
         */
        /* gdvirtual */ _fontSetAllowSystemFallback(fontRid: Rid, allowSystemFallback: boolean): void
        
        /** **Optional.**  
         *  Returns `true` if system fonts can be automatically used as fallbacks.  
         */
        /* gdvirtual */ _fontIsAllowSystemFallback(fontRid: Rid): boolean
        
        /** **Optional.**  
         *  Frees all automatically loaded system fonts.  
         */
        /* gdvirtual */ _fontClearSystemFallbackCache(): void
        
        /** **Optional.**  
         *  If set to `true` auto-hinting is preferred over font built-in hinting.  
         */
        /* gdvirtual */ _fontSetForceAutohinter(fontRid: Rid, forceAutohinter: boolean): void
        
        /** **Optional.**  
         *  Returns `true` if auto-hinting is supported and preferred over font built-in hinting.  
         */
        /* gdvirtual */ _fontIsForceAutohinter(fontRid: Rid): boolean
        
        /** **Optional.**  
         *  If set to `true`, color modulation is applied when drawing colored glyphs, otherwise it's applied to the monochrome glyphs only.  
         */
        /* gdvirtual */ _fontSetModulateColorGlyphs(fontRid: Rid, modulate: boolean): void
        
        /** **Optional.**  
         *  Returns `true`, if color modulation is applied when drawing colored glyphs.  
         */
        /* gdvirtual */ _fontIsModulateColorGlyphs(fontRid: Rid): boolean
        
        /** **Optional.**  
         *  Sets font hinting mode. Used by dynamic fonts only.  
         */
        /* gdvirtual */ _fontSetHinting(fontRid: Rid, hinting: TextServer.Hinting): void
        
        /** **Optional.**  
         *  Returns the font hinting mode. Used by dynamic fonts only.  
         */
        /* gdvirtual */ _fontGetHinting(fontRid: Rid): TextServer.Hinting
        
        /** **Optional.**  
         *  Sets font subpixel glyph positioning mode.  
         */
        /* gdvirtual */ _fontSetSubpixelPositioning(fontRid: Rid, subpixelPositioning: TextServer.SubpixelPositioning): void
        
        /** **Optional.**  
         *  Returns font subpixel glyph positioning mode.  
         */
        /* gdvirtual */ _fontGetSubpixelPositioning(fontRid: Rid): TextServer.SubpixelPositioning
        
        /** **Optional.**  
         *  Sets glyph position rounding behavior. If set to `true`, when aligning glyphs to the pixel boundaries rounding remainders are accumulated to ensure more uniform glyph distribution. This setting has no effect if subpixel positioning is enabled.  
         */
        /* gdvirtual */ _fontSetKeepRoundingRemainders(fontRid: Rid, keepRoundingRemainders: boolean): void
        
        /** **Optional.**  
         *  Returns glyph position rounding behavior. If set to `true`, when aligning glyphs to the pixel boundaries rounding remainders are accumulated to ensure more uniform glyph distribution. This setting has no effect if subpixel positioning is enabled.  
         */
        /* gdvirtual */ _fontGetKeepRoundingRemainders(fontRid: Rid): boolean
        
        /** Sets font embolden strength. If [param strength] is not equal to zero, emboldens the font outlines. Negative values reduce the outline thickness. */
        /* gdvirtual */ _fontSetEmbolden(fontRid: Rid, strength: float64): void
        
        /** **Optional.**  
         *  Returns font embolden strength.  
         */
        /* gdvirtual */ _fontGetEmbolden(fontRid: Rid): float64
        
        /** **Optional.**  
         *  Sets the spacing for [param spacing] (see [enum TextServer.SpacingType]) to [param value] in pixels (not relative to the font size).  
         */
        /* gdvirtual */ _fontSetSpacing(fontRid: Rid, spacing: TextServer.SpacingType, value: int64): void
        
        /** **Optional.**  
         *  Returns the spacing for [param spacing] (see [enum TextServer.SpacingType]) in pixels (not relative to the font size).  
         */
        /* gdvirtual */ _fontGetSpacing(fontRid: Rid, spacing: TextServer.SpacingType): int64
        
        /** **Optional.**  
         *  Sets extra baseline offset (as a fraction of font height).  
         */
        /* gdvirtual */ _fontSetBaselineOffset(fontRid: Rid, baselineOffset: float64): void
        
        /** **Optional.**  
         *  Returns extra baseline offset (as a fraction of font height).  
         */
        /* gdvirtual */ _fontGetBaselineOffset(fontRid: Rid): float64
        
        /** **Optional.**  
         *  Sets 2D transform, applied to the font outlines, can be used for slanting, flipping, and rotating glyphs.  
         */
        /* gdvirtual */ _fontSetTransform(fontRid: Rid, transform: Transform2D): void
        
        /** **Optional.**  
         *  Returns 2D transform applied to the font outlines.  
         */
        /* gdvirtual */ _fontGetTransform(fontRid: Rid): Transform2D
        
        /** **Optional.**  
         *  Sets variation coordinates for the specified font cache entry.  
         */
        /* gdvirtual */ _fontSetVariationCoordinates(fontRid: Rid, variationCoordinates: GDictionary): void
        
        /** **Optional.**  
         *  Returns variation coordinates for the specified font cache entry.  
         */
        /* gdvirtual */ _fontGetVariationCoordinates(fontRid: Rid): GDictionary
        
        /** **Optional.**  
         *  Sets font oversampling factor, if set to `0.0` global oversampling factor is used instead. Used by dynamic fonts only.  
         */
        /* gdvirtual */ _fontSetOversampling(fontRid: Rid, oversampling: float64): void
        
        /** **Optional.**  
         *  Returns font oversampling factor, if set to `0.0` global oversampling factor is used instead. Used by dynamic fonts only.  
         */
        /* gdvirtual */ _fontGetOversampling(fontRid: Rid): float64
        
        /** **Required.**  
         *  Returns list of the font sizes in the cache. Each size is [Vector2i] with font size and outline size.  
         */
        /* gdvirtual */ _fontGetSizeCacheList(fontRid: Rid): GArray
        
        /** **Required.**  
         *  Removes all font sizes from the cache entry.  
         */
        /* gdvirtual */ _fontClearSizeCache(fontRid: Rid): void
        
        /** **Required.**  
         *  Removes specified font size from the cache entry.  
         */
        /* gdvirtual */ _fontRemoveSizeCache(fontRid: Rid, size: Vector2I): void
        
        /** **Optional.**  
         *  Returns font cache information, each entry contains the following fields: `Vector2i size_px` - font size in pixels, `float viewport_oversampling` - viewport oversampling factor, `int glyphs` - number of rendered glyphs, `int textures` - number of used textures, `int textures_size` - size of texture data in bytes.  
         */
        /* gdvirtual */ _fontGetSizeCacheInfo(fontRid: Rid): GArray
        
        /** **Required.**  
         *  Sets the font ascent (number of pixels above the baseline).  
         */
        /* gdvirtual */ _fontSetAscent(fontRid: Rid, size: int64, ascent: float64): void
        
        /** **Required.**  
         *  Returns the font ascent (number of pixels above the baseline).  
         */
        /* gdvirtual */ _fontGetAscent(fontRid: Rid, size: int64): float64
        
        /** **Required.**  
         *  Sets the font descent (number of pixels below the baseline).  
         */
        /* gdvirtual */ _fontSetDescent(fontRid: Rid, size: int64, descent: float64): void
        
        /** **Required.**  
         *  Returns the font descent (number of pixels below the baseline).  
         */
        /* gdvirtual */ _fontGetDescent(fontRid: Rid, size: int64): float64
        
        /** **Required.**  
         *  Sets pixel offset of the underline below the baseline.  
         */
        /* gdvirtual */ _fontSetUnderlinePosition(fontRid: Rid, size: int64, underlinePosition: float64): void
        
        /** **Required.**  
         *  Returns pixel offset of the underline below the baseline.  
         */
        /* gdvirtual */ _fontGetUnderlinePosition(fontRid: Rid, size: int64): float64
        
        /** **Required.**  
         *  Sets thickness of the underline in pixels.  
         */
        /* gdvirtual */ _fontSetUnderlineThickness(fontRid: Rid, size: int64, underlineThickness: float64): void
        
        /** **Required.**  
         *  Returns thickness of the underline in pixels.  
         */
        /* gdvirtual */ _fontGetUnderlineThickness(fontRid: Rid, size: int64): float64
        
        /** **Required.**  
         *  Sets scaling factor of the color bitmap font.  
         */
        /* gdvirtual */ _fontSetScale(fontRid: Rid, size: int64, scale: float64): void
        
        /** **Required.**  
         *  Returns scaling factor of the color bitmap font.  
         */
        /* gdvirtual */ _fontGetScale(fontRid: Rid, size: int64): float64
        
        /** **Required.**  
         *  Returns number of textures used by font cache entry.  
         */
        /* gdvirtual */ _fontGetTextureCount(fontRid: Rid, size: Vector2I): int64
        
        /** **Required.**  
         *  Removes all textures from font cache entry.  
         */
        /* gdvirtual */ _fontClearTextures(fontRid: Rid, size: Vector2I): void
        
        /** **Required.**  
         *  Removes specified texture from the cache entry.  
         */
        /* gdvirtual */ _fontRemoveTexture(fontRid: Rid, size: Vector2I, textureIndex: int64): void
        
        /** **Required.**  
         *  Sets font cache texture image data.  
         */
        /* gdvirtual */ _fontSetTextureImage(fontRid: Rid, size: Vector2I, textureIndex: int64, image: Image): void
        
        /** **Required.**  
         *  Returns font cache texture image data.  
         */
        /* gdvirtual */ _fontGetTextureImage(fontRid: Rid, size: Vector2I, textureIndex: int64): null | Image
        
        /** **Optional.**  
         *  Sets array containing glyph packing data.  
         */
        /* gdvirtual */ _fontSetTextureOffsets(fontRid: Rid, size: Vector2I, textureIndex: int64, offset: PackedInt32Array | int32[]): void
        
        /** **Optional.**  
         *  Returns array containing glyph packing data.  
         */
        /* gdvirtual */ _fontGetTextureOffsets(fontRid: Rid, size: Vector2I, textureIndex: int64): PackedInt32Array
        
        /** **Required.**  
         *  Returns list of rendered glyphs in the cache entry.  
         */
        /* gdvirtual */ _fontGetGlyphList(fontRid: Rid, size: Vector2I): PackedInt32Array
        
        /** **Required.**  
         *  Removes all rendered glyph information from the cache entry.  
         */
        /* gdvirtual */ _fontClearGlyphs(fontRid: Rid, size: Vector2I): void
        
        /** **Required.**  
         *  Removes specified rendered glyph information from the cache entry.  
         */
        /* gdvirtual */ _fontRemoveGlyph(fontRid: Rid, size: Vector2I, glyph: int64): void
        
        /** **Required.**  
         *  Returns glyph advance (offset of the next glyph).  
         */
        /* gdvirtual */ _fontGetGlyphAdvance(fontRid: Rid, size: int64, glyph: int64): Vector2
        
        /** **Required.**  
         *  Sets glyph advance (offset of the next glyph).  
         */
        /* gdvirtual */ _fontSetGlyphAdvance(fontRid: Rid, size: int64, glyph: int64, advance: Vector2): void
        
        /** **Required.**  
         *  Returns glyph offset from the baseline.  
         */
        /* gdvirtual */ _fontGetGlyphOffset(fontRid: Rid, size: Vector2I, glyph: int64): Vector2
        
        /** **Required.**  
         *  Sets glyph offset from the baseline.  
         */
        /* gdvirtual */ _fontSetGlyphOffset(fontRid: Rid, size: Vector2I, glyph: int64, offset: Vector2): void
        
        /** **Required.**  
         *  Returns size of the glyph.  
         */
        /* gdvirtual */ _fontGetGlyphSize(fontRid: Rid, size: Vector2I, glyph: int64): Vector2
        
        /** **Required.**  
         *  Sets size of the glyph.  
         */
        /* gdvirtual */ _fontSetGlyphSize(fontRid: Rid, size: Vector2I, glyph: int64, glSize: Vector2): void
        
        /** **Required.**  
         *  Returns rectangle in the cache texture containing the glyph.  
         */
        /* gdvirtual */ _fontGetGlyphUVRect(fontRid: Rid, size: Vector2I, glyph: int64): Rect2
        
        /** **Required.**  
         *  Sets rectangle in the cache texture containing the glyph.  
         */
        /* gdvirtual */ _fontSetGlyphUVRect(fontRid: Rid, size: Vector2I, glyph: int64, uVRect: Rect2): void
        
        /** **Required.**  
         *  Returns index of the cache texture containing the glyph.  
         */
        /* gdvirtual */ _fontGetGlyphTextureIdx(fontRid: Rid, size: Vector2I, glyph: int64): int64
        
        /** **Required.**  
         *  Sets index of the cache texture containing the glyph.  
         */
        /* gdvirtual */ _fontSetGlyphTextureIdx(fontRid: Rid, size: Vector2I, glyph: int64, textureIdx: int64): void
        
        /** **Required.**  
         *  Returns resource ID of the cache texture containing the glyph.  
         */
        /* gdvirtual */ _fontGetGlyphTextureRid(fontRid: Rid, size: Vector2I, glyph: int64): Rid
        
        /** **Required.**  
         *  Returns size of the cache texture containing the glyph.  
         */
        /* gdvirtual */ _fontGetGlyphTextureSize(fontRid: Rid, size: Vector2I, glyph: int64): Vector2
        
        /** **Optional.**  
         *  Returns outline contours of the glyph.  
         */
        /* gdvirtual */ _fontGetGlyphContours(fontRid: Rid, size: int64, index: int64): GDictionary
        
        /** **Optional.**  
         *  Returns list of the kerning overrides.  
         */
        /* gdvirtual */ _fontGetKerningList(fontRid: Rid, size: int64): GArray
        
        /** **Optional.**  
         *  Removes all kerning overrides.  
         */
        /* gdvirtual */ _fontClearKerningMap(fontRid: Rid, size: int64): void
        
        /** **Optional.**  
         *  Removes kerning override for the pair of glyphs.  
         */
        /* gdvirtual */ _fontRemoveKerning(fontRid: Rid, size: int64, glyphPair: Vector2I): void
        
        /** **Optional.**  
         *  Sets kerning for the pair of glyphs.  
         */
        /* gdvirtual */ _fontSetKerning(fontRid: Rid, size: int64, glyphPair: Vector2I, kerning: Vector2): void
        
        /** **Optional.**  
         *  Returns kerning for the pair of glyphs.  
         */
        /* gdvirtual */ _fontGetKerning(fontRid: Rid, size: int64, glyphPair: Vector2I): Vector2
        
        /** **Required.**  
         *  Returns the glyph index of a [param char], optionally modified by the [param variation_selector].  
         */
        /* gdvirtual */ _fontGetGlyphIndex(fontRid: Rid, size: int64, char: int64, variationSelector: int64): int64
        
        /** **Required.**  
         *  Returns character code associated with [param glyph_index], or `0` if [param glyph_index] is invalid.  
         */
        /* gdvirtual */ _fontGetCharFromGlyphIndex(fontRid: Rid, size: int64, glyphIndex: int64): int64
        
        /** **Required.**  
         *  Returns `true` if a Unicode [param char] is available in the font.  
         */
        /* gdvirtual */ _fontHasChar(fontRid: Rid, char: int64): boolean
        
        /** **Required.**  
         *  Returns a string containing all the characters available in the font.  
         */
        /* gdvirtual */ _fontGetSupportedChars(fontRid: Rid): string
        
        /** **Required.**  
         *  Returns an array containing all glyph indices in the font.  
         */
        /* gdvirtual */ _fontGetSupportedGlyphs(fontRid: Rid): PackedInt32Array
        
        /** **Optional.**  
         *  Renders the range of characters to the font cache texture.  
         */
        /* gdvirtual */ _fontRenderRange(fontRid: Rid, size: Vector2I, start: int64, end: int64): void
        
        /** **Optional.**  
         *  Renders specified glyph to the font cache texture.  
         */
        /* gdvirtual */ _fontRenderGlyph(fontRid: Rid, size: Vector2I, index: int64): void
        
        /** **Required.**  
         *  Draws single glyph into a canvas item at the position, using [param font_rid] at the size [param size]. If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used.  
         */
        /* gdvirtual */ _fontDrawGlyph(fontRid: Rid, canvas: Rid, size: int64, pos: Vector2, index: int64, color: Color, oversampling: float64): void
        
        /** **Required.**  
         *  Draws single glyph outline of size [param outline_size] into a canvas item at the position, using [param font_rid] at the size [param size]. If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used.  
         */
        /* gdvirtual */ _fontDrawGlyphOutline(fontRid: Rid, canvas: Rid, size: int64, outlineSize: int64, pos: Vector2, index: int64, color: Color, oversampling: float64): void
        
        /** **Optional.**  
         *  Returns `true`, if font supports given language ([url=https://en.wikipedia.org/wiki/ISO_639-1]ISO 639[/url] code).  
         */
        /* gdvirtual */ _fontIsLanguageSupported(fontRid: Rid, language: string): boolean
        
        /** **Optional.**  
         *  Adds override for [method _font_is_language_supported].  
         */
        /* gdvirtual */ _fontSetLanguageSupportOverride(fontRid: Rid, language: string, supported: boolean): void
        
        /** **Optional.**  
         *  Returns `true` if support override is enabled for the [param language].  
         */
        /* gdvirtual */ _fontGetLanguageSupportOverride(fontRid: Rid, language: string): boolean
        
        /** **Optional.**  
         *  Remove language support override.  
         */
        /* gdvirtual */ _fontRemoveLanguageSupportOverride(fontRid: Rid, language: string): void
        
        /** **Optional.**  
         *  Returns list of language support overrides.  
         */
        /* gdvirtual */ _fontGetLanguageSupportOverrides(fontRid: Rid): PackedStringArray
        
        /** **Optional.**  
         *  Returns `true`, if font supports given script (ISO 15924 code).  
         */
        /* gdvirtual */ _fontIsScriptSupported(fontRid: Rid, script: string): boolean
        
        /** **Optional.**  
         *  Adds override for [method _font_is_script_supported].  
         */
        /* gdvirtual */ _fontSetScriptSupportOverride(fontRid: Rid, script: string, supported: boolean): void
        
        /** **Optional.**  
         *  Returns `true` if support override is enabled for the [param script].  
         */
        /* gdvirtual */ _fontGetScriptSupportOverride(fontRid: Rid, script: string): boolean
        
        /** **Optional.**  
         *  Removes script support override.  
         */
        /* gdvirtual */ _fontRemoveScriptSupportOverride(fontRid: Rid, script: string): void
        
        /** **Optional.**  
         *  Returns list of script support overrides.  
         */
        /* gdvirtual */ _fontGetScriptSupportOverrides(fontRid: Rid): PackedStringArray
        
        /** **Optional.**  
         *  Sets font OpenType feature set override.  
         */
        /* gdvirtual */ _fontSetOpentypeFeatureOverrides(fontRid: Rid, overrides: GDictionary): void
        
        /** **Optional.**  
         *  Returns font OpenType feature set override.  
         */
        /* gdvirtual */ _fontGetOpentypeFeatureOverrides(fontRid: Rid): GDictionary
        
        /** **Optional.**  
         *  Returns the dictionary of the supported OpenType features.  
         */
        /* gdvirtual */ _fontSupportedFeatureList(fontRid: Rid): GDictionary
        
        /** **Optional.**  
         *  Returns the dictionary of the supported OpenType variation coordinates.  
         */
        /* gdvirtual */ _fontSupportedVariationList(fontRid: Rid): GDictionary
        
        /** **Optional.**  
         *  Returns the font oversampling factor, shared by all fonts in the TextServer.  
         */
        /* gdvirtual */ _fontGetGlobalOversampling(): float64
        
        /** **Optional.**  
         *  Sets oversampling factor, shared by all font in the TextServer.  
         */
        /* gdvirtual */ _fontSetGlobalOversampling(oversampling: float64): void
        
        /** **Required.**  
         *  Increases the reference count of the specified oversampling level. This method is called by [Viewport], and should not be used directly.  
         */
        /* gdvirtual */ _referenceOversamplingLevel(oversampling: float64): void
        
        /** **Required.**  
         *  Decreases the reference count of the specified oversampling level, and frees the font cache for oversampling level when the reference count reaches zero. This method is called by [Viewport], and should not be used directly.  
         */
        /* gdvirtual */ _unreferenceOversamplingLevel(oversampling: float64): void
        
        /** **Optional.**  
         *  Returns size of the replacement character (box with character hexadecimal code that is drawn in place of invalid characters).  
         */
        /* gdvirtual */ _getHexCodeBoxSize(size: int64, index: int64): Vector2
        
        /** **Optional.**  
         *  Draws box displaying character hexadecimal code.  
         */
        /* gdvirtual */ _drawHexCodeBox(canvas: Rid, size: int64, pos: Vector2, index: int64, color: Color): void
        
        /** **Required.**  
         *  Creates a new buffer for complex text layout, with the given [param direction] and [param orientation].  
         */
        /* gdvirtual */ _createShapedText(direction: TextServer.Direction, orientation: TextServer.Orientation): Rid
        
        /** **Required.**  
         *  Clears text buffer (removes text and inline objects).  
         */
        /* gdvirtual */ _shapedTextClear(shaped: Rid): void
        
        /** **Optional.**  
         *  Sets desired text direction. If set to [constant TextServer.DIRECTION_AUTO], direction will be detected based on the buffer contents and current locale.  
         */
        /* gdvirtual */ _shapedTextSetDirection(shaped: Rid, direction: TextServer.Direction): void
        
        /** **Optional.**  
         *  Returns direction of the text.  
         */
        /* gdvirtual */ _shapedTextGetDirection(shaped: Rid): TextServer.Direction
        
        /** **Optional.**  
         *  Returns direction of the text, inferred by the BiDi algorithm.  
         */
        /* gdvirtual */ _shapedTextGetInferredDirection(shaped: Rid): TextServer.Direction
        
        /** **Optional.**  
         *  Overrides BiDi for the structured text.  
         */
        /* gdvirtual */ _shapedTextSetBidiOverride(shaped: Rid, override: GArray): void
        
        /** **Optional.**  
         *  Sets custom punctuation character list, used for word breaking. If set to empty string, server defaults are used.  
         */
        /* gdvirtual */ _shapedTextSetCustomPunctuation(shaped: Rid, punct: string): void
        
        /** **Optional.**  
         *  Returns custom punctuation character list, used for word breaking. If set to empty string, server defaults are used.  
         */
        /* gdvirtual */ _shapedTextGetCustomPunctuation(shaped: Rid): string
        
        /** **Optional.**  
         *  Sets ellipsis character used for text clipping.  
         */
        /* gdvirtual */ _shapedTextSetCustomEllipsis(shaped: Rid, char: int64): void
        
        /** **Optional.**  
         *  Returns ellipsis character used for text clipping.  
         */
        /* gdvirtual */ _shapedTextGetCustomEllipsis(shaped: Rid): int64
        
        /** **Optional.**  
         *  Sets desired text orientation.  
         */
        /* gdvirtual */ _shapedTextSetOrientation(shaped: Rid, orientation: TextServer.Orientation): void
        
        /** **Optional.**  
         *  Returns text orientation.  
         */
        /* gdvirtual */ _shapedTextGetOrientation(shaped: Rid): TextServer.Orientation
        
        /** **Optional.**  
         *  If set to `true` text buffer will display invalid characters as hexadecimal codes, otherwise nothing is displayed.  
         */
        /* gdvirtual */ _shapedTextSetPreserveInvalid(shaped: Rid, enabled: boolean): void
        
        /** **Optional.**  
         *  Returns `true` if text buffer is configured to display hexadecimal codes in place of invalid characters.  
         */
        /* gdvirtual */ _shapedTextGetPreserveInvalid(shaped: Rid): boolean
        
        /** **Optional.**  
         *  If set to `true` text buffer will display control characters.  
         */
        /* gdvirtual */ _shapedTextSetPreserveControl(shaped: Rid, enabled: boolean): void
        
        /** **Optional.**  
         *  Returns `true` if text buffer is configured to display control characters.  
         */
        /* gdvirtual */ _shapedTextGetPreserveControl(shaped: Rid): boolean
        
        /** **Optional.**  
         *  Sets extra spacing added between glyphs or lines in pixels.  
         */
        /* gdvirtual */ _shapedTextSetSpacing(shaped: Rid, spacing: TextServer.SpacingType, value: int64): void
        
        /** **Optional.**  
         *  Returns extra spacing added between glyphs or lines in pixels.  
         */
        /* gdvirtual */ _shapedTextGetSpacing(shaped: Rid, spacing: TextServer.SpacingType): int64
        
        /** **Required.**  
         *  Adds text span and font to draw it to the text buffer.  
         */
        /* gdvirtual */ _shapedTextAddString(shaped: Rid, text: string, fonts: GArray, size: int64, opentypeFeatures: GDictionary, language: string, meta: any): boolean
        
        /** **Required.**  
         *  Adds inline object to the text buffer, [param key] must be unique. In the text, object is represented as [param length] object replacement characters.  
         */
        /* gdvirtual */ _shapedTextAddObject(shaped: Rid, key: any, size: Vector2, inlineAlign: InlineAlignment, length: int64, baseline: float64): boolean
        
        /** **Required.**  
         *  Sets new size and alignment of embedded object.  
         */
        /* gdvirtual */ _shapedTextResizeObject(shaped: Rid, key: any, size: Vector2, inlineAlign: InlineAlignment, baseline: float64): boolean
        
        /** **Required.**  
         *  Returns the text buffer source text, including object replacement characters.  
         */
        /* gdvirtual */ _shapedGetText(shaped: Rid): string
        
        /** **Required.**  
         *  Returns number of text spans added using [method _shaped_text_add_string] or [method _shaped_text_add_object].  
         */
        /* gdvirtual */ _shapedGetSpanCount(shaped: Rid): int64
        
        /** **Required.**  
         *  Returns text span metadata.  
         */
        /* gdvirtual */ _shapedGetSpanMeta(shaped: Rid, index: int64): any
        
        /** **Required.**  
         *  Returns text embedded object key.  
         */
        /* gdvirtual */ _shapedGetSpanEmbeddedObject(shaped: Rid, index: int64): any
        
        /** **Required.**  
         *  Returns the text span source text.  
         */
        /* gdvirtual */ _shapedGetSpanText(shaped: Rid, index: int64): string
        
        /** **Required.**  
         *  Returns the text span embedded object key.  
         */
        /* gdvirtual */ _shapedGetSpanObject(shaped: Rid, index: int64): any
        
        /** **Required.**  
         *  Changes text span font, font size, and OpenType features, without changing the text.  
         */
        /* gdvirtual */ _shapedSetSpanUpdateFont(shaped: Rid, index: int64, fonts: GArray, size: int64, opentypeFeatures: GDictionary): void
        
        /** **Required.**  
         *  Returns the number of uniform text runs in the buffer.  
         */
        /* gdvirtual */ _shapedGetRunCount(shaped: Rid): int64
        
        /** **Required.**  
         *  Returns the source text of the [param index] text run (in visual order).  
         */
        /* gdvirtual */ _shapedGetRunText(shaped: Rid, index: int64): string
        
        /** **Required.**  
         *  Returns the source text range of the [param index] text run (in visual order).  
         */
        /* gdvirtual */ _shapedGetRunRange(shaped: Rid, index: int64): Vector2I
        
        /** **Required.**  
         *  Returns the font RID of the [param index] text run (in visual order).  
         */
        /* gdvirtual */ _shapedGetRunFontRid(shaped: Rid, index: int64): Rid
        
        /** **Required.**  
         *  Returns the font size of the [param index] text run (in visual order).  
         */
        /* gdvirtual */ _shapedGetRunFontSize(shaped: Rid, index: int64): int64
        
        /** **Required.**  
         *  Returns the language of the [param index] text run (in visual order).  
         */
        /* gdvirtual */ _shapedGetRunLanguage(shaped: Rid, index: int64): string
        
        /** **Required.**  
         *  Returns the direction of the [param index] text run (in visual order).  
         */
        /* gdvirtual */ _shapedGetRunDirection(shaped: Rid, index: int64): TextServer.Direction
        
        /** **Required.**  
         *  Returns the embedded object of the [param index] text run (in visual order).  
         */
        /* gdvirtual */ _shapedGetRunObject(shaped: Rid, index: int64): any
        
        /** **Required.**  
         *  Returns text buffer for the substring of the text in the [param shaped] text buffer (including inline objects).  
         */
        /* gdvirtual */ _shapedTextSubstr(shaped: Rid, start: int64, length: int64): Rid
        
        /** **Required.**  
         *  Returns the parent buffer from which the substring originates.  
         */
        /* gdvirtual */ _shapedTextGetParent(shaped: Rid): Rid
        
        /** **Optional.**  
         *  Adjusts text width to fit to specified width, returns new text width.  
         */
        /* gdvirtual */ _shapedTextFitToWidth(shaped: Rid, width: float64, justificationFlags: TextServer.JustificationFlag): float64
        
        /** **Optional.**  
         *  Aligns shaped text to the given tab-stops.  
         */
        /* gdvirtual */ _shapedTextTabAlign(shaped: Rid, tabStops: PackedFloat32Array | float32[]): float64
        
        /** **Required.**  
         *  Shapes buffer if it's not shaped. Returns `true` if the string is shaped successfully.  
         */
        /* gdvirtual */ _shapedTextShape(shaped: Rid): boolean
        
        /** **Optional.**  
         *  Updates break points in the shaped text. This method is called by default implementation of text breaking functions.  
         */
        /* gdvirtual */ _shapedTextUpdateBreaks(shaped: Rid): boolean
        
        /** **Optional.**  
         *  Updates justification points in the shaped text. This method is called by default implementation of text justification functions.  
         */
        /* gdvirtual */ _shapedTextUpdateJustificationOps(shaped: Rid): boolean
        
        /** **Required.**  
         *  Returns `true` if buffer is successfully shaped.  
         */
        /* gdvirtual */ _shapedTextIsReady(shaped: Rid): boolean
        
        /** **Required.**  
         *  Returns an array of glyphs in the visual order.  
         */
        /* gdvirtual */ _shapedTextGetGlyphs(shaped: Rid): int64
        
        /** **Required.**  
         *  Returns text glyphs in the logical order.  
         */
        /* gdvirtual */ _shapedTextSortLogical(shaped: Rid): int64
        
        /** **Required.**  
         *  Returns number of glyphs in the buffer.  
         */
        /* gdvirtual */ _shapedTextGetGlyphCount(shaped: Rid): int64
        
        /** **Required.**  
         *  Returns substring buffer character range in the parent buffer.  
         */
        /* gdvirtual */ _shapedTextGetRange(shaped: Rid): Vector2I
        
        /** **Optional.**  
         *  Breaks text to the lines and columns. Returns character ranges for each segment.  
         */
        /* gdvirtual */ _shapedTextGetLineBreaksAdv(shaped: Rid, width: PackedFloat32Array | float32[], start: int64, once: boolean, breakFlags: TextServer.LineBreakFlag): PackedInt32Array
        
        /** **Optional.**  
         *  Breaks text to the lines and returns character ranges for each line.  
         */
        /* gdvirtual */ _shapedTextGetLineBreaks(shaped: Rid, width: float64, start: int64, breakFlags: TextServer.LineBreakFlag): PackedInt32Array
        
        /** **Optional.**  
         *  Breaks text into words and returns array of character ranges. Use [param grapheme_flags] to set what characters are used for breaking (see [enum TextServer.GraphemeFlag]).  
         */
        /* gdvirtual */ _shapedTextGetWordBreaks(shaped: Rid, graphemeFlags: TextServer.GraphemeFlag, skipGraphemeFlags: TextServer.GraphemeFlag): PackedInt32Array
        
        /** **Required.**  
         *  Returns the position of the overrun trim.  
         */
        /* gdvirtual */ _shapedTextGetTrimPos(shaped: Rid): int64
        
        /** **Required.**  
         *  Returns position of the ellipsis.  
         */
        /* gdvirtual */ _shapedTextGetEllipsisPos(shaped: Rid): int64
        
        /** **Required.**  
         *  Returns number of glyphs in the ellipsis.  
         */
        /* gdvirtual */ _shapedTextGetEllipsisGlyphCount(shaped: Rid): int64
        
        /** **Required.**  
         *  Returns array of the glyphs in the ellipsis.  
         */
        /* gdvirtual */ _shapedTextGetEllipsisGlyphs(shaped: Rid): int64
        
        /** **Optional.**  
         *  Trims text if it exceeds the given width.  
         */
        /* gdvirtual */ _shapedTextOverrunTrimToWidth(shaped: Rid, width: float64, trimFlags: TextServer.TextOverrunFlag): void
        
        /** **Required.**  
         *  Returns array of inline objects.  
         */
        /* gdvirtual */ _shapedTextGetObjects(shaped: Rid): GArray
        
        /** **Required.**  
         *  Returns bounding rectangle of the inline object.  
         */
        /* gdvirtual */ _shapedTextGetObjectRect(shaped: Rid, key: any): Rect2
        
        /** **Required.**  
         *  Returns the character range of the inline object.  
         */
        /* gdvirtual */ _shapedTextGetObjectRange(shaped: Rid, key: any): Vector2I
        
        /** **Required.**  
         *  Returns the glyph index of the inline object.  
         */
        /* gdvirtual */ _shapedTextGetObjectGlyph(shaped: Rid, key: any): int64
        
        /** **Required.**  
         *  Returns size of the text.  
         */
        /* gdvirtual */ _shapedTextGetSize(shaped: Rid): Vector2
        
        /** **Required.**  
         *  Returns the text ascent (number of pixels above the baseline for horizontal layout or to the left of baseline for vertical).  
         */
        /* gdvirtual */ _shapedTextGetAscent(shaped: Rid): float64
        
        /** **Required.**  
         *  Returns the text descent (number of pixels below the baseline for horizontal layout or to the right of baseline for vertical).  
         */
        /* gdvirtual */ _shapedTextGetDescent(shaped: Rid): float64
        
        /** **Required.**  
         *  Returns width (for horizontal layout) or height (for vertical) of the text.  
         */
        /* gdvirtual */ _shapedTextGetWidth(shaped: Rid): float64
        
        /** **Required.**  
         *  Returns pixel offset of the underline below the baseline.  
         */
        /* gdvirtual */ _shapedTextGetUnderlinePosition(shaped: Rid): float64
        
        /** **Required.**  
         *  Returns thickness of the underline.  
         */
        /* gdvirtual */ _shapedTextGetUnderlineThickness(shaped: Rid): float64
        
        /** **Optional.**  
         *  Returns dominant direction of in the range of text.  
         */
        /* gdvirtual */ _shapedTextGetDominantDirectionInRange(shaped: Rid, start: int64, end: int64): int64
        
        /** **Optional.**  
         *  Returns shapes of the carets corresponding to the character offset [param position] in the text. Returned caret shape is 1 pixel wide rectangle.  
         */
        /* gdvirtual */ _shapedTextGetCarets(shaped: Rid, position: int64, caret: int64): void
        
        /** **Optional.**  
         *  Returns selection rectangles for the specified character range.  
         */
        /* gdvirtual */ _shapedTextGetSelection(shaped: Rid, start: int64, end: int64): PackedVector2Array
        
        /** **Optional.**  
         *  Returns grapheme index at the specified pixel offset at the baseline, or `-1` if none is found.  
         */
        /* gdvirtual */ _shapedTextHitTestGrapheme(shaped: Rid, coord: float64): int64
        
        /** **Optional.**  
         *  Returns caret character offset at the specified pixel offset at the baseline. This function always returns a valid position.  
         */
        /* gdvirtual */ _shapedTextHitTestPosition(shaped: Rid, coord: float64): int64
        
        /** **Optional.**  
         *  Draw shaped text into a canvas item at a given position, with [param color]. [param pos] specifies the leftmost point of the baseline (for horizontal layout) or topmost point of the baseline (for vertical layout). If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used.  
         */
        /* gdvirtual */ _shapedTextDraw(shaped: Rid, canvas: Rid, pos: Vector2, clipL: float64, clipR: float64, color: Color, oversampling: float64): void
        
        /** **Optional.**  
         *  Draw the outline of the shaped text into a canvas item at a given position, with [param color]. [param pos] specifies the leftmost point of the baseline (for horizontal layout) or topmost point of the baseline (for vertical layout). If [param oversampling] is greater than zero, it is used as font oversampling factor, otherwise viewport oversampling settings are used.  
         */
        /* gdvirtual */ _shapedTextDrawOutline(shaped: Rid, canvas: Rid, pos: Vector2, clipL: float64, clipR: float64, outlineSize: int64, color: Color, oversampling: float64): void
        
        /** **Optional.**  
         *  Returns composite character's bounds as offsets from the start of the line.  
         */
        /* gdvirtual */ _shapedTextGetGraphemeBounds(shaped: Rid, pos: int64): Vector2
        
        /** **Optional.**  
         *  Returns grapheme end position closest to the [param pos].  
         */
        /* gdvirtual */ _shapedTextNextGraphemePos(shaped: Rid, pos: int64): int64
        
        /** **Optional.**  
         *  Returns grapheme start position closest to the [param pos].  
         */
        /* gdvirtual */ _shapedTextPrevGraphemePos(shaped: Rid, pos: int64): int64
        
        /** **Optional.**  
         *  Returns array of the composite character boundaries.  
         */
        /* gdvirtual */ _shapedTextGetCharacterBreaks(shaped: Rid): PackedInt32Array
        
        /** **Optional.**  
         *  Returns composite character end position closest to the [param pos].  
         */
        /* gdvirtual */ _shapedTextNextCharacterPos(shaped: Rid, pos: int64): int64
        
        /** **Optional.**  
         *  Returns composite character start position closest to the [param pos].  
         */
        /* gdvirtual */ _shapedTextPrevCharacterPos(shaped: Rid, pos: int64): int64
        
        /** **Optional.**  
         *  Returns composite character position closest to the [param pos].  
         */
        /* gdvirtual */ _shapedTextClosestCharacterPos(shaped: Rid, pos: int64): int64
        
        /** **Optional.**  
         *  Converts a number from the Western Arabic (0..9) to the numeral systems used in [param language].  
         */
        /* gdvirtual */ _formatNumber(number: string, language: string): string
        
        /** **Optional.**  
         *  Converts [param number] from the numeral systems used in [param language] to Western Arabic (0..9).  
         */
        /* gdvirtual */ _parseNumber(number: string, language: string): string
        
        /** **Optional.**  
         *  Returns percent sign used in the [param language].  
         */
        /* gdvirtual */ _percentSign(language: string): string
        
        /** **Optional.**  
         *  Strips diacritics from the string.  
         */
        /* gdvirtual */ _stripDiacritics(string_: string): string
        
        /** **Optional.**  
         *  Returns `true` if [param string] is a valid identifier.  
         */
        /* gdvirtual */ _isValidIdentifier(string_: string): boolean
        /* gdvirtual */ _isValidLetter(unicode: int64): boolean
        
        /** **Optional.**  
         *  Returns an array of the word break boundaries. Elements in the returned array are the offsets of the start and end of words. Therefore the length of the array is always even.  
         */
        /* gdvirtual */ _stringGetWordBreaks(string_: string, language: string, charsPerLine: int64): PackedInt32Array
        
        /** **Optional.**  
         *  Returns array of the composite character boundaries.  
         */
        /* gdvirtual */ _stringGetCharacterBreaks(string_: string, language: string): PackedInt32Array
        
        /** **Optional.**  
         *  Returns index of the first string in [param dict] which is visually confusable with the [param string], or `-1` if none is found.  
         */
        /* gdvirtual */ _isConfusable(string_: string, dict: PackedStringArray | string[]): int64
        
        /** **Optional.**  
         *  Returns `true` if [param string] is likely to be an attempt at confusing the reader.  
         */
        /* gdvirtual */ _spoofCheck(string_: string): boolean
        
        /** **Optional.**  
         *  Returns the string converted to uppercase.  
         */
        /* gdvirtual */ _stringToUpper(string_: string, language: string): string
        
        /** **Optional.**  
         *  Returns the string converted to lowercase.  
         */
        /* gdvirtual */ _stringToLower(string_: string, language: string): string
        
        /** **Optional.**  
         *  Returns the string converted to title case.  
         */
        /* gdvirtual */ _stringToTitle(string_: string, language: string): string
        
        /** **Optional.**  
         *  Default implementation of the BiDi algorithm override function. See [enum TextServer.StructuredTextParser] for more info.  
         */
        /* gdvirtual */ _parseStructuredText(parserType: TextServer.StructuredTextParser, args: GArray, text: string): GArray
        
        /** **Optional.**  
         *  This method is called before text server is unregistered.  
         */
        /* gdvirtual */ _cleanup(): void
    }
}
