export const getImgs = (r) => {
    let banners = []
    r.keys().forEach(key => {
        banners = [...banners, r(key)]
      })
    return banners
}