<template>
    <v-footer padless dark>
            <v-card
            flat
            tile
            class="text-center"
            width=100%
            >
                <v-row justify="center" align="center" class="mx-0">
                    <v-col cols=12 md=2 class="px-16 px-sm-10">                            
                        <v-img src="@/assets/logo.png" />
                    </v-col>
                    <v-col cols=12 md=10>
                        <v-row>
                            <v-col cols=6 md=3 v-for="(info,infoIndex) in $store.state.infos" :key='infoIndex'>                            
                                <v-icon class='text-center'>{{info.icon}}</v-icon>
                                <br>
                                <div v-html='info.content'>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>

                <v-divider></v-divider>

                <v-card-text>
                    {{ new Date().getFullYear() }} — <strong>Renovation inc</strong>
                </v-card-text>
            </v-card>

    </v-footer>
</template>

<script>
export default {
  data: () => ({
  })
};
</script>

<style>
</style>