export const useDialog = () => useState("dialog-collapse", () => true);
export const useSidebar = () => useState("sidebar-collapse", () => false);
export const useAuth = () => {
    const authUser = useState('auth_user', () => null)
    return { authUser }
}
export const useContactGroups = ()=>useState('groups',()=>null);
export const useContacts = ()=>useState('contacts',()=>null);