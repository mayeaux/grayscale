// clang -g -O2 -std=c11 -Wall -framework ApplicationServices
// https://stackoverflow.com/questions/14163788/how-does-on-screen-color-inversion-work-in-os-x
#include <stdio.h>
#include <ApplicationServices/ApplicationServices.h>

CG_EXTERN bool CGDisplayUsesForceToGray(void);
CG_EXTERN void CGDisplayForceToGray(bool forceToGray);

int
main(int argc, char** argv)
{
    bool isGrayscale = CGDisplayUsesForceToGray();
    printf("isGrayscale = %d\n", isGrayscale);
    // switch to grayscale if it's not on
    if(isGrayscale == 1){
        CGDisplayForceToGray(false);
    // already turned on, dont need to do anything
    } else {
        printf("No need to turn gray\n");
    }
    printf("Grayscale is now: %d\n", CGDisplayUsesForceToGray());

    return 0;
}
