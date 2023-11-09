import create from 'zustand/index';

const useStore = create(set => ({
    user: null,
    setUser: (value) => set(state => ({ user: value })),
    id: 'no',
    setID: (value)=> set((state)=>({id: value}))
}));

export default useStore;