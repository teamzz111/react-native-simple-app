import analytics from '@react-native-firebase/analytics';

export function addAnalytics(id, item) {
  analytics().logEvent('clickGeo', {
    id: id,
    item: item
  })
}