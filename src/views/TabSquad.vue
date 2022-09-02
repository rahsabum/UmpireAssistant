<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <ion-fab vertical="bottom" horizontal="end" slot="fixed">
                <ion-fab-button color="dark">
                    <ion-icon :icon="add"></ion-icon>
                </ion-fab-button>
            </ion-fab>

            <ion-header collapse="condense">
                <ion-toolbar color="primary">
                    <ion-title>All Players</ion-title>
                </ion-toolbar>
            </ion-header>
          
            <div class="container">
                <ion-searchbar />

                <ion-list>
                    <ion-item>
                        <ion-label>Name</ion-label>
                        <ion-button color="danger" slot="end">
                            <ion-icon :icon="trashOutline" />
                        </ion-button>
                    </ion-item>
                </ion-list>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonSearchbar, IonList, IonItem, IonLabel, IonButton } from '@ionic/vue';
import { add, trashOutline } from "ionicons/icons";

export default  defineComponent({
    name: 'TabSquad',
    components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonSearchbar, IonList, IonItem, IonLabel, IonButton },

    setup() {
        return {
            add, trashOutline
        }
    }
});
</script>
