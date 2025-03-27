// AUTO-GENERATED
/// <reference no-default-lib="true"/>
declare module "godot" {
    namespace XRBodyTracker {
        enum BodyFlags {
            BodyFlagUpperBodySupported = 1,
            BodyFlagLowerBodySupported = 2,
            BodyFlagHandsSupported = 4,
        }
        enum Joint {
            JointRoot = 0,
            JointHips = 1,
            JointSpine = 2,
            JointChest = 3,
            JointUpperChest = 4,
            JointNeck = 5,
            JointHead = 6,
            JointHeadTip = 7,
            JointLeftShoulder = 8,
            JointLeftUpperArm = 9,
            JointLeftLowerArm = 10,
            JointRightShoulder = 11,
            JointRightUpperArm = 12,
            JointRightLowerArm = 13,
            JointLeftUpperLeg = 14,
            JointLeftLowerLeg = 15,
            JointLeftFoot = 16,
            JointLeftToes = 17,
            JointRightUpperLeg = 18,
            JointRightLowerLeg = 19,
            JointRightFoot = 20,
            JointRightToes = 21,
            JointLeftHand = 22,
            JointLeftPalm = 23,
            JointLeftWrist = 24,
            JointLeftThumbMetacarpal = 25,
            JointLeftThumbPhalanxProximal = 26,
            JointLeftThumbPhalanxDistal = 27,
            JointLeftThumbTip = 28,
            JointLeftIndexFingerMetacarpal = 29,
            JointLeftIndexFingerPhalanxProximal = 30,
            JointLeftIndexFingerPhalanxIntermediate = 31,
            JointLeftIndexFingerPhalanxDistal = 32,
            JointLeftIndexFingerTip = 33,
            JointLeftMiddleFingerMetacarpal = 34,
            JointLeftMiddleFingerPhalanxProximal = 35,
            JointLeftMiddleFingerPhalanxIntermediate = 36,
            JointLeftMiddleFingerPhalanxDistal = 37,
            JointLeftMiddleFingerTip = 38,
            JointLeftRingFingerMetacarpal = 39,
            JointLeftRingFingerPhalanxProximal = 40,
            JointLeftRingFingerPhalanxIntermediate = 41,
            JointLeftRingFingerPhalanxDistal = 42,
            JointLeftRingFingerTip = 43,
            JointLeftPinkyFingerMetacarpal = 44,
            JointLeftPinkyFingerPhalanxProximal = 45,
            JointLeftPinkyFingerPhalanxIntermediate = 46,
            JointLeftPinkyFingerPhalanxDistal = 47,
            JointLeftPinkyFingerTip = 48,
            JointRightHand = 49,
            JointRightPalm = 50,
            JointRightWrist = 51,
            JointRightThumbMetacarpal = 52,
            JointRightThumbPhalanxProximal = 53,
            JointRightThumbPhalanxDistal = 54,
            JointRightThumbTip = 55,
            JointRightIndexFingerMetacarpal = 56,
            JointRightIndexFingerPhalanxProximal = 57,
            JointRightIndexFingerPhalanxIntermediate = 58,
            JointRightIndexFingerPhalanxDistal = 59,
            JointRightIndexFingerTip = 60,
            JointRightMiddleFingerMetacarpal = 61,
            JointRightMiddleFingerPhalanxProximal = 62,
            JointRightMiddleFingerPhalanxIntermediate = 63,
            JointRightMiddleFingerPhalanxDistal = 64,
            JointRightMiddleFingerTip = 65,
            JointRightRingFingerMetacarpal = 66,
            JointRightRingFingerPhalanxProximal = 67,
            JointRightRingFingerPhalanxIntermediate = 68,
            JointRightRingFingerPhalanxDistal = 69,
            JointRightRingFingerTip = 70,
            JointRightPinkyFingerMetacarpal = 71,
            JointRightPinkyFingerPhalanxProximal = 72,
            JointRightPinkyFingerPhalanxIntermediate = 73,
            JointRightPinkyFingerPhalanxDistal = 74,
            JointRightPinkyFingerTip = 75,
            JointMax = 76,
        }
        enum JointFlags {
            JointFlagOrientationValid = 1,
            JointFlagOrientationTracked = 2,
            JointFlagPositionValid = 4,
            JointFlagPositionTracked = 8,
        }
    }
    /** A tracked body in XR.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_xrbodytracker.html  
     */
    class XRBodyTracker extends XRPositionalTracker {
        /** Upper body tracking supported. */
        static readonly BODY_FLAG_UPPER_BODY_SUPPORTED = 1
        
        /** Lower body tracking supported. */
        static readonly BODY_FLAG_LOWER_BODY_SUPPORTED = 2
        
        /** Hand tracking supported. */
        static readonly BODY_FLAG_HANDS_SUPPORTED = 4
        
        /** Root joint. */
        static readonly JOINT_ROOT = 0
        
        /** Hips joint. */
        static readonly JOINT_HIPS = 1
        
        /** Spine joint. */
        static readonly JOINT_SPINE = 2
        
        /** Chest joint. */
        static readonly JOINT_CHEST = 3
        
        /** Upper chest joint. */
        static readonly JOINT_UPPER_CHEST = 4
        
        /** Neck joint. */
        static readonly JOINT_NECK = 5
        
        /** Head joint. */
        static readonly JOINT_HEAD = 6
        
        /** Head tip joint. */
        static readonly JOINT_HEAD_TIP = 7
        
        /** Left shoulder joint. */
        static readonly JOINT_LEFT_SHOULDER = 8
        
        /** Left upper arm joint. */
        static readonly JOINT_LEFT_UPPER_ARM = 9
        
        /** Left lower arm joint. */
        static readonly JOINT_LEFT_LOWER_ARM = 10
        
        /** Right shoulder joint. */
        static readonly JOINT_RIGHT_SHOULDER = 11
        
        /** Right upper arm joint. */
        static readonly JOINT_RIGHT_UPPER_ARM = 12
        
        /** Right lower arm joint. */
        static readonly JOINT_RIGHT_LOWER_ARM = 13
        
        /** Left upper leg joint. */
        static readonly JOINT_LEFT_UPPER_LEG = 14
        
        /** Left lower leg joint. */
        static readonly JOINT_LEFT_LOWER_LEG = 15
        
        /** Left foot joint. */
        static readonly JOINT_LEFT_FOOT = 16
        
        /** Left toes joint. */
        static readonly JOINT_LEFT_TOES = 17
        
        /** Right upper leg joint. */
        static readonly JOINT_RIGHT_UPPER_LEG = 18
        
        /** Right lower leg joint. */
        static readonly JOINT_RIGHT_LOWER_LEG = 19
        
        /** Right foot joint. */
        static readonly JOINT_RIGHT_FOOT = 20
        
        /** Right toes joint. */
        static readonly JOINT_RIGHT_TOES = 21
        
        /** Left hand joint. */
        static readonly JOINT_LEFT_HAND = 22
        
        /** Left palm joint. */
        static readonly JOINT_LEFT_PALM = 23
        
        /** Left wrist joint. */
        static readonly JOINT_LEFT_WRIST = 24
        
        /** Left thumb metacarpal joint. */
        static readonly JOINT_LEFT_THUMB_METACARPAL = 25
        
        /** Left thumb phalanx proximal joint. */
        static readonly JOINT_LEFT_THUMB_PHALANX_PROXIMAL = 26
        
        /** Left thumb phalanx distal joint. */
        static readonly JOINT_LEFT_THUMB_PHALANX_DISTAL = 27
        
        /** Left thumb tip joint. */
        static readonly JOINT_LEFT_THUMB_TIP = 28
        
        /** Left index finger metacarpal joint. */
        static readonly JOINT_LEFT_INDEX_FINGER_METACARPAL = 29
        
        /** Left index finger phalanx proximal joint. */
        static readonly JOINT_LEFT_INDEX_FINGER_PHALANX_PROXIMAL = 30
        
        /** Left index finger phalanx intermediate joint. */
        static readonly JOINT_LEFT_INDEX_FINGER_PHALANX_INTERMEDIATE = 31
        
        /** Left index finger phalanx distal joint. */
        static readonly JOINT_LEFT_INDEX_FINGER_PHALANX_DISTAL = 32
        
        /** Left index finger tip joint. */
        static readonly JOINT_LEFT_INDEX_FINGER_TIP = 33
        
        /** Left middle finger metacarpal joint. */
        static readonly JOINT_LEFT_MIDDLE_FINGER_METACARPAL = 34
        
        /** Left middle finger phalanx proximal joint. */
        static readonly JOINT_LEFT_MIDDLE_FINGER_PHALANX_PROXIMAL = 35
        
        /** Left middle finger phalanx intermediate joint. */
        static readonly JOINT_LEFT_MIDDLE_FINGER_PHALANX_INTERMEDIATE = 36
        
        /** Left middle finger phalanx distal joint. */
        static readonly JOINT_LEFT_MIDDLE_FINGER_PHALANX_DISTAL = 37
        
        /** Left middle finger tip joint. */
        static readonly JOINT_LEFT_MIDDLE_FINGER_TIP = 38
        
        /** Left ring finger metacarpal joint. */
        static readonly JOINT_LEFT_RING_FINGER_METACARPAL = 39
        
        /** Left ring finger phalanx proximal joint. */
        static readonly JOINT_LEFT_RING_FINGER_PHALANX_PROXIMAL = 40
        
        /** Left ring finger phalanx intermediate joint. */
        static readonly JOINT_LEFT_RING_FINGER_PHALANX_INTERMEDIATE = 41
        
        /** Left ring finger phalanx distal joint. */
        static readonly JOINT_LEFT_RING_FINGER_PHALANX_DISTAL = 42
        
        /** Left ring finger tip joint. */
        static readonly JOINT_LEFT_RING_FINGER_TIP = 43
        
        /** Left pinky finger metacarpal joint. */
        static readonly JOINT_LEFT_PINKY_FINGER_METACARPAL = 44
        
        /** Left pinky finger phalanx proximal joint. */
        static readonly JOINT_LEFT_PINKY_FINGER_PHALANX_PROXIMAL = 45
        
        /** Left pinky finger phalanx intermediate joint. */
        static readonly JOINT_LEFT_PINKY_FINGER_PHALANX_INTERMEDIATE = 46
        
        /** Left pinky finger phalanx distal joint. */
        static readonly JOINT_LEFT_PINKY_FINGER_PHALANX_DISTAL = 47
        
        /** Left pinky finger tip joint. */
        static readonly JOINT_LEFT_PINKY_FINGER_TIP = 48
        
        /** Right hand joint. */
        static readonly JOINT_RIGHT_HAND = 49
        
        /** Right palm joint. */
        static readonly JOINT_RIGHT_PALM = 50
        
        /** Right wrist joint. */
        static readonly JOINT_RIGHT_WRIST = 51
        
        /** Right thumb metacarpal joint. */
        static readonly JOINT_RIGHT_THUMB_METACARPAL = 52
        
        /** Right thumb phalanx proximal joint. */
        static readonly JOINT_RIGHT_THUMB_PHALANX_PROXIMAL = 53
        
        /** Right thumb phalanx distal joint. */
        static readonly JOINT_RIGHT_THUMB_PHALANX_DISTAL = 54
        
        /** Right thumb tip joint. */
        static readonly JOINT_RIGHT_THUMB_TIP = 55
        
        /** Right index finger metacarpal joint. */
        static readonly JOINT_RIGHT_INDEX_FINGER_METACARPAL = 56
        
        /** Right index finger phalanx proximal joint. */
        static readonly JOINT_RIGHT_INDEX_FINGER_PHALANX_PROXIMAL = 57
        
        /** Right index finger phalanx intermediate joint. */
        static readonly JOINT_RIGHT_INDEX_FINGER_PHALANX_INTERMEDIATE = 58
        
        /** Right index finger phalanx distal joint. */
        static readonly JOINT_RIGHT_INDEX_FINGER_PHALANX_DISTAL = 59
        
        /** Right index finger tip joint. */
        static readonly JOINT_RIGHT_INDEX_FINGER_TIP = 60
        
        /** Right middle finger metacarpal joint. */
        static readonly JOINT_RIGHT_MIDDLE_FINGER_METACARPAL = 61
        
        /** Right middle finger phalanx proximal joint. */
        static readonly JOINT_RIGHT_MIDDLE_FINGER_PHALANX_PROXIMAL = 62
        
        /** Right middle finger phalanx intermediate joint. */
        static readonly JOINT_RIGHT_MIDDLE_FINGER_PHALANX_INTERMEDIATE = 63
        
        /** Right middle finger phalanx distal joint. */
        static readonly JOINT_RIGHT_MIDDLE_FINGER_PHALANX_DISTAL = 64
        
        /** Right middle finger tip joint. */
        static readonly JOINT_RIGHT_MIDDLE_FINGER_TIP = 65
        
        /** Right ring finger metacarpal joint. */
        static readonly JOINT_RIGHT_RING_FINGER_METACARPAL = 66
        
        /** Right ring finger phalanx proximal joint. */
        static readonly JOINT_RIGHT_RING_FINGER_PHALANX_PROXIMAL = 67
        
        /** Right ring finger phalanx intermediate joint. */
        static readonly JOINT_RIGHT_RING_FINGER_PHALANX_INTERMEDIATE = 68
        
        /** Right ring finger phalanx distal joint. */
        static readonly JOINT_RIGHT_RING_FINGER_PHALANX_DISTAL = 69
        
        /** Right ring finger tip joint. */
        static readonly JOINT_RIGHT_RING_FINGER_TIP = 70
        
        /** Right pinky finger metacarpal joint. */
        static readonly JOINT_RIGHT_PINKY_FINGER_METACARPAL = 71
        
        /** Right pinky finger phalanx proximal joint. */
        static readonly JOINT_RIGHT_PINKY_FINGER_PHALANX_PROXIMAL = 72
        
        /** Right pinky finger phalanx intermediate joint. */
        static readonly JOINT_RIGHT_PINKY_FINGER_PHALANX_INTERMEDIATE = 73
        
        /** Right pinky finger phalanx distal joint. */
        static readonly JOINT_RIGHT_PINKY_FINGER_PHALANX_DISTAL = 74
        
        /** Right pinky finger tip joint. */
        static readonly JOINT_RIGHT_PINKY_FINGER_TIP = 75
        
        /** Represents the size of the [enum Joint] enum. */
        static readonly JOINT_MAX = 76
        
        /** The joint's orientation data is valid. */
        static readonly JOINT_FLAG_ORIENTATION_VALID = 1
        
        /** The joint's orientation is actively tracked. May not be set if tracking has been temporarily lost. */
        static readonly JOINT_FLAG_ORIENTATION_TRACKED = 2
        
        /** The joint's position data is valid. */
        static readonly JOINT_FLAG_POSITION_VALID = 4
        
        /** The joint's position is actively tracked. May not be set if tracking has been temporarily lost. */
        static readonly JOINT_FLAG_POSITION_TRACKED = 8
        constructor(identifier?: any)
        setJointFlags(joint: XRBodyTracker.Joint, flags: XRBodyTracker.JointFlags): void
        getJointFlags(joint: XRBodyTracker.Joint): XRBodyTracker.JointFlags
        setJointTransform(joint: XRBodyTracker.Joint, transform: Transform3D): void
        getJointTransform(joint: XRBodyTracker.Joint): Transform3D
        get hasTrackingData(): boolean
        set hasTrackingData(value: boolean)
        get bodyFlags(): int64
        set bodyFlags(value: int64)
    }
    /** A camera node with a few overrules for AR/VR applied, such as location tracking.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_xrcamera3d.html  
     */
    class XRCamera3D<Map extends Record<string, Node> = {}> extends Camera3D<Map> {
        constructor(identifier?: any)
    }
    /** A 3D node representing a spatially-tracked controller.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_xrcontroller3d.html  
     */
    class XRController3D<Map extends Record<string, Node> = {}> extends XRNode3D<Map> {
        constructor(identifier?: any)
        isButtonPressed(name: StringName): boolean
        getInput(name: StringName): any
        getFloat(name: StringName): float64
        getVector2(name: StringName): Vector2
        getTrackerHand(): XRPositionalTracker.TrackerHand
        readonly buttonPressed: Signal<(name: string) => void>
        readonly buttonReleased: Signal<(name: string) => void>
        readonly inputFloatChanged: Signal<(name: string, value: float64) => void>
        readonly inputVector2Changed: Signal<(name: string, value: Vector2) => void>
        readonly profileChanged: Signal<(role: string) => void>
    }
    /** A tracked controller.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_xrcontrollertracker.html  
     */
    class XRControllerTracker extends XRPositionalTracker {
        constructor(identifier?: any)
    }
    /** A node for driving standard face meshes from [XRFaceTracker] weights.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_xrfacemodifier3d.html  
     */
    class XRFaceModifier3D<Map extends Record<string, Node> = {}> extends Node3D<Map> {
        constructor(identifier?: any)
        get faceTracker(): string
        set faceTracker(value: string)
        
        /** The [NodePath] of the face [MeshInstance3D]. */
        get target(): NodePath
        set target(value: NodePath | string)
    }
    namespace XRFaceTracker {
        enum BlendShapeEntry {
            FtEyeLookOutRight = 0,
            FtEyeLookInRight = 1,
            FtEyeLookUpRight = 2,
            FtEyeLookDownRight = 3,
            FtEyeLookOutLeft = 4,
            FtEyeLookInLeft = 5,
            FtEyeLookUpLeft = 6,
            FtEyeLookDownLeft = 7,
            FtEyeClosedRight = 8,
            FtEyeClosedLeft = 9,
            FtEyeSquintRight = 10,
            FtEyeSquintLeft = 11,
            FtEyeWideRight = 12,
            FtEyeWideLeft = 13,
            FtEyeDilationRight = 14,
            FtEyeDilationLeft = 15,
            FtEyeConstrictRight = 16,
            FtEyeConstrictLeft = 17,
            FtBrowPinchRight = 18,
            FtBrowPinchLeft = 19,
            FtBrowLowererRight = 20,
            FtBrowLowererLeft = 21,
            FtBrowInnerUpRight = 22,
            FtBrowInnerUpLeft = 23,
            FtBrowOuterUpRight = 24,
            FtBrowOuterUpLeft = 25,
            FtNoseSneerRight = 26,
            FtNoseSneerLeft = 27,
            FtNasalDilationRight = 28,
            FtNasalDilationLeft = 29,
            FtNasalConstrictRight = 30,
            FtNasalConstrictLeft = 31,
            FtCheekSquintRight = 32,
            FtCheekSquintLeft = 33,
            FtCheekPuffRight = 34,
            FtCheekPuffLeft = 35,
            FtCheekSuckRight = 36,
            FtCheekSuckLeft = 37,
            FtJawOpen = 38,
            FtMouthClosed = 39,
            FtJawRight = 40,
            FtJawLeft = 41,
            FtJawForward = 42,
            FtJawBackward = 43,
            FtJawClench = 44,
            FtJawMandibleRaise = 45,
            FtLipSuckUpperRight = 46,
            FtLipSuckUpperLeft = 47,
            FtLipSuckLowerRight = 48,
            FtLipSuckLowerLeft = 49,
            FtLipSuckCornerRight = 50,
            FtLipSuckCornerLeft = 51,
            FtLipFunnelUpperRight = 52,
            FtLipFunnelUpperLeft = 53,
            FtLipFunnelLowerRight = 54,
            FtLipFunnelLowerLeft = 55,
            FtLipPuckerUpperRight = 56,
            FtLipPuckerUpperLeft = 57,
            FtLipPuckerLowerRight = 58,
            FtLipPuckerLowerLeft = 59,
            FtMouthUpperUpRight = 60,
            FtMouthUpperUpLeft = 61,
            FtMouthLowerDownRight = 62,
            FtMouthLowerDownLeft = 63,
            FtMouthUpperDeepenRight = 64,
            FtMouthUpperDeepenLeft = 65,
            FtMouthUpperRight = 66,
            FtMouthUpperLeft = 67,
            FtMouthLowerRight = 68,
            FtMouthLowerLeft = 69,
            FtMouthCornerPullRight = 70,
            FtMouthCornerPullLeft = 71,
            FtMouthCornerSlantRight = 72,
            FtMouthCornerSlantLeft = 73,
            FtMouthFrownRight = 74,
            FtMouthFrownLeft = 75,
            FtMouthStretchRight = 76,
            FtMouthStretchLeft = 77,
            FtMouthDimpleRight = 78,
            FtMouthDimpleLeft = 79,
            FtMouthRaiserUpper = 80,
            FtMouthRaiserLower = 81,
            FtMouthPressRight = 82,
            FtMouthPressLeft = 83,
            FtMouthTightenerRight = 84,
            FtMouthTightenerLeft = 85,
            FtTongueOut = 86,
            FtTongueUp = 87,
            FtTongueDown = 88,
            FtTongueRight = 89,
            FtTongueLeft = 90,
            FtTongueRoll = 91,
            FtTongueBlendDown = 92,
            FtTongueCurlUp = 93,
            FtTongueSquish = 94,
            FtTongueFlat = 95,
            FtTongueTwistRight = 96,
            FtTongueTwistLeft = 97,
            FtSoftPalateClose = 98,
            FtThroatSwallow = 99,
            FtNeckFlexRight = 100,
            FtNeckFlexLeft = 101,
            FtEyeClosed = 102,
            FtEyeWide = 103,
            FtEyeSquint = 104,
            FtEyeDilation = 105,
            FtEyeConstrict = 106,
            FtBrowDownRight = 107,
            FtBrowDownLeft = 108,
            FtBrowDown = 109,
            FtBrowUpRight = 110,
            FtBrowUpLeft = 111,
            FtBrowUp = 112,
            FtNoseSneer = 113,
            FtNasalDilation = 114,
            FtNasalConstrict = 115,
            FtCheekPuff = 116,
            FtCheekSuck = 117,
            FtCheekSquint = 118,
            FtLipSuckUpper = 119,
            FtLipSuckLower = 120,
            FtLipSuck = 121,
            FtLipFunnelUpper = 122,
            FtLipFunnelLower = 123,
            FtLipFunnel = 124,
            FtLipPuckerUpper = 125,
            FtLipPuckerLower = 126,
            FtLipPucker = 127,
            FtMouthUpperUp = 128,
            FtMouthLowerDown = 129,
            FtMouthOpen = 130,
            FtMouthRight = 131,
            FtMouthLeft = 132,
            FtMouthSmileRight = 133,
            FtMouthSmileLeft = 134,
            FtMouthSmile = 135,
            FtMouthSadRight = 136,
            FtMouthSadLeft = 137,
            FtMouthSad = 138,
            FtMouthStretch = 139,
            FtMouthDimple = 140,
            FtMouthTightener = 141,
            FtMouthPress = 142,
            FtMax = 143,
        }
    }
    /** A tracked face.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_xrfacetracker.html  
     */
    class XRFaceTracker extends XRTracker {
        /** Right eye looks outwards. */
        static readonly FT_EYE_LOOK_OUT_RIGHT = 0
        
        /** Right eye looks inwards. */
        static readonly FT_EYE_LOOK_IN_RIGHT = 1
        
        /** Right eye looks upwards. */
        static readonly FT_EYE_LOOK_UP_RIGHT = 2
        
        /** Right eye looks downwards. */
        static readonly FT_EYE_LOOK_DOWN_RIGHT = 3
        
        /** Left eye looks outwards. */
        static readonly FT_EYE_LOOK_OUT_LEFT = 4
        
        /** Left eye looks inwards. */
        static readonly FT_EYE_LOOK_IN_LEFT = 5
        
        /** Left eye looks upwards. */
        static readonly FT_EYE_LOOK_UP_LEFT = 6
        
        /** Left eye looks downwards. */
        static readonly FT_EYE_LOOK_DOWN_LEFT = 7
        
        /** Closes the right eyelid. */
        static readonly FT_EYE_CLOSED_RIGHT = 8
        
        /** Closes the left eyelid. */
        static readonly FT_EYE_CLOSED_LEFT = 9
        
        /** Squeezes the right eye socket muscles. */
        static readonly FT_EYE_SQUINT_RIGHT = 10
        
        /** Squeezes the left eye socket muscles. */
        static readonly FT_EYE_SQUINT_LEFT = 11
        
        /** Right eyelid widens beyond relaxed. */
        static readonly FT_EYE_WIDE_RIGHT = 12
        
        /** Left eyelid widens beyond relaxed. */
        static readonly FT_EYE_WIDE_LEFT = 13
        
        /** Dilates the right eye pupil. */
        static readonly FT_EYE_DILATION_RIGHT = 14
        
        /** Dilates the left eye pupil. */
        static readonly FT_EYE_DILATION_LEFT = 15
        
        /** Constricts the right eye pupil. */
        static readonly FT_EYE_CONSTRICT_RIGHT = 16
        
        /** Constricts the left eye pupil. */
        static readonly FT_EYE_CONSTRICT_LEFT = 17
        
        /** Right eyebrow pinches in. */
        static readonly FT_BROW_PINCH_RIGHT = 18
        
        /** Left eyebrow pinches in. */
        static readonly FT_BROW_PINCH_LEFT = 19
        
        /** Outer right eyebrow pulls down. */
        static readonly FT_BROW_LOWERER_RIGHT = 20
        
        /** Outer left eyebrow pulls down. */
        static readonly FT_BROW_LOWERER_LEFT = 21
        
        /** Inner right eyebrow pulls up. */
        static readonly FT_BROW_INNER_UP_RIGHT = 22
        
        /** Inner left eyebrow pulls up. */
        static readonly FT_BROW_INNER_UP_LEFT = 23
        
        /** Outer right eyebrow pulls up. */
        static readonly FT_BROW_OUTER_UP_RIGHT = 24
        
        /** Outer left eyebrow pulls up. */
        static readonly FT_BROW_OUTER_UP_LEFT = 25
        
        /** Right side face sneers. */
        static readonly FT_NOSE_SNEER_RIGHT = 26
        
        /** Left side face sneers. */
        static readonly FT_NOSE_SNEER_LEFT = 27
        
        /** Right side nose canal dilates. */
        static readonly FT_NASAL_DILATION_RIGHT = 28
        
        /** Left side nose canal dilates. */
        static readonly FT_NASAL_DILATION_LEFT = 29
        
        /** Right side nose canal constricts. */
        static readonly FT_NASAL_CONSTRICT_RIGHT = 30
        
        /** Left side nose canal constricts. */
        static readonly FT_NASAL_CONSTRICT_LEFT = 31
        
        /** Raises the right side cheek. */
        static readonly FT_CHEEK_SQUINT_RIGHT = 32
        
        /** Raises the left side cheek. */
        static readonly FT_CHEEK_SQUINT_LEFT = 33
        
        /** Puffs the right side cheek. */
        static readonly FT_CHEEK_PUFF_RIGHT = 34
        
        /** Puffs the left side cheek. */
        static readonly FT_CHEEK_PUFF_LEFT = 35
        
        /** Sucks in the right side cheek. */
        static readonly FT_CHEEK_SUCK_RIGHT = 36
        
        /** Sucks in the left side cheek. */
        static readonly FT_CHEEK_SUCK_LEFT = 37
        
        /** Opens jawbone. */
        static readonly FT_JAW_OPEN = 38
        
        /** Closes the mouth. */
        static readonly FT_MOUTH_CLOSED = 39
        
        /** Pushes jawbone right. */
        static readonly FT_JAW_RIGHT = 40
        
        /** Pushes jawbone left. */
        static readonly FT_JAW_LEFT = 41
        
        /** Pushes jawbone forward. */
        static readonly FT_JAW_FORWARD = 42
        
        /** Pushes jawbone backward. */
        static readonly FT_JAW_BACKWARD = 43
        
        /** Flexes jaw muscles. */
        static readonly FT_JAW_CLENCH = 44
        
        /** Raises the jawbone. */
        static readonly FT_JAW_MANDIBLE_RAISE = 45
        
        /** Upper right lip part tucks in the mouth. */
        static readonly FT_LIP_SUCK_UPPER_RIGHT = 46
        
        /** Upper left lip part tucks in the mouth. */
        static readonly FT_LIP_SUCK_UPPER_LEFT = 47
        
        /** Lower right lip part tucks in the mouth. */
        static readonly FT_LIP_SUCK_LOWER_RIGHT = 48
        
        /** Lower left lip part tucks in the mouth. */
        static readonly FT_LIP_SUCK_LOWER_LEFT = 49
        
        /** Right lip corner folds into the mouth. */
        static readonly FT_LIP_SUCK_CORNER_RIGHT = 50
        
        /** Left lip corner folds into the mouth. */
        static readonly FT_LIP_SUCK_CORNER_LEFT = 51
        
        /** Upper right lip part pushes into a funnel. */
        static readonly FT_LIP_FUNNEL_UPPER_RIGHT = 52
        
        /** Upper left lip part pushes into a funnel. */
        static readonly FT_LIP_FUNNEL_UPPER_LEFT = 53
        
        /** Lower right lip part pushes into a funnel. */
        static readonly FT_LIP_FUNNEL_LOWER_RIGHT = 54
        
        /** Lower left lip part pushes into a funnel. */
        static readonly FT_LIP_FUNNEL_LOWER_LEFT = 55
        
        /** Upper right lip part pushes outwards. */
        static readonly FT_LIP_PUCKER_UPPER_RIGHT = 56
        
        /** Upper left lip part pushes outwards. */
        static readonly FT_LIP_PUCKER_UPPER_LEFT = 57
        
        /** Lower right lip part pushes outwards. */
        static readonly FT_LIP_PUCKER_LOWER_RIGHT = 58
        
        /** Lower left lip part pushes outwards. */
        static readonly FT_LIP_PUCKER_LOWER_LEFT = 59
        
        /** Upper right part of the lip pulls up. */
        static readonly FT_MOUTH_UPPER_UP_RIGHT = 60
        
        /** Upper left part of the lip pulls up. */
        static readonly FT_MOUTH_UPPER_UP_LEFT = 61
        
        /** Lower right part of the lip pulls up. */
        static readonly FT_MOUTH_LOWER_DOWN_RIGHT = 62
        
        /** Lower left part of the lip pulls up. */
        static readonly FT_MOUTH_LOWER_DOWN_LEFT = 63
        
        /** Upper right lip part pushes in the cheek. */
        static readonly FT_MOUTH_UPPER_DEEPEN_RIGHT = 64
        
        /** Upper left lip part pushes in the cheek. */
        static readonly FT_MOUTH_UPPER_DEEPEN_LEFT = 65
        
        /** Moves upper lip right. */
        static readonly FT_MOUTH_UPPER_RIGHT = 66
        
        /** Moves upper lip left. */
        static readonly FT_MOUTH_UPPER_LEFT = 67
        
        /** Moves lower lip right. */
        static readonly FT_MOUTH_LOWER_RIGHT = 68
        
        /** Moves lower lip left. */
        static readonly FT_MOUTH_LOWER_LEFT = 69
        
        /** Right lip corner pulls diagonally up and out. */
        static readonly FT_MOUTH_CORNER_PULL_RIGHT = 70
        
        /** Left lip corner pulls diagonally up and out. */
        static readonly FT_MOUTH_CORNER_PULL_LEFT = 71
        
        /** Right corner lip slants up. */
        static readonly FT_MOUTH_CORNER_SLANT_RIGHT = 72
        
        /** Left corner lip slants up. */
        static readonly FT_MOUTH_CORNER_SLANT_LEFT = 73
        
        /** Right corner lip pulls down. */
        static readonly FT_MOUTH_FROWN_RIGHT = 74
        
        /** Left corner lip pulls down. */
        static readonly FT_MOUTH_FROWN_LEFT = 75
        
        /** Mouth corner lip pulls out and down. */
        static readonly FT_MOUTH_STRETCH_RIGHT = 76
        
        /** Mouth corner lip pulls out and down. */
        static readonly FT_MOUTH_STRETCH_LEFT = 77
        
        /** Right lip corner is pushed backwards. */
        static readonly FT_MOUTH_DIMPLE_RIGHT = 78
        
        /** Left lip corner is pushed backwards. */
        static readonly FT_MOUTH_DIMPLE_LEFT = 79
        
        /** Raises and slightly pushes out the upper mouth. */
        static readonly FT_MOUTH_RAISER_UPPER = 80
        
        /** Raises and slightly pushes out the lower mouth. */
        static readonly FT_MOUTH_RAISER_LOWER = 81
        
        /** Right side lips press and flatten together vertically. */
        static readonly FT_MOUTH_PRESS_RIGHT = 82
        
        /** Left side lips press and flatten together vertically. */
        static readonly FT_MOUTH_PRESS_LEFT = 83
        
        /** Right side lips squeeze together horizontally. */
        static readonly FT_MOUTH_TIGHTENER_RIGHT = 84
        
        /** Left side lips squeeze together horizontally. */
        static readonly FT_MOUTH_TIGHTENER_LEFT = 85
        
        /** Tongue visibly sticks out of the mouth. */
        static readonly FT_TONGUE_OUT = 86
        
        /** Tongue points upwards. */
        static readonly FT_TONGUE_UP = 87
        
        /** Tongue points downwards. */
        static readonly FT_TONGUE_DOWN = 88
        
        /** Tongue points right. */
        static readonly FT_TONGUE_RIGHT = 89
        
        /** Tongue points left. */
        static readonly FT_TONGUE_LEFT = 90
        
        /** Sides of the tongue funnel, creating a roll. */
        static readonly FT_TONGUE_ROLL = 91
        
        /** Tongue arches up then down inside the mouth. */
        static readonly FT_TONGUE_BLEND_DOWN = 92
        
        /** Tongue arches down then up inside the mouth. */
        static readonly FT_TONGUE_CURL_UP = 93
        
        /** Tongue squishes together and thickens. */
        static readonly FT_TONGUE_SQUISH = 94
        
        /** Tongue flattens and thins out. */
        static readonly FT_TONGUE_FLAT = 95
        
        /** Tongue tip rotates clockwise, with the rest following gradually. */
        static readonly FT_TONGUE_TWIST_RIGHT = 96
        
        /** Tongue tip rotates counter-clockwise, with the rest following gradually. */
        static readonly FT_TONGUE_TWIST_LEFT = 97
        
        /** Inner mouth throat closes. */
        static readonly FT_SOFT_PALATE_CLOSE = 98
        
        /** The Adam's apple visibly swallows. */
        static readonly FT_THROAT_SWALLOW = 99
        
        /** Right side neck visibly flexes. */
        static readonly FT_NECK_FLEX_RIGHT = 100
        
        /** Left side neck visibly flexes. */
        static readonly FT_NECK_FLEX_LEFT = 101
        
        /** Closes both eye lids. */
        static readonly FT_EYE_CLOSED = 102
        
        /** Widens both eye lids. */
        static readonly FT_EYE_WIDE = 103
        
        /** Squints both eye lids. */
        static readonly FT_EYE_SQUINT = 104
        
        /** Dilates both pupils. */
        static readonly FT_EYE_DILATION = 105
        
        /** Constricts both pupils. */
        static readonly FT_EYE_CONSTRICT = 106
        
        /** Pulls the right eyebrow down and in. */
        static readonly FT_BROW_DOWN_RIGHT = 107
        
        /** Pulls the left eyebrow down and in. */
        static readonly FT_BROW_DOWN_LEFT = 108
        
        /** Pulls both eyebrows down and in. */
        static readonly FT_BROW_DOWN = 109
        
        /** Right brow appears worried. */
        static readonly FT_BROW_UP_RIGHT = 110
        
        /** Left brow appears worried. */
        static readonly FT_BROW_UP_LEFT = 111
        
        /** Both brows appear worried. */
        static readonly FT_BROW_UP = 112
        
        /** Entire face sneers. */
        static readonly FT_NOSE_SNEER = 113
        
        /** Both nose canals dilate. */
        static readonly FT_NASAL_DILATION = 114
        
        /** Both nose canals constrict. */
        static readonly FT_NASAL_CONSTRICT = 115
        
        /** Puffs both cheeks. */
        static readonly FT_CHEEK_PUFF = 116
        
        /** Sucks in both cheeks. */
        static readonly FT_CHEEK_SUCK = 117
        
        /** Raises both cheeks. */
        static readonly FT_CHEEK_SQUINT = 118
        
        /** Tucks in the upper lips. */
        static readonly FT_LIP_SUCK_UPPER = 119
        
        /** Tucks in the lower lips. */
        static readonly FT_LIP_SUCK_LOWER = 120
        
        /** Tucks in both lips. */
        static readonly FT_LIP_SUCK = 121
        
        /** Funnels in the upper lips. */
        static readonly FT_LIP_FUNNEL_UPPER = 122
        
        /** Funnels in the lower lips. */
        static readonly FT_LIP_FUNNEL_LOWER = 123
        
        /** Funnels in both lips. */
        static readonly FT_LIP_FUNNEL = 124
        
        /** Upper lip part pushes outwards. */
        static readonly FT_LIP_PUCKER_UPPER = 125
        
        /** Lower lip part pushes outwards. */
        static readonly FT_LIP_PUCKER_LOWER = 126
        
        /** Lips push outwards. */
        static readonly FT_LIP_PUCKER = 127
        
        /** Raises the upper lips. */
        static readonly FT_MOUTH_UPPER_UP = 128
        
        /** Lowers the lower lips. */
        static readonly FT_MOUTH_LOWER_DOWN = 129
        
        /** Mouth opens, revealing teeth. */
        static readonly FT_MOUTH_OPEN = 130
        
        /** Moves mouth right. */
        static readonly FT_MOUTH_RIGHT = 131
        
        /** Moves mouth left. */
        static readonly FT_MOUTH_LEFT = 132
        
        /** Right side of the mouth smiles. */
        static readonly FT_MOUTH_SMILE_RIGHT = 133
        
        /** Left side of the mouth smiles. */
        static readonly FT_MOUTH_SMILE_LEFT = 134
        
        /** Mouth expresses a smile. */
        static readonly FT_MOUTH_SMILE = 135
        
        /** Right side of the mouth expresses sadness. */
        static readonly FT_MOUTH_SAD_RIGHT = 136
        
        /** Left side of the mouth expresses sadness. */
        static readonly FT_MOUTH_SAD_LEFT = 137
        
        /** Mouth expresses sadness. */
        static readonly FT_MOUTH_SAD = 138
        
        /** Mouth stretches. */
        static readonly FT_MOUTH_STRETCH = 139
        
        /** Lip corners dimple. */
        static readonly FT_MOUTH_DIMPLE = 140
        
        /** Mouth tightens. */
        static readonly FT_MOUTH_TIGHTENER = 141
        
        /** Mouth presses together. */
        static readonly FT_MOUTH_PRESS = 142
        
        /** Represents the size of the [enum BlendShapeEntry] enum. */
        static readonly FT_MAX = 143
        constructor(identifier?: any)
        getBlendShape(blendShape: XRFaceTracker.BlendShapeEntry): float64
        setBlendShape(blendShape: XRFaceTracker.BlendShapeEntry, weight: float64): void
        get blendShapes(): PackedFloat32Array
        set blendShapes(value: PackedFloat32Array | float32[])
    }
    namespace XRHandModifier3D {
        enum BoneUpdate {
            BoneUpdateFull = 0,
            BoneUpdateRotationOnly = 1,
            BoneUpdateMax = 2,
        }
    }
    /** A node for driving hand meshes from [XRHandTracker] data.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_xrhandmodifier3d.html  
     */
    class XRHandModifier3D<Map extends Record<string, Node> = {}> extends SkeletonModifier3D<Map> {
        /** The skeleton's bones are fully updated (both position and rotation) to match the tracked bones. */
        static readonly BONE_UPDATE_FULL = 0
        
        /** The skeleton's bones are only rotated to align with the tracked bones, preserving bone length. */
        static readonly BONE_UPDATE_ROTATION_ONLY = 1
        
        /** Represents the size of the [enum BoneUpdate] enum. */
        static readonly BONE_UPDATE_MAX = 2
        constructor(identifier?: any)
        get handTracker(): string
        set handTracker(value: string)
        get boneUpdate(): int64
        set boneUpdate(value: int64)
    }
    namespace XRHandTracker {
        enum HandTrackingSource {
            HandTrackingSourceUnknown = 0,
            HandTrackingSourceUnobstructed = 1,
            HandTrackingSourceController = 2,
            HandTrackingSourceNotTracked = 3,
            HandTrackingSourceMax = 4,
        }
        enum HandJoint {
            HandJointPalm = 0,
            HandJointWrist = 1,
            HandJointThumbMetacarpal = 2,
            HandJointThumbPhalanxProximal = 3,
            HandJointThumbPhalanxDistal = 4,
            HandJointThumbTip = 5,
            HandJointIndexFingerMetacarpal = 6,
            HandJointIndexFingerPhalanxProximal = 7,
            HandJointIndexFingerPhalanxIntermediate = 8,
            HandJointIndexFingerPhalanxDistal = 9,
            HandJointIndexFingerTip = 10,
            HandJointMiddleFingerMetacarpal = 11,
            HandJointMiddleFingerPhalanxProximal = 12,
            HandJointMiddleFingerPhalanxIntermediate = 13,
            HandJointMiddleFingerPhalanxDistal = 14,
            HandJointMiddleFingerTip = 15,
            HandJointRingFingerMetacarpal = 16,
            HandJointRingFingerPhalanxProximal = 17,
            HandJointRingFingerPhalanxIntermediate = 18,
            HandJointRingFingerPhalanxDistal = 19,
            HandJointRingFingerTip = 20,
            HandJointPinkyFingerMetacarpal = 21,
            HandJointPinkyFingerPhalanxProximal = 22,
            HandJointPinkyFingerPhalanxIntermediate = 23,
            HandJointPinkyFingerPhalanxDistal = 24,
            HandJointPinkyFingerTip = 25,
            HandJointMax = 26,
        }
        enum HandJointFlags {
            HandJointFlagOrientationValid = 1,
            HandJointFlagOrientationTracked = 2,
            HandJointFlagPositionValid = 4,
            HandJointFlagPositionTracked = 8,
            HandJointFlagLinearVelocityValid = 16,
            HandJointFlagAngularVelocityValid = 32,
        }
    }
    /** A tracked hand in XR.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_xrhandtracker.html  
     */
    class XRHandTracker extends XRPositionalTracker {
        /** The source of hand tracking data is unknown. */
        static readonly HAND_TRACKING_SOURCE_UNKNOWN = 0
        
        /** The source of hand tracking data is unobstructed, meaning that an accurate method of hand tracking is used. These include optical hand tracking, data gloves, etc. */
        static readonly HAND_TRACKING_SOURCE_UNOBSTRUCTED = 1
        
        /** The source of hand tracking data is a controller, meaning that joint positions are inferred from controller inputs. */
        static readonly HAND_TRACKING_SOURCE_CONTROLLER = 2
        
        /** No hand tracking data is tracked, this either means the hand is obscured, the controller is turned off, or tracking is not supported for the current input type. */
        static readonly HAND_TRACKING_SOURCE_NOT_TRACKED = 3
        
        /** Represents the size of the [enum HandTrackingSource] enum. */
        static readonly HAND_TRACKING_SOURCE_MAX = 4
        
        /** Palm joint. */
        static readonly HAND_JOINT_PALM = 0
        
        /** Wrist joint. */
        static readonly HAND_JOINT_WRIST = 1
        
        /** Thumb metacarpal joint. */
        static readonly HAND_JOINT_THUMB_METACARPAL = 2
        
        /** Thumb phalanx proximal joint. */
        static readonly HAND_JOINT_THUMB_PHALANX_PROXIMAL = 3
        
        /** Thumb phalanx distal joint. */
        static readonly HAND_JOINT_THUMB_PHALANX_DISTAL = 4
        
        /** Thumb tip joint. */
        static readonly HAND_JOINT_THUMB_TIP = 5
        
        /** Index finger metacarpal joint. */
        static readonly HAND_JOINT_INDEX_FINGER_METACARPAL = 6
        
        /** Index finger phalanx proximal joint. */
        static readonly HAND_JOINT_INDEX_FINGER_PHALANX_PROXIMAL = 7
        
        /** Index finger phalanx intermediate joint. */
        static readonly HAND_JOINT_INDEX_FINGER_PHALANX_INTERMEDIATE = 8
        
        /** Index finger phalanx distal joint. */
        static readonly HAND_JOINT_INDEX_FINGER_PHALANX_DISTAL = 9
        
        /** Index finger tip joint. */
        static readonly HAND_JOINT_INDEX_FINGER_TIP = 10
        
        /** Middle finger metacarpal joint. */
        static readonly HAND_JOINT_MIDDLE_FINGER_METACARPAL = 11
        
        /** Middle finger phalanx proximal joint. */
        static readonly HAND_JOINT_MIDDLE_FINGER_PHALANX_PROXIMAL = 12
        
        /** Middle finger phalanx intermediate joint. */
        static readonly HAND_JOINT_MIDDLE_FINGER_PHALANX_INTERMEDIATE = 13
        
        /** Middle finger phalanx distal joint. */
        static readonly HAND_JOINT_MIDDLE_FINGER_PHALANX_DISTAL = 14
        
        /** Middle finger tip joint. */
        static readonly HAND_JOINT_MIDDLE_FINGER_TIP = 15
        
        /** Ring finger metacarpal joint. */
        static readonly HAND_JOINT_RING_FINGER_METACARPAL = 16
        
        /** Ring finger phalanx proximal joint. */
        static readonly HAND_JOINT_RING_FINGER_PHALANX_PROXIMAL = 17
        
        /** Ring finger phalanx intermediate joint. */
        static readonly HAND_JOINT_RING_FINGER_PHALANX_INTERMEDIATE = 18
        
        /** Ring finger phalanx distal joint. */
        static readonly HAND_JOINT_RING_FINGER_PHALANX_DISTAL = 19
        
        /** Ring finger tip joint. */
        static readonly HAND_JOINT_RING_FINGER_TIP = 20
        
        /** Pinky finger metacarpal joint. */
        static readonly HAND_JOINT_PINKY_FINGER_METACARPAL = 21
        
        /** Pinky finger phalanx proximal joint. */
        static readonly HAND_JOINT_PINKY_FINGER_PHALANX_PROXIMAL = 22
        
        /** Pinky finger phalanx intermediate joint. */
        static readonly HAND_JOINT_PINKY_FINGER_PHALANX_INTERMEDIATE = 23
        
        /** Pinky finger phalanx distal joint. */
        static readonly HAND_JOINT_PINKY_FINGER_PHALANX_DISTAL = 24
        
        /** Pinky finger tip joint. */
        static readonly HAND_JOINT_PINKY_FINGER_TIP = 25
        
        /** Represents the size of the [enum HandJoint] enum. */
        static readonly HAND_JOINT_MAX = 26
        
        /** The hand joint's orientation data is valid. */
        static readonly HAND_JOINT_FLAG_ORIENTATION_VALID = 1
        
        /** The hand joint's orientation is actively tracked. May not be set if tracking has been temporarily lost. */
        static readonly HAND_JOINT_FLAG_ORIENTATION_TRACKED = 2
        
        /** The hand joint's position data is valid. */
        static readonly HAND_JOINT_FLAG_POSITION_VALID = 4
        
        /** The hand joint's position is actively tracked. May not be set if tracking has been temporarily lost. */
        static readonly HAND_JOINT_FLAG_POSITION_TRACKED = 8
        
        /** The hand joint's linear velocity data is valid. */
        static readonly HAND_JOINT_FLAG_LINEAR_VELOCITY_VALID = 16
        
        /** The hand joint's angular velocity data is valid. */
        static readonly HAND_JOINT_FLAG_ANGULAR_VELOCITY_VALID = 32
        constructor(identifier?: any)
        setHandJointFlags(joint: XRHandTracker.HandJoint, flags: XRHandTracker.HandJointFlags): void
        getHandJointFlags(joint: XRHandTracker.HandJoint): XRHandTracker.HandJointFlags
        setHandJointTransform(joint: XRHandTracker.HandJoint, transform: Transform3D): void
        getHandJointTransform(joint: XRHandTracker.HandJoint): Transform3D
        setHandJointRadius(joint: XRHandTracker.HandJoint, radius: float64): void
        getHandJointRadius(joint: XRHandTracker.HandJoint): float64
        setHandJointLinearVelocity(joint: XRHandTracker.HandJoint, linearVelocity: Vector3): void
        getHandJointLinearVelocity(joint: XRHandTracker.HandJoint): Vector3
        setHandJointAngularVelocity(joint: XRHandTracker.HandJoint, angularVelocity: Vector3): void
        getHandJointAngularVelocity(joint: XRHandTracker.HandJoint): Vector3
        get hasTrackingData(): boolean
        set hasTrackingData(value: boolean)
        get handTrackingSource(): int64
        set handTrackingSource(value: int64)
    }
    namespace XRInterface {
        enum Capabilities {
            XRNone = 0,
            XRMono = 1,
            XRStereo = 2,
            XRQuad = 4,
            XRVr = 8,
            XRAr = 16,
            XRExternal = 32,
        }
        enum TrackingStatus {
            XRNormalTracking = 0,
            XRExcessiveMotion = 1,
            XRInsufficientFeatures = 2,
            XRUnknownTracking = 3,
            XRNotTracking = 4,
        }
        enum PlayAreaMode {
            XRPlayAreaUnknown = 0,
            XRPlayArea3Dof = 1,
            XRPlayAreaSitting = 2,
            XRPlayAreaRoomscale = 3,
            XRPlayAreaStage = 4,
        }
        enum EnvironmentBlendMode {
            XREnvBlendModeOpaque = 0,
            XREnvBlendModeAdditive = 1,
            XREnvBlendModeAlphaBlend = 2,
        }
    }
    /** Base class for an XR interface implementation.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_xrinterface.html  
     */
    class XRInterface extends RefCounted {
        /** No XR capabilities. */
        static readonly XR_NONE = 0
        
        /** This interface can work with normal rendering output (non-HMD based AR). */
        static readonly XR_MONO = 1
        
        /** This interface supports stereoscopic rendering. */
        static readonly XR_STEREO = 2
        
        /** This interface supports quad rendering (not yet supported by Godot). */
        static readonly XR_QUAD = 4
        
        /** This interface supports VR. */
        static readonly XR_VR = 8
        
        /** This interface supports AR (video background and real world tracking). */
        static readonly XR_AR = 16
        
        /** This interface outputs to an external device. If the main viewport is used, the on screen output is an unmodified buffer of either the left or right eye (stretched if the viewport size is not changed to the same aspect ratio of [method get_render_target_size]). Using a separate viewport node frees up the main viewport for other purposes. */
        static readonly XR_EXTERNAL = 32
        
        /** Tracking is behaving as expected. */
        static readonly XR_NORMAL_TRACKING = 0
        
        /** Tracking is hindered by excessive motion (the player is moving faster than tracking can keep up). */
        static readonly XR_EXCESSIVE_MOTION = 1
        
        /** Tracking is hindered by insufficient features, it's too dark (for camera-based tracking), player is blocked, etc. */
        static readonly XR_INSUFFICIENT_FEATURES = 2
        
        /** We don't know the status of the tracking or this interface does not provide feedback. */
        static readonly XR_UNKNOWN_TRACKING = 3
        
        /** Tracking is not functional (camera not plugged in or obscured, lighthouses turned off, etc.). */
        static readonly XR_NOT_TRACKING = 4
        
        /** Play area mode not set or not available. */
        static readonly XR_PLAY_AREA_UNKNOWN = 0
        
        /** Play area only supports orientation tracking, no positional tracking, area will center around player. */
        static readonly XR_PLAY_AREA_3DOF = 1
        
        /** Player is in seated position, limited positional tracking, fixed guardian around player. */
        static readonly XR_PLAY_AREA_SITTING = 2
        
        /** Player is free to move around, full positional tracking. */
        static readonly XR_PLAY_AREA_ROOMSCALE = 3
        
        /** Same as [constant XR_PLAY_AREA_ROOMSCALE] but origin point is fixed to the center of the physical space. In this mode, system-level recentering may be disabled, requiring the use of [method XRServer.center_on_hmd]. */
        static readonly XR_PLAY_AREA_STAGE = 4
        
        /** Opaque blend mode. This is typically used for VR devices. */
        static readonly XR_ENV_BLEND_MODE_OPAQUE = 0
        
        /** Additive blend mode. This is typically used for AR devices or VR devices with passthrough. */
        static readonly XR_ENV_BLEND_MODE_ADDITIVE = 1
        
        /** Alpha blend mode. This is typically used for AR or VR devices with passthrough capabilities. The alpha channel controls how much of the passthrough is visible. Alpha of 0.0 means the passthrough is visible and this pixel works in ADDITIVE mode. Alpha of 1.0 means that the passthrough is not visible and this pixel works in OPAQUE mode. */
        static readonly XR_ENV_BLEND_MODE_ALPHA_BLEND = 2
        constructor(identifier?: any)
        getName(): StringName
        getCapabilities(): int64
        isInitialized(): boolean
        
        /** Call this to initialize this interface. The first interface that is initialized is identified as the primary interface and it will be used for rendering output.  
         *  After initializing the interface you want to use you then need to enable the AR/VR mode of a viewport and rendering should commence.  
         *      
         *  **Note:** You must enable the XR mode on the main viewport for any device that uses the main output of Godot, such as for mobile VR.  
         *  If you do this for a platform that handles its own output (such as OpenVR) Godot will show just one eye without distortion on screen. Alternatively, you can add a separate viewport node to your scene and enable AR/VR on that viewport. It will be used to output to the HMD, leaving you free to do anything you like in the main window, such as using a separate camera as a spectator camera or rendering something completely different.  
         *  While currently not used, you can activate additional interfaces. You may wish to do this if you want to track controllers from other platforms. However, at this point in time only one interface can render to an HMD.  
         */
        initialize(): boolean
        
        /** Turns the interface off. */
        uninitialize(): void
        getSystemInfo(): GDictionary
        getTrackingStatus(): XRInterface.TrackingStatus
        getRenderTargetSize(): Vector2
        getViewCount(): int64
        triggerHapticPulse(actionName: string, trackerName: StringName, frequency: float64, amplitude: float64, durationSec: float64, delaySec: float64): void
        supportsPlayAreaMode(mode: XRInterface.PlayAreaMode): boolean
        getPlayArea(): PackedVector3Array
        getCameraFeedId(): int64
        isPassthroughSupported(): boolean
        isPassthroughEnabled(): boolean
        startPassthrough(): boolean
        stopPassthrough(): void
        getTransformForView(view: int64, camTransform: Transform3D): Transform3D
        getProjectionForView(view: int64, aspect: float64, near: float64, far: float64): Projection
        getSupportedEnvironmentBlendModes(): GArray
        get interfaceIsPrimary(): boolean
        set interfaceIsPrimary(value: boolean)
        get xRPlayAreaMode(): int64
        set xRPlayAreaMode(value: int64)
        get environmentBlendMode(): int64
        set environmentBlendMode(value: int64)
        get arIsAnchorDetectionEnabled(): boolean
        set arIsAnchorDetectionEnabled(value: boolean)
        readonly playAreaChanged: Signal<(mode: int64) => void>
    }
    /** Base class for XR interface extensions (plugins).  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_xrinterfaceextension.html  
     */
    class XRInterfaceExtension extends XRInterface {
        constructor(identifier?: any)
        /* gdvirtual */ _getName(): StringName
        /* gdvirtual */ _getCapabilities(): int64
        /* gdvirtual */ _isInitialized(): boolean
        
        /** Initializes the interface, returns `true` on success. */
        /* gdvirtual */ _initialize(): boolean
        
        /** Uninitialize the interface. */
        /* gdvirtual */ _uninitialize(): void
        /* gdvirtual */ _getSystemInfo(): GDictionary
        /* gdvirtual */ _supportsPlayAreaMode(mode: XRInterface.PlayAreaMode): boolean
        /* gdvirtual */ _getPlayAreaMode(): XRInterface.PlayAreaMode
        /* gdvirtual */ _setPlayAreaMode(mode: XRInterface.PlayAreaMode): boolean
        /* gdvirtual */ _getPlayArea(): PackedVector3Array
        /* gdvirtual */ _getRenderTargetSize(): Vector2
        /* gdvirtual */ _getViewCount(): int64
        /* gdvirtual */ _getCameraTransform(): Transform3D
        /* gdvirtual */ _getTransformForView(view: int64, camTransform: Transform3D): Transform3D
        /* gdvirtual */ _getProjectionForView(view: int64, aspect: float64, zNear: float64, zFar: float64): PackedFloat64Array
        /* gdvirtual */ _getVrsTexture(): Rid
        
        /** Called if this [XRInterfaceExtension] is active before our physics and game process is called. Most XR interfaces will update its [XRPositionalTracker]s at this point in time. */
        /* gdvirtual */ _process(): void
        /* gdvirtual */ _preRender(): void
        /* gdvirtual */ _preDrawViewport(renderTarget: Rid): boolean
        /* gdvirtual */ _postDrawViewport(renderTarget: Rid, screenRect: Rect2): void
        /* gdvirtual */ _endFrame(): void
        /* gdvirtual */ _getSuggestedTrackerNames(): PackedStringArray
        /* gdvirtual */ _getSuggestedPoseNames(trackerName: StringName): PackedStringArray
        /* gdvirtual */ _getTrackingStatus(): XRInterface.TrackingStatus
        /* gdvirtual */ _triggerHapticPulse(actionName: string, trackerName: StringName, frequency: float64, amplitude: float64, durationSec: float64, delaySec: float64): void
        /* gdvirtual */ _getAnchorDetectionIsEnabled(): boolean
        /* gdvirtual */ _setAnchorDetectionIsEnabled(enabled: boolean): void
        /* gdvirtual */ _getCameraFeedId(): int64
        /* gdvirtual */ _getColorTexture(): Rid
        /* gdvirtual */ _getDepthTexture(): Rid
        /* gdvirtual */ _getVelocityTexture(): Rid
        getColorTexture(): Rid
        getDepthTexture(): Rid
        getVelocityTexture(): Rid
        addBlit(renderTarget: Rid, srcRect: Rect2, dstRect: Rect2I, useLayer: boolean, layer: int64, applyLensDistortion: boolean, eyeCenter: Vector2, k1: float64, k2: float64, upscale: float64, aspectRatio: float64): void
        getRenderTargetTexture(renderTarget: Rid): Rid
    }
    /** A 3D node that has its position automatically updated by the [XRServer].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_xrnode3d.html  
     */
    class XRNode3D<Map extends Record<string, Node> = {}> extends Node3D<Map> {
        constructor(identifier?: any)
        getIsActive(): boolean
        getHasTrackingData(): boolean
        getPose(): XRPose
        triggerHapticPulse(actionName: string, frequency: float64, amplitude: float64, durationSec: float64, delaySec: float64): void
        
        /** The name of the tracker we're bound to. Which trackers are available is not known during design time.  
         *  Godot defines a number of standard trackers such as `left_hand` and `right_hand` but others may be configured within a given [XRInterface].  
         */
        get tracker(): string
        set tracker(value: string)
        
        /** The name of the pose we're bound to. Which poses a tracker supports is not known during design time.  
         *  Godot defines number of standard pose names such as `aim` and `grip` but other may be configured within a given [XRInterface].  
         */
        get pose(): string
        set pose(value: string)
        get showWhenTracked(): boolean
        set showWhenTracked(value: boolean)
        readonly trackingChanged: Signal<(tracking: boolean) => void>
    }
    /** The origin point in AR/VR.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_xrorigin3d.html  
     */
    class XROrigin3D<Map extends Record<string, Node> = {}> extends Node3D<Map> {
        constructor(identifier?: any)
        get worldScale(): float64
        set worldScale(value: float64)
        
        /** If `true`, this origin node is currently being used by the [XRServer]. Only one origin point can be used at a time. */
        get current(): boolean
        set current(value: boolean)
    }
    namespace XRPose {
        enum TrackingConfidence {
            XRTrackingConfidenceNone = 0,
            XRTrackingConfidenceLow = 1,
            XRTrackingConfidenceHigh = 2,
        }
    }
    /** This object contains all data related to a pose on a tracked object.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_xrpose.html  
     */
    class XRPose extends RefCounted {
        /** No tracking information is available for this pose. */
        static readonly XR_TRACKING_CONFIDENCE_NONE = 0
        
        /** Tracking information may be inaccurate or estimated. For example, with inside out tracking this would indicate a controller may be (partially) obscured. */
        static readonly XR_TRACKING_CONFIDENCE_LOW = 1
        
        /** Tracking information is considered accurate and up to date. */
        static readonly XR_TRACKING_CONFIDENCE_HIGH = 2
        constructor(identifier?: any)
        setName(name: StringName): void
        getName(): StringName
        getAdjustedTransform(): Transform3D
        get hasTrackingData(): boolean
        set hasTrackingData(value: boolean)
        
        /** The transform containing the original and transform as reported by the XR runtime. */
        get transform(): string
        set transform(value: string)
        get linearVelocity(): string
        set linearVelocity(value: string)
        get angularVelocity(): string
        set angularVelocity(value: string)
        get trackingConfidence(): int64
        set trackingConfidence(value: int64)
    }
    namespace XRPositionalTracker {
        enum TrackerHand {
            TrackerHandUnknown = 0,
            TrackerHandLeft = 1,
            TrackerHandRight = 2,
            TrackerHandMax = 3,
        }
    }
    /** A tracked object.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_xrpositionaltracker.html  
     */
    class XRPositionalTracker extends XRTracker {
        /** The hand this tracker is held in is unknown or not applicable. */
        static readonly TRACKER_HAND_UNKNOWN = 0
        
        /** This tracker is the left hand controller. */
        static readonly TRACKER_HAND_LEFT = 1
        
        /** This tracker is the right hand controller. */
        static readonly TRACKER_HAND_RIGHT = 2
        
        /** Represents the size of the [enum TrackerHand] enum. */
        static readonly TRACKER_HAND_MAX = 3
        constructor(identifier?: any)
        hasPose(name: StringName): boolean
        getPose(name: StringName): XRPose
        invalidatePose(name: StringName): void
        setPose(name: StringName, transform: Transform3D, linearVelocity: Vector3, angularVelocity: Vector3, trackingConfidence: XRPose.TrackingConfidence): void
        getInput(name: StringName): any
        setInput(name: StringName, value: any): void
        
        /** The profile associated with this tracker, interface dependent but will indicate the type of controller being tracked. */
        get profile(): string
        set profile(value: string)
        
        /** Defines which hand this tracker relates to. */
        get hand(): int64
        set hand(value: int64)
        readonly poseChanged: Signal<(pose: XRPose) => void>
        readonly poseLostTracking: Signal<(pose: XRPose) => void>
        readonly buttonPressed: Signal<(name: string) => void>
        readonly buttonReleased: Signal<(name: string) => void>
        readonly inputFloatChanged: Signal<(name: string, value: float64) => void>
        readonly inputVector2Changed: Signal<(name: string, vector: Vector2) => void>
        readonly profileChanged: Signal<(role: string) => void>
    }
    /** A tracked object.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_xrtracker.html  
     */
    class XRTracker extends RefCounted {
        constructor(identifier?: any)
        getTrackerName(): StringName
        setTrackerName(name: StringName): void
        
        /** The type of tracker. */
        get type(): int64
        set type(value: int64)
        
        /** The description of this tracker. */
        get description(): string
        set description(value: string)
    }
    class Xrvrs extends GObject {
        constructor(identifier?: any)
        makeVrsTexture(targetSize: Vector2, eyeFoci: PackedVector2Array | Vector2[]): Rid
        get vrsMinRadius(): float64
        set vrsMinRadius(value: float64)
        get vrsStrength(): float64
        set vrsStrength(value: float64)
        get vrsRenderRegion(): Rect2I
        set vrsRenderRegion(value: Rect2I)
    }
    namespace ZipPacker {
        enum ZipAppend {
            AppendCreate = 0,
            AppendCreateafter = 1,
            AppendAddinzip = 2,
        }
    }
    class ZipPacker extends RefCounted {
        static readonly APPEND_CREATE = 0
        static readonly APPEND_CREATEAFTER = 1
        static readonly APPEND_ADDINZIP = 2
        constructor(identifier?: any)
        open(path: string, append: ZipPacker.ZipAppend = 0): GError
        startFile(path: string): GError
        writeFile(data: PackedByteArray | byte[] | ArrayBuffer): GError
        closeFile(): GError
        close(): GError
    }
    class ZipReader extends RefCounted {
        constructor(identifier?: any)
        open(path: string): GError
        close(): GError
        getFiles(): PackedStringArray
        readFile(path: string, caseSensitive: boolean = true): PackedByteArray
        fileExists(path: string, caseSensitive: boolean = true): boolean
    }
    namespace Vector2 {
        enum Axis {
            AxisX = 0,
            AxisY = 1,
        }
    }
    /** A 2D vector using floating-point coordinates.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_vector2.html  
     */
    class Vector2 {
        /** Zero vector, a vector with all components set to `0`. */
        static readonly ZERO: Vector2
        
        /** One vector, a vector with all components set to `1`. */
        static readonly ONE: Vector2
        
        /** Infinity vector, a vector with all components set to [constant @GDScript.INF]. */
        static readonly INF: Vector2
        
        /** Left unit vector. Represents the direction of left. */
        static readonly LEFT: Vector2
        
        /** Right unit vector. Represents the direction of right. */
        static readonly RIGHT: Vector2
        
        /** Up unit vector. Y is down in 2D, so this vector points -Y. */
        static readonly UP: Vector2
        
        /** Down unit vector. Y is down in 2D, so this vector points +Y. */
        static readonly DOWN: Vector2
        constructor()
        constructor(from: Vector2)
        constructor(from: Vector2I)
        constructor(x: float64, y: float64)
        
        /** Returns this vector's angle with respect to the positive X axis, or `(1, 0)` vector, in radians.  
         *  For example, `Vector2.RIGHT.angle()` will return zero, `Vector2.DOWN.angle()` will return `PI / 2` (a quarter turn, or 90 degrees), and `Vector2(1, -1).angle()` will return `-PI / 4` (a negative eighth turn, or -45 degrees).  
         *  [url=https://raw.githubusercontent.com/godotengine/godot-docs/master/img/vector2_angle.png]Illustration of the returned angle.[/url]  
         *  Equivalent to the result of [method @GlobalScope.atan2] when called with the vector's [member y] and [member x] as parameters: `atan2(y, x)`.  
         */
        angle(): float64
        angleTo(to: Vector2): float64
        angleToPoint(to: Vector2): float64
        directionTo(to: Vector2): Vector2
        distanceTo(to: Vector2): float64
        distanceSquaredTo(to: Vector2): float64
        
        /** Returns the length (magnitude) of this vector. */
        length(): float64
        lengthSquared(): float64
        limitLength(length: float64 = 1): Vector2
        
        /** Returns the result of scaling the vector to unit length. Equivalent to `v / v.length()`. Returns `(0, 0)` if `v.length() == 0`. See also [method is_normalized].  
         *      
         *  **Note:** This function may return incorrect values if the input vector length is near zero.  
         */
        normalized(): Vector2
        isNormalized(): boolean
        isEqualApprox(to: Vector2): boolean
        isZeroApprox(): boolean
        isFinite(): boolean
        
        /** Returns a vector composed of the [method @GlobalScope.fposmod] of this vector's components and [param mod]. */
        posmod(mod: float64): Vector2
        
        /** Returns a vector composed of the [method @GlobalScope.fposmod] of this vector's components and [param modv]'s components. */
        posmodv(modv: Vector2): Vector2
        
        /** Returns a new vector resulting from projecting this vector onto the given vector [param b]. The resulting new vector is parallel to [param b]. See also [method slide].  
         *      
         *  **Note:** If the vector [param b] is a zero vector, the components of the resulting new vector will be [constant @GDScript.NAN].  
         */
        project(b: Vector2): Vector2
        
        /** Returns the result of the linear interpolation between this vector and [param to] by amount [param weight]. [param weight] is on the range of `0.0` to `1.0`, representing the amount of interpolation. */
        lerp(to: Vector2, weight: float64): Vector2
        
        /** Returns the result of spherical linear interpolation between this vector and [param to], by amount [param weight]. [param weight] is on the range of 0.0 to 1.0, representing the amount of interpolation.  
         *  This method also handles interpolating the lengths if the input vectors have different lengths. For the special case of one or both input vectors having zero length, this method behaves like [method lerp].  
         */
        slerp(to: Vector2, weight: float64): Vector2
        cubicInterpolate(b: Vector2, preA: Vector2, postB: Vector2, weight: float64): Vector2
        cubicInterpolateInTime(b: Vector2, preA: Vector2, postB: Vector2, weight: float64, bT: float64, preAT: float64, postBT: float64): Vector2
        bezierInterpolate(control1: Vector2, control2: Vector2, end: Vector2, t: float64): Vector2
        bezierDerivative(control1: Vector2, control2: Vector2, end: Vector2, t: float64): Vector2
        maxAxisIndex(): int64
        minAxisIndex(): int64
        moveToward(to: Vector2, delta: float64): Vector2
        
        /** Returns the result of rotating this vector by [param angle] (in radians). See also [method @GlobalScope.deg_to_rad]. */
        rotated(angle: float64): Vector2
        
        /** Returns a perpendicular vector rotated 90 degrees counter-clockwise compared to the original, with the same length. */
        orthogonal(): Vector2
        
        /** Returns a new vector with all components rounded down (towards negative infinity). */
        floor(): Vector2
        
        /** Returns a new vector with all components rounded up (towards positive infinity). */
        ceil(): Vector2
        
        /** Returns a new vector with all components rounded to the nearest integer, with halfway cases rounded away from zero. */
        round(): Vector2
        
        /** Returns the aspect ratio of this vector, the ratio of [member x] to [member y]. */
        aspect(): float64
        
        /** Returns the dot product of this vector and [param with]. This can be used to compare the angle between two vectors. For example, this can be used to determine whether an enemy is facing the player.  
         *  The dot product will be `0` for a right angle (90 degrees), greater than 0 for angles narrower than 90 degrees and lower than 0 for angles wider than 90 degrees.  
         *  When using unit (normalized) vectors, the result will always be between `-1.0` (180 degree angle) when the vectors are facing opposite directions, and `1.0` (0 degree angle) when the vectors are aligned.  
         *      
         *  **Note:** `a.dot(b)` is equivalent to `b.dot(a)`.  
         */
        dot(with_: Vector2): float64
        
        /** Returns a new vector resulting from sliding this vector along a line with normal [param n]. The resulting new vector is perpendicular to [param n], and is equivalent to this vector minus its projection on [param n]. See also [method project].  
         *      
         *  **Note:** The vector [param n] must be normalized. See also [method normalized].  
         */
        slide(n: Vector2): Vector2
        
        /** Returns the vector "bounced off" from a line defined by the given normal [param n] perpendicular to the line.  
         *      
         *  **Note:** [method bounce] performs the operation that most engines and frameworks call [code skip-lint]reflect()`.  
         */
        bounce(n: Vector2): Vector2
        
        /** Returns the result of reflecting the vector from a line defined by the given direction vector [param line].  
         *      
         *  **Note:** [method reflect] differs from what other engines and frameworks call [code skip-lint]reflect()`. In other engines, [code skip-lint]reflect()` takes a normal direction which is a direction perpendicular to the line. In Godot, you specify the direction of the line directly. See also [method bounce] which does what most engines call [code skip-lint]reflect()`.  
         */
        reflect(line: Vector2): Vector2
        
        /** Returns the 2D analog of the cross product for this vector and [param with].  
         *  This is the signed area of the parallelogram formed by the two vectors. If the second vector is clockwise from the first vector, then the cross product is the positive area. If counter-clockwise, the cross product is the negative area. If the two vectors are parallel this returns zero, making it useful for testing if two vectors are parallel.  
         *      
         *  **Note:** Cross product is not defined in 2D mathematically. This method embeds the 2D vectors in the XY plane of 3D space and uses their cross product's Z component as the analog.  
         */
        cross(with_: Vector2): float64
        
        /** Returns a new vector with all components in absolute values (i.e. positive). */
        abs(): Vector2
        
        /** Returns a new vector with each component set to `1.0` if it's positive, `-1.0` if it's negative, and `0.0` if it's zero. The result is identical to calling [method @GlobalScope.sign] on each component. */
        sign(): Vector2
        
        /** Returns a new vector with all components clamped between the components of [param min] and [param max], by running [method @GlobalScope.clamp] on each component. */
        clamp(min: Vector2, max: Vector2): Vector2
        
        /** Returns a new vector with all components clamped between [param min] and [param max], by running [method @GlobalScope.clamp] on each component. */
        clampf(min: float64, max: float64): Vector2
        
        /** Returns a new vector with each component snapped to the nearest multiple of the corresponding component in [param step]. This can also be used to round the components to an arbitrary number of decimals. */
        snapped(step: Vector2): Vector2
        
        /** Returns a new vector with each component snapped to the nearest multiple of [param step]. This can also be used to round the components to an arbitrary number of decimals. */
        snappedf(step: float64): Vector2
        
        /** Returns the component-wise minimum of this and [param with], equivalent to `Vector2(minf(x, with.x), minf(y, with.y))`. */
        min(with_: Vector2): Vector2
        
        /** Returns the component-wise minimum of this and [param with], equivalent to `Vector2(minf(x, with), minf(y, with))`. */
        minf(with_: float64): Vector2
        
        /** Returns the component-wise maximum of this and [param with], equivalent to `Vector2(maxf(x, with.x), maxf(y, with.y))`. */
        max(with_: Vector2): Vector2
        
        /** Returns the component-wise maximum of this and [param with], equivalent to `Vector2(maxf(x, with), maxf(y, with))`. */
        maxf(with_: float64): Vector2
        static fromAngle(angle: float64): Vector2
        static ADD(left: Vector2, right: Vector2): Vector2
        static SUBTRACT(left: Vector2, right: Vector2): Vector2
        static MULTIPLY(left: float64, right: Vector2): Vector2
        static MULTIPLY(left: Vector2, right: Vector2): Vector2
        static MULTIPLY(left: Vector2, right: float64): Vector2
        static DIVIDE(left: Vector2, right: Vector2): Vector2
        static DIVIDE(left: Vector2, right: float64): Vector2
        static NEGATE(left: Vector2): Vector2
        static EQUAL(left: Vector2, right: Vector2): boolean
        static NOT_EQUAL(left: Vector2, right: Vector2): boolean
        static LESS(left: Vector2, right: Vector2): boolean
        static LESS_EQUAL(left: Vector2, right: Vector2): boolean
        static GREATER(left: Vector2, right: Vector2): boolean
        static GREATER_EQUAL(left: Vector2, right: Vector2): boolean
        get x(): float64
        set x(value: float64)
        get y(): float64
        set y(value: float64)
    }
    namespace Vector2I {
        enum Axis {
            AxisX = 0,
            AxisY = 1,
        }
    }
    class Vector2I {
        static readonly ZERO: Vector2I
        static readonly ONE: Vector2I
        static readonly MIN: Vector2I
        static readonly MAX: Vector2I
        static readonly LEFT: Vector2I
        static readonly RIGHT: Vector2I
        static readonly UP: Vector2I
        static readonly DOWN: Vector2I
        constructor()
        constructor(from: Vector2I)
        constructor(from: Vector2)
        constructor(x: int64, y: int64)
        aspect(): float64
        maxAxisIndex(): int64
        minAxisIndex(): int64
        distanceTo(to: Vector2I): float64
        distanceSquaredTo(to: Vector2I): int64
        length(): float64
        lengthSquared(): int64
        sign(): Vector2I
        abs(): Vector2I
        clamp(min: Vector2I, max: Vector2I): Vector2I
        clampi(min: int64, max: int64): Vector2I
        snapped(step: Vector2I): Vector2I
        snappedi(step: int64): Vector2I
        min(with_: Vector2I): Vector2I
        mini(with_: int64): Vector2I
        max(with_: Vector2I): Vector2I
        maxi(with_: int64): Vector2I
        static ADD(left: Vector2I, right: Vector2I): Vector2I
        static SUBTRACT(left: Vector2I, right: Vector2I): Vector2I
        static MULTIPLY(left: float64, right: Vector2I): Vector2I
        static MULTIPLY(left: Vector2I, right: Vector2I): Vector2I
        static MULTIPLY(left: Vector2I, right: float64): Vector2I
        static DIVIDE(left: Vector2I, right: Vector2I): Vector2I
        static DIVIDE(left: Vector2I, right: float64): Vector2I
        static NEGATE(left: Vector2I): Vector2I
        static EQUAL(left: Vector2I, right: Vector2I): boolean
        static NOT_EQUAL(left: Vector2I, right: Vector2I): boolean
        static LESS(left: Vector2I, right: Vector2I): boolean
        static LESS_EQUAL(left: Vector2I, right: Vector2I): boolean
        static GREATER(left: Vector2I, right: Vector2I): boolean
        static GREATER_EQUAL(left: Vector2I, right: Vector2I): boolean
        get x(): int64
        set x(value: int64)
        get y(): int64
        set y(value: int64)
    }
    /** A 2D axis-aligned bounding box using floating-point coordinates.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_rect2.html  
     */
    class Rect2 {
        constructor()
        constructor(from: Rect2)
        constructor(from: Rect2I)
        constructor(position: Vector2, size: Vector2)
        constructor(x: float64, y: float64, width: float64, height: float64)
        getCenter(): Vector2
        getArea(): float64
        hasArea(): boolean
        hasPoint(point: Vector2): boolean
        isEqualApprox(rect: Rect2): boolean
        isFinite(): boolean
        
        /** Returns `true` if this rectangle overlaps with the [param b] rectangle. The edges of both rectangles are excluded, unless [param include_borders] is `true`. */
        intersects(b: Rect2, includeBorders: boolean = false): boolean
        
        /** Returns `true` if this rectangle  *completely*  encloses the [param b] rectangle. */
        encloses(b: Rect2): boolean
        
        /** Returns the intersection between this rectangle and [param b]. If the rectangles do not intersect, returns an empty [Rect2].  
         *    
         *      
         *  **Note:** If you only need to know whether two rectangles are overlapping, use [method intersects], instead.  
         */
        intersection(b: Rect2): Rect2
        
        /** Returns a [Rect2] that encloses both this rectangle and [param b] around the edges. See also [method encloses]. */
        merge(b: Rect2): Rect2
        
        /** Returns a copy of this rectangle expanded to align the edges with the given [param to] point, if necessary.  
         *    
         */
        expand(to: Vector2): Rect2
        getSupport(direction: Vector2): Vector2
        
        /** Returns a copy of this rectangle extended on all sides by the given [param amount]. A negative [param amount] shrinks the rectangle instead. See also [method grow_individual] and [method grow_side].  
         *    
         */
        grow(amount: float64): Rect2
        growSide(side: int64, amount: float64): Rect2
        growIndividual(left: float64, top: float64, right: float64, bottom: float64): Rect2
        
        /** Returns a [Rect2] equivalent to this rectangle, with its width and height modified to be non-negative values, and with its [member position] being the top-left corner of the rectangle.  
         *    
         *      
         *  **Note:** It's recommended to use this method when [member size] is negative, as most other methods in Godot assume that the [member position] is the top-left corner, and the [member end] is the bottom-right corner.  
         */
        abs(): Rect2
        get position(): Vector2
        set position(value: Vector2)
        get size(): Vector2
        set size(value: Vector2)
        get end(): Vector2
        set end(value: Vector2)
    }
    class Rect2I {
        constructor()
        constructor(from: Rect2I)
        constructor(from: Rect2)
        constructor(position: Vector2I, size: Vector2I)
        constructor(x: int64, y: int64, width: int64, height: int64)
        getCenter(): Vector2I
        getArea(): int64
        hasArea(): boolean
        hasPoint(point: Vector2I): boolean
        intersects(b: Rect2I): boolean
        encloses(b: Rect2I): boolean
        intersection(b: Rect2I): Rect2I
        merge(b: Rect2I): Rect2I
        expand(to: Vector2I): Rect2I
        grow(amount: int64): Rect2I
        growSide(side: int64, amount: int64): Rect2I
        growIndividual(left: int64, top: int64, right: int64, bottom: int64): Rect2I
        abs(): Rect2I
        get position(): Vector2I
        set position(value: Vector2I)
        get size(): Vector2I
        set size(value: Vector2I)
        get end(): Vector2I
        set end(value: Vector2I)
    }
    namespace Vector3 {
        enum Axis {
            AxisX = 0,
            AxisY = 1,
            AxisZ = 2,
        }
    }
    /** A 3D vector using floating-point coordinates.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_vector3.html  
     */
    class Vector3 {
        /** Zero vector, a vector with all components set to `0`. */
        static readonly ZERO: Vector3
        
        /** One vector, a vector with all components set to `1`. */
        static readonly ONE: Vector3
        
        /** Infinity vector, a vector with all components set to [constant @GDScript.INF]. */
        static readonly INF: Vector3
        
        /** Left unit vector. Represents the local direction of left, and the global direction of west. */
        static readonly LEFT: Vector3
        
        /** Right unit vector. Represents the local direction of right, and the global direction of east. */
        static readonly RIGHT: Vector3
        
        /** Up unit vector. */
        static readonly UP: Vector3
        
        /** Down unit vector. */
        static readonly DOWN: Vector3
        
        /** Forward unit vector. Represents the local direction of forward, and the global direction of north. Keep in mind that the forward direction for lights, cameras, etc is different from 3D assets like characters, which face towards the camera by convention. Use [constant Vector3.MODEL_FRONT] and similar constants when working in 3D asset space. */
        static readonly FORWARD: Vector3
        
        /** Back unit vector. Represents the local direction of back, and the global direction of south. */
        static readonly BACK: Vector3
        
        /** Unit vector pointing towards the left side of imported 3D assets. */
        static readonly MODEL_LEFT: Vector3
        
        /** Unit vector pointing towards the right side of imported 3D assets. */
        static readonly MODEL_RIGHT: Vector3
        
        /** Unit vector pointing towards the top side (up) of imported 3D assets. */
        static readonly MODEL_TOP: Vector3
        
        /** Unit vector pointing towards the bottom side (down) of imported 3D assets. */
        static readonly MODEL_BOTTOM: Vector3
        
        /** Unit vector pointing towards the front side (facing forward) of imported 3D assets. */
        static readonly MODEL_FRONT: Vector3
        
        /** Unit vector pointing towards the rear side (back) of imported 3D assets. */
        static readonly MODEL_REAR: Vector3
        constructor()
        constructor(from: Vector3)
        constructor(from: Vector3I)
        constructor(x: float64, y: float64, z: float64)
        minAxisIndex(): int64
        maxAxisIndex(): int64
        angleTo(to: Vector3): float64
        signedAngleTo(to: Vector3, axis: Vector3): float64
        directionTo(to: Vector3): Vector3
        distanceTo(to: Vector3): float64
        distanceSquaredTo(to: Vector3): float64
        
        /** Returns the length (magnitude) of this vector. */
        length(): float64
        lengthSquared(): float64
        limitLength(length: float64 = 1): Vector3
        
        /** Returns the result of scaling the vector to unit length. Equivalent to `v / v.length()`. Returns `(0, 0, 0)` if `v.length() == 0`. See also [method is_normalized].  
         *      
         *  **Note:** This function may return incorrect values if the input vector length is near zero.  
         */
        normalized(): Vector3
        isNormalized(): boolean
        isEqualApprox(to: Vector3): boolean
        isZeroApprox(): boolean
        isFinite(): boolean
        
        /** Returns the inverse of the vector. This is the same as `Vector3(1.0 / v.x, 1.0 / v.y, 1.0 / v.z)`. */
        inverse(): Vector3
        
        /** Returns a new vector with all components clamped between the components of [param min] and [param max], by running [method @GlobalScope.clamp] on each component. */
        clamp(min: Vector3, max: Vector3): Vector3
        
        /** Returns a new vector with all components clamped between [param min] and [param max], by running [method @GlobalScope.clamp] on each component. */
        clampf(min: float64, max: float64): Vector3
        
        /** Returns a new vector with each component snapped to the nearest multiple of the corresponding component in [param step]. This can also be used to round the components to an arbitrary number of decimals. */
        snapped(step: Vector3): Vector3
        
        /** Returns a new vector with each component snapped to the nearest multiple of [param step]. This can also be used to round the components to an arbitrary number of decimals. */
        snappedf(step: float64): Vector3
        
        /** Returns the result of rotating this vector around a given axis by [param angle] (in radians). The axis must be a normalized vector. See also [method @GlobalScope.deg_to_rad]. */
        rotated(axis: Vector3, angle: float64): Vector3
        
        /** Returns the result of the linear interpolation between this vector and [param to] by amount [param weight]. [param weight] is on the range of `0.0` to `1.0`, representing the amount of interpolation. */
        lerp(to: Vector3, weight: float64): Vector3
        
        /** Returns the result of spherical linear interpolation between this vector and [param to], by amount [param weight]. [param weight] is on the range of 0.0 to 1.0, representing the amount of interpolation.  
         *  This method also handles interpolating the lengths if the input vectors have different lengths. For the special case of one or both input vectors having zero length, this method behaves like [method lerp].  
         */
        slerp(to: Vector3, weight: float64): Vector3
        cubicInterpolate(b: Vector3, preA: Vector3, postB: Vector3, weight: float64): Vector3
        cubicInterpolateInTime(b: Vector3, preA: Vector3, postB: Vector3, weight: float64, bT: float64, preAT: float64, postBT: float64): Vector3
        bezierInterpolate(control1: Vector3, control2: Vector3, end: Vector3, t: float64): Vector3
        bezierDerivative(control1: Vector3, control2: Vector3, end: Vector3, t: float64): Vector3
        moveToward(to: Vector3, delta: float64): Vector3
        
        /** Returns the dot product of this vector and [param with]. This can be used to compare the angle between two vectors. For example, this can be used to determine whether an enemy is facing the player.  
         *  The dot product will be `0` for a right angle (90 degrees), greater than 0 for angles narrower than 90 degrees and lower than 0 for angles wider than 90 degrees.  
         *  When using unit (normalized) vectors, the result will always be between `-1.0` (180 degree angle) when the vectors are facing opposite directions, and `1.0` (0 degree angle) when the vectors are aligned.  
         *      
         *  **Note:** `a.dot(b)` is equivalent to `b.dot(a)`.  
         */
        dot(with_: Vector3): float64
        
        /** Returns the cross product of this vector and [param with].  
         *  This returns a vector perpendicular to both this and [param with], which would be the normal vector of the plane defined by the two vectors. As there are two such vectors, in opposite directions, this method returns the vector defined by a right-handed coordinate system. If the two vectors are parallel this returns an empty vector, making it useful for testing if two vectors are parallel.  
         */
        cross(with_: Vector3): Vector3
        
        /** Returns the outer product with [param with]. */
        outer(with_: Vector3): Basis
        
        /** Returns a new vector with all components in absolute values (i.e. positive). */
        abs(): Vector3
        
        /** Returns a new vector with all components rounded down (towards negative infinity). */
        floor(): Vector3
        
        /** Returns a new vector with all components rounded up (towards positive infinity). */
        ceil(): Vector3
        
        /** Returns a new vector with all components rounded to the nearest integer, with halfway cases rounded away from zero. */
        round(): Vector3
        
        /** Returns a vector composed of the [method @GlobalScope.fposmod] of this vector's components and [param mod]. */
        posmod(mod: float64): Vector3
        
        /** Returns a vector composed of the [method @GlobalScope.fposmod] of this vector's components and [param modv]'s components. */
        posmodv(modv: Vector3): Vector3
        
        /** Returns a new vector resulting from projecting this vector onto the given vector [param b]. The resulting new vector is parallel to [param b]. See also [method slide].  
         *      
         *  **Note:** If the vector [param b] is a zero vector, the components of the resulting new vector will be [constant @GDScript.NAN].  
         */
        project(b: Vector3): Vector3
        
        /** Returns a new vector resulting from sliding this vector along a plane with normal [param n]. The resulting new vector is perpendicular to [param n], and is equivalent to this vector minus its projection on [param n]. See also [method project].  
         *      
         *  **Note:** The vector [param n] must be normalized. See also [method normalized].  
         */
        slide(n: Vector3): Vector3
        
        /** Returns the vector "bounced off" from a plane defined by the given normal [param n].  
         *      
         *  **Note:** [method bounce] performs the operation that most engines and frameworks call [code skip-lint]reflect()`.  
         */
        bounce(n: Vector3): Vector3
        
        /** Returns the result of reflecting the vector through a plane defined by the given normal vector [param n].  
         *      
         *  **Note:** [method reflect] differs from what other engines and frameworks call [code skip-lint]reflect()`. In other engines, [code skip-lint]reflect()` returns the result of the vector reflected by the given plane. The reflection thus passes through the given normal. While in Godot the reflection passes through the plane and can be thought of as bouncing off the normal. See also [method bounce] which does what most engines call [code skip-lint]reflect()`.  
         */
        reflect(n: Vector3): Vector3
        
        /** Returns a new vector with each component set to `1.0` if it's positive, `-1.0` if it's negative, and `0.0` if it's zero. The result is identical to calling [method @GlobalScope.sign] on each component. */
        sign(): Vector3
        octahedronEncode(): Vector2
        
        /** Returns the component-wise minimum of this and [param with], equivalent to `Vector3(minf(x, with.x), minf(y, with.y), minf(z, with.z))`. */
        min(with_: Vector3): Vector3
        
        /** Returns the component-wise minimum of this and [param with], equivalent to `Vector3(minf(x, with), minf(y, with), minf(z, with))`. */
        minf(with_: float64): Vector3
        
        /** Returns the component-wise maximum of this and [param with], equivalent to `Vector3(maxf(x, with.x), maxf(y, with.y), maxf(z, with.z))`. */
        max(with_: Vector3): Vector3
        
        /** Returns the component-wise maximum of this and [param with], equivalent to `Vector3(maxf(x, with), maxf(y, with), maxf(z, with))`. */
        maxf(with_: float64): Vector3
        static octahedronDecode(uV: Vector2): Vector3
        static ADD(left: Vector3, right: Vector3): Vector3
        static SUBTRACT(left: Vector3, right: Vector3): Vector3
        static MULTIPLY(left: float64, right: Vector3): Vector3
        static MULTIPLY(left: Vector3, right: Vector3): Vector3
        static MULTIPLY(left: Vector3, right: float64): Vector3
        static DIVIDE(left: Vector3, right: Vector3): Vector3
        static DIVIDE(left: Vector3, right: float64): Vector3
        static NEGATE(left: Vector3): Vector3
        static EQUAL(left: Vector3, right: Vector3): boolean
        static NOT_EQUAL(left: Vector3, right: Vector3): boolean
        static LESS(left: Vector3, right: Vector3): boolean
        static LESS_EQUAL(left: Vector3, right: Vector3): boolean
        static GREATER(left: Vector3, right: Vector3): boolean
        static GREATER_EQUAL(left: Vector3, right: Vector3): boolean
        get x(): float64
        set x(value: float64)
        get y(): float64
        set y(value: float64)
        get z(): float64
        set z(value: float64)
    }
    namespace Vector3I {
        enum Axis {
            AxisX = 0,
            AxisY = 1,
            AxisZ = 2,
        }
    }
    class Vector3I {
        static readonly ZERO: Vector3I
        static readonly ONE: Vector3I
        static readonly MIN: Vector3I
        static readonly MAX: Vector3I
        static readonly LEFT: Vector3I
        static readonly RIGHT: Vector3I
        static readonly UP: Vector3I
        static readonly DOWN: Vector3I
        static readonly FORWARD: Vector3I
        static readonly BACK: Vector3I
        constructor()
        constructor(from: Vector3I)
        constructor(from: Vector3)
        constructor(x: int64, y: int64, z: int64)
        minAxisIndex(): int64
        maxAxisIndex(): int64
        distanceTo(to: Vector3I): float64
        distanceSquaredTo(to: Vector3I): int64
        length(): float64
        lengthSquared(): int64
        sign(): Vector3I
        abs(): Vector3I
        clamp(min: Vector3I, max: Vector3I): Vector3I
        clampi(min: int64, max: int64): Vector3I
        snapped(step: Vector3I): Vector3I
        snappedi(step: int64): Vector3I
        min(with_: Vector3I): Vector3I
        mini(with_: int64): Vector3I
        max(with_: Vector3I): Vector3I
        maxi(with_: int64): Vector3I
        static ADD(left: Vector3I, right: Vector3I): Vector3I
        static SUBTRACT(left: Vector3I, right: Vector3I): Vector3I
        static MULTIPLY(left: float64, right: Vector3I): Vector3I
        static MULTIPLY(left: Vector3I, right: Vector3I): Vector3I
        static MULTIPLY(left: Vector3I, right: float64): Vector3I
        static DIVIDE(left: Vector3I, right: Vector3I): Vector3I
        static DIVIDE(left: Vector3I, right: float64): Vector3I
        static NEGATE(left: Vector3I): Vector3I
        static EQUAL(left: Vector3I, right: Vector3I): boolean
        static NOT_EQUAL(left: Vector3I, right: Vector3I): boolean
        static LESS(left: Vector3I, right: Vector3I): boolean
        static LESS_EQUAL(left: Vector3I, right: Vector3I): boolean
        static GREATER(left: Vector3I, right: Vector3I): boolean
        static GREATER_EQUAL(left: Vector3I, right: Vector3I): boolean
        get x(): int64
        set x(value: int64)
        get y(): int64
        set y(value: int64)
        get z(): int64
        set z(value: int64)
    }
    /** A 2×3 matrix representing a 2D transformation.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_transform2d.html  
     */
    class Transform2D {
        /** The identity [Transform2D]. This is a transform with no translation, no rotation, and a scale of [constant Vector2.ONE]. This also means that:  
         *  - The [member x] points right ([constant Vector2.RIGHT]);  
         *  - The [member y] points down ([constant Vector2.DOWN]).  
         *    
         *  If a [Vector2], a [Rect2], a [PackedVector2Array], or another [Transform2D] is transformed (multiplied) by this constant, no transformation occurs.  
         *      
         *  **Note:** In GDScript, this constant is equivalent to creating a [constructor Transform2D] without any arguments. It can be used to make your code clearer, and for consistency with C#.  
         */
        static readonly IDENTITY: Transform2D
        
        /** When any transform is multiplied by [constant FLIP_X], it negates all components of the [member x] axis (the X column).  
         *  When [constant FLIP_X] is multiplied by any transform, it negates the [member Vector2.x] component of all axes (the X row).  
         */
        static readonly FLIP_X: Transform2D
        
        /** When any transform is multiplied by [constant FLIP_Y], it negates all components of the [member y] axis (the Y column).  
         *  When [constant FLIP_Y] is multiplied by any transform, it negates the [member Vector2.y] component of all axes (the Y row).  
         */
        static readonly FLIP_Y: Transform2D
        constructor()
        constructor(from: Transform2D)
        constructor(rotation: float64, position: Vector2)
        constructor(rotation: float64, scale: Vector2, skew: float64, position: Vector2)
        constructor(xAxis: Vector2, yAxis: Vector2, origin: Vector2)
        
        /** Returns the [url=https://en.wikipedia.org/wiki/Invertible_matrix]inverted version of this transform[/url].  
         *      
         *  **Note:** For this method to return correctly, the transform's basis needs to be  *orthonormal*  (see [method orthonormalized]). That means the basis should only represent a rotation. If it does not, use [method affine_inverse] instead.  
         */
        inverse(): Transform2D
        affineInverse(): Transform2D
        getRotation(): float64
        getOrigin(): Vector2
        getScale(): Vector2
        getSkew(): float64
        
        /** Returns a copy of this transform with its basis orthonormalized. An orthonormal basis is both  *orthogonal*  (the axes are perpendicular to each other) and  *normalized*  (the axes have a length of `1.0`), which also means it can only represent a rotation. */
        orthonormalized(): Transform2D
        
        /** Returns a copy of this transform rotated by the given [param angle] (in radians).  
         *  If [param angle] is positive, the transform is rotated clockwise.  
         *  This method is an optimized version of multiplying the given transform `X` with a corresponding rotation transform `R` from the left, i.e., `R * X`.  
         *  This can be seen as transforming with respect to the global/parent frame.  
         */
        rotated(angle: float64): Transform2D
        rotatedLocal(angle: float64): Transform2D
        
        /** Returns a copy of the transform scaled by the given [param scale] factor.  
         *  This method is an optimized version of multiplying the given transform `X` with a corresponding scaling transform `S` from the left, i.e., `S * X`.  
         *  This can be seen as transforming with respect to the global/parent frame.  
         */
        scaled(scale: Vector2): Transform2D
        scaledLocal(scale: Vector2): Transform2D
        
        /** Returns a copy of the transform translated by the given [param offset].  
         *  This method is an optimized version of multiplying the given transform `X` with a corresponding translation transform `T` from the left, i.e., `T * X`.  
         *  This can be seen as transforming with respect to the global/parent frame.  
         */
        translated(offset: Vector2): Transform2D
        translatedLocal(offset: Vector2): Transform2D
        
        /** Returns the [url=https://en.wikipedia.org/wiki/Determinant]determinant[/url] of this transform basis's matrix. For advanced math, this number can be used to determine a few attributes:  
         *  - If the determinant is exactly `0.0`, the basis is not invertible (see [method inverse]).  
         *  - If the determinant is a negative number, the basis represents a negative scale.  
         *      
         *  **Note:** If the basis's scale is the same for every axis, its determinant is always that scale by the power of 2.  
         */
        determinant(): float64
        basisXform(v: Vector2): Vector2
        basisXformInv(v: Vector2): Vector2
        interpolateWith(xform: Transform2D, weight: float64): Transform2D
        isConformal(): boolean
        isEqualApprox(xform: Transform2D): boolean
        isFinite(): boolean
        lookingAt(target: Vector2 = Vector2.ZERO): Transform2D
        static MULTIPLY(left: Transform2D, right: Transform2D): Transform2D
        static MULTIPLY(left: Transform2D, right: float64): Transform2D
        static MULTIPLY(left: Transform2D, right: Vector2): Vector2
        static MULTIPLY(left: Vector2, right: Transform2D): Vector2
        static MULTIPLY(left: Transform2D, right: Rect2): Rect2
        static MULTIPLY(left: Rect2, right: Transform2D): Rect2
        static MULTIPLY(left: Transform2D, right: PackedVector2Array | Vector2[]): PackedVector2Array
        static MULTIPLY(left: PackedVector2Array | Vector2[], right: Transform2D): PackedVector2Array
        static EQUAL(left: Transform2D, right: Transform2D): boolean
        static NOT_EQUAL(left: Transform2D, right: Transform2D): boolean
        get x(): Vector2
        set x(value: Vector2)
        get y(): Vector2
        set y(value: Vector2)
        get origin(): Vector2
        set origin(value: Vector2)
    }
    namespace Vector4 {
        enum Axis {
            AxisX = 0,
            AxisY = 1,
            AxisZ = 2,
            AxisW = 3,
        }
    }
    /** A 4D vector using floating-point coordinates.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_vector4.html  
     */
    class Vector4 {
        /** Zero vector, a vector with all components set to `0`. */
        static readonly ZERO: Vector4
        
        /** One vector, a vector with all components set to `1`. */
        static readonly ONE: Vector4
        
        /** Infinity vector, a vector with all components set to [constant @GDScript.INF]. */
        static readonly INF: Vector4
        constructor()
        constructor(from: Vector4)
        constructor(from: Vector4I)
        constructor(x: float64, y: float64, z: float64, w: float64)
        minAxisIndex(): int64
        maxAxisIndex(): int64
        
        /** Returns the length (magnitude) of this vector. */
        length(): float64
        lengthSquared(): float64
        
        /** Returns a new vector with all components in absolute values (i.e. positive). */
        abs(): Vector4
        
        /** Returns a new vector with each component set to `1.0` if it's positive, `-1.0` if it's negative, and `0.0` if it's zero. The result is identical to calling [method @GlobalScope.sign] on each component. */
        sign(): Vector4
        
        /** Returns a new vector with all components rounded down (towards negative infinity). */
        floor(): Vector4
        
        /** Returns a new vector with all components rounded up (towards positive infinity). */
        ceil(): Vector4
        
        /** Returns a new vector with all components rounded to the nearest integer, with halfway cases rounded away from zero. */
        round(): Vector4
        
        /** Returns the result of the linear interpolation between this vector and [param to] by amount [param weight]. [param weight] is on the range of `0.0` to `1.0`, representing the amount of interpolation. */
        lerp(to: Vector4, weight: float64): Vector4
        cubicInterpolate(b: Vector4, preA: Vector4, postB: Vector4, weight: float64): Vector4
        cubicInterpolateInTime(b: Vector4, preA: Vector4, postB: Vector4, weight: float64, bT: float64, preAT: float64, postBT: float64): Vector4
        
        /** Returns a vector composed of the [method @GlobalScope.fposmod] of this vector's components and [param mod]. */
        posmod(mod: float64): Vector4
        
        /** Returns a vector composed of the [method @GlobalScope.fposmod] of this vector's components and [param modv]'s components. */
        posmodv(modv: Vector4): Vector4
        
        /** Returns a new vector with each component snapped to the nearest multiple of the corresponding component in [param step]. This can also be used to round the components to an arbitrary number of decimals. */
        snapped(step: Vector4): Vector4
        
        /** Returns a new vector with each component snapped to the nearest multiple of [param step]. This can also be used to round the components to an arbitrary number of decimals. */
        snappedf(step: float64): Vector4
        
        /** Returns a new vector with all components clamped between the components of [param min] and [param max], by running [method @GlobalScope.clamp] on each component. */
        clamp(min: Vector4, max: Vector4): Vector4
        
        /** Returns a new vector with all components clamped between [param min] and [param max], by running [method @GlobalScope.clamp] on each component. */
        clampf(min: float64, max: float64): Vector4
        
        /** Returns the result of scaling the vector to unit length. Equivalent to `v / v.length()`. Returns `(0, 0, 0, 0)` if `v.length() == 0`. See also [method is_normalized].  
         *      
         *  **Note:** This function may return incorrect values if the input vector length is near zero.  
         */
        normalized(): Vector4
        isNormalized(): boolean
        directionTo(to: Vector4): Vector4
        distanceTo(to: Vector4): float64
        distanceSquaredTo(to: Vector4): float64
        
        /** Returns the dot product of this vector and [param with]. */
        dot(with_: Vector4): float64
        
        /** Returns the inverse of the vector. This is the same as `Vector4(1.0 / v.x, 1.0 / v.y, 1.0 / v.z, 1.0 / v.w)`. */
        inverse(): Vector4
        isEqualApprox(to: Vector4): boolean
        isZeroApprox(): boolean
        isFinite(): boolean
        
        /** Returns the component-wise minimum of this and [param with], equivalent to `Vector4(minf(x, with.x), minf(y, with.y), minf(z, with.z), minf(w, with.w))`. */
        min(with_: Vector4): Vector4
        
        /** Returns the component-wise minimum of this and [param with], equivalent to `Vector4(minf(x, with), minf(y, with), minf(z, with), minf(w, with))`. */
        minf(with_: float64): Vector4
        
        /** Returns the component-wise maximum of this and [param with], equivalent to `Vector4(maxf(x, with.x), maxf(y, with.y), maxf(z, with.z), maxf(w, with.w))`. */
        max(with_: Vector4): Vector4
        
        /** Returns the component-wise maximum of this and [param with], equivalent to `Vector4(maxf(x, with), maxf(y, with), maxf(z, with), maxf(w, with))`. */
        maxf(with_: float64): Vector4
        static ADD(left: Vector4, right: Vector4): Vector4
        static SUBTRACT(left: Vector4, right: Vector4): Vector4
        static MULTIPLY(left: float64, right: Vector4): Vector4
        static MULTIPLY(left: Vector4, right: Vector4): Vector4
        static MULTIPLY(left: Vector4, right: float64): Vector4
        static DIVIDE(left: Vector4, right: Vector4): Vector4
        static DIVIDE(left: Vector4, right: float64): Vector4
        static NEGATE(left: Vector4): Vector4
        static EQUAL(left: Vector4, right: Vector4): boolean
        static NOT_EQUAL(left: Vector4, right: Vector4): boolean
        static LESS(left: Vector4, right: Vector4): boolean
        static LESS_EQUAL(left: Vector4, right: Vector4): boolean
        static GREATER(left: Vector4, right: Vector4): boolean
        static GREATER_EQUAL(left: Vector4, right: Vector4): boolean
        get x(): float64
        set x(value: float64)
        get y(): float64
        set y(value: float64)
        get z(): float64
        set z(value: float64)
        get w(): float64
        set w(value: float64)
    }
    namespace Vector4I {
        enum Axis {
            AxisX = 0,
            AxisY = 1,
            AxisZ = 2,
            AxisW = 3,
        }
    }
    class Vector4I {
        static readonly ZERO: Vector4I
        static readonly ONE: Vector4I
        static readonly MIN: Vector4I
        static readonly MAX: Vector4I
        constructor()
        constructor(from: Vector4I)
        constructor(from: Vector4)
        constructor(x: int64, y: int64, z: int64, w: int64)
        minAxisIndex(): int64
        maxAxisIndex(): int64
        length(): float64
        lengthSquared(): int64
        sign(): Vector4I
        abs(): Vector4I
        clamp(min: Vector4I, max: Vector4I): Vector4I
        clampi(min: int64, max: int64): Vector4I
        snapped(step: Vector4I): Vector4I
        snappedi(step: int64): Vector4I
        min(with_: Vector4I): Vector4I
        mini(with_: int64): Vector4I
        max(with_: Vector4I): Vector4I
        maxi(with_: int64): Vector4I
        distanceTo(to: Vector4I): float64
        distanceSquaredTo(to: Vector4I): int64
        static ADD(left: Vector4I, right: Vector4I): Vector4I
        static SUBTRACT(left: Vector4I, right: Vector4I): Vector4I
        static MULTIPLY(left: float64, right: Vector4I): Vector4I
        static MULTIPLY(left: Vector4I, right: Vector4I): Vector4I
        static MULTIPLY(left: Vector4I, right: float64): Vector4I
        static DIVIDE(left: Vector4I, right: Vector4I): Vector4I
        static DIVIDE(left: Vector4I, right: float64): Vector4I
        static NEGATE(left: Vector4I): Vector4I
        static EQUAL(left: Vector4I, right: Vector4I): boolean
        static NOT_EQUAL(left: Vector4I, right: Vector4I): boolean
        static LESS(left: Vector4I, right: Vector4I): boolean
        static LESS_EQUAL(left: Vector4I, right: Vector4I): boolean
        static GREATER(left: Vector4I, right: Vector4I): boolean
        static GREATER_EQUAL(left: Vector4I, right: Vector4I): boolean
        get x(): int64
        set x(value: int64)
        get y(): int64
        set y(value: int64)
        get z(): int64
        set z(value: int64)
        get w(): int64
        set w(value: int64)
    }
    /** A plane in Hessian normal form.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_plane.html  
     */
    class Plane {
        /** A plane that extends in the Y and Z axes (normal vector points +X). */
        static readonly PLANE_YZ: Plane
        
        /** A plane that extends in the X and Z axes (normal vector points +Y). */
        static readonly PLANE_XZ: Plane
        
        /** A plane that extends in the X and Y axes (normal vector points +Z). */
        static readonly PLANE_XY: Plane
        constructor()
        constructor(from: Plane)
        constructor(normal: Vector3)
        constructor(normal: Vector3, d: float64)
        constructor(normal: Vector3, point: Vector3)
        constructor(point1: Vector3, point2: Vector3, point3: Vector3)
        constructor(a: float64, b: float64, c: float64, d: float64)
        
        /** Returns a copy of the plane, with normalized [member normal] (so it's a unit vector). Returns `Plane(0, 0, 0, 0)` if [member normal] can't be normalized (it has zero length). */
        normalized(): Plane
        getCenter(): Vector3
        isEqualApprox(toPlane: Plane): boolean
        isFinite(): boolean
        isPointOver(point: Vector3): boolean
        distanceTo(point: Vector3): float64
        hasPoint(point: Vector3, tolerance: float64 = 0.00001): boolean
        
        /** Returns the orthogonal projection of [param point] into a point in the plane. */
        project(point: Vector3): Vector3
        intersect3(b: Plane, c: Plane): any
        intersectsRay(from: Vector3, dir: Vector3): any
        intersectsSegment(from: Vector3, to: Vector3): any
        static NEGATE(left: Plane): Plane
        static EQUAL(left: Plane, right: Plane): boolean
        static NOT_EQUAL(left: Plane, right: Plane): boolean
        get x(): float64
        set x(value: float64)
        get y(): float64
        set y(value: float64)
        get z(): float64
        set z(value: float64)
        get d(): float64
        set d(value: float64)
        get normal(): Vector3
        set normal(value: Vector3)
    }
    /** A unit quaternion used for representing 3D rotations.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_quaternion.html  
     */
    class Quaternion {
        /** The identity quaternion, representing no rotation. This has the same rotation as [constant Basis.IDENTITY].  
         *  If a [Vector3] is rotated (multiplied) by this quaternion, it does not change.  
         *      
         *  **Note:** In GDScript, this constant is equivalent to creating a [constructor Quaternion] without any arguments. It can be used to make your code clearer, and for consistency with C#.  
         */
        static readonly IDENTITY: Quaternion
        constructor()
        constructor(from: Quaternion)
        constructor(from: Basis)
        constructor(axis: Vector3, angle: float64)
        constructor(arcFrom: Vector3, arcTo: Vector3)
        constructor(x: float64, y: float64, z: float64, w: float64)
        
        /** Returns this quaternion's length, also called magnitude. */
        length(): float64
        lengthSquared(): float64
        
        /** Returns a copy of this quaternion, normalized so that its length is `1.0`. See also [method is_normalized]. */
        normalized(): Quaternion
        isNormalized(): boolean
        isEqualApprox(to: Quaternion): boolean
        isFinite(): boolean
        
        /** Returns the inverse version of this quaternion, inverting the sign of every component except [member w]. */
        inverse(): Quaternion
        
        /** Returns the logarithm of this quaternion. Multiplies this quaternion's rotation axis by its rotation angle, and stores the result in the returned quaternion's vector part ([member x], [member y], and [member z]). The returned quaternion's real part ([member w]) is always `0.0`. */
        log(): Quaternion
        
        /** Returns the exponential of this quaternion. The rotation axis of the result is the normalized rotation axis of this quaternion, the angle of the result is the length of the vector part of this quaternion. */
        exp(): Quaternion
        angleTo(to: Quaternion): float64
        
        /** Returns the dot product between this quaternion and [param with].  
         *  This is equivalent to `(quat.x * with.x) + (quat.y * with.y) + (quat.z * with.z) + (quat.w * with.w)`.  
         */
        dot(with_: Quaternion): float64
        
        /** Performs a spherical-linear interpolation with the [param to] quaternion, given a [param weight] and returns the result. Both this quaternion and [param to] must be normalized. */
        slerp(to: Quaternion, weight: float64): Quaternion
        
        /** Performs a spherical-linear interpolation with the [param to] quaternion, given a [param weight] and returns the result. Unlike [method slerp], this method does not check if the rotation path is smaller than 90 degrees. Both this quaternion and [param to] must be normalized. */
        slerpni(to: Quaternion, weight: float64): Quaternion
        sphericalCubicInterpolate(b: Quaternion, preA: Quaternion, postB: Quaternion, weight: float64): Quaternion
        sphericalCubicInterpolateInTime(b: Quaternion, preA: Quaternion, postB: Quaternion, weight: float64, bT: float64, preAT: float64, postBT: float64): Quaternion
        getEuler(order: int64 = 2): Vector3
        static fromEuler(euler: Vector3): Quaternion
        getAxis(): Vector3
        getAngle(): float64
        static ADD(left: Quaternion, right: Quaternion): Quaternion
        static SUBTRACT(left: Quaternion, right: Quaternion): Quaternion
        static MULTIPLY(left: Quaternion, right: Quaternion): Quaternion
        static MULTIPLY(left: Quaternion, right: float64): Quaternion
        static MULTIPLY(left: float64, right: Quaternion): Quaternion
        static MULTIPLY(left: Vector3, right: Quaternion): Vector3
        static MULTIPLY(left: Quaternion, right: Vector3): Vector3
        static DIVIDE(left: Quaternion, right: float64): Quaternion
        static NEGATE(left: Quaternion): Quaternion
        static EQUAL(left: Quaternion, right: Quaternion): boolean
        static NOT_EQUAL(left: Quaternion, right: Quaternion): boolean
        get x(): float64
        set x(value: float64)
        get y(): float64
        set y(value: float64)
        get z(): float64
        set z(value: float64)
        get w(): float64
        set w(value: float64)
    }
    class Aabb {
        constructor()
        constructor(from: Aabb)
        constructor(position: Vector3, size: Vector3)
        abs(): Aabb
        getCenter(): Vector3
        getVolume(): float64
        hasVolume(): boolean
        hasSurface(): boolean
        hasPoint(point: Vector3): boolean
        isEqualApprox(aabb: Aabb): boolean
        isFinite(): boolean
        intersects(with_: Aabb): boolean
        encloses(with_: Aabb): boolean
        intersectsPlane(plane: Plane): boolean
        intersection(with_: Aabb): Aabb
        merge(with_: Aabb): Aabb
        expand(toPoint: Vector3): Aabb
        grow(by: float64): Aabb
        getSupport(direction: Vector3): Vector3
        getLongestAxis(): Vector3
        getLongestAxisIndex(): int64
        getLongestAxisSize(): float64
        getShortestAxis(): Vector3
        getShortestAxisIndex(): int64
        getShortestAxisSize(): float64
        getEndpoint(idx: int64): Vector3
        intersectsSegment(from: Vector3, to: Vector3): any
        intersectsRay(from: Vector3, dir: Vector3): any
        static EQUAL(left: Aabb, right: Aabb): boolean
        static NOT_EQUAL(left: Aabb, right: Aabb): boolean
        get position(): Vector3
        set position(value: Vector3)
        get size(): Vector3
        set size(value: Vector3)
        get end(): Vector3
        set end(value: Vector3)
    }
    /** A 3×3 matrix for representing 3D rotation and scale.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_basis.html  
     */
    class Basis {
        /** The identity [Basis]. This is an orthonormal basis with no rotation, no shear, and a scale of [constant Vector3.ONE]. This also means that:  
         *  - The [member x] points right ([constant Vector3.RIGHT]);  
         *  - The [member y] points up ([constant Vector3.UP]);  
         *  - The [member z] points back ([constant Vector3.BACK]).  
         *    
         *  If a [Vector3] or another [Basis] is transformed (multiplied) by this constant, no transformation occurs.  
         *      
         *  **Note:** In GDScript, this constant is equivalent to creating a [constructor Basis] without any arguments. It can be used to make your code clearer, and for consistency with C#.  
         */
        static readonly IDENTITY: Basis
        
        /** When any basis is multiplied by [constant FLIP_X], it negates all components of the [member x] axis (the X column).  
         *  When [constant FLIP_X] is multiplied by any basis, it negates the [member Vector3.x] component of all axes (the X row).  
         */
        static readonly FLIP_X: Basis
        
        /** When any basis is multiplied by [constant FLIP_Y], it negates all components of the [member y] axis (the Y column).  
         *  When [constant FLIP_Y] is multiplied by any basis, it negates the [member Vector3.y] component of all axes (the Y row).  
         */
        static readonly FLIP_Y: Basis
        
        /** When any basis is multiplied by [constant FLIP_Z], it negates all components of the [member z] axis (the Z column).  
         *  When [constant FLIP_Z] is multiplied by any basis, it negates the [member Vector3.z] component of all axes (the Z row).  
         */
        static readonly FLIP_Z: Basis
        constructor()
        constructor(from: Basis)
        constructor(from: Quaternion)
        constructor(axis: Vector3, angle: float64)
        constructor(xAxis: Vector3, yAxis: Vector3, zAxis: Vector3)
        
        /** Returns the [url=https://en.wikipedia.org/wiki/Invertible_matrix]inverse of this basis's matrix[/url]. */
        inverse(): Basis
        
        /** Returns the transposed version of this basis. This turns the basis matrix's columns into rows, and its rows into columns.  
         *    
         */
        transposed(): Basis
        
        /** Returns the orthonormalized version of this basis. An orthonormal basis is both  *orthogonal*  (the axes are perpendicular to each other) and  *normalized*  (the axes have a length of `1.0`), which also means it can only represent a rotation.  
         *  It is often useful to call this method to avoid rounding errors on a rotating basis:  
         *    
         */
        orthonormalized(): Basis
        
        /** Returns the [url=https://en.wikipedia.org/wiki/Determinant]determinant[/url] of this basis's matrix. For advanced math, this number can be used to determine a few attributes:  
         *  - If the determinant is exactly `0.0`, the basis is not invertible (see [method inverse]).  
         *  - If the determinant is a negative number, the basis represents a negative scale.  
         *      
         *  **Note:** If the basis's scale is the same for every axis, its determinant is always that scale by the power of 2.  
         */
        determinant(): float64
        
        /** Returns a copy of this basis rotated around the given [param axis] by the given [param angle] (in radians).  
         *  The [param axis] must be a normalized vector (see [method Vector3.normalized]). If [param angle] is positive, the basis is rotated counter-clockwise around the axis.  
         *    
         */
        rotated(axis: Vector3, angle: float64): Basis
        
        /** Returns this basis with each axis's components scaled by the given [param scale]'s components.  
         *  The basis matrix's rows are multiplied by [param scale]'s components. This operation is a global scale (relative to the parent).  
         *    
         */
        scaled(scale: Vector3): Basis
        getScale(): Vector3
        getEuler(order: int64 = 2): Vector3
        
        /** Returns the transposed dot product between [param with] and the [member x] axis (see [method transposed]).  
         *  This is equivalent to `basis.x.dot(vector)`.  
         */
        tdotx(with_: Vector3): float64
        
        /** Returns the transposed dot product between [param with] and the [member y] axis (see [method transposed]).  
         *  This is equivalent to `basis.y.dot(vector)`.  
         */
        tdoty(with_: Vector3): float64
        
        /** Returns the transposed dot product between [param with] and the [member z] axis (see [method transposed]).  
         *  This is equivalent to `basis.z.dot(vector)`.  
         */
        tdotz(with_: Vector3): float64
        
        /** Performs a spherical-linear interpolation with the [param to] basis, given a [param weight]. Both this basis and [param to] should represent a rotation.  
         *  **Example:** Smoothly rotate a [Node3D] to the target basis over time, with a [Tween]:  
         *    
         */
        slerp(to: Basis, weight: float64): Basis
        isConformal(): boolean
        isEqualApprox(b: Basis): boolean
        isFinite(): boolean
        getRotationQuaternion(): Quaternion
        static lookingAt(target: Vector3, up: Vector3 = Vector3.ZERO, useModelFront: boolean = false): Basis
        static fromScale(scale: Vector3): Basis
        static fromEuler(euler: Vector3, order: int64 = 2): Basis
        static MULTIPLY(left: Basis, right: Basis): Basis
        static MULTIPLY(left: Basis, right: float64): Basis
        static MULTIPLY(left: Basis, right: Vector3): Vector3
        static MULTIPLY(left: Vector3, right: Basis): Vector3
        static EQUAL(left: Basis, right: Basis): boolean
        static NOT_EQUAL(left: Basis, right: Basis): boolean
        get x(): Vector3
        set x(value: Vector3)
        get y(): Vector3
        set y(value: Vector3)
        get z(): Vector3
        set z(value: Vector3)
    }
    /** A 3×4 matrix representing a 3D transformation.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_transform3d.html  
     */
    class Transform3D {
        /** The identity [Transform3D]. This is a transform with no translation, no rotation, and a scale of [constant Vector3.ONE]. Its [member basis] is equal to [constant Basis.IDENTITY]. This also means that:  
         *  - Its [member Basis.x] points right ([constant Vector3.RIGHT]);  
         *  - Its [member Basis.y] points up ([constant Vector3.UP]);  
         *  - Its [member Basis.z] points back ([constant Vector3.BACK]).  
         *    
         *  If a [Vector3], an [AABB], a [Plane], a [PackedVector3Array], or another [Transform3D] is transformed (multiplied) by this constant, no transformation occurs.  
         *      
         *  **Note:** In GDScript, this constant is equivalent to creating a [constructor Transform3D] without any arguments. It can be used to make your code clearer, and for consistency with C#.  
         */
        static readonly IDENTITY: Transform3D
        
        /** [Transform3D] with mirroring applied perpendicular to the YZ plane. Its [member basis] is equal to [constant Basis.FLIP_X]. */
        static readonly FLIP_X: Transform3D
        
        /** [Transform3D] with mirroring applied perpendicular to the XZ plane. Its [member basis] is equal to [constant Basis.FLIP_Y]. */
        static readonly FLIP_Y: Transform3D
        
        /** [Transform3D] with mirroring applied perpendicular to the XY plane. Its [member basis] is equal to [constant Basis.FLIP_Z]. */
        static readonly FLIP_Z: Transform3D
        constructor()
        constructor(from: Transform3D)
        constructor(basis: Basis, origin: Vector3)
        constructor(xAxis: Vector3, yAxis: Vector3, zAxis: Vector3, origin: Vector3)
        constructor(from: Projection)
        
        /** Returns the [url=https://en.wikipedia.org/wiki/Invertible_matrix]inverted version of this transform[/url]. See also [method Basis.inverse].  
         *      
         *  **Note:** For this method to return correctly, the transform's [member basis] needs to be  *orthonormal*  (see [method orthonormalized]). That means the basis should only represent a rotation. If it does not, use [method affine_inverse] instead.  
         */
        inverse(): Transform3D
        affineInverse(): Transform3D
        
        /** Returns a copy of this transform with its [member basis] orthonormalized. An orthonormal basis is both  *orthogonal*  (the axes are perpendicular to each other) and  *normalized*  (the axes have a length of `1.0`), which also means it can only represent a rotation. See also [method Basis.orthonormalized]. */
        orthonormalized(): Transform3D
        
        /** Returns a copy of this transform rotated around the given [param axis] by the given [param angle] (in radians).  
         *  The [param axis] must be a normalized vector (see [method Vector3.normalized]). If [param angle] is positive, the basis is rotated counter-clockwise around the axis.  
         *  This method is an optimized version of multiplying the given transform `X` with a corresponding rotation transform `R` from the left, i.e., `R * X`.  
         *  This can be seen as transforming with respect to the global/parent frame.  
         */
        rotated(axis: Vector3, angle: float64): Transform3D
        rotatedLocal(axis: Vector3, angle: float64): Transform3D
        
        /** Returns a copy of this transform scaled by the given [param scale] factor.  
         *  This method is an optimized version of multiplying the given transform `X` with a corresponding scaling transform `S` from the left, i.e., `S * X`.  
         *  This can be seen as transforming with respect to the global/parent frame.  
         */
        scaled(scale: Vector3): Transform3D
        scaledLocal(scale: Vector3): Transform3D
        
        /** Returns a copy of this transform translated by the given [param offset].  
         *  This method is an optimized version of multiplying the given transform `X` with a corresponding translation transform `T` from the left, i.e., `T * X`.  
         *  This can be seen as transforming with respect to the global/parent frame.  
         */
        translated(offset: Vector3): Transform3D
        translatedLocal(offset: Vector3): Transform3D
        lookingAt(target: Vector3, up: Vector3 = Vector3.ZERO, useModelFront: boolean = false): Transform3D
        interpolateWith(xform: Transform3D, weight: float64): Transform3D
        isEqualApprox(xform: Transform3D): boolean
        isFinite(): boolean
        static MULTIPLY(left: Transform3D, right: Transform3D): Transform3D
        static MULTIPLY(left: Transform3D, right: float64): Transform3D
        static MULTIPLY(left: Transform3D, right: Vector3): Vector3
        static MULTIPLY(left: Vector3, right: Transform3D): Vector3
        static MULTIPLY(left: Transform3D, right: Aabb): Aabb
        static MULTIPLY(left: Aabb, right: Transform3D): Aabb
        static MULTIPLY(left: Transform3D, right: Plane): Plane
        static MULTIPLY(left: Plane, right: Transform3D): Plane
        static MULTIPLY(left: Transform3D, right: PackedVector3Array | Vector3[]): PackedVector3Array
        static MULTIPLY(left: PackedVector3Array | Vector3[], right: Transform3D): PackedVector3Array
        static EQUAL(left: Transform3D, right: Transform3D): boolean
        static NOT_EQUAL(left: Transform3D, right: Transform3D): boolean
        get basis(): Basis
        set basis(value: Basis)
        get origin(): Vector3
        set origin(value: Vector3)
    }
    namespace Projection {
        enum Planes {
            PlaneNear = 0,
            PlaneFar = 1,
            PlaneLeft = 2,
            PlaneTop = 3,
            PlaneRight = 4,
            PlaneBottom = 5,
        }
    }
    /** A 4×4 matrix for 3D projective transformations.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_projection.html  
     */
    class Projection {
        /** A [Projection] with no transformation defined. When applied to other data structures, no transformation is performed. */
        static readonly IDENTITY: Projection
        
        /** A [Projection] with all values initialized to 0. When applied to other data structures, they will be zeroed. */
        static readonly ZERO: Projection
        constructor()
        constructor(from: Projection)
        constructor(from: Transform3D)
        constructor(xAxis: Vector4, yAxis: Vector4, zAxis: Vector4, wAxis: Vector4)
        static createDepthCorrection(flipY: boolean): Projection
        static createLightAtlasRect(rect: Rect2): Projection
        static createPerspective(fovy: float64, aspect: float64, zNear: float64, zFar: float64, flipFov: boolean = false): Projection
        static createPerspectiveHmd(fovy: float64, aspect: float64, zNear: float64, zFar: float64, flipFov: boolean, eye: int64, intraocularDist: float64, convergenceDist: float64): Projection
        static createForHmd(eye: int64, aspect: float64, intraocularDist: float64, displayWidth: float64, displayToLens: float64, oversample: float64, zNear: float64, zFar: float64): Projection
        static createOrthogonal(left: float64, right: float64, bottom: float64, top: float64, zNear: float64, zFar: float64): Projection
        static createOrthogonalAspect(size: float64, aspect: float64, zNear: float64, zFar: float64, flipFov: boolean = false): Projection
        static createFrustum(left: float64, right: float64, bottom: float64, top: float64, zNear: float64, zFar: float64): Projection
        static createFrustumAspect(size: float64, aspect: float64, offset: Vector2, zNear: float64, zFar: float64, flipFov: boolean = false): Projection
        static createFitAabb(aabb: Aabb): Projection
        
        /** Returns a scalar value that is the signed factor by which areas are scaled by this matrix. If the sign is negative, the matrix flips the orientation of the area.  
         *  The determinant can be used to calculate the invertibility of a matrix or solve linear systems of equations involving the matrix, among other applications.  
         */
        determinant(): float64
        perspectiveZnearAdjusted(newZnear: float64): Projection
        getProjectionPlane(plane: int64): Plane
        flippedY(): Projection
        jitterOffseted(offset: Vector2): Projection
        static getFovy(fovx: float64, aspect: float64): float64
        getZFar(): float64
        getZNear(): float64
        getAspect(): float64
        getFov(): float64
        isOrthogonal(): boolean
        getViewportHalfExtents(): Vector2
        getFarPlaneHalfExtents(): Vector2
        
        /** Returns a [Projection] that performs the inverse of this [Projection]'s projective transformation. */
        inverse(): Projection
        getPixelsPerMeter(forPixelWidth: int64): int64
        getLodMultiplier(): float64
        static MULTIPLY(left: Projection, right: Projection): Projection
        static MULTIPLY(left: Projection, right: Vector4): Vector4
        static MULTIPLY(left: Vector4, right: Projection): Vector4
        static EQUAL(left: Projection, right: Projection): boolean
        static NOT_EQUAL(left: Projection, right: Projection): boolean
        get x(): Vector4
        set x(value: Vector4)
        get y(): Vector4
        set y(value: Vector4)
        get z(): Vector4
        set z(value: Vector4)
        get w(): Vector4
        set w(value: Vector4)
    }
    /** A color represented in RGBA format.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_color.html  
     */
    class Color {
        /** Alice blue color. */
        static readonly ALICE_BLUE: Color
        
        /** Antique white color. */
        static readonly ANTIQUE_WHITE: Color
        
        /** Aqua color. */
        static readonly AQUA: Color
        
        /** Aquamarine color. */
        static readonly AQUAMARINE: Color
        
        /** Azure color. */
        static readonly AZURE: Color
        
        /** Beige color. */
        static readonly BEIGE: Color
        
        /** Bisque color. */
        static readonly BISQUE: Color
        
        /** Black color. In GDScript, this is the default value of any color. */
        static readonly BLACK: Color
        
        /** Blanched almond color. */
        static readonly BLANCHED_ALMOND: Color
        
        /** Blue color. */
        static readonly BLUE: Color
        
        /** Blue violet color. */
        static readonly BLUE_VIOLET: Color
        
        /** Brown color. */
        static readonly BROWN: Color
        
        /** Burlywood color. */
        static readonly BURLYWOOD: Color
        
        /** Cadet blue color. */
        static readonly CADET_BLUE: Color
        
        /** Chartreuse color. */
        static readonly CHARTREUSE: Color
        
        /** Chocolate color. */
        static readonly CHOCOLATE: Color
        
        /** Coral color. */
        static readonly CORAL: Color
        
        /** Cornflower blue color. */
        static readonly CORNFLOWER_BLUE: Color
        
        /** Cornsilk color. */
        static readonly CORNSILK: Color
        
        /** Crimson color. */
        static readonly CRIMSON: Color
        
        /** Cyan color. */
        static readonly CYAN: Color
        
        /** Dark blue color. */
        static readonly DARK_BLUE: Color
        
        /** Dark cyan color. */
        static readonly DARK_CYAN: Color
        
        /** Dark goldenrod color. */
        static readonly DARK_GOLDENROD: Color
        
        /** Dark gray color. */
        static readonly DARK_GRAY: Color
        
        /** Dark green color. */
        static readonly DARK_GREEN: Color
        
        /** Dark khaki color. */
        static readonly DARK_KHAKI: Color
        
        /** Dark magenta color. */
        static readonly DARK_MAGENTA: Color
        
        /** Dark olive green color. */
        static readonly DARK_OLIVE_GREEN: Color
        
        /** Dark orange color. */
        static readonly DARK_ORANGE: Color
        
        /** Dark orchid color. */
        static readonly DARK_ORCHID: Color
        
        /** Dark red color. */
        static readonly DARK_RED: Color
        
        /** Dark salmon color. */
        static readonly DARK_SALMON: Color
        
        /** Dark sea green color. */
        static readonly DARK_SEA_GREEN: Color
        
        /** Dark slate blue color. */
        static readonly DARK_SLATE_BLUE: Color
        
        /** Dark slate gray color. */
        static readonly DARK_SLATE_GRAY: Color
        
        /** Dark turquoise color. */
        static readonly DARK_TURQUOISE: Color
        
        /** Dark violet color. */
        static readonly DARK_VIOLET: Color
        
        /** Deep pink color. */
        static readonly DEEP_PINK: Color
        
        /** Deep sky blue color. */
        static readonly DEEP_SKY_BLUE: Color
        
        /** Dim gray color. */
        static readonly DIM_GRAY: Color
        
        /** Dodger blue color. */
        static readonly DODGER_BLUE: Color
        
        /** Firebrick color. */
        static readonly FIREBRICK: Color
        
        /** Floral white color. */
        static readonly FLORAL_WHITE: Color
        
        /** Forest green color. */
        static readonly FOREST_GREEN: Color
        
        /** Fuchsia color. */
        static readonly FUCHSIA: Color
        
        /** Gainsboro color. */
        static readonly GAINSBORO: Color
        
        /** Ghost white color. */
        static readonly GHOST_WHITE: Color
        
        /** Gold color. */
        static readonly GOLD: Color
        
        /** Goldenrod color. */
        static readonly GOLDENROD: Color
        
        /** Gray color. */
        static readonly GRAY: Color
        
        /** Green color. */
        static readonly GREEN: Color
        
        /** Green yellow color. */
        static readonly GREEN_YELLOW: Color
        
        /** Honeydew color. */
        static readonly HONEYDEW: Color
        
        /** Hot pink color. */
        static readonly HOT_PINK: Color
        
        /** Indian red color. */
        static readonly INDIAN_RED: Color
        
        /** Indigo color. */
        static readonly INDIGO: Color
        
        /** Ivory color. */
        static readonly IVORY: Color
        
        /** Khaki color. */
        static readonly KHAKI: Color
        
        /** Lavender color. */
        static readonly LAVENDER: Color
        
        /** Lavender blush color. */
        static readonly LAVENDER_BLUSH: Color
        
        /** Lawn green color. */
        static readonly LAWN_GREEN: Color
        
        /** Lemon chiffon color. */
        static readonly LEMON_CHIFFON: Color
        
        /** Light blue color. */
        static readonly LIGHT_BLUE: Color
        
        /** Light coral color. */
        static readonly LIGHT_CORAL: Color
        
        /** Light cyan color. */
        static readonly LIGHT_CYAN: Color
        
        /** Light goldenrod color. */
        static readonly LIGHT_GOLDENROD: Color
        
        /** Light gray color. */
        static readonly LIGHT_GRAY: Color
        
        /** Light green color. */
        static readonly LIGHT_GREEN: Color
        
        /** Light pink color. */
        static readonly LIGHT_PINK: Color
        
        /** Light salmon color. */
        static readonly LIGHT_SALMON: Color
        
        /** Light sea green color. */
        static readonly LIGHT_SEA_GREEN: Color
        
        /** Light sky blue color. */
        static readonly LIGHT_SKY_BLUE: Color
        
        /** Light slate gray color. */
        static readonly LIGHT_SLATE_GRAY: Color
        
        /** Light steel blue color. */
        static readonly LIGHT_STEEL_BLUE: Color
        
        /** Light yellow color. */
        static readonly LIGHT_YELLOW: Color
        
        /** Lime color. */
        static readonly LIME: Color
        
        /** Lime green color. */
        static readonly LIME_GREEN: Color
        
        /** Linen color. */
        static readonly LINEN: Color
        
        /** Magenta color. */
        static readonly MAGENTA: Color
        
        /** Maroon color. */
        static readonly MAROON: Color
        
        /** Medium aquamarine color. */
        static readonly MEDIUM_AQUAMARINE: Color
        
        /** Medium blue color. */
        static readonly MEDIUM_BLUE: Color
        
        /** Medium orchid color. */
        static readonly MEDIUM_ORCHID: Color
        
        /** Medium purple color. */
        static readonly MEDIUM_PURPLE: Color
        
        /** Medium sea green color. */
        static readonly MEDIUM_SEA_GREEN: Color
        
        /** Medium slate blue color. */
        static readonly MEDIUM_SLATE_BLUE: Color
        
        /** Medium spring green color. */
        static readonly MEDIUM_SPRING_GREEN: Color
        
        /** Medium turquoise color. */
        static readonly MEDIUM_TURQUOISE: Color
        
        /** Medium violet red color. */
        static readonly MEDIUM_VIOLET_RED: Color
        
        /** Midnight blue color. */
        static readonly MIDNIGHT_BLUE: Color
        
        /** Mint cream color. */
        static readonly MINT_CREAM: Color
        
        /** Misty rose color. */
        static readonly MISTY_ROSE: Color
        
        /** Moccasin color. */
        static readonly MOCCASIN: Color
        
        /** Navajo white color. */
        static readonly NAVAJO_WHITE: Color
        
        /** Navy blue color. */
        static readonly NAVY_BLUE: Color
        
        /** Old lace color. */
        static readonly OLD_LACE: Color
        
        /** Olive color. */
        static readonly OLIVE: Color
        
        /** Olive drab color. */
        static readonly OLIVE_DRAB: Color
        
        /** Orange color. */
        static readonly ORANGE: Color
        
        /** Orange red color. */
        static readonly ORANGE_RED: Color
        
        /** Orchid color. */
        static readonly ORCHID: Color
        
        /** Pale goldenrod color. */
        static readonly PALE_GOLDENROD: Color
        
        /** Pale green color. */
        static readonly PALE_GREEN: Color
        
        /** Pale turquoise color. */
        static readonly PALE_TURQUOISE: Color
        
        /** Pale violet red color. */
        static readonly PALE_VIOLET_RED: Color
        
        /** Papaya whip color. */
        static readonly PAPAYA_WHIP: Color
        
        /** Peach puff color. */
        static readonly PEACH_PUFF: Color
        
        /** Peru color. */
        static readonly PERU: Color
        
        /** Pink color. */
        static readonly PINK: Color
        
        /** Plum color. */
        static readonly PLUM: Color
        
        /** Powder blue color. */
        static readonly POWDER_BLUE: Color
        
        /** Purple color. */
        static readonly PURPLE: Color
        
        /** Rebecca purple color. */
        static readonly REBECCA_PURPLE: Color
        
        /** Red color. */
        static readonly RED: Color
        
        /** Rosy brown color. */
        static readonly ROSY_BROWN: Color
        
        /** Royal blue color. */
        static readonly ROYAL_BLUE: Color
        
        /** Saddle brown color. */
        static readonly SADDLE_BROWN: Color
        
        /** Salmon color. */
        static readonly SALMON: Color
        
        /** Sandy brown color. */
        static readonly SANDY_BROWN: Color
        
        /** Sea green color. */
        static readonly SEA_GREEN: Color
        
        /** Seashell color. */
        static readonly SEASHELL: Color
        
        /** Sienna color. */
        static readonly SIENNA: Color
        
        /** Silver color. */
        static readonly SILVER: Color
        
        /** Sky blue color. */
        static readonly SKY_BLUE: Color
        
        /** Slate blue color. */
        static readonly SLATE_BLUE: Color
        
        /** Slate gray color. */
        static readonly SLATE_GRAY: Color
        
        /** Snow color. */
        static readonly SNOW: Color
        
        /** Spring green color. */
        static readonly SPRING_GREEN: Color
        
        /** Steel blue color. */
        static readonly STEEL_BLUE: Color
        
        /** Tan color. */
        static readonly TAN: Color
        
        /** Teal color. */
        static readonly TEAL: Color
        
        /** Thistle color. */
        static readonly THISTLE: Color
        
        /** Tomato color. */
        static readonly TOMATO: Color
        
        /** Transparent color (white with zero alpha). */
        static readonly TRANSPARENT: Color
        
        /** Turquoise color. */
        static readonly TURQUOISE: Color
        
        /** Violet color. */
        static readonly VIOLET: Color
        
        /** Web gray color. */
        static readonly WEB_GRAY: Color
        
        /** Web green color. */
        static readonly WEB_GREEN: Color
        
        /** Web maroon color. */
        static readonly WEB_MAROON: Color
        
        /** Web purple color. */
        static readonly WEB_PURPLE: Color
        
        /** Wheat color. */
        static readonly WHEAT: Color
        
        /** White color. */
        static readonly WHITE: Color
        
        /** White smoke color. */
        static readonly WHITE_SMOKE: Color
        
        /** Yellow color. */
        static readonly YELLOW: Color
        
        /** Yellow green color. */
        static readonly YELLOW_GREEN: Color
        constructor()
        constructor(from: Color)
        constructor(from: Color, alpha: float64)
        constructor(r: float64, g: float64, b: float64)
        constructor(r: float64, g: float64, b: float64, a: float64)
        constructor(code: string)
        constructor(code: string, alpha: float64)
        toArgb32(): int64
        toAbgr32(): int64
        toRgba32(): int64
        toArgb64(): int64
        toAbgr64(): int64
        toRgba64(): int64
        toHtml(withAlpha: boolean = true): string
        
        /** Returns a new color with all components clamped between the components of [param min] and [param max], by running [method @GlobalScope.clamp] on each component. */
        clamp(min: Color = new Color(0, 0, 0, 0), max: Color = new Color(1, 1, 1, 1)): Color
        
        /** Returns the color with its [member r], [member g], and [member b] components inverted (`(1 - r, 1 - g, 1 - b, a)`).  
         *    
         */
        inverted(): Color
        
        /** Returns the linear interpolation between this color's components and [param to]'s components. The interpolation factor [param weight] should be between 0.0 and 1.0 (inclusive). See also [method @GlobalScope.lerp].  
         *    
         */
        lerp(to: Color, weight: float64): Color
        
        /** Returns a new color resulting from making this color lighter by the specified [param amount], which should be a ratio from 0.0 to 1.0. See also [method darkened].  
         *    
         */
        lightened(amount: float64): Color
        
        /** Returns a new color resulting from making this color darker by the specified [param amount] (ratio from 0.0 to 1.0). See also [method lightened].  
         *    
         */
        darkened(amount: float64): Color
        
        /** Returns a new color resulting from overlaying this color over the given color. In a painting program, you can imagine it as the [param over] color painted over this color (including alpha).  
         *    
         */
        blend(over: Color): Color
        getLuminance(): float64
        srgbToLinear(): Color
        linearToSrgb(): Color
        isEqualApprox(to: Color): boolean
        
        /** Returns the [Color] associated with the provided [param hex] integer in 32-bit RGBA format (8 bits per channel). This method is the inverse of [method to_rgba32].  
         *  In GDScript and C#, the [int] is best visualized with hexadecimal notation (`"0x"` prefix, making it `"0xRRGGBBAA"`).  
         *    
         *  If you want to use hex notation in a constant expression, use the equivalent constructor instead (i.e. `Color(0xRRGGBBAA)`).  
         */
        static hex(hex: int64): Color
        
        /** Returns the [Color] associated with the provided [param hex] integer in 64-bit RGBA format (16 bits per channel). This method is the inverse of [method to_rgba64].  
         *  In GDScript and C#, the [int] is best visualized with hexadecimal notation (`"0x"` prefix, making it `"0xRRRRGGGGBBBBAAAA"`).  
         */
        static hex64(hex: int64): Color
        
        /** Returns a new color from [param rgba], an HTML hexadecimal color string. [param rgba] is not case-sensitive, and may be prefixed by a hash sign (`#`).  
         *  [param rgba] must be a valid three-digit or six-digit hexadecimal color string, and may contain an alpha channel value. If [param rgba] does not contain an alpha channel value, an alpha channel value of 1.0 is applied. If [param rgba] is invalid, returns an empty color.  
         *    
         */
        static html(rgba: string): Color
        static htmlIsValid(color: string): boolean
        static fromString(str: string, default_: Color): Color
        static fromHsv(h: float64, s: float64, v: float64, alpha: float64 = 1): Color
        static fromOkHsl(h: float64, s: float64, l: float64, alpha: float64 = 1): Color
        static fromRgbe9995(rgbe: int64): Color
        static fromRgba8(r8: int64, g8: int64, b8: int64, a8: int64 = 255): Color
        static ADD(left: Color, right: Color): Color
        static SUBTRACT(left: Color, right: Color): Color
        static MULTIPLY(left: Color, right: Color): Color
        static MULTIPLY(left: Color, right: float64): Color
        static MULTIPLY(left: float64, right: Color): Color
        static DIVIDE(left: Color, right: Color): Color
        static DIVIDE(left: Color, right: float64): Color
        static NEGATE(left: Color): Color
        static EQUAL(left: Color, right: Color): boolean
        static NOT_EQUAL(left: Color, right: Color): boolean
        get r(): float64
        set r(value: float64)
        get g(): float64
        set g(value: float64)
        get b(): float64
        set b(value: float64)
        get a(): float64
        set a(value: float64)
        get r8(): int64
        set r8(value: int64)
        get g8(): int64
        set g8(value: int64)
        get b8(): int64
        set b8(value: int64)
        get a8(): int64
        set a8(value: int64)
        get h(): float64
        set h(value: float64)
        get s(): float64
        set s(value: float64)
        get v(): float64
        set v(value: float64)
        get okHslH(): float64
        set okHslH(value: float64)
        get okHslS(): float64
        set okHslS(value: float64)
        get okHslL(): float64
        set okHslL(value: float64)
    }
    /** A pre-parsed scene tree path.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_nodepath.html  
     */
    class NodePath {
        constructor()
        constructor(from: NodePath | string)
        constructor(from: string)
        isAbsolute(): boolean
        getNameCount(): int64
        getName(idx: int64): StringName
        getSubnameCount(): int64
        
        /** Returns the 32-bit hash value representing the node path's contents.  
         *      
         *  **Note:** Node paths with equal hash values are  *not*  guaranteed to be the same, as a result of hash collisions. Node paths with different hash values are guaranteed to be different.  
         */
        hash(): int64
        getSubname(idx: int64): StringName
        getConcatenatedNames(): StringName
        getConcatenatedSubnames(): StringName
        
        /** Returns the slice of the [NodePath], from [param begin] (inclusive) to [param end] (exclusive), as a new [NodePath].  
         *  The absolute value of [param begin] and [param end] will be clamped to the sum of [method get_name_count] and [method get_subname_count], so the default value for [param end] makes it slice to the end of the [NodePath] by default (i.e. `path.slice(1)` is a shorthand for `path.slice(1, path.get_name_count() + path.get_subname_count())`).  
         *  If either [param begin] or [param end] are negative, they will be relative to the end of the [NodePath] (i.e. `path.slice(0, -2)` is a shorthand for `path.slice(0, path.get_name_count() + path.get_subname_count() - 2)`).  
         */
        slice(begin: int64, end: int64 = 2147483647): NodePath
        getAsPropertyPath(): NodePath
        isEmpty(): boolean
        static EQUAL(left: NodePath | string, right: NodePath | string): boolean
        static NOT_EQUAL(left: NodePath | string, right: NodePath | string): boolean
    }
    class Rid {
        constructor()
        constructor(from: Rid)
        isValid(): boolean
        getId(): int64
        static EQUAL(left: Rid, right: Rid): boolean
        static NOT_EQUAL(left: Rid, right: Rid): boolean
        static LESS(left: Rid, right: Rid): boolean
        static LESS_EQUAL(left: Rid, right: Rid): boolean
        static GREATER(left: Rid, right: Rid): boolean
        static GREATER_EQUAL(left: Rid, right: Rid): boolean
    }
    /** A built-in type representing a method or a standalone function.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_callable.html  
     */
    class Callable<T extends Function = Function> {
        /**
         * Create godot Callable without a bound object.
         */
        static create<F extends Function>(fn: F): Callable<F>
        /**
         * Create godot Callable with a bound object `self`.
         */
        static create<S extends GDObject, F extends (this: S, ...args: any[]) => any>(self: S, fn: F): Callable<F>
        
        asPromise(): Parameters<T> extends [] ? Promise<void> : Parameters<T> extends [infer R] ? Promise<R> : Promise<Parameters<T>>
        constructor()
        constructor(from: Callable)
        constructor(object: GObject, method: StringName)
        
        /** Creates a new [Callable] for the method named [param method] in the specified [param variant]. To represent a method of a built-in [Variant] type, a custom callable is used (see [method is_custom]). If [param variant] is [Object], then a standard callable will be created instead.  
         *      
         *  **Note:** This method is always necessary for the [Dictionary] type, as property syntax is used to access its entries. You may also use this method when [param variant]'s type is not known in advance (for polymorphism).  
         */
        static create(variant: any, method: StringName): Callable
        
        /** Calls the method represented by this [Callable]. Unlike [method call], this method expects all arguments to be contained inside the [param arguments] [Array]. */
        callv(arguments_: GArray): any
        isNull(): boolean
        isCustom(): boolean
        isStandard(): boolean
        isValid(): boolean
        getObject(): GObject
        getObjectId(): int64
        getMethod(): StringName
        getArgumentCount(): int64
        getBoundArgumentsCount(): int64
        getBoundArguments(): GArray
        getUnboundArgumentsCount(): int64
        
        /** Returns the 32-bit hash value of this [Callable]'s object.  
         *      
         *  **Note:** [Callable]s with equal content will always produce identical hash values. However, the reverse is not true. Returning identical hash values does  *not*  imply the callables are equal, because different callables can have identical hash values due to hash collisions. The engine uses a 32-bit hash algorithm for [method hash].  
         */
        hash(): int64
        
        /** Returns a copy of this [Callable] with one or more arguments bound, reading them from an array. When called, the bound arguments are passed  *after*  the arguments supplied by [method call]. See also [method unbind].  
         *      
         *  **Note:** When this method is chained with other similar methods, the order in which the argument list is modified is read from right to left.  
         */
        bindv(arguments_: GArray): Callable
        
        /** Returns a copy of this [Callable] with a number of arguments unbound. In other words, when the new callable is called the last few arguments supplied by the user are ignored, according to [param argcount]. The remaining arguments are passed to the callable. This allows to use the original callable in a context that attempts to pass more arguments than this callable can handle, e.g. a signal with a fixed number of arguments. See also [method bind].  
         *      
         *  **Note:** When this method is chained with other similar methods, the order in which the argument list is modified is read from right to left.  
         *    
         */
        unbind(argcount: int64): Callable
        
        /** Calls the method represented by this [Callable]. Arguments can be passed and should match the method's signature. */
        call: T
        callDeferred(...varargs: any[]): void
        
        /** Perform an RPC (Remote Procedure Call) on all connected peers. This is used for multiplayer and is normally not available, unless the function being called has been marked as  *RPC*  (using [annotation @GDScript.@rpc] or [method Node.rpc_config]). Calling this method on unsupported functions will result in an error. See [method Node.rpc]. */
        rpc(...varargs: any[]): void
        rpcId(peerId: int64, ...varargs: any[]): void
        
        /** Returns a copy of this [Callable] with one or more arguments bound. When called, the bound arguments are passed  *after*  the arguments supplied by [method call]. See also [method unbind].  
         *      
         *  **Note:** When this method is chained with other similar methods, the order in which the argument list is modified is read from right to left.  
         */
        bind<A extends any[]>(...varargs: A): Callable<BindRight<T, A>>
        static EQUAL(left: Callable, right: Callable): boolean
        static NOT_EQUAL(left: Callable, right: Callable): boolean
    }
    /** A built-in type representing a signal of an [Object].  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_signal.html  
     */
    class Signal<T extends (...args: any[]) => void = (...args: any[]) => void> {
        constructor()
        constructor(from: Signal)
        constructor(object: GObject, signal: StringName)
        isNull(): boolean
        getObject(): GObject
        getObjectId(): int64
        getName(): StringName
        
        /** Connects this signal to the specified [param callable]. Optional [param flags] can be also added to configure the connection's behavior (see [enum Object.ConnectFlags] constants). You can provide additional arguments to the connected [param callable] by using [method Callable.bind].  
         *  A signal can only be connected once to the same [Callable]. If the signal is already connected, returns [constant ERR_INVALID_PARAMETER] and pushes an error message, unless the signal is connected with [constant Object.CONNECT_REFERENCE_COUNTED]. To prevent this, use [method is_connected] first to check for existing connections.  
         *    
         */
        connect(callable: Callable<T>, flags: int64 = 0): int64
        
        /** Disconnects this signal from the specified [Callable]. If the connection does not exist, generates an error. Use [method is_connected] to make sure that the connection exists. */
        disconnect(callable: Callable<T>): void
        isConnected(callable: Callable<T>): boolean
        getConnections(): GArray
        hasConnections(): boolean
        
        /** Emits this signal. All [Callable]s connected to this signal will be triggered. This method supports a variable number of arguments, so parameters can be passed as a comma separated list. */
        emit: T
        static EQUAL(left: Signal, right: Signal): boolean
        static NOT_EQUAL(left: Signal, right: Signal): boolean
    }
    class GDictionary<T = Record<any, any>> {
        /** Builder function that returns a GDictionary with properties populated from a source JS object. */
        static create<T>(properties: T extends GDictionary<infer S> ? GDictionaryProxy<S> : GDictionaryProxy<T>): T extends GDictionary<infer S> ? GDictionary<S> : GDictionary<T>
        [Symbol.iterator](): IteratorObject<{ key: any, value: any }>
        /** Returns a Proxy that targets this GDictionary but behaves similar to a regular JavaScript object. Values are exposed as enumerable properties, so Object.keys(), Object.entries() etc. will work. */
        proxy<Write extends boolean = false>(): Write extends true ? GDictionaryProxy<T> : GDictionaryReadProxy<T>
        
        setKeyed<K extends keyof T>(key: K, value: T[K]): void
        getKeyed<K extends keyof T>(key: K): T[K]
        constructor()
        constructor(from: GDictionary)
        constructor(base: GDictionary, keyType: int64, keyClassName: StringName, keyScript: any, valueType: int64, valueClassName: StringName, valueScript: any)
        size(): int64
        isEmpty(): boolean
        clear(): void
        assign(dictionary: T): void
        sort(): void
        merge(dictionary: T, overwrite: boolean = false): void
        merged<U>(dictionary: GDictionary<U>, overwrite: boolean = false): GDictionary<T & U>
        has(key: keyof T): boolean
        hasAll(keys: GArray<keyof T>): boolean
        findKey(value: T[keyof T]): keyof T
        erase(key: keyof T): boolean
        hash(): int64
        keys(): Array<keyof T>
        values(): GArray<T[keyof T]>
        duplicate(deep: boolean = false): GDictionary<T>
        get<K extends keyof T>(key: K, default_: any = <any> {}): T[K]
        getOrAdd<K extends keyof T>(key: K, default_: T[K] = <any> {}): any
        set<K extends keyof T>(key: K, value: T[K]): boolean
        isTyped(): boolean
        isTypedKey(): boolean
        isTypedValue(): boolean
        isSameTyped(dictionary: GDictionary): boolean
        isSameTypedKey(dictionary: GDictionary): boolean
        isSameTypedValue(dictionary: GDictionary): boolean
        getTypedKeyBuiltin(): int64
        getTypedValueBuiltin(): int64
        getTypedKeyClassName(): StringName
        getTypedValueClassName(): StringName
        getTypedKeyScript(): any
        getTypedValueScript(): any
        makeReadOnly(): void
        isReadOnly(): boolean
        recursiveEqual(dictionary: GDictionary, recursionCount: int64): boolean
        static EQUAL(left: GDictionary, right: GDictionary): boolean
        static NOT_EQUAL(left: GDictionary, right: GDictionary): boolean
    }
    class GArray<T = Any> {
        /** Builder function that returns a GArray populated with elements from a JS array. */
        static create<T>(elements: [T] extends [GArray<infer E>] ? Array<E | GProxyValueWrap<E>> : Array<T | GProxyValueWrap<T>>): [T] extends [GArray<infer E>] ? GArray<E> : GArray<T>
        [Symbol.iterator](): IteratorObject<T>
        /** Returns a Proxy that targets this GArray but behaves similar to a JavaScript array. */
        proxy<Write extends boolean = false>(): Write extends true ? GArrayProxy<T> : GArrayReadProxy<T>
        
        setIndexed(index: number, value: T): void
        getIndexed(index: number): T
        constructor()
        constructor(from: GArray)
        constructor(base: GArray, type: int64, className: StringName, script: any)
        constructor(from: PackedByteArray | byte[] | ArrayBuffer)
        constructor(from: PackedInt32Array | int32[])
        constructor(from: PackedInt64Array | int64[])
        constructor(from: PackedFloat32Array | float32[])
        constructor(from: PackedFloat64Array | float64[])
        constructor(from: PackedStringArray | string[])
        constructor(from: PackedVector2Array | Vector2[])
        constructor(from: PackedVector3Array | Vector3[])
        constructor(from: PackedColorArray | Color[])
        constructor(from: PackedVector4Array)
        size(): int64
        isEmpty(): boolean
        clear(): void
        hash(): int64
        assign(array: GArray): void
        get(index: int64): T
        set(index: int64, value: T): void
        pushBack(value: T): void
        pushFront(value: T): void
        append(value: T): void
        appendArray(array: GArray<T>): void
        resize(size: int64): int64
        insert(position: int64, value: T): int64
        removeAt(position: int64): void
        fill(value: T): void
        erase(value: T): void
        front(): T
        back(): T
        pickRandom(): T
        find(what: T, from: int64 = 0): int64
        findCustom(method: Callable, from: int64 = 0): int64
        rfind(what: T, from: int64 = -1): int64
        rfindCustom(method: Callable, from: int64 = -1): int64
        count(value: T): int64
        has(value: T): boolean
        popBack(): T
        popFront(): T
        popAt(position: int64): T
        sort(): void
        sortCustom(func: Callable2<T, T, boolean>): void
        shuffle(): void
        bsearch(value: T, before: boolean = true): int64
        bsearchCustom(value: T, func: Callable2<T, T, boolean>, before: boolean = true): int64
        reverse(): void
        duplicate(deep: boolean = false): GArray<T>
        slice(begin: int64, end: int64 = 2147483647, step: int64 = 1, deep: boolean = false): GArray<T>
        filter(method: Callable1<T, boolean>): GArray<T>
        map<U>(method: Callable1<T, U>): GArray<U>
        reduce(method: Callable, accum: any = <any> {}): any
        any(method: Callable1<T, boolean>): boolean
        all(method: Callable1<T, boolean>): boolean
        max(): T
        min(): T
        isTyped(): boolean
        isSameTyped(array: GArray): boolean
        getTypedBuiltin(): int64
        getTypedClassName(): StringName
        getTypedScript(): any
        makeReadOnly(): void
        isReadOnly(): boolean
        static EQUAL(left: GArray, right: GArray): boolean
        static NOT_EQUAL(left: GArray, right: GArray): boolean
        static LESS(left: GArray, right: GArray): boolean
        static LESS_EQUAL(left: GArray, right: GArray): boolean
        static GREATER(left: GArray, right: GArray): boolean
        static GREATER_EQUAL(left: GArray, right: GArray): boolean
    }
    /** A packed array of bytes.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_packedbytearray.html  
     */
    class PackedByteArray {
        /** [jsb utility method] Converts a PackedByteArray to a JavaScript ArrayBuffer. */
        toArrayBuffer(): ArrayBuffer
        constructor()
        constructor(from: PackedByteArray | byte[] | ArrayBuffer)
        constructor(from: GArray)
        
        /** Returns the byte at the given [param index] in the array. This is the same as using the `[]` operator (`array[index]`). */
        get(index: int64): int64
        
        /** Returns the number of elements in the array. */
        size(): int64
        isEmpty(): boolean
        
        /** Changes the byte at the given index. */
        set(index: int64, value: int64): void
        pushBack(value: int64): boolean
        
        /** Appends an element at the end of the array (alias of [method push_back]). */
        append(value: int64): boolean
        appendArray(array: PackedByteArray | byte[] | ArrayBuffer): void
        removeAt(index: int64): void
        
        /** Inserts a new element at a given position in the array. The position must be valid, or at the end of the array (`idx == size()`). */
        insert(atIndex: int64, value: int64): int64
        
        /** Assigns the given value to all elements in the array. This can typically be used together with [method resize] to create an array with a given size and initialized elements. */
        fill(value: int64): void
        
        /** Sets the size of the array. If the array is grown, reserves elements at the end of the array. If the array is shrunk, truncates the array to the new size. Calling [method resize] once and assigning the new values is faster than adding new elements one by one. */
        resize(newSize: int64): int64
        
        /** Clears the array. This is equivalent to using [method resize] with a size of `0`. */
        clear(): void
        
        /** Returns `true` if the array contains [param value]. */
        has(value: int64): boolean
        
        /** Reverses the order of the elements in the array. */
        reverse(): void
        
        /** Returns the slice of the [PackedByteArray], from [param begin] (inclusive) to [param end] (exclusive), as a new [PackedByteArray].  
         *  The absolute value of [param begin] and [param end] will be clamped to the array size, so the default value for [param end] makes it slice to the size of the array by default (i.e. `arr.slice(1)` is a shorthand for `arr.slice(1, arr.size())`).  
         *  If either [param begin] or [param end] are negative, they will be relative to the end of the array (i.e. `arr.slice(0, -2)` is a shorthand for `arr.slice(0, arr.size() - 2)`).  
         */
        slice(begin: int64, end: int64 = 2147483647): PackedByteArray
        
        /** Sorts the elements of the array in ascending order. */
        sort(): void
        
        /** Finds the index of an existing value (or the insertion index that maintains sorting order, if the value is not yet present in the array) using binary search. Optionally, a [param before] specifier can be passed. If `false`, the returned index comes after all existing entries of the value in the array.  
         *      
         *  **Note:** Calling [method bsearch] on an unsorted array results in unexpected behavior.  
         */
        bsearch(value: int64, before: boolean = true): int64
        
        /** Creates a copy of the array, and returns it. */
        duplicate(): PackedByteArray
        
        /** Searches the array for a value and returns its index or `-1` if not found. Optionally, the initial search index can be passed. */
        find(value: int64, from: int64 = 0): int64
        
        /** Searches the array in reverse order. Optionally, a start search index can be passed. If negative, the start index is considered relative to the end of the array. */
        rfind(value: int64, from: int64 = -1): int64
        
        /** Returns the number of times an element is in the array. */
        count(value: int64): int64
        getStringFromAscii(): string
        getStringFromUtf8(): string
        getStringFromUtf16(): string
        getStringFromUtf32(): string
        getStringFromWchar(): string
        hexEncode(): string
        
        /** Returns a new [PackedByteArray] with the data compressed. Set the compression mode using one of [enum FileAccess.CompressionMode]'s constants. */
        compress(compressionMode: int64 = 0): PackedByteArray
        
        /** Returns a new [PackedByteArray] with the data decompressed. Set [param buffer_size] to the size of the uncompressed data. Set the compression mode using one of [enum FileAccess.CompressionMode]'s constants.  
         *      
         *  **Note:** Decompression is not guaranteed to work with data not compressed by Godot, for example if data compressed with the deflate compression mode lacks a checksum or header.  
         */
        decompress(bufferSize: int64, compressionMode: int64 = 0): PackedByteArray
        decompressDynamic(maxOutputSize: int64, compressionMode: int64 = 0): PackedByteArray
        decodeU8(byteOffset: int64): int64
        decodeS8(byteOffset: int64): int64
        decodeU16(byteOffset: int64): int64
        decodeS16(byteOffset: int64): int64
        decodeU32(byteOffset: int64): int64
        decodeS32(byteOffset: int64): int64
        decodeU64(byteOffset: int64): int64
        decodeS64(byteOffset: int64): int64
        decodeHalf(byteOffset: int64): float64
        decodeFloat(byteOffset: int64): float64
        decodeDouble(byteOffset: int64): float64
        hasEncodedVar(byteOffset: int64, allowObjects: boolean = false): boolean
        decodeVar(byteOffset: int64, allowObjects: boolean = false): any
        decodeVarSize(byteOffset: int64, allowObjects: boolean = false): int64
        toInt32Array(): PackedInt32Array
        toInt64Array(): PackedInt64Array
        toFloat32Array(): PackedFloat32Array
        toFloat64Array(): PackedFloat64Array
        encodeU8(byteOffset: int64, value: int64): void
        encodeS8(byteOffset: int64, value: int64): void
        encodeU16(byteOffset: int64, value: int64): void
        encodeS16(byteOffset: int64, value: int64): void
        encodeU32(byteOffset: int64, value: int64): void
        encodeS32(byteOffset: int64, value: int64): void
        encodeU64(byteOffset: int64, value: int64): void
        encodeS64(byteOffset: int64, value: int64): void
        encodeHalf(byteOffset: int64, value: float64): void
        encodeFloat(byteOffset: int64, value: float64): void
        encodeDouble(byteOffset: int64, value: float64): void
        encodeVar(byteOffset: int64, value: any, allowObjects: boolean = false): int64
        static EQUAL(left: PackedByteArray | byte[] | ArrayBuffer, right: PackedByteArray | byte[] | ArrayBuffer): boolean
        static NOT_EQUAL(left: PackedByteArray | byte[] | ArrayBuffer, right: PackedByteArray | byte[] | ArrayBuffer): boolean
    }
    /** A packed array of 32-bit integers.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_packedint32array.html  
     */
    class PackedInt32Array {
        constructor()
        constructor(from: PackedInt32Array | int32[])
        constructor(from: GArray)
        
        /** Returns the 32-bit integer at the given [param index] in the array. This is the same as using the `[]` operator (`array[index]`). */
        get(index: int64): int64
        
        /** Returns the number of elements in the array. */
        size(): int64
        isEmpty(): boolean
        
        /** Changes the integer at the given index. */
        set(index: int64, value: int64): void
        pushBack(value: int64): boolean
        
        /** Appends an element at the end of the array (alias of [method push_back]). */
        append(value: int64): boolean
        appendArray(array: PackedInt32Array | int32[]): void
        removeAt(index: int64): void
        
        /** Inserts a new integer at a given position in the array. The position must be valid, or at the end of the array (`idx == size()`). */
        insert(atIndex: int64, value: int64): int64
        
        /** Assigns the given value to all elements in the array. This can typically be used together with [method resize] to create an array with a given size and initialized elements. */
        fill(value: int64): void
        
        /** Sets the size of the array. If the array is grown, reserves elements at the end of the array. If the array is shrunk, truncates the array to the new size. Calling [method resize] once and assigning the new values is faster than adding new elements one by one. */
        resize(newSize: int64): int64
        
        /** Clears the array. This is equivalent to using [method resize] with a size of `0`. */
        clear(): void
        
        /** Returns `true` if the array contains [param value]. */
        has(value: int64): boolean
        
        /** Reverses the order of the elements in the array. */
        reverse(): void
        
        /** Returns the slice of the [PackedInt32Array], from [param begin] (inclusive) to [param end] (exclusive), as a new [PackedInt32Array].  
         *  The absolute value of [param begin] and [param end] will be clamped to the array size, so the default value for [param end] makes it slice to the size of the array by default (i.e. `arr.slice(1)` is a shorthand for `arr.slice(1, arr.size())`).  
         *  If either [param begin] or [param end] are negative, they will be relative to the end of the array (i.e. `arr.slice(0, -2)` is a shorthand for `arr.slice(0, arr.size() - 2)`).  
         */
        slice(begin: int64, end: int64 = 2147483647): PackedInt32Array
        toByteArray(): PackedByteArray
        
        /** Sorts the elements of the array in ascending order. */
        sort(): void
        
        /** Finds the index of an existing value (or the insertion index that maintains sorting order, if the value is not yet present in the array) using binary search. Optionally, a [param before] specifier can be passed. If `false`, the returned index comes after all existing entries of the value in the array.  
         *      
         *  **Note:** Calling [method bsearch] on an unsorted array results in unexpected behavior.  
         */
        bsearch(value: int64, before: boolean = true): int64
        
        /** Creates a copy of the array, and returns it. */
        duplicate(): PackedInt32Array
        
        /** Searches the array for a value and returns its index or `-1` if not found. Optionally, the initial search index can be passed. */
        find(value: int64, from: int64 = 0): int64
        
        /** Searches the array in reverse order. Optionally, a start search index can be passed. If negative, the start index is considered relative to the end of the array. */
        rfind(value: int64, from: int64 = -1): int64
        
        /** Returns the number of times an element is in the array. */
        count(value: int64): int64
        static EQUAL(left: PackedInt32Array | int32[], right: PackedInt32Array | int32[]): boolean
        static NOT_EQUAL(left: PackedInt32Array | int32[], right: PackedInt32Array | int32[]): boolean
    }
    /** A packed array of 64-bit integers.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_packedint64array.html  
     */
    class PackedInt64Array {
        constructor()
        constructor(from: PackedInt64Array | int64[])
        constructor(from: GArray)
        
        /** Returns the 64-bit integer at the given [param index] in the array. This is the same as using the `[]` operator (`array[index]`). */
        get(index: int64): int64
        
        /** Returns the number of elements in the array. */
        size(): int64
        isEmpty(): boolean
        
        /** Changes the integer at the given index. */
        set(index: int64, value: int64): void
        pushBack(value: int64): boolean
        
        /** Appends an element at the end of the array (alias of [method push_back]). */
        append(value: int64): boolean
        appendArray(array: PackedInt64Array | int64[]): void
        removeAt(index: int64): void
        
        /** Inserts a new integer at a given position in the array. The position must be valid, or at the end of the array (`idx == size()`). */
        insert(atIndex: int64, value: int64): int64
        
        /** Assigns the given value to all elements in the array. This can typically be used together with [method resize] to create an array with a given size and initialized elements. */
        fill(value: int64): void
        
        /** Sets the size of the array. If the array is grown, reserves elements at the end of the array. If the array is shrunk, truncates the array to the new size. Calling [method resize] once and assigning the new values is faster than adding new elements one by one. */
        resize(newSize: int64): int64
        
        /** Clears the array. This is equivalent to using [method resize] with a size of `0`. */
        clear(): void
        
        /** Returns `true` if the array contains [param value]. */
        has(value: int64): boolean
        
        /** Reverses the order of the elements in the array. */
        reverse(): void
        
        /** Returns the slice of the [PackedInt64Array], from [param begin] (inclusive) to [param end] (exclusive), as a new [PackedInt64Array].  
         *  The absolute value of [param begin] and [param end] will be clamped to the array size, so the default value for [param end] makes it slice to the size of the array by default (i.e. `arr.slice(1)` is a shorthand for `arr.slice(1, arr.size())`).  
         *  If either [param begin] or [param end] are negative, they will be relative to the end of the array (i.e. `arr.slice(0, -2)` is a shorthand for `arr.slice(0, arr.size() - 2)`).  
         */
        slice(begin: int64, end: int64 = 2147483647): PackedInt64Array
        toByteArray(): PackedByteArray
        
        /** Sorts the elements of the array in ascending order. */
        sort(): void
        
        /** Finds the index of an existing value (or the insertion index that maintains sorting order, if the value is not yet present in the array) using binary search. Optionally, a [param before] specifier can be passed. If `false`, the returned index comes after all existing entries of the value in the array.  
         *      
         *  **Note:** Calling [method bsearch] on an unsorted array results in unexpected behavior.  
         */
        bsearch(value: int64, before: boolean = true): int64
        
        /** Creates a copy of the array, and returns it. */
        duplicate(): PackedInt64Array
        
        /** Searches the array for a value and returns its index or `-1` if not found. Optionally, the initial search index can be passed. */
        find(value: int64, from: int64 = 0): int64
        
        /** Searches the array in reverse order. Optionally, a start search index can be passed. If negative, the start index is considered relative to the end of the array. */
        rfind(value: int64, from: int64 = -1): int64
        
        /** Returns the number of times an element is in the array. */
        count(value: int64): int64
        static EQUAL(left: PackedInt64Array | int64[], right: PackedInt64Array | int64[]): boolean
        static NOT_EQUAL(left: PackedInt64Array | int64[], right: PackedInt64Array | int64[]): boolean
    }
    /** A packed array of 32-bit floating-point values.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_packedfloat32array.html  
     */
    class PackedFloat32Array {
        constructor()
        constructor(from: PackedFloat32Array | float32[])
        constructor(from: GArray)
        
        /** Returns the 32-bit float at the given [param index] in the array. This is the same as using the `[]` operator (`array[index]`). */
        get(index: int64): float64
        
        /** Returns the number of elements in the array. */
        size(): int64
        isEmpty(): boolean
        
        /** Changes the float at the given index. */
        set(index: int64, value: float64): void
        pushBack(value: float64): boolean
        
        /** Appends an element at the end of the array (alias of [method push_back]). */
        append(value: float64): boolean
        appendArray(array: PackedFloat32Array | float32[]): void
        removeAt(index: int64): void
        
        /** Inserts a new element at a given position in the array. The position must be valid, or at the end of the array (`idx == size()`). */
        insert(atIndex: int64, value: float64): int64
        
        /** Assigns the given value to all elements in the array. This can typically be used together with [method resize] to create an array with a given size and initialized elements. */
        fill(value: float64): void
        
        /** Sets the size of the array. If the array is grown, reserves elements at the end of the array. If the array is shrunk, truncates the array to the new size. Calling [method resize] once and assigning the new values is faster than adding new elements one by one. */
        resize(newSize: int64): int64
        
        /** Clears the array. This is equivalent to using [method resize] with a size of `0`. */
        clear(): void
        
        /** Returns `true` if the array contains [param value].  
         *      
         *  **Note:** [constant @GDScript.NAN] doesn't behave the same as other numbers. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        has(value: float64): boolean
        
        /** Reverses the order of the elements in the array. */
        reverse(): void
        
        /** Returns the slice of the [PackedFloat32Array], from [param begin] (inclusive) to [param end] (exclusive), as a new [PackedFloat32Array].  
         *  The absolute value of [param begin] and [param end] will be clamped to the array size, so the default value for [param end] makes it slice to the size of the array by default (i.e. `arr.slice(1)` is a shorthand for `arr.slice(1, arr.size())`).  
         *  If either [param begin] or [param end] are negative, they will be relative to the end of the array (i.e. `arr.slice(0, -2)` is a shorthand for `arr.slice(0, arr.size() - 2)`).  
         */
        slice(begin: int64, end: int64 = 2147483647): PackedFloat32Array
        toByteArray(): PackedByteArray
        
        /** Sorts the elements of the array in ascending order.  
         *      
         *  **Note:** [constant @GDScript.NAN] doesn't behave the same as other numbers. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        sort(): void
        
        /** Finds the index of an existing value (or the insertion index that maintains sorting order, if the value is not yet present in the array) using binary search. Optionally, a [param before] specifier can be passed. If `false`, the returned index comes after all existing entries of the value in the array.  
         *      
         *  **Note:** Calling [method bsearch] on an unsorted array results in unexpected behavior.  
         *      
         *  **Note:** [constant @GDScript.NAN] doesn't behave the same as other numbers. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        bsearch(value: float64, before: boolean = true): int64
        
        /** Creates a copy of the array, and returns it. */
        duplicate(): PackedFloat32Array
        
        /** Searches the array for a value and returns its index or `-1` if not found. Optionally, the initial search index can be passed.  
         *      
         *  **Note:** [constant @GDScript.NAN] doesn't behave the same as other numbers. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        find(value: float64, from: int64 = 0): int64
        
        /** Searches the array in reverse order. Optionally, a start search index can be passed. If negative, the start index is considered relative to the end of the array.  
         *      
         *  **Note:** [constant @GDScript.NAN] doesn't behave the same as other numbers. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        rfind(value: float64, from: int64 = -1): int64
        
        /** Returns the number of times an element is in the array.  
         *      
         *  **Note:** [constant @GDScript.NAN] doesn't behave the same as other numbers. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        count(value: float64): int64
        static EQUAL(left: PackedFloat32Array | float32[], right: PackedFloat32Array | float32[]): boolean
        static NOT_EQUAL(left: PackedFloat32Array | float32[], right: PackedFloat32Array | float32[]): boolean
    }
    /** A packed array of 64-bit floating-point values.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_packedfloat64array.html  
     */
    class PackedFloat64Array {
        constructor()
        constructor(from: PackedFloat64Array | float64[])
        constructor(from: GArray)
        
        /** Returns the 64-bit float at the given [param index] in the array. This is the same as using the `[]` operator (`array[index]`). */
        get(index: int64): float64
        
        /** Returns the number of elements in the array. */
        size(): int64
        isEmpty(): boolean
        
        /** Changes the float at the given index. */
        set(index: int64, value: float64): void
        pushBack(value: float64): boolean
        
        /** Appends an element at the end of the array (alias of [method push_back]). */
        append(value: float64): boolean
        appendArray(array: PackedFloat64Array | float64[]): void
        removeAt(index: int64): void
        
        /** Inserts a new element at a given position in the array. The position must be valid, or at the end of the array (`idx == size()`). */
        insert(atIndex: int64, value: float64): int64
        
        /** Assigns the given value to all elements in the array. This can typically be used together with [method resize] to create an array with a given size and initialized elements. */
        fill(value: float64): void
        
        /** Sets the size of the array. If the array is grown, reserves elements at the end of the array. If the array is shrunk, truncates the array to the new size. Calling [method resize] once and assigning the new values is faster than adding new elements one by one. */
        resize(newSize: int64): int64
        
        /** Clears the array. This is equivalent to using [method resize] with a size of `0`. */
        clear(): void
        
        /** Returns `true` if the array contains [param value].  
         *      
         *  **Note:** [constant @GDScript.NAN] doesn't behave the same as other numbers. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        has(value: float64): boolean
        
        /** Reverses the order of the elements in the array. */
        reverse(): void
        
        /** Returns the slice of the [PackedFloat64Array], from [param begin] (inclusive) to [param end] (exclusive), as a new [PackedFloat64Array].  
         *  The absolute value of [param begin] and [param end] will be clamped to the array size, so the default value for [param end] makes it slice to the size of the array by default (i.e. `arr.slice(1)` is a shorthand for `arr.slice(1, arr.size())`).  
         *  If either [param begin] or [param end] are negative, they will be relative to the end of the array (i.e. `arr.slice(0, -2)` is a shorthand for `arr.slice(0, arr.size() - 2)`).  
         */
        slice(begin: int64, end: int64 = 2147483647): PackedFloat64Array
        toByteArray(): PackedByteArray
        
        /** Sorts the elements of the array in ascending order.  
         *      
         *  **Note:** [constant @GDScript.NAN] doesn't behave the same as other numbers. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        sort(): void
        
        /** Finds the index of an existing value (or the insertion index that maintains sorting order, if the value is not yet present in the array) using binary search. Optionally, a [param before] specifier can be passed. If `false`, the returned index comes after all existing entries of the value in the array.  
         *      
         *  **Note:** Calling [method bsearch] on an unsorted array results in unexpected behavior.  
         *      
         *  **Note:** [constant @GDScript.NAN] doesn't behave the same as other numbers. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        bsearch(value: float64, before: boolean = true): int64
        
        /** Creates a copy of the array, and returns it. */
        duplicate(): PackedFloat64Array
        
        /** Searches the array for a value and returns its index or `-1` if not found. Optionally, the initial search index can be passed.  
         *      
         *  **Note:** [constant @GDScript.NAN] doesn't behave the same as other numbers. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        find(value: float64, from: int64 = 0): int64
        
        /** Searches the array in reverse order. Optionally, a start search index can be passed. If negative, the start index is considered relative to the end of the array.  
         *      
         *  **Note:** [constant @GDScript.NAN] doesn't behave the same as other numbers. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        rfind(value: float64, from: int64 = -1): int64
        
        /** Returns the number of times an element is in the array.  
         *      
         *  **Note:** [constant @GDScript.NAN] doesn't behave the same as other numbers. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        count(value: float64): int64
        static EQUAL(left: PackedFloat64Array | float64[], right: PackedFloat64Array | float64[]): boolean
        static NOT_EQUAL(left: PackedFloat64Array | float64[], right: PackedFloat64Array | float64[]): boolean
    }
    /** A packed array of [String]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_packedstringarray.html  
     */
    class PackedStringArray {
        constructor()
        constructor(from: PackedStringArray | string[])
        constructor(from: GArray)
        
        /** Returns the [String] at the given [param index] in the array. This is the same as using the `[]` operator (`array[index]`). */
        get(index: int64): string
        
        /** Returns the number of elements in the array. */
        size(): int64
        isEmpty(): boolean
        
        /** Changes the [String] at the given index. */
        set(index: int64, value: string): void
        pushBack(value: string): boolean
        
        /** Appends an element at the end of the array (alias of [method push_back]). */
        append(value: string): boolean
        appendArray(array: PackedStringArray | string[]): void
        removeAt(index: int64): void
        
        /** Inserts a new element at a given position in the array. The position must be valid, or at the end of the array (`idx == size()`). */
        insert(atIndex: int64, value: string): int64
        
        /** Assigns the given value to all elements in the array. This can typically be used together with [method resize] to create an array with a given size and initialized elements. */
        fill(value: string): void
        
        /** Sets the size of the array. If the array is grown, reserves elements at the end of the array. If the array is shrunk, truncates the array to the new size. Calling [method resize] once and assigning the new values is faster than adding new elements one by one. */
        resize(newSize: int64): int64
        
        /** Clears the array. This is equivalent to using [method resize] with a size of `0`. */
        clear(): void
        
        /** Returns `true` if the array contains [param value]. */
        has(value: string): boolean
        
        /** Reverses the order of the elements in the array. */
        reverse(): void
        
        /** Returns the slice of the [PackedStringArray], from [param begin] (inclusive) to [param end] (exclusive), as a new [PackedStringArray].  
         *  The absolute value of [param begin] and [param end] will be clamped to the array size, so the default value for [param end] makes it slice to the size of the array by default (i.e. `arr.slice(1)` is a shorthand for `arr.slice(1, arr.size())`).  
         *  If either [param begin] or [param end] are negative, they will be relative to the end of the array (i.e. `arr.slice(0, -2)` is a shorthand for `arr.slice(0, arr.size() - 2)`).  
         */
        slice(begin: int64, end: int64 = 2147483647): PackedStringArray
        toByteArray(): PackedByteArray
        
        /** Sorts the elements of the array in ascending order. */
        sort(): void
        
        /** Finds the index of an existing value (or the insertion index that maintains sorting order, if the value is not yet present in the array) using binary search. Optionally, a [param before] specifier can be passed. If `false`, the returned index comes after all existing entries of the value in the array.  
         *      
         *  **Note:** Calling [method bsearch] on an unsorted array results in unexpected behavior.  
         */
        bsearch(value: string, before: boolean = true): int64
        
        /** Creates a copy of the array, and returns it. */
        duplicate(): PackedStringArray
        
        /** Searches the array for a value and returns its index or `-1` if not found. Optionally, the initial search index can be passed. */
        find(value: string, from: int64 = 0): int64
        
        /** Searches the array in reverse order. Optionally, a start search index can be passed. If negative, the start index is considered relative to the end of the array. */
        rfind(value: string, from: int64 = -1): int64
        
        /** Returns the number of times an element is in the array. */
        count(value: string): int64
        static EQUAL(left: PackedStringArray | string[], right: PackedStringArray | string[]): boolean
        static NOT_EQUAL(left: PackedStringArray | string[], right: PackedStringArray | string[]): boolean
    }
    /** A packed array of [Vector2]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_packedvector2array.html  
     */
    class PackedVector2Array {
        constructor()
        constructor(from: PackedVector2Array | Vector2[])
        constructor(from: GArray)
        
        /** Returns the [Vector2] at the given [param index] in the array. This is the same as using the `[]` operator (`array[index]`). */
        get(index: int64): Vector2
        
        /** Returns the number of elements in the array. */
        size(): int64
        isEmpty(): boolean
        
        /** Changes the [Vector2] at the given index. */
        set(index: int64, value: Vector2): void
        pushBack(value: Vector2): boolean
        
        /** Appends an element at the end of the array (alias of [method push_back]). */
        append(value: Vector2): boolean
        appendArray(array: PackedVector2Array | Vector2[]): void
        removeAt(index: int64): void
        
        /** Inserts a new element at a given position in the array. The position must be valid, or at the end of the array (`idx == size()`). */
        insert(atIndex: int64, value: Vector2): int64
        
        /** Assigns the given value to all elements in the array. This can typically be used together with [method resize] to create an array with a given size and initialized elements. */
        fill(value: Vector2): void
        
        /** Sets the size of the array. If the array is grown, reserves elements at the end of the array. If the array is shrunk, truncates the array to the new size. Calling [method resize] once and assigning the new values is faster than adding new elements one by one. */
        resize(newSize: int64): int64
        
        /** Clears the array. This is equivalent to using [method resize] with a size of `0`. */
        clear(): void
        
        /** Returns `true` if the array contains [param value].  
         *      
         *  **Note:** Vectors with [constant @GDScript.NAN] elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        has(value: Vector2): boolean
        
        /** Reverses the order of the elements in the array. */
        reverse(): void
        
        /** Returns the slice of the [PackedVector2Array], from [param begin] (inclusive) to [param end] (exclusive), as a new [PackedVector2Array].  
         *  The absolute value of [param begin] and [param end] will be clamped to the array size, so the default value for [param end] makes it slice to the size of the array by default (i.e. `arr.slice(1)` is a shorthand for `arr.slice(1, arr.size())`).  
         *  If either [param begin] or [param end] are negative, they will be relative to the end of the array (i.e. `arr.slice(0, -2)` is a shorthand for `arr.slice(0, arr.size() - 2)`).  
         */
        slice(begin: int64, end: int64 = 2147483647): PackedVector2Array
        toByteArray(): PackedByteArray
        
        /** Sorts the elements of the array in ascending order.  
         *      
         *  **Note:** Vectors with [constant @GDScript.NAN] elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        sort(): void
        
        /** Finds the index of an existing value (or the insertion index that maintains sorting order, if the value is not yet present in the array) using binary search. Optionally, a [param before] specifier can be passed. If `false`, the returned index comes after all existing entries of the value in the array.  
         *      
         *  **Note:** Calling [method bsearch] on an unsorted array results in unexpected behavior.  
         *      
         *  **Note:** Vectors with [constant @GDScript.NAN] elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        bsearch(value: Vector2, before: boolean = true): int64
        
        /** Creates a copy of the array, and returns it. */
        duplicate(): PackedVector2Array
        
        /** Searches the array for a value and returns its index or `-1` if not found. Optionally, the initial search index can be passed.  
         *      
         *  **Note:** Vectors with [constant @GDScript.NAN] elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        find(value: Vector2, from: int64 = 0): int64
        
        /** Searches the array in reverse order. Optionally, a start search index can be passed. If negative, the start index is considered relative to the end of the array.  
         *      
         *  **Note:** Vectors with [constant @GDScript.NAN] elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        rfind(value: Vector2, from: int64 = -1): int64
        
        /** Returns the number of times an element is in the array.  
         *      
         *  **Note:** Vectors with [constant @GDScript.NAN] elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        count(value: Vector2): int64
        static EQUAL(left: PackedVector2Array | Vector2[], right: PackedVector2Array | Vector2[]): boolean
        static NOT_EQUAL(left: PackedVector2Array | Vector2[], right: PackedVector2Array | Vector2[]): boolean
    }
    /** A packed array of [Vector3]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_packedvector3array.html  
     */
    class PackedVector3Array {
        constructor()
        constructor(from: PackedVector3Array | Vector3[])
        constructor(from: GArray)
        
        /** Returns the [Vector3] at the given [param index] in the array. This is the same as using the `[]` operator (`array[index]`). */
        get(index: int64): Vector3
        
        /** Returns the number of elements in the array. */
        size(): int64
        isEmpty(): boolean
        
        /** Changes the [Vector3] at the given index. */
        set(index: int64, value: Vector3): void
        pushBack(value: Vector3): boolean
        
        /** Appends an element at the end of the array (alias of [method push_back]). */
        append(value: Vector3): boolean
        appendArray(array: PackedVector3Array | Vector3[]): void
        removeAt(index: int64): void
        
        /** Inserts a new element at a given position in the array. The position must be valid, or at the end of the array (`idx == size()`). */
        insert(atIndex: int64, value: Vector3): int64
        
        /** Assigns the given value to all elements in the array. This can typically be used together with [method resize] to create an array with a given size and initialized elements. */
        fill(value: Vector3): void
        
        /** Sets the size of the array. If the array is grown, reserves elements at the end of the array. If the array is shrunk, truncates the array to the new size. Calling [method resize] once and assigning the new values is faster than adding new elements one by one. */
        resize(newSize: int64): int64
        
        /** Clears the array. This is equivalent to using [method resize] with a size of `0`. */
        clear(): void
        
        /** Returns `true` if the array contains [param value].  
         *      
         *  **Note:** Vectors with [constant @GDScript.NAN] elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        has(value: Vector3): boolean
        
        /** Reverses the order of the elements in the array. */
        reverse(): void
        
        /** Returns the slice of the [PackedVector3Array], from [param begin] (inclusive) to [param end] (exclusive), as a new [PackedVector3Array].  
         *  The absolute value of [param begin] and [param end] will be clamped to the array size, so the default value for [param end] makes it slice to the size of the array by default (i.e. `arr.slice(1)` is a shorthand for `arr.slice(1, arr.size())`).  
         *  If either [param begin] or [param end] are negative, they will be relative to the end of the array (i.e. `arr.slice(0, -2)` is a shorthand for `arr.slice(0, arr.size() - 2)`).  
         */
        slice(begin: int64, end: int64 = 2147483647): PackedVector3Array
        toByteArray(): PackedByteArray
        
        /** Sorts the elements of the array in ascending order.  
         *      
         *  **Note:** Vectors with [constant @GDScript.NAN] elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        sort(): void
        
        /** Finds the index of an existing value (or the insertion index that maintains sorting order, if the value is not yet present in the array) using binary search. Optionally, a [param before] specifier can be passed. If `false`, the returned index comes after all existing entries of the value in the array.  
         *      
         *  **Note:** Calling [method bsearch] on an unsorted array results in unexpected behavior.  
         *      
         *  **Note:** Vectors with [constant @GDScript.NAN] elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        bsearch(value: Vector3, before: boolean = true): int64
        
        /** Creates a copy of the array, and returns it. */
        duplicate(): PackedVector3Array
        
        /** Searches the array for a value and returns its index or `-1` if not found. Optionally, the initial search index can be passed.  
         *      
         *  **Note:** Vectors with [constant @GDScript.NAN] elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        find(value: Vector3, from: int64 = 0): int64
        
        /** Searches the array in reverse order. Optionally, a start search index can be passed. If negative, the start index is considered relative to the end of the array.  
         *      
         *  **Note:** Vectors with [constant @GDScript.NAN] elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        rfind(value: Vector3, from: int64 = -1): int64
        
        /** Returns the number of times an element is in the array.  
         *      
         *  **Note:** Vectors with [constant @GDScript.NAN] elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        count(value: Vector3): int64
        static EQUAL(left: PackedVector3Array | Vector3[], right: PackedVector3Array | Vector3[]): boolean
        static NOT_EQUAL(left: PackedVector3Array | Vector3[], right: PackedVector3Array | Vector3[]): boolean
    }
    /** A packed array of [Vector4]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_packedvector4array.html  
     */
    class PackedVector4Array {
        constructor()
        constructor(from: PackedVector4Array)
        constructor(from: GArray)
        
        /** Returns the [Vector4] at the given [param index] in the array. This is the same as using the `[]` operator (`array[index]`). */
        get(index: int64): Vector4
        
        /** Returns the number of elements in the array. */
        size(): int64
        isEmpty(): boolean
        
        /** Changes the [Vector4] at the given index. */
        set(index: int64, value: Vector4): void
        pushBack(value: Vector4): boolean
        
        /** Appends an element at the end of the array (alias of [method push_back]). */
        append(value: Vector4): boolean
        appendArray(array: PackedVector4Array): void
        removeAt(index: int64): void
        
        /** Inserts a new element at a given position in the array. The position must be valid, or at the end of the array (`idx == size()`). */
        insert(atIndex: int64, value: Vector4): int64
        
        /** Assigns the given value to all elements in the array. This can typically be used together with [method resize] to create an array with a given size and initialized elements. */
        fill(value: Vector4): void
        
        /** Sets the size of the array. If the array is grown, reserves elements at the end of the array. If the array is shrunk, truncates the array to the new size. */
        resize(newSize: int64): int64
        
        /** Clears the array. This is equivalent to using [method resize] with a size of `0`. */
        clear(): void
        
        /** Returns `true` if the array contains [param value].  
         *      
         *  **Note:** Vectors with [constant @GDScript.NAN] elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        has(value: Vector4): boolean
        
        /** Reverses the order of the elements in the array. */
        reverse(): void
        
        /** Returns the slice of the [PackedVector4Array], from [param begin] (inclusive) to [param end] (exclusive), as a new [PackedVector4Array].  
         *  The absolute value of [param begin] and [param end] will be clamped to the array size, so the default value for [param end] makes it slice to the size of the array by default (i.e. `arr.slice(1)` is a shorthand for `arr.slice(1, arr.size())`).  
         *  If either [param begin] or [param end] are negative, they will be relative to the end of the array (i.e. `arr.slice(0, -2)` is a shorthand for `arr.slice(0, arr.size() - 2)`).  
         */
        slice(begin: int64, end: int64 = 2147483647): PackedVector4Array
        toByteArray(): PackedByteArray
        
        /** Sorts the elements of the array in ascending order.  
         *      
         *  **Note:** Vectors with [constant @GDScript.NAN] elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        sort(): void
        
        /** Finds the index of an existing value (or the insertion index that maintains sorting order, if the value is not yet present in the array) using binary search. Optionally, a [param before] specifier can be passed. If `false`, the returned index comes after all existing entries of the value in the array.  
         *      
         *  **Note:** Calling [method bsearch] on an unsorted array results in unexpected behavior.  
         *      
         *  **Note:** Vectors with [constant @GDScript.NAN] elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        bsearch(value: Vector4, before: boolean = true): int64
        
        /** Creates a copy of the array, and returns it. */
        duplicate(): PackedVector4Array
        
        /** Searches the array for a value and returns its index or `-1` if not found. Optionally, the initial search index can be passed.  
         *      
         *  **Note:** Vectors with [constant @GDScript.NAN] elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        find(value: Vector4, from: int64 = 0): int64
        
        /** Searches the array in reverse order. Optionally, a start search index can be passed. If negative, the start index is considered relative to the end of the array.  
         *      
         *  **Note:** Vectors with [constant @GDScript.NAN] elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        rfind(value: Vector4, from: int64 = -1): int64
        
        /** Returns the number of times an element is in the array.  
         *      
         *  **Note:** Vectors with [constant @GDScript.NAN] elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        count(value: Vector4): int64
        static EQUAL(left: PackedVector4Array, right: PackedVector4Array): boolean
        static NOT_EQUAL(left: PackedVector4Array, right: PackedVector4Array): boolean
    }
    /** A packed array of [Color]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/latest/classes/class_packedcolorarray.html  
     */
    class PackedColorArray {
        constructor()
        constructor(from: PackedColorArray | Color[])
        constructor(from: GArray)
        
        /** Returns the [Color] at the given [param index] in the array. This is the same as using the `[]` operator (`array[index]`). */
        get(index: int64): Color
        
        /** Returns the number of elements in the array. */
        size(): int64
        isEmpty(): boolean
        
        /** Changes the [Color] at the given index. */
        set(index: int64, value: Color): void
        pushBack(value: Color): boolean
        
        /** Appends an element at the end of the array (alias of [method push_back]). */
        append(value: Color): boolean
        appendArray(array: PackedColorArray | Color[]): void
        removeAt(index: int64): void
        
        /** Inserts a new element at a given position in the array. The position must be valid, or at the end of the array (`idx == size()`). */
        insert(atIndex: int64, value: Color): int64
        
        /** Assigns the given value to all elements in the array. This can typically be used together with [method resize] to create an array with a given size and initialized elements. */
        fill(value: Color): void
        
        /** Sets the size of the array. If the array is grown, reserves elements at the end of the array. If the array is shrunk, truncates the array to the new size. Calling [method resize] once and assigning the new values is faster than adding new elements one by one. */
        resize(newSize: int64): int64
        
        /** Clears the array. This is equivalent to using [method resize] with a size of `0`. */
        clear(): void
        
        /** Returns `true` if the array contains [param value]. */
        has(value: Color): boolean
        
        /** Reverses the order of the elements in the array. */
        reverse(): void
        
        /** Returns the slice of the [PackedColorArray], from [param begin] (inclusive) to [param end] (exclusive), as a new [PackedColorArray].  
         *  The absolute value of [param begin] and [param end] will be clamped to the array size, so the default value for [param end] makes it slice to the size of the array by default (i.e. `arr.slice(1)` is a shorthand for `arr.slice(1, arr.size())`).  
         *  If either [param begin] or [param end] are negative, they will be relative to the end of the array (i.e. `arr.slice(0, -2)` is a shorthand for `arr.slice(0, arr.size() - 2)`).  
         */
        slice(begin: int64, end: int64 = 2147483647): PackedColorArray
        toByteArray(): PackedByteArray
        
        /** Sorts the elements of the array in ascending order. */
        sort(): void
        
        /** Finds the index of an existing value (or the insertion index that maintains sorting order, if the value is not yet present in the array) using binary search. Optionally, a [param before] specifier can be passed. If `false`, the returned index comes after all existing entries of the value in the array.  
         *      
         *  **Note:** Calling [method bsearch] on an unsorted array results in unexpected behavior.  
         */
        bsearch(value: Color, before: boolean = true): int64
        
        /** Creates a copy of the array, and returns it. */
        duplicate(): PackedColorArray
        
        /** Searches the array for a value and returns its index or `-1` if not found. Optionally, the initial search index can be passed. */
        find(value: Color, from: int64 = 0): int64
        
        /** Searches the array in reverse order. Optionally, a start search index can be passed. If negative, the start index is considered relative to the end of the array. */
        rfind(value: Color, from: int64 = -1): int64
        
        /** Returns the number of times an element is in the array. */
        count(value: Color): int64
        static EQUAL(left: PackedColorArray | Color[], right: PackedColorArray | Color[]): boolean
        static NOT_EQUAL(left: PackedColorArray | Color[], right: PackedColorArray | Color[]): boolean
    }
    enum Side {
        SideLeft = 0,
        SideTop = 1,
        SideRight = 2,
        SideBottom = 3,
    }
    enum Corner {
        CornerTopLeft = 0,
        CornerTopRight = 1,
        CornerBottomRight = 2,
        CornerBottomLeft = 3,
    }
    enum Orientation {
        Vertical = 1,
        Horizontal = 0,
    }
    enum ClockDirection {
        Clockwise = 0,
        Counterclockwise = 1,
    }
    enum HorizontalAlignment {
        HorizontalAlignmentLeft = 0,
        HorizontalAlignmentCenter = 1,
        HorizontalAlignmentRight = 2,
        HorizontalAlignmentFill = 3,
    }
    enum VerticalAlignment {
        VerticalAlignmentTop = 0,
        VerticalAlignmentCenter = 1,
        VerticalAlignmentBottom = 2,
        VerticalAlignmentFill = 3,
    }
    enum InlineAlignment {
        InlineAlignmentTopTo = 0,
        InlineAlignmentCenterTo = 1,
        InlineAlignmentBaselineTo = 3,
        InlineAlignmentBottomTo = 2,
        InlineAlignmentToTop = 0,
        InlineAlignmentToCenter = 4,
        InlineAlignmentToBaseline = 8,
        InlineAlignmentToBottom = 12,
        InlineAlignmentTop = 0,
        InlineAlignmentCenter = 5,
        InlineAlignmentBottom = 14,
        InlineAlignmentImageMask = 3,
        InlineAlignmentTextMask = 12,
    }
    enum EulerOrder {
        EulerOrderXyz = 0,
        EulerOrderXzy = 1,
        EulerOrderYxz = 2,
        EulerOrderYzx = 3,
        EulerOrderZxy = 4,
        EulerOrderZyx = 5,
    }
    enum Key {
        KeyNone = 0,
        KeySpecial = 4194304,
        KeyEscape = 4194305,
        KeyTab = 4194306,
        KeyBacktab = 4194307,
        KeyBackspace = 4194308,
        KeyEnter = 4194309,
        KeyKpEnter = 4194310,
        KeyInsert = 4194311,
        KeyDelete = 4194312,
        KeyPause = 4194313,
        KeyPrint = 4194314,
        KeySysreq = 4194315,
        KeyClear = 4194316,
        KeyHome = 4194317,
        KeyEnd = 4194318,
        KeyLeft = 4194319,
        KeyUp = 4194320,
        KeyRight = 4194321,
        KeyDown = 4194322,
        KeyPageup = 4194323,
        KeyPagedown = 4194324,
        KeyShift = 4194325,
        KeyCtrl = 4194326,
        KeyMeta = 4194327,
        KeyAlt = 4194328,
        KeyCapslock = 4194329,
        KeyNumlock = 4194330,
        KeyScrolllock = 4194331,
        KeyF1 = 4194332,
        KeyF2 = 4194333,
        KeyF3 = 4194334,
        KeyF4 = 4194335,
        KeyF5 = 4194336,
        KeyF6 = 4194337,
        KeyF7 = 4194338,
        KeyF8 = 4194339,
        KeyF9 = 4194340,
        KeyF10 = 4194341,
        KeyF11 = 4194342,
        KeyF12 = 4194343,
        KeyF13 = 4194344,
        KeyF14 = 4194345,
        KeyF15 = 4194346,
        KeyF16 = 4194347,
        KeyF17 = 4194348,
        KeyF18 = 4194349,
        KeyF19 = 4194350,
        KeyF20 = 4194351,
        KeyF21 = 4194352,
        KeyF22 = 4194353,
        KeyF23 = 4194354,
        KeyF24 = 4194355,
        KeyF25 = 4194356,
        KeyF26 = 4194357,
        KeyF27 = 4194358,
        KeyF28 = 4194359,
        KeyF29 = 4194360,
        KeyF30 = 4194361,
        KeyF31 = 4194362,
        KeyF32 = 4194363,
        KeyF33 = 4194364,
        KeyF34 = 4194365,
        KeyF35 = 4194366,
        KeyKpMultiply = 4194433,
        KeyKpDivide = 4194434,
        KeyKpSubtract = 4194435,
        KeyKpPeriod = 4194436,
        KeyKpAdd = 4194437,
        KeyKp0 = 4194438,
        KeyKp1 = 4194439,
        KeyKp2 = 4194440,
        KeyKp3 = 4194441,
        KeyKp4 = 4194442,
        KeyKp5 = 4194443,
        KeyKp6 = 4194444,
        KeyKp7 = 4194445,
        KeyKp8 = 4194446,
        KeyKp9 = 4194447,
        KeyMenu = 4194370,
        KeyHyper = 4194371,
        KeyHelp = 4194373,
        KeyBack = 4194376,
        KeyForward = 4194377,
        KeyStop = 4194378,
        KeyRefresh = 4194379,
        KeyVolumedown = 4194380,
        KeyVolumemute = 4194381,
        KeyVolumeup = 4194382,
        KeyMediaplay = 4194388,
        KeyMediastop = 4194389,
        KeyMediaprevious = 4194390,
        KeyMedianext = 4194391,
        KeyMediarecord = 4194392,
        KeyHomepage = 4194393,
        KeyFavorites = 4194394,
        KeySearch = 4194395,
        KeyStandby = 4194396,
        KeyOpenurl = 4194397,
        KeyLaunchmail = 4194398,
        KeyLaunchmedia = 4194399,
        KeyLaunch0 = 4194400,
        KeyLaunch1 = 4194401,
        KeyLaunch2 = 4194402,
        KeyLaunch3 = 4194403,
        KeyLaunch4 = 4194404,
        KeyLaunch5 = 4194405,
        KeyLaunch6 = 4194406,
        KeyLaunch7 = 4194407,
        KeyLaunch8 = 4194408,
        KeyLaunch9 = 4194409,
        KeyLauncha = 4194410,
        KeyLaunchb = 4194411,
        KeyLaunchc = 4194412,
        KeyLaunchd = 4194413,
        KeyLaunche = 4194414,
        KeyLaunchf = 4194415,
        KeyGlobe = 4194416,
        KeyKeyboard = 4194417,
        KeyJisEisu = 4194418,
        KeyJisKana = 4194419,
        KeyUnknown = 8388607,
        KeySpace = 32,
        KeyExclam = 33,
        KeyQuotedbl = 34,
        KeyNumbersign = 35,
        KeyDollar = 36,
        KeyPercent = 37,
        KeyAmpersand = 38,
        KeyApostrophe = 39,
        KeyParenleft = 40,
        KeyParenright = 41,
        KeyAsterisk = 42,
        KeyPlus = 43,
        KeyComma = 44,
        KeyMinus = 45,
        KeyPeriod = 46,
        KeySlash = 47,
        Key0 = 48,
        Key1 = 49,
        Key2 = 50,
        Key3 = 51,
        Key4 = 52,
        Key5 = 53,
        Key6 = 54,
        Key7 = 55,
        Key8 = 56,
        Key9 = 57,
        KeyColon = 58,
        KeySemicolon = 59,
        KeyLess = 60,
        KeyEqual = 61,
        KeyGreater = 62,
        KeyQuestion = 63,
        KeyAt = 64,
        KeyA = 65,
        KeyB = 66,
        KeyC = 67,
        KeyD = 68,
        KeyE = 69,
        KeyF = 70,
        KeyG = 71,
        KeyH = 72,
        KeyI = 73,
        KeyJ = 74,
        KeyK = 75,
        KeyL = 76,
        KeyM = 77,
        KeyN = 78,
        KeyO = 79,
        KeyP = 80,
        KeyQ = 81,
        KeyR = 82,
        KeyS = 83,
        KeyT = 84,
        KeyU = 85,
        KeyV = 86,
        KeyW = 87,
        KeyX = 88,
        KeyY = 89,
        KeyZ = 90,
        KeyBracketleft = 91,
        KeyBackslash = 92,
        KeyBracketright = 93,
        KeyAsciicircum = 94,
        KeyUnderscore = 95,
        KeyQuoteleft = 96,
        KeyBraceleft = 123,
        KeyBar = 124,
        KeyBraceright = 125,
        KeyAsciitilde = 126,
        KeyYen = 165,
        KeySection = 167,
    }
    enum KeyModifierMask {
        KeyCodeMask = 8388607,
        KeyModifierMask = 2130706432,
        KeyMaskCmdOrCtrl = 16777216,
        KeyMaskShift = 33554432,
        KeyMaskAlt = 67108864,
        KeyMaskMeta = 134217728,
        KeyMaskCtrl = 268435456,
        KeyMaskKpad = 536870912,
        KeyMaskGroupSwitch = 1073741824,
    }
    enum KeyLocation {
        KeyLocationUnspecified = 0,
        KeyLocationLeft = 1,
        KeyLocationRight = 2,
    }
    enum MouseButton {
        MouseButtonNone = 0,
        MouseButtonLeft = 1,
        MouseButtonRight = 2,
        MouseButtonMiddle = 3,
        MouseButtonWheelUp = 4,
        MouseButtonWheelDown = 5,
        MouseButtonWheelLeft = 6,
        MouseButtonWheelRight = 7,
        MouseButtonXbutton1 = 8,
        MouseButtonXbutton2 = 9,
    }
    enum MouseButtonMask {
        MouseButtonMaskLeft = 1,
        MouseButtonMaskRight = 2,
        MouseButtonMaskMiddle = 4,
        MouseButtonMaskMbXbutton1 = 128,
        MouseButtonMaskMbXbutton2 = 256,
    }
    enum JoyButton {
        JoyButtonInvalid = -1,
        JoyButtonA = 0,
        JoyButtonB = 1,
        JoyButtonX = 2,
        JoyButtonY = 3,
        JoyButtonBack = 4,
        JoyButtonGuide = 5,
        JoyButtonStart = 6,
        JoyButtonLeftStick = 7,
        JoyButtonRightStick = 8,
        JoyButtonLeftShoulder = 9,
        JoyButtonRightShoulder = 10,
        JoyButtonDpadUp = 11,
        JoyButtonDpadDown = 12,
        JoyButtonDpadLeft = 13,
        JoyButtonDpadRight = 14,
        JoyButtonMisc1 = 15,
        JoyButtonPaddle1 = 16,
        JoyButtonPaddle2 = 17,
        JoyButtonPaddle3 = 18,
        JoyButtonPaddle4 = 19,
        JoyButtonTouchpad = 20,
        JoyButtonSdlMax = 21,
        JoyButtonMax = 128,
    }
    enum JoyAxis {
        JoyAxisInvalid = -1,
        JoyAxisLeftX = 0,
        JoyAxisLeftY = 1,
        JoyAxisRightX = 2,
        JoyAxisRightY = 3,
        JoyAxisTriggerLeft = 4,
        JoyAxisTriggerRight = 5,
        JoyAxisSdlMax = 6,
        JoyAxisMax = 10,
    }
    enum MidiMessage {
        MidiMessageNone = 0,
        MidiMessageNoteOff = 8,
        MidiMessageNoteOn = 9,
        MidiMessageAftertouch = 10,
        MidiMessageControlChange = 11,
        MidiMessageProgramChange = 12,
        MidiMessageChannelPressure = 13,
        MidiMessagePitchBend = 14,
        MidiMessageSystemExclusive = 240,
        MidiMessageQuarterFrame = 241,
        MidiMessageSongPositionPointer = 242,
        MidiMessageSongSelect = 243,
        MidiMessageTuneRequest = 246,
        MidiMessageTimingClock = 248,
        MidiMessageStart = 250,
        MidiMessageContinue = 251,
        MidiMessageStop = 252,
        MidiMessageActiveSensing = 254,
        MidiMessageSystemReset = 255,
    }
    enum GError {
        Ok = 0,
        Failed = 1,
        ErrUnavailable = 2,
        ErrUnconfigured = 3,
        ErrUnauthorized = 4,
        ErrParameterRangeError = 5,
        ErrOutOfMemory = 6,
        ErrFileNotFound = 7,
        ErrFileBadDrive = 8,
        ErrFileBadPath = 9,
        ErrFileNoPermission = 10,
        ErrFileAlreadyInUse = 11,
        ErrFileCantOpen = 12,
        ErrFileCantWrite = 13,
        ErrFileCantRead = 14,
        ErrFileUnrecognized = 15,
        ErrFileCorrupt = 16,
        ErrFileMissingDependencies = 17,
        ErrFileEof = 18,
        ErrCantOpen = 19,
        ErrCantCreate = 20,
        ErrQueryFailed = 21,
        ErrAlreadyInUse = 22,
        ErrLocked = 23,
        ErrTimeout = 24,
        ErrCantConnect = 25,
        ErrCantResolve = 26,
        ErrConnectionError = 27,
        ErrCantAcquireResource = 28,
        ErrCantFork = 29,
        ErrInvalidData = 30,
        ErrInvalidParameter = 31,
        ErrAlreadyExists = 32,
        ErrDoesNotExist = 33,
        ErrDatabaseCantRead = 34,
        ErrDatabaseCantWrite = 35,
        ErrCompilationFailed = 36,
        ErrMethodNotFound = 37,
        ErrLinkFailed = 38,
        ErrScriptFailed = 39,
        ErrCyclicLink = 40,
        ErrInvalidDeclaration = 41,
        ErrDuplicateSymbol = 42,
        ErrParseError = 43,
        ErrBusy = 44,
        ErrSkip = 45,
        ErrHelp = 46,
        ErrBug = 47,
        ErrPrinterOnFire = 48,
    }
    enum PropertyHint {
        PropertyHintNone = 0,
        PropertyHintRange = 1,
        PropertyHintEnum = 2,
        PropertyHintEnumSuggestion = 3,
        PropertyHintExpEasing = 4,
        PropertyHintLink = 5,
        PropertyHintFlags = 6,
        PropertyHintLayers2DRender = 7,
        PropertyHintLayers2DPhysics = 8,
        PropertyHintLayers2DNavigation = 9,
        PropertyHintLayers3DRender = 10,
        PropertyHintLayers3DPhysics = 11,
        PropertyHintLayers3DNavigation = 12,
        PropertyHintLayersAvoidance = 37,
        PropertyHintFile = 13,
        PropertyHintDir = 14,
        PropertyHintGlobalFile = 15,
        PropertyHintGlobalDir = 16,
        PropertyHintResourceType = 17,
        PropertyHintMultilineText = 18,
        PropertyHintExpression = 19,
        PropertyHintPlaceholderText = 20,
        PropertyHintColorNoAlpha = 21,
        PropertyHintObjectId = 22,
        PropertyHintTypeString = 23,
        PropertyHintNodePathToEditedNode = 24,
        PropertyHintObjectTooBig = 25,
        PropertyHintNodePathValidTypes = 26,
        PropertyHintSaveFile = 27,
        PropertyHintGlobalSaveFile = 28,
        PropertyHintIntIsObjectid = 29,
        PropertyHintIntIsPointer = 30,
        PropertyHintArrayType = 31,
        PropertyHintDictionaryType = 38,
        PropertyHintLocaleId = 32,
        PropertyHintLocalizableString = 33,
        PropertyHintNodeType = 34,
        PropertyHintHideQuaternionEdit = 35,
        PropertyHintPassword = 36,
        PropertyHintToolButton = 39,
        PropertyHintOneshot = 40,
        PropertyHintMax = 42,
    }
    enum PropertyUsageFlags {
        PropertyUsageNone = 0,
        PropertyUsageStorage = 2,
        PropertyUsageEditor = 4,
        PropertyUsageInternal = 8,
        PropertyUsageCheckable = 16,
        PropertyUsageChecked = 32,
        PropertyUsageGroup = 64,
        PropertyUsageCategory = 128,
        PropertyUsageSubgroup = 256,
        PropertyUsageClassIsBitfield = 512,
        PropertyUsageNoInstanceState = 1024,
        PropertyUsageRestartIfChanged = 2048,
        PropertyUsageScriptVariable = 4096,
        PropertyUsageStoreIfNull = 8192,
        PropertyUsageUpdateAllIfModified = 16384,
        PropertyUsageScriptDefaultValue = 32768,
        PropertyUsageClassIsEnum = 65536,
        PropertyUsageNilIsVariant = 131072,
        PropertyUsageArray = 262144,
        PropertyUsageAlwaysDuplicate = 524288,
        PropertyUsageNeverDuplicate = 1048576,
        PropertyUsageHighEndGfx = 2097152,
        PropertyUsageNodePathFromSceneRoot = 4194304,
        PropertyUsageResourceNotPersistent = 8388608,
        PropertyUsageKeyingIncrements = 16777216,
        PropertyUsageDeferredSetResource = 33554432,
        PropertyUsageEditorInstantiateObject = 67108864,
        PropertyUsageEditorBasicSetting = 134217728,
        PropertyUsageReadOnly = 268435456,
        PropertyUsageSecret = 536870912,
        PropertyUsageDefault = 6,
        PropertyUsageNoEditor = 2,
    }
    enum MethodFlags {
        MethodFlagNormal = 1,
        MethodFlagEditor = 2,
        MethodFlagConst = 4,
        MethodFlagVirtual = 8,
        MethodFlagVararg = 16,
        MethodFlagStatic = 32,
        MethodFlagObjectCore = 64,
        MethodFlagsDefault = 1,
    }
    namespace Variant {
        enum Type {
            TypeNil = 0,
            TypeBool = 1,
            TypeInt = 2,
            TypeFloat = 3,
            TypeString = 4,
            TypeVector2 = 5,
            TypeVector2I = 6,
            TypeRect2 = 7,
            TypeRect2I = 8,
            TypeVector3 = 9,
            TypeVector3I = 10,
            TypeTransform2D = 11,
            TypeVector4 = 12,
            TypeVector4I = 13,
            TypePlane = 14,
            TypeQuaternion = 15,
            TypeAabb = 16,
            TypeBasis = 17,
            TypeTransform3D = 18,
            TypeProjection = 19,
            TypeColor = 20,
            TypeStringName = 21,
            TypeNodePath = 22,
            TypeRid = 23,
            TypeObject = 24,
            TypeCallable = 25,
            TypeSignal = 26,
            TypeDictionary = 27,
            TypeArray = 28,
            TypePackedByteArray = 29,
            TypePackedInt32Array = 30,
            TypePackedInt64Array = 31,
            TypePackedFloat32Array = 32,
            TypePackedFloat64Array = 33,
            TypePackedStringArray = 34,
            TypePackedVector2Array = 35,
            TypePackedVector3Array = 36,
            TypePackedColorArray = 37,
            TypePackedVector4Array = 38,
            TypeMax = 39,
        }
    }
    namespace Variant {
        enum Operator {
            OpEqual = 0,
            OpNotEqual = 1,
            OpLess = 2,
            OpLessEqual = 3,
            OpGreater = 4,
            OpGreaterEqual = 5,
            OpAdd = 6,
            OpSubtract = 7,
            OpMultiply = 8,
            OpDivide = 9,
            OpNegate = 10,
            OpPositive = 11,
            OpModule = 12,
            OpPower = 13,
            OpShiftLeft = 14,
            OpShiftRight = 15,
            OpBitAnd = 16,
            OpBitOr = 17,
            OpBitXor = 18,
            OpBitNegate = 19,
            OpAnd = 20,
            OpOr = 21,
            OpXor = 22,
            OpNot = 23,
            OpIn = 24,
            OpMax = 25,
        }
    }
    
    /** Returns the sine of angle [param angle_rad] in radians.  
     *    
     */
    static function sin(angleRad: float64): float64
    
    /** Returns the cosine of angle [param angle_rad] in radians.  
     *    
     */
    static function cos(angleRad: float64): float64
    
    /** Returns the tangent of angle [param angle_rad] in radians.  
     *    
     */
    static function tan(angleRad: float64): float64
    
    /** Returns the hyperbolic sine of [param x].  
     *    
     */
    static function sinh(x: float64): float64
    
    /** Returns the hyperbolic cosine of [param x] in radians.  
     *    
     */
    static function cosh(x: float64): float64
    
    /** Returns the hyperbolic tangent of [param x].  
     *    
     */
    static function tanh(x: float64): float64
    
    /** Returns the arc sine of [param x] in radians. Use to get the angle of sine [param x]. [param x] will be clamped between `-1.0` and `1.0` (inclusive), in order to prevent [method asin] from returning [constant @GDScript.NAN].  
     *    
     */
    static function asin(x: float64): float64
    
    /** Returns the arc cosine of [param x] in radians. Use to get the angle of cosine [param x]. [param x] will be clamped between `-1.0` and `1.0` (inclusive), in order to prevent [method acos] from returning [constant @GDScript.NAN].  
     *    
     */
    static function acos(x: float64): float64
    
    /** Returns the arc tangent of [param x] in radians. Use it to get the angle from an angle's tangent in trigonometry.  
     *  The method cannot know in which quadrant the angle should fall. See [method atan2] if you have both `y` and [code skip-lint]x`.  
     *    
     *  If [param x] is between `-PI / 2` and `PI / 2` (inclusive), `atan(tan(x))` is equal to [param x].  
     */
    static function atan(x: float64): float64
    
    /** Returns the arc tangent of `y/x` in radians. Use to get the angle of tangent `y/x`. To compute the value, the method takes into account the sign of both arguments in order to determine the quadrant.  
     *  Important note: The Y coordinate comes first, by convention.  
     *    
     */
    static function atan2(y: float64, x: float64): float64
    
    /** Returns the hyperbolic arc (also called inverse) sine of [param x], returning a value in radians. Use it to get the angle from an angle's sine in hyperbolic space.  
     *    
     */
    static function asinh(x: float64): float64
    
    /** Returns the hyperbolic arc (also called inverse) cosine of [param x], returning a value in radians. Use it to get the angle from an angle's cosine in hyperbolic space if [param x] is larger or equal to 1. For values of [param x] lower than 1, it will return 0, in order to prevent [method acosh] from returning [constant @GDScript.NAN].  
     *    
     */
    static function acosh(x: float64): float64
    
    /** Returns the hyperbolic arc (also called inverse) tangent of [param x], returning a value in radians. Use it to get the angle from an angle's tangent in hyperbolic space if [param x] is between -1 and 1 (non-inclusive).  
     *  In mathematics, the inverse hyperbolic tangent is only defined for -1 < [param x] < 1 in the real set, so values equal or lower to -1 for [param x] return negative [constant @GDScript.INF] and values equal or higher than 1 return positive [constant @GDScript.INF] in order to prevent [method atanh] from returning [constant @GDScript.NAN].  
     *    
     */
    static function atanh(x: float64): float64
    
    /** Returns the square root of [param x], where [param x] is a non-negative number.  
     *    
     *      
     *  **Note:** Negative values of [param x] return NaN ("Not a Number"). in C#, if you need negative inputs, use `System.Numerics.Complex`.  
     */
    static function sqrt(x: float64): float64
    
    /** Returns the floating-point remainder of [param x] divided by [param y], keeping the sign of [param x].  
     *    
     *  For the integer remainder operation, use the `%` operator.  
     */
    static function fmod(x: float64, y: float64): float64
    
    /** Returns the floating-point modulus of [param x] divided by [param y], wrapping equally in positive and negative.  
     *    
     *  Prints:  
     *  [codeblock lang=text]  
     *   (x)  (fmod(x, 1.5))   (fposmod(x, 1.5))  
     *  -1.5           -0.0  |  0.0  
     *  -1.0           -1.0  |  0.5  
     *  -0.5           -0.5  |  1.0  
     *   0.0            0.0  |  0.0  
     *   0.5            0.5  |  0.5  
     *   1.0            1.0  |  1.0  
     *   1.5            0.0  |  0.0  
     *  [/codeblock]  
     */
    static function fposmod(x: float64, y: float64): float64
    
    /** Returns the integer modulus of [param x] divided by [param y] that wraps equally in positive and negative.  
     *    
     *  Prints:  
     *  [codeblock lang=text]  
     *  (i)  (i % 3)   (posmod(i, 3))  
     *  -3        0  |  0  
     *  -2       -2  |  1  
     *  -1       -1  |  2  
     *   0        0  |  0  
     *   1        1  |  1  
     *   2        2  |  2  
     *   3        0  |  0  
     *  [/codeblock]  
     */
    static function posmod(x: int64, y: int64): int64
    
    /** Rounds [param x] downward (towards negative infinity), returning the largest whole number that is not more than [param x]. Supported types: [int], [float], [Vector2], [Vector2i], [Vector3], [Vector3i], [Vector4], [Vector4i].  
     *    
     *  See also [method ceil], [method round], and [method snapped].  
     *      
     *  **Note:** For better type safety, use [method floorf], [method floori], [method Vector2.floor], [method Vector3.floor], or [method Vector4.floor].  
     */
    static function floor(x: any): any
    
    /** Rounds [param x] downward (towards negative infinity), returning the largest whole number that is not more than [param x].  
     *  A type-safe version of [method floor], returning a [float].  
     */
    static function floorf(x: float64): float64
    
    /** Rounds [param x] downward (towards negative infinity), returning the largest whole number that is not more than [param x].  
     *  A type-safe version of [method floor], returning an [int].  
     *      
     *  **Note:** This function is  *not*  the same as `int(x)`, which rounds towards 0.  
     */
    static function floori(x: float64): int64
    
    /** Rounds [param x] upward (towards positive infinity), returning the smallest whole number that is not less than [param x]. Supported types: [int], [float], [Vector2], [Vector2i], [Vector3], [Vector3i], [Vector4], [Vector4i].  
     *    
     *  See also [method floor], [method round], and [method snapped].  
     *      
     *  **Note:** For better type safety, use [method ceilf], [method ceili], [method Vector2.ceil], [method Vector3.ceil], or [method Vector4.ceil].  
     */
    static function ceil(x: any): any
    
    /** Rounds [param x] upward (towards positive infinity), returning the smallest whole number that is not less than [param x].  
     *  A type-safe version of [method ceil], returning a [float].  
     */
    static function ceilf(x: float64): float64
    
    /** Rounds [param x] upward (towards positive infinity), returning the smallest whole number that is not less than [param x].  
     *  A type-safe version of [method ceil], returning an [int].  
     */
    static function ceili(x: float64): int64
    
    /** Rounds [param x] to the nearest whole number, with halfway cases rounded away from 0. Supported types: [int], [float], [Vector2], [Vector2i], [Vector3], [Vector3i], [Vector4], [Vector4i].  
     *    
     *  See also [method floor], [method ceil], and [method snapped].  
     *      
     *  **Note:** For better type safety, use [method roundf], [method roundi], [method Vector2.round], [method Vector3.round], or [method Vector4.round].  
     */
    static function round(x: any): any
    
    /** Rounds [param x] to the nearest whole number, with halfway cases rounded away from 0.  
     *  A type-safe version of [method round], returning a [float].  
     */
    static function roundf(x: float64): float64
    
    /** Rounds [param x] to the nearest whole number, with halfway cases rounded away from 0.  
     *  A type-safe version of [method round], returning an [int].  
     */
    static function roundi(x: float64): int64
    
    /** Returns the absolute value of a [Variant] parameter [param x] (i.e. non-negative value). Supported types: [int], [float], [Vector2], [Vector2i], [Vector3], [Vector3i], [Vector4], [Vector4i].  
     *    
     *      
     *  **Note:** For better type safety, use [method absf], [method absi], [method Vector2.abs], [method Vector2i.abs], [method Vector3.abs], [method Vector3i.abs], [method Vector4.abs], or [method Vector4i.abs].  
     */
    static function abs(x: any): any
    
    /** Returns the absolute value of float parameter [param x] (i.e. positive value).  
     *    
     */
    static function absf(x: float64): float64
    
    /** Returns the absolute value of int parameter [param x] (i.e. positive value).  
     *    
     */
    static function absi(x: int64): int64
    
    /** Returns the same type of [Variant] as [param x], with `-1` for negative values, `1` for positive values, and `0` for zeros. For `nan` values it returns 0.  
     *  Supported types: [int], [float], [Vector2], [Vector2i], [Vector3], [Vector3i], [Vector4], [Vector4i].  
     *    
     *      
     *  **Note:** For better type safety, use [method signf], [method signi], [method Vector2.sign], [method Vector2i.sign], [method Vector3.sign], [method Vector3i.sign], [method Vector4.sign], or [method Vector4i.sign].  
     */
    static function sign(x: any): any
    
    /** Returns `-1.0` if [param x] is negative, `1.0` if [param x] is positive, and `0.0` if [param x] is zero. For `nan` values of [param x] it returns 0.0.  
     *    
     */
    static function signf(x: float64): float64
    
    /** Returns `-1` if [param x] is negative, `1` if [param x] is positive, and `0` if [param x] is zero.  
     *    
     */
    static function signi(x: int64): int64
    
    /** Returns the multiple of [param step] that is the closest to [param x]. This can also be used to round a floating-point number to an arbitrary number of decimals.  
     *  The returned value is the same type of [Variant] as [param step]. Supported types: [int], [float], [Vector2], [Vector2i], [Vector3], [Vector3i], [Vector4], [Vector4i].  
     *    
     *  See also [method ceil], [method floor], and [method round].  
     *      
     *  **Note:** For better type safety, use [method snappedf], [method snappedi], [method Vector2.snapped], [method Vector2i.snapped], [method Vector3.snapped], [method Vector3i.snapped], [method Vector4.snapped], or [method Vector4i.snapped].  
     */
    static function snapped(x: any, step: any): any
    
    /** Returns the multiple of [param step] that is the closest to [param x]. This can also be used to round a floating-point number to an arbitrary number of decimals.  
     *  A type-safe version of [method snapped], returning a [float].  
     *    
     */
    static function snappedf(x: float64, step: float64): float64
    
    /** Returns the multiple of [param step] that is the closest to [param x].  
     *  A type-safe version of [method snapped], returning an [int].  
     *    
     */
    static function snappedi(x: float64, step: int64): int64
    
    /** Returns the result of [param base] raised to the power of [param exp].  
     *  In GDScript, this is the equivalent of the `**` operator.  
     *    
     */
    static function pow(base: float64, exp: float64): float64
    
    /** Returns the [url=https://en.wikipedia.org/wiki/Natural_logarithm]natural logarithm[/url] of [param x] (base [url=https://en.wikipedia.org/wiki/E_(mathematical_constant)] *e* [/url], with  *e*  being approximately 2.71828). This is the amount of time needed to reach a certain level of continuous growth.  
     *      
     *  **Note:** This is not the same as the "log" function on most calculators, which uses a base 10 logarithm. To use base 10 logarithm, use `log(x) / log(10)`.  
     *    
     *      
     *  **Note:** The logarithm of `0` returns `-inf`, while negative values return `-nan`.  
     */
    static function log(x: float64): float64
    
    /** The natural exponential function. It raises the mathematical constant  *e*  to the power of [param x] and returns it.  
     *   *e*  has an approximate value of 2.71828, and can be obtained with `exp(1)`.  
     *  For exponents to other bases use the method [method pow].  
     *    
     */
    static function exp(x: float64): float64
    static function isNan(x: float64): boolean
    static function isInf(x: float64): boolean
    static function isEqualApprox(a: float64, b: float64): boolean
    static function isZeroApprox(x: float64): boolean
    static function isFinite(x: float64): boolean
    
    /** Returns an "eased" value of [param x] based on an easing function defined with [param curve]. This easing function is based on an exponent. The [param curve] can be any floating-point number, with specific values leading to the following behaviors:  
     *  [codeblock lang=text]  
     *  - Lower than -1.0 (exclusive): Ease in-out  
     *  - -1.0: Linear  
     *  - Between -1.0 and 0.0 (exclusive): Ease out-in  
     *  - 0.0: Constant  
     *  - Between 0.0 to 1.0 (exclusive): Ease out  
     *  - 1.0: Linear  
     *  - Greater than 1.0 (exclusive): Ease in  
     *  [/codeblock]  
     *  [url=https://raw.githubusercontent.com/godotengine/godot-docs/master/img/ease_cheatsheet.png]ease() curve values cheatsheet[/url]  
     *  See also [method smoothstep]. If you need to perform more advanced transitions, use [method Tween.interpolate_value].  
     */
    static function ease(x: float64, curve: float64): float64
    static function stepDecimals(x: float64): int64
    
    /** Linearly interpolates between two values by the factor defined in [param weight]. To perform interpolation, [param weight] should be between `0.0` and `1.0` (inclusive). However, values outside this range are allowed and can be used to perform  *extrapolation* . If this is not desired, use [method clampf] to limit [param weight].  
     *  Both [param from] and [param to] must be the same type. Supported types: [int], [float], [Vector2], [Vector3], [Vector4], [Color], [Quaternion], [Basis], [Transform2D], [Transform3D].  
     *    
     *  See also [method inverse_lerp] which performs the reverse of this operation. To perform eased interpolation with [method lerp], combine it with [method ease] or [method smoothstep]. See also [method remap] to map a continuous series of values to another.  
     *      
     *  **Note:** For better type safety, use [method lerpf], [method Vector2.lerp], [method Vector3.lerp], [method Vector4.lerp], [method Color.lerp], [method Quaternion.slerp], [method Basis.slerp], [method Transform2D.interpolate_with], or [method Transform3D.interpolate_with].  
     */
    static function lerp(from: any, to: any, weight: any): any
    
    /** Linearly interpolates between two values by the factor defined in [param weight]. To perform interpolation, [param weight] should be between `0.0` and `1.0` (inclusive). However, values outside this range are allowed and can be used to perform  *extrapolation* . If this is not desired, use [method clampf] on the result of this function.  
     *    
     *  See also [method inverse_lerp] which performs the reverse of this operation. To perform eased interpolation with [method lerp], combine it with [method ease] or [method smoothstep].  
     */
    static function lerpf(from: float64, to: float64, weight: float64): float64
    static function cubicInterpolate(from: float64, to: float64, pre: float64, post: float64, weight: float64): float64
    static function cubicInterpolateAngle(from: float64, to: float64, pre: float64, post: float64, weight: float64): float64
    static function cubicInterpolateInTime(from: float64, to: float64, pre: float64, post: float64, weight: float64, toT: float64, preT: float64, postT: float64): float64
    static function cubicInterpolateAngleInTime(from: float64, to: float64, pre: float64, post: float64, weight: float64, toT: float64, preT: float64, postT: float64): float64
    static function bezierInterpolate(start: float64, control1: float64, control2: float64, end: float64, t: float64): float64
    static function bezierDerivative(start: float64, control1: float64, control2: float64, end: float64, t: float64): float64
    static function angleDifference(from: float64, to: float64): float64
    static function lerpAngle(from: float64, to: float64, weight: float64): float64
    static function inverseLerp(from: float64, to: float64, weight: float64): float64
    
    /** Maps a [param value] from range `[istart, istop]` to `[ostart, ostop]`. See also [method lerp] and [method inverse_lerp]. If [param value] is outside `[istart, istop]`, then the resulting value will also be outside `[ostart, ostop]`. If this is not desired, use [method clamp] on the result of this function.  
     *    
     *  For complex use cases where multiple ranges are needed, consider using [Curve] or [Gradient] instead.  
     *      
     *  **Note:** If `istart == istop`, the return value is undefined (most likely NaN, INF, or -INF).  
     */
    static function remap(value: float64, istart: float64, istop: float64, ostart: float64, ostop: float64): float64
    
    /** Returns a smooth cubic Hermite interpolation between `0` and `1`.  
     *  For positive ranges (when `from <= to`) the return value is `0` when `x <= from`, and `1` when `x >= to`. If [param x] lies between [param from] and [param to], the return value follows an S-shaped curve that smoothly transitions from `0` to `1`.  
     *  For negative ranges (when `from > to`) the function is mirrored and returns `1` when `x <= to` and `0` when `x >= from`.  
     *  This S-shaped curve is the cubic Hermite interpolator, given by `f(y) = 3*y^2 - 2*y^3` where `y = (x-from) / (to-from)`.  
     *    
     *  Compared to [method ease] with a curve value of `-1.6521`, [method smoothstep] returns the smoothest possible curve with no sudden changes in the derivative. If you need to perform more advanced transitions, use [Tween] or [AnimationPlayer].  
     *  [url=https://raw.githubusercontent.com/godotengine/godot-docs/master/img/smoothstep_ease_comparison.png]Comparison between smoothstep() and ease(x, -1.6521) return values[/url]  
     *  [url=https://raw.githubusercontent.com/godotengine/godot-docs/master/img/smoothstep_range.webp]Smoothstep() return values with positive, zero, and negative ranges[/url]  
     */
    static function smoothstep(from: float64, to: float64, x: float64): float64
    static function moveToward(from: float64, to: float64, delta: float64): float64
    static function rotateToward(from: float64, to: float64, delta: float64): float64
    static function degToRad(deg: float64): float64
    static function radToDeg(rad: float64): float64
    static function linearToDb(lin: float64): float64
    static function dbToLinear(db: float64): float64
    
    /** Wraps the [Variant] [param value] between [param min] and [param max]. Can be used for creating loop-alike behavior or infinite surfaces.  
     *  Variant types [int] and [float] are supported. If any of the arguments is [float] this function returns a [float], otherwise it returns an [int].  
     *    
     */
    static function wrap(value: any, min: any, max: any): any
    
    /** Wraps the integer [param value] between [param min] and [param max]. Can be used for creating loop-alike behavior or infinite surfaces.  
     *    
     *    
     */
    static function wrapi(value: int64, min: int64, max: int64): int64
    
    /** Wraps the float [param value] between [param min] and [param max]. Can be used for creating loop-alike behavior or infinite surfaces.  
     *    
     *    
     *    
     *      
     *  **Note:** If [param min] is `0`, this is equivalent to [method fposmod], so prefer using that instead.  
     *  [method wrapf] is more flexible than using the [method fposmod] approach by giving the user control over the minimum value.  
     */
    static function wrapf(value: float64, min: float64, max: float64): float64
    
    /** Returns the maximum of the given numeric values. This function can take any number of arguments.  
     *    
     *      
     *  **Note:** When using this on vectors it will  *not*  perform component-wise maximum, and will pick the largest value when compared using `x < y`. To perform component-wise maximum, use [method Vector2.max], [method Vector2i.max], [method Vector3.max], [method Vector3i.max], [method Vector4.max], and [method Vector4i.max].  
     */
    static function max(...varargs: any[]): any
    
    /** Returns the maximum of two [int] values.  
     *    
     */
    static function maxi(a: int64, b: int64): int64
    
    /** Returns the maximum of two [float] values.  
     *    
     */
    static function maxf(a: float64, b: float64): float64
    
    /** Returns the minimum of the given numeric values. This function can take any number of arguments.  
     *    
     *      
     *  **Note:** When using this on vectors it will  *not*  perform component-wise minimum, and will pick the smallest value when compared using `x < y`. To perform component-wise minimum, use [method Vector2.min], [method Vector2i.min], [method Vector3.min], [method Vector3i.min], [method Vector4.min], and [method Vector4i.min].  
     */
    static function min(...varargs: any[]): any
    
    /** Returns the minimum of two [int] values.  
     *    
     */
    static function mini(a: int64, b: int64): int64
    
    /** Returns the minimum of two [float] values.  
     *    
     */
    static function minf(a: float64, b: float64): float64
    
    /** Clamps the [param value], returning a [Variant] not less than [param min] and not more than [param max]. Any values that can be compared with the less than and greater than operators will work.  
     *    
     *      
     *  **Note:** For better type safety, use [method clampf], [method clampi], [method Vector2.clamp], [method Vector2i.clamp], [method Vector3.clamp], [method Vector3i.clamp], [method Vector4.clamp], [method Vector4i.clamp], or [method Color.clamp] (not currently supported by this method).  
     *      
     *  **Note:** When using this on vectors it will  *not*  perform component-wise clamping, and will pick [param min] if `value < min` or [param max] if `value > max`. To perform component-wise clamping use the methods listed above.  
     */
    static function clamp(value: any, min: any, max: any): any
    
    /** Clamps the [param value], returning an [int] not less than [param min] and not more than [param max].  
     *    
     */
    static function clampi(value: int64, min: int64, max: int64): int64
    
    /** Clamps the [param value], returning a [float] not less than [param min] and not more than [param max].  
     *    
     */
    static function clampf(value: float64, min: float64, max: float64): float64
    static function nearestPo2(value: int64): int64
    
    /** Wraps [param value] between `0` and the [param length]. If the limit is reached, the next value the function returns is decreased to the `0` side or increased to the [param length] side (like a triangle wave). If [param length] is less than zero, it becomes positive.  
     *    
     */
    static function pingpong(value: float64, length: float64): float64
    
    /** Randomizes the seed (or the internal state) of the random number generator. The current implementation uses a number based on the device's time.  
     *      
     *  **Note:** This function is called automatically when the project is run. If you need to fix the seed to have consistent, reproducible results, use [method seed] to initialize the random number generator.  
     */
    static function randomize(): void
    
    /** Returns a random unsigned 32-bit integer. Use remainder to obtain a random value in the interval `[0, N - 1]` (where N is smaller than 2^32).  
     *    
     */
    static function randi(): int64
    
    /** Returns a random floating-point value between `0.0` and `1.0` (inclusive).  
     *    
     */
    static function randf(): float64
    static function randiRange(from: int64, to: int64): int64
    static function randfRange(from: float64, to: float64): float64
    
    /** Returns a [url=https://en.wikipedia.org/wiki/Normal_distribution]normally-distributed[/url], pseudo-random floating-point value from the specified [param mean] and a standard [param deviation]. This is also known as a Gaussian distribution.  
     *      
     *  **Note:** This method uses the [url=https://en.wikipedia.org/wiki/Box%E2%80%93Muller_transform]Box-Muller transform[/url] algorithm.  
     */
    static function randfn(mean: float64, deviation: float64): float64
    
    /** Sets the seed for the random number generator to [param base]. Setting the seed manually can ensure consistent, repeatable results for most random functions.  
     *    
     */
    static function seed(base: int64): void
    static function randFromSeed(seed: int64): PackedInt64Array
    
    /** Returns a [WeakRef] instance holding a weak reference to [param obj]. Returns an empty [WeakRef] instance if [param obj] is `null`. Prints an error and returns `null` if [param obj] is neither [Object]-derived nor `null`.  
     *  A weak reference to an object is not enough to keep the object alive: when the only remaining references to a referent are weak references, garbage collection is free to destroy the referent and reuse its memory for something else. However, until the object is actually destroyed the weak reference may return the object even if there are no strong references to it.  
     */
    static function weakref(obj: any): any
    
    /** Returns the internal type of the given [param variable], using the [enum Variant.Type] values.  
     *    
     *  See also [method type_string].  
     */
    // [INVALID_NAME]: static function typeof(variable: any): int64
    static function typeConvert(variant: any, type: int64): any
    
    /** Converts one or more arguments of any [Variant] type to a [String] in the best way possible.  
     *    
     */
    static function str(...varargs: any[]): string
    static function errorString(error: int64): string
    static function typeString(type: int64): string
    
    /** Converts one or more arguments of any type to string in the best way possible and prints them to the console.  
     *    
     *      
     *  **Note:** Consider using [method push_error] and [method push_warning] to print error and warning messages instead of [method print] or [method print_rich]. This distinguishes them from print messages used for debugging purposes, while also displaying a stack trace when an error or warning is printed. See also [member Engine.print_to_stdout] and [member ProjectSettings.application/run/disable_stdout].  
     */
    static function print(...varargs: any[]): void
    static function printRich(...varargs: any[]): void
    
    /** Prints one or more arguments to strings in the best way possible to standard error line.  
     *    
     */
    static function printerr(...varargs: any[]): void
    
    /** Prints one or more arguments to the console with a tab between each argument.  
     *    
     */
    static function printt(...varargs: any[]): void
    
    /** Prints one or more arguments to the console with a space between each argument.  
     *    
     */
    static function prints(...varargs: any[]): void
    
    /** Prints one or more arguments to strings in the best way possible to the OS terminal. Unlike [method print], no newline is automatically added at the end.  
     *      
     *  **Note:** The OS terminal is  *not*  the same as the editor's Output dock. The output sent to the OS terminal can be seen when running Godot from a terminal. On Windows, this requires using the `console.exe` executable.  
     *    
     */
    static function printraw(...varargs: any[]): void
    static function printVerbose(...varargs: any[]): void
    static function pushError(...varargs: any[]): void
    static function pushWarning(...varargs: any[]): void
    static function varToStr(variable: any): string
    static function strToVar(string_: string): any
    static function varToBytes(variable: any): PackedByteArray
    static function bytesToVar(bytes: PackedByteArray | byte[] | ArrayBuffer): any
    static function varToBytesWithObjects(variable: any): PackedByteArray
    static function bytesToVarWithObjects(bytes: PackedByteArray | byte[] | ArrayBuffer): any
    
    /** Returns the integer hash of the passed [param variable].  
     *    
     */
    static function hash(variable: any): int64
    static function instanceFromId(instanceId: int64): GObject
    static function isInstanceIdValid(id: int64): boolean
    static function isInstanceValid(instance: any): boolean
    static function ridAllocateId(): int64
    static function ridFromInt64(base: int64): Rid
    static function isSame(a: any, b: any): boolean
    
    /** shorthand for getting project settings */
    function GLOBAL_GET(entry_path: StringName): any
    
    /** shorthand for getting editor settings  
     *  NOTE: calling before EditorSettings created will cause null reference exception.  
     */
    function EDITOR_GET(entry_path: StringName): any
}
