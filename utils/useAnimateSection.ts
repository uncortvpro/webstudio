// eslint-disable-next-line import/no-extraneous-dependencies
import { useElementVisibility } from '@vueuse/core';

export function useAnimateSection(section: Ref, isShowSection: Ref<boolean>) {
  const sectionVisible = useElementVisibility(section);
  const visibleSection = () => {
    if (sectionVisible.value) {
      isShowSection.value = true;
    }
  };
  watchDeep(sectionVisible, () => {
    console.log(sectionVisible.value);

    visibleSection();
  });
}
