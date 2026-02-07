// types/account.ts
export interface Account {
    id: string; // UUID для идентификации
    label: string; // Метка (сырая строка)
    type: AccountType; // 'ldap' | 'local'
    login: string;
    password: string | null;
    errors?: Record<string, string>; // Ошибки валидации
}

export type AccountType = 'ldap' | 'local';