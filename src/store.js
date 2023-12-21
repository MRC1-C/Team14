import create from 'zustand/index';

const useStore = create(set => ({
    user: null,
    setUser: (value) => set(state => ({ user: value })),
    id: 'no',
    setID: (value)=> set((state)=>({id: value})),
    idComment: null,
    setIdComment: (value) =>set((state)=>({idComment: value})),
    isModel: false,
    setIsModel: (value)=> set((state)=>({isModel: value}))

}));

export default useStore;