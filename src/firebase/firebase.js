import analytics from '@react-native-firebase/analytics';

/**
 * 
 * @param {string} id  - identifier analytic
 * @param {string} item - item to save, clicked.
 */

export function addAnalytics(id, item) {
  analytics().logEvent('clickGeo', {
    id: id,
    item: item
  })
}