<template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="tab1" href="/tabs/match">
                    <ion-icon :icon="baseballOutline" />
                    <ion-label>Match</ion-label>
                </ion-tab-button>
                  
                <ion-tab-button tab="tab2" href="/tabs/squad">
                    <ion-icon :icon="peopleOutline" />
                    <ion-label>Squad</ion-label>
                </ion-tab-button>
                
                <ion-tab-button tab="tab3" href="/tabs/previous">
                    <ion-icon :icon="calendarOutline" />
                    <ion-label>Previous</ion-label>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { baseballOutline, peopleOutline, calendarOutline } from 'ionicons/icons';

export default defineComponent({
    name: 'TabsPage',
    components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
    setup() {
        return {
            baseballOutline, peopleOutline, calendarOutline
        }
    }
});
</script>
