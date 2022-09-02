<template>
    <ion-page>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar color="primary">
                    <ion-title>Previous Matches</ion-title>
                </ion-toolbar>
            </ion-header>
          
            <div class="container">
                <ion-searchbar />

                <ion-list>
                    <ion-item>
                        <ion-label>03/09/2022 - 2:22 AM</ion-label>
                        <ion-button color="tertiary" slot="end">
                            <ion-icon :icon="eyeOutline" />
                        </ion-button>
                    </ion-item>
                </ion-list>
            </div>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, IonList, IonItem, IonLabel, IonButton } from '@ionic/vue';
import { add, eyeOutline } from "ionicons/icons";

export default  defineComponent({
    name: 'TabPrevious',
    components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonSearchbar, IonList, IonItem, IonLabel, IonButton },

    setup() {
        return {
            add, eyeOutline
        }
    }
});
</script>
