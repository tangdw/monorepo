const TIMEOUT = 10000

let g = window as any,
  d = g.document,
  id = 0,
  el = (type: string) => d.createElement(type)

export default (url: string) => {
  return new Promise((resolve, reject) => {
    let fn = `callback_${++id}`,
      b = d.body || el('body'),
      s = el('script'),
      timer,
      err: string

    g[fn] = (data: any) => {
      clearTimeout(timer)
      err ? reject(err) : resolve(data)
      b.removeChild(s)
      s = g[fn] = null
      delete g[fn]
    }

    timer = setTimeout(() => {
      err = 'Timed out'
      g[fn]()
    }, TIMEOUT)

    s.src = url.replace(/{callback}/i, fn)
    b.appendChild(s)
  })
}
