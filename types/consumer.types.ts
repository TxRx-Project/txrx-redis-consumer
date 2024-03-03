/**
 * Dictates the XREADGROUP/XREAD arguments.
 */
export type Consumable = {
    /**
     * The consuming group, a non defined value would hint XREAD instead of XREADGROUP.
     */
    group?: string;
    /**
     * The consumer's name, a non defined value would hint XREAD instead of XREADGROUP.
     */
    consumer?: string;
    /**
     * Number of elements to be retrieved per XREAD/XREADGROUP.
     */
    count: number;
    /**
     * Number of milliseconds to block the execution, only applies to XREADGROUP.
     */
    block: number;
    /**
     * Name of the stream to be consumed.
     */
    stream: string
    /**
     * Mode of consumption, either PEL or NORMAL (new messages only).
     */
    mode: ConsumingMode;
    /**
     * Keep track of the last consumed id, only applies to PEL mode.
     */
    id: string;
};

/**
 * Represents the elements of the XREADGROUP/XREAD result.
 */
export type Consumption = [
    string,
    Consumption[] | string[] | null
];

/**
 * A simple string based key/value data structure to store XREAD/XREADGROUP messages payload.
 */
export type Payload = {
    [key:string]: string;
};

/**
 * The representation of a message to be consumed.
 */
export type ConsumeItem = {
    /**
     * The name of the stream where this message belongs.
     */
    stream: string,
    /**
     * The id of the message within its stream.
     */
    id: string,
    /**
     * The data attached to the message as a simple string to string map representation.
     */
    payload: Payload,
};

/**
 * Consuming mode for XREAD/XREADGROUP.
 */
export enum ConsumingMode {
    PEL,
    NORMAL,
}
