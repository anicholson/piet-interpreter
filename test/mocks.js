import { COLORS, COLORS_BY_SHORTCUT } from '../src/Constants'

const defaultCodelObj = (i, j, color) => {
    return {
        color: color || '#FFF',
        loc: {
            x: j,
            y: i
        }
    }
}

export const mockSource = (height, width, src) => {
    if (!src) {
        return [...Array(height)].map((row, i) => {
            return [...Array(width)].map((col, j) => {
                return {
                    color: '#FFF',
                    x: j,
                    y: i
                }
            })
        })
    }
    
    let NEW_SRC;
    if (src.length >= height)
        NEW_SRC = src
    else
        NEW_SRC = src.concat([...Array(height - src.length)].map(_ => [...Array(width)]))

    return NEW_SRC.map((row,i) => {
        while (row.length < width) {
            row.push(undefined)
        }

        return row.map((tile,j) => {
            let color;
            if (tile && COLORS_BY_SHORTCUT.hasOwnProperty(tile)) {
                const c = COLORS[COLORS_BY_SHORTCUT[tile]]
                if (c === undefined) {
                    throw new Error(`tile: ${tile}`)
                } else {
                    color = c
                }
            } else {
                color = '#FFF'
            }
            return {
                color,
                x: j,
                y: i
            }
        })
    })
}