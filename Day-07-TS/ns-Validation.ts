/**
 * Created by Dominic on 2/28/2017.
 */
namespace Validation {
export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
};