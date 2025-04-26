// ✅
import { parse } from 'url';

export function pathMatch(url, path) {
    try {
        return parse(url).pathname === path;
    } catch (e) {
        return false;
    }
}