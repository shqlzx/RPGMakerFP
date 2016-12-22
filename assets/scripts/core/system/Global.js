const MoveState = cc.Enum({
    Stand: 0,
    Up: 8,
    Right: 6,
    Down: 2,
    Left: 4
});
const Direction = cc.Enum({
    None: 0,
    Up: 8,
    Right: 6,
    Down: 2,
    Left: 4
});
const EventType = cc.Enum({
    Dialogue: 1,
    Shop: 2,
    SwitchScene: 3,
    ScrollMap: 5,
    MoveActor: 6,
    ShowActor: 7,
    SetDone: 8,
    SetActorPos: 9,
    ShowActorBalloon: 10,
    ShowItemBox: 11,
    AddItem: 12,
    ShowMessage: 13,
});
var RangeType = cc.Enum({
    POINT: 1,
    SQUARE: 2,
    RHOMBUS: 3,
    LINE: 4,
    FRONTSQUARE: 5,
    FRONTRHOMBUS: 6,
    CROSS: 7,
    WALL: 8
});
const GridPerStep = 2;
const MoveStep = 32;
const MoveTime = 0.25;
const ActorOffset = 4;
const MapList = {
    "1": "InnFirstFloor",
    "2": "InnSecondFloor",
    "3": "ForestOne",
    "4": "ForestTwo",
    "5": "ForestThree",
    "6": "ForestFour",
    "7": "Camp",
    "99": "Ending"
};
const NodeMap = {
    "1": "TouchPanel",
    "2": "MainButton",
    "default": ["TouchPanel", "MainButton"]
}
const AudioPath = 'resources/Audio/'
module.exports = {
    MoveState: MoveState,
    Direction: Direction,
    EventType: EventType,
    RangeType: RangeType,
    GridPerStep: GridPerStep,
    MoveStep: MoveStep,
    MoveTime: MoveTime,
    MapList: MapList,
    ActorOffset: ActorOffset,
    NodeMap: NodeMap,
    AudioPath: AudioPath
};