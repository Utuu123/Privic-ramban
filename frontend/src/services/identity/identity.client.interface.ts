import type {
    ConfirmCodeResponse,
    PhoneNumber,
    Profile,
    RegisterEmailResponse,
    RegisterPhoneResponse,
    SendCodeResponse,
} from "../../domain/identity/identity";

export interface IIdentityClient {
    getProfile(): Promise<Profile>;
    registerPhoneNumber(phoneNumber: PhoneNumber): Promise<RegisterPhoneResponse>;
    registerEmailAddress(address: string): Promise<RegisterEmailResponse>;
    sendVerificationCode(id: bigint): Promise<SendCodeResponse>;
    confirmVerificationCode(id: bigint, code: string): Promise<ConfirmCodeResponse>;
}
