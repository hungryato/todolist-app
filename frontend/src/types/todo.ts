export interface Tag {
    name: string;
}

export interface Todo {
    id: number;
    title: string;
    description?: string;
    completed: boolean;
    created_at: string;
    completed_at?: string;
    tags?: string[] | Tag[];
}