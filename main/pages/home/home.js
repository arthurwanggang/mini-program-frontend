// pages/home/home.js


import { Theme }      from "../model/theme.js";
import { Banner }     from "../model/banner.js";
import { Category }   from "../model/category.js";
import { Activity }   from "../model/activity.js";

Page({
  
  /**
   * Page initial data
   */
  data: {
    themeA  : null,
    bannerB : null,
    themesSpu : null,
    activity  : null,
    themesE   : null,
    themesF   : null,
    bannerG   : null,
    themesH   : null,
    grid    : []
  },

  /**
   * Lifecycle function--Called when page load
   */
  async onLoad(options) {
    this.initAllData();
  },
  async initAllData() {
    const theme = new Theme();
    await theme.getThemes();
    const themesA       = theme.getHomeLocationA();
    const themesE       = theme.getHomeLocationE();
    const themesF       = theme.getHomeLocationF();
    const bannerG       = await Banner.getHomeLocationG();
    const themesH       = theme.getHomeLocationH();
    const banenrB       = await Banner.getHomeLocationB();
    const grid          = await Category.getGridCategoryC();
    const activity      = await Activity.getHomeLocationD();
    let themeSpu = [];
    if (themesE.length > 0 && themesE[0].online) {
      const data  = await Theme.getHomeLocationESpu();
      if (data) {
        themeSpu = data.spu_list.slice(0, 8);
      }
    }
    console.log("bannerG", bannerG);
    this.setData({
      themeA   : themesA[0],
      bannerB  : banenrB,
      themesE  : themesE[0],
      themesSpu: themeSpu,
      grid     : grid.roots.slice(0, 5),
      activity : activity,
      themesF  : themesF[0],
      bannerG,
      themesH
    })
  }
})