import create from 'zustand/index';

const useStore = create(set => ({
    user: null,
    setUser: (value) => set(state => ({ user: value })),
    id: 'no',
    setID: (value)=> set((state)=>({id: value})),
    idComment: null,
    setIdComment: (value) =>set((state)=>({idComment: value})),
    isModel: false,
    setIsModel: (value)=> set((state)=>({isModel: value})),
    images: null,
    setImages: (value)=>set((state)=>({images: value})),
    frend: null,
    setFrend: (value)=>set((state)=>({frend: value})),
}));

export default useStore;