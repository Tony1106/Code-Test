import Vue from "vue";
export const LayoutEventBus = new Vue();

//Initilize state
export const store = {
  state: {
    isSpinnerOn: false
  }
};
//Listen to event
LayoutEventBus.$on("spinner", status => {
  status = status.toLowerCase();
  if (status === "on") store.state.isSpinnerOn = true;
  if (status === "off") store.state.isSpinnerOn = false;
});
