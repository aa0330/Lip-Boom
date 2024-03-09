import { globalRouters } from '@/route'

export const goto = (path) => {
    globalRouters.navigate(path)
}
