import {createBrowserRouter, Navigate} from "react-router-dom";

import {AlbumsPage} from "./pages/AlbumsPage";
import {CommentsPage} from "./pages/CommentsPageContainer/CommentsPage";
import {TodosPage} from "./pages/TodosPage";
import {MainLayout} from "./layouts/MainLayout";
import {PostsPage} from "./pages/PostsPage";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element:<Navigate to={'todos'}/>
            },
            {
                path: 'todos', element: <TodosPage/>
            },
            {
                path: 'albums', element: <AlbumsPage/>
            },
            {
                path: 'comments', element: <CommentsPage/>, children: [
                    {
                        path: 'posts', element: <PostsPage/>
                    }
                ]
            }
        ]
    }
])

export {
    router
}