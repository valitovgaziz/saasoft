// stores/accountStore.ts
import { defineStore } from 'pinia';

export const useAccountStore = defineStore('accounts', {
    state: () => ({
        accounts: [] as Account[]
    }),
    actions: {
        addAccount() { /* логика добавления */ },
        removeAccount(id: string) { /* удаление */ },
        updateAccount(account: Account) { /* обновление */ },
        validateAccount(account: Account) { /* валидация */ }
    },
    persist: true // Для сохранения в localStorage
});