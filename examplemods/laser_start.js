ModAPI.registerMod("LaserStartItem", "1.0", "YourName");

window.laserStartX = null;
window.laserStartY = null;
window.laserStartZ = null;

ModAPI.addEventListener("init", function() {
    ModAPI.items.registerNewItem("laser_emitter", "レーザー送信機");
});

ModAPI.addEventListener("useitem", function(event) {
    if (event.item && event.item.id === "laser_emitter") {
        window.laserStartX = event.targetX;
        window.laserStartY = event.targetY;
        window.laserStartZ = event.targetZ;
        ModAPI.displayToChat("§c[レーザー送信機] 始点を設置しました。終点を設置してください...");
    }
});
