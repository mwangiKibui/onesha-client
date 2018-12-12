import Badge from "../components/Common/Badge";
import BaseAlert from "../components/Common/BaseAlert";
import BaseButton from "../components/Common/BaseButton";
import BaseCheckbox from "../components/Common/BaseCheckbox";
import BaseInput from "../components/Common/BaseInput";
import BasePagination from "../components/Common/BasePagination";
import BaseProgress from "../components/Common/BaseProgress";
import BaseRadio from "../components/Common/BaseRadio";
import BaseSlider from "../components/Common/BaseSlider";
import BaseSwitch from "../components/Common/BaseSwitch";
import Card from "../components/Common/Card";
import Icon from "../components/Common/Icon";

export default {
  install(Vue) {
    Vue.component(Badge.name, Badge);
    Vue.component(BaseAlert.name, BaseAlert);
    Vue.component(BaseButton.name, BaseButton);
    Vue.component(BaseInput.name, BaseInput);
    Vue.component(BaseCheckbox.name, BaseCheckbox);
    Vue.component(BasePagination.name, BasePagination);
    Vue.component(BaseProgress.name, BaseProgress);
    Vue.component(BaseRadio.name, BaseRadio);
    Vue.component(BaseSlider.name, BaseSlider);
    Vue.component(BaseSwitch.name, BaseSwitch);
    Vue.component(Card.name, Card);
    Vue.component(Icon.name, Icon);
  }
};
