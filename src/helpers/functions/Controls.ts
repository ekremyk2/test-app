const _IsUndefined = (input: any) => input === void 0 || typeof input === 'undefined';

const _IsNull = (input: any) => input === null;

const _IsNullOrUndefined = (input: any) => _IsUndefined(input) || _IsNull(input);

const _IsString = (input: any) => !_IsNullOrUndefined(input) && typeof input === 'string';

const _IsEmptyString = (input: any) => _IsString(input) && input.trim() === '';

const _IsStringEmptyNullOrUndefined = (input: any) => _IsEmptyString(input) || _IsNullOrUndefined(input);

export const Controls = {
  IsUndefined: _IsUndefined,
  IsNull: _IsNull,
  IsNullOrUndefined: _IsNullOrUndefined,
  IsString: _IsString,
  IsEmptyString: _IsEmptyString,
  IsStringEmptyNullOrUndefined: _IsStringEmptyNullOrUndefined,
};
