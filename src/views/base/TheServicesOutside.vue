<template>
  <v-container>
    <v-card class="my-4">
      <v-card-text>
        <v-row>
          <v-col cols=12 md=6 order="1" order-md="0">
            <v-card flat>
              <v-card-title>Sortez les grands moyens</v-card-title>
              <v-card-text>Épattez la gallerie en embelissant votre cours. Vous en profiterez</v-card-text>
              <v-card-actions>
                <v-chip-group
                column
                active-class="primary--text"
              >
              <v-chip>Patio</v-chip>
              <v-chip>Terrase</v-chip>
                </v-chip-group>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols=12 md=6 order="0" order-md="1">
            <v-img src='https://picsum.photos/500/300?image=2'/>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-card class="my-4">
      <v-container fluid>
        <v-row>
          <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="6" md=3>
            <v-card flat tile class="d-flex">
              <v-img
                :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                aspect-ratio="1"
                class="grey lighten-2"
              >
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>
